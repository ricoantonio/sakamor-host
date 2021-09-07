import React, { useState, useEffect, useContext } from "react";
import Router, { useRouter } from "next/router";
import styles from "../styles/pages/VisitPlanDetail.module.css";

import { Stores } from "../store";

import Nav from "./Nav";
import Spinner from "./Spinner";
import Modal from "./Modal";
import Dropdown from "./Dropdown";

import {
  getPosm,
  getPlanId,
  getInvoiceDataPosm,
  viewFile,
  getInvoiceDataPosmUnplan,
  viewFileUnplan,
  getInvoiceDataPosmSpreading,
  viewFileSpreading,
  getBrand,
} from "../helper";

import Card from "./Card";
import Checkbox from "./Checkbox";

export default function Visibility({ type }) {
  const { state, dispatch, actions } = useContext(Stores);
  const [loading, setLoading] = useState(true);
  const [loadingBrand, setLoadingBrand] = useState(true);
  const [loadingView, setLoadingView] = useState(true);
  const [posm, setPosm] = useState([]);
  const [brand, setBrand] = useState([]);
  const [posmList, setPosmList] = useState([]);
  const [plan, setPlan] = useState([]);
  const [modal, setModal] = useState(false);
  const [fileFocus, setFileFocus] = useState(null);
  const [dummy, setDummy] = useState(0);
  const [newNOO, setNewNOO] = useState(false);
  const [vis, setVis] = useState([
    { file: null, type: null, brand: null, popular: false },
    { file: null, type: null, brand: null, popular: false },
    { file: null, type: null, brand: null, popular: false },
    { file: null, type: null, brand: null, popular: false },
    { file: null, type: null, brand: null, popular: false },
    { file: null, type: null, brand: null, popular: false },
    { file: null, type: null, brand: null, popular: false },
    { file: null, type: null, brand: null, popular: false },
  ]);
  const router = useRouter();
  const initialVis = [
    { file: null, type: null, brand: null, popular: false },
    { file: null, type: null, brand: null, popular: false },
    { file: null, type: null, brand: null, popular: false },
    { file: null, type: null, brand: null, popular: false },
    { file: null, type: null, brand: null, popular: false },
    { file: null, type: null, brand: null, popular: false },
    { file: null, type: null, brand: null, popular: false },
    { file: null, type: null, brand: null, popular: false },
  ];

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
      if (state.visitUnplanReducer.visibility.length > 0) {
        setVis([...state.visitUnplanReducer.visibility]);
      }
    } else if (type === "SPREADING") {
      if (state.visitSpreadingReducer.visibility.length > 0) {
        setVis([...state.visitSpreadingReducer.visibility]);
      }
    }
  }, [dispatch]);

  useEffect(() => {
    if (router.query.new) {
      setNewNOO(true);
    } else {
      if (type === "UNPLAN") {
        if (
          state.visitUnplanReducer.jenisChannel.namaJenisChannel &&
          state.visitUnplanReducer.outlet.namaOutlet
        ) {
        } else {
          Router.push("/visit/unplan");
        }
      } else if (type === "SPREADING") {
        if (
          state.visitSpreadingReducer.jenisChannel.namaJenisChannel &&
          state.visitSpreadingReducer.outlet.namaOutlet
        ) {
        } else {
          Router.push("/visit/spreading?new=true");
        }
      }
    }
  }, []);

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
      } else if (type === "HISTORY_PLAN") {
        getInvoiceDataPosm(router.query.id)
          .then((data) => {
            setPosmList(data);
            console.log(data);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (type === "HISTORY_UNPLAN") {
        getInvoiceDataPosmUnplan(router.query.id)
          .then((data) => {
            setPosmList(data);
            console.log(data);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (type === "HISTORY_SPREADING") {
        getInvoiceDataPosmSpreading(router.query.id)
          .then((data) => {
            setPosmList(data);
            setLoading(false);
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

    getBrand()
      .then((data) => {
        setBrand(data);
        setLoadingBrand(false);
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  const onFileFocus = (val) => {
    setModal(true);
    setLoadingView(true);
    if (type === "HISTORY_PLAN") {
      viewFile(val.id)
        .then((data) => {
          setFileFocus(data);
          setLoadingView(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (type === "HISTORY_UNPLAN") {
      viewFileUnplan(val.id)
        .then((data) => {
          setFileFocus(data);
          setLoadingView(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (type === "HISTORY_SPREADING") {
      viewFileSpreading(val.id)
        .then((data) => {
          setFileFocus(data);
          setLoadingView(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const renderInputUpload = () => {
    const doneFormVis = vis.filter((val) => {
      return val.file !== null && val.type !== null && val.brand !== null;
    });
    var donePopular = 0;
    for (let i = 0; i < vis.length; i++) {
      if (vis[i].popular) {
        donePopular = donePopular + 1;
      }
    }
    const renderFlagMinData = (val) => {
      if (doneFormVis.length < 6) {
        return (
          <span style={{ color: "red" }}>
            {val.type == null
              ? "Select Type"
              : val.brand == null
              ? "Select Brand"
              : val.file == null
              ? "Insert File"
              : null}
          </span>
        );
      } else {
        return null;
      }
    };
    var render = vis.map((val, index) => {
      return (
        <>
          <div style={{ fontSize: "12px", color: "#b9b9c3" }}>
            POSM {index + 1} {renderFlagMinData(val)}
          </div>
          <div key={index} className={styles.visibility_grid}>
            <div className={styles.visibility_dropdown}>
              <div className={styles.grid_50}>
                <div style={{ marginTop: "6px" }}>
                  {val.file !== null &&
                  val.type !== null &&
                  val.brand !== null ? (
                    <Checkbox
                      checked={val.popular}
                      color={"green"}
                      onClick={() => {
                        vis.splice(index, 1, {
                          ...vis[index],
                          popular: !val.popular,
                        });
                        setDummy(dummy + 1);
                      }}
                      disabled={
                        val.popular ? false : donePopular < 3 ? false : true
                      }
                    />
                  ) : null}
                </div>
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
                  value={val.type != null ? val.type.program : ""}
                />
                <Dropdown
                  options={brand}
                  type={"BRAND"}
                  onChange={(e) => {
                    var data = brand.filter((val) => {
                      return val.namaBrand == e.target.value;
                    });
                    vis.splice(index, 1, {
                      ...vis[index],
                      brand: data[0],
                    });
                    setDummy(dummy + 1);
                  }}
                  value={val.brand != null ? val.brand.namaBrand : ""}
                />
              </div>
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
        </>
      );
    });
    return render;
  };

  const renderHistoryPosm = () => {
    var render = posmList.map((val, index) => {
      return (
        <>
          <div style={{ fontSize: "12px", color: "#b9b9c3" }}>
            POSM {index + 1}
          </div>
          <div key={index} className={styles.visibility_grid_history}>
            <div>
              <div className={styles.grid_50}>
                <div style={{ marginTop: "6px" }}>
                  <Checkbox
                    checked={val.isPopular}
                    color={"green"}
                    disabled={true}
                  />
                </div>
                <Card
                  style={{
                    height: "32px",
                    border: "1px solid #e9ecf2",
                    padding: "6px 10px",
                    borderRadius: "5px",
                    overflow: "auto",
                  }}
                >
                  {val.tipe}
                </Card>
                <Card
                  style={{
                    height: "32px",
                    border: "1px solid #e9ecf2",
                    padding: "6px 10px",
                    borderRadius: "5px",
                    overflow: "auto",
                  }}
                >
                  {val.namaBrand}
                </Card>
              </div>
              <span
                style={{
                  fontSize: "10px",
                  color: "#41867A",
                  fontWeight: "500",
                }}
                onClick={() => {
                  onFileFocus(val);
                }}
              >
                {val.namaFile}
              </span>
            </div>
          </div>
        </>
        // <div key={index} className={styles.visibility_grid_history}>
        //   <div>POSM {index + 1}</div>
        //   <div className={styles.visibility_dropdown}>
        //     <Card
        //       style={{
        //         height: "32px",
        //         border: "1px solid #e9ecf2",
        //         padding: "6px 10px",
        //         borderRadius: "5px",
        //       }}
        //     >
        //       {val.tipe}
        //     </Card>
        //     <span
        //       style={{
        //         fontSize: "10px",
        //         color: "#41867A",
        //         fontWeight: "500",
        //       }}
        //       onClick={() => {
        //         onFileFocus(val);
        //       }}
        //     >
        //       {val.namaFile}
        //     </span>
        //   </div>
        // </div>
      );
    });
    if (loading || loadingBrand) {
      return <Spinner />;
    } else {
      return render;
    }
  };
  const onSave = () => {
    console.log(vis);
    if (newNOO) {
      actions.setSpreadingVisibility(vis);
      Router.push(`/visit/spreading/submit?new=true`);
    } else {
      if (type === "PLAN") {
        actions.setPlanVisibility(vis);
        Router.push(`/visit/plan/${router.query.id}`);
      } else if (type === "UNPLAN") {
        actions.setUnplanVisibility(vis);
        Router.push(`/visit/unplan/submit`);
      } else if (type === "SPREADING") {
        actions.setSpreadingVisibility(vis);
        Router.push(`/visit/spreading/submit`);
      }
    }
  };

  // const displayView = () => {
  //   // let reader = new FileReader();
  //   var objectURL = URL.createObjectURL(fileFocus);
  //   // myImage.src = objectURL;
  //   return objectURL;
  // };

  const render = () => {
    const doneFormVis = vis.filter((val) => {
      return val.file !== null && val.type !== null && val.brand !== null;
    });
    var donePopular = 0;
    for (let i = 0; i < vis.length; i++) {
      if (vis[i].popular) {
        donePopular = donePopular + 1;
      }
    }
    if (loading || loadingBrand) {
      return <Spinner />;
    } else {
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
                }}
              >
                <div
                  style={{
                    width: "400px",
                    maxHeight: "100%",
                    margin: "20px auto",
                  }}
                >
                  {loadingView ? (
                    <Spinner />
                  ) : (
                    <img
                      style={{ width: "380px", margin: "0 10px" }}
                      src={fileFocus}
                    />
                  )}
                </div>
              </div>
            </Modal>
          ) : null}
          <div className={styles.wrapper}>
            {type.includes("HISTORY") ? (
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
                  if (type === "PLAN") {
                    if (state.visitPlanReducer.visibility.length > 0) {
                      setVis([...state.visitPlanReducer.visibility]);
                    } else {
                      setVis([...initialVis]);
                    }
                  }
                  if (type === "UNPLAN") {
                    if (state.visitUnplanReducer.visibility.length > 0) {
                      setVis([...state.visitUnplanReducer.visibility]);
                    } else {
                      setVis([...initialVis]);
                    }
                  }
                  if (type === "SPREADING") {
                    if (state.visitSpreadingReducer.visibility.length > 0) {
                      setVis([...state.visitSpreadingReducer.visibility]);
                    } else {
                      setVis([...initialVis]);
                    }
                  }
                  Router.back();
                }}
                disable={false}
              />
            )}
            <div className={styles.main}>
              {/* {doneFormVis.length >= 6 && donePopular < 3 ? (
                <div
                  style={{
                    fontSize: "14px",
                    color: "red",
                    textAlign: "center",
                  }}
                >
                  Please select 3 best photos
                </div>
              ) : null} */}
              {type.includes("HISTORY")
                ? renderHistoryPosm()
                : renderInputUpload()}
            </div>
          </div>
        </div>
      );
    }
  };
  return render();
}
