import React from "react";
import moment from "moment";

const Invoice = ({ data, plan }) => {
  var total = 0;
  console.log(plan);
  const renderProduct = () => {
    return data.map((val, index) => {
      total += val.totalHarga;
      return (
        <tr style={{ borderBottom: "1px solid black" }}>
          <td style={{ borderRight: "1px solid black" }}>{index + 1}</td>
          <td style={{ borderRight: "1px solid black" }}>{val.namaProduk}</td>
          <td
            style={{
              borderRight: "1px solid black",
              textAlign: "right",
              padding: "0 4px 0 0",
            }}
          >
            {val.jumlah}
          </td>
          <td
            style={{
              borderRight: "1px solid black",
              textAlign: "right",
              padding: "0 4px 0 0",
            }}
          >
            {val.harga}
          </td>
          <td
            style={{
              borderRight: "1px solid black",
              textAlign: "right",
              padding: "0 4px 0 0",
            }}
          >
            {val.totalHarga}
          </td>
          <td style={{ borderRight: "1px solid black" }}>{val.keterangan}</td>
        </tr>
      );
    });
  };

  return (
    <div
      id="invoice"
      style={{
        color: "black",
        fontSize: "10px",
        backgroundColor: "white",
        padding: "10px",
      }}
    >
      <div
        style={{
          borderBottom: "1px solid black",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Surat Pesanan
      </div>
      <div style={{ fontSize: "6px", margin: "5px" }}>
        <div style={{ textAlign: "right", margin: "0 10px" }}>
          {moment(plan[0].tanggal).format("D MMMM YYYY")}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "12% 88%" }}>
          <div>Nama Outlet</div>
          <div>{plan[0].namaOutlet}</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "12% 88%" }}>
          <div>Alamat</div>
          <div>{plan[0].alamatOutlet}</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "12% 88%" }}>
          <div>No. Sp</div>
          <div></div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "12% 88%" }}>
          <div>To</div>
          <div></div>
        </div>
      </div>
      <div style={{ fontSize: "6px", margin: "-2px" }}>
        <table
          style={{
            width: "100%",
            textAlign: "center",
            borderTop: "1px solid black",
            borderLeft: "1px solid black",
          }}
        >
          <thead style={{ borderBottom: "1px solid black" }}>
            <tr>
              <th width={"5%"} style={{ borderRight: "1px solid black" }}>
                No.
              </th>
              <th width={"35%"} style={{ borderRight: "1px solid black" }}>
                Nama Produk
              </th>
              <th width={"5%"} style={{ borderRight: "1px solid black" }}>
                Qty
              </th>
              <th width={"10%"} style={{ borderRight: "1px solid black" }}>
                Harga
              </th>
              <th width={"10%"} style={{ borderRight: "1px solid black" }}>
                Total
              </th>
              <th width={"35%"} style={{ borderRight: "1px solid black" }}>
                Ket
              </th>
            </tr>
          </thead>
          <tbody>
            {renderProduct()}
            <tr style={{ borderBottom: "1px solid black" }}>
              <td
                style={{
                  borderRight: "1px solid black",
                  textAlign: "right",
                  padding: "0 4px 0 0",
                }}
                colSpan={2}
              >
                Grand Total
              </td>
              <td
                style={{
                  borderRight: "1px solid black",
                  textAlign: "right",
                  padding: "0 4px 0 4px",
                }}
                colSpan={3}
              >
                {total}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invoice;
