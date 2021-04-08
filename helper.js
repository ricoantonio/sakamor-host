import {
  API_URL,
  API_MASTER,
  API_USER,
  API_VISIT_PLAN,
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
  getPlanHistory,
  submitVisitPlan,
  getProdukByJenisChannel,
};
