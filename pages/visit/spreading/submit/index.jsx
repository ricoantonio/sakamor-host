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
  getSpreadingById,
  approvalSubmit,
  getPimcaByCabang,
  getOutletSpreadingNearMe,
  insertOutletSpreading,
} from "../../../../helper";

export default function index() {
  const { state, dispatch, actions } = useContext(Stores);
  const [loading, setLoading] = useState(true);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [newNOO, setNewNOO] = useState(false);
  const [plan, setPlan] = useState([]);
  const [searchJenisChannel, setSearchJenisChannel] = useState("");
  const [searchNearMe, setSearchNearMe] = useState("");
  const [listJenisChannel, setListJenisChannel] = useState([]);
  const [renderListJenisChannel, setRenderListJenisChannel] = useState(false);
  const [renderListOutletNearMe, setRenderListOutletNearMe] = useState(false);
  const [focusJenisChannel, setFocusJenisChannel] = useState({});
  const [visNotDone, setVisNotDone] = useState(false);
  const [pimca, setPimca] = useState([]);
  const [position, setPosition] = useState({});
  const [outletNearMe, setOutletNearMe] = useState([]);
  const [error, setError] = useState("");

  const router = useRouter();
  var now = new Date();

  useEffect(() => {
    if (router.query.new) {
      setNewNOO(true);
      const geo = navigator.geolocation;
      if (!geo) {
        setError("Geolocation is not supported");
        Router.push("/");
        return;
      }
      var watcher = geo.watchPosition(
        ({ coords }) => {
          setPosition({
            latitude: coords.latitude,
            longitude: coords.longitude,
          });
          if (!state.visitSpreadingReducer.checkIn) {
            actions.setSpreadingCheckIn(now);
          }
          setSearchJenisChannel(
            state.visitSpreadingReducer.jenisChannel.namaJenisChannel
          );
          if (
            state.visitSpreadingReducer.jenisChannel.namaJenisChannel &&
            state.visitSpreadingReducer.outlet.namaOutlet
          ) {
            setSearchJenisChannel(
              state.visitSpreadingReducer.jenisChannel.namaJenisChannel
            );
          }
          console.log(coords);
          getOutletSpreadingNearMe(coords.latitude, coords.longitude)
            .then((data) => {
              if (data.length) {
                setOutletNearMe(data);
                console.log(data);
                setLoading(false);
              } else {
                setLoading(false);
              }
            })
            .catch((err) => {
              console.log(err);
              setLoading(false);
            });
        },
        (err) => {
          window.alert("You have to enable your location");
          Router.push("/visit/spreading");
          setError(err.message);
        }
      );
      return () => geo.clearWatch(watcher);
    } else {
      setLoading(false);
      if (
        state.visitSpreadingReducer.jenisChannel.namaJenisChannel &&
        state.visitSpreadingReducer.outlet.namaOutlet
      ) {
        if (!state.visitSpreadingReducer.checkIn) {
          actions.setSpreadingCheckIn(now);
        }
        setSearchJenisChannel(
          state.visitSpreadingReducer.jenisChannel.namaJenisChannel
        );
      } else {
        Router.push("/visit/spreading");
      }
    }
  }, []);

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
        {renderDataDetail("Availability")}
      </div>
    );
  };

  const onSearchJenisChannel = (search) => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setRenderListJenisChannel(true);
      setSearchJenisChannel(search);
      if (search) {
        getSearchJenisChannel(userData, search, "SPREADING")
          .then((data) => {
            setListJenisChannel(data);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        setListJenisChannel([]);
      }
    }
  };

  const renderSearchJenisChannel = () => {
    const render = listJenisChannel.map((val, index) => {
      return (
        <div
          onClick={() => {
            // console.log(val);
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

  const renderOutletNearMe = () => {
    const render = outletNearMe.map((val, index) => {
      return (
        <div
          onClick={() => {
            console.log("hai");
            actions.setSpreadingNewOutlet(val.namaOutlet);
            actions.setSpreadingAlamat(val.alamatOutlet);
            actions.setSpreadingJenisChannel({
              jenisChannelID: val.channelCode,
              namaJenisChannel: val.namaChannel,
            });
            actions.setSpreadingNearMe(true);
            setSearchJenisChannel(val.namaChannel);
            setSearchNearMe(val.namaOutlet);
          }}
          key={index}
          style={{
            borderBottom: ".5px solid #f0f0f0",
            width: "350px",
          }}
        >
          {val.namaOutlet}
        </div>
      );
    });

    return (
      <div>
        <div
          onClick={() => {
            actions.setDefaultVisitSpreading();
            actions.setSpreadingNearMe(false);
            setSearchJenisChannel("");
          }}
        >
          -
        </div>
        {render}
      </div>
    );
  };

  const renderDataDetail = (type, data) => {
    const doneFormVis = state.visitSpreadingReducer.visibility.filter((val) => {
      return val.file !== null && val.type !== null && val.brand !== null;
    });
    const doneFormAva = state.visitSpreadingReducer.avability;
    if (newNOO) {
      return (
        <div>
          <div className={styles.render_data}>
            {type}
            <div style={{ textAlign: "right" }}>
              {type === "Visibility"
                ? `${doneFormVis.length}/2`
                : type === "Availability"
                ? `${doneFormAva.length}/1`
                : ""}
            </div>
          </div>
          {type === "Jenis Channel" ? (
            state.visitSpreadingReducer.nearMe ? (
              <Card style={{ marginTop: "6px", borderRadius: "5px" }}>
                <div className={styles.render_value}>
                  {state.visitSpreadingReducer.jenisChannel.namaJenisChannel}
                </div>
              </Card>
            ) : (
              <>
                <input
                  onChange={(e) => {
                    onSearchJenisChannel(e.target.value);
                    actions.setSpreadingAvability([]);
                  }}
                  value={searchJenisChannel}
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
            )
          ) : type === "Outlet" ? (
            state.visitSpreadingReducer.nearMe ? (
              <Card style={{ marginTop: "6px", borderRadius: "5px" }}>
                <div className={styles.render_value}>
                  {state.visitSpreadingReducer.newOutlet}
                </div>
              </Card>
            ) : (
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
            )
          ) : type === "Alamat" ? (
            state.visitSpreadingReducer.nearMe ? (
              <Card style={{ marginTop: "6px", borderRadius: "5px" }}>
                <div className={styles.render_value}>
                  {state.visitSpreadingReducer.alamat}
                </div>
              </Card>
            ) : (
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
            )
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
          ) : type === "Visibility" || type === "Availability" ? (
            <Card style={{ marginTop: "6px", borderRadius: "5px" }}>
              <div className={styles.render_value}>
                <div>
                  {type === "Visibility" ? (
                    <div>
                      <div className={styles.progress_bar}></div>
                      <div
                        className={styles.progress_bar_now}
                        style={{
                          width: `${(doneFormVis.length / 2) * 100}%`,
                        }}
                      ></div>
                    </div>
                  ) : type === "Availability" ? (
                    <div>
                      <div className={styles.progress_bar}></div>
                      <div
                        className={styles.progress_bar_now}
                        style={{
                          width: `${(doneFormAva.length / 1) * 100}%`,
                        }}
                      ></div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                {type === "Availability" ? (
                  state.visitSpreadingReducer.jenisChannel.namaJenisChannel ? (
                    <Link
                      href={`/visit/spreading/submit/availability?new=true`}
                    >
                      <a>
                        <Button text="Add" />
                      </a>
                    </Link>
                  ) : (
                    <Button text="Add" />
                  )
                ) : type === "Visibility" ? (
                  <Link href={`/visit/spreading/submit/visibility?new=true`}>
                    <a>
                      <Button text="Add" />
                    </a>
                  </Link>
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
    } else {
      return (
        <div>
          <div className={styles.render_data}>
            {type}
            <div style={{ textAlign: "right" }}>
              {type === "Visibility"
                ? `${doneFormVis.length}/2`
                : type === "Availability"
                ? `${doneFormAva.length}/1`
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
              ) : type === "Visibility" || type === "Availability" ? (
                <>
                  <div>
                    {type === "Visibility" ? (
                      <div>
                        <div className={styles.progress_bar}></div>
                        <div
                          className={styles.progress_bar_now}
                          style={{
                            width: `${(doneFormVis.length / 2) * 100}%`,
                          }}
                        ></div>
                      </div>
                    ) : type === "Availability" ? (
                      <div>
                        <div className={styles.progress_bar}></div>
                        <div
                          className={styles.progress_bar_now}
                          style={{
                            width: `${(doneFormAva.length / 1) * 100}%`,
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
                        : type === "Availability"
                        ? `/visit/spreading/submit/availability`
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

  const onSubmitApproval = (plan) => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      const data = {
        approvalTransactionDataModel: [
          {
            systemCode: "SAKAMOR",
            moduleCode: "SPREADING",
            approvalLevel: 1,
            id: plan.id,
            approvalID: 359,
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
        moduleCode: "SPREADING",
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
          moduleCode: "SPREADING",
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
          actions.setDefaultVisitSpreading();
          Router.push("/");
        })
        .catch((err) => console.log(err));
    }
  };

  const onSubmit = () => {
    const visDone = state.visitSpreadingReducer.visibility.filter((val) => {
      return val.file !== null && val.type !== null && val.brand !== null;
    });
    if (
      visDone.length >= 2 &&
      state.visitSpreadingReducer.avability.length >= 1
    ) {
      setLoadingSubmit(true);
      setVisNotDone(false);
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
        status: "Submit",
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
            harga: val.harga == null ? 0 : parseInt(val.harga),
            totalHarga:
              val.harga == null ? 0 : parseInt(val.harga) * parseInt(val.order),
            keterangan: val.ket,
            createdBy: userData.username,
            updatedBy: userData.username,
            totalHarga: val.totalHargaEceran,
            satuan: val.satuan,
            hargaEceran: val.hargaEceran,
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
        if (
          state.visitSpreadingReducer.newOutlet &&
          state.visitSpreadingReducer.jenisChannel.namaJenisChannel &&
          state.visitSpreadingReducer.alamat
        ) {
          console.log("submit newnoo");
          submitVisitSpreading(dataNewNOO)
            .then((res) => {
              console.log("ini res", res);
              const bodyPosm = state.visitSpreadingReducer.visibility.map(
                (val, index) => {
                  if (val.type && val.file && val.brand) {
                    return {
                      activitySpreadingId: res.spreadingSave.id,
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
              if (!state.visitSpreadingReducer.nearMe) {
                console.log("insert spreading");
                const dataInsert = {
                  id: res.spreadingSave.id,
                  outlet: state.visitSpreadingReducer.newOutlet,
                  alamat: state.visitSpreadingReducer.alamat,
                  latitude: position.latitude,
                  longitude: position.longitude,
                  kodeCabang: userData.kodeCabang,
                  namaCabang: userData.namaCabang,
                  idJenisChannel:
                    state.visitSpreadingReducer.jenisChannel.jenisChannelID,
                  namaJenisChannel:
                    state.visitSpreadingReducer.jenisChannel.namaJenisChannel,
                  createdBy: userData.username,
                  updatedBy: userData.username,
                };
                insertOutletSpreading(dataInsert)
                  .then((res) => {
                    console.log(res);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
              console.log(bodyPosm);
              for (let i = 0; i < files.length; i++) {
                submitVisitSpreadingDposm(bodyPosm[i], files[i])
                  .then((res2) => {
                    if (i === 5) {
                      setLoadingSubmit(false);
                      Router.push("/");
                      actions.setDefaultVisitSpreading();
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
          setLoadingSubmit(false);
        }
      } else {
        submitVisitSpreading(data)
          .then((res) => {
            console.log("ini res", res);
            const bodyPosm = state.visitSpreadingReducer.visibility.map(
              (val, index) => {
                if (val.type && val.file && val.brand) {
                  return {
                    activitySpreadingId: res.spreadingSave.id,
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
              submitVisitSpreadingDposm(bodyPosm[i], files[i])
                .then((res2) => {
                  if (i === 5) {
                    getSpreadingById(res.spreadingSave.id)
                      .then((spreading) => {
                        console.log("ini dataspreading", spreading);
                        onSubmitApproval(spreading);
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
      }
    } else {
      setVisNotDone(true);
    }
  };

  const render = () => {
    const visDone = state.visitSpreadingReducer.visibility.filter((val) => {
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
              disable={
                visDone.length >= 2 &&
                state.visitSpreadingReducer.avability.length >= 1
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
              {newNOO ? (
                <>
                  <div className={styles.render_data}>Near Me</div>
                  <input
                    // onChange={(e) => {
                    //   onSearchJenisChannel(e.target.value);
                    //   onSearchNearMe(e.target.value)
                    //   actions.setSpreadingAvability([]);
                    // }}
                    value={state.visitSpreadingReducer.newOutlet}
                    placeholder="Outlet near me"
                    className={styles.input}
                    onBlur={() => {
                      setTimeout(() => {
                        setRenderListOutletNearMe(false);
                      }, 200);
                    }}
                    onFocus={() => {
                      setRenderListOutletNearMe(true);
                    }}
                  />
                  {renderListOutletNearMe ? (
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
                      {renderOutletNearMe()}
                    </div>
                  ) : null}
                </>
              ) : null}
              {renderDetail()}
            </div>
          </div>
        </div>
      );
    }
  };

  return render();
}
