webpackHotUpdate_N_E("pages/visit/plan/[id]",{

/***/ "./pages/visit/plan/[id]/index.jsx":
/*!*****************************************!*\
  !*** ./pages/visit/plan/[id]/index.jsx ***!
  \*****************************************/
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
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/Card */ "./components/Card.jsx");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/Spinner */ "./components/Spinner.jsx");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/Button */ "./components/Button.jsx");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../constant */ "./constant.js");



var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-new\\pages\\visit\\plan\\[id]\\index.jsx",
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
      plan = _useState2[0],
      setPlan = _useState2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var now = new Date(); // useEffect(() => {
  //   if (router.query.id) {
  //     fetch(
  //       `http://10.100.4.116:8230/api/MasterVisitPlan/GetMasterVisitPlanById/${router.query.id}`
  //     )
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         setPlan(data);
  //         if (!state.visitPlanReducer.checkIn) {
  //           actions.setCheckIn(now);
  //         }
  //         setLoading(false);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }, [router.query.id]);

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (router.query.id) {
      fetch(_constant__WEBPACK_IMPORTED_MODULE_10__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_10__["API_MASTER_DATA"] + "/GetMasterVisitPlanById/".concat(router.query.id)).then(function (response) {
        return response.json();
      }).then(function (data) {
        setPlan(data);

        if (!state.visitPlanReducer.checkIn) {
          actions.setCheckIn(now);
        }

        setLoading(false);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }, [router.query.id]);

  var renderDetail = function renderDetail() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [renderDataDetail("Jenis Channel", plan.jenisChannel), renderDataDetail("Outlet", plan.namaOutlet), renderDataDetail("Alamat", plan.alamatOutlet), renderDataDetail("Catatan", plan.catatan), renderDataDetail("Visibility"), renderDataDetail("Avability")]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, _this);
  };

  var renderDataDetail = function renderDataDetail(type, data) {
    var doneFormVis = state.visitPlanReducer.visibility.filter(function (val) {
      return val.file !== null && val.type !== null;
    });
    var doneFormAva = state.visitPlanReducer.avability;
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
          lineNumber: 89,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
              actions.setCatatan(e.target.value);
            },
            value: state.visitPlanReducer.catatan
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 15
          }, _this) : type === "Visibility" || type === "Avability" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: type === "Visibility" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.progress_bar
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 23
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.progress_bar_now,
                  style: {
                    width: "".concat(doneFormVis.length / 6 * 100, "%")
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
                  columnNumber: 23
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 21
              }, _this) : type === "Avability" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.progress_bar
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 23
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.progress_bar_now,
                  style: {
                    width: "".concat(doneFormAva.length / 25 * 100, "%")
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 23
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 21
              }, _this) : ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: type === "Visibility" ? "/visit/plan/".concat(plan.id, "/visibility") : type === "Avability" ? "/visit/plan/".concat(plan.id, "/avability") : "",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  text: "Add"
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
              lineNumber: 134,
              columnNumber: 17
            }, _this)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: data
          }, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, _this);
  };

  var onSubmit = function onSubmit() {
    var visDone = state.visitPlanReducer.visibility.filter(function (val) {
      return val.file !== null && val.type !== null;
    });

    if (visDone.length === 6) {
      var userData = JSON.parse(localStorage.getItem("user"));
      var bodyPlan = {
        id: plan.id,
        idMasterPlanVisit: plan.id,
        nomorDokumen: plan.nomorDokumen,
        catatan: state.visitPlanReducer.catatan,
        isCheckIn: true,
        checkInDate: state.visitPlanReducer.checkIn,
        isCheckOut: true,
        checkOutDate: now,
        createdBy: userData.username,
        updatedBy: userData.username
      };
      var bodyPosm = state.visitPlanReducer.visibility.map(function (val, index) {
        return {
          id: plan.id,
          activityVisitPlanId: plan.id,
          nomorDokumen: plan.nomorDokumen,
          nomor: index,
          tipe: val.type,
          namaFile: val.file.name,
          createdBy: userData.username,
          updatedBy: userData.username
        };
      });
      var bodyProduct = state.visitPlanReducer.avability.map(function (val, index) {
        return {
          id: plan.id,
          activityVisitPlanId: plan.id,
          nomorDokumen: plan.nomorDokumen,
          nomor: index,
          kodeProduk: val.productFocus.produkID,
          namaProduk: val.productFocus.namaProduk,
          stok: val.stock,
          saranOrder: val.saranOrder,
          jumlahOrder: val.order,
          createdBy: userData.username,
          updatedBy: userData.username
        };
      }); // http://10.100.4.116:8230/api/ActivityVisitPlan/SaveActivityVisitPlan
      // http://10.100.4.116:8230/api/ActivityVisitPlanDPOSM/SaveActivityVisitPlanDposm
      // http://10.100.4.116:8230/api/ActivityVisitPlanDProduct/SaveActivityVisitPlanDProduct

      console.log(bodyPlan, bodyPosm, bodyProduct);
    }
  };

  var render = function render() {
    if (loading) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 14
      }, _this);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.wrapper,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Nav__WEBPACK_IMPORTED_MODULE_6__["default"], {
            title: "Plan",
            color: "white",
            action: "Submit",
            onClick: function onClick() {
              onSubmit();
            },
            backAction: function backAction() {
              if (confirm("Data will be lost if you leave the page, are you sure?")) {
                actions.setDefaultVisitPlan();
                next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/visit/plan");
              }
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.main,
            children: renderDetail()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 234,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 9
      }, _this);
    }
  };

  return render();
}

_s(index, "wLN2h8NuF6yybbuSM60po8v9xg0=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlzaXQvcGxhbi8vaW5kZXguanN4Il0sIm5hbWVzIjpbImluZGV4IiwidXNlQ29udGV4dCIsIlN0b3JlcyIsInN0YXRlIiwiZGlzcGF0Y2giLCJhY3Rpb25zIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInBsYW4iLCJzZXRQbGFuIiwicm91dGVyIiwidXNlUm91dGVyIiwibm93IiwiRGF0ZSIsInVzZUVmZmVjdCIsInF1ZXJ5IiwiaWQiLCJmZXRjaCIsIkFQSV9VUkwiLCJBUElfTUFTVEVSX0RBVEEiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInZpc2l0UGxhblJlZHVjZXIiLCJjaGVja0luIiwic2V0Q2hlY2tJbiIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJEZXRhaWwiLCJyZW5kZXJEYXRhRGV0YWlsIiwiamVuaXNDaGFubmVsIiwibmFtYU91dGxldCIsImFsYW1hdE91dGxldCIsImNhdGF0YW4iLCJ0eXBlIiwiZG9uZUZvcm1WaXMiLCJ2aXNpYmlsaXR5IiwiZmlsdGVyIiwidmFsIiwiZmlsZSIsImRvbmVGb3JtQXZhIiwiYXZhYmlsaXR5Iiwic3R5bGVzIiwicmVuZGVyX2RhdGEiLCJ0ZXh0QWxpZ24iLCJsZW5ndGgiLCJtYXJnaW5Ub3AiLCJib3JkZXJSYWRpdXMiLCJyZW5kZXJfdmFsdWUiLCJ3aWR0aCIsImJvcmRlciIsImhlaWdodCIsImUiLCJzZXRDYXRhdGFuIiwidGFyZ2V0IiwidmFsdWUiLCJwcm9ncmVzc19iYXIiLCJwcm9ncmVzc19iYXJfbm93Iiwib25TdWJtaXQiLCJ2aXNEb25lIiwidXNlckRhdGEiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYm9keVBsYW4iLCJpZE1hc3RlclBsYW5WaXNpdCIsIm5vbW9yRG9rdW1lbiIsImlzQ2hlY2tJbiIsImNoZWNrSW5EYXRlIiwiaXNDaGVja091dCIsImNoZWNrT3V0RGF0ZSIsImNyZWF0ZWRCeSIsInVzZXJuYW1lIiwidXBkYXRlZEJ5IiwiYm9keVBvc20iLCJtYXAiLCJhY3Rpdml0eVZpc2l0UGxhbklkIiwibm9tb3IiLCJ0aXBlIiwibmFtYUZpbGUiLCJuYW1lIiwiYm9keVByb2R1Y3QiLCJrb2RlUHJvZHVrIiwicHJvZHVjdEZvY3VzIiwicHJvZHVrSUQiLCJuYW1hUHJvZHVrIiwic3RvayIsInN0b2NrIiwic2FyYW5PcmRlciIsImp1bWxhaE9yZGVyIiwib3JkZXIiLCJyZW5kZXIiLCJjb250YWluZXIiLCJ3cmFwcGVyIiwiY29uZmlybSIsInNldERlZmF1bHRWaXNpdFBsYW4iLCJSb3V0ZXIiLCJwdXNoIiwibWFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUWUsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBOztBQUFBLG9CQUNPQyx3REFBVSxDQUFDQyw2Q0FBRCxDQURqQjtBQUFBLE1BQ3RCQyxLQURzQixlQUN0QkEsS0FEc0I7QUFBQSxNQUNmQyxRQURlLGVBQ2ZBLFFBRGU7QUFBQSxNQUNMQyxPQURLLGVBQ0xBLE9BREs7O0FBQUEsa0JBRUFDLHNEQUFRLENBQUMsSUFBRCxDQUZSO0FBQUEsTUFFdkJDLE9BRnVCO0FBQUEsTUFFZEMsVUFGYzs7QUFBQSxtQkFHTkYsc0RBQVEsQ0FBQyxFQUFELENBSEY7QUFBQSxNQUd2QkcsSUFIdUI7QUFBQSxNQUdqQkMsT0FIaUI7O0FBSTlCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFJQyxHQUFHLEdBQUcsSUFBSUMsSUFBSixFQUFWLENBTDhCLENBTTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FDLHlEQUFTLENBQUMs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QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBeUJEO0FBQ0YsR0E5QkQ7O0FBK0JBLFNBQU9nRSxNQUFNLEVBQWI7QUFDRDs7R0E1TnVCL0YsSztVQUlQWSxxRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92aXNpdC9wbGFuL1tpZF0uYjIzM2U3NjRlZWZlMGYwM2RiYzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vLi4vc3R5bGVzL3BhZ2VzL1Zpc2l0UGxhbkRldGFpbC5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgeyBTdG9yZXMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RvcmVcIjtcclxuXHJcbmltcG9ydCBOYXYgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvTmF2XCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL0NhcmRcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvU3Bpbm5lclwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL0J1dHRvblwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBBUElfVVJMLFxyXG4gIEFQSV9VU0VSLFxyXG4gIFRPS0VOLFxyXG4gIEFQSV9WSVNJVF9QTEFOLFxyXG4gIEFQSV9NQVNURVJfREFUQSxcclxufSBmcm9tIFwiLi4vLi4vLi4vLi4vY29uc3RhbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluZGV4KCkge1xyXG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoLCBhY3Rpb25zIH0gPSB1c2VDb250ZXh0KFN0b3Jlcyk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3BsYW4sIHNldFBsYW5dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBpZiAocm91dGVyLnF1ZXJ5LmlkKSB7XHJcbiAgLy8gICAgIGZldGNoKFxyXG4gIC8vICAgICAgIGBodHRwOi8vMTAuMTAwLjQuMTE2OjgyMzAvYXBpL01hc3RlclZpc2l0UGxhbi9HZXRNYXN0ZXJWaXNpdFBsYW5CeUlkLyR7cm91dGVyLnF1ZXJ5LmlkfWBcclxuICAvLyAgICAgKVxyXG4gIC8vICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gIC8vICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAvLyAgICAgICB9KVxyXG4gIC8vICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgLy8gICAgICAgICBzZXRQbGFuKGRhdGEpO1xyXG4gIC8vICAgICAgICAgaWYgKCFzdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLmNoZWNrSW4pIHtcclxuICAvLyAgICAgICAgICAgYWN0aW9ucy5zZXRDaGVja0luKG5vdyk7XHJcbiAgLy8gICAgICAgICB9XHJcbiAgLy8gICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAvLyAgICAgICB9KVxyXG4gIC8vICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIC8vICAgICAgIH0pO1xyXG4gIC8vICAgfVxyXG4gIC8vIH0sIFtyb3V0ZXIucXVlcnkuaWRdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJvdXRlci5xdWVyeS5pZCkge1xyXG4gICAgICBmZXRjaChcclxuICAgICAgICBBUElfVVJMICsgQVBJX01BU1RFUl9EQVRBICsgYC9HZXRNYXN0ZXJWaXNpdFBsYW5CeUlkLyR7cm91dGVyLnF1ZXJ5LmlkfWBcclxuICAgICAgKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBzZXRQbGFuKGRhdGEpO1xyXG4gICAgICAgICAgaWYgKCFzdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLmNoZWNrSW4pIHtcclxuICAgICAgICAgICAgYWN0aW9ucy5zZXRDaGVja0luKG5vdyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIucXVlcnkuaWRdKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRGV0YWlsID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7cmVuZGVyRGF0YURldGFpbChcIkplbmlzIENoYW5uZWxcIiwgcGxhbi5qZW5pc0NoYW5uZWwpfVxyXG4gICAgICAgIHtyZW5kZXJEYXRhRGV0YWlsKFwiT3V0bGV0XCIsIHBsYW4ubmFtYU91dGxldCl9XHJcbiAgICAgICAge3JlbmRlckRhdGFEZXRhaWwoXCJBbGFtYXRcIiwgcGxhbi5hbGFtYXRPdXRsZXQpfVxyXG4gICAgICAgIHtyZW5kZXJEYXRhRGV0YWlsKFwiQ2F0YXRhblwiLCBwbGFuLmNhdGF0YW4pfVxyXG4gICAgICAgIHtyZW5kZXJEYXRhRGV0YWlsKFwiVmlzaWJpbGl0eVwiKX1cclxuICAgICAgICB7cmVuZGVyRGF0YURldGFpbChcIkF2YWJpbGl0eVwiKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVyRGF0YURldGFpbCA9ICh0eXBlLCBkYXRhKSA9PiB7XHJcbiAgICBjb25zdCBkb25lRm9ybVZpcyA9IHN0YXRlLnZpc2l0UGxhblJlZHVjZXIudmlzaWJpbGl0eS5maWx0ZXIoKHZhbCkgPT4ge1xyXG4gICAgICByZXR1cm4gdmFsLmZpbGUgIT09IG51bGwgJiYgdmFsLnR5cGUgIT09IG51bGw7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGRvbmVGb3JtQXZhID0gc3RhdGUudmlzaXRQbGFuUmVkdWNlci5hdmFiaWxpdHk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVuZGVyX2RhdGF9PlxyXG4gICAgICAgICAge3R5cGV9XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJyaWdodFwiIH19PlxyXG4gICAgICAgICAgICB7dHlwZSA9PT0gXCJWaXNpYmlsaXR5XCJcclxuICAgICAgICAgICAgICA/IGAke2RvbmVGb3JtVmlzLmxlbmd0aH0vNmBcclxuICAgICAgICAgICAgICA6IHR5cGUgPT09IFwiQXZhYmlsaXR5XCJcclxuICAgICAgICAgICAgICA/IGAke2RvbmVGb3JtQXZhLmxlbmd0aH0vMjVgXHJcbiAgICAgICAgICAgICAgOiBcIlwifVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjZweFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlbmRlcl92YWx1ZX0+XHJcbiAgICAgICAgICAgIHt0eXBlID09PSBcIkNhdGF0YW5cIiA/IChcclxuICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgYm9yZGVyOiBcIm5vbmVcIiwgaGVpZ2h0OiBcIjcwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbnMuc2V0Q2F0YXRhbihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnZpc2l0UGxhblJlZHVjZXIuY2F0YXRhbn1cclxuICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgKSA6IHR5cGUgPT09IFwiVmlzaWJpbGl0eVwiIHx8IHR5cGUgPT09IFwiQXZhYmlsaXR5XCIgPyAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIHt0eXBlID09PSBcIlZpc2liaWxpdHlcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJ9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJfbm93fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHsoZG9uZUZvcm1WaXMubGVuZ3RoIC8gNikgKiAxMDB9JWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkgOiB0eXBlID09PSBcIkF2YWJpbGl0eVwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcn0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcl9ub3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGAkeyhkb25lRm9ybUF2YS5sZW5ndGggLyAyNSkgKiAxMDB9JWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICBocmVmPXtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlID09PSBcIlZpc2liaWxpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBgL3Zpc2l0L3BsYW4vJHtwbGFuLmlkfS92aXNpYmlsaXR5YFxyXG4gICAgICAgICAgICAgICAgICAgICAgOiB0eXBlID09PSBcIkF2YWJpbGl0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IGAvdmlzaXQvcGxhbi8ke3BsYW4uaWR9L2F2YWJpbGl0eWBcclxuICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkFkZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8PntkYXRhfTwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuICBjb25zdCBvblN1Ym1pdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHZpc0RvbmUgPSBzdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLnZpc2liaWxpdHkuZmlsdGVyKCh2YWwpID0+IHtcclxuICAgICAgcmV0dXJuIHZhbC5maWxlICE9PSBudWxsICYmIHZhbC50eXBlICE9PSBudWxsO1xyXG4gICAgfSk7XHJcbiAgICBpZiAodmlzRG9uZS5sZW5ndGggPT09IDYpIHtcclxuICAgICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XHJcblxyXG4gICAgICBjb25zdCBib2R5UGxhbiA9IHtcclxuICAgICAgICBpZDogcGxhbi5pZCxcclxuICAgICAgICBpZE1hc3RlclBsYW5WaXNpdDogcGxhbi5pZCxcclxuICAgICAgICBub21vckRva3VtZW46IHBsYW4ubm9tb3JEb2t1bWVuLFxyXG4gICAgICAgIGNhdGF0YW46IHN0YXRlLnZpc2l0UGxhblJlZHVjZXIuY2F0YXRhbixcclxuICAgICAgICBpc0NoZWNrSW46IHRydWUsXHJcbiAgICAgICAgY2hlY2tJbkRhdGU6IHN0YXRlLnZpc2l0UGxhblJlZHVjZXIuY2hlY2tJbixcclxuICAgICAgICBpc0NoZWNrT3V0OiB0cnVlLFxyXG4gICAgICAgIGNoZWNrT3V0RGF0ZTogbm93LFxyXG4gICAgICAgIGNyZWF0ZWRCeTogdXNlckRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgdXBkYXRlZEJ5OiB1c2VyRGF0YS51c2VybmFtZSxcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgYm9keVBvc20gPSBzdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLnZpc2liaWxpdHkubWFwKCh2YWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGlkOiBwbGFuLmlkLFxyXG4gICAgICAgICAgYWN0aXZpdHlWaXNpdFBsYW5JZDogcGxhbi5pZCxcclxuICAgICAgICAgIG5vbW9yRG9rdW1lbjogcGxhbi5ub21vckRva3VtZW4sXHJcbiAgICAgICAgICBub21vcjogaW5kZXgsXHJcbiAgICAgICAgICB0aXBlOiB2YWwudHlwZSxcclxuICAgICAgICAgIG5hbWFGaWxlOiB2YWwuZmlsZS5uYW1lLFxyXG4gICAgICAgICAgY3JlYXRlZEJ5OiB1c2VyRGF0YS51c2VybmFtZSxcclxuICAgICAgICAgIHVwZGF0ZWRCeTogdXNlckRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IGJvZHlQcm9kdWN0ID0gc3RhdGUudmlzaXRQbGFuUmVkdWNlci5hdmFiaWxpdHkubWFwKCh2YWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGlkOiBwbGFuLmlkLFxyXG4gICAgICAgICAgYWN0aXZpdHlWaXNpdFBsYW5JZDogcGxhbi5pZCxcclxuICAgICAgICAgIG5vbW9yRG9rdW1lbjogcGxhbi5ub21vckRva3VtZW4sXHJcbiAgICAgICAgICBub21vcjogaW5kZXgsXHJcbiAgICAgICAgICBrb2RlUHJvZHVrOiB2YWwucHJvZHVjdEZvY3VzLnByb2R1a0lELFxyXG4gICAgICAgICAgbmFtYVByb2R1azogdmFsLnByb2R1Y3RGb2N1cy5uYW1hUHJvZHVrLFxyXG4gICAgICAgICAgc3RvazogdmFsLnN0b2NrLFxyXG4gICAgICAgICAgc2FyYW5PcmRlcjogdmFsLnNhcmFuT3JkZXIsXHJcbiAgICAgICAgICBqdW1sYWhPcmRlcjogdmFsLm9yZGVyLFxyXG4gICAgICAgICAgY3JlYXRlZEJ5OiB1c2VyRGF0YS51c2VybmFtZSxcclxuICAgICAgICAgIHVwZGF0ZWRCeTogdXNlckRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIGh0dHA6Ly8xMC4xMDAuNC4xMTY6ODIzMC9hcGkvQWN0aXZpdHlWaXNpdFBsYW4vU2F2ZUFjdGl2aXR5VmlzaXRQbGFuXHJcbiAgICAgIC8vIGh0dHA6Ly8xMC4xMDAuNC4xMTY6ODIzMC9hcGkvQWN0aXZpdHlWaXNpdFBsYW5EUE9TTS9TYXZlQWN0aXZpdHlWaXNpdFBsYW5EcG9zbVxyXG4gICAgICAvLyBodHRwOi8vMTAuMTAwLjQuMTE2OjgyMzAvYXBpL0FjdGl2aXR5VmlzaXRQbGFuRFByb2R1Y3QvU2F2ZUFjdGl2aXR5VmlzaXRQbGFuRFByb2R1Y3RcclxuICAgICAgY29uc29sZS5sb2coYm9keVBsYW4sIGJvZHlQb3NtLCBib2R5UHJvZHVjdCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8TmF2XHJcbiAgICAgICAgICAgICAgdGl0bGU9e1wiUGxhblwifVxyXG4gICAgICAgICAgICAgIGNvbG9yPXtcIndoaXRlXCJ9XHJcbiAgICAgICAgICAgICAgYWN0aW9uPXtcIlN1Ym1pdFwifVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIG9uU3VibWl0KCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBiYWNrQWN0aW9uPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgIGNvbmZpcm0oXHJcbiAgICAgICAgICAgICAgICAgICAgXCJEYXRhIHdpbGwgYmUgbG9zdCBpZiB5b3UgbGVhdmUgdGhlIHBhZ2UsIGFyZSB5b3Ugc3VyZT9cIlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgYWN0aW9ucy5zZXREZWZhdWx0VmlzaXRQbGFuKCk7XHJcbiAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL3Zpc2l0L3BsYW5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT57cmVuZGVyRGV0YWlsKCl9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiByZW5kZXIoKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9