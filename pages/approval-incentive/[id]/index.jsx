import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import styles from "../../../styles/pages/VisitPlanDetail.module.css";

import { Stores } from "../../../store";

import Nav from "../../../components/Nav";
import Card from "../../../components/Card";
import Spinner from "../../../components/Spinner";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";

import { getIncentiveDetailbyID, approvalApprove } from "../../../helper";
import TabelLastDataIncentive from "../../../components/TableLastDataIncentive";
import moment from "moment";

export default function index() {
  const { state, dispatch, actions } = useContext(Stores);
  const [loading, setLoading] = useState(true);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [modalConfirmApprove, setModalConfirmApprove] = useState(false);
  const [confirmFocus, setConfirmFocus] = useState("");
  const [dataIncentive, setDataIncentive] = useState([]);
  const router = useRouter();

  var now = new Date();

  useEffect(() => {
    if (router.query.id) {
      getIncentiveDetailbyID(router.query.id)
        .then((data) => {
          console.log(data);
          setDataIncentive(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [router.query.id]);

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

  const total = () => {
    var totalIncentive = 0;
    var targetSales = dataIncentive.filter((val) => {
      return val.kpiIncentive === "Target Sales in value";
    });
    dataIncentive.map((val) => {
      if (targetSales[0].achievement <= 89.8) {
        totalIncentive == 0;
      } else {
        var splitGroup = val.grup.split(".");
        if (splitGroup[1] == 0) {
          totalIncentive += val.insentif;
        }
      }
    });
    return totalIncentive;
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
                title={"Approval"}
                color={"white"}
                backAction={() => {
                  Router.push("/");
                }}
              />
              <div className={styles.main}>
                <Card
                  style={{
                    borderRadius: "6px",
                    marginTop: "20px",
                    padding: "15px",
                    color: "#5E5873",
                    marginBottom: "20px",
                  }}
                >
                  <div style={{ fontWeight: "700" }}>KPI Incentive Monthly</div>
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: "700",
                      color: "#41867a",
                    }}
                  >
                    {dataIncentive ? (
                      `${total().toLocaleString("id-ID")} IDR`
                    ) : (
                      <div>No data</div>
                    )}
                  </div>
                  {dataIncentive ? (
                    <TabelLastDataIncentive data={dataIncentive} />
                  ) : (
                    <div />
                  )}
                </Card>

                <Button
                  onClick={() => {
                    // onApprove();
                    setModalConfirmApprove(true);
                    setConfirmFocus("APPROVE");
                  }}
                  text={"Approve"}
                  color={"green"}
                />
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return render();
}
