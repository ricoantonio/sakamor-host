import React, { useState, useContext, useEffect } from "react";
import Head from "next/head";
import moment from "moment";
import styles from "../styles/pages/Calendar.module.css";
import { Stores } from "../store";

import Spinner from "../components/Spinner";
import BotNav from "../components/BotNav";
import Nav from "../components/Nav";
import Card from "../components/Card";
import Checkbox from "../components/Checkbox";
import {
  getDayProgram,
  getDayPromo,
  getMonthPromo,
  getMonthProgram,
} from "../helper";

export default function Calender() {
  const { state, dispatch, actions } = useContext(Stores);
  const [focus, setFocus] = useState("Day");
  const [loading, setLoading] = useState(false);
  const [loadingPromo, setLoadingPromo] = useState(false);
  const [loadingProgram, setLoadingProgram] = useState(false);
  const [loadingMonthPromo, setLoadingMonthPromo] = useState(false);
  const [loadingMonthProgram, setLoadingMonthProgram] = useState(false);
  const [loadingWeekPromo0, setLoadingWeekPromo0] = useState(true);
  const [loadingWeekProgram0, setLoadingWeekProgram0] = useState(true);
  const [loadingWeekPromo1, setLoadingWeekPromo1] = useState(true);
  const [loadingWeekProgram1, setLoadingWeekProgram1] = useState(true);
  const [loadingWeekPromo2, setLoadingWeekPromo2] = useState(true);
  const [loadingWeekProgram2, setLoadingWeekProgram2] = useState(true);
  const [loadingWeekPromo3, setLoadingWeekPromo3] = useState(true);
  const [loadingWeekProgram3, setLoadingWeekProgram3] = useState(true);
  const [loadingWeekPromo4, setLoadingWeekPromo4] = useState(true);
  const [loadingWeekProgram4, setLoadingWeekProgram4] = useState(true);
  const [promo, setPromo] = useState(true);
  const [program, setProgram] = useState(true);
  const [promoList, setPromoList] = useState([]);
  const [promoListMonth, setPromoListMonth] = useState([]);
  const [promoList0, setPromoList0] = useState([]);
  const [promoList1, setPromoList1] = useState([]);
  const [promoList2, setPromoList2] = useState([]);
  const [promoList3, setPromoList3] = useState([]);
  const [promoList4, setPromoList4] = useState([]);
  const [programList, setProgramList] = useState([]);
  const [programListMonth, setProgramListMonth] = useState([]);
  const [programList0, setProgramList0] = useState([]);
  const [programList1, setProgramList1] = useState([]);
  const [programList2, setProgramList2] = useState([]);
  const [programList3, setProgramList3] = useState([]);
  const [programList4, setProgramList4] = useState([]);
  const [now, setNow] = useState(new Date());

  var dayName = moment(now).format("dddd");
  var date = moment(now).format("D");
  var monthName = moment(now).format("MMMM");
  var year = moment(now).format("YYYY");

  useEffect(() => {
    var date = moment(now).format("YYYY-MM-DD");
    if (focus == "Day") {
      setLoadingProgram(true);
      setLoadingPromo(true);
      getDayProgram(date)
        .then((data) => {
          setProgramList(data);
          setLoadingProgram(false);
          // console.log("program", data);
        })
        .catch((err) => {
          console.log(err);
        });
      getDayPromo(date)
        .then((data) => {
          setPromoList(data);
          setLoadingPromo(false);
          // console.log("promo", data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (focus === "Week") {
      setLoadingWeekProgram0(true);
      setLoadingWeekProgram1(true);
      setLoadingWeekProgram2(true);
      setLoadingWeekProgram3(true);
      setLoadingWeekProgram4(true);
      setLoadingWeekPromo0(true);
      setLoadingWeekPromo1(true);
      setLoadingWeekPromo2(true);
      setLoadingWeekPromo3(true);
      setLoadingWeekPromo4(true);
      const dateStart = moment(now).startOf("isoweek");
      for (let i = 0; i < 5; i++) {
        const date = moment(dateStart).add("days", i);
        const dateParam = moment(date).format("YYYY-MM-DD");
        if (i === 0) {
          getDayProgram(dateParam)
            .then((data) => {
              setProgramList0(data);
              setLoadingWeekProgram0(false);
              // console.log("program", data);
            })
            .catch((err) => {
              console.log(err);
            });
          getDayPromo(dateParam)
            .then((data) => {
              setPromoList0(data);
              setLoadingWeekPromo0(false);
              // console.log("promo", data);
            })
            .catch((err) => {
              console.log(err);
            });
        }
        if (i === 1) {
          getDayProgram(dateParam)
            .then((data) => {
              setProgramList1(data);
              setLoadingWeekProgram1(false);
              // console.log("program", data);
            })
            .catch((err) => {
              console.log(err);
            });
          getDayPromo(dateParam)
            .then((data) => {
              setPromoList1(data);
              setLoadingWeekPromo1(false);
              // console.log("promo", data);
            })
            .catch((err) => {
              console.log(err);
            });
        }
        if (i === 2) {
          getDayProgram(dateParam)
            .then((data) => {
              setProgramList2(data);
              setLoadingWeekProgram2(false);
              // console.log("program", data);
            })
            .catch((err) => {
              console.log(err);
            });
          getDayPromo(dateParam)
            .then((data) => {
              setPromoList2(data);
              setLoadingWeekPromo2(false);
              // console.log("promo", data);
            })
            .catch((err) => {
              console.log(err);
            });
        }
        if (i === 3) {
          getDayProgram(dateParam)
            .then((data) => {
              setProgramList3(data);
              setLoadingWeekProgram3(false);
              // console.log("program", data);
            })
            .catch((err) => {
              console.log(err);
            });
          getDayPromo(dateParam)
            .then((data) => {
              setPromoList3(data);
              setLoadingWeekPromo3(false);
              // console.log("promo", data);
            })
            .catch((err) => {
              console.log(err);
            });
        }
        if (i === 4) {
          getDayProgram(dateParam)
            .then((data) => {
              setProgramList4(data);
              setLoadingWeekProgram4(false);
              // console.log("program", data);
            })
            .catch((err) => {
              console.log(err);
            });
          getDayPromo(dateParam)
            .then((data) => {
              setPromoList4(data);
              setLoadingWeekPromo4(false);
              // console.log("promo", data);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    } else if (focus === "Month") {
      setLoadingMonthPromo(true);
      setLoadingMonthProgram(true);
      getMonthProgram(date)
        .then((data) => {
          setProgramListMonth(data);
          setLoadingMonthProgram(false);
        })
        .catch((err) => {
          console.log(err);
        });
      getMonthPromo(date)
        .then((data) => {
          setPromoListMonth(data);
          setLoadingMonthPromo(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [now, focus]);

  const renderTopMenu = () => {
    const menu = ["Day", "Week", "Month"];
    return menu.map((val, index) => {
      return (
        <div
          key={index}
          onClick={() => {
            setFocus(val);
            setNow(new Date());
          }}
          className={
            focus === val ? styles.menu_active : styles.menu_non_active
          }
        >
          {val}
        </div>
      );
    });
  };

  const renderDayList = (type, data) => {
    if (loadingProgram || loadingPromo) {
      return <div>Loading...</div>;
    } else {
      if (data.length === 0) {
        if (type === "PROMO") {
          return <div>No promo today</div>;
        } else if (type === "PROGRAM") {
          return <div>No program today</div>;
        }
      } else {
        return data.map((val) => {
          return (
            <div
              style={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#5E5873",
                textAlign: "left",
                margin: "10px 0",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "12% 88%",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: type === "PROMO" ? "#d1e4e1" : "#FFF1CC",
                    borderRadius: "20px",
                    padding: "4px",
                  }}
                >
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      backgroundColor: type === "PROMO" ? "#41867a" : "#feb800",
                      borderRadius: "20px",
                    }}
                  />
                </div>
                <div>
                  <div>{val.namaProduk}</div>
                  <div style={{ fontSize: "12px", fontWeight: "300" }}>
                    {val.deskripsi}
                  </div>
                </div>
              </div>
            </div>
          );
        });
      }
    }
  };
  const renderMenuDay = () => {
    return (
      <>
        <Card style={{ borderRadius: "6px", marginTop: "12px" }}>
          <div style={{ padding: "22px 0 0 22px" }}>
            <span className={styles.day_promo_title}>Promo</span>
          </div>
          <div style={{ padding: "6px 20px" }}>
            {renderDayList("PROMO", promoList)}
          </div>
        </Card>
        <Card style={{ borderRadius: "6px", marginTop: "12px" }}>
          <div style={{ padding: "22px 0 0 22px" }}>
            <span className={styles.day_program_title}>Program</span>
          </div>
          <div style={{ padding: "6px 20px" }}>
            {renderDayList("PROGRAM", programList)}
          </div>
        </Card>
      </>
    );
  };
  const renderWeekList = (type, data) => {
    return data.map((val) => {
      return (
        <div
          style={{
            fontSize: "14px",
            fontWeight: "500",
            color: "#5E5873",
            textAlign: "left",
            margin: "10px 0",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "10% 90%",
            }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "20px",
                padding: "4px",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  backgroundColor: type === "PROMO" ? "#41867a" : "#feb800",
                  borderRadius: "20px",
                }}
              />
            </div>
            <div>
              <div>{val.namaProduk}</div>
            </div>
          </div>
        </div>
      );
    });
  };
  const renderMenuWeek = () => {
    const arrWeek = [];
    const dateStart = moment(now).startOf("isoweek");

    for (let i = 0; i < 5; i++) {
      const date = moment(dateStart).add("days", i);

      arrWeek.push(date);
    }

    const renderList = (dataPromo, dataProgram) => {
      const datalength = dataPromo.length + dataProgram.length;
      if (datalength === 0) {
        return <>No promo or program today</>;
      } else {
        return (
          <>
            <>{promo ? <>{renderWeekList("PROMO", dataPromo)}</> : ""}</>
            <>{program ? <>{renderWeekList("PROGRAM", dataProgram)}</> : ""}</>
          </>
        );
      }
    };

    const renderArr = arrWeek.map((val, index) => {
      return (
        <div key={index}>
          <div className={styles.week_header_container}>
            <div>{moment(val).format("MMMM D, YYYY")}</div>
            <div>{moment(val).format("dddd")}</div>
          </div>
          <div className={styles.week_main_container}>
            {index === 0 ? (
              loadingWeekProgram0 || loadingWeekPromo0 ? (
                <div>Loading...</div>
              ) : (
                renderList(promoList0, programList0)
              )
            ) : index === 1 ? (
              loadingWeekProgram1 || loadingWeekPromo1 ? (
                <div>Loading...</div>
              ) : (
                renderList(promoList1, programList1)
              )
            ) : index === 2 ? (
              loadingWeekProgram2 || loadingWeekPromo2 ? (
                <div>Loading...</div>
              ) : (
                renderList(promoList2, programList2)
              )
            ) : index === 3 ? (
              loadingWeekProgram3 || loadingWeekPromo3 ? (
                <div>Loading...</div>
              ) : (
                renderList(promoList3, programList3)
              )
            ) : index === 4 ? (
              loadingWeekProgram4 || loadingWeekPromo4 ? (
                <div>Loading...</div>
              ) : (
                renderList(promoList4, programList4)
              )
            ) : (
              <></>
            )}
          </div>
        </div>
      );
    });
    return (
      <>
        <div className={styles.month_header_container}>
          <div
            onClick={() => {
              setNow(moment(now).subtract(1, "weeks"));
            }}
          >
            <img src={"/prev_white.svg"} />
          </div>
          <div>
            {moment(dateStart).format("D")}-
            {moment(dateStart).add(4, "days").format("D")}{" "}
            {moment(dateStart).add(4, "days").format("MMMM")}
            <span style={{ fontWeight: "300" }}>
              {" "}
              {moment(now).format("YYYY")}
            </span>
          </div>
          <div
            onClick={() => {
              setNow(moment(now).add(1, "weeks"));
            }}
          >
            <img src={"/next_white.svg"} />
          </div>
        </div>
        {renderArr}
      </>
    );
  };

  const renderMonthList = () => {
    const monthProgram = programListMonth.map((val) => {
      return {
        createdBy: val.createdBy,
        createdDate: val.createdDate,
        deskripsi: val.deskripsi,
        id: val.id,
        isDeleted: val.isDeleted,
        kodeCabang: val.kodeCabang,
        kodeProduk: val.kodeProduk,
        namaCabang: val.namaCabang,
        namaProduk: val.namaProduk,
        nomorDokumen: val.nomorDokumen,
        tanggalMulai: val.tanggalMulai,
        tanggalSelesai: val.tanggalSelesai,
        updatedBy: val.updatedBy,
        updatedDate: val.updatedDate,
        type: "PROGRAM",
      };
    });
    const monthPromo = promoListMonth.map((val) => {
      return {
        createdBy: val.createdBy,
        createdDate: val.createdDate,
        deskripsi: val.deskripsi,
        id: val.id,
        isDeleted: val.isDeleted,
        kodeCabang: val.kodeCabang,
        kodeProduk: val.kodeProduk,
        namaCabang: val.namaCabang,
        namaProduk: val.namaProduk,
        nomorDokumen: val.nomorDokumen,
        tanggalMulai: val.tanggalMulai,
        tanggalSelesai: val.tanggalSelesai,
        updatedBy: val.updatedBy,
        updatedDate: val.updatedDate,
        type: "PROMO",
      };
    });

    var dataRender = monthProgram.concat(monthPromo);
    var dataRenderSort = dataRender.sort(
      (a, b) => moment(a.tanggalMulai) - moment(b.tanggalMulai)
    );
    if (loadingMonthProgram || loadingMonthPromo) {
      return <div className={styles.week_main_container}>Loading...</div>;
    } else {
      if (dataRenderSort.length === 0) {
        return (
          <div className={styles.week_main_container}>
            No promo or program this month
          </div>
        );
      } else {
        return dataRenderSort.map((val) => {
          if (val.type === "PROMO") {
            return (
              <>
                <>
                  {promo ? (
                    <div className={styles.month_container}>
                      <div className={styles.month_promo_date}>
                        {moment(val.tanggalMulai).format("D")}
                      </div>
                      <div>
                        <div>{val.namaProduk}</div>
                        <div style={{ fontSize: "12px" }}>{val.deskripsi}</div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </>
              </>
            );
          } else if (val.type === "PROGRAM") {
            return (
              <>
                {program ? (
                  <div className={styles.month_container}>
                    <div className={styles.month_program_date}>
                      {moment(val.tanggalMulai).format("D")}
                    </div>
                    <div>
                      <div>{val.namaProduk}</div>
                      <div style={{ fontSize: "12px" }}>{val.deskripsi}</div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </>
            );
          }
        });
      }
    }
  };

  const renderMenuMonth = () => {
    return (
      <div>
        <div className={styles.month_header_container}>
          <div
            onClick={() => {
              setNow(moment(now).subtract(1, "months"));
            }}
          >
            <img src={"/prev_white.svg"} />
          </div>
          <div>
            {moment(now).format("MMMM")}
            <span style={{ fontWeight: "300" }}>
              {" "}
              {moment(now).format("YYYY")}
            </span>
          </div>
          <div
            onClick={() => {
              setNow(moment(now).add(1, "months"));
            }}
          >
            <img src={"/next_white.svg"} />
          </div>
        </div>
        <div className={styles.month_main_container}>{renderMonthList()}</div>
      </div>
    );
  };

  const togglePromo = () => {
    setPromo(!promo);
  };
  const toggleProgram = () => {
    setProgram(!program);
  };

  const renderPage = () => {
    if (loading) {
      return <Spinner />;
    } else
      return (
        <div>
          <Head>
            <title>Home</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className={styles.container}>
            <div className={styles.wrapper}>
              <Nav title={"Calendar"} color={"white"} noBack />
              <div className={styles.main}>
                <Card style={{ borderRadius: "6px" }}>
                  <div className={styles.menu_grid}>{renderTopMenu()}</div>
                  {focus === "Day" ? (
                    <>
                      <div className={styles.day_title}>{dayName}</div>
                      <div className={styles.day_grid}>
                        <div
                          onClick={() => {
                            setNow(moment(now).subtract(1, "days"));
                          }}
                        >
                          <img src={"/cev_left.svg"} />
                        </div>
                        <div>
                          <div className={styles.day_date_display}>{date}</div>
                        </div>
                        <div
                          onClick={() => {
                            setNow(moment(now).add(1, "days"));
                          }}
                        >
                          <img src={"/cev_right.svg"} />
                        </div>
                      </div>
                      <div className={styles.day_bot_display}>
                        <div>{monthName}</div>
                        <div>{year}</div>
                      </div>
                    </>
                  ) : (
                    <div className={styles.filter_container}>
                      <div className={styles.filter_text}>FILTER</div>
                      <Checkbox
                        text={"Promo"}
                        checked={promo}
                        color={"green"}
                        onClick={() => togglePromo()}
                      />
                      <Checkbox
                        text={"Program"}
                        checked={program}
                        color={"yellow"}
                        onClick={() => toggleProgram()}
                      />
                    </div>
                  )}
                </Card>
                {focus === "Day"
                  ? renderMenuDay()
                  : focus === "Week"
                  ? renderMenuWeek()
                  : focus === "Month"
                  ? renderMenuMonth()
                  : ""}
              </div>
            </div>
          </div>
          <BotNav />
        </div>
      );
  };
  return renderPage();
}
