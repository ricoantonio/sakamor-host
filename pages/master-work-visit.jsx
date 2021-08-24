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
  const [searchJenisChannel, setSearchJenisChannel] = useState("");
  const [listJenisChannel, setListJenisChannel] = useState([]);
  const [renderListJenisChannel, setRenderListJenisChannel] = useState(false);
  const [focusJenisChannel, setFocusJenisChannel] = useState({});
  const [searchOutlet, setSearchOutlet] = useState("");
  const [listOutlet, setListOutlet] = useState([]);
  const [renderListOutlet, setRenderListOutlet] = useState(false);
  const [loading, setLoading] = useState(true);

  const getMasterWorkVisitList = () => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      var date = moment(dateView).format("YYYY-MM-DD");
      console.log(date);
      getMasterWorkVisit(userData, date)
        .then((data) => {
          var dummy = [
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
          const groups = dummy.reduce((groups, game) => {
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
          setMasterWorkVisitList(groupArrays);
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
    getMasterWorkVisitList();
  }, [dispatch, dateView]);

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
          {val.namaOutlet}
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

  const postMasterWorkVisit = () => {};

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
              <div className={styles.add_title}>Add Work Visit</div>
              <div className={styles.avability_modal_subtitle}>Tanggal</div>
              <input
                className={styles.input}
                type="date"
                value={moment(dateInput).format("YYYY-MM-DD")}
                onChange={(e) => {
                  setDateInput(moment(e.target.value));
                }}
                min={moment().format("YYYY-MM-DD")}
              />
              <div className={styles.avability_modal_subtitle}>Nama SMR</div>
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
      deleteMasterPlanSMR(id)
        .then(() => {
          getMasterWorkVisitList();
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
            <div style={{ fontWeight: "400", color: "#B9B9C3" }}>
              {moment(val.tanggal).format("DD MMMM YYYY")}
            </div>
          </div>
          <div
            style={{ textAlign: "end", margin: "auto 0" }}
            onClick={() => {
              console.log(val);
              onDeleteWrokVisit(val.id);
            }}
          >
            <img src="/trash-2.svg" />
          </div>
        </div>
      );
    });
  };

  const renderWorkVisitList = () => {
    const render = masterWorkVisitList.map((val) => {
      return (
        <div>
          <div className={styles.work_header_container}>
            <div>{moment(val.date).format("MMMM D, YYYY")}</div>
            <div>{moment(val.date).format("dddd")}</div>
          </div>
          <div className={styles.work_main_container}>
            {val.item.map((val2) => {
              return (
                <div>
                  <div>{val2.namaCabang}</div>
                  <div>{val2.namaSMR}</div>
                  <div>{val2.produkFokus}</div>
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
