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
          children: [pdfDownload ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Modal, {
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
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Invoice__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
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
                console.log("hai");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IaXN0b3J5RGV0YWlsLmpzeCJdLCJuYW1lcyI6WyJIaXN0b3J5RGV0YWlsIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInBsYW4iLCJzZXRQbGFuIiwicHJvZHVjdExpc3QiLCJzZXRQcm9kdWN0TGlzdCIsInBkZkRvd25sb2FkIiwic2V0UGRmRG93bmxvYWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJub3ciLCJEYXRlIiwianNQREYiLCJ1c2VFZmZlY3QiLCJ0aGVuIiwibW9kdWxlIiwidXNlckRhdGEiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicXVlcnkiLCJpZCIsImdldFBsYW5Nb250aGx5SGlzdG9yeSIsImRhdGEiLCJmaWx0ZXIiLCJ2YWwiLCJpZFZpc2l0UGxhbiIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJnZXRJbnZvaWNlRGF0YSIsInJlbmRlckRldGFpbCIsInJlbmRlckRhdGFEZXRhaWwiLCJqZW5pc0NoYW5uZWwiLCJuYW1hT3V0bGV0IiwiYWxhbWF0T3V0bGV0IiwiY2F0YXRhbiIsInR5cGUiLCJzdHlsZXMiLCJyZW5kZXJfZGF0YSIsInRleHRBbGlnbiIsImxlbmd0aCIsIm1hcmdpblRvcCIsImJvcmRlclJhZGl1cyIsInJlbmRlcl92YWx1ZSIsIndpZHRoIiwiYm9yZGVyIiwiaGVpZ2h0IiwicHJvZ3Jlc3NfYmFyIiwicHJvZ3Jlc3NfYmFyX25vdyIsIm9uUmVuZGVyUERGIiwic2V0UGRmRm9jdXMiLCJwcmludCIsIm5hbWUiLCJkaXZUb0Rpc3BsYXkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaHRtbDJjYW52YXMiLCJzY2FsZSIsImNhbnZhcyIsImltYWdlIiwicXVhbGl0eSIsIm1hcmdpbiIsImltZ1dpZHRoIiwicGFnZUhlaWdodCIsImlubmVyUGFnZVdpZHRoIiwiaW5uZXJQYWdlSGVpZ2h0IiwicHhGdWxsSGVpZ2h0IiwicHhQYWdlSGVpZ2h0IiwiTWF0aCIsImZsb29yIiwiblBhZ2VzIiwiY2VpbCIsInBhZ2VDYW52YXMiLCJjcmVhdGVFbGVtZW50IiwicGFnZUN0eCIsImdldENvbnRleHQiLCJwZGYiLCJwYWdlIiwidyIsImgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImRyYXdJbWFnZSIsImFkZFBhZ2UiLCJpbWdEYXRhIiwidG9EYXRhVVJMIiwiYWRkSW1hZ2UiLCJzYXZlIiwicmVuZGVyIiwiY29udGFpbmVyIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3ciLCJvdmVyZmxvd1giLCJvdmVyZmxvd1kiLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwid3JhcHBlciIsIlJvdXRlciIsImJhY2siLCJtYWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFZSxTQUFTQSxhQUFULEdBQXlCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1JDLHNEQUFRLENBQUMsSUFBRCxDQURBO0FBQUEsTUFDL0JDLE9BRCtCO0FBQUEsTUFDdEJDLFVBRHNCOztBQUFBLG1CQUVkRixzREFBUSxDQUFDLEVBQUQsQ0FGTTtBQUFBLE1BRS9CRyxJQUYrQjtBQUFBLE1BRXpCQyxPQUZ5Qjs7QUFBQSxtQkFHQUosc0RBQVEsQ0FBQyxFQUFELENBSFI7QUFBQSxNQUcvQkssV0FIK0I7QUFBQSxNQUdsQkMsY0FIa0I7O0FBQUEsbUJBSUFOLHNEQUFRLENBQUMsS0FBRCxDQUpSO0FBQUEsTUFJL0JPLFdBSitCO0FBQUEsTUFJbEJDLGNBSmtCOztBQU10QyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBSUMsR0FBRyxHQUFHLElBQUlDLElBQUosRUFBVjtBQUVBLE1BQUlDLEtBQUssR0FBRyxJQUFaO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkLGNBQW1DO0FBQ2pDLDhJQUFnQkMsSUFBaEIsQ0FB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O0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBYUU7QUFBSyx1QkFBUyxFQUFFUywrRUFBTSxDQUFDOEQsSUFBdkI7QUFBQSx3QkFBOEJyRSxZQUFZO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQW5DRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERix1QkFERjtBQXVERDtBQUNGLEdBNUREOztBQThEQSxTQUFPMEQsTUFBTSxFQUFiO0FBQ0Q7O0dBNVF1QjVGLGE7VUFNUFcscUQ7OztLQU5PWCxhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Zpc2l0L3BsYW4vaGlzdG9yeS9baWRdLjUwYzMyYmExZGRiZDY2ZGU3ZmVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wYWdlcy9WaXNpdFBsYW5EZXRhaWwubW9kdWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IE5hdiBmcm9tIFwiLi9OYXZcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi9TcGlubmVyXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XHJcblxyXG5pbXBvcnQgeyBnZXRJbnZvaWNlRGF0YSwgZ2V0UGxhbk1vbnRobHlIaXN0b3J5IH0gZnJvbSBcIi4uL2hlbHBlclwiO1xyXG5pbXBvcnQgSW52b2ljZSBmcm9tIFwiLi9JbnZvaWNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIaXN0b3J5RGV0YWlsKCkge1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtwbGFuLCBzZXRQbGFuXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcHJvZHVjdExpc3QsIHNldFByb2R1Y3RMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcGRmRG93bmxvYWQsIHNldFBkZkRvd25sb2FkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XHJcblxyXG4gIGxldCBqc1BERiA9IG51bGw7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICBpbXBvcnQoXCJqc3BkZlwiKS50aGVuKChtb2R1bGUpID0+IHtcclxuICAgICAgICBqc1BERiA9IG1vZHVsZS5kZWZhdWx0O1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xyXG5cclxuICAgIGlmIChyb3V0ZXIucXVlcnkuaWQpIHtcclxuICAgICAgZ2V0UGxhbk1vbnRobHlIaXN0b3J5KHVzZXJEYXRhKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBzZXRQbGFuKFxyXG4gICAgICAgICAgICBkYXRhLmZpbHRlcigodmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbC5pZFZpc2l0UGxhbiA9PT0gcm91dGVyLnF1ZXJ5LmlkO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICBnZXRJbnZvaWNlRGF0YShyb3V0ZXIucXVlcnkuaWQpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIHNldFByb2R1Y3RMaXN0KGRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlci5xdWVyeS5pZF0pO1xyXG5cclxuICBjb25zdCByZW5kZXJEZXRhaWwgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtyZW5kZXJEYXRhRGV0YWlsKFwiSmVuaXMgQ2hhbm5lbFwiLCBwbGFuWzBdLmplbmlzQ2hhbm5lbCl9XHJcbiAgICAgICAge3JlbmRlckRhdGFEZXRhaWwoXCJPdXRsZXRcIiwgcGxhblswXS5uYW1hT3V0bGV0KX1cclxuICAgICAgICB7cmVuZGVyRGF0YURldGFpbChcIkFsYW1hdFwiLCBwbGFuWzBdLmFsYW1hdE91dGxldCl9XHJcbiAgICAgICAge3JlbmRlckRhdGFEZXRhaWwoXCJDYXRhdGFuXCIsIHBsYW5bMF0uY2F0YXRhbil9XHJcbiAgICAgICAge3JlbmRlckRhdGFEZXRhaWwoXCJWaXNpYmlsaXR5XCIpfVxyXG4gICAgICAgIHtyZW5kZXJEYXRhRGV0YWlsKFwiQXZhYmlsaXR5XCIpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyRGF0YURldGFpbCA9ICh0eXBlLCBkYXRhKSA9PiB7XHJcbiAgICAvLyBjb25zdCBkb25lRm9ybVZpcyA9IHN0YXRlLnZpc2l0UGxhblJlZHVjZXIudmlzaWJpbGl0eS5maWx0ZXIoKHZhbCkgPT4ge1xyXG4gICAgLy8gICByZXR1cm4gdmFsLmZpbGUgIT09IG51bGwgJiYgdmFsLnR5cGUgIT09IG51bGw7XHJcbiAgICAvLyB9KTtcclxuICAgIC8vIGNvbnN0IGRvbmVGb3JtQXZhID0gc3RhdGUudmlzaXRQbGFuUmVkdWNlci5hdmFiaWxpdHk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVuZGVyX2RhdGF9PlxyXG4gICAgICAgICAge3R5cGV9XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJyaWdodFwiIH19PlxyXG4gICAgICAgICAgICB7dHlwZSA9PT0gXCJWaXNpYmlsaXR5XCJcclxuICAgICAgICAgICAgICA/IGA2LzZgXHJcbiAgICAgICAgICAgICAgOiB0eXBlID09PSBcIkF2YWJpbGl0eVwiXHJcbiAgICAgICAgICAgICAgPyBgJHtwcm9kdWN0TGlzdC5sZW5ndGh9LzI1YFxyXG4gICAgICAgICAgICAgIDogXCJcIn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxDYXJkIHN0eWxlPXt7IG1hcmdpblRvcDogXCI2cHhcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZW5kZXJfdmFsdWV9PlxyXG4gICAgICAgICAgICB7dHlwZSA9PT0gXCJDYXRhdGFuXCIgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGJvcmRlcjogXCJub25lXCIsIGhlaWdodDogXCI3MHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IHR5cGUgPT09IFwiVmlzaWJpbGl0eVwiIHx8IHR5cGUgPT09IFwiQXZhYmlsaXR5XCIgPyAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIHt0eXBlID09PSBcIlZpc2liaWxpdHlcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJ9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJfbm93fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgMTAwJWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkgOiB0eXBlID09PSBcIkF2YWJpbGl0eVwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcn0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcl9ub3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGAkeyhwcm9kdWN0TGlzdC5sZW5ndGggLyAyNSkgKiAxMDB9JWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICBocmVmPXtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlID09PSBcIlZpc2liaWxpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBgL3Zpc2l0L3BsYW4vaGlzdG9yeS8ke3BsYW5bMF0uaWRWaXNpdFBsYW59L3Zpc2liaWxpdHlgXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IHR5cGUgPT09IFwiQXZhYmlsaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgID8gYC92aXNpdC9wbGFuL2hpc3RvcnkvJHtwbGFuWzBdLmlkVmlzaXRQbGFufS9hdmFiaWxpdHlgXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJWaWV3XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDw+e2RhdGF9PC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblJlbmRlclBERiA9ICh2YWwpID0+IHtcclxuICAgIC8vIGdldGRhdGFwZGZcclxuICAgIHNldFBkZkZvY3VzKHZhbCk7XHJcbiAgICBzZXRQZGZEb3dubG9hZCh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwcmludCA9ICgpID0+IHtcclxuICAgIHZhciBkYXRhID0ge1xyXG4gICAgICBuYW1lOiBcIm1lXCIsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgZGl2VG9EaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnZvaWNlXCIpO1xyXG4gICAgaHRtbDJjYW52YXMoZGl2VG9EaXNwbGF5LCB7IHNjYWxlOiA1IH0pLnRoZW4oKGNhbnZhcykgPT4ge1xyXG4gICAgICBjb25zdCBpbWFnZSA9IHsgdHlwZTogXCJqcGVnXCIsIHF1YWxpdHk6IDAuOTggfTtcclxuICAgICAgY29uc3QgbWFyZ2luID0gWzAuNSwgMC41XTtcclxuXHJcbiAgICAgIHZhciBpbWdXaWR0aCA9IDguNTtcclxuICAgICAgdmFyIHBhZ2VIZWlnaHQgPSAxMTtcclxuXHJcbiAgICAgIHZhciBpbm5lclBhZ2VXaWR0aCA9IGltZ1dpZHRoIC0gbWFyZ2luWzBdICogMjtcclxuICAgICAgdmFyIGlubmVyUGFnZUhlaWdodCA9IHBhZ2VIZWlnaHQgLSBtYXJnaW5bMV0gKiAyO1xyXG5cclxuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBudW1iZXIgb2YgcGFnZXMuXHJcbiAgICAgIHZhciBweEZ1bGxIZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xyXG4gICAgICB2YXIgcHhQYWdlSGVpZ2h0ID0gTWF0aC5mbG9vcihjYW52YXMud2lkdGggKiAocGFnZUhlaWdodCAvIGltZ1dpZHRoKSk7XHJcbiAgICAgIHZhciBuUGFnZXMgPSBNYXRoLmNlaWwocHhGdWxsSGVpZ2h0IC8gcHhQYWdlSGVpZ2h0KTtcclxuXHJcbiAgICAgIC8vIERlZmluZSBwYWdlSGVpZ2h0IHNlcGFyYXRlbHkgc28gaXQgY2FuIGJlIHRyaW1tZWQgb24gdGhlIGZpbmFsIHBhZ2UuXHJcbiAgICAgIHZhciBwYWdlSGVpZ2h0ID0gaW5uZXJQYWdlSGVpZ2h0O1xyXG5cclxuICAgICAgLy8gQ3JlYXRlIGEgb25lLXBhZ2UgY2FudmFzIHRvIHNwbGl0IHVwIHRoZSBmdWxsIGltYWdlLlxyXG4gICAgICB2YXIgcGFnZUNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICAgIHZhciBwYWdlQ3R4ID0gcGFnZUNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgIHBhZ2VDYW52YXMud2lkdGggPSBjYW52YXMud2lkdGg7XHJcbiAgICAgIHBhZ2VDYW52YXMuaGVpZ2h0ID0gcHhQYWdlSGVpZ2h0O1xyXG5cclxuICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgUERGLlxyXG4gICAgICB2YXIgcGRmID0gbmV3IGpzUERGKFwicFwiLCBcImluXCIsIFs4LjUsIDExXSk7XHJcblxyXG4gICAgICBmb3IgKHZhciBwYWdlID0gMDsgcGFnZSA8IG5QYWdlczsgcGFnZSsrKSB7XHJcbiAgICAgICAgLy8gVHJpbSB0aGUgZmluYWwgcGFnZSB0byByZWR1Y2UgZmlsZSBzaXplLlxyXG4gICAgICAgIGlmIChwYWdlID09PSBuUGFnZXMgLSAxICYmIHB4RnVsbEhlaWdodCAlIHB4UGFnZUhlaWdodCAhPT0gMCkge1xyXG4gICAgICAgICAgcGFnZUNhbnZhcy5oZWlnaHQgPSBweEZ1bGxIZWlnaHQgJSBweFBhZ2VIZWlnaHQ7XHJcbiAgICAgICAgICBwYWdlSGVpZ2h0ID0gKHBhZ2VDYW52YXMuaGVpZ2h0ICogaW5uZXJQYWdlV2lkdGgpIC8gcGFnZUNhbnZhcy53aWR0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIERpc3BsYXkgdGhlIHBhZ2UuXHJcbiAgICAgICAgdmFyIHcgPSBwYWdlQ2FudmFzLndpZHRoO1xyXG4gICAgICAgIHZhciBoID0gcGFnZUNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgICAgcGFnZUN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XHJcbiAgICAgICAgcGFnZUN0eC5maWxsUmVjdCgwLCAwLCB3LCBoKTtcclxuICAgICAgICBwYWdlQ3R4LmRyYXdJbWFnZShjYW52YXMsIDAsIHBhZ2UgKiBweFBhZ2VIZWlnaHQsIHcsIGgsIDAsIDAsIHcsIGgpO1xyXG5cclxuICAgICAgICAvLyBBZGQgdGhlIHBhZ2UgdG8gdGhlIFBERi5cclxuICAgICAgICBpZiAocGFnZSA+IDApIHBkZi5hZGRQYWdlKCk7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgdmFyIGltZ0RhdGEgPSBwYWdlQ2FudmFzLnRvRGF0YVVSTChcclxuICAgICAgICAgIFwiaW1hZ2UvXCIgKyBpbWFnZS50eXBlLFxyXG4gICAgICAgICAgaW1hZ2UucXVhbGl0eVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcGRmLmFkZEltYWdlKFxyXG4gICAgICAgICAgaW1nRGF0YSxcclxuICAgICAgICAgIGltYWdlLnR5cGUsXHJcbiAgICAgICAgICBtYXJnaW5bMV0sXHJcbiAgICAgICAgICBtYXJnaW5bMF0sXHJcbiAgICAgICAgICBpbm5lclBhZ2VXaWR0aCxcclxuICAgICAgICAgIHBhZ2VIZWlnaHRcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwZGYuc2F2ZShcImZpbGUucGRmXCIpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICB7cGRmRG93bmxvYWQgPyAoXHJcbiAgICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFBkZkRvd25sb2FkKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93WDogXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvd1k6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNDAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTAwcHggYXV0b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW52b2ljZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcmludCgpfSB0ZXh0PXtcIkRvd25sb2FkIFBERlwifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgIDxOYXZcclxuICAgICAgICAgICAgICAgIHRpdGxlPXtcIkhpc3RvcnlcIn1cclxuICAgICAgICAgICAgICAgIGNvbG9yPXtcIndoaXRlXCJ9XHJcbiAgICAgICAgICAgICAgICBhY3Rpb249e1wiRG93bmxvYWRcIn1cclxuICAgICAgICAgICAgICAgIGJhY2tBY3Rpb249eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgUm91dGVyLmJhY2soKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFpXCIpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT57cmVuZGVyRGV0YWlsKCl9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHJlbmRlcigpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=