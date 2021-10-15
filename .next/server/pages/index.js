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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./components/BotNav.jsx":
/*!*******************************!*\
  !*** ./components/BotNav.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_components_BotNav_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/BotNav.module.css */ "./styles/components/BotNav.module.css");
/* harmony import */ var _styles_components_BotNav_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_BotNav_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-front-end\\components\\BotNav.jsx";





const Nav = ({
  focus
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var active = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_BotNav_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.nav_container,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_BotNav_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.nav_box,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
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
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/calendar",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
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
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/reward",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
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
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/announcement",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
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
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/profile",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
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

/***/ "./components/Button.jsx":
/*!*******************************!*\
  !*** ./components/Button.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_components_Button_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/Button.module.css */ "./styles/components/Button.module.css");
/* harmony import */ var _styles_components_Button_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Button_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-front-end\\components\\Button.jsx";




const Button = ({
  onClick,
  text,
  submit,
  color
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    type: submit ? "submit" : "",
    className: color === "white" ? _styles_components_Button_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container_white : color === "orange" ? _styles_components_Button_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container_orange : color === "red" ? _styles_components_Button_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container_red : color === "disable" ? _styles_components_Button_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container_disable : _styles_components_Button_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    onClick: onClick,
    children: text
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/Card.jsx":
/*!*****************************!*\
  !*** ./components/Card.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: `${_styles_components_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container} ${shadow ? _styles_components_Card_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.shadow : ""}`,
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

/***/ "./components/Checkbox.jsx":
/*!*********************************!*\
  !*** ./components/Checkbox.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
    className: _styles_components_Checkbox_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    onChange: onClick,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "checkbox",
      checked: checked,
      disabled: disabled
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), text, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: color === "green" ? _styles_components_Checkbox_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.checkmark_green : color === "yellow" ? _styles_components_Checkbox_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.checkmark_yellow : _styles_components_Checkbox_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.checkmark_green
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

/***/ "./components/Spinner.jsx":
/*!********************************!*\
  !*** ./components/Spinner.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_Spinner_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/components/Spinner.module.css */ "./styles/components/Spinner.module.css");
/* harmony import */ var _styles_components_Spinner_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Spinner_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-front-end\\components\\Spinner.jsx";


const Spinner = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_Spinner_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_Spinner_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.spinner,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Spinner);

/***/ }),

/***/ "./constant.js":
/*!*********************!*\
  !*** ./constant.js ***!
  \*********************/
/*! exports provided: TOKEN, API_URL, API_USER, API_MASTER, API_VISIT_PLAN, API_VISIT_UNPLAN, API_VISIT_SPREADING, API_WORK_VISIT, API_CALENDAR_PROGRAM, API_CALENDAR_PROMO, API_ANNOUNCEMENT, API_INCENTIVE, API_BENEFIT, API_APPROVAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN", function() { return TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_USER", function() { return API_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_MASTER", function() { return API_MASTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_VISIT_PLAN", function() { return API_VISIT_PLAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_VISIT_UNPLAN", function() { return API_VISIT_UNPLAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_VISIT_SPREADING", function() { return API_VISIT_SPREADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_WORK_VISIT", function() { return API_WORK_VISIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_CALENDAR_PROGRAM", function() { return API_CALENDAR_PROGRAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_CALENDAR_PROMO", function() { return API_CALENDAR_PROMO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_ANNOUNCEMENT", function() { return API_ANNOUNCEMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_INCENTIVE", function() { return API_INCENTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_BENEFIT", function() { return API_BENEFIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_APPROVAL", function() { return API_APPROVAL; });
var API_URL = "https://m-one.kalbe.co.id:8243/t/kalbe.co.id";
var API_USER = "/UserProfileExternal/v1/api";
var API_MASTER = "/SakamorMasterData/v1/api";
var API_VISIT_PLAN = "/SakamorActivityVisitPlan/v1/api";
var API_VISIT_UNPLAN = "/SakamorActivityVisitUnPlan/v1/api";
var API_VISIT_SPREADING = "/SakamorActivitySpreading/v1/api";
var API_WORK_VISIT = "/SakamorActivityWorkVisit/v1/api";
var API_CALENDAR_PROGRAM = "/SakamorKalenderProgram/v1/api";
var API_CALENDAR_PROMO = "/SakamorInfoPromo/v1/api";
var API_ANNOUNCEMENT = "/SakamorAnnouncement/v1/api";
var API_INCENTIVE = "/SakamorIncentive/v1/api";
var API_BENEFIT = "/SakamorBenefits/v1/api";
var API_APPROVAL = "/ApprovalAPI/v1/api";
var TOKEN = "eyJ4NXQiOiJZamt5WkRVM05tRTRZbVZqT1RjeE4yRTRNbVZrT1dSak1XVmhZVGhoWWpjeE9UZzJNemt4WVE9PSIsImtpZCI6ImdhdGV3YXlfY2VydGlmaWNhdGVfYWxpYXMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJub2Jvbi5hbmRyYUBrYWxiZS5jby5pZCIsImFwcGxpY2F0aW9uIjp7Im93bmVyIjoibm9ib24uYW5kcmFAa2FsYmUuY28uaWQiLCJ0aWVyUXVvdGFUeXBlIjpudWxsLCJ0aWVyIjoiVW5saW1pdGVkIiwibmFtZSI6IlNha2Ftb3IgMi4wIiwiaWQiOjE5LCJ1dWlkIjoiMTQ5ZWU0NmUtZDE3Ni00NWQxLWE3NmEtOTAzM2RhNzc4OTU4In0sImlzcyI6Imh0dHBzOlwvXC9tLW9uZS5rYWxiZS5jby5pZDo5NDQzXC9vYXV0aDJcL3Rva2VuIiwidGllckluZm8iOnsiVW5saW1pdGVkIjp7InRpZXJRdW90YVR5cGUiOiJyZXF1ZXN0Q291bnQiLCJncmFwaFFMTWF4Q29tcGxleGl0eSI6MCwiZ3JhcGhRTE1heERlcHRoIjowLCJzdG9wT25RdW90YVJlYWNoIjp0cnVlLCJzcGlrZUFycmVzdExpbWl0IjowLCJzcGlrZUFycmVzdFVuaXQiOm51bGx9fSwia2V5dHlwZSI6IlNBTkRCT1giLCJwZXJtaXR0ZWRSZWZlcmVyIjoiIiwic3Vic2NyaWJlZEFQSXMiOlt7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJrYWxiZS5jby5pZCIsIm5hbWUiOiJTYWthbW9yQWN0aXZpdHlWaXNpdFBsYW4iLCJjb250ZXh0IjoiXC90XC9rYWxiZS5jby5pZFwvU2FrYW1vckFjdGl2aXR5VmlzaXRQbGFuXC92MSIsInB1Ymxpc2hlciI6Im5vYm9uLmFuZHJhQGthbGJlLmNvLmlkIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImthbGJlLmNvLmlkIiwibmFtZSI6IlVzZXJQcm9maWxlRXh0ZXJuYWwiLCJjb250ZXh0IjoiXC90XC9rYWxiZS5jby5pZFwvVXNlclByb2ZpbGVFeHRlcm5hbFwvdjEiLCJwdWJsaXNoZXIiOiJub2Jvbi5hbmRyYUBrYWxiZS5jby5pZCIsInZlcnNpb24iOiJ2MSIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifSx7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJrYWxiZS5jby5pZCIsIm5hbWUiOiJTYWthbW9yTWFzdGVyRGF0YSIsImNvbnRleHQiOiJcL3RcL2thbGJlLmNvLmlkXC9TYWthbW9yTWFzdGVyRGF0YVwvdjEiLCJwdWJsaXNoZXIiOiJub2Jvbi5hbmRyYUBrYWxiZS5jby5pZCIsInZlcnNpb24iOiJ2MSIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifSx7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJrYWxiZS5jby5pZCIsIm5hbWUiOiJTYWthbW9yQWN0aXZpdHlTcHJlYWRpbmciLCJjb250ZXh0IjoiXC90XC9rYWxiZS5jby5pZFwvU2FrYW1vckFjdGl2aXR5U3ByZWFkaW5nXC92MSIsInB1Ymxpc2hlciI6Im5vYm9uLmFuZHJhQGthbGJlLmNvLmlkIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImthbGJlLmNvLmlkIiwibmFtZSI6IlNha2Ftb3JBY3Rpdml0eVZpc2l0VW5QbGFuIiwiY29udGV4dCI6IlwvdFwva2FsYmUuY28uaWRcL1Nha2Ftb3JBY3Rpdml0eVZpc2l0VW5QbGFuXC92MSIsInB1Ymxpc2hlciI6Im5vYm9uLmFuZHJhQGthbGJlLmNvLmlkIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImthbGJlLmNvLmlkIiwibmFtZSI6IlNha2Ftb3JBY3Rpdml0eVdvcmtWaXNpdCIsImNvbnRleHQiOiJcL3RcL2thbGJlLmNvLmlkXC9TYWthbW9yQWN0aXZpdHlXb3JrVmlzaXRcL3YxIiwicHVibGlzaGVyIjoibm9ib24uYW5kcmFAa2FsYmUuY28uaWQiLCJ2ZXJzaW9uIjoidjEiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoia2FsYmUuY28uaWQiLCJuYW1lIjoiU2FrYW1vckthbGVuZGVyUHJvZ3JhbSIsImNvbnRleHQiOiJcL3RcL2thbGJlLmNvLmlkXC9TYWthbW9yS2FsZW5kZXJQcm9ncmFtXC92MSIsInB1Ymxpc2hlciI6Im5vYm9uLmFuZHJhQGthbGJlLmNvLmlkIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImthbGJlLmNvLmlkIiwibmFtZSI6IlNha2Ftb3JJbmZvUHJvbW8iLCJjb250ZXh0IjoiXC90XC9rYWxiZS5jby5pZFwvU2FrYW1vckluZm9Qcm9tb1wvdjEiLCJwdWJsaXNoZXIiOiJub2Jvbi5hbmRyYUBrYWxiZS5jby5pZCIsInZlcnNpb24iOiJ2MSIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifSx7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJrYWxiZS5jby5pZCIsIm5hbWUiOiJTYWthbW9yQW5ub3VuY2VtZW50IiwiY29udGV4dCI6IlwvdFwva2FsYmUuY28uaWRcL1Nha2Ftb3JBbm5vdW5jZW1lbnRcL3YxIiwicHVibGlzaGVyIjoibm9ib24uYW5kcmFAa2FsYmUuY28uaWQiLCJ2ZXJzaW9uIjoidjEiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoia2FsYmUuY28uaWQiLCJuYW1lIjoiQXV0aG9yaXphdGlvbkFQSSIsImNvbnRleHQiOiJcL3RcL2thbGJlLmNvLmlkXC9BdXRob3JpemF0aW9uQVBJXC92MSIsInB1Ymxpc2hlciI6Im11aGFtbWFkLmRpYW5pQGthbGJlLmNvLmlkIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImthbGJlLmNvLmlkIiwibmFtZSI6IlJvbGUiLCJjb250ZXh0IjoiXC90XC9rYWxiZS5jby5pZFwvUm9sZVwvdjEiLCJwdWJsaXNoZXIiOiJtdWhhbW1hZC5oaWRheWF0dWxsMUBrYWxiZS5jby5pZCIsInZlcnNpb24iOiJ2MSIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifSx7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJrYWxiZS5jby5pZCIsIm5hbWUiOiJNb2R1bGVBUEkiLCJjb250ZXh0IjoiXC90XC9rYWxiZS5jby5pZFwvTW9kdWxlQVBJXC92MSIsInB1Ymxpc2hlciI6Im11aGFtbWFkLmRpYW5pQGthbGJlLmNvLmlkIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImthbGJlLmNvLmlkIiwibmFtZSI6IlVzZXJQcm9maWxlQVBJIiwiY29udGV4dCI6IlwvdFwva2FsYmUuY28uaWRcL1VzZXJQcm9maWxlQVBJXC92MSIsInB1Ymxpc2hlciI6Im11aGFtbWFkLmRpYW5pQGthbGJlLmNvLmlkIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImthbGJlLmNvLmlkIiwibmFtZSI6IlNha2Ftb3JJbmNlbnRpdmUiLCJjb250ZXh0IjoiXC90XC9rYWxiZS5jby5pZFwvU2FrYW1vckluY2VudGl2ZVwvdjEiLCJwdWJsaXNoZXIiOiJub2Jvbi5hbmRyYUBrYWxiZS5jby5pZCIsInZlcnNpb24iOiJ2MSIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifSx7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJrYWxiZS5jby5pZCIsIm5hbWUiOiJTYWthbW9yQmVuZWZpdHMiLCJjb250ZXh0IjoiXC90XC9rYWxiZS5jby5pZFwvU2FrYW1vckJlbmVmaXRzXC92MSIsInB1Ymxpc2hlciI6Im5vYm9uLmFuZHJhQGthbGJlLmNvLmlkIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImthbGJlLmNvLmlkIiwibmFtZSI6IkRheU9mZiIsImNvbnRleHQiOiJcL3RcL2thbGJlLmNvLmlkXC9EYXlPZmZcL3YxIiwicHVibGlzaGVyIjoibXVoYW1tYWQuaGlkYXlhdHVsbDFAa2FsYmUuY28uaWQiLCJ2ZXJzaW9uIjoidjEiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoia2FsYmUuY28uaWQiLCJuYW1lIjoiR2xvYmFsLUF1dGhlbnRpY2F0aW9uIiwiY29udGV4dCI6IlwvdFwva2FsYmUuY28uaWRcL2F1dGhlbnRpY2F0aW9uXC92MSIsInB1Ymxpc2hlciI6Im1vaGFtbWFkLmFtaXJydWRpbkBrYWxiZS5jby5pZCIsInZlcnNpb24iOiJ2MSIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifSx7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJrYWxiZS5jby5pZCIsIm5hbWUiOiJOb3RpZmljYXRpb24iLCJjb250ZXh0IjoiXC90XC9rYWxiZS5jby5pZFwvTm90aWZpY2F0aW9uXC92MSIsInB1Ymxpc2hlciI6InJpemtpYW5hbmRhLnByYWRpbGxhaEBrYWxiZS5jby5pZCIsInZlcnNpb24iOiJ2MSIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifSx7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJrYWxiZS5jby5pZCIsIm5hbWUiOiJBcHByb3ZhbEFQSSIsImNvbnRleHQiOiJcL3RcL2thbGJlLmNvLmlkXC9BcHByb3ZhbEFQSVwvdjEiLCJwdWJsaXNoZXIiOiJtdWhhbW1hZC5kaWFuaUBrYWxiZS5jby5pZCIsInZlcnNpb24iOiJ2MSIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifV0sInBlcm1pdHRlZElQIjoiIiwiaWF0IjoxNjMxNzYyNTUwLCJqdGkiOiJmYTFhZDdmYS03YzlmLTRlMmMtOTVkYi03YzU5NTljNTQzMGUifQ==.Xm8X2McpUi-k7UYCyBtqSSsfiKWrR7xpT_DgW5ksnr70GScxLYmYMJAtKZQxF6AmedR1jAse384Ilmtt3L6oR7CRiLEG-ur3qJB9VDcqI-NlEbrYrzhekx5FKeY2gQ6sCq-4zAo9Ls6IF6ksy6T58ZFYwNYk55OYoIRr3BtGyeYf5Zx7I-N0rtjX4bfQrdnnXPGceUDqA1-ZJiu2ccuJjigYRaDjxHjEjAfNgLD1ZUqVwYxmPF5OLDb8mM59hrYuw4E4sqcAyYMxBVbHllxtXN1bnSf1A7VJnKOy5IvafHzhSQxY6BKMUnt3UDWleGib1lVHgzI3D06lYvE3Pj5tMw==";


/***/ }),

/***/ "./helper.js":
/*!*******************!*\
  !*** ./helper.js ***!
  \*******************/
/*! exports provided: getMenu, getAuth, onLogin, postChangePass, forgotPassword, getProductSearch, getSearchJenisChannel, getProductAvgSales, getSearchOutlet, getBrand, getProductByJenisChannel, getKontenWorkVisit, getHnaAvg, postProfilePic, viewProfilePic, getSmrByCabang, viewOutletClass, getNotificationbyUsername, getPimcaByCabang, getHargaEceran, getPlanList, getPlanId, getPosm, getPlanHistory, submitVisitPlan, submitVisitPlanDposm, getInvoiceDataPosm, getInvoiceData, getPlanMonthlyHistory, viewFile, getMasterVisitPlan, deleteMasterPlanSMR, saveMasterPlanVisit, getApproval, getPlanById, getRevisePlanListSmr, updateDataPosmPlan, updateDataProdukPlan, insertFilePlan, getVisitPlanProduct, submitVisitUnplan, submitVisitUnplanDposm, getInvoiceDataUnplan, getInvoiceDataPosmUnplan, getUnplanMonthlyHistory, viewFileUnplan, getUnplanNearMe, getUnplanById, getReviseUnPlanListSmr, updateDataPosmUnplan, updateDataProdukUnplan, insertFileUnplan, getUnPlanProducts, submitVisitSpreading, submitVisitSpreadingDposm, getInvoiceDataSpreading, getInvoiceDataPosmSpreading, viewFileSpreading, getSpreadingMonthlyHistory, getSpreadingById, getReviseSpreadingListSmr, updateDataPosmSpreading, updateDataProdukSpreading, insertFileSpreading, getSpreadingProduct, getAllWorkVisit, getWorkVisitMonthlyHistory, getWorkVisitRating, submitWorkVisit, getMasterWorkVisit, saveMasterWorkVisit, deleteMasterWorkVisit, getDayProgram, getDayPromo, getMonthProgram, getMonthPromo, getAllAnnouncement, updateReadAnnouncement, getSalesTargetSMR, getSalesTarget75SMR, getProduktifitas, getFrontliner, getNoo, getWorkDay, getKpiInventiveMonthlySMR, getKpiInventiveMonthlyPimca, getIncentiveYearly, getSalesTargetPimca, getSalesTarget75Pimca, getFrontlinerPimca, getBenefitCodeCabang, approvalReject, approvalRevise, approvalApprove, approvalSubmit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMenu", function() { return getMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuth", function() { return getAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLogin", function() { return onLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postChangePass", function() { return postChangePass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forgotPassword", function() { return forgotPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductSearch", function() { return getProductSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchJenisChannel", function() { return getSearchJenisChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductAvgSales", function() { return getProductAvgSales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchOutlet", function() { return getSearchOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrand", function() { return getBrand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductByJenisChannel", function() { return getProductByJenisChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKontenWorkVisit", function() { return getKontenWorkVisit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHnaAvg", function() { return getHnaAvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postProfilePic", function() { return postProfilePic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewProfilePic", function() { return viewProfilePic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSmrByCabang", function() { return getSmrByCabang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewOutletClass", function() { return viewOutletClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotificationbyUsername", function() { return getNotificationbyUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPimcaByCabang", function() { return getPimcaByCabang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHargaEceran", function() { return getHargaEceran; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlanList", function() { return getPlanList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlanId", function() { return getPlanId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosm", function() { return getPosm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlanHistory", function() { return getPlanHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitVisitPlan", function() { return submitVisitPlan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitVisitPlanDposm", function() { return submitVisitPlanDposm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInvoiceDataPosm", function() { return getInvoiceDataPosm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInvoiceData", function() { return getInvoiceData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlanMonthlyHistory", function() { return getPlanMonthlyHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewFile", function() { return viewFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMasterVisitPlan", function() { return getMasterVisitPlan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMasterPlanSMR", function() { return deleteMasterPlanSMR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveMasterPlanVisit", function() { return saveMasterPlanVisit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApproval", function() { return getApproval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlanById", function() { return getPlanById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRevisePlanListSmr", function() { return getRevisePlanListSmr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDataPosmPlan", function() { return updateDataPosmPlan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDataProdukPlan", function() { return updateDataProdukPlan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertFilePlan", function() { return insertFilePlan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVisitPlanProduct", function() { return getVisitPlanProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitVisitUnplan", function() { return submitVisitUnplan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitVisitUnplanDposm", function() { return submitVisitUnplanDposm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInvoiceDataUnplan", function() { return getInvoiceDataUnplan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInvoiceDataPosmUnplan", function() { return getInvoiceDataPosmUnplan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnplanMonthlyHistory", function() { return getUnplanMonthlyHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewFileUnplan", function() { return viewFileUnplan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnplanNearMe", function() { return getUnplanNearMe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnplanById", function() { return getUnplanById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReviseUnPlanListSmr", function() { return getReviseUnPlanListSmr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDataPosmUnplan", function() { return updateDataPosmUnplan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDataProdukUnplan", function() { return updateDataProdukUnplan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertFileUnplan", function() { return insertFileUnplan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnPlanProducts", function() { return getUnPlanProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitVisitSpreading", function() { return submitVisitSpreading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitVisitSpreadingDposm", function() { return submitVisitSpreadingDposm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInvoiceDataSpreading", function() { return getInvoiceDataSpreading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInvoiceDataPosmSpreading", function() { return getInvoiceDataPosmSpreading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewFileSpreading", function() { return viewFileSpreading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpreadingMonthlyHistory", function() { return getSpreadingMonthlyHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpreadingById", function() { return getSpreadingById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReviseSpreadingListSmr", function() { return getReviseSpreadingListSmr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDataPosmSpreading", function() { return updateDataPosmSpreading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDataProdukSpreading", function() { return updateDataProdukSpreading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertFileSpreading", function() { return insertFileSpreading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpreadingProduct", function() { return getSpreadingProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllWorkVisit", function() { return getAllWorkVisit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorkVisitMonthlyHistory", function() { return getWorkVisitMonthlyHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorkVisitRating", function() { return getWorkVisitRating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitWorkVisit", function() { return submitWorkVisit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMasterWorkVisit", function() { return getMasterWorkVisit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveMasterWorkVisit", function() { return saveMasterWorkVisit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMasterWorkVisit", function() { return deleteMasterWorkVisit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDayProgram", function() { return getDayProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDayPromo", function() { return getDayPromo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonthProgram", function() { return getMonthProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonthPromo", function() { return getMonthPromo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllAnnouncement", function() { return getAllAnnouncement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateReadAnnouncement", function() { return updateReadAnnouncement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSalesTargetSMR", function() { return getSalesTargetSMR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSalesTarget75SMR", function() { return getSalesTarget75SMR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProduktifitas", function() { return getProduktifitas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFrontliner", function() { return getFrontliner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNoo", function() { return getNoo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorkDay", function() { return getWorkDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKpiInventiveMonthlySMR", function() { return getKpiInventiveMonthlySMR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKpiInventiveMonthlyPimca", function() { return getKpiInventiveMonthlyPimca; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIncentiveYearly", function() { return getIncentiveYearly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSalesTargetPimca", function() { return getSalesTargetPimca; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSalesTarget75Pimca", function() { return getSalesTarget75Pimca; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFrontlinerPimca", function() { return getFrontlinerPimca; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBenefitCodeCabang", function() { return getBenefitCodeCabang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "approvalReject", function() { return approvalReject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "approvalRevise", function() { return approvalRevise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "approvalApprove", function() { return approvalApprove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "approvalSubmit", function() { return approvalSubmit; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./constant.js");


var now = new Date();
var date = now.getDate();
var month = now.getMonth() + 1;
var year = now.getFullYear();

function compare(a, b) {
  if (a.nomor < b.nomor) {
    return -1;
  }

  if (a.nomor > b.nomor) {
    return 1;
  }

  return 0;
} // USER =============================================================================================================================


const getMenu = userData => {
  if (true) {
    console.log("dev");
  } else {}

  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_USER"] + `/User/GetMenu?username=${userData.email}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getAuth = userData => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_USER"] + `/User/GetAuthorize?username=${userData.username}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const onLogin = values => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_USER"] + `/User/Login?username=${values.username}&&password=${values.password}`, {
    method: "POST",
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
    setWrongUser(true);
  });
};

const postChangePass = data => {
  // console.log(data);
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_USER"] + "/User/ChangePassword", {
    method: "PUT",
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"],
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const forgotPassword = email => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_USER"] + `/User/ForgotPassword?email=${email}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
}; // MASTER ============================================================================================================================


const getPosm = () => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_MASTER"] + `/MasterDataLokal/GetAllDisplayProgram`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getProductSearch = search => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_MASTER"] + `/MasterData/GetProdukLike/${search}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getProductByJenisChannel = jenisChannelId => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_MASTER"] + `/MasterDataLokal/GetProdukJenisChannelBy/${jenisChannelId}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getProductAvgSales = (productCode, outletCode) => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_MASTER"] + `/MasterData/GetAvgSales30DaysByOutletAndProduct?productCode=${productCode}&outletCode=${outletCode}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getHnaAvg = (productCode, outletCode) => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_MASTER"] + `/MasterDataLokal/GetHnaAndAvgSalesBy/${productCode}/${outletCode}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getSearchJenisChannel = (userData, search, modul) => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_MASTER"] + `/MasterDataLokal/GetJenisChannelBy?username=${userData.username}&teks=${search}&modul=${modul}`, // `/MasterDataLokal/GetJenisChannelBy?username=abubakar&teks=${search}&modul=${modul}`,
  {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    console.log(data);
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getSearchOutlet = (jenisChannelId, userData, search) => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_MASTER"] + `/MasterDataLokal/GetOutletBy/${jenisChannelId}?username=${userData.username}&teks=${search}`, // `/MasterDataLokal/GetOutletBy/${jenisChannelId}?username=abubakar&teks=${search}`,
  {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getBrand = () => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_MASTER"] + `/MasterDataLokal/GetAllBrand`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getKontenWorkVisit = () => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_MASTER"] + `/MasterDataLokal/GetAllKontenWorkVisit`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getSalesTargetSMR = (userData, month, year) => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_MASTER"] + `/MasterDataLokal/GetSalesTargetBy/${year}/${month}?usernameSmr=${userData.username}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getSalesTarget75SMR = (userData, month, year) => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_MASTER"] + `/MasterDataLokal/GetSalesTarget75PersenBy/${year}/${month}?usernameSmr=${userData.username}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getHargaEceran = produkCode => {
  return fetch(`https://m-one.kalbe.co.id:8243/t/kalbe.co.id/SakamorMasterData/v1/api/MasterDataLokal/GetHargaEceranByKodeProduk/${produkCode}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const postProfilePic = (userData, file) => {
  const formdata = new FormData();
  formdata.append("file", file);
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_MASTER"] + `/MasterDataLokal/ChangeProfilePicture?username=${userData.username}&createdBy=API&updatedBy=API`, {
    method: "PUT",
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    },
    body: formdata
  }).then(response => {
    return response.json();
  }).then(data => {
    console.log("balikan inserfile", data);
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const viewProfilePic = username => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_MASTER"] + `/MasterDataLokal/ViewProfilePicture?username=${username}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    if (response.status !== 404) {
      return response.blob();
    } else {
      return response;
    }
  }).then(function (data) {
    var outside = URL.createObjectURL(data);
    return outside;
  }).catch(err => {
    console.log(err);
  });
};

const viewOutletClass = outletID => {
  console.log(outletID);
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_MASTER"] + `/MasterDataLokal/GetOutletClassification/${outletID}`, // API_URL + API_MASTER + `/MasterDataLokal/GetOutletClassification/47154`,
  {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(function (data) {
    console.log(data);

    if (data.status == 404) {} else {
      return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_MASTER"] + `/MasterDataLokal/ViewImage/${data.id}`, {
        headers: {
          apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
        }
      }).then(response => {
        if (response.status !== 404) {
          return response.blob();
        } else {
          return response;
        }
      }).then(function (data) {
        var outside = URL.createObjectURL(data);
        return outside;
      }).catch(err => {
        console.log(err);
      });
    }
  }).catch(err => {
    console.log(err);
  });
}; // VISIT PLAN ======================================================================================================================


const getPlanList = userData => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_PLAN"] + `/ActivityVisitPlan/GetActivityVisitPlanBy?username=${userData.username}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    var res = data.filter(val => {
      return val.isCheckOut === false;
    });
    return res;
  }).catch(err => {
    console.log(err);
  });
};

const getPlanId = id => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_PLAN"] + `/MasterVisitPlan/GetMasterVisitPlanBy?parameter=${year}-${month}-${date}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(planList => {
    if (planList.length != 0) {
      return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_PLAN"] + `/MasterVisitPlan/GetMasterVisitPlanById/${id}`, {
        headers: {
          apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
        }
      }).then(response => {
        return response.json();
      }).then(data => {
        var samePlan = planList.filter(val => {
          return val.id === data.id;
        });
        return {
          samePlan,
          data
        };
      }).catch(err => {
        console.log(err);
      });
    } else {
      return planList;
    }
  }).catch(err => {
    console.log(err);
  });
};

const getPlanHistory = userData => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_PLAN"] + `/ActivityVisitPlan/GetActivityVisitPlanBy?username=${userData.username}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    var res = data.filter(val => {
      return val.isCheckOut === true;
    });
    return res;
  }).catch(err => {
    console.log(err);
  });
};

const submitVisitPlan = data => {
  // console.log(data);
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_PLAN"] + "/ActivityVisitPlan/SaveAllActivityVisitPlan", {
    method: "POST",
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"],
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => {
    return response.json();
  }).then(data => {
    console.log("baikan saveall", data);
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const submitVisitPlanDposm = (dposm, file) => {
  // console.log(dposm, file);
  const formdata = new FormData();
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_PLAN"] + "/ActivityVisitPlanDPOSM/SaveActivityVisitPlanDposm", {
    method: "POST",
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"],
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dposm)
  }).then(response => {
    return response.json();
  }).then(data => {
    // console.log("balikan psom", data);
    formdata.append("file", file);
    return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_PLAN"] + `/ActivityVisitPlanDPOSM/InsertFileBy?id=${data.id}&namaFile=${data.namaFile}`, {
      method: "POST",
      headers: {
        apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
      },
      body: formdata
    }).then(response => {
      return response.json();
    }).then(data => {
      // console.log("balikan inserfile", data);
      return data;
    }).catch(err => {
      console.log(err);
    });
  }).catch(err => {
    console.log(err);
  });
};

const getInvoiceData = visitPlanId => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_PLAN"] + `/ActivityVisitPlan/GetProdukSuratPesanan/${visitPlanId}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getInvoiceDataPosm = visitPlanId => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_PLAN"] + `/ActivityVisitPlanDPOSM/GetActivityVisitPlanDPosmBy/${visitPlanId}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    var sortData = data.sort(compare);
    return sortData;
  }).catch(err => {
    console.log(err);
  });
};

const viewFile = id => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_PLAN"] + `/ActivityVisitPlanDPOSM/ViewFile/${id}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.blob();
  }).then(function (data) {
    var outside = URL.createObjectURL(data);
    return outside;
  }).catch(err => {
    console.log(err);
  });
};

const getPlanMonthlyHistory = userData => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_PLAN"] + `/ActivityVisitPlan/GetHistoryActivityVisitPlanBy?username=${userData.username}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    data.sort(function (a, b) {
      var dateA = new Date(a.tanggal),
          dateB = new Date(b.tanggal);
      return dateB - dateA;
    });
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getMasterVisitPlan = userData => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_PLAN"] + `/MasterVisitPlan/GetMasterVisitPlanByUsername?username=${userData.username}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    data.sort(function (a, b) {
      var dateA = new Date(a.tanggal),
          dateB = new Date(b.tanggal);
      return dateB - dateA;
    });
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getApproval = userData => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_PLAN"] + // `/ActivityVisitPlan/GetDocumentVisitForApproval/${userData.kodeCabang}`,
  `/ActivityVisitPlan/GetDocumentVisitForApproval/32`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    data.sort(function (a, b) {
      var dateA = new Date(a.tanggal),
          dateB = new Date(b.tanggal);
      return dateB - dateA;
    });
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getRevisePlanListSmr = userData => {
  return fetch(`https://m-one.kalbe.co.id:8243/t/kalbe.co.id/SakamorActivityVisitPlan/v1/api/ActivityVisitPlan/GetActivityVisitPlanByStatus/Revise?username=${userData.username}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    data.sort(function (a, b) {
      var dateA = new Date(a.tanggal),
          dateB = new Date(b.tanggal);
      return dateB - dateA;
    });
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const deleteMasterPlanSMR = id => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_PLAN"] + `/MasterVisitPlan/DeleteMasterVisitPlan/${id}`, {
    method: "DELETE",
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return console.log(response);
  }).catch(err => {
    console.log(err);
  });
};

const saveMasterPlanVisit = data => {
  // console.log(data);
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_PLAN"] + "/MasterVisitPlan/SaveActivityVisitPlan", {
    method: "POST",
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"],
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => {
    return response.json();
  }).then(data => {
    console.log("baikan saveall", data);
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getPlanById = id => {
  return fetch(`https://m-one.kalbe.co.id:8243/t/kalbe.co.id/SakamorActivityVisitPlan/v1/api/ActivityVisitPlan/GetActivityVisitPlanById/${id}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const updateDataPosmPlan = (id, dposm) => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_PLAN"] + `/ActivityVisitPlanDPOSM/ActivityVisitPlanDPOSM/${id}`, {
    method: "PUT",
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"],
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dposm)
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const updateDataProdukPlan = data => {
  return fetch(`https://m-one.kalbe.co.id:8243/t/kalbe.co.id/SakamorActivityVisitPlan/v1/api/ActivityVisitPlanDProduct/UpdateAllVisitPlanProduct`, {
    method: "PUT",
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"],
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const insertFilePlan = (id, file) => {
  const formdata = new FormData();
  formdata.append("file", file);
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_PLAN"] + `/ActivityVisitPlanDPOSM/InsertFileBy?id=${id}&namaFile=${file.name}`, {
    method: "POST",
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    },
    body: formdata
  }).then(response => {
    return response.json();
  }).then(data => {
    // console.log("balikan inserfile", data);
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getVisitPlanProduct = id => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_PLAN"] + `/ActivityVisitPlanDProduct/GetVisitPlanProductBy?visitPlanId=${id}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
}; // VISIT UNPLAN =================================================================================================================


const submitVisitUnplan = data => {
  // console.log(data);
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_UNPLAN"] + `/SakamorActivityVisitUnPlan/SaveAllActivityVisitUnPlan`, {
    method: "POST",
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"],
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => {
    return response.json();
  }).then(data => {
    console.log("baikan saveall", data);
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const submitVisitUnplanDposm = (dposm, file) => {
  // console.log(dposm, file);
  const formdata = new FormData();
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_UNPLAN"] + `/SakamorActivityVisitUnPlanDPOSM/SaveActivityVisitUnPlanDposm`, {
    method: "POST",
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"],
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dposm)
  }).then(response => {
    return response.json();
  }).then(data => {
    console.log("balikan psom", data);
    formdata.append("file", file);
    return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_UNPLAN"] + `/SakamorActivityVisitUnPlanDPOSM/InsertFileBy?id=${data.id}&namaFile=${data.namaFile}`, {
      method: "POST",
      headers: {
        apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
      },
      body: formdata
    }).then(response => {
      return response.json();
    }).then(data => {
      console.log("balikan inserfile", data);
      return data;
    }).catch(err => {
      console.log(err);
    });
  }).catch(err => {
    console.log(err);
  });
};

const getInvoiceDataUnplan = visitPlanId => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_UNPLAN"] + `/SakamorActivityVisitUnPlan/GetProdukSuratPesanan/${visitPlanId}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getUnplanById = id => {
  return fetch(`https://m-one.kalbe.co.id:8243/t/kalbe.co.id/SakamorActivityVisitUnPlan/v1/api/SakamorActivityVisitUnPlan/GetActivityVisitUnPlanById/${id}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getInvoiceDataPosmUnplan = visitUnplanId => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_UNPLAN"] + `/SakamorActivityVisitUnPlanDPOSM/GetActivityVisitUnPlanDPosmBy/${visitUnplanId}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    var sortData = data.sort(compare);
    return sortData;
  }).catch(err => {
    console.log(err);
  });
};

const updateDataPosmUnplan = (id, dposm) => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_UNPLAN"] + `/SakamorActivityVisitUnPlanDPOSM/ActivityVisitUnPlanDPOSM/${id}`, {
    method: "PUT",
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"],
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dposm)
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const updateDataProdukUnplan = data => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_UNPLAN"] + `/SakamorActivityVisitUnPlanProduct/UpdateAllUnPlanProduct`, {
    method: "PUT",
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"],
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const insertFileUnplan = (id, file) => {
  const formdata = new FormData();
  formdata.append("file", file);
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_UNPLAN"] + `/SakamorActivityVisitUnPlanDPOSM/InsertFileBy?id=${id}&namaFile=${file.name}`, {
    method: "POST",
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    },
    body: formdata
  }).then(response => {
    return response.json();
  }).then(data => {
    console.log("balikan inserfile", data);
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const viewFileUnplan = id => {
  console.log(id);
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_UNPLAN"] + `/SakamorActivityVisitUnPlanDPOSM/ViewFile/${id}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.blob();
  }).then(function (data) {
    var outside = URL.createObjectURL(data);
    return outside;
  }).catch(err => {
    console.log(err);
  });
};

const getUnplanMonthlyHistory = userData => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_UNPLAN"] + `/SakamorActivityVisitUnPlan/GetHistoryActivityVisitUnPlanBy?username=${userData.username}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    data.sort(function (a, b) {
      var dateA = new Date(a.tanggal),
          dateB = new Date(b.tanggal);
      return dateB - dateA;
    });
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getUnplanNearMe = () => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_MASTER"] + `/MasterData/GetOutletNearMe/-6.123456/12.987654`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getReviseUnPlanListSmr = userData => {
  return fetch(`https://m-one.kalbe.co.id:8243/t/kalbe.co.id/SakamorActivityVisitUnPlan/v1/api/SakamorActivityVisitUnPlan/GetActivityVisitUnPlanByStatus/revise?username=${userData.username}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    data.sort(function (a, b) {
      var dateA = new Date(a.tanggal),
          dateB = new Date(b.tanggal);
      return dateB - dateA;
    });
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getUnPlanProducts = id => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_UNPLAN"] + `/SakamorActivityVisitUnPlanProduct/GetUnPlanProductsBy?unPlanId=${id}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
}; // SPREADING =======================================================================================================================


const submitVisitSpreading = data => {
  // console.log(data);
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_SPREADING"] + `/ActivitySpreading/SaveAllActivitySpreading`, {
    method: "POST",
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"],
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => {
    return response.json();
  }).then(data => {
    console.log("baikan saveall", data);
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const submitVisitSpreadingDposm = (dposm, file) => {
  // console.log(dposm, file);
  const formdata = new FormData();
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_SPREADING"] + `/ActivitySpreadingDPOSM/SaveActivitySpreadingDposm`, {
    method: "POST",
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"],
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dposm)
  }).then(response => {
    return response.json();
  }).then(data => {
    console.log("balikan psom", data);
    formdata.append("file", file);
    return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_SPREADING"] + `/ActivitySpreadingDPOSM/InsertFileBy?id=${data.id}&namaFile=${data.namaFile}`, {
      method: "POST",
      headers: {
        apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
      },
      body: formdata
    }).then(response => {
      return response.json();
    }).then(data => {
      console.log("balikan inserfile", data);
      return data;
    }).catch(err => {
      console.log(err);
    });
  }).catch(err => {
    console.log(err);
  });
};

const getInvoiceDataSpreading = visitPlanId => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_SPREADING"] + `/ActivitySpreading/GetProdukSuratPesanan/${visitPlanId}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getInvoiceDataPosmSpreading = visitUnplanId => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_SPREADING"] + `/ActivitySpreadingDPOSM/GetActivityVisitUnPlanDPosmBy/${visitUnplanId}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    var sortData = data.sort(compare);
    return sortData;
  }).catch(err => {
    console.log(err);
  });
};

const viewFileSpreading = id => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_SPREADING"] + `/ActivitySpreadingDPOSM/ViewFile/${id}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.blob();
  }).then(function (data) {
    var outside = URL.createObjectURL(data);
    return outside;
  }).catch(err => {
    console.log(err);
  });
};

const getSpreadingMonthlyHistory = userData => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_SPREADING"] + `/ActivitySpreading/GetHistoryActivitySpreadingBy?username=${userData.username}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    data.sort(function (a, b) {
      var dateA = new Date(a.tanggal),
          dateB = new Date(b.tanggal);
      return dateB - dateA;
    });
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getSpreadingById = id => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_SPREADING"] + `/ActivitySpreading/GetActivitySpreadingById/${id}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getReviseSpreadingListSmr = userData => {
  return fetch(`https://m-one.kalbe.co.id:8243/t/kalbe.co.id/SakamorActivitySpreading/v1/api/ActivitySpreading/GetActivitySpreadingByStatus/Revise?username=${userData.username}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    data.sort(function (a, b) {
      var dateA = new Date(a.tanggal),
          dateB = new Date(b.tanggal);
      return dateB - dateA;
    });
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const updateDataPosmSpreading = (id, dposm) => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_SPREADING"] + `/ActivitySpreadingDPOSM/ActivitySpreadingDposm/${id}`, {
    method: "PUT",
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"],
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dposm)
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const updateDataProdukSpreading = data => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_SPREADING"] + `/ActivitySpreadingDProduct/UpdateAllSpreadingProduct`, {
    method: "PUT",
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"],
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const insertFileSpreading = (id, file) => {
  const formdata = new FormData();
  formdata.append("file", file);
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_SPREADING"] + `/ActivitySpreadingDPOSM/InsertFileBy?id=${id}&namaFile=${file.name}`, {
    method: "POST",
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    },
    body: formdata
  }).then(response => {
    return response.json();
  }).then(data => {
    console.log("balikan inserfile", data);
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getSpreadingProduct = id => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_SPREADING"] + `/ActivitySpreadingDProduct/GetSpreadingProductBy?spreadingId=${id}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
}; // WORK VISIT ================================================================================================================================


const getAllWorkVisit = userData => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_WORK_VISIT"] + `/ActivityWorkVisit/GetActivityWorkVisitBy?username=${userData.username}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getWorkVisitMonthlyHistory = userData => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_WORK_VISIT"] + `/ActivityWorkVisit/GetHistoryActivityWorkVisitBy?username=${userData.username}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    data.sort(function (a, b) {
      var dateA = new Date(a.tanggal),
          dateB = new Date(b.tanggal);
      return dateB - dateA;
    });
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getWorkVisitRating = id => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_WORK_VISIT"] + `/ActivityWorkVisitRating/GetActivityWorkVisitRatingBy/${id}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const submitWorkVisit = data => {
  // console.log(data);
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_WORK_VISIT"] + "/ActivityWorkVisit/SaveAllActivityWorkVisit", {
    method: "POST",
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"],
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => {
    return response.json();
  }).then(data => {
    console.log("baikan saveall", data);
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getMasterWorkVisit = (userData, date) => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_WORK_VISIT"] + `/MasterPlanWorkVisit/GetMasterPlanWorkVisitBy/${date}?username=${userData.username}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const saveMasterWorkVisit = data => {
  // console.log(data);
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_WORK_VISIT"] + "/MasterPlanWorkVisit/SaveMasterPlanWorkVisit", {
    method: "POST",
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"],
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => {
    return response.json();
  }).then(data => {
    console.log("baikan saveall", data);
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const deleteMasterWorkVisit = id => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_WORK_VISIT"] + `/MasterPlanWorkVisit/DeleteMasterPlanWorkVisit/${id}`, {
    method: "DELETE",
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return console.log(response);
  }).catch(err => {
    console.log(err);
  });
}; // Calendar ================================================================================================================================


const getDayPromo = date => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_CALENDAR_PROMO"] + `/SakamorInfoPromo/GetInfoPromoByDate/${date}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getDayProgram = date => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_CALENDAR_PROGRAM"] + `/SakamorKalenderProgram/GetKalenderProgramByDate/${date}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getMonthPromo = date => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_CALENDAR_PROMO"] + `/SakamorInfoPromo/GetInfoPromoByMonthYear/${date}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getMonthProgram = date => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_CALENDAR_PROGRAM"] + `/SakamorKalenderProgram/GetKalenderProgramByMonthYear/${date}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
}; // Announcement ======================================================================================================================================


const getAllAnnouncement = kodeCabang => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_ANNOUNCEMENT"] + // `/SakamorAnnouncement/GetAnnouncementByUser?username=${userData.username}`,
  `/SakamorAnnouncement/GetAnnouncementByCabang/${kodeCabang}`, // `/SakamorAnnouncement/GetAnnouncementByCabang/14`,
  {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const updateReadAnnouncement = (id, data) => {
  return fetch(`https://m-one.kalbe.co.id:8243/t/kalbe.co.id/SakamorAnnouncement/v1/api/SakamorAnnouncement/UpdateAnnouncementStatus/${id}`, {
    method: "PUT",
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"],
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => {
    return response;
  }).catch(err => {
    console.log(err);
  });
}; // INCENTIVE =====================================================================================================================================================================================


const getProduktifitas = (userData, month, year) => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_INCENTIVE"] + `/SakamorIncentive/GetProduktifitasByUserPeriode/${month}/${year}?username=${userData.username}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getFrontliner = (userData, month, year) => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_INCENTIVE"] + `/Frontliner/GetByUserPeriode/${month}/${year}?username=${userData.username}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getNoo = (userData, month, year) => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_INCENTIVE"] + `/TargetNOO/GetSelsNOOByUserPeriode/${month}/${year}?username=${userData.username}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getWorkDay = () => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_INCENTIVE"] + `/SakamorIncentive/GetWorkingDay/01`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getKpiInventiveMonthlySMR = (userData, date) => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_INCENTIVE"] + `/KpiIncentiveMonthly/GetIncentiveCalculator/${moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format("YYYY-MM")}-01/SMR?usernameSMR=${userData.username}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getKpiInventiveMonthlyPimca = (userData, date) => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_INCENTIVE"] + `/KpiIncentiveMonthly/IncentiveCalculatorPimca/${userData.kodeCabang}/${moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format("YYYY-MM")}-01/ABM`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getIncentiveYearly = userData => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_INCENTIVE"] + `/KpiIncentiveMonthly/GetRekapInsentifBulanan/${moment__WEBPACK_IMPORTED_MODULE_0___default()(now).format("YYYY")}?username=${userData.username}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getSalesTargetPimca = (userData, month, year) => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_MASTER"] + `/MasterDataLokal/GetSalesTargetPimcaByCabang/${userData.kodeCabang}/${year}/${month}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getSalesTarget75Pimca = (userData, month, year) => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_MASTER"] + `/MasterDataLokal/GetSalesTargetPimca75ByCabang/${userData.kodeCabang}/${year}/${month}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getFrontlinerPimca = (userData, month, year) => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_INCENTIVE"] + `/Frontliner/GetFrontlinerPimca/${userData.kodeCabang}/${month}/${year}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getSmrByCabang = (cabang, teks) => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_MASTER"] + // `/MasterDataLokal/GetSmrOutletByCabang/${cabang}?teks=${teks}`,
  `/MasterDataLokal/GetSmrByCabang/${cabang}?teks=${teks}`, // `/MasterDataLokal/GetSmrOutletByCabang/14?teks=${teks}`,
  {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    console.log(data);
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getNotificationbyUsername = username => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_MASTER"] + // `/MasterDataLokal/GetNotifikasiByUser?username=dian%40gmail.com`,
  `/MasterDataLokal/GetNotifikasiByUser?username=${username}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    console.log(data);
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getPimcaByCabang = userData => {
  return fetch(`https://m-one.kalbe.co.id:8243/t/kalbe.co.id/SakamorMasterData/v1/api/MasterDataLokal/GetPimcaBy/${userData.kodeCabang}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    console.log(data);
    return data;
  }).catch(err => {
    console.log(err);
  });
}; // BENEFIT ==============================================================================================================================================


const getBenefitCodeCabang = userData => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_BENEFIT"] + `/Benefits/GetBenefitsByKodeCabang/${userData.kodeCabang}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  });
}; // APPROVAL ==============================================================================================================================================


const approvalReject = (data, modul, id, userData) => {
  // console.log(data);
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_APPROVAL"] + "/approval/transaction/Reject", {
    method: "PUT",
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"],
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => {
    if (modul === "Plan") {
      return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_PLAN"] + `/ActivityVisitPlan/UpdateStatusVisitPlan/${id}?status=Rejected&updatedBy=${userData.username}`, {
        method: "PUT",
        headers: {
          apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"],
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(response => {
        return response.json();
      }).catch(err => {
        console.log(err);
      });
    } else if (modul === "UnPlan") {
      return fetch( // API_URL +
      //   API_VISIT_PLAN +
      //   `/ActivityVisitPlan/UpdateStatusVisitPlan/${id}?status=Rejected&updatedBy=${userData.username}`,
      `https://m-one.kalbe.co.id:8243/t/kalbe.co.id/SakamorActivityVisitUnPlan/v1/api/SakamorActivityVisitUnPlan/UpdateStatusVisitUnPlan/${id}?status=Rejected&updatedBy=${userData.username}`, {
        method: "PUT",
        headers: {
          apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"],
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(response => {
        return response.json();
      }).catch(err => {
        console.log(err);
      });
    } else if (modul === "Spreading") {
      return fetch(`https://m-one.kalbe.co.id:8243/t/kalbe.co.id/SakamorActivitySpreading/v1/api/ActivitySpreading/UpdateStatusSpreading/${id}?status=Rejected&updatedBy=${userData.username}`, {
        method: "PUT",
        headers: {
          apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"],
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(response => {
        return response.json();
      }).catch(err => {
        console.log(err);
      });
    }

    return response.json();
  }).catch(err => {
    console.log(err);
  });
};

const approvalRevise = (data, modul, id, userData) => {
  // console.log(data);
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_APPROVAL"] + "/approval/transaction/Reject", {
    method: "PUT",
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"],
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => {
    if (modul === "Plan") {
      return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_PLAN"] + `/ActivityVisitPlan/UpdateStatusVisitPlan/${id}?status=Revise&updatedBy=${userData.username}`, {
        method: "PUT",
        headers: {
          apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"],
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(response => {
        return response.json();
      }).catch(err => {
        console.log(err);
      });
    } else if (modul === "UnPlan") {
      return fetch( // API_URL +
      //   API_VISIT_PLAN +
      //   `/ActivityVisitPlan/UpdateStatusVisitPlan/${id}?status=Revise&updatedBy=${userData.username}`,
      `https://m-one.kalbe.co.id:8243/t/kalbe.co.id/SakamorActivityVisitUnPlan/v1/api/SakamorActivityVisitUnPlan/UpdateStatusVisitUnPlan/${id}?status=Revise&updatedBy=${userData.username}`, {
        method: "PUT",
        headers: {
          apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"],
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(response => {
        return response.json();
      }).catch(err => {
        console.log(err);
      });
    } else if (modul === "Spreading") {
      return fetch(`https://m-one.kalbe.co.id:8243/t/kalbe.co.id/SakamorActivitySpreading/v1/api/ActivitySpreading/UpdateStatusSpreading/${id}?status=Revise&updatedBy=${userData.username}`, {
        method: "PUT",
        headers: {
          apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"],
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(response => {
        return response.json();
      }).catch(err => {
        console.log(err);
      });
    }

    return response.json();
  }).catch(err => {
    console.log(err);
  });
};

const approvalApprove = (data, modul, id, userData) => {
  // console.log(data);
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_APPROVAL"] + "/approval/transaction/Approve", {
    method: "PUT",
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"],
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => {
    if (modul === "Plan") {
      return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_PLAN"] + `/ActivityVisitPlan/UpdateStatusVisitPlan/${id}?status=Approved&updatedBy=${userData.username}`, {
        method: "PUT",
        headers: {
          apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"],
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(response => {
        return response.json();
      }).catch(err => {
        console.log(err);
      });
    } else if (modul === "UnPlan") {
      return fetch( // API_URL +
      //   API_VISIT_PLAN +
      //   `/ActivityVisitPlan/UpdateStatusVisitPlan/${id}?status=Approved&updatedBy=${userData.username}`,
      `https://m-one.kalbe.co.id:8243/t/kalbe.co.id/SakamorActivityVisitUnPlan/v1/api/SakamorActivityVisitUnPlan/UpdateStatusVisitUnPlan/${id}?status=Approved&updatedBy=${userData.username}`, {
        method: "PUT",
        headers: {
          apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"],
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(response => {
        return response.json();
      }).catch(err => {
        console.log(err);
      });
    } else if (modul === "Spreading") {
      return fetch( // API_URL +
      //   API_VISIT_PLAN +
      //   `/ActivityVisitPlan/UpdateStatusVisitPlan/${id}?status=Approved&updatedBy=${userData.username}`,
      `https://m-one.kalbe.co.id:8243/t/kalbe.co.id/SakamorActivitySpreading/v1/api/ActivitySpreading/UpdateStatusSpreading/${id}?status=Approved&updatedBy=${userData.username}`, {
        method: "PUT",
        headers: {
          apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"],
          Accept: "application/json",
          "Content-Type": "application/json"
        } // body: JSON.stringify(data),

      }).then(response => {
        return response.json();
      }).catch(err => {
        console.log(err);
      });
    }

    return response.json();
  }).catch(err => {
    console.log(err);
  });
};

const approvalSubmit = (data, id, userData) => {
  return fetch(`https://m-one.kalbe.co.id:8243/t/kalbe.co.id/ApprovalAPI/v1/api/approval/transaction/Submit`, {
    method: "POST",
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"],
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => {
    return response.json();
  }).then(data => {
    console.log(data);
  }).catch(err => {
    console.log(err);
    setWrongUser(true);
  });
};



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.asPath || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;

  try {
    base = new URL(currentPath, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.asPath, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.asPath, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/pages/Home.module.css */ "./styles/pages/Home.module.css");
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store */ "./store/index.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Spinner */ "./components/Spinner.jsx");
/* harmony import */ var _components_BotNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/BotNav */ "./components/BotNav.jsx");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Button */ "./components/Button.jsx");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Card */ "./components/Card.jsx");
/* harmony import */ var _components_Checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Checkbox */ "./components/Checkbox.jsx");
/* harmony import */ var _webpush__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../webpush */ "./webpush.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../helper */ "./helper.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_16__);


var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-front-end\\pages\\index.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















function Home() {
  const {
    state,
    dispatch,
    actions
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store__WEBPACK_IMPORTED_MODULE_6__["Stores"]);
  const {
    0: focus,
    1: setFocus
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: plan,
    1: setPlan
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: workVisit,
    1: setWorkVisit
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: workVisitHistory,
    1: setWorkVisitHistory
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: planHistory,
    1: setPlanHistory
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: spreadingHistory,
    1: setSpreadingHistory
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: unplanHistory,
    1: setUnplanHistory
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: role,
    1: setRole
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: topMenu,
    1: setTopMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: loadingMenu,
    1: setLoadingMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: newAnnouncement,
    1: setNewAnnouncement
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: notif,
    1: setNotif
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: salesTarget,
    1: setSalesTarget
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: salesTarget75,
    1: setSalesTarget75
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: produktifitas,
    1: setProduktifitas
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: frontliner,
    1: setFrontliner
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: NOO,
    1: setNOO
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: workDay,
    1: setWorkDay
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: pendingApprove,
    1: setPendingApprove
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: dummy,
    1: setDummy
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: loadingApprove,
    1: setLoadingApprove
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: revisePlan,
    1: setRevisePlan
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: reviseUnPlan,
    1: setReviseUnPlan
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: reviseSpreading,
    1: setReviseSpreading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: PP,
    1: setPP
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const isMounted = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(true);
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

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const userData = JSON.parse(localStorage.getItem("user"));

    if (userData) {
      Object(_helper__WEBPACK_IMPORTED_MODULE_14__["viewProfilePic"])(userData.username).then(data => {
        setPP(data);
      }).catch(err => {
        console.log(err);
      });
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/");
    }
  }, [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
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
      Object(_helper__WEBPACK_IMPORTED_MODULE_14__["getNotificationbyUsername"])(userData.username).then(data => {
        setNewAnnouncement(data);

        if (data.length > 0) {
          setNotif(true);
        } else {
          setNotif(false);
        }
      }).catch(err => {
        console.log(err);
      });
      Object(_helper__WEBPACK_IMPORTED_MODULE_14__["getWorkDay"])().then(data => {
        setWorkDay(data);
      }).catch(err => {
        console.log(err);
      });
    }
  }, [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const userData = JSON.parse(localStorage.getItem("user"));

    if (userData) {
      actions.userLogin(userData);
      Object(_helper__WEBPACK_IMPORTED_MODULE_14__["getMenu"])(userData).then(data => {
        actions.setMenu(data);
        setTopMenu(data);
        setLoadingMenu(false);
      }).catch(err => {
        console.log(err);
      });
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/");
    }
  }, [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    var month = moment__WEBPACK_IMPORTED_MODULE_16___default()().format("M");
    var year = moment__WEBPACK_IMPORTED_MODULE_16___default()().format("Y");

    if (userData) {
      Object(_helper__WEBPACK_IMPORTED_MODULE_14__["getAuth"])(userData).then(data => {
        if (data[0].roleCode === "PIMCAB") {
          setRole("PIMCAB");
          setFocus("WORK-VISIT");
          Object(_helper__WEBPACK_IMPORTED_MODULE_14__["getSalesTarget75Pimca"])(userData, month, year).then(data => {
            if (data) {
              setSalesTarget75(data);
            }
          }).catch(err => console.log(err));
          Object(_helper__WEBPACK_IMPORTED_MODULE_14__["getSalesTargetPimca"])(userData, month, year).then(data => {
            if (data) {
              setSalesTarget(data);
            }
          }).catch(err => console.log(err));
          Object(_helper__WEBPACK_IMPORTED_MODULE_14__["getFrontlinerPimca"])(userData, month, year).then(data => {
            if (data) {
              setFrontliner(data);
            }
          }).catch(err => console.log(err));
        } else if (data[0].roleCode === "SMR") {
          setRole("SMR");
          setFocus("PLAN");
          Object(_helper__WEBPACK_IMPORTED_MODULE_14__["getRevisePlanListSmr"])(userData).then(data => {
            setRevisePlan(data);
            console.log("revise plan", data);
          }).catch(err => {
            console.log(err);
          });
          Object(_helper__WEBPACK_IMPORTED_MODULE_14__["getReviseUnPlanListSmr"])(userData).then(data => {
            setReviseUnPlan(data);
            console.log("revise unplan", data);
          }).catch(err => {
            console.log(err);
          });
          Object(_helper__WEBPACK_IMPORTED_MODULE_14__["getReviseSpreadingListSmr"])(userData).then(data => {
            setReviseSpreading(data);
            console.log("revise spreading", data);
          }).catch(err => {
            console.log(err);
          });
          Object(_helper__WEBPACK_IMPORTED_MODULE_14__["getSalesTargetSMR"])(userData, month, year).then(data => {
            if (data) {
              setSalesTarget(data); // console.log(data);
            }
          }).catch(err => {
            console.log(err);
          });
          Object(_helper__WEBPACK_IMPORTED_MODULE_14__["getSalesTarget75SMR"])(userData, month, year).then(data => {
            if (data) {
              setSalesTarget75(data); // console.log(data);
            }
          }).catch(err => {
            console.log(err);
          });
          Object(_helper__WEBPACK_IMPORTED_MODULE_14__["getProduktifitas"])(userData, month, year).then(data => {
            if (data) {
              setProduktifitas(data); // console.log(data);
            }
          }).catch(err => {
            console.log(err);
          });
          Object(_helper__WEBPACK_IMPORTED_MODULE_14__["getFrontliner"])(userData, month, year).then(data => {
            if (data) {
              setFrontliner(data); // console.log(data);
            }
          }).catch(err => {
            console.log(err);
          });
          Object(_helper__WEBPACK_IMPORTED_MODULE_14__["getNoo"])(userData, month, year).then(data => {
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
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/");
    }
  }, [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setLoading(true);
    const userData = JSON.parse(localStorage.getItem("user"));

    if (userData) {
      if (focus === "PLAN") {
        Object(_helper__WEBPACK_IMPORTED_MODULE_14__["getPlanList"])(userData).then(data => {
          setPlan(data);
          setLoading(false);
        }).catch(err => {
          console.log(err);
        });
        Object(_helper__WEBPACK_IMPORTED_MODULE_14__["getPlanHistory"])(userData).then(data => {
          setPlanHistory(data);
          setLoading(false);
        }).catch(err => {
          console.log(err);
        });
      } else if (focus === "WORK-VISIT") {
        Object(_helper__WEBPACK_IMPORTED_MODULE_14__["getAllWorkVisit"])(userData).then(data => {
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
        Object(_helper__WEBPACK_IMPORTED_MODULE_14__["getApproval"])(userData).then(data => {
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
        Object(_helper__WEBPACK_IMPORTED_MODULE_14__["getUnplanMonthlyHistory"])(userData).then(data => {
          // console.log(data);
          setUnplanHistory(data);
          setLoading(false);
        }).catch(err => {
          console.log(err);
        });
      } else if (focus === "SPREADING") {
        Object(_helper__WEBPACK_IMPORTED_MODULE_14__["getSpreadingMonthlyHistory"])(userData).then(data => {
          // console.log(data);
          setSpreadingHistory(data);
          setLoading(false);
        }).catch(err => {
          console.log(err);
        });
      }
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/");
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
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: focus === val.moduleCode ? _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.focus_menu : _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menu,
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
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: auth.length === 3 ? _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menu_grid3 : auth.length === 2 ? _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menu_grid1 : "",
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
        lineNumber: 489,
        columnNumber: 9
      }, this);
    } else {
      return data.map((val, index) => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: focus === "PLAN" ? `/visit/plan/${data.idMasterPlan}` : "/",
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
                    lineNumber: 529,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 520,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: val.namaOutlet
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 540,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
        lineNumber: 557,
        columnNumber: 9
      }, this);
    } else {
      return data.map((val, index) => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: `work-visit/${val.idMasterPlan}`,
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
                    lineNumber: 595,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 586,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: val.namaSMR
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 605,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    style: {
                      fontSize: "14px",
                      fontWeight: "300"
                    },
                    children: ["Rayon - ", val.rayon]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 606,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 624,
        columnNumber: 14
      }, this);
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
                children: moment__WEBPACK_IMPORTED_MODULE_16___default()().format("D / MMM / YYYY")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 631,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
                  lineNumber: 635,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                href: "/master-plan-visit",
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
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.pie_percentage,
                children: planHistory.length === 0 ? "0%" : `${Math.round(planHistory.length / (plan.length + planHistory.length) * 100)}%`
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 662,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_15__["Doughnut"], {
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
              lineNumber: 682,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                margin: "22px 0"
              },
              children: renderList("PLAN", plan)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 692,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: "/visit/plan",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 707,
        columnNumber: 14
      }, this);
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
                children: moment__WEBPACK_IMPORTED_MODULE_16___default()().format("D / MMM / YYYY")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 714,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
                  lineNumber: 718,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.pie_percentage,
                children: "0%"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 743,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_15__["Doughnut"], {
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
              lineNumber: 755,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                margin: "22px 0"
              },
              children: renderList("SPREADING", spreadingHistory)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 765,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: "/visit/spreading/history",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 782,
        columnNumber: 14
      }, this);
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
              lineNumber: 788,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                fontSize: "14px"
              },
              children: "Total Unplan Visit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 791,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.date,
              children: moment__WEBPACK_IMPORTED_MODULE_16___default()().format("MMMM")
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
                    lineNumber: 800,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 799,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
                    lineNumber: 804,
                    columnNumber: 21
                  }, this), " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 802,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  style: {
                    textAlign: "center"
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
              lineNumber: 824,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                margin: "22px 0"
              },
              children: renderList("UNPLAN", unplanHistory)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 834,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: "/visit/unplan/history",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 851,
        columnNumber: 14
      }, this);
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
                children: moment__WEBPACK_IMPORTED_MODULE_16___default()().format("D / MMM / YYYY")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 858,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
                  lineNumber: 862,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                href: "/master-work-visit",
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
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.pie_percentage,
                children: workVisitHistory.length === 0 ? "0%" : `${Math.round(workVisitHistory.length / (workVisit.length + workVisitHistory.length) * 100)}%`
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 889,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_15__["Doughnut"], {
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
              children: "Your Work Visit Today"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 909,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                margin: "22px 0"
              },
              children: renderListWorkVisit(workVisit)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 919,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: "/work-visit",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
          Object(_helper__WEBPACK_IMPORTED_MODULE_14__["approvalApprove"])(data, checkPending[i].modul, checkPending[i].id, userData).then(data => {
            if (i === checkPending.length - 1) {
              setLoadingApprove(false);
              Object(_helper__WEBPACK_IMPORTED_MODULE_14__["getApproval"])(userData).then(data => {
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
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1030,
        columnNumber: 14
      }, this);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_10__["default"], {
          style: {
            marginTop: "22px",
            borderRadius: "30px"
          },
          shadow: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.plan_container,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                fontSize: "18px",
                fontWeight: "500",
                color: "#5E5873",
                textAlign: "left"
              },
              children: ["Pending Approval", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  margin: "22px 0"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  style: {
                    display: "grid",
                    gridTemplateColumns: "10% 90%",
                    paddingBottom: "10px"
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    style: {
                      paddingTop: "10px"
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Checkbox__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    style: {
                      display: "grid",
                      gridTemplateColumns: "10% 90%",
                      fontSize: "14px",
                      margin: "8px 0"
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Checkbox__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        onClick: () => {
                          console.log(val);
                          actions.setFocusApproval(val);
                          next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push(`/approval/${val.modul}/${val.id}`);
                        },
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          style: {
                            fontWeight: "700",
                            display: "grid",
                            gridTemplateColumns: "2fr 1fr"
                          },
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            children: val.usernameSMR
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1120,
                            columnNumber: 31
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          style: {
                            fontWeight: "700",
                            fontSize: "12px"
                          },
                          children: val.namaOutlet
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1135,
                          columnNumber: 29
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_10__["default"], {
        style: {
          marginTop: "22px",
          borderRadius: "6px"
        },
        shadow: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.plan_container,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.progress_title,
            children: ["Working Day ", moment__WEBPACK_IMPORTED_MODULE_16___default()().format("MMMM YYYY"), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
                lineNumber: 1168,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
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
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            display: "grid",
            gridTemplateColumns: "1fr 2fr"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.progress_title,
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1185,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.progress_number,
            children: [data.sales.toLocaleString("id-ID"), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            margin: "13px 0 0 0"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.progress_bar
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1195,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.progress_bar_now,
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
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_10__["default"], {
        style: {
          marginTop: "22px",
          borderRadius: "6px"
        },
        shadow: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.plan_container,
          children: [salesTarget.length !== 0 ? renderSales("Sales", salesTarget) : "", salesTarget75.length !== 0 ? renderSales("Sales 75%", salesTarget75) : "", NOO.length !== 0 ? renderSales("Sales NOO", NOO) : "", frontliner.length !== 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "1fr 1fr"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.progress_title,
                children: "Frontliner"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1220,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.progress_number,
                children: [frontliner.sales, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
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
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                margin: "13px 0 0 0"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.progress_bar
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1230,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.progress_bar_now,
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
          }, void 0, true) : "", produktifitas.length !== 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "1fr 1fr"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.progress_title,
                children: "Produktifitas"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1247,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.progress_number,
                children: [produktifitas.achievement, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
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
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                margin: "13px 0 0 0"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.progress_bar
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1257,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.progress_bar_now,
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
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            fontSize: "14px",
            margin: "8px 0"
          },
          onClick: () => {
            console.log(val);
            actions.setFocusApproval(val);

            if (modul === "Plan") {
              Object(_helper__WEBPACK_IMPORTED_MODULE_14__["getVisitPlanProduct"])(val.idVisitPlan).then(dataInvoice => {
                actions.setReviseAvability(dataInvoice); // console.log(dataInvoice);

                Object(_helper__WEBPACK_IMPORTED_MODULE_14__["getInvoiceDataPosm"])(val.idVisitPlan).then(dataPosm => {
                  actions.setReviseVisibility(dataPosm);
                  next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push(`/revise/${modul}/${val.idVisitPlan}`);
                }).catch(err => {
                  console.log(err);
                });
              }).catch(err => {
                console.log(err);
              });
            } else if (modul === "UnPlan") {
              Object(_helper__WEBPACK_IMPORTED_MODULE_14__["getUnPlanProducts"])(val.id).then(dataInvoice => {
                console.log(dataInvoice);
                actions.setReviseAvability(dataInvoice);
                Object(_helper__WEBPACK_IMPORTED_MODULE_14__["getInvoiceDataPosmUnplan"])(val.id).then(dataPosm => {
                  actions.setReviseVisibility(dataPosm);
                  console.log(dataPosm);
                  next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push(`/revise/${modul}/${val.id}`);
                }).catch(err => {
                  console.log(err);
                });
              }).catch(err => {
                console.log(err);
              });
            } else if (modul === "Spreading") {
              Object(_helper__WEBPACK_IMPORTED_MODULE_14__["getSpreadingProduct"])(val.id).then(dataInvoice => {
                console.log(dataInvoice);
                Object(_helper__WEBPACK_IMPORTED_MODULE_14__["getInvoiceDataPosmSpreading"])(val.id).then(dataPosm => {
                  actions.setReviseVisibility(dataPosm);
                  console.log(dataPosm);
                  next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push(`/revise/${modul}/${val.id}`);
                }).catch(err => {
                  console.log(err);
                });
              }).catch(err => {
                console.log(err);
              });
            } // router.push(`/revise/${modul}/${val.id}`);

          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  fontWeight: "700",
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: val.usernameSMR
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1354,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  fontWeight: "700",
                  fontSize: "12px"
                },
                children: val.namaOutlet
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1369,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_10__["default"], {
        style: {
          borderRadius: "5px",
          marginTop: "22px",
          color: "#5E5873"
        },
        shadow: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.plan_container,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              fontSize: "18px",
              fontWeight: "500",
              color: "#5E5873",
              textAlign: "left"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1437,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_BotNav__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1438,
          columnNumber: 11
        }, this)]
      }, void 0, true);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1445,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.wrapper,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.bg_top
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1450,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.user_info_grid,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.pp,
                src: PP ? PP : "/profile-nav1.svg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1452,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  marginLeft: "15px"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  style: {
                    fontSize: "14px"
                  },
                  children: [getGreetingTime(moment__WEBPACK_IMPORTED_MODULE_16___default()()), " ", state.userReducer.user.name]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1457,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                  href: "/notification",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    style: {
                      textDecoration: "none"
                    },
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.notif,
                      src: "/notif.svg"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1465,
                      columnNumber: 23
                    }, this), notif ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,
                children: [renderTopMenu(), focus === "PLAN" ? renderPlan() : focus === "UNPLAN" ? renderUnplan() : focus === "SPREADING" ? renderSpreading() : focus === "WORK-VISIT" ? renderWorkVisit() : focus === "SALES-TRACKING" ? renderApproval() : "", renderReviseList(), renderWorkDay(), renderProgress(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_BotNav__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
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

/***/ "./store/actions/setDefaultRevise.js":
/*!*******************************************!*\
  !*** ./store/actions/setDefaultRevise.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (dispatch => ({
  setDefaultRevise: async () => {
    try {
      dispatch({
        type: "SET_DEFAULT_REVISE"
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

/***/ "./store/actions/setFocusApproval.js":
/*!*******************************************!*\
  !*** ./store/actions/setFocusApproval.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (dispatch => ({
  setFocusApproval: async data => {
    try {
      dispatch({
        type: "SET_FOCUS_APPROVAL",
        payload: data
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

/***/ "./store/actions/setReviseAvability.js":
/*!*********************************************!*\
  !*** ./store/actions/setReviseAvability.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (dispatch => ({
  setReviseAvability: async data => {
    try {
      dispatch({
        type: "SET_REVISE_AVABILITY",
        payload: data
      });
    } catch (e) {
      console.log(e);
    }
  }
}));

/***/ }),

/***/ "./store/actions/setReviseVisibility.js":
/*!**********************************************!*\
  !*** ./store/actions/setReviseVisibility.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (dispatch => ({
  setReviseVisibility: async data => {
    try {
      dispatch({
        type: "SET_REVISE_VISIBILITY",
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
/* harmony import */ var _reducers_approval__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reducers/approval */ "./store/reducers/approval.js");
/* harmony import */ var _reducers_revise__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reducers/revise */ "./store/reducers/revise.js");
/* harmony import */ var _actions_userLogin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./actions/userLogin */ "./store/actions/userLogin.js");
/* harmony import */ var _actions_setMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./actions/setMenu */ "./store/actions/setMenu.js");
/* harmony import */ var _actions_keepState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./actions/keepState */ "./store/actions/keepState.js");
/* harmony import */ var _actions_setPlanVisibility__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./actions/setPlanVisibility */ "./store/actions/setPlanVisibility.js");
/* harmony import */ var _actions_setPlanAvability__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./actions/setPlanAvability */ "./store/actions/setPlanAvability.js");
/* harmony import */ var _actions_setPlanCatatan__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./actions/setPlanCatatan */ "./store/actions/setPlanCatatan.js");
/* harmony import */ var _actions_setPlanCheckIn__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./actions/setPlanCheckIn */ "./store/actions/setPlanCheckIn.js");
/* harmony import */ var _actions_setUnplanAvability__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./actions/setUnplanAvability */ "./store/actions/setUnplanAvability.js");
/* harmony import */ var _actions_setUnplanVisibility__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./actions/setUnplanVisibility */ "./store/actions/setUnplanVisibility.js");
/* harmony import */ var _actions_setUnplanCatatan__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./actions/setUnplanCatatan */ "./store/actions/setUnplanCatatan.js");
/* harmony import */ var _actions_setUnplanCheckIn__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./actions/setUnplanCheckIn */ "./store/actions/setUnplanCheckIn.js");
/* harmony import */ var _actions_setUnplanJenisChannel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./actions/setUnplanJenisChannel */ "./store/actions/setUnplanJenisChannel.js");
/* harmony import */ var _actions_setUnplanOutlet__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./actions/setUnplanOutlet */ "./store/actions/setUnplanOutlet.js");
/* harmony import */ var _actions_setSpreadingAvability__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./actions/setSpreadingAvability */ "./store/actions/setSpreadingAvability.js");
/* harmony import */ var _actions_setSpreadingVisibility__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./actions/setSpreadingVisibility */ "./store/actions/setSpreadingVisibility.js");
/* harmony import */ var _actions_setSpreadingCatatan__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./actions/setSpreadingCatatan */ "./store/actions/setSpreadingCatatan.js");
/* harmony import */ var _actions_setSpreadingAlamat__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./actions/setSpreadingAlamat */ "./store/actions/setSpreadingAlamat.js");
/* harmony import */ var _actions_setSpreadingNewOutlet__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./actions/setSpreadingNewOutlet */ "./store/actions/setSpreadingNewOutlet.js");
/* harmony import */ var _actions_setSpreadingCheckIn__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./actions/setSpreadingCheckIn */ "./store/actions/setSpreadingCheckIn.js");
/* harmony import */ var _actions_setSpreadingJenisChannel__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./actions/setSpreadingJenisChannel */ "./store/actions/setSpreadingJenisChannel.js");
/* harmony import */ var _actions_setSpreadingOutlet__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./actions/setSpreadingOutlet */ "./store/actions/setSpreadingOutlet.js");
/* harmony import */ var _actions_setDefaultVisitPlan__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./actions/setDefaultVisitPlan */ "./store/actions/setDefaultVisitPlan.js");
/* harmony import */ var _actions_setDefaultVisitUnplan__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./actions/setDefaultVisitUnplan */ "./store/actions/setDefaultVisitUnplan.js");
/* harmony import */ var _actions_setDefaultVisitSpreading__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./actions/setDefaultVisitSpreading */ "./store/actions/setDefaultVisitSpreading.js");
/* harmony import */ var _actions_setDefaultRevise__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./actions/setDefaultRevise */ "./store/actions/setDefaultRevise.js");
/* harmony import */ var _actions_setReviseAvability__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./actions/setReviseAvability */ "./store/actions/setReviseAvability.js");
/* harmony import */ var _actions_setReviseVisibility__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./actions/setReviseVisibility */ "./store/actions/setReviseVisibility.js");
/* harmony import */ var _actions_setFocusApproval__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./actions/setFocusApproval */ "./store/actions/setFocusApproval.js");

var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-front-end\\store\\index.js";

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
      visitSpreadingReducer: Object(_reducers_visitSpreading__WEBPACK_IMPORTED_MODULE_6__["visitSpreadingReducer"])(prevState.visitSpreadingReducer, action),
      approvalReducer: Object(_reducers_approval__WEBPACK_IMPORTED_MODULE_7__["approvalReducer"])(prevState.approvalReducer, action),
      reviseReducer: Object(_reducers_revise__WEBPACK_IMPORTED_MODULE_8__["reviseReducer"])(prevState.reviseReducer, action)
    };
  }, {
    userReducer: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["defaultUser"],
    menuReducer: _reducers_menu__WEBPACK_IMPORTED_MODULE_3__["defaultMenu"],
    visitPlanReducer: _reducers_visitPlan__WEBPACK_IMPORTED_MODULE_4__["defaultVisitPlan"],
    visitUnplanReducer: _reducers_visitUnplan__WEBPACK_IMPORTED_MODULE_5__["defaultVisitUnplan"],
    visitSpreadingReducer: _reducers_visitSpreading__WEBPACK_IMPORTED_MODULE_6__["defaultVisitSpreading"],
    approvalReducer: _reducers_approval__WEBPACK_IMPORTED_MODULE_7__["defaultApproval"],
    reviseReducer: _reducers_revise__WEBPACK_IMPORTED_MODULE_8__["defaultRevise"]
  });
  const actions = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(_actions_userLogin__WEBPACK_IMPORTED_MODULE_9__["default"])(dispatch)), Object(_actions_setMenu__WEBPACK_IMPORTED_MODULE_10__["default"])(dispatch)), Object(_actions_keepState__WEBPACK_IMPORTED_MODULE_11__["default"])(dispatch)), Object(_actions_setPlanVisibility__WEBPACK_IMPORTED_MODULE_12__["default"])(dispatch)), Object(_actions_setPlanAvability__WEBPACK_IMPORTED_MODULE_13__["default"])(dispatch)), Object(_actions_setPlanCatatan__WEBPACK_IMPORTED_MODULE_14__["default"])(dispatch)), Object(_actions_setPlanCheckIn__WEBPACK_IMPORTED_MODULE_15__["default"])(dispatch)), Object(_actions_setDefaultVisitPlan__WEBPACK_IMPORTED_MODULE_30__["default"])(dispatch)), Object(_actions_setUnplanVisibility__WEBPACK_IMPORTED_MODULE_17__["default"])(dispatch)), Object(_actions_setUnplanAvability__WEBPACK_IMPORTED_MODULE_16__["default"])(dispatch)), Object(_actions_setUnplanCatatan__WEBPACK_IMPORTED_MODULE_18__["default"])(dispatch)), Object(_actions_setUnplanCheckIn__WEBPACK_IMPORTED_MODULE_19__["default"])(dispatch)), Object(_actions_setUnplanJenisChannel__WEBPACK_IMPORTED_MODULE_20__["default"])(dispatch)), Object(_actions_setUnplanOutlet__WEBPACK_IMPORTED_MODULE_21__["default"])(dispatch)), Object(_actions_setDefaultVisitUnplan__WEBPACK_IMPORTED_MODULE_31__["default"])(dispatch)), Object(_actions_setSpreadingVisibility__WEBPACK_IMPORTED_MODULE_23__["default"])(dispatch)), Object(_actions_setSpreadingAvability__WEBPACK_IMPORTED_MODULE_22__["default"])(dispatch)), Object(_actions_setSpreadingCatatan__WEBPACK_IMPORTED_MODULE_24__["default"])(dispatch)), Object(_actions_setSpreadingAlamat__WEBPACK_IMPORTED_MODULE_25__["default"])(dispatch)), Object(_actions_setSpreadingNewOutlet__WEBPACK_IMPORTED_MODULE_26__["default"])(dispatch)), Object(_actions_setSpreadingCheckIn__WEBPACK_IMPORTED_MODULE_27__["default"])(dispatch)), Object(_actions_setSpreadingJenisChannel__WEBPACK_IMPORTED_MODULE_28__["default"])(dispatch)), Object(_actions_setSpreadingOutlet__WEBPACK_IMPORTED_MODULE_29__["default"])(dispatch)), Object(_actions_setDefaultVisitSpreading__WEBPACK_IMPORTED_MODULE_32__["default"])(dispatch)), Object(_actions_setFocusApproval__WEBPACK_IMPORTED_MODULE_36__["default"])(dispatch)), Object(_actions_setReviseAvability__WEBPACK_IMPORTED_MODULE_34__["default"])(dispatch)), Object(_actions_setReviseVisibility__WEBPACK_IMPORTED_MODULE_35__["default"])(dispatch)), Object(_actions_setDefaultRevise__WEBPACK_IMPORTED_MODULE_33__["default"])(dispatch)), []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Stores.Provider, {
    value: {
      state,
      dispatch,
      actions
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 123,
    columnNumber: 5
  }, undefined);
};



/***/ }),

/***/ "./store/reducers/approval.js":
/*!************************************!*\
  !*** ./store/reducers/approval.js ***!
  \************************************/
/*! exports provided: approvalReducer, defaultApproval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "approvalReducer", function() { return approvalReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultApproval", function() { return defaultApproval; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const defaultApproval = {
  focusApproval: {}
};

const approvalReducer = (state, action) => {
  switch (action.type) {
    case "SET_FOCUS_APPROVAL":
      return _objectSpread(_objectSpread({}, state), {}, {
        focusApproval: action.payload
      });

    default:
      return state;
  }
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

/***/ "./store/reducers/revise.js":
/*!**********************************!*\
  !*** ./store/reducers/revise.js ***!
  \**********************************/
/*! exports provided: reviseReducer, defaultRevise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviseReducer", function() { return reviseReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRevise", function() { return defaultRevise; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const defaultRevise = {
  visibility: [],
  avability: []
};

const reviseReducer = (state, action) => {
  switch (action.type) {
    case "SET_REVISE_AVABILITY":
      return _objectSpread(_objectSpread({}, state), {}, {
        avability: action.payload
      });

    case "SET_REVISE_VISIBILITY":
      return _objectSpread(_objectSpread({}, state), {}, {
        visibility: action.payload
      });

    case "SET_DEFAULT_REVISE":
      return _objectSpread({}, defaultRevise);

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

/***/ "./styles/components/BotNav.module.css":
/*!*********************************************!*\
  !*** ./styles/components/BotNav.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"nav_container": "BotNav_nav_container__1kQb5",
	"nav_box": "BotNav_nav_box__1SPyV",
	"nav_img": "BotNav_nav_img__3PT9U"
};


/***/ }),

/***/ "./styles/components/Button.module.css":
/*!*********************************************!*\
  !*** ./styles/components/Button.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Button_container__37SWQ",
	"container_white": "Button_container_white__zoABs",
	"container_orange": "Button_container_orange__28ka8",
	"container_red": "Button_container_red__1QvaE",
	"container_disable": "Button_container_disable__3DEoO"
};


/***/ }),

/***/ "./styles/components/Card.module.css":
/*!*******************************************!*\
  !*** ./styles/components/Card.module.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Card_container__2ez1c",
	"shadow": "Card_shadow__Tq5_x"
};


/***/ }),

/***/ "./styles/components/Checkbox.module.css":
/*!***********************************************!*\
  !*** ./styles/components/Checkbox.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Checkbox_container__1tMfF",
	"checkmark_green": "Checkbox_checkmark_green__1qNRK",
	"checkmark_yellow": "Checkbox_checkmark_yellow__kY5ze"
};


/***/ }),

/***/ "./styles/components/Spinner.module.css":
/*!**********************************************!*\
  !*** ./styles/components/Spinner.module.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Spinner_container__3N6EY",
	"spinner": "Spinner_spinner__3goiz",
	"ball-spin-clockwise": "Spinner_ball-spin-clockwise__YJ_C3"
};


/***/ }),

/***/ "./styles/pages/Home.module.css":
/*!**************************************!*\
  !*** ./styles/pages/Home.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ "./webpush.js":
/*!********************!*\
  !*** ./webpush.js ***!
  \********************/
/*! exports provided: firebaseCloudMessaging */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseCloudMessaging", function() { return firebaseCloudMessaging; });
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
    if (!firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.apps.length) {
      firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializeApp({
        apiKey: "AIzaSyAMTirYpyzY7QWDkzSPsofpo68jaFltnrk",
        authDomain: "sakamor-8f28d.firebaseapp.com",
        projectId: "sakamor-8f28d",
        storageBucket: "sakamor-8f28d.appspot.com",
        messagingSenderId: "400720458166",
        appId: "1:400720458166:web:cf7afc06ec3ac419d69117"
      });

      try {
        const messaging = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.messaging();
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

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/messaging":
/*!*************************************!*\
  !*** external "firebase/messaging" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/messaging");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0JvdE5hdi5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b24uanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGVja2JveC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TcGlubmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLW5vb3AudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL2tlZXBTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldERlZmF1bHRSZXZpc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZXREZWZhdWx0VmlzaXRQbGFuLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0RGVmYXVsdFZpc2l0U3ByZWFkaW5nLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0RGVmYXVsdFZpc2l0VW5wbGFuLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0Rm9jdXNBcHByb3ZhbC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldE1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZXRQbGFuQXZhYmlsaXR5LmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0UGxhbkNhdGF0YW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZXRQbGFuQ2hlY2tJbi5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFBsYW5WaXNpYmlsaXR5LmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0UmV2aXNlQXZhYmlsaXR5LmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0UmV2aXNlVmlzaWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFNwcmVhZGluZ0FsYW1hdC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFNwcmVhZGluZ0F2YWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFNwcmVhZGluZ0NhdGF0YW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZXRTcHJlYWRpbmdDaGVja0luLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0U3ByZWFkaW5nSmVuaXNDaGFubmVsLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0U3ByZWFkaW5nTmV3T3V0bGV0LmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0U3ByZWFkaW5nT3V0bGV0LmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0U3ByZWFkaW5nVmlzaWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFVucGxhbkF2YWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFVucGxhbkNhdGF0YW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZXRVbnBsYW5DaGVja0luLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0VW5wbGFuSmVuaXNDaGFubmVsLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0VW5wbGFuT3V0bGV0LmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0VW5wbGFuVmlzaWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3VzZXJMb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9hcHByb3ZhbC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9tZW51LmpzIiwid2VicGFjazovLy8uL3N0b3JlL3JlZHVjZXJzL3JldmlzZS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3JlZHVjZXJzL3Zpc2l0UGxhbi5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy92aXNpdFNwcmVhZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy92aXNpdFVucGxhbi5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvY29tcG9uZW50cy9Cb3ROYXYubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvY29tcG9uZW50cy9CdXR0b24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvY29tcG9uZW50cy9DYXJkLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2NvbXBvbmVudHMvQ2hlY2tib3gubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvY29tcG9uZW50cy9TcGlubmVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3BhZ2VzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi93ZWJwdXNoLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL21lc3NhZ2luZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jaGFydGpzLTJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIk5hdiIsImZvY3VzIiwicm91dGVyIiwidXNlUm91dGVyIiwiYWN0aXZlIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW4iLCJib3JkZXJSYWRpdXMiLCJzdHlsZXMiLCJuYXZfY29udGFpbmVyIiwibmF2X2JveCIsInBhdGhuYW1lIiwiQnV0dG9uIiwib25DbGljayIsInRleHQiLCJzdWJtaXQiLCJjb2xvciIsImNvbnRhaW5lcl93aGl0ZSIsImNvbnRhaW5lcl9vcmFuZ2UiLCJjb250YWluZXJfcmVkIiwiY29udGFpbmVyX2Rpc2FibGUiLCJjb250YWluZXIiLCJDYXJkIiwiY2hpbGRyZW4iLCJzdHlsZSIsInNoYWRvdyIsIkNoZWNrYm94IiwiY2hlY2tlZCIsImRpc2FibGVkIiwiY2hlY2ttYXJrX2dyZWVuIiwiY2hlY2ttYXJrX3llbGxvdyIsIlNwaW5uZXIiLCJzcGlubmVyIiwiQVBJX1VSTCIsIkFQSV9VU0VSIiwiQVBJX01BU1RFUiIsIkFQSV9WSVNJVF9QTEFOIiwiQVBJX1ZJU0lUX1VOUExBTiIsIkFQSV9WSVNJVF9TUFJFQURJTkciLCJBUElfV09SS19WSVNJVCIsIkFQSV9DQUxFTkRBUl9QUk9HUkFNIiwiQVBJX0NBTEVOREFSX1BST01PIiwiQVBJX0FOTk9VTkNFTUVOVCIsIkFQSV9JTkNFTlRJVkUiLCJBUElfQkVORUZJVCIsIkFQSV9BUFBST1ZBTCIsIlRPS0VOIiwibm93IiwiRGF0ZSIsImRhdGUiLCJnZXREYXRlIiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsImNvbXBhcmUiLCJhIiwiYiIsIm5vbW9yIiwiZ2V0TWVudSIsInVzZXJEYXRhIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwiZW1haWwiLCJoZWFkZXJzIiwiYXBpS2V5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjYXRjaCIsImVyciIsImdldEF1dGgiLCJ1c2VybmFtZSIsIm9uTG9naW4iLCJ2YWx1ZXMiLCJwYXNzd29yZCIsIm1ldGhvZCIsInNldFdyb25nVXNlciIsInBvc3RDaGFuZ2VQYXNzIiwiQWNjZXB0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmb3Jnb3RQYXNzd29yZCIsImdldFBvc20iLCJnZXRQcm9kdWN0U2VhcmNoIiwic2VhcmNoIiwiZ2V0UHJvZHVjdEJ5SmVuaXNDaGFubmVsIiwiamVuaXNDaGFubmVsSWQiLCJnZXRQcm9kdWN0QXZnU2FsZXMiLCJwcm9kdWN0Q29kZSIsIm91dGxldENvZGUiLCJnZXRIbmFBdmciLCJnZXRTZWFyY2hKZW5pc0NoYW5uZWwiLCJtb2R1bCIsImdldFNlYXJjaE91dGxldCIsImdldEJyYW5kIiwiZ2V0S29udGVuV29ya1Zpc2l0IiwiZ2V0U2FsZXNUYXJnZXRTTVIiLCJnZXRTYWxlc1RhcmdldDc1U01SIiwiZ2V0SGFyZ2FFY2VyYW4iLCJwcm9kdWtDb2RlIiwicG9zdFByb2ZpbGVQaWMiLCJmaWxlIiwiZm9ybWRhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInZpZXdQcm9maWxlUGljIiwic3RhdHVzIiwiYmxvYiIsIm91dHNpZGUiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJ2aWV3T3V0bGV0Q2xhc3MiLCJvdXRsZXRJRCIsImlkIiwiZ2V0UGxhbkxpc3QiLCJyZXMiLCJmaWx0ZXIiLCJ2YWwiLCJpc0NoZWNrT3V0IiwiZ2V0UGxhbklkIiwicGxhbkxpc3QiLCJsZW5ndGgiLCJzYW1lUGxhbiIsImdldFBsYW5IaXN0b3J5Iiwic3VibWl0VmlzaXRQbGFuIiwic3VibWl0VmlzaXRQbGFuRHBvc20iLCJkcG9zbSIsIm5hbWFGaWxlIiwiZ2V0SW52b2ljZURhdGEiLCJ2aXNpdFBsYW5JZCIsImdldEludm9pY2VEYXRhUG9zbSIsInNvcnREYXRhIiwic29ydCIsInZpZXdGaWxlIiwiZ2V0UGxhbk1vbnRobHlIaXN0b3J5IiwiZGF0ZUEiLCJ0YW5nZ2FsIiwiZGF0ZUIiLCJnZXRNYXN0ZXJWaXNpdFBsYW4iLCJnZXRBcHByb3ZhbCIsImdldFJldmlzZVBsYW5MaXN0U21yIiwiZGVsZXRlTWFzdGVyUGxhblNNUiIsInNhdmVNYXN0ZXJQbGFuVmlzaXQiLCJnZXRQbGFuQnlJZCIsInVwZGF0ZURhdGFQb3NtUGxhbiIsInVwZGF0ZURhdGFQcm9kdWtQbGFuIiwiaW5zZXJ0RmlsZVBsYW4iLCJuYW1lIiwiZ2V0VmlzaXRQbGFuUHJvZHVjdCIsInN1Ym1pdFZpc2l0VW5wbGFuIiwic3VibWl0VmlzaXRVbnBsYW5EcG9zbSIsImdldEludm9pY2VEYXRhVW5wbGFuIiwiZ2V0VW5wbGFuQnlJZCIsImdldEludm9pY2VEYXRhUG9zbVVucGxhbiIsInZpc2l0VW5wbGFuSWQiLCJ1cGRhdGVEYXRhUG9zbVVucGxhbiIsInVwZGF0ZURhdGFQcm9kdWtVbnBsYW4iLCJpbnNlcnRGaWxlVW5wbGFuIiwidmlld0ZpbGVVbnBsYW4iLCJnZXRVbnBsYW5Nb250aGx5SGlzdG9yeSIsImdldFVucGxhbk5lYXJNZSIsImdldFJldmlzZVVuUGxhbkxpc3RTbXIiLCJnZXRVblBsYW5Qcm9kdWN0cyIsInN1Ym1pdFZpc2l0U3ByZWFkaW5nIiwic3VibWl0VmlzaXRTcHJlYWRpbmdEcG9zbSIsImdldEludm9pY2VEYXRhU3ByZWFkaW5nIiwiZ2V0SW52b2ljZURhdGFQb3NtU3ByZWFkaW5nIiwidmlld0ZpbGVTcHJlYWRpbmciLCJnZXRTcHJlYWRpbmdNb250aGx5SGlzdG9yeSIsImdldFNwcmVhZGluZ0J5SWQiLCJnZXRSZXZpc2VTcHJlYWRpbmdMaXN0U21yIiwidXBkYXRlRGF0YVBvc21TcHJlYWRpbmciLCJ1cGRhdGVEYXRhUHJvZHVrU3ByZWFkaW5nIiwiaW5zZXJ0RmlsZVNwcmVhZGluZyIsImdldFNwcmVhZGluZ1Byb2R1Y3QiLCJnZXRBbGxXb3JrVmlzaXQiLCJnZXRXb3JrVmlzaXRNb250aGx5SGlzdG9yeSIsImdldFdvcmtWaXNpdFJhdGluZyIsInN1Ym1pdFdvcmtWaXNpdCIsImdldE1hc3RlcldvcmtWaXNpdCIsInNhdmVNYXN0ZXJXb3JrVmlzaXQiLCJkZWxldGVNYXN0ZXJXb3JrVmlzaXQiLCJnZXREYXlQcm9tbyIsImdldERheVByb2dyYW0iLCJnZXRNb250aFByb21vIiwiZ2V0TW9udGhQcm9ncmFtIiwiZ2V0QWxsQW5ub3VuY2VtZW50Iiwia29kZUNhYmFuZyIsInVwZGF0ZVJlYWRBbm5vdW5jZW1lbnQiLCJnZXRQcm9kdWt0aWZpdGFzIiwiZ2V0RnJvbnRsaW5lciIsImdldE5vbyIsImdldFdvcmtEYXkiLCJnZXRLcGlJbnZlbnRpdmVNb250aGx5U01SIiwibW9tZW50IiwiZm9ybWF0IiwiZ2V0S3BpSW52ZW50aXZlTW9udGhseVBpbWNhIiwiZ2V0SW5jZW50aXZlWWVhcmx5IiwiZ2V0U2FsZXNUYXJnZXRQaW1jYSIsImdldFNhbGVzVGFyZ2V0NzVQaW1jYSIsImdldEZyb250bGluZXJQaW1jYSIsImdldFNtckJ5Q2FiYW5nIiwiY2FiYW5nIiwidGVrcyIsImdldE5vdGlmaWNhdGlvbmJ5VXNlcm5hbWUiLCJnZXRQaW1jYUJ5Q2FiYW5nIiwiZ2V0QmVuZWZpdENvZGVDYWJhbmciLCJhcHByb3ZhbFJlamVjdCIsImFwcHJvdmFsUmV2aXNlIiwiYXBwcm92YWxBcHByb3ZlIiwiYXBwcm92YWxTdWJtaXQiLCJwcmVmZXRjaGVkIiwiY3VyTG9jYWxlIiwib3B0aW9ucyIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsImxvY2FsZSIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJwIiwicmVzb2x2ZWRBcyIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJlbCIsInNldEludGVyc2VjdGlvblJlZiIsInNob3VsZFByZWZldGNoIiwiaXNWaXNpYmxlIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsInJlZiIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJsb2NhbGVEb21haW4iLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwic3RhcnQiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJNU19NQVhfSURMRV9ERUxBWSIsImVudHJ5IiwibWFwIiwiUHJvbWlzZSIsInByb20iLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJmdXR1cmUiLCJnZW5lcmF0b3IiLCJ2YWx1ZSIsImxpbmsiLCJkb2N1bWVudCIsIndpbmRvdyIsImNhblByZWZldGNoIiwiaGFzUHJlZmV0Y2giLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwic2NyaXB0IiwicmVqZWN0IiwibWFya0Fzc2V0RXJyb3IiLCJzcmMiLCJjYW5jZWxsZWQiLCJyIiwib25CdWlsZE1hbmlmZXN0IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsInNjcmlwdHMiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImNzcyIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJtYW5pZmVzdCIsInJvdXRlIiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJhcHBlbmRTY3JpcHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJ3aXRoRnV0dXJlIiwib25FbnRyeXBvaW50IiwiZm4iLCJleHBvcnRzIiwiY29tcG9uZW50IiwiZXJyb3IiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsImdldEZpbGVzRm9yUm91dGUiLCJlbnRyeXBvaW50IiwiY24iLCJuYXZpZ2F0b3IiLCJvdXRwdXQiLCJwcmVmZXRjaFZpYURvbSIsImNyZWF0ZVJvdXRlTG9hZGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJvYnNlcnZlIiwic2V0VmlzaWJsZSIsImlkbGVDYWxsYmFjayIsImNyZWF0ZU9ic2VydmVyIiwiZWxlbWVudHMiLCJvYnNlcnZlciIsIm9ic2VydmVycyIsImVudHJpZXMiLCJjYWxsYmFjayIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJwYXRobmFtZVBhcnRzIiwibG9jYWxlcyIsImRldGVjdGVkTG9jYWxlIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiaXNMb2NhbFVSTCIsInJlc29sdmVBcyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsIm9yaWdpbiIsInJlc29sdmVIcmVmIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlZFVybCIsImFkZEJhc2VQYXRoIiwicHJlcGFyZWRBcyIsImNsZWFuUGF0aG5hbWUiLCJwYWdlcyIsInBhZ2UiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImNyZWRlbnRpYWxzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5Iiwibm90Rm91bmQiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiZGVmYXVsdExvY2FsZSIsImRvbWFpbkxvY2FsZXMiLCJpc1JlYWR5IiwiaXNQcmV2aWV3IiwiaXNMb2NhbGVEb21haW4iLCJfaWR4Iiwic3RhdGUiLCJpbml0aWFsIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJhdXRvRXhwb3J0RHluYW1pYyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwicm91dGVQcm9wcyIsImFkZExvY2FsZSIsImRlbEJhc2VQYXRoIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwicGFyc2VkIiwiX19yZXdyaXRlcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibm90Rm91bmRSb3V0ZSIsImFwcENvbXAiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiZm9yY2VkU2Nyb2xsIiwieCIsInkiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJIb21lIiwiZGlzcGF0Y2giLCJhY3Rpb25zIiwidXNlQ29udGV4dCIsIlN0b3JlcyIsInNldEZvY3VzIiwidXNlU3RhdGUiLCJwbGFuIiwic2V0UGxhbiIsIndvcmtWaXNpdCIsInNldFdvcmtWaXNpdCIsIndvcmtWaXNpdEhpc3RvcnkiLCJzZXRXb3JrVmlzaXRIaXN0b3J5IiwicGxhbkhpc3RvcnkiLCJzZXRQbGFuSGlzdG9yeSIsInNwcmVhZGluZ0hpc3RvcnkiLCJzZXRTcHJlYWRpbmdIaXN0b3J5IiwidW5wbGFuSGlzdG9yeSIsInNldFVucGxhbkhpc3RvcnkiLCJyb2xlIiwic2V0Um9sZSIsInRvcE1lbnUiLCJzZXRUb3BNZW51IiwibG9hZGluZyIsInNldExvYWRpbmciLCJsb2FkaW5nTWVudSIsInNldExvYWRpbmdNZW51IiwibmV3QW5ub3VuY2VtZW50Iiwic2V0TmV3QW5ub3VuY2VtZW50Iiwibm90aWYiLCJzZXROb3RpZiIsInNhbGVzVGFyZ2V0Iiwic2V0U2FsZXNUYXJnZXQiLCJzYWxlc1RhcmdldDc1Iiwic2V0U2FsZXNUYXJnZXQ3NSIsInByb2R1a3RpZml0YXMiLCJzZXRQcm9kdWt0aWZpdGFzIiwiZnJvbnRsaW5lciIsInNldEZyb250bGluZXIiLCJOT08iLCJzZXROT08iLCJ3b3JrRGF5Iiwic2V0V29ya0RheSIsInBlbmRpbmdBcHByb3ZlIiwic2V0UGVuZGluZ0FwcHJvdmUiLCJkdW1teSIsInNldER1bW15IiwibG9hZGluZ0FwcHJvdmUiLCJzZXRMb2FkaW5nQXBwcm92ZSIsInJldmlzZVBsYW4iLCJzZXRSZXZpc2VQbGFuIiwicmV2aXNlVW5QbGFuIiwic2V0UmV2aXNlVW5QbGFuIiwicmV2aXNlU3ByZWFkaW5nIiwic2V0UmV2aXNlU3ByZWFkaW5nIiwiUFAiLCJzZXRQUCIsImlzTW91bnRlZCIsInVzZVJlZiIsImRhdGFQbGFuIiwiZGF0YXNldHMiLCJkYXRhU3ByZWFkaW5nIiwiZGF0YVdvcmtWaXNpdCIsImRvbnV0T3B0aW9ucyIsImN1dG91dFBlcmNlbnRhZ2UiLCJ0b29sdGlwcyIsImVuYWJsZWQiLCJob3ZlciIsIm1vZGUiLCJyZXNwb25zaXZlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInVzZUVmZmVjdCIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZXJMb2dpbiIsInNldE1lbnUiLCJyb2xlQ29kZSIsImlzUGVuaWxhaWFuIiwiZGF0YUNoZWNrQm94IiwiY2hlY2tCb3giLCJyZW5kZXJUb3BNZW51IiwibW9kdWxlQ29kZSIsInJlbmRlciIsImluZGV4IiwiZm9jdXNfbWVudSIsIm1lbnUiLCJtZW51X2dyaWQzIiwibWVudV9ncmlkMSIsInJlbmRlckxpc3QiLCJ0eXBlIiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJpZE1hc3RlclBsYW4iLCJmb250V2VpZ2h0IiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJwYWRkaW5nIiwibmFtYU91dGxldCIsImFsYW1hdE91dGxldCIsInJlbmRlckxpc3RXb3JrVmlzaXQiLCJuYW1hU01SIiwicmF5b24iLCJwcm9kdWtGb2t1cyIsInJlbmRlclBsYW4iLCJtYXJnaW5Ub3AiLCJvdmVydmlldyIsImJvcmRlciIsInBpZV9wZXJjZW50YWdlIiwicm91bmQiLCJwbGFuX2NvbnRhaW5lciIsInJlbmRlclNwcmVhZGluZyIsInJlbmRlclVucGxhbiIsInVucGxhbl9ncmlkIiwibnVtX3RvdGFsX3VucGxhbiIsInRleHREZWNvcmF0aW9uIiwidW5wbGFuX2dyaWQyIiwiYWRkX3VucGxhbiIsInJlbmRlcldvcmtWaXNpdCIsIm9uQXBwcm92ZSIsImNoZWNrUGVuZGluZyIsIm1vZHVsZSIsImFwcHJvdmFsVHJhbnNhY3Rpb25EYXRhTW9kZWwiLCJzeXN0ZW1Db2RlIiwiYXBwcm92YWxMZXZlbCIsImFwcHJvdmFsSUQiLCJkb2NObyIsIm5vbW9yRG9rdW1lbiIsInBpYyIsImFwcHJvdmFsTGluZSIsIm5vdGVzIiwibmVlZEFwcHJvdmUiLCJhcHByb3ZlRGF0ZSIsInRvSVNPU3RyaW5nIiwiYXBwcm92ZXJGcm9tIiwiYXBwcm92ZXJUbyIsImRlc2NyaXB0aW9uIiwiY3JlYXRlZEJ5IiwiY3JlYXRlZERhdGUiLCJlbWFpbERhdGEiLCJkb2N1bWVudE51bWJlciIsImVtYWlsVG8iLCJlbWFpbENDIiwiZW1haWxCQ0MiLCJlbWFpbFN1YmplY3QiLCJlbWFpbEJvZHkiLCJyZW5kZXJBcHByb3ZhbCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nVG9wIiwic3BsaWNlIiwic2V0Rm9jdXNBcHByb3ZhbCIsInVzZXJuYW1lU01SIiwicmVuZGVyV29ya0RheSIsInByb2dyZXNzX3RpdGxlIiwiaGFyaUtlcmphIiwidG90YWxIYXJpS2VyamEiLCJyZW5kZXJQcm9ncmVzcyIsInJlbmRlclNhbGVzIiwidGl0bGUiLCJwcm9ncmVzc19udW1iZXIiLCJzYWxlcyIsInRvTG9jYWxlU3RyaW5nIiwicHJvZ3Jlc3NfYmFyIiwicHJvZ3Jlc3NfYmFyX25vdyIsImFjaCIsImFjaGlldmVtZW50IiwicmVuZGVyUmV2aXNlTGlzdCIsImlkVmlzaXRQbGFuIiwiZGF0YUludm9pY2UiLCJzZXRSZXZpc2VBdmFiaWxpdHkiLCJkYXRhUG9zbSIsInNldFJldmlzZVZpc2liaWxpdHkiLCJnZXRHcmVldGluZ1RpbWUiLCJpc1ZhbGlkIiwic3BsaXRfYWZ0ZXJub29uIiwic3BsaXRfZXZlbmluZyIsImN1cnJlbnRIb3VyIiwicGFyc2VGbG9hdCIsInJlbmRlclBhZ2UiLCJ3cmFwcGVyIiwiYmdfdG9wIiwidXNlcl9pbmZvX2dyaWQiLCJwcCIsIm1hcmdpbkxlZnQiLCJ1c2VyUmVkdWNlciIsInVzZXIiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwibWFpbiIsIm1hcmdpbkJvdHRvbSIsImtlZXBTdGF0ZSIsInBheWxvYWQiLCJzZXREZWZhdWx0UmV2aXNlIiwic2V0RGVmYXVsdFZpc2l0UGxhbiIsInNldERlZmF1bHRWaXNpdFNwcmVhZGluZyIsInNldERlZmF1bHRWaXNpdFVucGxhbiIsInNldFBsYW5BdmFiaWxpdHkiLCJzZXRQbGFuQ2F0YXRhbiIsInNldFBsYW5DaGVja0luIiwic2V0UGxhblZpc2liaWxpdHkiLCJzZXRTcHJlYWRpbmdDYXRhdGFuIiwic2V0U3ByZWFkaW5nQXZhYmlsaXR5Iiwic2V0U3ByZWFkaW5nQWxhbWF0Iiwic2V0U3ByZWFkaW5nQ2hlY2tJbiIsInNldFNwcmVhZGluZ0plbmlzQ2hhbm5lbCIsInNldFNwcmVhZGluZ05ld091dGxldCIsInNldFNwcmVhZGluZ091dGxldCIsInNldFNwcmVhZGluZ1Zpc2liaWxpdHkiLCJzZXRVbnBsYW5BdmFiaWxpdHkiLCJzZXRVbnBsYW5DYXRhdGFuIiwic2V0VW5wbGFuQ2hlY2tJbiIsInNldFVucGxhbkplbmlzQ2hhbm5lbCIsInNldFVucGxhbk91dGxldCIsInNldFVucGxhblZpc2liaWxpdHkiLCJjcmVhdGVDb250ZXh0IiwiU3RvcmUiLCJ1c2VSZWR1Y2VyIiwicHJldlN0YXRlIiwiYWN0aW9uIiwibWVudVJlZHVjZXIiLCJ2aXNpdFBsYW5SZWR1Y2VyIiwidmlzaXRVbnBsYW5SZWR1Y2VyIiwidmlzaXRTcHJlYWRpbmdSZWR1Y2VyIiwiYXBwcm92YWxSZWR1Y2VyIiwicmV2aXNlUmVkdWNlciIsImRlZmF1bHRVc2VyIiwiZGVmYXVsdE1lbnUiLCJkZWZhdWx0VmlzaXRQbGFuIiwiZGVmYXVsdFZpc2l0VW5wbGFuIiwiZGVmYXVsdFZpc2l0U3ByZWFkaW5nIiwiZGVmYXVsdEFwcHJvdmFsIiwiZGVmYXVsdFJldmlzZSIsInVzZU1lbW8iLCJmb2N1c0FwcHJvdmFsIiwic2V0SXRlbSIsInVzZXJNZW51IiwidmlzaWJpbGl0eSIsImF2YWJpbGl0eSIsImNsZWFyIiwiY2F0YXRhbiIsImNoZWNrSW4iLCJhbGFtYXQiLCJuZXdPdXRsZXQiLCJqZW5pc0NoYW5uZWwiLCJvdXRsZXQiLCJmaXJlYmFzZUNsb3VkTWVzc2FnaW5nIiwidG9rZW5JbmxvY2FsZm9yYWdlIiwidXNlcklubG9jYWxmb3JhZ2UiLCJpbml0IiwiZmlyZWJhc2UiLCJhcHBzIiwiaW5pdGlhbGl6ZUFwcCIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lc3NhZ2luZyIsInRva2VuSW5Mb2NhbEZvcmFnZSIsIk5vdGlmaWNhdGlvbiIsInJlcXVlc3RQZXJtaXNzaW9uIiwiZmNtX3Rva2VuIiwiZ2V0VG9rZW4iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7Ozs7Ozs7QUNBQSxnRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEdBQUcsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFlO0FBQ3pCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBQ0EsTUFBSUMsTUFBTSxnQkFDUjtBQUNFLFNBQUssRUFBRTtBQUNMQyxXQUFLLEVBQUUsS0FERjtBQUVMQyxZQUFNLEVBQUUsS0FGSDtBQUdMQyxxQkFBZSxFQUFFLFNBSFo7QUFJTEMsWUFBTSxFQUFFLFVBSkg7QUFLTEMsa0JBQVksRUFBRTtBQUxUO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGOztBQVdBLHNCQUNFO0FBQUssYUFBUyxFQUFFQywyRUFBTSxDQUFDQyxhQUF2QjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFRCwyRUFBTSxDQUFDRSxPQUF2QjtBQUFBLDhCQUNFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFFLEdBQVo7QUFBQSwrQkFDRTtBQUFBLGlDQUNFO0FBQUEsb0NBQ0U7QUFDRSxpQkFBRyxFQUNEVixNQUFNLENBQUNXLFFBQVAsS0FBb0IsR0FBcEIsR0FBMEIsZUFBMUIsR0FBNEM7QUFGaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixFQU1HWCxNQUFNLENBQUNXLFFBQVAsS0FBb0IsR0FBcEIsR0FBMEJULE1BQTFCLEdBQW1DLEVBTnRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBYUUscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUUsV0FBWjtBQUFBLCtCQUNFO0FBQUEsaUNBQ0U7QUFBQSxvQ0FDRTtBQUNFLGlCQUFHLEVBQ0RGLE1BQU0sQ0FBQ1csUUFBUCxLQUFvQixXQUFwQixHQUNJLG1CQURKLEdBRUk7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLEVBUUdYLE1BQU0sQ0FBQ1csUUFBUCxLQUFvQixXQUFwQixHQUFrQ1QsTUFBbEMsR0FBMkMsRUFSOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBYkYsZUEyQkUscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUUsU0FBWjtBQUFBLCtCQUNFO0FBQUEsaUNBQ0U7QUFBQSxvQ0FDRTtBQUNFLGlCQUFHLEVBQ0RGLE1BQU0sQ0FBQ1csUUFBUCxLQUFvQixTQUFwQixHQUNJLGdCQURKLEdBRUk7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLEVBUUdYLE1BQU0sQ0FBQ1csUUFBUCxLQUFvQixTQUFwQixHQUFnQ1QsTUFBaEMsR0FBeUMsRUFSNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBM0JGLGVBeUNFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFFLGVBQVo7QUFBQSwrQkFDRTtBQUFBLGlDQUNFO0FBQUEsb0NBQ0U7QUFDRSxpQkFBRyxFQUNERixNQUFNLENBQUNXLFFBQVAsS0FBb0IsZUFBcEIsR0FDSSxrQkFESixHQUVJO0FBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixFQVFHWCxNQUFNLENBQUNXLFFBQVAsS0FBb0IsZUFBcEIsR0FBc0NULE1BQXRDLEdBQStDLEVBUmxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXpDRixlQXVERSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBRSxVQUFaO0FBQUEsK0JBQ0U7QUFBQSxpQ0FDRTtBQUFBLG9DQUNFO0FBQ0UsaUJBQUcsRUFDREYsTUFBTSxDQUFDVyxRQUFQLEtBQW9CLFVBQXBCLEdBQ0ksa0JBREosR0FFSTtBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsRUFRR1gsTUFBTSxDQUFDVyxRQUFQLEtBQW9CLFVBQXBCLEdBQWlDVCxNQUFqQyxHQUEwQyxFQVI3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF2REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBMEVELENBdkZEOztBQXlGZUosa0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RkE7QUFDQTtBQUNBOztBQUVBLE1BQU1jLE1BQU0sR0FBRyxDQUFDO0FBQUVDLFNBQUY7QUFBV0MsTUFBWDtBQUFpQkMsUUFBakI7QUFBeUJDO0FBQXpCLENBQUQsS0FBc0M7QUFDbkQsc0JBQ0U7QUFDRSxRQUFJLEVBQUVELE1BQU0sR0FBRyxRQUFILEdBQWMsRUFENUI7QUFFRSxhQUFTLEVBQ1BDLEtBQUssS0FBSyxPQUFWLEdBQ0lSLDJFQUFNLENBQUNTLGVBRFgsR0FFSUQsS0FBSyxLQUFLLFFBQVYsR0FDQVIsMkVBQU0sQ0FBQ1UsZ0JBRFAsR0FFQUYsS0FBSyxLQUFLLEtBQVYsR0FDQVIsMkVBQU0sQ0FBQ1csYUFEUCxHQUVBSCxLQUFLLEtBQUssU0FBVixHQUNBUiwyRUFBTSxDQUFDWSxpQkFEUCxHQUVBWiwyRUFBTSxDQUFDYSxTQVhmO0FBYUUsV0FBTyxFQUFFUixPQWJYO0FBQUEsY0FlR0M7QUFmSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFtQkQsQ0FwQkQ7O0FBc0JlRixxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTs7QUFFQSxNQUFNVSxJQUFJLEdBQUcsQ0FBQztBQUFFQyxVQUFGO0FBQVlDLE9BQVo7QUFBbUJDO0FBQW5CLENBQUQsS0FBaUM7QUFDNUMsc0JBQ0U7QUFDRSxhQUFTLEVBQUcsR0FBRWpCLHlFQUFNLENBQUNhLFNBQVUsSUFBR0ksTUFBTSxHQUFHakIseUVBQU0sQ0FBQ2lCLE1BQVYsR0FBbUIsRUFBRyxFQURoRTtBQUVFLFNBQUssRUFBRUQsS0FBSyxHQUFHQSxLQUFILEdBQVcsRUFGekI7QUFBQSxjQUlHRDtBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVFELENBVEQ7O0FBV2VELG1FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7O0FBRUEsTUFBTUksUUFBUSxHQUFHLENBQUM7QUFBRVosTUFBRjtBQUFRYSxTQUFSO0FBQWlCWCxPQUFqQjtBQUF3QkgsU0FBeEI7QUFBaUNlO0FBQWpDLENBQUQsS0FBaUQ7QUFDaEUsc0JBQ0U7QUFBTyxhQUFTLEVBQUVwQiw2RUFBTSxDQUFDYSxTQUF6QjtBQUFvQyxZQUFRLEVBQUVSLE9BQTlDO0FBQUEsNEJBQ0U7QUFBTyxVQUFJLEVBQUMsVUFBWjtBQUF1QixhQUFPLEVBQUVjLE9BQWhDO0FBQXlDLGNBQVEsRUFBRUM7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVHZCxJQUZILGVBR0U7QUFDRSxlQUFTLEVBQ1BFLEtBQUssS0FBSyxPQUFWLEdBQ0lSLDZFQUFNLENBQUNxQixlQURYLEdBRUliLEtBQUssS0FBSyxRQUFWLEdBQ0FSLDZFQUFNLENBQUNzQixnQkFEUCxHQUVBdEIsNkVBQU0sQ0FBQ3FCO0FBTmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWVELENBaEJEOztBQWtCZUgsdUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTs7QUFFQSxNQUFNSyxPQUFPLEdBQUcsTUFBTTtBQUNwQixzQkFDRTtBQUFLLGFBQVMsRUFBRXZCLDRFQUFNLENBQUNhLFNBQXZCO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUViLDRFQUFNLENBQUN3QixPQUF2QjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsZUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGLGVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORixlQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEYsZUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWNELENBZkQ7O0FBaUJlRCxzRUFBZixFOzs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBSUUsT0FBTyxHQUFHLDhDQUFkO0FBQ0EsSUFBSUMsUUFBUSxHQUFHLDZCQUFmO0FBQ0EsSUFBSUMsVUFBVSxHQUFHLDJCQUFqQjtBQUNBLElBQUlDLGNBQWMsR0FBRyxrQ0FBckI7QUFDQSxJQUFJQyxnQkFBZ0IsR0FBRyxvQ0FBdkI7QUFDQSxJQUFJQyxtQkFBbUIsR0FBRyxrQ0FBMUI7QUFDQSxJQUFJQyxjQUFjLEdBQUcsa0NBQXJCO0FBQ0EsSUFBSUMsb0JBQW9CLEdBQUcsZ0NBQTNCO0FBQ0EsSUFBSUMsa0JBQWtCLEdBQUcsMEJBQXpCO0FBQ0EsSUFBSUMsZ0JBQWdCLEdBQUcsNkJBQXZCO0FBQ0EsSUFBSUMsYUFBYSxHQUFHLDBCQUFwQjtBQUNBLElBQUlDLFdBQVcsR0FBRyx5QkFBbEI7QUFDQSxJQUFJQyxZQUFZLEdBQUcscUJBQW5CO0FBRUEsSUFBSUMsS0FBSyxHQUNQLHcwTUFERjs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFpQkEsSUFBSUMsR0FBRyxHQUFHLElBQUlDLElBQUosRUFBVjtBQUNBLElBQUlDLElBQUksR0FBR0YsR0FBRyxDQUFDRyxPQUFKLEVBQVg7QUFDQSxJQUFJQyxLQUFLLEdBQUdKLEdBQUcsQ0FBQ0ssUUFBSixLQUFpQixDQUE3QjtBQUNBLElBQUlDLElBQUksR0FBR04sR0FBRyxDQUFDTyxXQUFKLEVBQVg7O0FBRUEsU0FBU0MsT0FBVCxDQUFpQkMsQ0FBakIsRUFBb0JDLENBQXBCLEVBQXVCO0FBQ3JCLE1BQUlELENBQUMsQ0FBQ0UsS0FBRixHQUFVRCxDQUFDLENBQUNDLEtBQWhCLEVBQXVCO0FBQ3JCLFdBQU8sQ0FBQyxDQUFSO0FBQ0Q7O0FBQ0QsTUFBSUYsQ0FBQyxDQUFDRSxLQUFGLEdBQVVELENBQUMsQ0FBQ0MsS0FBaEIsRUFBdUI7QUFDckIsV0FBTyxDQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxDQUFQO0FBQ0QsQyxDQUVEOzs7QUFFQSxNQUFNQyxPQUFPLEdBQUlDLFFBQUQsSUFBYztBQUM1QixZQUE0QztBQUMxQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVksS0FBWjtBQUNELEdBRkQsTUFFTyxFQUVOOztBQUNELFNBQU9DLEtBQUssQ0FDVjlCLGlEQUFPLEdBQUdDLGtEQUFWLEdBQXNCLDBCQUF5QjBCLFFBQVEsQ0FBQ0ksS0FBTSxFQURwRCxFQUVWO0FBQ0VDLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUVwQiwrQ0FBS0E7QUFETjtBQURYLEdBRlUsQ0FBTCxDQVFKcUIsSUFSSSxDQVFFQyxRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxHQVZJLEVBV0pGLElBWEksQ0FXRUcsSUFBRCxJQUFVO0FBQ2QsV0FBT0EsSUFBUDtBQUNELEdBYkksRUFjSkMsS0FkSSxDQWNHQyxHQUFELElBQVM7QUFDZFgsV0FBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRCxHQWhCSSxDQUFQO0FBaUJELENBdkJEOztBQXlCQSxNQUFNQyxPQUFPLEdBQUliLFFBQUQsSUFBYztBQUM1QixTQUFPRyxLQUFLLENBQ1Y5QixpREFBTyxHQUFHQyxrREFBVixHQUFzQiwrQkFBOEIwQixRQUFRLENBQUNjLFFBQVMsRUFENUQsRUFFVjtBQUNFVCxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFcEIsK0NBQUtBO0FBRE47QUFEWCxHQUZVLENBQUwsQ0FRSnFCLElBUkksQ0FRRUMsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsR0FWSSxFQVdKRixJQVhJLENBV0VHLElBQUQsSUFBVTtBQUNkLFdBQU9BLElBQVA7QUFDRCxHQWJJLEVBY0pDLEtBZEksQ0FjR0MsR0FBRCxJQUFTO0FBQ2RYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsR0FoQkksQ0FBUDtBQWlCRCxDQWxCRDs7QUFvQkEsTUFBTUcsT0FBTyxHQUFJQyxNQUFELElBQVk7QUFDMUIsU0FBT2IsS0FBSyxDQUNWOUIsaURBQU8sR0FDTEMsa0RBREYsR0FFRyx3QkFBdUIwQyxNQUFNLENBQUNGLFFBQVMsY0FBYUUsTUFBTSxDQUFDQyxRQUFTLEVBSDdELEVBSVY7QUFDRUMsVUFBTSxFQUFFLE1BRFY7QUFFRWIsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRXBCLCtDQUFLQTtBQUROO0FBRlgsR0FKVSxDQUFMLENBV0pxQixJQVhJLENBV0VDLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNELEdBYkksRUFjSkYsSUFkSSxDQWNFRyxJQUFELElBQVU7QUFDZCxXQUFPQSxJQUFQO0FBQ0QsR0FoQkksRUFpQkpDLEtBakJJLENBaUJHQyxHQUFELElBQVM7QUFDZFgsV0FBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDQU8sZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDRCxHQXBCSSxDQUFQO0FBcUJELENBdEJEOztBQXdCQSxNQUFNQyxjQUFjLEdBQUlWLElBQUQsSUFBVTtBQUMvQjtBQUNBLFNBQU9QLEtBQUssQ0FBQzlCLGlEQUFPLEdBQUdDLGtEQUFWLEdBQXFCLHNCQUF0QixFQUE4QztBQUN4RDRDLFVBQU0sRUFBRSxLQURnRDtBQUV4RGIsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRXBCLCtDQUREO0FBRVBtQyxZQUFNLEVBQUUsa0JBRkQ7QUFHUCxzQkFBZ0I7QUFIVCxLQUYrQztBQU94REMsUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWQsSUFBZjtBQVBrRCxHQUE5QyxDQUFMLENBU0pILElBVEksQ0FTRUMsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsR0FYSSxFQVlKRixJQVpJLENBWUVHLElBQUQsSUFBVTtBQUNkLFdBQU9BLElBQVA7QUFDRCxHQWRJLEVBZUpDLEtBZkksQ0FlR0MsR0FBRCxJQUFTO0FBQ2RYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsR0FqQkksQ0FBUDtBQWtCRCxDQXBCRDs7QUFzQkEsTUFBTWEsY0FBYyxHQUFJckIsS0FBRCxJQUFXO0FBQ2hDLFNBQU9ELEtBQUssQ0FBQzlCLGlEQUFPLEdBQUdDLGtEQUFWLEdBQXNCLDhCQUE2QjhCLEtBQU0sRUFBMUQsRUFBNkQ7QUFDdkVDLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUVwQiwrQ0FBS0E7QUFETjtBQUQ4RCxHQUE3RCxDQUFMLENBS0pxQixJQUxJLENBS0VDLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNELEdBUEksRUFRSkYsSUFSSSxDQVFFRyxJQUFELElBQVU7QUFDZCxXQUFPQSxJQUFQO0FBQ0QsR0FWSSxFQVdKQyxLQVhJLENBV0dDLEdBQUQsSUFBUztBQUNkWCxXQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELEdBYkksQ0FBUDtBQWNELENBZkQsQyxDQWlCQTs7O0FBRUEsTUFBTWMsT0FBTyxHQUFHLE1BQU07QUFDcEIsU0FBT3ZCLEtBQUssQ0FBQzlCLGlEQUFPLEdBQUdFLG9EQUFWLEdBQXdCLHVDQUF6QixFQUFpRTtBQUMzRThCLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUVwQiwrQ0FBS0E7QUFETjtBQURrRSxHQUFqRSxDQUFMLENBS0pxQixJQUxJLENBS0VDLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNELEdBUEksRUFRSkYsSUFSSSxDQVFFRyxJQUFELElBQVU7QUFDZCxXQUFPQSxJQUFQO0FBQ0QsR0FWSSxFQVdKQyxLQVhJLENBV0dDLEdBQUQsSUFBUztBQUNkWCxXQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELEdBYkksQ0FBUDtBQWNELENBZkQ7O0FBaUJBLE1BQU1lLGdCQUFnQixHQUFJQyxNQUFELElBQVk7QUFDbkMsU0FBT3pCLEtBQUssQ0FBQzlCLGlEQUFPLEdBQUdFLG9EQUFWLEdBQXdCLDZCQUE0QnFELE1BQU8sRUFBNUQsRUFBK0Q7QUFDekV2QixXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFcEIsK0NBQUtBO0FBRE47QUFEZ0UsR0FBL0QsQ0FBTCxDQUtKcUIsSUFMSSxDQUtFQyxRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxHQVBJLEVBUUpGLElBUkksQ0FRRUcsSUFBRCxJQUFVO0FBQ2QsV0FBT0EsSUFBUDtBQUNELEdBVkksRUFXSkMsS0FYSSxDQVdHQyxHQUFELElBQVM7QUFDZFgsV0FBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRCxHQWJJLENBQVA7QUFjRCxDQWZEOztBQWlCQSxNQUFNaUIsd0JBQXdCLEdBQUlDLGNBQUQsSUFBb0I7QUFDbkQsU0FBTzNCLEtBQUssQ0FDVjlCLGlEQUFPLEdBQ0xFLG9EQURGLEdBRUcsNENBQTJDdUQsY0FBZSxFQUhuRCxFQUlWO0FBQ0V6QixXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFcEIsK0NBQUtBO0FBRE47QUFEWCxHQUpVLENBQUwsQ0FVSnFCLElBVkksQ0FVRUMsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsR0FaSSxFQWFKRixJQWJJLENBYUVHLElBQUQsSUFBVTtBQUNkLFdBQU9BLElBQVA7QUFDRCxHQWZJLEVBZ0JKQyxLQWhCSSxDQWdCR0MsR0FBRCxJQUFTO0FBQ2RYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsR0FsQkksQ0FBUDtBQW1CRCxDQXBCRDs7QUFzQkEsTUFBTW1CLGtCQUFrQixHQUFHLENBQUNDLFdBQUQsRUFBY0MsVUFBZCxLQUE2QjtBQUN0RCxTQUFPOUIsS0FBSyxDQUNWOUIsaURBQU8sR0FDTEUsb0RBREYsR0FFRywrREFBOER5RCxXQUFZLGVBQWNDLFVBQVcsRUFINUYsRUFJVjtBQUNFNUIsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRXBCLCtDQUFLQTtBQUROO0FBRFgsR0FKVSxDQUFMLENBVUpxQixJQVZJLENBVUVDLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNELEdBWkksRUFhSkYsSUFiSSxDQWFFRyxJQUFELElBQVU7QUFDZCxXQUFPQSxJQUFQO0FBQ0QsR0FmSSxFQWdCSkMsS0FoQkksQ0FnQkdDLEdBQUQsSUFBUztBQUNkWCxXQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELEdBbEJJLENBQVA7QUFtQkQsQ0FwQkQ7O0FBcUJBLE1BQU1zQixTQUFTLEdBQUcsQ0FBQ0YsV0FBRCxFQUFjQyxVQUFkLEtBQTZCO0FBQzdDLFNBQU85QixLQUFLLENBQ1Y5QixpREFBTyxHQUNMRSxvREFERixHQUVHLHdDQUF1Q3lELFdBQVksSUFBR0MsVUFBVyxFQUgxRCxFQUlWO0FBQ0U1QixXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFcEIsK0NBQUtBO0FBRE47QUFEWCxHQUpVLENBQUwsQ0FVSnFCLElBVkksQ0FVRUMsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsR0FaSSxFQWFKRixJQWJJLENBYUVHLElBQUQsSUFBVTtBQUNkLFdBQU9BLElBQVA7QUFDRCxHQWZJLEVBZ0JKQyxLQWhCSSxDQWdCR0MsR0FBRCxJQUFTO0FBQ2RYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsR0FsQkksQ0FBUDtBQW1CRCxDQXBCRDs7QUFzQkEsTUFBTXVCLHFCQUFxQixHQUFHLENBQUNuQyxRQUFELEVBQVc0QixNQUFYLEVBQW1CUSxLQUFuQixLQUE2QjtBQUN6RCxTQUFPakMsS0FBSyxDQUNWOUIsaURBQU8sR0FDTEUsb0RBREYsR0FFRywrQ0FBOEN5QixRQUFRLENBQUNjLFFBQVMsU0FBUWMsTUFBTyxVQUFTUSxLQUFNLEVBSHZGLEVBSVY7QUFDQTtBQUNFL0IsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRXBCLCtDQUFLQTtBQUROO0FBRFgsR0FMVSxDQUFMLENBV0pxQixJQVhJLENBV0VDLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNELEdBYkksRUFjSkYsSUFkSSxDQWNFRyxJQUFELElBQVU7QUFDZFQsV0FBTyxDQUFDQyxHQUFSLENBQVlRLElBQVo7QUFDQSxXQUFPQSxJQUFQO0FBQ0QsR0FqQkksRUFrQkpDLEtBbEJJLENBa0JHQyxHQUFELElBQVM7QUFDZFgsV0FBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRCxHQXBCSSxDQUFQO0FBcUJELENBdEJEOztBQXdCQSxNQUFNeUIsZUFBZSxHQUFHLENBQUNQLGNBQUQsRUFBaUI5QixRQUFqQixFQUEyQjRCLE1BQTNCLEtBQXNDO0FBQzVELFNBQU96QixLQUFLLENBQ1Y5QixpREFBTyxHQUNMRSxvREFERixHQUVHLGdDQUErQnVELGNBQWUsYUFBWTlCLFFBQVEsQ0FBQ2MsUUFBUyxTQUFRYyxNQUFPLEVBSHBGLEVBSVY7QUFDQTtBQUNFdkIsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRXBCLCtDQUFLQTtBQUROO0FBRFgsR0FMVSxDQUFMLENBV0pxQixJQVhJLENBV0VDLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNELEdBYkksRUFjSkYsSUFkSSxDQWNFRyxJQUFELElBQVU7QUFDZCxXQUFPQSxJQUFQO0FBQ0QsR0FoQkksRUFpQkpDLEtBakJJLENBaUJHQyxHQUFELElBQVM7QUFDZFgsV0FBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRCxHQW5CSSxDQUFQO0FBb0JELENBckJEOztBQXVCQSxNQUFNMEIsUUFBUSxHQUFHLE1BQU07QUFDckIsU0FBT25DLEtBQUssQ0FBQzlCLGlEQUFPLEdBQUdFLG9EQUFWLEdBQXdCLDhCQUF6QixFQUF3RDtBQUNsRThCLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUVwQiwrQ0FBS0E7QUFETjtBQUR5RCxHQUF4RCxDQUFMLENBS0pxQixJQUxJLENBS0VDLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNELEdBUEksRUFRSkYsSUFSSSxDQVFFRyxJQUFELElBQVU7QUFDZCxXQUFPQSxJQUFQO0FBQ0QsR0FWSSxFQVdKQyxLQVhJLENBV0dDLEdBQUQsSUFBUztBQUNkWCxXQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELEdBYkksQ0FBUDtBQWNELENBZkQ7O0FBaUJBLE1BQU0yQixrQkFBa0IsR0FBRyxNQUFNO0FBQy9CLFNBQU9wQyxLQUFLLENBQ1Y5QixpREFBTyxHQUFHRSxvREFBVixHQUF3Qix3Q0FEZCxFQUVWO0FBQ0U4QixXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFcEIsK0NBQUtBO0FBRE47QUFEWCxHQUZVLENBQUwsQ0FRSnFCLElBUkksQ0FRRUMsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsR0FWSSxFQVdKRixJQVhJLENBV0VHLElBQUQsSUFBVTtBQUNkLFdBQU9BLElBQVA7QUFDRCxHQWJJLEVBY0pDLEtBZEksQ0FjR0MsR0FBRCxJQUFTO0FBQ2RYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsR0FoQkksQ0FBUDtBQWlCRCxDQWxCRDs7QUFvQkEsTUFBTTRCLGlCQUFpQixHQUFHLENBQUN4QyxRQUFELEVBQVdULEtBQVgsRUFBa0JFLElBQWxCLEtBQTJCO0FBQ25ELFNBQU9VLEtBQUssQ0FDVjlCLGlEQUFPLEdBQ0xFLG9EQURGLEdBRUcscUNBQW9Da0IsSUFBSyxJQUFHRixLQUFNLGdCQUFlUyxRQUFRLENBQUNjLFFBQVMsRUFINUUsRUFJVjtBQUNFVCxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFcEIsK0NBQUtBO0FBRE47QUFEWCxHQUpVLENBQUwsQ0FVSnFCLElBVkksQ0FVRUMsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsR0FaSSxFQWFKRixJQWJJLENBYUVHLElBQUQsSUFBVTtBQUNkLFdBQU9BLElBQVA7QUFDRCxHQWZJLEVBZ0JKQyxLQWhCSSxDQWdCR0MsR0FBRCxJQUFTO0FBQ2RYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsR0FsQkksQ0FBUDtBQW1CRCxDQXBCRDs7QUFzQkEsTUFBTTZCLG1CQUFtQixHQUFHLENBQUN6QyxRQUFELEVBQVdULEtBQVgsRUFBa0JFLElBQWxCLEtBQTJCO0FBQ3JELFNBQU9VLEtBQUssQ0FDVjlCLGlEQUFPLEdBQ0xFLG9EQURGLEdBRUcsNkNBQTRDa0IsSUFBSyxJQUFHRixLQUFNLGdCQUFlUyxRQUFRLENBQUNjLFFBQVMsRUFIcEYsRUFJVjtBQUNFVCxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFcEIsK0NBQUtBO0FBRE47QUFEWCxHQUpVLENBQUwsQ0FVSnFCLElBVkksQ0FVRUMsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsR0FaSSxFQWFKRixJQWJJLENBYUVHLElBQUQsSUFBVTtBQUNkLFdBQU9BLElBQVA7QUFDRCxHQWZJLEVBZ0JKQyxLQWhCSSxDQWdCR0MsR0FBRCxJQUFTO0FBQ2RYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsR0FsQkksQ0FBUDtBQW1CRCxDQXBCRDs7QUFzQkEsTUFBTThCLGNBQWMsR0FBSUMsVUFBRCxJQUFnQjtBQUNyQyxTQUFPeEMsS0FBSyxDQUNULG9IQUFtSHdDLFVBQVcsRUFEckgsRUFFVjtBQUNFdEMsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRXBCLCtDQUFLQTtBQUROO0FBRFgsR0FGVSxDQUFMLENBUUpxQixJQVJJLENBUUVDLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNELEdBVkksRUFXSkYsSUFYSSxDQVdFRyxJQUFELElBQVU7QUFDZCxXQUFPQSxJQUFQO0FBQ0QsR0FiSSxFQWNKQyxLQWRJLENBY0dDLEdBQUQsSUFBUztBQUNkWCxXQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELEdBaEJJLENBQVA7QUFpQkQsQ0FsQkQ7O0FBb0JBLE1BQU1nQyxjQUFjLEdBQUcsQ0FBQzVDLFFBQUQsRUFBVzZDLElBQVgsS0FBb0I7QUFDekMsUUFBTUMsUUFBUSxHQUFHLElBQUlDLFFBQUosRUFBakI7QUFDQUQsVUFBUSxDQUFDRSxNQUFULENBQWdCLE1BQWhCLEVBQXdCSCxJQUF4QjtBQUNBLFNBQU8xQyxLQUFLLENBQ1Y5QixpREFBTyxHQUNMRSxvREFERixHQUVHLGtEQUFpRHlCLFFBQVEsQ0FBQ2MsUUFBUyw4QkFINUQsRUFJVjtBQUNFSSxVQUFNLEVBQUUsS0FEVjtBQUVFYixXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFcEIsK0NBQUtBO0FBRE4sS0FGWDtBQUtFb0MsUUFBSSxFQUFFd0I7QUFMUixHQUpVLENBQUwsQ0FZSnZDLElBWkksQ0FZRUMsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsR0FkSSxFQWVKRixJQWZJLENBZUVHLElBQUQsSUFBVTtBQUNkVCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ1EsSUFBakM7QUFDQSxXQUFPQSxJQUFQO0FBQ0QsR0FsQkksRUFtQkpDLEtBbkJJLENBbUJHQyxHQUFELElBQVM7QUFDZFgsV0FBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRCxHQXJCSSxDQUFQO0FBc0JELENBekJEOztBQTJCQSxNQUFNcUMsY0FBYyxHQUFJbkMsUUFBRCxJQUFjO0FBQ25DLFNBQU9YLEtBQUssQ0FDVjlCLGlEQUFPLEdBQ0xFLG9EQURGLEdBRUcsZ0RBQStDdUMsUUFBUyxFQUhqRCxFQUlWO0FBQ0VULFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUVwQiwrQ0FBS0E7QUFETjtBQURYLEdBSlUsQ0FBTCxDQVVKcUIsSUFWSSxDQVVFQyxRQUFELElBQWM7QUFDbEIsUUFBSUEsUUFBUSxDQUFDMEMsTUFBVCxLQUFvQixHQUF4QixFQUE2QjtBQUMzQixhQUFPMUMsUUFBUSxDQUFDMkMsSUFBVCxFQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBTzNDLFFBQVA7QUFDRDtBQUNGLEdBaEJJLEVBaUJKRCxJQWpCSSxDQWlCQyxVQUFVRyxJQUFWLEVBQWdCO0FBQ3BCLFFBQUkwQyxPQUFPLEdBQUdDLEdBQUcsQ0FBQ0MsZUFBSixDQUFvQjVDLElBQXBCLENBQWQ7QUFDQSxXQUFPMEMsT0FBUDtBQUNELEdBcEJJLEVBcUJKekMsS0FyQkksQ0FxQkdDLEdBQUQsSUFBUztBQUNkWCxXQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELEdBdkJJLENBQVA7QUF3QkQsQ0F6QkQ7O0FBMkJBLE1BQU0yQyxlQUFlLEdBQUlDLFFBQUQsSUFBYztBQUNwQ3ZELFNBQU8sQ0FBQ0MsR0FBUixDQUFZc0QsUUFBWjtBQUNBLFNBQU9yRCxLQUFLLENBQ1Y5QixpREFBTyxHQUNMRSxvREFERixHQUVHLDRDQUEyQ2lGLFFBQVMsRUFIN0MsRUFJVjtBQUNBO0FBQ0VuRCxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFcEIsK0NBQUtBO0FBRE47QUFEWCxHQUxVLENBQUwsQ0FXSnFCLElBWEksQ0FXRUMsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsR0FiSSxFQWNKRixJQWRJLENBY0MsVUFBVUcsSUFBVixFQUFnQjtBQUNwQlQsV0FBTyxDQUFDQyxHQUFSLENBQVlRLElBQVo7O0FBQ0EsUUFBSUEsSUFBSSxDQUFDd0MsTUFBTCxJQUFlLEdBQW5CLEVBQXdCLENBQ3ZCLENBREQsTUFDTztBQUNMLGFBQU8vQyxLQUFLLENBQ1Y5QixpREFBTyxHQUFHRSxvREFBVixHQUF3Qiw4QkFBNkJtQyxJQUFJLENBQUMrQyxFQUFHLEVBRG5ELEVBRVY7QUFDRXBELGVBQU8sRUFBRTtBQUNQQyxnQkFBTSxFQUFFcEIsK0NBQUtBO0FBRE47QUFEWCxPQUZVLENBQUwsQ0FRSnFCLElBUkksQ0FRRUMsUUFBRCxJQUFjO0FBQ2xCLFlBQUlBLFFBQVEsQ0FBQzBDLE1BQVQsS0FBb0IsR0FBeEIsRUFBNkI7QUFDM0IsaUJBQU8xQyxRQUFRLENBQUMyQyxJQUFULEVBQVA7QUFDRCxTQUZELE1BRU87QUFDTCxpQkFBTzNDLFFBQVA7QUFDRDtBQUNGLE9BZEksRUFlSkQsSUFmSSxDQWVDLFVBQVVHLElBQVYsRUFBZ0I7QUFDcEIsWUFBSTBDLE9BQU8sR0FBR0MsR0FBRyxDQUFDQyxlQUFKLENBQW9CNUMsSUFBcEIsQ0FBZDtBQUNBLGVBQU8wQyxPQUFQO0FBQ0QsT0FsQkksRUFtQkp6QyxLQW5CSSxDQW1CR0MsR0FBRCxJQUFTO0FBQ2RYLGVBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsT0FyQkksQ0FBUDtBQXNCRDtBQUNGLEdBekNJLEVBMENKRCxLQTFDSSxDQTBDR0MsR0FBRCxJQUFTO0FBQ2RYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsR0E1Q0ksQ0FBUDtBQTZDRCxDQS9DRCxDLENBaURBOzs7QUFFQSxNQUFNOEMsV0FBVyxHQUFJMUQsUUFBRCxJQUFjO0FBQ2hDLFNBQU9HLEtBQUssQ0FDVjlCLGlEQUFPLEdBQ0xHLHdEQURGLEdBRUcsc0RBQXFEd0IsUUFBUSxDQUFDYyxRQUFTLEVBSGhFLEVBSVY7QUFDRVQsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRXBCLCtDQUFLQTtBQUROO0FBRFgsR0FKVSxDQUFMLENBVUpxQixJQVZJLENBVUVDLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNELEdBWkksRUFhSkYsSUFiSSxDQWFFRyxJQUFELElBQVU7QUFDZCxRQUFJaUQsR0FBRyxHQUFHakQsSUFBSSxDQUFDa0QsTUFBTCxDQUFhQyxHQUFELElBQVM7QUFDN0IsYUFBT0EsR0FBRyxDQUFDQyxVQUFKLEtBQW1CLEtBQTFCO0FBQ0QsS0FGUyxDQUFWO0FBR0EsV0FBT0gsR0FBUDtBQUNELEdBbEJJLEVBbUJKaEQsS0FuQkksQ0FtQkdDLEdBQUQsSUFBUztBQUNkWCxXQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELEdBckJJLENBQVA7QUFzQkQsQ0F2QkQ7O0FBeUJBLE1BQU1tRCxTQUFTLEdBQUlOLEVBQUQsSUFBUTtBQUN4QixTQUFPdEQsS0FBSyxDQUNWOUIsaURBQU8sR0FDTEcsd0RBREYsR0FFRyxtREFBa0RpQixJQUFLLElBQUdGLEtBQU0sSUFBR0YsSUFBSyxFQUhqRSxFQUlWO0FBQ0VnQixXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFcEIsK0NBQUtBO0FBRE47QUFEWCxHQUpVLENBQUwsQ0FVSnFCLElBVkksQ0FVRUMsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsR0FaSSxFQWFKRixJQWJJLENBYUV5RCxRQUFELElBQWM7QUFDbEIsUUFBSUEsUUFBUSxDQUFDQyxNQUFULElBQW1CLENBQXZCLEVBQTBCO0FBQ3hCLGFBQU85RCxLQUFLLENBQ1Y5QixpREFBTyxHQUNMRyx3REFERixHQUVHLDJDQUEwQ2lGLEVBQUcsRUFIdEMsRUFJVjtBQUNFcEQsZUFBTyxFQUFFO0FBQ1BDLGdCQUFNLEVBQUVwQiwrQ0FBS0E7QUFETjtBQURYLE9BSlUsQ0FBTCxDQVVKcUIsSUFWSSxDQVVFQyxRQUFELElBQWM7QUFDbEIsZUFBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxPQVpJLEVBYUpGLElBYkksQ0FhRUcsSUFBRCxJQUFVO0FBQ2QsWUFBSXdELFFBQVEsR0FBR0YsUUFBUSxDQUFDSixNQUFULENBQWlCQyxHQUFELElBQVM7QUFDdEMsaUJBQU9BLEdBQUcsQ0FBQ0osRUFBSixLQUFXL0MsSUFBSSxDQUFDK0MsRUFBdkI7QUFDRCxTQUZjLENBQWY7QUFJQSxlQUFPO0FBQUVTLGtCQUFGO0FBQVl4RDtBQUFaLFNBQVA7QUFDRCxPQW5CSSxFQW9CSkMsS0FwQkksQ0FvQkdDLEdBQUQsSUFBUztBQUNkWCxlQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELE9BdEJJLENBQVA7QUF1QkQsS0F4QkQsTUF3Qk87QUFDTCxhQUFPb0QsUUFBUDtBQUNEO0FBQ0YsR0F6Q0ksRUEwQ0pyRCxLQTFDSSxDQTBDR0MsR0FBRCxJQUFTO0FBQ2RYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsR0E1Q0ksQ0FBUDtBQTZDRCxDQTlDRDs7QUFnREEsTUFBTXVELGNBQWMsR0FBSW5FLFFBQUQsSUFBYztBQUNuQyxTQUFPRyxLQUFLLENBQ1Y5QixpREFBTyxHQUNMRyx3REFERixHQUVHLHNEQUFxRHdCLFFBQVEsQ0FBQ2MsUUFBUyxFQUhoRSxFQUlWO0FBQ0VULFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUVwQiwrQ0FBS0E7QUFETjtBQURYLEdBSlUsQ0FBTCxDQVVKcUIsSUFWSSxDQVVFQyxRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxHQVpJLEVBYUpGLElBYkksQ0FhRUcsSUFBRCxJQUFVO0FBQ2QsUUFBSWlELEdBQUcsR0FBR2pELElBQUksQ0FBQ2tELE1BQUwsQ0FBYUMsR0FBRCxJQUFTO0FBQzdCLGFBQU9BLEdBQUcsQ0FBQ0MsVUFBSixLQUFtQixJQUExQjtBQUNELEtBRlMsQ0FBVjtBQUdBLFdBQU9ILEdBQVA7QUFDRCxHQWxCSSxFQW1CSmhELEtBbkJJLENBbUJHQyxHQUFELElBQVM7QUFDZFgsV0FBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRCxHQXJCSSxDQUFQO0FBc0JELENBdkJEOztBQXlCQSxNQUFNd0QsZUFBZSxHQUFJMUQsSUFBRCxJQUFVO0FBQ2hDO0FBQ0EsU0FBT1AsS0FBSyxDQUNWOUIsaURBQU8sR0FBR0csd0RBQVYsR0FBMkIsNkNBRGpCLEVBRVY7QUFDRTBDLFVBQU0sRUFBRSxNQURWO0FBRUViLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUVwQiwrQ0FERDtBQUVQbUMsWUFBTSxFQUFFLGtCQUZEO0FBR1Asc0JBQWdCO0FBSFQsS0FGWDtBQU9FQyxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlZCxJQUFmO0FBUFIsR0FGVSxDQUFMLENBWUpILElBWkksQ0FZRUMsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsR0FkSSxFQWVKRixJQWZJLENBZUVHLElBQUQsSUFBVTtBQUNkVCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QlEsSUFBOUI7QUFDQSxXQUFPQSxJQUFQO0FBQ0QsR0FsQkksRUFtQkpDLEtBbkJJLENBbUJHQyxHQUFELElBQVM7QUFDZFgsV0FBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRCxHQXJCSSxDQUFQO0FBc0JELENBeEJEOztBQTBCQSxNQUFNeUQsb0JBQW9CLEdBQUcsQ0FBQ0MsS0FBRCxFQUFRekIsSUFBUixLQUFpQjtBQUM1QztBQUNBLFFBQU1DLFFBQVEsR0FBRyxJQUFJQyxRQUFKLEVBQWpCO0FBQ0EsU0FBTzVDLEtBQUssQ0FDVjlCLGlEQUFPLEdBQ0xHLHdEQURGLEdBRUUsb0RBSFEsRUFJVjtBQUNFMEMsVUFBTSxFQUFFLE1BRFY7QUFFRWIsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRXBCLCtDQUREO0FBRVBtQyxZQUFNLEVBQUUsa0JBRkQ7QUFHUCxzQkFBZ0I7QUFIVCxLQUZYO0FBT0VDLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU4QyxLQUFmO0FBUFIsR0FKVSxDQUFMLENBY0ovRCxJQWRJLENBY0VDLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNELEdBaEJJLEVBaUJKRixJQWpCSSxDQWlCRUcsSUFBRCxJQUFVO0FBQ2Q7QUFDQW9DLFlBQVEsQ0FBQ0UsTUFBVCxDQUFnQixNQUFoQixFQUF3QkgsSUFBeEI7QUFDQSxXQUFPMUMsS0FBSyxDQUNWOUIsaURBQU8sR0FDTEcsd0RBREYsR0FFRywyQ0FBMENrQyxJQUFJLENBQUMrQyxFQUFHLGFBQVkvQyxJQUFJLENBQUM2RCxRQUFTLEVBSHJFLEVBSVY7QUFDRXJELFlBQU0sRUFBRSxNQURWO0FBRUViLGFBQU8sRUFBRTtBQUNQQyxjQUFNLEVBQUVwQiwrQ0FBS0E7QUFETixPQUZYO0FBS0VvQyxVQUFJLEVBQUV3QjtBQUxSLEtBSlUsQ0FBTCxDQVlKdkMsSUFaSSxDQVlFQyxRQUFELElBQWM7QUFDbEIsYUFBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxLQWRJLEVBZUpGLElBZkksQ0FlRUcsSUFBRCxJQUFVO0FBQ2Q7QUFDQSxhQUFPQSxJQUFQO0FBQ0QsS0FsQkksRUFtQkpDLEtBbkJJLENBbUJHQyxHQUFELElBQVM7QUFDZFgsYUFBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRCxLQXJCSSxDQUFQO0FBc0JELEdBMUNJLEVBMkNKRCxLQTNDSSxDQTJDR0MsR0FBRCxJQUFTO0FBQ2RYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsR0E3Q0ksQ0FBUDtBQThDRCxDQWpERDs7QUFtREEsTUFBTTRELGNBQWMsR0FBSUMsV0FBRCxJQUFpQjtBQUN0QyxTQUFPdEUsS0FBSyxDQUNWOUIsaURBQU8sR0FDTEcsd0RBREYsR0FFRyw0Q0FBMkNpRyxXQUFZLEVBSGhELEVBSVY7QUFDRXBFLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUVwQiwrQ0FBS0E7QUFETjtBQURYLEdBSlUsQ0FBTCxDQVVKcUIsSUFWSSxDQVVFQyxRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxHQVpJLEVBYUpGLElBYkksQ0FhRUcsSUFBRCxJQUFVO0FBQ2QsV0FBT0EsSUFBUDtBQUNELEdBZkksRUFnQkpDLEtBaEJJLENBZ0JHQyxHQUFELElBQVM7QUFDZFgsV0FBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRCxHQWxCSSxDQUFQO0FBbUJELENBcEJEOztBQXNCQSxNQUFNOEQsa0JBQWtCLEdBQUlELFdBQUQsSUFBaUI7QUFDMUMsU0FBT3RFLEtBQUssQ0FDVjlCLGlEQUFPLEdBQ0xHLHdEQURGLEdBRUcsdURBQXNEaUcsV0FBWSxFQUgzRCxFQUlWO0FBQ0VwRSxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFcEIsK0NBQUtBO0FBRE47QUFEWCxHQUpVLENBQUwsQ0FVSnFCLElBVkksQ0FVRUMsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsR0FaSSxFQWFKRixJQWJJLENBYUVHLElBQUQsSUFBVTtBQUNkLFFBQUlpRSxRQUFRLEdBQUdqRSxJQUFJLENBQUNrRSxJQUFMLENBQVVqRixPQUFWLENBQWY7QUFDQSxXQUFPZ0YsUUFBUDtBQUNELEdBaEJJLEVBaUJKaEUsS0FqQkksQ0FpQkdDLEdBQUQsSUFBUztBQUNkWCxXQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELEdBbkJJLENBQVA7QUFvQkQsQ0FyQkQ7O0FBdUJBLE1BQU1pRSxRQUFRLEdBQUlwQixFQUFELElBQVE7QUFDdkIsU0FBT3RELEtBQUssQ0FDVjlCLGlEQUFPLEdBQUdHLHdEQUFWLEdBQTRCLG9DQUFtQ2lGLEVBQUcsRUFEeEQsRUFFVjtBQUNFcEQsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRXBCLCtDQUFLQTtBQUROO0FBRFgsR0FGVSxDQUFMLENBUUpxQixJQVJJLENBUUVDLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUMyQyxJQUFULEVBQVA7QUFDRCxHQVZJLEVBV0o1QyxJQVhJLENBV0MsVUFBVUcsSUFBVixFQUFnQjtBQUNwQixRQUFJMEMsT0FBTyxHQUFHQyxHQUFHLENBQUNDLGVBQUosQ0FBb0I1QyxJQUFwQixDQUFkO0FBQ0EsV0FBTzBDLE9BQVA7QUFDRCxHQWRJLEVBZUp6QyxLQWZJLENBZUdDLEdBQUQsSUFBUztBQUNkWCxXQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELEdBakJJLENBQVA7QUFrQkQsQ0FuQkQ7O0FBcUJBLE1BQU1rRSxxQkFBcUIsR0FBSTlFLFFBQUQsSUFBYztBQUMxQyxTQUFPRyxLQUFLLENBQ1Y5QixpREFBTyxHQUNMRyx3REFERixHQUVHLDZEQUE0RHdCLFFBQVEsQ0FBQ2MsUUFBUyxFQUh2RSxFQUlWO0FBQ0VULFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUVwQiwrQ0FBS0E7QUFETjtBQURYLEdBSlUsQ0FBTCxDQVVKcUIsSUFWSSxDQVVFQyxRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxHQVpJLEVBYUpGLElBYkksQ0FhRUcsSUFBRCxJQUFVO0FBQ2RBLFFBQUksQ0FBQ2tFLElBQUwsQ0FBVSxVQUFVaEYsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQ3hCLFVBQUlrRixLQUFLLEdBQUcsSUFBSTNGLElBQUosQ0FBU1EsQ0FBQyxDQUFDb0YsT0FBWCxDQUFaO0FBQUEsVUFDRUMsS0FBSyxHQUFHLElBQUk3RixJQUFKLENBQVNTLENBQUMsQ0FBQ21GLE9BQVgsQ0FEVjtBQUVBLGFBQU9DLEtBQUssR0FBR0YsS0FBZjtBQUNELEtBSkQ7QUFLQSxXQUFPckUsSUFBUDtBQUNELEdBcEJJLEVBcUJKQyxLQXJCSSxDQXFCR0MsR0FBRCxJQUFTO0FBQ2RYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsR0F2QkksQ0FBUDtBQXdCRCxDQXpCRDs7QUEyQkEsTUFBTXNFLGtCQUFrQixHQUFJbEYsUUFBRCxJQUFjO0FBQ3ZDLFNBQU9HLEtBQUssQ0FDVjlCLGlEQUFPLEdBQ0xHLHdEQURGLEdBRUcsMERBQXlEd0IsUUFBUSxDQUFDYyxRQUFTLEVBSHBFLEVBSVY7QUFDRVQsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRXBCLCtDQUFLQTtBQUROO0FBRFgsR0FKVSxDQUFMLENBVUpxQixJQVZJLENBVUVDLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNELEdBWkksRUFhSkYsSUFiSSxDQWFFRyxJQUFELElBQVU7QUFDZEEsUUFBSSxDQUFDa0UsSUFBTCxDQUFVLFVBQVVoRixDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDeEIsVUFBSWtGLEtBQUssR0FBRyxJQUFJM0YsSUFBSixDQUFTUSxDQUFDLENBQUNvRixPQUFYLENBQVo7QUFBQSxVQUNFQyxLQUFLLEdBQUcsSUFBSTdGLElBQUosQ0FBU1MsQ0FBQyxDQUFDbUYsT0FBWCxDQURWO0FBRUEsYUFBT0MsS0FBSyxHQUFHRixLQUFmO0FBQ0QsS0FKRDtBQUtBLFdBQU9yRSxJQUFQO0FBQ0QsR0FwQkksRUFxQkpDLEtBckJJLENBcUJHQyxHQUFELElBQVM7QUFDZFgsV0FBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRCxHQXZCSSxDQUFQO0FBd0JELENBekJEOztBQTJCQSxNQUFNdUUsV0FBVyxHQUFJbkYsUUFBRCxJQUFjO0FBQ2hDLFNBQU9HLEtBQUssQ0FDVjlCLGlEQUFPLEdBQ0xHLHdEQURGLEdBRUU7QUFDQyxxREFKTyxFQUtWO0FBQ0U2QixXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFcEIsK0NBQUtBO0FBRE47QUFEWCxHQUxVLENBQUwsQ0FXSnFCLElBWEksQ0FXRUMsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsR0FiSSxFQWNKRixJQWRJLENBY0VHLElBQUQsSUFBVTtBQUNkQSxRQUFJLENBQUNrRSxJQUFMLENBQVUsVUFBVWhGLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUN4QixVQUFJa0YsS0FBSyxHQUFHLElBQUkzRixJQUFKLENBQVNRLENBQUMsQ0FBQ29GLE9BQVgsQ0FBWjtBQUFBLFVBQ0VDLEtBQUssR0FBRyxJQUFJN0YsSUFBSixDQUFTUyxDQUFDLENBQUNtRixPQUFYLENBRFY7QUFFQSxhQUFPQyxLQUFLLEdBQUdGLEtBQWY7QUFDRCxLQUpEO0FBS0EsV0FBT3JFLElBQVA7QUFDRCxHQXJCSSxFQXNCSkMsS0F0QkksQ0FzQkdDLEdBQUQsSUFBUztBQUNkWCxXQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELEdBeEJJLENBQVA7QUF5QkQsQ0ExQkQ7O0FBNEJBLE1BQU13RSxvQkFBb0IsR0FBSXBGLFFBQUQsSUFBYztBQUN6QyxTQUFPRyxLQUFLLENBQ1QsK0lBQThJSCxRQUFRLENBQUNjLFFBQVMsRUFEdkosRUFFVjtBQUNFVCxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFcEIsK0NBQUtBO0FBRE47QUFEWCxHQUZVLENBQUwsQ0FRSnFCLElBUkksQ0FRRUMsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsR0FWSSxFQVdKRixJQVhJLENBV0VHLElBQUQsSUFBVTtBQUNkQSxRQUFJLENBQUNrRSxJQUFMLENBQVUsVUFBVWhGLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUN4QixVQUFJa0YsS0FBSyxHQUFHLElBQUkzRixJQUFKLENBQVNRLENBQUMsQ0FBQ29GLE9BQVgsQ0FBWjtBQUFBLFVBQ0VDLEtBQUssR0FBRyxJQUFJN0YsSUFBSixDQUFTUyxDQUFDLENBQUNtRixPQUFYLENBRFY7QUFFQSxhQUFPQyxLQUFLLEdBQUdGLEtBQWY7QUFDRCxLQUpEO0FBS0EsV0FBT3JFLElBQVA7QUFDRCxHQWxCSSxFQW1CSkMsS0FuQkksQ0FtQkdDLEdBQUQsSUFBUztBQUNkWCxXQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELEdBckJJLENBQVA7QUFzQkQsQ0F2QkQ7O0FBeUJBLE1BQU15RSxtQkFBbUIsR0FBSTVCLEVBQUQsSUFBUTtBQUNsQyxTQUFPdEQsS0FBSyxDQUNWOUIsaURBQU8sR0FBR0csd0RBQVYsR0FBNEIsMENBQXlDaUYsRUFBRyxFQUQ5RCxFQUVWO0FBQ0V2QyxVQUFNLEVBQUUsUUFEVjtBQUVFYixXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFcEIsK0NBQUtBO0FBRE47QUFGWCxHQUZVLENBQUwsQ0FTSnFCLElBVEksQ0FTRUMsUUFBRCxJQUFjO0FBQ2xCLFdBQU9QLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTSxRQUFaLENBQVA7QUFDRCxHQVhJLEVBWUpHLEtBWkksQ0FZR0MsR0FBRCxJQUFTO0FBQ2RYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsR0FkSSxDQUFQO0FBZUQsQ0FoQkQ7O0FBa0JBLE1BQU0wRSxtQkFBbUIsR0FBSTVFLElBQUQsSUFBVTtBQUNwQztBQUNBLFNBQU9QLEtBQUssQ0FDVjlCLGlEQUFPLEdBQUdHLHdEQUFWLEdBQTJCLHdDQURqQixFQUVWO0FBQ0UwQyxVQUFNLEVBQUUsTUFEVjtBQUVFYixXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFcEIsK0NBREQ7QUFFUG1DLFlBQU0sRUFBRSxrQkFGRDtBQUdQLHNCQUFnQjtBQUhULEtBRlg7QUFPRUMsUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWQsSUFBZjtBQVBSLEdBRlUsQ0FBTCxDQVlKSCxJQVpJLENBWUVDLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNELEdBZEksRUFlSkYsSUFmSSxDQWVFRyxJQUFELElBQVU7QUFDZFQsV0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVosRUFBOEJRLElBQTlCO0FBQ0EsV0FBT0EsSUFBUDtBQUNELEdBbEJJLEVBbUJKQyxLQW5CSSxDQW1CR0MsR0FBRCxJQUFTO0FBQ2RYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsR0FyQkksQ0FBUDtBQXNCRCxDQXhCRDs7QUEwQkEsTUFBTTJFLFdBQVcsR0FBSTlCLEVBQUQsSUFBUTtBQUMxQixTQUFPdEQsS0FBSyxDQUNULDJIQUEwSHNELEVBQUcsRUFEcEgsRUFFVjtBQUNFcEQsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRXBCLCtDQUFLQTtBQUROO0FBRFgsR0FGVSxDQUFMLENBUUpxQixJQVJJLENBUUVDLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNELEdBVkksRUFXSkYsSUFYSSxDQVdFRyxJQUFELElBQVU7QUFDZCxXQUFPQSxJQUFQO0FBQ0QsR0FiSSxFQWNKQyxLQWRJLENBY0dDLEdBQUQsSUFBUztBQUNkWCxXQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELEdBaEJJLENBQVA7QUFpQkQsQ0FsQkQ7O0FBb0JBLE1BQU00RSxrQkFBa0IsR0FBRyxDQUFDL0IsRUFBRCxFQUFLYSxLQUFMLEtBQWU7QUFDeEMsU0FBT25FLEtBQUssQ0FDVjlCLGlEQUFPLEdBQ0xHLHdEQURGLEdBRUcsa0RBQWlEaUYsRUFBRyxFQUg3QyxFQUlWO0FBQ0V2QyxVQUFNLEVBQUUsS0FEVjtBQUVFYixXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFcEIsK0NBREQ7QUFFUG1DLFlBQU0sRUFBRSxrQkFGRDtBQUdQLHNCQUFnQjtBQUhULEtBRlg7QUFPRUMsUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZThDLEtBQWY7QUFQUixHQUpVLENBQUwsQ0FjSi9ELElBZEksQ0FjRUMsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsR0FoQkksRUFpQkpGLElBakJJLENBaUJFRyxJQUFELElBQVU7QUFDZCxXQUFPQSxJQUFQO0FBQ0QsR0FuQkksRUFvQkpDLEtBcEJJLENBb0JHQyxHQUFELElBQVM7QUFDZFgsV0FBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRCxHQXRCSSxDQUFQO0FBdUJELENBeEJEOztBQTBCQSxNQUFNNkUsb0JBQW9CLEdBQUkvRSxJQUFELElBQVU7QUFDckMsU0FBT1AsS0FBSyxDQUNULGtJQURTLEVBRVY7QUFDRWUsVUFBTSxFQUFFLEtBRFY7QUFFRWIsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRXBCLCtDQUREO0FBRVBtQyxZQUFNLEVBQUUsa0JBRkQ7QUFHUCxzQkFBZ0I7QUFIVCxLQUZYO0FBT0VDLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVkLElBQWY7QUFQUixHQUZVLENBQUwsQ0FZSkgsSUFaSSxDQVlFQyxRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxHQWRJLEVBZUpGLElBZkksQ0FlRUcsSUFBRCxJQUFVO0FBQ2QsV0FBT0EsSUFBUDtBQUNELEdBakJJLEVBa0JKQyxLQWxCSSxDQWtCR0MsR0FBRCxJQUFTO0FBQ2RYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsR0FwQkksQ0FBUDtBQXFCRCxDQXRCRDs7QUF3QkEsTUFBTThFLGNBQWMsR0FBRyxDQUFDakMsRUFBRCxFQUFLWixJQUFMLEtBQWM7QUFDbkMsUUFBTUMsUUFBUSxHQUFHLElBQUlDLFFBQUosRUFBakI7QUFDQUQsVUFBUSxDQUFDRSxNQUFULENBQWdCLE1BQWhCLEVBQXdCSCxJQUF4QjtBQUNBLFNBQU8xQyxLQUFLLENBQ1Y5QixpREFBTyxHQUNMRyx3REFERixHQUVHLDJDQUEwQ2lGLEVBQUcsYUFBWVosSUFBSSxDQUFDOEMsSUFBSyxFQUg1RCxFQUlWO0FBQ0V6RSxVQUFNLEVBQUUsTUFEVjtBQUVFYixXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFcEIsK0NBQUtBO0FBRE4sS0FGWDtBQUtFb0MsUUFBSSxFQUFFd0I7QUFMUixHQUpVLENBQUwsQ0FZSnZDLElBWkksQ0FZRUMsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsR0FkSSxFQWVKRixJQWZJLENBZUVHLElBQUQsSUFBVTtBQUNkO0FBQ0EsV0FBT0EsSUFBUDtBQUNELEdBbEJJLEVBbUJKQyxLQW5CSSxDQW1CR0MsR0FBRCxJQUFTO0FBQ2RYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsR0FyQkksQ0FBUDtBQXNCRCxDQXpCRDs7QUEyQkEsTUFBTWdGLG1CQUFtQixHQUFJbkMsRUFBRCxJQUFRO0FBQ2xDLFNBQU90RCxLQUFLLENBQ1Y5QixpREFBTyxHQUNMRyx3REFERixHQUVHLGdFQUErRGlGLEVBQUcsRUFIM0QsRUFJVjtBQUNFcEQsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRXBCLCtDQUFLQTtBQUROO0FBRFgsR0FKVSxDQUFMLENBVUpxQixJQVZJLENBVUVDLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNELEdBWkksRUFhSkYsSUFiSSxDQWFFRyxJQUFELElBQVU7QUFDZCxXQUFPQSxJQUFQO0FBQ0QsR0FmSSxFQWdCSkMsS0FoQkksQ0FnQkdDLEdBQUQsSUFBUztBQUNkWCxXQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELEdBbEJJLENBQVA7QUFtQkQsQ0FwQkQsQyxDQXNCQTs7O0FBRUEsTUFBTWlGLGlCQUFpQixHQUFJbkYsSUFBRCxJQUFVO0FBQ2xDO0FBQ0EsU0FBT1AsS0FBSyxDQUNWOUIsaURBQU8sR0FDTEksMERBREYsR0FFRyx3REFITyxFQUlWO0FBQ0V5QyxVQUFNLEVBQUUsTUFEVjtBQUVFYixXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFcEIsK0NBREQ7QUFFUG1DLFlBQU0sRUFBRSxrQkFGRDtBQUdQLHNCQUFnQjtBQUhULEtBRlg7QUFPRUMsUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWQsSUFBZjtBQVBSLEdBSlUsQ0FBTCxDQWNKSCxJQWRJLENBY0VDLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNELEdBaEJJLEVBaUJKRixJQWpCSSxDQWlCRUcsSUFBRCxJQUFVO0FBQ2RULFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCUSxJQUE5QjtBQUNBLFdBQU9BLElBQVA7QUFDRCxHQXBCSSxFQXFCSkMsS0FyQkksQ0FxQkdDLEdBQUQsSUFBUztBQUNkWCxXQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELEdBdkJJLENBQVA7QUF3QkQsQ0ExQkQ7O0FBNEJBLE1BQU1rRixzQkFBc0IsR0FBRyxDQUFDeEIsS0FBRCxFQUFRekIsSUFBUixLQUFpQjtBQUM5QztBQUNBLFFBQU1DLFFBQVEsR0FBRyxJQUFJQyxRQUFKLEVBQWpCO0FBQ0EsU0FBTzVDLEtBQUssQ0FDVjlCLGlEQUFPLEdBQ0xJLDBEQURGLEdBRUcsK0RBSE8sRUFJVjtBQUNFeUMsVUFBTSxFQUFFLE1BRFY7QUFFRWIsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRXBCLCtDQUREO0FBRVBtQyxZQUFNLEVBQUUsa0JBRkQ7QUFHUCxzQkFBZ0I7QUFIVCxLQUZYO0FBT0VDLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU4QyxLQUFmO0FBUFIsR0FKVSxDQUFMLENBY0ovRCxJQWRJLENBY0VDLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNELEdBaEJJLEVBaUJKRixJQWpCSSxDQWlCRUcsSUFBRCxJQUFVO0FBQ2RULFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJRLElBQTVCO0FBQ0FvQyxZQUFRLENBQUNFLE1BQVQsQ0FBZ0IsTUFBaEIsRUFBd0JILElBQXhCO0FBQ0EsV0FBTzFDLEtBQUssQ0FDVjlCLGlEQUFPLEdBQ0xJLDBEQURGLEdBRUcsb0RBQW1EaUMsSUFBSSxDQUFDK0MsRUFBRyxhQUFZL0MsSUFBSSxDQUFDNkQsUUFBUyxFQUg5RSxFQUlWO0FBQ0VyRCxZQUFNLEVBQUUsTUFEVjtBQUVFYixhQUFPLEVBQUU7QUFDUEMsY0FBTSxFQUFFcEIsK0NBQUtBO0FBRE4sT0FGWDtBQUtFb0MsVUFBSSxFQUFFd0I7QUFMUixLQUpVLENBQUwsQ0FZSnZDLElBWkksQ0FZRUMsUUFBRCxJQUFjO0FBQ2xCLGFBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsS0FkSSxFQWVKRixJQWZJLENBZUVHLElBQUQsSUFBVTtBQUNkVCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ1EsSUFBakM7QUFDQSxhQUFPQSxJQUFQO0FBQ0QsS0FsQkksRUFtQkpDLEtBbkJJLENBbUJHQyxHQUFELElBQVM7QUFDZFgsYUFBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRCxLQXJCSSxDQUFQO0FBc0JELEdBMUNJLEVBMkNKRCxLQTNDSSxDQTJDR0MsR0FBRCxJQUFTO0FBQ2RYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsR0E3Q0ksQ0FBUDtBQThDRCxDQWpERDs7QUFtREEsTUFBTW1GLG9CQUFvQixHQUFJdEIsV0FBRCxJQUFpQjtBQUM1QyxTQUFPdEUsS0FBSyxDQUNWOUIsaURBQU8sR0FDTEksMERBREYsR0FFRyxxREFBb0RnRyxXQUFZLEVBSHpELEVBSVY7QUFDRXBFLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUVwQiwrQ0FBS0E7QUFETjtBQURYLEdBSlUsQ0FBTCxDQVVKcUIsSUFWSSxDQVVFQyxRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxHQVpJLEVBYUpGLElBYkksQ0FhRUcsSUFBRCxJQUFVO0FBQ2QsV0FBT0EsSUFBUDtBQUNELEdBZkksRUFnQkpDLEtBaEJJLENBZ0JHQyxHQUFELElBQVM7QUFDZFgsV0FBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRCxHQWxCSSxDQUFQO0FBbUJELENBcEJEOztBQXNCQSxNQUFNb0YsYUFBYSxHQUFJdkMsRUFBRCxJQUFRO0FBQzVCLFNBQU90RCxLQUFLLENBQ1Qsd0lBQXVJc0QsRUFBRyxFQURqSSxFQUVWO0FBQ0VwRCxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFcEIsK0NBQUtBO0FBRE47QUFEWCxHQUZVLENBQUwsQ0FRSnFCLElBUkksQ0FRRUMsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsR0FWSSxFQVdKRixJQVhJLENBV0VHLElBQUQsSUFBVTtBQUNkLFdBQU9BLElBQVA7QUFDRCxHQWJJLEVBY0pDLEtBZEksQ0FjR0MsR0FBRCxJQUFTO0FBQ2RYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsR0FoQkksQ0FBUDtBQWlCRCxDQWxCRDs7QUFvQkEsTUFBTXFGLHdCQUF3QixHQUFJQyxhQUFELElBQW1CO0FBQ2xELFNBQU8vRixLQUFLLENBQ1Y5QixpREFBTyxHQUNMSSwwREFERixHQUVHLGtFQUFpRXlILGFBQWMsRUFIeEUsRUFJVjtBQUNFN0YsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRXBCLCtDQUFLQTtBQUROO0FBRFgsR0FKVSxDQUFMLENBVUpxQixJQVZJLENBVUVDLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNELEdBWkksRUFhSkYsSUFiSSxDQWFFRyxJQUFELElBQVU7QUFDZCxRQUFJaUUsUUFBUSxHQUFHakUsSUFBSSxDQUFDa0UsSUFBTCxDQUFVakYsT0FBVixDQUFmO0FBQ0EsV0FBT2dGLFFBQVA7QUFDRCxHQWhCSSxFQWlCSmhFLEtBakJJLENBaUJHQyxHQUFELElBQVM7QUFDZFgsV0FBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRCxHQW5CSSxDQUFQO0FBb0JELENBckJEOztBQXVCQSxNQUFNdUYsb0JBQW9CLEdBQUcsQ0FBQzFDLEVBQUQsRUFBS2EsS0FBTCxLQUFlO0FBQzFDLFNBQU9uRSxLQUFLLENBQ1Y5QixpREFBTyxHQUNMSSwwREFERixHQUVHLDZEQUE0RGdGLEVBQUcsRUFIeEQsRUFJVjtBQUNFdkMsVUFBTSxFQUFFLEtBRFY7QUFFRWIsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRXBCLCtDQUREO0FBRVBtQyxZQUFNLEVBQUUsa0JBRkQ7QUFHUCxzQkFBZ0I7QUFIVCxLQUZYO0FBT0VDLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU4QyxLQUFmO0FBUFIsR0FKVSxDQUFMLENBY0ovRCxJQWRJLENBY0VDLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNELEdBaEJJLEVBaUJKRixJQWpCSSxDQWlCRUcsSUFBRCxJQUFVO0FBQ2QsV0FBT0EsSUFBUDtBQUNELEdBbkJJLEVBb0JKQyxLQXBCSSxDQW9CR0MsR0FBRCxJQUFTO0FBQ2RYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsR0F0QkksQ0FBUDtBQXVCRCxDQXhCRDs7QUEwQkEsTUFBTXdGLHNCQUFzQixHQUFJMUYsSUFBRCxJQUFVO0FBQ3ZDLFNBQU9QLEtBQUssQ0FDVjlCLGlEQUFPLEdBQ0xJLDBEQURGLEdBRUcsMkRBSE8sRUFJVjtBQUNFeUMsVUFBTSxFQUFFLEtBRFY7QUFFRWIsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRXBCLCtDQUREO0FBRVBtQyxZQUFNLEVBQUUsa0JBRkQ7QUFHUCxzQkFBZ0I7QUFIVCxLQUZYO0FBT0VDLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVkLElBQWY7QUFQUixHQUpVLENBQUwsQ0FjSkgsSUFkSSxDQWNFQyxRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxHQWhCSSxFQWlCSkYsSUFqQkksQ0FpQkVHLElBQUQsSUFBVTtBQUNkLFdBQU9BLElBQVA7QUFDRCxHQW5CSSxFQW9CSkMsS0FwQkksQ0FvQkdDLEdBQUQsSUFBUztBQUNkWCxXQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELEdBdEJJLENBQVA7QUF1QkQsQ0F4QkQ7O0FBMEJBLE1BQU15RixnQkFBZ0IsR0FBRyxDQUFDNUMsRUFBRCxFQUFLWixJQUFMLEtBQWM7QUFDckMsUUFBTUMsUUFBUSxHQUFHLElBQUlDLFFBQUosRUFBakI7QUFFQUQsVUFBUSxDQUFDRSxNQUFULENBQWdCLE1BQWhCLEVBQXdCSCxJQUF4QjtBQUNBLFNBQU8xQyxLQUFLLENBQ1Y5QixpREFBTyxHQUNMSSwwREFERixHQUVHLG9EQUFtRGdGLEVBQUcsYUFBWVosSUFBSSxDQUFDOEMsSUFBSyxFQUhyRSxFQUlWO0FBQ0V6RSxVQUFNLEVBQUUsTUFEVjtBQUVFYixXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFcEIsK0NBQUtBO0FBRE4sS0FGWDtBQUtFb0MsUUFBSSxFQUFFd0I7QUFMUixHQUpVLENBQUwsQ0FZSnZDLElBWkksQ0FZRUMsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsR0FkSSxFQWVKRixJQWZJLENBZUVHLElBQUQsSUFBVTtBQUNkVCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ1EsSUFBakM7QUFDQSxXQUFPQSxJQUFQO0FBQ0QsR0FsQkksRUFtQkpDLEtBbkJJLENBbUJHQyxHQUFELElBQVM7QUFDZFgsV0FBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRCxHQXJCSSxDQUFQO0FBc0JELENBMUJEOztBQTRCQSxNQUFNMEYsY0FBYyxHQUFJN0MsRUFBRCxJQUFRO0FBQzdCeEQsU0FBTyxDQUFDQyxHQUFSLENBQVl1RCxFQUFaO0FBQ0EsU0FBT3RELEtBQUssQ0FDVjlCLGlEQUFPLEdBQ0xJLDBEQURGLEdBRUcsNkNBQTRDZ0YsRUFBRyxFQUh4QyxFQUlWO0FBQ0VwRCxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFcEIsK0NBQUtBO0FBRE47QUFEWCxHQUpVLENBQUwsQ0FVSnFCLElBVkksQ0FVRUMsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQzJDLElBQVQsRUFBUDtBQUNELEdBWkksRUFhSjVDLElBYkksQ0FhQyxVQUFVRyxJQUFWLEVBQWdCO0FBQ3BCLFFBQUkwQyxPQUFPLEdBQUdDLEdBQUcsQ0FBQ0MsZUFBSixDQUFvQjVDLElBQXBCLENBQWQ7QUFDQSxXQUFPMEMsT0FBUDtBQUNELEdBaEJJLEVBaUJKekMsS0FqQkksQ0FpQkdDLEdBQUQsSUFBUztBQUNkWCxXQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELEdBbkJJLENBQVA7QUFvQkQsQ0F0QkQ7O0FBd0JBLE1BQU0yRix1QkFBdUIsR0FBSXZHLFFBQUQsSUFBYztBQUM1QyxTQUFPRyxLQUFLLENBQ1Y5QixpREFBTyxHQUNMSSwwREFERixHQUVHLHdFQUF1RXVCLFFBQVEsQ0FBQ2MsUUFBUyxFQUhsRixFQUlWO0FBQ0VULFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUVwQiwrQ0FBS0E7QUFETjtBQURYLEdBSlUsQ0FBTCxDQVVKcUIsSUFWSSxDQVVFQyxRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxHQVpJLEVBYUpGLElBYkksQ0FhRUcsSUFBRCxJQUFVO0FBQ2RBLFFBQUksQ0FBQ2tFLElBQUwsQ0FBVSxVQUFVaEYsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQ3hCLFVBQUlrRixLQUFLLEdBQUcsSUFBSTNGLElBQUosQ0FBU1EsQ0FBQyxDQUFDb0YsT0FBWCxDQUFaO0FBQUEsVUFDRUMsS0FBSyxHQUFHLElBQUk3RixJQUFKLENBQVNTLENBQUMsQ0FBQ21GLE9BQVgsQ0FEVjtBQUVBLGFBQU9DLEtBQUssR0FBR0YsS0FBZjtBQUNELEtBSkQ7QUFLQSxXQUFPckUsSUFBUDtBQUNELEdBcEJJLEVBcUJKQyxLQXJCSSxDQXFCR0MsR0FBRCxJQUFTO0FBQ2RYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsR0F2QkksQ0FBUDtBQXdCRCxDQXpCRDs7QUEyQkEsTUFBTTRGLGVBQWUsR0FBRyxNQUFNO0FBQzVCLFNBQU9yRyxLQUFLLENBQ1Y5QixpREFBTyxHQUFHRSxvREFBVixHQUF3QixpREFEZCxFQUVWO0FBQ0U4QixXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFcEIsK0NBQUtBO0FBRE47QUFEWCxHQUZVLENBQUwsQ0FRSnFCLElBUkksQ0FRRUMsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsR0FWSSxFQVdKRixJQVhJLENBV0VHLElBQUQsSUFBVTtBQUNkLFdBQU9BLElBQVA7QUFDRCxHQWJJLEVBY0pDLEtBZEksQ0FjR0MsR0FBRCxJQUFTO0FBQ2RYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsR0FoQkksQ0FBUDtBQWlCRCxDQWxCRDs7QUFvQkEsTUFBTTZGLHNCQUFzQixHQUFJekcsUUFBRCxJQUFjO0FBQzNDLFNBQU9HLEtBQUssQ0FDVCw0SkFBMkpILFFBQVEsQ0FBQ2MsUUFBUyxFQURwSyxFQUVWO0FBQ0VULFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUVwQiwrQ0FBS0E7QUFETjtBQURYLEdBRlUsQ0FBTCxDQVFKcUIsSUFSSSxDQVFFQyxRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxHQVZJLEVBV0pGLElBWEksQ0FXRUcsSUFBRCxJQUFVO0FBQ2RBLFFBQUksQ0FBQ2tFLElBQUwsQ0FBVSxVQUFVaEYsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQ3hCLFVBQUlrRixLQUFLLEdBQUcsSUFBSTNGLElBQUosQ0FBU1EsQ0FBQyxDQUFDb0YsT0FBWCxDQUFaO0FBQUEsVUFDRUMsS0FBSyxHQUFHLElBQUk3RixJQUFKLENBQVNTLENBQUMsQ0FBQ21GLE9BQVgsQ0FEVjtBQUVBLGFBQU9DLEtBQUssR0FBR0YsS0FBZjtBQUNELEtBSkQ7QUFLQSxXQUFPckUsSUFBUDtBQUNELEdBbEJJLEVBbUJKQyxLQW5CSSxDQW1CR0MsR0FBRCxJQUFTO0FBQ2RYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsR0FyQkksQ0FBUDtBQXNCRCxDQXZCRDs7QUF5QkEsTUFBTThGLGlCQUFpQixHQUFJakQsRUFBRCxJQUFRO0FBQ2hDLFNBQU90RCxLQUFLLENBQ1Y5QixpREFBTyxHQUNMSSwwREFERixHQUVHLG1FQUFrRWdGLEVBQUcsRUFIOUQsRUFJVjtBQUNFcEQsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRXBCLCtDQUFLQTtBQUROO0FBRFgsR0FKVSxDQUFMLENBVUpxQixJQVZJLENBVUVDLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNELEdBWkksRUFhSkYsSUFiSSxDQWFFRyxJQUFELElBQVU7QUFDZCxXQUFPQSxJQUFQO0FBQ0QsR0FmSSxFQWdCSkMsS0FoQkksQ0FnQkdDLEdBQUQsSUFBUztBQUNkWCxXQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELEdBbEJJLENBQVA7QUFtQkQsQ0FwQkQsQyxDQXNCQTs7O0FBRUEsTUFBTStGLG9CQUFvQixHQUFJakcsSUFBRCxJQUFVO0FBQ3JDO0FBQ0EsU0FBT1AsS0FBSyxDQUNWOUIsaURBQU8sR0FDTEssNkRBREYsR0FFRyw2Q0FITyxFQUlWO0FBQ0V3QyxVQUFNLEVBQUUsTUFEVjtBQUVFYixXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFcEIsK0NBREQ7QUFFUG1DLFlBQU0sRUFBRSxrQkFGRDtBQUdQLHNCQUFnQjtBQUhULEtBRlg7QUFPRUMsUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWQsSUFBZjtBQVBSLEdBSlUsQ0FBTCxDQWNKSCxJQWRJLENBY0VDLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNELEdBaEJJLEVBaUJKRixJQWpCSSxDQWlCRUcsSUFBRCxJQUFVO0FBQ2RULFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCUSxJQUE5QjtBQUNBLFdBQU9BLElBQVA7QUFDRCxHQXBCSSxFQXFCSkMsS0FyQkksQ0FxQkdDLEdBQUQsSUFBUztBQUNkWCxXQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELEdBdkJJLENBQVA7QUF3QkQsQ0ExQkQ7O0FBNEJBLE1BQU1nRyx5QkFBeUIsR0FBRyxDQUFDdEMsS0FBRCxFQUFRekIsSUFBUixLQUFpQjtBQUNqRDtBQUNBLFFBQU1DLFFBQVEsR0FBRyxJQUFJQyxRQUFKLEVBQWpCO0FBQ0EsU0FBTzVDLEtBQUssQ0FDVjlCLGlEQUFPLEdBQ0xLLDZEQURGLEdBRUcsb0RBSE8sRUFJVjtBQUNFd0MsVUFBTSxFQUFFLE1BRFY7QUFFRWIsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRXBCLCtDQUREO0FBRVBtQyxZQUFNLEVBQUUsa0JBRkQ7QUFHUCxzQkFBZ0I7QUFIVCxLQUZYO0FBT0VDLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU4QyxLQUFmO0FBUFIsR0FKVSxDQUFMLENBY0ovRCxJQWRJLENBY0VDLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNELEdBaEJJLEVBaUJKRixJQWpCSSxDQWlCRUcsSUFBRCxJQUFVO0FBQ2RULFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJRLElBQTVCO0FBQ0FvQyxZQUFRLENBQUNFLE1BQVQsQ0FBZ0IsTUFBaEIsRUFBd0JILElBQXhCO0FBQ0EsV0FBTzFDLEtBQUssQ0FDVjlCLGlEQUFPLEdBQ0xLLDZEQURGLEdBRUcsMkNBQTBDZ0MsSUFBSSxDQUFDK0MsRUFBRyxhQUFZL0MsSUFBSSxDQUFDNkQsUUFBUyxFQUhyRSxFQUlWO0FBQ0VyRCxZQUFNLEVBQUUsTUFEVjtBQUVFYixhQUFPLEVBQUU7QUFDUEMsY0FBTSxFQUFFcEIsK0NBQUtBO0FBRE4sT0FGWDtBQUtFb0MsVUFBSSxFQUFFd0I7QUFMUixLQUpVLENBQUwsQ0FZSnZDLElBWkksQ0FZRUMsUUFBRCxJQUFjO0FBQ2xCLGFBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsS0FkSSxFQWVKRixJQWZJLENBZUVHLElBQUQsSUFBVTtBQUNkVCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ1EsSUFBakM7QUFDQSxhQUFPQSxJQUFQO0FBQ0QsS0FsQkksRUFtQkpDLEtBbkJJLENBbUJHQyxHQUFELElBQVM7QUFDZFgsYUFBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRCxLQXJCSSxDQUFQO0FBc0JELEdBMUNJLEVBMkNKRCxLQTNDSSxDQTJDR0MsR0FBRCxJQUFTO0FBQ2RYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsR0E3Q0ksQ0FBUDtBQThDRCxDQWpERDs7QUFtREEsTUFBTWlHLHVCQUF1QixHQUFJcEMsV0FBRCxJQUFpQjtBQUMvQyxTQUFPdEUsS0FBSyxDQUNWOUIsaURBQU8sR0FDTEssNkRBREYsR0FFRyw0Q0FBMkMrRixXQUFZLEVBSGhELEVBSVY7QUFDRXBFLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUVwQiwrQ0FBS0E7QUFETjtBQURYLEdBSlUsQ0FBTCxDQVVKcUIsSUFWSSxDQVVFQyxRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxHQVpJLEVBYUpGLElBYkksQ0FhRUcsSUFBRCxJQUFVO0FBQ2QsV0FBT0EsSUFBUDtBQUNELEdBZkksRUFnQkpDLEtBaEJJLENBZ0JHQyxHQUFELElBQVM7QUFDZFgsV0FBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRCxHQWxCSSxDQUFQO0FBbUJELENBcEJEOztBQXNCQSxNQUFNa0csMkJBQTJCLEdBQUlaLGFBQUQsSUFBbUI7QUFDckQsU0FBTy9GLEtBQUssQ0FDVjlCLGlEQUFPLEdBQ0xLLDZEQURGLEdBRUcseURBQXdEd0gsYUFBYyxFQUgvRCxFQUlWO0FBQ0U3RixXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFcEIsK0NBQUtBO0FBRE47QUFEWCxHQUpVLENBQUwsQ0FVSnFCLElBVkksQ0FVRUMsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsR0FaSSxFQWFKRixJQWJJLENBYUVHLElBQUQsSUFBVTtBQUNkLFFBQUlpRSxRQUFRLEdBQUdqRSxJQUFJLENBQUNrRSxJQUFMLENBQVVqRixPQUFWLENBQWY7QUFDQSxXQUFPZ0YsUUFBUDtBQUNELEdBaEJJLEVBaUJKaEUsS0FqQkksQ0FpQkdDLEdBQUQsSUFBUztBQUNkWCxXQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELEdBbkJJLENBQVA7QUFvQkQsQ0FyQkQ7O0FBdUJBLE1BQU1tRyxpQkFBaUIsR0FBSXRELEVBQUQsSUFBUTtBQUNoQyxTQUFPdEQsS0FBSyxDQUNWOUIsaURBQU8sR0FBR0ssNkRBQVYsR0FBaUMsb0NBQW1DK0UsRUFBRyxFQUQ3RCxFQUVWO0FBQ0VwRCxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFcEIsK0NBQUtBO0FBRE47QUFEWCxHQUZVLENBQUwsQ0FRSnFCLElBUkksQ0FRRUMsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQzJDLElBQVQsRUFBUDtBQUNELEdBVkksRUFXSjVDLElBWEksQ0FXQyxVQUFVRyxJQUFWLEVBQWdCO0FBQ3BCLFFBQUkwQyxPQUFPLEdBQUdDLEdBQUcsQ0FBQ0MsZUFBSixDQUFvQjVDLElBQXBCLENBQWQ7QUFDQSxXQUFPMEMsT0FBUDtBQUNELEdBZEksRUFlSnpDLEtBZkksQ0FlR0MsR0FBRCxJQUFTO0FBQ2RYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsR0FqQkksQ0FBUDtBQWtCRCxDQW5CRDs7QUFxQkEsTUFBTW9HLDBCQUEwQixHQUFJaEgsUUFBRCxJQUFjO0FBQy9DLFNBQU9HLEtBQUssQ0FDVjlCLGlEQUFPLEdBQ0xLLDZEQURGLEdBRUcsNkRBQTREc0IsUUFBUSxDQUFDYyxRQUFTLEVBSHZFLEVBSVY7QUFDRVQsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRXBCLCtDQUFLQTtBQUROO0FBRFgsR0FKVSxDQUFMLENBVUpxQixJQVZJLENBVUVDLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNELEdBWkksRUFhSkYsSUFiSSxDQWFFRyxJQUFELElBQVU7QUFDZEEsUUFBSSxDQUFDa0UsSUFBTCxDQUFVLFVBQVVoRixDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDeEIsVUFBSWtGLEtBQUssR0FBRyxJQUFJM0YsSUFBSixDQUFTUSxDQUFDLENBQUNvRixPQUFYLENBQVo7QUFBQSxVQUNFQyxLQUFLLEdBQUcsSUFBSTdGLElBQUosQ0FBU1MsQ0FBQyxDQUFDbUYsT0FBWCxDQURWO0FBRUEsYUFBT0MsS0FBSyxHQUFHRixLQUFmO0FBQ0QsS0FKRDtBQUtBLFdBQU9yRSxJQUFQO0FBQ0QsR0FwQkksRUFxQkpDLEtBckJJLENBcUJHQyxHQUFELElBQVM7QUFDZFgsV0FBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRCxHQXZCSSxDQUFQO0FBd0JELENBekJEOztBQTJCQSxNQUFNcUcsZ0JBQWdCLEdBQUl4RCxFQUFELElBQVE7QUFDL0IsU0FBT3RELEtBQUssQ0FDVjlCLGlEQUFPLEdBQ0xLLDZEQURGLEdBRUcsK0NBQThDK0UsRUFBRyxFQUgxQyxFQUlWO0FBQ0VwRCxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFcEIsK0NBQUtBO0FBRE47QUFEWCxHQUpVLENBQUwsQ0FVSnFCLElBVkksQ0FVRUMsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsR0FaSSxFQWFKRixJQWJJLENBYUVHLElBQUQsSUFBVTtBQUNkLFdBQU9BLElBQVA7QUFDRCxHQWZJLEVBZ0JKQyxLQWhCSSxDQWdCR0MsR0FBRCxJQUFTO0FBQ2RYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsR0FsQkksQ0FBUDtBQW1CRCxDQXBCRDs7QUFzQkEsTUFBTXNHLHlCQUF5QixHQUFJbEgsUUFBRCxJQUFjO0FBQzlDLFNBQU9HLEtBQUssQ0FDVCwrSUFBOElILFFBQVEsQ0FBQ2MsUUFBUyxFQUR2SixFQUVWO0FBQ0VULFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUVwQiwrQ0FBS0E7QUFETjtBQURYLEdBRlUsQ0FBTCxDQVFKcUIsSUFSSSxDQVFFQyxRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxHQVZJLEVBV0pGLElBWEksQ0FXRUcsSUFBRCxJQUFVO0FBQ2RBLFFBQUksQ0FBQ2tFLElBQUwsQ0FBVSxVQUFVaEYsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQ3hCLFVBQUlrRixLQUFLLEdBQUcsSUFBSTNGLElBQUosQ0FBU1EsQ0FBQyxDQUFDb0YsT0FBWCxDQUFaO0FBQUEsVUFDRUMsS0FBSyxHQUFHLElBQUk3RixJQUFKLENBQVNTLENBQUMsQ0FBQ21GLE9BQVgsQ0FEVjtBQUVBLGFBQU9DLEtBQUssR0FBR0YsS0FBZjtBQUNELEtBSkQ7QUFLQSxXQUFPckUsSUFBUDtBQUNELEdBbEJJLEVBbUJKQyxLQW5CSSxDQW1CR0MsR0FBRCxJQUFTO0FBQ2RYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsR0FyQkksQ0FBUDtBQXNCRCxDQXZCRDs7QUF5QkEsTUFBTXVHLHVCQUF1QixHQUFHLENBQUMxRCxFQUFELEVBQUthLEtBQUwsS0FBZTtBQUM3QyxTQUFPbkUsS0FBSyxDQUNWOUIsaURBQU8sR0FDTEssNkRBREYsR0FFRyxrREFBaUQrRSxFQUFHLEVBSDdDLEVBSVY7QUFDRXZDLFVBQU0sRUFBRSxLQURWO0FBRUViLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUVwQiwrQ0FERDtBQUVQbUMsWUFBTSxFQUFFLGtCQUZEO0FBR1Asc0JBQWdCO0FBSFQsS0FGWDtBQU9FQyxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlOEMsS0FBZjtBQVBSLEdBSlUsQ0FBTCxDQWNKL0QsSUFkSSxDQWNFQyxRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxHQWhCSSxFQWlCSkYsSUFqQkksQ0FpQkVHLElBQUQsSUFBVTtBQUNkLFdBQU9BLElBQVA7QUFDRCxHQW5CSSxFQW9CSkMsS0FwQkksQ0FvQkdDLEdBQUQsSUFBUztBQUNkWCxXQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELEdBdEJJLENBQVA7QUF1QkQsQ0F4QkQ7O0FBMEJBLE1BQU13Ryx5QkFBeUIsR0FBSTFHLElBQUQsSUFBVTtBQUMxQyxTQUFPUCxLQUFLLENBQ1Y5QixpREFBTyxHQUNMSyw2REFERixHQUVHLHNEQUhPLEVBSVY7QUFDRXdDLFVBQU0sRUFBRSxLQURWO0FBRUViLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUVwQiwrQ0FERDtBQUVQbUMsWUFBTSxFQUFFLGtCQUZEO0FBR1Asc0JBQWdCO0FBSFQsS0FGWDtBQU9FQyxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlZCxJQUFmO0FBUFIsR0FKVSxDQUFMLENBY0pILElBZEksQ0FjRUMsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsR0FoQkksRUFpQkpGLElBakJJLENBaUJFRyxJQUFELElBQVU7QUFDZCxXQUFPQSxJQUFQO0FBQ0QsR0FuQkksRUFvQkpDLEtBcEJJLENBb0JHQyxHQUFELElBQVM7QUFDZFgsV0FBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRCxHQXRCSSxDQUFQO0FBdUJELENBeEJEOztBQTBCQSxNQUFNeUcsbUJBQW1CLEdBQUcsQ0FBQzVELEVBQUQsRUFBS1osSUFBTCxLQUFjO0FBQ3hDLFFBQU1DLFFBQVEsR0FBRyxJQUFJQyxRQUFKLEVBQWpCO0FBRUFELFVBQVEsQ0FBQ0UsTUFBVCxDQUFnQixNQUFoQixFQUF3QkgsSUFBeEI7QUFDQSxTQUFPMUMsS0FBSyxDQUNWOUIsaURBQU8sR0FDTEssNkRBREYsR0FFRywyQ0FBMEMrRSxFQUFHLGFBQVlaLElBQUksQ0FBQzhDLElBQUssRUFINUQsRUFJVjtBQUNFekUsVUFBTSxFQUFFLE1BRFY7QUFFRWIsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRXBCLCtDQUFLQTtBQUROLEtBRlg7QUFLRW9DLFFBQUksRUFBRXdCO0FBTFIsR0FKVSxDQUFMLENBWUp2QyxJQVpJLENBWUVDLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNELEdBZEksRUFlSkYsSUFmSSxDQWVFRyxJQUFELElBQVU7QUFDZFQsV0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVosRUFBaUNRLElBQWpDO0FBQ0EsV0FBT0EsSUFBUDtBQUNELEdBbEJJLEVBbUJKQyxLQW5CSSxDQW1CR0MsR0FBRCxJQUFTO0FBQ2RYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsR0FyQkksQ0FBUDtBQXNCRCxDQTFCRDs7QUE0QkEsTUFBTTBHLG1CQUFtQixHQUFJN0QsRUFBRCxJQUFRO0FBQ2xDLFNBQU90RCxLQUFLLENBQ1Y5QixpREFBTyxHQUNMSyw2REFERixHQUVHLGdFQUErRCtFLEVBQUcsRUFIM0QsRUFJVjtBQUNFcEQsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRXBCLCtDQUFLQTtBQUROO0FBRFgsR0FKVSxDQUFMLENBVUpxQixJQVZJLENBVUVDLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNELEdBWkksRUFhSkYsSUFiSSxDQWFFRyxJQUFELElBQVU7QUFDZCxXQUFPQSxJQUFQO0FBQ0QsR0FmSSxFQWdCSkMsS0FoQkksQ0FnQkdDLEdBQUQsSUFBUztBQUNkWCxXQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELEdBbEJJLENBQVA7QUFtQkQsQ0FwQkQsQyxDQXNCQTs7O0FBRUEsTUFBTTJHLGVBQWUsR0FBSXZILFFBQUQsSUFBYztBQUNwQyxTQUFPRyxLQUFLLENBQ1Y5QixpREFBTyxHQUNMTSx3REFERixHQUVHLHNEQUFxRHFCLFFBQVEsQ0FBQ2MsUUFBUyxFQUhoRSxFQUlWO0FBQ0VULFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUVwQiwrQ0FBS0E7QUFETjtBQURYLEdBSlUsQ0FBTCxDQVVKcUIsSUFWSSxDQVVFQyxRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxHQVpJLEVBYUpGLElBYkksQ0FhRUcsSUFBRCxJQUFVO0FBQ2QsV0FBT0EsSUFBUDtBQUNELEdBZkksRUFnQkpDLEtBaEJJLENBZ0JHQyxHQUFELElBQVM7QUFDZFgsV0FBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRCxHQWxCSSxDQUFQO0FBbUJELENBcEJEOztBQXNCQSxNQUFNNEcsMEJBQTBCLEdBQUl4SCxRQUFELElBQWM7QUFDL0MsU0FBT0csS0FBSyxDQUNWOUIsaURBQU8sR0FDTE0sd0RBREYsR0FFRyw2REFBNERxQixRQUFRLENBQUNjLFFBQVMsRUFIdkUsRUFJVjtBQUNFVCxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFcEIsK0NBQUtBO0FBRE47QUFEWCxHQUpVLENBQUwsQ0FVSnFCLElBVkksQ0FVRUMsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsR0FaSSxFQWFKRixJQWJJLENBYUVHLElBQUQsSUFBVTtBQUNkQSxRQUFJLENBQUNrRSxJQUFMLENBQVUsVUFBVWhGLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUN4QixVQUFJa0YsS0FBSyxHQUFHLElBQUkzRixJQUFKLENBQVNRLENBQUMsQ0FBQ29GLE9BQVgsQ0FBWjtBQUFBLFVBQ0VDLEtBQUssR0FBRyxJQUFJN0YsSUFBSixDQUFTUyxDQUFDLENBQUNtRixPQUFYLENBRFY7QUFFQSxhQUFPQyxLQUFLLEdBQUdGLEtBQWY7QUFDRCxLQUpEO0FBS0EsV0FBT3JFLElBQVA7QUFDRCxHQXBCSSxFQXFCSkMsS0FyQkksQ0FxQkdDLEdBQUQsSUFBUztBQUNkWCxXQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELEdBdkJJLENBQVA7QUF3QkQsQ0F6QkQ7O0FBMEJBLE1BQU02RyxrQkFBa0IsR0FBSWhFLEVBQUQsSUFBUTtBQUNqQyxTQUFPdEQsS0FBSyxDQUNWOUIsaURBQU8sR0FDTE0sd0RBREYsR0FFRyx5REFBd0Q4RSxFQUFHLEVBSHBELEVBSVY7QUFDRXBELFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUVwQiwrQ0FBS0E7QUFETjtBQURYLEdBSlUsQ0FBTCxDQVVKcUIsSUFWSSxDQVVFQyxRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxHQVpJLEVBYUpGLElBYkksQ0FhRUcsSUFBRCxJQUFVO0FBQ2QsV0FBT0EsSUFBUDtBQUNELEdBZkksRUFnQkpDLEtBaEJJLENBZ0JHQyxHQUFELElBQVM7QUFDZFgsV0FBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRCxHQWxCSSxDQUFQO0FBbUJELENBcEJEOztBQXNCQSxNQUFNOEcsZUFBZSxHQUFJaEgsSUFBRCxJQUFVO0FBQ2hDO0FBQ0EsU0FBT1AsS0FBSyxDQUNWOUIsaURBQU8sR0FBR00sd0RBQVYsR0FBMkIsNkNBRGpCLEVBRVY7QUFDRXVDLFVBQU0sRUFBRSxNQURWO0FBRUViLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUVwQiwrQ0FERDtBQUVQbUMsWUFBTSxFQUFFLGtCQUZEO0FBR1Asc0JBQWdCO0FBSFQsS0FGWDtBQU9FQyxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlZCxJQUFmO0FBUFIsR0FGVSxDQUFMLENBWUpILElBWkksQ0FZRUMsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsR0FkSSxFQWVKRixJQWZJLENBZUVHLElBQUQsSUFBVTtBQUNkVCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QlEsSUFBOUI7QUFDQSxXQUFPQSxJQUFQO0FBQ0QsR0FsQkksRUFtQkpDLEtBbkJJLENBbUJHQyxHQUFELElBQVM7QUFDZFgsV0FBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRCxHQXJCSSxDQUFQO0FBc0JELENBeEJEOztBQTBCQSxNQUFNK0csa0JBQWtCLEdBQUcsQ0FBQzNILFFBQUQsRUFBV1gsSUFBWCxLQUFvQjtBQUM3QyxTQUFPYyxLQUFLLENBQ1Y5QixpREFBTyxHQUNMTSx3REFERixHQUVHLGlEQUFnRFUsSUFBSyxhQUFZVyxRQUFRLENBQUNjLFFBQVMsRUFINUUsRUFJVjtBQUNFVCxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFcEIsK0NBQUtBO0FBRE47QUFEWCxHQUpVLENBQUwsQ0FVSnFCLElBVkksQ0FVRUMsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsR0FaSSxFQWFKRixJQWJJLENBYUVHLElBQUQsSUFBVTtBQUNkLFdBQU9BLElBQVA7QUFDRCxHQWZJLEVBZ0JKQyxLQWhCSSxDQWdCR0MsR0FBRCxJQUFTO0FBQ2RYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsR0FsQkksQ0FBUDtBQW1CRCxDQXBCRDs7QUFzQkEsTUFBTWdILG1CQUFtQixHQUFJbEgsSUFBRCxJQUFVO0FBQ3BDO0FBQ0EsU0FBT1AsS0FBSyxDQUNWOUIsaURBQU8sR0FBR00sd0RBQVYsR0FBMkIsOENBRGpCLEVBRVY7QUFDRXVDLFVBQU0sRUFBRSxNQURWO0FBRUViLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUVwQiwrQ0FERDtBQUVQbUMsWUFBTSxFQUFFLGtCQUZEO0FBR1Asc0JBQWdCO0FBSFQsS0FGWDtBQU9FQyxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlZCxJQUFmO0FBUFIsR0FGVSxDQUFMLENBWUpILElBWkksQ0FZRUMsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsR0FkSSxFQWVKRixJQWZJLENBZUVHLElBQUQsSUFBVTtBQUNkVCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QlEsSUFBOUI7QUFDQSxXQUFPQSxJQUFQO0FBQ0QsR0FsQkksRUFtQkpDLEtBbkJJLENBbUJHQyxHQUFELElBQVM7QUFDZFgsV0FBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRCxHQXJCSSxDQUFQO0FBc0JELENBeEJEOztBQTBCQSxNQUFNaUgscUJBQXFCLEdBQUlwRSxFQUFELElBQVE7QUFDcEMsU0FBT3RELEtBQUssQ0FDVjlCLGlEQUFPLEdBQ0xNLHdEQURGLEdBRUcsa0RBQWlEOEUsRUFBRyxFQUg3QyxFQUlWO0FBQ0V2QyxVQUFNLEVBQUUsUUFEVjtBQUVFYixXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFcEIsK0NBQUtBO0FBRE47QUFGWCxHQUpVLENBQUwsQ0FXSnFCLElBWEksQ0FXRUMsUUFBRCxJQUFjO0FBQ2xCLFdBQU9QLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTSxRQUFaLENBQVA7QUFDRCxHQWJJLEVBY0pHLEtBZEksQ0FjR0MsR0FBRCxJQUFTO0FBQ2RYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsR0FoQkksQ0FBUDtBQWlCRCxDQWxCRCxDLENBbUJBOzs7QUFFQSxNQUFNa0gsV0FBVyxHQUFJekksSUFBRCxJQUFVO0FBQzVCLFNBQU9jLEtBQUssQ0FDVjlCLGlEQUFPLEdBQ0xRLDREQURGLEdBRUcsd0NBQXVDUSxJQUFLLEVBSHJDLEVBSVY7QUFDRWdCLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUVwQiwrQ0FBS0E7QUFETjtBQURYLEdBSlUsQ0FBTCxDQVVKcUIsSUFWSSxDQVVFQyxRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxHQVpJLEVBYUpGLElBYkksQ0FhRUcsSUFBRCxJQUFVO0FBQ2QsV0FBT0EsSUFBUDtBQUNELEdBZkksRUFnQkpDLEtBaEJJLENBZ0JHQyxHQUFELElBQVM7QUFDZFgsV0FBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRCxHQWxCSSxDQUFQO0FBbUJELENBcEJEOztBQXNCQSxNQUFNbUgsYUFBYSxHQUFJMUksSUFBRCxJQUFVO0FBQzlCLFNBQU9jLEtBQUssQ0FDVjlCLGlEQUFPLEdBQ0xPLDhEQURGLEdBRUcsb0RBQW1EUyxJQUFLLEVBSGpELEVBSVY7QUFDRWdCLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUVwQiwrQ0FBS0E7QUFETjtBQURYLEdBSlUsQ0FBTCxDQVVKcUIsSUFWSSxDQVVFQyxRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxHQVpJLEVBYUpGLElBYkksQ0FhRUcsSUFBRCxJQUFVO0FBQ2QsV0FBT0EsSUFBUDtBQUNELEdBZkksRUFnQkpDLEtBaEJJLENBZ0JHQyxHQUFELElBQVM7QUFDZFgsV0FBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRCxHQWxCSSxDQUFQO0FBbUJELENBcEJEOztBQXNCQSxNQUFNb0gsYUFBYSxHQUFJM0ksSUFBRCxJQUFVO0FBQzlCLFNBQU9jLEtBQUssQ0FDVjlCLGlEQUFPLEdBQ0xRLDREQURGLEdBRUcsNkNBQTRDUSxJQUFLLEVBSDFDLEVBSVY7QUFDRWdCLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUVwQiwrQ0FBS0E7QUFETjtBQURYLEdBSlUsQ0FBTCxDQVVKcUIsSUFWSSxDQVVFQyxRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxHQVpJLEVBYUpGLElBYkksQ0FhRUcsSUFBRCxJQUFVO0FBQ2QsV0FBT0EsSUFBUDtBQUNELEdBZkksRUFnQkpDLEtBaEJJLENBZ0JHQyxHQUFELElBQVM7QUFDZFgsV0FBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRCxHQWxCSSxDQUFQO0FBbUJELENBcEJEOztBQXNCQSxNQUFNcUgsZUFBZSxHQUFJNUksSUFBRCxJQUFVO0FBQ2hDLFNBQU9jLEtBQUssQ0FDVjlCLGlEQUFPLEdBQ0xPLDhEQURGLEdBRUcseURBQXdEUyxJQUFLLEVBSHRELEVBSVY7QUFDRWdCLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUVwQiwrQ0FBS0E7QUFETjtBQURYLEdBSlUsQ0FBTCxDQVVKcUIsSUFWSSxDQVVFQyxRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxHQVpJLEVBYUpGLElBYkksQ0FhRUcsSUFBRCxJQUFVO0FBQ2QsV0FBT0EsSUFBUDtBQUNELEdBZkksRUFnQkpDLEtBaEJJLENBZ0JHQyxHQUFELElBQVM7QUFDZFgsV0FBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRCxHQWxCSSxDQUFQO0FBbUJELENBcEJELEMsQ0FzQkE7OztBQUVBLE1BQU1zSCxrQkFBa0IsR0FBSUMsVUFBRCxJQUFnQjtBQUN6QyxTQUFPaEksS0FBSyxDQUNWOUIsaURBQU8sR0FDTFMsMERBREYsR0FFRTtBQUNDLGtEQUErQ3FKLFVBQVcsRUFKbkQsRUFLVjtBQUNBO0FBQ0U5SCxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFcEIsK0NBQUtBO0FBRE47QUFEWCxHQU5VLENBQUwsQ0FZSnFCLElBWkksQ0FZRUMsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsR0FkSSxFQWVKRixJQWZJLENBZUVHLElBQUQsSUFBVTtBQUNkLFdBQU9BLElBQVA7QUFDRCxHQWpCSSxFQWtCSkMsS0FsQkksQ0FrQkdDLEdBQUQsSUFBUztBQUNkWCxXQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELEdBcEJJLENBQVA7QUFxQkQsQ0F0QkQ7O0FBd0JBLE1BQU13SCxzQkFBc0IsR0FBRyxDQUFDM0UsRUFBRCxFQUFLL0MsSUFBTCxLQUFjO0FBQzNDLFNBQU9QLEtBQUssQ0FDVCx3SEFBdUhzRCxFQUFHLEVBRGpILEVBRVY7QUFDRXZDLFVBQU0sRUFBRSxLQURWO0FBRUViLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUVwQiwrQ0FERDtBQUVQbUMsWUFBTSxFQUFFLGtCQUZEO0FBR1Asc0JBQWdCO0FBSFQsS0FGWDtBQU9FQyxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlZCxJQUFmO0FBUFIsR0FGVSxDQUFMLENBWUpILElBWkksQ0FZRUMsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVA7QUFDRCxHQWRJLEVBZUpHLEtBZkksQ0FlR0MsR0FBRCxJQUFTO0FBQ2RYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsR0FqQkksQ0FBUDtBQWtCRCxDQW5CRCxDLENBcUJBOzs7QUFFQSxNQUFNeUgsZ0JBQWdCLEdBQUcsQ0FBQ3JJLFFBQUQsRUFBV1QsS0FBWCxFQUFrQkUsSUFBbEIsS0FBMkI7QUFDbEQsU0FBT1UsS0FBSyxDQUNWOUIsaURBQU8sR0FDTFUsdURBREYsR0FFRyxtREFBa0RRLEtBQU0sSUFBR0UsSUFBSyxhQUFZTyxRQUFRLENBQUNjLFFBQVMsRUFIdkYsRUFJVjtBQUNFVCxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFcEIsK0NBQUtBO0FBRE47QUFEWCxHQUpVLENBQUwsQ0FVSnFCLElBVkksQ0FVRUMsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsR0FaSSxFQWFKRixJQWJJLENBYUVHLElBQUQsSUFBVTtBQUNkLFdBQU9BLElBQVA7QUFDRCxHQWZJLEVBZ0JKQyxLQWhCSSxDQWdCR0MsR0FBRCxJQUFTO0FBQ2RYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsR0FsQkksQ0FBUDtBQW1CRCxDQXBCRDs7QUFxQkEsTUFBTTBILGFBQWEsR0FBRyxDQUFDdEksUUFBRCxFQUFXVCxLQUFYLEVBQWtCRSxJQUFsQixLQUEyQjtBQUMvQyxTQUFPVSxLQUFLLENBQ1Y5QixpREFBTyxHQUNMVSx1REFERixHQUVHLGdDQUErQlEsS0FBTSxJQUFHRSxJQUFLLGFBQVlPLFFBQVEsQ0FBQ2MsUUFBUyxFQUhwRSxFQUlWO0FBQ0VULFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUVwQiwrQ0FBS0E7QUFETjtBQURYLEdBSlUsQ0FBTCxDQVVKcUIsSUFWSSxDQVVFQyxRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxHQVpJLEVBYUpGLElBYkksQ0FhRUcsSUFBRCxJQUFVO0FBQ2QsV0FBT0EsSUFBUDtBQUNELEdBZkksRUFnQkpDLEtBaEJJLENBZ0JHQyxHQUFELElBQVM7QUFDZFgsV0FBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRCxHQWxCSSxDQUFQO0FBbUJELENBcEJEOztBQXNCQSxNQUFNMkgsTUFBTSxHQUFHLENBQUN2SSxRQUFELEVBQVdULEtBQVgsRUFBa0JFLElBQWxCLEtBQTJCO0FBQ3hDLFNBQU9VLEtBQUssQ0FDVjlCLGlEQUFPLEdBQ0xVLHVEQURGLEdBRUcsc0NBQXFDUSxLQUFNLElBQUdFLElBQUssYUFBWU8sUUFBUSxDQUFDYyxRQUFTLEVBSDFFLEVBSVY7QUFDRVQsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRXBCLCtDQUFLQTtBQUROO0FBRFgsR0FKVSxDQUFMLENBVUpxQixJQVZJLENBVUVDLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNELEdBWkksRUFhSkYsSUFiSSxDQWFFRyxJQUFELElBQVU7QUFDZCxXQUFPQSxJQUFQO0FBQ0QsR0FmSSxFQWdCSkMsS0FoQkksQ0FnQkdDLEdBQUQsSUFBUztBQUNkWCxXQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELEdBbEJJLENBQVA7QUFtQkQsQ0FwQkQ7O0FBc0JBLE1BQU00SCxVQUFVLEdBQUcsTUFBTTtBQUN2QixTQUFPckksS0FBSyxDQUFDOUIsaURBQU8sR0FBR1UsdURBQVYsR0FBMkIsb0NBQTVCLEVBQWlFO0FBQzNFc0IsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRXBCLCtDQUFLQTtBQUROO0FBRGtFLEdBQWpFLENBQUwsQ0FLSnFCLElBTEksQ0FLRUMsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsR0FQSSxFQVFKRixJQVJJLENBUUVHLElBQUQsSUFBVTtBQUNkLFdBQU9BLElBQVA7QUFDRCxHQVZJLEVBV0pDLEtBWEksQ0FXR0MsR0FBRCxJQUFTO0FBQ2RYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsR0FiSSxDQUFQO0FBY0QsQ0FmRDs7QUFpQkEsTUFBTTZILHlCQUF5QixHQUFHLENBQUN6SSxRQUFELEVBQVdYLElBQVgsS0FBb0I7QUFDcEQsU0FBT2MsS0FBSyxDQUNWOUIsaURBQU8sR0FDTFUsdURBREYsR0FFRywrQ0FBOEMySiw2Q0FBTSxDQUFDckosSUFBRCxDQUFOLENBQWFzSixNQUFiLENBQzdDLFNBRDZDLENBRTdDLHVCQUFzQjNJLFFBQVEsQ0FBQ2MsUUFBUyxFQUxsQyxFQU1WO0FBQ0VULFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUVwQiwrQ0FBS0E7QUFETjtBQURYLEdBTlUsQ0FBTCxDQVlKcUIsSUFaSSxDQVlFQyxRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxHQWRJLEVBZUpGLElBZkksQ0FlRUcsSUFBRCxJQUFVO0FBQ2QsV0FBT0EsSUFBUDtBQUNELEdBakJJLEVBa0JKQyxLQWxCSSxDQWtCR0MsR0FBRCxJQUFTO0FBQ2RYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsR0FwQkksQ0FBUDtBQXFCRCxDQXRCRDs7QUF3QkEsTUFBTWdJLDJCQUEyQixHQUFHLENBQUM1SSxRQUFELEVBQVdYLElBQVgsS0FBb0I7QUFDdEQsU0FBT2MsS0FBSyxDQUNWOUIsaURBQU8sR0FDTFUsdURBREYsR0FFRyxpREFDQ2lCLFFBQVEsQ0FBQ21JLFVBQ1YsSUFBR08sNkNBQU0sQ0FBQ3JKLElBQUQsQ0FBTixDQUFhc0osTUFBYixDQUFvQixTQUFwQixDQUErQixTQUwzQixFQU1WO0FBQ0V0SSxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFcEIsK0NBQUtBO0FBRE47QUFEWCxHQU5VLENBQUwsQ0FZSnFCLElBWkksQ0FZRUMsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsR0FkSSxFQWVKRixJQWZJLENBZUVHLElBQUQsSUFBVTtBQUNkLFdBQU9BLElBQVA7QUFDRCxHQWpCSSxFQWtCSkMsS0FsQkksQ0FrQkdDLEdBQUQsSUFBUztBQUNkWCxXQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELEdBcEJJLENBQVA7QUFxQkQsQ0F0QkQ7O0FBd0JBLE1BQU1pSSxrQkFBa0IsR0FBSTdJLFFBQUQsSUFBYztBQUN2QyxTQUFPRyxLQUFLLENBQ1Y5QixpREFBTyxHQUNMVSx1REFERixHQUVHLGdEQUErQzJKLDZDQUFNLENBQUN2SixHQUFELENBQU4sQ0FBWXdKLE1BQVosQ0FDOUMsTUFEOEMsQ0FFOUMsYUFBWTNJLFFBQVEsQ0FBQ2MsUUFBUyxFQUx4QixFQU1WO0FBQ0VULFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUVwQiwrQ0FBS0E7QUFETjtBQURYLEdBTlUsQ0FBTCxDQVlKcUIsSUFaSSxDQVlFQyxRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxHQWRJLEVBZUpGLElBZkksQ0FlRUcsSUFBRCxJQUFVO0FBQ2QsV0FBT0EsSUFBUDtBQUNELEdBakJJLEVBa0JKQyxLQWxCSSxDQWtCR0MsR0FBRCxJQUFTO0FBQ2RYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsR0FwQkksQ0FBUDtBQXFCRCxDQXRCRDs7QUF3QkEsTUFBTWtJLG1CQUFtQixHQUFHLENBQUM5SSxRQUFELEVBQVdULEtBQVgsRUFBa0JFLElBQWxCLEtBQTJCO0FBQ3JELFNBQU9VLEtBQUssQ0FDVjlCLGlEQUFPLEdBQ0xFLG9EQURGLEdBRUcsZ0RBQStDeUIsUUFBUSxDQUFDbUksVUFBVyxJQUFHMUksSUFBSyxJQUFHRixLQUFNLEVBSDdFLEVBSVY7QUFDRWMsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRXBCLCtDQUFLQTtBQUROO0FBRFgsR0FKVSxDQUFMLENBVUpxQixJQVZJLENBVUVDLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNELEdBWkksRUFhSkYsSUFiSSxDQWFFRyxJQUFELElBQVU7QUFDZCxXQUFPQSxJQUFQO0FBQ0QsR0FmSSxFQWdCSkMsS0FoQkksQ0FnQkdDLEdBQUQsSUFBUztBQUNkWCxXQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELEdBbEJJLENBQVA7QUFtQkQsQ0FwQkQ7O0FBc0JBLE1BQU1tSSxxQkFBcUIsR0FBRyxDQUFDL0ksUUFBRCxFQUFXVCxLQUFYLEVBQWtCRSxJQUFsQixLQUEyQjtBQUN2RCxTQUFPVSxLQUFLLENBQ1Y5QixpREFBTyxHQUNMRSxvREFERixHQUVHLGtEQUFpRHlCLFFBQVEsQ0FBQ21JLFVBQVcsSUFBRzFJLElBQUssSUFBR0YsS0FBTSxFQUgvRSxFQUlWO0FBQ0VjLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUVwQiwrQ0FBS0E7QUFETjtBQURYLEdBSlUsQ0FBTCxDQVVKcUIsSUFWSSxDQVVFQyxRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxHQVpJLEVBYUpGLElBYkksQ0FhRUcsSUFBRCxJQUFVO0FBQ2QsV0FBT0EsSUFBUDtBQUNELEdBZkksRUFnQkpDLEtBaEJJLENBZ0JHQyxHQUFELElBQVM7QUFDZFgsV0FBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRCxHQWxCSSxDQUFQO0FBbUJELENBcEJEOztBQXNCQSxNQUFNb0ksa0JBQWtCLEdBQUcsQ0FBQ2hKLFFBQUQsRUFBV1QsS0FBWCxFQUFrQkUsSUFBbEIsS0FBMkI7QUFDcEQsU0FBT1UsS0FBSyxDQUNWOUIsaURBQU8sR0FDTFUsdURBREYsR0FFRyxrQ0FBaUNpQixRQUFRLENBQUNtSSxVQUFXLElBQUc1SSxLQUFNLElBQUdFLElBQUssRUFIL0QsRUFJVjtBQUNFWSxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFcEIsK0NBQUtBO0FBRE47QUFEWCxHQUpVLENBQUwsQ0FVSnFCLElBVkksQ0FVRUMsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsR0FaSSxFQWFKRixJQWJJLENBYUVHLElBQUQsSUFBVTtBQUNkLFdBQU9BLElBQVA7QUFDRCxHQWZJLEVBZ0JKQyxLQWhCSSxDQWdCR0MsR0FBRCxJQUFTO0FBQ2RYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsR0FsQkksQ0FBUDtBQW1CRCxDQXBCRDs7QUFzQkEsTUFBTXFJLGNBQWMsR0FBRyxDQUFDQyxNQUFELEVBQVNDLElBQVQsS0FBa0I7QUFDdkMsU0FBT2hKLEtBQUssQ0FDVjlCLGlEQUFPLEdBQ0xFLG9EQURGLEdBRUU7QUFDQyxxQ0FBa0MySyxNQUFPLFNBQVFDLElBQUssRUFKL0MsRUFLVjtBQUNBO0FBQ0U5SSxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFcEIsK0NBQUtBO0FBRE47QUFEWCxHQU5VLENBQUwsQ0FZSnFCLElBWkksQ0FZRUMsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsR0FkSSxFQWVKRixJQWZJLENBZUVHLElBQUQsSUFBVTtBQUNkVCxXQUFPLENBQUNDLEdBQVIsQ0FBWVEsSUFBWjtBQUNBLFdBQU9BLElBQVA7QUFDRCxHQWxCSSxFQW1CSkMsS0FuQkksQ0FtQkdDLEdBQUQsSUFBUztBQUNkWCxXQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELEdBckJJLENBQVA7QUFzQkQsQ0F2QkQ7O0FBeUJBLE1BQU13SSx5QkFBeUIsR0FBSXRJLFFBQUQsSUFBYztBQUM5QyxTQUFPWCxLQUFLLENBQ1Y5QixpREFBTyxHQUNMRSxvREFERixHQUVFO0FBQ0MsbURBQWdEdUMsUUFBUyxFQUpsRCxFQUtWO0FBQ0VULFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUVwQiwrQ0FBS0E7QUFETjtBQURYLEdBTFUsQ0FBTCxDQVdKcUIsSUFYSSxDQVdFQyxRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxHQWJJLEVBY0pGLElBZEksQ0FjRUcsSUFBRCxJQUFVO0FBQ2RULFdBQU8sQ0FBQ0MsR0FBUixDQUFZUSxJQUFaO0FBQ0EsV0FBT0EsSUFBUDtBQUNELEdBakJJLEVBa0JKQyxLQWxCSSxDQWtCR0MsR0FBRCxJQUFTO0FBQ2RYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsR0FwQkksQ0FBUDtBQXFCRCxDQXRCRDs7QUF3QkEsTUFBTXlJLGdCQUFnQixHQUFJckosUUFBRCxJQUFjO0FBQ3JDLFNBQU9HLEtBQUssQ0FDVCxvR0FBbUdILFFBQVEsQ0FBQ21JLFVBQVcsRUFEOUcsRUFFVjtBQUNFOUgsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRXBCLCtDQUFLQTtBQUROO0FBRFgsR0FGVSxDQUFMLENBUUpxQixJQVJJLENBUUVDLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNELEdBVkksRUFXSkYsSUFYSSxDQVdFRyxJQUFELElBQVU7QUFDZFQsV0FBTyxDQUFDQyxHQUFSLENBQVlRLElBQVo7QUFDQSxXQUFPQSxJQUFQO0FBQ0QsR0FkSSxFQWVKQyxLQWZJLENBZUdDLEdBQUQsSUFBUztBQUNkWCxXQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELEdBakJJLENBQVA7QUFrQkQsQ0FuQkQsQyxDQXFCQTs7O0FBRUEsTUFBTTBJLG9CQUFvQixHQUFJdEosUUFBRCxJQUFjO0FBQ3pDLFNBQU9HLEtBQUssQ0FDVjlCLGlEQUFPLEdBQ0xXLHFEQURGLEdBRUcscUNBQW9DZ0IsUUFBUSxDQUFDbUksVUFBVyxFQUhqRCxFQUlWO0FBQ0U5SCxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFcEIsK0NBQUtBO0FBRE47QUFEWCxHQUpVLENBQUwsQ0FVSnFCLElBVkksQ0FVRUMsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsR0FaSSxFQWFKRixJQWJJLENBYUVHLElBQUQsSUFBVTtBQUNkLFdBQU9BLElBQVA7QUFDRCxHQWZJLEVBZ0JKQyxLQWhCSSxDQWdCR0MsR0FBRCxJQUFTO0FBQ2RYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsR0FsQkksQ0FBUDtBQW1CRCxDQXBCRCxDLENBc0JBOzs7QUFFQSxNQUFNMkksY0FBYyxHQUFHLENBQUM3SSxJQUFELEVBQU8wQixLQUFQLEVBQWNxQixFQUFkLEVBQWtCekQsUUFBbEIsS0FBK0I7QUFDcEQ7QUFDQSxTQUFPRyxLQUFLLENBQUM5QixpREFBTyxHQUFHWSxzREFBVixHQUF5Qiw4QkFBMUIsRUFBMEQ7QUFDcEVpQyxVQUFNLEVBQUUsS0FENEQ7QUFFcEViLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUVwQiwrQ0FERDtBQUVQbUMsWUFBTSxFQUFFLGtCQUZEO0FBR1Asc0JBQWdCO0FBSFQsS0FGMkQ7QUFPcEVDLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVkLElBQWY7QUFQOEQsR0FBMUQsQ0FBTCxDQVNKSCxJQVRJLENBU0VDLFFBQUQsSUFBYztBQUNsQixRQUFJNEIsS0FBSyxLQUFLLE1BQWQsRUFBc0I7QUFDcEIsYUFBT2pDLEtBQUssQ0FDVjlCLGlEQUFPLEdBQ0xHLHdEQURGLEdBRUcsNENBQTJDaUYsRUFBRyw4QkFBNkJ6RCxRQUFRLENBQUNjLFFBQVMsRUFIdEYsRUFJVjtBQUNFSSxjQUFNLEVBQUUsS0FEVjtBQUVFYixlQUFPLEVBQUU7QUFDUEMsZ0JBQU0sRUFBRXBCLCtDQUREO0FBRVBtQyxnQkFBTSxFQUFFLGtCQUZEO0FBR1AsMEJBQWdCO0FBSFQsU0FGWDtBQU9FQyxZQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlZCxJQUFmO0FBUFIsT0FKVSxDQUFMLENBY0pILElBZEksQ0FjRUMsUUFBRCxJQUFjO0FBQ2xCLGVBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsT0FoQkksRUFpQkpFLEtBakJJLENBaUJHQyxHQUFELElBQVM7QUFDZFgsZUFBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRCxPQW5CSSxDQUFQO0FBb0JELEtBckJELE1BcUJPLElBQUl3QixLQUFLLEtBQUssUUFBZCxFQUF3QjtBQUM3QixhQUFPakMsS0FBSyxFQUNWO0FBQ0E7QUFDQTtBQUNDLDJJQUFvSXNELEVBQUcsOEJBQTZCekQsUUFBUSxDQUFDYyxRQUFTLEVBSjdLLEVBTVY7QUFDRUksY0FBTSxFQUFFLEtBRFY7QUFFRWIsZUFBTyxFQUFFO0FBQ1BDLGdCQUFNLEVBQUVwQiwrQ0FERDtBQUVQbUMsZ0JBQU0sRUFBRSxrQkFGRDtBQUdQLDBCQUFnQjtBQUhULFNBRlg7QUFPRUMsWUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWQsSUFBZjtBQVBSLE9BTlUsQ0FBTCxDQWdCSkgsSUFoQkksQ0FnQkVDLFFBQUQsSUFBYztBQUNsQixlQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNELE9BbEJJLEVBbUJKRSxLQW5CSSxDQW1CR0MsR0FBRCxJQUFTO0FBQ2RYLGVBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsT0FyQkksQ0FBUDtBQXNCRCxLQXZCTSxNQXVCQSxJQUFJd0IsS0FBSyxLQUFLLFdBQWQsRUFBMkI7QUFDaEMsYUFBT2pDLEtBQUssQ0FDVCx3SEFBdUhzRCxFQUFHLDhCQUE2QnpELFFBQVEsQ0FBQ2MsUUFBUyxFQURoSyxFQUVWO0FBQ0VJLGNBQU0sRUFBRSxLQURWO0FBRUViLGVBQU8sRUFBRTtBQUNQQyxnQkFBTSxFQUFFcEIsK0NBREQ7QUFFUG1DLGdCQUFNLEVBQUUsa0JBRkQ7QUFHUCwwQkFBZ0I7QUFIVCxTQUZYO0FBT0VDLFlBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVkLElBQWY7QUFQUixPQUZVLENBQUwsQ0FZSkgsSUFaSSxDQVlFQyxRQUFELElBQWM7QUFDbEIsZUFBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxPQWRJLEVBZUpFLEtBZkksQ0FlR0MsR0FBRCxJQUFTO0FBQ2RYLGVBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsT0FqQkksQ0FBUDtBQWtCRDs7QUFDRCxXQUFPSixRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNELEdBM0VJLEVBNEVKRSxLQTVFSSxDQTRFR0MsR0FBRCxJQUFTO0FBQ2RYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsR0E5RUksQ0FBUDtBQStFRCxDQWpGRDs7QUFtRkEsTUFBTTRJLGNBQWMsR0FBRyxDQUFDOUksSUFBRCxFQUFPMEIsS0FBUCxFQUFjcUIsRUFBZCxFQUFrQnpELFFBQWxCLEtBQStCO0FBQ3BEO0FBQ0EsU0FBT0csS0FBSyxDQUFDOUIsaURBQU8sR0FBR1ksc0RBQVYsR0FBeUIsOEJBQTFCLEVBQTBEO0FBQ3BFaUMsVUFBTSxFQUFFLEtBRDREO0FBRXBFYixXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFcEIsK0NBREQ7QUFFUG1DLFlBQU0sRUFBRSxrQkFGRDtBQUdQLHNCQUFnQjtBQUhULEtBRjJEO0FBT3BFQyxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlZCxJQUFmO0FBUDhELEdBQTFELENBQUwsQ0FTSkgsSUFUSSxDQVNFQyxRQUFELElBQWM7QUFDbEIsUUFBSTRCLEtBQUssS0FBSyxNQUFkLEVBQXNCO0FBQ3BCLGFBQU9qQyxLQUFLLENBQ1Y5QixpREFBTyxHQUNMRyx3REFERixHQUVHLDRDQUEyQ2lGLEVBQUcsNEJBQTJCekQsUUFBUSxDQUFDYyxRQUFTLEVBSHBGLEVBSVY7QUFDRUksY0FBTSxFQUFFLEtBRFY7QUFFRWIsZUFBTyxFQUFFO0FBQ1BDLGdCQUFNLEVBQUVwQiwrQ0FERDtBQUVQbUMsZ0JBQU0sRUFBRSxrQkFGRDtBQUdQLDBCQUFnQjtBQUhULFNBRlg7QUFPRUMsWUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWQsSUFBZjtBQVBSLE9BSlUsQ0FBTCxDQWNKSCxJQWRJLENBY0VDLFFBQUQsSUFBYztBQUNsQixlQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNELE9BaEJJLEVBaUJKRSxLQWpCSSxDQWlCR0MsR0FBRCxJQUFTO0FBQ2RYLGVBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsT0FuQkksQ0FBUDtBQW9CRCxLQXJCRCxNQXFCTyxJQUFJd0IsS0FBSyxLQUFLLFFBQWQsRUFBd0I7QUFDN0IsYUFBT2pDLEtBQUssRUFDVjtBQUNBO0FBQ0E7QUFDQywySUFBb0lzRCxFQUFHLDRCQUEyQnpELFFBQVEsQ0FBQ2MsUUFBUyxFQUozSyxFQUtWO0FBQ0VJLGNBQU0sRUFBRSxLQURWO0FBRUViLGVBQU8sRUFBRTtBQUNQQyxnQkFBTSxFQUFFcEIsK0NBREQ7QUFFUG1DLGdCQUFNLEVBQUUsa0JBRkQ7QUFHUCwwQkFBZ0I7QUFIVCxTQUZYO0FBT0VDLFlBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVkLElBQWY7QUFQUixPQUxVLENBQUwsQ0FlSkgsSUFmSSxDQWVFQyxRQUFELElBQWM7QUFDbEIsZUFBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxPQWpCSSxFQWtCSkUsS0FsQkksQ0FrQkdDLEdBQUQsSUFBUztBQUNkWCxlQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELE9BcEJJLENBQVA7QUFxQkQsS0F0Qk0sTUFzQkEsSUFBSXdCLEtBQUssS0FBSyxXQUFkLEVBQTJCO0FBQ2hDLGFBQU9qQyxLQUFLLENBQ1Qsd0hBQXVIc0QsRUFBRyw0QkFBMkJ6RCxRQUFRLENBQUNjLFFBQVMsRUFEOUosRUFFVjtBQUNFSSxjQUFNLEVBQUUsS0FEVjtBQUVFYixlQUFPLEVBQUU7QUFDUEMsZ0JBQU0sRUFBRXBCLCtDQUREO0FBRVBtQyxnQkFBTSxFQUFFLGtCQUZEO0FBR1AsMEJBQWdCO0FBSFQsU0FGWDtBQU9FQyxZQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlZCxJQUFmO0FBUFIsT0FGVSxDQUFMLENBWUpILElBWkksQ0FZRUMsUUFBRCxJQUFjO0FBQ2xCLGVBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsT0FkSSxFQWVKRSxLQWZJLENBZUdDLEdBQUQsSUFBUztBQUNkWCxlQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELE9BakJJLENBQVA7QUFrQkQ7O0FBQ0QsV0FBT0osUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxHQTFFSSxFQTJFSkUsS0EzRUksQ0EyRUdDLEdBQUQsSUFBUztBQUNkWCxXQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELEdBN0VJLENBQVA7QUE4RUQsQ0FoRkQ7O0FBa0ZBLE1BQU02SSxlQUFlLEdBQUcsQ0FBQy9JLElBQUQsRUFBTzBCLEtBQVAsRUFBY3FCLEVBQWQsRUFBa0J6RCxRQUFsQixLQUErQjtBQUNyRDtBQUNBLFNBQU9HLEtBQUssQ0FBQzlCLGlEQUFPLEdBQUdZLHNEQUFWLEdBQXlCLCtCQUExQixFQUEyRDtBQUNyRWlDLFVBQU0sRUFBRSxLQUQ2RDtBQUVyRWIsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRXBCLCtDQUREO0FBRVBtQyxZQUFNLEVBQUUsa0JBRkQ7QUFHUCxzQkFBZ0I7QUFIVCxLQUY0RDtBQU9yRUMsUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWQsSUFBZjtBQVArRCxHQUEzRCxDQUFMLENBU0pILElBVEksQ0FTRUMsUUFBRCxJQUFjO0FBQ2xCLFFBQUk0QixLQUFLLEtBQUssTUFBZCxFQUFzQjtBQUNwQixhQUFPakMsS0FBSyxDQUNWOUIsaURBQU8sR0FDTEcsd0RBREYsR0FFRyw0Q0FBMkNpRixFQUFHLDhCQUE2QnpELFFBQVEsQ0FBQ2MsUUFBUyxFQUh0RixFQUlWO0FBQ0VJLGNBQU0sRUFBRSxLQURWO0FBRUViLGVBQU8sRUFBRTtBQUNQQyxnQkFBTSxFQUFFcEIsK0NBREQ7QUFFUG1DLGdCQUFNLEVBQUUsa0JBRkQ7QUFHUCwwQkFBZ0I7QUFIVCxTQUZYO0FBT0VDLFlBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVkLElBQWY7QUFQUixPQUpVLENBQUwsQ0FjSkgsSUFkSSxDQWNFQyxRQUFELElBQWM7QUFDbEIsZUFBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxPQWhCSSxFQWlCSkUsS0FqQkksQ0FpQkdDLEdBQUQsSUFBUztBQUNkWCxlQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELE9BbkJJLENBQVA7QUFvQkQsS0FyQkQsTUFxQk8sSUFBSXdCLEtBQUssS0FBSyxRQUFkLEVBQXdCO0FBQzdCLGFBQU9qQyxLQUFLLEVBQ1Y7QUFDQTtBQUNBO0FBQ0MsMklBQW9Jc0QsRUFBRyw4QkFBNkJ6RCxRQUFRLENBQUNjLFFBQVMsRUFKN0ssRUFLVjtBQUNFSSxjQUFNLEVBQUUsS0FEVjtBQUVFYixlQUFPLEVBQUU7QUFDUEMsZ0JBQU0sRUFBRXBCLCtDQUREO0FBRVBtQyxnQkFBTSxFQUFFLGtCQUZEO0FBR1AsMEJBQWdCO0FBSFQsU0FGWDtBQU9FQyxZQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlZCxJQUFmO0FBUFIsT0FMVSxDQUFMLENBZUpILElBZkksQ0FlRUMsUUFBRCxJQUFjO0FBQ2xCLGVBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsT0FqQkksRUFrQkpFLEtBbEJJLENBa0JHQyxHQUFELElBQVM7QUFDZFgsZUFBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRCxPQXBCSSxDQUFQO0FBcUJELEtBdEJNLE1Bc0JBLElBQUl3QixLQUFLLEtBQUssV0FBZCxFQUEyQjtBQUNoQyxhQUFPakMsS0FBSyxFQUNWO0FBQ0E7QUFDQTtBQUNDLDhIQUF1SHNELEVBQUcsOEJBQTZCekQsUUFBUSxDQUFDYyxRQUFTLEVBSmhLLEVBS1Y7QUFDRUksY0FBTSxFQUFFLEtBRFY7QUFFRWIsZUFBTyxFQUFFO0FBQ1BDLGdCQUFNLEVBQUVwQiwrQ0FERDtBQUVQbUMsZ0JBQU0sRUFBRSxrQkFGRDtBQUdQLDBCQUFnQjtBQUhULFNBRlgsQ0FPRTs7QUFQRixPQUxVLENBQUwsQ0FlSmQsSUFmSSxDQWVFQyxRQUFELElBQWM7QUFDbEIsZUFBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxPQWpCSSxFQWtCSkUsS0FsQkksQ0FrQkdDLEdBQUQsSUFBUztBQUNkWCxlQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELE9BcEJJLENBQVA7QUFxQkQ7O0FBQ0QsV0FBT0osUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxHQTdFSSxFQThFSkUsS0E5RUksQ0E4RUdDLEdBQUQsSUFBUztBQUNkWCxXQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELEdBaEZJLENBQVA7QUFpRkQsQ0FuRkQ7O0FBcUZBLE1BQU04SSxjQUFjLEdBQUcsQ0FBQ2hKLElBQUQsRUFBTytDLEVBQVAsRUFBV3pELFFBQVgsS0FBd0I7QUFDN0MsU0FBT0csS0FBSyxDQUNULDZGQURTLEVBRVY7QUFDRWUsVUFBTSxFQUFFLE1BRFY7QUFFRWIsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRXBCLCtDQUREO0FBRVBtQyxZQUFNLEVBQUUsa0JBRkQ7QUFHUCxzQkFBZ0I7QUFIVCxLQUZYO0FBT0VDLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVkLElBQWY7QUFQUixHQUZVLENBQUwsQ0FZSkgsSUFaSSxDQVlFQyxRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxHQWRJLEVBZUpGLElBZkksQ0FlRUcsSUFBRCxJQUFVO0FBQ2RULFdBQU8sQ0FBQ0MsR0FBUixDQUFZUSxJQUFaO0FBQ0QsR0FqQkksRUFrQkpDLEtBbEJJLENBa0JHQyxHQUFELElBQVM7QUFDZFgsV0FBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDQU8sZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDRCxHQXJCSSxDQUFQO0FBc0JELENBdkJEOzs7Ozs7Ozs7Ozs7O0FDai9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7OztBQ05BLGNBQWMsbUJBQU8sQ0FBQyxzRkFBK0I7O0FBRXJEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlDOzs7Ozs7Ozs7OztBQ3REQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7O0FBRUE7O0FBU0E7O0FBQ0E7O0FBdUJBLE1BQU13SSxVQUEyQyxHQUFqRDs7QUFFQSw2Q0FLUTtBQUNOLE1BQUksSUFBSixFQUE4QztBQUM5QyxNQUFJLENBQUMsd0JBQUwsSUFBSyxDQUFMLEVBQXVCLE9BRmpCLENBR047QUFDQTtBQUNBO0FBQ0E7O0FBQ0F2TixRQUFNLENBQU5BLGtDQUEwQ3dFLEdBQUQsSUFBUztBQUNoRCxjQUEyQztBQUN6QztBQUNBO0FBRUg7QUFMRHhFO0FBTUEsUUFBTXdOLFNBQVMsR0FDYkMsT0FBTyxJQUFJLE9BQU9BLE9BQU8sQ0FBZCxXQUFYQSxjQUNJQSxPQUFPLENBRFhBLFNBRUl6TixNQUFNLElBQUlBLE1BQU0sQ0FIdEIsT0FiTSxDQWtCTjs7QUFDQXVOLFlBQVUsQ0FBQ0csSUFBSSxHQUFKQSxZQUFtQkYsU0FBUyxHQUFHLE1BQUgsWUFBdkNELEVBQVdHLENBQUQsQ0FBVkg7QUFHRjs7QUFBQSxnQ0FBMkQ7QUFDekQsUUFBTTtBQUFBO0FBQUEsTUFBYUksS0FBSyxDQUF4QjtBQUNBLFNBQ0dDLE1BQU0sSUFBSUEsTUFBTSxLQUFqQixPQUFDQSxJQUNERCxLQUFLLENBREwsT0FBQ0MsSUFFREQsS0FBSyxDQUZMLE9BQUNDLElBR0RELEtBQUssQ0FITCxRQUFDQyxJQUlERCxLQUFLLENBSkwsTUFBQ0MsSUFJZTtBQUNmRCxPQUFLLENBQUxBLGVBQXFCQSxLQUFLLENBQUxBLHNCQU54QjtBQVVGOztBQUFBLDRFQVNRO0FBQ04sUUFBTTtBQUFBO0FBQUEsTUFBZUUsQ0FBQyxDQUF0Qjs7QUFFQSxNQUFJQyxRQUFRLEtBQVJBLFFBQXFCQyxlQUFlLENBQWZBLENBQWUsQ0FBZkEsSUFBc0IsQ0FBQyx3QkFBaEQsSUFBZ0QsQ0FBNUNELENBQUosRUFBbUU7QUFDakU7QUFDQTtBQUdGRDs7QUFBQUEsR0FBQyxDQUFEQSxpQkFSTSxDQVVOOztBQUNBLE1BQUlHLE1BQU0sSUFBVixNQUFvQjtBQUNsQkEsVUFBTSxHQUFHQyxFQUFFLENBQUZBLGVBQVREO0FBR0YsR0FmTSxDQWVOOzs7QUFDQWhPLFFBQU0sQ0FBQ2tPLE9BQU8sZUFBZGxPLE1BQU0sQ0FBTkEsV0FBK0M7QUFBQTtBQUFBO0FBQS9DQTtBQUErQyxHQUEvQ0E7QUFPRjs7QUFBQSxxQkFBeUQ7QUFDdkQsWUFBMkM7QUFDekMsbUNBSUc7QUFDRCxhQUFPLFVBQ0osZ0NBQStCbU8sSUFBSSxDQUFDQyxHQUFJLGdCQUFlRCxJQUFJLENBQUNFLFFBQVMsNkJBQTRCRixJQUFJLENBQUNHLE1BQXZHLGFBQUMsSUFDRSxvQkFGTCxFQUNHLENBREksQ0FBUDtBQVFGLEtBZHlDLENBY3pDOzs7QUFDQSxVQUFNQyxrQkFBbUQsR0FBRztBQUMxRGIsVUFBSSxFQUROO0FBQTRELEtBQTVEO0FBR0EsVUFBTWMsYUFBa0MsR0FBR0MsTUFBTSxDQUFOQSxLQUEzQyxrQkFBMkNBLENBQTNDO0FBR0EsaUJBQWEsQ0FBYixRQUF1QkwsR0FBRCxJQUE0QjtBQUNoRCxVQUFJQSxHQUFHLEtBQVAsUUFBb0I7QUFDbEIsWUFDRU0sS0FBSyxDQUFMQSxHQUFLLENBQUxBLFlBQ0MsT0FBT0EsS0FBSyxDQUFaLEdBQVksQ0FBWixpQkFBa0MsT0FBT0EsS0FBSyxDQUFaLEdBQVksQ0FBWixLQUZyQyxVQUdFO0FBQ0EsZ0JBQU1DLGVBQWUsQ0FBQztBQUFBO0FBRXBCTixvQkFBUSxFQUZZO0FBR3BCQyxrQkFBTSxFQUFFSSxLQUFLLENBQUxBLEdBQUssQ0FBTEEscUJBQStCLE9BQU9BLEtBQUssQ0FIckQsR0FHcUQ7QUFIL0IsV0FBRCxDQUFyQjtBQU1IO0FBWEQsYUFXTztBQUNMO0FBQ0E7QUFDQSxjQUFNRSxDQUFRLEdBQWQ7QUFFSDtBQWpCRCxPQXJCeUMsQ0F3Q3pDOztBQUNBLFVBQU1DLGtCQUFtRCxHQUFHO0FBQzFEWixRQUFFLEVBRHdEO0FBRTFEQyxhQUFPLEVBRm1EO0FBRzFERixZQUFNLEVBSG9EO0FBSTFEYyxhQUFPLEVBSm1EO0FBSzFEQyxjQUFRLEVBTGtEO0FBTTFEQyxjQUFRLEVBTmtEO0FBTzFEQyxZQUFNLEVBUFI7QUFBNEQsS0FBNUQ7QUFTQSxVQUFNQyxhQUFrQyxHQUFHVCxNQUFNLENBQU5BLEtBQTNDLGtCQUEyQ0EsQ0FBM0M7QUFHQSxpQkFBYSxDQUFiLFFBQXVCTCxHQUFELElBQTRCO0FBQ2hELFlBQU1lLE9BQU8sR0FBRyxPQUFPVCxLQUFLLENBQTVCLEdBQTRCLENBQTVCOztBQUVBLFVBQUlOLEdBQUcsS0FBUCxNQUFrQjtBQUNoQixZQUFJTSxLQUFLLENBQUxBLEdBQUssQ0FBTEEsSUFBY1MsT0FBTyxLQUFyQlQsWUFBc0NTLE9BQU8sS0FBakQsVUFBZ0U7QUFDOUQsZ0JBQU1SLGVBQWUsQ0FBQztBQUFBO0FBRXBCTixvQkFBUSxFQUZZO0FBR3BCQyxrQkFBTSxFQUhSO0FBQXNCLFdBQUQsQ0FBckI7QUFNSDtBQVJELGFBUU8sSUFBSUYsR0FBRyxLQUFQLFVBQXNCO0FBQzNCLFlBQUlNLEtBQUssQ0FBTEEsR0FBSyxDQUFMQSxJQUFjUyxPQUFPLEtBQXpCLFVBQXdDO0FBQ3RDLGdCQUFNUixlQUFlLENBQUM7QUFBQTtBQUVwQk4sb0JBQVEsRUFGWTtBQUdwQkMsa0JBQU0sRUFIUjtBQUFzQixXQUFELENBQXJCO0FBTUg7QUFSTSxhQVFBLElBQ0xGLEdBQUcsS0FBSEEsYUFDQUEsR0FBRyxLQURIQSxZQUVBQSxHQUFHLEtBRkhBLGFBR0FBLEdBQUcsS0FISEEsY0FJQUEsR0FBRyxLQUxFLFlBTUw7QUFDQSxZQUFJTSxLQUFLLENBQUxBLEdBQUssQ0FBTEEsWUFBc0JTLE9BQU8sS0FBakMsV0FBaUQ7QUFDL0MsZ0JBQU1SLGVBQWUsQ0FBQztBQUFBO0FBRXBCTixvQkFBUSxFQUZZO0FBR3BCQyxrQkFBTSxFQUhSO0FBQXNCLFdBQUQsQ0FBckI7QUFNSDtBQWRNLGFBY0E7QUFDTDtBQUNBO0FBQ0EsY0FBTU0sQ0FBUSxHQUFkO0FBRUg7QUF0Q0QsT0FyRHlDLENBNkZ6QztBQUNBOztBQUNBLFVBQU1RLFNBQVMsR0FBR0Msc0JBQWxCLEtBQWtCQSxDQUFsQjs7QUFDQSxRQUFJWCxLQUFLLENBQUxBLFlBQWtCLENBQUNVLFNBQVMsQ0FBaEMsU0FBMEM7QUFDeENBLGVBQVMsQ0FBVEE7QUFDQXZMLGFBQU8sQ0FBUEE7QUFJSDtBQUNEOztBQUFBLFFBQU15TCxDQUFDLEdBQUdaLEtBQUssQ0FBTEEsYUFBVjtBQUVBLFFBQU0xTyxNQUFNLEdBQUcsYUFBZixTQUFlLEdBQWY7QUFDQSxRQUFNVyxRQUFRLEdBQUlYLE1BQU0sSUFBSUEsTUFBTSxDQUFqQixNQUFDQSxJQUFsQjs7QUFFQSxRQUFNO0FBQUE7QUFBQTtBQUFBLE1BQWVxUCx1QkFBYyxNQUFNO0FBQ3ZDLFVBQU0sNkJBQTZCLG1DQUFzQlgsS0FBSyxDQUEzQixNQUFuQyxJQUFtQyxDQUFuQztBQUNBLFdBQU87QUFDTGhCLFVBQUksRUFEQztBQUVMTyxRQUFFLEVBQUVTLEtBQUssQ0FBTEEsS0FDQSxtQ0FBc0JBLEtBQUssQ0FEM0JBLEVBQ0EsQ0FEQUEsR0FFQWEsVUFBVSxJQUpoQjtBQUFPLEtBQVA7QUFGbUJGLEtBUWxCLFdBQVdYLEtBQUssQ0FBaEIsTUFBdUJBLEtBQUssQ0FSL0IsRUFRRyxDQVJrQlcsQ0FBckI7O0FBVUEsTUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFKLE1Bdkh1RCxDQXlIdkQ7O0FBQ0EsTUFBSSxvQkFBSixVQUFrQztBQUNoQzlOLFlBQVEsZ0JBQUcsd0NBQVhBLFFBQVcsQ0FBWEE7QUFHRixHQTlIdUQsQ0E4SHZEOzs7QUFDQSxRQUFNaU8sS0FBVSxHQUFHQyxxQkFBbkIsUUFBbUJBLENBQW5COztBQUNBLFFBQU1DLFFBQWEsR0FBR0YsS0FBSyxJQUFJLGlCQUFUQSxZQUFzQ0EsS0FBSyxDQUFqRTtBQUVBLFFBQU0sa0NBQWtDLHNDQUFnQjtBQUN0REcsY0FBVSxFQURaO0FBQXdELEdBQWhCLENBQXhDOztBQUdBLFFBQU1DLE1BQU0sR0FBR1AsMkJBQ1pRLEVBQUQsSUFBaUI7QUFDZkMsc0JBQWtCLENBQWxCQSxFQUFrQixDQUFsQkE7O0FBQ0Esa0JBQWM7QUFDWixVQUFJLG9CQUFKLFlBQW9DSixRQUFRLENBQTVDLEVBQTRDLENBQVJBLENBQXBDLEtBQ0ssSUFBSSxvQkFBSixVQUFrQztBQUNyQ0EsZ0JBQVEsQ0FBUkE7QUFFSDtBQUNGO0FBVFlMLEtBVWIsV0FWRixrQkFVRSxDQVZhQSxDQUFmOztBQVlBLHdCQUFVLE1BQU07QUFDZCxVQUFNVSxjQUFjLEdBQUdDLFNBQVMsSUFBVEEsS0FBa0Isd0JBQXpDLElBQXlDLENBQXpDO0FBQ0EsVUFBTXhDLFNBQVMsR0FDYix5Q0FBeUN4TixNQUFNLElBQUlBLE1BQU0sQ0FEM0Q7QUFFQSxVQUFNaVEsWUFBWSxHQUNoQjFDLFVBQVUsQ0FBQ0csSUFBSSxHQUFKQSxZQUFtQkYsU0FBUyxHQUFHLE1BQUgsWUFEekMsRUFDYUUsQ0FBRCxDQURaOztBQUVBLFFBQUlxQyxjQUFjLElBQUksQ0FBdEIsY0FBcUM7QUFDbkNmLGNBQVEsbUJBQW1CO0FBQ3pCQyxjQUFNLEVBRFJEO0FBQTJCLE9BQW5CLENBQVJBO0FBSUg7QUFYRCxLQVdHLGlDQVhILE1BV0csQ0FYSDtBQWFBLFFBQU1rQixVQUtMLEdBQUc7QUFDRkMsT0FBRyxFQUREO0FBRUZ0UCxXQUFPLEVBQUdnTixDQUFELElBQXlCO0FBQ2hDLFVBQUkyQixLQUFLLENBQUxBLFNBQWUsT0FBT0EsS0FBSyxDQUFMQSxNQUFQLFlBQW5CLFlBQThEO0FBQzVEQSxhQUFLLENBQUxBO0FBRUY7O0FBQUEsVUFBSSxDQUFDM0IsQ0FBQyxDQUFOLGtCQUF5QjtBQUN2QnVDLG1CQUFXLGdEQUFYQSxNQUFXLENBQVhBO0FBRUg7QUFkSDtBQUtJLEdBTEo7O0FBaUJBRixZQUFVLENBQVZBLGVBQTJCckMsQ0FBRCxJQUF5QjtBQUNqRCxRQUFJLENBQUMsd0JBQUwsSUFBSyxDQUFMLEVBQXVCOztBQUN2QixRQUFJMkIsS0FBSyxDQUFMQSxTQUFlLE9BQU9BLEtBQUssQ0FBTEEsTUFBUCxpQkFBbkIsWUFBbUU7QUFDakVBLFdBQUssQ0FBTEE7QUFFRlI7O0FBQUFBLFlBQVEsbUJBQW1CO0FBQUVxQixjQUFRLEVBQXJDckI7QUFBMkIsS0FBbkIsQ0FBUkE7QUFMRmtCLElBL0t1RCxDQXVMdkQ7QUFDQTs7O0FBQ0EsTUFBSXhCLEtBQUssQ0FBTEEsWUFBbUJjLEtBQUssQ0FBTEEsZ0JBQXNCLEVBQUUsVUFBVUEsS0FBSyxDQUE5RCxLQUE2QyxDQUE3QyxFQUF3RTtBQUN0RSxVQUFNaEMsU0FBUyxHQUNiLHlDQUF5Q3hOLE1BQU0sSUFBSUEsTUFBTSxDQUQzRCxPQURzRSxDQUl0RTtBQUNBOztBQUNBLFVBQU1zUSxZQUFZLEdBQ2hCdFEsTUFBTSxJQUNOQSxNQUFNLENBRE5BLGtCQUVBLDRDQUdFQSxNQUFNLElBQUlBLE1BQU0sQ0FIbEIsU0FJRUEsTUFBTSxJQUFJQSxNQUFNLENBUHBCLGFBR0UsQ0FIRjtBQVVBa1EsY0FBVSxDQUFWQSxPQUNFSSxZQUFZLElBQ1oseUJBQVksc0NBQXlCdFEsTUFBTSxJQUFJQSxNQUFNLENBRnZEa1EsYUFFYyxDQUFaLENBRkZBO0FBS0Y7O0FBQUEsc0JBQU9iLG1DQUFQLFVBQU9BLENBQVA7OztlQUdha0IsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN1RmO0FBQ0E7QUFDQTs7QUFDTyx1Q0FBdUQ7QUFDNUQsU0FBT0MsSUFBSSxDQUFKQSxpQkFBc0JBLElBQUksS0FBMUJBLE1BQXFDQSxJQUFJLENBQUpBLFNBQWMsQ0FBbkRBLENBQXFDQSxDQUFyQ0EsR0FBUDtBQUdGO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLE1BQU1DLDBCQUEwQixHQUFHQyxTQUNyQ0YsU0FEcUNFLEdBQW5DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNRQSxNQUFNQyxtQkFBbUIsR0FDN0IsK0JBQStCQyxJQUFJLENBQXBDLG1CQUFDLElBQ0QsY0FFa0I7QUFDaEIsTUFBSUMsS0FBSyxHQUFHN04sSUFBSSxDQUFoQixHQUFZQSxFQUFaO0FBQ0EsU0FBTzhOLFVBQVUsQ0FBQyxZQUFZO0FBQzVCQyxNQUFFLENBQUM7QUFDREMsZ0JBQVUsRUFEVDtBQUVEQyxtQkFBYSxFQUFFLFlBQVk7QUFDekIsZUFBT0MsSUFBSSxDQUFKQSxPQUFZLE1BQU1sTyxJQUFJLENBQUpBLFFBQXpCLEtBQW1CLENBQVprTyxDQUFQO0FBSEpIO0FBQUcsS0FBRCxDQUFGQTtBQURlLEtBQWpCLENBQWlCLENBQWpCO0FBTkc7Ozs7QUFnQkEsTUFBTUksa0JBQWtCLEdBQzVCLCtCQUErQlAsSUFBSSxDQUFwQyxrQkFBQyxJQUNELGNBQXlDO0FBQ3ZDLFNBQU9RLFlBQVksQ0FBbkIsRUFBbUIsQ0FBbkI7QUFIRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNQOztBQUNBLDBJLENBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLE1BQU1DLGlCQUFpQixHQUF2Qjs7QUFtQ0EseUNBSWM7QUFDWixNQUFJQyxLQUFnQyxHQUFHQyxHQUFHLENBQUhBLElBQXZDLEdBQXVDQSxDQUF2Qzs7QUFDQSxhQUFXO0FBQ1QsUUFBSSxZQUFKLE9BQXVCO0FBQ3JCLGFBQU9ELEtBQUssQ0FBWjtBQUVGOztBQUFBLFdBQU9FLE9BQU8sQ0FBUEEsUUFBUCxLQUFPQSxDQUFQO0FBRUY7O0FBQUE7QUFDQSxRQUFNQyxJQUFnQixHQUFHLFlBQWdCQyxPQUFELElBQWE7QUFDbkRDLFlBQVEsR0FBUkE7QUFERixHQUF5QixDQUF6QjtBQUdBSixLQUFHLENBQUhBLFNBQWNELEtBQUssR0FBRztBQUFFSSxXQUFPLEVBQVQ7QUFBc0JFLFVBQU0sRUFBbERMO0FBQXNCLEdBQXRCQTtBQUNBLFNBQU9NLFNBQVMsR0FDWjtBQUNBQSxXQUFTLEdBQVRBLEtBQWtCQyxLQUFELEtBQVlILFFBQVEsQ0FBUkEsS0FBUSxDQUFSQSxFQUZqQixLQUVLLENBQWpCRSxDQUZZLEdBQWhCO0FBYUY7O0FBQUEsMkJBQXNEO0FBQ3BELE1BQUk7QUFDRkUsUUFBSSxHQUFHQyxRQUFRLENBQVJBLGNBQVBELE1BQU9DLENBQVBEO0FBQ0EsV0FDRTtBQUNBO0FBQ0MsT0FBQyxDQUFDRSxNQUFNLENBQVIsd0JBQWlDLENBQUMsQ0FBRUQsUUFBRCxDQUFwQyxZQUFDLElBQ0RELElBQUksQ0FBSkEsaUJBSkYsVUFJRUE7QUFKRjtBQU1BLEdBUkYsQ0FRRSxnQkFBTTtBQUNOO0FBRUg7QUFFRDs7QUFBQSxNQUFNRyxXQUFvQixHQUFHQyxXQUE3Qjs7QUFFQSx3Q0FJZ0I7QUFDZCxTQUFPLFlBQVksY0FBYztBQUMvQixRQUFJSCxRQUFRLENBQVJBLGNBQXdCLCtCQUE4QnRFLElBQTFELElBQUlzRSxDQUFKLEVBQXFFO0FBQ25FLGFBQU96SyxHQUFQO0FBR0Z3Szs7QUFBQUEsUUFBSSxHQUFHQyxRQUFRLENBQVJBLGNBQVBELE1BQU9DLENBQVBELENBTCtCLENBTy9COztBQUNBLFlBQVFBLElBQUksQ0FBSkE7QUFDUkEsUUFBSSxDQUFKQTtBQUNBQSxRQUFJLENBQUpBLGNBQW9CckIsU0FBcEJxQjtBQUNBQSxRQUFJLENBQUpBO0FBQ0FBLFFBQUksQ0FBSkEsY0FaK0IsQ0FjL0I7O0FBQ0FBLFFBQUksQ0FBSkE7QUFFQUMsWUFBUSxDQUFSQTtBQWpCRixHQUFPLENBQVA7QUFxQkY7O0FBQUEsTUFBTUksZ0JBQWdCLEdBQUdDLE1BQU0sQ0FBL0Isa0JBQStCLENBQS9CLEMsQ0FDQTs7QUFDTyw2QkFBMkM7QUFDaEQsU0FBTzVELE1BQU0sQ0FBTkEsc0NBQVAsRUFBT0EsQ0FBUDtBQUdLOztBQUFBLDJCQUF3RDtBQUM3RCxTQUFPakssR0FBRyxJQUFJNE4sZ0JBQWdCLElBQTlCO0FBR0Y7O0FBQUEsbUNBR29CO0FBQ2xCLFNBQU8sWUFBWSxxQkFBcUI7QUFDdENFLFVBQU0sR0FBR04sUUFBUSxDQUFSQSxjQUFUTSxRQUFTTixDQUFUTSxDQURzQyxDQUd0QztBQUNBO0FBQ0E7O0FBQ0FBLFVBQU0sQ0FBTkE7O0FBQ0FBLFVBQU0sQ0FBTkEsVUFBaUIsTUFDZkMsTUFBTSxDQUFDQyxjQUFjLENBQUMsVUFBVywwQkFBeUJDLEdBRDVESCxFQUN3QixDQUFELENBQWYsQ0FEUkEsQ0FQc0MsQ0FVdEM7QUFDQTs7O0FBQ0FBLFVBQU0sQ0FBTkEsY0FBcUI1QixTQUFyQjRCLENBWnNDLENBY3RDO0FBQ0E7O0FBQ0FBLFVBQU0sQ0FBTkE7QUFDQU4sWUFBUSxDQUFSQTtBQWpCRixHQUFPLENBQVA7QUFxQkYsQyxDQUFBOzs7QUFDQSwrQ0FJYztBQUNaLFNBQU8sWUFBWSxxQkFBcUI7QUFDdEMsUUFBSVUsU0FBUyxHQUFiO0FBRUEsS0FBQyxDQUFELEtBQVFDLENBQUQsSUFBTztBQUNaO0FBQ0FELGVBQVMsR0FBVEE7QUFDQWhCLGFBQU8sQ0FBUEEsQ0FBTyxDQUFQQTtBQUhGO0FBTUEsa0RBQW9CLE1BQ2xCWixVQUFVLENBQUMsTUFBTTtBQUNmLFVBQUksQ0FBSixXQUFnQjtBQUNkeUIsY0FBTSxDQUFOQSxHQUFNLENBQU5BO0FBRUg7QUFKUyxPQURaLEVBQ1ksQ0FEWjtBQVRGLEdBQU8sQ0FBUDtBQW1CRixDLENBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxrQ0FBZ0U7QUFDckUsTUFBSTNCLElBQUksQ0FBUixrQkFBMkI7QUFDekIsV0FBT1ksT0FBTyxDQUFQQSxRQUFnQlosSUFBSSxDQUEzQixnQkFBT1ksQ0FBUDtBQUdGOztBQUFBLFFBQU1vQixlQUE2QyxHQUFHLFlBRW5EbEIsT0FBRCxJQUFhO0FBQ2I7QUFDQSxVQUFNWCxFQUFFLEdBQUdILElBQUksQ0FBZjs7QUFDQUEsUUFBSSxDQUFKQSxzQkFBMkIsTUFBTTtBQUMvQmMsYUFBTyxDQUFDZCxJQUFJLENBQVpjLGdCQUFPLENBQVBBO0FBQ0FYLFFBQUUsSUFBSUEsRUFBTkE7QUFGRkg7QUFMRixHQUFzRCxDQUF0RDtBQVdBLFNBQU9pQyx5QkFBeUIscUNBRzlCTCxjQUFjLENBQUMsVUFIakIsc0NBR2lCLENBQUQsQ0FIZ0IsQ0FBaEM7QUFXRjs7QUFBQSw4Q0FHdUI7QUFDckIsWUFBNEM7QUFDMUMsV0FBTyxPQUFPLENBQVAsUUFBZ0I7QUFDckJNLGFBQU8sRUFBRSxDQUNQQyxXQUFXLEdBQVhBLCtCQUVFQyxTQUFTLENBQUMsMkNBSk8sS0FJUCxDQUFELENBSEosQ0FEWTtBQU1yQjtBQUNBQyxTQUFHLEVBUEw7QUFBdUIsS0FBaEIsQ0FBUDtBQVVGOztBQUFBLFNBQU9DLHNCQUFzQixHQUF0QkEsS0FBK0JDLFFBQUQsSUFBYztBQUNqRCxRQUFJLEVBQUVDLEtBQUssSUFBWCxRQUFJLENBQUosRUFBMEI7QUFDeEIsWUFBTVosY0FBYyxDQUFDLFVBQVcsMkJBQTBCWSxLQUExRCxFQUFxQixDQUFELENBQXBCO0FBRUY7O0FBQUEsVUFBTUMsUUFBUSxHQUFHRixRQUFRLENBQVJBLEtBQVEsQ0FBUkEsS0FDZDdCLEtBQUQsSUFBV3lCLFdBQVcsR0FBWEEsWUFBMEJDLFNBQVMsQ0FEaEQsS0FDZ0QsQ0FEL0JHLENBQWpCO0FBR0EsV0FBTztBQUNMTCxhQUFPLEVBQUVPLFFBQVEsQ0FBUkEsT0FBaUJDLENBQUQsSUFBT0EsQ0FBQyxDQUFEQSxTQUQzQixLQUMyQkEsQ0FBdkJELENBREo7QUFFTEosU0FBRyxFQUFFSSxRQUFRLENBQVJBLE9BQWlCQyxDQUFELElBQU9BLENBQUMsQ0FBREEsU0FGOUIsTUFFOEJBLENBQXZCRDtBQUZBLEtBQVA7QUFQRixHQUFPSCxDQUFQO0FBY0Y7O0FBQUEsd0NBQTZEO0FBQzNELFFBQU1LLFdBR0wsR0FBRyxJQUhKLEdBR0ksRUFISjtBQUlBLFFBQU1DLGFBQTRDLEdBQUcsSUFBckQsR0FBcUQsRUFBckQ7QUFDQSxRQUFNQyxXQUFrRCxHQUFHLElBQTNELEdBQTJELEVBQTNEO0FBQ0EsUUFBTUMsTUFHTCxHQUFHLElBSEosR0FHSSxFQUhKOztBQUtBLG1DQUEyRDtBQUN6RCxRQUFJakMsSUFBa0MsR0FBRytCLGFBQWEsQ0FBYkEsSUFBekMsR0FBeUNBLENBQXpDOztBQUNBLGNBQVU7QUFDUjtBQUdGLEtBTnlELENBTXpEOzs7QUFDQSxRQUFJeEIsUUFBUSxDQUFSQSxjQUF3QixnQkFBZVMsR0FBM0MsSUFBSVQsQ0FBSixFQUFxRDtBQUNuRCxhQUFPUixPQUFPLENBQWQsT0FBT0EsRUFBUDtBQUdGZ0M7O0FBQUFBLGlCQUFhLENBQWJBLFNBQXdCL0IsSUFBSSxHQUFHa0MsWUFBWSxDQUEzQ0gsR0FBMkMsQ0FBM0NBO0FBQ0E7QUFHRjs7QUFBQSxpQ0FBaUU7QUFDL0QsUUFBSS9CLElBQTBDLEdBQUdnQyxXQUFXLENBQVhBLElBQWpELElBQWlEQSxDQUFqRDs7QUFDQSxjQUFVO0FBQ1I7QUFHRkE7O0FBQUFBLGVBQVcsQ0FBWEEsVUFFR2hDLElBQUksR0FBRzFOLEtBQUssQ0FBTEEsSUFBSyxDQUFMQSxNQUNDd0QsR0FBRCxJQUFTO0FBQ2IsVUFBSSxDQUFDQSxHQUFHLENBQVIsSUFBYTtBQUNYLGNBQU0sVUFBVyw4QkFBNkJtRyxJQUE5QyxFQUFNLENBQU47QUFFRjs7QUFBQSxhQUFPbkcsR0FBRyxDQUFIQSxZQUFpQnpHLElBQUQsS0FBVztBQUFFNE0sWUFBSSxFQUFOO0FBQWNrRyxlQUFPLEVBQXZEO0FBQWtDLE9BQVgsQ0FBaEJyTSxDQUFQO0FBTEl4RCxhQU9FUyxHQUFELElBQVM7QUFDZCxZQUFNZ08sY0FBYyxDQUFwQixHQUFvQixDQUFwQjtBQVZOaUIsS0FFVTFQLENBRlYwUDtBQWFBO0FBR0Y7O0FBQUEsU0FBTztBQUNMSSxrQkFBYyxRQUFnQjtBQUM1QixhQUFPQyxVQUFVLFFBQWpCLFdBQWlCLENBQWpCO0FBRkc7O0FBSUxDLGdCQUFZLGlCQUF3QztBQUNsRHZDLGFBQU8sQ0FBUEEsc0JBQ1N3QyxFQUFELElBQVFBLEVBRGhCeEMsU0FHS3lDLE9BQUQsS0FBbUI7QUFDakJDLGlCQUFTLEVBQUdELE9BQU8sSUFBSUEsT0FBTyxDQUFuQixPQUFDQSxJQURLO0FBRWpCQSxlQUFPLEVBTGJ6QztBQUd1QixPQUFuQixDQUhKQSxFQU9LaE4sR0FBRCxLQUFVO0FBQUUyUCxhQUFLLEVBUHJCM0M7QUFPYyxPQUFWLENBUEpBLE9BU1M0QyxLQUFELElBQTRCO0FBQ2hDLGNBQU1DLEdBQUcsR0FBR2QsV0FBVyxDQUFYQSxJQUFaLEtBQVlBLENBQVo7QUFDQUEsbUJBQVcsQ0FBWEE7QUFDQSxZQUFJYyxHQUFHLElBQUksYUFBWCxLQUE2QkEsR0FBRyxDQUFIQTtBQVpqQzdDO0FBTEc7O0FBb0JMOEMsYUFBUyxrQkFBb0M7QUFDM0MsYUFBT1IsVUFBVSxnQkFBa0MsTUFBTTtBQUN2RCxlQUFPLHlCQUF5QixDQUM5QlMsZ0JBQWdCLGNBQWhCQSxLQUFnQixDQUFoQkEsTUFDUSxDQUFDO0FBQUE7QUFBRDtBQUFDLFNBQUQsS0FBc0I7QUFDMUIsaUJBQU8vQyxPQUFPLENBQVBBLElBQVksQ0FDakIrQixXQUFXLENBQVhBLGtCQUVJL0IsT0FBTyxDQUFQQSxJQUFZc0IsT0FBTyxDQUFQQSxJQUhDLGtCQUdEQSxDQUFadEIsQ0FIYSxFQUlqQkEsT0FBTyxDQUFQQSxJQUFZeUIsR0FBRyxDQUFIQSxJQUpkLGVBSWNBLENBQVp6QixDQUppQixDQUFaQSxDQUFQO0FBRkorQyxnQkFTU2hOLEdBQUQsSUFBUztBQUNiLGlCQUFPLGdDQUFpQ2lOLFVBQUQsS0FBaUI7QUFBQTtBQUV0RGhVLGtCQUFNLEVBQUUrRyxHQUFHLENBRmIsQ0FFYTtBQUYyQyxXQUFqQixDQUFoQyxDQUFQO0FBWDBCLFNBQzlCZ04sQ0FEOEIscUJBaUI5Qi9CLGNBQWMsQ0FBQyxVQUFXLG1DQUFrQ1ksS0FqQnZELEVBaUJVLENBQUQsQ0FqQmdCLENBQXpCLE1BbUJDLENBQUM7QUFBQTtBQUFEO0FBQUMsU0FBRCxLQUE0QjtBQUNoQyxnQkFBTTdMLEdBQXFCLEdBQUdrSCxNQUFNLENBQU5BLE9BRzVCO0FBQUVqTyxrQkFBTSxFQUhvQmlPO0FBRzVCLFdBSDRCQSxFQUE5QixVQUE4QkEsQ0FBOUI7QUFJQSxpQkFBTyxxQ0FBUDtBQXhCRyxpQkEwQkdqSyxHQUFELElBQVM7QUFDZCx3QkFBYztBQUNaO0FBQ0E7QUFFRjs7QUFBQSxpQkFBTztBQUFFMlAsaUJBQUssRUFBZDtBQUFPLFdBQVA7QUEvQkosU0FBTyxDQUFQO0FBREYsT0FBaUIsQ0FBakI7QUFyQkc7O0FBeURMbkYsWUFBUSxRQUErQjtBQUNyQztBQUNBO0FBQ0E7O0FBQ0EsVUFBS3lGLEVBQUUsR0FBSUMsU0FBRCxDQUFWLFlBQTBDO0FBQ3hDO0FBQ0EsWUFBSUQsRUFBRSxDQUFGQSxZQUFlLFVBQVVBLEVBQUUsQ0FBL0IsYUFBbUIsQ0FBbkIsRUFBZ0QsT0FBT2pELE9BQU8sQ0FBZCxPQUFPQSxFQUFQO0FBRWxEOztBQUFBLGFBQU8sZ0JBQWdCLGNBQWhCLEtBQWdCLENBQWhCLE1BQ0VtRCxNQUFELElBQ0puRCxPQUFPLENBQVBBLElBQ0VVLFdBQVcsR0FDUHlDLE1BQU0sQ0FBTkEsWUFBb0JyQyxNQUFELElBQVlzQyxjQUFjLFNBRHRDLFFBQ3NDLENBQTdDRCxDQURPLEdBSFYsRUFFSG5ELENBRkcsT0FRQyxNQUFNO0FBQ1Ysc0RBQW9CLE1BQU0sa0NBQWtDLE1BQU0sQ0FBbEUsQ0FBMEIsQ0FBMUI7QUFURyxnQkFZSDtBQUNBLFlBQU0sQ0FiVixDQUFPLENBQVA7QUFqRUo7O0FBQU8sR0FBUDs7O2VBb0ZhcUQsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xYZjs7QUFDQTs7Ozs7QUFDQTs7QUF5SEE7OztBQTVIQTs7QUFtQkEsTUFBTUMsZUFBb0MsR0FBRztBQUMzQzlVLFFBQU0sRUFEcUM7QUFDN0I7QUFDZCtVLGdCQUFjLEVBRjZCOztBQUczQ0MsT0FBSyxLQUFpQjtBQUNwQixRQUFJLEtBQUosUUFBaUIsT0FBT2pFLEVBQVA7O0FBQ2pCLGVBQW1DLEVBR3BDO0FBUkg7O0FBQTZDLENBQTdDLEMsQ0FXQTs7QUFDQSxNQUFNa0UsaUJBQWlCLEdBQUcsK0lBQTFCLGdCQUEwQixDQUExQjtBQWVBLE1BQU1DLFlBQVksR0FBRywwR0FBckIsb0JBQXFCLENBQXJCO0FBUUEsTUFBTUMsZ0JBQWdCLEdBQUcsa0RBQXpCLGdCQUF5QixDQUF6QixDLENBU0E7O0FBQ0ExRyxNQUFNLENBQU5BLDBDQUFpRDtBQUMvQzJHLEtBQUcsR0FBRztBQUNKLFdBQU9DLGlCQUFQO0FBRko1Rzs7QUFBaUQsQ0FBakRBO0FBTUF3RyxpQkFBaUIsQ0FBakJBLFFBQTJCSyxLQUFELElBQW1CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E3RyxRQUFNLENBQU5BLHVDQUE4QztBQUM1QzJHLE9BQUcsR0FBRztBQUNKLFlBQU1wVixNQUFNLEdBQUd1VixTQUFmO0FBQ0EsYUFBT3ZWLE1BQU0sQ0FBYixLQUFhLENBQWI7QUFISnlPOztBQUE4QyxHQUE5Q0E7QUFMRndHO0FBYUEsZ0JBQWdCLENBQWhCLFFBQTBCSyxLQUFELElBQW1CO0FBQzFDO0FBQ0E7O0FBQUVSLGlCQUFELE9BQUNBLEdBQWlDLENBQUMsR0FBRCxTQUFvQjtBQUNyRCxVQUFNOVUsTUFBTSxHQUFHdVYsU0FBZjtBQUNBLFdBQU92VixNQUFNLENBQU5BLEtBQU0sQ0FBTkEsQ0FBYyxHQUFyQixJQUFPQSxDQUFQO0FBRkQsR0FBQzhVO0FBRko7QUFRQUksWUFBWSxDQUFaQSxRQUFzQnZILEtBQUQsSUFBbUI7QUFDdENtSCxpQkFBZSxDQUFmQSxNQUFzQixNQUFNO0FBQzFCTyxzQ0FBd0IsQ0FBQyxHQUFELFNBQWE7QUFDbkMsWUFBTUcsVUFBVSxHQUFJLEtBQUk3SCxLQUFLLENBQUxBLHVCQUE4QixHQUFFQSxLQUFLLENBQUxBLFlBQXhEO0FBR0EsWUFBTThILGdCQUFnQixHQUF0Qjs7QUFDQSxVQUFJQSxnQkFBZ0IsQ0FBcEIsVUFBb0IsQ0FBcEIsRUFBa0M7QUFDaEMsWUFBSTtBQUNGQSwwQkFBZ0IsQ0FBaEJBLFVBQWdCLENBQWhCQSxDQUE2QixHQUE3QkE7QUFDQSxTQUZGLENBRUUsWUFBWTtBQUNaNVIsaUJBQU8sQ0FBUEEsTUFBZSx3Q0FBdUMyUixVQUF0RDNSO0FBQ0FBLGlCQUFPLENBQVBBLE1BQWUsR0FBRVcsR0FBRyxDQUFDa1IsT0FBUSxLQUFJbFIsR0FBRyxDQUFDbVIsS0FBckM5UjtBQUVIO0FBQ0Y7QUFiRHdSO0FBREZQO0FBREZJOztBQW1CQSxxQkFBNkI7QUFDM0IsTUFBSSxDQUFDSixlQUFlLENBQXBCLFFBQTZCO0FBQzNCLFVBQU1ZLE9BQU8sR0FDWCxnQ0FERjtBQUdBLFVBQU0sVUFBTixPQUFNLENBQU47QUFFRjs7QUFBQSxTQUFPWixlQUFlLENBQXRCO0FBR0YsQyxDQUFBOzs7ZUFDZUEsZSxFQUVmOzs7O0FBR08scUJBQWlDO0FBQ3RDLFNBQU96RiwwQkFBaUJ1RyxlQUF4QixhQUFPdkcsQ0FBUDtBQUdGLEMsQ0FBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUNPLE1BQU13RyxZQUFZLEdBQUcsQ0FBQyxHQUFELFNBQWlDO0FBQzNEZixpQkFBZSxDQUFmQSxTQUF5QixJQUFJTyxTQUFKLFFBQVcsR0FBcENQLElBQXlCLENBQXpCQTtBQUNBQSxpQkFBZSxDQUFmQSx1QkFBd0MvRCxFQUFELElBQVFBLEVBQS9DK0Q7QUFDQUEsaUJBQWUsQ0FBZkE7QUFFQSxTQUFPQSxlQUFlLENBQXRCO0FBTEssRSxDQVFQOzs7OztBQUNPLDBDQUE4RDtBQUNuRSxRQUFNZ0IsT0FBTyxHQUFiO0FBQ0EsUUFBTUMsUUFBUSxHQUFkOztBQUVBLE9BQUssTUFBTCwrQkFBMEM7QUFDeEMsUUFBSSxPQUFPRCxPQUFPLENBQWQsUUFBYyxDQUFkLEtBQUosVUFBMkM7QUFDekNDLGNBQVEsQ0FBUkEsUUFBUSxDQUFSQSxHQUFxQnRILE1BQU0sQ0FBTkEsT0FDbkJ1SCxLQUFLLENBQUxBLFFBQWNGLE9BQU8sQ0FBckJFLFFBQXFCLENBQXJCQSxTQURtQnZILElBRW5CcUgsT0FBTyxDQUZUQyxRQUVTLENBRll0SCxDQUFyQnNILENBRHlDLENBSXZDOztBQUNGO0FBR0ZBOztBQUFBQSxZQUFRLENBQVJBLFFBQVEsQ0FBUkEsR0FBcUJELE9BQU8sQ0FBNUJDLFFBQTRCLENBQTVCQTtBQUdGLEdBaEJtRSxDQWdCbkU7OztBQUNBQSxVQUFRLENBQVJBLFNBQWtCVixpQkFBbEJVO0FBRUFaLGtCQUFnQixDQUFoQkEsUUFBMEJHLEtBQUQsSUFBVztBQUNsQ1MsWUFBUSxDQUFSQSxLQUFRLENBQVJBLEdBQWtCLENBQUMsR0FBRCxTQUFvQjtBQUNwQyxhQUFPRCxPQUFPLENBQVBBLEtBQU8sQ0FBUEEsQ0FBZSxHQUF0QixJQUFPQSxDQUFQO0FBREZDO0FBREZaO0FBTUE7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVLRDs7QUFDQTs7QUFjQSxNQUFNYyx1QkFBdUIsR0FBRyxnQ0FBaEM7O0FBRU8seUJBQTRDO0FBQUE7QUFBNUM7QUFBNEMsQ0FBNUMsRUFHcUQ7QUFDMUQsUUFBTUMsVUFBbUIsR0FBR3RVLFFBQVEsSUFBSSxDQUF4QztBQUVBLFFBQU11VSxTQUFTLEdBQUcsV0FBbEIsTUFBa0IsR0FBbEI7QUFDQSxRQUFNLHdCQUF3QixxQkFBOUIsS0FBOEIsQ0FBOUI7QUFFQSxRQUFNdkcsTUFBTSxHQUFHLHdCQUNaQyxFQUFELElBQWtCO0FBQ2hCLFFBQUlzRyxTQUFTLENBQWIsU0FBdUI7QUFDckJBLGVBQVMsQ0FBVEE7QUFDQUEsZUFBUyxDQUFUQTtBQUdGOztBQUFBLFFBQUlELFVBQVUsSUFBZCxTQUEyQjs7QUFFM0IsUUFBSXJHLEVBQUUsSUFBSUEsRUFBRSxDQUFaLFNBQXNCO0FBQ3BCc0csZUFBUyxDQUFUQSxVQUFvQkMsT0FBTyxLQUV4QnBHLFNBQUQsSUFBZUEsU0FBUyxJQUFJcUcsVUFBVSxDQUZiLFNBRWEsQ0FGYixFQUd6QjtBQUhGRjtBQUdFLE9BSHlCLENBQTNCQTtBQU1IO0FBaEJZLEtBaUJiLHlCQWpCRixPQWlCRSxDQWpCYSxDQUFmO0FBb0JBLHdCQUFVLE1BQU07QUFDZCxRQUFJLENBQUoseUJBQThCO0FBQzVCLFVBQUksQ0FBSixTQUFjO0FBQ1osY0FBTUcsWUFBWSxHQUFHLDhDQUFvQixNQUFNRCxVQUFVLENBQXpELElBQXlELENBQXBDLENBQXJCO0FBQ0EsZUFBTyxNQUFNLDZDQUFiLFlBQWEsQ0FBYjtBQUVIO0FBQ0Y7QUFQRCxLQU9HLENBUEgsT0FPRyxDQVBIO0FBU0EsU0FBTyxTQUFQLE9BQU8sQ0FBUDtBQUdGOztBQUFBLDZDQUljO0FBQ1osUUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQTZCRSxjQUFjLENBQWpELE9BQWlELENBQWpEO0FBQ0FDLFVBQVEsQ0FBUkE7QUFFQUMsVUFBUSxDQUFSQTtBQUNBLFNBQU8scUJBQTJCO0FBQ2hDRCxZQUFRLENBQVJBO0FBQ0FDLFlBQVEsQ0FBUkEsbUJBRmdDLENBSWhDOztBQUNBLFFBQUlELFFBQVEsQ0FBUkEsU0FBSixHQUF5QjtBQUN2QkMsY0FBUSxDQUFSQTtBQUNBQyxlQUFTLENBQVRBO0FBRUg7QUFURDtBQVlGOztBQUFBLE1BQU1BLFNBQVMsR0FBRyxJQUFsQixHQUFrQixFQUFsQjs7QUFDQSxpQ0FBd0U7QUFDdEUsUUFBTXJQLEVBQUUsR0FBR29HLE9BQU8sQ0FBUEEsY0FBWDtBQUNBLE1BQUlzSSxRQUFRLEdBQUdXLFNBQVMsQ0FBVEEsSUFBZixFQUFlQSxDQUFmOztBQUNBLGdCQUFjO0FBQ1o7QUFHRjs7QUFBQSxRQUFNRixRQUFRLEdBQUcsSUFBakIsR0FBaUIsRUFBakI7QUFDQSxRQUFNQyxRQUFRLEdBQUcseUJBQTBCRSxPQUFELElBQWE7QUFDckRBLFdBQU8sQ0FBUEEsUUFBaUJyRixLQUFELElBQVc7QUFDekIsWUFBTXNGLFFBQVEsR0FBR0osUUFBUSxDQUFSQSxJQUFhbEYsS0FBSyxDQUFuQyxNQUFpQmtGLENBQWpCO0FBQ0EsWUFBTXhHLFNBQVMsR0FBR3NCLEtBQUssQ0FBTEEsa0JBQXdCQSxLQUFLLENBQUxBLG9CQUExQzs7QUFDQSxVQUFJc0YsUUFBUSxJQUFaLFdBQTJCO0FBQ3pCQSxnQkFBUSxDQUFSQSxTQUFRLENBQVJBO0FBRUg7QUFOREQ7QUFEZSxLQUFqQixPQUFpQixDQUFqQjtBQVVBRCxXQUFTLENBQVRBLFFBRUdYLFFBQVEsR0FBRztBQUFBO0FBQUE7QUFGZFc7QUFFYyxHQUZkQTtBQVFBO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNHRDs7QUFFQTs7QUFXZSx1Q0FLK0I7QUFDNUMsb0NBQW9EO0FBQ2xELHdCQUFPO0FBQW1CLFlBQU0sRUFBRSxZQUEzQixTQUEyQjtBQUEzQixPQUFQLEtBQU8sRUFBUDtBQUdGOztBQUFBLG1CQUFpQixDQUFqQixrQkFBb0NHLGlCQUFpQixDQUFDQyxlQUF0RCxDQUNBO0FBREE7QUFFRUMsbUJBQUQsb0JBQUNBLEdBQWlERixpQkFBRCxDQUFqRCxtQkFBQ0U7O0FBQ0YsWUFBMkM7QUFDekMsVUFBTXhOLElBQUksR0FDUnNOLGlCQUFpQixDQUFqQkEsZUFBaUNBLGlCQUFpQixDQUFsREEsUUFERjtBQUVBRSxxQkFBaUIsQ0FBakJBLGNBQWlDLGNBQWF4TixJQUE5Q3dOO0FBR0Y7O0FBQUE7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDTSxnREFNTDtBQUNBLHFCQURBLENBRUE7O0FBQ0EsUUFBTUMsYUFBYSxHQUFHclcsUUFBUSxDQUFSQSxNQUF0QixHQUFzQkEsQ0FBdEI7QUFFQyxHQUFDc1csT0FBTyxJQUFSLFNBQXNCaEksTUFBRCxJQUFZO0FBQ2hDLFFBQUkrSCxhQUFhLENBQWJBLENBQWEsQ0FBYkEsbUJBQW1DL0gsTUFBTSxDQUE3QyxXQUF1Q0EsRUFBdkMsRUFBNkQ7QUFDM0RpSSxvQkFBYyxHQUFkQTtBQUNBRixtQkFBYSxDQUFiQTtBQUNBclcsY0FBUSxHQUFHcVcsYUFBYSxDQUFiQSxhQUFYclc7QUFDQTtBQUVGOztBQUFBO0FBUEQ7QUFVRCxTQUFPO0FBQUE7QUFBUDtBQUFPLEdBQVA7QUFJRCxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBOztBQVVlLGdCQUE2QjtBQUMxQyxRQUFNd1csR0FBK0IsR0FBRzFJLE1BQU0sQ0FBTkEsT0FBeEMsSUFBd0NBLENBQXhDO0FBRUEsU0FBTztBQUNMMkksTUFBRSxnQkFBaUM7QUFDakM7QUFBQyxPQUFDRCxHQUFHLENBQUhBLElBQUcsQ0FBSEEsS0FBY0EsR0FBRyxDQUFIQSxJQUFHLENBQUhBLEdBQWYsRUFBQ0EsQ0FBRDtBQUZFOztBQUtMRSxPQUFHLGdCQUFpQztBQUNsQyxVQUFJRixHQUFHLENBQVAsSUFBTyxDQUFQLEVBQWU7QUFDYkEsV0FBRyxDQUFIQSxJQUFHLENBQUhBLFFBQWlCQSxHQUFHLENBQUhBLElBQUcsQ0FBSEEsc0JBQWpCQTtBQUVIO0FBVEk7O0FBV0xHLFFBQUksT0FBZSxHQUFmLE1BQStCO0FBQ2pDO0FBQ0E7QUFBQyxPQUFDSCxHQUFHLENBQUhBLElBQUcsQ0FBSEEsSUFBRCxnQkFBK0JJLE9BQUQsSUFBc0I7QUFDbkRBLGVBQU8sQ0FBQyxHQUFSQSxJQUFPLENBQVBBO0FBREQ7QUFiTDs7QUFBTyxHQUFQO0FBa0JELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNEOztBQUtBOztBQU1BOztBQUNBOztBQUNBOztBQUNBOztBQVVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFqQ0EsQyxDQUFBOzs7QUErREE7O0FBRUEsSUFBSTdHLEtBQUosRUFBcUMsRUFLckM7O0FBQUEsTUFBTThHLFFBQVEsR0FBSTlHLFVBQWxCOztBQUVBLGtDQUFrQztBQUNoQyxTQUFPakMsTUFBTSxDQUFOQSxPQUFjLFVBQWRBLGlCQUFjLENBQWRBLEVBQTRDO0FBQ2pEaUUsYUFBUyxFQURYO0FBQW1ELEdBQTVDakUsQ0FBUDtBQUtGOztBQUFBLHFDQUFzRDtBQUNwRCxTQUFPZ0osTUFBTSxJQUFJakgsSUFBSSxDQUFKQSxXQUFWaUgsR0FBVWpILENBQVZpSCxHQUNIakgsSUFBSSxLQUFKQSxNQUNFLHdEQURGQSxNQUNFLENBREZBLEdBRUcsR0FBRWlILE1BQU8sR0FBRUMsZUFBZSxDQUFmQSxJQUFlLENBQWZBLFdBQWdDbEgsSUFBSSxDQUFKQSxVQUFoQ2tILENBQWdDbEgsQ0FBaENrSCxHQUFvRGxILElBSC9EaUgsS0FBUDtBQU9LOztBQUFBLCtEQUtMO0FBQ0EsTUFBSS9HLEtBQUosRUFBcUMsRUFhckM7O0FBQUE7QUFHSzs7QUFBQSxnREFJTDtBQUNBLE1BQUlBLEtBQUosRUFBcUMsRUFZckM7O0FBQUE7QUFHSzs7QUFBQSxpQ0FBa0Q7QUFDdkQsTUFBSUEsS0FBSixFQUFxQyxFQVlyQzs7QUFBQTtBQUdGOztBQUFBLCtCQUF1QztBQUNyQyxRQUFNaUgsVUFBVSxHQUFHbkgsSUFBSSxDQUFKQSxRQUFuQixHQUFtQkEsQ0FBbkI7QUFDQSxRQUFNb0gsU0FBUyxHQUFHcEgsSUFBSSxDQUFKQSxRQUFsQixHQUFrQkEsQ0FBbEI7O0FBRUEsTUFBSW1ILFVBQVUsR0FBRyxDQUFiQSxLQUFtQkMsU0FBUyxHQUFHLENBQW5DLEdBQXVDO0FBQ3JDcEgsUUFBSSxHQUFHQSxJQUFJLENBQUpBLGFBQWtCbUgsVUFBVSxHQUFHLENBQWJBLGlCQUF6Qm5ILFNBQU9BLENBQVBBO0FBRUY7O0FBQUE7QUFHSzs7QUFBQSwyQkFBNEM7QUFDakRBLE1BQUksR0FBR2tILGVBQWUsQ0FBdEJsSCxJQUFzQixDQUF0QkE7QUFDQSxTQUFPQSxJQUFJLEtBQUpBLFlBQXFCQSxJQUFJLENBQUpBLFdBQWdCZ0gsUUFBUSxHQUFwRCxHQUE0QmhILENBQTVCO0FBR0s7O0FBQUEsMkJBQTJDO0FBQ2hEO0FBQ0EsU0FBT3FILGFBQWEsT0FBcEIsUUFBb0IsQ0FBcEI7QUFHSzs7QUFBQSwyQkFBMkM7QUFDaERySCxNQUFJLEdBQUdBLElBQUksQ0FBSkEsTUFBV2dILFFBQVEsQ0FBMUJoSCxNQUFPQSxDQUFQQTtBQUNBLE1BQUksQ0FBQ0EsSUFBSSxDQUFKQSxXQUFMLEdBQUtBLENBQUwsRUFBMkJBLElBQUksR0FBSSxJQUFHQSxJQUFYQTtBQUMzQjtBQUdGO0FBQUE7QUFDQTtBQUNBOzs7QUFDTyx5QkFBMEM7QUFDL0M7QUFDQSxNQUFJc0gsR0FBRyxDQUFIQSxtQkFBdUJBLEdBQUcsQ0FBSEEsV0FBM0IsR0FBMkJBLENBQTNCLEVBQWdEOztBQUNoRCxNQUFJO0FBQ0Y7QUFDQSxVQUFNQyxjQUFjLEdBQUcsV0FBdkIsaUJBQXVCLEdBQXZCO0FBQ0EsVUFBTUMsUUFBUSxHQUFHLGFBQWpCLGNBQWlCLENBQWpCO0FBQ0EsV0FBT0EsUUFBUSxDQUFSQSw2QkFBc0NDLFdBQVcsQ0FBQ0QsUUFBUSxDQUFqRSxRQUF3RCxDQUF4RDtBQUNBLEdBTEYsQ0FLRSxVQUFVO0FBQ1Y7QUFFSDtBQUlNOztBQUFBLGlEQUlMO0FBQ0EsTUFBSUUsaUJBQWlCLEdBQXJCO0FBRUEsUUFBTUMsWUFBWSxHQUFHLCtCQUFyQixLQUFxQixDQUFyQjtBQUNBLFFBQU1DLGFBQWEsR0FBR0QsWUFBWSxDQUFsQztBQUNBLFFBQU1FLGNBQWMsR0FDbEI7QUFDQSxHQUFDQyxVQUFVLEtBQVZBLFFBQXVCLGlEQUF2QkEsVUFBdUIsQ0FBdkJBLEdBQUQsT0FDQTtBQUNBO0FBSkY7QUFPQUosbUJBQWlCLEdBQWpCQTtBQUNBLFFBQU1LLE1BQU0sR0FBRzlKLE1BQU0sQ0FBTkEsS0FBZixhQUFlQSxDQUFmOztBQUVBLE1BQ0UsQ0FBQzhKLE1BQU0sQ0FBTkEsTUFBY0MsS0FBRCxJQUFXO0FBQ3ZCLFFBQUkxRyxLQUFLLEdBQUd1RyxjQUFjLENBQWRBLEtBQWMsQ0FBZEEsSUFBWjtBQUNBLFVBQU07QUFBQTtBQUFBO0FBQUEsUUFBdUJELGFBQWEsQ0FBMUMsS0FBMEMsQ0FBMUMsQ0FGdUIsQ0FJdkI7QUFDQTs7QUFDQSxRQUFJSyxRQUFRLEdBQUksSUFBR0MsTUFBTSxXQUFXLEVBQUcsR0FBRUYsS0FBekM7O0FBQ0Esa0JBQWM7QUFDWkMsY0FBUSxHQUFJLEdBQUUsZUFBZSxFQUFHLElBQUdBLFFBQW5DQTtBQUVGOztBQUFBLFFBQUlDLE1BQU0sSUFBSSxDQUFDMUMsS0FBSyxDQUFMQSxRQUFmLEtBQWVBLENBQWYsRUFBcUNsRSxLQUFLLEdBQUcsQ0FBUkEsS0FBUSxDQUFSQTtBQUVyQyxXQUNFLENBQUM2RyxRQUFRLElBQUlILEtBQUssSUFBbEIscUJBQ0E7QUFDQ04scUJBQWlCLEdBQ2hCQSxpQkFBaUIsQ0FBakJBLGtCQUVFUSxNQUFNLEdBQ0Q1RyxLQUFELElBQUNBLEVBRUc7QUFDQTtBQUNBO0FBQ0E7QUFDQzhHLFdBQUQsSUFBYUMsa0JBQWtCLENBTm5DLE9BTW1DLENBTmxDL0csRUFBRCxJQUFDQSxDQURDLEdBQ0RBLENBREMsR0FVRitHLGtCQUFrQixDQVp4QlgsS0FZd0IsQ0FaeEJBLEtBSkosR0FDRSxDQURGO0FBYkosR0FDR0ssQ0FESCxFQWlDRTtBQUNBTCxxQkFBaUIsR0FBakJBLEdBREEsQ0FDdUI7QUFFdkI7QUFDQTtBQUVGOztBQUFBLFNBQU87QUFBQTtBQUVMWSxVQUFNLEVBRlI7QUFBTyxHQUFQO0FBTUY7O0FBQUEsMkNBQXFFO0FBQ25FLFFBQU1DLGFBQTZCLEdBQW5DO0FBRUF0SyxRQUFNLENBQU5BLG9CQUE0QkwsR0FBRCxJQUFTO0FBQ2xDLFFBQUksQ0FBQ21LLE1BQU0sQ0FBTkEsU0FBTCxHQUFLQSxDQUFMLEVBQTJCO0FBQ3pCUSxtQkFBYSxDQUFiQSxHQUFhLENBQWJBLEdBQXFCQyxLQUFLLENBQTFCRCxHQUEwQixDQUExQkE7QUFFSDtBQUpEdEs7QUFLQTtBQUdGO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLG1EQUlHO0FBQ1I7QUFDQTs7QUFFQSxNQUFJO0FBQ0Z3SyxRQUFJLEdBQUcscUJBQVBBLFVBQU8sQ0FBUEE7QUFDQSxHQUZGLENBRUUsVUFBVTtBQUNWO0FBQ0FBLFFBQUksR0FBRyxhQUFQQSxVQUFPLENBQVBBO0FBRUY7O0FBQUEsUUFBTUMsV0FBVyxHQUNmLGtDQUFrQyxpQ0FEcEMsSUFDb0MsQ0FEcEMsQ0FWUSxDQVlSOztBQUNBLE1BQUksQ0FBQ0MsVUFBVSxDQUFmLFdBQWUsQ0FBZixFQUE4QjtBQUM1QixXQUFRQyxTQUFTLEdBQUcsQ0FBSCxXQUFHLENBQUgsR0FBakI7QUFFRjs7QUFBQSxNQUFJO0FBQ0YsVUFBTUMsUUFBUSxHQUFHLHFCQUFqQixJQUFpQixDQUFqQjtBQUNBQSxZQUFRLENBQVJBLFdBQW9CLHdEQUEyQkEsUUFBUSxDQUF2REEsUUFBb0IsQ0FBcEJBO0FBQ0EsUUFBSUMsY0FBYyxHQUFsQjs7QUFFQSxRQUNFLCtCQUFlRCxRQUFRLENBQXZCLGFBQ0FBLFFBQVEsQ0FEUixnQkFERixXQUlFO0FBQ0EsWUFBTUwsS0FBSyxHQUFHLHlDQUF1QkssUUFBUSxDQUE3QyxZQUFjLENBQWQ7QUFFQSxZQUFNO0FBQUE7QUFBQTtBQUFBLFVBQXFCRSxhQUFhLENBQ3RDRixRQUFRLENBRDhCLFVBRXRDQSxRQUFRLENBRjhCLFVBQXhDLEtBQXdDLENBQXhDOztBQU1BLGtCQUFZO0FBQ1ZDLHNCQUFjLEdBQUcsaUNBQXFCO0FBQ3BDM1ksa0JBQVEsRUFENEI7QUFFcEM2WSxjQUFJLEVBQUVILFFBQVEsQ0FGc0I7QUFHcENMLGVBQUssRUFBRVMsa0JBQWtCLFFBSDNCSCxNQUcyQjtBQUhXLFNBQXJCLENBQWpCQTtBQU1IO0FBRUQsS0EzQkUsQ0EyQkY7OztBQUNBLFVBQU1JLFlBQVksR0FDaEJMLFFBQVEsQ0FBUkEsV0FBb0JKLElBQUksQ0FBeEJJLFNBQ0lBLFFBQVEsQ0FBUkEsV0FBb0JBLFFBQVEsQ0FBUkEsT0FEeEJBLE1BQ0lBLENBREpBLEdBRUlBLFFBQVEsQ0FIZDtBQUtBLFdBQVFELFNBQVMsR0FDYixlQUFlRSxjQUFjLElBRGhCLFlBQ2IsQ0FEYSxHQUFqQjtBQUdBLEdBcENGLENBb0NFLFVBQVU7QUFDVixXQUFRRixTQUFTLEdBQUcsQ0FBSCxXQUFHLENBQUgsR0FBakI7QUFFSDtBQUVEOztBQUFBLDBCQUFrQztBQUNoQyxRQUFNTyxNQUFNLEdBQUcsV0FBZixpQkFBZSxHQUFmO0FBRUEsU0FBTzdCLEdBQUcsQ0FBSEEscUJBQXlCQSxHQUFHLENBQUhBLFVBQWM2QixNQUFNLENBQTdDN0IsTUFBeUJBLENBQXpCQSxHQUFQO0FBR0Y7O0FBQUEsdUNBQThEO0FBQzVEO0FBQ0E7QUFDQSxNQUFJLDZCQUE2QjhCLFdBQVcsQ0FBQzVaLE1BQU0sQ0FBUCxhQUE1QyxJQUE0QyxDQUE1QztBQUNBLFFBQU0yWixNQUFNLEdBQUcsV0FBZixpQkFBZSxHQUFmO0FBQ0EsUUFBTUUsYUFBYSxHQUFHSCxZQUFZLENBQVpBLFdBQXRCLE1BQXNCQSxDQUF0QjtBQUNBLFFBQU1JLFdBQVcsR0FBR3ZLLFVBQVUsSUFBSUEsVUFBVSxDQUFWQSxXQUFsQyxNQUFrQ0EsQ0FBbEM7QUFFQW1LLGNBQVksR0FBR0ssV0FBVyxDQUExQkwsWUFBMEIsQ0FBMUJBO0FBQ0FuSyxZQUFVLEdBQUdBLFVBQVUsR0FBR3dLLFdBQVcsQ0FBZCxVQUFjLENBQWQsR0FBdkJ4SztBQUVBLFFBQU15SyxXQUFXLEdBQUdILGFBQWEsa0JBQWtCSSxXQUFXLENBQTlELFlBQThELENBQTlEO0FBQ0EsUUFBTUMsVUFBVSxHQUFHak0sRUFBRSxHQUNqQjhMLFdBQVcsQ0FBQ0gsV0FBVyxDQUFDNVosTUFBTSxDQUFQLFFBRE4sRUFDTSxDQUFaLENBRE0sR0FFakJ1UCxVQUFVLElBRmQ7QUFJQSxTQUFPO0FBQ0x1SSxPQUFHLEVBREU7QUFFTDdKLE1BQUUsRUFBRTZMLFdBQVcsZ0JBQWdCRyxXQUFXLENBRjVDLFVBRTRDO0FBRnJDLEdBQVA7QUFNRjs7QUFBQSw4Q0FBZ0U7QUFDOUQsUUFBTUUsYUFBYSxHQUFHLHFEQUF3Qiw4Q0FBOUMsUUFBOEMsQ0FBeEIsQ0FBdEI7O0FBRUEsTUFBSUEsYUFBYSxLQUFiQSxVQUE0QkEsYUFBYSxLQUE3QyxXQUE2RDtBQUMzRDtBQUdGLEdBUDhELENBTzlEOzs7QUFDQSxNQUFJLENBQUNDLEtBQUssQ0FBTEEsU0FBTCxhQUFLQSxDQUFMLEVBQXFDO0FBQ25DO0FBQ0FBLFNBQUssQ0FBTEEsS0FBWUMsSUFBRCxJQUFVO0FBQ25CLFVBQUksd0NBQXdCLDZDQUE1QixhQUE0QixDQUE1QixFQUF5RTtBQUN2RTFaLGdCQUFRLEdBQVJBO0FBQ0E7QUFFSDtBQUxEeVo7QUFPRjs7QUFBQSxTQUFPLHFEQUFQLFFBQU8sQ0FBUDtBQW1FRjs7QUFBQSxNQUFNRSx1QkFBdUIsR0FDM0I1SixVQUdBLEtBSkY7QUFZQSxNQUFNNkosa0JBQWtCLEdBQUdsSSxNQUFNLENBQWpDLG9CQUFpQyxDQUFqQzs7QUFFQSxtQ0FBaUU7QUFDL0QsU0FBTyxLQUFLLE1BQU07QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBbUksZUFBVyxFQVpOO0FBQVcsR0FBTixDQUFMLE1BYUVqVCxHQUFELElBQVM7QUFDZixRQUFJLENBQUNBLEdBQUcsQ0FBUixJQUFhO0FBQ1gsVUFBSWtULFFBQVEsR0FBUkEsS0FBZ0JsVCxHQUFHLENBQUhBLFVBQXBCLEtBQXVDO0FBQ3JDLGVBQU9tVCxVQUFVLE1BQU1ELFFBQVEsR0FBL0IsQ0FBaUIsQ0FBakI7QUFFRjs7QUFBQSxVQUFJbFQsR0FBRyxDQUFIQSxXQUFKLEtBQXdCO0FBQ3RCLGVBQU9BLEdBQUcsQ0FBSEEsWUFBaUJqRCxJQUFELElBQVU7QUFDL0IsY0FBSUEsSUFBSSxDQUFSLFVBQW1CO0FBQ2pCLG1CQUFPO0FBQUVxVyxzQkFBUSxFQUFqQjtBQUFPLGFBQVA7QUFFRjs7QUFBQSxnQkFBTSxVQUFOLDZCQUFNLENBQU47QUFKRixTQUFPcFQsQ0FBUDtBQU9GOztBQUFBLFlBQU0sVUFBTiw2QkFBTSxDQUFOO0FBRUY7O0FBQUEsV0FBT0EsR0FBRyxDQUFWLElBQU9BLEVBQVA7QUE1QkYsR0FBTyxDQUFQO0FBZ0NGOztBQUFBLGlEQUFrRTtBQUNoRSxTQUFPLFVBQVUsV0FBV3FULGNBQWMsT0FBbkMsQ0FBVSxDQUFWLE9BQW9EcFcsR0FBRCxJQUFnQjtBQUN4RTtBQUNBO0FBQ0E7QUFFQSxRQUFJLENBQUosZ0JBQXFCO0FBQ25CO0FBRUY7O0FBQUE7QUFSRixHQUFPLENBQVA7QUFZYTs7QUFBQSxNQUFNNlEsTUFBTixDQUFtQztBQU9oRDtBQUNGO0FBUmtEO0FBV2hEO0FBRUE7QUF5QkF3RixhQUFXLHlCQUlUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSlM7QUFJVCxHQUpTLEVBaUNUO0FBQUEsU0F0RUZ6SCxLQXNFRTtBQUFBLFNBckVGelMsUUFxRUU7QUFBQSxTQXBFRnFZLEtBb0VFO0FBQUEsU0FuRUY4QixNQW1FRTtBQUFBLFNBbEVGdEQsUUFrRUU7QUFBQSxTQTdERnVELFVBNkRFO0FBQUEsU0EzREZDLEdBMkRFLEdBM0RrQyxFQTJEbEM7QUFBQSxTQXpERkMsR0F5REUsR0F6RDJDLEVBeUQzQztBQUFBLFNBdkRGQyxHQXVERTtBQUFBLFNBdERGQyxHQXNERTtBQUFBLFNBckRGQyxVQXFERTtBQUFBLFNBcERGQyxJQW9ERTtBQUFBLFNBbkRGQyxNQW1ERTtBQUFBLFNBbERGQyxRQWtERTtBQUFBLFNBakRGQyxLQWlERTtBQUFBLFNBaERGQyxVQWdERTtBQUFBLFNBL0NGQyxjQStDRTtBQUFBLFNBOUNGQyxRQThDRTtBQUFBLFNBN0NGMU0sTUE2Q0U7QUFBQSxTQTVDRmdJLE9BNENFO0FBQUEsU0EzQ0YyRSxhQTJDRTtBQUFBLFNBMUNGQyxhQTBDRTtBQUFBLFNBekNGQyxPQXlDRTtBQUFBLFNBeENGQyxTQXdDRTtBQUFBLFNBdkNGQyxjQXVDRTtBQUFBLFNBckNNQyxJQXFDTixHQXJDcUIsQ0FxQ3JCOztBQUFBLHNCQWlHWXBPLENBQUQsSUFBNEI7QUFDdkMsWUFBTXFPLEtBQUssR0FBR3JPLENBQUMsQ0FBZjs7QUFFQSxVQUFJLENBQUosT0FBWTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFBQTtBQUFBO0FBQUEsWUFBTjtBQUNBLHlDQUVFLGlDQUFxQjtBQUFFbE4sa0JBQVEsRUFBRXNaLFdBQVcsQ0FBdkIsUUFBdUIsQ0FBdkI7QUFGdkI7QUFFdUIsU0FBckIsQ0FGRixFQUdFLFdBSEYsTUFHRSxHQUhGO0FBS0E7QUFHRjs7QUFBQSxVQUFJLENBQUNpQyxLQUFLLENBQVYsS0FBZ0I7QUFDZDtBQUdGOztBQUFBO0FBQ0EsWUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBTjs7QUFDQSxVQUFJeEwsS0FBSixFQUEyQyxFQXFCM0M7O0FBQUE7QUFFQSxZQUFNO0FBQUE7QUFBQSxVQUFlLHdDQUFyQixHQUFxQixDQUFyQixDQW5EdUMsQ0FxRHZDO0FBQ0E7O0FBQ0EsVUFBSSxjQUFjekMsRUFBRSxLQUFLLEtBQXJCLFVBQW9DdE4sUUFBUSxLQUFLLEtBQXJELFVBQW9FO0FBQ2xFO0FBR0YsT0EzRHVDLENBMkR2QztBQUNBOzs7QUFDQSxVQUFJLGFBQWEsQ0FBQyxVQUFsQixLQUFrQixDQUFsQixFQUFvQztBQUNsQztBQUdGOztBQUFBLDJDQUlFOE4sTUFBTSxDQUFOQSxvQkFBcUU7QUFDbkVLLGVBQU8sRUFBRXJCLE9BQU8sQ0FBUEEsV0FBbUIsS0FEdUM7QUFFbkV3QixjQUFNLEVBQUV4QixPQUFPLENBQVBBLFVBQWtCLEtBTjlCO0FBSXVFLE9BQXJFZ0IsQ0FKRjtBQWxLQSxPQUNBOzs7QUFDQSxpQkFBYSxxREFBYixTQUFhLENBQWIsQ0FGQSxDQUlBOztBQUNBLHlCQUxBLENBTUE7QUFDQTtBQUNBOztBQUNBLFFBQUk5TixTQUFRLEtBQVosV0FBNEI7QUFDMUIsc0JBQWdCLEtBQWhCLFNBQThCO0FBQUE7QUFFNUJ3YixlQUFPLEVBRnFCO0FBRzVCek4sYUFBSyxFQUh1QjtBQUFBO0FBSzVCME4sZUFBTyxFQUFFQyxZQUFZLElBQUlBLFlBQVksQ0FMVDtBQU01QkMsZUFBTyxFQUFFRCxZQUFZLElBQUlBLFlBQVksQ0FOdkM7QUFBOEIsT0FBOUI7QUFVRjs7QUFBQSwrQkFBMkI7QUFDekJFLGVBQVMsRUFEZ0I7QUFFekI5SSxpQkFBVyxFQUFFO0FBRmY7QUFFZTtBQUZZLEtBQTNCLENBcEJBLENBMkJBO0FBQ0E7O0FBQ0Esa0JBQWM0QixNQUFNLENBQXBCO0FBRUE7QUFDQTtBQUNBLHdCQWpDQSxDQWtDQTtBQUNBOztBQUNBLFVBQU1tSCxpQkFBaUIsR0FDckIsNkNBQTRCNUwsSUFBSSxDQUFKQSxjQUQ5Qjs7QUFHQSxrQkFBYzRMLGlCQUFpQixlQUEvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQTNDQSxDQTRDQTtBQUNBOztBQUNBO0FBRUE7QUFFQSxtQkFBZSxDQUFDLEVBQ2Q1TCxJQUFJLENBQUpBLHNCQUNBQSxJQUFJLENBQUpBLGNBREFBLE9BRUMsc0JBQ0MsQ0FBQ0EsSUFBSSxDQUFKQSxTQURGLFVBRUMsQ0FBQ0YsS0FMVyxDQUFoQjtBQU9BLHFCQUFpQixDQUFDLENBQWxCO0FBQ0E7O0FBRUEsUUFBSUEsS0FBSixFQUFxQyxFQVdyQzs7QUFBQSxlQUFtQyxFQXdCcEM7QUErRUQrTDs7QUFBQUEsUUFBTSxHQUFTO0FBQ2J4SyxVQUFNLENBQU5BO0FBR0Y7QUFBQTtBQUNGO0FBQ0E7OztBQUNFeUssTUFBSSxHQUFHO0FBQ0x6SyxVQUFNLENBQU5BO0FBR0Y7QUFBQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNFMEssTUFBSSxVQUFxQmxQLE9BQTBCLEdBQS9DLElBQXNEO0FBQ3hELFFBQUlpRCxLQUFKLEVBQTJDLEVBYTNDOztBQUFBO0FBQUMsS0FBQztBQUFBO0FBQUE7QUFBQSxRQUFja00sWUFBWSxZQUEzQixFQUEyQixDQUEzQjtBQUNELFdBQU8sa0NBQVAsT0FBTyxDQUFQO0FBR0Y7QUFBQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNFMU8sU0FBTyxVQUFxQlQsT0FBMEIsR0FBL0MsSUFBc0Q7QUFDM0Q7QUFBQyxLQUFDO0FBQUE7QUFBQTtBQUFBLFFBQWNtUCxZQUFZLFlBQTNCLEVBQTJCLENBQTNCO0FBQ0QsV0FBTyxxQ0FBUCxPQUFPLENBQVA7QUFHRjs7QUFBQSx1REFNb0I7QUFBQTs7QUFDbEIsUUFBSSxDQUFDekQsVUFBVSxDQUFmLEdBQWUsQ0FBZixFQUFzQjtBQUNwQmxILFlBQU0sQ0FBTkE7QUFDQTtBQUVGOztBQUFBLFVBQU00SyxpQkFBaUIsR0FBRy9FLEdBQUcsS0FBSEEsTUFBZXJLLE9BQUQsQ0FBeEMsR0FMa0IsQ0FPbEI7QUFDQTs7QUFDQSxRQUFLQSxPQUFELENBQUosSUFBeUI7QUFDdkI7QUFHRixLQWJrQixDQWFsQjtBQUNBO0FBQ0E7OztBQUNBQSxXQUFPLENBQVBBLFNBQWlCLENBQUMscUJBQUVBLE9BQU8sQ0FBVCxvQ0FBbEJBLElBQWtCLENBQWxCQTtBQUVBLFFBQUlxUCxZQUFZLEdBQUdyUCxPQUFPLENBQVBBLFdBQW1CLEtBQXRDOztBQUVBLFFBQUlpRCxLQUFKLEVBQXFDLHNCQWdGckM7O0FBQUEsUUFBSSxDQUFFakQsT0FBRCxDQUFMLElBQTBCO0FBQ3hCO0FBRUYsS0F2R2tCLENBdUdsQjs7O0FBQ0EsUUFBSXNQLE9BQUosSUFBUTtBQUNOQyxpQkFBVyxDQUFYQTtBQUdGOztBQUFBLFVBQU07QUFBRWxPLGFBQU8sR0FBVDtBQUFBLFFBQU47QUFDQSxVQUFNbU8sVUFBVSxHQUFHO0FBQW5CO0FBQW1CLEtBQW5COztBQUVBLFFBQUksS0FBSixnQkFBeUI7QUFDdkIsOEJBQXdCLEtBQXhCO0FBR0ZoUDs7QUFBQUEsTUFBRSxHQUFHZ00sV0FBVyxDQUNkaUQsU0FBUyxDQUNQakYsV0FBVyxDQUFYQSxFQUFXLENBQVhBLEdBQWtCa0YsV0FBVyxDQUE3QmxGLEVBQTZCLENBQTdCQSxHQURPLElBRVB4SyxPQUFPLENBRkEsUUFHUCxLQUpKUSxhQUNXLENBREssQ0FBaEJBO0FBT0EsVUFBTW1QLFNBQVMsR0FBR0MsU0FBUyxDQUN6QnBGLFdBQVcsQ0FBWEEsRUFBVyxDQUFYQSxHQUFrQmtGLFdBQVcsQ0FBN0JsRixFQUE2QixDQUE3QkEsR0FEeUIsSUFFekIsS0FGRixNQUEyQixDQUEzQjtBQUlBLDZCQTlIa0IsQ0FnSWxCO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EsUUFBSSxDQUFFeEssT0FBRCxDQUFELE1BQXdCLHFCQUE1QixTQUE0QixDQUE1QixFQUE2RDtBQUMzRDtBQUNBNEgsWUFBTSxDQUFOQSwrQ0FGMkQsQ0FHM0Q7O0FBQ0E7QUFDQTtBQUNBLGtCQUFZLGdCQUFnQixLQUE1QixLQUFZLENBQVo7QUFDQUEsWUFBTSxDQUFOQTtBQUNBO0FBR0Y7O0FBQUEsUUFBSWlJLE1BQU0sR0FBRyx3Q0FBYixHQUFhLENBQWI7QUFDQSxRQUFJO0FBQUE7QUFBQTtBQUFBLFFBQUosT0FsSmtCLENBb0psQjtBQUNBO0FBQ0E7O0FBQ0E7O0FBQ0EsUUFBSTtBQUNGbEQsV0FBSyxHQUFHLE1BQU0sZ0JBQWRBLFdBQWMsRUFBZEE7QUFDQyxPQUFDO0FBQUVtRCxrQkFBVSxFQUFaO0FBQUEsVUFBMkIsTUFBTSxpQkFBbEMsc0JBQWtDLEdBQWxDO0FBQ0QsS0FIRixDQUdFLFlBQVk7QUFDWjtBQUNBO0FBQ0F0TCxZQUFNLENBQU5BO0FBQ0E7QUFHRixLQWxLa0IsQ0FrS2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFFBQUksQ0FBQyxjQUFELFNBQUMsQ0FBRCxJQUE2QixDQUFqQyxjQUFnRDtBQUM5Q25OLFlBQU0sR0FBTkE7QUFHRixLQTNLa0IsQ0EyS2xCO0FBQ0E7OztBQUNBLFFBQUl5SyxVQUFVLEdBQWQsR0E3S2tCLENBK0tsQjtBQUNBO0FBQ0E7O0FBQ0E1TyxZQUFRLEdBQUdBLFFBQVEsR0FDZixxREFBd0J3YyxXQUFXLENBRHBCLFFBQ29CLENBQW5DLENBRGUsR0FBbkJ4Yzs7QUFJQSxRQUFJa2MsaUJBQWlCLElBQUlsYyxRQUFRLEtBQWpDLFdBQWlEO0FBQy9DLFVBQUkrUCxLQUFKLEVBQTJELEVBQTNELE1Ba0JPO0FBQ0w0TSxjQUFNLENBQU5BLFdBQWtCRSxtQkFBbUIsV0FBckNGLEtBQXFDLENBQXJDQTs7QUFFQSxZQUFJQSxNQUFNLENBQU5BLGFBQUosVUFBa0M7QUFDaEMzYyxrQkFBUSxHQUFHMmMsTUFBTSxDQUFqQjNjO0FBQ0FtWCxhQUFHLEdBQUcsaUNBQU5BLE1BQU0sQ0FBTkE7QUFFSDtBQUNGO0FBRUQ7O0FBQUEsVUFBTTFFLEtBQUssR0FBRyxxREFBZCxRQUFjLENBQWQ7O0FBRUEsUUFBSSxDQUFDK0YsVUFBVSxDQUFmLEVBQWUsQ0FBZixFQUFxQjtBQUNuQixnQkFBMkM7QUFDekMsY0FBTSxVQUNILGtCQUFpQnJCLEdBQUksY0FBYTdKLEVBQW5DLDJDQUFDLEdBREgsb0ZBQU0sQ0FBTjtBQU1GZ0U7O0FBQUFBLFlBQU0sQ0FBTkE7QUFDQTtBQUdGMUM7O0FBQUFBLGNBQVUsR0FBRzhOLFNBQVMsQ0FBQ0YsV0FBVyxDQUFaLFVBQVksQ0FBWixFQUEwQixLQUFoRDVOLE1BQXNCLENBQXRCQTs7QUFFQSxRQUFJLCtCQUFKLEtBQUksQ0FBSixFQUEyQjtBQUN6QixZQUFNa08sUUFBUSxHQUFHLHdDQUFqQixVQUFpQixDQUFqQjtBQUNBLFlBQU1uRixVQUFVLEdBQUdtRixRQUFRLENBQTNCO0FBRUEsWUFBTUMsVUFBVSxHQUFHLCtCQUFuQixLQUFtQixDQUFuQjtBQUNBLFlBQU1DLFVBQVUsR0FBRywrQ0FBbkIsVUFBbUIsQ0FBbkI7QUFDQSxZQUFNQyxpQkFBaUIsR0FBR3hLLEtBQUssS0FBL0I7QUFDQSxZQUFNa0csY0FBYyxHQUFHc0UsaUJBQWlCLEdBQ3BDckUsYUFBYSxvQkFEdUIsS0FDdkIsQ0FEdUIsR0FBeEM7O0FBSUEsVUFBSSxlQUFnQnFFLGlCQUFpQixJQUFJLENBQUN0RSxjQUFjLENBQXhELFFBQWtFO0FBQ2hFLGNBQU11RSxhQUFhLEdBQUdwUCxNQUFNLENBQU5BLEtBQVlpUCxVQUFVLENBQXRCalAsZUFDbkIrSixLQUFELElBQVcsQ0FBQ1EsS0FBSyxDQURuQixLQUNtQixDQURHdkssQ0FBdEI7O0FBSUEsWUFBSW9QLGFBQWEsQ0FBYkEsU0FBSixHQUE4QjtBQUM1QixvQkFBMkM7QUFDekNoYSxtQkFBTyxDQUFQQSxLQUNHLEdBQ0MrWixpQkFBaUIsMEJBRVosaUNBSFAsOEJBQUMsR0FLRSxlQUFjQyxhQUFhLENBQWJBLFVBTm5CaGE7QUFZRjs7QUFBQSxnQkFBTSxVQUNKLENBQUMrWixpQkFBaUIsR0FDYiwwQkFBeUI5RixHQUFJLG9DQUFtQytGLGFBQWEsQ0FBYkEsVUFEbkQsb0NBSWIsOEJBQTZCdkYsVUFBVyw4Q0FBNkNsRixLQUoxRixTQUtHLCtDQUNDd0ssaUJBQWlCLGlDQUViLHNCQVRWLEVBQU0sQ0FBTjtBQWFIO0FBaENELGFBZ0NPLHVCQUF1QjtBQUM1QjNQLFVBQUUsR0FBRyxpQ0FDSFEsTUFBTSxDQUFOQSxxQkFBNEI7QUFDMUI5TixrQkFBUSxFQUFFMlksY0FBYyxDQURFO0FBRTFCTixlQUFLLEVBQUVTLGtCQUFrQixRQUFRSCxjQUFjLENBSG5EckwsTUFHNkI7QUFGQyxTQUE1QlEsQ0FERyxDQUFMUjtBQURLLGFBT0E7QUFDTDtBQUNBUSxjQUFNLENBQU5BO0FBRUg7QUFFRDRHOztBQUFBQSxVQUFNLENBQU5BOztBQUVBLFFBQUk7QUFBQTs7QUFDRixVQUFJeUksU0FBUyxHQUFHLE1BQU0sMERBQXRCLFVBQXNCLENBQXRCO0FBUUEsVUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBSixVQVRFLENBV0Y7O0FBQ0EsVUFBSSxDQUFDMUIsT0FBTyxJQUFSLFlBQUosT0FBbUM7QUFDakMsWUFBSzFOLEtBQUQsVUFBQ0EsSUFBNEJBLEtBQUQsVUFBQ0EsQ0FBakMsY0FBdUU7QUFDckUsZ0JBQU1xUCxXQUFXLEdBQUlyUCxLQUFELFVBQUNBLENBQXJCLGFBRHFFLENBR3JFO0FBQ0E7QUFDQTs7QUFDQSxjQUFJcVAsV0FBVyxDQUFYQSxXQUFKLEdBQUlBLENBQUosRUFBaUM7QUFDL0Isa0JBQU1DLFVBQVUsR0FBRyx3Q0FBbkIsV0FBbUIsQ0FBbkI7QUFDQUEsc0JBQVUsQ0FBVkEsV0FBc0JSLG1CQUFtQixDQUN2Q1EsVUFBVSxDQUQ2QixVQUF6Q0EsS0FBeUMsQ0FBekNBOztBQUtBLGdCQUFJNUQsS0FBSyxDQUFMQSxTQUFlNEQsVUFBVSxDQUE3QixRQUFJNUQsQ0FBSixFQUF5QztBQUN2QyxvQkFBTTtBQUFFdEMsbUJBQUcsRUFBTDtBQUFlN0osa0JBQUUsRUFBakI7QUFBQSxrQkFBNkIyTyxZQUFZLG9CQUEvQyxXQUErQyxDQUEvQztBQUtBLHFCQUFPLG1DQUFQLE9BQU8sQ0FBUDtBQUVIO0FBRUQzSzs7QUFBQUEsZ0JBQU0sQ0FBTkE7QUFDQSxpQkFBTyxZQUFZLE1BQU0sQ0FBekIsQ0FBTyxDQUFQO0FBR0Y7O0FBQUEseUJBQWlCLENBQUMsQ0FBQ3ZELEtBQUssQ0FBeEIsWUE1QmlDLENBOEJqQzs7QUFDQSxZQUFJQSxLQUFLLENBQUxBLGFBQUosb0JBQTJDO0FBQ3pDOztBQUVBLGNBQUk7QUFDRixrQkFBTSxvQkFBTixNQUFNLENBQU47QUFDQXVQLHlCQUFhLEdBQWJBO0FBQ0EsV0FIRixDQUdFLFVBQVU7QUFDVkEseUJBQWEsR0FBYkE7QUFHRkg7O0FBQUFBLG1CQUFTLEdBQUcsTUFBTSx1RUFNaEI7QUFBRWhQLG1CQUFPLEVBTlhnUDtBQU1FLFdBTmdCLENBQWxCQTtBQVNIO0FBRUR6STs7QUFBQUEsWUFBTSxDQUFOQTtBQUNBOztBQUVBLGdCQUEyQztBQUN6QyxjQUFNNkksT0FBWSxHQUFHLHlCQUFyQjtBQUNFak0sY0FBRCxLQUFDQSxDQUFELGFBQUNBLEdBQ0FpTSxPQUFPLENBQVBBLG9CQUE0QkEsT0FBTyxDQUFuQ0EsdUJBQ0EsQ0FBRUosU0FBUyxDQUFWLFNBQUNBLENBRkgsZUFBQzdMO0FBS0osT0ExRUUsQ0EwRUY7OztBQUNBLFlBQU1rTSxtQkFBbUIsR0FBRzFRLE9BQU8sQ0FBUEEsV0FBbUIsZUFBL0M7O0FBRUEsVUFDR0EsT0FBRCxHQUFDQSxJQUNEOU0sUUFBUSxLQURSLFNBQUM4TSxJQUVELDhCQUFJLENBQUosNkpBRkEsR0FBQ0EsSUFHRGlCLEtBSEEsUUFBQ2pCLElBR0RpQixLQUFLLENBSlAsV0FLRTtBQUNBO0FBQ0E7QUFDQUEsYUFBSyxDQUFMQTtBQUdGOztBQUFBLFlBQU0sdURBTUowUCxZQUFZLEtBQ1RELG1CQUFtQixJQUFJLENBQUMxUSxPQUFPLENBQS9CMFEsZ0JBQWdEO0FBQUVFLFNBQUMsRUFBSDtBQUFRQyxTQUFDLEVBUHhEO0FBTytDLE9BRHZDLENBTlIsUUFRR3pRLENBQUQsSUFBTztBQUNiLFlBQUlBLENBQUMsQ0FBTCxXQUFpQnNHLEtBQUssR0FBR0EsS0FBSyxJQUE5QixDQUFpQkEsQ0FBakIsS0FDSztBQVZQLE9BQU0sQ0FBTjs7QUFhQSxpQkFBVztBQUNUa0IsY0FBTSxDQUFOQTtBQUNBO0FBR0Y7O0FBQUEsVUFBSTNFLEtBQUosRUFBcUMsRUFLckMyRTs7QUFBQUEsWUFBTSxDQUFOQTtBQUVBO0FBQ0EsS0FsSEYsQ0FrSEUsWUFBWTtBQUNaLFVBQUk3USxHQUFHLENBQVAsV0FBbUI7QUFDakI7QUFFRjs7QUFBQTtBQUVIO0FBRUQrWjs7QUFBQUEsYUFBVyxrQkFJVDlRLE9BQTBCLEdBSmpCLElBS0g7QUFDTixjQUEyQztBQUN6QyxVQUFJLE9BQU93RSxNQUFNLENBQWIsWUFBSixhQUEyQztBQUN6Q3BPLGVBQU8sQ0FBUEE7QUFDQTtBQUdGOztBQUFBLFVBQUksT0FBT29PLE1BQU0sQ0FBTkEsUUFBUCxNQUFPQSxDQUFQLEtBQUosYUFBbUQ7QUFDakRwTyxlQUFPLENBQVBBLE1BQWUsMkJBQTBCaUIsTUFBekNqQjtBQUNBO0FBRUg7QUFFRDs7QUFBQSxRQUFJaUIsTUFBTSxLQUFOQSxlQUEwQix5QkFBOUIsSUFBK0M7QUFDN0Msc0JBQWdCMkksT0FBTyxDQUF2QjtBQUNBLFlBQU0sQ0FBTixnQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUlFK1EsV0FBRyxFQUpMO0FBS0VDLFdBQUcsRUFBRSxZQUFZM1osTUFBTSxLQUFOQSxjQUF5QixLQUF6QkEsT0FBcUMsWUFOMUQ7QUFDRSxPQURGLEVBUUU7QUFDQTtBQUNBO0FBVkY7QUFlSDtBQUVEOztBQUFBLGtGQU9xQztBQUNuQyxRQUFJTixHQUFHLENBQVAsV0FBbUI7QUFDakI7QUFDQTtBQUdGOztBQUFBLFFBQUksdUNBQUosZUFBd0M7QUFDdEM2USxZQUFNLENBQU5BLHFEQURzQyxDQUd0QztBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBcEQsWUFBTSxDQUFOQSxtQkFUc0MsQ0FXdEM7QUFDQTs7QUFDQSxZQUFNeU0sc0JBQU47QUFHRjs7QUFBQSxRQUFJO0FBQ0Y7QUFDQTtBQUNBOztBQUVBLFVBQ0Usb0NBQ0EsdUJBRkYsYUFHRTtBQUNBO0FBQUMsU0FBQztBQUFFckUsY0FBSSxFQUFOO0FBQUE7QUFBQSxZQUFtQyxNQUFNLG9CQUExQyxTQUEwQyxDQUExQztBQUtIOztBQUFBLFlBQU15RCxTQUFtQyxHQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLMUMzSixhQUFLLEVBTFA7QUFBNEMsT0FBNUM7O0FBUUEsVUFBSSxDQUFDMkosU0FBUyxDQUFkLE9BQXNCO0FBQ3BCLFlBQUk7QUFDRkEsbUJBQVMsQ0FBVEEsUUFBa0IsTUFBTSxnQ0FBZ0M7QUFBQTtBQUFBO0FBQXhEQTtBQUF3RCxXQUFoQyxDQUF4QkE7QUFLQSxTQU5GLENBTUUsZUFBZTtBQUNmamEsaUJBQU8sQ0FBUEE7QUFDQWlhLG1CQUFTLENBQVRBO0FBRUg7QUFFRDs7QUFBQTtBQUNBLEtBcENGLENBb0NFLHFCQUFxQjtBQUNyQixhQUFPLHlFQUFQLElBQU8sQ0FBUDtBQVNIO0FBRUQ7O0FBQUEseUVBTzZCO0FBQzNCLFFBQUk7QUFDRixZQUFNYSxpQkFBK0MsR0FBRyxnQkFBeEQsS0FBd0QsQ0FBeEQ7O0FBR0EsVUFBSTFCLFVBQVUsQ0FBVkEsZ0NBQTJDLGVBQS9DLE9BQXFFO0FBQ25FO0FBR0Y7O0FBQUEsWUFBTTJCLGVBQXFELEdBQ3pERCxpQkFBaUIsSUFBSSxhQUFyQkEsZ0NBREY7QUFJQSxZQUFNYixTQUFtQyxHQUFHYyxlQUFlLHFCQUV2RCxNQUFNLGdDQUFpQ3JYLEdBQUQsS0FBVTtBQUM5Q2dWLGlCQUFTLEVBQUVoVixHQUFHLENBRGdDO0FBRTlDa00sbUJBQVcsRUFBRWxNLEdBQUcsQ0FGOEI7QUFHOUM2VSxlQUFPLEVBQUU3VSxHQUFHLENBQUhBLElBSHFDO0FBSTlDK1UsZUFBTyxFQUFFL1UsR0FBRyxDQUFIQSxJQU5mO0FBRW9ELE9BQVYsQ0FBaEMsQ0FGVjtBQVNBLFlBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFOOztBQUVBLGdCQUEyQztBQUN6QyxjQUFNO0FBQUE7QUFBQSxZQUF5QnNYLG1CQUFPLENBQXRDLDBCQUFzQyxDQUF0Qzs7QUFDQSxZQUFJLENBQUNDLGtCQUFrQixDQUF2QixTQUF1QixDQUF2QixFQUFvQztBQUNsQyxnQkFBTSxVQUNILHlEQUF3RG5lLFFBRDNELEdBQU0sQ0FBTjtBQUlIO0FBRUQ7O0FBQUE7O0FBRUEsVUFBSXliLE9BQU8sSUFBWCxTQUF3QjtBQUN0QjJDLGdCQUFRLEdBQUcsNEJBQ1QsaUNBQXFCO0FBQUE7QUFEWjtBQUNZLFNBQXJCLENBRFMsdUJBSVQsS0FKRkEsTUFBVyxDQUFYQTtBQVFGOztBQUFBLFlBQU1yUSxLQUFLLEdBQUcsTUFBTSxjQUF3QyxNQUMxRDBOLE9BQU8sR0FDSCxvQkFERyxRQUNILENBREcsR0FFSEUsT0FBTyxHQUNQLG9CQURPLFFBQ1AsQ0FETyxHQUVQLGdDQUVFO0FBQ0E7QUFBQTtBQUFBO0FBR0V4QixjQUFNLEVBSFI7QUFJRTdMLGNBQU0sRUFBRSxLQUpWO0FBS0VnSSxlQUFPLEVBQUUsS0FMWDtBQU1FMkUscUJBQWEsRUFBRSxLQWR6QjtBQVFRLE9BSEYsQ0FMYyxDQUFwQjtBQW1CQWtDLGVBQVMsQ0FBVEE7QUFDQTtBQUNBO0FBQ0EsS0FqRUYsQ0FpRUUsWUFBWTtBQUNaLGFBQU8sb0RBQVAsVUFBTyxDQUFQO0FBRUg7QUFFRGtCOztBQUFBQSxLQUFHLGdEQU9jO0FBQ2Y7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQU8sa0JBQVAsV0FBTyxDQUFQO0FBR0Y7QUFBQTtBQUNGO0FBQ0E7QUFDQTs7O0FBQ0VDLGdCQUFjLEtBQTZCO0FBQ3pDO0FBR0ZDOztBQUFBQSxpQkFBZSxLQUFzQjtBQUNuQyxRQUFJLENBQUMsS0FBTCxRQUFrQjtBQUNsQixVQUFNLDBCQUEwQixrQkFBaEMsR0FBZ0MsQ0FBaEM7QUFDQSxVQUFNLDBCQUEwQmpSLEVBQUUsQ0FBRkEsTUFBaEMsR0FBZ0NBLENBQWhDLENBSG1DLENBS25DOztBQUNBLFFBQUlrUixPQUFPLElBQUlDLFlBQVksS0FBdkJELGdCQUE0Q0UsT0FBTyxLQUF2RCxTQUFxRTtBQUNuRTtBQUdGLEtBVm1DLENBVW5DOzs7QUFDQSxRQUFJRCxZQUFZLEtBQWhCLGNBQW1DO0FBQ2pDO0FBR0YsS0FmbUMsQ0FlbkM7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFdBQU9DLE9BQU8sS0FBZDtBQUdGQzs7QUFBQUEsY0FBWSxLQUFtQjtBQUM3QixVQUFNLFdBQVdyUixFQUFFLENBQUZBLE1BQWpCLEdBQWlCQSxDQUFqQixDQUQ2QixDQUU3QjtBQUNBOztBQUNBLFFBQUl1TCxJQUFJLEtBQUpBLE1BQWVBLElBQUksS0FBdkIsT0FBbUM7QUFDakN2SCxZQUFNLENBQU5BO0FBQ0E7QUFHRixLQVQ2QixDQVM3Qjs7O0FBQ0EsVUFBTXNOLElBQUksR0FBR3ZOLFFBQVEsQ0FBUkEsZUFBYixJQUFhQSxDQUFiOztBQUNBLGNBQVU7QUFDUnVOLFVBQUksQ0FBSkE7QUFDQTtBQUVGLEtBZjZCLENBZTdCO0FBQ0E7OztBQUNBLFVBQU1DLE1BQU0sR0FBR3hOLFFBQVEsQ0FBUkEsd0JBQWYsQ0FBZUEsQ0FBZjs7QUFDQSxnQkFBWTtBQUNWd04sWUFBTSxDQUFOQTtBQUVIO0FBRURDOztBQUFBQSxVQUFRLFNBQTBCO0FBQ2hDLFdBQU8sZ0JBQVA7QUFHRjtBQUFBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0Usc0JBRUUzRSxNQUFjLEdBRmhCLEtBR0VyTixPQUF3QixHQUgxQixJQUlpQjtBQUNmLFFBQUk2UCxNQUFNLEdBQUcsd0NBQWIsR0FBYSxDQUFiO0FBRUEsUUFBSTtBQUFBO0FBQUEsUUFBSjs7QUFFQSxRQUFJNU0sS0FBSixFQUFxQyxFQWlCckM7O0FBQUEsVUFBTTBKLEtBQUssR0FBRyxNQUFNLGdCQUFwQixXQUFvQixFQUFwQjtBQUNBLFFBQUk3SyxVQUFVLEdBQWQ7O0FBRUEsUUFBSW1CLEtBQUosRUFBK0QsRUFBL0QsTUFxQk87QUFDTDRNLFlBQU0sQ0FBTkEsV0FBa0JFLG1CQUFtQixDQUFDRixNQUFNLENBQVAsVUFBckNBLEtBQXFDLENBQXJDQTs7QUFFQSxVQUFJQSxNQUFNLENBQU5BLGFBQUosVUFBa0M7QUFDaEMzYyxnQkFBUSxHQUFHMmMsTUFBTSxDQUFqQjNjO0FBQ0FtWCxXQUFHLEdBQUcsaUNBQU5BLE1BQU0sQ0FBTkE7QUFFSDtBQUNEOztBQUFBLFVBQU0xRSxLQUFLLEdBQUcscURBQWQsUUFBYyxDQUFkLENBdERlLENBd0RmOztBQUNBLGNBQTJDO0FBQ3pDO0FBR0Y7O0FBQUEsVUFBTTVCLE9BQU8sQ0FBUEEsSUFBWSxDQUNoQixtQ0FBb0NrTyxLQUFELElBQW9CO0FBQ3JELGFBQU9BLEtBQUssR0FDUixvQkFDRSxtREFJRSxPQUFPalMsT0FBTyxDQUFkLHlCQUNJQSxPQUFPLENBRFgsU0FFSSxLQVJBLE1BRU4sQ0FERixDQURRLEdBQVo7QUFGYyxLQUNoQixDQURnQixFQWVoQixnQkFBZ0JBLE9BQU8sQ0FBUEEsd0JBQWhCLFlBZkYsS0FlRSxDQWZnQixDQUFaK0QsQ0FBTjtBQW1CRjs7QUFBQSw4QkFBNEQ7QUFDMUQsUUFBSWtCLFNBQVMsR0FBYjs7QUFDQSxVQUFNaU4sTUFBTSxHQUFJLFdBQVcsTUFBTTtBQUMvQmpOLGVBQVMsR0FBVEE7QUFERjs7QUFJQSxVQUFNa04sZUFBZSxHQUFHLE1BQU0seUJBQTlCLEtBQThCLENBQTlCOztBQUVBLG1CQUFlO0FBQ2IsWUFBTXpMLEtBQVUsR0FBRyxVQUNoQix3Q0FBdUNmLEtBRDFDLEdBQW1CLENBQW5CO0FBR0FlLFdBQUssQ0FBTEE7QUFDQTtBQUdGOztBQUFBLFFBQUl3TCxNQUFNLEtBQUssS0FBZixLQUF5QjtBQUN2QjtBQUdGOztBQUFBO0FBR0ZFOztBQUFBQSxVQUFRLEtBQXNDO0FBQzVDLFFBQUluTixTQUFTLEdBQWI7O0FBQ0EsVUFBTWlOLE1BQU0sR0FBRyxNQUFNO0FBQ25Cak4sZUFBUyxHQUFUQTtBQURGOztBQUdBO0FBQ0EsV0FBT3NCLEVBQUUsR0FBRkEsS0FBVzFQLElBQUQsSUFBVTtBQUN6QixVQUFJcWIsTUFBTSxLQUFLLEtBQWYsS0FBeUI7QUFDdkI7QUFHRjs7QUFBQSxxQkFBZTtBQUNiLGNBQU1uYixHQUFRLEdBQUcsVUFBakIsaUNBQWlCLENBQWpCO0FBQ0FBLFdBQUcsQ0FBSEE7QUFDQTtBQUdGOztBQUFBO0FBWEYsS0FBT3dQLENBQVA7QUFlRjhMOztBQUFBQSxnQkFBYyxXQUFvQztBQUNoRCxVQUFNO0FBQUVwUyxVQUFJLEVBQU47QUFBQSxRQUFxQixrQkFBa0J1RSxNQUFNLENBQU5BLFNBQTdDLElBQTJCLENBQTNCOztBQUNBLFFBQ0V2QixLQURGLEVBSUUsRUFHRjs7QUFBQSxXQUFPcVAsYUFBYSxXQUFXLEtBQXhCQSxLQUFhLENBQWJBLE1BQTBDemIsSUFBRCxJQUFVO0FBQ3hEO0FBQ0E7QUFGRixLQUFPeWIsQ0FBUDtBQU1GQzs7QUFBQUEsZ0JBQWMsV0FBb0M7QUFDaEQsVUFBTTtBQUFFdFMsVUFBSSxFQUFOO0FBQUEsUUFBd0Isa0JBQWtCdUUsTUFBTSxDQUFOQSxTQUFoRCxJQUE4QixDQUE5Qjs7QUFDQSxRQUFJLFNBQUosV0FBSSxDQUFKLEVBQTJCO0FBQ3pCLGFBQU8sU0FBUCxXQUFPLENBQVA7QUFFRjs7QUFBQSxXQUFRLHdCQUF3QjhOLGFBQWEsV0FBVyxLQUF4QkEsS0FBYSxDQUFiQSxNQUN2QnpiLElBQUQsSUFBVTtBQUNkLGFBQU8sU0FBUCxXQUFPLENBQVA7QUFDQTtBQUg0QnliLGFBS3RCdmIsR0FBRCxJQUFTO0FBQ2QsYUFBTyxTQUFQLFdBQU8sQ0FBUDtBQUNBO0FBUEosS0FBZ0N1YixDQUFoQztBQVdGako7O0FBQUFBLGlCQUFlLGlCQUdDO0FBQ2QsVUFBTTtBQUFFeUYsZUFBUyxFQUFYO0FBQUEsUUFBcUIsZ0JBQTNCLE9BQTJCLENBQTNCOztBQUNBLFVBQU0wRCxPQUFPLEdBQUcsY0FBaEIsR0FBZ0IsQ0FBaEI7O0FBQ0FDLE9BQUcsQ0FBSEE7QUFDQSxXQUFPLHFDQUFpRDtBQUFBO0FBQUE7QUFHdERsZ0IsWUFBTSxFQUhnRDtBQUF4RDtBQUF3RCxLQUFqRCxDQUFQO0FBUUZtZ0I7O0FBQUFBLG9CQUFrQixpQkFBZ0Q7QUFDaEUsUUFBSSxLQUFKLEtBQWM7QUFDWjlLLFlBQU0sQ0FBTkEsZ0NBRUVxSixzQkFGRnJKO0FBTUE7QUFDQTtBQUVIO0FBRUQrSzs7QUFBQUEsUUFBTSxvQkFHVztBQUNmLFdBQU8sZUFFTCx5QkFGSyxXQUFQLFdBQU8sQ0FBUDtBQS9vQzhDOztBQUFBOzs7QUFBN0IvSyxNLENBb0NaaUcsTUFwQ1lqRyxHQW9DVSxvQkFwQ1ZBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNWRyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXhCQSxDLENBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFNQSxNQUFNZ0wsZ0JBQWdCLEdBQXRCOztBQUVPLDJCQUFzQztBQUMzQyxNQUFJO0FBQUE7QUFBQTtBQUFBLE1BQUo7QUFDQSxNQUFJQyxRQUFRLEdBQUdDLE1BQU0sQ0FBTkEsWUFBZjtBQUNBLE1BQUk1ZixRQUFRLEdBQUc0ZixNQUFNLENBQU5BLFlBQWY7QUFDQSxNQUFJL0csSUFBSSxHQUFHK0csTUFBTSxDQUFOQSxRQUFYO0FBQ0EsTUFBSXZILEtBQUssR0FBR3VILE1BQU0sQ0FBTkEsU0FBWjtBQUNBLE1BQUlDLElBQW9CLEdBQXhCO0FBRUFDLE1BQUksR0FBR0EsSUFBSSxHQUFHNUgsa0JBQWtCLENBQWxCQSxJQUFrQixDQUFsQkEsd0JBQUgsTUFBWDRIOztBQUVBLE1BQUlGLE1BQU0sQ0FBVixNQUFpQjtBQUNmQyxRQUFJLEdBQUdDLElBQUksR0FBR0YsTUFBTSxDQUFwQkM7QUFERixTQUVPLGNBQWM7QUFDbkJBLFFBQUksR0FBR0MsSUFBSSxJQUFJLENBQUNDLFFBQVEsQ0FBUkEsUUFBRCxHQUFDQSxDQUFELEdBQTBCLElBQUdBLFFBQTdCLE1BQWZGLFFBQVcsQ0FBWEE7O0FBQ0EsUUFBSUQsTUFBTSxDQUFWLE1BQWlCO0FBQ2ZDLFVBQUksSUFBSSxNQUFNRCxNQUFNLENBQXBCQztBQUVIO0FBRUQ7O0FBQUEsTUFBSXhILEtBQUssSUFBSSxpQkFBYixVQUF3QztBQUN0Q0EsU0FBSyxHQUFHMkgsTUFBTSxDQUFDQyxXQUFXLENBQVhBLHVCQUFmNUgsS0FBZTRILENBQUQsQ0FBZDVIO0FBR0Y7O0FBQUEsTUFBSXhULE1BQU0sR0FBRythLE1BQU0sQ0FBTkEsVUFBa0J2SCxLQUFLLElBQUssSUFBR0EsS0FBL0J1SCxNQUFiO0FBRUEsTUFBSUQsUUFBUSxJQUFJQSxRQUFRLENBQVJBLE9BQWdCLENBQWhCQSxPQUFoQixLQUE2Q0EsUUFBUSxJQUFSQTs7QUFFN0MsTUFDRUMsTUFBTSxDQUFOQSxXQUNDLENBQUMsYUFBYUYsZ0JBQWdCLENBQWhCQSxLQUFkLFFBQWNBLENBQWQsS0FBa0RHLElBQUksS0FGekQsT0FHRTtBQUNBQSxRQUFJLEdBQUcsUUFBUUEsSUFBSSxJQUFuQkEsRUFBTyxDQUFQQTtBQUNBLFFBQUk3ZixRQUFRLElBQUlBLFFBQVEsQ0FBUkEsQ0FBUSxDQUFSQSxLQUFoQixLQUFxQ0EsUUFBUSxHQUFHLE1BQVhBO0FBTHZDLFNBTU8sSUFBSSxDQUFKLE1BQVc7QUFDaEI2ZixRQUFJLEdBQUpBO0FBR0Y7O0FBQUEsTUFBSWhILElBQUksSUFBSUEsSUFBSSxDQUFKQSxDQUFJLENBQUpBLEtBQVosS0FBNkJBLElBQUksR0FBRyxNQUFQQTtBQUM3QixNQUFJaFUsTUFBTSxJQUFJQSxNQUFNLENBQU5BLENBQU0sQ0FBTkEsS0FBZCxLQUFpQ0EsTUFBTSxHQUFHLE1BQVRBO0FBRWpDN0UsVUFBUSxHQUFHQSxRQUFRLENBQVJBLGlCQUFYQSxrQkFBV0EsQ0FBWEE7QUFDQTZFLFFBQU0sR0FBR0EsTUFBTSxDQUFOQSxhQUFUQSxLQUFTQSxDQUFUQTtBQUVBLFNBQVEsR0FBRThhLFFBQVMsR0FBRUUsSUFBSyxHQUFFN2YsUUFBUyxHQUFFNkUsTUFBTyxHQUFFZ1UsSUFBaEQ7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7eUNDeEVEOztBQUNBLE1BQU1xSCxVQUFVLEdBQWhCOztBQUVPLCtCQUFnRDtBQUNyRCxTQUFPQSxVQUFVLENBQVZBLEtBQVAsS0FBT0EsQ0FBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEQ7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLHFDQUFzRDtBQUMzRCxRQUFNQyxVQUFVLEdBQUcsUUFDakIsb0JBQTZDLFNBRDVCLENBQW5CO0FBR0EsUUFBTUMsWUFBWSxHQUFHOUgsSUFBSSxHQUFHLGNBQUgsVUFBRyxDQUFILEdBQXpCO0FBQ0EsUUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQXlELGFBQS9ELFlBQStELENBQS9EOztBQUlBLE1BQUlVLE1BQU0sS0FBS21ILFVBQVUsQ0FBekIsUUFBa0M7QUFDaEMsVUFBTSxVQUFXLG9EQUFtRGhKLEdBQXBFLEVBQU0sQ0FBTjtBQUVGOztBQUFBLFNBQU87QUFBQTtBQUVMa0IsU0FBSyxFQUFFLHlDQUZGLFlBRUUsQ0FGRjtBQUFBO0FBQUE7QUFLTHRMLFFBQUksRUFBRUEsSUFBSSxDQUFKQSxNQUFXb1QsVUFBVSxDQUFWQSxPQUxuQixNQUtRcFQ7QUFMRCxHQUFQO0FBT0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCTSw4Q0FFVztBQUNoQixRQUFNc0wsS0FBcUIsR0FBM0I7QUFDQWdJLGNBQVksQ0FBWkEsUUFBcUIsZ0JBQWdCO0FBQ25DLFFBQUksT0FBT2hJLEtBQUssQ0FBWixHQUFZLENBQVosS0FBSixhQUF1QztBQUNyQ0EsV0FBSyxDQUFMQSxHQUFLLENBQUxBO0FBREYsV0FFTyxJQUFJaEQsS0FBSyxDQUFMQSxRQUFjZ0QsS0FBSyxDQUF2QixHQUF1QixDQUFuQmhELENBQUosRUFBK0I7QUFDcEM7QUFBRWdELFdBQUssQ0FBTixHQUFNLENBQUxBLENBQUQsSUFBQ0EsQ0FBRCxLQUFDQTtBQURHLFdBRUE7QUFDTEEsV0FBSyxDQUFMQSxHQUFLLENBQUxBLEdBQWEsQ0FBQ0EsS0FBSyxDQUFOLEdBQU0sQ0FBTixFQUFiQSxLQUFhLENBQWJBO0FBRUg7QUFSRGdJO0FBU0E7QUFHRjs7QUFBQSx1Q0FBdUQ7QUFDckQsTUFDRSw2QkFDQyw2QkFBNkIsQ0FBQ0MsS0FBSyxDQURwQyxLQUNvQyxDQURwQyxJQUVBLGlCQUhGLFdBSUU7QUFDQSxXQUFPTixNQUFNLENBQWIsS0FBYSxDQUFiO0FBTEYsU0FNTztBQUNMO0FBRUg7QUFFTTs7QUFBQSwwQ0FFWTtBQUNqQixRQUFNN0gsTUFBTSxHQUFHLElBQWYsZUFBZSxFQUFmO0FBQ0FySyxRQUFNLENBQU5BLDBCQUFpQyxDQUFDLE1BQUQsS0FBQyxDQUFELEtBQWtCO0FBQ2pELFFBQUl1SCxLQUFLLENBQUxBLFFBQUosS0FBSUEsQ0FBSixFQUEwQjtBQUN4QmxFLFdBQUssQ0FBTEEsUUFBZW9QLElBQUQsSUFBVXBJLE1BQU0sQ0FBTkEsWUFBbUJxSSxzQkFBc0IsQ0FBakVyUCxJQUFpRSxDQUF6Q2dILENBQXhCaEg7QUFERixXQUVPO0FBQ0xnSCxZQUFNLENBQU5BLFNBQWdCcUksc0JBQXNCLENBQXRDckksS0FBc0MsQ0FBdENBO0FBRUg7QUFORHJLO0FBT0E7QUFHSzs7QUFBQSx3QkFFTCxHQUZLLGtCQUdZO0FBQ2pCMlMsa0JBQWdCLENBQWhCQSxRQUEwQkosWUFBRCxJQUFrQjtBQUN6Q2hMLFNBQUssQ0FBTEEsS0FBV2dMLFlBQVksQ0FBdkJoTCxJQUFXZ0wsRUFBWGhMLFVBQXlDNUgsR0FBRCxJQUFTUixNQUFNLENBQU5BLE9BQWpEb0ksR0FBaURwSSxDQUFqRG9JO0FBQ0FnTCxnQkFBWSxDQUFaQSxRQUFxQixnQkFBZ0JwVCxNQUFNLENBQU5BLFlBQXJDb1QsS0FBcUNwVCxDQUFyQ29UO0FBRkZJO0FBSUE7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEYywyQkFBMkIsQ0FBRSxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0VyQyxxQ0FBdUU7QUFDNUUsUUFBTTtBQUFBO0FBQUE7QUFBQSxNQUFOO0FBQ0EsU0FBUXpnQixRQUFELElBQXlDO0FBQzlDLFVBQU1nZCxVQUFVLEdBQUcwRCxFQUFFLENBQUZBLEtBQW5CLFFBQW1CQSxDQUFuQjs7QUFDQSxRQUFJLENBQUosWUFBaUI7QUFDZjtBQUdGOztBQUFBLFVBQU1DLE1BQU0sR0FBSTlJLEtBQUQsSUFBbUI7QUFDaEMsVUFBSTtBQUNGLGVBQU8rSSxrQkFBa0IsQ0FBekIsS0FBeUIsQ0FBekI7QUFDQSxPQUZGLENBRUUsVUFBVTtBQUNWLGNBQU0vYyxHQUE4QixHQUFHLFVBQXZDLHdCQUF1QyxDQUF2QztBQUdBQSxXQUFHLENBQUhBO0FBQ0E7QUFFSDtBQVZEOztBQVdBLFVBQU0rVCxNQUFrRCxHQUF4RDtBQUVBOUosVUFBTSxDQUFOQSxxQkFBNkIrUyxRQUFELElBQXNCO0FBQ2hELFlBQU1DLENBQUMsR0FBR0MsTUFBTSxDQUFoQixRQUFnQixDQUFoQjtBQUNBLFlBQU1DLENBQUMsR0FBR2hFLFVBQVUsQ0FBQzhELENBQUMsQ0FBdEIsR0FBb0IsQ0FBcEI7O0FBQ0EsVUFBSUUsQ0FBQyxLQUFMLFdBQXFCO0FBQ25CcEosY0FBTSxDQUFOQSxRQUFNLENBQU5BLEdBQW1CLENBQUNvSixDQUFDLENBQURBLFFBQUQsR0FBQ0EsQ0FBRCxHQUNmQSxDQUFDLENBQURBLGVBQWtCclEsS0FBRCxJQUFXZ1EsTUFBTSxDQURuQixLQUNtQixDQUFsQ0ssQ0FEZSxHQUVmRixDQUFDLENBQURBLFNBQ0EsQ0FBQ0gsTUFBTSxDQURQRyxDQUNPLENBQVAsQ0FEQUEsR0FFQUgsTUFBTSxDQUpWL0ksQ0FJVSxDQUpWQTtBQU1IO0FBVkQ5SjtBQVdBO0FBOUJGO0FBZ0NELEM7Ozs7Ozs7Ozs7Ozs7Ozt1Q0M5QkQ7QUFDQTs7QUFDQSwwQkFBa0M7QUFDaEMsU0FBT21ULEdBQUcsQ0FBSEEsZ0NBQVAsTUFBT0EsQ0FBUDtBQUdGOztBQUFBLCtCQUF1QztBQUNyQyxRQUFNakosUUFBUSxHQUFHSCxLQUFLLENBQUxBLG1CQUF5QkEsS0FBSyxDQUFMQSxTQUExQyxHQUEwQ0EsQ0FBMUM7O0FBQ0EsZ0JBQWM7QUFDWkEsU0FBSyxHQUFHQSxLQUFLLENBQUxBLFNBQWUsQ0FBdkJBLENBQVFBLENBQVJBO0FBRUY7O0FBQUEsUUFBTUUsTUFBTSxHQUFHRixLQUFLLENBQUxBLFdBQWYsS0FBZUEsQ0FBZjs7QUFDQSxjQUFZO0FBQ1ZBLFNBQUssR0FBR0EsS0FBSyxDQUFMQSxNQUFSQSxDQUFRQSxDQUFSQTtBQUVGOztBQUFBLFNBQU87QUFBRXBLLE9BQUcsRUFBTDtBQUFBO0FBQVA7QUFBTyxHQUFQO0FBR0s7O0FBQUEsd0NBT0w7QUFDQSxRQUFNeVQsUUFBUSxHQUFHLENBQUNDLGVBQWUsQ0FBZkEsc0JBQUQsb0JBQWpCLEdBQWlCLENBQWpCO0FBSUEsUUFBTUosTUFBc0MsR0FBNUM7QUFDQSxNQUFJSyxVQUFVLEdBQWQ7QUFDQSxRQUFNQyxrQkFBa0IsR0FBR0gsUUFBUSxDQUFSQSxJQUNuQmpKLE9BQUQsSUFBYTtBQUNoQixRQUFJQSxPQUFPLENBQVBBLG1CQUEyQkEsT0FBTyxDQUFQQSxTQUEvQixHQUErQkEsQ0FBL0IsRUFBc0Q7QUFDcEQsWUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQTRCcUosY0FBYyxDQUFDckosT0FBTyxDQUFQQSxTQUFpQixDQUFsRSxDQUFpREEsQ0FBRCxDQUFoRDtBQUNBOEksWUFBTSxDQUFOQSxHQUFNLENBQU5BLEdBQWM7QUFBRVEsV0FBRyxFQUFFSCxVQUFQO0FBQUE7QUFBZEw7QUFBYyxPQUFkQTtBQUNBLGFBQU9oSixNQUFNLEdBQUlDLFFBQVEsbUJBQVosV0FBYjtBQUhGLFdBSU87QUFDTCxhQUFRLElBQUd3SixXQUFXLFNBQXRCO0FBRUg7QUFUd0JOLFVBQTNCLEVBQTJCQSxDQUEzQixDQVBBLENBbUJBO0FBQ0E7O0FBQ0EsWUFBbUM7QUFDakMsUUFBSU8sZ0JBQWdCLEdBQXBCO0FBQ0EsUUFBSUMsa0JBQWtCLEdBQXRCLEVBRmlDLENBSWpDOztBQUNBLFVBQU1DLGVBQWUsR0FBRyxNQUFNO0FBQzVCLFVBQUlDLFFBQVEsR0FBWjs7QUFFQSxXQUFLLElBQUlDLENBQUMsR0FBVixHQUFnQkEsQ0FBQyxHQUFqQixvQkFBd0NBLENBQXhDLElBQTZDO0FBQzNDRCxnQkFBUSxJQUFJNUIsTUFBTSxDQUFOQSxhQUFaNEIsZ0JBQVk1QixDQUFaNEI7QUFDQUgsd0JBQWdCOztBQUVoQixZQUFJQSxnQkFBZ0IsR0FBcEIsS0FBNEI7QUFDMUJDLDRCQUFrQjtBQUNsQkQsMEJBQWdCLEdBQWhCQTtBQUVIO0FBQ0Q7O0FBQUE7QUFaRjs7QUFlQSxVQUFNSyxTQUFzQyxHQUE1QztBQUVBLFFBQUlDLHVCQUF1QixHQUFHYixRQUFRLENBQVJBLElBQ3RCakosT0FBRCxJQUFhO0FBQ2hCLFVBQUlBLE9BQU8sQ0FBUEEsbUJBQTJCQSxPQUFPLENBQVBBLFNBQS9CLEdBQStCQSxDQUEvQixFQUFzRDtBQUNwRCxjQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBNEJxSixjQUFjLENBQUNySixPQUFPLENBQVBBLFNBQWlCLENBQWxFLENBQWlEQSxDQUFELENBQWhELENBRG9ELENBRXBEO0FBQ0E7O0FBQ0EsWUFBSStKLFVBQVUsR0FBR3ZVLEdBQUcsQ0FBSEEsZUFBakIsRUFBaUJBLENBQWpCO0FBQ0EsWUFBSXdVLFVBQVUsR0FBZCxNQUxvRCxDQU9wRDtBQUNBOztBQUNBLFlBQUlELFVBQVUsQ0FBVkEsZ0JBQTJCQSxVQUFVLENBQVZBLFNBQS9CLElBQXVEO0FBQ3JEQyxvQkFBVSxHQUFWQTtBQUVGOztBQUFBLFlBQUksQ0FBQzNCLEtBQUssQ0FBQzRCLFFBQVEsQ0FBQ0YsVUFBVSxDQUFWQSxVQUFwQixDQUFvQkEsQ0FBRCxDQUFULENBQVYsRUFBK0M7QUFDN0NDLG9CQUFVLEdBQVZBO0FBR0Y7O0FBQUEsd0JBQWdCO0FBQ2RELG9CQUFVLEdBQUdMLGVBQWJLO0FBR0ZGOztBQUFBQSxpQkFBUyxDQUFUQSxVQUFTLENBQVRBO0FBQ0EsZUFBTy9KLE1BQU0sR0FDVEMsUUFBUSxHQUNMLFVBQVNnSyxVQURKLFlBRUwsT0FBTUEsVUFIQSxVQUlSLE9BQU1BLFVBSlg7QUFyQkYsYUEwQk87QUFDTCxlQUFRLElBQUdSLFdBQVcsU0FBdEI7QUFFSDtBQS9CMkJOLFlBQTlCLEVBQThCQSxDQUE5QjtBQWtDQSxXQUFPO0FBQ0xSLFFBQUUsRUFBRSxXQUFZLElBQUdXLGtCQURkLFNBQ0QsQ0FEQztBQUFBO0FBQUE7QUFJTGMsZ0JBQVUsRUFBRyxJQUFHSix1QkFKbEI7QUFBTyxLQUFQO0FBUUY7O0FBQUEsU0FBTztBQUNMckIsTUFBRSxFQUFFLFdBQVksSUFBR1csa0JBRGQsU0FDRCxDQURDO0FBQVA7QUFBTyxHQUFQO0FBSUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEhEO0FBeVJBO0FBQ0E7QUFDQTs7O0FBQ08sc0JBRUY7QUFDSCxNQUFJZSxJQUFJLEdBQVI7QUFDQTtBQUVBLFNBQVEsQ0FBQyxHQUFELFNBQW9CO0FBQzFCLFFBQUksQ0FBSixNQUFXO0FBQ1RBLFVBQUksR0FBSkE7QUFDQWpLLFlBQU0sR0FBRzlFLEVBQUUsQ0FBQyxHQUFaOEUsSUFBVyxDQUFYQTtBQUVGOztBQUFBO0FBTEY7QUFTSzs7QUFBQSw2QkFBNkI7QUFDbEMsUUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQStCN0csTUFBTSxDQUEzQztBQUNBLFNBQVEsR0FBRXFPLFFBQVMsS0FBSUksUUFBUyxHQUFFc0MsSUFBSSxHQUFHLE1BQUgsT0FBZ0IsRUFBdEQ7QUFHSzs7QUFBQSxrQkFBa0I7QUFDdkIsUUFBTTtBQUFBO0FBQUEsTUFBVy9RLE1BQU0sQ0FBdkI7QUFDQSxRQUFNMEgsTUFBTSxHQUFHc0osaUJBQWY7QUFDQSxTQUFPdlYsSUFBSSxDQUFKQSxVQUFlaU0sTUFBTSxDQUE1QixNQUFPak0sQ0FBUDtBQUdLOztBQUFBLG1DQUF3RDtBQUM3RCxTQUFPLDRDQUVINk8sU0FBUyxDQUFUQSxlQUF5QkEsU0FBUyxDQUFsQ0EsUUFGSjtBQUtLOztBQUFBLHdCQUF3QztBQUM3QyxTQUFPaFYsR0FBRyxDQUFIQSxZQUFnQkEsR0FBRyxDQUExQjtBQUdLOztBQUFBLDZDQUlrRDtBQUN2RCxZQUEyQztBQUFBOztBQUN6QywwQkFBSTJiLEdBQUcsQ0FBUCxzQkFBSUEsZUFBSixpQkFBb0M7QUFDbEMsWUFBTXhOLE9BQU8sR0FBSSxJQUFHeU4sY0FBYyxLQUFsQztBQUdBLFlBQU0sVUFBTixPQUFNLENBQU47QUFFSDtBQUNELEdBVHVELENBU3ZEOzs7QUFDQSxRQUFNNWIsR0FBRyxHQUFHMlksR0FBRyxDQUFIQSxPQUFZQSxHQUFHLENBQUhBLE9BQVdBLEdBQUcsQ0FBSEEsSUFBbkM7O0FBRUEsTUFBSSxDQUFDZ0QsR0FBRyxDQUFSLGlCQUEwQjtBQUN4QixRQUFJaEQsR0FBRyxDQUFIQSxPQUFXQSxHQUFHLENBQWxCLFdBQThCO0FBQzVCO0FBQ0EsYUFBTztBQUNMa0QsaUJBQVMsRUFBRSxNQUFNQyxtQkFBbUIsQ0FBQ25ELEdBQUcsQ0FBSixXQUFnQkEsR0FBRyxDQUR6RCxHQUNzQztBQUQvQixPQUFQO0FBSUY7O0FBQUE7QUFHRjs7QUFBQSxRQUFNeFIsS0FBSyxHQUFHLE1BQU13VSxHQUFHLENBQUhBLGdCQUFwQixHQUFvQkEsQ0FBcEI7O0FBRUEsTUFBSTNiLEdBQUcsSUFBSStiLFNBQVMsQ0FBcEIsR0FBb0IsQ0FBcEIsRUFBMkI7QUFDekI7QUFHRjs7QUFBQSxNQUFJLENBQUosT0FBWTtBQUNWLFVBQU01TixPQUFPLEdBQUksSUFBR3lOLGNBQWMsS0FFaEMsK0RBQThEelUsS0FGaEU7QUFHQSxVQUFNLFVBQU4sT0FBTSxDQUFOO0FBR0Y7O0FBQUEsWUFBMkM7QUFDekMsUUFBSUQsTUFBTSxDQUFOQSw0QkFBbUMsQ0FBQ3lSLEdBQUcsQ0FBM0MsS0FBaUQ7QUFDL0NyYyxhQUFPLENBQVBBLEtBQ0csR0FBRXNmLGNBQWMsS0FEbkJ0ZjtBQU1IO0FBRUQ7O0FBQUE7QUFHSzs7QUFBQSxNQUFNMGYsYUFBYSxHQUFHLHdHQUF0QixTQUFzQixDQUF0Qjs7O0FBZUEsbUNBQXNEO0FBQzNELFlBQTRDO0FBQzFDLFFBQUl6TCxHQUFHLEtBQUhBLFFBQWdCLGVBQXBCLFVBQTZDO0FBQzNDckosWUFBTSxDQUFOQSxrQkFBMEJMLEdBQUQsSUFBUztBQUNoQyxZQUFJbVYsYUFBYSxDQUFiQSxpQkFBK0IsQ0FBbkMsR0FBdUM7QUFDckMxZixpQkFBTyxDQUFQQSxLQUNHLHFEQUFvRHVLLEdBRHZEdks7QUFJSDtBQU5ENEs7QUFRSDtBQUVEOztBQUFBLFNBQU8sMEJBQVAsR0FBTyxDQUFQO0FBR0s7O0FBQUEsTUFBTStVLEVBQUUsR0FBRyx1QkFBWDs7QUFDQSxNQUFNekcsRUFBRSxHQUNieUcsRUFBRSxJQUNGLE9BQU94RyxXQUFXLENBQWxCLFNBREF3RyxjQUVBLE9BQU94RyxXQUFXLENBQWxCLFlBSEs7Ozs7Ozs7Ozs7Ozs7QUN4Wk0sd0JBQXdCLDBDQUEwQyxnREFBZ0QsZ0NBQWdDLGdDQUFnQyxtQ0FBbUMsNEJBQTRCLCtCQUErQixvQkFBb0IseUJBQXlCLFVBQVU7QUFDcFYsaUQ7Ozs7Ozs7Ozs7O0FDREEsaUJBQWlCLG1CQUFPLENBQUMsbUVBQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQW9DQTtBQUNBO0FBQ0E7QUFFZSxTQUFTeUcsSUFBVCxHQUFnQjtBQUM3QixRQUFNO0FBQUV2SCxTQUFGO0FBQVN3SCxZQUFUO0FBQW1CQztBQUFuQixNQUErQkMsd0RBQVUsQ0FBQ0MsNkNBQUQsQ0FBL0M7QUFDQSxRQUFNO0FBQUEsT0FBQzlqQixLQUFEO0FBQUEsT0FBUStqQjtBQUFSLE1BQW9CQyxzREFBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JGLHNEQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDRyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0Qkosc0RBQVEsQ0FBQyxFQUFELENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLGdCQUFEO0FBQUEsT0FBbUJDO0FBQW5CLE1BQTBDTixzREFBUSxDQUFDLEVBQUQsQ0FBeEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ08sV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NSLHNEQUFRLENBQUMsRUFBRCxDQUE5QztBQUNBLFFBQU07QUFBQSxPQUFDUyxnQkFBRDtBQUFBLE9BQW1CQztBQUFuQixNQUEwQ1Ysc0RBQVEsQ0FBQyxFQUFELENBQXhEO0FBQ0EsUUFBTTtBQUFBLE9BQUNXLGFBQUQ7QUFBQSxPQUFnQkM7QUFBaEIsTUFBb0NaLHNEQUFRLENBQUMsRUFBRCxDQUFsRDtBQUNBLFFBQU07QUFBQSxPQUFDYSxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQmQsc0RBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNlLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCaEIsc0RBQVEsQ0FBQyxFQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNpQixPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QmxCLHNEQUFRLENBQUMsSUFBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDbUIsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NwQixzREFBUSxDQUFDLElBQUQsQ0FBOUM7QUFDQSxRQUFNO0FBQUEsT0FBQ3FCLGVBQUQ7QUFBQSxPQUFrQkM7QUFBbEIsTUFBd0N0QixzREFBUSxDQUFDLEVBQUQsQ0FBdEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ3VCLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CeEIsc0RBQVEsQ0FBQyxLQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUN5QixXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQzFCLHNEQUFRLENBQUMsRUFBRCxDQUE5QztBQUNBLFFBQU07QUFBQSxPQUFDMkIsYUFBRDtBQUFBLE9BQWdCQztBQUFoQixNQUFvQzVCLHNEQUFRLENBQUMsRUFBRCxDQUFsRDtBQUNBLFFBQU07QUFBQSxPQUFDNkIsYUFBRDtBQUFBLE9BQWdCQztBQUFoQixNQUFvQzlCLHNEQUFRLENBQUMsRUFBRCxDQUFsRDtBQUNBLFFBQU07QUFBQSxPQUFDK0IsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJoQyxzREFBUSxDQUFDLEVBQUQsQ0FBNUM7QUFDQSxRQUFNO0FBQUEsT0FBQ2lDLEdBQUQ7QUFBQSxPQUFNQztBQUFOLE1BQWdCbEMsc0RBQVEsQ0FBQyxFQUFELENBQTlCO0FBQ0EsUUFBTTtBQUFBLE9BQUNtQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QnBDLHNEQUFRLENBQUMsRUFBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDcUMsY0FBRDtBQUFBLE9BQWlCQztBQUFqQixNQUFzQ3RDLHNEQUFRLENBQUMsRUFBRCxDQUFwRDtBQUNBLFFBQU07QUFBQSxPQUFDdUMsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0J4QyxzREFBUSxDQUFDLENBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ3lDLGNBQUQ7QUFBQSxPQUFpQkM7QUFBakIsTUFBc0MxQyxzREFBUSxDQUFDLEtBQUQsQ0FBcEQ7QUFDQSxRQUFNO0FBQUEsT0FBQzJDLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCNUMsc0RBQVEsQ0FBQyxFQUFELENBQTVDO0FBQ0EsUUFBTTtBQUFBLE9BQUM2QyxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQzlDLHNEQUFRLENBQUMsRUFBRCxDQUFoRDtBQUNBLFFBQU07QUFBQSxPQUFDK0MsZUFBRDtBQUFBLE9BQWtCQztBQUFsQixNQUF3Q2hELHNEQUFRLENBQUMsRUFBRCxDQUF0RDtBQUVBLFFBQU07QUFBQSxPQUFDaUQsRUFBRDtBQUFBLE9BQUtDO0FBQUwsTUFBY2xELHNEQUFRLENBQUMsRUFBRCxDQUE1QjtBQUNBLFFBQU1tRCxTQUFTLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF4QjtBQUVBLE1BQUlwa0IsR0FBRyxHQUFHLElBQUlDLElBQUosRUFBVjtBQUVBLFFBQU1va0IsUUFBUSxHQUFHO0FBQ2ZDLFlBQVEsRUFBRSxDQUNSO0FBQ0UvaUIsVUFBSSxFQUNGZ2dCLFdBQVcsQ0FBQ3pjLE1BQVosS0FBdUIsQ0FBdkIsR0FBMkIsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUEzQixHQUFvQyxDQUFDeWMsV0FBVyxDQUFDemMsTUFBYixFQUFxQm1jLElBQUksQ0FBQ25jLE1BQTFCLENBRnhDO0FBR0V4SCxxQkFBZSxFQUFFLENBQUMsU0FBRCxFQUFZLFNBQVo7QUFIbkIsS0FEUTtBQURLLEdBQWpCO0FBU0EsUUFBTWluQixhQUFhLEdBQUc7QUFDcEJELFlBQVEsRUFBRSxDQUNSO0FBQ0UvaUIsVUFBSSxFQUFFa2dCLGdCQUFnQixDQUFDM2MsTUFBakIsS0FBNEIsQ0FBNUIsR0FBZ0MsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFoQyxHQUF5QyxDQUFDLENBQUQsRUFBSSxDQUFKLENBRGpEO0FBRUV4SCxxQkFBZSxFQUFFLENBQUMsU0FBRCxFQUFZLFNBQVo7QUFGbkIsS0FEUTtBQURVLEdBQXRCO0FBU0EsUUFBTWtuQixhQUFhLEdBQUc7QUFDcEJGLFlBQVEsRUFBRSxDQUNSO0FBQ0UvaUIsVUFBSSxFQUNGOGYsZ0JBQWdCLENBQUN2YyxNQUFqQixLQUE0QixDQUE1QixHQUNJLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FESixHQUVJLENBQUN1YyxnQkFBZ0IsQ0FBQ3ZjLE1BQWxCLEVBQTBCcWMsU0FBUyxDQUFDcmMsTUFBcEMsQ0FKUjtBQUtFeEgscUJBQWUsRUFBRSxDQUFDLFNBQUQsRUFBWSxTQUFaO0FBTG5CLEtBRFE7QUFEVSxHQUF0QjtBQVlBLFFBQU1tbkIsWUFBWSxHQUFHO0FBQ25CQyxvQkFBZ0IsRUFBRSxFQURDO0FBRW5CQyxZQUFRLEVBQUU7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FGUztBQUduQkMsU0FBSyxFQUFFO0FBQUVDLFVBQUksRUFBRTtBQUFSLEtBSFk7QUFJbkJDLGNBQVUsRUFBRSxJQUpPO0FBS25CQyx1QkFBbUIsRUFBRTtBQUxGLEdBQXJCLENBL0Q2QixDQXVFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1wa0IsUUFBUSxHQUFHdUIsSUFBSSxDQUFDOGlCLEtBQUwsQ0FBV0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLENBQVgsQ0FBakI7O0FBQ0EsUUFBSXZrQixRQUFKLEVBQWM7QUFDWmlELHFFQUFjLENBQUNqRCxRQUFRLENBQUNjLFFBQVYsQ0FBZCxDQUNHUCxJQURILENBQ1NHLElBQUQsSUFBVTtBQUNkMmlCLGFBQUssQ0FBQzNpQixJQUFELENBQUw7QUFDRCxPQUhILEVBSUdDLEtBSkgsQ0FJVUMsR0FBRCxJQUFTO0FBQ2RYLGVBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsT0FOSDtBQU9ELEtBUkQsTUFRTztBQUNMNlEsd0RBQU0sQ0FBQ3NILElBQVAsQ0FBWSxHQUFaO0FBQ0Q7QUFDRixHQWJRLEVBYU4sQ0FBQytHLFFBQUQsQ0FiTSxDQUFUO0FBZUFzRSx5REFBUyxDQUFDLE1BQU07QUFDZCxVQUFNcGtCLFFBQVEsR0FBR3VCLElBQUksQ0FBQzhpQixLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixDQUFYLENBQWpCOztBQUNBLFFBQUl2a0IsUUFBSixFQUFjO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FvSixnRkFBeUIsQ0FBQ3BKLFFBQVEsQ0FBQ2MsUUFBVixDQUF6QixDQUNHUCxJQURILENBQ1NHLElBQUQsSUFBVTtBQUNkK2dCLDBCQUFrQixDQUFDL2dCLElBQUQsQ0FBbEI7O0FBQ0EsWUFBSUEsSUFBSSxDQUFDdUQsTUFBTCxHQUFjLENBQWxCLEVBQXFCO0FBQ25CMGQsa0JBQVEsQ0FBQyxJQUFELENBQVI7QUFDRCxTQUZELE1BRU87QUFDTEEsa0JBQVEsQ0FBQyxLQUFELENBQVI7QUFDRDtBQUNGLE9BUkgsRUFTR2hoQixLQVRILENBU1VDLEdBQUQsSUFBUztBQUNkWCxlQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELE9BWEg7QUFhQTRILGlFQUFVLEdBQ1BqSSxJQURILENBQ1NHLElBQUQsSUFBVTtBQUNkNmhCLGtCQUFVLENBQUM3aEIsSUFBRCxDQUFWO0FBQ0QsT0FISCxFQUlHQyxLQUpILENBSVVDLEdBQUQsSUFBUztBQUNkWCxlQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELE9BTkg7QUFPRDtBQUNGLEdBdkNRLEVBdUNOLENBQUNrZixRQUFELENBdkNNLENBQVQ7QUF5Q0FzRSx5REFBUyxDQUFDLE1BQU07QUFDZCxVQUFNcGtCLFFBQVEsR0FBR3VCLElBQUksQ0FBQzhpQixLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixDQUFYLENBQWpCOztBQUNBLFFBQUl2a0IsUUFBSixFQUFjO0FBQ1orZixhQUFPLENBQUN5RSxTQUFSLENBQWtCeGtCLFFBQWxCO0FBQ0FELDhEQUFPLENBQUNDLFFBQUQsQ0FBUCxDQUNHTyxJQURILENBQ1NHLElBQUQsSUFBVTtBQUNkcWYsZUFBTyxDQUFDMEUsT0FBUixDQUFnQi9qQixJQUFoQjtBQUNBeWdCLGtCQUFVLENBQUN6Z0IsSUFBRCxDQUFWO0FBQ0E2Z0Isc0JBQWMsQ0FBQyxLQUFELENBQWQ7QUFDRCxPQUxILEVBTUc1Z0IsS0FOSCxDQU1VQyxHQUFELElBQVM7QUFDZFgsZUFBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRCxPQVJIO0FBU0QsS0FYRCxNQVdPO0FBQ0w2USx3REFBTSxDQUFDc0gsSUFBUCxDQUFZLEdBQVo7QUFDRDtBQUNGLEdBaEJRLEVBZ0JOLENBQUMrRyxRQUFELENBaEJNLENBQVQ7QUFrQkFzRSx5REFBUyxDQUFDLE1BQU07QUFDZCxVQUFNcGtCLFFBQVEsR0FBR3VCLElBQUksQ0FBQzhpQixLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixDQUFYLENBQWpCO0FBQ0EsUUFBSWhsQixLQUFLLEdBQUdtSiw4Q0FBTSxHQUFHQyxNQUFULENBQWdCLEdBQWhCLENBQVo7QUFDQSxRQUFJbEosSUFBSSxHQUFHaUosOENBQU0sR0FBR0MsTUFBVCxDQUFnQixHQUFoQixDQUFYOztBQUNBLFFBQUkzSSxRQUFKLEVBQWM7QUFDWmEsOERBQU8sQ0FBQ2IsUUFBRCxDQUFQLENBQ0dPLElBREgsQ0FDU0csSUFBRCxJQUFVO0FBQ2QsWUFBSUEsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRZ2tCLFFBQVIsS0FBcUIsUUFBekIsRUFBbUM7QUFDakN6RCxpQkFBTyxDQUFDLFFBQUQsQ0FBUDtBQUNBZixrQkFBUSxDQUFDLFlBQUQsQ0FBUjtBQUNBblgsZ0ZBQXFCLENBQUMvSSxRQUFELEVBQVdULEtBQVgsRUFBa0JFLElBQWxCLENBQXJCLENBQ0djLElBREgsQ0FDU0csSUFBRCxJQUFVO0FBQ2QsZ0JBQUlBLElBQUosRUFBVTtBQUNScWhCLDhCQUFnQixDQUFDcmhCLElBQUQsQ0FBaEI7QUFDRDtBQUNGLFdBTEgsRUFNR0MsS0FOSCxDQU1VQyxHQUFELElBQVNYLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaLENBTmxCO0FBT0FrSSw4RUFBbUIsQ0FBQzlJLFFBQUQsRUFBV1QsS0FBWCxFQUFrQkUsSUFBbEIsQ0FBbkIsQ0FDR2MsSUFESCxDQUNTRyxJQUFELElBQVU7QUFDZCxnQkFBSUEsSUFBSixFQUFVO0FBQ1JtaEIsNEJBQWMsQ0FBQ25oQixJQUFELENBQWQ7QUFDRDtBQUNGLFdBTEgsRUFNR0MsS0FOSCxDQU1VQyxHQUFELElBQVNYLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaLENBTmxCO0FBT0FvSSw2RUFBa0IsQ0FBQ2hKLFFBQUQsRUFBV1QsS0FBWCxFQUFrQkUsSUFBbEIsQ0FBbEIsQ0FDR2MsSUFESCxDQUNTRyxJQUFELElBQVU7QUFDZCxnQkFBSUEsSUFBSixFQUFVO0FBQ1J5aEIsMkJBQWEsQ0FBQ3poQixJQUFELENBQWI7QUFDRDtBQUNGLFdBTEgsRUFNR0MsS0FOSCxDQU1VQyxHQUFELElBQVNYLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaLENBTmxCO0FBT0QsU0F4QkQsTUF3Qk8sSUFBSUYsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRZ2tCLFFBQVIsS0FBcUIsS0FBekIsRUFBZ0M7QUFDckN6RCxpQkFBTyxDQUFDLEtBQUQsQ0FBUDtBQUNBZixrQkFBUSxDQUFDLE1BQUQsQ0FBUjtBQUVBOWEsK0VBQW9CLENBQUNwRixRQUFELENBQXBCLENBQ0dPLElBREgsQ0FDU0csSUFBRCxJQUFVO0FBQ2RxaUIseUJBQWEsQ0FBQ3JpQixJQUFELENBQWI7QUFDQVQsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJRLElBQTNCO0FBQ0QsV0FKSCxFQUtHQyxLQUxILENBS1VDLEdBQUQsSUFBUztBQUNkWCxtQkFBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRCxXQVBIO0FBUUE2RixpRkFBc0IsQ0FBQ3pHLFFBQUQsQ0FBdEIsQ0FDR08sSUFESCxDQUNTRyxJQUFELElBQVU7QUFDZHVpQiwyQkFBZSxDQUFDdmlCLElBQUQsQ0FBZjtBQUNBVCxtQkFBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QlEsSUFBN0I7QUFDRCxXQUpILEVBS0dDLEtBTEgsQ0FLVUMsR0FBRCxJQUFTO0FBQ2RYLG1CQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELFdBUEg7QUFRQXNHLG9GQUF5QixDQUFDbEgsUUFBRCxDQUF6QixDQUNHTyxJQURILENBQ1NHLElBQUQsSUFBVTtBQUNkeWlCLDhCQUFrQixDQUFDemlCLElBQUQsQ0FBbEI7QUFDQVQsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaLEVBQWdDUSxJQUFoQztBQUNELFdBSkgsRUFLR0MsS0FMSCxDQUtVQyxHQUFELElBQVM7QUFDZFgsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsV0FQSDtBQVNBNEIsNEVBQWlCLENBQUN4QyxRQUFELEVBQVdULEtBQVgsRUFBa0JFLElBQWxCLENBQWpCLENBQ0djLElBREgsQ0FDU0csSUFBRCxJQUFVO0FBQ2QsZ0JBQUlBLElBQUosRUFBVTtBQUNSbWhCLDRCQUFjLENBQUNuaEIsSUFBRCxDQUFkLENBRFEsQ0FFUjtBQUNEO0FBQ0YsV0FOSCxFQU9HQyxLQVBILENBT1VDLEdBQUQsSUFBUztBQUNkWCxtQkFBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRCxXQVRIO0FBVUE2Qiw4RUFBbUIsQ0FBQ3pDLFFBQUQsRUFBV1QsS0FBWCxFQUFrQkUsSUFBbEIsQ0FBbkIsQ0FDR2MsSUFESCxDQUNTRyxJQUFELElBQVU7QUFDZCxnQkFBSUEsSUFBSixFQUFVO0FBQ1JxaEIsOEJBQWdCLENBQUNyaEIsSUFBRCxDQUFoQixDQURRLENBRVI7QUFDRDtBQUNGLFdBTkgsRUFPR0MsS0FQSCxDQU9VQyxHQUFELElBQVM7QUFDZFgsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsV0FUSDtBQVVBeUgsMkVBQWdCLENBQUNySSxRQUFELEVBQVdULEtBQVgsRUFBa0JFLElBQWxCLENBQWhCLENBQ0djLElBREgsQ0FDU0csSUFBRCxJQUFVO0FBQ2QsZ0JBQUlBLElBQUosRUFBVTtBQUNSdWhCLDhCQUFnQixDQUFDdmhCLElBQUQsQ0FBaEIsQ0FEUSxDQUVSO0FBQ0Q7QUFDRixXQU5ILEVBT0dDLEtBUEgsQ0FPVUMsR0FBRCxJQUFTO0FBQ2RYLG1CQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELFdBVEg7QUFVQTBILHdFQUFhLENBQUN0SSxRQUFELEVBQVdULEtBQVgsRUFBa0JFLElBQWxCLENBQWIsQ0FDR2MsSUFESCxDQUNTRyxJQUFELElBQVU7QUFDZCxnQkFBSUEsSUFBSixFQUFVO0FBQ1J5aEIsMkJBQWEsQ0FBQ3poQixJQUFELENBQWIsQ0FEUSxDQUVSO0FBQ0Q7QUFDRixXQU5ILEVBT0dDLEtBUEgsQ0FPVUMsR0FBRCxJQUFTO0FBQ2RYLG1CQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELFdBVEg7QUFVQTJILGlFQUFNLENBQUN2SSxRQUFELEVBQVdULEtBQVgsRUFBa0JFLElBQWxCLENBQU4sQ0FDR2MsSUFESCxDQUNTRyxJQUFELElBQVU7QUFDZCxnQkFBSUEsSUFBSixFQUFVO0FBQ1IyaEIsb0JBQU0sQ0FBQzNoQixJQUFELENBQU4sQ0FEUSxDQUVSO0FBQ0Q7QUFDRixXQU5ILEVBT0dDLEtBUEgsQ0FPVUMsR0FBRCxJQUFTO0FBQ2RYLG1CQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELFdBVEg7QUFVRDtBQUNGLE9BMUdILEVBMkdHRCxLQTNHSCxDQTJHVUMsR0FBRCxJQUFTO0FBQ2RYLGVBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsT0E3R0g7QUE4R0QsS0EvR0QsTUErR087QUFDTDZRLHdEQUFNLENBQUNzSCxJQUFQLENBQVksR0FBWjtBQUNEO0FBQ0YsR0F0SFEsRUFzSE4sQ0FBQytHLFFBQUQsQ0F0SE0sQ0FBVDtBQXdIQXNFLHlEQUFTLENBQUMsTUFBTTtBQUNkL0MsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNBLFVBQU1yaEIsUUFBUSxHQUFHdUIsSUFBSSxDQUFDOGlCLEtBQUwsQ0FBV0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLENBQVgsQ0FBakI7O0FBQ0EsUUFBSXZrQixRQUFKLEVBQWM7QUFDWixVQUFJN0QsS0FBSyxLQUFLLE1BQWQsRUFBc0I7QUFDcEJ1SCxvRUFBVyxDQUFDMUQsUUFBRCxDQUFYLENBQ0dPLElBREgsQ0FDU0csSUFBRCxJQUFVO0FBQ2QyZixpQkFBTyxDQUFDM2YsSUFBRCxDQUFQO0FBQ0EyZ0Isb0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDRCxTQUpILEVBS0cxZ0IsS0FMSCxDQUtVQyxHQUFELElBQVM7QUFDZFgsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsU0FQSDtBQVFBdUQsdUVBQWMsQ0FBQ25FLFFBQUQsQ0FBZCxDQUNHTyxJQURILENBQ1NHLElBQUQsSUFBVTtBQUNkaWdCLHdCQUFjLENBQUNqZ0IsSUFBRCxDQUFkO0FBQ0EyZ0Isb0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDRCxTQUpILEVBS0cxZ0IsS0FMSCxDQUtVQyxHQUFELElBQVM7QUFDZFgsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsU0FQSDtBQVFELE9BakJELE1BaUJPLElBQUl6RSxLQUFLLEtBQUssWUFBZCxFQUE0QjtBQUNqQ29MLHdFQUFlLENBQUN2SCxRQUFELENBQWYsQ0FDR08sSUFESCxDQUNTRyxJQUFELElBQVU7QUFDZDtBQUNBNmYsc0JBQVksQ0FDVjdmLElBQUksQ0FBQ2tELE1BQUwsQ0FBYUMsR0FBRCxJQUFTO0FBQ25CLG1CQUFPQSxHQUFHLENBQUM4Z0IsV0FBSixLQUFvQixLQUEzQjtBQUNELFdBRkQsQ0FEVSxDQUFaO0FBS0FsRSw2QkFBbUIsQ0FDakIvZixJQUFJLENBQUNrRCxNQUFMLENBQWFDLEdBQUQsSUFBUztBQUNuQixtQkFBT0EsR0FBRyxDQUFDOGdCLFdBQUosS0FBb0IsSUFBM0I7QUFDRCxXQUZELENBRGlCLENBQW5CO0FBS0F0RCxvQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELFNBZEgsRUFlRzFnQixLQWZILENBZVVDLEdBQUQsSUFBUztBQUNkWCxpQkFBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRCxTQWpCSDtBQWtCRCxPQW5CTSxNQW1CQSxJQUFJekUsS0FBSyxLQUFLLGdCQUFkLEVBQWdDO0FBQ3JDZ0osb0VBQVcsQ0FBQ25GLFFBQUQsQ0FBWCxDQUNHTyxJQURILENBQ1NHLElBQUQsSUFBVTtBQUNkLGNBQUlra0IsWUFBWSxHQUFHbGtCLElBQUksQ0FBQ2lOLEdBQUwsQ0FBVTlKLEdBQUQsSUFBUztBQUNuQyxtREFBWUEsR0FBWjtBQUFpQmdoQixzQkFBUSxFQUFFO0FBQTNCO0FBQ0QsV0FGa0IsQ0FBbkI7QUFHQXBDLDJCQUFpQixDQUFDbUMsWUFBRCxDQUFqQixDQUpjLENBS2Q7O0FBQ0F2RCxvQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELFNBUkgsRUFTRzFnQixLQVRILENBU1VDLEdBQUQsSUFBUztBQUNkWCxpQkFBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRCxTQVhIO0FBWUQsT0FiTSxNQWFBLElBQUl6RSxLQUFLLEtBQUssUUFBZCxFQUF3QjtBQUM3Qm9LLGdGQUF1QixDQUFDdkcsUUFBRCxDQUF2QixDQUNHTyxJQURILENBQ1NHLElBQUQsSUFBVTtBQUNkO0FBQ0FxZ0IsMEJBQWdCLENBQUNyZ0IsSUFBRCxDQUFoQjtBQUNBMmdCLG9CQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsU0FMSCxFQU1HMWdCLEtBTkgsQ0FNVUMsR0FBRCxJQUFTO0FBQ2RYLGlCQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELFNBUkg7QUFTRCxPQVZNLE1BVUEsSUFBSXpFLEtBQUssS0FBSyxXQUFkLEVBQTJCO0FBQ2hDNkssbUZBQTBCLENBQUNoSCxRQUFELENBQTFCLENBQ0dPLElBREgsQ0FDU0csSUFBRCxJQUFVO0FBQ2Q7QUFDQW1nQiw2QkFBbUIsQ0FBQ25nQixJQUFELENBQW5CO0FBQ0EyZ0Isb0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDRCxTQUxILEVBTUcxZ0IsS0FOSCxDQU1VQyxHQUFELElBQVM7QUFDZFgsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsU0FSSDtBQVNEO0FBQ0YsS0F2RUQsTUF1RU87QUFDTDZRLHdEQUFNLENBQUNzSCxJQUFQLENBQVksR0FBWjtBQUNEO0FBQ0YsR0E3RVEsRUE2RU4sQ0FBQzVjLEtBQUQsQ0E3RU0sQ0FBVDs7QUErRUEsUUFBTTJvQixhQUFhLEdBQUcsTUFBTTtBQUMxQixRQUFJakksSUFBSSxHQUFHcUUsT0FBTyxDQUFDdGQsTUFBUixDQUFnQkMsR0FBRCxJQUFTO0FBQ2pDLFVBQUltZCxJQUFJLEtBQUssS0FBYixFQUFvQjtBQUNsQixlQUNFbmQsR0FBRyxDQUFDa2hCLFVBQUosS0FBbUIsTUFBbkIsSUFDQWxoQixHQUFHLENBQUNraEIsVUFBSixLQUFtQixRQURuQixJQUVBbGhCLEdBQUcsQ0FBQ2toQixVQUFKLEtBQW1CLFdBSHJCO0FBS0QsT0FORCxNQU1PLElBQUkvRCxJQUFJLEtBQUssUUFBYixFQUF1QjtBQUM1QixlQUNFbmQsR0FBRyxDQUFDa2hCLFVBQUosS0FBbUIsWUFBbkIsSUFBbUNsaEIsR0FBRyxDQUFDa2hCLFVBQUosS0FBbUIsZ0JBRHhEO0FBR0Q7QUFDRixLQVpVLENBQVg7O0FBY0EsVUFBTUMsTUFBTSxHQUFHLE1BQU07QUFDbkIsYUFBT25JLElBQUksQ0FBQ2xQLEdBQUwsQ0FBUyxDQUFDOUosR0FBRCxFQUFNb2hCLEtBQU4sS0FBZ0I7QUFDOUIsNEJBQ0U7QUFDRSxtQkFBUyxFQUNQOW9CLEtBQUssS0FBSzBILEdBQUcsQ0FBQ2toQixVQUFkLEdBQTJCbm9CLG9FQUFNLENBQUNzb0IsVUFBbEMsR0FBK0N0b0Isb0VBQU0sQ0FBQ3VvQixJQUYxRDtBQUlFLGlCQUFPLEVBQUUsTUFBTTtBQUNiakYsb0JBQVEsQ0FBQ3JjLEdBQUcsQ0FBQ2toQixVQUFMLENBQVI7QUFDRCxXQU5IO0FBQUEsb0JBU0dsaEIsR0FBRyxDQUFDa2hCLFVBQUosS0FBbUIsTUFBbkIsR0FDRyxNQURILEdBRUdsaEIsR0FBRyxDQUFDa2hCLFVBQUosS0FBbUIsUUFBbkIsR0FDQSxRQURBLEdBRUFsaEIsR0FBRyxDQUFDa2hCLFVBQUosS0FBbUIsV0FBbkIsR0FDQSxXQURBLEdBRUFsaEIsR0FBRyxDQUFDa2hCLFVBQUosS0FBbUIsWUFBbkIsR0FDQSxZQURBLEdBRUFsaEIsR0FBRyxDQUFDa2hCLFVBQUosS0FBbUIsZ0JBQW5CLEdBQ0EsVUFEQSxHQUVBO0FBbkJOLFdBT09FLEtBUFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERjtBQXVCRCxPQXhCTSxDQUFQO0FBeUJELEtBMUJEOztBQTJCQSxRQUFJcEksSUFBSixFQUFVO0FBQ1IsMEJBQ0U7QUFDRSxpQkFBUyxFQUNQQSxJQUFJLENBQUM1WSxNQUFMLEtBQWdCLENBQWhCLEdBQ0lySCxvRUFBTSxDQUFDd29CLFVBRFgsR0FFSXZJLElBQUksQ0FBQzVZLE1BQUwsS0FBZ0IsQ0FBaEIsR0FDQXJILG9FQUFNLENBQUN5b0IsVUFEUCxHQUVBLEVBTlI7QUFBQSxrQkFTR0wsTUFBTTtBQVRUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQWFEO0FBQ0YsR0F6REQ7O0FBMkRBLFFBQU1NLFVBQVUsR0FBRyxDQUFDQyxJQUFELEVBQU83a0IsSUFBUCxLQUFnQjtBQUNqQyxRQUFJQSxJQUFJLENBQUN1RCxNQUFMLEtBQWdCLENBQXBCLEVBQXVCO0FBQ3JCLDBCQUNFO0FBQ0UsYUFBSyxFQUFFO0FBQ0x1aEIsa0JBQVEsRUFBRSxNQURMO0FBRUxwb0IsZUFBSyxFQUFFLG9CQUZGO0FBR0xxb0IsbUJBQVMsRUFBRSxNQUhOO0FBSUwvb0IsZ0JBQU0sRUFBRTtBQUpILFNBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQVlELEtBYkQsTUFhTztBQUNMLGFBQU9nRSxJQUFJLENBQUNpTixHQUFMLENBQVMsQ0FBQzlKLEdBQUQsRUFBTW9oQixLQUFOLEtBQWdCO0FBQzlCLDRCQUNFLHFFQUFDLGdEQUFEO0FBQ0UsY0FBSSxFQUFFOW9CLEtBQUssS0FBSyxNQUFWLEdBQW9CLGVBQWN1RSxJQUFJLENBQUNnbEIsWUFBYSxFQUFwRCxHQUF3RCxHQURoRTtBQUFBLGlDQUdFO0FBQUEsbUNBQ0U7QUFDRSxtQkFBSyxFQUFFO0FBQ0xGLHdCQUFRLEVBQUUsTUFETDtBQUVMRywwQkFBVSxFQUFFLEtBRlA7QUFHTHZvQixxQkFBSyxFQUFFLFNBSEY7QUFJTHFvQix5QkFBUyxFQUFFLE1BSk47QUFLTC9vQixzQkFBTSxFQUFFO0FBTEgsZUFEVDtBQUFBLHFDQVVFO0FBQ0UscUJBQUssRUFBRTtBQUFFa3BCLHlCQUFPLEVBQUUsTUFBWDtBQUFtQkMscUNBQW1CLEVBQUU7QUFBeEMsaUJBRFQ7QUFBQSx3Q0FHRTtBQUNFLHVCQUFLLEVBQUU7QUFDTHRwQix5QkFBSyxFQUFFLE1BREY7QUFFTEMsMEJBQU0sRUFBRSxNQUZIO0FBR0xDLG1DQUFlLEVBQUU4b0IsSUFBSSxLQUFLLE1BQVQsR0FBa0IsU0FBbEIsR0FBOEIsU0FIMUM7QUFJTDVvQixnQ0FBWSxFQUFFLE1BSlQ7QUFLTG1wQiwyQkFBTyxFQUFFO0FBTEosbUJBRFQ7QUFBQSx5Q0FTRTtBQUNFLHlCQUFLLEVBQUU7QUFDTHZwQiwyQkFBSyxFQUFFLE1BREY7QUFFTEMsNEJBQU0sRUFBRSxNQUZIO0FBR0xDLHFDQUFlLEVBQ2I4b0IsSUFBSSxLQUFLLE1BQVQsR0FBa0IsU0FBbEIsR0FBOEIsU0FKM0I7QUFLTDVvQixrQ0FBWSxFQUFFO0FBTFQ7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFIRixlQXNCRTtBQUFBLDBDQUNFO0FBQUEsOEJBQU1rSCxHQUFHLENBQUNraUI7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLGVBRUU7QUFBSyx5QkFBSyxFQUFFO0FBQUVQLDhCQUFRLEVBQUUsTUFBWjtBQUFvQkcsZ0NBQVUsRUFBRTtBQUFoQyxxQkFBWjtBQUFBLDhCQUNHOWhCLEdBQUcsQ0FBQ21pQjtBQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWRixlQVFPZixLQVJQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERjtBQWdERCxPQWpETSxDQUFQO0FBa0REO0FBQ0YsR0FsRUQ7O0FBb0VBLFFBQU1nQixtQkFBbUIsR0FBSXZsQixJQUFELElBQVU7QUFDcEMsUUFBSUEsSUFBSSxDQUFDdUQsTUFBTCxLQUFnQixDQUFwQixFQUF1QjtBQUNyQiwwQkFDRTtBQUNFLGFBQUssRUFBRTtBQUNMdWhCLGtCQUFRLEVBQUUsTUFETDtBQUVMcG9CLGVBQUssRUFBRSxvQkFGRjtBQUdMcW9CLG1CQUFTLEVBQUUsTUFITjtBQUlML29CLGdCQUFNLEVBQUU7QUFKSCxTQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFZRCxLQWJELE1BYU87QUFDTCxhQUFPZ0UsSUFBSSxDQUFDaU4sR0FBTCxDQUFTLENBQUM5SixHQUFELEVBQU1vaEIsS0FBTixLQUFnQjtBQUM5Qiw0QkFDRSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBRyxjQUFhcGhCLEdBQUcsQ0FBQzZoQixZQUFhLEVBQTNDO0FBQUEsaUNBQ0U7QUFBQSxtQ0FDRTtBQUNFLG1CQUFLLEVBQUU7QUFDTEYsd0JBQVEsRUFBRSxNQURMO0FBRUxHLDBCQUFVLEVBQUUsS0FGUDtBQUdMdm9CLHFCQUFLLEVBQUUsU0FIRjtBQUlMcW9CLHlCQUFTLEVBQUUsTUFKTjtBQUtML29CLHNCQUFNLEVBQUU7QUFMSCxlQURUO0FBQUEscUNBVUU7QUFDRSxxQkFBSyxFQUFFO0FBQUVrcEIseUJBQU8sRUFBRSxNQUFYO0FBQW1CQyxxQ0FBbUIsRUFBRTtBQUF4QyxpQkFEVDtBQUFBLHdDQUdFO0FBQ0UsdUJBQUssRUFBRTtBQUNMdHBCLHlCQUFLLEVBQUUsTUFERjtBQUVMQywwQkFBTSxFQUFFLE1BRkg7QUFHTEMsbUNBQWUsRUFBRSxTQUhaO0FBSUxFLGdDQUFZLEVBQUUsTUFKVDtBQUtMbXBCLDJCQUFPLEVBQUU7QUFMSixtQkFEVDtBQUFBLHlDQVNFO0FBQ0UseUJBQUssRUFBRTtBQUNMdnBCLDJCQUFLLEVBQUUsTUFERjtBQUVMQyw0QkFBTSxFQUFFLE1BRkg7QUFHTEMscUNBQWUsRUFBRSxTQUhaO0FBSUxFLGtDQUFZLEVBQUU7QUFKVDtBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUhGLGVBcUJFO0FBQUEsMENBQ0U7QUFBQSw4QkFBTWtILEdBQUcsQ0FBQ3FpQjtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsZUFFRTtBQUFLLHlCQUFLLEVBQUU7QUFBRVYsOEJBQVEsRUFBRSxNQUFaO0FBQW9CRyxnQ0FBVSxFQUFFO0FBQWhDLHFCQUFaO0FBQUEsMkNBQ1c5aEIsR0FBRyxDQUFDc2lCLEtBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZGLGVBS0U7QUFBSyx5QkFBSyxFQUFFO0FBQUVYLDhCQUFRLEVBQUUsTUFBWjtBQUFvQkcsZ0NBQVUsRUFBRTtBQUFoQyxxQkFBWjtBQUFBLGtEQUNrQjloQixHQUFHLENBQUN1aUIsV0FEdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkYsZUFRT25CLEtBUlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGO0FBZ0RELE9BakRNLENBQVA7QUFrREQ7QUFDRixHQWxFRDs7QUFvRUEsUUFBTW9CLFVBQVUsR0FBRyxNQUFNO0FBQ3ZCLFFBQUlqRixPQUFKLEVBQWE7QUFDWCwwQkFBTyxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVA7QUFDRCxLQUZELE1BRU87QUFDTCwwQkFDRTtBQUFBLGdDQUNFLHFFQUFDLHlEQUFEO0FBQU0sZUFBSyxFQUFFO0FBQUV6a0Isd0JBQVksRUFBRSxLQUFoQjtBQUF1QjJwQixxQkFBUyxFQUFFO0FBQWxDLFdBQWI7QUFBeUQsZ0JBQU0sTUFBL0Q7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUUxcEIsb0VBQU0sQ0FBQzJwQixRQUF2QjtBQUFBLG9DQUNFO0FBQUEsc0NBQ0U7QUFBTSx5QkFBUyxFQUFFM3BCLG9FQUFNLENBQUN5QyxJQUF4QjtBQUFBLDBCQUNHcUosOENBQU0sR0FBR0MsTUFBVCxDQUFnQixnQkFBaEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBSUU7QUFBSyxxQkFBSyxFQUFFO0FBQUV2TCx1QkFBSyxFQUFFLFNBQVQ7QUFBb0JrcEIsMkJBQVMsRUFBRTtBQUEvQixpQkFBWjtBQUFBLHdDQUNFO0FBQU0sdUJBQUssRUFBRTtBQUFFZCw0QkFBUSxFQUFFLE1BQVo7QUFBb0JHLDhCQUFVLEVBQUU7QUFBaEMsbUJBQWI7QUFBQSw0QkFDR2pGLFdBQVcsQ0FBQ3pjO0FBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixlQUlFO0FBQU0sdUJBQUssRUFBRTtBQUFFdWhCLDRCQUFRLEVBQUU7QUFBWixtQkFBYjtBQUFBLGtDQUNJcEYsSUFBSSxDQUFDbmMsTUFBTCxHQUFjeWMsV0FBVyxDQUFDemMsTUFEOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFKRixlQVlFLHFFQUFDLGdEQUFEO0FBQU0sb0JBQUksRUFBQyxvQkFBWDtBQUFBLHVDQUNFO0FBQUEseUNBQ0U7QUFDRSx5QkFBSyxFQUFFO0FBQ0xxaUIsK0JBQVMsRUFBRSxLQUROO0FBRUw3cEIscUNBQWUsRUFBRSxTQUZaO0FBR0xxcEIsNkJBQU8sRUFBRSxXQUhKO0FBSUxOLDhCQUFRLEVBQUUsTUFKTDtBQUtMRyxnQ0FBVSxFQUFFLEtBTFA7QUFNTHZvQiwyQkFBSyxFQUFFLE1BTkY7QUFPTG9wQiw0QkFBTSxFQUFFLE1BUEg7QUFRTDdwQixrQ0FBWSxFQUFFO0FBUlQscUJBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFnQ0U7QUFBQSxzQ0FDRTtBQUFLLHlCQUFTLEVBQUVDLG9FQUFNLENBQUM2cEIsY0FBdkI7QUFBQSwwQkFDRy9GLFdBQVcsQ0FBQ3pjLE1BQVosS0FBdUIsQ0FBdkIsR0FDRyxJQURILEdBRUksR0FBRXFKLElBQUksQ0FBQ29aLEtBQUwsQ0FDQWhHLFdBQVcsQ0FBQ3pjLE1BQVosSUFDRW1jLElBQUksQ0FBQ25jLE1BQUwsR0FBY3ljLFdBQVcsQ0FBQ3pjLE1BRDVCLENBQUQsR0FFRSxHQUhELENBSUQ7QUFQUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBVUUscUVBQUMseURBQUQ7QUFDRSxvQkFBSSxFQUFFdWYsUUFEUjtBQUVFLHVCQUFPLEVBQUVJLFlBRlg7QUFHRSxxQkFBSyxFQUFFLEdBSFQ7QUFJRSxzQkFBTSxFQUFFO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBaENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFxREUscUVBQUMseURBQUQ7QUFBTSxlQUFLLEVBQUU7QUFBRTBDLHFCQUFTLEVBQUUsTUFBYjtBQUFxQjNwQix3QkFBWSxFQUFFO0FBQW5DLFdBQWI7QUFBMEQsZ0JBQU0sTUFBaEU7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUVDLG9FQUFNLENBQUMrcEIsY0FBdkI7QUFBQSxvQ0FDRTtBQUNFLG1CQUFLLEVBQUU7QUFDTG5CLHdCQUFRLEVBQUUsTUFETDtBQUVMRywwQkFBVSxFQUFFLEtBRlA7QUFHTHZvQixxQkFBSyxFQUFFLFNBSEY7QUFJTHFvQix5QkFBUyxFQUFFO0FBSk4sZUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQVdFO0FBQUssbUJBQUssRUFBRTtBQUFFL29CLHNCQUFNLEVBQUU7QUFBVixlQUFaO0FBQUEsd0JBQW1DNG9CLFVBQVUsQ0FBQyxNQUFELEVBQVNsRixJQUFUO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBWEYsZUFZRSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUMsYUFBWDtBQUFBLHFDQUNFO0FBQUEsdUNBQ0UscUVBQUMsMERBQUQ7QUFBUSxzQkFBSSxFQUFFO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBckRGO0FBQUEsc0JBREY7QUE0RUQ7QUFDRixHQWpGRDs7QUFtRkEsUUFBTXdHLGVBQWUsR0FBRyxNQUFNO0FBQzVCLFFBQUl4RixPQUFKLEVBQWE7QUFDWCwwQkFBTyxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVA7QUFDRCxLQUZELE1BRU87QUFDTCwwQkFDRTtBQUFBLGdDQUNFLHFFQUFDLHlEQUFEO0FBQU0sZUFBSyxFQUFFO0FBQUV6a0Isd0JBQVksRUFBRSxLQUFoQjtBQUF1QjJwQixxQkFBUyxFQUFFO0FBQWxDLFdBQWI7QUFBeUQsZ0JBQU0sTUFBL0Q7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUUxcEIsb0VBQU0sQ0FBQzJwQixRQUF2QjtBQUFBLG9DQUNFO0FBQUEsc0NBQ0U7QUFBTSx5QkFBUyxFQUFFM3BCLG9FQUFNLENBQUN5QyxJQUF4QjtBQUFBLDBCQUNHcUosOENBQU0sR0FBR0MsTUFBVCxDQUFnQixnQkFBaEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBSUU7QUFBSyxxQkFBSyxFQUFFO0FBQUV2TCx1QkFBSyxFQUFFLFNBQVQ7QUFBb0JrcEIsMkJBQVMsRUFBRTtBQUEvQixpQkFBWjtBQUFBLHdDQUNFO0FBQU0sdUJBQUssRUFBRTtBQUFFZCw0QkFBUSxFQUFFLE1BQVo7QUFBb0JHLDhCQUFVLEVBQUU7QUFBaEMsbUJBQWI7QUFBQSw0QkFDRy9FLGdCQUFnQixDQUFDM2M7QUFEcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixlQUlFO0FBQU0sdUJBQUssRUFBRTtBQUFFdWhCLDRCQUFRLEVBQUU7QUFBWixtQkFBYjtBQUFBLGtDQUFxQ3BGLElBQUksQ0FBQ25jLE1BQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSkYsZUFVRSxxRUFBQyxnREFBRDtBQUFNLG9CQUFJLEVBQUUsbUJBQVo7QUFBQSx1Q0FDRTtBQUFBLHlDQUNFO0FBQ0UseUJBQUssRUFBRTtBQUNMcWlCLCtCQUFTLEVBQUUsS0FETjtBQUVMN3BCLHFDQUFlLEVBQUUsU0FGWjtBQUdMcXBCLDZCQUFPLEVBQUUsV0FISjtBQUlMTiw4QkFBUSxFQUFFLE1BSkw7QUFLTEcsZ0NBQVUsRUFBRSxLQUxQO0FBTUx2b0IsMkJBQUssRUFBRSxNQU5GO0FBT0xvcEIsNEJBQU0sRUFBRSxNQVBIO0FBUUw3cEIsa0NBQVksRUFBRTtBQVJULHFCQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBOEJFO0FBQUEsc0NBQ0U7QUFBSyx5QkFBUyxFQUFFQyxvRUFBTSxDQUFDNnBCLGNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBRUUscUVBQUMseURBQUQ7QUFDRSxvQkFBSSxFQUFFL0MsYUFEUjtBQUVFLHVCQUFPLEVBQUVFLFlBRlg7QUFHRSxxQkFBSyxFQUFFLEdBSFQ7QUFJRSxzQkFBTSxFQUFFO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBOUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUEyQ0UscUVBQUMseURBQUQ7QUFBTSxlQUFLLEVBQUU7QUFBRTBDLHFCQUFTLEVBQUUsTUFBYjtBQUFxQjNwQix3QkFBWSxFQUFFO0FBQW5DLFdBQWI7QUFBMEQsZ0JBQU0sTUFBaEU7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUVDLG9FQUFNLENBQUMrcEIsY0FBdkI7QUFBQSxvQ0FDRTtBQUNFLG1CQUFLLEVBQUU7QUFDTG5CLHdCQUFRLEVBQUUsTUFETDtBQUVMRywwQkFBVSxFQUFFLEtBRlA7QUFHTHZvQixxQkFBSyxFQUFFLFNBSEY7QUFJTHFvQix5QkFBUyxFQUFFO0FBSk4sZUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQVdFO0FBQUssbUJBQUssRUFBRTtBQUFFL29CLHNCQUFNLEVBQUU7QUFBVixlQUFaO0FBQUEsd0JBQ0c0b0IsVUFBVSxDQUFDLFdBQUQsRUFBYzFFLGdCQUFkO0FBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFYRixlQWNFLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBQywwQkFBWDtBQUFBLHFDQUNFO0FBQUEsdUNBQ0UscUVBQUMsMERBQUQ7QUFBUSxzQkFBSSxFQUFFO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBM0NGO0FBQUEsc0JBREY7QUFvRUQ7QUFDRixHQXpFRDs7QUEyRUEsUUFBTWlHLFlBQVksR0FBRyxNQUFNO0FBQ3pCLFFBQUl6RixPQUFKLEVBQWE7QUFDWCwwQkFBTyxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVA7QUFDRCxLQUZELE1BRU87QUFDTCwwQkFDRTtBQUFBLGdDQUNFLHFFQUFDLHlEQUFEO0FBQU0sZUFBSyxFQUFFO0FBQUV6a0Isd0JBQVksRUFBRSxLQUFoQjtBQUF1QjJwQixxQkFBUyxFQUFFO0FBQWxDLFdBQWI7QUFBeUQsZ0JBQU0sTUFBL0Q7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUUxcEIsb0VBQU0sQ0FBQ2txQixXQUF2QjtBQUFBLG9DQUNFO0FBQUssdUJBQVMsRUFBRWxxQixvRUFBTSxDQUFDbXFCLGdCQUF2QjtBQUFBLHdCQUNHakcsYUFBYSxDQUFDN2M7QUFEakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUlFO0FBQUssbUJBQUssRUFBRTtBQUFFdWhCLHdCQUFRLEVBQUU7QUFBWixlQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGLGVBS0U7QUFBSyx1QkFBUyxFQUFFNW9CLG9FQUFNLENBQUN5QyxJQUF2QjtBQUFBLHdCQUE4QnFKLDhDQUFNLEdBQUdDLE1BQVQsQ0FBZ0IsTUFBaEI7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBVUUscUVBQUMseURBQUQ7QUFBTSxlQUFLLEVBQUU7QUFBRWhNLHdCQUFZLEVBQUUsS0FBaEI7QUFBdUIycEIscUJBQVMsRUFBRTtBQUFsQyxXQUFiO0FBQXlELGdCQUFNLE1BQS9EO0FBQUEsaUNBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxFQUFDLGVBQVg7QUFBQSxtQ0FDRTtBQUFHLG1CQUFLLEVBQUU7QUFBRVUsOEJBQWMsRUFBRTtBQUFsQixlQUFWO0FBQUEscUNBQ0U7QUFBSyx5QkFBUyxFQUFFcHFCLG9FQUFNLENBQUNxcUIsWUFBdkI7QUFBQSx3Q0FDRTtBQUFLLDJCQUFTLEVBQUVycUIsb0VBQU0sQ0FBQ3NxQixVQUF2QjtBQUFBLHlDQUNFO0FBQUsseUJBQUssRUFBRTtBQUFFWiwrQkFBUyxFQUFFO0FBQWIscUJBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBSUU7QUFBSyx1QkFBSyxFQUFFO0FBQUVkLDRCQUFRLEVBQUUsTUFBWjtBQUFvQkcsOEJBQVUsRUFBRTtBQUFoQyxtQkFBWjtBQUFBLCtEQUVFO0FBQ0UseUJBQUssRUFBRTtBQUNMdm9CLDJCQUFLLEVBQUUsU0FERjtBQUVMdW9CLGdDQUFVLEVBQUUsS0FGUDtBQUdMSCw4QkFBUSxFQUFFO0FBSEwscUJBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkYsRUFVUyxHQVZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFKRixlQWdCRTtBQUFLLHVCQUFLLEVBQUU7QUFBRUMsNkJBQVMsRUFBRTtBQUFiLG1CQUFaO0FBQUEseUNBQ0U7QUFBSyx1QkFBRyxFQUFFO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRixlQXFDRSxxRUFBQyx5REFBRDtBQUFNLGVBQUssRUFBRTtBQUFFYSxxQkFBUyxFQUFFLE1BQWI7QUFBcUIzcEIsd0JBQVksRUFBRTtBQUFuQyxXQUFiO0FBQTBELGdCQUFNLE1BQWhFO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFFQyxvRUFBTSxDQUFDK3BCLGNBQXZCO0FBQUEsb0NBQ0U7QUFDRSxtQkFBSyxFQUFFO0FBQ0xuQix3QkFBUSxFQUFFLE1BREw7QUFFTEcsMEJBQVUsRUFBRSxLQUZQO0FBR0x2b0IscUJBQUssRUFBRSxTQUhGO0FBSUxxb0IseUJBQVMsRUFBRTtBQUpOLGVBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFXRTtBQUFLLG1CQUFLLEVBQUU7QUFBRS9vQixzQkFBTSxFQUFFO0FBQVYsZUFBWjtBQUFBLHdCQUNHNG9CLFVBQVUsQ0FBQyxRQUFELEVBQVd4RSxhQUFYO0FBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFYRixlQWNFLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBQyx1QkFBWDtBQUFBLHFDQUNFO0FBQUEsdUNBQ0UscUVBQUMsMERBQUQ7QUFBUSxzQkFBSSxFQUFFO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBckNGO0FBQUEsc0JBREY7QUE4REQ7QUFDRixHQW5FRDs7QUFxRUEsUUFBTXFHLGVBQWUsR0FBRyxNQUFNO0FBQzVCLFFBQUkvRixPQUFKLEVBQWE7QUFDWCwwQkFBTyxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVA7QUFDRCxLQUZELE1BRU87QUFDTCwwQkFDRTtBQUFBLGdDQUNFLHFFQUFDLHlEQUFEO0FBQU0sZUFBSyxFQUFFO0FBQUV6a0Isd0JBQVksRUFBRSxLQUFoQjtBQUF1QjJwQixxQkFBUyxFQUFFO0FBQWxDLFdBQWI7QUFBeUQsZ0JBQU0sTUFBL0Q7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUUxcEIsb0VBQU0sQ0FBQzJwQixRQUF2QjtBQUFBLG9DQUNFO0FBQUEsc0NBQ0U7QUFBTSx5QkFBUyxFQUFFM3BCLG9FQUFNLENBQUN5QyxJQUF4QjtBQUFBLDBCQUNHcUosOENBQU0sR0FBR0MsTUFBVCxDQUFnQixnQkFBaEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBSUU7QUFBSyxxQkFBSyxFQUFFO0FBQUV2TCx1QkFBSyxFQUFFLFNBQVQ7QUFBb0JrcEIsMkJBQVMsRUFBRTtBQUEvQixpQkFBWjtBQUFBLHdDQUNFO0FBQU0sdUJBQUssRUFBRTtBQUFFZCw0QkFBUSxFQUFFLE1BQVo7QUFBb0JHLDhCQUFVLEVBQUU7QUFBaEMsbUJBQWI7QUFBQSw0QkFDR25GLGdCQUFnQixDQUFDdmM7QUFEcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixlQUlFO0FBQU0sdUJBQUssRUFBRTtBQUFFdWhCLDRCQUFRLEVBQUU7QUFBWixtQkFBYjtBQUFBLGtDQUNJbEYsU0FBUyxDQUFDcmMsTUFBVixHQUFtQnVjLGdCQUFnQixDQUFDdmMsTUFEeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFKRixlQVlFLHFFQUFDLGdEQUFEO0FBQU0sb0JBQUksRUFBQyxvQkFBWDtBQUFBLHVDQUNFO0FBQUEseUNBQ0U7QUFDRSx5QkFBSyxFQUFFO0FBQ0xxaUIsK0JBQVMsRUFBRSxLQUROO0FBRUw3cEIscUNBQWUsRUFBRSxTQUZaO0FBR0xxcEIsNkJBQU8sRUFBRSxXQUhKO0FBSUxOLDhCQUFRLEVBQUUsTUFKTDtBQUtMRyxnQ0FBVSxFQUFFLEtBTFA7QUFNTHZvQiwyQkFBSyxFQUFFLE1BTkY7QUFPTG9wQiw0QkFBTSxFQUFFLE1BUEg7QUFRTDdwQixrQ0FBWSxFQUFFO0FBUlQscUJBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFnQ0U7QUFBQSxzQ0FDRTtBQUFLLHlCQUFTLEVBQUVDLG9FQUFNLENBQUM2cEIsY0FBdkI7QUFBQSwwQkFDR2pHLGdCQUFnQixDQUFDdmMsTUFBakIsS0FBNEIsQ0FBNUIsR0FDRyxJQURILEdBRUksR0FBRXFKLElBQUksQ0FBQ29aLEtBQUwsQ0FDQWxHLGdCQUFnQixDQUFDdmMsTUFBakIsSUFDRXFjLFNBQVMsQ0FBQ3JjLE1BQVYsR0FBbUJ1YyxnQkFBZ0IsQ0FBQ3ZjLE1BRHRDLENBQUQsR0FFRSxHQUhELENBSUQ7QUFQUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBVUUscUVBQUMseURBQUQ7QUFDRSxvQkFBSSxFQUFFMGYsYUFEUjtBQUVFLHVCQUFPLEVBQUVDLFlBRlg7QUFHRSxxQkFBSyxFQUFFLEdBSFQ7QUFJRSxzQkFBTSxFQUFFO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBaENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFxREUscUVBQUMseURBQUQ7QUFBTSxlQUFLLEVBQUU7QUFBRTBDLHFCQUFTLEVBQUUsTUFBYjtBQUFxQjNwQix3QkFBWSxFQUFFO0FBQW5DLFdBQWI7QUFBMEQsZ0JBQU0sTUFBaEU7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUVDLG9FQUFNLENBQUMrcEIsY0FBdkI7QUFBQSxvQ0FDRTtBQUNFLG1CQUFLLEVBQUU7QUFDTG5CLHdCQUFRLEVBQUUsTUFETDtBQUVMRywwQkFBVSxFQUFFLEtBRlA7QUFHTHZvQixxQkFBSyxFQUFFLFNBSEY7QUFJTHFvQix5QkFBUyxFQUFFO0FBSk4sZUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQVdFO0FBQUssbUJBQUssRUFBRTtBQUFFL29CLHNCQUFNLEVBQUU7QUFBVixlQUFaO0FBQUEsd0JBQ0d1cEIsbUJBQW1CLENBQUMzRixTQUFEO0FBRHRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBWEYsZUFjRSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUMsYUFBWDtBQUFBLHFDQUNFO0FBQUEsdUNBQ0UscUVBQUMsMERBQUQ7QUFBUSxzQkFBSSxFQUFFO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBckRGO0FBQUEsc0JBREY7QUE4RUQ7QUFDRixHQW5GRDs7QUFxRkEsUUFBTThHLFNBQVMsR0FBRyxNQUFNO0FBQ3RCLFFBQUlDLFlBQVksR0FBRzdFLGNBQWMsQ0FBQzVlLE1BQWYsQ0FBdUJDLEdBQUQsSUFBUztBQUNoRCxhQUFPQSxHQUFHLENBQUNnaEIsUUFBWDtBQUNELEtBRmtCLENBQW5COztBQUdBLFFBQUl3QyxZQUFZLENBQUNwakIsTUFBakIsRUFBeUI7QUFDdkIsWUFBTWpFLFFBQVEsR0FBR3VCLElBQUksQ0FBQzhpQixLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixDQUFYLENBQWpCOztBQUNBLFVBQUl2a0IsUUFBSixFQUFjO0FBQ1o2aUIseUJBQWlCLENBQUMsSUFBRCxDQUFqQjs7QUFDQSxhQUFLLElBQUlqRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHeUksWUFBWSxDQUFDcGpCLE1BQWpDLEVBQXlDMmEsQ0FBQyxFQUExQyxFQUE4QztBQUM1QyxnQkFBTTBJLE1BQU0sR0FDVkQsWUFBWSxDQUFDekksQ0FBRCxDQUFaLENBQWdCeGMsS0FBaEIsS0FBMEIsTUFBMUIsR0FDSSxXQURKLEdBRUlpbEIsWUFBWSxDQUFDekksQ0FBRCxDQUFaLENBQWdCeGMsS0FBaEIsS0FBMEIsUUFBMUIsR0FDQSxhQURBLEdBRUFpbEIsWUFBWSxDQUFDekksQ0FBRCxDQUFaLENBQWdCeGMsS0FBaEIsS0FBMEIsV0FBMUIsR0FDQSxXQURBLEdBRUEsRUFQTjtBQVNBLGdCQUFNMUIsSUFBSSxHQUFHO0FBQ1g2bUIsd0NBQTRCLEVBQUUsQ0FDNUI7QUFDRUMsd0JBQVUsRUFBRSxTQURkO0FBRUV6Qyx3QkFBVSxFQUFFdUMsTUFGZDtBQUdFRywyQkFBYSxFQUFFLENBSGpCO0FBSUVoa0IsZ0JBQUUsRUFBRTRqQixZQUFZLENBQUN6SSxDQUFELENBQVosQ0FBZ0JuYixFQUp0QjtBQUtFaWtCLHdCQUFVLEVBQ1JMLFlBQVksQ0FBQ3pJLENBQUQsQ0FBWixDQUFnQnhjLEtBQWhCLEtBQTBCLE1BQTFCLEdBQ0ksR0FESixHQUVJaWxCLFlBQVksQ0FBQ3pJLENBQUQsQ0FBWixDQUFnQnhjLEtBQWhCLEtBQTBCLFFBQTFCLEdBQ0EsR0FEQSxHQUVBaWxCLFlBQVksQ0FBQ3pJLENBQUQsQ0FBWixDQUFnQnhjLEtBQWhCLEtBQTBCLFdBQTFCLEdBQ0EsR0FEQSxHQUVBLEVBWlI7QUFhRXVsQixtQkFBSyxFQUFFTixZQUFZLENBQUN6SSxDQUFELENBQVosQ0FBZ0JnSixZQWJ6QjtBQWNFQyxpQkFBRyxFQUFFLFFBZFA7QUFlRUMsMEJBQVksRUFBRSxDQWZoQjtBQWdCRUMsbUJBQUssRUFBRSxRQWhCVDtBQWlCRUMseUJBQVcsRUFBRSxJQWpCZjtBQWtCRUMseUJBQVcsRUFBRTlvQixHQUFHLENBQUMrb0IsV0FBSixFQWxCZjtBQW1CRWhsQixvQkFBTSxFQUFFO0FBbkJWLGFBRDRCLENBRG5CO0FBd0JYc2tCLHNCQUFVLEVBQUUsU0F4QkQ7QUF5Qlh6QyxzQkFBVSxFQUFFdUMsTUF6QkQ7QUEwQlhLLGlCQUFLLEVBQUVOLFlBQVksQ0FBQ3pJLENBQUQsQ0FBWixDQUFnQmdKLFlBMUJaO0FBMkJYTyx3QkFBWSxFQUFFLFFBM0JIO0FBNEJYQyxzQkFBVSxFQUFFLFFBNUJEO0FBNkJYbGxCLGtCQUFNLEVBQUUsUUE3Qkc7QUE4QlhtbEIsdUJBQVcsRUFBRSxRQTlCRjtBQStCWE4saUJBQUssRUFBRSxRQS9CSTtBQWdDWE8scUJBQVMsRUFBRXRvQixRQUFRLENBQUNjLFFBaENUO0FBaUNYeW5CLHVCQUFXLEVBQUVwcEIsR0FBRyxDQUFDK29CLFdBQUosRUFqQ0Y7QUFrQ1hNLHFCQUFTLEVBQUU7QUFDVGhCLHdCQUFVLEVBQUUsU0FESDtBQUVUekMsd0JBQVUsRUFBRXVDLE1BRkg7QUFHVG1CLDRCQUFjLEVBQUVwQixZQUFZLENBQUN6SSxDQUFELENBQVosQ0FBZ0JnSixZQUh2QjtBQUlUYyxxQkFBTyxFQUFFLFFBSkE7QUFLVEMscUJBQU8sRUFBRSxRQUxBO0FBTVRDLHNCQUFRLEVBQUUsUUFORDtBQU9UQywwQkFBWSxFQUFFLFFBUEw7QUFRVEMsdUJBQVMsRUFBRTtBQVJGO0FBbENBLFdBQWI7QUE2Q0FyZiwwRUFBZSxDQUNiL0ksSUFEYSxFQUViMm1CLFlBQVksQ0FBQ3pJLENBQUQsQ0FBWixDQUFnQnhjLEtBRkgsRUFHYmlsQixZQUFZLENBQUN6SSxDQUFELENBQVosQ0FBZ0JuYixFQUhILEVBSWJ6RCxRQUphLENBQWYsQ0FNR08sSUFOSCxDQU1TRyxJQUFELElBQVU7QUFDZCxnQkFBSWtlLENBQUMsS0FBS3lJLFlBQVksQ0FBQ3BqQixNQUFiLEdBQXNCLENBQWhDLEVBQW1DO0FBQ2pDNGUsK0JBQWlCLENBQUMsS0FBRCxDQUFqQjtBQUNBMWQsMEVBQVcsQ0FBQ25GLFFBQUQsQ0FBWCxDQUNHTyxJQURILENBQ1NHLElBQUQsSUFBVTtBQUNkLG9CQUFJa2tCLFlBQVksR0FBR2xrQixJQUFJLENBQUNpTixHQUFMLENBQVU5SixHQUFELElBQVM7QUFDbkMseURBQVlBLEdBQVo7QUFBaUJnaEIsNEJBQVEsRUFBRTtBQUEzQjtBQUNELGlCQUZrQixDQUFuQjtBQUdBcEMsaUNBQWlCLENBQUNtQyxZQUFELENBQWpCO0FBQ0F2RCwwQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELGVBUEgsRUFRRzFnQixLQVJILENBUVVDLEdBQUQsSUFBUztBQUNkWCx1QkFBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRCxlQVZIO0FBV0Q7QUFDRixXQXJCSCxFQXNCR0QsS0F0QkgsQ0FzQlVDLEdBQUQsSUFBU1gsT0FBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVosQ0F0QmxCO0FBdUJEO0FBQ0Y7QUFDRjtBQUNGLEdBekZEOztBQTJGQSxRQUFNbW9CLGNBQWMsR0FBRyxNQUFNO0FBQzNCLFFBQUkxQixZQUFZLEdBQUc3RSxjQUFjLENBQUM1ZSxNQUFmLENBQXVCQyxHQUFELElBQVM7QUFDaEQsYUFBT0EsR0FBRyxDQUFDZ2hCLFFBQVg7QUFDRCxLQUZrQixDQUFuQjs7QUFHQSxRQUFJekQsT0FBSixFQUFhO0FBQ1gsMEJBQU8scUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsMEJBQ0U7QUFBQSwrQkFDRSxxRUFBQyx5REFBRDtBQUFNLGVBQUssRUFBRTtBQUFFa0YscUJBQVMsRUFBRSxNQUFiO0FBQXFCM3BCLHdCQUFZLEVBQUU7QUFBbkMsV0FBYjtBQUEwRCxnQkFBTSxNQUFoRTtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBRUMsb0VBQU0sQ0FBQytwQixjQUF2QjtBQUFBLG1DQUNFO0FBQ0UsbUJBQUssRUFBRTtBQUNMbkIsd0JBQVEsRUFBRSxNQURMO0FBRUxHLDBCQUFVLEVBQUUsS0FGUDtBQUdMdm9CLHFCQUFLLEVBQUUsU0FIRjtBQUlMcW9CLHlCQUFTLEVBQUU7QUFKTixlQURUO0FBQUEsMERBU0U7QUFBSyxxQkFBSyxFQUFFO0FBQUUvb0Isd0JBQU0sRUFBRTtBQUFWLGlCQUFaO0FBQUEsd0NBQ0U7QUFDRSx1QkFBSyxFQUFFO0FBQ0xrcEIsMkJBQU8sRUFBRSxNQURKO0FBRUxDLHVDQUFtQixFQUFFLFNBRmhCO0FBR0xtRCxpQ0FBYSxFQUFFO0FBSFYsbUJBRFQ7QUFBQSwwQ0FPRTtBQUFLLHlCQUFLLEVBQUU7QUFBRUMsZ0NBQVUsRUFBRTtBQUFkLHFCQUFaO0FBQUEsMkNBQ0UscUVBQUMsNkRBQUQ7QUFDRSw2QkFBTyxFQUFFLE1BQU07QUFDYiw0QkFBSTVCLFlBQVksQ0FBQ3BqQixNQUFiLEtBQXdCdWUsY0FBYyxDQUFDdmUsTUFBM0MsRUFBbUQ7QUFDakQsOEJBQUlzUCxHQUFHLEdBQUdpUCxjQUFjLENBQUM3VSxHQUFmLENBQW9COUosR0FBRCxJQUFTO0FBQ3BDLG1FQUFZQSxHQUFaO0FBQWlCZ2hCLHNDQUFRLEVBQUU7QUFBM0I7QUFDRCwyQkFGUyxDQUFWO0FBR0FwQywyQ0FBaUIsQ0FBQ2xQLEdBQUQsQ0FBakI7QUFDRCx5QkFMRCxNQUtPO0FBQ0wsOEJBQUlBLEdBQUcsR0FBR2lQLGNBQWMsQ0FBQzdVLEdBQWYsQ0FBb0I5SixHQUFELElBQVM7QUFDcEMsbUVBQVlBLEdBQVo7QUFBaUJnaEIsc0NBQVEsRUFBRTtBQUEzQjtBQUNELDJCQUZTLENBQVY7QUFHQXBDLDJDQUFpQixDQUFDbFAsR0FBRCxDQUFqQjtBQUNEO0FBQ0YsdUJBYkg7QUFjRSw2QkFBTyxFQUNMOFQsWUFBWSxDQUFDcGpCLE1BQWIsS0FBd0J1ZSxjQUFjLENBQUN2ZSxNQUF2QyxHQUNJLElBREosR0FFSTtBQWpCUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFQRixlQTZCRSxxRUFBQywwREFBRDtBQUNFLDJCQUFPLEVBQUUsTUFBTTtBQUNibWpCLCtCQUFTO0FBQ1YscUJBSEg7QUFJRSx5QkFBSyxFQUFFQyxZQUFZLENBQUNwakIsTUFBYixHQUFzQixPQUF0QixHQUFnQyxTQUp6QztBQUtFLHdCQUFJLEVBQUU7QUFMUjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsRUFzQ0d1ZSxjQUFjLENBQUM3VSxHQUFmLENBQW1CLENBQUM5SixHQUFELEVBQU1vaEIsS0FBTixLQUFnQjtBQUNsQyxzQ0FDRTtBQUNFLHlCQUFLLEVBQUU7QUFDTFcsNkJBQU8sRUFBRSxNQURKO0FBRUxDLHlDQUFtQixFQUFFLFNBRmhCO0FBR0xMLDhCQUFRLEVBQUUsTUFITDtBQUlMOW9CLDRCQUFNLEVBQUU7QUFKSCxxQkFEVDtBQUFBLDJDQVFFO0FBQUEsOENBQ0U7QUFBQSwrQ0FDRSxxRUFBQyw2REFBRDtBQUNFLGlDQUFPLEVBQUVtSCxHQUFHLENBQUNnaEIsUUFEZjtBQUVFLGlDQUFPLEVBQUUsTUFBTTtBQUNickMsMENBQWMsQ0FBQzBHLE1BQWYsQ0FBc0JqRSxLQUF0QixFQUE2QixDQUE3QixrQ0FDS3pDLGNBQWMsQ0FBQ3lDLEtBQUQsQ0FEbkI7QUFFRUosc0NBQVEsRUFBRSxDQUFDaGhCLEdBQUcsQ0FBQ2doQjtBQUZqQjtBQUlBbEMsb0NBQVEsQ0FBQ0QsS0FBSyxHQUFHLENBQVQsQ0FBUjtBQUNEO0FBUkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREYsZUFhRTtBQUNFLCtCQUFPLEVBQUUsTUFBTTtBQUNiemlCLGlDQUFPLENBQUNDLEdBQVIsQ0FBWTJELEdBQVo7QUFDQWtjLGlDQUFPLENBQUNvSixnQkFBUixDQUF5QnRsQixHQUF6QjtBQUNBekgsNEVBQU0sQ0FBQzJjLElBQVAsQ0FBYSxhQUFZbFYsR0FBRyxDQUFDekIsS0FBTSxJQUFHeUIsR0FBRyxDQUFDSixFQUFHLEVBQTdDO0FBQ0QseUJBTEg7QUFBQSxnREFPRTtBQUNFLCtCQUFLLEVBQUU7QUFDTGtpQixzQ0FBVSxFQUFFLEtBRFA7QUFFTEMsbUNBQU8sRUFBRSxNQUZKO0FBR0xDLCtDQUFtQixFQUFFO0FBSGhCLDJCQURUO0FBQUEsa0RBT0U7QUFBQSxzQ0FBTWhpQixHQUFHLENBQUN1bEI7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQVBGLGVBUUU7QUFDRSxpQ0FBSyxFQUFFO0FBQ0wzc0IsNkNBQWUsRUFBRSxTQURaO0FBRUxXLG1DQUFLLEVBQUUsT0FGRjtBQUdMcW9CLHVDQUFTLEVBQUUsUUFITjtBQUlMOW9CLDBDQUFZLEVBQUUsTUFKVDtBQUtMZ3BCLHdDQUFVLEVBQUUsS0FMUDtBQU1MSCxzQ0FBUSxFQUFFLE1BTkw7QUFPTHlELHdDQUFVLEVBQUU7QUFQUCw2QkFEVDtBQUFBLHNDQVdHcGxCLEdBQUcsQ0FBQ3pCO0FBWFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBUEYsZUE2QkU7QUFDRSwrQkFBSyxFQUFFO0FBQ0x1akIsc0NBQVUsRUFBRSxLQURQO0FBRUxILG9DQUFRLEVBQUU7QUFGTCwyQkFEVDtBQUFBLG9DQU1HM2hCLEdBQUcsQ0FBQ2tpQjtBQU5QO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBN0JGLGVBcUNFO0FBQUssK0JBQUssRUFBRTtBQUFFUCxvQ0FBUSxFQUFFO0FBQVosMkJBQVo7QUFBQSxvQ0FDRzNoQixHQUFHLENBQUNtaUI7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQXJDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBYkY7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREY7QUFrRUQsaUJBbkVBLENBdENIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLHVCQURGO0FBNkhEO0FBQ0YsR0FySUQ7O0FBdUlBLFFBQU1xRCxhQUFhLEdBQUcsTUFBTTtBQUMxQixRQUFJL0csT0FBTyxDQUFDcmUsTUFBUixLQUFtQixDQUFuQixJQUF3QixDQUFDbWQsT0FBekIsSUFBb0MsQ0FBQ0UsV0FBekMsRUFBc0Q7QUFDcEQsMEJBQ0UscUVBQUMseURBQUQ7QUFBTSxhQUFLLEVBQUU7QUFBRWdGLG1CQUFTLEVBQUUsTUFBYjtBQUFxQjNwQixzQkFBWSxFQUFFO0FBQW5DLFNBQWI7QUFBeUQsY0FBTSxNQUEvRDtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBRUMsb0VBQU0sQ0FBQytwQixjQUF2QjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBRS9wQixvRUFBTSxDQUFDMHNCLGNBQXZCO0FBQUEsdUNBQ2U1Z0IsOENBQU0sR0FBR0MsTUFBVCxDQUFnQixXQUFoQixDQURmLGVBRUU7QUFBSyxtQkFBSyxFQUFFO0FBQUVnZCwwQkFBVSxFQUFFO0FBQWQsZUFBWjtBQUFBLHNDQUNFO0FBQU0scUJBQUssRUFBRTtBQUFFdm9CLHVCQUFLLEVBQUU7QUFBVCxpQkFBYjtBQUFBLDBCQUFvQ2tsQixPQUFPLENBQUNpSDtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBRUU7QUFBTSxxQkFBSyxFQUFFO0FBQUUvRCwwQkFBUSxFQUFFLE1BQVo7QUFBb0JHLDRCQUFVLEVBQUU7QUFBaEMsaUJBQWI7QUFBQSwyQkFDRyxLQURILEVBRUdyRCxPQUFPLENBQUNrSCxjQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQWdCRDtBQUNGLEdBbkJEOztBQW9CQSxRQUFNQyxjQUFjLEdBQUcsTUFBTTtBQUMzQixVQUFNQyxXQUFXLEdBQUcsQ0FBQ0MsS0FBRCxFQUFRanBCLElBQVIsS0FBaUI7QUFDbkMsMEJBQ0U7QUFBQSxnQ0FDRTtBQUFLLGVBQUssRUFBRTtBQUFFa2xCLG1CQUFPLEVBQUUsTUFBWDtBQUFtQkMsK0JBQW1CLEVBQUU7QUFBeEMsV0FBWjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBRWpwQixvRUFBTSxDQUFDMHNCLGNBQXZCO0FBQUEsc0JBQXdDSztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBSyxxQkFBUyxFQUFFL3NCLG9FQUFNLENBQUNndEIsZUFBdkI7QUFBQSx1QkFDR2xwQixJQUFJLENBQUNtcEIsS0FBTCxDQUFXQyxjQUFYLENBQTBCLE9BQTFCLENBREgsZUFFRTtBQUFNLG1CQUFLLEVBQUU7QUFBRXRFLHdCQUFRLEVBQUUsTUFBWjtBQUFvQkcsMEJBQVUsRUFBRTtBQUFoQyxlQUFiO0FBQUEseUJBQ0csS0FESCxFQUVHamxCLElBQUksQ0FBQ3NKLE1BQUwsQ0FBWThmLGNBQVosQ0FBMkIsT0FBM0IsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQVdFO0FBQUssZUFBSyxFQUFFO0FBQUVwdEIsa0JBQU0sRUFBRTtBQUFWLFdBQVo7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUVFLG9FQUFNLENBQUNtdEI7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQ0UscUJBQVMsRUFBRW50QixvRUFBTSxDQUFDb3RCLGdCQURwQjtBQUVFLGlCQUFLLEVBQUU7QUFDTHp0QixtQkFBSyxFQUFHLEdBQUdtRSxJQUFJLENBQUNtcEIsS0FBTCxHQUFhbnBCLElBQUksQ0FBQ3NKLE1BQW5CLEdBQTZCLEdBQUk7QUFEdEM7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRjtBQUFBLHNCQURGO0FBdUJELEtBeEJEOztBQXlCQSxRQUFJLENBQUNvWCxPQUFELElBQVksQ0FBQ0UsV0FBakIsRUFBOEI7QUFDNUIsMEJBQ0UscUVBQUMseURBQUQ7QUFBTSxhQUFLLEVBQUU7QUFBRWdGLG1CQUFTLEVBQUUsTUFBYjtBQUFxQjNwQixzQkFBWSxFQUFFO0FBQW5DLFNBQWI7QUFBeUQsY0FBTSxNQUEvRDtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBRUMsb0VBQU0sQ0FBQytwQixjQUF2QjtBQUFBLHFCQUNHL0UsV0FBVyxDQUFDM2QsTUFBWixLQUF1QixDQUF2QixHQUEyQnlsQixXQUFXLENBQUMsT0FBRCxFQUFVOUgsV0FBVixDQUF0QyxHQUErRCxFQURsRSxFQUVHRSxhQUFhLENBQUM3ZCxNQUFkLEtBQXlCLENBQXpCLEdBQ0d5bEIsV0FBVyxDQUFDLFdBQUQsRUFBYzVILGFBQWQsQ0FEZCxHQUVHLEVBSk4sRUFLR00sR0FBRyxDQUFDbmUsTUFBSixLQUFlLENBQWYsR0FBbUJ5bEIsV0FBVyxDQUFDLFdBQUQsRUFBY3RILEdBQWQsQ0FBOUIsR0FBbUQsRUFMdEQsRUFNR0YsVUFBVSxDQUFDamUsTUFBWCxLQUFzQixDQUF0QixnQkFDQztBQUFBLG9DQUNFO0FBQ0UsbUJBQUssRUFBRTtBQUFFMmhCLHVCQUFPLEVBQUUsTUFBWDtBQUFtQkMsbUNBQW1CLEVBQUU7QUFBeEMsZUFEVDtBQUFBLHNDQUdFO0FBQUsseUJBQVMsRUFBRWpwQixvRUFBTSxDQUFDMHNCLGNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhGLGVBSUU7QUFBSyx5QkFBUyxFQUFFMXNCLG9FQUFNLENBQUNndEIsZUFBdkI7QUFBQSwyQkFDRzFILFVBQVUsQ0FBQzJILEtBRGQsZUFFRTtBQUFNLHVCQUFLLEVBQUU7QUFBRXJFLDRCQUFRLEVBQUUsTUFBWjtBQUFvQkcsOEJBQVUsRUFBRTtBQUFoQyxtQkFBYjtBQUFBLDZCQUNHLEtBREgsRUFFR3pELFVBQVUsQ0FBQ2xZLE1BRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFhRTtBQUFLLG1CQUFLLEVBQUU7QUFBRXROLHNCQUFNLEVBQUU7QUFBVixlQUFaO0FBQUEsc0NBQ0U7QUFBSyx5QkFBUyxFQUFFRSxvRUFBTSxDQUFDbXRCO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFFRTtBQUNFLHlCQUFTLEVBQUVudEIsb0VBQU0sQ0FBQ290QixnQkFEcEI7QUFFRSxxQkFBSyxFQUFFO0FBQ0x6dEIsdUJBQUssRUFBRyxHQUFHMmxCLFVBQVUsQ0FBQytILEdBQVgsR0FBaUIvSCxVQUFVLENBQUNsWSxNQUE3QixHQUF1QyxHQUFJO0FBRGhEO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBYkY7QUFBQSwwQkFERCxHQXlCQyxFQS9CSixFQWlDR2dZLGFBQWEsQ0FBQy9kLE1BQWQsS0FBeUIsQ0FBekIsZ0JBQ0M7QUFBQSxvQ0FDRTtBQUNFLG1CQUFLLEVBQUU7QUFBRTJoQix1QkFBTyxFQUFFLE1BQVg7QUFBbUJDLG1DQUFtQixFQUFFO0FBQXhDLGVBRFQ7QUFBQSxzQ0FHRTtBQUFLLHlCQUFTLEVBQUVqcEIsb0VBQU0sQ0FBQzBzQixjQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFIRixlQUlFO0FBQUsseUJBQVMsRUFBRTFzQixvRUFBTSxDQUFDZ3RCLGVBQXZCO0FBQUEsMkJBQ0c1SCxhQUFhLENBQUNrSSxXQURqQixlQUVFO0FBQU0sdUJBQUssRUFBRTtBQUFFMUUsNEJBQVEsRUFBRSxNQUFaO0FBQW9CRyw4QkFBVSxFQUFFO0FBQWhDLG1CQUFiO0FBQUEsNkJBQ0csS0FESCxFQUVHM0QsYUFBYSxDQUFDaFksTUFGakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFhRTtBQUFLLG1CQUFLLEVBQUU7QUFBRXROLHNCQUFNLEVBQUU7QUFBVixlQUFaO0FBQUEsc0NBQ0U7QUFBSyx5QkFBUyxFQUFFRSxvRUFBTSxDQUFDbXRCO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFFRTtBQUNFLHlCQUFTLEVBQUVudEIsb0VBQU0sQ0FBQ290QixnQkFEcEI7QUFFRSxxQkFBSyxFQUFFO0FBQ0x6dEIsdUJBQUssRUFBRyxHQUNMeWxCLGFBQWEsQ0FBQ2tJLFdBQWQsR0FBNEJsSSxhQUFhLENBQUNoWSxNQUEzQyxHQUFxRCxHQUN0RDtBQUhJO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBYkY7QUFBQSwwQkFERCxHQTJCQyxFQTVESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFtRUQ7QUFDRixHQS9GRDs7QUFpR0EsUUFBTW1nQixnQkFBZ0IsR0FBRyxNQUFNO0FBQzdCLFVBQU03RSxVQUFVLEdBQUcsQ0FBQzVrQixJQUFELEVBQU8wQixLQUFQLEtBQWlCO0FBQ2xDLFVBQUk0aUIsTUFBTSxHQUFHdGtCLElBQUksQ0FBQ2lOLEdBQUwsQ0FBVTlKLEdBQUQsSUFBUztBQUM3Qiw0QkFDRTtBQUNFLGVBQUssRUFBRTtBQUNMMmhCLG9CQUFRLEVBQUUsTUFETDtBQUVMOW9CLGtCQUFNLEVBQUU7QUFGSCxXQURUO0FBS0UsaUJBQU8sRUFBRSxNQUFNO0FBQ2J1RCxtQkFBTyxDQUFDQyxHQUFSLENBQVkyRCxHQUFaO0FBQ0FrYyxtQkFBTyxDQUFDb0osZ0JBQVIsQ0FBeUJ0bEIsR0FBekI7O0FBQ0EsZ0JBQUl6QixLQUFLLEtBQUssTUFBZCxFQUFzQjtBQUNwQndELGtGQUFtQixDQUFDL0IsR0FBRyxDQUFDdW1CLFdBQUwsQ0FBbkIsQ0FDRzdwQixJQURILENBQ1M4cEIsV0FBRCxJQUFpQjtBQUNyQnRLLHVCQUFPLENBQUN1SyxrQkFBUixDQUEyQkQsV0FBM0IsRUFEcUIsQ0FFckI7O0FBQ0EzbEIsbUZBQWtCLENBQUNiLEdBQUcsQ0FBQ3VtQixXQUFMLENBQWxCLENBQ0c3cEIsSUFESCxDQUNTZ3FCLFFBQUQsSUFBYztBQUNsQnhLLHlCQUFPLENBQUN5SyxtQkFBUixDQUE0QkQsUUFBNUI7QUFDQW51QixvRUFBTSxDQUFDMmMsSUFBUCxDQUFhLFdBQVUzVyxLQUFNLElBQUd5QixHQUFHLENBQUN1bUIsV0FBWSxFQUFoRDtBQUNELGlCQUpILEVBS0d6cEIsS0FMSCxDQUtVQyxHQUFELElBQVM7QUFDZFgseUJBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsaUJBUEg7QUFRRCxlQVpILEVBYUdELEtBYkgsQ0FhVUMsR0FBRCxJQUFTO0FBQ2RYLHVCQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELGVBZkg7QUFnQkQsYUFqQkQsTUFpQk8sSUFBSXdCLEtBQUssS0FBSyxRQUFkLEVBQXdCO0FBQzdCc0UsZ0ZBQWlCLENBQUM3QyxHQUFHLENBQUNKLEVBQUwsQ0FBakIsQ0FDR2xELElBREgsQ0FDUzhwQixXQUFELElBQWlCO0FBQ3JCcHFCLHVCQUFPLENBQUNDLEdBQVIsQ0FBWW1xQixXQUFaO0FBQ0F0Syx1QkFBTyxDQUFDdUssa0JBQVIsQ0FBMkJELFdBQTNCO0FBQ0Fwa0IseUZBQXdCLENBQUNwQyxHQUFHLENBQUNKLEVBQUwsQ0FBeEIsQ0FDR2xELElBREgsQ0FDU2dxQixRQUFELElBQWM7QUFDbEJ4Syx5QkFBTyxDQUFDeUssbUJBQVIsQ0FBNEJELFFBQTVCO0FBQ0F0cUIseUJBQU8sQ0FBQ0MsR0FBUixDQUFZcXFCLFFBQVo7QUFDQW51QixvRUFBTSxDQUFDMmMsSUFBUCxDQUFhLFdBQVUzVyxLQUFNLElBQUd5QixHQUFHLENBQUNKLEVBQUcsRUFBdkM7QUFDRCxpQkFMSCxFQU1HOUMsS0FOSCxDQU1VQyxHQUFELElBQVM7QUFDZFgseUJBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0QsaUJBUkg7QUFTRCxlQWJILEVBY0dELEtBZEgsQ0FjVUMsR0FBRCxJQUFTO0FBQ2RYLHVCQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELGVBaEJIO0FBaUJELGFBbEJNLE1Ba0JBLElBQUl3QixLQUFLLEtBQUssV0FBZCxFQUEyQjtBQUNoQ2tGLGtGQUFtQixDQUFDekQsR0FBRyxDQUFDSixFQUFMLENBQW5CLENBQ0dsRCxJQURILENBQ1M4cEIsV0FBRCxJQUFpQjtBQUNyQnBxQix1QkFBTyxDQUFDQyxHQUFSLENBQVltcUIsV0FBWjtBQUNBdmpCLDRGQUEyQixDQUFDakQsR0FBRyxDQUFDSixFQUFMLENBQTNCLENBQ0dsRCxJQURILENBQ1NncUIsUUFBRCxJQUFjO0FBQ2xCeEsseUJBQU8sQ0FBQ3lLLG1CQUFSLENBQTRCRCxRQUE1QjtBQUNBdHFCLHlCQUFPLENBQUNDLEdBQVIsQ0FBWXFxQixRQUFaO0FBQ0FudUIsb0VBQU0sQ0FBQzJjLElBQVAsQ0FBYSxXQUFVM1csS0FBTSxJQUFHeUIsR0FBRyxDQUFDSixFQUFHLEVBQXZDO0FBQ0QsaUJBTEgsRUFNRzlDLEtBTkgsQ0FNVUMsR0FBRCxJQUFTO0FBQ2RYLHlCQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELGlCQVJIO0FBU0QsZUFaSCxFQWFHRCxLQWJILENBYVVDLEdBQUQsSUFBUztBQUNkWCx1QkFBTyxDQUFDQyxHQUFSLENBQVlVLEdBQVo7QUFDRCxlQWZIO0FBZ0JELGFBdkRZLENBd0RiOztBQUNELFdBOURIO0FBQUEsaUNBZ0VFO0FBQUEsbUNBQ0U7QUFBQSxzQ0FDRTtBQUNFLHFCQUFLLEVBQUU7QUFDTCtrQiw0QkFBVSxFQUFFLEtBRFA7QUFFTEMseUJBQU8sRUFBRSxNQUZKO0FBR0xDLHFDQUFtQixFQUFFO0FBSGhCLGlCQURUO0FBQUEsd0NBT0U7QUFBQSw0QkFBTWhpQixHQUFHLENBQUN1bEI7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVBGLGVBUUU7QUFDRSx1QkFBSyxFQUFFO0FBQ0wzc0IsbUNBQWUsRUFBRSxTQURaO0FBRUxXLHlCQUFLLEVBQUUsT0FGRjtBQUdMcW9CLDZCQUFTLEVBQUUsUUFITjtBQUlMOW9CLGdDQUFZLEVBQUUsTUFKVDtBQUtMZ3BCLDhCQUFVLEVBQUUsS0FMUDtBQU1MSCw0QkFBUSxFQUFFLE1BTkw7QUFPTHlELDhCQUFVLEVBQUU7QUFQUCxtQkFEVDtBQUFBLDRCQVdHN21CO0FBWEg7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUF1QkU7QUFDRSxxQkFBSyxFQUFFO0FBQ0x1akIsNEJBQVUsRUFBRSxLQURQO0FBRUxILDBCQUFRLEVBQUU7QUFGTCxpQkFEVDtBQUFBLDBCQU1HM2hCLEdBQUcsQ0FBQ2tpQjtBQU5QO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBdkJGLGVBK0JFO0FBQUsscUJBQUssRUFBRTtBQUFFUCwwQkFBUSxFQUFFO0FBQVosaUJBQVo7QUFBQSwwQkFBbUMzaEIsR0FBRyxDQUFDbWlCO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBL0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBaEVGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREY7QUFzR0QsT0F2R1ksQ0FBYjtBQXdHQSxhQUFPaEIsTUFBUDtBQUNELEtBMUdEOztBQTJHQSxRQUFJbEMsVUFBVSxDQUFDN2UsTUFBWCxJQUFxQitlLFlBQVksQ0FBQy9lLE1BQWxDLElBQTRDaWYsZUFBZSxDQUFDamYsTUFBaEUsRUFBd0U7QUFDdEUsMEJBQ0UscUVBQUMseURBQUQ7QUFDRSxhQUFLLEVBQUU7QUFBRXRILHNCQUFZLEVBQUUsS0FBaEI7QUFBdUIycEIsbUJBQVMsRUFBRSxNQUFsQztBQUEwQ2xwQixlQUFLLEVBQUU7QUFBakQsU0FEVDtBQUVFLGNBQU0sTUFGUjtBQUFBLCtCQUlFO0FBQUssbUJBQVMsRUFBRVIsb0VBQU0sQ0FBQytwQixjQUF2QjtBQUFBLGlDQUNFO0FBQ0UsaUJBQUssRUFBRTtBQUNMbkIsc0JBQVEsRUFBRSxNQURMO0FBRUxHLHdCQUFVLEVBQUUsS0FGUDtBQUdMdm9CLG1CQUFLLEVBQUUsU0FIRjtBQUlMcW9CLHVCQUFTLEVBQUU7QUFKTixhQURUO0FBQUEsb0NBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUkYsRUFTR0gsVUFBVSxDQUFDeEMsVUFBRCxFQUFhLE1BQWIsQ0FUYixFQVVHd0MsVUFBVSxDQUFDdEMsWUFBRCxFQUFlLFFBQWYsQ0FWYixFQVdHc0MsVUFBVSxDQUFDcEMsZUFBRCxFQUFrQixXQUFsQixDQVhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFzQkQ7QUFDRixHQXBJRDs7QUFzSUEsUUFBTXVILGVBQWUsR0FBSTFNLENBQUQsSUFBTztBQUM3QixRQUFJRixDQUFDLEdBQUcsSUFBUixDQUQ2QixDQUNmOztBQUVkLFFBQUksQ0FBQ0UsQ0FBRCxJQUFNLENBQUNBLENBQUMsQ0FBQzJNLE9BQUYsRUFBWCxFQUF3QjtBQUN0QjtBQUNELEtBTDRCLENBSzNCOzs7QUFFRixRQUFJQyxlQUFlLEdBQUcsRUFBdEIsQ0FQNkIsQ0FPSDs7QUFDMUIsUUFBSUMsYUFBYSxHQUFHLEVBQXBCLENBUjZCLENBUUw7O0FBQ3hCLFFBQUlDLFdBQVcsR0FBR0MsVUFBVSxDQUFDL00sQ0FBQyxDQUFDcFYsTUFBRixDQUFTLElBQVQsQ0FBRCxDQUE1Qjs7QUFFQSxRQUFJa2lCLFdBQVcsSUFBSUYsZUFBZixJQUFrQ0UsV0FBVyxJQUFJRCxhQUFyRCxFQUFvRTtBQUNsRS9NLE9BQUMsR0FBRyxZQUFKO0FBQ0QsS0FGRCxNQUVPLElBQUlnTixXQUFXLElBQUlELGFBQW5CLEVBQWtDO0FBQ3ZDL00sT0FBQyxHQUFHLFVBQUo7QUFDRCxLQUZNLE1BRUE7QUFDTEEsT0FBQyxHQUFHLFVBQUo7QUFDRDs7QUFFRCxXQUFPQSxDQUFQO0FBQ0QsR0FwQkQ7O0FBc0JBLFFBQU1rTixVQUFVLEdBQUcsTUFBTTtBQUN2QixRQUFJM0osT0FBTyxJQUFJRSxXQUFmLEVBQTRCO0FBQzFCLDBCQUNFO0FBQUEsZ0NBQ0UscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQSxzQkFERjtBQU1ELEtBUEQsTUFPTztBQUNMLDBCQUNFO0FBQUEsZ0NBQ0UscUVBQUMsZ0RBQUQ7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQU0sZUFBRyxFQUFDLE1BQVY7QUFBaUIsZ0JBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUtFO0FBQUssbUJBQVMsRUFBRTFrQixvRUFBTSxDQUFDYSxTQUF2QjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBRWIsb0VBQU0sQ0FBQ291QixPQUF2QjtBQUFBLG9DQUNFO0FBQUssdUJBQVMsRUFBRXB1QixvRUFBTSxDQUFDcXVCO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRTtBQUFLLHVCQUFTLEVBQUVydUIsb0VBQU0sQ0FBQ3N1QixjQUF2QjtBQUFBLHNDQUNFO0FBQ0UseUJBQVMsRUFBRXR1QixvRUFBTSxDQUFDdXVCLEVBRHBCO0FBRUUsbUJBQUcsRUFBRS9ILEVBQUUsR0FBR0EsRUFBSCxHQUFRO0FBRmpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFLRTtBQUFLLHFCQUFLLEVBQUU7QUFBRWdJLDRCQUFVLEVBQUU7QUFBZCxpQkFBWjtBQUFBLHdDQUNFO0FBQUssdUJBQUssRUFBRTtBQUFFNUYsNEJBQVEsRUFBRTtBQUFaLG1CQUFaO0FBQUEsNkJBQ0dpRixlQUFlLENBQUMvaEIsOENBQU0sRUFBUCxDQURsQixPQUMrQjRQLEtBQUssQ0FBQytTLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCM2xCLElBRHREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixlQUlFO0FBQUssdUJBQUssRUFBRTtBQUFFNmYsNEJBQVEsRUFBRTtBQUFaLG1CQUFaO0FBQUEsNEJBQW1DeEU7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTEYsZUFXRTtBQUFBLHVDQUNFLHFFQUFDLGdEQUFEO0FBQU0sc0JBQUksRUFBRSxlQUFaO0FBQUEseUNBQ0U7QUFBRyx5QkFBSyxFQUFFO0FBQUVnRyxvQ0FBYyxFQUFFO0FBQWxCLHFCQUFWO0FBQUEsNENBQ0U7QUFBSywrQkFBUyxFQUFFcHFCLG9FQUFNLENBQUM4a0IsS0FBdkI7QUFBOEIseUJBQUcsRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURGLEVBRUdBLEtBQUssZ0JBQ0o7QUFDRSwyQkFBSyxFQUFFO0FBQ0w2SixnQ0FBUSxFQUFFLFdBREw7QUFFTEMsMkJBQUcsRUFBRSxPQUZBO0FBR0xDLDZCQUFLLEVBQUU7QUFIRix1QkFEVDtBQUFBLDZDQU9FO0FBQ0UsNkJBQUssRUFBRTtBQUNMbHZCLCtCQUFLLEVBQUUsTUFERjtBQUVMQyxnQ0FBTSxFQUFFLE1BRkg7QUFHTEcsc0NBQVksRUFBRSxNQUhUO0FBSUxGLHlDQUFlLEVBQUUsU0FKWjtBQUtMOHVCLGtDQUFRLEVBQUUsVUFMTDtBQU1MbnVCLCtCQUFLLEVBQUUsT0FORjtBQU9Mb29CLGtDQUFRLEVBQUU7QUFQTCx5QkFEVDtBQUFBLCtDQVdFO0FBQUssK0JBQUssRUFBRTtBQUFFQyxxQ0FBUyxFQUFFO0FBQWIsMkJBQVo7QUFBQSxvQ0FDR2pFLGVBQWUsQ0FBQ3ZkLE1BQWhCLEdBQXlCLENBQXpCLEdBQ0d1ZCxlQUFlLENBQUN2ZCxNQURuQixHQUVHO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURJLEdBMEJGLElBNUJOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVhGLGVBNkNFO0FBQUsseUJBQVMsRUFBRXJILG9FQUFNLENBQUM4dUIsSUFBdkI7QUFBQSwyQkFDRzVHLGFBQWEsRUFEaEIsRUFFRzNvQixLQUFLLEtBQUssTUFBVixHQUNHa3FCLFVBQVUsRUFEYixHQUVHbHFCLEtBQUssS0FBSyxRQUFWLEdBQ0EwcUIsWUFBWSxFQURaLEdBRUExcUIsS0FBSyxLQUFLLFdBQVYsR0FDQXlxQixlQUFlLEVBRGYsR0FFQXpxQixLQUFLLEtBQUssWUFBVixHQUNBZ3JCLGVBQWUsRUFEZixHQUVBaHJCLEtBQUssS0FBSyxnQkFBVixHQUNBNHNCLGNBQWMsRUFEZCxHQUVBLEVBWk4sRUFhR29CLGdCQUFnQixFQWJuQixFQWNHZCxhQUFhLEVBZGhCLEVBZUdJLGNBQWMsRUFmakIsZUFnQkU7QUFBSyx1QkFBSyxFQUFFO0FBQUVrQyxnQ0FBWSxFQUFFO0FBQWhCO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQTdDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRixlQTBFRSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTFFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQThFRDtBQUNGLEdBeEZEOztBQXlGQSxTQUFPWixVQUFVLEVBQWpCO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDbC9DRDtBQUFnQmpMLHVFQUFELEtBQWU7QUFDNUI4TCxXQUFTLEVBQUUsTUFBT2xyQixJQUFQLElBQWdCO0FBQ3pCLFFBQUk7QUFDRm9mLGNBQVEsQ0FBQztBQUFFeUYsWUFBSSxFQUFFLFlBQVI7QUFBc0JzRyxlQUFPLEVBQUVuckI7QUFBL0IsT0FBRCxDQUFSO0FBQ0QsS0FGRCxDQUVFLE9BQU91SixDQUFQLEVBQVU7QUFDVmhLLGFBQU8sQ0FBQ0MsR0FBUixDQUFZK0osQ0FBWjtBQUNEO0FBQ0Y7QUFQMkIsQ0FBZixDQUFmLEU7Ozs7Ozs7Ozs7OztBQ0FBO0FBQWdCNlYsdUVBQUQsS0FBZTtBQUM1QmdNLGtCQUFnQixFQUFFLFlBQVk7QUFDNUIsUUFBSTtBQUNGaE0sY0FBUSxDQUFDO0FBQUV5RixZQUFJLEVBQUU7QUFBUixPQUFELENBQVI7QUFDRCxLQUZELENBRUUsT0FBT3RiLENBQVAsRUFBVTtBQUNWaEssYUFBTyxDQUFDQyxHQUFSLENBQVkrSixDQUFaO0FBQ0Q7QUFDRjtBQVAyQixDQUFmLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBZ0I2Vix1RUFBRCxLQUFlO0FBQzVCaU0scUJBQW1CLEVBQUUsWUFBWTtBQUMvQixRQUFJO0FBQ0ZqTSxjQUFRLENBQUM7QUFBRXlGLFlBQUksRUFBRTtBQUFSLE9BQUQsQ0FBUjtBQUNELEtBRkQsQ0FFRSxPQUFPdGIsQ0FBUCxFQUFVO0FBQ1ZoSyxhQUFPLENBQUNDLEdBQVIsQ0FBWStKLENBQVo7QUFDRDtBQUNGO0FBUDJCLENBQWYsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFnQjZWLHVFQUFELEtBQWU7QUFDNUJrTSwwQkFBd0IsRUFBRSxZQUFZO0FBQ3BDLFFBQUk7QUFDRmxNLGNBQVEsQ0FBQztBQUFFeUYsWUFBSSxFQUFFO0FBQVIsT0FBRCxDQUFSO0FBQ0QsS0FGRCxDQUVFLE9BQU90YixDQUFQLEVBQVU7QUFDVmhLLGFBQU8sQ0FBQ0MsR0FBUixDQUFZK0osQ0FBWjtBQUNEO0FBQ0Y7QUFQMkIsQ0FBZixDQUFmLEU7Ozs7Ozs7Ozs7OztBQ0FBO0FBQWdCNlYsdUVBQUQsS0FBZTtBQUM1Qm1NLHVCQUFxQixFQUFFLFlBQVk7QUFDakMsUUFBSTtBQUNGbk0sY0FBUSxDQUFDO0FBQUV5RixZQUFJLEVBQUU7QUFBUixPQUFELENBQVI7QUFDRCxLQUZELENBRUUsT0FBT3RiLENBQVAsRUFBVTtBQUNWaEssYUFBTyxDQUFDQyxHQUFSLENBQVkrSixDQUFaO0FBQ0Q7QUFDRjtBQVAyQixDQUFmLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBZ0I2Vix1RUFBRCxLQUFlO0FBQzVCcUosa0JBQWdCLEVBQUUsTUFBT3pvQixJQUFQLElBQWdCO0FBQ2hDLFFBQUk7QUFDRm9mLGNBQVEsQ0FBQztBQUFFeUYsWUFBSSxFQUFFLG9CQUFSO0FBQThCc0csZUFBTyxFQUFFbnJCO0FBQXZDLE9BQUQsQ0FBUjtBQUNELEtBRkQsQ0FFRSxPQUFPdUosQ0FBUCxFQUFVO0FBQ1ZoSyxhQUFPLENBQUNDLEdBQVIsQ0FBWStKLENBQVo7QUFDRDtBQUNGO0FBUDJCLENBQWYsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFnQjZWLHVFQUFELEtBQWU7QUFDNUIyRSxTQUFPLEVBQUUsTUFBTy9qQixJQUFQLElBQWdCO0FBQ3ZCLFFBQUk7QUFDRm9mLGNBQVEsQ0FBQztBQUFFeUYsWUFBSSxFQUFFLFVBQVI7QUFBb0JzRyxlQUFPLEVBQUVuckI7QUFBN0IsT0FBRCxDQUFSO0FBQ0QsS0FGRCxDQUVFLE9BQU91SixDQUFQLEVBQVU7QUFDVmhLLGFBQU8sQ0FBQ0MsR0FBUixDQUFZK0osQ0FBWjtBQUNEO0FBQ0Y7QUFQMkIsQ0FBZixDQUFmLEU7Ozs7Ozs7Ozs7OztBQ0FBO0FBQWdCNlYsdUVBQUQsS0FBZTtBQUM1Qm9NLGtCQUFnQixFQUFFLE1BQU94ckIsSUFBUCxJQUFnQjtBQUNoQyxRQUFJO0FBQ0ZvZixjQUFRLENBQUM7QUFBRXlGLFlBQUksRUFBRSxvQkFBUjtBQUE4QnNHLGVBQU8sRUFBRW5yQjtBQUF2QyxPQUFELENBQVI7QUFDRCxLQUZELENBRUUsT0FBT3VKLENBQVAsRUFBVTtBQUNWaEssYUFBTyxDQUFDQyxHQUFSLENBQVkrSixDQUFaO0FBQ0Q7QUFDRjtBQVAyQixDQUFmLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBZ0I2Vix1RUFBRCxLQUFlO0FBQzVCcU0sZ0JBQWMsRUFBRSxNQUFPenJCLElBQVAsSUFBZ0I7QUFDOUIsUUFBSTtBQUNGb2YsY0FBUSxDQUFDO0FBQUV5RixZQUFJLEVBQUUsa0JBQVI7QUFBNEJzRyxlQUFPLEVBQUVuckI7QUFBckMsT0FBRCxDQUFSO0FBQ0QsS0FGRCxDQUVFLE9BQU91SixDQUFQLEVBQVU7QUFDVmhLLGFBQU8sQ0FBQ0MsR0FBUixDQUFZK0osQ0FBWjtBQUNEO0FBQ0Y7QUFQMkIsQ0FBZixDQUFmLEU7Ozs7Ozs7Ozs7OztBQ0FBO0FBQWdCNlYsdUVBQUQsS0FBZTtBQUM1QnNNLGdCQUFjLEVBQUUsTUFBTzFyQixJQUFQLElBQWdCO0FBQzlCLFFBQUk7QUFDRm9mLGNBQVEsQ0FBQztBQUFFeUYsWUFBSSxFQUFFLG1CQUFSO0FBQTZCc0csZUFBTyxFQUFFbnJCO0FBQXRDLE9BQUQsQ0FBUjtBQUNELEtBRkQsQ0FFRSxPQUFPdUosQ0FBUCxFQUFVO0FBQ1ZoSyxhQUFPLENBQUNDLEdBQVIsQ0FBWStKLENBQVo7QUFDRDtBQUNGO0FBUDJCLENBQWYsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFnQjZWLHVFQUFELEtBQWU7QUFDNUJ1TSxtQkFBaUIsRUFBRSxNQUFPM3JCLElBQVAsSUFBZ0I7QUFDakMsUUFBSTtBQUNGb2YsY0FBUSxDQUFDO0FBQUV5RixZQUFJLEVBQUUscUJBQVI7QUFBK0JzRyxlQUFPLEVBQUVuckI7QUFBeEMsT0FBRCxDQUFSO0FBQ0QsS0FGRCxDQUVFLE9BQU91SixDQUFQLEVBQVU7QUFDVmhLLGFBQU8sQ0FBQ0MsR0FBUixDQUFZK0osQ0FBWjtBQUNEO0FBQ0Y7QUFQMkIsQ0FBZixDQUFmLEU7Ozs7Ozs7Ozs7OztBQ0FBO0FBQWdCNlYsdUVBQUQsS0FBZTtBQUM1QndLLG9CQUFrQixFQUFFLE1BQU81cEIsSUFBUCxJQUFnQjtBQUNsQyxRQUFJO0FBQ0ZvZixjQUFRLENBQUM7QUFBRXlGLFlBQUksRUFBRSxzQkFBUjtBQUFnQ3NHLGVBQU8sRUFBRW5yQjtBQUF6QyxPQUFELENBQVI7QUFDRCxLQUZELENBRUUsT0FBT3VKLENBQVAsRUFBVTtBQUNWaEssYUFBTyxDQUFDQyxHQUFSLENBQVkrSixDQUFaO0FBQ0Q7QUFDRjtBQVAyQixDQUFmLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBZ0I2Vix1RUFBRCxLQUFlO0FBQzVCMEsscUJBQW1CLEVBQUUsTUFBTzlwQixJQUFQLElBQWdCO0FBQ25DLFFBQUk7QUFDRm9mLGNBQVEsQ0FBQztBQUFFeUYsWUFBSSxFQUFFLHVCQUFSO0FBQWlDc0csZUFBTyxFQUFFbnJCO0FBQTFDLE9BQUQsQ0FBUjtBQUNELEtBRkQsQ0FFRSxPQUFPdUosQ0FBUCxFQUFVO0FBQ1ZoSyxhQUFPLENBQUNDLEdBQVIsQ0FBWStKLENBQVo7QUFDRDtBQUNGO0FBUDJCLENBQWYsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFnQjZWLHVFQUFELEtBQWU7QUFDNUJ3TSxxQkFBbUIsRUFBRSxNQUFPNXJCLElBQVAsSUFBZ0I7QUFDbkMsUUFBSTtBQUNGb2YsY0FBUSxDQUFDO0FBQUV5RixZQUFJLEVBQUUsdUJBQVI7QUFBaUNzRyxlQUFPLEVBQUVuckI7QUFBMUMsT0FBRCxDQUFSO0FBQ0QsS0FGRCxDQUVFLE9BQU91SixDQUFQLEVBQVU7QUFDVmhLLGFBQU8sQ0FBQ0MsR0FBUixDQUFZK0osQ0FBWjtBQUNEO0FBQ0Y7QUFQMkIsQ0FBZixDQUFmLEU7Ozs7Ozs7Ozs7OztBQ0FBO0FBQWdCNlYsdUVBQUQsS0FBZTtBQUM1QnlNLHVCQUFxQixFQUFFLE1BQU83ckIsSUFBUCxJQUFnQjtBQUNyQyxRQUFJO0FBQ0ZvZixjQUFRLENBQUM7QUFBRXlGLFlBQUksRUFBRSx5QkFBUjtBQUFtQ3NHLGVBQU8sRUFBRW5yQjtBQUE1QyxPQUFELENBQVI7QUFDRCxLQUZELENBRUUsT0FBT3VKLENBQVAsRUFBVTtBQUNWaEssYUFBTyxDQUFDQyxHQUFSLENBQVkrSixDQUFaO0FBQ0Q7QUFDRjtBQVAyQixDQUFmLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBZ0I2Vix1RUFBRCxLQUFlO0FBQzVCME0sb0JBQWtCLEVBQUUsTUFBTzlyQixJQUFQLElBQWdCO0FBQ2xDLFFBQUk7QUFDRm9mLGNBQVEsQ0FBQztBQUFFeUYsWUFBSSxFQUFFLHNCQUFSO0FBQWdDc0csZUFBTyxFQUFFbnJCO0FBQXpDLE9BQUQsQ0FBUjtBQUNELEtBRkQsQ0FFRSxPQUFPdUosQ0FBUCxFQUFVO0FBQ1ZoSyxhQUFPLENBQUNDLEdBQVIsQ0FBWStKLENBQVo7QUFDRDtBQUNGO0FBUDJCLENBQWYsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFnQjZWLHVFQUFELEtBQWU7QUFDNUIyTSxxQkFBbUIsRUFBRSxNQUFPL3JCLElBQVAsSUFBZ0I7QUFDbkMsUUFBSTtBQUNGb2YsY0FBUSxDQUFDO0FBQUV5RixZQUFJLEVBQUUsd0JBQVI7QUFBa0NzRyxlQUFPLEVBQUVuckI7QUFBM0MsT0FBRCxDQUFSO0FBQ0QsS0FGRCxDQUVFLE9BQU91SixDQUFQLEVBQVU7QUFDVmhLLGFBQU8sQ0FBQ0MsR0FBUixDQUFZK0osQ0FBWjtBQUNEO0FBQ0Y7QUFQMkIsQ0FBZixDQUFmLEU7Ozs7Ozs7Ozs7OztBQ0FBO0FBQWdCNlYsdUVBQUQsS0FBZTtBQUM1QjRNLDBCQUF3QixFQUFFLE1BQU9oc0IsSUFBUCxJQUFnQjtBQUN4QyxRQUFJO0FBQ0ZvZixjQUFRLENBQUM7QUFBRXlGLFlBQUksRUFBRSw2QkFBUjtBQUF1Q3NHLGVBQU8sRUFBRW5yQjtBQUFoRCxPQUFELENBQVI7QUFDRCxLQUZELENBRUUsT0FBT3VKLENBQVAsRUFBVTtBQUNWaEssYUFBTyxDQUFDQyxHQUFSLENBQVkrSixDQUFaO0FBQ0Q7QUFDRjtBQVAyQixDQUFmLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBZ0I2Vix1RUFBRCxLQUFlO0FBQzVCNk0sdUJBQXFCLEVBQUUsTUFBT2pzQixJQUFQLElBQWdCO0FBQ3JDLFFBQUk7QUFDRm9mLGNBQVEsQ0FBQztBQUFFeUYsWUFBSSxFQUFFLDBCQUFSO0FBQW9Dc0csZUFBTyxFQUFFbnJCO0FBQTdDLE9BQUQsQ0FBUjtBQUNELEtBRkQsQ0FFRSxPQUFPdUosQ0FBUCxFQUFVO0FBQ1ZoSyxhQUFPLENBQUNDLEdBQVIsQ0FBWStKLENBQVo7QUFDRDtBQUNGO0FBUDJCLENBQWYsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFnQjZWLHVFQUFELEtBQWU7QUFDNUI4TSxvQkFBa0IsRUFBRSxNQUFPbHNCLElBQVAsSUFBZ0I7QUFDbEMsUUFBSTtBQUNGb2YsY0FBUSxDQUFDO0FBQUV5RixZQUFJLEVBQUUsc0JBQVI7QUFBZ0NzRyxlQUFPLEVBQUVuckI7QUFBekMsT0FBRCxDQUFSO0FBQ0QsS0FGRCxDQUVFLE9BQU91SixDQUFQLEVBQVU7QUFDVmhLLGFBQU8sQ0FBQ0MsR0FBUixDQUFZK0osQ0FBWjtBQUNEO0FBQ0Y7QUFQMkIsQ0FBZixDQUFmLEU7Ozs7Ozs7Ozs7OztBQ0FBO0FBQWdCNlYsdUVBQUQsS0FBZTtBQUM1QitNLHdCQUFzQixFQUFFLE1BQU9uc0IsSUFBUCxJQUFnQjtBQUN0QyxRQUFJO0FBQ0ZvZixjQUFRLENBQUM7QUFBRXlGLFlBQUksRUFBRSwwQkFBUjtBQUFvQ3NHLGVBQU8sRUFBRW5yQjtBQUE3QyxPQUFELENBQVI7QUFDRCxLQUZELENBRUUsT0FBT3VKLENBQVAsRUFBVTtBQUNWaEssYUFBTyxDQUFDQyxHQUFSLENBQVkrSixDQUFaO0FBQ0Q7QUFDRjtBQVAyQixDQUFmLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBZ0I2Vix1RUFBRCxLQUFlO0FBQzVCZ04sb0JBQWtCLEVBQUUsTUFBT3BzQixJQUFQLElBQWdCO0FBQ2xDLFFBQUk7QUFDRm9mLGNBQVEsQ0FBQztBQUFFeUYsWUFBSSxFQUFFLHNCQUFSO0FBQWdDc0csZUFBTyxFQUFFbnJCO0FBQXpDLE9BQUQsQ0FBUjtBQUNELEtBRkQsQ0FFRSxPQUFPdUosQ0FBUCxFQUFVO0FBQ1ZoSyxhQUFPLENBQUNDLEdBQVIsQ0FBWStKLENBQVo7QUFDRDtBQUNGO0FBUDJCLENBQWYsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFnQjZWLHVFQUFELEtBQWU7QUFDNUJpTixrQkFBZ0IsRUFBRSxNQUFPcnNCLElBQVAsSUFBZ0I7QUFDaEMsUUFBSTtBQUNGb2YsY0FBUSxDQUFDO0FBQUV5RixZQUFJLEVBQUUsb0JBQVI7QUFBOEJzRyxlQUFPLEVBQUVuckI7QUFBdkMsT0FBRCxDQUFSO0FBQ0QsS0FGRCxDQUVFLE9BQU91SixDQUFQLEVBQVU7QUFDVmhLLGFBQU8sQ0FBQ0MsR0FBUixDQUFZK0osQ0FBWjtBQUNEO0FBQ0Y7QUFQMkIsQ0FBZixDQUFmLEU7Ozs7Ozs7Ozs7OztBQ0FBO0FBQWdCNlYsdUVBQUQsS0FBZTtBQUM1QmtOLGtCQUFnQixFQUFFLE1BQU90c0IsSUFBUCxJQUFnQjtBQUNoQyxRQUFJO0FBQ0ZvZixjQUFRLENBQUM7QUFBRXlGLFlBQUksRUFBRSxxQkFBUjtBQUErQnNHLGVBQU8sRUFBRW5yQjtBQUF4QyxPQUFELENBQVI7QUFDRCxLQUZELENBRUUsT0FBT3VKLENBQVAsRUFBVTtBQUNWaEssYUFBTyxDQUFDQyxHQUFSLENBQVkrSixDQUFaO0FBQ0Q7QUFDRjtBQVAyQixDQUFmLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBZ0I2Vix1RUFBRCxLQUFlO0FBQzVCbU4sdUJBQXFCLEVBQUUsTUFBT3ZzQixJQUFQLElBQWdCO0FBQ3JDLFFBQUk7QUFDRm9mLGNBQVEsQ0FBQztBQUFFeUYsWUFBSSxFQUFFLDBCQUFSO0FBQW9Dc0csZUFBTyxFQUFFbnJCO0FBQTdDLE9BQUQsQ0FBUjtBQUNELEtBRkQsQ0FFRSxPQUFPdUosQ0FBUCxFQUFVO0FBQ1ZoSyxhQUFPLENBQUNDLEdBQVIsQ0FBWStKLENBQVo7QUFDRDtBQUNGO0FBUDJCLENBQWYsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFnQjZWLHVFQUFELEtBQWU7QUFDNUJvTixpQkFBZSxFQUFFLE1BQU94c0IsSUFBUCxJQUFnQjtBQUMvQixRQUFJO0FBQ0ZvZixjQUFRLENBQUM7QUFBRXlGLFlBQUksRUFBRSxtQkFBUjtBQUE2QnNHLGVBQU8sRUFBRW5yQjtBQUF0QyxPQUFELENBQVI7QUFDRCxLQUZELENBRUUsT0FBT3VKLENBQVAsRUFBVTtBQUNWaEssYUFBTyxDQUFDQyxHQUFSLENBQVkrSixDQUFaO0FBQ0Q7QUFDRjtBQVAyQixDQUFmLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBZ0I2Vix1RUFBRCxLQUFlO0FBQzVCcU4scUJBQW1CLEVBQUUsTUFBT3pzQixJQUFQLElBQWdCO0FBQ25DLFFBQUk7QUFDRm9mLGNBQVEsQ0FBQztBQUFFeUYsWUFBSSxFQUFFLHVCQUFSO0FBQWlDc0csZUFBTyxFQUFFbnJCO0FBQTFDLE9BQUQsQ0FBUjtBQUNELEtBRkQsQ0FFRSxPQUFPdUosQ0FBUCxFQUFVO0FBQ1ZoSyxhQUFPLENBQUNDLEdBQVIsQ0FBWStKLENBQVo7QUFDRDtBQUNGO0FBUDJCLENBQWYsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFnQjZWLHVFQUFELEtBQWU7QUFDNUIwRSxXQUFTLEVBQUUsTUFBTzlqQixJQUFQLElBQWdCO0FBQ3pCLFFBQUk7QUFDRm9mLGNBQVEsQ0FBQztBQUFFeUYsWUFBSSxFQUFFLFlBQVI7QUFBc0JzRyxlQUFPLEVBQUVuckI7QUFBL0IsT0FBRCxDQUFSO0FBQ0QsS0FGRCxDQUVFLE9BQU91SixDQUFQLEVBQVU7QUFDVmhLLGFBQU8sQ0FBQ0MsR0FBUixDQUFZK0osQ0FBWjtBQUNEO0FBQ0Y7QUFQMkIsQ0FBZixDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBLE1BQU1nVyxNQUFNLGdCQUFHbU4sMkRBQWEsRUFBNUI7O0FBRUEsTUFBTUMsS0FBSyxHQUFHLENBQUM7QUFBRTF2QjtBQUFGLENBQUQsS0FBa0I7QUFDOUIsUUFBTTtBQUFBLE9BQUMyYSxLQUFEO0FBQUEsT0FBUXdIO0FBQVIsTUFBb0J3Tix3REFBVSxDQUNsQyxDQUFDQyxTQUFELEVBQVlDLE1BQVosS0FBdUI7QUFDckIsV0FBTztBQUNMbkMsaUJBQVcsRUFBRUEsa0VBQVcsQ0FBQ2tDLFNBQVMsQ0FBQ2xDLFdBQVgsRUFBd0JtQyxNQUF4QixDQURuQjtBQUVMQyxpQkFBVyxFQUFFQSxrRUFBVyxDQUFDRixTQUFTLENBQUNFLFdBQVgsRUFBd0JELE1BQXhCLENBRm5CO0FBR0xFLHNCQUFnQixFQUFFQSw0RUFBZ0IsQ0FBQ0gsU0FBUyxDQUFDRyxnQkFBWCxFQUE2QkYsTUFBN0IsQ0FIN0I7QUFJTEcsd0JBQWtCLEVBQUVBLGdGQUFrQixDQUNwQ0osU0FBUyxDQUFDSSxrQkFEMEIsRUFFcENILE1BRm9DLENBSmpDO0FBUUxJLDJCQUFxQixFQUFFQSxzRkFBcUIsQ0FDMUNMLFNBQVMsQ0FBQ0sscUJBRGdDLEVBRTFDSixNQUYwQyxDQVJ2QztBQVlMSyxxQkFBZSxFQUFFQSwwRUFBZSxDQUFDTixTQUFTLENBQUNNLGVBQVgsRUFBNEJMLE1BQTVCLENBWjNCO0FBYUxNLG1CQUFhLEVBQUVBLHNFQUFhLENBQUNQLFNBQVMsQ0FBQ08sYUFBWCxFQUEwQk4sTUFBMUI7QUFidkIsS0FBUDtBQWVELEdBakJpQyxFQWtCbEM7QUFDRW5DLGVBQVcsRUFBRTBDLDBEQURmO0FBRUVOLGVBQVcsRUFBRU8sMERBRmY7QUFHRU4sb0JBQWdCLEVBQUVPLG9FQUhwQjtBQUlFTixzQkFBa0IsRUFBRU8sd0VBSnRCO0FBS0VOLHlCQUFxQixFQUFFTyw4RUFMekI7QUFNRU4sbUJBQWUsRUFBRU8sa0VBTm5CO0FBT0VOLGlCQUFhLEVBQUVPLDhEQUFhQTtBQVA5QixHQWxCa0MsQ0FBcEM7QUE2QkEsUUFBTXRPLE9BQU8sR0FBR3VPLHFEQUFPLENBQ3JCLGtaQUNLOUosa0VBQVMsQ0FBQzFFLFFBQUQsQ0FEZCxHQUVLMkUsaUVBQU8sQ0FBQzNFLFFBQUQsQ0FGWixHQUdLOEwsbUVBQVMsQ0FBQzlMLFFBQUQsQ0FIZCxHQUtLdU0sMkVBQWlCLENBQUN2TSxRQUFELENBTHRCLEdBTUtvTSwwRUFBZ0IsQ0FBQ3BNLFFBQUQsQ0FOckIsR0FPS3FNLHdFQUFjLENBQUNyTSxRQUFELENBUG5CLEdBUUtzTSx3RUFBYyxDQUFDdE0sUUFBRCxDQVJuQixHQVNLaU0sNkVBQW1CLENBQUNqTSxRQUFELENBVHhCLEdBV0txTiw2RUFBbUIsQ0FBQ3JOLFFBQUQsQ0FYeEIsR0FZS2dOLDRFQUFrQixDQUFDaE4sUUFBRCxDQVp2QixHQWFLaU4sMEVBQWdCLENBQUNqTixRQUFELENBYnJCLEdBY0trTiwwRUFBZ0IsQ0FBQ2xOLFFBQUQsQ0FkckIsR0FlS21OLCtFQUFxQixDQUFDbk4sUUFBRCxDQWYxQixHQWdCS29OLHlFQUFlLENBQUNwTixRQUFELENBaEJwQixHQWlCS21NLCtFQUFxQixDQUFDbk0sUUFBRCxDQWpCMUIsR0FtQksrTSxnRkFBc0IsQ0FBQy9NLFFBQUQsQ0FuQjNCLEdBb0JLeU0sK0VBQXFCLENBQUN6TSxRQUFELENBcEIxQixHQXFCS3dNLDZFQUFtQixDQUFDeE0sUUFBRCxDQXJCeEIsR0FzQkswTSw0RUFBa0IsQ0FBQzFNLFFBQUQsQ0F0QnZCLEdBdUJLNk0sK0VBQXFCLENBQUM3TSxRQUFELENBdkIxQixHQXdCSzJNLDZFQUFtQixDQUFDM00sUUFBRCxDQXhCeEIsR0F5Qks0TSxrRkFBd0IsQ0FBQzVNLFFBQUQsQ0F6QjdCLEdBMEJLOE0sNEVBQWtCLENBQUM5TSxRQUFELENBMUJ2QixHQTJCS2tNLGtGQUF3QixDQUFDbE0sUUFBRCxDQTNCN0IsR0E2QktxSiwwRUFBZ0IsQ0FBQ3JKLFFBQUQsQ0E3QnJCLEdBK0JLd0ssNEVBQWtCLENBQUN4SyxRQUFELENBL0J2QixHQWdDSzBLLDZFQUFtQixDQUFDMUssUUFBRCxDQWhDeEIsR0FpQ0tnTSwwRUFBZ0IsQ0FBQ2hNLFFBQUQsQ0FqQ3JCLENBRHFCLEVBb0NyQixFQXBDcUIsQ0FBdkI7QUF1Q0Esc0JBQ0UscUVBQUMsTUFBRCxDQUFRLFFBQVI7QUFBaUIsU0FBSyxFQUFFO0FBQUV4SCxXQUFGO0FBQVN3SCxjQUFUO0FBQW1CQztBQUFuQixLQUF4QjtBQUFBLGNBQ0dwaUI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFLRCxDQTFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREEsTUFBTXl3QixlQUFlLEdBQUc7QUFDdEJHLGVBQWEsRUFBRTtBQURPLENBQXhCOztBQUlBLE1BQU1WLGVBQWUsR0FBRyxDQUFDdlYsS0FBRCxFQUFRa1YsTUFBUixLQUFtQjtBQUN6QyxVQUFRQSxNQUFNLENBQUNqSSxJQUFmO0FBQ0UsU0FBSyxvQkFBTDtBQUNFLDZDQUFZak4sS0FBWjtBQUFtQmlXLHFCQUFhLEVBQUVmLE1BQU0sQ0FBQzNCO0FBQXpDOztBQUNGO0FBQ0UsYUFBT3ZULEtBQVA7QUFKSjtBQU1ELENBUEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkEsTUFBTTBWLFdBQVcsR0FBRztBQUNsQjdJLE1BQUksRUFBRTtBQURZLENBQXBCOztBQUlBLE1BQU1zSSxXQUFXLEdBQUcsQ0FBQ25WLEtBQUQsRUFBUWtWLE1BQVIsS0FBbUI7QUFDckMsVUFBUUEsTUFBTSxDQUFDakksSUFBZjtBQUNFLFNBQUssVUFBTDtBQUNFakIsa0JBQVksQ0FBQ2tLLE9BQWIsQ0FBcUIsTUFBckIsRUFBNkJqdEIsSUFBSSxDQUFDQyxTQUFMLENBQWVnc0IsTUFBTSxDQUFDM0IsT0FBdEIsQ0FBN0I7QUFDQSw2Q0FBWXZULEtBQVo7QUFBbUI2TSxZQUFJLEVBQUVxSSxNQUFNLENBQUMzQjtBQUFoQzs7QUFDRixTQUFLLFlBQUw7QUFDRSxZQUFNNEMsUUFBUSxHQUFHbHRCLElBQUksQ0FBQzhpQixLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixDQUFYLENBQWpCO0FBQ0EsNkNBQVlqTSxLQUFaO0FBQW1CNk0sWUFBSSxFQUFFc0o7QUFBekI7O0FBQ0Y7QUFDRSxhQUFPblcsS0FBUDtBQVJKO0FBVUQsQ0FYRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQSxNQUFNK1YsYUFBYSxHQUFHO0FBQ3BCSyxZQUFVLEVBQUUsRUFEUTtBQUVwQkMsV0FBUyxFQUFFO0FBRlMsQ0FBdEI7O0FBS0EsTUFBTWIsYUFBYSxHQUFHLENBQUN4VixLQUFELEVBQVFrVixNQUFSLEtBQW1CO0FBQ3ZDLFVBQVFBLE1BQU0sQ0FBQ2pJLElBQWY7QUFDRSxTQUFLLHNCQUFMO0FBQ0UsNkNBQVlqTixLQUFaO0FBQW1CcVcsaUJBQVMsRUFBRW5CLE1BQU0sQ0FBQzNCO0FBQXJDOztBQUNGLFNBQUssdUJBQUw7QUFDRSw2Q0FBWXZULEtBQVo7QUFBbUJvVyxrQkFBVSxFQUFFbEIsTUFBTSxDQUFDM0I7QUFBdEM7O0FBQ0YsU0FBSyxvQkFBTDtBQUNFLCtCQUFZd0MsYUFBWjs7QUFDRjtBQUNFLGFBQU8vVixLQUFQO0FBUko7QUFVRCxDQVhEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBLE1BQU15VixXQUFXLEdBQUc7QUFDbEJ6QyxNQUFJLEVBQUU7QUFEWSxDQUFwQjs7QUFJQSxNQUFNRCxXQUFXLEdBQUcsQ0FBQy9TLEtBQUQsRUFBUWtWLE1BQVIsS0FBbUI7QUFDckMsVUFBUUEsTUFBTSxDQUFDakksSUFBZjtBQUNFLFNBQUssWUFBTDtBQUNFakIsa0JBQVksQ0FBQ2tLLE9BQWIsQ0FBcUIsTUFBckIsRUFBNkJqdEIsSUFBSSxDQUFDQyxTQUFMLENBQWVnc0IsTUFBTSxDQUFDM0IsT0FBdEIsQ0FBN0I7QUFDQSw2Q0FBWXZULEtBQVo7QUFBbUJnVCxZQUFJLEVBQUVrQyxNQUFNLENBQUMzQjtBQUFoQzs7QUFDRixTQUFLLGFBQUw7QUFDRXZILGtCQUFZLENBQUNzSyxLQUFiO0FBQ0EsNkNBQVl0VyxLQUFaO0FBQW1CZ1QsWUFBSSxFQUFFa0MsTUFBTSxDQUFDM0I7QUFBaEM7O0FBQ0YsU0FBSyxZQUFMO0FBQ0UsWUFBTTdyQixRQUFRLEdBQUd1QixJQUFJLENBQUM4aUIsS0FBTCxDQUFXQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsQ0FBWCxDQUFqQjtBQUNBLDZDQUFZak0sS0FBWjtBQUFtQmdULFlBQUksRUFBRXRyQjtBQUF6Qjs7QUFFRjtBQUNFLGFBQU9zWSxLQUFQO0FBWko7QUFjRCxDQWZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBLE1BQU0yVixnQkFBZ0IsR0FBRztBQUN2QlMsWUFBVSxFQUFFLEVBRFc7QUFFdkJDLFdBQVMsRUFBRSxFQUZZO0FBR3ZCRSxTQUFPLEVBQUUsRUFIYztBQUl2QkMsU0FBTyxFQUFFO0FBSmMsQ0FBekI7O0FBT0EsTUFBTXBCLGdCQUFnQixHQUFHLENBQUNwVixLQUFELEVBQVFrVixNQUFSLEtBQW1CO0FBQzFDLFVBQVFBLE1BQU0sQ0FBQ2pJLElBQWY7QUFDRSxTQUFLLHFCQUFMO0FBQ0UsNkNBQVlqTixLQUFaO0FBQW1Cb1csa0JBQVUsRUFBRWxCLE1BQU0sQ0FBQzNCO0FBQXRDOztBQUNGLFNBQUssb0JBQUw7QUFDRSw2Q0FBWXZULEtBQVo7QUFBbUJxVyxpQkFBUyxFQUFFbkIsTUFBTSxDQUFDM0I7QUFBckM7O0FBQ0YsU0FBSyxrQkFBTDtBQUNFLDZDQUFZdlQsS0FBWjtBQUFtQnVXLGVBQU8sRUFBRXJCLE1BQU0sQ0FBQzNCO0FBQW5DOztBQUNGLFNBQUssbUJBQUw7QUFDRSw2Q0FBWXZULEtBQVo7QUFBbUJ3VyxlQUFPLEVBQUV0QixNQUFNLENBQUMzQjtBQUFuQzs7QUFDRixTQUFLLHdCQUFMO0FBQ0UsK0JBQVlvQyxnQkFBWjs7QUFDRjtBQUNFLGFBQU8zVixLQUFQO0FBWko7QUFjRCxDQWZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBLE1BQU02VixxQkFBcUIsR0FBRztBQUM1Qk8sWUFBVSxFQUFFLEVBRGdCO0FBRTVCQyxXQUFTLEVBQUUsRUFGaUI7QUFHNUJFLFNBQU8sRUFBRSxFQUhtQjtBQUk1QkUsUUFBTSxFQUFFLEVBSm9CO0FBSzVCQyxXQUFTLEVBQUUsRUFMaUI7QUFNNUJGLFNBQU8sRUFBRSxFQU5tQjtBQU81QkcsY0FBWSxFQUFFLEVBUGM7QUFRNUJDLFFBQU0sRUFBRTtBQVJvQixDQUE5Qjs7QUFXQSxNQUFNdEIscUJBQXFCLEdBQUcsQ0FBQ3RWLEtBQUQsRUFBUWtWLE1BQVIsS0FBbUI7QUFDL0MsVUFBUUEsTUFBTSxDQUFDakksSUFBZjtBQUNFLFNBQUssMEJBQUw7QUFDRSw2Q0FBWWpOLEtBQVo7QUFBbUJvVyxrQkFBVSxFQUFFbEIsTUFBTSxDQUFDM0I7QUFBdEM7O0FBQ0YsU0FBSyx5QkFBTDtBQUNFLDZDQUFZdlQsS0FBWjtBQUFtQnFXLGlCQUFTLEVBQUVuQixNQUFNLENBQUMzQjtBQUFyQzs7QUFDRixTQUFLLHVCQUFMO0FBQ0UsNkNBQVl2VCxLQUFaO0FBQW1CdVcsZUFBTyxFQUFFckIsTUFBTSxDQUFDM0I7QUFBbkM7O0FBQ0YsU0FBSyxzQkFBTDtBQUNFLDZDQUFZdlQsS0FBWjtBQUFtQnlXLGNBQU0sRUFBRXZCLE1BQU0sQ0FBQzNCO0FBQWxDOztBQUNGLFNBQUssMEJBQUw7QUFDRSw2Q0FBWXZULEtBQVo7QUFBbUIwVyxpQkFBUyxFQUFFeEIsTUFBTSxDQUFDM0I7QUFBckM7O0FBQ0YsU0FBSyx3QkFBTDtBQUNFLDZDQUFZdlQsS0FBWjtBQUFtQndXLGVBQU8sRUFBRXRCLE1BQU0sQ0FBQzNCO0FBQW5DOztBQUNGLFNBQUssNkJBQUw7QUFDRSw2Q0FBWXZULEtBQVo7QUFBbUIyVyxvQkFBWSxFQUFFekIsTUFBTSxDQUFDM0I7QUFBeEM7O0FBQ0YsU0FBSyxzQkFBTDtBQUNFLDZDQUFZdlQsS0FBWjtBQUFtQjRXLGNBQU0sRUFBRTFCLE1BQU0sQ0FBQzNCO0FBQWxDOztBQUNGLFNBQUssNkJBQUw7QUFDRSwrQkFBWXNDLHFCQUFaOztBQUNGO0FBQ0UsYUFBTzdWLEtBQVA7QUFwQko7QUFzQkQsQ0F2QkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEEsTUFBTTRWLGtCQUFrQixHQUFHO0FBQ3pCUSxZQUFVLEVBQUUsRUFEYTtBQUV6QkMsV0FBUyxFQUFFLEVBRmM7QUFHekJFLFNBQU8sRUFBRSxFQUhnQjtBQUl6QkMsU0FBTyxFQUFFLEVBSmdCO0FBS3pCRyxjQUFZLEVBQUUsRUFMVztBQU16QkMsUUFBTSxFQUFFO0FBTmlCLENBQTNCOztBQVNBLE1BQU12QixrQkFBa0IsR0FBRyxDQUFDclYsS0FBRCxFQUFRa1YsTUFBUixLQUFtQjtBQUM1QyxVQUFRQSxNQUFNLENBQUNqSSxJQUFmO0FBQ0UsU0FBSyx1QkFBTDtBQUNFLDZDQUFZak4sS0FBWjtBQUFtQm9XLGtCQUFVLEVBQUVsQixNQUFNLENBQUMzQjtBQUF0Qzs7QUFDRixTQUFLLHNCQUFMO0FBQ0UsNkNBQVl2VCxLQUFaO0FBQW1CcVcsaUJBQVMsRUFBRW5CLE1BQU0sQ0FBQzNCO0FBQXJDOztBQUNGLFNBQUssb0JBQUw7QUFDRSw2Q0FBWXZULEtBQVo7QUFBbUJ1VyxlQUFPLEVBQUVyQixNQUFNLENBQUMzQjtBQUFuQzs7QUFDRixTQUFLLHFCQUFMO0FBQ0UsNkNBQVl2VCxLQUFaO0FBQW1Cd1csZUFBTyxFQUFFdEIsTUFBTSxDQUFDM0I7QUFBbkM7O0FBQ0YsU0FBSywwQkFBTDtBQUNFLDZDQUFZdlQsS0FBWjtBQUFtQjJXLG9CQUFZLEVBQUV6QixNQUFNLENBQUMzQjtBQUF4Qzs7QUFDRixTQUFLLG1CQUFMO0FBQ0UsNkNBQVl2VCxLQUFaO0FBQW1CNFcsY0FBTSxFQUFFMUIsTUFBTSxDQUFDM0I7QUFBbEM7O0FBQ0YsU0FBSywwQkFBTDtBQUNFLCtCQUFZcUMsa0JBQVo7O0FBQ0Y7QUFDRSxhQUFPNVYsS0FBUDtBQWhCSjtBQWtCRCxDQW5CRDs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsTUFBTTZXLHNCQUFzQixHQUFHO0FBQzdCO0FBQ0FDLG9CQUFrQixFQUFFLFlBQVk7QUFDOUIsV0FBTzlLLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixXQUFyQixDQUFQO0FBQ0QsR0FKNEI7QUFNN0I4SyxtQkFBaUIsRUFBRSxZQUFZO0FBQzdCLFdBQU8vSyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsQ0FBUDtBQUNELEdBUjRCO0FBVTdCO0FBQ0ErSyxNQUFJLEVBQUUsa0JBQWtCO0FBQ3RCLFFBQUksQ0FBQ0MsbURBQVEsQ0FBQ0MsSUFBVCxDQUFjdnJCLE1BQW5CLEVBQTJCO0FBQ3pCc3JCLHlEQUFRLENBQUNFLGFBQVQsQ0FBdUI7QUFDckJudkIsY0FBTSxFQUFFLHlDQURhO0FBRXJCb3ZCLGtCQUFVLEVBQUUsK0JBRlM7QUFHckJDLGlCQUFTLEVBQUUsZUFIVTtBQUlyQkMscUJBQWEsRUFBRSwyQkFKTTtBQUtyQkMseUJBQWlCLEVBQUUsY0FMRTtBQU1yQkMsYUFBSyxFQUFFO0FBTmMsT0FBdkI7O0FBU0EsVUFBSTtBQUNGLGNBQU1DLFNBQVMsR0FBR1IsbURBQVEsQ0FBQ1EsU0FBVCxFQUFsQjtBQUNBLGNBQU1DLGtCQUFrQixHQUFHLE1BQU0sS0FBS1osa0JBQUwsRUFBakM7QUFDQSxjQUFNQyxpQkFBaUIsR0FBRyxNQUFNLEtBQUtBLGlCQUFMLEVBQWhDLENBSEUsQ0FLRjs7QUFDQSxZQUFJVyxrQkFBa0IsS0FBSyxJQUEzQixFQUFpQztBQUMvQixpQkFBT0Esa0JBQVA7QUFDRDs7QUFFRCxZQUFJWCxpQkFBSixFQUF1QjtBQUNyQjtBQUNBLGdCQUFNbnNCLE1BQU0sR0FBRyxNQUFNK3NCLFlBQVksQ0FBQ0MsaUJBQWIsRUFBckI7O0FBQ0EsY0FBSWh0QixNQUFNLElBQUlBLE1BQU0sS0FBSyxTQUF6QixFQUFvQztBQUNsQztBQUNBLGtCQUFNaXRCLFNBQVMsR0FBRyxNQUFNSixTQUFTLENBQUNLLFFBQVYsRUFBeEI7O0FBQ0EsZ0JBQUlELFNBQUosRUFBZTtBQUNiO0FBQ0E3TCwwQkFBWSxDQUFDa0ssT0FBYixDQUFxQixXQUFyQixFQUFrQzJCLFNBQWxDLEVBRmEsQ0FHYjs7QUFDQSxxQkFBT0EsU0FBUDtBQUNEO0FBQ0Y7QUFDRjtBQUNGLE9BeEJELENBd0JFLE9BQU81ZixLQUFQLEVBQWM7QUFDZHRRLGVBQU8sQ0FBQ3NRLEtBQVIsQ0FBY0EsS0FBZDtBQUNBLGVBQU8sSUFBUDtBQUNEO0FBQ0Y7QUFDRjtBQW5ENEIsQ0FBL0I7Ozs7Ozs7Ozs7OztBQ0hBLHlDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc3hcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jb21wb25lbnRzL0JvdE5hdi5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgTmF2ID0gKHsgZm9jdXMgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHZhciBhY3RpdmUgPSAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgd2lkdGg6IFwiNXB4XCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjVweFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmViODAwXCIsXHJcbiAgICAgICAgbWFyZ2luOiBcIjVweCBhdXRvXCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwcHhcIixcclxuICAgICAgfX1cclxuICAgIC8+XHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZfY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZfYm94fT5cclxuICAgICAgICA8TGluayBocmVmPXtcIi9cIn0+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09IFwiL1wiID8gXCIvaG9tZS1uYXYuc3ZnXCIgOiBcIi9ob21lLW5hdjEuc3ZnXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL1wiID8gYWN0aXZlIDogXCJcIn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e1wiL2NhbGVuZGFyXCJ9PlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBcIi9jYWxlbmRhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIi9jYWxlbmRhci1uYXYuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiL2NhbGVuZGFyLW5hdjEuc3ZnXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL2NhbGVuZGFyXCIgPyBhY3RpdmUgOiBcIlwifVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj17XCIvcmV3YXJkXCJ9PlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBcIi9yZXdhcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gXCIvYXdhcmQtbmF2LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIi9hd2FyZC1uYXYxLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7cm91dGVyLnBhdGhuYW1lID09PSBcIi9yZXdhcmRcIiA/IGFjdGl2ZSA6IFwiXCJ9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPXtcIi9hbm5vdW5jZW1lbnRcIn0+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2Fubm91bmNlbWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIi9yZXdhcmRzLW5hdi5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCIvcmV3YXJkcy1uYXYxLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7cm91dGVyLnBhdGhuYW1lID09PSBcIi9hbm5vdW5jZW1lbnRcIiA/IGFjdGl2ZSA6IFwiXCJ9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPXtcIi9wcm9maWxlXCJ9PlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBcIi9wcm9maWxlXCJcclxuICAgICAgICAgICAgICAgICAgICA/IFwiL3Byb2ZpbGUtbmF2LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIi9wcm9maWxlLW5hdjEuc3ZnXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL3Byb2ZpbGVcIiA/IGFjdGl2ZSA6IFwiXCJ9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NvbXBvbmVudHMvQnV0dG9uLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IEJ1dHRvbiA9ICh7IG9uQ2xpY2ssIHRleHQsIHN1Ym1pdCwgY29sb3IgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIHR5cGU9e3N1Ym1pdCA/IFwic3VibWl0XCIgOiBcIlwifVxyXG4gICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgIGNvbG9yID09PSBcIndoaXRlXCJcclxuICAgICAgICAgID8gc3R5bGVzLmNvbnRhaW5lcl93aGl0ZVxyXG4gICAgICAgICAgOiBjb2xvciA9PT0gXCJvcmFuZ2VcIlxyXG4gICAgICAgICAgPyBzdHlsZXMuY29udGFpbmVyX29yYW5nZVxyXG4gICAgICAgICAgOiBjb2xvciA9PT0gXCJyZWRcIlxyXG4gICAgICAgICAgPyBzdHlsZXMuY29udGFpbmVyX3JlZFxyXG4gICAgICAgICAgOiBjb2xvciA9PT0gXCJkaXNhYmxlXCJcclxuICAgICAgICAgID8gc3R5bGVzLmNvbnRhaW5lcl9kaXNhYmxlXHJcbiAgICAgICAgICA6IHN0eWxlcy5jb250YWluZXJcclxuICAgICAgfVxyXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgPlxyXG4gICAgICB7dGV4dH1cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NvbXBvbmVudHMvQ2FyZC5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBDYXJkID0gKHsgY2hpbGRyZW4sIHN0eWxlLCBzaGFkb3cgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhaW5lcn0gJHtzaGFkb3cgPyBzdHlsZXMuc2hhZG93IDogXCJcIn1gfVxyXG4gICAgICBzdHlsZT17c3R5bGUgPyBzdHlsZSA6IHt9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvY29tcG9uZW50cy9DaGVja2JveC5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBDaGVja2JveCA9ICh7IHRleHQsIGNoZWNrZWQsIGNvbG9yLCBvbkNsaWNrLCBkaXNhYmxlZCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9IG9uQ2hhbmdlPXtvbkNsaWNrfT5cclxuICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e2NoZWNrZWR9IGRpc2FibGVkPXtkaXNhYmxlZH0gLz5cclxuICAgICAge3RleHR9XHJcbiAgICAgIDxzcGFuXHJcbiAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgIGNvbG9yID09PSBcImdyZWVuXCJcclxuICAgICAgICAgICAgPyBzdHlsZXMuY2hlY2ttYXJrX2dyZWVuXHJcbiAgICAgICAgICAgIDogY29sb3IgPT09IFwieWVsbG93XCJcclxuICAgICAgICAgICAgPyBzdHlsZXMuY2hlY2ttYXJrX3llbGxvd1xyXG4gICAgICAgICAgICA6IHN0eWxlcy5jaGVja21hcmtfZ3JlZW5cclxuICAgICAgICB9XHJcbiAgICAgID48L3NwYW4+XHJcbiAgICA8L2xhYmVsPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveDtcclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NvbXBvbmVudHMvU3Bpbm5lci5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBTcGlubmVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3Bpbm5lcn0+XHJcbiAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgIDxkaXYgLz5cclxuICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgIDxkaXYgLz5cclxuICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgIDxkaXYgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3Bpbm5lcjtcclxuIiwidmFyIEFQSV9VUkwgPSBcImh0dHBzOi8vbS1vbmUua2FsYmUuY28uaWQ6ODI0My90L2thbGJlLmNvLmlkXCI7XHJcbnZhciBBUElfVVNFUiA9IFwiL1VzZXJQcm9maWxlRXh0ZXJuYWwvdjEvYXBpXCI7XHJcbnZhciBBUElfTUFTVEVSID0gXCIvU2FrYW1vck1hc3RlckRhdGEvdjEvYXBpXCI7XHJcbnZhciBBUElfVklTSVRfUExBTiA9IFwiL1Nha2Ftb3JBY3Rpdml0eVZpc2l0UGxhbi92MS9hcGlcIjtcclxudmFyIEFQSV9WSVNJVF9VTlBMQU4gPSBcIi9TYWthbW9yQWN0aXZpdHlWaXNpdFVuUGxhbi92MS9hcGlcIjtcclxudmFyIEFQSV9WSVNJVF9TUFJFQURJTkcgPSBcIi9TYWthbW9yQWN0aXZpdHlTcHJlYWRpbmcvdjEvYXBpXCI7XHJcbnZhciBBUElfV09SS19WSVNJVCA9IFwiL1Nha2Ftb3JBY3Rpdml0eVdvcmtWaXNpdC92MS9hcGlcIjtcclxudmFyIEFQSV9DQUxFTkRBUl9QUk9HUkFNID0gXCIvU2FrYW1vckthbGVuZGVyUHJvZ3JhbS92MS9hcGlcIjtcclxudmFyIEFQSV9DQUxFTkRBUl9QUk9NTyA9IFwiL1Nha2Ftb3JJbmZvUHJvbW8vdjEvYXBpXCI7XHJcbnZhciBBUElfQU5OT1VOQ0VNRU5UID0gXCIvU2FrYW1vckFubm91bmNlbWVudC92MS9hcGlcIjtcclxudmFyIEFQSV9JTkNFTlRJVkUgPSBcIi9TYWthbW9ySW5jZW50aXZlL3YxL2FwaVwiO1xyXG52YXIgQVBJX0JFTkVGSVQgPSBcIi9TYWthbW9yQmVuZWZpdHMvdjEvYXBpXCI7XHJcbnZhciBBUElfQVBQUk9WQUwgPSBcIi9BcHByb3ZhbEFQSS92MS9hcGlcIjtcclxuXHJcbnZhciBUT0tFTiA9XHJcbiAgXCJleUo0TlhRaU9pSlphbXQ1V2tSVk0wNXRSVFJaYlZacVQxUmplRTR5UlRSTmJWWnJUMWRTYWsxWFZtaFpWR2hvV1dwamVFOVVaekpOZW10NFdWRTlQU0lzSW10cFpDSTZJbWRoZEdWM1lYbGZZMlZ5ZEdsbWFXTmhkR1ZmWVd4cFlYTWlMQ0owZVhBaU9pSktWMVFpTENKaGJHY2lPaUpTVXpJMU5pSjkuZXlKemRXSWlPaUp1YjJKdmJpNWhibVJ5WVVCcllXeGlaUzVqYnk1cFpDSXNJbUZ3Y0d4cFkyRjBhVzl1SWpwN0ltOTNibVZ5SWpvaWJtOWliMjR1WVc1a2NtRkFhMkZzWW1VdVkyOHVhV1FpTENKMGFXVnlVWFZ2ZEdGVWVYQmxJanB1ZFd4c0xDSjBhV1Z5SWpvaVZXNXNhVzFwZEdWa0lpd2libUZ0WlNJNklsTmhhMkZ0YjNJZ01pNHdJaXdpYVdRaU9qRTVMQ0oxZFdsa0lqb2lNVFE1WldVME5tVXRaREUzTmkwME5XUXhMV0UzTm1FdE9UQXpNMlJoTnpjNE9UVTRJbjBzSW1semN5STZJbWgwZEhCek9sd3ZYQzl0TFc5dVpTNXJZV3hpWlM1amJ5NXBaRG81TkRRelhDOXZZWFYwYURKY0wzUnZhMlZ1SWl3aWRHbGxja2x1Wm04aU9uc2lWVzVzYVcxcGRHVmtJanA3SW5ScFpYSlJkVzkwWVZSNWNHVWlPaUp5WlhGMVpYTjBRMjkxYm5RaUxDSm5jbUZ3YUZGTVRXRjRRMjl0Y0d4bGVHbDBlU0k2TUN3aVozSmhjR2hSVEUxaGVFUmxjSFJvSWpvd0xDSnpkRzl3VDI1UmRXOTBZVkpsWVdOb0lqcDBjblZsTENKemNHbHJaVUZ5Y21WemRFeHBiV2wwSWpvd0xDSnpjR2xyWlVGeWNtVnpkRlZ1YVhRaU9tNTFiR3g5ZlN3aWEyVjVkSGx3WlNJNklsTkJUa1JDVDFnaUxDSndaWEp0YVhSMFpXUlNaV1psY21WeUlqb2lJaXdpYzNWaWMyTnlhV0psWkVGUVNYTWlPbHQ3SW5OMVluTmpjbWxpWlhKVVpXNWhiblJFYjIxaGFXNGlPaUpyWVd4aVpTNWpieTVwWkNJc0ltNWhiV1VpT2lKVFlXdGhiVzl5UVdOMGFYWnBkSGxXYVhOcGRGQnNZVzRpTENKamIyNTBaWGgwSWpvaVhDOTBYQzlyWVd4aVpTNWpieTVwWkZ3dlUyRnJZVzF2Y2tGamRHbDJhWFI1Vm1semFYUlFiR0Z1WEM5Mk1TSXNJbkIxWW14cGMyaGxjaUk2SW01dlltOXVMbUZ1WkhKaFFHdGhiR0psTG1OdkxtbGtJaXdpZG1WeWMybHZiaUk2SW5ZeElpd2ljM1ZpYzJOeWFYQjBhVzl1VkdsbGNpSTZJbFZ1YkdsdGFYUmxaQ0o5TEhzaWMzVmljMk55YVdKbGNsUmxibUZ1ZEVSdmJXRnBiaUk2SW10aGJHSmxMbU52TG1sa0lpd2libUZ0WlNJNklsVnpaWEpRY205bWFXeGxSWGgwWlhKdVlXd2lMQ0pqYjI1MFpYaDBJam9pWEM5MFhDOXJZV3hpWlM1amJ5NXBaRnd2VlhObGNsQnliMlpwYkdWRmVIUmxjbTVoYkZ3dmRqRWlMQ0p3ZFdKc2FYTm9aWElpT2lKdWIySnZiaTVoYm1SeVlVQnJZV3hpWlM1amJ5NXBaQ0lzSW5abGNuTnBiMjRpT2lKMk1TSXNJbk4xWW5OamNtbHdkR2x2YmxScFpYSWlPaUpWYm14cGJXbDBaV1FpZlN4N0luTjFZbk5qY21saVpYSlVaVzVoYm5SRWIyMWhhVzRpT2lKcllXeGlaUzVqYnk1cFpDSXNJbTVoYldVaU9pSlRZV3RoYlc5eVRXRnpkR1Z5UkdGMFlTSXNJbU52Ym5SbGVIUWlPaUpjTDNSY0wydGhiR0psTG1OdkxtbGtYQzlUWVd0aGJXOXlUV0Z6ZEdWeVJHRjBZVnd2ZGpFaUxDSndkV0pzYVhOb1pYSWlPaUp1YjJKdmJpNWhibVJ5WVVCcllXeGlaUzVqYnk1cFpDSXNJblpsY25OcGIyNGlPaUoyTVNJc0luTjFZbk5qY21sd2RHbHZibFJwWlhJaU9pSlZibXhwYldsMFpXUWlmU3g3SW5OMVluTmpjbWxpWlhKVVpXNWhiblJFYjIxaGFXNGlPaUpyWVd4aVpTNWpieTVwWkNJc0ltNWhiV1VpT2lKVFlXdGhiVzl5UVdOMGFYWnBkSGxUY0hKbFlXUnBibWNpTENKamIyNTBaWGgwSWpvaVhDOTBYQzlyWVd4aVpTNWpieTVwWkZ3dlUyRnJZVzF2Y2tGamRHbDJhWFI1VTNCeVpXRmthVzVuWEM5Mk1TSXNJbkIxWW14cGMyaGxjaUk2SW01dlltOXVMbUZ1WkhKaFFHdGhiR0psTG1OdkxtbGtJaXdpZG1WeWMybHZiaUk2SW5ZeElpd2ljM1ZpYzJOeWFYQjBhVzl1VkdsbGNpSTZJbFZ1YkdsdGFYUmxaQ0o5TEhzaWMzVmljMk55YVdKbGNsUmxibUZ1ZEVSdmJXRnBiaUk2SW10aGJHSmxMbU52TG1sa0lpd2libUZ0WlNJNklsTmhhMkZ0YjNKQlkzUnBkbWwwZVZacGMybDBWVzVRYkdGdUlpd2lZMjl1ZEdWNGRDSTZJbHd2ZEZ3dmEyRnNZbVV1WTI4dWFXUmNMMU5oYTJGdGIzSkJZM1JwZG1sMGVWWnBjMmwwVlc1UWJHRnVYQzkyTVNJc0luQjFZbXhwYzJobGNpSTZJbTV2WW05dUxtRnVaSEpoUUd0aGJHSmxMbU52TG1sa0lpd2lkbVZ5YzJsdmJpSTZJbll4SWl3aWMzVmljMk55YVhCMGFXOXVWR2xsY2lJNklsVnViR2x0YVhSbFpDSjlMSHNpYzNWaWMyTnlhV0psY2xSbGJtRnVkRVJ2YldGcGJpSTZJbXRoYkdKbExtTnZMbWxrSWl3aWJtRnRaU0k2SWxOaGEyRnRiM0pCWTNScGRtbDBlVmR2Y210V2FYTnBkQ0lzSW1OdmJuUmxlSFFpT2lKY0wzUmNMMnRoYkdKbExtTnZMbWxrWEM5VFlXdGhiVzl5UVdOMGFYWnBkSGxYYjNKclZtbHphWFJjTDNZeElpd2ljSFZpYkdsemFHVnlJam9pYm05aWIyNHVZVzVrY21GQWEyRnNZbVV1WTI4dWFXUWlMQ0oyWlhKemFXOXVJam9pZGpFaUxDSnpkV0p6WTNKcGNIUnBiMjVVYVdWeUlqb2lWVzVzYVcxcGRHVmtJbjBzZXlKemRXSnpZM0pwWW1WeVZHVnVZVzUwUkc5dFlXbHVJam9pYTJGc1ltVXVZMjh1YVdRaUxDSnVZVzFsSWpvaVUyRnJZVzF2Y2t0aGJHVnVaR1Z5VUhKdlozSmhiU0lzSW1OdmJuUmxlSFFpT2lKY0wzUmNMMnRoYkdKbExtTnZMbWxrWEM5VFlXdGhiVzl5UzJGc1pXNWtaWEpRY205bmNtRnRYQzkyTVNJc0luQjFZbXhwYzJobGNpSTZJbTV2WW05dUxtRnVaSEpoUUd0aGJHSmxMbU52TG1sa0lpd2lkbVZ5YzJsdmJpSTZJbll4SWl3aWMzVmljMk55YVhCMGFXOXVWR2xsY2lJNklsVnViR2x0YVhSbFpDSjlMSHNpYzNWaWMyTnlhV0psY2xSbGJtRnVkRVJ2YldGcGJpSTZJbXRoYkdKbExtTnZMbWxrSWl3aWJtRnRaU0k2SWxOaGEyRnRiM0pKYm1adlVISnZiVzhpTENKamIyNTBaWGgwSWpvaVhDOTBYQzlyWVd4aVpTNWpieTVwWkZ3dlUyRnJZVzF2Y2tsdVptOVFjbTl0YjF3dmRqRWlMQ0p3ZFdKc2FYTm9aWElpT2lKdWIySnZiaTVoYm1SeVlVQnJZV3hpWlM1amJ5NXBaQ0lzSW5abGNuTnBiMjRpT2lKMk1TSXNJbk4xWW5OamNtbHdkR2x2YmxScFpYSWlPaUpWYm14cGJXbDBaV1FpZlN4N0luTjFZbk5qY21saVpYSlVaVzVoYm5SRWIyMWhhVzRpT2lKcllXeGlaUzVqYnk1cFpDSXNJbTVoYldVaU9pSlRZV3RoYlc5eVFXNXViM1Z1WTJWdFpXNTBJaXdpWTI5dWRHVjRkQ0k2SWx3dmRGd3ZhMkZzWW1VdVkyOHVhV1JjTDFOaGEyRnRiM0pCYm01dmRXNWpaVzFsYm5SY0wzWXhJaXdpY0hWaWJHbHphR1Z5SWpvaWJtOWliMjR1WVc1a2NtRkFhMkZzWW1VdVkyOHVhV1FpTENKMlpYSnphVzl1SWpvaWRqRWlMQ0p6ZFdKelkzSnBjSFJwYjI1VWFXVnlJam9pVlc1c2FXMXBkR1ZrSW4wc2V5SnpkV0p6WTNKcFltVnlWR1Z1WVc1MFJHOXRZV2x1SWpvaWEyRnNZbVV1WTI4dWFXUWlMQ0p1WVcxbElqb2lRWFYwYUc5eWFYcGhkR2x2YmtGUVNTSXNJbU52Ym5SbGVIUWlPaUpjTDNSY0wydGhiR0psTG1OdkxtbGtYQzlCZFhSb2IzSnBlbUYwYVc5dVFWQkpYQzkyTVNJc0luQjFZbXhwYzJobGNpSTZJbTExYUdGdGJXRmtMbVJwWVc1cFFHdGhiR0psTG1OdkxtbGtJaXdpZG1WeWMybHZiaUk2SW5ZeElpd2ljM1ZpYzJOeWFYQjBhVzl1VkdsbGNpSTZJbFZ1YkdsdGFYUmxaQ0o5TEhzaWMzVmljMk55YVdKbGNsUmxibUZ1ZEVSdmJXRnBiaUk2SW10aGJHSmxMbU52TG1sa0lpd2libUZ0WlNJNklsSnZiR1VpTENKamIyNTBaWGgwSWpvaVhDOTBYQzlyWVd4aVpTNWpieTVwWkZ3dlVtOXNaVnd2ZGpFaUxDSndkV0pzYVhOb1pYSWlPaUp0ZFdoaGJXMWhaQzVvYVdSaGVXRjBkV3hzTVVCcllXeGlaUzVqYnk1cFpDSXNJblpsY25OcGIyNGlPaUoyTVNJc0luTjFZbk5qY21sd2RHbHZibFJwWlhJaU9pSlZibXhwYldsMFpXUWlmU3g3SW5OMVluTmpjbWxpWlhKVVpXNWhiblJFYjIxaGFXNGlPaUpyWVd4aVpTNWpieTVwWkNJc0ltNWhiV1VpT2lKTmIyUjFiR1ZCVUVraUxDSmpiMjUwWlhoMElqb2lYQzkwWEM5cllXeGlaUzVqYnk1cFpGd3ZUVzlrZFd4bFFWQkpYQzkyTVNJc0luQjFZbXhwYzJobGNpSTZJbTExYUdGdGJXRmtMbVJwWVc1cFFHdGhiR0psTG1OdkxtbGtJaXdpZG1WeWMybHZiaUk2SW5ZeElpd2ljM1ZpYzJOeWFYQjBhVzl1VkdsbGNpSTZJbFZ1YkdsdGFYUmxaQ0o5TEhzaWMzVmljMk55YVdKbGNsUmxibUZ1ZEVSdmJXRnBiaUk2SW10aGJHSmxMbU52TG1sa0lpd2libUZ0WlNJNklsVnpaWEpRY205bWFXeGxRVkJKSWl3aVkyOXVkR1Y0ZENJNklsd3ZkRnd2YTJGc1ltVXVZMjh1YVdSY0wxVnpaWEpRY205bWFXeGxRVkJKWEM5Mk1TSXNJbkIxWW14cGMyaGxjaUk2SW0xMWFHRnRiV0ZrTG1ScFlXNXBRR3RoYkdKbExtTnZMbWxrSWl3aWRtVnljMmx2YmlJNkluWXhJaXdpYzNWaWMyTnlhWEIwYVc5dVZHbGxjaUk2SWxWdWJHbHRhWFJsWkNKOUxIc2ljM1ZpYzJOeWFXSmxjbFJsYm1GdWRFUnZiV0ZwYmlJNkltdGhiR0psTG1OdkxtbGtJaXdpYm1GdFpTSTZJbE5oYTJGdGIzSkpibU5sYm5ScGRtVWlMQ0pqYjI1MFpYaDBJam9pWEM5MFhDOXJZV3hpWlM1amJ5NXBaRnd2VTJGcllXMXZja2x1WTJWdWRHbDJaVnd2ZGpFaUxDSndkV0pzYVhOb1pYSWlPaUp1YjJKdmJpNWhibVJ5WVVCcllXeGlaUzVqYnk1cFpDSXNJblpsY25OcGIyNGlPaUoyTVNJc0luTjFZbk5qY21sd2RHbHZibFJwWlhJaU9pSlZibXhwYldsMFpXUWlmU3g3SW5OMVluTmpjbWxpWlhKVVpXNWhiblJFYjIxaGFXNGlPaUpyWVd4aVpTNWpieTVwWkNJc0ltNWhiV1VpT2lKVFlXdGhiVzl5UW1WdVpXWnBkSE1pTENKamIyNTBaWGgwSWpvaVhDOTBYQzlyWVd4aVpTNWpieTVwWkZ3dlUyRnJZVzF2Y2tKbGJtVm1hWFJ6WEM5Mk1TSXNJbkIxWW14cGMyaGxjaUk2SW01dlltOXVMbUZ1WkhKaFFHdGhiR0psTG1OdkxtbGtJaXdpZG1WeWMybHZiaUk2SW5ZeElpd2ljM1ZpYzJOeWFYQjBhVzl1VkdsbGNpSTZJbFZ1YkdsdGFYUmxaQ0o5TEhzaWMzVmljMk55YVdKbGNsUmxibUZ1ZEVSdmJXRnBiaUk2SW10aGJHSmxMbU52TG1sa0lpd2libUZ0WlNJNklrUmhlVTltWmlJc0ltTnZiblJsZUhRaU9pSmNMM1JjTDJ0aGJHSmxMbU52TG1sa1hDOUVZWGxQWm1aY0wzWXhJaXdpY0hWaWJHbHphR1Z5SWpvaWJYVm9ZVzF0WVdRdWFHbGtZWGxoZEhWc2JERkFhMkZzWW1VdVkyOHVhV1FpTENKMlpYSnphVzl1SWpvaWRqRWlMQ0p6ZFdKelkzSnBjSFJwYjI1VWFXVnlJam9pVlc1c2FXMXBkR1ZrSW4wc2V5SnpkV0p6WTNKcFltVnlWR1Z1WVc1MFJHOXRZV2x1SWpvaWEyRnNZbVV1WTI4dWFXUWlMQ0p1WVcxbElqb2lSMnh2WW1Gc0xVRjFkR2hsYm5ScFkyRjBhVzl1SWl3aVkyOXVkR1Y0ZENJNklsd3ZkRnd2YTJGc1ltVXVZMjh1YVdSY0wyRjFkR2hsYm5ScFkyRjBhVzl1WEM5Mk1TSXNJbkIxWW14cGMyaGxjaUk2SW0xdmFHRnRiV0ZrTG1GdGFYSnlkV1JwYmtCcllXeGlaUzVqYnk1cFpDSXNJblpsY25OcGIyNGlPaUoyTVNJc0luTjFZbk5qY21sd2RHbHZibFJwWlhJaU9pSlZibXhwYldsMFpXUWlmU3g3SW5OMVluTmpjbWxpWlhKVVpXNWhiblJFYjIxaGFXNGlPaUpyWVd4aVpTNWpieTVwWkNJc0ltNWhiV1VpT2lKT2IzUnBabWxqWVhScGIyNGlMQ0pqYjI1MFpYaDBJam9pWEM5MFhDOXJZV3hpWlM1amJ5NXBaRnd2VG05MGFXWnBZMkYwYVc5dVhDOTJNU0lzSW5CMVlteHBjMmhsY2lJNkluSnBlbXRwWVc1aGJtUmhMbkJ5WVdScGJHeGhhRUJyWVd4aVpTNWpieTVwWkNJc0luWmxjbk5wYjI0aU9pSjJNU0lzSW5OMVluTmpjbWx3ZEdsdmJsUnBaWElpT2lKVmJteHBiV2wwWldRaWZTeDdJbk4xWW5OamNtbGlaWEpVWlc1aGJuUkViMjFoYVc0aU9pSnJZV3hpWlM1amJ5NXBaQ0lzSW01aGJXVWlPaUpCY0hCeWIzWmhiRUZRU1NJc0ltTnZiblJsZUhRaU9pSmNMM1JjTDJ0aGJHSmxMbU52TG1sa1hDOUJjSEJ5YjNaaGJFRlFTVnd2ZGpFaUxDSndkV0pzYVhOb1pYSWlPaUp0ZFdoaGJXMWhaQzVrYVdGdWFVQnJZV3hpWlM1amJ5NXBaQ0lzSW5abGNuTnBiMjRpT2lKMk1TSXNJbk4xWW5OamNtbHdkR2x2YmxScFpYSWlPaUpWYm14cGJXbDBaV1FpZlYwc0luQmxjbTFwZEhSbFpFbFFJam9pSWl3aWFXRjBJam94TmpNeE56WXlOVFV3TENKcWRHa2lPaUptWVRGaFpEZG1ZUzAzWXpsbUxUUmxNbU10T1RWa1lpMDNZelU1TlRsak5UUXpNR1VpZlE9PS5YbThYMk1jcFVpLWs3VVlDeUJ0cVNTc2ZpS1dyUjd4cFRfRGdXNWtzbnI3MEdTY3hMWW1ZTUpBdEtaUXhGNkFtZWRSMWpBc2UzODRJbG10dDNMNm9SN0NSaUxFRy11cjNxSkI5VkRjcUktTmxFYnJZcnpoZWt4NUZLZVkyZ1E2c0NxLTR6QW85THM2SUY2a3N5NlQ1OFpGWXdOWWs1NU9Zb0lScjNCdEd5ZVlmNVp4N0ktTjBydGpYNGJmUXJkbm5YUEdjZVVEcUExLVpKaXUyY2N1SmppZ1lSYURqeEhqRWpBZk5nTEQxWlVxVndZeG1QRjVPTERiOG1NNTlocll1dzRFNHNxY0F5WU14QlZiSGxseHRYTjFiblNmMUE3VkpuS095NUl2YWZIemhTUXhZNkJLTVVudDNVRFdsZUdpYjFsVkhnekkzRDA2bFl2RTNQajV0TXc9PVwiO1xyXG5cclxuZXhwb3J0IHtcclxuICBUT0tFTixcclxuICBBUElfVVJMLFxyXG4gIEFQSV9VU0VSLFxyXG4gIEFQSV9NQVNURVIsXHJcbiAgQVBJX1ZJU0lUX1BMQU4sXHJcbiAgQVBJX1ZJU0lUX1VOUExBTixcclxuICBBUElfVklTSVRfU1BSRUFESU5HLFxyXG4gIEFQSV9XT1JLX1ZJU0lULFxyXG4gIEFQSV9DQUxFTkRBUl9QUk9HUkFNLFxyXG4gIEFQSV9DQUxFTkRBUl9QUk9NTyxcclxuICBBUElfQU5OT1VOQ0VNRU5ULFxyXG4gIEFQSV9JTkNFTlRJVkUsXHJcbiAgQVBJX0JFTkVGSVQsXHJcbiAgQVBJX0FQUFJPVkFMLFxyXG59O1xyXG4iLCJpbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IHtcclxuICBUT0tFTixcclxuICBBUElfVVJMLFxyXG4gIEFQSV9VU0VSLFxyXG4gIEFQSV9NQVNURVIsXHJcbiAgQVBJX1ZJU0lUX1BMQU4sXHJcbiAgQVBJX1ZJU0lUX1VOUExBTixcclxuICBBUElfVklTSVRfU1BSRUFESU5HLFxyXG4gIEFQSV9XT1JLX1ZJU0lULFxyXG4gIEFQSV9DQUxFTkRBUl9QUk9NTyxcclxuICBBUElfQ0FMRU5EQVJfUFJPR1JBTSxcclxuICBBUElfQU5OT1VOQ0VNRU5ULFxyXG4gIEFQSV9JTkNFTlRJVkUsXHJcbiAgQVBJX0JFTkVGSVQsXHJcbiAgQVBJX0FQUFJPVkFMLFxyXG59IGZyb20gXCIuL2NvbnN0YW50XCI7XHJcblxyXG52YXIgbm93ID0gbmV3IERhdGUoKTtcclxudmFyIGRhdGUgPSBub3cuZ2V0RGF0ZSgpO1xyXG52YXIgbW9udGggPSBub3cuZ2V0TW9udGgoKSArIDE7XHJcbnZhciB5ZWFyID0gbm93LmdldEZ1bGxZZWFyKCk7XHJcblxyXG5mdW5jdGlvbiBjb21wYXJlKGEsIGIpIHtcclxuICBpZiAoYS5ub21vciA8IGIubm9tb3IpIHtcclxuICAgIHJldHVybiAtMTtcclxuICB9XHJcbiAgaWYgKGEubm9tb3IgPiBiLm5vbW9yKSB7XHJcbiAgICByZXR1cm4gMTtcclxuICB9XHJcbiAgcmV0dXJuIDA7XHJcbn1cclxuXHJcbi8vIFVTRVIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmNvbnN0IGdldE1lbnUgPSAodXNlckRhdGEpID0+IHtcclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xyXG4gICAgY29uc29sZS5sb2coXCJkZXZcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUubG9nKFwicHJvZHVjdGlvblwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArIEFQSV9VU0VSICsgYC9Vc2VyL0dldE1lbnU/dXNlcm5hbWU9JHt1c2VyRGF0YS5lbWFpbH1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRBdXRoID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArIEFQSV9VU0VSICsgYC9Vc2VyL0dldEF1dGhvcml6ZT91c2VybmFtZT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IG9uTG9naW4gPSAodmFsdWVzKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9VU0VSICtcclxuICAgICAgYC9Vc2VyL0xvZ2luP3VzZXJuYW1lPSR7dmFsdWVzLnVzZXJuYW1lfSYmcGFzc3dvcmQ9JHt2YWx1ZXMucGFzc3dvcmR9YCxcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgc2V0V3JvbmdVc2VyKHRydWUpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBwb3N0Q2hhbmdlUGFzcyA9IChkYXRhKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgcmV0dXJuIGZldGNoKEFQSV9VUkwgKyBBUElfVVNFUiArIFwiL1VzZXIvQ2hhbmdlUGFzc3dvcmRcIiwge1xyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZm9yZ290UGFzc3dvcmQgPSAoZW1haWwpID0+IHtcclxuICByZXR1cm4gZmV0Y2goQVBJX1VSTCArIEFQSV9VU0VSICsgYC9Vc2VyL0ZvcmdvdFBhc3N3b3JkP2VtYWlsPSR7ZW1haWx9YCwge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgfSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLy8gTUFTVEVSID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmNvbnN0IGdldFBvc20gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKEFQSV9VUkwgKyBBUElfTUFTVEVSICsgYC9NYXN0ZXJEYXRhTG9rYWwvR2V0QWxsRGlzcGxheVByb2dyYW1gLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRQcm9kdWN0U2VhcmNoID0gKHNlYXJjaCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChBUElfVVJMICsgQVBJX01BU1RFUiArIGAvTWFzdGVyRGF0YS9HZXRQcm9kdWtMaWtlLyR7c2VhcmNofWAsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgIH0sXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFByb2R1Y3RCeUplbmlzQ2hhbm5lbCA9IChqZW5pc0NoYW5uZWxJZCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfTUFTVEVSICtcclxuICAgICAgYC9NYXN0ZXJEYXRhTG9rYWwvR2V0UHJvZHVrSmVuaXNDaGFubmVsQnkvJHtqZW5pc0NoYW5uZWxJZH1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRQcm9kdWN0QXZnU2FsZXMgPSAocHJvZHVjdENvZGUsIG91dGxldENvZGUpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX01BU1RFUiArXHJcbiAgICAgIGAvTWFzdGVyRGF0YS9HZXRBdmdTYWxlczMwRGF5c0J5T3V0bGV0QW5kUHJvZHVjdD9wcm9kdWN0Q29kZT0ke3Byb2R1Y3RDb2RlfSZvdXRsZXRDb2RlPSR7b3V0bGV0Q29kZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcbmNvbnN0IGdldEhuYUF2ZyA9IChwcm9kdWN0Q29kZSwgb3V0bGV0Q29kZSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfTUFTVEVSICtcclxuICAgICAgYC9NYXN0ZXJEYXRhTG9rYWwvR2V0SG5hQW5kQXZnU2FsZXNCeS8ke3Byb2R1Y3RDb2RlfS8ke291dGxldENvZGV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U2VhcmNoSmVuaXNDaGFubmVsID0gKHVzZXJEYXRhLCBzZWFyY2gsIG1vZHVsKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9NQVNURVIgK1xyXG4gICAgICBgL01hc3RlckRhdGFMb2thbC9HZXRKZW5pc0NoYW5uZWxCeT91c2VybmFtZT0ke3VzZXJEYXRhLnVzZXJuYW1lfSZ0ZWtzPSR7c2VhcmNofSZtb2R1bD0ke21vZHVsfWAsXHJcbiAgICAvLyBgL01hc3RlckRhdGFMb2thbC9HZXRKZW5pc0NoYW5uZWxCeT91c2VybmFtZT1hYnViYWthciZ0ZWtzPSR7c2VhcmNofSZtb2R1bD0ke21vZHVsfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRTZWFyY2hPdXRsZXQgPSAoamVuaXNDaGFubmVsSWQsIHVzZXJEYXRhLCBzZWFyY2gpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX01BU1RFUiArXHJcbiAgICAgIGAvTWFzdGVyRGF0YUxva2FsL0dldE91dGxldEJ5LyR7amVuaXNDaGFubmVsSWR9P3VzZXJuYW1lPSR7dXNlckRhdGEudXNlcm5hbWV9JnRla3M9JHtzZWFyY2h9YCxcclxuICAgIC8vIGAvTWFzdGVyRGF0YUxva2FsL0dldE91dGxldEJ5LyR7amVuaXNDaGFubmVsSWR9P3VzZXJuYW1lPWFidWJha2FyJnRla3M9JHtzZWFyY2h9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0QnJhbmQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKEFQSV9VUkwgKyBBUElfTUFTVEVSICsgYC9NYXN0ZXJEYXRhTG9rYWwvR2V0QWxsQnJhbmRgLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRLb250ZW5Xb3JrVmlzaXQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArIEFQSV9NQVNURVIgKyBgL01hc3RlckRhdGFMb2thbC9HZXRBbGxLb250ZW5Xb3JrVmlzaXRgLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRTYWxlc1RhcmdldFNNUiA9ICh1c2VyRGF0YSwgbW9udGgsIHllYXIpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX01BU1RFUiArXHJcbiAgICAgIGAvTWFzdGVyRGF0YUxva2FsL0dldFNhbGVzVGFyZ2V0QnkvJHt5ZWFyfS8ke21vbnRofT91c2VybmFtZVNtcj0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFNhbGVzVGFyZ2V0NzVTTVIgPSAodXNlckRhdGEsIG1vbnRoLCB5ZWFyKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9NQVNURVIgK1xyXG4gICAgICBgL01hc3RlckRhdGFMb2thbC9HZXRTYWxlc1RhcmdldDc1UGVyc2VuQnkvJHt5ZWFyfS8ke21vbnRofT91c2VybmFtZVNtcj0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldEhhcmdhRWNlcmFuID0gKHByb2R1a0NvZGUpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9tLW9uZS5rYWxiZS5jby5pZDo4MjQzL3Qva2FsYmUuY28uaWQvU2FrYW1vck1hc3RlckRhdGEvdjEvYXBpL01hc3RlckRhdGFMb2thbC9HZXRIYXJnYUVjZXJhbkJ5S29kZVByb2R1ay8ke3Byb2R1a0NvZGV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgcG9zdFByb2ZpbGVQaWMgPSAodXNlckRhdGEsIGZpbGUpID0+IHtcclxuICBjb25zdCBmb3JtZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gIGZvcm1kYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9NQVNURVIgK1xyXG4gICAgICBgL01hc3RlckRhdGFMb2thbC9DaGFuZ2VQcm9maWxlUGljdHVyZT91c2VybmFtZT0ke3VzZXJEYXRhLnVzZXJuYW1lfSZjcmVhdGVkQnk9QVBJJnVwZGF0ZWRCeT1BUElgLFxyXG4gICAge1xyXG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBmb3JtZGF0YSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImJhbGlrYW4gaW5zZXJmaWxlXCIsIGRhdGEpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCB2aWV3UHJvZmlsZVBpYyA9ICh1c2VybmFtZSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfTUFTVEVSICtcclxuICAgICAgYC9NYXN0ZXJEYXRhTG9rYWwvVmlld1Byb2ZpbGVQaWN0dXJlP3VzZXJuYW1lPSR7dXNlcm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDQwNCkge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5ibG9iKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgdmFyIG91dHNpZGUgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGRhdGEpO1xyXG4gICAgICByZXR1cm4gb3V0c2lkZTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCB2aWV3T3V0bGV0Q2xhc3MgPSAob3V0bGV0SUQpID0+IHtcclxuICBjb25zb2xlLmxvZyhvdXRsZXRJRCk7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9NQVNURVIgK1xyXG4gICAgICBgL01hc3RlckRhdGFMb2thbC9HZXRPdXRsZXRDbGFzc2lmaWNhdGlvbi8ke291dGxldElEfWAsXHJcbiAgICAvLyBBUElfVVJMICsgQVBJX01BU1RFUiArIGAvTWFzdGVyRGF0YUxva2FsL0dldE91dGxldENsYXNzaWZpY2F0aW9uLzQ3MTU0YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIGlmIChkYXRhLnN0YXR1cyA9PSA0MDQpIHtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goXHJcbiAgICAgICAgICBBUElfVVJMICsgQVBJX01BU1RFUiArIGAvTWFzdGVyRGF0YUxva2FsL1ZpZXdJbWFnZS8ke2RhdGEuaWR9YCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDQwNCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5ibG9iKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgdmFyIG91dHNpZGUgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gb3V0c2lkZTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBWSVNJVCBQTEFOID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmNvbnN0IGdldFBsYW5MaXN0ID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9QTEFOICtcclxuICAgICAgYC9BY3Rpdml0eVZpc2l0UGxhbi9HZXRBY3Rpdml0eVZpc2l0UGxhbkJ5P3VzZXJuYW1lPSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgdmFyIHJlcyA9IGRhdGEuZmlsdGVyKCh2YWwpID0+IHtcclxuICAgICAgICByZXR1cm4gdmFsLmlzQ2hlY2tPdXQgPT09IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHJlcztcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRQbGFuSWQgPSAoaWQpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1BMQU4gK1xyXG4gICAgICBgL01hc3RlclZpc2l0UGxhbi9HZXRNYXN0ZXJWaXNpdFBsYW5CeT9wYXJhbWV0ZXI9JHt5ZWFyfS0ke21vbnRofS0ke2RhdGV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHBsYW5MaXN0KSA9PiB7XHJcbiAgICAgIGlmIChwbGFuTGlzdC5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChcclxuICAgICAgICAgIEFQSV9VUkwgK1xyXG4gICAgICAgICAgICBBUElfVklTSVRfUExBTiArXHJcbiAgICAgICAgICAgIGAvTWFzdGVyVmlzaXRQbGFuL0dldE1hc3RlclZpc2l0UGxhbkJ5SWQvJHtpZH1gLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgc2FtZVBsYW4gPSBwbGFuTGlzdC5maWx0ZXIoKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiB2YWwuaWQgPT09IGRhdGEuaWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgc2FtZVBsYW4sIGRhdGEgfTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHBsYW5MaXN0O1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UGxhbkhpc3RvcnkgPSAodXNlckRhdGEpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1BMQU4gK1xyXG4gICAgICBgL0FjdGl2aXR5VmlzaXRQbGFuL0dldEFjdGl2aXR5VmlzaXRQbGFuQnk/dXNlcm5hbWU9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICB2YXIgcmVzID0gZGF0YS5maWx0ZXIoKHZhbCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB2YWwuaXNDaGVja091dCA9PT0gdHJ1ZTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiByZXM7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3Qgc3VibWl0VmlzaXRQbGFuID0gKGRhdGEpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICsgQVBJX1ZJU0lUX1BMQU4gKyBcIi9BY3Rpdml0eVZpc2l0UGxhbi9TYXZlQWxsQWN0aXZpdHlWaXNpdFBsYW5cIixcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJiYWlrYW4gc2F2ZWFsbFwiLCBkYXRhKTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3Qgc3VibWl0VmlzaXRQbGFuRHBvc20gPSAoZHBvc20sIGZpbGUpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhkcG9zbSwgZmlsZSk7XHJcbiAgY29uc3QgZm9ybWRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1BMQU4gK1xyXG4gICAgICBcIi9BY3Rpdml0eVZpc2l0UGxhbkRQT1NNL1NhdmVBY3Rpdml0eVZpc2l0UGxhbkRwb3NtXCIsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRwb3NtKSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcImJhbGlrYW4gcHNvbVwiLCBkYXRhKTtcclxuICAgICAgZm9ybWRhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcclxuICAgICAgcmV0dXJuIGZldGNoKFxyXG4gICAgICAgIEFQSV9VUkwgK1xyXG4gICAgICAgICAgQVBJX1ZJU0lUX1BMQU4gK1xyXG4gICAgICAgICAgYC9BY3Rpdml0eVZpc2l0UGxhbkRQT1NNL0luc2VydEZpbGVCeT9pZD0ke2RhdGEuaWR9Jm5hbWFGaWxlPSR7ZGF0YS5uYW1hRmlsZX1gLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogZm9ybWRhdGEsXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYmFsaWthbiBpbnNlcmZpbGVcIiwgZGF0YSk7XHJcbiAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldEludm9pY2VEYXRhID0gKHZpc2l0UGxhbklkKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9QTEFOICtcclxuICAgICAgYC9BY3Rpdml0eVZpc2l0UGxhbi9HZXRQcm9kdWtTdXJhdFBlc2FuYW4vJHt2aXNpdFBsYW5JZH1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRJbnZvaWNlRGF0YVBvc20gPSAodmlzaXRQbGFuSWQpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1BMQU4gK1xyXG4gICAgICBgL0FjdGl2aXR5VmlzaXRQbGFuRFBPU00vR2V0QWN0aXZpdHlWaXNpdFBsYW5EUG9zbUJ5LyR7dmlzaXRQbGFuSWR9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgdmFyIHNvcnREYXRhID0gZGF0YS5zb3J0KGNvbXBhcmUpO1xyXG4gICAgICByZXR1cm4gc29ydERhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3Qgdmlld0ZpbGUgPSAoaWQpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICsgQVBJX1ZJU0lUX1BMQU4gKyBgL0FjdGl2aXR5VmlzaXRQbGFuRFBPU00vVmlld0ZpbGUvJHtpZH1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmJsb2IoKTtcclxuICAgIH0pXHJcbiAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICB2YXIgb3V0c2lkZSA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZGF0YSk7XHJcbiAgICAgIHJldHVybiBvdXRzaWRlO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBsYW5Nb250aGx5SGlzdG9yeSA9ICh1c2VyRGF0YSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfUExBTiArXHJcbiAgICAgIGAvQWN0aXZpdHlWaXNpdFBsYW4vR2V0SGlzdG9yeUFjdGl2aXR5VmlzaXRQbGFuQnk/dXNlcm5hbWU9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBkYXRhLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICB2YXIgZGF0ZUEgPSBuZXcgRGF0ZShhLnRhbmdnYWwpLFxyXG4gICAgICAgICAgZGF0ZUIgPSBuZXcgRGF0ZShiLnRhbmdnYWwpO1xyXG4gICAgICAgIHJldHVybiBkYXRlQiAtIGRhdGVBO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0TWFzdGVyVmlzaXRQbGFuID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9QTEFOICtcclxuICAgICAgYC9NYXN0ZXJWaXNpdFBsYW4vR2V0TWFzdGVyVmlzaXRQbGFuQnlVc2VybmFtZT91c2VybmFtZT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGRhdGEuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHZhciBkYXRlQSA9IG5ldyBEYXRlKGEudGFuZ2dhbCksXHJcbiAgICAgICAgICBkYXRlQiA9IG5ldyBEYXRlKGIudGFuZ2dhbCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGVCIC0gZGF0ZUE7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRBcHByb3ZhbCA9ICh1c2VyRGF0YSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfUExBTiArXHJcbiAgICAgIC8vIGAvQWN0aXZpdHlWaXNpdFBsYW4vR2V0RG9jdW1lbnRWaXNpdEZvckFwcHJvdmFsLyR7dXNlckRhdGEua29kZUNhYmFuZ31gLFxyXG4gICAgICBgL0FjdGl2aXR5VmlzaXRQbGFuL0dldERvY3VtZW50VmlzaXRGb3JBcHByb3ZhbC8zMmAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGRhdGEuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHZhciBkYXRlQSA9IG5ldyBEYXRlKGEudGFuZ2dhbCksXHJcbiAgICAgICAgICBkYXRlQiA9IG5ldyBEYXRlKGIudGFuZ2dhbCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGVCIC0gZGF0ZUE7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRSZXZpc2VQbGFuTGlzdFNtciA9ICh1c2VyRGF0YSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIGBodHRwczovL20tb25lLmthbGJlLmNvLmlkOjgyNDMvdC9rYWxiZS5jby5pZC9TYWthbW9yQWN0aXZpdHlWaXNpdFBsYW4vdjEvYXBpL0FjdGl2aXR5VmlzaXRQbGFuL0dldEFjdGl2aXR5VmlzaXRQbGFuQnlTdGF0dXMvUmV2aXNlP3VzZXJuYW1lPSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgZGF0YS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgdmFyIGRhdGVBID0gbmV3IERhdGUoYS50YW5nZ2FsKSxcclxuICAgICAgICAgIGRhdGVCID0gbmV3IERhdGUoYi50YW5nZ2FsKTtcclxuICAgICAgICByZXR1cm4gZGF0ZUIgLSBkYXRlQTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGRlbGV0ZU1hc3RlclBsYW5TTVIgPSAoaWQpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICsgQVBJX1ZJU0lUX1BMQU4gKyBgL01hc3RlclZpc2l0UGxhbi9EZWxldGVNYXN0ZXJWaXNpdFBsYW4vJHtpZH1gLFxyXG4gICAge1xyXG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHNhdmVNYXN0ZXJQbGFuVmlzaXQgPSAoZGF0YSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgKyBBUElfVklTSVRfUExBTiArIFwiL01hc3RlclZpc2l0UGxhbi9TYXZlQWN0aXZpdHlWaXNpdFBsYW5cIixcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJiYWlrYW4gc2F2ZWFsbFwiLCBkYXRhKTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UGxhbkJ5SWQgPSAoaWQpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9tLW9uZS5rYWxiZS5jby5pZDo4MjQzL3Qva2FsYmUuY28uaWQvU2FrYW1vckFjdGl2aXR5VmlzaXRQbGFuL3YxL2FwaS9BY3Rpdml0eVZpc2l0UGxhbi9HZXRBY3Rpdml0eVZpc2l0UGxhbkJ5SWQvJHtpZH1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVEYXRhUG9zbVBsYW4gPSAoaWQsIGRwb3NtKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9QTEFOICtcclxuICAgICAgYC9BY3Rpdml0eVZpc2l0UGxhbkRQT1NNL0FjdGl2aXR5VmlzaXRQbGFuRFBPU00vJHtpZH1gLFxyXG4gICAge1xyXG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRwb3NtKSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVEYXRhUHJvZHVrUGxhbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgYGh0dHBzOi8vbS1vbmUua2FsYmUuY28uaWQ6ODI0My90L2thbGJlLmNvLmlkL1Nha2Ftb3JBY3Rpdml0eVZpc2l0UGxhbi92MS9hcGkvQWN0aXZpdHlWaXNpdFBsYW5EUHJvZHVjdC9VcGRhdGVBbGxWaXNpdFBsYW5Qcm9kdWN0YCxcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBpbnNlcnRGaWxlUGxhbiA9IChpZCwgZmlsZSkgPT4ge1xyXG4gIGNvbnN0IGZvcm1kYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgZm9ybWRhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1BMQU4gK1xyXG4gICAgICBgL0FjdGl2aXR5VmlzaXRQbGFuRFBPU00vSW5zZXJ0RmlsZUJ5P2lkPSR7aWR9Jm5hbWFGaWxlPSR7ZmlsZS5uYW1lfWAsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBmb3JtZGF0YSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcImJhbGlrYW4gaW5zZXJmaWxlXCIsIGRhdGEpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRWaXNpdFBsYW5Qcm9kdWN0ID0gKGlkKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9QTEFOICtcclxuICAgICAgYC9BY3Rpdml0eVZpc2l0UGxhbkRQcm9kdWN0L0dldFZpc2l0UGxhblByb2R1Y3RCeT92aXNpdFBsYW5JZD0ke2lkfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8vIFZJU0lUIFVOUExBTiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuY29uc3Qgc3VibWl0VmlzaXRVbnBsYW4gPSAoZGF0YSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfVU5QTEFOICtcclxuICAgICAgYC9TYWthbW9yQWN0aXZpdHlWaXNpdFVuUGxhbi9TYXZlQWxsQWN0aXZpdHlWaXNpdFVuUGxhbmAsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYmFpa2FuIHNhdmVhbGxcIiwgZGF0YSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHN1Ym1pdFZpc2l0VW5wbGFuRHBvc20gPSAoZHBvc20sIGZpbGUpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhkcG9zbSwgZmlsZSk7XHJcbiAgY29uc3QgZm9ybWRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1VOUExBTiArXHJcbiAgICAgIGAvU2FrYW1vckFjdGl2aXR5VmlzaXRVblBsYW5EUE9TTS9TYXZlQWN0aXZpdHlWaXNpdFVuUGxhbkRwb3NtYCxcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZHBvc20pLFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYmFsaWthbiBwc29tXCIsIGRhdGEpO1xyXG4gICAgICBmb3JtZGF0YS5hcHBlbmQoXCJmaWxlXCIsIGZpbGUpO1xyXG4gICAgICByZXR1cm4gZmV0Y2goXHJcbiAgICAgICAgQVBJX1VSTCArXHJcbiAgICAgICAgICBBUElfVklTSVRfVU5QTEFOICtcclxuICAgICAgICAgIGAvU2FrYW1vckFjdGl2aXR5VmlzaXRVblBsYW5EUE9TTS9JbnNlcnRGaWxlQnk/aWQ9JHtkYXRhLmlkfSZuYW1hRmlsZT0ke2RhdGEubmFtYUZpbGV9YCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IGZvcm1kYXRhLFxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImJhbGlrYW4gaW5zZXJmaWxlXCIsIGRhdGEpO1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRJbnZvaWNlRGF0YVVucGxhbiA9ICh2aXNpdFBsYW5JZCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfVU5QTEFOICtcclxuICAgICAgYC9TYWthbW9yQWN0aXZpdHlWaXNpdFVuUGxhbi9HZXRQcm9kdWtTdXJhdFBlc2FuYW4vJHt2aXNpdFBsYW5JZH1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRVbnBsYW5CeUlkID0gKGlkKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgYGh0dHBzOi8vbS1vbmUua2FsYmUuY28uaWQ6ODI0My90L2thbGJlLmNvLmlkL1Nha2Ftb3JBY3Rpdml0eVZpc2l0VW5QbGFuL3YxL2FwaS9TYWthbW9yQWN0aXZpdHlWaXNpdFVuUGxhbi9HZXRBY3Rpdml0eVZpc2l0VW5QbGFuQnlJZC8ke2lkfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldEludm9pY2VEYXRhUG9zbVVucGxhbiA9ICh2aXNpdFVucGxhbklkKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9VTlBMQU4gK1xyXG4gICAgICBgL1Nha2Ftb3JBY3Rpdml0eVZpc2l0VW5QbGFuRFBPU00vR2V0QWN0aXZpdHlWaXNpdFVuUGxhbkRQb3NtQnkvJHt2aXNpdFVucGxhbklkfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHZhciBzb3J0RGF0YSA9IGRhdGEuc29ydChjb21wYXJlKTtcclxuICAgICAgcmV0dXJuIHNvcnREYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHVwZGF0ZURhdGFQb3NtVW5wbGFuID0gKGlkLCBkcG9zbSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfVU5QTEFOICtcclxuICAgICAgYC9TYWthbW9yQWN0aXZpdHlWaXNpdFVuUGxhbkRQT1NNL0FjdGl2aXR5VmlzaXRVblBsYW5EUE9TTS8ke2lkfWAsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZHBvc20pLFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHVwZGF0ZURhdGFQcm9kdWtVbnBsYW4gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfVU5QTEFOICtcclxuICAgICAgYC9TYWthbW9yQWN0aXZpdHlWaXNpdFVuUGxhblByb2R1Y3QvVXBkYXRlQWxsVW5QbGFuUHJvZHVjdGAsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgaW5zZXJ0RmlsZVVucGxhbiA9IChpZCwgZmlsZSkgPT4ge1xyXG4gIGNvbnN0IGZvcm1kYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gIGZvcm1kYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9VTlBMQU4gK1xyXG4gICAgICBgL1Nha2Ftb3JBY3Rpdml0eVZpc2l0VW5QbGFuRFBPU00vSW5zZXJ0RmlsZUJ5P2lkPSR7aWR9Jm5hbWFGaWxlPSR7ZmlsZS5uYW1lfWAsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBmb3JtZGF0YSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImJhbGlrYW4gaW5zZXJmaWxlXCIsIGRhdGEpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCB2aWV3RmlsZVVucGxhbiA9IChpZCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGlkKTtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1VOUExBTiArXHJcbiAgICAgIGAvU2FrYW1vckFjdGl2aXR5VmlzaXRVblBsYW5EUE9TTS9WaWV3RmlsZS8ke2lkfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuYmxvYigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgIHZhciBvdXRzaWRlID0gVVJMLmNyZWF0ZU9iamVjdFVSTChkYXRhKTtcclxuICAgICAgcmV0dXJuIG91dHNpZGU7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0VW5wbGFuTW9udGhseUhpc3RvcnkgPSAodXNlckRhdGEpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1VOUExBTiArXHJcbiAgICAgIGAvU2FrYW1vckFjdGl2aXR5VmlzaXRVblBsYW4vR2V0SGlzdG9yeUFjdGl2aXR5VmlzaXRVblBsYW5CeT91c2VybmFtZT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGRhdGEuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHZhciBkYXRlQSA9IG5ldyBEYXRlKGEudGFuZ2dhbCksXHJcbiAgICAgICAgICBkYXRlQiA9IG5ldyBEYXRlKGIudGFuZ2dhbCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGVCIC0gZGF0ZUE7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRVbnBsYW5OZWFyTWUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArIEFQSV9NQVNURVIgKyBgL01hc3RlckRhdGEvR2V0T3V0bGV0TmVhck1lLy02LjEyMzQ1Ni8xMi45ODc2NTRgLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRSZXZpc2VVblBsYW5MaXN0U21yID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgYGh0dHBzOi8vbS1vbmUua2FsYmUuY28uaWQ6ODI0My90L2thbGJlLmNvLmlkL1Nha2Ftb3JBY3Rpdml0eVZpc2l0VW5QbGFuL3YxL2FwaS9TYWthbW9yQWN0aXZpdHlWaXNpdFVuUGxhbi9HZXRBY3Rpdml0eVZpc2l0VW5QbGFuQnlTdGF0dXMvcmV2aXNlP3VzZXJuYW1lPSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgZGF0YS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgdmFyIGRhdGVBID0gbmV3IERhdGUoYS50YW5nZ2FsKSxcclxuICAgICAgICAgIGRhdGVCID0gbmV3IERhdGUoYi50YW5nZ2FsKTtcclxuICAgICAgICByZXR1cm4gZGF0ZUIgLSBkYXRlQTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFVuUGxhblByb2R1Y3RzID0gKGlkKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9VTlBMQU4gK1xyXG4gICAgICBgL1Nha2Ftb3JBY3Rpdml0eVZpc2l0VW5QbGFuUHJvZHVjdC9HZXRVblBsYW5Qcm9kdWN0c0J5P3VuUGxhbklkPSR7aWR9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLy8gU1BSRUFESU5HID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5jb25zdCBzdWJtaXRWaXNpdFNwcmVhZGluZyA9IChkYXRhKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9TUFJFQURJTkcgK1xyXG4gICAgICBgL0FjdGl2aXR5U3ByZWFkaW5nL1NhdmVBbGxBY3Rpdml0eVNwcmVhZGluZ2AsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYmFpa2FuIHNhdmVhbGxcIiwgZGF0YSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHN1Ym1pdFZpc2l0U3ByZWFkaW5nRHBvc20gPSAoZHBvc20sIGZpbGUpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhkcG9zbSwgZmlsZSk7XHJcbiAgY29uc3QgZm9ybWRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1NQUkVBRElORyArXHJcbiAgICAgIGAvQWN0aXZpdHlTcHJlYWRpbmdEUE9TTS9TYXZlQWN0aXZpdHlTcHJlYWRpbmdEcG9zbWAsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRwb3NtKSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImJhbGlrYW4gcHNvbVwiLCBkYXRhKTtcclxuICAgICAgZm9ybWRhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcclxuICAgICAgcmV0dXJuIGZldGNoKFxyXG4gICAgICAgIEFQSV9VUkwgK1xyXG4gICAgICAgICAgQVBJX1ZJU0lUX1NQUkVBRElORyArXHJcbiAgICAgICAgICBgL0FjdGl2aXR5U3ByZWFkaW5nRFBPU00vSW5zZXJ0RmlsZUJ5P2lkPSR7ZGF0YS5pZH0mbmFtYUZpbGU9JHtkYXRhLm5hbWFGaWxlfWAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiBmb3JtZGF0YSxcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJiYWxpa2FuIGluc2VyZmlsZVwiLCBkYXRhKTtcclxuICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0SW52b2ljZURhdGFTcHJlYWRpbmcgPSAodmlzaXRQbGFuSWQpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1NQUkVBRElORyArXHJcbiAgICAgIGAvQWN0aXZpdHlTcHJlYWRpbmcvR2V0UHJvZHVrU3VyYXRQZXNhbmFuLyR7dmlzaXRQbGFuSWR9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0SW52b2ljZURhdGFQb3NtU3ByZWFkaW5nID0gKHZpc2l0VW5wbGFuSWQpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1NQUkVBRElORyArXHJcbiAgICAgIGAvQWN0aXZpdHlTcHJlYWRpbmdEUE9TTS9HZXRBY3Rpdml0eVZpc2l0VW5QbGFuRFBvc21CeS8ke3Zpc2l0VW5wbGFuSWR9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgdmFyIHNvcnREYXRhID0gZGF0YS5zb3J0KGNvbXBhcmUpO1xyXG4gICAgICByZXR1cm4gc29ydERhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3Qgdmlld0ZpbGVTcHJlYWRpbmcgPSAoaWQpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICsgQVBJX1ZJU0lUX1NQUkVBRElORyArIGAvQWN0aXZpdHlTcHJlYWRpbmdEUE9TTS9WaWV3RmlsZS8ke2lkfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuYmxvYigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgIHZhciBvdXRzaWRlID0gVVJMLmNyZWF0ZU9iamVjdFVSTChkYXRhKTtcclxuICAgICAgcmV0dXJuIG91dHNpZGU7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U3ByZWFkaW5nTW9udGhseUhpc3RvcnkgPSAodXNlckRhdGEpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1NQUkVBRElORyArXHJcbiAgICAgIGAvQWN0aXZpdHlTcHJlYWRpbmcvR2V0SGlzdG9yeUFjdGl2aXR5U3ByZWFkaW5nQnk/dXNlcm5hbWU9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBkYXRhLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICB2YXIgZGF0ZUEgPSBuZXcgRGF0ZShhLnRhbmdnYWwpLFxyXG4gICAgICAgICAgZGF0ZUIgPSBuZXcgRGF0ZShiLnRhbmdnYWwpO1xyXG4gICAgICAgIHJldHVybiBkYXRlQiAtIGRhdGVBO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U3ByZWFkaW5nQnlJZCA9IChpZCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfU1BSRUFESU5HICtcclxuICAgICAgYC9BY3Rpdml0eVNwcmVhZGluZy9HZXRBY3Rpdml0eVNwcmVhZGluZ0J5SWQvJHtpZH1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRSZXZpc2VTcHJlYWRpbmdMaXN0U21yID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgYGh0dHBzOi8vbS1vbmUua2FsYmUuY28uaWQ6ODI0My90L2thbGJlLmNvLmlkL1Nha2Ftb3JBY3Rpdml0eVNwcmVhZGluZy92MS9hcGkvQWN0aXZpdHlTcHJlYWRpbmcvR2V0QWN0aXZpdHlTcHJlYWRpbmdCeVN0YXR1cy9SZXZpc2U/dXNlcm5hbWU9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBkYXRhLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICB2YXIgZGF0ZUEgPSBuZXcgRGF0ZShhLnRhbmdnYWwpLFxyXG4gICAgICAgICAgZGF0ZUIgPSBuZXcgRGF0ZShiLnRhbmdnYWwpO1xyXG4gICAgICAgIHJldHVybiBkYXRlQiAtIGRhdGVBO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlRGF0YVBvc21TcHJlYWRpbmcgPSAoaWQsIGRwb3NtKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9TUFJFQURJTkcgK1xyXG4gICAgICBgL0FjdGl2aXR5U3ByZWFkaW5nRFBPU00vQWN0aXZpdHlTcHJlYWRpbmdEcG9zbS8ke2lkfWAsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZHBvc20pLFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHVwZGF0ZURhdGFQcm9kdWtTcHJlYWRpbmcgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfU1BSRUFESU5HICtcclxuICAgICAgYC9BY3Rpdml0eVNwcmVhZGluZ0RQcm9kdWN0L1VwZGF0ZUFsbFNwcmVhZGluZ1Byb2R1Y3RgLFxyXG4gICAge1xyXG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGluc2VydEZpbGVTcHJlYWRpbmcgPSAoaWQsIGZpbGUpID0+IHtcclxuICBjb25zdCBmb3JtZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICBmb3JtZGF0YS5hcHBlbmQoXCJmaWxlXCIsIGZpbGUpO1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfU1BSRUFESU5HICtcclxuICAgICAgYC9BY3Rpdml0eVNwcmVhZGluZ0RQT1NNL0luc2VydEZpbGVCeT9pZD0ke2lkfSZuYW1hRmlsZT0ke2ZpbGUubmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogZm9ybWRhdGEsXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJiYWxpa2FuIGluc2VyZmlsZVwiLCBkYXRhKTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U3ByZWFkaW5nUHJvZHVjdCA9IChpZCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfU1BSRUFESU5HICtcclxuICAgICAgYC9BY3Rpdml0eVNwcmVhZGluZ0RQcm9kdWN0L0dldFNwcmVhZGluZ1Byb2R1Y3RCeT9zcHJlYWRpbmdJZD0ke2lkfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8vIFdPUksgVklTSVQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmNvbnN0IGdldEFsbFdvcmtWaXNpdCA9ICh1c2VyRGF0YSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfV09SS19WSVNJVCArXHJcbiAgICAgIGAvQWN0aXZpdHlXb3JrVmlzaXQvR2V0QWN0aXZpdHlXb3JrVmlzaXRCeT91c2VybmFtZT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFdvcmtWaXNpdE1vbnRobHlIaXN0b3J5ID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9XT1JLX1ZJU0lUICtcclxuICAgICAgYC9BY3Rpdml0eVdvcmtWaXNpdC9HZXRIaXN0b3J5QWN0aXZpdHlXb3JrVmlzaXRCeT91c2VybmFtZT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGRhdGEuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHZhciBkYXRlQSA9IG5ldyBEYXRlKGEudGFuZ2dhbCksXHJcbiAgICAgICAgICBkYXRlQiA9IG5ldyBEYXRlKGIudGFuZ2dhbCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGVCIC0gZGF0ZUE7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcbmNvbnN0IGdldFdvcmtWaXNpdFJhdGluZyA9IChpZCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfV09SS19WSVNJVCArXHJcbiAgICAgIGAvQWN0aXZpdHlXb3JrVmlzaXRSYXRpbmcvR2V0QWN0aXZpdHlXb3JrVmlzaXRSYXRpbmdCeS8ke2lkfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHN1Ym1pdFdvcmtWaXNpdCA9IChkYXRhKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArIEFQSV9XT1JLX1ZJU0lUICsgXCIvQWN0aXZpdHlXb3JrVmlzaXQvU2F2ZUFsbEFjdGl2aXR5V29ya1Zpc2l0XCIsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYmFpa2FuIHNhdmVhbGxcIiwgZGF0YSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldE1hc3RlcldvcmtWaXNpdCA9ICh1c2VyRGF0YSwgZGF0ZSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfV09SS19WSVNJVCArXHJcbiAgICAgIGAvTWFzdGVyUGxhbldvcmtWaXNpdC9HZXRNYXN0ZXJQbGFuV29ya1Zpc2l0QnkvJHtkYXRlfT91c2VybmFtZT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHNhdmVNYXN0ZXJXb3JrVmlzaXQgPSAoZGF0YSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgKyBBUElfV09SS19WSVNJVCArIFwiL01hc3RlclBsYW5Xb3JrVmlzaXQvU2F2ZU1hc3RlclBsYW5Xb3JrVmlzaXRcIixcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJiYWlrYW4gc2F2ZWFsbFwiLCBkYXRhKTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZGVsZXRlTWFzdGVyV29ya1Zpc2l0ID0gKGlkKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9XT1JLX1ZJU0lUICtcclxuICAgICAgYC9NYXN0ZXJQbGFuV29ya1Zpc2l0L0RlbGV0ZU1hc3RlclBsYW5Xb3JrVmlzaXQvJHtpZH1gLFxyXG4gICAge1xyXG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuLy8gQ2FsZW5kYXIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmNvbnN0IGdldERheVByb21vID0gKGRhdGUpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX0NBTEVOREFSX1BST01PICtcclxuICAgICAgYC9TYWthbW9ySW5mb1Byb21vL0dldEluZm9Qcm9tb0J5RGF0ZS8ke2RhdGV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0RGF5UHJvZ3JhbSA9IChkYXRlKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9DQUxFTkRBUl9QUk9HUkFNICtcclxuICAgICAgYC9TYWthbW9yS2FsZW5kZXJQcm9ncmFtL0dldEthbGVuZGVyUHJvZ3JhbUJ5RGF0ZS8ke2RhdGV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0TW9udGhQcm9tbyA9IChkYXRlKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9DQUxFTkRBUl9QUk9NTyArXHJcbiAgICAgIGAvU2FrYW1vckluZm9Qcm9tby9HZXRJbmZvUHJvbW9CeU1vbnRoWWVhci8ke2RhdGV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0TW9udGhQcm9ncmFtID0gKGRhdGUpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX0NBTEVOREFSX1BST0dSQU0gK1xyXG4gICAgICBgL1Nha2Ftb3JLYWxlbmRlclByb2dyYW0vR2V0S2FsZW5kZXJQcm9ncmFtQnlNb250aFllYXIvJHtkYXRlfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8vIEFubm91bmNlbWVudCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuY29uc3QgZ2V0QWxsQW5ub3VuY2VtZW50ID0gKGtvZGVDYWJhbmcpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX0FOTk9VTkNFTUVOVCArXHJcbiAgICAgIC8vIGAvU2FrYW1vckFubm91bmNlbWVudC9HZXRBbm5vdW5jZW1lbnRCeVVzZXI/dXNlcm5hbWU9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAgICBgL1Nha2Ftb3JBbm5vdW5jZW1lbnQvR2V0QW5ub3VuY2VtZW50QnlDYWJhbmcvJHtrb2RlQ2FiYW5nfWAsXHJcbiAgICAvLyBgL1Nha2Ftb3JBbm5vdW5jZW1lbnQvR2V0QW5ub3VuY2VtZW50QnlDYWJhbmcvMTRgLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVSZWFkQW5ub3VuY2VtZW50ID0gKGlkLCBkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgYGh0dHBzOi8vbS1vbmUua2FsYmUuY28uaWQ6ODI0My90L2thbGJlLmNvLmlkL1Nha2Ftb3JBbm5vdW5jZW1lbnQvdjEvYXBpL1Nha2Ftb3JBbm5vdW5jZW1lbnQvVXBkYXRlQW5ub3VuY2VtZW50U3RhdHVzLyR7aWR9YCxcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8vIElOQ0VOVElWRSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5jb25zdCBnZXRQcm9kdWt0aWZpdGFzID0gKHVzZXJEYXRhLCBtb250aCwgeWVhcikgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfSU5DRU5USVZFICtcclxuICAgICAgYC9TYWthbW9ySW5jZW50aXZlL0dldFByb2R1a3RpZml0YXNCeVVzZXJQZXJpb2RlLyR7bW9udGh9LyR7eWVhcn0/dXNlcm5hbWU9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcbmNvbnN0IGdldEZyb250bGluZXIgPSAodXNlckRhdGEsIG1vbnRoLCB5ZWFyKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9JTkNFTlRJVkUgK1xyXG4gICAgICBgL0Zyb250bGluZXIvR2V0QnlVc2VyUGVyaW9kZS8ke21vbnRofS8ke3llYXJ9P3VzZXJuYW1lPSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0Tm9vID0gKHVzZXJEYXRhLCBtb250aCwgeWVhcikgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfSU5DRU5USVZFICtcclxuICAgICAgYC9UYXJnZXROT08vR2V0U2Vsc05PT0J5VXNlclBlcmlvZGUvJHttb250aH0vJHt5ZWFyfT91c2VybmFtZT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFdvcmtEYXkgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKEFQSV9VUkwgKyBBUElfSU5DRU5USVZFICsgYC9TYWthbW9ySW5jZW50aXZlL0dldFdvcmtpbmdEYXkvMDFgLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRLcGlJbnZlbnRpdmVNb250aGx5U01SID0gKHVzZXJEYXRhLCBkYXRlKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9JTkNFTlRJVkUgK1xyXG4gICAgICBgL0twaUluY2VudGl2ZU1vbnRobHkvR2V0SW5jZW50aXZlQ2FsY3VsYXRvci8ke21vbWVudChkYXRlKS5mb3JtYXQoXHJcbiAgICAgICAgXCJZWVlZLU1NXCJcclxuICAgICAgKX0tMDEvU01SP3VzZXJuYW1lU01SPSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0S3BpSW52ZW50aXZlTW9udGhseVBpbWNhID0gKHVzZXJEYXRhLCBkYXRlKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9JTkNFTlRJVkUgK1xyXG4gICAgICBgL0twaUluY2VudGl2ZU1vbnRobHkvSW5jZW50aXZlQ2FsY3VsYXRvclBpbWNhLyR7XHJcbiAgICAgICAgdXNlckRhdGEua29kZUNhYmFuZ1xyXG4gICAgICB9LyR7bW9tZW50KGRhdGUpLmZvcm1hdChcIllZWVktTU1cIil9LTAxL0FCTWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldEluY2VudGl2ZVllYXJseSA9ICh1c2VyRGF0YSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfSU5DRU5USVZFICtcclxuICAgICAgYC9LcGlJbmNlbnRpdmVNb250aGx5L0dldFJla2FwSW5zZW50aWZCdWxhbmFuLyR7bW9tZW50KG5vdykuZm9ybWF0KFxyXG4gICAgICAgIFwiWVlZWVwiXHJcbiAgICAgICl9P3VzZXJuYW1lPSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U2FsZXNUYXJnZXRQaW1jYSA9ICh1c2VyRGF0YSwgbW9udGgsIHllYXIpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX01BU1RFUiArXHJcbiAgICAgIGAvTWFzdGVyRGF0YUxva2FsL0dldFNhbGVzVGFyZ2V0UGltY2FCeUNhYmFuZy8ke3VzZXJEYXRhLmtvZGVDYWJhbmd9LyR7eWVhcn0vJHttb250aH1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRTYWxlc1RhcmdldDc1UGltY2EgPSAodXNlckRhdGEsIG1vbnRoLCB5ZWFyKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9NQVNURVIgK1xyXG4gICAgICBgL01hc3RlckRhdGFMb2thbC9HZXRTYWxlc1RhcmdldFBpbWNhNzVCeUNhYmFuZy8ke3VzZXJEYXRhLmtvZGVDYWJhbmd9LyR7eWVhcn0vJHttb250aH1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRGcm9udGxpbmVyUGltY2EgPSAodXNlckRhdGEsIG1vbnRoLCB5ZWFyKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9JTkNFTlRJVkUgK1xyXG4gICAgICBgL0Zyb250bGluZXIvR2V0RnJvbnRsaW5lclBpbWNhLyR7dXNlckRhdGEua29kZUNhYmFuZ30vJHttb250aH0vJHt5ZWFyfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFNtckJ5Q2FiYW5nID0gKGNhYmFuZywgdGVrcykgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfTUFTVEVSICtcclxuICAgICAgLy8gYC9NYXN0ZXJEYXRhTG9rYWwvR2V0U21yT3V0bGV0QnlDYWJhbmcvJHtjYWJhbmd9P3Rla3M9JHt0ZWtzfWAsXHJcbiAgICAgIGAvTWFzdGVyRGF0YUxva2FsL0dldFNtckJ5Q2FiYW5nLyR7Y2FiYW5nfT90ZWtzPSR7dGVrc31gLFxyXG4gICAgLy8gYC9NYXN0ZXJEYXRhTG9rYWwvR2V0U21yT3V0bGV0QnlDYWJhbmcvMTQ/dGVrcz0ke3Rla3N9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldE5vdGlmaWNhdGlvbmJ5VXNlcm5hbWUgPSAodXNlcm5hbWUpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX01BU1RFUiArXHJcbiAgICAgIC8vIGAvTWFzdGVyRGF0YUxva2FsL0dldE5vdGlmaWthc2lCeVVzZXI/dXNlcm5hbWU9ZGlhbiU0MGdtYWlsLmNvbWAsXHJcbiAgICAgIGAvTWFzdGVyRGF0YUxva2FsL0dldE5vdGlmaWthc2lCeVVzZXI/dXNlcm5hbWU9JHt1c2VybmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UGltY2FCeUNhYmFuZyA9ICh1c2VyRGF0YSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIGBodHRwczovL20tb25lLmthbGJlLmNvLmlkOjgyNDMvdC9rYWxiZS5jby5pZC9TYWthbW9yTWFzdGVyRGF0YS92MS9hcGkvTWFzdGVyRGF0YUxva2FsL0dldFBpbWNhQnkvJHt1c2VyRGF0YS5rb2RlQ2FiYW5nfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBCRU5FRklUID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmNvbnN0IGdldEJlbmVmaXRDb2RlQ2FiYW5nID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9CRU5FRklUICtcclxuICAgICAgYC9CZW5lZml0cy9HZXRCZW5lZml0c0J5S29kZUNhYmFuZy8ke3VzZXJEYXRhLmtvZGVDYWJhbmd9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLy8gQVBQUk9WQUwgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuY29uc3QgYXBwcm92YWxSZWplY3QgPSAoZGF0YSwgbW9kdWwsIGlkLCB1c2VyRGF0YSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIHJldHVybiBmZXRjaChBUElfVVJMICsgQVBJX0FQUFJPVkFMICsgXCIvYXBwcm92YWwvdHJhbnNhY3Rpb24vUmVqZWN0XCIsIHtcclxuICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBpZiAobW9kdWwgPT09IFwiUGxhblwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKFxyXG4gICAgICAgICAgQVBJX1VSTCArXHJcbiAgICAgICAgICAgIEFQSV9WSVNJVF9QTEFOICtcclxuICAgICAgICAgICAgYC9BY3Rpdml0eVZpc2l0UGxhbi9VcGRhdGVTdGF0dXNWaXNpdFBsYW4vJHtpZH0/c3RhdHVzPVJlamVjdGVkJnVwZGF0ZWRCeT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKG1vZHVsID09PSBcIlVuUGxhblwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKFxyXG4gICAgICAgICAgLy8gQVBJX1VSTCArXHJcbiAgICAgICAgICAvLyAgIEFQSV9WSVNJVF9QTEFOICtcclxuICAgICAgICAgIC8vICAgYC9BY3Rpdml0eVZpc2l0UGxhbi9VcGRhdGVTdGF0dXNWaXNpdFBsYW4vJHtpZH0/c3RhdHVzPVJlamVjdGVkJnVwZGF0ZWRCeT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICAgICAgICBgaHR0cHM6Ly9tLW9uZS5rYWxiZS5jby5pZDo4MjQzL3Qva2FsYmUuY28uaWQvU2FrYW1vckFjdGl2aXR5VmlzaXRVblBsYW4vdjEvYXBpL1Nha2Ftb3JBY3Rpdml0eVZpc2l0VW5QbGFuL1VwZGF0ZVN0YXR1c1Zpc2l0VW5QbGFuLyR7aWR9P3N0YXR1cz1SZWplY3RlZCZ1cGRhdGVkQnk9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAobW9kdWwgPT09IFwiU3ByZWFkaW5nXCIpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goXHJcbiAgICAgICAgICBgaHR0cHM6Ly9tLW9uZS5rYWxiZS5jby5pZDo4MjQzL3Qva2FsYmUuY28uaWQvU2FrYW1vckFjdGl2aXR5U3ByZWFkaW5nL3YxL2FwaS9BY3Rpdml0eVNwcmVhZGluZy9VcGRhdGVTdGF0dXNTcHJlYWRpbmcvJHtpZH0/c3RhdHVzPVJlamVjdGVkJnVwZGF0ZWRCeT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgYXBwcm92YWxSZXZpc2UgPSAoZGF0YSwgbW9kdWwsIGlkLCB1c2VyRGF0YSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIHJldHVybiBmZXRjaChBUElfVVJMICsgQVBJX0FQUFJPVkFMICsgXCIvYXBwcm92YWwvdHJhbnNhY3Rpb24vUmVqZWN0XCIsIHtcclxuICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBpZiAobW9kdWwgPT09IFwiUGxhblwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKFxyXG4gICAgICAgICAgQVBJX1VSTCArXHJcbiAgICAgICAgICAgIEFQSV9WSVNJVF9QTEFOICtcclxuICAgICAgICAgICAgYC9BY3Rpdml0eVZpc2l0UGxhbi9VcGRhdGVTdGF0dXNWaXNpdFBsYW4vJHtpZH0/c3RhdHVzPVJldmlzZSZ1cGRhdGVkQnk9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChtb2R1bCA9PT0gXCJVblBsYW5cIikge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChcclxuICAgICAgICAgIC8vIEFQSV9VUkwgK1xyXG4gICAgICAgICAgLy8gICBBUElfVklTSVRfUExBTiArXHJcbiAgICAgICAgICAvLyAgIGAvQWN0aXZpdHlWaXNpdFBsYW4vVXBkYXRlU3RhdHVzVmlzaXRQbGFuLyR7aWR9P3N0YXR1cz1SZXZpc2UmdXBkYXRlZEJ5PSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgICAgICAgIGBodHRwczovL20tb25lLmthbGJlLmNvLmlkOjgyNDMvdC9rYWxiZS5jby5pZC9TYWthbW9yQWN0aXZpdHlWaXNpdFVuUGxhbi92MS9hcGkvU2FrYW1vckFjdGl2aXR5VmlzaXRVblBsYW4vVXBkYXRlU3RhdHVzVmlzaXRVblBsYW4vJHtpZH0/c3RhdHVzPVJldmlzZSZ1cGRhdGVkQnk9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChtb2R1bCA9PT0gXCJTcHJlYWRpbmdcIikge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChcclxuICAgICAgICAgIGBodHRwczovL20tb25lLmthbGJlLmNvLmlkOjgyNDMvdC9rYWxiZS5jby5pZC9TYWthbW9yQWN0aXZpdHlTcHJlYWRpbmcvdjEvYXBpL0FjdGl2aXR5U3ByZWFkaW5nL1VwZGF0ZVN0YXR1c1NwcmVhZGluZy8ke2lkfT9zdGF0dXM9UmV2aXNlJnVwZGF0ZWRCeT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgYXBwcm92YWxBcHByb3ZlID0gKGRhdGEsIG1vZHVsLCBpZCwgdXNlckRhdGEpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICByZXR1cm4gZmV0Y2goQVBJX1VSTCArIEFQSV9BUFBST1ZBTCArIFwiL2FwcHJvdmFsL3RyYW5zYWN0aW9uL0FwcHJvdmVcIiwge1xyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGlmIChtb2R1bCA9PT0gXCJQbGFuXCIpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goXHJcbiAgICAgICAgICBBUElfVVJMICtcclxuICAgICAgICAgICAgQVBJX1ZJU0lUX1BMQU4gK1xyXG4gICAgICAgICAgICBgL0FjdGl2aXR5VmlzaXRQbGFuL1VwZGF0ZVN0YXR1c1Zpc2l0UGxhbi8ke2lkfT9zdGF0dXM9QXBwcm92ZWQmdXBkYXRlZEJ5PSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAobW9kdWwgPT09IFwiVW5QbGFuXCIpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goXHJcbiAgICAgICAgICAvLyBBUElfVVJMICtcclxuICAgICAgICAgIC8vICAgQVBJX1ZJU0lUX1BMQU4gK1xyXG4gICAgICAgICAgLy8gICBgL0FjdGl2aXR5VmlzaXRQbGFuL1VwZGF0ZVN0YXR1c1Zpc2l0UGxhbi8ke2lkfT9zdGF0dXM9QXBwcm92ZWQmdXBkYXRlZEJ5PSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgICAgICAgIGBodHRwczovL20tb25lLmthbGJlLmNvLmlkOjgyNDMvdC9rYWxiZS5jby5pZC9TYWthbW9yQWN0aXZpdHlWaXNpdFVuUGxhbi92MS9hcGkvU2FrYW1vckFjdGl2aXR5VmlzaXRVblBsYW4vVXBkYXRlU3RhdHVzVmlzaXRVblBsYW4vJHtpZH0/c3RhdHVzPUFwcHJvdmVkJnVwZGF0ZWRCeT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKG1vZHVsID09PSBcIlNwcmVhZGluZ1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKFxyXG4gICAgICAgICAgLy8gQVBJX1VSTCArXHJcbiAgICAgICAgICAvLyAgIEFQSV9WSVNJVF9QTEFOICtcclxuICAgICAgICAgIC8vICAgYC9BY3Rpdml0eVZpc2l0UGxhbi9VcGRhdGVTdGF0dXNWaXNpdFBsYW4vJHtpZH0/c3RhdHVzPUFwcHJvdmVkJnVwZGF0ZWRCeT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICAgICAgICBgaHR0cHM6Ly9tLW9uZS5rYWxiZS5jby5pZDo4MjQzL3Qva2FsYmUuY28uaWQvU2FrYW1vckFjdGl2aXR5U3ByZWFkaW5nL3YxL2FwaS9BY3Rpdml0eVNwcmVhZGluZy9VcGRhdGVTdGF0dXNTcHJlYWRpbmcvJHtpZH0/c3RhdHVzPUFwcHJvdmVkJnVwZGF0ZWRCeT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgYXBwcm92YWxTdWJtaXQgPSAoZGF0YSwgaWQsIHVzZXJEYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgYGh0dHBzOi8vbS1vbmUua2FsYmUuY28uaWQ6ODI0My90L2thbGJlLmNvLmlkL0FwcHJvdmFsQVBJL3YxL2FwaS9hcHByb3ZhbC90cmFuc2FjdGlvbi9TdWJtaXRgLFxyXG4gICAge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICBzZXRXcm9uZ1VzZXIodHJ1ZSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgLy8gVVNFUlxyXG4gIGdldE1lbnUsXHJcbiAgZ2V0QXV0aCxcclxuICBvbkxvZ2luLFxyXG4gIHBvc3RDaGFuZ2VQYXNzLFxyXG4gIGZvcmdvdFBhc3N3b3JkLFxyXG4gIC8vIE1BU1RFUlxyXG4gIGdldFByb2R1Y3RTZWFyY2gsXHJcbiAgZ2V0U2VhcmNoSmVuaXNDaGFubmVsLFxyXG4gIGdldFByb2R1Y3RBdmdTYWxlcyxcclxuICBnZXRTZWFyY2hPdXRsZXQsXHJcbiAgZ2V0QnJhbmQsXHJcbiAgZ2V0UHJvZHVjdEJ5SmVuaXNDaGFubmVsLFxyXG4gIGdldEtvbnRlbldvcmtWaXNpdCxcclxuICBnZXRIbmFBdmcsXHJcbiAgcG9zdFByb2ZpbGVQaWMsXHJcbiAgdmlld1Byb2ZpbGVQaWMsXHJcbiAgZ2V0U21yQnlDYWJhbmcsXHJcbiAgdmlld091dGxldENsYXNzLFxyXG4gIGdldE5vdGlmaWNhdGlvbmJ5VXNlcm5hbWUsXHJcbiAgZ2V0UGltY2FCeUNhYmFuZyxcclxuICBnZXRIYXJnYUVjZXJhbixcclxuICAvLyBWSVNJVCBQTEFOXHJcbiAgZ2V0UGxhbkxpc3QsXHJcbiAgZ2V0UGxhbklkLFxyXG4gIGdldFBvc20sXHJcbiAgZ2V0UGxhbkhpc3RvcnksXHJcbiAgc3VibWl0VmlzaXRQbGFuLFxyXG4gIHN1Ym1pdFZpc2l0UGxhbkRwb3NtLFxyXG4gIGdldEludm9pY2VEYXRhUG9zbSxcclxuICBnZXRJbnZvaWNlRGF0YSxcclxuICBnZXRQbGFuTW9udGhseUhpc3RvcnksXHJcbiAgdmlld0ZpbGUsXHJcbiAgZ2V0TWFzdGVyVmlzaXRQbGFuLFxyXG4gIGRlbGV0ZU1hc3RlclBsYW5TTVIsXHJcbiAgc2F2ZU1hc3RlclBsYW5WaXNpdCxcclxuICBnZXRBcHByb3ZhbCxcclxuICBnZXRQbGFuQnlJZCxcclxuICBnZXRSZXZpc2VQbGFuTGlzdFNtcixcclxuICB1cGRhdGVEYXRhUG9zbVBsYW4sXHJcbiAgdXBkYXRlRGF0YVByb2R1a1BsYW4sXHJcbiAgaW5zZXJ0RmlsZVBsYW4sXHJcbiAgZ2V0VmlzaXRQbGFuUHJvZHVjdCxcclxuICAvLyBWSVNJVCBVTlBMQU5cclxuICBzdWJtaXRWaXNpdFVucGxhbixcclxuICBzdWJtaXRWaXNpdFVucGxhbkRwb3NtLFxyXG4gIGdldEludm9pY2VEYXRhVW5wbGFuLFxyXG4gIGdldEludm9pY2VEYXRhUG9zbVVucGxhbixcclxuICBnZXRVbnBsYW5Nb250aGx5SGlzdG9yeSxcclxuICB2aWV3RmlsZVVucGxhbixcclxuICBnZXRVbnBsYW5OZWFyTWUsXHJcbiAgZ2V0VW5wbGFuQnlJZCxcclxuICBnZXRSZXZpc2VVblBsYW5MaXN0U21yLFxyXG4gIHVwZGF0ZURhdGFQb3NtVW5wbGFuLFxyXG4gIHVwZGF0ZURhdGFQcm9kdWtVbnBsYW4sXHJcbiAgaW5zZXJ0RmlsZVVucGxhbixcclxuICBnZXRVblBsYW5Qcm9kdWN0cyxcclxuICAvLyBTUFJFQURJTkdcclxuICBzdWJtaXRWaXNpdFNwcmVhZGluZyxcclxuICBzdWJtaXRWaXNpdFNwcmVhZGluZ0Rwb3NtLFxyXG4gIGdldEludm9pY2VEYXRhU3ByZWFkaW5nLFxyXG4gIGdldEludm9pY2VEYXRhUG9zbVNwcmVhZGluZyxcclxuICB2aWV3RmlsZVNwcmVhZGluZyxcclxuICBnZXRTcHJlYWRpbmdNb250aGx5SGlzdG9yeSxcclxuICBnZXRTcHJlYWRpbmdCeUlkLFxyXG4gIGdldFJldmlzZVNwcmVhZGluZ0xpc3RTbXIsXHJcbiAgdXBkYXRlRGF0YVBvc21TcHJlYWRpbmcsXHJcbiAgdXBkYXRlRGF0YVByb2R1a1NwcmVhZGluZyxcclxuICBpbnNlcnRGaWxlU3ByZWFkaW5nLFxyXG4gIGdldFNwcmVhZGluZ1Byb2R1Y3QsXHJcbiAgLy8gV09SSyBWSVNJVFxyXG4gIGdldEFsbFdvcmtWaXNpdCxcclxuICBnZXRXb3JrVmlzaXRNb250aGx5SGlzdG9yeSxcclxuICBnZXRXb3JrVmlzaXRSYXRpbmcsXHJcbiAgc3VibWl0V29ya1Zpc2l0LFxyXG4gIGdldE1hc3RlcldvcmtWaXNpdCxcclxuICBzYXZlTWFzdGVyV29ya1Zpc2l0LFxyXG4gIGRlbGV0ZU1hc3RlcldvcmtWaXNpdCxcclxuICAvLyBDYWxlbmRhclxyXG4gIGdldERheVByb2dyYW0sXHJcbiAgZ2V0RGF5UHJvbW8sXHJcbiAgZ2V0TW9udGhQcm9ncmFtLFxyXG4gIGdldE1vbnRoUHJvbW8sXHJcbiAgLy8gQW5ub3VuY2VtZW50XHJcbiAgZ2V0QWxsQW5ub3VuY2VtZW50LFxyXG4gIHVwZGF0ZVJlYWRBbm5vdW5jZW1lbnQsXHJcbiAgLy8gSU5DRU5USVZFXHJcbiAgZ2V0U2FsZXNUYXJnZXRTTVIsXHJcbiAgZ2V0U2FsZXNUYXJnZXQ3NVNNUixcclxuICBnZXRQcm9kdWt0aWZpdGFzLFxyXG4gIGdldEZyb250bGluZXIsXHJcbiAgZ2V0Tm9vLFxyXG4gIGdldFdvcmtEYXksXHJcbiAgZ2V0S3BpSW52ZW50aXZlTW9udGhseVNNUixcclxuICBnZXRLcGlJbnZlbnRpdmVNb250aGx5UGltY2EsXHJcbiAgZ2V0SW5jZW50aXZlWWVhcmx5LFxyXG4gIGdldFNhbGVzVGFyZ2V0UGltY2EsXHJcbiAgZ2V0U2FsZXNUYXJnZXQ3NVBpbWNhLFxyXG4gIGdldEZyb250bGluZXJQaW1jYSxcclxuICAvLyBCRU5FRklUXHJcbiAgZ2V0QmVuZWZpdENvZGVDYWJhbmcsXHJcbiAgLy8gQVBQUk9WQUxcclxuICBhcHByb3ZhbFJlamVjdCxcclxuICBhcHByb3ZhbFJldmlzZSxcclxuICBhcHByb3ZhbEFwcHJvdmUsXHJcbiAgYXBwcm92YWxTdWJtaXQsXHJcbn07XHJcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBnZXREb21haW5Mb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgY29uc3QgY3VyTG9jYWxlID1cbiAgICBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgIHNoYWxsb3csXG4gICAgbG9jYWxlLFxuICAgIHNjcm9sbCxcbiAgfSlcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5hc1BhdGgpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9XG4gICAgICByb3V0ZXIgJiZcbiAgICAgIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgY3VyTG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgICAgKVxuXG4gICAgY2hpbGRQcm9wcy5ocmVmID1cbiAgICAgIGxvY2FsZURvbWFpbiB8fFxuICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgeyByZXF1ZXN0SWRsZUNhbGxiYWNrIH0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nLCBwcmVmZXRjaD86IGJvb2xlYW4pOiBQcm9taXNlPFJvdXRlTG9hZGVyRW50cnk+XG4gIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XG59XG5cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbms/OiBIVE1MTGlua0VsZW1lbnQpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIShkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSkgfHxcbiAgICAgIGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKVxuICAgIClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuY29uc3QgY2FuUHJlZmV0Y2g6IGJvb2xlYW4gPSBoYXNQcmVmZXRjaCgpXG5cbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIGxpbms/OiBIVE1MTGlua0VsZW1lbnRcbik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgcmV0dXJuIHJlcygpXG4gICAgfVxuXG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICBpZiAoYXMpIGxpbmshLmFzID0gYXNcbiAgICBsaW5rIS5yZWwgPSBgcHJlZmV0Y2hgXG4gICAgbGluayEuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuICAgIGxpbmshLm9ubG9hZCA9IHJlc1xuICAgIGxpbmshLm9uZXJyb3IgPSByZWpcblxuICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgbGluayEuaHJlZiA9IGhyZWZcblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluaylcbiAgfSlcbn1cblxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpXG4vLyBUT0RPOiB1bmV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnI/OiBFcnJvcik6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyXG59XG5cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChcbiAgc3JjOiBzdHJpbmcsXG4gIHNjcmlwdD86IEhUTUxTY3JpcHRFbGVtZW50XG4pOiBQcm9taXNlPHVua25vd24+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmVcbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+XG4gICAgICByZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcblxuICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG5cbiAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgIHNjcmlwdC5zcmMgPSBzcmNcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgfSlcbn1cblxuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8VD4oXG4gIHA6IFByb21pc2U8VD4sXG4gIG1zOiBudW1iZXIsXG4gIGVycjogRXJyb3Jcbik6IFByb21pc2U8VD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuXG4gICAgcC50aGVuKChyKSA9PiB7XG4gICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgICByZXNvbHZlKHIpXG4gICAgfSkuY2F0Y2gocmVqZWN0KVxuXG4gICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSwgbXMpXG4gICAgKVxuICB9KVxufVxuXG4vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKTogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiB7XG4gIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgfVxuXG4gIGNvbnN0IG9uQnVpbGRNYW5pZmVzdDogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiA9IG5ldyBQcm9taXNlPFxuICAgIENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgPigocmVzb2x2ZSkgPT4ge1xuICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQlxuICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUISlcbiAgICAgIGNiICYmIGNiKClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8Q2xpZW50QnVpbGRNYW5pZmVzdD4oXG4gICAgb25CdWlsZE1hbmlmZXN0LFxuICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpXG4gIClcbn1cblxuaW50ZXJmYWNlIFJvdXRlRmlsZXMge1xuICBzY3JpcHRzOiBzdHJpbmdbXVxuICBjc3M6IHN0cmluZ1tdXG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKFxuICBhc3NldFByZWZpeDogc3RyaW5nLFxuICByb3V0ZTogc3RyaW5nXG4pOiBQcm9taXNlPFJvdXRlRmlsZXM+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBzY3JpcHRzOiBbXG4gICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICtcbiAgICAgICAgICBlbmNvZGVVUkkoZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKHJvdXRlLCAnLmpzJykpLFxuICAgICAgXSxcbiAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgIGNzczogW10sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KSA9PiB7XG4gICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpXG4gICAgfVxuICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcChcbiAgICAgIChlbnRyeSkgPT4gYXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5qcycpKSxcbiAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuY3NzJykpLFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnRcbiAgPiA9IG5ldyBNYXAoKVxuICBjb25zdCBsb2FkZWRTY3JpcHRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPHVua25vd24+PiA9IG5ldyBNYXAoKVxuICBjb25zdCBzdHlsZVNoZWV0czogTWFwPHN0cmluZywgUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+PiA9IG5ldyBNYXAoKVxuICBjb25zdCByb3V0ZXM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeVxuICA+ID0gbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb206IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQgPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHwgdW5kZWZpbmVkID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGU6IHN0cmluZywgcHJlZmV0Y2g/OiBib29sZWFuKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5Pihyb3V0ZSwgcm91dGVzLCAoKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KFxuICAgICAgICAgIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAgICAgLnRoZW4oKHsgc2NyaXB0cywgY3NzIH0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpXG4gICAgICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgICAgICA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksXG4gICAgICAgICAgICAgIF0gYXMgY29uc3QpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCkgPT4gKHtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50LFxuICAgICAgICAgICAgICAgIHN0eWxlczogcmVzWzFdLFxuICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgICAgICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKVxuICAgICAgICApXG4gICAgICAgICAgLnRoZW4oKHsgZW50cnlwb2ludCwgc3R5bGVzIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlczogUm91dGVMb2FkZXJFbnRyeSA9IE9iamVjdC5hc3NpZ248XG4gICAgICAgICAgICAgIHsgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXSB9LFxuICAgICAgICAgICAgICBSb3V0ZUVudHJ5cG9pbnRcbiAgICAgICAgICAgID4oeyBzdHlsZXM6IHN0eWxlcyEgfSwgZW50cnlwb2ludClcbiAgICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKHByZWZldGNoKSB7XG4gICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxuICAgICAgICAgICAgICB0aHJvdyBlcnJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IGVycm9yOiBlcnIgfVxuICAgICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0sXG4gICAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgbGV0IGNuXG4gICAgICBpZiAoKGNuID0gKG5hdmlnYXRvciBhcyBhbnkpLmNvbm5lY3Rpb24pKSB7XG4gICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIH1cbiAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgLnRoZW4oKG91dHB1dCkgPT5cbiAgICAgICAgICBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIGNhblByZWZldGNoXG4gICAgICAgICAgICAgID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpID0+IHByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpKVxuICAgICAgICAgICAgICA6IFtdXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHRoaXMubG9hZFJvdXRlKHJvdXRlLCB0cnVlKS5jYXRjaCgoKSA9PiB7fSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICgpID0+IHt9XG4gICAgICAgIClcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvdXRlTG9hZGVyXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuICAnaXNSZWFkeScsXG4gICdpc1ByZXZpZXcnLFxuICAnaXNMb2NhbGVEb21haW4nLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudDogc3RyaW5nKSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2ssXG4gIGNhbmNlbElkbGVDYWxsYmFjayxcbn0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7XG4gIGdldENsaWVudEJ1aWxkTWFuaWZlc3QsXG4gIGlzQXNzZXRFcnJvcixcbiAgbWFya0Fzc2V0RXJyb3IsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXInXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vLi4vc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IHsgbm9ybWFsaXplTG9jYWxlUGF0aCB9IGZyb20gJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxuICBORVhUX0RBVEEsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgLyogcHJvZCAqL1xuICAgIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICB9XG59XG5cbmludGVyZmFjZSBSb3V0ZVByb3BlcnRpZXMge1xuICBzaGFsbG93OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4gIHNjcm9sbD86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID1cbiAgfCBudWxsXG4gIHwgeyBfX046IGZhbHNlIH1cbiAgfCAoeyBfX046IHRydWU7IGlkeDogbnVtYmVyIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlOiB0eXBlb2YgaW1wb3J0KCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlXG5cbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKVxuICAgIC5kZXRlY3REb21haW5Mb2NhbGVcbn1cblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBsb2NhbGVzPzogc3RyaW5nW10sXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBsb2NhbGUgPSBsb2NhbGUgfHwgbm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZVxuXG4gICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpXG5cbiAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7XG4gICAgICAgIGJhc2VQYXRoIHx8ICcnXG4gICAgICB9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YFxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKVxuXG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpICYmXG4gICAgICBwYXRoTG93ZXIgIT09ICcvJyArIGxvY2FsZUxvd2VyXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpXG5cbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8XG4gICAgICAgIHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpXG4gICAgICA/IChwYXRobmFtZS5sZW5ndGggPT09IGxvY2FsZS5sZW5ndGggKyAxID8gJy8nIDogJycpICtcbiAgICAgICAgICBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoOiBzdHJpbmcpIHtcbiAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpXG4gIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpXG5cbiAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KVxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpXG4gIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gXG4gIHJldHVybiBwYXRoXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKVxuICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAgICAgICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAoc2VnbWVudCkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAuam9pbignLycpXG4gICAgICAgICAgICAgIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGxldCBiYXNlOiBVUkxcblxuICB0cnkge1xuICAgIGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICB9IGNhdGNoIChfKSB7XG4gICAgLy8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbiAgICBiYXNlID0gbmV3IFVSTCgnLycsICdodHRwOi8vbicpXG4gIH1cbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmw6IHN0cmluZykge1xuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG5cbiAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhcz86IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLmFzUGF0aCwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLmFzUGF0aCwgYXMpKVxuICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcblxuICByZXR1cm4ge1xuICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpLFxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWU6IHN0cmluZywgcGFnZXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lISkpXG5cbiAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICByZXR1cm4gcGF0aG5hbWVcbiAgfVxuXG4gIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYWdlXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gICAgfCAnaXNSZWFkeSdcbiAgICB8ICdpc1ByZXZpZXcnXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9XG4gIHwgKE9taXQ8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnc3R5bGVTaGVldHMnPiAmIHsgaW5pdGlhbDogdHJ1ZSB9KVxuICB8IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mb1xuXG5leHBvcnQgdHlwZSBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKFxuICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICBBcHA6IEFwcENvbXBvbmVudCxcbiAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbikgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmXG4gICEhKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHYgPSAnX19uZXh0J1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWVcbiAgICB9IGNhdGNoIChuKSB7fVxuICB9KSgpXG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJylcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkQgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gIHNkcjogeyBbYXNQYXRoOiBzdHJpbmddOiBQcm9taXNlPG9iamVjdD4gfSA9IHt9XG5cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc1JlYWR5OiBib29sZWFuXG4gIGlzUHJldmlldzogYm9vbGVhblxuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxuXG4gIHByaXZhdGUgX2lkeDogbnVtYmVyID0gMFxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICBpc1ByZXZpZXcsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChXcmFwQXBwQ29tcG9uZW50OiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICAgICAgaXNQcmV2aWV3PzogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0XG5cbiAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgdGhpcy5pc1JlYWR5ID0gISEoXG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fFxuICAgICAgKCFhdXRvRXhwb3J0RHluYW1pYyAmJlxuICAgICAgICAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiZcbiAgICAgICAgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpXG4gICAgKVxuICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXdcbiAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2VcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlc1xuICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKSxcbiAgICAgICAgICB7IGxvY2FsZSB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBmb3JjZWRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgaWR4IH0gPSBzdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeClcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2UodiEpXG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pZHggPSBpZHhcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduPHt9LCBUcmFuc2l0aW9uT3B0aW9ucywgVHJhbnNpdGlvbk9wdGlvbnM+KHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pLFxuICAgICAgZm9yY2VkU2Nyb2xsXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2gge31cbiAgICAgIH1cbiAgICB9XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyxcbiAgICBmb3JjZWRTY3JvbGw/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IChvcHRpb25zIGFzIGFueSkuX2hcblxuICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgIGlmICgob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB0byBzY3JvbGwgcmVzZXQgYmVoYXZpb3IgdW5sZXNzIGV4cGxpY2l0bHkgc3BlY2lmaWVkIHRvIGJlXG4gICAgLy8gYGZhbHNlYCEgVGhpcyBtYWtlcyB0aGUgYmVoYXZpb3IgYmV0d2VlbiB1c2luZyBgUm91dGVyI3B1c2hgIGFuZCBhXG4gICAgLy8gYDxMaW5rIC8+YCBjb25zaXN0ZW50LlxuICAgIG9wdGlvbnMuc2Nyb2xsID0gISEob3B0aW9ucy5zY3JvbGwgPz8gdHJ1ZSlcblxuICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBvcHRpb25zLmxvY2FsZSAhPT0gdGhpcy5sb2NhbGVcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID09PSBmYWxzZVxuICAgICAgICAgID8gdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcylcbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKVxuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aChcbiAgICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgICAgaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsXG4gICAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgICApLnBhdGhuYW1lXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgIGlmICghdGhpcy5sb2NhbGVzPy5pbmNsdWRlcyh0aGlzLmxvY2FsZSEpKSB7XG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgIClcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhZGlkTmF2aWdhdGUgJiZcbiAgICAgICAgICBkZXRlY3RlZERvbWFpbiAmJlxuICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7XG4gICAgICAgICAgICBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgICB9JHthZGRCYXNlUGF0aChcbiAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICA6IGAvJHt0aGlzLmxvY2FsZX1gXG4gICAgICAgICAgICB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nXG4gICAgICAgICAgKX1gXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG4gICAgY29uc3Qgcm91dGVQcm9wcyA9IHsgc2hhbGxvdyB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcylcbiAgICB9XG5cbiAgICBhcyA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbClcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgbGV0IHBhZ2VzOiBhbnksIHJld3JpdGVzOiBhbnlcbiAgICB0cnkge1xuICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgaWYgKHNob3VsZFJlc29sdmVIcmVmICYmIHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgIHJld3JpdGVzLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGhcblxuICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSwgcGFnZXMpXG5cbiAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICtcbiAgICAgICAgICAgIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2BcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICB0cnkge1xuICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgaWYgKChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJiAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUoXG4gICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUsXG4gICAgICAgICAgICAgIHBhZ2VzXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsLCBhczogbmV3QXMgfSA9IHByZXBhcmVVcmxBcyhcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXXG5cbiAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlXG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnXG4gICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgIHsgc2hhbGxvdzogZmFsc2UgfVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGVcblxuICAgICAgaWYgKFxuICAgICAgICAob3B0aW9ucyBhcyBhbnkpLl9oICYmXG4gICAgICAgIHBhdGhuYW1lID09PSAnL19lcnJvcicgJiZcbiAgICAgICAgc2VsZi5fX05FWFRfREFUQV9fLnByb3BzPy5wYWdlUHJvcHM/LnN0YXR1c0NvZGUgPT09IDUwMCAmJlxuICAgICAgICBwcm9wcz8ucGFnZVByb3BzXG4gICAgICApIHtcbiAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDBcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQoXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSEsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBjbGVhbmVkQXMsXG4gICAgICAgIHJvdXRlSW5mbyxcbiAgICAgICAgZm9yY2VkU2Nyb2xsIHx8XG4gICAgICAgICAgKGlzVmFsaWRTaGFsbG93Um91dGUgfHwgIW9wdGlvbnMuc2Nyb2xsID8gbnVsbCA6IHsgeDogMCwgeTogMCB9KVxuICAgICAgKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgIH0pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDEsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgICAgICByb3V0ZUluZm9FcnIsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHMsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByZXNvbHZlZEFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9IHRoaXMuY29tcG9uZW50c1tcbiAgICAgICAgcm91dGVcbiAgICAgIF1cbiAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID1cbiAgICAgICAgZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRMb2NhbGU6IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBsZXQgcmV3cml0ZXM6IGFueVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG5cbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHBhcnNlZC5xdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSlcblxuICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHJldHVybiBpc1NzZ1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmxvY2FsZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAhdGhpcy5pc1ByZXZpZXcgJiZcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XVxuICAgICkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgfVxuICAgIHJldHVybiAodGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfSkpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nLCByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdChcbiAgICAgICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICAgICBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoXG4gICAgICBkYXRhLFxuICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQsXG4gICAgICByZXNldFNjcm9sbFxuICAgIClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgZ2xvYmFsQmFzZSA9IG5ldyBVUkwoXG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuICApXG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIGdsb2JhbEJhc2UpIDogZ2xvYmFsQmFzZVxuICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMsIHNlYXJjaCwgaGFzaCwgaHJlZiwgb3JpZ2luIH0gPSBuZXcgVVJMKFxuICAgIHVybCxcbiAgICByZXNvbHZlZEJhc2VcbiAgKVxuICBpZiAob3JpZ2luICE9PSBnbG9iYWxCYXNlLm9yaWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcygpIHt9XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBQcmV2aWV3RGF0YSB9IGZyb20gJ25leHQvdHlwZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiAoc3RyaW5nIHwgbnVtYmVyKVtdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgc2NyaXB0TG9hZGVyPzogYW55W11cbiAgaXNQcmV2aWV3PzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogVGhlIGN1cnJlbnRseSBhY3RpdmUgbG9jYWxlXG4gICAqL1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIEFsbCBjb25maWd1cmVkIGxvY2FsZXNcbiAgICovXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAvKipcbiAgICogVGhlIGNvbmZpZ3VyZWQgZGVmYXVsdCBsb2NhbGVcbiAgICovXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBzdHJpbmdbXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIHVuc3RhYmxlX0pzUHJlbG9hZD86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgc2NyaXB0TG9hZGVyOiB7IGFmdGVySW50ZXJhY3RpdmU/OiBzdHJpbmdbXTsgYmVmb3JlSW50ZXJhY3RpdmU/OiBhbnlbXSB9XG4gIGxvY2FsZT86IHN0cmluZ1xuICBkaXNhYmxlT3B0aW1pemVkTG9hZGluZz86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogUHJldmlld0RhdGFcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wYWdlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBTdG9yZXMgfSBmcm9tIFwiLi4vc3RvcmVcIjtcblxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU3Bpbm5lclwiO1xuaW1wb3J0IEJvdE5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9Cb3ROYXZcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQnV0dG9uXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkXCI7XG5pbXBvcnQgQ2hlY2tCb3ggZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2hlY2tib3hcIjtcblxuaW1wb3J0IHsgZmlyZWJhc2VDbG91ZE1lc3NhZ2luZyB9IGZyb20gXCIuLi93ZWJwdXNoXCI7XG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuXG5pbXBvcnQge1xuICBhcHByb3ZhbEFwcHJvdmUsXG4gIGdldEFsbEFubm91bmNlbWVudCxcbiAgZ2V0QWxsV29ya1Zpc2l0LFxuICBnZXRBcHByb3ZhbCxcbiAgZ2V0QXV0aCxcbiAgZ2V0RnJvbnRsaW5lcixcbiAgZ2V0RnJvbnRsaW5lclBpbWNhLFxuICBnZXRJbnZvaWNlRGF0YSxcbiAgZ2V0SW52b2ljZURhdGFQb3NtLFxuICBnZXRJbnZvaWNlRGF0YVBvc21TcHJlYWRpbmcsXG4gIGdldEludm9pY2VEYXRhUG9zbVVucGxhbixcbiAgZ2V0SW52b2ljZURhdGFTcHJlYWRpbmcsXG4gIGdldEludm9pY2VEYXRhVW5wbGFuLFxuICBnZXRNZW51LFxuICBnZXROb28sXG4gIGdldE5vdGlmaWNhdGlvbmJ5VXNlcm5hbWUsXG4gIGdldFBsYW5IaXN0b3J5LFxuICBnZXRQbGFuTGlzdCxcbiAgZ2V0UHJvZHVrdGlmaXRhcyxcbiAgZ2V0UmV2aXNlUGxhbkxpc3RTbXIsXG4gIGdldFJldmlzZVNwcmVhZGluZ0xpc3RTbXIsXG4gIGdldFJldmlzZVVuUGxhbkxpc3RTbXIsXG4gIGdldFNhbGVzVGFyZ2V0NzVQaW1jYSxcbiAgZ2V0U2FsZXNUYXJnZXQ3NVNNUixcbiAgZ2V0U2FsZXNUYXJnZXRQaW1jYSxcbiAgZ2V0U2FsZXNUYXJnZXRTTVIsXG4gIGdldFNwcmVhZGluZ01vbnRobHlIaXN0b3J5LFxuICBnZXRTcHJlYWRpbmdQcm9kdWN0LFxuICBnZXRVbnBsYW5Nb250aGx5SGlzdG9yeSxcbiAgZ2V0VW5QbGFuUHJvZHVjdHMsXG4gIGdldFZpc2l0UGxhblByb2R1Y3QsXG4gIGdldFdvcmtEYXksXG4gIHZpZXdQcm9maWxlUGljLFxufSBmcm9tIFwiLi4vaGVscGVyXCI7XG5cbmltcG9ydCB7IERvdWdobnV0IH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgcm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCwgYWN0aW9ucyB9ID0gdXNlQ29udGV4dChTdG9yZXMpO1xuICBjb25zdCBbZm9jdXMsIHNldEZvY3VzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGxhbiwgc2V0UGxhbl0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt3b3JrVmlzaXQsIHNldFdvcmtWaXNpdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt3b3JrVmlzaXRIaXN0b3J5LCBzZXRXb3JrVmlzaXRIaXN0b3J5XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3BsYW5IaXN0b3J5LCBzZXRQbGFuSGlzdG9yeV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzcHJlYWRpbmdIaXN0b3J5LCBzZXRTcHJlYWRpbmdIaXN0b3J5XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3VucGxhbkhpc3RvcnksIHNldFVucGxhbkhpc3RvcnldID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcm9sZSwgc2V0Um9sZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3RvcE1lbnUsIHNldFRvcE1lbnVdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2xvYWRpbmdNZW51LCBzZXRMb2FkaW5nTWVudV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW25ld0Fubm91bmNlbWVudCwgc2V0TmV3QW5ub3VuY2VtZW50XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW25vdGlmLCBzZXROb3RpZl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzYWxlc1RhcmdldCwgc2V0U2FsZXNUYXJnZXRdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2FsZXNUYXJnZXQ3NSwgc2V0U2FsZXNUYXJnZXQ3NV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtwcm9kdWt0aWZpdGFzLCBzZXRQcm9kdWt0aWZpdGFzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2Zyb250bGluZXIsIHNldEZyb250bGluZXJdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbTk9PLCBzZXROT09dID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbd29ya0RheSwgc2V0V29ya0RheV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtwZW5kaW5nQXBwcm92ZSwgc2V0UGVuZGluZ0FwcHJvdmVdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZHVtbXksIHNldER1bW15XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbG9hZGluZ0FwcHJvdmUsIHNldExvYWRpbmdBcHByb3ZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3JldmlzZVBsYW4sIHNldFJldmlzZVBsYW5dID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcmV2aXNlVW5QbGFuLCBzZXRSZXZpc2VVblBsYW5dID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcmV2aXNlU3ByZWFkaW5nLCBzZXRSZXZpc2VTcHJlYWRpbmddID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IFtQUCwgc2V0UFBdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGlzTW91bnRlZCA9IHVzZVJlZih0cnVlKTtcblxuICB2YXIgbm93ID0gbmV3IERhdGUoKTtcblxuICBjb25zdCBkYXRhUGxhbiA9IHtcbiAgICBkYXRhc2V0czogW1xuICAgICAge1xuICAgICAgICBkYXRhOlxuICAgICAgICAgIHBsYW5IaXN0b3J5Lmxlbmd0aCA9PT0gMCA/IFswLCAxXSA6IFtwbGFuSGlzdG9yeS5sZW5ndGgsIHBsYW4ubGVuZ3RoXSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXCIjNDE4NjdhXCIsIFwiI2QxZTRlMVwiXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcbiAgY29uc3QgZGF0YVNwcmVhZGluZyA9IHtcbiAgICBkYXRhc2V0czogW1xuICAgICAge1xuICAgICAgICBkYXRhOiBzcHJlYWRpbmdIaXN0b3J5Lmxlbmd0aCA9PT0gMCA/IFswLCAxXSA6IFswLCAxXSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXCIjNDE4NjdhXCIsIFwiI2QxZTRlMVwiXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICBjb25zdCBkYXRhV29ya1Zpc2l0ID0ge1xuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGRhdGE6XG4gICAgICAgICAgd29ya1Zpc2l0SGlzdG9yeS5sZW5ndGggPT09IDBcbiAgICAgICAgICAgID8gWzAsIDFdXG4gICAgICAgICAgICA6IFt3b3JrVmlzaXRIaXN0b3J5Lmxlbmd0aCwgd29ya1Zpc2l0Lmxlbmd0aF0sXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1wiIzQxODY3YVwiLCBcIiNkMWU0ZTFcIl0sXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgY29uc3QgZG9udXRPcHRpb25zID0ge1xuICAgIGN1dG91dFBlcmNlbnRhZ2U6IDc1LFxuICAgIHRvb2x0aXBzOiB7IGVuYWJsZWQ6IGZhbHNlIH0sXG4gICAgaG92ZXI6IHsgbW9kZTogbnVsbCB9LFxuICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogdHJ1ZSxcbiAgfTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGlmIChpc01vdW50ZWQuY3VycmVudCkge1xuICAvLyAgICAgc2V0VG9rZW4oKTtcbiAgLy8gICAgIGFzeW5jIGZ1bmN0aW9uIHNldFRva2VuKCkge1xuICAvLyAgICAgICB0cnkge1xuICAvLyAgICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZmlyZWJhc2VDbG91ZE1lc3NhZ2luZy5pbml0KCk7XG4gIC8vICAgICAgICAgaWYgKHRva2VuKSB7XG4gIC8vICAgICAgICAgICBnZXRNZXNzYWdlKCk7XG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfVxuICAvLyAgICAgZnVuY3Rpb24gZ2V0TWVzc2FnZSgpIHtcbiAgLy8gICAgICAgY29uc3QgbWVzc2FnaW5nID0gZmlyZWJhc2UubWVzc2FnaW5nKCk7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKHsgbWVzc2FnaW5nIH0pO1xuICAvLyAgICAgICBtZXNzYWdpbmcub25NZXNzYWdlKChtZXNzYWdlKSA9PiB7XG4gIC8vICAgICAgICAgc2V0Tm90aWYodHJ1ZSk7XG4gIC8vICAgICAgIH0pO1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gICByZXR1cm4gKCkgPT4ge1xuICAvLyAgICAgaXNNb3VudGVkLmN1cnJlbnQgPSBmYWxzZTtcbiAgLy8gICB9O1xuICAvLyB9LCBbaXNNb3VudGVkXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcbiAgICBpZiAodXNlckRhdGEpIHtcbiAgICAgIHZpZXdQcm9maWxlUGljKHVzZXJEYXRhLnVzZXJuYW1lKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHNldFBQKGRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfVxuICB9LCBbZGlzcGF0Y2hdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xuICAgIGlmICh1c2VyRGF0YSkge1xuICAgICAgLy8gZ2V0QWxsQW5ub3VuY2VtZW50KHVzZXJEYXRhKVxuICAgICAgLy8gICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgLy8gICAgIGNvbnN0IG5ld0Fubm91bmNlbWVudCA9IGRhdGEuZmlsdGVyKCh2YWwpID0+IHtcbiAgICAgIC8vICAgICAgIHJldHVybiB2YWwuaXNSZWFkID09PSBmYWxzZTtcbiAgICAgIC8vICAgICB9KTtcbiAgICAgIC8vICAgICBzZXROZXdBbm5vdW5jZW1lbnQobmV3QW5ub3VuY2VtZW50KTtcbiAgICAgIC8vICAgICBpZiAobmV3QW5ub3VuY2VtZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgIC8vICAgICAgIHNldE5vdGlmKHRydWUpO1xuICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAvLyAgICAgICBzZXROb3RpZihmYWxzZSk7XG4gICAgICAvLyAgICAgfVxuICAgICAgLy8gICB9KVxuICAgICAgLy8gICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAvLyAgIH0pO1xuICAgICAgZ2V0Tm90aWZpY2F0aW9uYnlVc2VybmFtZSh1c2VyRGF0YS51c2VybmFtZSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBzZXROZXdBbm5vdW5jZW1lbnQoZGF0YSk7XG4gICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2V0Tm90aWYodHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldE5vdGlmKGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGdldFdvcmtEYXkoKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHNldFdvcmtEYXkoZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LCBbZGlzcGF0Y2hdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xuICAgIGlmICh1c2VyRGF0YSkge1xuICAgICAgYWN0aW9ucy51c2VyTG9naW4odXNlckRhdGEpO1xuICAgICAgZ2V0TWVudSh1c2VyRGF0YSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBhY3Rpb25zLnNldE1lbnUoZGF0YSk7XG4gICAgICAgICAgc2V0VG9wTWVudShkYXRhKTtcbiAgICAgICAgICBzZXRMb2FkaW5nTWVudShmYWxzZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9XG4gIH0sIFtkaXNwYXRjaF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XG4gICAgdmFyIG1vbnRoID0gbW9tZW50KCkuZm9ybWF0KFwiTVwiKTtcbiAgICB2YXIgeWVhciA9IG1vbWVudCgpLmZvcm1hdChcIllcIik7XG4gICAgaWYgKHVzZXJEYXRhKSB7XG4gICAgICBnZXRBdXRoKHVzZXJEYXRhKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhWzBdLnJvbGVDb2RlID09PSBcIlBJTUNBQlwiKSB7XG4gICAgICAgICAgICBzZXRSb2xlKFwiUElNQ0FCXCIpO1xuICAgICAgICAgICAgc2V0Rm9jdXMoXCJXT1JLLVZJU0lUXCIpO1xuICAgICAgICAgICAgZ2V0U2FsZXNUYXJnZXQ3NVBpbWNhKHVzZXJEYXRhLCBtb250aCwgeWVhcilcbiAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgc2V0U2FsZXNUYXJnZXQ3NShkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICAgICAgICAgIGdldFNhbGVzVGFyZ2V0UGltY2EodXNlckRhdGEsIG1vbnRoLCB5ZWFyKVxuICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICBzZXRTYWxlc1RhcmdldChkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICAgICAgICAgIGdldEZyb250bGluZXJQaW1jYSh1c2VyRGF0YSwgbW9udGgsIHllYXIpXG4gICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgIHNldEZyb250bGluZXIoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhWzBdLnJvbGVDb2RlID09PSBcIlNNUlwiKSB7XG4gICAgICAgICAgICBzZXRSb2xlKFwiU01SXCIpO1xuICAgICAgICAgICAgc2V0Rm9jdXMoXCJQTEFOXCIpO1xuXG4gICAgICAgICAgICBnZXRSZXZpc2VQbGFuTGlzdFNtcih1c2VyRGF0YSlcbiAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRSZXZpc2VQbGFuKGRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmV2aXNlIHBsYW5cIiwgZGF0YSk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBnZXRSZXZpc2VVblBsYW5MaXN0U21yKHVzZXJEYXRhKVxuICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFJldmlzZVVuUGxhbihkYXRhKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJldmlzZSB1bnBsYW5cIiwgZGF0YSk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBnZXRSZXZpc2VTcHJlYWRpbmdMaXN0U21yKHVzZXJEYXRhKVxuICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFJldmlzZVNwcmVhZGluZyhkYXRhKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJldmlzZSBzcHJlYWRpbmdcIiwgZGF0YSk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGdldFNhbGVzVGFyZ2V0U01SKHVzZXJEYXRhLCBtb250aCwgeWVhcilcbiAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgc2V0U2FsZXNUYXJnZXQoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBnZXRTYWxlc1RhcmdldDc1U01SKHVzZXJEYXRhLCBtb250aCwgeWVhcilcbiAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgc2V0U2FsZXNUYXJnZXQ3NShkYXRhKTtcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGdldFByb2R1a3RpZml0YXModXNlckRhdGEsIG1vbnRoLCB5ZWFyKVxuICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICBzZXRQcm9kdWt0aWZpdGFzKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZ2V0RnJvbnRsaW5lcih1c2VyRGF0YSwgbW9udGgsIHllYXIpXG4gICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgIHNldEZyb250bGluZXIoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBnZXROb28odXNlckRhdGEsIG1vbnRoLCB5ZWFyKVxuICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICBzZXROT08oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfVxuICB9LCBbZGlzcGF0Y2hdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XG4gICAgaWYgKHVzZXJEYXRhKSB7XG4gICAgICBpZiAoZm9jdXMgPT09IFwiUExBTlwiKSB7XG4gICAgICAgIGdldFBsYW5MaXN0KHVzZXJEYXRhKVxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBzZXRQbGFuKGRhdGEpO1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgZ2V0UGxhbkhpc3RvcnkodXNlckRhdGEpXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHNldFBsYW5IaXN0b3J5KGRhdGEpO1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZm9jdXMgPT09IFwiV09SSy1WSVNJVFwiKSB7XG4gICAgICAgIGdldEFsbFdvcmtWaXNpdCh1c2VyRGF0YSlcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBzZXRXb3JrVmlzaXQoXG4gICAgICAgICAgICAgIGRhdGEuZmlsdGVyKCh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsLmlzUGVuaWxhaWFuID09PSBmYWxzZTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzZXRXb3JrVmlzaXRIaXN0b3J5KFxuICAgICAgICAgICAgICBkYXRhLmZpbHRlcigodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5pc1BlbmlsYWlhbiA9PT0gdHJ1ZTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChmb2N1cyA9PT0gXCJTQUxFUy1UUkFDS0lOR1wiKSB7XG4gICAgICAgIGdldEFwcHJvdmFsKHVzZXJEYXRhKVxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICB2YXIgZGF0YUNoZWNrQm94ID0gZGF0YS5tYXAoKHZhbCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4geyAuLi52YWwsIGNoZWNrQm94OiBmYWxzZSB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZXRQZW5kaW5nQXBwcm92ZShkYXRhQ2hlY2tCb3gpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChmb2N1cyA9PT0gXCJVTlBMQU5cIikge1xuICAgICAgICBnZXRVbnBsYW5Nb250aGx5SGlzdG9yeSh1c2VyRGF0YSlcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBzZXRVbnBsYW5IaXN0b3J5KGRhdGEpO1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZm9jdXMgPT09IFwiU1BSRUFESU5HXCIpIHtcbiAgICAgICAgZ2V0U3ByZWFkaW5nTW9udGhseUhpc3RvcnkodXNlckRhdGEpXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgc2V0U3ByZWFkaW5nSGlzdG9yeShkYXRhKTtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9XG4gIH0sIFtmb2N1c10pO1xuXG4gIGNvbnN0IHJlbmRlclRvcE1lbnUgPSAoKSA9PiB7XG4gICAgdmFyIGF1dGggPSB0b3BNZW51LmZpbHRlcigodmFsKSA9PiB7XG4gICAgICBpZiAocm9sZSA9PT0gXCJTTVJcIikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHZhbC5tb2R1bGVDb2RlID09PSBcIlBMQU5cIiB8fFxuICAgICAgICAgIHZhbC5tb2R1bGVDb2RlID09PSBcIlVOUExBTlwiIHx8XG4gICAgICAgICAgdmFsLm1vZHVsZUNvZGUgPT09IFwiU1BSRUFESU5HXCJcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAocm9sZSA9PT0gXCJQSU1DQUJcIikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHZhbC5tb2R1bGVDb2RlID09PSBcIldPUkstVklTSVRcIiB8fCB2YWwubW9kdWxlQ29kZSA9PT0gXCJTQUxFUy1UUkFDS0lOR1wiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gYXV0aC5tYXAoKHZhbCwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICBmb2N1cyA9PT0gdmFsLm1vZHVsZUNvZGUgPyBzdHlsZXMuZm9jdXNfbWVudSA6IHN0eWxlcy5tZW51XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldEZvY3VzKHZhbC5tb2R1bGVDb2RlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt2YWwubW9kdWxlQ29kZSA9PT0gXCJQTEFOXCJcbiAgICAgICAgICAgICAgPyBcIlBsYW5cIlxuICAgICAgICAgICAgICA6IHZhbC5tb2R1bGVDb2RlID09PSBcIlVOUExBTlwiXG4gICAgICAgICAgICAgID8gXCJVbnBsYW5cIlxuICAgICAgICAgICAgICA6IHZhbC5tb2R1bGVDb2RlID09PSBcIlNQUkVBRElOR1wiXG4gICAgICAgICAgICAgID8gXCJTcHJlYWRpbmdcIlxuICAgICAgICAgICAgICA6IHZhbC5tb2R1bGVDb2RlID09PSBcIldPUkstVklTSVRcIlxuICAgICAgICAgICAgICA/IFwiV29yayBWaXNpdFwiXG4gICAgICAgICAgICAgIDogdmFsLm1vZHVsZUNvZGUgPT09IFwiU0FMRVMtVFJBQ0tJTkdcIlxuICAgICAgICAgICAgICA/IFwiQXBwcm92YWxcIlxuICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGlmIChhdXRoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIGF1dGgubGVuZ3RoID09PSAzXG4gICAgICAgICAgICAgID8gc3R5bGVzLm1lbnVfZ3JpZDNcbiAgICAgICAgICAgICAgOiBhdXRoLmxlbmd0aCA9PT0gMlxuICAgICAgICAgICAgICA/IHN0eWxlcy5tZW51X2dyaWQxXG4gICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIHtyZW5kZXIoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXJMaXN0ID0gKHR5cGUsIGRhdGEpID0+IHtcbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZm9udFNpemU6IFwiMTVweFwiLFxuICAgICAgICAgICAgY29sb3I6IFwicmdiKDIwOCwgMjA4LCAyMDgpXCIsXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgbWFyZ2luOiBcIjMwcHggMFwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBObyBJdGVtXG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRhdGEubWFwKCh2YWwsIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9e2ZvY3VzID09PSBcIlBMQU5cIiA/IGAvdmlzaXQvcGxhbi8ke2RhdGEuaWRNYXN0ZXJQbGFufWAgOiBcIi9cIn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjcwMFwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzVFNTg3M1wiLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxMHB4IDBcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxMiUgODglXCIgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0eXBlID09PSBcIlBMQU5cIiA/IFwiI0ZGRjFDQ1wiIDogXCIjZDFlNGUxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjRweFwiLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPT09IFwiUExBTlwiID8gXCIjZmViODAwXCIgOiBcIiM0MTg2N2FcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj57dmFsLm5hbWFPdXRsZXR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMTRweFwiLCBmb250V2VpZ2h0OiBcIjMwMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgIHt2YWwuYWxhbWF0T3V0bGV0fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyTGlzdFdvcmtWaXNpdCA9IChkYXRhKSA9PiB7XG4gICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjE1cHhcIixcbiAgICAgICAgICAgIGNvbG9yOiBcInJnYigyMDgsIDIwOCwgMjA4KVwiLFxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICAgIG1hcmdpbjogXCIzMHB4IDBcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgTm8gSXRlbVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkYXRhLm1hcCgodmFsLCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxMaW5rIGhyZWY9e2B3b3JrLXZpc2l0LyR7dmFsLmlkTWFzdGVyUGxhbn1gfT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNzAwXCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNUU1ODczXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjEwcHggMFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjEyJSA4OCVcIiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGRjFDQ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI0cHhcIixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZWI4MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj57dmFsLm5hbWFTTVJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMTRweFwiLCBmb250V2VpZ2h0OiBcIjMwMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgIFJheW9uIC0ge3ZhbC5yYXlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMTRweFwiLCBmb250V2VpZ2h0OiBcIjMwMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgIFByb2R1ayBGb2N1cyAtIHt2YWwucHJvZHVrRm9rdXN9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXJQbGFuID0gKCkgPT4ge1xuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICByZXR1cm4gPFNwaW5uZXIgLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPENhcmQgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBtYXJnaW5Ub3A6IFwiMjJweFwiIH19IHNoYWRvdz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcnZpZXd9PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9PlxuICAgICAgICAgICAgICAgICAge21vbWVudCgpLmZvcm1hdChcIkQgLyBNTU0gLyBZWVlZXCIpfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcIiM1RTU4NzNcIiwgbWFyZ2luVG9wOiBcIjdweFwiIH19PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMzZweFwiLCBmb250V2VpZ2h0OiBcIjYwMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICB7cGxhbkhpc3RvcnkubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMThweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAve3BsYW4ubGVuZ3RoICsgcGxhbkhpc3RvcnkubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbWFzdGVyLXBsYW4tdmlzaXRcIj5cbiAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI3cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkVCODAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHggMjJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI0MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIEFkZCBOZXcgUGxhbiArXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waWVfcGVyY2VudGFnZX0+XG4gICAgICAgICAgICAgICAgICB7cGxhbkhpc3RvcnkubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgICAgID8gXCIwJVwiXG4gICAgICAgICAgICAgICAgICAgIDogYCR7TWF0aC5yb3VuZChcbiAgICAgICAgICAgICAgICAgICAgICAgIChwbGFuSGlzdG9yeS5sZW5ndGggL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAocGxhbi5sZW5ndGggKyBwbGFuSGlzdG9yeS5sZW5ndGgpKSAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDEwMFxuICAgICAgICAgICAgICAgICAgICAgICl9JWB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPERvdWdobnV0XG4gICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhUGxhbn1cbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2RvbnV0T3B0aW9uc31cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjJweFwiLCBib3JkZXJSYWRpdXM6IFwiMzBweFwiIH19IHNoYWRvdz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxhbl9jb250YWluZXJ9PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNUU1ODczXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBZb3VyIFBsYW4gVG9kYXlcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjIycHggMFwiIH19PntyZW5kZXJMaXN0KFwiUExBTlwiLCBwbGFuKX08L2Rpdj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi92aXNpdC9wbGFuXCI+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9e1wiU2VlIERldGFpbHNcIn0gLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXJTcHJlYWRpbmcgPSAoKSA9PiB7XG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIG1hcmdpblRvcDogXCIyMnB4XCIgfX0gc2hhZG93PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmVydmlld30+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+XG4gICAgICAgICAgICAgICAgICB7bW9tZW50KCkuZm9ybWF0KFwiRCAvIE1NTSAvIFlZWVlcIil9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwiIzVFNTg3M1wiLCBtYXJnaW5Ub3A6IFwiN3B4XCIgfX0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIzNnB4XCIsIGZvbnRXZWlnaHQ6IFwiNjAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIHtzcHJlYWRpbmdIaXN0b3J5Lmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE4cHhcIiB9fT4ve3BsYW4ubGVuZ3RofTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi92aXNpdC9zcHJlYWRpbmcvXCJ9PlxuICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjdweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRUI4MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweCAyMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgQWRkIE5ldyBOT08gK1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGllX3BlcmNlbnRhZ2V9PjAlPC9kaXY+XG4gICAgICAgICAgICAgICAgPERvdWdobnV0XG4gICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhU3ByZWFkaW5nfVxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZG9udXRPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MTAwfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMnB4XCIsIGJvcmRlclJhZGl1czogXCIzMHB4XCIgfX0gc2hhZG93PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGFuX2NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1RTU4NzNcIixcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNwcmVhZGluZyBIaXN0b3J5XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIyMnB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICB7cmVuZGVyTGlzdChcIlNQUkVBRElOR1wiLCBzcHJlYWRpbmdIaXN0b3J5KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdmlzaXQvc3ByZWFkaW5nL2hpc3RvcnlcIj5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD17XCJTZWUgRGV0YWlsc1wifSAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlclVucGxhbiA9ICgpID0+IHtcbiAgICBpZiAobG9hZGluZykge1xuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI1cHhcIiwgbWFyZ2luVG9wOiBcIjIycHhcIiB9fSBzaGFkb3c+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVucGxhbl9ncmlkfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5udW1fdG90YWxfdW5wbGFufT5cbiAgICAgICAgICAgICAgICB7dW5wbGFuSGlzdG9yeS5sZW5ndGh9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjE0cHhcIiB9fT5Ub3RhbCBVbnBsYW4gVmlzaXQ8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfT57bW9tZW50KCkuZm9ybWF0KFwiTU1NTVwiKX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIG1hcmdpblRvcDogXCIxMXB4XCIgfX0gc2hhZG93PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi92aXNpdC91bnBsYW5cIj5cbiAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudW5wbGFuX2dyaWQyfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkX3VucGxhbn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIi04cHhcIiB9fT4rPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMTZweFwiLCBmb250V2VpZ2h0OiBcIjYwMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICBBbnkgVW5wbGFuIFZpc2l0P1xuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNCOUI5QzNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiMzAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxM3B4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIEFkZCB5b3VyIHVucGxhbiB2aXNpdCBoZXJlXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcIi9uZXh0LnN2Z1wifSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L0NhcmQ+XG5cbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjJweFwiLCBib3JkZXJSYWRpdXM6IFwiMzBweFwiIH19IHNoYWRvdz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxhbl9jb250YWluZXJ9PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNUU1ODczXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBVbnBsYW4gVmlzaXQgSGlzdG9yeVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMjJweCAwXCIgfX0+XG4gICAgICAgICAgICAgICAge3JlbmRlckxpc3QoXCJVTlBMQU5cIiwgdW5wbGFuSGlzdG9yeSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Zpc2l0L3VucGxhbi9oaXN0b3J5XCI+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9e1wiU2VlIERldGFpbHNcIn0gLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXJXb3JrVmlzaXQgPSAoKSA9PiB7XG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIG1hcmdpblRvcDogXCIyMnB4XCIgfX0gc2hhZG93PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmVydmlld30+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+XG4gICAgICAgICAgICAgICAgICB7bW9tZW50KCkuZm9ybWF0KFwiRCAvIE1NTSAvIFlZWVlcIil9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwiIzVFNTg3M1wiLCBtYXJnaW5Ub3A6IFwiN3B4XCIgfX0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIzNnB4XCIsIGZvbnRXZWlnaHQ6IFwiNjAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIHt3b3JrVmlzaXRIaXN0b3J5Lmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE4cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgL3t3b3JrVmlzaXQubGVuZ3RoICsgd29ya1Zpc2l0SGlzdG9yeS5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tYXN0ZXItd29yay12aXNpdFwiPlxuICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjdweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRUI4MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweCAyMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgQWRkIE5ldyArXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waWVfcGVyY2VudGFnZX0+XG4gICAgICAgICAgICAgICAgICB7d29ya1Zpc2l0SGlzdG9yeS5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICAgICAgPyBcIjAlXCJcbiAgICAgICAgICAgICAgICAgICAgOiBgJHtNYXRoLnJvdW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgKHdvcmtWaXNpdEhpc3RvcnkubGVuZ3RoIC9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKHdvcmtWaXNpdC5sZW5ndGggKyB3b3JrVmlzaXRIaXN0b3J5Lmxlbmd0aCkpICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwXG4gICAgICAgICAgICAgICAgICAgICAgKX0lYH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8RG91Z2hudXRcbiAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGFXb3JrVmlzaXR9XG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtkb251dE9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIycHhcIiwgYm9yZGVyUmFkaXVzOiBcIjMwcHhcIiB9fSBzaGFkb3c+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsYW5fY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxOHB4XCIsXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzVFNTg3M1wiLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgWW91ciBXb3JrIFZpc2l0IFRvZGF5XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIyMnB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICB7cmVuZGVyTGlzdFdvcmtWaXNpdCh3b3JrVmlzaXQpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi93b3JrLXZpc2l0XCI+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9e1wiU2VlIERldGFpbHNcIn0gLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBvbkFwcHJvdmUgPSAoKSA9PiB7XG4gICAgdmFyIGNoZWNrUGVuZGluZyA9IHBlbmRpbmdBcHByb3ZlLmZpbHRlcigodmFsKSA9PiB7XG4gICAgICByZXR1cm4gdmFsLmNoZWNrQm94O1xuICAgIH0pO1xuICAgIGlmIChjaGVja1BlbmRpbmcubGVuZ3RoKSB7XG4gICAgICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcbiAgICAgIGlmICh1c2VyRGF0YSkge1xuICAgICAgICBzZXRMb2FkaW5nQXBwcm92ZSh0cnVlKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGVja1BlbmRpbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBtb2R1bGUgPVxuICAgICAgICAgICAgY2hlY2tQZW5kaW5nW2ldLm1vZHVsID09PSBcIlBsYW5cIlxuICAgICAgICAgICAgICA/IFwiVklTSVRQTEFOXCJcbiAgICAgICAgICAgICAgOiBjaGVja1BlbmRpbmdbaV0ubW9kdWwgPT09IFwiVW5QbGFuXCJcbiAgICAgICAgICAgICAgPyBcIlZJU0lUVU5QTEFOXCJcbiAgICAgICAgICAgICAgOiBjaGVja1BlbmRpbmdbaV0ubW9kdWwgPT09IFwiU3ByZWFkaW5nXCJcbiAgICAgICAgICAgICAgPyBcIlNQUkVBRElOR1wiXG4gICAgICAgICAgICAgIDogXCJcIjtcblxuICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBhcHByb3ZhbFRyYW5zYWN0aW9uRGF0YU1vZGVsOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzeXN0ZW1Db2RlOiBcIlNBS0FNT1JcIixcbiAgICAgICAgICAgICAgICBtb2R1bGVDb2RlOiBtb2R1bGUsXG4gICAgICAgICAgICAgICAgYXBwcm92YWxMZXZlbDogMSxcbiAgICAgICAgICAgICAgICBpZDogY2hlY2tQZW5kaW5nW2ldLmlkLFxuICAgICAgICAgICAgICAgIGFwcHJvdmFsSUQ6XG4gICAgICAgICAgICAgICAgICBjaGVja1BlbmRpbmdbaV0ubW9kdWwgPT09IFwiUGxhblwiXG4gICAgICAgICAgICAgICAgICAgID8gMzUyXG4gICAgICAgICAgICAgICAgICAgIDogY2hlY2tQZW5kaW5nW2ldLm1vZHVsID09PSBcIlVuUGxhblwiXG4gICAgICAgICAgICAgICAgICAgID8gMzU4XG4gICAgICAgICAgICAgICAgICAgIDogY2hlY2tQZW5kaW5nW2ldLm1vZHVsID09PSBcIlNwcmVhZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgID8gMzU5XG4gICAgICAgICAgICAgICAgICAgIDogXCJcIixcbiAgICAgICAgICAgICAgICBkb2NObzogY2hlY2tQZW5kaW5nW2ldLm5vbW9yRG9rdW1lbixcbiAgICAgICAgICAgICAgICBwaWM6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgYXBwcm92YWxMaW5lOiAwLFxuICAgICAgICAgICAgICAgIG5vdGVzOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIG5lZWRBcHByb3ZlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFwcHJvdmVEYXRlOiBub3cudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3lzdGVtQ29kZTogXCJTQUtBTU9SXCIsXG4gICAgICAgICAgICBtb2R1bGVDb2RlOiBtb2R1bGUsXG4gICAgICAgICAgICBkb2NObzogY2hlY2tQZW5kaW5nW2ldLm5vbW9yRG9rdW1lbixcbiAgICAgICAgICAgIGFwcHJvdmVyRnJvbTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgIGFwcHJvdmVyVG86IFwic3RyaW5nXCIsXG4gICAgICAgICAgICBzdGF0dXM6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgIG5vdGVzOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgY3JlYXRlZEJ5OiB1c2VyRGF0YS51c2VybmFtZSxcbiAgICAgICAgICAgIGNyZWF0ZWREYXRlOiBub3cudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgIGVtYWlsRGF0YToge1xuICAgICAgICAgICAgICBzeXN0ZW1Db2RlOiBcIlNBS0FNT1JcIixcbiAgICAgICAgICAgICAgbW9kdWxlQ29kZTogbW9kdWxlLFxuICAgICAgICAgICAgICBkb2N1bWVudE51bWJlcjogY2hlY2tQZW5kaW5nW2ldLm5vbW9yRG9rdW1lbixcbiAgICAgICAgICAgICAgZW1haWxUbzogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgZW1haWxDQzogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgZW1haWxCQ0M6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgIGVtYWlsU3ViamVjdDogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgZW1haWxCb2R5OiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGFwcHJvdmFsQXBwcm92ZShcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBjaGVja1BlbmRpbmdbaV0ubW9kdWwsXG4gICAgICAgICAgICBjaGVja1BlbmRpbmdbaV0uaWQsXG4gICAgICAgICAgICB1c2VyRGF0YVxuICAgICAgICAgIClcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChpID09PSBjaGVja1BlbmRpbmcubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmdBcHByb3ZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBnZXRBcHByb3ZhbCh1c2VyRGF0YSlcbiAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhQ2hlY2tCb3ggPSBkYXRhLm1hcCgodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4udmFsLCBjaGVja0JveDogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFBlbmRpbmdBcHByb3ZlKGRhdGFDaGVja0JveCk7XG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXJBcHByb3ZhbCA9ICgpID0+IHtcbiAgICB2YXIgY2hlY2tQZW5kaW5nID0gcGVuZGluZ0FwcHJvdmUuZmlsdGVyKCh2YWwpID0+IHtcbiAgICAgIHJldHVybiB2YWwuY2hlY2tCb3g7XG4gICAgfSk7XG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjJweFwiLCBib3JkZXJSYWRpdXM6IFwiMzBweFwiIH19IHNoYWRvdz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxhbl9jb250YWluZXJ9PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNUU1ODczXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBQZW5kaW5nIEFwcHJvdmFsXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMjJweCAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxMCUgOTAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIxMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCIxMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPENoZWNrQm94XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGVja1BlbmRpbmcubGVuZ3RoID09PSBwZW5kaW5nQXBwcm92ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWxsID0gcGVuZGluZ0FwcHJvdmUubWFwKCh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnZhbCwgY2hlY2tCb3g6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGVuZGluZ0FwcHJvdmUoYWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWxsID0gcGVuZGluZ0FwcHJvdmUubWFwKCh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnZhbCwgY2hlY2tCb3g6IHRydWUgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQZW5kaW5nQXBwcm92ZShhbGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrUGVuZGluZy5sZW5ndGggPT09IHBlbmRpbmdBcHByb3ZlLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQXBwcm92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2NoZWNrUGVuZGluZy5sZW5ndGggPyBcImdyZWVuXCIgOiBcImRpc2FibGVcIn1cbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcIkFwcHJvdmVcIn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAge3BlbmRpbmdBcHByb3ZlLm1hcCgodmFsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjEwJSA5MCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiOHB4IDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3ZhbC5jaGVja0JveH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVuZGluZ0FwcHJvdmUuc3BsaWNlKGluZGV4LCAxLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucGVuZGluZ0FwcHJvdmVbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrQm94OiAhdmFsLmNoZWNrQm94LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RHVtbXkoZHVtbXkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5zZXRGb2N1c0FwcHJvdmFsKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgL2FwcHJvdmFsLyR7dmFsLm1vZHVsfS8ke3ZhbC5pZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI3MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMmZyIDFmclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pnt2YWwudXNlcm5hbWVTTVJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZWI4MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWwubW9kdWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjcwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWwubmFtYU91dGxldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjEycHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWwuYWxhbWF0T3V0bGV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlcldvcmtEYXkgPSAoKSA9PiB7XG4gICAgaWYgKHdvcmtEYXkubGVuZ3RoICE9PSAwICYmICFsb2FkaW5nICYmICFsb2FkaW5nTWVudSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIycHhcIiwgYm9yZGVyUmFkaXVzOiBcIjZweFwiIH19IHNoYWRvdz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsYW5fY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfdGl0bGV9PlxuICAgICAgICAgICAgICBXb3JraW5nIERheSB7bW9tZW50KCkuZm9ybWF0KFwiTU1NTSBZWVlZXCIpfVxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiNzAwXCIgfX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiI0ZFQjgwMFwiIH19Pnt3b3JrRGF5LmhhcmlLZXJqYX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMTJweFwiLCBmb250V2VpZ2h0OiBcIjQwMFwiIH19PlxuICAgICAgICAgICAgICAgICAge1wiIC8gXCJ9XG4gICAgICAgICAgICAgICAgICB7d29ya0RheS50b3RhbEhhcmlLZXJqYX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuICBjb25zdCByZW5kZXJQcm9ncmVzcyA9ICgpID0+IHtcbiAgICBjb25zdCByZW5kZXJTYWxlcyA9ICh0aXRsZSwgZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjFmciAyZnJcIiB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfdGl0bGV9Pnt0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfbnVtYmVyfT5cbiAgICAgICAgICAgICAge2RhdGEuc2FsZXMudG9Mb2NhbGVTdHJpbmcoXCJpZC1JRFwiKX1cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMTJweFwiLCBmb250V2VpZ2h0OiBcIjQwMFwiIH19PlxuICAgICAgICAgICAgICAgIHtcIiAvIFwifVxuICAgICAgICAgICAgICAgIHtkYXRhLnRhcmdldC50b0xvY2FsZVN0cmluZyhcImlkLUlEXCIpfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxM3B4IDAgMCAwXCIgfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcn0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcl9ub3d9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGAkeyhkYXRhLnNhbGVzIC8gZGF0YS50YXJnZXQpICogMTAwfSVgLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfTtcbiAgICBpZiAoIWxvYWRpbmcgJiYgIWxvYWRpbmdNZW51KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjJweFwiLCBib3JkZXJSYWRpdXM6IFwiNnB4XCIgfX0gc2hhZG93PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxhbl9jb250YWluZXJ9PlxuICAgICAgICAgICAge3NhbGVzVGFyZ2V0Lmxlbmd0aCAhPT0gMCA/IHJlbmRlclNhbGVzKFwiU2FsZXNcIiwgc2FsZXNUYXJnZXQpIDogXCJcIn1cbiAgICAgICAgICAgIHtzYWxlc1RhcmdldDc1Lmxlbmd0aCAhPT0gMFxuICAgICAgICAgICAgICA/IHJlbmRlclNhbGVzKFwiU2FsZXMgNzUlXCIsIHNhbGVzVGFyZ2V0NzUpXG4gICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgIHtOT08ubGVuZ3RoICE9PSAwID8gcmVuZGVyU2FsZXMoXCJTYWxlcyBOT09cIiwgTk9PKSA6IFwiXCJ9XG4gICAgICAgICAgICB7ZnJvbnRsaW5lci5sZW5ndGggIT09IDAgPyAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyIDFmclwiIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc190aXRsZX0+RnJvbnRsaW5lcjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19udW1iZXJ9PlxuICAgICAgICAgICAgICAgICAgICB7ZnJvbnRsaW5lci5zYWxlc31cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMTJweFwiLCBmb250V2VpZ2h0OiBcIjQwMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgIHtcIiAvIFwifVxuICAgICAgICAgICAgICAgICAgICAgIHtmcm9udGxpbmVyLnRhcmdldH1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMTNweCAwIDAgMFwiIH19PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJ9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJfbm93fVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHsoZnJvbnRsaW5lci5hY2ggLyBmcm9udGxpbmVyLnRhcmdldCkgKiAxMDB9JWAsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtwcm9kdWt0aWZpdGFzLmxlbmd0aCAhPT0gMCA/IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIxZnIgMWZyXCIgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX3RpdGxlfT5Qcm9kdWt0aWZpdGFzPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX251bWJlcn0+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9kdWt0aWZpdGFzLmFjaGlldmVtZW50fVxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIxMnB4XCIsIGZvbnRXZWlnaHQ6IFwiNDAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAge1wiIC8gXCJ9XG4gICAgICAgICAgICAgICAgICAgICAge3Byb2R1a3RpZml0YXMudGFyZ2V0fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxM3B4IDAgMCAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcn0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcl9ub3d9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGAke1xuICAgICAgICAgICAgICAgICAgICAgICAgKHByb2R1a3RpZml0YXMuYWNoaWV2ZW1lbnQgLyBwcm9kdWt0aWZpdGFzLnRhcmdldCkgKiAxMDBcbiAgICAgICAgICAgICAgICAgICAgICB9JWAsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyUmV2aXNlTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCByZW5kZXJMaXN0ID0gKGRhdGEsIG1vZHVsKSA9PiB7XG4gICAgICB2YXIgcmVuZGVyID0gZGF0YS5tYXAoKHZhbCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICAgICAgICAgICAgbWFyZ2luOiBcIjhweCAwXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWwpO1xuICAgICAgICAgICAgICBhY3Rpb25zLnNldEZvY3VzQXBwcm92YWwodmFsKTtcbiAgICAgICAgICAgICAgaWYgKG1vZHVsID09PSBcIlBsYW5cIikge1xuICAgICAgICAgICAgICAgIGdldFZpc2l0UGxhblByb2R1Y3QodmFsLmlkVmlzaXRQbGFuKVxuICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGFJbnZvaWNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnMuc2V0UmV2aXNlQXZhYmlsaXR5KGRhdGFJbnZvaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YUludm9pY2UpO1xuICAgICAgICAgICAgICAgICAgICBnZXRJbnZvaWNlRGF0YVBvc20odmFsLmlkVmlzaXRQbGFuKVxuICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRhUG9zbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5zZXRSZXZpc2VWaXNpYmlsaXR5KGRhdGFQb3NtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvcmV2aXNlLyR7bW9kdWx9LyR7dmFsLmlkVmlzaXRQbGFufWApO1xuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vZHVsID09PSBcIlVuUGxhblwiKSB7XG4gICAgICAgICAgICAgICAgZ2V0VW5QbGFuUHJvZHVjdHModmFsLmlkKVxuICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGFJbnZvaWNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFJbnZvaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5zZXRSZXZpc2VBdmFiaWxpdHkoZGF0YUludm9pY2UpO1xuICAgICAgICAgICAgICAgICAgICBnZXRJbnZvaWNlRGF0YVBvc21VbnBsYW4odmFsLmlkKVxuICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRhUG9zbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5zZXRSZXZpc2VWaXNpYmlsaXR5KGRhdGFQb3NtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFQb3NtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvcmV2aXNlLyR7bW9kdWx9LyR7dmFsLmlkfWApO1xuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vZHVsID09PSBcIlNwcmVhZGluZ1wiKSB7XG4gICAgICAgICAgICAgICAgZ2V0U3ByZWFkaW5nUHJvZHVjdCh2YWwuaWQpXG4gICAgICAgICAgICAgICAgICAudGhlbigoZGF0YUludm9pY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YUludm9pY2UpO1xuICAgICAgICAgICAgICAgICAgICBnZXRJbnZvaWNlRGF0YVBvc21TcHJlYWRpbmcodmFsLmlkKVxuICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRhUG9zbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5zZXRSZXZpc2VWaXNpYmlsaXR5KGRhdGFQb3NtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFQb3NtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvcmV2aXNlLyR7bW9kdWx9LyR7dmFsLmlkfWApO1xuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIHJvdXRlci5wdXNoKGAvcmV2aXNlLyR7bW9kdWx9LyR7dmFsLmlkfWApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNzAwXCIsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICAgICAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjJmciAxZnJcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdj57dmFsLnVzZXJuYW1lU01SfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmViODAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjFweFwiLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7bW9kdWx9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjcwMFwiLFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxMnB4XCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt2YWwubmFtYU91dGxldH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjEycHhcIiB9fT57dmFsLmFsYW1hdE91dGxldH08L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlbmRlcjtcbiAgICB9O1xuICAgIGlmIChyZXZpc2VQbGFuLmxlbmd0aCB8fCByZXZpc2VVblBsYW4ubGVuZ3RoIHx8IHJldmlzZVNwcmVhZGluZy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBtYXJnaW5Ub3A6IFwiMjJweFwiLCBjb2xvcjogXCIjNUU1ODczXCIgfX1cbiAgICAgICAgICBzaGFkb3dcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxhbl9jb250YWluZXJ9PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1RTU4NzNcIixcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2PlJldmlzZSBWaXNpdCA8L2Rpdj5cbiAgICAgICAgICAgICAge3JlbmRlckxpc3QocmV2aXNlUGxhbiwgXCJQbGFuXCIpfVxuICAgICAgICAgICAgICB7cmVuZGVyTGlzdChyZXZpc2VVblBsYW4sIFwiVW5QbGFuXCIpfVxuICAgICAgICAgICAgICB7cmVuZGVyTGlzdChyZXZpc2VTcHJlYWRpbmcsIFwiU3ByZWFkaW5nXCIpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldEdyZWV0aW5nVGltZSA9IChtKSA9PiB7XG4gICAgdmFyIGcgPSBudWxsOyAvL3JldHVybiBnXG5cbiAgICBpZiAoIW0gfHwgIW0uaXNWYWxpZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvL2lmIHdlIGNhbid0IGZpbmQgYSB2YWxpZCBvciBmaWxsZWQgbW9tZW50LCB3ZSByZXR1cm4uXG5cbiAgICB2YXIgc3BsaXRfYWZ0ZXJub29uID0gMTI7IC8vMjRociB0aW1lIHRvIHNwbGl0IHRoZSBhZnRlcm5vb25cbiAgICB2YXIgc3BsaXRfZXZlbmluZyA9IDE3OyAvLzI0aHIgdGltZSB0byBzcGxpdCB0aGUgZXZlbmluZ1xuICAgIHZhciBjdXJyZW50SG91ciA9IHBhcnNlRmxvYXQobS5mb3JtYXQoXCJISFwiKSk7XG5cbiAgICBpZiAoY3VycmVudEhvdXIgPj0gc3BsaXRfYWZ0ZXJub29uICYmIGN1cnJlbnRIb3VyIDw9IHNwbGl0X2V2ZW5pbmcpIHtcbiAgICAgIGcgPSBcIkFmdGVybm9vbixcIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRIb3VyID49IHNwbGl0X2V2ZW5pbmcpIHtcbiAgICAgIGcgPSBcIkV2ZW5pbmcsXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGcgPSBcIk1vcm5pbmcsXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGc7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyUGFnZSA9ICgpID0+IHtcbiAgICBpZiAobG9hZGluZyAmJiBsb2FkaW5nTWVudSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgICAgIDxCb3ROYXYgLz5cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJnX3RvcH0gLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2luZm9fZ3JpZH0+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHB9XG4gICAgICAgICAgICAgICAgICBzcmM9e1BQID8gUFAgOiBcIi9wcm9maWxlLW5hdjEuc3ZnXCJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMTVweFwiIH19PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCIxNHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIHtnZXRHcmVldGluZ1RpbWUobW9tZW50KCkpfSB7c3RhdGUudXNlclJlZHVjZXIudXNlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjEycHhcIiB9fT57cm9sZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvbm90aWZpY2F0aW9uXCJ9PlxuICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5ub3RpZn0gc3JjPVwiL25vdGlmLnN2Z1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAge25vdGlmID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcIiByZWxhdGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogXCItMzBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBcIi0xNHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjFweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZlYjgwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25ld0Fubm91bmNlbWVudC5sZW5ndGggPCA5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbmV3QW5ub3VuY2VtZW50Lmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiOStcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgICAgICAgICB7cmVuZGVyVG9wTWVudSgpfVxuICAgICAgICAgICAgICAgICAge2ZvY3VzID09PSBcIlBMQU5cIlxuICAgICAgICAgICAgICAgICAgICA/IHJlbmRlclBsYW4oKVxuICAgICAgICAgICAgICAgICAgICA6IGZvY3VzID09PSBcIlVOUExBTlwiXG4gICAgICAgICAgICAgICAgICAgID8gcmVuZGVyVW5wbGFuKClcbiAgICAgICAgICAgICAgICAgICAgOiBmb2N1cyA9PT0gXCJTUFJFQURJTkdcIlxuICAgICAgICAgICAgICAgICAgICA/IHJlbmRlclNwcmVhZGluZygpXG4gICAgICAgICAgICAgICAgICAgIDogZm9jdXMgPT09IFwiV09SSy1WSVNJVFwiXG4gICAgICAgICAgICAgICAgICAgID8gcmVuZGVyV29ya1Zpc2l0KClcbiAgICAgICAgICAgICAgICAgICAgOiBmb2N1cyA9PT0gXCJTQUxFUy1UUkFDS0lOR1wiXG4gICAgICAgICAgICAgICAgICAgID8gcmVuZGVyQXBwcm92YWwoKVxuICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICB7cmVuZGVyUmV2aXNlTGlzdCgpfVxuICAgICAgICAgICAgICAgICAge3JlbmRlcldvcmtEYXkoKX1cbiAgICAgICAgICAgICAgICAgIHtyZW5kZXJQcm9ncmVzcygpfVxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTIwcHhcIiB9fSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxCb3ROYXYgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHJlbmRlclBhZ2UoKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBrZWVwU3RhdGU6IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiS0VFUF9TVEFURVwiLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNldERlZmF1bHRSZXZpc2U6IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfREVGQVVMVF9SRVZJU0VcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXREZWZhdWx0VmlzaXRQbGFuOiBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX0RFRkFVTFRfVklTSVRfUExBTlwiIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNldERlZmF1bHRWaXNpdFNwcmVhZGluZzogYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9ERUZBVUxUX1ZJU0lUX1NQUkVBRElOR1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNldERlZmF1bHRWaXNpdFVucGxhbjogYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9ERUZBVUxUX1ZJU0lUX1VOUExBTlwiIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNldEZvY3VzQXBwcm92YWw6IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX0ZPQ1VTX0FQUFJPVkFMXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0TWVudTogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfTUVOVVwiLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNldFBsYW5BdmFiaWxpdHk6IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1BMQU5fQVZBQklMSVRZXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0UGxhbkNhdGF0YW46IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1BMQU5fQ0FUQVRBTlwiLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNldFBsYW5DaGVja0luOiBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9QTEFOX0NIRUNLX0lOXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0UGxhblZpc2liaWxpdHk6IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1BMQU5fVklTSUJJTElUWVwiLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNldFJldmlzZUF2YWJpbGl0eTogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfUkVWSVNFX0FWQUJJTElUWVwiLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNldFJldmlzZVZpc2liaWxpdHk6IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1JFVklTRV9WSVNJQklMSVRZXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0U3ByZWFkaW5nQ2F0YXRhbjogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfU1BSRUFESU5HX0NBVEFUQU5cIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRTcHJlYWRpbmdBdmFiaWxpdHk6IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1NQUkVBRElOR19BVkFCSUxJVFlcIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRTcHJlYWRpbmdBbGFtYXQ6IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1NQUkVBRElOR19BTEFNQVRcIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRTcHJlYWRpbmdDaGVja0luOiBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9TUFJFQURJTkdfQ0hFQ0tfSU5cIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRTcHJlYWRpbmdKZW5pc0NoYW5uZWw6IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1NQUkVBRElOR19KRU5JU19DSEFOTkVMXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0U3ByZWFkaW5nTmV3T3V0bGV0OiBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9TUFJFQURJTkdfTkVXX09VVExFVFwiLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNldFNwcmVhZGluZ091dGxldDogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfU1BSRUFESU5HX09VVExFVFwiLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNldFNwcmVhZGluZ1Zpc2liaWxpdHk6IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1NQUkVBRElOR19WSVNJQklMSVRZXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0VW5wbGFuQXZhYmlsaXR5OiBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9VTlBMQU5fQVZBQklMSVRZXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0VW5wbGFuQ2F0YXRhbjogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfVU5QTEFOX0NBVEFUQU5cIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRVbnBsYW5DaGVja0luOiBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9VTlBMQU5fQ0hFQ0tfSU5cIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRVbnBsYW5KZW5pc0NoYW5uZWw6IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1VOUExBTl9KRU5JU19DSEFOTkVMXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0VW5wbGFuT3V0bGV0OiBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9VTlBMQU5fT1VUTEVUXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0VW5wbGFuVmlzaWJpbGl0eTogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfVU5QTEFOX1ZJU0lCSUxJVFlcIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICB1c2VyTG9naW46IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiVVNFUl9MT0dJTlwiLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IHVzZXJSZWR1Y2VyLCBkZWZhdWx0VXNlciB9IGZyb20gXCIuL3JlZHVjZXJzL3VzZXJcIjtcclxuaW1wb3J0IHsgbWVudVJlZHVjZXIsIGRlZmF1bHRNZW51IH0gZnJvbSBcIi4vcmVkdWNlcnMvbWVudVwiO1xyXG5pbXBvcnQgeyB2aXNpdFBsYW5SZWR1Y2VyLCBkZWZhdWx0VmlzaXRQbGFuIH0gZnJvbSBcIi4vcmVkdWNlcnMvdmlzaXRQbGFuXCI7XHJcbmltcG9ydCB7IHZpc2l0VW5wbGFuUmVkdWNlciwgZGVmYXVsdFZpc2l0VW5wbGFuIH0gZnJvbSBcIi4vcmVkdWNlcnMvdmlzaXRVbnBsYW5cIjtcclxuaW1wb3J0IHtcclxuICB2aXNpdFNwcmVhZGluZ1JlZHVjZXIsXHJcbiAgZGVmYXVsdFZpc2l0U3ByZWFkaW5nLFxyXG59IGZyb20gXCIuL3JlZHVjZXJzL3Zpc2l0U3ByZWFkaW5nXCI7XHJcblxyXG5pbXBvcnQgeyBhcHByb3ZhbFJlZHVjZXIsIGRlZmF1bHRBcHByb3ZhbCB9IGZyb20gXCIuL3JlZHVjZXJzL2FwcHJvdmFsXCI7XHJcblxyXG5pbXBvcnQgeyByZXZpc2VSZWR1Y2VyLCBkZWZhdWx0UmV2aXNlIH0gZnJvbSBcIi4vcmVkdWNlcnMvcmV2aXNlXCI7XHJcblxyXG5pbXBvcnQgdXNlckxvZ2luIGZyb20gXCIuL2FjdGlvbnMvdXNlckxvZ2luXCI7XHJcbmltcG9ydCBzZXRNZW51IGZyb20gXCIuL2FjdGlvbnMvc2V0TWVudVwiO1xyXG5pbXBvcnQga2VlcFN0YXRlIGZyb20gXCIuL2FjdGlvbnMva2VlcFN0YXRlXCI7XHJcblxyXG5pbXBvcnQgc2V0UGxhblZpc2liaWxpdHkgZnJvbSBcIi4vYWN0aW9ucy9zZXRQbGFuVmlzaWJpbGl0eVwiO1xyXG5pbXBvcnQgc2V0UGxhbkF2YWJpbGl0eSBmcm9tIFwiLi9hY3Rpb25zL3NldFBsYW5BdmFiaWxpdHlcIjtcclxuaW1wb3J0IHNldFBsYW5DYXRhdGFuIGZyb20gXCIuL2FjdGlvbnMvc2V0UGxhbkNhdGF0YW5cIjtcclxuaW1wb3J0IHNldFBsYW5DaGVja0luIGZyb20gXCIuL2FjdGlvbnMvc2V0UGxhbkNoZWNrSW5cIjtcclxuXHJcbmltcG9ydCBzZXRVbnBsYW5BdmFiaWxpdHkgZnJvbSBcIi4vYWN0aW9ucy9zZXRVbnBsYW5BdmFiaWxpdHlcIjtcclxuaW1wb3J0IHNldFVucGxhblZpc2liaWxpdHkgZnJvbSBcIi4vYWN0aW9ucy9zZXRVbnBsYW5WaXNpYmlsaXR5XCI7XHJcbmltcG9ydCBzZXRVbnBsYW5DYXRhdGFuIGZyb20gXCIuL2FjdGlvbnMvc2V0VW5wbGFuQ2F0YXRhblwiO1xyXG5pbXBvcnQgc2V0VW5wbGFuQ2hlY2tJbiBmcm9tIFwiLi9hY3Rpb25zL3NldFVucGxhbkNoZWNrSW5cIjtcclxuaW1wb3J0IHNldFVucGxhbkplbmlzQ2hhbm5lbCBmcm9tIFwiLi9hY3Rpb25zL3NldFVucGxhbkplbmlzQ2hhbm5lbFwiO1xyXG5pbXBvcnQgc2V0VW5wbGFuT3V0bGV0IGZyb20gXCIuL2FjdGlvbnMvc2V0VW5wbGFuT3V0bGV0XCI7XHJcblxyXG5pbXBvcnQgc2V0U3ByZWFkaW5nQXZhYmlsaXR5IGZyb20gXCIuL2FjdGlvbnMvc2V0U3ByZWFkaW5nQXZhYmlsaXR5XCI7XHJcbmltcG9ydCBzZXRTcHJlYWRpbmdWaXNpYmlsaXR5IGZyb20gXCIuL2FjdGlvbnMvc2V0U3ByZWFkaW5nVmlzaWJpbGl0eVwiO1xyXG5pbXBvcnQgc2V0U3ByZWFkaW5nQ2F0YXRhbiBmcm9tIFwiLi9hY3Rpb25zL3NldFNwcmVhZGluZ0NhdGF0YW5cIjtcclxuaW1wb3J0IHNldFNwcmVhZGluZ0FsYW1hdCBmcm9tIFwiLi9hY3Rpb25zL3NldFNwcmVhZGluZ0FsYW1hdFwiO1xyXG5pbXBvcnQgc2V0U3ByZWFkaW5nTmV3T3V0bGV0IGZyb20gXCIuL2FjdGlvbnMvc2V0U3ByZWFkaW5nTmV3T3V0bGV0XCI7XHJcbmltcG9ydCBzZXRTcHJlYWRpbmdDaGVja0luIGZyb20gXCIuL2FjdGlvbnMvc2V0U3ByZWFkaW5nQ2hlY2tJblwiO1xyXG5pbXBvcnQgc2V0U3ByZWFkaW5nSmVuaXNDaGFubmVsIGZyb20gXCIuL2FjdGlvbnMvc2V0U3ByZWFkaW5nSmVuaXNDaGFubmVsXCI7XHJcbmltcG9ydCBzZXRTcHJlYWRpbmdPdXRsZXQgZnJvbSBcIi4vYWN0aW9ucy9zZXRTcHJlYWRpbmdPdXRsZXRcIjtcclxuXHJcbmltcG9ydCBzZXREZWZhdWx0VmlzaXRQbGFuIGZyb20gXCIuL2FjdGlvbnMvc2V0RGVmYXVsdFZpc2l0UGxhblwiO1xyXG5pbXBvcnQgc2V0RGVmYXVsdFZpc2l0VW5wbGFuIGZyb20gXCIuL2FjdGlvbnMvc2V0RGVmYXVsdFZpc2l0VW5wbGFuXCI7XHJcbmltcG9ydCBzZXREZWZhdWx0VmlzaXRTcHJlYWRpbmcgZnJvbSBcIi4vYWN0aW9ucy9zZXREZWZhdWx0VmlzaXRTcHJlYWRpbmdcIjtcclxuaW1wb3J0IHNldERlZmF1bHRSZXZpc2UgZnJvbSBcIi4vYWN0aW9ucy9zZXREZWZhdWx0UmV2aXNlXCI7XHJcblxyXG5pbXBvcnQgc2V0UmV2aXNlQXZhYmlsaXR5IGZyb20gXCIuL2FjdGlvbnMvc2V0UmV2aXNlQXZhYmlsaXR5XCI7XHJcbmltcG9ydCBzZXRSZXZpc2VWaXNpYmlsaXR5IGZyb20gXCIuL2FjdGlvbnMvc2V0UmV2aXNlVmlzaWJpbGl0eVwiO1xyXG5cclxuaW1wb3J0IHNldEZvY3VzQXBwcm92YWwgZnJvbSBcIi4vYWN0aW9ucy9zZXRGb2N1c0FwcHJvdmFsXCI7XHJcblxyXG5jb25zdCBTdG9yZXMgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBTdG9yZSA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoXHJcbiAgICAocHJldlN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VyUmVkdWNlcjogdXNlclJlZHVjZXIocHJldlN0YXRlLnVzZXJSZWR1Y2VyLCBhY3Rpb24pLFxyXG4gICAgICAgIG1lbnVSZWR1Y2VyOiBtZW51UmVkdWNlcihwcmV2U3RhdGUubWVudVJlZHVjZXIsIGFjdGlvbiksXHJcbiAgICAgICAgdmlzaXRQbGFuUmVkdWNlcjogdmlzaXRQbGFuUmVkdWNlcihwcmV2U3RhdGUudmlzaXRQbGFuUmVkdWNlciwgYWN0aW9uKSxcclxuICAgICAgICB2aXNpdFVucGxhblJlZHVjZXI6IHZpc2l0VW5wbGFuUmVkdWNlcihcclxuICAgICAgICAgIHByZXZTdGF0ZS52aXNpdFVucGxhblJlZHVjZXIsXHJcbiAgICAgICAgICBhY3Rpb25cclxuICAgICAgICApLFxyXG4gICAgICAgIHZpc2l0U3ByZWFkaW5nUmVkdWNlcjogdmlzaXRTcHJlYWRpbmdSZWR1Y2VyKFxyXG4gICAgICAgICAgcHJldlN0YXRlLnZpc2l0U3ByZWFkaW5nUmVkdWNlcixcclxuICAgICAgICAgIGFjdGlvblxyXG4gICAgICAgICksXHJcbiAgICAgICAgYXBwcm92YWxSZWR1Y2VyOiBhcHByb3ZhbFJlZHVjZXIocHJldlN0YXRlLmFwcHJvdmFsUmVkdWNlciwgYWN0aW9uKSxcclxuICAgICAgICByZXZpc2VSZWR1Y2VyOiByZXZpc2VSZWR1Y2VyKHByZXZTdGF0ZS5yZXZpc2VSZWR1Y2VyLCBhY3Rpb24pLFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdXNlclJlZHVjZXI6IGRlZmF1bHRVc2VyLFxyXG4gICAgICBtZW51UmVkdWNlcjogZGVmYXVsdE1lbnUsXHJcbiAgICAgIHZpc2l0UGxhblJlZHVjZXI6IGRlZmF1bHRWaXNpdFBsYW4sXHJcbiAgICAgIHZpc2l0VW5wbGFuUmVkdWNlcjogZGVmYXVsdFZpc2l0VW5wbGFuLFxyXG4gICAgICB2aXNpdFNwcmVhZGluZ1JlZHVjZXI6IGRlZmF1bHRWaXNpdFNwcmVhZGluZyxcclxuICAgICAgYXBwcm92YWxSZWR1Y2VyOiBkZWZhdWx0QXBwcm92YWwsXHJcbiAgICAgIHJldmlzZVJlZHVjZXI6IGRlZmF1bHRSZXZpc2UsXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgYWN0aW9ucyA9IHVzZU1lbW8oXHJcbiAgICAoKSA9PiAoe1xyXG4gICAgICAuLi51c2VyTG9naW4oZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXRNZW51KGRpc3BhdGNoKSxcclxuICAgICAgLi4ua2VlcFN0YXRlKGRpc3BhdGNoKSxcclxuXHJcbiAgICAgIC4uLnNldFBsYW5WaXNpYmlsaXR5KGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0UGxhbkF2YWJpbGl0eShkaXNwYXRjaCksXHJcbiAgICAgIC4uLnNldFBsYW5DYXRhdGFuKGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0UGxhbkNoZWNrSW4oZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXREZWZhdWx0VmlzaXRQbGFuKGRpc3BhdGNoKSxcclxuXHJcbiAgICAgIC4uLnNldFVucGxhblZpc2liaWxpdHkoZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXRVbnBsYW5BdmFiaWxpdHkoZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXRVbnBsYW5DYXRhdGFuKGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0VW5wbGFuQ2hlY2tJbihkaXNwYXRjaCksXHJcbiAgICAgIC4uLnNldFVucGxhbkplbmlzQ2hhbm5lbChkaXNwYXRjaCksXHJcbiAgICAgIC4uLnNldFVucGxhbk91dGxldChkaXNwYXRjaCksXHJcbiAgICAgIC4uLnNldERlZmF1bHRWaXNpdFVucGxhbihkaXNwYXRjaCksXHJcblxyXG4gICAgICAuLi5zZXRTcHJlYWRpbmdWaXNpYmlsaXR5KGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0U3ByZWFkaW5nQXZhYmlsaXR5KGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0U3ByZWFkaW5nQ2F0YXRhbihkaXNwYXRjaCksXHJcbiAgICAgIC4uLnNldFNwcmVhZGluZ0FsYW1hdChkaXNwYXRjaCksXHJcbiAgICAgIC4uLnNldFNwcmVhZGluZ05ld091dGxldChkaXNwYXRjaCksXHJcbiAgICAgIC4uLnNldFNwcmVhZGluZ0NoZWNrSW4oZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXRTcHJlYWRpbmdKZW5pc0NoYW5uZWwoZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXRTcHJlYWRpbmdPdXRsZXQoZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXREZWZhdWx0VmlzaXRTcHJlYWRpbmcoZGlzcGF0Y2gpLFxyXG5cclxuICAgICAgLi4uc2V0Rm9jdXNBcHByb3ZhbChkaXNwYXRjaCksXHJcblxyXG4gICAgICAuLi5zZXRSZXZpc2VBdmFiaWxpdHkoZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXRSZXZpc2VWaXNpYmlsaXR5KGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0RGVmYXVsdFJldmlzZShkaXNwYXRjaCksXHJcbiAgICB9KSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdG9yZXMuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGRpc3BhdGNoLCBhY3Rpb25zIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1N0b3Jlcy5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgU3RvcmVzLCBTdG9yZSB9O1xyXG4iLCJjb25zdCBkZWZhdWx0QXBwcm92YWwgPSB7XHJcbiAgZm9jdXNBcHByb3ZhbDoge30sXHJcbn07XHJcblxyXG5jb25zdCBhcHByb3ZhbFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgXCJTRVRfRk9DVVNfQVBQUk9WQUxcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGZvY3VzQXBwcm92YWw6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgYXBwcm92YWxSZWR1Y2VyLCBkZWZhdWx0QXBwcm92YWwgfTtcclxuIiwiY29uc3QgZGVmYXVsdE1lbnUgPSB7XHJcbiAgbWVudTogW10sXHJcbn07XHJcblxyXG5jb25zdCBtZW51UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIlNFVF9NRU5VXCI6XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibWVudVwiLCBKU09OLnN0cmluZ2lmeShhY3Rpb24ucGF5bG9hZCkpO1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbWVudTogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJLRUVQX1NUQVRFXCI6XHJcbiAgICAgIGNvbnN0IHVzZXJNZW51ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1lbnVcIikpO1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbWVudTogdXNlck1lbnUgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBtZW51UmVkdWNlciwgZGVmYXVsdE1lbnUgfTtcclxuIiwiY29uc3QgZGVmYXVsdFJldmlzZSA9IHtcclxuICB2aXNpYmlsaXR5OiBbXSxcclxuICBhdmFiaWxpdHk6IFtdLFxyXG59O1xyXG5cclxuY29uc3QgcmV2aXNlUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIlNFVF9SRVZJU0VfQVZBQklMSVRZXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBhdmFiaWxpdHk6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiU0VUX1JFVklTRV9WSVNJQklMSVRZXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB2aXNpYmlsaXR5OiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9ERUZBVUxUX1JFVklTRVwiOlxyXG4gICAgICByZXR1cm4geyAuLi5kZWZhdWx0UmV2aXNlIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgcmV2aXNlUmVkdWNlciwgZGVmYXVsdFJldmlzZSB9O1xyXG4iLCJjb25zdCBkZWZhdWx0VXNlciA9IHtcclxuICB1c2VyOiBbXSxcclxufTtcclxuXHJcbmNvbnN0IHVzZXJSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiVVNFUl9MT0dJTlwiOlxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkoYWN0aW9uLnBheWxvYWQpKTtcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVzZXI6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiVVNFUl9MT0dPVVRcIjpcclxuICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB1c2VyOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIktFRVBfU1RBVEVcIjpcclxuICAgICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB1c2VyOiB1c2VyRGF0YSB9O1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyB1c2VyUmVkdWNlciwgZGVmYXVsdFVzZXIgfTtcclxuIiwiY29uc3QgZGVmYXVsdFZpc2l0UGxhbiA9IHtcclxuICB2aXNpYmlsaXR5OiBbXSxcclxuICBhdmFiaWxpdHk6IFtdLFxyXG4gIGNhdGF0YW46IFwiXCIsXHJcbiAgY2hlY2tJbjogXCJcIixcclxufTtcclxuXHJcbmNvbnN0IHZpc2l0UGxhblJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgXCJTRVRfUExBTl9WSVNJQklMSVRZXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB2aXNpYmlsaXR5OiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9QTEFOX0FWQUJJTElUWVwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYXZhYmlsaXR5OiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9QTEFOX0NBVEFUQU5cIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNhdGF0YW46IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiU0VUX1BMQU5fQ0hFQ0tfSU5cIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNoZWNrSW46IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiU0VUX0RFRkFVTFRfVklTSVRfUExBTlwiOlxyXG4gICAgICByZXR1cm4geyAuLi5kZWZhdWx0VmlzaXRQbGFuIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgdmlzaXRQbGFuUmVkdWNlciwgZGVmYXVsdFZpc2l0UGxhbiB9O1xyXG4iLCJjb25zdCBkZWZhdWx0VmlzaXRTcHJlYWRpbmcgPSB7XHJcbiAgdmlzaWJpbGl0eTogW10sXHJcbiAgYXZhYmlsaXR5OiBbXSxcclxuICBjYXRhdGFuOiBcIlwiLFxyXG4gIGFsYW1hdDogXCJcIixcclxuICBuZXdPdXRsZXQ6IFwiXCIsXHJcbiAgY2hlY2tJbjogXCJcIixcclxuICBqZW5pc0NoYW5uZWw6IHt9LFxyXG4gIG91dGxldDoge30sXHJcbn07XHJcblxyXG5jb25zdCB2aXNpdFNwcmVhZGluZ1JlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgXCJTRVRfU1BSRUFESU5HX1ZJU0lCSUxJVFlcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHZpc2liaWxpdHk6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiU0VUX1NQUkVBRElOR19BVkFCSUxJVFlcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGF2YWJpbGl0eTogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJTRVRfU1BSRUFESU5HX0NBVEFUQU5cIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNhdGF0YW46IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiU0VUX1NQUkVBRElOR19BTEFNQVRcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGFsYW1hdDogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJTRVRfU1BSRUFESU5HX05FV19PVVRMRVRcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG5ld091dGxldDogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJTRVRfU1BSRUFESU5HX0NIRUNLX0lOXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjaGVja0luOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9TUFJFQURJTkdfSkVOSVNfQ0hBTk5FTFwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgamVuaXNDaGFubmVsOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9TUFJFQURJTkdfT1VUTEVUXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBvdXRsZXQ6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiU0VUX0RFRkFVTFRfVklTSVRfU1BSRUFESU5HXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLmRlZmF1bHRWaXNpdFNwcmVhZGluZyB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IHZpc2l0U3ByZWFkaW5nUmVkdWNlciwgZGVmYXVsdFZpc2l0U3ByZWFkaW5nIH07XHJcbiIsImNvbnN0IGRlZmF1bHRWaXNpdFVucGxhbiA9IHtcclxuICB2aXNpYmlsaXR5OiBbXSxcclxuICBhdmFiaWxpdHk6IFtdLFxyXG4gIGNhdGF0YW46IFwiXCIsXHJcbiAgY2hlY2tJbjogXCJcIixcclxuICBqZW5pc0NoYW5uZWw6IHt9LFxyXG4gIG91dGxldDoge30sXHJcbn07XHJcblxyXG5jb25zdCB2aXNpdFVucGxhblJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgXCJTRVRfVU5QTEFOX1ZJU0lCSUxJVFlcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHZpc2liaWxpdHk6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiU0VUX1VOUExBTl9BVkFCSUxJVFlcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGF2YWJpbGl0eTogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJTRVRfVU5QTEFOX0NBVEFUQU5cIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNhdGF0YW46IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiU0VUX1VOUExBTl9DSEVDS19JTlwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2hlY2tJbjogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJTRVRfVU5QTEFOX0pFTklTX0NIQU5ORUxcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGplbmlzQ2hhbm5lbDogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJTRVRfVU5QTEFOX09VVExFVFwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgb3V0bGV0OiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9ERUZBVUxUX1ZJU0lUX1VOUExBTlwiOlxyXG4gICAgICByZXR1cm4geyAuLi5kZWZhdWx0VmlzaXRVbnBsYW4gfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyB2aXNpdFVucGxhblJlZHVjZXIsIGRlZmF1bHRWaXNpdFVucGxhbiB9O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJuYXZfY29udGFpbmVyXCI6IFwiQm90TmF2X25hdl9jb250YWluZXJfXzFrUWI1XCIsXG5cdFwibmF2X2JveFwiOiBcIkJvdE5hdl9uYXZfYm94X18xU1B5VlwiLFxuXHRcIm5hdl9pbWdcIjogXCJCb3ROYXZfbmF2X2ltZ19fM1BUOVVcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkJ1dHRvbl9jb250YWluZXJfXzM3U1dRXCIsXG5cdFwiY29udGFpbmVyX3doaXRlXCI6IFwiQnV0dG9uX2NvbnRhaW5lcl93aGl0ZV9fem9BQnNcIixcblx0XCJjb250YWluZXJfb3JhbmdlXCI6IFwiQnV0dG9uX2NvbnRhaW5lcl9vcmFuZ2VfXzI4a2E4XCIsXG5cdFwiY29udGFpbmVyX3JlZFwiOiBcIkJ1dHRvbl9jb250YWluZXJfcmVkX18xUXZhRVwiLFxuXHRcImNvbnRhaW5lcl9kaXNhYmxlXCI6IFwiQnV0dG9uX2NvbnRhaW5lcl9kaXNhYmxlX18zREVvT1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiQ2FyZF9jb250YWluZXJfXzJlejFjXCIsXG5cdFwic2hhZG93XCI6IFwiQ2FyZF9zaGFkb3dfX1RxNV94XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJDaGVja2JveF9jb250YWluZXJfXzF0TWZGXCIsXG5cdFwiY2hlY2ttYXJrX2dyZWVuXCI6IFwiQ2hlY2tib3hfY2hlY2ttYXJrX2dyZWVuX18xcU5SS1wiLFxuXHRcImNoZWNrbWFya195ZWxsb3dcIjogXCJDaGVja2JveF9jaGVja21hcmtfeWVsbG93X19rWTV6ZVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiU3Bpbm5lcl9jb250YWluZXJfXzNONkVZXCIsXG5cdFwic3Bpbm5lclwiOiBcIlNwaW5uZXJfc3Bpbm5lcl9fM2dvaXpcIixcblx0XCJiYWxsLXNwaW4tY2xvY2t3aXNlXCI6IFwiU3Bpbm5lcl9iYWxsLXNwaW4tY2xvY2t3aXNlX19ZSl9DM1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfXzNRa2xUXCIsXG5cdFwid3JhcHBlclwiOiBcIkhvbWVfd3JhcHBlcl9fM0d2MXZcIixcblx0XCJiZ190b3BcIjogXCJIb21lX2JnX3RvcF9fVFR6clVcIixcblx0XCJ1c2VyX2luZm9fZ3JpZFwiOiBcIkhvbWVfdXNlcl9pbmZvX2dyaWRfX2laT255XCIsXG5cdFwicHBcIjogXCJIb21lX3BwX18yWF92SlwiLFxuXHRcIm5vdGlmXCI6IFwiSG9tZV9ub3RpZl9fMnhET0hcIixcblx0XCJtZW51X2dyaWQzXCI6IFwiSG9tZV9tZW51X2dyaWQzX18zY2UxU1wiLFxuXHRcIm1lbnVfZ3JpZDFcIjogXCJIb21lX21lbnVfZ3JpZDFfXzFjc0FEXCIsXG5cdFwiZm9jdXNfbWVudVwiOiBcIkhvbWVfZm9jdXNfbWVudV9fMVliR0ZcIixcblx0XCJtZW51XCI6IFwiSG9tZV9tZW51X18zN28yWVwiLFxuXHRcIm92ZXJ2aWV3XCI6IFwiSG9tZV9vdmVydmlld19fMjV0Q2NcIixcblx0XCJkYXRlXCI6IFwiSG9tZV9kYXRlX18xNG9pMVwiLFxuXHRcInBsYW5fY29udGFpbmVyXCI6IFwiSG9tZV9wbGFuX2NvbnRhaW5lcl9fMzg2Y3BcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX18yQXFDS1wiLFxuXHRcInVucGxhbl9ncmlkXCI6IFwiSG9tZV91bnBsYW5fZ3JpZF9fM3hxYWdcIixcblx0XCJ1bnBsYW5fZ3JpZDJcIjogXCJIb21lX3VucGxhbl9ncmlkMl9fMXBHVTNcIixcblx0XCJudW1fdG90YWxfdW5wbGFuXCI6IFwiSG9tZV9udW1fdG90YWxfdW5wbGFuX18zbzZLUFwiLFxuXHRcImFkZF91bnBsYW5cIjogXCJIb21lX2FkZF91bnBsYW5fXzNOeU93XCIsXG5cdFwicGllX3BlcmNlbnRhZ2VcIjogXCJIb21lX3BpZV9wZXJjZW50YWdlX18zNmEyZVwiLFxuXHRcInByb2dyZXNzX3RpdGxlXCI6IFwiSG9tZV9wcm9ncmVzc190aXRsZV9fMlJUWU9cIixcblx0XCJwcm9ncmVzc19udW1iZXJcIjogXCJIb21lX3Byb2dyZXNzX251bWJlcl9fMlF2X3JcIixcblx0XCJwcm9ncmVzc19iYXJcIjogXCJIb21lX3Byb2dyZXNzX2Jhcl9fMzlvOU1cIixcblx0XCJwcm9ncmVzc19iYXJfbm93XCI6IFwiSG9tZV9wcm9ncmVzc19iYXJfbm93X18xSzBXSlwiLFxuXHRcIm1haW5fbWVudV9jb250YWluZXJcIjogXCJIb21lX21haW5fbWVudV9jb250YWluZXJfXzNFZGp2XCJcbn07XG4iLCJpbXBvcnQgXCJmaXJlYmFzZS9tZXNzYWdpbmdcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuXHJcbmNvbnN0IGZpcmViYXNlQ2xvdWRNZXNzYWdpbmcgPSB7XHJcbiAgLy9jaGVja2luZyB3aGV0aGVyIHRva2VuIGlzIGF2YWlsYWJsZSBpbiBpbmRleGVkIERCXHJcbiAgdG9rZW5JbmxvY2FsZm9yYWdlOiBhc3luYyAoKSA9PiB7XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmY21fdG9rZW5cIik7XHJcbiAgfSxcclxuXHJcbiAgdXNlcklubG9jYWxmb3JhZ2U6IGFzeW5jICgpID0+IHtcclxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIik7XHJcbiAgfSxcclxuXHJcbiAgLy9pbml0aWFsaXppbmcgZmlyZWJhc2UgYXBwXHJcbiAgaW5pdDogYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xyXG4gICAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKHtcclxuICAgICAgICBhcGlLZXk6IFwiQUl6YVN5QU1UaXJZcHl6WTdRV0RrelNQc29mcG82OGphRmx0bnJrXCIsXHJcbiAgICAgICAgYXV0aERvbWFpbjogXCJzYWthbW9yLThmMjhkLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgICAgIHByb2plY3RJZDogXCJzYWthbW9yLThmMjhkXCIsXHJcbiAgICAgICAgc3RvcmFnZUJ1Y2tldDogXCJzYWthbW9yLThmMjhkLmFwcHNwb3QuY29tXCIsXHJcbiAgICAgICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNDAwNzIwNDU4MTY2XCIsXHJcbiAgICAgICAgYXBwSWQ6IFwiMTo0MDA3MjA0NTgxNjY6d2ViOmNmN2FmYzA2ZWMzYWM0MTlkNjkxMTdcIixcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2luZyA9IGZpcmViYXNlLm1lc3NhZ2luZygpO1xyXG4gICAgICAgIGNvbnN0IHRva2VuSW5Mb2NhbEZvcmFnZSA9IGF3YWl0IHRoaXMudG9rZW5JbmxvY2FsZm9yYWdlKCk7XHJcbiAgICAgICAgY29uc3QgdXNlcklubG9jYWxmb3JhZ2UgPSBhd2FpdCB0aGlzLnVzZXJJbmxvY2FsZm9yYWdlKCk7XHJcblxyXG4gICAgICAgIC8vaWYgRkNNIHRva2VuIGlzIGFscmVhZHkgdGhlcmUganVzdCByZXR1cm4gdGhlIHRva2VuXHJcbiAgICAgICAgaWYgKHRva2VuSW5Mb2NhbEZvcmFnZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRva2VuSW5Mb2NhbEZvcmFnZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1c2VySW5sb2NhbGZvcmFnZSkge1xyXG4gICAgICAgICAgLy9yZXF1ZXN0aW5nIG5vdGlmaWNhdGlvbiBwZXJtaXNzaW9uIGZyb20gYnJvd3NlclxyXG4gICAgICAgICAgY29uc3Qgc3RhdHVzID0gYXdhaXQgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCk7XHJcbiAgICAgICAgICBpZiAoc3RhdHVzICYmIHN0YXR1cyA9PT0gXCJncmFudGVkXCIpIHtcclxuICAgICAgICAgICAgLy9nZXR0aW5nIHRva2VuIGZyb20gRkNNXHJcbiAgICAgICAgICAgIGNvbnN0IGZjbV90b2tlbiA9IGF3YWl0IG1lc3NhZ2luZy5nZXRUb2tlbigpO1xyXG4gICAgICAgICAgICBpZiAoZmNtX3Rva2VuKSB7XHJcbiAgICAgICAgICAgICAgLy9zZXR0aW5nIEZDTSB0b2tlbiBpbiBpbmRleGVkIGRiIHVzaW5nIGxvY2FsZm9yYWdlXHJcbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmY21fdG9rZW5cIiwgZmNtX3Rva2VuKTtcclxuICAgICAgICAgICAgICAvL3JldHVybiB0aGUgRkNNIHRva2VuIGFmdGVyIHNhdmluZyBpdFxyXG4gICAgICAgICAgICAgIHJldHVybiBmY21fdG9rZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG59O1xyXG5leHBvcnQgeyBmaXJlYmFzZUNsb3VkTWVzc2FnaW5nIH07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9tZXNzYWdpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jaGFydGpzLTJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=