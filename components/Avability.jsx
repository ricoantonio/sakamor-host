import React, { useState, useEffect, useContext } from "react";
import Router, { useRouter } from "next/router";
import styles from "../styles/pages/VisitPlanDetail.module.css";

import { Stores } from "../store";

import Nav from "./Nav";
import Spinner from "./Spinner";
import Button from "./Button";
import Card from "./Card";

import {
  getInvoiceData,
  getInvoiceDataUnplan,
  getPlanId,
  getProductByJenisChannel,
  getInvoiceDataSpreading,
  getHnaAvg,
  getHargaEceran,
} from "../helper";

export default function Avability({ type }) {
  const { state, dispatch, actions } = useContext(Stores);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [renderProductList, setRenderProductList] = useState(false);
  const [search, setSearch] = useState("");
  const [searchListProduct, setSearchListProduct] = useState("");
  const [product, setProduct] = useState([]);
  const [productFocus, setProductFocus] = useState({});
  const [avabilityList, setAvabilityList] = useState([]);
  const [order, setOrder] = useState("");
  const [pengiriman, setPengiriman] = useState("");
  const [avgSales, setAvgSales] = useState("");
  const [harga, setHarga] = useState("0");
  const [saranOrder, setSaranOrder] = useState("");
  const [stock, setStock] = useState("");
  const [minor, setMinor] = useState("");
  const [ket, setKet] = useState("");
  const [plan, setPlan] = useState([]);
  const [hargaEceran, setHargeEceran] = useState({});
  const [newNOO, setNewNOO] = useState(false);
  const [dummy, setDummy] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (type !== "HISTORY") {
      const notEmpty = avabilityList.length > 0;
      if (notEmpty > 0) {
        window.onbeforeunload = () => {
          return "Data will be lost if you leave the page, are you sure?";
        };
      }
    }
  });

  useEffect(() => {
    if (type === "PLAN") {
      if (state.visitPlanReducer.avability.length > 0) {
        setAvabilityList([...state.visitPlanReducer.avability]);
      }
    } else if (type === "UNPLAN") {
      if (state.visitUnplanReducer.avability.length > 0) {
        setAvabilityList([...state.visitUnplanReducer.avability]);
      }
    } else if (type === "SPREADING") {
      if (state.visitSpreadingReducer.avability.length > 0) {
        setAvabilityList([...state.visitSpreadingReducer.avability]);
      }
    } else if (type === "REVISE") {
      if (state.reviseReducer.avability.length > 0) {
        setAvabilityList([...state.reviseReducer.avability]);
      }
    }
  }, [dispatch]);

  useEffect(() => {}, []);

  useEffect(() => {
    if (router.query.new) {
      setNewNOO(true);
    } else {
      if (type === "UNPLAN") {
        if (
          state.visitUnplanReducer.jenisChannel.namaJenisChannel &&
          state.visitUnplanReducer.outlet.namaOutlet
        ) {
        } else {
          Router.push("/visit/unplan");
        }
      } else if (type === "SPREADING") {
        if (
          state.visitSpreadingReducer.jenisChannel.namaJenisChannel &&
          state.visitSpreadingReducer.outlet.namaOutlet
        ) {
        } else {
          Router.push("/visit/spreading");
        }
      }
    }
  }, []);

  useEffect(() => {
    if (productFocus.produkID) {
      if (type === "PLAN") {
        console.log(plan);

        getHnaAvg(productFocus.produkID, plan.idOutlet)
          .then((data) => {
            console.log(data);
            if (data.status === 404) {
              setAvgSales(0);
              setHarga(0);
            } else {
              setAvgSales(data.averageSales);
              setHarga(data.hna);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (type === "UNPLAN") {
        console.log(state.visitUnplanReducer.outlet);

        getHnaAvg(
          productFocus.produkID,
          state.visitUnplanReducer.outlet.outletID
        )
          .then((data) => {
            console.log(data);
            if (data.status === 404) {
              setAvgSales(0);
              setHarga(0);
            } else {
              setAvgSales(data.averageSales);
              setHarga(data.hna);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (type === "SPREADING") {
        console.log(state.visitSpreadingReducer.outlet);

        getHnaAvg(
          productFocus.produkID,
          state.visitSpreadingReducer.outlet.outletID
        )
          .then((data) => {
            console.log(data);
            if (data.status === 404) {
              setAvgSales(0);
              setHarga(0);
            } else {
              setAvgSales(data.averageSales);
              setHarga(data.hna);
            }
          })
          .catch((err) => {
            console.log(err);
          });
        getHargaEceran(productFocus.produkID)
          .then((data) => {
            setHargeEceran(data);
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (type === "REVISE") {
        if (router.query.type === "Plan") {
          getHnaAvg(
            productFocus.produkID,
            state.approvalReducer.focusApproval.idOutlet
          )
            .then((data) => {
              console.log(data);
              if (data.status === 404) {
                setAvgSales(0);
                setHarga(0);
              } else {
                setAvgSales(data.averageSales);
                setHarga(data.hna);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } else if (router.query.type === "UnPlan") {
          console.log(state.visitUnplanReducer.outlet);
          getHnaAvg(
            productFocus.produkID,
            state.approvalReducer.focusApproval.idOutlet
          )
            .then((data) => {
              console.log(data);
              if (data.status === 404) {
                setAvgSales(0);
                setHarga(0);
              } else {
                setAvgSales(data.averageSales);
                setHarga(data.hna);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } else if (router.query.type === "Spreading") {
          console.log(state.visitSpreadingReducer.outlet);
          getHnaAvg(
            productFocus.produkID,
            state.approvalReducer.focusApproval.idOutlet
          )
            .then((data) => {
              console.log(data);
              if (data.status === 404) {
                setAvgSales(0);
                setHarga(0);
              } else {
                setAvgSales(data.averageSales);
                setHarga(data.hna);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    }
  }, [productFocus]);

  useEffect(() => {
    if (productFocus.produkID) {
      if (stock) {
        if (type === "PLAN" || router.query.type === "Plan") {
          if (parseInt(avgSales) > parseInt(stock)) {
            setSaranOrder(parseInt(avgSales) - parseInt(stock));
            setKet("Understock");
          } else if (parseInt(avgSales) == parseInt(stock)) {
            setSaranOrder(0);
            setKet("Equal stock");
          } else {
            setSaranOrder(0);
            setKet("Overstock");
          }
        } else if (type === "UNPLAN" || router.query.type === "UnPlan") {
          if (parseInt(avgSales) > parseInt(stock)) {
            setSaranOrder(parseInt(avgSales) - parseInt(stock));
            setKet("Understock");
          } else if (parseInt(avgSales) == parseInt(stock)) {
            setSaranOrder(0);
            setKet("Equal stock");
          } else {
            setSaranOrder(0);
            setKet("Overstock");
          }
        } else if (type === "SPREADING" || router.query.type === "Spreading") {
          if (parseInt(avgSales) > parseInt(stock)) {
            setSaranOrder(parseInt(avgSales) - parseInt(stock));
            setKet("Understock");
          } else if (parseInt(avgSales) == parseInt(stock)) {
            setSaranOrder(0);
            setKet("Equal stock");
          } else {
            setSaranOrder(0);
            setKet("Overstock");
          }
        }
      }
    }
  }, [stock]);

  useEffect(() => {
    if (router.query.id) {
      if (type === "PLAN") {
        getPlanId(router.query.id)
          .then(({ samePlan, data }) => {
            // console.log(samePlan, data);
            if (samePlan.length == 0) {
              Router.push("/visit/plan");
            } else {
              setPlan(data);
              // console.log(data);
              if (!state.visitPlanReducer.checkIn) {
                actions.setPlanCheckIn(now);
              }
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (type === "UNPLAN") {
      } else if (type === "SPREADING") {
      } else if (type === "HISTORY_PLAN") {
        getInvoiceData(router.query.id)
          .then((data) => {
            setAvabilityList(data);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (type === "HISTORY_UNPLAN") {
        getInvoiceDataUnplan(router.query.id)
          .then((data) => {
            setAvabilityList(data);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (type === "HISTORY_SPREADING") {
        getInvoiceDataSpreading(router.query.id)
          .then((data) => {
            setAvabilityList(data);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (type === "REVISE") {
        setLoading(false);
      }
    }
  }, [router.query.id]);

  useEffect(() => {
    if (type === "PLAN") {
      getProductByJenisChannel(plan.idJenisChannel)
        .then((data) => {
          setProduct(data);
          // console.log(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (type === "UNPLAN") {
      getProductByJenisChannel(
        state.visitUnplanReducer.jenisChannel.jenisChannelID
      )
        .then((data) => {
          setProduct(data);
          // console.log(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (type === "SPREADING") {
      getProductByJenisChannel(
        state.visitSpreadingReducer.jenisChannel.jenisChannelID
      )
        .then((data) => {
          setProduct(data);
          // console.log(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (type === "REVISE") {
      getProductByJenisChannel(
        state.approvalReducer.focusApproval.idJenisChannel
      )
        .then((data) => {
          setProduct(data);
          // console.log(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [plan]);

  const onSearchProduct = (search) => {
    // setProductFocus(search);
    // getProductSearch(search)
    //   .then((data) => {
    //     setProduct(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });;''''
    // setProductSearch(search);
    setSearchListProduct(search);
  };

  const renderProductSearch = () => {
    const render = product.map((val, index) => {
      if (val.namaProduk.includes(searchListProduct.toUpperCase())) {
        return (
          <div
            onClick={() => {
              // setProduct([]);
              console.log(val);
              setProductFocus(val);
              setSearchListProduct(val.namaProduk);
              setRenderProductList(false);
            }}
            key={index}
            style={{ borderBottom: ".5px solid #f0f0f0", width: "356px" }}
          >
            {val.namaProduk}
          </div>
        );
      }
    });
    return render;
  };

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  function isNumberKey(evt) {
    console.log(evt);
    var charCode = evt.which ? evt.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;

    return true;
  }

  const renderModalAdd = () => {
    if (modal) {
      if (type === "SPREADING") {
        return (
          <>
            <div
              className={styles.modal_avability}
              onClick={() => {
                setModal(false);
              }}
            ></div>
            <div className={styles.wrapper}>
              <div className={styles.avability_modal_container_spreading}>
                <div className={styles.add_title}>Add Product</div>
                <div className={styles.avability_modal_subtitle}>Product</div>
                <input
                  onChange={(e) => {
                    onSearchProduct(e.target.value);
                  }}
                  placeholder="Search"
                  value={searchListProduct}
                  className={styles.input_order_search}
                  // onClick={() => {
                  //   setProduct([]);
                  // }}
                  onFocus={() => setRenderProductList(true)}
                />
                {renderProductList ? (
                  <div
                    style={{
                      position: "absolute",
                      maxHeight: "180px",
                      backgroundColor: "white",
                      overflowY: "scroll",
                      maxWidth: "400px",
                      padding: "0 4px",
                      zIndex: 999999,
                    }}
                  >
                    {renderProductSearch()}
                  </div>
                ) : null}

                {/* <div className={styles.avability_modal_subtitle}>Keterangan</div> */}
                {/* <input
                  onChange={(e) => {
                    setKet(e.target.value);
                  }}
                  placeholder="Ket."
                  type="text"
                  className={styles.input_order}
                  value={ket}
                  
                /> */}
                <div className={styles.avability_modal_subtitle}>
                  Stock (pcs)
                </div>
                <input
                  onChange={(e) => {
                    var value = e.target.value.split(".").join("");
                    setStock(value);
                  }}
                  placeholder="0"
                  type="number"
                  min={0}
                  className={styles.input_order}
                  value={parseInt(stock).toLocaleString("id-ID")}
                />
                <div className={styles.avg_sales_container}>
                  <div style={{ paddingRight: "5px" }}>
                    <div className={styles.avability_modal_subtitle}>
                      Avg Sales (pcs)
                    </div>
                    <input
                      onChange={(e) => {
                        var value = e.target.value.split(".").join("");
                        setAvgSales(value);
                      }}
                      placeholder="0"
                      type="number"
                      min={0}
                      className={styles.input_order}
                      value={parseInt(avgSales).toLocaleString("id-ID")}
                      disabled={true}
                    />
                  </div>
                  <div style={{ paddingLeft: "5px" }}>
                    <div className={styles.avability_modal_subtitle}>
                      Saran Order (pcs)
                    </div>
                    <input
                      onChange={(e) => {
                        var value = e.target.value.split(".").join("");
                        setSaranOrder(value);
                      }}
                      // placeholder="0"
                      type="number"
                      min={0}
                      className={styles.input_order}
                      value={parseInt(saranOrder).toLocaleString("id-ID")}
                      disabled={true}
                    />
                  </div>
                </div>
                <div className={styles.avability_modal_subtitle}>
                  Order (pcs)
                </div>
                <input
                  onChange={(e) => {
                    var value = e.target.value.split(".").join("");
                    setOrder(value);
                  }}
                  placeholder="0"
                  type="number"
                  min={0}
                  className={styles.input_order}
                  value={parseInt(order).toLocaleString("id-ID")}
                />
                <div className={styles.avability_modal_subtitle}>
                  Keterangan
                </div>
                {/* <input
                  onChange={(e) => {
                    setKet(e.target.value);
                  }}
                  placeholder="Ket."
                  type="text"
                  className={styles.input_order}
                  value={ket}
                /> */}
                <div style={{ height: "24px" }}>{ket}</div>
                <div className={styles.stock_order_container}>
                  <div style={{ paddingRight: "10px" }}>
                    <div className={styles.avability_modal_subtitle}>
                      Satuan
                    </div>
                    <input
                      type="text"
                      className={styles.input_order}
                      value={
                        hargaEceran && hargaEceran.satuan
                          ? hargaEceran.satuan
                          : null
                      }
                      disabled={true}
                    />
                  </div>
                  <div style={{}}>
                    <div className={styles.avability_modal_subtitle}>HNA</div>
                    <input
                      placeholder="0"
                      type="number"
                      className={styles.input_order}
                      value={
                        hargaEceran && hargaEceran.hna
                          ? hargaEceran.hna.toLocaleString("id-ID")
                          : null
                      }
                      disabled={true}
                    />
                  </div>
                  <div style={{ paddingLeft: "10px" }}>
                    <div className={styles.avability_modal_subtitle}>
                      Harga Eceran
                    </div>
                    <input
                      placeholder="0"
                      type="number"
                      className={styles.input_order}
                      value={
                        hargaEceran && hargaEceran.hargaEceran
                          ? hargaEceran.hargaEceran.toLocaleString("id-ID")
                          : null
                      }
                      disabled={true}
                    />
                  </div>
                </div>
                <div className={styles.avability_modal_subtitle}>Total</div>
                <input
                  placeholder="0"
                  type="text"
                  className={styles.input_order}
                  value={
                    order && hargaEceran && hargaEceran.hargaEceran
                      ? (order * hargaEceran.hargaEceran).toLocaleString(
                          "id-ID"
                        )
                      : 0
                  }
                  disabled={true}
                />
                <div style={{ marginTop: "20px" }}>
                  <Button
                    text={"Add"}
                    onClick={() => {
                      var reg = new RegExp(
                        /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/g
                      );
                      if (
                        productFocus.namaProduk
                        // order.match(reg)
                        // order != 0
                      ) {
                        if (avabilityList.length > 0) {
                          var sameDataIndex = avabilityList.findIndex(
                            (val) =>
                              val.productFocus.namaProduk ===
                              productFocus.namaProduk
                          );
                          if (sameDataIndex + 1) {
                            avabilityList[sameDataIndex].stock = stock
                              ? stock
                              : 0;
                            avabilityList[sameDataIndex].saranOrder = saranOrder
                              ? saranOrder
                              : 0;
                            avabilityList[sameDataIndex].order = order
                              ? order
                              : 0;
                            avabilityList[sameDataIndex].satuan =
                              hargaEceran.satuan ? hargaEceran.satuan : "";
                            avabilityList[sameDataIndex].hna = hargaEceran.hna
                              ? hargaEceran.hna
                              : 0;
                            avabilityList[sameDataIndex].hargaEceran =
                              hargaEceran.hargaEceran
                                ? hargaEceran.hargaEceran
                                : 0;
                            avabilityList[sameDataIndex].totalHargaEceran =
                              hargaEceran.hargaEceran && order
                                ? hargaEceran.hargaEceran * order
                                : 0;
                            console.log(avabilityList);
                            setModal(false);
                            setStock("");
                            setSaranOrder("");
                            setOrder("");
                            setKet("");
                            setHarga("0");
                          } else {
                            avabilityList.push({
                              productFocus,
                              stock: stock ? stock : 0,
                              saranOrder: saranOrder ? saranOrder : 0,
                              order: order ? order : 0,
                              ket,
                              pengiriman,
                              minor,
                              harga: harga ? harga : 0,
                              satuan: hargaEceran.satuan
                                ? hargaEceran.satuan
                                : "",
                              hna: hargaEceran.hna ? hargaEceran.hna : 0,
                              hargaEceran: hargaEceran.hargaEceran,
                              totalHargaEceran:
                                hargaEceran.hargaEceran && order
                                  ? hargaEceran.hargaEceran * order
                                  : 0,
                            });
                            console.log(avabilityList);
                            setModal(false);
                            setStock("");
                            setSaranOrder("");
                            setOrder("");
                            setKet("");
                            setHarga("");
                            setHargeEceran({});
                          }
                        } else {
                          avabilityList.push({
                            productFocus,
                            stock: stock ? stock : 0,
                            saranOrder: saranOrder ? saranOrder : 0,
                            order: order ? order : 0,
                            ket,
                            pengiriman,
                            minor,
                            harga: harga ? harga : 0,
                            satuan: hargaEceran.satuan
                              ? hargaEceran.satuan
                              : "",
                            hna: hargaEceran.hna ? hargaEceran.hna : 0,
                            hargaEceran: hargaEceran.hargaEceran,
                            totalHargaEceran:
                              hargaEceran.hargaEceran && order
                                ? hargaEceran.hargaEceran * order
                                : 0,
                          });
                          console.log(avabilityList);
                          setModal(false);
                          setStock("");
                          setSaranOrder("");
                          setOrder("");
                          setKet("");
                          setHarga("");
                          setHargeEceran({});
                        }
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </>
        );
      } else {
        return (
          <>
            <div
              className={styles.modal_avability}
              onClick={() => {
                setModal(false);
              }}
            ></div>
            <div className={styles.wrapper}>
              <div className={styles.avability_modal_container}>
                <div className={styles.add_title}>Add Product</div>
                <div className={styles.avability_modal_subtitle}>Product</div>
                <input
                  onChange={(e) => {
                    onSearchProduct(e.target.value);
                  }}
                  placeholder="Search"
                  value={searchListProduct}
                  className={styles.input_order_search}
                  // onClick={() => {
                  //   setProduct([]);
                  // }}
                  onFocus={() => setRenderProductList(true)}
                />
                {renderProductList ? (
                  <div
                    style={{
                      position: "absolute",
                      maxHeight: "180px",
                      backgroundColor: "white",
                      overflowY: "scroll",
                      maxWidth: "400px",
                      padding: "0 4px",
                      zIndex: 999999,
                    }}
                  >
                    {renderProductSearch()}
                  </div>
                ) : null}
                {/* <div className={styles.stock_order_container}>
                  <div style={{ paddingRight: "10px" }}>
                    <div className={styles.avability_modal_subtitle}>
                      Stock (pcs)
                    </div>
                    <input
                      onChange={(e) => {
                        setStock(e.target.value);
                      }}
                      placeholder="0"
                      type="number"
                      min={0}
                      className={styles.input_order}
                      value={stock}
                    />
                  </div>
                  <div style={{}}>
                    <div className={styles.avability_modal_subtitle}>
                      Pengiriman (hari)
                    </div>
                    <input
                      onChange={(e) => {
                        setPengiriman(e.target.value);
                      }}
                      placeholder="0"
                      type="number"
                      min={0}
                      className={styles.input_order}
                      value={pengiriman}
                    />
                  </div>
                  <div style={{ paddingLeft: "10px" }}>
                    <div className={styles.avability_modal_subtitle}>Minor</div>
                    <input
                      onChange={(e) => {
                        setMinor(e.target.value);
                      }}
                      placeholder="0"
                      type="number"
                      min={0}
                      className={styles.input_order}
                      value={minor}
                    />
                  </div>
                </div> */}
                {/* <div className={styles.avability_modal_subtitle}>Keterangan</div> */}
                {/* <input
                  onChange={(e) => {
                    setKet(e.target.value);
                  }}
                  placeholder="Ket."
                  type="text"
                  className={styles.input_order}
                  value={ket}
                  
                /> */}
                <div className={styles.avability_modal_subtitle}>
                  Stock (pcs)
                </div>
                <input
                  onChange={(e) => {
                    var value = e.target.value.split(".").join("");
                    setStock(value);
                  }}
                  placeholder="0"
                  type="number"
                  min={0}
                  className={styles.input_order}
                  value={parseInt(stock).toLocaleString("id-ID")}
                />
                <div className={styles.avg_sales_container}>
                  <div style={{ paddingRight: "5px" }}>
                    <div className={styles.avability_modal_subtitle}>
                      Avg Sales (pcs)
                    </div>
                    <input
                      onChange={(e) => {
                        var value = e.target.value.split(".").join("");
                        setAvgSales(value);
                      }}
                      placeholder="0"
                      type="number"
                      min={0}
                      className={styles.input_order}
                      value={parseInt(avgSales).toLocaleString("id-ID")}
                      disabled={true}
                    />
                  </div>
                  <div style={{ paddingLeft: "5px" }}>
                    <div className={styles.avability_modal_subtitle}>
                      Saran Order (pcs)
                    </div>
                    <input
                      onChange={(e) => {
                        var value = e.target.value.split(".").join("");
                        setSaranOrder(value);
                      }}
                      // placeholder="0"
                      type="number"
                      min={0}
                      className={styles.input_order}
                      value={parseInt(saranOrder).toLocaleString("id-ID")}
                      disabled={true}
                    />
                  </div>
                </div>
                <div className={styles.avability_modal_subtitle}>
                  Order (pcs)
                </div>
                <input
                  onChange={(e) => {
                    var value = e.target.value.split(".").join("");
                    setOrder(value);
                  }}
                  placeholder="0"
                  type="number"
                  min={0}
                  className={styles.input_order}
                  value={parseInt(order).toLocaleString("id-ID")}
                />
                <div className={styles.avability_modal_subtitle}>
                  Keterangan
                </div>
                {/* <input
                  onChange={(e) => {
                    setKet(e.target.value);
                  }}
                  placeholder="Ket."
                  type="text"
                  className={styles.input_order}
                  value={ket}
                /> */}
                <div style={{ height: "24px" }}>{ket}</div>
                <div style={{ marginTop: "20px" }}>
                  <Button
                    text={"Add"}
                    onClick={() => {
                      var reg = new RegExp(
                        /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/g
                      );
                      if (
                        productFocus.namaProduk
                        // order.match(reg)
                        // order != 0
                      ) {
                        if (avabilityList.length > 0) {
                          var sameDataIndex = avabilityList.findIndex(
                            (val) =>
                              val.productFocus.namaProduk ===
                              productFocus.namaProduk
                          );
                          if (sameDataIndex + 1) {
                            // avabilityList.splice(sameDataIndex, 1);
                            // avabilityList.push({
                            //   productFocus,
                            //   stock: stock ? stock : 0,
                            //   saranOrder: saranOrder ? saranOrder : 0,
                            //   order: order ? order : 0,
                            //   ket,
                            //   pengiriman,
                            //   minor,
                            //   harga,
                            // });
                            avabilityList[sameDataIndex].stock = stock
                              ? stock
                              : 0;
                            avabilityList[sameDataIndex].saranOrder = saranOrder
                              ? saranOrder
                              : 0;
                            avabilityList[sameDataIndex].order = order
                              ? order
                              : 0;
                            setModal(false);
                            setStock("");
                            setSaranOrder("");
                            setOrder("");
                            setKet("");
                            setHarga("");
                          } else {
                            avabilityList.push({
                              productFocus,
                              stock: stock ? stock : 0,
                              saranOrder: saranOrder ? saranOrder : 0,
                              order: order ? order : 0,
                              ket,
                              pengiriman,
                              minor,
                              harga,
                            });
                            setModal(false);
                            setStock("");
                            setSaranOrder("");
                            setOrder("");
                            setKet("");
                            setHarga("");
                          }
                        } else {
                          avabilityList.push({
                            productFocus,
                            stock: stock ? stock : 0,
                            saranOrder: saranOrder ? saranOrder : 0,
                            order: order ? order : 0,
                            ket,
                            pengiriman,
                            minor,
                            harga,
                          });
                          setModal(false);
                          setStock("");
                          setSaranOrder("");
                          setOrder("");
                          setKet("");
                          setHarga("");
                        }
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </>
        );
      }
    }
  };

  const renderAvabilityList = () => {
    if (type.includes("HISTORY")) {
      // console.log(avabilityList);
      avabilityList.sort((a, b) => a.namaProduk.localeCompare(b.namaProduk));
      const filterData = avabilityList.filter((val) => {
        return val.namaProduk.toLowerCase().includes(search.toLowerCase());
      });
      const render = filterData.map((val, index) => {
        return (
          <Card
            style={{ borderRadius: "5px", padding: "30px", marginTop: "14px" }}
            key={index}
          >
            <div>
              <div className={styles.avabilitylist_title}>{val.namaProduk}</div>
              {/* <div className={styles.avabilitylist_stock_container}>
                <div
                  className={styles.avabilitylist_container}
                  style={{ marginRight: "5px" }}
                >
                  <div className={styles.avabilitylist_subtitle}>Stock</div>
                  <div div className={styles.avabilitylist_value}>
                    {val.stock} pcs
                  </div>
                </div>
                <div
                  className={styles.avabilitylist_container}
                  style={{ marginLeft: "5px" }}
                >
                  <div className={styles.avabilitylist_subtitle}>
                    Saran Order
                  </div>
                  <div div className={styles.avabilitylist_value}>
                    {val.saranOrder} pcs
                  </div>
                </div>
              </div> */}
              <div className={styles.avabilitylist_container}>
                <div className={styles.avabilitylist_subtitle}>Order</div>
                <div className={styles.avabilitylist_value}>
                  {parseInt(val.jumlah).toLocaleString("id-ID")} pcs
                </div>
              </div>
              {val.keterangan ? (
                <div className={styles.avabilitylist_container}>
                  <div className={styles.avabilitylist_subtitle}>
                    Keterangan
                  </div>
                  <div className={styles.avabilitylist_value}>
                    {val.keterangan}
                  </div>
                </div>
              ) : null}
            </div>
          </Card>
        );
      });
      if (filterData.length == 0) {
        return (
          <div
            style={{
              textAlign: "center",
              marginTop: "150px",
              color: "#d0d0d0",
            }}
          >
            No Item
          </div>
        );
      } else {
        return render;
      }
    } else {
      avabilityList.sort((a, b) =>
        a.productFocus.namaProduk.localeCompare(b.productFocus.namaProduk)
      );
      const filterData = avabilityList.filter((val) => {
        return val.productFocus.namaProduk
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      const render = filterData.map((val, index) => {
        return (
          <Card
            style={{ borderRadius: "5px", padding: "30px", marginTop: "14px" }}
            key={index}
          >
            <div
              onClick={() => {
                console.log(val);
                setModal(true);
                setProductFocus(val.productFocus);
                setStock(val.stock);
                setSaranOrder(val.saranOrder);
                setSearchListProduct(val.productFocus.namaProduk);
                setOrder(val.order);
                setKet(val.ket);
                setHarga(val.harga);
              }}
            >
              <div className={styles.avabilitylist_title}>
                {val.productFocus.namaProduk}
              </div>
              <div className={styles.avabilitylist_stock_container}>
                <div
                  className={styles.avabilitylist_container}
                  style={{ marginRight: "5px" }}
                >
                  <div className={styles.avabilitylist_subtitle}>Stock</div>
                  <div div className={styles.avabilitylist_value}>
                    {parseInt(val.stock).toLocaleString("id-ID")} pcs
                  </div>
                </div>
                <div
                  className={styles.avabilitylist_container}
                  style={{ marginLeft: "5px" }}
                >
                  <div className={styles.avabilitylist_subtitle}>
                    Saran Order
                  </div>
                  <div div className={styles.avabilitylist_value}>
                    {parseInt(val.saranOrder).toLocaleString("id-ID")} pcs
                  </div>
                </div>
              </div>
              <div className={styles.avabilitylist_container}>
                <div className={styles.avabilitylist_subtitle}>Order</div>
                <div className={styles.avabilitylist_value}>
                  {parseInt(val.order).toLocaleString("id-ID")} pcs
                </div>
              </div>
              {val.ket ? (
                <div className={styles.avabilitylist_container}>
                  <div className={styles.avabilitylist_subtitle}>
                    Keterangan
                  </div>
                  <div className={styles.avabilitylist_value}>{val.ket}</div>
                </div>
              ) : null}
            </div>
          </Card>
        );
      });
      if (filterData.length == 0) {
        return (
          <div
            style={{
              textAlign: "center",
              marginTop: "150px",
              color: "#d0d0d0",
            }}
          >
            No Item
          </div>
        );
      } else {
        return render;
      }
    }
  };

  const onSave = () => {
    console.log(avabilityList);
    if (newNOO) {
      actions.setSpreadingAvability(avabilityList);
      Router.push(`/visit/spreading/submit?new=true`);
    } else {
      if (type === "PLAN") {
        actions.setPlanAvability(avabilityList);
        Router.push(`/visit/plan/${router.query.id}`);
      } else if (type === "UNPLAN") {
        actions.setUnplanAvability(avabilityList);
        Router.push(`/visit/unplan/submit`);
      } else if (type === "SPREADING") {
        actions.setSpreadingAvability(avabilityList);
        Router.push(`/visit/spreading/submit`);
      } else if (type === "REVISE") {
        actions.setReviseAvability(avabilityList);
        Router.push(`/revise/${router.query.type}/${router.query.id}`);
      }
    }
  };

  const render = () => {
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <>
          {renderModalAdd()}
          <div className={styles.container}>
            <div className={styles.wrapper}>
              {type.includes("HISTORY") ? (
                <Nav
                  title={"Availability"}
                  color={"white"}
                  backAction={() => {
                    Router.back();
                  }}
                />
              ) : (
                <Nav
                  title={"Availability"}
                  color={"white"}
                  action={"Save"}
                  onClick={() => {
                    onSave();
                  }}
                  backAction={() => {
                    Router.back();
                  }}
                  disable={false}
                />
              )}
              <div className={styles.main}>
                <div className={styles.search_fixed}>
                  <div
                    style={{
                      margin: "10px 0 0 0",
                      display: "grid",
                      gridTemplateColumns: "88% 12%",
                    }}
                  >
                    <div>
                      <div className={styles.progress_bar}></div>
                      <div
                        className={styles.progress_bar_now}
                        style={{
                          width:
                            type === "SPREADING" || type === "HISTORY_SPREADING"
                              ? `${(avabilityList.length / 1) * 100}%`
                              : `${(avabilityList.length / 25) * 100}%`,
                        }}
                      ></div>
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        textAlign: "center",
                        marginTop: "-6px",
                      }}
                    >
                      {type === "SPREADING" || type === "HISTORY_SPREADING"
                        ? `${avabilityList.length}/ 1`
                        : `${avabilityList.length} / 25`}
                    </div>
                  </div>
                  <input
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                    placeholder="Search"
                    className={styles.input}
                    style={{ marginTop: "0" }}
                  />
                </div>
                <div style={{ paddingTop: "60px" }}>
                  {renderAvabilityList()}
                  <div style={{ marginBottom: "100px" }} />
                </div>
              </div>
              {type.includes("HISTORY") ? null : (
                <div className={styles.avability_bot_container}>
                  <Button
                    text={"Add"}
                    onClick={() => {
                      setModal(true);
                      // setProduct([]);
                      setProductFocus("");
                      setAvgSales("");
                      setStock("");
                      setPengiriman("");
                      setOrder("");
                      setSaranOrder("");
                      setKet("");
                      setMinor("");
                      setHarga("");
                      setSearchListProduct("");
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </>
      );
    }
  };
  return render();
}
