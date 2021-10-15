import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import styles from "../../../../styles/pages/VisitPlanDetail.module.css";

import { Stores } from "../../../../store";

import Nav from "../../../../components/Nav";
import Card from "../../../../components/Card";
import Spinner from "../../../../components/Spinner";
import Button from "../../../../components/Button";
import Modal from "../../../../components/Modal";

import {
  insertFilePlan,
  insertFileSpreading,
  insertFileUnplan,
  submitVisitPlanDposm,
  submitVisitSpreadingDposm,
  submitVisitUnplanDposm,
  updateDataPosmPlan,
  updateDataPosmSpreading,
  updateDataPosmUnplan,
  updateDataProdukPlan,
  updateDataProdukUnplan,
  updateDataProdukSpreading,
  approvalSubmit,
  getPimcaByCabang,
  getPlanById,
} from "../../../../helper";

export default function index() {
  const { state, dispatch, actions } = useContext(Stores);
  const [loading, setLoading] = useState(true);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [modalConfirmApprove, setModalConfirmApprove] = useState(false);
  const [plan, setPlan] = useState([]);
  const [pimca, setPimca] = useState([]);

  const router = useRouter();

  var now = new Date();

  useEffect(() => {
    // setLoading(false);
    if (state.approvalReducer.focusApproval.status == "Revise") {
      setPlan(state.approvalReducer.focusApproval);
      setLoading(false);
    } else {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      getPimcaByCabang(userData.kodeCabang)
        .then((data) => {
          setPimca(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  useEffect(() => {
    if (router.query.type === "Plan") {
      if (state.reviseReducer.visibility[0].id) {
        console.log("vis", state.reviseReducer.visibility);
        var data = state.reviseReducer.visibility.map((val) => {
          return {
            prev: {
              activityVisitPlanId: val.activityVisitPlanId,
              brandId: val.brandId,
              createdBy: val.createdBy,
              createdDate: val.createdDate,
              id: val.id,
              isDeleted: val.isDeleted,
              isPopular: val.isPopular,
              lokasiFile: val.lokasiFile,
              namaBrand: val.namaBrand,
              namaFile: val.namaFile,
              nomor: val.nomor,
              nomorDokumen: val.nomorDokumen,
              tipe: val.tipe,
              updatedBy: val.updatedBy,
              updatedDate: val.updatedDate,
            },
            type: {
              id: null,
              program: val.tipe,
            },
            brand: {
              id: val.brandId,
              namaBrand: val.namaBrand,
            },
            popular: val.isPopular,
            file: {
              name: val.namaFile,
              id: val.id,
            },
          };
        });
        if (data.length < 9) {
          for (let i = data.length; i < 8; i++) {
            data.push({ file: null, type: null, brand: null, popular: false });
          }
        }
        actions.setReviseVisibility(data);
      }
      if (
        state.reviseReducer.avability.length &&
        state.reviseReducer.avability[0].id
      ) {
        console.log(state.reviseReducer.avability);
        var dataProduk = state.reviseReducer.avability.map((val) => {
          return {
            prev: {
              activityVisitPlanId: val.activityVisitPlanId,
              createdBy: val.createdBy,
              createdDate: val.createdDate,
              harga: val.harga,
              id: val.id,
              isDeleted: val.isDeleted,
              jumlahOrder: val.jumlahOrder,
              keterangan: val.keterangan,
              kodeProduk: val.kodeProduk,
              namaProduk: val.namaProduk,
              nomor: val.nomor,
              nomorDokumen: val.nomorDokumen,
              saranOrder: val.saranOrder,
              stok: val.stok,
              total: val.total,
              updatedBy: val.updatedBy,
              updatedDate: val.updatedDate,
            },
            harga: val.harga,
            ket: val.keterangan,
            minor: "",
            order: val.jumlahOrder,
            pengiriman: "",
            productFocus: {
              id: "",
              jenisChannelID:
                state.approvalReducer.focusApproval.idJenisChannel,
              namaJenisChannel:
                state.approvalReducer.focusApproval.jenisChannel,
              namaProduk: val.namaProduk,
              produkID: val.kodeProduk,
            },
            saranOrder: val.saranOrder,
            stock: val.stok,
          };
        });
        console.log(dataProduk);
        actions.setReviseAvability(dataProduk);
      }
    } else if (router.query.type === "UnPlan") {
      if (state.reviseReducer.visibility[0].id) {
        var data = state.reviseReducer.visibility.map((val) => {
          return {
            prev: {
              activityVisitUnPlanId: val.activityVisitUnPlanId,
              brandId: val.brandId,
              createdBy: val.createdBy,
              createdDate: val.createdDate,
              id: val.id,
              isDeleted: val.isDeleted,
              isPopular: val.isPopular,
              lokasiFile: val.lokasiFile,
              namaBrand: val.namaBrand,
              namaFile: val.namaFile,
              nomor: val.nomor,
              nomorDokumen: val.nomorDokumen,
              tipe: val.tipe,
              updatedBy: val.updatedBy,
              updatedDate: val.updatedDate,
            },
            type: {
              id: null,
              program: val.tipe,
            },
            brand: {
              id: val.brandId,
              namaBrand: val.namaBrand,
            },
            popular: val.isPopular,
            file: {
              name: val.namaFile,
              id: val.id,
            },
          };
        });
        if (data.length < 9) {
          for (let i = data.length; i < 8; i++) {
            data.push({ file: null, type: null, brand: null, popular: false });
          }
        }
        actions.setReviseVisibility(data);
      }
      if (
        state.reviseReducer.avability.length &&
        state.reviseReducer.avability[0].id
      ) {
        var dataProduk = state.reviseReducer.avability.map((val) => {
          return {
            prev: {
              activityVisitUnPlanId: val.activityVisitUnPlanId,
              createdBy: val.createdBy,
              createdDate: val.createdDate,
              harga: val.harga,
              id: val.id,
              isDeleted: val.isDeleted,
              jumlahOrder: val.jumlahOrder,
              keterangan: val.keterangan,
              kodeProduk: val.kodeProduk,
              namaProduk: val.namaProduk,
              nomor: val.nomor,
              nomorDokumen: val.nomorDokumen,
              saranOrder: val.saranOrder,
              stok: val.stok,
              total: val.total,
              updatedBy: val.updatedBy,
              updatedDate: val.updatedDate,
            },
            harga: val.harga,
            ket: val.keterangan,
            minor: "",
            order: val.jumlahOrder,
            pengiriman: "",
            productFocus: {
              id: "",
              jenisChannelID:
                state.approvalReducer.focusApproval.idJenisChannel,
              namaJenisChannel:
                state.approvalReducer.focusApproval.jenisChannel,
              namaProduk: val.namaProduk,
              produkID: val.kodeProduk,
            },
            saranOrder: val.saranOrder,
            stock: val.stok,
          };
        });
        console.log(dataProduk);
        actions.setReviseAvability(dataProduk);
      }
    } else if (router.query.type === "Spreading") {
      if (state.reviseReducer.visibility[0].id) {
        var data = state.reviseReducer.visibility.map((val) => {
          return {
            prev: {
              activitySpreadingId: val.activitySpreadingId,
              brandId: val.brandId,
              createdBy: val.createdBy,
              createdDate: val.createdDate,
              id: val.id,
              isDeleted: val.isDeleted,
              isPopular: val.isPopular,
              lokasiFile: val.lokasiFile,
              namaBrand: val.namaBrand,
              namaFile: val.namaFile,
              nomor: val.nomor,
              nomorDokumen: val.nomorDokumen,
              tipe: val.tipe,
              updatedBy: val.updatedBy,
              updatedDate: val.updatedDate,
            },
            type: {
              id: null,
              program: val.tipe,
            },
            brand: {
              id: val.brandId,
              namaBrand: val.namaBrand,
            },
            popular: val.isPopular,
            file: {
              name: val.namaFile,
              id: val.id,
            },
          };
        });
        if (data.length < 9) {
          for (let i = data.length; i < 8; i++) {
            data.push({ file: null, type: null, brand: null, popular: false });
          }
        }
        actions.setReviseVisibility(data);
      }
      if (
        state.reviseReducer.avability.length &&
        state.reviseReducer.avability[0].id
      ) {
        var dataProduk = state.reviseReducer.avability.map((val) => {
          return {
            harga: val.harga,
            ket: val.keterangan,
            minor: "",
            order: val.jumlahOrder,
            pengiriman: "",
            productFocus: {
              id: "",
              jenisChannelID:
                state.approvalReducer.focusApproval.idJenisChannel,
              namaJenisChannel:
                state.approvalReducer.focusApproval.jenisChannel,
              namaProduk: val.namaProduk,
              produkID: val.kodeProduk,
            },
            saranOrder: val.saranOrder,
            stock: val.stok,
          };
        });
        console.log(dataProduk);
        actions.setReviseAvability(dataProduk);
      }
    }
  }, []);

  const renderDetail = () => {
    return (
      <div>
        {renderDataDetail("Jenis Channel", plan.jenisChannel)}
        {renderDataDetail("Outlet", plan.namaOutlet)}
        {renderDataDetail("Alamat", plan.alamatOutlet)}
        {renderDataDetail("Catatan", plan.catatan)}
        {renderDataDetail("Visibility")}
        {renderDataDetail("Availability")}
      </div>
    );
  };

  const renderDataDetail = (type, data) => {
    console.log(state.reviseReducer);
    const doneFormVis = state.reviseReducer.visibility.filter((val) => {
      return val.file !== null && val.type !== null && val.brand !== null;
    });
    return (
      <div>
        <div className={styles.render_data}>
          {type}
          <div style={{ textAlign: "right" }}>
            {type === "Visibility"
              ? `${doneFormVis.length}/6`
              : type === "Availability"
              ? `${state.reviseReducer.avability.length}/25`
              : ""}
          </div>
        </div>
        <Card style={{ marginTop: "6px", borderRadius: "5px" }}>
          <div className={styles.render_value}>
            {type === "Catatan" ? (
              <textarea
                style={{ width: "100%", border: "none", height: "70px" }}
                // onChange={(e) => {
                //   actions.setPlanCatatan(e.target.value);
                // }}

                value={plan.catatan}
              ></textarea>
            ) : type === "Visibility" || type === "Availability" ? (
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
                  ) : type === "Availability" ? (
                    <div>
                      <div className={styles.progress_bar}></div>
                      <div
                        className={styles.progress_bar_now}
                        style={{
                          width: `${
                            (state.reviseReducer.avability.length / 25) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <Link
                  href={
                    router.query.type === "Plan"
                      ? type === "Visibility"
                        ? `/revise/Plan/${plan.idVisitPlan}/visibility`
                        : type === "Availability"
                        ? `/revise/Plan/${plan.idVisitPlan}/availability`
                        : ""
                      : router.query.type === "UnPlan"
                      ? type === "Visibility"
                        ? `/revise/UnPlan/${plan.id}/visibility`
                        : type === "Availability"
                        ? `/revise/UnPlan/${plan.id}/availability`
                        : ""
                      : router.query.type === "Spreading"
                      ? type === "Visibility"
                        ? `/revise/Spreading/${plan.id}/visibility`
                        : type === "Availability"
                        ? `/revise/Spreading/${plan.id}/availability`
                        : ""
                      : null
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

  const onSubmitApproval = (plan) => {
    const module =
      router.query.type === "Plan"
        ? "VISITPLAN"
        : router.query.type === "UnPlan"
        ? "VISITUNPLAN"
        : router.query.type === "Spreading"
        ? "SPREADING"
        : "";
    const approvalId =
      router.query.type === "Plan"
        ? 352
        : router.query.type === "UnPlan"
        ? 358
        : router.query.type === "Spreading"
        ? 359
        : "";
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      const data = {
        approvalTransactionDataModel: [
          {
            systemCode: "SAKAMOR",
            moduleCode: module,
            approvalLevel: 1,
            id: plan.id,
            approvalID: approvalId,
            docNo: plan.nomorDokumen,
            pic: pimca.username,
            approvalLine: 0,
            notes: "string",
            needApprove: true,
            approveDate: now.toISOString(),
            status: "string",
          },
        ],
        systemCode: "SAKAMOR",
        moduleCode: module,
        docNo: plan.nomorDokumen,
        approverFrom: "string",
        approverTo: "string",
        status: "string",
        description: "string",
        notes: "string",
        createdBy: userData.username,
        createdDate: now.toISOString(),
        emailData: {
          systemCode: "SAKAMOR",
          moduleCode: module,
          documentNumber: plan.nomorDokumen,
          emailTo: "string",
          emailCC: "string",
          emailBCC: "string",
          emailSubject: "string",
          emailBody: "string",
        },
      };

      console.log(data);
      approvalSubmit(data, plan.id, userData)
        .then((data) => {
          console.log(data);
          actions.setDefaultRevise();
          Router.push("/");
        })
        .catch((err) => console.log(err));
    }
  };

  const onSubmit = () => {
    if (router.query.type === "Plan") {
      const visDone = state.reviseReducer.visibility.filter((val) => {
        return val.file !== null && val.type !== null && val.brand !== null;
      });
      if (visDone.length >= 6) {
        // setLoadingSubmit(true);
        setVisNotDone(false);

        const userData = JSON.parse(localStorage.getItem("user"));

        const bodyProduct = state.reviseReducer.avability.map((val, index) => {
          if (val.prev != undefined) {
            return {
              id: val.prev.id ? val.prev.id : "",
              activityVisitPlanId: router.query.id,
              nomorDokumen: "",
              nomor: index,
              kodeProduk: val.productFocus.produkID,
              namaProduk: val.productFocus.namaProduk,
              stok: parseInt(val.stock),
              saranOrder: parseInt(val.saranOrder),
              jumlahOrder: parseInt(val.order),
              harga: parseInt(val.harga),
              total: parseInt(val.harga) * parseInt(val.order),
              keterangan: val.ket,
              updatedBy: userData.username,
            };
          } else {
            return {
              id: router.query.id,
              activityVisitPlanId: router.query.id,
              nomorDokumen: state.approvalReducer.focusApproval.noDokVisitPlan,
              nomor: index,
              kodeProduk: val.productFocus.produkID,
              namaProduk: val.productFocus.namaProduk,
              stok: parseInt(val.stock),
              saranOrder: parseInt(val.saranOrder),
              jumlahOrder: parseInt(val.order),
              createdBy: userData.username,
              updatedBy: userData.username,
              harga: parseInt(val.harga),
              total: parseInt(val.harga) * parseInt(val.order),
              keterangan: val.ket,
            };
          }
        });

        const bodyPosm = state.reviseReducer.visibility.map((val, index) => {
          if (val.type && val.file && val.brand) {
            if (val.prev != undefined) {
              return {
                id: val.prev.id ? val.prev.id : "",
                activityVisitPlanId: val.prev.activityVisitPlanId,
                nomorDokumen: val.prev.nomorDokumen,
                nomor: val.prev.nomor,
                tipe: val.type.program,
                namaFile: val.file.name,
                lokasiFile: val.prev.lokasiFile,
                isPopular: val.popular,
                brandId: val.brand.id,
                namaBrand: val.brand.namaBrand,
                updatedBy: userData.username,
              };
            } else {
              return {
                id: router.query.id,
                activityVisitPlanId: router.query.id,
                nomorDokumen: "",
                nomor: index,
                tipe: val.type.program,
                namaFile: val.file.name,
                createdBy: userData.username,
                updatedBy: userData.username,
                brandId: val.brand.id,
                namaBrand: val.brand.namaBrand,
                isPopular: val.popular,
              };
            }
          }
        });

        const files = state.reviseReducer.visibility.map((val, index) => {
          console.log(val);
          if (val.file && !val.file.id) {
            return val.file;
          }
        });

        console.log(bodyPosm, files);
        // console.log(bodyProduct);

        for (let i = 0; i < files.length; i++) {
          if (bodyPosm[i] && bodyPosm[i].id && bodyPosm[i].lokasiFile) {
            updateDataPosmPlan(bodyPosm[i].id, bodyPosm[i])
              .then((res2) => {
                console.log(res2);
              })
              .catch((err) => {
                console.log(err);
              });
            if (files[i] !== undefined) {
              insertFilePlan(bodyPosm[i].id, files[i])
                .then((res3) => {
                  console.log(res3);
                })
                .catch((err) => {
                  console.log(err);
                });
            }
          } else {
            console.log("new", bodyPosm[i]);
            if (bodyPosm[i] !== undefined) {
              submitVisitPlanDposm(bodyPosm[i], files[i])
                .then((res2) => {
                  console.log(res2);
                })
                .catch((err) => {
                  console.log(err);
                });
            }
          }

          if (i === files.length - 1) {
            getPlanById(router.query.id)
              .then((visit) => {
                console.log(visit);
                // onSubmitApproval(visit);
              })
              .catch((err) => console.log(err));
            updateDataProdukPlan(bodyProduct)
              .then((res) => {
                router.push("/");

                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });

            // getUnplanById(res.avp.id)
            //   .then((unplan) => {
            //     console.log("ini dataunplan", unplan);
            //     onSubmitApproval(unplan);
            //   })
            //   .catch((err) => {
            //     console.log(err);
            //   });
          }
        }
      } else {
        setVisNotDone(true);
      }
    } else if (router.query.type === "UnPlan") {
      const visDone = state.reviseReducer.visibility.filter((val) => {
        return val.file !== null && val.type !== null && val.brand !== null;
      });
      if (visDone.length >= 6) {
        // setLoadingSubmit(true);
        setVisNotDone(false);

        const userData = JSON.parse(localStorage.getItem("user"));

        const bodyProduct = state.reviseReducer.avability.map((val, index) => {
          if (val.prev != undefined) {
            return {
              id: val.prev.id ? val.prev.id : "",
              activityVisitUnPlanId: router.query.id,
              nomorDokumen: "",
              nomor: index,
              kodeProduk: val.productFocus.produkID,
              namaProduk: val.productFocus.namaProduk,
              stok: parseInt(val.stock),
              saranOrder: parseInt(val.saranOrder),
              jumlahOrder: parseInt(val.order),
              harga: parseInt(val.harga),
              total: parseInt(val.harga) * parseInt(val.order),
              keterangan: val.ket,
              updatedBy: userData.username,
            };
          } else {
            return {
              id: router.query.id,
              activityVisitUnPlanId: router.query.id,
              nomorDokumen: "",
              nomor: index,
              kodeProduk: val.productFocus.produkID,
              namaProduk: val.productFocus.namaProduk,
              stok: parseInt(val.stock),
              saranOrder: parseInt(val.saranOrder),
              jumlahOrder: parseInt(val.order),
              harga: parseInt(val.harga),
              totalHarga: parseInt(val.harga) * parseInt(val.order),
              keterangan: val.ket,
              updatedBy: userData.username,
              createdBy: userData.username,
            };
          }
        });

        const bodyPosm = state.reviseReducer.visibility.map((val, index) => {
          if (val.type && val.file && val.brand) {
            if (val.prev != undefined) {
              return {
                id: val.prev.id ? val.prev.id : "",
                activityVisitUnPlanId: val.prev.activityVisitUnPlanId,
                nomorDokumen: val.prev.nomorDokumen,
                nomor: val.prev.nomor,
                tipe: val.type.program,
                namaFile: val.file.name,
                lokasiFile: val.prev.lokasiFile,
                isPopular: val.popular,
                brandId: val.brand.id,
                namaBrand: val.brand.namaBrand,
                updatedBy: userData.username,
              };
            } else {
              return {
                activityVisitUnPlanId: router.query.id,
                nomor: index,
                tipe: val.type.program,
                namaFile: val.file.name,
                createdBy: userData.username,
                updatedBy: userData.username,
                brandId: val.brand.id,
                namaBrand: val.brand.namaBrand,
                isPopular: val.popular,
              };
            }
          }
        });

        const files = state.reviseReducer.visibility.map((val, index) => {
          console.log(val);
          if (val.file && !val.file.id) {
            return val.file;
          }
        });

        console.log(bodyPosm, files);

        for (let i = 0; i < files.length; i++) {
          if (bodyPosm[i] && bodyPosm[i].id) {
            updateDataPosmUnplan(bodyPosm[i].id, bodyPosm[i])
              .then((res2) => {
                console.log(res2);
              })
              .catch((err) => {
                console.log(err);
              });
            if (files[i] != undefined) {
              insertFileUnplan(bodyPosm[i].id, files[i])
                .then((res3) => {
                  console.log(res3);
                })
                .catch((err) => {
                  console.log(err);
                });
            }
          } else {
            submitVisitUnplanDposm(bodyPosm[i], files[i])
              .then((res2) => {
                console.log(res2);
              })
              .catch((err) => {
                console.log(err);
              });
          }
          if (i === 5) {
            getUnplanById(res.avp.id)
              .then((unplan) => {
                console.log("ini dataunplan", unplan);
                // onSubmitApproval(unplan);
              })
              .catch((err) => {
                console.log(err);
              });
            updateDataProdukUnplan(bodyProduct)
              .then((res) => {
                router.push("/");

                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
          }
        }
      } else {
        setVisNotDone(true);
      }
    } else if (router.query.type === "Spreading") {
      const visDone = state.reviseReducer.visibility.filter((val) => {
        return val.file !== null && val.type !== null && val.brand !== null;
      });
      if (visDone.length >= 2) {
        // setLoadingSubmit(true);
        setVisNotDone(false);

        const userData = JSON.parse(localStorage.getItem("user"));

        const bodyProduct = state.reviseReducer.avability.map((val, index) => {
          return {
            id: "",
            activitySpreadingId: router.query.id,
            nomorDokumen: "",
            nomor: 0,
            kodeProduk: "",
            namaProduk: val.namaProduk,
            stok: 0,
            saranOrder: 0,
            jumlahOrder: val.jumlah,
            harga: val.harga,
            totalHarga: val.totalHarga,
            keterangan: val.keterangan,
            updatedBy: userData.username,
          };
        });

        const bodyPosm = state.reviseReducer.visibility.map((val, index) => {
          if (val.type && val.file && val.brand) {
            if (val.prev != undefined) {
              return {
                id: val.prev.id ? val.prev.id : "",
                activitySpreadingId: val.prev.activitySpreadingId,
                nomorDokumen: val.prev.nomorDokumen,
                nomor: val.prev.nomor,
                tipe: val.type.program,
                namaFile: val.file.name,
                lokasiFile: val.prev.lokasiFile,
                isPopular: val.popular,
                brandId: val.brand.id,
                namaBrand: val.brand.namaBrand,
                updatedBy: userData.username,
              };
            } else {
              return {
                activitySpreadingId: router.query.id,
                nomor: index,
                tipe: val.type.program,
                namaFile: val.file.name,
                createdBy: userData.username,
                updatedBy: userData.username,
                brandId: val.brand.id,
                namaBrand: val.brand.namaBrand,
                isPopular: val.popular,
              };
            }
          }
        });

        const files = state.reviseReducer.visibility.map((val, index) => {
          console.log(val);
          if (val.file && !val.file.id) {
            return val.file;
          }
        });

        console.log(bodyPosm, files);

        for (let i = 0; i < files.length; i++) {
          if (bodyPosm[i] && bodyPosm[i].id) {
            updateDataPosmSpreading(bodyPosm[i].id, bodyPosm[i])
              .then((res2) => {
                console.log(res2);
              })
              .catch((err) => {
                console.log(err);
              });
            if (files[i] != undefined) {
              console.log(bodyPosm[i].id, files[i]);
              insertFileSpreading(bodyPosm[i].id, files[i])
                .then((res3) => {
                  console.log(res3);
                })
                .catch((err) => {
                  console.log(err);
                });
            }
          } else {
            submitVisitSpreadingDposm(bodyPosm[i], files[i])
              .then((res2) => {
                console.log(res2);
              })
              .catch((err) => {
                console.log(err);
              });
          }
          if (i === 5) {
            // getUnplanById(res.avp.id)
            //   .then((unplan) => {
            //     console.log("ini dataunplan", unplan);
            //     onSubmitApproval(unplan);
            //   })
            //   .catch((err) => {
            //     console.log(err);
            //   });
            router.push("/");
          }
        }
      } else {
        setVisNotDone(true);
      }
    }
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
            {modalConfirmApprove ? (
              <Modal>
                <div
                  style={{
                    maxHeight: "100%",
                    overflow: "auto",
                    overflowX: "hidden",
                    overflowY: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: "300px",
                      maxHeight: "100%",
                      margin: "100px auto",
                      textAlign: "center",
                      backgroundColor: "white",
                      borderRadius: "20px",
                      padding: "20px",
                    }}
                  >
                    <div style={{ margin: "30px auto" }}>
                      Approve this visit?
                    </div>
                    <Button
                      onClick={() => {
                        onApprove();
                      }}
                      text={"Yes"}
                    />
                    <div style={{ marginTop: "10px" }}>
                      <Button
                        onClick={() => {
                          setModalConfirmApprove(false);
                        }}
                        color={"red"}
                        text={"Cancel"}
                      />
                    </div>
                  </div>
                </div>
              </Modal>
            ) : null}
            <div className={styles.wrapper}>
              <Nav
                title={"Revise"}
                color={"white"}
                backAction={() => {
                  Router.push("/");
                }}
                action={"Submit"}
                onClick={() => {
                  onSubmit();
                }}
                disable={false}
              />
              <div className={styles.main}>
                {/* <div>
                  {plan.usernameSMR} - {router.query.type}
                </div> */}
                {renderDetail()}
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return render();
}
