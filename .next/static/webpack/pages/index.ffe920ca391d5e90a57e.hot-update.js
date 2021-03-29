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
      fetch(_constant__WEBPACK_IMPORTED_MODULE_11__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_11__["API_USER"] + "/GetMenu?username=".concat(userData.email), {
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
    fetch(_constant__WEBPACK_IMPORTED_MODULE_11__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_11__["API_VISIT_PLAN"] + "/MasterVisitPlan/GetAllMasterVisitPlan").then(function (response) {
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
            lineNumber: 129,
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
        lineNumber: 153,
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
          lineNumber: 173,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            fontSize: "14px",
            fontWeight: "300"
          },
          children: val.alamatOutlet
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 11
        }, _this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, _this);
    });

    if (loading) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
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
                lineNumber: 189,
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
                  lineNumber: 193,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  style: {
                    fontSize: "18px"
                  },
                  children: ["/", plan.length]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 194,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 192,
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
                lineNumber: 196,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
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
              lineNumber: 216,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                margin: "22px 0"
              },
              children: planMap
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: "/visit/plan",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  text: "See Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 229,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 228,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 214,
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
        lineNumber: 244,
        columnNumber: 14
      }, _this);
    } else return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "icon",
          href: "/favicon.ico"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.wrapper,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.bg_top
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 254,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.user_info_grid,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.pp,
              src: "/pp.png"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 256,
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
                lineNumber: 258,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  fontSize: "12px"
                },
                children: "user.role**"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 261,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 257,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.notif,
              src: "/notif.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 263,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,
              children: [renderTopMenu(), focus === "PLAN" ? renderPlan() : focus === "UNPLAN" ? renderUnplan() : focus === "SPREADING" ? renderSpreading() : focus === "WORK-VISIT" ? renderWorkVisit() : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  marginBottom: "120px"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 275,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 264,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 255,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_BotNav__WEBPACK_IMPORTED_MODULE_8__["default"], {
        focus: "home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 247,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VDb250ZXh0IiwiU3RvcmVzIiwic3RhdGUiLCJkaXNwYXRjaCIsImFjdGlvbnMiLCJ1c2VTdGF0ZSIsImZvY3VzIiwic2V0Rm9jdXMiLCJwbGFuIiwic2V0UGxhbiIsInRvcE1lbnUiLCJzZXRUb3BNZW51IiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VFZmZlY3QiLCJ1c2VyRGF0YSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VyTG9naW4iLCJmZXRjaCIsIkFQSV9VUkwiLCJBUElfVVNFUiIsImVtYWlsIiwiaGVhZGVycyIsImFwaUtleSIsIlRPS0VOIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJzZXRNZW51IiwiZXJyIiwiY29uc29sZSIsImxvZyIsIlJvdXRlciIsInB1c2giLCJBUElfVklTSVRfUExBTiIsInJlbmRlclRvcE1lbnUiLCJhdXRoIiwiZmlsdGVyIiwidmFsIiwibW9kdWxlQ29kZSIsInJlbmRlciIsImxlbmd0aCIsIm1hcCIsImluZGV4Iiwic3R5bGVzIiwiZm9jdXNfbWVudSIsIm1lbnUiLCJtZW51X2dyaWQiLCJyZW5kZXJQbGFuIiwibm93IiwiRGF0ZSIsImRhdGUiLCJnZXREYXRlIiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsInBsYW5NYXAiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJjb2xvciIsInRleHRBbGlnbiIsIm1hcmdpbiIsIm5hbWFPdXRsZXQiLCJhbGFtYXRPdXRsZXQiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW5Ub3AiLCJvdmVydmlldyIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJib3JkZXIiLCJwbGFuX2NvbnRhaW5lciIsInJlbmRlclVucGxhbiIsInJlbmRlclNwcmVhZGluZyIsInJlbmRlcldvcmtWaXNpdCIsInJlbmRlclBhZ2UiLCJtZW51UmVkdWNlciIsImNvbnRhaW5lciIsIndyYXBwZXIiLCJiZ190b3AiLCJ1c2VyX2luZm9fZ3JpZCIsInBwIiwibWFyZ2luTGVmdCIsInVzZXJSZWR1Y2VyIiwidXNlciIsIm5hbWUiLCJub3RpZiIsIm1haW4iLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsb0JBQ1FDLHdEQUFVLENBQUNDLDZDQUFELENBRGxCO0FBQUEsTUFDckJDLEtBRHFCLGVBQ3JCQSxLQURxQjtBQUFBLE1BQ2RDLFFBRGMsZUFDZEEsUUFEYztBQUFBLE1BQ0pDLE9BREksZUFDSkEsT0FESTs7QUFBQSxrQkFFSEMsc0RBQVEsQ0FBQyxNQUFELENBRkw7QUFBQSxNQUV0QkMsS0FGc0I7QUFBQSxNQUVmQyxRQUZlOztBQUFBLG1CQUdMRixzREFBUSxDQUFDLEVBQUQsQ0FISDtBQUFBLE1BR3RCRyxJQUhzQjtBQUFBLE1BR2hCQyxPQUhnQjs7QUFBQSxtQkFJQ0osc0RBQVEsQ0FBQyxFQUFELENBSlQ7QUFBQSxNQUl0QkssT0FKc0I7QUFBQSxNQUliQyxVQUphOztBQUFBLG1CQUtDTixzREFBUSxDQUFDLElBQUQsQ0FMVDtBQUFBLE1BS3RCTyxPQUxzQjtBQUFBLE1BS2JDLFVBTGEsa0JBTzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxRQUFRLEdB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QUU7QUFBRTNCLDBCQUFRLEVBQUU7QUFBWixpQkFBWjtBQUFBLDBCQUFtQztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQVFFO0FBQUssdUJBQVMsRUFBRWQsb0VBQU0sQ0FBQzBDLEtBQXZCO0FBQThCLGlCQUFHLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRixlQVNFO0FBQUssdUJBQVMsRUFBRTFDLG9FQUFNLENBQUMyQyxJQUF2QjtBQUFBLHlCQUNHcEQsYUFBYSxFQURoQixFQUVHakMsS0FBSyxLQUFLLE1BQVYsR0FDRzhDLFVBQVUsRUFEYixHQUVHOUMsS0FBSyxLQUFLLFFBQVYsR0FDQXNFLFlBQVksRUFEWixHQUVBdEUsS0FBSyxLQUFLLFdBQVYsR0FDQXVFLGVBQWUsRUFEZixHQUVBdkUsS0FBSyxLQUFLLFlBQVYsR0FDQXdFLGVBQWUsRUFEZixHQUVBLEVBVk4sZUFXRTtBQUFLLHFCQUFLLEVBQUU7QUFBRWMsOEJBQVksRUFBRTtBQUFoQjtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsZUFpQ0UscUVBQUMsMERBQUQ7QUFBUSxhQUFLLEVBQUU7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBcUNILEdBekNEOztBQTBDQSxTQUFPYixVQUFVLEVBQWpCO0FBQ0Q7O0dBOVF1QmhGLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmZlOTIwY2EzOTFkNWU5MGE1N2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvcGFnZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgU3RvcmVzIH0gZnJvbSBcIi4uL3N0b3JlXCI7XG5cbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi9jb21wb25lbnRzL1NwaW5uZXJcIjtcbmltcG9ydCBCb3ROYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvQm90TmF2XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0J1dHRvblwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZFwiO1xuXG5pbXBvcnQgeyBBUElfVVJMLCBBUElfVVNFUiwgVE9LRU4sIEFQSV9WSVNJVF9QTEFOIH0gZnJvbSBcIi4uL2NvbnN0YW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoLCBhY3Rpb25zIH0gPSB1c2VDb250ZXh0KFN0b3Jlcyk7XG4gIGNvbnN0IFtmb2N1cywgc2V0Rm9jdXNdID0gdXNlU3RhdGUoXCJQTEFOXCIpO1xuICBjb25zdCBbcGxhbiwgc2V0UGxhbl0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0b3BNZW51LCBzZXRUb3BNZW51XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcbiAgLy8gICBpZiAodXNlckRhdGEpIHtcbiAgLy8gICAgIGFjdGlvbnMudXNlckxvZ2luKHVzZXJEYXRhKTtcbiAgLy8gICAgIGZldGNoKFxuICAvLyAgICAgICBgaHR0cDovLzEwLjEwMC40LjExNjo4MjI5L2FwaS91c2VyL2dldG1lbnU/dXNlcm5hbWU9JHt1c2VyRGF0YS5lbWFpbH1gXG4gIC8vICAgICApXG4gIC8vICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAvLyAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIC8vICAgICAgIH0pXG4gIC8vICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gIC8vICAgICAgICAgc2V0VG9wTWVudShkYXRhKTtcbiAgLy8gICAgICAgICBhY3Rpb25zLnNldE1lbnUoZGF0YSk7XG4gIC8vICAgICAgIH0pXG4gIC8vICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gIC8vICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgLy8gICAgICAgfSk7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgLy8gICB9XG4gIC8vIH0sIFtmb2N1c10pO1xuICAvL1xuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGZldGNoKFwiaHR0cDovLzEwLjEwMC40LjExNjo4MjMwL2FwaS9NYXN0ZXJWaXNpdFBsYW4vR2V0QWxsTWFzdGVyVmlzaXRQbGFuXCIpXG4gIC8vICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgLy8gICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgLy8gICAgIH0pXG4gIC8vICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAvLyAgICAgICBzZXRQbGFuKGRhdGEpO1xuICAvLyAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgLy8gICAgIH0pXG4gIC8vICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAvLyAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAvLyAgICAgfSk7XG4gIC8vIH0sIFtmb2N1c10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XG4gICAgaWYgKHVzZXJEYXRhKSB7XG4gICAgICBhY3Rpb25zLnVzZXJMb2dpbih1c2VyRGF0YSk7XG4gICAgICBmZXRjaChBUElfVVJMICsgQVBJX1VTRVIgKyBgL0dldE1lbnU/dXNlcm5hbWU9JHt1c2VyRGF0YS5lbWFpbH1gLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBhcGlLZXk6IFRPS0VOLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBzZXRUb3BNZW51KGRhdGEpO1xuICAgICAgICAgIGFjdGlvbnMuc2V0TWVudShkYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xuICAgIH1cbiAgfSwgW2ZvY3VzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChBUElfVVJMICsgQVBJX1ZJU0lUX1BMQU4gKyBcIi9NYXN0ZXJWaXNpdFBsYW4vR2V0QWxsTWFzdGVyVmlzaXRQbGFuXCIpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXRQbGFuKGRhdGEpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH0sIFtmb2N1c10pO1xuXG4gIC8vIGNvbnN0IHJlbmRlck1haW5NZW51ID0gKCkgPT4ge1xuICAvLyAgIHZhciBtZW51TGlzdCA9XG4gIC8vICAgICBzdGF0ZSAmJiBzdGF0ZS5tZW51UmVkdWNlciAmJiBzdGF0ZS5tZW51UmVkdWNlci5tZW51XG4gIC8vICAgICAgID8gc3RhdGUubWVudVJlZHVjZXIubWVudVxuICAvLyAgICAgICA6IFtdO1xuICAvLyAgIGNvbnN0IHBhcmVudE1lbnUgPSBtZW51TGlzdC5maWx0ZXIoKHZhbCkgPT4ge1xuICAvLyAgICAgcmV0dXJuIHZhbC5pc1BhcmVudE1lbnUgPT09IHRydWU7XG4gIC8vICAgfSk7XG4gIC8vICAgY29uc3QgcmVuZGVyID0gcGFyZW50TWVudS5tYXAoKHZhbCwgaW5kZXgpID0+IHtcbiAgLy8gICAgIHJldHVybiAoXG4gIC8vICAgICAgIDxMaW5rIGhyZWY9e1wiL1wiICsgdmFsLm1vZHVsZU5hbWUudG9Mb3dlckNhc2UoKX0ga2V5PXtpbmRleH0+XG4gIC8vICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubWVudV9jb250YWluZXJ9PlxuICAvLyAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5tZW51X2ltZ30gc3JjPXt2YWwuaWNvbkNsYXNzfSAvPlxuICAvLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51X3RleHR9Pnt2YWwubW9kdWxlTmFtZX08L2Rpdj5cbiAgLy8gICAgICAgICA8L2E+XG4gIC8vICAgICAgIDwvTGluaz5cbiAgLy8gICAgICk7XG4gIC8vICAgfSk7XG4gIC8vICAgcmV0dXJuIHJlbmRlcjtcbiAgLy8gfTtcbiAgY29uc3QgcmVuZGVyVG9wTWVudSA9ICgpID0+IHtcbiAgICB2YXIgYXV0aCA9IHRvcE1lbnUuZmlsdGVyKCh2YWwpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHZhbC5tb2R1bGVDb2RlID09PSBcIlBMQU5cIiB8fFxuICAgICAgICB2YWwubW9kdWxlQ29kZSA9PT0gXCJVTlBMQU5cIiB8fFxuICAgICAgICB2YWwubW9kdWxlQ29kZSA9PT0gXCJTUFJFQURJTkdcIlxuICAgICAgICAvLyB8fCB2YWwubW9kdWxlQ29kZSA9PT0gXCJXT1JLLVZJU0lUXCJcbiAgICAgICk7XG4gICAgfSk7XG4gICAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgaWYgKGF1dGgubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIHJldHVybiBhdXRoLm1hcCgodmFsLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgZm9jdXMgPT09IHZhbC5tb2R1bGVDb2RlID8gc3R5bGVzLmZvY3VzX21lbnUgOiBzdHlsZXMubWVudVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRGb2N1cyh2YWwubW9kdWxlQ29kZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt2YWwubW9kdWxlQ29kZSA9PT0gXCJQTEFOXCJcbiAgICAgICAgICAgICAgICA/IFwiUGxhblwiXG4gICAgICAgICAgICAgICAgOiB2YWwubW9kdWxlQ29kZSA9PT0gXCJVTlBMQU5cIlxuICAgICAgICAgICAgICAgID8gXCJVbnBsYW5cIlxuICAgICAgICAgICAgICAgIDogdmFsLm1vZHVsZUNvZGUgPT09IFwiU1BSRUFESU5HXCJcbiAgICAgICAgICAgICAgICA/IFwiU3ByZWFkaW5nXCJcbiAgICAgICAgICAgICAgICA6IHZhbC5tb2R1bGVDb2RlID09PSBcIldPUkstVklTSVRcIlxuICAgICAgICAgICAgICAgID8gXCJXb3JrIFZpc2l0XCJcbiAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGlmIChhdXRoKSB7XG4gICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51X2dyaWR9PntyZW5kZXIoKX08L2Rpdj47XG4gICAgfVxuICB9O1xuICBjb25zdCByZW5kZXJQbGFuID0gKCkgPT4ge1xuICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIHZhciBkYXRlID0gbm93LmdldERhdGUoKTtcbiAgICB2YXIgbW9udGggPSBub3cuZ2V0TW9udGgoKSArIDE7XG4gICAgdmFyIHllYXIgPSBub3cuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCBwbGFuTWFwID0gcGxhbi5tYXAoKHZhbCwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZm9udFNpemU6IFwiMTVweFwiLFxuICAgICAgICAgICAgZm9udFdlaWdodDogXCI3MDBcIixcbiAgICAgICAgICAgIGNvbG9yOiBcIiM1RTU4NzNcIixcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICBtYXJnaW46IFwiMTBweCAwXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdj57dmFsLm5hbWFPdXRsZXR9PC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIxNHB4XCIsIGZvbnRXZWlnaHQ6IFwiMzAwXCIgfX0+XG4gICAgICAgICAgICB7dmFsLmFsYW1hdE91dGxldH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIG1hcmdpblRvcDogXCIyMnB4XCIgfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm92ZXJ2aWV3fT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX1cbiAgICAgICAgICAgICAgICA+e2Ake2RhdGV9IC8gJHttb250aH0gLyAke3llYXJ9YH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogXCIjNUU1ODczXCIsIG1hcmdpblRvcDogXCI3cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjM2cHhcIiwgZm9udFdlaWdodDogXCI2MDBcIiB9fT4wPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMThweFwiIH19Pi97cGxhbi5sZW5ndGh9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI3cHhcIixcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRUI4MDBcIixcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4IDIycHhcIixcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQWRkIE5ldyBQbGFuICtcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIycHhcIiwgYm9yZGVyUmFkaXVzOiBcIjMwcHhcIiB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxhbl9jb250YWluZXJ9PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNjAwXCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNUU1ODczXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBZb3VyIFBsYW4gVG9kYXlcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjIycHggMFwiIH19PntwbGFuTWFwfTwvZGl2PlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Zpc2l0L3BsYW5cIj5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD17XCJTZWUgRGV0YWlsc1wifSAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuICBjb25zdCByZW5kZXJVbnBsYW4gPSAoKSA9PiB7fTtcbiAgY29uc3QgcmVuZGVyU3ByZWFkaW5nID0gKCkgPT4ge307XG4gIGNvbnN0IHJlbmRlcldvcmtWaXNpdCA9ICgpID0+IHt9O1xuXG4gIGNvbnN0IHJlbmRlclBhZ2UgPSAoKSA9PiB7XG4gICAgaWYgKHN0YXRlLm1lbnVSZWR1Y2VyLm1lbnUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+O1xuICAgIH0gZWxzZVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT5Ib21lPC90aXRsZT5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iZ190b3B9IC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9pbmZvX2dyaWR9PlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMucHB9IHNyYz1cIi9wcC5wbmdcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIxNXB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjE0cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAge3N0YXRlLnVzZXJSZWR1Y2VyLnVzZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIxMnB4XCIgfX0+e1widXNlci5yb2xlKipcIn08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLm5vdGlmfSBzcmM9XCIvbm90aWYuc3ZnXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICAgICAgICAgICAge3JlbmRlclRvcE1lbnUoKX1cbiAgICAgICAgICAgICAgICAgIHtmb2N1cyA9PT0gXCJQTEFOXCJcbiAgICAgICAgICAgICAgICAgICAgPyByZW5kZXJQbGFuKClcbiAgICAgICAgICAgICAgICAgICAgOiBmb2N1cyA9PT0gXCJVTlBMQU5cIlxuICAgICAgICAgICAgICAgICAgICA/IHJlbmRlclVucGxhbigpXG4gICAgICAgICAgICAgICAgICAgIDogZm9jdXMgPT09IFwiU1BSRUFESU5HXCJcbiAgICAgICAgICAgICAgICAgICAgPyByZW5kZXJTcHJlYWRpbmcoKVxuICAgICAgICAgICAgICAgICAgICA6IGZvY3VzID09PSBcIldPUkstVklTSVRcIlxuICAgICAgICAgICAgICAgICAgICA/IHJlbmRlcldvcmtWaXNpdCgpXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEyMHB4XCIgfX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Qm90TmF2IGZvY3VzPXtcImhvbWVcIn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICB9O1xuICByZXR1cm4gcmVuZGVyUGFnZSgpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==