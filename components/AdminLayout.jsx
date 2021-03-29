import React from "react";
import Link from "next/link";
import styles from "../styles/AdminLayout.module.css";

function AdminLayout({ children }) {
  const renderSidemenu = () => {
    return (
      <div style={{ display: "flex", height: "60px" }}>
        <div
          style={{
            //if active
            width: "5px",
            backgroundColor: "#87bd40",
            height: "60px",
          }}
        />
        <div
          style={{
            position: "relative",
            width: "100%",
            margin: "auto",
            //if active
            left: "-5px",
            color: "white",
          }}
        >
          Dashboard
        </div>
      </div>
    );
  };
  return (
    <>
      <div className={styles.admin_header}>
        <div className={styles.title_container}>
          <img className={styles.header_img_security} src={"/security.svg"} />
          <div className={styles.title_text}>SAKA ARMOR ADMIN</div>
        </div>
        <div></div>
      </div>
      <div className={styles.main_container}>
        <div className={styles.sidemenu}>
          <div style={{ display: "flex", height: "60px" }}>
            <div
              style={{
                //if active
                width: "5px",
                backgroundColor: "#87bd40",
                height: "60px",
              }}
            />
            <div
              style={{
                position: "relative",
                width: "100%",
                margin: "auto",
                //if active
                left: "-5px",
                color: "white",
              }}
            >
              Dashboard
            </div>
          </div>
          <div style={{ display: "flex", height: "60px" }}>
            <div />
            <div
              style={{
                position: "relative",
                width: "100%",
                margin: "auto",
              }}
            >
              Dashboard
            </div>
          </div>
          <div style={{ display: "flex", height: "60px" }}>
            <div />
            <div
              style={{
                position: "relative",
                width: "100%",
                margin: "auto",
              }}
            >
              Dashboard
            </div>
          </div>
        </div>
        <div className={styles.main}>{children}</div>
      </div>
    </>
  );
}

export default AdminLayout;
