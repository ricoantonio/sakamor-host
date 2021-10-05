import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Router from "next/router";
import styles from "../../../../styles/pages/VisitPlanDetail.module.css";

import { Stores } from "../../../../store";

import Nav from "../../../../components/Nav";
import Modal from "../../../../components/Modal";
import Card from "../../../../components/Card";
import Spinner from "../../../../components/Spinner";
import Button from "../../../../components/Button";

import {
  submitVisitUnplanDposm,
  submitVisitUnplan,
  getUnplanById,
  approvalSubmit,
  getPimcaByCabang,
} from "../../../../helper";

export default function index() {
  const { state, dispatch, actions } = useContext(Stores);
  const [loading, setLoading] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [visNotDone, setVisNotDone] = useState(false);
  const [pimca, setPimca] = useState([]);

  var now = new Date();

  useEffect(() => {
    //   /GetAllMasterVisitPlan"
    if (
      state.visitUnplanReducer.jenisChannel.namaJenisChannel &&
      state.visitUnplanReducer.outlet.namaOutlet
    ) {
      if (!state.visitUnplanReducer.checkIn) {
        actions.setUnplanCheckIn(now);
      }
    } else {
      Router.push("/visit/unplan");
    }
  }, []);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      getPimcaByCabang(userData.kodeCabang)
        .then((data) => {
          setPimca(data);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const renderDetail = () => {
    return (
      <div>
        {renderDataDetail(
          "Jenis Channel",
          state.visitUnplanReducer.jenisChannel.namaJenisChannel
        )}
        {renderDataDetail("Outlet", state.visitUnplanReducer.outlet.namaOutlet)}
        {renderDataDetail(
          "Alamat",
          state.visitUnplanReducer.outlet.alamatOutlet
        )}
        {renderDataDetail("Catatan", state.visitUnplanReducer.catatan)}
        {renderDataDetail("Visibility")}
        {renderDataDetail("Availability")}
      </div>
    );
  };

  const renderDataDetail = (type, data) => {
    const doneFormVis = state.visitUnplanReducer.visibility.filter((val) => {
      return val.file !== null && val.type !== null && val.brand !== null;
    });
    const doneFormAva = state.visitUnplanReducer.avability;
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
                  actions.setUnplanCatatan(e.target.value);
                }}
                value={state.visitUnplanReducer.catatan}
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
                      ? `/visit/unplan/submit/visibility`
                      : type === "Availability"
                      ? `/visit/unplan/submit/availability`
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
            moduleCode: "VISITUNPLAN",
            approvalLevel: 1,
            id: plan.id,
            approvalID: 358,
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
        moduleCode: "VISITUNPLAN",
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
          moduleCode: "VISITUNPLAN",
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
          actions.setDefaultVisitUnplan();
          Router.push("/");
        })
        .catch((err) => console.log(err));
    }
  };

  const onSubmit = () => {
    const visDone = state.visitUnplanReducer.visibility.filter((val) => {
      return val.file !== null && val.type !== null && val.brand !== null;
    });
    if (
      visDone.length >= 6 &&
      state.visitUnplanReducer.avability.length >= 25
    ) {
      setLoadingSubmit(true);
      setVisNotDone(false);

      const userData = JSON.parse(localStorage.getItem("user"));

      const bodyPlan = {
        usernameSMR: userData.username,
        nomorDokumen: "",
        catatan: state.visitUnplanReducer.catatan,
        idJenisChannel: parseInt(
          state.visitUnplanReducer.jenisChannel.jenisChannelID
        ),
        jenisChannel: state.visitUnplanReducer.jenisChannel.namaJenisChannel,
        idOutlet: state.visitUnplanReducer.outlet.outletID,
        namaOutlet: state.visitUnplanReducer.outlet.namaOutlet,
        alamatOutlet: state.visitUnplanReducer.outlet.alamatOutlet,
        tanggal: now.toISOString(),
        target: 0,
        sales: 0,
        isCheckIn: true,
        checkInDate: state.visitUnplanReducer.checkIn.toISOString(),
        isCheckOut: true,
        checkOutDate: now.toISOString(),
        createdBy: userData.username,
        updatedBy: userData.username,
        status: "Submit",
      };

      const files = state.visitUnplanReducer.visibility.map((val, index) => {
        return val.file;
      });

      const bodyProduct = state.visitUnplanReducer.avability.map(
        (val, index) => {
          return {
            nomorDokumen: "",
            nomor: index,
            kodeProduk: val.productFocus.produkID,
            namaProduk: val.productFocus.namaProduk,
            stok: parseInt(val.stock),
            saranOrder: parseInt(val.saranOrder),
            jumlahOrder: parseInt(val.order),
            harga: parseInt(val.harga),
            totalHarga: parseInt(val.harga) * parseInt(val.order),
            keterangan: val.ket,
            createdBy: userData.username,
            updatedBy: userData.username,
          };
        }
      );

      var data = {
        avp: bodyPlan,
        dProductList: bodyProduct,
      };

      console.log(data, state.visitUnplanReducer.avability);

      submitVisitUnplan(data)
        .then((res) => {
          console.log("ini res", res);
          console.log(res);
          const bodyPosm = state.visitUnplanReducer.visibility.map(
            (val, index) => {
              if (val.type && val.file && val.brand) {
                return {
                  activityVisitUnPlanId: res.avp.id,
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
          for (let i = 0; i < files.length; i++) {
            submitVisitUnplanDposm(bodyPosm[i], files[i])
              .then((res2) => {
                if (i === 5) {
                  getUnplanById(res.avp.id)
                    .then((unplan) => {
                      console.log("ini dataunplan", unplan);
                      onSubmitApproval(unplan);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
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
    const visDone = state.visitUnplanReducer.visibility.filter((val) => {
      return val.file !== null && val.type !== null && val.brand !== null;
    });
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <div className={styles.container}>
          {loadingSubmit ? (
            <Modal>
              <Spinner />
            </Modal>
          ) : null}
          <div className={styles.wrapper}>
            <Nav
              title={"Unplan"}
              color={"white"}
              action={"Submit"}
              onClick={() => {
                onSubmit();
              }}
              backAction={() => {
                if (
                  confirm(
                    "Data will be lost if you leave the page, are you sure?"
                  )
                ) {
                  actions.setDefaultVisitUnplan();
                  Router.push("/visit/unplan");
                }
              }}
              disable={
                visDone.length >= 6 &&
                state.visitUnplanReducer.avability.length >= 25
                  ? false
                  : true
              }
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
      );
    }
  };

  return render();
}
