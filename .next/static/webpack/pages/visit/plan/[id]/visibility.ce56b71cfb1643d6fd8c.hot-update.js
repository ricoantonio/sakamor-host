webpackHotUpdate_N_E("pages/visit/plan/[id]/visibility",{

/***/ "./pages/visit/plan/[id]/visibility.jsx":
/*!**********************************************!*\
  !*** ./pages/visit/plan/[id]/visibility.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return visibility; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../styles/pages/VisitPlanDetail.module.css */ "./styles/pages/VisitPlanDetail.module.css");
/* harmony import */ var _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../store */ "./store/index.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/Nav */ "./components/Nav.jsx");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/Spinner */ "./components/Spinner.jsx");
/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/Dropdown */ "./components/Dropdown.jsx");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../constant */ "./constant.js");





var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-new\\pages\\visit\\plan\\[id]\\visibility.jsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









function visibility() {
  _s();

  var _this = this;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_store__WEBPACK_IMPORTED_MODULE_6__["Stores"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch,
      actions = _useContext.actions;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      posm = _useState2[0],
      setPosm = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      dummy = _useState3[0],
      setDummy = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([{
    file: null,
    type: null
  }, {
    file: null,
    type: null
  }, {
    file: null,
    type: null
  }, {
    file: null,
    type: null
  }, {
    file: null,
    type: null
  }, {
    file: null,
    type: null
  }]),
      vis = _useState4[0],
      setVis = _useState4[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var initialVis = [{
    file: null,
    type: null
  }, {
    file: null,
    type: null
  }, {
    file: null,
    type: null
  }, {
    file: null,
    type: null
  }, {
    file: null,
    type: null
  }, {
    file: null,
    type: null
  }];
  var now = new Date();
  var date = now.getDate();
  var month = now.getMonth() + 1;
  var year = now.getFullYear();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var notEmpty = vis.filter(function (val) {
      return val.file !== null && val.type !== null;
    }); // console.log(notEmpty);

    if (notEmpty.length > 0) {
      window.onbeforeunload = function () {
        return "Data will be lost if you leave the page, are you sure?";
      };
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (state.visitPlanReducer.visibility.length > 0) {
      setVis(Object(C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(state.visitPlanReducer.visibility));
    }
  }, [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (router.query.id) {
      "http://10.100.4.116:8230/api/ActivityVisitPlanDPOSM/GetAllActivityVisitPlanDposm";
      fetch(_constant__WEBPACK_IMPORTED_MODULE_10__["API_USER"] + _constant__WEBPACK_IMPORTED_MODULE_10__["API_VISIT_PLAN"] + "ActivityVisitPlanDPOSM/GetAllActivityVisitPlanDposm", {
        headers: {
          apiKey: _constant__WEBPACK_IMPORTED_MODULE_10__["TOKEN"]
        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        setPosm(data);
        setLoading(false);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }, [router.query.id]);

  var renderInputUpload = function renderInputUpload() {
    var render = vis.map(function (val, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.visibility_grid,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: ["POSM ", index + 1]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.visibility_dropdown,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Dropdown__WEBPACK_IMPORTED_MODULE_9__["default"], {
              options: posm,
              onChange: function onChange(e) {
                vis.splice(index, 1, _objectSpread(_objectSpread({}, vis[index]), {}, {
                  type: e.target.value
                }));
                setDummy(dummy + 1);
              },
              value: val.type != null ? val.type : ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              style: {
                fontSize: "10px",
                color: "#41867A",
                fontWeight: "500"
              },
              children: val.file != null ? val.file.name : ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.new_button,
              htmlFor: "upload".concat(index),
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/camera.svg",
                style: {
                  width: "18px",
                  verticalAlign: "baseline"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.input_file,
                onChange: function onChange(e) {
                  vis.splice(index, 1, _objectSpread(_objectSpread({}, vis[index]), {}, {
                    file: e.target.files[0]
                  }));
                  setDummy(dummy + 1);
                },
                id: "upload".concat(index),
                type: "file",
                accept: "image/*",
                capture: "environment"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, _this)
      }, void 0, false);
    });
    return render;
  };

  var onSave = function onSave() {
    actions.setVisibility(vis);
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/visit/plan/".concat(router.query.id));
  };

  var render = function render() {
    if (loading) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 14
      }, _this);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.container,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.wrapper,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Nav__WEBPACK_IMPORTED_MODULE_7__["default"], {
            title: "Visibility",
            color: "white",
            action: "Save",
            onClick: function onClick() {
              onSave();
            },
            backAction: function backAction() {
              if (state.visitPlanReducer.visibility.length > 0) {
                setVis(Object(C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(state.visitPlanReducer.visibility));
              } else {
                setVis([].concat(initialVis));
              }

              next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/visit/plan/".concat(router.query.id));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.main,
            children: renderInputUpload()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }, _this);
    }
  };

  return render();
}

_s(visibility, "LrcBV7dJ3CQ7x/Aab/yrVdLi2Uk=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlzaXQvcGxhbi8vdmlzaWJpbGl0eS5qc3giXSwibmFtZXMiOlsidmlzaWJpbGl0eSIsInVzZUNvbnRleHQiLCJTdG9yZXMiLCJzdGF0ZSIsImRpc3BhdGNoIiwiYWN0aW9ucyIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJwb3NtIiwic2V0UG9zbSIsImR1bW15Iiwic2V0RHVtbXkiLCJmaWxlIiwidHlwZSIsInZpcyIsInNldFZpcyIsInJvdXRlciIsInVzZVJvdXRlciIsImluaXRpYWxWaXMiLCJub3ciLCJEYXRlIiwiZGF0ZSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwidXNlRWZmZWN0Iiwibm90RW1wdHkiLCJmaWx0ZXIiLCJ2YWwiLCJsZW5ndGgiLCJ3aW5kb3ciLCJvbmJlZm9yZXVubG9hZCIsInZpc2l0UGxhblJlZHVjZXIiLCJxdWVyeSIsImlkIiwiZmV0Y2giLCJBUElfVVNFUiIsIkFQSV9WSVNJVF9QTEFOIiwiaGVhZGVycyIsImFwaUtleSIsIlRPS0VOIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicmVuZGVySW5wdXRVcGxvYWQiLCJyZW5kZXIiLCJtYXAiLCJpbmRleCIsInN0eWxlcyIsInZpc2liaWxpdHlfZ3JpZCIsInZpc2liaWxpdHlfZHJvcGRvd24iLCJlIiwic3BsaWNlIiwidGFyZ2V0IiwidmFsdWUiLCJmb250U2l6ZSIsImNvbG9yIiwiZm9udFdlaWdodCIsIm5hbWUiLCJuZXdfYnV0dG9uIiwid2lkdGgiLCJ2ZXJ0aWNhbEFsaWduIiwiaW5wdXRfZmlsZSIsImZpbGVzIiwib25TYXZlIiwic2V0VmlzaWJpbGl0eSIsIlJvdXRlciIsInB1c2giLCJjb250YWluZXIiLCJ3cmFwcGVyIiwibWFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFNO0FBQ2JMLG9CQUFNO0FBQ1AsYUFOSDtBQU9FLHNCQUFVLEVBQUUsc0JBQU07QUFDaEIsa0JBQUlwRSxLQUFLLENBQUNnQyxnQkFBTixDQUF1Qm5DLFVBQXZCLENBQWtDZ0MsTUFBbEMsR0FBMkMsQ0FBL0MsRUFBa0Q7QUFDaERoQixzQkFBTSxDQUFDLHlKQUFJYixLQUFLLENBQUNnQyxnQkFBTixDQUF1Qm5DLFVBQTVCLEVBQU47QUFDRCxlQUZELE1BRU87QUFDTGdCLHNCQUFNLFdBQUtHLFVBQUwsRUFBTjtBQUNEOztBQUNEc0QsZ0VBQU0sQ0FBQ0MsSUFBUCx1QkFBMkJ6RCxNQUFNLENBQUNtQixLQUFQLENBQWFDLEVBQXhDO0FBQ0Q7QUFkSDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBaUJFO0FBQUsscUJBQVMsRUFBRWtCLCtFQUFNLENBQUNzQixJQUF2QjtBQUFBLHNCQUE4QjFCLGlCQUFpQjtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUF1QkQ7QUFDRixHQTVCRDs7QUE2QkEsU0FBT0MsTUFBTSxFQUFiO0FBQ0Q7O0dBL0p1QnBELFU7VUFhUGtCLHFEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Zpc2l0L3BsYW4vW2lkXS92aXNpYmlsaXR5LmNlNTZiNzFjZmIxNjQzZDZmZDhjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi8uLi9zdHlsZXMvcGFnZXMvVmlzaXRQbGFuRGV0YWlsLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCB7IFN0b3JlcyB9IGZyb20gXCIuLi8uLi8uLi8uLi9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IE5hdiBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9OYXZcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvU3Bpbm5lclwiO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvRHJvcGRvd25cIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgQVBJX1VSTCxcclxuICBBUElfVVNFUixcclxuICBUT0tFTixcclxuICBBUElfVklTSVRfUExBTixcclxuICBBUElfTUFTVEVSX0RBVEEsXHJcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbnN0YW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2aXNpYmlsaXR5KCkge1xyXG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoLCBhY3Rpb25zIH0gPSB1c2VDb250ZXh0KFN0b3Jlcyk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3Bvc20sIHNldFBvc21dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtkdW1teSwgc2V0RHVtbXldID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Zpcywgc2V0VmlzXSA9IHVzZVN0YXRlKFtcclxuICAgIHsgZmlsZTogbnVsbCwgdHlwZTogbnVsbCB9LFxyXG4gICAgeyBmaWxlOiBudWxsLCB0eXBlOiBudWxsIH0sXHJcbiAgICB7IGZpbGU6IG51bGwsIHR5cGU6IG51bGwgfSxcclxuICAgIHsgZmlsZTogbnVsbCwgdHlwZTogbnVsbCB9LFxyXG4gICAgeyBmaWxlOiBudWxsLCB0eXBlOiBudWxsIH0sXHJcbiAgICB7IGZpbGU6IG51bGwsIHR5cGU6IG51bGwgfSxcclxuICBdKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBpbml0aWFsVmlzID0gW1xyXG4gICAgeyBmaWxlOiBudWxsLCB0eXBlOiBudWxsIH0sXHJcbiAgICB7IGZpbGU6IG51bGwsIHR5cGU6IG51bGwgfSxcclxuICAgIHsgZmlsZTogbnVsbCwgdHlwZTogbnVsbCB9LFxyXG4gICAgeyBmaWxlOiBudWxsLCB0eXBlOiBudWxsIH0sXHJcbiAgICB7IGZpbGU6IG51bGwsIHR5cGU6IG51bGwgfSxcclxuICAgIHsgZmlsZTogbnVsbCwgdHlwZTogbnVsbCB9LFxyXG4gIF07XHJcbiAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgdmFyIGRhdGUgPSBub3cuZ2V0RGF0ZSgpO1xyXG4gIHZhciBtb250aCA9IG5vdy5nZXRNb250aCgpICsgMTtcclxuICB2YXIgeWVhciA9IG5vdy5nZXRGdWxsWWVhcigpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBub3RFbXB0eSA9IHZpcy5maWx0ZXIoKHZhbCkgPT4ge1xyXG4gICAgICByZXR1cm4gdmFsLmZpbGUgIT09IG51bGwgJiYgdmFsLnR5cGUgIT09IG51bGw7XHJcbiAgICB9KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKG5vdEVtcHR5KTtcclxuICAgIGlmIChub3RFbXB0eS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCJEYXRhIHdpbGwgYmUgbG9zdCBpZiB5b3UgbGVhdmUgdGhlIHBhZ2UsIGFyZSB5b3Ugc3VyZT9cIjtcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9KTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHN0YXRlLnZpc2l0UGxhblJlZHVjZXIudmlzaWJpbGl0eS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHNldFZpcyhbLi4uc3RhdGUudmlzaXRQbGFuUmVkdWNlci52aXNpYmlsaXR5XSk7XHJcbiAgICB9XHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocm91dGVyLnF1ZXJ5LmlkKSB7XHJcbiAgICAgIGBodHRwOi8vMTAuMTAwLjQuMTE2OjgyMzAvYXBpL0FjdGl2aXR5VmlzaXRQbGFuRFBPU00vR2V0QWxsQWN0aXZpdHlWaXNpdFBsYW5EcG9zbWA7XHJcbiAgICAgIGZldGNoKFxyXG4gICAgICAgIEFQSV9VU0VSICtcclxuICAgICAgICAgIEFQSV9WSVNJVF9QTEFOICtcclxuICAgICAgICAgIGBBY3Rpdml0eVZpc2l0UGxhbkRQT1NNL0dldEFsbEFjdGl2aXR5VmlzaXRQbGFuRHBvc21gLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIHNldFBvc20oZGF0YSk7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIucXVlcnkuaWRdKTtcclxuXHJcbiAgY29uc3QgcmVuZGVySW5wdXRVcGxvYWQgPSAoKSA9PiB7XHJcbiAgICB2YXIgcmVuZGVyID0gdmlzLm1hcCgodmFsLCBpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLnZpc2liaWxpdHlfZ3JpZH0+XHJcbiAgICAgICAgICAgIDxkaXY+UE9TTSB7aW5kZXggKyAxfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpc2liaWxpdHlfZHJvcGRvd259PlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17cG9zbX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB2aXMuc3BsaWNlKGluZGV4LCAxLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4udmlzW2luZGV4XSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldER1bW15KGR1bW15ICsgMSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbC50eXBlICE9IG51bGwgPyB2YWwudHlwZSA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNDE4NjdBXCIsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt2YWwuZmlsZSAhPSBudWxsID8gdmFsLmZpbGUubmFtZSA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubmV3X2J1dHRvbn0gaHRtbEZvcj17YHVwbG9hZCR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17XCIvY2FtZXJhLnN2Z1wifVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxOHB4XCIsIHZlcnRpY2FsQWxpZ246IFwiYmFzZWxpbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF9maWxlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2aXMuc3BsaWNlKGluZGV4LCAxLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi52aXNbaW5kZXhdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsZTogZS50YXJnZXQuZmlsZXNbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RHVtbXkoZHVtbXkgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgaWQ9e2B1cGxvYWQke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgICAgICAgIGNhcHR1cmU9XCJlbnZpcm9ubWVudFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZW5kZXI7XHJcbiAgfTtcclxuICBjb25zdCBvblNhdmUgPSAoKSA9PiB7XHJcbiAgICBhY3Rpb25zLnNldFZpc2liaWxpdHkodmlzKTtcclxuICAgIFJvdXRlci5wdXNoKGAvdmlzaXQvcGxhbi8ke3JvdXRlci5xdWVyeS5pZH1gKTtcclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgPE5hdlxyXG4gICAgICAgICAgICAgIHRpdGxlPXtcIlZpc2liaWxpdHlcIn1cclxuICAgICAgICAgICAgICBjb2xvcj17XCJ3aGl0ZVwifVxyXG4gICAgICAgICAgICAgIGFjdGlvbj17XCJTYXZlXCJ9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb25TYXZlKCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBiYWNrQWN0aW9uPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUudmlzaXRQbGFuUmVkdWNlci52aXNpYmlsaXR5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgc2V0VmlzKFsuLi5zdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLnZpc2liaWxpdHldKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFZpcyhbLi4uaW5pdGlhbFZpc10pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goYC92aXNpdC9wbGFuLyR7cm91dGVyLnF1ZXJ5LmlkfWApO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+e3JlbmRlcklucHV0VXBsb2FkKCl9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiByZW5kZXIoKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9