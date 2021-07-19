import React, { useState, useEffect, useContext } from "react";
import styles from "../../../styles/pages/Announcement.module.css";
import Nav from "../../../components/Nav";
import { Stores } from "../../../store";
import BotNav from "../../../components/BotNav";
import {
  getAllAnnouncement,
  getBenefitCodeCabang,
  updateReadAnnouncement,
} from "../../../helper";
import moment from "moment";
import Spinner from "../../../components/Spinner";

export default function Announcement() {
  const { state, dispatch, actions } = useContext(Stores);
  const [benefit, setBenefit] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    getBenefitCodeCabang(userData)
      .then((data) => {
        setBenefit(data);
        // console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  const renderBenefit = () => {
    if (loading) {
      return <Spinner />;
    } else {
      return benefit.map((val) => {
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
                <div>{val.judul}</div>
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
        } else {
          return (
            <>
              <div className={styles.announcement_container_unread}>
                <div>{val.judul}</div>
                <div style={{ fontSize: "12px" }}>{c}</div>
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

  const newAnnouncement = benefit.filter((val) => {
    return val.isRead === false;
  });
  return (
    <>
      <div className={styles.wrapper}>
        <Nav title={"Benefits"} color={"white"} backHref={"/reward"} />
        <div className={styles.main}>
          {/* <div
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
          </div> */}
          {renderBenefit()}
          <div style={{ marginBottom: "120px" }} />
        </div>
      </div>
      <BotNav />
    </>
  );
}