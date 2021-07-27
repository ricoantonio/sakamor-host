webpackHotUpdate_N_E("pages/reward",{

/***/ "./pages/reward/index.jsx":
/*!********************************!*\
  !*** ./pages/reward/index.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Announcement; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_pages_Reward_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/pages/Reward.module.css */ "./styles/pages/Reward.module.css");
/* harmony import */ var _styles_pages_Reward_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Reward_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ "./store/index.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helper */ "./helper.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_BotNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/BotNav */ "./components/BotNav.jsx");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Nav */ "./components/Nav.jsx");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Card */ "./components/Card.jsx");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Spinner */ "./components/Spinner.jsx");
/* harmony import */ var _components_TableLastDataIncentive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/TableLastDataIncentive */ "./components/TableLastDataIncentive.jsx");



var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-new\\pages\\reward\\index.jsx",
    _s = $RefreshSig$();













function Announcement() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store__WEBPACK_IMPORTED_MODULE_4__["Stores"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch,
      actions = _useContext.actions;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      dataKpi = _useState[0],
      setDataKpi = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      dataGraph = _useState3[0],
      setDataGraph = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(new Date()),
      now = _useState4[0],
      setNow = _useState4[1];

  var data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "Last Data Insentive",
      data: dataGraph,
      fill: false,
      backgroundColor: "rgb(65, 134, 122)",
      borderColor: "rgba(65, 134, 122, 0.2)"
    }]
  };
  var options = {
    scales: {
      yAxes: [{
        ticks: {
          // beginAtZero: true,
          callback: function callback(label, index, labels) {
            return Math.round(label / 100000 * 10) / 100 + " k";
          }
        }
      }]
    },
    tooltips: {
      enabled: false
    },
    hover: {
      mode: null
    }
  };
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var userData = JSON.parse(localStorage.getItem("user"));
    Object(_helper__WEBPACK_IMPORTED_MODULE_5__["getKpiInventiveMonthlySMR"])(userData, now).then(function (dataKpi) {
      setDataKpi(dataKpi);
      Object(_helper__WEBPACK_IMPORTED_MODULE_5__["getIncentiveYearly"])(userData).then(function (data) {
        data.sort(function (a, b) {
          return a.bulan - b.bulan;
        });
        var yearlyIncentive = data.map(function (val) {
          return val.totalInsentif;
        });
        setDataGraph(yearlyIncentive);
        setLoading(false);
      })["catch"](function (err) {
        console.log(err);
      });
    })["catch"](function (err) {
      console.log(err);
    });
  }, [dispatch, now]);

  var total = function total() {
    var totalIncentive = 0;
    dataKpi.map(function (val) {
      var splitGroup = val.grup.split(".");

      if (splitGroup[1] == 0) {
        totalIncentive += val.insentif;
      }
    });
    return totalIncentive;
  };

  if (loading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 12
    }, this);
  } else {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_pages_Reward_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Nav__WEBPACK_IMPORTED_MODULE_8__["default"], {
          title: "Reward",
          color: "white",
          noBack: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_Reward_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
            style: {
              borderRadius: "6px",
              marginTop: "20px"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
              href: "/reward/benefits",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                style: {
                  textDecoration: "none"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_Reward_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.reward_grid2,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_pages_Reward_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.add_reward,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      style: {
                        marginTop: "-11px"
                      },
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        src: "/alert-circle.svg"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 119,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 118,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 117,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    style: {
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#FEB800"
                    },
                    children: ["Benefits", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      style: {
                        color: "#B9B9C3",
                        fontWeight: "300",
                        fontSize: "13px"
                      },
                      children: "See you benefits here"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 130,
                      columnNumber: 23
                    }, this), " "]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 122,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    style: {
                      textAlign: "center"
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "/next.svg"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 141,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 140,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
            style: {
              borderRadius: "6px",
              marginTop: "20px"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_10__["Line"], {
              data: data,
              options: options
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
            style: {
              borderRadius: "6px",
              marginTop: "20px",
              padding: "15px",
              color: "#5E5873"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  style: {
                    marginRight: "5px"
                  },
                  onClick: function onClick() {
                    if (moment__WEBPACK_IMPORTED_MODULE_6___default()(now).format("MMMM YYYY") !== moment__WEBPACK_IMPORTED_MODULE_6___default()().subtract(1, "years").format("MMMM YYYY")) {
                      setNow(moment__WEBPACK_IMPORTED_MODULE_6___default()(now).subtract(1, "months"));
                    }
                  },
                  children: moment__WEBPACK_IMPORTED_MODULE_6___default()(now).format("MMMM YYYY") !== moment__WEBPACK_IMPORTED_MODULE_6___default()().subtract(1, "years").format("MMMM YYYY") ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/cev_left.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 173,
                    columnNumber: 23
                  }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    style: {
                      height: "20px"
                    },
                    src: "/chev_left_gray.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 175,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 160,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: moment__WEBPACK_IMPORTED_MODULE_6___default()(now).format("MMMM YYYY")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 181,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  style: {
                    marginLeft: "5px"
                  },
                  onClick: function onClick() {
                    if (moment__WEBPACK_IMPORTED_MODULE_6___default()().format("MMMM YYYY") !== moment__WEBPACK_IMPORTED_MODULE_6___default()(now).format("MMMM YYYY")) {
                      setNow(moment__WEBPACK_IMPORTED_MODULE_6___default()(now).add(1, "months"));
                    }
                  },
                  children: moment__WEBPACK_IMPORTED_MODULE_6___default()().format("MMMM YYYY") !== moment__WEBPACK_IMPORTED_MODULE_6___default()(now).format("MMMM YYYY") ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/next.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 195,
                    columnNumber: 23
                  }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    style: {
                      height: "20px"
                    },
                    src: "/chev_right_gray.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 197,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 182,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                fontSize: "24px",
                fontWeight: "700",
                color: "#41867a"
              },
              children: dataKpi ? "".concat(total().toLocaleString("id-ID"), " IDR") : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: "No data"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 215,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
            style: {
              borderRadius: "6px",
              marginTop: "20px",
              padding: "15px",
              color: "#5E5873"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                fontWeight: "700"
              },
              children: ["KPI Incentive Monthly ( ", moment__WEBPACK_IMPORTED_MODULE_6___default()(now).format("MMMM YYYY"), " )"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 15
            }, this), dataKpi ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_TableLastDataIncentive__WEBPACK_IMPORTED_MODULE_12__["default"], {
              data: dataKpi
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 17
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "No Data"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              marginBottom: "120px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_BotNav__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 9
      }, this)]
    }, void 0, true);
  }
}

_s(Announcement, "tjpL5H/fnqw0H6L1K0UYQuHIpkw=");

_c = Announcement;

var _c;

$RefreshReg$(_c, "Announcement");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmV3YXJkL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJBbm5vdW5jZW1lbnQiLCJ1c2VDb250ZXh0IiwiU3RvcmVzIiwic3RhdGUiLCJkaXNwYXRjaCIsImFjdGlvbnMiLCJ1c2VTdGF0ZSIsImRhdGFLcGkiLCJzZXREYXRhS3BpIiwibG9hZGluZyIsInNldExvYWRpbmciLCJkYXRhR3JhcGgiLCJzZXREYXRhR3JhcGgiLCJEYXRlIiwibm93Iiwic2V0Tm93IiwiZGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJmaWxsIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJvcHRpb25zIiwic2NhbGVzIiwieUF4ZXMiLCJ0aWNrcyIsImNhbGxiYWNrIiwiaW5kZXgiLCJNYXRoIiwicm91bmQiLCJ0b29sdGlwcyIsImVuYWJsZWQiLCJob3ZlciIsIm1vZGUiLCJ1c2VFZmZlY3QiLCJ1c2VyRGF0YSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJnZXRLcGlJbnZlbnRpdmVNb250aGx5U01SIiwidGhlbiIsImdldEluY2VudGl2ZVllYXJseSIsInNvcnQiLCJhIiwiYiIsImJ1bGFuIiwieWVhcmx5SW5jZW50aXZlIiwibWFwIiwidmFsIiwidG90YWxJbnNlbnRpZiIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJ0b3RhbCIsInRvdGFsSW5jZW50aXZlIiwic3BsaXRHcm91cCIsImdydXAiLCJzcGxpdCIsImluc2VudGlmIiwic3R5bGVzIiwid3JhcHBlciIsIm1haW4iLCJib3JkZXJSYWRpdXMiLCJtYXJnaW5Ub3AiLCJ0ZXh0RGVjb3JhdGlvbiIsInJld2FyZF9ncmlkMiIsImFkZF9yZXdhcmQiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJjb2xvciIsInRleHRBbGlnbiIsInBhZGRpbmciLCJtYXJnaW5SaWdodCIsIm1vbWVudCIsImZvcm1hdCIsInN1YnRyYWN0IiwiaGVp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Q0hnRCxLQUFLLEdBQUcwQixjQUFSLENBQXVCLE9BQXZCLENBREcseUJBR047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXZERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBdENGLGVBMkdFLHFFQUFDLHdEQUFEO0FBQ0UsaUJBQUssRUFBRTtBQUNMakIsMEJBQVksRUFBRSxLQURUO0FBRUxDLHVCQUFTLEVBQUUsTUFGTjtBQUdMUSxxQkFBTyxFQUFFLE1BSEo7QUFJTEYsbUJBQUssRUFBRTtBQUpGLGFBRFQ7QUFBQSxvQ0FRRTtBQUFLLG1CQUFLLEVBQUU7QUFBRUQsMEJBQVUsRUFBRTtBQUFkLGVBQVo7QUFBQSxxREFDMkJLLDZDQUFNLENBQUM3RCxHQUFELENBQU4sQ0FBWThELE1BQVosQ0FBbUIsV0FBbkIsQ0FEM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVJGLEVBV0dyRSxPQUFPLGdCQUNOLHFFQUFDLDJFQUFEO0FBQXdCLGtCQUFJLEVBQUVBO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRE0sZ0JBR047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTNHRixlQTRIRTtBQUFLLGlCQUFLLEVBQUU7QUFBRTJFLDBCQUFZLEVBQUU7QUFBaEI7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTVIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFrSUUscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxJRjtBQUFBLG9CQURGO0FBc0lEO0FBQ0Y7O0dBaE91QmxGLFk7O0tBQUFBLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmV3YXJkLjRkMzE4MWNjNDFkMjk2MjRjMGE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvcGFnZXMvUmV3YXJkLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBTdG9yZXMgfSBmcm9tIFwiLi4vLi4vc3RvcmVcIjtcclxuaW1wb3J0IHtcclxuICBnZXRBbGxBbm5vdW5jZW1lbnQsXHJcbiAgZ2V0SW5jZW50aXZlWWVhcmx5LFxyXG4gIGdldEtwaUludmVudGl2ZU1vbnRobHlTTVIsXHJcbn0gZnJvbSBcIi4uLy4uL2hlbHBlclwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IEJvdE5hdiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Cb3ROYXZcIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9OYXZcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ2FyZFwiO1xyXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiO1xyXG5cclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU3Bpbm5lclwiO1xyXG5pbXBvcnQgVGFiZWxMYXN0RGF0YUluY2VudGl2ZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9UYWJsZUxhc3REYXRhSW5jZW50aXZlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbm5vdW5jZW1lbnQoKSB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2gsIGFjdGlvbnMgfSA9IHVzZUNvbnRleHQoU3RvcmVzKTtcclxuICBjb25zdCBbZGF0YUtwaSwgc2V0RGF0YUtwaV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2RhdGFHcmFwaCwgc2V0RGF0YUdyYXBoXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbm93LCBzZXROb3ddID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XHJcblxyXG4gIGNvbnN0IGRhdGEgPSB7XHJcbiAgICBsYWJlbHM6IFtcclxuICAgICAgXCJKYW5cIixcclxuICAgICAgXCJGZWJcIixcclxuICAgICAgXCJNYXJcIixcclxuICAgICAgXCJBcHJcIixcclxuICAgICAgXCJNYXlcIixcclxuICAgICAgXCJKdW5lXCIsXHJcbiAgICAgIFwiSnVseVwiLFxyXG4gICAgICBcIkF1Z1wiLFxyXG4gICAgICBcIlNlcHRcIixcclxuICAgICAgXCJPY3RcIixcclxuICAgICAgXCJOb3ZcIixcclxuICAgICAgXCJEZWNcIixcclxuICAgIF0sXHJcbiAgICBkYXRhc2V0czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwiTGFzdCBEYXRhIEluc2VudGl2ZVwiLFxyXG4gICAgICAgIGRhdGE6IGRhdGFHcmFwaCxcclxuICAgICAgICBmaWxsOiBmYWxzZSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDY1LCAxMzQsIDEyMilcIixcclxuICAgICAgICBib3JkZXJDb2xvcjogXCJyZ2JhKDY1LCAxMzQsIDEyMiwgMC4yKVwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9O1xyXG5cclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgc2NhbGVzOiB7XHJcbiAgICAgIHlBeGVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgLy8gYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAobGFiZWwsIGluZGV4LCBsYWJlbHMpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCgobGFiZWwgLyAxMDAwMDApICogMTApIC8gMTAwICsgXCIga1wiO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHRvb2x0aXBzOiB7IGVuYWJsZWQ6IGZhbHNlIH0sXHJcbiAgICBob3ZlcjogeyBtb2RlOiBudWxsIH0sXHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xyXG4gICAgZ2V0S3BpSW52ZW50aXZlTW9udGhseVNNUih1c2VyRGF0YSwgbm93KVxyXG4gICAgICAudGhlbigoZGF0YUtwaSkgPT4ge1xyXG4gICAgICAgIHNldERhdGFLcGkoZGF0YUtwaSk7XHJcbiAgICAgICAgZ2V0SW5jZW50aXZlWWVhcmx5KHVzZXJEYXRhKVxyXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgZGF0YS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGEuYnVsYW4gLSBiLmJ1bGFuO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyIHllYXJseUluY2VudGl2ZSA9IGRhdGEubWFwKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gdmFsLnRvdGFsSW5zZW50aWY7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZXREYXRhR3JhcGgoeWVhcmx5SW5jZW50aXZlKTtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtkaXNwYXRjaCwgbm93XSk7XHJcblxyXG4gIGNvbnN0IHRvdGFsID0gKCkgPT4ge1xyXG4gICAgdmFyIHRvdGFsSW5jZW50aXZlID0gMDtcclxuICAgIGRhdGFLcGkubWFwKCh2YWwpID0+IHtcclxuICAgICAgdmFyIHNwbGl0R3JvdXAgPSB2YWwuZ3J1cC5zcGxpdChcIi5cIik7XHJcbiAgICAgIGlmIChzcGxpdEdyb3VwWzFdID09IDApIHtcclxuICAgICAgICB0b3RhbEluY2VudGl2ZSArPSB2YWwuaW5zZW50aWY7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRvdGFsSW5jZW50aXZlO1xyXG4gIH07XHJcblxyXG4gIGlmIChsb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPFNwaW5uZXIgLz47XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgIDxOYXYgdGl0bGU9e1wiUmV3YXJkXCJ9IGNvbG9yPXtcIndoaXRlXCJ9IG5vQmFjayAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICAgICAgPENhcmQgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjZweFwiLCBtYXJnaW5Ub3A6IFwiMjBweFwiIH19PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmV3YXJkL2JlbmVmaXRzXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmV3YXJkX2dyaWQyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZF9yZXdhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiLTExcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiL2FsZXJ0LWNpcmNsZS5zdmdcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE2cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI2MDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI0ZFQjgwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBCZW5lZml0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNCOUI5QzNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjMwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEzcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2VlIHlvdSBiZW5lZml0cyBoZXJlXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17XCIvbmV4dC5zdmdcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI2cHhcIiwgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICA8TGluZSBkYXRhPXtkYXRhfSBvcHRpb25zPXtvcHRpb25zfSAvPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI2cHhcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjE1cHhcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1RTU4NzNcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbWVudChub3cpLmZvcm1hdChcIk1NTU0gWVlZWVwiKSAhPT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9tZW50KCkuc3VidHJhY3QoMSwgXCJ5ZWFyc1wiKS5mb3JtYXQoXCJNTU1NIFlZWVlcIilcclxuICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXROb3cobW9tZW50KG5vdykuc3VidHJhY3QoMSwgXCJtb250aHNcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7bW9tZW50KG5vdykuZm9ybWF0KFwiTU1NTSBZWVlZXCIpICE9PVxyXG4gICAgICAgICAgICAgICAgICAgIG1vbWVudCgpLnN1YnRyYWN0KDEsIFwieWVhcnNcIikuZm9ybWF0KFwiTU1NTSBZWVlZXCIpID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiL2Nldl9sZWZ0LnN2Z1wifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIyMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcIi9jaGV2X2xlZnRfZ3JheS5zdmdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57bW9tZW50KG5vdykuZm9ybWF0KFwiTU1NTSBZWVlZXCIpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb21lbnQoKS5mb3JtYXQoXCJNTU1NIFlZWVlcIikgIT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbWVudChub3cpLmZvcm1hdChcIk1NTU0gWVlZWVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE5vdyhtb21lbnQobm93KS5hZGQoMSwgXCJtb250aHNcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7bW9tZW50KCkuZm9ybWF0KFwiTU1NTSBZWVlZXCIpICE9PVxyXG4gICAgICAgICAgICAgICAgICAgIG1vbWVudChub3cpLmZvcm1hdChcIk1NTU0gWVlZWVwiKSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcIi9uZXh0LnN2Z1wifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIyMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcIi9jaGV2X3JpZ2h0X2dyYXkuc3ZnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjI0cHhcIixcclxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI3MDBcIixcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzQxODY3YVwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YUtwaSA/IChcclxuICAgICAgICAgICAgICAgICAgYCR7dG90YWwoKS50b0xvY2FsZVN0cmluZyhcImlkLUlEXCIpfSBJRFJgXHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2Pk5vIGRhdGE8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjZweFwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTVweFwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiIzVFNTg3M1wiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiNzAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICBLUEkgSW5jZW50aXZlIE1vbnRobHkgKCB7bW9tZW50KG5vdykuZm9ybWF0KFwiTU1NTSBZWVlZXCIpfSApXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge2RhdGFLcGkgPyAoXHJcbiAgICAgICAgICAgICAgICA8VGFiZWxMYXN0RGF0YUluY2VudGl2ZSBkYXRhPXtkYXRhS3BpfSAvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2Pk5vIERhdGE8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEyMHB4XCIgfX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxCb3ROYXYgLz5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9