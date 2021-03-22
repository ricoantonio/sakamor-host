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
            children: console.log(vis[i])
          }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWN0aXZpdHkvdmlzaXQvcGxhbi8vdmlzaWJpbGl0eS5qc3giXSwibmFtZXMiOlsidmlzaWJpbGl0eSIsInVzZUNvbnRleHQiLCJTdG9yZXMiLCJzdGF0ZSIsImRpc3BhdGNoIiwiYWN0aW9ucyIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJwbGFuIiwic2V0UGxhbiIsImR1bW15Iiwic2V0RHVtbXkiLCJmaWxlIiwidHlwZSIsInZpcyIsInNldFZpcyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInF1ZXJ5IiwiaWQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInJlbmRlcklucHV0VXBsb2FkIiwicmVuZGVyIiwiaSIsInB1c2giLCJzdHlsZXMiLCJ2aXNpYmlsaXR5X2dyaWQiLCJ2aXNpYmlsaXR5X2Ryb3Bkb3duIiwibmV3X2J1dHRvbiIsIndpZHRoIiwidmVydGljYWxBbGlnbiIsImlucHV0X2ZpbGUiLCJlIiwic3BsaWNlIiwidGFyZ2V0IiwiZmlsZXMiLCJjb250YWluZXIiLCJ3cmFwcGVyIiwibWFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFZSxTQUFTQSxVQUFULEdBQXNCO0FBQUE7O0FBQUE7O0FBQUEsb0JBQ0VDLHdEQUFVLENBQUNDLDZDQUFELENBRFo7QUFBQSxNQUMzQkMsS0FEMkIsZUFDM0JBLEtBRDJCO0FBQUEsTUFDcEJDLFFBRG9CLGVBQ3BCQSxRQURvQjtBQUFBLE1BQ1ZDLE9BRFUsZUFDVkEsT0FEVTs7QUFBQSxrQkFFTEMsc0RBQVEsQ0FBQyxJQUFELENBRkg7QUFBQSxNQUU1QkMsT0FGNEI7QUFBQSxNQUVuQkMsVUFGbUI7O0FBQUEsbUJBR1hGLHNEQUFRLENBQUMsRUFBRCxD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O0FBQUE7QUFBQSxlQURGO0FBWUQ7QUFDRixHQWpCRDs7QUFrQkEsU0FBT0MsTUFBTSxFQUFiO0FBQ0Q7O0dBN0Z1Qi9CLFU7VUFhUGtCLHFEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FjdGl2aXR5L3Zpc2l0L3BsYW4vW2lkXS92aXNpYmlsaXR5Ljc1ZWUzNTk0MjUzNmEzZmQ0NWEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvcGFnZXMvVmlzaXRQbGFuRGV0YWlsLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCBOYXYgZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvTmF2XCI7XHJcbmltcG9ydCB7IFN0b3JlcyB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9zdG9yZVwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9TcGlubmVyXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZpc2liaWxpdHkoKSB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2gsIGFjdGlvbnMgfSA9IHVzZUNvbnRleHQoU3RvcmVzKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbcGxhbiwgc2V0UGxhbl0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2R1bW15LCBzZXREdW1teV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdmlzLCBzZXRWaXNdID0gdXNlU3RhdGUoW1xyXG4gICAgeyBmaWxlOiBudWxsLCB0eXBlOiBudWxsIH0sXHJcbiAgICB7IGZpbGU6IG51bGwsIHR5cGU6IG51bGwgfSxcclxuICAgIHsgZmlsZTogbnVsbCwgdHlwZTogbnVsbCB9LFxyXG4gICAgeyBmaWxlOiBudWxsLCB0eXBlOiBudWxsIH0sXHJcbiAgICB7IGZpbGU6IG51bGwsIHR5cGU6IG51bGwgfSxcclxuICAgIHsgZmlsZTogbnVsbCwgdHlwZTogbnVsbCB9LFxyXG4gIF0pO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJvdXRlci5xdWVyeS5pZCkge1xyXG4gICAgICBmZXRjaChcclxuICAgICAgICBgaHR0cDovLzEwLjEwMC40LjExNjo4MjMwL2FwaS9BY3Rpdml0eVZpc2l0UGxhbi9HZXRBY3Rpdml0eVZpc2l0UGxhbkJ5SWQvJHtyb3V0ZXIucXVlcnkuaWR9YFxyXG4gICAgICApXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIHNldFBsYW4oZGF0YSk7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIucXVlcnkuaWRdKTtcclxuXHJcbiAgY29uc3QgcmVuZGVySW5wdXRVcGxvYWQgPSAoKSA9PiB7XHJcbiAgICB2YXIgcmVuZGVyID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA2OyBpKyspIHtcclxuICAgICAgLy8gY29uc29sZS5sb2codmlzW2ldLmZpbGUpO1xyXG4gICAgICByZW5kZXIucHVzaChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aXNpYmlsaXR5X2dyaWR9PlxyXG4gICAgICAgICAgICA8ZGl2PlBPU00ge2l9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlzaWJpbGl0eV9kcm9wZG93bn0+XHJcbiAgICAgICAgICAgICAge2NvbnNvbGUubG9nKHZpc1tpXSl9XHJcbiAgICAgICAgICAgICAgey8qIHt2aXNbaV0gIT0gbnVsbCA/IHZpc1tpXS5maWxlLm5hbWUgOiBcIlwifSAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLm5ld19idXR0b259IGh0bWxGb3I9e2B1cGxvYWQke2l9YH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17XCIvY2FtZXJhLnN2Z1wifVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxOHB4XCIsIHZlcnRpY2FsQWxpZ246IFwiYmFzZWxpbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF9maWxlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2aXMuc3BsaWNlKGksIDAsIHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLnZpc1tpXSxcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGU6IGUudGFyZ2V0LmZpbGVzWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXREdW1teShkdW1teSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBpZD17YHVwbG9hZCR7aX1gfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgICAgICAgICBjYXB0dXJlPVwiZW52aXJvbm1lbnRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlbmRlcjtcclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgPE5hdlxyXG4gICAgICAgICAgICAgIHRpdGxlPXtcIlZpc2liaWxpdHlcIn1cclxuICAgICAgICAgICAgICBiYWNrSHJlZj17YC9hY3Rpdml0eS92aXNpdC9wbGFuLyR7cGxhbi5pZH1gfVxyXG4gICAgICAgICAgICAgIGNvbG9yPXtcIndoaXRlXCJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+e3JlbmRlcklucHV0VXBsb2FkKCl9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiByZW5kZXIoKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9