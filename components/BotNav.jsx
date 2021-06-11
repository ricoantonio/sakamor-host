import React from "react";
import Link from "next/link";
import styles from "../styles/components/BotNav.module.css";
import { useRouter } from "next/router";

const Nav = ({ focus }) => {
  const router = useRouter();
  var active = (
    <div
      style={{
        width: "5px",
        height: "5px",
        backgroundColor: "#feb800",
        margin: "5px auto",
        borderRadius: "50px",
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
                src={
                  router.pathname === "/" ? "/home-nav.svg" : "/home-nav1.svg"
                }
              />
              {router.pathname === "/" ? active : ""}
            </div>
          </a>
        </Link>
        <Link href={"/calendar"}>
          <a>
            <div>
              <img
                src={
                  router.pathname === "/calendar"
                    ? "/calendar-nav.svg"
                    : "/calendar-nav1.svg"
                }
              />
              {router.pathname === "/calendar" ? active : ""}
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
