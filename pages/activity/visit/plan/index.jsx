import React, { useState, useEffect, useContext } from "react";

import styles from "../../../../styles/pages/Plan.module.css";
import Nav from "../../../../components/Nav";
import { Stores } from "../../../../store";
import Spinner from "../../../../components/Spinner";
import DetailPlan from "../../../../components/DetailPlan";
import Link from "next/link";
import Card from "../../../../components/Card";
import { Formik, Field, Form } from "formik";
import Button from "../../../../components/Button";
import Router from "next/router";

export default function Plan() {
  const { state, dispatch, actions } = useContext(Stores);
  const [plan, setPlan] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const userMenu = JSON.parse(localStorage.getItem("menu"));
    if (userData) {
      fetch(
        `http://10.100.4.116:8229/api/User/GetAuthorize?username=${userData.username}`
      )
        .then((response) => {
          return response.json();
        })
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
    fetch(
      "http://10.100.4.116:8230/api/ActivityVisitPlan/GetAllActivityVisitPlan"
    )
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
  }, [dispatch]);

  const renderList = () => {
    const render = plan.map((val, index) => {
      // console.log(plan);
      return <DetailPlan key={index} data={val} />;
    });
    return render;
  };
  const render = () => {
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <Nav backHref="/" />
            <div className={styles.title_container}>
              <div className={styles.title}>Visit Plan</div>
              <input
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                placeholder="Search"
                className={styles.input}
              />
            </div>
            <div className={styles.main}>
              {renderList()}
              <div style={{ marginTop: "22px" }}>
                <Button text="Add" />
                <div className={styles.view_history}>View History</div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  return render();
}
