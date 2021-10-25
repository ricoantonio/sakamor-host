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
        href: "/announcement",
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

/***/ "./components/Checkbox.jsx":
/*!*********************************!*\
  !*** ./components/Checkbox.jsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_components_Checkbox_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/components/Checkbox.module.css */ "./styles/components/Checkbox.module.css");
/* harmony import */ var _styles_components_Checkbox_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Checkbox_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-front-end\\components\\Checkbox.jsx";



const Checkbox = ({
  text,
  checked,
  color,
  onClick,
  disabled
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
    className: (_styles_components_Checkbox_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),
    onChange: onClick,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "checkbox",
      checked: checked,
      disabled: disabled
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), text, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      className: color === "green" ? (_styles_components_Checkbox_module_css__WEBPACK_IMPORTED_MODULE_2___default().checkmark_green) : color === "yellow" ? (_styles_components_Checkbox_module_css__WEBPACK_IMPORTED_MODULE_2___default().checkmark_yellow) : (_styles_components_Checkbox_module_css__WEBPACK_IMPORTED_MODULE_2___default().checkmark_green)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Checkbox);

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
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../styles/pages/Home.module.css */ "./styles/pages/Home.module.css");
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./store/index.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Spinner */ "./components/Spinner.jsx");
/* harmony import */ var _components_BotNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/BotNav */ "./components/BotNav.jsx");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Button */ "./components/Button.jsx");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Card */ "./components/Card.jsx");
/* harmony import */ var _components_Checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Checkbox */ "./components/Checkbox.jsx");
/* harmony import */ var _webpush__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../webpush */ "./webpush.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../helper */ "./helper.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_15__);


var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-front-end\\pages\\index.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















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
  const {
    0: pendingApprove,
    1: setPendingApprove
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: dummy,
    1: setDummy
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: loadingApprove,
    1: setLoadingApprove
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: revisePlan,
    1: setRevisePlan
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: reviseUnPlan,
    1: setReviseUnPlan
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: reviseSpreading,
    1: setReviseSpreading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: PP,
    1: setPP
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const isMounted = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);
  var now = new Date();
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
      (0,_helper__WEBPACK_IMPORTED_MODULE_13__.viewProfilePic)(userData.username).then(data => {
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
      // getAllAnnouncement(userData)
      //   .then((data) => {
      //     const newAnnouncement = data.filter((val) => {
      //       return val.isRead === false;
      //     });
      //     setNewAnnouncement(newAnnouncement);
      //     if (newAnnouncement.length > 0) {
      //       setNotif(true);
      //     } else {
      //       setNotif(false);
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      (0,_helper__WEBPACK_IMPORTED_MODULE_13__.getNotificationbyUsername)(userData.username).then(data => {
        setNewAnnouncement(data);

        if (data.length > 0) {
          setNotif(true);
        } else {
          setNotif(false);
        }
      }).catch(err => {
        console.log(err);
      });
      (0,_helper__WEBPACK_IMPORTED_MODULE_13__.getWorkDay)().then(data => {
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
      (0,_helper__WEBPACK_IMPORTED_MODULE_13__.getMenu)(userData).then(data => {
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
    var month = moment__WEBPACK_IMPORTED_MODULE_15___default()().format("M");
    var year = moment__WEBPACK_IMPORTED_MODULE_15___default()().format("Y");

    if (userData) {
      (0,_helper__WEBPACK_IMPORTED_MODULE_13__.getAuth)(userData).then(data => {
        if (data[0].roleCode === "PIMCAB") {
          setRole("PIMCAB");
          setFocus("WORK-VISIT");
          (0,_helper__WEBPACK_IMPORTED_MODULE_13__.getSalesTarget75Pimca)(userData, month, year).then(data => {
            if (data) {
              setSalesTarget75(data);
            }
          }).catch(err => console.log(err));
          (0,_helper__WEBPACK_IMPORTED_MODULE_13__.getSalesTargetPimca)(userData, month, year).then(data => {
            if (data) {
              setSalesTarget(data);
            }
          }).catch(err => console.log(err));
          (0,_helper__WEBPACK_IMPORTED_MODULE_13__.getFrontlinerPimca)(userData, month, year).then(data => {
            if (data) {
              setFrontliner(data);
            }
          }).catch(err => console.log(err));
        } else if (data[0].roleCode === "SMR") {
          setRole("SMR");
          setFocus("PLAN");
          (0,_helper__WEBPACK_IMPORTED_MODULE_13__.getRevisePlanListSmr)(userData).then(data => {
            setRevisePlan(data);
            console.log("revise plan", data);
          }).catch(err => {
            console.log(err);
          });
          (0,_helper__WEBPACK_IMPORTED_MODULE_13__.getReviseUnPlanListSmr)(userData).then(data => {
            setReviseUnPlan(data);
            console.log("revise unplan", data);
          }).catch(err => {
            console.log(err);
          });
          (0,_helper__WEBPACK_IMPORTED_MODULE_13__.getReviseSpreadingListSmr)(userData).then(data => {
            setReviseSpreading(data);
            console.log("revise spreading", data);
          }).catch(err => {
            console.log(err);
          });
          (0,_helper__WEBPACK_IMPORTED_MODULE_13__.getSalesTargetSMR)(userData, month, year).then(data => {
            if (data) {
              setSalesTarget(data); // console.log(data);
            }
          }).catch(err => {
            console.log(err);
          });
          (0,_helper__WEBPACK_IMPORTED_MODULE_13__.getSalesTarget75SMR)(userData, month, year).then(data => {
            if (data) {
              setSalesTarget75(data); // console.log(data);
            }
          }).catch(err => {
            console.log(err);
          });
          (0,_helper__WEBPACK_IMPORTED_MODULE_13__.getProduktifitas)(userData, month, year).then(data => {
            if (data) {
              setProduktifitas(data); // console.log(data);
            }
          }).catch(err => {
            console.log(err);
          });
          (0,_helper__WEBPACK_IMPORTED_MODULE_13__.getFrontliner)(userData, month, year).then(data => {
            if (data) {
              setFrontliner(data); // console.log(data);
            }
          }).catch(err => {
            console.log(err);
          });
          (0,_helper__WEBPACK_IMPORTED_MODULE_13__.getNoo)(userData, month, year).then(data => {
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
        (0,_helper__WEBPACK_IMPORTED_MODULE_13__.getPlanList)(userData).then(data => {
          setPlan(data);
          setLoading(false);
        }).catch(err => {
          console.log(err);
        });
        (0,_helper__WEBPACK_IMPORTED_MODULE_13__.getPlanHistory)(userData).then(data => {
          setPlanHistory(data);
          setLoading(false);
        }).catch(err => {
          console.log(err);
        });
      } else if (focus === "WORK-VISIT") {
        (0,_helper__WEBPACK_IMPORTED_MODULE_13__.getAllWorkVisit)(userData).then(data => {
          // console.log(data);
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
      } else if (focus === "SALES-TRACKING") {
        (0,_helper__WEBPACK_IMPORTED_MODULE_13__.getApproval)(userData).then(data => {
          var dataCheckBox = data.map(val => {
            return _objectSpread(_objectSpread({}, val), {}, {
              checkBox: false
            });
          });
          setPendingApprove(dataCheckBox); // console.log(data);

          setLoading(false);
        }).catch(err => {
          console.log(err);
        });
      } else if (focus === "UNPLAN") {
        (0,_helper__WEBPACK_IMPORTED_MODULE_13__.getUnplanMonthlyHistory)(userData).then(data => {
          // console.log(data);
          setUnplanHistory(data);
          setLoading(false);
        }).catch(err => {
          console.log(err);
        });
      } else if (focus === "SPREADING") {
        (0,_helper__WEBPACK_IMPORTED_MODULE_13__.getSpreadingMonthlyHistory)(userData).then(data => {
          // console.log(data);
          setSpreadingHistory(data);
          setLoading(false);
        }).catch(err => {
          console.log(err);
        });
      }
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/");
    }
  }, [focus]);

  const renderTopMenu = () => {
    var auth = topMenu.filter(val => {
      if (role === "SMR") {
        return val.moduleCode === "PLAN" || val.moduleCode === "UNPLAN" || val.moduleCode === "SPREADING";
      } else if (role === "PIMCAB") {
        return val.moduleCode === "WORK-VISIT" || val.moduleCode === "SALES-TRACKING";
      }
    });

    const render = () => {
      return auth.map((val, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: focus === val.moduleCode ? (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().focus_menu) : (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().menu),
          onClick: () => {
            setFocus(val.moduleCode);
          },
          children: val.moduleCode === "PLAN" ? "Plan" : val.moduleCode === "UNPLAN" ? "Unplan" : val.moduleCode === "SPREADING" ? "Spreading" : val.moduleCode === "WORK-VISIT" ? "Work Visit" : val.moduleCode === "SALES-TRACKING" ? "Approval" : ""
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 445,
          columnNumber: 11
        }, this);
      });
    };

    if (auth) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: auth.length === 3 ? (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().menu_grid3) : auth.length === 2 ? (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().menu_grid1) : "",
        children: render()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 471,
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
        lineNumber: 489,
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
                    lineNumber: 529,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 520,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    children: val.namaOutlet
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 540,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    style: {
                      fontSize: "14px",
                      fontWeight: "300"
                    },
                    children: val.alamatOutlet
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 541,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 539,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 517,
                columnNumber: 17
              }, this)
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 507,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 506,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 503,
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
        lineNumber: 557,
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
                    lineNumber: 595,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 586,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    children: val.namaSMR
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 605,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    style: {
                      fontSize: "14px",
                      fontWeight: "300"
                    },
                    children: ["Rayon - ", val.rayon]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 606,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    style: {
                      fontSize: "14px",
                      fontWeight: "300"
                    },
                    children: ["Produk Focus - ", val.produkFokus]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 609,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 604,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 583,
                columnNumber: 17
              }, this)
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 573,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 572,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 571,
          columnNumber: 11
        }, this);
      });
    }
  };

  const renderPlan = () => {
    if (loading) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Spinner__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 624,
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
            className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().overview),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().date),
                children: moment__WEBPACK_IMPORTED_MODULE_15___default()().format("D / MMM / YYYY")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 631,
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
                  lineNumber: 635,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    fontSize: "18px"
                  },
                  children: ["/", plan.length + planHistory.length]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 638,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 634,
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
                    lineNumber: 644,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 643,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 642,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 630,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().pie_percentage),
                children: planHistory.length === 0 ? "0%" : `${Math.round(planHistory.length / (plan.length + planHistory.length) * 100)}%`
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 662,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_14__.Doughnut, {
                data: dataPlan,
                options: donutOptions,
                width: 100,
                height: 100
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 671,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 661,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 629,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 628,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_9__.default, {
          style: {
            marginTop: "22px",
            borderRadius: "30px"
          },
          shadow: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().plan_container),
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
              lineNumber: 682,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                margin: "22px 0"
              },
              children: renderList("PLAN", plan)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 692,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
              href: "/visit/plan",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
                  text: "See Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 695,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 694,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 693,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 681,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 680,
          columnNumber: 11
        }, this)]
      }, void 0, true);
    }
  };

  const renderSpreading = () => {
    if (loading) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Spinner__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 707,
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
            className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().overview),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().date),
                children: moment__WEBPACK_IMPORTED_MODULE_15___default()().format("D / MMM / YYYY")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 714,
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
                  lineNumber: 718,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    fontSize: "18px"
                  },
                  children: ["/", plan.length]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 721,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 717,
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
                    lineNumber: 725,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 724,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 723,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 713,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().pie_percentage),
                children: "0%"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 743,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_14__.Doughnut, {
                data: dataSpreading,
                options: donutOptions,
                width: 100,
                height: 100
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 744,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 742,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 712,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 711,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_9__.default, {
          style: {
            marginTop: "22px",
            borderRadius: "30px"
          },
          shadow: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().plan_container),
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
              lineNumber: 755,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                margin: "22px 0"
              },
              children: renderList("SPREADING", spreadingHistory)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 765,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
              href: "/visit/spreading/history",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
                  text: "See Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 770,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 769,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 768,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 754,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 753,
          columnNumber: 11
        }, this)]
      }, void 0, true);
    }
  };

  const renderUnplan = () => {
    if (loading) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Spinner__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 782,
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
            className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().unplan_grid),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().num_total_unplan),
              children: unplanHistory.length
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 788,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                fontSize: "14px"
              },
              children: "Total Unplan Visit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 791,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().date),
              children: moment__WEBPACK_IMPORTED_MODULE_15___default()().format("MMMM")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 792,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 787,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 786,
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
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().unplan_grid2),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().add_unplan),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    style: {
                      marginTop: "-8px"
                    },
                    children: "+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 800,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 799,
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
                    lineNumber: 804,
                    columnNumber: 21
                  }, this), " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 802,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  style: {
                    textAlign: "center"
                  },
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                    src: "/next.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 815,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 814,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 798,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 797,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 796,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 795,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_9__.default, {
          style: {
            marginTop: "22px",
            borderRadius: "30px"
          },
          shadow: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().plan_container),
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
              lineNumber: 824,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                margin: "22px 0"
              },
              children: renderList("UNPLAN", unplanHistory)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 834,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
              href: "/visit/unplan/history",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
                  text: "See Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 839,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 838,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 837,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 823,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 822,
          columnNumber: 11
        }, this)]
      }, void 0, true);
    }
  };

  const renderWorkVisit = () => {
    if (loading) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Spinner__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 851,
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
            className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().overview),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().date),
                children: moment__WEBPACK_IMPORTED_MODULE_15___default()().format("D / MMM / YYYY")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 858,
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
                  lineNumber: 862,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    fontSize: "18px"
                  },
                  children: ["/", workVisit.length + workVisitHistory.length]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 865,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 861,
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
                    lineNumber: 871,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 870,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 869,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 857,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().pie_percentage),
                children: workVisitHistory.length === 0 ? "0%" : `${Math.round(workVisitHistory.length / (workVisit.length + workVisitHistory.length) * 100)}%`
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 889,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_14__.Doughnut, {
                data: dataWorkVisit,
                options: donutOptions,
                width: 100,
                height: 100
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 898,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 888,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 856,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 855,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_9__.default, {
          style: {
            marginTop: "22px",
            borderRadius: "30px"
          },
          shadow: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().plan_container),
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
              lineNumber: 909,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                margin: "22px 0"
              },
              children: renderListWorkVisit(workVisit)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 919,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
              href: "/work-visit",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
                  text: "See Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 924,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 923,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 922,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 908,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 907,
          columnNumber: 11
        }, this)]
      }, void 0, true);
    }
  };

  const onApprove = () => {
    var checkPending = pendingApprove.filter(val => {
      return val.checkBox;
    });

    if (checkPending.length) {
      const userData = JSON.parse(localStorage.getItem("user"));

      if (userData) {
        setLoadingApprove(true);

        for (let i = 0; i < checkPending.length; i++) {
          const module = checkPending[i].modul === "Plan" ? "VISITPLAN" : checkPending[i].modul === "UnPlan" ? "VISITUNPLAN" : checkPending[i].modul === "Spreading" ? "SPREADING" : "";
          const data = {
            approvalTransactionDataModel: [{
              systemCode: "SAKAMOR",
              moduleCode: module,
              approvalLevel: 1,
              id: checkPending[i].id,
              approvalID: checkPending[i].modul === "Plan" ? 352 : checkPending[i].modul === "UnPlan" ? 358 : checkPending[i].modul === "Spreading" ? 359 : "",
              docNo: checkPending[i].nomorDokumen,
              pic: "string",
              approvalLine: 0,
              notes: "string",
              needApprove: true,
              approveDate: now.toISOString(),
              status: "string"
            }],
            systemCode: "SAKAMOR",
            moduleCode: module,
            docNo: checkPending[i].nomorDokumen,
            approverFrom: "string",
            approverTo: "string",
            status: "string",
            description: "string",
            notes: "string",
            createdBy: userData.username,
            createdDate: now.toISOString(),
            emailData: {
              systemCode: "SAKAMOR",
              moduleCode: module,
              documentNumber: checkPending[i].nomorDokumen,
              emailTo: "string",
              emailCC: "string",
              emailBCC: "string",
              emailSubject: "string",
              emailBody: "string"
            }
          };
          (0,_helper__WEBPACK_IMPORTED_MODULE_13__.approvalApprove)(data, checkPending[i].modul, checkPending[i].id, userData).then(data => {
            if (i === checkPending.length - 1) {
              setLoadingApprove(false);
              (0,_helper__WEBPACK_IMPORTED_MODULE_13__.getApproval)(userData).then(data => {
                var dataCheckBox = data.map(val => {
                  return _objectSpread(_objectSpread({}, val), {}, {
                    checkBox: false
                  });
                });
                setPendingApprove(dataCheckBox);
                setLoading(false);
              }).catch(err => {
                console.log(err);
              });
            }
          }).catch(err => console.log(err));
        }
      }
    }
  };

  const renderApproval = () => {
    var checkPending = pendingApprove.filter(val => {
      return val.checkBox;
    });

    if (loading) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Spinner__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1030,
        columnNumber: 14
      }, this);
    } else {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_9__.default, {
          style: {
            marginTop: "22px",
            borderRadius: "30px"
          },
          shadow: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().plan_container),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                fontSize: "18px",
                fontWeight: "500",
                color: "#5E5873",
                textAlign: "left"
              },
              children: ["Pending Approval", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  margin: "22px 0"
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  style: {
                    display: "grid",
                    gridTemplateColumns: "10% 90%",
                    paddingBottom: "10px"
                  },
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    style: {
                      paddingTop: "10px"
                    },
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Checkbox__WEBPACK_IMPORTED_MODULE_10__.default, {
                      onClick: () => {
                        if (checkPending.length === pendingApprove.length) {
                          var all = pendingApprove.map(val => {
                            return _objectSpread(_objectSpread({}, val), {}, {
                              checkBox: false
                            });
                          });
                          setPendingApprove(all);
                        } else {
                          var all = pendingApprove.map(val => {
                            return _objectSpread(_objectSpread({}, val), {}, {
                              checkBox: true
                            });
                          });
                          setPendingApprove(all);
                        }
                      },
                      checked: checkPending.length === pendingApprove.length ? true : false
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1054,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1053,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
                    onClick: () => {
                      onApprove();
                    },
                    color: checkPending.length ? "green" : "disable",
                    text: "Approve"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1075,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1046,
                  columnNumber: 19
                }, this), pendingApprove.map((val, index) => {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    style: {
                      display: "grid",
                      gridTemplateColumns: "10% 90%",
                      fontSize: "14px",
                      margin: "8px 0"
                    },
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Checkbox__WEBPACK_IMPORTED_MODULE_10__.default, {
                          checked: val.checkBox,
                          onClick: () => {
                            pendingApprove.splice(index, 1, _objectSpread(_objectSpread({}, pendingApprove[index]), {}, {
                              checkBox: !val.checkBox
                            }));
                            setDummy(dummy + 1);
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1095,
                          columnNumber: 29
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1094,
                        columnNumber: 27
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        onClick: () => {
                          console.log(val);
                          actions.setFocusApproval(val);
                          next_router__WEBPACK_IMPORTED_MODULE_3___default().push(`/approval/${val.modul}/${val.id}`);
                        },
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                          style: {
                            fontWeight: "700",
                            display: "grid",
                            gridTemplateColumns: "2fr 1fr"
                          },
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            children: val.usernameSMR
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1120,
                            columnNumber: 31
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            style: {
                              backgroundColor: "#feb800",
                              color: "white",
                              textAlign: "center",
                              borderRadius: "20px",
                              fontWeight: "500",
                              fontSize: "12px",
                              paddingTop: "1px"
                            },
                            children: val.modul
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1121,
                            columnNumber: 31
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 1113,
                          columnNumber: 29
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                          style: {
                            fontWeight: "700",
                            fontSize: "12px"
                          },
                          children: val.namaOutlet
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1135,
                          columnNumber: 29
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                          style: {
                            fontSize: "12px"
                          },
                          children: val.alamatOutlet
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1143,
                          columnNumber: 29
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 1106,
                        columnNumber: 27
                      }, this)]
                    }, void 0, true)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1085,
                    columnNumber: 23
                  }, this);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1045,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1036,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1035,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1034,
          columnNumber: 11
        }, this)
      }, void 0, false);
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
          className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().plan_container),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().progress_title),
            children: ["Working Day ", moment__WEBPACK_IMPORTED_MODULE_15___default()().format("MMMM YYYY"), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
                lineNumber: 1168,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                style: {
                  fontSize: "12px",
                  fontWeight: "400"
                },
                children: [" / ", workDay.totalHariKerja]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1169,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1167,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1165,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1164,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1163,
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
            className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().progress_title),
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1185,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().progress_number),
            children: [data.sales.toLocaleString("id-ID"), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              style: {
                fontSize: "12px",
                fontWeight: "400"
              },
              children: [" / ", data.target.toLocaleString("id-ID")]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1188,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1186,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 1184,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            margin: "13px 0 0 0"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().progress_bar)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1195,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().progress_bar_now),
            style: {
              width: `${data.sales / data.target * 100}%`
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1196,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 1194,
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
          className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().plan_container),
          children: [salesTarget.length !== 0 ? renderSales("Sales", salesTarget) : "", salesTarget75.length !== 0 ? renderSales("Sales 75%", salesTarget75) : "", NOO.length !== 0 ? renderSales("Sales NOO", NOO) : "", frontliner.length !== 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "1fr 1fr"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().progress_title),
                children: "Frontliner"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1220,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().progress_number),
                children: [frontliner.sales, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    fontSize: "12px",
                    fontWeight: "400"
                  },
                  children: [" / ", frontliner.target]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1223,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1221,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1217,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                margin: "13px 0 0 0"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().progress_bar)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1230,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().progress_bar_now),
                style: {
                  width: `${frontliner.ach / frontliner.target * 100}%`
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1231,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1229,
              columnNumber: 17
            }, this)]
          }, void 0, true) : "", produktifitas.length !== 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "1fr 1fr"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().progress_title),
                children: "Produktifitas"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1247,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().progress_number),
                children: [produktifitas.achievement, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    fontSize: "12px",
                    fontWeight: "400"
                  },
                  children: [" / ", produktifitas.target]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1250,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1248,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1244,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                margin: "13px 0 0 0"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().progress_bar)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1257,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().progress_bar_now),
                style: {
                  width: `${produktifitas.achievement / produktifitas.target * 100}%`
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1258,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1256,
              columnNumber: 17
            }, this)]
          }, void 0, true) : ""]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 1209,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1208,
        columnNumber: 9
      }, this);
    }
  };

  const renderReviseList = () => {
    const renderList = (data, modul) => {
      var render = data.map(val => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            fontSize: "14px",
            margin: "8px 0"
          },
          onClick: () => {
            console.log(val);
            actions.setFocusApproval(val);

            if (modul === "Plan") {
              (0,_helper__WEBPACK_IMPORTED_MODULE_13__.getVisitPlanProduct)(val.idVisitPlan).then(dataInvoice => {
                actions.setReviseAvability(dataInvoice); // console.log(dataInvoice);

                (0,_helper__WEBPACK_IMPORTED_MODULE_13__.getInvoiceDataPosm)(val.idVisitPlan).then(dataPosm => {
                  actions.setReviseVisibility(dataPosm);
                  next_router__WEBPACK_IMPORTED_MODULE_3___default().push(`/revise/${modul}/${val.idVisitPlan}`);
                }).catch(err => {
                  console.log(err);
                });
              }).catch(err => {
                console.log(err);
              });
            } else if (modul === "UnPlan") {
              (0,_helper__WEBPACK_IMPORTED_MODULE_13__.getUnPlanProducts)(val.id).then(dataInvoice => {
                console.log(dataInvoice);
                actions.setReviseAvability(dataInvoice);
                (0,_helper__WEBPACK_IMPORTED_MODULE_13__.getInvoiceDataPosmUnplan)(val.id).then(dataPosm => {
                  actions.setReviseVisibility(dataPosm);
                  console.log(dataPosm);
                  next_router__WEBPACK_IMPORTED_MODULE_3___default().push(`/revise/${modul}/${val.id}`);
                }).catch(err => {
                  console.log(err);
                });
              }).catch(err => {
                console.log(err);
              });
            } else if (modul === "Spreading") {
              (0,_helper__WEBPACK_IMPORTED_MODULE_13__.getSpreadingProduct)(val.id).then(dataInvoice => {
                console.log(dataInvoice);
                (0,_helper__WEBPACK_IMPORTED_MODULE_13__.getInvoiceDataPosmSpreading)(val.id).then(dataPosm => {
                  actions.setReviseVisibility(dataPosm);
                  console.log(dataPosm);
                  next_router__WEBPACK_IMPORTED_MODULE_3___default().push(`/revise/${modul}/${val.id}`);
                }).catch(err => {
                  console.log(err);
                });
              }).catch(err => {
                console.log(err);
              });
            } // router.push(`/revise/${modul}/${val.id}`);

          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  fontWeight: "700",
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr"
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  children: val.usernameSMR
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1354,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  style: {
                    backgroundColor: "#feb800",
                    color: "white",
                    textAlign: "center",
                    borderRadius: "20px",
                    fontWeight: "500",
                    fontSize: "12px",
                    paddingTop: "1px"
                  },
                  children: modul
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1355,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1347,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  fontWeight: "700",
                  fontSize: "12px"
                },
                children: val.namaOutlet
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1369,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  fontSize: "12px"
                },
                children: val.alamatOutlet
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1377,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1346,
              columnNumber: 15
            }, this)
          }, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1281,
          columnNumber: 11
        }, this);
      });
      return render;
    };

    if (revisePlan.length || reviseUnPlan.length || reviseSpreading.length) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_9__.default, {
        style: {
          borderRadius: "5px",
          marginTop: "22px",
          color: "#5E5873"
        },
        shadow: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().plan_container),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: {
              fontSize: "18px",
              fontWeight: "500",
              color: "#5E5873",
              textAlign: "left"
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: "Revise Visit "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1400,
              columnNumber: 15
            }, this), renderList(revisePlan, "Plan"), renderList(reviseUnPlan, "UnPlan"), renderList(reviseSpreading, "Spreading")]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1392,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1391,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1387,
        columnNumber: 9
      }, this);
    }
  };

  const getGreetingTime = m => {
    var g = null; //return g

    if (!m || !m.isValid()) {
      return;
    } //if we can't find a valid or filled moment, we return.


    var split_afternoon = 12; //24hr time to split the afternoon

    var split_evening = 17; //24hr time to split the evening

    var currentHour = parseFloat(m.format("HH"));

    if (currentHour >= split_afternoon && currentHour <= split_evening) {
      g = "Afternoon,";
    } else if (currentHour >= split_evening) {
      g = "Evening,";
    } else {
      g = "Morning,";
    }

    return g;
  };

  const renderPage = () => {
    if (loading && loadingMenu) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Spinner__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1437,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BotNav__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1438,
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
            lineNumber: 1445,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
            rel: "icon",
            href: "/favicon.ico"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1446,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 1444,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().container),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().wrapper),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().bg_top)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1450,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().user_info_grid),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().pp),
                src: PP ? PP : "/profile-nav1.svg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1452,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  marginLeft: "15px"
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  style: {
                    fontSize: "14px"
                  },
                  children: [getGreetingTime(moment__WEBPACK_IMPORTED_MODULE_15___default()()), " ", state.userReducer.user.name]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1457,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  style: {
                    fontSize: "12px"
                  },
                  children: role
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1460,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1456,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                  href: "/notification",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    style: {
                      textDecoration: "none"
                    },
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                      className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().notif),
                      src: "/notif.svg"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1465,
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
                          lineNumber: 1485,
                          columnNumber: 29
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1474,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1467,
                      columnNumber: 25
                    }, this) : null]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 1464,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1463,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1462,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().main),
                children: [renderTopMenu(), focus === "PLAN" ? renderPlan() : focus === "UNPLAN" ? renderUnplan() : focus === "SPREADING" ? renderSpreading() : focus === "WORK-VISIT" ? renderWorkVisit() : focus === "SALES-TRACKING" ? renderApproval() : "", renderReviseList(), renderWorkDay(), renderProgress(), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  style: {
                    marginBottom: "120px"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1512,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1496,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1451,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1449,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1448,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BotNav__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1517,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1443,
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

/***/ "./styles/components/Checkbox.module.css":
/*!***********************************************!*\
  !*** ./styles/components/Checkbox.module.css ***!
  \***********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Checkbox_container__1tMfF",
	"checkmark_green": "Checkbox_checkmark_green__1qNRK",
	"checkmark_yellow": "Checkbox_checkmark_yellow__kY5ze"
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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","helper_js","store_index_js-webpush_js","components_Button_jsx-components_Card_jsx-components_Spinner_jsx"], function() { return __webpack_exec__("./pages/index.jsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYWthLy4vY29tcG9uZW50cy9Cb3ROYXYuanN4Iiwid2VicGFjazovL3Nha2EvLi9jb21wb25lbnRzL0NoZWNrYm94LmpzeCIsIndlYnBhY2s6Ly9zYWthLy4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovL3Nha2EvLi9zdHlsZXMvY29tcG9uZW50cy9Cb3ROYXYubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9zYWthLy4vc3R5bGVzL2NvbXBvbmVudHMvQ2hlY2tib3gubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9zYWthLy4vc3R5bGVzL3BhZ2VzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9zYWthL2V4dGVybmFsIFwiZmlyZWJhc2UvYXBwXCIiLCJ3ZWJwYWNrOi8vc2FrYS9leHRlcm5hbCBcImZpcmViYXNlL21lc3NhZ2luZ1wiIiwid2VicGFjazovL3Nha2EvZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly9zYWthL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3Nha2EvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vc2FrYS9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3Nha2EvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3Nha2EvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3Nha2EvZXh0ZXJuYWwgXCJyZWFjdC1jaGFydGpzLTJcIiIsIndlYnBhY2s6Ly9zYWthL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9zYWthL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiTmF2IiwiZm9jdXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJhY3RpdmUiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbiIsImJvcmRlclJhZGl1cyIsInN0eWxlcyIsInBhdGhuYW1lIiwiQ2hlY2tib3giLCJ0ZXh0IiwiY2hlY2tlZCIsImNvbG9yIiwib25DbGljayIsImRpc2FibGVkIiwiY2hlY2ttYXJrX2dyZWVuIiwiSG9tZSIsInN0YXRlIiwiZGlzcGF0Y2giLCJhY3Rpb25zIiwidXNlQ29udGV4dCIsIlN0b3JlcyIsInNldEZvY3VzIiwidXNlU3RhdGUiLCJwbGFuIiwic2V0UGxhbiIsIndvcmtWaXNpdCIsInNldFdvcmtWaXNpdCIsIndvcmtWaXNpdEhpc3RvcnkiLCJzZXRXb3JrVmlzaXRIaXN0b3J5IiwicGxhbkhpc3RvcnkiLCJzZXRQbGFuSGlzdG9yeSIsInNwcmVhZGluZ0hpc3RvcnkiLCJzZXRTcHJlYWRpbmdIaXN0b3J5IiwidW5wbGFuSGlzdG9yeSIsInNldFVucGxhbkhpc3RvcnkiLCJyb2xlIiwic2V0Um9sZSIsInRvcE1lbnUiLCJzZXRUb3BNZW51IiwibG9hZGluZyIsInNldExvYWRpbmciLCJsb2FkaW5nTWVudSIsInNldExvYWRpbmdNZW51IiwibmV3QW5ub3VuY2VtZW50Iiwic2V0TmV3QW5ub3VuY2VtZW50Iiwibm90aWYiLCJzZXROb3RpZiIsInNhbGVzVGFyZ2V0Iiwic2V0U2FsZXNUYXJnZXQiLCJzYWxlc1RhcmdldDc1Iiwic2V0U2FsZXNUYXJnZXQ3NSIsInByb2R1a3RpZml0YXMiLCJzZXRQcm9kdWt0aWZpdGFzIiwiZnJvbnRsaW5lciIsInNldEZyb250bGluZXIiLCJOT08iLCJzZXROT08iLCJ3b3JrRGF5Iiwic2V0V29ya0RheSIsInBlbmRpbmdBcHByb3ZlIiwic2V0UGVuZGluZ0FwcHJvdmUiLCJkdW1teSIsInNldER1bW15IiwibG9hZGluZ0FwcHJvdmUiLCJzZXRMb2FkaW5nQXBwcm92ZSIsInJldmlzZVBsYW4iLCJzZXRSZXZpc2VQbGFuIiwicmV2aXNlVW5QbGFuIiwic2V0UmV2aXNlVW5QbGFuIiwicmV2aXNlU3ByZWFkaW5nIiwic2V0UmV2aXNlU3ByZWFkaW5nIiwiUFAiLCJzZXRQUCIsImlzTW91bnRlZCIsInVzZVJlZiIsIm5vdyIsIkRhdGUiLCJkYXRhUGxhbiIsImRhdGFzZXRzIiwiZGF0YSIsImxlbmd0aCIsImRhdGFTcHJlYWRpbmciLCJkYXRhV29ya1Zpc2l0IiwiZG9udXRPcHRpb25zIiwiY3V0b3V0UGVyY2VudGFnZSIsInRvb2x0aXBzIiwiZW5hYmxlZCIsImhvdmVyIiwibW9kZSIsInJlc3BvbnNpdmUiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwidXNlRWZmZWN0IiwidXNlckRhdGEiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidmlld1Byb2ZpbGVQaWMiLCJ1c2VybmFtZSIsInRoZW4iLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJSb3V0ZXIiLCJnZXROb3RpZmljYXRpb25ieVVzZXJuYW1lIiwiZ2V0V29ya0RheSIsInVzZXJMb2dpbiIsImdldE1lbnUiLCJzZXRNZW51IiwibW9udGgiLCJtb21lbnQiLCJmb3JtYXQiLCJ5ZWFyIiwiZ2V0QXV0aCIsInJvbGVDb2RlIiwiZ2V0U2FsZXNUYXJnZXQ3NVBpbWNhIiwiZ2V0U2FsZXNUYXJnZXRQaW1jYSIsImdldEZyb250bGluZXJQaW1jYSIsImdldFJldmlzZVBsYW5MaXN0U21yIiwiZ2V0UmV2aXNlVW5QbGFuTGlzdFNtciIsImdldFJldmlzZVNwcmVhZGluZ0xpc3RTbXIiLCJnZXRTYWxlc1RhcmdldFNNUiIsImdldFNhbGVzVGFyZ2V0NzVTTVIiLCJnZXRQcm9kdWt0aWZpdGFzIiwiZ2V0RnJvbnRsaW5lciIsImdldE5vbyIsImdldFBsYW5MaXN0IiwiZ2V0UGxhbkhpc3RvcnkiLCJnZXRBbGxXb3JrVmlzaXQiLCJmaWx0ZXIiLCJ2YWwiLCJpc1BlbmlsYWlhbiIsImdldEFwcHJvdmFsIiwiZGF0YUNoZWNrQm94IiwibWFwIiwiY2hlY2tCb3giLCJnZXRVbnBsYW5Nb250aGx5SGlzdG9yeSIsImdldFNwcmVhZGluZ01vbnRobHlIaXN0b3J5IiwicmVuZGVyVG9wTWVudSIsImF1dGgiLCJtb2R1bGVDb2RlIiwicmVuZGVyIiwiaW5kZXgiLCJyZW5kZXJMaXN0IiwidHlwZSIsImZvbnRTaXplIiwidGV4dEFsaWduIiwiaWRNYXN0ZXJQbGFuIiwiZm9udFdlaWdodCIsImRpc3BsYXkiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwicGFkZGluZyIsIm5hbWFPdXRsZXQiLCJhbGFtYXRPdXRsZXQiLCJyZW5kZXJMaXN0V29ya1Zpc2l0IiwibmFtYVNNUiIsInJheW9uIiwicHJvZHVrRm9rdXMiLCJyZW5kZXJQbGFuIiwibWFyZ2luVG9wIiwiYm9yZGVyIiwiTWF0aCIsInJvdW5kIiwicmVuZGVyU3ByZWFkaW5nIiwicmVuZGVyVW5wbGFuIiwidGV4dERlY29yYXRpb24iLCJyZW5kZXJXb3JrVmlzaXQiLCJvbkFwcHJvdmUiLCJjaGVja1BlbmRpbmciLCJpIiwibW9kdWxlIiwibW9kdWwiLCJhcHByb3ZhbFRyYW5zYWN0aW9uRGF0YU1vZGVsIiwic3lzdGVtQ29kZSIsImFwcHJvdmFsTGV2ZWwiLCJpZCIsImFwcHJvdmFsSUQiLCJkb2NObyIsIm5vbW9yRG9rdW1lbiIsInBpYyIsImFwcHJvdmFsTGluZSIsIm5vdGVzIiwibmVlZEFwcHJvdmUiLCJhcHByb3ZlRGF0ZSIsInRvSVNPU3RyaW5nIiwic3RhdHVzIiwiYXBwcm92ZXJGcm9tIiwiYXBwcm92ZXJUbyIsImRlc2NyaXB0aW9uIiwiY3JlYXRlZEJ5IiwiY3JlYXRlZERhdGUiLCJlbWFpbERhdGEiLCJkb2N1bWVudE51bWJlciIsImVtYWlsVG8iLCJlbWFpbENDIiwiZW1haWxCQ0MiLCJlbWFpbFN1YmplY3QiLCJlbWFpbEJvZHkiLCJhcHByb3ZhbEFwcHJvdmUiLCJyZW5kZXJBcHByb3ZhbCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nVG9wIiwiYWxsIiwic3BsaWNlIiwic2V0Rm9jdXNBcHByb3ZhbCIsInVzZXJuYW1lU01SIiwicmVuZGVyV29ya0RheSIsImhhcmlLZXJqYSIsInRvdGFsSGFyaUtlcmphIiwicmVuZGVyUHJvZ3Jlc3MiLCJyZW5kZXJTYWxlcyIsInRpdGxlIiwic2FsZXMiLCJ0b0xvY2FsZVN0cmluZyIsInRhcmdldCIsInByb2dyZXNzX2JhciIsImFjaCIsImFjaGlldmVtZW50IiwicmVuZGVyUmV2aXNlTGlzdCIsImdldFZpc2l0UGxhblByb2R1Y3QiLCJpZFZpc2l0UGxhbiIsImRhdGFJbnZvaWNlIiwic2V0UmV2aXNlQXZhYmlsaXR5IiwiZ2V0SW52b2ljZURhdGFQb3NtIiwiZGF0YVBvc20iLCJzZXRSZXZpc2VWaXNpYmlsaXR5IiwiZ2V0VW5QbGFuUHJvZHVjdHMiLCJnZXRJbnZvaWNlRGF0YVBvc21VbnBsYW4iLCJnZXRTcHJlYWRpbmdQcm9kdWN0IiwiZ2V0SW52b2ljZURhdGFQb3NtU3ByZWFkaW5nIiwiZ2V0R3JlZXRpbmdUaW1lIiwibSIsImciLCJpc1ZhbGlkIiwic3BsaXRfYWZ0ZXJub29uIiwic3BsaXRfZXZlbmluZyIsImN1cnJlbnRIb3VyIiwicGFyc2VGbG9hdCIsInJlbmRlclBhZ2UiLCJiZ190b3AiLCJtYXJnaW5MZWZ0IiwidXNlclJlZHVjZXIiLCJ1c2VyIiwibmFtZSIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsR0FBRyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWU7QUFDekIsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFDQSxNQUFJQyxNQUFNLGdCQUNSO0FBQ0UsU0FBSyxFQUFFO0FBQ0xDLFdBQUssRUFBRSxLQURGO0FBRUxDLFlBQU0sRUFBRSxLQUZIO0FBR0xDLHFCQUFlLEVBQUUsU0FIWjtBQUlMQyxZQUFNLEVBQUUsVUFKSDtBQUtMQyxrQkFBWSxFQUFFO0FBTFQ7QUFEVDtBQUFB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QUE7QUFBQSxzQkE3Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEYsZUEwRUUsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkExRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUE4RUQ7QUFDRixHQXhGRDs7QUF5RkEsU0FBT1QsVUFBVSxFQUFqQjtBQUNELEM7Ozs7Ozs7Ozs7QUNsL0NEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMxQkEsMEM7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NvbXBvbmVudHMvQm90TmF2Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBOYXYgPSAoeyBmb2N1cyB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgdmFyIGFjdGl2ZSA9IChcclxuICAgIDxkaXZcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICB3aWR0aDogXCI1cHhcIixcclxuICAgICAgICBoZWlnaHQ6IFwiNXB4XCIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZWI4MDBcIixcclxuICAgICAgICBtYXJnaW46IFwiNXB4IGF1dG9cIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTBweFwiLFxyXG4gICAgICB9fVxyXG4gICAgLz5cclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdl9jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdl9ib3h9PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvXCIgPyBcIi9ob21lLW5hdi5zdmdcIiA6IFwiL2hvbWUtbmF2MS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAge3JvdXRlci5wYXRobmFtZSA9PT0gXCIvXCIgPyBhY3RpdmUgOiBcIlwifVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj17XCIvY2FsZW5kYXJcIn0+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2NhbGVuZGFyXCJcclxuICAgICAgICAgICAgICAgICAgICA/IFwiL2NhbGVuZGFyLW5hdi5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCIvY2FsZW5kYXItbmF2MS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAge3JvdXRlci5wYXRobmFtZSA9PT0gXCIvY2FsZW5kYXJcIiA/IGFjdGl2ZSA6IFwiXCJ9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPXtcIi9yZXdhcmRcIn0+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09IFwiL3Jld2FyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIi9hd2FyZC1uYXYuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiL2F3YXJkLW5hdjEuc3ZnXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL3Jld2FyZFwiID8gYWN0aXZlIDogXCJcIn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e1wiL2Fubm91bmNlbWVudFwifT5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvYW5ub3VuY2VtZW50XCJcclxuICAgICAgICAgICAgICAgICAgICA/IFwiL3Jld2FyZHMtbmF2LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIi9yZXdhcmRzLW5hdjEuc3ZnXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL2Fubm91bmNlbWVudFwiID8gYWN0aXZlIDogXCJcIn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e1wiL3Byb2ZpbGVcIn0+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09IFwiL3Byb2ZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gXCIvcHJvZmlsZS1uYXYuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiL3Byb2ZpbGUtbmF2MS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAge3JvdXRlci5wYXRobmFtZSA9PT0gXCIvcHJvZmlsZVwiID8gYWN0aXZlIDogXCJcIn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NvbXBvbmVudHMvQ2hlY2tib3gubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgQ2hlY2tib3ggPSAoeyB0ZXh0LCBjaGVja2VkLCBjb2xvciwgb25DbGljaywgZGlzYWJsZWQgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBvbkNoYW5nZT17b25DbGlja30+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtjaGVja2VkfSBkaXNhYmxlZD17ZGlzYWJsZWR9IC8+XHJcbiAgICAgIHt0ZXh0fVxyXG4gICAgICA8c3BhblxyXG4gICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICBjb2xvciA9PT0gXCJncmVlblwiXHJcbiAgICAgICAgICAgID8gc3R5bGVzLmNoZWNrbWFya19ncmVlblxyXG4gICAgICAgICAgICA6IGNvbG9yID09PSBcInllbGxvd1wiXHJcbiAgICAgICAgICAgID8gc3R5bGVzLmNoZWNrbWFya195ZWxsb3dcclxuICAgICAgICAgICAgOiBzdHlsZXMuY2hlY2ttYXJrX2dyZWVuXHJcbiAgICAgICAgfVxyXG4gICAgICA+PC9zcGFuPlxyXG4gICAgPC9sYWJlbD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3g7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wYWdlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBTdG9yZXMgfSBmcm9tIFwiLi4vc3RvcmVcIjtcblxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU3Bpbm5lclwiO1xuaW1wb3J0IEJvdE5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9Cb3ROYXZcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQnV0dG9uXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkXCI7XG5pbXBvcnQgQ2hlY2tCb3ggZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2hlY2tib3hcIjtcblxuaW1wb3J0IHsgZmlyZWJhc2VDbG91ZE1lc3NhZ2luZyB9IGZyb20gXCIuLi93ZWJwdXNoXCI7XG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuXG5pbXBvcnQge1xuICBhcHByb3ZhbEFwcHJvdmUsXG4gIGdldEFsbEFubm91bmNlbWVudCxcbiAgZ2V0QWxsV29ya1Zpc2l0LFxuICBnZXRBcHByb3ZhbCxcbiAgZ2V0QXV0aCxcbiAgZ2V0RnJvbnRsaW5lcixcbiAgZ2V0RnJvbnRsaW5lclBpbWNhLFxuICBnZXRJbnZvaWNlRGF0YSxcbiAgZ2V0SW52b2ljZURhdGFQb3NtLFxuICBnZXRJbnZvaWNlRGF0YVBvc21TcHJlYWRpbmcsXG4gIGdldEludm9pY2VEYXRhUG9zbVVucGxhbixcbiAgZ2V0SW52b2ljZURhdGFTcHJlYWRpbmcsXG4gIGdldEludm9pY2VEYXRhVW5wbGFuLFxuICBnZXRNZW51LFxuICBnZXROb28sXG4gIGdldE5vdGlmaWNhdGlvbmJ5VXNlcm5hbWUsXG4gIGdldFBsYW5IaXN0b3J5LFxuICBnZXRQbGFuTGlzdCxcbiAgZ2V0UHJvZHVrdGlmaXRhcyxcbiAgZ2V0UmV2aXNlUGxhbkxpc3RTbXIsXG4gIGdldFJldmlzZVNwcmVhZGluZ0xpc3RTbXIsXG4gIGdldFJldmlzZVVuUGxhbkxpc3RTbXIsXG4gIGdldFNhbGVzVGFyZ2V0NzVQaW1jYSxcbiAgZ2V0U2FsZXNUYXJnZXQ3NVNNUixcbiAgZ2V0U2FsZXNUYXJnZXRQaW1jYSxcbiAgZ2V0U2FsZXNUYXJnZXRTTVIsXG4gIGdldFNwcmVhZGluZ01vbnRobHlIaXN0b3J5LFxuICBnZXRTcHJlYWRpbmdQcm9kdWN0LFxuICBnZXRVbnBsYW5Nb250aGx5SGlzdG9yeSxcbiAgZ2V0VW5QbGFuUHJvZHVjdHMsXG4gIGdldFZpc2l0UGxhblByb2R1Y3QsXG4gIGdldFdvcmtEYXksXG4gIHZpZXdQcm9maWxlUGljLFxufSBmcm9tIFwiLi4vaGVscGVyXCI7XG5cbmltcG9ydCB7IERvdWdobnV0IH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgcm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCwgYWN0aW9ucyB9ID0gdXNlQ29udGV4dChTdG9yZXMpO1xuICBjb25zdCBbZm9jdXMsIHNldEZvY3VzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGxhbiwgc2V0UGxhbl0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt3b3JrVmlzaXQsIHNldFdvcmtWaXNpdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt3b3JrVmlzaXRIaXN0b3J5LCBzZXRXb3JrVmlzaXRIaXN0b3J5XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3BsYW5IaXN0b3J5LCBzZXRQbGFuSGlzdG9yeV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzcHJlYWRpbmdIaXN0b3J5LCBzZXRTcHJlYWRpbmdIaXN0b3J5XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3VucGxhbkhpc3RvcnksIHNldFVucGxhbkhpc3RvcnldID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcm9sZSwgc2V0Um9sZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3RvcE1lbnUsIHNldFRvcE1lbnVdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2xvYWRpbmdNZW51LCBzZXRMb2FkaW5nTWVudV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW25ld0Fubm91bmNlbWVudCwgc2V0TmV3QW5ub3VuY2VtZW50XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW25vdGlmLCBzZXROb3RpZl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzYWxlc1RhcmdldCwgc2V0U2FsZXNUYXJnZXRdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2FsZXNUYXJnZXQ3NSwgc2V0U2FsZXNUYXJnZXQ3NV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtwcm9kdWt0aWZpdGFzLCBzZXRQcm9kdWt0aWZpdGFzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2Zyb250bGluZXIsIHNldEZyb250bGluZXJdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbTk9PLCBzZXROT09dID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbd29ya0RheSwgc2V0V29ya0RheV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtwZW5kaW5nQXBwcm92ZSwgc2V0UGVuZGluZ0FwcHJvdmVdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZHVtbXksIHNldER1bW15XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbG9hZGluZ0FwcHJvdmUsIHNldExvYWRpbmdBcHByb3ZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3JldmlzZVBsYW4sIHNldFJldmlzZVBsYW5dID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcmV2aXNlVW5QbGFuLCBzZXRSZXZpc2VVblBsYW5dID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcmV2aXNlU3ByZWFkaW5nLCBzZXRSZXZpc2VTcHJlYWRpbmddID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IFtQUCwgc2V0UFBdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGlzTW91bnRlZCA9IHVzZVJlZih0cnVlKTtcblxuICB2YXIgbm93ID0gbmV3IERhdGUoKTtcblxuICBjb25zdCBkYXRhUGxhbiA9IHtcbiAgICBkYXRhc2V0czogW1xuICAgICAge1xuICAgICAgICBkYXRhOlxuICAgICAgICAgIHBsYW5IaXN0b3J5Lmxlbmd0aCA9PT0gMCA/IFswLCAxXSA6IFtwbGFuSGlzdG9yeS5sZW5ndGgsIHBsYW4ubGVuZ3RoXSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXCIjNDE4NjdhXCIsIFwiI2QxZTRlMVwiXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcbiAgY29uc3QgZGF0YVNwcmVhZGluZyA9IHtcbiAgICBkYXRhc2V0czogW1xuICAgICAge1xuICAgICAgICBkYXRhOiBzcHJlYWRpbmdIaXN0b3J5Lmxlbmd0aCA9PT0gMCA/IFswLCAxXSA6IFswLCAxXSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXCIjNDE4NjdhXCIsIFwiI2QxZTRlMVwiXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICBjb25zdCBkYXRhV29ya1Zpc2l0ID0ge1xuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGRhdGE6XG4gICAgICAgICAgd29ya1Zpc2l0SGlzdG9yeS5sZW5ndGggPT09IDBcbiAgICAgICAgICAgID8gWzAsIDFdXG4gICAgICAgICAgICA6IFt3b3JrVmlzaXRIaXN0b3J5Lmxlbmd0aCwgd29ya1Zpc2l0Lmxlbmd0aF0sXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1wiIzQxODY3YVwiLCBcIiNkMWU0ZTFcIl0sXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgY29uc3QgZG9udXRPcHRpb25zID0ge1xuICAgIGN1dG91dFBlcmNlbnRhZ2U6IDc1LFxuICAgIHRvb2x0aXBzOiB7IGVuYWJsZWQ6IGZhbHNlIH0sXG4gICAgaG92ZXI6IHsgbW9kZTogbnVsbCB9LFxuICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogdHJ1ZSxcbiAgfTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGlmIChpc01vdW50ZWQuY3VycmVudCkge1xuICAvLyAgICAgc2V0VG9rZW4oKTtcbiAgLy8gICAgIGFzeW5jIGZ1bmN0aW9uIHNldFRva2VuKCkge1xuICAvLyAgICAgICB0cnkge1xuICAvLyAgICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZmlyZWJhc2VDbG91ZE1lc3NhZ2luZy5pbml0KCk7XG4gIC8vICAgICAgICAgaWYgKHRva2VuKSB7XG4gIC8vICAgICAgICAgICBnZXRNZXNzYWdlKCk7XG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfVxuICAvLyAgICAgZnVuY3Rpb24gZ2V0TWVzc2FnZSgpIHtcbiAgLy8gICAgICAgY29uc3QgbWVzc2FnaW5nID0gZmlyZWJhc2UubWVzc2FnaW5nKCk7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKHsgbWVzc2FnaW5nIH0pO1xuICAvLyAgICAgICBtZXNzYWdpbmcub25NZXNzYWdlKChtZXNzYWdlKSA9PiB7XG4gIC8vICAgICAgICAgc2V0Tm90aWYodHJ1ZSk7XG4gIC8vICAgICAgIH0pO1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gICByZXR1cm4gKCkgPT4ge1xuICAvLyAgICAgaXNNb3VudGVkLmN1cnJlbnQgPSBmYWxzZTtcbiAgLy8gICB9O1xuICAvLyB9LCBbaXNNb3VudGVkXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcbiAgICBpZiAodXNlckRhdGEpIHtcbiAgICAgIHZpZXdQcm9maWxlUGljKHVzZXJEYXRhLnVzZXJuYW1lKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHNldFBQKGRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfVxuICB9LCBbZGlzcGF0Y2hdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xuICAgIGlmICh1c2VyRGF0YSkge1xuICAgICAgLy8gZ2V0QWxsQW5ub3VuY2VtZW50KHVzZXJEYXRhKVxuICAgICAgLy8gICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgLy8gICAgIGNvbnN0IG5ld0Fubm91bmNlbWVudCA9IGRhdGEuZmlsdGVyKCh2YWwpID0+IHtcbiAgICAgIC8vICAgICAgIHJldHVybiB2YWwuaXNSZWFkID09PSBmYWxzZTtcbiAgICAgIC8vICAgICB9KTtcbiAgICAgIC8vICAgICBzZXROZXdBbm5vdW5jZW1lbnQobmV3QW5ub3VuY2VtZW50KTtcbiAgICAgIC8vICAgICBpZiAobmV3QW5ub3VuY2VtZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgIC8vICAgICAgIHNldE5vdGlmKHRydWUpO1xuICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAvLyAgICAgICBzZXROb3RpZihmYWxzZSk7XG4gICAgICAvLyAgICAgfVxuICAgICAgLy8gICB9KVxuICAgICAgLy8gICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAvLyAgIH0pO1xuICAgICAgZ2V0Tm90aWZpY2F0aW9uYnlVc2VybmFtZSh1c2VyRGF0YS51c2VybmFtZSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBzZXROZXdBbm5vdW5jZW1lbnQoZGF0YSk7XG4gICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2V0Tm90aWYodHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldE5vdGlmKGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGdldFdvcmtEYXkoKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHNldFdvcmtEYXkoZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LCBbZGlzcGF0Y2hdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xuICAgIGlmICh1c2VyRGF0YSkge1xuICAgICAgYWN0aW9ucy51c2VyTG9naW4odXNlckRhdGEpO1xuICAgICAgZ2V0TWVudSh1c2VyRGF0YSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBhY3Rpb25zLnNldE1lbnUoZGF0YSk7XG4gICAgICAgICAgc2V0VG9wTWVudShkYXRhKTtcbiAgICAgICAgICBzZXRMb2FkaW5nTWVudShmYWxzZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9XG4gIH0sIFtkaXNwYXRjaF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XG4gICAgdmFyIG1vbnRoID0gbW9tZW50KCkuZm9ybWF0KFwiTVwiKTtcbiAgICB2YXIgeWVhciA9IG1vbWVudCgpLmZvcm1hdChcIllcIik7XG4gICAgaWYgKHVzZXJEYXRhKSB7XG4gICAgICBnZXRBdXRoKHVzZXJEYXRhKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhWzBdLnJvbGVDb2RlID09PSBcIlBJTUNBQlwiKSB7XG4gICAgICAgICAgICBzZXRSb2xlKFwiUElNQ0FCXCIpO1xuICAgICAgICAgICAgc2V0Rm9jdXMoXCJXT1JLLVZJU0lUXCIpO1xuICAgICAgICAgICAgZ2V0U2FsZXNUYXJnZXQ3NVBpbWNhKHVzZXJEYXRhLCBtb250aCwgeWVhcilcbiAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgc2V0U2FsZXNUYXJnZXQ3NShkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICAgICAgICAgIGdldFNhbGVzVGFyZ2V0UGltY2EodXNlckRhdGEsIG1vbnRoLCB5ZWFyKVxuICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICBzZXRTYWxlc1RhcmdldChkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICAgICAgICAgIGdldEZyb250bGluZXJQaW1jYSh1c2VyRGF0YSwgbW9udGgsIHllYXIpXG4gICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgIHNldEZyb250bGluZXIoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhWzBdLnJvbGVDb2RlID09PSBcIlNNUlwiKSB7XG4gICAgICAgICAgICBzZXRSb2xlKFwiU01SXCIpO1xuICAgICAgICAgICAgc2V0Rm9jdXMoXCJQTEFOXCIpO1xuXG4gICAgICAgICAgICBnZXRSZXZpc2VQbGFuTGlzdFNtcih1c2VyRGF0YSlcbiAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRSZXZpc2VQbGFuKGRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmV2aXNlIHBsYW5cIiwgZGF0YSk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBnZXRSZXZpc2VVblBsYW5MaXN0U21yKHVzZXJEYXRhKVxuICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFJldmlzZVVuUGxhbihkYXRhKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJldmlzZSB1bnBsYW5cIiwgZGF0YSk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBnZXRSZXZpc2VTcHJlYWRpbmdMaXN0U21yKHVzZXJEYXRhKVxuICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFJldmlzZVNwcmVhZGluZyhkYXRhKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJldmlzZSBzcHJlYWRpbmdcIiwgZGF0YSk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGdldFNhbGVzVGFyZ2V0U01SKHVzZXJEYXRhLCBtb250aCwgeWVhcilcbiAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgc2V0U2FsZXNUYXJnZXQoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBnZXRTYWxlc1RhcmdldDc1U01SKHVzZXJEYXRhLCBtb250aCwgeWVhcilcbiAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgc2V0U2FsZXNUYXJnZXQ3NShkYXRhKTtcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGdldFByb2R1a3RpZml0YXModXNlckRhdGEsIG1vbnRoLCB5ZWFyKVxuICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICBzZXRQcm9kdWt0aWZpdGFzKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZ2V0RnJvbnRsaW5lcih1c2VyRGF0YSwgbW9udGgsIHllYXIpXG4gICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgIHNldEZyb250bGluZXIoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBnZXROb28odXNlckRhdGEsIG1vbnRoLCB5ZWFyKVxuICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICBzZXROT08oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfVxuICB9LCBbZGlzcGF0Y2hdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XG4gICAgaWYgKHVzZXJEYXRhKSB7XG4gICAgICBpZiAoZm9jdXMgPT09IFwiUExBTlwiKSB7XG4gICAgICAgIGdldFBsYW5MaXN0KHVzZXJEYXRhKVxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBzZXRQbGFuKGRhdGEpO1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgZ2V0UGxhbkhpc3RvcnkodXNlckRhdGEpXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHNldFBsYW5IaXN0b3J5KGRhdGEpO1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZm9jdXMgPT09IFwiV09SSy1WSVNJVFwiKSB7XG4gICAgICAgIGdldEFsbFdvcmtWaXNpdCh1c2VyRGF0YSlcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBzZXRXb3JrVmlzaXQoXG4gICAgICAgICAgICAgIGRhdGEuZmlsdGVyKCh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsLmlzUGVuaWxhaWFuID09PSBmYWxzZTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzZXRXb3JrVmlzaXRIaXN0b3J5KFxuICAgICAgICAgICAgICBkYXRhLmZpbHRlcigodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5pc1BlbmlsYWlhbiA9PT0gdHJ1ZTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChmb2N1cyA9PT0gXCJTQUxFUy1UUkFDS0lOR1wiKSB7XG4gICAgICAgIGdldEFwcHJvdmFsKHVzZXJEYXRhKVxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICB2YXIgZGF0YUNoZWNrQm94ID0gZGF0YS5tYXAoKHZhbCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4geyAuLi52YWwsIGNoZWNrQm94OiBmYWxzZSB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZXRQZW5kaW5nQXBwcm92ZShkYXRhQ2hlY2tCb3gpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChmb2N1cyA9PT0gXCJVTlBMQU5cIikge1xuICAgICAgICBnZXRVbnBsYW5Nb250aGx5SGlzdG9yeSh1c2VyRGF0YSlcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBzZXRVbnBsYW5IaXN0b3J5KGRhdGEpO1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZm9jdXMgPT09IFwiU1BSRUFESU5HXCIpIHtcbiAgICAgICAgZ2V0U3ByZWFkaW5nTW9udGhseUhpc3RvcnkodXNlckRhdGEpXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgc2V0U3ByZWFkaW5nSGlzdG9yeShkYXRhKTtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9XG4gIH0sIFtmb2N1c10pO1xuXG4gIGNvbnN0IHJlbmRlclRvcE1lbnUgPSAoKSA9PiB7XG4gICAgdmFyIGF1dGggPSB0b3BNZW51LmZpbHRlcigodmFsKSA9PiB7XG4gICAgICBpZiAocm9sZSA9PT0gXCJTTVJcIikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHZhbC5tb2R1bGVDb2RlID09PSBcIlBMQU5cIiB8fFxuICAgICAgICAgIHZhbC5tb2R1bGVDb2RlID09PSBcIlVOUExBTlwiIHx8XG4gICAgICAgICAgdmFsLm1vZHVsZUNvZGUgPT09IFwiU1BSRUFESU5HXCJcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAocm9sZSA9PT0gXCJQSU1DQUJcIikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHZhbC5tb2R1bGVDb2RlID09PSBcIldPUkstVklTSVRcIiB8fCB2YWwubW9kdWxlQ29kZSA9PT0gXCJTQUxFUy1UUkFDS0lOR1wiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gYXV0aC5tYXAoKHZhbCwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICBmb2N1cyA9PT0gdmFsLm1vZHVsZUNvZGUgPyBzdHlsZXMuZm9jdXNfbWVudSA6IHN0eWxlcy5tZW51XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldEZvY3VzKHZhbC5tb2R1bGVDb2RlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt2YWwubW9kdWxlQ29kZSA9PT0gXCJQTEFOXCJcbiAgICAgICAgICAgICAgPyBcIlBsYW5cIlxuICAgICAgICAgICAgICA6IHZhbC5tb2R1bGVDb2RlID09PSBcIlVOUExBTlwiXG4gICAgICAgICAgICAgID8gXCJVbnBsYW5cIlxuICAgICAgICAgICAgICA6IHZhbC5tb2R1bGVDb2RlID09PSBcIlNQUkVBRElOR1wiXG4gICAgICAgICAgICAgID8gXCJTcHJlYWRpbmdcIlxuICAgICAgICAgICAgICA6IHZhbC5tb2R1bGVDb2RlID09PSBcIldPUkstVklTSVRcIlxuICAgICAgICAgICAgICA/IFwiV29yayBWaXNpdFwiXG4gICAgICAgICAgICAgIDogdmFsLm1vZHVsZUNvZGUgPT09IFwiU0FMRVMtVFJBQ0tJTkdcIlxuICAgICAgICAgICAgICA/IFwiQXBwcm92YWxcIlxuICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGlmIChhdXRoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIGF1dGgubGVuZ3RoID09PSAzXG4gICAgICAgICAgICAgID8gc3R5bGVzLm1lbnVfZ3JpZDNcbiAgICAgICAgICAgICAgOiBhdXRoLmxlbmd0aCA9PT0gMlxuICAgICAgICAgICAgICA/IHN0eWxlcy5tZW51X2dyaWQxXG4gICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIHtyZW5kZXIoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXJMaXN0ID0gKHR5cGUsIGRhdGEpID0+IHtcbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZm9udFNpemU6IFwiMTVweFwiLFxuICAgICAgICAgICAgY29sb3I6IFwicmdiKDIwOCwgMjA4LCAyMDgpXCIsXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgbWFyZ2luOiBcIjMwcHggMFwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBObyBJdGVtXG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRhdGEubWFwKCh2YWwsIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9e2ZvY3VzID09PSBcIlBMQU5cIiA/IGAvdmlzaXQvcGxhbi8ke2RhdGEuaWRNYXN0ZXJQbGFufWAgOiBcIi9cIn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjcwMFwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzVFNTg3M1wiLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxMHB4IDBcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxMiUgODglXCIgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0eXBlID09PSBcIlBMQU5cIiA/IFwiI0ZGRjFDQ1wiIDogXCIjZDFlNGUxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjRweFwiLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPT09IFwiUExBTlwiID8gXCIjZmViODAwXCIgOiBcIiM0MTg2N2FcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj57dmFsLm5hbWFPdXRsZXR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMTRweFwiLCBmb250V2VpZ2h0OiBcIjMwMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgIHt2YWwuYWxhbWF0T3V0bGV0fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyTGlzdFdvcmtWaXNpdCA9IChkYXRhKSA9PiB7XG4gICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjE1cHhcIixcbiAgICAgICAgICAgIGNvbG9yOiBcInJnYigyMDgsIDIwOCwgMjA4KVwiLFxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICAgIG1hcmdpbjogXCIzMHB4IDBcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgTm8gSXRlbVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkYXRhLm1hcCgodmFsLCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxMaW5rIGhyZWY9e2B3b3JrLXZpc2l0LyR7dmFsLmlkTWFzdGVyUGxhbn1gfT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNzAwXCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNUU1ODczXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjEwcHggMFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjEyJSA4OCVcIiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGRjFDQ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI0cHhcIixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZWI4MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj57dmFsLm5hbWFTTVJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMTRweFwiLCBmb250V2VpZ2h0OiBcIjMwMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgIFJheW9uIC0ge3ZhbC5yYXlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMTRweFwiLCBmb250V2VpZ2h0OiBcIjMwMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgIFByb2R1ayBGb2N1cyAtIHt2YWwucHJvZHVrRm9rdXN9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXJQbGFuID0gKCkgPT4ge1xuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICByZXR1cm4gPFNwaW5uZXIgLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPENhcmQgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBtYXJnaW5Ub3A6IFwiMjJweFwiIH19IHNoYWRvdz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcnZpZXd9PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9PlxuICAgICAgICAgICAgICAgICAge21vbWVudCgpLmZvcm1hdChcIkQgLyBNTU0gLyBZWVlZXCIpfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcIiM1RTU4NzNcIiwgbWFyZ2luVG9wOiBcIjdweFwiIH19PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMzZweFwiLCBmb250V2VpZ2h0OiBcIjYwMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICB7cGxhbkhpc3RvcnkubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMThweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAve3BsYW4ubGVuZ3RoICsgcGxhbkhpc3RvcnkubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbWFzdGVyLXBsYW4tdmlzaXRcIj5cbiAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI3cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkVCODAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHggMjJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI0MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIEFkZCBOZXcgUGxhbiArXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waWVfcGVyY2VudGFnZX0+XG4gICAgICAgICAgICAgICAgICB7cGxhbkhpc3RvcnkubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgICAgID8gXCIwJVwiXG4gICAgICAgICAgICAgICAgICAgIDogYCR7TWF0aC5yb3VuZChcbiAgICAgICAgICAgICAgICAgICAgICAgIChwbGFuSGlzdG9yeS5sZW5ndGggL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAocGxhbi5sZW5ndGggKyBwbGFuSGlzdG9yeS5sZW5ndGgpKSAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDEwMFxuICAgICAgICAgICAgICAgICAgICAgICl9JWB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPERvdWdobnV0XG4gICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhUGxhbn1cbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2RvbnV0T3B0aW9uc31cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjJweFwiLCBib3JkZXJSYWRpdXM6IFwiMzBweFwiIH19IHNoYWRvdz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxhbl9jb250YWluZXJ9PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNUU1ODczXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBZb3VyIFBsYW4gVG9kYXlcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjIycHggMFwiIH19PntyZW5kZXJMaXN0KFwiUExBTlwiLCBwbGFuKX08L2Rpdj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi92aXNpdC9wbGFuXCI+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9e1wiU2VlIERldGFpbHNcIn0gLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXJTcHJlYWRpbmcgPSAoKSA9PiB7XG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIG1hcmdpblRvcDogXCIyMnB4XCIgfX0gc2hhZG93PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmVydmlld30+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+XG4gICAgICAgICAgICAgICAgICB7bW9tZW50KCkuZm9ybWF0KFwiRCAvIE1NTSAvIFlZWVlcIil9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwiIzVFNTg3M1wiLCBtYXJnaW5Ub3A6IFwiN3B4XCIgfX0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIzNnB4XCIsIGZvbnRXZWlnaHQ6IFwiNjAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIHtzcHJlYWRpbmdIaXN0b3J5Lmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE4cHhcIiB9fT4ve3BsYW4ubGVuZ3RofTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi92aXNpdC9zcHJlYWRpbmcvXCJ9PlxuICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjdweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRUI4MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweCAyMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgQWRkIE5ldyBOT08gK1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGllX3BlcmNlbnRhZ2V9PjAlPC9kaXY+XG4gICAgICAgICAgICAgICAgPERvdWdobnV0XG4gICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhU3ByZWFkaW5nfVxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZG9udXRPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MTAwfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMnB4XCIsIGJvcmRlclJhZGl1czogXCIzMHB4XCIgfX0gc2hhZG93PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGFuX2NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1RTU4NzNcIixcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNwcmVhZGluZyBIaXN0b3J5XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIyMnB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICB7cmVuZGVyTGlzdChcIlNQUkVBRElOR1wiLCBzcHJlYWRpbmdIaXN0b3J5KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdmlzaXQvc3ByZWFkaW5nL2hpc3RvcnlcIj5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD17XCJTZWUgRGV0YWlsc1wifSAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlclVucGxhbiA9ICgpID0+IHtcbiAgICBpZiAobG9hZGluZykge1xuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI1cHhcIiwgbWFyZ2luVG9wOiBcIjIycHhcIiB9fSBzaGFkb3c+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVucGxhbl9ncmlkfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5udW1fdG90YWxfdW5wbGFufT5cbiAgICAgICAgICAgICAgICB7dW5wbGFuSGlzdG9yeS5sZW5ndGh9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjE0cHhcIiB9fT5Ub3RhbCBVbnBsYW4gVmlzaXQ8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfT57bW9tZW50KCkuZm9ybWF0KFwiTU1NTVwiKX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIG1hcmdpblRvcDogXCIxMXB4XCIgfX0gc2hhZG93PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi92aXNpdC91bnBsYW5cIj5cbiAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudW5wbGFuX2dyaWQyfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkX3VucGxhbn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIi04cHhcIiB9fT4rPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMTZweFwiLCBmb250V2VpZ2h0OiBcIjYwMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICBBbnkgVW5wbGFuIFZpc2l0P1xuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNCOUI5QzNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiMzAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxM3B4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIEFkZCB5b3VyIHVucGxhbiB2aXNpdCBoZXJlXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcIi9uZXh0LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L0NhcmQ+XG5cbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjJweFwiLCBib3JkZXJSYWRpdXM6IFwiMzBweFwiIH19IHNoYWRvdz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxhbl9jb250YWluZXJ9PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNUU1ODczXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBVbnBsYW4gVmlzaXQgSGlzdG9yeVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMjJweCAwXCIgfX0+XG4gICAgICAgICAgICAgICAge3JlbmRlckxpc3QoXCJVTlBMQU5cIiwgdW5wbGFuSGlzdG9yeSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Zpc2l0L3VucGxhbi9oaXN0b3J5XCI+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9e1wiU2VlIERldGFpbHNcIn0gLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXJXb3JrVmlzaXQgPSAoKSA9PiB7XG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIG1hcmdpblRvcDogXCIyMnB4XCIgfX0gc2hhZG93PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmVydmlld30+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+XG4gICAgICAgICAgICAgICAgICB7bW9tZW50KCkuZm9ybWF0KFwiRCAvIE1NTSAvIFlZWVlcIil9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwiIzVFNTg3M1wiLCBtYXJnaW5Ub3A6IFwiN3B4XCIgfX0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIzNnB4XCIsIGZvbnRXZWlnaHQ6IFwiNjAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIHt3b3JrVmlzaXRIaXN0b3J5Lmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE4cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgL3t3b3JrVmlzaXQubGVuZ3RoICsgd29ya1Zpc2l0SGlzdG9yeS5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tYXN0ZXItd29yay12aXNpdFwiPlxuICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjdweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRUI4MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweCAyMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgQWRkIE5ldyArXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waWVfcGVyY2VudGFnZX0+XG4gICAgICAgICAgICAgICAgICB7d29ya1Zpc2l0SGlzdG9yeS5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICAgICAgPyBcIjAlXCJcbiAgICAgICAgICAgICAgICAgICAgOiBgJHtNYXRoLnJvdW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgKHdvcmtWaXNpdEhpc3RvcnkubGVuZ3RoIC9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKHdvcmtWaXNpdC5sZW5ndGggKyB3b3JrVmlzaXRIaXN0b3J5Lmxlbmd0aCkpICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwXG4gICAgICAgICAgICAgICAgICAgICAgKX0lYH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8RG91Z2hudXRcbiAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGFXb3JrVmlzaXR9XG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtkb251dE9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIycHhcIiwgYm9yZGVyUmFkaXVzOiBcIjMwcHhcIiB9fSBzaGFkb3c+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsYW5fY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxOHB4XCIsXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzVFNTg3M1wiLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgWW91ciBXb3JrIFZpc2l0IFRvZGF5XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIyMnB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICB7cmVuZGVyTGlzdFdvcmtWaXNpdCh3b3JrVmlzaXQpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi93b3JrLXZpc2l0XCI+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9e1wiU2VlIERldGFpbHNcIn0gLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBvbkFwcHJvdmUgPSAoKSA9PiB7XG4gICAgdmFyIGNoZWNrUGVuZGluZyA9IHBlbmRpbmdBcHByb3ZlLmZpbHRlcigodmFsKSA9PiB7XG4gICAgICByZXR1cm4gdmFsLmNoZWNrQm94O1xuICAgIH0pO1xuICAgIGlmIChjaGVja1BlbmRpbmcubGVuZ3RoKSB7XG4gICAgICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcbiAgICAgIGlmICh1c2VyRGF0YSkge1xuICAgICAgICBzZXRMb2FkaW5nQXBwcm92ZSh0cnVlKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGVja1BlbmRpbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBtb2R1bGUgPVxuICAgICAgICAgICAgY2hlY2tQZW5kaW5nW2ldLm1vZHVsID09PSBcIlBsYW5cIlxuICAgICAgICAgICAgICA/IFwiVklTSVRQTEFOXCJcbiAgICAgICAgICAgICAgOiBjaGVja1BlbmRpbmdbaV0ubW9kdWwgPT09IFwiVW5QbGFuXCJcbiAgICAgICAgICAgICAgPyBcIlZJU0lUVU5QTEFOXCJcbiAgICAgICAgICAgICAgOiBjaGVja1BlbmRpbmdbaV0ubW9kdWwgPT09IFwiU3ByZWFkaW5nXCJcbiAgICAgICAgICAgICAgPyBcIlNQUkVBRElOR1wiXG4gICAgICAgICAgICAgIDogXCJcIjtcblxuICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBhcHByb3ZhbFRyYW5zYWN0aW9uRGF0YU1vZGVsOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzeXN0ZW1Db2RlOiBcIlNBS0FNT1JcIixcbiAgICAgICAgICAgICAgICBtb2R1bGVDb2RlOiBtb2R1bGUsXG4gICAgICAgICAgICAgICAgYXBwcm92YWxMZXZlbDogMSxcbiAgICAgICAgICAgICAgICBpZDogY2hlY2tQZW5kaW5nW2ldLmlkLFxuICAgICAgICAgICAgICAgIGFwcHJvdmFsSUQ6XG4gICAgICAgICAgICAgICAgICBjaGVja1BlbmRpbmdbaV0ubW9kdWwgPT09IFwiUGxhblwiXG4gICAgICAgICAgICAgICAgICAgID8gMzUyXG4gICAgICAgICAgICAgICAgICAgIDogY2hlY2tQZW5kaW5nW2ldLm1vZHVsID09PSBcIlVuUGxhblwiXG4gICAgICAgICAgICAgICAgICAgID8gMzU4XG4gICAgICAgICAgICAgICAgICAgIDogY2hlY2tQZW5kaW5nW2ldLm1vZHVsID09PSBcIlNwcmVhZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgID8gMzU5XG4gICAgICAgICAgICAgICAgICAgIDogXCJcIixcbiAgICAgICAgICAgICAgICBkb2NObzogY2hlY2tQZW5kaW5nW2ldLm5vbW9yRG9rdW1lbixcbiAgICAgICAgICAgICAgICBwaWM6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgYXBwcm92YWxMaW5lOiAwLFxuICAgICAgICAgICAgICAgIG5vdGVzOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIG5lZWRBcHByb3ZlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFwcHJvdmVEYXRlOiBub3cudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3lzdGVtQ29kZTogXCJTQUtBTU9SXCIsXG4gICAgICAgICAgICBtb2R1bGVDb2RlOiBtb2R1bGUsXG4gICAgICAgICAgICBkb2NObzogY2hlY2tQZW5kaW5nW2ldLm5vbW9yRG9rdW1lbixcbiAgICAgICAgICAgIGFwcHJvdmVyRnJvbTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgIGFwcHJvdmVyVG86IFwic3RyaW5nXCIsXG4gICAgICAgICAgICBzdGF0dXM6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgIG5vdGVzOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgY3JlYXRlZEJ5OiB1c2VyRGF0YS51c2VybmFtZSxcbiAgICAgICAgICAgIGNyZWF0ZWREYXRlOiBub3cudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgIGVtYWlsRGF0YToge1xuICAgICAgICAgICAgICBzeXN0ZW1Db2RlOiBcIlNBS0FNT1JcIixcbiAgICAgICAgICAgICAgbW9kdWxlQ29kZTogbW9kdWxlLFxuICAgICAgICAgICAgICBkb2N1bWVudE51bWJlcjogY2hlY2tQZW5kaW5nW2ldLm5vbW9yRG9rdW1lbixcbiAgICAgICAgICAgICAgZW1haWxUbzogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgZW1haWxDQzogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgZW1haWxCQ0M6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgIGVtYWlsU3ViamVjdDogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgZW1haWxCb2R5OiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGFwcHJvdmFsQXBwcm92ZShcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBjaGVja1BlbmRpbmdbaV0ubW9kdWwsXG4gICAgICAgICAgICBjaGVja1BlbmRpbmdbaV0uaWQsXG4gICAgICAgICAgICB1c2VyRGF0YVxuICAgICAgICAgIClcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChpID09PSBjaGVja1BlbmRpbmcubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmdBcHByb3ZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBnZXRBcHByb3ZhbCh1c2VyRGF0YSlcbiAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhQ2hlY2tCb3ggPSBkYXRhLm1hcCgodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4udmFsLCBjaGVja0JveDogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFBlbmRpbmdBcHByb3ZlKGRhdGFDaGVja0JveCk7XG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXJBcHByb3ZhbCA9ICgpID0+IHtcbiAgICB2YXIgY2hlY2tQZW5kaW5nID0gcGVuZGluZ0FwcHJvdmUuZmlsdGVyKCh2YWwpID0+IHtcbiAgICAgIHJldHVybiB2YWwuY2hlY2tCb3g7XG4gICAgfSk7XG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjJweFwiLCBib3JkZXJSYWRpdXM6IFwiMzBweFwiIH19IHNoYWRvdz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxhbl9jb250YWluZXJ9PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNUU1ODczXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBQZW5kaW5nIEFwcHJvdmFsXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMjJweCAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxMCUgOTAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIxMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCIxMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPENoZWNrQm94XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGVja1BlbmRpbmcubGVuZ3RoID09PSBwZW5kaW5nQXBwcm92ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWxsID0gcGVuZGluZ0FwcHJvdmUubWFwKCh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnZhbCwgY2hlY2tCb3g6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGVuZGluZ0FwcHJvdmUoYWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWxsID0gcGVuZGluZ0FwcHJvdmUubWFwKCh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnZhbCwgY2hlY2tCb3g6IHRydWUgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQZW5kaW5nQXBwcm92ZShhbGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrUGVuZGluZy5sZW5ndGggPT09IHBlbmRpbmdBcHByb3ZlLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQXBwcm92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2NoZWNrUGVuZGluZy5sZW5ndGggPyBcImdyZWVuXCIgOiBcImRpc2FibGVcIn1cbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcIkFwcHJvdmVcIn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAge3BlbmRpbmdBcHByb3ZlLm1hcCgodmFsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjEwJSA5MCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiOHB4IDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3ZhbC5jaGVja0JveH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVuZGluZ0FwcHJvdmUuc3BsaWNlKGluZGV4LCAxLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucGVuZGluZ0FwcHJvdmVbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrQm94OiAhdmFsLmNoZWNrQm94LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RHVtbXkoZHVtbXkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5zZXRGb2N1c0FwcHJvdmFsKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgL2FwcHJvdmFsLyR7dmFsLm1vZHVsfS8ke3ZhbC5pZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI3MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMmZyIDFmclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pnt2YWwudXNlcm5hbWVTTVJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZWI4MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWwubW9kdWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjcwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWwubmFtYU91dGxldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjEycHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWwuYWxhbWF0T3V0bGV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlcldvcmtEYXkgPSAoKSA9PiB7XG4gICAgaWYgKHdvcmtEYXkubGVuZ3RoICE9PSAwICYmICFsb2FkaW5nICYmICFsb2FkaW5nTWVudSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIycHhcIiwgYm9yZGVyUmFkaXVzOiBcIjZweFwiIH19IHNoYWRvdz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsYW5fY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfdGl0bGV9PlxuICAgICAgICAgICAgICBXb3JraW5nIERheSB7bW9tZW50KCkuZm9ybWF0KFwiTU1NTSBZWVlZXCIpfVxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiNzAwXCIgfX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiI0ZFQjgwMFwiIH19Pnt3b3JrRGF5LmhhcmlLZXJqYX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMTJweFwiLCBmb250V2VpZ2h0OiBcIjQwMFwiIH19PlxuICAgICAgICAgICAgICAgICAge1wiIC8gXCJ9XG4gICAgICAgICAgICAgICAgICB7d29ya0RheS50b3RhbEhhcmlLZXJqYX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuICBjb25zdCByZW5kZXJQcm9ncmVzcyA9ICgpID0+IHtcbiAgICBjb25zdCByZW5kZXJTYWxlcyA9ICh0aXRsZSwgZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjFmciAyZnJcIiB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfdGl0bGV9Pnt0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfbnVtYmVyfT5cbiAgICAgICAgICAgICAge2RhdGEuc2FsZXMudG9Mb2NhbGVTdHJpbmcoXCJpZC1JRFwiKX1cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMTJweFwiLCBmb250V2VpZ2h0OiBcIjQwMFwiIH19PlxuICAgICAgICAgICAgICAgIHtcIiAvIFwifVxuICAgICAgICAgICAgICAgIHtkYXRhLnRhcmdldC50b0xvY2FsZVN0cmluZyhcImlkLUlEXCIpfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxM3B4IDAgMCAwXCIgfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcn0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcl9ub3d9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGAkeyhkYXRhLnNhbGVzIC8gZGF0YS50YXJnZXQpICogMTAwfSVgLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfTtcbiAgICBpZiAoIWxvYWRpbmcgJiYgIWxvYWRpbmdNZW51KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjJweFwiLCBib3JkZXJSYWRpdXM6IFwiNnB4XCIgfX0gc2hhZG93PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxhbl9jb250YWluZXJ9PlxuICAgICAgICAgICAge3NhbGVzVGFyZ2V0Lmxlbmd0aCAhPT0gMCA/IHJlbmRlclNhbGVzKFwiU2FsZXNcIiwgc2FsZXNUYXJnZXQpIDogXCJcIn1cbiAgICAgICAgICAgIHtzYWxlc1RhcmdldDc1Lmxlbmd0aCAhPT0gMFxuICAgICAgICAgICAgICA/IHJlbmRlclNhbGVzKFwiU2FsZXMgNzUlXCIsIHNhbGVzVGFyZ2V0NzUpXG4gICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgIHtOT08ubGVuZ3RoICE9PSAwID8gcmVuZGVyU2FsZXMoXCJTYWxlcyBOT09cIiwgTk9PKSA6IFwiXCJ9XG4gICAgICAgICAgICB7ZnJvbnRsaW5lci5sZW5ndGggIT09IDAgPyAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyIDFmclwiIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc190aXRsZX0+RnJvbnRsaW5lcjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19udW1iZXJ9PlxuICAgICAgICAgICAgICAgICAgICB7ZnJvbnRsaW5lci5zYWxlc31cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMTJweFwiLCBmb250V2VpZ2h0OiBcIjQwMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgIHtcIiAvIFwifVxuICAgICAgICAgICAgICAgICAgICAgIHtmcm9udGxpbmVyLnRhcmdldH1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMTNweCAwIDAgMFwiIH19PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJ9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJfbm93fVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHsoZnJvbnRsaW5lci5hY2ggLyBmcm9udGxpbmVyLnRhcmdldCkgKiAxMDB9JWAsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtwcm9kdWt0aWZpdGFzLmxlbmd0aCAhPT0gMCA/IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxZnIgMWZyXCIgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX3RpdGxlfT5Qcm9kdWt0aWZpdGFzPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX251bWJlcn0+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9kdWt0aWZpdGFzLmFjaGlldmVtZW50fVxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIxMnB4XCIsIGZvbnRXZWlnaHQ6IFwiNDAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAge1wiIC8gXCJ9XG4gICAgICAgICAgICAgICAgICAgICAge3Byb2R1a3RpZml0YXMudGFyZ2V0fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxM3B4IDAgMCAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcn0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcl9ub3d9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGAke1xuICAgICAgICAgICAgICAgICAgICAgICAgKHByb2R1a3RpZml0YXMuYWNoaWV2ZW1lbnQgLyBwcm9kdWt0aWZpdGFzLnRhcmdldCkgKiAxMDBcbiAgICAgICAgICAgICAgICAgICAgICB9JWAsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyUmV2aXNlTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCByZW5kZXJMaXN0ID0gKGRhdGEsIG1vZHVsKSA9PiB7XG4gICAgICB2YXIgcmVuZGVyID0gZGF0YS5tYXAoKHZhbCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICAgICAgICAgICAgbWFyZ2luOiBcIjhweCAwXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWwpO1xuICAgICAgICAgICAgICBhY3Rpb25zLnNldEZvY3VzQXBwcm92YWwodmFsKTtcbiAgICAgICAgICAgICAgaWYgKG1vZHVsID09PSBcIlBsYW5cIikge1xuICAgICAgICAgICAgICAgIGdldFZpc2l0UGxhblByb2R1Y3QodmFsLmlkVmlzaXRQbGFuKVxuICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGFJbnZvaWNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnMuc2V0UmV2aXNlQXZhYmlsaXR5KGRhdGFJbnZvaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YUludm9pY2UpO1xuICAgICAgICAgICAgICAgICAgICBnZXRJbnZvaWNlRGF0YVBvc20odmFsLmlkVmlzaXRQbGFuKVxuICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRhUG9zbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5zZXRSZXZpc2VWaXNpYmlsaXR5KGRhdGFQb3NtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvcmV2aXNlLyR7bW9kdWx9LyR7dmFsLmlkVmlzaXRQbGFufWApO1xuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vZHVsID09PSBcIlVuUGxhblwiKSB7XG4gICAgICAgICAgICAgICAgZ2V0VW5QbGFuUHJvZHVjdHModmFsLmlkKVxuICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGFJbnZvaWNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFJbnZvaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5zZXRSZXZpc2VBdmFiaWxpdHkoZGF0YUludm9pY2UpO1xuICAgICAgICAgICAgICAgICAgICBnZXRJbnZvaWNlRGF0YVBvc21VbnBsYW4odmFsLmlkKVxuICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRhUG9zbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5zZXRSZXZpc2VWaXNpYmlsaXR5KGRhdGFQb3NtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFQb3NtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvcmV2aXNlLyR7bW9kdWx9LyR7dmFsLmlkfWApO1xuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vZHVsID09PSBcIlNwcmVhZGluZ1wiKSB7XG4gICAgICAgICAgICAgICAgZ2V0U3ByZWFkaW5nUHJvZHVjdCh2YWwuaWQpXG4gICAgICAgICAgICAgICAgICAudGhlbigoZGF0YUludm9pY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YUludm9pY2UpO1xuICAgICAgICAgICAgICAgICAgICBnZXRJbnZvaWNlRGF0YVBvc21TcHJlYWRpbmcodmFsLmlkKVxuICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRhUG9zbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5zZXRSZXZpc2VWaXNpYmlsaXR5KGRhdGFQb3NtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFQb3NtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvcmV2aXNlLyR7bW9kdWx9LyR7dmFsLmlkfWApO1xuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIHJvdXRlci5wdXNoKGAvcmV2aXNlLyR7bW9kdWx9LyR7dmFsLmlkfWApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNzAwXCIsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICAgICAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjJmciAxZnJcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdj57dmFsLnVzZXJuYW1lU01SfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmViODAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjFweFwiLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7bW9kdWx9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjcwMFwiLFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxMnB4XCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt2YWwubmFtYU91dGxldH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjEycHhcIiB9fT57dmFsLmFsYW1hdE91dGxldH08L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlbmRlcjtcbiAgICB9O1xuICAgIGlmIChyZXZpc2VQbGFuLmxlbmd0aCB8fCByZXZpc2VVblBsYW4ubGVuZ3RoIHx8IHJldmlzZVNwcmVhZGluZy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBtYXJnaW5Ub3A6IFwiMjJweFwiLCBjb2xvcjogXCIjNUU1ODczXCIgfX1cbiAgICAgICAgICBzaGFkb3dcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxhbl9jb250YWluZXJ9PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1RTU4NzNcIixcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2PlJldmlzZSBWaXNpdCA8L2Rpdj5cbiAgICAgICAgICAgICAge3JlbmRlckxpc3QocmV2aXNlUGxhbiwgXCJQbGFuXCIpfVxuICAgICAgICAgICAgICB7cmVuZGVyTGlzdChyZXZpc2VVblBsYW4sIFwiVW5QbGFuXCIpfVxuICAgICAgICAgICAgICB7cmVuZGVyTGlzdChyZXZpc2VTcHJlYWRpbmcsIFwiU3ByZWFkaW5nXCIpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldEdyZWV0aW5nVGltZSA9IChtKSA9PiB7XG4gICAgdmFyIGcgPSBudWxsOyAvL3JldHVybiBnXG5cbiAgICBpZiAoIW0gfHwgIW0uaXNWYWxpZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvL2lmIHdlIGNhbid0IGZpbmQgYSB2YWxpZCBvciBmaWxsZWQgbW9tZW50LCB3ZSByZXR1cm4uXG5cbiAgICB2YXIgc3BsaXRfYWZ0ZXJub29uID0gMTI7IC8vMjRociB0aW1lIHRvIHNwbGl0IHRoZSBhZnRlcm5vb25cbiAgICB2YXIgc3BsaXRfZXZlbmluZyA9IDE3OyAvLzI0aHIgdGltZSB0byBzcGxpdCB0aGUgZXZlbmluZ1xuICAgIHZhciBjdXJyZW50SG91ciA9IHBhcnNlRmxvYXQobS5mb3JtYXQoXCJISFwiKSk7XG5cbiAgICBpZiAoY3VycmVudEhvdXIgPj0gc3BsaXRfYWZ0ZXJub29uICYmIGN1cnJlbnRIb3VyIDw9IHNwbGl0X2V2ZW5pbmcpIHtcbiAgICAgIGcgPSBcIkFmdGVybm9vbixcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRIb3VyID49IHNwbGl0X2V2ZW5pbmcpIHtcbiAgICAgIGcgPSBcIkV2ZW5pbmcsXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGcgPSBcIk1vcm5pbmcsXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGc7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyUGFnZSA9ICgpID0+IHtcbiAgICBpZiAobG9hZGluZyAmJiBsb2FkaW5nTWVudSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgICAgIDxCb3ROYXYgLz5cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJnX3RvcH0gLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2luZm9fZ3JpZH0+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHB9XG4gICAgICAgICAgICAgICAgICBzcmM9e1BQID8gUFAgOiBcIi9wcm9maWxlLW5hdjEuc3ZnXCJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMTVweFwiIH19PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIxNHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIHtnZXRHcmVldGluZ1RpbWUobW9tZW50KCkpfSB7c3RhdGUudXNlclJlZHVjZXIudXNlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjEycHhcIiB9fT57cm9sZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvbm90aWZpY2F0aW9uXCJ9PlxuICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5ub3RpZn0gc3JjPVwiL25vdGlmLnN2Z1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAge25vdGlmID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcIiByZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCItMzBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBcIi0xNHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjFweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZlYjgwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25ld0Fubm91bmNlbWVudC5sZW5ndGggPCA5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbmV3QW5ub3VuY2VtZW50Lmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiOStcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgICAgICAgICB7cmVuZGVyVG9wTWVudSgpfVxuICAgICAgICAgICAgICAgICAge2ZvY3VzID09PSBcIlBMQU5cIlxuICAgICAgICAgICAgICAgICAgICA/IHJlbmRlclBsYW4oKVxuICAgICAgICAgICAgICAgICAgICA6IGZvY3VzID09PSBcIlVOUExBTlwiXG4gICAgICAgICAgICAgICAgICAgID8gcmVuZGVyVW5wbGFuKClcbiAgICAgICAgICAgICAgICAgICAgOiBmb2N1cyA9PT0gXCJTUFJFQURJTkdcIlxuICAgICAgICAgICAgICAgICAgICA/IHJlbmRlclNwcmVhZGluZygpXG4gICAgICAgICAgICAgICAgICAgIDogZm9jdXMgPT09IFwiV09SSy1WSVNJVFwiXG4gICAgICAgICAgICAgICAgICAgID8gcmVuZGVyV29ya1Zpc2l0KClcbiAgICAgICAgICAgICAgICAgICAgOiBmb2N1cyA9PT0gXCJTQUxFUy1UUkFDS0lOR1wiXG4gICAgICAgICAgICAgICAgICAgID8gcmVuZGVyQXBwcm92YWwoKVxuICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICB7cmVuZGVyUmV2aXNlTGlzdCgpfVxuICAgICAgICAgICAgICAgICAge3JlbmRlcldvcmtEYXkoKX1cbiAgICAgICAgICAgICAgICAgIHtyZW5kZXJQcm9ncmVzcygpfVxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTIwcHhcIiB9fSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxCb3ROYXYgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHJlbmRlclBhZ2UoKTtcbn1cbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5hdl9jb250YWluZXJcIjogXCJCb3ROYXZfbmF2X2NvbnRhaW5lcl9fMWtRYjVcIixcblx0XCJuYXZfYm94XCI6IFwiQm90TmF2X25hdl9ib3hfXzFTUHlWXCIsXG5cdFwibmF2X2ltZ1wiOiBcIkJvdE5hdl9uYXZfaW1nX18zUFQ5VVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiQ2hlY2tib3hfY29udGFpbmVyX18xdE1mRlwiLFxuXHRcImNoZWNrbWFya19ncmVlblwiOiBcIkNoZWNrYm94X2NoZWNrbWFya19ncmVlbl9fMXFOUktcIixcblx0XCJjaGVja21hcmtfeWVsbG93XCI6IFwiQ2hlY2tib3hfY2hlY2ttYXJrX3llbGxvd19fa1k1emVcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX18zUWtsVFwiLFxuXHRcIndyYXBwZXJcIjogXCJIb21lX3dyYXBwZXJfXzNHdjF2XCIsXG5cdFwiYmdfdG9wXCI6IFwiSG9tZV9iZ190b3BfX1RUenJVXCIsXG5cdFwidXNlcl9pbmZvX2dyaWRcIjogXCJIb21lX3VzZXJfaW5mb19ncmlkX19pWk9ueVwiLFxuXHRcInBwXCI6IFwiSG9tZV9wcF9fMlhfdkpcIixcblx0XCJub3RpZlwiOiBcIkhvbWVfbm90aWZfXzJ4RE9IXCIsXG5cdFwibWVudV9ncmlkM1wiOiBcIkhvbWVfbWVudV9ncmlkM19fM2NlMVNcIixcblx0XCJtZW51X2dyaWQxXCI6IFwiSG9tZV9tZW51X2dyaWQxX18xY3NBRFwiLFxuXHRcImZvY3VzX21lbnVcIjogXCJIb21lX2ZvY3VzX21lbnVfXzFZYkdGXCIsXG5cdFwibWVudVwiOiBcIkhvbWVfbWVudV9fMzdvMllcIixcblx0XCJvdmVydmlld1wiOiBcIkhvbWVfb3ZlcnZpZXdfXzI1dENjXCIsXG5cdFwiZGF0ZVwiOiBcIkhvbWVfZGF0ZV9fMTRvaTFcIixcblx0XCJwbGFuX2NvbnRhaW5lclwiOiBcIkhvbWVfcGxhbl9jb250YWluZXJfXzM4NmNwXCIsXG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fMkFxQ0tcIixcblx0XCJ1bnBsYW5fZ3JpZFwiOiBcIkhvbWVfdW5wbGFuX2dyaWRfXzN4cWFnXCIsXG5cdFwidW5wbGFuX2dyaWQyXCI6IFwiSG9tZV91bnBsYW5fZ3JpZDJfXzFwR1UzXCIsXG5cdFwibnVtX3RvdGFsX3VucGxhblwiOiBcIkhvbWVfbnVtX3RvdGFsX3VucGxhbl9fM282S1BcIixcblx0XCJhZGRfdW5wbGFuXCI6IFwiSG9tZV9hZGRfdW5wbGFuX18zTnlPd1wiLFxuXHRcInBpZV9wZXJjZW50YWdlXCI6IFwiSG9tZV9waWVfcGVyY2VudGFnZV9fMzZhMmVcIixcblx0XCJwcm9ncmVzc190aXRsZVwiOiBcIkhvbWVfcHJvZ3Jlc3NfdGl0bGVfXzJSVFlPXCIsXG5cdFwicHJvZ3Jlc3NfbnVtYmVyXCI6IFwiSG9tZV9wcm9ncmVzc19udW1iZXJfXzJRdl9yXCIsXG5cdFwicHJvZ3Jlc3NfYmFyXCI6IFwiSG9tZV9wcm9ncmVzc19iYXJfXzM5bzlNXCIsXG5cdFwicHJvZ3Jlc3NfYmFyX25vd1wiOiBcIkhvbWVfcHJvZ3Jlc3NfYmFyX25vd19fMUswV0pcIixcblx0XCJtYWluX21lbnVfY29udGFpbmVyXCI6IFwiSG9tZV9tYWluX21lbnVfY29udGFpbmVyX18zRWRqdlwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9tZXNzYWdpbmdcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNoYXJ0anMtMlwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==