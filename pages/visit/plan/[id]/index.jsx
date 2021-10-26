import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import styles from "../../../../styles/pages/VisitPlanDetail.module.css";

import { Stores } from "../../../../store";

import Nav from "../../../../components/Nav";
import Card from "../../../../components/Card";
import Spinner from "../../../../components/Spinner";
import Button from "../../../../components/Button";

import {
  approvalSubmit,
  getPimcaByCabang,
  getPlanById,
  getPlanId,
  submitVisitPlan,
  submitVisitPlanDposm,
} from "../../../../helper";
import Modal from "../../../../components/Modal";

export default function index() {
  const { state, dispatch, actions } = useContext(Stores);
  const [loading, setLoading] = useState(true);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [plan, setPlan] = useState([]);
  const [pimca, setPimca] = useState([]);
  const [visNotDone, setVisNotDone] = useState(false);

  const router = useRouter();
  var now = new Date();

  useEffect(() => {
    //   /GetAllMasterVisitPlan"
    if (router.query.id) {
      getPlanId(router.query.id)
        .then(({ samePlan, data }) => {
          if (samePlan.length == 0) {
            Router.push("/visit/plan");
          } else {
            // console.log(data);
            setPlan(data);
            setLoading(false);
            if (!state.visitPlanReducer.checkIn) {
              actions.setPlanCheckIn(now);
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [router.query.id]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      getPimcaByCabang(userData)
        .then((data) => {
          setPimca(data);
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
    const doneFormVis = state.visitPlanReducer.visibility.filter((val) => {
      return val.file !== null && val.type !== null && val.brand !== null;
    });
    const doneFormAva = state.visitPlanReducer.avability;
    return (
      <div>
        <div className={styles.render_data}>
          {type}
          <div style={{ textAlign: "right" }}>
            {type === "Visibility"
              ? `${doneFormVis.length}/6`
              : type === "Availability"
              ? `${doneFormAva.length}/25`
              : ""}
          </div>
        </div>
        <Card style={{ marginTop: "6px", borderRadius: "5px" }}>
          <div className={styles.render_value}>
            {type === "Catatan" ? (
              <textarea
                style={{ width: "100%", border: "none", height: "70px" }}
                onChange={(e) => {
                  actions.setPlanCatatan(e.target.value);
                }}
                value={state.visitPlanReducer.catatan}
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
                    type === "Visibility"
                      ? `/visit/plan/${plan.id}/visibility`
                      : type === "Availability"
                      ? `/visit/plan/${plan.id}/availability`
                      : ""
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

  const onSubmitApproval = (plan) => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      const data = {
        approvalTransactionDataModel: [
          {
            systemCode: "SAKAMOR",
            moduleCode: "VISITPLAN",
            approvalLevel: 1,
            id: plan.id,
            approvalID: 352,
            docNo: plan.nomorDokumen,
            pic: pimca.username,
            approvalLine: 0,
            notes: "string",
            needApprove: true,
            approveDate: now.toISOString(),
            status: "string",
          },
        ],
        systemCode: "SAKAMOR",
        moduleCode: "VISITPLAN",
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
          moduleCode: "VISITPLAN",
          documentNumber: plan.nomorDokumen,
          emailTo: "string",
          emailCC: "string",
          emailBCC: "string",
          emailSubject: "string",
          emailBody: "string",
        },
      };

      console.log(data);
      approvalSubmit(data, plan.id, userData)
        .then((data) => {
          console.log(data);
          actions.setDefaultVisitPlan();
          Router.push("/");
        })
        .catch((err) => console.log(err));
    }
  };

  const onSubmit = () => {
    const visDone = state.visitPlanReducer.visibility.filter((val) => {
      return val.file !== null && val.type !== null && val.brand !== null;
    });
    // console.log(state.visitPlanReducer.visibility);
    if (visDone.length >= 6 && state.visitPlanReducer.avability.length >= 25) {
      setLoadingSubmit(true);
      setVisNotDone(false);

      const userData = JSON.parse(localStorage.getItem("user"));

      const bodyPlan = {
        id: plan.id,
        idMasterPlanVisit: plan.id,
        nomorDokumen: plan.nomorDokumen,
        catatan: state.visitPlanReducer.catatan,
        isCheckIn: true,
        checkInDate: state.visitPlanReducer.checkIn.toISOString(),
        isCheckOut: true,
        checkOutDate: now.toISOString(),
        createdBy: userData.username,
        updatedBy: userData.username,
        status: "Submit",
      };

      const files = state.visitPlanReducer.visibility.map((val, index) => {
        return val.file;
      });
      const bodyProduct = state.visitPlanReducer.avability.map((val, index) => {
        return {
          // id: val.productFocus.produkID,
          id: plan.id,
          activityVisitPlanId: plan.id,
          nomorDokumen: plan.nomorDokumen,
          nomor: index,
          kodeProduk: val.productFocus.produkID,
          namaProduk: val.productFocus.namaProduk,
          stok: parseInt(val.stock),
          saranOrder: parseInt(val.saranOrder),
          jumlahOrder: parseInt(val.order),
          createdBy: userData.username,
          updatedBy: userData.username,
          harga: val.harga === null ? 0 : parseInt(val.harga),
          totalHarga:
            val.harga === null ? 0 : parseInt(val.harga) * parseInt(val.order),
          keterangan: val.ket,
        };
      });

      var data = {
        avp: bodyPlan,
        dProductList: bodyProduct,
      };

      submitVisitPlan(data)
        .then((res) => {
          // console.log("ini res", res);
          const bodyPosm = state.visitPlanReducer.visibility.map(
            (val, index) => {
              // console.log(val);
              if (val.type && val.file && val.brand) {
                return {
                  id: plan.id,
                  activityVisitPlanId: res.avp.id,
                  nomorDokumen: plan.nomorDokumen,
                  nomor: index,
                  tipe: val.type.program,
                  namaFile: val.file.name,
                  createdBy: userData.username,
                  updatedBy: userData.username,
                  brandId: val.brand.id,
                  namaBrand: val.brand.namaBrand,
                  isPopular: val.popular,
                };
              }
            }
          );
          console.log(bodyPosm);
          for (let i = 0; i < files.length; i++) {
            submitVisitPlanDposm(bodyPosm[i], files[i])
              .then((res2) => {
                if (i === 5) {
                  getPlanById(res.avp.id)
                    .then((visit) => {
                      onSubmitApproval(visit);
                    })
                    .catch((err) => console.log(err));
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setVisNotDone(true);
    }
  };

  const render = () => {
    const visDone = state.visitPlanReducer.visibility.filter((val) => {
      return val.file !== null && val.type !== null && val.brand !== null;
    });

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
            <div className={styles.wrapper}>
              <Nav
                title={"Plan"}
                color={"white"}
                action={"Submit"}
                onClick={() => {
                  onSubmit();
                }}
                disable={
                  visDone.length >= 6 &&
                  state.visitPlanReducer.avability.length >= 25
                    ? false
                    : true
                }
                backAction={() => {
                  if (
                    confirm(
                      "Data will be lost if you leave the page, are you sure?"
                    )
                  ) {
                    actions.setDefaultVisitPlan();
                    Router.push("/visit/plan");
                  }
                }}
              />
              <div className={styles.main}>
                {visNotDone ? (
                  <div
                    style={{
                      color: "red",
                      fontSize: "13px",
                      textAlign: "center",
                    }}
                  >
                    Please complete visibility and availability data
                  </div>
                ) : (
                  ""
                )}
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
