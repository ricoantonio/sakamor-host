webpackHotUpdate_N_E("pages/visit/plan",{

/***/ "./pages/visit/plan/index.jsx":
/*!************************************!*\
  !*** ./pages/visit/plan/index.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Plan; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store */ "./store/index.js");
/* harmony import */ var _styles_pages_Plan_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/pages/Plan.module.css */ "./styles/pages/Plan.module.css");
/* harmony import */ var _styles_pages_Plan_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Plan_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Nav */ "./components/Nav.jsx");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Spinner */ "./components/Spinner.jsx");
/* harmony import */ var _components_DetailPlan__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/DetailPlan */ "./components/DetailPlan.jsx");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/Button */ "./components/Button.jsx");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../constant */ "./constant.js");


var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-new\\pages\\visit\\plan\\index.jsx",
    _s = $RefreshSig$();











function Plan() {
  _s();

  var _this = this;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store__WEBPACK_IMPORTED_MODULE_4__["Stores"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch,
      actions = _useContext.actions;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      plan = _useState[0],
      setPlan = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      search = _useState2[0],
      setSearch = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loading = _useState3[0],
      setLoading = _useState3[1]; // useEffect(() => {
  //   const userData = JSON.parse(localStorage.getItem("user"));
  //   const userMenu = JSON.parse(localStorage.getItem("menu"));
  //   if (userData) {
  //     fetch(
  //       `http://10.100.4.116:8229/api/User/GetAuthorize?username=${userData.username}`
  //     )
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         var auth = data.filter((val) => {
  //           return val.moduleCode === "PLAN";
  //         });
  //         var menu = userMenu.filter((val) => {
  //           return val.moduleCode === "PLAN";
  //         });
  //         if (!(auth && menu)) {
  //           Router.push("/");
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else {
  //     Router.push("/");
  //   }
  // }, [dispatch]);
  // useEffect(() => {
  //   fetch("http://10.100.4.116:8230/api/MasterVisitPlan/GetAllMasterVisitPlan")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setPlan(data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [dispatch]);


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var userData = JSON.parse(localStorage.getItem("user"));
    var userMenu = JSON.parse(localStorage.getItem("menu"));

    if (userData) {
      fetch(_constant__WEBPACK_IMPORTED_MODULE_10__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_10__["API_USER"] + "/GetAuthorize?username=".concat(userData.username), {
        headers: {
          apiKey: _constant__WEBPACK_IMPORTED_MODULE_10__["TOKEN"]
        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        var auth = data.filter(function (val) {
          return val.moduleCode === "PLAN";
        });
        var menu = userMenu.filter(function (val) {
          return val.moduleCode === "PLAN";
        });

        if (!(auth && menu)) {
          next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/");
        }
      })["catch"](function (err) {
        console.log(err);
      });
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/");
    }
  }, [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    fetch(_constant__WEBPACK_IMPORTED_MODULE_10__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_10__["API_MASTER_DATA"] + "/GetAllMasterVisitPlan", {
      headers: {
        apiKey: _constant__WEBPACK_IMPORTED_MODULE_10__["TOKEN"]
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      setPlan(data);
      setLoading(false);
    })["catch"](function (err) {
      console.log(err);
    });
  }, [dispatch]);

  var renderList = function renderList() {
    var filterData = plan.filter(function (val) {
      return val.namaOutlet.toLowerCase().includes(search.toLowerCase()) || val.alamatOutlet.toLowerCase().includes(search.toLowerCase());
    });
    var render = filterData.map(function (val, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_DetailPlan__WEBPACK_IMPORTED_MODULE_8__["default"], {
        data: val
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
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
        lineNumber: 131,
        columnNumber: 9
      }, _this);
    } else {
      return render;
    }
  };

  var render = function render() {
    if (loading) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 14
      }, _this);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_pages_Plan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.container,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_Plan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.wrapper,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Nav__WEBPACK_IMPORTED_MODULE_6__["default"], {
            backHref: "/"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Plan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.title_container,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Plan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.title,
              children: "Visit Plan"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              onChange: function onChange(e) {
                setSearch(e.target.value);
              },
              placeholder: "Search",
              className: _styles_pages_Plan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.input
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Plan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.main,
            children: [renderList(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                marginBottom: "120px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_Plan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.bottom_container,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
                text: "Add"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/visit/plan/history",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_pages_Plan_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.view_history,
                    children: "View History"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 166,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 9
      }, _this);
    }
  };

  return render();
}

_s(Plan, "LKLJGJywtNo/FnlnX54WbScT3DI=");

_c = Plan;

var _c;

$RefreshReg$(_c, "Plan");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlzaXQvcGxhbi9pbmRleC5qc3giXSwibmFtZXMiOlsiUGxhbiIsInVzZUNvbnRleHQiLCJTdG9yZXMiLCJzdGF0ZSIsImRpc3BhdGNoIiwiYWN0aW9ucyIsInVzZVN0YXRlIiwicGxhbiIsInNldFBsYW4iLCJzZWFyY2giLCJzZXRTZWFyY2giLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZUVmZmVjdCIsInVzZXJEYXRhIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZXJNZW51IiwiZmV0Y2giLCJBUElfVVJMIiwiQVBJX1VTRVIiLCJ1c2VybmFtZSIsImhlYWRlcnMiLCJhcGlLZXkiLCJUT0tFTiIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiYXV0aCIsImZpbHRlciIsInZhbCIsIm1vZHVsZUNvZGUiLCJtZW51IiwiUm91dGVyIiwicHVzaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJBUElfTUFTVEVSX0RBVEEiLCJyZW5kZXJMaXN0IiwiZmlsdGVyRGF0YSIsIm5hbWFPdXRsZXQiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiYWxhbWF0T3V0bGV0IiwicmVuZGVyIiwibWFwIiwiaW5kZXgiLCJsZW5ndGgiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Ub3AiLCJjb2xvciIsInN0eWxlcyIsImNvbnRhaW5lciIsIndyYXBwZXIiLCJ0aXRsZV9jb250YWluZXIiLCJ0aXRsZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImlucHV0IiwibWFpbiIsIm1hcmdpbkJvdHRvbSIsImJvdHRvbV9jb250YWluZXIiLCJ2aWV3X2hpc3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFB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QUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBNkJEO0FBQ0YsR0FsQ0Q7O0FBbUNBLFNBQU9uQixNQUFNLEVBQWI7QUFDRDs7R0E3SnVCaEQsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92aXNpdC9wbGFuLmJmODE0ZTMyMWY1ZDJiNmY2MDYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IFN0b3JlcyB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvcGFnZXMvUGxhbi5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgTmF2IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL05hdlwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9TcGlubmVyXCI7XHJcbmltcG9ydCBEZXRhaWxQbGFuIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0RldGFpbFBsYW5cIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9CdXR0b25cIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgQVBJX1VSTCxcclxuICBBUElfVVNFUixcclxuICBUT0tFTixcclxuICBBUElfVklTSVRfUExBTixcclxuICBBUElfTUFTVEVSX0RBVEEsXHJcbn0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGFuKCkge1xyXG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoLCBhY3Rpb25zIH0gPSB1c2VDb250ZXh0KFN0b3Jlcyk7XHJcbiAgY29uc3QgW3BsYW4sIHNldFBsYW5dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xyXG4gIC8vICAgY29uc3QgdXNlck1lbnUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibWVudVwiKSk7XHJcbiAgLy8gICBpZiAodXNlckRhdGEpIHtcclxuICAvLyAgICAgZmV0Y2goXHJcbiAgLy8gICAgICAgYGh0dHA6Ly8xMC4xMDAuNC4xMTY6ODIyOS9hcGkvVXNlci9HZXRBdXRob3JpemU/dXNlcm5hbWU9JHt1c2VyRGF0YS51c2VybmFtZX1gXHJcbiAgLy8gICAgIClcclxuICAvLyAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAvLyAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgLy8gICAgICAgfSlcclxuICAvLyAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gIC8vICAgICAgICAgdmFyIGF1dGggPSBkYXRhLmZpbHRlcigodmFsKSA9PiB7XHJcbiAgLy8gICAgICAgICAgIHJldHVybiB2YWwubW9kdWxlQ29kZSA9PT0gXCJQTEFOXCI7XHJcbiAgLy8gICAgICAgICB9KTtcclxuICAvLyAgICAgICAgIHZhciBtZW51ID0gdXNlck1lbnUuZmlsdGVyKCh2YWwpID0+IHtcclxuICAvLyAgICAgICAgICAgcmV0dXJuIHZhbC5tb2R1bGVDb2RlID09PSBcIlBMQU5cIjtcclxuICAvLyAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgaWYgKCEoYXV0aCAmJiBtZW51KSkge1xyXG4gIC8vICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgLy8gICAgICAgICB9XHJcbiAgLy8gICAgICAgfSlcclxuICAvLyAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gIC8vICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAvLyAgICAgICB9KTtcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAvLyAgIH1cclxuICAvLyB9LCBbZGlzcGF0Y2hdKTtcclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgZmV0Y2goXCJodHRwOi8vMTAuMTAwLjQuMTE2OjgyMzAvYXBpL01hc3RlclZpc2l0UGxhbi9HZXRBbGxNYXN0ZXJWaXNpdFBsYW5cIilcclxuICAvLyAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgLy8gICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAvLyAgICAgfSlcclxuICAvLyAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAvLyAgICAgICBzZXRQbGFuKGRhdGEpO1xyXG4gIC8vICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gIC8vICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XHJcbiAgICBjb25zdCB1c2VyTWVudSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtZW51XCIpKTtcclxuICAgIGlmICh1c2VyRGF0YSkge1xyXG4gICAgICBmZXRjaChcclxuICAgICAgICBBUElfVVJMICsgQVBJX1VTRVIgKyBgL0dldEF1dGhvcml6ZT91c2VybmFtZT0ke3VzZXJEYXRhLnVzZXJuYW1lfWAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgdmFyIGF1dGggPSBkYXRhLmZpbHRlcigodmFsKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWwubW9kdWxlQ29kZSA9PT0gXCJQTEFOXCI7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHZhciBtZW51ID0gdXNlck1lbnUuZmlsdGVyKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbC5tb2R1bGVDb2RlID09PSBcIlBMQU5cIjtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgaWYgKCEoYXV0aCAmJiBtZW51KSkge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH1cclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2goQVBJX1VSTCArIEFQSV9NQVNURVJfREFUQSArIFwiL0dldEFsbE1hc3RlclZpc2l0UGxhblwiLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBzZXRQbGFuKGRhdGEpO1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICBjb25zdCByZW5kZXJMaXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZmlsdGVyRGF0YSA9IHBsYW4uZmlsdGVyKCh2YWwpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICB2YWwubmFtYU91dGxldC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgIHZhbC5hbGFtYXRPdXRsZXQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSlcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgcmVuZGVyID0gZmlsdGVyRGF0YS5tYXAoKHZhbCwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIDxEZXRhaWxQbGFuIGtleT17aW5kZXh9IGRhdGE9e3ZhbH0gLz47XHJcbiAgICB9KTtcclxuICAgIGlmIChmaWx0ZXJEYXRhLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5Ub3A6IFwiMTUwcHhcIiwgY29sb3I6IFwiI2QwZDBkMFwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTm8gSXRlbVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHJlbmRlcjtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgPE5hdiBiYWNrSHJlZj1cIi9cIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+VmlzaXQgUGxhbjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgICAgICAge3JlbmRlckxpc3QoKX1cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMjBweFwiIH19IC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3R0b21fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkFkZFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Zpc2l0L3BsYW4vaGlzdG9yeVwiPlxyXG4gICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZXdfaGlzdG9yeX0+VmlldyBIaXN0b3J5PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiByZW5kZXIoKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9