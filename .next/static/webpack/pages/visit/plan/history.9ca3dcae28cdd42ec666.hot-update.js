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
      var imgData = canvas.toDataURL("image/png");
      var imgWidth = 210;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      var doc = new jsPDF("p", "mm");
      var position = 10; // give some top padding to first page

      doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position += heightLeft - imgHeight + 10; // top padding for other pages

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
        lineNumber: 135,
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
        lineNumber: 139,
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
        lineNumber: 151,
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
                lineNumber: 175,
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
                  lineNumber: 177,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
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
            lineNumber: 184,
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
                lineNumber: 191,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                margin: "60px 0"
              },
              children: renderList()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: function onClick() {
                setPdfDownload(true);
              },
              children: "print"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 154,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IaXN0b3J5LmpzeCJdLCJuYW1lcyI6WyJIaXN0b3J5IiwidHlwZSIsInVzZUNvbnRleHQiLCJTdG9yZXMiLCJzdGF0ZSIsImRpc3BhdGNoIiwiYWN0aW9ucyIsInVzZVN0YXRlIiwiaGlzdG9yeSIsInNldEhpc3RvcnkiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInBkZkRvd25sb2FkIiwic2V0UGRmRG93bmxvYWQiLCJqc1BERiIsInVzZUVmZmVjdCIsInRoZW4iLCJtb2R1bGUiLCJ1c2VyRGF0YSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VyTWVudSIsImdldEF1dGgiLCJkYXRhIiwiYXV0aCIsImZpbHRlciIsInZhbCIsIm1vZHVsZUNvZGUiLCJtZW51IiwiUm91dGVyIiwicHVzaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJnZXRQbGFuSGlzdG9yeSIsInByaW50IiwibmFtZSIsImRpdlRvRGlzcGxheSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJodG1sMmNhbnZhcyIsInNjYWxlIiwiY2FudmFzIiwiaW1nRGF0YSIsInRvRGF0YVVSTCIsImltZ1dpZHRoIiwicGFnZUhlaWdodCIsImltZ0hlaWdodCIsImhlaWdodCIsIndpZHRoIiwiaGVpZ2h0TGVmdCIsImRvYyIsInBvc2l0aW9uIiwiYWRkSW1hZ2UiLCJhZGRQYWdlIiwic2F2ZSIsInJlbmRlckxpc3QiLCJmaWx0ZXJEYXRhIiwibmFtYU91dGxldCIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJhbGFtYXRPdXRsZXQiLCJyZW5kZXIiLCJtYXAiLCJpbmRleCIsImxlbmd0aCIsInRleHRBbGlnbiIsIm1hcmdpblRvcCIsImNvbG9yIiwic3R5bGVzIiwiY29udGFpbmVyIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3ciLCJvdmVyZmxvd1giLCJtYXJnaW4iLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwid3JhcHBlciIsImJhY2siLCJtYWluIiwic2VhcmNoX2ZpeGVkIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaW5wdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsT0FBVCxPQUEyQjtBQUFBOztBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQSxvQkFDSEMsd0RBQVUsQ0FBQ0MsNkNBQUQsQ0FEUDtBQUFBLE1BQ2hDQyxLQURnQyxlQUNoQ0EsS0FEZ0M7QUFBQSxNQUN6QkMsUUFEeUIsZUFDekJBLFFBRHlCO0FBQUEsTUFDZkMsT0FEZSxlQUNmQSxPQURlOztBQUFBLGtCQUVWQyxzREFBUSxDQUFDLEVBQUQsQ0FGRTtBQUFBLE1BRWpDQyxPQUZpQztBQUFBLE1BRXhCQyxVQUZ3Qjs7QUFBQSxtQkFHWkYsc0RBQVEsQ0FBQyxFQUFELENBSEk7QUFBQSxNQUdqQ0csTUFIaUM7QUFBQSxNQUd6QkMsU0FIeUI7O0FBQUEsbUJBSVZKLHNEQUFRLENBQUMsSUFBRCxDQUpFO0FBQUEsTUFJakNLLE9BSmlDO0FBQUEsTUFJeEJDLFVBSndCOztBQUFBLG1CQUtGTixzREFBUSxDQUFDLEtBQUQsQ0FMTjtBQUFBLE1BS2pDTyxXQUxpQztBQUFBLE1BS3BCQyxjQUxvQjs7QUFPeEMsTUFBSUMsS0FBSyxHQUFHLElBQVo7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsY0FBbUM7QUFDakMsOElBQWdCQyxJQUFoQixDQUFxQixVQUFDQyxNQUFELEVBQVk7QUFDL0JILGFBQUssR0FBR0csTUFBTSxXQUFkO0FBQ0QsT0FGRDtBQUdEO0FBQ0YsR0FOUSxDQUFUO0FBUUFGLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1HLFFBQVEsR0FBR0MsSUFB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LHFCQVhGLGVBWUU7QUFDRSxxQkFBTyxFQUFFLG1CQUFNO0FBQ2I3Qyw4QkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNELGVBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUEyREQ7QUFDRixHQWhFRDs7QUFpRUEsU0FBT21ELE1BQU0sRUFBYjtBQUNEOztHQW5NdUJsRSxPOztLQUFBQSxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Zpc2l0L3BsYW4vaGlzdG9yeS45Y2EzZGNhZTI4Y2RkNDJlYzY2Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBTdG9yZXMgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jb21wb25lbnRzL0hpc3RvcnkubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgaHRtbDJjYW52YXMgZnJvbSBcImh0bWwyY2FudmFzXCI7XHJcbmltcG9ydCBOYXYgZnJvbSBcIi4vTmF2XCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuL1NwaW5uZXJcIjtcclxuaW1wb3J0IERldGFpbFBsYW4gZnJvbSBcIi4vRGV0YWlsUGxhblwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4vTW9kYWxcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xyXG5pbXBvcnQgeyBnZXRBdXRoLCBnZXRQbGFuSGlzdG9yeSB9IGZyb20gXCIuLi9oZWxwZXJcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCBJbnZvaWNlIGZyb20gXCIuL0ludm9pY2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhpc3RvcnkoeyB0eXBlIH0pIHtcclxuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCwgYWN0aW9ucyB9ID0gdXNlQ29udGV4dChTdG9yZXMpO1xyXG4gIGNvbnN0IFtoaXN0b3J5LCBzZXRIaXN0b3J5XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3BkZkRvd25sb2FkLCBzZXRQZGZEb3dubG9hZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGxldCBqc1BERiA9IG51bGw7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBpbXBvcnQoXCJqc3BkZlwiKS50aGVuKChtb2R1bGUpID0+IHtcclxuICAgICAgICBqc1BERiA9IG1vZHVsZS5kZWZhdWx0O1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xyXG4gICAgY29uc3QgdXNlck1lbnUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibWVudVwiKSk7XHJcbiAgICBpZiAodXNlckRhdGEpIHtcclxuICAgICAgZ2V0QXV0aCh1c2VyRGF0YSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgdmFyIGF1dGggPSBkYXRhLmZpbHRlcigodmFsKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWwubW9kdWxlQ29kZSA9PT0gdHlwZTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdmFyIG1lbnUgPSB1c2VyTWVudS5maWx0ZXIoKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsLm1vZHVsZUNvZGUgPT09IHR5cGU7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGlmICghKGF1dGggJiYgbWVudSkpIHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICB9XHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcclxuXHJcbiAgICBpZiAodHlwZSA9PT0gXCJQTEFOXCIpIHtcclxuICAgICAgZ2V0UGxhbkhpc3RvcnkodXNlckRhdGEpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIHNldEhpc3RvcnkoZGF0YSk7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlVOUExBTlwiKSB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlNQUkVBRElOR1wiKSB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICBjb25zdCBwcmludCA9ICgpID0+IHtcclxuICAgIHZhciBkYXRhID0ge1xyXG4gICAgICBuYW1lOiBcIm1lXCIsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgZGl2VG9EaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnZvaWNlXCIpO1xyXG4gICAgaHRtbDJjYW52YXMoZGl2VG9EaXNwbGF5LCB7IHNjYWxlOiA1IH0pLnRoZW4oKGNhbnZhcykgPT4ge1xyXG4gICAgICAvLyBjb25zdCBpbWdEYXRhID0gY2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKTtcclxuICAgICAgLy8gY29uc3QgcGRmID0gbmV3IGpzUERGKFwicFwiLCBcInB4XCIsIFwiYTRcIik7XHJcbiAgICAgIC8vIGNvbnN0IGltZ1Byb3BzID0gcGRmLmdldEltYWdlUHJvcGVydGllcyhpbWdEYXRhKTtcclxuICAgICAgLy8gY29uc3QgcGRmV2lkdGggPSBwZGYuaW50ZXJuYWwucGFnZVNpemUuZ2V0V2lkdGgoKTtcclxuICAgICAgLy8gY29uc3QgcGRmSGVpZ2h0ID0gKGltZ1Byb3BzLmhlaWdodCAqIHBkZldpZHRoKSAvIGltZ1Byb3BzLndpZHRoO1xyXG4gICAgICAvLyB2YXIgaGVpZ2h0TGVmdCA9IHBkZkhlaWdodDtcclxuICAgICAgLy8gdmFyIHBvc2l0aW9uID0gMDtcclxuXHJcbiAgICAgIC8vIHBkZi5hZGRJbWFnZShpbWdEYXRhLCBcIlBOR1wiLCAwLCBwb3NpdGlvbiwgcGRmV2lkdGgsIHBkZkhlaWdodCk7XHJcblxyXG4gICAgICAvLyB3aGlsZSAoaGVpZ2h0TGVmdCA+PSAwKSB7XHJcbiAgICAgIC8vICAgcG9zaXRpb24gKz0gaGVpZ2h0TGVmdCAtIGltZ1Byb3BzLmhlaWdodDsgLy8gdG9wIHBhZGRpbmcgZm9yIG90aGVyIHBhZ2VzXHJcbiAgICAgIC8vICAgcGRmLmFkZFBhZ2UoKTtcclxuICAgICAgLy8gICBwZGYuYWRkSW1hZ2UoaW1nRGF0YSwgXCJQTkdcIiwgMCwgcG9zaXRpb24sIHBkZldpZHRoLCBwZGZIZWlnaHQpO1xyXG4gICAgICAvLyAgIGhlaWdodExlZnQgLT0gcGRmSGVpZ2h0O1xyXG4gICAgICAvLyB9XHJcblxyXG4gICAgICAvLyBwZGYuc2F2ZShcImRvd25sb2FkLnBkZlwiKTtcclxuICAgICAgdmFyIGltZ0RhdGEgPSBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpO1xyXG4gICAgICB2YXIgaW1nV2lkdGggPSAyMTA7XHJcbiAgICAgIHZhciBwYWdlSGVpZ2h0ID0gMjk1O1xyXG4gICAgICB2YXIgaW1nSGVpZ2h0ID0gKGNhbnZhcy5oZWlnaHQgKiBpbWdXaWR0aCkgLyBjYW52YXMud2lkdGg7XHJcbiAgICAgIHZhciBoZWlnaHRMZWZ0ID0gaW1nSGVpZ2h0O1xyXG4gICAgICB2YXIgZG9jID0gbmV3IGpzUERGKFwicFwiLCBcIm1tXCIpO1xyXG4gICAgICB2YXIgcG9zaXRpb24gPSAxMDsgLy8gZ2l2ZSBzb21lIHRvcCBwYWRkaW5nIHRvIGZpcnN0IHBhZ2VcclxuXHJcbiAgICAgIGRvYy5hZGRJbWFnZShpbWdEYXRhLCBcIlBOR1wiLCAwLCBwb3NpdGlvbiwgaW1nV2lkdGgsIGltZ0hlaWdodCk7XHJcbiAgICAgIGhlaWdodExlZnQgLT0gcGFnZUhlaWdodDtcclxuXHJcbiAgICAgIHdoaWxlIChoZWlnaHRMZWZ0ID49IDApIHtcclxuICAgICAgICBwb3NpdGlvbiArPSBoZWlnaHRMZWZ0IC0gaW1nSGVpZ2h0ICsgMTA7IC8vIHRvcCBwYWRkaW5nIGZvciBvdGhlciBwYWdlc1xyXG4gICAgICAgIGRvYy5hZGRQYWdlKCk7XHJcbiAgICAgICAgZG9jLmFkZEltYWdlKGltZ0RhdGEsIFwiUE5HXCIsIDAsIHBvc2l0aW9uLCBpbWdXaWR0aCwgaW1nSGVpZ2h0KTtcclxuICAgICAgICBoZWlnaHRMZWZ0IC09IHBhZ2VIZWlnaHQ7XHJcbiAgICAgIH1cclxuICAgICAgZG9jLnNhdmUoXCJmaWxlLnBkZlwiKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckxpc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBmaWx0ZXJEYXRhID0gaGlzdG9yeS5maWx0ZXIoKHZhbCkgPT4ge1xyXG4gICAgICBpZiAodmFsLm5hbWFPdXRsZXQgIT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgdmFsLm5hbWFPdXRsZXQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAgIHZhbC5hbGFtYXRPdXRsZXQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHJlbmRlciA9IGhpc3RvcnkubWFwKCh2YWwsIGluZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiA8RGV0YWlsUGxhbiBrZXk9e2luZGV4fSBkYXRhPXt2YWx9IGhpc3RvcnkgLz47XHJcbiAgICB9KTtcclxuICAgIGlmIChmaWx0ZXJEYXRhLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5Ub3A6IFwiMTUwcHhcIiwgY29sb3I6IFwiI2QwZDBkMFwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTm8gSXRlbVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHJlbmRlcjtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAge3BkZkRvd25sb2FkID8gKFxyXG4gICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRQZGZEb3dubG9hZChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcInNjcm9sbFwiLFxyXG4gICAgICAgICAgICAgICAgICBvdmVyZmxvd1g6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI0MDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjEwMHB4IGF1dG9cIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEludm9pY2UgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHhcIiwgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcmludCgpfSB0ZXh0PXtcIkRvd25sb2FkIFBERlwifSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8TmF2XHJcbiAgICAgICAgICAgICAgdGl0bGU9e1wiSGlzdG9yeVwifVxyXG4gICAgICAgICAgICAgIGJhY2tBY3Rpb249eygpID0+IFJvdXRlci5iYWNrKCl9XHJcbiAgICAgICAgICAgICAgY29sb3I9e1wid2hpdGVcIn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaF9maXhlZH0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjBcIiB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCI2MHB4IDBcIiB9fT57cmVuZGVyTGlzdCgpfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0UGRmRG93bmxvYWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHByaW50XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gcmVuZGVyKCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==