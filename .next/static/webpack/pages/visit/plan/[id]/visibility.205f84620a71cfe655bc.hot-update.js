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
  console.log(JSON.stringify(data));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVyLmpzIl0sIm5hbWVzIjpbIm5vdyIsIkRhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJnZXRNZW51IiwidXNlckRhdGEiLCJmZXRjaCIsIkFQSV9VUkwiLCJBUElfVVNFUiIsImVtYWlsIiwiaGVhZGVycyIsImFwaUtleSIsIlRPS0VOIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZ2V0UGxhbkxpc3QiLCJBUElfVklTSVRfUExBTiIsInVzZXJuYW1lIiwicmVzIiwiZmlsdGVyIiwidmFsIiwiaXNDaGVja091dCIsImdldEF1dGgiLCJvbkxvZ2luIiwidmFsdWVzIiwicGFzc3dvcmQiLCJtZXRob2QiLCJzZXRXcm9uZ1VzZXIiLCJnZXRQbGFuSWQiLCJpZCIsInBsYW5MaXN0IiwibGVuZ3RoIiwic2FtZVBsYW4iLCJnZXRQb3NtIiwiZ2V0UHJvZHVjdFNlYXJjaCIsInNlYXJjaCIsIkFQSV9NQVNURVIiLCJnZXRQbGFuSGlzdG9yeSIsInN1Ym1pdFZpc2l0UGxhbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJBY2NlcHQiLCJib2R5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUEsSUFBSUEsR0FBRyxHQUFHLElBQUlDLElBQUosRUFBVjtBQUNBLElBQUlDLElBQUksR0FBR0YsR0FBRyxDQUFDRyxPQUFKLEVBQVg7QUFDQSxJQUFJQyxLQUFLLEdBQUdKLEdBQUcsQ0FBQ0ssUUFBSixLQUFpQixDQUE3QjtBQUNBLElBQUlDLElBQUksR0FBR04sR0FBRyxDQUFDTyxXQUFKLEVBQVg7O0FBRUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsUUFBRCxFQUFjO0FBQzVCLFNBQU9DLEtB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Q2xCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsR0FkSSxXQWVFLFVBQUNFLEdBQUQsRUFBUztBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNELEdBakJJLENBQVA7QUFrQkQsQ0FwQkQ7O0FBc0JBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Zpc2l0L3BsYW4vW2lkXS92aXNpYmlsaXR5LjIwNWY4NDYyMGE3MWNmZTY1NWJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFQSV9VUkwsXHJcbiAgQVBJX01BU1RFUixcclxuICBBUElfVVNFUixcclxuICBBUElfVklTSVRfUExBTixcclxuICBUT0tFTixcclxufSBmcm9tIFwiLi9jb25zdGFudFwiO1xyXG5cclxudmFyIG5vdyA9IG5ldyBEYXRlKCk7XHJcbnZhciBkYXRlID0gbm93LmdldERhdGUoKTtcclxudmFyIG1vbnRoID0gbm93LmdldE1vbnRoKCkgKyAxO1xyXG52YXIgeWVhciA9IG5vdy5nZXRGdWxsWWVhcigpO1xyXG5cclxuY29uc3QgZ2V0TWVudSA9ICh1c2VyRGF0YSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgKyBBUElfVVNFUiArIGAvVXNlci9HZXRNZW51P3VzZXJuYW1lPSR7dXNlckRhdGEuZW1haWx9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5jb25zdCBnZXRQbGFuTGlzdCA9ICh1c2VyRGF0YSkgPT4ge1xyXG4gIC8vIHJldHVybiBmZXRjaChcclxuICAvLyAgIEFQSV9VUkwgK1xyXG4gIC8vICAgICBBUElfVklTSVRfUExBTiArXHJcbiAgLy8gICAgIGAvTWFzdGVyVmlzaXRQbGFuL0dldE1hc3RlclZpc2l0UGxhbkJ5P3BhcmFtZXRlcj0ke3llYXJ9LSR7bW9udGh9LSR7ZGF0ZX1gLFxyXG4gIC8vICAge1xyXG4gIC8vICAgICBoZWFkZXJzOiB7XHJcbiAgLy8gICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAvLyAgICAgfSxcclxuICAvLyAgIH1cclxuICAvLyApXHJcbiAgLy8gICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAvLyAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAvLyAgIH0pXHJcbiAgLy8gICAudGhlbigoZGF0YSkgPT4ge1xyXG4gIC8vICAgICByZXR1cm4gZGF0YTtcclxuICAvLyAgIH0pXHJcbiAgLy8gICAuY2F0Y2goKGVycikgPT4ge1xyXG4gIC8vICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIC8vICAgfSk7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9QTEFOICtcclxuICAgICAgYC9BY3Rpdml0eVZpc2l0UGxhbi9HZXRBY3Rpdml0eVZpc2l0UGxhbkJ5P3VzZXJuYW1lPSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgdmFyIHJlcyA9IGRhdGEuZmlsdGVyKCh2YWwpID0+IHtcclxuICAgICAgICByZXR1cm4gdmFsLmlzQ2hlY2tPdXQgPT09IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHJlcztcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRBdXRoID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArIEFQSV9VU0VSICsgYC9Vc2VyL0dldEF1dGhvcml6ZT91c2VybmFtZT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IG9uTG9naW4gPSAodmFsdWVzKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9VU0VSICtcclxuICAgICAgYC9Vc2VyL0xvZ2luP3VzZXJuYW1lPSR7dmFsdWVzLnVzZXJuYW1lfSYmcGFzc3dvcmQ9JHt2YWx1ZXMucGFzc3dvcmR9YCxcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgc2V0V3JvbmdVc2VyKHRydWUpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRQbGFuSWQgPSAoaWQpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1BMQU4gK1xyXG4gICAgICBgL01hc3RlclZpc2l0UGxhbi9HZXRNYXN0ZXJWaXNpdFBsYW5CeT9wYXJhbWV0ZXI9JHt5ZWFyfS0ke21vbnRofS0ke2RhdGV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHBsYW5MaXN0KSA9PiB7XHJcbiAgICAgIGlmIChwbGFuTGlzdC5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChcclxuICAgICAgICAgIEFQSV9VUkwgK1xyXG4gICAgICAgICAgICBBUElfVklTSVRfUExBTiArXHJcbiAgICAgICAgICAgIGAvTWFzdGVyVmlzaXRQbGFuL0dldE1hc3RlclZpc2l0UGxhbkJ5SWQvJHtpZH1gLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgc2FtZVBsYW4gPSBwbGFuTGlzdC5maWx0ZXIoKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiB2YWwuaWQgPT09IGRhdGEuaWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgc2FtZVBsYW4sIGRhdGEgfTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHBsYW5MaXN0O1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UG9zbSA9ICgpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1BMQU4gK1xyXG4gICAgICBgL0FjdGl2aXR5VmlzaXRQbGFuRFBPU00vR2V0QWxsQWN0aXZpdHlWaXNpdFBsYW5EcG9zbWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFByb2R1Y3RTZWFyY2ggPSAoc2VhcmNoKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKEFQSV9VUkwgKyBBUElfTUFTVEVSICsgYC9NYXN0ZXJEYXRhL0dldFByb2R1a0xpa2UvJHtzZWFyY2h9YCwge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgfSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UGxhbkhpc3RvcnkgPSAodXNlckRhdGEpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1BMQU4gK1xyXG4gICAgICBgL0FjdGl2aXR5VmlzaXRQbGFuL0dldEFjdGl2aXR5VmlzaXRQbGFuQnk/dXNlcm5hbWU9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICB2YXIgcmVzID0gZGF0YS5maWx0ZXIoKHZhbCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB2YWwuaXNDaGVja091dCA9PT0gdHJ1ZTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiByZXM7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3Qgc3VibWl0VmlzaXRQbGFuID0gKGRhdGEpID0+IHtcclxuICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArIEFQSV9WSVNJVF9QTEFOICsgXCIvQWN0aXZpdHlWaXNpdFBsYW4vU2F2ZUFsbEFjdGl2aXR5VmlzaXRQbGFuXCIsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgZ2V0TWVudSxcclxuICBnZXRQbGFuTGlzdCxcclxuICBnZXRBdXRoLFxyXG4gIG9uTG9naW4sXHJcbiAgZ2V0UGxhbklkLFxyXG4gIGdldFBvc20sXHJcbiAgZ2V0UHJvZHVjdFNlYXJjaCxcclxuICBnZXRQbGFuSGlzdG9yeSxcclxuICBzdWJtaXRWaXNpdFBsYW4sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=