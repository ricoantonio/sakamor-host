import React, { useState, useEffect, useContext } from "react";
import Router from "next/router";
import { Stores } from "../../../../store";

import styles from "../../../../styles/components/History.module.css";
import Nav from "../../../../components/Nav";
import Spinner from "../../../../components/Spinner";
import Button from "../../../../components/Button";
import DetailPlan from "../../../../components/DetailPlan";
import Link from "next/link";
import Card from "../../../../components/Card";
import { getAuth, getUnplanNearMe } from "../../../../helper";
import setUnplanOutlet from "../../../../store/actions/setUnplanOutlet";

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
    getUnplanNearMe()
      .then((res) => {
        setNearMe(res);
        console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
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
        <Card style={{ marginTop: "22px", borderRadius: "5px" }}>
          <div style={{ padding: "21px 18px" }}>
            <div className={styles.top_grid}>
              <div>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                  }}
                >
                  {val.namaOutlet}
                </div>
                <div style={{ fontSize: "12px", fontWeight: "400" }}>
                  {val.alamatOutlet}
                </div>
                <Link href={`/visit/unplan/nearme/${val.outletID}`}>
                  <a>
                    <div
                      style={{
                        textAlign: "center",
                        margin: "10px 0",
                        paddingTop: "14px",
                      }}
                    >
                      <Button
                        color={"white"}
                        text={"More"}
                        onClick={() => {
                          actions.setUnplanOutlet(val);
                        }}
                      />
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Card>
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
              color={"white"}
              backAction={() => {
                if (
                  confirm(
                    "Data will be lost if you leave the page, are you sure?"
                  )
                ) {
                  actions.setDefaultVisitPlan();
                  Router.push("/visit/unplan/naerme");
                }
              }}
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
