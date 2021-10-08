import React, { useState, useContext, useEffect, useRef } from "react";
import Head from "next/head";
import styles from "../styles/pages/Home.module.css";
import Router from "next/router";
import Link from "next/link";
import { Stores } from "../store";

import Spinner from "../components/Spinner";
import BotNav from "../components/BotNav";
import Button from "../components/Button";
import Card from "../components/Card";
import CheckBox from "../components/Checkbox";

import { firebaseCloudMessaging } from "../webpush";
import firebase from "firebase/app";

import {
  approvalApprove,
  getAllAnnouncement,
  getAllWorkVisit,
  getApproval,
  getAuth,
  getFrontliner,
  getFrontlinerPimca,
  getInvoiceData,
  getInvoiceDataPosm,
  getInvoiceDataPosmSpreading,
  getInvoiceDataPosmUnplan,
  getInvoiceDataSpreading,
  getInvoiceDataUnplan,
  getMenu,
  getNoo,
  getNotificationbyUsername,
  getPlanHistory,
  getPlanList,
  getProduktifitas,
  getRevisePlanListSmr,
  getReviseSpreadingListSmr,
  getReviseUnPlanListSmr,
  getSalesTarget75Pimca,
  getSalesTarget75SMR,
  getSalesTargetPimca,
  getSalesTargetSMR,
  getSpreadingMonthlyHistory,
  getSpreadingProduct,
  getUnplanMonthlyHistory,
  getUnPlanProducts,
  getVisitPlanProduct,
  getWorkDay,
  viewProfilePic,
} from "../helper";

import { Doughnut } from "react-chartjs-2";
import moment from "moment";
import router from "next/router";

export default function Home() {
  const { state, dispatch, actions } = useContext(Stores);
  const [focus, setFocus] = useState("");
  const [plan, setPlan] = useState([]);
  const [workVisit, setWorkVisit] = useState([]);
  const [workVisitHistory, setWorkVisitHistory] = useState([]);
  const [planHistory, setPlanHistory] = useState([]);
  const [spreadingHistory, setSpreadingHistory] = useState([]);
  const [unplanHistory, setUnplanHistory] = useState([]);
  const [role, setRole] = useState("");
  const [topMenu, setTopMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMenu, setLoadingMenu] = useState(true);
  const [newAnnouncement, setNewAnnouncement] = useState([]);
  const [notif, setNotif] = useState(false);
  const [salesTarget, setSalesTarget] = useState([]);
  const [salesTarget75, setSalesTarget75] = useState([]);
  const [produktifitas, setProduktifitas] = useState([]);
  const [frontliner, setFrontliner] = useState([]);
  const [NOO, setNOO] = useState([]);
  const [workDay, setWorkDay] = useState([]);
  const [pendingApprove, setPendingApprove] = useState([]);
  const [dummy, setDummy] = useState(0);
  const [loadingApprove, setLoadingApprove] = useState(false);
  const [revisePlan, setRevisePlan] = useState([]);
  const [reviseUnPlan, setReviseUnPlan] = useState([]);
  const [reviseSpreading, setReviseSpreading] = useState([]);

  const [PP, setPP] = useState("");
  const isMounted = useRef(true);

  var now = new Date();

  const dataPlan = {
    datasets: [
      {
        data:
          planHistory.length === 0 ? [0, 1] : [planHistory.length, plan.length],
        backgroundColor: ["#41867a", "#d1e4e1"],
      },
    ],
  };
  const dataSpreading = {
    datasets: [
      {
        data: spreadingHistory.length === 0 ? [0, 1] : [0, 1],
        backgroundColor: ["#41867a", "#d1e4e1"],
      },
    ],
  };

  const dataWorkVisit = {
    datasets: [
      {
        data:
          workVisitHistory.length === 0
            ? [0, 1]
            : [workVisitHistory.length, workVisit.length],
        backgroundColor: ["#41867a", "#d1e4e1"],
      },
    ],
  };

  const donutOptions = {
    cutoutPercentage: 75,
    tooltips: { enabled: false },
    hover: { mode: null },
    responsive: true,
    maintainAspectRatio: true,
  };

  // useEffect(() => {
  //   if (isMounted.current) {
  //     setToken();
  //     async function setToken() {
  //       try {
  //         const token = await firebaseCloudMessaging.init();
  //         if (token) {
  //           getMessage();
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //     function getMessage() {
  //       const messaging = firebase.messaging();
  //       console.log({ messaging });
  //       messaging.onMessage((message) => {
  //         setNotif(true);
  //       });
  //     }
  //   }
  //   return () => {
  //     isMounted.current = false;
  //   };
  // }, [isMounted]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      viewProfilePic(userData.username)
        .then((data) => {
          setPP(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      Router.push("/");
    }
  }, [dispatch]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      // getAllAnnouncement(userData)
      //   .then((data) => {
      //     const newAnnouncement = data.filter((val) => {
      //       return val.isRead === false;
      //     });
      //     setNewAnnouncement(newAnnouncement);
      //     if (newAnnouncement.length > 0) {
      //       setNotif(true);
      //     } else {
      //       setNotif(false);
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      getNotificationbyUsername(userData.username)
        .then((data) => {
          setNewAnnouncement(data);
          if (data.length > 0) {
            setNotif(true);
          } else {
            setNotif(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });

      getWorkDay()
        .then((data) => {
          setWorkDay(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [dispatch]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      actions.userLogin(userData);
      getMenu(userData)
        .then((data) => {
          actions.setMenu(data);
          setTopMenu(data);
          setLoadingMenu(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      Router.push("/");
    }
  }, [dispatch]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    var month = moment().format("M");
    var year = moment().format("Y");
    if (userData) {
      getAuth(userData)
        .then((data) => {
          if (data[0].roleCode === "PIMCAB") {
            setRole("PIMCAB");
            setFocus("WORK-VISIT");
            getSalesTarget75Pimca(userData, month, year)
              .then((data) => {
                if (data) {
                  setSalesTarget75(data);
                }
              })
              .catch((err) => console.log(err));
            getSalesTargetPimca(userData, month, year)
              .then((data) => {
                if (data) {
                  setSalesTarget(data);
                }
              })
              .catch((err) => console.log(err));
            getFrontlinerPimca(userData, month, year)
              .then((data) => {
                if (data) {
                  setFrontliner(data);
                }
              })
              .catch((err) => console.log(err));
          } else if (data[0].roleCode === "SMR") {
            setRole("SMR");
            setFocus("PLAN");

            getRevisePlanListSmr(userData)
              .then((data) => {
                setRevisePlan(data);
                console.log("revise plan", data);
              })
              .catch((err) => {
                console.log(err);
              });
            getReviseUnPlanListSmr(userData)
              .then((data) => {
                setReviseUnPlan(data);
                console.log("revise unplan", data);
              })
              .catch((err) => {
                console.log(err);
              });
            getReviseSpreadingListSmr(userData)
              .then((data) => {
                setReviseSpreading(data);
                console.log("revise spreading", data);
              })
              .catch((err) => {
                console.log(err);
              });

            getSalesTargetSMR(userData, month, year)
              .then((data) => {
                if (data) {
                  setSalesTarget(data);
                  // console.log(data);
                }
              })
              .catch((err) => {
                console.log(err);
              });
            getSalesTarget75SMR(userData, month, year)
              .then((data) => {
                if (data) {
                  setSalesTarget75(data);
                  // console.log(data);
                }
              })
              .catch((err) => {
                console.log(err);
              });
            getProduktifitas(userData, month, year)
              .then((data) => {
                if (data) {
                  setProduktifitas(data);
                  // console.log(data);
                }
              })
              .catch((err) => {
                console.log(err);
              });
            getFrontliner(userData, month, year)
              .then((data) => {
                if (data) {
                  setFrontliner(data);
                  // console.log(data);
                }
              })
              .catch((err) => {
                console.log(err);
              });
            getNoo(userData, month, year)
              .then((data) => {
                if (data) {
                  setNOO(data);
                  // console.log(data);
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
      Router.push("/");
    }
  }, [dispatch]);

  useEffect(() => {
    setLoading(true);
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      if (focus === "PLAN") {
        getPlanList(userData)
          .then((data) => {
            setPlan(data);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
        getPlanHistory(userData)
          .then((data) => {
            setPlanHistory(data);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (focus === "WORK-VISIT") {
        getAllWorkVisit(userData)
          .then((data) => {
            // console.log(data);
            setWorkVisit(
              data.filter((val) => {
                return val.isPenilaian === false;
              })
            );
            setWorkVisitHistory(
              data.filter((val) => {
                return val.isPenilaian === true;
              })
            );
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (focus === "SALES-TRACKING") {
        getApproval(userData)
          .then((data) => {
            var dataCheckBox = data.map((val) => {
              return { ...val, checkBox: false };
            });
            setPendingApprove(dataCheckBox);
            // console.log(data);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (focus === "UNPLAN") {
        getUnplanMonthlyHistory(userData)
          .then((data) => {
            // console.log(data);
            setUnplanHistory(data);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (focus === "SPREADING") {
        getSpreadingMonthlyHistory(userData)
          .then((data) => {
            // console.log(data);
            setSpreadingHistory(data);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      Router.push("/");
    }
  }, [focus]);

  const renderTopMenu = () => {
    var auth = topMenu.filter((val) => {
      if (role === "SMR") {
        return (
          val.moduleCode === "PLAN" ||
          val.moduleCode === "UNPLAN" ||
          val.moduleCode === "SPREADING"
        );
      } else if (role === "PIMCAB") {
        return (
          val.moduleCode === "WORK-VISIT" || val.moduleCode === "SALES-TRACKING"
        );
      }
    });

    const render = () => {
      return auth.map((val, index) => {
        return (
          <div
            className={
              focus === val.moduleCode ? styles.focus_menu : styles.menu
            }
            onClick={() => {
              setFocus(val.moduleCode);
            }}
            key={index}
          >
            {val.moduleCode === "PLAN"
              ? "Plan"
              : val.moduleCode === "UNPLAN"
              ? "Unplan"
              : val.moduleCode === "SPREADING"
              ? "Spreading"
              : val.moduleCode === "WORK-VISIT"
              ? "Work Visit"
              : val.moduleCode === "SALES-TRACKING"
              ? "Approval"
              : ""}
          </div>
        );
      });
    };
    if (auth) {
      return (
        <div
          className={
            auth.length === 3
              ? styles.menu_grid3
              : auth.length === 2
              ? styles.menu_grid1
              : ""
          }
        >
          {render()}
        </div>
      );
    }
  };

  const renderList = (type, data) => {
    if (data.length === 0) {
      return (
        <div
          style={{
            fontSize: "15px",
            color: "rgb(208, 208, 208)",
            textAlign: "left",
            margin: "30px 0",
          }}
        >
          No Item
        </div>
      );
    } else {
      return data.map((val, index) => {
        return (
          <Link
            href={focus === "PLAN" ? `/visit/plan/${data.idMasterPlan}` : "/"}
          >
            <a>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "#5E5873",
                  textAlign: "left",
                  margin: "10px 0",
                }}
                key={index}
              >
                <div
                  style={{ display: "grid", gridTemplateColumns: "12% 88%" }}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: type === "PLAN" ? "#FFF1CC" : "#d1e4e1",
                      borderRadius: "20px",
                      padding: "4px",
                    }}
                  >
                    <div
                      style={{
                        width: "12px",
                        height: "12px",
                        backgroundColor:
                          type === "PLAN" ? "#feb800" : "#41867a",
                        borderRadius: "20px",
                      }}
                    />
                  </div>
                  <div>
                    <div>{val.namaOutlet}</div>
                    <div style={{ fontSize: "14px", fontWeight: "300" }}>
                      {val.alamatOutlet}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        );
      });
    }
  };

  const renderListWorkVisit = (data) => {
    if (data.length === 0) {
      return (
        <div
          style={{
            fontSize: "15px",
            color: "rgb(208, 208, 208)",
            textAlign: "left",
            margin: "30px 0",
          }}
        >
          No Item
        </div>
      );
    } else {
      return data.map((val, index) => {
        return (
          <Link href={`work-visit/${val.idMasterPlan}`}>
            <a>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "#5E5873",
                  textAlign: "left",
                  margin: "10px 0",
                }}
                key={index}
              >
                <div
                  style={{ display: "grid", gridTemplateColumns: "12% 88%" }}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: "#FFF1CC",
                      borderRadius: "20px",
                      padding: "4px",
                    }}
                  >
                    <div
                      style={{
                        width: "12px",
                        height: "12px",
                        backgroundColor: "#feb800",
                        borderRadius: "20px",
                      }}
                    />
                  </div>
                  <div>
                    <div>{val.namaSMR}</div>
                    <div style={{ fontSize: "14px", fontWeight: "300" }}>
                      Rayon - {val.rayon}
                    </div>
                    <div style={{ fontSize: "14px", fontWeight: "300" }}>
                      Produk Focus - {val.produkFokus}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        );
      });
    }
  };

  const renderPlan = () => {
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <>
          <Card style={{ borderRadius: "5px", marginTop: "22px" }} shadow>
            <div className={styles.overview}>
              <div>
                <span className={styles.date}>
                  {moment().format("D / MMM / YYYY")}
                </span>
                <div style={{ color: "#5E5873", marginTop: "7px" }}>
                  <span style={{ fontSize: "36px", fontWeight: "600" }}>
                    {planHistory.length}
                  </span>
                  <span style={{ fontSize: "18px" }}>
                    /{plan.length + planHistory.length}
                  </span>
                </div>
                <Link href="/master-plan-visit">
                  <a>
                    <button
                      style={{
                        marginTop: "7px",
                        backgroundColor: "#FEB800",
                        padding: "10px 22px",
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                      }}
                    >
                      Add New Plan +
                    </button>
                  </a>
                </Link>
              </div>
              <div>
                <div className={styles.pie_percentage}>
                  {planHistory.length === 0
                    ? "0%"
                    : `${Math.round(
                        (planHistory.length /
                          (plan.length + planHistory.length)) *
                          100
                      )}%`}
                </div>
                <Doughnut
                  data={dataPlan}
                  options={donutOptions}
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </Card>
          <Card style={{ marginTop: "22px", borderRadius: "30px" }} shadow>
            <div className={styles.plan_container}>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#5E5873",
                  textAlign: "left",
                }}
              >
                Your Plan Today
              </div>
              <div style={{ margin: "22px 0" }}>{renderList("PLAN", plan)}</div>
              <Link href="/visit/plan">
                <a>
                  <Button text={"See Details"} />
                </a>
              </Link>
            </div>
          </Card>
        </>
      );
    }
  };

  const renderSpreading = () => {
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <>
          <Card style={{ borderRadius: "5px", marginTop: "22px" }} shadow>
            <div className={styles.overview}>
              <div>
                <span className={styles.date}>
                  {moment().format("D / MMM / YYYY")}
                </span>
                <div style={{ color: "#5E5873", marginTop: "7px" }}>
                  <span style={{ fontSize: "36px", fontWeight: "600" }}>
                    {spreadingHistory.length}
                  </span>
                  <span style={{ fontSize: "18px" }}>/{plan.length}</span>
                </div>
                <Link href={"/visit/spreading/"}>
                  <a>
                    <button
                      style={{
                        marginTop: "7px",
                        backgroundColor: "#FEB800",
                        padding: "10px 22px",
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                      }}
                    >
                      Add New NOO +
                    </button>
                  </a>
                </Link>
              </div>
              <div>
                <div className={styles.pie_percentage}>0%</div>
                <Doughnut
                  data={dataSpreading}
                  options={donutOptions}
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </Card>
          <Card style={{ marginTop: "22px", borderRadius: "30px" }} shadow>
            <div className={styles.plan_container}>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#5E5873",
                  textAlign: "left",
                }}
              >
                Spreading History
              </div>
              <div style={{ margin: "22px 0" }}>
                {renderList("SPREADING", spreadingHistory)}
              </div>
              <Link href="/visit/spreading/history">
                <a>
                  <Button text={"See Details"} />
                </a>
              </Link>
            </div>
          </Card>
        </>
      );
    }
  };

  const renderUnplan = () => {
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <>
          <Card style={{ borderRadius: "5px", marginTop: "22px" }} shadow>
            <div className={styles.unplan_grid}>
              <div className={styles.num_total_unplan}>
                {unplanHistory.length}
              </div>
              <div style={{ fontSize: "14px" }}>Total Unplan Visit</div>
              <div className={styles.date}>{moment().format("MMMM")}</div>
            </div>
          </Card>
          <Card style={{ borderRadius: "5px", marginTop: "11px" }} shadow>
            <Link href="/visit/unplan">
              <a style={{ textDecoration: "none" }}>
                <div className={styles.unplan_grid2}>
                  <div className={styles.add_unplan}>
                    <div style={{ marginTop: "-8px" }}>+</div>
                  </div>
                  <div style={{ fontSize: "16px", fontWeight: "600" }}>
                    Any Unplan Visit?
                    <div
                      style={{
                        color: "#B9B9C3",
                        fontWeight: "300",
                        fontSize: "13px",
                      }}
                    >
                      Add your unplan visit here
                    </div>{" "}
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <img src={"/next.svg"} />
                  </div>
                </div>
              </a>
            </Link>
          </Card>

          <Card style={{ marginTop: "22px", borderRadius: "30px" }} shadow>
            <div className={styles.plan_container}>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#5E5873",
                  textAlign: "left",
                }}
              >
                Unplan Visit History
              </div>
              <div style={{ margin: "22px 0" }}>
                {renderList("UNPLAN", unplanHistory)}
              </div>
              <Link href="/visit/unplan/history">
                <a>
                  <Button text={"See Details"} />
                </a>
              </Link>
            </div>
          </Card>
        </>
      );
    }
  };

  const renderWorkVisit = () => {
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <>
          <Card style={{ borderRadius: "5px", marginTop: "22px" }} shadow>
            <div className={styles.overview}>
              <div>
                <span className={styles.date}>
                  {moment().format("D / MMM / YYYY")}
                </span>
                <div style={{ color: "#5E5873", marginTop: "7px" }}>
                  <span style={{ fontSize: "36px", fontWeight: "600" }}>
                    {workVisitHistory.length}
                  </span>
                  <span style={{ fontSize: "18px" }}>
                    /{workVisit.length + workVisitHistory.length}
                  </span>
                </div>
                <Link href="/master-work-visit">
                  <a>
                    <button
                      style={{
                        marginTop: "7px",
                        backgroundColor: "#FEB800",
                        padding: "10px 22px",
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                      }}
                    >
                      Add New +
                    </button>
                  </a>
                </Link>
              </div>
              <div>
                <div className={styles.pie_percentage}>
                  {workVisitHistory.length === 0
                    ? "0%"
                    : `${Math.round(
                        (workVisitHistory.length /
                          (workVisit.length + workVisitHistory.length)) *
                          100
                      )}%`}
                </div>
                <Doughnut
                  data={dataWorkVisit}
                  options={donutOptions}
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </Card>
          <Card style={{ marginTop: "22px", borderRadius: "30px" }} shadow>
            <div className={styles.plan_container}>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#5E5873",
                  textAlign: "left",
                }}
              >
                Your Work Visit Today
              </div>
              <div style={{ margin: "22px 0" }}>
                {renderListWorkVisit(workVisit)}
              </div>
              <Link href="/work-visit">
                <a>
                  <Button text={"See Details"} />
                </a>
              </Link>
            </div>
          </Card>
        </>
      );
    }
  };

  const onApprove = () => {
    var checkPending = pendingApprove.filter((val) => {
      return val.checkBox;
    });
    if (checkPending.length) {
      const userData = JSON.parse(localStorage.getItem("user"));
      if (userData) {
        setLoadingApprove(true);
        for (let i = 0; i < checkPending.length; i++) {
          const module =
            checkPending[i].modul === "Plan"
              ? "VISITPLAN"
              : checkPending[i].modul === "UnPlan"
              ? "VISITUNPLAN"
              : checkPending[i].modul === "Spreading"
              ? "SPREADING"
              : "";

          const data = {
            approvalTransactionDataModel: [
              {
                systemCode: "SAKAMOR",
                moduleCode: module,
                approvalLevel: 1,
                id: checkPending[i].id,
                approvalID:
                  checkPending[i].modul === "Plan"
                    ? 352
                    : checkPending[i].modul === "UnPlan"
                    ? 358
                    : checkPending[i].modul === "Spreading"
                    ? 359
                    : "",
                docNo: checkPending[i].nomorDokumen,
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
            docNo: checkPending[i].nomorDokumen,
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
              documentNumber: checkPending[i].nomorDokumen,
              emailTo: "string",
              emailCC: "string",
              emailBCC: "string",
              emailSubject: "string",
              emailBody: "string",
            },
          };
          approvalApprove(
            data,
            checkPending[i].modul,
            checkPending[i].id,
            userData
          )
            .then((data) => {
              if (i === checkPending.length - 1) {
                setLoadingApprove(false);
                getApproval(userData)
                  .then((data) => {
                    var dataCheckBox = data.map((val) => {
                      return { ...val, checkBox: false };
                    });
                    setPendingApprove(dataCheckBox);
                    setLoading(false);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
            })
            .catch((err) => console.log(err));
        }
      }
    }
  };

  const renderApproval = () => {
    var checkPending = pendingApprove.filter((val) => {
      return val.checkBox;
    });
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <>
          <Card style={{ marginTop: "22px", borderRadius: "30px" }} shadow>
            <div className={styles.plan_container}>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#5E5873",
                  textAlign: "left",
                }}
              >
                Pending Approval
                <div style={{ margin: "22px 0" }}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "10% 90%",
                      paddingBottom: "10px",
                    }}
                  >
                    <div style={{ paddingTop: "10px" }}>
                      <CheckBox
                        onClick={() => {
                          if (checkPending.length === pendingApprove.length) {
                            var all = pendingApprove.map((val) => {
                              return { ...val, checkBox: false };
                            });
                            setPendingApprove(all);
                          } else {
                            var all = pendingApprove.map((val) => {
                              return { ...val, checkBox: true };
                            });
                            setPendingApprove(all);
                          }
                        }}
                        checked={
                          checkPending.length === pendingApprove.length
                            ? true
                            : false
                        }
                      />
                    </div>
                    <Button
                      onClick={() => {
                        onApprove();
                      }}
                      color={checkPending.length ? "green" : "disable"}
                      text={"Approve"}
                    />
                  </div>
                  {pendingApprove.map((val, index) => {
                    return (
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "10% 90%",
                          fontSize: "14px",
                          margin: "8px 0",
                        }}
                      >
                        <>
                          <div>
                            <CheckBox
                              checked={val.checkBox}
                              onClick={() => {
                                pendingApprove.splice(index, 1, {
                                  ...pendingApprove[index],
                                  checkBox: !val.checkBox,
                                });
                                setDummy(dummy + 1);
                              }}
                            />
                          </div>
                          <div
                            onClick={() => {
                              console.log(val);
                              actions.setFocusApproval(val);
                              router.push(`/approval/${val.modul}/${val.id}`);
                            }}
                          >
                            <div
                              style={{
                                fontWeight: "700",
                                display: "grid",
                                gridTemplateColumns: "2fr 1fr",
                              }}
                            >
                              <div>{val.usernameSMR}</div>
                              <div
                                style={{
                                  backgroundColor: "#feb800",
                                  color: "white",
                                  textAlign: "center",
                                  borderRadius: "20px",
                                  fontWeight: "500",
                                  fontSize: "12px",
                                  paddingTop: "1px",
                                }}
                              >
                                {val.modul}
                              </div>
                            </div>
                            <div
                              style={{
                                fontWeight: "700",
                                fontSize: "12px",
                              }}
                            >
                              {val.namaOutlet}
                            </div>
                            <div style={{ fontSize: "12px" }}>
                              {val.alamatOutlet}
                            </div>
                          </div>
                        </>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Card>
        </>
      );
    }
  };

  const renderWorkDay = () => {
    if (workDay.length !== 0 && !loading && !loadingMenu) {
      return (
        <Card style={{ marginTop: "22px", borderRadius: "6px" }} shadow>
          <div className={styles.plan_container}>
            <div className={styles.progress_title}>
              Working Day {moment().format("MMMM YYYY")}
              <div style={{ fontWeight: "700" }}>
                <span style={{ color: "#FEB800" }}>{workDay.hariKerja}</span>
                <span style={{ fontSize: "12px", fontWeight: "400" }}>
                  {" / "}
                  {workDay.totalHariKerja}
                </span>
              </div>
            </div>
          </div>
        </Card>
      );
    }
  };
  const renderProgress = () => {
    const renderSales = (title, data) => {
      return (
        <>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
            <div className={styles.progress_title}>{title}</div>
            <div className={styles.progress_number}>
              {data.sales.toLocaleString("id-ID")}
              <span style={{ fontSize: "12px", fontWeight: "400" }}>
                {" / "}
                {data.target.toLocaleString("id-ID")}
              </span>
            </div>
          </div>
          <div style={{ margin: "13px 0 0 0" }}>
            <div className={styles.progress_bar}></div>
            <div
              className={styles.progress_bar_now}
              style={{
                width: `${(data.sales / data.target) * 100}%`,
              }}
            ></div>
          </div>
        </>
      );
    };
    if (!loading && !loadingMenu) {
      return (
        <Card style={{ marginTop: "22px", borderRadius: "6px" }} shadow>
          <div className={styles.plan_container}>
            {salesTarget.length !== 0 ? renderSales("Sales", salesTarget) : ""}
            {salesTarget75.length !== 0
              ? renderSales("Sales 75%", salesTarget75)
              : ""}
            {NOO.length !== 0 ? renderSales("Sales NOO", NOO) : ""}
            {frontliner.length !== 0 ? (
              <>
                <div
                  style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
                >
                  <div className={styles.progress_title}>Frontliner</div>
                  <div className={styles.progress_number}>
                    {frontliner.ach}
                    <span style={{ fontSize: "12px", fontWeight: "400" }}>
                      {" / "}
                      {frontliner.target}
                    </span>
                  </div>
                </div>
                <div style={{ margin: "13px 0 0 0" }}>
                  <div className={styles.progress_bar}></div>
                  <div
                    className={styles.progress_bar_now}
                    style={{
                      width: `${(frontliner.ach / frontliner.target) * 100}%`,
                    }}
                  ></div>
                </div>
              </>
            ) : (
              ""
            )}
            {produktifitas.length !== 0 ? (
              <>
                <div
                  style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
                >
                  <div className={styles.progress_title}>Produktifitas</div>
                  <div className={styles.progress_number}>
                    {produktifitas.achievement}
                    <span style={{ fontSize: "12px", fontWeight: "400" }}>
                      {" / "}
                      {produktifitas.target}
                    </span>
                  </div>
                </div>
                <div style={{ margin: "13px 0 0 0" }}>
                  <div className={styles.progress_bar}></div>
                  <div
                    className={styles.progress_bar_now}
                    style={{
                      width: `${
                        (produktifitas.achievement / produktifitas.target) * 100
                      }%`,
                    }}
                  ></div>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </Card>
      );
    }
  };

  const renderReviseList = () => {
    const renderList = (data, modul) => {
      var render = data.map((val) => {
        return (
          <div
            style={{
              fontSize: "14px",
              margin: "8px 0",
            }}
            onClick={() => {
              console.log(val);
              actions.setFocusApproval(val);
              if (modul === "Plan") {
                getVisitPlanProduct(val.idVisitPlan)
                  .then((dataInvoice) => {
                    actions.setReviseAvability(dataInvoice);
                    // console.log(dataInvoice);
                    getInvoiceDataPosm(val.idVisitPlan)
                      .then((dataPosm) => {
                        actions.setReviseVisibility(dataPosm);
                        router.push(`/revise/${modul}/${val.idVisitPlan}`);
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              } else if (modul === "UnPlan") {
                getUnPlanProducts(val.id)
                  .then((dataInvoice) => {
                    console.log(dataInvoice);
                    actions.setReviseAvability(dataInvoice);
                    getInvoiceDataPosmUnplan(val.id)
                      .then((dataPosm) => {
                        actions.setReviseVisibility(dataPosm);
                        console.log(dataPosm);
                        router.push(`/revise/${modul}/${val.id}`);
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              } else if (modul === "Spreading") {
                getSpreadingProduct(val.id)
                  .then((dataInvoice) => {
                    console.log(dataInvoice);
                    getInvoiceDataPosmSpreading(val.id)
                      .then((dataPosm) => {
                        actions.setReviseVisibility(dataPosm);
                        console.log(dataPosm);
                        router.push(`/revise/${modul}/${val.id}`);
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
              // router.push(`/revise/${modul}/${val.id}`);
            }}
          >
            <>
              <div>
                <div
                  style={{
                    fontWeight: "700",
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr",
                  }}
                >
                  <div>{val.usernameSMR}</div>
                  <div
                    style={{
                      backgroundColor: "#feb800",
                      color: "white",
                      textAlign: "center",
                      borderRadius: "20px",
                      fontWeight: "500",
                      fontSize: "12px",
                      paddingTop: "1px",
                    }}
                  >
                    {modul}
                  </div>
                </div>
                <div
                  style={{
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  {val.namaOutlet}
                </div>
                <div style={{ fontSize: "12px" }}>{val.alamatOutlet}</div>
              </div>
            </>
          </div>
        );
      });
      return render;
    };
    if (revisePlan.length || reviseUnPlan.length || reviseSpreading.length) {
      return (
        <Card
          style={{ borderRadius: "5px", marginTop: "22px", color: "#5E5873" }}
          shadow
        >
          <div className={styles.plan_container}>
            <div
              style={{
                fontSize: "18px",
                fontWeight: "500",
                color: "#5E5873",
                textAlign: "left",
              }}
            >
              <div>Revise Visit </div>
              {renderList(revisePlan, "Plan")}
              {renderList(reviseUnPlan, "UnPlan")}
              {renderList(reviseSpreading, "Spreading")}
            </div>
          </div>
        </Card>
      );
    }
  };

  const getGreetingTime = (m) => {
    var g = null; //return g

    if (!m || !m.isValid()) {
      return;
    } //if we can't find a valid or filled moment, we return.

    var split_afternoon = 12; //24hr time to split the afternoon
    var split_evening = 17; //24hr time to split the evening
    var currentHour = parseFloat(m.format("HH"));

    if (currentHour >= split_afternoon && currentHour <= split_evening) {
      g = "Afternoon,";
    } else if (currentHour >= split_evening) {
      g = "Evening,";
    } else {
      g = "Morning,";
    }

    return g;
  };

  const renderPage = () => {
    if (loading && loadingMenu) {
      return (
        <>
          <Spinner />
          <BotNav />
        </>
      );
    } else {
      return (
        <div>
          <Head>
            <title>Home</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className={styles.container}>
            <div className={styles.wrapper}>
              <div className={styles.bg_top} />
              <div className={styles.user_info_grid}>
                <img
                  className={styles.pp}
                  src={PP ? PP : "/profile-nav1.svg"}
                />
                <div style={{ marginLeft: "15px" }}>
                  <div style={{ fontSize: "14px" }}>
                    {getGreetingTime(moment())} {state.userReducer.user.name}
                  </div>
                  <div style={{ fontSize: "12px" }}>{role}</div>
                </div>
                <div>
                  <Link href={"/notification"}>
                    <a style={{ textDecoration: "none" }}>
                      <img className={styles.notif} src="/notif.svg" />
                      {notif ? (
                        <div
                          style={{
                            position: " relative",
                            top: "-30px",
                            right: "-14px",
                          }}
                        >
                          <div
                            style={{
                              width: "21px",
                              height: "18px",
                              borderRadius: "20px",
                              backgroundColor: "#feb800",
                              position: "relative",
                              color: "white",
                              fontSize: "12px",
                            }}
                          >
                            <div style={{ textAlign: "center" }}>
                              {newAnnouncement.length < 9
                                ? newAnnouncement.length
                                : "9+"}
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </a>
                  </Link>
                </div>
                <div className={styles.main}>
                  {renderTopMenu()}
                  {focus === "PLAN"
                    ? renderPlan()
                    : focus === "UNPLAN"
                    ? renderUnplan()
                    : focus === "SPREADING"
                    ? renderSpreading()
                    : focus === "WORK-VISIT"
                    ? renderWorkVisit()
                    : focus === "SALES-TRACKING"
                    ? renderApproval()
                    : ""}
                  {renderReviseList()}
                  {renderWorkDay()}
                  {renderProgress()}
                  <div style={{ marginBottom: "120px" }} />
                </div>
              </div>
            </div>
          </div>
          <BotNav />
        </div>
      );
    }
  };
  return renderPage();
}
