webpackHotUpdate_N_E("pages/visit/plan/[id]",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVyLmpzIl0sIm5hbWVzIjpbIm5vdyIsIkRhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJnZXRNZW51IiwidXNlckRhdGEiLCJmZXRjaCIsIkFQSV9VUkwiLCJBUElfVVNFUiIsImVtYWlsIiwiaGVhZGVycyIsImFwaUtleSIsIlRPS0VOIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZ2V0UGxhbkxpc3QiLCJBUElfVklTSVRfUExBTiIsInVzZXJuYW1lIiwicmVzIiwiZmlsdGVyIiwidmFsIiwiaXNDaGVja091dCIsImdldEF1dGgiLCJvbkxvZ2luIiwidmFsdWVzIiwicGFzc3dvcmQiLCJtZXRob2QiLCJzZXRXcm9uZ1VzZXIiLCJnZXRQbGFuSWQiLCJpZCIsInBsYW5MaXN0IiwibGVuZ3RoIiwic2FtZVBsYW4iLCJnZXRQb3NtIiwiZ2V0UHJvZHVjdFNlYXJjaCIsInNlYXJjaCIsIkFQSV9NQVNURVIiLCJnZXRQbGFuSGlzdG9yeSIsInN1Ym1pdFZpc2l0UGxhbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJleHAiLCJhdnAiLCJpZE1hc3RlclBsYW5WaXNpdCIsIm5vbW9yRG9rdW1lbiIsImNhdGF0YW4iLCJpc0NoZWNrSW4iLCJjaGVja0luRGF0ZSIsImNoZWNrT3V0RGF0ZSIsImNyZWF0ZWRCeSIsInVwZGF0ZWRCeSIsImRwb3NtTGlzdCIsImFjdGl2aXR5VmlzaXRQbGFuSWQiLCJub21vciIsInRpcGUiLCJuYW1hRmlsZSIsImRQcm9kdWN0TGlzdCIsImtvZGVQcm9kdWsiLCJuYW1hUHJvZHVrIiwic3RvayIsInNhcmFuT3JkZXIiLCJqdW1sYWhPcmRlciIsIkFjY2VwdCIsImJvZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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WkksQ0FZQyxVQUFDQyxRQUFELEVBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxHQWRJLEVBZUpGLElBZkksQ0FlQyxVQUFDRyxJQUFELEVBQVU7QUFDZCxXQUFPQSxJQUFQO0FBQ0QsR0FqQkksV0FrQkUsVUFBQ0MsR0FBRCxFQUFTO0FBQ2RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0QsR0FwQkksQ0FBUDtBQXFCRCxDQXpKRDs7QUEySkEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmlzaXQvcGxhbi9baWRdLmYxZWZjMDcwYzIyYTNhOTRlYjM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFQSV9VUkwsXHJcbiAgQVBJX01BU1RFUixcclxuICBBUElfVVNFUixcclxuICBBUElfVklTSVRfUExBTixcclxuICBUT0tFTixcclxufSBmcm9tIFwiLi9jb25zdGFudFwiO1xyXG5cclxudmFyIG5vdyA9IG5ldyBEYXRlKCk7XHJcbnZhciBkYXRlID0gbm93LmdldERhdGUoKTtcclxudmFyIG1vbnRoID0gbm93LmdldE1vbnRoKCkgKyAxO1xyXG52YXIgeWVhciA9IG5vdy5nZXRGdWxsWWVhcigpO1xyXG5cclxuY29uc3QgZ2V0TWVudSA9ICh1c2VyRGF0YSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgKyBBUElfVVNFUiArIGAvVXNlci9HZXRNZW51P3VzZXJuYW1lPSR7dXNlckRhdGEuZW1haWx9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5jb25zdCBnZXRQbGFuTGlzdCA9ICh1c2VyRGF0YSkgPT4ge1xyXG4gIC8vIHJldHVybiBmZXRjaChcclxuICAvLyAgIEFQSV9VUkwgK1xyXG4gIC8vICAgICBBUElfVklTSVRfUExBTiArXHJcbiAgLy8gICAgIGAvTWFzdGVyVmlzaXRQbGFuL0dldE1hc3RlclZpc2l0UGxhbkJ5P3BhcmFtZXRlcj0ke3llYXJ9LSR7bW9udGh9LSR7ZGF0ZX1gLFxyXG4gIC8vICAge1xyXG4gIC8vICAgICBoZWFkZXJzOiB7XHJcbiAgLy8gICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAvLyAgICAgfSxcclxuICAvLyAgIH1cclxuICAvLyApXHJcbiAgLy8gICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAvLyAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAvLyAgIH0pXHJcbiAgLy8gICAudGhlbigoZGF0YSkgPT4ge1xyXG4gIC8vICAgICByZXR1cm4gZGF0YTtcclxuICAvLyAgIH0pXHJcbiAgLy8gICAuY2F0Y2goKGVycikgPT4ge1xyXG4gIC8vICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIC8vICAgfSk7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9QTEFOICtcclxuICAgICAgYC9BY3Rpdml0eVZpc2l0UGxhbi9HZXRBY3Rpdml0eVZpc2l0UGxhbkJ5P3VzZXJuYW1lPSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgdmFyIHJlcyA9IGRhdGEuZmlsdGVyKCh2YWwpID0+IHtcclxuICAgICAgICByZXR1cm4gdmFsLmlzQ2hlY2tPdXQgPT09IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHJlcztcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRBdXRoID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArIEFQSV9VU0VSICsgYC9Vc2VyL0dldEF1dGhvcml6ZT91c2VybmFtZT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IG9uTG9naW4gPSAodmFsdWVzKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9VU0VSICtcclxuICAgICAgYC9Vc2VyL0xvZ2luP3VzZXJuYW1lPSR7dmFsdWVzLnVzZXJuYW1lfSYmcGFzc3dvcmQ9JHt2YWx1ZXMucGFzc3dvcmR9YCxcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgc2V0V3JvbmdVc2VyKHRydWUpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRQbGFuSWQgPSAoaWQpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1BMQU4gK1xyXG4gICAgICBgL01hc3RlclZpc2l0UGxhbi9HZXRNYXN0ZXJWaXNpdFBsYW5CeT9wYXJhbWV0ZXI9JHt5ZWFyfS0ke21vbnRofS0ke2RhdGV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHBsYW5MaXN0KSA9PiB7XHJcbiAgICAgIGlmIChwbGFuTGlzdC5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChcclxuICAgICAgICAgIEFQSV9VUkwgK1xyXG4gICAgICAgICAgICBBUElfVklTSVRfUExBTiArXHJcbiAgICAgICAgICAgIGAvTWFzdGVyVmlzaXRQbGFuL0dldE1hc3RlclZpc2l0UGxhbkJ5SWQvJHtpZH1gLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgc2FtZVBsYW4gPSBwbGFuTGlzdC5maWx0ZXIoKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiB2YWwuaWQgPT09IGRhdGEuaWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgc2FtZVBsYW4sIGRhdGEgfTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHBsYW5MaXN0O1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UG9zbSA9ICgpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1BMQU4gK1xyXG4gICAgICBgL0FjdGl2aXR5VmlzaXRQbGFuRFBPU00vR2V0QWxsQWN0aXZpdHlWaXNpdFBsYW5EcG9zbWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFByb2R1Y3RTZWFyY2ggPSAoc2VhcmNoKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKEFQSV9VUkwgKyBBUElfTUFTVEVSICsgYC9NYXN0ZXJEYXRhL0dldFByb2R1a0xpa2UvJHtzZWFyY2h9YCwge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgfSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UGxhbkhpc3RvcnkgPSAodXNlckRhdGEpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1BMQU4gK1xyXG4gICAgICBgL0FjdGl2aXR5VmlzaXRQbGFuL0dldEFjdGl2aXR5VmlzaXRQbGFuQnk/dXNlcm5hbWU9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICB2YXIgcmVzID0gZGF0YS5maWx0ZXIoKHZhbCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB2YWwuaXNDaGVja091dCA9PT0gdHJ1ZTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiByZXM7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3Qgc3VibWl0VmlzaXRQbGFuID0gKGRhdGEpID0+IHtcclxuICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgdmFyIGV4cCA9IHtcclxuICAgIGF2cDoge1xyXG4gICAgICBpZDogXCIzZmE4NWY2NC01NzE3LTQ1NjItYjNmYy0yYzk2M2Y2NmFmYTZcIixcclxuICAgICAgaWRNYXN0ZXJQbGFuVmlzaXQ6IFwiM2ZhODVmNjQtNTcxNy00NTYyLWIzZmMtMmM5NjNmNjZhZmE2XCIsXHJcbiAgICAgIG5vbW9yRG9rdW1lbjogXCJzdHJpbmdcIixcclxuICAgICAgY2F0YXRhbjogXCJzdHJpbmdcIixcclxuICAgICAgaXNDaGVja0luOiB0cnVlLFxyXG4gICAgICBjaGVja0luRGF0ZTogXCIyMDIxLTA0LTA1VDEwOjMzOjU3LjQ1MVpcIixcclxuICAgICAgaXNDaGVja091dDogdHJ1ZSxcclxuICAgICAgY2hlY2tPdXREYXRlOiBcIjIwMjEtMDQtMDVUMTA6MzM6NTcuNDUxWlwiLFxyXG4gICAgICBjcmVhdGVkQnk6IFwic3RyaW5nXCIsXHJcbiAgICAgIHVwZGF0ZWRCeTogXCJzdHJpbmdcIixcclxuICAgIH0sXHJcbiAgICBkcG9zbUxpc3Q6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjNmYTg1ZjY0LTU3MTctNDU2Mi1iM2ZjLTJjOTYzZjY2YWZhNlwiLFxyXG4gICAgICAgIGFjdGl2aXR5VmlzaXRQbGFuSWQ6IFwiM2ZhODVmNjQtNTcxNy00NTYyLWIzZmMtMmM5NjNmNjZhZmE2XCIsXHJcbiAgICAgICAgbm9tb3JEb2t1bWVuOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIG5vbW9yOiAwLFxyXG4gICAgICAgIHRpcGU6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgbmFtYUZpbGU6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgY3JlYXRlZEJ5OiBcInN0cmluZ1wiLFxyXG4gICAgICAgIHVwZGF0ZWRCeTogXCJzdHJpbmdcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjNmYTg1ZjY0LTU3MTctNDU2Mi1iM2ZjLTJjOTYzZjY2YWZhNlwiLFxyXG4gICAgICAgIGFjdGl2aXR5VmlzaXRQbGFuSWQ6IFwiM2ZhODVmNjQtNTcxNy00NTYyLWIzZmMtMmM5NjNmNjZhZmE2XCIsXHJcbiAgICAgICAgbm9tb3JEb2t1bWVuOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIG5vbW9yOiAwLFxyXG4gICAgICAgIHRpcGU6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgbmFtYUZpbGU6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgY3JlYXRlZEJ5OiBcInN0cmluZ1wiLFxyXG4gICAgICAgIHVwZGF0ZWRCeTogXCJzdHJpbmdcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjNmYTg1ZjY0LTU3MTctNDU2Mi1iM2ZjLTJjOTYzZjY2YWZhNlwiLFxyXG4gICAgICAgIGFjdGl2aXR5VmlzaXRQbGFuSWQ6IFwiM2ZhODVmNjQtNTcxNy00NTYyLWIzZmMtMmM5NjNmNjZhZmE2XCIsXHJcbiAgICAgICAgbm9tb3JEb2t1bWVuOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIG5vbW9yOiAwLFxyXG4gICAgICAgIHRpcGU6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgbmFtYUZpbGU6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgY3JlYXRlZEJ5OiBcInN0cmluZ1wiLFxyXG4gICAgICAgIHVwZGF0ZWRCeTogXCJzdHJpbmdcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjNmYTg1ZjY0LTU3MTctNDU2Mi1iM2ZjLTJjOTYzZjY2YWZhNlwiLFxyXG4gICAgICAgIGFjdGl2aXR5VmlzaXRQbGFuSWQ6IFwiM2ZhODVmNjQtNTcxNy00NTYyLWIzZmMtMmM5NjNmNjZhZmE2XCIsXHJcbiAgICAgICAgbm9tb3JEb2t1bWVuOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIG5vbW9yOiAwLFxyXG4gICAgICAgIHRpcGU6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgbmFtYUZpbGU6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgY3JlYXRlZEJ5OiBcInN0cmluZ1wiLFxyXG4gICAgICAgIHVwZGF0ZWRCeTogXCJzdHJpbmdcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjNmYTg1ZjY0LTU3MTctNDU2Mi1iM2ZjLTJjOTYzZjY2YWZhNlwiLFxyXG4gICAgICAgIGFjdGl2aXR5VmlzaXRQbGFuSWQ6IFwiM2ZhODVmNjQtNTcxNy00NTYyLWIzZmMtMmM5NjNmNjZhZmE2XCIsXHJcbiAgICAgICAgbm9tb3JEb2t1bWVuOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIG5vbW9yOiAwLFxyXG4gICAgICAgIHRpcGU6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgbmFtYUZpbGU6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgY3JlYXRlZEJ5OiBcInN0cmluZ1wiLFxyXG4gICAgICAgIHVwZGF0ZWRCeTogXCJzdHJpbmdcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjNmYTg1ZjY0LTU3MTctNDU2Mi1iM2ZjLTJjOTYzZjY2YWZhNlwiLFxyXG4gICAgICAgIGFjdGl2aXR5VmlzaXRQbGFuSWQ6IFwiM2ZhODVmNjQtNTcxNy00NTYyLWIzZmMtMmM5NjNmNjZhZmE2XCIsXHJcbiAgICAgICAgbm9tb3JEb2t1bWVuOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIG5vbW9yOiAwLFxyXG4gICAgICAgIHRpcGU6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgbmFtYUZpbGU6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgY3JlYXRlZEJ5OiBcInN0cmluZ1wiLFxyXG4gICAgICAgIHVwZGF0ZWRCeTogXCJzdHJpbmdcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBkUHJvZHVjdExpc3Q6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjNmYTg1ZjY0LTU3MTctNDU2Mi1iM2ZjLTJjOTYzZjY2YWZhNlwiLFxyXG4gICAgICAgIGFjdGl2aXR5VmlzaXRQbGFuSWQ6IFwiM2ZhODVmNjQtNTcxNy00NTYyLWIzZmMtMmM5NjNmNjZhZmE2XCIsXHJcbiAgICAgICAgbm9tb3JEb2t1bWVuOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIG5vbW9yOiAwLFxyXG4gICAgICAgIGtvZGVQcm9kdWs6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgbmFtYVByb2R1azogXCJzdHJpbmdcIixcclxuICAgICAgICBzdG9rOiAwLFxyXG4gICAgICAgIHNhcmFuT3JkZXI6IDAsXHJcbiAgICAgICAganVtbGFoT3JkZXI6IDAsXHJcbiAgICAgICAgY3JlYXRlZEJ5OiBcInN0cmluZ1wiLFxyXG4gICAgICAgIHVwZGF0ZWRCeTogXCJzdHJpbmdcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjNmYTg1ZjY0LTU3MTctNDU2Mi1iM2ZjLTJjOTYzZjY2YWZhNlwiLFxyXG4gICAgICAgIGFjdGl2aXR5VmlzaXRQbGFuSWQ6IFwiM2ZhODVmNjQtNTcxNy00NTYyLWIzZmMtMmM5NjNmNjZhZmE2XCIsXHJcbiAgICAgICAgbm9tb3JEb2t1bWVuOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIG5vbW9yOiAwLFxyXG4gICAgICAgIGtvZGVQcm9kdWs6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgbmFtYVByb2R1azogXCJzdHJpbmdcIixcclxuICAgICAgICBzdG9rOiAwLFxyXG4gICAgICAgIHNhcmFuT3JkZXI6IDAsXHJcbiAgICAgICAganVtbGFoT3JkZXI6IDAsXHJcbiAgICAgICAgY3JlYXRlZEJ5OiBcInN0cmluZ1wiLFxyXG4gICAgICAgIHVwZGF0ZWRCeTogXCJzdHJpbmdcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjNmYTg1ZjY0LTU3MTctNDU2Mi1iM2ZjLTJjOTYzZjY2YWZhNlwiLFxyXG4gICAgICAgIGFjdGl2aXR5VmlzaXRQbGFuSWQ6IFwiM2ZhODVmNjQtNTcxNy00NTYyLWIzZmMtMmM5NjNmNjZhZmE2XCIsXHJcbiAgICAgICAgbm9tb3JEb2t1bWVuOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIG5vbW9yOiAwLFxyXG4gICAgICAgIGtvZGVQcm9kdWs6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgbmFtYVByb2R1azogXCJzdHJpbmdcIixcclxuICAgICAgICBzdG9rOiAwLFxyXG4gICAgICAgIHNhcmFuT3JkZXI6IDAsXHJcbiAgICAgICAganVtbGFoT3JkZXI6IDAsXHJcbiAgICAgICAgY3JlYXRlZEJ5OiBcInN0cmluZ1wiLFxyXG4gICAgICAgIHVwZGF0ZWRCeTogXCJzdHJpbmdcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIjNmYTg1ZjY0LTU3MTctNDU2Mi1iM2ZjLTJjOTYzZjY2YWZhNlwiLFxyXG4gICAgICAgIGFjdGl2aXR5VmlzaXRQbGFuSWQ6IFwiM2ZhODVmNjQtNTcxNy00NTYyLWIzZmMtMmM5NjNmNjZhZmE2XCIsXHJcbiAgICAgICAgbm9tb3JEb2t1bWVuOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIG5vbW9yOiAwLFxyXG4gICAgICAgIGtvZGVQcm9kdWs6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgbmFtYVByb2R1azogXCJzdHJpbmdcIixcclxuICAgICAgICBzdG9rOiAwLFxyXG4gICAgICAgIHNhcmFuT3JkZXI6IDAsXHJcbiAgICAgICAganVtbGFoT3JkZXI6IDAsXHJcbiAgICAgICAgY3JlYXRlZEJ5OiBcInN0cmluZ1wiLFxyXG4gICAgICAgIHVwZGF0ZWRCeTogXCJzdHJpbmdcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICsgQVBJX1ZJU0lUX1BMQU4gKyBcIi9BY3Rpdml0eVZpc2l0UGxhbi9TYXZlQWxsQWN0aXZpdHlWaXNpdFBsYW5cIixcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBnZXRNZW51LFxyXG4gIGdldFBsYW5MaXN0LFxyXG4gIGdldEF1dGgsXHJcbiAgb25Mb2dpbixcclxuICBnZXRQbGFuSWQsXHJcbiAgZ2V0UG9zbSxcclxuICBnZXRQcm9kdWN0U2VhcmNoLFxyXG4gIGdldFBsYW5IaXN0b3J5LFxyXG4gIHN1Ym1pdFZpc2l0UGxhbixcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==