import React, { useState, useEffect, useContext } from "react";
import styles from "../../../../../styles/pages/VisitPlanDetail.module.css";

import Nav from "../../../../../components/Nav";
import Card from "../../../../../components/Card";
import { Stores } from "../../../../../store";
import Spinner from "../../../../../components/Spinner";
import Link from "next/link";

import { useRouter } from "next/router";
import Button from "../../../../../components/Button";

export default function index() {
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

  const renderDetail = () => {
    return (
      <div>
        {renderDataDetail("Jenis Channel", plan.jenisChannel)}
        {renderDataDetail("Outlet", plan.namaOutlet)}
        {renderDataDetail("Alamat", plan.alamatOutlet)}
        {renderDataDetail("Catatan", plan.catatan)}
        {renderDataDetail("Visibility")}
        {renderDataDetail("Avability")}
      </div>
    );
  };
  const renderDataDetail = (type, data) => {
    return (
      <div>
        <div className={styles.render_data}>{type}</div>
        <Card style={{ marginTop: "6px", borderRadius: "5px" }}>
          <div className={styles.render_value}>
            {type === "Visibility" || type === "Avability" ? (
              <Link
                href={
                  type === "Visibility"
                    ? `/activity/visit/plan/${plan.id}/visibility`
                    : type === "Avability"
                    ? `/activity/visit/plan/${plan.id}/avability`
                    : ""
                }
              >
                <a>
                  <Button text="Add" />
                </a>
              </Link>
            ) : (
              <>{data}</>
            )}
          </div>
        </Card>
      </div>
    );
  };
  const render = () => {
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <Nav
              title={"Plan"}
              backHref="/activity/visit/plan"
              color={"white"}
              action={"Submit"}
              onClick={() => {
                console.log("submit");
              }}
            />
            <div className={styles.main}>{renderDetail()}</div>
          </div>
        </div>
      );
    }
  };
  return render();
}
