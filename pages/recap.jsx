import React, { useState, useEffect, useContext } from "react";
import Router from "next/router";
import { Stores } from "../store";
import styles from "../styles/pages/MasterWorkVisit.module.css";

import Nav from "../components/Nav";
import Spinner from "../components/Spinner";
import Button from "../components/Button";
import RecapOrder from "../components/RecapOrder";
import Modal from "../components/Modal";

import { getAuth, getSmrByCabang } from "../helper";
import moment from "moment";
import Card from "../components/Card";
import html2canvas from "html2canvas";

export default function Plan() {
  const { state, dispatch, actions } = useContext(Stores);
  const [dateView, setDateView] = useState(new Date());
  const [dateViewUntil, setDateViewUntil] = useState(new Date());
  const [renderListNamaSmr, setRenderListNamaSmr] = useState(false);
  const [serachNamaSmr, setSearchNamaSmr] = useState("");
  const [role, setRole] = useState("");
  const [smrFocus, setSmrFocus] = useState("");
  const [searchListSmr, setSearchListSmr] = useState("");
  const [dataUsernameSMR, setDataUserNameSMR] = useState([]);
  const [listNamaSmr, setListNamaSmr] = useState([]);
  const [focusNamaSmr, setFocusNamaSmr] = useState({});
  const [loading, setLoading] = useState(true);
  const [pdfDownload, setPdfDownload] = useState(false);

  let jsPDF = null;

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const userMenu = JSON.parse(localStorage.getItem("menu"));
    const userRole = localStorage.getItem("role");
    if (userData && userRole) {
      setRole(localStorage.getItem("role"));
      if (userRole === "SMR") {
        setSmrFocus(userData.username);
      } else {
      }
    } else {
      Router.push("/");
    }
  }, [dispatch]);

  useEffect(() => {
    // fetch on stop typing
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData.kodeCabang) {
      const timeoutId = setTimeout(() => {
        getSmrByCabang(userData.kodeCabang, serachNamaSmr)
          .then((data) => {
            setListNamaSmr(data);
            setLoading(false);
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [dispatch, serachNamaSmr]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("jspdf").then((module) => {
        jsPDF = module.default;
      });
    }
  });

  const print = () => {
    const divToDisplay = document.getElementById("recapOrder");
    html2canvas(divToDisplay, { scale: 5 }).then((canvas) => {
      const image = { type: "jpeg", quality: 0.98 };
      const margin = [0.5, 0.5];

      var imgWidth = 8.5;
      var pageHeight = 11;

      var innerPageHeight = imgWidth - margin[0] * 2;
      var innerPageWidth = pageHeight - margin[1] * 2;

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
      var pdf = new jsPDF("l", "in", [8.5, 11]);

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

      pdf.save(`${"file"}.pdf`);
    });
  };

  const renderSearchNamaSmr = () => {
    const render = listNamaSmr.map((val, index) => {
      return (
        <div
          onClick={() => {
            setFocusNamaSmr(val);
            setSearchNamaSmr(val.namaSMR);
            setListNamaSmr([]);
            setSmrFocus(val.namaSMR);
            // console.log(val);
          }}
          key={index}
          style={{
            borderBottom: ".5px solid #f0f0f0",
            width: "350px",
          }}
        >
          {val.namaSMR}
        </div>
      );
    });
    return render;
  };

  const onSearchNamaSmr = (search) => {
    setRenderListNamaSmr(true);
    setSearchNamaSmr(search);
  };

  const renderModalDownload = () => {
    if (pdfDownload) {
      return (
        <Modal
          onClick={() => {
            setPdfDownload(false);
          }}
        >
          <div
            style={{
              maxHeight: "100%",
              overflow: "auto",
              overflowX: "hidden",
              overflowY: "hidden",
            }}
          >
            <div
              style={{
                width: "400px",
                maxHeight: "100%",
                margin: "100px auto",
              }}
            >
              {/* <Invoice data={dataProduk} plan={plan} type={type} /> */}
              <RecapOrder data={}/>
              <div
                style={{
                  padding: "10px",
                  backgroundColor: "white",
                }}
              >
                <Button
                  onClick={() => {
                    print();
                  }}
                  text={"Download PDF"}
                />
              </div>
            </div>
          </div>
        </Modal>
      );
    }
  };
  const render = () => {
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <>
          <div className={styles.container}>
            {renderModalDownload()}
            <div className={styles.wrapper}>
              <Nav title="Recap" backHref="/" color="white" />
              <div className={styles.main}>
                <Card
                  style={{
                    marginTop: "22px",
                    borderRadius: "6px",
                    padding: "10px",
                  }}
                >
                  <div style={{ color: "#41867a", fontSize: "12px" }}>DATE</div>
                  <div className={styles.filterdate_container}>
                    <input
                      className={styles.input}
                      type="date"
                      value={moment(dateView).format("YYYY-MM-DD")}
                      onChange={(e) => {
                        setDateView(moment(e.target.value));
                      }}
                      min={moment().format("YYYY-MM-DD")}
                    />
                    <div style={{ alignSelf: "center" }}>-</div>
                    <input
                      className={styles.input}
                      type="date"
                      value={moment(dateViewUntil).format("YYYY-MM-DD")}
                      min={moment(dateView).format("YYYY-MM-DD")}
                      onChange={(e) => {
                        setDateViewUntil(moment(e.target.value));
                      }}
                    />
                  </div>
                  {role === "PIMCAB" ? (
                    <>
                      <div
                        style={{
                          color: "#41867a",
                          fontSize: "12px",
                          marginTop: "10px",
                        }}
                      >
                        SMR
                      </div>
                      <input
                        onChange={(e) => {
                          onSearchNamaSmr(e.target.value);
                          setFocusNamaSmr({});
                        }}
                        value={serachNamaSmr}
                        placeholder="Search"
                        className={styles.input}
                        onBlur={() => {
                          setTimeout(() => {
                            setRenderListNamaSmr(false);
                          }, 200);
                        }}
                        onFocus={(e) => onSearchNamaSmr(e.target.value)}
                      />
                      {renderListNamaSmr ? (
                        <div
                          style={{
                            position: "absolute",
                            maxHeight: "180px",
                            backgroundColor: "white",
                            overflowY: "scroll",
                            maxWidth: "400px",
                            padding: "0 4px",
                            zIndex: 999999,
                          }}
                        >
                          {renderSearchNamaSmr()}
                        </div>
                      ) : null}
                    </>
                  ) : null}

                  <div style={{ margin: "20px 0 10px 0" }}>
                    <Button
                      onClick={() => {
                        if (dateView && dateViewUntil && smrFocus)
                          setPdfDownload(true);
                      }}
                      text="Download"
                    />
                  </div>
                </Card>
                <div style={{ marginBottom: "100px" }} />
              </div>
            </div>
          </div>
        </>
      );
    }
  };
  return render();
}
