import React from "react";
import moment from "moment";

const Recap = ({ data, plan, type }) => {
  var total = 0;
  const renderProduct = () => {
    return data.map((val, index) => {
      total += val.totalHarga;
      if (val.jumlah > 0) {
        return (
          <tr style={{ borderBottom: "1px solid black" }}>
            {/* no */}
            <td style={{ borderRight: "1px solid black" }}>{index + 1}</td>
            {/* Tanggal */}
            <td
              style={{
                borderRight: "1px solid black",
                textAlign: "left",
                paddingLeft: "2px",
              }}
            >
              {moment(val.tanggal).format("D MMMM YYYY")}
            </td>
            {/* Outlet */}
            <td
              style={{
                borderRight: "1px solid black",
                textAlign: "right",
                padding: "0 4px 0 0",
              }}
            >
              {val.namaOutlet}
            </td>
            {/* Alamat */}
            <td
              style={{
                borderRight: "1px solid black",
                textAlign: "right",
                padding: "0 4px 0 0",
              }}
            >
              {val.alamatOutlet}
            </td>
            {/* Kode Produk */}
            <td
              style={{
                borderRight: "1px solid black",
                textAlign: "right",
                padding: "0 4px 0 0",
              }}
            >
              {val.kodeProduk}
              {val.totalHarga.toLocaleString("id-ID")}
            </td>
            {/* Nama Produk */}
            <td style={{ borderRight: "1px solid black" }}>{val.namaProduk}</td>
            {/* Jumlah */}
            <td style={{ borderRight: "1px solid black" }}>
              {val.jumlahOrder}
            </td>
            {/* Harga Satuan */}
            <td style={{ borderRight: "1px solid black" }}>{val.harga}</td>
            {/* Total */}
            <td style={{ borderRight: "1px solid black" }}>{val.total}</td>
          </tr>
        );
      }
    });
  };

  return (
    <div
      id="recapOrder"
      style={{
        color: "black",
        fontSize: "10px",
        backgroundColor: "white",
        padding: "10px",
      }}
    >
      <div
        style={{
          // borderBottom: "1px solid black",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Rekap Surat Pesanan
        <div>SMR:</div>
      </div>
      <div style={{ fontSize: "6px", margin: "5px" }}>
        <div style={{ textAlign: "right", margin: "0 10px" }}>
          {moment(plan[0].tanggal).format("D MMMM YYYY")}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "12% 88%" }}>
          <div>
            Tanggal Order:{moment(plan[0].tanggal).format("D MMMM YYYY")}
          </div>
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
              <th width={"10%"} style={{ borderRight: "1px solid black" }}>
                Tanggal
              </th>
              <th width={"10%"} style={{ borderRight: "1px solid black" }}>
                Outlet
              </th>
              <th width={"15%"} style={{ borderRight: "1px solid black" }}>
                Alamat
              </th>
              <th width={"10%"} style={{ borderRight: "1px solid black" }}>
                Kode Produk
              </th>
              <th width={"20%"} style={{ borderRight: "1px solid black" }}>
                Nama Produk
              </th>
              <th width={"10%"} style={{ borderRight: "1px solid black" }}>
                Jumlah
              </th>
              <th width={"10%"} style={{ borderRight: "1px solid black" }}>
                Harga Satuan
              </th>
              <th width={"10%"} style={{ borderRight: "1px solid black" }}>
                Total
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
                {total.toLocaleString("id-ID")}
              </td>
              <td
                style={{
                  borderRight: "1px solid black",
                  textAlign: "right",
                  padding: "0 4px 0 4px",
                }}
              >
                {" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Recap;
