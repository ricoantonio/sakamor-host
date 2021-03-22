webpackHotUpdate_N_E("pages/activity/visit/plan/[id]/visibility",{

/***/ "./pages/activity/visit/plan/[id]/visibility.jsx":
/*!*******************************************************!*\
  !*** ./pages/activity/visit/plan/[id]/visibility.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return visibility; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../styles/pages/VisitPlanDetail.module.css */ "./styles/pages/VisitPlanDetail.module.css");
/* harmony import */ var _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../components/Nav */ "./components/Nav.jsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../store */ "./store/index.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../components/Spinner */ "./components/Spinner.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);




var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-new\\pages\\activity\\visit\\plan\\[id]\\visibility.jsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function visibility() {
  _s();

  var _this = this;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store__WEBPACK_IMPORTED_MODULE_5__["Stores"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch,
      actions = _useContext.actions;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      plan = _useState2[0],
      setPlan = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      dummy = _useState3[0],
      setDummy = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([{
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

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (router.query.id) {
      fetch("http://10.100.4.116:8230/api/ActivityVisitPlan/GetActivityVisitPlanById/".concat(router.query.id)).then(function (response) {
        return response.json();
      }).then(function (data) {
        setPlan(data);
        setLoading(false);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }, [router.query.id]);

  var renderInputUpload = function renderInputUpload() {
    var render = [];

    var _loop = function _loop(i) {
      // console.log(vis[i].file);
      render.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.visibility_grid,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: ["POSM ", i]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.visibility_dropdown,
            children: [console.log(vis[i - 1].file), vis[i - 1] != null ? vis[i - 1].file : ""]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.new_button,
              htmlFor: "upload".concat(i),
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/camera.svg",
                style: {
                  width: "18px",
                  verticalAlign: "baseline"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.input_file,
                onChange: function onChange(e) {
                  vis.splice(i, 0, _objectSpread(_objectSpread({}, vis[i]), {}, {
                    file: e.target.files[0]
                  }));
                  console.log(e.target.files[0]);
                  setDummy(dummy + 1);
                },
                id: "upload".concat(i),
                type: "file",
                accept: "image/*",
                capture: "environment"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this)
      }, void 0, false));
    };

    for (var i = 1; i <= 6; i++) {
      _loop(i);
    }

    return render;
  };

  var render = function render() {
    if (loading) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 14
      }, _this);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.wrapper,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Nav__WEBPACK_IMPORTED_MODULE_4__["default"], {
            title: "Visibility",
            backHref: "/activity/visit/plan/".concat(plan.id),
            color: "white"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,
            children: renderInputUpload()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, _this);
    }
  };

  return render();
}

_s(visibility, "WjyZbRV+khkVEcqWeOZYPrMChes=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWN0aXZpdHkvdmlzaXQvcGxhbi8vdmlzaWJpbGl0eS5qc3giXSwibmFtZXMiOlsidmlzaWJpbGl0eSIsInVzZUNvbnRleHQiLCJTdG9yZXMiLCJzdGF0ZSIsImRpc3BhdGNoIiwiYWN0aW9ucyIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJwbGFuIiwic2V0UGxhbiIsImR1bW15Iiwic2V0RHVtbXkiLCJmaWxlIiwidHlwZSIsInZpcyIsInNldFZpcyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInF1ZXJ5IiwiaWQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInJlbmRlcklucHV0VXBsb2FkIiwicmVuZGVyIiwiaSIsInB1c2giLCJzdHlsZXMiLCJ2aXNpYmlsaXR5X2dyaWQiLCJ2aXNpYmlsaXR5X2Ryb3Bkb3duIiwibmV3X2J1dHRvbiIsIndpZHRoIiwidmVydGljYWxBbGlnbiIsImlucHV0X2ZpbGUiLCJlIiwic3BsaWNlIiwidGFyZ2V0IiwiZmlsZXMiLCJjb250YWluZXIiLCJ3cmFwcGVyIiwibWFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFZSxTQUFTQSxVQUFULEdBQXNCO0FBQUE7O0FBQUE7O0FBQUEsb0JBQ0VDLHdEQUFVLENBQUNDLDZDQUFELENBRFo7QUFBQSxNQUMzQkMsS0FEMkIsZUFDM0JBLEtBRDJCO0FBQUEsTUFDcEJDLFFBRG9CLGVBQ3BCQSxRQURvQjtBQUFBLE1BQ1ZDLE9BRFUsZUFDVkEsT0FEVTs7QUFBQSxrQkFFTEMsc0RBQVEsQ0FBQyxJQUFELENBRkg7QUFBQSxNQUU1QkMsT0FGNEI7QUFBQSxNQUVuQkMsVUFGbUI7O0FBQUEsbUJBR1hGLHNEQUFRLENBQUMsRUFBRCxD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QUFBLG1CQURGLGVBTUU7QUFBSyxxQkFBUyxFQUFFYSwrRUFBTSxDQUFDYSxJQUF2QjtBQUFBLHNCQUE4QmpCLGlCQUFpQjtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVlEO0FBQ0YsR0FqQkQ7O0FBa0JBLFNBQU9DLE1BQU0sRUFBYjtBQUNEOztHQTdGdUIvQixVO1VBYVBrQixxRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hY3Rpdml0eS92aXNpdC9wbGFuL1tpZF0vdmlzaWJpbGl0eS40YTFhNjg1YTljNGY1NDcwMTJkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3BhZ2VzL1Zpc2l0UGxhbkRldGFpbC5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgTmF2IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL05hdlwiO1xyXG5pbXBvcnQgeyBTdG9yZXMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vc3RvcmVcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvU3Bpbm5lclwiO1xyXG5cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2aXNpYmlsaXR5KCkge1xyXG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoLCBhY3Rpb25zIH0gPSB1c2VDb250ZXh0KFN0b3Jlcyk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3BsYW4sIHNldFBsYW5dID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtkdW1teSwgc2V0RHVtbXldID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Zpcywgc2V0VmlzXSA9IHVzZVN0YXRlKFtcclxuICAgIHsgZmlsZTogbnVsbCwgdHlwZTogbnVsbCB9LFxyXG4gICAgeyBmaWxlOiBudWxsLCB0eXBlOiBudWxsIH0sXHJcbiAgICB7IGZpbGU6IG51bGwsIHR5cGU6IG51bGwgfSxcclxuICAgIHsgZmlsZTogbnVsbCwgdHlwZTogbnVsbCB9LFxyXG4gICAgeyBmaWxlOiBudWxsLCB0eXBlOiBudWxsIH0sXHJcbiAgICB7IGZpbGU6IG51bGwsIHR5cGU6IG51bGwgfSxcclxuICBdKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChyb3V0ZXIucXVlcnkuaWQpIHtcclxuICAgICAgZmV0Y2goXHJcbiAgICAgICAgYGh0dHA6Ly8xMC4xMDAuNC4xMTY6ODIzMC9hcGkvQWN0aXZpdHlWaXNpdFBsYW4vR2V0QWN0aXZpdHlWaXNpdFBsYW5CeUlkLyR7cm91dGVyLnF1ZXJ5LmlkfWBcclxuICAgICAgKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBzZXRQbGFuKGRhdGEpO1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbcm91dGVyLnF1ZXJ5LmlkXSk7XHJcblxyXG4gIGNvbnN0IHJlbmRlcklucHV0VXBsb2FkID0gKCkgPT4ge1xyXG4gICAgdmFyIHJlbmRlciA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNjsgaSsrKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHZpc1tpXS5maWxlKTtcclxuICAgICAgcmVuZGVyLnB1c2goXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlzaWJpbGl0eV9ncmlkfT5cclxuICAgICAgICAgICAgPGRpdj5QT1NNIHtpfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpc2liaWxpdHlfZHJvcGRvd259PlxyXG4gICAgICAgICAgICAgIHtjb25zb2xlLmxvZyh2aXNbaSAtIDFdLmZpbGUpfVxyXG4gICAgICAgICAgICAgIHt2aXNbaSAtIDFdICE9IG51bGwgPyB2aXNbaSAtIDFdLmZpbGUgOiBcIlwifVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubmV3X2J1dHRvbn0gaHRtbEZvcj17YHVwbG9hZCR7aX1gfT5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPXtcIi9jYW1lcmEuc3ZnXCJ9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjE4cHhcIiwgdmVydGljYWxBbGlnbjogXCJiYXNlbGluZVwiIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0X2ZpbGV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpcy5zcGxpY2UoaSwgMCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4udmlzW2ldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsZTogZS50YXJnZXQuZmlsZXNbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldER1bW15KGR1bW15ICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGlkPXtgdXBsb2FkJHtpfWB9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgICAgICAgIGNhcHR1cmU9XCJlbnZpcm9ubWVudFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVuZGVyO1xyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8TmF2XHJcbiAgICAgICAgICAgICAgdGl0bGU9e1wiVmlzaWJpbGl0eVwifVxyXG4gICAgICAgICAgICAgIGJhY2tIcmVmPXtgL2FjdGl2aXR5L3Zpc2l0L3BsYW4vJHtwbGFuLmlkfWB9XHJcbiAgICAgICAgICAgICAgY29sb3I9e1wid2hpdGVcIn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT57cmVuZGVySW5wdXRVcGxvYWQoKX08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIHJlbmRlcigpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=