import moment from "moment";
import {
  TOKEN,
  API_URL,
  API_USER,
  API_MASTER,
  API_VISIT_PLAN,
  API_VISIT_UNPLAN,
  API_VISIT_SPREADING,
  API_WORK_VISIT,
  API_CALENDAR_PROMO,
  API_CALENDAR_PROGRAM,
  API_ANNOUNCEMENT,
  API_INCENTIVE,
  API_BENEFIT,
} from "./constant";

var now = new Date();
var date = now.getDate();
var month = now.getMonth() + 1;
var year = now.getFullYear();

function compare(a, b) {
  if (a.nomor < b.nomor) {
    return -1;
  }
  if (a.nomor > b.nomor) {
    return 1;
  }
  return 0;
}

// USER =============================================================================================================================

const getMenu = (userData) => {
  if (process.env.NODE_ENV === "development") {
    console.log("dev");
  } else {
    console.log("production");
  }
  return fetch(
    API_URL + API_USER + `/User/GetMenu?username=${userData.email}`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getAuth = (userData) => {
  return fetch(
    API_URL + API_USER + `/User/GetAuthorize?username=${userData.username}`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const onLogin = (values) => {
  return fetch(
    API_URL +
      API_USER +
      `/User/Login?username=${values.username}&&password=${values.password}`,
    {
      method: "POST",
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
      setWrongUser(true);
    });
};

// MASTER ============================================================================================================================

const getPosm = () => {
  return fetch(API_URL + API_MASTER + `/MasterDataLokal/GetAllDisplayProgram`, {
    headers: {
      apiKey: TOKEN,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getProductSearch = (search) => {
  return fetch(API_URL + API_MASTER + `/MasterData/GetProdukLike/${search}`, {
    headers: {
      apiKey: TOKEN,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getProductByJenisChannel = (jenisChannelId) => {
  return fetch(
    API_URL +
      API_MASTER +
      `/MasterDataLokal/GetProdukJenisChannelBy/${jenisChannelId}`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getProductAvgSales = (productCode, outletCode) => {
  return fetch(
    API_URL +
      API_MASTER +
      `/MasterData/GetAvgSales30DaysByOutletAndProduct?productCode=${productCode}&outletCode=${outletCode}`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getSearchJenisChannel = (search) => {
  return fetch(
    API_URL + API_MASTER + `/MasterDataLokal/GetJenisChannelBy?teks=${search}`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getSearchOutlet = (jenisChannelId, search) => {
  return fetch(
    API_URL +
      API_MASTER +
      `/MasterDataLokal/GetOutletBy/${jenisChannelId}?teks=${search}`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getBrand = () => {
  return fetch(API_URL + API_MASTER + `/MasterDataLokal/GetAllBrand`, {
    headers: {
      apiKey: TOKEN,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getKontenWorkVisit = () => {
  return fetch(
    API_URL + API_MASTER + `/MasterDataLokal/GetAllKontenWorkVisit`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getSalesTargetSMR = (userData, month, year) => {
  return fetch(
    API_URL +
      API_MASTER +
      `/MasterDataLokal/GetSalesTargetBy/${year}/${month}?usernameSmr=${userData.username}`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getSalesTarget75SMR = (userData, month, year) => {
  return fetch(
    API_URL +
      API_MASTER +
      `/MasterDataLokal/GetSalesTarget75PersenBy/${year}/${month}?usernameSmr=${userData.username}`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

// VISIT PLAN ======================================================================================================================

const getPlanList = (userData) => {
  return fetch(
    API_URL +
      API_VISIT_PLAN +
      `/ActivityVisitPlan/GetActivityVisitPlanBy?username=${userData.username}`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var res = data.filter((val) => {
        return val.isCheckOut === false;
      });
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getPlanId = (id) => {
  return fetch(
    API_URL +
      API_VISIT_PLAN +
      `/MasterVisitPlan/GetMasterVisitPlanBy?parameter=${year}-${month}-${date}`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((planList) => {
      if (planList.length != 0) {
        return fetch(
          API_URL +
            API_VISIT_PLAN +
            `/MasterVisitPlan/GetMasterVisitPlanById/${id}`,
          {
            headers: {
              apiKey: TOKEN,
            },
          }
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            var samePlan = planList.filter((val) => {
              return val.id === data.id;
            });

            return { samePlan, data };
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        return planList;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const getPlanHistory = (userData) => {
  return fetch(
    API_URL +
      API_VISIT_PLAN +
      `/ActivityVisitPlan/GetActivityVisitPlanBy?username=${userData.username}`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var res = data.filter((val) => {
        return val.isCheckOut === true;
      });
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};

const submitVisitPlan = (data) => {
  // console.log(data);
  return fetch(
    API_URL + API_VISIT_PLAN + "/ActivityVisitPlan/SaveAllActivityVisitPlan",
    {
      method: "POST",
      headers: {
        apiKey: TOKEN,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("baikan saveall", data);
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const submitVisitPlanDposm = (dposm, file) => {
  // console.log(dposm, file);
  const formdata = new FormData();
  return fetch(
    API_URL +
      API_VISIT_PLAN +
      "/ActivityVisitPlanDPOSM/SaveActivityVisitPlanDposm",
    {
      method: "POST",
      headers: {
        apiKey: TOKEN,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dposm),
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log("balikan psom", data);
      formdata.append("file", file);
      return fetch(
        API_URL +
          API_VISIT_PLAN +
          `/ActivityVisitPlanDPOSM/InsertFileBy?id=${data.id}&namaFile=${data.namaFile}`,
        {
          method: "POST",
          headers: {
            apiKey: TOKEN,
          },
          body: formdata,
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log("balikan inserfile", data);
          return data;
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

const getInvoiceData = (visitPlanId) => {
  return fetch(
    API_URL +
      API_VISIT_PLAN +
      `/ActivityVisitPlan/GetProdukSuratPesanan/${visitPlanId}`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getInvoiceDataPosm = (visitPlanId) => {
  return fetch(
    API_URL +
      API_VISIT_PLAN +
      `/ActivityVisitPlanDPOSM/GetActivityVisitPlanDPosmBy/${visitPlanId}`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var sortData = data.sort(compare);
      return sortData;
    })
    .catch((err) => {
      console.log(err);
    });
};

const viewFile = (id) => {
  return fetch(
    API_URL + API_VISIT_PLAN + `/ActivityVisitPlanDPOSM/ViewFile/${id}`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.blob();
    })
    .then(function (data) {
      var outside = URL.createObjectURL(data);
      return outside;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getPlanMonthlyHistory = (userData) => {
  return fetch(
    API_URL +
      API_VISIT_PLAN +
      `/ActivityVisitPlan/GetHistoryActivityVisitPlanBy?username=${userData.username}`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.sort(function (a, b) {
        var dateA = new Date(a.tanggal),
          dateB = new Date(b.tanggal);
        return dateB - dateA;
      });
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getMasterVisitPlan = (userData) => {
  return fetch(
    API_URL +
      API_VISIT_PLAN +
      `/MasterVisitPlan/GetMasterVisitPlanByUsername?username=${userData.username}`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.sort(function (a, b) {
        var dateA = new Date(a.tanggal),
          dateB = new Date(b.tanggal);
        return dateB - dateA;
      });
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

// VISIT UNPLAN =================================================================================================================

const submitVisitUnplan = (data) => {
  // console.log(data);
  return fetch(
    API_URL +
      API_VISIT_UNPLAN +
      `/SakamorActivityVisitUnPlan/SaveAllActivityVisitUnPlan`,
    {
      method: "POST",
      headers: {
        apiKey: TOKEN,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("baikan saveall", data);
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const submitVisitUnplanDposm = (dposm, file) => {
  // console.log(dposm, file);
  const formdata = new FormData();
  return fetch(
    API_URL +
      API_VISIT_UNPLAN +
      `/SakamorActivityVisitUnPlanDPOSM/SaveActivityVisitUnPlanDposm`,
    {
      method: "POST",
      headers: {
        apiKey: TOKEN,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dposm),
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("balikan psom", data);
      formdata.append("file", file);
      return fetch(
        API_URL +
          API_VISIT_UNPLAN +
          `/SakamorActivityVisitUnPlanDPOSM/InsertFileBy?id=${data.id}&namaFile=${data.namaFile}`,
        {
          method: "POST",
          headers: {
            apiKey: TOKEN,
          },
          body: formdata,
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log("balikan inserfile", data);
          return data;
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

const getInvoiceDataUnplan = (visitPlanId) => {
  return fetch(
    API_URL +
      API_VISIT_UNPLAN +
      `/SakamorActivityVisitUnPlan/GetProdukSuratPesanan/${visitPlanId}`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getInvoiceDataPosmUnplan = (visitUnplanId) => {
  return fetch(
    API_URL +
      API_VISIT_UNPLAN +
      `/SakamorActivityVisitUnPlanDPOSM/GetActivityVisitUnPlanDPosmBy/${visitUnplanId}`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var sortData = data.sort(compare);
      return sortData;
    })
    .catch((err) => {
      console.log(err);
    });
};

const viewFileUnplan = (id) => {
  console.log(id);
  return fetch(
    API_URL +
      API_VISIT_UNPLAN +
      `/SakamorActivityVisitUnPlanDPOSM/ViewFile/${id}`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.blob();
    })
    .then(function (data) {
      var outside = URL.createObjectURL(data);
      return outside;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getUnplanMonthlyHistory = (userData) => {
  return fetch(
    API_URL +
      API_VISIT_UNPLAN +
      `/SakamorActivityVisitUnPlan/GetHistoryActivityVisitUnPlanBy?username=${userData.username}`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.sort(function (a, b) {
        var dateA = new Date(a.tanggal),
          dateB = new Date(b.tanggal);
        return dateB - dateA;
      });
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getUnplanNearMe = () => {
  return fetch(
    API_URL + API_MASTER + `/MasterData/GetOutletNearMe/-6.123456/12.987654`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

// SPREADING =======================================================================================================================

const submitVisitSpreading = (data) => {
  // console.log(data);
  return fetch(
    API_URL +
      API_VISIT_SPREADING +
      `/ActivitySpreading/SaveAllActivitySpreading`,
    {
      method: "POST",
      headers: {
        apiKey: TOKEN,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("baikan saveall", data);
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const submitVisitSpreadingDposm = (dposm, file) => {
  // console.log(dposm, file);
  const formdata = new FormData();
  return fetch(
    API_URL +
      API_VISIT_SPREADING +
      `/ActivitySpreadingDPOSM/SaveActivitySpreadingDposm`,
    {
      method: "POST",
      headers: {
        apiKey: TOKEN,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dposm),
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("balikan psom", data);
      formdata.append("file", file);
      return fetch(
        API_URL +
          API_VISIT_SPREADING +
          `/ActivitySpreadingDPOSM/InsertFileBy?id=${data.id}&namaFile=${data.namaFile}`,
        {
          method: "POST",
          headers: {
            apiKey: TOKEN,
          },
          body: formdata,
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log("balikan inserfile", data);
          return data;
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

const getInvoiceDataSpreading = (visitPlanId) => {
  return fetch(
    API_URL +
      API_VISIT_SPREADING +
      `/ActivitySpreading/GetProdukSuratPesanan/${visitPlanId}`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getInvoiceDataPosmSpreading = (visitUnplanId) => {
  return fetch(
    API_URL +
      API_VISIT_SPREADING +
      `/ActivitySpreadingDPOSM/GetActivityVisitUnPlanDPosmBy/${visitUnplanId}`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var sortData = data.sort(compare);
      return sortData;
    })
    .catch((err) => {
      console.log(err);
    });
};

const viewFileSpreading = (id) => {
  return fetch(
    API_URL + API_VISIT_SPREADING + `/ActivitySpreadingDPOSM/ViewFile/${id}`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.blob();
    })
    .then(function (data) {
      var outside = URL.createObjectURL(data);
      return outside;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getSpreadingMonthlyHistory = (userData) => {
  return fetch(
    API_URL +
      API_VISIT_SPREADING +
      `/ActivitySpreading/GetHistoryActivitySpreadingBy?username=${userData.username}`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.sort(function (a, b) {
        var dateA = new Date(a.tanggal),
          dateB = new Date(b.tanggal);
        return dateB - dateA;
      });
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

// WORK VISIT ================================================================================================================================

const getAllWorkVisit = (userData) => {
  return fetch(
    API_URL +
      API_WORK_VISIT +
      `/ActivityWorkVisit/GetActivityWorkVisitBy?username=${userData.username}`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getWorkVisitMonthlyHistory = (userData) => {
  return fetch(
    API_URL +
      API_WORK_VISIT +
      `/ActivityWorkVisit/GetHistoryActivityWorkVisitBy?username=${userData.username}`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.sort(function (a, b) {
        var dateA = new Date(a.tanggal),
          dateB = new Date(b.tanggal);
        return dateB - dateA;
      });
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
const getWorkVisitRating = (id) => {
  return fetch(
    API_URL +
      API_WORK_VISIT +
      `/ActivityWorkVisitRating/GetActivityWorkVisitRatingBy/${id}`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const submitWorkVisit = (data) => {
  // console.log(data);
  return fetch(
    API_URL + API_WORK_VISIT + "/ActivityWorkVisit/SaveAllActivityWorkVisit",
    {
      method: "POST",
      headers: {
        apiKey: TOKEN,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("baikan saveall", data);
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

// Calendar ================================================================================================================================

const getDayPromo = (date) => {
  return fetch(
    API_URL +
      API_CALENDAR_PROMO +
      `/SakamorInfoPromo/GetInfoPromoByDate/${date}`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getDayProgram = (date) => {
  return fetch(
    API_URL +
      API_CALENDAR_PROGRAM +
      `/SakamorKalenderProgram/GetKalenderProgramByDate/${date}`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getMonthPromo = (date) => {
  return fetch(
    API_URL +
      API_CALENDAR_PROMO +
      `/SakamorInfoPromo/GetInfoPromoByMonthYear/${date}`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getMonthProgram = (date) => {
  return fetch(
    API_URL +
      API_CALENDAR_PROGRAM +
      `/SakamorKalenderProgram/GetKalenderProgramByMonthYear/${date}`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

// Announcement ======================================================================================================================================

const getAllAnnouncement = (userData) => {
  return fetch(
    API_URL +
      API_ANNOUNCEMENT +
      `/SakamorAnnouncement/GetAnnouncementByUser?username=${userData.username}`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateReadAnnouncement = (id, data) => {
  return fetch(
    `https://m-one.kalbe.co.id:8243/t/kalbe.co.id/SakamorAnnouncement/v1/api/SakamorAnnouncement/UpdateAnnouncementStatus/${id}`,
    {
      method: "PUT",
      headers: {
        apiKey: TOKEN,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
};

// INCENTIVE =====================================================================================================================================================================================

const getProduktifitas = (userData, month, year) => {
  return fetch(
    API_URL +
      API_INCENTIVE +
      `/SakamorIncentive/GetProduktifitasByUserPeriode/${month}/${year}?username=${userData.username}`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
const getFrontliner = (userData, month, year) => {
  return fetch(
    API_URL +
      API_INCENTIVE +
      `/Frontliner/GetByUserPeriode/${month}/${year}?username=${userData.username}`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getNoo = (userData, month, year) => {
  return fetch(
    API_URL +
      API_INCENTIVE +
      `/TargetNOO/GetSelsNOOByUserPeriode/${month}/${year}?username=${userData.username}`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
const getWorkDay = () => {
  return fetch(API_URL + API_INCENTIVE + `/SakamorIncentive/GetWorkingDay/01`, {
    headers: {
      apiKey: TOKEN,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getKpiInventiveMonthlySMR = (userData, date) => {
  return fetch(
    // API_URL +
    //   API_INCENTIVE +
    //   `/KpiIncentiveMonthly/GetIncentiveCalculator/2021-07-01/SMR?usernameSMR=${userData.username}`,
    API_URL +
      API_INCENTIVE +
      `/KpiIncentiveMonthly/GetIncentiveCalculator/${moment(date).format(
        "YYYY-MM"
      )}-01/SMR?usernameSMR=${userData.username}`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
const getIncentiveYearly = (userData) => {
  return fetch(
    API_URL +
      API_INCENTIVE +
      `/KpiIncentiveMonthly/GetRekapInsentifBulanan/${moment(now).format(
        "YYYY"
      )}?username=${userData.username}`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

// BENEFIT ==============================================================================================================================================

const getBenefitCodeCabang = (userData) => {
  return fetch(API_URL + API_BENEFIT + `/Benefits/GetBenefitsByKodeCabang/04`, {
    headers: {
      apiKey: TOKEN,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export {
  getMenu,
  getAuth,
  onLogin,
  getProductSearch,
  getSearchJenisChannel,
  getProductAvgSales,
  getSearchOutlet,
  getBrand,
  getProductByJenisChannel,
  getKontenWorkVisit,
  getPlanList,
  getPlanId,
  getPosm,
  getPlanHistory,
  submitVisitPlan,
  submitVisitPlanDposm,
  getInvoiceDataPosm,
  getInvoiceData,
  getPlanMonthlyHistory,
  viewFile,
  submitVisitUnplan,
  submitVisitUnplanDposm,
  getInvoiceDataUnplan,
  getInvoiceDataPosmUnplan,
  getUnplanMonthlyHistory,
  viewFileUnplan,
  getUnplanNearMe,
  submitVisitSpreading,
  submitVisitSpreadingDposm,
  getInvoiceDataSpreading,
  getInvoiceDataPosmSpreading,
  viewFileSpreading,
  getSpreadingMonthlyHistory,
  getAllWorkVisit,
  getWorkVisitMonthlyHistory,
  getWorkVisitRating,
  submitWorkVisit,
  getDayProgram,
  getDayPromo,
  getMonthProgram,
  getMonthPromo,
  getAllAnnouncement,
  updateReadAnnouncement,
  getSalesTargetSMR,
  getSalesTarget75SMR,
  getProduktifitas,
  getFrontliner,
  getNoo,
  getBenefitCodeCabang,
  getWorkDay,
  getKpiInventiveMonthlySMR,
  getIncentiveYearly,
  getMasterVisitPlan,
};
