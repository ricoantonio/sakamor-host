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
    console.log(val[0].type != null ? val[0].type.program : "");
    var render = vis.map(function (val, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.visibility_grid,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          children: ["POSM ", index + 1]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 204,
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
            lineNumber: 206,
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
            lineNumber: 221,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 205,
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
              lineNumber: 233,
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
              lineNumber: 237,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 11
        }, _this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 203,
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
          lineNumber: 268,
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
            lineNumber: 270,
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
            lineNumber: 280,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 11
        }, _this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 9
      }, _this);
    });

    if (loading) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Spinner__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 297,
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
              lineNumber: 350,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 343,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 337,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 331,
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
          lineNumber: 360,
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
          lineNumber: 368,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.main,
          children: type.includes("HISTORY") ? renderHistoryPosm() : renderInputUpload()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 402,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 358,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 329,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WaXNpYmlsaXR5LmpzeCJdLCJuYW1lcyI6WyJWaXNpYmlsaXR5IiwidHlwZSIsInVzZUNvbnRleHQiLCJTdG9yZXMiLCJzdGF0ZSIsImRpc3BhdGNoIiwiYWN0aW9ucyIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJwb3NtIiwic2V0UG9zbSIsInBvc21MaXN0Iiwic2V0UG9zbUxpc3QiLCJwbGFuIiwic2V0UGxhbiIsIm1vZGFsIiwic2V0TW9kYWwiLCJmaWxlRm9jdXMiLCJzZXRGaWxlRm9jdXMiLCJkdW1teSIsInNldER1bW15IiwibmV3Tk9PIiwic2V0TmV3Tk9PIiwiZmlsZSIsInZpcyIsInNldFZpcyIsInJvdXRlciIsInVzZVJvdXRlciIsImluaXRpYWxWaXMiLCJ1c2VFZmZlY3QiLCJub3RFbXB0eSIsImZpbHRlciIsInZhbCIsImxlbmd0aCIsIndpbmRvdyIsIm9uYmVmb3JldW5sb2FkIiwidmlzaXRQbGFuUmVkdWNlciIsInZpc2liaWxpdHkiLCJ2aXNpdFVucGxhblJlZHVjZXIiLCJ2aXNpdFNwcmVhZGluZ1JlZHVjZXIiLCJxdWVyeSIsImplbmlzQ2hhbm5lbCIsIm5hbWFKZW5pc0NoYW5uZWwiLCJvdXRsZXQiLCJuYW1hT3V0bGV0IiwiUm91dGVyIiwicHVzaCIsImlkIiwiZ2V0UGxhbklkIiwidGhlbiIsInNhbWVQbGFuIiwiZGF0YSIsImNoZWNrSW4iLCJzZXRQbGFuQ2hlY2tJbiIsIm5vdyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJnZXRJbnZvaWNlRGF0YVBvc20iLCJnZXRJbnZvaWNlRGF0YVBvc21VbnBsYW4iLCJnZXRJbnZvaWNlRGF0YVBvc21TcHJlYWRpbmciLCJnZXRQb3NtIiwib25GaWxlRm9jdXMiLCJ2aWV3RmlsZSIsInZpZXdGaWxlVW5wbGFuIiwidmlld0ZpbGVTcHJlYWRpbmciLCJyZW5kZXJJbnB1dFVwbG9hZCIsInByb2dyYW0iLCJyZW5kZXIiLCJtYXAiLCJpbmRleCIsInN0eWxlcyIsInZpc2liaWxpdHlfZ3JpZCIsInZpc2liaWxpdHlfZHJvcGRvd24iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzcGxpY2UiLCJmb250U2l6ZSIsImNvbG9yIiwiZm9udFdlaWdodCIsIm5hbWUiLCJuZXdfYnV0dG9uIiwid2lkdGgiLCJ2ZXJ0aWNhbEFsaWduIiwiaW5wdXRfZmlsZSIsImZpbGVzIiwicmVuZGVySGlzdG9yeVBvc20iLCJ2aXNpYmlsaXR5X2dyaWRfaGlzdG9yeSIsImhlaWdodCIsImJvcmRlciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJ0aXBlIiwibmFtYUZpbGUiLCJvblNhdmUiLCJzZXRTcHJlYWRpbmdWaXNpYmlsaXR5Iiwic2V0UGxhblZpc2liaWxpdHkiLCJzZXRVbnBsYW5WaXNpYmlsaXR5IiwiY29udGFpbmVyIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3ciLCJtYXJnaW4iLCJ3cmFwcGVyIiwiaW5jbHVkZXMiLCJiYWNrIiwibWFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVdBO0FBRWUsU0FBU0EsVUFBVCxPQUE4QjtBQUFBOztBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQSxvQkFDTkMsd0RBQVUsQ0FBQ0MsNkNBQUQsQ0FESjtBQUFBLE1BQ25DQyxLQURtQyxlQUNuQ0EsS0FEbUM7QUFBQSxNQUM1QkMsUUFENEIsZUFDNUJBLFFBRDRCO0FBQUEsTUFDbEJDLE9BRGtCLGVBQ2xCQSxPQURrQjs7QUFBQSxrQkFFYkMsc0RBQVEsQ0FBQyxJQUFELENBRks7QUFBQSxNQUVwQ0MsT0FGb0M7QUFBQSxNQUUzQkMsVUFGMkI7O0FBQUEsbUJBR25CRixzREFBUSxDQUFDLEVBQUQsQ0FIVztBQUFBLE1BR3BDRyxJQUhvQztBQUFBLE1BRzlCQyxPQUg4Qjs7QUFBQSxtQkFJWEos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RUFBdUI7QUFDckIsa0JBQUlHLEtBQUssQ0FBQ21DLGtCQUFOLENBQXlCRCxVQUF6QixDQUFvQ0osTUFBcEMsR0FBNkMsQ0FBakQsRUFBb0Q7QUFDbERSLHNCQUFNLENBQUMseUpBQUl0QixLQUFLLENBQUNtQyxrQkFBTixDQUF5QkQsVUFBOUIsRUFBTjtBQUNELGVBRkQsTUFFTztBQUNMWixzQkFBTSxXQUFLRyxVQUFMLEVBQU47QUFDRDtBQUNGOztBQUNELGdCQUFJNUIsSUFBSSxLQUFLLFdBQWIsRUFBMEI7QUFDeEIsa0JBQUlHLEtBQUssQ0FBQ29DLHFCQUFOLENBQTRCRixVQUE1QixDQUF1Q0osTUFBdkMsR0FBZ0QsQ0FBcEQsRUFBdUQ7QUFDckRSLHNCQUFNLENBQUMseUpBQUl0QixLQUFLLENBQUNvQyxxQkFBTixDQUE0QkYsVUFBakMsRUFBTjtBQUNELGVBRkQsTUFFTztBQUNMWixzQkFBTSxXQUFLRyxVQUFMLEVBQU47QUFDRDtBQUNGOztBQUNEaUIsOERBQU0sQ0FBQzRELElBQVA7QUFDRCxXQTlCSDtBQStCRSxpQkFBTyxFQUFFO0FBL0JYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkosZUE0Q0U7QUFBSyxtQkFBUyxFQUFFbEMsK0VBQU0sQ0FBQ21DLElBQXZCO0FBQUEsb0JBQ0cxRyxJQUFJLENBQUN3RyxRQUFMLENBQWMsU0FBZCxJQUNHakIsaUJBQWlCLEVBRHBCLEdBRUdyQixpQkFBaUI7QUFIdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE1Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBa0ZELEdBbkZEOztBQW9GQSxTQUFPRSxNQUFNLEVBQWI7QUFDRDs7R0FuWXVCckUsVTtVQWtCUDRCLHFEOzs7S0FsQk81QixVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Zpc2l0L3NwcmVhZGluZy9zdWJtaXQvdmlzaWJpbGl0eS4zMzVlMDMyYzZhOTRkOTA5M2QyOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3BhZ2VzL1Zpc2l0UGxhbkRldGFpbC5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgeyBTdG9yZXMgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuXHJcbmltcG9ydCBOYXYgZnJvbSBcIi4vTmF2XCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuL1NwaW5uZXJcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuL01vZGFsXCI7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tIFwiLi9Ecm9wZG93blwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBnZXRQb3NtLFxyXG4gIGdldFBsYW5JZCxcclxuICBnZXRJbnZvaWNlRGF0YVBvc20sXHJcbiAgdmlld0ZpbGUsXHJcbiAgZ2V0SW52b2ljZURhdGFQb3NtVW5wbGFuLFxyXG4gIHZpZXdGaWxlVW5wbGFuLFxyXG4gIGdldEludm9pY2VEYXRhUG9zbVNwcmVhZGluZyxcclxuICB2aWV3RmlsZVNwcmVhZGluZyxcclxufSBmcm9tIFwiLi4vaGVscGVyXCI7XHJcblxyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi9DYXJkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaXNpYmlsaXR5KHsgdHlwZSB9KSB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2gsIGFjdGlvbnMgfSA9IHVzZUNvbnRleHQoU3RvcmVzKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbcG9zbSwgc2V0UG9zbV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Bvc21MaXN0LCBzZXRQb3NtTGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3BsYW4sIHNldFBsYW5dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtmaWxlRm9jdXMsIHNldEZpbGVGb2N1c10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZHVtbXksIHNldER1bW15XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtuZXdOT08sIHNldE5ld05PT10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Zpcywgc2V0VmlzXSA9IHVzZVN0YXRlKFtcclxuICAgIHsgZmlsZTogbnVsbCwgdHlwZTogbnVsbCB9LFxyXG4gICAgeyBmaWxlOiBudWxsLCB0eXBlOiBudWxsIH0sXHJcbiAgICB7IGZpbGU6IG51bGwsIHR5cGU6IG51bGwgfSxcclxuICAgIHsgZmlsZTogbnVsbCwgdHlwZTogbnVsbCB9LFxyXG4gICAgeyBmaWxlOiBudWxsLCB0eXBlOiBudWxsIH0sXHJcbiAgICB7IGZpbGU6IG51bGwsIHR5cGU6IG51bGwgfSxcclxuICBdKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBpbml0aWFsVmlzID0gW1xyXG4gICAgeyBmaWxlOiBudWxsLCB0eXBlOiBudWxsIH0sXHJcbiAgICB7IGZpbGU6IG51bGwsIHR5cGU6IG51bGwgfSxcclxuICAgIHsgZmlsZTogbnVsbCwgdHlwZTogbnVsbCB9LFxyXG4gICAgeyBmaWxlOiBudWxsLCB0eXBlOiBudWxsIH0sXHJcbiAgICB7IGZpbGU6IG51bGwsIHR5cGU6IG51bGwgfSxcclxuICAgIHsgZmlsZTogbnVsbCwgdHlwZTogbnVsbCB9LFxyXG4gIF07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBub3RFbXB0eSA9IHZpcy5maWx0ZXIoKHZhbCkgPT4ge1xyXG4gICAgICByZXR1cm4gdmFsLmZpbGUgIT09IG51bGwgJiYgdmFsLnR5cGUgIT09IG51bGw7XHJcbiAgICB9KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKG5vdEVtcHR5KTtcclxuICAgIGlmIChub3RFbXB0eS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCJEYXRhIHdpbGwgYmUgbG9zdCBpZiB5b3UgbGVhdmUgdGhlIHBhZ2UsIGFyZSB5b3Ugc3VyZT9cIjtcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0eXBlID09PSBcIlBMQU5cIikge1xyXG4gICAgICBpZiAoc3RhdGUudmlzaXRQbGFuUmVkdWNlci52aXNpYmlsaXR5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBzZXRWaXMoWy4uLnN0YXRlLnZpc2l0UGxhblJlZHVjZXIudmlzaWJpbGl0eV0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiVU5QTEFOXCIpIHtcclxuICAgICAgaWYgKHN0YXRlLnZpc2l0VW5wbGFuUmVkdWNlci52aXNpYmlsaXR5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBzZXRWaXMoWy4uLnN0YXRlLnZpc2l0VW5wbGFuUmVkdWNlci52aXNpYmlsaXR5XSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJTUFJFQURJTkdcIikge1xyXG4gICAgICBpZiAoc3RhdGUudmlzaXRTcHJlYWRpbmdSZWR1Y2VyLnZpc2liaWxpdHkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHNldFZpcyhbLi4uc3RhdGUudmlzaXRTcHJlYWRpbmdSZWR1Y2VyLnZpc2liaWxpdHldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJvdXRlci5xdWVyeS5uZXcpIHtcclxuICAgICAgc2V0TmV3Tk9PKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHR5cGUgPT09IFwiVU5QTEFOXCIpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBzdGF0ZS52aXNpdFVucGxhblJlZHVjZXIuamVuaXNDaGFubmVsLm5hbWFKZW5pc0NoYW5uZWwgJiZcclxuICAgICAgICAgIHN0YXRlLnZpc2l0VW5wbGFuUmVkdWNlci5vdXRsZXQubmFtYU91dGxldFxyXG4gICAgICAgICkge1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaChcIi92aXNpdC91bnBsYW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiU1BSRUFESU5HXCIpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBzdGF0ZS52aXNpdFNwcmVhZGluZ1JlZHVjZXIuamVuaXNDaGFubmVsLm5hbWFKZW5pc0NoYW5uZWwgJiZcclxuICAgICAgICAgIHN0YXRlLnZpc2l0U3ByZWFkaW5nUmVkdWNlci5vdXRsZXQubmFtYU91dGxldFxyXG4gICAgICAgICkge1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaChcIi92aXNpdC9zcHJlYWRpbmc/bmV3PXRydWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJvdXRlci5xdWVyeS5pZCkge1xyXG4gICAgICBpZiAodHlwZSA9PT0gXCJQTEFOXCIpIHtcclxuICAgICAgICBnZXRQbGFuSWQocm91dGVyLnF1ZXJ5LmlkKVxyXG4gICAgICAgICAgLnRoZW4oKHsgc2FtZVBsYW4sIGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzYW1lUGxhbiwgZGF0YSk7XHJcbiAgICAgICAgICAgIGlmIChzYW1lUGxhbi5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL3Zpc2l0L3BsYW5cIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgc2V0UGxhbihkYXRhKTtcclxuICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICBpZiAoIXN0YXRlLnZpc2l0UGxhblJlZHVjZXIuY2hlY2tJbikge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9ucy5zZXRQbGFuQ2hlY2tJbihub3cpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlVOUExBTlwiKSB7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJTUFJFQURJTkdcIikge1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiSElTVE9SWV9QTEFOXCIpIHtcclxuICAgICAgICBnZXRJbnZvaWNlRGF0YVBvc20ocm91dGVyLnF1ZXJ5LmlkKVxyXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgc2V0UG9zbUxpc3QoZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJISVNUT1JZX1VOUExBTlwiKSB7XHJcbiAgICAgICAgZ2V0SW52b2ljZURhdGFQb3NtVW5wbGFuKHJvdXRlci5xdWVyeS5pZClcclxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFBvc21MaXN0KGRhdGEpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiSElTVE9SWV9TUFJFQURJTkdcIikge1xyXG4gICAgICAgIGdldEludm9pY2VEYXRhUG9zbVNwcmVhZGluZyhyb3V0ZXIucXVlcnkuaWQpXHJcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRQb3NtTGlzdChkYXRhKTtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlci5xdWVyeS5pZF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0UG9zbSgpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0UG9zbShkYXRhKTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgY29uc3Qgb25GaWxlRm9jdXMgPSAodmFsKSA9PiB7XHJcbiAgICBzZXRNb2RhbCh0cnVlKTtcclxuICAgIGlmICh0eXBlID09PSBcIkhJU1RPUllfUExBTlwiKSB7XHJcbiAgICAgIHZpZXdGaWxlKHZhbC5pZClcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgc2V0RmlsZUZvY3VzKGRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiSElTVE9SWV9VTlBMQU5cIikge1xyXG4gICAgICB2aWV3RmlsZVVucGxhbih2YWwuaWQpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIHNldEZpbGVGb2N1cyhkYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcIkhJU1RPUllfU1BSRUFESU5HXCIpIHtcclxuICAgICAgdmlld0ZpbGVTcHJlYWRpbmcodmFsLmlkKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBzZXRGaWxlRm9jdXMoZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlcklucHV0VXBsb2FkID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codmFsWzBdLnR5cGUgIT0gbnVsbCA/IHZhbFswXS50eXBlLnByb2dyYW0gOiBcIlwiKTtcclxuICAgIHZhciByZW5kZXIgPSB2aXMubWFwKCh2YWwsIGluZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy52aXNpYmlsaXR5X2dyaWR9PlxyXG4gICAgICAgICAgPGRpdj5QT1NNIHtpbmRleCArIDF9PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpc2liaWxpdHlfZHJvcGRvd259PlxyXG4gICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICBvcHRpb25zPXtwb3NtfVxyXG4gICAgICAgICAgICAgIHR5cGU9e1wiUE9TTVwifVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBwb3NtLmZpbHRlcigodmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiB2YWwucHJvZ3JhbSA9PSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdmlzLnNwbGljZShpbmRleCwgMSwge1xyXG4gICAgICAgICAgICAgICAgICAuLi52aXNbaW5kZXhdLFxyXG4gICAgICAgICAgICAgICAgICB0eXBlOiBkYXRhWzBdLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXREdW1teShkdW1teSArIDEpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbC50eXBlICE9IG51bGwgPyB2YWwudHlwZS5wcm9ncmFtIDogXCJcIn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiIzQxODY3QVwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3ZhbC5maWxlICE9IG51bGwgPyB2YWwuZmlsZS5uYW1lIDogbnVsbH1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubmV3X2J1dHRvbn0gaHRtbEZvcj17YHVwbG9hZCR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtcIi9jYW1lcmEuc3ZnXCJ9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxOHB4XCIsIHZlcnRpY2FsQWxpZ246IFwiYmFzZWxpbmVcIiB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF9maWxlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAvLyByZWFkZXIucmVhZEFzRGF0YVVSTChlLnRhcmdldC5maWxlc1swXSk7XHJcbiAgICAgICAgICAgICAgICAgIC8vIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2cocmVhZGVyLnJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgICAgICAgICAgIHZpcy5zcGxpY2UoaW5kZXgsIDEsIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi52aXNbaW5kZXhdLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGU6IGUudGFyZ2V0LmZpbGVzWzBdLFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgc2V0RHVtbXkoZHVtbXkgKyAxKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBpZD17YHVwbG9hZCR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgICAgICAgY2FwdHVyZT1cImVudmlyb25tZW50XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZW5kZXI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVySGlzdG9yeVBvc20gPSAoKSA9PiB7XHJcbiAgICB2YXIgcmVuZGVyID0gcG9zbUxpc3QubWFwKCh2YWwsIGluZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy52aXNpYmlsaXR5X2dyaWRfaGlzdG9yeX0+XHJcbiAgICAgICAgICA8ZGl2PlBPU00ge2luZGV4ICsgMX08L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlzaWJpbGl0eV9kcm9wZG93bn0+XHJcbiAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIzMnB4XCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNlOWVjZjJcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNnB4IDEwcHhcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3ZhbC50aXBlfVxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM0MTg2N0FcIixcclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvbkZpbGVGb2N1cyh2YWwpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dmFsLm5hbWFGaWxlfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHJlbmRlcjtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IG9uU2F2ZSA9ICgpID0+IHtcclxuICAgIGlmIChuZXdOT08pIHtcclxuICAgICAgYWN0aW9ucy5zZXRTcHJlYWRpbmdWaXNpYmlsaXR5KHZpcyk7XHJcbiAgICAgIFJvdXRlci5wdXNoKGAvdmlzaXQvc3ByZWFkaW5nL3N1Ym1pdD9uZXc9dHJ1ZWApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHR5cGUgPT09IFwiUExBTlwiKSB7XHJcbiAgICAgICAgYWN0aW9ucy5zZXRQbGFuVmlzaWJpbGl0eSh2aXMpO1xyXG4gICAgICAgIFJvdXRlci5wdXNoKGAvdmlzaXQvcGxhbi8ke3JvdXRlci5xdWVyeS5pZH1gKTtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlVOUExBTlwiKSB7XHJcbiAgICAgICAgYWN0aW9ucy5zZXRVbnBsYW5WaXNpYmlsaXR5KHZpcyk7XHJcbiAgICAgICAgUm91dGVyLnB1c2goYC92aXNpdC91bnBsYW4vc3VibWl0YCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJTUFJFQURJTkdcIikge1xyXG4gICAgICAgIGFjdGlvbnMuc2V0U3ByZWFkaW5nVmlzaWJpbGl0eSh2aXMpO1xyXG4gICAgICAgIFJvdXRlci5wdXNoKGAvdmlzaXQvc3ByZWFkaW5nL3N1Ym1pdGApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gY29uc3QgZGlzcGxheVZpZXcgPSAoKSA9PiB7XHJcbiAgLy8gICAvLyBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAvLyAgIHZhciBvYmplY3RVUkwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGVGb2N1cyk7XHJcbiAgLy8gICAvLyBteUltYWdlLnNyYyA9IG9iamVjdFVSTDtcclxuICAvLyAgIHJldHVybiBvYmplY3RVUkw7XHJcbiAgLy8gfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIHttb2RhbCA/IChcclxuICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0RmlsZUZvY3VzKG51bGwpO1xyXG4gICAgICAgICAgICAgIHNldE1vZGFsKGZhbHNlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCI0MDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMjBweCBhdXRvXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzgwcHhcIiwgbWFyZ2luOiBcIjAgMTBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgIHNyYz17ZmlsZUZvY3VzfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICB7dHlwZS5pbmNsdWRlcyhcIkhJU1RPUllcIikgPyAoXHJcbiAgICAgICAgICAgIDxOYXZcclxuICAgICAgICAgICAgICB0aXRsZT17XCJWaXNpYmlsaXR5XCJ9XHJcbiAgICAgICAgICAgICAgY29sb3I9e1wid2hpdGVcIn1cclxuICAgICAgICAgICAgICBiYWNrQWN0aW9uPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIuYmFjaygpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8TmF2XHJcbiAgICAgICAgICAgICAgdGl0bGU9e1wiVmlzaWJpbGl0eVwifVxyXG4gICAgICAgICAgICAgIGNvbG9yPXtcIndoaXRlXCJ9XHJcbiAgICAgICAgICAgICAgYWN0aW9uPXtcIlNhdmVcIn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvblNhdmUoKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGJhY2tBY3Rpb249eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSBcIlBMQU5cIikge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoc3RhdGUudmlzaXRQbGFuUmVkdWNlci52aXNpYmlsaXR5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWaXMoWy4uLnN0YXRlLnZpc2l0UGxhblJlZHVjZXIudmlzaWJpbGl0eV0pO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFZpcyhbLi4uaW5pdGlhbFZpc10pO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJVTlBMQU5cIikge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoc3RhdGUudmlzaXRVbnBsYW5SZWR1Y2VyLnZpc2liaWxpdHkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFZpcyhbLi4uc3RhdGUudmlzaXRVbnBsYW5SZWR1Y2VyLnZpc2liaWxpdHldKTtcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWaXMoWy4uLmluaXRpYWxWaXNdKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwiU1BSRUFESU5HXCIpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLnZpc2l0U3ByZWFkaW5nUmVkdWNlci52aXNpYmlsaXR5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWaXMoWy4uLnN0YXRlLnZpc2l0U3ByZWFkaW5nUmVkdWNlci52aXNpYmlsaXR5XSk7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmlzKFsuLi5pbml0aWFsVmlzXSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFJvdXRlci5iYWNrKCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBkaXNhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgICAgICB7dHlwZS5pbmNsdWRlcyhcIkhJU1RPUllcIilcclxuICAgICAgICAgICAgICA/IHJlbmRlckhpc3RvcnlQb3NtKClcclxuICAgICAgICAgICAgICA6IHJlbmRlcklucHV0VXBsb2FkKCl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgcmV0dXJuIHJlbmRlcigpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=