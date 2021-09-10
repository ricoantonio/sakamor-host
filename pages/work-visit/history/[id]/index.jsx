import React, { useState, useEffect, useContext } from "react";
import Router, { useRouter } from "next/router";
import styles from "../../../../styles/pages/WorkVisitDetail.module.css";

import { Stores } from "../../../../store";

import Nav from "../../../../components/Nav";
import Card from "../../../../components/Card";
import Spinner from "../../../../components/Spinner";

import {
  getWorkVisitMonthlyHistory,
  getWorkVisitRating,
} from "../../../../helper";

export default function index() {
  const { state, dispatch, actions } = useContext(Stores);
  const [loading, setLoading] = useState(true);
  const [workVisit, setWorkVisit] = useState([]);
  const [konten, setKonten] = useState([]);
  const [loadingKonten, setLoadingKonten] = useState(true);
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const router = useRouter();
  var now = new Date();

  useEffect(() => {
    if (router.query.id) {
      const userData = JSON.parse(localStorage.getItem("user"));

      getWorkVisitMonthlyHistory(userData)
        .then((res) => {
          var result = res.filter((val) => {
            return val.idWorkVisit === router.query.id;
          });
          setWorkVisit(result);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
      getWorkVisitRating(router.query.id)
        .then((res) => {
          // console.log(res);
          setKonten(res);
          setLoadingKonten(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [router.query.id]);

  const renderPenilaian = () => {
    const res = konten.map((val, index) => {
      return (
        <>
          <div className={styles.penilaian_top_container}>{val.namaKonten}</div>
          <div className={styles.penilaian_bot_container}>
            <div className={styles.nilai_container}>
              <div>Nilai</div>
              <div>{val.rating}</div>
            </div>
            <div>
              <div>Catatan</div>
              <textarea
                disabled={true}
                style={{
                  width: "100%",
                  height: "80px",
                  fontSize: "12px",
                  border: "1px solid #e9ecf2",
                  borderRadius: "5px",
                }}
                value={val.catatan}
              ></textarea>
            </div>
          </div>
        </>
      );
    });
    return res;
  };

  const renderDetail = () => {
    var data = workVisit[0];
    if (data) {
      return (
        <>
          <Card style={{ borderRadius: "5px", padding: "16px" }} shadow>
            <div className={styles.data_container}>
              <div>{data.namaSMR}</div>
              <div style={{ textAlign: "right" }}>
                <span className={styles.rayon_container}>{data.kodeRayon}</span>
              </div>
            </div>
            <div
              style={{
                fontSize: "12px",
                fontWeight: "400",
                margin: "8px 0 0 0 ",
              }}
            >
              Produk Fokus:{" "}
              <span className={styles.produk_fokus_container}>
                {data.produkFokus}
              </span>
            </div>
          </Card>
          {renderPenilaian()}
        </>
      );
    }
  };

  const render = () => {
    if (loading || loadingKonten) {
      return <Spinner />;
    } else {
      return (
        <>
          <div className={styles.container}>
            <div className={styles.wrapper}>
              <Nav
                title={"Work Visit"}
                color={"white"}
                action={"Submit"}
                backAction={() => {
                  Router.push("/work-visit/history");
                }}
              />
              <div className={styles.main}>{renderDetail()}</div>
            </div>
          </div>
        </>
      );
    }
  };

  return render();
}
