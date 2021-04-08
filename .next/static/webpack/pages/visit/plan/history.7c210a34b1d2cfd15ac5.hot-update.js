webpackHotUpdate_N_E("pages/visit/plan/history",{

/***/ "./components/History.jsx":
/*!********************************!*\
  !*** ./components/History.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return History; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./store/index.js");
/* harmony import */ var _styles_components_History_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/components/History.module.css */ "./styles/components/History.module.css");
/* harmony import */ var _styles_components_History_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_components_History_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Nav */ "./components/Nav.jsx");
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Spinner */ "./components/Spinner.jsx");
/* harmony import */ var _DetailPlan__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DetailPlan */ "./components/DetailPlan.jsx");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Modal */ "./components/Modal.jsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Button */ "./components/Button.jsx");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Card */ "./components/Card.jsx");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../helper */ "./helper.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Invoice__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Invoice */ "./components/Invoice.jsx");


var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-new\\components\\History.jsx",
    _s = $RefreshSig$();

















function History(_ref) {
  _s();

  var _this = this;

  var type = _ref.type;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store__WEBPACK_IMPORTED_MODULE_5__["Stores"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch,
      actions = _useContext.actions;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      history = _useState[0],
      setHistory = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      search = _useState2[0],
      setSearch = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loading = _useState3[0],
      setLoading = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      pdfDownload = _useState4[0],
      setPdfDownload = _useState4[1];

  var jsPDF = null;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (true) {
      __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js")).then(function (module) {
        jsPDF = module["default"];
      });
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var userData = JSON.parse(localStorage.getItem("user"));
    var userMenu = JSON.parse(localStorage.getItem("menu"));

    if (userData) {
      Object(_helper__WEBPACK_IMPORTED_MODULE_14__["getAuth"])(userData).then(function (data) {
        var auth = data.filter(function (val) {
          return val.moduleCode === type;
        });
        var menu = userMenu.filter(function (val) {
          return val.moduleCode === type;
        });

        if (!(auth && menu)) {
          next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/");
        }
      })["catch"](function (err) {
        console.log(err);
      });
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/");
    }
  }, [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var userData = JSON.parse(localStorage.getItem("user"));

    if (type === "PLAN") {
      Object(_helper__WEBPACK_IMPORTED_MODULE_14__["getPlanHistory"])(userData).then(function (data) {
        setHistory(data);
        setLoading(false);
      })["catch"](function (err) {
        console.log(err);
      });
    } else if (type === "UNPLAN") {
      setLoading(false);
    } else if (type === "SPREADING") {
      setLoading(false);
    }
  }, [dispatch]);

  var print = function print() {
    var data = {
      name: "me"
    };
    var divToDisplay = document.getElementById("invoice");
    html2canvas__WEBPACK_IMPORTED_MODULE_7___default()(divToDisplay, {
      scale: 5
    }).then(function (canvas) {
      // const imgData = canvas.toDataURL("image/png");
      // const pdf = new jsPDF("p", "px", "a4");
      // const imgProps = pdf.getImageProperties(imgData);
      // const pdfWidth = pdf.internal.pageSize.getWidth();
      // const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      // var heightLeft = pdfHeight;
      // var position = 0;
      // pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
      // while (heightLeft >= 0) {
      //   position += heightLeft - imgProps.height; // top padding for other pages
      //   pdf.addPage();
      //   pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
      //   heightLeft -= pdfHeight;
      // }
      // pdf.save("download.pdf");
      var margin = 2;
      var imgWidth = 210 - 2 * margin;
      var imgData = canvas.toDataURL("image/png");
      var imgWidth = 210;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      var doc = new jsPDF("p", "mm");
      var position = 10; // give some top padding to first page

      doc.addImage(imgData, "PNG", margin, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position += heightLeft - imgHeight; // top padding for other pages

        doc.addPage();
        doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      doc.save("file.pdf");
    });
  };

  var renderList = function renderList() {
    var filterData = history.filter(function (val) {
      if (val.namaOutlet !== null) {
        return val.namaOutlet.toLowerCase().includes(search.toLowerCase()) || val.alamatOutlet.toLowerCase().includes(search.toLowerCase());
      }
    });
    var render = history.map(function (val, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DetailPlan__WEBPACK_IMPORTED_MODULE_10__["default"], {
        data: val,
        history: true
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 14
      }, _this);
    });

    if (filterData.length == 0) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          textAlign: "center",
          marginTop: "150px",
          color: "#d0d0d0"
        },
        children: "No Item"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }, _this);
    } else {
      return render;
    }
  };

  var render = function render() {
    if (loading) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Spinner__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 14
      }, _this);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_components_History_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.container,
        children: [pdfDownload ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Modal__WEBPACK_IMPORTED_MODULE_11__["default"], {
          onClick: function onClick() {
            setPdfDownload(false);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              maxHeight: "100%",
              overflow: "scroll",
              overflowX: "hidden"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                width: "400px",
                maxHeight: "100%",
                margin: "100px auto"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Invoice__WEBPACK_IMPORTED_MODULE_16__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 177,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  padding: "10px",
                  backgroundColor: "white"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
                  onClick: function onClick() {
                    return print();
                  },
                  text: "Download PDF"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 179,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 178,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 13
        }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_components_History_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.wrapper,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Nav__WEBPACK_IMPORTED_MODULE_8__["default"], {
            title: "History",
            backAction: function backAction() {
              return next_router__WEBPACK_IMPORTED_MODULE_2___default.a.back();
            },
            color: "white"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_components_History_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.main,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_components_History_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.search_fixed,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                onChange: function onChange(e) {
                  setSearch(e.target.value);
                },
                placeholder: "Search",
                className: _styles_components_History_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.input,
                style: {
                  marginTop: "0"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 193,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                margin: "60px 0"
              },
              children: renderList()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: function onClick() {
                setPdfDownload(true);
              },
              children: "print"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }, _this);
    }
  };

  return render();
}

_s(History, "ybTLc7kbyUiOUTOty1XKCJ/aSww=");

_c = History;

var _c;

$RefreshReg$(_c, "History");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IaXN0b3J5LmpzeCJdLCJuYW1lcyI6WyJIaXN0b3J5IiwidHlwZSIsInVzZUNvbnRleHQiLCJTdG9yZXMiLCJzdGF0ZSIsImRpc3BhdGNoIiwiYWN0aW9ucyIsInVzZVN0YXRlIiwiaGlzdG9yeSIsInNldEhpc3RvcnkiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInBkZkRvd25sb2FkIiwic2V0UGRmRG93bmxvYWQiLCJqc1BERiIsInVzZUVmZmVjdCIsInRoZW4iLCJtb2R1bGUiLCJ1c2VyRGF0YSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VyTWVudSIsImdldEF1dGgiLCJkYXRhIiwiYXV0aCIsImZpbHRlciIsInZhbCIsIm1vZHVsZUNvZGUiLCJtZW51IiwiUm91dGVyIiwicHVzaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJnZXRQbGFuSGlzdG9yeSIsInByaW50IiwibmFtZSIsImRpdlRvRGlzcGxheSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJodG1sMmNhbnZhcyIsInNjYWxlIiwiY2FudmFzIiwibWFyZ2luIiwiaW1nV2lkdGgiLCJpbWdEYXRhIiwidG9EYXRhVVJMIiwicGFnZUhlaWdodCIsImltZ0hlaWdodCIsImhlaWdodCIsIndpZHRoIiwiaGVpZ2h0TGVmdCIsImRvYyIsInBvc2l0aW9uIiwiYWRkSW1hZ2UiLCJhZGRQYWdlIiwic2F2ZSIsInJlbmRlckxpc3QiLCJmaWx0ZXJEYXRhIiwibmFtYU91dGxldCIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJhbGFtYXRPdXRsZXQiLCJyZW5kZXIiLCJtYXAiLCJpbmRleCIsImxlbmd0aCIsInRleHRBbGlnbiIsIm1hcmdpblRvcCIsImNvbG9yIiwic3R5bGVzIiwiY29udGFpbmVyIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3ciLCJvdmVyZmxvd1giLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwid3JhcHBlciIsImJhY2siLCJtYWluIiwic2VhcmNoX2ZpeGVkIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaW5wdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsT0FBVCxPQUEyQjtBQUFBOztBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQSxvQkFDSEMsd0RBQVUsQ0FBQ0MsNkNBQUQsQ0FEUDtBQUFBLE1BQ2hDQyxLQURnQyxlQUNoQ0EsS0FEZ0M7QUFBQSxNQUN6QkMsUUFEeUIsZUFDekJBLFFBRHlCO0FBQUEsTUFDZkMsT0FEZSxlQUNmQSxPQURlOztBQUFBLGtCQUVWQyxzREFBUSxDQUFDLEVBQUQsQ0FGRTtBQUFBLE1BRWpDQyxPQUZpQztBQUFBLE1BRXhCQyxVQUZ3Qjs7QUFBQSxtQkFHWkYsc0RBQVEsQ0FBQyxFQUFELENBSEk7QUFBQSxNQUdqQ0csTUFIaUM7QUFBQSxNQUd6QkMsU0FIeUI7O0FBQUEsbUJBSVZKLHNEQUFRLENBQUMsSUFBRCxDQUpFO0FBQUEsTUFJakNLLE9BSmlDO0FBQUEsTUFJeEJDLFVBSndCOztBQUFBLG1CQUtGTixzREFBUSxDQUFDLEtBQUQsQ0FMTjtBQUFBLE1BS2pDTyxXQUxpQztBQUFBLE1BS3BCQyxjQUxvQjs7QUFPeEMsTUFBSUMsS0FBSyxHQUFHLElBQVo7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsY0FBbUM7QUFDakMsOElBQWdCQyxJQUFoQixDQUFxQixVQUFDQyxNQUFELEVBQVk7QUFDL0JILGFBQUssR0FBR0csTUFBTSxXQUFkO0FBQ0QsT0FGRDtBQUdEO0FBQ0YsR0FOUSxDQUFUO0FBUUFGLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1HLFFBQVEsR0FBR0MsSUFB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RTtBQUFWLGVBQVo7QUFBQSx3QkFBbUNjLFVBQVU7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFYRixlQVlFO0FBQ0UscUJBQU8sRUFBRSxtQkFBTTtBQUNiOUMsOEJBQWMsQ0FBQyxJQUFELENBQWQ7QUFDRCxlQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBMkREO0FBQ0YsR0FoRUQ7O0FBaUVBLFNBQU9vRCxNQUFNLEVBQWI7QUFDRDs7R0FyTXVCbkUsTzs7S0FBQUEsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92aXNpdC9wbGFuL2hpc3RvcnkuN2MyMTBhMzRiMWQyY2ZkMTVhYzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xyXG5cclxuaW1wb3J0IHsgU3RvcmVzIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvY29tcG9uZW50cy9IaXN0b3J5Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGh0bWwyY2FudmFzIGZyb20gXCJodG1sMmNhbnZhc1wiO1xyXG5pbXBvcnQgTmF2IGZyb20gXCIuL05hdlwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi9TcGlubmVyXCI7XHJcbmltcG9ydCBEZXRhaWxQbGFuIGZyb20gXCIuL0RldGFpbFBsYW5cIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuL01vZGFsXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRcIjtcclxuaW1wb3J0IHsgZ2V0QXV0aCwgZ2V0UGxhbkhpc3RvcnkgfSBmcm9tIFwiLi4vaGVscGVyXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgSW52b2ljZSBmcm9tIFwiLi9JbnZvaWNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIaXN0b3J5KHsgdHlwZSB9KSB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2gsIGFjdGlvbnMgfSA9IHVzZUNvbnRleHQoU3RvcmVzKTtcclxuICBjb25zdCBbaGlzdG9yeSwgc2V0SGlzdG9yeV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtwZGZEb3dubG9hZCwgc2V0UGRmRG93bmxvYWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBsZXQganNQREYgPSBudWxsO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgaW1wb3J0KFwianNwZGZcIikudGhlbigobW9kdWxlKSA9PiB7XHJcbiAgICAgICAganNQREYgPSBtb2R1bGUuZGVmYXVsdDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcclxuICAgIGNvbnN0IHVzZXJNZW51ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1lbnVcIikpO1xyXG4gICAgaWYgKHVzZXJEYXRhKSB7XHJcbiAgICAgIGdldEF1dGgodXNlckRhdGEpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIHZhciBhdXRoID0gZGF0YS5maWx0ZXIoKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsLm1vZHVsZUNvZGUgPT09IHR5cGU7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHZhciBtZW51ID0gdXNlck1lbnUuZmlsdGVyKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbC5tb2R1bGVDb2RlID09PSB0eXBlO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZiAoIShhdXRoICYmIG1lbnUpKSB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09IFwiUExBTlwiKSB7XHJcbiAgICAgIGdldFBsYW5IaXN0b3J5KHVzZXJEYXRhKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBzZXRIaXN0b3J5KGRhdGEpO1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJVTlBMQU5cIikge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJTUFJFQURJTkdcIikge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgY29uc3QgcHJpbnQgPSAoKSA9PiB7XHJcbiAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgbmFtZTogXCJtZVwiLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IGRpdlRvRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW52b2ljZVwiKTtcclxuICAgIGh0bWwyY2FudmFzKGRpdlRvRGlzcGxheSwgeyBzY2FsZTogNSB9KS50aGVuKChjYW52YXMpID0+IHtcclxuICAgICAgLy8gY29uc3QgaW1nRGF0YSA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIik7XHJcbiAgICAgIC8vIGNvbnN0IHBkZiA9IG5ldyBqc1BERihcInBcIiwgXCJweFwiLCBcImE0XCIpO1xyXG4gICAgICAvLyBjb25zdCBpbWdQcm9wcyA9IHBkZi5nZXRJbWFnZVByb3BlcnRpZXMoaW1nRGF0YSk7XHJcbiAgICAgIC8vIGNvbnN0IHBkZldpZHRoID0gcGRmLmludGVybmFsLnBhZ2VTaXplLmdldFdpZHRoKCk7XHJcbiAgICAgIC8vIGNvbnN0IHBkZkhlaWdodCA9IChpbWdQcm9wcy5oZWlnaHQgKiBwZGZXaWR0aCkgLyBpbWdQcm9wcy53aWR0aDtcclxuICAgICAgLy8gdmFyIGhlaWdodExlZnQgPSBwZGZIZWlnaHQ7XHJcbiAgICAgIC8vIHZhciBwb3NpdGlvbiA9IDA7XHJcblxyXG4gICAgICAvLyBwZGYuYWRkSW1hZ2UoaW1nRGF0YSwgXCJQTkdcIiwgMCwgcG9zaXRpb24sIHBkZldpZHRoLCBwZGZIZWlnaHQpO1xyXG5cclxuICAgICAgLy8gd2hpbGUgKGhlaWdodExlZnQgPj0gMCkge1xyXG4gICAgICAvLyAgIHBvc2l0aW9uICs9IGhlaWdodExlZnQgLSBpbWdQcm9wcy5oZWlnaHQ7IC8vIHRvcCBwYWRkaW5nIGZvciBvdGhlciBwYWdlc1xyXG4gICAgICAvLyAgIHBkZi5hZGRQYWdlKCk7XHJcbiAgICAgIC8vICAgcGRmLmFkZEltYWdlKGltZ0RhdGEsIFwiUE5HXCIsIDAsIHBvc2l0aW9uLCBwZGZXaWR0aCwgcGRmSGVpZ2h0KTtcclxuICAgICAgLy8gICBoZWlnaHRMZWZ0IC09IHBkZkhlaWdodDtcclxuICAgICAgLy8gfVxyXG5cclxuICAgICAgLy8gcGRmLnNhdmUoXCJkb3dubG9hZC5wZGZcIik7XHJcbiAgICAgIHZhciBtYXJnaW4gPSAyO1xyXG4gICAgICB2YXIgaW1nV2lkdGggPSAyMTAgLSAyICogbWFyZ2luO1xyXG4gICAgICB2YXIgaW1nRGF0YSA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIik7XHJcbiAgICAgIHZhciBpbWdXaWR0aCA9IDIxMDtcclxuICAgICAgdmFyIHBhZ2VIZWlnaHQgPSAyOTU7XHJcbiAgICAgIHZhciBpbWdIZWlnaHQgPSAoY2FudmFzLmhlaWdodCAqIGltZ1dpZHRoKSAvIGNhbnZhcy53aWR0aDtcclxuICAgICAgdmFyIGhlaWdodExlZnQgPSBpbWdIZWlnaHQ7XHJcbiAgICAgIHZhciBkb2MgPSBuZXcganNQREYoXCJwXCIsIFwibW1cIik7XHJcbiAgICAgIHZhciBwb3NpdGlvbiA9IDEwOyAvLyBnaXZlIHNvbWUgdG9wIHBhZGRpbmcgdG8gZmlyc3QgcGFnZVxyXG5cclxuICAgICAgZG9jLmFkZEltYWdlKGltZ0RhdGEsIFwiUE5HXCIsIG1hcmdpbiwgcG9zaXRpb24sIGltZ1dpZHRoLCBpbWdIZWlnaHQpO1xyXG4gICAgICBoZWlnaHRMZWZ0IC09IHBhZ2VIZWlnaHQ7XHJcblxyXG4gICAgICB3aGlsZSAoaGVpZ2h0TGVmdCA+PSAwKSB7XHJcbiAgICAgICAgcG9zaXRpb24gKz0gaGVpZ2h0TGVmdCAtIGltZ0hlaWdodDsgLy8gdG9wIHBhZGRpbmcgZm9yIG90aGVyIHBhZ2VzXHJcbiAgICAgICAgZG9jLmFkZFBhZ2UoKTtcclxuICAgICAgICBkb2MuYWRkSW1hZ2UoaW1nRGF0YSwgXCJQTkdcIiwgMCwgcG9zaXRpb24sIGltZ1dpZHRoLCBpbWdIZWlnaHQpO1xyXG4gICAgICAgIGhlaWdodExlZnQgLT0gcGFnZUhlaWdodDtcclxuICAgICAgfVxyXG4gICAgICBkb2Muc2F2ZShcImZpbGUucGRmXCIpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyTGlzdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGZpbHRlckRhdGEgPSBoaXN0b3J5LmZpbHRlcigodmFsKSA9PiB7XHJcbiAgICAgIGlmICh2YWwubmFtYU91dGxldCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICB2YWwubmFtYU91dGxldC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgdmFsLmFsYW1hdE91dGxldC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgcmVuZGVyID0gaGlzdG9yeS5tYXAoKHZhbCwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIDxEZXRhaWxQbGFuIGtleT17aW5kZXh9IGRhdGE9e3ZhbH0gaGlzdG9yeSAvPjtcclxuICAgIH0pO1xyXG4gICAgaWYgKGZpbHRlckRhdGEubGVuZ3RoID09IDApIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpblRvcDogXCIxNTBweFwiLCBjb2xvcjogXCIjZDBkMGQwXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBObyBJdGVtXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gcmVuZGVyO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICB7cGRmRG93bmxvYWQgPyAoXHJcbiAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFBkZkRvd25sb2FkKGZhbHNlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwic2Nyb2xsXCIsXHJcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93WDogXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjQwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTAwcHggYXV0b1wiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8SW52b2ljZSAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMTBweFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHByaW50KCl9IHRleHQ9e1wiRG93bmxvYWQgUERGXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxOYXZcclxuICAgICAgICAgICAgICB0aXRsZT17XCJIaXN0b3J5XCJ9XHJcbiAgICAgICAgICAgICAgYmFja0FjdGlvbj17KCkgPT4gUm91dGVyLmJhY2soKX1cclxuICAgICAgICAgICAgICBjb2xvcj17XCJ3aGl0ZVwifVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoX2ZpeGVkfT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMFwiIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjYwcHggMFwiIH19PntyZW5kZXJMaXN0KCl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRQZGZEb3dubG9hZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgcHJpbnRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiByZW5kZXIoKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9