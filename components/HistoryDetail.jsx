import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import styles from "../styles/pages/VisitPlanDetail.module.css";

import Nav from "./Nav";
import Card from "./Card";
import Spinner from "./Spinner";
import Button from "./Button";
import html2canvas from "html2canvas";

import {
  getInvoiceData,
  getInvoiceDataPosm,
  getPlanMonthlyHistory,
} from "../helper";
import Invoice from "./Invoice";
import Modal from "./Modal";

export default function HistoryDetail() {
  const [loading, setLoading] = useState(true);
  const [plan, setPlan] = useState([]);
  const [productList, setProductList] = useState([]);
  const [posmList, setPosmList] = useState([]);
  const [pdfDownload, setPdfDownload] = useState(false);
  const router = useRouter();
  var now = new Date();

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

    if (router.query.id) {
      getPlanMonthlyHistory(userData)
        .then((data) => {
          setPlan(
            data.filter((val) => {
              return val.idVisitPlan === router.query.id;
            })
          );
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });

      getInvoiceData(router.query.id)
        .then((data) => {
          setProductList(data);
        })
        .catch((err) => {
          console.log(err);
        });

      getInvoiceDataPosm(router.query.id)
        .then((data) => {
          setPosmList(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [router.query.id]);

  const renderDetail = () => {
    return (
      <div>
        {renderDataDetail("Jenis Channel", plan[0].jenisChannel)}
        {renderDataDetail("Outlet", plan[0].namaOutlet)}
        {renderDataDetail("Alamat", plan[0].alamatOutlet)}
        {renderDataDetail("Catatan", plan[0].catatan)}
        {renderDataDetail("Visibility")}
        {renderDataDetail("Avability")}
      </div>
    );
  };

  const renderDataDetail = (type, data) => {
    // const doneFormVis = state.visitPlanReducer.visibility.filter((val) => {
    //   return val.file !== null && val.type !== null;
    // });
    // const doneFormAva = state.visitPlanReducer.avability;
    return (
      <div>
        <div className={styles.render_data}>
          {type}
          <div style={{ textAlign: "right" }}>
            {type === "Visibility"
              ? `${posmList.length}/6`
              : type === "Avability"
              ? `${productList.length}/25`
              : ""}
          </div>
        </div>
        <Card style={{ marginTop: "6px", borderRadius: "5px" }}>
          <div className={styles.render_value}>
            {type === "Catatan" ? (
              <div style={{ width: "100%", border: "none", height: "70px" }}>
                {data}
              </div>
            ) : type === "Visibility" || type === "Avability" ? (
              <>
                <div>
                  {type === "Visibility" ? (
                    <div>
                      <div className={styles.progress_bar}></div>
                      <div
                        className={styles.progress_bar_now}
                        style={{
                          width: `${(posmList.length / 6) * 100}%`,
                        }}
                      ></div>
                    </div>
                  ) : type === "Avability" ? (
                    <div>
                      <div className={styles.progress_bar}></div>
                      <div
                        className={styles.progress_bar_now}
                        style={{
                          width: `${(productList.length / 25) * 100}%`,
                        }}
                      ></div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <Link
                  href={
                    type === "Visibility"
                      ? `/visit/plan/history/${plan[0].idVisitPlan}/visibility`
                      : type === "Avability"
                      ? `/visit/plan/history/${plan[0].idVisitPlan}/avability`
                      : ""
                  }
                >
                  <a>
                    <Button text="View" />
                  </a>
                </Link>
              </>
            ) : (
              <>{data}</>
            )}
          </div>
        </Card>
      </div>
    );
  };

  const print = () => {
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

  const render = () => {
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <>
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
                    <Invoice data={productList} plan={plan} />
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
            ) : null}
            <div className={styles.wrapper}>
              <Nav
                title={"History"}
                color={"white"}
                action={"Download"}
                backAction={() => {
                  Router.back();
                }}
                onClick={() => {
                  setPdfDownload(true);
                }}
                disable={false}
              />
              <div className={styles.main}>{renderDetail()}</div>
            </div>
          </div>
        </>
      );
    }
  };

  return render();
}
