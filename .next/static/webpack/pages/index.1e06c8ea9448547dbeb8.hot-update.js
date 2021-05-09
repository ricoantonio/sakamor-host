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
    } else if (focus === "UNPLAN") {
      Object(_helper__WEBPACK_IMPORTED_MODULE_11__["getUnplanMonthlyHistory"])(userData).then(function (data) {
        // console.log(data);
        setUnplanHistory(data);
        setLoading(false);
      })["catch"](function (err) {
        console.log(err);
      });
    } else if (focus === "SPREADING") {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS5qc3giXSwibmFtZXMiOlsiSG9tZSIsInVzZUNvbnRleHQiLCJTdG9yZXMiLCJzdGF0ZSIsImRpc3BhdGNoIiwiYWN0aW9ucyIsInVzZVN0YXRlIiwiZm9jdXMiLCJzZXRGb2N1cyIsInBsYW4iLCJzZXRQbGFuIiwicGxhbkhpc3RvcnkiLCJzZXRQbGFuSGlzdG9yeSIsInNwcmVhZGluZ0hpc3RvcnkiLCJzZXRTcHJlYWRpbmdIaXN0b3J5IiwidW5wbGFuSGlzdG9yeSIsInNldFVucGxhbkhpc3RvcnkiLCJyb2xlIiwic2V0Um9sZSIsInRvcE1lbnUiLCJzZXRUb3BNZW51IiwibG9hZGluZyIsInNldExvYWRpbmciLCJsb2FkaW5nTWVudSIsInNldExvYWRpbmdNZW51IiwiZGF0YVBsYW4iLCJkYXRhc2V0cyIsImRhdGEiLCJsZW5ndGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkYXRhU3ByZWFkaW5nIiwiZG9udXRPcHRpb25zIiwiY3V0b3V0UGVyY2VudGFnZSIsInRvb2x0aXBzIiwiZW5hYmxlZCIsImhvdmVyIiwibW9kZSIsInJlc3BvbnNpdmUiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwidXNlRWZmZWN0IiwidXNlckRhdGEiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlckxvZ2luIiwiZ2V0TWVudSIsInRoZW4iLCJzZXRNZW51IiwiZXJyIiwiY29uc29sZSIsImxvZyIsIlJvdXRlciIsInB1c2giLCJnZXRBdXRoIiwicm9sZUNvZGUiLCJnZXRQbGFuTGlzdCIsImdldFBsYW5IaXN0b3J5IiwiZ2V0VW5wbGFuTW9udGhseUhpc3RvcnkiLCJyZW5kZXJUb3BNZW51IiwiYXV0aCIsImZpbHRlciIsInZhbCIsIm1vZHVsZUNvZGUiLCJyZW5kZXIiLCJtYXAiLCJpbmRleCIsInN0eWxlcyIsImZvY3VzX21lbnUiLCJtZW51IiwibWVudV9ncmlkMyIsIm1lbnVfZ3JpZDEiLCJyZW5kZXJMaXN0IiwidHlwZSIsImZvbnRTaXplIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJmb250V2VpZ2h0IiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJuYW1hT3V0bGV0IiwiYWxhbWF0T3V0bGV0IiwicmVuZGVyUGxhbiIsIm1hcmdpblRvcCIsIm92ZXJ2aWV3IiwiZGF0ZSIsIm1vbWVudCIsImZvcm1hdCIsImJvcmRlciIsInBpZV9wZXJjZW50YWdlIiwiTWF0aCIsInJvdW5kIiwicGxhbl9jb250YWluZXIiLCJyZW5kZXJTcHJlYWRpbmciLCJyZW5kZXJVbnBsYW4iLCJ1bnBsYW5fZ3JpZCIsIm51bV90b3RhbF91bnBsYW4iLCJ0ZXh0RGVjb3JhdGlvbiIsInVucGxhbl9ncmlkMiIsImFkZF91bnBsYW4iLCJyZW5kZXJXb3JrVmlzaXQiLCJyZW5kZXJQYWdlIiwiY29udGFpbmVyIiwid3JhcHBlciIsImJnX3RvcCIsInVzZXJfaW5mb19ncmlkIiwicHAiLCJtYXJnaW5MZWZ0IiwidXNlclJlZHVjZXIiLCJ1c2VyIiwibmFtZSIsIm5vdGlmIiwibWFpbiIsIm1hcmdpbkJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFRQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLG9CQUNRQyx3REFBVSxDQUFDQyw2Q0FBRCxDQURsQjtBQUFBLE1BQ3JCQyxLQURxQixlQUNyQkEsS0FEcUI7QUFBQSxNQUNkQyxRQURjLGVBQ2RBLFFBRGM7QUFBQSxNQUNKQyxPQURJLGVBQ0pBLE9BREk7O0FBQUEsa0JBRUhDLHNEQUFRLENBQUMsRUFBRCxDQUZMO0FBQUEsTUFFdEJDLEtBRnNCO0FBQUEsTUFFZkMsUUFGZTs7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QUFqQjtBQUNEOztHQWhnQnVCMUcsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xZTA2YzhlYTk0NDg1NDdkYmViOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvcGFnZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgU3RvcmVzIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9TcGlubmVyXCI7XHJcbmltcG9ydCBCb3ROYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvQm90TmF2XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQnV0dG9uXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgZ2V0QXV0aCxcclxuICBnZXRNZW51LFxyXG4gIGdldFBsYW5IaXN0b3J5LFxyXG4gIGdldFBsYW5MaXN0LFxyXG4gIGdldFVucGxhbk1vbnRobHlIaXN0b3J5LFxyXG59IGZyb20gXCIuLi9oZWxwZXJcIjtcclxuXHJcbmltcG9ydCB7IERvdWdobnV0IH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2gsIGFjdGlvbnMgfSA9IHVzZUNvbnRleHQoU3RvcmVzKTtcclxuICBjb25zdCBbZm9jdXMsIHNldEZvY3VzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwbGFuLCBzZXRQbGFuXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcGxhbkhpc3RvcnksIHNldFBsYW5IaXN0b3J5XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc3ByZWFkaW5nSGlzdG9yeSwgc2V0U3ByZWFkaW5nSGlzdG9yeV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3VucGxhbkhpc3RvcnksIHNldFVucGxhbkhpc3RvcnldID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtyb2xlLCBzZXRSb2xlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0b3BNZW51LCBzZXRUb3BNZW51XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbbG9hZGluZ01lbnUsIHNldExvYWRpbmdNZW51XSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBkYXRhUGxhbiA9IHtcclxuICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBkYXRhOlxyXG4gICAgICAgICAgcGxhbkhpc3RvcnkubGVuZ3RoID09PSAwID8gWzAsIDFdIDogW3BsYW5IaXN0b3J5Lmxlbmd0aCwgcGxhbi5sZW5ndGhdLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1wiIzQxODY3YVwiLCBcIiNkMWU0ZTFcIl0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcbiAgY29uc3QgZGF0YVNwcmVhZGluZyA9IHtcclxuICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBkYXRhOiBzcHJlYWRpbmdIaXN0b3J5Lmxlbmd0aCA9PT0gMCA/IFswLCAxXSA6IFswLCAxXSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcIiM0MTg2N2FcIiwgXCIjZDFlNGUxXCJdLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9O1xyXG4gIGNvbnN0IGRvbnV0T3B0aW9ucyA9IHtcclxuICAgIGN1dG91dFBlcmNlbnRhZ2U6IDc1LFxyXG4gICAgdG9vbHRpcHM6IHsgZW5hYmxlZDogZmFsc2UgfSxcclxuICAgIGhvdmVyOiB7IG1vZGU6IG51bGwgfSxcclxuICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICBtYWludGFpbkFzcGVjdFJhdGlvOiB0cnVlLFxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcclxuICAgIGlmICh1c2VyRGF0YSkge1xyXG4gICAgICBhY3Rpb25zLnVzZXJMb2dpbih1c2VyRGF0YSk7XHJcbiAgICAgIGdldE1lbnUodXNlckRhdGEpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIGFjdGlvbnMuc2V0TWVudShkYXRhKTtcclxuICAgICAgICAgIHNldFRvcE1lbnUoZGF0YSk7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nTWVudShmYWxzZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH1cclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xyXG4gICAgaWYgKHVzZXJEYXRhKSB7XHJcbiAgICAgIGdldEF1dGgodXNlckRhdGEpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIGlmIChkYXRhWzBdLnJvbGVDb2RlID09PSBcIlBJTUNBXCIpIHtcclxuICAgICAgICAgICAgc2V0Um9sZShcIlBJTUNBXCIpO1xyXG4gICAgICAgICAgICBzZXRGb2N1cyhcIldPUktfVklTSVRcIik7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFbMF0ucm9sZUNvZGUgPT09IFwiU01SXCIpIHtcclxuICAgICAgICAgICAgc2V0Um9sZShcIlNNUlwiKTtcclxuICAgICAgICAgICAgc2V0Rm9jdXMoXCJQTEFOXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICB9XHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XHJcbiAgICBpZiAodXNlckRhdGEpIHtcclxuICAgICAgaWYgKGZvY3VzID09PSBcIlBMQU5cIikge1xyXG4gICAgICAgIGdldFBsYW5MaXN0KHVzZXJEYXRhKVxyXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgc2V0UGxhbihkYXRhKTtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGZvY3VzID09PSBcIlVOUExBTlwiKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ1bnBsYW5cIik7XHJcbiAgICAgIH0gZWxzZSBpZiAoZm9jdXMgPT09IFwiU1BSRUFESU5HXCIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNwcmVhZGluZ1wiKTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfSBlbHNlIGlmIChmb2N1cyA9PT0gXCJXT1JLX1ZJU0lUXCIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIndvcmsgdmlzaXRcIik7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH1cclxuICB9LCBbZm9jdXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xyXG5cclxuICAgIGlmIChmb2N1cyA9PT0gXCJQTEFOXCIpIHtcclxuICAgICAgZ2V0UGxhbkhpc3RvcnkodXNlckRhdGEpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIHNldFBsYW5IaXN0b3J5KGRhdGEpO1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChmb2N1cyA9PT0gXCJVTlBMQU5cIikge1xyXG4gICAgICBnZXRVbnBsYW5Nb250aGx5SGlzdG9yeSh1c2VyRGF0YSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICBzZXRVbnBsYW5IaXN0b3J5KGRhdGEpO1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoZm9jdXMgPT09IFwiU1BSRUFESU5HXCIpIHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSwgW2ZvY3VzXSk7XHJcblxyXG4gIGNvbnN0IHJlbmRlclRvcE1lbnUgPSAoKSA9PiB7XHJcbiAgICB2YXIgYXV0aCA9IHRvcE1lbnUuZmlsdGVyKCh2YWwpID0+IHtcclxuICAgICAgaWYgKHJvbGUgPT09IFwiU01SXCIpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgdmFsLm1vZHVsZUNvZGUgPT09IFwiUExBTlwiIHx8XHJcbiAgICAgICAgICB2YWwubW9kdWxlQ29kZSA9PT0gXCJVTlBMQU5cIiB8fFxyXG4gICAgICAgICAgdmFsLm1vZHVsZUNvZGUgPT09IFwiU1BSRUFESU5HXCJcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2UgaWYgKHJvbGUgPT09IFwiUElNQ0FcIikge1xyXG4gICAgICAgIHJldHVybiB2YWwubW9kdWxlQ29kZSA9PT0gXCJXT1JLLVZJU0lUXCI7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcclxuICAgICAgcmV0dXJuIGF1dGgubWFwKCh2YWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICBmb2N1cyA9PT0gdmFsLm1vZHVsZUNvZGUgPyBzdHlsZXMuZm9jdXNfbWVudSA6IHN0eWxlcy5tZW51XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEZvY3VzKHZhbC5tb2R1bGVDb2RlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3ZhbC5tb2R1bGVDb2RlID09PSBcIlBMQU5cIlxyXG4gICAgICAgICAgICAgID8gXCJQbGFuXCJcclxuICAgICAgICAgICAgICA6IHZhbC5tb2R1bGVDb2RlID09PSBcIlVOUExBTlwiXHJcbiAgICAgICAgICAgICAgPyBcIlVucGxhblwiXHJcbiAgICAgICAgICAgICAgOiB2YWwubW9kdWxlQ29kZSA9PT0gXCJTUFJFQURJTkdcIlxyXG4gICAgICAgICAgICAgID8gXCJTcHJlYWRpbmdcIlxyXG4gICAgICAgICAgICAgIDogdmFsLm1vZHVsZUNvZGUgPT09IFwiV09SSy1WSVNJVFwiXHJcbiAgICAgICAgICAgICAgPyBcIldvcmsgVmlzaXRcIlxyXG4gICAgICAgICAgICAgIDogXCJcIn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGlmIChhdXRoKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgYXV0aC5sZW5ndGggPT09IDNcclxuICAgICAgICAgICAgICA/IHN0eWxlcy5tZW51X2dyaWQzXHJcbiAgICAgICAgICAgICAgOiBhdXRoLmxlbmd0aCA9PT0gMVxyXG4gICAgICAgICAgICAgID8gc3R5bGVzLm1lbnVfZ3JpZDFcclxuICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7cmVuZGVyKCl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyTGlzdCA9ICh0eXBlLCBkYXRhKSA9PiB7XHJcbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIxNXB4XCIsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcInJnYigyMDgsIDIwOCwgMjA4KVwiLFxyXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMzBweCAwXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIE5vIEl0ZW1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBkYXRhLm1hcCgodmFsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTVweFwiLFxyXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNzAwXCIsXHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiIzVFNTg3M1wiLFxyXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBcIjEwcHggMFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjEyJSA4OCVcIiB9fT5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdHlwZSA9PT0gXCJQTEFOXCIgPyBcIiNGRkYxQ0NcIiA6IFwiI2QxZTRlMVwiLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjRweFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTJweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0eXBlID09PSBcIlBMQU5cIiA/IFwiI2ZlYjgwMFwiIDogXCIjNDE4NjdhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+e3ZhbC5uYW1hT3V0bGV0fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIxNHB4XCIsIGZvbnRXZWlnaHQ6IFwiMzAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHt2YWwuYWxhbWF0T3V0bGV0fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyUGxhbiA9ICgpID0+IHtcclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI1cHhcIiwgbWFyZ2luVG9wOiBcIjIycHhcIiB9fSBzaGFkb3c+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcnZpZXd9PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfT5cclxuICAgICAgICAgICAgICAgICAge21vbWVudCgpLmZvcm1hdChcIkQgLyBNTU0gLyBZWVlZXCIpfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogXCIjNUU1ODczXCIsIG1hcmdpblRvcDogXCI3cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMzZweFwiLCBmb250V2VpZ2h0OiBcIjYwMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwbGFuSGlzdG9yeS5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMThweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIC97cGxhbi5sZW5ndGggKyBwbGFuSGlzdG9yeS5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI3cHhcIixcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZFQjgwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweCAyMnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBBZGQgTmV3IFBsYW4gK1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGllX3BlcmNlbnRhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICB7cGxhbkhpc3RvcnkubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIjAlXCJcclxuICAgICAgICAgICAgICAgICAgICA6IGAke01hdGgucm91bmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChwbGFuSGlzdG9yeS5sZW5ndGggL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChwbGFuLmxlbmd0aCArIHBsYW5IaXN0b3J5Lmxlbmd0aCkpICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAxMDBcclxuICAgICAgICAgICAgICAgICAgICAgICl9JWB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxEb3VnaG51dFxyXG4gICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhUGxhbn1cclxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZG9udXRPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MTAwfVxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIycHhcIiwgYm9yZGVyUmFkaXVzOiBcIjMwcHhcIiB9fSBzaGFkb3c+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxhbl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcclxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzVFNTg3M1wiLFxyXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBZb3VyIFBsYW4gVG9kYXlcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIyMnB4IDBcIiB9fT57cmVuZGVyTGlzdChcIlBMQU5cIiwgcGxhbil9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi92aXNpdC9wbGFuXCI+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PXtcIlNlZSBEZXRhaWxzXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJTcHJlYWRpbmcgPSAoKSA9PiB7XHJcbiAgICBpZiAobG9hZGluZykge1xyXG4gICAgICByZXR1cm4gPFNwaW5uZXIgLz47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIG1hcmdpblRvcDogXCIyMnB4XCIgfX0gc2hhZG93PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm92ZXJ2aWV3fT5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+XHJcbiAgICAgICAgICAgICAgICAgIHttb21lbnQoKS5mb3JtYXQoXCJEIC8gTU1NIC8gWVlZWVwiKX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwiIzVFNTg3M1wiLCBtYXJnaW5Ub3A6IFwiN3B4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjM2cHhcIiwgZm9udFdlaWdodDogXCI2MDBcIiB9fT4wPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIxOHB4XCIgfX0+L3twbGFuLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3Zpc2l0L3NwcmVhZGluZy9cIn0+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI3cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRUI4MDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4IDIycHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQWRkIE5ldyBOT08gK1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGllX3BlcmNlbnRhZ2V9PjAlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8RG91Z2hudXRcclxuICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YVNwcmVhZGluZ31cclxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZG9udXRPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MTAwfVxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIycHhcIiwgYm9yZGVyUmFkaXVzOiBcIjMwcHhcIiB9fSBzaGFkb3c+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxhbl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcclxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzVFNTg3M1wiLFxyXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTcHJlYWRpbmcgSGlzdG9yeVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjIycHggMFwiIH19PlxyXG4gICAgICAgICAgICAgICAge3JlbmRlckxpc3QoXCJTUFJFQURJTkdcIiwgc3ByZWFkaW5nSGlzdG9yeSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi92aXNpdC9zcHJlYWRpbmcvaGlzdG9yeVwiPlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD17XCJTZWUgRGV0YWlsc1wifSAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyVW5wbGFuID0gKCkgPT4ge1xyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPENhcmQgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBtYXJnaW5Ub3A6IFwiMjJweFwiIH19IHNoYWRvdz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51bnBsYW5fZ3JpZH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5udW1fdG90YWxfdW5wbGFufT5cclxuICAgICAgICAgICAgICAgIHt1bnBsYW5IaXN0b3J5Lmxlbmd0aH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjE0cHhcIiB9fT5Ub3RhbCBVbnBsYW4gVmlzaXQ8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9Pnttb21lbnQoKS5mb3JtYXQoXCJNTU1NXCIpfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI1cHhcIiwgbWFyZ2luVG9wOiBcIjExcHhcIiB9fSBzaGFkb3c+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdmlzaXQvdW5wbGFuXCI+XHJcbiAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51bnBsYW5fZ3JpZDJ9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZF91bnBsYW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIi04cHhcIiB9fT4rPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjE2cHhcIiwgZm9udFdlaWdodDogXCI2MDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICBBbnkgVW5wbGFuIFZpc2l0P1xyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNCOUI5QzNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCIzMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTNweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBBZGQgeW91ciB1bnBsYW4gdmlzaXQgaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcIi9uZXh0LnN2Z1wifSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMnB4XCIsIGJvcmRlclJhZGl1czogXCIzMHB4XCIgfX0gc2hhZG93PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsYW5fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxOHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1RTU4NzNcIixcclxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgVW5wbGFuIFZpc2l0IEhpc3RvcnlcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIyMnB4IDBcIiB9fT5cclxuICAgICAgICAgICAgICAgIHtyZW5kZXJMaXN0KFwiVU5QTEFOXCIsIHVucGxhbkhpc3RvcnkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdmlzaXQvdW5wbGFuL2hpc3RvcnlcIj5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9e1wiU2VlIERldGFpbHNcIn0gLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlcldvcmtWaXNpdCA9ICgpID0+IHt9O1xyXG5cclxuICBjb25zdCByZW5kZXJQYWdlID0gKCkgPT4ge1xyXG4gICAgaWYgKGxvYWRpbmcgJiYgbG9hZGluZ01lbnUpIHtcclxuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT5Ib21lPC90aXRsZT5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmdfdG9wfSAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9pbmZvX2dyaWR9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5wcH0gc3JjPVwiL3BwLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMTVweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjE0cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7c3RhdGUudXNlclJlZHVjZXIudXNlci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIxMnB4XCIgfX0+e3JvbGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMubm90aWZ9IHNyYz1cIi9ub3RpZi5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICAgICAgICAgICAge3JlbmRlclRvcE1lbnUoKX1cclxuICAgICAgICAgICAgICAgICAge2ZvY3VzID09PSBcIlBMQU5cIlxyXG4gICAgICAgICAgICAgICAgICAgID8gcmVuZGVyUGxhbigpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBmb2N1cyA9PT0gXCJVTlBMQU5cIlxyXG4gICAgICAgICAgICAgICAgICAgID8gcmVuZGVyVW5wbGFuKClcclxuICAgICAgICAgICAgICAgICAgICA6IGZvY3VzID09PSBcIlNQUkVBRElOR1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPyByZW5kZXJTcHJlYWRpbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgIDogZm9jdXMgPT09IFwiV09SSy1WSVNJVFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyByZW5kZXJXb3JrVmlzaXQoKVxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTIwcHhcIiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Qm90TmF2IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gcmVuZGVyUGFnZSgpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=