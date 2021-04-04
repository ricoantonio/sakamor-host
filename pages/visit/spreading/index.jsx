import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Router from "next/router";
import { Stores } from "../../../store";
import styles from "../../../styles/pages/Spreading.module.css";

import Nav from "../../../components/Nav";
import Spinner from "../../../components/Spinner";
import DetailPlan from "../../../components/DetailPlan";
import Button from "../../../components/Button";

import { API_URL, API_USER, TOKEN, API_VISIT_PLAN } from "../../../constant";
import Card from "../../../components/Card";
import Dropdown from "../../../components/Dropdown";

export default function Plan() {
  const { state, dispatch, actions } = useContext(Stores);
  const [plan, setPlan] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  var now = new Date();
  var date = now.getDate();
  var month = now.getMonth() + 1;
  var year = now.getFullYear();

  const render = () => {
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <Nav backHref="/" />
            <div className={styles.title_container}>
              <div className={styles.title}>Spreading</div>
            </div>
            <div className={styles.main}>
              <div className={styles.subtitle}>Jenis Channel</div>
              <Card>
                <Dropdown />
              </Card>
              <div className={styles.subtitle}>Outlet</div>
              <input
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                placeholder="Search"
                className={styles.input}
              />
              <div className={styles.bottom_container}>
                <Link href="/visit/spreading/submit">
                  <a>
                    <Button text="Submit" />
                  </a>
                </Link>
                <Link href="/visit/spreading/history">
                  <a>
                    <div className={styles.view_history}>View History</div>
                  </a>
                </Link>
                <Card style={{ borderRadius: "5px", marginTop: "22px" }} shadow>
                  <div className={styles.unplan_grid2}>
                    <div className={styles.add_unplan}>
                      <div style={{ marginTop: "-8px" }}>+</div>
                    </div>
                    <div style={{ fontSize: "16px", fontWeight: "600" }}>
                      Add new outlet
                      <div
                        style={{
                          color: "#B9B9C3",
                          fontWeight: "300",
                          fontSize: "13px",
                        }}
                      >
                        Outlet not available
                      </div>{" "}
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <img src={"/next.svg"} />
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  return render();
}
