webpackHotUpdate_N_E("pages/visit/spreading/submit",{

/***/ "./pages/visit/spreading/submit/index.jsx":
/*!************************************************!*\
  !*** ./pages/visit/spreading/submit/index.jsx ***!
  \************************************************/
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
/* harmony import */ var _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../styles/pages/VisitPlanDetail.module.css */ "./styles/pages/VisitPlanDetail.module.css");
/* harmony import */ var _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../store */ "./store/index.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/Nav */ "./components/Nav.jsx");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/Modal */ "./components/Modal.jsx");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/Card */ "./components/Card.jsx");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/Spinner */ "./components/Spinner.jsx");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/Button */ "./components/Button.jsx");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../helper */ "./helper.js");



var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-new\\pages\\visit\\spreading\\submit\\index.jsx",
    _s = $RefreshSig$();












function index() {
  _s();

  var _this = this;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store__WEBPACK_IMPORTED_MODULE_5__["Stores"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch,
      actions = _useContext.actions;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      loadingSubmit = _useState2[0],
      setLoadingSubmit = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      plan = _useState3[0],
      setPlan = _useState3[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var now = new Date();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (state.visitSpreadingReducer.jenisChannel.namaJenisChannel && state.visitSpreadingReducer.outlet.namaOutlet) {
      if (!state.visitSpreadingReducer.checkIn) {
        actions.setSpreadingCheckIn(now);
      }
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/visit/spreading");
    }
  }, []);

  var renderDetail = function renderDetail() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [renderDataDetail("Jenis Channel", state.visitSpreadingReducer.jenisChannel.namaJenisChannel), renderDataDetail("Outlet", state.visitSpreadingReducer.outlet.namaOutlet), renderDataDetail("Alamat", state.visitSpreadingReducer.outlet.alamatOutlet), renderDataDetail("Catatan", state.visitSpreadingReducer.catatan), renderDataDetail("Visibility"), renderDataDetail("Avability")]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this);
  };

  var renderDataDetail = function renderDataDetail(type, data) {
    var doneFormVis = state.visitSpreadingReducer.visibility.filter(function (val) {
      return val.file !== null && val.type !== null;
    });
    var doneFormAva = state.visitSpreadingReducer.avability;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.render_data,
        children: [type, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            textAlign: "right"
          },
          children: type === "Visibility" ? "".concat(doneFormVis.length, "/6") : type === "Avability" ? "".concat(doneFormAva.length, "/25") : ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_8__["default"], {
        style: {
          marginTop: "6px",
          borderRadius: "5px"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.render_value,
          children: type === "Catatan" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
            style: {
              width: "100%",
              border: "none",
              height: "70px"
            },
            onChange: function onChange(e) {
              actions.setSpreadingCatatan(e.target.value);
            },
            value: state.visitSpreadingReducer.catatan
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 15
          }, _this) : type === "Visibility" || type === "Avability" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: type === "Visibility" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.progress_bar
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 23
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.progress_bar_now,
                  style: {
                    width: "".concat(doneFormVis.length / 6 * 100, "%")
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 23
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 21
              }, _this) : type === "Avability" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.progress_bar
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 23
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.progress_bar_now,
                  style: {
                    width: "".concat(doneFormAva.length / 25 * 100, "%")
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 23
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 21
              }, _this) : ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: type === "Visibility" ? "/visit/spreading/submit/visibility" : type === "Avability" ? "/visit/spreading/submit/avability" : "",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  text: "Add"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 17
            }, _this)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: data
          }, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this);
  };

  var onSubmit = function onSubmit() {
    var visDone = state.visitSpreadingReducer.visibility.filter(function (val) {
      return val.file !== null && val.type !== null;
    });

    if (visDone.length === 6) {
      setLoadingSubmit(true);
      var userData = JSON.parse(localStorage.getItem("user"));
      var bodyPlan = {
        usernameSMR: userData.username,
        nomorDokumen: "",
        catatan: state.visitSpreadingReducer.catatan,
        idJenisChannel: parseInt(state.visitSpreadingReducer.jenisChannel.jenisChannelID),
        jenisChannel: state.visitSpreadingReducer.jenisChannel.namaJenisChannel,
        idOutlet: state.visitSpreadingReducer.outlet.outletID,
        namaOutlet: state.visitSpreadingReducer.outlet.namaOutlet,
        alamatOutlet: state.visitSpreadingReducer.outlet.alamatOutlet,
        tanggal: now.toISOString(),
        target: 0,
        sales: 0,
        isCheckIn: true,
        checkInDate: state.visitSpreadingReducer.checkIn.toISOString(),
        isCheckOut: true,
        checkOutDate: now.toISOString(),
        createdBy: userData.username,
        updatedBy: userData.username
      };
      var files = state.visitSpreadingReducer.visibility.map(function (val, index) {
        return val.file;
      });
      var bodyProduct = state.visitSpreadingReducer.avability.map(function (val, index) {
        return {
          nomorDokumen: "",
          nomor: index,
          kodeProduk: val.productFocus.produkID,
          namaProduk: val.productFocus.namaProduk,
          stok: parseInt(val.stock),
          saranOrder: parseInt(val.saranOrder),
          jumlahOrder: parseInt(val.order),
          harga: 0,
          totalHarga: 0,
          keterangan: val.ket,
          createdBy: userData.username,
          updatedBy: userData.username
        };
      });
      var data = {
        avp: bodyPlan,
        dProductList: bodyProduct
      };
      console.log(data, state.visitSpreadingReducer.avability);
      submitVisitSpreading(data).then(function (res) {
        console.log("ini res", res);
        var bodyPosm = state.visitSpreadingReducer.visibility.map(function (val, index) {
          return {
            activityVisitSpreadingId: res.avp.id,
            nomor: index,
            tipe: val.type.program,
            namaFile: val.file.name,
            createdBy: userData.username,
            updatedBy: userData.username
          };
        });

        for (var i = 0; i < files.length; i++) {
          submitVisitSpreadingDposm(bodyPosm[i], files[i]);
        }

        setLoadingSubmit(false);
        actions.setDefaultVisitSpreading();
        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/");
      })["catch"](function (err) {
        console.log(err);
      });
    }
  };

  var render = function render() {
    if (loading) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 14
      }, _this);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
        children: [loadingSubmit ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Modal__WEBPACK_IMPORTED_MODULE_7__["default"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 13
        }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.wrapper,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Nav__WEBPACK_IMPORTED_MODULE_6__["default"], {
            title: "Spreading",
            color: "white",
            action: "Submit",
            onClick: function onClick() {
              onSubmit();
            },
            backAction: function backAction() {
              if (confirm("Data will be lost if you leave the page, are you sure?")) {
                actions.setDefaultVisitPlan();
                next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/visit/spreading");
              }
            },
            disable: false
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.main,
            children: renderDetail()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 256,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 9
      }, _this);
    }
  };

  return render();
}

_s(index, "Jh7W9zbtGuS2tefj8as5fY4BHHk=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlzaXQvc3ByZWFkaW5nL3N1Ym1pdC9pbmRleC5qc3giXSwibmFtZXMiOlsiaW5kZXgiLCJ1c2VDb250ZXh0IiwiU3RvcmVzIiwic3RhdGUiLCJkaXNwYXRjaCIsImFjdGlvbnMiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibG9hZGluZ1N1Ym1pdCIsInNldExvYWRpbmdTdWJtaXQiLCJwbGFuIiwic2V0UGxhbiIsInJvdXRlciIsInVzZVJvdXRlciIsIm5vdyIsIkRhdGUiLCJ1c2VFZmZlY3QiLCJ2aXNpdFNwcmVhZGluZ1JlZHVjZXIiLCJqZW5pc0NoYW5uZWwiLCJuYW1hSmVuaXNDaGFubmVsIiwib3V0bGV0IiwibmFtYU91dGxldCIsImNoZWNrSW4iLCJzZXRTcHJlYWRpbmdDaGVja0luIiwiUm91dGVyIiwicHVzaCIsInJlbmRlckRldGFpbCIsInJlbmRlckRhdGFEZXRhaWwiLCJhbGFtYXRPdXRsZXQiLCJjYXRhdGFuIiwidHlwZSIsImRhdGEiLCJkb25lRm9ybVZpcyIsInZpc2liaWxpdHkiLCJmaWx0ZXIiLCJ2YWwiLCJmaWxlIiwiZG9uZUZvcm1BdmEiLCJhdmFiaWxpdHkiLCJzdHlsZXMiLCJyZW5kZXJfZGF0YSIsInRleHRBbGlnbiIsImxlbmd0aCIsIm1hcmdpblRvcCIsImJvcmRlclJhZGl1cyIsInJlbmRlcl92YWx1ZSIsIndpZHRoIiwiYm9yZGVyIiwiaGVpZ2h0IiwiZSIsInNldFNwcmVhZGluZ0NhdGF0YW4iLCJ0YXJnZXQiLCJ2YWx1ZSIsInByb2dyZXNzX2JhciIsInByb2dyZXNzX2Jhcl9ub3ciLCJvblN1Ym1pdCIsInZpc0RvbmUiLCJ1c2VyRGF0YSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJib2R5UGxhbiIsInVzZXJuYW1lU01SIiwidXNlcm5hbWUiLCJub21vckRva3VtZW4iLCJpZEplbmlzQ2hhbm5lbCIsInBhcnNlSW50IiwiamVuaXNDaGFubmVsSUQiLCJpZE91dGxldCIsIm91dGxldElEIiwidGFuZ2dhbCIsInRvSVNPU3RyaW5nIiwic2FsZXMiLCJpc0NoZWNrSW4iLCJjaGVja0luRGF0ZSIsImlzQ2hlY2tPdXQiLCJjaGVja091dERhdGUiLCJjcmVhdGVkQnkiLCJ1cGRhdGVkQnkiLCJmaWxlcyIsIm1hcCIsImJvZHlQcm9kdWN0Iiwibm9tb3IiLCJrb2RlUHJvZHVrIiwicHJvZHVjdEZvY3VzIiwicHJvZHVrSUQiLCJuYW1hUHJvZHVrIiwic3RvayIsInN0b2NrIiwic2FyYW5PcmRlciIsImp1bWxhaE9yZGVyIiwib3JkZXIiLCJoYXJnYSIsInRvdGFsSGFyZ2EiLCJrZXRlcmFuZ2FuIiwia2V0IiwiYXZwIiwiZFByb2R1Y3RMaXN0IiwiY29uc29sZSIsImxvZyIsInN1Ym1pdFZpc2l0U3ByZWFkaW5nIiwidGhlbiIsInJlcyIsImJvZHlQb3NtIiwiYWN0aXZpdHlWaXNpdFNwcmVhZGluZ0lkIiwiaWQiLCJ0aXBlIiwicHJvZ3JhbSIsIm5hbWFGaWxlIiwibmFtZSIsImkiLCJzdWJtaXRWaXNpdFNwcmVhZGluZ0Rwb3NtIiwic2V0RGVmYXVsdFZpc2l0U3ByZWFkaW5nIiwiZXJyIiwicmVuZGVyIiwiY29udGFpbmVyIiwid3JhcHBlciIsImNvbmZpcm0iLCJzZXREZWZhdWx0VmlzaXRQbGFuIiwibWFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBOztBQUFBLG9CQUNPQyx3REFBVSxDQUFDQyw2Q0FBRCxDQURqQjtBQUFBLE1BQ3RCQyxLQURzQixlQUN0QkEsS0FEc0I7QUFBQSxNQUNmQyxRQURlLGVBQ2ZBLFFBRGU7QUFBQSxNQUNMQyxPQURLLGVBQ0xBLE9BREs7O0FBQUEsa0JBRUFDLHNEQUFRLENBQUMsS0FBRCxD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QUFEO0FBQ0UsaUJBQUssRUFBRSxXQURUO0FBRUUsaUJBQUssRUFBRSxPQUZUO0FBR0Usa0JBQU0sRUFBRSxRQUhWO0FBSUUsbUJBQU8sRUFBRSxtQkFBTTtBQUNiOUQsc0JBQVE7QUFDVCxhQU5IO0FBT0Usc0JBQVUsRUFBRSxzQkFBTTtBQUNoQixrQkFDRStELE9BQU8sQ0FDTCx3REFESyxDQURULEVBSUU7QUFDQWxILHVCQUFPLENBQUNtSCxtQkFBUjtBQUNBL0Ysa0VBQU0sQ0FBQ0MsSUFBUCxDQUFZLGtCQUFaO0FBQ0Q7QUFDRixhQWhCSDtBQWlCRSxtQkFBTyxFQUFFO0FBakJYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFvQkU7QUFBSyxxQkFBUyxFQUFFYywrRUFBTSxDQUFDaUYsSUFBdkI7QUFBQSxzQkFBOEI5RixZQUFZO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQStCRDtBQUNGLEdBcENEOztBQXNDQSxTQUFPeUYsTUFBTSxFQUFiO0FBQ0Q7O0dBeFB1QnBILEs7VUFLUGMscUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmlzaXQvc3ByZWFkaW5nL3N1Ym1pdC42ZTBhNDNkY2U4MTVlNjM2Mjc4Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi8uLi9zdHlsZXMvcGFnZXMvVmlzaXRQbGFuRGV0YWlsLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCB7IFN0b3JlcyB9IGZyb20gXCIuLi8uLi8uLi8uLi9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IE5hdiBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9OYXZcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL01vZGFsXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL0NhcmRcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvU3Bpbm5lclwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL0J1dHRvblwiO1xyXG5cclxuaW1wb3J0IHsgc3VibWl0VmlzaXRVbnBsYW5EcG9zbSwgc3VibWl0VmlzaXRVbnBsYW4gfSBmcm9tIFwiLi4vLi4vLi4vLi4vaGVscGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCgpIHtcclxuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCwgYWN0aW9ucyB9ID0gdXNlQ29udGV4dChTdG9yZXMpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZ1N1Ym1pdCwgc2V0TG9hZGluZ1N1Ym1pdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3BsYW4sIHNldFBsYW5dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBzdGF0ZS52aXNpdFNwcmVhZGluZ1JlZHVjZXIuamVuaXNDaGFubmVsLm5hbWFKZW5pc0NoYW5uZWwgJiZcclxuICAgICAgc3RhdGUudmlzaXRTcHJlYWRpbmdSZWR1Y2VyLm91dGxldC5uYW1hT3V0bGV0XHJcbiAgICApIHtcclxuICAgICAgaWYgKCFzdGF0ZS52aXNpdFNwcmVhZGluZ1JlZHVjZXIuY2hlY2tJbikge1xyXG4gICAgICAgIGFjdGlvbnMuc2V0U3ByZWFkaW5nQ2hlY2tJbihub3cpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBSb3V0ZXIucHVzaChcIi92aXNpdC9zcHJlYWRpbmdcIik7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCByZW5kZXJEZXRhaWwgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtyZW5kZXJEYXRhRGV0YWlsKFxyXG4gICAgICAgICAgXCJKZW5pcyBDaGFubmVsXCIsXHJcbiAgICAgICAgICBzdGF0ZS52aXNpdFNwcmVhZGluZ1JlZHVjZXIuamVuaXNDaGFubmVsLm5hbWFKZW5pc0NoYW5uZWxcclxuICAgICAgICApfVxyXG4gICAgICAgIHtyZW5kZXJEYXRhRGV0YWlsKFxyXG4gICAgICAgICAgXCJPdXRsZXRcIixcclxuICAgICAgICAgIHN0YXRlLnZpc2l0U3ByZWFkaW5nUmVkdWNlci5vdXRsZXQubmFtYU91dGxldFxyXG4gICAgICAgICl9XHJcbiAgICAgICAge3JlbmRlckRhdGFEZXRhaWwoXHJcbiAgICAgICAgICBcIkFsYW1hdFwiLFxyXG4gICAgICAgICAgc3RhdGUudmlzaXRTcHJlYWRpbmdSZWR1Y2VyLm91dGxldC5hbGFtYXRPdXRsZXRcclxuICAgICAgICApfVxyXG4gICAgICAgIHtyZW5kZXJEYXRhRGV0YWlsKFwiQ2F0YXRhblwiLCBzdGF0ZS52aXNpdFNwcmVhZGluZ1JlZHVjZXIuY2F0YXRhbil9XHJcbiAgICAgICAge3JlbmRlckRhdGFEZXRhaWwoXCJWaXNpYmlsaXR5XCIpfVxyXG4gICAgICAgIHtyZW5kZXJEYXRhRGV0YWlsKFwiQXZhYmlsaXR5XCIpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRGF0YURldGFpbCA9ICh0eXBlLCBkYXRhKSA9PiB7XHJcbiAgICBjb25zdCBkb25lRm9ybVZpcyA9IHN0YXRlLnZpc2l0U3ByZWFkaW5nUmVkdWNlci52aXNpYmlsaXR5LmZpbHRlcigodmFsKSA9PiB7XHJcbiAgICAgIHJldHVybiB2YWwuZmlsZSAhPT0gbnVsbCAmJiB2YWwudHlwZSAhPT0gbnVsbDtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZG9uZUZvcm1BdmEgPSBzdGF0ZS52aXNpdFNwcmVhZGluZ1JlZHVjZXIuYXZhYmlsaXR5O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlbmRlcl9kYXRhfT5cclxuICAgICAgICAgIHt0eXBlfVxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwicmlnaHRcIiB9fT5cclxuICAgICAgICAgICAge3R5cGUgPT09IFwiVmlzaWJpbGl0eVwiXHJcbiAgICAgICAgICAgICAgPyBgJHtkb25lRm9ybVZpcy5sZW5ndGh9LzZgXHJcbiAgICAgICAgICAgICAgOiB0eXBlID09PSBcIkF2YWJpbGl0eVwiXHJcbiAgICAgICAgICAgICAgPyBgJHtkb25lRm9ybUF2YS5sZW5ndGh9LzI1YFxyXG4gICAgICAgICAgICAgIDogXCJcIn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpblRvcDogXCI2cHhcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZW5kZXJfdmFsdWV9PlxyXG4gICAgICAgICAgICB7dHlwZSA9PT0gXCJDYXRhdGFuXCIgPyAoXHJcbiAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGJvcmRlcjogXCJub25lXCIsIGhlaWdodDogXCI3MHB4XCIgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBhY3Rpb25zLnNldFNwcmVhZGluZ0NhdGF0YW4oZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS52aXNpdFNwcmVhZGluZ1JlZHVjZXIuY2F0YXRhbn1cclxuICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgKSA6IHR5cGUgPT09IFwiVmlzaWJpbGl0eVwiIHx8IHR5cGUgPT09IFwiQXZhYmlsaXR5XCIgPyAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIHt0eXBlID09PSBcIlZpc2liaWxpdHlcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJ9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJfbm93fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHsoZG9uZUZvcm1WaXMubGVuZ3RoIC8gNikgKiAxMDB9JWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkgOiB0eXBlID09PSBcIkF2YWJpbGl0eVwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcn0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcl9ub3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGAkeyhkb25lRm9ybUF2YS5sZW5ndGggLyAyNSkgKiAxMDB9JWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICBocmVmPXtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlID09PSBcIlZpc2liaWxpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBgL3Zpc2l0L3NwcmVhZGluZy9zdWJtaXQvdmlzaWJpbGl0eWBcclxuICAgICAgICAgICAgICAgICAgICAgIDogdHlwZSA9PT0gXCJBdmFiaWxpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBgL3Zpc2l0L3NwcmVhZGluZy9zdWJtaXQvYXZhYmlsaXR5YFxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQWRkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDw+e2RhdGF9PC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHZpc0RvbmUgPSBzdGF0ZS52aXNpdFNwcmVhZGluZ1JlZHVjZXIudmlzaWJpbGl0eS5maWx0ZXIoKHZhbCkgPT4ge1xyXG4gICAgICByZXR1cm4gdmFsLmZpbGUgIT09IG51bGwgJiYgdmFsLnR5cGUgIT09IG51bGw7XHJcbiAgICB9KTtcclxuICAgIGlmICh2aXNEb25lLmxlbmd0aCA9PT0gNikge1xyXG4gICAgICBzZXRMb2FkaW5nU3VibWl0KHRydWUpO1xyXG5cclxuICAgICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XHJcblxyXG4gICAgICBjb25zdCBib2R5UGxhbiA9IHtcclxuICAgICAgICB1c2VybmFtZVNNUjogdXNlckRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgbm9tb3JEb2t1bWVuOiBcIlwiLFxyXG4gICAgICAgIGNhdGF0YW46IHN0YXRlLnZpc2l0U3ByZWFkaW5nUmVkdWNlci5jYXRhdGFuLFxyXG4gICAgICAgIGlkSmVuaXNDaGFubmVsOiBwYXJzZUludChcclxuICAgICAgICAgIHN0YXRlLnZpc2l0U3ByZWFkaW5nUmVkdWNlci5qZW5pc0NoYW5uZWwuamVuaXNDaGFubmVsSURcclxuICAgICAgICApLFxyXG4gICAgICAgIGplbmlzQ2hhbm5lbDogc3RhdGUudmlzaXRTcHJlYWRpbmdSZWR1Y2VyLmplbmlzQ2hhbm5lbC5uYW1hSmVuaXNDaGFubmVsLFxyXG4gICAgICAgIGlkT3V0bGV0OiBzdGF0ZS52aXNpdFNwcmVhZGluZ1JlZHVjZXIub3V0bGV0Lm91dGxldElELFxyXG4gICAgICAgIG5hbWFPdXRsZXQ6IHN0YXRlLnZpc2l0U3ByZWFkaW5nUmVkdWNlci5vdXRsZXQubmFtYU91dGxldCxcclxuICAgICAgICBhbGFtYXRPdXRsZXQ6IHN0YXRlLnZpc2l0U3ByZWFkaW5nUmVkdWNlci5vdXRsZXQuYWxhbWF0T3V0bGV0LFxyXG4gICAgICAgIHRhbmdnYWw6IG5vdy50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIHRhcmdldDogMCxcclxuICAgICAgICBzYWxlczogMCxcclxuICAgICAgICBpc0NoZWNrSW46IHRydWUsXHJcbiAgICAgICAgY2hlY2tJbkRhdGU6IHN0YXRlLnZpc2l0U3ByZWFkaW5nUmVkdWNlci5jaGVja0luLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgaXNDaGVja091dDogdHJ1ZSxcclxuICAgICAgICBjaGVja091dERhdGU6IG5vdy50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIGNyZWF0ZWRCeTogdXNlckRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgdXBkYXRlZEJ5OiB1c2VyRGF0YS51c2VybmFtZSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGZpbGVzID0gc3RhdGUudmlzaXRTcHJlYWRpbmdSZWR1Y2VyLnZpc2liaWxpdHkubWFwKCh2YWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHZhbC5maWxlO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGJvZHlQcm9kdWN0ID0gc3RhdGUudmlzaXRTcHJlYWRpbmdSZWR1Y2VyLmF2YWJpbGl0eS5tYXAoXHJcbiAgICAgICAgKHZhbCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5vbW9yRG9rdW1lbjogXCJcIixcclxuICAgICAgICAgICAgbm9tb3I6IGluZGV4LFxyXG4gICAgICAgICAgICBrb2RlUHJvZHVrOiB2YWwucHJvZHVjdEZvY3VzLnByb2R1a0lELFxyXG4gICAgICAgICAgICBuYW1hUHJvZHVrOiB2YWwucHJvZHVjdEZvY3VzLm5hbWFQcm9kdWssXHJcbiAgICAgICAgICAgIHN0b2s6IHBhcnNlSW50KHZhbC5zdG9jayksXHJcbiAgICAgICAgICAgIHNhcmFuT3JkZXI6IHBhcnNlSW50KHZhbC5zYXJhbk9yZGVyKSxcclxuICAgICAgICAgICAganVtbGFoT3JkZXI6IHBhcnNlSW50KHZhbC5vcmRlciksXHJcbiAgICAgICAgICAgIGhhcmdhOiAwLFxyXG4gICAgICAgICAgICB0b3RhbEhhcmdhOiAwLFxyXG4gICAgICAgICAgICBrZXRlcmFuZ2FuOiB2YWwua2V0LFxyXG4gICAgICAgICAgICBjcmVhdGVkQnk6IHVzZXJEYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICB1cGRhdGVkQnk6IHVzZXJEYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcblxyXG4gICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICBhdnA6IGJvZHlQbGFuLFxyXG4gICAgICAgIGRQcm9kdWN0TGlzdDogYm9keVByb2R1Y3QsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLCBzdGF0ZS52aXNpdFNwcmVhZGluZ1JlZHVjZXIuYXZhYmlsaXR5KTtcclxuXHJcbiAgICAgIHN1Ym1pdFZpc2l0U3ByZWFkaW5nKGRhdGEpXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJpbmkgcmVzXCIsIHJlcyk7XHJcbiAgICAgICAgICBjb25zdCBib2R5UG9zbSA9IHN0YXRlLnZpc2l0U3ByZWFkaW5nUmVkdWNlci52aXNpYmlsaXR5Lm1hcChcclxuICAgICAgICAgICAgKHZhbCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgYWN0aXZpdHlWaXNpdFNwcmVhZGluZ0lkOiByZXMuYXZwLmlkLFxyXG4gICAgICAgICAgICAgICAgbm9tb3I6IGluZGV4LFxyXG4gICAgICAgICAgICAgICAgdGlwZTogdmFsLnR5cGUucHJvZ3JhbSxcclxuICAgICAgICAgICAgICAgIG5hbWFGaWxlOiB2YWwuZmlsZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEJ5OiB1c2VyRGF0YS51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZWRCeTogdXNlckRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc3VibWl0VmlzaXRTcHJlYWRpbmdEcG9zbShib2R5UG9zbVtpXSwgZmlsZXNbaV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0TG9hZGluZ1N1Ym1pdChmYWxzZSk7XHJcbiAgICAgICAgICBhY3Rpb25zLnNldERlZmF1bHRWaXNpdFNwcmVhZGluZygpO1xyXG4gICAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICB7bG9hZGluZ1N1Ym1pdCA/IChcclxuICAgICAgICAgICAgPE1vZGFsPlxyXG4gICAgICAgICAgICAgIDxTcGlubmVyIC8+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxOYXZcclxuICAgICAgICAgICAgICB0aXRsZT17XCJTcHJlYWRpbmdcIn1cclxuICAgICAgICAgICAgICBjb2xvcj17XCJ3aGl0ZVwifVxyXG4gICAgICAgICAgICAgIGFjdGlvbj17XCJTdWJtaXRcIn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdCgpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgYmFja0FjdGlvbj17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICBjb25maXJtKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRGF0YSB3aWxsIGJlIGxvc3QgaWYgeW91IGxlYXZlIHRoZSBwYWdlLCBhcmUgeW91IHN1cmU/XCJcclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbnMuc2V0RGVmYXVsdFZpc2l0UGxhbigpO1xyXG4gICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi92aXNpdC9zcHJlYWRpbmdcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBkaXNhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT57cmVuZGVyRGV0YWlsKCl9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gcmVuZGVyKCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==