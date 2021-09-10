(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ "./store/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _webpush__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../webpush */ "./webpush.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helper */ "./helper.js");

var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-front-end\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function MyApp({
  Component,
  pageProps
}) {
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      next_router__WEBPACK_IMPORTED_MODULE_5___default().push("/login");
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    setToken();

    async function setToken() {
      try {
        const token = await _webpush__WEBPACK_IMPORTED_MODULE_6__.firebaseCloudMessaging.init();

        if (token) {
          getMessage();
        }
      } catch (error) {
        console.log(error);
      }
    }

    function getMessage() {
      const messaging = firebase_app__WEBPACK_IMPORTED_MODULE_7___default().messaging();
      console.log({
        messaging
      });
      messaging.onMessage(message => {// localStorage.setItem("notif", true);
      });
    }
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_store__WEBPACK_IMPORTED_MODULE_3__.Store, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./webpush.js":
/*!********************!*\
  !*** ./webpush.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "firebaseCloudMessaging": function() { return /* binding */ firebaseCloudMessaging; }
/* harmony export */ });
/* harmony import */ var firebase_messaging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/messaging */ "firebase/messaging");
/* harmony import */ var firebase_messaging__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_messaging__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);


const firebaseCloudMessaging = {
  //checking whether token is available in indexed DB
  tokenInlocalforage: async () => {
    return localStorage.getItem("fcm_token");
  },
  userInlocalforage: async () => {
    return localStorage.getItem("user");
  },
  //initializing firebase app
  init: async function () {
    if (!(firebase_app__WEBPACK_IMPORTED_MODULE_1___default().apps.length)) {
      firebase_app__WEBPACK_IMPORTED_MODULE_1___default().initializeApp({
        apiKey: "AIzaSyAMTirYpyzY7QWDkzSPsofpo68jaFltnrk",
        authDomain: "sakamor-8f28d.firebaseapp.com",
        projectId: "sakamor-8f28d",
        storageBucket: "sakamor-8f28d.appspot.com",
        messagingSenderId: "400720458166",
        appId: "1:400720458166:web:cf7afc06ec3ac419d69117"
      });

      try {
        const messaging = firebase_app__WEBPACK_IMPORTED_MODULE_1___default().messaging();
        const tokenInLocalForage = await this.tokenInlocalforage();
        const userInlocalforage = await this.userInlocalforage(); //if FCM token is already there just return the token

        if (tokenInLocalForage !== null) {
          return tokenInLocalForage;
        }

        if (userInlocalforage) {
          //requesting notification permission from browser
          const status = await Notification.requestPermission();

          if (status && status === "granted") {
            //getting token from FCM
            const fcm_token = await messaging.getToken();

            if (fcm_token) {
              //setting FCM token in indexed db using localforage
              localStorage.setItem("fcm_token", fcm_token); //return the FCM token after saving it

              return fcm_token;
            }
          }
        }
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  }
};


/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ (function() {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



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
var __webpack_exports__ = __webpack_require__.X(0, ["helper_js-store_index_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYWthLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9zYWthLy4vd2VicHVzaC5qcyIsIndlYnBhY2s6Ly9zYWthL2V4dGVybmFsIFwiZmlyZWJhc2UvYXBwXCIiLCJ3ZWJwYWNrOi8vc2FrYS9leHRlcm5hbCBcImZpcmViYXNlL21lc3NhZ2luZ1wiIiwid2VicGFjazovL3Nha2EvZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly9zYWthL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9zYWthL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9zYWthL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ1c2VFZmZlY3QiLCJ1c2VyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIlJvdXRlciIsInNldFRva2VuIiwidG9rZW4iLCJmaXJlYmFzZUNsb3VkTWVzc2FnaW5nIiwiZ2V0TWVzc2FnZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2luZyIsImZpcmViYXNlIiwib25NZXNzYWdlIiwibWVzc2FnZSIsInRva2VuSW5sb2NhbGZvcmFnZSIsInVzZXJJbmxvY2FsZm9yYWdlIiwiaW5pdCIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsInRva2VuSW5Mb2NhbEZvcmFnZSIsInN0YXR1cyIsIk5vdGlmaWNhdGlvbiIsInJlcXVlc3RQZXJtaXNzaW9uIiwiZmNtX3Rva2VuIiwiZ2V0VG9rZW4iLCJzZXRJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxD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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBmaXJlYmFzZUNsb3VkTWVzc2FnaW5nIH0gZnJvbSBcIi4uL3dlYnB1c2hcIjtcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgeyBnZXRBbGxBbm5vdW5jZW1lbnQgfSBmcm9tIFwiLi4vaGVscGVyXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIik7XG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICBSb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRva2VuKCk7XG4gICAgYXN5bmMgZnVuY3Rpb24gc2V0VG9rZW4oKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGZpcmViYXNlQ2xvdWRNZXNzYWdpbmcuaW5pdCgpO1xuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICBnZXRNZXNzYWdlKCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0TWVzc2FnZSgpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2luZyA9IGZpcmViYXNlLm1lc3NhZ2luZygpO1xuICAgICAgY29uc29sZS5sb2coeyBtZXNzYWdpbmcgfSk7XG4gICAgICBtZXNzYWdpbmcub25NZXNzYWdlKChtZXNzYWdlKSA9PiB7XG4gICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibm90aWZcIiwgdHJ1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxTdG9yZT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1N0b3JlPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiIsImltcG9ydCBcImZpcmViYXNlL21lc3NhZ2luZ1wiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5cclxuY29uc3QgZmlyZWJhc2VDbG91ZE1lc3NhZ2luZyA9IHtcclxuICAvL2NoZWNraW5nIHdoZXRoZXIgdG9rZW4gaXMgYXZhaWxhYmxlIGluIGluZGV4ZWQgREJcclxuICB0b2tlbklubG9jYWxmb3JhZ2U6IGFzeW5jICgpID0+IHtcclxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZjbV90b2tlblwiKTtcclxuICB9LFxyXG5cclxuICB1c2VySW5sb2NhbGZvcmFnZTogYXN5bmMgKCkgPT4ge1xyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKTtcclxuICB9LFxyXG5cclxuICAvL2luaXRpYWxpemluZyBmaXJlYmFzZSBhcHBcclxuICBpbml0OiBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XHJcbiAgICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoe1xyXG4gICAgICAgIGFwaUtleTogXCJBSXphU3lBTVRpcllweXpZN1FXRGt6U1Bzb2ZwbzY4amFGbHRucmtcIixcclxuICAgICAgICBhdXRoRG9tYWluOiBcInNha2Ftb3ItOGYyOGQuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICAgICAgcHJvamVjdElkOiBcInNha2Ftb3ItOGYyOGRcIixcclxuICAgICAgICBzdG9yYWdlQnVja2V0OiBcInNha2Ftb3ItOGYyOGQuYXBwc3BvdC5jb21cIixcclxuICAgICAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI0MDA3MjA0NTgxNjZcIixcclxuICAgICAgICBhcHBJZDogXCIxOjQwMDcyMDQ1ODE2Njp3ZWI6Y2Y3YWZjMDZlYzNhYzQxOWQ2OTExN1wiLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnaW5nID0gZmlyZWJhc2UubWVzc2FnaW5nKCk7XHJcbiAgICAgICAgY29uc3QgdG9rZW5JbkxvY2FsRm9yYWdlID0gYXdhaXQgdGhpcy50b2tlbklubG9jYWxmb3JhZ2UoKTtcclxuICAgICAgICBjb25zdCB1c2VySW5sb2NhbGZvcmFnZSA9IGF3YWl0IHRoaXMudXNlcklubG9jYWxmb3JhZ2UoKTtcclxuXHJcbiAgICAgICAgLy9pZiBGQ00gdG9rZW4gaXMgYWxyZWFkeSB0aGVyZSBqdXN0IHJldHVybiB0aGUgdG9rZW5cclxuICAgICAgICBpZiAodG9rZW5JbkxvY2FsRm9yYWdlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICByZXR1cm4gdG9rZW5JbkxvY2FsRm9yYWdlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVzZXJJbmxvY2FsZm9yYWdlKSB7XHJcbiAgICAgICAgICAvL3JlcXVlc3Rpbmcgbm90aWZpY2F0aW9uIHBlcm1pc3Npb24gZnJvbSBicm93c2VyXHJcbiAgICAgICAgICBjb25zdCBzdGF0dXMgPSBhd2FpdCBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKTtcclxuICAgICAgICAgIGlmIChzdGF0dXMgJiYgc3RhdHVzID09PSBcImdyYW50ZWRcIikge1xyXG4gICAgICAgICAgICAvL2dldHRpbmcgdG9rZW4gZnJvbSBGQ01cclxuICAgICAgICAgICAgY29uc3QgZmNtX3Rva2VuID0gYXdhaXQgbWVzc2FnaW5nLmdldFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmIChmY21fdG9rZW4pIHtcclxuICAgICAgICAgICAgICAvL3NldHRpbmcgRkNNIHRva2VuIGluIGluZGV4ZWQgZGIgdXNpbmcgbG9jYWxmb3JhZ2VcclxuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZjbV90b2tlblwiLCBmY21fdG9rZW4pO1xyXG4gICAgICAgICAgICAgIC8vcmV0dXJuIHRoZSBGQ00gdG9rZW4gYWZ0ZXIgc2F2aW5nIGl0XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZjbV90b2tlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbn07XHJcbmV4cG9ydCB7IGZpcmViYXNlQ2xvdWRNZXNzYWdpbmcgfTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9tZXNzYWdpbmdcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=