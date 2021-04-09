import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Router from "next/router";
import { Stores } from "../../../store";
import styles from "../../../styles/pages/Unplan.module.css";

import Nav from "../../../components/Nav";
import Spinner from "../../../components/Spinner";
import DetailPlan from "../../../components/DetailPlan";
import Button from "../../../components/Button";

import { API_URL, API_USER, TOKEN, API_VISIT_PLAN } from "../../../constant";
import Card from "../../../components/Card";
import Dropdown from "../../../components/Dropdown";

export default function Unplan() {
  const { state, dispatch, actions } = useContext(Stores);
  const [plan, setPlan] = useState([]);
  const [search, setSearch] = useState("");
  const [position, setPosition] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError("Geolocation is not supported");
      return;
    }
    var watcher = geo.watchPosition(
      ({ coords }) => {
        setPosition({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
        console.log(coords);
      },
      (err) => {
        setError(err.message);
      }
    );
    return () => geo.clearWatch(watcher);
  }, []);

  const render = () => {
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <Nav backHref="/" />
            <div className={styles.title_container}>
              <div className={styles.title}>
                Unplan <div>Visit</div>
              </div>
            </div>
            <div className={styles.main}>
              <div className={styles.subtitle}>Jenis Channel</div>
              <Dropdown type={"JENIS_CHANNEL"} />
              <div className={styles.subtitle}>Outlet</div>
              <input
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                placeholder="Search"
                className={styles.input}
              />
              <div className={styles.bottom_container}>
                <Link
                  href={{
                    pathname: "/visit/unplan/submit",
                    // query: { data: "hai" },
                  }}
                >
                  <a>
                    <Button text="Submit" />
                  </a>
                </Link>
                <Link href="/visit/unplan/history">
                  <a>
                    <div className={styles.view_history}>View History</div>
                  </a>
                </Link>
                <div>{`latitude: ${position.latitude}`}</div>
                <div>{`longitude: ${position.longitude}`}</div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  return render();
}
