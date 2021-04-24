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
              className: _styles_pages_Unplan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.input
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
              lineNumber: 108,
              columnNumber: 17
            }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Unplan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.subtitle,
              children: "Outlet"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              onChange: function onChange(e) {
                setSearchOutlet(e.target.value);
              },
              placeholder: "Search",
              className: _styles_pages_Unplan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.input
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
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
                    lineNumber: 138,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/visit/unplan/history",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_pages_Unplan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.view_history,
                    children: "View History"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 143,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: "latitude: ".concat(position.latitude)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: "longitude: ".concat(position.longitude)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 130,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlzaXQvdW5wbGFuL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJVbnBsYW4iLCJ1c2VDb250ZXh0IiwiU3RvcmVzIiwic3RhdGUiLCJkaXNwYXRjaCIsImFjdGlvbnMiLCJ1c2VTdGF0ZSIsInBsYW4iLCJzZXRQbGFuIiwic2VhcmNoSmVuaXNDaGFubmVsIiwic2V0U2VhcmNoSmVuaXNDaGFubmVsIiwibGlzdEplbmlzQ2hhbm5lbCIsInNldExpc3RKZW5pc0NoYW5uZWwiLCJmb2N1c0plbmlzQ2hhbm5lbCIsInNldEZvY3VzSmVuaXNDaGFubmVsIiwic2VhcmNoT3V0bGV0Iiwic2V0U2VhcmNoT3V0bGV0IiwibGlzdE91dGxldCIsInNldExpc3RPdXRsZXQiLCJwb3NpdGlvbiIsInNldFBvc2l0aW9uIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwidXNlRWZmZWN0IiwiZ2VvIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJ3YXRjaGVyIiwid2F0Y2hQb3NpdGlvbiIsImNvb3JkcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiY29uc29sZSIsImxvZyIsImVyciIsIm1lc3NhZ2UiLCJjbGVhcldhdGNoIiwib25TZWFyY2hKZW5pc0NoYW5uZWwiLCJzZWFyY2giLCJnZXRTZWFyY2hKZW5pc0NoYW5uZWwiLCJ0aGVuIiwiZGF0YSIsInJlbmRlclNlYXJjaEplbmlzQ2hhbm5lbCIsInJlbmRlciIsIm1hcCIsInZhbCIsImluZGV4IiwibmFtYUplbmlzQ2hhbm5lbCIsImJvcmRlckJvdHRvbSIsIndpZHRoIiwic3R5bGVzIiwiY29udGFpbmVyIiwid3JhcHBlciIsInRpdGxlX2NvbnRhaW5lciIsInRpdGxlIiwibWFpbiIsInN1YnRpdGxlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaW5wdXQiLCJtYXhIZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvdmVyZmxvd1kiLCJtYXhXaWR0aCIsInBhZGRpbmciLCJ6SW5kZXgiLCJib3R0b21fY29udGFpbmVyIiwicGF0aG5hbWUiLCJ2aWV3X2hpc3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBOztBQUFBLG9CQUNNQyx3REFBVSxDQUFDQyw2Q0FBRCxDQURoQjtBQUFBLE1BQ3ZCQyxLQUR1QixlQUN2QkEsS0FEdUI7QUFBQSxNQUNoQkMsUUFEZ0IsZUFDaEJBLFFBRGdCO0FBQUEsTUFDTkMsT0FETSxlQUNOQSxPQURNOztBQUFBLGtCQUVQQyxzREFBUSxDQUFDLEVBQUQsQ0FGRDtBQUFBLE1BRXhCQyxJQUZ3QjtBQUFBLE1BRWxCQyxPQUZrQjs7QUFBQSxtQkFHcUJGLHNEQUFRLENBQUMsRUFBRCxDQUg3QjtBQUFBLE1BR3hCRyxrQkFId0I7QUFBQSxNQUdKQyxxQkFISTs7QUFBQSxtQkFJaUJKLHNEQUFRLENBQUMsRUFBRCxDQUp6QjtBQUFBLE1BSXhCSyxnQkFKd0I7QUFBQSxNQUlOQyxtQkFKTTs7QUFBQSxtQkFLbUJOLHNEQUFRLENBQUMsRUFBRCxDQUwzQjtBQUFBLE1BS3hCTyxpQkFMd0I7QUFBQSxNQUtMQyxvQkFMSzs7QUFBQSxtQkFNU1Isc0RBQVEsQ0FBQyxFQUFELENBTmpCO0FBQUEsTUFNeEJTLFlBTndCO0FBQUEsTUFNVkMsZUFOVTs7QUFBQSxtQkFPS1Ysc0RBQVEsQ0FBQyxFQUFELENBUGI7QUFBQSxNQU94QlcsVUFQd0I7QUFBQSxNQU9aQyxhQVBZOztBQUFBLG1CQVFDWixzREFBUSxDQUFDLEVBQUQsQ0FSVDtBQUFBLE1BUXhCYSxRQVJ3QjtBQUFBLE1BUWRDLFdBUmM7O0FBQUEsbUJBU0RkLHNEQUFRLENBQUMsS0FBRCxDQVRQO0FBQUEsTUFTeEJlLE9BVHdCO0FBQUEsTUFTZkMsVUFUZTs7QUFB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QkFBUyxFQUFFVixzRUFBTSxDQUFDaUIsZ0JBQXZCO0FBQUEsc0NBQ0UscUVBQUMsZ0RBQUQ7QUFDRSxvQkFBSSxFQUFFO0FBQ0pDLDBCQUFRLEVBQUUsc0JBRE4sQ0FFSjs7QUFGSSxpQkFEUjtBQUFBLHVDQU1FO0FBQUEseUNBQ0UscUVBQUMsMERBQUQ7QUFBUSx3QkFBSSxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBV0UscUVBQUMsZ0RBQUQ7QUFBTSxvQkFBSSxFQUFDLHVCQUFYO0FBQUEsdUNBQ0U7QUFBQSx5Q0FDRTtBQUFLLDZCQUFTLEVBQUVsQixzRUFBTSxDQUFDbUIsWUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFYRixlQWdCRTtBQUFBLDhDQUFtQnBELFFBQVEsQ0FBQ2EsUUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWhCRixlQWlCRTtBQUFBLCtDQUFvQmIsUUFBUSxDQUFDYyxTQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFqQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWlFRDtBQUNGLEdBdEVEOztBQXVFQSxTQUFPWSxNQUFNLEVBQWI7QUFDRDs7R0EzSXVCN0MsTTs7S0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92aXNpdC91bnBsYW4uMjY5OTAxNmFlZjk1MGZhNzU3N2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU3RvcmVzIH0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9wYWdlcy9VbnBsYW4ubW9kdWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IE5hdiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9OYXZcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvU3Bpbm5lclwiO1xyXG5pbXBvcnQgRGV0YWlsUGxhbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9EZXRhaWxQbGFuXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQnV0dG9uXCI7XHJcblxyXG5pbXBvcnQgeyBBUElfVVJMLCBBUElfVVNFUiwgVE9LRU4sIEFQSV9WSVNJVF9QTEFOIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50XCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0NhcmRcIjtcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0Ryb3Bkb3duXCI7XHJcbmltcG9ydCB7IGdldFNlYXJjaEplbmlzQ2hhbm5lbCB9IGZyb20gXCIuLi8uLi8uLi9oZWxwZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVucGxhbigpIHtcclxuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCwgYWN0aW9ucyB9ID0gdXNlQ29udGV4dChTdG9yZXMpO1xyXG4gIGNvbnN0IFtwbGFuLCBzZXRQbGFuXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2VhcmNoSmVuaXNDaGFubmVsLCBzZXRTZWFyY2hKZW5pc0NoYW5uZWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xpc3RKZW5pc0NoYW5uZWwsIHNldExpc3RKZW5pc0NoYW5uZWxdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtmb2N1c0plbmlzQ2hhbm5lbCwgc2V0Rm9jdXNKZW5pc0NoYW5uZWxdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtzZWFyY2hPdXRsZXQsIHNldFNlYXJjaE91dGxldF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGlzdE91dGxldCwgc2V0TGlzdE91dGxldF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZW8gPSBuYXZpZ2F0b3IuZ2VvbG9jYXRpb247XHJcbiAgICBpZiAoIWdlbykge1xyXG4gICAgICBzZXRFcnJvcihcIkdlb2xvY2F0aW9uIGlzIG5vdCBzdXBwb3J0ZWRcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciB3YXRjaGVyID0gZ2VvLndhdGNoUG9zaXRpb24oXHJcbiAgICAgICh7IGNvb3JkcyB9KSA9PiB7XHJcbiAgICAgICAgc2V0UG9zaXRpb24oe1xyXG4gICAgICAgICAgbGF0aXR1ZGU6IGNvb3Jkcy5sYXRpdHVkZSxcclxuICAgICAgICAgIGxvbmdpdHVkZTogY29vcmRzLmxvbmdpdHVkZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjb29yZHMpO1xyXG4gICAgICB9LFxyXG4gICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgcmV0dXJuICgpID0+IGdlby5jbGVhcldhdGNoKHdhdGNoZXIpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25TZWFyY2hKZW5pc0NoYW5uZWwgPSAoc2VhcmNoKSA9PiB7XHJcbiAgICBzZXRTZWFyY2hKZW5pc0NoYW5uZWwoc2VhcmNoKTtcclxuICAgIGlmIChzZWFyY2gpIHtcclxuICAgICAgZ2V0U2VhcmNoSmVuaXNDaGFubmVsKHNlYXJjaClcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgc2V0TGlzdEplbmlzQ2hhbm5lbChkYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0TGlzdEplbmlzQ2hhbm5lbChbXSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyU2VhcmNoSmVuaXNDaGFubmVsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmVuZGVyID0gbGlzdEplbmlzQ2hhbm5lbC5tYXAoKHZhbCwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEZvY3VzSmVuaXNDaGFubmVsKHZhbCk7XHJcbiAgICAgICAgICAgIHNldFNlYXJjaEplbmlzQ2hhbm5lbCh2YWwubmFtYUplbmlzQ2hhbm5lbCk7XHJcbiAgICAgICAgICAgIHNldExpc3RKZW5pc0NoYW5uZWwoW10pO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICBzdHlsZT17eyBib3JkZXJCb3R0b206IFwiLjVweCBzb2xpZCAjZjBmMGYwXCIsIHdpZHRoOiBcIjM1MHB4XCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dmFsLm5hbWFKZW5pc0NoYW5uZWx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZW5kZXI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8TmF2IGJhY2tIcmVmPVwiL1wiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgIFVucGxhbiA8ZGl2PlZpc2l0PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9PkplbmlzIENoYW5uZWw8L2Rpdj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBvblNlYXJjaEplbmlzQ2hhbm5lbChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaEplbmlzQ2hhbm5lbH1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAge2xpc3RKZW5pc0NoYW5uZWwgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IFwiMTgwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvd1k6IFwic2Nyb2xsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiNDAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjAgNHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiA5OTk5OTksXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtyZW5kZXJTZWFyY2hKZW5pc0NoYW5uZWwoKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9Pk91dGxldDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFNlYXJjaE91dGxldChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvdHRvbV9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgaHJlZj17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi92aXNpdC91bnBsYW4vc3VibWl0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcXVlcnk6IHsgZGF0YTogXCJoYWlcIiB9LFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJTdWJtaXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Zpc2l0L3VucGxhbi9oaXN0b3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlld19oaXN0b3J5fT5WaWV3IEhpc3Rvcnk8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPGRpdj57YGxhdGl0dWRlOiAke3Bvc2l0aW9uLmxhdGl0dWRlfWB9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PntgbG9uZ2l0dWRlOiAke3Bvc2l0aW9uLmxvbmdpdHVkZX1gfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIHJlbmRlcigpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=