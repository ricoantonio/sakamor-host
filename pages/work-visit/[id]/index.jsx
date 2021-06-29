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

import {
  getAllWorkVisit,
  getKontenWorkVisit,
  submitWorkVisit,
} from "../../../helper";

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

      getAllWorkVisit(userData)
        .then((res) => {
          var result = res.filter((val) => {
            return val.idMasterPlan === router.query.id;
          });
          setWorkVisit(result);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [router.query.id]);

  useEffect(() => {
    getKontenWorkVisit()
      .then((res) => {
        setKonten(res);
        setLoadingKonten(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  const renderPenilaian = () => {
    const res = konten.map((val, index) => {
      return (
        <>
          <div className={styles.penilaian_top_container}>{val.namaKonten}</div>
          <div className={styles.penilaian_bot_container}>
            <div className={styles.nilai_container}>
              <div>Nilai</div>
              <Dropdown
                options={["SELECT", 1, 2, 3, 4, 5]}
                type={"NILAI_WORKVISIT"}
                onChange={(e) => {
                  konten.splice(index, 1, {
                    ...konten[index],
                    nilai: parseInt(e.target.value),
                  });
                }}
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
                onChange={(e) => {
                  konten.splice(index, 1, {
                    ...konten[index],
                    catatan: e.target.value,
                  });
                }}
              ></textarea>
            </div>
          </div>
        </>
      );
    });
    return res;
  };

  const onSubmit = () => {
    var dataNilai = konten.filter((val) => {
      return val.nilai;
    });
    if (dataNilai.length === konten.length) {
      setLoadingSubmit(true);
      const userData = JSON.parse(localStorage.getItem("user"));
      const workVisitFocus = workVisit[0];
      var dataKonten = konten.map((val) => {
        return {
          id: val.id,
          idActivityWorkVisit: workVisitFocus.idWorkVisit,
          idMasterKontenWorkVisit: val.id,
          rating: val.nilai,
          catatan: val.catatan ? val.catatan : "",
          createdby: userData.username,
          updatedBy: userData.username,
          namaKonten: val.namaKonten,
        };
      });

      var data = {
        workVisit: {
          id: workVisitFocus.idWorkVisit,
          idMasterPlanWorkVisit: workVisitFocus.idMasterPlan,
          namaSMR: workVisitFocus.namaSMR,
          usernameSMR: workVisitFocus.usernameSMR,
          kodeRayon: workVisitFocus.kodeRayon,
          rayon: workVisitFocus.rayon,
          kodeProduk: workVisitFocus.kodeProduk,
          produkFokus: workVisitFocus.produkFokus,
          isPenilaian: true,
          tanggalPenilaian: now.toISOString(),
          createdBy: userData.username,
          updatedBy: userData.username,
        },
        rating: dataKonten,
      };
    }
    submitWorkVisit(data)
      .then((res) => {
        setLoadingSubmit(false);
        Router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
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
                <Button
                  onClick={() => {
                    onSubmit();
                  }}
                  text="Submit"
                />
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return render();
}
