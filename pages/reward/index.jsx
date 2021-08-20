import React, { useState, useEffect, useContext } from "react";
import styles from "../../styles/pages/Reward.module.css";
import Link from "next/link";
import Router from "next/router";
import { Stores } from "../../store";
import {
  getAllAnnouncement,
  getAuth,
  getIncentiveYearly,
  getKpiInventiveMonthlyPimca,
  getKpiInventiveMonthlySMR,
} from "../../helper";
import moment from "moment";
import BotNav from "../../components/BotNav";
import Nav from "../../components/Nav";
import Card from "../../components/Card";
import { Line } from "react-chartjs-2";

import Spinner from "../../components/Spinner";
import TabelLastDataIncentive from "../../components/TableLastDataIncentive";
import Modal from "../../components/Modal";

export default function Reward() {
  const { state, dispatch, actions } = useContext(Stores);
  const [dataKpi, setDataKpi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataGraph, setDataGraph] = useState([]);
  const [loadingModal, setLoadingModal] = useState(false);
  const [now, setNow] = useState(new Date());

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Last Data Incentive",
        data: dataGraph,
        fill: false,
        backgroundColor: "rgb(65, 134, 122)",
        borderColor: "rgba(65, 134, 122, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            // beginAtZero: true,
            callback: function (label, index, labels) {
              return Math.round((label / 100000) * 10) / 100 + " k";
            },
          },
        },
      ],
    },
    tooltips: { enabled: false },
    hover: { mode: null },
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    setLoadingModal(true);
    console.log(userData, now);
    if (userData) {
      getAuth(userData)
        .then((data) => {
          if (data[0].roleCode === "PIMCAB") {
            getKpiInventiveMonthlyPimca(userData, now)
              .then((dataKpi) => {
                setDataKpi(dataKpi);
                console.log(dataKpi);
                getIncentiveYearly(userData)
                  .then((data) => {
                    if (data.length) {
                      data.sort(function (a, b) {
                        return a.periode - b.periode;
                      });
                      var latestMonth = parseInt(
                        moment(data[data.length - 1].periode).format("M")
                      );

                      var arrIncentive = [];
                      for (let i = 0; i < latestMonth; i++) {
                        arrIncentive.push(0);
                      }
                      var yearlyIncentive = data.map((val) => {
                        return arrIncentive.splice(
                          parseInt(moment(val.periode).format("M")) - 1,
                          1,
                          val.totalInsentif
                        );
                      });
                      setDataGraph(arrIncentive);
                      setLoading(false);
                      setLoadingModal(false);
                    } else {
                      setLoading(false);
                      setLoadingModal(false);
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              })
              .catch((err) => {
                console.log(err);
              });
          } else if (data[0].roleCode === "SMR") {
            getKpiInventiveMonthlySMR(userData, now)
              .then((dataKpi) => {
                setDataKpi(dataKpi);
                console.log(dataKpi);
                getIncentiveYearly(userData)
                  .then((data) => {
                    if (data.length) {
                      data.sort(function (a, b) {
                        return a.periode - b.periode;
                      });
                      var latestMonth = parseInt(
                        moment(data[data.length - 1].periode).format("M")
                      );

                      var arrIncentive = [];
                      for (let i = 0; i < latestMonth; i++) {
                        arrIncentive.push(0);
                      }
                      var yearlyIncentive = data.map((val) => {
                        return arrIncentive.splice(
                          parseInt(moment(val.periode).format("M")) - 1,
                          1,
                          val.totalInsentif
                        );
                      });
                      setDataGraph(arrIncentive);
                      setLoading(false);
                      setLoadingModal(false);
                    } else {
                      setLoading(false);
                      setLoadingModal(false);
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              })
              .catch((err) => {
                console.log(err);
              });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      Router.push("/login");
    }
  }, [dispatch, now]);

  const total = () => {
    var totalIncentive = 0;
    dataKpi.map((val) => {
      var splitGroup = val.grup.split(".");
      if (splitGroup[1] == 0) {
        totalIncentive += val.insentif;
      }
    });
    return totalIncentive;
  };

  if (loading) {
    return (
      <>
        <Spinner />;
        <BotNav />
      </>
    );
  } else {
    return (
      <>
        {loadingModal ? (
          <Modal>
            <Spinner />
          </Modal>
        ) : null}
        <div className={styles.wrapper}>
          <Nav title={"Reward"} color={"white"} noBack />
          <div className={styles.main}>
            <Card style={{ borderRadius: "6px", marginTop: "20px" }}>
              <Link href="/reward/benefits">
                <a style={{ textDecoration: "none" }}>
                  <div className={styles.reward_grid2}>
                    <div className={styles.add_reward}>
                      <div style={{ marginTop: "-11px" }}>
                        <img src={"/alert-circle.svg"} />
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#FEB800",
                      }}
                    >
                      Benefits
                      <div
                        style={{
                          color: "#B9B9C3",
                          fontWeight: "300",
                          fontSize: "13px",
                        }}
                      >
                        See you benefits here
                      </div>{" "}
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <img src={"/next.svg"} />
                    </div>
                  </div>
                </a>
              </Link>
            </Card>
            <Card style={{ borderRadius: "6px", marginTop: "20px" }}>
              <Line data={data} options={options} />
            </Card>
            <Card
              style={{
                borderRadius: "6px",
                marginTop: "20px",
                padding: "15px",
                color: "#5E5873",
              }}
            >
              <div>
                <div>
                  <span
                    style={{ marginRight: "5px" }}
                    onClick={() => {
                      if (
                        moment(now).format("MMMM YYYY") !==
                        moment().subtract(1, "years").format("MMMM YYYY")
                      ) {
                        setNow(moment(now).subtract(1, "months"));
                      }
                    }}
                  >
                    {moment(now).format("MMMM YYYY") !==
                    moment().subtract(1, "years").format("MMMM YYYY") ? (
                      <img src={"/cev_left.svg"} />
                    ) : (
                      <img
                        style={{ height: "20px" }}
                        src={"/chev_left_gray.svg"}
                      />
                    )}
                  </span>
                  <span>{moment(now).format("MMMM YYYY")}</span>
                  <span
                    style={{ marginLeft: "5px" }}
                    onClick={() => {
                      if (
                        moment().format("MMMM YYYY") !==
                        moment(now).format("MMMM YYYY")
                      ) {
                        setNow(moment(now).add(1, "months"));
                      }
                    }}
                  >
                    {moment().format("MMMM YYYY") !==
                    moment(now).format("MMMM YYYY") ? (
                      <img src={"/next.svg"} />
                    ) : (
                      <img
                        style={{ height: "20px" }}
                        src={"/chev_right_gray.svg"}
                      />
                    )}
                  </span>
                </div>
              </div>
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "#41867a",
                }}
              >
                {dataKpi ? (
                  `${total().toLocaleString("id-ID")} IDR`
                ) : (
                  <div>No data</div>
                )}
              </div>
            </Card>
            <Card
              style={{
                borderRadius: "6px",
                marginTop: "20px",
                padding: "15px",
                color: "#5E5873",
              }}
            >
              <div style={{ fontWeight: "700" }}>
                KPI Incentive Monthly ( {moment(now).format("MMMM YYYY")} )
              </div>
              {dataKpi ? (
                <TabelLastDataIncentive data={dataKpi} />
              ) : (
                <div>No Data</div>
              )}
            </Card>
            <div style={{ marginBottom: "120px" }} />
          </div>
        </div>
        <BotNav />
      </>
    );
  }
}
