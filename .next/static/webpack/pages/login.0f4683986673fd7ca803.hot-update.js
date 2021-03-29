webpackHotUpdate_N_E("pages/login",{

/***/ "./pages/login.jsx":
/*!*************************!*\
  !*** ./pages/login.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/pages/Login.module.css */ "./styles/pages/Login.module.css");
/* harmony import */ var _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Button */ "./components/Button.jsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store */ "./store/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../constant */ "./constant.js");




var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-new\\pages\\login.jsx",
    _s = $RefreshSig$();









function Login() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(_store__WEBPACK_IMPORTED_MODULE_8__["Stores"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch,
      actions = _useContext.actions;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(true),
      passVisibility = _useState[0],
      setPassVisibility = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      wrongUser = _useState2[0],
      setWrongUser = _useState2[1];

  var toggleVisibility = function toggleVisibility() {
    setPassVisibility(!passVisibility);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (localStorage.getItem("user")) {
      return next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/");
    }
  });

  var onLogin = function onLogin(values) {
    // `http://10.100.4.116:8229/api/user/login?username=${values.username}&&password=${values.password}`,
    fetch(_constant__WEBPACK_IMPORTED_MODULE_10__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_10__["API_USER"] + "/Login?username=".concat(values.username, "&&password=").concat(values.password), {
      method: "post",
      headers: {
        apiKey: _constant__WEBPACK_IMPORTED_MODULE_10__["TOKEN"]
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      if (data.status === 404) {
        setWrongUser(true);
        console.log(data);
      } else {
        setWrongUser(false);
        actions.userLogin(data);
        next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/");
      }
    })["catch"](function (err) {
      console.log(err);
      setWrongUser(true);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("title", {
        children: "Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.middle,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
        className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.img_security,
        src: "/security.svg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.border_content,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.main_text,
          children: "SAKA ARMOR"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, this), wrongUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          style: {
            color: "red"
          },
          children: "Wrong password or username!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }, this) : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_6__["Formik"], {
          initialValues: {
            username: "",
            password: ""
          },
          onSubmit: /*#__PURE__*/function () {
            var _ref = Object(C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values) {
              return C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (values.username !== "" && values.password !== "") {
                        onLogin(values);
                      } else {
                        setWrongUser(true);
                      }

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }(),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_6__["Form"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.input_text,
              children: "Username"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], {
              className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.input,
              id: "username",
              name: "username",
              placeholder: "Employee ID"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.input_text,
              children: "Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], {
              className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.input,
              id: "password",
              name: "password",
              type: passVisibility ? "password" : null,
              placeholder: "Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.button_container,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
                submit: true,
                text: "Log In"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.forgot_pass,
              children: "Forgot Password?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }, this);
}

_s(Login, "g/tqwb1ZrqSDFfyVzZ1YmMZMOyg=");

_c = Login;

var _c;

$RefreshReg$(_c, "Login");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanN4Il0sIm5hbWVzIjpbIkxvZ2luIiwidXNlQ29udGV4dCIsIlN0b3JlcyIsInN0YXRlIiwiZGlzcGF0Y2giLCJhY3Rpb25zIiwidXNlU3RhdGUiLCJwYXNzVmlzaWJpbGl0eSIsInNldFBhc3NWaXNpYmlsaXR5Iiwid3JvbmdVc2VyIiwic2V0V3JvbmdVc2VyIiwidG9nZ2xlVmlzaWJpbGl0eSIsInVzZUVmZmVjdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJSb3V0ZXIiLCJwdXNoIiwib25Mb2dpbiIsInZhbHVlcyIsImZldGNoIiwiQVBJX1VSTCIsIkFQSV9VU0VSIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJhcGlLZXkiLCJUT0tFTiIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsInVzZXJMb2dpbiIsImVyciIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1pZGRsZSIsImltZ19zZWN1cml0eSIsImJvcmRlcl9jb250ZW50IiwibWFpbl90ZXh0IiwiY29sb3IiLCJpbnB1dF90ZXh0IiwiaW5wdXQiLCJidXR0b25fY29udGFpbmVyIiwiZm9yZ290X3Bhc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUEsb0JBQ09DLHdEQUFVLENBQUNDLDZDQUFELENBRGpCO0FBQUEsTUFDdEJDLEtBRHNCLGVBQ3RCQSxLQURzQjtBQUFBLE1BQ2ZDLFFBRGUsZUFDZkEsUUFEZTtBQUFBLE1BQ0xDLE9BREssZUFDTEEsT0FESzs7QUFBQSxrQkFHY0Msc0RBQVEsQ0FBQyxJQUFELENBSHRCO0FBQUEsTUFHdkJDLGNBSHVCO0FBQUEsTUFHUEMsaUJBSE87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QUE7QUFBQTtBQUFBLGdCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0REOztHQXJHdUIvQyxLOztLQUFBQSxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjBmNDY4Mzk4NjY3M2ZkN2NhODAzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wYWdlcy9Mb2dpbi5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm1paywgRmllbGQsIEZvcm0gfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQnV0dG9uXCI7XHJcbmltcG9ydCB7IFN0b3JlcyB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgQVBJX1VSTCwgQVBJX1VTRVIsIFRPS0VOLCBBUElfVklTSVRfUExBTiB9IGZyb20gXCIuLi9jb25zdGFudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2gsIGFjdGlvbnMgfSA9IHVzZUNvbnRleHQoU3RvcmVzKTtcclxuXHJcbiAgY29uc3QgW3Bhc3NWaXNpYmlsaXR5LCBzZXRQYXNzVmlzaWJpbGl0eV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbd3JvbmdVc2VyLCBzZXRXcm9uZ1VzZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB0b2dnbGVWaXNpYmlsaXR5ID0gKCkgPT4ge1xyXG4gICAgc2V0UGFzc1Zpc2liaWxpdHkoIXBhc3NWaXNpYmlsaXR5KTtcclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKSB7XHJcbiAgICAgIHJldHVybiBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG9uTG9naW4gPSAodmFsdWVzKSA9PiB7XHJcbiAgICAvLyBgaHR0cDovLzEwLjEwMC40LjExNjo4MjI5L2FwaS91c2VyL2xvZ2luP3VzZXJuYW1lPSR7dmFsdWVzLnVzZXJuYW1lfSYmcGFzc3dvcmQ9JHt2YWx1ZXMucGFzc3dvcmR9YCxcclxuICAgIGZldGNoKFxyXG4gICAgICBBUElfVVJMICtcclxuICAgICAgICBBUElfVVNFUiArXHJcbiAgICAgICAgYC9Mb2dpbj91c2VybmFtZT0ke3ZhbHVlcy51c2VybmFtZX0mJnBhc3N3b3JkPSR7dmFsdWVzLnBhc3N3b3JkfWAsXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gNDA0KSB7XHJcbiAgICAgICAgICBzZXRXcm9uZ1VzZXIodHJ1ZSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2V0V3JvbmdVc2VyKGZhbHNlKTtcclxuICAgICAgICAgIGFjdGlvbnMudXNlckxvZ2luKGRhdGEpO1xyXG4gICAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHNldFdyb25nVXNlcih0cnVlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkxvZ2luPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5taWRkbGV9PlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaW1nX3NlY3VyaXR5fSBzcmM9e1wiL3NlY3VyaXR5LnN2Z1wifSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9yZGVyX2NvbnRlbnR9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluX3RleHR9PlNBS0EgQVJNT1I8L2Rpdj5cclxuICAgICAgICAgIHt3cm9uZ1VzZXIgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+V3JvbmcgcGFzc3dvcmQgb3IgdXNlcm5hbWUhPC9kaXY+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHZhbHVlcy51c2VybmFtZSAhPT0gXCJcIiAmJiB2YWx1ZXMucGFzc3dvcmQgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIG9uTG9naW4odmFsdWVzKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0V3JvbmdVc2VyKHRydWUpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF90ZXh0fT5Vc2VybmFtZTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtcGxveWVlIElEXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfdGV4dH0+UGFzc3dvcmQ8L2Rpdj5cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT17cGFzc1Zpc2liaWxpdHkgPyBcInBhc3N3b3JkXCIgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzdWJtaXQgdGV4dD17XCJMb2cgSW5cIn0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcmdvdF9wYXNzfT5Gb3Jnb3QgUGFzc3dvcmQ/PC9kaXY+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==