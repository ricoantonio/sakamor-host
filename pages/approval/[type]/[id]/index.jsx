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
    if (state.approvalReducer.focusApproval.id) {
      setPlan(state.approvalReducer.focusApproval);
      setLoading(false);
    } else {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    if (router.query.type === "Plan") {
      getInvoiceData(router.query.id)
        .then((data) => {
          setProductList(data);
          // console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });

      getInvoiceDataPosm(router.query.id)
        .then((data) => {
          setPosmList(data);
          // console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (router.query.type === "UnPlan") {
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
    } else if (router.query.type === "Spreading") {
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
    const doneFormVis = posmList.filter((val) => {
      return val.file !== null && val.type !== null && val.brand !== null;
    });
    const doneFormAva = productList;
    return (
      <div>
        <div className={styles.render_data}>
          {type}
          <div style={{ textAlign: "right" }}>
            {type === "Visibility"
              ? plan.modul === "Spreading"
                ? `${doneFormVis.length}/2`
                : `${doneFormVis.length}/6`
              : type === "Availability"
              ? `${doneFormAva.length}/25`
              : ""}
          </div>
        </div>
        <Card style={{ marginTop: "6px", borderRadius: "5px" }}>
          <div className={styles.render_value}>
            {type === "Catatan" ? (
              // <textarea
              //   style={{ width: "100%", border: "none", height: "70px" }}
              //   // onChange={(e) => {
              //   //   actions.setPlanCatatan(e.target.value);
              //   // }}

              //   value={plan.catatan}
              // ></textarea>
              <div style={{ width: "100%", border: "none", height: "70px" }}>
                {plan.catatan}
              </div>
            ) : type === "Visibility" || type === "Availability" ? (
              <>
                <div>
                  {type === "Visibility" ? (
                    <div>
                      <div className={styles.progress_bar}></div>
                      <div
                        className={styles.progress_bar_now}
                        style={{
                          width:
                            plan.modul === "Spreading"
                              ? `${(doneFormVis.length / 2) * 100}%`
                              : `${(doneFormVis.length / 6) * 100}%`,
                        }}
                      ></div>
                    </div>
                  ) : type === "Availability" ? (
                    <div>
                      <div className={styles.progress_bar}></div>
                      <div
                        className={styles.progress_bar_now}
                        style={{
                          width: `${(doneFormAva.length / 25) * 100}%`,
                        }}
                      ></div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <Link
                  href={
                    plan.modul === "Plan"
                      ? type === "Visibility"
                        ? `/visit/plan/history/${plan.id}/visibility`
                        : type === "Availability"
                        ? `/visit/plan/history/${plan.id}/avability`
                        : ""
                      : plan.modul === "UnPlan"
                      ? type === "Visibility"
                        ? `/visit/unplan/history/${plan.id}/visibility`
                        : type === "Availability"
                        ? `/visit/unplan/history/${plan.id}/avability`
                        : ""
                      : plan.modul === "Spreading"
                      ? type === "Visibility"
                        ? `/visit/spreading/history/${plan.id}/visibility`
                        : type === "Availability"
                        ? `/visit/spreading/history/${plan.id}/avability`
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

  const module =
    plan.modul === "Plan"
      ? "VISITPLAN"
      : plan.modul === "UnPlan"
      ? "VISITUNPLAN"
      : plan.modul === "Spreading"
      ? "SPREADING"
      : "";

  const onReject = () => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setLoadingSubmit(true);
      const data = {
        systemCode: "SAKAMOR",
        moduleCode: module,
        docNo: plan.nomorDokumen,
        approverFrom: "string",
        approverTo: "string",
        status: "string",
        description: "string",
        notes: "string",
        createdBy: userData.username,
        createdDate: now.toISOString(),
        emailData: {
          systemCode: "SAKAMOR",
          moduleCode: module,
          documentNumber: plan.nomorDokumen,
          emailTo: "string",
          emailCC: "string",
          emailBCC: "string",
          emailSubject: "string",
          emailBody: "string",
        },
      };
      approvalReject(data, plan.modul, plan.id, userData)
        .then((data) => {
          // console.log(data);
          router.push("/");
        })
        .catch((err) => console.log(err));
    }
  };

  const onRevice = () => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setLoadingSubmit(true);

      const data = {
        systemCode: "SAKAMOR",
        moduleCode: module,
        docNo: plan.nomorDokumen,
        approverFrom: "string",
        approverTo: "string",
        status: "string",
        description: "string",
        notes: "string",
        createdBy: userData.username,
        createdDate: now.toISOString(),
        emailData: {
          systemCode: "SAKAMOR",
          moduleCode: module,
          documentNumber: plan.nomorDokumen,
          emailTo: "string",
          emailCC: "string",
          emailBCC: "string",
          emailSubject: "string",
          emailBody: "string",
        },
      };
      approvalRevise(data, plan.modul, plan.id, userData)
        .then((data) => {
          console.log(data);
          router.push("/");
        })
        .catch((err) => console.log(err));
    }
  };

  const onApprove = () => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setLoadingSubmit(true);

      const data = {
        approvalTransactionDataModel: [
          {
            systemCode: "SAKAMOR",
            moduleCode: module,
            approvalLevel: 1,
            id: plan.id,
            approvalID:
              plan.modul === "Plan"
                ? 352
                : plan.modul === "UnPlan"
                ? 358
                : plan.modul === "Spreading"
                ? 359
                : "",
            docNo: plan.nomorDokumen,
            pic: "string",
            approvalLine: 0,
            notes: "string",
            needApprove: true,
            approveDate: now.toISOString(),
            status: "string",
          },
        ],
        systemCode: "SAKAMOR",
        moduleCode: module,
        docNo: plan.nomorDokumen,
        approverFrom: "string",
        approverTo: "string",
        status: "string",
        description: "string",
        notes: "string",
        createdBy: userData.username,
        createdDate: now.toISOString(),
        emailData: {
          systemCode: "SAKAMOR",
          moduleCode: module,
          documentNumber: plan.nomorDokumen,
          emailTo: "string",
          emailCC: "string",
          emailBCC: "string",
          emailSubject: "string",
          emailBody: "string",
        },
      };
      approvalApprove(data, plan.modul, plan.id, userData)
        .then((data) => {
          console.log(data);
          router.push("/");
        })
        .catch((err) => console.log(err));
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
            {modalConfirmNote ? (
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
                      width: "400px",
                      maxHeight: "100%",
                      margin: "100px auto",
                      textAlign: "center",
                      backgroundColor: "white",
                      borderRadius: "20px",
                      padding: "20px",
                    }}
                  >
                    <div style={{ margin: "30px auto" }}>
                      {confirmFocus === "REVICE"
                        ? "Revise this visit?"
                        : confirmFocus === "REJECT"
                        ? "Reject this visit?"
                        : null}
                    </div>
                    <div>Note:</div>
                    <textarea
                      style={{
                        width: "100%",
                        border: "0.5px solid black",
                        height: "70px",
                      }}
                    />
                    <Button
                      onClick={() => {
                        confirmFocus === "REVICE"
                          ? onRevice()
                          : confirmFocus === "REJECT"
                          ? onReject()
                          : null;
                      }}
                      text={"Yes"}
                    />
                    <div style={{ marginTop: "10px" }}>
                      <Button
                        onClick={() => {
                          setModalConfirmNote(false);
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
                title={"Approval"}
                color={"white"}
                backAction={() => {
                  Router.push("/");
                }}
              />
              <div className={styles.main}>
                {/* <div>
                  {plan.usernameSMR} - {plan.modul}
                </div> */}
                {renderDetail()}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    columnGap: "10px",
                    margin: "30px 0",
                  }}
                >
                  <Button
                    onClick={() => {
                      // onApprove();
                      setModalConfirmApprove(true);
                      setConfirmFocus("APPROVE");
                    }}
                    text={"Approve"}
                    color={"green"}
                  />
                  <Button
                    onClick={() => {
                      // onRevice();
                      setModalConfirmNote(true);
                      setConfirmFocus("REVICE");
                    }}
                    text={"Revise"}
                    color={"orange"}
                  />
                  <Button
                    onClick={() => {
                      // onReject();
                      setModalConfirmNote(true);
                      setConfirmFocus("REJECT");
                    }}
                    text={"Reject"}
                    color={"red"}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return render();
}
