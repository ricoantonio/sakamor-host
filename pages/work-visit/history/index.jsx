import React, { useState, useEffect, useContext } from "react";
import Router from "next/router";
import { Stores } from "../../../store";
import Link from "next/link";

import styles from "../../../styles/components/History.module.css";
import Nav from "../../../components/Nav";
import Spinner from "../../../components/Spinner";
import Card from "../../../components/Card";

import {
  getAuth,
  getPlanMonthlyHistory,
  getUnplanMonthlyHistory,
  getSpreadingMonthlyHistory,
  getWorkVisitMonthlyHistory,
} from "../../../helper";
import moment from "moment";

export default function History({ type }) {
  const { state, dispatch, actions } = useContext(Stores);
  const [history, setHistory] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const userMenu = JSON.parse(localStorage.getItem("menu"));
    if (userData) {
      getAuth(userData)
        .then((data) => {
          var auth = data.filter((val) => {
            return val.moduleCode === type;
          });
          var menu = userMenu.filter((val) => {
            return val.moduleCode === type;
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
    getWorkVisitMonthlyHistory(userData)
      .then((res) => {
        setHistory(res);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  const renderList = () => {
    const filterData = history.filter((val) => {
      if (val.namaSMR !== null) {
        return val.namaSMR.toLowerCase().includes(search.toLowerCase());
      }
    });
    const render = filterData.map((val, index) => {
      return (
        <Link href={`/work-visit/history/${val.idWorkVisit}`}>
          <a style={{ textDecoration: "none" }}>
            <Card style={{ marginTop: "22px", borderRadius: "5px" }}>
              <div className={styles.history_workvisit_container}>
                <div style={{ padding: "21px 18px", color: "black" }}>
                  <div className={styles.top_grid}>
                    <div>
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: "400",
                          marginBottom: "8px",
                        }}
                      >
                        <div style={{ marginBottom: "8px" }}>
                          <span className={styles.date}>
                            {moment(val.tanggal).format("D / MMM / YYYY")}
                          </span>
                        </div>
                        <span className={styles.rayon_container}>
                          {val.kodeRayon}
                        </span>
                      </div>
                      <div
                        style={{
                          fontSize: "18px",
                          fontWeight: "500",
                        }}
                      >
                        {val.namaSMR}
                      </div>
                      <div style={{ fontSize: "12px", fontWeight: "400" }}>
                        Produk Focus
                      </div>
                      <div style={{ fontSize: "12px", fontWeight: "400" }}>
                        <span className={styles.produk_fokus_container}>
                          {val.produkFokus}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ margin: "auto", padding: "18px" }}>
                  <img src={"/done.svg"} style={{ height: "60px" }} />
                </div>
              </div>
            </Card>
          </a>
        </Link>
      );
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
            <Nav
              title={"History"}
              backAction={() => Router.push("/work-visit")}
              color={"white"}
            />
            <div className={styles.main}>
              <div className={styles.search_fixed}>
                <input
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  placeholder="Search"
                  className={styles.input}
                  style={{ marginTop: "0" }}
                />
              </div>
              <div style={{ margin: "60px 0" }}>{renderList()}</div>
            </div>
          </div>
        </div>
      );
    }
  };
  return render();
}
