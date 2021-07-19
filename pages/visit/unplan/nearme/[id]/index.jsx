import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import styles from "../../../../../styles/pages/VisitPlanDetail.module.css";

import { Stores } from "../../../../../store";

import Nav from "../../../../../components/Nav";
import Card from "../../../../../components/Card";
import Spinner from "../../../../../components/Spinner";
import Button from "../../../../../components/Button";

import {
  getPlanId,
  getUnplanNearMe,
  submitVisitPlan,
  submitVisitPlanDposm,
  getSearchJenisChannel,
} from "../../../../../helper";
import Modal from "../../../../../components/Modal";

export default function index() {
  const { state, dispatch, actions } = useContext(Stores);
  const [loading, setLoading] = useState(true);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [searchJenisChannel, setSearchJenisChannel] = useState("");
  const [renderListJenisChannel, setRenderListJenisChannel] = useState(false);
  const [listJenisChannel, setListJenisChannel] = useState([]);
  const [focusJenisChannel, setFocusJenisChannel] = useState({});
  const [plan, setPlan] = useState([]);
  const [visNotDone, setVisNotDone] = useState(false);

  const router = useRouter();
  var now = new Date();

  useEffect(() => {
    //   /GetAllMasterVisitPlan"
    if (router.query.id) {
      getUnplanNearMe()
        .then((res) => {
          var result = res.filter((val) => {
            return val.outletID === router.query.id;
          });
          console.log(result);
          setPlan(result);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [router.query.id]);

  const renderDetail = () => {
    return (
      <div>
        {renderDataDetail(
          "Jenis Channel",
          state.visitUnplanReducer.jenisChannel.namaJenisChannel
        )}
        {renderDataDetail("Outlet", plan[0].namaOutlet)}
        {renderDataDetail("Alamat", plan[0].alamatOutlet)}
        {renderDataDetail("Catatan", state.visitUnplanReducer.catatan)}
        {renderDataDetail("Visibility")}
        {renderDataDetail("Avability")}
      </div>
    );
  };

  const renderSearchJenisChannel = () => {
    const render = listJenisChannel.map((val, index) => {
      return (
        <div
          onClick={() => {
            setFocusJenisChannel(val);
            actions.setUnplanJenisChannel(val);
            setSearchJenisChannel(val.namaJenisChannel);
            setListJenisChannel([]);
          }}
          key={index}
          style={{
            borderBottom: ".5px solid #f0f0f0",
            width: "350px",
          }}
        >
          {val.namaJenisChannel}
        </div>
      );
    });
    return render;
  };

  const onSearchJenisChannel = (search) => {
    setRenderListJenisChannel(true);
    setSearchJenisChannel(search);
    if (search) {
      getSearchJenisChannel(search)
        .then((data) => {
          setListJenisChannel(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setListJenisChannel([]);
    }
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
              : type === "Avability"
              ? `${doneFormAva.length}/25`
              : ""}
          </div>
        </div>
        {type === "Jenis Channel" ? (
          <>
            <input
              onChange={(e) => {
                onSearchJenisChannel(e.target.value);
              }}
              value={
                state.visitUnplanReducer.jenisChannel.namaJenisChannel
                  ? state.visitUnplanReducer.jenisChannel.namaJenisChannel
                  : searchJenisChannel
              }
              placeholder="Search"
              className={styles.input}
              onBlur={() => {
                setTimeout(() => {
                  setRenderListJenisChannel(false);
                }, 200);
              }}
              onFocus={(e) => onSearchJenisChannel(e.target.value)}
            />
            {renderListJenisChannel ? (
              <div
                style={{
                  position: "absolute",
                  maxHeight: "180px",
                  backgroundColor: "white",
                  overflowY: "scroll",
                  maxWidth: "400px",
                  padding: "0 4px",
                  zIndex: 999999,
                  marginTop: "-10px",
                }}
              >
                {renderSearchJenisChannel()}
              </div>
            ) : null}
          </>
        ) : type === "Outlet" ? (
          <Card style={{ marginTop: "6px", borderRadius: "5px" }}>
            <div className={styles.render_value}>{data}</div>
          </Card>
        ) : type === "Alamat" ? (
          <Card style={{ marginTop: "6px", borderRadius: "5px" }}>
            <div className={styles.render_value}>{data}</div>
          </Card>
        ) : type === "Catatan" ? (
          <Card style={{ marginTop: "6px", borderRadius: "5px" }}>
            <div className={styles.render_value}>
              <textarea
                style={{ width: "100%", border: "none", height: "70px" }}
                onChange={(e) => {
                  actions.setUnplanCatatan(e.target.value);
                }}
                value={state.visitUnplanReducer.catatan}
              ></textarea>
            </div>
          </Card>
        ) : type === "Visibility" || type === "Avability" ? (
          <Card style={{ marginTop: "6px", borderRadius: "5px" }}>
            <div className={styles.render_value}>
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
                ) : type === "Avability" ? (
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
              {type === "Avability" ? (
                state.visitUnplanReducer.jenisChannel.namaJenisChannel ? (
                  <Link
                    href={`/visit/unplan/nearme/${plan[0].outletID}/avability`}
                  >
                    <a>
                      <Button text="Add" />
                    </a>
                  </Link>
                ) : (
                  <Button text="Add" />
                )
              ) : type === "Visibility" ? (
                state.visitUnplanReducer.jenisChannel.namaJenisChannel ? (
                  <Link
                    href={`/visit/unplan/nearme/${plan[0].outletID}/visibility`}
                  >
                    <a>
                      <Button text="Add" />
                    </a>
                  </Link>
                ) : (
                  <Button text="Add" />
                )
              ) : null}
            </div>
          </Card>
        ) : (
          <Card style={{ marginTop: "6px", borderRadius: "5px" }}>
            <div className={styles.render_value}>
              <>{data}</>
            </div>
          </Card>
        )}
      </div>
    );
  };

  const onSubmit = () => {
    const visDone = state.visitPlanReducer.visibility.filter((val) => {
      return val.file !== null && val.type !== null && val.brand !== null;
    });
    // console.log(state.visitPlanReducer.visibility);
    if (visDone.length === 6) {
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
          harga: parseInt(val.harga),
          total: parseInt(val.harga) * parseInt(val.order),
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
              return {
                id: plan.id,
                activityVisitPlanId: res.avp.id,
                nomorDokumen: plan.nomorDokumen,
                nomor: index,
                tipe: val.type.program,
                namaFile: val.file.name,
                createdBy: userData.username,
                updatedBy: userData.username,
              };
            }
          );
          for (let i = 0; i < files.length; i++) {
            submitVisitPlanDposm(bodyPosm[i], files[i])
              .then((res) => {
                if (i === 7) {
                  setLoadingSubmit(false);
                  Router.push("/");
                  actions.setDefaultVisitPlan();
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
        <>
          <div className={styles.container}>
            {loadingSubmit ? (
              <Modal>
                <Spinner />
              </Modal>
            ) : null}
            <div className={styles.wrapper}>
              <Nav
                title={"Near Me"}
                color={"white"}
                action={"Submit"}
                onClick={() => {
                  onSubmit();
                }}
                disable={visDone.length === 6 ? false : true}
                backAction={() => {
                  if (
                    confirm(
                      "Data will be lost if you leave the page, are you sure?"
                    )
                  ) {
                    actions.setDefaultVisitUnplan();
                    Router.push("/visit/unplan/nearme");
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
                    Please complete visibility data
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
