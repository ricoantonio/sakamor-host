webpackHotUpdate_N_E("pages/visit/plan/history/[id]",{

/***/ "./components/HistoryDetail.jsx":
/*!**************************************!*\
  !*** ./components/HistoryDetail.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HistoryDetail; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/pages/VisitPlanDetail.module.css */ "./styles/pages/VisitPlanDetail.module.css");
/* harmony import */ var _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Nav */ "./components/Nav.jsx");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Card */ "./components/Card.jsx");
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Spinner */ "./components/Spinner.jsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Button */ "./components/Button.jsx");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helper */ "./helper.js");
/* harmony import */ var _Invoice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Invoice */ "./components/Invoice.jsx");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Modal */ "./components/Modal.jsx");



var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-new\\components\\HistoryDetail.jsx",
    _s = $RefreshSig$();













function HistoryDetail() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      plan = _useState2[0],
      setPlan = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      productList = _useState3[0],
      setProductList = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      posmList = _useState4[0],
      setPosmList = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      pdfDownload = _useState5[0],
      setPdfDownload = _useState5[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var now = new Date();
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

    if (router.query.id) {
      Object(_helper__WEBPACK_IMPORTED_MODULE_10__["getPlanMonthlyHistory"])(userData).then(function (data) {
        setPlan(data.filter(function (val) {
          return val.idVisitPlan === router.query.id;
        }));
        setLoading(false);
      })["catch"](function (err) {
        console.log(err);
      });
      Object(_helper__WEBPACK_IMPORTED_MODULE_10__["getInvoiceData"])(router.query.id).then(function (data) {
        setProductList(data);
      })["catch"](function (err) {
        console.log(err);
      });
      Object(_helper__WEBPACK_IMPORTED_MODULE_10__["getInvoiceDataPosm"])(router.query.id).then(function (data) {
        setPosmList(data);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }, [router.query.id]);

  var renderDetail = function renderDetail() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [renderDataDetail("Jenis Channel", plan[0].jenisChannel), renderDataDetail("Outlet", plan[0].namaOutlet), renderDataDetail("Alamat", plan[0].alamatOutlet), renderDataDetail("Catatan", plan[0].catatan), renderDataDetail("Visibility"), renderDataDetail("Avability")]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, _this);
  };

  var renderDataDetail = function renderDataDetail(type, data) {
    // const doneFormVis = state.visitPlanReducer.visibility.filter((val) => {
    //   return val.file !== null && val.type !== null;
    // });
    // const doneFormAva = state.visitPlanReducer.avability;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.render_data,
        children: [type, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            textAlign: "right"
          },
          children: type === "Visibility" ? "".concat(posmList.length, "/6") : type === "Avability" ? "".concat(productList.length, "/25") : ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
        style: {
          marginTop: "6px",
          borderRadius: "5px"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.render_value,
          children: type === "Catatan" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              width: "100%",
              border: "none",
              height: "70px"
            },
            children: data
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 15
          }, _this) : type === "Visibility" || type === "Avability" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: type === "Visibility" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.progress_bar
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 23
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.progress_bar_now,
                  style: {
                    width: "".concat(posmList.length / 6 * 100, "%")
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 23
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 21
              }, _this) : type === "Avability" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.progress_bar
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 23
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.progress_bar_now,
                  style: {
                    width: "".concat(productList.length / 25 * 100, "%")
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 23
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 21
              }, _this) : ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: type === "Visibility" ? "/visit/plan/history/".concat(plan[0].idVisitPlan, "/visibility") : type === "Avability" ? "/visit/plan/history/".concat(plan[0].idVisitPlan, "/avability") : "",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  text: "View"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 147,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 17
            }, _this)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: data
          }, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, _this);
  };

  var print = function print() {
    var divToDisplay = document.getElementById("invoice");
    html2canvas__WEBPACK_IMPORTED_MODULE_9___default()(divToDisplay, {
      scale: 5
    }).then(function (canvas) {
      var image = {
        type: "jpeg",
        quality: 0.98
      };
      var margin = [0.5, 0.5];
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

      pdf.save("file.pdf");
    });
  };

  var render = function render() {
    if (loading) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 14
      }, _this);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
          children: [pdfDownload ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Modal__WEBPACK_IMPORTED_MODULE_12__["default"], {
            onClick: function onClick() {
              setPdfDownload(false);
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                maxHeight: "100%",
                overflow: "auto",
                overflowX: "hidden",
                overflowY: "hidden"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  width: "400px",
                  maxHeight: "100%",
                  margin: "100px auto"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Invoice__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  data: productList,
                  plan: plan
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 252,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  style: {
                    padding: "10px",
                    backgroundColor: "white"
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    onClick: function onClick() {
                      print();
                    },
                    text: "Download PDF"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 259,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 253,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 245,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 15
          }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.wrapper,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Nav__WEBPACK_IMPORTED_MODULE_5__["default"], {
              title: "History",
              color: "white",
              action: "Download",
              backAction: function backAction() {
                next_router__WEBPACK_IMPORTED_MODULE_3___default.a.back();
              },
              onClick: function onClick() {
                setPdfDownload(true);
              },
              disable: false
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 271,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.main,
              children: renderDetail()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 283,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 270,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 11
        }, _this)
      }, void 0, false);
    }
  };

  return render();
}

_s(HistoryDetail, "5IZYNEKIP6gAGE/pw0kWeaKU/CU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = HistoryDetail;

var _c;

$RefreshReg$(_c, "HistoryDetail");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IaXN0b3J5RGV0YWlsLmpzeCJdLCJuYW1lcyI6WyJIaXN0b3J5RGV0YWlsIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInBsYW4iLCJzZXRQbGFuIiwicHJvZHVjdExpc3QiLCJzZXRQcm9kdWN0TGlzdCIsInBvc21MaXN0Iiwic2V0UG9zbUxpc3QiLCJwZGZEb3dubG9hZCIsInNldFBkZkRvd25sb2FkIiwicm91dGVyIiwidXNlUm91dGVyIiwibm93IiwiRGF0ZSIsImpzUERGIiwidXNlRWZmZWN0IiwidGhlbiIsIm1vZHVsZSIsInVzZXJEYXRhIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInF1ZXJ5IiwiaWQiLCJnZXRQbGFuTW9udGhseUhpc3RvcnkiLCJkYXRhIiwiZmlsdGVyIiwidmFsIiwiaWRWaXNpdFBsYW4iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZ2V0SW52b2ljZURhdGEiLCJnZXRJbnZvaWNlRGF0YVBvc20iLCJyZW5kZXJEZXRhaWwiLCJyZW5kZXJEYXRhRGV0YWlsIiwiamVuaXNDaGFubmVsIiwibmFtYU91dGxldCIsImFsYW1hdE91dGxldCIsImNhdGF0YW4iLCJ0eXBlIiwic3R5bGVzIiwicmVuZGVyX2RhdGEiLCJ0ZXh0QWxpZ24iLCJsZW5ndGgiLCJtYXJnaW5Ub3AiLCJib3JkZXJSYWRpdXMiLCJyZW5kZXJfdmFsdWUiLCJ3aWR0aCIsImJvcmRlciIsImhlaWdodCIsInByb2dyZXNzX2JhciIsInByb2dyZXNzX2Jhcl9ub3ciLCJwcmludCIsImRpdlRvRGlzcGxheSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJodG1sMmNhbnZhcyIsInNjYWxlIiwiY2FudmFzIiwiaW1hZ2UiLCJxdWFsaXR5IiwibWFyZ2luIiwiaW1nV2lkdGgiLCJwYWdlSGVpZ2h0IiwiaW5uZXJQYWdlV2lkdGgiLCJpbm5lclBhZ2VIZWlnaHQiLCJweEZ1bGxIZWlnaHQiLCJweFBhZ2VIZWlnaHQiLCJNYXRoIiwiZmxvb3IiLCJuUGFnZXMiLCJjZWlsIiwicGFnZUNhbnZhcyIsImNyZWF0ZUVsZW1lbnQiLCJwYWdlQ3R4IiwiZ2V0Q29udGV4dCIsInBkZiIsInBhZ2UiLCJ3IiwiaCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZHJhd0ltYWdlIiwiYWRkUGFnZSIsImltZ0RhdGEiLCJ0b0RhdGFVUkwiLCJhZGRJbWFnZSIsInNhdmUiLCJyZW5kZXIiLCJjb250YWluZXIiLCJtYXhIZWlnaHQiLCJvdmVyZmxvdyIsIm92ZXJmbG93WCIsIm92ZXJmbG93WSIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3cmFwcGVyIiwiUm91dGVyIiwiYmFjayIsIm1haW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFFZSxTQUFTQSxhQUFULEdBQXlCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1JDLHNEQUFRLENBQUMsSUFBRCxDQURBO0FBQUEsTUFDL0JDLE9BRCtCO0FBQUEsTUFDdEJDLFVBRHNCOztBQUFBLG1CQUVkRixzREFBUSxDQUFDLEVBQUQsQ0FGTTtBQUFBLE1BRS9CRyxJQUYrQjtBQUFBLE1BRXpCQyxPQUZ5Qjs7QUFBQSxtQkFHQUosc0RBQVEsQ0FBQyxFQUFELENBSFI7QUFBQSxNQUcvQkssV0FIK0I7QUFBQSxNQUdsQkMsY0FIa0I7O0FBQUEsbUJBSU5OLHNEQUFRLENBQUMsRUFBRCxDQUpGO0FBQUEsTUFJL0JPLFFBSitCO0FBQUEsTUFJckJDLFdBSnFCOztBQUFBLG1CQUtBUixzREFBUSxDQUFDLEtBQUQsQ0FMUjtBQUFBLE1BSy9CUyxXQUwrQjtBQUFBLE1BS2xCQyxjQUxrQjs7QUFNdEMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQUlDLEdBQUcsR0FBRyxJQUFJ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RSxxRUFBQyw0Q0FBRDtBQUNFLG1CQUFLLEVBQUUsU0FEVDtBQUVFLG1CQUFLLEVBQUUsT0FGVDtBQUdFLG9CQUFNLEVBQUUsVUFIVjtBQUlFLHdCQUFVLEVBQUUsc0JBQU07QUFDaEJDLGtFQUFNLENBQUNDLElBQVA7QUFDRCxlQU5IO0FBT0UscUJBQU8sRUFBRSxtQkFBTTtBQUNiM0YsOEJBQWMsQ0FBQyxJQUFELENBQWQ7QUFDRCxlQVRIO0FBVUUscUJBQU8sRUFBRTtBQVZYO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFhRTtBQUFLLHVCQUFTLEVBQUVpQywrRUFBTSxDQUFDMkQsSUFBdkI7QUFBQSx3QkFBOEJsRSxZQUFZO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERix1QkFERjtBQTRERDtBQUNGLEdBakVEOztBQW1FQSxTQUFPdUQsTUFBTSxFQUFiO0FBQ0Q7O0dBaFJ1QjVGLGE7VUFNUGEscUQ7OztLQU5PYixhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Zpc2l0L3BsYW4vaGlzdG9yeS9baWRdLjAwNDZiNmU5Yjg2OTFhYzM5NTg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wYWdlcy9WaXNpdFBsYW5EZXRhaWwubW9kdWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IE5hdiBmcm9tIFwiLi9OYXZcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi9TcGlubmVyXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XHJcbmltcG9ydCBodG1sMmNhbnZhcyBmcm9tIFwiaHRtbDJjYW52YXNcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgZ2V0SW52b2ljZURhdGEsXHJcbiAgZ2V0SW52b2ljZURhdGFQb3NtLFxyXG4gIGdldFBsYW5Nb250aGx5SGlzdG9yeSxcclxufSBmcm9tIFwiLi4vaGVscGVyXCI7XHJcbmltcG9ydCBJbnZvaWNlIGZyb20gXCIuL0ludm9pY2VcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuL01vZGFsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIaXN0b3J5RGV0YWlsKCkge1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtwbGFuLCBzZXRQbGFuXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcHJvZHVjdExpc3QsIHNldFByb2R1Y3RMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcG9zbUxpc3QsIHNldFBvc21MaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcGRmRG93bmxvYWQsIHNldFBkZkRvd25sb2FkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICB2YXIgbm93ID0gbmV3IERhdGUoKTtcclxuXHJcbiAgbGV0IGpzUERGID0gbnVsbDtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIGltcG9ydChcImpzcGRmXCIpLnRoZW4oKG1vZHVsZSkgPT4ge1xyXG4gICAgICAgIGpzUERGID0gbW9kdWxlLmRlZmF1bHQ7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XHJcblxyXG4gICAgaWYgKHJvdXRlci5xdWVyeS5pZCkge1xyXG4gICAgICBnZXRQbGFuTW9udGhseUhpc3RvcnkodXNlckRhdGEpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIHNldFBsYW4oXHJcbiAgICAgICAgICAgIGRhdGEuZmlsdGVyKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gdmFsLmlkVmlzaXRQbGFuID09PSByb3V0ZXIucXVlcnkuaWQ7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIGdldEludm9pY2VEYXRhKHJvdXRlci5xdWVyeS5pZClcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgc2V0UHJvZHVjdExpc3QoZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIGdldEludm9pY2VEYXRhUG9zbShyb3V0ZXIucXVlcnkuaWQpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIHNldFBvc21MaXN0KGRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlci5xdWVyeS5pZF0pO1xyXG5cclxuICBjb25zdCByZW5kZXJEZXRhaWwgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtyZW5kZXJEYXRhRGV0YWlsKFwiSmVuaXMgQ2hhbm5lbFwiLCBwbGFuWzBdLmplbmlzQ2hhbm5lbCl9XHJcbiAgICAgICAge3JlbmRlckRhdGFEZXRhaWwoXCJPdXRsZXRcIiwgcGxhblswXS5uYW1hT3V0bGV0KX1cclxuICAgICAgICB7cmVuZGVyRGF0YURldGFpbChcIkFsYW1hdFwiLCBwbGFuWzBdLmFsYW1hdE91dGxldCl9XHJcbiAgICAgICAge3JlbmRlckRhdGFEZXRhaWwoXCJDYXRhdGFuXCIsIHBsYW5bMF0uY2F0YXRhbil9XHJcbiAgICAgICAge3JlbmRlckRhdGFEZXRhaWwoXCJWaXNpYmlsaXR5XCIpfVxyXG4gICAgICAgIHtyZW5kZXJEYXRhRGV0YWlsKFwiQXZhYmlsaXR5XCIpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRGF0YURldGFpbCA9ICh0eXBlLCBkYXRhKSA9PiB7XHJcbiAgICAvLyBjb25zdCBkb25lRm9ybVZpcyA9IHN0YXRlLnZpc2l0UGxhblJlZHVjZXIudmlzaWJpbGl0eS5maWx0ZXIoKHZhbCkgPT4ge1xyXG4gICAgLy8gICByZXR1cm4gdmFsLmZpbGUgIT09IG51bGwgJiYgdmFsLnR5cGUgIT09IG51bGw7XHJcbiAgICAvLyB9KTtcclxuICAgIC8vIGNvbnN0IGRvbmVGb3JtQXZhID0gc3RhdGUudmlzaXRQbGFuUmVkdWNlci5hdmFiaWxpdHk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVuZGVyX2RhdGF9PlxyXG4gICAgICAgICAge3R5cGV9XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJyaWdodFwiIH19PlxyXG4gICAgICAgICAgICB7dHlwZSA9PT0gXCJWaXNpYmlsaXR5XCJcclxuICAgICAgICAgICAgICA/IGAke3Bvc21MaXN0Lmxlbmd0aH0vNmBcclxuICAgICAgICAgICAgICA6IHR5cGUgPT09IFwiQXZhYmlsaXR5XCJcclxuICAgICAgICAgICAgICA/IGAke3Byb2R1Y3RMaXN0Lmxlbmd0aH0vMjVgXHJcbiAgICAgICAgICAgICAgOiBcIlwifVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjZweFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlbmRlcl92YWx1ZX0+XHJcbiAgICAgICAgICAgIHt0eXBlID09PSBcIkNhdGF0YW5cIiA/IChcclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgYm9yZGVyOiBcIm5vbmVcIiwgaGVpZ2h0OiBcIjcwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIHtkYXRhfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogdHlwZSA9PT0gXCJWaXNpYmlsaXR5XCIgfHwgdHlwZSA9PT0gXCJBdmFiaWxpdHlcIiA/IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAge3R5cGUgPT09IFwiVmlzaWJpbGl0eVwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcn0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcl9ub3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGAkeyhwb3NtTGlzdC5sZW5ndGggLyA2KSAqIDEwMH0lYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKSA6IHR5cGUgPT09IFwiQXZhYmlsaXR5XCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfYmFyfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfYmFyX25vd31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYCR7KHByb2R1Y3RMaXN0Lmxlbmd0aCAvIDI1KSAqIDEwMH0lYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9e1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPT09IFwiVmlzaWJpbGl0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IGAvdmlzaXQvcGxhbi9oaXN0b3J5LyR7cGxhblswXS5pZFZpc2l0UGxhbn0vdmlzaWJpbGl0eWBcclxuICAgICAgICAgICAgICAgICAgICAgIDogdHlwZSA9PT0gXCJBdmFiaWxpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBgL3Zpc2l0L3BsYW4vaGlzdG9yeS8ke3BsYW5bMF0uaWRWaXNpdFBsYW59L2F2YWJpbGl0eWBcclxuICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlZpZXdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPD57ZGF0YX08Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHByaW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGl2VG9EaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnZvaWNlXCIpO1xyXG4gICAgaHRtbDJjYW52YXMoZGl2VG9EaXNwbGF5LCB7IHNjYWxlOiA1IH0pLnRoZW4oKGNhbnZhcykgPT4ge1xyXG4gICAgICBjb25zdCBpbWFnZSA9IHsgdHlwZTogXCJqcGVnXCIsIHF1YWxpdHk6IDAuOTggfTtcclxuICAgICAgY29uc3QgbWFyZ2luID0gWzAuNSwgMC41XTtcclxuXHJcbiAgICAgIHZhciBpbWdXaWR0aCA9IDguNTtcclxuICAgICAgdmFyIHBhZ2VIZWlnaHQgPSAxMTtcclxuXHJcbiAgICAgIHZhciBpbm5lclBhZ2VXaWR0aCA9IGltZ1dpZHRoIC0gbWFyZ2luWzBdICogMjtcclxuICAgICAgdmFyIGlubmVyUGFnZUhlaWdodCA9IHBhZ2VIZWlnaHQgLSBtYXJnaW5bMV0gKiAyO1xyXG5cclxuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBudW1iZXIgb2YgcGFnZXMuXHJcbiAgICAgIHZhciBweEZ1bGxIZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xyXG4gICAgICB2YXIgcHhQYWdlSGVpZ2h0ID0gTWF0aC5mbG9vcihjYW52YXMud2lkdGggKiAocGFnZUhlaWdodCAvIGltZ1dpZHRoKSk7XHJcbiAgICAgIHZhciBuUGFnZXMgPSBNYXRoLmNlaWwocHhGdWxsSGVpZ2h0IC8gcHhQYWdlSGVpZ2h0KTtcclxuXHJcbiAgICAgIC8vIERlZmluZSBwYWdlSGVpZ2h0IHNlcGFyYXRlbHkgc28gaXQgY2FuIGJlIHRyaW1tZWQgb24gdGhlIGZpbmFsIHBhZ2UuXHJcbiAgICAgIHZhciBwYWdlSGVpZ2h0ID0gaW5uZXJQYWdlSGVpZ2h0O1xyXG5cclxuICAgICAgLy8gQ3JlYXRlIGEgb25lLXBhZ2UgY2FudmFzIHRvIHNwbGl0IHVwIHRoZSBmdWxsIGltYWdlLlxyXG4gICAgICB2YXIgcGFnZUNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICAgIHZhciBwYWdlQ3R4ID0gcGFnZUNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgIHBhZ2VDYW52YXMud2lkdGggPSBjYW52YXMud2lkdGg7XHJcbiAgICAgIHBhZ2VDYW52YXMuaGVpZ2h0ID0gcHhQYWdlSGVpZ2h0O1xyXG5cclxuICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgUERGLlxyXG4gICAgICB2YXIgcGRmID0gbmV3IGpzUERGKFwicFwiLCBcImluXCIsIFs4LjUsIDExXSk7XHJcblxyXG4gICAgICBmb3IgKHZhciBwYWdlID0gMDsgcGFnZSA8IG5QYWdlczsgcGFnZSsrKSB7XHJcbiAgICAgICAgLy8gVHJpbSB0aGUgZmluYWwgcGFnZSB0byByZWR1Y2UgZmlsZSBzaXplLlxyXG4gICAgICAgIGlmIChwYWdlID09PSBuUGFnZXMgLSAxICYmIHB4RnVsbEhlaWdodCAlIHB4UGFnZUhlaWdodCAhPT0gMCkge1xyXG4gICAgICAgICAgcGFnZUNhbnZhcy5oZWlnaHQgPSBweEZ1bGxIZWlnaHQgJSBweFBhZ2VIZWlnaHQ7XHJcbiAgICAgICAgICBwYWdlSGVpZ2h0ID0gKHBhZ2VDYW52YXMuaGVpZ2h0ICogaW5uZXJQYWdlV2lkdGgpIC8gcGFnZUNhbnZhcy53aWR0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIERpc3BsYXkgdGhlIHBhZ2UuXHJcbiAgICAgICAgdmFyIHcgPSBwYWdlQ2FudmFzLndpZHRoO1xyXG4gICAgICAgIHZhciBoID0gcGFnZUNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgICAgcGFnZUN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XHJcbiAgICAgICAgcGFnZUN0eC5maWxsUmVjdCgwLCAwLCB3LCBoKTtcclxuICAgICAgICBwYWdlQ3R4LmRyYXdJbWFnZShjYW52YXMsIDAsIHBhZ2UgKiBweFBhZ2VIZWlnaHQsIHcsIGgsIDAsIDAsIHcsIGgpO1xyXG5cclxuICAgICAgICAvLyBBZGQgdGhlIHBhZ2UgdG8gdGhlIFBERi5cclxuICAgICAgICBpZiAocGFnZSA+IDApIHBkZi5hZGRQYWdlKCk7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgdmFyIGltZ0RhdGEgPSBwYWdlQ2FudmFzLnRvRGF0YVVSTChcclxuICAgICAgICAgIFwiaW1hZ2UvXCIgKyBpbWFnZS50eXBlLFxyXG4gICAgICAgICAgaW1hZ2UucXVhbGl0eVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcGRmLmFkZEltYWdlKFxyXG4gICAgICAgICAgaW1nRGF0YSxcclxuICAgICAgICAgIGltYWdlLnR5cGUsXHJcbiAgICAgICAgICBtYXJnaW5bMV0sXHJcbiAgICAgICAgICBtYXJnaW5bMF0sXHJcbiAgICAgICAgICBpbm5lclBhZ2VXaWR0aCxcclxuICAgICAgICAgIHBhZ2VIZWlnaHRcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwZGYuc2F2ZShcImZpbGUucGRmXCIpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICB7cGRmRG93bmxvYWQgPyAoXHJcbiAgICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFBkZkRvd25sb2FkKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93WDogXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvd1k6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNDAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTAwcHggYXV0b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW52b2ljZSBkYXRhPXtwcm9kdWN0TGlzdH0gcGxhbj17cGxhbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByaW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1wiRG93bmxvYWQgUERGXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgIDxOYXZcclxuICAgICAgICAgICAgICAgIHRpdGxlPXtcIkhpc3RvcnlcIn1cclxuICAgICAgICAgICAgICAgIGNvbG9yPXtcIndoaXRlXCJ9XHJcbiAgICAgICAgICAgICAgICBhY3Rpb249e1wiRG93bmxvYWRcIn1cclxuICAgICAgICAgICAgICAgIGJhY2tBY3Rpb249eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgUm91dGVyLmJhY2soKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFBkZkRvd25sb2FkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT57cmVuZGVyRGV0YWlsKCl9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHJlbmRlcigpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=