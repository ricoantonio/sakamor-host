webpackHotUpdate_N_E("pages/visit/spreading/submit/visibility",{

/***/ "./components/Dropdown.jsx":
/*!*********************************!*\
  !*** ./components/Dropdown.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_components_Dropdown_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/Dropdown.module.css */ "./styles/components/Dropdown.module.css");
/* harmony import */ var _styles_components_Dropdown_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Dropdown_module_css__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-new\\components\\Dropdown.jsx",
    _this = undefined;





var Dropdown = function Dropdown(_ref) {
  var _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      _onChange = _ref.onChange,
      value = _ref.value,
      type = _ref.type;
  var default_ = type === "POSM" ? {
    program: value,
    value: value
  } : type === "JENIS_CHANNEL" ? {
    program: value,
    value: value
  } : {
    program: "SELECT",
    value: {}
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
    className: _styles_components_Dropdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    onChange: function onChange(e) {
      return _onChange(e);
    },
    children: [default_].concat(Object(C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(options)).map(function (val, index) {
      return val && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
        value: val.value,
        children: type == "POSM" ? val.program : type == "JENIS_CHANNEL" ? val.program : ""
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, _this);
};

_c = Dropdown;
/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

var _c;

$RefreshReg$(_c, "Dropdown");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ecm9wZG93bi5qc3giXSwibmFtZXMiOlsiRHJvcGRvd24iLCJvcHRpb25zIiwib25DaGFuZ2UiLCJ2YWx1ZSIsInR5cGUiLCJkZWZhdWx0XyIsInByb2dyYW0iLCJzdHlsZXMiLCJjb250YWluZXIiLCJlIiwibWFwIiwidmFsIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQTZDO0FBQUEsMEJBQTFDQyxPQUEwQztBQUFBLE1BQTFDQSxPQUEwQyw2QkFBaEMsRUFBZ0M7QUFBQSxNQUE1QkMsU0FBNEIsUUFBNUJBLFFBQTRCO0FBQUEsTUFBbEJDLEtBQWtCLFFBQWxCQSxLQUFrQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUM1RCxNQUFNQyxRQUFRLEdBQ1pELElBQUksS0FBSyxNQUFULEdBQ0k7QUFBRUUsV0FBTyxFQUFFSCxLQUFYO0FBQWtCQSxTQUFLLEVBQUxBO0FBQWxCLEdBREosR0FFSUMsSUFBSSxLQUFLLGVBQVQsR0FDQTtBQUFFRSxXQUFPLEVBQUVILEtBQVg7QUFBa0JBLFNBQUssRUFBTEE7QUFBbEIsR0FEQSxHQUVBO0FBQUVHLFdBQU8sRUFBRSxRQUFYO0FBQXFCSCxTQUFLLEVBQUU7QUFBNUIsR0FMTjtBQU1BLHNCQUNFO0FBQVEsYUFBUyxFQUFFSSw2RUFBTSxDQUFDQyxTQUExQjtBQUFxQyxZQUFRLEVBQUUsa0JBQUNDLENBQUQ7QUFBQSxhQUFPUCxTQUFRLENBQUNPLENBQUQsQ0FBZjtBQUFBLEtBQS9DO0FBQUEsY0FDRyxDQUFDSixRQUFELGtLQUFjSixPQUFkLEdBQXVCUyxHQUF2QixDQUNDLFVBQUNDLEdBQUQsRUFBTUMsS0FBTjtBQUFBLGFBQ0VELEdBQUcsaUJBQ0Q7QUFBb0IsYUFBSyxFQUFFQSxHQUFHLENBQUNSLEtBQS9CO0FBQUEsa0JBQ0dDLElBQUksSUFBSSxNQUFSLEdBQ0dPLEdBQUcsQ0FBQ0wsT0FEUCxHQUVHRixJQUFJLElBQUksZUFBUixHQUNBTyxHQUFHLENBQUNMLE9BREosR0FFQTtBQUxOLFNBQWFNLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUEsS0FERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdCRCxDQXZCRDs7S0FBTVosUTtBQXlCU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmlzaXQvc3ByZWFkaW5nL3N1Ym1pdC92aXNpYmlsaXR5LjBmNmQ5NDY4YmNhNjRmMTc3MTQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NvbXBvbmVudHMvRHJvcGRvd24ubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgRHJvcGRvd24gPSAoeyBvcHRpb25zID0gW10sIG9uQ2hhbmdlLCB2YWx1ZSwgdHlwZSB9KSA9PiB7XHJcbiAgY29uc3QgZGVmYXVsdF8gPVxyXG4gICAgdHlwZSA9PT0gXCJQT1NNXCJcclxuICAgICAgPyB7IHByb2dyYW06IHZhbHVlLCB2YWx1ZSB9XHJcbiAgICAgIDogdHlwZSA9PT0gXCJKRU5JU19DSEFOTkVMXCJcclxuICAgICAgPyB7IHByb2dyYW06IHZhbHVlLCB2YWx1ZSB9XHJcbiAgICAgIDogeyBwcm9ncmFtOiBcIlNFTEVDVFwiLCB2YWx1ZToge30gfTtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlbGVjdCBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9IG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZSl9PlxyXG4gICAgICB7W2RlZmF1bHRfLCAuLi5vcHRpb25zXS5tYXAoXHJcbiAgICAgICAgKHZhbCwgaW5kZXgpID0+XHJcbiAgICAgICAgICB2YWwgJiYgKFxyXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXt2YWwudmFsdWV9PlxyXG4gICAgICAgICAgICAgIHt0eXBlID09IFwiUE9TTVwiXHJcbiAgICAgICAgICAgICAgICA/IHZhbC5wcm9ncmFtXHJcbiAgICAgICAgICAgICAgICA6IHR5cGUgPT0gXCJKRU5JU19DSEFOTkVMXCJcclxuICAgICAgICAgICAgICAgID8gdmFsLnByb2dyYW1cclxuICAgICAgICAgICAgICAgIDogXCJcIn1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApXHJcbiAgICAgICl9XHJcbiAgICA8L3NlbGVjdD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=