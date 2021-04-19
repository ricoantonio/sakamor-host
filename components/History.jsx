import React, { useState, useEffect, useContext } from "react";
import Router from "next/router";
import Link from "next/link";
import { renderToString } from "react-dom/server";

import { Stores } from "../store";

import styles from "../styles/components/History.module.css";
import html2canvas from "html2canvas";
import Nav from "./Nav";
import Spinner from "./Spinner";
import DetailPlan from "./DetailPlan";
import Modal from "./Modal";
import Button from "./Button";
import Card from "./Card";
import { getAuth, getPlanMonthlyHistory, getPlanHistory } from "../helper";
import moment from "moment";
import Invoice from "./Invoice";

export default function History({ type }) {
  const { state, dispatch, actions } = useContext(Stores);
  const [history, setHistory] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [pdfDownload, setPdfDownload] = useState(false);
  const [pdfFocus, setPdfFocus] = useState([]);

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

    if (type === "PLAN") {
      getPlanMonthlyHistory(userData)
        .then((data) => {
          console.log(data);
          setHistory(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (type === "UNPLAN") {
      setLoading(false);
    } else if (type === "SPREADING") {
      setLoading(false);
    }
  }, [dispatch]);

  const renderList = () => {
    const filterData = history.filter((val) => {
      if (val.namaOutlet !== null) {
        return (
          val.namaOutlet.toLowerCase().includes(search.toLowerCase()) ||
          val.alamatOutlet.toLowerCase().includes(search.toLowerCase())
        );
      }
    });
    const render = history.map((val, index) => {
      return (
        <DetailPlan
          key={index}
          data={val}
          history
          onClick={() => {
            // onRenderPDF(val);
            Router.push(`/visit/plan/history/${val.idVisitPlan}`);
          }}
        />
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
              backAction={() => Router.back()}
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
