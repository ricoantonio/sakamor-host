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
          localStorage.setItem("role", "PIMCAB");
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
          localStorage.setItem("role", "SMR");
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
          lineNumber: 446,
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
        lineNumber: 472,
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
        lineNumber: 490,
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
                    lineNumber: 530,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 521,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    children: val.namaOutlet
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 541,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    style: {
                      fontSize: "14px",
                      fontWeight: "300"
                    },
                    children: val.alamatOutlet
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 542,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 540,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 518,
                columnNumber: 17
              }, this)
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 508,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 507,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 504,
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
        lineNumber: 558,
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
                    lineNumber: 596,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 587,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    children: val.namaSMR
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 606,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    style: {
                      fontSize: "14px",
                      fontWeight: "300"
                    },
                    children: ["Rayon - ", val.rayon]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 607,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    style: {
                      fontSize: "14px",
                      fontWeight: "300"
                    },
                    children: ["Produk Focus - ", val.produkFokus]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 610,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 605,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 584,
                columnNumber: 17
              }, this)
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 574,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 573,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 572,
          columnNumber: 11
        }, this);
      });
    }
  };

  const renderPlan = () => {
    if (loading) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Spinner__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 625,
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
                lineNumber: 632,
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
                  lineNumber: 636,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    fontSize: "18px"
                  },
                  children: ["/", plan.length + planHistory.length]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 639,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 635,
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
                    lineNumber: 645,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 644,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 643,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 631,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().pie_percentage),
                children: planHistory.length === 0 ? "0%" : `${Math.round(planHistory.length / (plan.length + planHistory.length) * 100)}%`
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 663,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_14__.Doughnut, {
                data: dataPlan,
                options: donutOptions,
                width: 100,
                height: 100
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 672,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 662,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 630,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 629,
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
              lineNumber: 683,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                margin: "22px 0"
              },
              children: renderList("PLAN", plan)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 693,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
              href: "/visit/plan",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
                  text: "See Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 696,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 695,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 694,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 682,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 681,
          columnNumber: 11
        }, this)]
      }, void 0, true);
    }
  };

  const renderSpreading = () => {
    if (loading) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Spinner__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 708,
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
                lineNumber: 715,
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
                  lineNumber: 719,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    fontSize: "18px"
                  },
                  children: ["/", plan.length]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 722,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 718,
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
                    lineNumber: 726,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 725,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 724,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 714,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().pie_percentage),
                children: "0%"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 744,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_14__.Doughnut, {
                data: dataSpreading,
                options: donutOptions,
                width: 100,
                height: 100
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 745,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 743,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 713,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 712,
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
              lineNumber: 756,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                margin: "22px 0"
              },
              children: renderList("SPREADING", spreadingHistory)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 766,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
              href: "/visit/spreading/history",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
                  text: "See Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 771,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 770,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 769,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 755,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 754,
          columnNumber: 11
        }, this)]
      }, void 0, true);
    }
  };

  const renderUnplan = () => {
    if (loading) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Spinner__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 783,
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
              lineNumber: 789,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                fontSize: "14px"
              },
              children: "Total Unplan Visit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 792,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().date),
              children: moment__WEBPACK_IMPORTED_MODULE_15___default()().format("MMMM")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 793,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 788,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 787,
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
                    lineNumber: 801,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 800,
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
                    lineNumber: 805,
                    columnNumber: 21
                  }, this), " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 803,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  style: {
                    textAlign: "center"
                  },
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                    src: "/next.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 816,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 815,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 799,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 798,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 797,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 796,
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
              lineNumber: 825,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                margin: "22px 0"
              },
              children: renderList("UNPLAN", unplanHistory)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 835,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
              href: "/visit/unplan/history",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
                  text: "See Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 840,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 839,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 838,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 824,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 823,
          columnNumber: 11
        }, this)]
      }, void 0, true);
    }
  };

  const renderWorkVisit = () => {
    if (loading) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Spinner__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 852,
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
                lineNumber: 859,
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
                  lineNumber: 863,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    fontSize: "18px"
                  },
                  children: ["/", workVisit.length + workVisitHistory.length]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 866,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 862,
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
                    lineNumber: 872,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 871,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 870,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 858,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().pie_percentage),
                children: workVisitHistory.length === 0 ? "0%" : `${Math.round(workVisitHistory.length / (workVisit.length + workVisitHistory.length) * 100)}%`
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 890,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_14__.Doughnut, {
                data: dataWorkVisit,
                options: donutOptions,
                width: 100,
                height: 100
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 899,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 889,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 857,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 856,
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
              lineNumber: 910,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                margin: "22px 0"
              },
              children: renderListWorkVisit(workVisit)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 920,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
              href: "/work-visit",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
                  text: "See Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 925,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 924,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 923,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 909,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 908,
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
        lineNumber: 1031,
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
                      lineNumber: 1055,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1054,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
                    onClick: () => {
                      onApprove();
                    },
                    color: checkPending.length ? "green" : "disable",
                    text: "Approve"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1076,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1047,
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
                          lineNumber: 1096,
                          columnNumber: 29
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1095,
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
                            lineNumber: 1121,
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
                            lineNumber: 1122,
                            columnNumber: 31
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 1114,
                          columnNumber: 29
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                          style: {
                            fontWeight: "700",
                            fontSize: "12px"
                          },
                          children: val.namaOutlet
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1136,
                          columnNumber: 29
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                          style: {
                            fontSize: "12px"
                          },
                          children: val.alamatOutlet
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1144,
                          columnNumber: 29
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 1107,
                        columnNumber: 27
                      }, this)]
                    }, void 0, true)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1086,
                    columnNumber: 23
                  }, this);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1046,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1037,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1036,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1035,
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
                lineNumber: 1169,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                style: {
                  fontSize: "12px",
                  fontWeight: "400"
                },
                children: [" / ", workDay.totalHariKerja]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1170,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1168,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1166,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1165,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1164,
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
            lineNumber: 1186,
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
              lineNumber: 1189,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1187,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 1185,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            margin: "13px 0 0 0"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().progress_bar)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1196,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().progress_bar_now),
            style: {
              width: `${data.sales / data.target * 100}%`
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1197,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 1195,
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
                lineNumber: 1221,
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
                  lineNumber: 1224,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1222,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1218,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                margin: "13px 0 0 0"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().progress_bar)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1231,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().progress_bar_now),
                style: {
                  width: `${frontliner.ach / frontliner.target * 100}%`
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1232,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1230,
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
                lineNumber: 1248,
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
                  lineNumber: 1251,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1249,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1245,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                margin: "13px 0 0 0"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().progress_bar)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1258,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().progress_bar_now),
                style: {
                  width: `${produktifitas.achievement / produktifitas.target * 100}%`
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1259,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1257,
              columnNumber: 17
            }, this)]
          }, void 0, true) : ""]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 1210,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1209,
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
                  lineNumber: 1355,
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
                  lineNumber: 1356,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1348,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  fontWeight: "700",
                  fontSize: "12px"
                },
                children: val.namaOutlet
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1370,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  fontSize: "12px"
                },
                children: val.alamatOutlet
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1378,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1347,
              columnNumber: 15
            }, this)
          }, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1282,
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
              lineNumber: 1401,
              columnNumber: 15
            }, this), renderList(revisePlan, "Plan"), renderList(reviseUnPlan, "UnPlan"), renderList(reviseSpreading, "Spreading")]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1393,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1392,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1388,
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
          lineNumber: 1438,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BotNav__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1439,
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
            lineNumber: 1446,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
            rel: "icon",
            href: "/favicon.ico"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1447,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 1445,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().container),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().wrapper),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().bg_top)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1451,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().user_info_grid),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().pp),
                src: PP ? PP : "/profile-nav1.svg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1453,
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
                  lineNumber: 1458,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  style: {
                    fontSize: "12px"
                  },
                  children: role
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1461,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1457,
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
                      lineNumber: 1466,
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
                          lineNumber: 1486,
                          columnNumber: 29
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1475,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1468,
                      columnNumber: 25
                    }, this) : null]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 1465,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1464,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1463,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_16___default().main),
                children: [renderTopMenu(), focus === "PLAN" ? renderPlan() : focus === "UNPLAN" ? renderUnplan() : focus === "SPREADING" ? renderSpreading() : focus === "WORK-VISIT" ? renderWorkVisit() : focus === "SALES-TRACKING" ? renderApproval() : "", renderReviseList(), renderWorkDay(), renderProgress(), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  style: {
                    marginBottom: "120px"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1513,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1497,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1452,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1450,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1449,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BotNav__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1518,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1444,
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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","helper_js-store_index_js","components_Button_jsx-components_Card_jsx-components_Spinner_jsx","webpush_js"], function() { return __webpack_exec__("./pages/index.jsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYWthLy4vY29tcG9uZW50cy9Cb3ROYXYuanN4Iiwid2VicGFjazovL3Nha2EvLi9jb21wb25lbnRzL0NoZWNrYm94LmpzeCIsIndlYnBhY2s6Ly9zYWthLy4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovL3Nha2EvLi9zdHlsZXMvY29tcG9uZW50cy9Cb3ROYXYubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9zYWthLy4vc3R5bGVzL2NvbXBvbmVudHMvQ2hlY2tib3gubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9zYWthLy4vc3R5bGVzL3BhZ2VzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9zYWthL2V4dGVybmFsIFwiZmlyZWJhc2UvYXBwXCIiLCJ3ZWJwYWNrOi8vc2FrYS9leHRlcm5hbCBcImZpcmViYXNlL21lc3NhZ2luZ1wiIiwid2VicGFjazovL3Nha2EvZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly9zYWthL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3Nha2EvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vc2FrYS9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3Nha2EvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3Nha2EvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3Nha2EvZXh0ZXJuYWwgXCJyZWFjdC1jaGFydGpzLTJcIiIsIndlYnBhY2s6Ly9zYWthL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9zYWthL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiTmF2IiwiZm9jdXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJhY3RpdmUiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbiIsImJvcmRlclJhZGl1cyIsInN0eWxlcyIsInBhdGhuYW1lIiwiQ2hlY2tib3giLCJ0ZXh0IiwiY2hlY2tlZCIsImNvbG9yIiwib25DbGljayIsImRpc2FibGVkIiwiY2hlY2ttYXJrX2dyZWVuIiwiSG9tZSIsInN0YXRlIiwiZGlzcGF0Y2giLCJhY3Rpb25zIiwidXNlQ29udGV4dCIsIlN0b3JlcyIsInNldEZvY3VzIiwidXNlU3RhdGUiLCJwbGFuIiwic2V0UGxhbiIsIndvcmtWaXNpdCIsInNldFdvcmtWaXNpdCIsIndvcmtWaXNpdEhpc3RvcnkiLCJzZXRXb3JrVmlzaXRIaXN0b3J5IiwicGxhbkhpc3RvcnkiLCJzZXRQbGFuSGlzdG9yeSIsInNwcmVhZGluZ0hpc3RvcnkiLCJzZXRTcHJlYWRpbmdIaXN0b3J5IiwidW5wbGFuSGlzdG9yeSIsInNldFVucGxhbkhpc3RvcnkiLCJyb2xlIiwic2V0Um9sZSIsInRvcE1lbnUiLCJzZXRUb3BNZW51IiwibG9hZGluZyIsInNldExvYWRpbmciLCJsb2FkaW5nTWVudSIsInNldExvYWRpbmdNZW51IiwibmV3QW5ub3VuY2VtZW50Iiwic2V0TmV3QW5ub3VuY2VtZW50Iiwibm90aWYiLCJzZXROb3RpZiIsInNhbGVzVGFyZ2V0Iiwic2V0U2FsZXNUYXJnZXQiLCJzYWxlc1RhcmdldDc1Iiwic2V0U2FsZXNUYXJnZXQ3NSIsInByb2R1a3RpZml0YXMiLCJzZXRQcm9kdWt0aWZpdGFzIiwiZnJvbnRsaW5lciIsInNldEZyb250bGluZXIiLCJOT08iLCJzZXROT08iLCJ3b3JrRGF5Iiwic2V0V29ya0RheSIsInBlbmRpbmdBcHByb3ZlIiwic2V0UGVuZGluZ0FwcHJvdmUiLCJkdW1teSIsInNldER1bW15IiwibG9hZGluZ0FwcHJvdmUiLCJzZXRMb2FkaW5nQXBwcm92ZSIsInJldmlzZVBsYW4iLCJzZXRSZXZpc2VQbGFuIiwicmV2aXNlVW5QbGFuIiwic2V0UmV2aXNlVW5QbGFuIiwicmV2aXNlU3ByZWFkaW5nIiwic2V0UmV2aXNlU3ByZWFkaW5nIiwiUFAiLCJzZXRQUCIsImlzTW91bnRlZCIsInVzZVJlZiIsIm5vdyIsIkRhdGUiLCJkYXRhUGxhbiIsImRhdGFzZXRzIiwiZGF0YSIsImxlbmd0aCIsImRhdGFTcHJlYWRpbmciLCJkYXRhV29ya1Zpc2l0IiwiZG9udXRPcHRpb25zIiwiY3V0b3V0UGVyY2VudGFnZSIsInRvb2x0aXBzIiwiZW5hYmxlZCIsImhvdmVyIiwibW9kZSIsInJlc3BvbnNpdmUiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwidXNlRWZmZWN0IiwidXNlckRhdGEiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidmlld1Byb2ZpbGVQaWMiLCJ1c2VybmFtZSIsInRoZW4iLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJSb3V0ZXIiLCJnZXROb3RpZmljYXRpb25ieVVzZXJuYW1lIiwiZ2V0V29ya0RheSIsInVzZXJMb2dpbiIsImdldE1lbnUiLCJzZXRNZW51IiwibW9udGgiLCJtb21lbnQiLCJmb3JtYXQiLCJ5ZWFyIiwiZ2V0QXV0aCIsInJvbGVDb2RlIiwic2V0SXRlbSIsImdldFNhbGVzVGFyZ2V0NzVQaW1jYSIsImdldFNhbGVzVGFyZ2V0UGltY2EiLCJnZXRGcm9udGxpbmVyUGltY2EiLCJnZXRSZXZpc2VQbGFuTGlzdFNtciIsImdldFJldmlzZVVuUGxhbkxpc3RTbXIiLCJnZXRSZXZpc2VTcHJlYWRpbmdMaXN0U21yIiwiZ2V0U2FsZXNUYXJnZXRTTVIiLCJnZXRTYWxlc1RhcmdldDc1U01SIiwiZ2V0UHJvZHVrdGlmaXRhcyIsImdldEZyb250bGluZXIiLCJnZXROb28iLCJnZXRQbGFuTGlzdCIsImdldFBsYW5IaXN0b3J5IiwiZ2V0QWxsV29ya1Zpc2l0IiwiZmlsdGVyIiwidmFsIiwiaXNQZW5pbGFpYW4iLCJnZXRBcHByb3ZhbCIsImRhdGFDaGVja0JveCIsIm1hcCIsImNoZWNrQm94IiwiZ2V0VW5wbGFuTW9udGhseUhpc3RvcnkiLCJnZXRTcHJlYWRpbmdNb250aGx5SGlzdG9yeSIsInJlbmRlclRvcE1lbnUiLCJhdXRoIiwibW9kdWxlQ29kZSIsInJlbmRlciIsImluZGV4IiwicmVuZGVyTGlzdCIsInR5cGUiLCJmb250U2l6ZSIsInRleHRBbGlnbiIsImlkTWFzdGVyUGxhbiIsImZvbnRXZWlnaHQiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsInBhZGRpbmciLCJuYW1hT3V0bGV0IiwiYWxhbWF0T3V0bGV0IiwicmVuZGVyTGlzdFdvcmtWaXNpdCIsIm5hbWFTTVIiLCJyYXlvbiIsInByb2R1a0Zva3VzIiwicmVuZGVyUGxhbiIsIm1hcmdpblRvcCIsImJvcmRlciIsIk1hdGgiLCJyb3VuZCIsInJlbmRlclNwcmVhZGluZyIsInJlbmRlclVucGxhbiIsInRleHREZWNvcmF0aW9uIiwicmVuZGVyV29ya1Zpc2l0Iiwib25BcHByb3ZlIiwiY2hlY2tQZW5kaW5nIiwiaSIsIm1vZHVsZSIsIm1vZHVsIiwiYXBwcm92YWxUcmFuc2FjdGlvbkRhdGFNb2RlbCIsInN5c3RlbUNvZGUiLCJhcHByb3ZhbExldmVsIiwiaWQiLCJhcHByb3ZhbElEIiwiZG9jTm8iLCJub21vckRva3VtZW4iLCJwaWMiLCJhcHByb3ZhbExpbmUiLCJub3RlcyIsIm5lZWRBcHByb3ZlIiwiYXBwcm92ZURhdGUiLCJ0b0lTT1N0cmluZyIsInN0YXR1cyIsImFwcHJvdmVyRnJvbSIsImFwcHJvdmVyVG8iLCJkZXNjcmlwdGlvbiIsImNyZWF0ZWRCeSIsImNyZWF0ZWREYXRlIiwiZW1haWxEYXRhIiwiZG9jdW1lbnROdW1iZXIiLCJlbWFpbFRvIiwiZW1haWxDQyIsImVtYWlsQkNDIiwiZW1haWxTdWJqZWN0IiwiZW1haWxCb2R5IiwiYXBwcm92YWxBcHByb3ZlIiwicmVuZGVyQXBwcm92YWwiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ1RvcCIsImFsbCIsInNwbGljZSIsInNldEZvY3VzQXBwcm92YWwiLCJ1c2VybmFtZVNNUiIsInJlbmRlcldvcmtEYXkiLCJoYXJpS2VyamEiLCJ0b3RhbEhhcmlLZXJqYSIsInJlbmRlclByb2dyZXNzIiwicmVuZGVyU2FsZXMiLCJ0aXRsZSIsInNhbGVzIiwidG9Mb2NhbGVTdHJpbmciLCJ0YXJnZXQiLCJwcm9ncmVzc19iYXIiLCJhY2giLCJhY2hpZXZlbWVudCIsInJlbmRlclJldmlzZUxpc3QiLCJnZXRWaXNpdFBsYW5Qcm9kdWN0IiwiaWRWaXNpdFBsYW4iLCJkYXRhSW52b2ljZSIsInNldFJldmlzZUF2YWJpbGl0eSIsImdldEludm9pY2VEYXRhUG9zbSIsImRhdGFQb3NtIiwic2V0UmV2aXNlVmlzaWJpbGl0eSIsImdldFVuUGxhblByb2R1Y3RzIiwiZ2V0SW52b2ljZURhdGFQb3NtVW5wbGFuIiwiZ2V0U3ByZWFkaW5nUHJvZHVjdCIsImdldEludm9pY2VEYXRhUG9zbVNwcmVhZGluZyIsImdldEdyZWV0aW5nVGltZSIsIm0iLCJnIiwiaXNWYWxpZCIsInNwbGl0X2FmdGVybm9vbiIsInNwbGl0X2V2ZW5pbmciLCJjdXJyZW50SG91ciIsInBhcnNlRmxvYXQiLCJyZW5kZXJQYWdlIiwiYmdfdG9wIiwibWFyZ2luTGVmdCIsInVzZXJSZWR1Y2VyIiwidXNlciIsIm5hbWUiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEdBQUcsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlO0FBQ3pCLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBQ0EsTUFBSUMsTUFBTSxnQkFDUjtBQUNFLFNBQUssRUFBRTtBQUNMQyxXQUFLLEVBQUUsS0FERjtBQUVMQyxZQUFNLEVBQUUsS0FGSDtBQUdMQyxxQkFBZSxFQUFFLFNBSFo7QUFJTEMsWUFBTSxFQUFFLFVBSkg7QUFLTEMsa0JBQVksRUFBRTtBQUxU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QSxFQVpOLEVBYUdtQixnQkFBZ0IsRUFibkIsRUFjR1osYUFBYSxFQWRoQixFQWVHRyxjQUFjLEVBZmpCLGVBZ0JFO0FBQUssdUJBQUssRUFBRTtBQUFFc0MsZ0NBQVksRUFBRTtBQUFoQjtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkE3Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEYsZUEwRUUsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkExRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUE4RUQ7QUFDRixHQXhGRDs7QUF5RkEsU0FBT1QsVUFBVSxFQUFqQjtBQUNELEM7Ozs7Ozs7Ozs7QUNuL0NEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMxQkEsMEM7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NvbXBvbmVudHMvQm90TmF2Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBOYXYgPSAoeyBmb2N1cyB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgdmFyIGFjdGl2ZSA9IChcclxuICAgIDxkaXZcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICB3aWR0aDogXCI1cHhcIixcclxuICAgICAgICBoZWlnaHQ6IFwiNXB4XCIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZWI4MDBcIixcclxuICAgICAgICBtYXJnaW46IFwiNXB4IGF1dG9cIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTBweFwiLFxyXG4gICAgICB9fVxyXG4gICAgLz5cclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdl9jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdl9ib3h9PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvXCIgPyBcIi9ob21lLW5hdi5zdmdcIiA6IFwiL2hvbWUtbmF2MS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAge3JvdXRlci5wYXRobmFtZSA9PT0gXCIvXCIgPyBhY3RpdmUgOiBcIlwifVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj17XCIvY2FsZW5kYXJcIn0+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2NhbGVuZGFyXCJcclxuICAgICAgICAgICAgICAgICAgICA/IFwiL2NhbGVuZGFyLW5hdi5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCIvY2FsZW5kYXItbmF2MS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAge3JvdXRlci5wYXRobmFtZSA9PT0gXCIvY2FsZW5kYXJcIiA/IGFjdGl2ZSA6IFwiXCJ9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPXtcIi9yZXdhcmRcIn0+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09IFwiL3Jld2FyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIi9hd2FyZC1uYXYuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiL2F3YXJkLW5hdjEuc3ZnXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL3Jld2FyZFwiID8gYWN0aXZlIDogXCJcIn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e1wiL2Fubm91bmNlbWVudFwifT5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvYW5ub3VuY2VtZW50XCJcclxuICAgICAgICAgICAgICAgICAgICA/IFwiL3Jld2FyZHMtbmF2LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIi9yZXdhcmRzLW5hdjEuc3ZnXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL2Fubm91bmNlbWVudFwiID8gYWN0aXZlIDogXCJcIn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e1wiL3Byb2ZpbGVcIn0+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09IFwiL3Byb2ZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gXCIvcHJvZmlsZS1uYXYuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiL3Byb2ZpbGUtbmF2MS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAge3JvdXRlci5wYXRobmFtZSA9PT0gXCIvcHJvZmlsZVwiID8gYWN0aXZlIDogXCJcIn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NvbXBvbmVudHMvQ2hlY2tib3gubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgQ2hlY2tib3ggPSAoeyB0ZXh0LCBjaGVja2VkLCBjb2xvciwgb25DbGljaywgZGlzYWJsZWQgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBvbkNoYW5nZT17b25DbGlja30+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtjaGVja2VkfSBkaXNhYmxlZD17ZGlzYWJsZWR9IC8+XHJcbiAgICAgIHt0ZXh0fVxyXG4gICAgICA8c3BhblxyXG4gICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICBjb2xvciA9PT0gXCJncmVlblwiXHJcbiAgICAgICAgICAgID8gc3R5bGVzLmNoZWNrbWFya19ncmVlblxyXG4gICAgICAgICAgICA6IGNvbG9yID09PSBcInllbGxvd1wiXHJcbiAgICAgICAgICAgID8gc3R5bGVzLmNoZWNrbWFya195ZWxsb3dcclxuICAgICAgICAgICAgOiBzdHlsZXMuY2hlY2ttYXJrX2dyZWVuXHJcbiAgICAgICAgfVxyXG4gICAgICA+PC9zcGFuPlxyXG4gICAgPC9sYWJlbD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3g7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wYWdlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBTdG9yZXMgfSBmcm9tIFwiLi4vc3RvcmVcIjtcblxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU3Bpbm5lclwiO1xuaW1wb3J0IEJvdE5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9Cb3ROYXZcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQnV0dG9uXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkXCI7XG5pbXBvcnQgQ2hlY2tCb3ggZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2hlY2tib3hcIjtcblxuaW1wb3J0IHsgZmlyZWJhc2VDbG91ZE1lc3NhZ2luZyB9IGZyb20gXCIuLi93ZWJwdXNoXCI7XG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuXG5pbXBvcnQge1xuICBhcHByb3ZhbEFwcHJvdmUsXG4gIGdldEFsbEFubm91bmNlbWVudCxcbiAgZ2V0QWxsV29ya1Zpc2l0LFxuICBnZXRBcHByb3ZhbCxcbiAgZ2V0QXV0aCxcbiAgZ2V0RnJvbnRsaW5lcixcbiAgZ2V0RnJvbnRsaW5lclBpbWNhLFxuICBnZXRJbnZvaWNlRGF0YSxcbiAgZ2V0SW52b2ljZURhdGFQb3NtLFxuICBnZXRJbnZvaWNlRGF0YVBvc21TcHJlYWRpbmcsXG4gIGdldEludm9pY2VEYXRhUG9zbVVucGxhbixcbiAgZ2V0SW52b2ljZURhdGFTcHJlYWRpbmcsXG4gIGdldEludm9pY2VEYXRhVW5wbGFuLFxuICBnZXRNZW51LFxuICBnZXROb28sXG4gIGdldE5vdGlmaWNhdGlvbmJ5VXNlcm5hbWUsXG4gIGdldFBsYW5IaXN0b3J5LFxuICBnZXRQbGFuTGlzdCxcbiAgZ2V0UHJvZHVrdGlmaXRhcyxcbiAgZ2V0UmV2aXNlUGxhbkxpc3RTbXIsXG4gIGdldFJldmlzZVNwcmVhZGluZ0xpc3RTbXIsXG4gIGdldFJldmlzZVVuUGxhbkxpc3RTbXIsXG4gIGdldFNhbGVzVGFyZ2V0NzVQaW1jYSxcbiAgZ2V0U2FsZXNUYXJnZXQ3NVNNUixcbiAgZ2V0U2FsZXNUYXJnZXRQaW1jYSxcbiAgZ2V0U2FsZXNUYXJnZXRTTVIsXG4gIGdldFNwcmVhZGluZ01vbnRobHlIaXN0b3J5LFxuICBnZXRTcHJlYWRpbmdQcm9kdWN0LFxuICBnZXRVbnBsYW5Nb250aGx5SGlzdG9yeSxcbiAgZ2V0VW5QbGFuUHJvZHVjdHMsXG4gIGdldFZpc2l0UGxhblByb2R1Y3QsXG4gIGdldFdvcmtEYXksXG4gIHZpZXdQcm9maWxlUGljLFxufSBmcm9tIFwiLi4vaGVscGVyXCI7XG5cbmltcG9ydCB7IERvdWdobnV0IH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgcm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCwgYWN0aW9ucyB9ID0gdXNlQ29udGV4dChTdG9yZXMpO1xuICBjb25zdCBbZm9jdXMsIHNldEZvY3VzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGxhbiwgc2V0UGxhbl0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt3b3JrVmlzaXQsIHNldFdvcmtWaXNpdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt3b3JrVmlzaXRIaXN0b3J5LCBzZXRXb3JrVmlzaXRIaXN0b3J5XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3BsYW5IaXN0b3J5LCBzZXRQbGFuSGlzdG9yeV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzcHJlYWRpbmdIaXN0b3J5LCBzZXRTcHJlYWRpbmdIaXN0b3J5XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3VucGxhbkhpc3RvcnksIHNldFVucGxhbkhpc3RvcnldID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcm9sZSwgc2V0Um9sZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3RvcE1lbnUsIHNldFRvcE1lbnVdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2xvYWRpbmdNZW51LCBzZXRMb2FkaW5nTWVudV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW25ld0Fubm91bmNlbWVudCwgc2V0TmV3QW5ub3VuY2VtZW50XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW25vdGlmLCBzZXROb3RpZl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzYWxlc1RhcmdldCwgc2V0U2FsZXNUYXJnZXRdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2FsZXNUYXJnZXQ3NSwgc2V0U2FsZXNUYXJnZXQ3NV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtwcm9kdWt0aWZpdGFzLCBzZXRQcm9kdWt0aWZpdGFzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2Zyb250bGluZXIsIHNldEZyb250bGluZXJdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbTk9PLCBzZXROT09dID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbd29ya0RheSwgc2V0V29ya0RheV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtwZW5kaW5nQXBwcm92ZSwgc2V0UGVuZGluZ0FwcHJvdmVdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZHVtbXksIHNldER1bW15XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbG9hZGluZ0FwcHJvdmUsIHNldExvYWRpbmdBcHByb3ZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3JldmlzZVBsYW4sIHNldFJldmlzZVBsYW5dID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcmV2aXNlVW5QbGFuLCBzZXRSZXZpc2VVblBsYW5dID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcmV2aXNlU3ByZWFkaW5nLCBzZXRSZXZpc2VTcHJlYWRpbmddID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IFtQUCwgc2V0UFBdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGlzTW91bnRlZCA9IHVzZVJlZih0cnVlKTtcblxuICB2YXIgbm93ID0gbmV3IERhdGUoKTtcblxuICBjb25zdCBkYXRhUGxhbiA9IHtcbiAgICBkYXRhc2V0czogW1xuICAgICAge1xuICAgICAgICBkYXRhOlxuICAgICAgICAgIHBsYW5IaXN0b3J5Lmxlbmd0aCA9PT0gMCA/IFswLCAxXSA6IFtwbGFuSGlzdG9yeS5sZW5ndGgsIHBsYW4ubGVuZ3RoXSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXCIjNDE4NjdhXCIsIFwiI2QxZTRlMVwiXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcbiAgY29uc3QgZGF0YVNwcmVhZGluZyA9IHtcbiAgICBkYXRhc2V0czogW1xuICAgICAge1xuICAgICAgICBkYXRhOiBzcHJlYWRpbmdIaXN0b3J5Lmxlbmd0aCA9PT0gMCA/IFswLCAxXSA6IFswLCAxXSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXCIjNDE4NjdhXCIsIFwiI2QxZTRlMVwiXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICBjb25zdCBkYXRhV29ya1Zpc2l0ID0ge1xuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGRhdGE6XG4gICAgICAgICAgd29ya1Zpc2l0SGlzdG9yeS5sZW5ndGggPT09IDBcbiAgICAgICAgICAgID8gWzAsIDFdXG4gICAgICAgICAgICA6IFt3b3JrVmlzaXRIaXN0b3J5Lmxlbmd0aCwgd29ya1Zpc2l0Lmxlbmd0aF0sXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1wiIzQxODY3YVwiLCBcIiNkMWU0ZTFcIl0sXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgY29uc3QgZG9udXRPcHRpb25zID0ge1xuICAgIGN1dG91dFBlcmNlbnRhZ2U6IDc1LFxuICAgIHRvb2x0aXBzOiB7IGVuYWJsZWQ6IGZhbHNlIH0sXG4gICAgaG92ZXI6IHsgbW9kZTogbnVsbCB9LFxuICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogdHJ1ZSxcbiAgfTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGlmIChpc01vdW50ZWQuY3VycmVudCkge1xuICAvLyAgICAgc2V0VG9rZW4oKTtcbiAgLy8gICAgIGFzeW5jIGZ1bmN0aW9uIHNldFRva2VuKCkge1xuICAvLyAgICAgICB0cnkge1xuICAvLyAgICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZmlyZWJhc2VDbG91ZE1lc3NhZ2luZy5pbml0KCk7XG4gIC8vICAgICAgICAgaWYgKHRva2VuKSB7XG4gIC8vICAgICAgICAgICBnZXRNZXNzYWdlKCk7XG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfVxuICAvLyAgICAgZnVuY3Rpb24gZ2V0TWVzc2FnZSgpIHtcbiAgLy8gICAgICAgY29uc3QgbWVzc2FnaW5nID0gZmlyZWJhc2UubWVzc2FnaW5nKCk7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKHsgbWVzc2FnaW5nIH0pO1xuICAvLyAgICAgICBtZXNzYWdpbmcub25NZXNzYWdlKChtZXNzYWdlKSA9PiB7XG4gIC8vICAgICAgICAgc2V0Tm90aWYodHJ1ZSk7XG4gIC8vICAgICAgIH0pO1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gICByZXR1cm4gKCkgPT4ge1xuICAvLyAgICAgaXNNb3VudGVkLmN1cnJlbnQgPSBmYWxzZTtcbiAgLy8gICB9O1xuICAvLyB9LCBbaXNNb3VudGVkXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcbiAgICBpZiAodXNlckRhdGEpIHtcbiAgICAgIHZpZXdQcm9maWxlUGljKHVzZXJEYXRhLnVzZXJuYW1lKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHNldFBQKGRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfVxuICB9LCBbZGlzcGF0Y2hdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xuICAgIGlmICh1c2VyRGF0YSkge1xuICAgICAgLy8gZ2V0QWxsQW5ub3VuY2VtZW50KHVzZXJEYXRhKVxuICAgICAgLy8gICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgLy8gICAgIGNvbnN0IG5ld0Fubm91bmNlbWVudCA9IGRhdGEuZmlsdGVyKCh2YWwpID0+IHtcbiAgICAgIC8vICAgICAgIHJldHVybiB2YWwuaXNSZWFkID09PSBmYWxzZTtcbiAgICAgIC8vICAgICB9KTtcbiAgICAgIC8vICAgICBzZXROZXdBbm5vdW5jZW1lbnQobmV3QW5ub3VuY2VtZW50KTtcbiAgICAgIC8vICAgICBpZiAobmV3QW5ub3VuY2VtZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgIC8vICAgICAgIHNldE5vdGlmKHRydWUpO1xuICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAvLyAgICAgICBzZXROb3RpZihmYWxzZSk7XG4gICAgICAvLyAgICAgfVxuICAgICAgLy8gICB9KVxuICAgICAgLy8gICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAvLyAgIH0pO1xuICAgICAgZ2V0Tm90aWZpY2F0aW9uYnlVc2VybmFtZSh1c2VyRGF0YS51c2VybmFtZSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBzZXROZXdBbm5vdW5jZW1lbnQoZGF0YSk7XG4gICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2V0Tm90aWYodHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldE5vdGlmKGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGdldFdvcmtEYXkoKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHNldFdvcmtEYXkoZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LCBbZGlzcGF0Y2hdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xuICAgIGlmICh1c2VyRGF0YSkge1xuICAgICAgYWN0aW9ucy51c2VyTG9naW4odXNlckRhdGEpO1xuICAgICAgZ2V0TWVudSh1c2VyRGF0YSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBhY3Rpb25zLnNldE1lbnUoZGF0YSk7XG4gICAgICAgICAgc2V0VG9wTWVudShkYXRhKTtcbiAgICAgICAgICBzZXRMb2FkaW5nTWVudShmYWxzZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9XG4gIH0sIFtkaXNwYXRjaF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XG4gICAgdmFyIG1vbnRoID0gbW9tZW50KCkuZm9ybWF0KFwiTVwiKTtcbiAgICB2YXIgeWVhciA9IG1vbWVudCgpLmZvcm1hdChcIllcIik7XG4gICAgaWYgKHVzZXJEYXRhKSB7XG4gICAgICBnZXRBdXRoKHVzZXJEYXRhKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhWzBdLnJvbGVDb2RlID09PSBcIlBJTUNBQlwiKSB7XG4gICAgICAgICAgICBzZXRSb2xlKFwiUElNQ0FCXCIpO1xuICAgICAgICAgICAgc2V0Rm9jdXMoXCJXT1JLLVZJU0lUXCIpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJyb2xlXCIsIFwiUElNQ0FCXCIpO1xuICAgICAgICAgICAgZ2V0U2FsZXNUYXJnZXQ3NVBpbWNhKHVzZXJEYXRhLCBtb250aCwgeWVhcilcbiAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgc2V0U2FsZXNUYXJnZXQ3NShkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICAgICAgICAgIGdldFNhbGVzVGFyZ2V0UGltY2EodXNlckRhdGEsIG1vbnRoLCB5ZWFyKVxuICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICBzZXRTYWxlc1RhcmdldChkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICAgICAgICAgIGdldEZyb250bGluZXJQaW1jYSh1c2VyRGF0YSwgbW9udGgsIHllYXIpXG4gICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgIHNldEZyb250bGluZXIoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhWzBdLnJvbGVDb2RlID09PSBcIlNNUlwiKSB7XG4gICAgICAgICAgICBzZXRSb2xlKFwiU01SXCIpO1xuICAgICAgICAgICAgc2V0Rm9jdXMoXCJQTEFOXCIpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJyb2xlXCIsIFwiU01SXCIpO1xuICAgICAgICAgICAgZ2V0UmV2aXNlUGxhbkxpc3RTbXIodXNlckRhdGEpXG4gICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0UmV2aXNlUGxhbihkYXRhKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJldmlzZSBwbGFuXCIsIGRhdGEpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZ2V0UmV2aXNlVW5QbGFuTGlzdFNtcih1c2VyRGF0YSlcbiAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRSZXZpc2VVblBsYW4oZGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXZpc2UgdW5wbGFuXCIsIGRhdGEpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZ2V0UmV2aXNlU3ByZWFkaW5nTGlzdFNtcih1c2VyRGF0YSlcbiAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRSZXZpc2VTcHJlYWRpbmcoZGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXZpc2Ugc3ByZWFkaW5nXCIsIGRhdGEpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBnZXRTYWxlc1RhcmdldFNNUih1c2VyRGF0YSwgbW9udGgsIHllYXIpXG4gICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgIHNldFNhbGVzVGFyZ2V0KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZ2V0U2FsZXNUYXJnZXQ3NVNNUih1c2VyRGF0YSwgbW9udGgsIHllYXIpXG4gICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgIHNldFNhbGVzVGFyZ2V0NzUoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBnZXRQcm9kdWt0aWZpdGFzKHVzZXJEYXRhLCBtb250aCwgeWVhcilcbiAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgc2V0UHJvZHVrdGlmaXRhcyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGdldEZyb250bGluZXIodXNlckRhdGEsIG1vbnRoLCB5ZWFyKVxuICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICBzZXRGcm9udGxpbmVyKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZ2V0Tm9vKHVzZXJEYXRhLCBtb250aCwgeWVhcilcbiAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgc2V0Tk9PKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xuICAgIH1cbiAgfSwgW2Rpc3BhdGNoXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xuICAgIGlmICh1c2VyRGF0YSkge1xuICAgICAgaWYgKGZvY3VzID09PSBcIlBMQU5cIikge1xuICAgICAgICBnZXRQbGFuTGlzdCh1c2VyRGF0YSlcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgc2V0UGxhbihkYXRhKTtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIGdldFBsYW5IaXN0b3J5KHVzZXJEYXRhKVxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBzZXRQbGFuSGlzdG9yeShkYXRhKTtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGZvY3VzID09PSBcIldPUkstVklTSVRcIikge1xuICAgICAgICBnZXRBbGxXb3JrVmlzaXQodXNlckRhdGEpXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgc2V0V29ya1Zpc2l0KFxuICAgICAgICAgICAgICBkYXRhLmZpbHRlcigodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5pc1BlbmlsYWlhbiA9PT0gZmFsc2U7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc2V0V29ya1Zpc2l0SGlzdG9yeShcbiAgICAgICAgICAgICAgZGF0YS5maWx0ZXIoKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWwuaXNQZW5pbGFpYW4gPT09IHRydWU7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZm9jdXMgPT09IFwiU0FMRVMtVFJBQ0tJTkdcIikge1xuICAgICAgICBnZXRBcHByb3ZhbCh1c2VyRGF0YSlcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdmFyIGRhdGFDaGVja0JveCA9IGRhdGEubWFwKCh2YWwpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHsgLi4udmFsLCBjaGVja0JveDogZmFsc2UgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0UGVuZGluZ0FwcHJvdmUoZGF0YUNoZWNrQm94KTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZm9jdXMgPT09IFwiVU5QTEFOXCIpIHtcbiAgICAgICAgZ2V0VW5wbGFuTW9udGhseUhpc3RvcnkodXNlckRhdGEpXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgc2V0VW5wbGFuSGlzdG9yeShkYXRhKTtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGZvY3VzID09PSBcIlNQUkVBRElOR1wiKSB7XG4gICAgICAgIGdldFNwcmVhZGluZ01vbnRobHlIaXN0b3J5KHVzZXJEYXRhKVxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIHNldFNwcmVhZGluZ0hpc3RvcnkoZGF0YSk7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfVxuICB9LCBbZm9jdXNdKTtcblxuICBjb25zdCByZW5kZXJUb3BNZW51ID0gKCkgPT4ge1xuICAgIHZhciBhdXRoID0gdG9wTWVudS5maWx0ZXIoKHZhbCkgPT4ge1xuICAgICAgaWYgKHJvbGUgPT09IFwiU01SXCIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICB2YWwubW9kdWxlQ29kZSA9PT0gXCJQTEFOXCIgfHxcbiAgICAgICAgICB2YWwubW9kdWxlQ29kZSA9PT0gXCJVTlBMQU5cIiB8fFxuICAgICAgICAgIHZhbC5tb2R1bGVDb2RlID09PSBcIlNQUkVBRElOR1wiXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKHJvbGUgPT09IFwiUElNQ0FCXCIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICB2YWwubW9kdWxlQ29kZSA9PT0gXCJXT1JLLVZJU0lUXCIgfHwgdmFsLm1vZHVsZUNvZGUgPT09IFwiU0FMRVMtVFJBQ0tJTkdcIlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIGF1dGgubWFwKCh2YWwsIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgZm9jdXMgPT09IHZhbC5tb2R1bGVDb2RlID8gc3R5bGVzLmZvY3VzX21lbnUgOiBzdHlsZXMubWVudVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRGb2N1cyh2YWwubW9kdWxlQ29kZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dmFsLm1vZHVsZUNvZGUgPT09IFwiUExBTlwiXG4gICAgICAgICAgICAgID8gXCJQbGFuXCJcbiAgICAgICAgICAgICAgOiB2YWwubW9kdWxlQ29kZSA9PT0gXCJVTlBMQU5cIlxuICAgICAgICAgICAgICA/IFwiVW5wbGFuXCJcbiAgICAgICAgICAgICAgOiB2YWwubW9kdWxlQ29kZSA9PT0gXCJTUFJFQURJTkdcIlxuICAgICAgICAgICAgICA/IFwiU3ByZWFkaW5nXCJcbiAgICAgICAgICAgICAgOiB2YWwubW9kdWxlQ29kZSA9PT0gXCJXT1JLLVZJU0lUXCJcbiAgICAgICAgICAgICAgPyBcIldvcmsgVmlzaXRcIlxuICAgICAgICAgICAgICA6IHZhbC5tb2R1bGVDb2RlID09PSBcIlNBTEVTLVRSQUNLSU5HXCJcbiAgICAgICAgICAgICAgPyBcIkFwcHJvdmFsXCJcbiAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBpZiAoYXV0aCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICBhdXRoLmxlbmd0aCA9PT0gM1xuICAgICAgICAgICAgICA/IHN0eWxlcy5tZW51X2dyaWQzXG4gICAgICAgICAgICAgIDogYXV0aC5sZW5ndGggPT09IDJcbiAgICAgICAgICAgICAgPyBzdHlsZXMubWVudV9ncmlkMVxuICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICB7cmVuZGVyKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyTGlzdCA9ICh0eXBlLCBkYXRhKSA9PiB7XG4gICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjE1cHhcIixcbiAgICAgICAgICAgIGNvbG9yOiBcInJnYigyMDgsIDIwOCwgMjA4KVwiLFxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICAgIG1hcmdpbjogXCIzMHB4IDBcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgTm8gSXRlbVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkYXRhLm1hcCgodmFsLCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBocmVmPXtmb2N1cyA9PT0gXCJQTEFOXCIgPyBgL3Zpc2l0L3BsYW4vJHtkYXRhLmlkTWFzdGVyUGxhbn1gIDogXCIvXCJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI3MDBcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1RTU4NzNcIixcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTBweCAwXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMTIlIDg4JVwiIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdHlwZSA9PT0gXCJQTEFOXCIgPyBcIiNGRkYxQ0NcIiA6IFwiI2QxZTRlMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI0cHhcIixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlID09PSBcIlBMQU5cIiA/IFwiI2ZlYjgwMFwiIDogXCIjNDE4NjdhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e3ZhbC5uYW1hT3V0bGV0fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjE0cHhcIiwgZm9udFdlaWdodDogXCIzMDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICB7dmFsLmFsYW1hdE91dGxldH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlckxpc3RXb3JrVmlzaXQgPSAoZGF0YSkgPT4ge1xuICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBmb250U2l6ZTogXCIxNXB4XCIsXG4gICAgICAgICAgICBjb2xvcjogXCJyZ2IoMjA4LCAyMDgsIDIwOClcIixcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICBtYXJnaW46IFwiMzBweCAwXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIE5vIEl0ZW1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZGF0YS5tYXAoKHZhbCwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TGluayBocmVmPXtgd29yay12aXNpdC8ke3ZhbC5pZE1hc3RlclBsYW59YH0+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjcwMFwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzVFNTg3M1wiLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxMHB4IDBcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxMiUgODglXCIgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRkYxQ0NcIixcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmViODAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e3ZhbC5uYW1hU01SfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjE0cHhcIiwgZm9udFdlaWdodDogXCIzMDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICBSYXlvbiAtIHt2YWwucmF5b259XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjE0cHhcIiwgZm9udFdlaWdodDogXCIzMDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICBQcm9kdWsgRm9jdXMgLSB7dmFsLnByb2R1a0Zva3VzfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyUGxhbiA9ICgpID0+IHtcbiAgICBpZiAobG9hZGluZykge1xuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI1cHhcIiwgbWFyZ2luVG9wOiBcIjIycHhcIiB9fSBzaGFkb3c+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm92ZXJ2aWV3fT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfT5cbiAgICAgICAgICAgICAgICAgIHttb21lbnQoKS5mb3JtYXQoXCJEIC8gTU1NIC8gWVlZWVwiKX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogXCIjNUU1ODczXCIsIG1hcmdpblRvcDogXCI3cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjM2cHhcIiwgZm9udFdlaWdodDogXCI2MDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAge3BsYW5IaXN0b3J5Lmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE4cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgL3twbGFuLmxlbmd0aCArIHBsYW5IaXN0b3J5Lmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21hc3Rlci1wbGFuLXZpc2l0XCI+XG4gICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiN3B4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZFQjgwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4IDIycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBBZGQgTmV3IFBsYW4gK1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGllX3BlcmNlbnRhZ2V9PlxuICAgICAgICAgICAgICAgICAge3BsYW5IaXN0b3J5Lmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgICAgICA/IFwiMCVcIlxuICAgICAgICAgICAgICAgICAgICA6IGAke01hdGgucm91bmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAocGxhbkhpc3RvcnkubGVuZ3RoIC9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKHBsYW4ubGVuZ3RoICsgcGxhbkhpc3RvcnkubGVuZ3RoKSkgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAxMDBcbiAgICAgICAgICAgICAgICAgICAgICApfSVgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxEb3VnaG51dFxuICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YVBsYW59XG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtkb251dE9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIycHhcIiwgYm9yZGVyUmFkaXVzOiBcIjMwcHhcIiB9fSBzaGFkb3c+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsYW5fY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxOHB4XCIsXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzVFNTg3M1wiLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgWW91ciBQbGFuIFRvZGF5XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIyMnB4IDBcIiB9fT57cmVuZGVyTGlzdChcIlBMQU5cIiwgcGxhbil9PC9kaXY+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdmlzaXQvcGxhblwiPlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PXtcIlNlZSBEZXRhaWxzXCJ9IC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvPlxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyU3ByZWFkaW5nID0gKCkgPT4ge1xuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICByZXR1cm4gPFNwaW5uZXIgLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPENhcmQgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBtYXJnaW5Ub3A6IFwiMjJweFwiIH19IHNoYWRvdz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcnZpZXd9PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9PlxuICAgICAgICAgICAgICAgICAge21vbWVudCgpLmZvcm1hdChcIkQgLyBNTU0gLyBZWVlZXCIpfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcIiM1RTU4NzNcIiwgbWFyZ2luVG9wOiBcIjdweFwiIH19PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMzZweFwiLCBmb250V2VpZ2h0OiBcIjYwMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICB7c3ByZWFkaW5nSGlzdG9yeS5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIxOHB4XCIgfX0+L3twbGFuLmxlbmd0aH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvdmlzaXQvc3ByZWFkaW5nL1wifT5cbiAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI3cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkVCODAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHggMjJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI0MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIEFkZCBOZXcgTk9PICtcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBpZV9wZXJjZW50YWdlfT4wJTwvZGl2PlxuICAgICAgICAgICAgICAgIDxEb3VnaG51dFxuICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YVNwcmVhZGluZ31cbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2RvbnV0T3B0aW9uc31cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjJweFwiLCBib3JkZXJSYWRpdXM6IFwiMzBweFwiIH19IHNoYWRvdz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxhbl9jb250YWluZXJ9PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNUU1ODczXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTcHJlYWRpbmcgSGlzdG9yeVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMjJweCAwXCIgfX0+XG4gICAgICAgICAgICAgICAge3JlbmRlckxpc3QoXCJTUFJFQURJTkdcIiwgc3ByZWFkaW5nSGlzdG9yeSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Zpc2l0L3NwcmVhZGluZy9oaXN0b3J5XCI+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9e1wiU2VlIERldGFpbHNcIn0gLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXJVbnBsYW4gPSAoKSA9PiB7XG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIG1hcmdpblRvcDogXCIyMnB4XCIgfX0gc2hhZG93PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51bnBsYW5fZ3JpZH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubnVtX3RvdGFsX3VucGxhbn0+XG4gICAgICAgICAgICAgICAge3VucGxhbkhpc3RvcnkubGVuZ3RofVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIxNHB4XCIgfX0+VG90YWwgVW5wbGFuIFZpc2l0PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+e21vbWVudCgpLmZvcm1hdChcIk1NTU1cIil9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPENhcmQgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBtYXJnaW5Ub3A6IFwiMTFweFwiIH19IHNoYWRvdz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdmlzaXQvdW5wbGFuXCI+XG4gICAgICAgICAgICAgIDxhIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVucGxhbl9ncmlkMn0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZF91bnBsYW59PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCItOHB4XCIgfX0+KzwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjE2cHhcIiwgZm9udFdlaWdodDogXCI2MDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgQW55IFVucGxhbiBWaXNpdD9cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjQjlCOUMzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjMwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTNweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBBZGQgeW91ciB1bnBsYW4gdmlzaXQgaGVyZVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17XCIvbmV4dC5zdmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9DYXJkPlxuXG4gICAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIycHhcIiwgYm9yZGVyUmFkaXVzOiBcIjMwcHhcIiB9fSBzaGFkb3c+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsYW5fY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxOHB4XCIsXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzVFNTg3M1wiLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVW5wbGFuIFZpc2l0IEhpc3RvcnlcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjIycHggMFwiIH19PlxuICAgICAgICAgICAgICAgIHtyZW5kZXJMaXN0KFwiVU5QTEFOXCIsIHVucGxhbkhpc3RvcnkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi92aXNpdC91bnBsYW4vaGlzdG9yeVwiPlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PXtcIlNlZSBEZXRhaWxzXCJ9IC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvPlxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyV29ya1Zpc2l0ID0gKCkgPT4ge1xuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICByZXR1cm4gPFNwaW5uZXIgLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPENhcmQgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBtYXJnaW5Ub3A6IFwiMjJweFwiIH19IHNoYWRvdz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcnZpZXd9PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9PlxuICAgICAgICAgICAgICAgICAge21vbWVudCgpLmZvcm1hdChcIkQgLyBNTU0gLyBZWVlZXCIpfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcIiM1RTU4NzNcIiwgbWFyZ2luVG9wOiBcIjdweFwiIH19PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMzZweFwiLCBmb250V2VpZ2h0OiBcIjYwMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICB7d29ya1Zpc2l0SGlzdG9yeS5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIxOHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIC97d29ya1Zpc2l0Lmxlbmd0aCArIHdvcmtWaXNpdEhpc3RvcnkubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbWFzdGVyLXdvcmstdmlzaXRcIj5cbiAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI3cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkVCODAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHggMjJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI0MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIEFkZCBOZXcgK1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGllX3BlcmNlbnRhZ2V9PlxuICAgICAgICAgICAgICAgICAge3dvcmtWaXNpdEhpc3RvcnkubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgICAgID8gXCIwJVwiXG4gICAgICAgICAgICAgICAgICAgIDogYCR7TWF0aC5yb3VuZChcbiAgICAgICAgICAgICAgICAgICAgICAgICh3b3JrVmlzaXRIaXN0b3J5Lmxlbmd0aCAvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICh3b3JrVmlzaXQubGVuZ3RoICsgd29ya1Zpc2l0SGlzdG9yeS5sZW5ndGgpKSAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDEwMFxuICAgICAgICAgICAgICAgICAgICAgICl9JWB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPERvdWdobnV0XG4gICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhV29ya1Zpc2l0fVxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZG9udXRPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MTAwfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMnB4XCIsIGJvcmRlclJhZGl1czogXCIzMHB4XCIgfX0gc2hhZG93PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGFuX2NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1RTU4NzNcIixcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFlvdXIgV29yayBWaXNpdCBUb2RheVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMjJweCAwXCIgfX0+XG4gICAgICAgICAgICAgICAge3JlbmRlckxpc3RXb3JrVmlzaXQod29ya1Zpc2l0KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvd29yay12aXNpdFwiPlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PXtcIlNlZSBEZXRhaWxzXCJ9IC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvPlxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb25BcHByb3ZlID0gKCkgPT4ge1xuICAgIHZhciBjaGVja1BlbmRpbmcgPSBwZW5kaW5nQXBwcm92ZS5maWx0ZXIoKHZhbCkgPT4ge1xuICAgICAgcmV0dXJuIHZhbC5jaGVja0JveDtcbiAgICB9KTtcbiAgICBpZiAoY2hlY2tQZW5kaW5nLmxlbmd0aCkge1xuICAgICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XG4gICAgICBpZiAodXNlckRhdGEpIHtcbiAgICAgICAgc2V0TG9hZGluZ0FwcHJvdmUodHJ1ZSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hlY2tQZW5kaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgbW9kdWxlID1cbiAgICAgICAgICAgIGNoZWNrUGVuZGluZ1tpXS5tb2R1bCA9PT0gXCJQbGFuXCJcbiAgICAgICAgICAgICAgPyBcIlZJU0lUUExBTlwiXG4gICAgICAgICAgICAgIDogY2hlY2tQZW5kaW5nW2ldLm1vZHVsID09PSBcIlVuUGxhblwiXG4gICAgICAgICAgICAgID8gXCJWSVNJVFVOUExBTlwiXG4gICAgICAgICAgICAgIDogY2hlY2tQZW5kaW5nW2ldLm1vZHVsID09PSBcIlNwcmVhZGluZ1wiXG4gICAgICAgICAgICAgID8gXCJTUFJFQURJTkdcIlxuICAgICAgICAgICAgICA6IFwiXCI7XG5cbiAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgYXBwcm92YWxUcmFuc2FjdGlvbkRhdGFNb2RlbDogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3lzdGVtQ29kZTogXCJTQUtBTU9SXCIsXG4gICAgICAgICAgICAgICAgbW9kdWxlQ29kZTogbW9kdWxlLFxuICAgICAgICAgICAgICAgIGFwcHJvdmFsTGV2ZWw6IDEsXG4gICAgICAgICAgICAgICAgaWQ6IGNoZWNrUGVuZGluZ1tpXS5pZCxcbiAgICAgICAgICAgICAgICBhcHByb3ZhbElEOlxuICAgICAgICAgICAgICAgICAgY2hlY2tQZW5kaW5nW2ldLm1vZHVsID09PSBcIlBsYW5cIlxuICAgICAgICAgICAgICAgICAgICA/IDM1MlxuICAgICAgICAgICAgICAgICAgICA6IGNoZWNrUGVuZGluZ1tpXS5tb2R1bCA9PT0gXCJVblBsYW5cIlxuICAgICAgICAgICAgICAgICAgICA/IDM1OFxuICAgICAgICAgICAgICAgICAgICA6IGNoZWNrUGVuZGluZ1tpXS5tb2R1bCA9PT0gXCJTcHJlYWRpbmdcIlxuICAgICAgICAgICAgICAgICAgICA/IDM1OVxuICAgICAgICAgICAgICAgICAgICA6IFwiXCIsXG4gICAgICAgICAgICAgICAgZG9jTm86IGNoZWNrUGVuZGluZ1tpXS5ub21vckRva3VtZW4sXG4gICAgICAgICAgICAgICAgcGljOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIGFwcHJvdmFsTGluZTogMCxcbiAgICAgICAgICAgICAgICBub3RlczogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBuZWVkQXBwcm92ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhcHByb3ZlRGF0ZTogbm93LnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN5c3RlbUNvZGU6IFwiU0FLQU1PUlwiLFxuICAgICAgICAgICAgbW9kdWxlQ29kZTogbW9kdWxlLFxuICAgICAgICAgICAgZG9jTm86IGNoZWNrUGVuZGluZ1tpXS5ub21vckRva3VtZW4sXG4gICAgICAgICAgICBhcHByb3ZlckZyb206IFwic3RyaW5nXCIsXG4gICAgICAgICAgICBhcHByb3ZlclRvOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgc3RhdHVzOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwic3RyaW5nXCIsXG4gICAgICAgICAgICBub3RlczogXCJzdHJpbmdcIixcbiAgICAgICAgICAgIGNyZWF0ZWRCeTogdXNlckRhdGEudXNlcm5hbWUsXG4gICAgICAgICAgICBjcmVhdGVkRGF0ZTogbm93LnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICBlbWFpbERhdGE6IHtcbiAgICAgICAgICAgICAgc3lzdGVtQ29kZTogXCJTQUtBTU9SXCIsXG4gICAgICAgICAgICAgIG1vZHVsZUNvZGU6IG1vZHVsZSxcbiAgICAgICAgICAgICAgZG9jdW1lbnROdW1iZXI6IGNoZWNrUGVuZGluZ1tpXS5ub21vckRva3VtZW4sXG4gICAgICAgICAgICAgIGVtYWlsVG86IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgIGVtYWlsQ0M6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgIGVtYWlsQkNDOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICBlbWFpbFN1YmplY3Q6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgIGVtYWlsQm9keTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfTtcbiAgICAgICAgICBhcHByb3ZhbEFwcHJvdmUoXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgY2hlY2tQZW5kaW5nW2ldLm1vZHVsLFxuICAgICAgICAgICAgY2hlY2tQZW5kaW5nW2ldLmlkLFxuICAgICAgICAgICAgdXNlckRhdGFcbiAgICAgICAgICApXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoaSA9PT0gY2hlY2tQZW5kaW5nLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nQXBwcm92ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgZ2V0QXBwcm92YWwodXNlckRhdGEpXG4gICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YUNoZWNrQm94ID0gZGF0YS5tYXAoKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnZhbCwgY2hlY2tCb3g6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzZXRQZW5kaW5nQXBwcm92ZShkYXRhQ2hlY2tCb3gpO1xuICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyQXBwcm92YWwgPSAoKSA9PiB7XG4gICAgdmFyIGNoZWNrUGVuZGluZyA9IHBlbmRpbmdBcHByb3ZlLmZpbHRlcigodmFsKSA9PiB7XG4gICAgICByZXR1cm4gdmFsLmNoZWNrQm94O1xuICAgIH0pO1xuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICByZXR1cm4gPFNwaW5uZXIgLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIycHhcIiwgYm9yZGVyUmFkaXVzOiBcIjMwcHhcIiB9fSBzaGFkb3c+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsYW5fY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxOHB4XCIsXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzVFNTg3M1wiLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUGVuZGluZyBBcHByb3ZhbFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjIycHggMFwiIH19PlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMTAlIDkwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiMTBweFwiLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdUb3A6IFwiMTBweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxDaGVja0JveFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tQZW5kaW5nLmxlbmd0aCA9PT0gcGVuZGluZ0FwcHJvdmUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFsbCA9IHBlbmRpbmdBcHByb3ZlLm1hcCgodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyAuLi52YWwsIGNoZWNrQm94OiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBlbmRpbmdBcHByb3ZlKGFsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFsbCA9IHBlbmRpbmdBcHByb3ZlLm1hcCgodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyAuLi52YWwsIGNoZWNrQm94OiB0cnVlIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGVuZGluZ0FwcHJvdmUoYWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja1BlbmRpbmcubGVuZ3RoID09PSBwZW5kaW5nQXBwcm92ZS5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkFwcHJvdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtjaGVja1BlbmRpbmcubGVuZ3RoID8gXCJncmVlblwiIDogXCJkaXNhYmxlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dD17XCJBcHByb3ZlXCJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIHtwZW5kaW5nQXBwcm92ZS5tYXAoKHZhbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxMCUgOTAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjhweCAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrQm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt2YWwuY2hlY2tCb3h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlbmRpbmdBcHByb3ZlLnNwbGljZShpbmRleCwgMSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnBlbmRpbmdBcHByb3ZlW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja0JveDogIXZhbC5jaGVja0JveCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldER1bW15KGR1bW15ICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnMuc2V0Rm9jdXNBcHByb3ZhbCh2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9hcHByb3ZhbC8ke3ZhbC5tb2R1bH0vJHt2YWwuaWR9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNzAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjJmciAxZnJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57dmFsLnVzZXJuYW1lU01SfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmViODAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjFweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsLm1vZHVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI3MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsLm5hbWFPdXRsZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIxMnB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsLmFsYW1hdE91dGxldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXJXb3JrRGF5ID0gKCkgPT4ge1xuICAgIGlmICh3b3JrRGF5Lmxlbmd0aCAhPT0gMCAmJiAhbG9hZGluZyAmJiAhbG9hZGluZ01lbnUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMnB4XCIsIGJvcmRlclJhZGl1czogXCI2cHhcIiB9fSBzaGFkb3c+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGFuX2NvbnRhaW5lcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX3RpdGxlfT5cbiAgICAgICAgICAgICAgV29ya2luZyBEYXkge21vbWVudCgpLmZvcm1hdChcIk1NTU0gWVlZWVwiKX1cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250V2VpZ2h0OiBcIjcwMFwiIH19PlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiNGRUI4MDBcIiB9fT57d29ya0RheS5oYXJpS2VyamF9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEycHhcIiwgZm9udFdlaWdodDogXCI0MDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgIHtcIiAvIFwifVxuICAgICAgICAgICAgICAgICAge3dvcmtEYXkudG90YWxIYXJpS2VyamF9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICApO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcmVuZGVyUHJvZ3Jlc3MgPSAoKSA9PiB7XG4gICAgY29uc3QgcmVuZGVyU2FsZXMgPSAodGl0bGUsIGRhdGEpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxZnIgMmZyXCIgfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX3RpdGxlfT57dGl0bGV9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX251bWJlcn0+XG4gICAgICAgICAgICAgIHtkYXRhLnNhbGVzLnRvTG9jYWxlU3RyaW5nKFwiaWQtSURcIil9XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEycHhcIiwgZm9udFdlaWdodDogXCI0MDBcIiB9fT5cbiAgICAgICAgICAgICAgICB7XCIgLyBcIn1cbiAgICAgICAgICAgICAgICB7ZGF0YS50YXJnZXQudG9Mb2NhbGVTdHJpbmcoXCJpZC1JRFwiKX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMTNweCAwIDAgMFwiIH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJ9PjwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJfbm93fVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiBgJHsoZGF0YS5zYWxlcyAvIGRhdGEudGFyZ2V0KSAqIDEwMH0lYCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH07XG4gICAgaWYgKCFsb2FkaW5nICYmICFsb2FkaW5nTWVudSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIycHhcIiwgYm9yZGVyUmFkaXVzOiBcIjZweFwiIH19IHNoYWRvdz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsYW5fY29udGFpbmVyfT5cbiAgICAgICAgICAgIHtzYWxlc1RhcmdldC5sZW5ndGggIT09IDAgPyByZW5kZXJTYWxlcyhcIlNhbGVzXCIsIHNhbGVzVGFyZ2V0KSA6IFwiXCJ9XG4gICAgICAgICAgICB7c2FsZXNUYXJnZXQ3NS5sZW5ndGggIT09IDBcbiAgICAgICAgICAgICAgPyByZW5kZXJTYWxlcyhcIlNhbGVzIDc1JVwiLCBzYWxlc1RhcmdldDc1KVxuICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICB7Tk9PLmxlbmd0aCAhPT0gMCA/IHJlbmRlclNhbGVzKFwiU2FsZXMgTk9PXCIsIE5PTykgOiBcIlwifVxuICAgICAgICAgICAge2Zyb250bGluZXIubGVuZ3RoICE9PSAwID8gKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjFmciAxZnJcIiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfdGl0bGV9PkZyb250bGluZXI8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfbnVtYmVyfT5cbiAgICAgICAgICAgICAgICAgICAge3JvbGUgPT09IFwiU01SXCIgPyBmcm9udGxpbmVyLmFjaCA6IGZyb250bGluZXIudGFyZ2V0fVxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIxMnB4XCIsIGZvbnRXZWlnaHQ6IFwiNDAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAge1wiIC8gXCJ9XG4gICAgICAgICAgICAgICAgICAgICAge2Zyb250bGluZXIudGFyZ2V0fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxM3B4IDAgMCAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcn0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcl9ub3d9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGAkeyhmcm9udGxpbmVyLmFjaCAvIGZyb250bGluZXIudGFyZ2V0KSAqIDEwMH0lYCxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3Byb2R1a3RpZml0YXMubGVuZ3RoICE9PSAwID8gKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjFmciAxZnJcIiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfdGl0bGV9PlByb2R1a3RpZml0YXM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfbnVtYmVyfT5cbiAgICAgICAgICAgICAgICAgICAge3Byb2R1a3RpZml0YXMuYWNoaWV2ZW1lbnR9XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEycHhcIiwgZm9udFdlaWdodDogXCI0MDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICB7XCIgLyBcIn1cbiAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVrdGlmaXRhcy50YXJnZXR9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjEzcHggMCAwIDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfYmFyfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfYmFyX25vd31cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYCR7XG4gICAgICAgICAgICAgICAgICAgICAgICAocHJvZHVrdGlmaXRhcy5hY2hpZXZlbWVudCAvIHByb2R1a3RpZml0YXMudGFyZ2V0KSAqIDEwMFxuICAgICAgICAgICAgICAgICAgICAgIH0lYCxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXJSZXZpc2VMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlbmRlckxpc3QgPSAoZGF0YSwgbW9kdWwpID0+IHtcbiAgICAgIHZhciByZW5kZXIgPSBkYXRhLm1hcCgodmFsKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgICAgICAgICAgICBtYXJnaW46IFwiOHB4IDBcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbCk7XG4gICAgICAgICAgICAgIGFjdGlvbnMuc2V0Rm9jdXNBcHByb3ZhbCh2YWwpO1xuICAgICAgICAgICAgICBpZiAobW9kdWwgPT09IFwiUGxhblwiKSB7XG4gICAgICAgICAgICAgICAgZ2V0VmlzaXRQbGFuUHJvZHVjdCh2YWwuaWRWaXNpdFBsYW4pXG4gICAgICAgICAgICAgICAgICAudGhlbigoZGF0YUludm9pY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5zZXRSZXZpc2VBdmFiaWxpdHkoZGF0YUludm9pY2UpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhSW52b2ljZSk7XG4gICAgICAgICAgICAgICAgICAgIGdldEludm9pY2VEYXRhUG9zbSh2YWwuaWRWaXNpdFBsYW4pXG4gICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGFQb3NtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnNldFJldmlzZVZpc2liaWxpdHkoZGF0YVBvc20pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9yZXZpc2UvJHttb2R1bH0vJHt2YWwuaWRWaXNpdFBsYW59YCk7XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kdWwgPT09IFwiVW5QbGFuXCIpIHtcbiAgICAgICAgICAgICAgICBnZXRVblBsYW5Qcm9kdWN0cyh2YWwuaWQpXG4gICAgICAgICAgICAgICAgICAudGhlbigoZGF0YUludm9pY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YUludm9pY2UpO1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnNldFJldmlzZUF2YWJpbGl0eShkYXRhSW52b2ljZSk7XG4gICAgICAgICAgICAgICAgICAgIGdldEludm9pY2VEYXRhUG9zbVVucGxhbih2YWwuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGFQb3NtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnNldFJldmlzZVZpc2liaWxpdHkoZGF0YVBvc20pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YVBvc20pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9yZXZpc2UvJHttb2R1bH0vJHt2YWwuaWR9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kdWwgPT09IFwiU3ByZWFkaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBnZXRTcHJlYWRpbmdQcm9kdWN0KHZhbC5pZClcbiAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRhSW52b2ljZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhSW52b2ljZSk7XG4gICAgICAgICAgICAgICAgICAgIGdldEludm9pY2VEYXRhUG9zbVNwcmVhZGluZyh2YWwuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGFQb3NtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnNldFJldmlzZVZpc2liaWxpdHkoZGF0YVBvc20pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YVBvc20pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9yZXZpc2UvJHttb2R1bH0vJHt2YWwuaWR9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gcm91dGVyLnB1c2goYC9yZXZpc2UvJHttb2R1bH0vJHt2YWwuaWR9YCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI3MDBcIixcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXG4gICAgICAgICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMmZyIDFmclwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2Pnt2YWwudXNlcm5hbWVTTVJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZWI4MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMXB4XCIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHttb2R1bH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNzAwXCIsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3ZhbC5uYW1hT3V0bGV0fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMTJweFwiIH19Pnt2YWwuYWxhbWF0T3V0bGV0fTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVuZGVyO1xuICAgIH07XG4gICAgaWYgKHJldmlzZVBsYW4ubGVuZ3RoIHx8IHJldmlzZVVuUGxhbi5sZW5ndGggfHwgcmV2aXNlU3ByZWFkaW5nLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPENhcmRcbiAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIG1hcmdpblRvcDogXCIyMnB4XCIsIGNvbG9yOiBcIiM1RTU4NzNcIiB9fVxuICAgICAgICAgIHNoYWRvd1xuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGFuX2NvbnRhaW5lcn0+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiIzVFNTg3M1wiLFxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXY+UmV2aXNlIFZpc2l0IDwvZGl2PlxuICAgICAgICAgICAgICB7cmVuZGVyTGlzdChyZXZpc2VQbGFuLCBcIlBsYW5cIil9XG4gICAgICAgICAgICAgIHtyZW5kZXJMaXN0KHJldmlzZVVuUGxhbiwgXCJVblBsYW5cIil9XG4gICAgICAgICAgICAgIHtyZW5kZXJMaXN0KHJldmlzZVNwcmVhZGluZywgXCJTcHJlYWRpbmdcIil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0R3JlZXRpbmdUaW1lID0gKG0pID0+IHtcbiAgICB2YXIgZyA9IG51bGw7IC8vcmV0dXJuIGdcblxuICAgIGlmICghbSB8fCAhbS5pc1ZhbGlkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vaWYgd2UgY2FuJ3QgZmluZCBhIHZhbGlkIG9yIGZpbGxlZCBtb21lbnQsIHdlIHJldHVybi5cblxuICAgIHZhciBzcGxpdF9hZnRlcm5vb24gPSAxMjsgLy8yNGhyIHRpbWUgdG8gc3BsaXQgdGhlIGFmdGVybm9vblxuICAgIHZhciBzcGxpdF9ldmVuaW5nID0gMTc7IC8vMjRociB0aW1lIHRvIHNwbGl0IHRoZSBldmVuaW5nXG4gICAgdmFyIGN1cnJlbnRIb3VyID0gcGFyc2VGbG9hdChtLmZvcm1hdChcIkhIXCIpKTtcblxuICAgIGlmIChjdXJyZW50SG91ciA+PSBzcGxpdF9hZnRlcm5vb24gJiYgY3VycmVudEhvdXIgPD0gc3BsaXRfZXZlbmluZykge1xuICAgICAgZyA9IFwiQWZ0ZXJub29uLFwiO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudEhvdXIgPj0gc3BsaXRfZXZlbmluZykge1xuICAgICAgZyA9IFwiRXZlbmluZyxcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZyA9IFwiTW9ybmluZyxcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gZztcbiAgfTtcblxuICBjb25zdCByZW5kZXJQYWdlID0gKCkgPT4ge1xuICAgIGlmIChsb2FkaW5nICYmIGxvYWRpbmdNZW51KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgICAgPEJvdE5hdiAvPlxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+SG9tZTwvdGl0bGU+XG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmdfdG9wfSAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfaW5mb19ncmlkfT5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcH1cbiAgICAgICAgICAgICAgICAgIHNyYz17UFAgPyBQUCA6IFwiL3Byb2ZpbGUtbmF2MS5zdmdcIn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIxNXB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjE0cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAge2dldEdyZWV0aW5nVGltZShtb21lbnQoKSl9IHtzdGF0ZS51c2VyUmVkdWNlci51c2VyLm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMTJweFwiIH19Pntyb2xlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9ub3RpZmljYXRpb25cIn0+XG4gICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLm5vdGlmfSBzcmM9XCIvbm90aWYuc3ZnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7bm90aWYgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiIHJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIi0zMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IFwiLTE0cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMThweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmViODAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmV3QW5ub3VuY2VtZW50Lmxlbmd0aCA8IDlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBuZXdBbm5vdW5jZW1lbnQubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCI5K1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICAgICAgICAgIHtyZW5kZXJUb3BNZW51KCl9XG4gICAgICAgICAgICAgICAgICB7Zm9jdXMgPT09IFwiUExBTlwiXG4gICAgICAgICAgICAgICAgICAgID8gcmVuZGVyUGxhbigpXG4gICAgICAgICAgICAgICAgICAgIDogZm9jdXMgPT09IFwiVU5QTEFOXCJcbiAgICAgICAgICAgICAgICAgICAgPyByZW5kZXJVbnBsYW4oKVxuICAgICAgICAgICAgICAgICAgICA6IGZvY3VzID09PSBcIlNQUkVBRElOR1wiXG4gICAgICAgICAgICAgICAgICAgID8gcmVuZGVyU3ByZWFkaW5nKClcbiAgICAgICAgICAgICAgICAgICAgOiBmb2N1cyA9PT0gXCJXT1JLLVZJU0lUXCJcbiAgICAgICAgICAgICAgICAgICAgPyByZW5kZXJXb3JrVmlzaXQoKVxuICAgICAgICAgICAgICAgICAgICA6IGZvY3VzID09PSBcIlNBTEVTLVRSQUNLSU5HXCJcbiAgICAgICAgICAgICAgICAgICAgPyByZW5kZXJBcHByb3ZhbCgpXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgIHtyZW5kZXJSZXZpc2VMaXN0KCl9XG4gICAgICAgICAgICAgICAgICB7cmVuZGVyV29ya0RheSgpfVxuICAgICAgICAgICAgICAgICAge3JlbmRlclByb2dyZXNzKCl9XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMjBweFwiIH19IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEJvdE5hdiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gcmVuZGVyUGFnZSgpO1xufVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibmF2X2NvbnRhaW5lclwiOiBcIkJvdE5hdl9uYXZfY29udGFpbmVyX18xa1FiNVwiLFxuXHRcIm5hdl9ib3hcIjogXCJCb3ROYXZfbmF2X2JveF9fMVNQeVZcIixcblx0XCJuYXZfaW1nXCI6IFwiQm90TmF2X25hdl9pbWdfXzNQVDlVXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJDaGVja2JveF9jb250YWluZXJfXzF0TWZGXCIsXG5cdFwiY2hlY2ttYXJrX2dyZWVuXCI6IFwiQ2hlY2tib3hfY2hlY2ttYXJrX2dyZWVuX18xcU5SS1wiLFxuXHRcImNoZWNrbWFya195ZWxsb3dcIjogXCJDaGVja2JveF9jaGVja21hcmtfeWVsbG93X19rWTV6ZVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfXzNRa2xUXCIsXG5cdFwid3JhcHBlclwiOiBcIkhvbWVfd3JhcHBlcl9fM0d2MXZcIixcblx0XCJiZ190b3BcIjogXCJIb21lX2JnX3RvcF9fVFR6clVcIixcblx0XCJ1c2VyX2luZm9fZ3JpZFwiOiBcIkhvbWVfdXNlcl9pbmZvX2dyaWRfX2laT255XCIsXG5cdFwicHBcIjogXCJIb21lX3BwX18yWF92SlwiLFxuXHRcIm5vdGlmXCI6IFwiSG9tZV9ub3RpZl9fMnhET0hcIixcblx0XCJtZW51X2dyaWQzXCI6IFwiSG9tZV9tZW51X2dyaWQzX18zY2UxU1wiLFxuXHRcIm1lbnVfZ3JpZDFcIjogXCJIb21lX21lbnVfZ3JpZDFfXzFjc0FEXCIsXG5cdFwiZm9jdXNfbWVudVwiOiBcIkhvbWVfZm9jdXNfbWVudV9fMVliR0ZcIixcblx0XCJtZW51XCI6IFwiSG9tZV9tZW51X18zN28yWVwiLFxuXHRcIm92ZXJ2aWV3XCI6IFwiSG9tZV9vdmVydmlld19fMjV0Q2NcIixcblx0XCJkYXRlXCI6IFwiSG9tZV9kYXRlX18xNG9pMVwiLFxuXHRcInBsYW5fY29udGFpbmVyXCI6IFwiSG9tZV9wbGFuX2NvbnRhaW5lcl9fMzg2Y3BcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX18yQXFDS1wiLFxuXHRcInVucGxhbl9ncmlkXCI6IFwiSG9tZV91bnBsYW5fZ3JpZF9fM3hxYWdcIixcblx0XCJ1bnBsYW5fZ3JpZDJcIjogXCJIb21lX3VucGxhbl9ncmlkMl9fMXBHVTNcIixcblx0XCJudW1fdG90YWxfdW5wbGFuXCI6IFwiSG9tZV9udW1fdG90YWxfdW5wbGFuX18zbzZLUFwiLFxuXHRcImFkZF91bnBsYW5cIjogXCJIb21lX2FkZF91bnBsYW5fXzNOeU93XCIsXG5cdFwicGllX3BlcmNlbnRhZ2VcIjogXCJIb21lX3BpZV9wZXJjZW50YWdlX18zNmEyZVwiLFxuXHRcInByb2dyZXNzX3RpdGxlXCI6IFwiSG9tZV9wcm9ncmVzc190aXRsZV9fMlJUWU9cIixcblx0XCJwcm9ncmVzc19udW1iZXJcIjogXCJIb21lX3Byb2dyZXNzX251bWJlcl9fMlF2X3JcIixcblx0XCJwcm9ncmVzc19iYXJcIjogXCJIb21lX3Byb2dyZXNzX2Jhcl9fMzlvOU1cIixcblx0XCJwcm9ncmVzc19iYXJfbm93XCI6IFwiSG9tZV9wcm9ncmVzc19iYXJfbm93X18xSzBXSlwiLFxuXHRcIm1haW5fbWVudV9jb250YWluZXJcIjogXCJIb21lX21haW5fbWVudV9jb250YWluZXJfXzNFZGp2XCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hcHBcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL21lc3NhZ2luZ1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY2hhcnRqcy0yXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9