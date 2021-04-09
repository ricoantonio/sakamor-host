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
    return data.map(function (val, index) {
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
          lineNumber: 9,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          style: {
            borderRight: "1px solid black"
          },
          children: val.namaProduk
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
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
          lineNumber: 11,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          style: {
            borderRight: "1px solid black",
            textAlign: "right",
            padding: "0 4px 0 0"
          },
          children: "4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          style: {
            borderRight: "1px solid black",
            textAlign: "right",
            padding: "0 4px 0 0"
          },
          children: "5"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          style: {
            borderRight: "1px solid black"
          },
          children: "ket"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
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
      lineNumber: 54,
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
        lineNumber: 64,
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
          lineNumber: 68,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
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
          lineNumber: 72,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
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
          lineNumber: 76,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
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
          lineNumber: 80,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
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
              lineNumber: 95,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              width: "35%",
              style: {
                borderRight: "1px solid black"
              },
              children: "Nama Produk"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              width: "5%",
              style: {
                borderRight: "1px solid black"
              },
              children: "Qty"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              width: "10%",
              style: {
                borderRight: "1px solid black"
              },
              children: "Harga"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              width: "10%",
              style: {
                borderRight: "1px solid black"
              },
              children: "Total"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              width: "35%",
              style: {
                borderRight: "1px solid black"
              },
              children: "Ket"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
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
              lineNumber: 118,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              style: {
                borderRight: "1px solid black",
                textAlign: "right",
                padding: "0 4px 0 0"
              },
              colSpan: 4
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnZvaWNlLmpzeCJdLCJuYW1lcyI6WyJJbnZvaWNlIiwiZGF0YSIsInJlbmRlclByb2R1Y3QiLCJtYXAiLCJ2YWwiLCJpbmRleCIsImJvcmRlckJvdHRvbSIsImJvcmRlclJpZ2h0IiwibmFtYVByb2R1ayIsInRleHRBbGlnbiIsInBhZGRpbmciLCJqdW1sYWgiLCJjb2xvciIsImZvbnRTaXplIiwiYmFja2dyb3VuZENvbG9yIiwiZm9udFdlaWdodCIsIm1hcmdpbiIsIm1vbWVudCIsImZvcm1hdCIsImRpc3BsYXkiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwid2lkdGgiLCJib3JkZXJUb3AiLCJib3JkZXJMZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUM1QixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDMUIsV0FBT0QsSUFBSSxDQUFDRSxHQUFMLENBQVMsVUFBQ0MsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQzlCLDBCQUNFO0FBQUksYUFBSyxFQUFFO0FBQUVDLHNCQUFZLEVBQUU7QUFBaEIsU0FBWDtBQUFBLGdDQUNFO0FBQUksZUFBSyxFQUFFO0FBQUVDLHVCQUFXLEVBQUU7QUFBZixXQUFYO0FBQUEsb0JBQWdERixLQUFLLEdBQUc7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUksZUFBSyxFQUFFO0FBQUVFLHVCQUFXLEVBQUU7QUFBZixXQUFYO0FBQUEsb0JBQWdESCxHQUFHLENBQUNJO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRTtBQUNFLGVBQUssRUFBRTtBQUNMRCx1QkFBVyxFQUFFLGlCQURSO0FBRUxFLHFCQUFTLEVBQUUsT0FGTjtBQUdMQyxtQkFBTyxF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RGhCLGVBRUU7QUFBSSxpQkFBSyxFQUFFO0FBQUVJLDBCQUFZLEVBQUU7QUFBaEIsYUFBWDtBQUFBLG9DQUNFO0FBQ0UsbUJBQUssRUFBRTtBQUNMQywyQkFBVyxFQUFFLGlCQURSO0FBRUxFLHlCQUFTLEVBQUUsT0FGTjtBQUdMQyx1QkFBTyxFQUFFO0FBSEosZUFEVDtBQU1FLHFCQUFPLEVBQUUsQ0FOWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQVdFO0FBQ0UsbUJBQUssRUFBRTtBQUNMSCwyQkFBVyxFQUFFLGlCQURSO0FBRUxFLHlCQUFTLEVBQUUsT0FGTjtBQUdMQyx1QkFBTyxFQUFFO0FBSEosZUFEVDtBQU1FLHFCQUFPLEVBQUU7QUFOWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBOUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF2Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFrR0QsQ0ExSUQ7O0tBQU1WLE87QUE0SVNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Zpc2l0L3BsYW4vaGlzdG9yeS9baWRdLmE5NDRlMmM3Mjg2ZGZjM2FjNzU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5cclxuY29uc3QgSW52b2ljZSA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IHJlbmRlclByb2R1Y3QgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gZGF0YS5tYXAoKHZhbCwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8dHIgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCBibGFja1wiIH19PlxyXG4gICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlclJpZ2h0OiBcIjFweCBzb2xpZCBibGFja1wiIH19PntpbmRleCArIDF9PC90ZD5cclxuICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXJSaWdodDogXCIxcHggc29saWQgYmxhY2tcIiB9fT57dmFsLm5hbWFQcm9kdWt9PC90ZD5cclxuICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJvcmRlclJpZ2h0OiBcIjFweCBzb2xpZCBibGFja1wiLFxyXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiMCA0cHggMCAwXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt2YWwuanVtbGFofVxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJvcmRlclJpZ2h0OiBcIjFweCBzb2xpZCBibGFja1wiLFxyXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiMCA0cHggMCAwXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDRcclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBib3JkZXJSaWdodDogXCIxcHggc29saWQgYmxhY2tcIixcclxuICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjAgNHB4IDAgMFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA1XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlclJpZ2h0OiBcIjFweCBzb2xpZCBibGFja1wiIH19PmtldDwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGlkPVwiaW52b2ljZVwiXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcclxuICAgICAgICBmb250U2l6ZTogXCIxMHB4XCIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCBibGFja1wiLFxyXG4gICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIFN1cmF0IFBlc2FuYW5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiNnB4XCIsIG1hcmdpbjogXCI1cHhcIiB9fT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJyaWdodFwiLCBtYXJnaW46IFwiMCAxMHB4XCIgfX0+XHJcbiAgICAgICAgICB7bW9tZW50KCkuZm9ybWF0KFwiRCBNTU1NIFlZWVlcIil9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIyNSUgNzUlXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2Pk5hbWEgT3V0bGV0PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJncmlkXCIsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMjUlIDc1JVwiIH19PlxyXG4gICAgICAgICAgPGRpdj5BbGFtYXQ8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImdyaWRcIiwgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCIyNSUgNzUlXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2Pk5vLiBTcDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZ3JpZFwiLCBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjI1JSA3NSVcIiB9fT5cclxuICAgICAgICAgIDxkaXY+VG88L2Rpdj5cclxuICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjZweFwiLCBtYXJnaW46IFwiLTJweFwiIH19PlxyXG4gICAgICAgIDx0YWJsZVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGJvcmRlclRvcDogXCIxcHggc29saWQgYmxhY2tcIixcclxuICAgICAgICAgICAgYm9yZGVyTGVmdDogXCIxcHggc29saWQgYmxhY2tcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHRoZWFkIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgYmxhY2tcIiB9fT5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0aCB3aWR0aD17XCI1JVwifSBzdHlsZT17eyBib3JkZXJSaWdodDogXCIxcHggc29saWQgYmxhY2tcIiB9fT5cclxuICAgICAgICAgICAgICAgIE5vLlxyXG4gICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIHdpZHRoPXtcIjM1JVwifSBzdHlsZT17eyBib3JkZXJSaWdodDogXCIxcHggc29saWQgYmxhY2tcIiB9fT5cclxuICAgICAgICAgICAgICAgIE5hbWEgUHJvZHVrXHJcbiAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICA8dGggd2lkdGg9e1wiNSVcIn0gc3R5bGU9e3sgYm9yZGVyUmlnaHQ6IFwiMXB4IHNvbGlkIGJsYWNrXCIgfX0+XHJcbiAgICAgICAgICAgICAgICBRdHlcclxuICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCB3aWR0aD17XCIxMCVcIn0gc3R5bGU9e3sgYm9yZGVyUmlnaHQ6IFwiMXB4IHNvbGlkIGJsYWNrXCIgfX0+XHJcbiAgICAgICAgICAgICAgICBIYXJnYVxyXG4gICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIHdpZHRoPXtcIjEwJVwifSBzdHlsZT17eyBib3JkZXJSaWdodDogXCIxcHggc29saWQgYmxhY2tcIiB9fT5cclxuICAgICAgICAgICAgICAgIFRvdGFsXHJcbiAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICA8dGggd2lkdGg9e1wiMzUlXCJ9IHN0eWxlPXt7IGJvcmRlclJpZ2h0OiBcIjFweCBzb2xpZCBibGFja1wiIH19PlxyXG4gICAgICAgICAgICAgICAgS2V0XHJcbiAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHtyZW5kZXJQcm9kdWN0KCl9XHJcbiAgICAgICAgICAgIDx0ciBzdHlsZT17eyBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIGJsYWNrXCIgfX0+XHJcbiAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSaWdodDogXCIxcHggc29saWQgYmxhY2tcIixcclxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMCA0cHggMCAwXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgY29sU3Bhbj17Mn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBHcmFuZCBUb3RhbFxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSaWdodDogXCIxcHggc29saWQgYmxhY2tcIixcclxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMCA0cHggMCAwXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgY29sU3Bhbj17NH1cclxuICAgICAgICAgICAgICA+PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW52b2ljZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==