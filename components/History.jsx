import React, { useState, useEffect, useContext } from "react";
import Router from "next/router";
import Link from "next/link";
import { renderToString } from "react-dom/server";

import { Stores } from "../store";

import styles from "../styles/components/History.module.css";

import Nav from "./Nav";
import Spinner from "./Spinner";
import DetailPlan from "./DetailPlan";
import Button from "./Button";
import Card from "./Card";
import { getAuth, getPlanHistory } from "../helper";

export default function History({ type }) {
  const { state, dispatch, actions } = useContext(Stores);
  const [history, setHistory] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  let jsPDF = null;

  const Prints = (data) => {
    return (
      <div>
        <div>{data.name}</div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("jspdf").then((module) => {
        jsPDF = module.default;
      });
    }
  });

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
      getPlanHistory(userData)
        .then((data) => {
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

  const print = () => {
    var data = {
      name: "me",
    };
    const string = renderToString(Prints(data));
    const pdf = new jsPDF("p", "mm", "a4");

    pdf.fromHTML(string);
    pdf.save("pdf");
  };

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
              <button onClick={print}>print</button>
            </div>
          </div>
        </div>
      );
    }
  };
  return render();
}
