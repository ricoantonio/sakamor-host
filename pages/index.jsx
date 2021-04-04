import React, { useState, useContext, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/pages/Home.module.css";
import Router from "next/router";
import Link from "next/link";
import { Stores } from "../store";

import Spinner from "../components/Spinner";
import BotNav from "../components/BotNav";
import Button from "../components/Button";
import Card from "../components/Card";

import { getAuth, getMenu, getPlanList } from "../helper";

import { Doughnut } from "react-chartjs-2";

export default function Home() {
  const { state, dispatch, actions } = useContext(Stores);
  const [focus, setFocus] = useState("");
  const [plan, setPlan] = useState([]);
  const [spreadingHistory, setSpreadingHistory] = useState([]);
  const [unplanHistory, setUnplanHistory] = useState([]);
  const [role, setRole] = useState("");
  const [topMenu, setTopMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMenu, setLoadingMenu] = useState(true);

  var now = new Date();
  var date = now.getDate();
  var month = now.getMonth() + 1;
  var year = now.getFullYear();

  const monthName = {
    full: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    part: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  };

  const dataPlan = {
    datasets: [
      {
        data: plan.length === 0 ? [0, 1] : [0, 1],
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
  const donutOptions = {
    cutoutPercentage: 75,
    tooltips: { enabled: false },
    hover: { mode: null },
    responsive: true,
    maintainAspectRatio: true,
  };

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
    if (userData) {
      if (focus === "PLAN") {
        getPlanList()
          .then((data) => {
            setPlan(data);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (focus === "UNPLAN") {
        console.log("unplan");
      } else if (focus === "SPREADING") {
        console.log("spreading");
      } else if (focus === "WORK_VISIT") {
        console.log("work visit");
      }
    } else {
      Router.push("/");
    }
  }, [focus]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      getAuth(userData)
        .then((data) => {
          if (data[0].roleCode === "PIMCA") {
            setRole("PIMCA");
            setFocus("WORK_VISIT");
          } else if (data[0].roleCode === "SMR") {
            setRole("SMR");
            setFocus("PLAN");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      Router.push("/");
    }
  }, [dispatch]);

  const renderTopMenu = () => {
    var auth = topMenu.filter((val) => {
      if (role === "SMR") {
        return (
          val.moduleCode === "PLAN" ||
          val.moduleCode === "UNPLAN" ||
          val.moduleCode === "SPREADING"
        );
      } else if (role === "PIMCA") {
        return val.moduleCode === "WORK-VISIT";
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
              : auth.length === 1
              ? styles.menu_grid1
              : ""
          }
        >
          {render()}
        </div>
      );
    }
  };

  const renderList = (data) => {
    return data.map((val, index) => {
      return (
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
          <div style={{ display: "grid", gridTemplateColumns: "12% 88%" }}>
            <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "#d1e4e1",
                borderRadius: "20px",
                padding: "4px",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  backgroundColor: "#41867a",
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
      );
    });
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
                <span className={styles.date}>{`${date} / ${
                  monthName.part[month - 1]
                } / ${year}`}</span>
                <div style={{ color: "#5E5873", marginTop: "7px" }}>
                  <span style={{ fontSize: "36px", fontWeight: "600" }}>0</span>
                  <span style={{ fontSize: "18px" }}>/{plan.length}</span>
                </div>
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
              </div>
              <div>
                <div className={styles.pie_percentage}>
                  {plan.length === 0 ? "0%" : "0%"}
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
              <div style={{ margin: "22px 0" }}>{renderList(plan)}</div>
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
                <span className={styles.date}>{`${date} / ${
                  monthName.part[month - 1]
                } / ${year}`}</span>
                <div style={{ color: "#5E5873", marginTop: "7px" }}>
                  <span style={{ fontSize: "36px", fontWeight: "600" }}>0</span>
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
                {renderList(spreadingHistory)}
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
              <div className={styles.num_total_unplan}>5</div>
              <div style={{ fontSize: "14px" }}>Total Unplan Visit</div>
              <div className={styles.date}>{monthName.full[month - 1]}</div>
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
                {renderList(unplanHistory)}
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

  const renderWorkVisit = () => {};

  const renderPage = () => {
    if (loading && loadingMenu) {
      return <Spinner />;
    } else
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
                <img className={styles.pp} src="/pp.png" />
                <div style={{ marginLeft: "15px" }}>
                  <div style={{ fontSize: "14px" }}>
                    {state.userReducer.user.name}
                  </div>
                  <div style={{ fontSize: "12px" }}>{role}</div>
                </div>
                <img className={styles.notif} src="/notif.svg" />
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
                    : ""}
                  <div style={{ marginBottom: "120px" }} />
                </div>
              </div>
            </div>
          </div>
          <BotNav focus={"home"} />
        </div>
      );
  };
  return renderPage();
}
