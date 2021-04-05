import React from "react";
import styles from "../styles/components/DetailPlan.module.css";
import Card from "./Card";
import Button from "./Button";
import Link from "next/link";

const DetailPlan = ({ data, history }) => {
  var dataCheckOutDate = new Date(data.checkOutDate);
  var date = dataCheckOutDate.getDate();
  var month = dataCheckOutDate.getMonth() + 1;
  var year = dataCheckOutDate.getFullYear();
  console.log(data);
  return (
    <Card style={{ marginTop: "22px", borderRadius: "5px" }}>
      <div style={{ padding: "21px 18px" }}>
        {history ? (
          <>
            <div className={styles.top_grid}>
              <div>
                <span
                  className={styles.date}
                >{`${date} / ${month} / ${year}`}</span>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    marginTop: "10px",
                  }}
                >
                  {data.namaOutlet}
                </div>
                <div style={{ fontSize: "12px", fontWeight: "400" }}>
                  {data.alamatOutlet}
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <img src={"/done.svg"} style={{ height: "60px" }} />
              </div>
            </div>
          </>
        ) : (
          <>
            <div style={{ fontSize: "18px", fontWeight: "500" }}>
              {data.namaOutlet}
            </div>
            <div style={{ fontSize: "12px", fontWeight: "400" }}>
              {data.alamatOutlet}
            </div>
          </>
        )}
        <div className={styles.grid_container}>
          <div className={styles.container}>
            <div className={styles.container_title}>Target</div>
            <div className={styles.container_value}>
              {`Rp.${data.target.toLocaleString("id-ID")}`}
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.container_title}>Sales</div>
            <div
              className={styles.container_value}
            >{`Rp.${data.sales.toLocaleString("id-ID")}`}</div>
          </div>
        </div>
        {history ? (
          ""
        ) : (
          <Link href={`/visit/plan/${data.idMasterPlan}`}>
            <a>
              <div
                style={{
                  textAlign: "center",
                  margin: "10px 0",
                  paddingTop: "14px",
                }}
              >
                <Button color={"white"} text={"More"} />
              </div>
            </a>
          </Link>
        )}
      </div>
    </Card>
  );
};

export default DetailPlan;
