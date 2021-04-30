import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import styles from "../../../../styles/pages/VisitPlanDetail.module.css";

import { Stores } from "../../../../store";

import Nav from "../../../../components/Nav";
import Modal from "../../../../components/Modal";
import Card from "../../../../components/Card";
import Spinner from "../../../../components/Spinner";
import Button from "../../../../components/Button";

import { submitVisitUnplanDposm, submitVisitUnplan } from "../../../../helper";

export default function index() {
  const { state, dispatch, actions } = useContext(Stores);
  const [loading, setLoading] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [plan, setPlan] = useState([]);
  const router = useRouter();
  var now = new Date();

  useEffect(() => {
    if (
      state.visitSpreadingReducer.jenisChannel.namaJenisChannel &&
      state.visitSpreadingReducer.outlet.namaOutlet
    ) {
      if (!state.visitSpreadingReducer.checkIn) {
        actions.setSpreadingCheckIn(now);
      }
    } else {
      Router.push("/visit/spreading");
    }
  }, []);

  const renderDetail = () => {
    return (
      <div>
        {renderDataDetail(
          "Jenis Channel",
          state.visitSpreadingReducer.jenisChannel.namaJenisChannel
        )}
        {renderDataDetail(
          "Outlet",
          state.visitSpreadingReducer.outlet.namaOutlet
        )}
        {renderDataDetail(
          "Alamat",
          state.visitSpreadingReducer.outlet.alamatOutlet
        )}
        {renderDataDetail("Catatan", state.visitSpreadingReducer.catatan)}
        {renderDataDetail("Visibility")}
        {renderDataDetail("Avability")}
      </div>
    );
  };

  const renderDataDetail = (type, data) => {
    const doneFormVis = state.visitSpreadingReducer.visibility.filter((val) => {
      return val.file !== null && val.type !== null;
    });
    const doneFormAva = state.visitSpreadingReducer.avability;
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
                  actions.setSpreadingCatatan(e.target.value);
                }}
                value={state.visitSpreadingReducer.catatan}
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
                      ? `/visit/spreading/submit/visibility`
                      : type === "Avability"
                      ? `/visit/spreading/submit/avability`
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
    const visDone = state.visitSpreadingReducer.visibility.filter((val) => {
      return val.file !== null && val.type !== null;
    });
    if (visDone.length === 6) {
      setLoadingSubmit(true);

      const userData = JSON.parse(localStorage.getItem("user"));

      const bodyPlan = {
        usernameSMR: userData.username,
        nomorDokumen: "",
        catatan: state.visitSpreadingReducer.catatan,
        idJenisChannel: parseInt(
          state.visitSpreadingReducer.jenisChannel.jenisChannelID
        ),
        jenisChannel: state.visitSpreadingReducer.jenisChannel.namaJenisChannel,
        idOutlet: state.visitSpreadingReducer.outlet.outletID,
        namaOutlet: state.visitSpreadingReducer.outlet.namaOutlet,
        alamatOutlet: state.visitSpreadingReducer.outlet.alamatOutlet,
        tanggal: now.toISOString(),
        target: 0,
        sales: 0,
        isCheckIn: true,
        checkInDate: state.visitSpreadingReducer.checkIn.toISOString(),
        isCheckOut: true,
        checkOutDate: now.toISOString(),
        createdBy: userData.username,
        updatedBy: userData.username,
      };

      const files = state.visitSpreadingReducer.visibility.map((val, index) => {
        return val.file;
      });

      const bodyProduct = state.visitSpreadingReducer.avability.map(
        (val, index) => {
          return {
            nomorDokumen: "",
            nomor: index,
            kodeProduk: val.productFocus.produkID,
            namaProduk: val.productFocus.namaProduk,
            stok: parseInt(val.stock),
            saranOrder: parseInt(val.saranOrder),
            jumlahOrder: parseInt(val.order),
            harga: 0,
            totalHarga: 0,
            keterangan: val.ket,
            createdBy: userData.username,
            updatedBy: userData.username,
          };
        }
      );

      var data = {
        avp: bodyPlan,
        dProductList: bodyProduct,
      };

      console.log(data, state.visitSpreadingReducer.avability);

      submitVisitSpreading(data)
        .then((res) => {
          console.log("ini res", res);
          const bodyPosm = state.visitSpreadingReducer.visibility.map(
            (val, index) => {
              return {
                activityVisitSpreadingId: res.avp.id,
                nomor: index,
                tipe: val.type.program,
                namaFile: val.file.name,
                createdBy: userData.username,
                updatedBy: userData.username,
              };
            }
          );
          for (let i = 0; i < files.length; i++) {
            submitVisitSpreadingDposm(bodyPosm[i], files[i]);
          }
          setLoadingSubmit(false);
          actions.setDefaultVisitSpreading();
          Router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const render = () => {
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <div className={styles.container}>
          {loadingSubmit ? (
            <Modal>
              <Spinner />
            </Modal>
          ) : null}
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
