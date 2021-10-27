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
  API_APPROVAL,
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

const postChangePass = (data) => {
  // console.log(data);
  return fetch(API_URL + API_USER + "/User/ChangePassword", {
    method: "PUT",
    headers: {
      apiKey: TOKEN,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
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

const forgotPassword = (email) => {
  return fetch(API_URL + API_USER + `/User/ForgotPassword?email=${email}`, {
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
const getHnaAvg = (productCode, outletCode) => {
  return fetch(
    API_URL +
      API_MASTER +
      `/MasterDataLokal/GetHnaAndAvgSalesBy/${productCode}/${outletCode}`,
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

const getSearchJenisChannel = (userData, search, modul) => {
  return fetch(
    API_URL +
      API_MASTER +
      `/MasterDataLokal/GetJenisChannelBy?username=${userData.username}&teks=${search}&modul=${modul}`,
    // `/MasterDataLokal/GetJenisChannelBy?username=abubakar&teks=${search}&modul=${modul}`,
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
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getSearchOutlet = (jenisChannelId, userData, search) => {
  return fetch(
    API_URL +
      API_MASTER +
      `/MasterDataLokal/GetOutletBy/${jenisChannelId}?username=${userData.username}&teks=${search}`,
    // `/MasterDataLokal/GetOutletBy/${jenisChannelId}?username=abubakar&teks=${search}`,
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

const getHargaEceran = (produkCode) => {
  return fetch(
    `https://m-one.kalbe.co.id:8243/t/kalbe.co.id/SakamorMasterData/v1/api/MasterDataLokal/GetHargaEceranByKodeProduk/${produkCode}`,
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

const postProfilePic = (userData, file) => {
  const formdata = new FormData();
  formdata.append("file", file);
  return fetch(
    API_URL +
      API_MASTER +
      `/MasterDataLokal/ChangeProfilePicture?username=${userData.username}&createdBy=API&updatedBy=API`,
    {
      method: "PUT",
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
};

const viewProfilePic = (username) => {
  return fetch(
    API_URL +
      API_MASTER +
      `/MasterDataLokal/ViewProfilePicture?username=${username}`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      if (response.status !== 404) {
        return response.blob();
      } else {
        return response;
      }
    })
    .then(function (data) {
      var outside = URL.createObjectURL(data);
      return outside;
    })
    .catch((err) => {
      console.log(err);
    });
};

const viewOutletClass = (outletID) => {
  console.log(outletID);
  return fetch(
    API_URL +
      API_MASTER +
      `/MasterDataLokal/GetOutletClassification/${outletID}`,
    // API_URL + API_MASTER + `/MasterDataLokal/GetOutletClassification/47154`,
    {
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      if (data.status == 404) {
      } else {
        return fetch(
          API_URL + API_MASTER + `/MasterDataLokal/ViewImage/${data.id}`,
          {
            headers: {
              apiKey: TOKEN,
            },
          }
        )
          .then((response) => {
            if (response.status !== 404) {
              return response.blob();
            } else {
              return response;
            }
          })
          .then(function (data) {
            var outside = URL.createObjectURL(data);
            return outside;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const getOutletSpreadingNearMe = (longitude, latitude) => {
  return fetch(
    `https://m-one.kalbe.co.id:8243/t/kalbe.co.id/SakamorMasterData/v1/api/MasterDataLokal/GetOutletSpreadingNearMe?username=lukmanjkt&latitude=${latitude}&longitude=${longitude}`,
    // `https://m-one.kalbe.co.id:8243/t/kalbe.co.id/SakamorMasterData/v1/api/MasterDataLokal/GetOutletSpreadingNearMe?username=lukmanjkt&latitude=-6.20721126&longitude=106.92282457`,
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

const insertOutletSpreading = (data) => {
  // console.log(data);
  return fetch(
    API_URL + API_MASTER + "/MasterDataLokal/InsertOutletSpreading",
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
          // console.log("balikan inserfile", data);
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

const getApproval = (userData) => {
  return fetch(
    API_URL +
      API_VISIT_PLAN +
      // `/ActivityVisitPlan/GetDocumentVisitForApproval/${userData.kodeCabang}`,
      `/ActivityVisitPlan/GetDocumentVisitForApproval/32`,
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

const getRevisePlanListSmr = (userData) => {
  return fetch(
    `https://m-one.kalbe.co.id:8243/t/kalbe.co.id/SakamorActivityVisitPlan/v1/api/ActivityVisitPlan/GetActivityVisitPlanByStatus/Revise?username=${userData.username}`,
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

const deleteMasterPlanSMR = (id) => {
  return fetch(
    API_URL + API_VISIT_PLAN + `/MasterVisitPlan/DeleteMasterVisitPlan/${id}`,
    {
      method: "DELETE",
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

const saveMasterPlanVisit = (data) => {
  // console.log(data);
  return fetch(
    API_URL + API_VISIT_PLAN + "/MasterVisitPlan/SaveActivityVisitPlan",
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

const getPlanById = (id) => {
  return fetch(
    `https://m-one.kalbe.co.id:8243/t/kalbe.co.id/SakamorActivityVisitPlan/v1/api/ActivityVisitPlan/GetActivityVisitPlanById/${id}`,
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

const updateDataPosmPlan = (id, dposm) => {
  return fetch(
    API_URL +
      API_VISIT_PLAN +
      `/ActivityVisitPlanDPOSM/ActivityVisitPlanDPOSM/${id}`,
    {
      method: "PUT",
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
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateDataProdukPlan = (data) => {
  return fetch(
    `https://m-one.kalbe.co.id:8243/t/kalbe.co.id/SakamorActivityVisitPlan/v1/api/ActivityVisitPlanDProduct/UpdateAllVisitPlanProduct`,
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
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const insertFilePlan = (id, file) => {
  const formdata = new FormData();
  formdata.append("file", file);
  return fetch(
    API_URL +
      API_VISIT_PLAN +
      `/ActivityVisitPlanDPOSM/InsertFileBy?id=${id}&namaFile=${file.name}`,
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
      // console.log("balikan inserfile", data);
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getVisitPlanProduct = (id) => {
  return fetch(
    API_URL +
      API_VISIT_PLAN +
      `/ActivityVisitPlanDProduct/GetVisitPlanProductBy?visitPlanId=${id}`,
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

const getRecapOrder = (usernameSMR, dateFrom, dateTo) => {
  return fetch(
    API_URL +
      API_VISIT_PLAN +
      `/ActivityVisitPlan/GetRekapOrder?usernameSMR=abubakar&kodeCabang=32&dateStringFrom=2021-05-12&dateStringTo=2021-9-12`,
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

const getUnplanById = (id) => {
  return fetch(
    `https://m-one.kalbe.co.id:8243/t/kalbe.co.id/SakamorActivityVisitUnPlan/v1/api/SakamorActivityVisitUnPlan/GetActivityVisitUnPlanById/${id}`,
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

const updateDataPosmUnplan = (id, dposm) => {
  return fetch(
    API_URL +
      API_VISIT_UNPLAN +
      `/SakamorActivityVisitUnPlanDPOSM/ActivityVisitUnPlanDPOSM/${id}`,
    {
      method: "PUT",
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
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateDataProdukUnplan = (data) => {
  return fetch(
    API_URL +
      API_VISIT_UNPLAN +
      `/SakamorActivityVisitUnPlanProduct/UpdateAllUnPlanProduct`,
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
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const insertFileUnplan = (id, file) => {
  const formdata = new FormData();

  formdata.append("file", file);
  return fetch(
    API_URL +
      API_VISIT_UNPLAN +
      `/SakamorActivityVisitUnPlanDPOSM/InsertFileBy?id=${id}&namaFile=${file.name}`,
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

const getReviseUnPlanListSmr = (userData) => {
  return fetch(
    `https://m-one.kalbe.co.id:8243/t/kalbe.co.id/SakamorActivityVisitUnPlan/v1/api/SakamorActivityVisitUnPlan/GetActivityVisitUnPlanByStatus/revise?username=${userData.username}`,
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

const getUnPlanProducts = (id) => {
  return fetch(
    API_URL +
      API_VISIT_UNPLAN +
      `/SakamorActivityVisitUnPlanProduct/GetUnPlanProductsBy?unPlanId=${id}`,
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

const getSpreadingById = (id) => {
  return fetch(
    API_URL +
      API_VISIT_SPREADING +
      `/ActivitySpreading/GetActivitySpreadingById/${id}`,
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

const getReviseSpreadingListSmr = (userData) => {
  return fetch(
    `https://m-one.kalbe.co.id:8243/t/kalbe.co.id/SakamorActivitySpreading/v1/api/ActivitySpreading/GetActivitySpreadingByStatus/Revise?username=${userData.username}`,
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

const updateDataPosmSpreading = (id, dposm) => {
  return fetch(
    API_URL +
      API_VISIT_SPREADING +
      `/ActivitySpreadingDPOSM/ActivitySpreadingDposm/${id}`,
    {
      method: "PUT",
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
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateDataProdukSpreading = (data) => {
  return fetch(
    API_URL +
      API_VISIT_SPREADING +
      `/ActivitySpreadingDProduct/UpdateAllSpreadingProduct`,
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
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const insertFileSpreading = (id, file) => {
  const formdata = new FormData();

  formdata.append("file", file);
  return fetch(
    API_URL +
      API_VISIT_SPREADING +
      `/ActivitySpreadingDPOSM/InsertFileBy?id=${id}&namaFile=${file.name}`,
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
};

const getSpreadingProduct = (id) => {
  return fetch(
    API_URL +
      API_VISIT_SPREADING +
      `/ActivitySpreadingDProduct/GetSpreadingProductBy?spreadingId=${id}`,
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

const getMasterWorkVisit = (userData, date) => {
  return fetch(
    API_URL +
      API_WORK_VISIT +
      `/MasterPlanWorkVisit/GetMasterPlanWorkVisitBy/${date}?username=${userData.username}`,
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

const saveMasterWorkVisit = (data) => {
  // console.log(data);
  return fetch(
    API_URL + API_WORK_VISIT + "/MasterPlanWorkVisit/SaveMasterPlanWorkVisit",
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

const deleteMasterWorkVisit = (id) => {
  return fetch(
    API_URL +
      API_WORK_VISIT +
      `/MasterPlanWorkVisit/DeleteMasterPlanWorkVisit/${id}`,
    {
      method: "DELETE",
      headers: {
        apiKey: TOKEN,
      },
    }
  )
    .then((response) => {
      return console.log(response);
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

const getAllAnnouncement = (kodeCabang) => {
  return fetch(
    API_URL +
      API_ANNOUNCEMENT +
      // `/SakamorAnnouncement/GetAnnouncementByUser?username=${userData.username}`,
      `/SakamorAnnouncement/GetAnnouncementByCabang/${kodeCabang}`,
    // `/SakamorAnnouncement/GetAnnouncementByCabang/14`,
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

const getKpiInventiveMonthlyPimca = (userData, date) => {
  return fetch(
    API_URL +
      API_INCENTIVE +
      `/KpiIncentiveMonthly/IncentiveCalculatorPimca/${
        userData.kodeCabang
      }/${moment(date).format("YYYY-MM")}-01/ABM`,
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

const getSalesTargetPimca = (userData, month, year) => {
  return fetch(
    API_URL +
      API_MASTER +
      `/MasterDataLokal/GetSalesTargetPimcaByCabang/${userData.kodeCabang}/${year}/${month}`,
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

const getSalesTarget75Pimca = (userData, month, year) => {
  return fetch(
    API_URL +
      API_MASTER +
      `/MasterDataLokal/GetSalesTargetPimca75ByCabang/${userData.kodeCabang}/${year}/${month}`,
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

const getFrontlinerPimca = (userData, month, year) => {
  return fetch(
    API_URL +
      API_INCENTIVE +
      `/Frontliner/GetFrontlinerPimca/${userData.kodeCabang}/${month}/${year}`,
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

const getSmrByCabang = (cabang, teks) => {
  return fetch(
    API_URL +
      API_MASTER +
      // `/MasterDataLokal/GetSmrOutletByCabang/${cabang}?teks=${teks}`,
      `/MasterDataLokal/GetSmrByCabang/${cabang}?teks=${teks}`,
    // `/MasterDataLokal/GetSmrOutletByCabang/14?teks=${teks}`,
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
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getNotificationbyUsername = (username) => {
  return fetch(
    API_URL +
      API_MASTER +
      // `/MasterDataLokal/GetNotifikasiByUser?username=dian%40gmail.com`,
      `/MasterDataLokal/GetNotifikasiByUser?username=${username}`,
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
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getPimcaByCabang = (userData) => {
  return fetch(
    `https://m-one.kalbe.co.id:8243/t/kalbe.co.id/SakamorMasterData/v1/api/MasterDataLokal/GetPimcaBy/${userData.kodeCabang}`,
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
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

// BENEFIT ==============================================================================================================================================

const getBenefitCodeCabang = (userData) => {
  return fetch(
    API_URL +
      API_BENEFIT +
      `/Benefits/GetBenefitsByKodeCabang/${userData.kodeCabang}`,
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

// APPROVAL ==============================================================================================================================================

const approvalReject = (data, modul, id, userData) => {
  // console.log(data);
  return fetch(API_URL + API_APPROVAL + "/approval/transaction/Reject", {
    method: "PUT",
    headers: {
      apiKey: TOKEN,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (modul === "Plan") {
        return fetch(
          API_URL +
            API_VISIT_PLAN +
            `/ActivityVisitPlan/UpdateStatusVisitPlan/${id}?status=Rejected&updatedBy=${userData.username}`,
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
            return response.json();
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (modul === "UnPlan") {
        return fetch(
          // API_URL +
          //   API_VISIT_PLAN +
          //   `/ActivityVisitPlan/UpdateStatusVisitPlan/${id}?status=Rejected&updatedBy=${userData.username}`,
          `https://m-one.kalbe.co.id:8243/t/kalbe.co.id/SakamorActivityVisitUnPlan/v1/api/SakamorActivityVisitUnPlan/UpdateStatusVisitUnPlan/${id}?status=Rejected&updatedBy=${userData.username}`,

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
            return response.json();
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (modul === "Spreading") {
        return fetch(
          `https://m-one.kalbe.co.id:8243/t/kalbe.co.id/SakamorActivitySpreading/v1/api/ActivitySpreading/UpdateStatusSpreading/${id}?status=Rejected&updatedBy=${userData.username}`,
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
            return response.json();
          })
          .catch((err) => {
            console.log(err);
          });
      }
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

const approvalRevise = (data, modul, id, userData) => {
  // console.log(data);
  return fetch(API_URL + API_APPROVAL + "/approval/transaction/Reject", {
    method: "PUT",
    headers: {
      apiKey: TOKEN,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (modul === "Plan") {
        return fetch(
          API_URL +
            API_VISIT_PLAN +
            `/ActivityVisitPlan/UpdateStatusVisitPlan/${id}?status=Revise&updatedBy=${userData.username}`,
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
            return response.json();
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (modul === "UnPlan") {
        return fetch(
          // API_URL +
          //   API_VISIT_PLAN +
          //   `/ActivityVisitPlan/UpdateStatusVisitPlan/${id}?status=Revise&updatedBy=${userData.username}`,
          `https://m-one.kalbe.co.id:8243/t/kalbe.co.id/SakamorActivityVisitUnPlan/v1/api/SakamorActivityVisitUnPlan/UpdateStatusVisitUnPlan/${id}?status=Revise&updatedBy=${userData.username}`,
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
            return response.json();
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (modul === "Spreading") {
        return fetch(
          `https://m-one.kalbe.co.id:8243/t/kalbe.co.id/SakamorActivitySpreading/v1/api/ActivitySpreading/UpdateStatusSpreading/${id}?status=Revise&updatedBy=${userData.username}`,
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
            return response.json();
          })
          .catch((err) => {
            console.log(err);
          });
      }
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

const approvalApprove = (data, modul, id, userData) => {
  // console.log(data);
  return fetch(API_URL + API_APPROVAL + "/approval/transaction/Approve", {
    method: "PUT",
    headers: {
      apiKey: TOKEN,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (modul === "Plan") {
        return fetch(
          API_URL +
            API_VISIT_PLAN +
            `/ActivityVisitPlan/UpdateStatusVisitPlan/${id}?status=Approved&updatedBy=${userData.username}`,
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
            return response.json();
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (modul === "UnPlan") {
        return fetch(
          // API_URL +
          //   API_VISIT_PLAN +
          //   `/ActivityVisitPlan/UpdateStatusVisitPlan/${id}?status=Approved&updatedBy=${userData.username}`,
          `https://m-one.kalbe.co.id:8243/t/kalbe.co.id/SakamorActivityVisitUnPlan/v1/api/SakamorActivityVisitUnPlan/UpdateStatusVisitUnPlan/${id}?status=Approved&updatedBy=${userData.username}`,
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
            return response.json();
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (modul === "Spreading") {
        return fetch(
          // API_URL +
          //   API_VISIT_PLAN +
          //   `/ActivityVisitPlan/UpdateStatusVisitPlan/${id}?status=Approved&updatedBy=${userData.username}`,
          `https://m-one.kalbe.co.id:8243/t/kalbe.co.id/SakamorActivitySpreading/v1/api/ActivitySpreading/UpdateStatusSpreading/${id}?status=Approved&updatedBy=${userData.username}`,
          {
            method: "PUT",
            headers: {
              apiKey: TOKEN,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            // body: JSON.stringify(data),
          }
        )
          .then((response) => {
            return response.json();
          })
          .catch((err) => {
            console.log(err);
          });
      }
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

const approvalSubmit = (data, id, userData) => {
  return fetch(
    `https://m-one.kalbe.co.id:8243/t/kalbe.co.id/ApprovalAPI/v1/api/approval/transaction/Submit`,
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
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
      setWrongUser(true);
    });
};

export {
  // USER
  getMenu,
  getAuth,
  onLogin,
  postChangePass,
  forgotPassword,
  // MASTER
  getProductSearch,
  getSearchJenisChannel,
  getProductAvgSales,
  getSearchOutlet,
  getBrand,
  getProductByJenisChannel,
  getKontenWorkVisit,
  getHnaAvg,
  postProfilePic,
  viewProfilePic,
  getSmrByCabang,
  viewOutletClass,
  getNotificationbyUsername,
  getPimcaByCabang,
  getHargaEceran,
  getOutletSpreadingNearMe,
  insertOutletSpreading,
  // VISIT PLAN
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
  getMasterVisitPlan,
  deleteMasterPlanSMR,
  saveMasterPlanVisit,
  getApproval,
  getPlanById,
  getRevisePlanListSmr,
  updateDataPosmPlan,
  updateDataProdukPlan,
  insertFilePlan,
  getVisitPlanProduct,
  getRecapOrder,
  // VISIT UNPLAN
  submitVisitUnplan,
  submitVisitUnplanDposm,
  getInvoiceDataUnplan,
  getInvoiceDataPosmUnplan,
  getUnplanMonthlyHistory,
  viewFileUnplan,
  getUnplanNearMe,
  getUnplanById,
  getReviseUnPlanListSmr,
  updateDataPosmUnplan,
  updateDataProdukUnplan,
  insertFileUnplan,
  getUnPlanProducts,
  // SPREADING
  submitVisitSpreading,
  submitVisitSpreadingDposm,
  getInvoiceDataSpreading,
  getInvoiceDataPosmSpreading,
  viewFileSpreading,
  getSpreadingMonthlyHistory,
  getSpreadingById,
  getReviseSpreadingListSmr,
  updateDataPosmSpreading,
  updateDataProdukSpreading,
  insertFileSpreading,
  getSpreadingProduct,
  // WORK VISIT
  getAllWorkVisit,
  getWorkVisitMonthlyHistory,
  getWorkVisitRating,
  submitWorkVisit,
  getMasterWorkVisit,
  saveMasterWorkVisit,
  deleteMasterWorkVisit,
  // Calendar
  getDayProgram,
  getDayPromo,
  getMonthProgram,
  getMonthPromo,
  // Announcement
  getAllAnnouncement,
  updateReadAnnouncement,
  // INCENTIVE
  getSalesTargetSMR,
  getSalesTarget75SMR,
  getProduktifitas,
  getFrontliner,
  getNoo,
  getWorkDay,
  getKpiInventiveMonthlySMR,
  getKpiInventiveMonthlyPimca,
  getIncentiveYearly,
  getSalesTargetPimca,
  getSalesTarget75Pimca,
  getFrontlinerPimca,
  // BENEFIT
  getBenefitCodeCabang,
  // APPROVAL
  approvalReject,
  approvalRevise,
  approvalApprove,
  approvalSubmit,
};
