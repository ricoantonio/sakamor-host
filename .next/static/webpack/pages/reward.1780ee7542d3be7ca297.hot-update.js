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

  var renderDataTableAchive = function renderDataTableAchive(index) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this);
  };

  var renderDataTableGradasi = function renderDataTableGradasi(index) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this);
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
      console.log(splitGroup);

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
            lineNumber: 42,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: val.insentif
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, _this);
      } else {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            colSpan: "7",
            children: val.kpi
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: Math.round(val.achievement * 10) / 10
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: Math.round(val.gradasi * 10) / 10
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: val.insentif
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
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
            lineNumber: 65,
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
            lineNumber: 79,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
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
            children: "Achiev"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            width: "20%",
            style: {
              fontSize: "8px"
            },
            children: "Gradasi"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            width: "20%",
            style: {
              fontSize: "8px"
            },
            children: "Intensif"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
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
            lineNumber: 118,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWJsZUxhc3REYXRhSW5jZW50aXZlLmpzeCJdLCJuYW1lcyI6WyJUYWJlbExhc3REYXRhSW5jZW50aXZlIiwiZGF0YSIsInJlbmRlckRhdGFUYWJsZUFjaGl2ZSIsImluZGV4IiwicmVuZGVyRGF0YVRhYmxlR3JhZGFzaSIsInJlbmRlckRhdGEiLCJzb3J0IiwiYSIsImIiLCJncnVwIiwibG9jYWxlQ29tcGFyZSIsInVuZGVmaW5lZCIsIm51bWVyaWMiLCJtYXAiLCJ2YWwiLCJzcGxpdEdyb3VwIiwic3BsaXQiLCJjb25zb2xlIiwibG9nIiwiYmFja2dyb3VuZENvbG9yIiwiZm9udFdlaWdodCIsImtwaSIsImluc2VudGlmIiwiTWF0aCIsInJvdW5kIiwiYWNoaWV2ZW1lbnQiLCJncmFkYXNpIiwic3R5bGVzIiwiaW5jZW50aXZlX3RhYmxlX2NvbnRhaW5lciIsInRhYmxlX2luY2VudGl2ZSIsIndpZHRoIiwiYm9yZGVyVG9wTGVmdFJhZGl1cyIsImZvbnRTaXplIiwiY29sb3IiLCJoZWlnaHQiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsInRleHRBbGlnbiIsInRib2R5X2luY2VudGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFDM0MsTUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFDQyxLQUFELEVBQVc7QUFDdkMsd0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBT0QsR0FSRDs7QUFVQSxNQUFNQyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUNELEtBQUQsRUFBVztBQUN4Qyx3QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFPRCxHQVJEOztBQVNBLE1BQU1FLFVBQVUsR0FB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O0FBbUVELENBMUhEOztLQUFNcEIsc0I7QUE0SFNBLHFGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jld2FyZC4xNzgwZWU3NTQyZDNiZTdjYTI5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jb21wb25lbnRzL1RhYmxlTGFzdERhdGFJbmNlbnRpdmUubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgVGFiZWxMYXN0RGF0YUluY2VudGl2ZSA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IHJlbmRlckRhdGFUYWJsZUFjaGl2ZSA9IChpbmRleCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHRkPlxyXG4gICAgICAgIHsvKiB7aW5jZW50aXZlW2luZGV4XS5hY2hpdmUgIT09IG51bGxcclxuICAgICAgICAgID8gYCR7aW5jZW50aXZlW2luZGV4XS5hY2hpdmV9JWBcclxuICAgICAgICAgIDogbnVsbH0gKi99XHJcbiAgICAgIDwvdGQ+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckRhdGFUYWJsZUdyYWRhc2kgPSAoaW5kZXgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0ZD5cclxuICAgICAgICB7Lyoge2luY2VudGl2ZVtpbmRleF0uZ3JhZGFzaSAhPT0gbnVsbFxyXG4gICAgICAgICAgPyBgJHtpbmNlbnRpdmVbaW5kZXhdLmdyYWRhc2l9JWBcclxuICAgICAgICAgIDogbnVsbH0gKi99XHJcbiAgICAgIDwvdGQ+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVyRGF0YSA9ICgpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgdmFyIHNvcnQgPSBkYXRhLnNvcnQoKGEsIGIpID0+XHJcbiAgICAgIGEuZ3J1cC5sb2NhbGVDb21wYXJlKGIuZ3J1cCwgdW5kZWZpbmVkLCB7IG51bWVyaWM6IHRydWUgfSlcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHNvcnQubWFwKCh2YWwpID0+IHtcclxuICAgICAgdmFyIHNwbGl0R3JvdXAgPSB2YWwuZ3J1cC5zcGxpdChcIi5cIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKHNwbGl0R3JvdXApO1xyXG4gICAgICBpZiAoc3BsaXRHcm91cFsxXSA9PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDx0clxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRjlGQ0Y1XCIsXHJcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI2MDBcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHRkIGNvbFNwYW49XCI3XCI+e3ZhbC5rcGl9PC90ZD5cclxuICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICA8dGQ+e3ZhbC5pbnNlbnRpZn08L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiN1wiPnt2YWwua3BpfTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD57TWF0aC5yb3VuZCh2YWwuYWNoaWV2ZW1lbnQgKiAxMCkgLyAxMH08L3RkPlxyXG4gICAgICAgICAgICA8dGQ+e01hdGgucm91bmQodmFsLmdyYWRhc2kgKiAxMCkgLyAxMH08L3RkPlxyXG4gICAgICAgICAgICA8dGQ+e3ZhbC5pbnNlbnRpZn08L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluY2VudGl2ZV90YWJsZV9jb250YWluZXJ9PlxyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMudGFibGVfaW5jZW50aXZlfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM0MTg2N2FcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IFwiNHB4XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxMnB4XCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzhweFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgY29sU3Bhbj1cIjdcIlxyXG4gICAgICAgICAgICAgIHJvd1NwYW49XCIyXCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjQwJVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBLUEkgSW5jZW50aXZlIE1vbnRobHlcclxuICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNDE4NjdhXCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogXCI0cHhcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjhweFwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgY29sU3Bhbj1cIjRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgS0FMS1VMQVRPUlxyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDx0clxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNDE4NjdhXCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IFwiNHB4XCIsXHJcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHRkIHdpZHRoPVwiMjAlXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiOHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgQWNoaWV2XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCB3aWR0aD1cIjIwJVwiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjhweFwiIH19PlxyXG4gICAgICAgICAgICAgIEdyYWRhc2lcclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPHRkIHdpZHRoPVwiMjAlXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiOHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgSW50ZW5zaWZcclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPXtzdHlsZXMudGJvZHlfaW5jZW50aXZlfT5cclxuICAgICAgICAgIHtyZW5kZXJEYXRhKCl9XHJcbiAgICAgICAgICA8dHJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0Y5RkNGNVwiLFxyXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNjAwXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiN1wiPlRvdGFsIFBlcmhpdHVuZ2FuPC90ZD5cclxuICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJlbExhc3REYXRhSW5jZW50aXZlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9