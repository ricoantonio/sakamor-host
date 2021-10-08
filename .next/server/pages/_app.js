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
/*! exports provided: getMenu, getAuth, onLogin, postChangePass, forgotPassword, getProductSearch, getSearchJenisChannel, getProductAvgSales, getSearchOutlet, getBrand, getProductByJenisChannel, getKontenWorkVisit, getHnaAvg, postProfilePic, viewProfilePic, getSmrByCabang, viewOutletClass, getNotificationbyUsername, getPimcaByCabang, getPlanList, getPlanId, getPosm, getPlanHistory, submitVisitPlan, submitVisitPlanDposm, getInvoiceDataPosm, getInvoiceData, getPlanMonthlyHistory, viewFile, getMasterVisitPlan, deleteMasterPlanSMR, saveMasterPlanVisit, getApproval, getPlanById, getRevisePlanListSmr, updateDataPosmPlan, updateDataProdukPlan, insertFilePlan, getVisitPlanProduct, submitVisitUnplan, submitVisitUnplanDposm, getInvoiceDataUnplan, getInvoiceDataPosmUnplan, getUnplanMonthlyHistory, viewFileUnplan, getUnplanNearMe, getUnplanById, getReviseUnPlanListSmr, updateDataPosmUnplan, updateDataProdukUnplan, insertFileUnplan, getUnPlanProducts, submitVisitSpreading, submitVisitSpreadingDposm, getInvoiceDataSpreading, getInvoiceDataPosmSpreading, viewFileSpreading, getSpreadingMonthlyHistory, getSpreadingById, getReviseSpreadingListSmr, updateDataPosmSpreading, updateDataProdukSpreading, insertFileSpreading, getSpreadingProduct, getAllWorkVisit, getWorkVisitMonthlyHistory, getWorkVisitRating, submitWorkVisit, getMasterWorkVisit, saveMasterWorkVisit, deleteMasterWorkVisit, getDayProgram, getDayPromo, getMonthProgram, getMonthPromo, getAllAnnouncement, updateReadAnnouncement, getSalesTargetSMR, getSalesTarget75SMR, getProduktifitas, getFrontliner, getNoo, getWorkDay, getKpiInventiveMonthlySMR, getKpiInventiveMonthlyPimca, getIncentiveYearly, getSalesTargetPimca, getSalesTarget75Pimca, getFrontlinerPimca, getBenefitCodeCabang, approvalReject, approvalRevise, approvalApprove, approvalSubmit */
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_MASTER"] + `/MasterDataLokal/GetOutletClassification/3328085`, // `/MasterDataLokal/GetOutletClassification/${outletID}`,
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
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/login");
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    setToken();

    async function setToken() {
      try {
        const token = await _webpush__WEBPACK_IMPORTED_MODULE_6__["firebaseCloudMessaging"].init();

        if (token) {
          getMessage();
        }
      } catch (error) {
        console.log(error);
      }
    }

    function getMessage() {
      const messaging = firebase_app__WEBPACK_IMPORTED_MODULE_7___default.a.messaging();
      console.log({
        messaging
      });
      messaging.onMessage(message => {// localStorage.setItem("notif", true);
      });
    }
  });
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
/* harmony import */ var _actions_setReviseAvability__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./actions/setReviseAvability */ "./store/actions/setReviseAvability.js");
/* harmony import */ var _actions_setReviseVisibility__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./actions/setReviseVisibility */ "./store/actions/setReviseVisibility.js");
/* harmony import */ var _actions_setFocusApproval__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./actions/setFocusApproval */ "./store/actions/setFocusApproval.js");

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
  const actions = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(_actions_userLogin__WEBPACK_IMPORTED_MODULE_9__["default"])(dispatch)), Object(_actions_setMenu__WEBPACK_IMPORTED_MODULE_10__["default"])(dispatch)), Object(_actions_keepState__WEBPACK_IMPORTED_MODULE_11__["default"])(dispatch)), Object(_actions_setPlanVisibility__WEBPACK_IMPORTED_MODULE_12__["default"])(dispatch)), Object(_actions_setPlanAvability__WEBPACK_IMPORTED_MODULE_13__["default"])(dispatch)), Object(_actions_setPlanCatatan__WEBPACK_IMPORTED_MODULE_14__["default"])(dispatch)), Object(_actions_setPlanCheckIn__WEBPACK_IMPORTED_MODULE_15__["default"])(dispatch)), Object(_actions_setDefaultVisitPlan__WEBPACK_IMPORTED_MODULE_30__["default"])(dispatch)), Object(_actions_setUnplanVisibility__WEBPACK_IMPORTED_MODULE_17__["default"])(dispatch)), Object(_actions_setUnplanAvability__WEBPACK_IMPORTED_MODULE_16__["default"])(dispatch)), Object(_actions_setUnplanCatatan__WEBPACK_IMPORTED_MODULE_18__["default"])(dispatch)), Object(_actions_setUnplanCheckIn__WEBPACK_IMPORTED_MODULE_19__["default"])(dispatch)), Object(_actions_setUnplanJenisChannel__WEBPACK_IMPORTED_MODULE_20__["default"])(dispatch)), Object(_actions_setUnplanOutlet__WEBPACK_IMPORTED_MODULE_21__["default"])(dispatch)), Object(_actions_setDefaultVisitUnplan__WEBPACK_IMPORTED_MODULE_31__["default"])(dispatch)), Object(_actions_setSpreadingVisibility__WEBPACK_IMPORTED_MODULE_23__["default"])(dispatch)), Object(_actions_setSpreadingAvability__WEBPACK_IMPORTED_MODULE_22__["default"])(dispatch)), Object(_actions_setSpreadingCatatan__WEBPACK_IMPORTED_MODULE_24__["default"])(dispatch)), Object(_actions_setSpreadingAlamat__WEBPACK_IMPORTED_MODULE_25__["default"])(dispatch)), Object(_actions_setSpreadingNewOutlet__WEBPACK_IMPORTED_MODULE_26__["default"])(dispatch)), Object(_actions_setSpreadingCheckIn__WEBPACK_IMPORTED_MODULE_27__["default"])(dispatch)), Object(_actions_setSpreadingJenisChannel__WEBPACK_IMPORTED_MODULE_28__["default"])(dispatch)), Object(_actions_setSpreadingOutlet__WEBPACK_IMPORTED_MODULE_29__["default"])(dispatch)), Object(_actions_setDefaultVisitSpreading__WEBPACK_IMPORTED_MODULE_32__["default"])(dispatch)), Object(_actions_setFocusApproval__WEBPACK_IMPORTED_MODULE_35__["default"])(dispatch)), Object(_actions_setReviseAvability__WEBPACK_IMPORTED_MODULE_33__["default"])(dispatch)), Object(_actions_setReviseVisibility__WEBPACK_IMPORTED_MODULE_34__["default"])(dispatch)), []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Stores.Provider, {
    value: {
      state,
      dispatch,
      actions
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 121,
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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVyLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9rZWVwU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZXREZWZhdWx0VmlzaXRQbGFuLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0RGVmYXVsdFZpc2l0U3ByZWFkaW5nLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0RGVmYXVsdFZpc2l0VW5wbGFuLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0Rm9jdXNBcHByb3ZhbC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldE1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZXRQbGFuQXZhYmlsaXR5LmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0UGxhbkNhdGF0YW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZXRQbGFuQ2hlY2tJbi5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFBsYW5WaXNpYmlsaXR5LmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0UmV2aXNlQXZhYmlsaXR5LmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0UmV2aXNlVmlzaWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFNwcmVhZGluZ0FsYW1hdC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFNwcmVhZGluZ0F2YWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFNwcmVhZGluZ0NhdGF0YW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZXRTcHJlYWRpbmdDaGVja0luLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0U3ByZWFkaW5nSmVuaXNDaGFubmVsLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0U3ByZWFkaW5nTmV3T3V0bGV0LmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0U3ByZWFkaW5nT3V0bGV0LmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0U3ByZWFkaW5nVmlzaWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFVucGxhbkF2YWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFVucGxhbkNhdGF0YW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZXRVbnBsYW5DaGVja0luLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0VW5wbGFuSmVuaXNDaGFubmVsLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0VW5wbGFuT3V0bGV0LmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0VW5wbGFuVmlzaWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3VzZXJMb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9hcHByb3ZhbC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9tZW51LmpzIiwid2VicGFjazovLy8uL3N0b3JlL3JlZHVjZXJzL3JldmlzZS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3JlZHVjZXJzL3Zpc2l0UGxhbi5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy92aXNpdFNwcmVhZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy92aXNpdFVucGxhbi5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwdXNoLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL21lc3NhZ2luZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJBUElfVVJMIiwiQVBJX1VTRVIiLCJBUElfTUFTVEVSIiwiQVBJX1ZJU0lUX1BMQU4iLCJBUElfVklTSVRfVU5QTEFOIiwiQVBJX1ZJU0lUX1NQUkVBRElORyIsIkFQSV9XT1JLX1ZJU0lUIiwiQVBJX0NBTEVOREFSX1BST0dSQU0iLCJBUElfQ0FMRU5EQVJfUFJPTU8iLCJBUElfQU5OT1VOQ0VNRU5UIiwiQVBJX0lOQ0VOVElWRSIsIkFQSV9CRU5FRklUIiwiQVBJX0FQUFJPVkFMIiwiVE9LRU4iLCJub3ciLCJEYXRlIiwiZGF0ZSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwiY29tcGFyZSIsImEiLCJiIiwibm9tb3IiLCJnZXRNZW51IiwidXNlckRhdGEiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJlbWFpbCIsImhlYWRlcnMiLCJhcGlLZXkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwiZ2V0QXV0aCIsInVzZXJuYW1lIiwib25Mb2dpbiIsInZhbHVlcyIsInBhc3N3b3JkIiwibWV0aG9kIiwic2V0V3JvbmdVc2VyIiwicG9zdENoYW5nZVBhc3MiLCJBY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImZvcmdvdFBhc3N3b3JkIiwiZ2V0UG9zbSIsImdldFByb2R1Y3RTZWFyY2giLCJzZWFyY2giLCJnZXRQcm9kdWN0QnlKZW5pc0NoYW5uZWwiLCJqZW5pc0NoYW5uZWxJZCIsImdldFByb2R1Y3RBdmdTYWxlcyIsInByb2R1Y3RDb2RlIiwib3V0bGV0Q29kZSIsImdldEhuYUF2ZyIsImdldFNlYXJjaEplbmlzQ2hhbm5lbCIsIm1vZHVsIiwiZ2V0U2VhcmNoT3V0bGV0IiwiZ2V0QnJhbmQiLCJnZXRLb250ZW5Xb3JrVmlzaXQiLCJnZXRTYWxlc1RhcmdldFNNUiIsImdldFNhbGVzVGFyZ2V0NzVTTVIiLCJwb3N0UHJvZmlsZVBpYyIsImZpbGUiLCJmb3JtZGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwidmlld1Byb2ZpbGVQaWMiLCJzdGF0dXMiLCJibG9iIiwib3V0c2lkZSIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInZpZXdPdXRsZXRDbGFzcyIsIm91dGxldElEIiwiaWQiLCJnZXRQbGFuTGlzdCIsInJlcyIsImZpbHRlciIsInZhbCIsImlzQ2hlY2tPdXQiLCJnZXRQbGFuSWQiLCJwbGFuTGlzdCIsImxlbmd0aCIsInNhbWVQbGFuIiwiZ2V0UGxhbkhpc3RvcnkiLCJzdWJtaXRWaXNpdFBsYW4iLCJzdWJtaXRWaXNpdFBsYW5EcG9zbSIsImRwb3NtIiwibmFtYUZpbGUiLCJnZXRJbnZvaWNlRGF0YSIsInZpc2l0UGxhbklkIiwiZ2V0SW52b2ljZURhdGFQb3NtIiwic29ydERhdGEiLCJzb3J0Iiwidmlld0ZpbGUiLCJnZXRQbGFuTW9udGhseUhpc3RvcnkiLCJkYXRlQSIsInRhbmdnYWwiLCJkYXRlQiIsImdldE1hc3RlclZpc2l0UGxhbiIsImdldEFwcHJvdmFsIiwiZ2V0UmV2aXNlUGxhbkxpc3RTbXIiLCJkZWxldGVNYXN0ZXJQbGFuU01SIiwic2F2ZU1hc3RlclBsYW5WaXNpdCIsImdldFBsYW5CeUlkIiwidXBkYXRlRGF0YVBvc21QbGFuIiwidXBkYXRlRGF0YVByb2R1a1BsYW4iLCJpbnNlcnRGaWxlUGxhbiIsIm5hbWUiLCJnZXRWaXNpdFBsYW5Qcm9kdWN0Iiwic3VibWl0VmlzaXRVbnBsYW4iLCJzdWJtaXRWaXNpdFVucGxhbkRwb3NtIiwiZ2V0SW52b2ljZURhdGFVbnBsYW4iLCJnZXRVbnBsYW5CeUlkIiwiZ2V0SW52b2ljZURhdGFQb3NtVW5wbGFuIiwidmlzaXRVbnBsYW5JZCIsInVwZGF0ZURhdGFQb3NtVW5wbGFuIiwidXBkYXRlRGF0YVByb2R1a1VucGxhbiIsImluc2VydEZpbGVVbnBsYW4iLCJ2aWV3RmlsZVVucGxhbiIsImdldFVucGxhbk1vbnRobHlIaXN0b3J5IiwiZ2V0VW5wbGFuTmVhck1lIiwiZ2V0UmV2aXNlVW5QbGFuTGlzdFNtciIsImdldFVuUGxhblByb2R1Y3RzIiwic3VibWl0VmlzaXRTcHJlYWRpbmciLCJzdWJtaXRWaXNpdFNwcmVhZGluZ0Rwb3NtIiwiZ2V0SW52b2ljZURhdGFTcHJlYWRpbmciLCJnZXRJbnZvaWNlRGF0YVBvc21TcHJlYWRpbmciLCJ2aWV3RmlsZVNwcmVhZGluZyIsImdldFNwcmVhZGluZ01vbnRobHlIaXN0b3J5IiwiZ2V0U3ByZWFkaW5nQnlJZCIsImdldFJldmlzZVNwcmVhZGluZ0xpc3RTbXIiLCJ1cGRhdGVEYXRhUG9zbVNwcmVhZGluZyIsInVwZGF0ZURhdGFQcm9kdWtTcHJlYWRpbmciLCJpbnNlcnRGaWxlU3ByZWFkaW5nIiwiZ2V0U3ByZWFkaW5nUHJvZHVjdCIsImdldEFsbFdvcmtWaXNpdCIsImdldFdvcmtWaXNpdE1vbnRobHlIaXN0b3J5IiwiZ2V0V29ya1Zpc2l0UmF0aW5nIiwic3VibWl0V29ya1Zpc2l0IiwiZ2V0TWFzdGVyV29ya1Zpc2l0Iiwic2F2ZU1hc3RlcldvcmtWaXNpdCIsImRlbGV0ZU1hc3RlcldvcmtWaXNpdCIsImdldERheVByb21vIiwiZ2V0RGF5UHJvZ3JhbSIsImdldE1vbnRoUHJvbW8iLCJnZXRNb250aFByb2dyYW0iLCJnZXRBbGxBbm5vdW5jZW1lbnQiLCJrb2RlQ2FiYW5nIiwidXBkYXRlUmVhZEFubm91bmNlbWVudCIsImdldFByb2R1a3RpZml0YXMiLCJnZXRGcm9udGxpbmVyIiwiZ2V0Tm9vIiwiZ2V0V29ya0RheSIsImdldEtwaUludmVudGl2ZU1vbnRobHlTTVIiLCJtb21lbnQiLCJmb3JtYXQiLCJnZXRLcGlJbnZlbnRpdmVNb250aGx5UGltY2EiLCJnZXRJbmNlbnRpdmVZZWFybHkiLCJnZXRTYWxlc1RhcmdldFBpbWNhIiwiZ2V0U2FsZXNUYXJnZXQ3NVBpbWNhIiwiZ2V0RnJvbnRsaW5lclBpbWNhIiwiZ2V0U21yQnlDYWJhbmciLCJjYWJhbmciLCJ0ZWtzIiwiZ2V0Tm90aWZpY2F0aW9uYnlVc2VybmFtZSIsImdldFBpbWNhQnlDYWJhbmciLCJnZXRCZW5lZml0Q29kZUNhYmFuZyIsImFwcHJvdmFsUmVqZWN0IiwiYXBwcm92YWxSZXZpc2UiLCJhcHByb3ZhbEFwcHJvdmUiLCJhcHByb3ZhbFN1Ym1pdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidXNlRWZmZWN0IiwidXNlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJSb3V0ZXIiLCJwdXNoIiwic2V0VG9rZW4iLCJ0b2tlbiIsImZpcmViYXNlQ2xvdWRNZXNzYWdpbmciLCJpbml0IiwiZ2V0TWVzc2FnZSIsImVycm9yIiwibWVzc2FnaW5nIiwiZmlyZWJhc2UiLCJvbk1lc3NhZ2UiLCJtZXNzYWdlIiwiZGlzcGF0Y2giLCJrZWVwU3RhdGUiLCJ0eXBlIiwicGF5bG9hZCIsImUiLCJzZXREZWZhdWx0VmlzaXRQbGFuIiwic2V0RGVmYXVsdFZpc2l0U3ByZWFkaW5nIiwic2V0RGVmYXVsdFZpc2l0VW5wbGFuIiwic2V0Rm9jdXNBcHByb3ZhbCIsInNldE1lbnUiLCJzZXRQbGFuQXZhYmlsaXR5Iiwic2V0UGxhbkNhdGF0YW4iLCJzZXRQbGFuQ2hlY2tJbiIsInNldFBsYW5WaXNpYmlsaXR5Iiwic2V0UmV2aXNlQXZhYmlsaXR5Iiwic2V0UmV2aXNlVmlzaWJpbGl0eSIsInNldFNwcmVhZGluZ0NhdGF0YW4iLCJzZXRTcHJlYWRpbmdBdmFiaWxpdHkiLCJzZXRTcHJlYWRpbmdBbGFtYXQiLCJzZXRTcHJlYWRpbmdDaGVja0luIiwic2V0U3ByZWFkaW5nSmVuaXNDaGFubmVsIiwic2V0U3ByZWFkaW5nTmV3T3V0bGV0Iiwic2V0U3ByZWFkaW5nT3V0bGV0Iiwic2V0U3ByZWFkaW5nVmlzaWJpbGl0eSIsInNldFVucGxhbkF2YWJpbGl0eSIsInNldFVucGxhbkNhdGF0YW4iLCJzZXRVbnBsYW5DaGVja0luIiwic2V0VW5wbGFuSmVuaXNDaGFubmVsIiwic2V0VW5wbGFuT3V0bGV0Iiwic2V0VW5wbGFuVmlzaWJpbGl0eSIsInVzZXJMb2dpbiIsIlN0b3JlcyIsImNyZWF0ZUNvbnRleHQiLCJTdG9yZSIsImNoaWxkcmVuIiwic3RhdGUiLCJ1c2VSZWR1Y2VyIiwicHJldlN0YXRlIiwiYWN0aW9uIiwidXNlclJlZHVjZXIiLCJtZW51UmVkdWNlciIsInZpc2l0UGxhblJlZHVjZXIiLCJ2aXNpdFVucGxhblJlZHVjZXIiLCJ2aXNpdFNwcmVhZGluZ1JlZHVjZXIiLCJhcHByb3ZhbFJlZHVjZXIiLCJyZXZpc2VSZWR1Y2VyIiwiZGVmYXVsdFVzZXIiLCJkZWZhdWx0TWVudSIsImRlZmF1bHRWaXNpdFBsYW4iLCJkZWZhdWx0VmlzaXRVbnBsYW4iLCJkZWZhdWx0VmlzaXRTcHJlYWRpbmciLCJkZWZhdWx0QXBwcm92YWwiLCJkZWZhdWx0UmV2aXNlIiwiYWN0aW9ucyIsInVzZU1lbW8iLCJmb2N1c0FwcHJvdmFsIiwibWVudSIsInNldEl0ZW0iLCJ1c2VyTWVudSIsInBhcnNlIiwidmlzaWJpbGl0eSIsImF2YWJpbGl0eSIsImNsZWFyIiwiY2F0YXRhbiIsImNoZWNrSW4iLCJhbGFtYXQiLCJuZXdPdXRsZXQiLCJqZW5pc0NoYW5uZWwiLCJvdXRsZXQiLCJ0b2tlbklubG9jYWxmb3JhZ2UiLCJ1c2VySW5sb2NhbGZvcmFnZSIsImFwcHMiLCJpbml0aWFsaXplQXBwIiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwidG9rZW5JbkxvY2FsRm9yYWdlIiwiTm90aWZpY2F0aW9uIiwicmVxdWVzdFBlcm1pc3Npb24iLCJmY21fdG9rZW4iLCJnZXRUb2tlbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFJQSxPQUFPLEdBQUcsOENBQWQ7QUFDQSxJQUFJQyxRQUFRLEdBQUcsNkJBQWY7QUFDQSxJQUFJQyxVQUFVLEdBQUcsMkJBQWpCO0FBQ0EsSUFBSUMsY0FBYyxHQUFHLGtDQUFyQjtBQUNBLElBQUlDLGdCQUFnQixHQUFHLG9DQUF2QjtBQUNBLElBQUlDLG1CQUFtQixHQUFHLGtDQUExQjtBQUNBLElBQUlDLGNBQWMsR0FBRyxrQ0FBckI7QUFD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IFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsInZhciBBUElfVVJMID0gXCJodHRwczovL20tb25lLmthbGJlLmNvLmlkOjgyNDMvdC9rYWxiZS5jby5pZFwiO1xyXG52YXIgQVBJX1VTRVIgPSBcIi9Vc2VyUHJvZmlsZUV4dGVybmFsL3YxL2FwaVwiO1xyXG52YXIgQVBJX01BU1RFUiA9IFwiL1Nha2Ftb3JNYXN0ZXJEYXRhL3YxL2FwaVwiO1xyXG52YXIgQVBJX1ZJU0lUX1BMQU4gPSBcIi9TYWthbW9yQWN0aXZpdHlWaXNpdFBsYW4vdjEvYXBpXCI7XHJcbnZhciBBUElfVklTSVRfVU5QTEFOID0gXCIvU2FrYW1vckFjdGl2aXR5VmlzaXRVblBsYW4vdjEvYXBpXCI7XHJcbnZhciBBUElfVklTSVRfU1BSRUFESU5HID0gXCIvU2FrYW1vckFjdGl2aXR5U3ByZWFkaW5nL3YxL2FwaVwiO1xyXG52YXIgQVBJX1dPUktfVklTSVQgPSBcIi9TYWthbW9yQWN0aXZpdHlXb3JrVmlzaXQvdjEvYXBpXCI7XHJcbnZhciBBUElfQ0FMRU5EQVJfUFJPR1JBTSA9IFwiL1Nha2Ftb3JLYWxlbmRlclByb2dyYW0vdjEvYXBpXCI7XHJcbnZhciBBUElfQ0FMRU5EQVJfUFJPTU8gPSBcIi9TYWthbW9ySW5mb1Byb21vL3YxL2FwaVwiO1xyXG52YXIgQVBJX0FOTk9VTkNFTUVOVCA9IFwiL1Nha2Ftb3JBbm5vdW5jZW1lbnQvdjEvYXBpXCI7XHJcbnZhciBBUElfSU5DRU5USVZFID0gXCIvU2FrYW1vckluY2VudGl2ZS92MS9hcGlcIjtcclxudmFyIEFQSV9CRU5FRklUID0gXCIvU2FrYW1vckJlbmVmaXRzL3YxL2FwaVwiO1xyXG52YXIgQVBJX0FQUFJPVkFMID0gXCIvQXBwcm92YWxBUEkvdjEvYXBpXCI7XHJcblxyXG52YXIgVE9LRU4gPVxyXG4gIFwiZXlKNE5YUWlPaUpaYW10NVdrUlZNMDV0UlRSWmJWWnFUMVJqZUU0eVJUUk5iVlpyVDFkU2FrMVhWbWhaVkdob1dXcGplRTlVWnpKTmVtdDRXVkU5UFNJc0ltdHBaQ0k2SW1kaGRHVjNZWGxmWTJWeWRHbG1hV05oZEdWZllXeHBZWE1pTENKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKU1V6STFOaUo5LmV5SnpkV0lpT2lKdWIySnZiaTVoYm1SeVlVQnJZV3hpWlM1amJ5NXBaQ0lzSW1Gd2NHeHBZMkYwYVc5dUlqcDdJbTkzYm1WeUlqb2libTlpYjI0dVlXNWtjbUZBYTJGc1ltVXVZMjh1YVdRaUxDSjBhV1Z5VVhWdmRHRlVlWEJsSWpwdWRXeHNMQ0owYVdWeUlqb2lWVzVzYVcxcGRHVmtJaXdpYm1GdFpTSTZJbE5oYTJGdGIzSWdNaTR3SWl3aWFXUWlPakU1TENKMWRXbGtJam9pTVRRNVpXVTBObVV0WkRFM05pMDBOV1F4TFdFM05tRXRPVEF6TTJSaE56YzRPVFU0SW4wc0ltbHpjeUk2SW1oMGRIQnpPbHd2WEM5dExXOXVaUzVyWVd4aVpTNWpieTVwWkRvNU5EUXpYQzl2WVhWMGFESmNMM1J2YTJWdUlpd2lkR2xsY2tsdVptOGlPbnNpVlc1c2FXMXBkR1ZrSWpwN0luUnBaWEpSZFc5MFlWUjVjR1VpT2lKeVpYRjFaWE4wUTI5MWJuUWlMQ0puY21Gd2FGRk1UV0Y0UTI5dGNHeGxlR2wwZVNJNk1Dd2laM0poY0doUlRFMWhlRVJsY0hSb0lqb3dMQ0p6ZEc5d1QyNVJkVzkwWVZKbFlXTm9JanAwY25WbExDSnpjR2xyWlVGeWNtVnpkRXhwYldsMElqb3dMQ0p6Y0dsclpVRnljbVZ6ZEZWdWFYUWlPbTUxYkd4OWZTd2lhMlY1ZEhsd1pTSTZJbE5CVGtSQ1QxZ2lMQ0p3WlhKdGFYUjBaV1JTWldabGNtVnlJam9pSWl3aWMzVmljMk55YVdKbFpFRlFTWE1pT2x0N0luTjFZbk5qY21saVpYSlVaVzVoYm5SRWIyMWhhVzRpT2lKcllXeGlaUzVqYnk1cFpDSXNJbTVoYldVaU9pSlRZV3RoYlc5eVFXTjBhWFpwZEhsV2FYTnBkRkJzWVc0aUxDSmpiMjUwWlhoMElqb2lYQzkwWEM5cllXeGlaUzVqYnk1cFpGd3ZVMkZyWVcxdmNrRmpkR2wyYVhSNVZtbHphWFJRYkdGdVhDOTJNU0lzSW5CMVlteHBjMmhsY2lJNkltNXZZbTl1TG1GdVpISmhRR3RoYkdKbExtTnZMbWxrSWl3aWRtVnljMmx2YmlJNkluWXhJaXdpYzNWaWMyTnlhWEIwYVc5dVZHbGxjaUk2SWxWdWJHbHRhWFJsWkNKOUxIc2ljM1ZpYzJOeWFXSmxjbFJsYm1GdWRFUnZiV0ZwYmlJNkltdGhiR0psTG1OdkxtbGtJaXdpYm1GdFpTSTZJbFZ6WlhKUWNtOW1hV3hsUlhoMFpYSnVZV3dpTENKamIyNTBaWGgwSWpvaVhDOTBYQzlyWVd4aVpTNWpieTVwWkZ3dlZYTmxjbEJ5YjJacGJHVkZlSFJsY201aGJGd3ZkakVpTENKd2RXSnNhWE5vWlhJaU9pSnViMkp2Ymk1aGJtUnlZVUJyWVd4aVpTNWpieTVwWkNJc0luWmxjbk5wYjI0aU9pSjJNU0lzSW5OMVluTmpjbWx3ZEdsdmJsUnBaWElpT2lKVmJteHBiV2wwWldRaWZTeDdJbk4xWW5OamNtbGlaWEpVWlc1aGJuUkViMjFoYVc0aU9pSnJZV3hpWlM1amJ5NXBaQ0lzSW01aGJXVWlPaUpUWVd0aGJXOXlUV0Z6ZEdWeVJHRjBZU0lzSW1OdmJuUmxlSFFpT2lKY0wzUmNMMnRoYkdKbExtTnZMbWxrWEM5VFlXdGhiVzl5VFdGemRHVnlSR0YwWVZ3dmRqRWlMQ0p3ZFdKc2FYTm9aWElpT2lKdWIySnZiaTVoYm1SeVlVQnJZV3hpWlM1amJ5NXBaQ0lzSW5abGNuTnBiMjRpT2lKMk1TSXNJbk4xWW5OamNtbHdkR2x2YmxScFpYSWlPaUpWYm14cGJXbDBaV1FpZlN4N0luTjFZbk5qY21saVpYSlVaVzVoYm5SRWIyMWhhVzRpT2lKcllXeGlaUzVqYnk1cFpDSXNJbTVoYldVaU9pSlRZV3RoYlc5eVFXTjBhWFpwZEhsVGNISmxZV1JwYm1jaUxDSmpiMjUwWlhoMElqb2lYQzkwWEM5cllXeGlaUzVqYnk1cFpGd3ZVMkZyWVcxdmNrRmpkR2wyYVhSNVUzQnlaV0ZrYVc1blhDOTJNU0lzSW5CMVlteHBjMmhsY2lJNkltNXZZbTl1TG1GdVpISmhRR3RoYkdKbExtTnZMbWxrSWl3aWRtVnljMmx2YmlJNkluWXhJaXdpYzNWaWMyTnlhWEIwYVc5dVZHbGxjaUk2SWxWdWJHbHRhWFJsWkNKOUxIc2ljM1ZpYzJOeWFXSmxjbFJsYm1GdWRFUnZiV0ZwYmlJNkltdGhiR0psTG1OdkxtbGtJaXdpYm1GdFpTSTZJbE5oYTJGdGIzSkJZM1JwZG1sMGVWWnBjMmwwVlc1UWJHRnVJaXdpWTI5dWRHVjRkQ0k2SWx3dmRGd3ZhMkZzWW1VdVkyOHVhV1JjTDFOaGEyRnRiM0pCWTNScGRtbDBlVlpwYzJsMFZXNVFiR0Z1WEM5Mk1TSXNJbkIxWW14cGMyaGxjaUk2SW01dlltOXVMbUZ1WkhKaFFHdGhiR0psTG1OdkxtbGtJaXdpZG1WeWMybHZiaUk2SW5ZeElpd2ljM1ZpYzJOeWFYQjBhVzl1VkdsbGNpSTZJbFZ1YkdsdGFYUmxaQ0o5TEhzaWMzVmljMk55YVdKbGNsUmxibUZ1ZEVSdmJXRnBiaUk2SW10aGJHSmxMbU52TG1sa0lpd2libUZ0WlNJNklsTmhhMkZ0YjNKQlkzUnBkbWwwZVZkdmNtdFdhWE5wZENJc0ltTnZiblJsZUhRaU9pSmNMM1JjTDJ0aGJHSmxMbU52TG1sa1hDOVRZV3RoYlc5eVFXTjBhWFpwZEhsWGIzSnJWbWx6YVhSY0wzWXhJaXdpY0hWaWJHbHphR1Z5SWpvaWJtOWliMjR1WVc1a2NtRkFhMkZzWW1VdVkyOHVhV1FpTENKMlpYSnphVzl1SWpvaWRqRWlMQ0p6ZFdKelkzSnBjSFJwYjI1VWFXVnlJam9pVlc1c2FXMXBkR1ZrSW4wc2V5SnpkV0p6WTNKcFltVnlWR1Z1WVc1MFJHOXRZV2x1SWpvaWEyRnNZbVV1WTI4dWFXUWlMQ0p1WVcxbElqb2lVMkZyWVcxdmNrdGhiR1Z1WkdWeVVISnZaM0poYlNJc0ltTnZiblJsZUhRaU9pSmNMM1JjTDJ0aGJHSmxMbU52TG1sa1hDOVRZV3RoYlc5eVMyRnNaVzVrWlhKUWNtOW5jbUZ0WEM5Mk1TSXNJbkIxWW14cGMyaGxjaUk2SW01dlltOXVMbUZ1WkhKaFFHdGhiR0psTG1OdkxtbGtJaXdpZG1WeWMybHZiaUk2SW5ZeElpd2ljM1ZpYzJOeWFYQjBhVzl1VkdsbGNpSTZJbFZ1YkdsdGFYUmxaQ0o5TEhzaWMzVmljMk55YVdKbGNsUmxibUZ1ZEVSdmJXRnBiaUk2SW10aGJHSmxMbU52TG1sa0lpd2libUZ0WlNJNklsTmhhMkZ0YjNKSmJtWnZVSEp2Ylc4aUxDSmpiMjUwWlhoMElqb2lYQzkwWEM5cllXeGlaUzVqYnk1cFpGd3ZVMkZyWVcxdmNrbHVabTlRY205dGIxd3ZkakVpTENKd2RXSnNhWE5vWlhJaU9pSnViMkp2Ymk1aGJtUnlZVUJyWVd4aVpTNWpieTVwWkNJc0luWmxjbk5wYjI0aU9pSjJNU0lzSW5OMVluTmpjbWx3ZEdsdmJsUnBaWElpT2lKVmJteHBiV2wwWldRaWZTeDdJbk4xWW5OamNtbGlaWEpVWlc1aGJuUkViMjFoYVc0aU9pSnJZV3hpWlM1amJ5NXBaQ0lzSW01aGJXVWlPaUpUWVd0aGJXOXlRVzV1YjNWdVkyVnRaVzUwSWl3aVkyOXVkR1Y0ZENJNklsd3ZkRnd2YTJGc1ltVXVZMjh1YVdSY0wxTmhhMkZ0YjNKQmJtNXZkVzVqWlcxbGJuUmNMM1l4SWl3aWNIVmliR2x6YUdWeUlqb2libTlpYjI0dVlXNWtjbUZBYTJGc1ltVXVZMjh1YVdRaUxDSjJaWEp6YVc5dUlqb2lkakVpTENKemRXSnpZM0pwY0hScGIyNVVhV1Z5SWpvaVZXNXNhVzFwZEdWa0luMHNleUp6ZFdKelkzSnBZbVZ5VkdWdVlXNTBSRzl0WVdsdUlqb2lhMkZzWW1VdVkyOHVhV1FpTENKdVlXMWxJam9pUVhWMGFHOXlhWHBoZEdsdmJrRlFTU0lzSW1OdmJuUmxlSFFpT2lKY0wzUmNMMnRoYkdKbExtTnZMbWxrWEM5QmRYUm9iM0pwZW1GMGFXOXVRVkJKWEM5Mk1TSXNJbkIxWW14cGMyaGxjaUk2SW0xMWFHRnRiV0ZrTG1ScFlXNXBRR3RoYkdKbExtTnZMbWxrSWl3aWRtVnljMmx2YmlJNkluWXhJaXdpYzNWaWMyTnlhWEIwYVc5dVZHbGxjaUk2SWxWdWJHbHRhWFJsWkNKOUxIc2ljM1ZpYzJOeWFXSmxjbFJsYm1GdWRFUnZiV0ZwYmlJNkltdGhiR0psTG1OdkxtbGtJaXdpYm1GdFpTSTZJbEp2YkdVaUxDSmpiMjUwWlhoMElqb2lYQzkwWEM5cllXeGlaUzVqYnk1cFpGd3ZVbTlzWlZ3dmRqRWlMQ0p3ZFdKc2FYTm9aWElpT2lKdGRXaGhiVzFoWkM1b2FXUmhlV0YwZFd4c01VQnJZV3hpWlM1amJ5NXBaQ0lzSW5abGNuTnBiMjRpT2lKMk1TSXNJbk4xWW5OamNtbHdkR2x2YmxScFpYSWlPaUpWYm14cGJXbDBaV1FpZlN4N0luTjFZbk5qY21saVpYSlVaVzVoYm5SRWIyMWhhVzRpT2lKcllXeGlaUzVqYnk1cFpDSXNJbTVoYldVaU9pSk5iMlIxYkdWQlVFa2lMQ0pqYjI1MFpYaDBJam9pWEM5MFhDOXJZV3hpWlM1amJ5NXBaRnd2VFc5a2RXeGxRVkJKWEM5Mk1TSXNJbkIxWW14cGMyaGxjaUk2SW0xMWFHRnRiV0ZrTG1ScFlXNXBRR3RoYkdKbExtTnZMbWxrSWl3aWRtVnljMmx2YmlJNkluWXhJaXdpYzNWaWMyTnlhWEIwYVc5dVZHbGxjaUk2SWxWdWJHbHRhWFJsWkNKOUxIc2ljM1ZpYzJOeWFXSmxjbFJsYm1GdWRFUnZiV0ZwYmlJNkltdGhiR0psTG1OdkxtbGtJaXdpYm1GdFpTSTZJbFZ6WlhKUWNtOW1hV3hsUVZCSklpd2lZMjl1ZEdWNGRDSTZJbHd2ZEZ3dmEyRnNZbVV1WTI4dWFXUmNMMVZ6WlhKUWNtOW1hV3hsUVZCSlhDOTJNU0lzSW5CMVlteHBjMmhsY2lJNkltMTFhR0Z0YldGa0xtUnBZVzVwUUd0aGJHSmxMbU52TG1sa0lpd2lkbVZ5YzJsdmJpSTZJbll4SWl3aWMzVmljMk55YVhCMGFXOXVWR2xsY2lJNklsVnViR2x0YVhSbFpDSjlMSHNpYzNWaWMyTnlhV0psY2xSbGJtRnVkRVJ2YldGcGJpSTZJbXRoYkdKbExtTnZMbWxrSWl3aWJtRnRaU0k2SWxOaGEyRnRiM0pKYm1ObGJuUnBkbVVpTENKamIyNTBaWGgwSWpvaVhDOTBYQzlyWVd4aVpTNWpieTVwWkZ3dlUyRnJZVzF2Y2tsdVkyVnVkR2wyWlZ3dmRqRWlMQ0p3ZFdKc2FYTm9aWElpT2lKdWIySnZiaTVoYm1SeVlVQnJZV3hpWlM1amJ5NXBaQ0lzSW5abGNuTnBiMjRpT2lKMk1TSXNJbk4xWW5OamNtbHdkR2x2YmxScFpYSWlPaUpWYm14cGJXbDBaV1FpZlN4N0luTjFZbk5qY21saVpYSlVaVzVoYm5SRWIyMWhhVzRpT2lKcllXeGlaUzVqYnk1cFpDSXNJbTVoYldVaU9pSlRZV3RoYlc5eVFtVnVaV1pwZEhNaUxDSmpiMjUwWlhoMElqb2lYQzkwWEM5cllXeGlaUzVqYnk1cFpGd3ZVMkZyWVcxdmNrSmxibVZtYVhSelhDOTJNU0lzSW5CMVlteHBjMmhsY2lJNkltNXZZbTl1TG1GdVpISmhRR3RoYkdKbExtTnZMbWxrSWl3aWRtVnljMmx2YmlJNkluWXhJaXdpYzNWaWMyTnlhWEIwYVc5dVZHbGxjaUk2SWxWdWJHbHRhWFJsWkNKOUxIc2ljM1ZpYzJOeWFXSmxjbFJsYm1GdWRFUnZiV0ZwYmlJNkltdGhiR0psTG1OdkxtbGtJaXdpYm1GdFpTSTZJa1JoZVU5bVppSXNJbU52Ym5SbGVIUWlPaUpjTDNSY0wydGhiR0psTG1OdkxtbGtYQzlFWVhsUFptWmNMM1l4SWl3aWNIVmliR2x6YUdWeUlqb2liWFZvWVcxdFlXUXVhR2xrWVhsaGRIVnNiREZBYTJGc1ltVXVZMjh1YVdRaUxDSjJaWEp6YVc5dUlqb2lkakVpTENKemRXSnpZM0pwY0hScGIyNVVhV1Z5SWpvaVZXNXNhVzFwZEdWa0luMHNleUp6ZFdKelkzSnBZbVZ5VkdWdVlXNTBSRzl0WVdsdUlqb2lhMkZzWW1VdVkyOHVhV1FpTENKdVlXMWxJam9pUjJ4dlltRnNMVUYxZEdobGJuUnBZMkYwYVc5dUlpd2lZMjl1ZEdWNGRDSTZJbHd2ZEZ3dmEyRnNZbVV1WTI4dWFXUmNMMkYxZEdobGJuUnBZMkYwYVc5dVhDOTJNU0lzSW5CMVlteHBjMmhsY2lJNkltMXZhR0Z0YldGa0xtRnRhWEp5ZFdScGJrQnJZV3hpWlM1amJ5NXBaQ0lzSW5abGNuTnBiMjRpT2lKMk1TSXNJbk4xWW5OamNtbHdkR2x2YmxScFpYSWlPaUpWYm14cGJXbDBaV1FpZlN4N0luTjFZbk5qY21saVpYSlVaVzVoYm5SRWIyMWhhVzRpT2lKcllXeGlaUzVqYnk1cFpDSXNJbTVoYldVaU9pSk9iM1JwWm1sallYUnBiMjRpTENKamIyNTBaWGgwSWpvaVhDOTBYQzlyWVd4aVpTNWpieTVwWkZ3dlRtOTBhV1pwWTJGMGFXOXVYQzkyTVNJc0luQjFZbXhwYzJobGNpSTZJbkpwZW10cFlXNWhibVJoTG5CeVlXUnBiR3hoYUVCcllXeGlaUzVqYnk1cFpDSXNJblpsY25OcGIyNGlPaUoyTVNJc0luTjFZbk5qY21sd2RHbHZibFJwWlhJaU9pSlZibXhwYldsMFpXUWlmU3g3SW5OMVluTmpjbWxpWlhKVVpXNWhiblJFYjIxaGFXNGlPaUpyWVd4aVpTNWpieTVwWkNJc0ltNWhiV1VpT2lKQmNIQnliM1poYkVGUVNTSXNJbU52Ym5SbGVIUWlPaUpjTDNSY0wydGhiR0psTG1OdkxtbGtYQzlCY0hCeWIzWmhiRUZRU1Z3dmRqRWlMQ0p3ZFdKc2FYTm9aWElpT2lKdGRXaGhiVzFoWkM1a2FXRnVhVUJyWVd4aVpTNWpieTVwWkNJc0luWmxjbk5wYjI0aU9pSjJNU0lzSW5OMVluTmpjbWx3ZEdsdmJsUnBaWElpT2lKVmJteHBiV2wwWldRaWZWMHNJbkJsY20xcGRIUmxaRWxRSWpvaUlpd2lhV0YwSWpveE5qTXhOell5TlRVd0xDSnFkR2tpT2lKbVlURmhaRGRtWVMwM1l6bG1MVFJsTW1NdE9UVmtZaTAzWXpVNU5UbGpOVFF6TUdVaWZRPT0uWG04WDJNY3BVaS1rN1VZQ3lCdHFTU3NmaUtXclI3eHBUX0RnVzVrc25yNzBHU2N4TFltWU1KQXRLWlF4RjZBbWVkUjFqQXNlMzg0SWxtdHQzTDZvUjdDUmlMRUctdXIzcUpCOVZEY3FJLU5sRWJyWXJ6aGVreDVGS2VZMmdRNnNDcS00ekFvOUxzNklGNmtzeTZUNThaRll3TllrNTVPWW9JUnIzQnRHeWVZZjVaeDdJLU4wcnRqWDRiZlFyZG5uWFBHY2VVRHFBMS1aSml1MmNjdUpqaWdZUmFEanhIakVqQWZOZ0xEMVpVcVZ3WXhtUEY1T0xEYjhtTTU5aHJZdXc0RTRzcWNBeVlNeEJWYkhsbHh0WE4xYm5TZjFBN1ZKbktPeTVJdmFmSHpoU1F4WTZCS01VbnQzVURXbGVHaWIxbFZIZ3pJM0QwNmxZdkUzUGo1dE13PT1cIjtcclxuXHJcbmV4cG9ydCB7XHJcbiAgVE9LRU4sXHJcbiAgQVBJX1VSTCxcclxuICBBUElfVVNFUixcclxuICBBUElfTUFTVEVSLFxyXG4gIEFQSV9WSVNJVF9QTEFOLFxyXG4gIEFQSV9WSVNJVF9VTlBMQU4sXHJcbiAgQVBJX1ZJU0lUX1NQUkVBRElORyxcclxuICBBUElfV09SS19WSVNJVCxcclxuICBBUElfQ0FMRU5EQVJfUFJPR1JBTSxcclxuICBBUElfQ0FMRU5EQVJfUFJPTU8sXHJcbiAgQVBJX0FOTk9VTkNFTUVOVCxcclxuICBBUElfSU5DRU5USVZFLFxyXG4gIEFQSV9CRU5FRklULFxyXG4gIEFQSV9BUFBST1ZBTCxcclxufTtcclxuIiwiaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCB7XHJcbiAgVE9LRU4sXHJcbiAgQVBJX1VSTCxcclxuICBBUElfVVNFUixcclxuICBBUElfTUFTVEVSLFxyXG4gIEFQSV9WSVNJVF9QTEFOLFxyXG4gIEFQSV9WSVNJVF9VTlBMQU4sXHJcbiAgQVBJX1ZJU0lUX1NQUkVBRElORyxcclxuICBBUElfV09SS19WSVNJVCxcclxuICBBUElfQ0FMRU5EQVJfUFJPTU8sXHJcbiAgQVBJX0NBTEVOREFSX1BST0dSQU0sXHJcbiAgQVBJX0FOTk9VTkNFTUVOVCxcclxuICBBUElfSU5DRU5USVZFLFxyXG4gIEFQSV9CRU5FRklULFxyXG4gIEFQSV9BUFBST1ZBTCxcclxufSBmcm9tIFwiLi9jb25zdGFudFwiO1xyXG5cclxudmFyIG5vdyA9IG5ldyBEYXRlKCk7XHJcbnZhciBkYXRlID0gbm93LmdldERhdGUoKTtcclxudmFyIG1vbnRoID0gbm93LmdldE1vbnRoKCkgKyAxO1xyXG52YXIgeWVhciA9IG5vdy5nZXRGdWxsWWVhcigpO1xyXG5cclxuZnVuY3Rpb24gY29tcGFyZShhLCBiKSB7XHJcbiAgaWYgKGEubm9tb3IgPCBiLm5vbW9yKSB7XHJcbiAgICByZXR1cm4gLTE7XHJcbiAgfVxyXG4gIGlmIChhLm5vbW9yID4gYi5ub21vcikge1xyXG4gICAgcmV0dXJuIDE7XHJcbiAgfVxyXG4gIHJldHVybiAwO1xyXG59XHJcblxyXG4vLyBVU0VSID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5jb25zdCBnZXRNZW51ID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiZGV2XCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInByb2R1Y3Rpb25cIik7XHJcbiAgfVxyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgKyBBUElfVVNFUiArIGAvVXNlci9HZXRNZW51P3VzZXJuYW1lPSR7dXNlckRhdGEuZW1haWx9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0QXV0aCA9ICh1c2VyRGF0YSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgKyBBUElfVVNFUiArIGAvVXNlci9HZXRBdXRob3JpemU/dXNlcm5hbWU9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBvbkxvZ2luID0gKHZhbHVlcykgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVVNFUiArXHJcbiAgICAgIGAvVXNlci9Mb2dpbj91c2VybmFtZT0ke3ZhbHVlcy51c2VybmFtZX0mJnBhc3N3b3JkPSR7dmFsdWVzLnBhc3N3b3JkfWAsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIHNldFdyb25nVXNlcih0cnVlKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgcG9zdENoYW5nZVBhc3MgPSAoZGF0YSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIHJldHVybiBmZXRjaChBUElfVVJMICsgQVBJX1VTRVIgKyBcIi9Vc2VyL0NoYW5nZVBhc3N3b3JkXCIsIHtcclxuICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGZvcmdvdFBhc3N3b3JkID0gKGVtYWlsKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKEFQSV9VUkwgKyBBUElfVVNFUiArIGAvVXNlci9Gb3Jnb3RQYXNzd29yZD9lbWFpbD0ke2VtYWlsfWAsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgIH0sXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8vIE1BU1RFUiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5jb25zdCBnZXRQb3NtID0gKCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChBUElfVVJMICsgQVBJX01BU1RFUiArIGAvTWFzdGVyRGF0YUxva2FsL0dldEFsbERpc3BsYXlQcm9ncmFtYCwge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgfSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UHJvZHVjdFNlYXJjaCA9IChzZWFyY2gpID0+IHtcclxuICByZXR1cm4gZmV0Y2goQVBJX1VSTCArIEFQSV9NQVNURVIgKyBgL01hc3RlckRhdGEvR2V0UHJvZHVrTGlrZS8ke3NlYXJjaH1gLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRQcm9kdWN0QnlKZW5pc0NoYW5uZWwgPSAoamVuaXNDaGFubmVsSWQpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX01BU1RFUiArXHJcbiAgICAgIGAvTWFzdGVyRGF0YUxva2FsL0dldFByb2R1a0plbmlzQ2hhbm5lbEJ5LyR7amVuaXNDaGFubmVsSWR9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UHJvZHVjdEF2Z1NhbGVzID0gKHByb2R1Y3RDb2RlLCBvdXRsZXRDb2RlKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9NQVNURVIgK1xyXG4gICAgICBgL01hc3RlckRhdGEvR2V0QXZnU2FsZXMzMERheXNCeU91dGxldEFuZFByb2R1Y3Q/cHJvZHVjdENvZGU9JHtwcm9kdWN0Q29kZX0mb3V0bGV0Q29kZT0ke291dGxldENvZGV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5jb25zdCBnZXRIbmFBdmcgPSAocHJvZHVjdENvZGUsIG91dGxldENvZGUpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX01BU1RFUiArXHJcbiAgICAgIGAvTWFzdGVyRGF0YUxva2FsL0dldEhuYUFuZEF2Z1NhbGVzQnkvJHtwcm9kdWN0Q29kZX0vJHtvdXRsZXRDb2RlfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFNlYXJjaEplbmlzQ2hhbm5lbCA9ICh1c2VyRGF0YSwgc2VhcmNoLCBtb2R1bCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfTUFTVEVSICtcclxuICAgICAgYC9NYXN0ZXJEYXRhTG9rYWwvR2V0SmVuaXNDaGFubmVsQnk/dXNlcm5hbWU9JHt1c2VyRGF0YS51c2VybmFtZX0mdGVrcz0ke3NlYXJjaH0mbW9kdWw9JHttb2R1bH1gLFxyXG4gICAgLy8gYC9NYXN0ZXJEYXRhTG9rYWwvR2V0SmVuaXNDaGFubmVsQnk/dXNlcm5hbWU9YWJ1YmFrYXImdGVrcz0ke3NlYXJjaH0mbW9kdWw9JHttb2R1bH1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U2VhcmNoT3V0bGV0ID0gKGplbmlzQ2hhbm5lbElkLCB1c2VyRGF0YSwgc2VhcmNoKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9NQVNURVIgK1xyXG4gICAgICBgL01hc3RlckRhdGFMb2thbC9HZXRPdXRsZXRCeS8ke2plbmlzQ2hhbm5lbElkfT91c2VybmFtZT0ke3VzZXJEYXRhLnVzZXJuYW1lfSZ0ZWtzPSR7c2VhcmNofWAsXHJcbiAgICAvLyBgL01hc3RlckRhdGFMb2thbC9HZXRPdXRsZXRCeS8ke2plbmlzQ2hhbm5lbElkfT91c2VybmFtZT1hYnViYWthciZ0ZWtzPSR7c2VhcmNofWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldEJyYW5kID0gKCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChBUElfVVJMICsgQVBJX01BU1RFUiArIGAvTWFzdGVyRGF0YUxva2FsL0dldEFsbEJyYW5kYCwge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgfSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0S29udGVuV29ya1Zpc2l0ID0gKCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgKyBBUElfTUFTVEVSICsgYC9NYXN0ZXJEYXRhTG9rYWwvR2V0QWxsS29udGVuV29ya1Zpc2l0YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U2FsZXNUYXJnZXRTTVIgPSAodXNlckRhdGEsIG1vbnRoLCB5ZWFyKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9NQVNURVIgK1xyXG4gICAgICBgL01hc3RlckRhdGFMb2thbC9HZXRTYWxlc1RhcmdldEJ5LyR7eWVhcn0vJHttb250aH0/dXNlcm5hbWVTbXI9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRTYWxlc1RhcmdldDc1U01SID0gKHVzZXJEYXRhLCBtb250aCwgeWVhcikgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfTUFTVEVSICtcclxuICAgICAgYC9NYXN0ZXJEYXRhTG9rYWwvR2V0U2FsZXNUYXJnZXQ3NVBlcnNlbkJ5LyR7eWVhcn0vJHttb250aH0/dXNlcm5hbWVTbXI9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBwb3N0UHJvZmlsZVBpYyA9ICh1c2VyRGF0YSwgZmlsZSkgPT4ge1xyXG4gIGNvbnN0IGZvcm1kYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgZm9ybWRhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX01BU1RFUiArXHJcbiAgICAgIGAvTWFzdGVyRGF0YUxva2FsL0NoYW5nZVByb2ZpbGVQaWN0dXJlP3VzZXJuYW1lPSR7dXNlckRhdGEudXNlcm5hbWV9JmNyZWF0ZWRCeT1BUEkmdXBkYXRlZEJ5PUFQSWAsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IGZvcm1kYXRhLFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYmFsaWthbiBpbnNlcmZpbGVcIiwgZGF0YSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHZpZXdQcm9maWxlUGljID0gKHVzZXJuYW1lKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9NQVNURVIgK1xyXG4gICAgICBgL01hc3RlckRhdGFMb2thbC9WaWV3UHJvZmlsZVBpY3R1cmU/dXNlcm5hbWU9JHt1c2VybmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gNDA0KSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmJsb2IoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICB2YXIgb3V0c2lkZSA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZGF0YSk7XHJcbiAgICAgIHJldHVybiBvdXRzaWRlO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHZpZXdPdXRsZXRDbGFzcyA9IChvdXRsZXRJRCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgKyBBUElfTUFTVEVSICsgYC9NYXN0ZXJEYXRhTG9rYWwvR2V0T3V0bGV0Q2xhc3NpZmljYXRpb24vMzMyODA4NWAsXHJcbiAgICAvLyBgL01hc3RlckRhdGFMb2thbC9HZXRPdXRsZXRDbGFzc2lmaWNhdGlvbi8ke291dGxldElEfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gNDA0KSB7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKFxyXG4gICAgICAgICAgQVBJX1VSTCArIEFQSV9NQVNURVIgKyBgL01hc3RlckRhdGFMb2thbC9WaWV3SW1hZ2UvJHtkYXRhLmlkfWAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSA0MDQpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuYmxvYigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHZhciBvdXRzaWRlID0gVVJMLmNyZWF0ZU9iamVjdFVSTChkYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuIG91dHNpZGU7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLy8gVklTSVQgUExBTiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5jb25zdCBnZXRQbGFuTGlzdCA9ICh1c2VyRGF0YSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfUExBTiArXHJcbiAgICAgIGAvQWN0aXZpdHlWaXNpdFBsYW4vR2V0QWN0aXZpdHlWaXNpdFBsYW5CeT91c2VybmFtZT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHZhciByZXMgPSBkYXRhLmZpbHRlcigodmFsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHZhbC5pc0NoZWNrT3V0ID09PSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiByZXM7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UGxhbklkID0gKGlkKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9QTEFOICtcclxuICAgICAgYC9NYXN0ZXJWaXNpdFBsYW4vR2V0TWFzdGVyVmlzaXRQbGFuQnk/cGFyYW1ldGVyPSR7eWVhcn0tJHttb250aH0tJHtkYXRlfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChwbGFuTGlzdCkgPT4ge1xyXG4gICAgICBpZiAocGxhbkxpc3QubGVuZ3RoICE9IDApIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goXHJcbiAgICAgICAgICBBUElfVVJMICtcclxuICAgICAgICAgICAgQVBJX1ZJU0lUX1BMQU4gK1xyXG4gICAgICAgICAgICBgL01hc3RlclZpc2l0UGxhbi9HZXRNYXN0ZXJWaXNpdFBsYW5CeUlkLyR7aWR9YCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdmFyIHNhbWVQbGFuID0gcGxhbkxpc3QuZmlsdGVyKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gdmFsLmlkID09PSBkYXRhLmlkO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7IHNhbWVQbGFuLCBkYXRhIH07XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBwbGFuTGlzdDtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBsYW5IaXN0b3J5ID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9QTEFOICtcclxuICAgICAgYC9BY3Rpdml0eVZpc2l0UGxhbi9HZXRBY3Rpdml0eVZpc2l0UGxhbkJ5P3VzZXJuYW1lPSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgdmFyIHJlcyA9IGRhdGEuZmlsdGVyKCh2YWwpID0+IHtcclxuICAgICAgICByZXR1cm4gdmFsLmlzQ2hlY2tPdXQgPT09IHRydWU7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcmVzO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHN1Ym1pdFZpc2l0UGxhbiA9IChkYXRhKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArIEFQSV9WSVNJVF9QTEFOICsgXCIvQWN0aXZpdHlWaXNpdFBsYW4vU2F2ZUFsbEFjdGl2aXR5VmlzaXRQbGFuXCIsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYmFpa2FuIHNhdmVhbGxcIiwgZGF0YSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHN1Ym1pdFZpc2l0UGxhbkRwb3NtID0gKGRwb3NtLCBmaWxlKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coZHBvc20sIGZpbGUpO1xyXG4gIGNvbnN0IGZvcm1kYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9QTEFOICtcclxuICAgICAgXCIvQWN0aXZpdHlWaXNpdFBsYW5EUE9TTS9TYXZlQWN0aXZpdHlWaXNpdFBsYW5EcG9zbVwiLFxyXG4gICAge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkcG9zbSksXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJiYWxpa2FuIHBzb21cIiwgZGF0YSk7XHJcbiAgICAgIGZvcm1kYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XHJcbiAgICAgIHJldHVybiBmZXRjaChcclxuICAgICAgICBBUElfVVJMICtcclxuICAgICAgICAgIEFQSV9WSVNJVF9QTEFOICtcclxuICAgICAgICAgIGAvQWN0aXZpdHlWaXNpdFBsYW5EUE9TTS9JbnNlcnRGaWxlQnk/aWQ9JHtkYXRhLmlkfSZuYW1hRmlsZT0ke2RhdGEubmFtYUZpbGV9YCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IGZvcm1kYXRhLFxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImJhbGlrYW4gaW5zZXJmaWxlXCIsIGRhdGEpO1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRJbnZvaWNlRGF0YSA9ICh2aXNpdFBsYW5JZCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfUExBTiArXHJcbiAgICAgIGAvQWN0aXZpdHlWaXNpdFBsYW4vR2V0UHJvZHVrU3VyYXRQZXNhbmFuLyR7dmlzaXRQbGFuSWR9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0SW52b2ljZURhdGFQb3NtID0gKHZpc2l0UGxhbklkKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9QTEFOICtcclxuICAgICAgYC9BY3Rpdml0eVZpc2l0UGxhbkRQT1NNL0dldEFjdGl2aXR5VmlzaXRQbGFuRFBvc21CeS8ke3Zpc2l0UGxhbklkfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHZhciBzb3J0RGF0YSA9IGRhdGEuc29ydChjb21wYXJlKTtcclxuICAgICAgcmV0dXJuIHNvcnREYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHZpZXdGaWxlID0gKGlkKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArIEFQSV9WSVNJVF9QTEFOICsgYC9BY3Rpdml0eVZpc2l0UGxhbkRQT1NNL1ZpZXdGaWxlLyR7aWR9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5ibG9iKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgdmFyIG91dHNpZGUgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGRhdGEpO1xyXG4gICAgICByZXR1cm4gb3V0c2lkZTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRQbGFuTW9udGhseUhpc3RvcnkgPSAodXNlckRhdGEpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1BMQU4gK1xyXG4gICAgICBgL0FjdGl2aXR5VmlzaXRQbGFuL0dldEhpc3RvcnlBY3Rpdml0eVZpc2l0UGxhbkJ5P3VzZXJuYW1lPSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgZGF0YS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgdmFyIGRhdGVBID0gbmV3IERhdGUoYS50YW5nZ2FsKSxcclxuICAgICAgICAgIGRhdGVCID0gbmV3IERhdGUoYi50YW5nZ2FsKTtcclxuICAgICAgICByZXR1cm4gZGF0ZUIgLSBkYXRlQTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldE1hc3RlclZpc2l0UGxhbiA9ICh1c2VyRGF0YSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfUExBTiArXHJcbiAgICAgIGAvTWFzdGVyVmlzaXRQbGFuL0dldE1hc3RlclZpc2l0UGxhbkJ5VXNlcm5hbWU/dXNlcm5hbWU9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBkYXRhLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICB2YXIgZGF0ZUEgPSBuZXcgRGF0ZShhLnRhbmdnYWwpLFxyXG4gICAgICAgICAgZGF0ZUIgPSBuZXcgRGF0ZShiLnRhbmdnYWwpO1xyXG4gICAgICAgIHJldHVybiBkYXRlQiAtIGRhdGVBO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0QXBwcm92YWwgPSAodXNlckRhdGEpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1BMQU4gK1xyXG4gICAgICAvLyBgL0FjdGl2aXR5VmlzaXRQbGFuL0dldERvY3VtZW50VmlzaXRGb3JBcHByb3ZhbC8ke3VzZXJEYXRhLmtvZGVDYWJhbmd9YCxcclxuICAgICAgYC9BY3Rpdml0eVZpc2l0UGxhbi9HZXREb2N1bWVudFZpc2l0Rm9yQXBwcm92YWwvMzJgLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBkYXRhLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICB2YXIgZGF0ZUEgPSBuZXcgRGF0ZShhLnRhbmdnYWwpLFxyXG4gICAgICAgICAgZGF0ZUIgPSBuZXcgRGF0ZShiLnRhbmdnYWwpO1xyXG4gICAgICAgIHJldHVybiBkYXRlQiAtIGRhdGVBO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UmV2aXNlUGxhbkxpc3RTbXIgPSAodXNlckRhdGEpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9tLW9uZS5rYWxiZS5jby5pZDo4MjQzL3Qva2FsYmUuY28uaWQvU2FrYW1vckFjdGl2aXR5VmlzaXRQbGFuL3YxL2FwaS9BY3Rpdml0eVZpc2l0UGxhbi9HZXRBY3Rpdml0eVZpc2l0UGxhbkJ5U3RhdHVzL1JldmlzZT91c2VybmFtZT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGRhdGEuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHZhciBkYXRlQSA9IG5ldyBEYXRlKGEudGFuZ2dhbCksXHJcbiAgICAgICAgICBkYXRlQiA9IG5ldyBEYXRlKGIudGFuZ2dhbCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGVCIC0gZGF0ZUE7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBkZWxldGVNYXN0ZXJQbGFuU01SID0gKGlkKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArIEFQSV9WSVNJVF9QTEFOICsgYC9NYXN0ZXJWaXNpdFBsYW4vRGVsZXRlTWFzdGVyVmlzaXRQbGFuLyR7aWR9YCxcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBzYXZlTWFzdGVyUGxhblZpc2l0ID0gKGRhdGEpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICsgQVBJX1ZJU0lUX1BMQU4gKyBcIi9NYXN0ZXJWaXNpdFBsYW4vU2F2ZUFjdGl2aXR5VmlzaXRQbGFuXCIsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYmFpa2FuIHNhdmVhbGxcIiwgZGF0YSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBsYW5CeUlkID0gKGlkKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgYGh0dHBzOi8vbS1vbmUua2FsYmUuY28uaWQ6ODI0My90L2thbGJlLmNvLmlkL1Nha2Ftb3JBY3Rpdml0eVZpc2l0UGxhbi92MS9hcGkvQWN0aXZpdHlWaXNpdFBsYW4vR2V0QWN0aXZpdHlWaXNpdFBsYW5CeUlkLyR7aWR9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlRGF0YVBvc21QbGFuID0gKGlkLCBkcG9zbSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfUExBTiArXHJcbiAgICAgIGAvQWN0aXZpdHlWaXNpdFBsYW5EUE9TTS9BY3Rpdml0eVZpc2l0UGxhbkRQT1NNLyR7aWR9YCxcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkcG9zbSksXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlRGF0YVByb2R1a1BsYW4gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIGBodHRwczovL20tb25lLmthbGJlLmNvLmlkOjgyNDMvdC9rYWxiZS5jby5pZC9TYWthbW9yQWN0aXZpdHlWaXNpdFBsYW4vdjEvYXBpL0FjdGl2aXR5VmlzaXRQbGFuRFByb2R1Y3QvVXBkYXRlQWxsVmlzaXRQbGFuUHJvZHVjdGAsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgaW5zZXJ0RmlsZVBsYW4gPSAoaWQsIGZpbGUpID0+IHtcclxuICBjb25zdCBmb3JtZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICBmb3JtZGF0YS5hcHBlbmQoXCJmaWxlXCIsIGZpbGUpO1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfUExBTiArXHJcbiAgICAgIGAvQWN0aXZpdHlWaXNpdFBsYW5EUE9TTS9JbnNlcnRGaWxlQnk/aWQ9JHtpZH0mbmFtYUZpbGU9JHtmaWxlLm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IGZvcm1kYXRhLFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiYmFsaWthbiBpbnNlcmZpbGVcIiwgZGF0YSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFZpc2l0UGxhblByb2R1Y3QgPSAoaWQpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1BMQU4gK1xyXG4gICAgICBgL0FjdGl2aXR5VmlzaXRQbGFuRFByb2R1Y3QvR2V0VmlzaXRQbGFuUHJvZHVjdEJ5P3Zpc2l0UGxhbklkPSR7aWR9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLy8gVklTSVQgVU5QTEFOID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5jb25zdCBzdWJtaXRWaXNpdFVucGxhbiA9IChkYXRhKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9VTlBMQU4gK1xyXG4gICAgICBgL1Nha2Ftb3JBY3Rpdml0eVZpc2l0VW5QbGFuL1NhdmVBbGxBY3Rpdml0eVZpc2l0VW5QbGFuYCxcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJiYWlrYW4gc2F2ZWFsbFwiLCBkYXRhKTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3Qgc3VibWl0VmlzaXRVbnBsYW5EcG9zbSA9IChkcG9zbSwgZmlsZSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKGRwb3NtLCBmaWxlKTtcclxuICBjb25zdCBmb3JtZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfVU5QTEFOICtcclxuICAgICAgYC9TYWthbW9yQWN0aXZpdHlWaXNpdFVuUGxhbkRQT1NNL1NhdmVBY3Rpdml0eVZpc2l0VW5QbGFuRHBvc21gLFxyXG4gICAge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkcG9zbSksXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJiYWxpa2FuIHBzb21cIiwgZGF0YSk7XHJcbiAgICAgIGZvcm1kYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XHJcbiAgICAgIHJldHVybiBmZXRjaChcclxuICAgICAgICBBUElfVVJMICtcclxuICAgICAgICAgIEFQSV9WSVNJVF9VTlBMQU4gK1xyXG4gICAgICAgICAgYC9TYWthbW9yQWN0aXZpdHlWaXNpdFVuUGxhbkRQT1NNL0luc2VydEZpbGVCeT9pZD0ke2RhdGEuaWR9Jm5hbWFGaWxlPSR7ZGF0YS5uYW1hRmlsZX1gLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogZm9ybWRhdGEsXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFsaWthbiBpbnNlcmZpbGVcIiwgZGF0YSk7XHJcbiAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldEludm9pY2VEYXRhVW5wbGFuID0gKHZpc2l0UGxhbklkKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9VTlBMQU4gK1xyXG4gICAgICBgL1Nha2Ftb3JBY3Rpdml0eVZpc2l0VW5QbGFuL0dldFByb2R1a1N1cmF0UGVzYW5hbi8ke3Zpc2l0UGxhbklkfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFVucGxhbkJ5SWQgPSAoaWQpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9tLW9uZS5rYWxiZS5jby5pZDo4MjQzL3Qva2FsYmUuY28uaWQvU2FrYW1vckFjdGl2aXR5VmlzaXRVblBsYW4vdjEvYXBpL1Nha2Ftb3JBY3Rpdml0eVZpc2l0VW5QbGFuL0dldEFjdGl2aXR5VmlzaXRVblBsYW5CeUlkLyR7aWR9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0SW52b2ljZURhdGFQb3NtVW5wbGFuID0gKHZpc2l0VW5wbGFuSWQpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1VOUExBTiArXHJcbiAgICAgIGAvU2FrYW1vckFjdGl2aXR5VmlzaXRVblBsYW5EUE9TTS9HZXRBY3Rpdml0eVZpc2l0VW5QbGFuRFBvc21CeS8ke3Zpc2l0VW5wbGFuSWR9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgdmFyIHNvcnREYXRhID0gZGF0YS5zb3J0KGNvbXBhcmUpO1xyXG4gICAgICByZXR1cm4gc29ydERhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlRGF0YVBvc21VbnBsYW4gPSAoaWQsIGRwb3NtKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9VTlBMQU4gK1xyXG4gICAgICBgL1Nha2Ftb3JBY3Rpdml0eVZpc2l0VW5QbGFuRFBPU00vQWN0aXZpdHlWaXNpdFVuUGxhbkRQT1NNLyR7aWR9YCxcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkcG9zbSksXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlRGF0YVByb2R1a1VucGxhbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9VTlBMQU4gK1xyXG4gICAgICBgL1Nha2Ftb3JBY3Rpdml0eVZpc2l0VW5QbGFuUHJvZHVjdC9VcGRhdGVBbGxVblBsYW5Qcm9kdWN0YCxcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBpbnNlcnRGaWxlVW5wbGFuID0gKGlkLCBmaWxlKSA9PiB7XHJcbiAgY29uc3QgZm9ybWRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgZm9ybWRhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1VOUExBTiArXHJcbiAgICAgIGAvU2FrYW1vckFjdGl2aXR5VmlzaXRVblBsYW5EUE9TTS9JbnNlcnRGaWxlQnk/aWQ9JHtpZH0mbmFtYUZpbGU9JHtmaWxlLm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IGZvcm1kYXRhLFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYmFsaWthbiBpbnNlcmZpbGVcIiwgZGF0YSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHZpZXdGaWxlVW5wbGFuID0gKGlkKSA9PiB7XHJcbiAgY29uc29sZS5sb2coaWQpO1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfVU5QTEFOICtcclxuICAgICAgYC9TYWthbW9yQWN0aXZpdHlWaXNpdFVuUGxhbkRQT1NNL1ZpZXdGaWxlLyR7aWR9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5ibG9iKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgdmFyIG91dHNpZGUgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGRhdGEpO1xyXG4gICAgICByZXR1cm4gb3V0c2lkZTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRVbnBsYW5Nb250aGx5SGlzdG9yeSA9ICh1c2VyRGF0YSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfVU5QTEFOICtcclxuICAgICAgYC9TYWthbW9yQWN0aXZpdHlWaXNpdFVuUGxhbi9HZXRIaXN0b3J5QWN0aXZpdHlWaXNpdFVuUGxhbkJ5P3VzZXJuYW1lPSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgZGF0YS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgdmFyIGRhdGVBID0gbmV3IERhdGUoYS50YW5nZ2FsKSxcclxuICAgICAgICAgIGRhdGVCID0gbmV3IERhdGUoYi50YW5nZ2FsKTtcclxuICAgICAgICByZXR1cm4gZGF0ZUIgLSBkYXRlQTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFVucGxhbk5lYXJNZSA9ICgpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICsgQVBJX01BU1RFUiArIGAvTWFzdGVyRGF0YS9HZXRPdXRsZXROZWFyTWUvLTYuMTIzNDU2LzEyLjk4NzY1NGAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFJldmlzZVVuUGxhbkxpc3RTbXIgPSAodXNlckRhdGEpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9tLW9uZS5rYWxiZS5jby5pZDo4MjQzL3Qva2FsYmUuY28uaWQvU2FrYW1vckFjdGl2aXR5VmlzaXRVblBsYW4vdjEvYXBpL1Nha2Ftb3JBY3Rpdml0eVZpc2l0VW5QbGFuL0dldEFjdGl2aXR5VmlzaXRVblBsYW5CeVN0YXR1cy9yZXZpc2U/dXNlcm5hbWU9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBkYXRhLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICB2YXIgZGF0ZUEgPSBuZXcgRGF0ZShhLnRhbmdnYWwpLFxyXG4gICAgICAgICAgZGF0ZUIgPSBuZXcgRGF0ZShiLnRhbmdnYWwpO1xyXG4gICAgICAgIHJldHVybiBkYXRlQiAtIGRhdGVBO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0VW5QbGFuUHJvZHVjdHMgPSAoaWQpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1VOUExBTiArXHJcbiAgICAgIGAvU2FrYW1vckFjdGl2aXR5VmlzaXRVblBsYW5Qcm9kdWN0L0dldFVuUGxhblByb2R1Y3RzQnk/dW5QbGFuSWQ9JHtpZH1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBTUFJFQURJTkcgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmNvbnN0IHN1Ym1pdFZpc2l0U3ByZWFkaW5nID0gKGRhdGEpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1NQUkVBRElORyArXHJcbiAgICAgIGAvQWN0aXZpdHlTcHJlYWRpbmcvU2F2ZUFsbEFjdGl2aXR5U3ByZWFkaW5nYCxcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJiYWlrYW4gc2F2ZWFsbFwiLCBkYXRhKTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3Qgc3VibWl0VmlzaXRTcHJlYWRpbmdEcG9zbSA9IChkcG9zbSwgZmlsZSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKGRwb3NtLCBmaWxlKTtcclxuICBjb25zdCBmb3JtZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfU1BSRUFESU5HICtcclxuICAgICAgYC9BY3Rpdml0eVNwcmVhZGluZ0RQT1NNL1NhdmVBY3Rpdml0eVNwcmVhZGluZ0Rwb3NtYCxcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZHBvc20pLFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYmFsaWthbiBwc29tXCIsIGRhdGEpO1xyXG4gICAgICBmb3JtZGF0YS5hcHBlbmQoXCJmaWxlXCIsIGZpbGUpO1xyXG4gICAgICByZXR1cm4gZmV0Y2goXHJcbiAgICAgICAgQVBJX1VSTCArXHJcbiAgICAgICAgICBBUElfVklTSVRfU1BSRUFESU5HICtcclxuICAgICAgICAgIGAvQWN0aXZpdHlTcHJlYWRpbmdEUE9TTS9JbnNlcnRGaWxlQnk/aWQ9JHtkYXRhLmlkfSZuYW1hRmlsZT0ke2RhdGEubmFtYUZpbGV9YCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IGZvcm1kYXRhLFxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImJhbGlrYW4gaW5zZXJmaWxlXCIsIGRhdGEpO1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRJbnZvaWNlRGF0YVNwcmVhZGluZyA9ICh2aXNpdFBsYW5JZCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfU1BSRUFESU5HICtcclxuICAgICAgYC9BY3Rpdml0eVNwcmVhZGluZy9HZXRQcm9kdWtTdXJhdFBlc2FuYW4vJHt2aXNpdFBsYW5JZH1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRJbnZvaWNlRGF0YVBvc21TcHJlYWRpbmcgPSAodmlzaXRVbnBsYW5JZCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfU1BSRUFESU5HICtcclxuICAgICAgYC9BY3Rpdml0eVNwcmVhZGluZ0RQT1NNL0dldEFjdGl2aXR5VmlzaXRVblBsYW5EUG9zbUJ5LyR7dmlzaXRVbnBsYW5JZH1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICB2YXIgc29ydERhdGEgPSBkYXRhLnNvcnQoY29tcGFyZSk7XHJcbiAgICAgIHJldHVybiBzb3J0RGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCB2aWV3RmlsZVNwcmVhZGluZyA9IChpZCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgKyBBUElfVklTSVRfU1BSRUFESU5HICsgYC9BY3Rpdml0eVNwcmVhZGluZ0RQT1NNL1ZpZXdGaWxlLyR7aWR9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5ibG9iKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgdmFyIG91dHNpZGUgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGRhdGEpO1xyXG4gICAgICByZXR1cm4gb3V0c2lkZTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRTcHJlYWRpbmdNb250aGx5SGlzdG9yeSA9ICh1c2VyRGF0YSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfU1BSRUFESU5HICtcclxuICAgICAgYC9BY3Rpdml0eVNwcmVhZGluZy9HZXRIaXN0b3J5QWN0aXZpdHlTcHJlYWRpbmdCeT91c2VybmFtZT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGRhdGEuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHZhciBkYXRlQSA9IG5ldyBEYXRlKGEudGFuZ2dhbCksXHJcbiAgICAgICAgICBkYXRlQiA9IG5ldyBEYXRlKGIudGFuZ2dhbCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGVCIC0gZGF0ZUE7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRTcHJlYWRpbmdCeUlkID0gKGlkKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9TUFJFQURJTkcgK1xyXG4gICAgICBgL0FjdGl2aXR5U3ByZWFkaW5nL0dldEFjdGl2aXR5U3ByZWFkaW5nQnlJZC8ke2lkfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFJldmlzZVNwcmVhZGluZ0xpc3RTbXIgPSAodXNlckRhdGEpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9tLW9uZS5rYWxiZS5jby5pZDo4MjQzL3Qva2FsYmUuY28uaWQvU2FrYW1vckFjdGl2aXR5U3ByZWFkaW5nL3YxL2FwaS9BY3Rpdml0eVNwcmVhZGluZy9HZXRBY3Rpdml0eVNwcmVhZGluZ0J5U3RhdHVzL1JldmlzZT91c2VybmFtZT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGRhdGEuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHZhciBkYXRlQSA9IG5ldyBEYXRlKGEudGFuZ2dhbCksXHJcbiAgICAgICAgICBkYXRlQiA9IG5ldyBEYXRlKGIudGFuZ2dhbCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGVCIC0gZGF0ZUE7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVEYXRhUG9zbVNwcmVhZGluZyA9IChpZCwgZHBvc20pID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1NQUkVBRElORyArXHJcbiAgICAgIGAvQWN0aXZpdHlTcHJlYWRpbmdEUE9TTS9BY3Rpdml0eVNwcmVhZGluZ0Rwb3NtLyR7aWR9YCxcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkcG9zbSksXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlRGF0YVByb2R1a1NwcmVhZGluZyA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9TUFJFQURJTkcgK1xyXG4gICAgICBgL0FjdGl2aXR5U3ByZWFkaW5nRFByb2R1Y3QvVXBkYXRlQWxsU3ByZWFkaW5nUHJvZHVjdGAsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgaW5zZXJ0RmlsZVNwcmVhZGluZyA9IChpZCwgZmlsZSkgPT4ge1xyXG4gIGNvbnN0IGZvcm1kYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gIGZvcm1kYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9TUFJFQURJTkcgK1xyXG4gICAgICBgL0FjdGl2aXR5U3ByZWFkaW5nRFBPU00vSW5zZXJ0RmlsZUJ5P2lkPSR7aWR9Jm5hbWFGaWxlPSR7ZmlsZS5uYW1lfWAsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBmb3JtZGF0YSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImJhbGlrYW4gaW5zZXJmaWxlXCIsIGRhdGEpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRTcHJlYWRpbmdQcm9kdWN0ID0gKGlkKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9TUFJFQURJTkcgK1xyXG4gICAgICBgL0FjdGl2aXR5U3ByZWFkaW5nRFByb2R1Y3QvR2V0U3ByZWFkaW5nUHJvZHVjdEJ5P3NwcmVhZGluZ0lkPSR7aWR9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLy8gV09SSyBWSVNJVCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuY29uc3QgZ2V0QWxsV29ya1Zpc2l0ID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9XT1JLX1ZJU0lUICtcclxuICAgICAgYC9BY3Rpdml0eVdvcmtWaXNpdC9HZXRBY3Rpdml0eVdvcmtWaXNpdEJ5P3VzZXJuYW1lPSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0V29ya1Zpc2l0TW9udGhseUhpc3RvcnkgPSAodXNlckRhdGEpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1dPUktfVklTSVQgK1xyXG4gICAgICBgL0FjdGl2aXR5V29ya1Zpc2l0L0dldEhpc3RvcnlBY3Rpdml0eVdvcmtWaXNpdEJ5P3VzZXJuYW1lPSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgZGF0YS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgdmFyIGRhdGVBID0gbmV3IERhdGUoYS50YW5nZ2FsKSxcclxuICAgICAgICAgIGRhdGVCID0gbmV3IERhdGUoYi50YW5nZ2FsKTtcclxuICAgICAgICByZXR1cm4gZGF0ZUIgLSBkYXRlQTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuY29uc3QgZ2V0V29ya1Zpc2l0UmF0aW5nID0gKGlkKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9XT1JLX1ZJU0lUICtcclxuICAgICAgYC9BY3Rpdml0eVdvcmtWaXNpdFJhdGluZy9HZXRBY3Rpdml0eVdvcmtWaXNpdFJhdGluZ0J5LyR7aWR9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3Qgc3VibWl0V29ya1Zpc2l0ID0gKGRhdGEpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICsgQVBJX1dPUktfVklTSVQgKyBcIi9BY3Rpdml0eVdvcmtWaXNpdC9TYXZlQWxsQWN0aXZpdHlXb3JrVmlzaXRcIixcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJiYWlrYW4gc2F2ZWFsbFwiLCBkYXRhKTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0TWFzdGVyV29ya1Zpc2l0ID0gKHVzZXJEYXRhLCBkYXRlKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9XT1JLX1ZJU0lUICtcclxuICAgICAgYC9NYXN0ZXJQbGFuV29ya1Zpc2l0L0dldE1hc3RlclBsYW5Xb3JrVmlzaXRCeS8ke2RhdGV9P3VzZXJuYW1lPSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3Qgc2F2ZU1hc3RlcldvcmtWaXNpdCA9IChkYXRhKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArIEFQSV9XT1JLX1ZJU0lUICsgXCIvTWFzdGVyUGxhbldvcmtWaXNpdC9TYXZlTWFzdGVyUGxhbldvcmtWaXNpdFwiLFxyXG4gICAge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImJhaWthbiBzYXZlYWxsXCIsIGRhdGEpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBkZWxldGVNYXN0ZXJXb3JrVmlzaXQgPSAoaWQpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1dPUktfVklTSVQgK1xyXG4gICAgICBgL01hc3RlclBsYW5Xb3JrVmlzaXQvRGVsZXRlTWFzdGVyUGxhbldvcmtWaXNpdC8ke2lkfWAsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG4vLyBDYWxlbmRhciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuY29uc3QgZ2V0RGF5UHJvbW8gPSAoZGF0ZSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfQ0FMRU5EQVJfUFJPTU8gK1xyXG4gICAgICBgL1Nha2Ftb3JJbmZvUHJvbW8vR2V0SW5mb1Byb21vQnlEYXRlLyR7ZGF0ZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXREYXlQcm9ncmFtID0gKGRhdGUpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX0NBTEVOREFSX1BST0dSQU0gK1xyXG4gICAgICBgL1Nha2Ftb3JLYWxlbmRlclByb2dyYW0vR2V0S2FsZW5kZXJQcm9ncmFtQnlEYXRlLyR7ZGF0ZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRNb250aFByb21vID0gKGRhdGUpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX0NBTEVOREFSX1BST01PICtcclxuICAgICAgYC9TYWthbW9ySW5mb1Byb21vL0dldEluZm9Qcm9tb0J5TW9udGhZZWFyLyR7ZGF0ZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRNb250aFByb2dyYW0gPSAoZGF0ZSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfQ0FMRU5EQVJfUFJPR1JBTSArXHJcbiAgICAgIGAvU2FrYW1vckthbGVuZGVyUHJvZ3JhbS9HZXRLYWxlbmRlclByb2dyYW1CeU1vbnRoWWVhci8ke2RhdGV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLy8gQW5ub3VuY2VtZW50ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5jb25zdCBnZXRBbGxBbm5vdW5jZW1lbnQgPSAoa29kZUNhYmFuZykgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfQU5OT1VOQ0VNRU5UICtcclxuICAgICAgLy8gYC9TYWthbW9yQW5ub3VuY2VtZW50L0dldEFubm91bmNlbWVudEJ5VXNlcj91c2VybmFtZT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICAgIGAvU2FrYW1vckFubm91bmNlbWVudC9HZXRBbm5vdW5jZW1lbnRCeUNhYmFuZy8ke2tvZGVDYWJhbmd9YCxcclxuICAgIC8vIGAvU2FrYW1vckFubm91bmNlbWVudC9HZXRBbm5vdW5jZW1lbnRCeUNhYmFuZy8xNGAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHVwZGF0ZVJlYWRBbm5vdW5jZW1lbnQgPSAoaWQsIGRhdGEpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9tLW9uZS5rYWxiZS5jby5pZDo4MjQzL3Qva2FsYmUuY28uaWQvU2FrYW1vckFubm91bmNlbWVudC92MS9hcGkvU2FrYW1vckFubm91bmNlbWVudC9VcGRhdGVBbm5vdW5jZW1lbnRTdGF0dXMvJHtpZH1gLFxyXG4gICAge1xyXG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLy8gSU5DRU5USVZFID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmNvbnN0IGdldFByb2R1a3RpZml0YXMgPSAodXNlckRhdGEsIG1vbnRoLCB5ZWFyKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9JTkNFTlRJVkUgK1xyXG4gICAgICBgL1Nha2Ftb3JJbmNlbnRpdmUvR2V0UHJvZHVrdGlmaXRhc0J5VXNlclBlcmlvZGUvJHttb250aH0vJHt5ZWFyfT91c2VybmFtZT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuY29uc3QgZ2V0RnJvbnRsaW5lciA9ICh1c2VyRGF0YSwgbW9udGgsIHllYXIpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX0lOQ0VOVElWRSArXHJcbiAgICAgIGAvRnJvbnRsaW5lci9HZXRCeVVzZXJQZXJpb2RlLyR7bW9udGh9LyR7eWVhcn0/dXNlcm5hbWU9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXROb28gPSAodXNlckRhdGEsIG1vbnRoLCB5ZWFyKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9JTkNFTlRJVkUgK1xyXG4gICAgICBgL1RhcmdldE5PTy9HZXRTZWxzTk9PQnlVc2VyUGVyaW9kZS8ke21vbnRofS8ke3llYXJ9P3VzZXJuYW1lPSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0V29ya0RheSA9ICgpID0+IHtcclxuICByZXR1cm4gZmV0Y2goQVBJX1VSTCArIEFQSV9JTkNFTlRJVkUgKyBgL1Nha2Ftb3JJbmNlbnRpdmUvR2V0V29ya2luZ0RheS8wMWAsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgIH0sXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldEtwaUludmVudGl2ZU1vbnRobHlTTVIgPSAodXNlckRhdGEsIGRhdGUpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX0lOQ0VOVElWRSArXHJcbiAgICAgIGAvS3BpSW5jZW50aXZlTW9udGhseS9HZXRJbmNlbnRpdmVDYWxjdWxhdG9yLyR7bW9tZW50KGRhdGUpLmZvcm1hdChcclxuICAgICAgICBcIllZWVktTU1cIlxyXG4gICAgICApfS0wMS9TTVI/dXNlcm5hbWVTTVI9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRLcGlJbnZlbnRpdmVNb250aGx5UGltY2EgPSAodXNlckRhdGEsIGRhdGUpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX0lOQ0VOVElWRSArXHJcbiAgICAgIGAvS3BpSW5jZW50aXZlTW9udGhseS9JbmNlbnRpdmVDYWxjdWxhdG9yUGltY2EvJHtcclxuICAgICAgICB1c2VyRGF0YS5rb2RlQ2FiYW5nXHJcbiAgICAgIH0vJHttb21lbnQoZGF0ZSkuZm9ybWF0KFwiWVlZWS1NTVwiKX0tMDEvQUJNYCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0SW5jZW50aXZlWWVhcmx5ID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9JTkNFTlRJVkUgK1xyXG4gICAgICBgL0twaUluY2VudGl2ZU1vbnRobHkvR2V0UmVrYXBJbnNlbnRpZkJ1bGFuYW4vJHttb21lbnQobm93KS5mb3JtYXQoXHJcbiAgICAgICAgXCJZWVlZXCJcclxuICAgICAgKX0/dXNlcm5hbWU9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRTYWxlc1RhcmdldFBpbWNhID0gKHVzZXJEYXRhLCBtb250aCwgeWVhcikgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfTUFTVEVSICtcclxuICAgICAgYC9NYXN0ZXJEYXRhTG9rYWwvR2V0U2FsZXNUYXJnZXRQaW1jYUJ5Q2FiYW5nLyR7dXNlckRhdGEua29kZUNhYmFuZ30vJHt5ZWFyfS8ke21vbnRofWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFNhbGVzVGFyZ2V0NzVQaW1jYSA9ICh1c2VyRGF0YSwgbW9udGgsIHllYXIpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX01BU1RFUiArXHJcbiAgICAgIGAvTWFzdGVyRGF0YUxva2FsL0dldFNhbGVzVGFyZ2V0UGltY2E3NUJ5Q2FiYW5nLyR7dXNlckRhdGEua29kZUNhYmFuZ30vJHt5ZWFyfS8ke21vbnRofWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldEZyb250bGluZXJQaW1jYSA9ICh1c2VyRGF0YSwgbW9udGgsIHllYXIpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX0lOQ0VOVElWRSArXHJcbiAgICAgIGAvRnJvbnRsaW5lci9HZXRGcm9udGxpbmVyUGltY2EvJHt1c2VyRGF0YS5rb2RlQ2FiYW5nfS8ke21vbnRofS8ke3llYXJ9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U21yQnlDYWJhbmcgPSAoY2FiYW5nLCB0ZWtzKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9NQVNURVIgK1xyXG4gICAgICAvLyBgL01hc3RlckRhdGFMb2thbC9HZXRTbXJPdXRsZXRCeUNhYmFuZy8ke2NhYmFuZ30/dGVrcz0ke3Rla3N9YCxcclxuICAgICAgYC9NYXN0ZXJEYXRhTG9rYWwvR2V0U21yQnlDYWJhbmcvJHtjYWJhbmd9P3Rla3M9JHt0ZWtzfWAsXHJcbiAgICAvLyBgL01hc3RlckRhdGFMb2thbC9HZXRTbXJPdXRsZXRCeUNhYmFuZy8xND90ZWtzPSR7dGVrc31gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0Tm90aWZpY2F0aW9uYnlVc2VybmFtZSA9ICh1c2VybmFtZSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfTUFTVEVSICtcclxuICAgICAgLy8gYC9NYXN0ZXJEYXRhTG9rYWwvR2V0Tm90aWZpa2FzaUJ5VXNlcj91c2VybmFtZT1kaWFuJTQwZ21haWwuY29tYCxcclxuICAgICAgYC9NYXN0ZXJEYXRhTG9rYWwvR2V0Tm90aWZpa2FzaUJ5VXNlcj91c2VybmFtZT0ke3VzZXJuYW1lfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRQaW1jYUJ5Q2FiYW5nID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgYGh0dHBzOi8vbS1vbmUua2FsYmUuY28uaWQ6ODI0My90L2thbGJlLmNvLmlkL1Nha2Ftb3JNYXN0ZXJEYXRhL3YxL2FwaS9NYXN0ZXJEYXRhTG9rYWwvR2V0UGltY2FCeS8ke3VzZXJEYXRhLmtvZGVDYWJhbmd9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8vIEJFTkVGSVQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuY29uc3QgZ2V0QmVuZWZpdENvZGVDYWJhbmcgPSAodXNlckRhdGEpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX0JFTkVGSVQgK1xyXG4gICAgICBgL0JlbmVmaXRzL0dldEJlbmVmaXRzQnlLb2RlQ2FiYW5nLyR7dXNlckRhdGEua29kZUNhYmFuZ31gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBBUFBST1ZBTCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5jb25zdCBhcHByb3ZhbFJlamVjdCA9IChkYXRhLCBtb2R1bCwgaWQsIHVzZXJEYXRhKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgcmV0dXJuIGZldGNoKEFQSV9VUkwgKyBBUElfQVBQUk9WQUwgKyBcIi9hcHByb3ZhbC90cmFuc2FjdGlvbi9SZWplY3RcIiwge1xyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGlmIChtb2R1bCA9PT0gXCJQbGFuXCIpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goXHJcbiAgICAgICAgICBBUElfVVJMICtcclxuICAgICAgICAgICAgQVBJX1ZJU0lUX1BMQU4gK1xyXG4gICAgICAgICAgICBgL0FjdGl2aXR5VmlzaXRQbGFuL1VwZGF0ZVN0YXR1c1Zpc2l0UGxhbi8ke2lkfT9zdGF0dXM9UmVqZWN0ZWQmdXBkYXRlZEJ5PSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAobW9kdWwgPT09IFwiVW5QbGFuXCIpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goXHJcbiAgICAgICAgICAvLyBBUElfVVJMICtcclxuICAgICAgICAgIC8vICAgQVBJX1ZJU0lUX1BMQU4gK1xyXG4gICAgICAgICAgLy8gICBgL0FjdGl2aXR5VmlzaXRQbGFuL1VwZGF0ZVN0YXR1c1Zpc2l0UGxhbi8ke2lkfT9zdGF0dXM9UmVqZWN0ZWQmdXBkYXRlZEJ5PSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgICAgICAgIGBodHRwczovL20tb25lLmthbGJlLmNvLmlkOjgyNDMvdC9rYWxiZS5jby5pZC9TYWthbW9yQWN0aXZpdHlWaXNpdFVuUGxhbi92MS9hcGkvU2FrYW1vckFjdGl2aXR5VmlzaXRVblBsYW4vVXBkYXRlU3RhdHVzVmlzaXRVblBsYW4vJHtpZH0/c3RhdHVzPVJlamVjdGVkJnVwZGF0ZWRCeT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcblxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChtb2R1bCA9PT0gXCJTcHJlYWRpbmdcIikge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChcclxuICAgICAgICAgIGBodHRwczovL20tb25lLmthbGJlLmNvLmlkOjgyNDMvdC9rYWxiZS5jby5pZC9TYWthbW9yQWN0aXZpdHlTcHJlYWRpbmcvdjEvYXBpL0FjdGl2aXR5U3ByZWFkaW5nL1VwZGF0ZVN0YXR1c1NwcmVhZGluZy8ke2lkfT9zdGF0dXM9UmVqZWN0ZWQmdXBkYXRlZEJ5PSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBhcHByb3ZhbFJldmlzZSA9IChkYXRhLCBtb2R1bCwgaWQsIHVzZXJEYXRhKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgcmV0dXJuIGZldGNoKEFQSV9VUkwgKyBBUElfQVBQUk9WQUwgKyBcIi9hcHByb3ZhbC90cmFuc2FjdGlvbi9SZWplY3RcIiwge1xyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGlmIChtb2R1bCA9PT0gXCJQbGFuXCIpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goXHJcbiAgICAgICAgICBBUElfVVJMICtcclxuICAgICAgICAgICAgQVBJX1ZJU0lUX1BMQU4gK1xyXG4gICAgICAgICAgICBgL0FjdGl2aXR5VmlzaXRQbGFuL1VwZGF0ZVN0YXR1c1Zpc2l0UGxhbi8ke2lkfT9zdGF0dXM9UmV2aXNlJnVwZGF0ZWRCeT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKG1vZHVsID09PSBcIlVuUGxhblwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKFxyXG4gICAgICAgICAgLy8gQVBJX1VSTCArXHJcbiAgICAgICAgICAvLyAgIEFQSV9WSVNJVF9QTEFOICtcclxuICAgICAgICAgIC8vICAgYC9BY3Rpdml0eVZpc2l0UGxhbi9VcGRhdGVTdGF0dXNWaXNpdFBsYW4vJHtpZH0/c3RhdHVzPVJldmlzZSZ1cGRhdGVkQnk9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAgICAgICAgYGh0dHBzOi8vbS1vbmUua2FsYmUuY28uaWQ6ODI0My90L2thbGJlLmNvLmlkL1Nha2Ftb3JBY3Rpdml0eVZpc2l0VW5QbGFuL3YxL2FwaS9TYWthbW9yQWN0aXZpdHlWaXNpdFVuUGxhbi9VcGRhdGVTdGF0dXNWaXNpdFVuUGxhbi8ke2lkfT9zdGF0dXM9UmV2aXNlJnVwZGF0ZWRCeT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKG1vZHVsID09PSBcIlNwcmVhZGluZ1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKFxyXG4gICAgICAgICAgYGh0dHBzOi8vbS1vbmUua2FsYmUuY28uaWQ6ODI0My90L2thbGJlLmNvLmlkL1Nha2Ftb3JBY3Rpdml0eVNwcmVhZGluZy92MS9hcGkvQWN0aXZpdHlTcHJlYWRpbmcvVXBkYXRlU3RhdHVzU3ByZWFkaW5nLyR7aWR9P3N0YXR1cz1SZXZpc2UmdXBkYXRlZEJ5PSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBhcHByb3ZhbEFwcHJvdmUgPSAoZGF0YSwgbW9kdWwsIGlkLCB1c2VyRGF0YSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIHJldHVybiBmZXRjaChBUElfVVJMICsgQVBJX0FQUFJPVkFMICsgXCIvYXBwcm92YWwvdHJhbnNhY3Rpb24vQXBwcm92ZVwiLCB7XHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKG1vZHVsID09PSBcIlBsYW5cIikge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChcclxuICAgICAgICAgIEFQSV9VUkwgK1xyXG4gICAgICAgICAgICBBUElfVklTSVRfUExBTiArXHJcbiAgICAgICAgICAgIGAvQWN0aXZpdHlWaXNpdFBsYW4vVXBkYXRlU3RhdHVzVmlzaXRQbGFuLyR7aWR9P3N0YXR1cz1BcHByb3ZlZCZ1cGRhdGVkQnk9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChtb2R1bCA9PT0gXCJVblBsYW5cIikge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChcclxuICAgICAgICAgIC8vIEFQSV9VUkwgK1xyXG4gICAgICAgICAgLy8gICBBUElfVklTSVRfUExBTiArXHJcbiAgICAgICAgICAvLyAgIGAvQWN0aXZpdHlWaXNpdFBsYW4vVXBkYXRlU3RhdHVzVmlzaXRQbGFuLyR7aWR9P3N0YXR1cz1BcHByb3ZlZCZ1cGRhdGVkQnk9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAgICAgICAgYGh0dHBzOi8vbS1vbmUua2FsYmUuY28uaWQ6ODI0My90L2thbGJlLmNvLmlkL1Nha2Ftb3JBY3Rpdml0eVZpc2l0VW5QbGFuL3YxL2FwaS9TYWthbW9yQWN0aXZpdHlWaXNpdFVuUGxhbi9VcGRhdGVTdGF0dXNWaXNpdFVuUGxhbi8ke2lkfT9zdGF0dXM9QXBwcm92ZWQmdXBkYXRlZEJ5PSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAobW9kdWwgPT09IFwiU3ByZWFkaW5nXCIpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goXHJcbiAgICAgICAgICAvLyBBUElfVVJMICtcclxuICAgICAgICAgIC8vICAgQVBJX1ZJU0lUX1BMQU4gK1xyXG4gICAgICAgICAgLy8gICBgL0FjdGl2aXR5VmlzaXRQbGFuL1VwZGF0ZVN0YXR1c1Zpc2l0UGxhbi8ke2lkfT9zdGF0dXM9QXBwcm92ZWQmdXBkYXRlZEJ5PSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgICAgICAgIGBodHRwczovL20tb25lLmthbGJlLmNvLmlkOjgyNDMvdC9rYWxiZS5jby5pZC9TYWthbW9yQWN0aXZpdHlTcHJlYWRpbmcvdjEvYXBpL0FjdGl2aXR5U3ByZWFkaW5nL1VwZGF0ZVN0YXR1c1NwcmVhZGluZy8ke2lkfT9zdGF0dXM9QXBwcm92ZWQmdXBkYXRlZEJ5PSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBhcHByb3ZhbFN1Ym1pdCA9IChkYXRhLCBpZCwgdXNlckRhdGEpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9tLW9uZS5rYWxiZS5jby5pZDo4MjQzL3Qva2FsYmUuY28uaWQvQXBwcm92YWxBUEkvdjEvYXBpL2FwcHJvdmFsL3RyYW5zYWN0aW9uL1N1Ym1pdGAsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIHNldFdyb25nVXNlcih0cnVlKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICAvLyBVU0VSXHJcbiAgZ2V0TWVudSxcclxuICBnZXRBdXRoLFxyXG4gIG9uTG9naW4sXHJcbiAgcG9zdENoYW5nZVBhc3MsXHJcbiAgZm9yZ290UGFzc3dvcmQsXHJcbiAgLy8gTUFTVEVSXHJcbiAgZ2V0UHJvZHVjdFNlYXJjaCxcclxuICBnZXRTZWFyY2hKZW5pc0NoYW5uZWwsXHJcbiAgZ2V0UHJvZHVjdEF2Z1NhbGVzLFxyXG4gIGdldFNlYXJjaE91dGxldCxcclxuICBnZXRCcmFuZCxcclxuICBnZXRQcm9kdWN0QnlKZW5pc0NoYW5uZWwsXHJcbiAgZ2V0S29udGVuV29ya1Zpc2l0LFxyXG4gIGdldEhuYUF2ZyxcclxuICBwb3N0UHJvZmlsZVBpYyxcclxuICB2aWV3UHJvZmlsZVBpYyxcclxuICBnZXRTbXJCeUNhYmFuZyxcclxuICB2aWV3T3V0bGV0Q2xhc3MsXHJcbiAgZ2V0Tm90aWZpY2F0aW9uYnlVc2VybmFtZSxcclxuICBnZXRQaW1jYUJ5Q2FiYW5nLFxyXG4gIC8vIFZJU0lUIFBMQU5cclxuICBnZXRQbGFuTGlzdCxcclxuICBnZXRQbGFuSWQsXHJcbiAgZ2V0UG9zbSxcclxuICBnZXRQbGFuSGlzdG9yeSxcclxuICBzdWJtaXRWaXNpdFBsYW4sXHJcbiAgc3VibWl0VmlzaXRQbGFuRHBvc20sXHJcbiAgZ2V0SW52b2ljZURhdGFQb3NtLFxyXG4gIGdldEludm9pY2VEYXRhLFxyXG4gIGdldFBsYW5Nb250aGx5SGlzdG9yeSxcclxuICB2aWV3RmlsZSxcclxuICBnZXRNYXN0ZXJWaXNpdFBsYW4sXHJcbiAgZGVsZXRlTWFzdGVyUGxhblNNUixcclxuICBzYXZlTWFzdGVyUGxhblZpc2l0LFxyXG4gIGdldEFwcHJvdmFsLFxyXG4gIGdldFBsYW5CeUlkLFxyXG4gIGdldFJldmlzZVBsYW5MaXN0U21yLFxyXG4gIHVwZGF0ZURhdGFQb3NtUGxhbixcclxuICB1cGRhdGVEYXRhUHJvZHVrUGxhbixcclxuICBpbnNlcnRGaWxlUGxhbixcclxuICBnZXRWaXNpdFBsYW5Qcm9kdWN0LFxyXG4gIC8vIFZJU0lUIFVOUExBTlxyXG4gIHN1Ym1pdFZpc2l0VW5wbGFuLFxyXG4gIHN1Ym1pdFZpc2l0VW5wbGFuRHBvc20sXHJcbiAgZ2V0SW52b2ljZURhdGFVbnBsYW4sXHJcbiAgZ2V0SW52b2ljZURhdGFQb3NtVW5wbGFuLFxyXG4gIGdldFVucGxhbk1vbnRobHlIaXN0b3J5LFxyXG4gIHZpZXdGaWxlVW5wbGFuLFxyXG4gIGdldFVucGxhbk5lYXJNZSxcclxuICBnZXRVbnBsYW5CeUlkLFxyXG4gIGdldFJldmlzZVVuUGxhbkxpc3RTbXIsXHJcbiAgdXBkYXRlRGF0YVBvc21VbnBsYW4sXHJcbiAgdXBkYXRlRGF0YVByb2R1a1VucGxhbixcclxuICBpbnNlcnRGaWxlVW5wbGFuLFxyXG4gIGdldFVuUGxhblByb2R1Y3RzLFxyXG4gIC8vIFNQUkVBRElOR1xyXG4gIHN1Ym1pdFZpc2l0U3ByZWFkaW5nLFxyXG4gIHN1Ym1pdFZpc2l0U3ByZWFkaW5nRHBvc20sXHJcbiAgZ2V0SW52b2ljZURhdGFTcHJlYWRpbmcsXHJcbiAgZ2V0SW52b2ljZURhdGFQb3NtU3ByZWFkaW5nLFxyXG4gIHZpZXdGaWxlU3ByZWFkaW5nLFxyXG4gIGdldFNwcmVhZGluZ01vbnRobHlIaXN0b3J5LFxyXG4gIGdldFNwcmVhZGluZ0J5SWQsXHJcbiAgZ2V0UmV2aXNlU3ByZWFkaW5nTGlzdFNtcixcclxuICB1cGRhdGVEYXRhUG9zbVNwcmVhZGluZyxcclxuICB1cGRhdGVEYXRhUHJvZHVrU3ByZWFkaW5nLFxyXG4gIGluc2VydEZpbGVTcHJlYWRpbmcsXHJcbiAgZ2V0U3ByZWFkaW5nUHJvZHVjdCxcclxuICAvLyBXT1JLIFZJU0lUXHJcbiAgZ2V0QWxsV29ya1Zpc2l0LFxyXG4gIGdldFdvcmtWaXNpdE1vbnRobHlIaXN0b3J5LFxyXG4gIGdldFdvcmtWaXNpdFJhdGluZyxcclxuICBzdWJtaXRXb3JrVmlzaXQsXHJcbiAgZ2V0TWFzdGVyV29ya1Zpc2l0LFxyXG4gIHNhdmVNYXN0ZXJXb3JrVmlzaXQsXHJcbiAgZGVsZXRlTWFzdGVyV29ya1Zpc2l0LFxyXG4gIC8vIENhbGVuZGFyXHJcbiAgZ2V0RGF5UHJvZ3JhbSxcclxuICBnZXREYXlQcm9tbyxcclxuICBnZXRNb250aFByb2dyYW0sXHJcbiAgZ2V0TW9udGhQcm9tbyxcclxuICAvLyBBbm5vdW5jZW1lbnRcclxuICBnZXRBbGxBbm5vdW5jZW1lbnQsXHJcbiAgdXBkYXRlUmVhZEFubm91bmNlbWVudCxcclxuICAvLyBJTkNFTlRJVkVcclxuICBnZXRTYWxlc1RhcmdldFNNUixcclxuICBnZXRTYWxlc1RhcmdldDc1U01SLFxyXG4gIGdldFByb2R1a3RpZml0YXMsXHJcbiAgZ2V0RnJvbnRsaW5lcixcclxuICBnZXROb28sXHJcbiAgZ2V0V29ya0RheSxcclxuICBnZXRLcGlJbnZlbnRpdmVNb250aGx5U01SLFxyXG4gIGdldEtwaUludmVudGl2ZU1vbnRobHlQaW1jYSxcclxuICBnZXRJbmNlbnRpdmVZZWFybHksXHJcbiAgZ2V0U2FsZXNUYXJnZXRQaW1jYSxcclxuICBnZXRTYWxlc1RhcmdldDc1UGltY2EsXHJcbiAgZ2V0RnJvbnRsaW5lclBpbWNhLFxyXG4gIC8vIEJFTkVGSVRcclxuICBnZXRCZW5lZml0Q29kZUNhYmFuZyxcclxuICAvLyBBUFBST1ZBTFxyXG4gIGFwcHJvdmFsUmVqZWN0LFxyXG4gIGFwcHJvdmFsUmV2aXNlLFxyXG4gIGFwcHJvdmFsQXBwcm92ZSxcclxuICBhcHByb3ZhbFN1Ym1pdCxcclxufTtcclxuIiwiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBmaXJlYmFzZUNsb3VkTWVzc2FnaW5nIH0gZnJvbSBcIi4uL3dlYnB1c2hcIjtcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgeyBnZXRBbGxBbm5vdW5jZW1lbnQgfSBmcm9tIFwiLi4vaGVscGVyXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIik7XG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICBSb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRva2VuKCk7XG4gICAgYXN5bmMgZnVuY3Rpb24gc2V0VG9rZW4oKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGZpcmViYXNlQ2xvdWRNZXNzYWdpbmcuaW5pdCgpO1xuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICBnZXRNZXNzYWdlKCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0TWVzc2FnZSgpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2luZyA9IGZpcmViYXNlLm1lc3NhZ2luZygpO1xuICAgICAgY29uc29sZS5sb2coeyBtZXNzYWdpbmcgfSk7XG4gICAgICBtZXNzYWdpbmcub25NZXNzYWdlKChtZXNzYWdlKSA9PiB7XG4gICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibm90aWZcIiwgdHJ1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxTdG9yZT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1N0b3JlPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBrZWVwU3RhdGU6IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiS0VFUF9TVEFURVwiLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNldERlZmF1bHRWaXNpdFBsYW46IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfREVGQVVMVF9WSVNJVF9QTEFOXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0RGVmYXVsdFZpc2l0U3ByZWFkaW5nOiBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX0RFRkFVTFRfVklTSVRfU1BSRUFESU5HXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0RGVmYXVsdFZpc2l0VW5wbGFuOiBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX0RFRkFVTFRfVklTSVRfVU5QTEFOXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0Rm9jdXNBcHByb3ZhbDogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfRk9DVVNfQVBQUk9WQUxcIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRNZW51OiBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9NRU5VXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0UGxhbkF2YWJpbGl0eTogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfUExBTl9BVkFCSUxJVFlcIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRQbGFuQ2F0YXRhbjogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfUExBTl9DQVRBVEFOXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0UGxhbkNoZWNrSW46IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1BMQU5fQ0hFQ0tfSU5cIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRQbGFuVmlzaWJpbGl0eTogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfUExBTl9WSVNJQklMSVRZXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0UmV2aXNlQXZhYmlsaXR5OiBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9SRVZJU0VfQVZBQklMSVRZXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0UmV2aXNlVmlzaWJpbGl0eTogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfUkVWSVNFX1ZJU0lCSUxJVFlcIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRTcHJlYWRpbmdDYXRhdGFuOiBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9TUFJFQURJTkdfQ0FUQVRBTlwiLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNldFNwcmVhZGluZ0F2YWJpbGl0eTogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfU1BSRUFESU5HX0FWQUJJTElUWVwiLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNldFNwcmVhZGluZ0FsYW1hdDogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfU1BSRUFESU5HX0FMQU1BVFwiLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNldFNwcmVhZGluZ0NoZWNrSW46IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1NQUkVBRElOR19DSEVDS19JTlwiLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNldFNwcmVhZGluZ0plbmlzQ2hhbm5lbDogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfU1BSRUFESU5HX0pFTklTX0NIQU5ORUxcIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRTcHJlYWRpbmdOZXdPdXRsZXQ6IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1NQUkVBRElOR19ORVdfT1VUTEVUXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0U3ByZWFkaW5nT3V0bGV0OiBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9TUFJFQURJTkdfT1VUTEVUXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0U3ByZWFkaW5nVmlzaWJpbGl0eTogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfU1BSRUFESU5HX1ZJU0lCSUxJVFlcIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRVbnBsYW5BdmFiaWxpdHk6IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1VOUExBTl9BVkFCSUxJVFlcIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRVbnBsYW5DYXRhdGFuOiBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9VTlBMQU5fQ0FUQVRBTlwiLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNldFVucGxhbkNoZWNrSW46IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1VOUExBTl9DSEVDS19JTlwiLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNldFVucGxhbkplbmlzQ2hhbm5lbDogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfVU5QTEFOX0pFTklTX0NIQU5ORUxcIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRVbnBsYW5PdXRsZXQ6IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1VOUExBTl9PVVRMRVRcIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRVbnBsYW5WaXNpYmlsaXR5OiBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9VTlBMQU5fVklTSUJJTElUWVwiLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHVzZXJMb2dpbjogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJVU0VSX0xPR0lOXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciwgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlclJlZHVjZXIsIGRlZmF1bHRVc2VyIH0gZnJvbSBcIi4vcmVkdWNlcnMvdXNlclwiO1xyXG5pbXBvcnQgeyBtZW51UmVkdWNlciwgZGVmYXVsdE1lbnUgfSBmcm9tIFwiLi9yZWR1Y2Vycy9tZW51XCI7XHJcbmltcG9ydCB7IHZpc2l0UGxhblJlZHVjZXIsIGRlZmF1bHRWaXNpdFBsYW4gfSBmcm9tIFwiLi9yZWR1Y2Vycy92aXNpdFBsYW5cIjtcclxuaW1wb3J0IHsgdmlzaXRVbnBsYW5SZWR1Y2VyLCBkZWZhdWx0VmlzaXRVbnBsYW4gfSBmcm9tIFwiLi9yZWR1Y2Vycy92aXNpdFVucGxhblwiO1xyXG5pbXBvcnQge1xyXG4gIHZpc2l0U3ByZWFkaW5nUmVkdWNlcixcclxuICBkZWZhdWx0VmlzaXRTcHJlYWRpbmcsXHJcbn0gZnJvbSBcIi4vcmVkdWNlcnMvdmlzaXRTcHJlYWRpbmdcIjtcclxuXHJcbmltcG9ydCB7IGFwcHJvdmFsUmVkdWNlciwgZGVmYXVsdEFwcHJvdmFsIH0gZnJvbSBcIi4vcmVkdWNlcnMvYXBwcm92YWxcIjtcclxuXHJcbmltcG9ydCB7IHJldmlzZVJlZHVjZXIsIGRlZmF1bHRSZXZpc2UgfSBmcm9tIFwiLi9yZWR1Y2Vycy9yZXZpc2VcIjtcclxuXHJcbmltcG9ydCB1c2VyTG9naW4gZnJvbSBcIi4vYWN0aW9ucy91c2VyTG9naW5cIjtcclxuaW1wb3J0IHNldE1lbnUgZnJvbSBcIi4vYWN0aW9ucy9zZXRNZW51XCI7XHJcbmltcG9ydCBrZWVwU3RhdGUgZnJvbSBcIi4vYWN0aW9ucy9rZWVwU3RhdGVcIjtcclxuXHJcbmltcG9ydCBzZXRQbGFuVmlzaWJpbGl0eSBmcm9tIFwiLi9hY3Rpb25zL3NldFBsYW5WaXNpYmlsaXR5XCI7XHJcbmltcG9ydCBzZXRQbGFuQXZhYmlsaXR5IGZyb20gXCIuL2FjdGlvbnMvc2V0UGxhbkF2YWJpbGl0eVwiO1xyXG5pbXBvcnQgc2V0UGxhbkNhdGF0YW4gZnJvbSBcIi4vYWN0aW9ucy9zZXRQbGFuQ2F0YXRhblwiO1xyXG5pbXBvcnQgc2V0UGxhbkNoZWNrSW4gZnJvbSBcIi4vYWN0aW9ucy9zZXRQbGFuQ2hlY2tJblwiO1xyXG5cclxuaW1wb3J0IHNldFVucGxhbkF2YWJpbGl0eSBmcm9tIFwiLi9hY3Rpb25zL3NldFVucGxhbkF2YWJpbGl0eVwiO1xyXG5pbXBvcnQgc2V0VW5wbGFuVmlzaWJpbGl0eSBmcm9tIFwiLi9hY3Rpb25zL3NldFVucGxhblZpc2liaWxpdHlcIjtcclxuaW1wb3J0IHNldFVucGxhbkNhdGF0YW4gZnJvbSBcIi4vYWN0aW9ucy9zZXRVbnBsYW5DYXRhdGFuXCI7XHJcbmltcG9ydCBzZXRVbnBsYW5DaGVja0luIGZyb20gXCIuL2FjdGlvbnMvc2V0VW5wbGFuQ2hlY2tJblwiO1xyXG5pbXBvcnQgc2V0VW5wbGFuSmVuaXNDaGFubmVsIGZyb20gXCIuL2FjdGlvbnMvc2V0VW5wbGFuSmVuaXNDaGFubmVsXCI7XHJcbmltcG9ydCBzZXRVbnBsYW5PdXRsZXQgZnJvbSBcIi4vYWN0aW9ucy9zZXRVbnBsYW5PdXRsZXRcIjtcclxuXHJcbmltcG9ydCBzZXRTcHJlYWRpbmdBdmFiaWxpdHkgZnJvbSBcIi4vYWN0aW9ucy9zZXRTcHJlYWRpbmdBdmFiaWxpdHlcIjtcclxuaW1wb3J0IHNldFNwcmVhZGluZ1Zpc2liaWxpdHkgZnJvbSBcIi4vYWN0aW9ucy9zZXRTcHJlYWRpbmdWaXNpYmlsaXR5XCI7XHJcbmltcG9ydCBzZXRTcHJlYWRpbmdDYXRhdGFuIGZyb20gXCIuL2FjdGlvbnMvc2V0U3ByZWFkaW5nQ2F0YXRhblwiO1xyXG5pbXBvcnQgc2V0U3ByZWFkaW5nQWxhbWF0IGZyb20gXCIuL2FjdGlvbnMvc2V0U3ByZWFkaW5nQWxhbWF0XCI7XHJcbmltcG9ydCBzZXRTcHJlYWRpbmdOZXdPdXRsZXQgZnJvbSBcIi4vYWN0aW9ucy9zZXRTcHJlYWRpbmdOZXdPdXRsZXRcIjtcclxuaW1wb3J0IHNldFNwcmVhZGluZ0NoZWNrSW4gZnJvbSBcIi4vYWN0aW9ucy9zZXRTcHJlYWRpbmdDaGVja0luXCI7XHJcbmltcG9ydCBzZXRTcHJlYWRpbmdKZW5pc0NoYW5uZWwgZnJvbSBcIi4vYWN0aW9ucy9zZXRTcHJlYWRpbmdKZW5pc0NoYW5uZWxcIjtcclxuaW1wb3J0IHNldFNwcmVhZGluZ091dGxldCBmcm9tIFwiLi9hY3Rpb25zL3NldFNwcmVhZGluZ091dGxldFwiO1xyXG5cclxuaW1wb3J0IHNldERlZmF1bHRWaXNpdFBsYW4gZnJvbSBcIi4vYWN0aW9ucy9zZXREZWZhdWx0VmlzaXRQbGFuXCI7XHJcbmltcG9ydCBzZXREZWZhdWx0VmlzaXRVbnBsYW4gZnJvbSBcIi4vYWN0aW9ucy9zZXREZWZhdWx0VmlzaXRVbnBsYW5cIjtcclxuaW1wb3J0IHNldERlZmF1bHRWaXNpdFNwcmVhZGluZyBmcm9tIFwiLi9hY3Rpb25zL3NldERlZmF1bHRWaXNpdFNwcmVhZGluZ1wiO1xyXG5cclxuaW1wb3J0IHNldFJldmlzZUF2YWJpbGl0eSBmcm9tIFwiLi9hY3Rpb25zL3NldFJldmlzZUF2YWJpbGl0eVwiO1xyXG5pbXBvcnQgc2V0UmV2aXNlVmlzaWJpbGl0eSBmcm9tIFwiLi9hY3Rpb25zL3NldFJldmlzZVZpc2liaWxpdHlcIjtcclxuXHJcbmltcG9ydCBzZXRGb2N1c0FwcHJvdmFsIGZyb20gXCIuL2FjdGlvbnMvc2V0Rm9jdXNBcHByb3ZhbFwiO1xyXG5cclxuY29uc3QgU3RvcmVzID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgU3RvcmUgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKFxyXG4gICAgKHByZXZTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlclJlZHVjZXI6IHVzZXJSZWR1Y2VyKHByZXZTdGF0ZS51c2VyUmVkdWNlciwgYWN0aW9uKSxcclxuICAgICAgICBtZW51UmVkdWNlcjogbWVudVJlZHVjZXIocHJldlN0YXRlLm1lbnVSZWR1Y2VyLCBhY3Rpb24pLFxyXG4gICAgICAgIHZpc2l0UGxhblJlZHVjZXI6IHZpc2l0UGxhblJlZHVjZXIocHJldlN0YXRlLnZpc2l0UGxhblJlZHVjZXIsIGFjdGlvbiksXHJcbiAgICAgICAgdmlzaXRVbnBsYW5SZWR1Y2VyOiB2aXNpdFVucGxhblJlZHVjZXIoXHJcbiAgICAgICAgICBwcmV2U3RhdGUudmlzaXRVbnBsYW5SZWR1Y2VyLFxyXG4gICAgICAgICAgYWN0aW9uXHJcbiAgICAgICAgKSxcclxuICAgICAgICB2aXNpdFNwcmVhZGluZ1JlZHVjZXI6IHZpc2l0U3ByZWFkaW5nUmVkdWNlcihcclxuICAgICAgICAgIHByZXZTdGF0ZS52aXNpdFNwcmVhZGluZ1JlZHVjZXIsXHJcbiAgICAgICAgICBhY3Rpb25cclxuICAgICAgICApLFxyXG4gICAgICAgIGFwcHJvdmFsUmVkdWNlcjogYXBwcm92YWxSZWR1Y2VyKHByZXZTdGF0ZS5hcHByb3ZhbFJlZHVjZXIsIGFjdGlvbiksXHJcbiAgICAgICAgcmV2aXNlUmVkdWNlcjogcmV2aXNlUmVkdWNlcihwcmV2U3RhdGUucmV2aXNlUmVkdWNlciwgYWN0aW9uKSxcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHVzZXJSZWR1Y2VyOiBkZWZhdWx0VXNlcixcclxuICAgICAgbWVudVJlZHVjZXI6IGRlZmF1bHRNZW51LFxyXG4gICAgICB2aXNpdFBsYW5SZWR1Y2VyOiBkZWZhdWx0VmlzaXRQbGFuLFxyXG4gICAgICB2aXNpdFVucGxhblJlZHVjZXI6IGRlZmF1bHRWaXNpdFVucGxhbixcclxuICAgICAgdmlzaXRTcHJlYWRpbmdSZWR1Y2VyOiBkZWZhdWx0VmlzaXRTcHJlYWRpbmcsXHJcbiAgICAgIGFwcHJvdmFsUmVkdWNlcjogZGVmYXVsdEFwcHJvdmFsLFxyXG4gICAgICByZXZpc2VSZWR1Y2VyOiBkZWZhdWx0UmV2aXNlLFxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGFjdGlvbnMgPSB1c2VNZW1vKFxyXG4gICAgKCkgPT4gKHtcclxuICAgICAgLi4udXNlckxvZ2luKGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0TWVudShkaXNwYXRjaCksXHJcbiAgICAgIC4uLmtlZXBTdGF0ZShkaXNwYXRjaCksXHJcblxyXG4gICAgICAuLi5zZXRQbGFuVmlzaWJpbGl0eShkaXNwYXRjaCksXHJcbiAgICAgIC4uLnNldFBsYW5BdmFiaWxpdHkoZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXRQbGFuQ2F0YXRhbihkaXNwYXRjaCksXHJcbiAgICAgIC4uLnNldFBsYW5DaGVja0luKGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0RGVmYXVsdFZpc2l0UGxhbihkaXNwYXRjaCksXHJcblxyXG4gICAgICAuLi5zZXRVbnBsYW5WaXNpYmlsaXR5KGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0VW5wbGFuQXZhYmlsaXR5KGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0VW5wbGFuQ2F0YXRhbihkaXNwYXRjaCksXHJcbiAgICAgIC4uLnNldFVucGxhbkNoZWNrSW4oZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXRVbnBsYW5KZW5pc0NoYW5uZWwoZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXRVbnBsYW5PdXRsZXQoZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXREZWZhdWx0VmlzaXRVbnBsYW4oZGlzcGF0Y2gpLFxyXG5cclxuICAgICAgLi4uc2V0U3ByZWFkaW5nVmlzaWJpbGl0eShkaXNwYXRjaCksXHJcbiAgICAgIC4uLnNldFNwcmVhZGluZ0F2YWJpbGl0eShkaXNwYXRjaCksXHJcbiAgICAgIC4uLnNldFNwcmVhZGluZ0NhdGF0YW4oZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXRTcHJlYWRpbmdBbGFtYXQoZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXRTcHJlYWRpbmdOZXdPdXRsZXQoZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXRTcHJlYWRpbmdDaGVja0luKGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0U3ByZWFkaW5nSmVuaXNDaGFubmVsKGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0U3ByZWFkaW5nT3V0bGV0KGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0RGVmYXVsdFZpc2l0U3ByZWFkaW5nKGRpc3BhdGNoKSxcclxuXHJcbiAgICAgIC4uLnNldEZvY3VzQXBwcm92YWwoZGlzcGF0Y2gpLFxyXG5cclxuICAgICAgLi4uc2V0UmV2aXNlQXZhYmlsaXR5KGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0UmV2aXNlVmlzaWJpbGl0eShkaXNwYXRjaCksXHJcbiAgICB9KSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdG9yZXMuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGRpc3BhdGNoLCBhY3Rpb25zIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1N0b3Jlcy5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgU3RvcmVzLCBTdG9yZSB9O1xyXG4iLCJjb25zdCBkZWZhdWx0QXBwcm92YWwgPSB7XHJcbiAgZm9jdXNBcHByb3ZhbDoge30sXHJcbn07XHJcblxyXG5jb25zdCBhcHByb3ZhbFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgXCJTRVRfRk9DVVNfQVBQUk9WQUxcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGZvY3VzQXBwcm92YWw6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgYXBwcm92YWxSZWR1Y2VyLCBkZWZhdWx0QXBwcm92YWwgfTtcclxuIiwiY29uc3QgZGVmYXVsdE1lbnUgPSB7XHJcbiAgbWVudTogW10sXHJcbn07XHJcblxyXG5jb25zdCBtZW51UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIlNFVF9NRU5VXCI6XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibWVudVwiLCBKU09OLnN0cmluZ2lmeShhY3Rpb24ucGF5bG9hZCkpO1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbWVudTogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJLRUVQX1NUQVRFXCI6XHJcbiAgICAgIGNvbnN0IHVzZXJNZW51ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1lbnVcIikpO1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbWVudTogdXNlck1lbnUgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBtZW51UmVkdWNlciwgZGVmYXVsdE1lbnUgfTtcclxuIiwiY29uc3QgZGVmYXVsdFJldmlzZSA9IHtcclxuICB2aXNpYmlsaXR5OiBbXSxcclxuICBhdmFiaWxpdHk6IFtdLFxyXG59O1xyXG5cclxuY29uc3QgcmV2aXNlUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIlNFVF9SRVZJU0VfQVZBQklMSVRZXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBhdmFiaWxpdHk6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiU0VUX1JFVklTRV9WSVNJQklMSVRZXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB2aXNpYmlsaXR5OiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IHJldmlzZVJlZHVjZXIsIGRlZmF1bHRSZXZpc2UgfTtcclxuIiwiY29uc3QgZGVmYXVsdFVzZXIgPSB7XHJcbiAgdXNlcjogW10sXHJcbn07XHJcblxyXG5jb25zdCB1c2VyUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIlVTRVJfTE9HSU5cIjpcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KGFjdGlvbi5wYXlsb2FkKSk7XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB1c2VyOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlVTRVJfTE9HT1VUXCI6XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdXNlcjogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJLRUVQX1NUQVRFXCI6XHJcbiAgICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdXNlcjogdXNlckRhdGEgfTtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgdXNlclJlZHVjZXIsIGRlZmF1bHRVc2VyIH07XHJcbiIsImNvbnN0IGRlZmF1bHRWaXNpdFBsYW4gPSB7XHJcbiAgdmlzaWJpbGl0eTogW10sXHJcbiAgYXZhYmlsaXR5OiBbXSxcclxuICBjYXRhdGFuOiBcIlwiLFxyXG4gIGNoZWNrSW46IFwiXCIsXHJcbn07XHJcblxyXG5jb25zdCB2aXNpdFBsYW5SZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiU0VUX1BMQU5fVklTSUJJTElUWVwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdmlzaWJpbGl0eTogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJTRVRfUExBTl9BVkFCSUxJVFlcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGF2YWJpbGl0eTogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJTRVRfUExBTl9DQVRBVEFOXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjYXRhdGFuOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9QTEFOX0NIRUNLX0lOXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjaGVja0luOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9ERUZBVUxUX1ZJU0lUX1BMQU5cIjpcclxuICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdFZpc2l0UGxhbiB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IHZpc2l0UGxhblJlZHVjZXIsIGRlZmF1bHRWaXNpdFBsYW4gfTtcclxuIiwiY29uc3QgZGVmYXVsdFZpc2l0U3ByZWFkaW5nID0ge1xyXG4gIHZpc2liaWxpdHk6IFtdLFxyXG4gIGF2YWJpbGl0eTogW10sXHJcbiAgY2F0YXRhbjogXCJcIixcclxuICBhbGFtYXQ6IFwiXCIsXHJcbiAgbmV3T3V0bGV0OiBcIlwiLFxyXG4gIGNoZWNrSW46IFwiXCIsXHJcbiAgamVuaXNDaGFubmVsOiB7fSxcclxuICBvdXRsZXQ6IHt9LFxyXG59O1xyXG5cclxuY29uc3QgdmlzaXRTcHJlYWRpbmdSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiU0VUX1NQUkVBRElOR19WSVNJQklMSVRZXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB2aXNpYmlsaXR5OiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9TUFJFQURJTkdfQVZBQklMSVRZXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBhdmFiaWxpdHk6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiU0VUX1NQUkVBRElOR19DQVRBVEFOXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjYXRhdGFuOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9TUFJFQURJTkdfQUxBTUFUXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBhbGFtYXQ6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiU0VUX1NQUkVBRElOR19ORVdfT1VUTEVUXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBuZXdPdXRsZXQ6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiU0VUX1NQUkVBRElOR19DSEVDS19JTlwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2hlY2tJbjogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJTRVRfU1BSRUFESU5HX0pFTklTX0NIQU5ORUxcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGplbmlzQ2hhbm5lbDogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJTRVRfU1BSRUFESU5HX09VVExFVFwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgb3V0bGV0OiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9ERUZBVUxUX1ZJU0lUX1NQUkVBRElOR1wiOlxyXG4gICAgICByZXR1cm4geyAuLi5kZWZhdWx0VmlzaXRTcHJlYWRpbmcgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyB2aXNpdFNwcmVhZGluZ1JlZHVjZXIsIGRlZmF1bHRWaXNpdFNwcmVhZGluZyB9O1xyXG4iLCJjb25zdCBkZWZhdWx0VmlzaXRVbnBsYW4gPSB7XHJcbiAgdmlzaWJpbGl0eTogW10sXHJcbiAgYXZhYmlsaXR5OiBbXSxcclxuICBjYXRhdGFuOiBcIlwiLFxyXG4gIGNoZWNrSW46IFwiXCIsXHJcbiAgamVuaXNDaGFubmVsOiB7fSxcclxuICBvdXRsZXQ6IHt9LFxyXG59O1xyXG5cclxuY29uc3QgdmlzaXRVbnBsYW5SZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiU0VUX1VOUExBTl9WSVNJQklMSVRZXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB2aXNpYmlsaXR5OiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9VTlBMQU5fQVZBQklMSVRZXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBhdmFiaWxpdHk6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiU0VUX1VOUExBTl9DQVRBVEFOXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjYXRhdGFuOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9VTlBMQU5fQ0hFQ0tfSU5cIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNoZWNrSW46IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiU0VUX1VOUExBTl9KRU5JU19DSEFOTkVMXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBqZW5pc0NoYW5uZWw6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiU0VUX1VOUExBTl9PVVRMRVRcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG91dGxldDogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJTRVRfREVGQVVMVF9WSVNJVF9VTlBMQU5cIjpcclxuICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdFZpc2l0VW5wbGFuIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgdmlzaXRVbnBsYW5SZWR1Y2VyLCBkZWZhdWx0VmlzaXRVbnBsYW4gfTtcclxuIiwiaW1wb3J0IFwiZmlyZWJhc2UvbWVzc2FnaW5nXCI7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcblxyXG5jb25zdCBmaXJlYmFzZUNsb3VkTWVzc2FnaW5nID0ge1xyXG4gIC8vY2hlY2tpbmcgd2hldGhlciB0b2tlbiBpcyBhdmFpbGFibGUgaW4gaW5kZXhlZCBEQlxyXG4gIHRva2VuSW5sb2NhbGZvcmFnZTogYXN5bmMgKCkgPT4ge1xyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmNtX3Rva2VuXCIpO1xyXG4gIH0sXHJcblxyXG4gIHVzZXJJbmxvY2FsZm9yYWdlOiBhc3luYyAoKSA9PiB7XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpO1xyXG4gIH0sXHJcblxyXG4gIC8vaW5pdGlhbGl6aW5nIGZpcmViYXNlIGFwcFxyXG4gIGluaXQ6IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcclxuICAgICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcCh7XHJcbiAgICAgICAgYXBpS2V5OiBcIkFJemFTeUFNVGlyWXB5elk3UVdEa3pTUHNvZnBvNjhqYUZsdG5ya1wiLFxyXG4gICAgICAgIGF1dGhEb21haW46IFwic2FrYW1vci04ZjI4ZC5maXJlYmFzZWFwcC5jb21cIixcclxuICAgICAgICBwcm9qZWN0SWQ6IFwic2FrYW1vci04ZjI4ZFwiLFxyXG4gICAgICAgIHN0b3JhZ2VCdWNrZXQ6IFwic2FrYW1vci04ZjI4ZC5hcHBzcG90LmNvbVwiLFxyXG4gICAgICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjQwMDcyMDQ1ODE2NlwiLFxyXG4gICAgICAgIGFwcElkOiBcIjE6NDAwNzIwNDU4MTY2OndlYjpjZjdhZmMwNmVjM2FjNDE5ZDY5MTE3XCIsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBtZXNzYWdpbmcgPSBmaXJlYmFzZS5tZXNzYWdpbmcoKTtcclxuICAgICAgICBjb25zdCB0b2tlbkluTG9jYWxGb3JhZ2UgPSBhd2FpdCB0aGlzLnRva2VuSW5sb2NhbGZvcmFnZSgpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJJbmxvY2FsZm9yYWdlID0gYXdhaXQgdGhpcy51c2VySW5sb2NhbGZvcmFnZSgpO1xyXG5cclxuICAgICAgICAvL2lmIEZDTSB0b2tlbiBpcyBhbHJlYWR5IHRoZXJlIGp1c3QgcmV0dXJuIHRoZSB0b2tlblxyXG4gICAgICAgIGlmICh0b2tlbkluTG9jYWxGb3JhZ2UgIT09IG51bGwpIHtcclxuICAgICAgICAgIHJldHVybiB0b2tlbkluTG9jYWxGb3JhZ2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodXNlcklubG9jYWxmb3JhZ2UpIHtcclxuICAgICAgICAgIC8vcmVxdWVzdGluZyBub3RpZmljYXRpb24gcGVybWlzc2lvbiBmcm9tIGJyb3dzZXJcclxuICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGF3YWl0IE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpO1xyXG4gICAgICAgICAgaWYgKHN0YXR1cyAmJiBzdGF0dXMgPT09IFwiZ3JhbnRlZFwiKSB7XHJcbiAgICAgICAgICAgIC8vZ2V0dGluZyB0b2tlbiBmcm9tIEZDTVxyXG4gICAgICAgICAgICBjb25zdCBmY21fdG9rZW4gPSBhd2FpdCBtZXNzYWdpbmcuZ2V0VG9rZW4oKTtcclxuICAgICAgICAgICAgaWYgKGZjbV90b2tlbikge1xyXG4gICAgICAgICAgICAgIC8vc2V0dGluZyBGQ00gdG9rZW4gaW4gaW5kZXhlZCBkYiB1c2luZyBsb2NhbGZvcmFnZVxyXG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZmNtX3Rva2VuXCIsIGZjbV90b2tlbik7XHJcbiAgICAgICAgICAgICAgLy9yZXR1cm4gdGhlIEZDTSB0b2tlbiBhZnRlciBzYXZpbmcgaXRcclxuICAgICAgICAgICAgICByZXR1cm4gZmNtX3Rva2VuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxufTtcclxuZXhwb3J0IHsgZmlyZWJhc2VDbG91ZE1lc3NhZ2luZyB9O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hcHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvbWVzc2FnaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==