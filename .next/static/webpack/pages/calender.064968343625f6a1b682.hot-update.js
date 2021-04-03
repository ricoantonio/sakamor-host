webpackHotUpdate_N_E("pages/calender",{

/***/ "./pages/calender.jsx":
/*!****************************!*\
  !*** ./pages/calender.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Calender; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_pages_Calender_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/pages/Calender.module.css */ "./styles/pages/Calender.module.css");
/* harmony import */ var _styles_pages_Calender_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Calender_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store */ "./store/index.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Spinner */ "./components/Spinner.jsx");
/* harmony import */ var _components_BotNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/BotNav */ "./components/BotNav.jsx");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.jsx");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Button */ "./components/Button.jsx");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Card */ "./components/Card.jsx");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helper */ "./helper.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);



var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-new\\pages\\calender.jsx",
    _s = $RefreshSig$();














function Calender() {
  _s();

  var _this = this;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store__WEBPACK_IMPORTED_MODULE_6__["Stores"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch,
      actions = _useContext.actions;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("Day"),
      focus = _useState[0],
      setFocus = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      loadingMenu = _useState3[0],
      setLoadingMenu = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(new Date()),
      now = _useState4[0],
      setNow = _useState4[1];

  var dayName = moment__WEBPACK_IMPORTED_MODULE_13___default()(now).format("dddd");
  var date = moment__WEBPACK_IMPORTED_MODULE_13___default()().format("D");
  var monthFull = moment__WEBPACK_IMPORTED_MODULE_13___default()().format("MMMM");
  var year = moment__WEBPACK_IMPORTED_MODULE_13___default()().format("YYYY");

  var renderTopMenu = function renderTopMenu() {
    var menu = ["Day", "Week", "Month"];
    return menu.map(function (val, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: function onClick() {
          return setFocus(val);
        },
        className: focus === val ? _styles_pages_Calender_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menu_active : _styles_pages_Calender_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menu_non_active,
        children: val
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this);
    });
  };

  var renderDayList = function renderDayList(type, data) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        fontSize: "14px",
        fontWeight: "500",
        color: "#5E5873",
        textAlign: "left",
        margin: "10px 0"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "12% 88%"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            width: "20px",
            height: "20px",
            backgroundColor: type === "PROMO" ? "#d1e4e1" : "#FFF1CC",
            borderRadius: "20px",
            padding: "4px"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              width: "12px",
              height: "12px",
              backgroundColor: type === "PROMO" ? "#41867a" : "#feb800",
              borderRadius: "20px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: "Kalpanax Promo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              fontSize: "12px",
              fontWeight: "300"
            },
            children: "All Outlet"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this);
  };

  var renderMenuDay = function renderMenuDay() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_11__["default"], {
        style: {
          borderRadius: "6px",
          marginTop: "12px"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            padding: "22px 0 0 22px"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _styles_pages_Calender_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.day_promo_title,
            children: "Promo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            padding: "6px 20px"
          },
          children: renderDayList("PROMO")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_11__["default"], {
        style: {
          borderRadius: "6px",
          marginTop: "12px"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            padding: "22px 0 0 22px"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _styles_pages_Calender_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.day_program_title,
            children: "Program"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            padding: "6px 20px"
          },
          children: renderDayList("PROGRAM")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, _this)]
    }, void 0, true);
  };

  var renderMenuWeek = function renderMenuWeek() {};

  var renderMenuMonth = function renderMenuMonth() {};

  var renderPage = function renderPage() {
    if (loading && loadingMenu) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 14
      }, _this);
    } else return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "icon",
          href: "/favicon.ico"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_pages_Calender_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_Calender_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.wrapper,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Nav__WEBPACK_IMPORTED_MODULE_9__["default"], {
            title: "Calender",
            color: "white",
            noBack: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Calender_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_11__["default"], {
              style: {
                borderRadius: "6px"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Calender_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menu_grid,
                children: renderTopMenu()
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Calender_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.day_title,
                children: dayName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Calender_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.day_grid,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/cev_left.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_pages_Calender_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.day_date_display,
                    children: date
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/cev_right.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 137,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Calender_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.day_bot_display,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: month
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: year
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 17
            }, _this), focus === "Day" ? renderMenuDay() : focus === "Week" ? renderMenuWeek() : focus === "Month" ? renderMenuMonth() : ""]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_BotNav__WEBPACK_IMPORTED_MODULE_8__["default"], {
        focus: "calender"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }, _this);
  };

  return renderPage();
}

_s(Calender, "OzAAXiUODQyCmxYif4MXHiqZPII=");

_c = Calender;

var _c;

$RefreshReg$(_c, "Calender");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FsZW5kZXIuanN4Il0sIm5hbWVzIjpbIkNhbGVuZGVyIiwidXNlQ29udGV4dCIsIlN0b3JlcyIsInN0YXRlIiwiZGlzcGF0Y2giLCJhY3Rpb25zIiwidXNlU3RhdGUiLCJmb2N1cyIsInNldEZvY3VzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJsb2FkaW5nTWVudSIsInNldExvYWRpbmdNZW51IiwiRGF0ZSIsIm5vdyIsInNldE5vdyIsImRheU5hbWUiLCJtb21lbnQiLCJmb3JtYXQiLCJkYXRlIiwibW9udGhGdWxsIiwieWVhciIsInJlbmRlclRvcE1lbnUiLCJtZW51IiwibWFwIiwidmFsIiwiaW5kZXgiLCJzdHlsZXMiLCJtZW51X2FjdGl2ZSIsIm1lbnVfbm9uX2FjdGl2ZSIsInJlbmRlckRheUxpc3QiLCJ0eXBlIiwiZGF0YSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImNvbG9yIiwidGV4dEFsaWduIiwibWFyZ2luIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJyZW5kZXJNZW51RGF5IiwibWFyZ2luVG9wIiwiZGF5X3Byb21vX3RpdGxlIiwiZGF5X3Byb2dyYW1fdGl0bGUiLCJyZW5kZXJNZW51V2VlayIsInJlbmRlck1lbnVNb250aCIsInJlbmRlclBhZ2UiLCJjb250YWluZXIiLCJ3cmFwcGVyIiwibWFpbiIsIm1lbnVfZ3JpZCIsImRheV90aXRsZSIsImRheV9ncmlkIiwiZGF5X2RhdGVfZGlzcGxheSIsImRheV9ib3RfZGlzcGxheSIsIm1vbnRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVlLFNB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QUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixlQXNDRSxxRUFBQywwREFBRDtBQUFRLGFBQUssRUFBRTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUEwQ0gsR0E5Q0Q7O0FBK0NBLFNBQU9DLFVBQVUsRUFBakI7QUFDRDs7R0EvSXVCbkQsUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYWxlbmRlci4wNjQ5NjgzNDM2MjVmNmExYjY4Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvcGFnZXMvQ2FsZW5kZXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IFN0b3JlcyB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU3Bpbm5lclwiO1xyXG5pbXBvcnQgQm90TmF2IGZyb20gXCIuLi9jb21wb25lbnRzL0JvdE5hdlwiO1xyXG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL05hdlwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0J1dHRvblwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkXCI7XHJcblxyXG5pbXBvcnQgeyBnZXRBdXRoLCBnZXRNZW51LCBnZXRQbGFuTGlzdCB9IGZyb20gXCIuLi9oZWxwZXJcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYWxlbmRlcigpIHtcclxuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCwgYWN0aW9ucyB9ID0gdXNlQ29udGV4dChTdG9yZXMpO1xyXG4gIGNvbnN0IFtmb2N1cywgc2V0Rm9jdXNdID0gdXNlU3RhdGUoXCJEYXlcIik7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nTWVudSwgc2V0TG9hZGluZ01lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtub3csIHNldE5vd10gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcclxuXHJcbiAgdmFyIGRheU5hbWUgPSBtb21lbnQobm93KS5mb3JtYXQoXCJkZGRkXCIpO1xyXG4gIHZhciBkYXRlID0gbW9tZW50KCkuZm9ybWF0KFwiRFwiKTtcclxuICB2YXIgbW9udGhGdWxsID0gbW9tZW50KCkuZm9ybWF0KFwiTU1NTVwiKTtcclxuICB2YXIgeWVhciA9IG1vbWVudCgpLmZvcm1hdChcIllZWVlcIik7XHJcblxyXG4gIGNvbnN0IHJlbmRlclRvcE1lbnUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtZW51ID0gW1wiRGF5XCIsIFwiV2Vla1wiLCBcIk1vbnRoXCJdO1xyXG4gICAgcmV0dXJuIG1lbnUubWFwKCh2YWwsIGluZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEZvY3VzKHZhbCl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICBmb2N1cyA9PT0gdmFsID8gc3R5bGVzLm1lbnVfYWN0aXZlIDogc3R5bGVzLm1lbnVfbm9uX2FjdGl2ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt2YWx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJEYXlMaXN0ID0gKHR5cGUsIGRhdGEpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxyXG4gICAgICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcclxuICAgICAgICAgIGNvbG9yOiBcIiM1RTU4NzNcIixcclxuICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgICBtYXJnaW46IFwiMTBweCAwXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjEyJSA4OCVcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdHlwZSA9PT0gXCJQUk9NT1wiID8gXCIjZDFlNGUxXCIgOiBcIiNGRkYxQ0NcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiNHB4XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTJweFwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEycHhcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdHlwZSA9PT0gXCJQUk9NT1wiID8gXCIjNDE4NjdhXCIgOiBcIiNmZWI4MDBcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj5LYWxwYW5heCBQcm9tbzwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjEycHhcIiwgZm9udFdlaWdodDogXCIzMDBcIiB9fT5cclxuICAgICAgICAgICAgICBBbGwgT3V0bGV0XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlck1lbnVEYXkgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxDYXJkIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI2cHhcIiwgbWFyZ2luVG9wOiBcIjEycHhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIyMnB4IDAgMCAyMnB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRheV9wcm9tb190aXRsZX0+UHJvbW88L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCI2cHggMjBweFwiIH19PntyZW5kZXJEYXlMaXN0KFwiUFJPTU9cIil9PC9kaXY+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDxDYXJkIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI2cHhcIiwgbWFyZ2luVG9wOiBcIjEycHhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIyMnB4IDAgMCAyMnB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRheV9wcm9ncmFtX3RpdGxlfT5Qcm9ncmFtPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiNnB4IDIwcHhcIiB9fT57cmVuZGVyRGF5TGlzdChcIlBST0dSQU1cIil9PC9kaXY+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfTtcclxuICBjb25zdCByZW5kZXJNZW51V2VlayA9ICgpID0+IHt9O1xyXG4gIGNvbnN0IHJlbmRlck1lbnVNb250aCA9ICgpID0+IHt9O1xyXG5cclxuICBjb25zdCByZW5kZXJQYWdlID0gKCkgPT4ge1xyXG4gICAgaWYgKGxvYWRpbmcgJiYgbG9hZGluZ01lbnUpIHtcclxuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+O1xyXG4gICAgfSBlbHNlXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+SG9tZTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgICA8TmF2IHRpdGxlPXtcIkNhbGVuZGVyXCJ9IGNvbG9yPXtcIndoaXRlXCJ9IG5vQmFjayAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiNnB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudV9ncmlkfT57cmVuZGVyVG9wTWVudSgpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRheV90aXRsZX0+e2RheU5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF5X2dyaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17XCIvY2V2X2xlZnQuc3ZnXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF5X2RhdGVfZGlzcGxheX0+e2RhdGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcIi9jZXZfcmlnaHQuc3ZnXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRheV9ib3RfZGlzcGxheX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj57bW9udGh9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj57eWVhcn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICB7Zm9jdXMgPT09IFwiRGF5XCJcclxuICAgICAgICAgICAgICAgICAgPyByZW5kZXJNZW51RGF5KClcclxuICAgICAgICAgICAgICAgICAgOiBmb2N1cyA9PT0gXCJXZWVrXCJcclxuICAgICAgICAgICAgICAgICAgPyByZW5kZXJNZW51V2VlaygpXHJcbiAgICAgICAgICAgICAgICAgIDogZm9jdXMgPT09IFwiTW9udGhcIlxyXG4gICAgICAgICAgICAgICAgICA/IHJlbmRlck1lbnVNb250aCgpXHJcbiAgICAgICAgICAgICAgICAgIDogXCJcIn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxCb3ROYXYgZm9jdXM9e1wiY2FsZW5kZXJcIn0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICB9O1xyXG4gIHJldHVybiByZW5kZXJQYWdlKCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==