import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Router from "next/router";
import { Stores } from "../../../store";
import styles from "../../../styles/pages/Plan.module.css";

import Nav from "../../../components/Nav";
import Spinner from "../../../components/Spinner";
import DetailPlan from "../../../components/DetailPlan";
import Button from "../../../components/Button";

import { getAuth, getPlanList } from "../../../helper";

export default function Plan() {
  const { state, dispatch, actions } = useContext(Stores);
  const [plan, setPlan] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    actions.setDefaultVisitPlan();
  }, [dispatch]);

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
    const userData = JSON.parse(localStorage.getItem("user"));

    getPlanList(userData)
      .then((data) => {
        setPlan(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  const renderList = () => {
    const filterData = plan.filter((val) => {
      return (
        val.namaOutlet.toLowerCase().includes(search.toLowerCase()) ||
        val.alamatOutlet.toLowerCase().includes(search.toLowerCase())
      );
    });
    const render = filterData.map((val, index) => {
      return <DetailPlan key={index} data={val} />;
    });
    if (filterData.length == 0) {
      return (
        <div
          style={{ textAlign: "center", marginTop: "150px", color: "#d0d0d0" }}
        >
          No Item
        </div>
      );
    } else {
      return render;
    }
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
              <div style={{ marginBottom: "120px" }} />
              <div className={styles.bottom_container}>
                <Button text="Add" />
                <Link href="/visit/plan/history">
                  <a>
                    <div className={styles.view_history}>View History</div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  return render();
}
