import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Router from "next/router";
import { Stores } from "../store";
import styles from "../styles/pages/MasterWorkVisit.module.css";

import Nav from "../components/Nav";
import Spinner from "../components/Spinner";
import Button from "../components/Button";

import {
  getAuth,
  getMasterWorkVisit,
  viewProfilePic,
  getSmrByCabang,
  saveMasterWorkVisit,
  deleteMasterWorkVisit,
} from "../helper";
import moment from "moment";
import Card from "../components/Card";

export default function Plan() {
  const { state, dispatch, actions } = useContext(Stores);
  const [search, setSearch] = useState("");
  const [dateView, setDateView] = useState(new Date());
  const [dateInput, setDateInput] = useState(new Date());
  const [masterWorkVisitList, setMasterWorkVisitList] = useState([]);
  const [modal, setModal] = useState(false);
  const [renderListNamaSmr, setRenderListNamaSmr] = useState(false);
  const [serachNamaSmr, setSearchNamaSmr] = useState("");
  const [searchListSmr, setSearchListSmr] = useState("");
  const [dataUsernameSMR, setDataUserNameSMR] = useState([]);
  const [listNamaSmr, setListNamaSmr] = useState([]);
  const [focusNamaSmr, setFocusNamaSmr] = useState({});
  const [loading, setLoading] = useState(true);
  const [dummy, setDummy] = useState(0);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const userMenu = JSON.parse(localStorage.getItem("menu"));
    // console.log(userData);
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
    getMasterWorkVisitList();
  }, [dispatch, dateView]);

  const getMasterWorkVisitList = () => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      var date = moment(dateView).format("YYYY-MM-DD");
      // console.log(date);
      getMasterWorkVisit(userData, date)
        .then((data1) => {
          const allsmrname = data1.reduce((groups, game) => {
            const date = game.usernameSMR;
            if (!groups[date]) {
              groups[date] = [];
            }
            groups[date].push(game);
            return groups;
          }, {});

          const groupArraysName = Object.keys(allsmrname).map((username) => {
            return {
              username,
              stringpp: "",
            };
          });

          // setDataUserNameSMR(groupArraysName);
          console.log(data1.length);
          if (data1.length !== 0) {
            for (let i = 0; i < groupArraysName.length; i++) {
              viewProfilePic(groupArraysName[i].username)
                .then((data) => {
                  // console.log(data);
                  groupArraysName[i].stringpp = data;
                  if (i == groupArraysName.length - 1) {
                    // console.log();
                    // console.log(groupArraysName);
                    setMasterWorkVisitList(data1);
                    setDataUserNameSMR(groupArraysName);
                    setLoading(false);
                  }
                })
                .catch((err) => {
                  console.log(err);
                });
            }
          } else {
            setLoading(false);
            setMasterWorkVisitList(data1);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    // fetch on stop typing
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData.kodeCabang) {
      const timeoutId = setTimeout(() => {
        getSmrByCabang(userData.kodeCabang, serachNamaSmr)
          .then((data) => {
            setListNamaSmr(data);
            // console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [dispatch, serachNamaSmr]);

  const renderSearchNamaSmr = () => {
    const render = listNamaSmr.map((val, index) => {
      return (
        <div
          onClick={() => {
            setFocusNamaSmr(val);
            setSearchNamaSmr(val.namaSMR);
            setListNamaSmr([]);
            // console.log(val);
          }}
          key={index}
          style={{
            borderBottom: ".5px solid #f0f0f0",
            width: "350px",
          }}
        >
          {val.namaSMR}
        </div>
      );
    });
    return render;
  };

  const onSearchNamaSmr = (search) => {
    setRenderListNamaSmr(true);
    setSearchNamaSmr(search);
  };

  const postMasterWorkVisit = () => {
    // console.log(focusNamaSmr);
    const userData = JSON.parse(localStorage.getItem("user"));
    setLoading(true);
    // console.log(moment(dateInput).format("YYYY-MM-DDT00:00:00.000Z"));
    if (userData && focusNamaSmr.namaSMR && dateInput) {
      var dataWorkVisit = {
        nomorDokumen: "",
        tanggal: moment(dateInput).format("YYYY-MM-DDT00:00:00.000Z"),
        kodeCabang: userData.kodeCabang,
        namaCabang: focusNamaSmr.namaCabang,
        usernamePimcab: userData.username,
        namaPimcab: userData.name,
        usernameSMR: focusNamaSmr.usernameSMR,
        namaSMR: focusNamaSmr.namaSMR,
        kodeRayon: "",
        rayon: "",
        kodeProduk: "string",
        produkFokus: "string",
        createdBy: userData.username,
        updatedBy: userData.username,
      };
      console.log(dataWorkVisit);
      saveMasterWorkVisit(dataWorkVisit)
        .then((data) => {
          // console.log(data);
          setLoading(false);
          getMasterWorkVisitList();
          setDateInput(new Date());
          setModal(false);
          setSearchNamaSmr("");
          setFocusNamaSmr([]);
        })
        .catch((err) => console.log(err));
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
              setFocusNamaSmr({});
              setSearchNamaSmr("");
              setDateInput(new Date());
            }}
          ></div>
          <div className={styles.wrapper}>
            <div className={styles.avability_modal_container}>
              <div className={styles.add_title}>Add Work Visit</div>
              <div className={styles.avability_modal_subtitle}>Tanggal</div>
              <input
                className={styles.input}
                type="date"
                value={moment(dateInput).format("YYYY-MM-DD")}
                onChange={(e) => {
                  setDateInput(moment(e.target.value));
                  // console.log(e.target.value);
                }}
                min={moment().format("YYYY-MM-DD")}
              />
              <div className={styles.avability_modal_subtitle}>Nama SMR</div>
              <input
                onChange={(e) => {
                  onSearchNamaSmr(e.target.value);
                  setFocusNamaSmr({});
                }}
                value={serachNamaSmr}
                placeholder="Search"
                className={styles.input}
                onBlur={() => {
                  setTimeout(() => {
                    setRenderListNamaSmr(false);
                  }, 200);
                }}
                onFocus={(e) => onSearchNamaSmr(e.target.value)}
              />
              {renderListNamaSmr ? (
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
                  {renderSearchNamaSmr()}
                </div>
              ) : null}
              <div style={{ marginTop: "80px" }}>
                <Button
                  text={"Add"}
                  onClick={() => {
                    postMasterWorkVisit();
                  }}
                />
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  const onDeleteWrokVisit = (id) => {
    if (confirm("Visit will be deleted, are you sure?")) {
      deleteMasterWorkVisit(id)
        .then(() => {
          getMasterWorkVisitList();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const viewSmrProfile = (usernameSMR) => {
    if (masterWorkVisitList.length) {
      const profilepic = dataUsernameSMR.filter((val) => {
        return val.username === usernameSMR;
      });
      if (profilepic[0] && profilepic[0].stringpp != undefined) {
        return (
          <div style={{ textAlign: "left", margin: "auto 0" }}>
            <img
              className={styles.img_smr}
              src={
                profilepic[0].stringpp
                  ? profilepic[0].stringpp
                  : "/profile-nav1.svg"
              }
            />
          </div>
        );
      } else {
        return (
          <div style={{ textAlign: "left", margin: "auto 0" }}>
            <img className={styles.img_smr} src={"/profile-nav1.svg"} />
          </div>
        );
      }
    }
  };

  const renderWorkVisitList = () => {
    const groups = masterWorkVisitList.reduce((groups, game) => {
      const date = game.tanggal.split("T")[0];
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(game);
      return groups;
    }, {});

    const groupArrays = Object.keys(groups).map((date) => {
      return {
        date,
        item: groups[date],
      };
    });

    // console.log(groupArrays);
    function compare(a, b) {
      if (a.date < b.date) {
        return -1;
      }
      if (a.date > b.date) {
        return 1;
      }
      return 0;
    }
    groupArrays.sort(compare);
    const render = groupArrays.map((val) => {
      return (
        <div>
          <div className={styles.work_header_container}>
            <div>{moment(val.date).format("MMMM D, YYYY")}</div>
            <div>{moment(val.date).format("dddd")}</div>
          </div>
          <div className={styles.work_main_container}>
            {val.item.map((val2) => {
              // console.log(val2.dataPP);
              if (
                val2.namaSMR.toLowerCase().includes(searchListSmr.toLowerCase())
              ) {
                return (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 5fr 1fr",
                      margin: "5px 0 5px 0",
                    }}
                  >
                    {viewSmrProfile(val2.usernameSMR)}
                    <div>
                      <div style={{ fontWeight: "600", fontSize: "14px" }}>
                        {val2.namaSMR}
                      </div>
                      <div
                        style={{
                          fontWeight: "300",
                          fontSize: "12px",
                          fontStyle: "italic",
                        }}
                      >
                        {val2.produkFokus}
                      </div>
                    </div>
                    {moment(val2.tanggal).format("DD MMMM YYYY") >=
                    moment(new Date()).format("DD MMMM YYYY") ? (
                      <div
                        style={{ textAlign: "end", margin: "auto 0" }}
                        onClick={() => {
                          // console.log(val2.id);
                          onDeleteWrokVisit(val2.id);
                        }}
                      >
                        <img src="/trash-2.svg" />
                      </div>
                    ) : null}
                  </div>
                );
              }
            })}
          </div>
        </div>
      );
    });
    return render;
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
              <Nav title="Master Work Visit" backHref="/" color="white" />
              <div className={styles.main}>
                <Card
                  style={{
                    marginTop: "22px",
                    borderRadius: "6px",
                    padding: "10px",
                  }}
                >
                  <div style={{ color: "#41867a", fontSize: "12px" }}>DATE</div>
                  <div className={styles.filterdate_container}>
                    <input
                      className={styles.input}
                      type="date"
                      value={moment(dateView).format("YYYY-MM-DD")}
                      onChange={(e) => {
                        setDateView(moment(e.target.value));
                      }}
                      min={moment().format("YYYY-MM-DD")}
                    />
                    <div style={{ alignSelf: "center" }}>-</div>
                    <input
                      className={styles.input}
                      type="date"
                      value={moment(dateView)
                        .add(7, "days")
                        .format("YYYY-MM-DD")}
                      disabled={true}
                    />
                  </div>
                </Card>
                <div className={styles.input_container}>
                  <div style={{ marginRight: "5px" }}>
                    <input
                      className={styles.input}
                      onChange={(e) => {
                        setSearchListSmr(e.target.value);
                      }}
                      value={searchListSmr}
                      placeholder={"Search"}
                    />
                  </div>
                  <div style={{ marginLeft: "5px" }}>
                    <Button
                      onClick={() => {
                        setModal(true);
                      }}
                      text={"Add New +"}
                      color={"orange"}
                    />
                  </div>
                </div>
                <div style={{ marginTop: "16px" }}>{renderWorkVisitList()}</div>
                <Card style={{ marginTop: "22px", borderRadius: "6px" }}></Card>
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
