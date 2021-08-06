import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Router from "next/router";
import { Stores } from "../../../store";
import styles from "../../../styles/pages/Spreading.module.css";

import Nav from "../../../components/Nav";
import Spinner from "../../../components/Spinner";
import Button from "../../../components/Button";

import Card from "../../../components/Card";
import { getSearchJenisChannel, getSearchOutlet } from "../../../helper";

export default function Spreading() {
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
    // fetch on stop typing
    const timeoutId = setTimeout(() => {
      if (focusJenisChannel.jenisChannelID) {
        getSearchOutlet(focusJenisChannel.jenisChannelID, searchOutlet)
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

  useEffect(() => {
    // fetch on stop typing
    const timeoutId = setTimeout(() => {
      getSearchJenisChannel(searchJenisChannel)
        .then((data) => {
          setListJenisChannel(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [searchJenisChannel]);

  const renderSearchJenisChannel = () => {
    const render = listJenisChannel.map((val, index) => {
      return (
        <div
          onClick={() => {
            setFocusJenisChannel(val);
            setSearchJenisChannel(val.namaJenisChannel);
            setListJenisChannel([]);
            setSearchOutlet("");
            setFocusOutlet({});
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

  const onSearchJenisChannel = (search) => {
    setRenderListJenisChannel(true);
    setSearchJenisChannel(search);
  };

  const onSearchOutlet = (search) => {
    setRenderListOutlet(true);
    setSearchOutlet(search);
  };

  const onSubmitSpreading = () => {
    if (focusJenisChannel.namaJenisChannel && focusOutlet.namaOutlet) {
      actions.setSpreadingOutlet(focusOutlet);
      actions.setSpreadingJenisChannel(focusJenisChannel);
      Router.push("/visit/spreading/submit");
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
              <div className={styles.title}>Spreading</div>
            </div>
            <div className={styles.main}>
              <div className={styles.subtitle}>Jenis Channel</div>
              <input
                onChange={(e) => {
                  onSearchJenisChannel(e.target.value);
                  setFocusJenisChannel({});
                  setSearchOutlet("");
                  setFocusOutlet({});
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
                disabled={focusJenisChannel.namaJenisChannel ? false : true}
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
                    onSubmitSpreading();
                  }}
                />
                <Link href="/visit/spreading/history">
                  <a>
                    <div className={styles.view_history}>View History</div>
                  </a>
                </Link>
                <Link href="/visit/spreading/submit?new=true">
                  <a style={{ textDecoration: "none" }}>
                    <Card style={{ borderRadius: "5px", margin: "22px 0" }}>
                      <div className={styles.unplan_grid2}>
                        <div className={styles.add_unplan}>
                          <div style={{ marginTop: "-8px" }}>+</div>
                        </div>
                        <div style={{ fontSize: "16px", fontWeight: "600" }}>
                          Add new outlet
                          <div
                            style={{
                              color: "#B9B9C3",
                              fontWeight: "300",
                              fontSize: "13px",
                            }}
                          >
                            Outlet not available
                          </div>{" "}
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <img src={"/next.svg"} />
                        </div>
                      </div>
                    </Card>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  return render();
}
