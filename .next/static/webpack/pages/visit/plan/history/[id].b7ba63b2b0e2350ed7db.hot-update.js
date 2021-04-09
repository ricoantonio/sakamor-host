webpackHotUpdate_N_E("pages/visit/plan/history/[id]",{

/***/ "./components/HistoryDetail.jsx":
/*!**************************************!*\
  !*** ./components/HistoryDetail.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HistoryDetail; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/pages/VisitPlanDetail.module.css */ "./styles/pages/VisitPlanDetail.module.css");
/* harmony import */ var _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Nav */ "./components/Nav.jsx");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Card */ "./components/Card.jsx");
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Spinner */ "./components/Spinner.jsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Button */ "./components/Button.jsx");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helper */ "./helper.js");



var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-new\\components\\HistoryDetail.jsx",
    _s = $RefreshSig$();










function HistoryDetail() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      plan = _useState2[0],
      setPlan = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      productList = _useState3[0],
      setProductList = _useState3[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var now = new Date();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var userData = JSON.parse(localStorage.getItem("user"));

    if (router.query.id) {
      Object(_helper__WEBPACK_IMPORTED_MODULE_9__["getPlanMonthlyHistory"])(userData).then(function (data) {
        setPlan(data.filter(function (val) {
          return val.idVisitPlan === router.query.id;
        }));
        setLoading(false);
      })["catch"](function (err) {
        console.log(err);
      });
      Object(_helper__WEBPACK_IMPORTED_MODULE_9__["getInvoiceData"])(router.query.id).then(function (data) {
        setProductList(data);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }, [router.query.id]);

  var renderDetail = function renderDetail() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [renderDataDetail("Jenis Channel", plan[0].jenisChannel), renderDataDetail("Outlet", plan[0].namaOutlet), renderDataDetail("Alamat", plan[0].alamatOutlet), renderDataDetail("Catatan", plan[0].catatan), renderDataDetail("Visibility"), renderDataDetail("Avability")]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this);
  };

  var renderDataDetail = function renderDataDetail(type, data) {
    // const doneFormVis = state.visitPlanReducer.visibility.filter((val) => {
    //   return val.file !== null && val.type !== null;
    // });
    // const doneFormAva = state.visitPlanReducer.avability;
    console.log(plan);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.render_data,
        children: [type, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            textAlign: "right"
          },
          children: type === "Visibility" ? "6/6" : type === "Avability" ? "".concat(productList.length, "/25") : ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
        style: {
          marginTop: "6px",
          borderRadius: "5px"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.render_value,
          children: type === "Catatan" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              width: "100%",
              border: "none",
              height: "70px"
            },
            children: data
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 15
          }, _this) : type === "Visibility" || type === "Avability" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: type === "Visibility" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.progress_bar
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 23
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.progress_bar_now,
                  style: {
                    width: "100%"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 23
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 21
              }, _this) : type === "Avability" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.progress_bar
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 23
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.progress_bar_now,
                  style: {
                    width: "".concat(productList.length / 25 * 100, "%")
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 23
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 21
              }, _this) : ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: type === "Visibility" ? "/visit/plan/history/".concat(plan.idVisitPlan, "/visibility") : type === "Avability" ? "/visit/plan/history/".concat(plan.idVisitPlan, "/avability") : "",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  text: "View"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 17
            }, _this)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: data
          }, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, _this);
  };

  var render = function render() {
    if (loading) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 14
      }, _this);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.wrapper,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Nav__WEBPACK_IMPORTED_MODULE_5__["default"], {
              title: "History",
              color: "white",
              action: "Submit",
              backAction: function backAction() {
                next_router__WEBPACK_IMPORTED_MODULE_3___default.a.back();
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.main,
              children: renderDetail()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, _this)
      }, void 0, false);
    }
  };

  return render();
}

_s(HistoryDetail, "Q5+6mP+nIuyA2WeFnh1MPeti2MQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = HistoryDetail;

var _c;

$RefreshReg$(_c, "HistoryDetail");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IaXN0b3J5RGV0YWlsLmpzeCJdLCJuYW1lcyI6WyJIaXN0b3J5RGV0YWlsIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInBsYW4iLCJzZXRQbGFuIiwicHJvZHVjdExpc3QiLCJzZXRQcm9kdWN0TGlzdCIsInJvdXRlciIsInVzZVJvdXRlciIsIm5vdyIsIkRhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VyRGF0YSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJxdWVyeSIsImlkIiwiZ2V0UGxhbk1vbnRobHlIaXN0b3J5IiwidGhlbiIsImRhdGEiLCJmaWx0ZXIiLCJ2YWwiLCJpZFZpc2l0UGxhbiIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJnZXRJbnZvaWNlRGF0YSIsInJlbmRlckRldGFpbCIsInJlbmRlckRhdGFEZXRhaWwiLCJqZW5pc0NoYW5uZWwiLCJuYW1hT3V0bGV0IiwiYWxhbWF0T3V0bGV0IiwiY2F0YXRhbiIsInR5cGUiLCJzdHlsZXMiLCJyZW5kZXJfZGF0YSIsInRleHRBbGlnbiIsImxlbmd0aCIsIm1hcmdpblRvcCIsImJvcmRlclJhZGl1cyIsInJlbmRlcl92YWx1ZSIsIndpZHRoIiwiYm9yZGVyIiwiaGVpZ2h0IiwicHJvZ3Jlc3NfYmFyIiwicHJvZ3Jlc3NfYmFyX25vdyIsInJlbmRlciIsImNvbnRhaW5lciIsIndyYXBwZXIiLCJSb3V0ZXIiLCJiYWNrIiwibWFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU0EsYUFBVCxHQUF5QjtBQUFBOztBQUFBOztBQUFBLGtCQUNSQyxzREFBUSxDQUFDLElBQUQsQ0FEQTtBQUFBLE1BQy9CQyxPQUQrQjtBQUFBLE1BQ3RCQyxVQURzQjs7QUFBQSxtQkFFZEYsc0RB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QUNGLEdBdEJEOztBQXdCQSxTQUFPbUIsTUFBTSxFQUFiO0FBQ0Q7O0dBbEp1QmpELGE7VUFJUFMscUQ7OztLQUpPVCxhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Zpc2l0L3BsYW4vaGlzdG9yeS9baWRdLmI3YmE2M2IyYjBlMjM1MGVkN2RiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wYWdlcy9WaXNpdFBsYW5EZXRhaWwubW9kdWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IE5hdiBmcm9tIFwiLi9OYXZcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi9TcGlubmVyXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XHJcblxyXG5pbXBvcnQgeyBnZXRJbnZvaWNlRGF0YSwgZ2V0UGxhbk1vbnRobHlIaXN0b3J5IH0gZnJvbSBcIi4uL2hlbHBlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGlzdG9yeURldGFpbCgpIHtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbcGxhbiwgc2V0UGxhbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Byb2R1Y3RMaXN0LCBzZXRQcm9kdWN0TGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcclxuXHJcbiAgICBpZiAocm91dGVyLnF1ZXJ5LmlkKSB7XHJcbiAgICAgIGdldFBsYW5Nb250aGx5SGlzdG9yeSh1c2VyRGF0YSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgc2V0UGxhbihcclxuICAgICAgICAgICAgZGF0YS5maWx0ZXIoKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiB2YWwuaWRWaXNpdFBsYW4gPT09IHJvdXRlci5xdWVyeS5pZDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgZ2V0SW52b2ljZURhdGEocm91dGVyLnF1ZXJ5LmlkKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBzZXRQcm9kdWN0TGlzdChkYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIucXVlcnkuaWRdKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRGV0YWlsID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7cmVuZGVyRGF0YURldGFpbChcIkplbmlzIENoYW5uZWxcIiwgcGxhblswXS5qZW5pc0NoYW5uZWwpfVxyXG4gICAgICAgIHtyZW5kZXJEYXRhRGV0YWlsKFwiT3V0bGV0XCIsIHBsYW5bMF0ubmFtYU91dGxldCl9XHJcbiAgICAgICAge3JlbmRlckRhdGFEZXRhaWwoXCJBbGFtYXRcIiwgcGxhblswXS5hbGFtYXRPdXRsZXQpfVxyXG4gICAgICAgIHtyZW5kZXJEYXRhRGV0YWlsKFwiQ2F0YXRhblwiLCBwbGFuWzBdLmNhdGF0YW4pfVxyXG4gICAgICAgIHtyZW5kZXJEYXRhRGV0YWlsKFwiVmlzaWJpbGl0eVwiKX1cclxuICAgICAgICB7cmVuZGVyRGF0YURldGFpbChcIkF2YWJpbGl0eVwiKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckRhdGFEZXRhaWwgPSAodHlwZSwgZGF0YSkgPT4ge1xyXG4gICAgLy8gY29uc3QgZG9uZUZvcm1WaXMgPSBzdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLnZpc2liaWxpdHkuZmlsdGVyKCh2YWwpID0+IHtcclxuICAgIC8vICAgcmV0dXJuIHZhbC5maWxlICE9PSBudWxsICYmIHZhbC50eXBlICE9PSBudWxsO1xyXG4gICAgLy8gfSk7XHJcbiAgICAvLyBjb25zdCBkb25lRm9ybUF2YSA9IHN0YXRlLnZpc2l0UGxhblJlZHVjZXIuYXZhYmlsaXR5O1xyXG4gICAgY29uc29sZS5sb2cocGxhbik7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVuZGVyX2RhdGF9PlxyXG4gICAgICAgICAge3R5cGV9XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJyaWdodFwiIH19PlxyXG4gICAgICAgICAgICB7dHlwZSA9PT0gXCJWaXNpYmlsaXR5XCJcclxuICAgICAgICAgICAgICA/IGA2LzZgXHJcbiAgICAgICAgICAgICAgOiB0eXBlID09PSBcIkF2YWJpbGl0eVwiXHJcbiAgICAgICAgICAgICAgPyBgJHtwcm9kdWN0TGlzdC5sZW5ndGh9LzI1YFxyXG4gICAgICAgICAgICAgIDogXCJcIn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpblRvcDogXCI2cHhcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZW5kZXJfdmFsdWV9PlxyXG4gICAgICAgICAgICB7dHlwZSA9PT0gXCJDYXRhdGFuXCIgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGJvcmRlcjogXCJub25lXCIsIGhlaWdodDogXCI3MHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IHR5cGUgPT09IFwiVmlzaWJpbGl0eVwiIHx8IHR5cGUgPT09IFwiQXZhYmlsaXR5XCIgPyAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIHt0eXBlID09PSBcIlZpc2liaWxpdHlcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJ9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJfbm93fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgMTAwJWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkgOiB0eXBlID09PSBcIkF2YWJpbGl0eVwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcn0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcl9ub3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGAkeyhwcm9kdWN0TGlzdC5sZW5ndGggLyAyNSkgKiAxMDB9JWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICBocmVmPXtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlID09PSBcIlZpc2liaWxpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBgL3Zpc2l0L3BsYW4vaGlzdG9yeS8ke3BsYW4uaWRWaXNpdFBsYW59L3Zpc2liaWxpdHlgXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IHR5cGUgPT09IFwiQXZhYmlsaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgID8gYC92aXNpdC9wbGFuL2hpc3RvcnkvJHtwbGFuLmlkVmlzaXRQbGFufS9hdmFiaWxpdHlgXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJWaWV3XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDw+e2RhdGF9PC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAobG9hZGluZykge1xyXG4gICAgICByZXR1cm4gPFNwaW5uZXIgLz47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgPE5hdlxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e1wiSGlzdG9yeVwifVxyXG4gICAgICAgICAgICAgICAgY29sb3I9e1wid2hpdGVcIn1cclxuICAgICAgICAgICAgICAgIGFjdGlvbj17XCJTdWJtaXRcIn1cclxuICAgICAgICAgICAgICAgIGJhY2tBY3Rpb249eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgUm91dGVyLmJhY2soKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PntyZW5kZXJEZXRhaWwoKX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gcmVuZGVyKCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==