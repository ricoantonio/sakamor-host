import React, { useState, useEffect, useContext } from "react";
import styles from "../../../../../styles/pages/VisitPlanDetail.module.css";

import Nav from "../../../../../components/Nav";
import { Stores } from "../../../../../store";
import Spinner from "../../../../../components/Spinner";

import { useRouter } from "next/router";

export default function visibility() {
  const { state, dispatch, actions } = useContext(Stores);
  const [loading, setLoading] = useState(true);
  const [plan, setPlan] = useState({});
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

  useEffect(() => {
    if (router.query.id) {
      fetch(
        `http://10.100.4.116:8230/api/ActivityVisitPlan/GetActivityVisitPlanById/${router.query.id}`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setPlan(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [router.query.id]);

  const renderInputUpload = () => {
    var render = [];
    console.log(vis);
    for (let i = 1; i <= 6; i++) {
      render.push(
        <>
          <div className={styles.visibility_grid}>
            <div>POSM {i}</div>
            <div className={styles.visibility_dropdown}>
              {vis[i - 1].file != null ? vis[i - 1].file.name : ""}
            </div>
            <div>
              <label className={styles.new_button} htmlFor={`upload${i}`}>
                <img
                  src={"/camera.svg"}
                  style={{ width: "18px", verticalAlign: "baseline" }}
                />
                <input
                  className={styles.input_file}
                  onChange={(e) => {
                    vis.splice(i - 1, 1, {
                      ...vis[i - 1],
                      file: e.target.files[0],
                    });
                    setDummy(dummy + 1);
                  }}
                  id={`upload${i}`}
                  type="file"
                  accept="image/*"
                  capture="environment"
                />
              </label>
            </div>
          </div>
        </>
      );
    }
    return render;
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
              backHref={`/activity/visit/plan/${plan.id}`}
              color={"white"}
            />
            <div className={styles.main}>{renderInputUpload()}</div>
          </div>
        </div>
      );
    }
  };
  return render();
}
