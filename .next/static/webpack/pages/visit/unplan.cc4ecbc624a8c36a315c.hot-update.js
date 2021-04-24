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
              lineNumber: 120,
              columnNumber: 17
            }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Unplan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.subtitle,
              children: "Outlet"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              onChange: function onChange(e) {
                setSearchOutlet(e.target.value);
              },
              placeholder: "Search",
              className: _styles_pages_Unplan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.input
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
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
                    lineNumber: 150,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 149,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/visit/unplan/history",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_pages_Unplan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.view_history,
                    children: "View History"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 155,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 154,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: "latitude: ".concat(position.latitude)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: "longitude: ".concat(position.longitude)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 142,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlzaXQvdW5wbGFuL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJVbnBsYW4iLCJ1c2VDb250ZXh0IiwiU3RvcmVzIiwic3RhdGUiLCJkaXNwYXRjaCIsImFjdGlvbnMiLCJ1c2VTdGF0ZSIsInBsYW4iLCJzZXRQbGFuIiwic2VhcmNoSmVuaXNDaGFubmVsIiwic2V0U2VhcmNoSmVuaXNDaGFubmVsIiwibGlzdEplbmlzQ2hhbm5lbCIsInNldExpc3RKZW5pc0NoYW5uZWwiLCJyZW5kZXJMaXN0SmVuaXNDaGFubmVsIiwic2V0UmVuZGVyTGlzdEplbmlzQ2hhbm5lbCIsImZvY3VzSmVuaXNDaGFubmVsIiwic2V0Rm9jdXNKZW5pc0NoYW5uZWwiLCJzZWFyY2hPdXRsZXQiLCJzZXRTZWFyY2hPdXRsZXQiLCJsaXN0T3V0bGV0Iiwic2V0TGlzdE91dGxldCIsInBvc2l0aW9uIiwic2V0UG9zaXRpb24iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJ1c2VFZmZlY3QiLCJnZW8iLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsIndhdGNoZXIiLCJ3YXRjaFBvc2l0aW9uIiwiY29vcmRzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwibWVzc2FnZSIsImNsZWFyV2F0Y2giLCJvblNlYXJjaEplbmlzQ2hhbm5lbCIsInNlYXJjaCIsImdldFNlYXJjaEplbmlzQ2hhbm5lbCIsInRoZW4iLCJkYXRhIiwicmVuZGVyU2VhcmNoSmVuaXNDaGFubmVsIiwicmVuZGVyIiwibWFwIiwidmFsIiwiaW5kZXgiLCJuYW1hSmVuaXNDaGFubmVsIiwiYm9yZGVyQm90dG9tIiwid2lkdGgiLCJzdHlsZXMiLCJjb250YWluZXIiLCJ3cmFwcGVyIiwidGl0bGVfY29udGFpbmVyIiwidGl0bGUiLCJtYWluIiwic3VidGl0bGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJpbnB1dCIsInNldFRpbWVvdXQiLCJtYXhIZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvdmVyZmxvd1kiLCJtYXhXaWR0aCIsInBhZGRpbmciLCJ6SW5kZXgiLCJib3R0b21fY29udGFpbmVyIiwicGF0aG5hbWUiLCJ2aWV3X2hpc3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBOztBQUFBLG9CQUNNQyx3REFBVSxDQUFDQyw2Q0FBRCxDQURoQjtBQUFBLE1BQ3ZCQyxLQUR1QixlQUN2QkEsS0FEdUI7QUFBQSxNQUNoQkMsUUFEZ0IsZUFDaEJBLFFBRGdCO0FBQUEsTUFDTkMsT0FETSxlQUNOQSxPQURNOztBQUFBLGtCQUVQQyxzREFBUSxDQUFDLEVBQUQsQ0FGRDtBQUFBLE1BRXhCQyxJQUZ3QjtBQUFBLE1BRWxCQyxPQUZrQjs7QUFBQSxtQkFHcUJGLHNEQUFRLENBQUMsRUFBRCxDQUg3QjtBQUFBLE1BR3hCRyxrQkFId0I7QUFBQSxNQUdKQyxxQkFISTs7QUFBQSxtQkFJaUJKLHNEQUFRLENBQUMsRUFBRCxDQUp6QjtBQUFBLE1BSXhCSyxnQkFKd0I7QUFBQSxNQUlOQyxtQkFKTTs7QUFBQSxtQkFLNkJOLHNEQUFRLENBQUMsS0FBRCxDQUxyQztBQUFBLE1BS3hCTyxzQkFMd0I7QUFBQSxNQUtBQyx5QkFMQTs7QUFBQSxtQkFNbUJSLHNEQUFRLENBQUMsRUFBRCxDQU4zQjtBQUFBLE1BTXhCUyxpQkFOd0I7QUFBQSxNQU1MQyxvQkFOSzs7QUFBQSxtQkFPU1Ysc0RBQVEsQ0FBQyxFQUFELENBUGpCO0FBQUEsTUFPeEJXLFlBUHdCO0FBQUEsTUFPVkMsZUFQVTs7QUFBQSxtQkFRS1osc0RBQVEsQ0FBQyxFQUFELENBUmI7QUFBQSxNQVF4QmEsVUFSd0I7QUFBQSxNQVFaQyxhQVJZOztB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QUEsdUJBaEJGLGVBaUJFO0FBQUEsK0NBQW9CYixRQUFRLENBQUNjLFNBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXZDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBdUVEO0FBQ0YsR0E1RUQ7O0FBNkVBLFNBQU9ZLE1BQU0sRUFBYjtBQUNEOztHQXZKdUIvQyxNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Zpc2l0L3VucGxhbi5jYzRlY2JjNjI0YThjMzZhMzE1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTdG9yZXMgfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmVcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL3BhZ2VzL1VucGxhbi5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgTmF2IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL05hdlwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9TcGlubmVyXCI7XHJcbmltcG9ydCBEZXRhaWxQbGFuIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0RldGFpbFBsYW5cIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9CdXR0b25cIjtcclxuXHJcbmltcG9ydCB7IEFQSV9VUkwsIEFQSV9VU0VSLCBUT0tFTiwgQVBJX1ZJU0lUX1BMQU4gfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQ2FyZFwiO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvRHJvcGRvd25cIjtcclxuaW1wb3J0IHsgZ2V0U2VhcmNoSmVuaXNDaGFubmVsIH0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVW5wbGFuKCkge1xyXG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoLCBhY3Rpb25zIH0gPSB1c2VDb250ZXh0KFN0b3Jlcyk7XHJcbiAgY29uc3QgW3BsYW4sIHNldFBsYW5dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzZWFyY2hKZW5pc0NoYW5uZWwsIHNldFNlYXJjaEplbmlzQ2hhbm5lbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGlzdEplbmlzQ2hhbm5lbCwgc2V0TGlzdEplbmlzQ2hhbm5lbF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3JlbmRlckxpc3RKZW5pc0NoYW5uZWwsIHNldFJlbmRlckxpc3RKZW5pc0NoYW5uZWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtmb2N1c0plbmlzQ2hhbm5lbCwgc2V0Rm9jdXNKZW5pc0NoYW5uZWxdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtzZWFyY2hPdXRsZXQsIHNldFNlYXJjaE91dGxldF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGlzdE91dGxldCwgc2V0TGlzdE91dGxldF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZW8gPSBuYXZpZ2F0b3IuZ2VvbG9jYXRpb247XHJcbiAgICBpZiAoIWdlbykge1xyXG4gICAgICBzZXRFcnJvcihcIkdlb2xvY2F0aW9uIGlzIG5vdCBzdXBwb3J0ZWRcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciB3YXRjaGVyID0gZ2VvLndhdGNoUG9zaXRpb24oXHJcbiAgICAgICh7IGNvb3JkcyB9KSA9PiB7XHJcbiAgICAgICAgc2V0UG9zaXRpb24oe1xyXG4gICAgICAgICAgbGF0aXR1ZGU6IGNvb3Jkcy5sYXRpdHVkZSxcclxuICAgICAgICAgIGxvbmdpdHVkZTogY29vcmRzLmxvbmdpdHVkZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjb29yZHMpO1xyXG4gICAgICB9LFxyXG4gICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgcmV0dXJuICgpID0+IGdlby5jbGVhcldhdGNoKHdhdGNoZXIpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25TZWFyY2hKZW5pc0NoYW5uZWwgPSAoc2VhcmNoKSA9PiB7XHJcbiAgICBzZXRSZW5kZXJMaXN0SmVuaXNDaGFubmVsKHRydWUpO1xyXG4gICAgc2V0U2VhcmNoSmVuaXNDaGFubmVsKHNlYXJjaCk7XHJcbiAgICBpZiAoc2VhcmNoKSB7XHJcbiAgICAgIGdldFNlYXJjaEplbmlzQ2hhbm5lbChzZWFyY2gpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIHNldExpc3RKZW5pc0NoYW5uZWwoZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldExpc3RKZW5pc0NoYW5uZWwoW10pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlclNlYXJjaEplbmlzQ2hhbm5lbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJlbmRlciA9IGxpc3RKZW5pc0NoYW5uZWwubWFwKCh2YWwsIGluZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRGb2N1c0plbmlzQ2hhbm5lbCh2YWwpO1xyXG4gICAgICAgICAgICBzZXRTZWFyY2hKZW5pc0NoYW5uZWwodmFsLm5hbWFKZW5pc0NoYW5uZWwpO1xyXG4gICAgICAgICAgICBzZXRMaXN0SmVuaXNDaGFubmVsKFtdKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhXCIpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBib3JkZXJCb3R0b206IFwiLjVweCBzb2xpZCAjZjBmMGYwXCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjM1MHB4XCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt2YWwubmFtYUplbmlzQ2hhbm5lbH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlbmRlcjtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAobG9hZGluZykge1xyXG4gICAgICByZXR1cm4gPFNwaW5uZXIgLz47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxOYXYgYmFja0hyZWY9XCIvXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZV9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgVW5wbGFuIDxkaXY+VmlzaXQ8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0aXRsZX0+SmVuaXMgQ2hhbm5lbDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIG9uU2VhcmNoSmVuaXNDaGFubmVsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoSmVuaXNDaGFubmVsfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICBvbkJsdXI9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVuZGVyTGlzdEplbmlzQ2hhbm5lbChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgIH0sIDIwMCk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25Gb2N1cz17KGUpID0+IG9uU2VhcmNoSmVuaXNDaGFubmVsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHtyZW5kZXJMaXN0SmVuaXNDaGFubmVsID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBcIjE4MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dZOiBcInNjcm9sbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBcIjQwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIwIDRweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogOTk5OTk5LFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7cmVuZGVyU2VhcmNoSmVuaXNDaGFubmVsKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5PdXRsZXQ8L2Rpdj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRTZWFyY2hPdXRsZXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3R0b21fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9e3tcclxuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogXCIvdmlzaXQvdW5wbGFuL3N1Ym1pdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHF1ZXJ5OiB7IGRhdGE6IFwiaGFpXCIgfSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiU3VibWl0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi92aXNpdC91bnBsYW4vaGlzdG9yeVwiPlxyXG4gICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZXdfaGlzdG9yeX0+VmlldyBIaXN0b3J5PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxkaXY+e2BsYXRpdHVkZTogJHtwb3NpdGlvbi5sYXRpdHVkZX1gfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj57YGxvbmdpdHVkZTogJHtwb3NpdGlvbi5sb25naXR1ZGV9YH08L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiByZW5kZXIoKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9