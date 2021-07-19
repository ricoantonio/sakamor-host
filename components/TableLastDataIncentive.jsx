import React from "react";
import Link from "next/link";
import styles from "../styles/components/TableLastDataIncentive.module.css";

const TabelLastDataIncentive = ({}) => {
  const renderDataTableAchive = (index) => {
    return (
      <td>
        {/* {incentive[index].achive !== null
          ? `${incentive[index].achive}%`
          : null} */}
      </td>
    );
  };

  const renderDataTableGradasi = (index) => {
    return (
      <td>
        {/* {incentive[index].gradasi !== null
          ? `${incentive[index].gradasi}%`
          : null} */}
      </td>
    );
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
              Achve
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
          <tr
            style={{
              backgroundColor: "#F9FCF5",
              fontWeight: "600",
            }}
          >
            <td colSpan="7">Sales</td>
            {renderDataTableAchive(0)}
            {renderDataTableGradasi(0)}
            <td></td>
          </tr>
          <tr>
            <td colSpan="7">Target Sales in value</td>
            {renderDataTableAchive(1)}
            {renderDataTableGradasi(1)}
            <td></td>
          </tr>
          <tr>
            <td colSpan="7">Target Sales NOO all Produk Non Dot in value</td>
            {renderDataTableAchive(2)}
            {renderDataTableGradasi(2)}
            <td></td>
          </tr>
          <tr>
            <td colSpan="7">Target Sales Produk Focus in value</td>
            {renderDataTableAchive(3)}
            {renderDataTableGradasi(3)}
            <td></td>
          </tr>
          <tr>
            <td colSpan="7">Target Growth Retail in %</td>
            {renderDataTableAchive(4)}
            {renderDataTableGradasi(4)}
            <td></td>
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
            <td></td>
          </tr>
          <tr>
            <td colSpan="7">Target Produktifitas (Call & Store Visibility)</td>
            {renderDataTableAchive(6)}
            {renderDataTableGradasi(6)}
            <td></td>
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
            <td></td>
          </tr>
          <tr>
            <td colSpan="7">Target Aktivasi</td>
            {renderDataTableAchive(10)}
            {renderDataTableGradasi(10)}
            <td></td>
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
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TabelLastDataIncentive;
