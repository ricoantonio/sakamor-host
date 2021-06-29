import React, { useState, useEffect, useContext } from "react";
import styles from "../../styles/pages/Reward.module.css";
import Link from "next/link";
import { Stores } from "../../store";
import { getAllAnnouncement } from "../../helper";
import moment from "moment";
import BotNav from "../../components/BotNav";
import Nav from "../../components/Nav";
import Card from "../../components/Card";
import Spinner from "../../components/Spinner";

export default function Announcement() {
  const { state, dispatch, actions } = useContext(Stores);
  const [announcementList, setAnnouncementList] = useState([]);
  const [loading, setLoading] = useState(true);

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
          <Card style={{ borderRadius: "5px", marginTop: "11px" }}>
            <Link href="/reward/benefits">
              <a style={{ textDecoration: "none" }}>
                <div className={styles.reward_grid2}>
                  <div className={styles.add_reward}>
                    <div style={{ marginTop: "-11px" }}>
                      <img src={"/info.svg"} />
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
          <div style={{ marginBottom: "120px" }} />
        </div>
      </div>
      <BotNav />
    </>
  );
}
