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
/* harmony import */ var C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/pages/Home.module.css */ "./styles/pages/Home.module.css");
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store */ "./store/index.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Spinner */ "./components/Spinner.jsx");
/* harmony import */ var _components_BotNav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/BotNav */ "./components/BotNav.jsx");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Button */ "./components/Button.jsx");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Card */ "./components/Card.jsx");
/* harmony import */ var _webPush__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../webPush */ "./webPush.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../helper */ "./helper.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_17__);





var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-new\\pages\\home.jsx",
    _s = $RefreshSig$();
















function Home() {
  _s();

  var _this = this;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_store__WEBPACK_IMPORTED_MODULE_8__["Stores"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch,
      actions = _useContext.actions;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      focus = _useState[0],
      setFocus = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      plan = _useState2[0],
      setPlan = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      workVisit = _useState3[0],
      setWorkVisit = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      workVisitHistory = _useState4[0],
      setWorkVisitHistory = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      planHistory = _useState5[0],
      setPlanHistory = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      spreadingHistory = _useState6[0],
      setSpreadingHistory = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      unplanHistory = _useState7[0],
      setUnplanHistory = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      role = _useState8[0],
      setRole = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      topMenu = _useState9[0],
      setTopMenu = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      loading = _useState10[0],
      setLoading = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      loadingMenu = _useState11[0],
      setLoadingMenu = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      newAnnouncement = _useState12[0],
      setNewAnnouncement = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      notif = _useState13[0],
      setNotif = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      salesTarget = _useState14[0],
      setSalesTarget = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      salesTarget75 = _useState15[0],
      setSalesTarget75 = _useState15[1];

  var _useState16 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      produktifitas = _useState16[0],
      setProduktifitas = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      frontliner = _useState17[0],
      setFrontliner = _useState17[1];

  var _useState18 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      NOO = _useState18[0],
      setNOO = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      workDay = _useState19[0],
      setWorkDay = _useState19[1];

  var isMounted = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(true);
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
  var dataWorkVisit = {
    datasets: [{
      data: workVisitHistory.length === 0 ? [0, 1] : [workVisitHistory.length, workVisit.length],
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
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (isMounted.current) {
      var setToken = /*#__PURE__*/function () {
        var _ref = Object(C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
          var token;
          return C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return _webPush__WEBPACK_IMPORTED_MODULE_13__["firebaseCloudMessaging"].init();

                case 3:
                  token = _context.sent;

                  if (token) {
                    getMessage();
                  }

                  _context.next = 10;
                  break;

                case 7:
                  _context.prev = 7;
                  _context.t0 = _context["catch"](0);
                  console.log(_context.t0);

                case 10:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[0, 7]]);
        }));

        return function setToken() {
          return _ref.apply(this, arguments);
        };
      }();

      var getMessage = function getMessage() {
        var messaging = firebase_app__WEBPACK_IMPORTED_MODULE_14__["default"].messaging();
        console.log({
          messaging: messaging
        });
        messaging.onMessage(function (message) {
          setNotif(true);
        });
      };

      setToken();
    }

    return function () {
      isMounted.current = false;
    };
  }, [isMounted]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var userData = JSON.parse(localStorage.getItem("user"));

    if (userData) {
      Object(_helper__WEBPACK_IMPORTED_MODULE_15__["getAllAnnouncement"])(userData).then(function (data) {
        var newAnnouncement = data.filter(function (val) {
          return val.isRead === false;
        });
        setNewAnnouncement(newAnnouncement);

        if (newAnnouncement.length > 0) {
          setNotif(true);
        } else {
          setNotif(false);
        }
      })["catch"](function (err) {
        console.log(err);
      });
      Object(_helper__WEBPACK_IMPORTED_MODULE_15__["getWorkDay"])().then(function (data) {
        setWorkDay(data);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var userData = JSON.parse(localStorage.getItem("user"));

    if (userData) {
      actions.userLogin(userData);
      Object(_helper__WEBPACK_IMPORTED_MODULE_15__["getMenu"])(userData).then(function (data) {
        actions.setMenu(data);
        setTopMenu(data);
        setLoadingMenu(false);
      })["catch"](function (err) {
        console.log(err);
      });
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/");
    }
  }, [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var userData = JSON.parse(localStorage.getItem("user"));
    var month = moment__WEBPACK_IMPORTED_MODULE_17___default()().format("M");
    var year = moment__WEBPACK_IMPORTED_MODULE_17___default()().format("Y");

    if (userData) {
      Object(_helper__WEBPACK_IMPORTED_MODULE_15__["getAuth"])(userData).then(function (data) {
        if (data[0].roleCode === "PIMCAB") {
          setRole("PIMCAB");
          setFocus("WORK-VISIT");
        } else if (data[0].roleCode === "SMR") {
          setRole("SMR");
          setFocus("PLAN");
          Object(_helper__WEBPACK_IMPORTED_MODULE_15__["getSalesTargetSMR"])(userData, month, year).then(function (data) {
            setSalesTarget(data);
          })["catch"](function (err) {
            console.log(err);
          });
          Object(_helper__WEBPACK_IMPORTED_MODULE_15__["getSalesTarget75SMR"])(userData, month, year).then(function (data) {
            setSalesTarget75(data);
          })["catch"](function (err) {
            console.log(err);
          });
          Object(_helper__WEBPACK_IMPORTED_MODULE_15__["getProduktifitas"])(userData, month, year).then(function (data) {
            setProduktifitas(data);
          })["catch"](function (err) {
            console.log(err);
          });
          Object(_helper__WEBPACK_IMPORTED_MODULE_15__["getFrontliner"])(userData, month, year).then(function (data) {
            setFrontliner(data);
          })["catch"](function (err) {
            console.log(err);
          });
          Object(_helper__WEBPACK_IMPORTED_MODULE_15__["getNoo"])(userData, month, year).then(function (data) {
            setNOO(data);
            console.log(data);
          })["catch"](function (err) {
            console.log(err);
          });
        }
      })["catch"](function (err) {
        console.log(err);
      });
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/");
    }
  }, [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setLoading(true);
    var userData = JSON.parse(localStorage.getItem("user"));

    if (userData) {
      if (focus === "PLAN") {
        Object(_helper__WEBPACK_IMPORTED_MODULE_15__["getPlanList"])(userData).then(function (data) {
          setPlan(data);
          setLoading(false);
        })["catch"](function (err) {
          console.log(err);
        });
      } else if (focus === "WORK-VISIT") {
        Object(_helper__WEBPACK_IMPORTED_MODULE_15__["getAllWorkVisit"])(userData).then(function (data) {
          console.log(data);
          setWorkVisit(data.filter(function (val) {
            return val.isPenilaian === false;
          }));
          setWorkVisitHistory(data.filter(function (val) {
            return val.isPenilaian === true;
          }));
          setLoading(false);
        })["catch"](function (err) {
          console.log(err);
        });
      }
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/");
    }
  }, [focus]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var userData = JSON.parse(localStorage.getItem("user"));

    if (focus === "PLAN") {
      Object(_helper__WEBPACK_IMPORTED_MODULE_15__["getPlanHistory"])(userData).then(function (data) {
        setPlanHistory(data);
        setLoading(false); // console.log(data);
      })["catch"](function (err) {
        console.log(err);
      });
    } else if (focus === "UNPLAN") {
      Object(_helper__WEBPACK_IMPORTED_MODULE_15__["getUnplanMonthlyHistory"])(userData).then(function (data) {
        // console.log(data);
        setUnplanHistory(data);
        setLoading(false);
      })["catch"](function (err) {
        console.log(err);
      });
    } else if (focus === "SPREADING") {
      Object(_helper__WEBPACK_IMPORTED_MODULE_15__["getSpreadingMonthlyHistory"])(userData).then(function (data) {
        // console.log(data);
        setSpreadingHistory(data);
        setLoading(false);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }, [focus]);

  var renderTopMenu = function renderTopMenu() {
    var auth = topMenu.filter(function (val) {
      if (role === "SMR") {
        return val.moduleCode === "PLAN" || val.moduleCode === "UNPLAN" || val.moduleCode === "SPREADING";
      } else if (role === "PIMCAB") {
        return val.moduleCode === "WORK-VISIT";
      }
    });

    var render = function render() {
      return auth.map(function (val, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: focus === val.moduleCode ? _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.focus_menu : _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.menu,
          onClick: function onClick() {
            setFocus(val.moduleCode);
          },
          children: val.moduleCode === "PLAN" ? "Plan" : val.moduleCode === "UNPLAN" ? "Unplan" : val.moduleCode === "SPREADING" ? "Spreading" : val.moduleCode === "WORK-VISIT" ? "Work Visit" : ""
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 11
        }, _this);
      });
    };

    if (auth) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: auth.length === 3 ? _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.menu_grid3 : auth.length === 1 ? _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.menu_grid1 : "",
        children: render()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 340,
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
        lineNumber: 358,
        columnNumber: 9
      }, _this);
    } else {
      return data.map(function (val, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: focus === "PLAN" ? "/visit/plan/".concat(data.idMasterPlan) : "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
                    lineNumber: 398,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 389,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: val.namaOutlet
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 409,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    style: {
                      fontSize: "14px",
                      fontWeight: "300"
                    },
                    children: val.alamatOutlet
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 410,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 408,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 386,
                columnNumber: 17
              }, _this)
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 376,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 375,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 372,
          columnNumber: 11
        }, _this);
      });
    }
  };

  var renderListWorkVisit = function renderListWorkVisit(data) {
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
        lineNumber: 426,
        columnNumber: 9
      }, _this);
    } else {
      return data.map(function (val, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: "work-visit/".concat(val.idMasterPlan),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
                    backgroundColor: "#FFF1CC",
                    borderRadius: "20px",
                    padding: "4px"
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    style: {
                      width: "12px",
                      height: "12px",
                      backgroundColor: "#feb800",
                      borderRadius: "20px"
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 464,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 455,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: val.namaSMR
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 474,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    style: {
                      fontSize: "14px",
                      fontWeight: "300"
                    },
                    children: ["Rayon - ", val.rayon]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 475,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    style: {
                      fontSize: "14px",
                      fontWeight: "300"
                    },
                    children: ["Produk Focus - ", val.produkFokus]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 478,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 473,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 452,
                columnNumber: 17
              }, _this)
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 442,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 441,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 440,
          columnNumber: 11
        }, _this);
      });
    }
  };

  var renderPlan = function renderPlan() {
    if (loading) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 493,
        columnNumber: 14
      }, _this);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_12__["default"], {
          style: {
            borderRadius: "5px",
            marginTop: "22px"
          },
          shadow: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.overview,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.date,
                children: moment__WEBPACK_IMPORTED_MODULE_17___default()().format("D / MMM / YYYY")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 500,
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
                  lineNumber: 504,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  style: {
                    fontSize: "18px"
                  },
                  children: ["/", plan.length + planHistory.length]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 507,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 503,
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
                lineNumber: 511,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 499,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.pie_percentage,
                children: planHistory.length === 0 ? "0%" : "".concat(Math.round(planHistory.length / (plan.length + planHistory.length) * 100), "%")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 527,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_16__["Doughnut"], {
                data: dataPlan,
                options: donutOptions,
                width: 100,
                height: 100
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 536,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 526,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 498,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 497,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_12__["default"], {
          style: {
            marginTop: "22px",
            borderRadius: "30px"
          },
          shadow: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.plan_container,
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
              lineNumber: 547,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                margin: "22px 0"
              },
              children: renderList("PLAN", plan)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 557,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
              href: "/visit/plan",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  text: "See Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 560,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 559,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 558,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 546,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 545,
          columnNumber: 11
        }, _this)]
      }, void 0, true);
    }
  };

  var renderSpreading = function renderSpreading() {
    if (loading) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 572,
        columnNumber: 14
      }, _this);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_12__["default"], {
          style: {
            borderRadius: "5px",
            marginTop: "22px"
          },
          shadow: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.overview,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.date,
                children: moment__WEBPACK_IMPORTED_MODULE_17___default()().format("D / MMM / YYYY")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 579,
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
                  children: spreadingHistory.length
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 583,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  style: {
                    fontSize: "18px"
                  },
                  children: ["/", plan.length]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 586,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 582,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
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
                    lineNumber: 590,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 589,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 588,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 578,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.pie_percentage,
                children: "0%"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 608,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_16__["Doughnut"], {
                data: dataSpreading,
                options: donutOptions,
                width: 100,
                height: 100
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 609,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 607,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 577,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 576,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_12__["default"], {
          style: {
            marginTop: "22px",
            borderRadius: "30px"
          },
          shadow: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.plan_container,
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
              lineNumber: 620,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                margin: "22px 0"
              },
              children: renderList("SPREADING", spreadingHistory)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 630,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
              href: "/visit/spreading/history",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  text: "See Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 635,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 634,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 633,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 619,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 618,
          columnNumber: 11
        }, _this)]
      }, void 0, true);
    }
  };

  var renderUnplan = function renderUnplan() {
    if (loading) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 647,
        columnNumber: 14
      }, _this);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_12__["default"], {
          style: {
            borderRadius: "5px",
            marginTop: "22px"
          },
          shadow: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.unplan_grid,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.num_total_unplan,
              children: unplanHistory.length
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 653,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                fontSize: "14px"
              },
              children: "Total Unplan Visit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 656,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.date,
              children: moment__WEBPACK_IMPORTED_MODULE_17___default()().format("MMMM")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 657,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 652,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 651,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_12__["default"], {
          style: {
            borderRadius: "5px",
            marginTop: "11px"
          },
          shadow: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "/visit/unplan",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              style: {
                textDecoration: "none"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.unplan_grid2,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.add_unplan,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    style: {
                      marginTop: "-8px"
                    },
                    children: "+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 665,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 664,
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
                    lineNumber: 669,
                    columnNumber: 21
                  }, _this), " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 667,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  style: {
                    textAlign: "center"
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/next.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 680,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 679,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 663,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 662,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 661,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 660,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_12__["default"], {
          style: {
            marginTop: "22px",
            borderRadius: "30px"
          },
          shadow: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.plan_container,
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
              lineNumber: 689,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                margin: "22px 0"
              },
              children: renderList("UNPLAN", unplanHistory)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 699,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
              href: "/visit/unplan/history",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  text: "See Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 704,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 703,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 702,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 688,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 687,
          columnNumber: 11
        }, _this)]
      }, void 0, true);
    }
  };

  var renderWorkVisit = function renderWorkVisit() {
    if (loading) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 716,
        columnNumber: 14
      }, _this);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_12__["default"], {
          style: {
            borderRadius: "5px",
            marginTop: "22px"
          },
          shadow: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.overview,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.date,
                children: moment__WEBPACK_IMPORTED_MODULE_17___default()().format("D / MMM / YYYY")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 723,
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
                  children: workVisitHistory.length
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 727,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  style: {
                    fontSize: "18px"
                  },
                  children: ["/", workVisit.length + workVisitHistory.length]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 730,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 726,
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
                children: "Add New +"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 734,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 722,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.pie_percentage,
                children: workVisitHistory.length === 0 ? "0%" : "".concat(Math.round(workVisitHistory.length / (workVisit.length + workVisitHistory.length) * 100), "%")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 750,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_16__["Doughnut"], {
                data: dataWorkVisit,
                options: donutOptions,
                width: 100,
                height: 100
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 759,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 749,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 721,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 720,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_12__["default"], {
          style: {
            marginTop: "22px",
            borderRadius: "30px"
          },
          shadow: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.plan_container,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                fontSize: "18px",
                fontWeight: "500",
                color: "#5E5873",
                textAlign: "left"
              },
              children: "Your Work Visit Today"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 770,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                margin: "22px 0"
              },
              children: renderListWorkVisit(workVisit)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 780,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
              href: "/work-visit",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  text: "See Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 785,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 784,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 783,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 769,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 768,
          columnNumber: 11
        }, _this)]
      }, void 0, true);
    }
  };

  var renderWorkDay = function renderWorkDay() {
    if (workDay.length !== 0 && !loading && !loadingMenu) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_12__["default"], {
        style: {
          marginTop: "22px",
          borderRadius: "6px"
        },
        shadow: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.plan_container,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.progress_title,
            children: ["Working Day ", moment__WEBPACK_IMPORTED_MODULE_17___default()().format("MMMM YYYY"), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                fontWeight: "700"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                style: {
                  color: "#FEB800"
                },
                children: workDay.hariKerja
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 803,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                style: {
                  fontSize: "12px",
                  fontWeight: "400"
                },
                children: [" / ", workDay.totalHariKerja]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 804,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 802,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 800,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 799,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 798,
        columnNumber: 9
      }, _this);
    }
  };

  var renderProgress = function renderProgress() {
    var renderSales = function renderSales(title, data) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            display: "grid",
            gridTemplateColumns: "1fr 2fr"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.progress_title,
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 820,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.progress_number,
            children: [data.sales.toLocaleString("id-ID"), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              style: {
                fontSize: "12px",
                fontWeight: "400"
              },
              children: [" / ", data.target.toLocaleString("id-ID")]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 823,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 821,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 819,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            margin: "13px 0 0 0"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.progress_bar
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 830,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.progress_bar_now,
            style: {
              width: "".concat(data.sales / data.target * 100, "%")
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 831,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 829,
          columnNumber: 11
        }, _this)]
      }, void 0, true);
    };

    if (salesTarget.length !== 0 && salesTarget75.length !== 0 && produktifitas.length !== 0 && frontliner.length !== 0 && !loading && !loadingMenu) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_12__["default"], {
        style: {
          marginTop: "22px",
          borderRadius: "6px"
        },
        shadow: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.plan_container,
          children: [renderSales("Sales", salesTarget), renderSales("Sales 75%", salesTarget75), renderSales("Sales NOO", NOO), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              display: "grid",
              gridTemplateColumns: "1fr 1fr"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.progress_title,
              children: "Frontliner"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 856,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.progress_number,
              children: [frontliner.ach, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                style: {
                  fontSize: "12px",
                  fontWeight: "400"
                },
                children: [" / ", frontliner.target]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 859,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 857,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 855,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              margin: "13px 0 0 0"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.progress_bar
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 866,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.progress_bar_now,
              style: {
                width: "".concat(frontliner.ach / frontliner.target * 100, "%")
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 867,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 865,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              display: "grid",
              gridTemplateColumns: "1fr 1fr"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.progress_title,
              children: "Produktifitas"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 875,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.progress_number,
              children: [produktifitas.achievement, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                style: {
                  fontSize: "12px",
                  fontWeight: "400"
                },
                children: [" / ", produktifitas.target]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 878,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 876,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 874,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              margin: "13px 0 0 0"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.progress_bar
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 885,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.progress_bar_now,
              style: {
                width: "".concat(produktifitas.achievement / produktifitas.target * 100, "%")
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 886,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 884,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 851,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 850,
        columnNumber: 9
      }, _this);
    }
  };

  var renderPage = function renderPage() {
    if (loading && loadingMenu && salesTarget.length == 0 && salesTarget75.length == 0 && produktifitas.length == 0 && frontliner.length == 0 && workDay.length == 0) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 911,
        columnNumber: 14
      }, _this);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 916,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
            rel: "icon",
            href: "/favicon.ico"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 917,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 915,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.container,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.wrapper,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.bg_top
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 921,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.user_info_grid,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.pp,
                src: "/pp.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 923,
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
                  lineNumber: 925,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  style: {
                    fontSize: "12px"
                  },
                  children: role
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 928,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 924,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
                  href: "/announcement",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    style: {
                      textDecoration: "none"
                    },
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.notif,
                      src: "/notif.svg"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 933,
                      columnNumber: 23
                    }, _this), notif ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      style: {
                        position: " relative",
                        top: "-30px",
                        right: "-14px"
                      },
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        style: {
                          width: "21px",
                          height: "18px",
                          borderRadius: "20px",
                          backgroundColor: "#feb800",
                          position: "relative",
                          color: "white",
                          fontSize: "12px"
                        },
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          style: {
                            textAlign: "center"
                          },
                          children: newAnnouncement.length < 9 ? newAnnouncement.length : "9+"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 953,
                          columnNumber: 29
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 942,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 935,
                      columnNumber: 25
                    }, _this) : null]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 932,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 931,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 930,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.main,
                children: [renderTopMenu(), focus === "PLAN" ? renderPlan() : focus === "UNPLAN" ? renderUnplan() : focus === "SPREADING" ? renderSpreading() : focus === "WORK-VISIT" ? renderWorkVisit() : "", renderWorkDay(), renderProgress(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  style: {
                    marginBottom: "120px"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 977,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 964,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 922,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 920,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 919,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_BotNav__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 982,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 914,
        columnNumber: 9
      }, _this);
    }
  };

  return renderPage();
}

_s(Home, "/tQt5vfU8NicoVW7pWu440mayO8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS5qc3giXSwibmFtZXMiOlsiSG9tZSIsInVzZUNvbnRleHQiLCJTdG9yZXMiLCJzdGF0ZSIsImRpc3BhdGNoIiwiYWN0aW9ucyIsInVzZVN0YXRlIiwiZm9jdXMiLCJzZXRGb2N1cyIsInBsYW4iLCJzZXRQbGFuIiwid29ya1Zpc2l0Iiwic2V0V29ya1Zpc2l0Iiwid29ya1Zpc2l0SGlzdG9yeSIsInNldFdvcmtWaXNpdEhpc3RvcnkiLCJwbGFuSGlzdG9yeSIsInNldFBsYW5IaXN0b3J5Iiwic3ByZWFkaW5nSGlzdG9yeSIsInNldFNwcmVhZGluZ0hpc3RvcnkiLCJ1bnBsYW5IaXN0b3J5Iiwic2V0VW5wbGFuSGlzdG9yeSIsInJvbGUiLCJzZXRSb2xlIiwidG9wTWVudSIsInNldFRvcE1lbnUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImxvYWRpbmdNZW51Iiwic2V0TG9hZGluZ01lbnUiLCJuZXdBbm5vdW5jZW1lbnQiLCJzZXROZXdBbm5vdW5jZW1lbnQiLCJub3RpZiIsInNldE5vdGlmIiwic2FsZXNUYXJnZXQiLCJzZXRTYWxlc1RhcmdldCIsInNhbGVzVGFyZ2V0NzUiLCJzZXRTYWxlc1RhcmdldDc1IiwicHJvZHVrdGlmaXRhcyIsInNldFByb2R1a3RpZml0YXMiLCJmcm9udGxpbmVyIiwic2V0RnJvbnRsaW5lciIsIk5PTyIsInNldE5PTyIsIndvcmtEYXkiLCJzZXRXb3JrRGF5IiwiaXNNb3VudGVkIiwidXNlUmVmIiwiZGF0YVBsYW4iLCJkYXRhc2V0cyIsImRhdGEiLCJsZW5ndGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkYXRhU3ByZWFkaW5nIiwiZGF0YVdvcmtWaXNpdCIsImRvbnV0T3B0aW9ucyIsImN1dG91dFBlcmNlbnRhZ2UiLCJ0b29sdGlwcyIsImVuYWJsZWQiLCJob3ZlciIsIm1vZGUiLCJyZXNwb25zaXZlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJzZXRUb2tlbiIsImZpcmViYXNlQ2xvdWRNZXNzYWdpbmciLCJpbml0IiwidG9rZW4iLCJnZXRNZXNzYWdlIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2luZyIsImZpcmViYXNlIiwib25NZXNzYWdlIiwibWVzc2FnZSIsInVzZXJEYXRhIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImdldEFsbEFubm91bmNlbWVudCIsInRoZW4iLCJmaWx0ZXIiLCJ2YWwiLCJpc1JlYWQiLCJlcnIiLCJnZXRXb3JrRGF5IiwidXNlckxvZ2luIiwiZ2V0TWVudSIsInNldE1lbnUiLCJSb3V0ZXIiLCJwdXNoIiwibW9udGgiLCJtb21lbnQiLCJmb3JtYXQiLCJ5ZWFyIiwiZ2V0QXV0aCIsInJvbGVDb2RlIiwiZ2V0U2FsZXNUYXJnZXRTTVIiLCJnZXRTYWxlc1RhcmdldDc1U01SIiwiZ2V0UHJvZHVrdGlmaXRhcyIsImdldEZyb250bGluZXIiLCJnZXROb28iLCJnZXRQbGFuTGlzdCIsImdldEFsbFdvcmtWaXNpdCIsImlzUGVuaWxhaWFuIiwiZ2V0UGxhbkhpc3RvcnkiLCJnZXRVbnBsYW5Nb250aGx5SGlzdG9yeSIsImdldFNwcmVhZGluZ01vbnRobHlIaXN0b3J5IiwicmVuZGVyVG9wTWVudSIsImF1dGgiLCJtb2R1bGVDb2RlIiwicmVuZGVyIiwibWFwIiwiaW5kZXgiLCJzdHlsZXMiLCJmb2N1c19tZW51IiwibWVudSIsIm1lbnVfZ3JpZDMiLCJtZW51X2dyaWQxIiwicmVuZGVyTGlzdCIsInR5cGUiLCJmb250U2l6ZSIsImNvbG9yIiwidGV4dEFsaWduIiwibWFyZ2luIiwiaWRNYXN0ZXJQbGFuIiwiZm9udFdlaWdodCIsImRpc3BsYXkiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwibmFtYU91dGxldCIsImFsYW1hdE91dGxldCIsInJlbmRlckxpc3RXb3JrVmlzaXQiLCJuYW1hU01SIiwicmF5b24iLCJwcm9kdWtGb2t1cyIsInJlbmRlclBsYW4iLCJtYXJnaW5Ub3AiLCJvdmVydmlldyIsImRhdGUiLCJib3JkZXIiLCJwaWVfcGVyY2VudGFnZSIsIk1hdGgiLCJyb3VuZCIsInBsYW5fY29udGFpbmVyIiwicmVuZGVyU3ByZWFkaW5nIiwicmVuZGVyVW5wbGFuIiwidW5wbGFuX2dyaWQiLCJudW1fdG90YWxfdW5wbGFuIiwidGV4dERlY29yYXRpb24iLCJ1bnBsYW5fZ3JpZDIiLCJhZGRfdW5wbGFuIiwicmVuZGVyV29ya1Zpc2l0IiwicmVuZGVyV29ya0RheSIsInByb2dyZXNzX3RpdGxlIiwiaGFyaUtlcmphIiwidG90YWxIYXJpS2VyamEiLCJyZW5kZXJQcm9ncmVzcyIsInJlbmRlclNhbGVzIiwidGl0bGUiLCJwcm9ncmVzc19udW1iZXIiLCJzYWxlcyIsInRvTG9jYWxlU3RyaW5nIiwidGFyZ2V0IiwicHJvZ3Jlc3NfYmFyIiwicHJvZ3Jlc3NfYmFyX25vdyIsImFjaCIsImFjaGlldmVtZW50IiwicmVuZGVyUGFnZSIsImNvbnRhaW5lciIsIndyYXBwZXIiLCJiZ190b3AiLCJ1c2VyX2luZm9fZ3JpZCIsInBwIiwibWFyZ2luTGVmdCIsInVzZXJSZWR1Y2VyIiwidXNlciIsIm5hbWUiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwibWFpbiIsIm1hcmdpbkJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQWlCQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLG9CQUNRQyx3REFBVSxDQUFDQyw2Q0FBRCxDQURsQjtBQUFBLE1BQ3JCQyxLQURxQixlQUNyQkEsS0FEcUI7QUFBQSxNQUNkQyxRQURjLGVBQ2RBLFFBRGM7QUFBQSxNQUNKQyxPQURJLGVBQ0pBLE9BREk7O0FB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QTtBQUFBO0FBQUE7QUFBQSxpQkFwRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUF3RUQ7QUFDRixHQXJGRDs7QUFzRkEsU0FBT2QsVUFBVSxFQUFqQjtBQUNEOztHQXo3QnVCNUssSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jMjg5NGY0YmZlNDM3MGU3NDhiOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wYWdlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBTdG9yZXMgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuXHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi9jb21wb25lbnRzL1NwaW5uZXJcIjtcclxuaW1wb3J0IEJvdE5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9Cb3ROYXZcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZFwiO1xyXG5cclxuaW1wb3J0IHsgZmlyZWJhc2VDbG91ZE1lc3NhZ2luZyB9IGZyb20gXCIuLi93ZWJQdXNoXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0QWxsQW5ub3VuY2VtZW50LFxyXG4gIGdldEFsbFdvcmtWaXNpdCxcclxuICBnZXRBdXRoLFxyXG4gIGdldEZyb250bGluZXIsXHJcbiAgZ2V0TWVudSxcclxuICBnZXROb28sXHJcbiAgZ2V0UGxhbkhpc3RvcnksXHJcbiAgZ2V0UGxhbkxpc3QsXHJcbiAgZ2V0UHJvZHVrdGlmaXRhcyxcclxuICBnZXRTYWxlc1RhcmdldDc1U01SLFxyXG4gIGdldFNhbGVzVGFyZ2V0U01SLFxyXG4gIGdldFNwcmVhZGluZ01vbnRobHlIaXN0b3J5LFxyXG4gIGdldFVucGxhbk1vbnRobHlIaXN0b3J5LFxyXG4gIGdldFdvcmtEYXksXHJcbn0gZnJvbSBcIi4uL2hlbHBlclwiO1xyXG5cclxuaW1wb3J0IHsgRG91Z2hudXQgfSBmcm9tIFwicmVhY3QtY2hhcnRqcy0yXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCwgYWN0aW9ucyB9ID0gdXNlQ29udGV4dChTdG9yZXMpO1xyXG4gIGNvbnN0IFtmb2N1cywgc2V0Rm9jdXNdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3BsYW4sIHNldFBsYW5dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt3b3JrVmlzaXQsIHNldFdvcmtWaXNpdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3dvcmtWaXNpdEhpc3RvcnksIHNldFdvcmtWaXNpdEhpc3RvcnldID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtwbGFuSGlzdG9yeSwgc2V0UGxhbkhpc3RvcnldID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzcHJlYWRpbmdIaXN0b3J5LCBzZXRTcHJlYWRpbmdIaXN0b3J5XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdW5wbGFuSGlzdG9yeSwgc2V0VW5wbGFuSGlzdG9yeV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3JvbGUsIHNldFJvbGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RvcE1lbnUsIHNldFRvcE1lbnVdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtsb2FkaW5nTWVudSwgc2V0TG9hZGluZ01lbnVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW25ld0Fubm91bmNlbWVudCwgc2V0TmV3QW5ub3VuY2VtZW50XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbm90aWYsIHNldE5vdGlmXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2FsZXNUYXJnZXQsIHNldFNhbGVzVGFyZ2V0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2FsZXNUYXJnZXQ3NSwgc2V0U2FsZXNUYXJnZXQ3NV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Byb2R1a3RpZml0YXMsIHNldFByb2R1a3RpZml0YXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtmcm9udGxpbmVyLCBzZXRGcm9udGxpbmVyXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbTk9PLCBzZXROT09dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt3b3JrRGF5LCBzZXRXb3JrRGF5XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBpc01vdW50ZWQgPSB1c2VSZWYodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IGRhdGFQbGFuID0ge1xyXG4gICAgZGF0YXNldHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGRhdGE6XHJcbiAgICAgICAgICBwbGFuSGlzdG9yeS5sZW5ndGggPT09IDAgPyBbMCwgMV0gOiBbcGxhbkhpc3RvcnkubGVuZ3RoLCBwbGFuLmxlbmd0aF0sXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXCIjNDE4NjdhXCIsIFwiI2QxZTRlMVwiXSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxuICBjb25zdCBkYXRhU3ByZWFkaW5nID0ge1xyXG4gICAgZGF0YXNldHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGRhdGE6IHNwcmVhZGluZ0hpc3RvcnkubGVuZ3RoID09PSAwID8gWzAsIDFdIDogWzAsIDFdLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1wiIzQxODY3YVwiLCBcIiNkMWU0ZTFcIl0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRhdGFXb3JrVmlzaXQgPSB7XHJcbiAgICBkYXRhc2V0czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgZGF0YTpcclxuICAgICAgICAgIHdvcmtWaXNpdEhpc3RvcnkubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgID8gWzAsIDFdXHJcbiAgICAgICAgICAgIDogW3dvcmtWaXNpdEhpc3RvcnkubGVuZ3RoLCB3b3JrVmlzaXQubGVuZ3RoXSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcIiM0MTg2N2FcIiwgXCIjZDFlNGUxXCJdLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9O1xyXG4gIGNvbnN0IGRvbnV0T3B0aW9ucyA9IHtcclxuICAgIGN1dG91dFBlcmNlbnRhZ2U6IDc1LFxyXG4gICAgdG9vbHRpcHM6IHsgZW5hYmxlZDogZmFsc2UgfSxcclxuICAgIGhvdmVyOiB7IG1vZGU6IG51bGwgfSxcclxuICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICBtYWludGFpbkFzcGVjdFJhdGlvOiB0cnVlLFxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaXNNb3VudGVkLmN1cnJlbnQpIHtcclxuICAgICAgc2V0VG9rZW4oKTtcclxuICAgICAgYXN5bmMgZnVuY3Rpb24gc2V0VG9rZW4oKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZmlyZWJhc2VDbG91ZE1lc3NhZ2luZy5pbml0KCk7XHJcbiAgICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgZ2V0TWVzc2FnZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGZ1bmN0aW9uIGdldE1lc3NhZ2UoKSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnaW5nID0gZmlyZWJhc2UubWVzc2FnaW5nKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coeyBtZXNzYWdpbmcgfSk7XHJcbiAgICAgICAgbWVzc2FnaW5nLm9uTWVzc2FnZSgobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgc2V0Tm90aWYodHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGlzTW91bnRlZC5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICB9O1xyXG4gIH0sIFtpc01vdW50ZWRdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xyXG4gICAgaWYgKHVzZXJEYXRhKSB7XHJcbiAgICAgIGdldEFsbEFubm91bmNlbWVudCh1c2VyRGF0YSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbmV3QW5ub3VuY2VtZW50ID0gZGF0YS5maWx0ZXIoKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsLmlzUmVhZCA9PT0gZmFsc2U7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHNldE5ld0Fubm91bmNlbWVudChuZXdBbm5vdW5jZW1lbnQpO1xyXG4gICAgICAgICAgaWYgKG5ld0Fubm91bmNlbWVudC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHNldE5vdGlmKHRydWUpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0Tm90aWYoZmFsc2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIGdldFdvcmtEYXkoKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBzZXRXb3JrRGF5KGRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XHJcbiAgICBpZiAodXNlckRhdGEpIHtcclxuICAgICAgYWN0aW9ucy51c2VyTG9naW4odXNlckRhdGEpO1xyXG4gICAgICBnZXRNZW51KHVzZXJEYXRhKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBhY3Rpb25zLnNldE1lbnUoZGF0YSk7XHJcbiAgICAgICAgICBzZXRUb3BNZW51KGRhdGEpO1xyXG4gICAgICAgICAgc2V0TG9hZGluZ01lbnUoZmFsc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICB9XHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcclxuICAgIHZhciBtb250aCA9IG1vbWVudCgpLmZvcm1hdChcIk1cIik7XHJcbiAgICB2YXIgeWVhciA9IG1vbWVudCgpLmZvcm1hdChcIllcIik7XHJcbiAgICBpZiAodXNlckRhdGEpIHtcclxuICAgICAgZ2V0QXV0aCh1c2VyRGF0YSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGRhdGFbMF0ucm9sZUNvZGUgPT09IFwiUElNQ0FCXCIpIHtcclxuICAgICAgICAgICAgc2V0Um9sZShcIlBJTUNBQlwiKTtcclxuICAgICAgICAgICAgc2V0Rm9jdXMoXCJXT1JLLVZJU0lUXCIpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhWzBdLnJvbGVDb2RlID09PSBcIlNNUlwiKSB7XHJcbiAgICAgICAgICAgIHNldFJvbGUoXCJTTVJcIik7XHJcbiAgICAgICAgICAgIHNldEZvY3VzKFwiUExBTlwiKTtcclxuICAgICAgICAgICAgZ2V0U2FsZXNUYXJnZXRTTVIodXNlckRhdGEsIG1vbnRoLCB5ZWFyKVxyXG4gICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRTYWxlc1RhcmdldChkYXRhKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBnZXRTYWxlc1RhcmdldDc1U01SKHVzZXJEYXRhLCBtb250aCwgeWVhcilcclxuICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0U2FsZXNUYXJnZXQ3NShkYXRhKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBnZXRQcm9kdWt0aWZpdGFzKHVzZXJEYXRhLCBtb250aCwgeWVhcilcclxuICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0UHJvZHVrdGlmaXRhcyhkYXRhKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBnZXRGcm9udGxpbmVyKHVzZXJEYXRhLCBtb250aCwgeWVhcilcclxuICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0RnJvbnRsaW5lcihkYXRhKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBnZXROb28odXNlckRhdGEsIG1vbnRoLCB5ZWFyKVxyXG4gICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXROT08oZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICB9XHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XHJcbiAgICBpZiAodXNlckRhdGEpIHtcclxuICAgICAgaWYgKGZvY3VzID09PSBcIlBMQU5cIikge1xyXG4gICAgICAgIGdldFBsYW5MaXN0KHVzZXJEYXRhKVxyXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgc2V0UGxhbihkYXRhKTtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGZvY3VzID09PSBcIldPUkstVklTSVRcIikge1xyXG4gICAgICAgIGdldEFsbFdvcmtWaXNpdCh1c2VyRGF0YSlcclxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICBzZXRXb3JrVmlzaXQoXHJcbiAgICAgICAgICAgICAgZGF0YS5maWx0ZXIoKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5pc1BlbmlsYWlhbiA9PT0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgc2V0V29ya1Zpc2l0SGlzdG9yeShcclxuICAgICAgICAgICAgICBkYXRhLmZpbHRlcigodmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsLmlzUGVuaWxhaWFuID09PSB0cnVlO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtmb2N1c10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XHJcblxyXG4gICAgaWYgKGZvY3VzID09PSBcIlBMQU5cIikge1xyXG4gICAgICBnZXRQbGFuSGlzdG9yeSh1c2VyRGF0YSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgc2V0UGxhbkhpc3RvcnkoZGF0YSk7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKGZvY3VzID09PSBcIlVOUExBTlwiKSB7XHJcbiAgICAgIGdldFVucGxhbk1vbnRobHlIaXN0b3J5KHVzZXJEYXRhKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIHNldFVucGxhbkhpc3RvcnkoZGF0YSk7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChmb2N1cyA9PT0gXCJTUFJFQURJTkdcIikge1xyXG4gICAgICBnZXRTcHJlYWRpbmdNb250aGx5SGlzdG9yeSh1c2VyRGF0YSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICBzZXRTcHJlYWRpbmdIaXN0b3J5KGRhdGEpO1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbZm9jdXNdKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyVG9wTWVudSA9ICgpID0+IHtcclxuICAgIHZhciBhdXRoID0gdG9wTWVudS5maWx0ZXIoKHZhbCkgPT4ge1xyXG4gICAgICBpZiAocm9sZSA9PT0gXCJTTVJcIikge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICB2YWwubW9kdWxlQ29kZSA9PT0gXCJQTEFOXCIgfHxcclxuICAgICAgICAgIHZhbC5tb2R1bGVDb2RlID09PSBcIlVOUExBTlwiIHx8XHJcbiAgICAgICAgICB2YWwubW9kdWxlQ29kZSA9PT0gXCJTUFJFQURJTkdcIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSBpZiAocm9sZSA9PT0gXCJQSU1DQUJcIikge1xyXG4gICAgICAgIHJldHVybiB2YWwubW9kdWxlQ29kZSA9PT0gXCJXT1JLLVZJU0lUXCI7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcclxuICAgICAgcmV0dXJuIGF1dGgubWFwKCh2YWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICBmb2N1cyA9PT0gdmFsLm1vZHVsZUNvZGUgPyBzdHlsZXMuZm9jdXNfbWVudSA6IHN0eWxlcy5tZW51XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEZvY3VzKHZhbC5tb2R1bGVDb2RlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3ZhbC5tb2R1bGVDb2RlID09PSBcIlBMQU5cIlxyXG4gICAgICAgICAgICAgID8gXCJQbGFuXCJcclxuICAgICAgICAgICAgICA6IHZhbC5tb2R1bGVDb2RlID09PSBcIlVOUExBTlwiXHJcbiAgICAgICAgICAgICAgPyBcIlVucGxhblwiXHJcbiAgICAgICAgICAgICAgOiB2YWwubW9kdWxlQ29kZSA9PT0gXCJTUFJFQURJTkdcIlxyXG4gICAgICAgICAgICAgID8gXCJTcHJlYWRpbmdcIlxyXG4gICAgICAgICAgICAgIDogdmFsLm1vZHVsZUNvZGUgPT09IFwiV09SSy1WSVNJVFwiXHJcbiAgICAgICAgICAgICAgPyBcIldvcmsgVmlzaXRcIlxyXG4gICAgICAgICAgICAgIDogXCJcIn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGlmIChhdXRoKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgYXV0aC5sZW5ndGggPT09IDNcclxuICAgICAgICAgICAgICA/IHN0eWxlcy5tZW51X2dyaWQzXHJcbiAgICAgICAgICAgICAgOiBhdXRoLmxlbmd0aCA9PT0gMVxyXG4gICAgICAgICAgICAgID8gc3R5bGVzLm1lbnVfZ3JpZDFcclxuICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7cmVuZGVyKCl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyTGlzdCA9ICh0eXBlLCBkYXRhKSA9PiB7XHJcbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIxNXB4XCIsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcInJnYigyMDgsIDIwOCwgMjA4KVwiLFxyXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMzBweCAwXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIE5vIEl0ZW1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBkYXRhLm1hcCgodmFsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBocmVmPXtmb2N1cyA9PT0gXCJQTEFOXCIgPyBgL3Zpc2l0L3BsYW4vJHtkYXRhLmlkTWFzdGVyUGxhbn1gIDogXCIvXCJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE1cHhcIixcclxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI3MDBcIixcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzVFNTg3M1wiLFxyXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTBweCAwXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjEyJSA4OCVcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHR5cGUgPT09IFwiUExBTlwiID8gXCIjRkZGMUNDXCIgOiBcIiNkMWU0ZTFcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjRweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlID09PSBcIlBMQU5cIiA/IFwiI2ZlYjgwMFwiIDogXCIjNDE4NjdhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e3ZhbC5uYW1hT3V0bGV0fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMTRweFwiLCBmb250V2VpZ2h0OiBcIjMwMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAge3ZhbC5hbGFtYXRPdXRsZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJMaXN0V29ya1Zpc2l0ID0gKGRhdGEpID0+IHtcclxuICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjE1cHhcIixcclxuICAgICAgICAgICAgY29sb3I6IFwicmdiKDIwOCwgMjA4LCAyMDgpXCIsXHJcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIzMHB4IDBcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTm8gSXRlbVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGRhdGEubWFwKCh2YWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2B3b3JrLXZpc2l0LyR7dmFsLmlkTWFzdGVyUGxhbn1gfT5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTVweFwiLFxyXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjcwMFwiLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNUU1ODczXCIsXHJcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxMHB4IDBcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMTIlIDg4JVwiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkZGMUNDXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI0cHhcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTJweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTJweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZlYjgwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pnt2YWwubmFtYVNNUn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjE0cHhcIiwgZm9udFdlaWdodDogXCIzMDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIFJheW9uIC0ge3ZhbC5yYXlvbn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjE0cHhcIiwgZm9udFdlaWdodDogXCIzMDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIFByb2R1ayBGb2N1cyAtIHt2YWwucHJvZHVrRm9rdXN9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJQbGFuID0gKCkgPT4ge1xyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPENhcmQgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBtYXJnaW5Ub3A6IFwiMjJweFwiIH19IHNoYWRvdz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmVydmlld30+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9PlxyXG4gICAgICAgICAgICAgICAgICB7bW9tZW50KCkuZm9ybWF0KFwiRCAvIE1NTSAvIFlZWVlcIil9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcIiM1RTU4NzNcIiwgbWFyZ2luVG9wOiBcIjdweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIzNnB4XCIsIGZvbnRXZWlnaHQ6IFwiNjAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3BsYW5IaXN0b3J5Lmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIxOHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgL3twbGFuLmxlbmd0aCArIHBsYW5IaXN0b3J5Lmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjdweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkVCODAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4IDIycHhcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI0MDBcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEFkZCBOZXcgUGxhbiArXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waWVfcGVyY2VudGFnZX0+XHJcbiAgICAgICAgICAgICAgICAgIHtwbGFuSGlzdG9yeS5sZW5ndGggPT09IDBcclxuICAgICAgICAgICAgICAgICAgICA/IFwiMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogYCR7TWF0aC5yb3VuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHBsYW5IaXN0b3J5Lmxlbmd0aCAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKHBsYW4ubGVuZ3RoICsgcGxhbkhpc3RvcnkubGVuZ3RoKSkgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDEwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgKX0lYH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPERvdWdobnV0XHJcbiAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGFQbGFufVxyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtkb251dE9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MTAwfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjJweFwiLCBib3JkZXJSYWRpdXM6IFwiMzBweFwiIH19IHNoYWRvdz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGFuX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxyXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNUU1ODczXCIsXHJcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFlvdXIgUGxhbiBUb2RheVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjIycHggMFwiIH19PntyZW5kZXJMaXN0KFwiUExBTlwiLCBwbGFuKX08L2Rpdj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Zpc2l0L3BsYW5cIj5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9e1wiU2VlIERldGFpbHNcIn0gLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlclNwcmVhZGluZyA9ICgpID0+IHtcclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI1cHhcIiwgbWFyZ2luVG9wOiBcIjIycHhcIiB9fSBzaGFkb3c+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcnZpZXd9PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfT5cclxuICAgICAgICAgICAgICAgICAge21vbWVudCgpLmZvcm1hdChcIkQgLyBNTU0gLyBZWVlZXCIpfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogXCIjNUU1ODczXCIsIG1hcmdpblRvcDogXCI3cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMzZweFwiLCBmb250V2VpZ2h0OiBcIjYwMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzcHJlYWRpbmdIaXN0b3J5Lmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIxOHB4XCIgfX0+L3twbGFuLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3Zpc2l0L3NwcmVhZGluZy9cIn0+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI3cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRUI4MDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4IDIycHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQWRkIE5ldyBOT08gK1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGllX3BlcmNlbnRhZ2V9PjAlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8RG91Z2hudXRcclxuICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YVNwcmVhZGluZ31cclxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZG9udXRPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MTAwfVxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIycHhcIiwgYm9yZGVyUmFkaXVzOiBcIjMwcHhcIiB9fSBzaGFkb3c+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxhbl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcclxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzVFNTg3M1wiLFxyXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTcHJlYWRpbmcgSGlzdG9yeVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjIycHggMFwiIH19PlxyXG4gICAgICAgICAgICAgICAge3JlbmRlckxpc3QoXCJTUFJFQURJTkdcIiwgc3ByZWFkaW5nSGlzdG9yeSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi92aXNpdC9zcHJlYWRpbmcvaGlzdG9yeVwiPlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD17XCJTZWUgRGV0YWlsc1wifSAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyVW5wbGFuID0gKCkgPT4ge1xyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPENhcmQgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBtYXJnaW5Ub3A6IFwiMjJweFwiIH19IHNoYWRvdz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51bnBsYW5fZ3JpZH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5udW1fdG90YWxfdW5wbGFufT5cclxuICAgICAgICAgICAgICAgIHt1bnBsYW5IaXN0b3J5Lmxlbmd0aH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjE0cHhcIiB9fT5Ub3RhbCBVbnBsYW4gVmlzaXQ8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9Pnttb21lbnQoKS5mb3JtYXQoXCJNTU1NXCIpfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI1cHhcIiwgbWFyZ2luVG9wOiBcIjExcHhcIiB9fSBzaGFkb3c+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdmlzaXQvdW5wbGFuXCI+XHJcbiAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51bnBsYW5fZ3JpZDJ9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZF91bnBsYW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIi04cHhcIiB9fT4rPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjE2cHhcIiwgZm9udFdlaWdodDogXCI2MDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICBBbnkgVW5wbGFuIFZpc2l0P1xyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNCOUI5QzNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCIzMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTNweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBBZGQgeW91ciB1bnBsYW4gdmlzaXQgaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcIi9uZXh0LnN2Z1wifSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMnB4XCIsIGJvcmRlclJhZGl1czogXCIzMHB4XCIgfX0gc2hhZG93PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsYW5fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxOHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1RTU4NzNcIixcclxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgVW5wbGFuIFZpc2l0IEhpc3RvcnlcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIyMnB4IDBcIiB9fT5cclxuICAgICAgICAgICAgICAgIHtyZW5kZXJMaXN0KFwiVU5QTEFOXCIsIHVucGxhbkhpc3RvcnkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdmlzaXQvdW5wbGFuL2hpc3RvcnlcIj5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9e1wiU2VlIERldGFpbHNcIn0gLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlcldvcmtWaXNpdCA9ICgpID0+IHtcclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI1cHhcIiwgbWFyZ2luVG9wOiBcIjIycHhcIiB9fSBzaGFkb3c+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcnZpZXd9PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfT5cclxuICAgICAgICAgICAgICAgICAge21vbWVudCgpLmZvcm1hdChcIkQgLyBNTU0gLyBZWVlZXCIpfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogXCIjNUU1ODczXCIsIG1hcmdpblRvcDogXCI3cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMzZweFwiLCBmb250V2VpZ2h0OiBcIjYwMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHt3b3JrVmlzaXRIaXN0b3J5Lmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIxOHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgL3t3b3JrVmlzaXQubGVuZ3RoICsgd29ya1Zpc2l0SGlzdG9yeS5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI3cHhcIixcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZFQjgwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweCAyMnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBBZGQgTmV3ICtcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBpZV9wZXJjZW50YWdlfT5cclxuICAgICAgICAgICAgICAgICAge3dvcmtWaXNpdEhpc3RvcnkubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIjAlXCJcclxuICAgICAgICAgICAgICAgICAgICA6IGAke01hdGgucm91bmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh3b3JrVmlzaXRIaXN0b3J5Lmxlbmd0aCAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKHdvcmtWaXNpdC5sZW5ndGggKyB3b3JrVmlzaXRIaXN0b3J5Lmxlbmd0aCkpICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAxMDBcclxuICAgICAgICAgICAgICAgICAgICAgICl9JWB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxEb3VnaG51dFxyXG4gICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhV29ya1Zpc2l0fVxyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtkb251dE9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MTAwfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjJweFwiLCBib3JkZXJSYWRpdXM6IFwiMzBweFwiIH19IHNoYWRvdz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGFuX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxyXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNUU1ODczXCIsXHJcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFlvdXIgV29yayBWaXNpdCBUb2RheVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjIycHggMFwiIH19PlxyXG4gICAgICAgICAgICAgICAge3JlbmRlckxpc3RXb3JrVmlzaXQod29ya1Zpc2l0KX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3dvcmstdmlzaXRcIj5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9e1wiU2VlIERldGFpbHNcIn0gLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlcldvcmtEYXkgPSAoKSA9PiB7XHJcbiAgICBpZiAod29ya0RheS5sZW5ndGggIT09IDAgJiYgIWxvYWRpbmcgJiYgIWxvYWRpbmdNZW51KSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIycHhcIiwgYm9yZGVyUmFkaXVzOiBcIjZweFwiIH19IHNoYWRvdz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxhbl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX3RpdGxlfT5cclxuICAgICAgICAgICAgICBXb3JraW5nIERheSB7bW9tZW50KCkuZm9ybWF0KFwiTU1NTSBZWVlZXCIpfVxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFdlaWdodDogXCI3MDBcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiNGRUI4MDBcIiB9fT57d29ya0RheS5oYXJpS2VyamF9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMTJweFwiLCBmb250V2VpZ2h0OiBcIjQwMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICB7XCIgLyBcIn1cclxuICAgICAgICAgICAgICAgICAge3dvcmtEYXkudG90YWxIYXJpS2VyamF9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVyUHJvZ3Jlc3MgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByZW5kZXJTYWxlcyA9ICh0aXRsZSwgZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjFmciAyZnJcIiB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc190aXRsZX0+e3RpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX251bWJlcn0+XHJcbiAgICAgICAgICAgICAge2RhdGEuc2FsZXMudG9Mb2NhbGVTdHJpbmcoXCJpZC1JRFwiKX1cclxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIxMnB4XCIsIGZvbnRXZWlnaHQ6IFwiNDAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICB7XCIgLyBcIn1cclxuICAgICAgICAgICAgICAgIHtkYXRhLnRhcmdldC50b0xvY2FsZVN0cmluZyhcImlkLUlEXCIpfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjEzcHggMCAwIDBcIiB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJ9PjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfYmFyX25vd31cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGAkeyhkYXRhLnNhbGVzIC8gZGF0YS50YXJnZXQpICogMTAwfSVgLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG4gICAgfTtcclxuICAgIGlmIChcclxuICAgICAgc2FsZXNUYXJnZXQubGVuZ3RoICE9PSAwICYmXHJcbiAgICAgIHNhbGVzVGFyZ2V0NzUubGVuZ3RoICE9PSAwICYmXHJcbiAgICAgIHByb2R1a3RpZml0YXMubGVuZ3RoICE9PSAwICYmXHJcbiAgICAgIGZyb250bGluZXIubGVuZ3RoICE9PSAwICYmXHJcbiAgICAgICFsb2FkaW5nICYmXHJcbiAgICAgICFsb2FkaW5nTWVudVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIycHhcIiwgYm9yZGVyUmFkaXVzOiBcIjZweFwiIH19IHNoYWRvdz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxhbl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICB7cmVuZGVyU2FsZXMoXCJTYWxlc1wiLCBzYWxlc1RhcmdldCl9XHJcbiAgICAgICAgICAgIHtyZW5kZXJTYWxlcyhcIlNhbGVzIDc1JVwiLCBzYWxlc1RhcmdldDc1KX1cclxuICAgICAgICAgICAge3JlbmRlclNhbGVzKFwiU2FsZXMgTk9PXCIsIE5PTyl9XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyIDFmclwiIH19PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfdGl0bGV9PkZyb250bGluZXI8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX251bWJlcn0+XHJcbiAgICAgICAgICAgICAgICB7ZnJvbnRsaW5lci5hY2h9XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIxMnB4XCIsIGZvbnRXZWlnaHQ6IFwiNDAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiAvIFwifVxyXG4gICAgICAgICAgICAgICAgICB7ZnJvbnRsaW5lci50YXJnZXR9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxM3B4IDAgMCAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJ9PjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcl9ub3d9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogYCR7KGZyb250bGluZXIuYWNoIC8gZnJvbnRsaW5lci50YXJnZXQpICogMTAwfSVgLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjFmciAxZnJcIiB9fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX3RpdGxlfT5Qcm9kdWt0aWZpdGFzPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19udW1iZXJ9PlxyXG4gICAgICAgICAgICAgICAge3Byb2R1a3RpZml0YXMuYWNoaWV2ZW1lbnR9XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIxMnB4XCIsIGZvbnRXZWlnaHQ6IFwiNDAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiAvIFwifVxyXG4gICAgICAgICAgICAgICAgICB7cHJvZHVrdGlmaXRhcy50YXJnZXR9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxM3B4IDAgMCAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJ9PjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcl9ub3d9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogYCR7XHJcbiAgICAgICAgICAgICAgICAgICAgKHByb2R1a3RpZml0YXMuYWNoaWV2ZW1lbnQgLyBwcm9kdWt0aWZpdGFzLnRhcmdldCkgKiAxMDBcclxuICAgICAgICAgICAgICAgICAgfSVgLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlclBhZ2UgPSAoKSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGxvYWRpbmcgJiZcclxuICAgICAgbG9hZGluZ01lbnUgJiZcclxuICAgICAgc2FsZXNUYXJnZXQubGVuZ3RoID09IDAgJiZcclxuICAgICAgc2FsZXNUYXJnZXQ3NS5sZW5ndGggPT0gMCAmJlxyXG4gICAgICBwcm9kdWt0aWZpdGFzLmxlbmd0aCA9PSAwICYmXHJcbiAgICAgIGZyb250bGluZXIubGVuZ3RoID09IDAgJiZcclxuICAgICAgd29ya0RheS5sZW5ndGggPT0gMFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+SG9tZTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJnX3RvcH0gLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfaW5mb19ncmlkfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMucHB9IHNyYz1cIi9wcC5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjE1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIxNHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3N0YXRlLnVzZXJSZWR1Y2VyLnVzZXIubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMTJweFwiIH19Pntyb2xlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9hbm5vdW5jZW1lbnRcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5ub3RpZn0gc3JjPVwiL25vdGlmLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7bm90aWYgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiIHJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiLTMwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBcIi0xNHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIxcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE4cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZWI4MDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTJweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25ld0Fubm91bmNlbWVudC5sZW5ndGggPCA5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBuZXdBbm5vdW5jZW1lbnQubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIjkrXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICAgICAgICAgICAge3JlbmRlclRvcE1lbnUoKX1cclxuICAgICAgICAgICAgICAgICAge2ZvY3VzID09PSBcIlBMQU5cIlxyXG4gICAgICAgICAgICAgICAgICAgID8gcmVuZGVyUGxhbigpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBmb2N1cyA9PT0gXCJVTlBMQU5cIlxyXG4gICAgICAgICAgICAgICAgICAgID8gcmVuZGVyVW5wbGFuKClcclxuICAgICAgICAgICAgICAgICAgICA6IGZvY3VzID09PSBcIlNQUkVBRElOR1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPyByZW5kZXJTcHJlYWRpbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgIDogZm9jdXMgPT09IFwiV09SSy1WSVNJVFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyByZW5kZXJXb3JrVmlzaXQoKVxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAge3JlbmRlcldvcmtEYXkoKX1cclxuICAgICAgICAgICAgICAgICAge3JlbmRlclByb2dyZXNzKCl9XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEyMHB4XCIgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEJvdE5hdiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIHJlbmRlclBhZ2UoKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9