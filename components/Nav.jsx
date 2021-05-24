import React from "react";
import Link from "next/link";
import styles from "../styles/components/Nav.module.css";

const Nav = ({
  backHref,
  title,
  action,
  color,
  onClick,
  backAction,
  noBack,
  disable,
}) => {
  return (
    <div
      className={
        color == "green"
          ? `${styles.nav_green} ${styles.nav_container}`
          : color == "white"
          ? `${styles.nav_white} ${styles.nav_container}`
          : styles.nav_container
      }
    >
      {backHref ? (
        <Link href={backHref ? backHref : "/"}>
          <a>
            <img style={{ width: "24px" }} src={"/arrow-left.svg"} />
          </a>
        </Link>
      ) : noBack ? (
        <div />
      ) : (
        <img
          onClick={() => {
            backAction();
          }}
          style={{ width: "24px" }}
          src={"/arrow-left.svg"}
        />
      )}

      <div
        // className={color == "green" ? styles.white : ""}
        style={{ textAlign: "center" }}
        className={styles.title}
      >
        {title}
      </div>
      {action && disable === false ? (
        <div
          onClick={onClick}
          style={{
            fontSize: "14px",
            margin: "auto",
            color: "#41867A",
            cursor: "pointer",
          }}
        >
          {action}
        </div>
      ) : action && disable === true ? (
        <div
          onClick={onClick}
          style={{
            fontSize: "14px",
            margin: "auto",
            color: "#c4c4c4",
            cursor: "pointer",
          }}
        >
          {action}
        </div>
      ) : null}
    </div>
  );
};

export default Nav;
