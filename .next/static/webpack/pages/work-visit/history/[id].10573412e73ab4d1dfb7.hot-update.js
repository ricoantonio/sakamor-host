webpackHotUpdate_N_E("pages/work-visit/history/[id]",{

/***/ "./pages/work-visit/history/[id]/index.jsx":
/*!*************************************************!*\
  !*** ./pages/work-visit/history/[id]/index.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_pages_WorkVisitDetail_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../styles/pages/WorkVisitDetail.module.css */ "./styles/pages/WorkVisitDetail.module.css");
/* harmony import */ var _styles_pages_WorkVisitDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_WorkVisitDetail_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../store */ "./store/index.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/Nav */ "./components/Nav.jsx");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/Card */ "./components/Card.jsx");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/Spinner */ "./components/Spinner.jsx");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/Button */ "./components/Button.jsx");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/Modal */ "./components/Modal.jsx");
/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/Dropdown */ "./components/Dropdown.jsx");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../helper */ "./helper.js");



var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-new\\pages\\work-visit\\history\\[id]\\index.jsx",
    _s = $RefreshSig$();













function index() {
  _s();

  var _this = this;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store__WEBPACK_IMPORTED_MODULE_5__["Stores"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch,
      actions = _useContext.actions;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      workVisit = _useState2[0],
      setWorkVisit = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      konten = _useState3[0],
      setKonten = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loadingKonten = _useState4[0],
      setLoadingKonten = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      loadingSubmit = _useState5[0],
      setLoadingSubmit = _useState5[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var now = new Date();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (router.query.id) {
      var userData = JSON.parse(localStorage.getItem("user"));
      Object(_helper__WEBPACK_IMPORTED_MODULE_12__["getWorkVisitMonthlyHistory"])(userData).then(function (res) {
        var result = res.filter(function (val) {
          return val.idWorkVisit === router.query.id;
        });
        setWorkVisit(result);
        setLoading(false);
      })["catch"](function (err) {
        console.log(err);
      });
      Object(_helper__WEBPACK_IMPORTED_MODULE_12__["getWorkVisitRating"])(router.query.id).then(function (res) {
        // console.log(res);
        setKonten(res);
        setLoadingKonten(false);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }, [router.query.id]);

  var renderPenilaian = function renderPenilaian() {
    var res = konten.map(function (val, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_WorkVisitDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.penilaian_top_container,
          children: val.namaKonten
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_WorkVisitDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.penilaian_bot_container,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_WorkVisitDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.nilai_container,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "Nilai"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: val.rating
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "Catatan"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
              disabled: true,
              style: {
                width: "100%",
                height: "80px",
                fontSize: "12px",
                border: "1px solid #e9ecf2",
                borderRadius: "5px"
              },
              value: val.catatan
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, _this)]
      }, void 0, true);
    });
    return res;
  };

  var renderDetail = function renderDetail() {
    var data = workVisit[0];

    if (data) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
          style: {
            borderRadius: "5px",
            padding: "16px"
          },
          shadow: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_WorkVisitDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.data_container,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: data.namaSMR
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                textAlign: "right"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: _styles_pages_WorkVisitDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.rayon_container,
                children: data.kodeRayon
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, _this), "margin: \"8px 0 0 0 \",", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              fontSize: "12px",
              fontWeight: "400"
            },
            children: ["Produk Fokus:", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _styles_pages_WorkVisitDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.produk_fokus_container,
              children: data.produkFokus
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, _this), renderPenilaian()]
      }, void 0, true);
    }
  };

  var render = function render() {
    if (loading || loadingKonten) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 14
      }, _this);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_WorkVisitDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_WorkVisitDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.wrapper,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Nav__WEBPACK_IMPORTED_MODULE_6__["default"], {
              title: "Work Visit",
              color: "white",
              action: "Submit",
              backAction: function backAction() {
                next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/work-visit/history");
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_WorkVisitDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.main,
              children: renderDetail()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, _this)
      }, void 0, false);
    }
  };

  return render();
}

_s(index, "rgtyBptW2STHb0B/rgdqtqAwcYQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd29yay12aXNpdC9oaXN0b3J5Ly9pbmRleC5qc3giXSwibmFtZXMiOlsiaW5kZXgiLCJ1c2VDb250ZXh0IiwiU3RvcmVzIiwic3RhdGUiLCJkaXNwYXRjaCIsImFjdGlvbnMiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwid29ya1Zpc2l0Iiwic2V0V29ya1Zpc2l0Iiwia29udGVuIiwic2V0S29udGVuIiwibG9hZGluZ0tvbnRlbiIsInNldExvYWRpbmdLb250ZW4iLCJsb2FkaW5nU3VibWl0Iiwic2V0TG9hZGluZ1N1Ym1pdCIsInJvdXRlciIsInVzZVJvdXRlciIsIm5vdyIsIkRhdGUiLCJ1c2VFZmZlY3QiLCJxdWVyeSIsImlkIiwidXNlckRhdGEiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZ2V0V29ya1Zpc2l0TW9udGhseUhpc3RvcnkiLCJ0aGVuIiwicmVzIiwicmVzdWx0IiwiZmlsdGVyIiwidmFsIiwiaWRXb3JrVmlzaXQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZ2V0V29ya1Zpc2l0UmF0aW5nIiwicmVuZGVyUGVuaWxhaWFuIiwibWFwIiwic3R5bGVzIiwicGVuaWxhaWFuX3RvcF9jb250YWluZXIiLCJuYW1hS29udGVuIiwicGVuaWxhaWFuX2JvdF9jb250YWluZXIiLCJuaWxhaV9jb250YWluZXIiLCJyYXRpbmciLCJ3aWR0aCIsImhlaWdodCIsImZvbnRTaXplIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiY2F0YXRhbiIsInJlbmRlckRldGFpbCIsImRhdGEiLCJwYWRkaW5nIiwiZGF0YV9jb250YWluZXIiLCJuYW1hU01SIiwidGV4dEFsaWduIiwicmF5b25fY29udGFpbmVyIiwia29kZVJheW9uIiwiZm9udFdlaWdodCIsInByb2R1a19mb2t1c19jb250YWluZXIiLCJwcm9kdWtGb2t1cyIsInJlbmRlciIsImNvbnRhaW5lciIsIndyYXBwZXIiLCJSb3V0ZXIiLCJwdXNoIiwibWFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUWUsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBOztBQUFBLG9CQUNPQyx3REFBVSxDQUFDQyw2Q0FBRCxDQURqQjtBQUFBLE1BQ3RCQyxLQURzQixlQUN0QkEsS0FEc0I7QUFBQSxNQUNmQyxRQURlLGVBQ2ZBLFFBRGU7QUFBQSxNQUNMQyxPQURLLGVBQ0xBLE9BREs7O0FBQUEsa0JBRUFDLHNEQUFRLENBQUMsSUFBRCxDQUZSO0FBQUEsTUFFdkJDLE9BRnVCO0FBQUEsTUFFZEMsVUFGYzs7QUFBQSxtQkFHSUYsc0RBQVEsQ0FBQyxFQUFELENBSFo7QUFBQSxNQUd2QkcsU0FIdUI7QUFBQSxNQUdaQyxZQUhZOztBQUFBLG1CQUlGSixzREFBUSxDQUFDLEVBQUQsQ0FKTjtBQUFBLE1BSXZCSyxNQUp1QjtBQUFBLE1BSWZDLFNBSmU7O0FBQUEsbUJBS1lOLHNEQUFRLENBQUMsSUFBRCxDQUxwQjtBQUFBLE1BS3ZCTyxhQUx1QjtBQUFBLE1BS1JDLGdCQUxROztBQUFBLG1CQU1ZUixzREFBUSxDQUFDLEtBQUQsQ0FOcEI7QUFBQSxNQU12QlMsYUFOdUI7QUFBQSxNQU1SQyxnQkFOUTs7QUFROUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQUlDLEdBQUcsR0FBRyxJQUFJQyxJQUFKLEVBQVY7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUosTUFBTSxDQUFDSyxLQUFQLENBQWFDLEVBQWpCLEVBQXFCO0FBQ25CLFVBQU1DLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixDQUFYLENBQWpCO0FBRUFDLGlGQUEwQixDQUFDTCxRQUFELENBQTFCLENBQ0dNLElBREgsQ0FDUSxVQUFDQyxHQUFELEVBQVM7QUFDYixZQUFJQyxNQUFNLEdBQUdELEdBQUcsQ0FBQ0UsTUFBSixDQUFXLFVBQUNDLEdBQUQsRUFBUztBQUMvQixpQkFBT0EsR0FBRyxDQUFDQyxXQUFKLEtBQW9CbEIsTUFBTSxDQUFDSyxLQUFQLENBQWFDLEVBQXhDO0FBQ0QsU0FGWSxDQUFiO0FBR0FiLG9CQUFZLENBQUNzQixNQUFELENBQVo7QUFDQXhCLGtCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsT0FQSCxXQVFTLFVBQUM0QixHQUFELEVBQVM7QUFDZEMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDRCxPQVZIO0FBV0FHLHlFQUFrQixDQUFDdEIsTUFBTSxDQUFDSyxLQUFQLENBQWFDLEVBQWQsQ0FBbEIsQ0FDR08sSUFESCxDQUNRLFVBQUNDLEdBQUQsRUFBUztBQUNiO0FBQ0FuQixpQkFBUyxDQUFDbUIsR0FBRCxDQUFUO0FBQ0FqQix3QkFBZ0IsQ0FBQyxLQUFELENBQWhCO0FBQ0QsT0FMSCxXQU1TLFVBQUNzQixHQUFELEVBQVM7QUFDZEMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDRCxPQVJIO0FBU0Q7QUFDRixHQXpCUSxFQXlCTixDQUFDbkIsTUFBTSxDQUFDSyxLQUFQLENBQWFDLEVBQWQsQ0F6Qk0sQ0FBVDs7QUEyQkEsTUFBTWlCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QixRQUFNVCxHQUFHLEdBQUdwQixNQUFNLENBQUM4QixHQUFQLENBQVcsVUFBQ1AsR0FBRCxFQUFNbEMsS0FBTixFQUFnQjtBQUNyQywwQkFDRTtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBRTBDLCtFQUFNLENBQUNDLHVCQUF2QjtBQUFBLG9CQUFpRFQsR0FBRyxDQUFDVTtBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBSyxtQkFBUyxFQUFFRiwrRUFBTSxDQUFDRyx1QkFBdkI7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUVILCtFQUFNLENBQUNJLGVBQXZCO0FBQUEsb0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFBLHdCQUFNWixHQUFHLENBQUNhO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFLRTtBQUFBLG9DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFDRSxzQkFBUSxFQUFFLElBRFo7QUFFRSxtQkFBSyxFQUFFO0FBQ0xDLHFCQUFLLEVBQUUsTUFERjtBQUVMQyxzQkFBTSxFQUFFLE1BRkg7QUFHTEMsd0JBQVEsRUFBRSxNQUhMO0FBSUxDLHNCQUFNLEVBQUUsbUJBSkg7QUFLTEMsNEJBQVksRUFBRTtBQUxULGVBRlQ7QUFTRSxtQkFBSyxFQUFFbEIsR0FBRyxDQUFDbUI7QUFUYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQSxzQkFERjtBQXlCRCxLQTFCVyxDQUFaO0FBMkJBLFdBQU90QixHQUFQO0FBQ0QsR0E3QkQ7O0FBK0JBLE1BQU11QixZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLFFBQUlDLElBQUksR0FBRzlDLFNBQVMsQ0FBQyxDQUFELENBQXBCOztBQUNBLFFBQUk4QyxJQUFKLEVBQVU7QUFDUiwwQkFDRTtBQUFBLGdDQUNFLHFFQUFDLHdEQUFEO0FBQU0sZUFBSyxFQUFFO0FBQUVILHdCQUFZLEVBQUUsS0FBaEI7QUFBdUJJLG1CQUFPLEVBQUU7QUFBaEMsV0FBYjtBQUF1RCxnQkFBTSxNQUE3RDtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBRWQsK0VBQU0sQ0FBQ2UsY0FBdkI7QUFBQSxvQ0FDRTtBQUFBLHdCQUFNRixJQUFJLENBQUNHO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUssbUJBQUssRUFBRTtBQUFFQyx5QkFBUyxFQUFFO0FBQWIsZUFBWjtBQUFBLHFDQUNFO0FBQU0seUJBQVMsRUFBRWpCLCtFQUFNLENBQUNrQixlQUF4QjtBQUFBLDBCQUEwQ0wsSUFBSSxDQUFDTTtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsMENBUUU7QUFBSyxpQkFBSyxFQUFFO0FBQUVYLHNCQUFRLEVBQUUsTUFBWjtBQUFvQlksd0JBQVUsRUFBRTtBQUFoQyxhQUFaO0FBQUEsd0NBQ2dCLEdBRGhCLGVBRUU7QUFBTSx1QkFBUyxFQUFFcEIsK0VBQU0sQ0FBQ3FCLHNCQUF4QjtBQUFBLHdCQUNHUixJQUFJLENBQUNTO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBZ0JHeEIsZUFBZSxFQWhCbEI7QUFBQSxzQkFERjtBQW9CRDtBQUNGLEdBeEJEOztBQTBCQSxNQUFNeUIsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixRQUFJMUQsT0FBTyxJQUFJTSxhQUFmLEVBQThCO0FBQzVCLDBCQUFPLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELEtBRkQsTUFFTztBQUNMLDBCQUNFO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFFNkIsK0VBQU0sQ0FBQ3dCLFNBQXZCO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFFeEIsK0VBQU0sQ0FBQ3lCLE9BQXZCO0FBQUEsb0NBQ0UscUVBQUMsdURBQUQ7QUFDRSxtQkFBSyxFQUFFLFlBRFQ7QUFFRSxtQkFBSyxFQUFFLE9BRlQ7QUFHRSxvQkFBTSxFQUFFLFFBSFY7QUFJRSx3QkFBVSxFQUFFLHNCQUFNO0FBQ2hCQyxrRUFBTSxDQUFDQyxJQUFQLENBQVkscUJBQVo7QUFDRDtBQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFTRTtBQUFLLHVCQUFTLEVBQUUzQiwrRUFBTSxDQUFDNEIsSUFBdkI7QUFBQSx3QkFBOEJoQixZQUFZO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLHVCQURGO0FBaUJEO0FBQ0YsR0F0QkQ7O0FBd0JBLFNBQU9XLE1BQU0sRUFBYjtBQUNEOztHQXhIdUJqRSxLO1VBUVBrQixxRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy93b3JrLXZpc2l0L2hpc3RvcnkvW2lkXS4xMDU3MzQxMmU3M2FiNGQxZGZiNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi8uLi9zdHlsZXMvcGFnZXMvV29ya1Zpc2l0RGV0YWlsLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCB7IFN0b3JlcyB9IGZyb20gXCIuLi8uLi8uLi8uLi9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IE5hdiBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9OYXZcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvQ2FyZFwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9TcGlubmVyXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvQnV0dG9uXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9Nb2RhbFwiO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvRHJvcGRvd25cIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgZ2V0QWxsV29ya1Zpc2l0LFxyXG4gIGdldEtvbnRlbldvcmtWaXNpdCxcclxuICBnZXRXb3JrVmlzaXRNb250aGx5SGlzdG9yeSxcclxuICBnZXRXb3JrVmlzaXRSYXRpbmcsXHJcbiAgc3VibWl0V29ya1Zpc2l0LFxyXG59IGZyb20gXCIuLi8uLi8uLi8uLi9oZWxwZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluZGV4KCkge1xyXG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoLCBhY3Rpb25zIH0gPSB1c2VDb250ZXh0KFN0b3Jlcyk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3dvcmtWaXNpdCwgc2V0V29ya1Zpc2l0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBba29udGVuLCBzZXRLb250ZW5dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nS29udGVuLCBzZXRMb2FkaW5nS29udGVuXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtsb2FkaW5nU3VibWl0LCBzZXRMb2FkaW5nU3VibWl0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocm91dGVyLnF1ZXJ5LmlkKSB7XHJcbiAgICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xyXG5cclxuICAgICAgZ2V0V29ya1Zpc2l0TW9udGhseUhpc3RvcnkodXNlckRhdGEpXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgdmFyIHJlc3VsdCA9IHJlcy5maWx0ZXIoKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsLmlkV29ya1Zpc2l0ID09PSByb3V0ZXIucXVlcnkuaWQ7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHNldFdvcmtWaXNpdChyZXN1bHQpO1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgZ2V0V29ya1Zpc2l0UmF0aW5nKHJvdXRlci5xdWVyeS5pZClcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgc2V0S29udGVuKHJlcyk7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nS29udGVuKGZhbHNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIucXVlcnkuaWRdKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyUGVuaWxhaWFuID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0ga29udGVuLm1hcCgodmFsLCBpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBlbmlsYWlhbl90b3BfY29udGFpbmVyfT57dmFsLm5hbWFLb250ZW59PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBlbmlsYWlhbl9ib3RfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uaWxhaV9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxkaXY+TmlsYWk8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2Pnt2YWwucmF0aW5nfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8ZGl2PkNhdGF0YW48L2Rpdj5cclxuICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiODBweFwiLFxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxMnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgI2U5ZWNmMlwiLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbC5jYXRhdGFufVxyXG4gICAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckRldGFpbCA9ICgpID0+IHtcclxuICAgIHZhciBkYXRhID0gd29ya1Zpc2l0WzBdO1xyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPENhcmQgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBwYWRkaW5nOiBcIjE2cHhcIiB9fSBzaGFkb3c+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0YV9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxkaXY+e2RhdGEubmFtYVNNUn08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJyaWdodFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucmF5b25fY29udGFpbmVyfT57ZGF0YS5rb2RlUmF5b259PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgbWFyZ2luOiBcIjhweCAwIDAgMCBcIixcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIxMnB4XCIsIGZvbnRXZWlnaHQ6IFwiNDAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgUHJvZHVrIEZva3VzOntcIiBcIn1cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWtfZm9rdXNfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIHtkYXRhLnByb2R1a0Zva3VzfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICB7cmVuZGVyUGVuaWxhaWFuKCl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgaWYgKGxvYWRpbmcgfHwgbG9hZGluZ0tvbnRlbikge1xyXG4gICAgICByZXR1cm4gPFNwaW5uZXIgLz47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgPE5hdlxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e1wiV29yayBWaXNpdFwifVxyXG4gICAgICAgICAgICAgICAgY29sb3I9e1wid2hpdGVcIn1cclxuICAgICAgICAgICAgICAgIGFjdGlvbj17XCJTdWJtaXRcIn1cclxuICAgICAgICAgICAgICAgIGJhY2tBY3Rpb249eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvd29yay12aXNpdC9oaXN0b3J5XCIpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+e3JlbmRlckRldGFpbCgpfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiByZW5kZXIoKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9