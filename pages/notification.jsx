import React, { useState, useEffect, useContext } from "react";
import styles from "../styles/pages/Announcement.module.css";
import Nav from "../components/Nav";
import { Stores } from "../store";
import BotNav from "../components/BotNav";
import {
  getAllAnnouncement,
  getNotificationbyUsername,
  updateReadAnnouncement,
} from "../helper";
import moment from "moment";
import Spinner from "../components/Spinner";
import Router, { useRouter } from "next/router";

export default function Announcement() {
  const { state, dispatch, actions } = useContext(Stores);
  const [notificationList, setNotificationList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData.username) {
      getNotificationbyUsername(userData.username)
        .then((data) => {
          setNotificationList(data);
          console.log(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [dispatch]);

  const renderAnnouncement = () => {
    if (loading) {
      return <Spinner />;
    } else {
      return notificationList.map((val) => {
        var b = val.deskripsi.split("$$");
        for (let i = 1; i < b.length; i += 2) {
          var newlink =
            `<a href=` + `"${b[i]}" target="_blank">` + `${b[i]}` + `</a>`;
          b.splice(i, 1, newlink);
        }
        var c = b.join("");

        if (val.isRead) {
          return (
            <>
              <div className={styles.announcement_container}>
                <div>{val.modul}</div>
                {/* <div
                  style={{ fontSize: "12px" }}
                  dangerouslySetInnerHTML={{ __html: c }}
                />
                <div style={{ fontSize: "12px", color: "#B9B9C3" }}>
                  {moment(val.createdDate).fromNow()}
                </div> */}
              </div>
            </>
          );
        } else {
          return (
            <>
              <div
                onClick={() => {
                  const userData = JSON.parse(localStorage.getItem("user"));
                  var data = {
                    id: val.announcementStatusId,
                    username: userData.username,
                    isRead: true,
                  };
                  if (val.modul === "Announcement") {
                    Router.push("/announcement");
                  } else if (
                    val.modul === "Kalender Program" ||
                    val.modul === "Info Promo"
                  ) {
                    Router.push("/calendar");
                  } else if (val.modul === "Benefit") {
                    Router.push("/reward/benefits");
                  }
                  // updateReadAnnouncement(val.announcementStatusId, data)
                  //   .then((data) => {
                  //     getAllAnnouncement(userData)
                  //       .then((data) => {
                  //         setNotificationList(data);
                  //       })
                  //       .catch((err) => {
                  //         console.log(err);
                  //       });
                  //   })
                  //   .catch((err) => {
                  //     console.log(err);
                  //   });
                }}
                className={styles.announcement_container_unread}
              >
                <div
                  style={{
                    color: "#feb800",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {val.modul}
                </div>
                <div
                  style={{ fontSize: "12px" }}
                  dangerouslySetInnerHTML={{ __html: c }}
                />
                <div style={{ fontSize: "12px", color: "#B9B9C3" }}>
                  {moment(val.createdDate).fromNow()}
                </div>
              </div>
            </>
          );
        }
      });
    }
  };

  // const newAnnouncement = notificationList.filter((val) => {
  //   return val.isRead === false;
  // });
  return (
    <>
      <div className={styles.wrapper}>
        <Nav title={"Notification"} color={"white"} backHref={"/"} />
        <div className={styles.main}>
          <div
            style={{ textAlign: "right" }}
            className={styles.announcement_container_unread}
          >
            <div style={{ margin: "6px 0px" }}>
              <span
                style={{
                  color: "#FEB800",
                  backgroundColor: "rgba(254, 184, 0, 0.12)",
                  padding: "2px 10px",
                  borderRadius: "20px",
                  fontSize: "12px",
                }}
              >
                {notificationList.length} New
              </span>
            </div>
          </div>
          {renderAnnouncement()}
          <div style={{ marginBottom: "120px" }} />
        </div>
      </div>
      <BotNav />
    </>
  );
}
