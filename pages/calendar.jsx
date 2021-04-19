import React, { useState, useContext, useEffect } from "react";
import Head from "next/head";
import moment from "moment";
import styles from "../styles/pages/Calendar.module.css";
import Router from "next/router";
import Link from "next/link";
import { Stores } from "../store";

import Spinner from "../components/Spinner";
import BotNav from "../components/BotNav";
import Nav from "../components/Nav";
import Button from "../components/Button";
import Card from "../components/Card";

import { getAuth, getMenu, getPlanList } from "../helper";

export default function Calender() {
  const { state, dispatch, actions } = useContext(Stores);
  const [focus, setFocus] = useState("Day");
  const [loading, setLoading] = useState(false);
  const [now, setNow] = useState(new Date());

  var dayName = moment(now).format("dddd");
  var date = moment(now).format("D");
  var monthName = moment(now).format("MMMM");
  var year = moment(now).format("YYYY");

  const renderTopMenu = () => {
    const menu = ["Day", "Week", "Month"];
    return menu.map((val, index) => {
      return (
        <div
          key={index}
          onClick={() => {
            setFocus(val);
            setNow(new Date());
          }}
          className={
            focus === val ? styles.menu_active : styles.menu_non_active
          }
        >
          {val}
        </div>
      );
    });
  };

  const renderDayList = (type, data) => {
    return (
      <div
        style={{
          fontSize: "14px",
          fontWeight: "500",
          color: "#5E5873",
          textAlign: "left",
          margin: "10px 0",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "12% 88%",
          }}
        >
          <div
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: type === "PROMO" ? "#d1e4e1" : "#FFF1CC",
              borderRadius: "20px",
              padding: "4px",
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: type === "PROMO" ? "#41867a" : "#feb800",
                borderRadius: "20px",
              }}
            />
          </div>
          <div>
            <div>Kalpanax Promo</div>
            <div style={{ fontSize: "12px", fontWeight: "300" }}>
              All Outlet
            </div>
          </div>
        </div>
      </div>
    );
  };
  const renderMenuDay = () => {
    return (
      <>
        <Card style={{ borderRadius: "6px", marginTop: "12px" }}>
          <div style={{ padding: "22px 0 0 22px" }}>
            <span className={styles.day_promo_title}>Promo</span>
          </div>
          <div style={{ padding: "6px 20px" }}>{renderDayList("PROMO")}</div>
        </Card>
        <Card style={{ borderRadius: "6px", marginTop: "12px" }}>
          <div style={{ padding: "22px 0 0 22px" }}>
            <span className={styles.day_program_title}>Program</span>
          </div>
          <div style={{ padding: "6px 20px" }}>{renderDayList("PROGRAM")}</div>
        </Card>
      </>
    );
  };
  const renderMenuWeek = () => {};
  const renderMenuMonth = () => {};

  const renderPage = () => {
    if (loading) {
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
              <Nav title={"Calendar"} color={"white"} noBack />
              <div className={styles.main}>
                <Card style={{ borderRadius: "6px" }}>
                  <div className={styles.menu_grid}>{renderTopMenu()}</div>
                  <div className={styles.day_title}>{dayName}</div>
                  <div className={styles.day_grid}>
                    <div
                      onClick={() => {
                        setNow(moment(now).subtract(1, "days"));
                      }}
                    >
                      <img src={"/cev_left.svg"} />
                    </div>
                    <div>
                      <div className={styles.day_date_display}>{date}</div>
                    </div>
                    <div
                      onClick={() => {
                        setNow(moment(now).add(1, "days"));
                      }}
                    >
                      <img src={"/cev_right.svg"} />
                    </div>
                  </div>
                  <div className={styles.day_bot_display}>
                    <div>{monthName}</div>
                    <div>{year}</div>
                  </div>
                </Card>
                {focus === "Day"
                  ? renderMenuDay()
                  : focus === "Week"
                  ? renderMenuWeek()
                  : focus === "Month"
                  ? renderMenuMonth()
                  : ""}
              </div>
            </div>
          </div>
          <BotNav />
        </div>
      );
  };
  return renderPage();
}
