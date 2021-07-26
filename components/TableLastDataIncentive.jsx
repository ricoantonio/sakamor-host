import React from "react";
import Link from "next/link";
import styles from "../styles/components/TableLastDataIncentive.module.css";

const TabelLastDataIncentive = ({ data }) => {
  const total = () => {
    var totalIncentive = 0;
    data.map((val) => {
      var splitGroup = val.grup.split(".");
      if (splitGroup[1] == 0) {
        totalIncentive += val.insentif;
      }
    });
    return totalIncentive;
  };
  const renderData = () => {
    // console.log(data);
    var sort = data.sort((a, b) =>
      a.grup.localeCompare(b.grup, undefined, { numeric: true })
    );

    return sort.map((val) => {
      var splitGroup = val.grup.split(".");
      if (splitGroup[1] == 0) {
        return (
          <tr
            style={{
              backgroundColor: "#F9FCF5",
              fontWeight: "600",
            }}
          >
            <td colSpan="7">{val.kpi}</td>
            <td></td>
            <td></td>
            <td>{val.insentif.toLocaleString("id-ID")}</td>
          </tr>
        );
      } else {
        return (
          <tr>
            <td colSpan="7">{val.kpi}</td>
            <td>{Math.round(val.achievement * 10) / 10}%</td>
            <td>{Math.round(val.gradasi * 10) / 10}%</td>
            <td>{val.insentif.toLocaleString("id-ID")}</td>
          </tr>
        );
      }
    });
  };
  return (
    <div className={styles.incentive_table_container}>
      <table className={styles.table_incentive} style={{ width: "100%" }}>
        <thead>
          <tr>
            <th
              style={{
                backgroundColor: "#41867a",
                borderTopLeftRadius: "4px",
                fontSize: "12px",
                color: "#fff",
                height: "38px",
              }}
              colSpan="7"
              rowSpan="2"
              width="40%"
            >
              KPI Incentive Monthly
            </th>
            <th
              style={{
                backgroundColor: "#41867a",
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
              backgroundColor: "#41867a",
              borderTopRightRadius: "4px",
              textAlign: "center",
              color: "#fff",
            }}
          >
            <td width="20%" style={{ fontSize: "8px" }}>
              Achievment
            </td>
            <td width="20%" style={{ fontSize: "8px" }}>
              Gradasi
            </td>
            <td width="20%" style={{ fontSize: "8px" }}>
              Intensif
            </td>
          </tr>
        </thead>
        <tbody className={styles.tbody_incentive}>
          {renderData()}
          <tr
            style={{
              backgroundColor: "#F9FCF5",
              fontWeight: "600",
            }}
          >
            <td colSpan="7">Total Perhitungan</td>
            <td></td>
            <td></td>
            <td>{total().toLocaleString("id-ID")}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TabelLastDataIncentive;
