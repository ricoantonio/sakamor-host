import React, { useState, useEffect, useContext } from "react";
import Router from "next/router";
import { Stores } from "../store";
import styles from "../styles/pages/MasterWorkVisit.module.css";

import Nav from "../components/Nav";
import Spinner from "../components/Spinner";
import Button from "../components/Button";

import { getAuth, getSmrByCabang } from "../helper";
import moment from "moment";
import Card from "../components/Card";

export default function Plan() {
  const { state, dispatch, actions } = useContext(Stores);
  const [dateView, setDateView] = useState(new Date());
  const [renderListNamaSmr, setRenderListNamaSmr] = useState(false);
  const [serachNamaSmr, setSearchNamaSmr] = useState("");
  const [searchListSmr, setSearchListSmr] = useState("");
  const [dataUsernameSMR, setDataUserNameSMR] = useState([]);
  const [listNamaSmr, setListNamaSmr] = useState([]);
  const [focusNamaSmr, setFocusNamaSmr] = useState({});
  const [loading, setLoading] = useState(true);
  const [dummy, setDummy] = useState(0);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const userMenu = JSON.parse(localStorage.getItem("menu"));
    // console.log(userData);
    if (userData) {
      getAuth(userData)
        .then((data) => {
          var auth = data.filter((val) => {
            return val.moduleCode === "PLAN";
          });
          var menu = userMenu.filter((val) => {
            return val.moduleCode === "PLAN";
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
    // fetch on stop typing
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData.kodeCabang) {
      const timeoutId = setTimeout(() => {
        getSmrByCabang(userData.kodeCabang, serachNamaSmr)
          .then((data) => {
            setListNamaSmr(data);
            setLoading(false);
            // console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [dispatch, serachNamaSmr]);

  const renderSearchNamaSmr = () => {
    const render = listNamaSmr.map((val, index) => {
      return (
        <div
          onClick={() => {
            setFocusNamaSmr(val);
            setSearchNamaSmr(val.namaSMR);
            setListNamaSmr([]);
            // console.log(val);
          }}
          key={index}
          style={{
            borderBottom: ".5px solid #f0f0f0",
            width: "350px",
          }}
        >
          {val.namaSMR}
        </div>
      );
    });
    return render;
  };

  const onSearchNamaSmr = (search) => {
    setRenderListNamaSmr(true);
    setSearchNamaSmr(search);
  };

  const render = () => {
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <>
          <div className={styles.container}>
            <div className={styles.wrapper}>
              <Nav title="Recap" backHref="/" color="white" />
              <div className={styles.main}>
                <Card
                  style={{
                    marginTop: "22px",
                    borderRadius: "6px",
                    padding: "10px",
                  }}
                >
                  <div style={{ color: "#41867a", fontSize: "12px" }}>DATE</div>
                  <div className={styles.filterdate_container}>
                    <input
                      className={styles.input}
                      type="date"
                      value={moment(dateView).format("YYYY-MM-DD")}
                      onChange={(e) => {
                        setDateView(moment(e.target.value));
                      }}
                      min={moment().format("YYYY-MM-DD")}
                    />
                    <div style={{ alignSelf: "center" }}>-</div>
                    <input
                      className={styles.input}
                      type="date"
                      value={moment(dateView)
                        .add(7, "days")
                        .format("YYYY-MM-DD")}
                      disabled={true}
                    />
                  </div>
                  <div
                    style={{
                      color: "#41867a",
                      fontSize: "12px",
                      marginTop: "10px",
                    }}
                  >
                    SMR
                  </div>
                  <input
                    onChange={(e) => {
                      onSearchNamaSmr(e.target.value);
                      setFocusNamaSmr({});
                    }}
                    value={serachNamaSmr}
                    placeholder="Search"
                    className={styles.input}
                    onBlur={() => {
                      setTimeout(() => {
                        setRenderListNamaSmr(false);
                      }, 200);
                    }}
                    onFocus={(e) => onSearchNamaSmr(e.target.value)}
                  />
                  {renderListNamaSmr ? (
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
                      {renderSearchNamaSmr()}
                    </div>
                  ) : null}
                  <div style={{ margin: "20px 0 10px 0" }}>
                    <Button text="Download" />
                  </div>
                </Card>
                <div style={{ marginBottom: "100px" }} />
              </div>
            </div>
          </div>
        </>
      );
    }
  };
  return render();
}
