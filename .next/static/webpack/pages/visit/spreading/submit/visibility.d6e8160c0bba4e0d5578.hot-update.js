webpackHotUpdate_N_E("pages/visit/spreading/submit/visibility",{

/***/ "./components/Visibility.jsx":
/*!***********************************!*\
  !*** ./components/Visibility.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Visibility; });
/* harmony import */ var C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/pages/VisitPlanDetail.module.css */ "./styles/pages/VisitPlanDetail.module.css");
/* harmony import */ var _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store */ "./store/index.js");
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Nav */ "./components/Nav.jsx");
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Spinner */ "./components/Spinner.jsx");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Modal */ "./components/Modal.jsx");
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Dropdown */ "./components/Dropdown.jsx");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helper */ "./helper.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Card */ "./components/Card.jsx");




var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-new\\components\\Visibility.jsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











function Visibility(_ref) {
  _s();

  var _this = this;

  var type = _ref.type;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_store__WEBPACK_IMPORTED_MODULE_6__["Stores"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch,
      actions = _useContext.actions;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      posm = _useState2[0],
      setPosm = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      posmList = _useState3[0],
      setPosmList = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      plan = _useState4[0],
      setPlan = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      modal = _useState5[0],
      setModal = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      fileFocus = _useState6[0],
      setFileFocus = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      dummy = _useState7[0],
      setDummy = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      newNOO = _useState8[0],
      setNewNOO = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([{
    file: null,
    type: null
  }, {
    file: null,
    type: null
  }, {
    file: null,
    type: null
  }, {
    file: null,
    type: null
  }, {
    file: null,
    type: null
  }, {
    file: null,
    type: null
  }]),
      vis = _useState9[0],
      setVis = _useState9[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var initialVis = [{
    file: null,
    type: null
  }, {
    file: null,
    type: null
  }, {
    file: null,
    type: null
  }, {
    file: null,
    type: null
  }, {
    file: null,
    type: null
  }, {
    file: null,
    type: null
  }];
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var notEmpty = vis.filter(function (val) {
      return val.file !== null && val.type !== null;
    }); // console.log(notEmpty);

    if (notEmpty.length > 0) {
      window.onbeforeunload = function () {
        return "Data will be lost if you leave the page, are you sure?";
      };
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (type === "PLAN") {
      if (state.visitPlanReducer.visibility.length > 0) {
        setVis(Object(C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(state.visitPlanReducer.visibility));
      }
    } else if (type === "UNPLAN") {
      if (state.visitUnplanReducer.visibility.length > 0) {
        setVis(Object(C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(state.visitUnplanReducer.visibility));
      }
    } else if (type === "SPREADING") {
      if (state.visitSpreadingReducer.visibility.length > 0) {
        setVis(Object(C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(state.visitSpreadingReducer.visibility));
      }
    }
  }, [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (router.query["new"]) {
      setNewNOO(true);
    } else {
      if (type === "UNPLAN") {
        if (state.visitUnplanReducer.jenisChannel.namaJenisChannel && state.visitUnplanReducer.outlet.namaOutlet) {} else {
          next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/visit/unplan");
        }
      } else if (type === "SPREADING") {
        if (state.visitSpreadingReducer.jenisChannel.namaJenisChannel && state.visitSpreadingReducer.outlet.namaOutlet) {} else {
          next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/visit/spreading?new=true");
        }
      }
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (router.query.id) {
      if (type === "PLAN") {
        Object(_helper__WEBPACK_IMPORTED_MODULE_11__["getPlanId"])(router.query.id).then(function (_ref2) {
          var samePlan = _ref2.samePlan,
              data = _ref2.data;

          // console.log(samePlan, data);
          if (samePlan.length == 0) {
            next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/visit/plan");
          } else {
            setPlan(data);
            setLoading(false);

            if (!state.visitPlanReducer.checkIn) {
              actions.setPlanCheckIn(now);
            }
          }
        })["catch"](function (err) {
          console.log(err);
        });
      } else if (type === "UNPLAN") {} else if (type === "SPREADING") {} else if (type === "HISTORY_PLAN") {
        Object(_helper__WEBPACK_IMPORTED_MODULE_11__["getInvoiceDataPosm"])(router.query.id).then(function (data) {
          setPosmList(data);
          console.log(data);
          setLoading(false);
        })["catch"](function (err) {
          console.log(err);
        });
      } else if (type === "HISTORY_UNPLAN") {
        Object(_helper__WEBPACK_IMPORTED_MODULE_11__["getInvoiceDataPosmUnplan"])(router.query.id).then(function (data) {
          setPosmList(data);
          console.log(data);
          setLoading(false);
        })["catch"](function (err) {
          console.log(err);
        });
      } else if (type === "HISTORY_SPREADING") {
        Object(_helper__WEBPACK_IMPORTED_MODULE_11__["getInvoiceDataPosmSpreading"])(router.query.id).then(function (data) {
          setPosmList(data);
          setLoading(false);
        })["catch"](function (err) {
          console.log(err);
        });
      }
    }
  }, [router.query.id]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(_helper__WEBPACK_IMPORTED_MODULE_11__["getPosm"])().then(function (data) {
      setPosm(data);
      setLoading(false); // console.log(data);
    })["catch"](function (err) {
      console.log(err);
    });
  }, [dispatch]);

  var onFileFocus = function onFileFocus(val) {
    setModal(true);

    if (type === "HISTORY_PLAN") {
      Object(_helper__WEBPACK_IMPORTED_MODULE_11__["viewFile"])(val.id).then(function (data) {
        setFileFocus(data);
      })["catch"](function (err) {
        console.log(err);
      });
    } else if (type === "HISTORY_UNPLAN") {
      Object(_helper__WEBPACK_IMPORTED_MODULE_11__["viewFileUnplan"])(val.id).then(function (data) {
        setFileFocus(data);
      })["catch"](function (err) {
        console.log(err);
      });
    } else if (type === "HISTORY_SPREADING") {
      Object(_helper__WEBPACK_IMPORTED_MODULE_11__["viewFileSpreading"])(val.id).then(function (data) {
        setFileFocus(data);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  };

  var renderInputUpload = function renderInputUpload() {
    var render = vis.map(function (val, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.visibility_grid,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          children: ["POSM ", index + 1]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.visibility_dropdown,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Dropdown__WEBPACK_IMPORTED_MODULE_10__["default"], {
            options: posm,
            type: "POSM",
            onChange: function onChange(e) {
              var data = posm.filter(function (val) {
                return val.program == e.target.value;
              });
              vis.splice(index, 1, _objectSpread(_objectSpread({}, vis[index]), {}, {
                type: data[0]
              }));
              setDummy(dummy + 1);
            },
            value: val.type != null ? val.type.program : ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            style: {
              fontSize: "10px",
              color: "#41867A",
              fontWeight: "500"
            },
            children: val.file != null ? val.file.name : null
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.new_button,
            htmlFor: "upload".concat(index),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              src: "/camera.svg",
              style: {
                width: "18px",
                verticalAlign: "baseline"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.input_file,
              onChange: function onChange(e) {
                // let reader = new FileReader();
                // reader.readAsDataURL(e.target.files[0]);
                // reader.onload = () => {
                //   console.log(reader.result);
                // };
                vis.splice(index, 1, _objectSpread(_objectSpread({}, vis[index]), {}, {
                  file: e.target.files[0]
                }));
                setDummy(dummy + 1);
              },
              id: "upload".concat(index),
              type: "file",
              accept: "image/*",
              capture: "environment"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 236,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 11
        }, _this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 9
      }, _this);
    });
    return render;
  };

  var renderHistoryPosm = function renderHistoryPosm() {
    var render = posmList.map(function (val, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.visibility_grid_history,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          children: ["POSM ", index + 1]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.visibility_dropdown,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Card__WEBPACK_IMPORTED_MODULE_12__["default"], {
            style: {
              height: "32px",
              border: "1px solid #e9ecf2",
              padding: "6px 10px",
              borderRadius: "5px"
            },
            children: val.tipe
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 269,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            style: {
              fontSize: "10px",
              color: "#41867A",
              fontWeight: "500"
            },
            onClick: function onClick() {
              onFileFocus(val);
            },
            children: val.namaFile
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 279,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 11
        }, _this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 9
      }, _this);
    });

    if (loading) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Spinner__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 14
      }, _this);
    } else {
      return render;
    }
  };

  var onSave = function onSave() {
    if (newNOO) {
      actions.setSpreadingVisibility(vis);
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/visit/spreading/submit?new=true");
    } else {
      if (type === "PLAN") {
        actions.setPlanVisibility(vis);
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/visit/plan/".concat(router.query.id));
      } else if (type === "UNPLAN") {
        actions.setUnplanVisibility(vis);
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/visit/unplan/submit");
      } else if (type === "SPREADING") {
        actions.setSpreadingVisibility(vis);
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/visit/spreading/submit");
      }
    }
  }; // const displayView = () => {
  //   // let reader = new FileReader();
  //   var objectURL = URL.createObjectURL(fileFocus);
  //   // myImage.src = objectURL;
  //   return objectURL;
  // };


  var render = function render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.container,
      children: [modal ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Modal__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onClick: function onClick() {
          setFileFocus(null);
          setModal(false);
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          style: {
            maxHeight: "100%",
            overflow: "auto"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            style: {
              width: "400px",
              maxHeight: "100%",
              margin: "20px auto"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              style: {
                width: "380px",
                margin: "0 10px"
              },
              src: fileFocus
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 349,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 342,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 336,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 330,
        columnNumber: 11
      }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.wrapper,
        children: [type.includes("HISTORY") ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Nav__WEBPACK_IMPORTED_MODULE_7__["default"], {
          title: "Visibility",
          color: "white",
          backAction: function backAction() {
            next_router__WEBPACK_IMPORTED_MODULE_4___default.a.back();
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 359,
          columnNumber: 13
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Nav__WEBPACK_IMPORTED_MODULE_7__["default"], {
          title: "Visibility",
          color: "white",
          action: "Save",
          onClick: function onClick() {
            onSave();
          },
          backAction: function backAction() {
            if (type === "PLAN") {
              if (state.visitPlanReducer.visibility.length > 0) {
                setVis(Object(C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(state.visitPlanReducer.visibility));
              } else {
                setVis([].concat(initialVis));
              }
            }

            if (type === "UNPLAN") {
              if (state.visitUnplanReducer.visibility.length > 0) {
                setVis(Object(C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(state.visitUnplanReducer.visibility));
              } else {
                setVis([].concat(initialVis));
              }
            }

            if (type === "SPREADING") {
              if (state.visitSpreadingReducer.visibility.length > 0) {
                setVis(Object(C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(state.visitSpreadingReducer.visibility));
              } else {
                setVis([].concat(initialVis));
              }
            }

            next_router__WEBPACK_IMPORTED_MODULE_4___default.a.back();
          },
          disable: false
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 367,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.main,
          children: type.includes("HISTORY") ? renderHistoryPosm() : renderInputUpload()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 401,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 357,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 7
    }, _this);
  };

  return render();
}

_s(Visibility, "bmhbmPReCqaWvwDF4FOSLK5YPY8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = Visibility;

var _c;

$RefreshReg$(_c, "Visibility");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WaXNpYmlsaXR5LmpzeCJdLCJuYW1lcyI6WyJWaXNpYmlsaXR5IiwidHlwZSIsInVzZUNvbnRleHQiLCJTdG9yZXMiLCJzdGF0ZSIsImRpc3BhdGNoIiwiYWN0aW9ucyIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJwb3NtIiwic2V0UG9zbSIsInBvc21MaXN0Iiwic2V0UG9zbUxpc3QiLCJwbGFuIiwic2V0UGxhbiIsIm1vZGFsIiwic2V0TW9kYWwiLCJmaWxlRm9jdXMiLCJzZXRGaWxlRm9jdXMiLCJkdW1teSIsInNldER1bW15IiwibmV3Tk9PIiwic2V0TmV3Tk9PIiwiZmlsZSIsInZpcyIsInNldFZpcyIsInJvdXRlciIsInVzZVJvdXRlciIsImluaXRpYWxWaXMiLCJ1c2VFZmZlY3QiLCJub3RFbXB0eSIsImZpbHRlciIsInZhbCIsImxlbmd0aCIsIndpbmRvdyIsIm9uYmVmb3JldW5sb2FkIiwidmlzaXRQbGFuUmVkdWNlciIsInZpc2liaWxpdHkiLCJ2aXNpdFVucGxhblJlZHVjZXIiLCJ2aXNpdFNwcmVhZGluZ1JlZHVjZXIiLCJxdWVyeSIsImplbmlzQ2hhbm5lbCIsIm5hbWFKZW5pc0NoYW5uZWwiLCJvdXRsZXQiLCJuYW1hT3V0bGV0IiwiUm91dGVyIiwicHVzaCIsImlkIiwiZ2V0UGxhbklkIiwidGhlbiIsInNhbWVQbGFuIiwiZGF0YSIsImNoZWNrSW4iLCJzZXRQbGFuQ2hlY2tJbiIsIm5vdyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJnZXRJbnZvaWNlRGF0YVBvc20iLCJnZXRJbnZvaWNlRGF0YVBvc21VbnBsYW4iLCJnZXRJbnZvaWNlRGF0YVBvc21TcHJlYWRpbmciLCJnZXRQb3NtIiwib25GaWxlRm9jdXMiLCJ2aWV3RmlsZSIsInZpZXdGaWxlVW5wbGFuIiwidmlld0ZpbGVTcHJlYWRpbmciLCJyZW5kZXJJbnB1dFVwbG9hZCIsInJlbmRlciIsIm1hcCIsImluZGV4Iiwic3R5bGVzIiwidmlzaWJpbGl0eV9ncmlkIiwidmlzaWJpbGl0eV9kcm9wZG93biIsImUiLCJwcm9ncmFtIiwidGFyZ2V0IiwidmFsdWUiLCJzcGxpY2UiLCJmb250U2l6ZSIsImNvbG9yIiwiZm9udFdlaWdodCIsIm5hbWUiLCJuZXdfYnV0dG9uIiwid2lkdGgiLCJ2ZXJ0aWNhbEFsaWduIiwiaW5wdXRfZmlsZSIsImZpbGVzIiwicmVuZGVySGlzdG9yeVBvc20iLCJ2aXNpYmlsaXR5X2dyaWRfaGlzdG9yeSIsImhlaWdodCIsImJvcmRlciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJ0aXBlIiwibmFtYUZpbGUiLCJvblNhdmUiLCJzZXRTcHJlYWRpbmdWaXNpYmlsaXR5Iiwic2V0UGxhblZpc2liaWxpdHkiLCJzZXRVbnBsYW5WaXNpYmlsaXR5IiwiY29udGFpbmVyIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3ciLCJtYXJnaW4iLCJ3cmFwcGVyIiwiaW5jbHVkZXMiLCJiYWNrIiwibWFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVdBO0FBRWUsU0FBU0EsVUFBVCxPQUE4QjtBQUFBOztBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQSxvQkFDTkMsd0RBQVUsQ0FBQ0MsNkNBQUQsQ0FESjtBQUFBLE1BQ25DQyxLQURtQyxlQUNuQ0EsS0FEbUM7QUFBQSxNQUM1QkMsUUFENEIsZUFDNUJBLFFBRDRCO0FBQUEsTUFDbEJDLE9BRGtCLGVBQ2xCQSxPQURrQjs7QUFBQSxrQkFFYkMsc0RBQVEsQ0FBQyxJQUFELENBRks7QUFBQSxNQUVwQ0MsT0FGb0M7QUFBQSxNQUUzQkMsVUFGMkI7O0FBQUEsbUJBR25CRixzREFBUSxDQUFDLEVBQUQsQ0FIVztBQUFBLE1BR3BDRyxJQUhvQztBQUFBLE1BRzlCQyxPQUg4Qjs7QUFBQSxtQkFJWEos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QixFQUFOO0FBQ0QsZUFGRCxNQUVPO0FBQ0xaLHNCQUFNLFdBQUtHLFVBQUwsRUFBTjtBQUNEO0FBQ0Y7O0FBQ0QsZ0JBQUk1QixJQUFJLEtBQUssV0FBYixFQUEwQjtBQUN4QixrQkFBSUcsS0FBSyxDQUFDb0MscUJBQU4sQ0FBNEJGLFVBQTVCLENBQXVDSixNQUF2QyxHQUFnRCxDQUFwRCxFQUF1RDtBQUNyRFIsc0JBQU0sQ0FBQyx5SkFBSXRCLEtBQUssQ0FBQ29DLHFCQUFOLENBQTRCRixVQUFqQyxFQUFOO0FBQ0QsZUFGRCxNQUVPO0FBQ0xaLHNCQUFNLFdBQUtHLFVBQUwsRUFBTjtBQUNEO0FBQ0Y7O0FBQ0RpQiw4REFBTSxDQUFDNEQsSUFBUDtBQUNELFdBOUJIO0FBK0JFLGlCQUFPLEVBQUU7QUEvQlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWSixlQTRDRTtBQUFLLG1CQUFTLEVBQUVuQywrRUFBTSxDQUFDb0MsSUFBdkI7QUFBQSxvQkFDRzFHLElBQUksQ0FBQ3dHLFFBQUwsQ0FBYyxTQUFkLElBQ0dqQixpQkFBaUIsRUFEcEIsR0FFR3JCLGlCQUFpQjtBQUh2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTVDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFrRkQsR0FuRkQ7O0FBb0ZBLFNBQU9DLE1BQU0sRUFBYjtBQUNEOztHQWxZdUJwRSxVO1VBa0JQNEIscUQ7OztLQWxCTzVCLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmlzaXQvc3ByZWFkaW5nL3N1Ym1pdC92aXNpYmlsaXR5LmQ2ZTgxNjBjMGJiYTRlMGQ1NTc4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvcGFnZXMvVmlzaXRQbGFuRGV0YWlsLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCB7IFN0b3JlcyB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IE5hdiBmcm9tIFwiLi9OYXZcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4vU3Bpbm5lclwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4vTW9kYWxcIjtcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuL0Ryb3Bkb3duXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldFBvc20sXHJcbiAgZ2V0UGxhbklkLFxyXG4gIGdldEludm9pY2VEYXRhUG9zbSxcclxuICB2aWV3RmlsZSxcclxuICBnZXRJbnZvaWNlRGF0YVBvc21VbnBsYW4sXHJcbiAgdmlld0ZpbGVVbnBsYW4sXHJcbiAgZ2V0SW52b2ljZURhdGFQb3NtU3ByZWFkaW5nLFxyXG4gIHZpZXdGaWxlU3ByZWFkaW5nLFxyXG59IGZyb20gXCIuLi9oZWxwZXJcIjtcclxuXHJcbmltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpc2liaWxpdHkoeyB0eXBlIH0pIHtcclxuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCwgYWN0aW9ucyB9ID0gdXNlQ29udGV4dChTdG9yZXMpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtwb3NtLCBzZXRQb3NtXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcG9zbUxpc3QsIHNldFBvc21MaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcGxhbiwgc2V0UGxhbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2ZpbGVGb2N1cywgc2V0RmlsZUZvY3VzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtkdW1teSwgc2V0RHVtbXldID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW25ld05PTywgc2V0TmV3Tk9PXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdmlzLCBzZXRWaXNdID0gdXNlU3RhdGUoW1xyXG4gICAgeyBmaWxlOiBudWxsLCB0eXBlOiBudWxsIH0sXHJcbiAgICB7IGZpbGU6IG51bGwsIHR5cGU6IG51bGwgfSxcclxuICAgIHsgZmlsZTogbnVsbCwgdHlwZTogbnVsbCB9LFxyXG4gICAgeyBmaWxlOiBudWxsLCB0eXBlOiBudWxsIH0sXHJcbiAgICB7IGZpbGU6IG51bGwsIHR5cGU6IG51bGwgfSxcclxuICAgIHsgZmlsZTogbnVsbCwgdHlwZTogbnVsbCB9LFxyXG4gIF0pO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGluaXRpYWxWaXMgPSBbXHJcbiAgICB7IGZpbGU6IG51bGwsIHR5cGU6IG51bGwgfSxcclxuICAgIHsgZmlsZTogbnVsbCwgdHlwZTogbnVsbCB9LFxyXG4gICAgeyBmaWxlOiBudWxsLCB0eXBlOiBudWxsIH0sXHJcbiAgICB7IGZpbGU6IG51bGwsIHR5cGU6IG51bGwgfSxcclxuICAgIHsgZmlsZTogbnVsbCwgdHlwZTogbnVsbCB9LFxyXG4gICAgeyBmaWxlOiBudWxsLCB0eXBlOiBudWxsIH0sXHJcbiAgXTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG5vdEVtcHR5ID0gdmlzLmZpbHRlcigodmFsKSA9PiB7XHJcbiAgICAgIHJldHVybiB2YWwuZmlsZSAhPT0gbnVsbCAmJiB2YWwudHlwZSAhPT0gbnVsbDtcclxuICAgIH0pO1xyXG4gICAgLy8gY29uc29sZS5sb2cobm90RW1wdHkpO1xyXG4gICAgaWYgKG5vdEVtcHR5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBcIkRhdGEgd2lsbCBiZSBsb3N0IGlmIHlvdSBsZWF2ZSB0aGUgcGFnZSwgYXJlIHlvdSBzdXJlP1wiO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGUgPT09IFwiUExBTlwiKSB7XHJcbiAgICAgIGlmIChzdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLnZpc2liaWxpdHkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHNldFZpcyhbLi4uc3RhdGUudmlzaXRQbGFuUmVkdWNlci52aXNpYmlsaXR5XSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJVTlBMQU5cIikge1xyXG4gICAgICBpZiAoc3RhdGUudmlzaXRVbnBsYW5SZWR1Y2VyLnZpc2liaWxpdHkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHNldFZpcyhbLi4uc3RhdGUudmlzaXRVbnBsYW5SZWR1Y2VyLnZpc2liaWxpdHldKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlNQUkVBRElOR1wiKSB7XHJcbiAgICAgIGlmIChzdGF0ZS52aXNpdFNwcmVhZGluZ1JlZHVjZXIudmlzaWJpbGl0eS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgc2V0VmlzKFsuLi5zdGF0ZS52aXNpdFNwcmVhZGluZ1JlZHVjZXIudmlzaWJpbGl0eV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocm91dGVyLnF1ZXJ5Lm5ldykge1xyXG4gICAgICBzZXROZXdOT08odHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodHlwZSA9PT0gXCJVTlBMQU5cIikge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHN0YXRlLnZpc2l0VW5wbGFuUmVkdWNlci5qZW5pc0NoYW5uZWwubmFtYUplbmlzQ2hhbm5lbCAmJlxyXG4gICAgICAgICAgc3RhdGUudmlzaXRVbnBsYW5SZWR1Y2VyLm91dGxldC5uYW1hT3V0bGV0XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIFJvdXRlci5wdXNoKFwiL3Zpc2l0L3VucGxhblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJTUFJFQURJTkdcIikge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHN0YXRlLnZpc2l0U3ByZWFkaW5nUmVkdWNlci5qZW5pc0NoYW5uZWwubmFtYUplbmlzQ2hhbm5lbCAmJlxyXG4gICAgICAgICAgc3RhdGUudmlzaXRTcHJlYWRpbmdSZWR1Y2VyLm91dGxldC5uYW1hT3V0bGV0XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIFJvdXRlci5wdXNoKFwiL3Zpc2l0L3NwcmVhZGluZz9uZXc9dHJ1ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocm91dGVyLnF1ZXJ5LmlkKSB7XHJcbiAgICAgIGlmICh0eXBlID09PSBcIlBMQU5cIikge1xyXG4gICAgICAgIGdldFBsYW5JZChyb3V0ZXIucXVlcnkuaWQpXHJcbiAgICAgICAgICAudGhlbigoeyBzYW1lUGxhbiwgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNhbWVQbGFuLCBkYXRhKTtcclxuICAgICAgICAgICAgaWYgKHNhbWVQbGFuLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvdmlzaXQvcGxhblwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBzZXRQbGFuKGRhdGEpO1xyXG4gICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgIGlmICghc3RhdGUudmlzaXRQbGFuUmVkdWNlci5jaGVja0luKSB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zLnNldFBsYW5DaGVja0luKG5vdyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiVU5QTEFOXCIpIHtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlNQUkVBRElOR1wiKSB7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJISVNUT1JZX1BMQU5cIikge1xyXG4gICAgICAgIGdldEludm9pY2VEYXRhUG9zbShyb3V0ZXIucXVlcnkuaWQpXHJcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRQb3NtTGlzdChkYXRhKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcIkhJU1RPUllfVU5QTEFOXCIpIHtcclxuICAgICAgICBnZXRJbnZvaWNlRGF0YVBvc21VbnBsYW4ocm91dGVyLnF1ZXJ5LmlkKVxyXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgc2V0UG9zbUxpc3QoZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJISVNUT1JZX1NQUkVBRElOR1wiKSB7XHJcbiAgICAgICAgZ2V0SW52b2ljZURhdGFQb3NtU3ByZWFkaW5nKHJvdXRlci5xdWVyeS5pZClcclxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFBvc21MaXN0KGRhdGEpO1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbcm91dGVyLnF1ZXJ5LmlkXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRQb3NtKClcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBzZXRQb3NtKGRhdGEpO1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICBjb25zdCBvbkZpbGVGb2N1cyA9ICh2YWwpID0+IHtcclxuICAgIHNldE1vZGFsKHRydWUpO1xyXG4gICAgaWYgKHR5cGUgPT09IFwiSElTVE9SWV9QTEFOXCIpIHtcclxuICAgICAgdmlld0ZpbGUodmFsLmlkKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBzZXRGaWxlRm9jdXMoZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJISVNUT1JZX1VOUExBTlwiKSB7XHJcbiAgICAgIHZpZXdGaWxlVW5wbGFuKHZhbC5pZClcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgc2V0RmlsZUZvY3VzKGRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiSElTVE9SWV9TUFJFQURJTkdcIikge1xyXG4gICAgICB2aWV3RmlsZVNwcmVhZGluZyh2YWwuaWQpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIHNldEZpbGVGb2N1cyhkYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVySW5wdXRVcGxvYWQgPSAoKSA9PiB7XHJcbiAgICB2YXIgcmVuZGVyID0gdmlzLm1hcCgodmFsLCBpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMudmlzaWJpbGl0eV9ncmlkfT5cclxuICAgICAgICAgIDxkaXY+UE9TTSB7aW5kZXggKyAxfTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aXNpYmlsaXR5X2Ryb3Bkb3dufT5cclxuICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17cG9zbX1cclxuICAgICAgICAgICAgICB0eXBlPXtcIlBPU01cIn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcG9zbS5maWx0ZXIoKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gdmFsLnByb2dyYW0gPT0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHZpcy5zcGxpY2UoaW5kZXgsIDEsIHtcclxuICAgICAgICAgICAgICAgICAgLi4udmlzW2luZGV4XSxcclxuICAgICAgICAgICAgICAgICAgdHlwZTogZGF0YVswXSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0RHVtbXkoZHVtbXkgKyAxKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWwudHlwZSAhPSBudWxsID8gdmFsLnR5cGUucHJvZ3JhbSA6IFwiXCJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM0MTg2N0FcIixcclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt2YWwuZmlsZSAhPSBudWxsID8gdmFsLmZpbGUubmFtZSA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLm5ld19idXR0b259IGh0bWxGb3I9e2B1cGxvYWQke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17XCIvY2FtZXJhLnN2Z1wifVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMThweFwiLCB2ZXJ0aWNhbEFsaWduOiBcImJhc2VsaW5lXCIgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfZmlsZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAvLyBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgLy8gcmVhZGVyLnJlYWRBc0RhdGFVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAvLyByZWFkZXIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAvLyB9O1xyXG4gICAgICAgICAgICAgICAgICB2aXMuc3BsaWNlKGluZGV4LCAxLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4udmlzW2luZGV4XSxcclxuICAgICAgICAgICAgICAgICAgICBmaWxlOiBlLnRhcmdldC5maWxlc1swXSxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldER1bW15KGR1bW15ICsgMSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgaWQ9e2B1cGxvYWQke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgICAgIGNhcHR1cmU9XCJlbnZpcm9ubWVudFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVuZGVyO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckhpc3RvcnlQb3NtID0gKCkgPT4ge1xyXG4gICAgdmFyIHJlbmRlciA9IHBvc21MaXN0Lm1hcCgodmFsLCBpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMudmlzaWJpbGl0eV9ncmlkX2hpc3Rvcnl9PlxyXG4gICAgICAgICAgPGRpdj5QT1NNIHtpbmRleCArIDF9PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpc2liaWxpdHlfZHJvcGRvd259PlxyXG4gICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzJweFwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjZTllY2YyXCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjZweCAxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt2YWwudGlwZX1cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjNDE4NjdBXCIsXHJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb25GaWxlRm9jdXModmFsKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3ZhbC5uYW1hRmlsZX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiByZW5kZXI7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBvblNhdmUgPSAoKSA9PiB7XHJcbiAgICBpZiAobmV3Tk9PKSB7XHJcbiAgICAgIGFjdGlvbnMuc2V0U3ByZWFkaW5nVmlzaWJpbGl0eSh2aXMpO1xyXG4gICAgICBSb3V0ZXIucHVzaChgL3Zpc2l0L3NwcmVhZGluZy9zdWJtaXQ/bmV3PXRydWVgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0eXBlID09PSBcIlBMQU5cIikge1xyXG4gICAgICAgIGFjdGlvbnMuc2V0UGxhblZpc2liaWxpdHkodmlzKTtcclxuICAgICAgICBSb3V0ZXIucHVzaChgL3Zpc2l0L3BsYW4vJHtyb3V0ZXIucXVlcnkuaWR9YCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJVTlBMQU5cIikge1xyXG4gICAgICAgIGFjdGlvbnMuc2V0VW5wbGFuVmlzaWJpbGl0eSh2aXMpO1xyXG4gICAgICAgIFJvdXRlci5wdXNoKGAvdmlzaXQvdW5wbGFuL3N1Ym1pdGApO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiU1BSRUFESU5HXCIpIHtcclxuICAgICAgICBhY3Rpb25zLnNldFNwcmVhZGluZ1Zpc2liaWxpdHkodmlzKTtcclxuICAgICAgICBSb3V0ZXIucHVzaChgL3Zpc2l0L3NwcmVhZGluZy9zdWJtaXRgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIGNvbnN0IGRpc3BsYXlWaWV3ID0gKCkgPT4ge1xyXG4gIC8vICAgLy8gbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgLy8gICB2YXIgb2JqZWN0VVJMID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlRm9jdXMpO1xyXG4gIC8vICAgLy8gbXlJbWFnZS5zcmMgPSBvYmplY3RVUkw7XHJcbiAgLy8gICByZXR1cm4gb2JqZWN0VVJMO1xyXG4gIC8vIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICB7bW9kYWwgPyAoXHJcbiAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEZpbGVGb2N1cyhudWxsKTtcclxuICAgICAgICAgICAgICBzZXRNb2RhbChmYWxzZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImF1dG9cIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNDAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjIwcHggYXV0b1wiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjM4MHB4XCIsIG1hcmdpbjogXCIwIDEwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2ZpbGVGb2N1c31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAge3R5cGUuaW5jbHVkZXMoXCJISVNUT1JZXCIpID8gKFxyXG4gICAgICAgICAgICA8TmF2XHJcbiAgICAgICAgICAgICAgdGl0bGU9e1wiVmlzaWJpbGl0eVwifVxyXG4gICAgICAgICAgICAgIGNvbG9yPXtcIndoaXRlXCJ9XHJcbiAgICAgICAgICAgICAgYmFja0FjdGlvbj17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgUm91dGVyLmJhY2soKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPE5hdlxyXG4gICAgICAgICAgICAgIHRpdGxlPXtcIlZpc2liaWxpdHlcIn1cclxuICAgICAgICAgICAgICBjb2xvcj17XCJ3aGl0ZVwifVxyXG4gICAgICAgICAgICAgIGFjdGlvbj17XCJTYXZlXCJ9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb25TYXZlKCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBiYWNrQWN0aW9uPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJQTEFOXCIpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLnZpc2l0UGxhblJlZHVjZXIudmlzaWJpbGl0eS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmlzKFsuLi5zdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLnZpc2liaWxpdHldKTtcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWaXMoWy4uLmluaXRpYWxWaXNdKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwiVU5QTEFOXCIpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLnZpc2l0VW5wbGFuUmVkdWNlci52aXNpYmlsaXR5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWaXMoWy4uLnN0YXRlLnZpc2l0VW5wbGFuUmVkdWNlci52aXNpYmlsaXR5XSk7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmlzKFsuLi5pbml0aWFsVmlzXSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSBcIlNQUkVBRElOR1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS52aXNpdFNwcmVhZGluZ1JlZHVjZXIudmlzaWJpbGl0eS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmlzKFsuLi5zdGF0ZS52aXNpdFNwcmVhZGluZ1JlZHVjZXIudmlzaWJpbGl0eV0pO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFZpcyhbLi4uaW5pdGlhbFZpc10pO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIuYmFjaygpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgZGlzYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICAgICAge3R5cGUuaW5jbHVkZXMoXCJISVNUT1JZXCIpXHJcbiAgICAgICAgICAgICAgPyByZW5kZXJIaXN0b3J5UG9zbSgpXHJcbiAgICAgICAgICAgICAgOiByZW5kZXJJbnB1dFVwbG9hZCgpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG4gIHJldHVybiByZW5kZXIoKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9