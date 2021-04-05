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
          nomor: index,
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
          nomor: index,
          kodeProduk: val.productFocus.produkID,
          namaProduk: val.productFocus.namaProduk,
          stok: parseInt(val.stock),
          saranOrder: parseInt(val.saranOrder),
          jumlahOrder: parseInt(val.order),
          createdBy: userData.username,
          updatedBy: userData.username
        };
      });
      var data = {
        avp: bodyPlan,
        dposmList: bodyPosm,
        dProductList: bodyProduct
      };
      Object(_helper__WEBPACK_IMPORTED_MODULE_10__["submitVisitPlan"])(data).then(function (res) {
        console.log(res);
        console.log("done");
        actions.setDefaultVisitPlan();
        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/");
      })["catch"](function (err) {
        console.log(err);
      });
    }
  };

  var render = function render() {
    if (loading) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 203,
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
            lineNumber: 208,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.main,
            children: renderDetail()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 206,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlzaXQvcGxhbi8vaW5kZXguanN4Il0sIm5hbWVzIjpbImluZGV4IiwidXNlQ29udGV4dCIsIlN0b3JlcyIsInN0YXRlIiwiZGlzcGF0Y2giLCJhY3Rpb25zIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInBsYW4iLCJzZXRQbGFuIiwicm91dGVyIiwidXNlUm91dGVyIiwibm93IiwiRGF0ZSIsImRhdGUiLCJnZXREYXRlIiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsInVzZUVmZmVjdCIsInF1ZXJ5IiwiaWQiLCJnZXRQbGFuSWQiLCJ0aGVuIiwic2FtZVBsYW4iLCJkYXRhIiwibGVuZ3RoIiwiUm91dGVyIiwicHVzaCIsInZpc2l0UGxhblJlZHVjZXIiLCJjaGVja0luIiwic2V0UGxhbkNoZWNrSW4iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyRGV0YWlsIiwicmVuZGVyRGF0YURldGFpbCIsImplbmlzQ2hhbm5lbCIsIm5hbWFPdXRsZXQiLCJhbGFtYXRPdXRsZXQiLCJjYXRhdGFuIiwidHlwZSIsImRvbmVGb3JtVmlzIiwidmlzaWJpbGl0eSIsImZpbHRlciIsInZhbCIsImZpbGUiLCJkb25lRm9ybUF2YSIsImF2YWJpbGl0eSIsInN0eWxlcyIsInJlbmRlcl9kYXRhIiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwiYm9yZGVyUmFkaXVzIiwicmVuZGVyX3ZhbHVlIiwid2lkdGgiLCJib3JkZXIiLCJoZWlnaHQiLCJlIiwic2V0UGxhbkNhdGF0YW4iLCJ0YXJnZXQiLCJ2YWx1ZSIsInByb2dyZXNzX2JhciIsInByb2dyZXNzX2Jhcl9ub3ciLCJvblN1Ym1pdCIsInZpc0RvbmUiLCJ1c2VyRGF0YSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJib2R5UGxhbiIsImlkTWFzdGVyUGxhblZpc2l0Iiwibm9tb3JEb2t1bWVuIiwiaXNDaGVja0luIiwiY2hlY2tJbkRhdGUiLCJ0b0lTT1N0cmluZyIsImlzQ2hlY2tPdXQiLCJjaGVja091dERhdGUiLCJjcmVhdGVkQnkiLCJ1c2VybmFtZSIsInVwZGF0ZWRCeSIsImJvZHlQb3NtIiwibWFwIiwiYWN0aXZpdHlWaXNpdFBsYW5JZCIsIm5vbW9yIiwidGlwZSIsIm5hbWFGaWxlIiwibmFtZSIsImJvZHlQcm9kdWN0Iiwia29kZVByb2R1ayIsInByb2R1Y3RGb2N1cyIsInByb2R1a0lEIiwibmFtYVByb2R1ayIsInN0b2siLCJwYXJzZUludCIsInN0b2NrIiwic2FyYW5PcmRlciIsImp1bWxhaE9yZGVyIiwib3JkZXIiLCJhdnAiLCJkcG9zbUxpc3QiLCJkUHJvZHVjdExpc3QiLCJzdWJtaXRWaXNpdFBsYW4iLCJyZXMiLCJzZXREZWZhdWx0VmlzaXRQbGFuIiwicmVuZGVyIiwiY29udGFpbmVyIiwid3JhcHBlciIsImNvbmZpcm0iLCJtYWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUE7O0FBQUEsb0JBQ09DLHdEQUFVLENBQUNDLDZDQUFELENBRGpCO0FBQUEsTUFDdEJDLEtBRHNCLGVBQ3RCQSxLQURzQjtBQUFBLE1BQ2ZDLFFBRGUsZUFDZkEsUUFEZTtBQUFBLE1BQ0xDLE9BREssZUFDTEEsT0FESzs7QUFBQSxrQkFFQUMsc0RBQVEsQ0FBQyxJQUFELENBRlI7QUFBQSxNQUV2QkMsT0FGdUI7QUFBQSxNQUVkQyxVQUZjOztBQUFBLG1CQUdORixzREFBUSxDQUFDLEVBQUQsQ0FIRjtBQUFBLE1BR3ZCRyxJQUh1QjtBQUFBLE1BR2pCQyxPQUhpQjs7QUFJOUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQUlDLEdBQUcsR0FBRyxJQUFJQyxJQUFKLEVBQVY7QUFDQSxNQUFJQyxJQUFJLEdBQUdGLEdBQUcsQ0FBQ0csT0FBSixFQUFYO0FBQ0EsTUFBSUMsS0FBSyxHQUFHSixHQUFHLENBQUNLLFFBQUosS0FBaUIsQ0FBN0I7QUFDQSxNQUFJQyxJQUFJLEdBQUdOLEdBQUcsQ0FBQ08sV0FBSixFQUFYO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkO0FBQ0EsUUFBSVYsTUFBTSxDQUFDVyxLQUFQLENBQWFDLEVBQWpCLEVBQXFCO0FBQ25CQyxnRUFBUyxDQUFDYixNQUFNLENBQUNXLEtBQVAsQ0FBYUMsRUFBZCxDQUFULENBQ0dFLElBREgsQ0FDUSxnQkFBd0I7QUFBQSxZQUFyQkMsUUFBcUIsUUFBckJBLFFBQXFCO0FBQUEsWUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUM1QixZQUFJRCxRQUFRLENBQUNFLE1BQVQsSUFBbUIsQ0FBdkIsRUFBMEI7QUFDeEJDLDREQUFNLENBQUNDLElBQVAsQ0FBWSxhQUFaO0FBQ0QsU0FGRCxNQUVPO0FBQ0xwQixpQkFBTyxDQUFDaUIsSUFBRCxDQUFQO0FBQ0FuQixvQkFBVSxDQUFDLEtBQUQsQ0FBVjs7QUFDQSxjQUFJLENBQUNMLEtBQUssQ0FBQzRCLGdCQUFOLENBQXVCQyxPQUE1QixFQUFxQztBQUNuQzNCLG1CQUFPLENBQUM0QixjQUFSLENBQXVCcEIsR0FBdkI7QUFDRDtBQUNGO0FBQ0YsT0FYSCxXQVlTLFVBQUNxQixHQUFELEVBQVM7QUFDZEMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDRCxPQWRIO0FBZUQ7QUFDRixHQW5CUSxFQW1CTixDQUFDdkIsTUFBTSxDQUFDVyxLQUFQLENBQWFDLEVBQWQsQ0FuQk0sQ0FBVDs7QUFxQkEsTUFBTWMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6Qix3QkFDRTtBQUFBLGlCQUNHQyxnQkFBZ0IsQ0FBQyxlQUFELEVBQWtCN0IsSUFBSSxDQUFDOEIsWUFBdkIsQ0FEbkIsRUFFR0QsZ0JBQWdCLENBQUMsUUFBRCxFQUFXN0IsSUFBSSxDQUFDK0IsVUFBaEIsQ0FGbkIsRUFHR0YsZ0JBQWdCLENBQUMsUUFBRCxFQUFXN0IsSUFBSSxDQUFDZ0MsWUFBaEIsQ0FIbkIsRUFJR0gsZ0JBQWdCLENBQUMsU0FBRCxFQUFZN0IsSUFBSSxDQUFDaUMsT0FBakIsQ0FKbkIsRUFLR0osZ0JBQWdCLENBQUMsWUFBRCxDQUxuQixFQU1HQSxnQkFBZ0IsQ0FBQyxXQUFELENBTm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBVUQsR0FYRDs7QUFhQSxNQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNLLElBQUQsRUFBT2hCLElBQVAsRUFBZ0I7QUFDdkMsUUFBTWlCLFdBQVcsR0FBR3pDLEtBQUssQ0FBQzRCLGdCQUFOLENBQXVCYyxVQUF2QixDQUFrQ0MsTUFBbEMsQ0FBeUMsVUFBQ0MsR0FBRCxFQUFTO0FBQ3BFLGFBQU9BLEdBQUcsQ0FBQ0MsSUFBSixLQUFhLElBQWIsSUFBcUJELEdBQUcsQ0FBQ0osSUFBSixLQUFhLElBQXpDO0FBQ0QsS0FGbUIsQ0FBcEI7QUFHQSxRQUFNTSxXQUFXLEdBQUc5QyxLQUFLLENBQUM0QixnQkFBTixDQUF1Qm1CLFNBQTNDO0FBQ0Esd0JBQ0U7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVDLCtFQUFNLENBQUNDLFdBQXZCO0FBQUEsbUJBQ0dULElBREgsZUFFRTtBQUFLLGVBQUssRUFBRTtBQUFFVSxxQkFBUyxFQUFFO0FBQWIsV0FBWjtBQUFBLG9CQUNHVixJQUFJLEtBQUssWUFBVCxhQUNNQyxXQUFXLENBQUNoQixNQURsQixVQUVHZSxJQUFJLEtBQUssV0FBVCxhQUNHTSxXQUFXLENBQUNyQixNQURmLFdBRUE7QUFMTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBV0UscUVBQUMsd0RBQUQ7QUFBTSxhQUFLLEVBQUU7QUFBRTBCLG1CQUFTLEVBQUUsS0FBYjtBQUFvQkMsc0JBQVksRUFBRTtBQUFsQyxTQUFiO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFFSiwrRUFBTSxDQUFDSyxZQUF2QjtBQUFBLG9CQUNHYixJQUFJLEtBQUssU0FBVCxnQkFDQztBQUNFLGlCQUFLLEVBQUU7QUFBRWMsbUJBQUssRUFBRSxNQUFUO0FBQWlCQyxvQkFBTSxFQUFFLE1BQXpCO0FBQWlDQyxvQkFBTSxFQUFFO0FBQXpDLGFBRFQ7QUFFRSxvQkFBUSxFQUFFLGtCQUFDQyxDQUFELEVBQU87QUFDZnZELHFCQUFPLENBQUN3RCxjQUFSLENBQXVCRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBaEM7QUFDRCxhQUpIO0FBS0UsaUJBQUssRUFBRTVELEtBQUssQ0FBQzRCLGdCQUFOLENBQXVCVztBQUxoQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELEdBUUdDLElBQUksS0FBSyxZQUFULElBQXlCQSxJQUFJLEtBQUssV0FBbEMsZ0JBQ0Y7QUFBQSxvQ0FDRTtBQUFBLHdCQUNHQSxJQUFJLEtBQUssWUFBVCxnQkFDQztBQUFBLHdDQUNFO0FBQUssMkJBQVMsRUFBRVEsK0VBQU0sQ0FBQ2E7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUVFO0FBQ0UsMkJBQVMsRUFBRWIsK0VBQU0sQ0FBQ2MsZ0JBRHBCO0FBRUUsdUJBQUssRUFBRTtBQUNMUix5QkFBSyxZQUFNYixXQUFXLENBQUNoQixNQUFaLEdBQXFCLENBQXRCLEdBQTJCLEdBQWhDO0FBREE7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERCxHQVVHZSxJQUFJLEtBQUssV0FBVCxnQkFDRjtBQUFBLHdDQUNFO0FBQUssMkJBQVMsRUFBRVEsK0VBQU0sQ0FBQ2E7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUVFO0FBQ0UsMkJBQVMsRUFBRWIsK0VBQU0sQ0FBQ2MsZ0JBRHBCO0FBRUUsdUJBQUssRUFBRTtBQUNMUix5QkFBSyxZQUFNUixXQUFXLENBQUNyQixNQUFaLEdBQXFCLEVBQXRCLEdBQTRCLEdBQWpDO0FBREE7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERSxHQVdGO0FBdEJKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUEwQkUscUVBQUMsZ0RBQUQ7QUFDRSxrQkFBSSxFQUNGZSxJQUFJLEtBQUssWUFBVCx5QkFDbUJsQyxJQUFJLENBQUNjLEVBRHhCLG1CQUVJb0IsSUFBSSxLQUFLLFdBQVQseUJBQ2VsQyxJQUFJLENBQUNjLEVBRHBCLGtCQUVBLEVBTlI7QUFBQSxxQ0FTRTtBQUFBLHVDQUNFLHFFQUFDLDBEQUFEO0FBQVEsc0JBQUksRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkExQkY7QUFBQSwwQkFERSxnQkEwQ0Y7QUFBQSxzQkFBR0k7QUFBSDtBQW5ESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBc0VELEdBM0VEOztBQTZFQSxNQUFNdUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixRQUFNQyxPQUFPLEdBQUdoRSxLQUFLLENBQUM0QixnQkFBTixDQUF1QmMsVUFBdkIsQ0FBa0NDLE1BQWxDLENBQXlDLFVBQUNDLEdBQUQsRUFBUztBQUNoRSxhQUFPQSxHQUFHLENBQUNDLElBQUosS0FBYSxJQUFiLElBQXFCRCxHQUFHLENBQUNKLElBQUosS0FBYSxJQUF6QztBQUNELEtBRmUsQ0FBaEI7O0FBR0EsUUFBSXdCLE9BQU8sQ0FBQ3ZDLE1BQVIsS0FBbUIsQ0FBdkIsRUFBMEI7QUFDeEIsVUFBTXdDLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixDQUFYLENBQWpCO0FBRUEsVUFBTUMsUUFBUSxHQUFHO0FBQ2ZsRCxVQUFFLEVBQUVkLElBQUksQ0FBQ2MsRUFETTtBQUVmbUQseUJBQWlCLEVBQUVqRSxJQUFJLENBQUNjLEVBRlQ7QUFHZm9ELG9CQUFZLEVBQUVsRSxJQUFJLENBQUNrRSxZQUhKO0FBSWZqQyxlQUFPLEVBQUV2QyxLQUFLLENBQUM0QixnQkFBTixDQUF1QlcsT0FKakI7QUFLZmtDLGlCQUFTLEVBQUUsSUFMSTtBQU1mQyxtQkFBVyxFQUFFMUUsS0FBSyxDQUFDNEIsZ0JBQU4sQ0FBdUJDLE9BQXZCLENBQStCOEMsV0FBL0IsRUFORTtBQU9mQyxrQkFBVSxFQUFFLElBUEc7QUFRZkMsb0JBQVksRUFBRW5FLEdBQUcsQ0FBQ2lFLFdBQUosRUFSQztBQVNmRyxpQkFBUyxFQUFFYixRQUFRLENBQUNjLFFBVEw7QUFVZkMsaUJBQVMsRUFBRWYsUUFBUSxDQUFDYztBQVZMLE9BQWpCO0FBWUEsVUFBTUUsUUFBUSxHQUFHakYsS0FBSyxDQUFDNEIsZ0JBQU4sQ0FBdUJjLFVBQXZCLENBQWtDd0MsR0FBbEMsQ0FBc0MsVUFBQ3RDLEdBQUQsRUFBTS9DLEtBQU4sRUFBZ0I7QUFDckUsZUFBTztBQUNMdUIsWUFBRSxFQUFFd0IsR0FBRyxDQUFDSixJQUFKLENBQVNwQixFQURSO0FBRUwrRCw2QkFBbUIsRUFBRTdFLElBQUksQ0FBQ2MsRUFGckI7QUFHTG9ELHNCQUFZLEVBQUVsRSxJQUFJLENBQUNrRSxZQUhkO0FBSUxZLGVBQUssRUFBRXZGLEtBSkY7QUFLTHdGLGNBQUksRUFBRXpDLEdBQUcsQ0FBQ0osSUFBSixDQUFTNkMsSUFMVjtBQU1MQyxrQkFBUSxFQUFFMUMsR0FBRyxDQUFDQyxJQUFKLENBQVMwQyxJQU5kO0FBT0xULG1CQUFTLEVBQUViLFFBQVEsQ0FBQ2MsUUFQZjtBQVFMQyxtQkFBUyxFQUFFZixRQUFRLENBQUNjO0FBUmYsU0FBUDtBQVVELE9BWGdCLENBQWpCO0FBWUEsVUFBTVMsV0FBVyxHQUFHeEYsS0FBSyxDQUFDNEIsZ0JBQU4sQ0FBdUJtQixTQUF2QixDQUFpQ21DLEdBQWpDLENBQXFDLFVBQUN0QyxHQUFELEVBQU0vQyxLQUFOLEVBQWdCO0FBQ3ZFLGVBQU87QUFDTDtBQUNBdUIsWUFBRSxFQUFFZCxJQUFJLENBQUNjLEVBRko7QUFHTCtELDZCQUFtQixFQUFFN0UsSUFBSSxDQUFDYyxFQUhyQjtBQUlMb0Qsc0JBQVksRUFBRWxFLElBQUksQ0FBQ2tFLFlBSmQ7QUFLTFksZUFBSyxFQUFFdkYsS0FMRjtBQU1MNEYsb0JBQVUsRUFBRTdDLEdBQUcsQ0FBQzhDLFlBQUosQ0FBaUJDLFFBTnhCO0FBT0xDLG9CQUFVLEVBQUVoRCxHQUFHLENBQUM4QyxZQUFKLENBQWlCRSxVQVB4QjtBQVFMQyxjQUFJLEVBQUVDLFFBQVEsQ0FBQ2xELEdBQUcsQ0FBQ21ELEtBQUwsQ0FSVDtBQVNMQyxvQkFBVSxFQUFFRixRQUFRLENBQUNsRCxHQUFHLENBQUNvRCxVQUFMLENBVGY7QUFVTEMscUJBQVcsRUFBRUgsUUFBUSxDQUFDbEQsR0FBRyxDQUFDc0QsS0FBTCxDQVZoQjtBQVdMcEIsbUJBQVMsRUFBRWIsUUFBUSxDQUFDYyxRQVhmO0FBWUxDLG1CQUFTLEVBQUVmLFFBQVEsQ0FBQ2M7QUFaZixTQUFQO0FBY0QsT0FmbUIsQ0FBcEI7QUFnQkEsVUFBSXZELElBQUksR0FBRztBQUNUMkUsV0FBRyxFQUFFN0IsUUFESTtBQUVUOEIsaUJBQVMsRUFBRW5CLFFBRkY7QUFHVG9CLG9CQUFZLEVBQUViO0FBSEwsT0FBWDtBQUtBYyxzRUFBZSxDQUFDOUUsSUFBRCxDQUFmLENBQ0dGLElBREgsQ0FDUSxVQUFDaUYsR0FBRCxFQUFTO0FBQ2J2RSxlQUFPLENBQUNDLEdBQVIsQ0FBWXNFLEdBQVo7QUFDQXZFLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDQS9CLGVBQU8sQ0FBQ3NHLG1CQUFSO0FBQ0E5RSwwREFBTSxDQUFDQyxJQUFQLENBQVksR0FBWjtBQUNELE9BTkgsV0FPUyxVQUFDSSxHQUFELEVBQVM7QUFDZEMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDRCxPQVRIO0FBVUQ7QUFDRixHQS9ERDs7QUFpRUEsTUFBTTBFLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkIsUUFBSXJHLE9BQUosRUFBYTtBQUNYLDBCQUFPLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELEtBRkQsTUFFTztBQUNMLDBCQUNFO0FBQUssaUJBQVMsRUFBRTRDLCtFQUFNLENBQUMwRCxTQUF2QjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBRTFELCtFQUFNLENBQUMyRCxPQUF2QjtBQUFBLGtDQUNFLHFFQUFDLHVEQUFEO0FBQ0UsaUJBQUssRUFBRSxNQURUO0FBRUUsaUJBQUssRUFBRSxPQUZUO0FBR0Usa0JBQU0sRUFBRSxRQUhWO0FBSUUsbUJBQU8sRUFBRSxtQkFBTTtBQUNiNUMsc0JBQVE7QUFDVCxhQU5IO0FBT0Usc0JBQVUsRUFBRSxzQkFBTTtBQUNoQixrQkFDRTZDLE9BQU8sQ0FDTCx3REFESyxDQURULEVBSUU7QUFDQTFHLHVCQUFPLENBQUNzRyxtQkFBUjtBQUNBOUUsa0VBQU0sQ0FBQ0MsSUFBUCxDQUFZLGFBQVo7QUFDRDtBQUNGO0FBaEJIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFtQkU7QUFBSyxxQkFBUyxFQUFFcUIsK0VBQU0sQ0FBQzZELElBQXZCO0FBQUEsc0JBQThCM0UsWUFBWTtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUF5QkQ7QUFDRixHQTlCRDs7QUFnQ0EsU0FBT3VFLE1BQU0sRUFBYjtBQUNEOztHQTNOdUI1RyxLO1VBSVBZLHFEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Zpc2l0L3BsYW4vW2lkXS5lY2I1M2M4MDI5YWQ5N2JiNzkyYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi8uLi9zdHlsZXMvcGFnZXMvVmlzaXRQbGFuRGV0YWlsLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCB7IFN0b3JlcyB9IGZyb20gXCIuLi8uLi8uLi8uLi9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IE5hdiBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9OYXZcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvQ2FyZFwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9TcGlubmVyXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvQnV0dG9uXCI7XHJcblxyXG5pbXBvcnQgeyBnZXRQbGFuSWQsIHN1Ym1pdFZpc2l0UGxhbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9oZWxwZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluZGV4KCkge1xyXG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoLCBhY3Rpb25zIH0gPSB1c2VDb250ZXh0KFN0b3Jlcyk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3BsYW4sIHNldFBsYW5dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gIHZhciBkYXRlID0gbm93LmdldERhdGUoKTtcclxuICB2YXIgbW9udGggPSBub3cuZ2V0TW9udGgoKSArIDE7XHJcbiAgdmFyIHllYXIgPSBub3cuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgL0dldEFsbE1hc3RlclZpc2l0UGxhblwiXHJcbiAgICBpZiAocm91dGVyLnF1ZXJ5LmlkKSB7XHJcbiAgICAgIGdldFBsYW5JZChyb3V0ZXIucXVlcnkuaWQpXHJcbiAgICAgICAgLnRoZW4oKHsgc2FtZVBsYW4sIGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHNhbWVQbGFuLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL3Zpc2l0L3BsYW5cIik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRQbGFuKGRhdGEpO1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKCFzdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLmNoZWNrSW4pIHtcclxuICAgICAgICAgICAgICBhY3Rpb25zLnNldFBsYW5DaGVja0luKG5vdyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIucXVlcnkuaWRdKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRGV0YWlsID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7cmVuZGVyRGF0YURldGFpbChcIkplbmlzIENoYW5uZWxcIiwgcGxhbi5qZW5pc0NoYW5uZWwpfVxyXG4gICAgICAgIHtyZW5kZXJEYXRhRGV0YWlsKFwiT3V0bGV0XCIsIHBsYW4ubmFtYU91dGxldCl9XHJcbiAgICAgICAge3JlbmRlckRhdGFEZXRhaWwoXCJBbGFtYXRcIiwgcGxhbi5hbGFtYXRPdXRsZXQpfVxyXG4gICAgICAgIHtyZW5kZXJEYXRhRGV0YWlsKFwiQ2F0YXRhblwiLCBwbGFuLmNhdGF0YW4pfVxyXG4gICAgICAgIHtyZW5kZXJEYXRhRGV0YWlsKFwiVmlzaWJpbGl0eVwiKX1cclxuICAgICAgICB7cmVuZGVyRGF0YURldGFpbChcIkF2YWJpbGl0eVwiKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckRhdGFEZXRhaWwgPSAodHlwZSwgZGF0YSkgPT4ge1xyXG4gICAgY29uc3QgZG9uZUZvcm1WaXMgPSBzdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLnZpc2liaWxpdHkuZmlsdGVyKCh2YWwpID0+IHtcclxuICAgICAgcmV0dXJuIHZhbC5maWxlICE9PSBudWxsICYmIHZhbC50eXBlICE9PSBudWxsO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBkb25lRm9ybUF2YSA9IHN0YXRlLnZpc2l0UGxhblJlZHVjZXIuYXZhYmlsaXR5O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlbmRlcl9kYXRhfT5cclxuICAgICAgICAgIHt0eXBlfVxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwicmlnaHRcIiB9fT5cclxuICAgICAgICAgICAge3R5cGUgPT09IFwiVmlzaWJpbGl0eVwiXHJcbiAgICAgICAgICAgICAgPyBgJHtkb25lRm9ybVZpcy5sZW5ndGh9LzZgXHJcbiAgICAgICAgICAgICAgOiB0eXBlID09PSBcIkF2YWJpbGl0eVwiXHJcbiAgICAgICAgICAgICAgPyBgJHtkb25lRm9ybUF2YS5sZW5ndGh9LzI1YFxyXG4gICAgICAgICAgICAgIDogXCJcIn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpblRvcDogXCI2cHhcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZW5kZXJfdmFsdWV9PlxyXG4gICAgICAgICAgICB7dHlwZSA9PT0gXCJDYXRhdGFuXCIgPyAoXHJcbiAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGJvcmRlcjogXCJub25lXCIsIGhlaWdodDogXCI3MHB4XCIgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBhY3Rpb25zLnNldFBsYW5DYXRhdGFuKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUudmlzaXRQbGFuUmVkdWNlci5jYXRhdGFufVxyXG4gICAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICApIDogdHlwZSA9PT0gXCJWaXNpYmlsaXR5XCIgfHwgdHlwZSA9PT0gXCJBdmFiaWxpdHlcIiA/IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAge3R5cGUgPT09IFwiVmlzaWJpbGl0eVwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcn0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcl9ub3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGAkeyhkb25lRm9ybVZpcy5sZW5ndGggLyA2KSAqIDEwMH0lYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKSA6IHR5cGUgPT09IFwiQXZhYmlsaXR5XCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfYmFyfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfYmFyX25vd31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYCR7KGRvbmVGb3JtQXZhLmxlbmd0aCAvIDI1KSAqIDEwMH0lYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9e1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPT09IFwiVmlzaWJpbGl0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IGAvdmlzaXQvcGxhbi8ke3BsYW4uaWR9L3Zpc2liaWxpdHlgXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IHR5cGUgPT09IFwiQXZhYmlsaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgID8gYC92aXNpdC9wbGFuLyR7cGxhbi5pZH0vYXZhYmlsaXR5YFxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQWRkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDw+e2RhdGF9PC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHZpc0RvbmUgPSBzdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLnZpc2liaWxpdHkuZmlsdGVyKCh2YWwpID0+IHtcclxuICAgICAgcmV0dXJuIHZhbC5maWxlICE9PSBudWxsICYmIHZhbC50eXBlICE9PSBudWxsO1xyXG4gICAgfSk7XHJcbiAgICBpZiAodmlzRG9uZS5sZW5ndGggPT09IDYpIHtcclxuICAgICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XHJcblxyXG4gICAgICBjb25zdCBib2R5UGxhbiA9IHtcclxuICAgICAgICBpZDogcGxhbi5pZCxcclxuICAgICAgICBpZE1hc3RlclBsYW5WaXNpdDogcGxhbi5pZCxcclxuICAgICAgICBub21vckRva3VtZW46IHBsYW4ubm9tb3JEb2t1bWVuLFxyXG4gICAgICAgIGNhdGF0YW46IHN0YXRlLnZpc2l0UGxhblJlZHVjZXIuY2F0YXRhbixcclxuICAgICAgICBpc0NoZWNrSW46IHRydWUsXHJcbiAgICAgICAgY2hlY2tJbkRhdGU6IHN0YXRlLnZpc2l0UGxhblJlZHVjZXIuY2hlY2tJbi50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIGlzQ2hlY2tPdXQ6IHRydWUsXHJcbiAgICAgICAgY2hlY2tPdXREYXRlOiBub3cudG9JU09TdHJpbmcoKSxcclxuICAgICAgICBjcmVhdGVkQnk6IHVzZXJEYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgIHVwZGF0ZWRCeTogdXNlckRhdGEudXNlcm5hbWUsXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IGJvZHlQb3NtID0gc3RhdGUudmlzaXRQbGFuUmVkdWNlci52aXNpYmlsaXR5Lm1hcCgodmFsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBpZDogdmFsLnR5cGUuaWQsXHJcbiAgICAgICAgICBhY3Rpdml0eVZpc2l0UGxhbklkOiBwbGFuLmlkLFxyXG4gICAgICAgICAgbm9tb3JEb2t1bWVuOiBwbGFuLm5vbW9yRG9rdW1lbixcclxuICAgICAgICAgIG5vbW9yOiBpbmRleCxcclxuICAgICAgICAgIHRpcGU6IHZhbC50eXBlLnRpcGUsXHJcbiAgICAgICAgICBuYW1hRmlsZTogdmFsLmZpbGUubmFtZSxcclxuICAgICAgICAgIGNyZWF0ZWRCeTogdXNlckRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgICB1cGRhdGVkQnk6IHVzZXJEYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBib2R5UHJvZHVjdCA9IHN0YXRlLnZpc2l0UGxhblJlZHVjZXIuYXZhYmlsaXR5Lm1hcCgodmFsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAvLyBpZDogdmFsLnByb2R1Y3RGb2N1cy5wcm9kdWtJRCxcclxuICAgICAgICAgIGlkOiBwbGFuLmlkLFxyXG4gICAgICAgICAgYWN0aXZpdHlWaXNpdFBsYW5JZDogcGxhbi5pZCxcclxuICAgICAgICAgIG5vbW9yRG9rdW1lbjogcGxhbi5ub21vckRva3VtZW4sXHJcbiAgICAgICAgICBub21vcjogaW5kZXgsXHJcbiAgICAgICAgICBrb2RlUHJvZHVrOiB2YWwucHJvZHVjdEZvY3VzLnByb2R1a0lELFxyXG4gICAgICAgICAgbmFtYVByb2R1azogdmFsLnByb2R1Y3RGb2N1cy5uYW1hUHJvZHVrLFxyXG4gICAgICAgICAgc3RvazogcGFyc2VJbnQodmFsLnN0b2NrKSxcclxuICAgICAgICAgIHNhcmFuT3JkZXI6IHBhcnNlSW50KHZhbC5zYXJhbk9yZGVyKSxcclxuICAgICAgICAgIGp1bWxhaE9yZGVyOiBwYXJzZUludCh2YWwub3JkZXIpLFxyXG4gICAgICAgICAgY3JlYXRlZEJ5OiB1c2VyRGF0YS51c2VybmFtZSxcclxuICAgICAgICAgIHVwZGF0ZWRCeTogdXNlckRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcbiAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgIGF2cDogYm9keVBsYW4sXHJcbiAgICAgICAgZHBvc21MaXN0OiBib2R5UG9zbSxcclxuICAgICAgICBkUHJvZHVjdExpc3Q6IGJvZHlQcm9kdWN0LFxyXG4gICAgICB9O1xyXG4gICAgICBzdWJtaXRWaXNpdFBsYW4oZGF0YSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJkb25lXCIpO1xyXG4gICAgICAgICAgYWN0aW9ucy5zZXREZWZhdWx0VmlzaXRQbGFuKCk7XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAobG9hZGluZykge1xyXG4gICAgICByZXR1cm4gPFNwaW5uZXIgLz47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxOYXZcclxuICAgICAgICAgICAgICB0aXRsZT17XCJQbGFuXCJ9XHJcbiAgICAgICAgICAgICAgY29sb3I9e1wid2hpdGVcIn1cclxuICAgICAgICAgICAgICBhY3Rpb249e1wiU3VibWl0XCJ9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQoKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGJhY2tBY3Rpb249eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgY29uZmlybShcclxuICAgICAgICAgICAgICAgICAgICBcIkRhdGEgd2lsbCBiZSBsb3N0IGlmIHlvdSBsZWF2ZSB0aGUgcGFnZSwgYXJlIHlvdSBzdXJlP1wiXHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICBhY3Rpb25zLnNldERlZmF1bHRWaXNpdFBsYW4oKTtcclxuICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvdmlzaXQvcGxhblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PntyZW5kZXJEZXRhaWwoKX08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiByZW5kZXIoKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9