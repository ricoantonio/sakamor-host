(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/BotNav.jsx":
/*!*******************************!*\
  !*** ./components/BotNav.jsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_components_BotNav_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/BotNav.module.css */ "./styles/components/BotNav.module.css");
/* harmony import */ var _styles_components_BotNav_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_BotNav_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-front-end\\components\\BotNav.jsx";





const Nav = ({
  focus
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  var active = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: {
      width: "5px",
      height: "5px",
      backgroundColor: "#feb800",
      margin: "5px auto",
      borderRadius: "50px"
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_components_BotNav_module_css__WEBPACK_IMPORTED_MODULE_4___default().nav_container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_components_BotNav_module_css__WEBPACK_IMPORTED_MODULE_4___default().nav_box),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: router.pathname === "/" ? "/home-nav.svg" : "/home-nav1.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, undefined), router.pathname === "/" ? active : ""]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/calendar",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: router.pathname === "/calendar" ? "/calendar-nav.svg" : "/calendar-nav1.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, undefined), router.pathname === "/calendar" ? active : ""]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/reward",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: router.pathname === "/reward" ? "/award-nav.svg" : "/award-nav1.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, undefined), router.pathname === "/reward" ? active : ""]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: router.pathname === "/announcement" ? "/rewards-nav.svg" : "/rewards-nav1.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, undefined), router.pathname === "/announcement" ? active : ""]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/profile",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: router.pathname === "/profile" ? "/profile-nav.svg" : "/profile-nav1.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, undefined), router.pathname === "/profile" ? active : ""]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/Card.jsx":
/*!*****************************!*\
  !*** ./components/Card.jsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_components_Card_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/components/Card.module.css */ "./styles/components/Card.module.css");
/* harmony import */ var _styles_components_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Card_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-front-end\\components\\Card.jsx";



const Card = ({
  children,
  style,
  shadow
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: `${(_styles_components_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().container)} ${shadow ? (_styles_components_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default().shadow) : ""}`,
    style: style ? style : {},
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styles/pages/Home.module.css */ "./styles/pages/Home.module.css");
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./store/index.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Spinner */ "./components/Spinner.jsx");
/* harmony import */ var _components_BotNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/BotNav */ "./components/BotNav.jsx");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Button */ "./components/Button.jsx");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Card */ "./components/Card.jsx");
/* harmony import */ var _webpush__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../webpush */ "./webpush.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helper */ "./helper.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_14__);


var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-front-end\\pages\\index.jsx";















function Home() {
  const {
    state,
    dispatch,
    actions
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store__WEBPACK_IMPORTED_MODULE_5__.Stores);
  const {
    0: focus,
    1: setFocus
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: plan,
    1: setPlan
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: workVisit,
    1: setWorkVisit
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: workVisitHistory,
    1: setWorkVisitHistory
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: planHistory,
    1: setPlanHistory
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: spreadingHistory,
    1: setSpreadingHistory
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: unplanHistory,
    1: setUnplanHistory
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: role,
    1: setRole
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: topMenu,
    1: setTopMenu
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: loadingMenu,
    1: setLoadingMenu
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: newAnnouncement,
    1: setNewAnnouncement
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: notif,
    1: setNotif
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: salesTarget,
    1: setSalesTarget
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: salesTarget75,
    1: setSalesTarget75
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: produktifitas,
    1: setProduktifitas
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: frontliner,
    1: setFrontliner
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: NOO,
    1: setNOO
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: workDay,
    1: setWorkDay
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const isMounted = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);
  const dataPlan = {
    datasets: [{
      data: planHistory.length === 0 ? [0, 1] : [planHistory.length, plan.length],
      backgroundColor: ["#41867a", "#d1e4e1"]
    }]
  };
  const dataSpreading = {
    datasets: [{
      data: spreadingHistory.length === 0 ? [0, 1] : [0, 1],
      backgroundColor: ["#41867a", "#d1e4e1"]
    }]
  };
  const dataWorkVisit = {
    datasets: [{
      data: workVisitHistory.length === 0 ? [0, 1] : [workVisitHistory.length, workVisit.length],
      backgroundColor: ["#41867a", "#d1e4e1"]
    }]
  };
  const donutOptions = {
    cutoutPercentage: 75,
    tooltips: {
      enabled: false
    },
    hover: {
      mode: null
    },
    responsive: true,
    maintainAspectRatio: true
  }; // useEffect(() => {
  //   if (isMounted.current) {
  //     setToken();
  //     async function setToken() {
  //       try {
  //         const token = await firebaseCloudMessaging.init();
  //         if (token) {
  //           getMessage();
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //     function getMessage() {
  //       const messaging = firebase.messaging();
  //       console.log({ messaging });
  //       messaging.onMessage((message) => {
  //         setNotif(true);
  //       });
  //     }
  //   }
  //   return () => {
  //     isMounted.current = false;
  //   };
  // }, [isMounted]);

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const userData = JSON.parse(localStorage.getItem("user"));

    if (userData) {
      (0,_helper__WEBPACK_IMPORTED_MODULE_12__.getAllAnnouncement)(userData).then(data => {
        const newAnnouncement = data.filter(val => {
          return val.isRead === false;
        });
        setNewAnnouncement(newAnnouncement);

        if (newAnnouncement.length > 0) {
          setNotif(true);
        } else {
          setNotif(false);
        }
      }).catch(err => {
        console.log(err);
      });
      (0,_helper__WEBPACK_IMPORTED_MODULE_12__.getWorkDay)().then(data => {
        setWorkDay(data);
      }).catch(err => {
        console.log(err);
      });
    }
  }, [dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const userData = JSON.parse(localStorage.getItem("user"));

    if (userData) {
      actions.userLogin(userData);
      (0,_helper__WEBPACK_IMPORTED_MODULE_12__.getMenu)(userData).then(data => {
        actions.setMenu(data);
        setTopMenu(data);
        setLoadingMenu(false);
      }).catch(err => {
        console.log(err);
      });
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/");
    }
  }, [dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    var month = moment__WEBPACK_IMPORTED_MODULE_14___default()().format("M");
    var year = moment__WEBPACK_IMPORTED_MODULE_14___default()().format("Y");

    if (userData) {
      (0,_helper__WEBPACK_IMPORTED_MODULE_12__.getAuth)(userData).then(data => {
        if (data[0].roleCode === "PIMCAB") {
          setRole("PIMCAB");
          setFocus("WORK-VISIT");
          (0,_helper__WEBPACK_IMPORTED_MODULE_12__.getSalesTarget75Pimca)(userData, month, year).then(data => {
            if (data) {
              setSalesTarget75(data);
            }
          }).catch(err => console.log(err));
          (0,_helper__WEBPACK_IMPORTED_MODULE_12__.getSalesTargetPimca)(userData, month, year).then(data => {
            if (data) {
              setSalesTarget(data);
            }
          }).catch(err => console.log(err));
          (0,_helper__WEBPACK_IMPORTED_MODULE_12__.getFrontlinerPimca)(userData, month, year).then(data => {
            if (data) {
              setFrontliner(data);
            }
          }).catch(err => console.log(err));
        } else if (data[0].roleCode === "SMR") {
          setRole("SMR");
          setFocus("PLAN");
          (0,_helper__WEBPACK_IMPORTED_MODULE_12__.getSalesTargetSMR)(userData, month, year).then(data => {
            if (data) {
              setSalesTarget(data); // console.log(data);
            }
          }).catch(err => {
            console.log(err);
          });
          (0,_helper__WEBPACK_IMPORTED_MODULE_12__.getSalesTarget75SMR)(userData, month, year).then(data => {
            if (data) {
              setSalesTarget75(data); // console.log(data);
            }
          }).catch(err => {
            console.log(err);
          });
          (0,_helper__WEBPACK_IMPORTED_MODULE_12__.getProduktifitas)(userData, month, year).then(data => {
            if (data) {
              setProduktifitas(data); // console.log(data);
            }
          }).catch(err => {
            console.log(err);
          });
          (0,_helper__WEBPACK_IMPORTED_MODULE_12__.getFrontliner)(userData, month, year).then(data => {
            if (data) {
              setFrontliner(data); // console.log(data);
            }
          }).catch(err => {
            console.log(err);
          });
          (0,_helper__WEBPACK_IMPORTED_MODULE_12__.getNoo)(userData, month, year).then(data => {
            if (data) {
              setNOO(data); // console.log(data);
            }
          }).catch(err => {
            console.log(err);
          });
        }
      }).catch(err => {
        console.log(err);
      });
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/");
    }
  }, [dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setLoading(true);
    const userData = JSON.parse(localStorage.getItem("user"));

    if (userData) {
      if (focus === "PLAN") {
        (0,_helper__WEBPACK_IMPORTED_MODULE_12__.getPlanList)(userData).then(data => {
          setPlan(data);
          setLoading(false);
        }).catch(err => {
          console.log(err);
        });
      } else if (focus === "WORK-VISIT") {
        (0,_helper__WEBPACK_IMPORTED_MODULE_12__.getAllWorkVisit)(userData).then(data => {
          console.log(data);
          setWorkVisit(data.filter(val => {
            return val.isPenilaian === false;
          }));
          setWorkVisitHistory(data.filter(val => {
            return val.isPenilaian === true;
          }));
          setLoading(false);
        }).catch(err => {
          console.log(err);
        });
      }
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/");
    }
  }, [focus]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const userData = JSON.parse(localStorage.getItem("user"));

    if (focus === "PLAN") {
      (0,_helper__WEBPACK_IMPORTED_MODULE_12__.getPlanHistory)(userData).then(data => {
        setPlanHistory(data);
        setLoading(false); // console.log(data);
      }).catch(err => {
        console.log(err);
      });
    } else if (focus === "UNPLAN") {
      (0,_helper__WEBPACK_IMPORTED_MODULE_12__.getUnplanMonthlyHistory)(userData).then(data => {
        // console.log(data);
        setUnplanHistory(data);
        setLoading(false);
      }).catch(err => {
        console.log(err);
      });
    } else if (focus === "SPREADING") {
      (0,_helper__WEBPACK_IMPORTED_MODULE_12__.getSpreadingMonthlyHistory)(userData).then(data => {
        // console.log(data);
        setSpreadingHistory(data);
        setLoading(false);
      }).catch(err => {
        console.log(err);
      });
    }
  }, [focus]);

  const renderTopMenu = () => {
    var auth = topMenu.filter(val => {
      if (role === "SMR") {
        return val.moduleCode === "PLAN" || val.moduleCode === "UNPLAN" || val.moduleCode === "SPREADING";
      } else if (role === "PIMCAB") {
        return val.moduleCode === "WORK-VISIT";
      }
    });

    const render = () => {
      return auth.map((val, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: focus === val.moduleCode ? (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().focus_menu) : (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().menu),
          onClick: () => {
            setFocus(val.moduleCode);
          },
          children: val.moduleCode === "PLAN" ? "Plan" : val.moduleCode === "UNPLAN" ? "Unplan" : val.moduleCode === "SPREADING" ? "Spreading" : val.moduleCode === "WORK-VISIT" ? "Work Visit" : ""
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 354,
          columnNumber: 11
        }, this);
      });
    };

    if (auth) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: auth.length === 3 ? (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().menu_grid3) : auth.length === 1 ? (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().menu_grid1) : "",
        children: render()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 378,
        columnNumber: 9
      }, this);
    }
  };

  const renderList = (type, data) => {
    if (data.length === 0) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          fontSize: "15px",
          color: "rgb(208, 208, 208)",
          textAlign: "left",
          margin: "30px 0"
        },
        children: "No Item"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 396,
        columnNumber: 9
      }, this);
    } else {
      return data.map((val, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
          href: focus === "PLAN" ? `/visit/plan/${data.idMasterPlan}` : "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                fontSize: "15px",
                fontWeight: "700",
                color: "#5E5873",
                textAlign: "left",
                margin: "10px 0"
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  display: "grid",
                  gridTemplateColumns: "12% 88%"
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  style: {
                    width: "20px",
                    height: "20px",
                    backgroundColor: type === "PLAN" ? "#FFF1CC" : "#d1e4e1",
                    borderRadius: "20px",
                    padding: "4px"
                  },
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    style: {
                      width: "12px",
                      height: "12px",
                      backgroundColor: type === "PLAN" ? "#feb800" : "#41867a",
                      borderRadius: "20px"
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 436,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 427,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    children: val.namaOutlet
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 447,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    style: {
                      fontSize: "14px",
                      fontWeight: "300"
                    },
                    children: val.alamatOutlet
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 448,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 446,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 424,
                columnNumber: 17
              }, this)
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 414,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 413,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 410,
          columnNumber: 11
        }, this);
      });
    }
  };

  const renderListWorkVisit = data => {
    if (data.length === 0) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          fontSize: "15px",
          color: "rgb(208, 208, 208)",
          textAlign: "left",
          margin: "30px 0"
        },
        children: "No Item"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 464,
        columnNumber: 9
      }, this);
    } else {
      return data.map((val, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
          href: `work-visit/${val.idMasterPlan}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                fontSize: "15px",
                fontWeight: "700",
                color: "#5E5873",
                textAlign: "left",
                margin: "10px 0"
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  display: "grid",
                  gridTemplateColumns: "12% 88%"
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  style: {
                    width: "20px",
                    height: "20px",
                    backgroundColor: "#FFF1CC",
                    borderRadius: "20px",
                    padding: "4px"
                  },
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    style: {
                      width: "12px",
                      height: "12px",
                      backgroundColor: "#feb800",
                      borderRadius: "20px"
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 502,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 493,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    children: val.namaSMR
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 512,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    style: {
                      fontSize: "14px",
                      fontWeight: "300"
                    },
                    children: ["Rayon - ", val.rayon]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 513,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    style: {
                      fontSize: "14px",
                      fontWeight: "300"
                    },
                    children: ["Produk Focus - ", val.produkFokus]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 516,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 511,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 490,
                columnNumber: 17
              }, this)
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 480,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 479,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 478,
          columnNumber: 11
        }, this);
      });
    }
  };

  const renderPlan = () => {
    if (loading) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Spinner__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 531,
        columnNumber: 14
      }, this);
    } else {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_9__.default, {
          style: {
            borderRadius: "5px",
            marginTop: "22px"
          },
          shadow: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().overview),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().date),
                children: moment__WEBPACK_IMPORTED_MODULE_14___default()().format("D / MMM / YYYY")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 538,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  color: "#5E5873",
                  marginTop: "7px"
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    fontSize: "36px",
                    fontWeight: "600"
                  },
                  children: planHistory.length
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 542,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    fontSize: "18px"
                  },
                  children: ["/", plan.length + planHistory.length]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 545,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 541,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                href: "/master-plan-visit",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
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
                    lineNumber: 551,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 550,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 549,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 537,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().pie_percentage),
                children: planHistory.length === 0 ? "0%" : `${Math.round(planHistory.length / (plan.length + planHistory.length) * 100)}%`
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 569,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_13__.Doughnut, {
                data: dataPlan,
                options: donutOptions,
                width: 100,
                height: 100
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 578,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 568,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 536,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 535,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_9__.default, {
          style: {
            marginTop: "22px",
            borderRadius: "30px"
          },
          shadow: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().plan_container),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                fontSize: "18px",
                fontWeight: "500",
                color: "#5E5873",
                textAlign: "left"
              },
              children: "Your Plan Today"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 589,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                margin: "22px 0"
              },
              children: renderList("PLAN", plan)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 599,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
              href: "/visit/plan",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
                  text: "See Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 602,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 601,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 600,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 588,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 587,
          columnNumber: 11
        }, this)]
      }, void 0, true);
    }
  };

  const renderSpreading = () => {
    if (loading) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Spinner__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 614,
        columnNumber: 14
      }, this);
    } else {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_9__.default, {
          style: {
            borderRadius: "5px",
            marginTop: "22px"
          },
          shadow: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().overview),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().date),
                children: moment__WEBPACK_IMPORTED_MODULE_14___default()().format("D / MMM / YYYY")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 621,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  color: "#5E5873",
                  marginTop: "7px"
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    fontSize: "36px",
                    fontWeight: "600"
                  },
                  children: spreadingHistory.length
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 625,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    fontSize: "18px"
                  },
                  children: ["/", plan.length]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 628,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 624,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                href: "/visit/spreading/",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
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
                    lineNumber: 632,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 631,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 630,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 620,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().pie_percentage),
                children: "0%"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 650,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_13__.Doughnut, {
                data: dataSpreading,
                options: donutOptions,
                width: 100,
                height: 100
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 651,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 649,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 619,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 618,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_9__.default, {
          style: {
            marginTop: "22px",
            borderRadius: "30px"
          },
          shadow: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().plan_container),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                fontSize: "18px",
                fontWeight: "500",
                color: "#5E5873",
                textAlign: "left"
              },
              children: "Spreading History"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 662,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                margin: "22px 0"
              },
              children: renderList("SPREADING", spreadingHistory)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 672,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
              href: "/visit/spreading/history",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
                  text: "See Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 677,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 676,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 675,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 661,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 660,
          columnNumber: 11
        }, this)]
      }, void 0, true);
    }
  };

  const renderUnplan = () => {
    if (loading) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Spinner__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 689,
        columnNumber: 14
      }, this);
    } else {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_9__.default, {
          style: {
            borderRadius: "5px",
            marginTop: "22px"
          },
          shadow: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().unplan_grid),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().num_total_unplan),
              children: unplanHistory.length
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 695,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                fontSize: "14px"
              },
              children: "Total Unplan Visit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 698,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().date),
              children: moment__WEBPACK_IMPORTED_MODULE_14___default()().format("MMMM")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 699,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 694,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 693,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_9__.default, {
          style: {
            borderRadius: "5px",
            marginTop: "11px"
          },
          shadow: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
            href: "/visit/unplan",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              style: {
                textDecoration: "none"
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().unplan_grid2),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().add_unplan),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    style: {
                      marginTop: "-8px"
                    },
                    children: "+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 707,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 706,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  style: {
                    fontSize: "16px",
                    fontWeight: "600"
                  },
                  children: ["Any Unplan Visit?", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    style: {
                      color: "#B9B9C3",
                      fontWeight: "300",
                      fontSize: "13px"
                    },
                    children: "Add your unplan visit here"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 711,
                    columnNumber: 21
                  }, this), " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 709,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  style: {
                    textAlign: "center"
                  },
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                    src: "/next.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 722,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 721,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 705,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 704,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 703,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 702,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_9__.default, {
          style: {
            marginTop: "22px",
            borderRadius: "30px"
          },
          shadow: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().plan_container),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                fontSize: "18px",
                fontWeight: "500",
                color: "#5E5873",
                textAlign: "left"
              },
              children: "Unplan Visit History"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 731,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                margin: "22px 0"
              },
              children: renderList("UNPLAN", unplanHistory)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 741,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
              href: "/visit/unplan/history",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
                  text: "See Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 746,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 745,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 744,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 730,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 729,
          columnNumber: 11
        }, this)]
      }, void 0, true);
    }
  };

  const renderWorkVisit = () => {
    if (loading) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Spinner__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 758,
        columnNumber: 14
      }, this);
    } else {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_9__.default, {
          style: {
            borderRadius: "5px",
            marginTop: "22px"
          },
          shadow: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().overview),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().date),
                children: moment__WEBPACK_IMPORTED_MODULE_14___default()().format("D / MMM / YYYY")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 765,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  color: "#5E5873",
                  marginTop: "7px"
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    fontSize: "36px",
                    fontWeight: "600"
                  },
                  children: workVisitHistory.length
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 769,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    fontSize: "18px"
                  },
                  children: ["/", workVisit.length + workVisitHistory.length]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 772,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 768,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                href: "/master-work-visit",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
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
                    lineNumber: 778,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 777,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 776,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 764,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().pie_percentage),
                children: workVisitHistory.length === 0 ? "0%" : `${Math.round(workVisitHistory.length / (workVisit.length + workVisitHistory.length) * 100)}%`
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 796,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_13__.Doughnut, {
                data: dataWorkVisit,
                options: donutOptions,
                width: 100,
                height: 100
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 805,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 795,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 763,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 762,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_9__.default, {
          style: {
            marginTop: "22px",
            borderRadius: "30px"
          },
          shadow: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().plan_container),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                fontSize: "18px",
                fontWeight: "500",
                color: "#5E5873",
                textAlign: "left"
              },
              children: "Your Work Visit Today"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 816,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                margin: "22px 0"
              },
              children: renderListWorkVisit(workVisit)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 826,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
              href: "/work-visit",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
                  text: "See Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 831,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 830,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 829,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 815,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 814,
          columnNumber: 11
        }, this)]
      }, void 0, true);
    }
  };

  const renderWorkDay = () => {
    if (workDay.length !== 0 && !loading && !loadingMenu) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_9__.default, {
        style: {
          marginTop: "22px",
          borderRadius: "6px"
        },
        shadow: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().plan_container),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().progress_title),
            children: ["Working Day ", moment__WEBPACK_IMPORTED_MODULE_14___default()().format("MMMM YYYY"), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                fontWeight: "700"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                style: {
                  color: "#FEB800"
                },
                children: workDay.hariKerja
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 849,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                style: {
                  fontSize: "12px",
                  fontWeight: "400"
                },
                children: [" / ", workDay.totalHariKerja]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 850,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 848,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 846,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 845,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 844,
        columnNumber: 9
      }, this);
    }
  };

  const renderProgress = () => {
    const renderSales = (title, data) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            display: "grid",
            gridTemplateColumns: "1fr 2fr"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().progress_title),
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 866,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().progress_number),
            children: [data.sales.toLocaleString("id-ID"), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              style: {
                fontSize: "12px",
                fontWeight: "400"
              },
              children: [" / ", data.target.toLocaleString("id-ID")]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 869,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 867,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 865,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            margin: "13px 0 0 0"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().progress_bar)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 876,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().progress_bar_now),
            style: {
              width: `${data.sales / data.target * 100}%`
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 877,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 875,
          columnNumber: 11
        }, this)]
      }, void 0, true);
    };

    if (!loading && !loadingMenu) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_9__.default, {
        style: {
          marginTop: "22px",
          borderRadius: "6px"
        },
        shadow: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().plan_container),
          children: [salesTarget.length !== 0 ? renderSales("Sales", salesTarget) : "", salesTarget75.length !== 0 ? renderSales("Sales 75%", salesTarget75) : "", NOO.length !== 0 ? renderSales("Sales NOO", NOO) : "", frontliner.length !== 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "1fr 1fr"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().progress_title),
                children: "Frontliner"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 901,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().progress_number),
                children: [frontliner.ach, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    fontSize: "12px",
                    fontWeight: "400"
                  },
                  children: [" / ", frontliner.target]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 904,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 902,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 898,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                margin: "13px 0 0 0"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().progress_bar)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 911,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().progress_bar_now),
                style: {
                  width: `${frontliner.ach / frontliner.target * 100}%`
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 912,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 910,
              columnNumber: 17
            }, this)]
          }, void 0, true) : "", produktifitas.length !== 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "1fr 1fr"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().progress_title),
                children: "Produktifitas"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 928,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().progress_number),
                children: [produktifitas.achievement, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    fontSize: "12px",
                    fontWeight: "400"
                  },
                  children: [" / ", produktifitas.target]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 931,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 929,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 925,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                margin: "13px 0 0 0"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().progress_bar)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 938,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().progress_bar_now),
                style: {
                  width: `${produktifitas.achievement / produktifitas.target * 100}%`
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 939,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 937,
              columnNumber: 17
            }, this)]
          }, void 0, true) : ""]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 890,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 889,
        columnNumber: 9
      }, this);
    }
  };

  const renderPage = () => {
    if (loading && loadingMenu) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Spinner__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 962,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BotNav__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 963,
          columnNumber: 11
        }, this)]
      }, void 0, true);
    } else {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 970,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
            rel: "icon",
            href: "/favicon.ico"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 971,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 969,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().container),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().wrapper),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().bg_top)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 975,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().user_info_grid),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().pp),
                src: "/pp.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 977,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  marginLeft: "15px"
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  style: {
                    fontSize: "14px"
                  },
                  children: state.userReducer.user.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 979,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  style: {
                    fontSize: "12px"
                  },
                  children: role
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 982,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 978,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                  href: "/announcement",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    style: {
                      textDecoration: "none"
                    },
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                      className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().notif),
                      src: "/notif.svg"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 987,
                      columnNumber: 23
                    }, this), notif ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      style: {
                        position: " relative",
                        top: "-30px",
                        right: "-14px"
                      },
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        style: {
                          width: "21px",
                          height: "18px",
                          borderRadius: "20px",
                          backgroundColor: "#feb800",
                          position: "relative",
                          color: "white",
                          fontSize: "12px"
                        },
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                          style: {
                            textAlign: "center"
                          },
                          children: newAnnouncement.length < 9 ? newAnnouncement.length : "9+"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1007,
                          columnNumber: 29
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 996,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 989,
                      columnNumber: 25
                    }, this) : null]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 986,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 985,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 984,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().main),
                children: [renderTopMenu(), focus === "PLAN" ? renderPlan() : focus === "UNPLAN" ? renderUnplan() : focus === "SPREADING" ? renderSpreading() : focus === "WORK-VISIT" ? renderWorkVisit() : "", renderWorkDay(), renderProgress(), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  style: {
                    marginBottom: "120px"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1031,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1018,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 976,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 974,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 973,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BotNav__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1036,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 968,
        columnNumber: 9
      }, this);
    }
  };

  return renderPage();
}

/***/ }),

/***/ "./styles/components/BotNav.module.css":
/*!*********************************************!*\
  !*** ./styles/components/BotNav.module.css ***!
  \*********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"nav_container": "BotNav_nav_container__1kQb5",
	"nav_box": "BotNav_nav_box__1SPyV",
	"nav_img": "BotNav_nav_img__3PT9U"
};


/***/ }),

/***/ "./styles/components/Card.module.css":
/*!*******************************************!*\
  !*** ./styles/components/Card.module.css ***!
  \*******************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Card_container__2ez1c",
	"shadow": "Card_shadow__Tq5_x"
};


/***/ }),

/***/ "./styles/pages/Home.module.css":
/*!**************************************!*\
  !*** ./styles/pages/Home.module.css ***!
  \**************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Home_container__3QklT",
	"wrapper": "Home_wrapper__3Gv1v",
	"bg_top": "Home_bg_top__TTzrU",
	"user_info_grid": "Home_user_info_grid__iZOny",
	"pp": "Home_pp__2X_vJ",
	"notif": "Home_notif__2xDOH",
	"menu_grid3": "Home_menu_grid3__3ce1S",
	"menu_grid1": "Home_menu_grid1__1csAD",
	"focus_menu": "Home_focus_menu__1YbGF",
	"menu": "Home_menu__37o2Y",
	"overview": "Home_overview__25tCc",
	"date": "Home_date__14oi1",
	"plan_container": "Home_plan_container__386cp",
	"main": "Home_main__2AqCK",
	"unplan_grid": "Home_unplan_grid__3xqag",
	"unplan_grid2": "Home_unplan_grid2__1pGU3",
	"num_total_unplan": "Home_num_total_unplan__3o6KP",
	"add_unplan": "Home_add_unplan__3NyOw",
	"pie_percentage": "Home_pie_percentage__36a2e",
	"progress_title": "Home_progress_title__2RTYO",
	"progress_number": "Home_progress_number__2Qv_r",
	"progress_bar": "Home_progress_bar__39o9M",
	"progress_bar_now": "Home_progress_bar_now__1K0WJ",
	"main_menu_container": "Home_main_menu_container__3Edjv"
};


/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("firebase/app");;

/***/ }),

/***/ "firebase/messaging":
/*!*************************************!*\
  !*** external "firebase/messaging" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("firebase/messaging");;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-chartjs-2");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","helper_js-store_index_js","components_Button_jsx-components_Spinner_jsx","webpush_js"], function() { return __webpack_exec__("./pages/index.jsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYWthLy4vY29tcG9uZW50cy9Cb3ROYXYuanN4Iiwid2VicGFjazovL3Nha2EvLi9jb21wb25lbnRzL0NhcmQuanN4Iiwid2VicGFjazovL3Nha2EvLi9wYWdlcy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vc2FrYS8uL3N0eWxlcy9jb21wb25lbnRzL0JvdE5hdi5tb2R1bGUuY3NzIiwid2VicGFjazovL3Nha2EvLi9zdHlsZXMvY29tcG9uZW50cy9DYXJkLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vc2FrYS8uL3N0eWxlcy9wYWdlcy9Ib21lLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vc2FrYS9leHRlcm5hbCBcImZpcmViYXNlL2FwcFwiIiwid2VicGFjazovL3Nha2EvZXh0ZXJuYWwgXCJmaXJlYmFzZS9tZXNzYWdpbmdcIiIsIndlYnBhY2s6Ly9zYWthL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vc2FrYS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9zYWthL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3Nha2EvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9zYWthL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9zYWthL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9zYWthL2V4dGVybmFsIFwicmVhY3QtY2hhcnRqcy0yXCIiLCJ3ZWJwYWNrOi8vc2FrYS9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vc2FrYS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIk5hdiIsImZvY3VzIiwicm91dGVyIiwidXNlUm91dGVyIiwiYWN0aXZlIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW4iLCJib3JkZXJSYWRpdXMiLCJzdHlsZXMiLCJwYXRobmFtZSIsIkNhcmQiLCJjaGlsZHJlbiIsInN0eWxlIiwic2hhZG93IiwiSG9tZSIsInN0YXRlIiwiZGlzcGF0Y2giLCJhY3Rpb25zIiwidXNlQ29udGV4dCIsIlN0b3JlcyIsInNldEZvY3VzIiwidXNlU3RhdGUiLCJwbGFuIiwic2V0UGxhbiIsIndvcmtWaXNpdCIsInNldFdvcmtWaXNpdCIsIndvcmtWaXNpdEhpc3RvcnkiLCJzZXRXb3JrVmlzaXRIaXN0b3J5IiwicGxhbkhpc3RvcnkiLCJzZXRQbGFuSGlzdG9yeSIsInNwcmVhZGluZ0hpc3RvcnkiLCJzZXRTcHJlYWRpbmdIaXN0b3J5IiwidW5wbGFuSGlzdG9yeSIsInNldFVucGxhbkhpc3RvcnkiLCJyb2xlIiwic2V0Um9sZSIsInRvcE1lbnUiLCJzZXRUb3BNZW51IiwibG9hZGluZyIsInNldExvYWRpbmciLCJsb2FkaW5nTWVudSIsInNldExvYWRpbmdNZW51IiwibmV3QW5ub3VuY2VtZW50Iiwic2V0TmV3QW5ub3VuY2VtZW50Iiwibm90aWYiLCJzZXROb3RpZiIsInNhbGVzVGFyZ2V0Iiwic2V0U2FsZXNUYXJnZXQiLCJzYWxlc1RhcmdldDc1Iiwic2V0U2FsZXNUYXJnZXQ3NSIsInByb2R1a3RpZml0YXMiLCJzZXRQcm9kdWt0aWZpdGFzIiwiZnJvbnRsaW5lciIsInNldEZyb250bGluZXIiLCJOT08iLCJzZXROT08iLCJ3b3JrRGF5Iiwic2V0V29ya0RheSIsImlzTW91bnRlZCIsInVzZVJlZiIsImRhdGFQbGFuIiwiZGF0YXNldHMiLCJkYXRhIiwibGVuZ3RoIiwiZGF0YVNwcmVhZGluZyIsImRhdGFXb3JrVmlzaXQiLCJkb251dE9wdGlvbnMiLCJjdXRvdXRQZXJjZW50YWdlIiwidG9vbHRpcHMiLCJlbmFibGVkIiwiaG92ZXIiLCJtb2RlIiwicmVzcG9uc2l2ZSIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJ1c2VFZmZlY3QiLCJ1c2VyRGF0YSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJnZXRBbGxBbm5vdW5jZW1lbnQiLCJ0aGVuIiwiZmlsdGVyIiwidmFsIiwiaXNSZWFkIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZ2V0V29ya0RheSIsInVzZXJMb2dpbiIsImdldE1lbnUiLCJzZXRNZW51IiwiUm91dGVyIiwibW9udGgiLCJtb21lbnQiLCJmb3JtYXQiLCJ5ZWFyIiwiZ2V0QXV0aCIsInJvbGVDb2RlIiwiZ2V0U2FsZXNUYXJnZXQ3NVBpbWNhIiwiZ2V0U2FsZXNUYXJnZXRQaW1jYSIsImdldEZyb250bGluZXJQaW1jYSIsImdldFNhbGVzVGFyZ2V0U01SIiwiZ2V0U2FsZXNUYXJnZXQ3NVNNUiIsImdldFByb2R1a3RpZml0YXMiLCJnZXRGcm9udGxpbmVyIiwiZ2V0Tm9vIiwiZ2V0UGxhbkxpc3QiLCJnZXRBbGxXb3JrVmlzaXQiLCJpc1BlbmlsYWlhbiIsImdldFBsYW5IaXN0b3J5IiwiZ2V0VW5wbGFuTW9udGhseUhpc3RvcnkiLCJnZXRTcHJlYWRpbmdNb250aGx5SGlzdG9yeSIsInJlbmRlclRvcE1lbnUiLCJhdXRoIiwibW9kdWxlQ29kZSIsInJlbmRlciIsIm1hcCIsImluZGV4IiwicmVuZGVyTGlzdCIsInR5cGUiLCJmb250U2l6ZSIsImNvbG9yIiwidGV4dEFsaWduIiwiaWRNYXN0ZXJQbGFuIiwiZm9udFdlaWdodCIsImRpc3BsYXkiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwicGFkZGluZyIsIm5hbWFPdXRsZXQiLCJhbGFtYXRPdXRsZXQiLCJyZW5kZXJMaXN0V29ya1Zpc2l0IiwibmFtYVNNUiIsInJheW9uIiwicHJvZHVrRm9rdXMiLCJyZW5kZXJQbGFuIiwibWFyZ2luVG9wIiwiYm9yZGVyIiwiTWF0aCIsInJvdW5kIiwicmVuZGVyU3ByZWFkaW5nIiwicmVuZGVyVW5wbGFuIiwidGV4dERlY29yYXRpb24iLCJyZW5kZXJXb3JrVmlzaXQiLCJyZW5kZXJXb3JrRGF5IiwiaGFyaUtlcmphIiwidG90YWxIYXJpS2VyamEiLCJyZW5kZXJQcm9ncmVzcyIsInJlbmRlclNhbGVzIiwidGl0bGUiLCJzYWxlcyIsInRvTG9jYWxlU3RyaW5nIiwidGFyZ2V0IiwicHJvZ3Jlc3NfYmFyIiwiYWNoIiwiYWNoaWV2ZW1lbnQiLCJyZW5kZXJQYWdlIiwiYmdfdG9wIiwibWFyZ2luTGVmdCIsInVzZXJSZWR1Y2VyIiwidXNlciIsIm5hbWUiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEdBQUcsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlO0FBQ3pCLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBQ0EsTUFBSUMsTUFBTSxnQkFDUjtBQUNFLFNBQUssRUFBRTtBQUNMQyxXQUFLLEVBQUUsS0FERjtBQUVMQyxZQUFNLEVBQUUsS0FGSDtBQUdMQyxxQkFBZSxFQUFFLFNBSFo7QUFJTEMsWUFBTSxFQUFFLFVBSkg7QUFLTEMsa0JBQVksRUFBRTtBQUxUO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGOztBQVdBLHNCQUNFO0FBQUssYUFBUyxFQUFFQywyRkFBaEI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRUEscUZBQWhCO0FBQUEsOEJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUUsR0FBWjtBQUFBLCtCQUNFO0FBQUEsaUNBQ0U7QUFBQSxvQ0FDRTtBQUNFLGlCQUFHLEVBQ0RSLE1BQU0sQ0FBQ1MsUUFBUCxLQUFvQixHQUFwQixHQUEwQixlQUExQixHQUE0QztBQUZoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLEVBTUdULE1BQU0sQ0FBQ1MsUUFBUCxLQUFvQixHQUFwQixHQUEwQlAsTUFBMUIsR0FBbUMsRUFOdEM7QUFBQTtBQUFBO0FBQUE7QUFB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LEdBbEZEOztBQW1GQSxTQUFPVCxVQUFVLEVBQWpCO0FBQ0QsQzs7Ozs7Ozs7OztBQ2poQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMxQkEsMEM7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NvbXBvbmVudHMvQm90TmF2Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBOYXYgPSAoeyBmb2N1cyB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgdmFyIGFjdGl2ZSA9IChcclxuICAgIDxkaXZcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICB3aWR0aDogXCI1cHhcIixcclxuICAgICAgICBoZWlnaHQ6IFwiNXB4XCIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZWI4MDBcIixcclxuICAgICAgICBtYXJnaW46IFwiNXB4IGF1dG9cIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTBweFwiLFxyXG4gICAgICB9fVxyXG4gICAgLz5cclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdl9jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdl9ib3h9PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvXCIgPyBcIi9ob21lLW5hdi5zdmdcIiA6IFwiL2hvbWUtbmF2MS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAge3JvdXRlci5wYXRobmFtZSA9PT0gXCIvXCIgPyBhY3RpdmUgOiBcIlwifVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj17XCIvY2FsZW5kYXJcIn0+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2NhbGVuZGFyXCJcclxuICAgICAgICAgICAgICAgICAgICA/IFwiL2NhbGVuZGFyLW5hdi5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCIvY2FsZW5kYXItbmF2MS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAge3JvdXRlci5wYXRobmFtZSA9PT0gXCIvY2FsZW5kYXJcIiA/IGFjdGl2ZSA6IFwiXCJ9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPXtcIi9yZXdhcmRcIn0+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09IFwiL3Jld2FyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIi9hd2FyZC1uYXYuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiL2F3YXJkLW5hdjEuc3ZnXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL3Jld2FyZFwiID8gYWN0aXZlIDogXCJcIn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvYW5ub3VuY2VtZW50XCJcclxuICAgICAgICAgICAgICAgICAgICA/IFwiL3Jld2FyZHMtbmF2LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIi9yZXdhcmRzLW5hdjEuc3ZnXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL2Fubm91bmNlbWVudFwiID8gYWN0aXZlIDogXCJcIn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e1wiL3Byb2ZpbGVcIn0+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09IFwiL3Byb2ZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gXCIvcHJvZmlsZS1uYXYuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiL3Byb2ZpbGUtbmF2MS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAge3JvdXRlci5wYXRobmFtZSA9PT0gXCIvcHJvZmlsZVwiID8gYWN0aXZlIDogXCJcIn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NvbXBvbmVudHMvQ2FyZC5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBDYXJkID0gKHsgY2hpbGRyZW4sIHN0eWxlLCBzaGFkb3cgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhaW5lcn0gJHtzaGFkb3cgPyBzdHlsZXMuc2hhZG93IDogXCJcIn1gfVxyXG4gICAgICBzdHlsZT17c3R5bGUgPyBzdHlsZSA6IHt9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3BhZ2VzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IFN0b3JlcyB9IGZyb20gXCIuLi9zdG9yZVwiO1xuXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9TcGlubmVyXCI7XG5pbXBvcnQgQm90TmF2IGZyb20gXCIuLi9jb21wb25lbnRzL0JvdE5hdlwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRcIjtcblxuaW1wb3J0IHsgZmlyZWJhc2VDbG91ZE1lc3NhZ2luZyB9IGZyb20gXCIuLi93ZWJwdXNoXCI7XG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IHtcbiAgZ2V0QWxsQW5ub3VuY2VtZW50LFxuICBnZXRBbGxXb3JrVmlzaXQsXG4gIGdldEF1dGgsXG4gIGdldEZyb250bGluZXIsXG4gIGdldEZyb250bGluZXJQaW1jYSxcbiAgZ2V0TWVudSxcbiAgZ2V0Tm9vLFxuICBnZXRQbGFuSGlzdG9yeSxcbiAgZ2V0UGxhbkxpc3QsXG4gIGdldFByb2R1a3RpZml0YXMsXG4gIGdldFNhbGVzVGFyZ2V0NzVQaW1jYSxcbiAgZ2V0U2FsZXNUYXJnZXQ3NVNNUixcbiAgZ2V0U2FsZXNUYXJnZXRQaW1jYSxcbiAgZ2V0U2FsZXNUYXJnZXRTTVIsXG4gIGdldFNwcmVhZGluZ01vbnRobHlIaXN0b3J5LFxuICBnZXRVbnBsYW5Nb250aGx5SGlzdG9yeSxcbiAgZ2V0V29ya0RheSxcbn0gZnJvbSBcIi4uL2hlbHBlclwiO1xuXG5pbXBvcnQgeyBEb3VnaG51dCB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCwgYWN0aW9ucyB9ID0gdXNlQ29udGV4dChTdG9yZXMpO1xuICBjb25zdCBbZm9jdXMsIHNldEZvY3VzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGxhbiwgc2V0UGxhbl0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt3b3JrVmlzaXQsIHNldFdvcmtWaXNpdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt3b3JrVmlzaXRIaXN0b3J5LCBzZXRXb3JrVmlzaXRIaXN0b3J5XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3BsYW5IaXN0b3J5LCBzZXRQbGFuSGlzdG9yeV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzcHJlYWRpbmdIaXN0b3J5LCBzZXRTcHJlYWRpbmdIaXN0b3J5XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3VucGxhbkhpc3RvcnksIHNldFVucGxhbkhpc3RvcnldID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcm9sZSwgc2V0Um9sZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3RvcE1lbnUsIHNldFRvcE1lbnVdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2xvYWRpbmdNZW51LCBzZXRMb2FkaW5nTWVudV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW25ld0Fubm91bmNlbWVudCwgc2V0TmV3QW5ub3VuY2VtZW50XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW25vdGlmLCBzZXROb3RpZl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzYWxlc1RhcmdldCwgc2V0U2FsZXNUYXJnZXRdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2FsZXNUYXJnZXQ3NSwgc2V0U2FsZXNUYXJnZXQ3NV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtwcm9kdWt0aWZpdGFzLCBzZXRQcm9kdWt0aWZpdGFzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2Zyb250bGluZXIsIHNldEZyb250bGluZXJdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbTk9PLCBzZXROT09dID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbd29ya0RheSwgc2V0V29ya0RheV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IGlzTW91bnRlZCA9IHVzZVJlZih0cnVlKTtcblxuICBjb25zdCBkYXRhUGxhbiA9IHtcbiAgICBkYXRhc2V0czogW1xuICAgICAge1xuICAgICAgICBkYXRhOlxuICAgICAgICAgIHBsYW5IaXN0b3J5Lmxlbmd0aCA9PT0gMCA/IFswLCAxXSA6IFtwbGFuSGlzdG9yeS5sZW5ndGgsIHBsYW4ubGVuZ3RoXSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXCIjNDE4NjdhXCIsIFwiI2QxZTRlMVwiXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcbiAgY29uc3QgZGF0YVNwcmVhZGluZyA9IHtcbiAgICBkYXRhc2V0czogW1xuICAgICAge1xuICAgICAgICBkYXRhOiBzcHJlYWRpbmdIaXN0b3J5Lmxlbmd0aCA9PT0gMCA/IFswLCAxXSA6IFswLCAxXSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXCIjNDE4NjdhXCIsIFwiI2QxZTRlMVwiXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICBjb25zdCBkYXRhV29ya1Zpc2l0ID0ge1xuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGRhdGE6XG4gICAgICAgICAgd29ya1Zpc2l0SGlzdG9yeS5sZW5ndGggPT09IDBcbiAgICAgICAgICAgID8gWzAsIDFdXG4gICAgICAgICAgICA6IFt3b3JrVmlzaXRIaXN0b3J5Lmxlbmd0aCwgd29ya1Zpc2l0Lmxlbmd0aF0sXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1wiIzQxODY3YVwiLCBcIiNkMWU0ZTFcIl0sXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG4gIGNvbnN0IGRvbnV0T3B0aW9ucyA9IHtcbiAgICBjdXRvdXRQZXJjZW50YWdlOiA3NSxcbiAgICB0b29sdGlwczogeyBlbmFibGVkOiBmYWxzZSB9LFxuICAgIGhvdmVyOiB7IG1vZGU6IG51bGwgfSxcbiAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgIG1haW50YWluQXNwZWN0UmF0aW86IHRydWUsXG4gIH07XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBpZiAoaXNNb3VudGVkLmN1cnJlbnQpIHtcbiAgLy8gICAgIHNldFRva2VuKCk7XG4gIC8vICAgICBhc3luYyBmdW5jdGlvbiBzZXRUb2tlbigpIHtcbiAgLy8gICAgICAgdHJ5IHtcbiAgLy8gICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGZpcmViYXNlQ2xvdWRNZXNzYWdpbmcuaW5pdCgpO1xuICAvLyAgICAgICAgIGlmICh0b2tlbikge1xuICAvLyAgICAgICAgICAgZ2V0TWVzc2FnZSgpO1xuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH1cbiAgLy8gICAgIGZ1bmN0aW9uIGdldE1lc3NhZ2UoKSB7XG4gIC8vICAgICAgIGNvbnN0IG1lc3NhZ2luZyA9IGZpcmViYXNlLm1lc3NhZ2luZygpO1xuICAvLyAgICAgICBjb25zb2xlLmxvZyh7IG1lc3NhZ2luZyB9KTtcbiAgLy8gICAgICAgbWVzc2FnaW5nLm9uTWVzc2FnZSgobWVzc2FnZSkgPT4ge1xuICAvLyAgICAgICAgIHNldE5vdGlmKHRydWUpO1xuICAvLyAgICAgICB9KTtcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vICAgcmV0dXJuICgpID0+IHtcbiAgLy8gICAgIGlzTW91bnRlZC5jdXJyZW50ID0gZmFsc2U7XG4gIC8vICAgfTtcbiAgLy8gfSwgW2lzTW91bnRlZF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XG4gICAgaWYgKHVzZXJEYXRhKSB7XG4gICAgICBnZXRBbGxBbm5vdW5jZW1lbnQodXNlckRhdGEpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3QW5ub3VuY2VtZW50ID0gZGF0YS5maWx0ZXIoKHZhbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZhbC5pc1JlYWQgPT09IGZhbHNlO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNldE5ld0Fubm91bmNlbWVudChuZXdBbm5vdW5jZW1lbnQpO1xuICAgICAgICAgIGlmIChuZXdBbm5vdW5jZW1lbnQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2V0Tm90aWYodHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldE5vdGlmKGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7XG4gICAgICBnZXRXb3JrRGF5KClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBzZXRXb3JrRGF5KGRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2Rpc3BhdGNoXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcbiAgICBpZiAodXNlckRhdGEpIHtcbiAgICAgIGFjdGlvbnMudXNlckxvZ2luKHVzZXJEYXRhKTtcbiAgICAgIGdldE1lbnUodXNlckRhdGEpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgYWN0aW9ucy5zZXRNZW51KGRhdGEpO1xuICAgICAgICAgIHNldFRvcE1lbnUoZGF0YSk7XG4gICAgICAgICAgc2V0TG9hZGluZ01lbnUoZmFsc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfVxuICB9LCBbZGlzcGF0Y2hdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xuICAgIHZhciBtb250aCA9IG1vbWVudCgpLmZvcm1hdChcIk1cIik7XG4gICAgdmFyIHllYXIgPSBtb21lbnQoKS5mb3JtYXQoXCJZXCIpO1xuICAgIGlmICh1c2VyRGF0YSkge1xuICAgICAgZ2V0QXV0aCh1c2VyRGF0YSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YVswXS5yb2xlQ29kZSA9PT0gXCJQSU1DQUJcIikge1xuICAgICAgICAgICAgc2V0Um9sZShcIlBJTUNBQlwiKTtcbiAgICAgICAgICAgIHNldEZvY3VzKFwiV09SSy1WSVNJVFwiKTtcbiAgICAgICAgICAgIGdldFNhbGVzVGFyZ2V0NzVQaW1jYSh1c2VyRGF0YSwgbW9udGgsIHllYXIpXG4gICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgIHNldFNhbGVzVGFyZ2V0NzUoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgICAgICAgICBnZXRTYWxlc1RhcmdldFBpbWNhKHVzZXJEYXRhLCBtb250aCwgeWVhcilcbiAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgc2V0U2FsZXNUYXJnZXQoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgICAgICAgICBnZXRGcm9udGxpbmVyUGltY2EodXNlckRhdGEsIG1vbnRoLCB5ZWFyKVxuICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICBzZXRGcm9udGxpbmVyKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YVswXS5yb2xlQ29kZSA9PT0gXCJTTVJcIikge1xuICAgICAgICAgICAgc2V0Um9sZShcIlNNUlwiKTtcbiAgICAgICAgICAgIHNldEZvY3VzKFwiUExBTlwiKTtcbiAgICAgICAgICAgIGdldFNhbGVzVGFyZ2V0U01SKHVzZXJEYXRhLCBtb250aCwgeWVhcilcbiAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgc2V0U2FsZXNUYXJnZXQoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBnZXRTYWxlc1RhcmdldDc1U01SKHVzZXJEYXRhLCBtb250aCwgeWVhcilcbiAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgc2V0U2FsZXNUYXJnZXQ3NShkYXRhKTtcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGdldFByb2R1a3RpZml0YXModXNlckRhdGEsIG1vbnRoLCB5ZWFyKVxuICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICBzZXRQcm9kdWt0aWZpdGFzKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZ2V0RnJvbnRsaW5lcih1c2VyRGF0YSwgbW9udGgsIHllYXIpXG4gICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgIHNldEZyb250bGluZXIoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBnZXROb28odXNlckRhdGEsIG1vbnRoLCB5ZWFyKVxuICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICBzZXROT08oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfVxuICB9LCBbZGlzcGF0Y2hdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XG4gICAgaWYgKHVzZXJEYXRhKSB7XG4gICAgICBpZiAoZm9jdXMgPT09IFwiUExBTlwiKSB7XG4gICAgICAgIGdldFBsYW5MaXN0KHVzZXJEYXRhKVxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBzZXRQbGFuKGRhdGEpO1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZm9jdXMgPT09IFwiV09SSy1WSVNJVFwiKSB7XG4gICAgICAgIGdldEFsbFdvcmtWaXNpdCh1c2VyRGF0YSlcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBzZXRXb3JrVmlzaXQoXG4gICAgICAgICAgICAgIGRhdGEuZmlsdGVyKCh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsLmlzUGVuaWxhaWFuID09PSBmYWxzZTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzZXRXb3JrVmlzaXRIaXN0b3J5KFxuICAgICAgICAgICAgICBkYXRhLmZpbHRlcigodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5pc1BlbmlsYWlhbiA9PT0gdHJ1ZTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfVxuICB9LCBbZm9jdXNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xuXG4gICAgaWYgKGZvY3VzID09PSBcIlBMQU5cIikge1xuICAgICAgZ2V0UGxhbkhpc3RvcnkodXNlckRhdGEpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgc2V0UGxhbkhpc3RvcnkoZGF0YSk7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChmb2N1cyA9PT0gXCJVTlBMQU5cIikge1xuICAgICAgZ2V0VW5wbGFuTW9udGhseUhpc3RvcnkodXNlckRhdGEpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgc2V0VW5wbGFuSGlzdG9yeShkYXRhKTtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGZvY3VzID09PSBcIlNQUkVBRElOR1wiKSB7XG4gICAgICBnZXRTcHJlYWRpbmdNb250aGx5SGlzdG9yeSh1c2VyRGF0YSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICBzZXRTcHJlYWRpbmdIaXN0b3J5KGRhdGEpO1xuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2ZvY3VzXSk7XG5cbiAgY29uc3QgcmVuZGVyVG9wTWVudSA9ICgpID0+IHtcbiAgICB2YXIgYXV0aCA9IHRvcE1lbnUuZmlsdGVyKCh2YWwpID0+IHtcbiAgICAgIGlmIChyb2xlID09PSBcIlNNUlwiKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgdmFsLm1vZHVsZUNvZGUgPT09IFwiUExBTlwiIHx8XG4gICAgICAgICAgdmFsLm1vZHVsZUNvZGUgPT09IFwiVU5QTEFOXCIgfHxcbiAgICAgICAgICB2YWwubW9kdWxlQ29kZSA9PT0gXCJTUFJFQURJTkdcIlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChyb2xlID09PSBcIlBJTUNBQlwiKSB7XG4gICAgICAgIHJldHVybiB2YWwubW9kdWxlQ29kZSA9PT0gXCJXT1JLLVZJU0lUXCI7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gYXV0aC5tYXAoKHZhbCwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICBmb2N1cyA9PT0gdmFsLm1vZHVsZUNvZGUgPyBzdHlsZXMuZm9jdXNfbWVudSA6IHN0eWxlcy5tZW51XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldEZvY3VzKHZhbC5tb2R1bGVDb2RlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt2YWwubW9kdWxlQ29kZSA9PT0gXCJQTEFOXCJcbiAgICAgICAgICAgICAgPyBcIlBsYW5cIlxuICAgICAgICAgICAgICA6IHZhbC5tb2R1bGVDb2RlID09PSBcIlVOUExBTlwiXG4gICAgICAgICAgICAgID8gXCJVbnBsYW5cIlxuICAgICAgICAgICAgICA6IHZhbC5tb2R1bGVDb2RlID09PSBcIlNQUkVBRElOR1wiXG4gICAgICAgICAgICAgID8gXCJTcHJlYWRpbmdcIlxuICAgICAgICAgICAgICA6IHZhbC5tb2R1bGVDb2RlID09PSBcIldPUkstVklTSVRcIlxuICAgICAgICAgICAgICA/IFwiV29yayBWaXNpdFwiXG4gICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgaWYgKGF1dGgpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgYXV0aC5sZW5ndGggPT09IDNcbiAgICAgICAgICAgICAgPyBzdHlsZXMubWVudV9ncmlkM1xuICAgICAgICAgICAgICA6IGF1dGgubGVuZ3RoID09PSAxXG4gICAgICAgICAgICAgID8gc3R5bGVzLm1lbnVfZ3JpZDFcbiAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAge3JlbmRlcigpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlckxpc3QgPSAodHlwZSwgZGF0YSkgPT4ge1xuICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBmb250U2l6ZTogXCIxNXB4XCIsXG4gICAgICAgICAgICBjb2xvcjogXCJyZ2IoMjA4LCAyMDgsIDIwOClcIixcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICBtYXJnaW46IFwiMzBweCAwXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIE5vIEl0ZW1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZGF0YS5tYXAoKHZhbCwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgaHJlZj17Zm9jdXMgPT09IFwiUExBTlwiID8gYC92aXNpdC9wbGFuLyR7ZGF0YS5pZE1hc3RlclBsYW59YCA6IFwiL1wifVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNzAwXCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNUU1ODczXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjEwcHggMFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjEyJSA4OCVcIiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHR5cGUgPT09IFwiUExBTlwiID8gXCIjRkZGMUNDXCIgOiBcIiNkMWU0ZTFcIixcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gXCJQTEFOXCIgPyBcIiNmZWI4MDBcIiA6IFwiIzQxODY3YVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pnt2YWwubmFtYU91dGxldH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIxNHB4XCIsIGZvbnRXZWlnaHQ6IFwiMzAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAge3ZhbC5hbGFtYXRPdXRsZXR9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXJMaXN0V29ya1Zpc2l0ID0gKGRhdGEpID0+IHtcbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZm9udFNpemU6IFwiMTVweFwiLFxuICAgICAgICAgICAgY29sb3I6IFwicmdiKDIwOCwgMjA4LCAyMDgpXCIsXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgbWFyZ2luOiBcIjMwcHggMFwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBObyBJdGVtXG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRhdGEubWFwKCh2YWwsIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPExpbmsgaHJlZj17YHdvcmstdmlzaXQvJHt2YWwuaWRNYXN0ZXJQbGFufWB9PlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI3MDBcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1RTU4NzNcIixcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTBweCAwXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMTIlIDg4JVwiIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkZGMUNDXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjRweFwiLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZlYjgwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pnt2YWwubmFtYVNNUn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIxNHB4XCIsIGZvbnRXZWlnaHQ6IFwiMzAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgUmF5b24gLSB7dmFsLnJheW9ufVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIxNHB4XCIsIGZvbnRXZWlnaHQ6IFwiMzAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgUHJvZHVrIEZvY3VzIC0ge3ZhbC5wcm9kdWtGb2t1c31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlclBsYW4gPSAoKSA9PiB7XG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIG1hcmdpblRvcDogXCIyMnB4XCIgfX0gc2hhZG93PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmVydmlld30+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+XG4gICAgICAgICAgICAgICAgICB7bW9tZW50KCkuZm9ybWF0KFwiRCAvIE1NTSAvIFlZWVlcIil9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwiIzVFNTg3M1wiLCBtYXJnaW5Ub3A6IFwiN3B4XCIgfX0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIzNnB4XCIsIGZvbnRXZWlnaHQ6IFwiNjAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIHtwbGFuSGlzdG9yeS5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIxOHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIC97cGxhbi5sZW5ndGggKyBwbGFuSGlzdG9yeS5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tYXN0ZXItcGxhbi12aXNpdFwiPlxuICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjdweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRUI4MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweCAyMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgQWRkIE5ldyBQbGFuICtcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBpZV9wZXJjZW50YWdlfT5cbiAgICAgICAgICAgICAgICAgIHtwbGFuSGlzdG9yeS5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICAgICAgPyBcIjAlXCJcbiAgICAgICAgICAgICAgICAgICAgOiBgJHtNYXRoLnJvdW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgKHBsYW5IaXN0b3J5Lmxlbmd0aCAvXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChwbGFuLmxlbmd0aCArIHBsYW5IaXN0b3J5Lmxlbmd0aCkpICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwXG4gICAgICAgICAgICAgICAgICAgICAgKX0lYH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8RG91Z2hudXRcbiAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGFQbGFufVxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZG9udXRPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MTAwfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMnB4XCIsIGJvcmRlclJhZGl1czogXCIzMHB4XCIgfX0gc2hhZG93PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGFuX2NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1RTU4NzNcIixcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFlvdXIgUGxhbiBUb2RheVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMjJweCAwXCIgfX0+e3JlbmRlckxpc3QoXCJQTEFOXCIsIHBsYW4pfTwvZGl2PlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Zpc2l0L3BsYW5cIj5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD17XCJTZWUgRGV0YWlsc1wifSAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlclNwcmVhZGluZyA9ICgpID0+IHtcbiAgICBpZiAobG9hZGluZykge1xuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI1cHhcIiwgbWFyZ2luVG9wOiBcIjIycHhcIiB9fSBzaGFkb3c+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm92ZXJ2aWV3fT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfT5cbiAgICAgICAgICAgICAgICAgIHttb21lbnQoKS5mb3JtYXQoXCJEIC8gTU1NIC8gWVlZWVwiKX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogXCIjNUU1ODczXCIsIG1hcmdpblRvcDogXCI3cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjM2cHhcIiwgZm9udFdlaWdodDogXCI2MDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAge3NwcmVhZGluZ0hpc3RvcnkubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMThweFwiIH19Pi97cGxhbi5sZW5ndGh9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3Zpc2l0L3NwcmVhZGluZy9cIn0+XG4gICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiN3B4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZFQjgwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4IDIycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBBZGQgTmV3IE5PTyArXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waWVfcGVyY2VudGFnZX0+MCU8L2Rpdj5cbiAgICAgICAgICAgICAgICA8RG91Z2hudXRcbiAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGFTcHJlYWRpbmd9XG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtkb251dE9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIycHhcIiwgYm9yZGVyUmFkaXVzOiBcIjMwcHhcIiB9fSBzaGFkb3c+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsYW5fY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxOHB4XCIsXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzVFNTg3M1wiLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU3ByZWFkaW5nIEhpc3RvcnlcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjIycHggMFwiIH19PlxuICAgICAgICAgICAgICAgIHtyZW5kZXJMaXN0KFwiU1BSRUFESU5HXCIsIHNwcmVhZGluZ0hpc3RvcnkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi92aXNpdC9zcHJlYWRpbmcvaGlzdG9yeVwiPlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PXtcIlNlZSBEZXRhaWxzXCJ9IC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvPlxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyVW5wbGFuID0gKCkgPT4ge1xuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICByZXR1cm4gPFNwaW5uZXIgLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPENhcmQgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBtYXJnaW5Ub3A6IFwiMjJweFwiIH19IHNoYWRvdz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudW5wbGFuX2dyaWR9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm51bV90b3RhbF91bnBsYW59PlxuICAgICAgICAgICAgICAgIHt1bnBsYW5IaXN0b3J5Lmxlbmd0aH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMTRweFwiIH19PlRvdGFsIFVucGxhbiBWaXNpdDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9Pnttb21lbnQoKS5mb3JtYXQoXCJNTU1NXCIpfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI1cHhcIiwgbWFyZ2luVG9wOiBcIjExcHhcIiB9fSBzaGFkb3c+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3Zpc2l0L3VucGxhblwiPlxuICAgICAgICAgICAgICA8YSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51bnBsYW5fZ3JpZDJ9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRfdW5wbGFufT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiLThweFwiIH19Pis8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIxNnB4XCIsIGZvbnRXZWlnaHQ6IFwiNjAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIEFueSBVbnBsYW4gVmlzaXQ/XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI0I5QjlDM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCIzMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEzcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgQWRkIHlvdXIgdW5wbGFuIHZpc2l0IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiL25leHQuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvQ2FyZD5cblxuICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMnB4XCIsIGJvcmRlclJhZGl1czogXCIzMHB4XCIgfX0gc2hhZG93PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGFuX2NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1RTU4NzNcIixcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFVucGxhbiBWaXNpdCBIaXN0b3J5XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIyMnB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICB7cmVuZGVyTGlzdChcIlVOUExBTlwiLCB1bnBsYW5IaXN0b3J5KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdmlzaXQvdW5wbGFuL2hpc3RvcnlcIj5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD17XCJTZWUgRGV0YWlsc1wifSAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlcldvcmtWaXNpdCA9ICgpID0+IHtcbiAgICBpZiAobG9hZGluZykge1xuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI1cHhcIiwgbWFyZ2luVG9wOiBcIjIycHhcIiB9fSBzaGFkb3c+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm92ZXJ2aWV3fT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfT5cbiAgICAgICAgICAgICAgICAgIHttb21lbnQoKS5mb3JtYXQoXCJEIC8gTU1NIC8gWVlZWVwiKX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogXCIjNUU1ODczXCIsIG1hcmdpblRvcDogXCI3cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjM2cHhcIiwgZm9udFdlaWdodDogXCI2MDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAge3dvcmtWaXNpdEhpc3RvcnkubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMThweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAve3dvcmtWaXNpdC5sZW5ndGggKyB3b3JrVmlzaXRIaXN0b3J5Lmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21hc3Rlci13b3JrLXZpc2l0XCI+XG4gICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiN3B4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZFQjgwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4IDIycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBBZGQgTmV3ICtcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBpZV9wZXJjZW50YWdlfT5cbiAgICAgICAgICAgICAgICAgIHt3b3JrVmlzaXRIaXN0b3J5Lmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgICAgICA/IFwiMCVcIlxuICAgICAgICAgICAgICAgICAgICA6IGAke01hdGgucm91bmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAod29ya1Zpc2l0SGlzdG9yeS5sZW5ndGggL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAod29ya1Zpc2l0Lmxlbmd0aCArIHdvcmtWaXNpdEhpc3RvcnkubGVuZ3RoKSkgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAxMDBcbiAgICAgICAgICAgICAgICAgICAgICApfSVgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxEb3VnaG51dFxuICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YVdvcmtWaXNpdH1cbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2RvbnV0T3B0aW9uc31cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjJweFwiLCBib3JkZXJSYWRpdXM6IFwiMzBweFwiIH19IHNoYWRvdz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxhbl9jb250YWluZXJ9PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNUU1ODczXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBZb3VyIFdvcmsgVmlzaXQgVG9kYXlcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjIycHggMFwiIH19PlxuICAgICAgICAgICAgICAgIHtyZW5kZXJMaXN0V29ya1Zpc2l0KHdvcmtWaXNpdCl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3dvcmstdmlzaXRcIj5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD17XCJTZWUgRGV0YWlsc1wifSAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlcldvcmtEYXkgPSAoKSA9PiB7XG4gICAgaWYgKHdvcmtEYXkubGVuZ3RoICE9PSAwICYmICFsb2FkaW5nICYmICFsb2FkaW5nTWVudSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIycHhcIiwgYm9yZGVyUmFkaXVzOiBcIjZweFwiIH19IHNoYWRvdz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsYW5fY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfdGl0bGV9PlxuICAgICAgICAgICAgICBXb3JraW5nIERheSB7bW9tZW50KCkuZm9ybWF0KFwiTU1NTSBZWVlZXCIpfVxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiNzAwXCIgfX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiI0ZFQjgwMFwiIH19Pnt3b3JrRGF5LmhhcmlLZXJqYX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMTJweFwiLCBmb250V2VpZ2h0OiBcIjQwMFwiIH19PlxuICAgICAgICAgICAgICAgICAge1wiIC8gXCJ9XG4gICAgICAgICAgICAgICAgICB7d29ya0RheS50b3RhbEhhcmlLZXJqYX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuICBjb25zdCByZW5kZXJQcm9ncmVzcyA9ICgpID0+IHtcbiAgICBjb25zdCByZW5kZXJTYWxlcyA9ICh0aXRsZSwgZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjFmciAyZnJcIiB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfdGl0bGV9Pnt0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfbnVtYmVyfT5cbiAgICAgICAgICAgICAge2RhdGEuc2FsZXMudG9Mb2NhbGVTdHJpbmcoXCJpZC1JRFwiKX1cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMTJweFwiLCBmb250V2VpZ2h0OiBcIjQwMFwiIH19PlxuICAgICAgICAgICAgICAgIHtcIiAvIFwifVxuICAgICAgICAgICAgICAgIHtkYXRhLnRhcmdldC50b0xvY2FsZVN0cmluZyhcImlkLUlEXCIpfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxM3B4IDAgMCAwXCIgfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcn0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcl9ub3d9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGAkeyhkYXRhLnNhbGVzIC8gZGF0YS50YXJnZXQpICogMTAwfSVgLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfTtcbiAgICBpZiAoIWxvYWRpbmcgJiYgIWxvYWRpbmdNZW51KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjJweFwiLCBib3JkZXJSYWRpdXM6IFwiNnB4XCIgfX0gc2hhZG93PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxhbl9jb250YWluZXJ9PlxuICAgICAgICAgICAge3NhbGVzVGFyZ2V0Lmxlbmd0aCAhPT0gMCA/IHJlbmRlclNhbGVzKFwiU2FsZXNcIiwgc2FsZXNUYXJnZXQpIDogXCJcIn1cbiAgICAgICAgICAgIHtzYWxlc1RhcmdldDc1Lmxlbmd0aCAhPT0gMFxuICAgICAgICAgICAgICA/IHJlbmRlclNhbGVzKFwiU2FsZXMgNzUlXCIsIHNhbGVzVGFyZ2V0NzUpXG4gICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgIHtOT08ubGVuZ3RoICE9PSAwID8gcmVuZGVyU2FsZXMoXCJTYWxlcyBOT09cIiwgTk9PKSA6IFwiXCJ9XG4gICAgICAgICAgICB7ZnJvbnRsaW5lci5sZW5ndGggIT09IDAgPyAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyIDFmclwiIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc190aXRsZX0+RnJvbnRsaW5lcjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19udW1iZXJ9PlxuICAgICAgICAgICAgICAgICAgICB7ZnJvbnRsaW5lci5hY2h9XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEycHhcIiwgZm9udFdlaWdodDogXCI0MDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICB7XCIgLyBcIn1cbiAgICAgICAgICAgICAgICAgICAgICB7ZnJvbnRsaW5lci50YXJnZXR9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjEzcHggMCAwIDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfYmFyfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfYmFyX25vd31cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYCR7KGZyb250bGluZXIuYWNoIC8gZnJvbnRsaW5lci50YXJnZXQpICogMTAwfSVgLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7cHJvZHVrdGlmaXRhcy5sZW5ndGggIT09IDAgPyAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyIDFmclwiIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc190aXRsZX0+UHJvZHVrdGlmaXRhczwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19udW1iZXJ9PlxuICAgICAgICAgICAgICAgICAgICB7cHJvZHVrdGlmaXRhcy5hY2hpZXZlbWVudH1cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMTJweFwiLCBmb250V2VpZ2h0OiBcIjQwMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgIHtcIiAvIFwifVxuICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWt0aWZpdGFzLnRhcmdldH1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMTNweCAwIDAgMFwiIH19PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJ9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJfbm93fVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIChwcm9kdWt0aWZpdGFzLmFjaGlldmVtZW50IC8gcHJvZHVrdGlmaXRhcy50YXJnZXQpICogMTAwXG4gICAgICAgICAgICAgICAgICAgICAgfSVgLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlclBhZ2UgPSAoKSA9PiB7XG4gICAgaWYgKGxvYWRpbmcgJiYgbG9hZGluZ01lbnUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFNwaW5uZXIgLz5cbiAgICAgICAgICA8Qm90TmF2IC8+XG4gICAgICAgIDwvPlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT5Ib21lPC90aXRsZT5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iZ190b3B9IC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9pbmZvX2dyaWR9PlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMucHB9IHNyYz1cIi9wcC5wbmdcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIxNXB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjE0cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAge3N0YXRlLnVzZXJSZWR1Y2VyLnVzZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIxMnB4XCIgfX0+e3JvbGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL2Fubm91bmNlbWVudFwifT5cbiAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMubm90aWZ9IHNyYz1cIi9ub3RpZi5zdmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIHtub3RpZiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCIgcmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiLTMwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogXCItMTRweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIxcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxOHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZWI4MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuZXdBbm5vdW5jZW1lbnQubGVuZ3RoIDwgOVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG5ld0Fubm91bmNlbWVudC5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIjkrXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICAgICAgICAgICAge3JlbmRlclRvcE1lbnUoKX1cbiAgICAgICAgICAgICAgICAgIHtmb2N1cyA9PT0gXCJQTEFOXCJcbiAgICAgICAgICAgICAgICAgICAgPyByZW5kZXJQbGFuKClcbiAgICAgICAgICAgICAgICAgICAgOiBmb2N1cyA9PT0gXCJVTlBMQU5cIlxuICAgICAgICAgICAgICAgICAgICA/IHJlbmRlclVucGxhbigpXG4gICAgICAgICAgICAgICAgICAgIDogZm9jdXMgPT09IFwiU1BSRUFESU5HXCJcbiAgICAgICAgICAgICAgICAgICAgPyByZW5kZXJTcHJlYWRpbmcoKVxuICAgICAgICAgICAgICAgICAgICA6IGZvY3VzID09PSBcIldPUkstVklTSVRcIlxuICAgICAgICAgICAgICAgICAgICA/IHJlbmRlcldvcmtWaXNpdCgpXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgIHtyZW5kZXJXb3JrRGF5KCl9XG4gICAgICAgICAgICAgICAgICB7cmVuZGVyUHJvZ3Jlc3MoKX1cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEyMHB4XCIgfX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Qm90TmF2IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiByZW5kZXJQYWdlKCk7XG59XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJuYXZfY29udGFpbmVyXCI6IFwiQm90TmF2X25hdl9jb250YWluZXJfXzFrUWI1XCIsXG5cdFwibmF2X2JveFwiOiBcIkJvdE5hdl9uYXZfYm94X18xU1B5VlwiLFxuXHRcIm5hdl9pbWdcIjogXCJCb3ROYXZfbmF2X2ltZ19fM1BUOVVcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkNhcmRfY29udGFpbmVyX18yZXoxY1wiLFxuXHRcInNoYWRvd1wiOiBcIkNhcmRfc2hhZG93X19UcTVfeFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfXzNRa2xUXCIsXG5cdFwid3JhcHBlclwiOiBcIkhvbWVfd3JhcHBlcl9fM0d2MXZcIixcblx0XCJiZ190b3BcIjogXCJIb21lX2JnX3RvcF9fVFR6clVcIixcblx0XCJ1c2VyX2luZm9fZ3JpZFwiOiBcIkhvbWVfdXNlcl9pbmZvX2dyaWRfX2laT255XCIsXG5cdFwicHBcIjogXCJIb21lX3BwX18yWF92SlwiLFxuXHRcIm5vdGlmXCI6IFwiSG9tZV9ub3RpZl9fMnhET0hcIixcblx0XCJtZW51X2dyaWQzXCI6IFwiSG9tZV9tZW51X2dyaWQzX18zY2UxU1wiLFxuXHRcIm1lbnVfZ3JpZDFcIjogXCJIb21lX21lbnVfZ3JpZDFfXzFjc0FEXCIsXG5cdFwiZm9jdXNfbWVudVwiOiBcIkhvbWVfZm9jdXNfbWVudV9fMVliR0ZcIixcblx0XCJtZW51XCI6IFwiSG9tZV9tZW51X18zN28yWVwiLFxuXHRcIm92ZXJ2aWV3XCI6IFwiSG9tZV9vdmVydmlld19fMjV0Q2NcIixcblx0XCJkYXRlXCI6IFwiSG9tZV9kYXRlX18xNG9pMVwiLFxuXHRcInBsYW5fY29udGFpbmVyXCI6IFwiSG9tZV9wbGFuX2NvbnRhaW5lcl9fMzg2Y3BcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX18yQXFDS1wiLFxuXHRcInVucGxhbl9ncmlkXCI6IFwiSG9tZV91bnBsYW5fZ3JpZF9fM3hxYWdcIixcblx0XCJ1bnBsYW5fZ3JpZDJcIjogXCJIb21lX3VucGxhbl9ncmlkMl9fMXBHVTNcIixcblx0XCJudW1fdG90YWxfdW5wbGFuXCI6IFwiSG9tZV9udW1fdG90YWxfdW5wbGFuX18zbzZLUFwiLFxuXHRcImFkZF91bnBsYW5cIjogXCJIb21lX2FkZF91bnBsYW5fXzNOeU93XCIsXG5cdFwicGllX3BlcmNlbnRhZ2VcIjogXCJIb21lX3BpZV9wZXJjZW50YWdlX18zNmEyZVwiLFxuXHRcInByb2dyZXNzX3RpdGxlXCI6IFwiSG9tZV9wcm9ncmVzc190aXRsZV9fMlJUWU9cIixcblx0XCJwcm9ncmVzc19udW1iZXJcIjogXCJIb21lX3Byb2dyZXNzX251bWJlcl9fMlF2X3JcIixcblx0XCJwcm9ncmVzc19iYXJcIjogXCJIb21lX3Byb2dyZXNzX2Jhcl9fMzlvOU1cIixcblx0XCJwcm9ncmVzc19iYXJfbm93XCI6IFwiSG9tZV9wcm9ncmVzc19iYXJfbm93X18xSzBXSlwiLFxuXHRcIm1haW5fbWVudV9jb250YWluZXJcIjogXCJIb21lX21haW5fbWVudV9jb250YWluZXJfXzNFZGp2XCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hcHBcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL21lc3NhZ2luZ1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY2hhcnRqcy0yXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9