import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import styles from "../../../styles/pages/WorkVisitDetail.module.css";

import { Stores } from "../../../store";

import Nav from "../../../components/Nav";
import Card from "../../../components/Card";
import Spinner from "../../../components/Spinner";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import Dropdown from "../../../components/Dropdown";

import { getAllWorkVisit } from "../../../helper";

export default function index() {
  const { state, dispatch, actions } = useContext(Stores);
  const [loading, setLoading] = useState(true);
  const [workVisit, setWorkVisit] = useState([]);
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const router = useRouter();
  var now = new Date();

  useEffect(() => {
    //   /GetAllMasterVisitPlan"
    if (router.query.id) {
      getAllWorkVisit()
        .then((res) => {
          var result = res.filter((val) => {
            return val.id === router.query.id;
          });
          setWorkVisit(result);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [router.query.id]);

  const onSubmit = () => {};

  const renderPenilaian = () => {
    return (
      <>
        <div className={styles.penilaian_top_container}>Komunikasi</div>
        <div className={styles.penilaian_bot_container}>
          <div className={styles.nilai_container}>
            <div>Nilai</div>
            <Dropdown
              options={["1", "2", "3", "4", "5"]}
              type={"NILAI_WORKVISIT"}
              onChange={(e) => {}}
            />
          </div>
          <div>
            <div>Catatan</div>
            <textarea
              style={{
                width: "100%",
                height: "80px",
                fontSize: "12px",
                border: "1px solid #e9ecf2",
                borderRadius: "5px",
              }}
              onChange={(e) => {}}
              value={state.visitSpreadingReducer.catatan}
            ></textarea>
          </div>
        </div>
      </>
    );
  };

  const renderDetail = () => {
    var data = workVisit[0];
    console.log(data);
    return (
      <>
        <Card style={{ borderRadius: "5px", padding: "16px" }} shadow>
          <div className={styles.data_container}>
            <div>{data.namaSMR}</div>
            <div style={{ textAlign: "right" }}>
              <span className={styles.rayon_container}>{data.kodeRayon}</span>
            </div>
          </div>
          <div style={{ fontSize: "12px", fontWeight: "400" }}>
            Produk Fokus:{" "}
            <span className={styles.produk_fokus_container}>
              {data.produkFokus}
            </span>
          </div>
        </Card>
        {renderPenilaian()}
      </>
    );
  };

  const render = () => {
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <>
          <div className={styles.container}>
            {loadingSubmit ? (
              <Modal>
                <Spinner />
              </Modal>
            ) : null}
            <div className={styles.wrapper}>
              <Nav
                title={"Work Visit"}
                color={"white"}
                action={"Submit"}
                backAction={() => {
                  if (
                    confirm(
                      "Data will be lost if you leave the page, are you sure?"
                    )
                  ) {
                    actions.setDefaultVisitUnplan();
                    Router.push("/work-visit");
                  }
                }}
              />
              <div className={styles.main}>{renderDetail()}</div>
              <div className={styles.bottom_container}>
                <Button text="Submit" />
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return render();
}
