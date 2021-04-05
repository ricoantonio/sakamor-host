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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlzaXQvcGxhbi8vaW5kZXguanN4Il0sIm5hbWVzIjpbImluZGV4IiwidXNlQ29udGV4dCIsIlN0b3JlcyIsInN0YXRlIiwiZGlzcGF0Y2giLCJhY3Rpb25zIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInBsYW4iLCJzZXRQbGFuIiwicm91dGVyIiwidXNlUm91dGVyIiwibm93IiwiRGF0ZSIsImRhdGUiLCJnZXREYXRlIiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsInVzZUVmZmVjdCIsInF1ZXJ5IiwiaWQiLCJnZXRQbGFuSWQiLCJ0aGVuIiwic2FtZVBsYW4iLCJkYXRhIiwibGVuZ3RoIiwiUm91dGVyIiwicHVzaCIsInZpc2l0UGxhblJlZHVjZXIiLCJjaGVja0luIiwic2V0UGxhbkNoZWNrSW4iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyRGV0YWlsIiwicmVuZGVyRGF0YURldGFpbCIsImplbmlzQ2hhbm5lbCIsIm5hbWFPdXRsZXQiLCJhbGFtYXRPdXRsZXQiLCJjYXRhdGFuIiwidHlwZSIsImRvbmVGb3JtVmlzIiwidmlzaWJpbGl0eSIsImZpbHRlciIsInZhbCIsImZpbGUiLCJkb25lRm9ybUF2YSIsImF2YWJpbGl0eSIsInN0eWxlcyIsInJlbmRlcl9kYXRhIiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwiYm9yZGVyUmFkaXVzIiwicmVuZGVyX3ZhbHVlIiwid2lkdGgiLCJib3JkZXIiLCJoZWlnaHQiLCJlIiwic2V0UGxhbkNhdGF0YW4iLCJ0YXJnZXQiLCJ2YWx1ZSIsInByb2dyZXNzX2JhciIsInByb2dyZXNzX2Jhcl9ub3ciLCJvblN1Ym1pdCIsInZpc0RvbmUiLCJ1c2VyRGF0YSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJib2R5UGxhbiIsImlkTWFzdGVyUGxhblZpc2l0Iiwibm9tb3JEb2t1bWVuIiwiaXNDaGVja0luIiwiY2hlY2tJbkRhdGUiLCJ0b0lTT1N0cmluZyIsImlzQ2hlY2tPdXQiLCJjaGVja091dERhdGUiLCJjcmVhdGVkQnkiLCJ1c2VybmFtZSIsInVwZGF0ZWRCeSIsImJvZHlQb3NtIiwibWFwIiwiYWN0aXZpdHlWaXNpdFBsYW5JZCIsIm5vbW9yIiwidGlwZSIsIm5hbWFGaWxlIiwibmFtZSIsImJvZHlQcm9kdWN0Iiwia29kZVByb2R1ayIsInByb2R1Y3RGb2N1cyIsInByb2R1a0lEIiwibmFtYVByb2R1ayIsInN0b2siLCJzdG9jayIsInNhcmFuT3JkZXIiLCJqdW1sYWhPcmRlciIsIm9yZGVyIiwiYXZwIiwiZHBvc21MaXN0IiwiZFByb2R1Y3RMaXN0Iiwic3VibWl0VmlzaXRQbGFuIiwicmVzIiwicmVuZGVyIiwiY29udGFpbmVyIiwid3JhcHBlciIsImNvbmZpcm0iLCJzZXREZWZhdWx0VmlzaXRQbGFuIiwibWFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBOztBQUFBLG9CQUNPQyx3REFBVSxDQUFDQyw2Q0FBRCxDQURqQjtBQUFBLE1BQ3RCQyxLQURzQixlQUN0QkEsS0FEc0I7QUFBQSxNQUNmQyxRQURlLGVBQ2ZBLFFBRGU7QUFBQSxNQUNMQyxPQURLLGVBQ0xBLE9BREs7O0FBQUEsa0JBRUFDLHNEQUFRLENBQUMsSUFBRCxDQUZSO0FBQUEsTUFFdkJDLE9BRnVCO0FBQUEsTUFFZEMsVUFGYzs7QUFBQSxtQkFHTkYsc0RBQVEsQ0FBQyxFQUFELENBSEY7QUFBQSxNQUd2QkcsSUFIdUI7QUFBQSxNQUdqQkMsT0FIaUI7O0FBSTlCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFJQyxHQUFHLEdBQUcsSUFBSUMsSUFBSixFQUFWO0FBQ0EsTUFBSUMsSUFBSSxHQUFH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QUFDTCwwQkFDRTtBQUFLLGlCQUFTLEVBQUU0QywrRUFBTSxDQUFDd0QsU0FBdkI7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUV4RCwrRUFBTSxDQUFDeUQsT0FBdkI7QUFBQSxrQ0FDRSxxRUFBQyx1REFBRDtBQUNFLGlCQUFLLEVBQUUsTUFEVDtBQUVFLGlCQUFLLEVBQUUsT0FGVDtBQUdFLGtCQUFNLEVBQUUsUUFIVjtBQUlFLG1CQUFPLEVBQUUsbUJBQU07QUFDYjFDLHNCQUFRO0FBQ1QsYUFOSDtBQU9FLHNCQUFVLEVBQUUsc0JBQU07QUFDaEIsa0JBQ0UyQyxPQUFPLENBQ0wsd0RBREssQ0FEVCxFQUlFO0FBQ0F4Ryx1QkFBTyxDQUFDeUcsbUJBQVI7QUFDQWpGLGtFQUFNLENBQUNDLElBQVAsQ0FBWSxhQUFaO0FBQ0Q7QUFDRjtBQWhCSDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBbUJFO0FBQUsscUJBQVMsRUFBRXFCLCtFQUFNLENBQUM0RCxJQUF2QjtBQUFBLHNCQUE4QjFFLFlBQVk7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBeUJEO0FBQ0YsR0E5QkQ7O0FBZ0NBLFNBQU9xRSxNQUFNLEVBQWI7QUFDRDs7R0E1TnVCMUcsSztVQUlQWSxxRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92aXNpdC9wbGFuL1tpZF0uMjRkNTU1M2E1NzAwZjdjMGE1MTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vLi4vc3R5bGVzL3BhZ2VzL1Zpc2l0UGxhbkRldGFpbC5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgeyBTdG9yZXMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RvcmVcIjtcclxuXHJcbmltcG9ydCBOYXYgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvTmF2XCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL0NhcmRcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvU3Bpbm5lclwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL0J1dHRvblwiO1xyXG5cclxuaW1wb3J0IHsgZ2V0UGxhbklkLCBzdWJtaXRWaXNpdFBsYW4gfSBmcm9tIFwiLi4vLi4vLi4vLi4vaGVscGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCgpIHtcclxuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCwgYWN0aW9ucyB9ID0gdXNlQ29udGV4dChTdG9yZXMpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtwbGFuLCBzZXRQbGFuXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICB2YXIgbm93ID0gbmV3IERhdGUoKTtcclxuICB2YXIgZGF0ZSA9IG5vdy5nZXREYXRlKCk7XHJcbiAgdmFyIG1vbnRoID0gbm93LmdldE1vbnRoKCkgKyAxO1xyXG4gIHZhciB5ZWFyID0gbm93LmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgIC9HZXRBbGxNYXN0ZXJWaXNpdFBsYW5cIlxyXG4gICAgaWYgKHJvdXRlci5xdWVyeS5pZCkge1xyXG4gICAgICBnZXRQbGFuSWQocm91dGVyLnF1ZXJ5LmlkKVxyXG4gICAgICAgIC50aGVuKCh7IHNhbWVQbGFuLCBkYXRhIH0pID0+IHtcclxuICAgICAgICAgIGlmIChzYW1lUGxhbi5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi92aXNpdC9wbGFuXCIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0UGxhbihkYXRhKTtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmICghc3RhdGUudmlzaXRQbGFuUmVkdWNlci5jaGVja0luKSB7XHJcbiAgICAgICAgICAgICAgYWN0aW9ucy5zZXRQbGFuQ2hlY2tJbihub3cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbcm91dGVyLnF1ZXJ5LmlkXSk7XHJcblxyXG4gIGNvbnN0IHJlbmRlckRldGFpbCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge3JlbmRlckRhdGFEZXRhaWwoXCJKZW5pcyBDaGFubmVsXCIsIHBsYW4uamVuaXNDaGFubmVsKX1cclxuICAgICAgICB7cmVuZGVyRGF0YURldGFpbChcIk91dGxldFwiLCBwbGFuLm5hbWFPdXRsZXQpfVxyXG4gICAgICAgIHtyZW5kZXJEYXRhRGV0YWlsKFwiQWxhbWF0XCIsIHBsYW4uYWxhbWF0T3V0bGV0KX1cclxuICAgICAgICB7cmVuZGVyRGF0YURldGFpbChcIkNhdGF0YW5cIiwgcGxhbi5jYXRhdGFuKX1cclxuICAgICAgICB7cmVuZGVyRGF0YURldGFpbChcIlZpc2liaWxpdHlcIil9XHJcbiAgICAgICAge3JlbmRlckRhdGFEZXRhaWwoXCJBdmFiaWxpdHlcIil9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJEYXRhRGV0YWlsID0gKHR5cGUsIGRhdGEpID0+IHtcclxuICAgIGNvbnN0IGRvbmVGb3JtVmlzID0gc3RhdGUudmlzaXRQbGFuUmVkdWNlci52aXNpYmlsaXR5LmZpbHRlcigodmFsKSA9PiB7XHJcbiAgICAgIHJldHVybiB2YWwuZmlsZSAhPT0gbnVsbCAmJiB2YWwudHlwZSAhPT0gbnVsbDtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZG9uZUZvcm1BdmEgPSBzdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLmF2YWJpbGl0eTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZW5kZXJfZGF0YX0+XHJcbiAgICAgICAgICB7dHlwZX1cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcInJpZ2h0XCIgfX0+XHJcbiAgICAgICAgICAgIHt0eXBlID09PSBcIlZpc2liaWxpdHlcIlxyXG4gICAgICAgICAgICAgID8gYCR7ZG9uZUZvcm1WaXMubGVuZ3RofS82YFxyXG4gICAgICAgICAgICAgIDogdHlwZSA9PT0gXCJBdmFiaWxpdHlcIlxyXG4gICAgICAgICAgICAgID8gYCR7ZG9uZUZvcm1BdmEubGVuZ3RofS8yNWBcclxuICAgICAgICAgICAgICA6IFwiXCJ9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNnB4XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVuZGVyX3ZhbHVlfT5cclxuICAgICAgICAgICAge3R5cGUgPT09IFwiQ2F0YXRhblwiID8gKFxyXG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBib3JkZXI6IFwibm9uZVwiLCBoZWlnaHQ6IFwiNzBweFwiIH19XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgYWN0aW9ucy5zZXRQbGFuQ2F0YXRhbihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnZpc2l0UGxhblJlZHVjZXIuY2F0YXRhbn1cclxuICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgKSA6IHR5cGUgPT09IFwiVmlzaWJpbGl0eVwiIHx8IHR5cGUgPT09IFwiQXZhYmlsaXR5XCIgPyAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIHt0eXBlID09PSBcIlZpc2liaWxpdHlcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJ9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJfbm93fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHsoZG9uZUZvcm1WaXMubGVuZ3RoIC8gNikgKiAxMDB9JWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkgOiB0eXBlID09PSBcIkF2YWJpbGl0eVwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcn0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcl9ub3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGAkeyhkb25lRm9ybUF2YS5sZW5ndGggLyAyNSkgKiAxMDB9JWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICBocmVmPXtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlID09PSBcIlZpc2liaWxpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBgL3Zpc2l0L3BsYW4vJHtwbGFuLmlkfS92aXNpYmlsaXR5YFxyXG4gICAgICAgICAgICAgICAgICAgICAgOiB0eXBlID09PSBcIkF2YWJpbGl0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IGAvdmlzaXQvcGxhbi8ke3BsYW4uaWR9L2F2YWJpbGl0eWBcclxuICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkFkZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8PntkYXRhfTwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB2aXNEb25lID0gc3RhdGUudmlzaXRQbGFuUmVkdWNlci52aXNpYmlsaXR5LmZpbHRlcigodmFsKSA9PiB7XHJcbiAgICAgIHJldHVybiB2YWwuZmlsZSAhPT0gbnVsbCAmJiB2YWwudHlwZSAhPT0gbnVsbDtcclxuICAgIH0pO1xyXG4gICAgaWYgKHZpc0RvbmUubGVuZ3RoID09PSA2KSB7XHJcbiAgICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xyXG5cclxuICAgICAgY29uc3QgYm9keVBsYW4gPSB7XHJcbiAgICAgICAgaWQ6IHBsYW4uaWQsXHJcbiAgICAgICAgaWRNYXN0ZXJQbGFuVmlzaXQ6IHBsYW4uaWQsXHJcbiAgICAgICAgbm9tb3JEb2t1bWVuOiBwbGFuLm5vbW9yRG9rdW1lbixcclxuICAgICAgICBjYXRhdGFuOiBzdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLmNhdGF0YW4sXHJcbiAgICAgICAgaXNDaGVja0luOiB0cnVlLFxyXG4gICAgICAgIGNoZWNrSW5EYXRlOiBzdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLmNoZWNrSW4udG9JU09TdHJpbmcoKSxcclxuICAgICAgICBpc0NoZWNrT3V0OiB0cnVlLFxyXG4gICAgICAgIGNoZWNrT3V0RGF0ZTogbm93LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgY3JlYXRlZEJ5OiB1c2VyRGF0YS51c2VybmFtZSxcclxuICAgICAgICB1cGRhdGVkQnk6IHVzZXJEYXRhLnVzZXJuYW1lLFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBib2R5UG9zbSA9IHN0YXRlLnZpc2l0UGxhblJlZHVjZXIudmlzaWJpbGl0eS5tYXAoKHZhbCwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaWQ6IHZhbC50eXBlLmlkLFxyXG4gICAgICAgICAgYWN0aXZpdHlWaXNpdFBsYW5JZDogcGxhbi5pZCxcclxuICAgICAgICAgIG5vbW9yRG9rdW1lbjogcGxhbi5ub21vckRva3VtZW4sXHJcbiAgICAgICAgICBub21vcjogaW5kZXgsXHJcbiAgICAgICAgICB0aXBlOiB2YWwudHlwZS50aXBlLFxyXG4gICAgICAgICAgbmFtYUZpbGU6IHZhbC5maWxlLm5hbWUsXHJcbiAgICAgICAgICBjcmVhdGVkQnk6IHVzZXJEYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgICAgdXBkYXRlZEJ5OiB1c2VyRGF0YS51c2VybmFtZSxcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgYm9keVByb2R1Y3QgPSBzdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLmF2YWJpbGl0eS5tYXAoKHZhbCwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLy8gaWQ6IHZhbC5wcm9kdWN0Rm9jdXMucHJvZHVrSUQsXHJcbiAgICAgICAgICBpZDogcGxhbi5pZCxcclxuICAgICAgICAgIGFjdGl2aXR5VmlzaXRQbGFuSWQ6IHBsYW4uaWQsXHJcbiAgICAgICAgICBub21vckRva3VtZW46IHBsYW4ubm9tb3JEb2t1bWVuLFxyXG4gICAgICAgICAgbm9tb3I6IGluZGV4LFxyXG4gICAgICAgICAga29kZVByb2R1azogdmFsLnByb2R1Y3RGb2N1cy5wcm9kdWtJRCxcclxuICAgICAgICAgIG5hbWFQcm9kdWs6IHZhbC5wcm9kdWN0Rm9jdXMubmFtYVByb2R1ayxcclxuICAgICAgICAgIHN0b2s6IHZhbC5zdG9jayxcclxuICAgICAgICAgIHNhcmFuT3JkZXI6IHZhbC5zYXJhbk9yZGVyLFxyXG4gICAgICAgICAganVtbGFoT3JkZXI6IHZhbC5vcmRlcixcclxuICAgICAgICAgIGNyZWF0ZWRCeTogdXNlckRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgICB1cGRhdGVkQnk6IHVzZXJEYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLnZpc2liaWxpdHkpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLmF2YWJpbGl0eSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGJvZHlQbGFuLCBib2R5UG9zbSwgYm9keVByb2R1Y3QpO1xyXG4gICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICBhdnA6IGJvZHlQbGFuLFxyXG4gICAgICAgIGRwb3NtTGlzdDogYm9keVBvc20sXHJcbiAgICAgICAgZFByb2R1Y3RMaXN0OiBib2R5UHJvZHVjdCxcclxuICAgICAgfTtcclxuICAgICAgc3VibWl0VmlzaXRQbGFuKGRhdGEpXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZG9uZVwiKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgPE5hdlxyXG4gICAgICAgICAgICAgIHRpdGxlPXtcIlBsYW5cIn1cclxuICAgICAgICAgICAgICBjb2xvcj17XCJ3aGl0ZVwifVxyXG4gICAgICAgICAgICAgIGFjdGlvbj17XCJTdWJtaXRcIn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdCgpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgYmFja0FjdGlvbj17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICBjb25maXJtKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRGF0YSB3aWxsIGJlIGxvc3QgaWYgeW91IGxlYXZlIHRoZSBwYWdlLCBhcmUgeW91IHN1cmU/XCJcclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbnMuc2V0RGVmYXVsdFZpc2l0UGxhbigpO1xyXG4gICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi92aXNpdC9wbGFuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+e3JlbmRlckRldGFpbCgpfTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHJlbmRlcigpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=