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
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helper */ "./helper.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_12__);



var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-new\\pages\\index.jsx",
    _s = $RefreshSig$();













function Home() {
  _s();

  var _this = this;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store__WEBPACK_IMPORTED_MODULE_6__["Stores"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch,
      actions = _useContext.actions;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      focus = _useState[0],
      setFocus = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      plan = _useState2[0],
      setPlan = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      planHistory = _useState3[0],
      setPlanHistory = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      spreadingHistory = _useState4[0],
      setSpreadingHistory = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      unplanHistory = _useState5[0],
      setUnplanHistory = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      role = _useState6[0],
      setRole = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      topMenu = _useState7[0],
      setTopMenu = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loading = _useState8[0],
      setLoading = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loadingMenu = _useState9[0],
      setLoadingMenu = _useState9[1];

  var now = new Date();
  var date = now.getDate();
  var month = now.getMonth() + 1;
  var year = now.getFullYear();
  var monthName = {
    full: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    part: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  };
  var dataPlan = {
    datasets: [{
      data: planHistory.length === 0 ? [0, 1] : [planHistory.length, plan.length],
      backgroundColor: ["#41867a", "#d1e4e1"]
    }]
  };
  var dataSpreading = {
    datasets: [{
      data: spreadingHistory.length === 0 ? [0, 1] : [0, 1],
      backgroundColor: ["#41867a", "#d1e4e1"]
    }]
  };
  var donutOptions = {
    cutoutPercentage: 75,
    tooltips: {
      enabled: false
    },
    hover: {
      mode: null
    },
    responsive: true,
    maintainAspectRatio: true
  };
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var userData = JSON.parse(localStorage.getItem("user"));

    if (userData) {
      actions.userLogin(userData);
      Object(_helper__WEBPACK_IMPORTED_MODULE_11__["getMenu"])(userData).then(function (data) {
        actions.setMenu(data);
        setTopMenu(data);
        setLoadingMenu(false);
      })["catch"](function (err) {
        console.log(err);
      });
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/");
    }
  }, [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setLoading(true);
    var userData = JSON.parse(localStorage.getItem("user"));

    if (userData) {
      if (focus === "PLAN") {
        Object(_helper__WEBPACK_IMPORTED_MODULE_11__["getPlanList"])(userData).then(function (data) {
          setPlan(data);
          setLoading(false);
        })["catch"](function (err) {
          console.log(err);
        });
      } else if (focus === "UNPLAN") {
        console.log("unplan");
        setLoading(false);
      } else if (focus === "SPREADING") {
        console.log("spreading");
        setLoading(false);
      } else if (focus === "WORK_VISIT") {
        console.log("work visit");
        setLoading(false);
      }
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/");
    }
  }, [focus]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var userData = JSON.parse(localStorage.getItem("user"));

    if (focus === "PLAN") {
      Object(_helper__WEBPACK_IMPORTED_MODULE_11__["getPlanHistory"])(userData).then(function (data) {
        setPlanHistory(data);
        setLoading(false);
        console.log(data);
      })["catch"](function (err) {
        console.log(err);
      });
    } else if (focus === "UNPLAN") {
      setLoading(false);
    } else if (focus === "SPREADING") {
      setLoading(false);
    }
  }, [focus]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var userData = JSON.parse(localStorage.getItem("user"));

    if (userData) {
      Object(_helper__WEBPACK_IMPORTED_MODULE_11__["getAuth"])(userData).then(function (data) {
        if (data[0].roleCode === "PIMCA") {
          setRole("PIMCA");
          setFocus("WORK_VISIT");
        } else if (data[0].roleCode === "SMR") {
          setRole("SMR");
          setFocus("PLAN");
        }
      })["catch"](function (err) {
        console.log(err);
      });
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/");
    }
  }, [dispatch]);

  var renderTopMenu = function renderTopMenu() {
    var auth = topMenu.filter(function (val) {
      if (role === "SMR") {
        return val.moduleCode === "PLAN" || val.moduleCode === "UNPLAN" || val.moduleCode === "SPREADING";
      } else if (role === "PIMCA") {
        return val.moduleCode === "WORK-VISIT";
      }
    });

    var render = function render() {
      return auth.map(function (val, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: focus === val.moduleCode ? _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.focus_menu : _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menu,
          onClick: function onClick() {
            setFocus(val.moduleCode);
          },
          children: val.moduleCode === "PLAN" ? "Plan" : val.moduleCode === "UNPLAN" ? "Unplan" : val.moduleCode === "SPREADING" ? "Spreading" : val.moduleCode === "WORK-VISIT" ? "Work Visit" : ""
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 11
        }, _this);
      });
    };

    if (auth) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: auth.length === 3 ? _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menu_grid3 : auth.length === 1 ? _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menu_grid1 : "",
        children: render()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 9
      }, _this);
    }
  };

  var renderList = function renderList(type, data) {
    return data.map(function (val, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          fontSize: "15px",
          fontWeight: "700",
          color: "#5E5873",
          textAlign: "left",
          margin: "10px 0"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            display: "grid",
            gridTemplateColumns: "12% 88%"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              width: "20px",
              height: "20px",
              backgroundColor: type === "PLAN" ? "#FFF1CC" : "#d1e4e1",
              borderRadius: "20px",
              padding: "4px"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                width: "12px",
                height: "12px",
                backgroundColor: type === "PLAN" ? "#feb800" : "#41867a",
                borderRadius: "20px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 255,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 246,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: val.namaOutlet
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 265,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                fontSize: "14px",
                fontWeight: "300"
              },
              children: val.alamatOutlet
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 266,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 11
        }, _this)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 9
      }, _this);
    });
  };

  var renderPlan = function renderPlan() {
    if (loading) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 14
      }, _this);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_10__["default"], {
          style: {
            borderRadius: "5px",
            marginTop: "22px"
          },
          shadow: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.overview,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.date,
                children: "".concat(date, " / ").concat(monthName.part[month - 1], " / ").concat(year)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 285,
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
                  children: planHistory.length
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 289,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  style: {
                    fontSize: "18px"
                  },
                  children: ["/", plan.length + planHistory.length]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 292,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 288,
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
                lineNumber: 296,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 284,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.pie_percentage,
                children: planHistory.length === 0 ? "0%" : "".concat(Math.round(planHistory.length / (plan.length + planHistory.length) * 100), "%")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 312,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_12__["Doughnut"], {
                data: dataPlan,
                options: donutOptions,
                width: 100,
                height: 100
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 321,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 311,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 283,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_10__["default"], {
          style: {
            marginTop: "22px",
            borderRadius: "30px"
          },
          shadow: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.plan_container,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                fontSize: "18px",
                fontWeight: "500",
                color: "#5E5873",
                textAlign: "left"
              },
              children: "Your Plan Today"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 332,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                margin: "22px 0"
              },
              children: renderList("PLAN", plan)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 342,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: "/visit/plan",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  text: "See Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 345,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 344,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 343,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 331,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 330,
          columnNumber: 11
        }, _this)]
      }, void 0, true);
    }
  };

  var renderSpreading = function renderSpreading() {
    if (loading) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 357,
        columnNumber: 14
      }, _this);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_10__["default"], {
          style: {
            borderRadius: "5px",
            marginTop: "22px"
          },
          shadow: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.overview,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.date,
                children: "".concat(date, " / ").concat(monthName.part[month - 1], " / ").concat(year)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 364,
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
                  lineNumber: 368,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  style: {
                    fontSize: "18px"
                  },
                  children: ["/", plan.length]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 369,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 367,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                href: "/visit/spreading/",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
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
                    children: "Add New NOO +"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 373,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 372,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 371,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 363,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.pie_percentage,
                children: "0%"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 391,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_12__["Doughnut"], {
                data: dataSpreading,
                options: donutOptions,
                width: 100,
                height: 100
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 392,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 390,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 362,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 361,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_10__["default"], {
          style: {
            marginTop: "22px",
            borderRadius: "30px"
          },
          shadow: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.plan_container,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                fontSize: "18px",
                fontWeight: "500",
                color: "#5E5873",
                textAlign: "left"
              },
              children: "Spreading History"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 403,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                margin: "22px 0"
              },
              children: renderList("SPREADING", spreadingHistory)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 413,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: "/visit/spreading/history",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  text: "See Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 418,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 417,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 416,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 402,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 401,
          columnNumber: 11
        }, _this)]
      }, void 0, true);
    }
  };

  var renderUnplan = function renderUnplan() {
    if (loading) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 430,
        columnNumber: 14
      }, _this);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_10__["default"], {
          style: {
            borderRadius: "5px",
            marginTop: "22px"
          },
          shadow: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.unplan_grid,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.num_total_unplan,
              children: "5"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 436,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                fontSize: "14px"
              },
              children: "Total Unplan Visit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 437,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.date,
              children: monthName.full[month - 1]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 438,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 435,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 434,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_10__["default"], {
          style: {
            borderRadius: "5px",
            marginTop: "11px"
          },
          shadow: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: "/visit/unplan",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              style: {
                textDecoration: "none"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.unplan_grid2,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.add_unplan,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    style: {
                      marginTop: "-8px"
                    },
                    children: "+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 446,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 445,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  style: {
                    fontSize: "16px",
                    fontWeight: "600"
                  },
                  children: ["Any Unplan Visit?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    style: {
                      color: "#B9B9C3",
                      fontWeight: "300",
                      fontSize: "13px"
                    },
                    children: "Add your unplan visit here"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 450,
                    columnNumber: 21
                  }, _this), " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 448,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  style: {
                    textAlign: "center"
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/next.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 461,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 460,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 444,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 443,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 442,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 441,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_10__["default"], {
          style: {
            marginTop: "22px",
            borderRadius: "30px"
          },
          shadow: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.plan_container,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                fontSize: "18px",
                fontWeight: "500",
                color: "#5E5873",
                textAlign: "left"
              },
              children: "Unplan Visit History"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 470,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                margin: "22px 0"
              },
              children: renderList("UNPLAN", unplanHistory)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 480,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: "/visit/unplan/history",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  text: "See Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 485,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 484,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 483,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 469,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 468,
          columnNumber: 11
        }, _this)]
      }, void 0, true);
    }
  };

  var renderWorkVisit = function renderWorkVisit() {};

  var renderPage = function renderPage() {
    if (loading && loadingMenu) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 499,
        columnNumber: 14
      }, _this);
    } else return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 504,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "icon",
          href: "/favicon.ico"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 505,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 503,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.wrapper,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.bg_top
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 509,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.user_info_grid,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.pp,
              src: "/pp.png"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 511,
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
                lineNumber: 513,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  fontSize: "12px"
                },
                children: role
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 516,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 512,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.notif,
              src: "/notif.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 518,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,
              children: [renderTopMenu(), focus === "PLAN" ? renderPlan() : focus === "UNPLAN" ? renderUnplan() : focus === "SPREADING" ? renderSpreading() : focus === "WORK-VISIT" ? renderWorkVisit() : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  marginBottom: "120px"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 530,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 519,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 510,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 508,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 507,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_BotNav__WEBPACK_IMPORTED_MODULE_8__["default"], {
        focus: "home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 535,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 9
    }, _this);
  };

  return renderPage();
}

_s(Home, "r21OsrunIWeg3yYaJ+Avx5p7kt8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VDb250ZXh0IiwiU3RvcmVzIiwic3RhdGUiLCJkaXNwYXRjaCIsImFjdGlvbnMiLCJ1c2VTdGF0ZSIsImZvY3VzIiwic2V0Rm9jdXMiLCJwbGFuIiwic2V0UGxhbiIsInBsYW5IaXN0b3J5Iiwic2V0UGxhbkhpc3RvcnkiLCJzcHJlYWRpbmdIaXN0b3J5Iiwic2V0U3ByZWFkaW5nSGlzdG9yeSIsInVucGxhbkhpc3RvcnkiLCJzZXRVbnBsYW5IaXN0b3J5Iiwicm9sZSIsInNldFJvbGUiLCJ0b3BNZW51Iiwic2V0VG9wTWVudSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibG9hZGluZ01lbnUiLCJzZXRMb2FkaW5nTWVudSIsIm5vdyIsIkRhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aE5hbWUiLCJmdWxsIiwicGFydCIsImRhdGFQbGFuIiwiZGF0YXNldHMiLCJkYXRhIiwibGVuZ3RoIiwiYmFja2dyb3VuZENvbG9yIiwiZGF0YVNwcmVhZGluZyIsImRvbnV0T3B0aW9ucyIsImN1dG91dFBlcmNlbnRhZ2UiLCJ0b29sdGlwcyIsImVuYWJsZWQiLCJob3ZlciIsIm1vZGUiLCJyZXNwb25zaXZlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInVzZUVmZmVjdCIsInVzZXJEYXRhIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZXJMb2dpbiIsImdldE1lbnUiLCJ0aGVuIiwic2V0TWVudSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJSb3V0ZXIiLCJwdXNoIiwiZ2V0UGxhbkxpc3QiLCJnZXRQbGFuSGlzdG9yeSIsImdldEF1dGgiLCJyb2xlQ29kZSIsInJlbmRlclRvcE1lbnUiLCJhdXRoIiwiZmlsdGVyIiwidmFsIiwibW9kdWxlQ29kZSIsInJlbmRlciIsIm1hcCIsImluZGV4Iiwic3R5bGVzIiwiZm9jdXNfbWVudSIsIm1lbnUiLCJtZW51X2dyaWQzIiwibWVudV9ncmlkMSIsInJlbmRlckxpc3QiLCJ0eXBlIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsIm5hbWFPdXRsZXQiLCJhbGFtYXRPdXRsZXQiLCJyZW5kZXJQbGFuIiwibWFyZ2luVG9wIiwib3ZlcnZpZXciLCJib3JkZXIiLCJwaWVfcGVyY2VudGFnZSIsIk1hdGgiLCJyb3VuZCIsInBsYW5fY29udGFpbmVyIiwicmVuZGVyU3ByZWFkaW5nIiwicmVuZGVyVW5wbGFuIiwidW5wbGFuX2dyaWQiLCJudW1fdG90YWxfdW5wbGFuIiwidGV4dERlY29yYXRpb24iLCJ1bnBsYW5fZ3JpZDIiLCJhZGRfdW5wbGFuIiwicmVuZGVyV29ya1Zpc2l0IiwicmVuZGVyUGFnZSIsImNvbnRhaW5lciIsIndyYXBwZXIiLCJiZ190b3AiLCJ1c2VyX2luZm9fZ3JpZCIsInBwIiwibWFyZ2luTGVmdCIsInVzZXJSZWR1Y2VyIiwidXNlciIsIm5hbWUiLCJub3RpZiIsIm1haW4iLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLG9CQUNRQyx3REFBVSxDQUFDQyw2Q0FBRCxDQURsQjtBQUFBLE1BQ3JCQyxLQURxQixlQUNyQkEsS0FEcUI7QUFBQSxNQUNkQyxRQURjLGVBQ2RBLFFBRGM7QUFBQSxNQUNKQyxPQURJLGVBQ0pBLE9BREk7O0FBQUEsa0JBRUhDLHNEQUFRLENBQUMsRUFBRCxD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QUEsdUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsZUFpQ0UscUVBQUMsMERBQUQ7QUFBUSxhQUFLLEVBQUU7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBcUNILEdBekNEOztBQTBDQSxTQUFPWixVQUFVLEVBQWpCO0FBQ0Q7O0dBM2dCdUJqSCxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk4ZjYzYWZjYjQyOWMzYzNmNTkzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3BhZ2VzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IFN0b3JlcyB9IGZyb20gXCIuLi9zdG9yZVwiO1xuXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9TcGlubmVyXCI7XG5pbXBvcnQgQm90TmF2IGZyb20gXCIuLi9jb21wb25lbnRzL0JvdE5hdlwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRcIjtcblxuaW1wb3J0IHsgZ2V0QXV0aCwgZ2V0TWVudSwgZ2V0UGxhbkhpc3RvcnksIGdldFBsYW5MaXN0IH0gZnJvbSBcIi4uL2hlbHBlclwiO1xuXG5pbXBvcnQgeyBEb3VnaG51dCB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2gsIGFjdGlvbnMgfSA9IHVzZUNvbnRleHQoU3RvcmVzKTtcbiAgY29uc3QgW2ZvY3VzLCBzZXRGb2N1c10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3BsYW4sIHNldFBsYW5dID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcGxhbkhpc3RvcnksIHNldFBsYW5IaXN0b3J5XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NwcmVhZGluZ0hpc3RvcnksIHNldFNwcmVhZGluZ0hpc3RvcnldID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdW5wbGFuSGlzdG9yeSwgc2V0VW5wbGFuSGlzdG9yeV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtyb2xlLCBzZXRSb2xlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdG9wTWVudSwgc2V0VG9wTWVudV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbbG9hZGluZ01lbnUsIHNldExvYWRpbmdNZW51XSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuICB2YXIgZGF0ZSA9IG5vdy5nZXREYXRlKCk7XG4gIHZhciBtb250aCA9IG5vdy5nZXRNb250aCgpICsgMTtcbiAgdmFyIHllYXIgPSBub3cuZ2V0RnVsbFllYXIoKTtcblxuICBjb25zdCBtb250aE5hbWUgPSB7XG4gICAgZnVsbDogW1xuICAgICAgXCJKYW51YXJ5XCIsXG4gICAgICBcIkZlYnJ1YXJ5XCIsXG4gICAgICBcIk1hcmNoXCIsXG4gICAgICBcIkFwcmlsXCIsXG4gICAgICBcIk1heVwiLFxuICAgICAgXCJKdW5lXCIsXG4gICAgICBcIkp1bHlcIixcbiAgICAgIFwiQXVndXN0XCIsXG4gICAgICBcIlNlcHRlbWJlclwiLFxuICAgICAgXCJPY3RvYmVyXCIsXG4gICAgICBcIk5vdmVtYmVyXCIsXG4gICAgICBcIkRlY2VtYmVyXCIsXG4gICAgXSxcbiAgICBwYXJ0OiBbXG4gICAgICBcIkphblwiLFxuICAgICAgXCJGZWJcIixcbiAgICAgIFwiTWFyXCIsXG4gICAgICBcIkFwclwiLFxuICAgICAgXCJNYXlcIixcbiAgICAgIFwiSnVuXCIsXG4gICAgICBcIkp1bFwiLFxuICAgICAgXCJBdWdcIixcbiAgICAgIFwiU2VwXCIsXG4gICAgICBcIk9jdFwiLFxuICAgICAgXCJOb3ZcIixcbiAgICAgIFwiRGVjXCIsXG4gICAgXSxcbiAgfTtcblxuICBjb25zdCBkYXRhUGxhbiA9IHtcbiAgICBkYXRhc2V0czogW1xuICAgICAge1xuICAgICAgICBkYXRhOlxuICAgICAgICAgIHBsYW5IaXN0b3J5Lmxlbmd0aCA9PT0gMCA/IFswLCAxXSA6IFtwbGFuSGlzdG9yeS5sZW5ndGgsIHBsYW4ubGVuZ3RoXSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXCIjNDE4NjdhXCIsIFwiI2QxZTRlMVwiXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcbiAgY29uc3QgZGF0YVNwcmVhZGluZyA9IHtcbiAgICBkYXRhc2V0czogW1xuICAgICAge1xuICAgICAgICBkYXRhOiBzcHJlYWRpbmdIaXN0b3J5Lmxlbmd0aCA9PT0gMCA/IFswLCAxXSA6IFswLCAxXSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXCIjNDE4NjdhXCIsIFwiI2QxZTRlMVwiXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcbiAgY29uc3QgZG9udXRPcHRpb25zID0ge1xuICAgIGN1dG91dFBlcmNlbnRhZ2U6IDc1LFxuICAgIHRvb2x0aXBzOiB7IGVuYWJsZWQ6IGZhbHNlIH0sXG4gICAgaG92ZXI6IHsgbW9kZTogbnVsbCB9LFxuICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogdHJ1ZSxcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xuICAgIGlmICh1c2VyRGF0YSkge1xuICAgICAgYWN0aW9ucy51c2VyTG9naW4odXNlckRhdGEpO1xuICAgICAgZ2V0TWVudSh1c2VyRGF0YSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBhY3Rpb25zLnNldE1lbnUoZGF0YSk7XG4gICAgICAgICAgc2V0VG9wTWVudShkYXRhKTtcbiAgICAgICAgICBzZXRMb2FkaW5nTWVudShmYWxzZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9XG4gIH0sIFtkaXNwYXRjaF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcbiAgICBpZiAodXNlckRhdGEpIHtcbiAgICAgIGlmIChmb2N1cyA9PT0gXCJQTEFOXCIpIHtcbiAgICAgICAgZ2V0UGxhbkxpc3QodXNlckRhdGEpXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHNldFBsYW4oZGF0YSk7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChmb2N1cyA9PT0gXCJVTlBMQU5cIikge1xuICAgICAgICBjb25zb2xlLmxvZyhcInVucGxhblwiKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9IGVsc2UgaWYgKGZvY3VzID09PSBcIlNQUkVBRElOR1wiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic3ByZWFkaW5nXCIpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0gZWxzZSBpZiAoZm9jdXMgPT09IFwiV09SS19WSVNJVFwiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwid29yayB2aXNpdFwiKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9XG4gIH0sIFtmb2N1c10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XG5cbiAgICBpZiAoZm9jdXMgPT09IFwiUExBTlwiKSB7XG4gICAgICBnZXRQbGFuSGlzdG9yeSh1c2VyRGF0YSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBzZXRQbGFuSGlzdG9yeShkYXRhKTtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGZvY3VzID09PSBcIlVOUExBTlwiKSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9IGVsc2UgaWYgKGZvY3VzID09PSBcIlNQUkVBRElOR1wiKSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH0sIFtmb2N1c10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XG4gICAgaWYgKHVzZXJEYXRhKSB7XG4gICAgICBnZXRBdXRoKHVzZXJEYXRhKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhWzBdLnJvbGVDb2RlID09PSBcIlBJTUNBXCIpIHtcbiAgICAgICAgICAgIHNldFJvbGUoXCJQSU1DQVwiKTtcbiAgICAgICAgICAgIHNldEZvY3VzKFwiV09SS19WSVNJVFwiKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFbMF0ucm9sZUNvZGUgPT09IFwiU01SXCIpIHtcbiAgICAgICAgICAgIHNldFJvbGUoXCJTTVJcIik7XG4gICAgICAgICAgICBzZXRGb2N1cyhcIlBMQU5cIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfVxuICB9LCBbZGlzcGF0Y2hdKTtcblxuICBjb25zdCByZW5kZXJUb3BNZW51ID0gKCkgPT4ge1xuICAgIHZhciBhdXRoID0gdG9wTWVudS5maWx0ZXIoKHZhbCkgPT4ge1xuICAgICAgaWYgKHJvbGUgPT09IFwiU01SXCIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICB2YWwubW9kdWxlQ29kZSA9PT0gXCJQTEFOXCIgfHxcbiAgICAgICAgICB2YWwubW9kdWxlQ29kZSA9PT0gXCJVTlBMQU5cIiB8fFxuICAgICAgICAgIHZhbC5tb2R1bGVDb2RlID09PSBcIlNQUkVBRElOR1wiXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKHJvbGUgPT09IFwiUElNQ0FcIikge1xuICAgICAgICByZXR1cm4gdmFsLm1vZHVsZUNvZGUgPT09IFwiV09SSy1WSVNJVFwiO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIGF1dGgubWFwKCh2YWwsIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgZm9jdXMgPT09IHZhbC5tb2R1bGVDb2RlID8gc3R5bGVzLmZvY3VzX21lbnUgOiBzdHlsZXMubWVudVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRGb2N1cyh2YWwubW9kdWxlQ29kZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dmFsLm1vZHVsZUNvZGUgPT09IFwiUExBTlwiXG4gICAgICAgICAgICAgID8gXCJQbGFuXCJcbiAgICAgICAgICAgICAgOiB2YWwubW9kdWxlQ29kZSA9PT0gXCJVTlBMQU5cIlxuICAgICAgICAgICAgICA/IFwiVW5wbGFuXCJcbiAgICAgICAgICAgICAgOiB2YWwubW9kdWxlQ29kZSA9PT0gXCJTUFJFQURJTkdcIlxuICAgICAgICAgICAgICA/IFwiU3ByZWFkaW5nXCJcbiAgICAgICAgICAgICAgOiB2YWwubW9kdWxlQ29kZSA9PT0gXCJXT1JLLVZJU0lUXCJcbiAgICAgICAgICAgICAgPyBcIldvcmsgVmlzaXRcIlxuICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGlmIChhdXRoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIGF1dGgubGVuZ3RoID09PSAzXG4gICAgICAgICAgICAgID8gc3R5bGVzLm1lbnVfZ3JpZDNcbiAgICAgICAgICAgICAgOiBhdXRoLmxlbmd0aCA9PT0gMVxuICAgICAgICAgICAgICA/IHN0eWxlcy5tZW51X2dyaWQxXG4gICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIHtyZW5kZXIoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXJMaXN0ID0gKHR5cGUsIGRhdGEpID0+IHtcbiAgICByZXR1cm4gZGF0YS5tYXAoKHZhbCwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZm9udFNpemU6IFwiMTVweFwiLFxuICAgICAgICAgICAgZm9udFdlaWdodDogXCI3MDBcIixcbiAgICAgICAgICAgIGNvbG9yOiBcIiM1RTU4NzNcIixcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICBtYXJnaW46IFwiMTBweCAwXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxMiUgODglXCIgfX0+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0eXBlID09PSBcIlBMQU5cIiA/IFwiI0ZGRjFDQ1wiIDogXCIjZDFlNGUxXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjRweFwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMnB4XCIsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHR5cGUgPT09IFwiUExBTlwiID8gXCIjZmViODAwXCIgOiBcIiM0MTg2N2FcIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdj57dmFsLm5hbWFPdXRsZXR9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMTRweFwiLCBmb250V2VpZ2h0OiBcIjMwMFwiIH19PlxuICAgICAgICAgICAgICAgIHt2YWwuYWxhbWF0T3V0bGV0fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyUGxhbiA9ICgpID0+IHtcbiAgICBpZiAobG9hZGluZykge1xuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI1cHhcIiwgbWFyZ2luVG9wOiBcIjIycHhcIiB9fSBzaGFkb3c+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm92ZXJ2aWV3fT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfT57YCR7ZGF0ZX0gLyAke1xuICAgICAgICAgICAgICAgICAgbW9udGhOYW1lLnBhcnRbbW9udGggLSAxXVxuICAgICAgICAgICAgICAgIH0gLyAke3llYXJ9YH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogXCIjNUU1ODczXCIsIG1hcmdpblRvcDogXCI3cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjM2cHhcIiwgZm9udFdlaWdodDogXCI2MDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAge3BsYW5IaXN0b3J5Lmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE4cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgL3twbGFuLmxlbmd0aCArIHBsYW5IaXN0b3J5Lmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiN3B4XCIsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkVCODAwXCIsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweCAyMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI0MDBcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEFkZCBOZXcgUGxhbiArXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGllX3BlcmNlbnRhZ2V9PlxuICAgICAgICAgICAgICAgICAge3BsYW5IaXN0b3J5Lmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgICAgICA/IFwiMCVcIlxuICAgICAgICAgICAgICAgICAgICA6IGAke01hdGgucm91bmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAocGxhbkhpc3RvcnkubGVuZ3RoIC9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKHBsYW4ubGVuZ3RoICsgcGxhbkhpc3RvcnkubGVuZ3RoKSkgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAxMDBcbiAgICAgICAgICAgICAgICAgICAgICApfSVgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxEb3VnaG51dFxuICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YVBsYW59XG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtkb251dE9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIycHhcIiwgYm9yZGVyUmFkaXVzOiBcIjMwcHhcIiB9fSBzaGFkb3c+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsYW5fY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxOHB4XCIsXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzVFNTg3M1wiLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgWW91ciBQbGFuIFRvZGF5XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIyMnB4IDBcIiB9fT57cmVuZGVyTGlzdChcIlBMQU5cIiwgcGxhbil9PC9kaXY+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdmlzaXQvcGxhblwiPlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PXtcIlNlZSBEZXRhaWxzXCJ9IC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvPlxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyU3ByZWFkaW5nID0gKCkgPT4ge1xuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICByZXR1cm4gPFNwaW5uZXIgLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPENhcmQgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBtYXJnaW5Ub3A6IFwiMjJweFwiIH19IHNoYWRvdz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcnZpZXd9PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9PntgJHtkYXRlfSAvICR7XG4gICAgICAgICAgICAgICAgICBtb250aE5hbWUucGFydFttb250aCAtIDFdXG4gICAgICAgICAgICAgICAgfSAvICR7eWVhcn1gfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcIiM1RTU4NzNcIiwgbWFyZ2luVG9wOiBcIjdweFwiIH19PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMzZweFwiLCBmb250V2VpZ2h0OiBcIjYwMFwiIH19PjA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIxOHB4XCIgfX0+L3twbGFuLmxlbmd0aH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvdmlzaXQvc3ByZWFkaW5nL1wifT5cbiAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI3cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkVCODAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHggMjJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI0MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIEFkZCBOZXcgTk9PICtcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBpZV9wZXJjZW50YWdlfT4wJTwvZGl2PlxuICAgICAgICAgICAgICAgIDxEb3VnaG51dFxuICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YVNwcmVhZGluZ31cbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2RvbnV0T3B0aW9uc31cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjJweFwiLCBib3JkZXJSYWRpdXM6IFwiMzBweFwiIH19IHNoYWRvdz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxhbl9jb250YWluZXJ9PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNUU1ODczXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTcHJlYWRpbmcgSGlzdG9yeVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMjJweCAwXCIgfX0+XG4gICAgICAgICAgICAgICAge3JlbmRlckxpc3QoXCJTUFJFQURJTkdcIiwgc3ByZWFkaW5nSGlzdG9yeSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Zpc2l0L3NwcmVhZGluZy9oaXN0b3J5XCI+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9e1wiU2VlIERldGFpbHNcIn0gLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXJVbnBsYW4gPSAoKSA9PiB7XG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIG1hcmdpblRvcDogXCIyMnB4XCIgfX0gc2hhZG93PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51bnBsYW5fZ3JpZH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubnVtX3RvdGFsX3VucGxhbn0+NTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjE0cHhcIiB9fT5Ub3RhbCBVbnBsYW4gVmlzaXQ8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfT57bW9udGhOYW1lLmZ1bGxbbW9udGggLSAxXX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIG1hcmdpblRvcDogXCIxMXB4XCIgfX0gc2hhZG93PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi92aXNpdC91bnBsYW5cIj5cbiAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudW5wbGFuX2dyaWQyfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkX3VucGxhbn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIi04cHhcIiB9fT4rPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMTZweFwiLCBmb250V2VpZ2h0OiBcIjYwMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICBBbnkgVW5wbGFuIFZpc2l0P1xuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNCOUI5QzNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiMzAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxM3B4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIEFkZCB5b3VyIHVucGxhbiB2aXNpdCBoZXJlXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcIi9uZXh0LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L0NhcmQ+XG5cbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjJweFwiLCBib3JkZXJSYWRpdXM6IFwiMzBweFwiIH19IHNoYWRvdz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxhbl9jb250YWluZXJ9PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNUU1ODczXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBVbnBsYW4gVmlzaXQgSGlzdG9yeVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMjJweCAwXCIgfX0+XG4gICAgICAgICAgICAgICAge3JlbmRlckxpc3QoXCJVTlBMQU5cIiwgdW5wbGFuSGlzdG9yeSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Zpc2l0L3VucGxhbi9oaXN0b3J5XCI+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9e1wiU2VlIERldGFpbHNcIn0gLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXJXb3JrVmlzaXQgPSAoKSA9PiB7fTtcblxuICBjb25zdCByZW5kZXJQYWdlID0gKCkgPT4ge1xuICAgIGlmIChsb2FkaW5nICYmIGxvYWRpbmdNZW51KSB7XG4gICAgICByZXR1cm4gPFNwaW5uZXIgLz47XG4gICAgfSBlbHNlXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJnX3RvcH0gLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2luZm9fZ3JpZH0+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5wcH0gc3JjPVwiL3BwLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjE1cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMTRweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICB7c3RhdGUudXNlclJlZHVjZXIudXNlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjEycHhcIiB9fT57cm9sZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLm5vdGlmfSBzcmM9XCIvbm90aWYuc3ZnXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICAgICAgICAgICAge3JlbmRlclRvcE1lbnUoKX1cbiAgICAgICAgICAgICAgICAgIHtmb2N1cyA9PT0gXCJQTEFOXCJcbiAgICAgICAgICAgICAgICAgICAgPyByZW5kZXJQbGFuKClcbiAgICAgICAgICAgICAgICAgICAgOiBmb2N1cyA9PT0gXCJVTlBMQU5cIlxuICAgICAgICAgICAgICAgICAgICA/IHJlbmRlclVucGxhbigpXG4gICAgICAgICAgICAgICAgICAgIDogZm9jdXMgPT09IFwiU1BSRUFESU5HXCJcbiAgICAgICAgICAgICAgICAgICAgPyByZW5kZXJTcHJlYWRpbmcoKVxuICAgICAgICAgICAgICAgICAgICA6IGZvY3VzID09PSBcIldPUkstVklTSVRcIlxuICAgICAgICAgICAgICAgICAgICA/IHJlbmRlcldvcmtWaXNpdCgpXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEyMHB4XCIgfX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Qm90TmF2IGZvY3VzPXtcImhvbWVcIn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICB9O1xuICByZXR1cm4gcmVuZGVyUGFnZSgpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==