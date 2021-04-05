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
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../helper */ "./helper.js");



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
  var now = new Date();
  var date = now.getDate();
  var month = now.getMonth() + 1;
  var year = now.getFullYear();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    //   /GetAllMasterVisitPlan"
    if (router.query.id) {
      Object(_helper__WEBPACK_IMPORTED_MODULE_10__["getPlanId"])(router.query.id).then(function (_ref) {
        var samePlan = _ref.samePlan,
            data = _ref.data;

        if (samePlan.length == 0) {
          next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/visit/plan");
        } else {
          setPlan(data);
          setLoading(false);

          if (!state.visitPlanReducer.checkIn) {
            actions.setPlanCheckIn(now);
          }
        }
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
      lineNumber: 48,
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
          lineNumber: 68,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
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
              actions.setPlanCatatan(e.target.value);
            },
            value: state.visitPlanReducer.catatan
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
              href: type === "Visibility" ? "/visit/plan/".concat(plan.id, "/visibility") : type === "Avability" ? "/visit/plan/".concat(plan.id, "/avability") : "",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
        checkInDate: state.visitPlanReducer.checkIn.toISOString(),
        isCheckOut: true,
        checkOutDate: now.toISOString(),
        createdBy: userData.username,
        updatedBy: userData.username
      };
      var bodyPosm = state.visitPlanReducer.visibility.map(function (val, index) {
        return {
          id: val.type.id,
          activityVisitPlanId: plan.id,
          nomorDokumen: plan.nomorDokumen,
          nomor: toString(index),
          tipe: val.type.tipe,
          namaFile: val.file.name,
          createdBy: userData.username,
          updatedBy: userData.username
        };
      });
      var bodyProduct = state.visitPlanReducer.avability.map(function (val, index) {
        return {
          // id: val.productFocus.produkID,
          id: plan.id,
          activityVisitPlanId: plan.id,
          nomorDokumen: plan.nomorDokumen,
          nomor: toString(index),
          kodeProduk: val.productFocus.produkID,
          namaProduk: val.productFocus.namaProduk,
          stok: val.stock,
          saranOrder: val.saranOrder,
          jumlahOrder: val.order,
          createdBy: userData.username,
          updatedBy: userData.username
        };
      }); // console.log(state.visitPlanReducer.visibility);
      // console.log(state.visitPlanReducer.avability);
      // console.log(bodyPlan, bodyPosm, bodyProduct);

      var data = {
        avp: bodyPlan,
        dposmList: bodyPosm,
        dProductList: bodyProduct
      };
      Object(_helper__WEBPACK_IMPORTED_MODULE_10__["submitVisitPlan"])(data).then(function (res) {
        console.log(res);
        console.log("done");
      })["catch"](function (err) {
        console.log(err);
      });
    }
  };

  var render = function render() {
    if (loading) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 204,
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
            lineNumber: 209,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.main,
            children: renderDetail()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 207,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlzaXQvcGxhbi8vaW5kZXguanN4Il0sIm5hbWVzIjpbImluZGV4IiwidXNlQ29udGV4dCIsIlN0b3JlcyIsInN0YXRlIiwiZGlzcGF0Y2giLCJhY3Rpb25zIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInBsYW4iLCJzZXRQbGFuIiwicm91dGVyIiwidXNlUm91dGVyIiwibm93IiwiRGF0ZSIsImRhdGUiLCJnZXREYXRlIiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsInVzZUVmZmVjdCIsInF1ZXJ5IiwiaWQiLCJnZXRQbGFuSWQiLCJ0aGVuIiwic2FtZVBsYW4iLCJkYXRhIiwibGVuZ3RoIiwiUm91dGVyIiwicHVzaCIsInZpc2l0UGxhblJlZHVjZXIiLCJjaGVja0luIiwic2V0UGxhbkNoZWNrSW4iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyRGV0YWlsIiwicmVuZGVyRGF0YURldGFpbCIsImplbmlzQ2hhbm5lbCIsIm5hbWFPdXRsZXQiLCJhbGFtYXRPdXRsZXQiLCJjYXRhdGFuIiwidHlwZSIsImRvbmVGb3JtVmlzIiwidmlzaWJpbGl0eSIsImZpbHRlciIsInZhbCIsImZpbGUiLCJkb25lRm9ybUF2YSIsImF2YWJpbGl0eSIsInN0eWxlcyIsInJlbmRlcl9kYXRhIiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwiYm9yZGVyUmFkaXVzIiwicmVuZGVyX3ZhbHVlIiwid2lkdGgiLCJib3JkZXIiLCJoZWlnaHQiLCJlIiwic2V0UGxhbkNhdGF0YW4iLCJ0YXJnZXQiLCJ2YWx1ZSIsInByb2dyZXNzX2JhciIsInByb2dyZXNzX2Jhcl9ub3ciLCJvblN1Ym1pdCIsInZpc0RvbmUiLCJ1c2VyRGF0YSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJib2R5UGxhbiIsImlkTWFzdGVyUGxhblZpc2l0Iiwibm9tb3JEb2t1bWVuIiwiaXNDaGVja0luIiwiY2hlY2tJbkRhdGUiLCJ0b0lTT1N0cmluZyIsImlzQ2hlY2tPdXQiLCJjaGVja091dERhdGUiLCJjcmVhdGVkQnkiLCJ1c2VybmFtZSIsInVwZGF0ZWRCeSIsImJvZHlQb3NtIiwibWFwIiwiYWN0aXZpdHlWaXNpdFBsYW5JZCIsIm5vbW9yIiwidG9TdHJpbmciLCJ0aXBlIiwibmFtYUZpbGUiLCJuYW1lIiwiYm9keVByb2R1Y3QiLCJrb2RlUHJvZHVrIiwicHJvZHVjdEZvY3VzIiwicHJvZHVrSUQiLCJuYW1hUHJvZHVrIiwic3RvayIsInN0b2NrIiwic2FyYW5PcmRlciIsImp1bWxhaE9yZGVyIiwib3JkZXIiLCJhdnAiLCJkcG9zbUxpc3QiLCJkUHJvZHVjdExpc3QiLCJzdWJtaXRWaXNpdFBsYW4iLCJyZXMiLCJyZW5kZXIiLCJjb250YWluZXIiLCJ3cmFwcGVyIiwiY29uZmlybSIsInNldERlZmF1bHRWaXNpdFBsYW4iLCJtYWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUE7O0FBQUEsb0JBQ09DLHdEQUFVLENBQUNDLDZDQUFELENBRGpCO0FBQUEsTUFDdEJDLEtBRHNCLGVBQ3RCQSxLQURzQjtBQUFBLE1BQ2ZDLFFBRGUsZUFDZkEsUUFEZTtBQUFBLE1BQ0xDLE9BREssZUFDTEEsT0FESzs7QUFBQSxrQkFFQUMsc0RBQVEsQ0FBQyxJQUFELENBRlI7QUFBQSxNQUV2QkMsT0FGdUI7QUFBQSxNQUVkQyxVQUZjOztBQUFBLG1CQUdORixzREFBUSxDQUFDLEVBQUQsQ0FIRjtBQUFBLE1BR3ZCRyxJQUh1QjtBQUFBLE1BR2pCQyxPQUhpQjs7QUFJOUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQUlDLEdBQUcsR0FBRyxJQUFJQyxJQUFKLEVBQVY7QUFDQSxNQUFJ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QUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsMEJBQ0U7QUFBSyxpQkFBUyxFQUFFNEMsK0VBQU0sQ0FBQ3lELFNBQXZCO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFFekQsK0VBQU0sQ0FBQzBELE9BQXZCO0FBQUEsa0NBQ0UscUVBQUMsdURBQUQ7QUFDRSxpQkFBSyxFQUFFLE1BRFQ7QUFFRSxpQkFBSyxFQUFFLE9BRlQ7QUFHRSxrQkFBTSxFQUFFLFFBSFY7QUFJRSxtQkFBTyxFQUFFLG1CQUFNO0FBQ2IzQyxzQkFBUTtBQUNULGFBTkg7QUFPRSxzQkFBVSxFQUFFLHNCQUFNO0FBQ2hCLGtCQUNFNEMsT0FBTyxDQUNMLHdEQURLLENBRFQsRUFJRTtBQUNBekcsdUJBQU8sQ0FBQzBHLG1CQUFSO0FBQ0FsRixrRUFBTSxDQUFDQyxJQUFQLENBQVksYUFBWjtBQUNEO0FBQ0Y7QUFoQkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQW1CRTtBQUFLLHFCQUFTLEVBQUVxQiwrRUFBTSxDQUFDNkQsSUFBdkI7QUFBQSxzQkFBOEIzRSxZQUFZO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXlCRDtBQUNGLEdBOUJEOztBQWdDQSxTQUFPc0UsTUFBTSxFQUFiO0FBQ0Q7O0dBNU51QjNHLEs7VUFJUFkscUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmlzaXQvcGxhbi9baWRdLjdmZDU1OTdlZTQ1YTU1ZGVlOGRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uLy4uL3N0eWxlcy9wYWdlcy9WaXNpdFBsYW5EZXRhaWwubW9kdWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IHsgU3RvcmVzIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgTmF2IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL05hdlwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9DYXJkXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL1NwaW5uZXJcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9CdXR0b25cIjtcclxuXHJcbmltcG9ydCB7IGdldFBsYW5JZCwgc3VibWl0VmlzaXRQbGFuIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2hlbHBlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXgoKSB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2gsIGFjdGlvbnMgfSA9IHVzZUNvbnRleHQoU3RvcmVzKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbcGxhbiwgc2V0UGxhbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgdmFyIGRhdGUgPSBub3cuZ2V0RGF0ZSgpO1xyXG4gIHZhciBtb250aCA9IG5vdy5nZXRNb250aCgpICsgMTtcclxuICB2YXIgeWVhciA9IG5vdy5nZXRGdWxsWWVhcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAvR2V0QWxsTWFzdGVyVmlzaXRQbGFuXCJcclxuICAgIGlmIChyb3V0ZXIucXVlcnkuaWQpIHtcclxuICAgICAgZ2V0UGxhbklkKHJvdXRlci5xdWVyeS5pZClcclxuICAgICAgICAudGhlbigoeyBzYW1lUGxhbiwgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICBpZiAoc2FtZVBsYW4ubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvdmlzaXQvcGxhblwiKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFBsYW4oZGF0YSk7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICBpZiAoIXN0YXRlLnZpc2l0UGxhblJlZHVjZXIuY2hlY2tJbikge1xyXG4gICAgICAgICAgICAgIGFjdGlvbnMuc2V0UGxhbkNoZWNrSW4obm93KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlci5xdWVyeS5pZF0pO1xyXG5cclxuICBjb25zdCByZW5kZXJEZXRhaWwgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtyZW5kZXJEYXRhRGV0YWlsKFwiSmVuaXMgQ2hhbm5lbFwiLCBwbGFuLmplbmlzQ2hhbm5lbCl9XHJcbiAgICAgICAge3JlbmRlckRhdGFEZXRhaWwoXCJPdXRsZXRcIiwgcGxhbi5uYW1hT3V0bGV0KX1cclxuICAgICAgICB7cmVuZGVyRGF0YURldGFpbChcIkFsYW1hdFwiLCBwbGFuLmFsYW1hdE91dGxldCl9XHJcbiAgICAgICAge3JlbmRlckRhdGFEZXRhaWwoXCJDYXRhdGFuXCIsIHBsYW4uY2F0YXRhbil9XHJcbiAgICAgICAge3JlbmRlckRhdGFEZXRhaWwoXCJWaXNpYmlsaXR5XCIpfVxyXG4gICAgICAgIHtyZW5kZXJEYXRhRGV0YWlsKFwiQXZhYmlsaXR5XCIpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRGF0YURldGFpbCA9ICh0eXBlLCBkYXRhKSA9PiB7XHJcbiAgICBjb25zdCBkb25lRm9ybVZpcyA9IHN0YXRlLnZpc2l0UGxhblJlZHVjZXIudmlzaWJpbGl0eS5maWx0ZXIoKHZhbCkgPT4ge1xyXG4gICAgICByZXR1cm4gdmFsLmZpbGUgIT09IG51bGwgJiYgdmFsLnR5cGUgIT09IG51bGw7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGRvbmVGb3JtQXZhID0gc3RhdGUudmlzaXRQbGFuUmVkdWNlci5hdmFiaWxpdHk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVuZGVyX2RhdGF9PlxyXG4gICAgICAgICAge3R5cGV9XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJyaWdodFwiIH19PlxyXG4gICAgICAgICAgICB7dHlwZSA9PT0gXCJWaXNpYmlsaXR5XCJcclxuICAgICAgICAgICAgICA/IGAke2RvbmVGb3JtVmlzLmxlbmd0aH0vNmBcclxuICAgICAgICAgICAgICA6IHR5cGUgPT09IFwiQXZhYmlsaXR5XCJcclxuICAgICAgICAgICAgICA/IGAke2RvbmVGb3JtQXZhLmxlbmd0aH0vMjVgXHJcbiAgICAgICAgICAgICAgOiBcIlwifVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjZweFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlbmRlcl92YWx1ZX0+XHJcbiAgICAgICAgICAgIHt0eXBlID09PSBcIkNhdGF0YW5cIiA/IChcclxuICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgYm9yZGVyOiBcIm5vbmVcIiwgaGVpZ2h0OiBcIjcwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbnMuc2V0UGxhbkNhdGF0YW4oZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLmNhdGF0YW59XHJcbiAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICkgOiB0eXBlID09PSBcIlZpc2liaWxpdHlcIiB8fCB0eXBlID09PSBcIkF2YWJpbGl0eVwiID8gKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7dHlwZSA9PT0gXCJWaXNpYmlsaXR5XCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfYmFyfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfYmFyX25vd31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYCR7KGRvbmVGb3JtVmlzLmxlbmd0aCAvIDYpICogMTAwfSVgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApIDogdHlwZSA9PT0gXCJBdmFiaWxpdHlcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJ9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJfbm93fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHsoZG9uZUZvcm1BdmEubGVuZ3RoIC8gMjUpICogMTAwfSVgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgaHJlZj17XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gXCJWaXNpYmlsaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgID8gYC92aXNpdC9wbGFuLyR7cGxhbi5pZH0vdmlzaWJpbGl0eWBcclxuICAgICAgICAgICAgICAgICAgICAgIDogdHlwZSA9PT0gXCJBdmFiaWxpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBgL3Zpc2l0L3BsYW4vJHtwbGFuLmlkfS9hdmFiaWxpdHlgXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJBZGRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPD57ZGF0YX08Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdmlzRG9uZSA9IHN0YXRlLnZpc2l0UGxhblJlZHVjZXIudmlzaWJpbGl0eS5maWx0ZXIoKHZhbCkgPT4ge1xyXG4gICAgICByZXR1cm4gdmFsLmZpbGUgIT09IG51bGwgJiYgdmFsLnR5cGUgIT09IG51bGw7XHJcbiAgICB9KTtcclxuICAgIGlmICh2aXNEb25lLmxlbmd0aCA9PT0gNikge1xyXG4gICAgICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcclxuXHJcbiAgICAgIGNvbnN0IGJvZHlQbGFuID0ge1xyXG4gICAgICAgIGlkOiBwbGFuLmlkLFxyXG4gICAgICAgIGlkTWFzdGVyUGxhblZpc2l0OiBwbGFuLmlkLFxyXG4gICAgICAgIG5vbW9yRG9rdW1lbjogcGxhbi5ub21vckRva3VtZW4sXHJcbiAgICAgICAgY2F0YXRhbjogc3RhdGUudmlzaXRQbGFuUmVkdWNlci5jYXRhdGFuLFxyXG4gICAgICAgIGlzQ2hlY2tJbjogdHJ1ZSxcclxuICAgICAgICBjaGVja0luRGF0ZTogc3RhdGUudmlzaXRQbGFuUmVkdWNlci5jaGVja0luLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgaXNDaGVja091dDogdHJ1ZSxcclxuICAgICAgICBjaGVja091dERhdGU6IG5vdy50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIGNyZWF0ZWRCeTogdXNlckRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgdXBkYXRlZEJ5OiB1c2VyRGF0YS51c2VybmFtZSxcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgYm9keVBvc20gPSBzdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLnZpc2liaWxpdHkubWFwKCh2YWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGlkOiB2YWwudHlwZS5pZCxcclxuICAgICAgICAgIGFjdGl2aXR5VmlzaXRQbGFuSWQ6IHBsYW4uaWQsXHJcbiAgICAgICAgICBub21vckRva3VtZW46IHBsYW4ubm9tb3JEb2t1bWVuLFxyXG4gICAgICAgICAgbm9tb3I6IHRvU3RyaW5nKGluZGV4KSxcclxuICAgICAgICAgIHRpcGU6IHZhbC50eXBlLnRpcGUsXHJcbiAgICAgICAgICBuYW1hRmlsZTogdmFsLmZpbGUubmFtZSxcclxuICAgICAgICAgIGNyZWF0ZWRCeTogdXNlckRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgICB1cGRhdGVkQnk6IHVzZXJEYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBib2R5UHJvZHVjdCA9IHN0YXRlLnZpc2l0UGxhblJlZHVjZXIuYXZhYmlsaXR5Lm1hcCgodmFsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAvLyBpZDogdmFsLnByb2R1Y3RGb2N1cy5wcm9kdWtJRCxcclxuICAgICAgICAgIGlkOiBwbGFuLmlkLFxyXG4gICAgICAgICAgYWN0aXZpdHlWaXNpdFBsYW5JZDogcGxhbi5pZCxcclxuICAgICAgICAgIG5vbW9yRG9rdW1lbjogcGxhbi5ub21vckRva3VtZW4sXHJcbiAgICAgICAgICBub21vcjogdG9TdHJpbmcoaW5kZXgpLFxyXG4gICAgICAgICAga29kZVByb2R1azogdmFsLnByb2R1Y3RGb2N1cy5wcm9kdWtJRCxcclxuICAgICAgICAgIG5hbWFQcm9kdWs6IHZhbC5wcm9kdWN0Rm9jdXMubmFtYVByb2R1ayxcclxuICAgICAgICAgIHN0b2s6IHZhbC5zdG9jayxcclxuICAgICAgICAgIHNhcmFuT3JkZXI6IHZhbC5zYXJhbk9yZGVyLFxyXG4gICAgICAgICAganVtbGFoT3JkZXI6IHZhbC5vcmRlcixcclxuICAgICAgICAgIGNyZWF0ZWRCeTogdXNlckRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgICB1cGRhdGVkQnk6IHVzZXJEYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLnZpc2liaWxpdHkpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLmF2YWJpbGl0eSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGJvZHlQbGFuLCBib2R5UG9zbSwgYm9keVByb2R1Y3QpO1xyXG4gICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICBhdnA6IGJvZHlQbGFuLFxyXG4gICAgICAgIGRwb3NtTGlzdDogYm9keVBvc20sXHJcbiAgICAgICAgZFByb2R1Y3RMaXN0OiBib2R5UHJvZHVjdCxcclxuICAgICAgfTtcclxuICAgICAgc3VibWl0VmlzaXRQbGFuKGRhdGEpXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZG9uZVwiKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgPE5hdlxyXG4gICAgICAgICAgICAgIHRpdGxlPXtcIlBsYW5cIn1cclxuICAgICAgICAgICAgICBjb2xvcj17XCJ3aGl0ZVwifVxyXG4gICAgICAgICAgICAgIGFjdGlvbj17XCJTdWJtaXRcIn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdCgpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgYmFja0FjdGlvbj17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICBjb25maXJtKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRGF0YSB3aWxsIGJlIGxvc3QgaWYgeW91IGxlYXZlIHRoZSBwYWdlLCBhcmUgeW91IHN1cmU/XCJcclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbnMuc2V0RGVmYXVsdFZpc2l0UGxhbigpO1xyXG4gICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi92aXNpdC9wbGFuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+e3JlbmRlckRldGFpbCgpfTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHJlbmRlcigpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=