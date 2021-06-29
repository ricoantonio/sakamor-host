import React, { useState, useEffect, useContext } from "react";
import styles from "../styles/pages/Announcement.module.css";
import Nav from "../components/Nav";
import { Stores } from "../store";
import BotNav from "../components/BotNav";
import { getAllAnnouncement, updateReadAnnouncement } from "../helper";
import moment from "moment";
import Spinner from "../components/Spinner";
import { firebaseCloudMessaging } from "../webPush";

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

  // useEffect(() => {
  //   setToken();
  //   async function setToken() {
  //     try {
  //       const token = await firebaseCloudMessaging.init();
  //       if (token) {
  //         getMessage();
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   function getMessage() {
  //     const messaging = firebase.messaging();
  //     const userData = JSON.parse(localStorage.getItem("user"));
  //     console.log({ messaging });
  //     messaging.onMessage((message) => {
  //       getAllAnnouncement(userData)
  //         .then((data) => {
  //           setAnnouncementList(data);
  //           setLoading(false);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //       const { title, body } = JSON.parse(message.notification);
  //       var options = {
  //         body,
  //       };
  //       self.registration.showNotification(title, options);
  //     });
  //   }
  // });

  const renderAnnouncement = () => {
    if (loading) {
      return <Spinner />;
    } else {
      return announcementList.map((val) => {
        if (val.isRead) {
          return (
            <>
              <div className={styles.announcement_container}>
                <div>{val.judul}</div>
                <div style={{ fontSize: "12px" }}>{val.deskripsi}</div>
                <div style={{ fontSize: "12px", color: "#B9B9C3" }}>
                  {moment(val.createdDate).fromNow()}
                </div>
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
                  updateReadAnnouncement(val.announcementStatusId, data)
                    .then((data) => {
                      getAllAnnouncement(userData)
                        .then((data) => {
                          setAnnouncementList(data);
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
                className={styles.announcement_container_unread}
              >
                <div>{val.judul}</div>
                <div style={{ fontSize: "12px" }}>{val.deskripsi}</div>
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

  const newAnnouncement = announcementList.filter((val) => {
    return val.isRead === false;
  });
  return (
    <>
      <div className={styles.wrapper}>
        <Nav title={"Announcement"} color={"white"} backHref={"/"} />
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
                {newAnnouncement.length} New
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
