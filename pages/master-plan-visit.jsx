import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Router from "next/router";
import { Stores } from "../store";
import styles from "../styles/pages/MasterPlanVisit.module.css";

import Nav from "../components/Nav";
import Spinner from "../components/Spinner";
import Button from "../components/Button";

import {
  getAuth,
  getSearchOutlet,
  getSearchJenisChannel,
  getMasterVisitPlan,
  deleteMasterPlanSMR,
  saveMasterPlanVisit,
} from "../helper";
import moment from "moment";
import Card from "../components/Card";

export default function Plan() {
  const { state, dispatch, actions } = useContext(Stores);
  const [search, setSearch] = useState("");
  const [dateInput, setDateInput] = useState(new Date());
  const [masterPlanList, setMasterPlanList] = useState([]);
  const [modal, setModal] = useState(false);
  const [searchJenisChannel, setSearchJenisChannel] = useState("");
  const [listJenisChannel, setListJenisChannel] = useState([]);
  const [renderListJenisChannel, setRenderListJenisChannel] = useState(false);
  const [focusJenisChannel, setFocusJenisChannel] = useState({});
  const [searchOutlet, setSearchOutlet] = useState("");
  const [listOutlet, setListOutlet] = useState([]);
  const [renderListOutlet, setRenderListOutlet] = useState(false);
  const [focusOutlet, setFocusOutlet] = useState({});
  const [loading, setLoading] = useState(true);

  const getMasterVisitList = () => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      getMasterVisitPlan(userData)
        .then((data) => {
          setMasterPlanList(data);
          console.log(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const userMenu = JSON.parse(localStorage.getItem("menu"));
    if (userData) {
      getAuth(userData)
        .then((data) => {
          var auth = data.filter((val) => {
            return val.moduleCode === "PLAN";
          });
          var menu = userMenu.filter((val) => {
            return val.moduleCode === "PLAN";
          });
          if (!(auth && menu)) {
            Router.push("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      Router.push("/");
    }
  }, [dispatch]);

  useEffect(() => {
    getMasterVisitList();
  }, [dispatch]);

  useEffect(() => {
    // fetch on stop typing
    const timeoutId = setTimeout(() => {
      if (focusJenisChannel.jenisChannelID) {
        getSearchOutlet(focusJenisChannel.jenisChannelID, searchOutlet)
          .then((data) => {
            setListOutlet(data);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        setListOutlet([]);
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [searchOutlet]);

  useEffect(() => {
    // fetch on stop typing
    const timeoutId = setTimeout(() => {
      getSearchJenisChannel(searchJenisChannel)
        .then((data) => {
          setListJenisChannel(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [searchJenisChannel]);

  const renderSearchJenisChannel = () => {
    const render = listJenisChannel.map((val, index) => {
      return (
        <div
          onClick={() => {
            setFocusJenisChannel(val);
            setSearchJenisChannel(val.namaJenisChannel);
            setListJenisChannel([]);
            setSearchOutlet("");
            setFocusOutlet({});
            console.log(val);
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

  const renderSearchOutlet = () => {
    const render = listOutlet.map((val, index) => {
      return (
        <div
          onClick={() => {
            setFocusOutlet(val);
            setSearchOutlet(val.namaOutlet);
            setListOutlet([]);
            console.log(val);
          }}
          key={index}
          style={{
            borderBottom: ".5px solid #f0f0f0",
            width: "350px",
          }}
        >
          <div>{val.namaOutlet}</div>
          <div style={{ fontSize: "12px" }}>{val.alamatOutlet}</div>
        </div>
      );
    });
    return render;
  };

  const onSearchJenisChannel = (search) => {
    setRenderListJenisChannel(true);
    setSearchJenisChannel(search);
  };

  const onSearchOutlet = (search) => {
    setRenderListOutlet(true);
    setSearchOutlet(search);
  };

  const postMasterVisit = () => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (
      userData.username &&
      focusJenisChannel.jenisChannelID &&
      focusJenisChannel.namaJenisChannel &&
      focusOutlet.namaOutlet &&
      focusOutlet.alamatOutlet &&
      focusOutlet.outletID &&
      dateInput
    ) {
      var data = {
        nomorDokumen: "",
        usernameSMR: userData.username,
        idJenisChannel: parseInt(focusJenisChannel.jenisChannelID),
        jenisChannel: focusJenisChannel.namaJenisChannel,
        idOutlet: focusOutlet.outletID,
        namaOutlet: focusOutlet.namaOutlet,
        alamatOutlet: focusOutlet.alamatOutlet,
        tanggal: dateInput.toISOString(),
        target: 0,
        sales: 0,
        createdBy: userData.username,
        updatedBy: userData.username,
      };

      console.log(data);
      saveMasterPlanVisit(data)
        .then((res) => {
          console.log(res);
          setModal(false);
          getMasterVisitList();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const renderModalAdd = () => {
    if (modal) {
      return (
        <>
          <div
            className={styles.modal_avability}
            onClick={() => {
              setModal(false);
              setFocusJenisChannel({});
              setFocusOutlet({});
              setSearchJenisChannel("");
              setSearchOutlet("");
            }}
          ></div>
          <div className={styles.wrapper}>
            <div className={styles.avability_modal_container}>
              <div className={styles.add_title}>Add Plan Visit</div>
              <div className={styles.avability_modal_subtitle}>
                Jenis Channel
              </div>
              <input
                onChange={(e) => {
                  onSearchJenisChannel(e.target.value);
                  setFocusJenisChannel({});
                  setSearchOutlet("");
                  setFocusOutlet({});
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
                  }}
                >
                  {renderSearchJenisChannel()}
                </div>
              ) : null}
              <div className={styles.avability_modal_subtitle}>Outlet</div>
              <input
                disabled={focusJenisChannel.namaJenisChannel ? false : true}
                onChange={(e) => {
                  onSearchOutlet(e.target.value);
                }}
                value={searchOutlet}
                placeholder="Search"
                className={styles.input}
                onBlur={() => {
                  setTimeout(() => {
                    setRenderListOutlet(false);
                  }, 200);
                }}
                onFocus={(e) => onSearchOutlet(e.target.value)}
              />
              {renderListOutlet ? (
                <div
                  style={{
                    position: "absolute",
                    maxHeight: "180px",
                    backgroundColor: "white",
                    overflowY: "scroll",
                    maxWidth: "400px",
                    padding: "0 4px",
                    zIndex: 999999,
                  }}
                >
                  {renderSearchOutlet()}
                </div>
              ) : null}
              <div className={styles.avability_modal_subtitle}>Alamat</div>
              {focusOutlet.alamatOutlet ? (
                <div style={{ padding: "4px 10px" }}>
                  {focusOutlet.alamatOutlet}
                </div>
              ) : (
                <div style={{ height: "64px" }} />
              )}
              <div style={{ marginTop: "20px" }}>
                <Button
                  text={"Add"}
                  onClick={() => {
                    postMasterVisit();
                  }}
                />
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  const onDeleteVisit = (id) => {
    if (confirm("Visit will be deleted, are you sure?")) {
      deleteMasterPlanSMR(id)
        .then(() => {
          getMasterVisitList();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const renderMasterPlanList = () => {
    return masterPlanList.map((val) => {
      return (
        <div
          style={{
            padding: "10px 20px",
            fontSize: "14px",
            display: "grid",
            gridTemplateColumns: "80% 20%",
          }}
        >
          <div>
            <div style={{ fontWeight: "500" }}>{val.namaOutlet}</div>
            <div style={{ fontSize: "12px", color: "#B9B9C3" }}>
              {val.alamatOutlet}
            </div>
            <div style={{ fontWeight: "400", color: "#B9B9C3" }}>
              {moment(val.tanggal).format("DD MMMM YYYY")}
            </div>
          </div>
          {moment(val.tanggal).format("DD MMMM YYYY") >=
          moment(new Date()).format("DD MMMM YYYY") ? (
            <div
              style={{ textAlign: "end", margin: "auto 0" }}
              onClick={() => {
                console.log(val);
                onDeleteVisit(val.id);
              }}
            >
              <img src="/trash-2.svg" />
            </div>
          ) : null}
        </div>
      );
    });
  };

  const render = () => {
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <>
          {renderModalAdd()}
          <div className={styles.container}>
            <div className={styles.wrapper}>
              <Nav backHref="/" />
              <div className={styles.title_container}>
                <div className={styles.title}>Master Plan Visit</div>
              </div>
              <div className={styles.main}>
                <div className={styles.input_container}>
                  <div style={{ marginRight: "5px" }}>
                    <input
                      className={styles.input}
                      type="date"
                      value={moment(dateInput).format("YYYY-MM-DD")}
                      onChange={(e) => {
                        setDateInput(moment(e.target.value));
                      }}
                      min={moment().format("YYYY-MM-DD")}
                    />
                  </div>
                  <div style={{ marginLeft: "5px" }}>
                    <Button
                      onClick={() => {
                        setModal(true);
                      }}
                      text="Add"
                    />
                  </div>
                </div>
                <Card style={{ marginTop: "22px", borderRadius: "6px" }}>
                  <div
                    style={{
                      padding: "10px",
                      fontSize: "21px",
                      textAlign: "center",
                    }}
                  >
                    List Master Plan
                  </div>
                  {renderMasterPlanList()}
                </Card>
                <div style={{ marginBottom: "100px" }} />
              </div>
            </div>
          </div>
        </>
      );
    }
  };
  return render();
}
