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
      render.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.visibility_grid,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: ["POSM ", i]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.visibility_dropdown,
            children: vis[i - 1].file != null ? vis[i - 1].file.name : ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
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
                lineNumber: 55,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.input_file,
                onChange: function onChange(e) {
                  vis.splice(i - 1, 0, _objectSpread(_objectSpread({}, vis), {}, {
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
                lineNumber: 59,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
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
        lineNumber: 84,
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
            lineNumber: 89,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,
            children: renderInputUpload()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWN0aXZpdHkvdmlzaXQvcGxhbi8vdmlzaWJpbGl0eS5qc3giXSwibmFtZXMiOlsidmlzaWJpbGl0eSIsInVzZUNvbnRleHQiLCJTdG9yZXMiLCJzdGF0ZSIsImRpc3BhdGNoIiwiYWN0aW9ucyIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJwbGFuIiwic2V0UGxhbiIsImR1bW15Iiwic2V0RHVtbXkiLCJmaWxlIiwidHlwZSIsInZpcyIsInNldFZpcyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInF1ZXJ5IiwiaWQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInJlbmRlcklucHV0VXBsb2FkIiwicmVuZGVyIiwiaSIsInB1c2giLCJzdHlsZXMiLCJ2aXNpYmlsaXR5X2dyaWQiLCJ2aXNpYmlsaXR5X2Ryb3Bkb3duIiwibmFtZSIsIm5ld19idXR0b24iLCJ3aWR0aCIsInZlcnRpY2FsQWxpZ24iLCJpbnB1dF9maWxlIiwiZSIsInNwbGljZSIsInRhcmdldCIsImZpbGVzIiwiY29udGFpbmVyIiwid3JhcHBlciIsIm1haW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU0EsVUFBVCxHQUFzQjtBQUFBOztBQUFBOztBQUFBLG9CQUNFQyx3REFBVSxDQUFDQyw2Q0FBRCxDQURaO0FBQUEsTUFDM0JDLEtBRDJCLGVBQzNCQSxLQUQyQjtBQUFBLE1BQ3BCQyxRQURvQixlQUNwQkEsUUFEb0I7QUFBQSxNQUNWQyxPQURVLGVBQ1ZBLE9BRFU7O0FBQUEsa0JBRUxDLHNEQUFRLENBQUMsSUFBRCxDQUZIO0FBQUEsTUFFNUJDLE9BRjRCO0FBQUEsTUFFbkJDLFVBRm1COztBQUFBLG1CQUdYRixzREFBUSxDQUFD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bEIsaUJBQWlCO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBWUQ7QUFDRixHQWpCRDs7QUFrQkEsU0FBT0MsTUFBTSxFQUFiO0FBQ0Q7O0dBM0Z1Qi9CLFU7VUFhUGtCLHFEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FjdGl2aXR5L3Zpc2l0L3BsYW4vW2lkXS92aXNpYmlsaXR5Ljc0NjM5NzA1YmI2MWUzNTQzZDUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvcGFnZXMvVmlzaXRQbGFuRGV0YWlsLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCBOYXYgZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvTmF2XCI7XHJcbmltcG9ydCB7IFN0b3JlcyB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9zdG9yZVwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9TcGlubmVyXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZpc2liaWxpdHkoKSB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2gsIGFjdGlvbnMgfSA9IHVzZUNvbnRleHQoU3RvcmVzKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbcGxhbiwgc2V0UGxhbl0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2R1bW15LCBzZXREdW1teV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdmlzLCBzZXRWaXNdID0gdXNlU3RhdGUoW1xyXG4gICAgeyBmaWxlOiBudWxsLCB0eXBlOiBudWxsIH0sXHJcbiAgICB7IGZpbGU6IG51bGwsIHR5cGU6IG51bGwgfSxcclxuICAgIHsgZmlsZTogbnVsbCwgdHlwZTogbnVsbCB9LFxyXG4gICAgeyBmaWxlOiBudWxsLCB0eXBlOiBudWxsIH0sXHJcbiAgICB7IGZpbGU6IG51bGwsIHR5cGU6IG51bGwgfSxcclxuICAgIHsgZmlsZTogbnVsbCwgdHlwZTogbnVsbCB9LFxyXG4gIF0pO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJvdXRlci5xdWVyeS5pZCkge1xyXG4gICAgICBmZXRjaChcclxuICAgICAgICBgaHR0cDovLzEwLjEwMC40LjExNjo4MjMwL2FwaS9BY3Rpdml0eVZpc2l0UGxhbi9HZXRBY3Rpdml0eVZpc2l0UGxhbkJ5SWQvJHtyb3V0ZXIucXVlcnkuaWR9YFxyXG4gICAgICApXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIHNldFBsYW4oZGF0YSk7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIucXVlcnkuaWRdKTtcclxuXHJcbiAgY29uc3QgcmVuZGVySW5wdXRVcGxvYWQgPSAoKSA9PiB7XHJcbiAgICB2YXIgcmVuZGVyID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA2OyBpKyspIHtcclxuICAgICAgcmVuZGVyLnB1c2goXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlzaWJpbGl0eV9ncmlkfT5cclxuICAgICAgICAgICAgPGRpdj5QT1NNIHtpfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpc2liaWxpdHlfZHJvcGRvd259PlxyXG4gICAgICAgICAgICAgIHt2aXNbaSAtIDFdLmZpbGUgIT0gbnVsbCA/IHZpc1tpIC0gMV0uZmlsZS5uYW1lIDogXCJcIn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLm5ld19idXR0b259IGh0bWxGb3I9e2B1cGxvYWQke2l9YH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17XCIvY2FtZXJhLnN2Z1wifVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxOHB4XCIsIHZlcnRpY2FsQWxpZ246IFwiYmFzZWxpbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF9maWxlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2aXMuc3BsaWNlKGkgLSAxLCAwLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi52aXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlOiBlLnRhcmdldC5maWxlc1swXSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RHVtbXkoZHVtbXkgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgaWQ9e2B1cGxvYWQke2l9YH1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgICAgICAgY2FwdHVyZT1cImVudmlyb25tZW50XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZW5kZXI7XHJcbiAgfTtcclxuICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAobG9hZGluZykge1xyXG4gICAgICByZXR1cm4gPFNwaW5uZXIgLz47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxOYXZcclxuICAgICAgICAgICAgICB0aXRsZT17XCJWaXNpYmlsaXR5XCJ9XHJcbiAgICAgICAgICAgICAgYmFja0hyZWY9e2AvYWN0aXZpdHkvdmlzaXQvcGxhbi8ke3BsYW4uaWR9YH1cclxuICAgICAgICAgICAgICBjb2xvcj17XCJ3aGl0ZVwifVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PntyZW5kZXJJbnB1dFVwbG9hZCgpfTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gcmVuZGVyKCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==