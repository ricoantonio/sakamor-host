module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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

var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-new\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function MyApp({
  Component,
  pageProps
}) {
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/login");
    }
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_store__WEBPACK_IMPORTED_MODULE_3__["Store"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./store/actions/keepState.js":
/*!************************************!*\
  !*** ./store/actions/keepState.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (dispatch => ({
  keepState: async data => {
    try {
      dispatch({
        type: "KEEP_STATE",
        payload: data
      });
    } catch (e) {
      console.log(e);
    }
  }
}));

/***/ }),

/***/ "./store/actions/setDefaultVisitPlan.js":
/*!**********************************************!*\
  !*** ./store/actions/setDefaultVisitPlan.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (dispatch => ({
  setDefaultVisitPlan: async () => {
    try {
      dispatch({
        type: "SET_DEFAULT_VISIT_PLAN"
      });
    } catch (e) {
      console.log(e);
    }
  }
}));

/***/ }),

/***/ "./store/actions/setDefaultVisitSpreading.js":
/*!***************************************************!*\
  !*** ./store/actions/setDefaultVisitSpreading.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (dispatch => ({
  setDefaultVisitSpreading: async () => {
    try {
      dispatch({
        type: "SET_DEFAULT_VISIT_SPREADING"
      });
    } catch (e) {
      console.log(e);
    }
  }
}));

/***/ }),

/***/ "./store/actions/setDefaultVisitUnplan.js":
/*!************************************************!*\
  !*** ./store/actions/setDefaultVisitUnplan.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (dispatch => ({
  setDefaultVisitUnplan: async () => {
    try {
      dispatch({
        type: "SET_DEFAULT_VISIT_UNPLAN"
      });
    } catch (e) {
      console.log(e);
    }
  }
}));

/***/ }),

/***/ "./store/actions/setMenu.js":
/*!**********************************!*\
  !*** ./store/actions/setMenu.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (dispatch => ({
  setMenu: async data => {
    try {
      dispatch({
        type: "SET_MENU",
        payload: data
      });
    } catch (e) {
      console.log(e);
    }
  }
}));

/***/ }),

/***/ "./store/actions/setPlanAvability.js":
/*!*******************************************!*\
  !*** ./store/actions/setPlanAvability.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (dispatch => ({
  setPlanAvability: async data => {
    try {
      dispatch({
        type: "SET_PLAN_AVABILITY",
        payload: data
      });
    } catch (e) {
      console.log(e);
    }
  }
}));

/***/ }),

/***/ "./store/actions/setPlanCatatan.js":
/*!*****************************************!*\
  !*** ./store/actions/setPlanCatatan.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (dispatch => ({
  setPlanCatatan: async data => {
    try {
      dispatch({
        type: "SET_PLAN_CATATAN",
        payload: data
      });
    } catch (e) {
      console.log(e);
    }
  }
}));

/***/ }),

/***/ "./store/actions/setPlanCheckIn.js":
/*!*****************************************!*\
  !*** ./store/actions/setPlanCheckIn.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (dispatch => ({
  setPlanCheckIn: async data => {
    try {
      dispatch({
        type: "SET_PLAN_CHECK_IN",
        payload: data
      });
    } catch (e) {
      console.log(e);
    }
  }
}));

/***/ }),

/***/ "./store/actions/setPlanVisibility.js":
/*!********************************************!*\
  !*** ./store/actions/setPlanVisibility.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (dispatch => ({
  setPlanVisibility: async data => {
    try {
      dispatch({
        type: "SET_PLAN_VISIBILITY",
        payload: data
      });
    } catch (e) {
      console.log(e);
    }
  }
}));

/***/ }),

/***/ "./store/actions/setSpreadingAlamat.js":
/*!*********************************************!*\
  !*** ./store/actions/setSpreadingAlamat.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (dispatch => ({
  setSpreadingCatatan: async data => {
    try {
      dispatch({
        type: "SET_SPREADING_CATATAN",
        payload: data
      });
    } catch (e) {
      console.log(e);
    }
  }
}));

/***/ }),

/***/ "./store/actions/setSpreadingAvability.js":
/*!************************************************!*\
  !*** ./store/actions/setSpreadingAvability.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (dispatch => ({
  setSpreadingAvability: async data => {
    try {
      dispatch({
        type: "SET_SPREADING_AVABILITY",
        payload: data
      });
    } catch (e) {
      console.log(e);
    }
  }
}));

/***/ }),

/***/ "./store/actions/setSpreadingCatatan.js":
/*!**********************************************!*\
  !*** ./store/actions/setSpreadingCatatan.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (dispatch => ({
  setSpreadingAlamat: async data => {
    try {
      dispatch({
        type: "SET_SPREADING_ALAMAT",
        payload: data
      });
    } catch (e) {
      console.log(e);
    }
  }
}));

/***/ }),

/***/ "./store/actions/setSpreadingCheckIn.js":
/*!**********************************************!*\
  !*** ./store/actions/setSpreadingCheckIn.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (dispatch => ({
  setSpreadingCheckIn: async data => {
    try {
      dispatch({
        type: "SET_SPREADING_CHECK_IN",
        payload: data
      });
    } catch (e) {
      console.log(e);
    }
  }
}));

/***/ }),

/***/ "./store/actions/setSpreadingJenisChannel.js":
/*!***************************************************!*\
  !*** ./store/actions/setSpreadingJenisChannel.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (dispatch => ({
  setSpreadingJenisChannel: async data => {
    try {
      dispatch({
        type: "SET_SPREADING_JENIS_CHANNEL",
        payload: data
      });
    } catch (e) {
      console.log(e);
    }
  }
}));

/***/ }),

/***/ "./store/actions/setSpreadingNewOutlet.js":
/*!************************************************!*\
  !*** ./store/actions/setSpreadingNewOutlet.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (dispatch => ({
  setSpreadingNewOutlet: async data => {
    try {
      dispatch({
        type: "SET_SPREADING_NEW_OUTLET",
        payload: data
      });
    } catch (e) {
      console.log(e);
    }
  }
}));

/***/ }),

/***/ "./store/actions/setSpreadingOutlet.js":
/*!*********************************************!*\
  !*** ./store/actions/setSpreadingOutlet.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (dispatch => ({
  setSpreadingOutlet: async data => {
    try {
      dispatch({
        type: "SET_SPREADING_OUTLET",
        payload: data
      });
    } catch (e) {
      console.log(e);
    }
  }
}));

/***/ }),

/***/ "./store/actions/setSpreadingVisibility.js":
/*!*************************************************!*\
  !*** ./store/actions/setSpreadingVisibility.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (dispatch => ({
  setSpreadingVisibility: async data => {
    try {
      dispatch({
        type: "SET_SPREADING_VISIBILITY",
        payload: data
      });
    } catch (e) {
      console.log(e);
    }
  }
}));

/***/ }),

/***/ "./store/actions/setUnplanAvability.js":
/*!*********************************************!*\
  !*** ./store/actions/setUnplanAvability.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (dispatch => ({
  setUnplanAvability: async data => {
    try {
      dispatch({
        type: "SET_UNPLAN_AVABILITY",
        payload: data
      });
    } catch (e) {
      console.log(e);
    }
  }
}));

/***/ }),

/***/ "./store/actions/setUnplanCatatan.js":
/*!*******************************************!*\
  !*** ./store/actions/setUnplanCatatan.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (dispatch => ({
  setUnplanCatatan: async data => {
    try {
      dispatch({
        type: "SET_UNPLAN_CATATAN",
        payload: data
      });
    } catch (e) {
      console.log(e);
    }
  }
}));

/***/ }),

/***/ "./store/actions/setUnplanCheckIn.js":
/*!*******************************************!*\
  !*** ./store/actions/setUnplanCheckIn.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (dispatch => ({
  setUnplanCheckIn: async data => {
    try {
      dispatch({
        type: "SET_UNPLAN_CHECK_IN",
        payload: data
      });
    } catch (e) {
      console.log(e);
    }
  }
}));

/***/ }),

/***/ "./store/actions/setUnplanJenisChannel.js":
/*!************************************************!*\
  !*** ./store/actions/setUnplanJenisChannel.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (dispatch => ({
  setUnplanJenisChannel: async data => {
    try {
      dispatch({
        type: "SET_UNPLAN_JENIS_CHANNEL",
        payload: data
      });
    } catch (e) {
      console.log(e);
    }
  }
}));

/***/ }),

/***/ "./store/actions/setUnplanOutlet.js":
/*!******************************************!*\
  !*** ./store/actions/setUnplanOutlet.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (dispatch => ({
  setUnplanOutlet: async data => {
    try {
      dispatch({
        type: "SET_UNPLAN_OUTLET",
        payload: data
      });
    } catch (e) {
      console.log(e);
    }
  }
}));

/***/ }),

/***/ "./store/actions/setUnplanVisibility.js":
/*!**********************************************!*\
  !*** ./store/actions/setUnplanVisibility.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (dispatch => ({
  setUnplanVisibility: async data => {
    try {
      dispatch({
        type: "SET_UNPLAN_VISIBILITY",
        payload: data
      });
    } catch (e) {
      console.log(e);
    }
  }
}));

/***/ }),

/***/ "./store/actions/userLogin.js":
/*!************************************!*\
  !*** ./store/actions/userLogin.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (dispatch => ({
  userLogin: async data => {
    try {
      dispatch({
        type: "USER_LOGIN",
        payload: data
      });
    } catch (e) {
      console.log(e);
    }
  }
}));

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/*! exports provided: Stores, Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stores", function() { return Stores; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/user */ "./store/reducers/user.js");
/* harmony import */ var _reducers_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/menu */ "./store/reducers/menu.js");
/* harmony import */ var _reducers_visitPlan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/visitPlan */ "./store/reducers/visitPlan.js");
/* harmony import */ var _reducers_visitUnplan__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers/visitUnplan */ "./store/reducers/visitUnplan.js");
/* harmony import */ var _reducers_visitSpreading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers/visitSpreading */ "./store/reducers/visitSpreading.js");
/* harmony import */ var _actions_userLogin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actions/userLogin */ "./store/actions/userLogin.js");
/* harmony import */ var _actions_setMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./actions/setMenu */ "./store/actions/setMenu.js");
/* harmony import */ var _actions_keepState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./actions/keepState */ "./store/actions/keepState.js");
/* harmony import */ var _actions_setPlanVisibility__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./actions/setPlanVisibility */ "./store/actions/setPlanVisibility.js");
/* harmony import */ var _actions_setPlanAvability__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./actions/setPlanAvability */ "./store/actions/setPlanAvability.js");
/* harmony import */ var _actions_setPlanCatatan__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./actions/setPlanCatatan */ "./store/actions/setPlanCatatan.js");
/* harmony import */ var _actions_setPlanCheckIn__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./actions/setPlanCheckIn */ "./store/actions/setPlanCheckIn.js");
/* harmony import */ var _actions_setUnplanAvability__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./actions/setUnplanAvability */ "./store/actions/setUnplanAvability.js");
/* harmony import */ var _actions_setUnplanVisibility__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./actions/setUnplanVisibility */ "./store/actions/setUnplanVisibility.js");
/* harmony import */ var _actions_setUnplanCatatan__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./actions/setUnplanCatatan */ "./store/actions/setUnplanCatatan.js");
/* harmony import */ var _actions_setUnplanCheckIn__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./actions/setUnplanCheckIn */ "./store/actions/setUnplanCheckIn.js");
/* harmony import */ var _actions_setUnplanJenisChannel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./actions/setUnplanJenisChannel */ "./store/actions/setUnplanJenisChannel.js");
/* harmony import */ var _actions_setUnplanOutlet__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./actions/setUnplanOutlet */ "./store/actions/setUnplanOutlet.js");
/* harmony import */ var _actions_setSpreadingAvability__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./actions/setSpreadingAvability */ "./store/actions/setSpreadingAvability.js");
/* harmony import */ var _actions_setSpreadingVisibility__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./actions/setSpreadingVisibility */ "./store/actions/setSpreadingVisibility.js");
/* harmony import */ var _actions_setSpreadingCatatan__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./actions/setSpreadingCatatan */ "./store/actions/setSpreadingCatatan.js");
/* harmony import */ var _actions_setSpreadingAlamat__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./actions/setSpreadingAlamat */ "./store/actions/setSpreadingAlamat.js");
/* harmony import */ var _actions_setSpreadingNewOutlet__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./actions/setSpreadingNewOutlet */ "./store/actions/setSpreadingNewOutlet.js");
/* harmony import */ var _actions_setSpreadingCheckIn__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./actions/setSpreadingCheckIn */ "./store/actions/setSpreadingCheckIn.js");
/* harmony import */ var _actions_setSpreadingJenisChannel__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./actions/setSpreadingJenisChannel */ "./store/actions/setSpreadingJenisChannel.js");
/* harmony import */ var _actions_setSpreadingOutlet__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./actions/setSpreadingOutlet */ "./store/actions/setSpreadingOutlet.js");
/* harmony import */ var _actions_setDefaultVisitPlan__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./actions/setDefaultVisitPlan */ "./store/actions/setDefaultVisitPlan.js");
/* harmony import */ var _actions_setDefaultVisitUnplan__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./actions/setDefaultVisitUnplan */ "./store/actions/setDefaultVisitUnplan.js");
/* harmony import */ var _actions_setDefaultVisitSpreading__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./actions/setDefaultVisitSpreading */ "./store/actions/setDefaultVisitSpreading.js");

var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-new\\store\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }































const Stores = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();

const Store = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])((prevState, action) => {
    return {
      userReducer: Object(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["userReducer"])(prevState.userReducer, action),
      menuReducer: Object(_reducers_menu__WEBPACK_IMPORTED_MODULE_3__["menuReducer"])(prevState.menuReducer, action),
      visitPlanReducer: Object(_reducers_visitPlan__WEBPACK_IMPORTED_MODULE_4__["visitPlanReducer"])(prevState.visitPlanReducer, action),
      visitUnplanReducer: Object(_reducers_visitUnplan__WEBPACK_IMPORTED_MODULE_5__["visitUnplanReducer"])(prevState.visitUnplanReducer, action),
      visitSpreadingReducer: Object(_reducers_visitSpreading__WEBPACK_IMPORTED_MODULE_6__["visitSpreadingReducer"])(prevState.visitSpreadingReducer, action)
    };
  }, {
    userReducer: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["defaultUser"],
    menuReducer: _reducers_menu__WEBPACK_IMPORTED_MODULE_3__["defaultMenu"],
    visitPlanReducer: _reducers_visitPlan__WEBPACK_IMPORTED_MODULE_4__["defaultVisitPlan"],
    visitUnplanReducer: _reducers_visitUnplan__WEBPACK_IMPORTED_MODULE_5__["defaultVisitUnplan"],
    visitSpreadingReducer: _reducers_visitSpreading__WEBPACK_IMPORTED_MODULE_6__["defaultVisitSpreading"]
  });
  const actions = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(_actions_userLogin__WEBPACK_IMPORTED_MODULE_7__["default"])(dispatch)), Object(_actions_setMenu__WEBPACK_IMPORTED_MODULE_8__["default"])(dispatch)), Object(_actions_keepState__WEBPACK_IMPORTED_MODULE_9__["default"])(dispatch)), Object(_actions_setPlanVisibility__WEBPACK_IMPORTED_MODULE_10__["default"])(dispatch)), Object(_actions_setPlanAvability__WEBPACK_IMPORTED_MODULE_11__["default"])(dispatch)), Object(_actions_setPlanCatatan__WEBPACK_IMPORTED_MODULE_12__["default"])(dispatch)), Object(_actions_setPlanCheckIn__WEBPACK_IMPORTED_MODULE_13__["default"])(dispatch)), Object(_actions_setDefaultVisitPlan__WEBPACK_IMPORTED_MODULE_28__["default"])(dispatch)), Object(_actions_setUnplanVisibility__WEBPACK_IMPORTED_MODULE_15__["default"])(dispatch)), Object(_actions_setUnplanAvability__WEBPACK_IMPORTED_MODULE_14__["default"])(dispatch)), Object(_actions_setUnplanCatatan__WEBPACK_IMPORTED_MODULE_16__["default"])(dispatch)), Object(_actions_setUnplanCheckIn__WEBPACK_IMPORTED_MODULE_17__["default"])(dispatch)), Object(_actions_setUnplanJenisChannel__WEBPACK_IMPORTED_MODULE_18__["default"])(dispatch)), Object(_actions_setUnplanOutlet__WEBPACK_IMPORTED_MODULE_19__["default"])(dispatch)), Object(_actions_setDefaultVisitUnplan__WEBPACK_IMPORTED_MODULE_29__["default"])(dispatch)), Object(_actions_setSpreadingVisibility__WEBPACK_IMPORTED_MODULE_21__["default"])(dispatch)), Object(_actions_setSpreadingAvability__WEBPACK_IMPORTED_MODULE_20__["default"])(dispatch)), Object(_actions_setSpreadingCatatan__WEBPACK_IMPORTED_MODULE_22__["default"])(dispatch)), Object(_actions_setSpreadingAlamat__WEBPACK_IMPORTED_MODULE_23__["default"])(dispatch)), Object(_actions_setSpreadingNewOutlet__WEBPACK_IMPORTED_MODULE_24__["default"])(dispatch)), Object(_actions_setSpreadingCheckIn__WEBPACK_IMPORTED_MODULE_25__["default"])(dispatch)), Object(_actions_setSpreadingJenisChannel__WEBPACK_IMPORTED_MODULE_26__["default"])(dispatch)), Object(_actions_setSpreadingOutlet__WEBPACK_IMPORTED_MODULE_27__["default"])(dispatch)), Object(_actions_setDefaultVisitSpreading__WEBPACK_IMPORTED_MODULE_30__["default"])(dispatch)), []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Stores.Provider, {
    value: {
      state,
      dispatch,
      actions
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 103,
    columnNumber: 5
  }, undefined);
};



/***/ }),

/***/ "./store/reducers/menu.js":
/*!********************************!*\
  !*** ./store/reducers/menu.js ***!
  \********************************/
/*! exports provided: menuReducer, defaultMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuReducer", function() { return menuReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMenu", function() { return defaultMenu; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const defaultMenu = {
  menu: []
};

const menuReducer = (state, action) => {
  switch (action.type) {
    case "SET_MENU":
      localStorage.setItem("menu", JSON.stringify(action.payload));
      return _objectSpread(_objectSpread({}, state), {}, {
        menu: action.payload
      });

    case "KEEP_STATE":
      const userMenu = JSON.parse(localStorage.getItem("menu"));
      return _objectSpread(_objectSpread({}, state), {}, {
        menu: userMenu
      });

    default:
      return state;
  }
};



/***/ }),

/***/ "./store/reducers/user.js":
/*!********************************!*\
  !*** ./store/reducers/user.js ***!
  \********************************/
/*! exports provided: userReducer, defaultUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return userReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultUser", function() { return defaultUser; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const defaultUser = {
  user: []
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return _objectSpread(_objectSpread({}, state), {}, {
        user: action.payload
      });

    case "USER_LOGOUT":
      localStorage.clear();
      return _objectSpread(_objectSpread({}, state), {}, {
        user: action.payload
      });

    case "KEEP_STATE":
      const userData = JSON.parse(localStorage.getItem("user"));
      return _objectSpread(_objectSpread({}, state), {}, {
        user: userData
      });

    default:
      return state;
  }
};



/***/ }),

/***/ "./store/reducers/visitPlan.js":
/*!*************************************!*\
  !*** ./store/reducers/visitPlan.js ***!
  \*************************************/
/*! exports provided: visitPlanReducer, defaultVisitPlan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visitPlanReducer", function() { return visitPlanReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultVisitPlan", function() { return defaultVisitPlan; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const defaultVisitPlan = {
  visibility: [],
  avability: [],
  catatan: "",
  checkIn: ""
};

const visitPlanReducer = (state, action) => {
  switch (action.type) {
    case "SET_PLAN_VISIBILITY":
      return _objectSpread(_objectSpread({}, state), {}, {
        visibility: action.payload
      });

    case "SET_PLAN_AVABILITY":
      return _objectSpread(_objectSpread({}, state), {}, {
        avability: action.payload
      });

    case "SET_PLAN_CATATAN":
      return _objectSpread(_objectSpread({}, state), {}, {
        catatan: action.payload
      });

    case "SET_PLAN_CHECK_IN":
      return _objectSpread(_objectSpread({}, state), {}, {
        checkIn: action.payload
      });

    case "SET_DEFAULT_VISIT_PLAN":
      return _objectSpread({}, defaultVisitPlan);

    default:
      return state;
  }
};



/***/ }),

/***/ "./store/reducers/visitSpreading.js":
/*!******************************************!*\
  !*** ./store/reducers/visitSpreading.js ***!
  \******************************************/
/*! exports provided: visitSpreadingReducer, defaultVisitSpreading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visitSpreadingReducer", function() { return visitSpreadingReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultVisitSpreading", function() { return defaultVisitSpreading; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const defaultVisitSpreading = {
  visibility: [],
  avability: [],
  catatan: "",
  alamat: "",
  newOutlet: "",
  checkIn: "",
  jenisChannel: {},
  outlet: {}
};

const visitSpreadingReducer = (state, action) => {
  switch (action.type) {
    case "SET_SPREADING_VISIBILITY":
      return _objectSpread(_objectSpread({}, state), {}, {
        visibility: action.payload
      });

    case "SET_SPREADING_AVABILITY":
      return _objectSpread(_objectSpread({}, state), {}, {
        avability: action.payload
      });

    case "SET_SPREADING_CATATAN":
      return _objectSpread(_objectSpread({}, state), {}, {
        catatan: action.payload
      });

    case "SET_SPREADING_ALAMAT":
      return _objectSpread(_objectSpread({}, state), {}, {
        alamat: action.payload
      });

    case "SET_SPREADING_NEW_OUTLET":
      return _objectSpread(_objectSpread({}, state), {}, {
        newOutlet: action.payload
      });

    case "SET_SPREADING_CHECK_IN":
      return _objectSpread(_objectSpread({}, state), {}, {
        checkIn: action.payload
      });

    case "SET_SPREADING_JENIS_CHANNEL":
      return _objectSpread(_objectSpread({}, state), {}, {
        jenisChannel: action.payload
      });

    case "SET_SPREADING_OUTLET":
      return _objectSpread(_objectSpread({}, state), {}, {
        outlet: action.payload
      });

    case "SET_DEFAULT_VISIT_SPREADING":
      return _objectSpread({}, defaultVisitSpreading);

    default:
      return state;
  }
};



/***/ }),

/***/ "./store/reducers/visitUnplan.js":
/*!***************************************!*\
  !*** ./store/reducers/visitUnplan.js ***!
  \***************************************/
/*! exports provided: visitUnplanReducer, defaultVisitUnplan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visitUnplanReducer", function() { return visitUnplanReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultVisitUnplan", function() { return defaultVisitUnplan; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const defaultVisitUnplan = {
  visibility: [],
  avability: [],
  catatan: "",
  checkIn: "",
  jenisChannel: {},
  outlet: {}
};

const visitUnplanReducer = (state, action) => {
  switch (action.type) {
    case "SET_UNPLAN_VISIBILITY":
      return _objectSpread(_objectSpread({}, state), {}, {
        visibility: action.payload
      });

    case "SET_UNPLAN_AVABILITY":
      return _objectSpread(_objectSpread({}, state), {}, {
        avability: action.payload
      });

    case "SET_UNPLAN_CATATAN":
      return _objectSpread(_objectSpread({}, state), {}, {
        catatan: action.payload
      });

    case "SET_UNPLAN_CHECK_IN":
      return _objectSpread(_objectSpread({}, state), {}, {
        checkIn: action.payload
      });

    case "SET_UNPLAN_JENIS_CHANNEL":
      return _objectSpread(_objectSpread({}, state), {}, {
        jenisChannel: action.payload
      });

    case "SET_UNPLAN_OUTLET":
      return _objectSpread(_objectSpread({}, state), {}, {
        outlet: action.payload
      });

    case "SET_DEFAULT_VISIT_UNPLAN":
      return _objectSpread({}, defaultVisitUnplan);

    default:
      return state;
  }
};



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL2tlZXBTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldERlZmF1bHRWaXNpdFBsYW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZXREZWZhdWx0VmlzaXRTcHJlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZXRNZW51LmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0UGxhbkF2YWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFBsYW5DYXRhdGFuLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0UGxhbkNoZWNrSW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZXRQbGFuVmlzaWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFNwcmVhZGluZ0NhdGF0YW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZXRTcHJlYWRpbmdBdmFiaWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZXRTcHJlYWRpbmdDaGVja0luLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0U3ByZWFkaW5nSmVuaXNDaGFubmVsLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0U3ByZWFkaW5nTmV3T3V0bGV0LmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0U3ByZWFkaW5nT3V0bGV0LmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0U3ByZWFkaW5nVmlzaWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFVucGxhbkF2YWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFVucGxhbkNhdGF0YW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZXRVbnBsYW5DaGVja0luLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0VW5wbGFuSmVuaXNDaGFubmVsLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0VW5wbGFuT3V0bGV0LmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0VW5wbGFuVmlzaWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3JlZHVjZXJzL3Zpc2l0UGxhbi5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy92aXNpdFNwcmVhZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy92aXNpdFVucGxhbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ1c2VFZmZlY3QiLCJ1c2VyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIlJvdXRlciIsInB1c2giLCJkaXNwYXRjaCIsImtlZXBTdGF0ZSIsImRhdGEiLCJ0eXBlIiwicGF5bG9hZCIsImUiLCJjb25zb2xlIiwibG9nIiwic2V0RGVmYXVsdFZpc2l0UGxhbiIsInNldERlZmF1bHRWaXNpdFNwcmVhZGluZyIsInNldERlZmF1bHRWaXNpdFVucGxhbiIsInNldE1lbnUiLCJzZXRQbGFuQXZhYmlsaXR5Iiwic2V0UGxhbkNhdGF0YW4iLCJzZXRQbGFuQ2hlY2tJbiIsInNldFBsYW5WaXNpYmlsaXR5Iiwic2V0U3ByZWFkaW5nQ2F0YXRhbiIsInNldFNwcmVhZGluZ0F2YWJpbGl0eSIsInNldFNwcmVhZGluZ0FsYW1hdCIsInNldFNwcmVhZGluZ0NoZWNrSW4iLCJzZXRTcHJlYWRpbmdKZW5pc0NoYW5uZWwiLCJzZXRTcHJlYWRpbmdOZXdPdXRsZXQiLCJzZXRTcHJlYWRpbmdPdXRsZXQiLCJzZXRTcHJlYWRpbmdWaXNpYmlsaXR5Iiwic2V0VW5wbGFuQXZhYmlsaXR5Iiwic2V0VW5wbGFuQ2F0YXRhbiIsInNldFVucGxhbkNoZWNrSW4iLCJzZXRVbnBsYW5KZW5pc0NoYW5uZWwiLCJzZXRVbnBsYW5PdXRsZXQiLCJzZXRVbnBsYW5WaXNpYmlsaXR5IiwidXNlckxvZ2luIiwiU3RvcmVzIiwiY3JlYXRlQ29udGV4dCIsIlN0b3JlIiwiY2hpbGRyZW4iLCJzdGF0ZSIsInVzZVJlZHVjZXIiLCJwcmV2U3RhdGUiLCJhY3Rpb24iLCJ1c2VyUmVkdWNlciIsIm1lbnVSZWR1Y2VyIiwidmlzaXRQbGFuUmVkdWNlciIsInZpc2l0VW5wbGFuUmVkdWNlciIsInZpc2l0U3ByZWFkaW5nUmVkdWNlciIsImRlZmF1bHRVc2VyIiwiZGVmYXVsdE1lbnUiLCJkZWZhdWx0VmlzaXRQbGFuIiwiZGVmYXVsdFZpc2l0VW5wbGFuIiwiZGVmYXVsdFZpc2l0U3ByZWFkaW5nIiwiYWN0aW9ucyIsInVzZU1lbW8iLCJtZW51Iiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VyTWVudSIsInBhcnNlIiwiY2xlYXIiLCJ1c2VyRGF0YSIsInZpc2liaWxpdHkiLCJhdmFiaWxpdHkiLCJjYXRhdGFuIiwiY2hlY2tJbiIsImFsYW1hdCIsIm5ld091dGxldCIsImplbmlzQ2hhbm5lbCIsIm91dGxldCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7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O0FBQ0UsNkNBQVkrQixLQUFaO0FBQW1CMkIsZUFBTyxFQUFFeEIsTUFBTSxDQUFDbEM7QUFBbkM7O0FBQ0YsU0FBSywwQkFBTDtBQUNFLDZDQUFZK0IsS0FBWjtBQUFtQjhCLG9CQUFZLEVBQUUzQixNQUFNLENBQUNsQztBQUF4Qzs7QUFDRixTQUFLLG1CQUFMO0FBQ0UsNkNBQVkrQixLQUFaO0FBQW1CK0IsY0FBTSxFQUFFNUIsTUFBTSxDQUFDbEM7QUFBbEM7O0FBQ0YsU0FBSywwQkFBTDtBQUNFLCtCQUFZMkMsa0JBQVo7O0FBQ0Y7QUFDRSxhQUFPWixLQUFQO0FBaEJKO0FBa0JELENBbkJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIik7XG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICBSb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8U3RvcmU+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9TdG9yZT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAga2VlcFN0YXRlOiBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIktFRVBfU1RBVEVcIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXREZWZhdWx0VmlzaXRVbnBsYW46IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfREVGQVVMVF9WSVNJVF9VTlBMQU5cIiB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXREZWZhdWx0VmlzaXRTcHJlYWRpbmc6IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfREVGQVVMVF9WSVNJVF9TUFJFQURJTkdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRNZW51OiBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9NRU5VXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0UGxhbkF2YWJpbGl0eTogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfUExBTl9BVkFCSUxJVFlcIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRQbGFuQ2F0YXRhbjogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfUExBTl9DQVRBVEFOXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0UGxhbkNoZWNrSW46IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1BMQU5fQ0hFQ0tfSU5cIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRQbGFuVmlzaWJpbGl0eTogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfUExBTl9WSVNJQklMSVRZXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0U3ByZWFkaW5nQWxhbWF0OiBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9TUFJFQURJTkdfQUxBTUFUXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0U3ByZWFkaW5nQXZhYmlsaXR5OiBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9TUFJFQURJTkdfQVZBQklMSVRZXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0U3ByZWFkaW5nQ2hlY2tJbjogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfU1BSRUFESU5HX0NIRUNLX0lOXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0U3ByZWFkaW5nSmVuaXNDaGFubmVsOiBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9TUFJFQURJTkdfSkVOSVNfQ0hBTk5FTFwiLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNldFNwcmVhZGluZ05ld091dGxldDogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfU1BSRUFESU5HX05FV19PVVRMRVRcIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRTcHJlYWRpbmdPdXRsZXQ6IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1NQUkVBRElOR19PVVRMRVRcIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRTcHJlYWRpbmdWaXNpYmlsaXR5OiBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9TUFJFQURJTkdfVklTSUJJTElUWVwiLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNldFVucGxhbkF2YWJpbGl0eTogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfVU5QTEFOX0FWQUJJTElUWVwiLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNldFVucGxhbkNhdGF0YW46IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1VOUExBTl9DQVRBVEFOXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0VW5wbGFuQ2hlY2tJbjogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfVU5QTEFOX0NIRUNLX0lOXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0VW5wbGFuSmVuaXNDaGFubmVsOiBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9VTlBMQU5fSkVOSVNfQ0hBTk5FTFwiLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNldFVucGxhbk91dGxldDogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfVU5QTEFOX09VVExFVFwiLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNldFVucGxhblZpc2liaWxpdHk6IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1VOUExBTl9WSVNJQklMSVRZXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgdXNlckxvZ2luOiBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlVTRVJfTE9HSU5cIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyLCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VyUmVkdWNlciwgZGVmYXVsdFVzZXIgfSBmcm9tIFwiLi9yZWR1Y2Vycy91c2VyXCI7XHJcbmltcG9ydCB7IG1lbnVSZWR1Y2VyLCBkZWZhdWx0TWVudSB9IGZyb20gXCIuL3JlZHVjZXJzL21lbnVcIjtcclxuaW1wb3J0IHsgdmlzaXRQbGFuUmVkdWNlciwgZGVmYXVsdFZpc2l0UGxhbiB9IGZyb20gXCIuL3JlZHVjZXJzL3Zpc2l0UGxhblwiO1xyXG5pbXBvcnQgeyB2aXNpdFVucGxhblJlZHVjZXIsIGRlZmF1bHRWaXNpdFVucGxhbiB9IGZyb20gXCIuL3JlZHVjZXJzL3Zpc2l0VW5wbGFuXCI7XHJcbmltcG9ydCB7XHJcbiAgdmlzaXRTcHJlYWRpbmdSZWR1Y2VyLFxyXG4gIGRlZmF1bHRWaXNpdFNwcmVhZGluZyxcclxufSBmcm9tIFwiLi9yZWR1Y2Vycy92aXNpdFNwcmVhZGluZ1wiO1xyXG5cclxuaW1wb3J0IHVzZXJMb2dpbiBmcm9tIFwiLi9hY3Rpb25zL3VzZXJMb2dpblwiO1xyXG5pbXBvcnQgc2V0TWVudSBmcm9tIFwiLi9hY3Rpb25zL3NldE1lbnVcIjtcclxuaW1wb3J0IGtlZXBTdGF0ZSBmcm9tIFwiLi9hY3Rpb25zL2tlZXBTdGF0ZVwiO1xyXG5cclxuaW1wb3J0IHNldFBsYW5WaXNpYmlsaXR5IGZyb20gXCIuL2FjdGlvbnMvc2V0UGxhblZpc2liaWxpdHlcIjtcclxuaW1wb3J0IHNldFBsYW5BdmFiaWxpdHkgZnJvbSBcIi4vYWN0aW9ucy9zZXRQbGFuQXZhYmlsaXR5XCI7XHJcbmltcG9ydCBzZXRQbGFuQ2F0YXRhbiBmcm9tIFwiLi9hY3Rpb25zL3NldFBsYW5DYXRhdGFuXCI7XHJcbmltcG9ydCBzZXRQbGFuQ2hlY2tJbiBmcm9tIFwiLi9hY3Rpb25zL3NldFBsYW5DaGVja0luXCI7XHJcblxyXG5pbXBvcnQgc2V0VW5wbGFuQXZhYmlsaXR5IGZyb20gXCIuL2FjdGlvbnMvc2V0VW5wbGFuQXZhYmlsaXR5XCI7XHJcbmltcG9ydCBzZXRVbnBsYW5WaXNpYmlsaXR5IGZyb20gXCIuL2FjdGlvbnMvc2V0VW5wbGFuVmlzaWJpbGl0eVwiO1xyXG5pbXBvcnQgc2V0VW5wbGFuQ2F0YXRhbiBmcm9tIFwiLi9hY3Rpb25zL3NldFVucGxhbkNhdGF0YW5cIjtcclxuaW1wb3J0IHNldFVucGxhbkNoZWNrSW4gZnJvbSBcIi4vYWN0aW9ucy9zZXRVbnBsYW5DaGVja0luXCI7XHJcbmltcG9ydCBzZXRVbnBsYW5KZW5pc0NoYW5uZWwgZnJvbSBcIi4vYWN0aW9ucy9zZXRVbnBsYW5KZW5pc0NoYW5uZWxcIjtcclxuaW1wb3J0IHNldFVucGxhbk91dGxldCBmcm9tIFwiLi9hY3Rpb25zL3NldFVucGxhbk91dGxldFwiO1xyXG5cclxuaW1wb3J0IHNldFNwcmVhZGluZ0F2YWJpbGl0eSBmcm9tIFwiLi9hY3Rpb25zL3NldFNwcmVhZGluZ0F2YWJpbGl0eVwiO1xyXG5pbXBvcnQgc2V0U3ByZWFkaW5nVmlzaWJpbGl0eSBmcm9tIFwiLi9hY3Rpb25zL3NldFNwcmVhZGluZ1Zpc2liaWxpdHlcIjtcclxuaW1wb3J0IHNldFNwcmVhZGluZ0NhdGF0YW4gZnJvbSBcIi4vYWN0aW9ucy9zZXRTcHJlYWRpbmdDYXRhdGFuXCI7XHJcbmltcG9ydCBzZXRTcHJlYWRpbmdBbGFtYXQgZnJvbSBcIi4vYWN0aW9ucy9zZXRTcHJlYWRpbmdBbGFtYXRcIjtcclxuaW1wb3J0IHNldFNwcmVhZGluZ05ld091dGxldCBmcm9tIFwiLi9hY3Rpb25zL3NldFNwcmVhZGluZ05ld091dGxldFwiO1xyXG5pbXBvcnQgc2V0U3ByZWFkaW5nQ2hlY2tJbiBmcm9tIFwiLi9hY3Rpb25zL3NldFNwcmVhZGluZ0NoZWNrSW5cIjtcclxuaW1wb3J0IHNldFNwcmVhZGluZ0plbmlzQ2hhbm5lbCBmcm9tIFwiLi9hY3Rpb25zL3NldFNwcmVhZGluZ0plbmlzQ2hhbm5lbFwiO1xyXG5pbXBvcnQgc2V0U3ByZWFkaW5nT3V0bGV0IGZyb20gXCIuL2FjdGlvbnMvc2V0U3ByZWFkaW5nT3V0bGV0XCI7XHJcblxyXG5pbXBvcnQgc2V0RGVmYXVsdFZpc2l0UGxhbiBmcm9tIFwiLi9hY3Rpb25zL3NldERlZmF1bHRWaXNpdFBsYW5cIjtcclxuaW1wb3J0IHNldERlZmF1bHRWaXNpdFVucGxhbiBmcm9tIFwiLi9hY3Rpb25zL3NldERlZmF1bHRWaXNpdFVucGxhblwiO1xyXG5pbXBvcnQgc2V0RGVmYXVsdFZpc2l0U3ByZWFkaW5nIGZyb20gXCIuL2FjdGlvbnMvc2V0RGVmYXVsdFZpc2l0U3ByZWFkaW5nXCI7XHJcblxyXG5jb25zdCBTdG9yZXMgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBTdG9yZSA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoXHJcbiAgICAocHJldlN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VyUmVkdWNlcjogdXNlclJlZHVjZXIocHJldlN0YXRlLnVzZXJSZWR1Y2VyLCBhY3Rpb24pLFxyXG4gICAgICAgIG1lbnVSZWR1Y2VyOiBtZW51UmVkdWNlcihwcmV2U3RhdGUubWVudVJlZHVjZXIsIGFjdGlvbiksXHJcbiAgICAgICAgdmlzaXRQbGFuUmVkdWNlcjogdmlzaXRQbGFuUmVkdWNlcihwcmV2U3RhdGUudmlzaXRQbGFuUmVkdWNlciwgYWN0aW9uKSxcclxuICAgICAgICB2aXNpdFVucGxhblJlZHVjZXI6IHZpc2l0VW5wbGFuUmVkdWNlcihcclxuICAgICAgICAgIHByZXZTdGF0ZS52aXNpdFVucGxhblJlZHVjZXIsXHJcbiAgICAgICAgICBhY3Rpb25cclxuICAgICAgICApLFxyXG4gICAgICAgIHZpc2l0U3ByZWFkaW5nUmVkdWNlcjogdmlzaXRTcHJlYWRpbmdSZWR1Y2VyKFxyXG4gICAgICAgICAgcHJldlN0YXRlLnZpc2l0U3ByZWFkaW5nUmVkdWNlcixcclxuICAgICAgICAgIGFjdGlvblxyXG4gICAgICAgICksXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB1c2VyUmVkdWNlcjogZGVmYXVsdFVzZXIsXHJcbiAgICAgIG1lbnVSZWR1Y2VyOiBkZWZhdWx0TWVudSxcclxuICAgICAgdmlzaXRQbGFuUmVkdWNlcjogZGVmYXVsdFZpc2l0UGxhbixcclxuICAgICAgdmlzaXRVbnBsYW5SZWR1Y2VyOiBkZWZhdWx0VmlzaXRVbnBsYW4sXHJcbiAgICAgIHZpc2l0U3ByZWFkaW5nUmVkdWNlcjogZGVmYXVsdFZpc2l0U3ByZWFkaW5nLFxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGFjdGlvbnMgPSB1c2VNZW1vKFxyXG4gICAgKCkgPT4gKHtcclxuICAgICAgLi4udXNlckxvZ2luKGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0TWVudShkaXNwYXRjaCksXHJcbiAgICAgIC4uLmtlZXBTdGF0ZShkaXNwYXRjaCksXHJcblxyXG4gICAgICAuLi5zZXRQbGFuVmlzaWJpbGl0eShkaXNwYXRjaCksXHJcbiAgICAgIC4uLnNldFBsYW5BdmFiaWxpdHkoZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXRQbGFuQ2F0YXRhbihkaXNwYXRjaCksXHJcbiAgICAgIC4uLnNldFBsYW5DaGVja0luKGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0RGVmYXVsdFZpc2l0UGxhbihkaXNwYXRjaCksXHJcblxyXG4gICAgICAuLi5zZXRVbnBsYW5WaXNpYmlsaXR5KGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0VW5wbGFuQXZhYmlsaXR5KGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0VW5wbGFuQ2F0YXRhbihkaXNwYXRjaCksXHJcbiAgICAgIC4uLnNldFVucGxhbkNoZWNrSW4oZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXRVbnBsYW5KZW5pc0NoYW5uZWwoZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXRVbnBsYW5PdXRsZXQoZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXREZWZhdWx0VmlzaXRVbnBsYW4oZGlzcGF0Y2gpLFxyXG5cclxuICAgICAgLi4uc2V0U3ByZWFkaW5nVmlzaWJpbGl0eShkaXNwYXRjaCksXHJcbiAgICAgIC4uLnNldFNwcmVhZGluZ0F2YWJpbGl0eShkaXNwYXRjaCksXHJcbiAgICAgIC4uLnNldFNwcmVhZGluZ0NhdGF0YW4oZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXRTcHJlYWRpbmdBbGFtYXQoZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXRTcHJlYWRpbmdOZXdPdXRsZXQoZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXRTcHJlYWRpbmdDaGVja0luKGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0U3ByZWFkaW5nSmVuaXNDaGFubmVsKGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0U3ByZWFkaW5nT3V0bGV0KGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0RGVmYXVsdFZpc2l0U3ByZWFkaW5nKGRpc3BhdGNoKSxcclxuICAgIH0pLFxyXG4gICAgW11cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0b3Jlcy5Qcm92aWRlciB2YWx1ZT17eyBzdGF0ZSwgZGlzcGF0Y2gsIGFjdGlvbnMgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvU3RvcmVzLlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBTdG9yZXMsIFN0b3JlIH07XHJcbiIsImNvbnN0IGRlZmF1bHRNZW51ID0ge1xyXG4gIG1lbnU6IFtdLFxyXG59O1xyXG5cclxuY29uc3QgbWVudVJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgXCJTRVRfTUVOVVwiOlxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm1lbnVcIiwgSlNPTi5zdHJpbmdpZnkoYWN0aW9uLnBheWxvYWQpKTtcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG1lbnU6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiS0VFUF9TVEFURVwiOlxyXG4gICAgICBjb25zdCB1c2VyTWVudSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtZW51XCIpKTtcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG1lbnU6IHVzZXJNZW51IH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgbWVudVJlZHVjZXIsIGRlZmF1bHRNZW51IH07XHJcbiIsImNvbnN0IGRlZmF1bHRVc2VyID0ge1xyXG4gIHVzZXI6IFtdLFxyXG59O1xyXG5cclxuY29uc3QgdXNlclJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgXCJVU0VSX0xPR0lOXCI6XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBKU09OLnN0cmluZ2lmeShhY3Rpb24ucGF5bG9hZCkpO1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdXNlcjogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJVU0VSX0xPR09VVFwiOlxyXG4gICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVzZXI6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiS0VFUF9TVEFURVwiOlxyXG4gICAgICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVzZXI6IHVzZXJEYXRhIH07XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IHVzZXJSZWR1Y2VyLCBkZWZhdWx0VXNlciB9O1xyXG4iLCJjb25zdCBkZWZhdWx0VmlzaXRQbGFuID0ge1xyXG4gIHZpc2liaWxpdHk6IFtdLFxyXG4gIGF2YWJpbGl0eTogW10sXHJcbiAgY2F0YXRhbjogXCJcIixcclxuICBjaGVja0luOiBcIlwiLFxyXG59O1xyXG5cclxuY29uc3QgdmlzaXRQbGFuUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIlNFVF9QTEFOX1ZJU0lCSUxJVFlcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHZpc2liaWxpdHk6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiU0VUX1BMQU5fQVZBQklMSVRZXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBhdmFiaWxpdHk6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiU0VUX1BMQU5fQ0FUQVRBTlwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2F0YXRhbjogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJTRVRfUExBTl9DSEVDS19JTlwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2hlY2tJbjogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJTRVRfREVGQVVMVF9WSVNJVF9QTEFOXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLmRlZmF1bHRWaXNpdFBsYW4gfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyB2aXNpdFBsYW5SZWR1Y2VyLCBkZWZhdWx0VmlzaXRQbGFuIH07XHJcbiIsImNvbnN0IGRlZmF1bHRWaXNpdFNwcmVhZGluZyA9IHtcclxuICB2aXNpYmlsaXR5OiBbXSxcclxuICBhdmFiaWxpdHk6IFtdLFxyXG4gIGNhdGF0YW46IFwiXCIsXHJcbiAgYWxhbWF0OiBcIlwiLFxyXG4gIG5ld091dGxldDogXCJcIixcclxuICBjaGVja0luOiBcIlwiLFxyXG4gIGplbmlzQ2hhbm5lbDoge30sXHJcbiAgb3V0bGV0OiB7fSxcclxufTtcclxuXHJcbmNvbnN0IHZpc2l0U3ByZWFkaW5nUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIlNFVF9TUFJFQURJTkdfVklTSUJJTElUWVwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdmlzaWJpbGl0eTogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJTRVRfU1BSRUFESU5HX0FWQUJJTElUWVwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYXZhYmlsaXR5OiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9TUFJFQURJTkdfQ0FUQVRBTlwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2F0YXRhbjogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJTRVRfU1BSRUFESU5HX0FMQU1BVFwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYWxhbWF0OiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9TUFJFQURJTkdfTkVXX09VVExFVFwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbmV3T3V0bGV0OiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9TUFJFQURJTkdfQ0hFQ0tfSU5cIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNoZWNrSW46IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiU0VUX1NQUkVBRElOR19KRU5JU19DSEFOTkVMXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBqZW5pc0NoYW5uZWw6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiU0VUX1NQUkVBRElOR19PVVRMRVRcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG91dGxldDogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJTRVRfREVGQVVMVF9WSVNJVF9TUFJFQURJTkdcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdFZpc2l0U3ByZWFkaW5nIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgdmlzaXRTcHJlYWRpbmdSZWR1Y2VyLCBkZWZhdWx0VmlzaXRTcHJlYWRpbmcgfTtcclxuIiwiY29uc3QgZGVmYXVsdFZpc2l0VW5wbGFuID0ge1xyXG4gIHZpc2liaWxpdHk6IFtdLFxyXG4gIGF2YWJpbGl0eTogW10sXHJcbiAgY2F0YXRhbjogXCJcIixcclxuICBjaGVja0luOiBcIlwiLFxyXG4gIGplbmlzQ2hhbm5lbDoge30sXHJcbiAgb3V0bGV0OiB7fSxcclxufTtcclxuXHJcbmNvbnN0IHZpc2l0VW5wbGFuUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIlNFVF9VTlBMQU5fVklTSUJJTElUWVwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdmlzaWJpbGl0eTogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJTRVRfVU5QTEFOX0FWQUJJTElUWVwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYXZhYmlsaXR5OiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9VTlBMQU5fQ0FUQVRBTlwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2F0YXRhbjogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJTRVRfVU5QTEFOX0NIRUNLX0lOXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjaGVja0luOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9VTlBMQU5fSkVOSVNfQ0hBTk5FTFwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgamVuaXNDaGFubmVsOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9VTlBMQU5fT1VUTEVUXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBvdXRsZXQ6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiU0VUX0RFRkFVTFRfVklTSVRfVU5QTEFOXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLmRlZmF1bHRWaXNpdFVucGxhbiB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IHZpc2l0VW5wbGFuUmVkdWNlciwgZGVmYXVsdFZpc2l0VW5wbGFuIH07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9