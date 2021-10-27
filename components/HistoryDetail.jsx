import React, { useState, useEffect } from "react";
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
  getInvoiceDataUnplan,
  getInvoiceDataPosmUnplan,
  getUnplanMonthlyHistory,
  getSpreadingMonthlyHistory,
  getInvoiceDataSpreading,
  getInvoiceDataPosmSpreading,
} from "../helper";
import Invoice from "./Invoice";
import Modal from "./Modal";

export default function HistoryDetail({ type }) {
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
      if (type === "PLAN") {
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
      } else if (type === "UNPLAN") {
        getUnplanMonthlyHistory(userData)
          .then((data) => {
            setPlan(
              data.filter((val) => {
                return val.id === router.query.id;
              })
            );
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });

        getInvoiceDataUnplan(router.query.id)
          .then((data) => {
            setProductList(data);
          })
          .catch((err) => {
            console.log(err);
          });

        getInvoiceDataPosmUnplan(router.query.id)
          .then((data) => {
            setPosmList(data);
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (type === "SPREADING") {
        getSpreadingMonthlyHistory(userData)
          .then((data) => {
            setPlan(
              data.filter((val) => {
                return val.id === router.query.id;
              })
            );
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });

        getInvoiceDataSpreading(router.query.id)
          .then((data) => {
            setProductList(data);
            // console.log("produk", data);
          })
          .catch((err) => {
            console.log(err);
          });

        getInvoiceDataPosmSpreading(router.query.id)
          .then((data) => {
            setPosmList(data);
            // console.log("psom", data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
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
        {renderDataDetail("Availability")}
      </div>
    );
  };

  const renderDataDetail = (subType, data) => {
    // const doneFormVis = state.visitPlanReducer.visibility.filter((val) => {
    //   return val.file !== null && val.type !== null;
    // });
    // const doneFormAva = state.visitPlanReducer.avability;
    const renderProgressVis = (length) => {
      if (type === "SPREADING") {
        return `${length}/2`;
      } else {
        return `${length}/6`;
      }
    };
    const renderProgressAva = (length) => {
      if (type === "SPREADING") {
        return `${length}/1`;
      } else {
        return `${length}/25`;
      }
    };
    return (
      <div>
        <div className={styles.render_data}>
          {subType}
          <div style={{ textAlign: "right" }}>
            {subType === "Visibility"
              ? renderProgressVis(posmList.length)
              : subType === "Availability"
              ? renderProgressAva(productList.length)
              : ""}
          </div>
        </div>
        <Card style={{ marginTop: "6px", borderRadius: "5px" }}>
          <div className={styles.render_value}>
            {subType === "Catatan" ? (
              <div style={{ width: "100%", border: "none", height: "70px" }}>
                {data}
              </div>
            ) : subType === "Visibility" || subType === "Availability" ? (
              <>
                <div>
                  {subType === "Visibility" ? (
                    <div>
                      <div className={styles.progress_bar}></div>
                      <div
                        className={styles.progress_bar_now}
                        style={
                          type === "SPREADING"
                            ? { width: `${(posmList.length / 2) * 100}%` }
                            : { width: `${(posmList.length / 6) * 100}%` }
                        }
                      ></div>
                    </div>
                  ) : subType === "Availability" ? (
                    <div>
                      <div className={styles.progress_bar}></div>
                      <div
                        className={styles.progress_bar_now}
                        style={
                          type === "SPREADING"
                            ? { width: `${(productList.length / 1) * 100}%` }
                            : { width: `${(productList.length / 25) * 100}%` }
                        }
                      ></div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                {type === "PLAN" ? (
                  <Link
                    href={
                      subType === "Visibility"
                        ? `/visit/plan/history/${plan[0].idVisitPlan}/visibility`
                        : subType === "Availability"
                        ? `/visit/plan/history/${plan[0].idVisitPlan}/avability`
                        : ""
                    }
                  >
                    <a>
                      <Button text="View" />
                    </a>
                  </Link>
                ) : type === "UNPLAN" ? (
                  <Link
                    href={
                      subType === "Visibility"
                        ? `/visit/unplan/history/${plan[0].id}/visibility`
                        : subType === "Availability"
                        ? `/visit/unplan/history/${plan[0].id}/avability`
                        : ""
                    }
                  >
                    <a>
                      <Button text="View" />
                    </a>
                  </Link>
                ) : type === "SPREADING" ? (
                  <Link
                    href={
                      subType === "Visibility"
                        ? `/visit/spreading/history/${plan[0].id}/visibility`
                        : subType === "Availability"
                        ? `/visit/spreading/history/${plan[0].id}/avability`
                        : ""
                    }
                  >
                    <a>
                      <Button text="View" />
                    </a>
                  </Link>
                ) : null}
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
      // var innerPageHeight = imgWidth - margin[0] * 2;
      // var innerPageWidth = pageHeight - margin[1] * 2;

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
      // var pdf = new jsPDF("l", "in", [8.5, 11]);

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

  const render = () => {
    var dataProdukSort = productList.sort((a, b) =>
      a.namaProduk.localeCompare(b.namaProduk)
    );
    var dataProduk = dataProdukSort.filter((val) => {
      return val.jumlah > 0;
    });
    console.log(dataProduk);

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
                    <Invoice data={dataProduk} plan={plan} type={type} />
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
