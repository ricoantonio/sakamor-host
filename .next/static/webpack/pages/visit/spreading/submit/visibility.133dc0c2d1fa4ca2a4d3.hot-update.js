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
            lineNumber: 219,
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
              lineNumber: 231,
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
              lineNumber: 235,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 229,
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
          lineNumber: 266,
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
            lineNumber: 268,
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
            lineNumber: 278,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 11
        }, _this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 9
      }, _this);
    });

    if (loading) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Spinner__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 295,
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
              lineNumber: 348,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 341,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 329,
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
          lineNumber: 358,
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
          lineNumber: 366,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.main,
          children: type.includes("HISTORY") ? renderHistoryPosm() : renderInputUpload()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 400,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 327,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WaXNpYmlsaXR5LmpzeCJdLCJuYW1lcyI6WyJWaXNpYmlsaXR5IiwidHlwZSIsInVzZUNvbnRleHQiLCJTdG9yZXMiLCJzdGF0ZSIsImRpc3BhdGNoIiwiYWN0aW9ucyIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJwb3NtIiwic2V0UG9zbSIsInBvc21MaXN0Iiwic2V0UG9zbUxpc3QiLCJwbGFuIiwic2V0UGxhbiIsIm1vZGFsIiwic2V0TW9kYWwiLCJmaWxlRm9jdXMiLCJzZXRGaWxlRm9jdXMiLCJkdW1teSIsInNldER1bW15IiwibmV3Tk9PIiwic2V0TmV3Tk9PIiwiZmlsZSIsInZpcyIsInNldFZpcyIsInJvdXRlciIsInVzZVJvdXRlciIsImluaXRpYWxWaXMiLCJ1c2VFZmZlY3QiLCJub3RFbXB0eSIsImZpbHRlciIsInZhbCIsImxlbmd0aCIsIndpbmRvdyIsIm9uYmVmb3JldW5sb2FkIiwidmlzaXRQbGFuUmVkdWNlciIsInZpc2liaWxpdHkiLCJ2aXNpdFVucGxhblJlZHVjZXIiLCJ2aXNpdFNwcmVhZGluZ1JlZHVjZXIiLCJxdWVyeSIsImplbmlzQ2hhbm5lbCIsIm5hbWFKZW5pc0NoYW5uZWwiLCJvdXRsZXQiLCJuYW1hT3V0bGV0IiwiUm91dGVyIiwicHVzaCIsImlkIiwiZ2V0UGxhbklkIiwidGhlbiIsInNhbWVQbGFuIiwiZGF0YSIsImNoZWNrSW4iLCJzZXRQbGFuQ2hlY2tJbiIsIm5vdyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJnZXRJbnZvaWNlRGF0YVBvc20iLCJnZXRJbnZvaWNlRGF0YVBvc21VbnBsYW4iLCJnZXRJbnZvaWNlRGF0YVBvc21TcHJlYWRpbmciLCJnZXRQb3NtIiwib25GaWxlRm9jdXMiLCJ2aWV3RmlsZSIsInZpZXdGaWxlVW5wbGFuIiwidmlld0ZpbGVTcHJlYWRpbmciLCJyZW5kZXJJbnB1dFVwbG9hZCIsInJlbmRlciIsIm1hcCIsImluZGV4Iiwic3R5bGVzIiwidmlzaWJpbGl0eV9ncmlkIiwidmlzaWJpbGl0eV9kcm9wZG93biIsImUiLCJwcm9ncmFtIiwidGFyZ2V0IiwidmFsdWUiLCJzcGxpY2UiLCJmb250U2l6ZSIsImNvbG9yIiwiZm9udFdlaWdodCIsIm5hbWUiLCJuZXdfYnV0dG9uIiwid2lkdGgiLCJ2ZXJ0aWNhbEFsaWduIiwiaW5wdXRfZmlsZSIsImZpbGVzIiwicmVuZGVySGlzdG9yeVBvc20iLCJ2aXNpYmlsaXR5X2dyaWRfaGlzdG9yeSIsImhlaWdodCIsImJvcmRlciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJ0aXBlIiwibmFtYUZpbGUiLCJvblNhdmUiLCJzZXRTcHJlYWRpbmdWaXNpYmlsaXR5Iiwic2V0UGxhblZpc2liaWxpdHkiLCJzZXRVbnBsYW5WaXNpYmlsaXR5IiwiY29udGFpbmVyIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3ciLCJtYXJnaW4iLCJ3cmFwcGVyIiwiaW5jbHVkZXMiLCJiYWNrIiwibWFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVdBO0FBRWUsU0FBU0EsVUFBVCxPQUE4QjtBQUFBOztBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQSxvQkFDTkMsd0RBQVUsQ0FBQ0MsNkNBQUQsQ0FESjtBQUFBLE1BQ25DQyxLQURtQyxlQUNuQ0EsS0FEbUM7QUFBQSxNQUM1QkMsUUFENEIsZUFDNUJBLFFBRDRCO0FBQUEsTUFDbEJDLE9BRGtCLGVBQ2xCQSxPQURrQjs7QUFBQSxrQkFFYkMsc0RBQVEsQ0FBQyxJQUFELENBRks7QUFBQSxNQUVwQ0MsT0FGb0M7QUFBQSxNQUUzQkMsVUFGMkI7O0FBQUEsbUJBR25CRixzREFBUSxDQUFDLEVBQUQsQ0FIVztBQUFBLE1BR3BDRyxJQUhvQztBQUFBLE1BRzlCQyxPQUg4Qjs7QUFBQSxtQkFJWEos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QUNMWixzQkFBTSxXQUFLRyxVQUFMLEVBQU47QUFDRDtBQUNGOztBQUNELGdCQUFJNUIsSUFBSSxLQUFLLFdBQWIsRUFBMEI7QUFDeEIsa0JBQUlHLEtBQUssQ0FBQ29DLHFCQUFOLENBQTRCRixVQUE1QixDQUF1Q0osTUFBdkMsR0FBZ0QsQ0FBcEQsRUFBdUQ7QUFDckRSLHNCQUFNLENBQUMseUpBQUl0QixLQUFLLENBQUNvQyxxQkFBTixDQUE0QkYsVUFBakMsRUFBTjtBQUNELGVBRkQsTUFFTztBQUNMWixzQkFBTSxXQUFLRyxVQUFMLEVBQU47QUFDRDtBQUNGOztBQUNEaUIsOERBQU0sQ0FBQzRELElBQVA7QUFDRCxXQTlCSDtBQStCRSxpQkFBTyxFQUFFO0FBL0JYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkosZUE0Q0U7QUFBSyxtQkFBUyxFQUFFbkMsK0VBQU0sQ0FBQ29DLElBQXZCO0FBQUEsb0JBQ0cxRyxJQUFJLENBQUN3RyxRQUFMLENBQWMsU0FBZCxJQUNHakIsaUJBQWlCLEVBRHBCLEdBRUdyQixpQkFBaUI7QUFIdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE1Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBa0ZELEdBbkZEOztBQW9GQSxTQUFPQyxNQUFNLEVBQWI7QUFDRDs7R0FqWXVCcEUsVTtVQWtCUDRCLHFEOzs7S0FsQk81QixVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Zpc2l0L3NwcmVhZGluZy9zdWJtaXQvdmlzaWJpbGl0eS4xMzNkYzBjMmQxZmE0Y2EyYTRkMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3BhZ2VzL1Zpc2l0UGxhbkRldGFpbC5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgeyBTdG9yZXMgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuXHJcbmltcG9ydCBOYXYgZnJvbSBcIi4vTmF2XCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuL1NwaW5uZXJcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuL01vZGFsXCI7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tIFwiLi9Ecm9wZG93blwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBnZXRQb3NtLFxyXG4gIGdldFBsYW5JZCxcclxuICBnZXRJbnZvaWNlRGF0YVBvc20sXHJcbiAgdmlld0ZpbGUsXHJcbiAgZ2V0SW52b2ljZURhdGFQb3NtVW5wbGFuLFxyXG4gIHZpZXdGaWxlVW5wbGFuLFxyXG4gIGdldEludm9pY2VEYXRhUG9zbVNwcmVhZGluZyxcclxuICB2aWV3RmlsZVNwcmVhZGluZyxcclxufSBmcm9tIFwiLi4vaGVscGVyXCI7XHJcblxyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi9DYXJkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaXNpYmlsaXR5KHsgdHlwZSB9KSB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2gsIGFjdGlvbnMgfSA9IHVzZUNvbnRleHQoU3RvcmVzKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbcG9zbSwgc2V0UG9zbV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Bvc21MaXN0LCBzZXRQb3NtTGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3BsYW4sIHNldFBsYW5dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtmaWxlRm9jdXMsIHNldEZpbGVGb2N1c10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZHVtbXksIHNldER1bW15XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtuZXdOT08sIHNldE5ld05PT10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Zpcywgc2V0VmlzXSA9IHVzZVN0YXRlKFtcclxuICAgIHsgZmlsZTogbnVsbCwgdHlwZTogbnVsbCB9LFxyXG4gICAgeyBmaWxlOiBudWxsLCB0eXBlOiBudWxsIH0sXHJcbiAgICB7IGZpbGU6IG51bGwsIHR5cGU6IG51bGwgfSxcclxuICAgIHsgZmlsZTogbnVsbCwgdHlwZTogbnVsbCB9LFxyXG4gICAgeyBmaWxlOiBudWxsLCB0eXBlOiBudWxsIH0sXHJcbiAgICB7IGZpbGU6IG51bGwsIHR5cGU6IG51bGwgfSxcclxuICBdKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBpbml0aWFsVmlzID0gW1xyXG4gICAgeyBmaWxlOiBudWxsLCB0eXBlOiBudWxsIH0sXHJcbiAgICB7IGZpbGU6IG51bGwsIHR5cGU6IG51bGwgfSxcclxuICAgIHsgZmlsZTogbnVsbCwgdHlwZTogbnVsbCB9LFxyXG4gICAgeyBmaWxlOiBudWxsLCB0eXBlOiBudWxsIH0sXHJcbiAgICB7IGZpbGU6IG51bGwsIHR5cGU6IG51bGwgfSxcclxuICAgIHsgZmlsZTogbnVsbCwgdHlwZTogbnVsbCB9LFxyXG4gIF07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBub3RFbXB0eSA9IHZpcy5maWx0ZXIoKHZhbCkgPT4ge1xyXG4gICAgICByZXR1cm4gdmFsLmZpbGUgIT09IG51bGwgJiYgdmFsLnR5cGUgIT09IG51bGw7XHJcbiAgICB9KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKG5vdEVtcHR5KTtcclxuICAgIGlmIChub3RFbXB0eS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCJEYXRhIHdpbGwgYmUgbG9zdCBpZiB5b3UgbGVhdmUgdGhlIHBhZ2UsIGFyZSB5b3Ugc3VyZT9cIjtcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0eXBlID09PSBcIlBMQU5cIikge1xyXG4gICAgICBpZiAoc3RhdGUudmlzaXRQbGFuUmVkdWNlci52aXNpYmlsaXR5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBzZXRWaXMoWy4uLnN0YXRlLnZpc2l0UGxhblJlZHVjZXIudmlzaWJpbGl0eV0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiVU5QTEFOXCIpIHtcclxuICAgICAgaWYgKHN0YXRlLnZpc2l0VW5wbGFuUmVkdWNlci52aXNpYmlsaXR5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBzZXRWaXMoWy4uLnN0YXRlLnZpc2l0VW5wbGFuUmVkdWNlci52aXNpYmlsaXR5XSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJTUFJFQURJTkdcIikge1xyXG4gICAgICBpZiAoc3RhdGUudmlzaXRTcHJlYWRpbmdSZWR1Y2VyLnZpc2liaWxpdHkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHNldFZpcyhbLi4uc3RhdGUudmlzaXRTcHJlYWRpbmdSZWR1Y2VyLnZpc2liaWxpdHldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJvdXRlci5xdWVyeS5uZXcpIHtcclxuICAgICAgc2V0TmV3Tk9PKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHR5cGUgPT09IFwiVU5QTEFOXCIpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBzdGF0ZS52aXNpdFVucGxhblJlZHVjZXIuamVuaXNDaGFubmVsLm5hbWFKZW5pc0NoYW5uZWwgJiZcclxuICAgICAgICAgIHN0YXRlLnZpc2l0VW5wbGFuUmVkdWNlci5vdXRsZXQubmFtYU91dGxldFxyXG4gICAgICAgICkge1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaChcIi92aXNpdC91bnBsYW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiU1BSRUFESU5HXCIpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBzdGF0ZS52aXNpdFNwcmVhZGluZ1JlZHVjZXIuamVuaXNDaGFubmVsLm5hbWFKZW5pc0NoYW5uZWwgJiZcclxuICAgICAgICAgIHN0YXRlLnZpc2l0U3ByZWFkaW5nUmVkdWNlci5vdXRsZXQubmFtYU91dGxldFxyXG4gICAgICAgICkge1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaChcIi92aXNpdC9zcHJlYWRpbmc/bmV3PXRydWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJvdXRlci5xdWVyeS5pZCkge1xyXG4gICAgICBpZiAodHlwZSA9PT0gXCJQTEFOXCIpIHtcclxuICAgICAgICBnZXRQbGFuSWQocm91dGVyLnF1ZXJ5LmlkKVxyXG4gICAgICAgICAgLnRoZW4oKHsgc2FtZVBsYW4sIGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzYW1lUGxhbiwgZGF0YSk7XHJcbiAgICAgICAgICAgIGlmIChzYW1lUGxhbi5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL3Zpc2l0L3BsYW5cIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgc2V0UGxhbihkYXRhKTtcclxuICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICBpZiAoIXN0YXRlLnZpc2l0UGxhblJlZHVjZXIuY2hlY2tJbikge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9ucy5zZXRQbGFuQ2hlY2tJbihub3cpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlVOUExBTlwiKSB7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJTUFJFQURJTkdcIikge1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiSElTVE9SWV9QTEFOXCIpIHtcclxuICAgICAgICBnZXRJbnZvaWNlRGF0YVBvc20ocm91dGVyLnF1ZXJ5LmlkKVxyXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgc2V0UG9zbUxpc3QoZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJISVNUT1JZX1VOUExBTlwiKSB7XHJcbiAgICAgICAgZ2V0SW52b2ljZURhdGFQb3NtVW5wbGFuKHJvdXRlci5xdWVyeS5pZClcclxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFBvc21MaXN0KGRhdGEpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiSElTVE9SWV9TUFJFQURJTkdcIikge1xyXG4gICAgICAgIGdldEludm9pY2VEYXRhUG9zbVNwcmVhZGluZyhyb3V0ZXIucXVlcnkuaWQpXHJcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRQb3NtTGlzdChkYXRhKTtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlci5xdWVyeS5pZF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0UG9zbSgpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0UG9zbShkYXRhKTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgY29uc3Qgb25GaWxlRm9jdXMgPSAodmFsKSA9PiB7XHJcbiAgICBzZXRNb2RhbCh0cnVlKTtcclxuICAgIGlmICh0eXBlID09PSBcIkhJU1RPUllfUExBTlwiKSB7XHJcbiAgICAgIHZpZXdGaWxlKHZhbC5pZClcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgc2V0RmlsZUZvY3VzKGRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiSElTVE9SWV9VTlBMQU5cIikge1xyXG4gICAgICB2aWV3RmlsZVVucGxhbih2YWwuaWQpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIHNldEZpbGVGb2N1cyhkYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcIkhJU1RPUllfU1BSRUFESU5HXCIpIHtcclxuICAgICAgdmlld0ZpbGVTcHJlYWRpbmcodmFsLmlkKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBzZXRGaWxlRm9jdXMoZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlcklucHV0VXBsb2FkID0gKCkgPT4ge1xyXG4gICAgdmFyIHJlbmRlciA9IHZpcy5tYXAoKHZhbCwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLnZpc2liaWxpdHlfZ3JpZH0+XHJcbiAgICAgICAgICA8ZGl2PlBPU00ge2luZGV4ICsgMX08L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlzaWJpbGl0eV9kcm9wZG93bn0+XHJcbiAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3Bvc219XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHBvc20uZmlsdGVyKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5wcm9ncmFtID09IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB2aXMuc3BsaWNlKGluZGV4LCAxLCB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnZpc1tpbmRleF0sXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IGRhdGFbMF0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNldER1bW15KGR1bW15ICsgMSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICB2YWx1ZT17dmFsLnR5cGUgIT0gbnVsbCA/IHZhbC50eXBlLnByb2dyYW0gOiBcIlwifVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjNDE4NjdBXCIsXHJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dmFsLmZpbGUgIT0gbnVsbCA/IHZhbC5maWxlLm5hbWUgOiBudWxsfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5uZXdfYnV0dG9ufSBodG1sRm9yPXtgdXBsb2FkJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e1wiL2NhbWVyYS5zdmdcIn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjE4cHhcIiwgdmVydGljYWxBbGlnbjogXCJiYXNlbGluZVwiIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0X2ZpbGV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgLy8gbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgIC8vIHJlYWRlci5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuICAgICAgICAgICAgICAgICAgLy8gcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhyZWFkZXIucmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgLy8gfTtcclxuICAgICAgICAgICAgICAgICAgdmlzLnNwbGljZShpbmRleCwgMSwge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnZpc1tpbmRleF0sXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZTogZS50YXJnZXQuZmlsZXNbMF0sXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICBzZXREdW1teShkdW1teSArIDEpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGlkPXtgdXBsb2FkJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgICAgICBjYXB0dXJlPVwiZW52aXJvbm1lbnRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlbmRlcjtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJIaXN0b3J5UG9zbSA9ICgpID0+IHtcclxuICAgIHZhciByZW5kZXIgPSBwb3NtTGlzdC5tYXAoKHZhbCwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLnZpc2liaWxpdHlfZ3JpZF9oaXN0b3J5fT5cclxuICAgICAgICAgIDxkaXY+UE9TTSB7aW5kZXggKyAxfTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aXNpYmlsaXR5X2Ryb3Bkb3dufT5cclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjMycHhcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgI2U5ZWNmMlwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCI2cHggMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dmFsLnRpcGV9XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiIzQxODY3QVwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIG9uRmlsZUZvY3VzKHZhbCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt2YWwubmFtYUZpbGV9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgICBpZiAobG9hZGluZykge1xyXG4gICAgICByZXR1cm4gPFNwaW5uZXIgLz47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gcmVuZGVyO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3Qgb25TYXZlID0gKCkgPT4ge1xyXG4gICAgaWYgKG5ld05PTykge1xyXG4gICAgICBhY3Rpb25zLnNldFNwcmVhZGluZ1Zpc2liaWxpdHkodmlzKTtcclxuICAgICAgUm91dGVyLnB1c2goYC92aXNpdC9zcHJlYWRpbmcvc3VibWl0P25ldz10cnVlYCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodHlwZSA9PT0gXCJQTEFOXCIpIHtcclxuICAgICAgICBhY3Rpb25zLnNldFBsYW5WaXNpYmlsaXR5KHZpcyk7XHJcbiAgICAgICAgUm91dGVyLnB1c2goYC92aXNpdC9wbGFuLyR7cm91dGVyLnF1ZXJ5LmlkfWApO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiVU5QTEFOXCIpIHtcclxuICAgICAgICBhY3Rpb25zLnNldFVucGxhblZpc2liaWxpdHkodmlzKTtcclxuICAgICAgICBSb3V0ZXIucHVzaChgL3Zpc2l0L3VucGxhbi9zdWJtaXRgKTtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlNQUkVBRElOR1wiKSB7XHJcbiAgICAgICAgYWN0aW9ucy5zZXRTcHJlYWRpbmdWaXNpYmlsaXR5KHZpcyk7XHJcbiAgICAgICAgUm91dGVyLnB1c2goYC92aXNpdC9zcHJlYWRpbmcvc3VibWl0YCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBjb25zdCBkaXNwbGF5VmlldyA9ICgpID0+IHtcclxuICAvLyAgIC8vIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gIC8vICAgdmFyIG9iamVjdFVSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZUZvY3VzKTtcclxuICAvLyAgIC8vIG15SW1hZ2Uuc3JjID0gb2JqZWN0VVJMO1xyXG4gIC8vICAgcmV0dXJuIG9iamVjdFVSTDtcclxuICAvLyB9O1xyXG5cclxuICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAge21vZGFsID8gKFxyXG4gICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRGaWxlRm9jdXMobnVsbCk7XHJcbiAgICAgICAgICAgICAgc2V0TW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIG1heEhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjQwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIyMHB4IGF1dG9cIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIzODBweFwiLCBtYXJnaW46IFwiMCAxMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgc3JjPXtmaWxlRm9jdXN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgIHt0eXBlLmluY2x1ZGVzKFwiSElTVE9SWVwiKSA/IChcclxuICAgICAgICAgICAgPE5hdlxyXG4gICAgICAgICAgICAgIHRpdGxlPXtcIlZpc2liaWxpdHlcIn1cclxuICAgICAgICAgICAgICBjb2xvcj17XCJ3aGl0ZVwifVxyXG4gICAgICAgICAgICAgIGJhY2tBY3Rpb249eygpID0+IHtcclxuICAgICAgICAgICAgICAgIFJvdXRlci5iYWNrKCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxOYXZcclxuICAgICAgICAgICAgICB0aXRsZT17XCJWaXNpYmlsaXR5XCJ9XHJcbiAgICAgICAgICAgICAgY29sb3I9e1wid2hpdGVcIn1cclxuICAgICAgICAgICAgICBhY3Rpb249e1wiU2F2ZVwifVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIG9uU2F2ZSgpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgYmFja0FjdGlvbj17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwiUExBTlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLnZpc2liaWxpdHkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFZpcyhbLi4uc3RhdGUudmlzaXRQbGFuUmVkdWNlci52aXNpYmlsaXR5XSk7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmlzKFsuLi5pbml0aWFsVmlzXSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSBcIlVOUExBTlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS52aXNpdFVucGxhblJlZHVjZXIudmlzaWJpbGl0eS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmlzKFsuLi5zdGF0ZS52aXNpdFVucGxhblJlZHVjZXIudmlzaWJpbGl0eV0pO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFZpcyhbLi4uaW5pdGlhbFZpc10pO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJTUFJFQURJTkdcIikge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoc3RhdGUudmlzaXRTcHJlYWRpbmdSZWR1Y2VyLnZpc2liaWxpdHkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFZpcyhbLi4uc3RhdGUudmlzaXRTcHJlYWRpbmdSZWR1Y2VyLnZpc2liaWxpdHldKTtcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWaXMoWy4uLmluaXRpYWxWaXNdKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgUm91dGVyLmJhY2soKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGRpc2FibGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgICAgIHt0eXBlLmluY2x1ZGVzKFwiSElTVE9SWVwiKVxyXG4gICAgICAgICAgICAgID8gcmVuZGVySGlzdG9yeVBvc20oKVxyXG4gICAgICAgICAgICAgIDogcmVuZGVySW5wdXRVcGxvYWQoKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuICByZXR1cm4gcmVuZGVyKCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==