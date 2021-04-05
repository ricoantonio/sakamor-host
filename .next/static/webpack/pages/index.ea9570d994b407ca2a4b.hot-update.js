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
              lineNumber: 266,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                fontSize: "14px",
                fontWeight: "300"
              },
              children: val.alamatOutlet
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 267,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 265,
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
        lineNumber: 279,
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
                lineNumber: 286,
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
                  lineNumber: 290,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  style: {
                    fontSize: "18px"
                  },
                  children: ["/", plan.length + planHistory.length]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 293,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 289,
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
                lineNumber: 297,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 285,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.pie_percentage,
                children: plan.length === 0 ? "0%" : "".concat(Math.round(planHistory.length / (plan.length + planHistory.length) * 100), "%")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 313,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_12__["Doughnut"], {
                data: dataPlan,
                options: donutOptions,
                width: 100,
                height: 100
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 322,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 312,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 284,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 283,
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
              lineNumber: 333,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                margin: "22px 0"
              },
              children: renderList("PLAN", plan)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 343,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: "/visit/plan",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  text: "See Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 346,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 345,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 344,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 332,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 331,
          columnNumber: 11
        }, _this)]
      }, void 0, true);
    }
  };

  var renderSpreading = function renderSpreading() {
    if (loading) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 358,
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
                lineNumber: 365,
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
                  lineNumber: 369,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  style: {
                    fontSize: "18px"
                  },
                  children: ["/", plan.length]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 370,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 368,
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
                    lineNumber: 374,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 373,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 372,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 364,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.pie_percentage,
                children: "0%"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 392,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_12__["Doughnut"], {
                data: dataSpreading,
                options: donutOptions,
                width: 100,
                height: 100
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 393,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 391,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 363,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 362,
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
              lineNumber: 404,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                margin: "22px 0"
              },
              children: renderList(spreadingHistory)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 414,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: "/visit/spreading/history",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  text: "See Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 419,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 418,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 417,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 403,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 402,
          columnNumber: 11
        }, _this)]
      }, void 0, true);
    }
  };

  var renderUnplan = function renderUnplan() {
    if (loading) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 431,
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
              lineNumber: 437,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                fontSize: "14px"
              },
              children: "Total Unplan Visit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 438,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.date,
              children: monthName.full[month - 1]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 439,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 436,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 435,
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
                    lineNumber: 447,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 446,
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
                    lineNumber: 451,
                    columnNumber: 21
                  }, _this), " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 449,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  style: {
                    textAlign: "center"
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/next.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 462,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 461,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 445,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 444,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 443,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 442,
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
              lineNumber: 471,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                margin: "22px 0"
              },
              children: renderList(unplanHistory)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 481,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: "/visit/unplan/history",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  text: "See Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 486,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 485,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 484,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 470,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 469,
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
        lineNumber: 500,
        columnNumber: 14
      }, _this);
    } else return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 505,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "icon",
          href: "/favicon.ico"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 506,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 504,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.wrapper,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.bg_top
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 510,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.user_info_grid,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.pp,
              src: "/pp.png"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 512,
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
                lineNumber: 514,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  fontSize: "12px"
                },
                children: role
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 517,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 513,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.notif,
              src: "/notif.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 519,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,
              children: [renderTopMenu(), focus === "PLAN" ? renderPlan() : focus === "UNPLAN" ? renderUnplan() : focus === "SPREADING" ? renderSpreading() : focus === "WORK-VISIT" ? renderWorkVisit() : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  marginBottom: "120px"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 531,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 520,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 511,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 509,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 508,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_BotNav__WEBPACK_IMPORTED_MODULE_8__["default"], {
        focus: "home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 536,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 503,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VDb250ZXh0IiwiU3RvcmVzIiwic3RhdGUiLCJkaXNwYXRjaCIsImFjdGlvbnMiLCJ1c2VTdGF0ZSIsImZvY3VzIiwic2V0Rm9jdXMiLCJwbGFuIiwic2V0UGxhbiIsInBsYW5IaXN0b3J5Iiwic2V0UGxhbkhpc3RvcnkiLCJzcHJlYWRpbmdIaXN0b3J5Iiwic2V0U3ByZWFkaW5nSGlzdG9yeSIsInVucGxhbkhpc3RvcnkiLCJzZXRVbnBsYW5IaXN0b3J5Iiwicm9sZSIsInNldFJvbGUiLCJ0b3BNZW51Iiwic2V0VG9wTWVudSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibG9hZGluZ01lbnUiLCJzZXRMb2FkaW5nTWVudSIsIm5vdyIsIkRhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aE5hbWUiLCJmdWxsIiwicGFydCIsImRhdGFQbGFuIiwiZGF0YXNldHMiLCJkYXRhIiwibGVuZ3RoIiwiYmFja2dyb3VuZENvbG9yIiwiZGF0YVNwcmVhZGluZyIsImRvbnV0T3B0aW9ucyIsImN1dG91dFBlcmNlbnRhZ2UiLCJ0b29sdGlwcyIsImVuYWJsZWQiLCJob3ZlciIsIm1vZGUiLCJyZXNwb25zaXZlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInVzZUVmZmVjdCIsInVzZXJEYXRhIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZXJMb2dpbiIsImdldE1lbnUiLCJ0aGVuIiwic2V0TWVudSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJSb3V0ZXIiLCJwdXNoIiwiZ2V0UGxhbkxpc3QiLCJnZXRQbGFuSGlzdG9yeSIsImdldEF1dGgiLCJyb2xlQ29kZSIsInJlbmRlclRvcE1lbnUiLCJhdXRoIiwiZmlsdGVyIiwidmFsIiwibW9kdWxlQ29kZSIsInJlbmRlciIsIm1hcCIsImluZGV4Iiwic3R5bGVzIiwiZm9jdXNfbWVudSIsIm1lbnUiLCJtZW51X2dyaWQzIiwibWVudV9ncmlkMSIsInJlbmRlckxpc3QiLCJ0eXBlIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsIm5hbWFPdXRsZXQiLCJhbGFtYXRPdXRsZXQiLCJyZW5kZXJQbGFuIiwibWFyZ2luVG9wIiwib3ZlcnZpZXciLCJib3JkZXIiLCJwaWVfcGVyY2VudGFnZSIsIk1hdGgiLCJyb3VuZCIsInBsYW5fY29udGFpbmVyIiwicmVuZGVyU3ByZWFkaW5nIiwicmVuZGVyVW5wbGFuIiwidW5wbGFuX2dyaWQiLCJudW1fdG90YWxfdW5wbGFuIiwidGV4dERlY29yYXRpb24iLCJ1bnBsYW5fZ3JpZDIiLCJhZGRfdW5wbGFuIiwicmVuZGVyV29ya1Zpc2l0IiwicmVuZGVyUGFnZSIsImNvbnRhaW5lciIsIndyYXBwZXIiLCJiZ190b3AiLCJ1c2VyX2luZm9fZ3JpZCIsInBwIiwibWFyZ2luTGVmdCIsInVzZXJSZWR1Y2VyIiwidXNlciIsIm5hbWUiLCJub3RpZiIsIm1haW4iLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLG9CQUNRQyx3REFBVSxDQUFDQyw2Q0FBRCxDQURsQjtBQUFBLE1BQ3JCQyxLQURxQixlQUNyQkEsS0FEcUI7QUFBQSxNQUNkQyxRQURjLGVBQ2RBLFFBRGM7QUFBQSxNQUNKQyxPQURJLGVBQ0pBLE9BREk7O0FBQUEsa0JBRUhDLHNEQUFRLENBQUMsRUFBRCxD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QUFBO0FBQUE7QUFBQSxxQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLGVBaUNFLHFFQUFDLDBEQUFEO0FBQVEsYUFBSyxFQUFFO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQXFDSCxHQXpDRDs7QUEwQ0EsU0FBT1osVUFBVSxFQUFqQjtBQUNEOztHQTVnQnVCakgsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lYTk1NzBkOTk0YjQwN2NhMmE0Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wYWdlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBTdG9yZXMgfSBmcm9tIFwiLi4vc3RvcmVcIjtcblxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU3Bpbm5lclwiO1xuaW1wb3J0IEJvdE5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9Cb3ROYXZcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQnV0dG9uXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkXCI7XG5cbmltcG9ydCB7IGdldEF1dGgsIGdldE1lbnUsIGdldFBsYW5IaXN0b3J5LCBnZXRQbGFuTGlzdCB9IGZyb20gXCIuLi9oZWxwZXJcIjtcblxuaW1wb3J0IHsgRG91Z2hudXQgfSBmcm9tIFwicmVhY3QtY2hhcnRqcy0yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoLCBhY3Rpb25zIH0gPSB1c2VDb250ZXh0KFN0b3Jlcyk7XG4gIGNvbnN0IFtmb2N1cywgc2V0Rm9jdXNdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwbGFuLCBzZXRQbGFuXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3BsYW5IaXN0b3J5LCBzZXRQbGFuSGlzdG9yeV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzcHJlYWRpbmdIaXN0b3J5LCBzZXRTcHJlYWRpbmdIaXN0b3J5XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3VucGxhbkhpc3RvcnksIHNldFVucGxhbkhpc3RvcnldID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcm9sZSwgc2V0Um9sZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3RvcE1lbnUsIHNldFRvcE1lbnVdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2xvYWRpbmdNZW51LCBzZXRMb2FkaW5nTWVudV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB2YXIgbm93ID0gbmV3IERhdGUoKTtcbiAgdmFyIGRhdGUgPSBub3cuZ2V0RGF0ZSgpO1xuICB2YXIgbW9udGggPSBub3cuZ2V0TW9udGgoKSArIDE7XG4gIHZhciB5ZWFyID0gbm93LmdldEZ1bGxZZWFyKCk7XG5cbiAgY29uc3QgbW9udGhOYW1lID0ge1xuICAgIGZ1bGw6IFtcbiAgICAgIFwiSmFudWFyeVwiLFxuICAgICAgXCJGZWJydWFyeVwiLFxuICAgICAgXCJNYXJjaFwiLFxuICAgICAgXCJBcHJpbFwiLFxuICAgICAgXCJNYXlcIixcbiAgICAgIFwiSnVuZVwiLFxuICAgICAgXCJKdWx5XCIsXG4gICAgICBcIkF1Z3VzdFwiLFxuICAgICAgXCJTZXB0ZW1iZXJcIixcbiAgICAgIFwiT2N0b2JlclwiLFxuICAgICAgXCJOb3ZlbWJlclwiLFxuICAgICAgXCJEZWNlbWJlclwiLFxuICAgIF0sXG4gICAgcGFydDogW1xuICAgICAgXCJKYW5cIixcbiAgICAgIFwiRmViXCIsXG4gICAgICBcIk1hclwiLFxuICAgICAgXCJBcHJcIixcbiAgICAgIFwiTWF5XCIsXG4gICAgICBcIkp1blwiLFxuICAgICAgXCJKdWxcIixcbiAgICAgIFwiQXVnXCIsXG4gICAgICBcIlNlcFwiLFxuICAgICAgXCJPY3RcIixcbiAgICAgIFwiTm92XCIsXG4gICAgICBcIkRlY1wiLFxuICAgIF0sXG4gIH07XG5cbiAgY29uc3QgZGF0YVBsYW4gPSB7XG4gICAgZGF0YXNldHM6IFtcbiAgICAgIHtcbiAgICAgICAgZGF0YTpcbiAgICAgICAgICBwbGFuSGlzdG9yeS5sZW5ndGggPT09IDAgPyBbMCwgMV0gOiBbcGxhbkhpc3RvcnkubGVuZ3RoLCBwbGFuLmxlbmd0aF0sXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1wiIzQxODY3YVwiLCBcIiNkMWU0ZTFcIl0sXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG4gIGNvbnN0IGRhdGFTcHJlYWRpbmcgPSB7XG4gICAgZGF0YXNldHM6IFtcbiAgICAgIHtcbiAgICAgICAgZGF0YTogc3ByZWFkaW5nSGlzdG9yeS5sZW5ndGggPT09IDAgPyBbMCwgMV0gOiBbMCwgMV0sXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1wiIzQxODY3YVwiLCBcIiNkMWU0ZTFcIl0sXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG4gIGNvbnN0IGRvbnV0T3B0aW9ucyA9IHtcbiAgICBjdXRvdXRQZXJjZW50YWdlOiA3NSxcbiAgICB0b29sdGlwczogeyBlbmFibGVkOiBmYWxzZSB9LFxuICAgIGhvdmVyOiB7IG1vZGU6IG51bGwgfSxcbiAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgIG1haW50YWluQXNwZWN0UmF0aW86IHRydWUsXG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcbiAgICBpZiAodXNlckRhdGEpIHtcbiAgICAgIGFjdGlvbnMudXNlckxvZ2luKHVzZXJEYXRhKTtcbiAgICAgIGdldE1lbnUodXNlckRhdGEpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgYWN0aW9ucy5zZXRNZW51KGRhdGEpO1xuICAgICAgICAgIHNldFRvcE1lbnUoZGF0YSk7XG4gICAgICAgICAgc2V0TG9hZGluZ01lbnUoZmFsc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfVxuICB9LCBbZGlzcGF0Y2hdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XG4gICAgaWYgKHVzZXJEYXRhKSB7XG4gICAgICBpZiAoZm9jdXMgPT09IFwiUExBTlwiKSB7XG4gICAgICAgIGdldFBsYW5MaXN0KHVzZXJEYXRhKVxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBzZXRQbGFuKGRhdGEpO1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZm9jdXMgPT09IFwiVU5QTEFOXCIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ1bnBsYW5cIik7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSBlbHNlIGlmIChmb2N1cyA9PT0gXCJTUFJFQURJTkdcIikge1xuICAgICAgICBjb25zb2xlLmxvZyhcInNwcmVhZGluZ1wiKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9IGVsc2UgaWYgKGZvY3VzID09PSBcIldPUktfVklTSVRcIikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIndvcmsgdmlzaXRcIik7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfVxuICB9LCBbZm9jdXNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xuXG4gICAgaWYgKGZvY3VzID09PSBcIlBMQU5cIikge1xuICAgICAgZ2V0UGxhbkhpc3RvcnkodXNlckRhdGEpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgc2V0UGxhbkhpc3RvcnkoZGF0YSk7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChmb2N1cyA9PT0gXCJVTlBMQU5cIikge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSBlbHNlIGlmIChmb2N1cyA9PT0gXCJTUFJFQURJTkdcIikge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9LCBbZm9jdXNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xuICAgIGlmICh1c2VyRGF0YSkge1xuICAgICAgZ2V0QXV0aCh1c2VyRGF0YSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YVswXS5yb2xlQ29kZSA9PT0gXCJQSU1DQVwiKSB7XG4gICAgICAgICAgICBzZXRSb2xlKFwiUElNQ0FcIik7XG4gICAgICAgICAgICBzZXRGb2N1cyhcIldPUktfVklTSVRcIik7XG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhWzBdLnJvbGVDb2RlID09PSBcIlNNUlwiKSB7XG4gICAgICAgICAgICBzZXRSb2xlKFwiU01SXCIpO1xuICAgICAgICAgICAgc2V0Rm9jdXMoXCJQTEFOXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xuICAgIH1cbiAgfSwgW2Rpc3BhdGNoXSk7XG5cbiAgY29uc3QgcmVuZGVyVG9wTWVudSA9ICgpID0+IHtcbiAgICB2YXIgYXV0aCA9IHRvcE1lbnUuZmlsdGVyKCh2YWwpID0+IHtcbiAgICAgIGlmIChyb2xlID09PSBcIlNNUlwiKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgdmFsLm1vZHVsZUNvZGUgPT09IFwiUExBTlwiIHx8XG4gICAgICAgICAgdmFsLm1vZHVsZUNvZGUgPT09IFwiVU5QTEFOXCIgfHxcbiAgICAgICAgICB2YWwubW9kdWxlQ29kZSA9PT0gXCJTUFJFQURJTkdcIlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChyb2xlID09PSBcIlBJTUNBXCIpIHtcbiAgICAgICAgcmV0dXJuIHZhbC5tb2R1bGVDb2RlID09PSBcIldPUkstVklTSVRcIjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICAgIHJldHVybiBhdXRoLm1hcCgodmFsLCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgIGZvY3VzID09PSB2YWwubW9kdWxlQ29kZSA/IHN0eWxlcy5mb2N1c19tZW51IDogc3R5bGVzLm1lbnVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0Rm9jdXModmFsLm1vZHVsZUNvZGUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3ZhbC5tb2R1bGVDb2RlID09PSBcIlBMQU5cIlxuICAgICAgICAgICAgICA/IFwiUGxhblwiXG4gICAgICAgICAgICAgIDogdmFsLm1vZHVsZUNvZGUgPT09IFwiVU5QTEFOXCJcbiAgICAgICAgICAgICAgPyBcIlVucGxhblwiXG4gICAgICAgICAgICAgIDogdmFsLm1vZHVsZUNvZGUgPT09IFwiU1BSRUFESU5HXCJcbiAgICAgICAgICAgICAgPyBcIlNwcmVhZGluZ1wiXG4gICAgICAgICAgICAgIDogdmFsLm1vZHVsZUNvZGUgPT09IFwiV09SSy1WSVNJVFwiXG4gICAgICAgICAgICAgID8gXCJXb3JrIFZpc2l0XCJcbiAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBpZiAoYXV0aCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICBhdXRoLmxlbmd0aCA9PT0gM1xuICAgICAgICAgICAgICA/IHN0eWxlcy5tZW51X2dyaWQzXG4gICAgICAgICAgICAgIDogYXV0aC5sZW5ndGggPT09IDFcbiAgICAgICAgICAgICAgPyBzdHlsZXMubWVudV9ncmlkMVxuICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICB7cmVuZGVyKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyTGlzdCA9ICh0eXBlLCBkYXRhKSA9PiB7XG4gICAgcmV0dXJuIGRhdGEubWFwKCh2YWwsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjE1cHhcIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNzAwXCIsXG4gICAgICAgICAgICBjb2xvcjogXCIjNUU1ODczXCIsXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgbWFyZ2luOiBcIjEwcHggMFwiLFxuICAgICAgICAgIH19XG4gICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMTIlIDg4JVwiIH19PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdHlwZSA9PT0gXCJQTEFOXCIgPyBcIiNGRkYxQ0NcIiA6IFwiI2QxZTRlMVwiLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCI0cHhcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMnB4XCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0eXBlID09PSBcIlBMQU5cIiA/IFwiI2ZlYjgwMFwiIDogXCIjNDE4NjdhXCIsXG5cbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdj57dmFsLm5hbWFPdXRsZXR9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMTRweFwiLCBmb250V2VpZ2h0OiBcIjMwMFwiIH19PlxuICAgICAgICAgICAgICAgIHt2YWwuYWxhbWF0T3V0bGV0fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyUGxhbiA9ICgpID0+IHtcbiAgICBpZiAobG9hZGluZykge1xuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI1cHhcIiwgbWFyZ2luVG9wOiBcIjIycHhcIiB9fSBzaGFkb3c+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm92ZXJ2aWV3fT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfT57YCR7ZGF0ZX0gLyAke1xuICAgICAgICAgICAgICAgICAgbW9udGhOYW1lLnBhcnRbbW9udGggLSAxXVxuICAgICAgICAgICAgICAgIH0gLyAke3llYXJ9YH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogXCIjNUU1ODczXCIsIG1hcmdpblRvcDogXCI3cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjM2cHhcIiwgZm9udFdlaWdodDogXCI2MDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAge3BsYW5IaXN0b3J5Lmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE4cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgL3twbGFuLmxlbmd0aCArIHBsYW5IaXN0b3J5Lmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiN3B4XCIsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkVCODAwXCIsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweCAyMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI0MDBcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEFkZCBOZXcgUGxhbiArXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGllX3BlcmNlbnRhZ2V9PlxuICAgICAgICAgICAgICAgICAge3BsYW4ubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgICAgID8gXCIwJVwiXG4gICAgICAgICAgICAgICAgICAgIDogYCR7TWF0aC5yb3VuZChcbiAgICAgICAgICAgICAgICAgICAgICAgIChwbGFuSGlzdG9yeS5sZW5ndGggL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAocGxhbi5sZW5ndGggKyBwbGFuSGlzdG9yeS5sZW5ndGgpKSAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDEwMFxuICAgICAgICAgICAgICAgICAgICAgICl9JWB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPERvdWdobnV0XG4gICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhUGxhbn1cbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2RvbnV0T3B0aW9uc31cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjJweFwiLCBib3JkZXJSYWRpdXM6IFwiMzBweFwiIH19IHNoYWRvdz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxhbl9jb250YWluZXJ9PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNUU1ODczXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBZb3VyIFBsYW4gVG9kYXlcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjIycHggMFwiIH19PntyZW5kZXJMaXN0KFwiUExBTlwiLCBwbGFuKX08L2Rpdj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi92aXNpdC9wbGFuXCI+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9e1wiU2VlIERldGFpbHNcIn0gLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXJTcHJlYWRpbmcgPSAoKSA9PiB7XG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIG1hcmdpblRvcDogXCIyMnB4XCIgfX0gc2hhZG93PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmVydmlld30+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+e2Ake2RhdGV9IC8gJHtcbiAgICAgICAgICAgICAgICAgIG1vbnRoTmFtZS5wYXJ0W21vbnRoIC0gMV1cbiAgICAgICAgICAgICAgICB9IC8gJHt5ZWFyfWB9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwiIzVFNTg3M1wiLCBtYXJnaW5Ub3A6IFwiN3B4XCIgfX0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIzNnB4XCIsIGZvbnRXZWlnaHQ6IFwiNjAwXCIgfX0+MDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE4cHhcIiB9fT4ve3BsYW4ubGVuZ3RofTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi92aXNpdC9zcHJlYWRpbmcvXCJ9PlxuICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjdweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRUI4MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweCAyMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgQWRkIE5ldyBOT08gK1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGllX3BlcmNlbnRhZ2V9PjAlPC9kaXY+XG4gICAgICAgICAgICAgICAgPERvdWdobnV0XG4gICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhU3ByZWFkaW5nfVxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZG9udXRPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MTAwfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMnB4XCIsIGJvcmRlclJhZGl1czogXCIzMHB4XCIgfX0gc2hhZG93PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGFuX2NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1RTU4NzNcIixcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNwcmVhZGluZyBIaXN0b3J5XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIyMnB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICB7cmVuZGVyTGlzdChzcHJlYWRpbmdIaXN0b3J5KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdmlzaXQvc3ByZWFkaW5nL2hpc3RvcnlcIj5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD17XCJTZWUgRGV0YWlsc1wifSAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlclVucGxhbiA9ICgpID0+IHtcbiAgICBpZiAobG9hZGluZykge1xuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI1cHhcIiwgbWFyZ2luVG9wOiBcIjIycHhcIiB9fSBzaGFkb3c+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVucGxhbl9ncmlkfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5udW1fdG90YWxfdW5wbGFufT41PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMTRweFwiIH19PlRvdGFsIFVucGxhbiBWaXNpdDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9Pnttb250aE5hbWUuZnVsbFttb250aCAtIDFdfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI1cHhcIiwgbWFyZ2luVG9wOiBcIjExcHhcIiB9fSBzaGFkb3c+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3Zpc2l0L3VucGxhblwiPlxuICAgICAgICAgICAgICA8YSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51bnBsYW5fZ3JpZDJ9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRfdW5wbGFufT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiLThweFwiIH19Pis8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIxNnB4XCIsIGZvbnRXZWlnaHQ6IFwiNjAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIEFueSBVbnBsYW4gVmlzaXQ/XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI0I5QjlDM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCIzMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEzcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgQWRkIHlvdXIgdW5wbGFuIHZpc2l0IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiL25leHQuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvQ2FyZD5cblxuICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMnB4XCIsIGJvcmRlclJhZGl1czogXCIzMHB4XCIgfX0gc2hhZG93PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGFuX2NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1RTU4NzNcIixcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFVucGxhbiBWaXNpdCBIaXN0b3J5XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIyMnB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICB7cmVuZGVyTGlzdCh1bnBsYW5IaXN0b3J5KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdmlzaXQvdW5wbGFuL2hpc3RvcnlcIj5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD17XCJTZWUgRGV0YWlsc1wifSAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlcldvcmtWaXNpdCA9ICgpID0+IHt9O1xuXG4gIGNvbnN0IHJlbmRlclBhZ2UgPSAoKSA9PiB7XG4gICAgaWYgKGxvYWRpbmcgJiYgbG9hZGluZ01lbnUpIHtcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcbiAgICB9IGVsc2VcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+SG9tZTwvdGl0bGU+XG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmdfdG9wfSAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfaW5mb19ncmlkfT5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLnBwfSBzcmM9XCIvcHAucG5nXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMTVweFwiIH19PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIxNHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIHtzdGF0ZS51c2VyUmVkdWNlci51c2VyLm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMTJweFwiIH19Pntyb2xlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMubm90aWZ9IHNyYz1cIi9ub3RpZi5zdmdcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgICAgICAgICB7cmVuZGVyVG9wTWVudSgpfVxuICAgICAgICAgICAgICAgICAge2ZvY3VzID09PSBcIlBMQU5cIlxuICAgICAgICAgICAgICAgICAgICA/IHJlbmRlclBsYW4oKVxuICAgICAgICAgICAgICAgICAgICA6IGZvY3VzID09PSBcIlVOUExBTlwiXG4gICAgICAgICAgICAgICAgICAgID8gcmVuZGVyVW5wbGFuKClcbiAgICAgICAgICAgICAgICAgICAgOiBmb2N1cyA9PT0gXCJTUFJFQURJTkdcIlxuICAgICAgICAgICAgICAgICAgICA/IHJlbmRlclNwcmVhZGluZygpXG4gICAgICAgICAgICAgICAgICAgIDogZm9jdXMgPT09IFwiV09SSy1WSVNJVFwiXG4gICAgICAgICAgICAgICAgICAgID8gcmVuZGVyV29ya1Zpc2l0KClcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTIwcHhcIiB9fSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxCb3ROYXYgZm9jdXM9e1wiaG9tZVwifSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gIH07XG4gIHJldHVybiByZW5kZXJQYWdlKCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9