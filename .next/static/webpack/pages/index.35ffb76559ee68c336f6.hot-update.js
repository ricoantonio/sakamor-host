webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/pages/Home.module.css */ "./styles/pages/Home.module.css");
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store */ "./store/index.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Spinner */ "./components/Spinner.jsx");
/* harmony import */ var _components_BotNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/BotNav */ "./components/BotNav.jsx");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Button */ "./components/Button.jsx");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Card */ "./components/Card.jsx");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../constant */ "./constant.js");



var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-new\\pages\\index.jsx",
    _s = $RefreshSig$();












function Home() {
  _s();

  var _this = this;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store__WEBPACK_IMPORTED_MODULE_6__["Stores"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch,
      actions = _useContext.actions;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("PLAN"),
      focus = _useState[0],
      setFocus = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      plan = _useState2[0],
      setPlan = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      topMenu = _useState3[0],
      setTopMenu = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loading = _useState4[0],
      setLoading = _useState4[1]; // useEffect(() => {
  //   const userData = JSON.parse(localStorage.getItem("user"));
  //   if (userData) {
  //     actions.userLogin(userData);
  //     fetch(
  //       `http://10.100.4.116:8229/api/user/getmenu?username=${userData.email}`
  //     )
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         setTopMenu(data);
  //         actions.setMenu(data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else {
  //     Router.push("/");
  //   }
  // }, [focus]);
  //
  // useEffect(() => {
  //   fetch("http://10.100.4.116:8230/api/MasterVisitPlan/GetAllMasterVisitPlan")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setPlan(data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [focus]);


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var userData = JSON.parse(localStorage.getItem("user"));

    if (userData) {
      actions.userLogin(userData);
      fetch(_constant__WEBPACK_IMPORTED_MODULE_11__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_11__["API_MASTER_DATA"] + "/GetMenu?username=".concat(userData.email), {
        headers: {
          apiKey: _constant__WEBPACK_IMPORTED_MODULE_11__["TOKEN"]
        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        setTopMenu(data);
        actions.setMenu(data);
      })["catch"](function (err) {
        console.log(err);
      });
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/");
    }
  }, [focus]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    fetch(_constant__WEBPACK_IMPORTED_MODULE_11__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_11__["API_VISIT_PLAN"] + "/GetAllMasterVisitPlan", {
      headers: {
        apiKey: _constant__WEBPACK_IMPORTED_MODULE_11__["TOKEN"]
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      setPlan(data);
      setLoading(false);
    })["catch"](function (err) {
      console.log(err);
    });
  }, [focus]); // const renderMainMenu = () => {
  //   var menuList =
  //     state && state.menuReducer && state.menuReducer.menu
  //       ? state.menuReducer.menu
  //       : [];
  //   const parentMenu = menuList.filter((val) => {
  //     return val.isParentMenu === true;
  //   });
  //   const render = parentMenu.map((val, index) => {
  //     return (
  //       <Link href={"/" + val.moduleName.toLowerCase()} key={index}>
  //         <a className={styles.menu_container}>
  //           <img className={styles.menu_img} src={val.iconClass} />
  //           <div className={styles.menu_text}>{val.moduleName}</div>
  //         </a>
  //       </Link>
  //     );
  //   });
  //   return render;
  // };

  var renderTopMenu = function renderTopMenu() {
    var auth = topMenu.filter(function (val) {
      return val.moduleCode === "PLAN" || val.moduleCode === "UNPLAN" || val.moduleCode === "SPREADING" // || val.moduleCode === "WORK-VISIT"
      ;
    });

    var render = function render() {
      if (auth.length === 3) {
        return auth.map(function (val, index) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: focus === val.moduleCode ? _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.focus_menu : _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menu,
            onClick: function onClick() {
              setFocus(val.moduleCode);
            },
            children: val.moduleCode === "PLAN" ? "Plan" : val.moduleCode === "UNPLAN" ? "Unplan" : val.moduleCode === "SPREADING" ? "Spreading" : val.moduleCode === "WORK-VISIT" ? "Work Visit" : ""
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, _this);
        });
      }
    };

    if (auth) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menu_grid,
        children: render()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 14
      }, _this);
    }
  };

  var renderPlan = function renderPlan() {
    var now = new Date();
    var date = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();
    var planMap = plan.map(function (val, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          fontSize: "15px",
          fontWeight: "700",
          color: "#5E5873",
          textAlign: "left",
          margin: "10px 0"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: val.namaOutlet
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            fontSize: "14px",
            fontWeight: "300"
          },
          children: val.alamatOutlet
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 11
        }, _this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }, _this);
    });

    if (loading) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 14
      }, _this);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_10__["default"], {
          style: {
            borderRadius: "5px",
            marginTop: "22px"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.overview,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.date,
                children: "".concat(date, " / ").concat(month, " / ").concat(year)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  color: "#5E5873",
                  marginTop: "7px"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  style: {
                    fontSize: "36px",
                    fontWeight: "600"
                  },
                  children: "0"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 203,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  style: {
                    fontSize: "18px"
                  },
                  children: ["/", plan.length]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 204,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                style: {
                  marginTop: "7px",
                  backgroundColor: "#FEB800",
                  padding: "10px 22px",
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px"
                },
                children: "Add New Plan +"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_10__["default"], {
          style: {
            marginTop: "22px",
            borderRadius: "30px"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.plan_container,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                fontSize: "18px",
                fontWeight: "600",
                color: "#5E5873",
                textAlign: "left"
              },
              children: "Your Plan Today"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                margin: "22px 0"
              },
              children: planMap
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 236,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: "/visit/plan",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  text: "See Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 239,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 238,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 11
        }, _this)]
      }, void 0, true);
    }
  };

  var renderUnplan = function renderUnplan() {};

  var renderSpreading = function renderSpreading() {};

  var renderWorkVisit = function renderWorkVisit() {};

  var renderPage = function renderPage() {
    if (state.menuReducer.menu == null) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 14
      }, _this);
    } else return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "icon",
          href: "/favicon.ico"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.wrapper,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.bg_top
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.user_info_grid,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.pp,
              src: "/pp.png"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 266,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                marginLeft: "15px"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  fontSize: "14px"
                },
                children: state.userReducer.user.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 268,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  fontSize: "12px"
                },
                children: "user.role**"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 271,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 267,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.notif,
              src: "/notif.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 273,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,
              children: [renderTopMenu(), focus === "PLAN" ? renderPlan() : focus === "UNPLAN" ? renderUnplan() : focus === "SPREADING" ? renderSpreading() : focus === "WORK-VISIT" ? renderWorkVisit() : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  marginBottom: "120px"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 285,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 274,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 265,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_BotNav__WEBPACK_IMPORTED_MODULE_8__["default"], {
        focus: "home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 9
    }, _this);
  };

  return renderPage();
}

_s(Home, "I+qRTeGrkFzI/Gng6yRAXa6kMzw=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VDb250ZXh0IiwiU3RvcmVzIiwic3RhdGUiLCJkaXNwYXRjaCIsImFjdGlvbnMiLCJ1c2VTdGF0ZSIsImZvY3VzIiwic2V0Rm9jdXMiLCJwbGFuIiwic2V0UGxhbiIsInRvcE1lbnUiLCJzZXRUb3BNZW51IiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VFZmZlY3QiLCJ1c2VyRGF0YSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VyTG9naW4iLCJmZXRjaCIsIkFQSV9VUkwiLCJBUElfTUFTVEVSX0RBVEEiLCJlbWFpbCIsImhlYWRlcnMiLCJhcGlLZXkiLCJUT0tFTiIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwic2V0TWVudSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJSb3V0ZXIiLCJwdXNoIiwiQVBJX1ZJU0lUX1BMQU4iLCJyZW5kZXJUb3BNZW51IiwiYXV0aCIsImZpbHRlciIsInZhbCIsIm1vZHVsZUNvZGUiLCJyZW5kZXIiLCJsZW5ndGgiLCJtYXAiLCJpbmRleCIsInN0eWxlcyIsImZvY3VzX21lbnUiLCJtZW51IiwibWVudV9ncmlkIiwicmVuZGVyUGxhbiIsIm5vdyIsIkRhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJwbGFuTWFwIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJuYW1hT3V0bGV0IiwiYWxhbWF0T3V0bGV0IiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luVG9wIiwib3ZlcnZpZXciLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwiYm9yZGVyIiwicGxhbl9jb250YWluZXIiLCJyZW5kZXJVbnBsYW4iLCJyZW5kZXJTcHJlYWRpbmciLCJyZW5kZXJXb3JrVmlzaXQiLCJyZW5kZXJQYWdlIiwibWVudVJlZHVjZXIiLCJjb250YWluZXIiLCJ3cmFwcGVyIiwiYmdfdG9wIiwidXNlcl9pbmZvX2dyaWQiLCJwcCIsIm1hcmdpbkxlZnQiLCJ1c2VyUmVkdWNlciIsInVzZXIiLCJuYW1lIiwibm90aWYiLCJtYWluIiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLG9CQUNRQyx3REFBVSxDQUFDQyw2Q0FBRCxDQURsQjtBQUFBLE1BQ3JCQyxLQURxQixlQUNyQkEsS0FEcUI7QUFBQSxNQUNkQyxRQURjLGVBQ2RBLFFBRGM7QUFBQSxNQUNKQyxPQURJLGVBQ0pBLE9BREk7O0FBQUEsa0JBRUhDLHNEQUFRLENBQUMsTUFBRCxDQUZMO0FBQUEsTUFFdEJDLEtBRnNCO0FBQUEsTUFFZkMsUUFGZTs7QUFBQSxtQkFHTEYsc0RBQVEsQ0FBQyxFQUFELENBSEg7QUFBQSxNQUd0QkcsSUFIc0I7QUFBQSxNQUdoQkMsT0FIZ0I7O0FBQUEsbUJBSUNKLHNEQUFRLENBQUMsRUFBRCxDQUpUO0FBQUEsTUFJdEJLLE9BSnNCO0FBQUEsTUFJYkMsVUFKYTs7QUFBQSxtQkFLQ04sc0RBQVEsQ0FBQyxJQUFELENBTFQ7QUFBQSxNQUt0Qk8sT0FMc0I7QUFBQSxNQUtiQyxVQUxhLGtCQU83QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMs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OGMzMzZmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wYWdlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBTdG9yZXMgfSBmcm9tIFwiLi4vc3RvcmVcIjtcblxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU3Bpbm5lclwiO1xuaW1wb3J0IEJvdE5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9Cb3ROYXZcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQnV0dG9uXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkXCI7XG5cbmltcG9ydCB7XG4gIEFQSV9VUkwsXG4gIEFQSV9VU0VSLFxuICBUT0tFTixcbiAgQVBJX1ZJU0lUX1BMQU4sXG4gIEFQSV9NQVNURVJfREFUQSxcbn0gZnJvbSBcIi4uL2NvbnN0YW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoLCBhY3Rpb25zIH0gPSB1c2VDb250ZXh0KFN0b3Jlcyk7XG4gIGNvbnN0IFtmb2N1cywgc2V0Rm9jdXNdID0gdXNlU3RhdGUoXCJQTEFOXCIpO1xuICBjb25zdCBbcGxhbiwgc2V0UGxhbl0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0b3BNZW51LCBzZXRUb3BNZW51XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcbiAgLy8gICBpZiAodXNlckRhdGEpIHtcbiAgLy8gICAgIGFjdGlvbnMudXNlckxvZ2luKHVzZXJEYXRhKTtcbiAgLy8gICAgIGZldGNoKFxuICAvLyAgICAgICBgaHR0cDovLzEwLjEwMC40LjExNjo4MjI5L2FwaS91c2VyL2dldG1lbnU/dXNlcm5hbWU9JHt1c2VyRGF0YS5lbWFpbH1gXG4gIC8vICAgICApXG4gIC8vICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAvLyAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIC8vICAgICAgIH0pXG4gIC8vICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gIC8vICAgICAgICAgc2V0VG9wTWVudShkYXRhKTtcbiAgLy8gICAgICAgICBhY3Rpb25zLnNldE1lbnUoZGF0YSk7XG4gIC8vICAgICAgIH0pXG4gIC8vICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gIC8vICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgLy8gICAgICAgfSk7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgLy8gICB9XG4gIC8vIH0sIFtmb2N1c10pO1xuICAvL1xuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGZldGNoKFwiaHR0cDovLzEwLjEwMC40LjExNjo4MjMwL2FwaS9NYXN0ZXJWaXNpdFBsYW4vR2V0QWxsTWFzdGVyVmlzaXRQbGFuXCIpXG4gIC8vICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgLy8gICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgLy8gICAgIH0pXG4gIC8vICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAvLyAgICAgICBzZXRQbGFuKGRhdGEpO1xuICAvLyAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgLy8gICAgIH0pXG4gIC8vICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAvLyAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAvLyAgICAgfSk7XG4gIC8vIH0sIFtmb2N1c10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XG4gICAgaWYgKHVzZXJEYXRhKSB7XG4gICAgICBhY3Rpb25zLnVzZXJMb2dpbih1c2VyRGF0YSk7XG4gICAgICBmZXRjaChBUElfVVJMICsgQVBJX01BU1RFUl9EQVRBICsgYC9HZXRNZW51P3VzZXJuYW1lPSR7dXNlckRhdGEuZW1haWx9YCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgYXBpS2V5OiBUT0tFTixcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgc2V0VG9wTWVudShkYXRhKTtcbiAgICAgICAgICBhY3Rpb25zLnNldE1lbnUoZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9XG4gIH0sIFtmb2N1c10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goQVBJX1VSTCArIEFQSV9WSVNJVF9QTEFOICsgXCIvR2V0QWxsTWFzdGVyVmlzaXRQbGFuXCIsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcbiAgICAgIH0sXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldFBsYW4oZGF0YSk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfSwgW2ZvY3VzXSk7XG5cbiAgLy8gY29uc3QgcmVuZGVyTWFpbk1lbnUgPSAoKSA9PiB7XG4gIC8vICAgdmFyIG1lbnVMaXN0ID1cbiAgLy8gICAgIHN0YXRlICYmIHN0YXRlLm1lbnVSZWR1Y2VyICYmIHN0YXRlLm1lbnVSZWR1Y2VyLm1lbnVcbiAgLy8gICAgICAgPyBzdGF0ZS5tZW51UmVkdWNlci5tZW51XG4gIC8vICAgICAgIDogW107XG4gIC8vICAgY29uc3QgcGFyZW50TWVudSA9IG1lbnVMaXN0LmZpbHRlcigodmFsKSA9PiB7XG4gIC8vICAgICByZXR1cm4gdmFsLmlzUGFyZW50TWVudSA9PT0gdHJ1ZTtcbiAgLy8gICB9KTtcbiAgLy8gICBjb25zdCByZW5kZXIgPSBwYXJlbnRNZW51Lm1hcCgodmFsLCBpbmRleCkgPT4ge1xuICAvLyAgICAgcmV0dXJuIChcbiAgLy8gICAgICAgPExpbmsgaHJlZj17XCIvXCIgKyB2YWwubW9kdWxlTmFtZS50b0xvd2VyQ2FzZSgpfSBrZXk9e2luZGV4fT5cbiAgLy8gICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5tZW51X2NvbnRhaW5lcn0+XG4gIC8vICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLm1lbnVfaW1nfSBzcmM9e3ZhbC5pY29uQ2xhc3N9IC8+XG4gIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVfdGV4dH0+e3ZhbC5tb2R1bGVOYW1lfTwvZGl2PlxuICAvLyAgICAgICAgIDwvYT5cbiAgLy8gICAgICAgPC9MaW5rPlxuICAvLyAgICAgKTtcbiAgLy8gICB9KTtcbiAgLy8gICByZXR1cm4gcmVuZGVyO1xuICAvLyB9O1xuICBjb25zdCByZW5kZXJUb3BNZW51ID0gKCkgPT4ge1xuICAgIHZhciBhdXRoID0gdG9wTWVudS5maWx0ZXIoKHZhbCkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdmFsLm1vZHVsZUNvZGUgPT09IFwiUExBTlwiIHx8XG4gICAgICAgIHZhbC5tb2R1bGVDb2RlID09PSBcIlVOUExBTlwiIHx8XG4gICAgICAgIHZhbC5tb2R1bGVDb2RlID09PSBcIlNQUkVBRElOR1wiXG4gICAgICAgIC8vIHx8IHZhbC5tb2R1bGVDb2RlID09PSBcIldPUkstVklTSVRcIlxuICAgICAgKTtcbiAgICB9KTtcbiAgICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgICBpZiAoYXV0aC5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgcmV0dXJuIGF1dGgubWFwKCh2YWwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICBmb2N1cyA9PT0gdmFsLm1vZHVsZUNvZGUgPyBzdHlsZXMuZm9jdXNfbWVudSA6IHN0eWxlcy5tZW51XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldEZvY3VzKHZhbC5tb2R1bGVDb2RlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3ZhbC5tb2R1bGVDb2RlID09PSBcIlBMQU5cIlxuICAgICAgICAgICAgICAgID8gXCJQbGFuXCJcbiAgICAgICAgICAgICAgICA6IHZhbC5tb2R1bGVDb2RlID09PSBcIlVOUExBTlwiXG4gICAgICAgICAgICAgICAgPyBcIlVucGxhblwiXG4gICAgICAgICAgICAgICAgOiB2YWwubW9kdWxlQ29kZSA9PT0gXCJTUFJFQURJTkdcIlxuICAgICAgICAgICAgICAgID8gXCJTcHJlYWRpbmdcIlxuICAgICAgICAgICAgICAgIDogdmFsLm1vZHVsZUNvZGUgPT09IFwiV09SSy1WSVNJVFwiXG4gICAgICAgICAgICAgICAgPyBcIldvcmsgVmlzaXRcIlxuICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgaWYgKGF1dGgpIHtcbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVfZ3JpZH0+e3JlbmRlcigpfTwvZGl2PjtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlbmRlclBsYW4gPSAoKSA9PiB7XG4gICAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgdmFyIGRhdGUgPSBub3cuZ2V0RGF0ZSgpO1xuICAgIHZhciBtb250aCA9IG5vdy5nZXRNb250aCgpICsgMTtcbiAgICB2YXIgeWVhciA9IG5vdy5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IHBsYW5NYXAgPSBwbGFuLm1hcCgodmFsLCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBmb250U2l6ZTogXCIxNXB4XCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBcIjcwMFwiLFxuICAgICAgICAgICAgY29sb3I6IFwiIzVFNTg3M1wiLFxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICAgIG1hcmdpbjogXCIxMHB4IDBcIixcbiAgICAgICAgICB9fVxuICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2Pnt2YWwubmFtYU91dGxldH08L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjE0cHhcIiwgZm9udFdlaWdodDogXCIzMDBcIiB9fT5cbiAgICAgICAgICAgIHt2YWwuYWxhbWF0T3V0bGV0fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICBpZiAobG9hZGluZykge1xuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI1cHhcIiwgbWFyZ2luVG9wOiBcIjIycHhcIiB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcnZpZXd9PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfVxuICAgICAgICAgICAgICAgID57YCR7ZGF0ZX0gLyAke21vbnRofSAvICR7eWVhcn1gfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcIiM1RTU4NzNcIiwgbWFyZ2luVG9wOiBcIjdweFwiIH19PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMzZweFwiLCBmb250V2VpZ2h0OiBcIjYwMFwiIH19PjA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIxOHB4XCIgfX0+L3twbGFuLmxlbmd0aH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjdweFwiLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZFQjgwMFwiLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHggMjJweFwiLFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBBZGQgTmV3IFBsYW4gK1xuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjJweFwiLCBib3JkZXJSYWRpdXM6IFwiMzBweFwiIH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGFuX2NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI2MDBcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1RTU4NzNcIixcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFlvdXIgUGxhbiBUb2RheVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMjJweCAwXCIgfX0+e3BsYW5NYXB9PC9kaXY+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdmlzaXQvcGxhblwiPlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PXtcIlNlZSBEZXRhaWxzXCJ9IC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvPlxuICAgICAgKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlbmRlclVucGxhbiA9ICgpID0+IHt9O1xuICBjb25zdCByZW5kZXJTcHJlYWRpbmcgPSAoKSA9PiB7fTtcbiAgY29uc3QgcmVuZGVyV29ya1Zpc2l0ID0gKCkgPT4ge307XG5cbiAgY29uc3QgcmVuZGVyUGFnZSA9ICgpID0+IHtcbiAgICBpZiAoc3RhdGUubWVudVJlZHVjZXIubWVudSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gPFNwaW5uZXIgLz47XG4gICAgfSBlbHNlXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJnX3RvcH0gLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2luZm9fZ3JpZH0+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5wcH0gc3JjPVwiL3BwLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjE1cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMTRweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICB7c3RhdGUudXNlclJlZHVjZXIudXNlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjEycHhcIiB9fT57XCJ1c2VyLnJvbGUqKlwifTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMubm90aWZ9IHNyYz1cIi9ub3RpZi5zdmdcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgICAgICAgICB7cmVuZGVyVG9wTWVudSgpfVxuICAgICAgICAgICAgICAgICAge2ZvY3VzID09PSBcIlBMQU5cIlxuICAgICAgICAgICAgICAgICAgICA/IHJlbmRlclBsYW4oKVxuICAgICAgICAgICAgICAgICAgICA6IGZvY3VzID09PSBcIlVOUExBTlwiXG4gICAgICAgICAgICAgICAgICAgID8gcmVuZGVyVW5wbGFuKClcbiAgICAgICAgICAgICAgICAgICAgOiBmb2N1cyA9PT0gXCJTUFJFQURJTkdcIlxuICAgICAgICAgICAgICAgICAgICA/IHJlbmRlclNwcmVhZGluZygpXG4gICAgICAgICAgICAgICAgICAgIDogZm9jdXMgPT09IFwiV09SSy1WSVNJVFwiXG4gICAgICAgICAgICAgICAgICAgID8gcmVuZGVyV29ya1Zpc2l0KClcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTIwcHhcIiB9fSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxCb3ROYXYgZm9jdXM9e1wiaG9tZVwifSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gIH07XG4gIHJldHVybiByZW5kZXJQYWdlKCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9