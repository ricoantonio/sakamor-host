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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/reward/index.jsx");
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

var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-new\\components\\BotNav.jsx";





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
        href: "/",
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
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: focus === "profile" ? "/profile-nav.svg" : "/profile-nav1.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, undefined), focus === "profile" ? active : ""]
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

var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-new\\components\\Card.jsx";



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

/***/ "./components/Nav.jsx":
/*!****************************!*\
  !*** ./components/Nav.jsx ***!
  \****************************/
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
/* harmony import */ var _styles_components_Nav_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/Nav.module.css */ "./styles/components/Nav.module.css");
/* harmony import */ var _styles_components_Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Nav_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-new\\components\\Nav.jsx";




const Nav = ({
  backHref,
  title,
  action,
  color,
  onClick,
  backAction,
  noBack,
  disable
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: color == "green" ? `${_styles_components_Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.nav_green} ${_styles_components_Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.nav_container}` : color == "white" ? `${_styles_components_Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.nav_white} ${_styles_components_Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.nav_container}` : _styles_components_Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.nav_container,
    children: [backHref ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: backHref ? backHref : "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          style: {
            width: "24px"
          },
          src: "/arrow-left.svg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, undefined) : noBack ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      onClick: () => {
        backAction();
      },
      style: {
        width: "24px"
      },
      src: "/arrow-left.svg"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      // className={color == "green" ? styles.white : ""}
      style: {
        textAlign: "center"
      },
      className: _styles_components_Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title,
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, undefined), action && disable === false ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: onClick,
      style: {
        fontSize: "14px",
        margin: "auto",
        color: "#41867A",
        cursor: "pointer"
      },
      children: action
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }, undefined) : action && disable === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: onClick,
      style: {
        fontSize: "14px",
        margin: "auto",
        color: "#c4c4c4",
        cursor: "pointer"
      },
      children: action
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }, undefined) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

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

var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-new\\components\\Spinner.jsx";


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

/***/ "./components/TableLastDataIncentive.jsx":
/*!***********************************************!*\
  !*** ./components/TableLastDataIncentive.jsx ***!
  \***********************************************/
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
/* harmony import */ var _styles_components_TableLastDataIncentive_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/TableLastDataIncentive.module.css */ "./styles/components/TableLastDataIncentive.module.css");
/* harmony import */ var _styles_components_TableLastDataIncentive_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_TableLastDataIncentive_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-new\\components\\TableLastDataIncentive.jsx";




const TabelLastDataIncentive = ({
  data
}) => {
  const total = () => {
    var totalIncentive = 0;
    data.map(val => {
      var splitGroup = val.grup.split(".");

      if (splitGroup[1] == 0) {
        totalIncentive += val.insentif;
      }
    });
    return totalIncentive;
  };

  const renderData = () => {
    // console.log(data);
    var sort = data.sort((a, b) => a.grup.localeCompare(b.grup, undefined, {
      numeric: true
    }));
    return sort.map(val => {
      var splitGroup = val.grup.split(".");

      if (splitGroup[1] == 0) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          style: {
            backgroundColor: "#F9FCF5",
            fontWeight: "600"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            colSpan: "7",
            children: val.kpi
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: val.insentif.toLocaleString("id-ID")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined);
      } else {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            colSpan: "7",
            children: val.kpi
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [Math.round(val.achievement * 10) / 10, "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: [Math.round(val.gradasi * 10) / 10, "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: val.insentif.toLocaleString("id-ID")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined);
      }
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_TableLastDataIncentive_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.incentive_table_container,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
      className: _styles_components_TableLastDataIncentive_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.table_incentive,
      style: {
        width: "100%"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            style: {
              backgroundColor: "#41867a",
              borderTopLeftRadius: "4px",
              fontSize: "12px",
              color: "#fff",
              height: "38px"
            },
            colSpan: "7",
            rowSpan: "2",
            width: "40%",
            children: "KPI Incentive Monthly"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            style: {
              backgroundColor: "#41867a",
              borderTopRightRadius: "4px",
              fontSize: "8px",
              color: "#fff"
            },
            colSpan: "4",
            children: "KALKULATOR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          style: {
            backgroundColor: "#41867a",
            borderTopRightRadius: "4px",
            textAlign: "center",
            color: "#fff"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            width: "20%",
            style: {
              fontSize: "8px"
            },
            children: "Achievment"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            width: "20%",
            style: {
              fontSize: "8px"
            },
            children: "Gradasi"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            width: "20%",
            style: {
              fontSize: "8px"
            },
            children: "Intensif"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        className: _styles_components_TableLastDataIncentive_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.tbody_incentive,
        children: [renderData(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          style: {
            backgroundColor: "#F9FCF5",
            fontWeight: "600"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            colSpan: "7",
            children: "Total Perhitungan"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
            children: total().toLocaleString("id-ID")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (TabelLastDataIncentive);

/***/ }),

/***/ "./constant.js":
/*!*********************!*\
  !*** ./constant.js ***!
  \*********************/
/*! exports provided: TOKEN, API_URL, API_USER, API_MASTER, API_VISIT_PLAN, API_VISIT_UNPLAN, API_VISIT_SPREADING, API_WORK_VISIT, API_CALENDAR_PROGRAM, API_CALENDAR_PROMO, API_ANNOUNCEMENT, API_INCENTIVE, API_BENEFIT */
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
var TOKEN = "eyJ4NXQiOiJZamt5WkRVM05tRTRZbVZqT1RjeE4yRTRNbVZrT1dSak1XVmhZVGhoWWpjeE9UZzJNemt4WVE9PSIsImtpZCI6ImdhdGV3YXlfY2VydGlmaWNhdGVfYWxpYXMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJub2Jvbi5hbmRyYUBrYWxiZS5jby5pZCIsImFwcGxpY2F0aW9uIjp7Im93bmVyIjoibm9ib24uYW5kcmFAa2FsYmUuY28uaWQiLCJ0aWVyUXVvdGFUeXBlIjpudWxsLCJ0aWVyIjoiVW5saW1pdGVkIiwibmFtZSI6IlNha2Ftb3IgMi4wIiwiaWQiOjE5LCJ1dWlkIjoiMTQ5ZWU0NmUtZDE3Ni00NWQxLWE3NmEtOTAzM2RhNzc4OTU4In0sImlzcyI6Imh0dHBzOlwvXC9tLW9uZS5rYWxiZS5jby5pZDo5NDQzXC9vYXV0aDJcL3Rva2VuIiwidGllckluZm8iOnsiVW5saW1pdGVkIjp7InRpZXJRdW90YVR5cGUiOiJyZXF1ZXN0Q291bnQiLCJncmFwaFFMTWF4Q29tcGxleGl0eSI6MCwiZ3JhcGhRTE1heERlcHRoIjowLCJzdG9wT25RdW90YVJlYWNoIjp0cnVlLCJzcGlrZUFycmVzdExpbWl0IjowLCJzcGlrZUFycmVzdFVuaXQiOm51bGx9fSwia2V5dHlwZSI6IlNBTkRCT1giLCJwZXJtaXR0ZWRSZWZlcmVyIjoiIiwic3Vic2NyaWJlZEFQSXMiOlt7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJrYWxiZS5jby5pZCIsIm5hbWUiOiJTYWthbW9yQWN0aXZpdHlWaXNpdFBsYW4iLCJjb250ZXh0IjoiXC90XC9rYWxiZS5jby5pZFwvU2FrYW1vckFjdGl2aXR5VmlzaXRQbGFuXC92MSIsInB1Ymxpc2hlciI6Im5vYm9uLmFuZHJhQGthbGJlLmNvLmlkIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImthbGJlLmNvLmlkIiwibmFtZSI6IlVzZXJQcm9maWxlRXh0ZXJuYWwiLCJjb250ZXh0IjoiXC90XC9rYWxiZS5jby5pZFwvVXNlclByb2ZpbGVFeHRlcm5hbFwvdjEiLCJwdWJsaXNoZXIiOiJub2Jvbi5hbmRyYUBrYWxiZS5jby5pZCIsInZlcnNpb24iOiJ2MSIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifSx7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJrYWxiZS5jby5pZCIsIm5hbWUiOiJTYWthbW9yTWFzdGVyRGF0YSIsImNvbnRleHQiOiJcL3RcL2thbGJlLmNvLmlkXC9TYWthbW9yTWFzdGVyRGF0YVwvdjEiLCJwdWJsaXNoZXIiOiJub2Jvbi5hbmRyYUBrYWxiZS5jby5pZCIsInZlcnNpb24iOiJ2MSIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifSx7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJrYWxiZS5jby5pZCIsIm5hbWUiOiJTYWthbW9yQWN0aXZpdHlTcHJlYWRpbmciLCJjb250ZXh0IjoiXC90XC9rYWxiZS5jby5pZFwvU2FrYW1vckFjdGl2aXR5U3ByZWFkaW5nXC92MSIsInB1Ymxpc2hlciI6Im5vYm9uLmFuZHJhQGthbGJlLmNvLmlkIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImthbGJlLmNvLmlkIiwibmFtZSI6IlNha2Ftb3JBY3Rpdml0eVZpc2l0VW5QbGFuIiwiY29udGV4dCI6IlwvdFwva2FsYmUuY28uaWRcL1Nha2Ftb3JBY3Rpdml0eVZpc2l0VW5QbGFuXC92MSIsInB1Ymxpc2hlciI6Im5vYm9uLmFuZHJhQGthbGJlLmNvLmlkIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImthbGJlLmNvLmlkIiwibmFtZSI6IlNha2Ftb3JBY3Rpdml0eVdvcmtWaXNpdCIsImNvbnRleHQiOiJcL3RcL2thbGJlLmNvLmlkXC9TYWthbW9yQWN0aXZpdHlXb3JrVmlzaXRcL3YxIiwicHVibGlzaGVyIjoibm9ib24uYW5kcmFAa2FsYmUuY28uaWQiLCJ2ZXJzaW9uIjoidjEiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoia2FsYmUuY28uaWQiLCJuYW1lIjoiU2FrYW1vckthbGVuZGVyUHJvZ3JhbSIsImNvbnRleHQiOiJcL3RcL2thbGJlLmNvLmlkXC9TYWthbW9yS2FsZW5kZXJQcm9ncmFtXC92MSIsInB1Ymxpc2hlciI6Im5vYm9uLmFuZHJhQGthbGJlLmNvLmlkIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImthbGJlLmNvLmlkIiwibmFtZSI6IlNha2Ftb3JJbmZvUHJvbW8iLCJjb250ZXh0IjoiXC90XC9rYWxiZS5jby5pZFwvU2FrYW1vckluZm9Qcm9tb1wvdjEiLCJwdWJsaXNoZXIiOiJub2Jvbi5hbmRyYUBrYWxiZS5jby5pZCIsInZlcnNpb24iOiJ2MSIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifSx7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJrYWxiZS5jby5pZCIsIm5hbWUiOiJTYWthbW9yQW5ub3VuY2VtZW50IiwiY29udGV4dCI6IlwvdFwva2FsYmUuY28uaWRcL1Nha2Ftb3JBbm5vdW5jZW1lbnRcL3YxIiwicHVibGlzaGVyIjoibm9ib24uYW5kcmFAa2FsYmUuY28uaWQiLCJ2ZXJzaW9uIjoidjEiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoia2FsYmUuY28uaWQiLCJuYW1lIjoiQXV0aG9yaXphdGlvbkFQSSIsImNvbnRleHQiOiJcL3RcL2thbGJlLmNvLmlkXC9BdXRob3JpemF0aW9uQVBJXC92MSIsInB1Ymxpc2hlciI6Im11aGFtbWFkLmRpYW5pQGthbGJlLmNvLmlkIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImthbGJlLmNvLmlkIiwibmFtZSI6IlJvbGUiLCJjb250ZXh0IjoiXC90XC9rYWxiZS5jby5pZFwvUm9sZVwvdjEiLCJwdWJsaXNoZXIiOiJtdWhhbW1hZC5oaWRheWF0dWxsMUBrYWxiZS5jby5pZCIsInZlcnNpb24iOiJ2MSIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifSx7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJrYWxiZS5jby5pZCIsIm5hbWUiOiJNb2R1bGVBUEkiLCJjb250ZXh0IjoiXC90XC9rYWxiZS5jby5pZFwvTW9kdWxlQVBJXC92MSIsInB1Ymxpc2hlciI6Im11aGFtbWFkLmRpYW5pQGthbGJlLmNvLmlkIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImthbGJlLmNvLmlkIiwibmFtZSI6IlVzZXJQcm9maWxlQVBJIiwiY29udGV4dCI6IlwvdFwva2FsYmUuY28uaWRcL1VzZXJQcm9maWxlQVBJXC92MSIsInB1Ymxpc2hlciI6Im11aGFtbWFkLmRpYW5pQGthbGJlLmNvLmlkIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImthbGJlLmNvLmlkIiwibmFtZSI6IlNha2Ftb3JJbmNlbnRpdmUiLCJjb250ZXh0IjoiXC90XC9rYWxiZS5jby5pZFwvU2FrYW1vckluY2VudGl2ZVwvdjEiLCJwdWJsaXNoZXIiOiJub2Jvbi5hbmRyYUBrYWxiZS5jby5pZCIsInZlcnNpb24iOiJ2MSIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifSx7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJrYWxiZS5jby5pZCIsIm5hbWUiOiJTYWthbW9yQmVuZWZpdHMiLCJjb250ZXh0IjoiXC90XC9rYWxiZS5jby5pZFwvU2FrYW1vckJlbmVmaXRzXC92MSIsInB1Ymxpc2hlciI6Im5vYm9uLmFuZHJhQGthbGJlLmNvLmlkIiwidmVyc2lvbiI6InYxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImthbGJlLmNvLmlkIiwibmFtZSI6IkRheU9mZiIsImNvbnRleHQiOiJcL3RcL2thbGJlLmNvLmlkXC9EYXlPZmZcL3YxIiwicHVibGlzaGVyIjoibXVoYW1tYWQuaGlkYXlhdHVsbDFAa2FsYmUuY28uaWQiLCJ2ZXJzaW9uIjoidjEiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn1dLCJwZXJtaXR0ZWRJUCI6IiIsImlhdCI6MTYyNjQxMTI3NywianRpIjoiOWQyOGUyZWEtYTA2ZC00ZGMxLTgzOGItNjQwMjU1ZTM2NGZmIn0=.cty8m2ShHYEovnTU8f8rWxtKmmzaZ29Mn8QRHJJOts6K8PGMlwupty4A5_PZ7m3m_kpCTMGReZ2F271BiewOP_eKEpikaI5rE7heKdQKwpavvM-gUBEH8YWa06H_K_o3E3Q_GaNsWxxVhSICXkO53xLStRWBhNPqxGF8gaDMYePxr_k_AZfbhAvcAL0lWBHbamApyDotBM68M7_G-B8uwMDW-Ee4kfZ0gbBLH4Er2GV1KXBf5HCjxAOgoEfaGsNFbQ88GqL4w0hqkxpU7SMFkgisQwTknoFnTyN5xBTU3DAFTVbhuwSr1zbkgZgjjq4JjH-kyhwUCk0y-bs2d8iZTg==";


/***/ }),

/***/ "./helper.js":
/*!*******************!*\
  !*** ./helper.js ***!
  \*******************/
/*! exports provided: getMenu, getAuth, onLogin, getProductSearch, getSearchJenisChannel, getProductAvgSales, getSearchOutlet, getBrand, getProductByJenisChannel, getKontenWorkVisit, getPlanList, getPlanId, getPosm, getPlanHistory, submitVisitPlan, submitVisitPlanDposm, getInvoiceDataPosm, getInvoiceData, getPlanMonthlyHistory, viewFile, submitVisitUnplan, submitVisitUnplanDposm, getInvoiceDataUnplan, getInvoiceDataPosmUnplan, getUnplanMonthlyHistory, viewFileUnplan, getUnplanNearMe, submitVisitSpreading, submitVisitSpreadingDposm, getInvoiceDataSpreading, getInvoiceDataPosmSpreading, viewFileSpreading, getSpreadingMonthlyHistory, getAllWorkVisit, getWorkVisitMonthlyHistory, getWorkVisitRating, submitWorkVisit, getDayProgram, getDayPromo, getMonthProgram, getMonthPromo, getAllAnnouncement, updateReadAnnouncement, getSalesTargetSMR, getSalesTarget75SMR, getProduktifitas, getFrontliner, getNoo, getBenefitCodeCabang, getWorkDay, getKpiInventiveMonthlySMR, getIncentiveYearly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMenu", function() { return getMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuth", function() { return getAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLogin", function() { return onLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductSearch", function() { return getProductSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchJenisChannel", function() { return getSearchJenisChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductAvgSales", function() { return getProductAvgSales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchOutlet", function() { return getSearchOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrand", function() { return getBrand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductByJenisChannel", function() { return getProductByJenisChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKontenWorkVisit", function() { return getKontenWorkVisit; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitVisitUnplan", function() { return submitVisitUnplan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitVisitUnplanDposm", function() { return submitVisitUnplanDposm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInvoiceDataUnplan", function() { return getInvoiceDataUnplan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInvoiceDataPosmUnplan", function() { return getInvoiceDataPosmUnplan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnplanMonthlyHistory", function() { return getUnplanMonthlyHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewFileUnplan", function() { return viewFileUnplan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnplanNearMe", function() { return getUnplanNearMe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitVisitSpreading", function() { return submitVisitSpreading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitVisitSpreadingDposm", function() { return submitVisitSpreadingDposm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInvoiceDataSpreading", function() { return getInvoiceDataSpreading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInvoiceDataPosmSpreading", function() { return getInvoiceDataPosmSpreading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewFileSpreading", function() { return viewFileSpreading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpreadingMonthlyHistory", function() { return getSpreadingMonthlyHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllWorkVisit", function() { return getAllWorkVisit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorkVisitMonthlyHistory", function() { return getWorkVisitMonthlyHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorkVisitRating", function() { return getWorkVisitRating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitWorkVisit", function() { return submitWorkVisit; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBenefitCodeCabang", function() { return getBenefitCodeCabang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorkDay", function() { return getWorkDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKpiInventiveMonthlySMR", function() { return getKpiInventiveMonthlySMR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIncentiveYearly", function() { return getIncentiveYearly; });
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

const getSearchJenisChannel = search => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_MASTER"] + `/MasterDataLokal/GetJenisChannelBy?teks=${search}`, {
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

const getSearchOutlet = search => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_MASTER"] + `/MasterDataLokal/GetOutletBy?teks=${search}`, {
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
      console.log("balikan inserfile", data);
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


const getAllAnnouncement = userData => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_ANNOUNCEMENT"] + `/SakamorAnnouncement/GetAnnouncementByUser?username=${userData.username}`, {
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
  return fetch( // API_URL +
  //   API_INCENTIVE +
  //   `/KpiIncentiveMonthly/GetIncentiveCalculator/2021-07-01/SMR?usernameSMR=${userData.username}`,
  _constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_INCENTIVE"] + `/KpiIncentiveMonthly/GetIncentiveCalculator/${moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format("YYYY-MM")}-01/SMR?usernameSMR=${userData.username}`, {
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
}; // BENEFIT ==============================================================================================================================================


const getBenefitCodeCabang = userData => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_BENEFIT"] + `/Benefits/GetBenefitsByKodeCabang/04`, {
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

/***/ "./pages/reward/index.jsx":
/*!********************************!*\
  !*** ./pages/reward/index.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Announcement; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_pages_Reward_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/pages/Reward.module.css */ "./styles/pages/Reward.module.css");
/* harmony import */ var _styles_pages_Reward_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Reward_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ "./store/index.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helper */ "./helper.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_BotNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/BotNav */ "./components/BotNav.jsx");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Nav */ "./components/Nav.jsx");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Card */ "./components/Card.jsx");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Spinner */ "./components/Spinner.jsx");
/* harmony import */ var _components_TableLastDataIncentive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/TableLastDataIncentive */ "./components/TableLastDataIncentive.jsx");


var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-new\\pages\\reward\\index.jsx";












function Announcement() {
  const {
    state,
    dispatch,
    actions
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store__WEBPACK_IMPORTED_MODULE_4__["Stores"]);
  const {
    0: dataKpi,
    1: setDataKpi
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: dataGraph,
    1: setDataGraph
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: now,
    1: setNow
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(new Date());
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "Last Data Insentive",
      data: dataGraph,
      fill: false,
      backgroundColor: "rgb(65, 134, 122)",
      borderColor: "rgba(65, 134, 122, 0.2)"
    }]
  };
  const options = {
    scales: {
      yAxes: [{
        ticks: {
          // beginAtZero: true,
          callback: function (label, index, labels) {
            return Math.round(label / 100000 * 10) / 100 + " k";
          }
        }
      }]
    },
    tooltips: {
      enabled: false
    },
    hover: {
      mode: null
    }
  };
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    Object(_helper__WEBPACK_IMPORTED_MODULE_5__["getKpiInventiveMonthlySMR"])(userData, now).then(dataKpi => {
      setDataKpi(dataKpi);
      Object(_helper__WEBPACK_IMPORTED_MODULE_5__["getIncentiveYearly"])(userData).then(data => {
        data.sort(function (a, b) {
          return a.bulan - b.bulan;
        });
        var yearlyIncentive = data.map(val => {
          return val.totalInsentif;
        });
        setDataGraph(yearlyIncentive);
        setLoading(false);
      }).catch(err => {
        console.log(err);
      });
    }).catch(err => {
      console.log(err);
    });
  }, [dispatch, now]);

  const total = () => {
    var totalIncentive = 0;
    dataKpi.map(val => {
      var splitGroup = val.grup.split(".");

      if (splitGroup[1] == 0) {
        totalIncentive += val.insentif;
      }
    });
    return totalIncentive;
  };

  if (loading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 12
    }, this);
  } else {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_pages_Reward_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Nav__WEBPACK_IMPORTED_MODULE_8__["default"], {
          title: "Reward",
          color: "white",
          noBack: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_Reward_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
            style: {
              borderRadius: "6px",
              marginTop: "20px"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
              href: "/reward/benefits",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                style: {
                  textDecoration: "none"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_Reward_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.reward_grid2,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_pages_Reward_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.add_reward,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      style: {
                        marginTop: "-11px"
                      },
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        src: "/alert-circle.svg"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 119,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 118,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 117,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    style: {
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#FEB800"
                    },
                    children: ["Benefits", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      style: {
                        color: "#B9B9C3",
                        fontWeight: "300",
                        fontSize: "13px"
                      },
                      children: "See you benefits here"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 130,
                      columnNumber: 23
                    }, this), " "]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 122,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    style: {
                      textAlign: "center"
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "/next.svg"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 141,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 140,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
            style: {
              borderRadius: "6px",
              marginTop: "20px"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_10__["Line"], {
              data: data,
              options: options
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
            style: {
              borderRadius: "6px",
              marginTop: "20px",
              padding: "15px",
              color: "#5E5873"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  style: {
                    marginRight: "5px"
                  },
                  onClick: () => {
                    if (moment__WEBPACK_IMPORTED_MODULE_6___default()(now).format("MMMM YYYY") !== moment__WEBPACK_IMPORTED_MODULE_6___default()().subtract(1, "years").format("MMMM YYYY")) {
                      setNow(moment__WEBPACK_IMPORTED_MODULE_6___default()(now).subtract(1, "months"));
                    }
                  },
                  children: moment__WEBPACK_IMPORTED_MODULE_6___default()(now).format("MMMM YYYY") !== moment__WEBPACK_IMPORTED_MODULE_6___default()().subtract(1, "years").format("MMMM YYYY") ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/cev_left.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 173,
                    columnNumber: 23
                  }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    style: {
                      height: "20px"
                    },
                    src: "/chev_left_gray.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 175,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 160,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: moment__WEBPACK_IMPORTED_MODULE_6___default()(now).format("MMMM YYYY")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 181,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  style: {
                    marginLeft: "5px"
                  },
                  onClick: () => {
                    if (moment__WEBPACK_IMPORTED_MODULE_6___default()().format("MMMM YYYY") !== moment__WEBPACK_IMPORTED_MODULE_6___default()(now).format("MMMM YYYY")) {
                      setNow(moment__WEBPACK_IMPORTED_MODULE_6___default()(now).add(1, "months"));
                    }
                  },
                  children: moment__WEBPACK_IMPORTED_MODULE_6___default()().format("MMMM YYYY") !== moment__WEBPACK_IMPORTED_MODULE_6___default()(now).format("MMMM YYYY") ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/next.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 195,
                    columnNumber: 23
                  }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    style: {
                      height: "20px"
                    },
                    src: "/chev_right_gray.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 197,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 182,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                fontSize: "24px",
                fontWeight: "700",
                color: "#41867a"
              },
              children: dataKpi ? `${total().toLocaleString("id-ID")} IDR` : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: "No data"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 215,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
            style: {
              borderRadius: "6px",
              marginTop: "20px",
              padding: "15px",
              color: "#5E5873"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                fontWeight: "700"
              },
              children: ["KPI Incentive Monthly ( ", moment__WEBPACK_IMPORTED_MODULE_6___default()(now).format("MMMM YYYY"), " )"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 15
            }, this), dataKpi ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_TableLastDataIncentive__WEBPACK_IMPORTED_MODULE_12__["default"], {
              data: dataKpi
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 17
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: "No Data"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              marginBottom: "120px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_BotNav__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 9
      }, this)]
    }, void 0, true);
  }
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

/***/ "./styles/components/Nav.module.css":
/*!******************************************!*\
  !*** ./styles/components/Nav.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"nav_container": "Nav_nav_container__7SMgK",
	"title": "Nav_title__21aLL",
	"nav_green": "Nav_nav_green__1_B--",
	"nav_white": "Nav_nav_white__1ml4-",
	"white": "Nav_white__2liqq"
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

/***/ "./styles/components/TableLastDataIncentive.module.css":
/*!*************************************************************!*\
  !*** ./styles/components/TableLastDataIncentive.module.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"table_incentive": "TableLastDataIncentive_table_incentive__2yTMG",
	"tbody_incentive": "TableLastDataIncentive_tbody_incentive__3tgX1",
	"incentive_table_container": "TableLastDataIncentive_incentive_table_container__3BOVp"
};


/***/ }),

/***/ "./styles/pages/Reward.module.css":
/*!****************************************!*\
  !*** ./styles/pages/Reward.module.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "Reward_wrapper__5Qjgf",
	"main": "Reward_main__2efqH",
	"reward_grid": "Reward_reward_grid__3JVZj",
	"reward_grid2": "Reward_reward_grid2__1ivxE",
	"add_reward": "Reward_add_reward__ltAe6"
};


/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0JvdE5hdi5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdi5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TcGlubmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhYmxlTGFzdERhdGFJbmNlbnRpdmUuanN4Iiwid2VicGFjazovLy8uL2NvbnN0YW50LmpzIiwid2VicGFjazovLy8uL2hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMtbm9vcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcmV3YXJkL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL2tlZXBTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldERlZmF1bHRWaXNpdFBsYW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZXREZWZhdWx0VmlzaXRTcHJlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZXREZWZhdWx0VmlzaXRVbnBsYW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZXRNZW51LmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0UGxhbkF2YWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFBsYW5DYXRhdGFuLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0UGxhbkNoZWNrSW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZXRQbGFuVmlzaWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFNwcmVhZGluZ0FsYW1hdC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFNwcmVhZGluZ0F2YWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFNwcmVhZGluZ0NhdGF0YW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZXRTcHJlYWRpbmdDaGVja0luLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0U3ByZWFkaW5nSmVuaXNDaGFubmVsLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0U3ByZWFkaW5nTmV3T3V0bGV0LmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0U3ByZWFkaW5nT3V0bGV0LmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0U3ByZWFkaW5nVmlzaWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFVucGxhbkF2YWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFVucGxhbkNhdGF0YW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZXRVbnBsYW5DaGVja0luLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0VW5wbGFuSmVuaXNDaGFubmVsLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0VW5wbGFuT3V0bGV0LmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0VW5wbGFuVmlzaWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3VzZXJMb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9tZW51LmpzIiwid2VicGFjazovLy8uL3N0b3JlL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvdmlzaXRQbGFuLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3JlZHVjZXJzL3Zpc2l0U3ByZWFkaW5nLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3JlZHVjZXJzL3Zpc2l0VW5wbGFuLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9jb21wb25lbnRzL0JvdE5hdi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9jb21wb25lbnRzL0NhcmQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvY29tcG9uZW50cy9OYXYubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvY29tcG9uZW50cy9TcGlubmVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2NvbXBvbmVudHMvVGFibGVMYXN0RGF0YUluY2VudGl2ZS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9wYWdlcy9SZXdhcmQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY2hhcnRqcy0yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJOYXYiLCJmb2N1cyIsInJvdXRlciIsInVzZVJvdXRlciIsImFjdGl2ZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luIiwiYm9yZGVyUmFkaXVzIiwic3R5bGVzIiwibmF2X2NvbnRhaW5lciIsIm5hdl9ib3giLCJwYXRobmFtZSIsIkNhcmQiLCJjaGlsZHJlbiIsInN0eWxlIiwic2hhZG93IiwiY29udGFpbmVyIiwiYmFja0hyZWYiLCJ0aXRsZSIsImFjdGlvbiIsImNvbG9yIiwib25DbGljayIsImJhY2tBY3Rpb24iLCJub0JhY2siLCJkaXNhYmxlIiwibmF2X2dyZWVuIiwibmF2X3doaXRlIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJjdXJzb3IiLCJTcGlubmVyIiwic3Bpbm5lciIsIlRhYmVsTGFzdERhdGFJbmNlbnRpdmUiLCJkYXRhIiwidG90YWwiLCJ0b3RhbEluY2VudGl2ZSIsIm1hcCIsInZhbCIsInNwbGl0R3JvdXAiLCJncnVwIiwic3BsaXQiLCJpbnNlbnRpZiIsInJlbmRlckRhdGEiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwidW5kZWZpbmVkIiwibnVtZXJpYyIsImZvbnRXZWlnaHQiLCJrcGkiLCJ0b0xvY2FsZVN0cmluZyIsIk1hdGgiLCJyb3VuZCIsImFjaGlldmVtZW50IiwiZ3JhZGFzaSIsImluY2VudGl2ZV90YWJsZV9jb250YWluZXIiLCJ0YWJsZV9pbmNlbnRpdmUiLCJib3JkZXJUb3BMZWZ0UmFkaXVzIiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJ0Ym9keV9pbmNlbnRpdmUiLCJBUElfVVJMIiwiQVBJX1VTRVIiLCJBUElfTUFTVEVSIiwiQVBJX1ZJU0lUX1BMQU4iLCJBUElfVklTSVRfVU5QTEFOIiwiQVBJX1ZJU0lUX1NQUkVBRElORyIsIkFQSV9XT1JLX1ZJU0lUIiwiQVBJX0NBTEVOREFSX1BST0dSQU0iLCJBUElfQ0FMRU5EQVJfUFJPTU8iLCJBUElfQU5OT1VOQ0VNRU5UIiwiQVBJX0lOQ0VOVElWRSIsIkFQSV9CRU5FRklUIiwiVE9LRU4iLCJub3ciLCJEYXRlIiwiZGF0ZSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwiY29tcGFyZSIsIm5vbW9yIiwiZ2V0TWVudSIsInVzZXJEYXRhIiwiZmV0Y2giLCJlbWFpbCIsImhlYWRlcnMiLCJhcGlLZXkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZ2V0QXV0aCIsInVzZXJuYW1lIiwib25Mb2dpbiIsInZhbHVlcyIsInBhc3N3b3JkIiwibWV0aG9kIiwic2V0V3JvbmdVc2VyIiwiZ2V0UG9zbSIsImdldFByb2R1Y3RTZWFyY2giLCJzZWFyY2giLCJnZXRQcm9kdWN0QnlKZW5pc0NoYW5uZWwiLCJqZW5pc0NoYW5uZWxJZCIsImdldFByb2R1Y3RBdmdTYWxlcyIsInByb2R1Y3RDb2RlIiwib3V0bGV0Q29kZSIsImdldFNlYXJjaEplbmlzQ2hhbm5lbCIsImdldFNlYXJjaE91dGxldCIsImdldEJyYW5kIiwiZ2V0S29udGVuV29ya1Zpc2l0IiwiZ2V0U2FsZXNUYXJnZXRTTVIiLCJnZXRTYWxlc1RhcmdldDc1U01SIiwiZ2V0UGxhbkxpc3QiLCJyZXMiLCJmaWx0ZXIiLCJpc0NoZWNrT3V0IiwiZ2V0UGxhbklkIiwiaWQiLCJwbGFuTGlzdCIsImxlbmd0aCIsInNhbWVQbGFuIiwiZ2V0UGxhbkhpc3RvcnkiLCJzdWJtaXRWaXNpdFBsYW4iLCJBY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInN1Ym1pdFZpc2l0UGxhbkRwb3NtIiwiZHBvc20iLCJmaWxlIiwiZm9ybWRhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIm5hbWFGaWxlIiwiZ2V0SW52b2ljZURhdGEiLCJ2aXNpdFBsYW5JZCIsImdldEludm9pY2VEYXRhUG9zbSIsInNvcnREYXRhIiwidmlld0ZpbGUiLCJibG9iIiwib3V0c2lkZSIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImdldFBsYW5Nb250aGx5SGlzdG9yeSIsImRhdGVBIiwidGFuZ2dhbCIsImRhdGVCIiwic3VibWl0VmlzaXRVbnBsYW4iLCJzdWJtaXRWaXNpdFVucGxhbkRwb3NtIiwiZ2V0SW52b2ljZURhdGFVbnBsYW4iLCJnZXRJbnZvaWNlRGF0YVBvc21VbnBsYW4iLCJ2aXNpdFVucGxhbklkIiwidmlld0ZpbGVVbnBsYW4iLCJnZXRVbnBsYW5Nb250aGx5SGlzdG9yeSIsImdldFVucGxhbk5lYXJNZSIsInN1Ym1pdFZpc2l0U3ByZWFkaW5nIiwic3VibWl0VmlzaXRTcHJlYWRpbmdEcG9zbSIsImdldEludm9pY2VEYXRhU3ByZWFkaW5nIiwiZ2V0SW52b2ljZURhdGFQb3NtU3ByZWFkaW5nIiwidmlld0ZpbGVTcHJlYWRpbmciLCJnZXRTcHJlYWRpbmdNb250aGx5SGlzdG9yeSIsImdldEFsbFdvcmtWaXNpdCIsImdldFdvcmtWaXNpdE1vbnRobHlIaXN0b3J5IiwiZ2V0V29ya1Zpc2l0UmF0aW5nIiwic3VibWl0V29ya1Zpc2l0IiwiZ2V0RGF5UHJvbW8iLCJnZXREYXlQcm9ncmFtIiwiZ2V0TW9udGhQcm9tbyIsImdldE1vbnRoUHJvZ3JhbSIsImdldEFsbEFubm91bmNlbWVudCIsInVwZGF0ZVJlYWRBbm5vdW5jZW1lbnQiLCJnZXRQcm9kdWt0aWZpdGFzIiwiZ2V0RnJvbnRsaW5lciIsImdldE5vbyIsImdldFdvcmtEYXkiLCJnZXRLcGlJbnZlbnRpdmVNb250aGx5U01SIiwibW9tZW50IiwiZm9ybWF0IiwiZ2V0SW5jZW50aXZlWWVhcmx5IiwiZ2V0QmVuZWZpdENvZGVDYWJhbmciLCJwcmVmZXRjaGVkIiwiY3VyTG9jYWxlIiwib3B0aW9ucyIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsImxvY2FsZSIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJwIiwicmVzb2x2ZWRBcyIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJlbCIsInNldEludGVyc2VjdGlvblJlZiIsInNob3VsZFByZWZldGNoIiwiaXNWaXNpYmxlIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsInJlZiIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJsb2NhbGVEb21haW4iLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwic3RhcnQiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsIk1TX01BWF9JRExFX0RFTEFZIiwiZW50cnkiLCJQcm9taXNlIiwicHJvbSIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1dHVyZSIsImdlbmVyYXRvciIsInZhbHVlIiwibGluayIsImRvY3VtZW50Iiwid2luZG93IiwiY2FuUHJlZmV0Y2giLCJoYXNQcmVmZXRjaCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJzY3JpcHQiLCJyZWplY3QiLCJtYXJrQXNzZXRFcnJvciIsInNyYyIsImNhbmNlbGxlZCIsInIiLCJvbkJ1aWxkTWFuaWZlc3QiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0Iiwic2NyaXB0cyIsImFzc2V0UHJlZml4IiwiZW5jb2RlVVJJIiwiY3NzIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIm1hbmlmZXN0Iiwicm91dGUiLCJhbGxGaWxlcyIsInYiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsImFwcGVuZFNjcmlwdCIsInRleHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJ3aXRoRnV0dXJlIiwib25FbnRyeXBvaW50IiwiZm4iLCJleHBvcnRzIiwiY29tcG9uZW50IiwiZXJyb3IiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsImdldEZpbGVzRm9yUm91dGUiLCJlbnRyeXBvaW50IiwiY24iLCJuYXZpZ2F0b3IiLCJvdXRwdXQiLCJwcmVmZXRjaFZpYURvbSIsImNyZWF0ZVJvdXRlTG9hZGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJkaXNhYmxlZCIsInVub2JzZXJ2ZSIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiaWRsZUNhbGxiYWNrIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImNhbGxiYWNrIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJwYXRobmFtZVBhcnRzIiwibG9jYWxlcyIsImRldGVjdGVkTG9jYWxlIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiaXNMb2NhbFVSTCIsInJlc29sdmVBcyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsIm9yaWdpbiIsInJlc29sdmVIcmVmIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlZFVybCIsImFkZEJhc2VQYXRoIiwicHJlcGFyZWRBcyIsImNsZWFuUGF0aG5hbWUiLCJwYWdlcyIsInBhZ2UiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImNyZWRlbnRpYWxzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5Iiwibm90Rm91bmQiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiZGVmYXVsdExvY2FsZSIsImRvbWFpbkxvY2FsZXMiLCJpc1JlYWR5IiwiaXNQcmV2aWV3IiwiaXNMb2NhbGVEb21haW4iLCJfaWR4Iiwic3RhdGUiLCJpbml0aWFsIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJhdXRvRXhwb3J0RHluYW1pYyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwicm91dGVQcm9wcyIsImFkZExvY2FsZSIsImRlbEJhc2VQYXRoIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwicGFyc2VkIiwiX19yZXdyaXRlcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibm90Rm91bmRSb3V0ZSIsImFwcENvbXAiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiZm9yY2VkU2Nyb2xsIiwieCIsInkiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJBbm5vdW5jZW1lbnQiLCJkaXNwYXRjaCIsImFjdGlvbnMiLCJ1c2VDb250ZXh0IiwiU3RvcmVzIiwiZGF0YUtwaSIsInNldERhdGFLcGkiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGF0YUdyYXBoIiwic2V0RGF0YUdyYXBoIiwic2V0Tm93IiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImZpbGwiLCJib3JkZXJDb2xvciIsInNjYWxlcyIsInlBeGVzIiwidGlja3MiLCJpbmRleCIsInRvb2x0aXBzIiwiZW5hYmxlZCIsImhvdmVyIiwibW9kZSIsInVzZUVmZmVjdCIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImJ1bGFuIiwieWVhcmx5SW5jZW50aXZlIiwidG90YWxJbnNlbnRpZiIsIndyYXBwZXIiLCJtYWluIiwibWFyZ2luVG9wIiwidGV4dERlY29yYXRpb24iLCJyZXdhcmRfZ3JpZDIiLCJhZGRfcmV3YXJkIiwicGFkZGluZyIsIm1hcmdpblJpZ2h0Iiwic3VidHJhY3QiLCJtYXJnaW5MZWZ0IiwiYWRkIiwibWFyZ2luQm90dG9tIiwia2VlcFN0YXRlIiwidHlwZSIsInBheWxvYWQiLCJzZXREZWZhdWx0VmlzaXRQbGFuIiwic2V0RGVmYXVsdFZpc2l0U3ByZWFkaW5nIiwic2V0RGVmYXVsdFZpc2l0VW5wbGFuIiwic2V0TWVudSIsInNldFBsYW5BdmFiaWxpdHkiLCJzZXRQbGFuQ2F0YXRhbiIsInNldFBsYW5DaGVja0luIiwic2V0UGxhblZpc2liaWxpdHkiLCJzZXRTcHJlYWRpbmdDYXRhdGFuIiwic2V0U3ByZWFkaW5nQXZhYmlsaXR5Iiwic2V0U3ByZWFkaW5nQWxhbWF0Iiwic2V0U3ByZWFkaW5nQ2hlY2tJbiIsInNldFNwcmVhZGluZ0plbmlzQ2hhbm5lbCIsInNldFNwcmVhZGluZ05ld091dGxldCIsInNldFNwcmVhZGluZ091dGxldCIsInNldFNwcmVhZGluZ1Zpc2liaWxpdHkiLCJzZXRVbnBsYW5BdmFiaWxpdHkiLCJzZXRVbnBsYW5DYXRhdGFuIiwic2V0VW5wbGFuQ2hlY2tJbiIsInNldFVucGxhbkplbmlzQ2hhbm5lbCIsInNldFVucGxhbk91dGxldCIsInNldFVucGxhblZpc2liaWxpdHkiLCJ1c2VyTG9naW4iLCJjcmVhdGVDb250ZXh0IiwiU3RvcmUiLCJ1c2VSZWR1Y2VyIiwicHJldlN0YXRlIiwidXNlclJlZHVjZXIiLCJtZW51UmVkdWNlciIsInZpc2l0UGxhblJlZHVjZXIiLCJ2aXNpdFVucGxhblJlZHVjZXIiLCJ2aXNpdFNwcmVhZGluZ1JlZHVjZXIiLCJkZWZhdWx0VXNlciIsImRlZmF1bHRNZW51IiwiZGVmYXVsdFZpc2l0UGxhbiIsImRlZmF1bHRWaXNpdFVucGxhbiIsImRlZmF1bHRWaXNpdFNwcmVhZGluZyIsInVzZU1lbW8iLCJtZW51Iiwic2V0SXRlbSIsInVzZXJNZW51IiwidXNlciIsImNsZWFyIiwidmlzaWJpbGl0eSIsImF2YWJpbGl0eSIsImNhdGF0YW4iLCJjaGVja0luIiwiYWxhbWF0IiwibmV3T3V0bGV0IiwiamVuaXNDaGFubmVsIiwib3V0bGV0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFB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RCxDQW5CRDs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BBLG1DOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL3Jld2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcmV3YXJkL2luZGV4LmpzeFwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NvbXBvbmVudHMvQm90TmF2Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBOYXYgPSAoeyBmb2N1cyB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgdmFyIGFjdGl2ZSA9IChcclxuICAgIDxkaXZcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICB3aWR0aDogXCI1cHhcIixcclxuICAgICAgICBoZWlnaHQ6IFwiNXB4XCIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZWI4MDBcIixcclxuICAgICAgICBtYXJnaW46IFwiNXB4IGF1dG9cIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTBweFwiLFxyXG4gICAgICB9fVxyXG4gICAgLz5cclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdl9jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdl9ib3h9PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvXCIgPyBcIi9ob21lLW5hdi5zdmdcIiA6IFwiL2hvbWUtbmF2MS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAge3JvdXRlci5wYXRobmFtZSA9PT0gXCIvXCIgPyBhY3RpdmUgOiBcIlwifVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj17XCIvY2FsZW5kYXJcIn0+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2NhbGVuZGFyXCJcclxuICAgICAgICAgICAgICAgICAgICA/IFwiL2NhbGVuZGFyLW5hdi5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCIvY2FsZW5kYXItbmF2MS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAge3JvdXRlci5wYXRobmFtZSA9PT0gXCIvY2FsZW5kYXJcIiA/IGFjdGl2ZSA6IFwiXCJ9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPXtcIi9yZXdhcmRcIn0+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09IFwiL3Jld2FyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIi9hd2FyZC1uYXYuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiL2F3YXJkLW5hdjEuc3ZnXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL3Jld2FyZFwiID8gYWN0aXZlIDogXCJcIn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvYW5ub3VuY2VtZW50XCJcclxuICAgICAgICAgICAgICAgICAgICA/IFwiL3Jld2FyZHMtbmF2LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIi9yZXdhcmRzLW5hdjEuc3ZnXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL2Fubm91bmNlbWVudFwiID8gYWN0aXZlIDogXCJcIn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgIGZvY3VzID09PSBcInByb2ZpbGVcIiA/IFwiL3Byb2ZpbGUtbmF2LnN2Z1wiIDogXCIvcHJvZmlsZS1uYXYxLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7Zm9jdXMgPT09IFwicHJvZmlsZVwiID8gYWN0aXZlIDogXCJcIn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NvbXBvbmVudHMvQ2FyZC5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBDYXJkID0gKHsgY2hpbGRyZW4sIHN0eWxlLCBzaGFkb3cgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhaW5lcn0gJHtzaGFkb3cgPyBzdHlsZXMuc2hhZG93IDogXCJcIn1gfVxyXG4gICAgICBzdHlsZT17c3R5bGUgPyBzdHlsZSA6IHt9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jb21wb25lbnRzL05hdi5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBOYXYgPSAoe1xyXG4gIGJhY2tIcmVmLFxyXG4gIHRpdGxlLFxyXG4gIGFjdGlvbixcclxuICBjb2xvcixcclxuICBvbkNsaWNrLFxyXG4gIGJhY2tBY3Rpb24sXHJcbiAgbm9CYWNrLFxyXG4gIGRpc2FibGUsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgIGNvbG9yID09IFwiZ3JlZW5cIlxyXG4gICAgICAgICAgPyBgJHtzdHlsZXMubmF2X2dyZWVufSAke3N0eWxlcy5uYXZfY29udGFpbmVyfWBcclxuICAgICAgICAgIDogY29sb3IgPT0gXCJ3aGl0ZVwiXHJcbiAgICAgICAgICA/IGAke3N0eWxlcy5uYXZfd2hpdGV9ICR7c3R5bGVzLm5hdl9jb250YWluZXJ9YFxyXG4gICAgICAgICAgOiBzdHlsZXMubmF2X2NvbnRhaW5lclxyXG4gICAgICB9XHJcbiAgICA+XHJcbiAgICAgIHtiYWNrSHJlZiA/IChcclxuICAgICAgICA8TGluayBocmVmPXtiYWNrSHJlZiA/IGJhY2tIcmVmIDogXCIvXCJ9PlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6IFwiMjRweFwiIH19IHNyYz17XCIvYXJyb3ctbGVmdC5zdmdcIn0gLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICkgOiBub0JhY2sgPyAoXHJcbiAgICAgICAgPGRpdiAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgYmFja0FjdGlvbigpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjI0cHhcIiB9fVxyXG4gICAgICAgICAgc3JjPXtcIi9hcnJvdy1sZWZ0LnN2Z1wifVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgLy8gY2xhc3NOYW1lPXtjb2xvciA9PSBcImdyZWVuXCIgPyBzdHlsZXMud2hpdGUgOiBcIlwifVxyXG4gICAgICAgIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfVxyXG4gICAgICA+XHJcbiAgICAgICAge3RpdGxlfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2FjdGlvbiAmJiBkaXNhYmxlID09PSBmYWxzZSA/IChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIjNDE4NjdBXCIsXHJcbiAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHthY3Rpb259XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiBhY3Rpb24gJiYgZGlzYWJsZSA9PT0gdHJ1ZSA/IChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIjYzRjNGM0XCIsXHJcbiAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHthY3Rpb259XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdjtcclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NvbXBvbmVudHMvU3Bpbm5lci5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBTcGlubmVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3Bpbm5lcn0+XHJcbiAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgIDxkaXYgLz5cclxuICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgIDxkaXYgLz5cclxuICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgIDxkaXYgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3Bpbm5lcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jb21wb25lbnRzL1RhYmxlTGFzdERhdGFJbmNlbnRpdmUubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgVGFiZWxMYXN0RGF0YUluY2VudGl2ZSA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IHRvdGFsID0gKCkgPT4ge1xyXG4gICAgdmFyIHRvdGFsSW5jZW50aXZlID0gMDtcclxuICAgIGRhdGEubWFwKCh2YWwpID0+IHtcclxuICAgICAgdmFyIHNwbGl0R3JvdXAgPSB2YWwuZ3J1cC5zcGxpdChcIi5cIik7XHJcbiAgICAgIGlmIChzcGxpdEdyb3VwWzFdID09IDApIHtcclxuICAgICAgICB0b3RhbEluY2VudGl2ZSArPSB2YWwuaW5zZW50aWY7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRvdGFsSW5jZW50aXZlO1xyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVyRGF0YSA9ICgpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgdmFyIHNvcnQgPSBkYXRhLnNvcnQoKGEsIGIpID0+XHJcbiAgICAgIGEuZ3J1cC5sb2NhbGVDb21wYXJlKGIuZ3J1cCwgdW5kZWZpbmVkLCB7IG51bWVyaWM6IHRydWUgfSlcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHNvcnQubWFwKCh2YWwpID0+IHtcclxuICAgICAgdmFyIHNwbGl0R3JvdXAgPSB2YWwuZ3J1cC5zcGxpdChcIi5cIik7XHJcbiAgICAgIGlmIChzcGxpdEdyb3VwWzFdID09IDApIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPHRyXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGOUZDRjVcIixcclxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjYwMFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjdcIj57dmFsLmtwaX08L3RkPlxyXG4gICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD57dmFsLmluc2VudGlmLnRvTG9jYWxlU3RyaW5nKFwiaWQtSURcIil9PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjdcIj57dmFsLmtwaX08L3RkPlxyXG4gICAgICAgICAgICA8dGQ+e01hdGgucm91bmQodmFsLmFjaGlldmVtZW50ICogMTApIC8gMTB9JTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD57TWF0aC5yb3VuZCh2YWwuZ3JhZGFzaSAqIDEwKSAvIDEwfSU8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+e3ZhbC5pbnNlbnRpZi50b0xvY2FsZVN0cmluZyhcImlkLUlEXCIpfTwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5jZW50aXZlX3RhYmxlX2NvbnRhaW5lcn0+XHJcbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9e3N0eWxlcy50YWJsZV9pbmNlbnRpdmV9IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzQxODY3YVwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogXCI0cHhcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEycHhcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIzOHB4XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBjb2xTcGFuPVwiN1wiXHJcbiAgICAgICAgICAgICAgcm93U3Bhbj1cIjJcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiNDAlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEtQSSBJbmNlbnRpdmUgTW9udGhseVxyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM0MTg2N2FcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBcIjRweFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiOHB4XCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBjb2xTcGFuPVwiNFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBLQUxLVUxBVE9SXHJcbiAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPHRyXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM0MTg2N2FcIixcclxuICAgICAgICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogXCI0cHhcIixcclxuICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8dGQgd2lkdGg9XCIyMCVcIiBzdHlsZT17eyBmb250U2l6ZTogXCI4cHhcIiB9fT5cclxuICAgICAgICAgICAgICBBY2hpZXZtZW50XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCB3aWR0aD1cIjIwJVwiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjhweFwiIH19PlxyXG4gICAgICAgICAgICAgIEdyYWRhc2lcclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPHRkIHdpZHRoPVwiMjAlXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiOHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgSW50ZW5zaWZcclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPXtzdHlsZXMudGJvZHlfaW5jZW50aXZlfT5cclxuICAgICAgICAgIHtyZW5kZXJEYXRhKCl9XHJcbiAgICAgICAgICA8dHJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0Y5RkNGNVwiLFxyXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNjAwXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiN1wiPlRvdGFsIFBlcmhpdHVuZ2FuPC90ZD5cclxuICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICA8dGQ+e3RvdGFsKCkudG9Mb2NhbGVTdHJpbmcoXCJpZC1JRFwiKX08L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYmVsTGFzdERhdGFJbmNlbnRpdmU7XHJcbiIsInZhciBBUElfVVJMID0gXCJodHRwczovL20tb25lLmthbGJlLmNvLmlkOjgyNDMvdC9rYWxiZS5jby5pZFwiO1xyXG52YXIgQVBJX1VTRVIgPSBcIi9Vc2VyUHJvZmlsZUV4dGVybmFsL3YxL2FwaVwiO1xyXG52YXIgQVBJX01BU1RFUiA9IFwiL1Nha2Ftb3JNYXN0ZXJEYXRhL3YxL2FwaVwiO1xyXG52YXIgQVBJX1ZJU0lUX1BMQU4gPSBcIi9TYWthbW9yQWN0aXZpdHlWaXNpdFBsYW4vdjEvYXBpXCI7XHJcbnZhciBBUElfVklTSVRfVU5QTEFOID0gXCIvU2FrYW1vckFjdGl2aXR5VmlzaXRVblBsYW4vdjEvYXBpXCI7XHJcbnZhciBBUElfVklTSVRfU1BSRUFESU5HID0gXCIvU2FrYW1vckFjdGl2aXR5U3ByZWFkaW5nL3YxL2FwaVwiO1xyXG52YXIgQVBJX1dPUktfVklTSVQgPSBcIi9TYWthbW9yQWN0aXZpdHlXb3JrVmlzaXQvdjEvYXBpXCI7XHJcbnZhciBBUElfQ0FMRU5EQVJfUFJPR1JBTSA9IFwiL1Nha2Ftb3JLYWxlbmRlclByb2dyYW0vdjEvYXBpXCI7XHJcbnZhciBBUElfQ0FMRU5EQVJfUFJPTU8gPSBcIi9TYWthbW9ySW5mb1Byb21vL3YxL2FwaVwiO1xyXG52YXIgQVBJX0FOTk9VTkNFTUVOVCA9IFwiL1Nha2Ftb3JBbm5vdW5jZW1lbnQvdjEvYXBpXCI7XHJcbnZhciBBUElfSU5DRU5USVZFID0gXCIvU2FrYW1vckluY2VudGl2ZS92MS9hcGlcIjtcclxudmFyIEFQSV9CRU5FRklUID0gXCIvU2FrYW1vckJlbmVmaXRzL3YxL2FwaVwiO1xyXG52YXIgVE9LRU4gPVxyXG4gIFwiZXlKNE5YUWlPaUpaYW10NVdrUlZNMDV0UlRSWmJWWnFUMVJqZUU0eVJUUk5iVlpyVDFkU2FrMVhWbWhaVkdob1dXcGplRTlVWnpKTmVtdDRXVkU5UFNJc0ltdHBaQ0k2SW1kaGRHVjNZWGxmWTJWeWRHbG1hV05oZEdWZllXeHBZWE1pTENKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKU1V6STFOaUo5LmV5SnpkV0lpT2lKdWIySnZiaTVoYm1SeVlVQnJZV3hpWlM1amJ5NXBaQ0lzSW1Gd2NHeHBZMkYwYVc5dUlqcDdJbTkzYm1WeUlqb2libTlpYjI0dVlXNWtjbUZBYTJGc1ltVXVZMjh1YVdRaUxDSjBhV1Z5VVhWdmRHRlVlWEJsSWpwdWRXeHNMQ0owYVdWeUlqb2lWVzVzYVcxcGRHVmtJaXdpYm1GdFpTSTZJbE5oYTJGdGIzSWdNaTR3SWl3aWFXUWlPakU1TENKMWRXbGtJam9pTVRRNVpXVTBObVV0WkRFM05pMDBOV1F4TFdFM05tRXRPVEF6TTJSaE56YzRPVFU0SW4wc0ltbHpjeUk2SW1oMGRIQnpPbHd2WEM5dExXOXVaUzVyWVd4aVpTNWpieTVwWkRvNU5EUXpYQzl2WVhWMGFESmNMM1J2YTJWdUlpd2lkR2xsY2tsdVptOGlPbnNpVlc1c2FXMXBkR1ZrSWpwN0luUnBaWEpSZFc5MFlWUjVjR1VpT2lKeVpYRjFaWE4wUTI5MWJuUWlMQ0puY21Gd2FGRk1UV0Y0UTI5dGNHeGxlR2wwZVNJNk1Dd2laM0poY0doUlRFMWhlRVJsY0hSb0lqb3dMQ0p6ZEc5d1QyNVJkVzkwWVZKbFlXTm9JanAwY25WbExDSnpjR2xyWlVGeWNtVnpkRXhwYldsMElqb3dMQ0p6Y0dsclpVRnljbVZ6ZEZWdWFYUWlPbTUxYkd4OWZTd2lhMlY1ZEhsd1pTSTZJbE5CVGtSQ1QxZ2lMQ0p3WlhKdGFYUjBaV1JTWldabGNtVnlJam9pSWl3aWMzVmljMk55YVdKbFpFRlFTWE1pT2x0N0luTjFZbk5qY21saVpYSlVaVzVoYm5SRWIyMWhhVzRpT2lKcllXeGlaUzVqYnk1cFpDSXNJbTVoYldVaU9pSlRZV3RoYlc5eVFXTjBhWFpwZEhsV2FYTnBkRkJzWVc0aUxDSmpiMjUwWlhoMElqb2lYQzkwWEM5cllXeGlaUzVqYnk1cFpGd3ZVMkZyWVcxdmNrRmpkR2wyYVhSNVZtbHphWFJRYkdGdVhDOTJNU0lzSW5CMVlteHBjMmhsY2lJNkltNXZZbTl1TG1GdVpISmhRR3RoYkdKbExtTnZMbWxrSWl3aWRtVnljMmx2YmlJNkluWXhJaXdpYzNWaWMyTnlhWEIwYVc5dVZHbGxjaUk2SWxWdWJHbHRhWFJsWkNKOUxIc2ljM1ZpYzJOeWFXSmxjbFJsYm1GdWRFUnZiV0ZwYmlJNkltdGhiR0psTG1OdkxtbGtJaXdpYm1GdFpTSTZJbFZ6WlhKUWNtOW1hV3hsUlhoMFpYSnVZV3dpTENKamIyNTBaWGgwSWpvaVhDOTBYQzlyWVd4aVpTNWpieTVwWkZ3dlZYTmxjbEJ5YjJacGJHVkZlSFJsY201aGJGd3ZkakVpTENKd2RXSnNhWE5vWlhJaU9pSnViMkp2Ymk1aGJtUnlZVUJyWVd4aVpTNWpieTVwWkNJc0luWmxjbk5wYjI0aU9pSjJNU0lzSW5OMVluTmpjbWx3ZEdsdmJsUnBaWElpT2lKVmJteHBiV2wwWldRaWZTeDdJbk4xWW5OamNtbGlaWEpVWlc1aGJuUkViMjFoYVc0aU9pSnJZV3hpWlM1amJ5NXBaQ0lzSW01aGJXVWlPaUpUWVd0aGJXOXlUV0Z6ZEdWeVJHRjBZU0lzSW1OdmJuUmxlSFFpT2lKY0wzUmNMMnRoYkdKbExtTnZMbWxrWEM5VFlXdGhiVzl5VFdGemRHVnlSR0YwWVZ3dmRqRWlMQ0p3ZFdKc2FYTm9aWElpT2lKdWIySnZiaTVoYm1SeVlVQnJZV3hpWlM1amJ5NXBaQ0lzSW5abGNuTnBiMjRpT2lKMk1TSXNJbk4xWW5OamNtbHdkR2x2YmxScFpYSWlPaUpWYm14cGJXbDBaV1FpZlN4N0luTjFZbk5qY21saVpYSlVaVzVoYm5SRWIyMWhhVzRpT2lKcllXeGlaUzVqYnk1cFpDSXNJbTVoYldVaU9pSlRZV3RoYlc5eVFXTjBhWFpwZEhsVGNISmxZV1JwYm1jaUxDSmpiMjUwWlhoMElqb2lYQzkwWEM5cllXeGlaUzVqYnk1cFpGd3ZVMkZyWVcxdmNrRmpkR2wyYVhSNVUzQnlaV0ZrYVc1blhDOTJNU0lzSW5CMVlteHBjMmhsY2lJNkltNXZZbTl1TG1GdVpISmhRR3RoYkdKbExtTnZMbWxrSWl3aWRtVnljMmx2YmlJNkluWXhJaXdpYzNWaWMyTnlhWEIwYVc5dVZHbGxjaUk2SWxWdWJHbHRhWFJsWkNKOUxIc2ljM1ZpYzJOeWFXSmxjbFJsYm1GdWRFUnZiV0ZwYmlJNkltdGhiR0psTG1OdkxtbGtJaXdpYm1GdFpTSTZJbE5oYTJGdGIzSkJZM1JwZG1sMGVWWnBjMmwwVlc1UWJHRnVJaXdpWTI5dWRHVjRkQ0k2SWx3dmRGd3ZhMkZzWW1VdVkyOHVhV1JjTDFOaGEyRnRiM0pCWTNScGRtbDBlVlpwYzJsMFZXNVFiR0Z1WEM5Mk1TSXNJbkIxWW14cGMyaGxjaUk2SW01dlltOXVMbUZ1WkhKaFFHdGhiR0psTG1OdkxtbGtJaXdpZG1WeWMybHZiaUk2SW5ZeElpd2ljM1ZpYzJOeWFYQjBhVzl1VkdsbGNpSTZJbFZ1YkdsdGFYUmxaQ0o5TEhzaWMzVmljMk55YVdKbGNsUmxibUZ1ZEVSdmJXRnBiaUk2SW10aGJHSmxMbU52TG1sa0lpd2libUZ0WlNJNklsTmhhMkZ0YjNKQlkzUnBkbWwwZVZkdmNtdFdhWE5wZENJc0ltTnZiblJsZUhRaU9pSmNMM1JjTDJ0aGJHSmxMbU52TG1sa1hDOVRZV3RoYlc5eVFXTjBhWFpwZEhsWGIzSnJWbWx6YVhSY0wzWXhJaXdpY0hWaWJHbHphR1Z5SWpvaWJtOWliMjR1WVc1a2NtRkFhMkZzWW1VdVkyOHVhV1FpTENKMlpYSnphVzl1SWpvaWRqRWlMQ0p6ZFdKelkzSnBjSFJwYjI1VWFXVnlJam9pVlc1c2FXMXBkR1ZrSW4wc2V5SnpkV0p6WTNKcFltVnlWR1Z1WVc1MFJHOXRZV2x1SWpvaWEyRnNZbVV1WTI4dWFXUWlMQ0p1WVcxbElqb2lVMkZyWVcxdmNrdGhiR1Z1WkdWeVVISnZaM0poYlNJc0ltTnZiblJsZUhRaU9pSmNMM1JjTDJ0aGJHSmxMbU52TG1sa1hDOVRZV3RoYlc5eVMyRnNaVzVrWlhKUWNtOW5jbUZ0WEM5Mk1TSXNJbkIxWW14cGMyaGxjaUk2SW01dlltOXVMbUZ1WkhKaFFHdGhiR0psTG1OdkxtbGtJaXdpZG1WeWMybHZiaUk2SW5ZeElpd2ljM1ZpYzJOeWFYQjBhVzl1VkdsbGNpSTZJbFZ1YkdsdGFYUmxaQ0o5TEhzaWMzVmljMk55YVdKbGNsUmxibUZ1ZEVSdmJXRnBiaUk2SW10aGJHSmxMbU52TG1sa0lpd2libUZ0WlNJNklsTmhhMkZ0YjNKSmJtWnZVSEp2Ylc4aUxDSmpiMjUwWlhoMElqb2lYQzkwWEM5cllXeGlaUzVqYnk1cFpGd3ZVMkZyWVcxdmNrbHVabTlRY205dGIxd3ZkakVpTENKd2RXSnNhWE5vWlhJaU9pSnViMkp2Ymk1aGJtUnlZVUJyWVd4aVpTNWpieTVwWkNJc0luWmxjbk5wYjI0aU9pSjJNU0lzSW5OMVluTmpjbWx3ZEdsdmJsUnBaWElpT2lKVmJteHBiV2wwWldRaWZTeDdJbk4xWW5OamNtbGlaWEpVWlc1aGJuUkViMjFoYVc0aU9pSnJZV3hpWlM1amJ5NXBaQ0lzSW01aGJXVWlPaUpUWVd0aGJXOXlRVzV1YjNWdVkyVnRaVzUwSWl3aVkyOXVkR1Y0ZENJNklsd3ZkRnd2YTJGc1ltVXVZMjh1YVdSY0wxTmhhMkZ0YjNKQmJtNXZkVzVqWlcxbGJuUmNMM1l4SWl3aWNIVmliR2x6YUdWeUlqb2libTlpYjI0dVlXNWtjbUZBYTJGc1ltVXVZMjh1YVdRaUxDSjJaWEp6YVc5dUlqb2lkakVpTENKemRXSnpZM0pwY0hScGIyNVVhV1Z5SWpvaVZXNXNhVzFwZEdWa0luMHNleUp6ZFdKelkzSnBZbVZ5VkdWdVlXNTBSRzl0WVdsdUlqb2lhMkZzWW1VdVkyOHVhV1FpTENKdVlXMWxJam9pUVhWMGFHOXlhWHBoZEdsdmJrRlFTU0lzSW1OdmJuUmxlSFFpT2lKY0wzUmNMMnRoYkdKbExtTnZMbWxrWEM5QmRYUm9iM0pwZW1GMGFXOXVRVkJKWEM5Mk1TSXNJbkIxWW14cGMyaGxjaUk2SW0xMWFHRnRiV0ZrTG1ScFlXNXBRR3RoYkdKbExtTnZMbWxrSWl3aWRtVnljMmx2YmlJNkluWXhJaXdpYzNWaWMyTnlhWEIwYVc5dVZHbGxjaUk2SWxWdWJHbHRhWFJsWkNKOUxIc2ljM1ZpYzJOeWFXSmxjbFJsYm1GdWRFUnZiV0ZwYmlJNkltdGhiR0psTG1OdkxtbGtJaXdpYm1GdFpTSTZJbEp2YkdVaUxDSmpiMjUwWlhoMElqb2lYQzkwWEM5cllXeGlaUzVqYnk1cFpGd3ZVbTlzWlZ3dmRqRWlMQ0p3ZFdKc2FYTm9aWElpT2lKdGRXaGhiVzFoWkM1b2FXUmhlV0YwZFd4c01VQnJZV3hpWlM1amJ5NXBaQ0lzSW5abGNuTnBiMjRpT2lKMk1TSXNJbk4xWW5OamNtbHdkR2x2YmxScFpYSWlPaUpWYm14cGJXbDBaV1FpZlN4N0luTjFZbk5qY21saVpYSlVaVzVoYm5SRWIyMWhhVzRpT2lKcllXeGlaUzVqYnk1cFpDSXNJbTVoYldVaU9pSk5iMlIxYkdWQlVFa2lMQ0pqYjI1MFpYaDBJam9pWEM5MFhDOXJZV3hpWlM1amJ5NXBaRnd2VFc5a2RXeGxRVkJKWEM5Mk1TSXNJbkIxWW14cGMyaGxjaUk2SW0xMWFHRnRiV0ZrTG1ScFlXNXBRR3RoYkdKbExtTnZMbWxrSWl3aWRtVnljMmx2YmlJNkluWXhJaXdpYzNWaWMyTnlhWEIwYVc5dVZHbGxjaUk2SWxWdWJHbHRhWFJsWkNKOUxIc2ljM1ZpYzJOeWFXSmxjbFJsYm1GdWRFUnZiV0ZwYmlJNkltdGhiR0psTG1OdkxtbGtJaXdpYm1GdFpTSTZJbFZ6WlhKUWNtOW1hV3hsUVZCSklpd2lZMjl1ZEdWNGRDSTZJbHd2ZEZ3dmEyRnNZbVV1WTI4dWFXUmNMMVZ6WlhKUWNtOW1hV3hsUVZCSlhDOTJNU0lzSW5CMVlteHBjMmhsY2lJNkltMTFhR0Z0YldGa0xtUnBZVzVwUUd0aGJHSmxMbU52TG1sa0lpd2lkbVZ5YzJsdmJpSTZJbll4SWl3aWMzVmljMk55YVhCMGFXOXVWR2xsY2lJNklsVnViR2x0YVhSbFpDSjlMSHNpYzNWaWMyTnlhV0psY2xSbGJtRnVkRVJ2YldGcGJpSTZJbXRoYkdKbExtTnZMbWxrSWl3aWJtRnRaU0k2SWxOaGEyRnRiM0pKYm1ObGJuUnBkbVVpTENKamIyNTBaWGgwSWpvaVhDOTBYQzlyWVd4aVpTNWpieTVwWkZ3dlUyRnJZVzF2Y2tsdVkyVnVkR2wyWlZ3dmRqRWlMQ0p3ZFdKc2FYTm9aWElpT2lKdWIySnZiaTVoYm1SeVlVQnJZV3hpWlM1amJ5NXBaQ0lzSW5abGNuTnBiMjRpT2lKMk1TSXNJbk4xWW5OamNtbHdkR2x2YmxScFpYSWlPaUpWYm14cGJXbDBaV1FpZlN4N0luTjFZbk5qY21saVpYSlVaVzVoYm5SRWIyMWhhVzRpT2lKcllXeGlaUzVqYnk1cFpDSXNJbTVoYldVaU9pSlRZV3RoYlc5eVFtVnVaV1pwZEhNaUxDSmpiMjUwWlhoMElqb2lYQzkwWEM5cllXeGlaUzVqYnk1cFpGd3ZVMkZyWVcxdmNrSmxibVZtYVhSelhDOTJNU0lzSW5CMVlteHBjMmhsY2lJNkltNXZZbTl1TG1GdVpISmhRR3RoYkdKbExtTnZMbWxrSWl3aWRtVnljMmx2YmlJNkluWXhJaXdpYzNWaWMyTnlhWEIwYVc5dVZHbGxjaUk2SWxWdWJHbHRhWFJsWkNKOUxIc2ljM1ZpYzJOeWFXSmxjbFJsYm1GdWRFUnZiV0ZwYmlJNkltdGhiR0psTG1OdkxtbGtJaXdpYm1GdFpTSTZJa1JoZVU5bVppSXNJbU52Ym5SbGVIUWlPaUpjTDNSY0wydGhiR0psTG1OdkxtbGtYQzlFWVhsUFptWmNMM1l4SWl3aWNIVmliR2x6YUdWeUlqb2liWFZvWVcxdFlXUXVhR2xrWVhsaGRIVnNiREZBYTJGc1ltVXVZMjh1YVdRaUxDSjJaWEp6YVc5dUlqb2lkakVpTENKemRXSnpZM0pwY0hScGIyNVVhV1Z5SWpvaVZXNXNhVzFwZEdWa0luMWRMQ0p3WlhKdGFYUjBaV1JKVUNJNklpSXNJbWxoZENJNk1UWXlOalF4TVRJM055d2lhblJwSWpvaU9XUXlPR1V5WldFdFlUQTJaQzAwWkdNeExUZ3pPR0l0TmpRd01qVTFaVE0yTkdabUluMD0uY3R5OG0yU2hIWUVvdm5UVThmOHJXeHRLbW16YVoyOU1uOFFSSEpKT3RzNks4UEdNbHd1cHR5NEE1X1BaN20zbV9rcENUTUdSZVoyRjI3MUJpZXdPUF9lS0VwaWthSTVyRTdoZUtkUUt3cGF2dk0tZ1VCRUg4WVdhMDZIX0tfbzNFM1FfR2FOc1d4eFZoU0lDWGtPNTN4TFN0UldCaE5QcXhHRjhnYURNWWVQeHJfa19BWmZiaEF2Y0FMMGxXQkhiYW1BcHlEb3RCTTY4TTdfRy1COHV3TURXLUVlNGtmWjBnYkJMSDRFcjJHVjFLWEJmNUhDanhBT2dvRWZhR3NORmJRODhHcUw0dzBocWt4cFU3U01Ga2dpc1F3VGtub0ZuVHlONXhCVFUzREFGVFZiaHV3U3IxemJrZ1pnampxNEpqSC1reWh3VUNrMHktYnMyZDhpWlRnPT1cIjtcclxuXHJcbmV4cG9ydCB7XHJcbiAgVE9LRU4sXHJcbiAgQVBJX1VSTCxcclxuICBBUElfVVNFUixcclxuICBBUElfTUFTVEVSLFxyXG4gIEFQSV9WSVNJVF9QTEFOLFxyXG4gIEFQSV9WSVNJVF9VTlBMQU4sXHJcbiAgQVBJX1ZJU0lUX1NQUkVBRElORyxcclxuICBBUElfV09SS19WSVNJVCxcclxuICBBUElfQ0FMRU5EQVJfUFJPR1JBTSxcclxuICBBUElfQ0FMRU5EQVJfUFJPTU8sXHJcbiAgQVBJX0FOTk9VTkNFTUVOVCxcclxuICBBUElfSU5DRU5USVZFLFxyXG4gIEFQSV9CRU5FRklULFxyXG59O1xyXG4iLCJpbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IHtcclxuICBUT0tFTixcclxuICBBUElfVVJMLFxyXG4gIEFQSV9VU0VSLFxyXG4gIEFQSV9NQVNURVIsXHJcbiAgQVBJX1ZJU0lUX1BMQU4sXHJcbiAgQVBJX1ZJU0lUX1VOUExBTixcclxuICBBUElfVklTSVRfU1BSRUFESU5HLFxyXG4gIEFQSV9XT1JLX1ZJU0lULFxyXG4gIEFQSV9DQUxFTkRBUl9QUk9NTyxcclxuICBBUElfQ0FMRU5EQVJfUFJPR1JBTSxcclxuICBBUElfQU5OT1VOQ0VNRU5ULFxyXG4gIEFQSV9JTkNFTlRJVkUsXHJcbiAgQVBJX0JFTkVGSVQsXHJcbn0gZnJvbSBcIi4vY29uc3RhbnRcIjtcclxuXHJcbnZhciBub3cgPSBuZXcgRGF0ZSgpO1xyXG52YXIgZGF0ZSA9IG5vdy5nZXREYXRlKCk7XHJcbnZhciBtb250aCA9IG5vdy5nZXRNb250aCgpICsgMTtcclxudmFyIHllYXIgPSBub3cuZ2V0RnVsbFllYXIoKTtcclxuXHJcbmZ1bmN0aW9uIGNvbXBhcmUoYSwgYikge1xyXG4gIGlmIChhLm5vbW9yIDwgYi5ub21vcikge1xyXG4gICAgcmV0dXJuIC0xO1xyXG4gIH1cclxuICBpZiAoYS5ub21vciA+IGIubm9tb3IpIHtcclxuICAgIHJldHVybiAxO1xyXG4gIH1cclxuICByZXR1cm4gMDtcclxufVxyXG5cclxuLy8gVVNFUiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuY29uc3QgZ2V0TWVudSA9ICh1c2VyRGF0YSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgKyBBUElfVVNFUiArIGAvVXNlci9HZXRNZW51P3VzZXJuYW1lPSR7dXNlckRhdGEuZW1haWx9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0QXV0aCA9ICh1c2VyRGF0YSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgKyBBUElfVVNFUiArIGAvVXNlci9HZXRBdXRob3JpemU/dXNlcm5hbWU9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBvbkxvZ2luID0gKHZhbHVlcykgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVVNFUiArXHJcbiAgICAgIGAvVXNlci9Mb2dpbj91c2VybmFtZT0ke3ZhbHVlcy51c2VybmFtZX0mJnBhc3N3b3JkPSR7dmFsdWVzLnBhc3N3b3JkfWAsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIHNldFdyb25nVXNlcih0cnVlKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLy8gTUFTVEVSID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmNvbnN0IGdldFBvc20gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKEFQSV9VUkwgKyBBUElfTUFTVEVSICsgYC9NYXN0ZXJEYXRhTG9rYWwvR2V0QWxsRGlzcGxheVByb2dyYW1gLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRQcm9kdWN0U2VhcmNoID0gKHNlYXJjaCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChBUElfVVJMICsgQVBJX01BU1RFUiArIGAvTWFzdGVyRGF0YS9HZXRQcm9kdWtMaWtlLyR7c2VhcmNofWAsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgIH0sXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFByb2R1Y3RCeUplbmlzQ2hhbm5lbCA9IChqZW5pc0NoYW5uZWxJZCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfTUFTVEVSICtcclxuICAgICAgYC9NYXN0ZXJEYXRhTG9rYWwvR2V0UHJvZHVrSmVuaXNDaGFubmVsQnkvJHtqZW5pc0NoYW5uZWxJZH1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRQcm9kdWN0QXZnU2FsZXMgPSAocHJvZHVjdENvZGUsIG91dGxldENvZGUpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX01BU1RFUiArXHJcbiAgICAgIGAvTWFzdGVyRGF0YS9HZXRBdmdTYWxlczMwRGF5c0J5T3V0bGV0QW5kUHJvZHVjdD9wcm9kdWN0Q29kZT0ke3Byb2R1Y3RDb2RlfSZvdXRsZXRDb2RlPSR7b3V0bGV0Q29kZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRTZWFyY2hKZW5pc0NoYW5uZWwgPSAoc2VhcmNoKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArIEFQSV9NQVNURVIgKyBgL01hc3RlckRhdGFMb2thbC9HZXRKZW5pc0NoYW5uZWxCeT90ZWtzPSR7c2VhcmNofWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFNlYXJjaE91dGxldCA9IChzZWFyY2gpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICsgQVBJX01BU1RFUiArIGAvTWFzdGVyRGF0YUxva2FsL0dldE91dGxldEJ5P3Rla3M9JHtzZWFyY2h9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0QnJhbmQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKEFQSV9VUkwgKyBBUElfTUFTVEVSICsgYC9NYXN0ZXJEYXRhTG9rYWwvR2V0QWxsQnJhbmRgLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRLb250ZW5Xb3JrVmlzaXQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArIEFQSV9NQVNURVIgKyBgL01hc3RlckRhdGFMb2thbC9HZXRBbGxLb250ZW5Xb3JrVmlzaXRgLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRTYWxlc1RhcmdldFNNUiA9ICh1c2VyRGF0YSwgbW9udGgsIHllYXIpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX01BU1RFUiArXHJcbiAgICAgIGAvTWFzdGVyRGF0YUxva2FsL0dldFNhbGVzVGFyZ2V0QnkvJHt5ZWFyfS8ke21vbnRofT91c2VybmFtZVNtcj0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFNhbGVzVGFyZ2V0NzVTTVIgPSAodXNlckRhdGEsIG1vbnRoLCB5ZWFyKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9NQVNURVIgK1xyXG4gICAgICBgL01hc3RlckRhdGFMb2thbC9HZXRTYWxlc1RhcmdldDc1UGVyc2VuQnkvJHt5ZWFyfS8ke21vbnRofT91c2VybmFtZVNtcj0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8vIFZJU0lUIFBMQU4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuY29uc3QgZ2V0UGxhbkxpc3QgPSAodXNlckRhdGEpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1BMQU4gK1xyXG4gICAgICBgL0FjdGl2aXR5VmlzaXRQbGFuL0dldEFjdGl2aXR5VmlzaXRQbGFuQnk/dXNlcm5hbWU9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICB2YXIgcmVzID0gZGF0YS5maWx0ZXIoKHZhbCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB2YWwuaXNDaGVja091dCA9PT0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcmVzO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBsYW5JZCA9IChpZCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfUExBTiArXHJcbiAgICAgIGAvTWFzdGVyVmlzaXRQbGFuL0dldE1hc3RlclZpc2l0UGxhbkJ5P3BhcmFtZXRlcj0ke3llYXJ9LSR7bW9udGh9LSR7ZGF0ZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigocGxhbkxpc3QpID0+IHtcclxuICAgICAgaWYgKHBsYW5MaXN0Lmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKFxyXG4gICAgICAgICAgQVBJX1VSTCArXHJcbiAgICAgICAgICAgIEFQSV9WSVNJVF9QTEFOICtcclxuICAgICAgICAgICAgYC9NYXN0ZXJWaXNpdFBsYW4vR2V0TWFzdGVyVmlzaXRQbGFuQnlJZC8ke2lkfWAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBzYW1lUGxhbiA9IHBsYW5MaXN0LmZpbHRlcigodmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbC5pZCA9PT0gZGF0YS5pZDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4geyBzYW1lUGxhbiwgZGF0YSB9O1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcGxhbkxpc3Q7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRQbGFuSGlzdG9yeSA9ICh1c2VyRGF0YSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfUExBTiArXHJcbiAgICAgIGAvQWN0aXZpdHlWaXNpdFBsYW4vR2V0QWN0aXZpdHlWaXNpdFBsYW5CeT91c2VybmFtZT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHZhciByZXMgPSBkYXRhLmZpbHRlcigodmFsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHZhbC5pc0NoZWNrT3V0ID09PSB0cnVlO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHJlcztcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBzdWJtaXRWaXNpdFBsYW4gPSAoZGF0YSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgKyBBUElfVklTSVRfUExBTiArIFwiL0FjdGl2aXR5VmlzaXRQbGFuL1NhdmVBbGxBY3Rpdml0eVZpc2l0UGxhblwiLFxyXG4gICAge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImJhaWthbiBzYXZlYWxsXCIsIGRhdGEpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBzdWJtaXRWaXNpdFBsYW5EcG9zbSA9IChkcG9zbSwgZmlsZSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKGRwb3NtLCBmaWxlKTtcclxuICBjb25zdCBmb3JtZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfUExBTiArXHJcbiAgICAgIFwiL0FjdGl2aXR5VmlzaXRQbGFuRFBPU00vU2F2ZUFjdGl2aXR5VmlzaXRQbGFuRHBvc21cIixcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZHBvc20pLFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiYmFsaWthbiBwc29tXCIsIGRhdGEpO1xyXG4gICAgICBmb3JtZGF0YS5hcHBlbmQoXCJmaWxlXCIsIGZpbGUpO1xyXG4gICAgICByZXR1cm4gZmV0Y2goXHJcbiAgICAgICAgQVBJX1VSTCArXHJcbiAgICAgICAgICBBUElfVklTSVRfUExBTiArXHJcbiAgICAgICAgICBgL0FjdGl2aXR5VmlzaXRQbGFuRFBPU00vSW5zZXJ0RmlsZUJ5P2lkPSR7ZGF0YS5pZH0mbmFtYUZpbGU9JHtkYXRhLm5hbWFGaWxlfWAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiBmb3JtZGF0YSxcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJiYWxpa2FuIGluc2VyZmlsZVwiLCBkYXRhKTtcclxuICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0SW52b2ljZURhdGEgPSAodmlzaXRQbGFuSWQpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1BMQU4gK1xyXG4gICAgICBgL0FjdGl2aXR5VmlzaXRQbGFuL0dldFByb2R1a1N1cmF0UGVzYW5hbi8ke3Zpc2l0UGxhbklkfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldEludm9pY2VEYXRhUG9zbSA9ICh2aXNpdFBsYW5JZCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfUExBTiArXHJcbiAgICAgIGAvQWN0aXZpdHlWaXNpdFBsYW5EUE9TTS9HZXRBY3Rpdml0eVZpc2l0UGxhbkRQb3NtQnkvJHt2aXNpdFBsYW5JZH1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICB2YXIgc29ydERhdGEgPSBkYXRhLnNvcnQoY29tcGFyZSk7XHJcbiAgICAgIHJldHVybiBzb3J0RGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCB2aWV3RmlsZSA9IChpZCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgKyBBUElfVklTSVRfUExBTiArIGAvQWN0aXZpdHlWaXNpdFBsYW5EUE9TTS9WaWV3RmlsZS8ke2lkfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuYmxvYigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgIHZhciBvdXRzaWRlID0gVVJMLmNyZWF0ZU9iamVjdFVSTChkYXRhKTtcclxuICAgICAgcmV0dXJuIG91dHNpZGU7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UGxhbk1vbnRobHlIaXN0b3J5ID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9QTEFOICtcclxuICAgICAgYC9BY3Rpdml0eVZpc2l0UGxhbi9HZXRIaXN0b3J5QWN0aXZpdHlWaXNpdFBsYW5CeT91c2VybmFtZT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGRhdGEuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHZhciBkYXRlQSA9IG5ldyBEYXRlKGEudGFuZ2dhbCksXHJcbiAgICAgICAgICBkYXRlQiA9IG5ldyBEYXRlKGIudGFuZ2dhbCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGVCIC0gZGF0ZUE7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBWSVNJVCBVTlBMQU4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmNvbnN0IHN1Ym1pdFZpc2l0VW5wbGFuID0gKGRhdGEpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1VOUExBTiArXHJcbiAgICAgIGAvU2FrYW1vckFjdGl2aXR5VmlzaXRVblBsYW4vU2F2ZUFsbEFjdGl2aXR5VmlzaXRVblBsYW5gLFxyXG4gICAge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImJhaWthbiBzYXZlYWxsXCIsIGRhdGEpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBzdWJtaXRWaXNpdFVucGxhbkRwb3NtID0gKGRwb3NtLCBmaWxlKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coZHBvc20sIGZpbGUpO1xyXG4gIGNvbnN0IGZvcm1kYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9VTlBMQU4gK1xyXG4gICAgICBgL1Nha2Ftb3JBY3Rpdml0eVZpc2l0VW5QbGFuRFBPU00vU2F2ZUFjdGl2aXR5VmlzaXRVblBsYW5EcG9zbWAsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRwb3NtKSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImJhbGlrYW4gcHNvbVwiLCBkYXRhKTtcclxuICAgICAgZm9ybWRhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcclxuICAgICAgcmV0dXJuIGZldGNoKFxyXG4gICAgICAgIEFQSV9VUkwgK1xyXG4gICAgICAgICAgQVBJX1ZJU0lUX1VOUExBTiArXHJcbiAgICAgICAgICBgL1Nha2Ftb3JBY3Rpdml0eVZpc2l0VW5QbGFuRFBPU00vSW5zZXJ0RmlsZUJ5P2lkPSR7ZGF0YS5pZH0mbmFtYUZpbGU9JHtkYXRhLm5hbWFGaWxlfWAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiBmb3JtZGF0YSxcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJiYWxpa2FuIGluc2VyZmlsZVwiLCBkYXRhKTtcclxuICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0SW52b2ljZURhdGFVbnBsYW4gPSAodmlzaXRQbGFuSWQpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1VOUExBTiArXHJcbiAgICAgIGAvU2FrYW1vckFjdGl2aXR5VmlzaXRVblBsYW4vR2V0UHJvZHVrU3VyYXRQZXNhbmFuLyR7dmlzaXRQbGFuSWR9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0SW52b2ljZURhdGFQb3NtVW5wbGFuID0gKHZpc2l0VW5wbGFuSWQpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1VOUExBTiArXHJcbiAgICAgIGAvU2FrYW1vckFjdGl2aXR5VmlzaXRVblBsYW5EUE9TTS9HZXRBY3Rpdml0eVZpc2l0VW5QbGFuRFBvc21CeS8ke3Zpc2l0VW5wbGFuSWR9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgdmFyIHNvcnREYXRhID0gZGF0YS5zb3J0KGNvbXBhcmUpO1xyXG4gICAgICByZXR1cm4gc29ydERhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3Qgdmlld0ZpbGVVbnBsYW4gPSAoaWQpID0+IHtcclxuICBjb25zb2xlLmxvZyhpZCk7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9VTlBMQU4gK1xyXG4gICAgICBgL1Nha2Ftb3JBY3Rpdml0eVZpc2l0VW5QbGFuRFBPU00vVmlld0ZpbGUvJHtpZH1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmJsb2IoKTtcclxuICAgIH0pXHJcbiAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICB2YXIgb3V0c2lkZSA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZGF0YSk7XHJcbiAgICAgIHJldHVybiBvdXRzaWRlO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFVucGxhbk1vbnRobHlIaXN0b3J5ID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9VTlBMQU4gK1xyXG4gICAgICBgL1Nha2Ftb3JBY3Rpdml0eVZpc2l0VW5QbGFuL0dldEhpc3RvcnlBY3Rpdml0eVZpc2l0VW5QbGFuQnk/dXNlcm5hbWU9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBkYXRhLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICB2YXIgZGF0ZUEgPSBuZXcgRGF0ZShhLnRhbmdnYWwpLFxyXG4gICAgICAgICAgZGF0ZUIgPSBuZXcgRGF0ZShiLnRhbmdnYWwpO1xyXG4gICAgICAgIHJldHVybiBkYXRlQiAtIGRhdGVBO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0VW5wbGFuTmVhck1lID0gKCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgKyBBUElfTUFTVEVSICsgYC9NYXN0ZXJEYXRhL0dldE91dGxldE5lYXJNZS8tNi4xMjM0NTYvMTIuOTg3NjU0YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLy8gU1BSRUFESU5HID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5jb25zdCBzdWJtaXRWaXNpdFNwcmVhZGluZyA9IChkYXRhKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9TUFJFQURJTkcgK1xyXG4gICAgICBgL0FjdGl2aXR5U3ByZWFkaW5nL1NhdmVBbGxBY3Rpdml0eVNwcmVhZGluZ2AsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYmFpa2FuIHNhdmVhbGxcIiwgZGF0YSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHN1Ym1pdFZpc2l0U3ByZWFkaW5nRHBvc20gPSAoZHBvc20sIGZpbGUpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhkcG9zbSwgZmlsZSk7XHJcbiAgY29uc3QgZm9ybWRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1NQUkVBRElORyArXHJcbiAgICAgIGAvQWN0aXZpdHlTcHJlYWRpbmdEUE9TTS9TYXZlQWN0aXZpdHlTcHJlYWRpbmdEcG9zbWAsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRwb3NtKSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImJhbGlrYW4gcHNvbVwiLCBkYXRhKTtcclxuICAgICAgZm9ybWRhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcclxuICAgICAgcmV0dXJuIGZldGNoKFxyXG4gICAgICAgIEFQSV9VUkwgK1xyXG4gICAgICAgICAgQVBJX1ZJU0lUX1NQUkVBRElORyArXHJcbiAgICAgICAgICBgL0FjdGl2aXR5U3ByZWFkaW5nRFBPU00vSW5zZXJ0RmlsZUJ5P2lkPSR7ZGF0YS5pZH0mbmFtYUZpbGU9JHtkYXRhLm5hbWFGaWxlfWAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiBmb3JtZGF0YSxcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJiYWxpa2FuIGluc2VyZmlsZVwiLCBkYXRhKTtcclxuICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0SW52b2ljZURhdGFTcHJlYWRpbmcgPSAodmlzaXRQbGFuSWQpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1NQUkVBRElORyArXHJcbiAgICAgIGAvQWN0aXZpdHlTcHJlYWRpbmcvR2V0UHJvZHVrU3VyYXRQZXNhbmFuLyR7dmlzaXRQbGFuSWR9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0SW52b2ljZURhdGFQb3NtU3ByZWFkaW5nID0gKHZpc2l0VW5wbGFuSWQpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1NQUkVBRElORyArXHJcbiAgICAgIGAvQWN0aXZpdHlTcHJlYWRpbmdEUE9TTS9HZXRBY3Rpdml0eVZpc2l0VW5QbGFuRFBvc21CeS8ke3Zpc2l0VW5wbGFuSWR9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgdmFyIHNvcnREYXRhID0gZGF0YS5zb3J0KGNvbXBhcmUpO1xyXG4gICAgICByZXR1cm4gc29ydERhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3Qgdmlld0ZpbGVTcHJlYWRpbmcgPSAoaWQpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICsgQVBJX1ZJU0lUX1NQUkVBRElORyArIGAvQWN0aXZpdHlTcHJlYWRpbmdEUE9TTS9WaWV3RmlsZS8ke2lkfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuYmxvYigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgIHZhciBvdXRzaWRlID0gVVJMLmNyZWF0ZU9iamVjdFVSTChkYXRhKTtcclxuICAgICAgcmV0dXJuIG91dHNpZGU7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U3ByZWFkaW5nTW9udGhseUhpc3RvcnkgPSAodXNlckRhdGEpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1NQUkVBRElORyArXHJcbiAgICAgIGAvQWN0aXZpdHlTcHJlYWRpbmcvR2V0SGlzdG9yeUFjdGl2aXR5U3ByZWFkaW5nQnk/dXNlcm5hbWU9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBkYXRhLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICB2YXIgZGF0ZUEgPSBuZXcgRGF0ZShhLnRhbmdnYWwpLFxyXG4gICAgICAgICAgZGF0ZUIgPSBuZXcgRGF0ZShiLnRhbmdnYWwpO1xyXG4gICAgICAgIHJldHVybiBkYXRlQiAtIGRhdGVBO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLy8gV09SSyBWSVNJVCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuY29uc3QgZ2V0QWxsV29ya1Zpc2l0ID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9XT1JLX1ZJU0lUICtcclxuICAgICAgYC9BY3Rpdml0eVdvcmtWaXNpdC9HZXRBY3Rpdml0eVdvcmtWaXNpdEJ5P3VzZXJuYW1lPSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0V29ya1Zpc2l0TW9udGhseUhpc3RvcnkgPSAodXNlckRhdGEpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1dPUktfVklTSVQgK1xyXG4gICAgICBgL0FjdGl2aXR5V29ya1Zpc2l0L0dldEhpc3RvcnlBY3Rpdml0eVdvcmtWaXNpdEJ5P3VzZXJuYW1lPSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgZGF0YS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgdmFyIGRhdGVBID0gbmV3IERhdGUoYS50YW5nZ2FsKSxcclxuICAgICAgICAgIGRhdGVCID0gbmV3IERhdGUoYi50YW5nZ2FsKTtcclxuICAgICAgICByZXR1cm4gZGF0ZUIgLSBkYXRlQTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuY29uc3QgZ2V0V29ya1Zpc2l0UmF0aW5nID0gKGlkKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9XT1JLX1ZJU0lUICtcclxuICAgICAgYC9BY3Rpdml0eVdvcmtWaXNpdFJhdGluZy9HZXRBY3Rpdml0eVdvcmtWaXNpdFJhdGluZ0J5LyR7aWR9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3Qgc3VibWl0V29ya1Zpc2l0ID0gKGRhdGEpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICsgQVBJX1dPUktfVklTSVQgKyBcIi9BY3Rpdml0eVdvcmtWaXNpdC9TYXZlQWxsQWN0aXZpdHlXb3JrVmlzaXRcIixcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJiYWlrYW4gc2F2ZWFsbFwiLCBkYXRhKTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLy8gQ2FsZW5kYXIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmNvbnN0IGdldERheVByb21vID0gKGRhdGUpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX0NBTEVOREFSX1BST01PICtcclxuICAgICAgYC9TYWthbW9ySW5mb1Byb21vL0dldEluZm9Qcm9tb0J5RGF0ZS8ke2RhdGV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0RGF5UHJvZ3JhbSA9IChkYXRlKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9DQUxFTkRBUl9QUk9HUkFNICtcclxuICAgICAgYC9TYWthbW9yS2FsZW5kZXJQcm9ncmFtL0dldEthbGVuZGVyUHJvZ3JhbUJ5RGF0ZS8ke2RhdGV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0TW9udGhQcm9tbyA9IChkYXRlKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9DQUxFTkRBUl9QUk9NTyArXHJcbiAgICAgIGAvU2FrYW1vckluZm9Qcm9tby9HZXRJbmZvUHJvbW9CeU1vbnRoWWVhci8ke2RhdGV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0TW9udGhQcm9ncmFtID0gKGRhdGUpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX0NBTEVOREFSX1BST0dSQU0gK1xyXG4gICAgICBgL1Nha2Ftb3JLYWxlbmRlclByb2dyYW0vR2V0S2FsZW5kZXJQcm9ncmFtQnlNb250aFllYXIvJHtkYXRlfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8vIEFubm91bmNlbWVudCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuY29uc3QgZ2V0QWxsQW5ub3VuY2VtZW50ID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9BTk5PVU5DRU1FTlQgK1xyXG4gICAgICBgL1Nha2Ftb3JBbm5vdW5jZW1lbnQvR2V0QW5ub3VuY2VtZW50QnlVc2VyP3VzZXJuYW1lPSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlUmVhZEFubm91bmNlbWVudCA9IChpZCwgZGF0YSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIGBodHRwczovL20tb25lLmthbGJlLmNvLmlkOjgyNDMvdC9rYWxiZS5jby5pZC9TYWthbW9yQW5ub3VuY2VtZW50L3YxL2FwaS9TYWthbW9yQW5ub3VuY2VtZW50L1VwZGF0ZUFubm91bmNlbWVudFN0YXR1cy8ke2lkfWAsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBJTkNFTlRJVkUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuY29uc3QgZ2V0UHJvZHVrdGlmaXRhcyA9ICh1c2VyRGF0YSwgbW9udGgsIHllYXIpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX0lOQ0VOVElWRSArXHJcbiAgICAgIGAvU2FrYW1vckluY2VudGl2ZS9HZXRQcm9kdWt0aWZpdGFzQnlVc2VyUGVyaW9kZS8ke21vbnRofS8ke3llYXJ9P3VzZXJuYW1lPSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5jb25zdCBnZXRGcm9udGxpbmVyID0gKHVzZXJEYXRhLCBtb250aCwgeWVhcikgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfSU5DRU5USVZFICtcclxuICAgICAgYC9Gcm9udGxpbmVyL0dldEJ5VXNlclBlcmlvZGUvJHttb250aH0vJHt5ZWFyfT91c2VybmFtZT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldE5vbyA9ICh1c2VyRGF0YSwgbW9udGgsIHllYXIpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX0lOQ0VOVElWRSArXHJcbiAgICAgIGAvVGFyZ2V0Tk9PL0dldFNlbHNOT09CeVVzZXJQZXJpb2RlLyR7bW9udGh9LyR7eWVhcn0/dXNlcm5hbWU9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcbmNvbnN0IGdldFdvcmtEYXkgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKEFQSV9VUkwgKyBBUElfSU5DRU5USVZFICsgYC9TYWthbW9ySW5jZW50aXZlL0dldFdvcmtpbmdEYXkvMDFgLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRLcGlJbnZlbnRpdmVNb250aGx5U01SID0gKHVzZXJEYXRhLCBkYXRlKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgLy8gQVBJX1VSTCArXHJcbiAgICAvLyAgIEFQSV9JTkNFTlRJVkUgK1xyXG4gICAgLy8gICBgL0twaUluY2VudGl2ZU1vbnRobHkvR2V0SW5jZW50aXZlQ2FsY3VsYXRvci8yMDIxLTA3LTAxL1NNUj91c2VybmFtZVNNUj0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX0lOQ0VOVElWRSArXHJcbiAgICAgIGAvS3BpSW5jZW50aXZlTW9udGhseS9HZXRJbmNlbnRpdmVDYWxjdWxhdG9yLyR7bW9tZW50KGRhdGUpLmZvcm1hdChcclxuICAgICAgICBcIllZWVktTU1cIlxyXG4gICAgICApfS0wMS9TTVI/dXNlcm5hbWVTTVI9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcbmNvbnN0IGdldEluY2VudGl2ZVllYXJseSA9ICh1c2VyRGF0YSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfSU5DRU5USVZFICtcclxuICAgICAgYC9LcGlJbmNlbnRpdmVNb250aGx5L0dldFJla2FwSW5zZW50aWZCdWxhbmFuLyR7bW9tZW50KG5vdykuZm9ybWF0KFxyXG4gICAgICAgIFwiWVlZWVwiXHJcbiAgICAgICl9P3VzZXJuYW1lPSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLy8gQkVORUZJVCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5jb25zdCBnZXRCZW5lZml0Q29kZUNhYmFuZyA9ICh1c2VyRGF0YSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChBUElfVVJMICsgQVBJX0JFTkVGSVQgKyBgL0JlbmVmaXRzL0dldEJlbmVmaXRzQnlLb2RlQ2FiYW5nLzA0YCwge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgfSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBnZXRNZW51LFxyXG4gIGdldEF1dGgsXHJcbiAgb25Mb2dpbixcclxuICBnZXRQcm9kdWN0U2VhcmNoLFxyXG4gIGdldFNlYXJjaEplbmlzQ2hhbm5lbCxcclxuICBnZXRQcm9kdWN0QXZnU2FsZXMsXHJcbiAgZ2V0U2VhcmNoT3V0bGV0LFxyXG4gIGdldEJyYW5kLFxyXG4gIGdldFByb2R1Y3RCeUplbmlzQ2hhbm5lbCxcclxuICBnZXRLb250ZW5Xb3JrVmlzaXQsXHJcbiAgZ2V0UGxhbkxpc3QsXHJcbiAgZ2V0UGxhbklkLFxyXG4gIGdldFBvc20sXHJcbiAgZ2V0UGxhbkhpc3RvcnksXHJcbiAgc3VibWl0VmlzaXRQbGFuLFxyXG4gIHN1Ym1pdFZpc2l0UGxhbkRwb3NtLFxyXG4gIGdldEludm9pY2VEYXRhUG9zbSxcclxuICBnZXRJbnZvaWNlRGF0YSxcclxuICBnZXRQbGFuTW9udGhseUhpc3RvcnksXHJcbiAgdmlld0ZpbGUsXHJcbiAgc3VibWl0VmlzaXRVbnBsYW4sXHJcbiAgc3VibWl0VmlzaXRVbnBsYW5EcG9zbSxcclxuICBnZXRJbnZvaWNlRGF0YVVucGxhbixcclxuICBnZXRJbnZvaWNlRGF0YVBvc21VbnBsYW4sXHJcbiAgZ2V0VW5wbGFuTW9udGhseUhpc3RvcnksXHJcbiAgdmlld0ZpbGVVbnBsYW4sXHJcbiAgZ2V0VW5wbGFuTmVhck1lLFxyXG4gIHN1Ym1pdFZpc2l0U3ByZWFkaW5nLFxyXG4gIHN1Ym1pdFZpc2l0U3ByZWFkaW5nRHBvc20sXHJcbiAgZ2V0SW52b2ljZURhdGFTcHJlYWRpbmcsXHJcbiAgZ2V0SW52b2ljZURhdGFQb3NtU3ByZWFkaW5nLFxyXG4gIHZpZXdGaWxlU3ByZWFkaW5nLFxyXG4gIGdldFNwcmVhZGluZ01vbnRobHlIaXN0b3J5LFxyXG4gIGdldEFsbFdvcmtWaXNpdCxcclxuICBnZXRXb3JrVmlzaXRNb250aGx5SGlzdG9yeSxcclxuICBnZXRXb3JrVmlzaXRSYXRpbmcsXHJcbiAgc3VibWl0V29ya1Zpc2l0LFxyXG4gIGdldERheVByb2dyYW0sXHJcbiAgZ2V0RGF5UHJvbW8sXHJcbiAgZ2V0TW9udGhQcm9ncmFtLFxyXG4gIGdldE1vbnRoUHJvbW8sXHJcbiAgZ2V0QWxsQW5ub3VuY2VtZW50LFxyXG4gIHVwZGF0ZVJlYWRBbm5vdW5jZW1lbnQsXHJcbiAgZ2V0U2FsZXNUYXJnZXRTTVIsXHJcbiAgZ2V0U2FsZXNUYXJnZXQ3NVNNUixcclxuICBnZXRQcm9kdWt0aWZpdGFzLFxyXG4gIGdldEZyb250bGluZXIsXHJcbiAgZ2V0Tm9vLFxyXG4gIGdldEJlbmVmaXRDb2RlQ2FiYW5nLFxyXG4gIGdldFdvcmtEYXksXHJcbiAgZ2V0S3BpSW52ZW50aXZlTW9udGhseVNNUixcclxuICBnZXRJbmNlbnRpdmVZZWFybHksXHJcbn07XHJcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBnZXREb21haW5Mb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgY29uc3QgY3VyTG9jYWxlID1cbiAgICBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgIHNoYWxsb3csXG4gICAgbG9jYWxlLFxuICAgIHNjcm9sbCxcbiAgfSlcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5hc1BhdGgpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9XG4gICAgICByb3V0ZXIgJiZcbiAgICAgIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgY3VyTG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgICAgKVxuXG4gICAgY2hpbGRQcm9wcy5ocmVmID1cbiAgICAgIGxvY2FsZURvbWFpbiB8fFxuICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgeyByZXF1ZXN0SWRsZUNhbGxiYWNrIH0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nLCBwcmVmZXRjaD86IGJvb2xlYW4pOiBQcm9taXNlPFJvdXRlTG9hZGVyRW50cnk+XG4gIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XG59XG5cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbms/OiBIVE1MTGlua0VsZW1lbnQpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIShkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSkgfHxcbiAgICAgIGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKVxuICAgIClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuY29uc3QgY2FuUHJlZmV0Y2g6IGJvb2xlYW4gPSBoYXNQcmVmZXRjaCgpXG5cbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIGxpbms/OiBIVE1MTGlua0VsZW1lbnRcbik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgcmV0dXJuIHJlcygpXG4gICAgfVxuXG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICBpZiAoYXMpIGxpbmshLmFzID0gYXNcbiAgICBsaW5rIS5yZWwgPSBgcHJlZmV0Y2hgXG4gICAgbGluayEuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuICAgIGxpbmshLm9ubG9hZCA9IHJlc1xuICAgIGxpbmshLm9uZXJyb3IgPSByZWpcblxuICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgbGluayEuaHJlZiA9IGhyZWZcblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluaylcbiAgfSlcbn1cblxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpXG4vLyBUT0RPOiB1bmV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnI/OiBFcnJvcik6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyXG59XG5cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChcbiAgc3JjOiBzdHJpbmcsXG4gIHNjcmlwdD86IEhUTUxTY3JpcHRFbGVtZW50XG4pOiBQcm9taXNlPHVua25vd24+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmVcbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+XG4gICAgICByZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcblxuICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG5cbiAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgIHNjcmlwdC5zcmMgPSBzcmNcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgfSlcbn1cblxuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8VD4oXG4gIHA6IFByb21pc2U8VD4sXG4gIG1zOiBudW1iZXIsXG4gIGVycjogRXJyb3Jcbik6IFByb21pc2U8VD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuXG4gICAgcC50aGVuKChyKSA9PiB7XG4gICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgICByZXNvbHZlKHIpXG4gICAgfSkuY2F0Y2gocmVqZWN0KVxuXG4gICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSwgbXMpXG4gICAgKVxuICB9KVxufVxuXG4vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKTogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiB7XG4gIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgfVxuXG4gIGNvbnN0IG9uQnVpbGRNYW5pZmVzdDogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiA9IG5ldyBQcm9taXNlPFxuICAgIENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgPigocmVzb2x2ZSkgPT4ge1xuICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQlxuICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUISlcbiAgICAgIGNiICYmIGNiKClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8Q2xpZW50QnVpbGRNYW5pZmVzdD4oXG4gICAgb25CdWlsZE1hbmlmZXN0LFxuICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpXG4gIClcbn1cblxuaW50ZXJmYWNlIFJvdXRlRmlsZXMge1xuICBzY3JpcHRzOiBzdHJpbmdbXVxuICBjc3M6IHN0cmluZ1tdXG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKFxuICBhc3NldFByZWZpeDogc3RyaW5nLFxuICByb3V0ZTogc3RyaW5nXG4pOiBQcm9taXNlPFJvdXRlRmlsZXM+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBzY3JpcHRzOiBbXG4gICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICtcbiAgICAgICAgICBlbmNvZGVVUkkoZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKHJvdXRlLCAnLmpzJykpLFxuICAgICAgXSxcbiAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgIGNzczogW10sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KSA9PiB7XG4gICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpXG4gICAgfVxuICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcChcbiAgICAgIChlbnRyeSkgPT4gYXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5qcycpKSxcbiAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuY3NzJykpLFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnRcbiAgPiA9IG5ldyBNYXAoKVxuICBjb25zdCBsb2FkZWRTY3JpcHRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPHVua25vd24+PiA9IG5ldyBNYXAoKVxuICBjb25zdCBzdHlsZVNoZWV0czogTWFwPHN0cmluZywgUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+PiA9IG5ldyBNYXAoKVxuICBjb25zdCByb3V0ZXM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeVxuICA+ID0gbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb206IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQgPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHwgdW5kZWZpbmVkID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGU6IHN0cmluZywgcHJlZmV0Y2g/OiBib29sZWFuKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5Pihyb3V0ZSwgcm91dGVzLCAoKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KFxuICAgICAgICAgIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAgICAgLnRoZW4oKHsgc2NyaXB0cywgY3NzIH0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpXG4gICAgICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgICAgICA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksXG4gICAgICAgICAgICAgIF0gYXMgY29uc3QpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCkgPT4gKHtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50LFxuICAgICAgICAgICAgICAgIHN0eWxlczogcmVzWzFdLFxuICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgICAgICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKVxuICAgICAgICApXG4gICAgICAgICAgLnRoZW4oKHsgZW50cnlwb2ludCwgc3R5bGVzIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlczogUm91dGVMb2FkZXJFbnRyeSA9IE9iamVjdC5hc3NpZ248XG4gICAgICAgICAgICAgIHsgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXSB9LFxuICAgICAgICAgICAgICBSb3V0ZUVudHJ5cG9pbnRcbiAgICAgICAgICAgID4oeyBzdHlsZXM6IHN0eWxlcyEgfSwgZW50cnlwb2ludClcbiAgICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKHByZWZldGNoKSB7XG4gICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxuICAgICAgICAgICAgICB0aHJvdyBlcnJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IGVycm9yOiBlcnIgfVxuICAgICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0sXG4gICAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgbGV0IGNuXG4gICAgICBpZiAoKGNuID0gKG5hdmlnYXRvciBhcyBhbnkpLmNvbm5lY3Rpb24pKSB7XG4gICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIH1cbiAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgLnRoZW4oKG91dHB1dCkgPT5cbiAgICAgICAgICBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIGNhblByZWZldGNoXG4gICAgICAgICAgICAgID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpID0+IHByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpKVxuICAgICAgICAgICAgICA6IFtdXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHRoaXMubG9hZFJvdXRlKHJvdXRlLCB0cnVlKS5jYXRjaCgoKSA9PiB7fSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICgpID0+IHt9XG4gICAgICAgIClcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvdXRlTG9hZGVyXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuICAnaXNSZWFkeScsXG4gICdpc1ByZXZpZXcnLFxuICAnaXNMb2NhbGVEb21haW4nLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudDogc3RyaW5nKSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2ssXG4gIGNhbmNlbElkbGVDYWxsYmFjayxcbn0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7XG4gIGdldENsaWVudEJ1aWxkTWFuaWZlc3QsXG4gIGlzQXNzZXRFcnJvcixcbiAgbWFya0Fzc2V0RXJyb3IsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXInXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vLi4vc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IHsgbm9ybWFsaXplTG9jYWxlUGF0aCB9IGZyb20gJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxuICBORVhUX0RBVEEsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgLyogcHJvZCAqL1xuICAgIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICB9XG59XG5cbmludGVyZmFjZSBSb3V0ZVByb3BlcnRpZXMge1xuICBzaGFsbG93OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4gIHNjcm9sbD86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID1cbiAgfCBudWxsXG4gIHwgeyBfX046IGZhbHNlIH1cbiAgfCAoeyBfX046IHRydWU7IGlkeDogbnVtYmVyIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlOiB0eXBlb2YgaW1wb3J0KCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlXG5cbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKVxuICAgIC5kZXRlY3REb21haW5Mb2NhbGVcbn1cblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBsb2NhbGVzPzogc3RyaW5nW10sXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBsb2NhbGUgPSBsb2NhbGUgfHwgbm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZVxuXG4gICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpXG5cbiAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7XG4gICAgICAgIGJhc2VQYXRoIHx8ICcnXG4gICAgICB9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YFxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKVxuXG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpICYmXG4gICAgICBwYXRoTG93ZXIgIT09ICcvJyArIGxvY2FsZUxvd2VyXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpXG5cbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8XG4gICAgICAgIHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpXG4gICAgICA/IChwYXRobmFtZS5sZW5ndGggPT09IGxvY2FsZS5sZW5ndGggKyAxID8gJy8nIDogJycpICtcbiAgICAgICAgICBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoOiBzdHJpbmcpIHtcbiAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpXG4gIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpXG5cbiAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KVxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpXG4gIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gXG4gIHJldHVybiBwYXRoXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKVxuICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAgICAgICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAoc2VnbWVudCkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAuam9pbignLycpXG4gICAgICAgICAgICAgIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGxldCBiYXNlOiBVUkxcblxuICB0cnkge1xuICAgIGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICB9IGNhdGNoIChfKSB7XG4gICAgLy8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbiAgICBiYXNlID0gbmV3IFVSTCgnLycsICdodHRwOi8vbicpXG4gIH1cbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmw6IHN0cmluZykge1xuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG5cbiAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhcz86IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLmFzUGF0aCwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLmFzUGF0aCwgYXMpKVxuICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcblxuICByZXR1cm4ge1xuICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpLFxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWU6IHN0cmluZywgcGFnZXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lISkpXG5cbiAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICByZXR1cm4gcGF0aG5hbWVcbiAgfVxuXG4gIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYWdlXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gICAgfCAnaXNSZWFkeSdcbiAgICB8ICdpc1ByZXZpZXcnXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9XG4gIHwgKE9taXQ8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnc3R5bGVTaGVldHMnPiAmIHsgaW5pdGlhbDogdHJ1ZSB9KVxuICB8IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mb1xuXG5leHBvcnQgdHlwZSBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKFxuICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICBBcHA6IEFwcENvbXBvbmVudCxcbiAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbikgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmXG4gICEhKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHYgPSAnX19uZXh0J1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWVcbiAgICB9IGNhdGNoIChuKSB7fVxuICB9KSgpXG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJylcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkQgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gIHNkcjogeyBbYXNQYXRoOiBzdHJpbmddOiBQcm9taXNlPG9iamVjdD4gfSA9IHt9XG5cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc1JlYWR5OiBib29sZWFuXG4gIGlzUHJldmlldzogYm9vbGVhblxuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxuXG4gIHByaXZhdGUgX2lkeDogbnVtYmVyID0gMFxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICBpc1ByZXZpZXcsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChXcmFwQXBwQ29tcG9uZW50OiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICAgICAgaXNQcmV2aWV3PzogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0XG5cbiAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgdGhpcy5pc1JlYWR5ID0gISEoXG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fFxuICAgICAgKCFhdXRvRXhwb3J0RHluYW1pYyAmJlxuICAgICAgICAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiZcbiAgICAgICAgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpXG4gICAgKVxuICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXdcbiAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2VcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlc1xuICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKSxcbiAgICAgICAgICB7IGxvY2FsZSB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBmb3JjZWRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgaWR4IH0gPSBzdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeClcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2UodiEpXG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pZHggPSBpZHhcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduPHt9LCBUcmFuc2l0aW9uT3B0aW9ucywgVHJhbnNpdGlvbk9wdGlvbnM+KHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pLFxuICAgICAgZm9yY2VkU2Nyb2xsXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2gge31cbiAgICAgIH1cbiAgICB9XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyxcbiAgICBmb3JjZWRTY3JvbGw/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IChvcHRpb25zIGFzIGFueSkuX2hcblxuICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgIGlmICgob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB0byBzY3JvbGwgcmVzZXQgYmVoYXZpb3IgdW5sZXNzIGV4cGxpY2l0bHkgc3BlY2lmaWVkIHRvIGJlXG4gICAgLy8gYGZhbHNlYCEgVGhpcyBtYWtlcyB0aGUgYmVoYXZpb3IgYmV0d2VlbiB1c2luZyBgUm91dGVyI3B1c2hgIGFuZCBhXG4gICAgLy8gYDxMaW5rIC8+YCBjb25zaXN0ZW50LlxuICAgIG9wdGlvbnMuc2Nyb2xsID0gISEob3B0aW9ucy5zY3JvbGwgPz8gdHJ1ZSlcblxuICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBvcHRpb25zLmxvY2FsZSAhPT0gdGhpcy5sb2NhbGVcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID09PSBmYWxzZVxuICAgICAgICAgID8gdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcylcbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKVxuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aChcbiAgICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgICAgaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsXG4gICAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgICApLnBhdGhuYW1lXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgIGlmICghdGhpcy5sb2NhbGVzPy5pbmNsdWRlcyh0aGlzLmxvY2FsZSEpKSB7XG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgIClcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhZGlkTmF2aWdhdGUgJiZcbiAgICAgICAgICBkZXRlY3RlZERvbWFpbiAmJlxuICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7XG4gICAgICAgICAgICBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgICB9JHthZGRCYXNlUGF0aChcbiAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICA6IGAvJHt0aGlzLmxvY2FsZX1gXG4gICAgICAgICAgICB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nXG4gICAgICAgICAgKX1gXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG4gICAgY29uc3Qgcm91dGVQcm9wcyA9IHsgc2hhbGxvdyB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcylcbiAgICB9XG5cbiAgICBhcyA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbClcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgbGV0IHBhZ2VzOiBhbnksIHJld3JpdGVzOiBhbnlcbiAgICB0cnkge1xuICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgaWYgKHNob3VsZFJlc29sdmVIcmVmICYmIHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgIHJld3JpdGVzLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGhcblxuICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSwgcGFnZXMpXG5cbiAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICtcbiAgICAgICAgICAgIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2BcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICB0cnkge1xuICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgaWYgKChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJiAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUoXG4gICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUsXG4gICAgICAgICAgICAgIHBhZ2VzXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsLCBhczogbmV3QXMgfSA9IHByZXBhcmVVcmxBcyhcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXXG5cbiAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlXG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnXG4gICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgIHsgc2hhbGxvdzogZmFsc2UgfVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGVcblxuICAgICAgaWYgKFxuICAgICAgICAob3B0aW9ucyBhcyBhbnkpLl9oICYmXG4gICAgICAgIHBhdGhuYW1lID09PSAnL19lcnJvcicgJiZcbiAgICAgICAgc2VsZi5fX05FWFRfREFUQV9fLnByb3BzPy5wYWdlUHJvcHM/LnN0YXR1c0NvZGUgPT09IDUwMCAmJlxuICAgICAgICBwcm9wcz8ucGFnZVByb3BzXG4gICAgICApIHtcbiAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDBcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQoXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSEsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBjbGVhbmVkQXMsXG4gICAgICAgIHJvdXRlSW5mbyxcbiAgICAgICAgZm9yY2VkU2Nyb2xsIHx8XG4gICAgICAgICAgKGlzVmFsaWRTaGFsbG93Um91dGUgfHwgIW9wdGlvbnMuc2Nyb2xsID8gbnVsbCA6IHsgeDogMCwgeTogMCB9KVxuICAgICAgKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgIH0pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDEsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgICAgICByb3V0ZUluZm9FcnIsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHMsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByZXNvbHZlZEFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9IHRoaXMuY29tcG9uZW50c1tcbiAgICAgICAgcm91dGVcbiAgICAgIF1cbiAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID1cbiAgICAgICAgZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRMb2NhbGU6IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBsZXQgcmV3cml0ZXM6IGFueVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG5cbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHBhcnNlZC5xdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSlcblxuICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHJldHVybiBpc1NzZ1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmxvY2FsZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAhdGhpcy5pc1ByZXZpZXcgJiZcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XVxuICAgICkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgfVxuICAgIHJldHVybiAodGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfSkpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nLCByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdChcbiAgICAgICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICAgICBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoXG4gICAgICBkYXRhLFxuICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQsXG4gICAgICByZXNldFNjcm9sbFxuICAgIClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgZ2xvYmFsQmFzZSA9IG5ldyBVUkwoXG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuICApXG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIGdsb2JhbEJhc2UpIDogZ2xvYmFsQmFzZVxuICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMsIHNlYXJjaCwgaGFzaCwgaHJlZiwgb3JpZ2luIH0gPSBuZXcgVVJMKFxuICAgIHVybCxcbiAgICByZXNvbHZlZEJhc2VcbiAgKVxuICBpZiAob3JpZ2luICE9PSBnbG9iYWxCYXNlLm9yaWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcygpIHt9XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBQcmV2aWV3RGF0YSB9IGZyb20gJ25leHQvdHlwZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiAoc3RyaW5nIHwgbnVtYmVyKVtdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgc2NyaXB0TG9hZGVyPzogYW55W11cbiAgaXNQcmV2aWV3PzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IHN0cmluZ1tdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgdW5zdGFibGVfSnNQcmVsb2FkPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBzY3JpcHRMb2FkZXI6IHsgZGVmZXI/OiBzdHJpbmdbXTsgZWFnZXI/OiBhbnlbXSB9XG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBQcmV2aWV3RGF0YVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL3BhZ2VzL1Jld2FyZC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgU3RvcmVzIH0gZnJvbSBcIi4uLy4uL3N0b3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0QWxsQW5ub3VuY2VtZW50LFxyXG4gIGdldEluY2VudGl2ZVllYXJseSxcclxuICBnZXRLcGlJbnZlbnRpdmVNb250aGx5U01SLFxyXG59IGZyb20gXCIuLi8uLi9oZWxwZXJcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCBCb3ROYXYgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQm90TmF2XCI7XHJcbmltcG9ydCBOYXYgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTmF2XCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NhcmRcIjtcclxuaW1wb3J0IHsgTGluZSB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcclxuXHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NwaW5uZXJcIjtcclxuaW1wb3J0IFRhYmVsTGFzdERhdGFJbmNlbnRpdmUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGFibGVMYXN0RGF0YUluY2VudGl2ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQW5ub3VuY2VtZW50KCkge1xyXG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoLCBhY3Rpb25zIH0gPSB1c2VDb250ZXh0KFN0b3Jlcyk7XHJcbiAgY29uc3QgW2RhdGFLcGksIHNldERhdGFLcGldID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtkYXRhR3JhcGgsIHNldERhdGFHcmFwaF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW25vdywgc2V0Tm93XSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xyXG5cclxuICBjb25zdCBkYXRhID0ge1xyXG4gICAgbGFiZWxzOiBbXHJcbiAgICAgIFwiSmFuXCIsXHJcbiAgICAgIFwiRmViXCIsXHJcbiAgICAgIFwiTWFyXCIsXHJcbiAgICAgIFwiQXByXCIsXHJcbiAgICAgIFwiTWF5XCIsXHJcbiAgICAgIFwiSnVuZVwiLFxyXG4gICAgICBcIkp1bHlcIixcclxuICAgICAgXCJBdWdcIixcclxuICAgICAgXCJTZXB0XCIsXHJcbiAgICAgIFwiT2N0XCIsXHJcbiAgICAgIFwiTm92XCIsXHJcbiAgICAgIFwiRGVjXCIsXHJcbiAgICBdLFxyXG4gICAgZGF0YXNldHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiBcIkxhc3QgRGF0YSBJbnNlbnRpdmVcIixcclxuICAgICAgICBkYXRhOiBkYXRhR3JhcGgsXHJcbiAgICAgICAgZmlsbDogZmFsc2UsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYig2NSwgMTM0LCAxMjIpXCIsXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiYSg2NSwgMTM0LCAxMjIsIDAuMilcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHNjYWxlczoge1xyXG4gICAgICB5QXhlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgIC8vIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKGxhYmVsLCBpbmRleCwgbGFiZWxzKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoKGxhYmVsIC8gMTAwMDAwKSAqIDEwKSAvIDEwMCArIFwiIGtcIjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB0b29sdGlwczogeyBlbmFibGVkOiBmYWxzZSB9LFxyXG4gICAgaG92ZXI6IHsgbW9kZTogbnVsbCB9LFxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcclxuICAgIGdldEtwaUludmVudGl2ZU1vbnRobHlTTVIodXNlckRhdGEsIG5vdylcclxuICAgICAgLnRoZW4oKGRhdGFLcGkpID0+IHtcclxuICAgICAgICBzZXREYXRhS3BpKGRhdGFLcGkpO1xyXG4gICAgICAgIGdldEluY2VudGl2ZVllYXJseSh1c2VyRGF0YSlcclxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGRhdGEuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICAgIHJldHVybiBhLmJ1bGFuIC0gYi5idWxhbjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciB5ZWFybHlJbmNlbnRpdmUgPSBkYXRhLm1hcCgodmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbC50b3RhbEluc2VudGlmO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2V0RGF0YUdyYXBoKHllYXJseUluY2VudGl2ZSk7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9LCBbZGlzcGF0Y2gsIG5vd10pO1xyXG5cclxuICBjb25zdCB0b3RhbCA9ICgpID0+IHtcclxuICAgIHZhciB0b3RhbEluY2VudGl2ZSA9IDA7XHJcbiAgICBkYXRhS3BpLm1hcCgodmFsKSA9PiB7XHJcbiAgICAgIHZhciBzcGxpdEdyb3VwID0gdmFsLmdydXAuc3BsaXQoXCIuXCIpO1xyXG4gICAgICBpZiAoc3BsaXRHcm91cFsxXSA9PSAwKSB7XHJcbiAgICAgICAgdG90YWxJbmNlbnRpdmUgKz0gdmFsLmluc2VudGlmO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0b3RhbEluY2VudGl2ZTtcclxuICB9O1xyXG5cclxuICBpZiAobG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxTcGlubmVyIC8+O1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICA8TmF2IHRpdGxlPXtcIlJld2FyZFwifSBjb2xvcj17XCJ3aGl0ZVwifSBub0JhY2sgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI2cHhcIiwgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Jld2FyZC9iZW5lZml0c1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJld2FyZF9ncmlkMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRfcmV3YXJkfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIi0xMXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcIi9hbGVydC1jaXJjbGUuc3ZnXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNjAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNGRUI4MDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQmVuZWZpdHNcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjQjlCOUMzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCIzMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxM3B4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlZSB5b3UgYmVuZWZpdHMgaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiL25leHQuc3ZnXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiNnB4XCIsIG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgPExpbmUgZGF0YT17ZGF0YX0gb3B0aW9ucz17b3B0aW9uc30gLz5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNnB4XCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCIxNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjNUU1ODczXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb21lbnQobm93KS5mb3JtYXQoXCJNTU1NIFlZWVlcIikgIT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbWVudCgpLnN1YnRyYWN0KDEsIFwieWVhcnNcIikuZm9ybWF0KFwiTU1NTSBZWVlZXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Tm93KG1vbWVudChub3cpLnN1YnRyYWN0KDEsIFwibW9udGhzXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge21vbWVudChub3cpLmZvcm1hdChcIk1NTU0gWVlZWVwiKSAhPT1cclxuICAgICAgICAgICAgICAgICAgICBtb21lbnQoKS5zdWJ0cmFjdCgxLCBcInllYXJzXCIpLmZvcm1hdChcIk1NTU0gWVlZWVwiKSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcIi9jZXZfbGVmdC5zdmdcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMjBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XCIvY2hldl9sZWZ0X2dyYXkuc3ZnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+e21vbWVudChub3cpLmZvcm1hdChcIk1NTU0gWVlZWVwiKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9tZW50KCkuZm9ybWF0KFwiTU1NTSBZWVlZXCIpICE9PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb21lbnQobm93KS5mb3JtYXQoXCJNTU1NIFlZWVlcIilcclxuICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXROb3cobW9tZW50KG5vdykuYWRkKDEsIFwibW9udGhzXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge21vbWVudCgpLmZvcm1hdChcIk1NTU0gWVlZWVwiKSAhPT1cclxuICAgICAgICAgICAgICAgICAgICBtb21lbnQobm93KS5mb3JtYXQoXCJNTU1NIFlZWVlcIikgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17XCIvbmV4dC5zdmdcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMjBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XCIvY2hldl9yaWdodF9ncmF5LnN2Z1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIyNHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNzAwXCIsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM0MTg2N2FcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2RhdGFLcGkgPyAoXHJcbiAgICAgICAgICAgICAgICAgIGAke3RvdGFsKCkudG9Mb2NhbGVTdHJpbmcoXCJpZC1JRFwiKX0gSURSYFxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPGRpdj5ObyBkYXRhPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI2cHhcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjE1cHhcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1RTU4NzNcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250V2VpZ2h0OiBcIjcwMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgS1BJIEluY2VudGl2ZSBNb250aGx5ICgge21vbWVudChub3cpLmZvcm1hdChcIk1NTU0gWVlZWVwiKX0gKVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHtkYXRhS3BpID8gKFxyXG4gICAgICAgICAgICAgICAgPFRhYmVsTGFzdERhdGFJbmNlbnRpdmUgZGF0YT17ZGF0YUtwaX0gLz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5ObyBEYXRhPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMjBweFwiIH19IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Qm90TmF2IC8+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgKGRpc3BhdGNoKSA9PiAoe1xyXG4gIGtlZXBTdGF0ZTogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJLRUVQX1NUQVRFXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0RGVmYXVsdFZpc2l0UGxhbjogYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9ERUZBVUxUX1ZJU0lUX1BMQU5cIiB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXREZWZhdWx0VmlzaXRTcHJlYWRpbmc6IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfREVGQVVMVF9WSVNJVF9TUFJFQURJTkdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXREZWZhdWx0VmlzaXRVbnBsYW46IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfREVGQVVMVF9WSVNJVF9VTlBMQU5cIiB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRNZW51OiBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9NRU5VXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0UGxhbkF2YWJpbGl0eTogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfUExBTl9BVkFCSUxJVFlcIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRQbGFuQ2F0YXRhbjogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfUExBTl9DQVRBVEFOXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0UGxhbkNoZWNrSW46IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1BMQU5fQ0hFQ0tfSU5cIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRQbGFuVmlzaWJpbGl0eTogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfUExBTl9WSVNJQklMSVRZXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0U3ByZWFkaW5nQ2F0YXRhbjogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfU1BSRUFESU5HX0NBVEFUQU5cIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRTcHJlYWRpbmdBdmFiaWxpdHk6IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1NQUkVBRElOR19BVkFCSUxJVFlcIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRTcHJlYWRpbmdBbGFtYXQ6IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1NQUkVBRElOR19BTEFNQVRcIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRTcHJlYWRpbmdDaGVja0luOiBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9TUFJFQURJTkdfQ0hFQ0tfSU5cIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRTcHJlYWRpbmdKZW5pc0NoYW5uZWw6IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1NQUkVBRElOR19KRU5JU19DSEFOTkVMXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0U3ByZWFkaW5nTmV3T3V0bGV0OiBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9TUFJFQURJTkdfTkVXX09VVExFVFwiLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNldFNwcmVhZGluZ091dGxldDogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfU1BSRUFESU5HX09VVExFVFwiLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNldFNwcmVhZGluZ1Zpc2liaWxpdHk6IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1NQUkVBRElOR19WSVNJQklMSVRZXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0VW5wbGFuQXZhYmlsaXR5OiBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9VTlBMQU5fQVZBQklMSVRZXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0VW5wbGFuQ2F0YXRhbjogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfVU5QTEFOX0NBVEFUQU5cIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRVbnBsYW5DaGVja0luOiBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9VTlBMQU5fQ0hFQ0tfSU5cIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRVbnBsYW5KZW5pc0NoYW5uZWw6IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1VOUExBTl9KRU5JU19DSEFOTkVMXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0VW5wbGFuT3V0bGV0OiBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9VTlBMQU5fT1VUTEVUXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0VW5wbGFuVmlzaWJpbGl0eTogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfVU5QTEFOX1ZJU0lCSUxJVFlcIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICB1c2VyTG9naW46IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiVVNFUl9MT0dJTlwiLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IHVzZXJSZWR1Y2VyLCBkZWZhdWx0VXNlciB9IGZyb20gXCIuL3JlZHVjZXJzL3VzZXJcIjtcclxuaW1wb3J0IHsgbWVudVJlZHVjZXIsIGRlZmF1bHRNZW51IH0gZnJvbSBcIi4vcmVkdWNlcnMvbWVudVwiO1xyXG5pbXBvcnQgeyB2aXNpdFBsYW5SZWR1Y2VyLCBkZWZhdWx0VmlzaXRQbGFuIH0gZnJvbSBcIi4vcmVkdWNlcnMvdmlzaXRQbGFuXCI7XHJcbmltcG9ydCB7IHZpc2l0VW5wbGFuUmVkdWNlciwgZGVmYXVsdFZpc2l0VW5wbGFuIH0gZnJvbSBcIi4vcmVkdWNlcnMvdmlzaXRVbnBsYW5cIjtcclxuaW1wb3J0IHtcclxuICB2aXNpdFNwcmVhZGluZ1JlZHVjZXIsXHJcbiAgZGVmYXVsdFZpc2l0U3ByZWFkaW5nLFxyXG59IGZyb20gXCIuL3JlZHVjZXJzL3Zpc2l0U3ByZWFkaW5nXCI7XHJcblxyXG5pbXBvcnQgdXNlckxvZ2luIGZyb20gXCIuL2FjdGlvbnMvdXNlckxvZ2luXCI7XHJcbmltcG9ydCBzZXRNZW51IGZyb20gXCIuL2FjdGlvbnMvc2V0TWVudVwiO1xyXG5pbXBvcnQga2VlcFN0YXRlIGZyb20gXCIuL2FjdGlvbnMva2VlcFN0YXRlXCI7XHJcblxyXG5pbXBvcnQgc2V0UGxhblZpc2liaWxpdHkgZnJvbSBcIi4vYWN0aW9ucy9zZXRQbGFuVmlzaWJpbGl0eVwiO1xyXG5pbXBvcnQgc2V0UGxhbkF2YWJpbGl0eSBmcm9tIFwiLi9hY3Rpb25zL3NldFBsYW5BdmFiaWxpdHlcIjtcclxuaW1wb3J0IHNldFBsYW5DYXRhdGFuIGZyb20gXCIuL2FjdGlvbnMvc2V0UGxhbkNhdGF0YW5cIjtcclxuaW1wb3J0IHNldFBsYW5DaGVja0luIGZyb20gXCIuL2FjdGlvbnMvc2V0UGxhbkNoZWNrSW5cIjtcclxuXHJcbmltcG9ydCBzZXRVbnBsYW5BdmFiaWxpdHkgZnJvbSBcIi4vYWN0aW9ucy9zZXRVbnBsYW5BdmFiaWxpdHlcIjtcclxuaW1wb3J0IHNldFVucGxhblZpc2liaWxpdHkgZnJvbSBcIi4vYWN0aW9ucy9zZXRVbnBsYW5WaXNpYmlsaXR5XCI7XHJcbmltcG9ydCBzZXRVbnBsYW5DYXRhdGFuIGZyb20gXCIuL2FjdGlvbnMvc2V0VW5wbGFuQ2F0YXRhblwiO1xyXG5pbXBvcnQgc2V0VW5wbGFuQ2hlY2tJbiBmcm9tIFwiLi9hY3Rpb25zL3NldFVucGxhbkNoZWNrSW5cIjtcclxuaW1wb3J0IHNldFVucGxhbkplbmlzQ2hhbm5lbCBmcm9tIFwiLi9hY3Rpb25zL3NldFVucGxhbkplbmlzQ2hhbm5lbFwiO1xyXG5pbXBvcnQgc2V0VW5wbGFuT3V0bGV0IGZyb20gXCIuL2FjdGlvbnMvc2V0VW5wbGFuT3V0bGV0XCI7XHJcblxyXG5pbXBvcnQgc2V0U3ByZWFkaW5nQXZhYmlsaXR5IGZyb20gXCIuL2FjdGlvbnMvc2V0U3ByZWFkaW5nQXZhYmlsaXR5XCI7XHJcbmltcG9ydCBzZXRTcHJlYWRpbmdWaXNpYmlsaXR5IGZyb20gXCIuL2FjdGlvbnMvc2V0U3ByZWFkaW5nVmlzaWJpbGl0eVwiO1xyXG5pbXBvcnQgc2V0U3ByZWFkaW5nQ2F0YXRhbiBmcm9tIFwiLi9hY3Rpb25zL3NldFNwcmVhZGluZ0NhdGF0YW5cIjtcclxuaW1wb3J0IHNldFNwcmVhZGluZ0FsYW1hdCBmcm9tIFwiLi9hY3Rpb25zL3NldFNwcmVhZGluZ0FsYW1hdFwiO1xyXG5pbXBvcnQgc2V0U3ByZWFkaW5nTmV3T3V0bGV0IGZyb20gXCIuL2FjdGlvbnMvc2V0U3ByZWFkaW5nTmV3T3V0bGV0XCI7XHJcbmltcG9ydCBzZXRTcHJlYWRpbmdDaGVja0luIGZyb20gXCIuL2FjdGlvbnMvc2V0U3ByZWFkaW5nQ2hlY2tJblwiO1xyXG5pbXBvcnQgc2V0U3ByZWFkaW5nSmVuaXNDaGFubmVsIGZyb20gXCIuL2FjdGlvbnMvc2V0U3ByZWFkaW5nSmVuaXNDaGFubmVsXCI7XHJcbmltcG9ydCBzZXRTcHJlYWRpbmdPdXRsZXQgZnJvbSBcIi4vYWN0aW9ucy9zZXRTcHJlYWRpbmdPdXRsZXRcIjtcclxuXHJcbmltcG9ydCBzZXREZWZhdWx0VmlzaXRQbGFuIGZyb20gXCIuL2FjdGlvbnMvc2V0RGVmYXVsdFZpc2l0UGxhblwiO1xyXG5pbXBvcnQgc2V0RGVmYXVsdFZpc2l0VW5wbGFuIGZyb20gXCIuL2FjdGlvbnMvc2V0RGVmYXVsdFZpc2l0VW5wbGFuXCI7XHJcbmltcG9ydCBzZXREZWZhdWx0VmlzaXRTcHJlYWRpbmcgZnJvbSBcIi4vYWN0aW9ucy9zZXREZWZhdWx0VmlzaXRTcHJlYWRpbmdcIjtcclxuXHJcbmNvbnN0IFN0b3JlcyA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IFN0b3JlID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihcclxuICAgIChwcmV2U3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZXJSZWR1Y2VyOiB1c2VyUmVkdWNlcihwcmV2U3RhdGUudXNlclJlZHVjZXIsIGFjdGlvbiksXHJcbiAgICAgICAgbWVudVJlZHVjZXI6IG1lbnVSZWR1Y2VyKHByZXZTdGF0ZS5tZW51UmVkdWNlciwgYWN0aW9uKSxcclxuICAgICAgICB2aXNpdFBsYW5SZWR1Y2VyOiB2aXNpdFBsYW5SZWR1Y2VyKHByZXZTdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLCBhY3Rpb24pLFxyXG4gICAgICAgIHZpc2l0VW5wbGFuUmVkdWNlcjogdmlzaXRVbnBsYW5SZWR1Y2VyKFxyXG4gICAgICAgICAgcHJldlN0YXRlLnZpc2l0VW5wbGFuUmVkdWNlcixcclxuICAgICAgICAgIGFjdGlvblxyXG4gICAgICAgICksXHJcbiAgICAgICAgdmlzaXRTcHJlYWRpbmdSZWR1Y2VyOiB2aXNpdFNwcmVhZGluZ1JlZHVjZXIoXHJcbiAgICAgICAgICBwcmV2U3RhdGUudmlzaXRTcHJlYWRpbmdSZWR1Y2VyLFxyXG4gICAgICAgICAgYWN0aW9uXHJcbiAgICAgICAgKSxcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHVzZXJSZWR1Y2VyOiBkZWZhdWx0VXNlcixcclxuICAgICAgbWVudVJlZHVjZXI6IGRlZmF1bHRNZW51LFxyXG4gICAgICB2aXNpdFBsYW5SZWR1Y2VyOiBkZWZhdWx0VmlzaXRQbGFuLFxyXG4gICAgICB2aXNpdFVucGxhblJlZHVjZXI6IGRlZmF1bHRWaXNpdFVucGxhbixcclxuICAgICAgdmlzaXRTcHJlYWRpbmdSZWR1Y2VyOiBkZWZhdWx0VmlzaXRTcHJlYWRpbmcsXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgYWN0aW9ucyA9IHVzZU1lbW8oXHJcbiAgICAoKSA9PiAoe1xyXG4gICAgICAuLi51c2VyTG9naW4oZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXRNZW51KGRpc3BhdGNoKSxcclxuICAgICAgLi4ua2VlcFN0YXRlKGRpc3BhdGNoKSxcclxuXHJcbiAgICAgIC4uLnNldFBsYW5WaXNpYmlsaXR5KGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0UGxhbkF2YWJpbGl0eShkaXNwYXRjaCksXHJcbiAgICAgIC4uLnNldFBsYW5DYXRhdGFuKGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0UGxhbkNoZWNrSW4oZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXREZWZhdWx0VmlzaXRQbGFuKGRpc3BhdGNoKSxcclxuXHJcbiAgICAgIC4uLnNldFVucGxhblZpc2liaWxpdHkoZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXRVbnBsYW5BdmFiaWxpdHkoZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXRVbnBsYW5DYXRhdGFuKGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0VW5wbGFuQ2hlY2tJbihkaXNwYXRjaCksXHJcbiAgICAgIC4uLnNldFVucGxhbkplbmlzQ2hhbm5lbChkaXNwYXRjaCksXHJcbiAgICAgIC4uLnNldFVucGxhbk91dGxldChkaXNwYXRjaCksXHJcbiAgICAgIC4uLnNldERlZmF1bHRWaXNpdFVucGxhbihkaXNwYXRjaCksXHJcblxyXG4gICAgICAuLi5zZXRTcHJlYWRpbmdWaXNpYmlsaXR5KGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0U3ByZWFkaW5nQXZhYmlsaXR5KGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0U3ByZWFkaW5nQ2F0YXRhbihkaXNwYXRjaCksXHJcbiAgICAgIC4uLnNldFNwcmVhZGluZ0FsYW1hdChkaXNwYXRjaCksXHJcbiAgICAgIC4uLnNldFNwcmVhZGluZ05ld091dGxldChkaXNwYXRjaCksXHJcbiAgICAgIC4uLnNldFNwcmVhZGluZ0NoZWNrSW4oZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXRTcHJlYWRpbmdKZW5pc0NoYW5uZWwoZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXRTcHJlYWRpbmdPdXRsZXQoZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXREZWZhdWx0VmlzaXRTcHJlYWRpbmcoZGlzcGF0Y2gpLFxyXG4gICAgfSksXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3RvcmVzLlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBkaXNwYXRjaCwgYWN0aW9ucyB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9TdG9yZXMuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IFN0b3JlcywgU3RvcmUgfTtcclxuIiwiY29uc3QgZGVmYXVsdE1lbnUgPSB7XHJcbiAgbWVudTogW10sXHJcbn07XHJcblxyXG5jb25zdCBtZW51UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIlNFVF9NRU5VXCI6XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibWVudVwiLCBKU09OLnN0cmluZ2lmeShhY3Rpb24ucGF5bG9hZCkpO1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbWVudTogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJLRUVQX1NUQVRFXCI6XHJcbiAgICAgIGNvbnN0IHVzZXJNZW51ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1lbnVcIikpO1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbWVudTogdXNlck1lbnUgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBtZW51UmVkdWNlciwgZGVmYXVsdE1lbnUgfTtcclxuIiwiY29uc3QgZGVmYXVsdFVzZXIgPSB7XHJcbiAgdXNlcjogW10sXHJcbn07XHJcblxyXG5jb25zdCB1c2VyUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIlVTRVJfTE9HSU5cIjpcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KGFjdGlvbi5wYXlsb2FkKSk7XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB1c2VyOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlVTRVJfTE9HT1VUXCI6XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdXNlcjogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJLRUVQX1NUQVRFXCI6XHJcbiAgICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdXNlcjogdXNlckRhdGEgfTtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgdXNlclJlZHVjZXIsIGRlZmF1bHRVc2VyIH07XHJcbiIsImNvbnN0IGRlZmF1bHRWaXNpdFBsYW4gPSB7XHJcbiAgdmlzaWJpbGl0eTogW10sXHJcbiAgYXZhYmlsaXR5OiBbXSxcclxuICBjYXRhdGFuOiBcIlwiLFxyXG4gIGNoZWNrSW46IFwiXCIsXHJcbn07XHJcblxyXG5jb25zdCB2aXNpdFBsYW5SZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiU0VUX1BMQU5fVklTSUJJTElUWVwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdmlzaWJpbGl0eTogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJTRVRfUExBTl9BVkFCSUxJVFlcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGF2YWJpbGl0eTogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJTRVRfUExBTl9DQVRBVEFOXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjYXRhdGFuOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9QTEFOX0NIRUNLX0lOXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjaGVja0luOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9ERUZBVUxUX1ZJU0lUX1BMQU5cIjpcclxuICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdFZpc2l0UGxhbiB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IHZpc2l0UGxhblJlZHVjZXIsIGRlZmF1bHRWaXNpdFBsYW4gfTtcclxuIiwiY29uc3QgZGVmYXVsdFZpc2l0U3ByZWFkaW5nID0ge1xyXG4gIHZpc2liaWxpdHk6IFtdLFxyXG4gIGF2YWJpbGl0eTogW10sXHJcbiAgY2F0YXRhbjogXCJcIixcclxuICBhbGFtYXQ6IFwiXCIsXHJcbiAgbmV3T3V0bGV0OiBcIlwiLFxyXG4gIGNoZWNrSW46IFwiXCIsXHJcbiAgamVuaXNDaGFubmVsOiB7fSxcclxuICBvdXRsZXQ6IHt9LFxyXG59O1xyXG5cclxuY29uc3QgdmlzaXRTcHJlYWRpbmdSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiU0VUX1NQUkVBRElOR19WSVNJQklMSVRZXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB2aXNpYmlsaXR5OiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9TUFJFQURJTkdfQVZBQklMSVRZXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBhdmFiaWxpdHk6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiU0VUX1NQUkVBRElOR19DQVRBVEFOXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjYXRhdGFuOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9TUFJFQURJTkdfQUxBTUFUXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBhbGFtYXQ6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiU0VUX1NQUkVBRElOR19ORVdfT1VUTEVUXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBuZXdPdXRsZXQ6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiU0VUX1NQUkVBRElOR19DSEVDS19JTlwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2hlY2tJbjogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJTRVRfU1BSRUFESU5HX0pFTklTX0NIQU5ORUxcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGplbmlzQ2hhbm5lbDogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJTRVRfU1BSRUFESU5HX09VVExFVFwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgb3V0bGV0OiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9ERUZBVUxUX1ZJU0lUX1NQUkVBRElOR1wiOlxyXG4gICAgICByZXR1cm4geyAuLi5kZWZhdWx0VmlzaXRTcHJlYWRpbmcgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyB2aXNpdFNwcmVhZGluZ1JlZHVjZXIsIGRlZmF1bHRWaXNpdFNwcmVhZGluZyB9O1xyXG4iLCJjb25zdCBkZWZhdWx0VmlzaXRVbnBsYW4gPSB7XHJcbiAgdmlzaWJpbGl0eTogW10sXHJcbiAgYXZhYmlsaXR5OiBbXSxcclxuICBjYXRhdGFuOiBcIlwiLFxyXG4gIGNoZWNrSW46IFwiXCIsXHJcbiAgamVuaXNDaGFubmVsOiB7fSxcclxuICBvdXRsZXQ6IHt9LFxyXG59O1xyXG5cclxuY29uc3QgdmlzaXRVbnBsYW5SZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiU0VUX1VOUExBTl9WSVNJQklMSVRZXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB2aXNpYmlsaXR5OiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9VTlBMQU5fQVZBQklMSVRZXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBhdmFiaWxpdHk6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiU0VUX1VOUExBTl9DQVRBVEFOXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjYXRhdGFuOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9VTlBMQU5fQ0hFQ0tfSU5cIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNoZWNrSW46IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiU0VUX1VOUExBTl9KRU5JU19DSEFOTkVMXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBqZW5pc0NoYW5uZWw6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiU0VUX1VOUExBTl9PVVRMRVRcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG91dGxldDogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJTRVRfREVGQVVMVF9WSVNJVF9VTlBMQU5cIjpcclxuICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdFZpc2l0VW5wbGFuIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgdmlzaXRVbnBsYW5SZWR1Y2VyLCBkZWZhdWx0VmlzaXRVbnBsYW4gfTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibmF2X2NvbnRhaW5lclwiOiBcIkJvdE5hdl9uYXZfY29udGFpbmVyX18xa1FiNVwiLFxuXHRcIm5hdl9ib3hcIjogXCJCb3ROYXZfbmF2X2JveF9fMVNQeVZcIixcblx0XCJuYXZfaW1nXCI6IFwiQm90TmF2X25hdl9pbWdfXzNQVDlVXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJDYXJkX2NvbnRhaW5lcl9fMmV6MWNcIixcblx0XCJzaGFkb3dcIjogXCJDYXJkX3NoYWRvd19fVHE1X3hcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5hdl9jb250YWluZXJcIjogXCJOYXZfbmF2X2NvbnRhaW5lcl9fN1NNZ0tcIixcblx0XCJ0aXRsZVwiOiBcIk5hdl90aXRsZV9fMjFhTExcIixcblx0XCJuYXZfZ3JlZW5cIjogXCJOYXZfbmF2X2dyZWVuX18xX0ItLVwiLFxuXHRcIm5hdl93aGl0ZVwiOiBcIk5hdl9uYXZfd2hpdGVfXzFtbDQtXCIsXG5cdFwid2hpdGVcIjogXCJOYXZfd2hpdGVfXzJsaXFxXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJTcGlubmVyX2NvbnRhaW5lcl9fM042RVlcIixcblx0XCJzcGlubmVyXCI6IFwiU3Bpbm5lcl9zcGlubmVyX18zZ29pelwiLFxuXHRcImJhbGwtc3Bpbi1jbG9ja3dpc2VcIjogXCJTcGlubmVyX2JhbGwtc3Bpbi1jbG9ja3dpc2VfX1lKX0MzXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0YWJsZV9pbmNlbnRpdmVcIjogXCJUYWJsZUxhc3REYXRhSW5jZW50aXZlX3RhYmxlX2luY2VudGl2ZV9fMnlUTUdcIixcblx0XCJ0Ym9keV9pbmNlbnRpdmVcIjogXCJUYWJsZUxhc3REYXRhSW5jZW50aXZlX3Rib2R5X2luY2VudGl2ZV9fM3RnWDFcIixcblx0XCJpbmNlbnRpdmVfdGFibGVfY29udGFpbmVyXCI6IFwiVGFibGVMYXN0RGF0YUluY2VudGl2ZV9pbmNlbnRpdmVfdGFibGVfY29udGFpbmVyX18zQk9WcFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid3JhcHBlclwiOiBcIlJld2FyZF93cmFwcGVyX181UWpnZlwiLFxuXHRcIm1haW5cIjogXCJSZXdhcmRfbWFpbl9fMmVmcUhcIixcblx0XCJyZXdhcmRfZ3JpZFwiOiBcIlJld2FyZF9yZXdhcmRfZ3JpZF9fM0pWWmpcIixcblx0XCJyZXdhcmRfZ3JpZDJcIjogXCJSZXdhcmRfcmV3YXJkX2dyaWQyX18xaXZ4RVwiLFxuXHRcImFkZF9yZXdhcmRcIjogXCJSZXdhcmRfYWRkX3Jld2FyZF9fbHRBZTZcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jaGFydGpzLTJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=