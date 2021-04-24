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
        lineNumber: 89,
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
            lineNumber: 94,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Unplan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.title_container,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Unplan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.title,
              children: ["Unplan ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: "Visit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 24
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Unplan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.main,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Unplan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.subtitle,
              children: "Jenis Channel"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              onChange: function onChange(e) {
                onSearchJenisChannel(e.target.value);
              },
              value: searchJenisChannel,
              placeholder: "Search",
              className: _styles_pages_Unplan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.input,
              onFocus: function onFocus(e) {
                return onSearchJenisChannel(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
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
              lineNumber: 112,
              columnNumber: 17
            }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Unplan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.subtitle,
              children: "Outlet"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              onChange: function onChange(e) {
                setSearchOutlet(e.target.value);
              },
              placeholder: "Search",
              className: _styles_pages_Unplan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.input
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
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
                    lineNumber: 142,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/visit/unplan/history",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_pages_Unplan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.view_history,
                    children: "View History"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 147,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: "latitude: ".concat(position.latitude)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: "longitude: ".concat(position.longitude)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlzaXQvdW5wbGFuL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJVbnBsYW4iLCJ1c2VDb250ZXh0IiwiU3RvcmVzIiwic3RhdGUiLCJkaXNwYXRjaCIsImFjdGlvbnMiLCJ1c2VTdGF0ZSIsInBsYW4iLCJzZXRQbGFuIiwic2VhcmNoSmVuaXNDaGFubmVsIiwic2V0U2VhcmNoSmVuaXNDaGFubmVsIiwibGlzdEplbmlzQ2hhbm5lbCIsInNldExpc3RKZW5pc0NoYW5uZWwiLCJyZW5kZXJMaXN0SmVuaXNDaGFubmVsIiwic2V0UmVuZGVyTGlzdEplbmlzQ2hhbm5lbCIsImZvY3VzSmVuaXNDaGFubmVsIiwic2V0Rm9jdXNKZW5pc0NoYW5uZWwiLCJzZWFyY2hPdXRsZXQiLCJzZXRTZWFyY2hPdXRsZXQiLCJsaXN0T3V0bGV0Iiwic2V0TGlzdE91dGxldCIsInBvc2l0aW9uIiwic2V0UG9zaXRpb24iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJ1c2VFZmZlY3QiLCJnZW8iLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsIndhdGNoZXIiLCJ3YXRjaFBvc2l0aW9uIiwiY29vcmRzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwibWVzc2FnZSIsImNsZWFyV2F0Y2giLCJvblNlYXJjaEplbmlzQ2hhbm5lbCIsInNlYXJjaCIsImdldFNlYXJjaEplbmlzQ2hhbm5lbCIsInRoZW4iLCJkYXRhIiwicmVuZGVyU2VhcmNoSmVuaXNDaGFubmVsIiwicmVuZGVyIiwibWFwIiwidmFsIiwiaW5kZXgiLCJuYW1hSmVuaXNDaGFubmVsIiwiYm9yZGVyQm90dG9tIiwid2lkdGgiLCJzdHlsZXMiLCJjb250YWluZXIiLCJ3cmFwcGVyIiwidGl0bGVfY29udGFpbmVyIiwidGl0bGUiLCJtYWluIiwic3VidGl0bGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJpbnB1dCIsIm1heEhlaWdodCIsImJhY2tncm91bmRDb2xvciIsIm92ZXJmbG93WSIsIm1heFdpZHRoIiwicGFkZGluZyIsInpJbmRleCIsImJvdHRvbV9jb250YWluZXIiLCJwYXRobmFtZSIsInZpZXdfaGlzdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUE7O0FBQUEsb0JBQ01DLHdEQUFVLENBQUNDLDZDQUFELENBRGhCO0FBQUEsTUFDdkJDLEtBRHVCLGVBQ3ZCQSxLQUR1QjtBQUFBLE1BQ2hCQyxRQURnQixlQUNoQkEsUUFEZ0I7QUFBQSxNQUNOQyxPQURNLGVBQ05BLE9BRE07O0FBQUEsa0JBRVBDLHNEQUFRLENBQUMsRUFBRCxDQUZEO0FBQUEsTUFFeEJDLElBRndCO0FBQUEsTUFFbEJDLE9BRmtCOztBQUFBLG1CQUdxQkYsc0RBQVEsQ0FBQyxFQUFELENBSDdCO0FBQUEsTUFHeEJHLGtCQUh3QjtBQUFBLE1BR0pDLHFCQUhJOztBQUFBLG1CQUlpQkosc0RBQVEsQ0FBQyxFQUFELENBSnpCO0FBQUEsTUFJeEJLLGdCQUp3QjtBQUFBLE1BSU5DLG1CQUpNOztBQUFBLG1CQUs2Qk4sc0RBQVEsQ0FBQyxLQUFELENBTHJDO0FBQUEsTUFLeEJPLHNCQUx3QjtBQUFBLE1BS0FDLHlCQUxBOztBQUFBLG1CQU1tQlIsc0RBQVEsQ0FBQyxFQUFELENBTjNCO0FBQUEsTUFNeEJTLGlCQU53QjtBQUFBLE1BTUxDLG9CQU5LOztBQUFBLG1CQU9TVixzREFBUSxDQUFDLEVBQUQsQ0FQakI7QUFBQSxNQU94QlcsWUFQd0I7QUFBQSxNQU9WQyxlQVBVOztBQUFBLG1CQVFLWixzREFBUSxDQUFDLEVBQUQsQ0FSYjtBQUFBLE1BUXhCYSxVQVJ3QjtBQUFBLE1BUVpDLGFBUlk7O0FBQUEsbUJBU0NkLHNE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O0FBQUE7QUFBQSxtQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFrRUQ7QUFDRixHQXZFRDs7QUF3RUEsU0FBT1ksTUFBTSxFQUFiO0FBQ0Q7O0dBL0l1Qi9DLE07O0tBQUFBLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmlzaXQvdW5wbGFuLmE5ZTNiMjU2ZDMwOWU5ODY1ZDQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IFN0b3JlcyB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvcGFnZXMvVW5wbGFuLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCBOYXYgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTmF2XCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1NwaW5uZXJcIjtcclxuaW1wb3J0IERldGFpbFBsYW4gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvRGV0YWlsUGxhblwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0J1dHRvblwiO1xyXG5cclxuaW1wb3J0IHsgQVBJX1VSTCwgQVBJX1VTRVIsIFRPS0VOLCBBUElfVklTSVRfUExBTiB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudFwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9DYXJkXCI7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Ecm9wZG93blwiO1xyXG5pbXBvcnQgeyBnZXRTZWFyY2hKZW5pc0NoYW5uZWwgfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVbnBsYW4oKSB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2gsIGFjdGlvbnMgfSA9IHVzZUNvbnRleHQoU3RvcmVzKTtcclxuICBjb25zdCBbcGxhbiwgc2V0UGxhbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NlYXJjaEplbmlzQ2hhbm5lbCwgc2V0U2VhcmNoSmVuaXNDaGFubmVsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsaXN0SmVuaXNDaGFubmVsLCBzZXRMaXN0SmVuaXNDaGFubmVsXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcmVuZGVyTGlzdEplbmlzQ2hhbm5lbCwgc2V0UmVuZGVyTGlzdEplbmlzQ2hhbm5lbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2ZvY3VzSmVuaXNDaGFubmVsLCBzZXRGb2N1c0plbmlzQ2hhbm5lbF0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW3NlYXJjaE91dGxldCwgc2V0U2VhcmNoT3V0bGV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsaXN0T3V0bGV0LCBzZXRMaXN0T3V0bGV0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdlbyA9IG5hdmlnYXRvci5nZW9sb2NhdGlvbjtcclxuICAgIGlmICghZ2VvKSB7XHJcbiAgICAgIHNldEVycm9yKFwiR2VvbG9jYXRpb24gaXMgbm90IHN1cHBvcnRlZFwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIHdhdGNoZXIgPSBnZW8ud2F0Y2hQb3NpdGlvbihcclxuICAgICAgKHsgY29vcmRzIH0pID0+IHtcclxuICAgICAgICBzZXRQb3NpdGlvbih7XHJcbiAgICAgICAgICBsYXRpdHVkZTogY29vcmRzLmxhdGl0dWRlLFxyXG4gICAgICAgICAgbG9uZ2l0dWRlOiBjb29yZHMubG9uZ2l0dWRlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvb3Jkcyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIChlcnIpID0+IHtcclxuICAgICAgICBzZXRFcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICByZXR1cm4gKCkgPT4gZ2VvLmNsZWFyV2F0Y2god2F0Y2hlcik7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvblNlYXJjaEplbmlzQ2hhbm5lbCA9IChzZWFyY2gpID0+IHtcclxuICAgIHNldFJlbmRlckxpc3RKZW5pc0NoYW5uZWwodHJ1ZSk7XHJcbiAgICBzZXRTZWFyY2hKZW5pc0NoYW5uZWwoc2VhcmNoKTtcclxuICAgIGlmIChzZWFyY2gpIHtcclxuICAgICAgZ2V0U2VhcmNoSmVuaXNDaGFubmVsKHNlYXJjaClcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgc2V0TGlzdEplbmlzQ2hhbm5lbChkYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0TGlzdEplbmlzQ2hhbm5lbChbXSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyU2VhcmNoSmVuaXNDaGFubmVsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmVuZGVyID0gbGlzdEplbmlzQ2hhbm5lbC5tYXAoKHZhbCwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEZvY3VzSmVuaXNDaGFubmVsKHZhbCk7XHJcbiAgICAgICAgICAgIHNldFNlYXJjaEplbmlzQ2hhbm5lbCh2YWwubmFtYUplbmlzQ2hhbm5lbCk7XHJcbiAgICAgICAgICAgIHNldExpc3RKZW5pc0NoYW5uZWwoW10pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFcIik7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogXCIuNXB4IHNvbGlkICNmMGYwZjBcIiwgd2lkdGg6IFwiMzUwcHhcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt2YWwubmFtYUplbmlzQ2hhbm5lbH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlbmRlcjtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAobG9hZGluZykge1xyXG4gICAgICByZXR1cm4gPFNwaW5uZXIgLz47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxOYXYgYmFja0hyZWY9XCIvXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZV9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgVW5wbGFuIDxkaXY+VmlzaXQ8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0aXRsZX0+SmVuaXMgQ2hhbm5lbDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIG9uU2VhcmNoSmVuaXNDaGFubmVsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoSmVuaXNDaGFubmVsfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICBvbkZvY3VzPXsoZSkgPT4gb25TZWFyY2hKZW5pc0NoYW5uZWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAge3JlbmRlckxpc3RKZW5pc0NoYW5uZWwgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IFwiMTgwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvd1k6IFwic2Nyb2xsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiNDAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjAgNHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiA5OTk5OTksXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtyZW5kZXJTZWFyY2hKZW5pc0NoYW5uZWwoKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9Pk91dGxldDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFNlYXJjaE91dGxldChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvdHRvbV9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgaHJlZj17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi92aXNpdC91bnBsYW4vc3VibWl0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcXVlcnk6IHsgZGF0YTogXCJoYWlcIiB9LFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJTdWJtaXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Zpc2l0L3VucGxhbi9oaXN0b3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlld19oaXN0b3J5fT5WaWV3IEhpc3Rvcnk8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPGRpdj57YGxhdGl0dWRlOiAke3Bvc2l0aW9uLmxhdGl0dWRlfWB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PntgbG9uZ2l0dWRlOiAke3Bvc2l0aW9uLmxvbmdpdHVkZX1gfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIHJlbmRlcigpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=