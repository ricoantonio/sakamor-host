import React, { useState, useEffect, useContext } from "react";
import styles from "../../styles/pages/Achievement.module.css";
import Nav from "../../components/Nav";
import Submenu from "../../components/Submenu";
import Spinner from "../../components/Spinner";
import { Stores } from "../../store";

export default function Activity() {
  const { state, dispatch, actions } = useContext(Stores);

  useEffect(() => {
    actions.keepState();
  }, [dispatch]);

  const renderMenu = () => {
    const subMenu = state.menuReducer.menu.filter((val) => {
      return (
        val.moduleURL.toLowerCase().includes("/activity/") &&
        val.moduleURL.split("/").length == 3
      );
    });
    return subMenu.map((val, index) => {
      return (
        <Submenu
          key={index}
          href={val.moduleURL.toLowerCase()}
          img={val.iconClass}
          title={val.moduleName}
        />
      );
    });
  };
  const render = () => {
    if (!state.menuReducer.menu) {
      return <Spinner />;
    } else {
      return (
        <div className={styles.wrapper}>
          <Nav title="Activity" backHref="/" />
          <div className={styles.main}>{renderMenu()}</div>
        </div>
      );
    }
  };
  return render();
}
