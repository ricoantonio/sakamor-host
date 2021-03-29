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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanN4Il0sIm5hbWVzIjpbIkxvZ2luIiwidXNlQ29udGV4dCIsIlN0b3JlcyIsInN0YXRlIiwiZGlzcGF0Y2giLCJhY3Rpb25zIiwidXNlU3RhdGUiLCJwYXNzVmlzaWJpbGl0eSIsInNldFBhc3NWaXNpYmlsaXR5Iiwid3JvbmdVc2VyIiwic2V0V3JvbmdVc2VyIiwidG9nZ2xlVmlzaWJpbGl0eSIsInVzZUVmZmVjdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJSb3V0ZXIiLCJwdXNoIiwib25Mb2dpbiIsInZhbHVlcyIsImZldGNoIiwiQVBJX1VSTCIsIkFQSV9VU0VSIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJhcGlLZXkiLCJUT0tFTiIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsInVzZXJMb2dpbiIsImVyciIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1pZGRsZSIsImltZ19zZWN1cml0eSIsImJvcmRlcl9jb250ZW50IiwibWFpbl90ZXh0IiwiY29sb3IiLCJpbnB1dF90ZXh0IiwiaW5wdXQiLCJidXR0b25fY29udGFpbmVyIiwiZm9yZ290X3Bhc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUEsb0JBQ09DLHdEQUFVLENBQUNDLDZDQUFELENBRGpCO0FBQUEsTUFDdEJDLEtBRHNCLGVBQ3RCQSxLQURzQjtBQUFBLE1BQ2ZDLFFBRGUsZUFDZkEsUUFEZTtBQUFBLE1BQ0xDLE9BREssZUFDTEEsT0FESzs7QUFBQSxrQkFHY0Msc0RBQVEsQ0FBQyxJQUFELENBSHRCO0FBQUEsTUFHdkJDLGNBSHVCO0FBQUEsTUFHUEMsaUJBSE87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O0FBQUEsb0JBaEJGLGVBbUJFO0FBQUssdUJBQVMsRUFBRVQscUVBQU0sQ0FBQ1UsV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzREQ7O0dBNUh1Qi9DLEs7O0tBQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uYThlZGQzMGM0Zjk1ZjMyMjBjNTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3BhZ2VzL0xvZ2luLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybWlrLCBGaWVsZCwgRm9ybSB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIjtcclxuaW1wb3J0IHsgU3RvcmVzIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBBUElfVVJMLCBBUElfVVNFUiwgVE9LRU4gfSBmcm9tIFwiLi4vY29uc3RhbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoLCBhY3Rpb25zIH0gPSB1c2VDb250ZXh0KFN0b3Jlcyk7XHJcblxyXG4gIGNvbnN0IFtwYXNzVmlzaWJpbGl0eSwgc2V0UGFzc1Zpc2liaWxpdHldID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3dyb25nVXNlciwgc2V0V3JvbmdVc2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlVmlzaWJpbGl0eSA9ICgpID0+IHtcclxuICAgIHNldFBhc3NWaXNpYmlsaXR5KCFwYXNzVmlzaWJpbGl0eSk7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSkge1xyXG4gICAgICByZXR1cm4gUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGNvbnN0IG9uTG9naW4gPSAodmFsdWVzKSA9PiB7XHJcbiAgICBmZXRjaChcclxuICAgICAgQVBJX1VSTCArXHJcbiAgICAgICAgQVBJX1VTRVIgK1xyXG4gICAgICAgIGAvTG9naW4/dXNlcm5hbWU9JHt2YWx1ZXMudXNlcm5hbWV9JiZwYXNzd29yZD0ke3ZhbHVlcy5wYXNzd29yZH1gLFxyXG4gICAgICB7XHJcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgIClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT09IDQwNCkge1xyXG4gICAgICAgICAgc2V0V3JvbmdVc2VyKHRydWUpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldFdyb25nVXNlcihmYWxzZSk7XHJcbiAgICAgICAgICBhY3Rpb25zLnVzZXJMb2dpbihkYXRhKTtcclxuICAgICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBzZXRXcm9uZ1VzZXIodHJ1ZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbiAgLy8gY29uc3Qgb25Mb2dpbiA9ICh2YWx1ZXMpID0+IHtcclxuICAvLyAgIGZldGNoKFxyXG4gIC8vICAgICBgaHR0cDovLzEwLjEwMC40LjExNjo4MjI5L2FwaS91c2VyL2xvZ2luP3VzZXJuYW1lPSR7dmFsdWVzLnVzZXJuYW1lfSYmcGFzc3dvcmQ9JHt2YWx1ZXMucGFzc3dvcmR9YCxcclxuICAvLyAgICAge1xyXG4gIC8vICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgLy8gICAgIH1cclxuICAvLyAgIClcclxuICAvLyAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgLy8gICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAvLyAgICAgfSlcclxuICAvLyAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAvLyAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT09IDQwNCkge1xyXG4gIC8vICAgICAgICAgc2V0V3JvbmdVc2VyKHRydWUpO1xyXG4gIC8vICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgLy8gICAgICAgfSBlbHNlIHtcclxuICAvLyAgICAgICAgIHNldFdyb25nVXNlcihmYWxzZSk7XHJcbiAgLy8gICAgICAgICBhY3Rpb25zLnVzZXJMb2dpbihkYXRhKTtcclxuICAvLyAgICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgLy8gICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAvLyAgICAgICBzZXRXcm9uZ1VzZXIodHJ1ZSk7XHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Mb2dpbjwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWlkZGxlfT5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmltZ19zZWN1cml0eX0gc3JjPXtcIi9zZWN1cml0eS5zdmdcIn0gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvcmRlcl9jb250ZW50fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbl90ZXh0fT5TQUtBIEFSTU9SPC9kaXY+XHJcbiAgICAgICAgICB7d3JvbmdVc2VyID8gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19Pldyb25nIHBhc3N3b3JkIG9yIHVzZXJuYW1lITwvZGl2PlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlcykgPT4ge1xyXG4gICAgICAgICAgICAgIGlmICh2YWx1ZXMudXNlcm5hbWUgIT09IFwiXCIgJiYgdmFsdWVzLnBhc3N3b3JkICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBvbkxvZ2luKHZhbHVlcyk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFdyb25nVXNlcih0cnVlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfdGV4dH0+VXNlcm5hbWU8L2Rpdj5cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbXBsb3llZSBJRFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0X3RleHR9PlBhc3N3b3JkPC9kaXY+XHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9e3Bhc3NWaXNpYmlsaXR5ID8gXCJwYXNzd29yZFwiIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gc3VibWl0IHRleHQ9e1wiTG9nIEluXCJ9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3Jnb3RfcGFzc30+Rm9yZ290IFBhc3N3b3JkPzwvZGl2PlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=