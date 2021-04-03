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

  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var dayName = days[now.getDay()];
  var date = now.getDate();
  var month = now.getMonth() + 1;
  var year = now.getFullYear();
  var monthName = {
    full: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    part: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  };

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
        lineNumber: 73,
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
            lineNumber: 112,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: "Kalpanax Promo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              fontSize: "12px",
              fontWeight: "300"
            },
            children: "All Outlet"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
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
            lineNumber: 136,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            padding: "6px 20px"
          },
          children: renderDayList("PROMO")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 134,
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
            lineNumber: 142,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            padding: "6px 20px"
          },
          children: renderDayList("PROGRAM")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 140,
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
        lineNumber: 154,
        columnNumber: 14
      }, _this);
    } else return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "icon",
          href: "/favicon.ico"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 158,
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
            lineNumber: 164,
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
                lineNumber: 167,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Calender_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.day_title,
                children: dayName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Calender_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.day_grid,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/cev_left.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 171,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 170,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_pages_Calender_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.day_date_display,
                    children: date
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 174,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 173,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/cev_right.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 177,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 176,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Calender_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.day_bot_display,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: monthName.full[month - 1]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 181,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: year
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 182,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 180,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 17
            }, _this), focus === "Day" ? renderMenuDay() : focus === "Week" ? renderMenuWeek() : focus === "Month" ? renderMenuMonth() : ""]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_BotNav__WEBPACK_IMPORTED_MODULE_8__["default"], {
        focus: "calender"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 157,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FsZW5kZXIuanN4Il0sIm5hbWVzIjpbIkNhbGVuZGVyIiwidXNlQ29udGV4dCIsIlN0b3JlcyIsInN0YXRlIiwiZGlzcGF0Y2giLCJhY3Rpb25zIiwidXNlU3RhdGUiLCJmb2N1cyIsInNldEZvY3VzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJsb2FkaW5nTWVudSIsInNldExvYWRpbmdNZW51IiwiRGF0ZSIsIm5vdyIsInNldE5vdyIsImRheXMiLCJkYXlOYW1lIiwiZ2V0RGF5IiwiZGF0ZSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGhOYW1lIiwiZnVsbCIsInBhcnQiLCJyZW5kZXJUb3BNZW51IiwibWVudSIsIm1hcCIsInZhbCIsImluZGV4Iiwic3R5bGVzIiwibWVudV9hY3RpdmUiLCJtZW51X25vbl9hY3RpdmUiLCJyZW5kZXJEYXlMaXN0IiwidHlwZSIsImRhdGEiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJjb2xvciIsInRleHRBbGlnbiIsIm1hcmdpbiIsImRpc3BsYXkiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwicmVuZGVyTWVudURheSIsIm1hcmdpblRvcCIsImRheV9wcm9tb190aXRsZSIsImRheV9wcm9ncmFtX3RpdGxlIiwicmVuZGVyTWVudVdlZWsiLCJyZW5kZXJNZW51TW9udGgiLCJyZW5kZXJQYWdlIiwiY29udGFpbmVyIiwid3JhcHBlciIsIm1haW4iLCJtZW51X2dyaWQiLCJkYXlfdGl0bGUiLCJkYXlfZ3JpZCIsImRheV9kYXRlX2Rpc3BsYXkiLCJkYXlfYm90X2Rpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQUE7QUFBQSx5QkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEYsZUFjRTtBQUFLLHlCQUFTLEVBQUVjLHdFQUFNLENBQUNnQyxlQUF2QjtBQUFBLHdDQUNFO0FBQUEsNEJBQU14QyxTQUFTLENBQUNDLElBQVYsQ0FBZUwsS0FBSyxHQUFHLENBQXZCO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUVFO0FBQUEsNEJBQU1FO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBb0JHaEIsS0FBSyxLQUFLLEtBQVYsR0FDRzRDLGFBQWEsRUFEaEIsR0FFRzVDLEtBQUssS0FBSyxNQUFWLEdBQ0FnRCxjQUFjLEVBRGQsR0FFQWhELEtBQUssS0FBSyxPQUFWLEdBQ0FpRCxlQUFlLEVBRGYsR0FFQSxFQTFCTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLGVBc0NFLHFFQUFDLDBEQUFEO0FBQVEsYUFBSyxFQUFFO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQTBDSCxHQTlDRDs7QUErQ0EsU0FBT0MsVUFBVSxFQUFqQjtBQUNEOztHQXhMdUJ6RCxROztLQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhbGVuZGVyLjg0MDM5MzdhOTMyYWUwN2JmODhjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wYWdlcy9DYWxlbmRlci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgU3RvcmVzIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9TcGlubmVyXCI7XHJcbmltcG9ydCBCb3ROYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvQm90TmF2XCI7XHJcbmltcG9ydCBOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQnV0dG9uXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRcIjtcclxuXHJcbmltcG9ydCB7IGdldEF1dGgsIGdldE1lbnUsIGdldFBsYW5MaXN0IH0gZnJvbSBcIi4uL2hlbHBlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FsZW5kZXIoKSB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2gsIGFjdGlvbnMgfSA9IHVzZUNvbnRleHQoU3RvcmVzKTtcclxuICBjb25zdCBbZm9jdXMsIHNldEZvY3VzXSA9IHVzZVN0YXRlKFwiRGF5XCIpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZ01lbnUsIHNldExvYWRpbmdNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbm93LCBzZXROb3ddID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XHJcblxyXG4gIHZhciBkYXlzID0gW1xyXG4gICAgXCJTdW5kYXlcIixcclxuICAgIFwiTW9uZGF5XCIsXHJcbiAgICBcIlR1ZXNkYXlcIixcclxuICAgIFwiV2VkbmVzZGF5XCIsXHJcbiAgICBcIlRodXJzZGF5XCIsXHJcbiAgICBcIkZyaWRheVwiLFxyXG4gICAgXCJTYXR1cmRheVwiLFxyXG4gIF07XHJcblxyXG4gIHZhciBkYXlOYW1lID0gZGF5c1tub3cuZ2V0RGF5KCldO1xyXG4gIHZhciBkYXRlID0gbm93LmdldERhdGUoKTtcclxuICB2YXIgbW9udGggPSBub3cuZ2V0TW9udGgoKSArIDE7XHJcbiAgdmFyIHllYXIgPSBub3cuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgY29uc3QgbW9udGhOYW1lID0ge1xyXG4gICAgZnVsbDogW1xyXG4gICAgICBcIkphbnVhcnlcIixcclxuICAgICAgXCJGZWJydWFyeVwiLFxyXG4gICAgICBcIk1hcmNoXCIsXHJcbiAgICAgIFwiQXByaWxcIixcclxuICAgICAgXCJNYXlcIixcclxuICAgICAgXCJKdW5lXCIsXHJcbiAgICAgIFwiSnVseVwiLFxyXG4gICAgICBcIkF1Z3VzdFwiLFxyXG4gICAgICBcIlNlcHRlbWJlclwiLFxyXG4gICAgICBcIk9jdG9iZXJcIixcclxuICAgICAgXCJOb3ZlbWJlclwiLFxyXG4gICAgICBcIkRlY2VtYmVyXCIsXHJcbiAgICBdLFxyXG4gICAgcGFydDogW1xyXG4gICAgICBcIkphblwiLFxyXG4gICAgICBcIkZlYlwiLFxyXG4gICAgICBcIk1hclwiLFxyXG4gICAgICBcIkFwclwiLFxyXG4gICAgICBcIk1heVwiLFxyXG4gICAgICBcIkp1blwiLFxyXG4gICAgICBcIkp1bFwiLFxyXG4gICAgICBcIkF1Z1wiLFxyXG4gICAgICBcIlNlcFwiLFxyXG4gICAgICBcIk9jdFwiLFxyXG4gICAgICBcIk5vdlwiLFxyXG4gICAgICBcIkRlY1wiLFxyXG4gICAgXSxcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJUb3BNZW51ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWVudSA9IFtcIkRheVwiLCBcIldlZWtcIiwgXCJNb250aFwiXTtcclxuICAgIHJldHVybiBtZW51Lm1hcCgodmFsLCBpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRGb2N1cyh2YWwpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgZm9jdXMgPT09IHZhbCA/IHN0eWxlcy5tZW51X2FjdGl2ZSA6IHN0eWxlcy5tZW51X25vbl9hY3RpdmVcclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dmFsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRGF5TGlzdCA9ICh0eXBlLCBkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcclxuICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXHJcbiAgICAgICAgICBjb2xvcjogXCIjNUU1ODczXCIsXHJcbiAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgICAgbWFyZ2luOiBcIjEwcHggMFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcclxuICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxMiUgODglXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICB3aWR0aDogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHR5cGUgPT09IFwiUFJPTU9cIiA/IFwiI2QxZTRlMVwiIDogXCIjRkZGMUNDXCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjRweFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEycHhcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMnB4XCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHR5cGUgPT09IFwiUFJPTU9cIiA/IFwiIzQxODY3YVwiIDogXCIjZmViODAwXCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+S2FscGFuYXggUHJvbW88L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIxMnB4XCIsIGZvbnRXZWlnaHQ6IFwiMzAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgQWxsIE91dGxldFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuICBjb25zdCByZW5kZXJNZW51RGF5ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8Q2FyZCBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiNnB4XCIsIG1hcmdpblRvcDogXCIxMnB4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMjJweCAwIDAgMjJweFwiIH19PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXlfcHJvbW9fdGl0bGV9PlByb21vPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiNnB4IDIwcHhcIiB9fT57cmVuZGVyRGF5TGlzdChcIlBST01PXCIpfTwvZGl2PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8Q2FyZCBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiNnB4XCIsIG1hcmdpblRvcDogXCIxMnB4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMjJweCAwIDAgMjJweFwiIH19PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXlfcHJvZ3JhbV90aXRsZX0+UHJvZ3JhbTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjZweCAyMHB4XCIgfX0+e3JlbmRlckRheUxpc3QoXCJQUk9HUkFNXCIpfTwvZGl2PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVyTWVudVdlZWsgPSAoKSA9PiB7fTtcclxuICBjb25zdCByZW5kZXJNZW51TW9udGggPSAoKSA9PiB7fTtcclxuXHJcbiAgY29uc3QgcmVuZGVyUGFnZSA9ICgpID0+IHtcclxuICAgIGlmIChsb2FkaW5nICYmIGxvYWRpbmdNZW51KSB7XHJcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcclxuICAgIH0gZWxzZVxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgPE5hdiB0aXRsZT17XCJDYWxlbmRlclwifSBjb2xvcj17XCJ3aGl0ZVwifSBub0JhY2sgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjZweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVfZ3JpZH0+e3JlbmRlclRvcE1lbnUoKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXlfdGl0bGV9PntkYXlOYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRheV9ncmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiL2Nldl9sZWZ0LnN2Z1wifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRheV9kYXRlX2Rpc3BsYXl9PntkYXRlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17XCIvY2V2X3JpZ2h0LnN2Z1wifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXlfYm90X2Rpc3BsYXl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e21vbnRoTmFtZS5mdWxsW21vbnRoIC0gMV19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj57eWVhcn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICB7Zm9jdXMgPT09IFwiRGF5XCJcclxuICAgICAgICAgICAgICAgICAgPyByZW5kZXJNZW51RGF5KClcclxuICAgICAgICAgICAgICAgICAgOiBmb2N1cyA9PT0gXCJXZWVrXCJcclxuICAgICAgICAgICAgICAgICAgPyByZW5kZXJNZW51V2VlaygpXHJcbiAgICAgICAgICAgICAgICAgIDogZm9jdXMgPT09IFwiTW9udGhcIlxyXG4gICAgICAgICAgICAgICAgICA/IHJlbmRlck1lbnVNb250aCgpXHJcbiAgICAgICAgICAgICAgICAgIDogXCJcIn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxCb3ROYXYgZm9jdXM9e1wiY2FsZW5kZXJcIn0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICB9O1xyXG4gIHJldHVybiByZW5kZXJQYWdlKCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==