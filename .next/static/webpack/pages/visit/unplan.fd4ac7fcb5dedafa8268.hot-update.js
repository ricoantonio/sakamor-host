webpackHotUpdate_N_E("pages/visit/unplan",{

/***/ "./pages/visit/unplan/index.jsx":
/*!**************************************!*\
  !*** ./pages/visit/unplan/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Unplan; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store */ "./store/index.js");
/* harmony import */ var _styles_pages_Unplan_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/pages/Unplan.module.css */ "./styles/pages/Unplan.module.css");
/* harmony import */ var _styles_pages_Unplan_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Unplan_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Nav */ "./components/Nav.jsx");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Spinner */ "./components/Spinner.jsx");
/* harmony import */ var _components_DetailPlan__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/DetailPlan */ "./components/DetailPlan.jsx");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/Button */ "./components/Button.jsx");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../constant */ "./constant.js");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/Card */ "./components/Card.jsx");
/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/Dropdown */ "./components/Dropdown.jsx");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../helper */ "./helper.js");


var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-new\\pages\\visit\\unplan\\index.jsx",
    _s = $RefreshSig$();














function Unplan() {
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

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      position = _useState8[0],
      setPosition = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      loading = _useState9[0],
      setLoading = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      error = _useState10[0],
      setError = _useState10[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var geo = navigator.geolocation;

    if (!geo) {
      setError("Geolocation is not supported");
      return;
    }

    var watcher = geo.watchPosition(function (_ref) {
      var coords = _ref.coords;
      setPosition({
        latitude: coords.latitude,
        longitude: coords.longitude
      });
      console.log(coords);
    }, function (err) {
      setError(err.message);
    });
    return function () {
      return geo.clearWatch(watcher);
    };
  }, []);

  var onSearchJenisChannel = function onSearchJenisChannel(search) {
    setRenderListJenisChannel(true);
    setSearchJenisChannel(search);

    if (search) {
      Object(_helper__WEBPACK_IMPORTED_MODULE_13__["getSearchJenisChannel"])(search).then(function (data) {
        setListJenisChannel(data);
      })["catch"](function (err) {
        console.log(err);
      });
    } else {
      setListJenisChannel([]);
    }
  };

  var renderSearchJenisChannel = function renderSearchJenisChannel() {
    var render = listJenisChannel.map(function (val, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: function onClick() {
          setFocusJenisChannel(val);
          setSearchJenisChannel(val.namaJenisChannel);
          setListJenisChannel([]);
          console.log("a");
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

  var render = function render() {
    if (loading) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 14
      }, _this);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_pages_Unplan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.container,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_Unplan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.wrapper,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Nav__WEBPACK_IMPORTED_MODULE_6__["default"], {
            backHref: "/"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Unplan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.title_container,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Unplan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.title,
              children: ["Unplan ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: "Visit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 24
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Unplan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.main,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Unplan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.subtitle,
              children: "Jenis Channel"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              onChange: function onChange(e) {
                onSearchJenisChannel(e.target.value);
              },
              value: searchJenisChannel,
              placeholder: "Search",
              className: _styles_pages_Unplan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.input,
              onMouseDown: function onMouseDown() {
                setRenderListJenisChannel(false);
              },
              onFocus: function onFocus(e) {
                return onSearchJenisChannel(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
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
              lineNumber: 118,
              columnNumber: 17
            }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Unplan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.subtitle,
              children: "Outlet"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              onChange: function onChange(e) {
                setSearchOutlet(e.target.value);
              },
              placeholder: "Search",
              className: _styles_pages_Unplan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.input
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Unplan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.bottom_container,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: {
                  pathname: "/visit/unplan/submit" // query: { data: "hai" },

                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    text: "Submit"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 148,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 147,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/visit/unplan/history",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_pages_Unplan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.view_history,
                    children: "View History"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 153,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: "latitude: ".concat(position.latitude)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: "longitude: ".concat(position.longitude)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, _this);
    }
  };

  return render();
}

_s(Unplan, "ddMUxca/3kTsmdW26/JZbVBBBvI=");

_c = Unplan;

var _c;

$RefreshReg$(_c, "Unplan");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlzaXQvdW5wbGFuL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJVbnBsYW4iLCJ1c2VDb250ZXh0IiwiU3RvcmVzIiwic3RhdGUiLCJkaXNwYXRjaCIsImFjdGlvbnMiLCJ1c2VTdGF0ZSIsInBsYW4iLCJzZXRQbGFuIiwic2VhcmNoSmVuaXNDaGFubmVsIiwic2V0U2VhcmNoSmVuaXNDaGFubmVsIiwibGlzdEplbmlzQ2hhbm5lbCIsInNldExpc3RKZW5pc0NoYW5uZWwiLCJyZW5kZXJMaXN0SmVuaXNDaGFubmVsIiwic2V0UmVuZGVyTGlzdEplbmlzQ2hhbm5lbCIsImZvY3VzSmVuaXNDaGFubmVsIiwic2V0Rm9jdXNKZW5pc0NoYW5uZWwiLCJzZWFyY2hPdXRsZXQiLCJzZXRTZWFyY2hPdXRsZXQiLCJsaXN0T3V0bGV0Iiwic2V0TGlzdE91dGxldCIsInBvc2l0aW9uIiwic2V0UG9zaXRpb24iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJ1c2VFZmZlY3QiLCJnZW8iLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsIndhdGNoZXIiLCJ3YXRjaFBvc2l0aW9uIiwiY29vcmRzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwibWVzc2FnZSIsImNsZWFyV2F0Y2giLCJvblNlYXJjaEplbmlzQ2hhbm5lbCIsInNlYXJjaCIsImdldFNlYXJjaEplbmlzQ2hhbm5lbCIsInRoZW4iLCJkYXRhIiwicmVuZGVyU2VhcmNoSmVuaXNDaGFubmVsIiwicmVuZGVyIiwibWFwIiwidmFsIiwiaW5kZXgiLCJuYW1hSmVuaXNDaGFubmVsIiwiYm9yZGVyQm90dG9tIiwid2lkdGgiLCJzdHlsZXMiLCJjb250YWluZXIiLCJ3cmFwcGVyIiwidGl0bGVfY29udGFpbmVyIiwidGl0bGUiLCJtYWluIiwic3VidGl0bGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJpbnB1dCIsIm1heEhlaWdodCIsImJhY2tncm91bmRDb2xvciIsIm92ZXJmbG93WSIsIm1heFdpZHRoIiwicGFkZGluZyIsInpJbmRleCIsImJvdHRvbV9jb250YWluZXIiLCJwYXRobmFtZSIsInZpZXdfaGlzdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUE7O0FBQUEsb0JBQ01DLHdEQUFVLENBQUNDLDZDQUFELENBRGhCO0FBQUEsTUFDdkJDLEtBRHVCLGVBQ3ZCQSxLQUR1QjtBQUFBLE1BQ2hCQyxRQURnQixlQUNoQkEsUUFEZ0I7QUFBQSxNQUNOQyxPQURNLGVBQ05BLE9BRE07O0FBQUEsa0JBRVBDLHNEQUFRLENBQUMsRUFBRCxDQUZEO0FBQUEsTUFFeEJDLElBRndCO0FBQUEsTUFFbEJDLE9BRmtCOztBQUFBLG1CQUdxQkYsc0RBQVEsQ0FBQyxFQUFELENBSDdCO0FBQUEsTUFHeEJHLGtCQUh3QjtBQUFBLE1BR0pDLHFCQUhJOztBQUFBLG1CQUlpQkosc0RBQVEsQ0FBQyxFQUFELENBSnpCO0FBQUEsTUFJeEJLLGdCQUp3QjtBQUFBLE1BSU5DLG1CQUpNOztBQUFBLG1CQUs2Qk4sc0RBQVEsQ0FBQyxLQUFELENBTHJDO0FBQUEsTUFLeEJPLHNCQUx3QjtBQUFBLE1BS0FDLHlCQUxBOztBQUFBLG1CQU1tQlIsc0RBQVEsQ0FBQyxFQUFELENBTjNCO0FBQUEsTUFNeEJTLGlCQU53QjtBQUFBLE1BTUxDLG9CQU5LOztBQUFBLG1CQU9TVixzREFBUSxDQUFDLEVBQUQsQ0FQakI7QUFBQSxNQU94QlcsWUFQd0I7QUFBQSxNQU9WQyxlQVBVOztBQUFBLG1CQVFLWixzREFBUSxDQUFDLEVBQUQsQ0FSYjtBQUFBLE1BUXhCYSxVQVJ3QjtBQUFBLE1BUVpDLGFBUlk7O0FBQUEsbUJBU0NkLHNE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QUFBQTtBQUFBLHVCQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBckNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFxRUQ7QUFDRixHQTFFRDs7QUEyRUEsU0FBT1ksTUFBTSxFQUFiO0FBQ0Q7O0dBckp1Qi9DLE07O0tBQUFBLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmlzaXQvdW5wbGFuLmZkNGFjN2ZjYjVkZWRhZmE4MjY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IFN0b3JlcyB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvcGFnZXMvVW5wbGFuLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCBOYXYgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTmF2XCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1NwaW5uZXJcIjtcclxuaW1wb3J0IERldGFpbFBsYW4gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvRGV0YWlsUGxhblwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0J1dHRvblwiO1xyXG5cclxuaW1wb3J0IHsgQVBJX1VSTCwgQVBJX1VTRVIsIFRPS0VOLCBBUElfVklTSVRfUExBTiB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudFwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9DYXJkXCI7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Ecm9wZG93blwiO1xyXG5pbXBvcnQgeyBnZXRTZWFyY2hKZW5pc0NoYW5uZWwgfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVbnBsYW4oKSB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2gsIGFjdGlvbnMgfSA9IHVzZUNvbnRleHQoU3RvcmVzKTtcclxuICBjb25zdCBbcGxhbiwgc2V0UGxhbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NlYXJjaEplbmlzQ2hhbm5lbCwgc2V0U2VhcmNoSmVuaXNDaGFubmVsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsaXN0SmVuaXNDaGFubmVsLCBzZXRMaXN0SmVuaXNDaGFubmVsXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcmVuZGVyTGlzdEplbmlzQ2hhbm5lbCwgc2V0UmVuZGVyTGlzdEplbmlzQ2hhbm5lbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2ZvY3VzSmVuaXNDaGFubmVsLCBzZXRGb2N1c0plbmlzQ2hhbm5lbF0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW3NlYXJjaE91dGxldCwgc2V0U2VhcmNoT3V0bGV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsaXN0T3V0bGV0LCBzZXRMaXN0T3V0bGV0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdlbyA9IG5hdmlnYXRvci5nZW9sb2NhdGlvbjtcclxuICAgIGlmICghZ2VvKSB7XHJcbiAgICAgIHNldEVycm9yKFwiR2VvbG9jYXRpb24gaXMgbm90IHN1cHBvcnRlZFwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIHdhdGNoZXIgPSBnZW8ud2F0Y2hQb3NpdGlvbihcclxuICAgICAgKHsgY29vcmRzIH0pID0+IHtcclxuICAgICAgICBzZXRQb3NpdGlvbih7XHJcbiAgICAgICAgICBsYXRpdHVkZTogY29vcmRzLmxhdGl0dWRlLFxyXG4gICAgICAgICAgbG9uZ2l0dWRlOiBjb29yZHMubG9uZ2l0dWRlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvb3Jkcyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIChlcnIpID0+IHtcclxuICAgICAgICBzZXRFcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICByZXR1cm4gKCkgPT4gZ2VvLmNsZWFyV2F0Y2god2F0Y2hlcik7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvblNlYXJjaEplbmlzQ2hhbm5lbCA9IChzZWFyY2gpID0+IHtcclxuICAgIHNldFJlbmRlckxpc3RKZW5pc0NoYW5uZWwodHJ1ZSk7XHJcbiAgICBzZXRTZWFyY2hKZW5pc0NoYW5uZWwoc2VhcmNoKTtcclxuICAgIGlmIChzZWFyY2gpIHtcclxuICAgICAgZ2V0U2VhcmNoSmVuaXNDaGFubmVsKHNlYXJjaClcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgc2V0TGlzdEplbmlzQ2hhbm5lbChkYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0TGlzdEplbmlzQ2hhbm5lbChbXSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyU2VhcmNoSmVuaXNDaGFubmVsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmVuZGVyID0gbGlzdEplbmlzQ2hhbm5lbC5tYXAoKHZhbCwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEZvY3VzSmVuaXNDaGFubmVsKHZhbCk7XHJcbiAgICAgICAgICAgIHNldFNlYXJjaEplbmlzQ2hhbm5lbCh2YWwubmFtYUplbmlzQ2hhbm5lbCk7XHJcbiAgICAgICAgICAgIHNldExpc3RKZW5pc0NoYW5uZWwoW10pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFcIik7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbTogXCIuNXB4IHNvbGlkICNmMGYwZjBcIixcclxuICAgICAgICAgICAgd2lkdGg6IFwiMzUwcHhcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3ZhbC5uYW1hSmVuaXNDaGFubmVsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVuZGVyO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgPE5hdiBiYWNrSHJlZj1cIi9cIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICBVbnBsYW4gPGRpdj5WaXNpdDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5KZW5pcyBDaGFubmVsPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgb25TZWFyY2hKZW5pc0NoYW5uZWwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hKZW5pc0NoYW5uZWx9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFJlbmRlckxpc3RKZW5pc0NoYW5uZWwoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uRm9jdXM9eyhlKSA9PiBvblNlYXJjaEplbmlzQ2hhbm5lbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7cmVuZGVyTGlzdEplbmlzQ2hhbm5lbCA/IChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogXCIxODBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93WTogXCJzY3JvbGxcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCI0MDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMCA0cHhcIixcclxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDk5OTk5OSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3JlbmRlclNlYXJjaEplbmlzQ2hhbm5lbCgpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0aXRsZX0+T3V0bGV0PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0U2VhcmNoT3V0bGV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICBocmVmPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL3Zpc2l0L3VucGxhbi9zdWJtaXRcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyBxdWVyeTogeyBkYXRhOiBcImhhaVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlN1Ym1pdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdmlzaXQvdW5wbGFuL2hpc3RvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWV3X2hpc3Rvcnl9PlZpZXcgSGlzdG9yeTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PntgbGF0aXR1ZGU6ICR7cG9zaXRpb24ubGF0aXR1ZGV9YH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+e2Bsb25naXR1ZGU6ICR7cG9zaXRpb24ubG9uZ2l0dWRlfWB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gcmVuZGVyKCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==