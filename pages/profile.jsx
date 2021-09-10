import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Router from "next/router";
import { Stores } from "../store";
import styles from "../styles/pages/Profile.module.css";

import Nav from "../components/Nav";
import Spinner from "../components/Spinner";
import BotNav from "../components/BotNav";
import Button from "../components/Button";

import {
  getAuth,
  getSearchOutlet,
  getSearchJenisChannel,
  getMasterVisitPlan,
  deleteMasterPlanSMR,
  saveMasterPlanVisit,
  getAllAnnouncement,
  postChangePass,
  viewProfilePic,
  postProfilePic,
} from "../helper";
import moment from "moment";
import Card from "../components/Card";
import Modal from "../components/Modal";

export default function Plan() {
  const { state, dispatch, actions } = useContext(Stores);
  const [loadingModal, setLoadingModal] = useState(false);
  const [modalChangePP, setModalChangePP] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errPass, setErrPass] = useState(false);
  const [userData, setUserData] = useState({});
  const [notif, setNotif] = useState(false);
  const [newAnnouncement, setNewAnnouncement] = useState([]);
  const [newPass, setNewPass] = useState("");
  const [confirmNewPass, setConfirmNewPass] = useState("");
  const [dataPP, setDataPP] = useState("");
  const [role, setRole] = useState("");
  const [dataFilePP, setDataFilePP] = useState({});
  const [PP, setPP] = useState("");

  const onLogOut = () => {
    if (confirm("You will be returned to login screen.")) {
      localStorage.clear();
      Router.push("/login");
    }
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      viewProfilePic(userData.username)
        .then((data) => {
          setPP(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      Router.push("/");
    }
  }, [dispatch]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      getAuth(userData)
        .then((data) => {
          if (data[0].roleCode === "PIMCAB") {
            setRole("PIMCAB");
          } else if (data[0].roleCode === "SMR") {
            setRole("SMR");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      Router.push("/");
    }
  }, [dispatch]);

  // useEffect(() => {
  //   const userData = JSON.parse(localStorage.getItem("user"));
  //   if (userData) {
  //     getAuth(userData)
  //       .then((data) => {
  //         if (data[0].roleCode === "PIMCAB") {
  //           setRole("PIMCAB");
  //         } else if (data[0].roleCode === "SMR") {
  //           setRole("SMR");
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else {
  //     Router.push("/");
  //   }
  // }, [dispatch]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUserData(userData);
      getAllAnnouncement(userData)
        .then((data) => {
          const newAnnouncement = data.filter((val) => {
            return val.isRead === false;
          });
          setNewAnnouncement(newAnnouncement);
          if (newAnnouncement.length > 0) {
            setNotif(true);
          } else {
            setNotif(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [dispatch]);

  const onChangePP = () => {
    setModalChangePP(false);
    setLoadingModal(true);
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      postProfilePic(userData, dataFilePP)
        .then((data) => {
          console.log(data);
          viewProfilePic(userData.username)
            .then((data) => {
              setPP(data);
              setLoadingModal(false);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const onChangePass = () => {
    setLoadingModal(true);
    setErrPass(false);
    var dataPass = {
      username: userData.username,
      password: confirmNewPass,
      updatedBy: "API",
    };

    if (newPass && confirmNewPass && newPass === confirmNewPass) {
      postChangePass(dataPass)
        .then((data) => {
          console.log(data);
          setLoadingModal(false);
          setNewPass("");
          setConfirmNewPass("");
          alert("Succesfuly changed password");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setErrPass(true);
      setLoadingModal(false);
    }
  };

  const render = () => {
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <>
          {loadingModal ? (
            <Modal>
              <Spinner />
            </Modal>
          ) : null}
          {modalChangePP ? (
            <Modal>
              <div
                style={{
                  maxHeight: "100%",
                  overflow: "auto",
                  overflowX: "hidden",
                  overflowY: "hidden",
                }}
              >
                <div
                  style={{
                    width: "300px",
                    maxHeight: "100%",
                    margin: "100px auto",
                    textAlign: "center",
                    backgroundColor: "white",
                    borderRadius: "20px",
                    padding: "20px",
                  }}
                >
                  <img
                    style={{
                      width: "200px",
                      height: "200px",
                      maxHeight: "100%",
                      objectFit: "cover",
                      margin: "50px auto",
                      borderRadius: "50%",
                    }}
                    src={dataPP ? dataPP : "/pp.png"}
                  />
                  <Button
                    onClick={() => {
                      onChangePP();
                    }}
                    text={"Change Profile Picture"}
                  />
                  <div style={{ marginTop: "10px" }}>
                    <Button
                      onClick={() => {
                        setModalChangePP(false);
                      }}
                      color={"red"}
                      text={"Cancel"}
                    />
                  </div>
                </div>
              </div>
            </Modal>
          ) : null}
          <div className={styles.container}>
            <div className={styles.wrapper}>
              <div className={styles.bg_top} />
              <div className={styles.user_info_grid}>
                <div style={{ textAlign: "end" }}>
                  <Link href={"/announcement"}>
                    <a style={{ textDecoration: "none" }}>
                      <img className={styles.notif} src="/notif.svg" />
                      {notif ? (
                        <div
                          style={{
                            width: "100%",
                            textAlign: "-webkit-right",
                            padding: " 0 7px 31px 0",
                            marginTop: "-53px",
                          }}
                        >
                          <div
                            style={{
                              width: "21px",
                              height: "18px",
                              borderRadius: "20px",
                              backgroundColor: "#feb800",
                              color: "white",
                              fontSize: "12px",
                            }}
                          >
                            <div style={{ textAlign: "center" }}>
                              {newAnnouncement.length < 9
                                ? newAnnouncement.length
                                : "9+"}
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </a>
                  </Link>
                </div>
                <div className={styles.main}>
                  <div style={{ textAlign: "center" }}>
                    <div className={styles.edit_pp}>
                      <label className={styles.new_button} htmlFor={`postPP`}>
                        <img
                          src={"/edit-3.svg"}
                          style={{ width: "18px", verticalAlign: "baseline" }}
                        />
                        <input
                          className={styles.input_file}
                          onChange={(e) => {
                            setModalChangePP(true);
                            let reader = new FileReader();
                            var file = e.target.files[0];
                            if (file && file.type.match("image.*")) {
                              reader.readAsDataURL(file);
                            }
                            reader.onload = () => {
                              setDataPP(reader.result);
                              setDataFilePP(file);
                            };
                          }}
                          id={`postPP`}
                          type="file"
                          accept="image/*"
                        />
                      </label>
                    </div>
                    <div>
                      <img
                        className={styles.pp}
                        src={PP ? PP : "/profile-nav1.svg"}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      top: "-110px",
                      position: "relative",
                      padding: "10px",
                      height: "130px",
                      backgroundColor: "white",
                      zIndex: "-5",
                    }}
                  ></div>
                  <div style={{ position: "relative", top: "-125px" }}>
                    <Card
                      style={{
                        marginBottom: "22px",
                        borderBottomRightRadius: "6px",
                        borderBottomLeftRadius: "6px",
                        padding: "10px",
                        textAlign: "center",
                      }}
                    >
                      <div>{userData.name}</div>
                      <div>{userData.username}</div>
                      <div>{role}</div>
                    </Card>
                    {role === "SMR" ? (
                      <Card
                        style={{
                          marginTop: "22px",
                          marginBottom: "22px",
                          borderRadius: "6px",
                          padding: "10px",
                        }}
                      >
                        <div style={{ fontSize: "12px", color: "red" }}>
                          {errPass
                            ? "Please make sure your passwords match"
                            : null}
                        </div>

                        {/* Change Password */}
                        {/* <input
                          placeholder="Current password"
                          className={styles.input}
                        /> */}
                        <input
                          type="password"
                          placeholder="New password"
                          className={styles.input}
                          onChange={(e) => {
                            setNewPass(e.target.value);
                          }}
                          value={newPass}
                        />
                        <input
                          type="password"
                          placeholder="Confirm new password"
                          className={styles.input}
                          onChange={(e) => {
                            setConfirmNewPass(e.target.value);
                          }}
                          value={confirmNewPass}
                          disabled={newPass.length == 0 ? true : false}
                        />
                        <Button
                          onClick={() => {
                            onChangePass();
                          }}
                          text={"Change Password"}
                        />
                      </Card>
                    ) : null}
                    <Button
                      onClick={() => {
                        onLogOut();
                      }}
                      text={"Log Out"}
                      color={"red"}
                    />
                    <div style={{ marginBottom: "120px" }} />
                  </div>
                </div>
              </div>
            </div>
            <BotNav />
          </div>
        </>
      );
    }
  };
  return render();
}
