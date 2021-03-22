import React from "react";
import Link from "next/link";
import styles from "../styles/components/BotNav.module.css";
import Image from "next/image";
import Router from "next/router";
const Nav = ({ focus }) => {
  return (
    <div className={styles.nav_container}>
      <div className={styles.nav_box}>
        <img src={focus === "home" ? "/home-nav.svg" : "/home-nav1.svg"} />
        <img
          src={
            focus === "calender" ? "/calender-nav.svg" : "/calender-nav1.svg"
          }
        />
        <img
          src={focus === "rewards" ? "/rewards-nav.svg" : "/rewards-nav1.svg"}
        />
        <img
          src={focus === "profile" ? "/profile-nav.svg" : "/profile-nav1.svg"}
        />
      </div>
    </div>
  );
};

export default Nav;
