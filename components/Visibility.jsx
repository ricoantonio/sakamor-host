import React, { useState, useEffect, useContext } from "react";
import Router, { useRouter } from "next/router";
import styles from "../styles/pages/VisitPlanDetail.module.css";

import { Stores } from "../store";

import Nav from "./Nav";
import Spinner from "./Spinner";
import Modal from "./Modal";
import Dropdown from "./Dropdown";

import { getPosm, getPlanId, getInvoiceDataPosm, viewFile } from "../helper";
import Card from "./Card";

export default function Visibility({ type }) {
  const { state, dispatch, actions } = useContext(Stores);
  const [loading, setLoading] = useState(true);
  const [posm, setPosm] = useState([]);
  const [posmList, setPosmList] = useState([]);
  const [plan, setPlan] = useState([]);
  const [modal, setModal] = useState(false);
  const [fileFocus, setFileFocus] = useState(null);
  const [dummy, setDummy] = useState(0);
  const [vis, setVis] = useState([
    { file: null, type: null },
    { file: null, type: null },
    { file: null, type: null },
    { file: null, type: null },
    { file: null, type: null },
    { file: null, type: null },
  ]);
  const router = useRouter();
  const initialVis = [
    { file: null, type: null },
    { file: null, type: null },
    { file: null, type: null },
    { file: null, type: null },
    { file: null, type: null },
    { file: null, type: null },
  ];

  var now = new Date();
  var date = now.getDate();
  var month = now.getMonth() + 1;
  var year = now.getFullYear();

  useEffect(() => {
    const notEmpty = vis.filter((val) => {
      return val.file !== null && val.type !== null;
    });
    // console.log(notEmpty);
    if (notEmpty.length > 0) {
      window.onbeforeunload = function () {
        return "Data will be lost if you leave the page, are you sure?";
      };
    }
  });

  useEffect(() => {
    if (type === "PLAN") {
      if (state.visitPlanReducer.visibility.length > 0) {
        setVis([...state.visitPlanReducer.visibility]);
      }
    } else if (type === "UNPLAN") {
    } else if (type === "SPREADING") {
    }
  }, [dispatch]);

  useEffect(() => {
    if (router.query.id) {
      if (type === "PLAN") {
        getPlanId(router.query.id)
          .then(({ samePlan, data }) => {
            // console.log(samePlan, data);
            if (samePlan.length == 0) {
              Router.push("/visit/plan");
            } else {
              setPlan(data);
              setLoading(false);
              if (!state.visitPlanReducer.checkIn) {
                actions.setPlanCheckIn(now);
              }
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (type === "UNPLAN") {
      } else if (type === "SPREADING") {
      } else if (type === "HISTORY") {
        getInvoiceDataPosm(router.query.id)
          .then((data) => {
            setPosmList(data);
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }, [router.query.id]);

  useEffect(() => {
    getPosm()
      .then((data) => {
        setPosm(data);
        setLoading(false);
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  const onFileFocus = (id) => {
    setModal(true);
    viewFile(id)
      .then((data) => {
        console.log(data);
        setFileFocus(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const renderInputUpload = () => {
    var render = vis.map((val, index) => {
      return (
        <div key={index} className={styles.visibility_grid}>
          <div>POSM {index + 1}</div>
          <div className={styles.visibility_dropdown}>
            <Dropdown
              options={posm}
              type={"POSM"}
              onChange={(e) => {
                var data = posm.filter((val) => {
                  return val.program == e.target.value;
                });
                vis.splice(index, 1, {
                  ...vis[index],
                  type: data[0],
                });
                setDummy(dummy + 1);
              }}
              value={val.type != null ? val.type.namaFile : ""}
            />
            <span
              style={{
                fontSize: "10px",
                color: "#41867A",
                fontWeight: "500",
              }}
            >
              {val.file != null ? val.file.name : null}
            </span>
          </div>
          <div>
            <label className={styles.new_button} htmlFor={`upload${index}`}>
              <img
                src={"/camera.svg"}
                style={{ width: "18px", verticalAlign: "baseline" }}
              />
              <input
                className={styles.input_file}
                onChange={(e) => {
                  // let reader = new FileReader();
                  // reader.readAsDataURL(e.target.files[0]);
                  // reader.onload = () => {
                  //   console.log(reader.result);
                  // };
                  vis.splice(index, 1, {
                    ...vis[index],
                    file: e.target.files[0],
                  });
                  setDummy(dummy + 1);
                }}
                id={`upload${index}`}
                type="file"
                accept="image/*"
                capture="environment"
              />
            </label>
          </div>
        </div>
      );
    });
    return render;
  };

  const renderHistoryPosm = () => {
    var render = posmList.map((val, index) => {
      return (
        <div key={index} className={styles.visibility_grid_history}>
          <div>POSM {index + 1}</div>
          <div className={styles.visibility_dropdown}>
            <Card
              style={{
                height: "32px",
                border: "1px solid #e9ecf2",
                padding: "6px 10px",
                borderRadius: "5px",
              }}
            >
              {val.tipe}
            </Card>
            <span
              style={{
                fontSize: "10px",
                color: "#41867A",
                fontWeight: "500",
              }}
              onClick={() => {
                onFileFocus(val.id);
              }}
            >
              {val.namaFile}
            </span>
          </div>
        </div>
      );
    });
    return render;
  };
  const onSave = () => {
    if (type === "PLAN") {
      actions.setPlanVisibility(vis);
      // console.log(vis);
      Router.push(`/visit/plan/${router.query.id}`);
    } else if (type === "UNPLAN") {
      Router.push(`/visit/unplan/submit`);
    } else if (type === "SPREADING") {
      Router.push(`/visit/spreading/submit`);
    }
  };

  // const displayView = () => {
  //   // let reader = new FileReader();
  //   var objectURL = URL.createObjectURL(fileFocus);
  //   // myImage.src = objectURL;
  //   return objectURL;
  // };

  const render = () => {
    return (
      <div className={styles.container}>
        {modal ? (
          <Modal
            onClick={() => {
              setFileFocus(null);
              setModal(false);
            }}
          >
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
                  width: "400px",
                  maxHeight: "100%",
                  margin: "100px auto",
                }}
              >
                <img
                  style={{ width: "300px", margin: "0 50px" }}
                  src={fileFocus}
                />
              </div>
            </div>
          </Modal>
        ) : null}
        <div className={styles.wrapper}>
          {type === "HISTORY" ? (
            <Nav
              title={"Visibility"}
              color={"white"}
              backAction={() => {
                Router.back();
              }}
            />
          ) : (
            <Nav
              title={"Visibility"}
              color={"white"}
              action={"Save"}
              onClick={() => {
                onSave();
              }}
              backAction={() => {
                if (state.visitPlanReducer.visibility.length > 0) {
                  setVis([...state.visitPlanReducer.visibility]);
                } else {
                  setVis([...initialVis]);
                }
                Router.back();
              }}
              disable={false}
            />
          )}
          <div className={styles.main}>
            {type === "HISTORY" ? renderHistoryPosm() : renderInputUpload()}
          </div>
        </div>
      </div>
    );
  };
  return render();
}
