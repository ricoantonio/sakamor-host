import React, { useState, useEffect, useContext } from "react";
import styles from "../styles/pages/Achievement.module.css";
import Nav from "../components/Nav";
import Submenu from "../components/Submenu";
import { Stores } from "../store";
export default function Achievement() {
  const { state, dispatch, actions } = useContext(Stores);

  useEffect(() => {
    actions.keepState();
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <Nav title="Achivement" backHref="/" />
    </div>
  );
}
