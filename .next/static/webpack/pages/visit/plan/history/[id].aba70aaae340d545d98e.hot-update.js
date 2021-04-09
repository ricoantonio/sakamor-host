webpackHotUpdate_N_E("pages/visit/plan/history/[id]",{

/***/ "./components/Invoice.jsx":
/*!********************************!*\
  !*** ./components/Invoice.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-new\\components\\Invoice.jsx",
    _this = undefined;




var Invoice = function Invoice(_ref) {
  var data = _ref.data;

  var renderProduct = function renderProduct() {
    var total = 0;
    return data.map(function (val, index) {
      total += val.totalharga;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
        style: {
          borderBottom: "1px solid black"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          style: {
            borderRight: "1px solid black"
          },
          children: index + 1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          style: {
            borderRight: "1px solid black"
          },
          children: val.namaProduk
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          style: {
            borderRight: "1px solid black",
            textAlign: "right",
            padding: "0 4px 0 0"
          },
          children: val.jumlah
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          style: {
            borderRight: "1px solid black",
            textAlign: "right",
            padding: "0 4px 0 0"
          },
          children: val.harga
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          style: {
            borderRight: "1px solid black",
            textAlign: "right",
            padding: "0 4px 0 0"
          },
          children: val.totalharga
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          style: {
            borderRight: "1px solid black"
          },
          children: val.keterangan
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, _this);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "invoice",
    style: {
      color: "black",
      fontSize: "10px",
      backgroundColor: "white",
      padding: "10px"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        borderBottom: "1px solid black",
        textAlign: "center",
        fontWeight: "bold"
      },
      children: "Surat Pesanan"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        fontSize: "6px",
        margin: "5px"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          textAlign: "right",
          margin: "0 10px"
        },
        children: moment__WEBPACK_IMPORTED_MODULE_2___default()().format("D MMMM YYYY")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "25% 75%"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: "Nama Outlet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "25% 75%"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: "Alamat"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "25% 75%"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: "No. Sp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "25% 75%"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: "To"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        fontSize: "6px",
        margin: "-2px"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
        style: {
          width: "100%",
          textAlign: "center",
          borderTop: "1px solid black",
          borderLeft: "1px solid black"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
          style: {
            borderBottom: "1px solid black"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              width: "5%",
              style: {
                borderRight: "1px solid black"
              },
              children: "No."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              width: "35%",
              style: {
                borderRight: "1px solid black"
              },
              children: "Nama Produk"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              width: "5%",
              style: {
                borderRight: "1px solid black"
              },
              children: "Qty"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              width: "10%",
              style: {
                borderRight: "1px solid black"
              },
              children: "Harga"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              width: "10%",
              style: {
                borderRight: "1px solid black"
              },
              children: "Total"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              width: "35%",
              style: {
                borderRight: "1px solid black"
              },
              children: "Ket"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
          children: [renderProduct(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            style: {
              borderBottom: "1px solid black"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              style: {
                borderRight: "1px solid black",
                textAlign: "right",
                padding: "0 4px 0 0"
              },
              colSpan: 2,
              children: "Grand Total"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              style: {
                borderRight: "1px solid black",
                textAlign: "right",
                padding: "0 4px 0 0"
              },
              colSpan: 4,
              children: total
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, _this);
};

_c = Invoice;
/* harmony default export */ __webpack_exports__["default"] = (Invoice);

var _c;

$RefreshReg$(_c, "Invoice");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnZvaWNlLmpzeCJdLCJuYW1lcyI6WyJJbnZvaWNlIiwiZGF0YSIsInJlbmRlclByb2R1Y3QiLCJ0b3RhbCIsIm1hcCIsInZhbCIsImluZGV4IiwidG90YWxoYXJnYSIsImJvcmRlckJvdHRvbSIsImJvcmRlclJpZ2h0IiwibmFtYVByb2R1ayIsInRleHRBbGlnbiIsInBhZGRpbmciLCJqdW1sYWgiLCJoYXJnYSIsImtldGVyYW5nYW4iLCJjb2xvciIsImZvbnRTaXplIiwiYmFja2dyb3VuZENvbG9yIiwiZm9udFdlaWdodCIsIm1hcmdpbiIsIm1vbWVudCIsImZvcm1hdCIsImRpc3BsYXkiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwid2lkdGgiLCJib3JkZXJUb3AiLCJib3JkZXJMZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUM1QixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDMUIsUUFBSUMsS0FBSyxHQUFHLENBQVo7QUFDQSxXQUFPRixJQUFJLENBQUNHLEdBQUwsQ0FBUyxVQUFDQyxHQUFELEVBQU1DLEtBQU4sRUFBZ0I7QUFDOUJILFdBQUssSUFBSUUsR0FBRyxDQUFDRSxVQUFiO0FBQ0EsMEJBQ0U7QUFBSSxhQUFLLEVBQUU7QUFBRUMsc0JBQVksRUFBRTtBQUFoQixTQUFYO0FBQUEsZ0NBQ0U7QUFBSSxlQUFLLEVBQUU7QUFBRUMsdUJBQVcsRUFBRTtBQUFmLFdBQVg7QUFBQSxvQkFBZ0RILEtBQUssR0FBRztBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBSSxlQUFLLEVBQUU7QUFBRUcsdUJBQVcsRUFBRTtBQUFmLFdBQVg7QUFBQSxvQkFBZ0RKLEdBQUcsQ0FBQ0s7QUFBcEQ7QUFB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bUJBQUssRUFBRTtBQUFFQSwyQkFBVyxFQUFFO0FBQWYsZUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkYsZUE4QkU7QUFBQSxxQkFDR1AsYUFBYSxFQURoQixlQUVFO0FBQUksaUJBQUssRUFBRTtBQUFFTSwwQkFBWSxFQUFFO0FBQWhCLGFBQVg7QUFBQSxvQ0FDRTtBQUNFLG1CQUFLLEVBQUU7QUFDTEMsMkJBQVcsRUFBRSxpQkFEUjtBQUVMRSx5QkFBUyxFQUFFLE9BRk47QUFHTEMsdUJBQU8sRUFBRTtBQUhKLGVBRFQ7QUFNRSxxQkFBTyxFQUFFLENBTlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFXRTtBQUNFLG1CQUFLLEVBQUU7QUFDTEgsMkJBQVcsRUFBRSxpQkFEUjtBQUVMRSx5QkFBUyxFQUFFLE9BRk47QUFHTEMsdUJBQU8sRUFBRTtBQUhKLGVBRFQ7QUFNRSxxQkFBTyxFQUFFLENBTlg7QUFBQSx3QkFRR1Q7QUFSSDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBOUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF2Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvR0QsQ0E5SUQ7O0tBQU1ILE87QUFnSlNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Zpc2l0L3BsYW4vaGlzdG9yeS9baWRdLmFiYTcwYWFhZTM0MGQ1NDVkOThlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5cclxuY29uc3QgSW52b2ljZSA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IHJlbmRlclByb2R1Y3QgPSAoKSA9PiB7XHJcbiAgICB2YXIgdG90YWwgPSAwO1xyXG4gICAgcmV0dXJuIGRhdGEubWFwKCh2YWwsIGluZGV4KSA9PiB7XHJcbiAgICAgIHRvdGFsICs9IHZhbC50b3RhbGhhcmdhO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDx0ciBzdHlsZT17eyBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIGJsYWNrXCIgfX0+XHJcbiAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyUmlnaHQ6IFwiMXB4IHNvbGlkIGJsYWNrXCIgfX0+e2luZGV4ICsgMX08L3RkPlxyXG4gICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlclJpZ2h0OiBcIjFweCBzb2xpZCBibGFja1wiIH19Pnt2YWwubmFtYVByb2R1a308L3RkPlxyXG4gICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyUmlnaHQ6IFwiMXB4IHNvbGlkIGJsYWNrXCIsXHJcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCIwIDRweCAwIDBcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3ZhbC5qdW1sYWh9XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyUmlnaHQ6IFwiMXB4IHNvbGlkIGJsYWNrXCIsXHJcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCIwIDRweCAwIDBcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3ZhbC5oYXJnYX1cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBib3JkZXJSaWdodDogXCIxcHggc29saWQgYmxhY2tcIixcclxuICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjAgNHB4IDAgMFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7dmFsLnRvdGFsaGFyZ2F9XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlclJpZ2h0OiBcIjFweCBzb2xpZCBibGFja1wiIH19Pnt2YWwua2V0ZXJhbmdhbn08L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBpZD1cImludm9pY2VcIlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGNvbG9yOiBcImJsYWNrXCIsXHJcbiAgICAgICAgZm9udFNpemU6IFwiMTBweFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgYmxhY2tcIixcclxuICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICBTdXJhdCBQZXNhbmFuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjZweFwiLCBtYXJnaW46IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwicmlnaHRcIiwgbWFyZ2luOiBcIjAgMTBweFwiIH19PlxyXG4gICAgICAgICAge21vbWVudCgpLmZvcm1hdChcIkQgTU1NTSBZWVlZXCIpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMjUlIDc1JVwiIH19PlxyXG4gICAgICAgICAgPGRpdj5OYW1hIE91dGxldDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjI1JSA3NSVcIiB9fT5cclxuICAgICAgICAgIDxkaXY+QWxhbWF0PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMjUlIDc1JVwiIH19PlxyXG4gICAgICAgICAgPGRpdj5Oby4gU3A8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIyNSUgNzUlXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2PlRvPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogXCI2cHhcIiwgbWFyZ2luOiBcIi0ycHhcIiB9fT5cclxuICAgICAgICA8dGFibGVcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBib3JkZXJUb3A6IFwiMXB4IHNvbGlkIGJsYWNrXCIsXHJcbiAgICAgICAgICAgIGJvcmRlckxlZnQ6IFwiMXB4IHNvbGlkIGJsYWNrXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDx0aGVhZCBzdHlsZT17eyBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIGJsYWNrXCIgfX0+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGggd2lkdGg9e1wiNSVcIn0gc3R5bGU9e3sgYm9yZGVyUmlnaHQ6IFwiMXB4IHNvbGlkIGJsYWNrXCIgfX0+XHJcbiAgICAgICAgICAgICAgICBOby5cclxuICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCB3aWR0aD17XCIzNSVcIn0gc3R5bGU9e3sgYm9yZGVyUmlnaHQ6IFwiMXB4IHNvbGlkIGJsYWNrXCIgfX0+XHJcbiAgICAgICAgICAgICAgICBOYW1hIFByb2R1a1xyXG4gICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIHdpZHRoPXtcIjUlXCJ9IHN0eWxlPXt7IGJvcmRlclJpZ2h0OiBcIjFweCBzb2xpZCBibGFja1wiIH19PlxyXG4gICAgICAgICAgICAgICAgUXR5XHJcbiAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICA8dGggd2lkdGg9e1wiMTAlXCJ9IHN0eWxlPXt7IGJvcmRlclJpZ2h0OiBcIjFweCBzb2xpZCBibGFja1wiIH19PlxyXG4gICAgICAgICAgICAgICAgSGFyZ2FcclxuICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCB3aWR0aD17XCIxMCVcIn0gc3R5bGU9e3sgYm9yZGVyUmlnaHQ6IFwiMXB4IHNvbGlkIGJsYWNrXCIgfX0+XHJcbiAgICAgICAgICAgICAgICBUb3RhbFxyXG4gICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIHdpZHRoPXtcIjM1JVwifSBzdHlsZT17eyBib3JkZXJSaWdodDogXCIxcHggc29saWQgYmxhY2tcIiB9fT5cclxuICAgICAgICAgICAgICAgIEtldFxyXG4gICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7cmVuZGVyUHJvZHVjdCgpfVxyXG4gICAgICAgICAgICA8dHIgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCBibGFja1wiIH19PlxyXG4gICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmlnaHQ6IFwiMXB4IHNvbGlkIGJsYWNrXCIsXHJcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjAgNHB4IDAgMFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNvbFNwYW49ezJ9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgR3JhbmQgVG90YWxcclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmlnaHQ6IFwiMXB4IHNvbGlkIGJsYWNrXCIsXHJcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjAgNHB4IDAgMFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNvbFNwYW49ezR9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3RvdGFsfVxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEludm9pY2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=