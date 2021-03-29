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

import { API_URL, API_USER, TOKEN, API_VISIT_PLAN } from "../constant";

export default function Home() {
  const { state, dispatch, actions } = useContext(Stores);
  const [focus, setFocus] = useState("PLAN");
  const [plan, setPlan] = useState([]);
  const [topMenu, setTopMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      // `http://10.100.4.116:8229/api/user/getmenu?username=${userData.email}`
      actions.userLogin(userData);
      fetch(API_URL + API_USER + `/User/GetMenu?username=${userData.email}`, {
        headers: {
          apiKey: TOKEN,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setTopMenu(data);
          actions.setMenu(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      Router.push("/");
    }
  }, [focus]);

  useEffect(() => {
    // "http://10.100.4.116:8230/api/MasterVisitPlan/GetAllMasterVisitPlan"
    fetch(API_URL + API_VISIT_PLAN + "/MasterVisitPlan/GetAllMasterVisitPlan", {
      headers: {
        apiKey: TOKEN,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPlan(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [focus]);

  // const renderMainMenu = () => {
  //   var menuList =
  //     state && state.menuReducer && state.menuReducer.menu
  //       ? state.menuReducer.menu
  //       : [];
  //   const parentMenu = menuList.filter((val) => {
  //     return val.isParentMenu === true;
  //   });
  //   const render = parentMenu.map((val, index) => {
  //     return (
  //       <Link href={"/" + val.moduleName.toLowerCase()} key={index}>
  //         <a className={styles.menu_container}>
  //           <img className={styles.menu_img} src={val.iconClass} />
  //           <div className={styles.menu_text}>{val.moduleName}</div>
  //         </a>
  //       </Link>
  //     );
  //   });
  //   return render;
  // };
  const renderTopMenu = () => {
    var auth = topMenu.filter((val) => {
      return (
        val.moduleCode === "PLAN" ||
        val.moduleCode === "UNPLAN" ||
        val.moduleCode === "SPREADING"
        // || val.moduleCode === "WORK-VISIT"
      );
    });
    const render = () => {
      if (auth.length === 3) {
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
      }
    };
    if (auth) {
      return <div className={styles.menu_grid}>{render()}</div>;
    }
  };
  const renderPlan = () => {
    var now = new Date();
    var date = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();
    const planMap = plan.map((val, index) => {
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
          <div>{val.namaOutlet}</div>
          <div style={{ fontSize: "14px", fontWeight: "300" }}>
            {val.alamatOutlet}
          </div>
        </div>
      );
    });

    if (loading) {
      return <Spinner />;
    } else {
      return (
        <>
          <Card style={{ borderRadius: "5px", marginTop: "22px" }}>
            <div className={styles.overview}>
              <div>
                <span
                  className={styles.date}
                >{`${date} / ${month} / ${year}`}</span>
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
              <div></div>
            </div>
          </Card>
          <Card style={{ marginTop: "22px", borderRadius: "30px" }}>
            <div className={styles.plan_container}>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#5E5873",
                  textAlign: "left",
                }}
              >
                Your Plan Today
              </div>
              <div style={{ margin: "22px 0" }}>{planMap}</div>
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
  const renderUnplan = () => {};
  const renderSpreading = () => {};
  const renderWorkVisit = () => {};

  const renderPage = () => {
    if (state.menuReducer.menu == null) {
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
                  <div style={{ fontSize: "12px" }}>{"user.role**"}</div>
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
