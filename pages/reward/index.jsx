import React, { useState, useEffect, useContext } from "react";
import styles from "../../styles/pages/Reward.module.css";
import Link from "next/link";
import { Stores } from "../../store";
import { getAllAnnouncement } from "../../helper";
import moment from "moment";
import BotNav from "../../components/BotNav";
import Nav from "../../components/Nav";
import Card from "../../components/Card";
import { Line } from "react-chartjs-2";

import Spinner from "../../components/Spinner";
import TabelLastDataIncentive from "../../components/TableLastDataIncentive";

export default function Announcement() {
  const { state, dispatch, actions } = useContext(Stores);
  const [announcementList, setAnnouncementList] = useState([]);
  const [loading, setLoading] = useState(true);

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
        label: "Last Data Insentive",
        data: [12, 19, 3, 5, 2, 3],
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
            beginAtZero: true,
          },
        },
      ],
    },
    tooltips: { enabled: false },
    hover: { mode: null },
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    getAllAnnouncement(userData)
      .then((data) => {
        setAnnouncementList(data);
        console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  return (
    <>
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
            <div>{moment().format("MMMM YYYY")}</div>
            <div
              style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#41867a",
              }}
            >
              800.000 IDR
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
            <div style={{ fontWeight: "700" }}>KPI Incentive Monthly</div>
            <TabelLastDataIncentive />
          </Card>
          <div style={{ marginBottom: "120px" }} />
        </div>
      </div>
      <BotNav />
    </>
  );
}
