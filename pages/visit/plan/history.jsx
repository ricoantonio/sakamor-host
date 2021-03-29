import React, { useState, useEffect, useContext } from "react";
import Router from "next/router";
import Link from "next/link";

import { Stores } from "../../../store";

import styles from "../../../styles/pages/History.module.css";

import Nav from "../../../components/Nav";
import Spinner from "../../../components/Spinner";
import DetailPlan from "../../../components/DetailPlan";
import Button from "../../../components/Button";
import Card from "../../../components/Card";
import { API_URL, API_USER, TOKEN, API_VISIT_PLAN } from "../../../constant";

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
        API_URL + API_USER + `/User/GetAuthorize?username=${userData.username}`,
        {
          headers: {
            apiKey: TOKEN,
          },
        }
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
      API_URL + API_VISIT_PLAN + "/ActivityVisitPlan/GetAllActivityVisitPlan",
      {
        headers: {
          apiKey: TOKEN,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPlan(data);
        // console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  const renderList = () => {
    const filterData = plan.filter((val) => {
      if (val.namaOutlet !== null) {
        return (
          val.namaOutlet.toLowerCase().includes(search.toLowerCase()) ||
          val.alamatOutlet.toLowerCase().includes(search.toLowerCase())
        );
      }
    });
    const render = plan.map((val, index) => {
      return <DetailPlan key={index} data={val} history />;
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
            <Nav title={"History"} backHref={`/visit/plan`} color={"white"} />
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
