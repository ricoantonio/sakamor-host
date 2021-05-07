import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import styles from "../../../../styles/pages/VisitPlanDetail.module.css";

import { Stores } from "../../../../store";

import Nav from "../../../../components/Nav";
import Modal from "../../../../components/Modal";
import Card from "../../../../components/Card";
import Spinner from "../../../../components/Spinner";
import Button from "../../../../components/Button";

import {
  submitVisitSpreadingDposm,
  submitVisitSpreading,
  getSearchJenisChannel,
} from "../../../../helper";

export default function index() {
  const { state, dispatch, actions } = useContext(Stores);
  const [loading, setLoading] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [newNOO, setNewNOO] = useState(false);
  const [plan, setPlan] = useState([]);
  const [searchJenisChannel, setSearchJenisChannel] = useState("");
  const [listJenisChannel, setListJenisChannel] = useState([]);
  const [renderListJenisChannel, setRenderListJenisChannel] = useState(false);
  const [focusJenisChannel, setFocusJenisChannel] = useState({});
  const router = useRouter();
  var now = new Date();

  useEffect(() => {
    if (router.query.new) {
      setNewNOO(true);
      actions.setSpreadingCheckIn(now);
    } else {
      if (
        state.visitSpreadingReducer.jenisChannel.namaJenisChannel &&
        state.visitSpreadingReducer.outlet.namaOutlet
      ) {
        if (!state.visitSpreadingReducer.checkIn) {
          actions.setSpreadingCheckIn(now);
        }
      } else {
        Router.push("/visit/spreading");
      }
    }
  }, []);

  const renderDetail = () => {
    return (
      <div>
        {renderDataDetail(
          "Jenis Channel",
          state.visitSpreadingReducer.jenisChannel.namaJenisChannel
        )}
        {renderDataDetail(
          "Outlet",
          state.visitSpreadingReducer.outlet.namaOutlet
        )}
        {renderDataDetail(
          "Alamat",
          state.visitSpreadingReducer.outlet.alamatOutlet
        )}
        {renderDataDetail("Catatan", state.visitSpreadingReducer.catatan)}
        {renderDataDetail("Visibility")}
        {renderDataDetail("Avability")}
      </div>
    );
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
  const renderSearchJenisChannel = () => {
    const render = listJenisChannel.map((val, index) => {
      return (
        <div
          onClick={() => {
            setFocusJenisChannel(val);
            actions.setSpreadingJenisChannel(val);
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

  const renderDataDetail = (type, data) => {
    const doneFormVis = state.visitSpreadingReducer.visibility.filter((val) => {
      return val.file !== null && val.type !== null;
    });
    const doneFormAva = state.visitSpreadingReducer.avability;
    if (newNOO) {
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
                  state.visitSpreadingReducer.jenisChannel.namaJenisChannel
                    ? state.visitSpreadingReducer.jenisChannel.namaJenisChannel
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
              <div className={styles.render_value}>
                <textarea
                  style={{ width: "100%", border: "none", height: "20px" }}
                  onChange={(e) => {
                    actions.setSpreadingNewOutlet(e.target.value);
                  }}
                  value={state.visitSpreadingReducer.newOutlet}
                ></textarea>
              </div>
            </Card>
          ) : type === "Alamat" ? (
            <Card style={{ marginTop: "6px", borderRadius: "5px" }}>
              <div className={styles.render_value}>
                <textarea
                  style={{ width: "100%", border: "none", height: "70px" }}
                  onChange={(e) => {
                    actions.setSpreadingAlamat(e.target.value);
                  }}
                  value={state.visitSpreadingReducer.alamat}
                ></textarea>
              </div>
            </Card>
          ) : type === "Catatan" ? (
            <Card style={{ marginTop: "6px", borderRadius: "5px" }}>
              <div className={styles.render_value}>
                <textarea
                  style={{ width: "100%", border: "none", height: "70px" }}
                  onChange={(e) => {
                    actions.setSpreadingCatatan(e.target.value);
                  }}
                  value={state.visitSpreadingReducer.catatan}
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
                <Link
                  href={
                    type === "Visibility"
                      ? `/visit/spreading/submit/visibility?new=true`
                      : type === "Avability"
                      ? `/visit/spreading/submit/avability?new=true`
                      : ""
                  }
                >
                  <a>
                    <Button text="Add" />
                  </a>
                </Link>
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
    } else {
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
          <Card style={{ marginTop: "6px", borderRadius: "5px" }}>
            <div className={styles.render_value}>
              {type === "Catatan" ? (
                <textarea
                  style={{ width: "100%", border: "none", height: "70px" }}
                  onChange={(e) => {
                    actions.setSpreadingCatatan(e.target.value);
                  }}
                  value={state.visitSpreadingReducer.catatan}
                ></textarea>
              ) : type === "Visibility" || type === "Avability" ? (
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
                  <Link
                    href={
                      type === "Visibility"
                        ? `/visit/spreading/submit/visibility`
                        : type === "Avability"
                        ? `/visit/spreading/submit/avability`
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
    }
  };

  const onSubmit = () => {
    const visDone = state.visitSpreadingReducer.visibility.filter((val) => {
      return val.file !== null && val.type !== null;
    });
    if (visDone.length === 6) {
      setLoadingSubmit(true);

      const userData = JSON.parse(localStorage.getItem("user"));

      const bodyPlan = {
        usernameSMR: userData.username,
        nomorDokumen: "",
        catatan: state.visitSpreadingReducer.catatan,
        idJenisChannel: parseInt(
          state.visitSpreadingReducer.jenisChannel.jenisChannelID
        ),
        jenisChannel: state.visitSpreadingReducer.jenisChannel.namaJenisChannel,
        idOutlet: state.visitSpreadingReducer.outlet.outletID,
        namaOutlet: state.visitSpreadingReducer.outlet.namaOutlet,
        alamatOutlet: state.visitSpreadingReducer.outlet.alamatOutlet,
        tanggal: now.toISOString(),
        target: 0,
        sales: 0,
        isCheckIn: true,
        checkInDate: state.visitSpreadingReducer.checkIn.toISOString(),
        isCheckOut: true,
        checkOutDate: now.toISOString(),
        createdBy: userData.username,
        updatedBy: userData.username,
      };

      const bodyPlanNewNOO = {
        usernameSMR: userData.username,
        nomorDokumen: "",
        catatan: state.visitSpreadingReducer.catatan,
        idJenisChannel: parseInt(
          state.visitSpreadingReducer.jenisChannel.jenisChannelID
        ),
        jenisChannel: state.visitSpreadingReducer.jenisChannel.namaJenisChannel,
        idOutlet: "",
        namaOutlet: state.visitSpreadingReducer.newOutlet,
        alamatOutlet: state.visitSpreadingReducer.alamat,
        tanggal: now.toISOString(),
        target: 0,
        sales: 0,
        isCheckIn: true,
        checkInDate: state.visitSpreadingReducer.checkIn.toISOString(),
        isCheckOut: true,
        checkOutDate: now.toISOString(),
        createdBy: userData.username,
        updatedBy: userData.username,
      };

      const files = state.visitSpreadingReducer.visibility.map((val, index) => {
        return val.file;
      });

      const bodyProduct = state.visitSpreadingReducer.avability.map(
        (val, index) => {
          return {
            nomorDokumen: "",
            nomor: index,
            kodeProduk: val.productFocus.produkID,
            namaProduk: val.productFocus.namaProduk,
            stok: parseInt(val.stock),
            saranOrder: parseInt(val.saranOrder),
            jumlahOrder: parseInt(val.order),
            harga: 0,
            totalHarga: 0,
            keterangan: val.ket,
            createdBy: userData.username,
            updatedBy: userData.username,
          };
        }
      );

      var data = {
        spreadingSave: bodyPlan,
        dProductList: bodyProduct,
      };
      var dataNewNOO = {
        spreadingSave: bodyPlanNewNOO,
        dProductList: bodyProduct,
      };

      console.log(data, state.visitSpreadingReducer.avability);
      if (newNOO) {
        submitVisitSpreading(dataNewNOO)
          .then((res) => {
            console.log("ini res", res);
            const bodyPosm = state.visitSpreadingReducer.visibility.map(
              (val, index) => {
                return {
                  activitySpreadingId: res.spreadingSave.id,
                  nomor: index,
                  tipe: val.type.program,
                  namaFile: val.file.name,
                  createdBy: userData.username,
                  updatedBy: userData.username,
                };
              }
            );
            for (let i = 0; i < files.length; i++) {
              submitVisitSpreadingDposm(bodyPosm[i], files[i])
                .then((res) => {
                  if (i === 5) {
                    setLoadingSubmit(false);
                    Router.push("/");
                    actions.setDefaultVisitUnplan();
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
        submitVisitSpreading(data)
          .then((res) => {
            console.log("ini res", res);
            const bodyPosm = state.visitSpreadingReducer.visibility.map(
              (val, index) => {
                return {
                  activitySpreadingId: res.spreadingSave.id,
                  nomor: index,
                  tipe: val.type.program,
                  namaFile: val.file.name,
                  createdBy: userData.username,
                  updatedBy: userData.username,
                };
              }
            );
            for (let i = 0; i < files.length; i++) {
              submitVisitSpreadingDposm(bodyPosm[i], files[i])
                .then((res) => {
                  if (i === 5) {
                    setLoadingSubmit(false);
                    Router.push("/");
                    actions.setDefaultVisitUnplan();
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
      }
    }
  };

  const render = () => {
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
              title={newNOO ? "New Outlet" : "Spreading"}
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
                  actions.setDefaultVisitSpreading();
                  Router.push("/visit/spreading");
                }
              }}
              disable={false}
            />
            <div className={styles.main}>{renderDetail()}</div>
          </div>
        </div>
      );
    }
  };

  return render();
}
