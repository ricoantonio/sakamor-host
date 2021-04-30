webpackHotUpdate_N_E("pages/visit/spreading",{

/***/ "./pages/visit/spreading/index.jsx":
/*!*****************************************!*\
  !*** ./pages/visit/spreading/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Spreading; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store */ "./store/index.js");
/* harmony import */ var _styles_pages_Spreading_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/pages/Spreading.module.css */ "./styles/pages/Spreading.module.css");
/* harmony import */ var _styles_pages_Spreading_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Spreading_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Nav */ "./components/Nav.jsx");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Spinner */ "./components/Spinner.jsx");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Button */ "./components/Button.jsx");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/Card */ "./components/Card.jsx");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../helper */ "./helper.js");


var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-new\\pages\\visit\\spreading\\index.jsx",
    _s = $RefreshSig$();











function Spreading() {
  _s();

  var _this = this;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store__WEBPACK_IMPORTED_MODULE_4__["Stores"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch,
      actions = _useContext.actions;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      plan = _useState[0],
      setPlan = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      searchJenisChannel = _useState2[0],
      setSearchJenisChannel = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      listJenisChannel = _useState3[0],
      setListJenisChannel = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      renderListJenisChannel = _useState4[0],
      setRenderListJenisChannel = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      focusJenisChannel = _useState5[0],
      setFocusJenisChannel = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      searchOutlet = _useState6[0],
      setSearchOutlet = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      listOutlet = _useState7[0],
      setListOutlet = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      renderListOutlet = _useState8[0],
      setRenderListOutlet = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      focusOutlet = _useState9[0],
      setFocusOutlet = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      position = _useState10[0],
      setPosition = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      loading = _useState11[0],
      setLoading = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      error = _useState12[0],
      setError = _useState12[1];

  var onSearchJenisChannel = function onSearchJenisChannel(search) {
    setRenderListJenisChannel(true);
    setSearchJenisChannel(search);

    if (search) {
      Object(_helper__WEBPACK_IMPORTED_MODULE_10__["getSearchJenisChannel"])(search).then(function (data) {
        setListJenisChannel(data);
      })["catch"](function (err) {
        console.log(err);
      });
    } else {
      setListJenisChannel([]);
    }
  };

  var onSearchOutlet = function onSearchOutlet(search) {
    setRenderListOutlet(true);
    setSearchOutlet(search);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // fetch on stop typing
    var timeoutId = setTimeout(function () {
      if (searchOutlet) {
        Object(_helper__WEBPACK_IMPORTED_MODULE_10__["getSearchOutlet"])(searchOutlet).then(function (data) {
          setListOutlet(data);
        })["catch"](function (err) {
          console.log(err);
        });
      } else {
        setListOutlet([]);
      }
    }, 1000);
    return function () {
      return clearTimeout(timeoutId);
    };
  }, [searchOutlet]);

  var renderSearchJenisChannel = function renderSearchJenisChannel() {
    var render = listJenisChannel.map(function (val, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: function onClick() {
          setFocusJenisChannel(val);
          setSearchJenisChannel(val.namaJenisChannel);
          setListJenisChannel([]);
        },
        style: {
          borderBottom: ".5px solid #f0f0f0",
          width: "350px"
        },
        children: val.namaJenisChannel
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this);
    });
    return render;
  };

  var renderSearchOutlet = function renderSearchOutlet() {
    var render = listOutlet.map(function (val, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: function onClick() {
          setFocusOutlet(val);
          setSearchOutlet(val.namaOutlet);
          setListOutlet([]);
        },
        style: {
          borderBottom: ".5px solid #f0f0f0",
          width: "350px"
        },
        children: val.namaOutlet
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, _this);
    });
    return render;
  };

  var onSubmitSpreading = function onSubmitSpreading() {
    if (focusJenisChannel.namaJenisChannel && focusOutlet.namaOutlet) {
      actions.setSpreadingOutlet(focusOutlet);
      actions.setSpreadingJenisChannel(focusJenisChannel);
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/visit/spreading/submit");
    }
  };

  var render = function render() {
    if (loading) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 14
      }, _this);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_pages_Spreading_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.container,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_Spreading_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.wrapper,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Nav__WEBPACK_IMPORTED_MODULE_6__["default"], {
            backHref: "/"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Spreading_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.title_container,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Spreading_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.title,
              children: "Spreading"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Spreading_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.main,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Spreading_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.subtitle,
              children: "Jenis Channel"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              onChange: function onChange(e) {
                onSearchJenisChannel(e.target.value);
              },
              value: searchJenisChannel,
              placeholder: "Search",
              className: _styles_pages_Spreading_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.input,
              onBlur: function onBlur() {
                setTimeout(function () {
                  setRenderListJenisChannel(false);
                }, 200);
              },
              onFocus: function onFocus(e) {
                return onSearchJenisChannel(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 15
            }, _this), renderListJenisChannel ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                position: "absolute",
                maxHeight: "180px",
                backgroundColor: "white",
                overflowY: "scroll",
                maxWidth: "400px",
                padding: "0 4px",
                zIndex: 999999
              },
              children: renderSearchJenisChannel()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 17
            }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Spreading_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.subtitle,
              children: "Outlet"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              onChange: function onChange(e) {
                onSearchOutlet(e.target.value);
              },
              value: searchOutlet,
              placeholder: "Search",
              className: _styles_pages_Spreading_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.input,
              onBlur: function onBlur() {
                setTimeout(function () {
                  setRenderListOutlet(false);
                }, 200);
              },
              onFocus: function onFocus(e) {
                return onSearchOutlet(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 15
            }, _this), renderListOutlet ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                position: "absolute",
                maxHeight: "180px",
                backgroundColor: "white",
                overflowY: "scroll",
                maxWidth: "400px",
                padding: "0 4px",
                zIndex: 999999
              },
              children: renderSearchOutlet()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 17
            }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Spreading_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.bottom_container,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
                text: "Submit",
                onClick: function onClick() {
                  onSubmitUnplan();
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/visit/unplan/history",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_pages_Spreading_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.view_history,
                    children: "View History"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 200,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 199,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 198,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
                style: {
                  borderRadius: "5px",
                  margin: "22px 0"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_Spreading_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.unplan_grid2,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_pages_Spreading_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.add_unplan,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      style: {
                        marginTop: "-8px"
                      },
                      children: "+"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 206,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 205,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    style: {
                      fontSize: "16px",
                      fontWeight: "600"
                    },
                    children: ["Add new outlet", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      style: {
                        color: "#B9B9C3",
                        fontWeight: "300",
                        fontSize: "13px"
                      },
                      children: "Outlet not available"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 210,
                      columnNumber: 23
                    }, _this), " "]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 208,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    style: {
                      textAlign: "center"
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "/next.svg"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 221,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 220,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 204,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, _this);
    }
  };

  return render();
}

_s(Spreading, "5MwOeI2XFU7FpCgT2lgliRNHJLQ=");

_c = Spreading;

var _c;

$RefreshReg$(_c, "Spreading");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlzaXQvc3ByZWFkaW5nL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJTcHJlYWRpbmciLCJ1c2VDb250ZXh0IiwiU3RvcmVzIiwic3RhdGUiLCJkaXNwYXRjaCIsImFjdGlvbnMiLCJ1c2VTdGF0ZSIsInBsYW4iLCJzZXRQbGFuIiwic2VhcmNoSmVuaXNDaGFubmVsIiwic2V0U2VhcmNoSmVuaXNDaGFubmVsIiwibGlzdEplbmlzQ2hhbm5lbCIsInNldExpc3RKZW5pc0NoYW5uZWwiLCJyZW5kZXJMaXN0SmVuaXNDaGFubmVsIiwic2V0UmVuZGVyTGlzdEplbmlzQ2hhbm5lbCIsImZvY3VzSmVuaXNDaGFubmVsIiwic2V0Rm9jdXNKZW5pc0NoYW5uZWwiLCJzZWFyY2hPdXRsZXQiLCJzZXRTZWFyY2hPdXRsZXQiLCJsaXN0T3V0bGV0Iiwic2V0TGlzdE91dGxldCIsInJlbmRlckxpc3RPdXRsZXQiLCJzZXRSZW5kZXJMaXN0T3V0bGV0IiwiZm9jdXNPdXRsZXQiLCJzZXRGb2N1c091dGxldCIsInBvc2l0aW9uIiwic2V0UG9zaXRpb24iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJvblNlYXJjaEplbmlzQ2hhbm5lbCIsInNlYXJjaCIsImdldFNlYXJjaEplbmlzQ2hhbm5lbCIsInRoZW4iLCJkYXRhIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIm9uU2VhcmNoT3V0bGV0IiwidXNlRWZmZWN0IiwidGltZW91dElkIiwic2V0VGltZW91dCIsImdldFNlYXJjaE91dGxldCIsImNsZWFyVGltZW91dCIsInJlbmRlclNlYXJjaEplbmlzQ2hhbm5lbCIsInJlbmRlciIsIm1hcCIsInZhbCIsImluZGV4IiwibmFtYUplbmlzQ2hhbm5lbCIsImJvcmRlckJvdHRvbSIsIndpZHRoIiwicmVuZGVyU2VhcmNoT3V0bGV0IiwibmFtYU91dGxldCIsIm9uU3VibWl0U3ByZWFkaW5nIiwic2V0U3ByZWFkaW5nT3V0bGV0Iiwic2V0U3ByZWFkaW5nSmVuaXNDaGFubmVsIiwiUm91dGVyIiwicHVzaCIsInN0eWxlcyIsImNvbnRhaW5lciIsIndyYXBwZXIiLCJ0aXRsZV9jb250YWluZXIiLCJ0aXRsZSIsIm1haW4iLCJzdWJ0aXRsZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImlucHV0IiwibWF4SGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwib3ZlcmZsb3dZIiwibWF4V2lkdGgiLCJwYWRkaW5nIiwiekluZGV4IiwiYm90dG9tX2NvbnRhaW5lciIsIm9uU3VibWl0VW5wbGFuIiwidmlld19oaXN0b3J5IiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luIiwidW5wbGFuX2dyaWQyIiwiYWRkX3VucGxhbiIsIm1hcmdpblRvcCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImNvbG9yIiwidGV4dEFsaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVlLFNBQVNBLFNBQVQsR0FBcUI7QUFBQTs7QUFBQTs7QUFBQSxvQkFDR0Msd0RBQVUsQ0FBQ0MsNkNBQUQsQ0FEYjtBQUFBLE1BQzFCQyxLQUQwQixlQUMxQkEsS0FEMEI7QUFBQSxNQUNuQkMsUUFEbUIsZUFDbkJBLFFBRG1CO0FBQUEsTUFDVEMsT0FEUyxlQUNUQSxPQURTOztBQUFBLGtCQUVWQyxzREFBUSxDQUFDLEVBQUQsQ0FGRTtBQUFBLE1BRTNCQyxJQUYyQjtBQUFBLE1BRXJCQyxPQUZxQjs7QUFBQSxtQkFHa0JGLHNEQUFRLENBQUMsRUFBRCxDQUgxQjtBQUFBLE1BRzNCRyxrQkFIMkI7QUFBQSxNQUdQQyxxQkFITzs7QUFBQSxtQkFJY0osc0RBQVEsQ0FBQyxFQUFELENBSnRCO0FBQUEsTUFJM0JLLGdCQUoyQjtBQUFBLE1BSVRDLG1CQUpTOztBQUFBLG1CQUswQk4sc0RBQVEsQ0FBQyxLQUFELENBTGxDO0FBQUEsTUFL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UDtBQUdMRCxnQ0FBUSxFQUFFO0FBSEwsdUJBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRkYsRUFVUyxHQVZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFKRixlQWdCRTtBQUFLLHlCQUFLLEVBQUU7QUFBRUcsK0JBQVMsRUFBRTtBQUFiLHFCQUFaO0FBQUEsMkNBQ0U7QUFBSyx5QkFBRyxFQUFFO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTdERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBMkdEO0FBQ0YsR0FoSEQ7O0FBaUhBLFNBQU8xQyxNQUFNLEVBQWI7QUFDRDs7R0EzTnVCOUMsUzs7S0FBQUEsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92aXNpdC9zcHJlYWRpbmcuNDE1NzQ2NGNhNjZiNWJmNDJjYmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU3RvcmVzIH0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9wYWdlcy9TcHJlYWRpbmcubW9kdWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IE5hdiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9OYXZcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvU3Bpbm5lclwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0J1dHRvblwiO1xyXG5cclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQ2FyZFwiO1xyXG5pbXBvcnQgeyBnZXRTZWFyY2hKZW5pc0NoYW5uZWwsIGdldFNlYXJjaE91dGxldCB9IGZyb20gXCIuLi8uLi8uLi9oZWxwZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwcmVhZGluZygpIHtcclxuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCwgYWN0aW9ucyB9ID0gdXNlQ29udGV4dChTdG9yZXMpO1xyXG4gIGNvbnN0IFtwbGFuLCBzZXRQbGFuXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2VhcmNoSmVuaXNDaGFubmVsLCBzZXRTZWFyY2hKZW5pc0NoYW5uZWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xpc3RKZW5pc0NoYW5uZWwsIHNldExpc3RKZW5pc0NoYW5uZWxdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtyZW5kZXJMaXN0SmVuaXNDaGFubmVsLCBzZXRSZW5kZXJMaXN0SmVuaXNDaGFubmVsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZm9jdXNKZW5pc0NoYW5uZWwsIHNldEZvY3VzSmVuaXNDaGFubmVsXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbc2VhcmNoT3V0bGV0LCBzZXRTZWFyY2hPdXRsZXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xpc3RPdXRsZXQsIHNldExpc3RPdXRsZXRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtyZW5kZXJMaXN0T3V0bGV0LCBzZXRSZW5kZXJMaXN0T3V0bGV0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZm9jdXNPdXRsZXQsIHNldEZvY3VzT3V0bGV0XSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3Qgb25TZWFyY2hKZW5pc0NoYW5uZWwgPSAoc2VhcmNoKSA9PiB7XHJcbiAgICBzZXRSZW5kZXJMaXN0SmVuaXNDaGFubmVsKHRydWUpO1xyXG4gICAgc2V0U2VhcmNoSmVuaXNDaGFubmVsKHNlYXJjaCk7XHJcbiAgICBpZiAoc2VhcmNoKSB7XHJcbiAgICAgIGdldFNlYXJjaEplbmlzQ2hhbm5lbChzZWFyY2gpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIHNldExpc3RKZW5pc0NoYW5uZWwoZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldExpc3RKZW5pc0NoYW5uZWwoW10pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3Qgb25TZWFyY2hPdXRsZXQgPSAoc2VhcmNoKSA9PiB7XHJcbiAgICBzZXRSZW5kZXJMaXN0T3V0bGV0KHRydWUpO1xyXG4gICAgc2V0U2VhcmNoT3V0bGV0KHNlYXJjaCk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGZldGNoIG9uIHN0b3AgdHlwaW5nXHJcbiAgICBjb25zdCB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHNlYXJjaE91dGxldCkge1xyXG4gICAgICAgIGdldFNlYXJjaE91dGxldChzZWFyY2hPdXRsZXQpXHJcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRMaXN0T3V0bGV0KGRhdGEpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRMaXN0T3V0bGV0KFtdKTtcclxuICAgICAgfVxyXG4gICAgfSwgMTAwMCk7XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XHJcbiAgfSwgW3NlYXJjaE91dGxldF0pO1xyXG5cclxuICBjb25zdCByZW5kZXJTZWFyY2hKZW5pc0NoYW5uZWwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByZW5kZXIgPSBsaXN0SmVuaXNDaGFubmVsLm1hcCgodmFsLCBpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0Rm9jdXNKZW5pc0NoYW5uZWwodmFsKTtcclxuICAgICAgICAgICAgc2V0U2VhcmNoSmVuaXNDaGFubmVsKHZhbC5uYW1hSmVuaXNDaGFubmVsKTtcclxuICAgICAgICAgICAgc2V0TGlzdEplbmlzQ2hhbm5lbChbXSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbTogXCIuNXB4IHNvbGlkICNmMGYwZjBcIixcclxuICAgICAgICAgICAgd2lkdGg6IFwiMzUwcHhcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3ZhbC5uYW1hSmVuaXNDaGFubmVsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVuZGVyO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlclNlYXJjaE91dGxldCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJlbmRlciA9IGxpc3RPdXRsZXQubWFwKCh2YWwsIGluZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRGb2N1c091dGxldCh2YWwpO1xyXG4gICAgICAgICAgICBzZXRTZWFyY2hPdXRsZXQodmFsLm5hbWFPdXRsZXQpO1xyXG4gICAgICAgICAgICBzZXRMaXN0T3V0bGV0KFtdKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYm9yZGVyQm90dG9tOiBcIi41cHggc29saWQgI2YwZjBmMFwiLFxyXG4gICAgICAgICAgICB3aWR0aDogXCIzNTBweFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dmFsLm5hbWFPdXRsZXR9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZW5kZXI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXRTcHJlYWRpbmcgPSAoKSA9PiB7XHJcbiAgICBpZiAoZm9jdXNKZW5pc0NoYW5uZWwubmFtYUplbmlzQ2hhbm5lbCAmJiBmb2N1c091dGxldC5uYW1hT3V0bGV0KSB7XHJcbiAgICAgIGFjdGlvbnMuc2V0U3ByZWFkaW5nT3V0bGV0KGZvY3VzT3V0bGV0KTtcclxuICAgICAgYWN0aW9ucy5zZXRTcHJlYWRpbmdKZW5pc0NoYW5uZWwoZm9jdXNKZW5pc0NoYW5uZWwpO1xyXG4gICAgICBSb3V0ZXIucHVzaChcIi92aXNpdC9zcHJlYWRpbmcvc3VibWl0XCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgPE5hdiBiYWNrSHJlZj1cIi9cIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+U3ByZWFkaW5nPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9PkplbmlzIENoYW5uZWw8L2Rpdj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBvblNlYXJjaEplbmlzQ2hhbm5lbChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaEplbmlzQ2hhbm5lbH1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgb25CbHVyPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFJlbmRlckxpc3RKZW5pc0NoYW5uZWwoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICB9LCAyMDApO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uRm9jdXM9eyhlKSA9PiBvblNlYXJjaEplbmlzQ2hhbm5lbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7cmVuZGVyTGlzdEplbmlzQ2hhbm5lbCA/IChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogXCIxODBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93WTogXCJzY3JvbGxcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCI0MDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMCA0cHhcIixcclxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDk5OTk5OSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3JlbmRlclNlYXJjaEplbmlzQ2hhbm5lbCgpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0aXRsZX0+T3V0bGV0PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgb25TZWFyY2hPdXRsZXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hPdXRsZXR9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgIG9uQmx1cj17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRSZW5kZXJMaXN0T3V0bGV0KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgfSwgMjAwKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbkZvY3VzPXsoZSkgPT4gb25TZWFyY2hPdXRsZXQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAge3JlbmRlckxpc3RPdXRsZXQgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IFwiMTgwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvd1k6IFwic2Nyb2xsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiNDAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjAgNHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiA5OTk5OTksXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtyZW5kZXJTZWFyY2hPdXRsZXQoKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHRleHQ9XCJTdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXRVbnBsYW4oKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Zpc2l0L3VucGxhbi9oaXN0b3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlld19oaXN0b3J5fT5WaWV3IEhpc3Rvcnk8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBtYXJnaW46IFwiMjJweCAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudW5wbGFuX2dyaWQyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZF91bnBsYW59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiLThweFwiIH19Pis8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjE2cHhcIiwgZm9udFdlaWdodDogXCI2MDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIEFkZCBuZXcgb3V0bGV0XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI0I5QjlDM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiMzAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTNweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPdXRsZXQgbm90IGF2YWlsYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiL25leHQuc3ZnXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIHJlbmRlcigpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=