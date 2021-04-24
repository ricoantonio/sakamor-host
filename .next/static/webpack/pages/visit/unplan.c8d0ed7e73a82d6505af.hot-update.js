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

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      focusJenisChannel = _useState4[0],
      setFocusJenisChannel = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      searchOutlet = _useState5[0],
      setSearchOutlet = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      listOutlet = _useState6[0],
      setListOutlet = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      position = _useState7[0],
      setPosition = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      loading = _useState8[0],
      setLoading = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      error = _useState9[0],
      setError = _useState9[1];

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
        },
        style: {
          borderBottom: ".5px solid #f0f0f0",
          width: "350px"
        },
        children: val.namaJenisChannel
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this);
    });
    return render;
  };

  var render = function render() {
    if (loading) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
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
            lineNumber: 91,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Unplan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.title_container,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Unplan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.title,
              children: ["Unplan ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: "Visit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 24
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Unplan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.main,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Unplan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.subtitle,
              children: "Jenis Channel"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              onChange: function onChange(e) {
                onSearchJenisChannel(e.target.value);
              },
              value: searchJenisChannel,
              placeholder: "Search",
              className: _styles_pages_Unplan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.input,
              onBlur: setListJenisChannel([])
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, _this), listJenisChannel ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
              lineNumber: 109,
              columnNumber: 17
            }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Unplan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.subtitle,
              children: "Outlet"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              onChange: function onChange(e) {
                setSearchOutlet(e.target.value);
              },
              placeholder: "Search",
              className: _styles_pages_Unplan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.input
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
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
                    lineNumber: 139,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/visit/unplan/history",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_pages_Unplan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.view_history,
                    children: "View History"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 144,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: "latitude: ".concat(position.latitude)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: "longitude: ".concat(position.longitude)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, _this);
    }
  };

  return render();
}

_s(Unplan, "AdfSh/t3ibk3Y8GdeNd8dPccaZg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlzaXQvdW5wbGFuL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJVbnBsYW4iLCJ1c2VDb250ZXh0IiwiU3RvcmVzIiwic3RhdGUiLCJkaXNwYXRjaCIsImFjdGlvbnMiLCJ1c2VTdGF0ZSIsInBsYW4iLCJzZXRQbGFuIiwic2VhcmNoSmVuaXNDaGFubmVsIiwic2V0U2VhcmNoSmVuaXNDaGFubmVsIiwibGlzdEplbmlzQ2hhbm5lbCIsInNldExpc3RKZW5pc0NoYW5uZWwiLCJmb2N1c0plbmlzQ2hhbm5lbCIsInNldEZvY3VzSmVuaXNDaGFubmVsIiwic2VhcmNoT3V0bGV0Iiwic2V0U2VhcmNoT3V0bGV0IiwibGlzdE91dGxldCIsInNldExpc3RPdXRsZXQiLCJwb3NpdGlvbiIsInNldFBvc2l0aW9uIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwidXNlRWZmZWN0IiwiZ2VvIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJ3YXRjaGVyIiwid2F0Y2hQb3NpdGlvbiIsImNvb3JkcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiY29uc29sZSIsImxvZyIsImVyciIsIm1lc3NhZ2UiLCJjbGVhcldhdGNoIiwib25TZWFyY2hKZW5pc0NoYW5uZWwiLCJzZWFyY2giLCJnZXRTZWFyY2hKZW5pc0NoYW5uZWwiLCJ0aGVuIiwiZGF0YSIsInJlbmRlclNlYXJjaEplbmlzQ2hhbm5lbCIsInJlbmRlciIsIm1hcCIsInZhbCIsImluZGV4IiwibmFtYUplbmlzQ2hhbm5lbCIsImJvcmRlckJvdHRvbSIsIndpZHRoIiwic3R5bGVzIiwiY29udGFpbmVyIiwid3JhcHBlciIsInRpdGxlX2NvbnRhaW5lciIsInRpdGxlIiwibWFpbiIsInN1YnRpdGxlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaW5wdXQiLCJtYXhIZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvdmVyZmxvd1kiLCJtYXhXaWR0aCIsInBhZGRpbmciLCJ6SW5kZXgiLCJib3R0b21fY29udGFpbmVyIiwicGF0aG5hbWUiLCJ2aWV3X2hpc3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBOztBQUFBLG9CQUNNQyx3REFBVSxDQUFDQyw2Q0FBRCxDQURoQjtBQUFBLE1BQ3ZCQyxLQUR1QixlQUN2QkEsS0FEdUI7QUFBQSxNQUNoQkMsUUFEZ0IsZUFDaEJBLFFBRGdCO0FBQUEsTUFDTkMsT0FETSxlQUNOQSxPQURNOztBQUFBLGtCQUVQQyxzREFBUSxDQUFDLEVBQUQsQ0FGRDtBQUFBLE1BRXhCQyxJQUZ3QjtBQUFBLE1BRWxCQyxPQUZrQjs7QUFBQSxtQkFHcUJGLHNEQUFRLENBQUMsRUFBRCxDQUg3QjtBQUFBLE1BR3hCRyxrQkFId0I7QUFBQSxNQUdKQyxxQkFISTs7QUFBQSxtQkFJaUJKLHNEQUFRLENBQUMsRUFBRCxDQUp6QjtBQUFBLE1BSXhCSyxnQkFKd0I7QUFBQSxNQUlOQyxtQkFKTTs7QUFBQSxtQkFLbUJOLHNEQUFRLENBQUMsRUFBRCxDQUwzQjtBQUFBLE1BS3hCTyxpQkFMd0I7QUFBQSxNQUtMQyxvQkFMSzs7QUFBQSxtQkFNU1Isc0RBQVEsQ0FBQyxFQUFELENBTmpCO0FBQUEsTUFNeEJTLFlBTndCO0FBQUEsTUFNVkMsZUFOVTs7QUFBQSxtQkFPS1Ysc0RBQVEsQ0FBQyxFQUFELENBUGI7QUFBQSxNQU94QlcsVUFQd0I7QUFBQSxNQU9aQyxhQVBZOztBQUFBLG1CQVFDWixzREFBUSxDQUFDLEVBQUQsQ0FSVDtBQUFBLE1BUXhCYSxRQVJ3QjtBQUFBLE1BUWRDLFdBUmM7O0FBQUEsbUJBU0RkLHNEQUFRLENBQUMsS0FBRCxDQVRQO0FBQUEsTUFTeEJlLE9BVHdCO0FBQUEsTUFTZkMsVUFUZTs7QUFB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O0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBM0JGLGVBa0NFO0FBQUssdUJBQVMsRUFBRVYsc0VBQU0sQ0FBQ2lCLGdCQUF2QjtBQUFBLHNDQUNFLHFFQUFDLGdEQUFEO0FBQ0Usb0JBQUksRUFBRTtBQUNKQywwQkFBUSxFQUFFLHNCQUROLENBRUo7O0FBRkksaUJBRFI7QUFBQSx1Q0FNRTtBQUFBLHlDQUNFLHFFQUFDLDBEQUFEO0FBQVEsd0JBQUksRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQVdFLHFFQUFDLGdEQUFEO0FBQU0sb0JBQUksRUFBQyx1QkFBWDtBQUFBLHVDQUNFO0FBQUEseUNBQ0U7QUFBSyw2QkFBUyxFQUFFbEIsc0VBQU0sQ0FBQ21CLFlBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBWEYsZUFnQkU7QUFBQSw4Q0FBbUJwRCxRQUFRLENBQUNhLFFBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFoQkYsZUFpQkU7QUFBQSwrQ0FBb0JiLFFBQVEsQ0FBQ2MsU0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFrRUQ7QUFDRixHQXZFRDs7QUF3RUEsU0FBT1ksTUFBTSxFQUFiO0FBQ0Q7O0dBNUl1QjdDLE07O0tBQUFBLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmlzaXQvdW5wbGFuLmM4ZDBlZDdlNzNhODJkNjUwNWFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IFN0b3JlcyB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvcGFnZXMvVW5wbGFuLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCBOYXYgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTmF2XCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1NwaW5uZXJcIjtcclxuaW1wb3J0IERldGFpbFBsYW4gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvRGV0YWlsUGxhblwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0J1dHRvblwiO1xyXG5cclxuaW1wb3J0IHsgQVBJX1VSTCwgQVBJX1VTRVIsIFRPS0VOLCBBUElfVklTSVRfUExBTiB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudFwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9DYXJkXCI7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Ecm9wZG93blwiO1xyXG5pbXBvcnQgeyBnZXRTZWFyY2hKZW5pc0NoYW5uZWwgfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVbnBsYW4oKSB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2gsIGFjdGlvbnMgfSA9IHVzZUNvbnRleHQoU3RvcmVzKTtcclxuICBjb25zdCBbcGxhbiwgc2V0UGxhbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NlYXJjaEplbmlzQ2hhbm5lbCwgc2V0U2VhcmNoSmVuaXNDaGFubmVsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsaXN0SmVuaXNDaGFubmVsLCBzZXRMaXN0SmVuaXNDaGFubmVsXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZm9jdXNKZW5pc0NoYW5uZWwsIHNldEZvY3VzSmVuaXNDaGFubmVsXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbc2VhcmNoT3V0bGV0LCBzZXRTZWFyY2hPdXRsZXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xpc3RPdXRsZXQsIHNldExpc3RPdXRsZXRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtwb3NpdGlvbiwgc2V0UG9zaXRpb25dID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZ2VvID0gbmF2aWdhdG9yLmdlb2xvY2F0aW9uO1xyXG4gICAgaWYgKCFnZW8pIHtcclxuICAgICAgc2V0RXJyb3IoXCJHZW9sb2NhdGlvbiBpcyBub3Qgc3VwcG9ydGVkXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgd2F0Y2hlciA9IGdlby53YXRjaFBvc2l0aW9uKFxyXG4gICAgICAoeyBjb29yZHMgfSkgPT4ge1xyXG4gICAgICAgIHNldFBvc2l0aW9uKHtcclxuICAgICAgICAgIGxhdGl0dWRlOiBjb29yZHMubGF0aXR1ZGUsXHJcbiAgICAgICAgICBsb25naXR1ZGU6IGNvb3Jkcy5sb25naXR1ZGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY29vcmRzKTtcclxuICAgICAgfSxcclxuICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgIHNldEVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIHJldHVybiAoKSA9PiBnZW8uY2xlYXJXYXRjaCh3YXRjaGVyKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uU2VhcmNoSmVuaXNDaGFubmVsID0gKHNlYXJjaCkgPT4ge1xyXG4gICAgc2V0U2VhcmNoSmVuaXNDaGFubmVsKHNlYXJjaCk7XHJcbiAgICBpZiAoc2VhcmNoKSB7XHJcbiAgICAgIGdldFNlYXJjaEplbmlzQ2hhbm5lbChzZWFyY2gpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIHNldExpc3RKZW5pc0NoYW5uZWwoZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldExpc3RKZW5pc0NoYW5uZWwoW10pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlclNlYXJjaEplbmlzQ2hhbm5lbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJlbmRlciA9IGxpc3RKZW5pc0NoYW5uZWwubWFwKCh2YWwsIGluZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRGb2N1c0plbmlzQ2hhbm5lbCh2YWwpO1xyXG4gICAgICAgICAgICBzZXRTZWFyY2hKZW5pc0NoYW5uZWwodmFsLm5hbWFKZW5pc0NoYW5uZWwpO1xyXG4gICAgICAgICAgICBzZXRMaXN0SmVuaXNDaGFubmVsKFtdKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiBcIi41cHggc29saWQgI2YwZjBmMFwiLCB3aWR0aDogXCIzNTBweFwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3ZhbC5uYW1hSmVuaXNDaGFubmVsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVuZGVyO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgPE5hdiBiYWNrSHJlZj1cIi9cIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICBVbnBsYW4gPGRpdj5WaXNpdDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5KZW5pcyBDaGFubmVsPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgb25TZWFyY2hKZW5pc0NoYW5uZWwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hKZW5pc0NoYW5uZWx9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgIG9uQmx1cj17c2V0TGlzdEplbmlzQ2hhbm5lbChbXSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7bGlzdEplbmlzQ2hhbm5lbCA/IChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogXCIxODBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93WTogXCJzY3JvbGxcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCI0MDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMCA0cHhcIixcclxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDk5OTk5OSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3JlbmRlclNlYXJjaEplbmlzQ2hhbm5lbCgpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0aXRsZX0+T3V0bGV0PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0U2VhcmNoT3V0bGV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICBocmVmPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL3Zpc2l0L3VucGxhbi9zdWJtaXRcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyBxdWVyeTogeyBkYXRhOiBcImhhaVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlN1Ym1pdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdmlzaXQvdW5wbGFuL2hpc3RvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWV3X2hpc3Rvcnl9PlZpZXcgSGlzdG9yeTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PntgbGF0aXR1ZGU6ICR7cG9zaXRpb24ubGF0aXR1ZGV9YH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+e2Bsb25naXR1ZGU6ICR7cG9zaXRpb24ubG9uZ2l0dWRlfWB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gcmVuZGVyKCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==