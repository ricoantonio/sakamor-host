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
        lineNumber: 27,
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
            lineNumber: 66,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: "Kalpanax Promo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              fontSize: "12px",
              fontWeight: "300"
            },
            children: "All Outlet"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
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
            lineNumber: 90,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            padding: "6px 20px"
          },
          children: renderDayList("PROMO")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
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
          children: renderDayList("PROGRAM")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
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
        lineNumber: 108,
        columnNumber: 14
      }, _this);
    } else return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "icon",
          href: "/favicon.ico"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
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
            lineNumber: 118,
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
                lineNumber: 121,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Calender_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.day_title,
                children: dayName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Calender_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.day_grid,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/cev_left.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_pages_Calender_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.day_date_display,
                    children: date
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 128,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/cev_right.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Calender_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.day_bot_display,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: monthName.full[month - 1]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 135,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: year
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 17
            }, _this), focus === "Day" ? renderMenuDay() : focus === "Week" ? renderMenuWeek() : focus === "Month" ? renderMenuMonth() : ""]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_BotNav__WEBPACK_IMPORTED_MODULE_8__["default"], {
        focus: "calender"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 111,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FsZW5kZXIuanN4Il0sIm5hbWVzIjpbIkNhbGVuZGVyIiwidXNlQ29udGV4dCIsIlN0b3JlcyIsInN0YXRlIiwiZGlzcGF0Y2giLCJhY3Rpb25zIiwidXNlU3RhdGUiLCJmb2N1cyIsInNldEZvY3VzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJsb2FkaW5nTWVudSIsInNldExvYWRpbmdNZW51IiwiRGF0ZSIsIm5vdyIsInNldE5vdyIsInJlbmRlclRvcE1lbnUiLCJtZW51IiwibWFwIiwidmFsIiwiaW5kZXgiLCJzdHlsZXMiLCJtZW51X2FjdGl2ZSIsIm1lbnVfbm9uX2FjdGl2ZSIsInJlbmRlckRheUxpc3QiLCJ0eXBlIiwiZGF0YSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImNvbG9yIiwidGV4dEFsaWduIiwibWFyZ2luIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJyZW5kZXJNZW51RGF5IiwibWFyZ2luVG9wIiwiZGF5X3Byb21vX3RpdGxlIiwiZGF5X3Byb2dyYW1fdGl0bGUiLCJyZW5kZXJNZW51V2VlayIsInJlbmRlck1lbnVNb250aCIsInJlbmRlclBhZ2UiLCJjb250YWluZXIiLCJ3cmFwcGVyIiwibWFpbiIsIm1lbnVfZ3JpZCIsImRheV90aXRsZSIsImRheU5hbWUiLCJkYXlfZ3JpZCIsImRheV9kYXRlX2Rpc3BsYXkiLCJkYXRlIiwiZGF5X2JvdF9kaXNwbGF5IiwibW9udGhOYW1lIiwiZnVsbCIsIm1vbnRoIiwieWVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLFFBQVQsR0FBb0I7QUFB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Ijoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FsZW5kZXIuOTk3YWU2MjZjYzg0ZDk5ODcxZGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3BhZ2VzL0NhbGVuZGVyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBTdG9yZXMgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuXHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi9jb21wb25lbnRzL1NwaW5uZXJcIjtcclxuaW1wb3J0IEJvdE5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9Cb3ROYXZcIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZFwiO1xyXG5cclxuaW1wb3J0IHsgZ2V0QXV0aCwgZ2V0TWVudSwgZ2V0UGxhbkxpc3QgfSBmcm9tIFwiLi4vaGVscGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYWxlbmRlcigpIHtcclxuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCwgYWN0aW9ucyB9ID0gdXNlQ29udGV4dChTdG9yZXMpO1xyXG4gIGNvbnN0IFtmb2N1cywgc2V0Rm9jdXNdID0gdXNlU3RhdGUoXCJEYXlcIik7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nTWVudSwgc2V0TG9hZGluZ01lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtub3csIHNldE5vd10gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyVG9wTWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1lbnUgPSBbXCJEYXlcIiwgXCJXZWVrXCIsIFwiTW9udGhcIl07XHJcbiAgICByZXR1cm4gbWVudS5tYXAoKHZhbCwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Rm9jdXModmFsKX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgIGZvY3VzID09PSB2YWwgPyBzdHlsZXMubWVudV9hY3RpdmUgOiBzdHlsZXMubWVudV9ub25fYWN0aXZlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3ZhbH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckRheUxpc3QgPSAodHlwZSwgZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBmb250U2l6ZTogXCIxNHB4XCIsXHJcbiAgICAgICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxyXG4gICAgICAgICAgY29sb3I6IFwiIzVFNTg3M1wiLFxyXG4gICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcclxuICAgICAgICAgIG1hcmdpbjogXCIxMHB4IDBcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXHJcbiAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMTIlIDg4JVwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0eXBlID09PSBcIlBST01PXCIgPyBcIiNkMWU0ZTFcIiA6IFwiI0ZGRjFDQ1wiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI0cHhcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMnB4XCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTJweFwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0eXBlID09PSBcIlBST01PXCIgPyBcIiM0MTg2N2FcIiA6IFwiI2ZlYjgwMFwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PkthbHBhbmF4IFByb21vPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMTJweFwiLCBmb250V2VpZ2h0OiBcIjMwMFwiIH19PlxyXG4gICAgICAgICAgICAgIEFsbCBPdXRsZXRcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVyTWVudURheSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPENhcmQgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjZweFwiLCBtYXJnaW5Ub3A6IFwiMTJweFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjIycHggMCAwIDIycHhcIiB9fT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGF5X3Byb21vX3RpdGxlfT5Qcm9tbzwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjZweCAyMHB4XCIgfX0+e3JlbmRlckRheUxpc3QoXCJQUk9NT1wiKX08L2Rpdj5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPENhcmQgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjZweFwiLCBtYXJnaW5Ub3A6IFwiMTJweFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjIycHggMCAwIDIycHhcIiB9fT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGF5X3Byb2dyYW1fdGl0bGV9PlByb2dyYW08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCI2cHggMjBweFwiIH19PntyZW5kZXJEYXlMaXN0KFwiUFJPR1JBTVwiKX08L2Rpdj5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlck1lbnVXZWVrID0gKCkgPT4ge307XHJcbiAgY29uc3QgcmVuZGVyTWVudU1vbnRoID0gKCkgPT4ge307XHJcblxyXG4gIGNvbnN0IHJlbmRlclBhZ2UgPSAoKSA9PiB7XHJcbiAgICBpZiAobG9hZGluZyAmJiBsb2FkaW5nTWVudSkge1xyXG4gICAgICByZXR1cm4gPFNwaW5uZXIgLz47XHJcbiAgICB9IGVsc2VcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT5Ib21lPC90aXRsZT5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgIDxOYXYgdGl0bGU9e1wiQ2FsZW5kZXJcIn0gY29sb3I9e1wid2hpdGVcIn0gbm9CYWNrIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI2cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51X2dyaWR9PntyZW5kZXJUb3BNZW51KCl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF5X3RpdGxlfT57ZGF5TmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXlfZ3JpZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcIi9jZXZfbGVmdC5zdmdcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXlfZGF0ZV9kaXNwbGF5fT57ZGF0ZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiL2Nldl9yaWdodC5zdmdcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF5X2JvdF9kaXNwbGF5fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pnttb250aE5hbWUuZnVsbFttb250aCAtIDFdfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e3llYXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAge2ZvY3VzID09PSBcIkRheVwiXHJcbiAgICAgICAgICAgICAgICAgID8gcmVuZGVyTWVudURheSgpXHJcbiAgICAgICAgICAgICAgICAgIDogZm9jdXMgPT09IFwiV2Vla1wiXHJcbiAgICAgICAgICAgICAgICAgID8gcmVuZGVyTWVudVdlZWsoKVxyXG4gICAgICAgICAgICAgICAgICA6IGZvY3VzID09PSBcIk1vbnRoXCJcclxuICAgICAgICAgICAgICAgICAgPyByZW5kZXJNZW51TW9udGgoKVxyXG4gICAgICAgICAgICAgICAgICA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Qm90TmF2IGZvY3VzPXtcImNhbGVuZGVyXCJ9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgfTtcclxuICByZXR1cm4gcmVuZGVyUGFnZSgpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=