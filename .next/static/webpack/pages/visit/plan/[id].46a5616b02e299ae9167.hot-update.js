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
      fetch("http://10.100.4.116:8230/api/MasterVisitPlan/GetMasterVisitPlanById/".concat(router.query.id)).then(function (response) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlzaXQvcGxhbi8vaW5kZXguanN4Il0sIm5hbWVzIjpbImluZGV4IiwidXNlQ29udGV4dCIsIlN0b3JlcyIsInN0YXRlIiwiZGlzcGF0Y2giLCJhY3Rpb25zIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInBsYW4iLCJzZXRQbGFuIiwicm91dGVyIiwidXNlUm91dGVyIiwibm93IiwiRGF0ZSIsInVzZUVmZmVjdCIsInF1ZXJ5IiwiaWQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwidmlzaXRQbGFuUmVkdWNlciIsImNoZWNrSW4iLCJzZXRDaGVja0luIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInJlbmRlckRldGFpbCIsInJlbmRlckRhdGFEZXRhaWwiLCJqZW5pc0NoYW5uZWwiLCJuYW1hT3V0bGV0IiwiYWxhbWF0T3V0bGV0IiwiY2F0YXRhbiIsInR5cGUiLCJkb25lRm9ybVZpcyIsInZpc2liaWxpdHkiLCJmaWx0ZXIiLCJ2YWwiLCJmaWxlIiwiZG9uZUZvcm1BdmEiLCJhdmFiaWxpdHkiLCJzdHlsZXMiLCJyZW5kZXJfZGF0YSIsInRleHRBbGlnbiIsImxlbmd0aCIsIm1hcmdpblRvcCIsImJvcmRlclJhZGl1cyIsInJlbmRlcl92YWx1ZSIsIndpZHRoIiwiYm9yZGVyIiwiaGVpZ2h0IiwiZSIsInNldENhdGF0YW4iLCJ0YXJnZXQiLCJ2YWx1ZSIsInByb2dyZXNzX2JhciIsInByb2dyZXNzX2Jhcl9ub3ciLCJvblN1Ym1pdCIsInZpc0RvbmUiLCJ1c2VyRGF0YSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJib2R5UGxhbiIsImlkTWFzdGVyUGxhblZpc2l0Iiwibm9tb3JEb2t1bWVuIiwiaXNDaGVja0luIiwiY2hlY2tJbkRhdGUiLCJpc0NoZWNrT3V0IiwiY2hlY2tPdXREYXRlIiwiY3JlYXRlZEJ5IiwidXNlcm5hbWUiLCJ1cGRhdGVkQnkiLCJib2R5UG9zbSIsIm1hcCIsImFjdGl2aXR5VmlzaXRQbGFuSWQiLCJub21vciIsInRpcGUiLCJuYW1hRmlsZSIsIm5hbWUiLCJib2R5UHJvZHVjdCIsImtvZGVQcm9kdWsiLCJwcm9kdWN0Rm9jdXMiLCJwcm9kdWtJRCIsIm5hbWFQcm9kdWsiLCJzdG9rIiwic3RvY2siLCJzYXJhbk9yZGVyIiwianVtbGFoT3JkZXIiLCJvcmRlciIsInJlbmRlciIsImNvbnRhaW5lciIsIndyYXBwZXIiLCJjb25maXJtIiwic2V0RGVmYXVsdFZpc2l0UGxhbiIsIlJvdXRlciIsInB1c2giLCJtYWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFRZSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUE7O0FBQUEsb0JBQ09DLHdEQUFVLENBQUNDLDZDQUFELENBRGpCO0FBQUEsTUFDdEJDLEtBRHNCLGVBQ3RCQSxLQURzQjtBQUFBLE1BQ2ZDLFFBRGUsZUFDZkEsUUFEZTtBQUFBLE1BQ0xDLE9BREssZUFDTEEsT0FESzs7QUFBQSxrQkFFQUMsc0RBQVEsQ0FBQyxJQUFELENBRlI7QUFBQSxNQUV2QkMsT0FGdUI7QUFBQSxNQUVkQyxVQUZjOztBQUFBLG1CQUdORixzREFBUSxDQUFDLEVBQUQsQ0FIRjtBQUFBLE1BR3ZCRyxJQUh1QjtBQUFBLE1BR2pCQyxPQUhpQjs7QUFJOUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQUlDLEdBQUcsR0FBRyxJQUFJQyxJQUFKLEVBQVYsQ0FMOEIsQ0FNOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUosTUFBTSxDQUFDSyxL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QUErQkEsU0FBT2dFLE1BQU0sRUFBYjtBQUNEOztHQTVOdUI3RixLO1VBSVBZLHFEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Zpc2l0L3BsYW4vW2lkXS40NmE1NjE2YjAyZTI5OWFlOTE2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi8uLi9zdHlsZXMvcGFnZXMvVmlzaXRQbGFuRGV0YWlsLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCB7IFN0b3JlcyB9IGZyb20gXCIuLi8uLi8uLi8uLi9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IE5hdiBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9OYXZcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvQ2FyZFwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9TcGlubmVyXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvQnV0dG9uXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIEFQSV9VUkwsXHJcbiAgQVBJX1VTRVIsXHJcbiAgVE9LRU4sXHJcbiAgQVBJX1ZJU0lUX1BMQU4sXHJcbiAgQVBJX01BU1RFUl9EQVRBLFxyXG59IGZyb20gXCIuLi8uLi8uLi8uLi9jb25zdGFudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXgoKSB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2gsIGFjdGlvbnMgfSA9IHVzZUNvbnRleHQoU3RvcmVzKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbcGxhbiwgc2V0UGxhbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGlmIChyb3V0ZXIucXVlcnkuaWQpIHtcclxuICAvLyAgICAgZmV0Y2goXHJcbiAgLy8gICAgICAgYGh0dHA6Ly8xMC4xMDAuNC4xMTY6ODIzMC9hcGkvTWFzdGVyVmlzaXRQbGFuL0dldE1hc3RlclZpc2l0UGxhbkJ5SWQvJHtyb3V0ZXIucXVlcnkuaWR9YFxyXG4gIC8vICAgICApXHJcbiAgLy8gICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgLy8gICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gIC8vICAgICAgIH0pXHJcbiAgLy8gICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAvLyAgICAgICAgIHNldFBsYW4oZGF0YSk7XHJcbiAgLy8gICAgICAgICBpZiAoIXN0YXRlLnZpc2l0UGxhblJlZHVjZXIuY2hlY2tJbikge1xyXG4gIC8vICAgICAgICAgICBhY3Rpb25zLnNldENoZWNrSW4obm93KTtcclxuICAvLyAgICAgICAgIH1cclxuICAvLyAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIC8vICAgICAgIH0pXHJcbiAgLy8gICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgLy8gICAgICAgfSk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfSwgW3JvdXRlci5xdWVyeS5pZF0pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocm91dGVyLnF1ZXJ5LmlkKSB7XHJcbiAgICAgIGZldGNoKFxyXG4gICAgICAgIGBodHRwOi8vMTAuMTAwLjQuMTE2OjgyMzAvYXBpL01hc3RlclZpc2l0UGxhbi9HZXRNYXN0ZXJWaXNpdFBsYW5CeUlkLyR7cm91dGVyLnF1ZXJ5LmlkfWBcclxuICAgICAgKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBzZXRQbGFuKGRhdGEpO1xyXG4gICAgICAgICAgaWYgKCFzdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLmNoZWNrSW4pIHtcclxuICAgICAgICAgICAgYWN0aW9ucy5zZXRDaGVja0luKG5vdyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIucXVlcnkuaWRdKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRGV0YWlsID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7cmVuZGVyRGF0YURldGFpbChcIkplbmlzIENoYW5uZWxcIiwgcGxhbi5qZW5pc0NoYW5uZWwpfVxyXG4gICAgICAgIHtyZW5kZXJEYXRhRGV0YWlsKFwiT3V0bGV0XCIsIHBsYW4ubmFtYU91dGxldCl9XHJcbiAgICAgICAge3JlbmRlckRhdGFEZXRhaWwoXCJBbGFtYXRcIiwgcGxhbi5hbGFtYXRPdXRsZXQpfVxyXG4gICAgICAgIHtyZW5kZXJEYXRhRGV0YWlsKFwiQ2F0YXRhblwiLCBwbGFuLmNhdGF0YW4pfVxyXG4gICAgICAgIHtyZW5kZXJEYXRhRGV0YWlsKFwiVmlzaWJpbGl0eVwiKX1cclxuICAgICAgICB7cmVuZGVyRGF0YURldGFpbChcIkF2YWJpbGl0eVwiKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVyRGF0YURldGFpbCA9ICh0eXBlLCBkYXRhKSA9PiB7XHJcbiAgICBjb25zdCBkb25lRm9ybVZpcyA9IHN0YXRlLnZpc2l0UGxhblJlZHVjZXIudmlzaWJpbGl0eS5maWx0ZXIoKHZhbCkgPT4ge1xyXG4gICAgICByZXR1cm4gdmFsLmZpbGUgIT09IG51bGwgJiYgdmFsLnR5cGUgIT09IG51bGw7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGRvbmVGb3JtQXZhID0gc3RhdGUudmlzaXRQbGFuUmVkdWNlci5hdmFiaWxpdHk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVuZGVyX2RhdGF9PlxyXG4gICAgICAgICAge3R5cGV9XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJyaWdodFwiIH19PlxyXG4gICAgICAgICAgICB7dHlwZSA9PT0gXCJWaXNpYmlsaXR5XCJcclxuICAgICAgICAgICAgICA/IGAke2RvbmVGb3JtVmlzLmxlbmd0aH0vNmBcclxuICAgICAgICAgICAgICA6IHR5cGUgPT09IFwiQXZhYmlsaXR5XCJcclxuICAgICAgICAgICAgICA/IGAke2RvbmVGb3JtQXZhLmxlbmd0aH0vMjVgXHJcbiAgICAgICAgICAgICAgOiBcIlwifVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjZweFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlbmRlcl92YWx1ZX0+XHJcbiAgICAgICAgICAgIHt0eXBlID09PSBcIkNhdGF0YW5cIiA/IChcclxuICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgYm9yZGVyOiBcIm5vbmVcIiwgaGVpZ2h0OiBcIjcwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbnMuc2V0Q2F0YXRhbihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnZpc2l0UGxhblJlZHVjZXIuY2F0YXRhbn1cclxuICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgKSA6IHR5cGUgPT09IFwiVmlzaWJpbGl0eVwiIHx8IHR5cGUgPT09IFwiQXZhYmlsaXR5XCIgPyAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIHt0eXBlID09PSBcIlZpc2liaWxpdHlcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJ9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJfbm93fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHsoZG9uZUZvcm1WaXMubGVuZ3RoIC8gNikgKiAxMDB9JWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkgOiB0eXBlID09PSBcIkF2YWJpbGl0eVwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcn0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcl9ub3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGAkeyhkb25lRm9ybUF2YS5sZW5ndGggLyAyNSkgKiAxMDB9JWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICBocmVmPXtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlID09PSBcIlZpc2liaWxpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBgL3Zpc2l0L3BsYW4vJHtwbGFuLmlkfS92aXNpYmlsaXR5YFxyXG4gICAgICAgICAgICAgICAgICAgICAgOiB0eXBlID09PSBcIkF2YWJpbGl0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IGAvdmlzaXQvcGxhbi8ke3BsYW4uaWR9L2F2YWJpbGl0eWBcclxuICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkFkZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8PntkYXRhfTwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuICBjb25zdCBvblN1Ym1pdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHZpc0RvbmUgPSBzdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLnZpc2liaWxpdHkuZmlsdGVyKCh2YWwpID0+IHtcclxuICAgICAgcmV0dXJuIHZhbC5maWxlICE9PSBudWxsICYmIHZhbC50eXBlICE9PSBudWxsO1xyXG4gICAgfSk7XHJcbiAgICBpZiAodmlzRG9uZS5sZW5ndGggPT09IDYpIHtcclxuICAgICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XHJcblxyXG4gICAgICBjb25zdCBib2R5UGxhbiA9IHtcclxuICAgICAgICBpZDogcGxhbi5pZCxcclxuICAgICAgICBpZE1hc3RlclBsYW5WaXNpdDogcGxhbi5pZCxcclxuICAgICAgICBub21vckRva3VtZW46IHBsYW4ubm9tb3JEb2t1bWVuLFxyXG4gICAgICAgIGNhdGF0YW46IHN0YXRlLnZpc2l0UGxhblJlZHVjZXIuY2F0YXRhbixcclxuICAgICAgICBpc0NoZWNrSW46IHRydWUsXHJcbiAgICAgICAgY2hlY2tJbkRhdGU6IHN0YXRlLnZpc2l0UGxhblJlZHVjZXIuY2hlY2tJbixcclxuICAgICAgICBpc0NoZWNrT3V0OiB0cnVlLFxyXG4gICAgICAgIGNoZWNrT3V0RGF0ZTogbm93LFxyXG4gICAgICAgIGNyZWF0ZWRCeTogdXNlckRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgdXBkYXRlZEJ5OiB1c2VyRGF0YS51c2VybmFtZSxcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgYm9keVBvc20gPSBzdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLnZpc2liaWxpdHkubWFwKCh2YWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGlkOiBwbGFuLmlkLFxyXG4gICAgICAgICAgYWN0aXZpdHlWaXNpdFBsYW5JZDogcGxhbi5pZCxcclxuICAgICAgICAgIG5vbW9yRG9rdW1lbjogcGxhbi5ub21vckRva3VtZW4sXHJcbiAgICAgICAgICBub21vcjogaW5kZXgsXHJcbiAgICAgICAgICB0aXBlOiB2YWwudHlwZSxcclxuICAgICAgICAgIG5hbWFGaWxlOiB2YWwuZmlsZS5uYW1lLFxyXG4gICAgICAgICAgY3JlYXRlZEJ5OiB1c2VyRGF0YS51c2VybmFtZSxcclxuICAgICAgICAgIHVwZGF0ZWRCeTogdXNlckRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IGJvZHlQcm9kdWN0ID0gc3RhdGUudmlzaXRQbGFuUmVkdWNlci5hdmFiaWxpdHkubWFwKCh2YWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGlkOiBwbGFuLmlkLFxyXG4gICAgICAgICAgYWN0aXZpdHlWaXNpdFBsYW5JZDogcGxhbi5pZCxcclxuICAgICAgICAgIG5vbW9yRG9rdW1lbjogcGxhbi5ub21vckRva3VtZW4sXHJcbiAgICAgICAgICBub21vcjogaW5kZXgsXHJcbiAgICAgICAgICBrb2RlUHJvZHVrOiB2YWwucHJvZHVjdEZvY3VzLnByb2R1a0lELFxyXG4gICAgICAgICAgbmFtYVByb2R1azogdmFsLnByb2R1Y3RGb2N1cy5uYW1hUHJvZHVrLFxyXG4gICAgICAgICAgc3RvazogdmFsLnN0b2NrLFxyXG4gICAgICAgICAgc2FyYW5PcmRlcjogdmFsLnNhcmFuT3JkZXIsXHJcbiAgICAgICAgICBqdW1sYWhPcmRlcjogdmFsLm9yZGVyLFxyXG4gICAgICAgICAgY3JlYXRlZEJ5OiB1c2VyRGF0YS51c2VybmFtZSxcclxuICAgICAgICAgIHVwZGF0ZWRCeTogdXNlckRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIGh0dHA6Ly8xMC4xMDAuNC4xMTY6ODIzMC9hcGkvQWN0aXZpdHlWaXNpdFBsYW4vU2F2ZUFjdGl2aXR5VmlzaXRQbGFuXHJcbiAgICAgIC8vIGh0dHA6Ly8xMC4xMDAuNC4xMTY6ODIzMC9hcGkvQWN0aXZpdHlWaXNpdFBsYW5EUE9TTS9TYXZlQWN0aXZpdHlWaXNpdFBsYW5EcG9zbVxyXG4gICAgICAvLyBodHRwOi8vMTAuMTAwLjQuMTE2OjgyMzAvYXBpL0FjdGl2aXR5VmlzaXRQbGFuRFByb2R1Y3QvU2F2ZUFjdGl2aXR5VmlzaXRQbGFuRFByb2R1Y3RcclxuICAgICAgY29uc29sZS5sb2coYm9keVBsYW4sIGJvZHlQb3NtLCBib2R5UHJvZHVjdCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8TmF2XHJcbiAgICAgICAgICAgICAgdGl0bGU9e1wiUGxhblwifVxyXG4gICAgICAgICAgICAgIGNvbG9yPXtcIndoaXRlXCJ9XHJcbiAgICAgICAgICAgICAgYWN0aW9uPXtcIlN1Ym1pdFwifVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIG9uU3VibWl0KCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBiYWNrQWN0aW9uPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgIGNvbmZpcm0oXHJcbiAgICAgICAgICAgICAgICAgICAgXCJEYXRhIHdpbGwgYmUgbG9zdCBpZiB5b3UgbGVhdmUgdGhlIHBhZ2UsIGFyZSB5b3Ugc3VyZT9cIlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgYWN0aW9ucy5zZXREZWZhdWx0VmlzaXRQbGFuKCk7XHJcbiAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL3Zpc2l0L3BsYW5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT57cmVuZGVyRGV0YWlsKCl9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiByZW5kZXIoKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9