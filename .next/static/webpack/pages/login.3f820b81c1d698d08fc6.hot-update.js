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
  }; // const onLogin = (values) => {
  //   fetch(
  //     `http://10.100.4.116:8229/api/user/login?username=${values.username}&&password=${values.password}`,
  //     {
  //       method: "post",
  //     }
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       if (data.status === 404) {
  //         setWrongUser(true);
  //         console.log(data);
  //       } else {
  //         setWrongUser(false);
  //         actions.userLogin(data);
  //         Router.push("/");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setWrongUser(true);
  //     });
  // };


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("title", {
        children: "Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.middle,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
        className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.img_security,
        src: "/security.svg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.border_content,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.main_text,
          children: "SAKA ARMOR"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, this), wrongUser ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          style: {
            color: "red"
          },
          children: "Wrong password or username!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
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
              lineNumber: 110,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], {
              className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.input,
              id: "username",
              name: "username",
              placeholder: "Employee ID"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.input_text,
              children: "Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], {
              className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.input,
              id: "password",
              name: "password",
              type: passVisibility ? "password" : null,
              placeholder: "Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.button_container,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
                submit: true,
                text: "Log In"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.forgot_pass,
              children: "Forgot Password?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 82,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanN4Il0sIm5hbWVzIjpbIkxvZ2luIiwidXNlQ29udGV4dCIsIlN0b3JlcyIsInN0YXRlIiwiZGlzcGF0Y2giLCJhY3Rpb25zIiwidXNlU3RhdGUiLCJwYXNzVmlzaWJpbGl0eSIsInNldFBhc3NWaXNpYmlsaXR5Iiwid3JvbmdVc2VyIiwic2V0V3JvbmdVc2VyIiwidG9nZ2xlVmlzaWJpbGl0eSIsInVzZUVmZmVjdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJSb3V0ZXIiLCJwdXNoIiwib25Mb2dpbiIsInZhbHVlcyIsImZldGNoIiwiQVBJX1VSTCIsIkFQSV9VU0VSIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJhcGlLZXkiLCJUT0tFTiIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsInVzZXJMb2dpbiIsImVyciIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1pZGRsZSIsImltZ19zZWN1cml0eSIsImJvcmRlcl9jb250ZW50IiwibWFpbl90ZXh0IiwiY29sb3IiLCJpbnB1dF90ZXh0IiwiaW5wdXQiLCJidXR0b25fY29udGFpbmVyIiwiZm9yZ290X3Bhc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUEsb0JBQ09DLHdEQUFVLENBQUNDLDZDQUFELENBRGpCO0FBQUEsTUFDdEJDLEtBRHNCLGVBQ3RCQSxLQURzQjtBQUFBLE1BQ2ZDLFFBRGUsZUFDZkEsUUFEZTtBQUFBLE1BQ0xDLE9BREssZUFDTEEsT0FESzs7QUFBQSxrQkFHY0Msc0RBQVEsQ0FBQyxJQUFELENBSHRCO0FBQUEsTUFHdkJDLGNBSHVCO0FBQUEsTUFHUEMsaUJBSE87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O0FBQUEsb0JBaEJGLGVBbUJFO0FBQUssdUJBQVMsRUFBRVQscUVBQU0sQ0FBQ1UsV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzREQ7O0dBNUh1Qi9DLEs7O0tBQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uM2Y4MjBiODFjMWQ2OThkMDhmYzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3BhZ2VzL0xvZ2luLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybWlrLCBGaWVsZCwgRm9ybSB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIjtcclxuaW1wb3J0IHsgU3RvcmVzIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBBUElfVVJMLCBBUElfVVNFUiwgVE9LRU4sIEFQSV9WSVNJVF9QTEFOIH0gZnJvbSBcIi4uL2NvbnN0YW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcclxuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCwgYWN0aW9ucyB9ID0gdXNlQ29udGV4dChTdG9yZXMpO1xyXG5cclxuICBjb25zdCBbcGFzc1Zpc2liaWxpdHksIHNldFBhc3NWaXNpYmlsaXR5XSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFt3cm9uZ1VzZXIsIHNldFdyb25nVXNlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVZpc2liaWxpdHkgPSAoKSA9PiB7XHJcbiAgICBzZXRQYXNzVmlzaWJpbGl0eSghcGFzc1Zpc2liaWxpdHkpO1xyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpIHtcclxuICAgICAgcmV0dXJuIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH1cclxuICB9KTtcclxuICBjb25zdCBvbkxvZ2luID0gKHZhbHVlcykgPT4ge1xyXG4gICAgZmV0Y2goXHJcbiAgICAgIEFQSV9VUkwgK1xyXG4gICAgICAgIEFQSV9VU0VSICtcclxuICAgICAgICBgL0xvZ2luP3VzZXJuYW1lPSR7dmFsdWVzLnVzZXJuYW1lfSYmcGFzc3dvcmQ9JHt2YWx1ZXMucGFzc3dvcmR9YCxcclxuICAgICAge1xyXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09PSA0MDQpIHtcclxuICAgICAgICAgIHNldFdyb25nVXNlcih0cnVlKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXRXcm9uZ1VzZXIoZmFsc2UpO1xyXG4gICAgICAgICAgYWN0aW9ucy51c2VyTG9naW4oZGF0YSk7XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgc2V0V3JvbmdVc2VyKHRydWUpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG4gIC8vIGNvbnN0IG9uTG9naW4gPSAodmFsdWVzKSA9PiB7XHJcbiAgLy8gICBmZXRjaChcclxuICAvLyAgICAgYGh0dHA6Ly8xMC4xMDAuNC4xMTY6ODIyOS9hcGkvdXNlci9sb2dpbj91c2VybmFtZT0ke3ZhbHVlcy51c2VybmFtZX0mJnBhc3N3b3JkPSR7dmFsdWVzLnBhc3N3b3JkfWAsXHJcbiAgLy8gICAgIHtcclxuICAvLyAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gIC8vICAgICB9XHJcbiAgLy8gICApXHJcbiAgLy8gICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gIC8vICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgLy8gICAgICAgaWYgKGRhdGEuc3RhdHVzID09PSA0MDQpIHtcclxuICAvLyAgICAgICAgIHNldFdyb25nVXNlcih0cnVlKTtcclxuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIC8vICAgICAgIH0gZWxzZSB7XHJcbiAgLy8gICAgICAgICBzZXRXcm9uZ1VzZXIoZmFsc2UpO1xyXG4gIC8vICAgICAgICAgYWN0aW9ucy51c2VyTG9naW4oZGF0YSk7XHJcbiAgLy8gICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gIC8vICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgLy8gICAgICAgc2V0V3JvbmdVc2VyKHRydWUpO1xyXG4gIC8vICAgICB9KTtcclxuICAvLyB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+TG9naW48L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1pZGRsZX0+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pbWdfc2VjdXJpdHl9IHNyYz17XCIvc2VjdXJpdHkuc3ZnXCJ9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3JkZXJfY29udGVudH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5fdGV4dH0+U0FLQSBBUk1PUjwvZGl2PlxyXG4gICAgICAgICAge3dyb25nVXNlciA/IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT5Xcm9uZyBwYXNzd29yZCBvciB1c2VybmFtZSE8L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgICBpZiAodmFsdWVzLnVzZXJuYW1lICE9PSBcIlwiICYmIHZhbHVlcy5wYXNzd29yZCAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgb25Mb2dpbih2YWx1ZXMpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRXcm9uZ1VzZXIodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0X3RleHR9PlVzZXJuYW1lPC9kaXY+XHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1wbG95ZWUgSURcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF90ZXh0fT5QYXNzd29yZDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPXtwYXNzVmlzaWJpbGl0eSA/IFwicGFzc3dvcmRcIiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHN1Ym1pdCB0ZXh0PXtcIkxvZyBJblwifSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9yZ290X3Bhc3N9PkZvcmdvdCBQYXNzd29yZD88L2Rpdj5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9