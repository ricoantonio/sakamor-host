import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Router from "next/router";
import { Stores } from "../../../store";
import styles from "../../../styles/pages/Unplan.module.css";

import Nav from "../../../components/Nav";
import Spinner from "../../../components/Spinner";
import DetailPlan from "../../../components/DetailPlan";
import Button from "../../../components/Button";

import { getSearchJenisChannel, getSearchOutlet } from "../../../helper";

export default function Unplan() {
  const { state, dispatch, actions } = useContext(Stores);
  const [plan, setPlan] = useState([]);
  const [searchJenisChannel, setSearchJenisChannel] = useState("");
  const [listJenisChannel, setListJenisChannel] = useState([]);
  const [renderListJenisChannel, setRenderListJenisChannel] = useState(false);
  const [focusJenisChannel, setFocusJenisChannel] = useState({});
  const [searchOutlet, setSearchOutlet] = useState("");
  const [listOutlet, setListOutlet] = useState([]);
  const [renderListOutlet, setRenderListOutlet] = useState(false);
  const [focusOutlet, setFocusOutlet] = useState({});
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
        // console.log(coords);
      },
      (err) => {
        setError(err.message);
      }
    );
    return () => geo.clearWatch(watcher);
  }, []);

  const onSearchJenisChannel = (search) => {
    setRenderListJenisChannel(true);
    setSearchJenisChannel(search);
    if (search) {
      getSearchJenisChannel(search)
        .then((data) => {
          setListJenisChannel(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setListJenisChannel([]);
    }
  };
  const onSearchOutlet = (search) => {
    setRenderListOutlet(true);
    setSearchOutlet(search);
  };

  useEffect(() => {
    // fetch on stop typing
    const timeoutId = setTimeout(() => {
      if (searchOutlet) {
        getSearchOutlet(searchOutlet)
          .then((data) => {
            setListOutlet(data);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        setListOutlet([]);
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [searchOutlet]);

  const renderSearchJenisChannel = () => {
    const render = listJenisChannel.map((val, index) => {
      return (
        <div
          onClick={() => {
            setFocusJenisChannel(val);
            setSearchJenisChannel(val.namaJenisChannel);
            setListJenisChannel([]);
          }}
          key={index}
          style={{
            borderBottom: ".5px solid #f0f0f0",
            width: "350px",
          }}
        >
          {val.namaJenisChannel}
        </div>
      );
    });
    return render;
  };
  const renderSearchOutlet = () => {
    const render = listOutlet.map((val, index) => {
      return (
        <div
          onClick={() => {
            setFocusOutlet(val);
            setSearchOutlet(val.namaOutlet);
            setListOutlet([]);
          }}
          key={index}
          style={{
            borderBottom: ".5px solid #f0f0f0",
            width: "350px",
          }}
        >
          {val.namaOutlet}
        </div>
      );
    });
    return render;
  };

  const onSubmitUnplan = () => {
    if (focusJenisChannel.namaJenisChannel && focusOutlet.namaOutlet) {
      actions.setUnplanOutlet(focusOutlet);
      actions.setUnplanJenisChannel(focusJenisChannel);
      Router.push("/visit/unplan/submit");
    }
  };
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
              <input
                onChange={(e) => {
                  onSearchJenisChannel(e.target.value);
                }}
                value={searchJenisChannel}
                placeholder="Search"
                className={styles.input}
                onBlur={() => {
                  setTimeout(() => {
                    setRenderListJenisChannel(false);
                  }, 200);
                }}
                onFocus={(e) => onSearchJenisChannel(e.target.value)}
              />
              {renderListJenisChannel ? (
                <div
                  style={{
                    position: "absolute",
                    maxHeight: "180px",
                    backgroundColor: "white",
                    overflowY: "scroll",
                    maxWidth: "400px",
                    padding: "0 4px",
                    zIndex: 999999,
                  }}
                >
                  {renderSearchJenisChannel()}
                </div>
              ) : null}
              <div className={styles.subtitle}>Outlet</div>
              <input
                onChange={(e) => {
                  onSearchOutlet(e.target.value);
                }}
                value={searchOutlet}
                placeholder="Search"
                className={styles.input}
                onBlur={() => {
                  setTimeout(() => {
                    setRenderListOutlet(false);
                  }, 200);
                }}
                onFocus={(e) => onSearchOutlet(e.target.value)}
              />
              {renderListOutlet ? (
                <div
                  style={{
                    position: "absolute",
                    maxHeight: "180px",
                    backgroundColor: "white",
                    overflowY: "scroll",
                    maxWidth: "400px",
                    padding: "0 4px",
                    zIndex: 999999,
                  }}
                >
                  {renderSearchOutlet()}
                </div>
              ) : null}
              <div className={styles.bottom_container}>
                <Button
                  text="Submit"
                  onClick={() => {
                    onSubmitUnplan();
                  }}
                />
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
