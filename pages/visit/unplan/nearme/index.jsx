import React, { useState, useEffect, useContext } from "react";
import Router from "next/router";
import { Stores } from "../../../../store";

import styles from "../../../../styles/components/History.module.css";
import Nav from "../../../../components/Nav";
import Spinner from "../../../../components/Spinner";
import DetailPlan from "../../../../components/DetailPlan";
import { getAuth, getUnplanNearMe } from "../../../../helper";

export default function History({ type }) {
  const { state, dispatch, actions } = useContext(Stores);
  const [nearMe, setNearMe] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [position, setPosition] = useState({});
  const [error, setError] = useState("");

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
        // console.log(coords);
      },
      (err) => {
        setError(err.message);
      }
    );
    return () => geo.clearWatch(watcher);
  }, []);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const userMenu = JSON.parse(localStorage.getItem("menu"));
    if (userData) {
      getAuth(userData)
        .then((data) => {
          var auth = data.filter((val) => {
            return val.moduleCode === type;
          });
          var menu = userMenu.filter((val) => {
            return val.moduleCode === type;
          });
          if (!(auth && menu)) {
            Router.push("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      Router.push("/");
    }
  }, [dispatch]);

  useEffect(() => {
    setLoading(false);
  }, [dispatch]);

  const renderList = () => {
    const filterData = nearMe.filter((val) => {
      if (val.namaOutlet !== null) {
        return (
          val.namaOutlet.toLowerCase().includes(search.toLowerCase()) ||
          val.alamatOutlet.toLowerCase().includes(search.toLowerCase())
        );
      }
    });
    const render = filterData.map((val, index) => {
      return (
        <DetailPlan
          key={index}
          data={val}
          history
          onClick={() => {
            if (type === "PLAN") {
              Router.push(`/visit/plan/history/${val.idVisitPlan}`);
            } else if (type === "UNPLAN") {
              Router.push(`/visit/unplan/history/${val.id}`);
            } else if (type === "SPREADING") {
              Router.push(`/visit/spreading/history/${val.id}`);
            }
          }}
        />
      );
    });
    if (filterData.length == 0) {
      return (
        <div
          style={{ textAlign: "center", marginTop: "150px", color: "#d0d0d0" }}
        >
          No Item
        </div>
      );
    } else {
      return render;
    }
  };
  const render = () => {
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <Nav
              title={"Near Me"}
              backAction={() => Router.back()}
              color={"white"}
            />
            <div className={styles.main}>
              <div className={styles.search_fixed}>
                <input
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  placeholder="Search"
                  className={styles.input}
                  style={{ marginTop: "0" }}
                />
              </div>
              <div style={{ margin: "60px 0" }}>{renderList()}</div>
            </div>
          </div>
        </div>
      );
    }
  };
  return render();
}
