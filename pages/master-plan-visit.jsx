import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Router from "next/router";
import { Stores } from "../store";
import styles from "../styles/pages/MasterPlanVisit.module.css";

import Nav from "../components/Nav";
import Spinner from "../components/Spinner";
import DetailPlan from "../components/DetailPlan";
import Button from "../components/Button";

import { getAuth, getPlanList } from "../helper";
import moment from "moment";

export default function Plan() {
  const { state, dispatch, actions } = useContext(Stores);
  const [plan, setPlan] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

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
    setLoading(false);
  }, [dispatch]);

  const render = () => {
    if (loading) {
      return <Spinner />;
    } else {
      return (
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
                    min={moment().format("YYYY-MM-DD")}
                  />
                </div>
                <div style={{ marginLeft: "5px" }}>
                  <Button text="Add" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  return render();
}
