import React, { useState, useEffect, useContext } from "react";
import Router from "next/router";
import Link from "next/link";
import { renderToString } from "react-dom/server";

import { Stores } from "../store";

import styles from "../styles/components/History.module.css";
import html2canvas from "html2canvas";
import Nav from "./Nav";
import Spinner from "./Spinner";
import DetailPlan from "./DetailPlan";
import Modal from "./Modal";
import Button from "./Button";
import Card from "./Card";
import { getAuth, getPlanHistory } from "../helper";
import moment from "moment";
import Invoice from "./Invoice";

export default function History({ type }) {
  const { state, dispatch, actions } = useContext(Stores);
  const [history, setHistory] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [pdfDownload, setPdfDownload] = useState(false);

  let jsPDF = null;

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("jspdf").then((module) => {
        jsPDF = module.default;
      });
    }
  });

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const userMenu = JSON.parse(localStorage.getItem("menu"));
    if (userData) {
      getAuth(userData)
        .then((data) => {
          var auth = data.filter((val) => {
            return val.moduleCode === type;
          });
          var menu = userMenu.filter((val) => {
            return val.moduleCode === type;
          });
          if (!(auth && menu)) {
            Router.push("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      Router.push("/");
    }
  }, [dispatch]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));

    if (type === "PLAN") {
      getPlanHistory(userData)
        .then((data) => {
          setHistory(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (type === "UNPLAN") {
      setLoading(false);
    } else if (type === "SPREADING") {
      setLoading(false);
    }
  }, [dispatch]);

  const print = () => {
    var data = {
      name: "me",
    };
    const divToDisplay = document.getElementById("invoice");
    html2canvas(divToDisplay, { scale: 5 }).then((canvas) => {
      const image = { type: "jpeg", quality: 0.98 };
      const margin = [0.5, 0.5];

      var imgWidth = 8.5;
      var pageHeight = 11;

      var innerPageWidth = imgWidth - margin[0] * 2;
      var innerPageHeight = pageHeight - margin[1] * 2;

      // Calculate the number of pages.
      var pxFullHeight = canvas.height;
      var pxPageHeight = Math.floor(canvas.width * (pageHeight / imgWidth));
      var nPages = Math.ceil(pxFullHeight / pxPageHeight);

      // Define pageHeight separately so it can be trimmed on the final page.
      var pageHeight = innerPageHeight;

      // Create a one-page canvas to split up the full image.
      var pageCanvas = document.createElement("canvas");
      var pageCtx = pageCanvas.getContext("2d");
      pageCanvas.width = canvas.width;
      pageCanvas.height = pxPageHeight;

      // Initialize the PDF.
      var pdf = new jsPDF("p", "in", [8.5, 11]);

      for (var page = 0; page < nPages; page++) {
        // Trim the final page to reduce file size.
        if (page === nPages - 1 && pxFullHeight % pxPageHeight !== 0) {
          pageCanvas.height = pxFullHeight % pxPageHeight;
          pageHeight = (pageCanvas.height * innerPageWidth) / pageCanvas.width;
        }

        // Display the page.
        var w = pageCanvas.width;
        var h = pageCanvas.height;
        pageCtx.fillStyle = "white";
        pageCtx.fillRect(0, 0, w, h);
        pageCtx.drawImage(canvas, 0, page * pxPageHeight, w, h, 0, 0, w, h);

        // Add the page to the PDF.
        if (page > 0) pdf.addPage();
        debugger;
        var imgData = pageCanvas.toDataURL(
          "image/" + image.type,
          image.quality
        );
        pdf.addImage(
          imgData,
          image.type,
          margin[1],
          margin[0],
          innerPageWidth,
          pageHeight
        );
      }

      pdf.save("file.pdf");
    });
  };

  const renderList = () => {
    const filterData = history.filter((val) => {
      if (val.namaOutlet !== null) {
        return (
          val.namaOutlet.toLowerCase().includes(search.toLowerCase()) ||
          val.alamatOutlet.toLowerCase().includes(search.toLowerCase())
        );
      }
    });
    const render = history.map((val, index) => {
      return <DetailPlan key={index} data={val} history />;
    });
    if (filterData.length == 0) {
      return (
        <div
          style={{ textAlign: "center", marginTop: "150px", color: "#d0d0d0" }}
        >
          No Item
        </div>
      );
    } else {
      return render;
    }
  };
  const render = () => {
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <div className={styles.container}>
          {pdfDownload ? (
            <Modal
              onClick={() => {
                setPdfDownload(false);
              }}
            >
              <div
                style={{
                  maxHeight: "100%",
                  overflow: "scroll",
                  overflowX: "hidden",
                }}
              >
                <div
                  style={{
                    width: "400px",
                    maxHeight: "100%",
                    margin: "100px auto",
                  }}
                >
                  <Invoice />
                  <div style={{ padding: "10px", backgroundColor: "white" }}>
                    <Button onClick={() => print()} text={"Download PDF"} />
                  </div>
                </div>
              </div>
            </Modal>
          ) : null}
          <div className={styles.wrapper}>
            <Nav
              title={"History"}
              backAction={() => Router.back()}
              color={"white"}
            />
            <div className={styles.main}>
              <div className={styles.search_fixed}>
                <input
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  placeholder="Search"
                  className={styles.input}
                  style={{ marginTop: "0" }}
                />
              </div>
              <div style={{ margin: "60px 0" }}>{renderList()}</div>
              <button
                onClick={() => {
                  setPdfDownload(true);
                }}
              >
                print
              </button>
            </div>
          </div>
        </div>
      );
    }
  };
  return render();
}
