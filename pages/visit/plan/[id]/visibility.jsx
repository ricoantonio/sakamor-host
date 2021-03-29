import React, { useState, useEffect, useContext } from "react";
import Router, { useRouter } from "next/router";
import styles from "../../../../styles/pages/VisitPlanDetail.module.css";

import { Stores } from "../../../../store";

import Nav from "../../../../components/Nav";
import Spinner from "../../../../components/Spinner";
import Dropdown from "../../../../components/Dropdown";

import {
  API_URL,
  API_USER,
  TOKEN,
  API_VISIT_PLAN,
  API_MASTER_DATA,
} from "../../../../constant";

export default function visibility() {
  const { state, dispatch, actions } = useContext(Stores);
  const [loading, setLoading] = useState(true);
  const [posm, setPosm] = useState([]);
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
    if (state.visitPlanReducer.visibility.length > 0) {
      setVis([...state.visitPlanReducer.visibility]);
    }
  }, [dispatch]);

  useEffect(() => {
    if (router.query.id) {
      // `http://10.100.4.116:8230/api/ActivityVisitPlanDPOSM/GetAllActivityVisitPlanDposm`;
      fetch(
        API_URL +
          API_VISIT_PLAN +
          `/ActivityVisitPlanDPOSM/GetAllActivityVisitPlanDposm`,
        {
          headers: {
            apiKey: TOKEN,
          },
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setPosm(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [router.query.id]);

  const renderInputUpload = () => {
    var render = vis.map((val, index) => {
      return (
        <>
          <div key={index} className={styles.visibility_grid}>
            <div>POSM {index + 1}</div>
            <div className={styles.visibility_dropdown}>
              <Dropdown
                options={posm}
                onChange={(e) => {
                  var a = posm.filter((val) => {
                    return val.namaFile == e.target.value;
                  });
                  console.log(a);
                  vis.splice(index, 1, {
                    ...vis[index],
                    type: a[0],
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
                {val.file != null ? val.file.name : ""}
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
  const onSave = () => {
    var saveVis = console.log(saveVis);
    actions.setVisibility(vis);
    Router.push(`/visit/plan/${router.query.id}`);
  };
  const render = () => {
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <div className={styles.container}>
          <div className={styles.wrapper}>
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
                Router.push(`/visit/plan/${router.query.id}`);
              }}
            />
            <div className={styles.main}>{renderInputUpload()}</div>
          </div>
        </div>
      );
    }
  };
  return render();
}
