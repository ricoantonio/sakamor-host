import React, { useState, useEffect, useContext } from "react";

import styles from "../../styles/pages/Achievement.module.css";
import Nav from "../../components/Nav";
import Submenu from "../../components/Submenu";
import { Stores } from "../../store";
export default function Benefit() {
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
      <Nav title="Benefit" backHref="/rewards" />
    </div>
  );
}
