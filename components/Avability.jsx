import React, { useState, useEffect, useContext } from "react";
import Router, { useRouter } from "next/router";
import styles from "../styles/pages/VisitPlanDetail.module.css";

import { Stores } from "../store";

import Nav from "./Nav";
import Spinner from "./Spinner";
import Button from "./Button";
import Card from "./Card";

import { getPlanId, getProductSearch } from "../helper";

export default function Avability({ type }) {
  const { state, dispatch, actions } = useContext(Stores);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState([]);
  const [productFocus, setProductFocus] = useState({});
  const [avabilityList, setAvabilityList] = useState([]);
  const [order, setOrder] = useState("");
  const [saranOrder, setSaranOrder] = useState("");
  const [stock, setStock] = useState("");
  const [plan, setPlan] = useState([]);
  const router = useRouter();
  var now = new Date();
  var date = now.getDate();
  var month = now.getMonth() + 1;
  var year = now.getFullYear();

  useEffect(() => {
    const notEmpty = avabilityList.length > 0;
    if (notEmpty > 0) {
      window.onbeforeunload = () => {
        return "Data will be lost if you leave the page, are you sure?";
      };
    }
  });

  useEffect(() => {
    if (type === "PLAN") {
      if (state.visitPlanReducer.avability.length > 0) {
        setAvabilityList([...state.visitPlanReducer.avability]);
      }
    } else if (type === "UNPLAN") {
    } else if (type === "SPREADING") {
    }
  }, [dispatch]);

  useEffect(() => {
    if (type === "PLAN") {
      if (router.query.id) {
        getPlanId(router.query.id)
          .then(({ samePlan, data }) => {
            // console.log(samePlan, data);
            if (samePlan.length == 0) {
              Router.push("/visit/plan");
            } else {
              setPlan(data);
              setLoading(false);
              if (!state.visitPlanReducer.checkIn) {
                actions.setPlanCheckIn(now);
              }
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else if (type === "UNPLAN") {
    } else if (type === "SPREADING") {
    }
  }, [router.query.id]);

  const onSearchProduct = (search) => {
    setProductFocus(search);
    getProductSearch(search)
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderProductSearch = () => {
    const render = product.map((val, index) => {
      return (
        <div
          onClick={() => {
            setProduct([]);
            setProductFocus(val);
          }}
          key={index}
          style={{ borderBottom: ".5px solid #f0f0f0", width: "356px" }}
        >
          {val.namaProduk}
        </div>
      );
    });
    return render;
  };

  const renderModalAdd = () => {
    if (modal) {
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
                value={productFocus.namaProduk}
                className={styles.input_order_search}
                onClick={() => {
                  setProduct([]);
                }}
              />
              {product ? (
                <div
                  style={{
                    position: "absolute",
                    maxHeight: "180px",
                    backgroundColor: "white",
                    overflowY: "scroll",
                    maxWidth: "400px",
                    padding: "0 4px",
                  }}
                >
                  {renderProductSearch()}
                </div>
              ) : null}
              <div className={styles.stock_order_container}>
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
                    className={styles.input_order}
                    value={stock}
                  />
                </div>
                <div style={{ paddingLeft: "10px" }}>
                  <div className={styles.avability_modal_subtitle}>
                    Saran Order (pcs)
                  </div>
                  <input
                    onChange={(e) => {
                      setSaranOrder(e.target.value);
                    }}
                    placeholder="0"
                    type="number"
                    className={styles.input_order}
                    value={saranOrder}
                  />
                </div>
              </div>
              <div className={styles.avability_modal_subtitle}>Order (pcs)</div>
              <input
                onChange={(e) => {
                  setOrder(e.target.value);
                }}
                placeholder="0"
                type="number"
                className={styles.input_order}
                value={order}
              />
              <div style={{ marginTop: "20px" }}>
                <Button
                  text={"Add"}
                  onClick={() => {
                    if (
                      productFocus.namaProduk &&
                      stock.match("^[1-9][0-9]*$") &&
                      saranOrder.match("^[1-9][0-9]*$") &&
                      order.match("^[1-9][0-9]*$")
                    ) {
                      if (avabilityList.length > 0) {
                        var sameDataIndex = avabilityList.findIndex(
                          (val) =>
                            val.productFocus.namaProduk ===
                            productFocus.namaProduk
                        );
                        if (sameDataIndex + 1) {
                          avabilityList.splice(sameDataIndex, 1);
                          avabilityList.push({
                            productFocus,
                            stock,
                            saranOrder,
                            order,
                          });
                          setModal(false);
                          setStock("");
                          setSaranOrder("");
                          setOrder("");
                        } else {
                          avabilityList.push({
                            productFocus,
                            stock,
                            saranOrder,
                            order,
                          });
                          setModal(false);
                          setStock("");
                          setSaranOrder("");
                          setOrder("");
                        }
                      } else {
                        avabilityList.push({
                          productFocus,
                          stock,
                          saranOrder,
                          order,
                        });
                        setModal(false);
                        setStock("");
                        setSaranOrder("");
                        setOrder("");
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
  };
  const renderAvabilityList = () => {
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
              setProductFocus(val.productFocus);
              setStock(val.stock);
              setSaranOrder(val.saranOrder);
              setOrder(val.order);
              setModal(true);
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
                  {val.stock} pcs
                </div>
              </div>
              <div
                className={styles.avabilitylist_container}
                style={{ marginLeft: "5px" }}
              >
                <div className={styles.avabilitylist_subtitle}>Saran Order</div>
                <div div className={styles.avabilitylist_value}>
                  {val.saranOrder} pcs
                </div>
              </div>
            </div>
            <div className={styles.avabilitylist_container}>
              <div className={styles.avabilitylist_subtitle}>Order</div>
              <div className={styles.avabilitylist_value}>{val.order} pcs</div>
            </div>
          </div>
        </Card>
      );
    });
    if (filterData.length == 0) {
      return (
        <div
          style={{ textAlign: "center", marginTop: "150px", color: "#d0d0d0" }}
        >
          No Item
        </div>
      );
    } else {
      return render;
    }
  };
  const onSave = () => {
    if (type === "PLAN") {
      actions.setPlanAvability(avabilityList);
      // console.log(avabilityList);
      Router.push(`/visit/plan/${router.query.id}`);
    } else if (type === "UNPLAN") {
      Router.push(`/visit/unplan/submit`);
    } else if (type === "SPREADING") {
      Router.push(`/visit/spreading/submit`);
    }
  };
  const render = () => {
    return (
      <>
        {renderModalAdd()}
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <Nav
              title={"Avability"}
              color={"white"}
              action={"Save"}
              onClick={() => {
                onSave();
              }}
              backAction={() => {
                Router.back();
              }}
            />
            <div className={styles.main}>
              <div className={styles.search_fixed}>
                <div style={{ margin: "10px 0 0 0" }}>
                  <div className={styles.progress_bar}></div>
                  <div
                    className={styles.progress_bar_now}
                    style={{
                      width: `${(avabilityList.length / 25) * 100}%`,
                    }}
                  ></div>
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
            <div className={styles.avability_bot_container}>
              <Button
                text={"Add"}
                onClick={() => {
                  setModal(true);
                  setProduct([]);
                  setProductFocus("");
                }}
              />
            </div>
          </div>
        </div>
      </>
    );
  };
  return render();
}
