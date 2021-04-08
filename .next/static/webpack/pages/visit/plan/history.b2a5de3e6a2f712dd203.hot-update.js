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
      // var imgData = canvas.toDataURL("image/png");
      // var margin = 10;
      // var imgWidth = 210 - 2 * margin;
      // var pageHeight = 295;
      // var imgHeight = (canvas.height * imgWidth) / canvas.width;
      // var heightLeft = imgHeight;
      // var doc = new jsPDF("p", "mm");
      // var position = 20; // give some top padding to first page
      // doc.addImage(imgData, "PNG", margin, position, imgWidth, imgHeight);
      // heightLeft -= pageHeight;
      // while (heightLeft >= 0) {
      //   position += heightLeft - imgHeight; // top padding for other pages
      //   doc.addPage();
      //   doc.addImage(imgData, "PNG", margin, position, imgWidth, imgHeight);
      //   heightLeft -= pageHeight;
      // }
      // doc.save("file.pdf");
      var image = {
        type: "jpeg",
        quality: 0.98
      };
      var margin = [0.5, 0.5];
      var filename = "myfile.pdf";
      var imgWidth = 8.5;
      var pageHeight = 11;
      var innerPageWidth = imgWidth - margin[0] * 2;
      var innerPageHeight = pageHeight - margin[1] * 2; // Calculate the number of pages.

      var pxFullHeight = canvas.height;
      var pxPageHeight = Math.floor(canvas.width * (pageHeight / imgWidth));
      var nPages = Math.ceil(pxFullHeight / pxPageHeight); // Define pageHeight separately so it can be trimmed on the final page.

      var pageHeight = innerPageHeight; // Create a one-page canvas to split up the full image.

      var pageCanvas = document.createElement("canvas");
      var pageCtx = pageCanvas.getContext("2d");
      pageCanvas.width = canvas.width;
      pageCanvas.height = pxPageHeight; // Initialize the PDF.

      var pdf = new jsPDF("p", "in", [8.5, 11]);

      for (var page = 0; page < nPages; page++) {
        // Trim the final page to reduce file size.
        if (page === nPages - 1 && pxFullHeight % pxPageHeight !== 0) {
          pageCanvas.height = pxFullHeight % pxPageHeight;
          pageHeight = pageCanvas.height * innerPageWidth / pageCanvas.width;
        } // Display the page.


        var w = pageCanvas.width;
        var h = pageCanvas.height;
        pageCtx.fillStyle = "white";
        pageCtx.fillRect(0, 0, w, h);
        pageCtx.drawImage(canvas, 0, page * pxPageHeight, w, h, 0, 0, w, h); // Add the page to the PDF.

        if (page > 0) pdf.addPage();
        debugger;
        var imgData = pageCanvas.toDataURL("image/" + image.type, image.quality);
        pdf.addImage(imgData, image.type, margin[1], margin[0], innerPageWidth, pageHeight);
      }

      pdf.save();
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
        lineNumber: 196,
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
        lineNumber: 200,
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
        lineNumber: 212,
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
                lineNumber: 236,
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
                  lineNumber: 238,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 237,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 229,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 217,
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
            lineNumber: 245,
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
                lineNumber: 252,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 251,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                margin: "60px 0"
              },
              children: renderList()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 261,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: function onClick() {
                setPdfDownload(true);
              },
              children: "print"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 262,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 215,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IaXN0b3J5LmpzeCJdLCJuYW1lcyI6WyJIaXN0b3J5IiwidHlwZSIsInVzZUNvbnRleHQiLCJTdG9yZXMiLCJzdGF0ZSIsImRpc3BhdGNoIiwiYWN0aW9ucyIsInVzZVN0YXRlIiwiaGlzdG9yeSIsInNldEhpc3RvcnkiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInBkZkRvd25sb2FkIiwic2V0UGRmRG93bmxvYWQiLCJqc1BERiIsInVzZUVmZmVjdCIsInRoZW4iLCJtb2R1bGUiLCJ1c2VyRGF0YSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VyTWVudSIsImdldEF1dGgiLCJkYXRhIiwiYXV0aCIsImZpbHRlciIsInZhbCIsIm1vZHVsZUNvZGUiLCJtZW51IiwiUm91dGVyIiwicHVzaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJnZXRQbGFuSGlzdG9yeSIsInByaW50IiwibmFtZSIsImRpdlRvRGlzcGxheSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJodG1sMmNhbnZhcyIsInNjYWxlIiwiY2FudmFzIiwiaW1hZ2UiLCJxdWFsaXR5IiwibWFyZ2luIiwiZmlsZW5hbWUiLCJpbWdXaWR0aCIsInBhZ2VIZWlnaHQiLCJpbm5lclBhZ2VXaWR0aCIsImlubmVyUGFnZUhlaWdodCIsInB4RnVsbEhlaWdodCIsImhlaWdodCIsInB4UGFnZUhlaWdodCIsIk1hdGgiLCJmbG9vciIsIndpZHRoIiwiblBhZ2VzIiwiY2VpbCIsInBhZ2VDYW52YXMiLCJjcmVhdGVFbGVtZW50IiwicGFnZUN0eCIsImdldENvbnRleHQiLCJwZGYiLCJwYWdlIiwidyIsImgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImRyYXdJbWFnZSIsImFkZFBhZ2UiLCJpbWdEYXRhIiwidG9EYXRhVVJMIiwiYWRkSW1hZ2UiLCJzYXZlIiwicmVuZGVyTGlzdCIsImZpbHRlckRhdGEiLCJuYW1hT3V0bGV0IiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImFsYW1hdE91dGxldCIsInJlbmRlciIsIm1hcCIsImluZGV4IiwibGVuZ3RoIiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwiY29sb3IiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYXhIZWlnaHQiLCJvdmVyZmxvdyIsIm92ZXJmbG93WCIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3cmFwcGVyIiwiYmFjayIsIm1haW4iLCJzZWFyY2hfZml4ZWQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJpbnB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxPQUFULE9BQTJCO0FBQUE7O0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUFBLG9CQUNIQyx3REFBVSxDQUFDQyw2Q0FBRCxDQURQO0FBQUEsTUFDaENDLEtBRGdDLGVBQ2hDQSxLQURnQztBQUFBLE1BQ3pCQyxRQUR5QixlQUN6QkEsUUFEeUI7QUFBQSxNQUNmQyxPQURlLGVBQ2ZBLE9BRGU7O0FBQUEsa0JBRVZDLHNEQUFRLENBQUMsRUFBRCxDQUZFO0FBQUEsTUFFakNDLE9BRmlDO0FBQUEsTUFFeEJDLFVBRndCOztBQUFBLG1CQUdaRixzREFBUSxDQUFDLEVBQUQsQ0FISTtBQUFBLE1BR2pDRyxNQUhpQztBQUFBLE1BR3pCQyxTQUh5Qjs7QUFBQSxtQkFJVkosc0RBQVEsQ0FBQyxJQUFELENBSkU7QUFBQSxNQUlqQ0ssT0FKaUM7QUFBQSxNQUl4QkMsVUFKd0I7O0FBQUEsbUJBS0ZOLHNEQUFRLENBQUMsS0FBRCxDQUxOO0FBQUEsTUFLakNPLFdBTGlDO0FBQUEsTUFLcEJDLGNBTG9COztBQU94QyxNQUFJQyxLQUFL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QUFFO0FBQUEscUJBQU1sRSxrREFBTSxDQUFDbUUsSUFBUCxFQUFOO0FBQUEsYUFGZDtBQUdFLGlCQUFLLEVBQUU7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBTUU7QUFBSyxxQkFBUyxFQUFFUiw0RUFBTSxDQUFDUyxJQUF2QjtBQUFBLG9DQUNFO0FBQUssdUJBQVMsRUFBRVQsNEVBQU0sQ0FBQ1UsWUFBdkI7QUFBQSxxQ0FDRTtBQUNFLHdCQUFRLEVBQUUsa0JBQUNDLENBQUQsRUFBTztBQUNmNUYsMkJBQVMsQ0FBQzRGLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVQ7QUFDRCxpQkFISDtBQUlFLDJCQUFXLEVBQUMsUUFKZDtBQUtFLHlCQUFTLEVBQUViLDRFQUFNLENBQUNjLEtBTHBCO0FBTUUscUJBQUssRUFBRTtBQUFFaEIsMkJBQVMsRUFBRTtBQUFiO0FBTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFXRTtBQUFLLG1CQUFLLEVBQUU7QUFBRXpDLHNCQUFNLEVBQUU7QUFBVixlQUFaO0FBQUEsd0JBQW1DOEIsVUFBVTtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVhGLGVBWUU7QUFDRSxxQkFBTyxFQUFFLG1CQUFNO0FBQ2JoRSw4QkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNELGVBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUEyREQ7QUFDRixHQWhFRDs7QUFpRUEsU0FBT3NFLE1BQU0sRUFBYjtBQUNEOztHQWhRdUJyRixPOztLQUFBQSxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Zpc2l0L3BsYW4vaGlzdG9yeS5iMmE1ZGUzZTZhMmY3MTJkZDIwMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBTdG9yZXMgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jb21wb25lbnRzL0hpc3RvcnkubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgaHRtbDJjYW52YXMgZnJvbSBcImh0bWwyY2FudmFzXCI7XHJcbmltcG9ydCBOYXYgZnJvbSBcIi4vTmF2XCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuL1NwaW5uZXJcIjtcclxuaW1wb3J0IERldGFpbFBsYW4gZnJvbSBcIi4vRGV0YWlsUGxhblwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4vTW9kYWxcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xyXG5pbXBvcnQgeyBnZXRBdXRoLCBnZXRQbGFuSGlzdG9yeSB9IGZyb20gXCIuLi9oZWxwZXJcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCBJbnZvaWNlIGZyb20gXCIuL0ludm9pY2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhpc3RvcnkoeyB0eXBlIH0pIHtcclxuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCwgYWN0aW9ucyB9ID0gdXNlQ29udGV4dChTdG9yZXMpO1xyXG4gIGNvbnN0IFtoaXN0b3J5LCBzZXRIaXN0b3J5XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3BkZkRvd25sb2FkLCBzZXRQZGZEb3dubG9hZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGxldCBqc1BERiA9IG51bGw7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBpbXBvcnQoXCJqc3BkZlwiKS50aGVuKChtb2R1bGUpID0+IHtcclxuICAgICAgICBqc1BERiA9IG1vZHVsZS5kZWZhdWx0O1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xyXG4gICAgY29uc3QgdXNlck1lbnUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibWVudVwiKSk7XHJcbiAgICBpZiAodXNlckRhdGEpIHtcclxuICAgICAgZ2V0QXV0aCh1c2VyRGF0YSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgdmFyIGF1dGggPSBkYXRhLmZpbHRlcigodmFsKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWwubW9kdWxlQ29kZSA9PT0gdHlwZTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdmFyIG1lbnUgPSB1c2VyTWVudS5maWx0ZXIoKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsLm1vZHVsZUNvZGUgPT09IHR5cGU7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGlmICghKGF1dGggJiYgbWVudSkpIHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICB9XHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcclxuXHJcbiAgICBpZiAodHlwZSA9PT0gXCJQTEFOXCIpIHtcclxuICAgICAgZ2V0UGxhbkhpc3RvcnkodXNlckRhdGEpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIHNldEhpc3RvcnkoZGF0YSk7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlVOUExBTlwiKSB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlNQUkVBRElOR1wiKSB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICBjb25zdCBwcmludCA9ICgpID0+IHtcclxuICAgIHZhciBkYXRhID0ge1xyXG4gICAgICBuYW1lOiBcIm1lXCIsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgZGl2VG9EaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnZvaWNlXCIpO1xyXG4gICAgaHRtbDJjYW52YXMoZGl2VG9EaXNwbGF5LCB7IHNjYWxlOiA1IH0pLnRoZW4oKGNhbnZhcykgPT4ge1xyXG4gICAgICAvLyBjb25zdCBpbWdEYXRhID0gY2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKTtcclxuICAgICAgLy8gY29uc3QgcGRmID0gbmV3IGpzUERGKFwicFwiLCBcInB4XCIsIFwiYTRcIik7XHJcbiAgICAgIC8vIGNvbnN0IGltZ1Byb3BzID0gcGRmLmdldEltYWdlUHJvcGVydGllcyhpbWdEYXRhKTtcclxuICAgICAgLy8gY29uc3QgcGRmV2lkdGggPSBwZGYuaW50ZXJuYWwucGFnZVNpemUuZ2V0V2lkdGgoKTtcclxuICAgICAgLy8gY29uc3QgcGRmSGVpZ2h0ID0gKGltZ1Byb3BzLmhlaWdodCAqIHBkZldpZHRoKSAvIGltZ1Byb3BzLndpZHRoO1xyXG4gICAgICAvLyB2YXIgaGVpZ2h0TGVmdCA9IHBkZkhlaWdodDtcclxuICAgICAgLy8gdmFyIHBvc2l0aW9uID0gMDtcclxuXHJcbiAgICAgIC8vIHBkZi5hZGRJbWFnZShpbWdEYXRhLCBcIlBOR1wiLCAwLCBwb3NpdGlvbiwgcGRmV2lkdGgsIHBkZkhlaWdodCk7XHJcblxyXG4gICAgICAvLyB3aGlsZSAoaGVpZ2h0TGVmdCA+PSAwKSB7XHJcbiAgICAgIC8vICAgcG9zaXRpb24gKz0gaGVpZ2h0TGVmdCAtIGltZ1Byb3BzLmhlaWdodDsgLy8gdG9wIHBhZGRpbmcgZm9yIG90aGVyIHBhZ2VzXHJcbiAgICAgIC8vICAgcGRmLmFkZFBhZ2UoKTtcclxuICAgICAgLy8gICBwZGYuYWRkSW1hZ2UoaW1nRGF0YSwgXCJQTkdcIiwgMCwgcG9zaXRpb24sIHBkZldpZHRoLCBwZGZIZWlnaHQpO1xyXG4gICAgICAvLyAgIGhlaWdodExlZnQgLT0gcGRmSGVpZ2h0O1xyXG4gICAgICAvLyB9XHJcblxyXG4gICAgICAvLyBwZGYuc2F2ZShcImRvd25sb2FkLnBkZlwiKTtcclxuICAgICAgLy8gdmFyIGltZ0RhdGEgPSBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpO1xyXG4gICAgICAvLyB2YXIgbWFyZ2luID0gMTA7XHJcbiAgICAgIC8vIHZhciBpbWdXaWR0aCA9IDIxMCAtIDIgKiBtYXJnaW47XHJcbiAgICAgIC8vIHZhciBwYWdlSGVpZ2h0ID0gMjk1O1xyXG4gICAgICAvLyB2YXIgaW1nSGVpZ2h0ID0gKGNhbnZhcy5oZWlnaHQgKiBpbWdXaWR0aCkgLyBjYW52YXMud2lkdGg7XHJcbiAgICAgIC8vIHZhciBoZWlnaHRMZWZ0ID0gaW1nSGVpZ2h0O1xyXG4gICAgICAvLyB2YXIgZG9jID0gbmV3IGpzUERGKFwicFwiLCBcIm1tXCIpO1xyXG4gICAgICAvLyB2YXIgcG9zaXRpb24gPSAyMDsgLy8gZ2l2ZSBzb21lIHRvcCBwYWRkaW5nIHRvIGZpcnN0IHBhZ2VcclxuXHJcbiAgICAgIC8vIGRvYy5hZGRJbWFnZShpbWdEYXRhLCBcIlBOR1wiLCBtYXJnaW4sIHBvc2l0aW9uLCBpbWdXaWR0aCwgaW1nSGVpZ2h0KTtcclxuICAgICAgLy8gaGVpZ2h0TGVmdCAtPSBwYWdlSGVpZ2h0O1xyXG5cclxuICAgICAgLy8gd2hpbGUgKGhlaWdodExlZnQgPj0gMCkge1xyXG4gICAgICAvLyAgIHBvc2l0aW9uICs9IGhlaWdodExlZnQgLSBpbWdIZWlnaHQ7IC8vIHRvcCBwYWRkaW5nIGZvciBvdGhlciBwYWdlc1xyXG4gICAgICAvLyAgIGRvYy5hZGRQYWdlKCk7XHJcbiAgICAgIC8vICAgZG9jLmFkZEltYWdlKGltZ0RhdGEsIFwiUE5HXCIsIG1hcmdpbiwgcG9zaXRpb24sIGltZ1dpZHRoLCBpbWdIZWlnaHQpO1xyXG4gICAgICAvLyAgIGhlaWdodExlZnQgLT0gcGFnZUhlaWdodDtcclxuICAgICAgLy8gfVxyXG4gICAgICAvLyBkb2Muc2F2ZShcImZpbGUucGRmXCIpO1xyXG5cclxuICAgICAgY29uc3QgaW1hZ2UgPSB7IHR5cGU6IFwianBlZ1wiLCBxdWFsaXR5OiAwLjk4IH07XHJcbiAgICAgIGNvbnN0IG1hcmdpbiA9IFswLjUsIDAuNV07XHJcbiAgICAgIGNvbnN0IGZpbGVuYW1lID0gXCJteWZpbGUucGRmXCI7XHJcblxyXG4gICAgICB2YXIgaW1nV2lkdGggPSA4LjU7XHJcbiAgICAgIHZhciBwYWdlSGVpZ2h0ID0gMTE7XHJcblxyXG4gICAgICB2YXIgaW5uZXJQYWdlV2lkdGggPSBpbWdXaWR0aCAtIG1hcmdpblswXSAqIDI7XHJcbiAgICAgIHZhciBpbm5lclBhZ2VIZWlnaHQgPSBwYWdlSGVpZ2h0IC0gbWFyZ2luWzFdICogMjtcclxuXHJcbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIHBhZ2VzLlxyXG4gICAgICB2YXIgcHhGdWxsSGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcclxuICAgICAgdmFyIHB4UGFnZUhlaWdodCA9IE1hdGguZmxvb3IoY2FudmFzLndpZHRoICogKHBhZ2VIZWlnaHQgLyBpbWdXaWR0aCkpO1xyXG4gICAgICB2YXIgblBhZ2VzID0gTWF0aC5jZWlsKHB4RnVsbEhlaWdodCAvIHB4UGFnZUhlaWdodCk7XHJcblxyXG4gICAgICAvLyBEZWZpbmUgcGFnZUhlaWdodCBzZXBhcmF0ZWx5IHNvIGl0IGNhbiBiZSB0cmltbWVkIG9uIHRoZSBmaW5hbCBwYWdlLlxyXG4gICAgICB2YXIgcGFnZUhlaWdodCA9IGlubmVyUGFnZUhlaWdodDtcclxuXHJcbiAgICAgIC8vIENyZWF0ZSBhIG9uZS1wYWdlIGNhbnZhcyB0byBzcGxpdCB1cCB0aGUgZnVsbCBpbWFnZS5cclxuICAgICAgdmFyIHBhZ2VDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICB2YXIgcGFnZUN0eCA9IHBhZ2VDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICBwYWdlQ2FudmFzLndpZHRoID0gY2FudmFzLndpZHRoO1xyXG4gICAgICBwYWdlQ2FudmFzLmhlaWdodCA9IHB4UGFnZUhlaWdodDtcclxuXHJcbiAgICAgIC8vIEluaXRpYWxpemUgdGhlIFBERi5cclxuICAgICAgdmFyIHBkZiA9IG5ldyBqc1BERihcInBcIiwgXCJpblwiLCBbOC41LCAxMV0pO1xyXG5cclxuICAgICAgZm9yICh2YXIgcGFnZSA9IDA7IHBhZ2UgPCBuUGFnZXM7IHBhZ2UrKykge1xyXG4gICAgICAgIC8vIFRyaW0gdGhlIGZpbmFsIHBhZ2UgdG8gcmVkdWNlIGZpbGUgc2l6ZS5cclxuICAgICAgICBpZiAocGFnZSA9PT0gblBhZ2VzIC0gMSAmJiBweEZ1bGxIZWlnaHQgJSBweFBhZ2VIZWlnaHQgIT09IDApIHtcclxuICAgICAgICAgIHBhZ2VDYW52YXMuaGVpZ2h0ID0gcHhGdWxsSGVpZ2h0ICUgcHhQYWdlSGVpZ2h0O1xyXG4gICAgICAgICAgcGFnZUhlaWdodCA9IChwYWdlQ2FudmFzLmhlaWdodCAqIGlubmVyUGFnZVdpZHRoKSAvIHBhZ2VDYW52YXMud2lkdGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEaXNwbGF5IHRoZSBwYWdlLlxyXG4gICAgICAgIHZhciB3ID0gcGFnZUNhbnZhcy53aWR0aDtcclxuICAgICAgICB2YXIgaCA9IHBhZ2VDYW52YXMuaGVpZ2h0O1xyXG4gICAgICAgIHBhZ2VDdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgIHBhZ2VDdHguZmlsbFJlY3QoMCwgMCwgdywgaCk7XHJcbiAgICAgICAgcGFnZUN0eC5kcmF3SW1hZ2UoY2FudmFzLCAwLCBwYWdlICogcHhQYWdlSGVpZ2h0LCB3LCBoLCAwLCAwLCB3LCBoKTtcclxuXHJcbiAgICAgICAgLy8gQWRkIHRoZSBwYWdlIHRvIHRoZSBQREYuXHJcbiAgICAgICAgaWYgKHBhZ2UgPiAwKSBwZGYuYWRkUGFnZSgpO1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIHZhciBpbWdEYXRhID0gcGFnZUNhbnZhcy50b0RhdGFVUkwoXHJcbiAgICAgICAgICBcImltYWdlL1wiICsgaW1hZ2UudHlwZSxcclxuICAgICAgICAgIGltYWdlLnF1YWxpdHlcclxuICAgICAgICApO1xyXG4gICAgICAgIHBkZi5hZGRJbWFnZShcclxuICAgICAgICAgIGltZ0RhdGEsXHJcbiAgICAgICAgICBpbWFnZS50eXBlLFxyXG4gICAgICAgICAgbWFyZ2luWzFdLFxyXG4gICAgICAgICAgbWFyZ2luWzBdLFxyXG4gICAgICAgICAgaW5uZXJQYWdlV2lkdGgsXHJcbiAgICAgICAgICBwYWdlSGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcGRmLnNhdmUoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckxpc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBmaWx0ZXJEYXRhID0gaGlzdG9yeS5maWx0ZXIoKHZhbCkgPT4ge1xyXG4gICAgICBpZiAodmFsLm5hbWFPdXRsZXQgIT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgdmFsLm5hbWFPdXRsZXQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAgIHZhbC5hbGFtYXRPdXRsZXQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHJlbmRlciA9IGhpc3RvcnkubWFwKCh2YWwsIGluZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiA8RGV0YWlsUGxhbiBrZXk9e2luZGV4fSBkYXRhPXt2YWx9IGhpc3RvcnkgLz47XHJcbiAgICB9KTtcclxuICAgIGlmIChmaWx0ZXJEYXRhLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5Ub3A6IFwiMTUwcHhcIiwgY29sb3I6IFwiI2QwZDBkMFwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTm8gSXRlbVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHJlbmRlcjtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAge3BkZkRvd25sb2FkID8gKFxyXG4gICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRQZGZEb3dubG9hZChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcInNjcm9sbFwiLFxyXG4gICAgICAgICAgICAgICAgICBvdmVyZmxvd1g6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI0MDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjEwMHB4IGF1dG9cIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEludm9pY2UgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHhcIiwgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcmludCgpfSB0ZXh0PXtcIkRvd25sb2FkIFBERlwifSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8TmF2XHJcbiAgICAgICAgICAgICAgdGl0bGU9e1wiSGlzdG9yeVwifVxyXG4gICAgICAgICAgICAgIGJhY2tBY3Rpb249eygpID0+IFJvdXRlci5iYWNrKCl9XHJcbiAgICAgICAgICAgICAgY29sb3I9e1wid2hpdGVcIn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaF9maXhlZH0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjBcIiB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCI2MHB4IDBcIiB9fT57cmVuZGVyTGlzdCgpfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0UGRmRG93bmxvYWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHByaW50XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gcmVuZGVyKCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==