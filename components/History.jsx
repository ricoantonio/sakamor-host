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

export default function History({ type }) {
  const { state, dispatch, actions } = useContext(Stores);
  const [history, setHistory] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [pdfDownload, setPdfDownload] = useState(false);

  let jsPDF = null;

  const Prints = (data) => {
    const renderProduct = () => {};
    return (
      <div
        id="invoice"
        style={{
          color: "black",
          fontSize: "10px",
          backgroundColor: "white",
          padding: "10px",
        }}
      >
        <div
          style={{
            borderBottom: "1px solid black",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Surat Pesanan
        </div>
        <div style={{ fontSize: "6px", margin: "5px" }}>
          <div style={{ textAlign: "right", margin: "0 10px" }}>
            {moment().format("D MMMM YYYY")}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "25% 75%" }}>
            <div>Nama Outlet</div>
            <div></div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "25% 75%" }}>
            <div>Alamat</div>
            <div></div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "25% 75%" }}>
            <div>No. Sp</div>
            <div></div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "25% 75%" }}>
            <div>To</div>
            <div></div>
          </div>
        </div>
        <div style={{ fontSize: "6px", margin: "-2px" }}>
          <table
            style={{
              width: "100%",
              textAlign: "center",
              borderTop: "1px solid black",
              borderLeft: "1px solid black",
            }}
          >
            <thead style={{ borderBottom: "1px solid black" }}>
              <tr>
                <th style={{ borderRight: "1px solid black" }}>No.</th>
                <th style={{ borderRight: "1px solid black" }}>Nama Produk</th>
                <th style={{ borderRight: "1px solid black" }}>Qty</th>
                <th style={{ borderRight: "1px solid black" }}>Harga</th>
                <th style={{ borderRight: "1px solid black" }}>Total</th>
                <th style={{ borderRight: "1px solid black" }}>Ket</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid black" }}>
                <td style={{ borderRight: "1px solid black" }}>1</td>
                <td style={{ borderRight: "1px solid black" }}>2</td>
                <td
                  style={{
                    borderRight: "1px solid black",
                    textAlign: "right",
                    padding: "0 4px 0 0",
                  }}
                >
                  3
                </td>
                <td
                  style={{
                    borderRight: "1px solid black",
                    textAlign: "right",
                    padding: "0 4px 0 0",
                  }}
                >
                  4
                </td>
                <td
                  style={{
                    borderRight: "1px solid black",
                    textAlign: "right",
                    padding: "0 4px 0 0",
                  }}
                >
                  5
                </td>
                <td style={{ borderRight: "1px solid black" }}>2</td>
              </tr>
              <tr style={{ borderBottom: "1px solid black" }}>
                <td
                  style={{
                    borderRight: "1px solid black",
                    textAlign: "right",
                    padding: "0 4px 0 0",
                  }}
                  colSpan={2}
                >
                  Grand Total
                </td>
                <td
                  style={{
                    borderRight: "1px solid black",
                    textAlign: "right",
                    padding: "0 4px 0 0",
                  }}
                  colSpan={4}
                ></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

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
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "px", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("download.pdf");
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
                    margin: "80px auto",
                  }}
                >
                  <Prints />
                  <div style={{ marginTop: "10px" }}>
                    <Button onClick={print} text={"Download PDF"} />
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
