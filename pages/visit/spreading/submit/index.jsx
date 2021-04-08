import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import styles from "../../../../styles/pages/VisitPlanDetail.module.css";

import { Stores } from "../../../../store";

import Nav from "../../../../components/Nav";
import Card from "../../../../components/Card";
import Spinner from "../../../../components/Spinner";
import Button from "../../../../components/Button";

export default function index() {
  const { state, dispatch, actions } = useContext(Stores);
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState([]);
  const router = useRouter();
  var now = new Date();
  var date = now.getDate();
  var month = now.getMonth() + 1;
  var year = now.getFullYear();
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
    const doneFormVis = state.visitPlanReducer.visibility.filter((val) => {
      return val.file !== null && val.type !== null;
    });
    const doneFormAva = state.visitPlanReducer.avability;
    return (
      <div>
        <div className={styles.render_data}>
          {type}
          <div style={{ textAlign: "right" }}>
            {type === "Visibility"
              ? `${doneFormVis.length}/6`
              : type === "Avability"
              ? `${doneFormAva.length}/25`
              : ""}
          </div>
        </div>
        <Card style={{ marginTop: "6px", borderRadius: "5px" }}>
          <div className={styles.render_value}>
            {type === "Catatan" ? (
              <textarea
                style={{ width: "100%", border: "none", height: "70px" }}
                onChange={(e) => {
                  actions.setCatatan(e.target.value);
                }}
                value={state.visitPlanReducer.catatan}
              ></textarea>
            ) : type === "Visibility" || type === "Avability" ? (
              <>
                <div>
                  {type === "Visibility" ? (
                    <div>
                      <div className={styles.progress_bar}></div>
                      <div
                        className={styles.progress_bar_now}
                        style={{
                          width: `${(doneFormVis.length / 6) * 100}%`,
                        }}
                      ></div>
                    </div>
                  ) : type === "Avability" ? (
                    <div>
                      <div className={styles.progress_bar}></div>
                      <div
                        className={styles.progress_bar_now}
                        style={{
                          width: `${(doneFormAva.length / 25) * 100}%`,
                        }}
                      ></div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <Link
                  href={
                    type === "Visibility"
                      ? `/visit/unplan/submit/visibility`
                      : type === "Avability"
                      ? `/visit/unplan/submit/avability`
                      : ""
                  }
                >
                  <a>
                    <Button text="Add" />
                  </a>
                </Link>
              </>
            ) : (
              <>{data}</>
            )}
          </div>
        </Card>
      </div>
    );
  };

  const onSubmit = () => {
    const visDone = state.visitPlanReducer.visibility.filter((val) => {
      return val.file !== null && val.type !== null;
    });
    if (visDone.length === 6) {
      const userData = JSON.parse(localStorage.getItem("user"));

      const bodyPlan = {
        id: plan.id,
        idMasterPlanVisit: plan.id,
        nomorDokumen: plan.nomorDokumen,
        catatan: state.visitPlanReducer.catatan,
        isCheckIn: true,
        checkInDate: state.visitPlanReducer.checkIn.toISOString(),
        isCheckOut: true,
        checkOutDate: now.toISOString(),
        createdBy: userData.username,
        updatedBy: userData.username,
      };
      const bodyPosm = state.visitPlanReducer.visibility.map((val, index) => {
        return {
          id: plan.id,
          activityVisitPlanId: plan.id,
          nomorDokumen: plan.nomorDokumen,
          nomor: index,
          tipe: val.type.tipe,
          namaFile: val.file.name,
          createdBy: userData.username,
          updatedBy: userData.username,
        };
      });
      const bodyProduct = state.visitPlanReducer.avability.map((val, index) => {
        return {
          id: plan.id,
          activityVisitPlanId: plan.id,
          nomorDokumen: plan.nomorDokumen,
          nomor: index,
          kodeProduk: val.productFocus.produkID,
          namaProduk: val.productFocus.namaProduk,
          stok: val.stock,
          saranOrder: val.saranOrder,
          jumlahOrder: val.order,
          createdBy: userData.username,
          updatedBy: userData.username,
        };
      });
      // http://10.100.4.116:8230/api/ActivityVisitPlan/SaveActivityVisitPlan
      // http://10.100.4.116:8230/api/ActivityVisitPlanDPOSM/SaveActivityVisitPlanDposm
      // http://10.100.4.116:8230/api/ActivityVisitPlanDProduct/SaveActivityVisitPlanDProduct
      console.log(state.visitPlanReducer.visibility);
      console.log(state.visitPlanReducer.avability);
      console.log(bodyPlan, bodyPosm, bodyProduct);
    }
  };

  const render = () => {
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <Nav
              title={"Spreading"}
              color={"white"}
              action={"Submit"}
              onClick={() => {
                onSubmit();
              }}
              backAction={() => {
                if (
                  confirm(
                    "Data will be lost if you leave the page, are you sure?"
                  )
                ) {
                  actions.setDefaultVisitPlan();
                  Router.push("/visit/spreading");
                }
              }}
              disable={false}
            />
            <div className={styles.main}>{renderDetail()}</div>
          </div>
        </div>
      );
    }
  };

  return render();
}
