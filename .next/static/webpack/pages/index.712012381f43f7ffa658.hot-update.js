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
    fetch("http://10.100.4.116:8230/api/MasterVisitPlan/GetAllMasterVisitPlan").then(function (response) {
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
            lineNumber: 127,
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
        lineNumber: 151,
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
          lineNumber: 171,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            fontSize: "14px",
            fontWeight: "300"
          },
          children: val.alamatOutlet
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 11
        }, _this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 9
      }, _this);
    });

    if (loading) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 180,
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
                lineNumber: 187,
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
                  lineNumber: 191,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  style: {
                    fontSize: "18px"
                  },
                  children: ["/", plan.length]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 192,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 190,
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
                lineNumber: 194,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
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
              lineNumber: 214,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                margin: "22px 0"
              },
              children: planMap
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 224,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: "/visit/plan",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  text: "See Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 227,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 226,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 212,
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
        lineNumber: 242,
        columnNumber: 14
      }, _this);
    } else return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "icon",
          href: "/favicon.ico"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.wrapper,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.bg_top
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 252,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.user_info_grid,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.pp,
              src: "/pp.png"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 254,
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
                lineNumber: 256,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  fontSize: "12px"
                },
                children: "user.role**"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 259,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 255,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.notif,
              src: "/notif.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 261,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,
              children: [renderTopMenu(), focus === "PLAN" ? renderPlan() : focus === "UNPLAN" ? renderUnplan() : focus === "SPREADING" ? renderSpreading() : focus === "WORK-VISIT" ? renderWorkVisit() : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  marginBottom: "120px"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 273,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 262,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 253,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_BotNav__WEBPACK_IMPORTED_MODULE_8__["default"], {
        focus: "home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 245,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VDb250ZXh0IiwiU3RvcmVzIiwic3RhdGUiLCJkaXNwYXRjaCIsImFjdGlvbnMiLCJ1c2VTdGF0ZSIsImZvY3VzIiwic2V0Rm9jdXMiLCJwbGFuIiwic2V0UGxhbiIsInRvcE1lbnUiLCJzZXRUb3BNZW51IiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VFZmZlY3QiLCJ1c2VyRGF0YSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VyTG9naW4iLCJmZXRjaCIsIkFQSV9VUkwiLCJBUElfVVNFUiIsImVtYWlsIiwiaGVhZGVycyIsImFwaUtleSIsIlRPS0VOIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJzZXRNZW51IiwiZXJyIiwiY29uc29sZSIsImxvZyIsIlJvdXRlciIsInB1c2giLCJyZW5kZXJUb3BNZW51IiwiYXV0aCIsImZpbHRlciIsInZhbCIsIm1vZHVsZUNvZGUiLCJyZW5kZXIiLCJsZW5ndGgiLCJtYXAiLCJpbmRleCIsInN0eWxlcyIsImZvY3VzX21lbnUiLCJtZW51IiwibWVudV9ncmlkIiwicmVuZGVyUGxhbiIsIm5vdyIsIkRhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJwbGFuTWFwIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJuYW1hT3V0bGV0IiwiYWxhbWF0T3V0bGV0IiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luVG9wIiwib3ZlcnZpZXciLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwiYm9yZGVyIiwicGxhbl9jb250YWluZXIiLCJyZW5kZXJVbnBsYW4iLCJyZW5kZXJTcHJlYWRpbmciLCJyZW5kZXJXb3JrVmlzaXQiLCJyZW5kZXJQYWdlIiwibWVudVJlZHVjZXIiLCJjb250YWluZXIiLCJ3cmFwcGVyIiwiYmdfdG9wIiwidXNlcl9pbmZvX2dyaWQiLCJwcCIsIm1hcmdpbkxlZnQiLCJ1c2VyUmVkdWNlciIsInVzZXIiLCJuYW1lIiwibm90aWYiLCJtYWluIiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLG9CQUNRQyx3REFBVSxDQUFDQyw2Q0FBRCxDQURsQjtBQUFBLE1BQ3JCQyxLQURxQixlQUNyQkEsS0FEcUI7QUFBQSxNQUNkQyxRQURjLGVBQ2RBLFFBRGM7QUFBQSxNQUNKQyxPQURJLGVBQ0pBLE9BREk7O0FBQUEsa0JBRUhDLHNEQUFRLENBQUMsTUFBRCxDQUZMO0FBQUEsTUFFdEJDLEtBRnNCO0FBQUEsTUFFZkMsUUFGZTs7QUFBQSxtQkFHTEYsc0RBQVEsQ0FBQyxFQUFELENBSEg7QUFBQSxNQUd0QkcsSUFIc0I7QUFBQSxNQUdoQkMsT0FIZ0I7O0FBQUEsbUJBSUNKLHNEQUFRLENBQUMsRUFBRCxDQUpUO0FBQUEsTUFJdEJLLE9BSnNCO0FBQUEsTUFJYkMsVUFKYTs7QUFBQSxtQkFLQ04sc0RBQVEsQ0FBQyxJQUFELENBTFQ7QUFBQSxNQUt0Qk8sT0FMc0I7QUFBQSxNQUtiQyxVQUxhLGtCQU83QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENB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O0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBUUU7QUFBSyx1QkFBUyxFQUFFZCxvRUFBTSxDQUFDMEMsS0FBdkI7QUFBOEIsaUJBQUcsRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJGLGVBU0U7QUFBSyx1QkFBUyxFQUFFMUMsb0VBQU0sQ0FBQzJDLElBQXZCO0FBQUEseUJBQ0dwRCxhQUFhLEVBRGhCLEVBRUdoQyxLQUFLLEtBQUssTUFBVixHQUNHNkMsVUFBVSxFQURiLEdBRUc3QyxLQUFLLEtBQUssUUFBVixHQUNBcUUsWUFBWSxFQURaLEdBRUFyRSxLQUFLLEtBQUssV0FBVixHQUNBc0UsZUFBZSxFQURmLEdBRUF0RSxLQUFLLEtBQUssWUFBVixHQUNBdUUsZUFBZSxFQURmLEdBRUEsRUFWTixlQVdFO0FBQUsscUJBQUssRUFBRTtBQUFFYyw4QkFBWSxFQUFFO0FBQWhCO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixlQWlDRSxxRUFBQywwREFBRDtBQUFRLGFBQUssRUFBRTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFxQ0gsR0F6Q0Q7O0FBMENBLFNBQU9iLFVBQVUsRUFBakI7QUFDRDs7R0E1UXVCL0UsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43MTIwMTIzODFmNDNmN2ZmYTY1OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wYWdlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBTdG9yZXMgfSBmcm9tIFwiLi4vc3RvcmVcIjtcblxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU3Bpbm5lclwiO1xuaW1wb3J0IEJvdE5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9Cb3ROYXZcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQnV0dG9uXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkXCI7XG5cbmltcG9ydCB7IEFQSV9VUkwsIEFQSV9VU0VSLCBUT0tFTiwgQVBJX1ZJU0lUX1BMQU4gfSBmcm9tIFwiLi4vY29uc3RhbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2gsIGFjdGlvbnMgfSA9IHVzZUNvbnRleHQoU3RvcmVzKTtcbiAgY29uc3QgW2ZvY3VzLCBzZXRGb2N1c10gPSB1c2VTdGF0ZShcIlBMQU5cIik7XG4gIGNvbnN0IFtwbGFuLCBzZXRQbGFuXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RvcE1lbnUsIHNldFRvcE1lbnVdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xuICAvLyAgIGlmICh1c2VyRGF0YSkge1xuICAvLyAgICAgYWN0aW9ucy51c2VyTG9naW4odXNlckRhdGEpO1xuICAvLyAgICAgZmV0Y2goXG4gIC8vICAgICAgIGBodHRwOi8vMTAuMTAwLjQuMTE2OjgyMjkvYXBpL3VzZXIvZ2V0bWVudT91c2VybmFtZT0ke3VzZXJEYXRhLmVtYWlsfWBcbiAgLy8gICAgIClcbiAgLy8gICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gIC8vICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgLy8gICAgICAgfSlcbiAgLy8gICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgLy8gICAgICAgICBzZXRUb3BNZW51KGRhdGEpO1xuICAvLyAgICAgICAgIGFjdGlvbnMuc2V0TWVudShkYXRhKTtcbiAgLy8gICAgICAgfSlcbiAgLy8gICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAvLyAgICAgICB9KTtcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xuICAvLyAgIH1cbiAgLy8gfSwgW2ZvY3VzXSk7XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgZmV0Y2goXCJodHRwOi8vMTAuMTAwLjQuMTE2OjgyMzAvYXBpL01hc3RlclZpc2l0UGxhbi9HZXRBbGxNYXN0ZXJWaXNpdFBsYW5cIilcbiAgLy8gICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAvLyAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAvLyAgICAgfSlcbiAgLy8gICAgIC50aGVuKChkYXRhKSA9PiB7XG4gIC8vICAgICAgIHNldFBsYW4oZGF0YSk7XG4gIC8vICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAvLyAgICAgfSlcbiAgLy8gICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gIC8vICAgICB9KTtcbiAgLy8gfSwgW2ZvY3VzXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XG4gICAgaWYgKHVzZXJEYXRhKSB7XG4gICAgICBhY3Rpb25zLnVzZXJMb2dpbih1c2VyRGF0YSk7XG4gICAgICBmZXRjaChBUElfVVJMICsgQVBJX1VTRVIgKyBgL0dldE1lbnU/dXNlcm5hbWU9JHt1c2VyRGF0YS5lbWFpbH1gLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBhcGlLZXk6IFRPS0VOLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBzZXRUb3BNZW51KGRhdGEpO1xuICAgICAgICAgIGFjdGlvbnMuc2V0TWVudShkYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xuICAgIH1cbiAgfSwgW2ZvY3VzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChcImh0dHA6Ly8xMC4xMDAuNC4xMTY6ODIzMC9hcGkvTWFzdGVyVmlzaXRQbGFuL0dldEFsbE1hc3RlclZpc2l0UGxhblwiKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc2V0UGxhbihkYXRhKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9LCBbZm9jdXNdKTtcblxuICAvLyBjb25zdCByZW5kZXJNYWluTWVudSA9ICgpID0+IHtcbiAgLy8gICB2YXIgbWVudUxpc3QgPVxuICAvLyAgICAgc3RhdGUgJiYgc3RhdGUubWVudVJlZHVjZXIgJiYgc3RhdGUubWVudVJlZHVjZXIubWVudVxuICAvLyAgICAgICA/IHN0YXRlLm1lbnVSZWR1Y2VyLm1lbnVcbiAgLy8gICAgICAgOiBbXTtcbiAgLy8gICBjb25zdCBwYXJlbnRNZW51ID0gbWVudUxpc3QuZmlsdGVyKCh2YWwpID0+IHtcbiAgLy8gICAgIHJldHVybiB2YWwuaXNQYXJlbnRNZW51ID09PSB0cnVlO1xuICAvLyAgIH0pO1xuICAvLyAgIGNvbnN0IHJlbmRlciA9IHBhcmVudE1lbnUubWFwKCh2YWwsIGluZGV4KSA9PiB7XG4gIC8vICAgICByZXR1cm4gKFxuICAvLyAgICAgICA8TGluayBocmVmPXtcIi9cIiArIHZhbC5tb2R1bGVOYW1lLnRvTG93ZXJDYXNlKCl9IGtleT17aW5kZXh9PlxuICAvLyAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLm1lbnVfY29udGFpbmVyfT5cbiAgLy8gICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMubWVudV9pbWd9IHNyYz17dmFsLmljb25DbGFzc30gLz5cbiAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudV90ZXh0fT57dmFsLm1vZHVsZU5hbWV9PC9kaXY+XG4gIC8vICAgICAgICAgPC9hPlxuICAvLyAgICAgICA8L0xpbms+XG4gIC8vICAgICApO1xuICAvLyAgIH0pO1xuICAvLyAgIHJldHVybiByZW5kZXI7XG4gIC8vIH07XG4gIGNvbnN0IHJlbmRlclRvcE1lbnUgPSAoKSA9PiB7XG4gICAgdmFyIGF1dGggPSB0b3BNZW51LmZpbHRlcigodmFsKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB2YWwubW9kdWxlQ29kZSA9PT0gXCJQTEFOXCIgfHxcbiAgICAgICAgdmFsLm1vZHVsZUNvZGUgPT09IFwiVU5QTEFOXCIgfHxcbiAgICAgICAgdmFsLm1vZHVsZUNvZGUgPT09IFwiU1BSRUFESU5HXCJcbiAgICAgICAgLy8gfHwgdmFsLm1vZHVsZUNvZGUgPT09IFwiV09SSy1WSVNJVFwiXG4gICAgICApO1xuICAgIH0pO1xuICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICAgIGlmIChhdXRoLmxlbmd0aCA9PT0gMykge1xuICAgICAgICByZXR1cm4gYXV0aC5tYXAoKHZhbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgIGZvY3VzID09PSB2YWwubW9kdWxlQ29kZSA/IHN0eWxlcy5mb2N1c19tZW51IDogc3R5bGVzLm1lbnVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0Rm9jdXModmFsLm1vZHVsZUNvZGUpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dmFsLm1vZHVsZUNvZGUgPT09IFwiUExBTlwiXG4gICAgICAgICAgICAgICAgPyBcIlBsYW5cIlxuICAgICAgICAgICAgICAgIDogdmFsLm1vZHVsZUNvZGUgPT09IFwiVU5QTEFOXCJcbiAgICAgICAgICAgICAgICA/IFwiVW5wbGFuXCJcbiAgICAgICAgICAgICAgICA6IHZhbC5tb2R1bGVDb2RlID09PSBcIlNQUkVBRElOR1wiXG4gICAgICAgICAgICAgICAgPyBcIlNwcmVhZGluZ1wiXG4gICAgICAgICAgICAgICAgOiB2YWwubW9kdWxlQ29kZSA9PT0gXCJXT1JLLVZJU0lUXCJcbiAgICAgICAgICAgICAgICA/IFwiV29yayBWaXNpdFwiXG4gICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAoYXV0aCkge1xuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudV9ncmlkfT57cmVuZGVyKCl9PC9kaXY+O1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcmVuZGVyUGxhbiA9ICgpID0+IHtcbiAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcbiAgICB2YXIgZGF0ZSA9IG5vdy5nZXREYXRlKCk7XG4gICAgdmFyIG1vbnRoID0gbm93LmdldE1vbnRoKCkgKyAxO1xuICAgIHZhciB5ZWFyID0gbm93LmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgcGxhbk1hcCA9IHBsYW4ubWFwKCh2YWwsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjE1cHhcIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNzAwXCIsXG4gICAgICAgICAgICBjb2xvcjogXCIjNUU1ODczXCIsXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgbWFyZ2luOiBcIjEwcHggMFwiLFxuICAgICAgICAgIH19XG4gICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXY+e3ZhbC5uYW1hT3V0bGV0fTwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMTRweFwiLCBmb250V2VpZ2h0OiBcIjMwMFwiIH19PlxuICAgICAgICAgICAge3ZhbC5hbGFtYXRPdXRsZXR9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICByZXR1cm4gPFNwaW5uZXIgLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPENhcmQgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBtYXJnaW5Ub3A6IFwiMjJweFwiIH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmVydmlld30+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9XG4gICAgICAgICAgICAgICAgPntgJHtkYXRlfSAvICR7bW9udGh9IC8gJHt5ZWFyfWB9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwiIzVFNTg3M1wiLCBtYXJnaW5Ub3A6IFwiN3B4XCIgfX0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIzNnB4XCIsIGZvbnRXZWlnaHQ6IFwiNjAwXCIgfX0+MDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE4cHhcIiB9fT4ve3BsYW4ubGVuZ3RofTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiN3B4XCIsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkVCODAwXCIsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweCAyMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI0MDBcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEFkZCBOZXcgUGxhbiArXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMnB4XCIsIGJvcmRlclJhZGl1czogXCIzMHB4XCIgfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsYW5fY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxOHB4XCIsXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjYwMFwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzVFNTg3M1wiLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgWW91ciBQbGFuIFRvZGF5XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIyMnB4IDBcIiB9fT57cGxhbk1hcH08L2Rpdj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi92aXNpdC9wbGFuXCI+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9e1wiU2VlIERldGFpbHNcIn0gLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcmVuZGVyVW5wbGFuID0gKCkgPT4ge307XG4gIGNvbnN0IHJlbmRlclNwcmVhZGluZyA9ICgpID0+IHt9O1xuICBjb25zdCByZW5kZXJXb3JrVmlzaXQgPSAoKSA9PiB7fTtcblxuICBjb25zdCByZW5kZXJQYWdlID0gKCkgPT4ge1xuICAgIGlmIChzdGF0ZS5tZW51UmVkdWNlci5tZW51ID09IG51bGwpIHtcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcbiAgICB9IGVsc2VcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+SG9tZTwvdGl0bGU+XG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmdfdG9wfSAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfaW5mb19ncmlkfT5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLnBwfSBzcmM9XCIvcHAucG5nXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMTVweFwiIH19PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIxNHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIHtzdGF0ZS51c2VyUmVkdWNlci51c2VyLm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMTJweFwiIH19PntcInVzZXIucm9sZSoqXCJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5ub3RpZn0gc3JjPVwiL25vdGlmLnN2Z1wiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICAgICAgICAgIHtyZW5kZXJUb3BNZW51KCl9XG4gICAgICAgICAgICAgICAgICB7Zm9jdXMgPT09IFwiUExBTlwiXG4gICAgICAgICAgICAgICAgICAgID8gcmVuZGVyUGxhbigpXG4gICAgICAgICAgICAgICAgICAgIDogZm9jdXMgPT09IFwiVU5QTEFOXCJcbiAgICAgICAgICAgICAgICAgICAgPyByZW5kZXJVbnBsYW4oKVxuICAgICAgICAgICAgICAgICAgICA6IGZvY3VzID09PSBcIlNQUkVBRElOR1wiXG4gICAgICAgICAgICAgICAgICAgID8gcmVuZGVyU3ByZWFkaW5nKClcbiAgICAgICAgICAgICAgICAgICAgOiBmb2N1cyA9PT0gXCJXT1JLLVZJU0lUXCJcbiAgICAgICAgICAgICAgICAgICAgPyByZW5kZXJXb3JrVmlzaXQoKVxuICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMjBweFwiIH19IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEJvdE5hdiBmb2N1cz17XCJob21lXCJ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgfTtcbiAgcmV0dXJuIHJlbmRlclBhZ2UoKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=