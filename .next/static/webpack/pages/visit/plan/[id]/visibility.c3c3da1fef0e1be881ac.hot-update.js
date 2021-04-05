webpackHotUpdate_N_E("pages/visit/plan/[id]/visibility",{

/***/ "./helper.js":
/*!*******************!*\
  !*** ./helper.js ***!
  \*******************/
/*! exports provided: getMenu, getPlanList, getAuth, onLogin, getPlanId, getPosm, getProductSearch, getPlanHistory, submitVisitPlan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMenu", function() { return getMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlanList", function() { return getPlanList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuth", function() { return getAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLogin", function() { return onLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlanId", function() { return getPlanId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosm", function() { return getPosm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductSearch", function() { return getProductSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlanHistory", function() { return getPlanHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitVisitPlan", function() { return submitVisitPlan; });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./constant.js");

var now = new Date();
var date = now.getDate();
var month = now.getMonth() + 1;
var year = now.getFullYear();

var getMenu = function getMenu(userData) {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_USER"] + "/User/GetMenu?username=".concat(userData.email), {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
    }
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return data;
  })["catch"](function (err) {
    console.log(err);
  });
};

var getPlanList = function getPlanList(userData) {
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_VISIT_PLAN"] + "/ActivityVisitPlan/GetActivityVisitPlanBy?username=".concat(userData.username), {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
    }
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    var res = data.filter(function (val) {
      return val.isCheckOut === false;
    });
    return res;
  })["catch"](function (err) {
    console.log(err);
  });
};

var getAuth = function getAuth(userData) {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_USER"] + "/User/GetAuthorize?username=".concat(userData.username), {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
    }
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return data;
  })["catch"](function (err) {
    console.log(err);
  });
};

var onLogin = function onLogin(values) {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_USER"] + "/User/Login?username=".concat(values.username, "&&password=").concat(values.password), {
    method: "POST",
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
    }
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return data;
  })["catch"](function (err) {
    console.log(err);
    setWrongUser(true);
  });
};

var getPlanId = function getPlanId(id) {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_VISIT_PLAN"] + "/MasterVisitPlan/GetMasterVisitPlanBy?parameter=".concat(year, "-").concat(month, "-").concat(date), {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
    }
  }).then(function (response) {
    return response.json();
  }).then(function (planList) {
    if (planList.length != 0) {
      return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_VISIT_PLAN"] + "/MasterVisitPlan/GetMasterVisitPlanById/".concat(id), {
        headers: {
          apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        var samePlan = planList.filter(function (val) {
          return val.id === data.id;
        });
        return {
          samePlan: samePlan,
          data: data
        };
      })["catch"](function (err) {
        console.log(err);
      });
    } else {
      return planList;
    }
  })["catch"](function (err) {
    console.log(err);
  });
};

var getPosm = function getPosm() {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_VISIT_PLAN"] + "/ActivityVisitPlanDPOSM/GetAllActivityVisitPlanDposm", {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
    }
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return data;
  })["catch"](function (err) {
    console.log(err);
  });
};

var getProductSearch = function getProductSearch(search) {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_MASTER"] + "/MasterData/GetProdukLike/".concat(search), {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
    }
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return data;
  })["catch"](function (err) {
    console.log(err);
  });
};

var getPlanHistory = function getPlanHistory(userData) {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_VISIT_PLAN"] + "/ActivityVisitPlan/GetActivityVisitPlanBy?username=".concat(userData.username), {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
    }
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    var res = data.filter(function (val) {
      return val.isCheckOut === true;
    });
    return res;
  })["catch"](function (err) {
    console.log(err);
  });
};

var submitVisitPlan = function submitVisitPlan(data) {
  console.log(data);
  var exp = {
    avp: {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      idMasterPlanVisit: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      nomorDokumen: "string",
      catatan: "string",
      isCheckIn: true,
      checkInDate: "2021-04-05T10:33:57.451Z",
      isCheckOut: true,
      checkOutDate: "2021-04-05T10:33:57.451Z",
      createdBy: "string",
      updatedBy: "string"
    },
    dposmList: [{
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      activityVisitPlanId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      nomorDokumen: "string",
      nomor: 0,
      tipe: "string",
      namaFile: "string",
      createdBy: "string",
      updatedBy: "string"
    }, {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      activityVisitPlanId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      nomorDokumen: "string",
      nomor: 0,
      tipe: "string",
      namaFile: "string",
      createdBy: "string",
      updatedBy: "string"
    }, {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      activityVisitPlanId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      nomorDokumen: "string",
      nomor: 0,
      tipe: "string",
      namaFile: "string",
      createdBy: "string",
      updatedBy: "string"
    }, {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      activityVisitPlanId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      nomorDokumen: "string",
      nomor: 0,
      tipe: "string",
      namaFile: "string",
      createdBy: "string",
      updatedBy: "string"
    }, {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      activityVisitPlanId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      nomorDokumen: "string",
      nomor: 0,
      tipe: "string",
      namaFile: "string",
      createdBy: "string",
      updatedBy: "string"
    }, {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      activityVisitPlanId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      nomorDokumen: "string",
      nomor: 0,
      tipe: "string",
      namaFile: "string",
      createdBy: "string",
      updatedBy: "string"
    }],
    dProductList: [{
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      activityVisitPlanId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      nomorDokumen: "string",
      nomor: 0,
      kodeProduk: "string",
      namaProduk: "string",
      stok: 0,
      saranOrder: 0,
      jumlahOrder: 0,
      createdBy: "string",
      updatedBy: "string"
    }, {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      activityVisitPlanId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      nomorDokumen: "string",
      nomor: 0,
      kodeProduk: "string",
      namaProduk: "string",
      stok: 0,
      saranOrder: 0,
      jumlahOrder: 0,
      createdBy: "string",
      updatedBy: "string"
    }, {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      activityVisitPlanId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      nomorDokumen: "string",
      nomor: 0,
      kodeProduk: "string",
      namaProduk: "string",
      stok: 0,
      saranOrder: 0,
      jumlahOrder: 0,
      createdBy: "string",
      updatedBy: "string"
    }, {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      activityVisitPlanId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      nomorDokumen: "string",
      nomor: 0,
      kodeProduk: "string",
      namaProduk: "string",
      stok: 0,
      saranOrder: 0,
      jumlahOrder: 0,
      createdBy: "string",
      updatedBy: "string"
    }]
  };
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_VISIT_PLAN"] + "/ActivityVisitPlan/SaveAllActivityVisitPlan", {
    method: "POST",
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"],
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return data;
  })["catch"](function (err) {
    console.log(err);
  });
};



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVyLmpzIl0sIm5hbWVzIjpbIm5vdyIsIkRhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJnZXRNZW51IiwidXNlckRhdGEiLCJmZXRjaCIsIkFQSV9VUkwiLCJBUElfVVNFUiIsImVtYWlsIiwiaGVhZGVycyIsImFwaUtleSIsIlRPS0VOIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZ2V0UGxhbkxpc3QiLCJBUElfVklTSVRfUExBTiIsInVzZXJuYW1lIiwicmVzIiwiZmlsdGVyIiwidmFsIiwiaXNDaGVja091dCIsImdldEF1dGgiLCJvbkxvZ2luIiwidmFsdWVzIiwicGFzc3dvcmQiLCJtZXRob2QiLCJzZXRXcm9uZ1VzZXIiLCJnZXRQbGFuSWQiLCJpZCIsInBsYW5MaXN0IiwibGVuZ3RoIiwic2FtZVBsYW4iLCJnZXRQb3NtIiwiZ2V0UHJvZHVjdFNlYXJjaCIsInNlYXJjaCIsIkFQSV9NQVNURVIiLCJnZXRQbGFuSGlzdG9yeSIsInN1Ym1pdFZpc2l0UGxhbiIsImV4cCIsImF2cCIsImlkTWFzdGVyUGxhblZpc2l0Iiwibm9tb3JEb2t1bWVuIiwiY2F0YXRhbiIsImlzQ2hlY2tJbiIsImNoZWNrSW5EYXRlIiwiY2hlY2tPdXREYXRlIiwiY3JlYXRlZEJ5IiwidXBkYXRlZEJ5IiwiZHBvc21MaXN0IiwiYWN0aXZpdHlWaXNpdFBsYW5JZCIsIm5vbW9yIiwidGlwZSIsIm5hbWFGaWxlIiwiZFByb2R1Y3RMaXN0Iiwia29kZVByb2R1ayIsIm5hbWFQcm9kdWsiLCJzdG9rIiwic2FyYW5PcmRlciIsImp1bWxhaE9yZGVyIiwiQWNjZXB0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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V0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxHQWRJLEVBZUpGLElBZkksQ0FlQyxVQUFDRyxJQUFELEVBQVU7QUFDZCxXQUFPQSxJQUFQO0FBQ0QsR0FqQkksV0FrQkUsVUFBQ0MsR0FBRCxFQUFTO0FBQ2RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0QsR0FwQkksQ0FBUDtBQXFCRCxDQXpKRDs7QUEySkEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmlzaXQvcGxhbi9baWRdL3Zpc2liaWxpdHkuYzNjM2RhMWZlZjBlMWJlODgxYWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQVBJX1VSTCxcclxuICBBUElfTUFTVEVSLFxyXG4gIEFQSV9VU0VSLFxyXG4gIEFQSV9WSVNJVF9QTEFOLFxyXG4gIFRPS0VOLFxyXG59IGZyb20gXCIuL2NvbnN0YW50XCI7XHJcblxyXG52YXIgbm93ID0gbmV3IERhdGUoKTtcclxudmFyIGRhdGUgPSBub3cuZ2V0RGF0ZSgpO1xyXG52YXIgbW9udGggPSBub3cuZ2V0TW9udGgoKSArIDE7XHJcbnZhciB5ZWFyID0gbm93LmdldEZ1bGxZZWFyKCk7XHJcblxyXG5jb25zdCBnZXRNZW51ID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArIEFQSV9VU0VSICsgYC9Vc2VyL0dldE1lbnU/dXNlcm5hbWU9JHt1c2VyRGF0YS5lbWFpbH1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcbmNvbnN0IGdldFBsYW5MaXN0ID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgLy8gcmV0dXJuIGZldGNoKFxyXG4gIC8vICAgQVBJX1VSTCArXHJcbiAgLy8gICAgIEFQSV9WSVNJVF9QTEFOICtcclxuICAvLyAgICAgYC9NYXN0ZXJWaXNpdFBsYW4vR2V0TWFzdGVyVmlzaXRQbGFuQnk/cGFyYW1ldGVyPSR7eWVhcn0tJHttb250aH0tJHtkYXRlfWAsXHJcbiAgLy8gICB7XHJcbiAgLy8gICAgIGhlYWRlcnM6IHtcclxuICAvLyAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgfVxyXG4gIC8vIClcclxuICAvLyAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gIC8vICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gIC8vICAgfSlcclxuICAvLyAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgLy8gICAgIHJldHVybiBkYXRhO1xyXG4gIC8vICAgfSlcclxuICAvLyAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgLy8gICB9KTtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1BMQU4gK1xyXG4gICAgICBgL0FjdGl2aXR5VmlzaXRQbGFuL0dldEFjdGl2aXR5VmlzaXRQbGFuQnk/dXNlcm5hbWU9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICB2YXIgcmVzID0gZGF0YS5maWx0ZXIoKHZhbCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB2YWwuaXNDaGVja091dCA9PT0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcmVzO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldEF1dGggPSAodXNlckRhdGEpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICsgQVBJX1VTRVIgKyBgL1VzZXIvR2V0QXV0aG9yaXplP3VzZXJuYW1lPSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3Qgb25Mb2dpbiA9ICh2YWx1ZXMpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1VTRVIgK1xyXG4gICAgICBgL1VzZXIvTG9naW4/dXNlcm5hbWU9JHt2YWx1ZXMudXNlcm5hbWV9JiZwYXNzd29yZD0ke3ZhbHVlcy5wYXNzd29yZH1gLFxyXG4gICAge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICBzZXRXcm9uZ1VzZXIodHJ1ZSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBsYW5JZCA9IChpZCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfUExBTiArXHJcbiAgICAgIGAvTWFzdGVyVmlzaXRQbGFuL0dldE1hc3RlclZpc2l0UGxhbkJ5P3BhcmFtZXRlcj0ke3llYXJ9LSR7bW9udGh9LSR7ZGF0ZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigocGxhbkxpc3QpID0+IHtcclxuICAgICAgaWYgKHBsYW5MaXN0Lmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKFxyXG4gICAgICAgICAgQVBJX1VSTCArXHJcbiAgICAgICAgICAgIEFQSV9WSVNJVF9QTEFOICtcclxuICAgICAgICAgICAgYC9NYXN0ZXJWaXNpdFBsYW4vR2V0TWFzdGVyVmlzaXRQbGFuQnlJZC8ke2lkfWAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBzYW1lUGxhbiA9IHBsYW5MaXN0LmZpbHRlcigodmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbC5pZCA9PT0gZGF0YS5pZDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4geyBzYW1lUGxhbiwgZGF0YSB9O1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcGxhbkxpc3Q7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRQb3NtID0gKCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfUExBTiArXHJcbiAgICAgIGAvQWN0aXZpdHlWaXNpdFBsYW5EUE9TTS9HZXRBbGxBY3Rpdml0eVZpc2l0UGxhbkRwb3NtYCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UHJvZHVjdFNlYXJjaCA9IChzZWFyY2gpID0+IHtcclxuICByZXR1cm4gZmV0Y2goQVBJX1VSTCArIEFQSV9NQVNURVIgKyBgL01hc3RlckRhdGEvR2V0UHJvZHVrTGlrZS8ke3NlYXJjaH1gLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRQbGFuSGlzdG9yeSA9ICh1c2VyRGF0YSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfUExBTiArXHJcbiAgICAgIGAvQWN0aXZpdHlWaXNpdFBsYW4vR2V0QWN0aXZpdHlWaXNpdFBsYW5CeT91c2VybmFtZT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHZhciByZXMgPSBkYXRhLmZpbHRlcigodmFsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHZhbC5pc0NoZWNrT3V0ID09PSB0cnVlO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHJlcztcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBzdWJtaXRWaXNpdFBsYW4gPSAoZGF0YSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIHZhciBleHAgPSB7XHJcbiAgICBhdnA6IHtcclxuICAgICAgaWQ6IFwiM2ZhODVmNjQtNTcxNy00NTYyLWIzZmMtMmM5NjNmNjZhZmE2XCIsXHJcbiAgICAgIGlkTWFzdGVyUGxhblZpc2l0OiBcIjNmYTg1ZjY0LTU3MTctNDU2Mi1iM2ZjLTJjOTYzZjY2YWZhNlwiLFxyXG4gICAgICBub21vckRva3VtZW46IFwic3RyaW5nXCIsXHJcbiAgICAgIGNhdGF0YW46IFwic3RyaW5nXCIsXHJcbiAgICAgIGlzQ2hlY2tJbjogdHJ1ZSxcclxuICAgICAgY2hlY2tJbkRhdGU6IFwiMjAyMS0wNC0wNVQxMDozMzo1Ny40NTFaXCIsXHJcbiAgICAgIGlzQ2hlY2tPdXQ6IHRydWUsXHJcbiAgICAgIGNoZWNrT3V0RGF0ZTogXCIyMDIxLTA0LTA1VDEwOjMzOjU3LjQ1MVpcIixcclxuICAgICAgY3JlYXRlZEJ5OiBcInN0cmluZ1wiLFxyXG4gICAgICB1cGRhdGVkQnk6IFwic3RyaW5nXCIsXHJcbiAgICB9LFxyXG4gICAgZHBvc21MaXN0OiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCIzZmE4NWY2NC01NzE3LTQ1NjItYjNmYy0yYzk2M2Y2NmFmYTZcIixcclxuICAgICAgICBhY3Rpdml0eVZpc2l0UGxhbklkOiBcIjNmYTg1ZjY0LTU3MTctNDU2Mi1iM2ZjLTJjOTYzZjY2YWZhNlwiLFxyXG4gICAgICAgIG5vbW9yRG9rdW1lbjogXCJzdHJpbmdcIixcclxuICAgICAgICBub21vcjogMCxcclxuICAgICAgICB0aXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIG5hbWFGaWxlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIGNyZWF0ZWRCeTogXCJzdHJpbmdcIixcclxuICAgICAgICB1cGRhdGVkQnk6IFwic3RyaW5nXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCIzZmE4NWY2NC01NzE3LTQ1NjItYjNmYy0yYzk2M2Y2NmFmYTZcIixcclxuICAgICAgICBhY3Rpdml0eVZpc2l0UGxhbklkOiBcIjNmYTg1ZjY0LTU3MTctNDU2Mi1iM2ZjLTJjOTYzZjY2YWZhNlwiLFxyXG4gICAgICAgIG5vbW9yRG9rdW1lbjogXCJzdHJpbmdcIixcclxuICAgICAgICBub21vcjogMCxcclxuICAgICAgICB0aXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIG5hbWFGaWxlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIGNyZWF0ZWRCeTogXCJzdHJpbmdcIixcclxuICAgICAgICB1cGRhdGVkQnk6IFwic3RyaW5nXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCIzZmE4NWY2NC01NzE3LTQ1NjItYjNmYy0yYzk2M2Y2NmFmYTZcIixcclxuICAgICAgICBhY3Rpdml0eVZpc2l0UGxhbklkOiBcIjNmYTg1ZjY0LTU3MTctNDU2Mi1iM2ZjLTJjOTYzZjY2YWZhNlwiLFxyXG4gICAgICAgIG5vbW9yRG9rdW1lbjogXCJzdHJpbmdcIixcclxuICAgICAgICBub21vcjogMCxcclxuICAgICAgICB0aXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIG5hbWFGaWxlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIGNyZWF0ZWRCeTogXCJzdHJpbmdcIixcclxuICAgICAgICB1cGRhdGVkQnk6IFwic3RyaW5nXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCIzZmE4NWY2NC01NzE3LTQ1NjItYjNmYy0yYzk2M2Y2NmFmYTZcIixcclxuICAgICAgICBhY3Rpdml0eVZpc2l0UGxhbklkOiBcIjNmYTg1ZjY0LTU3MTctNDU2Mi1iM2ZjLTJjOTYzZjY2YWZhNlwiLFxyXG4gICAgICAgIG5vbW9yRG9rdW1lbjogXCJzdHJpbmdcIixcclxuICAgICAgICBub21vcjogMCxcclxuICAgICAgICB0aXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIG5hbWFGaWxlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIGNyZWF0ZWRCeTogXCJzdHJpbmdcIixcclxuICAgICAgICB1cGRhdGVkQnk6IFwic3RyaW5nXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCIzZmE4NWY2NC01NzE3LTQ1NjItYjNmYy0yYzk2M2Y2NmFmYTZcIixcclxuICAgICAgICBhY3Rpdml0eVZpc2l0UGxhbklkOiBcIjNmYTg1ZjY0LTU3MTctNDU2Mi1iM2ZjLTJjOTYzZjY2YWZhNlwiLFxyXG4gICAgICAgIG5vbW9yRG9rdW1lbjogXCJzdHJpbmdcIixcclxuICAgICAgICBub21vcjogMCxcclxuICAgICAgICB0aXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIG5hbWFGaWxlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIGNyZWF0ZWRCeTogXCJzdHJpbmdcIixcclxuICAgICAgICB1cGRhdGVkQnk6IFwic3RyaW5nXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCIzZmE4NWY2NC01NzE3LTQ1NjItYjNmYy0yYzk2M2Y2NmFmYTZcIixcclxuICAgICAgICBhY3Rpdml0eVZpc2l0UGxhbklkOiBcIjNmYTg1ZjY0LTU3MTctNDU2Mi1iM2ZjLTJjOTYzZjY2YWZhNlwiLFxyXG4gICAgICAgIG5vbW9yRG9rdW1lbjogXCJzdHJpbmdcIixcclxuICAgICAgICBub21vcjogMCxcclxuICAgICAgICB0aXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIG5hbWFGaWxlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIGNyZWF0ZWRCeTogXCJzdHJpbmdcIixcclxuICAgICAgICB1cGRhdGVkQnk6IFwic3RyaW5nXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgZFByb2R1Y3RMaXN0OiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCIzZmE4NWY2NC01NzE3LTQ1NjItYjNmYy0yYzk2M2Y2NmFmYTZcIixcclxuICAgICAgICBhY3Rpdml0eVZpc2l0UGxhbklkOiBcIjNmYTg1ZjY0LTU3MTctNDU2Mi1iM2ZjLTJjOTYzZjY2YWZhNlwiLFxyXG4gICAgICAgIG5vbW9yRG9rdW1lbjogXCJzdHJpbmdcIixcclxuICAgICAgICBub21vcjogMCxcclxuICAgICAgICBrb2RlUHJvZHVrOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIG5hbWFQcm9kdWs6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgc3RvazogMCxcclxuICAgICAgICBzYXJhbk9yZGVyOiAwLFxyXG4gICAgICAgIGp1bWxhaE9yZGVyOiAwLFxyXG4gICAgICAgIGNyZWF0ZWRCeTogXCJzdHJpbmdcIixcclxuICAgICAgICB1cGRhdGVkQnk6IFwic3RyaW5nXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCIzZmE4NWY2NC01NzE3LTQ1NjItYjNmYy0yYzk2M2Y2NmFmYTZcIixcclxuICAgICAgICBhY3Rpdml0eVZpc2l0UGxhbklkOiBcIjNmYTg1ZjY0LTU3MTctNDU2Mi1iM2ZjLTJjOTYzZjY2YWZhNlwiLFxyXG4gICAgICAgIG5vbW9yRG9rdW1lbjogXCJzdHJpbmdcIixcclxuICAgICAgICBub21vcjogMCxcclxuICAgICAgICBrb2RlUHJvZHVrOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIG5hbWFQcm9kdWs6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgc3RvazogMCxcclxuICAgICAgICBzYXJhbk9yZGVyOiAwLFxyXG4gICAgICAgIGp1bWxhaE9yZGVyOiAwLFxyXG4gICAgICAgIGNyZWF0ZWRCeTogXCJzdHJpbmdcIixcclxuICAgICAgICB1cGRhdGVkQnk6IFwic3RyaW5nXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCIzZmE4NWY2NC01NzE3LTQ1NjItYjNmYy0yYzk2M2Y2NmFmYTZcIixcclxuICAgICAgICBhY3Rpdml0eVZpc2l0UGxhbklkOiBcIjNmYTg1ZjY0LTU3MTctNDU2Mi1iM2ZjLTJjOTYzZjY2YWZhNlwiLFxyXG4gICAgICAgIG5vbW9yRG9rdW1lbjogXCJzdHJpbmdcIixcclxuICAgICAgICBub21vcjogMCxcclxuICAgICAgICBrb2RlUHJvZHVrOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIG5hbWFQcm9kdWs6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgc3RvazogMCxcclxuICAgICAgICBzYXJhbk9yZGVyOiAwLFxyXG4gICAgICAgIGp1bWxhaE9yZGVyOiAwLFxyXG4gICAgICAgIGNyZWF0ZWRCeTogXCJzdHJpbmdcIixcclxuICAgICAgICB1cGRhdGVkQnk6IFwic3RyaW5nXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCIzZmE4NWY2NC01NzE3LTQ1NjItYjNmYy0yYzk2M2Y2NmFmYTZcIixcclxuICAgICAgICBhY3Rpdml0eVZpc2l0UGxhbklkOiBcIjNmYTg1ZjY0LTU3MTctNDU2Mi1iM2ZjLTJjOTYzZjY2YWZhNlwiLFxyXG4gICAgICAgIG5vbW9yRG9rdW1lbjogXCJzdHJpbmdcIixcclxuICAgICAgICBub21vcjogMCxcclxuICAgICAgICBrb2RlUHJvZHVrOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIG5hbWFQcm9kdWs6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgc3RvazogMCxcclxuICAgICAgICBzYXJhbk9yZGVyOiAwLFxyXG4gICAgICAgIGp1bWxhaE9yZGVyOiAwLFxyXG4gICAgICAgIGNyZWF0ZWRCeTogXCJzdHJpbmdcIixcclxuICAgICAgICB1cGRhdGVkQnk6IFwic3RyaW5nXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArIEFQSV9WSVNJVF9QTEFOICsgXCIvQWN0aXZpdHlWaXNpdFBsYW4vU2F2ZUFsbEFjdGl2aXR5VmlzaXRQbGFuXCIsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgZ2V0TWVudSxcclxuICBnZXRQbGFuTGlzdCxcclxuICBnZXRBdXRoLFxyXG4gIG9uTG9naW4sXHJcbiAgZ2V0UGxhbklkLFxyXG4gIGdldFBvc20sXHJcbiAgZ2V0UHJvZHVjdFNlYXJjaCxcclxuICBnZXRQbGFuSGlzdG9yeSxcclxuICBzdWJtaXRWaXNpdFBsYW4sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=