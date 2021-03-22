import React, { useState, useEffect, useContext } from "react";
import styles from "../../styles/pages/CurrentIncentive.module.css";
import Nav from "../../components/Nav";
import { Stores } from "../../store";

// import {
//   XYPlot,
//   XAxis,
//   YAxis,
//   ChartLabel,
//   HorizontalGridLines,
//   VerticalGridLines,
//   LineSeries,
//   LineSeriesCanvas,
// } from "react-vis";

export default function CurrentIncentive() {
  const { state, dispatch, actions } = useContext(Stores);

  const [monthGroup, setMonthGroup] = useState(0);
  const [monthFocus, setMonthFocus] = useState("Januari");
  const [loading, setLoading] = useState(true);
  // const [incentive, setincentive] = useState([]);
  // const Line = LineSeries;

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const userMenu = JSON.parse(localStorage.getItem("menu"));
    if (userData) {
      actions.userLogin(userData);
      actions.setMenu(userMenu);
    }
  }, [dispatch]);

  const incentive = [
    {
      name: "sales",
      achive: null,
      gradasi: null,
      intensif: 921250,
    },
    {
      name: "target_sales",
      achive: 90,
      gradasi: 50,
      intensif: 343750,
    },
    {
      name: "target_sales_all",
      achive: 110,
      gradasi: 110,
      intensif: 302500,
    },
    {
      name: "target_sales_product",
      achive: 70,
      gradasi: 0,
      intensif: null,
    },
    {
      name: "target_growth",
      achive: 100,
      gradasi: 100,
      intensif: 275000,
    },
    {
      name: "operation_excelent",
      achive: null,
      gradasi: null,
      intensif: 550000,
    },
    {
      name: "target_achive",
      achive: 100,
      gradasi: 100,
      intensif: 275000,
    },
    {
      name: "target_call",
      achive: 100,
      gradasi: 100,
      intensif: 275000,
    },
    {
      name: "store_leadership",
      achive: null,
      gradasi: null,
      intensif: 550000,
    },
    {
      name: "target_store_visibility",
      achive: 100,
      gradasi: 100,
      intensif: 412500,
    },
    {
      name: "target_aktivitas",
      achive: 90,
      gradasi: 50,
      intensif: 137500,
    },
    {
      name: "total",
      achive: null,
      gradasi: null,
      intensif: 2021250,
    },
  ];

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:2019/getincentive", {
  //       params: {
  //         month: monthFocus.toLowerCase(),
  //       },
  //     })
  //     .then((res) => {
  //       setincentive(res.data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });

  const month = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "July",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const renderMonthGroup = () => {
    var render = [];
    for (let i = monthGroup * 3; i < monthGroup * 3 + 3; i++) {
      render.push(
        <div
          className={
            monthFocus === month[i]
              ? styles.active_month
              : styles.inactive_month
          }
          onClick={() => onMonthFocus(month[i])}
        >
          {month[i]}
        </div>
      );
    }
    return render;
  };
  const renderGraphData = () => {
    var data = [
      { x: "Jan", y: 2000000 },
      { x: "Feb", y: 1800000 },
      { x: "Mai", y: 1500000 },
      { x: "Apr", y: 1800000 },
      { x: "Mei", y: 1750000 },
      { x: "Jun", y: 1550000 },
      { x: "Jul", y: 1500000 },
      { x: "Agu", y: 2000000 },
      { x: "Sep", y: 1690000 },
      { x: "Okt", y: 2000000 },
      { x: "Nov", y: 1550000 },
      { x: "Des", y: 1800000 },
    ];
    var render = [];
    for (let i = monthGroup * 3; i < monthGroup * 3 + 3; i++) {
      render.push(data[i]);
    }
    return render;
  };

  const onAddMonth = () => {
    if (monthGroup < 3) {
      setMonthGroup(monthGroup + 1);
    }
  };
  const onMinMonth = () => {
    if (monthGroup > 0) {
      setMonthGroup(monthGroup - 1);
    }
  };

  const onMonthFocus = (x) => {
    setMonthFocus(x);
  };

  const renderDataTableAchive = (index) => {
    return (
      <td>
        {incentive[index].achive !== null
          ? `${incentive[index].achive}%`
          : null}
      </td>
    );
  };

  const renderDataTableGradasi = (index) => {
    return (
      <td>
        {incentive[index].gradasi !== null
          ? `${incentive[index].gradasi}%`
          : null}
      </td>
    );
  };

  const renderTable = () => {
    return (
      <div className={styles.incentive_table_container}>
        <table className={styles.ldi_table}>
          <thead>
            <tr>
              <th
                style={{
                  backgroundColor: "#04763C",
                  borderTopLeftRadius: "4px",
                  fontSize: "12px",
                  color: "#fff",
                  height: "38px",
                }}
                colSpan="7"
                rowSpan="2"
              >
                KPI Incentive Monthly
              </th>
              <th
                style={{
                  backgroundColor: "#04763C",
                  borderTopRightRadius: "4px",
                  fontSize: "8px",
                  color: "#fff",
                }}
                colSpan="4"
              >
                KALKULATOR
              </th>
            </tr>
            <tr
              style={{
                backgroundColor: "#04763C",
                borderTopRightRadius: "4px",
                textAlign: "center",
                color: "#fff",
              }}
            >
              <td style={{ fontSize: "8px" }}>Achve</td>
              <td style={{ fontSize: "8px" }}>Gradasi</td>
              <td style={{ fontSize: "8px" }}>Intensif</td>
            </tr>
          </thead>
          <tbody className={styles.ldi_tbody}>
            <tr
              style={{
                backgroundColor: "#F9FCF5",
                fontWeight: "600",
              }}
            >
              <td colSpan="7">Sales</td>
              {renderDataTableAchive(0)}
              {renderDataTableGradasi(0)}
              <td>{incentive[0].intensif}</td>
            </tr>
            <tr>
              <td colSpan="7">Target Sales In Value</td>
              {renderDataTableAchive(1)}
              {renderDataTableGradasi(1)}
              <td>{incentive[1].intensif}</td>
            </tr>
            <tr>
              <td colSpan="7">Target Sales All Product Non Dot in value</td>
              {renderDataTableAchive(2)}
              {renderDataTableGradasi(2)}
              <td>{incentive[2].intensif}</td>
            </tr>
            <tr>
              <td colSpan="7">Target Sales Product NBC In Value</td>
              {renderDataTableAchive(3)}
              {renderDataTableGradasi(3)}
              <td>{incentive[3].intensif}</td>
            </tr>
            <tr>
              <td colSpan="7">Target Growth Retail in %</td>
              {renderDataTableAchive(4)}
              {renderDataTableGradasi(4)}
              <td>{incentive[4].intensif}</td>
            </tr>
            <tr
              style={{
                backgroundColor: "#F9FCF5",
                fontWeight: "600",
              }}
            >
              <td colSpan="7">Operation Excellent</td>
              {renderDataTableAchive(5)}
              {renderDataTableGradasi(5)}
              <td>{incentive[5].intensif}</td>
            </tr>
            <tr>
              <td colSpan="7">Target Active Account</td>
              {renderDataTableAchive(6)}
              {renderDataTableGradasi(6)}
              <td>{incentive[6].intensif}</td>
            </tr>
            <tr>
              <td colSpan="7">Target Call (Kunjungan SMR)</td>
              {renderDataTableAchive(7)}
              {renderDataTableGradasi(7)}
              <td>{incentive[7].intensif}</td>
            </tr>
            <tr
              style={{
                backgroundColor: "#F9FCF5",
                fontWeight: "600",
              }}
            >
              <td colSpan="7">Store Leadership</td>
              {renderDataTableAchive(8)}
              {renderDataTableGradasi(8)}
              <td>{incentive[8].intensif}</td>
            </tr>
            <tr>
              <td colSpan="7">Target Store Visibility</td>
              {renderDataTableAchive(9)}
              {renderDataTableGradasi(9)}
              <td>{incentive[9].intensif}</td>
            </tr>
            <tr>
              <td colSpan="7">Target Aktivitas</td>
              {renderDataTableAchive(10)}
              {renderDataTableGradasi(10)}
              <td>{incentive[10].intensif}</td>
            </tr>
            <tr
              style={{
                backgroundColor: "#F9FCF5",
                fontWeight: "600",
              }}
            >
              <td colSpan="7">Total Perhitungan</td>
              {renderDataTableAchive(11)}
              {renderDataTableGradasi(11)}
              <td>{incentive[11].intensif}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  const renderPage = () => {
    return (
      <div className={styles.wrapper}>
        <Nav title="Current Incentive" backHref="/rewards" />
        <div className={styles.incentive_list_container}>
          <div>
            {/* <XYPlot
              width={window.innerWidth > 600 ? 500 : 300}
              height={300}
              xType="ordinal"
              margin={{ left: 60 }}
              yDomain={[1000000, 3000000]}
            >
              <HorizontalGridLines />
              <VerticalGridLines />
              <XAxis />
              <YAxis />
              <ChartLabel
                text="X Axis"
                className="alt-x-label"
                includeMargin={false}
                xPercent={0.025}
                yPercent={1.01}
              />
              <ChartLabel
                text="Y Axis"
                className="alt-y-label"
                includeMargin={false}
                xPercent={0.06}
                yPercent={0.06}
                style={{
                  transform: "rotate(-90)",
                  textAnchor: "end",
                }}
              />
              <Line
                color={"#A0D954"}
                className="first-series"
                data={renderGraphData()}
              />
              <Line className="second-series" data={null} />
            </XYPlot> */}
          </div>
          <div className={styles.monthgroup_grid}>
            <div onClick={onMinMonth}>{"<"}</div>
            {renderMonthGroup()}
            <div onClick={onAddMonth}>{">"}</div>
          </div>
          {renderTable()}
          <div className={styles.incentive_range_container}>
            <div>
              <div className={styles.range_title}>
                Bandingkan Data Incentive
              </div>
              <div className={styles.range_date}>
                <div className={styles.range_date_opt_container}>
                  <div>
                    <span style={{ marginRight: "10px" }}>Masukan Bulan</span>
                    <span>v</span>
                  </div>
                </div>
                <div className={styles.margin_auto}>-</div>
                <div className={styles.range_date_opt_container}>
                  <div>
                    <span style={{ marginRight: "10px" }}>Masukan Bulan</span>
                    <span>v</span>
                  </div>
                </div>
              </div>
              <div className={styles.button_class}>
                <div className={styles.button_class_text}>Bandingkan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return renderPage();
}
