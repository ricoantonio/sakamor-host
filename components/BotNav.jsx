import React from "react";
import Link from "next/link";
import styles from "../styles/components/BotNav.module.css";
import Image from "next/image";
import Router from "next/router";
const Nav = ({ focus }) => {
  var active = (
    <div
      style={{
        width: "6px",
        height: "6px",
        backgroundColor: "#feb800",
        margin: "5px auto",
        borderRadius: "20px",
      }}
    />
  );
  return (
    <div className={styles.nav_container}>
      <div className={styles.nav_box}>
        <Link href={"/"}>
          <a>
            <div>
              <img
                src={focus === "home" ? "/home-nav.svg" : "/home-nav1.svg"}
              />
              {focus === "home" ? active : ""}
            </div>
          </a>
        </Link>
        <Link href={"/"}>
          <a>
            <div>
              <img
                src={
                  focus === "calender"
                    ? "/calender-nav.svg"
                    : "/calender-nav1.svg"
                }
              />
              {focus === "calender" ? active : ""}
            </div>
          </a>
        </Link>
        <Link href={"/"}>
          <a>
            <div>
              <img
                src={
                  focus === "rewards" ? "/rewards-nav.svg" : "/rewards-nav1.svg"
                }
              />
              {focus === "rewards" ? active : ""}
            </div>
          </a>
        </Link>
        <Link href={"/"}>
          <a>
            <div>
              <img
                src={
                  focus === "profile" ? "/profile-nav.svg" : "/profile-nav1.svg"
                }
              />
              {focus === "profile" ? active : ""}
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
