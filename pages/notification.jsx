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

export default function Announcement() {
  const { state, dispatch, actions } = useContext(Stores);
  const [announcementList, setAnnouncementList] = useState([
    {
      announcementStatusId: "ce3a2561-ab5c-4347-8474-12d711da1836",
      createdBy: "API",
      createdDate: "2021-06-29T00:00:00",
      deskripsi:
        "hai ini ada link $$https://www.google.com/$$ untuk bisa cari dan ini $$link$$ untuk daftar",
      id: "1123f17e-3f47-4ac8-8bfc-cfda810470fb",
      isDeleted: false,
      isRead: true,
      judul: "UAT",
      kodeCabang: "02",
      namaCabang: "PADANG",
      nomorDokumen: "0002/ANMT/06/2021",
      tanggalMulai: "2021-06-29T00:00:00",
      tanggalSelesai: "2021-07-29T00:00:00",
      updatedBy: "API",
      updatedDate: "2021-06-29T00:00:00",
      username: "admin@kalbe.co.id",
    },
    {
      announcementStatusId: "ce3a2561-ab5c-4347-8474-12d711da1836",
      createdBy: "API",
      createdDate: "2021-06-29T00:00:00",
      deskripsi:
        "Hari ini ada UAT Join Zoom Meeting\nhttps://us06web.zoom.us/j/87982965154?pwd=cUhLY0xyQUNYS2Jnd2E0WmFSK1BOdz09",
      id: "1123f17e-3f47-4ac8-8bfc-cfda810470fb",
      isDeleted: false,
      isRead: true,
      judul: "UAT",
      kodeCabang: "02",
      namaCabang: "PADANG",
      nomorDokumen: "0002/ANMT/06/2021",
      tanggalMulai: "2021-06-29T00:00:00",
      tanggalSelesai: "2021-07-29T00:00:00",
      updatedBy: "API",
      updatedDate: "2021-06-29T00:00:00",
      username: "admin@kalbe.co.id",
    },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    getNotificationbyUsername(userData.username)
      .then((data) => {
        setAnnouncementList(data);
        console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  const renderAnnouncement = () => {
    if (loading) {
      return <Spinner />;
    } else {
      return announcementList.map((val) => {
        // var b = val.deskripsi.split("$$");
        // for (let i = 1; i < b.length; i += 2) {
        //   var newlink =
        //     `<a href=` + `"${b[i]}" target="_blank">` + `${b[i]}` + `</a>`;
        //   b.splice(i, 1, newlink);
        // }
        // var c = b.join("");

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
        }
      });
    }
  };

  // const newAnnouncement = announcementList.filter((val) => {
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
                {announcementList.length} New
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
