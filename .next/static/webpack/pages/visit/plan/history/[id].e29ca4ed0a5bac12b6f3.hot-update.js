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
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helper */ "./helper.js");
/* harmony import */ var _Invoice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Invoice */ "./components/Invoice.jsx");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Modal */ "./components/Modal.jsx");



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

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      pdfDownload = _useState4[0],
      setPdfDownload = _useState4[1];

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
      Object(_helper__WEBPACK_IMPORTED_MODULE_9__["getPlanMonthlyHistory"])(userData).then(function (data) {
        setPlan(data.filter(function (val) {
          return val.idVisitPlan === router.query.id;
        }));
        setLoading(false);
      })["catch"](function (err) {
        console.log(err);
      });
      Object(_helper__WEBPACK_IMPORTED_MODULE_9__["getInvoiceData"])(router.query.id).then(function (data) {
        setProductList(data);
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
      lineNumber: 62,
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
          children: type === "Visibility" ? "6/6" : type === "Avability" ? "".concat(productList.length, "/25") : ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
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
            lineNumber: 93,
            columnNumber: 15
          }, _this) : type === "Visibility" || type === "Avability" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: type === "Visibility" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.progress_bar
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 23
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.progress_bar_now,
                  style: {
                    width: "100%"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 23
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 21
              }, _this) : type === "Avability" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.progress_bar
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 23
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.progress_bar_now,
                  style: {
                    width: "".concat(productList.length / 25 * 100, "%")
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 23
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 21
              }, _this) : ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: type === "Visibility" ? "/visit/plan/history/".concat(plan[0].idVisitPlan, "/visibility") : type === "Avability" ? "/visit/plan/history/".concat(plan[0].idVisitPlan, "/avability") : "",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  text: "View"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 17
            }, _this)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: data
          }, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, _this);
  };

  var onRenderPDF = function onRenderPDF(val) {
    // getdatapdf
    setPdfFocus(val);
    setPdfDownload(true);
  };

  var print = function print() {
    var data = {
      name: "me"
    };
    var divToDisplay = document.getElementById("invoice");
    html2canvas(divToDisplay, {
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
        lineNumber: 221,
        columnNumber: 14
      }, _this);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
          children: [pdfDownload ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Modal__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Invoice__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  data: productList
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 247,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  style: {
                    padding: "10px",
                    backgroundColor: "white"
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    onClick: function onClick() {
                      return print();
                    },
                    text: "Download PDF"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 254,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 248,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 240,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
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
              lineNumber: 261,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.main,
              children: renderDetail()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 273,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 260,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 11
        }, _this)
      }, void 0, false);
    }
  };

  return render();
}

_s(HistoryDetail, "4aqkaIXKp6N5cFsKUN9hPqOTiOM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IaXN0b3J5RGV0YWlsLmpzeCJdLCJuYW1lcyI6WyJIaXN0b3J5RGV0YWlsIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInBsYW4iLCJzZXRQbGFuIiwicHJvZHVjdExpc3QiLCJzZXRQcm9kdWN0TGlzdCIsInBkZkRvd25sb2FkIiwic2V0UGRmRG93bmxvYWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJub3ciLCJEYXRlIiwianNQREYiLCJ1c2VFZmZlY3QiLCJ0aGVuIiwibW9kdWxlIiwidXNlckRhdGEiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicXVlcnkiLCJpZCIsImdldFBsYW5Nb250aGx5SGlzdG9yeSIsImRhdGEiLCJmaWx0ZXIiLCJ2YWwiLCJpZFZpc2l0UGxhbiIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJnZXRJbnZvaWNlRGF0YSIsInJlbmRlckRldGFpbCIsInJlbmRlckRhdGFEZXRhaWwiLCJqZW5pc0NoYW5uZWwiLCJuYW1hT3V0bGV0IiwiYWxhbWF0T3V0bGV0IiwiY2F0YXRhbiIsInR5cGUiLCJzdHlsZXMiLCJyZW5kZXJfZGF0YSIsInRleHRBbGlnbiIsImxlbmd0aCIsIm1hcmdpblRvcCIsImJvcmRlclJhZGl1cyIsInJlbmRlcl92YWx1ZSIsIndpZHRoIiwiYm9yZGVyIiwiaGVpZ2h0IiwicHJvZ3Jlc3NfYmFyIiwicHJvZ3Jlc3NfYmFyX25vdyIsIm9uUmVuZGVyUERGIiwic2V0UGRmRm9jdXMiLCJwcmludCIsIm5hbWUiLCJkaXZUb0Rpc3BsYXkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaHRtbDJjYW52YXMiLCJzY2FsZSIsImNhbnZhcyIsImltYWdlIiwicXVhbGl0eSIsIm1hcmdpbiIsImltZ1dpZHRoIiwicGFnZUhlaWdodCIsImlubmVyUGFnZVdpZHRoIiwiaW5uZXJQYWdlSGVpZ2h0IiwicHhGdWxsSGVpZ2h0IiwicHhQYWdlSGVpZ2h0IiwiTWF0aCIsImZsb29yIiwiblBhZ2VzIiwiY2VpbCIsInBhZ2VDYW52YXMiLCJjcmVhdGVFbGVtZW50IiwicGFnZUN0eCIsImdldENvbnRleHQiLCJwZGYiLCJwYWdlIiwidyIsImgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImRyYXdJbWFnZSIsImFkZFBhZ2UiLCJpbWdEYXRhIiwidG9EYXRhVVJMIiwiYWRkSW1hZ2UiLCJzYXZlIiwicmVuZGVyIiwiY29udGFpbmVyIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3ciLCJvdmVyZmxvd1giLCJvdmVyZmxvd1kiLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwid3JhcHBlciIsIlJvdXRlciIsImJhY2siLCJtYWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxhQUFULEdBQXlCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1JDLHNEQUFRLENBQUMsSUFBRCxDQURBO0FBQUEsTUFDL0JDLE9BRCtCO0FBQUEsTUFDdEJDLFVBRHNCOztBQUFBLG1CQUVkRixzREFBUSxDQUFDLEVBQUQsQ0FGTTtBQUFBLE1BRS9CRyxJQUYrQjtBQUFBLE1BRXpCQyxPQUZ5Qjs7QUFBQSxtQkFHQUosc0RBQVEsQ0FBQyxFQUFELENBSFI7QUFBQSxNQUcvQkssV0FIK0I7QUFBQSxNQUdsQkMsY0FIa0I7O0FBQUEsbUJBSUFOLHNEQUFRLENBQUMsS0FBRCxDQUpSO0FBQUEsTUFJL0JPLFdBSitCO0FBQUEsTUFJbEJDLGNBSmtCOztBQUt0QyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBSUMsR0FBRyxHQUFHLElBQUlDLElBQUosRUFBVjtBQUVBLE1BQUlDLEtBQUssR0FBRyxJQUFaO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkLGNBQW1DO0FBQ2pDLDhJQUFnQkMsSUFB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QVVFLHFCQUFPLEVBQUU7QUFWWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBYUU7QUFBSyx1QkFBUyxFQUFFZ0MsK0VBQU0sQ0FBQzhELElBQXZCO0FBQUEsd0JBQThCckUsWUFBWTtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFuQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsdUJBREY7QUF1REQ7QUFDRixHQTVERDs7QUE4REEsU0FBTzBELE1BQU0sRUFBYjtBQUNEOztHQTNRdUI1RixhO1VBS1BXLHFEOzs7S0FMT1gsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92aXNpdC9wbGFuL2hpc3RvcnkvW2lkXS5lMjljYTRlZDBhNWJhYzEyYjZmMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvcGFnZXMvVmlzaXRQbGFuRGV0YWlsLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCBOYXYgZnJvbSBcIi4vTmF2XCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4vU3Bpbm5lclwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xyXG5cclxuaW1wb3J0IHsgZ2V0SW52b2ljZURhdGEsIGdldFBsYW5Nb250aGx5SGlzdG9yeSB9IGZyb20gXCIuLi9oZWxwZXJcIjtcclxuaW1wb3J0IEludm9pY2UgZnJvbSBcIi4vSW52b2ljZVwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4vTW9kYWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhpc3RvcnlEZXRhaWwoKSB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3BsYW4sIHNldFBsYW5dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtwcm9kdWN0TGlzdCwgc2V0UHJvZHVjdExpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtwZGZEb3dubG9hZCwgc2V0UGRmRG93bmxvYWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICBsZXQganNQREYgPSBudWxsO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgaW1wb3J0KFwianNwZGZcIikudGhlbigobW9kdWxlKSA9PiB7XHJcbiAgICAgICAganNQREYgPSBtb2R1bGUuZGVmYXVsdDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcclxuXHJcbiAgICBpZiAocm91dGVyLnF1ZXJ5LmlkKSB7XHJcbiAgICAgIGdldFBsYW5Nb250aGx5SGlzdG9yeSh1c2VyRGF0YSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgc2V0UGxhbihcclxuICAgICAgICAgICAgZGF0YS5maWx0ZXIoKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiB2YWwuaWRWaXNpdFBsYW4gPT09IHJvdXRlci5xdWVyeS5pZDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgZ2V0SW52b2ljZURhdGEocm91dGVyLnF1ZXJ5LmlkKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBzZXRQcm9kdWN0TGlzdChkYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIucXVlcnkuaWRdKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRGV0YWlsID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7cmVuZGVyRGF0YURldGFpbChcIkplbmlzIENoYW5uZWxcIiwgcGxhblswXS5qZW5pc0NoYW5uZWwpfVxyXG4gICAgICAgIHtyZW5kZXJEYXRhRGV0YWlsKFwiT3V0bGV0XCIsIHBsYW5bMF0ubmFtYU91dGxldCl9XHJcbiAgICAgICAge3JlbmRlckRhdGFEZXRhaWwoXCJBbGFtYXRcIiwgcGxhblswXS5hbGFtYXRPdXRsZXQpfVxyXG4gICAgICAgIHtyZW5kZXJEYXRhRGV0YWlsKFwiQ2F0YXRhblwiLCBwbGFuWzBdLmNhdGF0YW4pfVxyXG4gICAgICAgIHtyZW5kZXJEYXRhRGV0YWlsKFwiVmlzaWJpbGl0eVwiKX1cclxuICAgICAgICB7cmVuZGVyRGF0YURldGFpbChcIkF2YWJpbGl0eVwiKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckRhdGFEZXRhaWwgPSAodHlwZSwgZGF0YSkgPT4ge1xyXG4gICAgLy8gY29uc3QgZG9uZUZvcm1WaXMgPSBzdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLnZpc2liaWxpdHkuZmlsdGVyKCh2YWwpID0+IHtcclxuICAgIC8vICAgcmV0dXJuIHZhbC5maWxlICE9PSBudWxsICYmIHZhbC50eXBlICE9PSBudWxsO1xyXG4gICAgLy8gfSk7XHJcbiAgICAvLyBjb25zdCBkb25lRm9ybUF2YSA9IHN0YXRlLnZpc2l0UGxhblJlZHVjZXIuYXZhYmlsaXR5O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlbmRlcl9kYXRhfT5cclxuICAgICAgICAgIHt0eXBlfVxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwicmlnaHRcIiB9fT5cclxuICAgICAgICAgICAge3R5cGUgPT09IFwiVmlzaWJpbGl0eVwiXHJcbiAgICAgICAgICAgICAgPyBgNi82YFxyXG4gICAgICAgICAgICAgIDogdHlwZSA9PT0gXCJBdmFiaWxpdHlcIlxyXG4gICAgICAgICAgICAgID8gYCR7cHJvZHVjdExpc3QubGVuZ3RofS8yNWBcclxuICAgICAgICAgICAgICA6IFwiXCJ9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNnB4XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVuZGVyX3ZhbHVlfT5cclxuICAgICAgICAgICAge3R5cGUgPT09IFwiQ2F0YXRhblwiID8gKFxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBib3JkZXI6IFwibm9uZVwiLCBoZWlnaHQ6IFwiNzBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAge2RhdGF9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiB0eXBlID09PSBcIlZpc2liaWxpdHlcIiB8fCB0eXBlID09PSBcIkF2YWJpbGl0eVwiID8gKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7dHlwZSA9PT0gXCJWaXNpYmlsaXR5XCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfYmFyfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfYmFyX25vd31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYDEwMCVgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApIDogdHlwZSA9PT0gXCJBdmFiaWxpdHlcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJ9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJfbm93fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHsocHJvZHVjdExpc3QubGVuZ3RoIC8gMjUpICogMTAwfSVgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgaHJlZj17XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gXCJWaXNpYmlsaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgID8gYC92aXNpdC9wbGFuL2hpc3RvcnkvJHtwbGFuWzBdLmlkVmlzaXRQbGFufS92aXNpYmlsaXR5YFxyXG4gICAgICAgICAgICAgICAgICAgICAgOiB0eXBlID09PSBcIkF2YWJpbGl0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IGAvdmlzaXQvcGxhbi9oaXN0b3J5LyR7cGxhblswXS5pZFZpc2l0UGxhbn0vYXZhYmlsaXR5YFxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiVmlld1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8PntkYXRhfTwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25SZW5kZXJQREYgPSAodmFsKSA9PiB7XHJcbiAgICAvLyBnZXRkYXRhcGRmXHJcbiAgICBzZXRQZGZGb2N1cyh2YWwpO1xyXG4gICAgc2V0UGRmRG93bmxvYWQodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcHJpbnQgPSAoKSA9PiB7XHJcbiAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgbmFtZTogXCJtZVwiLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IGRpdlRvRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW52b2ljZVwiKTtcclxuICAgIGh0bWwyY2FudmFzKGRpdlRvRGlzcGxheSwgeyBzY2FsZTogNSB9KS50aGVuKChjYW52YXMpID0+IHtcclxuICAgICAgY29uc3QgaW1hZ2UgPSB7IHR5cGU6IFwianBlZ1wiLCBxdWFsaXR5OiAwLjk4IH07XHJcbiAgICAgIGNvbnN0IG1hcmdpbiA9IFswLjUsIDAuNV07XHJcblxyXG4gICAgICB2YXIgaW1nV2lkdGggPSA4LjU7XHJcbiAgICAgIHZhciBwYWdlSGVpZ2h0ID0gMTE7XHJcblxyXG4gICAgICB2YXIgaW5uZXJQYWdlV2lkdGggPSBpbWdXaWR0aCAtIG1hcmdpblswXSAqIDI7XHJcbiAgICAgIHZhciBpbm5lclBhZ2VIZWlnaHQgPSBwYWdlSGVpZ2h0IC0gbWFyZ2luWzFdICogMjtcclxuXHJcbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIHBhZ2VzLlxyXG4gICAgICB2YXIgcHhGdWxsSGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcclxuICAgICAgdmFyIHB4UGFnZUhlaWdodCA9IE1hdGguZmxvb3IoY2FudmFzLndpZHRoICogKHBhZ2VIZWlnaHQgLyBpbWdXaWR0aCkpO1xyXG4gICAgICB2YXIgblBhZ2VzID0gTWF0aC5jZWlsKHB4RnVsbEhlaWdodCAvIHB4UGFnZUhlaWdodCk7XHJcblxyXG4gICAgICAvLyBEZWZpbmUgcGFnZUhlaWdodCBzZXBhcmF0ZWx5IHNvIGl0IGNhbiBiZSB0cmltbWVkIG9uIHRoZSBmaW5hbCBwYWdlLlxyXG4gICAgICB2YXIgcGFnZUhlaWdodCA9IGlubmVyUGFnZUhlaWdodDtcclxuXHJcbiAgICAgIC8vIENyZWF0ZSBhIG9uZS1wYWdlIGNhbnZhcyB0byBzcGxpdCB1cCB0aGUgZnVsbCBpbWFnZS5cclxuICAgICAgdmFyIHBhZ2VDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICB2YXIgcGFnZUN0eCA9IHBhZ2VDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICBwYWdlQ2FudmFzLndpZHRoID0gY2FudmFzLndpZHRoO1xyXG4gICAgICBwYWdlQ2FudmFzLmhlaWdodCA9IHB4UGFnZUhlaWdodDtcclxuXHJcbiAgICAgIC8vIEluaXRpYWxpemUgdGhlIFBERi5cclxuICAgICAgdmFyIHBkZiA9IG5ldyBqc1BERihcInBcIiwgXCJpblwiLCBbOC41LCAxMV0pO1xyXG5cclxuICAgICAgZm9yICh2YXIgcGFnZSA9IDA7IHBhZ2UgPCBuUGFnZXM7IHBhZ2UrKykge1xyXG4gICAgICAgIC8vIFRyaW0gdGhlIGZpbmFsIHBhZ2UgdG8gcmVkdWNlIGZpbGUgc2l6ZS5cclxuICAgICAgICBpZiAocGFnZSA9PT0gblBhZ2VzIC0gMSAmJiBweEZ1bGxIZWlnaHQgJSBweFBhZ2VIZWlnaHQgIT09IDApIHtcclxuICAgICAgICAgIHBhZ2VDYW52YXMuaGVpZ2h0ID0gcHhGdWxsSGVpZ2h0ICUgcHhQYWdlSGVpZ2h0O1xyXG4gICAgICAgICAgcGFnZUhlaWdodCA9IChwYWdlQ2FudmFzLmhlaWdodCAqIGlubmVyUGFnZVdpZHRoKSAvIHBhZ2VDYW52YXMud2lkdGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEaXNwbGF5IHRoZSBwYWdlLlxyXG4gICAgICAgIHZhciB3ID0gcGFnZUNhbnZhcy53aWR0aDtcclxuICAgICAgICB2YXIgaCA9IHBhZ2VDYW52YXMuaGVpZ2h0O1xyXG4gICAgICAgIHBhZ2VDdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgIHBhZ2VDdHguZmlsbFJlY3QoMCwgMCwgdywgaCk7XHJcbiAgICAgICAgcGFnZUN0eC5kcmF3SW1hZ2UoY2FudmFzLCAwLCBwYWdlICogcHhQYWdlSGVpZ2h0LCB3LCBoLCAwLCAwLCB3LCBoKTtcclxuXHJcbiAgICAgICAgLy8gQWRkIHRoZSBwYWdlIHRvIHRoZSBQREYuXHJcbiAgICAgICAgaWYgKHBhZ2UgPiAwKSBwZGYuYWRkUGFnZSgpO1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIHZhciBpbWdEYXRhID0gcGFnZUNhbnZhcy50b0RhdGFVUkwoXHJcbiAgICAgICAgICBcImltYWdlL1wiICsgaW1hZ2UudHlwZSxcclxuICAgICAgICAgIGltYWdlLnF1YWxpdHlcclxuICAgICAgICApO1xyXG4gICAgICAgIHBkZi5hZGRJbWFnZShcclxuICAgICAgICAgIGltZ0RhdGEsXHJcbiAgICAgICAgICBpbWFnZS50eXBlLFxyXG4gICAgICAgICAgbWFyZ2luWzFdLFxyXG4gICAgICAgICAgbWFyZ2luWzBdLFxyXG4gICAgICAgICAgaW5uZXJQYWdlV2lkdGgsXHJcbiAgICAgICAgICBwYWdlSGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcGRmLnNhdmUoXCJmaWxlLnBkZlwiKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAge3BkZkRvd25sb2FkID8gKFxyXG4gICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRQZGZEb3dubG9hZChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImF1dG9cIixcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvd1g6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dZOiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjQwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjEwMHB4IGF1dG9cIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEludm9pY2UgZGF0YT17cHJvZHVjdExpc3R9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHByaW50KCl9IHRleHQ9e1wiRG93bmxvYWQgUERGXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgPE5hdlxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e1wiSGlzdG9yeVwifVxyXG4gICAgICAgICAgICAgICAgY29sb3I9e1wid2hpdGVcIn1cclxuICAgICAgICAgICAgICAgIGFjdGlvbj17XCJEb3dubG9hZFwifVxyXG4gICAgICAgICAgICAgICAgYmFja0FjdGlvbj17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBSb3V0ZXIuYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0UGRmRG93bmxvYWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PntyZW5kZXJEZXRhaWwoKX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gcmVuZGVyKCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==