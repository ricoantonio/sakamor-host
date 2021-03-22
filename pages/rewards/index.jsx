import React, { useState, useEffect, useContext } from "react";

import styles from "../../styles/pages/Reward.module.css";
import Nav from "../../components/Nav";
import Submenu from "../../components/Submenu";
import { Stores } from "../../store";

export default function Reward() {
  const { state, dispatch, actions } = useContext(Stores);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const userMenu = JSON.parse(localStorage.getItem("menu"));
    if (userData) {
      actions.userLogin(userData);
      actions.setMenu(userMenu);
    }
  }, [dispatch]);
  return (
    <div className={styles.wrapper}>
      <Nav title="Reward" download backHref="/" />
      <div className={styles.main}>
        <Submenu
          href={"/rewards/current-incentive"}
          img={"/calendar.svg"}
          title={"Current Incentive"}
          subtitle={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod"
          }
        />
        <Submenu
          href={"/rewards/benefit"}
          img={"/folder.svg"}
          title={"Benefits"}
          subtitle={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod"
          }
        />
      </div>
    </div>
  );
}
