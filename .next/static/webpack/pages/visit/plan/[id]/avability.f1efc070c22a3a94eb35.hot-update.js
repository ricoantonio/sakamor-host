webpackHotUpdate_N_E("pages/visit/plan/[id]/avability",{

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
  console.log(JSON.stringify(data));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVyLmpzIl0sIm5hbWVzIjpbIm5vdyIsIkRhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJnZXRNZW51IiwidXNlckRhdGEiLCJmZXRjaCIsIkFQSV9VUkwiLCJBUElfVVNFUiIsImVtYWlsIiwiaGVhZGVycyIsImFwaUtleSIsIlRPS0VOIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZ2V0UGxhbkxpc3QiLCJBUElfVklTSVRfUExBTiIsInVzZXJuYW1lIiwicmVzIiwiZmlsdGVyIiwidmFsIiwiaXNDaGVja091dCIsImdldEF1dGgiLCJvbkxvZ2luIiwidmFsdWVzIiwicGFzc3dvcmQiLCJtZXRob2QiLCJzZXRXcm9uZ1VzZXIiLCJnZXRQbGFuSWQiLCJpZCIsInBsYW5MaXN0IiwibGVuZ3RoIiwic2FtZVBsYW4iLCJnZXRQb3NtIiwiZ2V0UHJvZHVjdFNlYXJjaCIsInNlYXJjaCIsIkFQSV9NQVNURVIiLCJnZXRQbGFuSGlzdG9yeSIsInN1Ym1pdFZpc2l0UGxhbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJleHAiLCJhdnAiLCJpZE1hc3RlclBsYW5WaXNpdCIsIm5vbW9yRG9rdW1lbiIsImNhdGF0YW4iLCJpc0NoZWNrSW4iLCJjaGVja0luRGF0ZSIsImNoZWNrT3V0RGF0ZSIsImNyZWF0ZWRCeSIsInVwZGF0ZWRCeSIsImRwb3NtTGlzdCIsImFjdGl2aXR5VmlzaXRQbGFuSWQiLCJub21vciIsInRpcGUiLCJuYW1hRmlsZSIsImRQcm9kdWN0TGlzdCIsImtvZGVQcm9kdWsiLCJuYW1hUHJvZHVrIiwic3RvayIsInNhcmFuT3JkZXIiLCJqdW1sYWhPcmRlciIsIkFjY2VwdCIsImJvZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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WkksQ0FZQyxVQUFDQyxRQUFELEVBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxHQWRJLEVBZUpGLElBZkksQ0FlQyxVQUFDRyxJQUFELEVBQVU7QUFDZCxXQUFPQSxJQUFQO0FBQ0QsR0FqQkksV0FrQkUsVUFBQ0MsR0FBRCxFQUFTO0FBQ2RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0QsR0FwQkksQ0FBUDtBQXFCRCxDQXpKRDs7QUEySkEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmlzaXQvcGxhbi9baWRdL2F2YWJpbGl0eS5mMWVmYzA3MGMyMmEzYTk0ZWIzNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBUElfVVJMLFxyXG4gIEFQSV9NQVNURVIsXHJcbiAgQVBJX1VTRVIsXHJcbiAgQVBJX1ZJU0lUX1BMQU4sXHJcbiAgVE9LRU4sXHJcbn0gZnJvbSBcIi4vY29uc3RhbnRcIjtcclxuXHJcbnZhciBub3cgPSBuZXcgRGF0ZSgpO1xyXG52YXIgZGF0ZSA9IG5vdy5nZXREYXRlKCk7XHJcbnZhciBtb250aCA9IG5vdy5nZXRNb250aCgpICsgMTtcclxudmFyIHllYXIgPSBub3cuZ2V0RnVsbFllYXIoKTtcclxuXHJcbmNvbnN0IGdldE1lbnUgPSAodXNlckRhdGEpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICsgQVBJX1VTRVIgKyBgL1VzZXIvR2V0TWVudT91c2VybmFtZT0ke3VzZXJEYXRhLmVtYWlsfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuY29uc3QgZ2V0UGxhbkxpc3QgPSAodXNlckRhdGEpID0+IHtcclxuICAvLyByZXR1cm4gZmV0Y2goXHJcbiAgLy8gICBBUElfVVJMICtcclxuICAvLyAgICAgQVBJX1ZJU0lUX1BMQU4gK1xyXG4gIC8vICAgICBgL01hc3RlclZpc2l0UGxhbi9HZXRNYXN0ZXJWaXNpdFBsYW5CeT9wYXJhbWV0ZXI9JHt5ZWFyfS0ke21vbnRofS0ke2RhdGV9YCxcclxuICAvLyAgIHtcclxuICAvLyAgICAgaGVhZGVyczoge1xyXG4gIC8vICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICB9XHJcbiAgLy8gKVxyXG4gIC8vICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgLy8gICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgLy8gICB9KVxyXG4gIC8vICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAvLyAgICAgcmV0dXJuIGRhdGE7XHJcbiAgLy8gICB9KVxyXG4gIC8vICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAvLyAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAvLyAgIH0pO1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfUExBTiArXHJcbiAgICAgIGAvQWN0aXZpdHlWaXNpdFBsYW4vR2V0QWN0aXZpdHlWaXNpdFBsYW5CeT91c2VybmFtZT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHZhciByZXMgPSBkYXRhLmZpbHRlcigodmFsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHZhbC5pc0NoZWNrT3V0ID09PSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiByZXM7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0QXV0aCA9ICh1c2VyRGF0YSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgKyBBUElfVVNFUiArIGAvVXNlci9HZXRBdXRob3JpemU/dXNlcm5hbWU9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBvbkxvZ2luID0gKHZhbHVlcykgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVVNFUiArXHJcbiAgICAgIGAvVXNlci9Mb2dpbj91c2VybmFtZT0ke3ZhbHVlcy51c2VybmFtZX0mJnBhc3N3b3JkPSR7dmFsdWVzLnBhc3N3b3JkfWAsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIHNldFdyb25nVXNlcih0cnVlKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UGxhbklkID0gKGlkKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9QTEFOICtcclxuICAgICAgYC9NYXN0ZXJWaXNpdFBsYW4vR2V0TWFzdGVyVmlzaXRQbGFuQnk/cGFyYW1ldGVyPSR7eWVhcn0tJHttb250aH0tJHtkYXRlfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChwbGFuTGlzdCkgPT4ge1xyXG4gICAgICBpZiAocGxhbkxpc3QubGVuZ3RoICE9IDApIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goXHJcbiAgICAgICAgICBBUElfVVJMICtcclxuICAgICAgICAgICAgQVBJX1ZJU0lUX1BMQU4gK1xyXG4gICAgICAgICAgICBgL01hc3RlclZpc2l0UGxhbi9HZXRNYXN0ZXJWaXNpdFBsYW5CeUlkLyR7aWR9YCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdmFyIHNhbWVQbGFuID0gcGxhbkxpc3QuZmlsdGVyKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gdmFsLmlkID09PSBkYXRhLmlkO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7IHNhbWVQbGFuLCBkYXRhIH07XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBwbGFuTGlzdDtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBvc20gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9QTEFOICtcclxuICAgICAgYC9BY3Rpdml0eVZpc2l0UGxhbkRQT1NNL0dldEFsbEFjdGl2aXR5VmlzaXRQbGFuRHBvc21gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRQcm9kdWN0U2VhcmNoID0gKHNlYXJjaCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChBUElfVVJMICsgQVBJX01BU1RFUiArIGAvTWFzdGVyRGF0YS9HZXRQcm9kdWtMaWtlLyR7c2VhcmNofWAsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgIH0sXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBsYW5IaXN0b3J5ID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9QTEFOICtcclxuICAgICAgYC9BY3Rpdml0eVZpc2l0UGxhbi9HZXRBY3Rpdml0eVZpc2l0UGxhbkJ5P3VzZXJuYW1lPSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgdmFyIHJlcyA9IGRhdGEuZmlsdGVyKCh2YWwpID0+IHtcclxuICAgICAgICByZXR1cm4gdmFsLmlzQ2hlY2tPdXQgPT09IHRydWU7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcmVzO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHN1Ym1pdFZpc2l0UGxhbiA9IChkYXRhKSA9PiB7XHJcbiAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gIHZhciBleHAgPSB7XHJcbiAgICBhdnA6IHtcclxuICAgICAgaWQ6IFwiM2ZhODVmNjQtNTcxNy00NTYyLWIzZmMtMmM5NjNmNjZhZmE2XCIsXHJcbiAgICAgIGlkTWFzdGVyUGxhblZpc2l0OiBcIjNmYTg1ZjY0LTU3MTctNDU2Mi1iM2ZjLTJjOTYzZjY2YWZhNlwiLFxyXG4gICAgICBub21vckRva3VtZW46IFwic3RyaW5nXCIsXHJcbiAgICAgIGNhdGF0YW46IFwic3RyaW5nXCIsXHJcbiAgICAgIGlzQ2hlY2tJbjogdHJ1ZSxcclxuICAgICAgY2hlY2tJbkRhdGU6IFwiMjAyMS0wNC0wNVQxMDozMzo1Ny40NTFaXCIsXHJcbiAgICAgIGlzQ2hlY2tPdXQ6IHRydWUsXHJcbiAgICAgIGNoZWNrT3V0RGF0ZTogXCIyMDIxLTA0LTA1VDEwOjMzOjU3LjQ1MVpcIixcclxuICAgICAgY3JlYXRlZEJ5OiBcInN0cmluZ1wiLFxyXG4gICAgICB1cGRhdGVkQnk6IFwic3RyaW5nXCIsXHJcbiAgICB9LFxyXG4gICAgZHBvc21MaXN0OiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCIzZmE4NWY2NC01NzE3LTQ1NjItYjNmYy0yYzk2M2Y2NmFmYTZcIixcclxuICAgICAgICBhY3Rpdml0eVZpc2l0UGxhbklkOiBcIjNmYTg1ZjY0LTU3MTctNDU2Mi1iM2ZjLTJjOTYzZjY2YWZhNlwiLFxyXG4gICAgICAgIG5vbW9yRG9rdW1lbjogXCJzdHJpbmdcIixcclxuICAgICAgICBub21vcjogMCxcclxuICAgICAgICB0aXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIG5hbWFGaWxlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIGNyZWF0ZWRCeTogXCJzdHJpbmdcIixcclxuICAgICAgICB1cGRhdGVkQnk6IFwic3RyaW5nXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCIzZmE4NWY2NC01NzE3LTQ1NjItYjNmYy0yYzk2M2Y2NmFmYTZcIixcclxuICAgICAgICBhY3Rpdml0eVZpc2l0UGxhbklkOiBcIjNmYTg1ZjY0LTU3MTctNDU2Mi1iM2ZjLTJjOTYzZjY2YWZhNlwiLFxyXG4gICAgICAgIG5vbW9yRG9rdW1lbjogXCJzdHJpbmdcIixcclxuICAgICAgICBub21vcjogMCxcclxuICAgICAgICB0aXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIG5hbWFGaWxlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIGNyZWF0ZWRCeTogXCJzdHJpbmdcIixcclxuICAgICAgICB1cGRhdGVkQnk6IFwic3RyaW5nXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCIzZmE4NWY2NC01NzE3LTQ1NjItYjNmYy0yYzk2M2Y2NmFmYTZcIixcclxuICAgICAgICBhY3Rpdml0eVZpc2l0UGxhbklkOiBcIjNmYTg1ZjY0LTU3MTctNDU2Mi1iM2ZjLTJjOTYzZjY2YWZhNlwiLFxyXG4gICAgICAgIG5vbW9yRG9rdW1lbjogXCJzdHJpbmdcIixcclxuICAgICAgICBub21vcjogMCxcclxuICAgICAgICB0aXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIG5hbWFGaWxlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIGNyZWF0ZWRCeTogXCJzdHJpbmdcIixcclxuICAgICAgICB1cGRhdGVkQnk6IFwic3RyaW5nXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCIzZmE4NWY2NC01NzE3LTQ1NjItYjNmYy0yYzk2M2Y2NmFmYTZcIixcclxuICAgICAgICBhY3Rpdml0eVZpc2l0UGxhbklkOiBcIjNmYTg1ZjY0LTU3MTctNDU2Mi1iM2ZjLTJjOTYzZjY2YWZhNlwiLFxyXG4gICAgICAgIG5vbW9yRG9rdW1lbjogXCJzdHJpbmdcIixcclxuICAgICAgICBub21vcjogMCxcclxuICAgICAgICB0aXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIG5hbWFGaWxlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIGNyZWF0ZWRCeTogXCJzdHJpbmdcIixcclxuICAgICAgICB1cGRhdGVkQnk6IFwic3RyaW5nXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCIzZmE4NWY2NC01NzE3LTQ1NjItYjNmYy0yYzk2M2Y2NmFmYTZcIixcclxuICAgICAgICBhY3Rpdml0eVZpc2l0UGxhbklkOiBcIjNmYTg1ZjY0LTU3MTctNDU2Mi1iM2ZjLTJjOTYzZjY2YWZhNlwiLFxyXG4gICAgICAgIG5vbW9yRG9rdW1lbjogXCJzdHJpbmdcIixcclxuICAgICAgICBub21vcjogMCxcclxuICAgICAgICB0aXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIG5hbWFGaWxlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIGNyZWF0ZWRCeTogXCJzdHJpbmdcIixcclxuICAgICAgICB1cGRhdGVkQnk6IFwic3RyaW5nXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCIzZmE4NWY2NC01NzE3LTQ1NjItYjNmYy0yYzk2M2Y2NmFmYTZcIixcclxuICAgICAgICBhY3Rpdml0eVZpc2l0UGxhbklkOiBcIjNmYTg1ZjY0LTU3MTctNDU2Mi1iM2ZjLTJjOTYzZjY2YWZhNlwiLFxyXG4gICAgICAgIG5vbW9yRG9rdW1lbjogXCJzdHJpbmdcIixcclxuICAgICAgICBub21vcjogMCxcclxuICAgICAgICB0aXBlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIG5hbWFGaWxlOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIGNyZWF0ZWRCeTogXCJzdHJpbmdcIixcclxuICAgICAgICB1cGRhdGVkQnk6IFwic3RyaW5nXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgZFByb2R1Y3RMaXN0OiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCIzZmE4NWY2NC01NzE3LTQ1NjItYjNmYy0yYzk2M2Y2NmFmYTZcIixcclxuICAgICAgICBhY3Rpdml0eVZpc2l0UGxhbklkOiBcIjNmYTg1ZjY0LTU3MTctNDU2Mi1iM2ZjLTJjOTYzZjY2YWZhNlwiLFxyXG4gICAgICAgIG5vbW9yRG9rdW1lbjogXCJzdHJpbmdcIixcclxuICAgICAgICBub21vcjogMCxcclxuICAgICAgICBrb2RlUHJvZHVrOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIG5hbWFQcm9kdWs6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgc3RvazogMCxcclxuICAgICAgICBzYXJhbk9yZGVyOiAwLFxyXG4gICAgICAgIGp1bWxhaE9yZGVyOiAwLFxyXG4gICAgICAgIGNyZWF0ZWRCeTogXCJzdHJpbmdcIixcclxuICAgICAgICB1cGRhdGVkQnk6IFwic3RyaW5nXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCIzZmE4NWY2NC01NzE3LTQ1NjItYjNmYy0yYzk2M2Y2NmFmYTZcIixcclxuICAgICAgICBhY3Rpdml0eVZpc2l0UGxhbklkOiBcIjNmYTg1ZjY0LTU3MTctNDU2Mi1iM2ZjLTJjOTYzZjY2YWZhNlwiLFxyXG4gICAgICAgIG5vbW9yRG9rdW1lbjogXCJzdHJpbmdcIixcclxuICAgICAgICBub21vcjogMCxcclxuICAgICAgICBrb2RlUHJvZHVrOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIG5hbWFQcm9kdWs6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgc3RvazogMCxcclxuICAgICAgICBzYXJhbk9yZGVyOiAwLFxyXG4gICAgICAgIGp1bWxhaE9yZGVyOiAwLFxyXG4gICAgICAgIGNyZWF0ZWRCeTogXCJzdHJpbmdcIixcclxuICAgICAgICB1cGRhdGVkQnk6IFwic3RyaW5nXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCIzZmE4NWY2NC01NzE3LTQ1NjItYjNmYy0yYzk2M2Y2NmFmYTZcIixcclxuICAgICAgICBhY3Rpdml0eVZpc2l0UGxhbklkOiBcIjNmYTg1ZjY0LTU3MTctNDU2Mi1iM2ZjLTJjOTYzZjY2YWZhNlwiLFxyXG4gICAgICAgIG5vbW9yRG9rdW1lbjogXCJzdHJpbmdcIixcclxuICAgICAgICBub21vcjogMCxcclxuICAgICAgICBrb2RlUHJvZHVrOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIG5hbWFQcm9kdWs6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgc3RvazogMCxcclxuICAgICAgICBzYXJhbk9yZGVyOiAwLFxyXG4gICAgICAgIGp1bWxhaE9yZGVyOiAwLFxyXG4gICAgICAgIGNyZWF0ZWRCeTogXCJzdHJpbmdcIixcclxuICAgICAgICB1cGRhdGVkQnk6IFwic3RyaW5nXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCIzZmE4NWY2NC01NzE3LTQ1NjItYjNmYy0yYzk2M2Y2NmFmYTZcIixcclxuICAgICAgICBhY3Rpdml0eVZpc2l0UGxhbklkOiBcIjNmYTg1ZjY0LTU3MTctNDU2Mi1iM2ZjLTJjOTYzZjY2YWZhNlwiLFxyXG4gICAgICAgIG5vbW9yRG9rdW1lbjogXCJzdHJpbmdcIixcclxuICAgICAgICBub21vcjogMCxcclxuICAgICAgICBrb2RlUHJvZHVrOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIG5hbWFQcm9kdWs6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgc3RvazogMCxcclxuICAgICAgICBzYXJhbk9yZGVyOiAwLFxyXG4gICAgICAgIGp1bWxhaE9yZGVyOiAwLFxyXG4gICAgICAgIGNyZWF0ZWRCeTogXCJzdHJpbmdcIixcclxuICAgICAgICB1cGRhdGVkQnk6IFwic3RyaW5nXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArIEFQSV9WSVNJVF9QTEFOICsgXCIvQWN0aXZpdHlWaXNpdFBsYW4vU2F2ZUFsbEFjdGl2aXR5VmlzaXRQbGFuXCIsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgZ2V0TWVudSxcclxuICBnZXRQbGFuTGlzdCxcclxuICBnZXRBdXRoLFxyXG4gIG9uTG9naW4sXHJcbiAgZ2V0UGxhbklkLFxyXG4gIGdldFBvc20sXHJcbiAgZ2V0UHJvZHVjdFNlYXJjaCxcclxuICBnZXRQbGFuSGlzdG9yeSxcclxuICBzdWJtaXRWaXNpdFBsYW4sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=