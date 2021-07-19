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
/*! exports provided: getMenu, getAuth, onLogin, getProductSearch, getSearchJenisChannel, getProductAvgSales, getSearchOutlet, getBrand, getProductByJenisChannel, getKontenWorkVisit, getPlanList, getPlanId, getPosm, getPlanHistory, submitVisitPlan, submitVisitPlanDposm, getInvoiceDataPosm, getInvoiceData, getPlanMonthlyHistory, viewFile, submitVisitUnplan, submitVisitUnplanDposm, getInvoiceDataUnplan, getInvoiceDataPosmUnplan, getUnplanMonthlyHistory, viewFileUnplan, getUnplanNearMe, submitVisitSpreading, submitVisitSpreadingDposm, getInvoiceDataSpreading, getInvoiceDataPosmSpreading, viewFileSpreading, getSpreadingMonthlyHistory, getAllWorkVisit, getWorkVisitMonthlyHistory, getWorkVisitRating, submitWorkVisit, getDayProgram, getDayPromo, getMonthProgram, getMonthPromo, getAllAnnouncement, updateReadAnnouncement, getSalesTargetSMR, getSalesTarget75SMR, getProduktifitas, getFrontliner, getNoo, getBenefitCodeCabang, getWorkDay */
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
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./constant.js");

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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_USER"] + `/User/GetMenu?username=${userData.email}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_USER"] + `/User/GetAuthorize?username=${userData.username}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_USER"] + `/User/Login?username=${values.username}&&password=${values.password}`, {
    method: "POST",
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_MASTER"] + `/MasterDataLokal/GetAllDisplayProgram`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_MASTER"] + `/MasterData/GetProdukLike/${search}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_MASTER"] + `/MasterDataLokal/GetProdukJenisChannelBy/${jenisChannelId}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_MASTER"] + `/MasterData/GetAvgSales30DaysByOutletAndProduct?productCode=${productCode}&outletCode=${outletCode}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_MASTER"] + `/MasterDataLokal/GetJenisChannelBy?teks=${search}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_MASTER"] + `/MasterDataLokal/GetOutletBy?teks=${search}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_MASTER"] + `/MasterDataLokal/GetAllBrand`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_MASTER"] + `/MasterDataLokal/GetAllKontenWorkVisit`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_MASTER"] + `/MasterDataLokal/GetSalesTargetBy/${year}/${month}?usernameSmr=${userData.username}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_MASTER"] + `/MasterDataLokal/GetSalesTarget75PersenBy/${year}/${month}?usernameSmr=${userData.username}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_VISIT_PLAN"] + `/ActivityVisitPlan/GetActivityVisitPlanBy?username=${userData.username}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_VISIT_PLAN"] + `/MasterVisitPlan/GetMasterVisitPlanBy?parameter=${year}-${month}-${date}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(planList => {
    if (planList.length != 0) {
      return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_VISIT_PLAN"] + `/MasterVisitPlan/GetMasterVisitPlanById/${id}`, {
        headers: {
          apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_VISIT_PLAN"] + `/ActivityVisitPlan/GetActivityVisitPlanBy?username=${userData.username}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_VISIT_PLAN"] + "/ActivityVisitPlan/SaveAllActivityVisitPlan", {
    method: "POST",
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"],
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_VISIT_PLAN"] + "/ActivityVisitPlanDPOSM/SaveActivityVisitPlanDposm", {
    method: "POST",
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"],
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dposm)
  }).then(response => {
    return response.json();
  }).then(data => {
    // console.log("balikan psom", data);
    formdata.append("file", file);
    return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_VISIT_PLAN"] + `/ActivityVisitPlanDPOSM/InsertFileBy?id=${data.id}&namaFile=${data.namaFile}`, {
      method: "POST",
      headers: {
        apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_VISIT_PLAN"] + `/ActivityVisitPlan/GetProdukSuratPesanan/${visitPlanId}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_VISIT_PLAN"] + `/ActivityVisitPlanDPOSM/GetActivityVisitPlanDPosmBy/${visitPlanId}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_VISIT_PLAN"] + `/ActivityVisitPlanDPOSM/ViewFile/${id}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_VISIT_PLAN"] + `/ActivityVisitPlan/GetHistoryActivityVisitPlanBy?username=${userData.username}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_VISIT_UNPLAN"] + `/SakamorActivityVisitUnPlan/SaveAllActivityVisitUnPlan`, {
    method: "POST",
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"],
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_VISIT_UNPLAN"] + `/SakamorActivityVisitUnPlanDPOSM/SaveActivityVisitUnPlanDposm`, {
    method: "POST",
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"],
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dposm)
  }).then(response => {
    return response.json();
  }).then(data => {
    console.log("balikan psom", data);
    formdata.append("file", file);
    return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_VISIT_UNPLAN"] + `/SakamorActivityVisitUnPlanDPOSM/InsertFileBy?id=${data.id}&namaFile=${data.namaFile}`, {
      method: "POST",
      headers: {
        apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_VISIT_UNPLAN"] + `/SakamorActivityVisitUnPlan/GetProdukSuratPesanan/${visitPlanId}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_VISIT_UNPLAN"] + `/SakamorActivityVisitUnPlanDPOSM/GetActivityVisitUnPlanDPosmBy/${visitUnplanId}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_VISIT_UNPLAN"] + `/SakamorActivityVisitUnPlanDPOSM/ViewFile/${id}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_VISIT_UNPLAN"] + `/SakamorActivityVisitUnPlan/GetHistoryActivityVisitUnPlanBy?username=${userData.username}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_MASTER"] + `/MasterData/GetOutletNearMe/-6.123456/12.987654`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_VISIT_SPREADING"] + `/ActivitySpreading/SaveAllActivitySpreading`, {
    method: "POST",
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"],
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_VISIT_SPREADING"] + `/ActivitySpreadingDPOSM/SaveActivitySpreadingDposm`, {
    method: "POST",
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"],
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dposm)
  }).then(response => {
    return response.json();
  }).then(data => {
    console.log("balikan psom", data);
    formdata.append("file", file);
    return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_VISIT_SPREADING"] + `/ActivitySpreadingDPOSM/InsertFileBy?id=${data.id}&namaFile=${data.namaFile}`, {
      method: "POST",
      headers: {
        apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_VISIT_SPREADING"] + `/ActivitySpreading/GetProdukSuratPesanan/${visitPlanId}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_VISIT_SPREADING"] + `/ActivitySpreadingDPOSM/GetActivityVisitUnPlanDPosmBy/${visitUnplanId}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_VISIT_SPREADING"] + `/ActivitySpreadingDPOSM/ViewFile/${id}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_VISIT_SPREADING"] + `/ActivitySpreading/GetHistoryActivitySpreadingBy?username=${userData.username}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_WORK_VISIT"] + `/ActivityWorkVisit/GetActivityWorkVisitBy?username=${userData.username}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_WORK_VISIT"] + `/ActivityWorkVisit/GetHistoryActivityWorkVisitBy?username=${userData.username}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_WORK_VISIT"] + `/ActivityWorkVisitRating/GetActivityWorkVisitRatingBy/${id}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_WORK_VISIT"] + "/ActivityWorkVisit/SaveAllActivityWorkVisit", {
    method: "POST",
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"],
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_CALENDAR_PROMO"] + `/SakamorInfoPromo/GetInfoPromoByDate/${date}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_CALENDAR_PROGRAM"] + `/SakamorKalenderProgram/GetKalenderProgramByDate/${date}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_CALENDAR_PROMO"] + `/SakamorInfoPromo/GetInfoPromoByMonthYear/${date}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_CALENDAR_PROGRAM"] + `/SakamorKalenderProgram/GetKalenderProgramByMonthYear/${date}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_ANNOUNCEMENT"] + `/SakamorAnnouncement/GetAnnouncementByUser?username=${userData.username}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"],
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_INCENTIVE"] + `/SakamorIncentive/GetProduktifitasByUserPeriode/${month}/${year}?username=${userData.username}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_INCENTIVE"] + `/Frontliner/GetByUserPeriode/${month}/${year}?username=${userData.username}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_INCENTIVE"] + `/TargetNOO/GetSelsNOOByUserPeriode/${month}/${year}?username=${userData.username}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_INCENTIVE"] + `/SakamorIncentive/GetWorkingDay/01`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_0__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_0__["API_BENEFIT"] + `/Benefits/GetBenefitsByKodeCabang/04`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_0__["TOKEN"]
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
/* harmony import */ var _webPush__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../webPush */ "./webPush.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helper */ "./helper.js");

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
  }, []); // useEffect(() => {
  //   setToken();
  //   async function setToken() {
  //     try {
  //       const token = await firebaseCloudMessaging.init();
  //       if (token) {
  //         getMessage();
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   function getMessage() {
  //     const messaging = firebase.messaging();
  //     console.log({ messaging });
  //     messaging.onMessage((message) => {
  //       // localStorage.setItem("notif", true);
  //     });
  //   }
  // });

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_store__WEBPACK_IMPORTED_MODULE_3__["Store"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
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

/***/ "./webPush.js":
/*!********************!*\
  !*** ./webPush.js ***!
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

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVyLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9rZWVwU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZXREZWZhdWx0VmlzaXRQbGFuLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0RGVmYXVsdFZpc2l0U3ByZWFkaW5nLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0RGVmYXVsdFZpc2l0VW5wbGFuLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0TWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFBsYW5BdmFiaWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZXRQbGFuQ2F0YXRhbi5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFBsYW5DaGVja0luLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0UGxhblZpc2liaWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZXRTcHJlYWRpbmdBbGFtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZXRTcHJlYWRpbmdBdmFiaWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZXRTcHJlYWRpbmdDYXRhdGFuLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0U3ByZWFkaW5nQ2hlY2tJbi5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFNwcmVhZGluZ0plbmlzQ2hhbm5lbC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFNwcmVhZGluZ05ld091dGxldC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFNwcmVhZGluZ091dGxldC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFNwcmVhZGluZ1Zpc2liaWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZXRVbnBsYW5BdmFiaWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZXRVbnBsYW5DYXRhdGFuLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0VW5wbGFuQ2hlY2tJbi5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFVucGxhbkplbmlzQ2hhbm5lbC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFVucGxhbk91dGxldC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFVucGxhblZpc2liaWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy91c2VyTG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3JlZHVjZXJzL3Zpc2l0UGxhbi5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy92aXNpdFNwcmVhZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy92aXNpdFVucGxhbi5qcyIsIndlYnBhY2s6Ly8vLi93ZWJQdXNoLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL21lc3NhZ2luZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJBUElfVVJMIiwiQVBJX1VTRVIiLCJBUElfTUFTVEVSIiwiQVBJX1ZJU0lUX1BMQU4iLCJBUElfVklTSVRfVU5QTEFOIiwiQVBJX1ZJU0lUX1NQUkVBRElORyIsIkFQSV9XT1JLX1ZJU0lUIiwiQVBJX0NBTEVOREFSX1BST0dSQU0iLCJBUElfQ0FMRU5EQVJfUFJPTU8iLCJBUElfQU5OT1VOQ0VNRU5UIiwiQVBJX0lOQ0VOVElWRSIsIkFQSV9CRU5FRklUIiwiVE9LRU4iLCJub3ciLCJEYXRlIiwiZGF0ZSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwiY29tcGFyZSIsImEiLCJiIiwibm9tb3IiLCJnZXRNZW51IiwidXNlckRhdGEiLCJmZXRjaCIsImVtYWlsIiwiaGVhZGVycyIsImFwaUtleSIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZ2V0QXV0aCIsInVzZXJuYW1lIiwib25Mb2dpbiIsInZhbHVlcyIsInBhc3N3b3JkIiwibWV0aG9kIiwic2V0V3JvbmdVc2VyIiwiZ2V0UG9zbSIsImdldFByb2R1Y3RTZWFyY2giLCJzZWFyY2giLCJnZXRQcm9kdWN0QnlKZW5pc0NoYW5uZWwiLCJqZW5pc0NoYW5uZWxJZCIsImdldFByb2R1Y3RBdmdTYWxlcyIsInByb2R1Y3RDb2RlIiwib3V0bGV0Q29kZSIsImdldFNlYXJjaEplbmlzQ2hhbm5lbCIsImdldFNlYXJjaE91dGxldCIsImdldEJyYW5kIiwiZ2V0S29udGVuV29ya1Zpc2l0IiwiZ2V0U2FsZXNUYXJnZXRTTVIiLCJnZXRTYWxlc1RhcmdldDc1U01SIiwiZ2V0UGxhbkxpc3QiLCJyZXMiLCJmaWx0ZXIiLCJ2YWwiLCJpc0NoZWNrT3V0IiwiZ2V0UGxhbklkIiwiaWQiLCJwbGFuTGlzdCIsImxlbmd0aCIsInNhbWVQbGFuIiwiZ2V0UGxhbkhpc3RvcnkiLCJzdWJtaXRWaXNpdFBsYW4iLCJBY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInN1Ym1pdFZpc2l0UGxhbkRwb3NtIiwiZHBvc20iLCJmaWxlIiwiZm9ybWRhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIm5hbWFGaWxlIiwiZ2V0SW52b2ljZURhdGEiLCJ2aXNpdFBsYW5JZCIsImdldEludm9pY2VEYXRhUG9zbSIsInNvcnREYXRhIiwic29ydCIsInZpZXdGaWxlIiwiYmxvYiIsIm91dHNpZGUiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJnZXRQbGFuTW9udGhseUhpc3RvcnkiLCJkYXRlQSIsInRhbmdnYWwiLCJkYXRlQiIsInN1Ym1pdFZpc2l0VW5wbGFuIiwic3VibWl0VmlzaXRVbnBsYW5EcG9zbSIsImdldEludm9pY2VEYXRhVW5wbGFuIiwiZ2V0SW52b2ljZURhdGFQb3NtVW5wbGFuIiwidmlzaXRVbnBsYW5JZCIsInZpZXdGaWxlVW5wbGFuIiwiZ2V0VW5wbGFuTW9udGhseUhpc3RvcnkiLCJnZXRVbnBsYW5OZWFyTWUiLCJzdWJtaXRWaXNpdFNwcmVhZGluZyIsInN1Ym1pdFZpc2l0U3ByZWFkaW5nRHBvc20iLCJnZXRJbnZvaWNlRGF0YVNwcmVhZGluZyIsImdldEludm9pY2VEYXRhUG9zbVNwcmVhZGluZyIsInZpZXdGaWxlU3ByZWFkaW5nIiwiZ2V0U3ByZWFkaW5nTW9udGhseUhpc3RvcnkiLCJnZXRBbGxXb3JrVmlzaXQiLCJnZXRXb3JrVmlzaXRNb250aGx5SGlzdG9yeSIsImdldFdvcmtWaXNpdFJhdGluZyIsInN1Ym1pdFdvcmtWaXNpdCIsImdldERheVByb21vIiwiZ2V0RGF5UHJvZ3JhbSIsImdldE1vbnRoUHJvbW8iLCJnZXRNb250aFByb2dyYW0iLCJnZXRBbGxBbm5vdW5jZW1lbnQiLCJ1cGRhdGVSZWFkQW5ub3VuY2VtZW50IiwiZ2V0UHJvZHVrdGlmaXRhcyIsImdldEZyb250bGluZXIiLCJnZXROb28iLCJnZXRXb3JrRGF5IiwiZ2V0QmVuZWZpdENvZGVDYWJhbmciLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZUVmZmVjdCIsInVzZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiUm91dGVyIiwicHVzaCIsImRpc3BhdGNoIiwia2VlcFN0YXRlIiwidHlwZSIsInBheWxvYWQiLCJlIiwic2V0RGVmYXVsdFZpc2l0UGxhbiIsInNldERlZmF1bHRWaXNpdFNwcmVhZGluZyIsInNldERlZmF1bHRWaXNpdFVucGxhbiIsInNldE1lbnUiLCJzZXRQbGFuQXZhYmlsaXR5Iiwic2V0UGxhbkNhdGF0YW4iLCJzZXRQbGFuQ2hlY2tJbiIsInNldFBsYW5WaXNpYmlsaXR5Iiwic2V0U3ByZWFkaW5nQ2F0YXRhbiIsInNldFNwcmVhZGluZ0F2YWJpbGl0eSIsInNldFNwcmVhZGluZ0FsYW1hdCIsInNldFNwcmVhZGluZ0NoZWNrSW4iLCJzZXRTcHJlYWRpbmdKZW5pc0NoYW5uZWwiLCJzZXRTcHJlYWRpbmdOZXdPdXRsZXQiLCJzZXRTcHJlYWRpbmdPdXRsZXQiLCJzZXRTcHJlYWRpbmdWaXNpYmlsaXR5Iiwic2V0VW5wbGFuQXZhYmlsaXR5Iiwic2V0VW5wbGFuQ2F0YXRhbiIsInNldFVucGxhbkNoZWNrSW4iLCJzZXRVbnBsYW5KZW5pc0NoYW5uZWwiLCJzZXRVbnBsYW5PdXRsZXQiLCJzZXRVbnBsYW5WaXNpYmlsaXR5IiwidXNlckxvZ2luIiwiU3RvcmVzIiwiY3JlYXRlQ29udGV4dCIsIlN0b3JlIiwiY2hpbGRyZW4iLCJzdGF0ZSIsInVzZVJlZHVjZXIiLCJwcmV2U3RhdGUiLCJhY3Rpb24iLCJ1c2VyUmVkdWNlciIsIm1lbnVSZWR1Y2VyIiwidmlzaXRQbGFuUmVkdWNlciIsInZpc2l0VW5wbGFuUmVkdWNlciIsInZpc2l0U3ByZWFkaW5nUmVkdWNlciIsImRlZmF1bHRVc2VyIiwiZGVmYXVsdE1lbnUiLCJkZWZhdWx0VmlzaXRQbGFuIiwiZGVmYXVsdFZpc2l0VW5wbGFuIiwiZGVmYXVsdFZpc2l0U3ByZWFkaW5nIiwiYWN0aW9ucyIsInVzZU1lbW8iLCJtZW51Iiwic2V0SXRlbSIsInVzZXJNZW51IiwicGFyc2UiLCJjbGVhciIsInZpc2liaWxpdHkiLCJhdmFiaWxpdHkiLCJjYXRhdGFuIiwiY2hlY2tJbiIsImFsYW1hdCIsIm5ld091dGxldCIsImplbmlzQ2hhbm5lbCIsIm91dGxldCIsImZpcmViYXNlQ2xvdWRNZXNzYWdpbmciLCJ0b2tlbklubG9jYWxmb3JhZ2UiLCJ1c2VySW5sb2NhbGZvcmFnZSIsImluaXQiLCJmaXJlYmFzZSIsImFwcHMiLCJpbml0aWFsaXplQXBwIiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVzc2FnaW5nIiwidG9rZW5JbkxvY2FsRm9yYWdlIiwic3RhdHVzIiwiTm90aWZpY2F0aW9uIiwicmVxdWVzdFBlcm1pc3Npb24iLCJmY21fdG9rZW4iLCJnZXRUb2tlbiIsImVycm9yIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFD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QUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsInZhciBBUElfVVJMID0gXCJodHRwczovL20tb25lLmthbGJlLmNvLmlkOjgyNDMvdC9rYWxiZS5jby5pZFwiO1xyXG52YXIgQVBJX1VTRVIgPSBcIi9Vc2VyUHJvZmlsZUV4dGVybmFsL3YxL2FwaVwiO1xyXG52YXIgQVBJX01BU1RFUiA9IFwiL1Nha2Ftb3JNYXN0ZXJEYXRhL3YxL2FwaVwiO1xyXG52YXIgQVBJX1ZJU0lUX1BMQU4gPSBcIi9TYWthbW9yQWN0aXZpdHlWaXNpdFBsYW4vdjEvYXBpXCI7XHJcbnZhciBBUElfVklTSVRfVU5QTEFOID0gXCIvU2FrYW1vckFjdGl2aXR5VmlzaXRVblBsYW4vdjEvYXBpXCI7XHJcbnZhciBBUElfVklTSVRfU1BSRUFESU5HID0gXCIvU2FrYW1vckFjdGl2aXR5U3ByZWFkaW5nL3YxL2FwaVwiO1xyXG52YXIgQVBJX1dPUktfVklTSVQgPSBcIi9TYWthbW9yQWN0aXZpdHlXb3JrVmlzaXQvdjEvYXBpXCI7XHJcbnZhciBBUElfQ0FMRU5EQVJfUFJPR1JBTSA9IFwiL1Nha2Ftb3JLYWxlbmRlclByb2dyYW0vdjEvYXBpXCI7XHJcbnZhciBBUElfQ0FMRU5EQVJfUFJPTU8gPSBcIi9TYWthbW9ySW5mb1Byb21vL3YxL2FwaVwiO1xyXG52YXIgQVBJX0FOTk9VTkNFTUVOVCA9IFwiL1Nha2Ftb3JBbm5vdW5jZW1lbnQvdjEvYXBpXCI7XHJcbnZhciBBUElfSU5DRU5USVZFID0gXCIvU2FrYW1vckluY2VudGl2ZS92MS9hcGlcIjtcclxudmFyIEFQSV9CRU5FRklUID0gXCIvU2FrYW1vckJlbmVmaXRzL3YxL2FwaVwiO1xyXG52YXIgVE9LRU4gPVxyXG4gIFwiZXlKNE5YUWlPaUpaYW10NVdrUlZNMDV0UlRSWmJWWnFUMVJqZUU0eVJUUk5iVlpyVDFkU2FrMVhWbWhaVkdob1dXcGplRTlVWnpKTmVtdDRXVkU5UFNJc0ltdHBaQ0k2SW1kaGRHVjNZWGxmWTJWeWRHbG1hV05oZEdWZllXeHBZWE1pTENKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKU1V6STFOaUo5LmV5SnpkV0lpT2lKdWIySnZiaTVoYm1SeVlVQnJZV3hpWlM1amJ5NXBaQ0lzSW1Gd2NHeHBZMkYwYVc5dUlqcDdJbTkzYm1WeUlqb2libTlpYjI0dVlXNWtjbUZBYTJGc1ltVXVZMjh1YVdRaUxDSjBhV1Z5VVhWdmRHRlVlWEJsSWpwdWRXeHNMQ0owYVdWeUlqb2lWVzVzYVcxcGRHVmtJaXdpYm1GdFpTSTZJbE5oYTJGdGIzSWdNaTR3SWl3aWFXUWlPakU1TENKMWRXbGtJam9pTVRRNVpXVTBObVV0WkRFM05pMDBOV1F4TFdFM05tRXRPVEF6TTJSaE56YzRPVFU0SW4wc0ltbHpjeUk2SW1oMGRIQnpPbHd2WEM5dExXOXVaUzVyWVd4aVpTNWpieTVwWkRvNU5EUXpYQzl2WVhWMGFESmNMM1J2YTJWdUlpd2lkR2xsY2tsdVptOGlPbnNpVlc1c2FXMXBkR1ZrSWpwN0luUnBaWEpSZFc5MFlWUjVjR1VpT2lKeVpYRjFaWE4wUTI5MWJuUWlMQ0puY21Gd2FGRk1UV0Y0UTI5dGNHeGxlR2wwZVNJNk1Dd2laM0poY0doUlRFMWhlRVJsY0hSb0lqb3dMQ0p6ZEc5d1QyNVJkVzkwWVZKbFlXTm9JanAwY25WbExDSnpjR2xyWlVGeWNtVnpkRXhwYldsMElqb3dMQ0p6Y0dsclpVRnljbVZ6ZEZWdWFYUWlPbTUxYkd4OWZTd2lhMlY1ZEhsd1pTSTZJbE5CVGtSQ1QxZ2lMQ0p3WlhKdGFYUjBaV1JTWldabGNtVnlJam9pSWl3aWMzVmljMk55YVdKbFpFRlFTWE1pT2x0N0luTjFZbk5qY21saVpYSlVaVzVoYm5SRWIyMWhhVzRpT2lKcllXeGlaUzVqYnk1cFpDSXNJbTVoYldVaU9pSlRZV3RoYlc5eVFXTjBhWFpwZEhsV2FYTnBkRkJzWVc0aUxDSmpiMjUwWlhoMElqb2lYQzkwWEM5cllXeGlaUzVqYnk1cFpGd3ZVMkZyWVcxdmNrRmpkR2wyYVhSNVZtbHphWFJRYkdGdVhDOTJNU0lzSW5CMVlteHBjMmhsY2lJNkltNXZZbTl1TG1GdVpISmhRR3RoYkdKbExtTnZMbWxrSWl3aWRtVnljMmx2YmlJNkluWXhJaXdpYzNWaWMyTnlhWEIwYVc5dVZHbGxjaUk2SWxWdWJHbHRhWFJsWkNKOUxIc2ljM1ZpYzJOeWFXSmxjbFJsYm1GdWRFUnZiV0ZwYmlJNkltdGhiR0psTG1OdkxtbGtJaXdpYm1GdFpTSTZJbFZ6WlhKUWNtOW1hV3hsUlhoMFpYSnVZV3dpTENKamIyNTBaWGgwSWpvaVhDOTBYQzlyWVd4aVpTNWpieTVwWkZ3dlZYTmxjbEJ5YjJacGJHVkZlSFJsY201aGJGd3ZkakVpTENKd2RXSnNhWE5vWlhJaU9pSnViMkp2Ymk1aGJtUnlZVUJyWVd4aVpTNWpieTVwWkNJc0luWmxjbk5wYjI0aU9pSjJNU0lzSW5OMVluTmpjbWx3ZEdsdmJsUnBaWElpT2lKVmJteHBiV2wwWldRaWZTeDdJbk4xWW5OamNtbGlaWEpVWlc1aGJuUkViMjFoYVc0aU9pSnJZV3hpWlM1amJ5NXBaQ0lzSW01aGJXVWlPaUpUWVd0aGJXOXlUV0Z6ZEdWeVJHRjBZU0lzSW1OdmJuUmxlSFFpT2lKY0wzUmNMMnRoYkdKbExtTnZMbWxrWEM5VFlXdGhiVzl5VFdGemRHVnlSR0YwWVZ3dmRqRWlMQ0p3ZFdKc2FYTm9aWElpT2lKdWIySnZiaTVoYm1SeVlVQnJZV3hpWlM1amJ5NXBaQ0lzSW5abGNuTnBiMjRpT2lKMk1TSXNJbk4xWW5OamNtbHdkR2x2YmxScFpYSWlPaUpWYm14cGJXbDBaV1FpZlN4N0luTjFZbk5qY21saVpYSlVaVzVoYm5SRWIyMWhhVzRpT2lKcllXeGlaUzVqYnk1cFpDSXNJbTVoYldVaU9pSlRZV3RoYlc5eVFXTjBhWFpwZEhsVGNISmxZV1JwYm1jaUxDSmpiMjUwWlhoMElqb2lYQzkwWEM5cllXeGlaUzVqYnk1cFpGd3ZVMkZyWVcxdmNrRmpkR2wyYVhSNVUzQnlaV0ZrYVc1blhDOTJNU0lzSW5CMVlteHBjMmhsY2lJNkltNXZZbTl1TG1GdVpISmhRR3RoYkdKbExtTnZMbWxrSWl3aWRtVnljMmx2YmlJNkluWXhJaXdpYzNWaWMyTnlhWEIwYVc5dVZHbGxjaUk2SWxWdWJHbHRhWFJsWkNKOUxIc2ljM1ZpYzJOeWFXSmxjbFJsYm1GdWRFUnZiV0ZwYmlJNkltdGhiR0psTG1OdkxtbGtJaXdpYm1GdFpTSTZJbE5oYTJGdGIzSkJZM1JwZG1sMGVWWnBjMmwwVlc1UWJHRnVJaXdpWTI5dWRHVjRkQ0k2SWx3dmRGd3ZhMkZzWW1VdVkyOHVhV1JjTDFOaGEyRnRiM0pCWTNScGRtbDBlVlpwYzJsMFZXNVFiR0Z1WEM5Mk1TSXNJbkIxWW14cGMyaGxjaUk2SW01dlltOXVMbUZ1WkhKaFFHdGhiR0psTG1OdkxtbGtJaXdpZG1WeWMybHZiaUk2SW5ZeElpd2ljM1ZpYzJOeWFYQjBhVzl1VkdsbGNpSTZJbFZ1YkdsdGFYUmxaQ0o5TEhzaWMzVmljMk55YVdKbGNsUmxibUZ1ZEVSdmJXRnBiaUk2SW10aGJHSmxMbU52TG1sa0lpd2libUZ0WlNJNklsTmhhMkZ0YjNKQlkzUnBkbWwwZVZkdmNtdFdhWE5wZENJc0ltTnZiblJsZUhRaU9pSmNMM1JjTDJ0aGJHSmxMbU52TG1sa1hDOVRZV3RoYlc5eVFXTjBhWFpwZEhsWGIzSnJWbWx6YVhSY0wzWXhJaXdpY0hWaWJHbHphR1Z5SWpvaWJtOWliMjR1WVc1a2NtRkFhMkZzWW1VdVkyOHVhV1FpTENKMlpYSnphVzl1SWpvaWRqRWlMQ0p6ZFdKelkzSnBjSFJwYjI1VWFXVnlJam9pVlc1c2FXMXBkR1ZrSW4wc2V5SnpkV0p6WTNKcFltVnlWR1Z1WVc1MFJHOXRZV2x1SWpvaWEyRnNZbVV1WTI4dWFXUWlMQ0p1WVcxbElqb2lVMkZyWVcxdmNrdGhiR1Z1WkdWeVVISnZaM0poYlNJc0ltTnZiblJsZUhRaU9pSmNMM1JjTDJ0aGJHSmxMbU52TG1sa1hDOVRZV3RoYlc5eVMyRnNaVzVrWlhKUWNtOW5jbUZ0WEM5Mk1TSXNJbkIxWW14cGMyaGxjaUk2SW01dlltOXVMbUZ1WkhKaFFHdGhiR0psTG1OdkxtbGtJaXdpZG1WeWMybHZiaUk2SW5ZeElpd2ljM1ZpYzJOeWFYQjBhVzl1VkdsbGNpSTZJbFZ1YkdsdGFYUmxaQ0o5TEhzaWMzVmljMk55YVdKbGNsUmxibUZ1ZEVSdmJXRnBiaUk2SW10aGJHSmxMbU52TG1sa0lpd2libUZ0WlNJNklsTmhhMkZ0YjNKSmJtWnZVSEp2Ylc4aUxDSmpiMjUwWlhoMElqb2lYQzkwWEM5cllXeGlaUzVqYnk1cFpGd3ZVMkZyWVcxdmNrbHVabTlRY205dGIxd3ZkakVpTENKd2RXSnNhWE5vWlhJaU9pSnViMkp2Ymk1aGJtUnlZVUJyWVd4aVpTNWpieTVwWkNJc0luWmxjbk5wYjI0aU9pSjJNU0lzSW5OMVluTmpjbWx3ZEdsdmJsUnBaWElpT2lKVmJteHBiV2wwWldRaWZTeDdJbk4xWW5OamNtbGlaWEpVWlc1aGJuUkViMjFoYVc0aU9pSnJZV3hpWlM1amJ5NXBaQ0lzSW01aGJXVWlPaUpUWVd0aGJXOXlRVzV1YjNWdVkyVnRaVzUwSWl3aVkyOXVkR1Y0ZENJNklsd3ZkRnd2YTJGc1ltVXVZMjh1YVdSY0wxTmhhMkZ0YjNKQmJtNXZkVzVqWlcxbGJuUmNMM1l4SWl3aWNIVmliR2x6YUdWeUlqb2libTlpYjI0dVlXNWtjbUZBYTJGc1ltVXVZMjh1YVdRaUxDSjJaWEp6YVc5dUlqb2lkakVpTENKemRXSnpZM0pwY0hScGIyNVVhV1Z5SWpvaVZXNXNhVzFwZEdWa0luMHNleUp6ZFdKelkzSnBZbVZ5VkdWdVlXNTBSRzl0WVdsdUlqb2lhMkZzWW1VdVkyOHVhV1FpTENKdVlXMWxJam9pUVhWMGFHOXlhWHBoZEdsdmJrRlFTU0lzSW1OdmJuUmxlSFFpT2lKY0wzUmNMMnRoYkdKbExtTnZMbWxrWEM5QmRYUm9iM0pwZW1GMGFXOXVRVkJKWEM5Mk1TSXNJbkIxWW14cGMyaGxjaUk2SW0xMWFHRnRiV0ZrTG1ScFlXNXBRR3RoYkdKbExtTnZMbWxrSWl3aWRtVnljMmx2YmlJNkluWXhJaXdpYzNWaWMyTnlhWEIwYVc5dVZHbGxjaUk2SWxWdWJHbHRhWFJsWkNKOUxIc2ljM1ZpYzJOeWFXSmxjbFJsYm1GdWRFUnZiV0ZwYmlJNkltdGhiR0psTG1OdkxtbGtJaXdpYm1GdFpTSTZJbEp2YkdVaUxDSmpiMjUwWlhoMElqb2lYQzkwWEM5cllXeGlaUzVqYnk1cFpGd3ZVbTlzWlZ3dmRqRWlMQ0p3ZFdKc2FYTm9aWElpT2lKdGRXaGhiVzFoWkM1b2FXUmhlV0YwZFd4c01VQnJZV3hpWlM1amJ5NXBaQ0lzSW5abGNuTnBiMjRpT2lKMk1TSXNJbk4xWW5OamNtbHdkR2x2YmxScFpYSWlPaUpWYm14cGJXbDBaV1FpZlN4N0luTjFZbk5qY21saVpYSlVaVzVoYm5SRWIyMWhhVzRpT2lKcllXeGlaUzVqYnk1cFpDSXNJbTVoYldVaU9pSk5iMlIxYkdWQlVFa2lMQ0pqYjI1MFpYaDBJam9pWEM5MFhDOXJZV3hpWlM1amJ5NXBaRnd2VFc5a2RXeGxRVkJKWEM5Mk1TSXNJbkIxWW14cGMyaGxjaUk2SW0xMWFHRnRiV0ZrTG1ScFlXNXBRR3RoYkdKbExtTnZMbWxrSWl3aWRtVnljMmx2YmlJNkluWXhJaXdpYzNWaWMyTnlhWEIwYVc5dVZHbGxjaUk2SWxWdWJHbHRhWFJsWkNKOUxIc2ljM1ZpYzJOeWFXSmxjbFJsYm1GdWRFUnZiV0ZwYmlJNkltdGhiR0psTG1OdkxtbGtJaXdpYm1GdFpTSTZJbFZ6WlhKUWNtOW1hV3hsUVZCSklpd2lZMjl1ZEdWNGRDSTZJbHd2ZEZ3dmEyRnNZbVV1WTI4dWFXUmNMMVZ6WlhKUWNtOW1hV3hsUVZCSlhDOTJNU0lzSW5CMVlteHBjMmhsY2lJNkltMTFhR0Z0YldGa0xtUnBZVzVwUUd0aGJHSmxMbU52TG1sa0lpd2lkbVZ5YzJsdmJpSTZJbll4SWl3aWMzVmljMk55YVhCMGFXOXVWR2xsY2lJNklsVnViR2x0YVhSbFpDSjlMSHNpYzNWaWMyTnlhV0psY2xSbGJtRnVkRVJ2YldGcGJpSTZJbXRoYkdKbExtTnZMbWxrSWl3aWJtRnRaU0k2SWxOaGEyRnRiM0pKYm1ObGJuUnBkbVVpTENKamIyNTBaWGgwSWpvaVhDOTBYQzlyWVd4aVpTNWpieTVwWkZ3dlUyRnJZVzF2Y2tsdVkyVnVkR2wyWlZ3dmRqRWlMQ0p3ZFdKc2FYTm9aWElpT2lKdWIySnZiaTVoYm1SeVlVQnJZV3hpWlM1amJ5NXBaQ0lzSW5abGNuTnBiMjRpT2lKMk1TSXNJbk4xWW5OamNtbHdkR2x2YmxScFpYSWlPaUpWYm14cGJXbDBaV1FpZlN4N0luTjFZbk5qY21saVpYSlVaVzVoYm5SRWIyMWhhVzRpT2lKcllXeGlaUzVqYnk1cFpDSXNJbTVoYldVaU9pSlRZV3RoYlc5eVFtVnVaV1pwZEhNaUxDSmpiMjUwWlhoMElqb2lYQzkwWEM5cllXeGlaUzVqYnk1cFpGd3ZVMkZyWVcxdmNrSmxibVZtYVhSelhDOTJNU0lzSW5CMVlteHBjMmhsY2lJNkltNXZZbTl1TG1GdVpISmhRR3RoYkdKbExtTnZMbWxrSWl3aWRtVnljMmx2YmlJNkluWXhJaXdpYzNWaWMyTnlhWEIwYVc5dVZHbGxjaUk2SWxWdWJHbHRhWFJsWkNKOUxIc2ljM1ZpYzJOeWFXSmxjbFJsYm1GdWRFUnZiV0ZwYmlJNkltdGhiR0psTG1OdkxtbGtJaXdpYm1GdFpTSTZJa1JoZVU5bVppSXNJbU52Ym5SbGVIUWlPaUpjTDNSY0wydGhiR0psTG1OdkxtbGtYQzlFWVhsUFptWmNMM1l4SWl3aWNIVmliR2x6YUdWeUlqb2liWFZvWVcxdFlXUXVhR2xrWVhsaGRIVnNiREZBYTJGc1ltVXVZMjh1YVdRaUxDSjJaWEp6YVc5dUlqb2lkakVpTENKemRXSnpZM0pwY0hScGIyNVVhV1Z5SWpvaVZXNXNhVzFwZEdWa0luMWRMQ0p3WlhKdGFYUjBaV1JKVUNJNklpSXNJbWxoZENJNk1UWXlOalF4TVRJM055d2lhblJwSWpvaU9XUXlPR1V5WldFdFlUQTJaQzAwWkdNeExUZ3pPR0l0TmpRd01qVTFaVE0yTkdabUluMD0uY3R5OG0yU2hIWUVvdm5UVThmOHJXeHRLbW16YVoyOU1uOFFSSEpKT3RzNks4UEdNbHd1cHR5NEE1X1BaN20zbV9rcENUTUdSZVoyRjI3MUJpZXdPUF9lS0VwaWthSTVyRTdoZUtkUUt3cGF2dk0tZ1VCRUg4WVdhMDZIX0tfbzNFM1FfR2FOc1d4eFZoU0lDWGtPNTN4TFN0UldCaE5QcXhHRjhnYURNWWVQeHJfa19BWmZiaEF2Y0FMMGxXQkhiYW1BcHlEb3RCTTY4TTdfRy1COHV3TURXLUVlNGtmWjBnYkJMSDRFcjJHVjFLWEJmNUhDanhBT2dvRWZhR3NORmJRODhHcUw0dzBocWt4cFU3U01Ga2dpc1F3VGtub0ZuVHlONXhCVFUzREFGVFZiaHV3U3IxemJrZ1pnampxNEpqSC1reWh3VUNrMHktYnMyZDhpWlRnPT1cIjtcclxuXHJcbmV4cG9ydCB7XHJcbiAgVE9LRU4sXHJcbiAgQVBJX1VSTCxcclxuICBBUElfVVNFUixcclxuICBBUElfTUFTVEVSLFxyXG4gIEFQSV9WSVNJVF9QTEFOLFxyXG4gIEFQSV9WSVNJVF9VTlBMQU4sXHJcbiAgQVBJX1ZJU0lUX1NQUkVBRElORyxcclxuICBBUElfV09SS19WSVNJVCxcclxuICBBUElfQ0FMRU5EQVJfUFJPR1JBTSxcclxuICBBUElfQ0FMRU5EQVJfUFJPTU8sXHJcbiAgQVBJX0FOTk9VTkNFTUVOVCxcclxuICBBUElfSU5DRU5USVZFLFxyXG4gIEFQSV9CRU5FRklULFxyXG59O1xyXG4iLCJpbXBvcnQge1xyXG4gIFRPS0VOLFxyXG4gIEFQSV9VUkwsXHJcbiAgQVBJX1VTRVIsXHJcbiAgQVBJX01BU1RFUixcclxuICBBUElfVklTSVRfUExBTixcclxuICBBUElfVklTSVRfVU5QTEFOLFxyXG4gIEFQSV9WSVNJVF9TUFJFQURJTkcsXHJcbiAgQVBJX1dPUktfVklTSVQsXHJcbiAgQVBJX0NBTEVOREFSX1BST01PLFxyXG4gIEFQSV9DQUxFTkRBUl9QUk9HUkFNLFxyXG4gIEFQSV9BTk5PVU5DRU1FTlQsXHJcbiAgQVBJX0lOQ0VOVElWRSxcclxuICBBUElfQkVORUZJVCxcclxufSBmcm9tIFwiLi9jb25zdGFudFwiO1xyXG5cclxudmFyIG5vdyA9IG5ldyBEYXRlKCk7XHJcbnZhciBkYXRlID0gbm93LmdldERhdGUoKTtcclxudmFyIG1vbnRoID0gbm93LmdldE1vbnRoKCkgKyAxO1xyXG52YXIgeWVhciA9IG5vdy5nZXRGdWxsWWVhcigpO1xyXG5cclxuZnVuY3Rpb24gY29tcGFyZShhLCBiKSB7XHJcbiAgaWYgKGEubm9tb3IgPCBiLm5vbW9yKSB7XHJcbiAgICByZXR1cm4gLTE7XHJcbiAgfVxyXG4gIGlmIChhLm5vbW9yID4gYi5ub21vcikge1xyXG4gICAgcmV0dXJuIDE7XHJcbiAgfVxyXG4gIHJldHVybiAwO1xyXG59XHJcblxyXG4vLyBVU0VSID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5jb25zdCBnZXRNZW51ID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArIEFQSV9VU0VSICsgYC9Vc2VyL0dldE1lbnU/dXNlcm5hbWU9JHt1c2VyRGF0YS5lbWFpbH1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRBdXRoID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArIEFQSV9VU0VSICsgYC9Vc2VyL0dldEF1dGhvcml6ZT91c2VybmFtZT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IG9uTG9naW4gPSAodmFsdWVzKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9VU0VSICtcclxuICAgICAgYC9Vc2VyL0xvZ2luP3VzZXJuYW1lPSR7dmFsdWVzLnVzZXJuYW1lfSYmcGFzc3dvcmQ9JHt2YWx1ZXMucGFzc3dvcmR9YCxcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgc2V0V3JvbmdVc2VyKHRydWUpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBNQVNURVIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuY29uc3QgZ2V0UG9zbSA9ICgpID0+IHtcclxuICByZXR1cm4gZmV0Y2goQVBJX1VSTCArIEFQSV9NQVNURVIgKyBgL01hc3RlckRhdGFMb2thbC9HZXRBbGxEaXNwbGF5UHJvZ3JhbWAsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgIH0sXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFByb2R1Y3RTZWFyY2ggPSAoc2VhcmNoKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKEFQSV9VUkwgKyBBUElfTUFTVEVSICsgYC9NYXN0ZXJEYXRhL0dldFByb2R1a0xpa2UvJHtzZWFyY2h9YCwge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgfSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UHJvZHVjdEJ5SmVuaXNDaGFubmVsID0gKGplbmlzQ2hhbm5lbElkKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9NQVNURVIgK1xyXG4gICAgICBgL01hc3RlckRhdGFMb2thbC9HZXRQcm9kdWtKZW5pc0NoYW5uZWxCeS8ke2plbmlzQ2hhbm5lbElkfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFByb2R1Y3RBdmdTYWxlcyA9IChwcm9kdWN0Q29kZSwgb3V0bGV0Q29kZSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfTUFTVEVSICtcclxuICAgICAgYC9NYXN0ZXJEYXRhL0dldEF2Z1NhbGVzMzBEYXlzQnlPdXRsZXRBbmRQcm9kdWN0P3Byb2R1Y3RDb2RlPSR7cHJvZHVjdENvZGV9Jm91dGxldENvZGU9JHtvdXRsZXRDb2RlfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFNlYXJjaEplbmlzQ2hhbm5lbCA9IChzZWFyY2gpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICsgQVBJX01BU1RFUiArIGAvTWFzdGVyRGF0YUxva2FsL0dldEplbmlzQ2hhbm5lbEJ5P3Rla3M9JHtzZWFyY2h9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U2VhcmNoT3V0bGV0ID0gKHNlYXJjaCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgKyBBUElfTUFTVEVSICsgYC9NYXN0ZXJEYXRhTG9rYWwvR2V0T3V0bGV0Qnk/dGVrcz0ke3NlYXJjaH1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRCcmFuZCA9ICgpID0+IHtcclxuICByZXR1cm4gZmV0Y2goQVBJX1VSTCArIEFQSV9NQVNURVIgKyBgL01hc3RlckRhdGFMb2thbC9HZXRBbGxCcmFuZGAsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgIH0sXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldEtvbnRlbldvcmtWaXNpdCA9ICgpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICsgQVBJX01BU1RFUiArIGAvTWFzdGVyRGF0YUxva2FsL0dldEFsbEtvbnRlbldvcmtWaXNpdGAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFNhbGVzVGFyZ2V0U01SID0gKHVzZXJEYXRhLCBtb250aCwgeWVhcikgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfTUFTVEVSICtcclxuICAgICAgYC9NYXN0ZXJEYXRhTG9rYWwvR2V0U2FsZXNUYXJnZXRCeS8ke3llYXJ9LyR7bW9udGh9P3VzZXJuYW1lU21yPSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U2FsZXNUYXJnZXQ3NVNNUiA9ICh1c2VyRGF0YSwgbW9udGgsIHllYXIpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX01BU1RFUiArXHJcbiAgICAgIGAvTWFzdGVyRGF0YUxva2FsL0dldFNhbGVzVGFyZ2V0NzVQZXJzZW5CeS8ke3llYXJ9LyR7bW9udGh9P3VzZXJuYW1lU21yPSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLy8gVklTSVQgUExBTiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5jb25zdCBnZXRQbGFuTGlzdCA9ICh1c2VyRGF0YSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfUExBTiArXHJcbiAgICAgIGAvQWN0aXZpdHlWaXNpdFBsYW4vR2V0QWN0aXZpdHlWaXNpdFBsYW5CeT91c2VybmFtZT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHZhciByZXMgPSBkYXRhLmZpbHRlcigodmFsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHZhbC5pc0NoZWNrT3V0ID09PSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiByZXM7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UGxhbklkID0gKGlkKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9QTEFOICtcclxuICAgICAgYC9NYXN0ZXJWaXNpdFBsYW4vR2V0TWFzdGVyVmlzaXRQbGFuQnk/cGFyYW1ldGVyPSR7eWVhcn0tJHttb250aH0tJHtkYXRlfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChwbGFuTGlzdCkgPT4ge1xyXG4gICAgICBpZiAocGxhbkxpc3QubGVuZ3RoICE9IDApIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goXHJcbiAgICAgICAgICBBUElfVVJMICtcclxuICAgICAgICAgICAgQVBJX1ZJU0lUX1BMQU4gK1xyXG4gICAgICAgICAgICBgL01hc3RlclZpc2l0UGxhbi9HZXRNYXN0ZXJWaXNpdFBsYW5CeUlkLyR7aWR9YCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdmFyIHNhbWVQbGFuID0gcGxhbkxpc3QuZmlsdGVyKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gdmFsLmlkID09PSBkYXRhLmlkO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7IHNhbWVQbGFuLCBkYXRhIH07XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBwbGFuTGlzdDtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBsYW5IaXN0b3J5ID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9QTEFOICtcclxuICAgICAgYC9BY3Rpdml0eVZpc2l0UGxhbi9HZXRBY3Rpdml0eVZpc2l0UGxhbkJ5P3VzZXJuYW1lPSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgdmFyIHJlcyA9IGRhdGEuZmlsdGVyKCh2YWwpID0+IHtcclxuICAgICAgICByZXR1cm4gdmFsLmlzQ2hlY2tPdXQgPT09IHRydWU7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcmVzO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHN1Ym1pdFZpc2l0UGxhbiA9IChkYXRhKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArIEFQSV9WSVNJVF9QTEFOICsgXCIvQWN0aXZpdHlWaXNpdFBsYW4vU2F2ZUFsbEFjdGl2aXR5VmlzaXRQbGFuXCIsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYmFpa2FuIHNhdmVhbGxcIiwgZGF0YSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHN1Ym1pdFZpc2l0UGxhbkRwb3NtID0gKGRwb3NtLCBmaWxlKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coZHBvc20sIGZpbGUpO1xyXG4gIGNvbnN0IGZvcm1kYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9QTEFOICtcclxuICAgICAgXCIvQWN0aXZpdHlWaXNpdFBsYW5EUE9TTS9TYXZlQWN0aXZpdHlWaXNpdFBsYW5EcG9zbVwiLFxyXG4gICAge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkcG9zbSksXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJiYWxpa2FuIHBzb21cIiwgZGF0YSk7XHJcbiAgICAgIGZvcm1kYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XHJcbiAgICAgIHJldHVybiBmZXRjaChcclxuICAgICAgICBBUElfVVJMICtcclxuICAgICAgICAgIEFQSV9WSVNJVF9QTEFOICtcclxuICAgICAgICAgIGAvQWN0aXZpdHlWaXNpdFBsYW5EUE9TTS9JbnNlcnRGaWxlQnk/aWQ9JHtkYXRhLmlkfSZuYW1hRmlsZT0ke2RhdGEubmFtYUZpbGV9YCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IGZvcm1kYXRhLFxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImJhbGlrYW4gaW5zZXJmaWxlXCIsIGRhdGEpO1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRJbnZvaWNlRGF0YSA9ICh2aXNpdFBsYW5JZCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfUExBTiArXHJcbiAgICAgIGAvQWN0aXZpdHlWaXNpdFBsYW4vR2V0UHJvZHVrU3VyYXRQZXNhbmFuLyR7dmlzaXRQbGFuSWR9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0SW52b2ljZURhdGFQb3NtID0gKHZpc2l0UGxhbklkKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9QTEFOICtcclxuICAgICAgYC9BY3Rpdml0eVZpc2l0UGxhbkRQT1NNL0dldEFjdGl2aXR5VmlzaXRQbGFuRFBvc21CeS8ke3Zpc2l0UGxhbklkfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHZhciBzb3J0RGF0YSA9IGRhdGEuc29ydChjb21wYXJlKTtcclxuICAgICAgcmV0dXJuIHNvcnREYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHZpZXdGaWxlID0gKGlkKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArIEFQSV9WSVNJVF9QTEFOICsgYC9BY3Rpdml0eVZpc2l0UGxhbkRQT1NNL1ZpZXdGaWxlLyR7aWR9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5ibG9iKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgdmFyIG91dHNpZGUgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGRhdGEpO1xyXG4gICAgICByZXR1cm4gb3V0c2lkZTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRQbGFuTW9udGhseUhpc3RvcnkgPSAodXNlckRhdGEpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1BMQU4gK1xyXG4gICAgICBgL0FjdGl2aXR5VmlzaXRQbGFuL0dldEhpc3RvcnlBY3Rpdml0eVZpc2l0UGxhbkJ5P3VzZXJuYW1lPSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgZGF0YS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgdmFyIGRhdGVBID0gbmV3IERhdGUoYS50YW5nZ2FsKSxcclxuICAgICAgICAgIGRhdGVCID0gbmV3IERhdGUoYi50YW5nZ2FsKTtcclxuICAgICAgICByZXR1cm4gZGF0ZUIgLSBkYXRlQTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8vIFZJU0lUIFVOUExBTiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuY29uc3Qgc3VibWl0VmlzaXRVbnBsYW4gPSAoZGF0YSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfVU5QTEFOICtcclxuICAgICAgYC9TYWthbW9yQWN0aXZpdHlWaXNpdFVuUGxhbi9TYXZlQWxsQWN0aXZpdHlWaXNpdFVuUGxhbmAsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYmFpa2FuIHNhdmVhbGxcIiwgZGF0YSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHN1Ym1pdFZpc2l0VW5wbGFuRHBvc20gPSAoZHBvc20sIGZpbGUpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhkcG9zbSwgZmlsZSk7XHJcbiAgY29uc3QgZm9ybWRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1VOUExBTiArXHJcbiAgICAgIGAvU2FrYW1vckFjdGl2aXR5VmlzaXRVblBsYW5EUE9TTS9TYXZlQWN0aXZpdHlWaXNpdFVuUGxhbkRwb3NtYCxcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZHBvc20pLFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYmFsaWthbiBwc29tXCIsIGRhdGEpO1xyXG4gICAgICBmb3JtZGF0YS5hcHBlbmQoXCJmaWxlXCIsIGZpbGUpO1xyXG4gICAgICByZXR1cm4gZmV0Y2goXHJcbiAgICAgICAgQVBJX1VSTCArXHJcbiAgICAgICAgICBBUElfVklTSVRfVU5QTEFOICtcclxuICAgICAgICAgIGAvU2FrYW1vckFjdGl2aXR5VmlzaXRVblBsYW5EUE9TTS9JbnNlcnRGaWxlQnk/aWQ9JHtkYXRhLmlkfSZuYW1hRmlsZT0ke2RhdGEubmFtYUZpbGV9YCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IGZvcm1kYXRhLFxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImJhbGlrYW4gaW5zZXJmaWxlXCIsIGRhdGEpO1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRJbnZvaWNlRGF0YVVucGxhbiA9ICh2aXNpdFBsYW5JZCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfVU5QTEFOICtcclxuICAgICAgYC9TYWthbW9yQWN0aXZpdHlWaXNpdFVuUGxhbi9HZXRQcm9kdWtTdXJhdFBlc2FuYW4vJHt2aXNpdFBsYW5JZH1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRJbnZvaWNlRGF0YVBvc21VbnBsYW4gPSAodmlzaXRVbnBsYW5JZCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfVU5QTEFOICtcclxuICAgICAgYC9TYWthbW9yQWN0aXZpdHlWaXNpdFVuUGxhbkRQT1NNL0dldEFjdGl2aXR5VmlzaXRVblBsYW5EUG9zbUJ5LyR7dmlzaXRVbnBsYW5JZH1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICB2YXIgc29ydERhdGEgPSBkYXRhLnNvcnQoY29tcGFyZSk7XHJcbiAgICAgIHJldHVybiBzb3J0RGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCB2aWV3RmlsZVVucGxhbiA9IChpZCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGlkKTtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1VOUExBTiArXHJcbiAgICAgIGAvU2FrYW1vckFjdGl2aXR5VmlzaXRVblBsYW5EUE9TTS9WaWV3RmlsZS8ke2lkfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuYmxvYigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgIHZhciBvdXRzaWRlID0gVVJMLmNyZWF0ZU9iamVjdFVSTChkYXRhKTtcclxuICAgICAgcmV0dXJuIG91dHNpZGU7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0VW5wbGFuTW9udGhseUhpc3RvcnkgPSAodXNlckRhdGEpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1VOUExBTiArXHJcbiAgICAgIGAvU2FrYW1vckFjdGl2aXR5VmlzaXRVblBsYW4vR2V0SGlzdG9yeUFjdGl2aXR5VmlzaXRVblBsYW5CeT91c2VybmFtZT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGRhdGEuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHZhciBkYXRlQSA9IG5ldyBEYXRlKGEudGFuZ2dhbCksXHJcbiAgICAgICAgICBkYXRlQiA9IG5ldyBEYXRlKGIudGFuZ2dhbCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGVCIC0gZGF0ZUE7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRVbnBsYW5OZWFyTWUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArIEFQSV9NQVNURVIgKyBgL01hc3RlckRhdGEvR2V0T3V0bGV0TmVhck1lLy02LjEyMzQ1Ni8xMi45ODc2NTRgLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBTUFJFQURJTkcgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmNvbnN0IHN1Ym1pdFZpc2l0U3ByZWFkaW5nID0gKGRhdGEpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1NQUkVBRElORyArXHJcbiAgICAgIGAvQWN0aXZpdHlTcHJlYWRpbmcvU2F2ZUFsbEFjdGl2aXR5U3ByZWFkaW5nYCxcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJiYWlrYW4gc2F2ZWFsbFwiLCBkYXRhKTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3Qgc3VibWl0VmlzaXRTcHJlYWRpbmdEcG9zbSA9IChkcG9zbSwgZmlsZSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKGRwb3NtLCBmaWxlKTtcclxuICBjb25zdCBmb3JtZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfU1BSRUFESU5HICtcclxuICAgICAgYC9BY3Rpdml0eVNwcmVhZGluZ0RQT1NNL1NhdmVBY3Rpdml0eVNwcmVhZGluZ0Rwb3NtYCxcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZHBvc20pLFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYmFsaWthbiBwc29tXCIsIGRhdGEpO1xyXG4gICAgICBmb3JtZGF0YS5hcHBlbmQoXCJmaWxlXCIsIGZpbGUpO1xyXG4gICAgICByZXR1cm4gZmV0Y2goXHJcbiAgICAgICAgQVBJX1VSTCArXHJcbiAgICAgICAgICBBUElfVklTSVRfU1BSRUFESU5HICtcclxuICAgICAgICAgIGAvQWN0aXZpdHlTcHJlYWRpbmdEUE9TTS9JbnNlcnRGaWxlQnk/aWQ9JHtkYXRhLmlkfSZuYW1hRmlsZT0ke2RhdGEubmFtYUZpbGV9YCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IGZvcm1kYXRhLFxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImJhbGlrYW4gaW5zZXJmaWxlXCIsIGRhdGEpO1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRJbnZvaWNlRGF0YVNwcmVhZGluZyA9ICh2aXNpdFBsYW5JZCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfU1BSRUFESU5HICtcclxuICAgICAgYC9BY3Rpdml0eVNwcmVhZGluZy9HZXRQcm9kdWtTdXJhdFBlc2FuYW4vJHt2aXNpdFBsYW5JZH1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRJbnZvaWNlRGF0YVBvc21TcHJlYWRpbmcgPSAodmlzaXRVbnBsYW5JZCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfU1BSRUFESU5HICtcclxuICAgICAgYC9BY3Rpdml0eVNwcmVhZGluZ0RQT1NNL0dldEFjdGl2aXR5VmlzaXRVblBsYW5EUG9zbUJ5LyR7dmlzaXRVbnBsYW5JZH1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICB2YXIgc29ydERhdGEgPSBkYXRhLnNvcnQoY29tcGFyZSk7XHJcbiAgICAgIHJldHVybiBzb3J0RGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCB2aWV3RmlsZVNwcmVhZGluZyA9IChpZCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgKyBBUElfVklTSVRfU1BSRUFESU5HICsgYC9BY3Rpdml0eVNwcmVhZGluZ0RQT1NNL1ZpZXdGaWxlLyR7aWR9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5ibG9iKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgdmFyIG91dHNpZGUgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGRhdGEpO1xyXG4gICAgICByZXR1cm4gb3V0c2lkZTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRTcHJlYWRpbmdNb250aGx5SGlzdG9yeSA9ICh1c2VyRGF0YSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfU1BSRUFESU5HICtcclxuICAgICAgYC9BY3Rpdml0eVNwcmVhZGluZy9HZXRIaXN0b3J5QWN0aXZpdHlTcHJlYWRpbmdCeT91c2VybmFtZT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGRhdGEuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHZhciBkYXRlQSA9IG5ldyBEYXRlKGEudGFuZ2dhbCksXHJcbiAgICAgICAgICBkYXRlQiA9IG5ldyBEYXRlKGIudGFuZ2dhbCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGVCIC0gZGF0ZUE7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBXT1JLIFZJU0lUID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5jb25zdCBnZXRBbGxXb3JrVmlzaXQgPSAodXNlckRhdGEpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1dPUktfVklTSVQgK1xyXG4gICAgICBgL0FjdGl2aXR5V29ya1Zpc2l0L0dldEFjdGl2aXR5V29ya1Zpc2l0Qnk/dXNlcm5hbWU9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRXb3JrVmlzaXRNb250aGx5SGlzdG9yeSA9ICh1c2VyRGF0YSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfV09SS19WSVNJVCArXHJcbiAgICAgIGAvQWN0aXZpdHlXb3JrVmlzaXQvR2V0SGlzdG9yeUFjdGl2aXR5V29ya1Zpc2l0Qnk/dXNlcm5hbWU9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBkYXRhLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICB2YXIgZGF0ZUEgPSBuZXcgRGF0ZShhLnRhbmdnYWwpLFxyXG4gICAgICAgICAgZGF0ZUIgPSBuZXcgRGF0ZShiLnRhbmdnYWwpO1xyXG4gICAgICAgIHJldHVybiBkYXRlQiAtIGRhdGVBO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5jb25zdCBnZXRXb3JrVmlzaXRSYXRpbmcgPSAoaWQpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1dPUktfVklTSVQgK1xyXG4gICAgICBgL0FjdGl2aXR5V29ya1Zpc2l0UmF0aW5nL0dldEFjdGl2aXR5V29ya1Zpc2l0UmF0aW5nQnkvJHtpZH1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBzdWJtaXRXb3JrVmlzaXQgPSAoZGF0YSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgKyBBUElfV09SS19WSVNJVCArIFwiL0FjdGl2aXR5V29ya1Zpc2l0L1NhdmVBbGxBY3Rpdml0eVdvcmtWaXNpdFwiLFxyXG4gICAge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImJhaWthbiBzYXZlYWxsXCIsIGRhdGEpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBDYWxlbmRhciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuY29uc3QgZ2V0RGF5UHJvbW8gPSAoZGF0ZSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfQ0FMRU5EQVJfUFJPTU8gK1xyXG4gICAgICBgL1Nha2Ftb3JJbmZvUHJvbW8vR2V0SW5mb1Byb21vQnlEYXRlLyR7ZGF0ZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXREYXlQcm9ncmFtID0gKGRhdGUpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX0NBTEVOREFSX1BST0dSQU0gK1xyXG4gICAgICBgL1Nha2Ftb3JLYWxlbmRlclByb2dyYW0vR2V0S2FsZW5kZXJQcm9ncmFtQnlEYXRlLyR7ZGF0ZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRNb250aFByb21vID0gKGRhdGUpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX0NBTEVOREFSX1BST01PICtcclxuICAgICAgYC9TYWthbW9ySW5mb1Byb21vL0dldEluZm9Qcm9tb0J5TW9udGhZZWFyLyR7ZGF0ZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRNb250aFByb2dyYW0gPSAoZGF0ZSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfQ0FMRU5EQVJfUFJPR1JBTSArXHJcbiAgICAgIGAvU2FrYW1vckthbGVuZGVyUHJvZ3JhbS9HZXRLYWxlbmRlclByb2dyYW1CeU1vbnRoWWVhci8ke2RhdGV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLy8gQW5ub3VuY2VtZW50ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5jb25zdCBnZXRBbGxBbm5vdW5jZW1lbnQgPSAodXNlckRhdGEpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX0FOTk9VTkNFTUVOVCArXHJcbiAgICAgIGAvU2FrYW1vckFubm91bmNlbWVudC9HZXRBbm5vdW5jZW1lbnRCeVVzZXI/dXNlcm5hbWU9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVSZWFkQW5ub3VuY2VtZW50ID0gKGlkLCBkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgYGh0dHBzOi8vbS1vbmUua2FsYmUuY28uaWQ6ODI0My90L2thbGJlLmNvLmlkL1Nha2Ftb3JBbm5vdW5jZW1lbnQvdjEvYXBpL1Nha2Ftb3JBbm5vdW5jZW1lbnQvVXBkYXRlQW5ub3VuY2VtZW50U3RhdHVzLyR7aWR9YCxcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8vIElOQ0VOVElWRSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5jb25zdCBnZXRQcm9kdWt0aWZpdGFzID0gKHVzZXJEYXRhLCBtb250aCwgeWVhcikgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfSU5DRU5USVZFICtcclxuICAgICAgYC9TYWthbW9ySW5jZW50aXZlL0dldFByb2R1a3RpZml0YXNCeVVzZXJQZXJpb2RlLyR7bW9udGh9LyR7eWVhcn0/dXNlcm5hbWU9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcbmNvbnN0IGdldEZyb250bGluZXIgPSAodXNlckRhdGEsIG1vbnRoLCB5ZWFyKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9JTkNFTlRJVkUgK1xyXG4gICAgICBgL0Zyb250bGluZXIvR2V0QnlVc2VyUGVyaW9kZS8ke21vbnRofS8ke3llYXJ9P3VzZXJuYW1lPSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0Tm9vID0gKHVzZXJEYXRhLCBtb250aCwgeWVhcikgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfSU5DRU5USVZFICtcclxuICAgICAgYC9UYXJnZXROT08vR2V0U2Vsc05PT0J5VXNlclBlcmlvZGUvJHttb250aH0vJHt5ZWFyfT91c2VybmFtZT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuY29uc3QgZ2V0V29ya0RheSA9ICgpID0+IHtcclxuICByZXR1cm4gZmV0Y2goQVBJX1VSTCArIEFQSV9JTkNFTlRJVkUgKyBgL1Nha2Ftb3JJbmNlbnRpdmUvR2V0V29ya2luZ0RheS8wMWAsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgIH0sXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8vIEJFTkVGSVQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuY29uc3QgZ2V0QmVuZWZpdENvZGVDYWJhbmcgPSAodXNlckRhdGEpID0+IHtcclxuICByZXR1cm4gZmV0Y2goQVBJX1VSTCArIEFQSV9CRU5FRklUICsgYC9CZW5lZml0cy9HZXRCZW5lZml0c0J5S29kZUNhYmFuZy8wNGAsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgIH0sXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgZ2V0TWVudSxcclxuICBnZXRBdXRoLFxyXG4gIG9uTG9naW4sXHJcbiAgZ2V0UHJvZHVjdFNlYXJjaCxcclxuICBnZXRTZWFyY2hKZW5pc0NoYW5uZWwsXHJcbiAgZ2V0UHJvZHVjdEF2Z1NhbGVzLFxyXG4gIGdldFNlYXJjaE91dGxldCxcclxuICBnZXRCcmFuZCxcclxuICBnZXRQcm9kdWN0QnlKZW5pc0NoYW5uZWwsXHJcbiAgZ2V0S29udGVuV29ya1Zpc2l0LFxyXG4gIGdldFBsYW5MaXN0LFxyXG4gIGdldFBsYW5JZCxcclxuICBnZXRQb3NtLFxyXG4gIGdldFBsYW5IaXN0b3J5LFxyXG4gIHN1Ym1pdFZpc2l0UGxhbixcclxuICBzdWJtaXRWaXNpdFBsYW5EcG9zbSxcclxuICBnZXRJbnZvaWNlRGF0YVBvc20sXHJcbiAgZ2V0SW52b2ljZURhdGEsXHJcbiAgZ2V0UGxhbk1vbnRobHlIaXN0b3J5LFxyXG4gIHZpZXdGaWxlLFxyXG4gIHN1Ym1pdFZpc2l0VW5wbGFuLFxyXG4gIHN1Ym1pdFZpc2l0VW5wbGFuRHBvc20sXHJcbiAgZ2V0SW52b2ljZURhdGFVbnBsYW4sXHJcbiAgZ2V0SW52b2ljZURhdGFQb3NtVW5wbGFuLFxyXG4gIGdldFVucGxhbk1vbnRobHlIaXN0b3J5LFxyXG4gIHZpZXdGaWxlVW5wbGFuLFxyXG4gIGdldFVucGxhbk5lYXJNZSxcclxuICBzdWJtaXRWaXNpdFNwcmVhZGluZyxcclxuICBzdWJtaXRWaXNpdFNwcmVhZGluZ0Rwb3NtLFxyXG4gIGdldEludm9pY2VEYXRhU3ByZWFkaW5nLFxyXG4gIGdldEludm9pY2VEYXRhUG9zbVNwcmVhZGluZyxcclxuICB2aWV3RmlsZVNwcmVhZGluZyxcclxuICBnZXRTcHJlYWRpbmdNb250aGx5SGlzdG9yeSxcclxuICBnZXRBbGxXb3JrVmlzaXQsXHJcbiAgZ2V0V29ya1Zpc2l0TW9udGhseUhpc3RvcnksXHJcbiAgZ2V0V29ya1Zpc2l0UmF0aW5nLFxyXG4gIHN1Ym1pdFdvcmtWaXNpdCxcclxuICBnZXREYXlQcm9ncmFtLFxyXG4gIGdldERheVByb21vLFxyXG4gIGdldE1vbnRoUHJvZ3JhbSxcclxuICBnZXRNb250aFByb21vLFxyXG4gIGdldEFsbEFubm91bmNlbWVudCxcclxuICB1cGRhdGVSZWFkQW5ub3VuY2VtZW50LFxyXG4gIGdldFNhbGVzVGFyZ2V0U01SLFxyXG4gIGdldFNhbGVzVGFyZ2V0NzVTTVIsXHJcbiAgZ2V0UHJvZHVrdGlmaXRhcyxcclxuICBnZXRGcm9udGxpbmVyLFxyXG4gIGdldE5vbyxcclxuICBnZXRCZW5lZml0Q29kZUNhYmFuZyxcclxuICBnZXRXb3JrRGF5LFxyXG59O1xyXG4iLCJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGZpcmViYXNlQ2xvdWRNZXNzYWdpbmcgfSBmcm9tIFwiLi4vd2ViUHVzaFwiO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCB7IGdldEFsbEFubm91bmNlbWVudCB9IGZyb20gXCIuLi9oZWxwZXJcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKTtcbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgc2V0VG9rZW4oKTtcbiAgLy8gICBhc3luYyBmdW5jdGlvbiBzZXRUb2tlbigpIHtcbiAgLy8gICAgIHRyeSB7XG4gIC8vICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZmlyZWJhc2VDbG91ZE1lc3NhZ2luZy5pbml0KCk7XG4gIC8vICAgICAgIGlmICh0b2tlbikge1xuICAvLyAgICAgICAgIGdldE1lc3NhZ2UoKTtcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgLy8gICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gICBmdW5jdGlvbiBnZXRNZXNzYWdlKCkge1xuICAvLyAgICAgY29uc3QgbWVzc2FnaW5nID0gZmlyZWJhc2UubWVzc2FnaW5nKCk7XG4gIC8vICAgICBjb25zb2xlLmxvZyh7IG1lc3NhZ2luZyB9KTtcbiAgLy8gICAgIG1lc3NhZ2luZy5vbk1lc3NhZ2UoKG1lc3NhZ2UpID0+IHtcbiAgLy8gICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJub3RpZlwiLCB0cnVlKTtcbiAgLy8gICAgIH0pO1xuICAvLyAgIH1cbiAgLy8gfSk7XG4gIHJldHVybiAoXG4gICAgPFN0b3JlPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvU3RvcmU+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIiwiZXhwb3J0IGRlZmF1bHQgKGRpc3BhdGNoKSA9PiAoe1xyXG4gIGtlZXBTdGF0ZTogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJLRUVQX1NUQVRFXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0RGVmYXVsdFZpc2l0UGxhbjogYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9ERUZBVUxUX1ZJU0lUX1BMQU5cIiB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXREZWZhdWx0VmlzaXRTcHJlYWRpbmc6IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfREVGQVVMVF9WSVNJVF9TUFJFQURJTkdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXREZWZhdWx0VmlzaXRVbnBsYW46IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfREVGQVVMVF9WSVNJVF9VTlBMQU5cIiB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRNZW51OiBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9NRU5VXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0UGxhbkF2YWJpbGl0eTogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfUExBTl9BVkFCSUxJVFlcIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRQbGFuQ2F0YXRhbjogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfUExBTl9DQVRBVEFOXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0UGxhbkNoZWNrSW46IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1BMQU5fQ0hFQ0tfSU5cIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRQbGFuVmlzaWJpbGl0eTogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfUExBTl9WSVNJQklMSVRZXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0U3ByZWFkaW5nQ2F0YXRhbjogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfU1BSRUFESU5HX0NBVEFUQU5cIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRTcHJlYWRpbmdBdmFiaWxpdHk6IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1NQUkVBRElOR19BVkFCSUxJVFlcIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRTcHJlYWRpbmdBbGFtYXQ6IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1NQUkVBRElOR19BTEFNQVRcIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRTcHJlYWRpbmdDaGVja0luOiBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9TUFJFQURJTkdfQ0hFQ0tfSU5cIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRTcHJlYWRpbmdKZW5pc0NoYW5uZWw6IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1NQUkVBRElOR19KRU5JU19DSEFOTkVMXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0U3ByZWFkaW5nTmV3T3V0bGV0OiBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9TUFJFQURJTkdfTkVXX09VVExFVFwiLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNldFNwcmVhZGluZ091dGxldDogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfU1BSRUFESU5HX09VVExFVFwiLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNldFNwcmVhZGluZ1Zpc2liaWxpdHk6IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1NQUkVBRElOR19WSVNJQklMSVRZXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0VW5wbGFuQXZhYmlsaXR5OiBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9VTlBMQU5fQVZBQklMSVRZXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0VW5wbGFuQ2F0YXRhbjogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfVU5QTEFOX0NBVEFUQU5cIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRVbnBsYW5DaGVja0luOiBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9VTlBMQU5fQ0hFQ0tfSU5cIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRVbnBsYW5KZW5pc0NoYW5uZWw6IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1VOUExBTl9KRU5JU19DSEFOTkVMXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0VW5wbGFuT3V0bGV0OiBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9VTlBMQU5fT1VUTEVUXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0VW5wbGFuVmlzaWJpbGl0eTogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfVU5QTEFOX1ZJU0lCSUxJVFlcIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICB1c2VyTG9naW46IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiVVNFUl9MT0dJTlwiLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IHVzZXJSZWR1Y2VyLCBkZWZhdWx0VXNlciB9IGZyb20gXCIuL3JlZHVjZXJzL3VzZXJcIjtcclxuaW1wb3J0IHsgbWVudVJlZHVjZXIsIGRlZmF1bHRNZW51IH0gZnJvbSBcIi4vcmVkdWNlcnMvbWVudVwiO1xyXG5pbXBvcnQgeyB2aXNpdFBsYW5SZWR1Y2VyLCBkZWZhdWx0VmlzaXRQbGFuIH0gZnJvbSBcIi4vcmVkdWNlcnMvdmlzaXRQbGFuXCI7XHJcbmltcG9ydCB7IHZpc2l0VW5wbGFuUmVkdWNlciwgZGVmYXVsdFZpc2l0VW5wbGFuIH0gZnJvbSBcIi4vcmVkdWNlcnMvdmlzaXRVbnBsYW5cIjtcclxuaW1wb3J0IHtcclxuICB2aXNpdFNwcmVhZGluZ1JlZHVjZXIsXHJcbiAgZGVmYXVsdFZpc2l0U3ByZWFkaW5nLFxyXG59IGZyb20gXCIuL3JlZHVjZXJzL3Zpc2l0U3ByZWFkaW5nXCI7XHJcblxyXG5pbXBvcnQgdXNlckxvZ2luIGZyb20gXCIuL2FjdGlvbnMvdXNlckxvZ2luXCI7XHJcbmltcG9ydCBzZXRNZW51IGZyb20gXCIuL2FjdGlvbnMvc2V0TWVudVwiO1xyXG5pbXBvcnQga2VlcFN0YXRlIGZyb20gXCIuL2FjdGlvbnMva2VlcFN0YXRlXCI7XHJcblxyXG5pbXBvcnQgc2V0UGxhblZpc2liaWxpdHkgZnJvbSBcIi4vYWN0aW9ucy9zZXRQbGFuVmlzaWJpbGl0eVwiO1xyXG5pbXBvcnQgc2V0UGxhbkF2YWJpbGl0eSBmcm9tIFwiLi9hY3Rpb25zL3NldFBsYW5BdmFiaWxpdHlcIjtcclxuaW1wb3J0IHNldFBsYW5DYXRhdGFuIGZyb20gXCIuL2FjdGlvbnMvc2V0UGxhbkNhdGF0YW5cIjtcclxuaW1wb3J0IHNldFBsYW5DaGVja0luIGZyb20gXCIuL2FjdGlvbnMvc2V0UGxhbkNoZWNrSW5cIjtcclxuXHJcbmltcG9ydCBzZXRVbnBsYW5BdmFiaWxpdHkgZnJvbSBcIi4vYWN0aW9ucy9zZXRVbnBsYW5BdmFiaWxpdHlcIjtcclxuaW1wb3J0IHNldFVucGxhblZpc2liaWxpdHkgZnJvbSBcIi4vYWN0aW9ucy9zZXRVbnBsYW5WaXNpYmlsaXR5XCI7XHJcbmltcG9ydCBzZXRVbnBsYW5DYXRhdGFuIGZyb20gXCIuL2FjdGlvbnMvc2V0VW5wbGFuQ2F0YXRhblwiO1xyXG5pbXBvcnQgc2V0VW5wbGFuQ2hlY2tJbiBmcm9tIFwiLi9hY3Rpb25zL3NldFVucGxhbkNoZWNrSW5cIjtcclxuaW1wb3J0IHNldFVucGxhbkplbmlzQ2hhbm5lbCBmcm9tIFwiLi9hY3Rpb25zL3NldFVucGxhbkplbmlzQ2hhbm5lbFwiO1xyXG5pbXBvcnQgc2V0VW5wbGFuT3V0bGV0IGZyb20gXCIuL2FjdGlvbnMvc2V0VW5wbGFuT3V0bGV0XCI7XHJcblxyXG5pbXBvcnQgc2V0U3ByZWFkaW5nQXZhYmlsaXR5IGZyb20gXCIuL2FjdGlvbnMvc2V0U3ByZWFkaW5nQXZhYmlsaXR5XCI7XHJcbmltcG9ydCBzZXRTcHJlYWRpbmdWaXNpYmlsaXR5IGZyb20gXCIuL2FjdGlvbnMvc2V0U3ByZWFkaW5nVmlzaWJpbGl0eVwiO1xyXG5pbXBvcnQgc2V0U3ByZWFkaW5nQ2F0YXRhbiBmcm9tIFwiLi9hY3Rpb25zL3NldFNwcmVhZGluZ0NhdGF0YW5cIjtcclxuaW1wb3J0IHNldFNwcmVhZGluZ0FsYW1hdCBmcm9tIFwiLi9hY3Rpb25zL3NldFNwcmVhZGluZ0FsYW1hdFwiO1xyXG5pbXBvcnQgc2V0U3ByZWFkaW5nTmV3T3V0bGV0IGZyb20gXCIuL2FjdGlvbnMvc2V0U3ByZWFkaW5nTmV3T3V0bGV0XCI7XHJcbmltcG9ydCBzZXRTcHJlYWRpbmdDaGVja0luIGZyb20gXCIuL2FjdGlvbnMvc2V0U3ByZWFkaW5nQ2hlY2tJblwiO1xyXG5pbXBvcnQgc2V0U3ByZWFkaW5nSmVuaXNDaGFubmVsIGZyb20gXCIuL2FjdGlvbnMvc2V0U3ByZWFkaW5nSmVuaXNDaGFubmVsXCI7XHJcbmltcG9ydCBzZXRTcHJlYWRpbmdPdXRsZXQgZnJvbSBcIi4vYWN0aW9ucy9zZXRTcHJlYWRpbmdPdXRsZXRcIjtcclxuXHJcbmltcG9ydCBzZXREZWZhdWx0VmlzaXRQbGFuIGZyb20gXCIuL2FjdGlvbnMvc2V0RGVmYXVsdFZpc2l0UGxhblwiO1xyXG5pbXBvcnQgc2V0RGVmYXVsdFZpc2l0VW5wbGFuIGZyb20gXCIuL2FjdGlvbnMvc2V0RGVmYXVsdFZpc2l0VW5wbGFuXCI7XHJcbmltcG9ydCBzZXREZWZhdWx0VmlzaXRTcHJlYWRpbmcgZnJvbSBcIi4vYWN0aW9ucy9zZXREZWZhdWx0VmlzaXRTcHJlYWRpbmdcIjtcclxuXHJcbmNvbnN0IFN0b3JlcyA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IFN0b3JlID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihcclxuICAgIChwcmV2U3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZXJSZWR1Y2VyOiB1c2VyUmVkdWNlcihwcmV2U3RhdGUudXNlclJlZHVjZXIsIGFjdGlvbiksXHJcbiAgICAgICAgbWVudVJlZHVjZXI6IG1lbnVSZWR1Y2VyKHByZXZTdGF0ZS5tZW51UmVkdWNlciwgYWN0aW9uKSxcclxuICAgICAgICB2aXNpdFBsYW5SZWR1Y2VyOiB2aXNpdFBsYW5SZWR1Y2VyKHByZXZTdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLCBhY3Rpb24pLFxyXG4gICAgICAgIHZpc2l0VW5wbGFuUmVkdWNlcjogdmlzaXRVbnBsYW5SZWR1Y2VyKFxyXG4gICAgICAgICAgcHJldlN0YXRlLnZpc2l0VW5wbGFuUmVkdWNlcixcclxuICAgICAgICAgIGFjdGlvblxyXG4gICAgICAgICksXHJcbiAgICAgICAgdmlzaXRTcHJlYWRpbmdSZWR1Y2VyOiB2aXNpdFNwcmVhZGluZ1JlZHVjZXIoXHJcbiAgICAgICAgICBwcmV2U3RhdGUudmlzaXRTcHJlYWRpbmdSZWR1Y2VyLFxyXG4gICAgICAgICAgYWN0aW9uXHJcbiAgICAgICAgKSxcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHVzZXJSZWR1Y2VyOiBkZWZhdWx0VXNlcixcclxuICAgICAgbWVudVJlZHVjZXI6IGRlZmF1bHRNZW51LFxyXG4gICAgICB2aXNpdFBsYW5SZWR1Y2VyOiBkZWZhdWx0VmlzaXRQbGFuLFxyXG4gICAgICB2aXNpdFVucGxhblJlZHVjZXI6IGRlZmF1bHRWaXNpdFVucGxhbixcclxuICAgICAgdmlzaXRTcHJlYWRpbmdSZWR1Y2VyOiBkZWZhdWx0VmlzaXRTcHJlYWRpbmcsXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgYWN0aW9ucyA9IHVzZU1lbW8oXHJcbiAgICAoKSA9PiAoe1xyXG4gICAgICAuLi51c2VyTG9naW4oZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXRNZW51KGRpc3BhdGNoKSxcclxuICAgICAgLi4ua2VlcFN0YXRlKGRpc3BhdGNoKSxcclxuXHJcbiAgICAgIC4uLnNldFBsYW5WaXNpYmlsaXR5KGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0UGxhbkF2YWJpbGl0eShkaXNwYXRjaCksXHJcbiAgICAgIC4uLnNldFBsYW5DYXRhdGFuKGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0UGxhbkNoZWNrSW4oZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXREZWZhdWx0VmlzaXRQbGFuKGRpc3BhdGNoKSxcclxuXHJcbiAgICAgIC4uLnNldFVucGxhblZpc2liaWxpdHkoZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXRVbnBsYW5BdmFiaWxpdHkoZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXRVbnBsYW5DYXRhdGFuKGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0VW5wbGFuQ2hlY2tJbihkaXNwYXRjaCksXHJcbiAgICAgIC4uLnNldFVucGxhbkplbmlzQ2hhbm5lbChkaXNwYXRjaCksXHJcbiAgICAgIC4uLnNldFVucGxhbk91dGxldChkaXNwYXRjaCksXHJcbiAgICAgIC4uLnNldERlZmF1bHRWaXNpdFVucGxhbihkaXNwYXRjaCksXHJcblxyXG4gICAgICAuLi5zZXRTcHJlYWRpbmdWaXNpYmlsaXR5KGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0U3ByZWFkaW5nQXZhYmlsaXR5KGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0U3ByZWFkaW5nQ2F0YXRhbihkaXNwYXRjaCksXHJcbiAgICAgIC4uLnNldFNwcmVhZGluZ0FsYW1hdChkaXNwYXRjaCksXHJcbiAgICAgIC4uLnNldFNwcmVhZGluZ05ld091dGxldChkaXNwYXRjaCksXHJcbiAgICAgIC4uLnNldFNwcmVhZGluZ0NoZWNrSW4oZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXRTcHJlYWRpbmdKZW5pc0NoYW5uZWwoZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXRTcHJlYWRpbmdPdXRsZXQoZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXREZWZhdWx0VmlzaXRTcHJlYWRpbmcoZGlzcGF0Y2gpLFxyXG4gICAgfSksXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3RvcmVzLlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBkaXNwYXRjaCwgYWN0aW9ucyB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9TdG9yZXMuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IFN0b3JlcywgU3RvcmUgfTtcclxuIiwiY29uc3QgZGVmYXVsdE1lbnUgPSB7XHJcbiAgbWVudTogW10sXHJcbn07XHJcblxyXG5jb25zdCBtZW51UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIlNFVF9NRU5VXCI6XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibWVudVwiLCBKU09OLnN0cmluZ2lmeShhY3Rpb24ucGF5bG9hZCkpO1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbWVudTogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJLRUVQX1NUQVRFXCI6XHJcbiAgICAgIGNvbnN0IHVzZXJNZW51ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1lbnVcIikpO1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbWVudTogdXNlck1lbnUgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBtZW51UmVkdWNlciwgZGVmYXVsdE1lbnUgfTtcclxuIiwiY29uc3QgZGVmYXVsdFVzZXIgPSB7XHJcbiAgdXNlcjogW10sXHJcbn07XHJcblxyXG5jb25zdCB1c2VyUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIlVTRVJfTE9HSU5cIjpcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KGFjdGlvbi5wYXlsb2FkKSk7XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB1c2VyOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlVTRVJfTE9HT1VUXCI6XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdXNlcjogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJLRUVQX1NUQVRFXCI6XHJcbiAgICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdXNlcjogdXNlckRhdGEgfTtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgdXNlclJlZHVjZXIsIGRlZmF1bHRVc2VyIH07XHJcbiIsImNvbnN0IGRlZmF1bHRWaXNpdFBsYW4gPSB7XHJcbiAgdmlzaWJpbGl0eTogW10sXHJcbiAgYXZhYmlsaXR5OiBbXSxcclxuICBjYXRhdGFuOiBcIlwiLFxyXG4gIGNoZWNrSW46IFwiXCIsXHJcbn07XHJcblxyXG5jb25zdCB2aXNpdFBsYW5SZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiU0VUX1BMQU5fVklTSUJJTElUWVwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdmlzaWJpbGl0eTogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJTRVRfUExBTl9BVkFCSUxJVFlcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGF2YWJpbGl0eTogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJTRVRfUExBTl9DQVRBVEFOXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjYXRhdGFuOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9QTEFOX0NIRUNLX0lOXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjaGVja0luOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9ERUZBVUxUX1ZJU0lUX1BMQU5cIjpcclxuICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdFZpc2l0UGxhbiB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IHZpc2l0UGxhblJlZHVjZXIsIGRlZmF1bHRWaXNpdFBsYW4gfTtcclxuIiwiY29uc3QgZGVmYXVsdFZpc2l0U3ByZWFkaW5nID0ge1xyXG4gIHZpc2liaWxpdHk6IFtdLFxyXG4gIGF2YWJpbGl0eTogW10sXHJcbiAgY2F0YXRhbjogXCJcIixcclxuICBhbGFtYXQ6IFwiXCIsXHJcbiAgbmV3T3V0bGV0OiBcIlwiLFxyXG4gIGNoZWNrSW46IFwiXCIsXHJcbiAgamVuaXNDaGFubmVsOiB7fSxcclxuICBvdXRsZXQ6IHt9LFxyXG59O1xyXG5cclxuY29uc3QgdmlzaXRTcHJlYWRpbmdSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiU0VUX1NQUkVBRElOR19WSVNJQklMSVRZXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB2aXNpYmlsaXR5OiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9TUFJFQURJTkdfQVZBQklMSVRZXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBhdmFiaWxpdHk6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiU0VUX1NQUkVBRElOR19DQVRBVEFOXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjYXRhdGFuOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9TUFJFQURJTkdfQUxBTUFUXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBhbGFtYXQ6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiU0VUX1NQUkVBRElOR19ORVdfT1VUTEVUXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBuZXdPdXRsZXQ6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiU0VUX1NQUkVBRElOR19DSEVDS19JTlwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2hlY2tJbjogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJTRVRfU1BSRUFESU5HX0pFTklTX0NIQU5ORUxcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGplbmlzQ2hhbm5lbDogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJTRVRfU1BSRUFESU5HX09VVExFVFwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgb3V0bGV0OiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9ERUZBVUxUX1ZJU0lUX1NQUkVBRElOR1wiOlxyXG4gICAgICByZXR1cm4geyAuLi5kZWZhdWx0VmlzaXRTcHJlYWRpbmcgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyB2aXNpdFNwcmVhZGluZ1JlZHVjZXIsIGRlZmF1bHRWaXNpdFNwcmVhZGluZyB9O1xyXG4iLCJjb25zdCBkZWZhdWx0VmlzaXRVbnBsYW4gPSB7XHJcbiAgdmlzaWJpbGl0eTogW10sXHJcbiAgYXZhYmlsaXR5OiBbXSxcclxuICBjYXRhdGFuOiBcIlwiLFxyXG4gIGNoZWNrSW46IFwiXCIsXHJcbiAgamVuaXNDaGFubmVsOiB7fSxcclxuICBvdXRsZXQ6IHt9LFxyXG59O1xyXG5cclxuY29uc3QgdmlzaXRVbnBsYW5SZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiU0VUX1VOUExBTl9WSVNJQklMSVRZXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB2aXNpYmlsaXR5OiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9VTlBMQU5fQVZBQklMSVRZXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBhdmFiaWxpdHk6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiU0VUX1VOUExBTl9DQVRBVEFOXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjYXRhdGFuOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9VTlBMQU5fQ0hFQ0tfSU5cIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNoZWNrSW46IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiU0VUX1VOUExBTl9KRU5JU19DSEFOTkVMXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBqZW5pc0NoYW5uZWw6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiU0VUX1VOUExBTl9PVVRMRVRcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG91dGxldDogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJTRVRfREVGQVVMVF9WSVNJVF9VTlBMQU5cIjpcclxuICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdFZpc2l0VW5wbGFuIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgdmlzaXRVbnBsYW5SZWR1Y2VyLCBkZWZhdWx0VmlzaXRVbnBsYW4gfTtcclxuIiwiaW1wb3J0IFwiZmlyZWJhc2UvbWVzc2FnaW5nXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcblxyXG5jb25zdCBmaXJlYmFzZUNsb3VkTWVzc2FnaW5nID0ge1xyXG4gIC8vY2hlY2tpbmcgd2hldGhlciB0b2tlbiBpcyBhdmFpbGFibGUgaW4gaW5kZXhlZCBEQlxyXG4gIHRva2VuSW5sb2NhbGZvcmFnZTogYXN5bmMgKCkgPT4ge1xyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmNtX3Rva2VuXCIpO1xyXG4gIH0sXHJcblxyXG4gIHVzZXJJbmxvY2FsZm9yYWdlOiBhc3luYyAoKSA9PiB7XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpO1xyXG4gIH0sXHJcblxyXG4gIC8vaW5pdGlhbGl6aW5nIGZpcmViYXNlIGFwcFxyXG4gIGluaXQ6IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcclxuICAgICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcCh7XHJcbiAgICAgICAgYXBpS2V5OiBcIkFJemFTeUFNVGlyWXB5elk3UVdEa3pTUHNvZnBvNjhqYUZsdG5ya1wiLFxyXG4gICAgICAgIGF1dGhEb21haW46IFwic2FrYW1vci04ZjI4ZC5maXJlYmFzZWFwcC5jb21cIixcclxuICAgICAgICBwcm9qZWN0SWQ6IFwic2FrYW1vci04ZjI4ZFwiLFxyXG4gICAgICAgIHN0b3JhZ2VCdWNrZXQ6IFwic2FrYW1vci04ZjI4ZC5hcHBzcG90LmNvbVwiLFxyXG4gICAgICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjQwMDcyMDQ1ODE2NlwiLFxyXG4gICAgICAgIGFwcElkOiBcIjE6NDAwNzIwNDU4MTY2OndlYjpjZjdhZmMwNmVjM2FjNDE5ZDY5MTE3XCIsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBtZXNzYWdpbmcgPSBmaXJlYmFzZS5tZXNzYWdpbmcoKTtcclxuICAgICAgICBjb25zdCB0b2tlbkluTG9jYWxGb3JhZ2UgPSBhd2FpdCB0aGlzLnRva2VuSW5sb2NhbGZvcmFnZSgpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJJbmxvY2FsZm9yYWdlID0gYXdhaXQgdGhpcy51c2VySW5sb2NhbGZvcmFnZSgpO1xyXG5cclxuICAgICAgICAvL2lmIEZDTSB0b2tlbiBpcyBhbHJlYWR5IHRoZXJlIGp1c3QgcmV0dXJuIHRoZSB0b2tlblxyXG4gICAgICAgIGlmICh0b2tlbkluTG9jYWxGb3JhZ2UgIT09IG51bGwpIHtcclxuICAgICAgICAgIHJldHVybiB0b2tlbkluTG9jYWxGb3JhZ2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodXNlcklubG9jYWxmb3JhZ2UpIHtcclxuICAgICAgICAgIC8vcmVxdWVzdGluZyBub3RpZmljYXRpb24gcGVybWlzc2lvbiBmcm9tIGJyb3dzZXJcclxuICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGF3YWl0IE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpO1xyXG4gICAgICAgICAgaWYgKHN0YXR1cyAmJiBzdGF0dXMgPT09IFwiZ3JhbnRlZFwiKSB7XHJcbiAgICAgICAgICAgIC8vZ2V0dGluZyB0b2tlbiBmcm9tIEZDTVxyXG4gICAgICAgICAgICBjb25zdCBmY21fdG9rZW4gPSBhd2FpdCBtZXNzYWdpbmcuZ2V0VG9rZW4oKTtcclxuICAgICAgICAgICAgaWYgKGZjbV90b2tlbikge1xyXG4gICAgICAgICAgICAgIC8vc2V0dGluZyBGQ00gdG9rZW4gaW4gaW5kZXhlZCBkYiB1c2luZyBsb2NhbGZvcmFnZVxyXG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZmNtX3Rva2VuXCIsIGZjbV90b2tlbik7XHJcbiAgICAgICAgICAgICAgLy9yZXR1cm4gdGhlIEZDTSB0b2tlbiBhZnRlciBzYXZpbmcgaXRcclxuICAgICAgICAgICAgICByZXR1cm4gZmNtX3Rva2VuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxufTtcclxuZXhwb3J0IHsgZmlyZWJhc2VDbG91ZE1lc3NhZ2luZyB9O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hcHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvbWVzc2FnaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9