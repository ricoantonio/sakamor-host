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
      fetch(_constant__WEBPACK_IMPORTED_MODULE_10__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_10__["API_MASTER_DATA"] + "/GetMasterVisitPlanById/".concat(router.query.id), {
        headers: {
          apiKey: _constant__WEBPACK_IMPORTED_MODULE_10__["TOKEN"]
        }
      }).then(function (response) {
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
      lineNumber: 77,
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
          lineNumber: 96,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
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
            lineNumber: 107,
            columnNumber: 15
          }, _this) : type === "Visibility" || type === "Avability" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: type === "Visibility" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.progress_bar
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 23
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.progress_bar_now,
                  style: {
                    width: "".concat(doneFormVis.length / 6 * 100, "%")
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 23
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 21
              }, _this) : type === "Avability" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.progress_bar
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 23
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.progress_bar_now,
                  style: {
                    width: "".concat(doneFormAva.length / 25 * 100, "%")
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 23
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 21
              }, _this) : ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: type === "Visibility" ? "/visit/plan/".concat(plan.id, "/visibility") : type === "Avability" ? "/visit/plan/".concat(plan.id, "/avability") : "",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  text: "Add"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 151,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 17
            }, _this)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: data
          }, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 93,
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
        lineNumber: 218,
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
            lineNumber: 223,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.main,
            children: renderDetail()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 221,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlzaXQvcGxhbi8vaW5kZXguanN4Il0sIm5hbWVzIjpbImluZGV4IiwidXNlQ29udGV4dCIsIlN0b3JlcyIsInN0YXRlIiwiZGlzcGF0Y2giLCJhY3Rpb25zIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInBsYW4iLCJzZXRQbGFuIiwicm91dGVyIiwidXNlUm91dGVyIiwibm93IiwiRGF0ZSIsInVzZUVmZmVjdCIsInF1ZXJ5IiwiaWQiLCJmZXRjaCIsIkFQSV9VUkwiLCJBUElfTUFTVEVSX0RBVEEiLCJoZWFkZXJzIiwiYXBpS2V5IiwiVE9LRU4iLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInZpc2l0UGxhblJlZHVjZXIiLCJjaGVja0luIiwic2V0Q2hlY2tJbiIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJEZXRhaWwiLCJyZW5kZXJEYXRhRGV0YWlsIiwiamVuaXNDaGFubmVsIiwibmFtYU91dGxldCIsImFsYW1hdE91dGxldCIsImNhdGF0YW4iLCJ0eXBlIiwiZG9uZUZvcm1WaXMiLCJ2aXNpYmlsaXR5IiwiZmlsdGVyIiwidmFsIiwiZmlsZSIsImRvbmVGb3JtQXZhIiwiYXZhYmlsaXR5Iiwic3R5bGVzIiwicmVuZGVyX2RhdGEiLCJ0ZXh0QWxpZ24iLCJsZW5ndGgiLCJtYXJnaW5Ub3AiLCJib3JkZXJSYWRpdXMiLCJyZW5kZXJfdmFsdWUiLCJ3aWR0aCIsImJvcmRlciIsImhlaWdodCIsImUiLCJzZXRDYXRhdGFuIiwidGFyZ2V0IiwidmFsdWUiLCJwcm9ncmVzc19iYXIiLCJwcm9ncmVzc19iYXJfbm93Iiwib25TdWJtaXQiLCJ2aXNEb25lIiwidXNlckRhdGEiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYm9keVBsYW4iLCJpZE1hc3RlclBsYW5WaXNpdCIsIm5vbW9yRG9rdW1lbiIsImlzQ2hlY2tJbiIsImNoZWNrSW5EYXRlIiwiaXNDaGVja091dCIsImNoZWNrT3V0RGF0ZSIsImNyZWF0ZWRCeSIsInVzZXJuYW1lIiwidXBkYXRlZEJ5IiwiYm9keVBvc20iLCJtYXAiLCJhY3Rpdml0eVZpc2l0UGxhbklkIiwibm9tb3IiLCJ0aXBlIiwibmFtYUZpbGUiLCJuYW1lIiwiYm9keVByb2R1Y3QiLCJrb2RlUHJvZHVrIiwicHJvZHVjdEZvY3VzIiwicHJvZHVrSUQiLCJuYW1hUHJvZHVrIiwic3RvayIsInN0b2NrIiwic2FyYW5PcmRlciIsImp1bWxhaE9yZGVyIiwib3JkZXIiLCJyZW5kZXIiLCJjb250YWluZXIiLCJ3cmFwcGVyIiwiY29uZmlybSIsInNldERlZmF1bHRWaXNpdFBsYW4iLCJSb3V0ZXIiLCJwdXNoIiwibWFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUWUsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBOztBQUFBLG9CQUNPQyx3REFBVSxDQUFDQyw2Q0FBRCxDQURqQjtBQUFBLE1BQ3RCQyxLQURzQixlQUN0QkEsS0FEc0I7QUFBQSxNQUNmQyxRQURlLGVBQ2ZBLFFBRGU7QUFBQSxNQUNMQyxPQURLLGVBQ0xBLE9BREs7O0FBQUEsa0JBRUFDLHNEQUFRLENBQUMsSUFBRCxDQUZSO0FBQUEsTUFFdkJDLE9BRnVCO0FBQUEsTUFFZEMsVUFGYzs7QUFBQSxtQkFHTkYsc0RBQVEsQ0FBQyxFQUFELENBSEY7QUFBQSxNQUd2QkcsSUFIdUI7QUFBQSxNQUdqQkMsT0FIaUI7O0FBSTlCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFJQyxHQUFHLEdBQUcsSUFBSUMsSUFBSixFQUFWLENBTDhCLENBTTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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UyxFQUFFeEQsK0VBQU0sQ0FBQ3lELElBQXZCO0FBQUEsc0JBQThCdkUsWUFBWTtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUF5QkQ7QUFDRixHQTlCRDs7QUErQkEsU0FBT2dFLE1BQU0sRUFBYjtBQUNEOztHQW5PdUJsRyxLO1VBSVBZLHFEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Zpc2l0L3BsYW4vW2lkXS43MjJjMWU5NDEzODJjMTkzZjM4MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi8uLi9zdHlsZXMvcGFnZXMvVmlzaXRQbGFuRGV0YWlsLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCB7IFN0b3JlcyB9IGZyb20gXCIuLi8uLi8uLi8uLi9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IE5hdiBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9OYXZcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvQ2FyZFwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9TcGlubmVyXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvQnV0dG9uXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIEFQSV9VUkwsXHJcbiAgQVBJX1VTRVIsXHJcbiAgVE9LRU4sXHJcbiAgQVBJX1ZJU0lUX1BMQU4sXHJcbiAgQVBJX01BU1RFUl9EQVRBLFxyXG59IGZyb20gXCIuLi8uLi8uLi8uLi9jb25zdGFudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXgoKSB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2gsIGFjdGlvbnMgfSA9IHVzZUNvbnRleHQoU3RvcmVzKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbcGxhbiwgc2V0UGxhbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGlmIChyb3V0ZXIucXVlcnkuaWQpIHtcclxuICAvLyAgICAgZmV0Y2goXHJcbiAgLy8gICAgICAgYGh0dHA6Ly8xMC4xMDAuNC4xMTY6ODIzMC9hcGkvTWFzdGVyVmlzaXRQbGFuL0dldE1hc3RlclZpc2l0UGxhbkJ5SWQvJHtyb3V0ZXIucXVlcnkuaWR9YFxyXG4gIC8vICAgICApXHJcbiAgLy8gICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgLy8gICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gIC8vICAgICAgIH0pXHJcbiAgLy8gICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAvLyAgICAgICAgIHNldFBsYW4oZGF0YSk7XHJcbiAgLy8gICAgICAgICBpZiAoIXN0YXRlLnZpc2l0UGxhblJlZHVjZXIuY2hlY2tJbikge1xyXG4gIC8vICAgICAgICAgICBhY3Rpb25zLnNldENoZWNrSW4obm93KTtcclxuICAvLyAgICAgICAgIH1cclxuICAvLyAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIC8vICAgICAgIH0pXHJcbiAgLy8gICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgLy8gICAgICAgfSk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfSwgW3JvdXRlci5xdWVyeS5pZF0pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocm91dGVyLnF1ZXJ5LmlkKSB7XHJcbiAgICAgIGZldGNoKFxyXG4gICAgICAgIEFQSV9VUkwgK1xyXG4gICAgICAgICAgQVBJX01BU1RFUl9EQVRBICtcclxuICAgICAgICAgIGAvR2V0TWFzdGVyVmlzaXRQbGFuQnlJZC8ke3JvdXRlci5xdWVyeS5pZH1gLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIHNldFBsYW4oZGF0YSk7XHJcbiAgICAgICAgICBpZiAoIXN0YXRlLnZpc2l0UGxhblJlZHVjZXIuY2hlY2tJbikge1xyXG4gICAgICAgICAgICBhY3Rpb25zLnNldENoZWNrSW4obm93KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlci5xdWVyeS5pZF0pO1xyXG5cclxuICBjb25zdCByZW5kZXJEZXRhaWwgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtyZW5kZXJEYXRhRGV0YWlsKFwiSmVuaXMgQ2hhbm5lbFwiLCBwbGFuLmplbmlzQ2hhbm5lbCl9XHJcbiAgICAgICAge3JlbmRlckRhdGFEZXRhaWwoXCJPdXRsZXRcIiwgcGxhbi5uYW1hT3V0bGV0KX1cclxuICAgICAgICB7cmVuZGVyRGF0YURldGFpbChcIkFsYW1hdFwiLCBwbGFuLmFsYW1hdE91dGxldCl9XHJcbiAgICAgICAge3JlbmRlckRhdGFEZXRhaWwoXCJDYXRhdGFuXCIsIHBsYW4uY2F0YXRhbil9XHJcbiAgICAgICAge3JlbmRlckRhdGFEZXRhaWwoXCJWaXNpYmlsaXR5XCIpfVxyXG4gICAgICAgIHtyZW5kZXJEYXRhRGV0YWlsKFwiQXZhYmlsaXR5XCIpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuICBjb25zdCByZW5kZXJEYXRhRGV0YWlsID0gKHR5cGUsIGRhdGEpID0+IHtcclxuICAgIGNvbnN0IGRvbmVGb3JtVmlzID0gc3RhdGUudmlzaXRQbGFuUmVkdWNlci52aXNpYmlsaXR5LmZpbHRlcigodmFsKSA9PiB7XHJcbiAgICAgIHJldHVybiB2YWwuZmlsZSAhPT0gbnVsbCAmJiB2YWwudHlwZSAhPT0gbnVsbDtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZG9uZUZvcm1BdmEgPSBzdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLmF2YWJpbGl0eTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZW5kZXJfZGF0YX0+XHJcbiAgICAgICAgICB7dHlwZX1cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcInJpZ2h0XCIgfX0+XHJcbiAgICAgICAgICAgIHt0eXBlID09PSBcIlZpc2liaWxpdHlcIlxyXG4gICAgICAgICAgICAgID8gYCR7ZG9uZUZvcm1WaXMubGVuZ3RofS82YFxyXG4gICAgICAgICAgICAgIDogdHlwZSA9PT0gXCJBdmFiaWxpdHlcIlxyXG4gICAgICAgICAgICAgID8gYCR7ZG9uZUZvcm1BdmEubGVuZ3RofS8yNWBcclxuICAgICAgICAgICAgICA6IFwiXCJ9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNnB4XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVuZGVyX3ZhbHVlfT5cclxuICAgICAgICAgICAge3R5cGUgPT09IFwiQ2F0YXRhblwiID8gKFxyXG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBib3JkZXI6IFwibm9uZVwiLCBoZWlnaHQ6IFwiNzBweFwiIH19XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgYWN0aW9ucy5zZXRDYXRhdGFuKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUudmlzaXRQbGFuUmVkdWNlci5jYXRhdGFufVxyXG4gICAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICApIDogdHlwZSA9PT0gXCJWaXNpYmlsaXR5XCIgfHwgdHlwZSA9PT0gXCJBdmFiaWxpdHlcIiA/IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAge3R5cGUgPT09IFwiVmlzaWJpbGl0eVwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcn0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcl9ub3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGAkeyhkb25lRm9ybVZpcy5sZW5ndGggLyA2KSAqIDEwMH0lYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKSA6IHR5cGUgPT09IFwiQXZhYmlsaXR5XCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfYmFyfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfYmFyX25vd31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYCR7KGRvbmVGb3JtQXZhLmxlbmd0aCAvIDI1KSAqIDEwMH0lYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9e1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPT09IFwiVmlzaWJpbGl0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IGAvdmlzaXQvcGxhbi8ke3BsYW4uaWR9L3Zpc2liaWxpdHlgXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IHR5cGUgPT09IFwiQXZhYmlsaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgID8gYC92aXNpdC9wbGFuLyR7cGxhbi5pZH0vYXZhYmlsaXR5YFxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQWRkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDw+e2RhdGF9PC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdmlzRG9uZSA9IHN0YXRlLnZpc2l0UGxhblJlZHVjZXIudmlzaWJpbGl0eS5maWx0ZXIoKHZhbCkgPT4ge1xyXG4gICAgICByZXR1cm4gdmFsLmZpbGUgIT09IG51bGwgJiYgdmFsLnR5cGUgIT09IG51bGw7XHJcbiAgICB9KTtcclxuICAgIGlmICh2aXNEb25lLmxlbmd0aCA9PT0gNikge1xyXG4gICAgICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcclxuXHJcbiAgICAgIGNvbnN0IGJvZHlQbGFuID0ge1xyXG4gICAgICAgIGlkOiBwbGFuLmlkLFxyXG4gICAgICAgIGlkTWFzdGVyUGxhblZpc2l0OiBwbGFuLmlkLFxyXG4gICAgICAgIG5vbW9yRG9rdW1lbjogcGxhbi5ub21vckRva3VtZW4sXHJcbiAgICAgICAgY2F0YXRhbjogc3RhdGUudmlzaXRQbGFuUmVkdWNlci5jYXRhdGFuLFxyXG4gICAgICAgIGlzQ2hlY2tJbjogdHJ1ZSxcclxuICAgICAgICBjaGVja0luRGF0ZTogc3RhdGUudmlzaXRQbGFuUmVkdWNlci5jaGVja0luLFxyXG4gICAgICAgIGlzQ2hlY2tPdXQ6IHRydWUsXHJcbiAgICAgICAgY2hlY2tPdXREYXRlOiBub3csXHJcbiAgICAgICAgY3JlYXRlZEJ5OiB1c2VyRGF0YS51c2VybmFtZSxcclxuICAgICAgICB1cGRhdGVkQnk6IHVzZXJEYXRhLnVzZXJuYW1lLFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBib2R5UG9zbSA9IHN0YXRlLnZpc2l0UGxhblJlZHVjZXIudmlzaWJpbGl0eS5tYXAoKHZhbCwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaWQ6IHBsYW4uaWQsXHJcbiAgICAgICAgICBhY3Rpdml0eVZpc2l0UGxhbklkOiBwbGFuLmlkLFxyXG4gICAgICAgICAgbm9tb3JEb2t1bWVuOiBwbGFuLm5vbW9yRG9rdW1lbixcclxuICAgICAgICAgIG5vbW9yOiBpbmRleCxcclxuICAgICAgICAgIHRpcGU6IHZhbC50eXBlLFxyXG4gICAgICAgICAgbmFtYUZpbGU6IHZhbC5maWxlLm5hbWUsXHJcbiAgICAgICAgICBjcmVhdGVkQnk6IHVzZXJEYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgICAgdXBkYXRlZEJ5OiB1c2VyRGF0YS51c2VybmFtZSxcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgYm9keVByb2R1Y3QgPSBzdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLmF2YWJpbGl0eS5tYXAoKHZhbCwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaWQ6IHBsYW4uaWQsXHJcbiAgICAgICAgICBhY3Rpdml0eVZpc2l0UGxhbklkOiBwbGFuLmlkLFxyXG4gICAgICAgICAgbm9tb3JEb2t1bWVuOiBwbGFuLm5vbW9yRG9rdW1lbixcclxuICAgICAgICAgIG5vbW9yOiBpbmRleCxcclxuICAgICAgICAgIGtvZGVQcm9kdWs6IHZhbC5wcm9kdWN0Rm9jdXMucHJvZHVrSUQsXHJcbiAgICAgICAgICBuYW1hUHJvZHVrOiB2YWwucHJvZHVjdEZvY3VzLm5hbWFQcm9kdWssXHJcbiAgICAgICAgICBzdG9rOiB2YWwuc3RvY2ssXHJcbiAgICAgICAgICBzYXJhbk9yZGVyOiB2YWwuc2FyYW5PcmRlcixcclxuICAgICAgICAgIGp1bWxhaE9yZGVyOiB2YWwub3JkZXIsXHJcbiAgICAgICAgICBjcmVhdGVkQnk6IHVzZXJEYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgICAgdXBkYXRlZEJ5OiB1c2VyRGF0YS51c2VybmFtZSxcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuICAgICAgLy8gaHR0cDovLzEwLjEwMC40LjExNjo4MjMwL2FwaS9BY3Rpdml0eVZpc2l0UGxhbi9TYXZlQWN0aXZpdHlWaXNpdFBsYW5cclxuICAgICAgLy8gaHR0cDovLzEwLjEwMC40LjExNjo4MjMwL2FwaS9BY3Rpdml0eVZpc2l0UGxhbkRQT1NNL1NhdmVBY3Rpdml0eVZpc2l0UGxhbkRwb3NtXHJcbiAgICAgIC8vIGh0dHA6Ly8xMC4xMDAuNC4xMTY6ODIzMC9hcGkvQWN0aXZpdHlWaXNpdFBsYW5EUHJvZHVjdC9TYXZlQWN0aXZpdHlWaXNpdFBsYW5EUHJvZHVjdFxyXG4gICAgICBjb25zb2xlLmxvZyhib2R5UGxhbiwgYm9keVBvc20sIGJvZHlQcm9kdWN0KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAobG9hZGluZykge1xyXG4gICAgICByZXR1cm4gPFNwaW5uZXIgLz47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxOYXZcclxuICAgICAgICAgICAgICB0aXRsZT17XCJQbGFuXCJ9XHJcbiAgICAgICAgICAgICAgY29sb3I9e1wid2hpdGVcIn1cclxuICAgICAgICAgICAgICBhY3Rpb249e1wiU3VibWl0XCJ9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQoKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGJhY2tBY3Rpb249eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgY29uZmlybShcclxuICAgICAgICAgICAgICAgICAgICBcIkRhdGEgd2lsbCBiZSBsb3N0IGlmIHlvdSBsZWF2ZSB0aGUgcGFnZSwgYXJlIHlvdSBzdXJlP1wiXHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICBhY3Rpb25zLnNldERlZmF1bHRWaXNpdFBsYW4oKTtcclxuICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvdmlzaXQvcGxhblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PntyZW5kZXJEZXRhaWwoKX08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIHJlbmRlcigpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=