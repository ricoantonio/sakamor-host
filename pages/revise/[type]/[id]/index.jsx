import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import styles from "../../../../styles/pages/VisitPlanDetail.module.css";

import { Stores } from "../../../../store";

import Nav from "../../../../components/Nav";
import Card from "../../../../components/Card";
import Spinner from "../../../../components/Spinner";
import Button from "../../../../components/Button";
import Modal from "../../../../components/Modal";

import {
  approvalApprove,
  approvalReject,
  approvalRevise,
  getInvoiceData,
  getInvoiceDataPosm,
  getInvoiceDataPosmSpreading,
  getInvoiceDataPosmUnplan,
  getInvoiceDataSpreading,
  getInvoiceDataUnplan,
  getUnplanById,
  submitVisitUnplanDposm,
} from "../../../../helper";

export default function index() {
  const { state, dispatch, actions } = useContext(Stores);
  const [loading, setLoading] = useState(true);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [modalConfirmApprove, setModalConfirmApprove] = useState(false);
  const [modalConfirmNote, setModalConfirmNote] = useState(false);
  const [confirmFocus, setConfirmFocus] = useState("");
  const [plan, setPlan] = useState([]);
  const [visNotDone, setVisNotDone] = useState(false);
  const [productList, setProductList] = useState([]);
  const [posmList, setPosmList] = useState([]);
  const [pdfDownload, setPdfDownload] = useState(false);

  const router = useRouter();

  var now = new Date();

  useEffect(() => {
    // setLoading(false);
    if (state.approvalReducer.focusApproval.status == "Revise") {
      setPlan(state.approvalReducer.focusApproval);
      setLoading(false);
    } else {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    if (state.reviseReducer.visibility[0].id) {
      var data = state.reviseReducer.visibility.map((val) => {
        return {
          prev: {
            activityVisitUnPlanId: val.activityVisitUnPlanId,
            brandId: val.brandId,
            createdBy: val.createdBy,
            createdDate: val.createdDate,
            id: val.id,
            isDeleted: val.isDeleted,
            isPopular: val.isPopular,
            lokasiFile: val.lokasiFile,
            namaBrand: val.namaBrand,
            namaFile: val.namaFile,
            nomor: val.nomor,
            nomorDokumen: val.nomorDokumen,
            tipe: val.tipe,
            updatedBy: val.updatedBy,
            updatedDate: val.updatedDate,
          },
          type: {
            id: null,
            program: val.tipe,
          },
          brand: {
            id: val.brandId,
            namaBrand: val.namaBrand,
          },
          popular: val.isPopular,
          file: {
            name: val.namaFile,
            id: val.id,
          },
        };
      });
      if (data.length < 9) {
        for (let i = data.length; i < 8; i++) {
          data.push({ file: null, type: null, brand: null, popular: false });
        }
      }
      actions.setReviseVisibility(data);
    }
  }, []);

  const renderDetail = () => {
    return (
      <div>
        {renderDataDetail("Jenis Channel", plan.jenisChannel)}
        {renderDataDetail("Outlet", plan.namaOutlet)}
        {renderDataDetail("Alamat", plan.alamatOutlet)}
        {renderDataDetail("Catatan", plan.catatan)}
        {renderDataDetail("Visibility")}
        {renderDataDetail("Availability")}
      </div>
    );
  };

  const renderDataDetail = (type, data) => {
    console.log(state.reviseReducer);
    const doneFormVis = state.reviseReducer.visibility.filter((val) => {
      return val.file !== null && val.type !== null && val.brand !== null;
    });
    return (
      <div>
        <div className={styles.render_data}>
          {type}
          <div style={{ textAlign: "right" }}>
            {type === "Visibility"
              ? `${doneFormVis.length}/6`
              : type === "Availability"
              ? `${state.reviseReducer.avability.length}/25`
              : ""}
          </div>
        </div>
        <Card style={{ marginTop: "6px", borderRadius: "5px" }}>
          <div className={styles.render_value}>
            {type === "Catatan" ? (
              <textarea
                style={{ width: "100%", border: "none", height: "70px" }}
                // onChange={(e) => {
                //   actions.setPlanCatatan(e.target.value);
                // }}

                value={plan.catatan}
              ></textarea>
            ) : type === "Visibility" || type === "Availability" ? (
              <>
                <div>
                  {type === "Visibility" ? (
                    <div>
                      <div className={styles.progress_bar}></div>
                      <div
                        className={styles.progress_bar_now}
                        style={{
                          width: `${(doneFormVis.length / 6) * 100}%`,
                        }}
                      ></div>
                    </div>
                  ) : type === "Availability" ? (
                    <div>
                      <div className={styles.progress_bar}></div>
                      <div
                        className={styles.progress_bar_now}
                        style={{
                          width: `${
                            (state.reviseReducer.avability.length / 25) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <Link
                  href={
                    router.query.type === "Plan"
                      ? type === "Visibility"
                        ? `/visit/plan/${plan.id}/visibility`
                        : type === "Availability"
                        ? `/visit/plan/${plan.id}/availability`
                        : ""
                      : router.query.type === "UnPlan"
                      ? type === "Visibility"
                        ? `/revise/UnPlan/${plan.id}/visibility`
                        : type === "Availability"
                        ? `/revise/UnPlan/${plan.id}/availability`
                        : ""
                      : router.query.type === "Spreading"
                      ? type === "Visibility"
                        ? `/visit/spreading/submit/visibility`
                        : type === "Availability"
                        ? `/visit/spreading/submit/availability`
                        : ""
                      : null
                  }
                >
                  <a>
                    <Button text="Add" />
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

  const onSubmit = () => {
    const visDone = state.reviseReducer.visibility.filter((val) => {
      return val.file !== null && val.type !== null && val.brand !== null;
    });
    if (visDone.length >= 6) {
      // setLoadingSubmit(true);
      setVisNotDone(false);

      const userData = JSON.parse(localStorage.getItem("user"));

      // const bodyProduct = state.reviseReducer.avability.map((val, index) => {
      //   return {
      //     nomorDokumen: "",
      //     nomor: index,
      //     kodeProduk: val.productFocus.produkID,
      //     namaProduk: val.productFocus.namaProduk,
      //     stok: parseInt(val.stock),
      //     saranOrder: parseInt(val.saranOrder),
      //     jumlahOrder: parseInt(val.order),
      //     harga: parseInt(val.harga),
      //     totalHarga: parseInt(val.harga) * parseInt(val.order),
      //     keterangan: val.ket,
      //     createdBy: userData.username,
      //     updatedBy: userData.username,
      //   };
      // });

      const bodyPosm = state.reviseReducer.visibility.map((val, index) => {
        if (val.type && val.file && val.brand) {
          return {
            id: val.prev.id,
            activityVisitUnPlanId: val.prev.activityVisitUnPlanId,
            nomorDokumen: val.prev.nomorDokumen,
            nomor: val.prev.nomor,
            tipe: val.type.program,
            namaFile: val.file.name,
            lokasiFile: val.prev.lokasiFile,
            isPopular: val.popular,
            brandId: val.brand.id,
            namaBrand: val.brand.namaBrand,
            updatedBy: userData.username,
          };
        }
      });

      console.log(bodyPosm);

      // for (let i = 0; i < files.length; i++) {
      //   submitVisitUnplanDposmnDposm(bodyPosm[i], files[i])
      //     .then((res2) => {
      //       if (i === 5) {
      //         getUnplanById(res.avp.id)
      //           .then((unplan) => {
      //             console.log("ini dataunplan", unplan);
      //             onSubmitApproval(unplan);
      //           })
      //           .catch((err) => {
      //             console.log(err);
      //           });
      //       }
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
      // }
    } else {
      setVisNotDone(true);
    }
  };

  const render = () => {
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <>
          <div className={styles.container}>
            {loadingSubmit ? (
              <Modal>
                <Spinner />
              </Modal>
            ) : null}
            {modalConfirmApprove ? (
              <Modal>
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
                      width: "300px",
                      maxHeight: "100%",
                      margin: "100px auto",
                      textAlign: "center",
                      backgroundColor: "white",
                      borderRadius: "20px",
                      padding: "20px",
                    }}
                  >
                    <div style={{ margin: "30px auto" }}>
                      Approve this visit?
                    </div>
                    <Button
                      onClick={() => {
                        onApprove();
                      }}
                      text={"Yes"}
                    />
                    <div style={{ marginTop: "10px" }}>
                      <Button
                        onClick={() => {
                          setModalConfirmApprove(false);
                        }}
                        color={"red"}
                        text={"Cancel"}
                      />
                    </div>
                  </div>
                </div>
              </Modal>
            ) : null}
            <div className={styles.wrapper}>
              <Nav
                title={"Revise"}
                color={"white"}
                backAction={() => {
                  Router.push("/");
                }}
                action={"Submit"}
                onClick={() => {
                  onSubmit();
                }}
                disable={false}
              />
              <div className={styles.main}>
                <div>
                  {plan.usernameSMR} - {router.query.type}
                </div>
                {renderDetail()}
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return render();
}