import React, { useState, useEffect, useContext } from "react";
import Router from "next/router";
import { Stores } from "../../store";

import styles from "../../styles/components/History.module.css";
import Nav from "../../components/Nav";
import Spinner from "../../components/Spinner";
import Button from "../../components/Button";
import DetailPlan from "../../components/DetailPlan";
import Link from "next/link";
import Card from "../../components/Card";
import { getAllWorkVisit, getAuth, getUnplanNearMe } from "../../helper";

export default function History({ type }) {
  const { state, dispatch, actions } = useContext(Stores);
  const [workVisit, setWorkVisit] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
    getAllWorkVisit()
      .then((res) => {
        console.log(res);
        setWorkVisit(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  const renderList = () => {
    const filterData = workVisit.filter((val) => {
      if (val.namaSMR !== null) {
        return val.namaSMR.toLowerCase().includes(search.toLowerCase());
      }
    });
    const render = filterData.map((val, index) => {
      return (
        <Card style={{ marginTop: "22px", borderRadius: "5px" }}>
          <div style={{ padding: "21px 18px" }}>
            <div className={styles.top_grid}>
              <div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: "400",
                    marginBottom: "8px",
                  }}
                >
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
                <Link href={`/work-visit/${val.id}`}>
                  <a>
                    <div
                      style={{
                        textAlign: "center",
                        margin: "10px 0",
                        paddingTop: "14px",
                      }}
                    >
                      <Button
                        color={"white"}
                        text={"More"}
                        onClick={() => {
                          // actions.setUnplanOutlet(val);
                        }}
                      />
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Card>
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
              title={"Work Visit"}
              backAction={() => Router.push("/")}
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
