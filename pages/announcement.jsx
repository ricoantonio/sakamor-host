import React, { useState, useEffect, useContext } from "react";
import styles from "../styles/pages/Announcement.module.css";
import Nav from "../components/Nav";
import { Stores } from "../store";

export default function Announcement() {
  const { state, dispatch, actions } = useContext(Stores);

  useEffect(() => {
    actions.keepState();
  }, [dispatch]);

  const [announcementList, setAnnouncementList] = useState([
    {
      date: "21/03/2020",
      time: "10:30",
      detail:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    },
    {
      date: "21/03/2020",
      time: "10:30",
      detail:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    },
    {
      date: "21/03/2020",
      time: "10:30",
      detail:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    },
    {
      date: "21/03/2020",
      time: "10:30",
      detail:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    },
    {
      date: "21/03/2020",
      time: "10:30",
      detail:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    },
    {
      date: "21/03/2020",
      time: "10:30",
      detail:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    },
  ]);
  const renderAnnouncement = () => {
    return announcementList.map((val) => {
      return (
        <div className={styles.list_container}>
          <div className={styles.list_date_container}>
            <div className={styles.date_text}>{val.date}</div>
            <div className={styles.dot_container}>
              <div className={styles.dot}></div>
            </div>
            <div className={styles.time_text}>{val.time}</div>
          </div>
          <div className={styles.list_detail_container}>{val.detail}</div>
        </div>
      );
    });
  };

  return (
    <div className={styles.wrapper}>
      <Nav title="Announcement" backHref="/" />
      <div className={styles.main}>{renderAnnouncement()}</div>
      <div></div>
    </div>
  );
}
