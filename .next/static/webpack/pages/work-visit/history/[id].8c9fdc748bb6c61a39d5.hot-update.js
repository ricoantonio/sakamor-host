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
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              fontSize: "12px",
              fontWeight: "400",
              margin: "8px 0 0 0 "
            },
            children: ["Produk Fokus:", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _styles_pages_WorkVisitDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.produk_fokus_container,
              children: data.produkFokus
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 104,
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
        lineNumber: 125,
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
              lineNumber: 131,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_WorkVisitDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.main,
              children: renderDetail()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd29yay12aXNpdC9oaXN0b3J5Ly9pbmRleC5qc3giXSwibmFtZXMiOlsiaW5kZXgiLCJ1c2VDb250ZXh0IiwiU3RvcmVzIiwic3RhdGUiLCJkaXNwYXRjaCIsImFjdGlvbnMiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwid29ya1Zpc2l0Iiwic2V0V29ya1Zpc2l0Iiwia29udGVuIiwic2V0S29udGVuIiwibG9hZGluZ0tvbnRlbiIsInNldExvYWRpbmdLb250ZW4iLCJsb2FkaW5nU3VibWl0Iiwic2V0TG9hZGluZ1N1Ym1pdCIsInJvdXRlciIsInVzZVJvdXRlciIsIm5vdyIsIkRhdGUiLCJ1c2VFZmZlY3QiLCJxdWVyeSIsImlkIiwidXNlckRhdGEiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZ2V0V29ya1Zpc2l0TW9udGhseUhpc3RvcnkiLCJ0aGVuIiwicmVzIiwicmVzdWx0IiwiZmlsdGVyIiwidmFsIiwiaWRXb3JrVmlzaXQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZ2V0V29ya1Zpc2l0UmF0aW5nIiwicmVuZGVyUGVuaWxhaWFuIiwibWFwIiwic3R5bGVzIiwicGVuaWxhaWFuX3RvcF9jb250YWluZXIiLCJuYW1hS29udGVuIiwicGVuaWxhaWFuX2JvdF9jb250YWluZXIiLCJuaWxhaV9jb250YWluZXIiLCJyYXRpbmciLCJ3aWR0aCIsImhlaWdodCIsImZvbnRTaXplIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiY2F0YXRhbiIsInJlbmRlckRldGFpbCIsImRhdGEiLCJwYWRkaW5nIiwiZGF0YV9jb250YWluZXIiLCJuYW1hU01SIiwidGV4dEFsaWduIiwicmF5b25fY29udGFpbmVyIiwia29kZVJheW9uIiwiZm9udFdlaWdodCIsIm1hcmdpbiIsInByb2R1a19mb2t1c19jb250YWluZXIiLCJwcm9kdWtGb2t1cyIsInJlbmRlciIsImNvbnRhaW5l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SDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBU0U7QUFBSyx1QkFBUyxFQUFFNUIsK0VBQU0sQ0FBQzZCLElBQXZCO0FBQUEsd0JBQThCakIsWUFBWTtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERix1QkFERjtBQWlCRDtBQUNGLEdBdEJEOztBQXdCQSxTQUFPWSxNQUFNLEVBQWI7QUFDRDs7R0E3SHVCbEUsSztVQVFQa0IscUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvd29yay12aXNpdC9oaXN0b3J5L1tpZF0uOGM5ZmRjNzQ4YmI2YzYxYTM5ZDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vLi4vc3R5bGVzL3BhZ2VzL1dvcmtWaXNpdERldGFpbC5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgeyBTdG9yZXMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RvcmVcIjtcclxuXHJcbmltcG9ydCBOYXYgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvTmF2XCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL0NhcmRcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvU3Bpbm5lclwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL0J1dHRvblwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvTW9kYWxcIjtcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL0Ryb3Bkb3duXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldEFsbFdvcmtWaXNpdCxcclxuICBnZXRLb250ZW5Xb3JrVmlzaXQsXHJcbiAgZ2V0V29ya1Zpc2l0TW9udGhseUhpc3RvcnksXHJcbiAgZ2V0V29ya1Zpc2l0UmF0aW5nLFxyXG4gIHN1Ym1pdFdvcmtWaXNpdCxcclxufSBmcm9tIFwiLi4vLi4vLi4vLi4vaGVscGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCgpIHtcclxuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCwgYWN0aW9ucyB9ID0gdXNlQ29udGV4dChTdG9yZXMpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFt3b3JrVmlzaXQsIHNldFdvcmtWaXNpdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2tvbnRlbiwgc2V0S29udGVuXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbG9hZGluZ0tvbnRlbiwgc2V0TG9hZGluZ0tvbnRlbl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbbG9hZGluZ1N1Ym1pdCwgc2V0TG9hZGluZ1N1Ym1pdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJvdXRlci5xdWVyeS5pZCkge1xyXG4gICAgICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcclxuXHJcbiAgICAgIGdldFdvcmtWaXNpdE1vbnRobHlIaXN0b3J5KHVzZXJEYXRhKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIHZhciByZXN1bHQgPSByZXMuZmlsdGVyKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbC5pZFdvcmtWaXNpdCA9PT0gcm91dGVyLnF1ZXJ5LmlkO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBzZXRXb3JrVmlzaXQocmVzdWx0KTtcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIGdldFdvcmtWaXNpdFJhdGluZyhyb3V0ZXIucXVlcnkuaWQpXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgIHNldEtvbnRlbihyZXMpO1xyXG4gICAgICAgICAgc2V0TG9hZGluZ0tvbnRlbihmYWxzZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbcm91dGVyLnF1ZXJ5LmlkXSk7XHJcblxyXG4gIGNvbnN0IHJlbmRlclBlbmlsYWlhbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGtvbnRlbi5tYXAoKHZhbCwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wZW5pbGFpYW5fdG9wX2NvbnRhaW5lcn0+e3ZhbC5uYW1hS29udGVufTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wZW5pbGFpYW5fYm90X2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmlsYWlfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8ZGl2Pk5pbGFpPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj57dmFsLnJhdGluZ308L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5DYXRhdGFuPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjgwcHhcIixcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTJweFwiLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNlOWVjZjJcIixcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWwuY2F0YXRhbn1cclxuICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlcztcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJEZXRhaWwgPSAoKSA9PiB7XHJcbiAgICB2YXIgZGF0YSA9IHdvcmtWaXNpdFswXTtcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI1cHhcIiwgcGFkZGluZzogXCIxNnB4XCIgfX0gc2hhZG93PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGFfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8ZGl2PntkYXRhLm5hbWFTTVJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwicmlnaHRcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnJheW9uX2NvbnRhaW5lcn0+e2RhdGEua29kZVJheW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTJweFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI0MDBcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCI4cHggMCAwIDAgXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFByb2R1ayBGb2t1czp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVrX2Zva3VzX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5wcm9kdWtGb2t1c31cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAge3JlbmRlclBlbmlsYWlhbigpfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcclxuICAgIGlmIChsb2FkaW5nIHx8IGxvYWRpbmdLb250ZW4pIHtcclxuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgIDxOYXZcclxuICAgICAgICAgICAgICAgIHRpdGxlPXtcIldvcmsgVmlzaXRcIn1cclxuICAgICAgICAgICAgICAgIGNvbG9yPXtcIndoaXRlXCJ9XHJcbiAgICAgICAgICAgICAgICBhY3Rpb249e1wiU3VibWl0XCJ9XHJcbiAgICAgICAgICAgICAgICBiYWNrQWN0aW9uPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL3dvcmstdmlzaXQvaGlzdG9yeVwiKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PntyZW5kZXJEZXRhaWwoKX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gcmVuZGVyKCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==