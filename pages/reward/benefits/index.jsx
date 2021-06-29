import React, { useState, useEffect, useContext } from "react";
import styles from "../../../styles/pages/Reward.module.css";
import Link from "next/link";
import { Stores } from "../../../store";
import { getAllAnnouncement } from "../../../helper";
import moment from "moment";
import BotNav from "../../../components/BotNav";
import Nav from "../../../components/Nav";
import Card from "../../../components/Card";
import Spinner from "../../../components/Spinner";

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
        <Nav title={"Benefits"} color={"white"} noBack />
        <div className={styles.main}>
          <div style={{ marginBottom: "120px" }} />
        </div>
      </div>
      <BotNav />
    </>
  );
}
