import React, { useState, useEffect, useContext } from "react";
import styles from "../../../styles/pages/MasterWorkVisit.module.css";
import Nav from "../../../components/Nav";
import Card from "../../../components/Card";
import Dropdown from "../../../components/Dropdown";
import { Stores } from "../../../store";
import Router from "next/router";
import moment from "moment";
import {
  getIncentiveStatus,
  getIncentiveStatusMonitoring,
  getKpiInventiveMonthlyMonitortingSMR,
  getSmrByCabang,
} from "../../../helper";
import Spinner from "../../../components/Spinner";
import Modal from "../../../components/Modal";
import TabelLastDataIncentive from "../../../components/TableLastDataIncentive";

export default function Announcement() {
  const { state, dispatch, actions } = useContext(Stores);
  const [now, setNow] = useState(new Date());
  const [dateView, setDateView] = useState(new Date());
  const [dateViewUntil, setDateViewUntil] = useState(new Date());
  const [renderListNamaSmr, setRenderListNamaSmr] = useState(false);
  const [serachNamaSmr, setSearchNamaSmr] = useState("");
  const [inputYear, setInputYear] = useState("");
  const [inputMonth, setInputMonth] = useState("");
  const [smrFocus, setSmrFocus] = useState("");
  const [dataOrder, setDataOrder] = useState([]);
  const [searchListSmr, setSearchListSmr] = useState("");
  const [dataUsernameSMR, setDataUserNameSMR] = useState([]);
  const [listNamaSmr, setListNamaSmr] = useState([]);
  const [focusNamaSmr, setFocusNamaSmr] = useState({});
  const [loading, setLoading] = useState(true);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [loadingModal, setLoadingModal] = useState(false);
  const [pdfDownload, setPdfDownload] = useState(false);
  const [dataKpi, setDataKpi] = useState([]);
  const [incentiveStatus, setIncentiveStatus] = useState([]);

  useEffect(() => {
    const userRole = localStorage.getItem("role");
    if (userRole !== "PIMCAB") {
      Router.push("/");
    }
  }, [dispatch]);

  useEffect(() => {
    // fetch on stop typing
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData.kodeCabang) {
      const timeoutId = setTimeout(() => {
        getSmrByCabang(userData.kodeCabang, serachNamaSmr)
          .then((data) => {
            setListNamaSmr(data);
            setLoading(false);
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, 1000);
      return () => clearTimeout(timeoutId);
    } else {
      Router.push("/");
    }
  }, [dispatch, serachNamaSmr]);

  useEffect(() => {
    console.log(inputMonth, inputYear);
    if (inputMonth && inputYear && smrFocus) {
      console.log(inputMonth, inputYear, smrFocus);
      var date = inputYear + "-" + moment().month(inputMonth).format("MM");
      setLoadingModal(true);
      getIncentiveStatusMonitoring(smrFocus, date)
        .then((data) => {
          if (data.status !== 404) {
            if (data.status == "Approved") {
            } else {
              getDataTabelIncentiveSMR(smrFocus, inputMonth, inputYear);
            }
            console.log("status", data);
            setIncentiveStatus(data);
          } else {
            setIncentiveStatus([]);
            getDataTabelIncentiveSMR(smrFocus, inputMonth, inputYear);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [inputMonth, inputYear, smrFocus]);

  const getDataTabelIncentiveSMR = (username, month, year) => {
    return getKpiInventiveMonthlyMonitortingSMR(username, month, year)
      .then((dataKpi) => {
        setDataKpi(dataKpi);
        console.log(dataKpi);
        setLoading(false);
        setLoadingModal(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setLoadingModal(false);
      });
  };

  const onSearchNamaSmr = (search) => {
    setRenderListNamaSmr(true);
    setSearchNamaSmr(search);
  };

  const renderSearchNamaSmr = () => {
    const render = listNamaSmr.map((val, index) => {
      return (
        <div
          onClick={() => {
            setFocusNamaSmr(val);
            setSearchNamaSmr(val.namaSMR);
            setListNamaSmr([]);
            setSmrFocus(val.namaSMR);
            // console.log(val);
          }}
          key={index}
          style={{
            borderBottom: ".5px solid #f0f0f0",
            width: "350px",
          }}
        >
          {val.namaSMR}
        </div>
      );
    });
    return render;
  };

  const getMonthList = () => {
    var months = [
      "SELECT",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthList = months.filter((val, index) => {
      if (index - 1 < moment(now).format("M")) {
        return val;
      }
    });
    if (moment(inputYear).format("YYYY") == moment(now).format("YYYY")) {
      return monthList;
    } else {
      return months;
    }
  };

  const total = () => {
    var totalIncentive = 0;
    var targetSales = dataKpi.filter((val) => {
      return (
        val.kpi == "Target Sales in value" ||
        val.kpiIncentive == "Target Sales in value"
      );
    });
    dataKpi.map((val) => {
      if (targetSales[0] && targetSales[0].achievement <= 89.8) {
        totalIncentive == 0;
      } else {
        var splitGroup = val.grup.split(".");
        if (splitGroup[1] == 0) {
          totalIncentive += val.insentif;
        }
      }
    });
    return totalIncentive;
  };

  return (
    <>
      {loadingModal ? (
        <Modal>
          <Spinner />
        </Modal>
      ) : null}
      <div className={styles.wrapper}>
        <Nav title={"Monitoring KPI"} color={"white"} backHref={"/reward"} />
        <div className={styles.main}>
          <Card
            style={{
              marginTop: "22px",
              borderRadius: "6px",
              padding: "10px",
            }}
          >
            <div style={{ color: "#41867a", fontSize: "12px" }}>DATE</div>
            <div className={styles.filterdate_container}>
              {/* <input
                className={styles.input}
                type="date"
                value={moment(dateView).format("YYYY-MM-DD")}
                onChange={(e) => {
                  setDateView(moment(e.target.value));
                }}
                // min={moment().format("YYYY-MM-DD")}
              /> */}
              <Dropdown
                options={getMonthList()}
                onChange={(e) => {
                  setInputMonth(e.target.value);
                }}
              />
              <div style={{ alignSelf: "center" }}>-</div>
              <Dropdown
                options={[
                  "SELECT",
                  moment(now).format("YYYY"),
                  moment(now).subtract(1, "year").format("YYYY"),
                ]}
                onChange={(e) => {
                  setInputYear(e.target.value);
                }}
              />
            </div>
            <div
              style={{
                color: "#41867a",
                fontSize: "12px",
                marginTop: "10px",
              }}
            >
              SMR
            </div>
            <input
              onChange={(e) => {
                onSearchNamaSmr(e.target.value);
                setFocusNamaSmr({});
              }}
              value={serachNamaSmr}
              placeholder="Search"
              className={styles.input}
              onBlur={() => {
                setTimeout(() => {
                  setRenderListNamaSmr(false);
                }, 200);
              }}
              onFocus={(e) => onSearchNamaSmr(e.target.value)}
            />
            {renderListNamaSmr ? (
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
                {renderSearchNamaSmr()}
              </div>
            ) : null}
          </Card>
          <Card
            style={{
              borderRadius: "6px",
              marginTop: "20px",
              padding: "15px",
              color: "#5E5873",
              marginBottom: "20px",
            }}
          >
            <div style={{ fontWeight: "700" }}>KPI Incentive Monthly</div>
            <div
              style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#41867a",
              }}
            >
              {dataKpi ? (
                `${total().toLocaleString("id-ID")} IDR`
              ) : (
                <div>No data</div>
              )}
            </div>
            {dataKpi ? <TabelLastDataIncentive data={dataKpi} /> : <div />}
          </Card>
          <div style={{ marginBottom: "120px" }} />
        </div>
      </div>
    </>
  );
}
