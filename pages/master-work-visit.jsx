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
  getSearchOutlet,
  getSearchJenisChannel,
  getMasterVisitPlan,
  deleteMasterPlanSMR,
  saveMasterPlanVisit,
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
  const [listNamaSmr, setListNamaSmr] = useState([]);
  const [focusNamaSmr, setFocusNamaSmr] = useState({});
  const [loading, setLoading] = useState(true);
  const [dummy, setDummy] = useState(0);

  const getMasterWorkVisitList = () => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      var date = moment(dateView).format("YYYY-MM-DD");
      // console.log(date);
      getMasterWorkVisit(userData, date)
        .then((data) => {
          var dataDummy = [
            {
              createdBy: "API",
              createdDate: "2021-08-23T00:00:00",
              id: "0320b2a8-715c-4cd4-b176-2df3ee07aa87",
              isDeleted: false,
              kodeCabang: "01",
              kodeProduk: "TCROD",
              kodeRayon: "01",
              namaCabang: "JAKARTA",
              namaPimcab: "Pimca",
              namaSMR: "YANTI",
              nomorDokumen: "0005/MPV/08/2021",
              produkFokus: "CEREBROFORT MARINE STRAW. GUMMY SCH/1X10_D",
              rayon: "MEDAN 1",
              tanggal: "2021-08-23T00:00:00",
              updatedBy: "API",
              updatedDate: "2021-08-23T00:00:00",
              usernamePimcab: "pimcab@kalbe.co.id",
              usernameSMR: "yanti@gmail.com",
            },
            {
              createdBy: "API",
              createdDate: "2021-08-23T00:00:00",
              id: "0320b2a8-715c-4cd4-b176-2df3ee07aa87",
              isDeleted: false,
              kodeCabang: "01",
              kodeProduk: "TCROD",
              kodeRayon: "01",
              namaCabang: "JAKARTA",
              namaPimcab: "Pimca",
              namaSMR: "YANTI",
              nomorDokumen: "0005/MPV/08/2021",
              produkFokus: "CEREBROFORT MARINE STRAW. GUMMY SCH/1X10_D",
              rayon: "MEDAN 1",
              tanggal: "2021-08-24T00:00:00",
              updatedBy: "API",
              updatedDate: "2021-08-23T00:00:00",
              usernamePimcab: "pimcab@kalbe.co.id",
              usernameSMR: "yanti@gmail.com",
            },
            {
              createdBy: "API",
              createdDate: "2021-08-23T00:00:00",
              id: "0320b2a8-715c-4cd4-b176-2df3ee07aa87",
              isDeleted: false,
              kodeCabang: "01",
              kodeProduk: "TCROD",
              kodeRayon: "01",
              namaCabang: "JAKARTA",
              namaPimcab: "Pimca",
              namaSMR: "Pimca",
              nomorDokumen: "0005/MPV/08/2021",
              produkFokus: "CEREBROFORT MARINE STRAW. GUMMY SCH/1X10_D",
              rayon: "MEDAN 1",
              tanggal: "2021-08-24T00:00:00",
              updatedBy: "API",
              updatedDate: "2021-08-23T00:00:00",
              usernamePimcab: "pimcab@kalbe.co.id",
              usernameSMR: "pimcab@kalbe.co.id",
            },
            {
              createdBy: "API",
              createdDate: "2021-08-23T00:00:00",
              id: "0320b2a8-715c-4cd4-b176-2df3ee07aa87",
              isDeleted: false,
              kodeCabang: "01",
              kodeProduk: "TCROD",
              kodeRayon: "01",
              namaCabang: "JAKARTA",
              namaPimcab: "Pimca",
              namaSMR: "YANTI",
              nomorDokumen: "0005/MPV/08/2021",
              produkFokus: "CEREBROFORT MARINE STRAW. GUMMY SCH/1X10_D",
              rayon: "MEDAN 1",
              tanggal: "2021-08-24T00:00:00",
              updatedBy: "API",
              updatedDate: "2021-08-23T00:00:00",
              usernamePimcab: "pimcab@kalbe.co.id",
              usernameSMR: "yanti@gmail.com",
            },
          ];
          const getPP = (usernameSMR) => {
            return viewProfilePic(usernameSMR)
              .then((data) => {
                // console.log(data);
                return data;
                // console.log(data);
              })
              .catch((err) => {
                console.log(err);
              });
          };

          const smrData = data.map((val) => {
            return {
              ...val,
              dataPP: getPP(val.usernameSMR),
            };
          });

          // const smrData = dataDummy.map((val) => {
          //   return {
          //     ...val,
          //     dataPP: "",
          //   };
          // });

          // for (let i = 0; i < smrData.length; i++) {
          //   getPP(smrData[i].usernameSMR)
          //     .then((data) => {
          //       console.log(data);
          //       if (data) {
          //         smrData.splice(i, 1, {
          //           ...smrData[i],
          //           dataPP: data,
          //         });
          //         setDummy(i);
          //       } else if (data === undefined) {
          //         smrData.splice(i, 1, {
          //           ...smrData[i],
          //           dataPP: "/profile-nav1.svg",
          //         });
          //         setDummy(i);
          //       }
          //     })
          //     .catch((err) => {
          //       console.log(err);
          //     });
          // }

          // console.log(smrData);
          setMasterWorkVisitList(smrData);
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

  useEffect(() => {
    // fetch on stop typing
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData.kodeCabang) {
      const timeoutId = setTimeout(() => {
        getSmrByCabang(userData.kodeCabang, serachNamaSmr)
          .then((data) => {
            setListNamaSmr(data);
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [dispatch,serachNamaSmr]);

  const renderSearchNamaSmr = () => {
    const render = listNamaSmr.map((val, index) => {
      return (
        <div
          onClick={() => {
            setFocusNamaSmr(val);
            setSearchNamaSmr(val.namaSMR);
            setListNamaSmr([]);
            console.log(val);
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
    console.log(focusNamaSmr);
    const userData = JSON.parse(localStorage.getItem("user"));
    setLoading(true);
    if (userData) {
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
                  console.log(e.target.value);
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

  const renderSmrPofilePic = (usernameSMR) => {
    if (usernameSMR) {
      var profilePic = "";
      viewProfilePic(usernameSMR)
        .then((data) => {
          profilePic = data;
          // console.log(data);
        })
        .catch((err) => console.log(err));
      return (
        <img
          className={styles.img_smr}
          src={profilePic ? profilePic : "/profile-nav1.svg"}
        />
      );
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
    console.log(groupArrays);
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
              return (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 5fr 1fr",
                    margin: "5px 0 5px 0",
                  }}
                >
                  {/* {renderSmrPofilePic(val2.usernameSMR)} */}
                  <div style={{ textAlign: "left", margin: "auto 0" }}>
                    <img
                      className={styles.img_smr}
                      // src={val2.dataPP ? val2.dataPP : "/profile-nav1.svg"}
                      src={"/profile-nav1.svg"}
                    />
                  </div>
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
                        console.log(val2.id);
                        onDeleteWrokVisit(val2.id);
                      }}
                    >
                      <img src="/trash-2.svg" />
                    </div>
                  ) : null}
                </div>
              );
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
                      onChange={(e) => {}}
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
