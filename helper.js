import {
  API_URL,
  API_MASTER,
  API_USER,
  API_VISIT_PLAN,
  API_VISIT_UNPLAN,
  TOKEN,
} from "./constant";

var now = new Date();
var date = now.getDate();
var month = now.getMonth() + 1;
var year = now.getFullYear();

const getMenu = (userData) => {
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
const getPlanList = (userData) => {
  // return fetch(
  //   API_URL +
  //     API_VISIT_PLAN +
  //     `/MasterVisitPlan/GetMasterVisitPlanBy?parameter=${year}-${month}-${date}`,
  //   {
  //     headers: {
  //       apiKey: TOKEN,
  //     },
  //   }
  // )
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     return data;
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
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
const getSearchJenisChannel = (search) => {
  return fetch(
    API_URL + API_MASTER + `/MasterData/GetJenisChannelLike/${search}`,
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

const getProdukByJenisChannel = (jenisChannelId) => {
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
      console.log("balikan psom", data);
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
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
const getInvoiceDataPosmUnplan = (visitPlanId) => {
  return fetch(
    API_URL +
      API_VISIT_UNPLAN +
      `/SakamorActivityVisitUnPlanDPOSM/GetActivityVisitPlanDPosmBy/${visitPlanId}`,
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

const viewFileUnplan = (id) => {
  console.log(id);
  return fetch(
    API_URL + API_VISIT_UNPLAN + `/ActivityVisitUnPlanDPOSM/ViewFile/${id}`,
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

export {
  getMenu,
  getPlanList,
  getAuth,
  onLogin,
  getPlanId,
  getPosm,
  getProductSearch,
  getSearchJenisChannel,
  getPlanHistory,
  submitVisitPlan,
  submitVisitPlanDposm,
  getProdukByJenisChannel,
  getInvoiceData,
  getInvoiceDataUnplan,
  getInvoiceDataPosm,
  getInvoiceDataPosmUnplan,
  getPlanMonthlyHistory,
  getUnplanMonthlyHistory,
  viewFile,
  viewFileUnplan,
};
