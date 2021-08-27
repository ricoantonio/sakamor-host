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
  const {
    0: PP,
    1: setPP
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
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
      (0,_helper__WEBPACK_IMPORTED_MODULE_12__.viewProfilePic)(userData.username).then(data => {
        setPP(data);
      }).catch(err => {
        console.log(err);
      });
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/");
    }
  }, [dispatch]);
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
          lineNumber: 371,
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
        lineNumber: 395,
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
        lineNumber: 413,
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
                    lineNumber: 453,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 444,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    children: val.namaOutlet
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 464,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    style: {
                      fontSize: "14px",
                      fontWeight: "300"
                    },
                    children: val.alamatOutlet
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 465,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 463,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 441,
                columnNumber: 17
              }, this)
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 431,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 430,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 427,
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
        lineNumber: 481,
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
                    lineNumber: 519,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 510,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    children: val.namaSMR
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 529,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    style: {
                      fontSize: "14px",
                      fontWeight: "300"
                    },
                    children: ["Rayon - ", val.rayon]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 530,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    style: {
                      fontSize: "14px",
                      fontWeight: "300"
                    },
                    children: ["Produk Focus - ", val.produkFokus]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 533,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 528,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 507,
                columnNumber: 17
              }, this)
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 497,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 496,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 495,
          columnNumber: 11
        }, this);
      });
    }
  };

  const renderPlan = () => {
    if (loading) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Spinner__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 548,
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
                lineNumber: 555,
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
                  lineNumber: 559,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    fontSize: "18px"
                  },
                  children: ["/", plan.length + planHistory.length]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 562,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 558,
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
                    lineNumber: 568,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 567,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 566,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 554,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().pie_percentage),
                children: planHistory.length === 0 ? "0%" : `${Math.round(planHistory.length / (plan.length + planHistory.length) * 100)}%`
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 586,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_13__.Doughnut, {
                data: dataPlan,
                options: donutOptions,
                width: 100,
                height: 100
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 595,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 585,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 553,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 552,
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
              lineNumber: 606,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                margin: "22px 0"
              },
              children: renderList("PLAN", plan)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 616,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
              href: "/visit/plan",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
                  text: "See Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 619,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 618,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 617,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 605,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 604,
          columnNumber: 11
        }, this)]
      }, void 0, true);
    }
  };

  const renderSpreading = () => {
    if (loading) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Spinner__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 631,
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
                lineNumber: 638,
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
                  lineNumber: 642,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    fontSize: "18px"
                  },
                  children: ["/", plan.length]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 645,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 641,
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
                    lineNumber: 649,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 648,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 647,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 637,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().pie_percentage),
                children: "0%"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 667,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_13__.Doughnut, {
                data: dataSpreading,
                options: donutOptions,
                width: 100,
                height: 100
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 668,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 666,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 636,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 635,
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
              lineNumber: 679,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                margin: "22px 0"
              },
              children: renderList("SPREADING", spreadingHistory)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 689,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
              href: "/visit/spreading/history",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
                  text: "See Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 694,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 693,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 692,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 678,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 677,
          columnNumber: 11
        }, this)]
      }, void 0, true);
    }
  };

  const renderUnplan = () => {
    if (loading) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Spinner__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 706,
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
              lineNumber: 712,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                fontSize: "14px"
              },
              children: "Total Unplan Visit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 715,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().date),
              children: moment__WEBPACK_IMPORTED_MODULE_14___default()().format("MMMM")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 716,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 711,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 710,
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
                    lineNumber: 724,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 723,
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
                    lineNumber: 728,
                    columnNumber: 21
                  }, this), " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 726,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  style: {
                    textAlign: "center"
                  },
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                    src: "/next.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 739,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 738,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 722,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 721,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 720,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 719,
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
              lineNumber: 748,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                margin: "22px 0"
              },
              children: renderList("UNPLAN", unplanHistory)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 758,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
              href: "/visit/unplan/history",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
                  text: "See Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 763,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 762,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 761,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 747,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 746,
          columnNumber: 11
        }, this)]
      }, void 0, true);
    }
  };

  const renderWorkVisit = () => {
    if (loading) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Spinner__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 775,
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
                lineNumber: 782,
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
                  lineNumber: 786,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    fontSize: "18px"
                  },
                  children: ["/", workVisit.length + workVisitHistory.length]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 789,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 785,
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
                    lineNumber: 795,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 794,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 793,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 781,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().pie_percentage),
                children: workVisitHistory.length === 0 ? "0%" : `${Math.round(workVisitHistory.length / (workVisit.length + workVisitHistory.length) * 100)}%`
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 813,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_13__.Doughnut, {
                data: dataWorkVisit,
                options: donutOptions,
                width: 100,
                height: 100
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 822,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 812,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 780,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 779,
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
              lineNumber: 833,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                margin: "22px 0"
              },
              children: renderListWorkVisit(workVisit)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 843,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
              href: "/work-visit",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
                  text: "See Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 848,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 847,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 846,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 832,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 831,
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
                lineNumber: 866,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                style: {
                  fontSize: "12px",
                  fontWeight: "400"
                },
                children: [" / ", workDay.totalHariKerja]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 867,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 865,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 863,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 862,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 861,
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
            lineNumber: 883,
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
              lineNumber: 886,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 884,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 882,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            margin: "13px 0 0 0"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().progress_bar)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 893,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().progress_bar_now),
            style: {
              width: `${data.sales / data.target * 100}%`
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 894,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 892,
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
                lineNumber: 918,
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
                  lineNumber: 921,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 919,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 915,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                margin: "13px 0 0 0"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().progress_bar)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 928,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().progress_bar_now),
                style: {
                  width: `${frontliner.ach / frontliner.target * 100}%`
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 929,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 927,
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
                lineNumber: 945,
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
                  lineNumber: 948,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 946,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 942,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                margin: "13px 0 0 0"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().progress_bar)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 955,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().progress_bar_now),
                style: {
                  width: `${produktifitas.achievement / produktifitas.target * 100}%`
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 956,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 954,
              columnNumber: 17
            }, this)]
          }, void 0, true) : ""]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 907,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 906,
        columnNumber: 9
      }, this);
    }
  };

  const renderPage = () => {
    if (loading && loadingMenu) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Spinner__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 979,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BotNav__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 980,
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
            lineNumber: 987,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
            rel: "icon",
            href: "/favicon.ico"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 988,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 986,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().container),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().wrapper),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().bg_top)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 992,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().user_info_grid),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().pp),
                src: PP ? PP : "/profile-nav1.svg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 994,
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
                  lineNumber: 999,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  style: {
                    fontSize: "12px"
                  },
                  children: role
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1002,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 998,
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
                      lineNumber: 1007,
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
                          lineNumber: 1027,
                          columnNumber: 29
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1016,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1009,
                      columnNumber: 25
                    }, this) : null]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 1006,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1005,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1004,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().main),
                children: [renderTopMenu(), focus === "PLAN" ? renderPlan() : focus === "UNPLAN" ? renderUnplan() : focus === "SPREADING" ? renderSpreading() : focus === "WORK-VISIT" ? renderWorkVisit() : "", renderWorkDay(), renderProgress(), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  style: {
                    marginBottom: "120px"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1051,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1038,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 993,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 991,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 990,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BotNav__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1056,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 985,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYWthLy4vY29tcG9uZW50cy9Cb3ROYXYuanN4Iiwid2VicGFjazovL3Nha2EvLi9jb21wb25lbnRzL0NhcmQuanN4Iiwid2VicGFjazovL3Nha2EvLi9wYWdlcy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vc2FrYS8uL3N0eWxlcy9jb21wb25lbnRzL0JvdE5hdi5tb2R1bGUuY3NzIiwid2VicGFjazovL3Nha2EvLi9zdHlsZXMvY29tcG9uZW50cy9DYXJkLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vc2FrYS8uL3N0eWxlcy9wYWdlcy9Ib21lLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vc2FrYS9leHRlcm5hbCBcImZpcmViYXNlL2FwcFwiIiwid2VicGFjazovL3Nha2EvZXh0ZXJuYWwgXCJmaXJlYmFzZS9tZXNzYWdpbmdcIiIsIndlYnBhY2s6Ly9zYWthL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vc2FrYS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9zYWthL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3Nha2EvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9zYWthL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9zYWthL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9zYWthL2V4dGVybmFsIFwicmVhY3QtY2hhcnRqcy0yXCIiLCJ3ZWJwYWNrOi8vc2FrYS9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vc2FrYS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIk5hdiIsImZvY3VzIiwicm91dGVyIiwidXNlUm91dGVyIiwiYWN0aXZlIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW4iLCJib3JkZXJSYWRpdXMiLCJzdHlsZXMiLCJwYXRobmFtZSIsIkNhcmQiLCJjaGlsZHJlbiIsInN0eWxlIiwic2hhZG93IiwiSG9tZSIsInN0YXRlIiwiZGlzcGF0Y2giLCJhY3Rpb25zIiwidXNlQ29udGV4dCIsIlN0b3JlcyIsInNldEZvY3VzIiwidXNlU3RhdGUiLCJwbGFuIiwic2V0UGxhbiIsIndvcmtWaXNpdCIsInNldFdvcmtWaXNpdCIsIndvcmtWaXNpdEhpc3RvcnkiLCJzZXRXb3JrVmlzaXRIaXN0b3J5IiwicGxhbkhpc3RvcnkiLCJzZXRQbGFuSGlzdG9yeSIsInNwcmVhZGluZ0hpc3RvcnkiLCJzZXRTcHJlYWRpbmdIaXN0b3J5IiwidW5wbGFuSGlzdG9yeSIsInNldFVucGxhbkhpc3RvcnkiLCJyb2xlIiwic2V0Um9sZSIsInRvcE1lbnUiLCJzZXRUb3BNZW51IiwibG9hZGluZyIsInNldExvYWRpbmciLCJsb2FkaW5nTWVudSIsInNldExvYWRpbmdNZW51IiwibmV3QW5ub3VuY2VtZW50Iiwic2V0TmV3QW5ub3VuY2VtZW50Iiwibm90aWYiLCJzZXROb3RpZiIsInNhbGVzVGFyZ2V0Iiwic2V0U2FsZXNUYXJnZXQiLCJzYWxlc1RhcmdldDc1Iiwic2V0U2FsZXNUYXJnZXQ3NSIsInByb2R1a3RpZml0YXMiLCJzZXRQcm9kdWt0aWZpdGFzIiwiZnJvbnRsaW5lciIsInNldEZyb250bGluZXIiLCJOT08iLCJzZXROT08iLCJ3b3JrRGF5Iiwic2V0V29ya0RheSIsImlzTW91bnRlZCIsInVzZVJlZiIsIlBQIiwic2V0UFAiLCJkYXRhUGxhbiIsImRhdGFzZXRzIiwiZGF0YSIsImxlbmd0aCIsImRhdGFTcHJlYWRpbmciLCJkYXRhV29ya1Zpc2l0IiwiZG9udXRPcHRpb25zIiwiY3V0b3V0UGVyY2VudGFnZSIsInRvb2x0aXBzIiwiZW5hYmxlZCIsImhvdmVyIiwibW9kZSIsInJlc3BvbnNpdmUiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwidXNlRWZmZWN0IiwidXNlckRhdGEiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidmlld1Byb2ZpbGVQaWMiLCJ1c2VybmFtZSIsInRoZW4iLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJSb3V0ZXIiLCJnZXRBbGxBbm5vdW5jZW1lbnQiLCJmaWx0ZXIiLCJ2YWwiLCJpc1JlYWQiLCJnZXRXb3JrRGF5IiwidXNlckxvZ2luIiwiZ2V0TWVudSIsInNldE1lbnUiLCJtb250aCIsIm1vbWVudCIsImZvcm1hdCIsInllYXIiLCJnZXRBdXRoIiwicm9sZUNvZGUiLCJnZXRTYWxlc1RhcmdldDc1UGltY2EiLCJnZXRTYWxlc1RhcmdldFBpbWNhIiwiZ2V0RnJvbnRsaW5lclBpbWNhIiwiZ2V0U2FsZXNUYXJnZXRTTVIiLCJnZXRTYWxlc1RhcmdldDc1U01SIiwiZ2V0UHJvZHVrdGlmaXRhcyIsImdldEZyb250bGluZXIiLCJnZXROb28iLCJnZXRQbGFuTGlzdCIsImdldEFsbFdvcmtWaXNpdCIsImlzUGVuaWxhaWFuIiwiZ2V0UGxhbkhpc3RvcnkiLCJnZXRVbnBsYW5Nb250aGx5SGlzdG9yeSIsImdldFNwcmVhZGluZ01vbnRobHlIaXN0b3J5IiwicmVuZGVyVG9wTWVudSIsImF1dGgiLCJtb2R1bGVDb2RlIiwicmVuZGVyIiwibWFwIiwiaW5kZXgiLCJyZW5kZXJMaXN0IiwidHlwZSIsImZvbnRTaXplIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJpZE1hc3RlclBsYW4iLCJmb250V2VpZ2h0IiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJwYWRkaW5nIiwibmFtYU91dGxldCIsImFsYW1hdE91dGxldCIsInJlbmRlckxpc3RXb3JrVmlzaXQiLCJuYW1hU01SIiwicmF5b24iLCJwcm9kdWtGb2t1cyIsInJlbmRlclBsYW4iLCJtYXJnaW5Ub3AiLCJib3JkZXIiLCJNYXRoIiwicm91bmQiLCJyZW5kZXJTcHJlYWRpbmciLCJyZW5kZXJVbnBsYW4iLCJ0ZXh0RGVjb3JhdGlvbiIsInJlbmRlcldvcmtWaXNpdCIsInJlbmRlcldvcmtEYXkiLCJoYXJpS2VyamEiLCJ0b3RhbEhhcmlLZXJqYSIsInJlbmRlclByb2dyZXNzIiwicmVuZGVyU2FsZXMiLCJ0aXRsZSIsInNhbGVzIiwidG9Mb2NhbGVTdHJpbmciLCJ0YXJnZXQiLCJwcm9ncmVzc19iYXIiLCJhY2giLCJhY2hpZXZlbWVudCIsInJlbmRlclBhZ2UiLCJiZ190b3AiLCJtYXJnaW5MZWZ0IiwidXNlclJlZHVjZXIiLCJ1c2VyIiwibmFtZSIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsR0FBRyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWU7QUFDekIsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFDQSxNQUFJQyxNQUFNLGdCQUNSO0FBQ0UsU0FBSyxFQUFFO0FBQ0xDLFdBQUssRUFBRSxLQURGO0FBRUxDLFlBQU0sRUFBRSxLQUZIO0FBR0xDLHFCQUFlLEVBQUUsU0FIWjtBQUlMQyxZQUFNLEVBQUUsVUFKSDtBQUtMQyxrQkFBWSxFQUFFO0FBTFQ7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7O0FBV0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLDJGQUFoQjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFQSxxRkFBaEI7QUFBQSw4QkFDRSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBRSxHQUFaO0FBQUEsK0JBQ0U7QUFBQSxpQ0FDRTtBQUFBLG9DQUNFO0FBQ0UsaUJBQUcsRUFDRFIsTUFBTSxDQUFDUyxRQUFQLEtBQW9CLEdBQXBCLEdBQTBCLGVBQTFCLEdBQTRDO0FBRmhEO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsRUFNR1QsTUFBTSxDQUFDUyxRQUFQLEtBQW9CLEdBQXBCLEdB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Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvY29tcG9uZW50cy9Cb3ROYXYubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IE5hdiA9ICh7IGZvY3VzIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICB2YXIgYWN0aXZlID0gKFxyXG4gICAgPGRpdlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIHdpZHRoOiBcIjVweFwiLFxyXG4gICAgICAgIGhlaWdodDogXCI1cHhcIixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZlYjgwMFwiLFxyXG4gICAgICAgIG1hcmdpbjogXCI1cHggYXV0b1wiLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCI1MHB4XCIsXHJcbiAgICAgIH19XHJcbiAgICAvPlxyXG4gICk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2X2NvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2X2JveH0+XHJcbiAgICAgICAgPExpbmsgaHJlZj17XCIvXCJ9PlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBcIi9cIiA/IFwiL2hvbWUtbmF2LnN2Z1wiIDogXCIvaG9tZS1uYXYxLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7cm91dGVyLnBhdGhuYW1lID09PSBcIi9cIiA/IGFjdGl2ZSA6IFwiXCJ9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPXtcIi9jYWxlbmRhclwifT5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvY2FsZW5kYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gXCIvY2FsZW5kYXItbmF2LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIi9jYWxlbmRhci1uYXYxLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7cm91dGVyLnBhdGhuYW1lID09PSBcIi9jYWxlbmRhclwiID8gYWN0aXZlIDogXCJcIn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e1wiL3Jld2FyZFwifT5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvcmV3YXJkXCJcclxuICAgICAgICAgICAgICAgICAgICA/IFwiL2F3YXJkLW5hdi5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCIvYXdhcmQtbmF2MS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAge3JvdXRlci5wYXRobmFtZSA9PT0gXCIvcmV3YXJkXCIgPyBhY3RpdmUgOiBcIlwifVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj17XCIvXCJ9PlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBcIi9hbm5vdW5jZW1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gXCIvcmV3YXJkcy1uYXYuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiL3Jld2FyZHMtbmF2MS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAge3JvdXRlci5wYXRobmFtZSA9PT0gXCIvYW5ub3VuY2VtZW50XCIgPyBhY3RpdmUgOiBcIlwifVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj17XCIvcHJvZmlsZVwifT5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvcHJvZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIi9wcm9maWxlLW5hdi5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCIvcHJvZmlsZS1uYXYxLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7cm91dGVyLnBhdGhuYW1lID09PSBcIi9wcm9maWxlXCIgPyBhY3RpdmUgOiBcIlwifVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvY29tcG9uZW50cy9DYXJkLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IENhcmQgPSAoeyBjaGlsZHJlbiwgc3R5bGUsIHNoYWRvdyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFpbmVyfSAke3NoYWRvdyA/IHN0eWxlcy5zaGFkb3cgOiBcIlwifWB9XHJcbiAgICAgIHN0eWxlPXtzdHlsZSA/IHN0eWxlIDoge319XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvcGFnZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgU3RvcmVzIH0gZnJvbSBcIi4uL3N0b3JlXCI7XG5cbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi9jb21wb25lbnRzL1NwaW5uZXJcIjtcbmltcG9ydCBCb3ROYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvQm90TmF2XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0J1dHRvblwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZFwiO1xuXG5pbXBvcnQgeyBmaXJlYmFzZUNsb3VkTWVzc2FnaW5nIH0gZnJvbSBcIi4uL3dlYnB1c2hcIjtcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQge1xuICBnZXRBbGxBbm5vdW5jZW1lbnQsXG4gIGdldEFsbFdvcmtWaXNpdCxcbiAgZ2V0QXV0aCxcbiAgZ2V0RnJvbnRsaW5lcixcbiAgZ2V0RnJvbnRsaW5lclBpbWNhLFxuICBnZXRNZW51LFxuICBnZXROb28sXG4gIGdldFBsYW5IaXN0b3J5LFxuICBnZXRQbGFuTGlzdCxcbiAgZ2V0UHJvZHVrdGlmaXRhcyxcbiAgZ2V0U2FsZXNUYXJnZXQ3NVBpbWNhLFxuICBnZXRTYWxlc1RhcmdldDc1U01SLFxuICBnZXRTYWxlc1RhcmdldFBpbWNhLFxuICBnZXRTYWxlc1RhcmdldFNNUixcbiAgZ2V0U3ByZWFkaW5nTW9udGhseUhpc3RvcnksXG4gIGdldFVucGxhbk1vbnRobHlIaXN0b3J5LFxuICBnZXRXb3JrRGF5LFxuICB2aWV3UHJvZmlsZVBpYyxcbn0gZnJvbSBcIi4uL2hlbHBlclwiO1xuXG5pbXBvcnQgeyBEb3VnaG51dCB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCwgYWN0aW9ucyB9ID0gdXNlQ29udGV4dChTdG9yZXMpO1xuICBjb25zdCBbZm9jdXMsIHNldEZvY3VzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGxhbiwgc2V0UGxhbl0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt3b3JrVmlzaXQsIHNldFdvcmtWaXNpdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt3b3JrVmlzaXRIaXN0b3J5LCBzZXRXb3JrVmlzaXRIaXN0b3J5XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3BsYW5IaXN0b3J5LCBzZXRQbGFuSGlzdG9yeV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzcHJlYWRpbmdIaXN0b3J5LCBzZXRTcHJlYWRpbmdIaXN0b3J5XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3VucGxhbkhpc3RvcnksIHNldFVucGxhbkhpc3RvcnldID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcm9sZSwgc2V0Um9sZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3RvcE1lbnUsIHNldFRvcE1lbnVdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2xvYWRpbmdNZW51LCBzZXRMb2FkaW5nTWVudV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW25ld0Fubm91bmNlbWVudCwgc2V0TmV3QW5ub3VuY2VtZW50XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW25vdGlmLCBzZXROb3RpZl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzYWxlc1RhcmdldCwgc2V0U2FsZXNUYXJnZXRdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2FsZXNUYXJnZXQ3NSwgc2V0U2FsZXNUYXJnZXQ3NV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtwcm9kdWt0aWZpdGFzLCBzZXRQcm9kdWt0aWZpdGFzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2Zyb250bGluZXIsIHNldEZyb250bGluZXJdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbTk9PLCBzZXROT09dID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbd29ya0RheSwgc2V0V29ya0RheV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IGlzTW91bnRlZCA9IHVzZVJlZih0cnVlKTtcbiAgY29uc3QgW1BQLCBzZXRQUF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBkYXRhUGxhbiA9IHtcbiAgICBkYXRhc2V0czogW1xuICAgICAge1xuICAgICAgICBkYXRhOlxuICAgICAgICAgIHBsYW5IaXN0b3J5Lmxlbmd0aCA9PT0gMCA/IFswLCAxXSA6IFtwbGFuSGlzdG9yeS5sZW5ndGgsIHBsYW4ubGVuZ3RoXSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXCIjNDE4NjdhXCIsIFwiI2QxZTRlMVwiXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcbiAgY29uc3QgZGF0YVNwcmVhZGluZyA9IHtcbiAgICBkYXRhc2V0czogW1xuICAgICAge1xuICAgICAgICBkYXRhOiBzcHJlYWRpbmdIaXN0b3J5Lmxlbmd0aCA9PT0gMCA/IFswLCAxXSA6IFswLCAxXSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXCIjNDE4NjdhXCIsIFwiI2QxZTRlMVwiXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICBjb25zdCBkYXRhV29ya1Zpc2l0ID0ge1xuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGRhdGE6XG4gICAgICAgICAgd29ya1Zpc2l0SGlzdG9yeS5sZW5ndGggPT09IDBcbiAgICAgICAgICAgID8gWzAsIDFdXG4gICAgICAgICAgICA6IFt3b3JrVmlzaXRIaXN0b3J5Lmxlbmd0aCwgd29ya1Zpc2l0Lmxlbmd0aF0sXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1wiIzQxODY3YVwiLCBcIiNkMWU0ZTFcIl0sXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG4gIGNvbnN0IGRvbnV0T3B0aW9ucyA9IHtcbiAgICBjdXRvdXRQZXJjZW50YWdlOiA3NSxcbiAgICB0b29sdGlwczogeyBlbmFibGVkOiBmYWxzZSB9LFxuICAgIGhvdmVyOiB7IG1vZGU6IG51bGwgfSxcbiAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgIG1haW50YWluQXNwZWN0UmF0aW86IHRydWUsXG4gIH07XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBpZiAoaXNNb3VudGVkLmN1cnJlbnQpIHtcbiAgLy8gICAgIHNldFRva2VuKCk7XG4gIC8vICAgICBhc3luYyBmdW5jdGlvbiBzZXRUb2tlbigpIHtcbiAgLy8gICAgICAgdHJ5IHtcbiAgLy8gICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGZpcmViYXNlQ2xvdWRNZXNzYWdpbmcuaW5pdCgpO1xuICAvLyAgICAgICAgIGlmICh0b2tlbikge1xuICAvLyAgICAgICAgICAgZ2V0TWVzc2FnZSgpO1xuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH1cbiAgLy8gICAgIGZ1bmN0aW9uIGdldE1lc3NhZ2UoKSB7XG4gIC8vICAgICAgIGNvbnN0IG1lc3NhZ2luZyA9IGZpcmViYXNlLm1lc3NhZ2luZygpO1xuICAvLyAgICAgICBjb25zb2xlLmxvZyh7IG1lc3NhZ2luZyB9KTtcbiAgLy8gICAgICAgbWVzc2FnaW5nLm9uTWVzc2FnZSgobWVzc2FnZSkgPT4ge1xuICAvLyAgICAgICAgIHNldE5vdGlmKHRydWUpO1xuICAvLyAgICAgICB9KTtcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vICAgcmV0dXJuICgpID0+IHtcbiAgLy8gICAgIGlzTW91bnRlZC5jdXJyZW50ID0gZmFsc2U7XG4gIC8vICAgfTtcbiAgLy8gfSwgW2lzTW91bnRlZF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XG4gICAgaWYgKHVzZXJEYXRhKSB7XG4gICAgICB2aWV3UHJvZmlsZVBpYyh1c2VyRGF0YS51c2VybmFtZSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBzZXRQUChkYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xuICAgIH1cbiAgfSwgW2Rpc3BhdGNoXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcbiAgICBpZiAodXNlckRhdGEpIHtcbiAgICAgIGdldEFsbEFubm91bmNlbWVudCh1c2VyRGF0YSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdBbm5vdW5jZW1lbnQgPSBkYXRhLmZpbHRlcigodmFsKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdmFsLmlzUmVhZCA9PT0gZmFsc2U7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc2V0TmV3QW5ub3VuY2VtZW50KG5ld0Fubm91bmNlbWVudCk7XG4gICAgICAgICAgaWYgKG5ld0Fubm91bmNlbWVudC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzZXROb3RpZih0cnVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0Tm90aWYoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KTtcbiAgICAgIGdldFdvcmtEYXkoKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHNldFdvcmtEYXkoZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LCBbZGlzcGF0Y2hdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xuICAgIGlmICh1c2VyRGF0YSkge1xuICAgICAgYWN0aW9ucy51c2VyTG9naW4odXNlckRhdGEpO1xuICAgICAgZ2V0TWVudSh1c2VyRGF0YSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBhY3Rpb25zLnNldE1lbnUoZGF0YSk7XG4gICAgICAgICAgc2V0VG9wTWVudShkYXRhKTtcbiAgICAgICAgICBzZXRMb2FkaW5nTWVudShmYWxzZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9XG4gIH0sIFtkaXNwYXRjaF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XG4gICAgdmFyIG1vbnRoID0gbW9tZW50KCkuZm9ybWF0KFwiTVwiKTtcbiAgICB2YXIgeWVhciA9IG1vbWVudCgpLmZvcm1hdChcIllcIik7XG4gICAgaWYgKHVzZXJEYXRhKSB7XG4gICAgICBnZXRBdXRoKHVzZXJEYXRhKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhWzBdLnJvbGVDb2RlID09PSBcIlBJTUNBQlwiKSB7XG4gICAgICAgICAgICBzZXRSb2xlKFwiUElNQ0FCXCIpO1xuICAgICAgICAgICAgc2V0Rm9jdXMoXCJXT1JLLVZJU0lUXCIpO1xuICAgICAgICAgICAgZ2V0U2FsZXNUYXJnZXQ3NVBpbWNhKHVzZXJEYXRhLCBtb250aCwgeWVhcilcbiAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgc2V0U2FsZXNUYXJnZXQ3NShkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICAgICAgICAgIGdldFNhbGVzVGFyZ2V0UGltY2EodXNlckRhdGEsIG1vbnRoLCB5ZWFyKVxuICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICBzZXRTYWxlc1RhcmdldChkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICAgICAgICAgIGdldEZyb250bGluZXJQaW1jYSh1c2VyRGF0YSwgbW9udGgsIHllYXIpXG4gICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgIHNldEZyb250bGluZXIoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhWzBdLnJvbGVDb2RlID09PSBcIlNNUlwiKSB7XG4gICAgICAgICAgICBzZXRSb2xlKFwiU01SXCIpO1xuICAgICAgICAgICAgc2V0Rm9jdXMoXCJQTEFOXCIpO1xuICAgICAgICAgICAgZ2V0U2FsZXNUYXJnZXRTTVIodXNlckRhdGEsIG1vbnRoLCB5ZWFyKVxuICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICBzZXRTYWxlc1RhcmdldChkYXRhKTtcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGdldFNhbGVzVGFyZ2V0NzVTTVIodXNlckRhdGEsIG1vbnRoLCB5ZWFyKVxuICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICBzZXRTYWxlc1RhcmdldDc1KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZ2V0UHJvZHVrdGlmaXRhcyh1c2VyRGF0YSwgbW9udGgsIHllYXIpXG4gICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgIHNldFByb2R1a3RpZml0YXMoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBnZXRGcm9udGxpbmVyKHVzZXJEYXRhLCBtb250aCwgeWVhcilcbiAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgc2V0RnJvbnRsaW5lcihkYXRhKTtcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGdldE5vbyh1c2VyRGF0YSwgbW9udGgsIHllYXIpXG4gICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgIHNldE5PTyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9XG4gIH0sIFtkaXNwYXRjaF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcbiAgICBpZiAodXNlckRhdGEpIHtcbiAgICAgIGlmIChmb2N1cyA9PT0gXCJQTEFOXCIpIHtcbiAgICAgICAgZ2V0UGxhbkxpc3QodXNlckRhdGEpXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHNldFBsYW4oZGF0YSk7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChmb2N1cyA9PT0gXCJXT1JLLVZJU0lUXCIpIHtcbiAgICAgICAgZ2V0QWxsV29ya1Zpc2l0KHVzZXJEYXRhKVxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIHNldFdvcmtWaXNpdChcbiAgICAgICAgICAgICAgZGF0YS5maWx0ZXIoKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWwuaXNQZW5pbGFpYW4gPT09IGZhbHNlO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHNldFdvcmtWaXNpdEhpc3RvcnkoXG4gICAgICAgICAgICAgIGRhdGEuZmlsdGVyKCh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsLmlzUGVuaWxhaWFuID09PSB0cnVlO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9XG4gIH0sIFtmb2N1c10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XG5cbiAgICBpZiAoZm9jdXMgPT09IFwiUExBTlwiKSB7XG4gICAgICBnZXRQbGFuSGlzdG9yeSh1c2VyRGF0YSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBzZXRQbGFuSGlzdG9yeShkYXRhKTtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGZvY3VzID09PSBcIlVOUExBTlwiKSB7XG4gICAgICBnZXRVbnBsYW5Nb250aGx5SGlzdG9yeSh1c2VyRGF0YSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICBzZXRVbnBsYW5IaXN0b3J5KGRhdGEpO1xuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoZm9jdXMgPT09IFwiU1BSRUFESU5HXCIpIHtcbiAgICAgIGdldFNwcmVhZGluZ01vbnRobHlIaXN0b3J5KHVzZXJEYXRhKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgIHNldFNwcmVhZGluZ0hpc3RvcnkoZGF0YSk7XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LCBbZm9jdXNdKTtcblxuICBjb25zdCByZW5kZXJUb3BNZW51ID0gKCkgPT4ge1xuICAgIHZhciBhdXRoID0gdG9wTWVudS5maWx0ZXIoKHZhbCkgPT4ge1xuICAgICAgaWYgKHJvbGUgPT09IFwiU01SXCIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICB2YWwubW9kdWxlQ29kZSA9PT0gXCJQTEFOXCIgfHxcbiAgICAgICAgICB2YWwubW9kdWxlQ29kZSA9PT0gXCJVTlBMQU5cIiB8fFxuICAgICAgICAgIHZhbC5tb2R1bGVDb2RlID09PSBcIlNQUkVBRElOR1wiXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKHJvbGUgPT09IFwiUElNQ0FCXCIpIHtcbiAgICAgICAgcmV0dXJuIHZhbC5tb2R1bGVDb2RlID09PSBcIldPUkstVklTSVRcIjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICAgIHJldHVybiBhdXRoLm1hcCgodmFsLCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgIGZvY3VzID09PSB2YWwubW9kdWxlQ29kZSA/IHN0eWxlcy5mb2N1c19tZW51IDogc3R5bGVzLm1lbnVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0Rm9jdXModmFsLm1vZHVsZUNvZGUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3ZhbC5tb2R1bGVDb2RlID09PSBcIlBMQU5cIlxuICAgICAgICAgICAgICA/IFwiUGxhblwiXG4gICAgICAgICAgICAgIDogdmFsLm1vZHVsZUNvZGUgPT09IFwiVU5QTEFOXCJcbiAgICAgICAgICAgICAgPyBcIlVucGxhblwiXG4gICAgICAgICAgICAgIDogdmFsLm1vZHVsZUNvZGUgPT09IFwiU1BSRUFESU5HXCJcbiAgICAgICAgICAgICAgPyBcIlNwcmVhZGluZ1wiXG4gICAgICAgICAgICAgIDogdmFsLm1vZHVsZUNvZGUgPT09IFwiV09SSy1WSVNJVFwiXG4gICAgICAgICAgICAgID8gXCJXb3JrIFZpc2l0XCJcbiAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBpZiAoYXV0aCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICBhdXRoLmxlbmd0aCA9PT0gM1xuICAgICAgICAgICAgICA/IHN0eWxlcy5tZW51X2dyaWQzXG4gICAgICAgICAgICAgIDogYXV0aC5sZW5ndGggPT09IDFcbiAgICAgICAgICAgICAgPyBzdHlsZXMubWVudV9ncmlkMVxuICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICB7cmVuZGVyKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyTGlzdCA9ICh0eXBlLCBkYXRhKSA9PiB7XG4gICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjE1cHhcIixcbiAgICAgICAgICAgIGNvbG9yOiBcInJnYigyMDgsIDIwOCwgMjA4KVwiLFxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICAgIG1hcmdpbjogXCIzMHB4IDBcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgTm8gSXRlbVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkYXRhLm1hcCgodmFsLCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBocmVmPXtmb2N1cyA9PT0gXCJQTEFOXCIgPyBgL3Zpc2l0L3BsYW4vJHtkYXRhLmlkTWFzdGVyUGxhbn1gIDogXCIvXCJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI3MDBcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1RTU4NzNcIixcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTBweCAwXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMTIlIDg4JVwiIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdHlwZSA9PT0gXCJQTEFOXCIgPyBcIiNGRkYxQ0NcIiA6IFwiI2QxZTRlMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI0cHhcIixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlID09PSBcIlBMQU5cIiA/IFwiI2ZlYjgwMFwiIDogXCIjNDE4NjdhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e3ZhbC5uYW1hT3V0bGV0fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjE0cHhcIiwgZm9udFdlaWdodDogXCIzMDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICB7dmFsLmFsYW1hdE91dGxldH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlckxpc3RXb3JrVmlzaXQgPSAoZGF0YSkgPT4ge1xuICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBmb250U2l6ZTogXCIxNXB4XCIsXG4gICAgICAgICAgICBjb2xvcjogXCJyZ2IoMjA4LCAyMDgsIDIwOClcIixcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICBtYXJnaW46IFwiMzBweCAwXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIE5vIEl0ZW1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZGF0YS5tYXAoKHZhbCwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TGluayBocmVmPXtgd29yay12aXNpdC8ke3ZhbC5pZE1hc3RlclBsYW59YH0+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjcwMFwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzVFNTg3M1wiLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxMHB4IDBcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxMiUgODglXCIgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRkYxQ0NcIixcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmViODAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e3ZhbC5uYW1hU01SfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjE0cHhcIiwgZm9udFdlaWdodDogXCIzMDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICBSYXlvbiAtIHt2YWwucmF5b259XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjE0cHhcIiwgZm9udFdlaWdodDogXCIzMDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICBQcm9kdWsgRm9jdXMgLSB7dmFsLnByb2R1a0Zva3VzfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyUGxhbiA9ICgpID0+IHtcbiAgICBpZiAobG9hZGluZykge1xuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI1cHhcIiwgbWFyZ2luVG9wOiBcIjIycHhcIiB9fSBzaGFkb3c+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm92ZXJ2aWV3fT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfT5cbiAgICAgICAgICAgICAgICAgIHttb21lbnQoKS5mb3JtYXQoXCJEIC8gTU1NIC8gWVlZWVwiKX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogXCIjNUU1ODczXCIsIG1hcmdpblRvcDogXCI3cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjM2cHhcIiwgZm9udFdlaWdodDogXCI2MDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAge3BsYW5IaXN0b3J5Lmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE4cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgL3twbGFuLmxlbmd0aCArIHBsYW5IaXN0b3J5Lmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21hc3Rlci1wbGFuLXZpc2l0XCI+XG4gICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiN3B4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZFQjgwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4IDIycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBBZGQgTmV3IFBsYW4gK1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGllX3BlcmNlbnRhZ2V9PlxuICAgICAgICAgICAgICAgICAge3BsYW5IaXN0b3J5Lmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgICAgICA/IFwiMCVcIlxuICAgICAgICAgICAgICAgICAgICA6IGAke01hdGgucm91bmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAocGxhbkhpc3RvcnkubGVuZ3RoIC9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKHBsYW4ubGVuZ3RoICsgcGxhbkhpc3RvcnkubGVuZ3RoKSkgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAxMDBcbiAgICAgICAgICAgICAgICAgICAgICApfSVgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxEb3VnaG51dFxuICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YVBsYW59XG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtkb251dE9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIycHhcIiwgYm9yZGVyUmFkaXVzOiBcIjMwcHhcIiB9fSBzaGFkb3c+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsYW5fY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxOHB4XCIsXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzVFNTg3M1wiLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgWW91ciBQbGFuIFRvZGF5XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIyMnB4IDBcIiB9fT57cmVuZGVyTGlzdChcIlBMQU5cIiwgcGxhbil9PC9kaXY+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdmlzaXQvcGxhblwiPlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PXtcIlNlZSBEZXRhaWxzXCJ9IC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvPlxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyU3ByZWFkaW5nID0gKCkgPT4ge1xuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICByZXR1cm4gPFNwaW5uZXIgLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPENhcmQgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBtYXJnaW5Ub3A6IFwiMjJweFwiIH19IHNoYWRvdz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcnZpZXd9PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9PlxuICAgICAgICAgICAgICAgICAge21vbWVudCgpLmZvcm1hdChcIkQgLyBNTU0gLyBZWVlZXCIpfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcIiM1RTU4NzNcIiwgbWFyZ2luVG9wOiBcIjdweFwiIH19PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMzZweFwiLCBmb250V2VpZ2h0OiBcIjYwMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICB7c3ByZWFkaW5nSGlzdG9yeS5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIxOHB4XCIgfX0+L3twbGFuLmxlbmd0aH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvdmlzaXQvc3ByZWFkaW5nL1wifT5cbiAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI3cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkVCODAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHggMjJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI0MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIEFkZCBOZXcgTk9PICtcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBpZV9wZXJjZW50YWdlfT4wJTwvZGl2PlxuICAgICAgICAgICAgICAgIDxEb3VnaG51dFxuICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YVNwcmVhZGluZ31cbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2RvbnV0T3B0aW9uc31cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjJweFwiLCBib3JkZXJSYWRpdXM6IFwiMzBweFwiIH19IHNoYWRvdz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxhbl9jb250YWluZXJ9PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNUU1ODczXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTcHJlYWRpbmcgSGlzdG9yeVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMjJweCAwXCIgfX0+XG4gICAgICAgICAgICAgICAge3JlbmRlckxpc3QoXCJTUFJFQURJTkdcIiwgc3ByZWFkaW5nSGlzdG9yeSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Zpc2l0L3NwcmVhZGluZy9oaXN0b3J5XCI+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9e1wiU2VlIERldGFpbHNcIn0gLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXJVbnBsYW4gPSAoKSA9PiB7XG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIG1hcmdpblRvcDogXCIyMnB4XCIgfX0gc2hhZG93PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51bnBsYW5fZ3JpZH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubnVtX3RvdGFsX3VucGxhbn0+XG4gICAgICAgICAgICAgICAge3VucGxhbkhpc3RvcnkubGVuZ3RofVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIxNHB4XCIgfX0+VG90YWwgVW5wbGFuIFZpc2l0PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+e21vbWVudCgpLmZvcm1hdChcIk1NTU1cIil9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPENhcmQgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBtYXJnaW5Ub3A6IFwiMTFweFwiIH19IHNoYWRvdz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdmlzaXQvdW5wbGFuXCI+XG4gICAgICAgICAgICAgIDxhIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVucGxhbl9ncmlkMn0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZF91bnBsYW59PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCItOHB4XCIgfX0+KzwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjE2cHhcIiwgZm9udFdlaWdodDogXCI2MDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgQW55IFVucGxhbiBWaXNpdD9cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjQjlCOUMzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjMwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTNweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBBZGQgeW91ciB1bnBsYW4gdmlzaXQgaGVyZVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17XCIvbmV4dC5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9DYXJkPlxuXG4gICAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIycHhcIiwgYm9yZGVyUmFkaXVzOiBcIjMwcHhcIiB9fSBzaGFkb3c+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsYW5fY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxOHB4XCIsXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzVFNTg3M1wiLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVW5wbGFuIFZpc2l0IEhpc3RvcnlcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjIycHggMFwiIH19PlxuICAgICAgICAgICAgICAgIHtyZW5kZXJMaXN0KFwiVU5QTEFOXCIsIHVucGxhbkhpc3RvcnkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi92aXNpdC91bnBsYW4vaGlzdG9yeVwiPlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PXtcIlNlZSBEZXRhaWxzXCJ9IC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvPlxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyV29ya1Zpc2l0ID0gKCkgPT4ge1xuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICByZXR1cm4gPFNwaW5uZXIgLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPENhcmQgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBtYXJnaW5Ub3A6IFwiMjJweFwiIH19IHNoYWRvdz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcnZpZXd9PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9PlxuICAgICAgICAgICAgICAgICAge21vbWVudCgpLmZvcm1hdChcIkQgLyBNTU0gLyBZWVlZXCIpfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcIiM1RTU4NzNcIiwgbWFyZ2luVG9wOiBcIjdweFwiIH19PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMzZweFwiLCBmb250V2VpZ2h0OiBcIjYwMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICB7d29ya1Zpc2l0SGlzdG9yeS5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIxOHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIC97d29ya1Zpc2l0Lmxlbmd0aCArIHdvcmtWaXNpdEhpc3RvcnkubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbWFzdGVyLXdvcmstdmlzaXRcIj5cbiAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI3cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkVCODAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHggMjJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI0MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIEFkZCBOZXcgK1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGllX3BlcmNlbnRhZ2V9PlxuICAgICAgICAgICAgICAgICAge3dvcmtWaXNpdEhpc3RvcnkubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgICAgID8gXCIwJVwiXG4gICAgICAgICAgICAgICAgICAgIDogYCR7TWF0aC5yb3VuZChcbiAgICAgICAgICAgICAgICAgICAgICAgICh3b3JrVmlzaXRIaXN0b3J5Lmxlbmd0aCAvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICh3b3JrVmlzaXQubGVuZ3RoICsgd29ya1Zpc2l0SGlzdG9yeS5sZW5ndGgpKSAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDEwMFxuICAgICAgICAgICAgICAgICAgICAgICl9JWB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPERvdWdobnV0XG4gICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhV29ya1Zpc2l0fVxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZG9udXRPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MTAwfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMnB4XCIsIGJvcmRlclJhZGl1czogXCIzMHB4XCIgfX0gc2hhZG93PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGFuX2NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1RTU4NzNcIixcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFlvdXIgV29yayBWaXNpdCBUb2RheVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMjJweCAwXCIgfX0+XG4gICAgICAgICAgICAgICAge3JlbmRlckxpc3RXb3JrVmlzaXQod29ya1Zpc2l0KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvd29yay12aXNpdFwiPlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PXtcIlNlZSBEZXRhaWxzXCJ9IC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvPlxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyV29ya0RheSA9ICgpID0+IHtcbiAgICBpZiAod29ya0RheS5sZW5ndGggIT09IDAgJiYgIWxvYWRpbmcgJiYgIWxvYWRpbmdNZW51KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjJweFwiLCBib3JkZXJSYWRpdXM6IFwiNnB4XCIgfX0gc2hhZG93PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxhbl9jb250YWluZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc190aXRsZX0+XG4gICAgICAgICAgICAgIFdvcmtpbmcgRGF5IHttb21lbnQoKS5mb3JtYXQoXCJNTU1NIFlZWVlcIil9XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFdlaWdodDogXCI3MDBcIiB9fT5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjRkVCODAwXCIgfX0+e3dvcmtEYXkuaGFyaUtlcmphfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIxMnB4XCIsIGZvbnRXZWlnaHQ6IFwiNDAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICB7XCIgLyBcIn1cbiAgICAgICAgICAgICAgICAgIHt3b3JrRGF5LnRvdGFsSGFyaUtlcmphfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlbmRlclByb2dyZXNzID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlbmRlclNhbGVzID0gKHRpdGxlLCBkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyIDJmclwiIH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc190aXRsZX0+e3RpdGxlfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19udW1iZXJ9PlxuICAgICAgICAgICAgICB7ZGF0YS5zYWxlcy50b0xvY2FsZVN0cmluZyhcImlkLUlEXCIpfVxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIxMnB4XCIsIGZvbnRXZWlnaHQ6IFwiNDAwXCIgfX0+XG4gICAgICAgICAgICAgICAge1wiIC8gXCJ9XG4gICAgICAgICAgICAgICAge2RhdGEudGFyZ2V0LnRvTG9jYWxlU3RyaW5nKFwiaWQtSURcIil9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjEzcHggMCAwIDBcIiB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfYmFyfT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfYmFyX25vd31cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogYCR7KGRhdGEuc2FsZXMgLyBkYXRhLnRhcmdldCkgKiAxMDB9JWAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKTtcbiAgICB9O1xuICAgIGlmICghbG9hZGluZyAmJiAhbG9hZGluZ01lbnUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMnB4XCIsIGJvcmRlclJhZGl1czogXCI2cHhcIiB9fSBzaGFkb3c+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGFuX2NvbnRhaW5lcn0+XG4gICAgICAgICAgICB7c2FsZXNUYXJnZXQubGVuZ3RoICE9PSAwID8gcmVuZGVyU2FsZXMoXCJTYWxlc1wiLCBzYWxlc1RhcmdldCkgOiBcIlwifVxuICAgICAgICAgICAge3NhbGVzVGFyZ2V0NzUubGVuZ3RoICE9PSAwXG4gICAgICAgICAgICAgID8gcmVuZGVyU2FsZXMoXCJTYWxlcyA3NSVcIiwgc2FsZXNUYXJnZXQ3NSlcbiAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAge05PTy5sZW5ndGggIT09IDAgPyByZW5kZXJTYWxlcyhcIlNhbGVzIE5PT1wiLCBOT08pIDogXCJcIn1cbiAgICAgICAgICAgIHtmcm9udGxpbmVyLmxlbmd0aCAhPT0gMCA/IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxZnIgMWZyXCIgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX3RpdGxlfT5Gcm9udGxpbmVyPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX251bWJlcn0+XG4gICAgICAgICAgICAgICAgICAgIHtmcm9udGxpbmVyLmFjaH1cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMTJweFwiLCBmb250V2VpZ2h0OiBcIjQwMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgIHtcIiAvIFwifVxuICAgICAgICAgICAgICAgICAgICAgIHtmcm9udGxpbmVyLnRhcmdldH1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMTNweCAwIDAgMFwiIH19PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJ9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJfbm93fVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHsoZnJvbnRsaW5lci5hY2ggLyBmcm9udGxpbmVyLnRhcmdldCkgKiAxMDB9JWAsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtwcm9kdWt0aWZpdGFzLmxlbmd0aCAhPT0gMCA/IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxZnIgMWZyXCIgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX3RpdGxlfT5Qcm9kdWt0aWZpdGFzPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX251bWJlcn0+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9kdWt0aWZpdGFzLmFjaGlldmVtZW50fVxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIxMnB4XCIsIGZvbnRXZWlnaHQ6IFwiNDAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAge1wiIC8gXCJ9XG4gICAgICAgICAgICAgICAgICAgICAge3Byb2R1a3RpZml0YXMudGFyZ2V0fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxM3B4IDAgMCAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcn0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcl9ub3d9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGAke1xuICAgICAgICAgICAgICAgICAgICAgICAgKHByb2R1a3RpZml0YXMuYWNoaWV2ZW1lbnQgLyBwcm9kdWt0aWZpdGFzLnRhcmdldCkgKiAxMDBcbiAgICAgICAgICAgICAgICAgICAgICB9JWAsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyUGFnZSA9ICgpID0+IHtcbiAgICBpZiAobG9hZGluZyAmJiBsb2FkaW5nTWVudSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgICAgIDxCb3ROYXYgLz5cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJnX3RvcH0gLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2luZm9fZ3JpZH0+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHB9XG4gICAgICAgICAgICAgICAgICBzcmM9e1BQID8gUFAgOiBcIi9wcm9maWxlLW5hdjEuc3ZnXCJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMTVweFwiIH19PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIxNHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIHtzdGF0ZS51c2VyUmVkdWNlci51c2VyLm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMTJweFwiIH19Pntyb2xlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9hbm5vdW5jZW1lbnRcIn0+XG4gICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLm5vdGlmfSBzcmM9XCIvbm90aWYuc3ZnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7bm90aWYgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiIHJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIi0zMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IFwiLTE0cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMThweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmViODAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV3QW5ub3VuY2VtZW50Lmxlbmd0aCA8IDlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBuZXdBbm5vdW5jZW1lbnQubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCI5K1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICAgICAgICAgIHtyZW5kZXJUb3BNZW51KCl9XG4gICAgICAgICAgICAgICAgICB7Zm9jdXMgPT09IFwiUExBTlwiXG4gICAgICAgICAgICAgICAgICAgID8gcmVuZGVyUGxhbigpXG4gICAgICAgICAgICAgICAgICAgIDogZm9jdXMgPT09IFwiVU5QTEFOXCJcbiAgICAgICAgICAgICAgICAgICAgPyByZW5kZXJVbnBsYW4oKVxuICAgICAgICAgICAgICAgICAgICA6IGZvY3VzID09PSBcIlNQUkVBRElOR1wiXG4gICAgICAgICAgICAgICAgICAgID8gcmVuZGVyU3ByZWFkaW5nKClcbiAgICAgICAgICAgICAgICAgICAgOiBmb2N1cyA9PT0gXCJXT1JLLVZJU0lUXCJcbiAgICAgICAgICAgICAgICAgICAgPyByZW5kZXJXb3JrVmlzaXQoKVxuICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICB7cmVuZGVyV29ya0RheSgpfVxuICAgICAgICAgICAgICAgICAge3JlbmRlclByb2dyZXNzKCl9XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMjBweFwiIH19IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEJvdE5hdiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gcmVuZGVyUGFnZSgpO1xufVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibmF2X2NvbnRhaW5lclwiOiBcIkJvdE5hdl9uYXZfY29udGFpbmVyX18xa1FiNVwiLFxuXHRcIm5hdl9ib3hcIjogXCJCb3ROYXZfbmF2X2JveF9fMVNQeVZcIixcblx0XCJuYXZfaW1nXCI6IFwiQm90TmF2X25hdl9pbWdfXzNQVDlVXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJDYXJkX2NvbnRhaW5lcl9fMmV6MWNcIixcblx0XCJzaGFkb3dcIjogXCJDYXJkX3NoYWRvd19fVHE1X3hcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX18zUWtsVFwiLFxuXHRcIndyYXBwZXJcIjogXCJIb21lX3dyYXBwZXJfXzNHdjF2XCIsXG5cdFwiYmdfdG9wXCI6IFwiSG9tZV9iZ190b3BfX1RUenJVXCIsXG5cdFwidXNlcl9pbmZvX2dyaWRcIjogXCJIb21lX3VzZXJfaW5mb19ncmlkX19pWk9ueVwiLFxuXHRcInBwXCI6IFwiSG9tZV9wcF9fMlhfdkpcIixcblx0XCJub3RpZlwiOiBcIkhvbWVfbm90aWZfXzJ4RE9IXCIsXG5cdFwibWVudV9ncmlkM1wiOiBcIkhvbWVfbWVudV9ncmlkM19fM2NlMVNcIixcblx0XCJtZW51X2dyaWQxXCI6IFwiSG9tZV9tZW51X2dyaWQxX18xY3NBRFwiLFxuXHRcImZvY3VzX21lbnVcIjogXCJIb21lX2ZvY3VzX21lbnVfXzFZYkdGXCIsXG5cdFwibWVudVwiOiBcIkhvbWVfbWVudV9fMzdvMllcIixcblx0XCJvdmVydmlld1wiOiBcIkhvbWVfb3ZlcnZpZXdfXzI1dENjXCIsXG5cdFwiZGF0ZVwiOiBcIkhvbWVfZGF0ZV9fMTRvaTFcIixcblx0XCJwbGFuX2NvbnRhaW5lclwiOiBcIkhvbWVfcGxhbl9jb250YWluZXJfXzM4NmNwXCIsXG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fMkFxQ0tcIixcblx0XCJ1bnBsYW5fZ3JpZFwiOiBcIkhvbWVfdW5wbGFuX2dyaWRfXzN4cWFnXCIsXG5cdFwidW5wbGFuX2dyaWQyXCI6IFwiSG9tZV91bnBsYW5fZ3JpZDJfXzFwR1UzXCIsXG5cdFwibnVtX3RvdGFsX3VucGxhblwiOiBcIkhvbWVfbnVtX3RvdGFsX3VucGxhbl9fM282S1BcIixcblx0XCJhZGRfdW5wbGFuXCI6IFwiSG9tZV9hZGRfdW5wbGFuX18zTnlPd1wiLFxuXHRcInBpZV9wZXJjZW50YWdlXCI6IFwiSG9tZV9waWVfcGVyY2VudGFnZV9fMzZhMmVcIixcblx0XCJwcm9ncmVzc190aXRsZVwiOiBcIkhvbWVfcHJvZ3Jlc3NfdGl0bGVfXzJSVFlPXCIsXG5cdFwicHJvZ3Jlc3NfbnVtYmVyXCI6IFwiSG9tZV9wcm9ncmVzc19udW1iZXJfXzJRdl9yXCIsXG5cdFwicHJvZ3Jlc3NfYmFyXCI6IFwiSG9tZV9wcm9ncmVzc19iYXJfXzM5bzlNXCIsXG5cdFwicHJvZ3Jlc3NfYmFyX25vd1wiOiBcIkhvbWVfcHJvZ3Jlc3NfYmFyX25vd19fMUswV0pcIixcblx0XCJtYWluX21lbnVfY29udGFpbmVyXCI6IFwiSG9tZV9tYWluX21lbnVfY29udGFpbmVyX18zRWRqdlwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9tZXNzYWdpbmdcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNoYXJ0anMtMlwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==