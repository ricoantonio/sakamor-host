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
                children: [role === "SMR" ? frontliner.ach : frontliner.target, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","helper_js","store_index_js","components_Button_jsx-components_Card_jsx-components_Spinner_jsx","webpush_js"], function() { return __webpack_exec__("./pages/index.jsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYWthLy4vY29tcG9uZW50cy9Cb3ROYXYuanN4Iiwid2VicGFjazovL3Nha2EvLi9jb21wb25lbnRzL0NoZWNrYm94LmpzeCIsIndlYnBhY2s6Ly9zYWthLy4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovL3Nha2EvLi9zdHlsZXMvY29tcG9uZW50cy9Cb3ROYXYubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9zYWthLy4vc3R5bGVzL2NvbXBvbmVudHMvQ2hlY2tib3gubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9zYWthLy4vc3R5bGVzL3BhZ2VzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9zYWthL2V4dGVybmFsIFwiZmlyZWJhc2UvYXBwXCIiLCJ3ZWJwYWNrOi8vc2FrYS9leHRlcm5hbCBcImZpcmViYXNlL21lc3NhZ2luZ1wiIiwid2VicGFjazovL3Nha2EvZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly9zYWthL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3Nha2EvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vc2FrYS9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3Nha2EvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3Nha2EvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3Nha2EvZXh0ZXJuYWwgXCJyZWFjdC1jaGFydGpzLTJcIiIsIndlYnBhY2s6Ly9zYWthL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9zYWthL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiTmF2IiwiZm9jdXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJhY3RpdmUiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbiIsImJvcmRlclJhZGl1cyIsInN0eWxlcyIsInBhdGhuYW1lIiwiQ2hlY2tib3giLCJ0ZXh0IiwiY2hlY2tlZCIsImNvbG9yIiwib25DbGljayIsImRpc2FibGVkIiwiY2hlY2ttYXJrX2dyZWVuIiwiSG9tZSIsInN0YXRlIiwiZGlzcGF0Y2giLCJhY3Rpb25zIiwidXNlQ29udGV4dCIsIlN0b3JlcyIsInNldEZvY3VzIiwidXNlU3RhdGUiLCJwbGFuIiwic2V0UGxhbiIsIndvcmtWaXNpdCIsInNldFdvcmtWaXNpdCIsIndvcmtWaXNpdEhpc3RvcnkiLCJzZXRXb3JrVmlzaXRIaXN0b3J5IiwicGxhbkhpc3RvcnkiLCJzZXRQbGFuSGlzdG9yeSIsInNwcmVhZGluZ0hpc3RvcnkiLCJzZXRTcHJlYWRpbmdIaXN0b3J5IiwidW5wbGFuSGlzdG9yeSIsInNldFVucGxhbkhpc3RvcnkiLCJyb2xlIiwic2V0Um9sZSIsInRvcE1lbnUiLCJzZXRUb3BNZW51IiwibG9hZGluZyIsInNldExvYWRpbmciLCJsb2FkaW5nTWVudSIsInNldExvYWRpbmdNZW51IiwibmV3QW5ub3VuY2VtZW50Iiwic2V0TmV3QW5ub3VuY2VtZW50Iiwibm90aWYiLCJzZXROb3RpZiIsInNhbGVzVGFyZ2V0Iiwic2V0U2FsZXNUYXJnZXQiLCJzYWxlc1RhcmdldDc1Iiwic2V0U2FsZXNUYXJnZXQ3NSIsInByb2R1a3RpZml0YXMiLCJzZXRQcm9kdWt0aWZpdGFzIiwiZnJvbnRsaW5lciIsInNldEZyb250bGluZXIiLCJOT08iLCJzZXROT08iLCJ3b3JrRGF5Iiwic2V0V29ya0RheSIsInBlbmRpbmdBcHByb3ZlIiwic2V0UGVuZGluZ0FwcHJvdmUiLCJkdW1teSIsInNldER1bW15IiwibG9hZGluZ0FwcHJvdmUiLCJzZXRMb2FkaW5nQXBwcm92ZSIsInJldmlzZVBsYW4iLCJzZXRSZXZpc2VQbGFuIiwicmV2aXNlVW5QbGFuIiwic2V0UmV2aXNlVW5QbGFuIiwicmV2aXNlU3ByZWFkaW5nIiwic2V0UmV2aXNlU3ByZWFkaW5nIiwiUFAiLCJzZXRQUCIsImlzTW91bnRlZCIsInVzZVJlZiIsIm5vdyIsIkRhdGUiLCJkYXRhUGxhbiIsImRhdGFzZXRzIiwiZGF0YSIsImxlbmd0aCIsImRhdGFTcHJlYWRpbmciLCJkYXRhV29ya1Zpc2l0IiwiZG9udXRPcHRpb25zIiwiY3V0b3V0UGVyY2VudGFnZSIsInRvb2x0aXBzIiwiZW5hYmxlZCIsImhvdmVyIiwibW9kZSIsInJlc3BvbnNpdmUiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwidXNlRWZmZWN0IiwidXNlckRhdGEiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidmlld1Byb2ZpbGVQaWMiLCJ1c2VybmFtZSIsInRoZW4iLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJSb3V0ZXIiLCJnZXROb3RpZmljYXRpb25ieVVzZXJuYW1lIiwiZ2V0V29ya0RheSIsInVzZXJMb2dpbiIsImdldE1lbnUiLCJzZXRNZW51IiwibW9udGgiLCJtb21lbnQiLCJmb3JtYXQiLCJ5ZWFyIiwiZ2V0QXV0aCIsInJvbGVDb2RlIiwiZ2V0U2FsZXNUYXJnZXQ3NVBpbWNhIiwiZ2V0U2FsZXNUYXJnZXRQaW1jYSIsImdldEZyb250bGluZXJQaW1jYSIsImdldFJldmlzZVBsYW5MaXN0U21yIiwiZ2V0UmV2aXNlVW5QbGFuTGlzdFNtciIsImdldFJldmlzZVNwcmVhZGluZ0xpc3RTbXIiLCJnZXRTYWxlc1RhcmdldFNNUiIsImdldFNhbGVzVGFyZ2V0NzVTTVIiLCJnZXRQcm9kdWt0aWZpdGFzIiwiZ2V0RnJvbnRsaW5lciIsImdldE5vbyIsImdldFBsYW5MaXN0IiwiZ2V0UGxhbkhpc3RvcnkiLCJnZXRBbGxXb3JrVmlzaXQiLCJmaWx0ZXIiLCJ2YWwiLCJpc1BlbmlsYWlhbiIsImdldEFwcHJvdmFsIiwiZGF0YUNoZWNrQm94IiwibWFwIiwiY2hlY2tCb3giLCJnZXRVbnBsYW5Nb250aGx5SGlzdG9yeSIsImdldFNwcmVhZGluZ01vbnRobHlIaXN0b3J5IiwicmVuZGVyVG9wTWVudSIsImF1dGgiLCJtb2R1bGVDb2RlIiwicmVuZGVyIiwiaW5kZXgiLCJyZW5kZXJMaXN0IiwidHlwZSIsImZvbnRTaXplIiwidGV4dEFsaWduIiwiaWRNYXN0ZXJQbGFuIiwiZm9udFdlaWdodCIsImRpc3BsYXkiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwicGFkZGluZyIsIm5hbWFPdXRsZXQiLCJhbGFtYXRPdXRsZXQiLCJyZW5kZXJMaXN0V29ya1Zpc2l0IiwibmFtYVNNUiIsInJheW9uIiwicHJvZHVrRm9rdXMiLCJyZW5kZXJQbGFuIiwibWFyZ2luVG9wIiwiYm9yZGVyIiwiTWF0aCIsInJvdW5kIiwicmVuZGVyU3ByZWFkaW5nIiwicmVuZGVyVW5wbGFuIiwidGV4dERlY29yYXRpb24iLCJyZW5kZXJXb3JrVmlzaXQiLCJvbkFwcHJvdmUiLCJjaGVja1BlbmRpbmciLCJpIiwibW9kdWxlIiwibW9kdWwiLCJhcHByb3ZhbFRyYW5zYWN0aW9uRGF0YU1vZGVsIiwic3lzdGVtQ29kZSIsImFwcHJvdmFsTGV2ZWwiLCJpZCIsImFwcHJvdmFsSUQiLCJkb2NObyIsIm5vbW9yRG9rdW1lbiIsInBpYyIsImFwcHJvdmFsTGluZSIsIm5vdGVzIiwibmVlZEFwcHJvdmUiLCJhcHByb3ZlRGF0ZSIsInRvSVNPU3RyaW5nIiwic3RhdHVzIiwiYXBwcm92ZXJGcm9tIiwiYXBwcm92ZXJUbyIsImRlc2NyaXB0aW9uIiwiY3JlYXRlZEJ5IiwiY3JlYXRlZERhdGUiLCJlbWFpbERhdGEiLCJkb2N1bWVudE51bWJlciIsImVtYWlsVG8iLCJlbWFpbENDIiwiZW1haWxCQ0MiLCJlbWFpbFN1YmplY3QiLCJlbWFpbEJvZHkiLCJhcHByb3ZhbEFwcHJvdmUiLCJyZW5kZXJBcHByb3ZhbCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nVG9wIiwiYWxsIiwic3BsaWNlIiwic2V0Rm9jdXNBcHByb3ZhbCIsInVzZXJuYW1lU01SIiwicmVuZGVyV29ya0RheSIsImhhcmlLZXJqYSIsInRvdGFsSGFyaUtlcmphIiwicmVuZGVyUHJvZ3Jlc3MiLCJyZW5kZXJTYWxlcyIsInRpdGxlIiwic2FsZXMiLCJ0b0xvY2FsZVN0cmluZyIsInRhcmdldCIsInByb2dyZXNzX2JhciIsImFjaCIsImFjaGlldmVtZW50IiwicmVuZGVyUmV2aXNlTGlzdCIsImdldFZpc2l0UGxhblByb2R1Y3QiLCJpZFZpc2l0UGxhbiIsImRhdGFJbnZvaWNlIiwic2V0UmV2aXNlQXZhYmlsaXR5IiwiZ2V0SW52b2ljZURhdGFQb3NtIiwiZGF0YVBvc20iLCJzZXRSZXZpc2VWaXNpYmlsaXR5IiwiZ2V0VW5QbGFuUHJvZHVjdHMiLCJnZXRJbnZvaWNlRGF0YVBvc21VbnBsYW4iLCJnZXRTcHJlYWRpbmdQcm9kdWN0IiwiZ2V0SW52b2ljZURhdGFQb3NtU3ByZWFkaW5nIiwiZ2V0R3JlZXRpbmdUaW1lIiwibSIsImciLCJpc1ZhbGlkIiwic3BsaXRfYWZ0ZXJub29uIiwic3BsaXRfZXZlbmluZyIsImN1cnJlbnRIb3VyIiwicGFyc2VGbG9hdCIsInJlbmRlclBhZ2UiLCJiZ190b3AiLCJtYXJnaW5MZWZ0IiwidXNlclJlZHVjZXIiLCJ1c2VyIiwibmFtZSIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsR0FBRyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWU7QUFDekIsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFDQSxNQUFJQyxNQUFNLGdCQUNSO0FBQ0UsU0FBSyxFQUFFO0FBQ0xDLFdBQUssRUFBRSxLQURGO0FBRUxDLFlBQU0sRUFBRSxLQUZIO0FBR0xDLHFCQUFlLEVBQUUsU0FIWjtBQUlMQyxZQUFNLEVBQUUsVUFKSDtBQUtMQyxrQkFBWSxFQUFFO0FBTFQ7QUFEVDtBQUFB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O0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQTdDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRixlQTBFRSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTFFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQThFRDtBQUNGLEdBeEZEOztBQXlGQSxTQUFPVCxVQUFVLEVBQWpCO0FBQ0QsQzs7Ozs7Ozs7OztBQ2wvQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzFCQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvY29tcG9uZW50cy9Cb3ROYXYubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IE5hdiA9ICh7IGZvY3VzIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICB2YXIgYWN0aXZlID0gKFxyXG4gICAgPGRpdlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIHdpZHRoOiBcIjVweFwiLFxyXG4gICAgICAgIGhlaWdodDogXCI1cHhcIixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZlYjgwMFwiLFxyXG4gICAgICAgIG1hcmdpbjogXCI1cHggYXV0b1wiLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCI1MHB4XCIsXHJcbiAgICAgIH19XHJcbiAgICAvPlxyXG4gICk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2X2NvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2X2JveH0+XHJcbiAgICAgICAgPExpbmsgaHJlZj17XCIvXCJ9PlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBcIi9cIiA/IFwiL2hvbWUtbmF2LnN2Z1wiIDogXCIvaG9tZS1uYXYxLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7cm91dGVyLnBhdGhuYW1lID09PSBcIi9cIiA/IGFjdGl2ZSA6IFwiXCJ9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPXtcIi9jYWxlbmRhclwifT5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvY2FsZW5kYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gXCIvY2FsZW5kYXItbmF2LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIi9jYWxlbmRhci1uYXYxLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7cm91dGVyLnBhdGhuYW1lID09PSBcIi9jYWxlbmRhclwiID8gYWN0aXZlIDogXCJcIn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e1wiL3Jld2FyZFwifT5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvcmV3YXJkXCJcclxuICAgICAgICAgICAgICAgICAgICA/IFwiL2F3YXJkLW5hdi5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCIvYXdhcmQtbmF2MS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAge3JvdXRlci5wYXRobmFtZSA9PT0gXCIvcmV3YXJkXCIgPyBhY3RpdmUgOiBcIlwifVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj17XCIvYW5ub3VuY2VtZW50XCJ9PlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBcIi9hbm5vdW5jZW1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gXCIvcmV3YXJkcy1uYXYuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiL3Jld2FyZHMtbmF2MS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAge3JvdXRlci5wYXRobmFtZSA9PT0gXCIvYW5ub3VuY2VtZW50XCIgPyBhY3RpdmUgOiBcIlwifVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj17XCIvcHJvZmlsZVwifT5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvcHJvZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIi9wcm9maWxlLW5hdi5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCIvcHJvZmlsZS1uYXYxLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7cm91dGVyLnBhdGhuYW1lID09PSBcIi9wcm9maWxlXCIgPyBhY3RpdmUgOiBcIlwifVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvY29tcG9uZW50cy9DaGVja2JveC5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBDaGVja2JveCA9ICh7IHRleHQsIGNoZWNrZWQsIGNvbG9yLCBvbkNsaWNrLCBkaXNhYmxlZCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9IG9uQ2hhbmdlPXtvbkNsaWNrfT5cclxuICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e2NoZWNrZWR9IGRpc2FibGVkPXtkaXNhYmxlZH0gLz5cclxuICAgICAge3RleHR9XHJcbiAgICAgIDxzcGFuXHJcbiAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgIGNvbG9yID09PSBcImdyZWVuXCJcclxuICAgICAgICAgICAgPyBzdHlsZXMuY2hlY2ttYXJrX2dyZWVuXHJcbiAgICAgICAgICAgIDogY29sb3IgPT09IFwieWVsbG93XCJcclxuICAgICAgICAgICAgPyBzdHlsZXMuY2hlY2ttYXJrX3llbGxvd1xyXG4gICAgICAgICAgICA6IHN0eWxlcy5jaGVja21hcmtfZ3JlZW5cclxuICAgICAgICB9XHJcbiAgICAgID48L3NwYW4+XHJcbiAgICA8L2xhYmVsPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3BhZ2VzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IFN0b3JlcyB9IGZyb20gXCIuLi9zdG9yZVwiO1xuXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9TcGlubmVyXCI7XG5pbXBvcnQgQm90TmF2IGZyb20gXCIuLi9jb21wb25lbnRzL0JvdE5hdlwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRcIjtcbmltcG9ydCBDaGVja0JveCBmcm9tIFwiLi4vY29tcG9uZW50cy9DaGVja2JveFwiO1xuXG5pbXBvcnQgeyBmaXJlYmFzZUNsb3VkTWVzc2FnaW5nIH0gZnJvbSBcIi4uL3dlYnB1c2hcIjtcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5cbmltcG9ydCB7XG4gIGFwcHJvdmFsQXBwcm92ZSxcbiAgZ2V0QWxsQW5ub3VuY2VtZW50LFxuICBnZXRBbGxXb3JrVmlzaXQsXG4gIGdldEFwcHJvdmFsLFxuICBnZXRBdXRoLFxuICBnZXRGcm9udGxpbmVyLFxuICBnZXRGcm9udGxpbmVyUGltY2EsXG4gIGdldEludm9pY2VEYXRhLFxuICBnZXRJbnZvaWNlRGF0YVBvc20sXG4gIGdldEludm9pY2VEYXRhUG9zbVNwcmVhZGluZyxcbiAgZ2V0SW52b2ljZURhdGFQb3NtVW5wbGFuLFxuICBnZXRJbnZvaWNlRGF0YVNwcmVhZGluZyxcbiAgZ2V0SW52b2ljZURhdGFVbnBsYW4sXG4gIGdldE1lbnUsXG4gIGdldE5vbyxcbiAgZ2V0Tm90aWZpY2F0aW9uYnlVc2VybmFtZSxcbiAgZ2V0UGxhbkhpc3RvcnksXG4gIGdldFBsYW5MaXN0LFxuICBnZXRQcm9kdWt0aWZpdGFzLFxuICBnZXRSZXZpc2VQbGFuTGlzdFNtcixcbiAgZ2V0UmV2aXNlU3ByZWFkaW5nTGlzdFNtcixcbiAgZ2V0UmV2aXNlVW5QbGFuTGlzdFNtcixcbiAgZ2V0U2FsZXNUYXJnZXQ3NVBpbWNhLFxuICBnZXRTYWxlc1RhcmdldDc1U01SLFxuICBnZXRTYWxlc1RhcmdldFBpbWNhLFxuICBnZXRTYWxlc1RhcmdldFNNUixcbiAgZ2V0U3ByZWFkaW5nTW9udGhseUhpc3RvcnksXG4gIGdldFNwcmVhZGluZ1Byb2R1Y3QsXG4gIGdldFVucGxhbk1vbnRobHlIaXN0b3J5LFxuICBnZXRVblBsYW5Qcm9kdWN0cyxcbiAgZ2V0VmlzaXRQbGFuUHJvZHVjdCxcbiAgZ2V0V29ya0RheSxcbiAgdmlld1Byb2ZpbGVQaWMsXG59IGZyb20gXCIuLi9oZWxwZXJcIjtcblxuaW1wb3J0IHsgRG91Z2hudXQgfSBmcm9tIFwicmVhY3QtY2hhcnRqcy0yXCI7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCByb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoLCBhY3Rpb25zIH0gPSB1c2VDb250ZXh0KFN0b3Jlcyk7XG4gIGNvbnN0IFtmb2N1cywgc2V0Rm9jdXNdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwbGFuLCBzZXRQbGFuXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3dvcmtWaXNpdCwgc2V0V29ya1Zpc2l0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3dvcmtWaXNpdEhpc3RvcnksIHNldFdvcmtWaXNpdEhpc3RvcnldID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcGxhbkhpc3RvcnksIHNldFBsYW5IaXN0b3J5XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NwcmVhZGluZ0hpc3RvcnksIHNldFNwcmVhZGluZ0hpc3RvcnldID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdW5wbGFuSGlzdG9yeSwgc2V0VW5wbGFuSGlzdG9yeV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtyb2xlLCBzZXRSb2xlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdG9wTWVudSwgc2V0VG9wTWVudV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbbG9hZGluZ01lbnUsIHNldExvYWRpbmdNZW51XSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbbmV3QW5ub3VuY2VtZW50LCBzZXROZXdBbm5vdW5jZW1lbnRdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbm90aWYsIHNldE5vdGlmXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NhbGVzVGFyZ2V0LCBzZXRTYWxlc1RhcmdldF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzYWxlc1RhcmdldDc1LCBzZXRTYWxlc1RhcmdldDc1XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3Byb2R1a3RpZml0YXMsIHNldFByb2R1a3RpZml0YXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZnJvbnRsaW5lciwgc2V0RnJvbnRsaW5lcl0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtOT08sIHNldE5PT10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt3b3JrRGF5LCBzZXRXb3JrRGF5XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3BlbmRpbmdBcHByb3ZlLCBzZXRQZW5kaW5nQXBwcm92ZV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtkdW1teSwgc2V0RHVtbXldID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtsb2FkaW5nQXBwcm92ZSwgc2V0TG9hZGluZ0FwcHJvdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcmV2aXNlUGxhbiwgc2V0UmV2aXNlUGxhbl0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtyZXZpc2VVblBsYW4sIHNldFJldmlzZVVuUGxhbl0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtyZXZpc2VTcHJlYWRpbmcsIHNldFJldmlzZVNwcmVhZGluZ10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgW1BQLCBzZXRQUF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgaXNNb3VudGVkID0gdXNlUmVmKHRydWUpO1xuXG4gIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuXG4gIGNvbnN0IGRhdGFQbGFuID0ge1xuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGRhdGE6XG4gICAgICAgICAgcGxhbkhpc3RvcnkubGVuZ3RoID09PSAwID8gWzAsIDFdIDogW3BsYW5IaXN0b3J5Lmxlbmd0aCwgcGxhbi5sZW5ndGhdLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcIiM0MTg2N2FcIiwgXCIjZDFlNGUxXCJdLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuICBjb25zdCBkYXRhU3ByZWFkaW5nID0ge1xuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGRhdGE6IHNwcmVhZGluZ0hpc3RvcnkubGVuZ3RoID09PSAwID8gWzAsIDFdIDogWzAsIDFdLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcIiM0MTg2N2FcIiwgXCIjZDFlNGUxXCJdLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIGNvbnN0IGRhdGFXb3JrVmlzaXQgPSB7XG4gICAgZGF0YXNldHM6IFtcbiAgICAgIHtcbiAgICAgICAgZGF0YTpcbiAgICAgICAgICB3b3JrVmlzaXRIaXN0b3J5Lmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgPyBbMCwgMV1cbiAgICAgICAgICAgIDogW3dvcmtWaXNpdEhpc3RvcnkubGVuZ3RoLCB3b3JrVmlzaXQubGVuZ3RoXSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXCIjNDE4NjdhXCIsIFwiI2QxZTRlMVwiXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICBjb25zdCBkb251dE9wdGlvbnMgPSB7XG4gICAgY3V0b3V0UGVyY2VudGFnZTogNzUsXG4gICAgdG9vbHRpcHM6IHsgZW5hYmxlZDogZmFsc2UgfSxcbiAgICBob3ZlcjogeyBtb2RlOiBudWxsIH0sXG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICBtYWludGFpbkFzcGVjdFJhdGlvOiB0cnVlLFxuICB9O1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgaWYgKGlzTW91bnRlZC5jdXJyZW50KSB7XG4gIC8vICAgICBzZXRUb2tlbigpO1xuICAvLyAgICAgYXN5bmMgZnVuY3Rpb24gc2V0VG9rZW4oKSB7XG4gIC8vICAgICAgIHRyeSB7XG4gIC8vICAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBmaXJlYmFzZUNsb3VkTWVzc2FnaW5nLmluaXQoKTtcbiAgLy8gICAgICAgICBpZiAodG9rZW4pIHtcbiAgLy8gICAgICAgICAgIGdldE1lc3NhZ2UoKTtcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gIC8vICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9XG4gIC8vICAgICBmdW5jdGlvbiBnZXRNZXNzYWdlKCkge1xuICAvLyAgICAgICBjb25zdCBtZXNzYWdpbmcgPSBmaXJlYmFzZS5tZXNzYWdpbmcoKTtcbiAgLy8gICAgICAgY29uc29sZS5sb2coeyBtZXNzYWdpbmcgfSk7XG4gIC8vICAgICAgIG1lc3NhZ2luZy5vbk1lc3NhZ2UoKG1lc3NhZ2UpID0+IHtcbiAgLy8gICAgICAgICBzZXROb3RpZih0cnVlKTtcbiAgLy8gICAgICAgfSk7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyAgIHJldHVybiAoKSA9PiB7XG4gIC8vICAgICBpc01vdW50ZWQuY3VycmVudCA9IGZhbHNlO1xuICAvLyAgIH07XG4gIC8vIH0sIFtpc01vdW50ZWRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xuICAgIGlmICh1c2VyRGF0YSkge1xuICAgICAgdmlld1Byb2ZpbGVQaWModXNlckRhdGEudXNlcm5hbWUpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgc2V0UFAoZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9XG4gIH0sIFtkaXNwYXRjaF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XG4gICAgaWYgKHVzZXJEYXRhKSB7XG4gICAgICAvLyBnZXRBbGxBbm5vdW5jZW1lbnQodXNlckRhdGEpXG4gICAgICAvLyAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAvLyAgICAgY29uc3QgbmV3QW5ub3VuY2VtZW50ID0gZGF0YS5maWx0ZXIoKHZhbCkgPT4ge1xuICAgICAgLy8gICAgICAgcmV0dXJuIHZhbC5pc1JlYWQgPT09IGZhbHNlO1xuICAgICAgLy8gICAgIH0pO1xuICAgICAgLy8gICAgIHNldE5ld0Fubm91bmNlbWVudChuZXdBbm5vdW5jZW1lbnQpO1xuICAgICAgLy8gICAgIGlmIChuZXdBbm5vdW5jZW1lbnQubGVuZ3RoID4gMCkge1xuICAgICAgLy8gICAgICAgc2V0Tm90aWYodHJ1ZSk7XG4gICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgIC8vICAgICAgIHNldE5vdGlmKGZhbHNlKTtcbiAgICAgIC8vICAgICB9XG4gICAgICAvLyAgIH0pXG4gICAgICAvLyAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAvLyAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIC8vICAgfSk7XG4gICAgICBnZXROb3RpZmljYXRpb25ieVVzZXJuYW1lKHVzZXJEYXRhLnVzZXJuYW1lKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHNldE5ld0Fubm91bmNlbWVudChkYXRhKTtcbiAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzZXROb3RpZih0cnVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0Tm90aWYoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KTtcblxuICAgICAgZ2V0V29ya0RheSgpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgc2V0V29ya0RheShkYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sIFtkaXNwYXRjaF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XG4gICAgaWYgKHVzZXJEYXRhKSB7XG4gICAgICBhY3Rpb25zLnVzZXJMb2dpbih1c2VyRGF0YSk7XG4gICAgICBnZXRNZW51KHVzZXJEYXRhKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGFjdGlvbnMuc2V0TWVudShkYXRhKTtcbiAgICAgICAgICBzZXRUb3BNZW51KGRhdGEpO1xuICAgICAgICAgIHNldExvYWRpbmdNZW51KGZhbHNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xuICAgIH1cbiAgfSwgW2Rpc3BhdGNoXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcbiAgICB2YXIgbW9udGggPSBtb21lbnQoKS5mb3JtYXQoXCJNXCIpO1xuICAgIHZhciB5ZWFyID0gbW9tZW50KCkuZm9ybWF0KFwiWVwiKTtcbiAgICBpZiAodXNlckRhdGEpIHtcbiAgICAgIGdldEF1dGgodXNlckRhdGEpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGFbMF0ucm9sZUNvZGUgPT09IFwiUElNQ0FCXCIpIHtcbiAgICAgICAgICAgIHNldFJvbGUoXCJQSU1DQUJcIik7XG4gICAgICAgICAgICBzZXRGb2N1cyhcIldPUkstVklTSVRcIik7XG4gICAgICAgICAgICBnZXRTYWxlc1RhcmdldDc1UGltY2EodXNlckRhdGEsIG1vbnRoLCB5ZWFyKVxuICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICBzZXRTYWxlc1RhcmdldDc1KGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgICAgICAgICAgZ2V0U2FsZXNUYXJnZXRQaW1jYSh1c2VyRGF0YSwgbW9udGgsIHllYXIpXG4gICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgIHNldFNhbGVzVGFyZ2V0KGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgICAgICAgICAgZ2V0RnJvbnRsaW5lclBpbWNhKHVzZXJEYXRhLCBtb250aCwgeWVhcilcbiAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgc2V0RnJvbnRsaW5lcihkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFbMF0ucm9sZUNvZGUgPT09IFwiU01SXCIpIHtcbiAgICAgICAgICAgIHNldFJvbGUoXCJTTVJcIik7XG4gICAgICAgICAgICBzZXRGb2N1cyhcIlBMQU5cIik7XG5cbiAgICAgICAgICAgIGdldFJldmlzZVBsYW5MaXN0U21yKHVzZXJEYXRhKVxuICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFJldmlzZVBsYW4oZGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXZpc2UgcGxhblwiLCBkYXRhKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGdldFJldmlzZVVuUGxhbkxpc3RTbXIodXNlckRhdGEpXG4gICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0UmV2aXNlVW5QbGFuKGRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmV2aXNlIHVucGxhblwiLCBkYXRhKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGdldFJldmlzZVNwcmVhZGluZ0xpc3RTbXIodXNlckRhdGEpXG4gICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0UmV2aXNlU3ByZWFkaW5nKGRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmV2aXNlIHNwcmVhZGluZ1wiLCBkYXRhKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZ2V0U2FsZXNUYXJnZXRTTVIodXNlckRhdGEsIG1vbnRoLCB5ZWFyKVxuICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICBzZXRTYWxlc1RhcmdldChkYXRhKTtcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGdldFNhbGVzVGFyZ2V0NzVTTVIodXNlckRhdGEsIG1vbnRoLCB5ZWFyKVxuICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICBzZXRTYWxlc1RhcmdldDc1KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZ2V0UHJvZHVrdGlmaXRhcyh1c2VyRGF0YSwgbW9udGgsIHllYXIpXG4gICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgIHNldFByb2R1a3RpZml0YXMoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBnZXRGcm9udGxpbmVyKHVzZXJEYXRhLCBtb250aCwgeWVhcilcbiAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgc2V0RnJvbnRsaW5lcihkYXRhKTtcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGdldE5vbyh1c2VyRGF0YSwgbW9udGgsIHllYXIpXG4gICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgIHNldE5PTyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9XG4gIH0sIFtkaXNwYXRjaF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcbiAgICBpZiAodXNlckRhdGEpIHtcbiAgICAgIGlmIChmb2N1cyA9PT0gXCJQTEFOXCIpIHtcbiAgICAgICAgZ2V0UGxhbkxpc3QodXNlckRhdGEpXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHNldFBsYW4oZGF0YSk7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICBnZXRQbGFuSGlzdG9yeSh1c2VyRGF0YSlcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgc2V0UGxhbkhpc3RvcnkoZGF0YSk7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChmb2N1cyA9PT0gXCJXT1JLLVZJU0lUXCIpIHtcbiAgICAgICAgZ2V0QWxsV29ya1Zpc2l0KHVzZXJEYXRhKVxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIHNldFdvcmtWaXNpdChcbiAgICAgICAgICAgICAgZGF0YS5maWx0ZXIoKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWwuaXNQZW5pbGFpYW4gPT09IGZhbHNlO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHNldFdvcmtWaXNpdEhpc3RvcnkoXG4gICAgICAgICAgICAgIGRhdGEuZmlsdGVyKCh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsLmlzUGVuaWxhaWFuID09PSB0cnVlO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGZvY3VzID09PSBcIlNBTEVTLVRSQUNLSU5HXCIpIHtcbiAgICAgICAgZ2V0QXBwcm92YWwodXNlckRhdGEpXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHZhciBkYXRhQ2hlY2tCb3ggPSBkYXRhLm1hcCgodmFsKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB7IC4uLnZhbCwgY2hlY2tCb3g6IGZhbHNlIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldFBlbmRpbmdBcHByb3ZlKGRhdGFDaGVja0JveCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGZvY3VzID09PSBcIlVOUExBTlwiKSB7XG4gICAgICAgIGdldFVucGxhbk1vbnRobHlIaXN0b3J5KHVzZXJEYXRhKVxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIHNldFVucGxhbkhpc3RvcnkoZGF0YSk7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChmb2N1cyA9PT0gXCJTUFJFQURJTkdcIikge1xuICAgICAgICBnZXRTcHJlYWRpbmdNb250aGx5SGlzdG9yeSh1c2VyRGF0YSlcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBzZXRTcHJlYWRpbmdIaXN0b3J5KGRhdGEpO1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xuICAgIH1cbiAgfSwgW2ZvY3VzXSk7XG5cbiAgY29uc3QgcmVuZGVyVG9wTWVudSA9ICgpID0+IHtcbiAgICB2YXIgYXV0aCA9IHRvcE1lbnUuZmlsdGVyKCh2YWwpID0+IHtcbiAgICAgIGlmIChyb2xlID09PSBcIlNNUlwiKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgdmFsLm1vZHVsZUNvZGUgPT09IFwiUExBTlwiIHx8XG4gICAgICAgICAgdmFsLm1vZHVsZUNvZGUgPT09IFwiVU5QTEFOXCIgfHxcbiAgICAgICAgICB2YWwubW9kdWxlQ29kZSA9PT0gXCJTUFJFQURJTkdcIlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChyb2xlID09PSBcIlBJTUNBQlwiKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgdmFsLm1vZHVsZUNvZGUgPT09IFwiV09SSy1WSVNJVFwiIHx8IHZhbC5tb2R1bGVDb2RlID09PSBcIlNBTEVTLVRSQUNLSU5HXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICAgIHJldHVybiBhdXRoLm1hcCgodmFsLCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgIGZvY3VzID09PSB2YWwubW9kdWxlQ29kZSA/IHN0eWxlcy5mb2N1c19tZW51IDogc3R5bGVzLm1lbnVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0Rm9jdXModmFsLm1vZHVsZUNvZGUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3ZhbC5tb2R1bGVDb2RlID09PSBcIlBMQU5cIlxuICAgICAgICAgICAgICA/IFwiUGxhblwiXG4gICAgICAgICAgICAgIDogdmFsLm1vZHVsZUNvZGUgPT09IFwiVU5QTEFOXCJcbiAgICAgICAgICAgICAgPyBcIlVucGxhblwiXG4gICAgICAgICAgICAgIDogdmFsLm1vZHVsZUNvZGUgPT09IFwiU1BSRUFESU5HXCJcbiAgICAgICAgICAgICAgPyBcIlNwcmVhZGluZ1wiXG4gICAgICAgICAgICAgIDogdmFsLm1vZHVsZUNvZGUgPT09IFwiV09SSy1WSVNJVFwiXG4gICAgICAgICAgICAgID8gXCJXb3JrIFZpc2l0XCJcbiAgICAgICAgICAgICAgOiB2YWwubW9kdWxlQ29kZSA9PT0gXCJTQUxFUy1UUkFDS0lOR1wiXG4gICAgICAgICAgICAgID8gXCJBcHByb3ZhbFwiXG4gICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgaWYgKGF1dGgpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgYXV0aC5sZW5ndGggPT09IDNcbiAgICAgICAgICAgICAgPyBzdHlsZXMubWVudV9ncmlkM1xuICAgICAgICAgICAgICA6IGF1dGgubGVuZ3RoID09PSAyXG4gICAgICAgICAgICAgID8gc3R5bGVzLm1lbnVfZ3JpZDFcbiAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAge3JlbmRlcigpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlckxpc3QgPSAodHlwZSwgZGF0YSkgPT4ge1xuICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBmb250U2l6ZTogXCIxNXB4XCIsXG4gICAgICAgICAgICBjb2xvcjogXCJyZ2IoMjA4LCAyMDgsIDIwOClcIixcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICBtYXJnaW46IFwiMzBweCAwXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIE5vIEl0ZW1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZGF0YS5tYXAoKHZhbCwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgaHJlZj17Zm9jdXMgPT09IFwiUExBTlwiID8gYC92aXNpdC9wbGFuLyR7ZGF0YS5pZE1hc3RlclBsYW59YCA6IFwiL1wifVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNzAwXCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNUU1ODczXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjEwcHggMFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjEyJSA4OCVcIiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHR5cGUgPT09IFwiUExBTlwiID8gXCIjRkZGMUNDXCIgOiBcIiNkMWU0ZTFcIixcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gXCJQTEFOXCIgPyBcIiNmZWI4MDBcIiA6IFwiIzQxODY3YVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pnt2YWwubmFtYU91dGxldH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIxNHB4XCIsIGZvbnRXZWlnaHQ6IFwiMzAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAge3ZhbC5hbGFtYXRPdXRsZXR9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXJMaXN0V29ya1Zpc2l0ID0gKGRhdGEpID0+IHtcbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZm9udFNpemU6IFwiMTVweFwiLFxuICAgICAgICAgICAgY29sb3I6IFwicmdiKDIwOCwgMjA4LCAyMDgpXCIsXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgbWFyZ2luOiBcIjMwcHggMFwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBObyBJdGVtXG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRhdGEubWFwKCh2YWwsIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPExpbmsgaHJlZj17YHdvcmstdmlzaXQvJHt2YWwuaWRNYXN0ZXJQbGFufWB9PlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI3MDBcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1RTU4NzNcIixcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTBweCAwXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMTIlIDg4JVwiIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkZGMUNDXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjRweFwiLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZlYjgwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pnt2YWwubmFtYVNNUn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIxNHB4XCIsIGZvbnRXZWlnaHQ6IFwiMzAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgUmF5b24gLSB7dmFsLnJheW9ufVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIxNHB4XCIsIGZvbnRXZWlnaHQ6IFwiMzAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgUHJvZHVrIEZvY3VzIC0ge3ZhbC5wcm9kdWtGb2t1c31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlclBsYW4gPSAoKSA9PiB7XG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIG1hcmdpblRvcDogXCIyMnB4XCIgfX0gc2hhZG93PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmVydmlld30+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+XG4gICAgICAgICAgICAgICAgICB7bW9tZW50KCkuZm9ybWF0KFwiRCAvIE1NTSAvIFlZWVlcIil9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwiIzVFNTg3M1wiLCBtYXJnaW5Ub3A6IFwiN3B4XCIgfX0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIzNnB4XCIsIGZvbnRXZWlnaHQ6IFwiNjAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIHtwbGFuSGlzdG9yeS5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIxOHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIC97cGxhbi5sZW5ndGggKyBwbGFuSGlzdG9yeS5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tYXN0ZXItcGxhbi12aXNpdFwiPlxuICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjdweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRUI4MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweCAyMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgQWRkIE5ldyBQbGFuICtcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBpZV9wZXJjZW50YWdlfT5cbiAgICAgICAgICAgICAgICAgIHtwbGFuSGlzdG9yeS5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICAgICAgPyBcIjAlXCJcbiAgICAgICAgICAgICAgICAgICAgOiBgJHtNYXRoLnJvdW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgKHBsYW5IaXN0b3J5Lmxlbmd0aCAvXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChwbGFuLmxlbmd0aCArIHBsYW5IaXN0b3J5Lmxlbmd0aCkpICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwXG4gICAgICAgICAgICAgICAgICAgICAgKX0lYH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8RG91Z2hudXRcbiAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGFQbGFufVxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZG9udXRPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MTAwfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMnB4XCIsIGJvcmRlclJhZGl1czogXCIzMHB4XCIgfX0gc2hhZG93PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGFuX2NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1RTU4NzNcIixcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFlvdXIgUGxhbiBUb2RheVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMjJweCAwXCIgfX0+e3JlbmRlckxpc3QoXCJQTEFOXCIsIHBsYW4pfTwvZGl2PlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Zpc2l0L3BsYW5cIj5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD17XCJTZWUgRGV0YWlsc1wifSAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlclNwcmVhZGluZyA9ICgpID0+IHtcbiAgICBpZiAobG9hZGluZykge1xuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI1cHhcIiwgbWFyZ2luVG9wOiBcIjIycHhcIiB9fSBzaGFkb3c+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm92ZXJ2aWV3fT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfT5cbiAgICAgICAgICAgICAgICAgIHttb21lbnQoKS5mb3JtYXQoXCJEIC8gTU1NIC8gWVlZWVwiKX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogXCIjNUU1ODczXCIsIG1hcmdpblRvcDogXCI3cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjM2cHhcIiwgZm9udFdlaWdodDogXCI2MDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAge3NwcmVhZGluZ0hpc3RvcnkubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMThweFwiIH19Pi97cGxhbi5sZW5ndGh9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3Zpc2l0L3NwcmVhZGluZy9cIn0+XG4gICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiN3B4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZFQjgwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4IDIycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBBZGQgTmV3IE5PTyArXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waWVfcGVyY2VudGFnZX0+MCU8L2Rpdj5cbiAgICAgICAgICAgICAgICA8RG91Z2hudXRcbiAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGFTcHJlYWRpbmd9XG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtkb251dE9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIycHhcIiwgYm9yZGVyUmFkaXVzOiBcIjMwcHhcIiB9fSBzaGFkb3c+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsYW5fY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxOHB4XCIsXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzVFNTg3M1wiLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU3ByZWFkaW5nIEhpc3RvcnlcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjIycHggMFwiIH19PlxuICAgICAgICAgICAgICAgIHtyZW5kZXJMaXN0KFwiU1BSRUFESU5HXCIsIHNwcmVhZGluZ0hpc3RvcnkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi92aXNpdC9zcHJlYWRpbmcvaGlzdG9yeVwiPlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PXtcIlNlZSBEZXRhaWxzXCJ9IC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvPlxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyVW5wbGFuID0gKCkgPT4ge1xuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICByZXR1cm4gPFNwaW5uZXIgLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPENhcmQgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBtYXJnaW5Ub3A6IFwiMjJweFwiIH19IHNoYWRvdz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudW5wbGFuX2dyaWR9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm51bV90b3RhbF91bnBsYW59PlxuICAgICAgICAgICAgICAgIHt1bnBsYW5IaXN0b3J5Lmxlbmd0aH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMTRweFwiIH19PlRvdGFsIFVucGxhbiBWaXNpdDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9Pnttb21lbnQoKS5mb3JtYXQoXCJNTU1NXCIpfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI1cHhcIiwgbWFyZ2luVG9wOiBcIjExcHhcIiB9fSBzaGFkb3c+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3Zpc2l0L3VucGxhblwiPlxuICAgICAgICAgICAgICA8YSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51bnBsYW5fZ3JpZDJ9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRfdW5wbGFufT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiLThweFwiIH19Pis8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIxNnB4XCIsIGZvbnRXZWlnaHQ6IFwiNjAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIEFueSBVbnBsYW4gVmlzaXQ/XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI0I5QjlDM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCIzMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEzcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgQWRkIHlvdXIgdW5wbGFuIHZpc2l0IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiL25leHQuc3ZnXCJ9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvQ2FyZD5cblxuICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMnB4XCIsIGJvcmRlclJhZGl1czogXCIzMHB4XCIgfX0gc2hhZG93PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGFuX2NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1RTU4NzNcIixcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFVucGxhbiBWaXNpdCBIaXN0b3J5XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIyMnB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICB7cmVuZGVyTGlzdChcIlVOUExBTlwiLCB1bnBsYW5IaXN0b3J5KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdmlzaXQvdW5wbGFuL2hpc3RvcnlcIj5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD17XCJTZWUgRGV0YWlsc1wifSAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlcldvcmtWaXNpdCA9ICgpID0+IHtcbiAgICBpZiAobG9hZGluZykge1xuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI1cHhcIiwgbWFyZ2luVG9wOiBcIjIycHhcIiB9fSBzaGFkb3c+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm92ZXJ2aWV3fT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfT5cbiAgICAgICAgICAgICAgICAgIHttb21lbnQoKS5mb3JtYXQoXCJEIC8gTU1NIC8gWVlZWVwiKX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogXCIjNUU1ODczXCIsIG1hcmdpblRvcDogXCI3cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjM2cHhcIiwgZm9udFdlaWdodDogXCI2MDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAge3dvcmtWaXNpdEhpc3RvcnkubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMThweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAve3dvcmtWaXNpdC5sZW5ndGggKyB3b3JrVmlzaXRIaXN0b3J5Lmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21hc3Rlci13b3JrLXZpc2l0XCI+XG4gICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiN3B4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZFQjgwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4IDIycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBBZGQgTmV3ICtcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBpZV9wZXJjZW50YWdlfT5cbiAgICAgICAgICAgICAgICAgIHt3b3JrVmlzaXRIaXN0b3J5Lmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgICAgICA/IFwiMCVcIlxuICAgICAgICAgICAgICAgICAgICA6IGAke01hdGgucm91bmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAod29ya1Zpc2l0SGlzdG9yeS5sZW5ndGggL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAod29ya1Zpc2l0Lmxlbmd0aCArIHdvcmtWaXNpdEhpc3RvcnkubGVuZ3RoKSkgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAxMDBcbiAgICAgICAgICAgICAgICAgICAgICApfSVgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxEb3VnaG51dFxuICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YVdvcmtWaXNpdH1cbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2RvbnV0T3B0aW9uc31cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjJweFwiLCBib3JkZXJSYWRpdXM6IFwiMzBweFwiIH19IHNoYWRvdz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxhbl9jb250YWluZXJ9PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNUU1ODczXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBZb3VyIFdvcmsgVmlzaXQgVG9kYXlcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjIycHggMFwiIH19PlxuICAgICAgICAgICAgICAgIHtyZW5kZXJMaXN0V29ya1Zpc2l0KHdvcmtWaXNpdCl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3dvcmstdmlzaXRcIj5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD17XCJTZWUgRGV0YWlsc1wifSAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9uQXBwcm92ZSA9ICgpID0+IHtcbiAgICB2YXIgY2hlY2tQZW5kaW5nID0gcGVuZGluZ0FwcHJvdmUuZmlsdGVyKCh2YWwpID0+IHtcbiAgICAgIHJldHVybiB2YWwuY2hlY2tCb3g7XG4gICAgfSk7XG4gICAgaWYgKGNoZWNrUGVuZGluZy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xuICAgICAgaWYgKHVzZXJEYXRhKSB7XG4gICAgICAgIHNldExvYWRpbmdBcHByb3ZlKHRydWUpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrUGVuZGluZy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IG1vZHVsZSA9XG4gICAgICAgICAgICBjaGVja1BlbmRpbmdbaV0ubW9kdWwgPT09IFwiUGxhblwiXG4gICAgICAgICAgICAgID8gXCJWSVNJVFBMQU5cIlxuICAgICAgICAgICAgICA6IGNoZWNrUGVuZGluZ1tpXS5tb2R1bCA9PT0gXCJVblBsYW5cIlxuICAgICAgICAgICAgICA/IFwiVklTSVRVTlBMQU5cIlxuICAgICAgICAgICAgICA6IGNoZWNrUGVuZGluZ1tpXS5tb2R1bCA9PT0gXCJTcHJlYWRpbmdcIlxuICAgICAgICAgICAgICA/IFwiU1BSRUFESU5HXCJcbiAgICAgICAgICAgICAgOiBcIlwiO1xuXG4gICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGFwcHJvdmFsVHJhbnNhY3Rpb25EYXRhTW9kZWw6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN5c3RlbUNvZGU6IFwiU0FLQU1PUlwiLFxuICAgICAgICAgICAgICAgIG1vZHVsZUNvZGU6IG1vZHVsZSxcbiAgICAgICAgICAgICAgICBhcHByb3ZhbExldmVsOiAxLFxuICAgICAgICAgICAgICAgIGlkOiBjaGVja1BlbmRpbmdbaV0uaWQsXG4gICAgICAgICAgICAgICAgYXBwcm92YWxJRDpcbiAgICAgICAgICAgICAgICAgIGNoZWNrUGVuZGluZ1tpXS5tb2R1bCA9PT0gXCJQbGFuXCJcbiAgICAgICAgICAgICAgICAgICAgPyAzNTJcbiAgICAgICAgICAgICAgICAgICAgOiBjaGVja1BlbmRpbmdbaV0ubW9kdWwgPT09IFwiVW5QbGFuXCJcbiAgICAgICAgICAgICAgICAgICAgPyAzNThcbiAgICAgICAgICAgICAgICAgICAgOiBjaGVja1BlbmRpbmdbaV0ubW9kdWwgPT09IFwiU3ByZWFkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgPyAzNTlcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwiLFxuICAgICAgICAgICAgICAgIGRvY05vOiBjaGVja1BlbmRpbmdbaV0ubm9tb3JEb2t1bWVuLFxuICAgICAgICAgICAgICAgIHBpYzogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBhcHByb3ZhbExpbmU6IDAsXG4gICAgICAgICAgICAgICAgbm90ZXM6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgbmVlZEFwcHJvdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgYXBwcm92ZURhdGU6IG5vdy50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgICAgIHN0YXR1czogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzeXN0ZW1Db2RlOiBcIlNBS0FNT1JcIixcbiAgICAgICAgICAgIG1vZHVsZUNvZGU6IG1vZHVsZSxcbiAgICAgICAgICAgIGRvY05vOiBjaGVja1BlbmRpbmdbaV0ubm9tb3JEb2t1bWVuLFxuICAgICAgICAgICAgYXBwcm92ZXJGcm9tOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgYXBwcm92ZXJUbzogXCJzdHJpbmdcIixcbiAgICAgICAgICAgIHN0YXR1czogXCJzdHJpbmdcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgbm90ZXM6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICBjcmVhdGVkQnk6IHVzZXJEYXRhLnVzZXJuYW1lLFxuICAgICAgICAgICAgY3JlYXRlZERhdGU6IG5vdy50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgZW1haWxEYXRhOiB7XG4gICAgICAgICAgICAgIHN5c3RlbUNvZGU6IFwiU0FLQU1PUlwiLFxuICAgICAgICAgICAgICBtb2R1bGVDb2RlOiBtb2R1bGUsXG4gICAgICAgICAgICAgIGRvY3VtZW50TnVtYmVyOiBjaGVja1BlbmRpbmdbaV0ubm9tb3JEb2t1bWVuLFxuICAgICAgICAgICAgICBlbWFpbFRvOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICBlbWFpbENDOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICBlbWFpbEJDQzogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgZW1haWxTdWJqZWN0OiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICBlbWFpbEJvZHk6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH07XG4gICAgICAgICAgYXBwcm92YWxBcHByb3ZlKFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIGNoZWNrUGVuZGluZ1tpXS5tb2R1bCxcbiAgICAgICAgICAgIGNoZWNrUGVuZGluZ1tpXS5pZCxcbiAgICAgICAgICAgIHVzZXJEYXRhXG4gICAgICAgICAgKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGkgPT09IGNoZWNrUGVuZGluZy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZ0FwcHJvdmUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGdldEFwcHJvdmFsKHVzZXJEYXRhKVxuICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFDaGVja0JveCA9IGRhdGEubWFwKCh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyAuLi52YWwsIGNoZWNrQm94OiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc2V0UGVuZGluZ0FwcHJvdmUoZGF0YUNoZWNrQm94KTtcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlckFwcHJvdmFsID0gKCkgPT4ge1xuICAgIHZhciBjaGVja1BlbmRpbmcgPSBwZW5kaW5nQXBwcm92ZS5maWx0ZXIoKHZhbCkgPT4ge1xuICAgICAgcmV0dXJuIHZhbC5jaGVja0JveDtcbiAgICB9KTtcbiAgICBpZiAobG9hZGluZykge1xuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMnB4XCIsIGJvcmRlclJhZGl1czogXCIzMHB4XCIgfX0gc2hhZG93PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGFuX2NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1RTU4NzNcIixcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFBlbmRpbmcgQXBwcm92YWxcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIyMnB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjEwJSA5MCVcIixcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjEwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrUGVuZGluZy5sZW5ndGggPT09IHBlbmRpbmdBcHByb3ZlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbGwgPSBwZW5kaW5nQXBwcm92ZS5tYXAoKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4udmFsLCBjaGVja0JveDogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQZW5kaW5nQXBwcm92ZShhbGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbGwgPSBwZW5kaW5nQXBwcm92ZS5tYXAoKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4udmFsLCBjaGVja0JveDogdHJ1ZSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBlbmRpbmdBcHByb3ZlKGFsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tQZW5kaW5nLmxlbmd0aCA9PT0gcGVuZGluZ0FwcHJvdmUubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25BcHByb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17Y2hlY2tQZW5kaW5nLmxlbmd0aCA/IFwiZ3JlZW5cIiA6IFwiZGlzYWJsZVwifVxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1wiQXBwcm92ZVwifVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB7cGVuZGluZ0FwcHJvdmUubWFwKCh2YWwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMTAlIDkwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCI4cHggMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja0JveFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dmFsLmNoZWNrQm94fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZW5kaW5nQXBwcm92ZS5zcGxpY2UoaW5kZXgsIDEsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wZW5kaW5nQXBwcm92ZVtpbmRleF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tCb3g6ICF2YWwuY2hlY2tCb3gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREdW1teShkdW1teSArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnNldEZvY3VzQXBwcm92YWwodmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvYXBwcm92YWwvJHt2YWwubW9kdWx9LyR7dmFsLmlkfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjcwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIyZnIgMWZyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e3ZhbC51c2VybmFtZVNNUn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZlYjgwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogXCIxcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbC5tb2R1bH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNzAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbC5uYW1hT3V0bGV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMTJweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbC5hbGFtYXRPdXRsZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvPlxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyV29ya0RheSA9ICgpID0+IHtcbiAgICBpZiAod29ya0RheS5sZW5ndGggIT09IDAgJiYgIWxvYWRpbmcgJiYgIWxvYWRpbmdNZW51KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjJweFwiLCBib3JkZXJSYWRpdXM6IFwiNnB4XCIgfX0gc2hhZG93PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxhbl9jb250YWluZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc190aXRsZX0+XG4gICAgICAgICAgICAgIFdvcmtpbmcgRGF5IHttb21lbnQoKS5mb3JtYXQoXCJNTU1NIFlZWVlcIil9XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFdlaWdodDogXCI3MDBcIiB9fT5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjRkVCODAwXCIgfX0+e3dvcmtEYXkuaGFyaUtlcmphfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIxMnB4XCIsIGZvbnRXZWlnaHQ6IFwiNDAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICB7XCIgLyBcIn1cbiAgICAgICAgICAgICAgICAgIHt3b3JrRGF5LnRvdGFsSGFyaUtlcmphfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlbmRlclByb2dyZXNzID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlbmRlclNhbGVzID0gKHRpdGxlLCBkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyIDJmclwiIH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc190aXRsZX0+e3RpdGxlfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19udW1iZXJ9PlxuICAgICAgICAgICAgICB7ZGF0YS5zYWxlcy50b0xvY2FsZVN0cmluZyhcImlkLUlEXCIpfVxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIxMnB4XCIsIGZvbnRXZWlnaHQ6IFwiNDAwXCIgfX0+XG4gICAgICAgICAgICAgICAge1wiIC8gXCJ9XG4gICAgICAgICAgICAgICAge2RhdGEudGFyZ2V0LnRvTG9jYWxlU3RyaW5nKFwiaWQtSURcIil9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjEzcHggMCAwIDBcIiB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfYmFyfT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfYmFyX25vd31cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogYCR7KGRhdGEuc2FsZXMgLyBkYXRhLnRhcmdldCkgKiAxMDB9JWAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKTtcbiAgICB9O1xuICAgIGlmICghbG9hZGluZyAmJiAhbG9hZGluZ01lbnUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMnB4XCIsIGJvcmRlclJhZGl1czogXCI2cHhcIiB9fSBzaGFkb3c+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGFuX2NvbnRhaW5lcn0+XG4gICAgICAgICAgICB7c2FsZXNUYXJnZXQubGVuZ3RoICE9PSAwID8gcmVuZGVyU2FsZXMoXCJTYWxlc1wiLCBzYWxlc1RhcmdldCkgOiBcIlwifVxuICAgICAgICAgICAge3NhbGVzVGFyZ2V0NzUubGVuZ3RoICE9PSAwXG4gICAgICAgICAgICAgID8gcmVuZGVyU2FsZXMoXCJTYWxlcyA3NSVcIiwgc2FsZXNUYXJnZXQ3NSlcbiAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAge05PTy5sZW5ndGggIT09IDAgPyByZW5kZXJTYWxlcyhcIlNhbGVzIE5PT1wiLCBOT08pIDogXCJcIn1cbiAgICAgICAgICAgIHtmcm9udGxpbmVyLmxlbmd0aCAhPT0gMCA/IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxZnIgMWZyXCIgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX3RpdGxlfT5Gcm9udGxpbmVyPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX251bWJlcn0+XG4gICAgICAgICAgICAgICAgICAgIHtyb2xlID09PSBcIlNNUlwiID8gZnJvbnRsaW5lci5hY2ggOiBmcm9udGxpbmVyLnRhcmdldH1cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMTJweFwiLCBmb250V2VpZ2h0OiBcIjQwMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgIHtcIiAvIFwifVxuICAgICAgICAgICAgICAgICAgICAgIHtmcm9udGxpbmVyLnRhcmdldH1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMTNweCAwIDAgMFwiIH19PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJ9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJfbm93fVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHsoZnJvbnRsaW5lci5hY2ggLyBmcm9udGxpbmVyLnRhcmdldCkgKiAxMDB9JWAsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtwcm9kdWt0aWZpdGFzLmxlbmd0aCAhPT0gMCA/IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxZnIgMWZyXCIgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX3RpdGxlfT5Qcm9kdWt0aWZpdGFzPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX251bWJlcn0+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9kdWt0aWZpdGFzLmFjaGlldmVtZW50fVxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIxMnB4XCIsIGZvbnRXZWlnaHQ6IFwiNDAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAge1wiIC8gXCJ9XG4gICAgICAgICAgICAgICAgICAgICAge3Byb2R1a3RpZml0YXMudGFyZ2V0fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxM3B4IDAgMCAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcn0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcl9ub3d9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGAke1xuICAgICAgICAgICAgICAgICAgICAgICAgKHByb2R1a3RpZml0YXMuYWNoaWV2ZW1lbnQgLyBwcm9kdWt0aWZpdGFzLnRhcmdldCkgKiAxMDBcbiAgICAgICAgICAgICAgICAgICAgICB9JWAsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyUmV2aXNlTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCByZW5kZXJMaXN0ID0gKGRhdGEsIG1vZHVsKSA9PiB7XG4gICAgICB2YXIgcmVuZGVyID0gZGF0YS5tYXAoKHZhbCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICAgICAgICAgICAgbWFyZ2luOiBcIjhweCAwXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWwpO1xuICAgICAgICAgICAgICBhY3Rpb25zLnNldEZvY3VzQXBwcm92YWwodmFsKTtcbiAgICAgICAgICAgICAgaWYgKG1vZHVsID09PSBcIlBsYW5cIikge1xuICAgICAgICAgICAgICAgIGdldFZpc2l0UGxhblByb2R1Y3QodmFsLmlkVmlzaXRQbGFuKVxuICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGFJbnZvaWNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnMuc2V0UmV2aXNlQXZhYmlsaXR5KGRhdGFJbnZvaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YUludm9pY2UpO1xuICAgICAgICAgICAgICAgICAgICBnZXRJbnZvaWNlRGF0YVBvc20odmFsLmlkVmlzaXRQbGFuKVxuICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRhUG9zbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5zZXRSZXZpc2VWaXNpYmlsaXR5KGRhdGFQb3NtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvcmV2aXNlLyR7bW9kdWx9LyR7dmFsLmlkVmlzaXRQbGFufWApO1xuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vZHVsID09PSBcIlVuUGxhblwiKSB7XG4gICAgICAgICAgICAgICAgZ2V0VW5QbGFuUHJvZHVjdHModmFsLmlkKVxuICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGFJbnZvaWNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFJbnZvaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5zZXRSZXZpc2VBdmFiaWxpdHkoZGF0YUludm9pY2UpO1xuICAgICAgICAgICAgICAgICAgICBnZXRJbnZvaWNlRGF0YVBvc21VbnBsYW4odmFsLmlkKVxuICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRhUG9zbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5zZXRSZXZpc2VWaXNpYmlsaXR5KGRhdGFQb3NtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFQb3NtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvcmV2aXNlLyR7bW9kdWx9LyR7dmFsLmlkfWApO1xuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vZHVsID09PSBcIlNwcmVhZGluZ1wiKSB7XG4gICAgICAgICAgICAgICAgZ2V0U3ByZWFkaW5nUHJvZHVjdCh2YWwuaWQpXG4gICAgICAgICAgICAgICAgICAudGhlbigoZGF0YUludm9pY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YUludm9pY2UpO1xuICAgICAgICAgICAgICAgICAgICBnZXRJbnZvaWNlRGF0YVBvc21TcHJlYWRpbmcodmFsLmlkKVxuICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRhUG9zbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5zZXRSZXZpc2VWaXNpYmlsaXR5KGRhdGFQb3NtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFQb3NtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvcmV2aXNlLyR7bW9kdWx9LyR7dmFsLmlkfWApO1xuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIHJvdXRlci5wdXNoKGAvcmV2aXNlLyR7bW9kdWx9LyR7dmFsLmlkfWApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNzAwXCIsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICAgICAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjJmciAxZnJcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdj57dmFsLnVzZXJuYW1lU01SfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmViODAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjFweFwiLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7bW9kdWx9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjcwMFwiLFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxMnB4XCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt2YWwubmFtYU91dGxldH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjEycHhcIiB9fT57dmFsLmFsYW1hdE91dGxldH08L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlbmRlcjtcbiAgICB9O1xuICAgIGlmIChyZXZpc2VQbGFuLmxlbmd0aCB8fCByZXZpc2VVblBsYW4ubGVuZ3RoIHx8IHJldmlzZVNwcmVhZGluZy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBtYXJnaW5Ub3A6IFwiMjJweFwiLCBjb2xvcjogXCIjNUU1ODczXCIgfX1cbiAgICAgICAgICBzaGFkb3dcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxhbl9jb250YWluZXJ9PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1RTU4NzNcIixcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2PlJldmlzZSBWaXNpdCA8L2Rpdj5cbiAgICAgICAgICAgICAge3JlbmRlckxpc3QocmV2aXNlUGxhbiwgXCJQbGFuXCIpfVxuICAgICAgICAgICAgICB7cmVuZGVyTGlzdChyZXZpc2VVblBsYW4sIFwiVW5QbGFuXCIpfVxuICAgICAgICAgICAgICB7cmVuZGVyTGlzdChyZXZpc2VTcHJlYWRpbmcsIFwiU3ByZWFkaW5nXCIpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldEdyZWV0aW5nVGltZSA9IChtKSA9PiB7XG4gICAgdmFyIGcgPSBudWxsOyAvL3JldHVybiBnXG5cbiAgICBpZiAoIW0gfHwgIW0uaXNWYWxpZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvL2lmIHdlIGNhbid0IGZpbmQgYSB2YWxpZCBvciBmaWxsZWQgbW9tZW50LCB3ZSByZXR1cm4uXG5cbiAgICB2YXIgc3BsaXRfYWZ0ZXJub29uID0gMTI7IC8vMjRociB0aW1lIHRvIHNwbGl0IHRoZSBhZnRlcm5vb25cbiAgICB2YXIgc3BsaXRfZXZlbmluZyA9IDE3OyAvLzI0aHIgdGltZSB0byBzcGxpdCB0aGUgZXZlbmluZ1xuICAgIHZhciBjdXJyZW50SG91ciA9IHBhcnNlRmxvYXQobS5mb3JtYXQoXCJISFwiKSk7XG5cbiAgICBpZiAoY3VycmVudEhvdXIgPj0gc3BsaXRfYWZ0ZXJub29uICYmIGN1cnJlbnRIb3VyIDw9IHNwbGl0X2V2ZW5pbmcpIHtcbiAgICAgIGcgPSBcIkFmdGVybm9vbixcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRIb3VyID49IHNwbGl0X2V2ZW5pbmcpIHtcbiAgICAgIGcgPSBcIkV2ZW5pbmcsXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGcgPSBcIk1vcm5pbmcsXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGc7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyUGFnZSA9ICgpID0+IHtcbiAgICBpZiAobG9hZGluZyAmJiBsb2FkaW5nTWVudSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgICAgIDxCb3ROYXYgLz5cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJnX3RvcH0gLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2luZm9fZ3JpZH0+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHB9XG4gICAgICAgICAgICAgICAgICBzcmM9e1BQID8gUFAgOiBcIi9wcm9maWxlLW5hdjEuc3ZnXCJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMTVweFwiIH19PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIxNHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIHtnZXRHcmVldGluZ1RpbWUobW9tZW50KCkpfSB7c3RhdGUudXNlclJlZHVjZXIudXNlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjEycHhcIiB9fT57cm9sZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvbm90aWZpY2F0aW9uXCJ9PlxuICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5ub3RpZn0gc3JjPVwiL25vdGlmLnN2Z1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAge25vdGlmID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcIiByZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCItMzBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBcIi0xNHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjFweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZlYjgwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25ld0Fubm91bmNlbWVudC5sZW5ndGggPCA5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbmV3QW5ub3VuY2VtZW50Lmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiOStcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgICAgICAgICB7cmVuZGVyVG9wTWVudSgpfVxuICAgICAgICAgICAgICAgICAge2ZvY3VzID09PSBcIlBMQU5cIlxuICAgICAgICAgICAgICAgICAgICA/IHJlbmRlclBsYW4oKVxuICAgICAgICAgICAgICAgICAgICA6IGZvY3VzID09PSBcIlVOUExBTlwiXG4gICAgICAgICAgICAgICAgICAgID8gcmVuZGVyVW5wbGFuKClcbiAgICAgICAgICAgICAgICAgICAgOiBmb2N1cyA9PT0gXCJTUFJFQURJTkdcIlxuICAgICAgICAgICAgICAgICAgICA/IHJlbmRlclNwcmVhZGluZygpXG4gICAgICAgICAgICAgICAgICAgIDogZm9jdXMgPT09IFwiV09SSy1WSVNJVFwiXG4gICAgICAgICAgICAgICAgICAgID8gcmVuZGVyV29ya1Zpc2l0KClcbiAgICAgICAgICAgICAgICAgICAgOiBmb2N1cyA9PT0gXCJTQUxFUy1UUkFDS0lOR1wiXG4gICAgICAgICAgICAgICAgICAgID8gcmVuZGVyQXBwcm92YWwoKVxuICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICB7cmVuZGVyUmV2aXNlTGlzdCgpfVxuICAgICAgICAgICAgICAgICAge3JlbmRlcldvcmtEYXkoKX1cbiAgICAgICAgICAgICAgICAgIHtyZW5kZXJQcm9ncmVzcygpfVxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTIwcHhcIiB9fSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxCb3ROYXYgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHJlbmRlclBhZ2UoKTtcbn1cbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5hdl9jb250YWluZXJcIjogXCJCb3ROYXZfbmF2X2NvbnRhaW5lcl9fMWtRYjVcIixcblx0XCJuYXZfYm94XCI6IFwiQm90TmF2X25hdl9ib3hfXzFTUHlWXCIsXG5cdFwibmF2X2ltZ1wiOiBcIkJvdE5hdl9uYXZfaW1nX18zUFQ5VVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiQ2hlY2tib3hfY29udGFpbmVyX18xdE1mRlwiLFxuXHRcImNoZWNrbWFya19ncmVlblwiOiBcIkNoZWNrYm94X2NoZWNrbWFya19ncmVlbl9fMXFOUktcIixcblx0XCJjaGVja21hcmtfeWVsbG93XCI6IFwiQ2hlY2tib3hfY2hlY2ttYXJrX3llbGxvd19fa1k1emVcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX18zUWtsVFwiLFxuXHRcIndyYXBwZXJcIjogXCJIb21lX3dyYXBwZXJfXzNHdjF2XCIsXG5cdFwiYmdfdG9wXCI6IFwiSG9tZV9iZ190b3BfX1RUenJVXCIsXG5cdFwidXNlcl9pbmZvX2dyaWRcIjogXCJIb21lX3VzZXJfaW5mb19ncmlkX19pWk9ueVwiLFxuXHRcInBwXCI6IFwiSG9tZV9wcF9fMlhfdkpcIixcblx0XCJub3RpZlwiOiBcIkhvbWVfbm90aWZfXzJ4RE9IXCIsXG5cdFwibWVudV9ncmlkM1wiOiBcIkhvbWVfbWVudV9ncmlkM19fM2NlMVNcIixcblx0XCJtZW51X2dyaWQxXCI6IFwiSG9tZV9tZW51X2dyaWQxX18xY3NBRFwiLFxuXHRcImZvY3VzX21lbnVcIjogXCJIb21lX2ZvY3VzX21lbnVfXzFZYkdGXCIsXG5cdFwibWVudVwiOiBcIkhvbWVfbWVudV9fMzdvMllcIixcblx0XCJvdmVydmlld1wiOiBcIkhvbWVfb3ZlcnZpZXdfXzI1dENjXCIsXG5cdFwiZGF0ZVwiOiBcIkhvbWVfZGF0ZV9fMTRvaTFcIixcblx0XCJwbGFuX2NvbnRhaW5lclwiOiBcIkhvbWVfcGxhbl9jb250YWluZXJfXzM4NmNwXCIsXG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fMkFxQ0tcIixcblx0XCJ1bnBsYW5fZ3JpZFwiOiBcIkhvbWVfdW5wbGFuX2dyaWRfXzN4cWFnXCIsXG5cdFwidW5wbGFuX2dyaWQyXCI6IFwiSG9tZV91bnBsYW5fZ3JpZDJfXzFwR1UzXCIsXG5cdFwibnVtX3RvdGFsX3VucGxhblwiOiBcIkhvbWVfbnVtX3RvdGFsX3VucGxhbl9fM282S1BcIixcblx0XCJhZGRfdW5wbGFuXCI6IFwiSG9tZV9hZGRfdW5wbGFuX18zTnlPd1wiLFxuXHRcInBpZV9wZXJjZW50YWdlXCI6IFwiSG9tZV9waWVfcGVyY2VudGFnZV9fMzZhMmVcIixcblx0XCJwcm9ncmVzc190aXRsZVwiOiBcIkhvbWVfcHJvZ3Jlc3NfdGl0bGVfXzJSVFlPXCIsXG5cdFwicHJvZ3Jlc3NfbnVtYmVyXCI6IFwiSG9tZV9wcm9ncmVzc19udW1iZXJfXzJRdl9yXCIsXG5cdFwicHJvZ3Jlc3NfYmFyXCI6IFwiSG9tZV9wcm9ncmVzc19iYXJfXzM5bzlNXCIsXG5cdFwicHJvZ3Jlc3NfYmFyX25vd1wiOiBcIkhvbWVfcHJvZ3Jlc3NfYmFyX25vd19fMUswV0pcIixcblx0XCJtYWluX21lbnVfY29udGFpbmVyXCI6IFwiSG9tZV9tYWluX21lbnVfY29udGFpbmVyX18zRWRqdlwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9tZXNzYWdpbmdcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNoYXJ0anMtMlwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==