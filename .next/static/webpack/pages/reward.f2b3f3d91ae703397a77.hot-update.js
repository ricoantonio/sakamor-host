webpackHotUpdate_N_E("pages/reward",{

/***/ "./components/TableLastDataIncentive.jsx":
/*!***********************************************!*\
  !*** ./components/TableLastDataIncentive.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_components_TableLastDataIncentive_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/TableLastDataIncentive.module.css */ "./styles/components/TableLastDataIncentive.module.css");
/* harmony import */ var _styles_components_TableLastDataIncentive_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_TableLastDataIncentive_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-new\\components\\TableLastDataIncentive.jsx",
    _this = undefined;





var TabelLastDataIncentive = function TabelLastDataIncentive(_ref) {
  var data = _ref.data;

  var total = function total() {
    var totalIncentive = 0;
    data.map(function (val) {
      var splitGroup = val.grup.split(".");

      if (splitGroup[1] == 0) {
        totalIncentive += val.insentif;
      }
    });
    return totalIncentive;
  };

  var renderData = function renderData() {
    // console.log(data);
    var sort = data.sort(function (a, b) {
      return a.grup.localeCompare(b.grup, undefined, {
        numeric: true
      });
    });
    return sort.map(function (val) {
      var splitGroup = val.grup.split(".");

      if (splitGroup[1] == 0) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          style: {
            backgroundColor: "#F9FCF5",
            fontWeight: "600"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            colSpan: "7",
            children: val.kpi
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: val.insentif.toLocaleString("id-ID")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, _this);
      } else {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            colSpan: "7",
            children: val.kpi
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [Math.round(val.achievement * 10) / 10, "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [Math.round(val.gradasi * 10) / 10, "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: val.insentif.toLocaleString("id-ID")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, _this);
      }
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_TableLastDataIncentive_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.incentive_table_container,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
      className: _styles_components_TableLastDataIncentive_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.table_incentive,
      style: {
        width: "100%"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            style: {
              backgroundColor: "#41867a",
              borderTopLeftRadius: "4px",
              fontSize: "12px",
              color: "#fff",
              height: "38px"
            },
            colSpan: "7",
            rowSpan: "2",
            width: "40%",
            children: "KPI Incentive Monthly"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            style: {
              backgroundColor: "#41867a",
              borderTopRightRadius: "4px",
              fontSize: "8px",
              color: "#fff"
            },
            colSpan: "4",
            children: "KALKULATOR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          style: {
            backgroundColor: "#41867a",
            borderTopRightRadius: "4px",
            textAlign: "center",
            color: "#fff"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            width: "20%",
            style: {
              fontSize: "8px"
            },
            children: "Achievment"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            width: "20%",
            style: {
              fontSize: "8px"
            },
            children: "Gradasi"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            width: "20%",
            style: {
              fontSize: "8px"
            },
            children: "Intensif"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        className: _styles_components_TableLastDataIncentive_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.tbody_incentive,
        children: [renderData(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          style: {
            backgroundColor: "#F9FCF5",
            fontWeight: "600"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            colSpan: "7",
            children: "Total Perhitungan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: total().toLocaleString("id-ID")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, _this);
};

_c = TabelLastDataIncentive;
/* harmony default export */ __webpack_exports__["default"] = (TabelLastDataIncentive);

var _c;

$RefreshReg$(_c, "TabelLastDataIncentive");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWJsZUxhc3REYXRhSW5jZW50aXZlLmpzeCJdLCJuYW1lcyI6WyJUYWJlbExhc3REYXRhSW5jZW50aXZlIiwiZGF0YSIsInRvdGFsIiwidG90YWxJbmNlbnRpdmUiLCJtYXAiLCJ2YWwiLCJzcGxpdEdyb3VwIiwiZ3J1cCIsInNwbGl0IiwiaW5zZW50aWYiLCJyZW5kZXJEYXRhIiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsInVuZGVmaW5lZCIsIm51bWVyaWMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb250V2VpZ2h0Iiwia3BpIiwidG9Mb2NhbGVTdHJpbmciLCJNYXRoIiwicm91bmQiLCJhY2hpZXZlbWVudCIsImdyYWRhc2kiLCJzdHlsZXMiLCJpbmNlbnRpdmVfdGFibGVfY29udGFpbmVyIiwidGFibGVfaW5jZW50aXZlIiwid2lkdGgiLCJib3JkZXJUb3BMZWZ0UmFkaXVzIiwiZm9udFNpemUiLCJjb2xvciIsImhlaWdodCIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwidGV4dEFsaWduIiwidGJvZHlfaW5jZW50aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUMzQyxNQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQ2xCLFFBQUlDLGNBQWMsR0FBRyxDQUFyQjtBQUNBRixRQUFJLENBQUNHLEdBQUwsQ0FBUyxVQUFDQyxHQUFELEVBQVM7QUFDaEIsVUFBSUMsVUFBVSxHQUFHRCxHQUFHLENBQUNFLElBQUosQ0FBU0MsS0FBVCxDQUFlLEdBQWYsQ0FBakI7O0FBQ0EsVUFBSUYsVUFBVSxDQUFDLENBQUQsQ0FBVixJQUFpQixDQUFyQixFQUF3QjtBQUN0Qkgsc0JBQWMsSUFBSUUsR0FBRyxDQUFD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LE9BQXZCO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1FRCxDQWhIRDs7S0FBTXBCLHNCO0FBa0hTQSxxRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZXdhcmQuZjJiM2YzZDkxYWU3MDMzOTdhNzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvY29tcG9uZW50cy9UYWJsZUxhc3REYXRhSW5jZW50aXZlLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IFRhYmVsTGFzdERhdGFJbmNlbnRpdmUgPSAoeyBkYXRhIH0pID0+IHtcclxuICBjb25zdCB0b3RhbCA9ICgpID0+IHtcclxuICAgIHZhciB0b3RhbEluY2VudGl2ZSA9IDA7XHJcbiAgICBkYXRhLm1hcCgodmFsKSA9PiB7XHJcbiAgICAgIHZhciBzcGxpdEdyb3VwID0gdmFsLmdydXAuc3BsaXQoXCIuXCIpO1xyXG4gICAgICBpZiAoc3BsaXRHcm91cFsxXSA9PSAwKSB7XHJcbiAgICAgICAgdG90YWxJbmNlbnRpdmUgKz0gdmFsLmluc2VudGlmO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0b3RhbEluY2VudGl2ZTtcclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlckRhdGEgPSAoKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIHZhciBzb3J0ID0gZGF0YS5zb3J0KChhLCBiKSA9PlxyXG4gICAgICBhLmdydXAubG9jYWxlQ29tcGFyZShiLmdydXAsIHVuZGVmaW5lZCwgeyBudW1lcmljOiB0cnVlIH0pXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBzb3J0Lm1hcCgodmFsKSA9PiB7XHJcbiAgICAgIHZhciBzcGxpdEdyb3VwID0gdmFsLmdydXAuc3BsaXQoXCIuXCIpO1xyXG4gICAgICBpZiAoc3BsaXRHcm91cFsxXSA9PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDx0clxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRjlGQ0Y1XCIsXHJcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI2MDBcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHRkIGNvbFNwYW49XCI3XCI+e3ZhbC5rcGl9PC90ZD5cclxuICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICA8dGQ+e3ZhbC5pbnNlbnRpZi50b0xvY2FsZVN0cmluZyhcImlkLUlEXCIpfTwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRkIGNvbFNwYW49XCI3XCI+e3ZhbC5rcGl9PC90ZD5cclxuICAgICAgICAgICAgPHRkPntNYXRoLnJvdW5kKHZhbC5hY2hpZXZlbWVudCAqIDEwKSAvIDEwfSU8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+e01hdGgucm91bmQodmFsLmdyYWRhc2kgKiAxMCkgLyAxMH0lPC90ZD5cclxuICAgICAgICAgICAgPHRkPnt2YWwuaW5zZW50aWYudG9Mb2NhbGVTdHJpbmcoXCJpZC1JRFwiKX08L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluY2VudGl2ZV90YWJsZV9jb250YWluZXJ9PlxyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMudGFibGVfaW5jZW50aXZlfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM0MTg2N2FcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IFwiNHB4XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxMnB4XCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzhweFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgY29sU3Bhbj1cIjdcIlxyXG4gICAgICAgICAgICAgIHJvd1NwYW49XCIyXCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjQwJVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBLUEkgSW5jZW50aXZlIE1vbnRobHlcclxuICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNDE4NjdhXCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogXCI0cHhcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjhweFwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgY29sU3Bhbj1cIjRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgS0FMS1VMQVRPUlxyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDx0clxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNDE4NjdhXCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IFwiNHB4XCIsXHJcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHRkIHdpZHRoPVwiMjAlXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiOHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgQWNoaWV2bWVudFxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8dGQgd2lkdGg9XCIyMCVcIiBzdHlsZT17eyBmb250U2l6ZTogXCI4cHhcIiB9fT5cclxuICAgICAgICAgICAgICBHcmFkYXNpXHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCB3aWR0aD1cIjIwJVwiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjhweFwiIH19PlxyXG4gICAgICAgICAgICAgIEludGVuc2lmXHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5IGNsYXNzTmFtZT17c3R5bGVzLnRib2R5X2luY2VudGl2ZX0+XHJcbiAgICAgICAgICB7cmVuZGVyRGF0YSgpfVxyXG4gICAgICAgICAgPHRyXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGOUZDRjVcIixcclxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjYwMFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjdcIj5Ub3RhbCBQZXJoaXR1bmdhbjwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgPHRkPnt0b3RhbCgpLnRvTG9jYWxlU3RyaW5nKFwiaWQtSURcIil9PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJlbExhc3REYXRhSW5jZW50aXZlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9