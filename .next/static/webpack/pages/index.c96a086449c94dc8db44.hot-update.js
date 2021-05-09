webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/home.jsx":
/*!************************!*\
  !*** ./pages/home.jsx ***!
  \************************/
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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);



var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-new\\pages\\home.jsx",
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
        Object(_helper__WEBPACK_IMPORTED_MODULE_11__["getUnplanMonthlyHistory"])(userData).then(function (data) {
          // console.log(data);
          setUnplanHistory(data);
          setLoading(false);
        })["catch"](function (err) {
          console.log(err);
        });
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
        setLoading(false); // console.log(data);
      })["catch"](function (err) {
        console.log(err);
      });
    } else if (focus === "UNPLAN") {} else if (focus === "SPREADING") {
      setLoading(false);
    }
  }, [focus]);

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
          lineNumber: 171,
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
        lineNumber: 195,
        columnNumber: 9
      }, _this);
    }
  };

  var renderList = function renderList(type, data) {
    if (data.length === 0) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          fontSize: "15px",
          color: "rgb(208, 208, 208)",
          textAlign: "left",
          margin: "30px 0"
        },
        children: "No Item"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 9
      }, _this);
    } else {
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
                lineNumber: 247,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: val.namaOutlet
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 257,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  fontSize: "14px",
                  fontWeight: "300"
                },
                children: val.alamatOutlet
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 258,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 256,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 13
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 11
        }, _this);
      });
    }
  };

  var renderPlan = function renderPlan() {
    if (loading) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 271,
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
                children: moment__WEBPACK_IMPORTED_MODULE_13___default()().format("D / MMM / YYYY")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 278,
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
                  lineNumber: 282,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  style: {
                    fontSize: "18px"
                  },
                  children: ["/", plan.length + planHistory.length]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 285,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 281,
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
                lineNumber: 289,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 277,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.pie_percentage,
                children: planHistory.length === 0 ? "0%" : "".concat(Math.round(planHistory.length / (plan.length + planHistory.length) * 100), "%")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 305,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_12__["Doughnut"], {
                data: dataPlan,
                options: donutOptions,
                width: 100,
                height: 100
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 314,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 304,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 276,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 275,
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
              lineNumber: 325,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                margin: "22px 0"
              },
              children: renderList("PLAN", plan)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 335,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: "/visit/plan",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  text: "See Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 338,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 337,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 336,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 324,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 323,
          columnNumber: 11
        }, _this)]
      }, void 0, true);
    }
  };

  var renderSpreading = function renderSpreading() {
    if (loading) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 350,
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
                children: moment__WEBPACK_IMPORTED_MODULE_13___default()().format("D / MMM / YYYY")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 357,
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
                  lineNumber: 361,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  style: {
                    fontSize: "18px"
                  },
                  children: ["/", plan.length]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 362,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 360,
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
                    lineNumber: 366,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 365,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 364,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 356,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.pie_percentage,
                children: "0%"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 384,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_12__["Doughnut"], {
                data: dataSpreading,
                options: donutOptions,
                width: 100,
                height: 100
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 385,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 383,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 355,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 354,
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
              lineNumber: 396,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                margin: "22px 0"
              },
              children: renderList("SPREADING", spreadingHistory)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 406,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: "/visit/spreading/history",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  text: "See Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 411,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 410,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 409,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 395,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 394,
          columnNumber: 11
        }, _this)]
      }, void 0, true);
    }
  };

  var renderUnplan = function renderUnplan() {
    if (loading) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 423,
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
              children: unplanHistory.length
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 429,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                fontSize: "14px"
              },
              children: "Total Unplan Visit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 432,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.date,
              children: moment__WEBPACK_IMPORTED_MODULE_13___default()().format("MMMM")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 433,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 428,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 427,
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
                    lineNumber: 441,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 440,
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
                    lineNumber: 445,
                    columnNumber: 21
                  }, _this), " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 443,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  style: {
                    textAlign: "center"
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/next.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 456,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 455,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 439,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 438,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 437,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 436,
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
              lineNumber: 465,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                margin: "22px 0"
              },
              children: renderList("UNPLAN", unplanHistory)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 475,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: "/visit/unplan/history",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  text: "See Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 480,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 479,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 478,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 464,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 463,
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
        lineNumber: 494,
        columnNumber: 14
      }, _this);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 499,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
            rel: "icon",
            href: "/favicon.ico"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 500,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 498,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.wrapper,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.bg_top
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 504,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.user_info_grid,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.pp,
                src: "/pp.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 506,
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
                  lineNumber: 508,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  style: {
                    fontSize: "12px"
                  },
                  children: role
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 511,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 507,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.notif,
                src: "/notif.svg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 513,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,
                children: [renderTopMenu(), focus === "PLAN" ? renderPlan() : focus === "UNPLAN" ? renderUnplan() : focus === "SPREADING" ? renderSpreading() : focus === "WORK-VISIT" ? renderWorkVisit() : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  style: {
                    marginBottom: "120px"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 525,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 514,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 505,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 503,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 502,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_BotNav__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 530,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 497,
        columnNumber: 9
      }, _this);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS5qc3giXSwibmFtZXMiOlsiSG9tZSIsInVzZUNvbnRleHQiLCJTdG9yZXMiLCJzdGF0ZSIsImRpc3BhdGNoIiwiYWN0aW9ucyIsInVzZVN0YXRlIiwiZm9jdXMiLCJzZXRGb2N1cyIsInBsYW4iLCJzZXRQbGFuIiwicGxhbkhpc3RvcnkiLCJzZXRQbGFuSGlzdG9yeSIsInNwcmVhZGluZ0hpc3RvcnkiLCJzZXRTcHJlYWRpbmdIaXN0b3J5IiwidW5wbGFuSGlzdG9yeSIsInNldFVucGxhbkhpc3RvcnkiLCJyb2xlIiwic2V0Um9sZSIsInRvcE1lbnUiLCJzZXRUb3BNZW51IiwibG9hZGluZyIsInNldExvYWRpbmciLCJsb2FkaW5nTWVudSIsInNldExvYWRpbmdNZW51IiwiZGF0YVBsYW4iLCJkYXRhc2V0cyIsImRhdGEiLCJsZW5ndGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkYXRhU3ByZWFkaW5nIiwiZG9udXRPcHRpb25zIiwiY3V0b3V0UGVyY2VudGFnZSIsInRvb2x0aXBzIiwiZW5hYmxlZCIsImhvdmVyIiwibW9kZSIsInJlc3BvbnNpdmUiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwidXNlRWZmZWN0IiwidXNlckRhdGEiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlckxvZ2luIiwiZ2V0TWVudSIsInRoZW4iLCJzZXRNZW51IiwiZXJyIiwiY29uc29sZSIsImxvZyIsIlJvdXRlciIsInB1c2giLCJnZXRBdXRoIiwicm9sZUNvZGUiLCJnZXRQbGFuTGlzdCIsImdldFVucGxhbk1vbnRobHlIaXN0b3J5IiwiZ2V0UGxhbkhpc3RvcnkiLCJyZW5kZXJUb3BNZW51IiwiYXV0aCIsImZpbHRlciIsInZhbCIsIm1vZHVsZUNvZGUiLCJyZW5kZXIiLCJtYXAiLCJpbmRleCIsInN0eWxlcyIsImZvY3VzX21lbnUiLCJtZW51IiwibWVudV9ncmlkMyIsIm1lbnVfZ3JpZDEiLCJyZW5kZXJMaXN0IiwidHlwZSIsImZvbnRTaXplIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJmb250V2VpZ2h0IiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJuYW1hT3V0bGV0IiwiYWxhbWF0T3V0bGV0IiwicmVuZGVyUGxhbiIsIm1hcmdpblRvcCIsIm92ZXJ2aWV3IiwiZGF0ZSIsIm1vbWVudCIsImZvcm1hdCIsImJvcmRlciIsInBpZV9wZXJjZW50YWdlIiwiTWF0aCIsInJvdW5kIiwicGxhbl9jb250YWluZXIiLCJyZW5kZXJTcHJlYWRpbmciLCJyZW5kZXJVbnBsYW4iLCJ1bnBsYW5fZ3JpZCIsIm51bV90b3RhbF91bnBsYW4iLCJ0ZXh0RGVjb3JhdGlvbiIsInVucGxhbl9ncmlkMiIsImFkZF91bnBsYW4iLCJyZW5kZXJXb3JrVmlzaXQiLCJyZW5kZXJQYWdlIiwiY29udGFpbmVyIiwid3JhcHBlciIsImJnX3RvcCIsInVzZXJfaW5mb19ncmlkIiwicHAiLCJtYXJnaW5MZWZ0IiwidXNlclJlZHVjZXIiLCJ1c2VyIiwibmFtZSIsIm5vdGlmIiwibWFpbiIsIm1hcmdpbkJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFRQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLG9CQUNRQyx3REFBVSxDQUFDQyw2Q0FBRCxDQURsQjtBQUFBLE1BQ3JCQyxLQURxQixlQUNyQkEsS0FEcUI7QUFBQSxNQUNkQyxRQURjLGVBQ2RBLFFBRGM7QUFBQSxNQUNKQyxPQURJLGVBQ0pBLE9BREk7O0FBQUEsa0JBRUhDLHNEQUFRLENBQUMsRUFBRCxDQUZMO0FBQUEsTUFFdEJDLEtBRnNCO0FBQUEsTUFFZkMsUUFGZTs7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QWpCO0FBQ0Q7O0dBaGdCdUIxRyxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM5NmEwODY0NDljOTRkYzhkYjQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wYWdlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBTdG9yZXMgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuXHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi9jb21wb25lbnRzL1NwaW5uZXJcIjtcclxuaW1wb3J0IEJvdE5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9Cb3ROYXZcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBnZXRBdXRoLFxyXG4gIGdldE1lbnUsXHJcbiAgZ2V0UGxhbkhpc3RvcnksXHJcbiAgZ2V0UGxhbkxpc3QsXHJcbiAgZ2V0VW5wbGFuTW9udGhseUhpc3RvcnksXHJcbn0gZnJvbSBcIi4uL2hlbHBlclwiO1xyXG5cclxuaW1wb3J0IHsgRG91Z2hudXQgfSBmcm9tIFwicmVhY3QtY2hhcnRqcy0yXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCwgYWN0aW9ucyB9ID0gdXNlQ29udGV4dChTdG9yZXMpO1xyXG4gIGNvbnN0IFtmb2N1cywgc2V0Rm9jdXNdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3BsYW4sIHNldFBsYW5dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtwbGFuSGlzdG9yeSwgc2V0UGxhbkhpc3RvcnldID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzcHJlYWRpbmdIaXN0b3J5LCBzZXRTcHJlYWRpbmdIaXN0b3J5XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdW5wbGFuSGlzdG9yeSwgc2V0VW5wbGFuSGlzdG9yeV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3JvbGUsIHNldFJvbGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RvcE1lbnUsIHNldFRvcE1lbnVdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtsb2FkaW5nTWVudSwgc2V0TG9hZGluZ01lbnVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IGRhdGFQbGFuID0ge1xyXG4gICAgZGF0YXNldHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGRhdGE6XHJcbiAgICAgICAgICBwbGFuSGlzdG9yeS5sZW5ndGggPT09IDAgPyBbMCwgMV0gOiBbcGxhbkhpc3RvcnkubGVuZ3RoLCBwbGFuLmxlbmd0aF0sXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXCIjNDE4NjdhXCIsIFwiI2QxZTRlMVwiXSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxuICBjb25zdCBkYXRhU3ByZWFkaW5nID0ge1xyXG4gICAgZGF0YXNldHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGRhdGE6IHNwcmVhZGluZ0hpc3RvcnkubGVuZ3RoID09PSAwID8gWzAsIDFdIDogWzAsIDFdLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1wiIzQxODY3YVwiLCBcIiNkMWU0ZTFcIl0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcbiAgY29uc3QgZG9udXRPcHRpb25zID0ge1xyXG4gICAgY3V0b3V0UGVyY2VudGFnZTogNzUsXHJcbiAgICB0b29sdGlwczogeyBlbmFibGVkOiBmYWxzZSB9LFxyXG4gICAgaG92ZXI6IHsgbW9kZTogbnVsbCB9LFxyXG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgIG1haW50YWluQXNwZWN0UmF0aW86IHRydWUsXHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xyXG4gICAgaWYgKHVzZXJEYXRhKSB7XHJcbiAgICAgIGFjdGlvbnMudXNlckxvZ2luKHVzZXJEYXRhKTtcclxuICAgICAgZ2V0TWVudSh1c2VyRGF0YSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgYWN0aW9ucy5zZXRNZW51KGRhdGEpO1xyXG4gICAgICAgICAgc2V0VG9wTWVudShkYXRhKTtcclxuICAgICAgICAgIHNldExvYWRpbmdNZW51KGZhbHNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XHJcbiAgICBpZiAodXNlckRhdGEpIHtcclxuICAgICAgZ2V0QXV0aCh1c2VyRGF0YSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGRhdGFbMF0ucm9sZUNvZGUgPT09IFwiUElNQ0FcIikge1xyXG4gICAgICAgICAgICBzZXRSb2xlKFwiUElNQ0FcIik7XHJcbiAgICAgICAgICAgIHNldEZvY3VzKFwiV09SS19WSVNJVFwiKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YVswXS5yb2xlQ29kZSA9PT0gXCJTTVJcIikge1xyXG4gICAgICAgICAgICBzZXRSb2xlKFwiU01SXCIpO1xyXG4gICAgICAgICAgICBzZXRGb2N1cyhcIlBMQU5cIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH1cclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcclxuICAgIGlmICh1c2VyRGF0YSkge1xyXG4gICAgICBpZiAoZm9jdXMgPT09IFwiUExBTlwiKSB7XHJcbiAgICAgICAgZ2V0UGxhbkxpc3QodXNlckRhdGEpXHJcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRQbGFuKGRhdGEpO1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZm9jdXMgPT09IFwiVU5QTEFOXCIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInVucGxhblwiKTtcclxuICAgICAgICBnZXRVbnBsYW5Nb250aGx5SGlzdG9yeSh1c2VyRGF0YSlcclxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICBzZXRVbnBsYW5IaXN0b3J5KGRhdGEpO1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZm9jdXMgPT09IFwiU1BSRUFESU5HXCIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNwcmVhZGluZ1wiKTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfSBlbHNlIGlmIChmb2N1cyA9PT0gXCJXT1JLX1ZJU0lUXCIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIndvcmsgdmlzaXRcIik7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH1cclxuICB9LCBbZm9jdXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xyXG5cclxuICAgIGlmIChmb2N1cyA9PT0gXCJQTEFOXCIpIHtcclxuICAgICAgZ2V0UGxhbkhpc3RvcnkodXNlckRhdGEpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIHNldFBsYW5IaXN0b3J5KGRhdGEpO1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChmb2N1cyA9PT0gXCJVTlBMQU5cIikge1xyXG4gICAgfSBlbHNlIGlmIChmb2N1cyA9PT0gXCJTUFJFQURJTkdcIikge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9LCBbZm9jdXNdKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyVG9wTWVudSA9ICgpID0+IHtcclxuICAgIHZhciBhdXRoID0gdG9wTWVudS5maWx0ZXIoKHZhbCkgPT4ge1xyXG4gICAgICBpZiAocm9sZSA9PT0gXCJTTVJcIikge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICB2YWwubW9kdWxlQ29kZSA9PT0gXCJQTEFOXCIgfHxcclxuICAgICAgICAgIHZhbC5tb2R1bGVDb2RlID09PSBcIlVOUExBTlwiIHx8XHJcbiAgICAgICAgICB2YWwubW9kdWxlQ29kZSA9PT0gXCJTUFJFQURJTkdcIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSBpZiAocm9sZSA9PT0gXCJQSU1DQVwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbC5tb2R1bGVDb2RlID09PSBcIldPUkstVklTSVRcIjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgICByZXR1cm4gYXV0aC5tYXAoKHZhbCwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgIGZvY3VzID09PSB2YWwubW9kdWxlQ29kZSA/IHN0eWxlcy5mb2N1c19tZW51IDogc3R5bGVzLm1lbnVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0Rm9jdXModmFsLm1vZHVsZUNvZGUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7dmFsLm1vZHVsZUNvZGUgPT09IFwiUExBTlwiXHJcbiAgICAgICAgICAgICAgPyBcIlBsYW5cIlxyXG4gICAgICAgICAgICAgIDogdmFsLm1vZHVsZUNvZGUgPT09IFwiVU5QTEFOXCJcclxuICAgICAgICAgICAgICA/IFwiVW5wbGFuXCJcclxuICAgICAgICAgICAgICA6IHZhbC5tb2R1bGVDb2RlID09PSBcIlNQUkVBRElOR1wiXHJcbiAgICAgICAgICAgICAgPyBcIlNwcmVhZGluZ1wiXHJcbiAgICAgICAgICAgICAgOiB2YWwubW9kdWxlQ29kZSA9PT0gXCJXT1JLLVZJU0lUXCJcclxuICAgICAgICAgICAgICA/IFwiV29yayBWaXNpdFwiXHJcbiAgICAgICAgICAgICAgOiBcIlwifVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgaWYgKGF1dGgpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICBhdXRoLmxlbmd0aCA9PT0gM1xyXG4gICAgICAgICAgICAgID8gc3R5bGVzLm1lbnVfZ3JpZDNcclxuICAgICAgICAgICAgICA6IGF1dGgubGVuZ3RoID09PSAxXHJcbiAgICAgICAgICAgICAgPyBzdHlsZXMubWVudV9ncmlkMVxyXG4gICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtyZW5kZXIoKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJMaXN0ID0gKHR5cGUsIGRhdGEpID0+IHtcclxuICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjE1cHhcIixcclxuICAgICAgICAgICAgY29sb3I6IFwicmdiKDIwOCwgMjA4LCAyMDgpXCIsXHJcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIzMHB4IDBcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTm8gSXRlbVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGRhdGEubWFwKCh2YWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNXB4XCIsXHJcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI3MDBcIixcclxuICAgICAgICAgICAgICBjb2xvcjogXCIjNUU1ODczXCIsXHJcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcclxuICAgICAgICAgICAgICBtYXJnaW46IFwiMTBweCAwXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMTIlIDg4JVwiIH19PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0eXBlID09PSBcIlBMQU5cIiA/IFwiI0ZGRjFDQ1wiIDogXCIjZDFlNGUxXCIsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNHB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEycHhcIixcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHR5cGUgPT09IFwiUExBTlwiID8gXCIjZmViODAwXCIgOiBcIiM0MTg2N2FcIixcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj57dmFsLm5hbWFPdXRsZXR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjE0cHhcIiwgZm9udFdlaWdodDogXCIzMDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAge3ZhbC5hbGFtYXRPdXRsZXR9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJQbGFuID0gKCkgPT4ge1xyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPENhcmQgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBtYXJnaW5Ub3A6IFwiMjJweFwiIH19IHNoYWRvdz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmVydmlld30+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9PlxyXG4gICAgICAgICAgICAgICAgICB7bW9tZW50KCkuZm9ybWF0KFwiRCAvIE1NTSAvIFlZWVlcIil9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcIiM1RTU4NzNcIiwgbWFyZ2luVG9wOiBcIjdweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIzNnB4XCIsIGZvbnRXZWlnaHQ6IFwiNjAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3BsYW5IaXN0b3J5Lmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIxOHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgL3twbGFuLmxlbmd0aCArIHBsYW5IaXN0b3J5Lmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjdweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkVCODAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4IDIycHhcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI0MDBcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEFkZCBOZXcgUGxhbiArXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waWVfcGVyY2VudGFnZX0+XHJcbiAgICAgICAgICAgICAgICAgIHtwbGFuSGlzdG9yeS5sZW5ndGggPT09IDBcclxuICAgICAgICAgICAgICAgICAgICA/IFwiMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogYCR7TWF0aC5yb3VuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHBsYW5IaXN0b3J5Lmxlbmd0aCAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKHBsYW4ubGVuZ3RoICsgcGxhbkhpc3RvcnkubGVuZ3RoKSkgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDEwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgKX0lYH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPERvdWdobnV0XHJcbiAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGFQbGFufVxyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtkb251dE9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MTAwfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjJweFwiLCBib3JkZXJSYWRpdXM6IFwiMzBweFwiIH19IHNoYWRvdz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGFuX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxyXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNUU1ODczXCIsXHJcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFlvdXIgUGxhbiBUb2RheVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjIycHggMFwiIH19PntyZW5kZXJMaXN0KFwiUExBTlwiLCBwbGFuKX08L2Rpdj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Zpc2l0L3BsYW5cIj5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9e1wiU2VlIERldGFpbHNcIn0gLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlclNwcmVhZGluZyA9ICgpID0+IHtcclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI1cHhcIiwgbWFyZ2luVG9wOiBcIjIycHhcIiB9fSBzaGFkb3c+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcnZpZXd9PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfT5cclxuICAgICAgICAgICAgICAgICAge21vbWVudCgpLmZvcm1hdChcIkQgLyBNTU0gLyBZWVlZXCIpfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogXCIjNUU1ODczXCIsIG1hcmdpblRvcDogXCI3cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMzZweFwiLCBmb250V2VpZ2h0OiBcIjYwMFwiIH19PjA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE4cHhcIiB9fT4ve3BsYW4ubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvdmlzaXQvc3ByZWFkaW5nL1wifT5cclxuICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjdweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZFQjgwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHggMjJweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBBZGQgTmV3IE5PTyArXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waWVfcGVyY2VudGFnZX0+MCU8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxEb3VnaG51dFxyXG4gICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhU3ByZWFkaW5nfVxyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtkb251dE9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MTAwfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjJweFwiLCBib3JkZXJSYWRpdXM6IFwiMzBweFwiIH19IHNoYWRvdz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGFuX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxyXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNUU1ODczXCIsXHJcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFNwcmVhZGluZyBIaXN0b3J5XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMjJweCAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICB7cmVuZGVyTGlzdChcIlNQUkVBRElOR1wiLCBzcHJlYWRpbmdIaXN0b3J5KX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Zpc2l0L3NwcmVhZGluZy9oaXN0b3J5XCI+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PXtcIlNlZSBEZXRhaWxzXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJVbnBsYW4gPSAoKSA9PiB7XHJcbiAgICBpZiAobG9hZGluZykge1xyXG4gICAgICByZXR1cm4gPFNwaW5uZXIgLz47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIG1hcmdpblRvcDogXCIyMnB4XCIgfX0gc2hhZG93PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVucGxhbl9ncmlkfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm51bV90b3RhbF91bnBsYW59PlxyXG4gICAgICAgICAgICAgICAge3VucGxhbkhpc3RvcnkubGVuZ3RofVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMTRweFwiIH19PlRvdGFsIFVucGxhbiBWaXNpdDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+e21vbWVudCgpLmZvcm1hdChcIk1NTU1cIil9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPENhcmQgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBtYXJnaW5Ub3A6IFwiMTFweFwiIH19IHNoYWRvdz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi92aXNpdC91bnBsYW5cIj5cclxuICAgICAgICAgICAgICA8YSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVucGxhbl9ncmlkMn0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkX3VucGxhbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiLThweFwiIH19Pis8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMTZweFwiLCBmb250V2VpZ2h0OiBcIjYwMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIEFueSBVbnBsYW4gVmlzaXQ/XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI0I5QjlDM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjMwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxM3B4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEFkZCB5b3VyIHVucGxhbiB2aXNpdCBoZXJlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiL25leHQuc3ZnXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIycHhcIiwgYm9yZGVyUmFkaXVzOiBcIjMwcHhcIiB9fSBzaGFkb3c+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxhbl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcclxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzVFNTg3M1wiLFxyXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBVbnBsYW4gVmlzaXQgSGlzdG9yeVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjIycHggMFwiIH19PlxyXG4gICAgICAgICAgICAgICAge3JlbmRlckxpc3QoXCJVTlBMQU5cIiwgdW5wbGFuSGlzdG9yeSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi92aXNpdC91bnBsYW4vaGlzdG9yeVwiPlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD17XCJTZWUgRGV0YWlsc1wifSAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyV29ya1Zpc2l0ID0gKCkgPT4ge307XHJcblxyXG4gIGNvbnN0IHJlbmRlclBhZ2UgPSAoKSA9PiB7XHJcbiAgICBpZiAobG9hZGluZyAmJiBsb2FkaW5nTWVudSkge1xyXG4gICAgICByZXR1cm4gPFNwaW5uZXIgLz47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iZ190b3B9IC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2luZm9fZ3JpZH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLnBwfSBzcmM9XCIvcHAucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIxNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMTRweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdGF0ZS51c2VyUmVkdWNlci51c2VyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjEycHhcIiB9fT57cm9sZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5ub3RpZn0gc3JjPVwiL25vdGlmLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgICAgICAgICAgICB7cmVuZGVyVG9wTWVudSgpfVxyXG4gICAgICAgICAgICAgICAgICB7Zm9jdXMgPT09IFwiUExBTlwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyByZW5kZXJQbGFuKClcclxuICAgICAgICAgICAgICAgICAgICA6IGZvY3VzID09PSBcIlVOUExBTlwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyByZW5kZXJVbnBsYW4oKVxyXG4gICAgICAgICAgICAgICAgICAgIDogZm9jdXMgPT09IFwiU1BSRUFESU5HXCJcclxuICAgICAgICAgICAgICAgICAgICA/IHJlbmRlclNwcmVhZGluZygpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBmb2N1cyA9PT0gXCJXT1JLLVZJU0lUXCJcclxuICAgICAgICAgICAgICAgICAgICA/IHJlbmRlcldvcmtWaXNpdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMjBweFwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxCb3ROYXYgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiByZW5kZXJQYWdlKCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==