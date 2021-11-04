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
/*! exports provided: getMenu, getAuth, onLogin, postChangePass, forgotPassword, getProductSearch, getSearchJenisChannel, getProductAvgSales, getSearchOutlet, getBrand, getProductByJenisChannel, getKontenWorkVisit, getHnaAvg, postProfilePic, viewProfilePic, getSmrByCabang, viewOutletClass, getNotificationbyUsername, getPimcaByCabang, getHargaEceran, getOutletSpreadingNearMe, insertOutletSpreading, getPlanList, getPlanId, getPosm, getPlanHistory, submitVisitPlan, submitVisitPlanDposm, getInvoiceDataPosm, getInvoiceData, getPlanMonthlyHistory, viewFile, getMasterVisitPlan, deleteMasterPlanSMR, saveMasterPlanVisit, getApproval, getPlanById, getRevisePlanListSmr, updateDataPosmPlan, updateDataProdukPlan, insertFilePlan, getVisitPlanProduct, getRecapOrder, submitVisitUnplan, submitVisitUnplanDposm, getInvoiceDataUnplan, getInvoiceDataPosmUnplan, getUnplanMonthlyHistory, viewFileUnplan, getUnplanNearMe, getUnplanById, getReviseUnPlanListSmr, updateDataPosmUnplan, updateDataProdukUnplan, insertFileUnplan, getUnPlanProducts, submitVisitSpreading, submitVisitSpreadingDposm, getInvoiceDataSpreading, getInvoiceDataPosmSpreading, viewFileSpreading, getSpreadingMonthlyHistory, getSpreadingById, getReviseSpreadingListSmr, updateDataPosmSpreading, updateDataProdukSpreading, insertFileSpreading, getSpreadingProduct, getAllWorkVisit, getWorkVisitMonthlyHistory, getWorkVisitRating, submitWorkVisit, getMasterWorkVisit, saveMasterWorkVisit, deleteMasterWorkVisit, getDayProgram, getDayPromo, getMonthProgram, getMonthPromo, getAllAnnouncement, updateReadAnnouncement, getSalesTargetSMR, getSalesTarget75SMR, getProduktifitas, getFrontliner, getNoo, getWorkDay, getKpiInventiveMonthlySMR, getKpiInventiveMonthlyPimca, getIncentiveYearly, getSalesTargetPimca, getSalesTarget75Pimca, getFrontlinerPimca, submitIncentiveSmr, getIncentiveApproval, getIncentiveStatus, getIncentiveDetailbyID, getBenefitCodeCabang, approvalReject, approvalRevise, approvalApprove, approvalSubmit */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOutletSpreadingNearMe", function() { return getOutletSpreadingNearMe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertOutletSpreading", function() { return insertOutletSpreading; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecapOrder", function() { return getRecapOrder; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitIncentiveSmr", function() { return submitIncentiveSmr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIncentiveApproval", function() { return getIncentiveApproval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIncentiveStatus", function() { return getIncentiveStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIncentiveDetailbyID", function() { return getIncentiveDetailbyID; });
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
};

const getOutletSpreadingNearMe = (longitude, latitude) => {
  return fetch(`https://m-one.kalbe.co.id:8243/t/kalbe.co.id/SakamorMasterData/v1/api/MasterDataLokal/GetOutletSpreadingNearMe?username=lukmanjkt&latitude=${latitude}&longitude=${longitude}`, // `https://m-one.kalbe.co.id:8243/t/kalbe.co.id/SakamorMasterData/v1/api/MasterDataLokal/GetOutletSpreadingNearMe?username=lukmanjkt&latitude=-6.20721126&longitude=106.92282457`,
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

const insertOutletSpreading = data => {
  // console.log(data);
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_MASTER"] + "/MasterDataLokal/InsertOutletSpreading", {
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
};

const getRecapOrder = (usernameSMR, kodeCabang, dateFrom, dateTo) => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_VISIT_PLAN"] + `/ActivityVisitPlan/GetRekapOrder?usernameSMR=${usernameSMR}&kodeCabang=${kodeCabang}&dateStringFrom=${moment__WEBPACK_IMPORTED_MODULE_0___default()(dateFrom).format("YYYY-MM-DD")}&dateStringTo=${moment__WEBPACK_IMPORTED_MODULE_0___default()(dateTo).format("YYYY-MM-DD")}`, {
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
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_INCENTIVE"] + `/KpiIncentiveMonthly/IncentiveCalculatorPimca/20/${moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format("YYYY-MM")}-01/ABM`, {
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
};

const submitIncentiveSmr = data => {
  return fetch(_constant__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_1__["API_INCENTIVE"] + `/KpiIncentiveMonthly/InsertInsentifBulanan`, {
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
  });
};

const getIncentiveApproval = userData => {
  return fetch( // API_URL +
  //   API_INCENTIVE +
  //   `/KpiIncentiveMonthly​/GetInsentifBulananForApproval​/${userData.kodeCabang}`,
  `https://m-one.kalbe.co.id:8243/t/kalbe.co.id/SakamorIncentive/v1/api/KpiIncentiveMonthly/GetInsentifBulananForApproval/32`, {
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

const getIncentiveStatus = (userData, date) => {
  return fetch(`https://m-one.kalbe.co.id:8243/t/kalbe.co.id/SakamorIncentive/v1/api/KpiIncentiveMonthly/GetInsentifDetailBy?username=${userData.username}&periode=${date}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    // console.log(data);
    return data;
  }).catch(err => {
    console.log(err);
  });
};

const getIncentiveDetailbyID = id => {
  return fetch(`https://m-one.kalbe.co.id:8243/t/kalbe.co.id/SakamorIncentive/v1/api/KpiIncentiveMonthly/GetInsentifDetailBy/${id}`, {
    headers: {
      apiKey: _constant__WEBPACK_IMPORTED_MODULE_1__["TOKEN"]
    }
  }).then(response => {
    return response.json();
  }).then(data => {
    // console.log(data);
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

/***/ "./store/actions/setSpreadingNearMe.js":
/*!*********************************************!*\
  !*** ./store/actions/setSpreadingNearMe.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (dispatch => ({
  setSpreadingNearMe: async data => {
    try {
      dispatch({
        type: "SET_SPREADING_NEARME",
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
/* harmony import */ var _actions_setSpreadingNearMe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./actions/setSpreadingNearMe */ "./store/actions/setSpreadingNearMe.js");
/* harmony import */ var _actions_setDefaultVisitPlan__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./actions/setDefaultVisitPlan */ "./store/actions/setDefaultVisitPlan.js");
/* harmony import */ var _actions_setDefaultVisitUnplan__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./actions/setDefaultVisitUnplan */ "./store/actions/setDefaultVisitUnplan.js");
/* harmony import */ var _actions_setDefaultVisitSpreading__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./actions/setDefaultVisitSpreading */ "./store/actions/setDefaultVisitSpreading.js");
/* harmony import */ var _actions_setDefaultRevise__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./actions/setDefaultRevise */ "./store/actions/setDefaultRevise.js");
/* harmony import */ var _actions_setReviseAvability__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./actions/setReviseAvability */ "./store/actions/setReviseAvability.js");
/* harmony import */ var _actions_setReviseVisibility__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./actions/setReviseVisibility */ "./store/actions/setReviseVisibility.js");
/* harmony import */ var _actions_setFocusApproval__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./actions/setFocusApproval */ "./store/actions/setFocusApproval.js");

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
  const actions = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(_actions_userLogin__WEBPACK_IMPORTED_MODULE_9__["default"])(dispatch)), Object(_actions_setMenu__WEBPACK_IMPORTED_MODULE_10__["default"])(dispatch)), Object(_actions_keepState__WEBPACK_IMPORTED_MODULE_11__["default"])(dispatch)), Object(_actions_setPlanVisibility__WEBPACK_IMPORTED_MODULE_12__["default"])(dispatch)), Object(_actions_setPlanAvability__WEBPACK_IMPORTED_MODULE_13__["default"])(dispatch)), Object(_actions_setPlanCatatan__WEBPACK_IMPORTED_MODULE_14__["default"])(dispatch)), Object(_actions_setPlanCheckIn__WEBPACK_IMPORTED_MODULE_15__["default"])(dispatch)), Object(_actions_setDefaultVisitPlan__WEBPACK_IMPORTED_MODULE_31__["default"])(dispatch)), Object(_actions_setUnplanVisibility__WEBPACK_IMPORTED_MODULE_17__["default"])(dispatch)), Object(_actions_setUnplanAvability__WEBPACK_IMPORTED_MODULE_16__["default"])(dispatch)), Object(_actions_setUnplanCatatan__WEBPACK_IMPORTED_MODULE_18__["default"])(dispatch)), Object(_actions_setUnplanCheckIn__WEBPACK_IMPORTED_MODULE_19__["default"])(dispatch)), Object(_actions_setUnplanJenisChannel__WEBPACK_IMPORTED_MODULE_20__["default"])(dispatch)), Object(_actions_setUnplanOutlet__WEBPACK_IMPORTED_MODULE_21__["default"])(dispatch)), Object(_actions_setDefaultVisitUnplan__WEBPACK_IMPORTED_MODULE_32__["default"])(dispatch)), Object(_actions_setSpreadingVisibility__WEBPACK_IMPORTED_MODULE_23__["default"])(dispatch)), Object(_actions_setSpreadingAvability__WEBPACK_IMPORTED_MODULE_22__["default"])(dispatch)), Object(_actions_setSpreadingCatatan__WEBPACK_IMPORTED_MODULE_24__["default"])(dispatch)), Object(_actions_setSpreadingAlamat__WEBPACK_IMPORTED_MODULE_25__["default"])(dispatch)), Object(_actions_setSpreadingNewOutlet__WEBPACK_IMPORTED_MODULE_26__["default"])(dispatch)), Object(_actions_setSpreadingCheckIn__WEBPACK_IMPORTED_MODULE_27__["default"])(dispatch)), Object(_actions_setSpreadingJenisChannel__WEBPACK_IMPORTED_MODULE_28__["default"])(dispatch)), Object(_actions_setSpreadingOutlet__WEBPACK_IMPORTED_MODULE_29__["default"])(dispatch)), Object(_actions_setSpreadingNearMe__WEBPACK_IMPORTED_MODULE_30__["default"])(dispatch)), Object(_actions_setDefaultVisitSpreading__WEBPACK_IMPORTED_MODULE_33__["default"])(dispatch)), Object(_actions_setFocusApproval__WEBPACK_IMPORTED_MODULE_37__["default"])(dispatch)), Object(_actions_setReviseAvability__WEBPACK_IMPORTED_MODULE_35__["default"])(dispatch)), Object(_actions_setReviseVisibility__WEBPACK_IMPORTED_MODULE_36__["default"])(dispatch)), Object(_actions_setDefaultRevise__WEBPACK_IMPORTED_MODULE_34__["default"])(dispatch)), []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Stores.Provider, {
    value: {
      state,
      dispatch,
      actions
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 125,
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
  outlet: {},
  nearMe: false
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

    case "SET_SPREADING_NEARME":
      return _objectSpread(_objectSpread({}, state), {}, {
        nearMe: action.payload
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVyLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9rZWVwU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZXREZWZhdWx0UmV2aXNlLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0RGVmYXVsdFZpc2l0UGxhbi5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldERlZmF1bHRWaXNpdFNwcmVhZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldERlZmF1bHRWaXNpdFVucGxhbi5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldEZvY3VzQXBwcm92YWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZXRNZW51LmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0UGxhbkF2YWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFBsYW5DYXRhdGFuLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0UGxhbkNoZWNrSW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZXRQbGFuVmlzaWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFJldmlzZUF2YWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFJldmlzZVZpc2liaWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZXRTcHJlYWRpbmdBbGFtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZXRTcHJlYWRpbmdBdmFiaWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZXRTcHJlYWRpbmdDYXRhdGFuLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0U3ByZWFkaW5nQ2hlY2tJbi5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFNwcmVhZGluZ0plbmlzQ2hhbm5lbC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFNwcmVhZGluZ05lYXJNZS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFNwcmVhZGluZ05ld091dGxldC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFNwcmVhZGluZ091dGxldC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFNwcmVhZGluZ1Zpc2liaWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZXRVbnBsYW5BdmFiaWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9zZXRVbnBsYW5DYXRhdGFuLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvc2V0VW5wbGFuQ2hlY2tJbi5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFVucGxhbkplbmlzQ2hhbm5lbC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFVucGxhbk91dGxldC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3NldFVucGxhblZpc2liaWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy91c2VyTG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvYXBwcm92YWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9yZXZpc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy92aXNpdFBsYW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvdmlzaXRTcHJlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvdmlzaXRVbnBsYW4uanMiLCJ3ZWJwYWNrOi8vLy4vd2VicHVzaC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9tZXNzYWdpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQVBJX1VSTCIsIkFQSV9VU0VSIiwiQVBJX01BU1RFUiIsIkFQSV9WSVNJVF9QTEFOIiwiQVBJX1ZJU0lUX1VOUExBTiIsIkFQSV9WSVNJVF9TUFJFQURJTkciLCJBUElfV09SS19WSVNJVCIsIkFQSV9DQUxFTkRBUl9QUk9HUkFNIiwiQVBJX0NBTEVOREFSX1BST01PIiwiQVBJX0FOTk9VTkNFTUVOVCIsIkFQSV9JTkNFTlRJVkUiLCJBUElfQkVORUZJVCIsIkFQSV9BUFBST1ZBTCIsIlRPS0VOIiwibm93IiwiRGF0ZSIsImRhdGUiLCJnZXREYXRlIiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsImNvbXBhcmUiLCJhIiwiYiIsIm5vbW9yIiwiZ2V0TWVudSIsInVzZXJEYXRhIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwiZW1haWwiLCJoZWFkZXJzIiwiYXBpS2V5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjYXRjaCIsImVyciIsImdldEF1dGgiLCJ1c2VybmFtZSIsIm9uTG9naW4iLCJ2YWx1ZXMiLCJwYXNzd29yZCIsIm1ldGhvZCIsInNldFdyb25nVXNlciIsInBvc3RDaGFuZ2VQYXNzIiwiQWNjZXB0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmb3Jnb3RQYXNzd29yZCIsImdldFBvc20iLCJnZXRQcm9kdWN0U2VhcmNoIiwic2VhcmNoIiwiZ2V0UHJvZHVjdEJ5SmVuaXNDaGFubmVsIiwiamVuaXNDaGFubmVsSWQiLCJnZXRQcm9kdWN0QXZnU2FsZXMiLCJwcm9kdWN0Q29kZSIsIm91dGxldENvZGUiLCJnZXRIbmFBdmciLCJnZXRTZWFyY2hKZW5pc0NoYW5uZWwiLCJtb2R1bCIsImdldFNlYXJjaE91dGxldCIsImdldEJyYW5kIiwiZ2V0S29udGVuV29ya1Zpc2l0IiwiZ2V0U2FsZXNUYXJnZXRTTVIiLCJnZXRTYWxlc1RhcmdldDc1U01SIiwiZ2V0SGFyZ2FFY2VyYW4iLCJwcm9kdWtDb2RlIiwicG9zdFByb2ZpbGVQaWMiLCJmaWxlIiwiZm9ybWRhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInZpZXdQcm9maWxlUGljIiwic3RhdHVzIiwiYmxvYiIsIm91dHNpZGUiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJ2aWV3T3V0bGV0Q2xhc3MiLCJvdXRsZXRJRCIsImlkIiwiZ2V0T3V0bGV0U3ByZWFkaW5nTmVhck1lIiwibG9uZ2l0dWRlIiwibGF0aXR1ZGUiLCJpbnNlcnRPdXRsZXRTcHJlYWRpbmciLCJnZXRQbGFuTGlzdCIsInJlcyIsImZpbHRlciIsInZhbCIsImlzQ2hlY2tPdXQiLCJnZXRQbGFuSWQiLCJwbGFuTGlzdCIsImxlbmd0aCIsInNhbWVQbGFuIiwiZ2V0UGxhbkhpc3RvcnkiLCJzdWJtaXRWaXNpdFBsYW4iLCJzdWJtaXRWaXNpdFBsYW5EcG9zbSIsImRwb3NtIiwibmFtYUZpbGUiLCJnZXRJbnZvaWNlRGF0YSIsInZpc2l0UGxhbklkIiwiZ2V0SW52b2ljZURhdGFQb3NtIiwic29ydERhdGEiLCJzb3J0Iiwidmlld0ZpbGUiLCJnZXRQbGFuTW9udGhseUhpc3RvcnkiLCJkYXRlQSIsInRhbmdnYWwiLCJkYXRlQiIsImdldE1hc3RlclZpc2l0UGxhbiIsImdldEFwcHJvdmFsIiwiZ2V0UmV2aXNlUGxhbkxpc3RTbXIiLCJkZWxldGVNYXN0ZXJQbGFuU01SIiwic2F2ZU1hc3RlclBsYW5WaXNpdCIsImdldFBsYW5CeUlkIiwidXBkYXRlRGF0YVBvc21QbGFuIiwidXBkYXRlRGF0YVByb2R1a1BsYW4iLCJpbnNlcnRGaWxlUGxhbiIsIm5hbWUiLCJnZXRWaXNpdFBsYW5Qcm9kdWN0IiwiZ2V0UmVjYXBPcmRlciIsInVzZXJuYW1lU01SIiwia29kZUNhYmFuZyIsImRhdGVGcm9tIiwiZGF0ZVRvIiwibW9tZW50IiwiZm9ybWF0Iiwic3VibWl0VmlzaXRVbnBsYW4iLCJzdWJtaXRWaXNpdFVucGxhbkRwb3NtIiwiZ2V0SW52b2ljZURhdGFVbnBsYW4iLCJnZXRVbnBsYW5CeUlkIiwiZ2V0SW52b2ljZURhdGFQb3NtVW5wbGFuIiwidmlzaXRVbnBsYW5JZCIsInVwZGF0ZURhdGFQb3NtVW5wbGFuIiwidXBkYXRlRGF0YVByb2R1a1VucGxhbiIsImluc2VydEZpbGVVbnBsYW4iLCJ2aWV3RmlsZVVucGxhbiIsImdldFVucGxhbk1vbnRobHlIaXN0b3J5IiwiZ2V0VW5wbGFuTmVhck1lIiwiZ2V0UmV2aXNlVW5QbGFuTGlzdFNtciIsImdldFVuUGxhblByb2R1Y3RzIiwic3VibWl0VmlzaXRTcHJlYWRpbmciLCJzdWJtaXRWaXNpdFNwcmVhZGluZ0Rwb3NtIiwiZ2V0SW52b2ljZURhdGFTcHJlYWRpbmciLCJnZXRJbnZvaWNlRGF0YVBvc21TcHJlYWRpbmciLCJ2aWV3RmlsZVNwcmVhZGluZyIsImdldFNwcmVhZGluZ01vbnRobHlIaXN0b3J5IiwiZ2V0U3ByZWFkaW5nQnlJZCIsImdldFJldmlzZVNwcmVhZGluZ0xpc3RTbXIiLCJ1cGRhdGVEYXRhUG9zbVNwcmVhZGluZyIsInVwZGF0ZURhdGFQcm9kdWtTcHJlYWRpbmciLCJpbnNlcnRGaWxlU3ByZWFkaW5nIiwiZ2V0U3ByZWFkaW5nUHJvZHVjdCIsImdldEFsbFdvcmtWaXNpdCIsImdldFdvcmtWaXNpdE1vbnRobHlIaXN0b3J5IiwiZ2V0V29ya1Zpc2l0UmF0aW5nIiwic3VibWl0V29ya1Zpc2l0IiwiZ2V0TWFzdGVyV29ya1Zpc2l0Iiwic2F2ZU1hc3RlcldvcmtWaXNpdCIsImRlbGV0ZU1hc3RlcldvcmtWaXNpdCIsImdldERheVByb21vIiwiZ2V0RGF5UHJvZ3JhbSIsImdldE1vbnRoUHJvbW8iLCJnZXRNb250aFByb2dyYW0iLCJnZXRBbGxBbm5vdW5jZW1lbnQiLCJ1cGRhdGVSZWFkQW5ub3VuY2VtZW50IiwiZ2V0UHJvZHVrdGlmaXRhcyIsImdldEZyb250bGluZXIiLCJnZXROb28iLCJnZXRXb3JrRGF5IiwiZ2V0S3BpSW52ZW50aXZlTW9udGhseVNNUiIsImdldEtwaUludmVudGl2ZU1vbnRobHlQaW1jYSIsImdldEluY2VudGl2ZVllYXJseSIsImdldFNhbGVzVGFyZ2V0UGltY2EiLCJnZXRTYWxlc1RhcmdldDc1UGltY2EiLCJnZXRGcm9udGxpbmVyUGltY2EiLCJnZXRTbXJCeUNhYmFuZyIsImNhYmFuZyIsInRla3MiLCJnZXROb3RpZmljYXRpb25ieVVzZXJuYW1lIiwiZ2V0UGltY2FCeUNhYmFuZyIsInN1Ym1pdEluY2VudGl2ZVNtciIsImdldEluY2VudGl2ZUFwcHJvdmFsIiwiZ2V0SW5jZW50aXZlU3RhdHVzIiwiZ2V0SW5jZW50aXZlRGV0YWlsYnlJRCIsImdldEJlbmVmaXRDb2RlQ2FiYW5nIiwiYXBwcm92YWxSZWplY3QiLCJhcHByb3ZhbFJldmlzZSIsImFwcHJvdmFsQXBwcm92ZSIsImFwcHJvdmFsU3VibWl0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ1c2VFZmZlY3QiLCJ1c2VyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIlJvdXRlciIsInB1c2giLCJzZXRUb2tlbiIsInRva2VuIiwiZmlyZWJhc2VDbG91ZE1lc3NhZ2luZyIsImluaXQiLCJnZXRNZXNzYWdlIiwiZXJyb3IiLCJtZXNzYWdpbmciLCJmaXJlYmFzZSIsIm9uTWVzc2FnZSIsIm1lc3NhZ2UiLCJkaXNwYXRjaCIsImtlZXBTdGF0ZSIsInR5cGUiLCJwYXlsb2FkIiwiZSIsInNldERlZmF1bHRSZXZpc2UiLCJzZXREZWZhdWx0VmlzaXRQbGFuIiwic2V0RGVmYXVsdFZpc2l0U3ByZWFkaW5nIiwic2V0RGVmYXVsdFZpc2l0VW5wbGFuIiwic2V0Rm9jdXNBcHByb3ZhbCIsInNldE1lbnUiLCJzZXRQbGFuQXZhYmlsaXR5Iiwic2V0UGxhbkNhdGF0YW4iLCJzZXRQbGFuQ2hlY2tJbiIsInNldFBsYW5WaXNpYmlsaXR5Iiwic2V0UmV2aXNlQXZhYmlsaXR5Iiwic2V0UmV2aXNlVmlzaWJpbGl0eSIsInNldFNwcmVhZGluZ0NhdGF0YW4iLCJzZXRTcHJlYWRpbmdBdmFiaWxpdHkiLCJzZXRTcHJlYWRpbmdBbGFtYXQiLCJzZXRTcHJlYWRpbmdDaGVja0luIiwic2V0U3ByZWFkaW5nSmVuaXNDaGFubmVsIiwic2V0U3ByZWFkaW5nTmVhck1lIiwic2V0U3ByZWFkaW5nTmV3T3V0bGV0Iiwic2V0U3ByZWFkaW5nT3V0bGV0Iiwic2V0U3ByZWFkaW5nVmlzaWJpbGl0eSIsInNldFVucGxhbkF2YWJpbGl0eSIsInNldFVucGxhbkNhdGF0YW4iLCJzZXRVbnBsYW5DaGVja0luIiwic2V0VW5wbGFuSmVuaXNDaGFubmVsIiwic2V0VW5wbGFuT3V0bGV0Iiwic2V0VW5wbGFuVmlzaWJpbGl0eSIsInVzZXJMb2dpbiIsIlN0b3JlcyIsImNyZWF0ZUNvbnRleHQiLCJTdG9yZSIsImNoaWxkcmVuIiwic3RhdGUiLCJ1c2VSZWR1Y2VyIiwicHJldlN0YXRlIiwiYWN0aW9uIiwidXNlclJlZHVjZXIiLCJtZW51UmVkdWNlciIsInZpc2l0UGxhblJlZHVjZXIiLCJ2aXNpdFVucGxhblJlZHVjZXIiLCJ2aXNpdFNwcmVhZGluZ1JlZHVjZXIiLCJhcHByb3ZhbFJlZHVjZXIiLCJyZXZpc2VSZWR1Y2VyIiwiZGVmYXVsdFVzZXIiLCJkZWZhdWx0TWVudSIsImRlZmF1bHRWaXNpdFBsYW4iLCJkZWZhdWx0VmlzaXRVbnBsYW4iLCJkZWZhdWx0VmlzaXRTcHJlYWRpbmciLCJkZWZhdWx0QXBwcm92YWwiLCJkZWZhdWx0UmV2aXNlIiwiYWN0aW9ucyIsInVzZU1lbW8iLCJmb2N1c0FwcHJvdmFsIiwibWVudSIsInNldEl0ZW0iLCJ1c2VyTWVudSIsInBhcnNlIiwidmlzaWJpbGl0eSIsImF2YWJpbGl0eSIsImNsZWFyIiwiY2F0YXRhbiIsImNoZWNrSW4iLCJhbGFtYXQiLCJuZXdPdXRsZXQiLCJqZW5pc0NoYW5uZWwiLCJvdXRsZXQiLCJuZWFyTWUiLCJ0b2tlbklubG9jYWxmb3JhZ2UiLCJ1c2VySW5sb2NhbGZvcmFnZSIsImFwcHMiLCJpbml0aWFsaXplQXBwIiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwidG9rZW5JbkxvY2FsRm9yYWdlIiwiTm90aWZpY2F0aW9uIiwicmVxdWVzdFBlcm1pc3Npb24iLCJmY21fdG9rZW4iLCJnZXRUb2tlbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFD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OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJ2YXIgQVBJX1VSTCA9IFwiaHR0cHM6Ly9tLW9uZS5rYWxiZS5jby5pZDo4MjQzL3Qva2FsYmUuY28uaWRcIjtcclxudmFyIEFQSV9VU0VSID0gXCIvVXNlclByb2ZpbGVFeHRlcm5hbC92MS9hcGlcIjtcclxudmFyIEFQSV9NQVNURVIgPSBcIi9TYWthbW9yTWFzdGVyRGF0YS92MS9hcGlcIjtcclxudmFyIEFQSV9WSVNJVF9QTEFOID0gXCIvU2FrYW1vckFjdGl2aXR5VmlzaXRQbGFuL3YxL2FwaVwiO1xyXG52YXIgQVBJX1ZJU0lUX1VOUExBTiA9IFwiL1Nha2Ftb3JBY3Rpdml0eVZpc2l0VW5QbGFuL3YxL2FwaVwiO1xyXG52YXIgQVBJX1ZJU0lUX1NQUkVBRElORyA9IFwiL1Nha2Ftb3JBY3Rpdml0eVNwcmVhZGluZy92MS9hcGlcIjtcclxudmFyIEFQSV9XT1JLX1ZJU0lUID0gXCIvU2FrYW1vckFjdGl2aXR5V29ya1Zpc2l0L3YxL2FwaVwiO1xyXG52YXIgQVBJX0NBTEVOREFSX1BST0dSQU0gPSBcIi9TYWthbW9yS2FsZW5kZXJQcm9ncmFtL3YxL2FwaVwiO1xyXG52YXIgQVBJX0NBTEVOREFSX1BST01PID0gXCIvU2FrYW1vckluZm9Qcm9tby92MS9hcGlcIjtcclxudmFyIEFQSV9BTk5PVU5DRU1FTlQgPSBcIi9TYWthbW9yQW5ub3VuY2VtZW50L3YxL2FwaVwiO1xyXG52YXIgQVBJX0lOQ0VOVElWRSA9IFwiL1Nha2Ftb3JJbmNlbnRpdmUvdjEvYXBpXCI7XHJcbnZhciBBUElfQkVORUZJVCA9IFwiL1Nha2Ftb3JCZW5lZml0cy92MS9hcGlcIjtcclxudmFyIEFQSV9BUFBST1ZBTCA9IFwiL0FwcHJvdmFsQVBJL3YxL2FwaVwiO1xyXG5cclxudmFyIFRPS0VOID1cclxuICBcImV5SjROWFFpT2lKWmFtdDVXa1JWTTA1dFJUUlpiVlpxVDFSamVFNHlSVFJOYlZaclQxZFNhazFYVm1oWlZHaG9XV3BqZUU5VVp6Sk5lbXQ0V1ZFOVBTSXNJbXRwWkNJNkltZGhkR1YzWVhsZlkyVnlkR2xtYVdOaGRHVmZZV3hwWVhNaUxDSjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSlNVekkxTmlKOS5leUp6ZFdJaU9pSnViMkp2Ymk1aGJtUnlZVUJyWVd4aVpTNWpieTVwWkNJc0ltRndjR3hwWTJGMGFXOXVJanA3SW05M2JtVnlJam9pYm05aWIyNHVZVzVrY21GQWEyRnNZbVV1WTI4dWFXUWlMQ0owYVdWeVVYVnZkR0ZVZVhCbElqcHVkV3hzTENKMGFXVnlJam9pVlc1c2FXMXBkR1ZrSWl3aWJtRnRaU0k2SWxOaGEyRnRiM0lnTWk0d0lpd2lhV1FpT2pFNUxDSjFkV2xrSWpvaU1UUTVaV1UwTm1VdFpERTNOaTAwTldReExXRTNObUV0T1RBek0yUmhOemM0T1RVNEluMHNJbWx6Y3lJNkltaDBkSEJ6T2x3dlhDOXRMVzl1WlM1cllXeGlaUzVqYnk1cFpEbzVORFF6WEM5dllYVjBhREpjTDNSdmEyVnVJaXdpZEdsbGNrbHVabThpT25zaVZXNXNhVzFwZEdWa0lqcDdJblJwWlhKUmRXOTBZVlI1Y0dVaU9pSnlaWEYxWlhOMFEyOTFiblFpTENKbmNtRndhRkZNVFdGNFEyOXRjR3hsZUdsMGVTSTZNQ3dpWjNKaGNHaFJURTFoZUVSbGNIUm9Jam93TENKemRHOXdUMjVSZFc5MFlWSmxZV05vSWpwMGNuVmxMQ0p6Y0dsclpVRnljbVZ6ZEV4cGJXbDBJam93TENKemNHbHJaVUZ5Y21WemRGVnVhWFFpT201MWJHeDlmU3dpYTJWNWRIbHdaU0k2SWxOQlRrUkNUMWdpTENKd1pYSnRhWFIwWldSU1pXWmxjbVZ5SWpvaUlpd2ljM1ZpYzJOeWFXSmxaRUZRU1hNaU9sdDdJbk4xWW5OamNtbGlaWEpVWlc1aGJuUkViMjFoYVc0aU9pSnJZV3hpWlM1amJ5NXBaQ0lzSW01aGJXVWlPaUpUWVd0aGJXOXlRV04wYVhacGRIbFdhWE5wZEZCc1lXNGlMQ0pqYjI1MFpYaDBJam9pWEM5MFhDOXJZV3hpWlM1amJ5NXBaRnd2VTJGcllXMXZja0ZqZEdsMmFYUjVWbWx6YVhSUWJHRnVYQzkyTVNJc0luQjFZbXhwYzJobGNpSTZJbTV2WW05dUxtRnVaSEpoUUd0aGJHSmxMbU52TG1sa0lpd2lkbVZ5YzJsdmJpSTZJbll4SWl3aWMzVmljMk55YVhCMGFXOXVWR2xsY2lJNklsVnViR2x0YVhSbFpDSjlMSHNpYzNWaWMyTnlhV0psY2xSbGJtRnVkRVJ2YldGcGJpSTZJbXRoYkdKbExtTnZMbWxrSWl3aWJtRnRaU0k2SWxWelpYSlFjbTltYVd4bFJYaDBaWEp1WVd3aUxDSmpiMjUwWlhoMElqb2lYQzkwWEM5cllXeGlaUzVqYnk1cFpGd3ZWWE5sY2xCeWIyWnBiR1ZGZUhSbGNtNWhiRnd2ZGpFaUxDSndkV0pzYVhOb1pYSWlPaUp1YjJKdmJpNWhibVJ5WVVCcllXeGlaUzVqYnk1cFpDSXNJblpsY25OcGIyNGlPaUoyTVNJc0luTjFZbk5qY21sd2RHbHZibFJwWlhJaU9pSlZibXhwYldsMFpXUWlmU3g3SW5OMVluTmpjbWxpWlhKVVpXNWhiblJFYjIxaGFXNGlPaUpyWVd4aVpTNWpieTVwWkNJc0ltNWhiV1VpT2lKVFlXdGhiVzl5VFdGemRHVnlSR0YwWVNJc0ltTnZiblJsZUhRaU9pSmNMM1JjTDJ0aGJHSmxMbU52TG1sa1hDOVRZV3RoYlc5eVRXRnpkR1Z5UkdGMFlWd3ZkakVpTENKd2RXSnNhWE5vWlhJaU9pSnViMkp2Ymk1aGJtUnlZVUJyWVd4aVpTNWpieTVwWkNJc0luWmxjbk5wYjI0aU9pSjJNU0lzSW5OMVluTmpjbWx3ZEdsdmJsUnBaWElpT2lKVmJteHBiV2wwWldRaWZTeDdJbk4xWW5OamNtbGlaWEpVWlc1aGJuUkViMjFoYVc0aU9pSnJZV3hpWlM1amJ5NXBaQ0lzSW01aGJXVWlPaUpUWVd0aGJXOXlRV04wYVhacGRIbFRjSEpsWVdScGJtY2lMQ0pqYjI1MFpYaDBJam9pWEM5MFhDOXJZV3hpWlM1amJ5NXBaRnd2VTJGcllXMXZja0ZqZEdsMmFYUjVVM0J5WldGa2FXNW5YQzkyTVNJc0luQjFZbXhwYzJobGNpSTZJbTV2WW05dUxtRnVaSEpoUUd0aGJHSmxMbU52TG1sa0lpd2lkbVZ5YzJsdmJpSTZJbll4SWl3aWMzVmljMk55YVhCMGFXOXVWR2xsY2lJNklsVnViR2x0YVhSbFpDSjlMSHNpYzNWaWMyTnlhV0psY2xSbGJtRnVkRVJ2YldGcGJpSTZJbXRoYkdKbExtTnZMbWxrSWl3aWJtRnRaU0k2SWxOaGEyRnRiM0pCWTNScGRtbDBlVlpwYzJsMFZXNVFiR0Z1SWl3aVkyOXVkR1Y0ZENJNklsd3ZkRnd2YTJGc1ltVXVZMjh1YVdSY0wxTmhhMkZ0YjNKQlkzUnBkbWwwZVZacGMybDBWVzVRYkdGdVhDOTJNU0lzSW5CMVlteHBjMmhsY2lJNkltNXZZbTl1TG1GdVpISmhRR3RoYkdKbExtTnZMbWxrSWl3aWRtVnljMmx2YmlJNkluWXhJaXdpYzNWaWMyTnlhWEIwYVc5dVZHbGxjaUk2SWxWdWJHbHRhWFJsWkNKOUxIc2ljM1ZpYzJOeWFXSmxjbFJsYm1GdWRFUnZiV0ZwYmlJNkltdGhiR0psTG1OdkxtbGtJaXdpYm1GdFpTSTZJbE5oYTJGdGIzSkJZM1JwZG1sMGVWZHZjbXRXYVhOcGRDSXNJbU52Ym5SbGVIUWlPaUpjTDNSY0wydGhiR0psTG1OdkxtbGtYQzlUWVd0aGJXOXlRV04wYVhacGRIbFhiM0pyVm1semFYUmNMM1l4SWl3aWNIVmliR2x6YUdWeUlqb2libTlpYjI0dVlXNWtjbUZBYTJGc1ltVXVZMjh1YVdRaUxDSjJaWEp6YVc5dUlqb2lkakVpTENKemRXSnpZM0pwY0hScGIyNVVhV1Z5SWpvaVZXNXNhVzFwZEdWa0luMHNleUp6ZFdKelkzSnBZbVZ5VkdWdVlXNTBSRzl0WVdsdUlqb2lhMkZzWW1VdVkyOHVhV1FpTENKdVlXMWxJam9pVTJGcllXMXZja3RoYkdWdVpHVnlVSEp2WjNKaGJTSXNJbU52Ym5SbGVIUWlPaUpjTDNSY0wydGhiR0psTG1OdkxtbGtYQzlUWVd0aGJXOXlTMkZzWlc1a1pYSlFjbTluY21GdFhDOTJNU0lzSW5CMVlteHBjMmhsY2lJNkltNXZZbTl1TG1GdVpISmhRR3RoYkdKbExtTnZMbWxrSWl3aWRtVnljMmx2YmlJNkluWXhJaXdpYzNWaWMyTnlhWEIwYVc5dVZHbGxjaUk2SWxWdWJHbHRhWFJsWkNKOUxIc2ljM1ZpYzJOeWFXSmxjbFJsYm1GdWRFUnZiV0ZwYmlJNkltdGhiR0psTG1OdkxtbGtJaXdpYm1GdFpTSTZJbE5oYTJGdGIzSkpibVp2VUhKdmJXOGlMQ0pqYjI1MFpYaDBJam9pWEM5MFhDOXJZV3hpWlM1amJ5NXBaRnd2VTJGcllXMXZja2x1Wm05UWNtOXRiMXd2ZGpFaUxDSndkV0pzYVhOb1pYSWlPaUp1YjJKdmJpNWhibVJ5WVVCcllXeGlaUzVqYnk1cFpDSXNJblpsY25OcGIyNGlPaUoyTVNJc0luTjFZbk5qY21sd2RHbHZibFJwWlhJaU9pSlZibXhwYldsMFpXUWlmU3g3SW5OMVluTmpjbWxpWlhKVVpXNWhiblJFYjIxaGFXNGlPaUpyWVd4aVpTNWpieTVwWkNJc0ltNWhiV1VpT2lKVFlXdGhiVzl5UVc1dWIzVnVZMlZ0Wlc1MElpd2lZMjl1ZEdWNGRDSTZJbHd2ZEZ3dmEyRnNZbVV1WTI4dWFXUmNMMU5oYTJGdGIzSkJibTV2ZFc1alpXMWxiblJjTDNZeElpd2ljSFZpYkdsemFHVnlJam9pYm05aWIyNHVZVzVrY21GQWEyRnNZbVV1WTI4dWFXUWlMQ0oyWlhKemFXOXVJam9pZGpFaUxDSnpkV0p6WTNKcGNIUnBiMjVVYVdWeUlqb2lWVzVzYVcxcGRHVmtJbjBzZXlKemRXSnpZM0pwWW1WeVZHVnVZVzUwUkc5dFlXbHVJam9pYTJGc1ltVXVZMjh1YVdRaUxDSnVZVzFsSWpvaVFYVjBhRzl5YVhwaGRHbHZia0ZRU1NJc0ltTnZiblJsZUhRaU9pSmNMM1JjTDJ0aGJHSmxMbU52TG1sa1hDOUJkWFJvYjNKcGVtRjBhVzl1UVZCSlhDOTJNU0lzSW5CMVlteHBjMmhsY2lJNkltMTFhR0Z0YldGa0xtUnBZVzVwUUd0aGJHSmxMbU52TG1sa0lpd2lkbVZ5YzJsdmJpSTZJbll4SWl3aWMzVmljMk55YVhCMGFXOXVWR2xsY2lJNklsVnViR2x0YVhSbFpDSjlMSHNpYzNWaWMyTnlhV0psY2xSbGJtRnVkRVJ2YldGcGJpSTZJbXRoYkdKbExtTnZMbWxrSWl3aWJtRnRaU0k2SWxKdmJHVWlMQ0pqYjI1MFpYaDBJam9pWEM5MFhDOXJZV3hpWlM1amJ5NXBaRnd2VW05c1pWd3ZkakVpTENKd2RXSnNhWE5vWlhJaU9pSnRkV2hoYlcxaFpDNW9hV1JoZVdGMGRXeHNNVUJyWVd4aVpTNWpieTVwWkNJc0luWmxjbk5wYjI0aU9pSjJNU0lzSW5OMVluTmpjbWx3ZEdsdmJsUnBaWElpT2lKVmJteHBiV2wwWldRaWZTeDdJbk4xWW5OamNtbGlaWEpVWlc1aGJuUkViMjFoYVc0aU9pSnJZV3hpWlM1amJ5NXBaQ0lzSW01aGJXVWlPaUpOYjJSMWJHVkJVRWtpTENKamIyNTBaWGgwSWpvaVhDOTBYQzlyWVd4aVpTNWpieTVwWkZ3dlRXOWtkV3hsUVZCSlhDOTJNU0lzSW5CMVlteHBjMmhsY2lJNkltMTFhR0Z0YldGa0xtUnBZVzVwUUd0aGJHSmxMbU52TG1sa0lpd2lkbVZ5YzJsdmJpSTZJbll4SWl3aWMzVmljMk55YVhCMGFXOXVWR2xsY2lJNklsVnViR2x0YVhSbFpDSjlMSHNpYzNWaWMyTnlhV0psY2xSbGJtRnVkRVJ2YldGcGJpSTZJbXRoYkdKbExtTnZMbWxrSWl3aWJtRnRaU0k2SWxWelpYSlFjbTltYVd4bFFWQkpJaXdpWTI5dWRHVjRkQ0k2SWx3dmRGd3ZhMkZzWW1VdVkyOHVhV1JjTDFWelpYSlFjbTltYVd4bFFWQkpYQzkyTVNJc0luQjFZbXhwYzJobGNpSTZJbTExYUdGdGJXRmtMbVJwWVc1cFFHdGhiR0psTG1OdkxtbGtJaXdpZG1WeWMybHZiaUk2SW5ZeElpd2ljM1ZpYzJOeWFYQjBhVzl1VkdsbGNpSTZJbFZ1YkdsdGFYUmxaQ0o5TEhzaWMzVmljMk55YVdKbGNsUmxibUZ1ZEVSdmJXRnBiaUk2SW10aGJHSmxMbU52TG1sa0lpd2libUZ0WlNJNklsTmhhMkZ0YjNKSmJtTmxiblJwZG1VaUxDSmpiMjUwWlhoMElqb2lYQzkwWEM5cllXeGlaUzVqYnk1cFpGd3ZVMkZyWVcxdmNrbHVZMlZ1ZEdsMlpWd3ZkakVpTENKd2RXSnNhWE5vWlhJaU9pSnViMkp2Ymk1aGJtUnlZVUJyWVd4aVpTNWpieTVwWkNJc0luWmxjbk5wYjI0aU9pSjJNU0lzSW5OMVluTmpjbWx3ZEdsdmJsUnBaWElpT2lKVmJteHBiV2wwWldRaWZTeDdJbk4xWW5OamNtbGlaWEpVWlc1aGJuUkViMjFoYVc0aU9pSnJZV3hpWlM1amJ5NXBaQ0lzSW01aGJXVWlPaUpUWVd0aGJXOXlRbVZ1WldacGRITWlMQ0pqYjI1MFpYaDBJam9pWEM5MFhDOXJZV3hpWlM1amJ5NXBaRnd2VTJGcllXMXZja0psYm1WbWFYUnpYQzkyTVNJc0luQjFZbXhwYzJobGNpSTZJbTV2WW05dUxtRnVaSEpoUUd0aGJHSmxMbU52TG1sa0lpd2lkbVZ5YzJsdmJpSTZJbll4SWl3aWMzVmljMk55YVhCMGFXOXVWR2xsY2lJNklsVnViR2x0YVhSbFpDSjlMSHNpYzNWaWMyTnlhV0psY2xSbGJtRnVkRVJ2YldGcGJpSTZJbXRoYkdKbExtTnZMbWxrSWl3aWJtRnRaU0k2SWtSaGVVOW1aaUlzSW1OdmJuUmxlSFFpT2lKY0wzUmNMMnRoYkdKbExtTnZMbWxrWEM5RVlYbFBabVpjTDNZeElpd2ljSFZpYkdsemFHVnlJam9pYlhWb1lXMXRZV1F1YUdsa1lYbGhkSFZzYkRGQWEyRnNZbVV1WTI4dWFXUWlMQ0oyWlhKemFXOXVJam9pZGpFaUxDSnpkV0p6WTNKcGNIUnBiMjVVYVdWeUlqb2lWVzVzYVcxcGRHVmtJbjBzZXlKemRXSnpZM0pwWW1WeVZHVnVZVzUwUkc5dFlXbHVJam9pYTJGc1ltVXVZMjh1YVdRaUxDSnVZVzFsSWpvaVIyeHZZbUZzTFVGMWRHaGxiblJwWTJGMGFXOXVJaXdpWTI5dWRHVjRkQ0k2SWx3dmRGd3ZhMkZzWW1VdVkyOHVhV1JjTDJGMWRHaGxiblJwWTJGMGFXOXVYQzkyTVNJc0luQjFZbXhwYzJobGNpSTZJbTF2YUdGdGJXRmtMbUZ0YVhKeWRXUnBia0JyWVd4aVpTNWpieTVwWkNJc0luWmxjbk5wYjI0aU9pSjJNU0lzSW5OMVluTmpjbWx3ZEdsdmJsUnBaWElpT2lKVmJteHBiV2wwWldRaWZTeDdJbk4xWW5OamNtbGlaWEpVWlc1aGJuUkViMjFoYVc0aU9pSnJZV3hpWlM1amJ5NXBaQ0lzSW01aGJXVWlPaUpPYjNScFptbGpZWFJwYjI0aUxDSmpiMjUwWlhoMElqb2lYQzkwWEM5cllXeGlaUzVqYnk1cFpGd3ZUbTkwYVdacFkyRjBhVzl1WEM5Mk1TSXNJbkIxWW14cGMyaGxjaUk2SW5KcGVtdHBZVzVoYm1SaExuQnlZV1JwYkd4aGFFQnJZV3hpWlM1amJ5NXBaQ0lzSW5abGNuTnBiMjRpT2lKMk1TSXNJbk4xWW5OamNtbHdkR2x2YmxScFpYSWlPaUpWYm14cGJXbDBaV1FpZlN4N0luTjFZbk5qY21saVpYSlVaVzVoYm5SRWIyMWhhVzRpT2lKcllXeGlaUzVqYnk1cFpDSXNJbTVoYldVaU9pSkJjSEJ5YjNaaGJFRlFTU0lzSW1OdmJuUmxlSFFpT2lKY0wzUmNMMnRoYkdKbExtTnZMbWxrWEM5QmNIQnliM1poYkVGUVNWd3ZkakVpTENKd2RXSnNhWE5vWlhJaU9pSnRkV2hoYlcxaFpDNWthV0Z1YVVCcllXeGlaUzVqYnk1cFpDSXNJblpsY25OcGIyNGlPaUoyTVNJc0luTjFZbk5qY21sd2RHbHZibFJwWlhJaU9pSlZibXhwYldsMFpXUWlmVjBzSW5CbGNtMXBkSFJsWkVsUUlqb2lJaXdpYVdGMElqb3hOak14TnpZeU5UVXdMQ0pxZEdraU9pSm1ZVEZoWkRkbVlTMDNZemxtTFRSbE1tTXRPVFZrWWkwM1l6VTVOVGxqTlRRek1HVWlmUT09LlhtOFgyTWNwVWktazdVWUN5QnRxU1NzZmlLV3JSN3hwVF9EZ1c1a3NucjcwR1NjeExZbVlNSkF0S1pReEY2QW1lZFIxakFzZTM4NElsbXR0M0w2b1I3Q1JpTEVHLXVyM3FKQjlWRGNxSS1ObEVicllyemhla3g1RktlWTJnUTZzQ3EtNHpBbzlMczZJRjZrc3k2VDU4WkZZd05ZazU1T1lvSVJyM0J0R3llWWY1Wng3SS1OMHJ0alg0YmZRcmRublhQR2NlVURxQTEtWkppdTJjY3VKamlnWVJhRGp4SGpFakFmTmdMRDFaVXFWd1l4bVBGNU9MRGI4bU01OWhyWXV3NEU0c3FjQXlZTXhCVmJIbGx4dFhOMWJuU2YxQTdWSm5LT3k1SXZhZkh6aFNReFk2QktNVW50M1VEV2xlR2liMWxWSGd6STNEMDZsWXZFM1BqNXRNdz09XCI7XHJcblxyXG5leHBvcnQge1xyXG4gIFRPS0VOLFxyXG4gIEFQSV9VUkwsXHJcbiAgQVBJX1VTRVIsXHJcbiAgQVBJX01BU1RFUixcclxuICBBUElfVklTSVRfUExBTixcclxuICBBUElfVklTSVRfVU5QTEFOLFxyXG4gIEFQSV9WSVNJVF9TUFJFQURJTkcsXHJcbiAgQVBJX1dPUktfVklTSVQsXHJcbiAgQVBJX0NBTEVOREFSX1BST0dSQU0sXHJcbiAgQVBJX0NBTEVOREFSX1BST01PLFxyXG4gIEFQSV9BTk5PVU5DRU1FTlQsXHJcbiAgQVBJX0lOQ0VOVElWRSxcclxuICBBUElfQkVORUZJVCxcclxuICBBUElfQVBQUk9WQUwsXHJcbn07XHJcbiIsImltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQge1xyXG4gIFRPS0VOLFxyXG4gIEFQSV9VUkwsXHJcbiAgQVBJX1VTRVIsXHJcbiAgQVBJX01BU1RFUixcclxuICBBUElfVklTSVRfUExBTixcclxuICBBUElfVklTSVRfVU5QTEFOLFxyXG4gIEFQSV9WSVNJVF9TUFJFQURJTkcsXHJcbiAgQVBJX1dPUktfVklTSVQsXHJcbiAgQVBJX0NBTEVOREFSX1BST01PLFxyXG4gIEFQSV9DQUxFTkRBUl9QUk9HUkFNLFxyXG4gIEFQSV9BTk5PVU5DRU1FTlQsXHJcbiAgQVBJX0lOQ0VOVElWRSxcclxuICBBUElfQkVORUZJVCxcclxuICBBUElfQVBQUk9WQUwsXHJcbn0gZnJvbSBcIi4vY29uc3RhbnRcIjtcclxuXHJcbnZhciBub3cgPSBuZXcgRGF0ZSgpO1xyXG52YXIgZGF0ZSA9IG5vdy5nZXREYXRlKCk7XHJcbnZhciBtb250aCA9IG5vdy5nZXRNb250aCgpICsgMTtcclxudmFyIHllYXIgPSBub3cuZ2V0RnVsbFllYXIoKTtcclxuXHJcbmZ1bmN0aW9uIGNvbXBhcmUoYSwgYikge1xyXG4gIGlmIChhLm5vbW9yIDwgYi5ub21vcikge1xyXG4gICAgcmV0dXJuIC0xO1xyXG4gIH1cclxuICBpZiAoYS5ub21vciA+IGIubm9tb3IpIHtcclxuICAgIHJldHVybiAxO1xyXG4gIH1cclxuICByZXR1cm4gMDtcclxufVxyXG5cclxuLy8gVVNFUiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuY29uc3QgZ2V0TWVudSA9ICh1c2VyRGF0YSkgPT4ge1xyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImRldlwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5sb2coXCJwcm9kdWN0aW9uXCIpO1xyXG4gIH1cclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICsgQVBJX1VTRVIgKyBgL1VzZXIvR2V0TWVudT91c2VybmFtZT0ke3VzZXJEYXRhLmVtYWlsfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldEF1dGggPSAodXNlckRhdGEpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICsgQVBJX1VTRVIgKyBgL1VzZXIvR2V0QXV0aG9yaXplP3VzZXJuYW1lPSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3Qgb25Mb2dpbiA9ICh2YWx1ZXMpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1VTRVIgK1xyXG4gICAgICBgL1VzZXIvTG9naW4/dXNlcm5hbWU9JHt2YWx1ZXMudXNlcm5hbWV9JiZwYXNzd29yZD0ke3ZhbHVlcy5wYXNzd29yZH1gLFxyXG4gICAge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICBzZXRXcm9uZ1VzZXIodHJ1ZSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHBvc3RDaGFuZ2VQYXNzID0gKGRhdGEpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICByZXR1cm4gZmV0Y2goQVBJX1VSTCArIEFQSV9VU0VSICsgXCIvVXNlci9DaGFuZ2VQYXNzd29yZFwiLCB7XHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBmb3Jnb3RQYXNzd29yZCA9IChlbWFpbCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChBUElfVVJMICsgQVBJX1VTRVIgKyBgL1VzZXIvRm9yZ290UGFzc3dvcmQ/ZW1haWw9JHtlbWFpbH1gLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBNQVNURVIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuY29uc3QgZ2V0UG9zbSA9ICgpID0+IHtcclxuICByZXR1cm4gZmV0Y2goQVBJX1VSTCArIEFQSV9NQVNURVIgKyBgL01hc3RlckRhdGFMb2thbC9HZXRBbGxEaXNwbGF5UHJvZ3JhbWAsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgIH0sXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFByb2R1Y3RTZWFyY2ggPSAoc2VhcmNoKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKEFQSV9VUkwgKyBBUElfTUFTVEVSICsgYC9NYXN0ZXJEYXRhL0dldFByb2R1a0xpa2UvJHtzZWFyY2h9YCwge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgfSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UHJvZHVjdEJ5SmVuaXNDaGFubmVsID0gKGplbmlzQ2hhbm5lbElkKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9NQVNURVIgK1xyXG4gICAgICBgL01hc3RlckRhdGFMb2thbC9HZXRQcm9kdWtKZW5pc0NoYW5uZWxCeS8ke2plbmlzQ2hhbm5lbElkfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFByb2R1Y3RBdmdTYWxlcyA9IChwcm9kdWN0Q29kZSwgb3V0bGV0Q29kZSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfTUFTVEVSICtcclxuICAgICAgYC9NYXN0ZXJEYXRhL0dldEF2Z1NhbGVzMzBEYXlzQnlPdXRsZXRBbmRQcm9kdWN0P3Byb2R1Y3RDb2RlPSR7cHJvZHVjdENvZGV9Jm91dGxldENvZGU9JHtvdXRsZXRDb2RlfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuY29uc3QgZ2V0SG5hQXZnID0gKHByb2R1Y3RDb2RlLCBvdXRsZXRDb2RlKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9NQVNURVIgK1xyXG4gICAgICBgL01hc3RlckRhdGFMb2thbC9HZXRIbmFBbmRBdmdTYWxlc0J5LyR7cHJvZHVjdENvZGV9LyR7b3V0bGV0Q29kZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRTZWFyY2hKZW5pc0NoYW5uZWwgPSAodXNlckRhdGEsIHNlYXJjaCwgbW9kdWwpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX01BU1RFUiArXHJcbiAgICAgIGAvTWFzdGVyRGF0YUxva2FsL0dldEplbmlzQ2hhbm5lbEJ5P3VzZXJuYW1lPSR7dXNlckRhdGEudXNlcm5hbWV9JnRla3M9JHtzZWFyY2h9Jm1vZHVsPSR7bW9kdWx9YCxcclxuICAgIC8vIGAvTWFzdGVyRGF0YUxva2FsL0dldEplbmlzQ2hhbm5lbEJ5P3VzZXJuYW1lPWFidWJha2FyJnRla3M9JHtzZWFyY2h9Jm1vZHVsPSR7bW9kdWx9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFNlYXJjaE91dGxldCA9IChqZW5pc0NoYW5uZWxJZCwgdXNlckRhdGEsIHNlYXJjaCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfTUFTVEVSICtcclxuICAgICAgYC9NYXN0ZXJEYXRhTG9rYWwvR2V0T3V0bGV0QnkvJHtqZW5pc0NoYW5uZWxJZH0/dXNlcm5hbWU9JHt1c2VyRGF0YS51c2VybmFtZX0mdGVrcz0ke3NlYXJjaH1gLFxyXG4gICAgLy8gYC9NYXN0ZXJEYXRhTG9rYWwvR2V0T3V0bGV0QnkvJHtqZW5pc0NoYW5uZWxJZH0/dXNlcm5hbWU9YWJ1YmFrYXImdGVrcz0ke3NlYXJjaH1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRCcmFuZCA9ICgpID0+IHtcclxuICByZXR1cm4gZmV0Y2goQVBJX1VSTCArIEFQSV9NQVNURVIgKyBgL01hc3RlckRhdGFMb2thbC9HZXRBbGxCcmFuZGAsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgIH0sXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldEtvbnRlbldvcmtWaXNpdCA9ICgpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICsgQVBJX01BU1RFUiArIGAvTWFzdGVyRGF0YUxva2FsL0dldEFsbEtvbnRlbldvcmtWaXNpdGAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFNhbGVzVGFyZ2V0U01SID0gKHVzZXJEYXRhLCBtb250aCwgeWVhcikgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfTUFTVEVSICtcclxuICAgICAgYC9NYXN0ZXJEYXRhTG9rYWwvR2V0U2FsZXNUYXJnZXRCeS8ke3llYXJ9LyR7bW9udGh9P3VzZXJuYW1lU21yPSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U2FsZXNUYXJnZXQ3NVNNUiA9ICh1c2VyRGF0YSwgbW9udGgsIHllYXIpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX01BU1RFUiArXHJcbiAgICAgIGAvTWFzdGVyRGF0YUxva2FsL0dldFNhbGVzVGFyZ2V0NzVQZXJzZW5CeS8ke3llYXJ9LyR7bW9udGh9P3VzZXJuYW1lU21yPSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0SGFyZ2FFY2VyYW4gPSAocHJvZHVrQ29kZSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIGBodHRwczovL20tb25lLmthbGJlLmNvLmlkOjgyNDMvdC9rYWxiZS5jby5pZC9TYWthbW9yTWFzdGVyRGF0YS92MS9hcGkvTWFzdGVyRGF0YUxva2FsL0dldEhhcmdhRWNlcmFuQnlLb2RlUHJvZHVrLyR7cHJvZHVrQ29kZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBwb3N0UHJvZmlsZVBpYyA9ICh1c2VyRGF0YSwgZmlsZSkgPT4ge1xyXG4gIGNvbnN0IGZvcm1kYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgZm9ybWRhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX01BU1RFUiArXHJcbiAgICAgIGAvTWFzdGVyRGF0YUxva2FsL0NoYW5nZVByb2ZpbGVQaWN0dXJlP3VzZXJuYW1lPSR7dXNlckRhdGEudXNlcm5hbWV9JmNyZWF0ZWRCeT1BUEkmdXBkYXRlZEJ5PUFQSWAsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IGZvcm1kYXRhLFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYmFsaWthbiBpbnNlcmZpbGVcIiwgZGF0YSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHZpZXdQcm9maWxlUGljID0gKHVzZXJuYW1lKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9NQVNURVIgK1xyXG4gICAgICBgL01hc3RlckRhdGFMb2thbC9WaWV3UHJvZmlsZVBpY3R1cmU/dXNlcm5hbWU9JHt1c2VybmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gNDA0KSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmJsb2IoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICB2YXIgb3V0c2lkZSA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZGF0YSk7XHJcbiAgICAgIHJldHVybiBvdXRzaWRlO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHZpZXdPdXRsZXRDbGFzcyA9IChvdXRsZXRJRCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKG91dGxldElEKTtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX01BU1RFUiArXHJcbiAgICAgIGAvTWFzdGVyRGF0YUxva2FsL0dldE91dGxldENsYXNzaWZpY2F0aW9uLyR7b3V0bGV0SUR9YCxcclxuICAgIC8vIEFQSV9VUkwgKyBBUElfTUFTVEVSICsgYC9NYXN0ZXJEYXRhTG9rYWwvR2V0T3V0bGV0Q2xhc3NpZmljYXRpb24vNDcxNTRgLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgaWYgKGRhdGEuc3RhdHVzID09IDQwNCkge1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChcclxuICAgICAgICAgIEFQSV9VUkwgKyBBUElfTUFTVEVSICsgYC9NYXN0ZXJEYXRhTG9rYWwvVmlld0ltYWdlLyR7ZGF0YS5pZH1gLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gNDA0KSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmJsb2IoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICB2YXIgb3V0c2lkZSA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiBvdXRzaWRlO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldE91dGxldFNwcmVhZGluZ05lYXJNZSA9IChsb25naXR1ZGUsIGxhdGl0dWRlKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgYGh0dHBzOi8vbS1vbmUua2FsYmUuY28uaWQ6ODI0My90L2thbGJlLmNvLmlkL1Nha2Ftb3JNYXN0ZXJEYXRhL3YxL2FwaS9NYXN0ZXJEYXRhTG9rYWwvR2V0T3V0bGV0U3ByZWFkaW5nTmVhck1lP3VzZXJuYW1lPWx1a21hbmprdCZsYXRpdHVkZT0ke2xhdGl0dWRlfSZsb25naXR1ZGU9JHtsb25naXR1ZGV9YCxcclxuICAgIC8vIGBodHRwczovL20tb25lLmthbGJlLmNvLmlkOjgyNDMvdC9rYWxiZS5jby5pZC9TYWthbW9yTWFzdGVyRGF0YS92MS9hcGkvTWFzdGVyRGF0YUxva2FsL0dldE91dGxldFNwcmVhZGluZ05lYXJNZT91c2VybmFtZT1sdWttYW5qa3QmbGF0aXR1ZGU9LTYuMjA3MjExMjYmbG9uZ2l0dWRlPTEwNi45MjI4MjQ1N2AsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGluc2VydE91dGxldFNwcmVhZGluZyA9IChkYXRhKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArIEFQSV9NQVNURVIgKyBcIi9NYXN0ZXJEYXRhTG9rYWwvSW5zZXJ0T3V0bGV0U3ByZWFkaW5nXCIsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8vIFZJU0lUIFBMQU4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuY29uc3QgZ2V0UGxhbkxpc3QgPSAodXNlckRhdGEpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1BMQU4gK1xyXG4gICAgICBgL0FjdGl2aXR5VmlzaXRQbGFuL0dldEFjdGl2aXR5VmlzaXRQbGFuQnk/dXNlcm5hbWU9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICB2YXIgcmVzID0gZGF0YS5maWx0ZXIoKHZhbCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB2YWwuaXNDaGVja091dCA9PT0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcmVzO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBsYW5JZCA9IChpZCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfUExBTiArXHJcbiAgICAgIGAvTWFzdGVyVmlzaXRQbGFuL0dldE1hc3RlclZpc2l0UGxhbkJ5P3BhcmFtZXRlcj0ke3llYXJ9LSR7bW9udGh9LSR7ZGF0ZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigocGxhbkxpc3QpID0+IHtcclxuICAgICAgaWYgKHBsYW5MaXN0Lmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKFxyXG4gICAgICAgICAgQVBJX1VSTCArXHJcbiAgICAgICAgICAgIEFQSV9WSVNJVF9QTEFOICtcclxuICAgICAgICAgICAgYC9NYXN0ZXJWaXNpdFBsYW4vR2V0TWFzdGVyVmlzaXRQbGFuQnlJZC8ke2lkfWAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBzYW1lUGxhbiA9IHBsYW5MaXN0LmZpbHRlcigodmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbC5pZCA9PT0gZGF0YS5pZDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4geyBzYW1lUGxhbiwgZGF0YSB9O1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcGxhbkxpc3Q7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRQbGFuSGlzdG9yeSA9ICh1c2VyRGF0YSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfUExBTiArXHJcbiAgICAgIGAvQWN0aXZpdHlWaXNpdFBsYW4vR2V0QWN0aXZpdHlWaXNpdFBsYW5CeT91c2VybmFtZT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHZhciByZXMgPSBkYXRhLmZpbHRlcigodmFsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHZhbC5pc0NoZWNrT3V0ID09PSB0cnVlO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHJlcztcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBzdWJtaXRWaXNpdFBsYW4gPSAoZGF0YSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgKyBBUElfVklTSVRfUExBTiArIFwiL0FjdGl2aXR5VmlzaXRQbGFuL1NhdmVBbGxBY3Rpdml0eVZpc2l0UGxhblwiLFxyXG4gICAge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImJhaWthbiBzYXZlYWxsXCIsIGRhdGEpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBzdWJtaXRWaXNpdFBsYW5EcG9zbSA9IChkcG9zbSwgZmlsZSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKGRwb3NtLCBmaWxlKTtcclxuICBjb25zdCBmb3JtZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfUExBTiArXHJcbiAgICAgIFwiL0FjdGl2aXR5VmlzaXRQbGFuRFBPU00vU2F2ZUFjdGl2aXR5VmlzaXRQbGFuRHBvc21cIixcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZHBvc20pLFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiYmFsaWthbiBwc29tXCIsIGRhdGEpO1xyXG4gICAgICBmb3JtZGF0YS5hcHBlbmQoXCJmaWxlXCIsIGZpbGUpO1xyXG4gICAgICByZXR1cm4gZmV0Y2goXHJcbiAgICAgICAgQVBJX1VSTCArXHJcbiAgICAgICAgICBBUElfVklTSVRfUExBTiArXHJcbiAgICAgICAgICBgL0FjdGl2aXR5VmlzaXRQbGFuRFBPU00vSW5zZXJ0RmlsZUJ5P2lkPSR7ZGF0YS5pZH0mbmFtYUZpbGU9JHtkYXRhLm5hbWFGaWxlfWAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiBmb3JtZGF0YSxcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJiYWxpa2FuIGluc2VyZmlsZVwiLCBkYXRhKTtcclxuICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0SW52b2ljZURhdGEgPSAodmlzaXRQbGFuSWQpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1BMQU4gK1xyXG4gICAgICBgL0FjdGl2aXR5VmlzaXRQbGFuL0dldFByb2R1a1N1cmF0UGVzYW5hbi8ke3Zpc2l0UGxhbklkfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldEludm9pY2VEYXRhUG9zbSA9ICh2aXNpdFBsYW5JZCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfUExBTiArXHJcbiAgICAgIGAvQWN0aXZpdHlWaXNpdFBsYW5EUE9TTS9HZXRBY3Rpdml0eVZpc2l0UGxhbkRQb3NtQnkvJHt2aXNpdFBsYW5JZH1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICB2YXIgc29ydERhdGEgPSBkYXRhLnNvcnQoY29tcGFyZSk7XHJcbiAgICAgIHJldHVybiBzb3J0RGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCB2aWV3RmlsZSA9IChpZCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgKyBBUElfVklTSVRfUExBTiArIGAvQWN0aXZpdHlWaXNpdFBsYW5EUE9TTS9WaWV3RmlsZS8ke2lkfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuYmxvYigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgIHZhciBvdXRzaWRlID0gVVJMLmNyZWF0ZU9iamVjdFVSTChkYXRhKTtcclxuICAgICAgcmV0dXJuIG91dHNpZGU7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UGxhbk1vbnRobHlIaXN0b3J5ID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9QTEFOICtcclxuICAgICAgYC9BY3Rpdml0eVZpc2l0UGxhbi9HZXRIaXN0b3J5QWN0aXZpdHlWaXNpdFBsYW5CeT91c2VybmFtZT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGRhdGEuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHZhciBkYXRlQSA9IG5ldyBEYXRlKGEudGFuZ2dhbCksXHJcbiAgICAgICAgICBkYXRlQiA9IG5ldyBEYXRlKGIudGFuZ2dhbCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGVCIC0gZGF0ZUE7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRNYXN0ZXJWaXNpdFBsYW4gPSAodXNlckRhdGEpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1BMQU4gK1xyXG4gICAgICBgL01hc3RlclZpc2l0UGxhbi9HZXRNYXN0ZXJWaXNpdFBsYW5CeVVzZXJuYW1lP3VzZXJuYW1lPSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgZGF0YS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgdmFyIGRhdGVBID0gbmV3IERhdGUoYS50YW5nZ2FsKSxcclxuICAgICAgICAgIGRhdGVCID0gbmV3IERhdGUoYi50YW5nZ2FsKTtcclxuICAgICAgICByZXR1cm4gZGF0ZUIgLSBkYXRlQTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldEFwcHJvdmFsID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9QTEFOICtcclxuICAgICAgLy8gYC9BY3Rpdml0eVZpc2l0UGxhbi9HZXREb2N1bWVudFZpc2l0Rm9yQXBwcm92YWwvJHt1c2VyRGF0YS5rb2RlQ2FiYW5nfWAsXHJcbiAgICAgIGAvQWN0aXZpdHlWaXNpdFBsYW4vR2V0RG9jdW1lbnRWaXNpdEZvckFwcHJvdmFsLzMyYCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgZGF0YS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgdmFyIGRhdGVBID0gbmV3IERhdGUoYS50YW5nZ2FsKSxcclxuICAgICAgICAgIGRhdGVCID0gbmV3IERhdGUoYi50YW5nZ2FsKTtcclxuICAgICAgICByZXR1cm4gZGF0ZUIgLSBkYXRlQTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFJldmlzZVBsYW5MaXN0U21yID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgYGh0dHBzOi8vbS1vbmUua2FsYmUuY28uaWQ6ODI0My90L2thbGJlLmNvLmlkL1Nha2Ftb3JBY3Rpdml0eVZpc2l0UGxhbi92MS9hcGkvQWN0aXZpdHlWaXNpdFBsYW4vR2V0QWN0aXZpdHlWaXNpdFBsYW5CeVN0YXR1cy9SZXZpc2U/dXNlcm5hbWU9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBkYXRhLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICB2YXIgZGF0ZUEgPSBuZXcgRGF0ZShhLnRhbmdnYWwpLFxyXG4gICAgICAgICAgZGF0ZUIgPSBuZXcgRGF0ZShiLnRhbmdnYWwpO1xyXG4gICAgICAgIHJldHVybiBkYXRlQiAtIGRhdGVBO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZGVsZXRlTWFzdGVyUGxhblNNUiA9IChpZCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgKyBBUElfVklTSVRfUExBTiArIGAvTWFzdGVyVmlzaXRQbGFuL0RlbGV0ZU1hc3RlclZpc2l0UGxhbi8ke2lkfWAsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3Qgc2F2ZU1hc3RlclBsYW5WaXNpdCA9IChkYXRhKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArIEFQSV9WSVNJVF9QTEFOICsgXCIvTWFzdGVyVmlzaXRQbGFuL1NhdmVBY3Rpdml0eVZpc2l0UGxhblwiLFxyXG4gICAge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImJhaWthbiBzYXZlYWxsXCIsIGRhdGEpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRQbGFuQnlJZCA9IChpZCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIGBodHRwczovL20tb25lLmthbGJlLmNvLmlkOjgyNDMvdC9rYWxiZS5jby5pZC9TYWthbW9yQWN0aXZpdHlWaXNpdFBsYW4vdjEvYXBpL0FjdGl2aXR5VmlzaXRQbGFuL0dldEFjdGl2aXR5VmlzaXRQbGFuQnlJZC8ke2lkfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHVwZGF0ZURhdGFQb3NtUGxhbiA9IChpZCwgZHBvc20pID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1BMQU4gK1xyXG4gICAgICBgL0FjdGl2aXR5VmlzaXRQbGFuRFBPU00vQWN0aXZpdHlWaXNpdFBsYW5EUE9TTS8ke2lkfWAsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZHBvc20pLFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHVwZGF0ZURhdGFQcm9kdWtQbGFuID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9tLW9uZS5rYWxiZS5jby5pZDo4MjQzL3Qva2FsYmUuY28uaWQvU2FrYW1vckFjdGl2aXR5VmlzaXRQbGFuL3YxL2FwaS9BY3Rpdml0eVZpc2l0UGxhbkRQcm9kdWN0L1VwZGF0ZUFsbFZpc2l0UGxhblByb2R1Y3RgLFxyXG4gICAge1xyXG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGluc2VydEZpbGVQbGFuID0gKGlkLCBmaWxlKSA9PiB7XHJcbiAgY29uc3QgZm9ybWRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICBmb3JtZGF0YS5hcHBlbmQoXCJmaWxlXCIsIGZpbGUpO1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfUExBTiArXHJcbiAgICAgIGAvQWN0aXZpdHlWaXNpdFBsYW5EUE9TTS9JbnNlcnRGaWxlQnk/aWQ9JHtpZH0mbmFtYUZpbGU9JHtmaWxlLm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IGZvcm1kYXRhLFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiYmFsaWthbiBpbnNlcmZpbGVcIiwgZGF0YSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFZpc2l0UGxhblByb2R1Y3QgPSAoaWQpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1BMQU4gK1xyXG4gICAgICBgL0FjdGl2aXR5VmlzaXRQbGFuRFByb2R1Y3QvR2V0VmlzaXRQbGFuUHJvZHVjdEJ5P3Zpc2l0UGxhbklkPSR7aWR9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UmVjYXBPcmRlciA9ICh1c2VybmFtZVNNUiwga29kZUNhYmFuZywgZGF0ZUZyb20sIGRhdGVUbykgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfUExBTiArXHJcbiAgICAgIGAvQWN0aXZpdHlWaXNpdFBsYW4vR2V0UmVrYXBPcmRlcj91c2VybmFtZVNNUj0ke3VzZXJuYW1lU01SfSZrb2RlQ2FiYW5nPSR7a29kZUNhYmFuZ30mZGF0ZVN0cmluZ0Zyb209JHttb21lbnQoXHJcbiAgICAgICAgZGF0ZUZyb21cclxuICAgICAgKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpfSZkYXRlU3RyaW5nVG89JHttb21lbnQoZGF0ZVRvKS5mb3JtYXQoXHJcbiAgICAgICAgXCJZWVlZLU1NLUREXCJcclxuICAgICAgKX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBWSVNJVCBVTlBMQU4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmNvbnN0IHN1Ym1pdFZpc2l0VW5wbGFuID0gKGRhdGEpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1VOUExBTiArXHJcbiAgICAgIGAvU2FrYW1vckFjdGl2aXR5VmlzaXRVblBsYW4vU2F2ZUFsbEFjdGl2aXR5VmlzaXRVblBsYW5gLFxyXG4gICAge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImJhaWthbiBzYXZlYWxsXCIsIGRhdGEpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBzdWJtaXRWaXNpdFVucGxhbkRwb3NtID0gKGRwb3NtLCBmaWxlKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coZHBvc20sIGZpbGUpO1xyXG4gIGNvbnN0IGZvcm1kYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9VTlBMQU4gK1xyXG4gICAgICBgL1Nha2Ftb3JBY3Rpdml0eVZpc2l0VW5QbGFuRFBPU00vU2F2ZUFjdGl2aXR5VmlzaXRVblBsYW5EcG9zbWAsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRwb3NtKSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImJhbGlrYW4gcHNvbVwiLCBkYXRhKTtcclxuICAgICAgZm9ybWRhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcclxuICAgICAgcmV0dXJuIGZldGNoKFxyXG4gICAgICAgIEFQSV9VUkwgK1xyXG4gICAgICAgICAgQVBJX1ZJU0lUX1VOUExBTiArXHJcbiAgICAgICAgICBgL1Nha2Ftb3JBY3Rpdml0eVZpc2l0VW5QbGFuRFBPU00vSW5zZXJ0RmlsZUJ5P2lkPSR7ZGF0YS5pZH0mbmFtYUZpbGU9JHtkYXRhLm5hbWFGaWxlfWAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiBmb3JtZGF0YSxcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJiYWxpa2FuIGluc2VyZmlsZVwiLCBkYXRhKTtcclxuICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0SW52b2ljZURhdGFVbnBsYW4gPSAodmlzaXRQbGFuSWQpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1VOUExBTiArXHJcbiAgICAgIGAvU2FrYW1vckFjdGl2aXR5VmlzaXRVblBsYW4vR2V0UHJvZHVrU3VyYXRQZXNhbmFuLyR7dmlzaXRQbGFuSWR9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0VW5wbGFuQnlJZCA9IChpZCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIGBodHRwczovL20tb25lLmthbGJlLmNvLmlkOjgyNDMvdC9rYWxiZS5jby5pZC9TYWthbW9yQWN0aXZpdHlWaXNpdFVuUGxhbi92MS9hcGkvU2FrYW1vckFjdGl2aXR5VmlzaXRVblBsYW4vR2V0QWN0aXZpdHlWaXNpdFVuUGxhbkJ5SWQvJHtpZH1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRJbnZvaWNlRGF0YVBvc21VbnBsYW4gPSAodmlzaXRVbnBsYW5JZCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfVU5QTEFOICtcclxuICAgICAgYC9TYWthbW9yQWN0aXZpdHlWaXNpdFVuUGxhbkRQT1NNL0dldEFjdGl2aXR5VmlzaXRVblBsYW5EUG9zbUJ5LyR7dmlzaXRVbnBsYW5JZH1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICB2YXIgc29ydERhdGEgPSBkYXRhLnNvcnQoY29tcGFyZSk7XHJcbiAgICAgIHJldHVybiBzb3J0RGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVEYXRhUG9zbVVucGxhbiA9IChpZCwgZHBvc20pID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1VOUExBTiArXHJcbiAgICAgIGAvU2FrYW1vckFjdGl2aXR5VmlzaXRVblBsYW5EUE9TTS9BY3Rpdml0eVZpc2l0VW5QbGFuRFBPU00vJHtpZH1gLFxyXG4gICAge1xyXG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRwb3NtKSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVEYXRhUHJvZHVrVW5wbGFuID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1VOUExBTiArXHJcbiAgICAgIGAvU2FrYW1vckFjdGl2aXR5VmlzaXRVblBsYW5Qcm9kdWN0L1VwZGF0ZUFsbFVuUGxhblByb2R1Y3RgLFxyXG4gICAge1xyXG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGluc2VydEZpbGVVbnBsYW4gPSAoaWQsIGZpbGUpID0+IHtcclxuICBjb25zdCBmb3JtZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICBmb3JtZGF0YS5hcHBlbmQoXCJmaWxlXCIsIGZpbGUpO1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfVU5QTEFOICtcclxuICAgICAgYC9TYWthbW9yQWN0aXZpdHlWaXNpdFVuUGxhbkRQT1NNL0luc2VydEZpbGVCeT9pZD0ke2lkfSZuYW1hRmlsZT0ke2ZpbGUubmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogZm9ybWRhdGEsXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJiYWxpa2FuIGluc2VyZmlsZVwiLCBkYXRhKTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3Qgdmlld0ZpbGVVbnBsYW4gPSAoaWQpID0+IHtcclxuICBjb25zb2xlLmxvZyhpZCk7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9VTlBMQU4gK1xyXG4gICAgICBgL1Nha2Ftb3JBY3Rpdml0eVZpc2l0VW5QbGFuRFBPU00vVmlld0ZpbGUvJHtpZH1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmJsb2IoKTtcclxuICAgIH0pXHJcbiAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICB2YXIgb3V0c2lkZSA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZGF0YSk7XHJcbiAgICAgIHJldHVybiBvdXRzaWRlO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFVucGxhbk1vbnRobHlIaXN0b3J5ID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9VTlBMQU4gK1xyXG4gICAgICBgL1Nha2Ftb3JBY3Rpdml0eVZpc2l0VW5QbGFuL0dldEhpc3RvcnlBY3Rpdml0eVZpc2l0VW5QbGFuQnk/dXNlcm5hbWU9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBkYXRhLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICB2YXIgZGF0ZUEgPSBuZXcgRGF0ZShhLnRhbmdnYWwpLFxyXG4gICAgICAgICAgZGF0ZUIgPSBuZXcgRGF0ZShiLnRhbmdnYWwpO1xyXG4gICAgICAgIHJldHVybiBkYXRlQiAtIGRhdGVBO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0VW5wbGFuTmVhck1lID0gKCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgKyBBUElfTUFTVEVSICsgYC9NYXN0ZXJEYXRhL0dldE91dGxldE5lYXJNZS8tNi4xMjM0NTYvMTIuOTg3NjU0YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UmV2aXNlVW5QbGFuTGlzdFNtciA9ICh1c2VyRGF0YSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIGBodHRwczovL20tb25lLmthbGJlLmNvLmlkOjgyNDMvdC9rYWxiZS5jby5pZC9TYWthbW9yQWN0aXZpdHlWaXNpdFVuUGxhbi92MS9hcGkvU2FrYW1vckFjdGl2aXR5VmlzaXRVblBsYW4vR2V0QWN0aXZpdHlWaXNpdFVuUGxhbkJ5U3RhdHVzL3JldmlzZT91c2VybmFtZT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGRhdGEuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHZhciBkYXRlQSA9IG5ldyBEYXRlKGEudGFuZ2dhbCksXHJcbiAgICAgICAgICBkYXRlQiA9IG5ldyBEYXRlKGIudGFuZ2dhbCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGVCIC0gZGF0ZUE7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRVblBsYW5Qcm9kdWN0cyA9IChpZCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfVU5QTEFOICtcclxuICAgICAgYC9TYWthbW9yQWN0aXZpdHlWaXNpdFVuUGxhblByb2R1Y3QvR2V0VW5QbGFuUHJvZHVjdHNCeT91blBsYW5JZD0ke2lkfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8vIFNQUkVBRElORyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuY29uc3Qgc3VibWl0VmlzaXRTcHJlYWRpbmcgPSAoZGF0YSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfU1BSRUFESU5HICtcclxuICAgICAgYC9BY3Rpdml0eVNwcmVhZGluZy9TYXZlQWxsQWN0aXZpdHlTcHJlYWRpbmdgLFxyXG4gICAge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImJhaWthbiBzYXZlYWxsXCIsIGRhdGEpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBzdWJtaXRWaXNpdFNwcmVhZGluZ0Rwb3NtID0gKGRwb3NtLCBmaWxlKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coZHBvc20sIGZpbGUpO1xyXG4gIGNvbnN0IGZvcm1kYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9TUFJFQURJTkcgK1xyXG4gICAgICBgL0FjdGl2aXR5U3ByZWFkaW5nRFBPU00vU2F2ZUFjdGl2aXR5U3ByZWFkaW5nRHBvc21gLFxyXG4gICAge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkcG9zbSksXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJiYWxpa2FuIHBzb21cIiwgZGF0YSk7XHJcbiAgICAgIGZvcm1kYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XHJcbiAgICAgIHJldHVybiBmZXRjaChcclxuICAgICAgICBBUElfVVJMICtcclxuICAgICAgICAgIEFQSV9WSVNJVF9TUFJFQURJTkcgK1xyXG4gICAgICAgICAgYC9BY3Rpdml0eVNwcmVhZGluZ0RQT1NNL0luc2VydEZpbGVCeT9pZD0ke2RhdGEuaWR9Jm5hbWFGaWxlPSR7ZGF0YS5uYW1hRmlsZX1gLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogZm9ybWRhdGEsXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFsaWthbiBpbnNlcmZpbGVcIiwgZGF0YSk7XHJcbiAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldEludm9pY2VEYXRhU3ByZWFkaW5nID0gKHZpc2l0UGxhbklkKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9TUFJFQURJTkcgK1xyXG4gICAgICBgL0FjdGl2aXR5U3ByZWFkaW5nL0dldFByb2R1a1N1cmF0UGVzYW5hbi8ke3Zpc2l0UGxhbklkfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldEludm9pY2VEYXRhUG9zbVNwcmVhZGluZyA9ICh2aXNpdFVucGxhbklkKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9TUFJFQURJTkcgK1xyXG4gICAgICBgL0FjdGl2aXR5U3ByZWFkaW5nRFBPU00vR2V0QWN0aXZpdHlWaXNpdFVuUGxhbkRQb3NtQnkvJHt2aXNpdFVucGxhbklkfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHZhciBzb3J0RGF0YSA9IGRhdGEuc29ydChjb21wYXJlKTtcclxuICAgICAgcmV0dXJuIHNvcnREYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHZpZXdGaWxlU3ByZWFkaW5nID0gKGlkKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArIEFQSV9WSVNJVF9TUFJFQURJTkcgKyBgL0FjdGl2aXR5U3ByZWFkaW5nRFBPU00vVmlld0ZpbGUvJHtpZH1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmJsb2IoKTtcclxuICAgIH0pXHJcbiAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICB2YXIgb3V0c2lkZSA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZGF0YSk7XHJcbiAgICAgIHJldHVybiBvdXRzaWRlO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFNwcmVhZGluZ01vbnRobHlIaXN0b3J5ID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9WSVNJVF9TUFJFQURJTkcgK1xyXG4gICAgICBgL0FjdGl2aXR5U3ByZWFkaW5nL0dldEhpc3RvcnlBY3Rpdml0eVNwcmVhZGluZ0J5P3VzZXJuYW1lPSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgZGF0YS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgdmFyIGRhdGVBID0gbmV3IERhdGUoYS50YW5nZ2FsKSxcclxuICAgICAgICAgIGRhdGVCID0gbmV3IERhdGUoYi50YW5nZ2FsKTtcclxuICAgICAgICByZXR1cm4gZGF0ZUIgLSBkYXRlQTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFNwcmVhZGluZ0J5SWQgPSAoaWQpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1NQUkVBRElORyArXHJcbiAgICAgIGAvQWN0aXZpdHlTcHJlYWRpbmcvR2V0QWN0aXZpdHlTcHJlYWRpbmdCeUlkLyR7aWR9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UmV2aXNlU3ByZWFkaW5nTGlzdFNtciA9ICh1c2VyRGF0YSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIGBodHRwczovL20tb25lLmthbGJlLmNvLmlkOjgyNDMvdC9rYWxiZS5jby5pZC9TYWthbW9yQWN0aXZpdHlTcHJlYWRpbmcvdjEvYXBpL0FjdGl2aXR5U3ByZWFkaW5nL0dldEFjdGl2aXR5U3ByZWFkaW5nQnlTdGF0dXMvUmV2aXNlP3VzZXJuYW1lPSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgZGF0YS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgdmFyIGRhdGVBID0gbmV3IERhdGUoYS50YW5nZ2FsKSxcclxuICAgICAgICAgIGRhdGVCID0gbmV3IERhdGUoYi50YW5nZ2FsKTtcclxuICAgICAgICByZXR1cm4gZGF0ZUIgLSBkYXRlQTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHVwZGF0ZURhdGFQb3NtU3ByZWFkaW5nID0gKGlkLCBkcG9zbSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfVklTSVRfU1BSRUFESU5HICtcclxuICAgICAgYC9BY3Rpdml0eVNwcmVhZGluZ0RQT1NNL0FjdGl2aXR5U3ByZWFkaW5nRHBvc20vJHtpZH1gLFxyXG4gICAge1xyXG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRwb3NtKSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVEYXRhUHJvZHVrU3ByZWFkaW5nID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1NQUkVBRElORyArXHJcbiAgICAgIGAvQWN0aXZpdHlTcHJlYWRpbmdEUHJvZHVjdC9VcGRhdGVBbGxTcHJlYWRpbmdQcm9kdWN0YCxcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBpbnNlcnRGaWxlU3ByZWFkaW5nID0gKGlkLCBmaWxlKSA9PiB7XHJcbiAgY29uc3QgZm9ybWRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgZm9ybWRhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1NQUkVBRElORyArXHJcbiAgICAgIGAvQWN0aXZpdHlTcHJlYWRpbmdEUE9TTS9JbnNlcnRGaWxlQnk/aWQ9JHtpZH0mbmFtYUZpbGU9JHtmaWxlLm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IGZvcm1kYXRhLFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYmFsaWthbiBpbnNlcmZpbGVcIiwgZGF0YSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFNwcmVhZGluZ1Byb2R1Y3QgPSAoaWQpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1ZJU0lUX1NQUkVBRElORyArXHJcbiAgICAgIGAvQWN0aXZpdHlTcHJlYWRpbmdEUHJvZHVjdC9HZXRTcHJlYWRpbmdQcm9kdWN0Qnk/c3ByZWFkaW5nSWQ9JHtpZH1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBXT1JLIFZJU0lUID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5jb25zdCBnZXRBbGxXb3JrVmlzaXQgPSAodXNlckRhdGEpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1dPUktfVklTSVQgK1xyXG4gICAgICBgL0FjdGl2aXR5V29ya1Zpc2l0L0dldEFjdGl2aXR5V29ya1Zpc2l0Qnk/dXNlcm5hbWU9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRXb3JrVmlzaXRNb250aGx5SGlzdG9yeSA9ICh1c2VyRGF0YSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfV09SS19WSVNJVCArXHJcbiAgICAgIGAvQWN0aXZpdHlXb3JrVmlzaXQvR2V0SGlzdG9yeUFjdGl2aXR5V29ya1Zpc2l0Qnk/dXNlcm5hbWU9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBkYXRhLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICB2YXIgZGF0ZUEgPSBuZXcgRGF0ZShhLnRhbmdnYWwpLFxyXG4gICAgICAgICAgZGF0ZUIgPSBuZXcgRGF0ZShiLnRhbmdnYWwpO1xyXG4gICAgICAgIHJldHVybiBkYXRlQiAtIGRhdGVBO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5jb25zdCBnZXRXb3JrVmlzaXRSYXRpbmcgPSAoaWQpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1dPUktfVklTSVQgK1xyXG4gICAgICBgL0FjdGl2aXR5V29ya1Zpc2l0UmF0aW5nL0dldEFjdGl2aXR5V29ya1Zpc2l0UmF0aW5nQnkvJHtpZH1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBzdWJtaXRXb3JrVmlzaXQgPSAoZGF0YSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgKyBBUElfV09SS19WSVNJVCArIFwiL0FjdGl2aXR5V29ya1Zpc2l0L1NhdmVBbGxBY3Rpdml0eVdvcmtWaXNpdFwiLFxyXG4gICAge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImJhaWthbiBzYXZlYWxsXCIsIGRhdGEpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRNYXN0ZXJXb3JrVmlzaXQgPSAodXNlckRhdGEsIGRhdGUpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX1dPUktfVklTSVQgK1xyXG4gICAgICBgL01hc3RlclBsYW5Xb3JrVmlzaXQvR2V0TWFzdGVyUGxhbldvcmtWaXNpdEJ5LyR7ZGF0ZX0/dXNlcm5hbWU9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBzYXZlTWFzdGVyV29ya1Zpc2l0ID0gKGRhdGEpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICsgQVBJX1dPUktfVklTSVQgKyBcIi9NYXN0ZXJQbGFuV29ya1Zpc2l0L1NhdmVNYXN0ZXJQbGFuV29ya1Zpc2l0XCIsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYmFpa2FuIHNhdmVhbGxcIiwgZGF0YSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGRlbGV0ZU1hc3RlcldvcmtWaXNpdCA9IChpZCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfV09SS19WSVNJVCArXHJcbiAgICAgIGAvTWFzdGVyUGxhbldvcmtWaXNpdC9EZWxldGVNYXN0ZXJQbGFuV29ya1Zpc2l0LyR7aWR9YCxcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcbi8vIENhbGVuZGFyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5jb25zdCBnZXREYXlQcm9tbyA9IChkYXRlKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9DQUxFTkRBUl9QUk9NTyArXHJcbiAgICAgIGAvU2FrYW1vckluZm9Qcm9tby9HZXRJbmZvUHJvbW9CeURhdGUvJHtkYXRlfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldERheVByb2dyYW0gPSAoZGF0ZSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfQ0FMRU5EQVJfUFJPR1JBTSArXHJcbiAgICAgIGAvU2FrYW1vckthbGVuZGVyUHJvZ3JhbS9HZXRLYWxlbmRlclByb2dyYW1CeURhdGUvJHtkYXRlfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldE1vbnRoUHJvbW8gPSAoZGF0ZSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfQ0FMRU5EQVJfUFJPTU8gK1xyXG4gICAgICBgL1Nha2Ftb3JJbmZvUHJvbW8vR2V0SW5mb1Byb21vQnlNb250aFllYXIvJHtkYXRlfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldE1vbnRoUHJvZ3JhbSA9IChkYXRlKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9DQUxFTkRBUl9QUk9HUkFNICtcclxuICAgICAgYC9TYWthbW9yS2FsZW5kZXJQcm9ncmFtL0dldEthbGVuZGVyUHJvZ3JhbUJ5TW9udGhZZWFyLyR7ZGF0ZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBBbm5vdW5jZW1lbnQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmNvbnN0IGdldEFsbEFubm91bmNlbWVudCA9IChrb2RlQ2FiYW5nKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9BTk5PVU5DRU1FTlQgK1xyXG4gICAgICAvLyBgL1Nha2Ftb3JBbm5vdW5jZW1lbnQvR2V0QW5ub3VuY2VtZW50QnlVc2VyP3VzZXJuYW1lPSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgICAgYC9TYWthbW9yQW5ub3VuY2VtZW50L0dldEFubm91bmNlbWVudEJ5Q2FiYW5nLyR7a29kZUNhYmFuZ31gLFxyXG4gICAgLy8gYC9TYWthbW9yQW5ub3VuY2VtZW50L0dldEFubm91bmNlbWVudEJ5Q2FiYW5nLzE0YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlUmVhZEFubm91bmNlbWVudCA9IChpZCwgZGF0YSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIGBodHRwczovL20tb25lLmthbGJlLmNvLmlkOjgyNDMvdC9rYWxiZS5jby5pZC9TYWthbW9yQW5ub3VuY2VtZW50L3YxL2FwaS9TYWthbW9yQW5ub3VuY2VtZW50L1VwZGF0ZUFubm91bmNlbWVudFN0YXR1cy8ke2lkfWAsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBJTkNFTlRJVkUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuY29uc3QgZ2V0UHJvZHVrdGlmaXRhcyA9ICh1c2VyRGF0YSwgbW9udGgsIHllYXIpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX0lOQ0VOVElWRSArXHJcbiAgICAgIGAvU2FrYW1vckluY2VudGl2ZS9HZXRQcm9kdWt0aWZpdGFzQnlVc2VyUGVyaW9kZS8ke21vbnRofS8ke3llYXJ9P3VzZXJuYW1lPSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5jb25zdCBnZXRGcm9udGxpbmVyID0gKHVzZXJEYXRhLCBtb250aCwgeWVhcikgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfSU5DRU5USVZFICtcclxuICAgICAgYC9Gcm9udGxpbmVyL0dldEJ5VXNlclBlcmlvZGUvJHttb250aH0vJHt5ZWFyfT91c2VybmFtZT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldE5vbyA9ICh1c2VyRGF0YSwgbW9udGgsIHllYXIpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX0lOQ0VOVElWRSArXHJcbiAgICAgIGAvVGFyZ2V0Tk9PL0dldFNlbHNOT09CeVVzZXJQZXJpb2RlLyR7bW9udGh9LyR7eWVhcn0/dXNlcm5hbWU9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRXb3JrRGF5ID0gKCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChBUElfVVJMICsgQVBJX0lOQ0VOVElWRSArIGAvU2FrYW1vckluY2VudGl2ZS9HZXRXb3JraW5nRGF5LzAxYCwge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgfSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0S3BpSW52ZW50aXZlTW9udGhseVNNUiA9ICh1c2VyRGF0YSwgZGF0ZSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfSU5DRU5USVZFICtcclxuICAgICAgYC9LcGlJbmNlbnRpdmVNb250aGx5L0dldEluY2VudGl2ZUNhbGN1bGF0b3IvJHttb21lbnQoZGF0ZSkuZm9ybWF0KFxyXG4gICAgICAgIFwiWVlZWS1NTVwiXHJcbiAgICAgICl9LTAxL1NNUj91c2VybmFtZVNNUj0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldEtwaUludmVudGl2ZU1vbnRobHlQaW1jYSA9ICh1c2VyRGF0YSwgZGF0ZSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfSU5DRU5USVZFICtcclxuICAgICAgYC9LcGlJbmNlbnRpdmVNb250aGx5L0luY2VudGl2ZUNhbGN1bGF0b3JQaW1jYS8yMC8ke21vbWVudChkYXRlKS5mb3JtYXQoXHJcbiAgICAgICAgXCJZWVlZLU1NXCJcclxuICAgICAgKX0tMDEvQUJNYCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0SW5jZW50aXZlWWVhcmx5ID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9JTkNFTlRJVkUgK1xyXG4gICAgICBgL0twaUluY2VudGl2ZU1vbnRobHkvR2V0UmVrYXBJbnNlbnRpZkJ1bGFuYW4vJHttb21lbnQobm93KS5mb3JtYXQoXHJcbiAgICAgICAgXCJZWVlZXCJcclxuICAgICAgKX0/dXNlcm5hbWU9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRTYWxlc1RhcmdldFBpbWNhID0gKHVzZXJEYXRhLCBtb250aCwgeWVhcikgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfTUFTVEVSICtcclxuICAgICAgYC9NYXN0ZXJEYXRhTG9rYWwvR2V0U2FsZXNUYXJnZXRQaW1jYUJ5Q2FiYW5nLyR7dXNlckRhdGEua29kZUNhYmFuZ30vJHt5ZWFyfS8ke21vbnRofWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFNhbGVzVGFyZ2V0NzVQaW1jYSA9ICh1c2VyRGF0YSwgbW9udGgsIHllYXIpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX01BU1RFUiArXHJcbiAgICAgIGAvTWFzdGVyRGF0YUxva2FsL0dldFNhbGVzVGFyZ2V0UGltY2E3NUJ5Q2FiYW5nLyR7dXNlckRhdGEua29kZUNhYmFuZ30vJHt5ZWFyfS8ke21vbnRofWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldEZyb250bGluZXJQaW1jYSA9ICh1c2VyRGF0YSwgbW9udGgsIHllYXIpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX0lOQ0VOVElWRSArXHJcbiAgICAgIGAvRnJvbnRsaW5lci9HZXRGcm9udGxpbmVyUGltY2EvJHt1c2VyRGF0YS5rb2RlQ2FiYW5nfS8ke21vbnRofS8ke3llYXJ9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U21yQnlDYWJhbmcgPSAoY2FiYW5nLCB0ZWtzKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArXHJcbiAgICAgIEFQSV9NQVNURVIgK1xyXG4gICAgICAvLyBgL01hc3RlckRhdGFMb2thbC9HZXRTbXJPdXRsZXRCeUNhYmFuZy8ke2NhYmFuZ30/dGVrcz0ke3Rla3N9YCxcclxuICAgICAgYC9NYXN0ZXJEYXRhTG9rYWwvR2V0U21yQnlDYWJhbmcvJHtjYWJhbmd9P3Rla3M9JHt0ZWtzfWAsXHJcbiAgICAvLyBgL01hc3RlckRhdGFMb2thbC9HZXRTbXJPdXRsZXRCeUNhYmFuZy8xND90ZWtzPSR7dGVrc31gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0Tm90aWZpY2F0aW9uYnlVc2VybmFtZSA9ICh1c2VybmFtZSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIEFQSV9VUkwgK1xyXG4gICAgICBBUElfTUFTVEVSICtcclxuICAgICAgLy8gYC9NYXN0ZXJEYXRhTG9rYWwvR2V0Tm90aWZpa2FzaUJ5VXNlcj91c2VybmFtZT1kaWFuJTQwZ21haWwuY29tYCxcclxuICAgICAgYC9NYXN0ZXJEYXRhTG9rYWwvR2V0Tm90aWZpa2FzaUJ5VXNlcj91c2VybmFtZT0ke3VzZXJuYW1lfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRQaW1jYUJ5Q2FiYW5nID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgYGh0dHBzOi8vbS1vbmUua2FsYmUuY28uaWQ6ODI0My90L2thbGJlLmNvLmlkL1Nha2Ftb3JNYXN0ZXJEYXRhL3YxL2FwaS9NYXN0ZXJEYXRhTG9rYWwvR2V0UGltY2FCeS8ke3VzZXJEYXRhLmtvZGVDYWJhbmd9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHN1Ym1pdEluY2VudGl2ZVNtciA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgQVBJX1VSTCArIEFQSV9JTkNFTlRJVkUgKyBgL0twaUluY2VudGl2ZU1vbnRobHkvSW5zZXJ0SW5zZW50aWZCdWxhbmFuYCxcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0SW5jZW50aXZlQXBwcm92YWwgPSAodXNlckRhdGEpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICAvLyBBUElfVVJMICtcclxuICAgIC8vICAgQVBJX0lOQ0VOVElWRSArXHJcbiAgICAvLyAgIGAvS3BpSW5jZW50aXZlTW9udGhseeKAiy9HZXRJbnNlbnRpZkJ1bGFuYW5Gb3JBcHByb3ZhbOKAiy8ke3VzZXJEYXRhLmtvZGVDYWJhbmd9YCxcclxuICAgIGBodHRwczovL20tb25lLmthbGJlLmNvLmlkOjgyNDMvdC9rYWxiZS5jby5pZC9TYWthbW9ySW5jZW50aXZlL3YxL2FwaS9LcGlJbmNlbnRpdmVNb250aGx5L0dldEluc2VudGlmQnVsYW5hbkZvckFwcHJvdmFsLzMyYCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldEluY2VudGl2ZVN0YXR1cyA9ICh1c2VyRGF0YSwgZGF0ZSkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIGBodHRwczovL20tb25lLmthbGJlLmNvLmlkOjgyNDMvdC9rYWxiZS5jby5pZC9TYWthbW9ySW5jZW50aXZlL3YxL2FwaS9LcGlJbmNlbnRpdmVNb250aGx5L0dldEluc2VudGlmRGV0YWlsQnk/dXNlcm5hbWU9JHt1c2VyRGF0YS51c2VybmFtZX0mcGVyaW9kZT0ke2RhdGV9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldEluY2VudGl2ZURldGFpbGJ5SUQgPSAoaWQpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9tLW9uZS5rYWxiZS5jby5pZDo4MjQzL3Qva2FsYmUuY28uaWQvU2FrYW1vckluY2VudGl2ZS92MS9hcGkvS3BpSW5jZW50aXZlTW9udGhseS9HZXRJbnNlbnRpZkRldGFpbEJ5LyR7aWR9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8vIEJFTkVGSVQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuY29uc3QgZ2V0QmVuZWZpdENvZGVDYWJhbmcgPSAodXNlckRhdGEpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBBUElfVVJMICtcclxuICAgICAgQVBJX0JFTkVGSVQgK1xyXG4gICAgICBgL0JlbmVmaXRzL0dldEJlbmVmaXRzQnlLb2RlQ2FiYW5nLyR7dXNlckRhdGEua29kZUNhYmFuZ31gLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBBUFBST1ZBTCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5jb25zdCBhcHByb3ZhbFJlamVjdCA9IChkYXRhLCBtb2R1bCwgaWQsIHVzZXJEYXRhKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgcmV0dXJuIGZldGNoKEFQSV9VUkwgKyBBUElfQVBQUk9WQUwgKyBcIi9hcHByb3ZhbC90cmFuc2FjdGlvbi9SZWplY3RcIiwge1xyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGlmIChtb2R1bCA9PT0gXCJQbGFuXCIpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goXHJcbiAgICAgICAgICBBUElfVVJMICtcclxuICAgICAgICAgICAgQVBJX1ZJU0lUX1BMQU4gK1xyXG4gICAgICAgICAgICBgL0FjdGl2aXR5VmlzaXRQbGFuL1VwZGF0ZVN0YXR1c1Zpc2l0UGxhbi8ke2lkfT9zdGF0dXM9UmVqZWN0ZWQmdXBkYXRlZEJ5PSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAobW9kdWwgPT09IFwiVW5QbGFuXCIpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goXHJcbiAgICAgICAgICAvLyBBUElfVVJMICtcclxuICAgICAgICAgIC8vICAgQVBJX1ZJU0lUX1BMQU4gK1xyXG4gICAgICAgICAgLy8gICBgL0FjdGl2aXR5VmlzaXRQbGFuL1VwZGF0ZVN0YXR1c1Zpc2l0UGxhbi8ke2lkfT9zdGF0dXM9UmVqZWN0ZWQmdXBkYXRlZEJ5PSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgICAgICAgIGBodHRwczovL20tb25lLmthbGJlLmNvLmlkOjgyNDMvdC9rYWxiZS5jby5pZC9TYWthbW9yQWN0aXZpdHlWaXNpdFVuUGxhbi92MS9hcGkvU2FrYW1vckFjdGl2aXR5VmlzaXRVblBsYW4vVXBkYXRlU3RhdHVzVmlzaXRVblBsYW4vJHtpZH0/c3RhdHVzPVJlamVjdGVkJnVwZGF0ZWRCeT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcblxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChtb2R1bCA9PT0gXCJTcHJlYWRpbmdcIikge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChcclxuICAgICAgICAgIGBodHRwczovL20tb25lLmthbGJlLmNvLmlkOjgyNDMvdC9rYWxiZS5jby5pZC9TYWthbW9yQWN0aXZpdHlTcHJlYWRpbmcvdjEvYXBpL0FjdGl2aXR5U3ByZWFkaW5nL1VwZGF0ZVN0YXR1c1NwcmVhZGluZy8ke2lkfT9zdGF0dXM9UmVqZWN0ZWQmdXBkYXRlZEJ5PSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBhcHByb3ZhbFJldmlzZSA9IChkYXRhLCBtb2R1bCwgaWQsIHVzZXJEYXRhKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgcmV0dXJuIGZldGNoKEFQSV9VUkwgKyBBUElfQVBQUk9WQUwgKyBcIi9hcHByb3ZhbC90cmFuc2FjdGlvbi9SZWplY3RcIiwge1xyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGlmIChtb2R1bCA9PT0gXCJQbGFuXCIpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goXHJcbiAgICAgICAgICBBUElfVVJMICtcclxuICAgICAgICAgICAgQVBJX1ZJU0lUX1BMQU4gK1xyXG4gICAgICAgICAgICBgL0FjdGl2aXR5VmlzaXRQbGFuL1VwZGF0ZVN0YXR1c1Zpc2l0UGxhbi8ke2lkfT9zdGF0dXM9UmV2aXNlJnVwZGF0ZWRCeT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKG1vZHVsID09PSBcIlVuUGxhblwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKFxyXG4gICAgICAgICAgLy8gQVBJX1VSTCArXHJcbiAgICAgICAgICAvLyAgIEFQSV9WSVNJVF9QTEFOICtcclxuICAgICAgICAgIC8vICAgYC9BY3Rpdml0eVZpc2l0UGxhbi9VcGRhdGVTdGF0dXNWaXNpdFBsYW4vJHtpZH0/c3RhdHVzPVJldmlzZSZ1cGRhdGVkQnk9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAgICAgICAgYGh0dHBzOi8vbS1vbmUua2FsYmUuY28uaWQ6ODI0My90L2thbGJlLmNvLmlkL1Nha2Ftb3JBY3Rpdml0eVZpc2l0VW5QbGFuL3YxL2FwaS9TYWthbW9yQWN0aXZpdHlWaXNpdFVuUGxhbi9VcGRhdGVTdGF0dXNWaXNpdFVuUGxhbi8ke2lkfT9zdGF0dXM9UmV2aXNlJnVwZGF0ZWRCeT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKG1vZHVsID09PSBcIlNwcmVhZGluZ1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKFxyXG4gICAgICAgICAgYGh0dHBzOi8vbS1vbmUua2FsYmUuY28uaWQ6ODI0My90L2thbGJlLmNvLmlkL1Nha2Ftb3JBY3Rpdml0eVNwcmVhZGluZy92MS9hcGkvQWN0aXZpdHlTcHJlYWRpbmcvVXBkYXRlU3RhdHVzU3ByZWFkaW5nLyR7aWR9P3N0YXR1cz1SZXZpc2UmdXBkYXRlZEJ5PSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBhcHByb3ZhbEFwcHJvdmUgPSAoZGF0YSwgbW9kdWwsIGlkLCB1c2VyRGF0YSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIHJldHVybiBmZXRjaChBUElfVVJMICsgQVBJX0FQUFJPVkFMICsgXCIvYXBwcm92YWwvdHJhbnNhY3Rpb24vQXBwcm92ZVwiLCB7XHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIGFwaUtleTogVE9LRU4sXHJcbiAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKG1vZHVsID09PSBcIlBsYW5cIikge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChcclxuICAgICAgICAgIEFQSV9VUkwgK1xyXG4gICAgICAgICAgICBBUElfVklTSVRfUExBTiArXHJcbiAgICAgICAgICAgIGAvQWN0aXZpdHlWaXNpdFBsYW4vVXBkYXRlU3RhdHVzVmlzaXRQbGFuLyR7aWR9P3N0YXR1cz1BcHByb3ZlZCZ1cGRhdGVkQnk9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChtb2R1bCA9PT0gXCJVblBsYW5cIikge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChcclxuICAgICAgICAgIC8vIEFQSV9VUkwgK1xyXG4gICAgICAgICAgLy8gICBBUElfVklTSVRfUExBTiArXHJcbiAgICAgICAgICAvLyAgIGAvQWN0aXZpdHlWaXNpdFBsYW4vVXBkYXRlU3RhdHVzVmlzaXRQbGFuLyR7aWR9P3N0YXR1cz1BcHByb3ZlZCZ1cGRhdGVkQnk9JHt1c2VyRGF0YS51c2VybmFtZX1gLFxyXG4gICAgICAgICAgYGh0dHBzOi8vbS1vbmUua2FsYmUuY28uaWQ6ODI0My90L2thbGJlLmNvLmlkL1Nha2Ftb3JBY3Rpdml0eVZpc2l0VW5QbGFuL3YxL2FwaS9TYWthbW9yQWN0aXZpdHlWaXNpdFVuUGxhbi9VcGRhdGVTdGF0dXNWaXNpdFVuUGxhbi8ke2lkfT9zdGF0dXM9QXBwcm92ZWQmdXBkYXRlZEJ5PSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAobW9kdWwgPT09IFwiU3ByZWFkaW5nXCIpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goXHJcbiAgICAgICAgICAvLyBBUElfVVJMICtcclxuICAgICAgICAgIC8vICAgQVBJX1ZJU0lUX1BMQU4gK1xyXG4gICAgICAgICAgLy8gICBgL0FjdGl2aXR5VmlzaXRQbGFuL1VwZGF0ZVN0YXR1c1Zpc2l0UGxhbi8ke2lkfT9zdGF0dXM9QXBwcm92ZWQmdXBkYXRlZEJ5PSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgICAgICAgIGBodHRwczovL20tb25lLmthbGJlLmNvLmlkOjgyNDMvdC9rYWxiZS5jby5pZC9TYWthbW9yQWN0aXZpdHlTcHJlYWRpbmcvdjEvYXBpL0FjdGl2aXR5U3ByZWFkaW5nL1VwZGF0ZVN0YXR1c1NwcmVhZGluZy8ke2lkfT9zdGF0dXM9QXBwcm92ZWQmdXBkYXRlZEJ5PSR7dXNlckRhdGEudXNlcm5hbWV9YCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgYXBpS2V5OiBUT0tFTixcclxuICAgICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBhcHByb3ZhbFN1Ym1pdCA9IChkYXRhLCBpZCwgdXNlckRhdGEpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9tLW9uZS5rYWxiZS5jby5pZDo4MjQzL3Qva2FsYmUuY28uaWQvQXBwcm92YWxBUEkvdjEvYXBpL2FwcHJvdmFsL3RyYW5zYWN0aW9uL1N1Ym1pdGAsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIHNldFdyb25nVXNlcih0cnVlKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICAvLyBVU0VSXHJcbiAgZ2V0TWVudSxcclxuICBnZXRBdXRoLFxyXG4gIG9uTG9naW4sXHJcbiAgcG9zdENoYW5nZVBhc3MsXHJcbiAgZm9yZ290UGFzc3dvcmQsXHJcbiAgLy8gTUFTVEVSXHJcbiAgZ2V0UHJvZHVjdFNlYXJjaCxcclxuICBnZXRTZWFyY2hKZW5pc0NoYW5uZWwsXHJcbiAgZ2V0UHJvZHVjdEF2Z1NhbGVzLFxyXG4gIGdldFNlYXJjaE91dGxldCxcclxuICBnZXRCcmFuZCxcclxuICBnZXRQcm9kdWN0QnlKZW5pc0NoYW5uZWwsXHJcbiAgZ2V0S29udGVuV29ya1Zpc2l0LFxyXG4gIGdldEhuYUF2ZyxcclxuICBwb3N0UHJvZmlsZVBpYyxcclxuICB2aWV3UHJvZmlsZVBpYyxcclxuICBnZXRTbXJCeUNhYmFuZyxcclxuICB2aWV3T3V0bGV0Q2xhc3MsXHJcbiAgZ2V0Tm90aWZpY2F0aW9uYnlVc2VybmFtZSxcclxuICBnZXRQaW1jYUJ5Q2FiYW5nLFxyXG4gIGdldEhhcmdhRWNlcmFuLFxyXG4gIGdldE91dGxldFNwcmVhZGluZ05lYXJNZSxcclxuICBpbnNlcnRPdXRsZXRTcHJlYWRpbmcsXHJcbiAgLy8gVklTSVQgUExBTlxyXG4gIGdldFBsYW5MaXN0LFxyXG4gIGdldFBsYW5JZCxcclxuICBnZXRQb3NtLFxyXG4gIGdldFBsYW5IaXN0b3J5LFxyXG4gIHN1Ym1pdFZpc2l0UGxhbixcclxuICBzdWJtaXRWaXNpdFBsYW5EcG9zbSxcclxuICBnZXRJbnZvaWNlRGF0YVBvc20sXHJcbiAgZ2V0SW52b2ljZURhdGEsXHJcbiAgZ2V0UGxhbk1vbnRobHlIaXN0b3J5LFxyXG4gIHZpZXdGaWxlLFxyXG4gIGdldE1hc3RlclZpc2l0UGxhbixcclxuICBkZWxldGVNYXN0ZXJQbGFuU01SLFxyXG4gIHNhdmVNYXN0ZXJQbGFuVmlzaXQsXHJcbiAgZ2V0QXBwcm92YWwsXHJcbiAgZ2V0UGxhbkJ5SWQsXHJcbiAgZ2V0UmV2aXNlUGxhbkxpc3RTbXIsXHJcbiAgdXBkYXRlRGF0YVBvc21QbGFuLFxyXG4gIHVwZGF0ZURhdGFQcm9kdWtQbGFuLFxyXG4gIGluc2VydEZpbGVQbGFuLFxyXG4gIGdldFZpc2l0UGxhblByb2R1Y3QsXHJcbiAgZ2V0UmVjYXBPcmRlcixcclxuICAvLyBWSVNJVCBVTlBMQU5cclxuICBzdWJtaXRWaXNpdFVucGxhbixcclxuICBzdWJtaXRWaXNpdFVucGxhbkRwb3NtLFxyXG4gIGdldEludm9pY2VEYXRhVW5wbGFuLFxyXG4gIGdldEludm9pY2VEYXRhUG9zbVVucGxhbixcclxuICBnZXRVbnBsYW5Nb250aGx5SGlzdG9yeSxcclxuICB2aWV3RmlsZVVucGxhbixcclxuICBnZXRVbnBsYW5OZWFyTWUsXHJcbiAgZ2V0VW5wbGFuQnlJZCxcclxuICBnZXRSZXZpc2VVblBsYW5MaXN0U21yLFxyXG4gIHVwZGF0ZURhdGFQb3NtVW5wbGFuLFxyXG4gIHVwZGF0ZURhdGFQcm9kdWtVbnBsYW4sXHJcbiAgaW5zZXJ0RmlsZVVucGxhbixcclxuICBnZXRVblBsYW5Qcm9kdWN0cyxcclxuICAvLyBTUFJFQURJTkdcclxuICBzdWJtaXRWaXNpdFNwcmVhZGluZyxcclxuICBzdWJtaXRWaXNpdFNwcmVhZGluZ0Rwb3NtLFxyXG4gIGdldEludm9pY2VEYXRhU3ByZWFkaW5nLFxyXG4gIGdldEludm9pY2VEYXRhUG9zbVNwcmVhZGluZyxcclxuICB2aWV3RmlsZVNwcmVhZGluZyxcclxuICBnZXRTcHJlYWRpbmdNb250aGx5SGlzdG9yeSxcclxuICBnZXRTcHJlYWRpbmdCeUlkLFxyXG4gIGdldFJldmlzZVNwcmVhZGluZ0xpc3RTbXIsXHJcbiAgdXBkYXRlRGF0YVBvc21TcHJlYWRpbmcsXHJcbiAgdXBkYXRlRGF0YVByb2R1a1NwcmVhZGluZyxcclxuICBpbnNlcnRGaWxlU3ByZWFkaW5nLFxyXG4gIGdldFNwcmVhZGluZ1Byb2R1Y3QsXHJcbiAgLy8gV09SSyBWSVNJVFxyXG4gIGdldEFsbFdvcmtWaXNpdCxcclxuICBnZXRXb3JrVmlzaXRNb250aGx5SGlzdG9yeSxcclxuICBnZXRXb3JrVmlzaXRSYXRpbmcsXHJcbiAgc3VibWl0V29ya1Zpc2l0LFxyXG4gIGdldE1hc3RlcldvcmtWaXNpdCxcclxuICBzYXZlTWFzdGVyV29ya1Zpc2l0LFxyXG4gIGRlbGV0ZU1hc3RlcldvcmtWaXNpdCxcclxuICAvLyBDYWxlbmRhclxyXG4gIGdldERheVByb2dyYW0sXHJcbiAgZ2V0RGF5UHJvbW8sXHJcbiAgZ2V0TW9udGhQcm9ncmFtLFxyXG4gIGdldE1vbnRoUHJvbW8sXHJcbiAgLy8gQW5ub3VuY2VtZW50XHJcbiAgZ2V0QWxsQW5ub3VuY2VtZW50LFxyXG4gIHVwZGF0ZVJlYWRBbm5vdW5jZW1lbnQsXHJcbiAgLy8gSU5DRU5USVZFXHJcbiAgZ2V0U2FsZXNUYXJnZXRTTVIsXHJcbiAgZ2V0U2FsZXNUYXJnZXQ3NVNNUixcclxuICBnZXRQcm9kdWt0aWZpdGFzLFxyXG4gIGdldEZyb250bGluZXIsXHJcbiAgZ2V0Tm9vLFxyXG4gIGdldFdvcmtEYXksXHJcbiAgZ2V0S3BpSW52ZW50aXZlTW9udGhseVNNUixcclxuICBnZXRLcGlJbnZlbnRpdmVNb250aGx5UGltY2EsXHJcbiAgZ2V0SW5jZW50aXZlWWVhcmx5LFxyXG4gIGdldFNhbGVzVGFyZ2V0UGltY2EsXHJcbiAgZ2V0U2FsZXNUYXJnZXQ3NVBpbWNhLFxyXG4gIGdldEZyb250bGluZXJQaW1jYSxcclxuICBzdWJtaXRJbmNlbnRpdmVTbXIsXHJcbiAgZ2V0SW5jZW50aXZlQXBwcm92YWwsXHJcbiAgZ2V0SW5jZW50aXZlU3RhdHVzLFxyXG4gIGdldEluY2VudGl2ZURldGFpbGJ5SUQsXHJcbiAgLy8gQkVORUZJVFxyXG4gIGdldEJlbmVmaXRDb2RlQ2FiYW5nLFxyXG4gIC8vIEFQUFJPVkFMXHJcbiAgYXBwcm92YWxSZWplY3QsXHJcbiAgYXBwcm92YWxSZXZpc2UsXHJcbiAgYXBwcm92YWxBcHByb3ZlLFxyXG4gIGFwcHJvdmFsU3VibWl0LFxyXG59O1xyXG4iLCJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGZpcmViYXNlQ2xvdWRNZXNzYWdpbmcgfSBmcm9tIFwiLi4vd2VicHVzaFwiO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCB7IGdldEFsbEFubm91bmNlbWVudCB9IGZyb20gXCIuLi9oZWxwZXJcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKTtcbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VG9rZW4oKTtcbiAgICBhc3luYyBmdW5jdGlvbiBzZXRUb2tlbigpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZmlyZWJhc2VDbG91ZE1lc3NhZ2luZy5pbml0KCk7XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgIGdldE1lc3NhZ2UoKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRNZXNzYWdlKCkge1xuICAgICAgY29uc3QgbWVzc2FnaW5nID0gZmlyZWJhc2UubWVzc2FnaW5nKCk7XG4gICAgICBjb25zb2xlLmxvZyh7IG1lc3NhZ2luZyB9KTtcbiAgICAgIG1lc3NhZ2luZy5vbk1lc3NhZ2UoKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJub3RpZlwiLCB0cnVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPFN0b3JlPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvU3RvcmU+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIiwiZXhwb3J0IGRlZmF1bHQgKGRpc3BhdGNoKSA9PiAoe1xyXG4gIGtlZXBTdGF0ZTogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJLRUVQX1NUQVRFXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0RGVmYXVsdFJldmlzZTogYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9ERUZBVUxUX1JFVklTRVwiIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNldERlZmF1bHRWaXNpdFBsYW46IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfREVGQVVMVF9WSVNJVF9QTEFOXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0RGVmYXVsdFZpc2l0U3ByZWFkaW5nOiBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX0RFRkFVTFRfVklTSVRfU1BSRUFESU5HXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0RGVmYXVsdFZpc2l0VW5wbGFuOiBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX0RFRkFVTFRfVklTSVRfVU5QTEFOXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0Rm9jdXNBcHByb3ZhbDogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfRk9DVVNfQVBQUk9WQUxcIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRNZW51OiBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9NRU5VXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0UGxhbkF2YWJpbGl0eTogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfUExBTl9BVkFCSUxJVFlcIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRQbGFuQ2F0YXRhbjogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfUExBTl9DQVRBVEFOXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0UGxhbkNoZWNrSW46IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1BMQU5fQ0hFQ0tfSU5cIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRQbGFuVmlzaWJpbGl0eTogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfUExBTl9WSVNJQklMSVRZXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0UmV2aXNlQXZhYmlsaXR5OiBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9SRVZJU0VfQVZBQklMSVRZXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0UmV2aXNlVmlzaWJpbGl0eTogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfUkVWSVNFX1ZJU0lCSUxJVFlcIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRTcHJlYWRpbmdDYXRhdGFuOiBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9TUFJFQURJTkdfQ0FUQVRBTlwiLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNldFNwcmVhZGluZ0F2YWJpbGl0eTogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfU1BSRUFESU5HX0FWQUJJTElUWVwiLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNldFNwcmVhZGluZ0FsYW1hdDogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfU1BSRUFESU5HX0FMQU1BVFwiLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNldFNwcmVhZGluZ0NoZWNrSW46IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1NQUkVBRElOR19DSEVDS19JTlwiLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNldFNwcmVhZGluZ0plbmlzQ2hhbm5lbDogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfU1BSRUFESU5HX0pFTklTX0NIQU5ORUxcIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRTcHJlYWRpbmdOZWFyTWU6IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1NQUkVBRElOR19ORUFSTUVcIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRTcHJlYWRpbmdOZXdPdXRsZXQ6IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1NQUkVBRElOR19ORVdfT1VUTEVUXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0U3ByZWFkaW5nT3V0bGV0OiBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9TUFJFQURJTkdfT1VUTEVUXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2V0U3ByZWFkaW5nVmlzaWJpbGl0eTogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfU1BSRUFESU5HX1ZJU0lCSUxJVFlcIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRVbnBsYW5BdmFiaWxpdHk6IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1VOUExBTl9BVkFCSUxJVFlcIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRVbnBsYW5DYXRhdGFuOiBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9VTlBMQU5fQ0FUQVRBTlwiLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNldFVucGxhbkNoZWNrSW46IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1VOUExBTl9DSEVDS19JTlwiLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNldFVucGxhbkplbmlzQ2hhbm5lbDogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfVU5QTEFOX0pFTklTX0NIQU5ORUxcIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRVbnBsYW5PdXRsZXQ6IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX1VOUExBTl9PVVRMRVRcIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IChkaXNwYXRjaCkgPT4gKHtcclxuICBzZXRVbnBsYW5WaXNpYmlsaXR5OiBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9VTlBMQU5fVklTSUJJTElUWVwiLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHVzZXJMb2dpbjogYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJVU0VSX0xPR0lOXCIsIHBheWxvYWQ6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciwgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlclJlZHVjZXIsIGRlZmF1bHRVc2VyIH0gZnJvbSBcIi4vcmVkdWNlcnMvdXNlclwiO1xyXG5pbXBvcnQgeyBtZW51UmVkdWNlciwgZGVmYXVsdE1lbnUgfSBmcm9tIFwiLi9yZWR1Y2Vycy9tZW51XCI7XHJcbmltcG9ydCB7IHZpc2l0UGxhblJlZHVjZXIsIGRlZmF1bHRWaXNpdFBsYW4gfSBmcm9tIFwiLi9yZWR1Y2Vycy92aXNpdFBsYW5cIjtcclxuaW1wb3J0IHsgdmlzaXRVbnBsYW5SZWR1Y2VyLCBkZWZhdWx0VmlzaXRVbnBsYW4gfSBmcm9tIFwiLi9yZWR1Y2Vycy92aXNpdFVucGxhblwiO1xyXG5pbXBvcnQge1xyXG4gIHZpc2l0U3ByZWFkaW5nUmVkdWNlcixcclxuICBkZWZhdWx0VmlzaXRTcHJlYWRpbmcsXHJcbn0gZnJvbSBcIi4vcmVkdWNlcnMvdmlzaXRTcHJlYWRpbmdcIjtcclxuXHJcbmltcG9ydCB7IGFwcHJvdmFsUmVkdWNlciwgZGVmYXVsdEFwcHJvdmFsIH0gZnJvbSBcIi4vcmVkdWNlcnMvYXBwcm92YWxcIjtcclxuXHJcbmltcG9ydCB7IHJldmlzZVJlZHVjZXIsIGRlZmF1bHRSZXZpc2UgfSBmcm9tIFwiLi9yZWR1Y2Vycy9yZXZpc2VcIjtcclxuXHJcbmltcG9ydCB1c2VyTG9naW4gZnJvbSBcIi4vYWN0aW9ucy91c2VyTG9naW5cIjtcclxuaW1wb3J0IHNldE1lbnUgZnJvbSBcIi4vYWN0aW9ucy9zZXRNZW51XCI7XHJcbmltcG9ydCBrZWVwU3RhdGUgZnJvbSBcIi4vYWN0aW9ucy9rZWVwU3RhdGVcIjtcclxuXHJcbmltcG9ydCBzZXRQbGFuVmlzaWJpbGl0eSBmcm9tIFwiLi9hY3Rpb25zL3NldFBsYW5WaXNpYmlsaXR5XCI7XHJcbmltcG9ydCBzZXRQbGFuQXZhYmlsaXR5IGZyb20gXCIuL2FjdGlvbnMvc2V0UGxhbkF2YWJpbGl0eVwiO1xyXG5pbXBvcnQgc2V0UGxhbkNhdGF0YW4gZnJvbSBcIi4vYWN0aW9ucy9zZXRQbGFuQ2F0YXRhblwiO1xyXG5pbXBvcnQgc2V0UGxhbkNoZWNrSW4gZnJvbSBcIi4vYWN0aW9ucy9zZXRQbGFuQ2hlY2tJblwiO1xyXG5cclxuaW1wb3J0IHNldFVucGxhbkF2YWJpbGl0eSBmcm9tIFwiLi9hY3Rpb25zL3NldFVucGxhbkF2YWJpbGl0eVwiO1xyXG5pbXBvcnQgc2V0VW5wbGFuVmlzaWJpbGl0eSBmcm9tIFwiLi9hY3Rpb25zL3NldFVucGxhblZpc2liaWxpdHlcIjtcclxuaW1wb3J0IHNldFVucGxhbkNhdGF0YW4gZnJvbSBcIi4vYWN0aW9ucy9zZXRVbnBsYW5DYXRhdGFuXCI7XHJcbmltcG9ydCBzZXRVbnBsYW5DaGVja0luIGZyb20gXCIuL2FjdGlvbnMvc2V0VW5wbGFuQ2hlY2tJblwiO1xyXG5pbXBvcnQgc2V0VW5wbGFuSmVuaXNDaGFubmVsIGZyb20gXCIuL2FjdGlvbnMvc2V0VW5wbGFuSmVuaXNDaGFubmVsXCI7XHJcbmltcG9ydCBzZXRVbnBsYW5PdXRsZXQgZnJvbSBcIi4vYWN0aW9ucy9zZXRVbnBsYW5PdXRsZXRcIjtcclxuXHJcbmltcG9ydCBzZXRTcHJlYWRpbmdBdmFiaWxpdHkgZnJvbSBcIi4vYWN0aW9ucy9zZXRTcHJlYWRpbmdBdmFiaWxpdHlcIjtcclxuaW1wb3J0IHNldFNwcmVhZGluZ1Zpc2liaWxpdHkgZnJvbSBcIi4vYWN0aW9ucy9zZXRTcHJlYWRpbmdWaXNpYmlsaXR5XCI7XHJcbmltcG9ydCBzZXRTcHJlYWRpbmdDYXRhdGFuIGZyb20gXCIuL2FjdGlvbnMvc2V0U3ByZWFkaW5nQ2F0YXRhblwiO1xyXG5pbXBvcnQgc2V0U3ByZWFkaW5nQWxhbWF0IGZyb20gXCIuL2FjdGlvbnMvc2V0U3ByZWFkaW5nQWxhbWF0XCI7XHJcbmltcG9ydCBzZXRTcHJlYWRpbmdOZXdPdXRsZXQgZnJvbSBcIi4vYWN0aW9ucy9zZXRTcHJlYWRpbmdOZXdPdXRsZXRcIjtcclxuaW1wb3J0IHNldFNwcmVhZGluZ0NoZWNrSW4gZnJvbSBcIi4vYWN0aW9ucy9zZXRTcHJlYWRpbmdDaGVja0luXCI7XHJcbmltcG9ydCBzZXRTcHJlYWRpbmdKZW5pc0NoYW5uZWwgZnJvbSBcIi4vYWN0aW9ucy9zZXRTcHJlYWRpbmdKZW5pc0NoYW5uZWxcIjtcclxuaW1wb3J0IHNldFNwcmVhZGluZ091dGxldCBmcm9tIFwiLi9hY3Rpb25zL3NldFNwcmVhZGluZ091dGxldFwiO1xyXG5pbXBvcnQgc2V0U3ByZWFkaW5nTmVhck1lIGZyb20gXCIuL2FjdGlvbnMvc2V0U3ByZWFkaW5nTmVhck1lXCI7XHJcblxyXG5pbXBvcnQgc2V0RGVmYXVsdFZpc2l0UGxhbiBmcm9tIFwiLi9hY3Rpb25zL3NldERlZmF1bHRWaXNpdFBsYW5cIjtcclxuaW1wb3J0IHNldERlZmF1bHRWaXNpdFVucGxhbiBmcm9tIFwiLi9hY3Rpb25zL3NldERlZmF1bHRWaXNpdFVucGxhblwiO1xyXG5pbXBvcnQgc2V0RGVmYXVsdFZpc2l0U3ByZWFkaW5nIGZyb20gXCIuL2FjdGlvbnMvc2V0RGVmYXVsdFZpc2l0U3ByZWFkaW5nXCI7XHJcbmltcG9ydCBzZXREZWZhdWx0UmV2aXNlIGZyb20gXCIuL2FjdGlvbnMvc2V0RGVmYXVsdFJldmlzZVwiO1xyXG5cclxuaW1wb3J0IHNldFJldmlzZUF2YWJpbGl0eSBmcm9tIFwiLi9hY3Rpb25zL3NldFJldmlzZUF2YWJpbGl0eVwiO1xyXG5pbXBvcnQgc2V0UmV2aXNlVmlzaWJpbGl0eSBmcm9tIFwiLi9hY3Rpb25zL3NldFJldmlzZVZpc2liaWxpdHlcIjtcclxuXHJcbmltcG9ydCBzZXRGb2N1c0FwcHJvdmFsIGZyb20gXCIuL2FjdGlvbnMvc2V0Rm9jdXNBcHByb3ZhbFwiO1xyXG5cclxuY29uc3QgU3RvcmVzID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgU3RvcmUgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKFxyXG4gICAgKHByZXZTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlclJlZHVjZXI6IHVzZXJSZWR1Y2VyKHByZXZTdGF0ZS51c2VyUmVkdWNlciwgYWN0aW9uKSxcclxuICAgICAgICBtZW51UmVkdWNlcjogbWVudVJlZHVjZXIocHJldlN0YXRlLm1lbnVSZWR1Y2VyLCBhY3Rpb24pLFxyXG4gICAgICAgIHZpc2l0UGxhblJlZHVjZXI6IHZpc2l0UGxhblJlZHVjZXIocHJldlN0YXRlLnZpc2l0UGxhblJlZHVjZXIsIGFjdGlvbiksXHJcbiAgICAgICAgdmlzaXRVbnBsYW5SZWR1Y2VyOiB2aXNpdFVucGxhblJlZHVjZXIoXHJcbiAgICAgICAgICBwcmV2U3RhdGUudmlzaXRVbnBsYW5SZWR1Y2VyLFxyXG4gICAgICAgICAgYWN0aW9uXHJcbiAgICAgICAgKSxcclxuICAgICAgICB2aXNpdFNwcmVhZGluZ1JlZHVjZXI6IHZpc2l0U3ByZWFkaW5nUmVkdWNlcihcclxuICAgICAgICAgIHByZXZTdGF0ZS52aXNpdFNwcmVhZGluZ1JlZHVjZXIsXHJcbiAgICAgICAgICBhY3Rpb25cclxuICAgICAgICApLFxyXG4gICAgICAgIGFwcHJvdmFsUmVkdWNlcjogYXBwcm92YWxSZWR1Y2VyKHByZXZTdGF0ZS5hcHByb3ZhbFJlZHVjZXIsIGFjdGlvbiksXHJcbiAgICAgICAgcmV2aXNlUmVkdWNlcjogcmV2aXNlUmVkdWNlcihwcmV2U3RhdGUucmV2aXNlUmVkdWNlciwgYWN0aW9uKSxcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHVzZXJSZWR1Y2VyOiBkZWZhdWx0VXNlcixcclxuICAgICAgbWVudVJlZHVjZXI6IGRlZmF1bHRNZW51LFxyXG4gICAgICB2aXNpdFBsYW5SZWR1Y2VyOiBkZWZhdWx0VmlzaXRQbGFuLFxyXG4gICAgICB2aXNpdFVucGxhblJlZHVjZXI6IGRlZmF1bHRWaXNpdFVucGxhbixcclxuICAgICAgdmlzaXRTcHJlYWRpbmdSZWR1Y2VyOiBkZWZhdWx0VmlzaXRTcHJlYWRpbmcsXHJcbiAgICAgIGFwcHJvdmFsUmVkdWNlcjogZGVmYXVsdEFwcHJvdmFsLFxyXG4gICAgICByZXZpc2VSZWR1Y2VyOiBkZWZhdWx0UmV2aXNlLFxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGFjdGlvbnMgPSB1c2VNZW1vKFxyXG4gICAgKCkgPT4gKHtcclxuICAgICAgLi4udXNlckxvZ2luKGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0TWVudShkaXNwYXRjaCksXHJcbiAgICAgIC4uLmtlZXBTdGF0ZShkaXNwYXRjaCksXHJcblxyXG4gICAgICAuLi5zZXRQbGFuVmlzaWJpbGl0eShkaXNwYXRjaCksXHJcbiAgICAgIC4uLnNldFBsYW5BdmFiaWxpdHkoZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXRQbGFuQ2F0YXRhbihkaXNwYXRjaCksXHJcbiAgICAgIC4uLnNldFBsYW5DaGVja0luKGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0RGVmYXVsdFZpc2l0UGxhbihkaXNwYXRjaCksXHJcblxyXG4gICAgICAuLi5zZXRVbnBsYW5WaXNpYmlsaXR5KGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0VW5wbGFuQXZhYmlsaXR5KGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0VW5wbGFuQ2F0YXRhbihkaXNwYXRjaCksXHJcbiAgICAgIC4uLnNldFVucGxhbkNoZWNrSW4oZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXRVbnBsYW5KZW5pc0NoYW5uZWwoZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXRVbnBsYW5PdXRsZXQoZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXREZWZhdWx0VmlzaXRVbnBsYW4oZGlzcGF0Y2gpLFxyXG5cclxuICAgICAgLi4uc2V0U3ByZWFkaW5nVmlzaWJpbGl0eShkaXNwYXRjaCksXHJcbiAgICAgIC4uLnNldFNwcmVhZGluZ0F2YWJpbGl0eShkaXNwYXRjaCksXHJcbiAgICAgIC4uLnNldFNwcmVhZGluZ0NhdGF0YW4oZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXRTcHJlYWRpbmdBbGFtYXQoZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXRTcHJlYWRpbmdOZXdPdXRsZXQoZGlzcGF0Y2gpLFxyXG4gICAgICAuLi5zZXRTcHJlYWRpbmdDaGVja0luKGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0U3ByZWFkaW5nSmVuaXNDaGFubmVsKGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0U3ByZWFkaW5nT3V0bGV0KGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0U3ByZWFkaW5nTmVhck1lKGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0RGVmYXVsdFZpc2l0U3ByZWFkaW5nKGRpc3BhdGNoKSxcclxuXHJcbiAgICAgIC4uLnNldEZvY3VzQXBwcm92YWwoZGlzcGF0Y2gpLFxyXG5cclxuICAgICAgLi4uc2V0UmV2aXNlQXZhYmlsaXR5KGRpc3BhdGNoKSxcclxuICAgICAgLi4uc2V0UmV2aXNlVmlzaWJpbGl0eShkaXNwYXRjaCksXHJcbiAgICAgIC4uLnNldERlZmF1bHRSZXZpc2UoZGlzcGF0Y2gpLFxyXG4gICAgfSksXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3RvcmVzLlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBkaXNwYXRjaCwgYWN0aW9ucyB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9TdG9yZXMuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IFN0b3JlcywgU3RvcmUgfTtcclxuIiwiY29uc3QgZGVmYXVsdEFwcHJvdmFsID0ge1xyXG4gIGZvY3VzQXBwcm92YWw6IHt9LFxyXG59O1xyXG5cclxuY29uc3QgYXBwcm92YWxSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiU0VUX0ZPQ1VTX0FQUFJPVkFMXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBmb2N1c0FwcHJvdmFsOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IGFwcHJvdmFsUmVkdWNlciwgZGVmYXVsdEFwcHJvdmFsIH07XHJcbiIsImNvbnN0IGRlZmF1bHRNZW51ID0ge1xyXG4gIG1lbnU6IFtdLFxyXG59O1xyXG5cclxuY29uc3QgbWVudVJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgXCJTRVRfTUVOVVwiOlxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm1lbnVcIiwgSlNPTi5zdHJpbmdpZnkoYWN0aW9uLnBheWxvYWQpKTtcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG1lbnU6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiS0VFUF9TVEFURVwiOlxyXG4gICAgICBjb25zdCB1c2VyTWVudSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtZW51XCIpKTtcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG1lbnU6IHVzZXJNZW51IH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgbWVudVJlZHVjZXIsIGRlZmF1bHRNZW51IH07XHJcbiIsImNvbnN0IGRlZmF1bHRSZXZpc2UgPSB7XHJcbiAgdmlzaWJpbGl0eTogW10sXHJcbiAgYXZhYmlsaXR5OiBbXSxcclxufTtcclxuXHJcbmNvbnN0IHJldmlzZVJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgXCJTRVRfUkVWSVNFX0FWQUJJTElUWVwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYXZhYmlsaXR5OiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9SRVZJU0VfVklTSUJJTElUWVwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdmlzaWJpbGl0eTogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJTRVRfREVGQVVMVF9SRVZJU0VcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdFJldmlzZSB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IHJldmlzZVJlZHVjZXIsIGRlZmF1bHRSZXZpc2UgfTtcclxuIiwiY29uc3QgZGVmYXVsdFVzZXIgPSB7XHJcbiAgdXNlcjogW10sXHJcbn07XHJcblxyXG5jb25zdCB1c2VyUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIlVTRVJfTE9HSU5cIjpcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KGFjdGlvbi5wYXlsb2FkKSk7XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB1c2VyOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlVTRVJfTE9HT1VUXCI6XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdXNlcjogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJLRUVQX1NUQVRFXCI6XHJcbiAgICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdXNlcjogdXNlckRhdGEgfTtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgdXNlclJlZHVjZXIsIGRlZmF1bHRVc2VyIH07XHJcbiIsImNvbnN0IGRlZmF1bHRWaXNpdFBsYW4gPSB7XHJcbiAgdmlzaWJpbGl0eTogW10sXHJcbiAgYXZhYmlsaXR5OiBbXSxcclxuICBjYXRhdGFuOiBcIlwiLFxyXG4gIGNoZWNrSW46IFwiXCIsXHJcbn07XHJcblxyXG5jb25zdCB2aXNpdFBsYW5SZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiU0VUX1BMQU5fVklTSUJJTElUWVwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdmlzaWJpbGl0eTogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJTRVRfUExBTl9BVkFCSUxJVFlcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGF2YWJpbGl0eTogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJTRVRfUExBTl9DQVRBVEFOXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjYXRhdGFuOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9QTEFOX0NIRUNLX0lOXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjaGVja0luOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9ERUZBVUxUX1ZJU0lUX1BMQU5cIjpcclxuICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdFZpc2l0UGxhbiB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IHZpc2l0UGxhblJlZHVjZXIsIGRlZmF1bHRWaXNpdFBsYW4gfTtcclxuIiwiY29uc3QgZGVmYXVsdFZpc2l0U3ByZWFkaW5nID0ge1xyXG4gIHZpc2liaWxpdHk6IFtdLFxyXG4gIGF2YWJpbGl0eTogW10sXHJcbiAgY2F0YXRhbjogXCJcIixcclxuICBhbGFtYXQ6IFwiXCIsXHJcbiAgbmV3T3V0bGV0OiBcIlwiLFxyXG4gIGNoZWNrSW46IFwiXCIsXHJcbiAgamVuaXNDaGFubmVsOiB7fSxcclxuICBvdXRsZXQ6IHt9LFxyXG4gIG5lYXJNZTogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCB2aXNpdFNwcmVhZGluZ1JlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgXCJTRVRfU1BSRUFESU5HX1ZJU0lCSUxJVFlcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHZpc2liaWxpdHk6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiU0VUX1NQUkVBRElOR19BVkFCSUxJVFlcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGF2YWJpbGl0eTogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJTRVRfU1BSRUFESU5HX0NBVEFUQU5cIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNhdGF0YW46IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiU0VUX1NQUkVBRElOR19BTEFNQVRcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGFsYW1hdDogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJTRVRfU1BSRUFESU5HX05FV19PVVRMRVRcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG5ld091dGxldDogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJTRVRfU1BSRUFESU5HX0NIRUNLX0lOXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjaGVja0luOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9TUFJFQURJTkdfSkVOSVNfQ0hBTk5FTFwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgamVuaXNDaGFubmVsOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9TUFJFQURJTkdfT1VUTEVUXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBvdXRsZXQ6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiU0VUX1NQUkVBRElOR19ORUFSTUVcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG5lYXJNZTogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJTRVRfREVGQVVMVF9WSVNJVF9TUFJFQURJTkdcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdFZpc2l0U3ByZWFkaW5nIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgdmlzaXRTcHJlYWRpbmdSZWR1Y2VyLCBkZWZhdWx0VmlzaXRTcHJlYWRpbmcgfTtcclxuIiwiY29uc3QgZGVmYXVsdFZpc2l0VW5wbGFuID0ge1xyXG4gIHZpc2liaWxpdHk6IFtdLFxyXG4gIGF2YWJpbGl0eTogW10sXHJcbiAgY2F0YXRhbjogXCJcIixcclxuICBjaGVja0luOiBcIlwiLFxyXG4gIGplbmlzQ2hhbm5lbDoge30sXHJcbiAgb3V0bGV0OiB7fSxcclxufTtcclxuXHJcbmNvbnN0IHZpc2l0VW5wbGFuUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIlNFVF9VTlBMQU5fVklTSUJJTElUWVwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdmlzaWJpbGl0eTogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJTRVRfVU5QTEFOX0FWQUJJTElUWVwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYXZhYmlsaXR5OiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9VTlBMQU5fQ0FUQVRBTlwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2F0YXRhbjogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJTRVRfVU5QTEFOX0NIRUNLX0lOXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjaGVja0luOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9VTlBMQU5fSkVOSVNfQ0hBTk5FTFwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgamVuaXNDaGFubmVsOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBcIlNFVF9VTlBMQU5fT1VUTEVUXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBvdXRsZXQ6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiU0VUX0RFRkFVTFRfVklTSVRfVU5QTEFOXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLmRlZmF1bHRWaXNpdFVucGxhbiB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IHZpc2l0VW5wbGFuUmVkdWNlciwgZGVmYXVsdFZpc2l0VW5wbGFuIH07XHJcbiIsImltcG9ydCBcImZpcmViYXNlL21lc3NhZ2luZ1wiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5cclxuY29uc3QgZmlyZWJhc2VDbG91ZE1lc3NhZ2luZyA9IHtcclxuICAvL2NoZWNraW5nIHdoZXRoZXIgdG9rZW4gaXMgYXZhaWxhYmxlIGluIGluZGV4ZWQgREJcclxuICB0b2tlbklubG9jYWxmb3JhZ2U6IGFzeW5jICgpID0+IHtcclxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZjbV90b2tlblwiKTtcclxuICB9LFxyXG5cclxuICB1c2VySW5sb2NhbGZvcmFnZTogYXN5bmMgKCkgPT4ge1xyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKTtcclxuICB9LFxyXG5cclxuICAvL2luaXRpYWxpemluZyBmaXJlYmFzZSBhcHBcclxuICBpbml0OiBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XHJcbiAgICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoe1xyXG4gICAgICAgIGFwaUtleTogXCJBSXphU3lBTVRpcllweXpZN1FXRGt6U1Bzb2ZwbzY4amFGbHRucmtcIixcclxuICAgICAgICBhdXRoRG9tYWluOiBcInNha2Ftb3ItOGYyOGQuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICAgICAgcHJvamVjdElkOiBcInNha2Ftb3ItOGYyOGRcIixcclxuICAgICAgICBzdG9yYWdlQnVja2V0OiBcInNha2Ftb3ItOGYyOGQuYXBwc3BvdC5jb21cIixcclxuICAgICAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI0MDA3MjA0NTgxNjZcIixcclxuICAgICAgICBhcHBJZDogXCIxOjQwMDcyMDQ1ODE2Njp3ZWI6Y2Y3YWZjMDZlYzNhYzQxOWQ2OTExN1wiLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnaW5nID0gZmlyZWJhc2UubWVzc2FnaW5nKCk7XHJcbiAgICAgICAgY29uc3QgdG9rZW5JbkxvY2FsRm9yYWdlID0gYXdhaXQgdGhpcy50b2tlbklubG9jYWxmb3JhZ2UoKTtcclxuICAgICAgICBjb25zdCB1c2VySW5sb2NhbGZvcmFnZSA9IGF3YWl0IHRoaXMudXNlcklubG9jYWxmb3JhZ2UoKTtcclxuXHJcbiAgICAgICAgLy9pZiBGQ00gdG9rZW4gaXMgYWxyZWFkeSB0aGVyZSBqdXN0IHJldHVybiB0aGUgdG9rZW5cclxuICAgICAgICBpZiAodG9rZW5JbkxvY2FsRm9yYWdlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICByZXR1cm4gdG9rZW5JbkxvY2FsRm9yYWdlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVzZXJJbmxvY2FsZm9yYWdlKSB7XHJcbiAgICAgICAgICAvL3JlcXVlc3Rpbmcgbm90aWZpY2F0aW9uIHBlcm1pc3Npb24gZnJvbSBicm93c2VyXHJcbiAgICAgICAgICBjb25zdCBzdGF0dXMgPSBhd2FpdCBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKTtcclxuICAgICAgICAgIGlmIChzdGF0dXMgJiYgc3RhdHVzID09PSBcImdyYW50ZWRcIikge1xyXG4gICAgICAgICAgICAvL2dldHRpbmcgdG9rZW4gZnJvbSBGQ01cclxuICAgICAgICAgICAgY29uc3QgZmNtX3Rva2VuID0gYXdhaXQgbWVzc2FnaW5nLmdldFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmIChmY21fdG9rZW4pIHtcclxuICAgICAgICAgICAgICAvL3NldHRpbmcgRkNNIHRva2VuIGluIGluZGV4ZWQgZGIgdXNpbmcgbG9jYWxmb3JhZ2VcclxuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZjbV90b2tlblwiLCBmY21fdG9rZW4pO1xyXG4gICAgICAgICAgICAgIC8vcmV0dXJuIHRoZSBGQ00gdG9rZW4gYWZ0ZXIgc2F2aW5nIGl0XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZjbV90b2tlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbn07XHJcbmV4cG9ydCB7IGZpcmViYXNlQ2xvdWRNZXNzYWdpbmcgfTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL21lc3NhZ2luZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=