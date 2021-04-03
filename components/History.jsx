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
import { API_URL, API_USER, TOKEN, API_VISIT_PLAN } from "../constant";

export default function History({ type }) {
  const { state, dispatch, actions } = useContext(Stores);
  const [plan, setPlan] = useState([]);
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

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
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
