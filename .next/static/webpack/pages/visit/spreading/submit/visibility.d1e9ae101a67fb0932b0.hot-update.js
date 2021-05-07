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

  if (type === "POSM") {
    var default_ = value ? {
      namaFile: value,
      value: value
    } : {
      namaFile: "SELECT",
      value: {}
    };
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
    className: _styles_components_Dropdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    onChange: function onChange(e) {
      return _onChange(e);
    },
    children: [default_].concat(Object(C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(options)).map(function (val, index) {
      return val && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
        value: val.value,
        children: "? val.program"
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ecm9wZG93bi5qc3giXSwibmFtZXMiOlsiRHJvcGRvd24iLCJvcHRpb25zIiwib25DaGFuZ2UiLCJ2YWx1ZSIsInR5cGUiLCJkZWZhdWx0XyIsIm5hbWFGaWxlIiwic3R5bGVzIiwiY29udGFpbmVyIiwiZSIsIm1hcCIsInZhbCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUE2QztBQUFBLDBCQUExQ0MsT0FBMEM7QUFBQSxNQUExQ0EsT0FBMEMsNkJBQWhDLEVBQWdDO0FBQUEsTUFBNUJDLFNBQTRCLFFBQTVCQSxRQUE0QjtBQUFBLE1BQWxCQyxLQUFrQixRQUFsQkEsS0FBa0I7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQzVELE1BQUlBLElBQUksS0FBSyxNQUFiLEVBQXFCO0FBQ25CLFFBQUlDLFFBQVEsR0FBR0YsS0FBSyxHQUNoQjtBQUFFRyxjQUFRLEVBQUVILEtBQVo7QUFBbUJBLFdBQUssRUFBTEE7QUFBbkIsS0FEZ0IsR0FFaEI7QUFBRUcsY0FBUSxFQUFFLFFBQVo7QUFBc0JILFdBQUssRUFBRTtBQUE3QixLQUZKO0FBR0Q7O0FBQ0Qsc0JBQ0U7QUFBUSxhQUFTLEVBQUVJLDZFQUFNLENBQUNDLFNBQTFCO0FBQXFDLFlBQVEsRUFBRSxrQkFBQ0MsQ0FBRDtBQUFBLGFBQU9QLFNBQVEsQ0FBQ08sQ0FBRCxDQUFmO0FBQUEsS0FBL0M7QUFBQSxjQUNHLENBQUNKLFFBQUQsa0tBQWNKLE9BQWQsR0FBdUJTLEdBQXZCLENBQ0MsVUFBQ0MsR0FBRCxFQUFNQyxLQUFOO0FBQUEsYUFDRUQsR0FBRyxpQkFDRDtBQUFvQixhQUFLLEVBQUVBLEdBQUcsQ0FBQ1IsS0FBL0I7QUFBQTtBQUFBLFNBQWFTLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUEsS0FERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVlELENBbEJEOztLQUFNWixRO0FBb0JTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92aXNpdC9zcHJlYWRpbmcvc3VibWl0L3Zpc2liaWxpdHkuZDFlOWFlMTAxYTY3ZmIwOTMyYjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvY29tcG9uZW50cy9Ecm9wZG93bi5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBEcm9wZG93biA9ICh7IG9wdGlvbnMgPSBbXSwgb25DaGFuZ2UsIHZhbHVlLCB0eXBlIH0pID0+IHtcclxuICBpZiAodHlwZSA9PT0gXCJQT1NNXCIpIHtcclxuICAgIHZhciBkZWZhdWx0XyA9IHZhbHVlXHJcbiAgICAgID8geyBuYW1hRmlsZTogdmFsdWUsIHZhbHVlIH1cclxuICAgICAgOiB7IG5hbWFGaWxlOiBcIlNFTEVDVFwiLCB2YWx1ZToge30gfTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWxlY3QgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGUpfT5cclxuICAgICAge1tkZWZhdWx0XywgLi4ub3B0aW9uc10ubWFwKFxyXG4gICAgICAgICh2YWwsIGluZGV4KSA9PlxyXG4gICAgICAgICAgdmFsICYmIChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17dmFsLnZhbHVlfT5cclxuICAgICAgICAgICAgICA/IHZhbC5wcm9ncmFtXHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKVxyXG4gICAgICApfVxyXG4gICAgPC9zZWxlY3Q+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9