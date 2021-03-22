import React, { useState, useEffect, useContext } from "react";
import styles from "../../../../../styles/pages/VisitPlanDetail.module.css";

import Nav from "../../../../../components/Nav";
import { Stores } from "../../../../../store";
import Spinner from "../../../../../components/Spinner";

import { useRouter } from "next/router";

export default function avability() {
  const { state, dispatch, actions } = useContext(Stores);
  const [loading, setLoading] = useState(true);
  const [plan, setPlan] = useState([]);
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

  const render = () => {
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <Nav
              title={"Avability"}
              backHref={`/activity/visit/plan/${plan.id}`}
              color={"white"}
              action={"Add"}
              onClick={() => {
                console.log("add");
              }}
            />
            <div className={styles.main}>
              <input
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                placeholder="Search"
                className={styles.input}
              />
            </div>
          </div>
        </div>
      );
    }
  };
  return render();
}
