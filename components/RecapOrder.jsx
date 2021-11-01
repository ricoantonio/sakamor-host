import React from "react";
import moment, { now } from "moment";

const Recap = ({ data, smr }) => {
  var total = 0;
  const renderProduct = () => {
    return data.map((val, index) => {
      total += val.total;
      if (val.jumlahOrder > 0) {
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
              {moment(val.tanggal).format("DD MMM YYYY")}
            </td>
            {/* Outlet */}
            <td
              style={{
                borderRight: "1px solid black",
                textAlign: "left",
                padding: "0 4px 0 0",
              }}
            >
              {val.namaOutlet}
            </td>
            {/* Alamat */}
            <td
              style={{
                borderRight: "1px solid black",
                textAlign: "left",
                padding: "0 4px 0 0",
              }}
            >
              {val.alamatOutlet}
            </td>
            {/* Kode Produk */}
            <td
              style={{
                borderRight: "1px solid black",
                textAlign: "left",
                padding: "0 4px 0 0",
              }}
            >
              {val.kodeProduk}
            </td>
            {/* Nama Produk */}
            <td style={{ borderRight: "1px solid black", textAlign: "left" }}>
              {val.namaProduk}
            </td>
            {/* Jumlah */}
            <td style={{ borderRight: "1px solid black", textAlign: "right" }}>
              {val.jumlahOrder.toLocaleString("id-ID")}
            </td>
            {/* Harga Satuan */}
            <td style={{ borderRight: "1px solid black", textAlign: "right" }}>
              {val.harga.toLocaleString("id-ID")}
            </td>
            {/* Total */}
            <td style={{ borderRight: "1px solid black", textAlign: "right" }}>
              {val.total.toLocaleString("id-ID")}
            </td>
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
      </div>
      <div style={{ fontSize: "6px", margin: "5px" }}>
        <div style={{}}>
          <div>SMR: {smr}</div>
          <div>Tanggal Order: {moment().format("D MMMM YYYY")}</div>
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
              <th width={"30%"} style={{ borderRight: "1px solid black" }}>
                Alamat
              </th>
              <th width={"5%"} style={{ borderRight: "1px solid black" }}>
                Kode Produk
              </th>
              <th width={"20%"} style={{ borderRight: "1px solid black" }}>
                Nama Produk
              </th>
              <th width={"5%"} style={{ borderRight: "1px solid black" }}>
                Jumlah
              </th>
              <th width={"5%"} style={{ borderRight: "1px solid black" }}>
                Harga Satuan
              </th>
              <th width={"10%"} style={{ borderRight: "1px solid black" }}>
                Total
              </th>
            </tr>
          </thead>
          <tbody style={{ fontSize: "5px" }}>
            {renderProduct()}
            <tr style={{ borderBottom: "1px solid black" }}>
              <td
                style={{
                  borderRight: "1px solid black",
                  textAlign: "right",
                  padding: "0 4px 0 0",
                }}
                colSpan={6}
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
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Recap;
