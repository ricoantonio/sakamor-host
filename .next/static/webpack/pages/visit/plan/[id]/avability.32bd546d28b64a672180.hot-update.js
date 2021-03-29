webpackHotUpdate_N_E("pages/visit/plan/[id]/avability",{

/***/ "./pages/visit/plan/[id]/avability.jsx":
/*!*********************************************!*\
  !*** ./pages/visit/plan/[id]/avability.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return avability; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../styles/pages/VisitPlanDetail.module.css */ "./styles/pages/VisitPlanDetail.module.css");
/* harmony import */ var _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../store */ "./store/index.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/Nav */ "./components/Nav.jsx");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/Spinner */ "./components/Spinner.jsx");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/Button */ "./components/Button.jsx");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/Card */ "./components/Card.jsx");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../constant */ "./constant.js");




var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-new\\pages\\visit\\plan\\[id]\\avability.jsx",
    _s = $RefreshSig$();










function avability() {
  _s();

  var _this = this;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store__WEBPACK_IMPORTED_MODULE_5__["Stores"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch,
      actions = _useContext.actions;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      modal = _useState2[0],
      setModal = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      search = _useState3[0],
      setSearch = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      product = _useState4[0],
      setProduct = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      productFocus = _useState5[0],
      setProductFocus = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      avabilityList = _useState6[0],
      setAvabilityList = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      order = _useState7[0],
      setOrder = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      saranOrder = _useState8[0],
      setSaranOrder = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      stock = _useState9[0],
      setStock = _useState9[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var notEmpty = avabilityList.length > 0;

    if (notEmpty > 0) {
      window.onbeforeunload = function () {
        return "Data will be lost if you leave the page, are you sure?";
      };
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    console.log(state.visitPlanReducer.avability);

    if (state.visitPlanReducer.avability.length > 0) {
      setAvabilityList(Object(C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state.visitPlanReducer.avability));
    }
  }, [dispatch]);

  var onSearchProduct = function onSearchProduct(search) {
    setProductFocus(search);
    fetch(_constant__WEBPACK_IMPORTED_MODULE_10__["API_URL"] + _constant__WEBPACK_IMPORTED_MODULE_10__["API_MASTER"] + "/MasterData/GetProdukLike/".concat(search), {
      headers: {
        apiKey: _constant__WEBPACK_IMPORTED_MODULE_10__["TOKEN"]
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      setProduct(data);
    })["catch"](function (err) {
      console.log(err);
    });
  };

  var renderProductSearch = function renderProductSearch() {
    var render = product.map(function (val, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: function onClick() {
          setProduct([]);
          setProductFocus(val); // console.log(val);
        },
        style: {
          borderBottom: ".5px solid #f0f0f0",
          width: "356px"
        },
        children: val.namaProduk
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this);
    });
    return render;
  };

  var renderModalAdd = function renderModalAdd() {
    if (modal) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.modal_avability,
          onClick: function onClick() {
            setModal(false);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.wrapper,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avability_modal_container,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.add_title,
              children: "Add Product"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avability_modal_subtitle,
              children: "Product"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              onChange: function onChange(e) {
                onSearchProduct(e.target.value);
              },
              placeholder: "Search",
              value: productFocus.namaProduk,
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.input_order_search,
              onClick: function onClick() {
                setProduct([]);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, _this), product ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                position: "absolute",
                maxHeight: "180px",
                backgroundColor: "white",
                overflowY: "scroll",
                maxWidth: "400px",
                padding: "0 4px"
              },
              children: renderProductSearch()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 17
            }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.stock_order_container,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  paddingRight: "10px"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avability_modal_subtitle,
                  children: "Stock (pcs)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  onChange: function onChange(e) {
                    setStock(e.target.value);
                  },
                  placeholder: "0",
                  type: "number",
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.input_order,
                  value: stock
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  paddingLeft: "10px"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avability_modal_subtitle,
                  children: "Saran Order (pcs)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  onChange: function onChange(e) {
                    setSaranOrder(e.target.value);
                  },
                  placeholder: "0",
                  type: "number",
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.input_order,
                  value: saranOrder
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avability_modal_subtitle,
              children: "Order (pcs)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              onChange: function onChange(e) {
                setOrder(e.target.value);
              },
              placeholder: "0",
              type: "number",
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.input_order,
              value: order
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                marginTop: "20px"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
                text: "Add",
                onClick: function onClick() {
                  if (productFocus.namaProduk && stock && saranOrder && order && stock.match("^[1-9][0-9]*$")) {
                    if (avabilityList.length > 0) {
                      var sameDataIndex = avabilityList.findIndex(function (val) {
                        return val.productFocus.namaProduk === productFocus.namaProduk;
                      });

                      if (sameDataIndex + 1) {
                        avabilityList.splice(sameDataIndex, 1);
                        avabilityList.push({
                          productFocus: productFocus,
                          stock: stock,
                          saranOrder: saranOrder,
                          order: order
                        });
                        setModal(false);
                        setStock("");
                        setSaranOrder("");
                        setOrder("");
                      } else {
                        avabilityList.push({
                          productFocus: productFocus,
                          stock: stock,
                          saranOrder: saranOrder,
                          order: order
                        });
                        setModal(false);
                        setStock("");
                        setSaranOrder("");
                        setOrder("");
                      }
                    } else {
                      avabilityList.push({
                        productFocus: productFocus,
                        stock: stock,
                        saranOrder: saranOrder,
                        order: order
                      });
                      setModal(false);
                      setStock("");
                      setSaranOrder("");
                      setOrder("");
                    }
                  }
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, _this)]
      }, void 0, true);
    }
  };

  var renderAvabilityList = function renderAvabilityList() {
    avabilityList.sort(function (a, b) {
      return a.productFocus.namaProduk.localeCompare(b.productFocus.namaProduk);
    });
    var filterData = avabilityList.filter(function (val) {
      return val.productFocus.namaProduk.toLowerCase().includes(search.toLowerCase());
    });
    var render = filterData.map(function (val, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
        style: {
          borderRadius: "5px",
          padding: "30px",
          marginTop: "14px"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          onClick: function onClick() {
            setProductFocus(val.productFocus);
            setStock(val.stock);
            setSaranOrder(val.saranOrder);
            setOrder(val.order);
            setModal(true);
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_title,
            children: val.productFocus.namaProduk
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_stock_container,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_container,
              style: {
                marginRight: "5px"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_subtitle,
                children: "Stock"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 258,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                div: true,
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
                children: [val.stock, " pcs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 259,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 254,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_container,
              style: {
                marginLeft: "5px"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_subtitle,
                children: "Saran Order"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 267,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                div: true,
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
                children: [val.saranOrder, " pcs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 268,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 263,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 253,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_container,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_subtitle,
              children: "Order"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 274,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
              children: [val.order, " pcs"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 275,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 273,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 11
        }, _this)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 9
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
        lineNumber: 283,
        columnNumber: 9
      }, _this);
    } else {
      return render;
    }
  };

  var onSave = function onSave() {
    actions.setAvability(avabilityList);
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/visit/plan/".concat(router.query.id));
  };

  var render = function render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [renderModalAdd(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.wrapper,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Nav__WEBPACK_IMPORTED_MODULE_6__["default"], {
            title: "Avability",
            backHref: "/visit/plan/".concat(router.query.id),
            color: "white",
            action: "Save",
            onClick: function onClick() {
              onSave();
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 303,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.main,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.search_fixed,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  margin: "10px 0 0 0"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.progress_bar
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 315,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.progress_bar_now,
                  style: {
                    width: "".concat(avabilityList.length / 25 * 100, "%")
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 316,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 314,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                onChange: function onChange(e) {
                  setSearch(e.target.value);
                },
                placeholder: "Search",
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.input,
                style: {
                  marginTop: "0"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 323,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 313,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                paddingTop: "60px"
              },
              children: [renderAvabilityList(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  marginBottom: "100px"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 334,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 332,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 312,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avability_bot_container,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
              text: "Add",
              onClick: function onClick() {
                setModal(true);
                setProduct([]);
                setProductFocus("");
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 338,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 337,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 9
      }, _this)]
    }, void 0, true);
  };

  return render();
}

_s(avability, "tnfPobsMF+LLwrqj4ATKfVFJeb8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlzaXQvcGxhbi8vYXZhYmlsaXR5LmpzeCJdLCJuYW1lcyI6WyJhdmFiaWxpdHkiLCJ1c2VDb250ZXh0IiwiU3RvcmVzIiwic3RhdGUiLCJkaXNwYXRjaCIsImFjdGlvbnMiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibW9kYWwiLCJzZXRNb2RhbCIsInNlYXJjaCIsInNldFNlYXJjaCIsInByb2R1Y3QiLCJzZXRQcm9kdWN0IiwicHJvZHVjdEZvY3VzIiwic2V0UHJvZHVjdEZvY3VzIiwiYXZhYmlsaXR5TGlzdCIsInNldEF2YWJpbGl0eUxpc3QiLCJvcmRlciIsInNldE9yZGVyIiwic2FyYW5PcmRlciIsInNldFNhcmFuT3JkZXIiLCJzdG9jayIsInNldFN0b2NrIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0Iiwibm90RW1wdHkiLCJsZW5ndGgiLCJ3aW5kb3ciLCJvbmJlZm9yZXVubG9hZCIsImNvbnNvbGUiLCJsb2ciLCJ2aXNpdFBsYW5SZWR1Y2VyIiwib25TZWFyY2hQcm9kdWN0IiwiZmV0Y2giLCJBUElfVVJMIiwiQVBJX01BU1RFUiIsImhlYWRlcnMiLCJhcGlLZXkiLCJUT0tFTiIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZXJyIiwicmVuZGVyUHJvZHVjdFNlYXJjaCIsInJlbmRlciIsIm1hcCIsInZhbCIsImluZGV4IiwiYm9yZGVyQm90dG9tIiwid2lkdGgiLCJuYW1hUHJvZHVrIiwicmVuZGVyTW9kYWxBZGQiLCJzdHlsZXMiLCJtb2RhbF9hdmFiaWxpdHkiLCJ3cmFwcGVyIiwiYXZhYmlsaXR5X21vZGFsX2NvbnRhaW5lciIsImFkZF90aXRsZSIsImF2YWJpbGl0eV9tb2RhbF9zdWJ0aXRsZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImlucHV0X29yZGVyX3NlYXJjaCIsInBvc2l0aW9uIiwibWF4SGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwib3ZlcmZsb3dZIiwibWF4V2lkdGgiLCJwYWRkaW5nIiwic3RvY2tfb3JkZXJfY29udGFpbmVyIiwicGFkZGluZ1JpZ2h0IiwiaW5wdXRfb3JkZXIiLCJwYWRkaW5nTGVmdCIsIm1hcmdpblRvcCIsIm1hdGNoIiwic2FtZURhdGFJbmRleCIsImZpbmRJbmRleCIsInNwbGljZSIsInB1c2giLCJyZW5kZXJBdmFiaWxpdHlMaXN0Iiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsImZpbHRlckRhdGEiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiYm9yZGVyUmFkaXVzIiwiYXZhYmlsaXR5bGlzdF90aXRsZSIsImF2YWJpbGl0eWxpc3Rfc3RvY2tfY29udGFpbmVyIiwiYXZhYmlsaXR5bGlzdF9jb250YWluZXIiLCJtYXJnaW5SaWdodCIsImF2YWJpbGl0eWxpc3Rfc3VidGl0bGUiLCJhdmFiaWxpdHlsaXN0X3ZhbHVlIiwibWFyZ2luTGVmdCIsInRleHRBbGlnbiIsImNvbG9yIiwib25TYXZlIiwic2V0QXZhYmlsaXR5IiwiUm91dGVyIiwicXVlcnkiLCJpZCIsImNvbnRhaW5lciIsIm1haW4iLCJzZWFyY2hfZml4ZWQiLCJtYXJnaW4iLCJwcm9ncmVzc19iYXIiLCJwcm9ncmVzc19iYXJfbm93IiwiaW5wdXQiLCJwYWRkaW5nVG9wIiwibWFyZ2luQm90dG9tIiwiYXZhYmlsaXR5X2JvdF9jb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFRZSxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBQUE7O0FBQUEsb0JBQ0dDLHdEQUFVLENBQUNDLDZDQUFELENBRGI7QUFBQSxNQUMxQkMsS0FEMEIsZUFDMUJBLEtBRDBCO0FBQUEsTUFDbkJDLFFBRG1CLGVBQ25CQSxRQURtQjtBQUFBLE1BQ1RDLE9BRFMsZUFDVEEsT0FEUzs7QUFBQSxrQkFFSkMs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QSx5QkFDRy9CLG1CQUFtQixFQUR0QixlQUVFO0FBQUsscUJBQUssRUFBRTtBQUFFZ0MsOEJBQVksRUFBRTtBQUFoQjtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVkYsZUFtQ0U7QUFBSyxxQkFBUyxFQUFFMUQsK0VBQU0sQ0FBQzJELHVCQUF2QjtBQUFBLG1DQUNFLHFFQUFDLDBEQUFEO0FBQ0Usa0JBQUksRUFBRSxLQURSO0FBRUUscUJBQU8sRUFBRSxtQkFBTTtBQUNiekcsd0JBQVEsQ0FBQyxJQUFELENBQVI7QUFDQUksMEJBQVUsQ0FBQyxFQUFELENBQVY7QUFDQUUsK0JBQWUsQ0FBQyxFQUFELENBQWY7QUFDRDtBQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQW5DRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQSxvQkFERjtBQXFERCxHQXRERDs7QUF1REEsU0FBT2dDLE1BQU0sRUFBYjtBQUNEOztHQTdVdUJoRCxTO1VBV1AwQixxRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92aXNpdC9wbGFuL1tpZF0vYXZhYmlsaXR5LjMyYmQ1NDZkMjhiNjRhNjcyMTgwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi8uLi9zdHlsZXMvcGFnZXMvVmlzaXRQbGFuRGV0YWlsLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCB7IFN0b3JlcyB9IGZyb20gXCIuLi8uLi8uLi8uLi9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IE5hdiBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9OYXZcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvU3Bpbm5lclwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL0J1dHRvblwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9DYXJkXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIEFQSV9VUkwsXHJcbiAgQVBJX1VTRVIsXHJcbiAgVE9LRU4sXHJcbiAgQVBJX1ZJU0lUX1BMQU4sXHJcbiAgQVBJX01BU1RFUixcclxufSBmcm9tIFwiLi4vLi4vLi4vLi4vY29uc3RhbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF2YWJpbGl0eSgpIHtcclxuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCwgYWN0aW9ucyB9ID0gdXNlQ29udGV4dChTdG9yZXMpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJvZHVjdCwgc2V0UHJvZHVjdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Byb2R1Y3RGb2N1cywgc2V0UHJvZHVjdEZvY3VzXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbYXZhYmlsaXR5TGlzdCwgc2V0QXZhYmlsaXR5TGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW29yZGVyLCBzZXRPcmRlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc2FyYW5PcmRlciwgc2V0U2FyYW5PcmRlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3RvY2ssIHNldFN0b2NrXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgbm90RW1wdHkgPSBhdmFiaWxpdHlMaXN0Lmxlbmd0aCA+IDA7XHJcbiAgICBpZiAobm90RW1wdHkgPiAwKSB7XHJcbiAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gXCJEYXRhIHdpbGwgYmUgbG9zdCBpZiB5b3UgbGVhdmUgdGhlIHBhZ2UsIGFyZSB5b3Ugc3VyZT9cIjtcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9KTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coc3RhdGUudmlzaXRQbGFuUmVkdWNlci5hdmFiaWxpdHkpO1xyXG4gICAgaWYgKHN0YXRlLnZpc2l0UGxhblJlZHVjZXIuYXZhYmlsaXR5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgc2V0QXZhYmlsaXR5TGlzdChbLi4uc3RhdGUudmlzaXRQbGFuUmVkdWNlci5hdmFiaWxpdHldKTtcclxuICAgIH1cclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgY29uc3Qgb25TZWFyY2hQcm9kdWN0ID0gKHNlYXJjaCkgPT4ge1xyXG4gICAgc2V0UHJvZHVjdEZvY3VzKHNlYXJjaCk7XHJcblxyXG4gICAgZmV0Y2goQVBJX1VSTCArIEFQSV9NQVNURVIgKyBgL01hc3RlckRhdGEvR2V0UHJvZHVrTGlrZS8ke3NlYXJjaH1gLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlLZXk6IFRPS0VOLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBzZXRQcm9kdWN0KGRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVyUHJvZHVjdFNlYXJjaCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJlbmRlciA9IHByb2R1Y3QubWFwKCh2YWwsIGluZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRQcm9kdWN0KFtdKTtcclxuICAgICAgICAgICAgc2V0UHJvZHVjdEZvY3VzKHZhbCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogXCIuNXB4IHNvbGlkICNmMGYwZjBcIiwgd2lkdGg6IFwiMzU2cHhcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt2YWwubmFtYVByb2R1a31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlbmRlcjtcclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlck1vZGFsQWRkID0gKCkgPT4ge1xyXG4gICAgaWYgKG1vZGFsKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxfYXZhYmlsaXR5fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0TW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlfbW9kYWxfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZF90aXRsZX0+QWRkIFByb2R1Y3Q8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eV9tb2RhbF9zdWJ0aXRsZX0+UHJvZHVjdDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIG9uU2VhcmNoUHJvZHVjdChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb2R1Y3RGb2N1cy5uYW1hUHJvZHVrfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfb3JkZXJfc2VhcmNofVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRQcm9kdWN0KFtdKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7cHJvZHVjdCA/IChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogXCIxODBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93WTogXCJzY3JvbGxcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCI0MDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMCA0cHhcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3JlbmRlclByb2R1Y3RTZWFyY2goKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RvY2tfb3JkZXJfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlfbW9kYWxfc3VidGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIFN0b2NrIChwY3MpXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFN0b2NrKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfb3JkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0b2NrfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlfbW9kYWxfc3VidGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIFNhcmFuIE9yZGVyIChwY3MpXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFNhcmFuT3JkZXIoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF9vcmRlcn1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2FyYW5PcmRlcn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5X21vZGFsX3N1YnRpdGxlfT5PcmRlciAocGNzKTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldE9yZGVyKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF9vcmRlcn1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtvcmRlcn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgdGV4dD17XCJBZGRcIn1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGb2N1cy5uYW1hUHJvZHVrICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdG9jayAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2FyYW5PcmRlciAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgb3JkZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIHN0b2NrLm1hdGNoKFwiXlsxLTldWzAtOV0qJFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGF2YWJpbGl0eUxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2FtZURhdGFJbmRleCA9IGF2YWJpbGl0eUxpc3QuZmluZEluZGV4KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICh2YWwpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWwucHJvZHVjdEZvY3VzLm5hbWFQcm9kdWsgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Rm9jdXMubmFtYVByb2R1a1xyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2FtZURhdGFJbmRleCArIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdmFiaWxpdHlMaXN0LnNwbGljZShzYW1lRGF0YUluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdmFiaWxpdHlMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZvY3VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXJhbk9yZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0b2NrKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNhcmFuT3JkZXIoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3JkZXIoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhYmlsaXR5TGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGb2N1cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b2NrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FyYW5PcmRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1vZGFsKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTdG9jayhcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTYXJhbk9yZGVyKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldE9yZGVyKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdmFiaWxpdHlMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGb2N1cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9jayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzYXJhbk9yZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdG9jayhcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2FyYW5PcmRlcihcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3JkZXIoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlckF2YWJpbGl0eUxpc3QgPSAoKSA9PiB7XHJcbiAgICBhdmFiaWxpdHlMaXN0LnNvcnQoKGEsIGIpID0+XHJcbiAgICAgIGEucHJvZHVjdEZvY3VzLm5hbWFQcm9kdWsubG9jYWxlQ29tcGFyZShiLnByb2R1Y3RGb2N1cy5uYW1hUHJvZHVrKVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGZpbHRlckRhdGEgPSBhdmFiaWxpdHlMaXN0LmZpbHRlcigodmFsKSA9PiB7XHJcbiAgICAgIHJldHVybiB2YWwucHJvZHVjdEZvY3VzLm5hbWFQcm9kdWtcclxuICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgIC5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHJlbmRlciA9IGZpbHRlckRhdGEubWFwKCh2YWwsIGluZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcmRcclxuICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI1cHhcIiwgcGFkZGluZzogXCIzMHB4XCIsIG1hcmdpblRvcDogXCIxNHB4XCIgfX1cclxuICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0UHJvZHVjdEZvY3VzKHZhbC5wcm9kdWN0Rm9jdXMpO1xyXG4gICAgICAgICAgICAgIHNldFN0b2NrKHZhbC5zdG9jayk7XHJcbiAgICAgICAgICAgICAgc2V0U2FyYW5PcmRlcih2YWwuc2FyYW5PcmRlcik7XHJcbiAgICAgICAgICAgICAgc2V0T3JkZXIodmFsLm9yZGVyKTtcclxuICAgICAgICAgICAgICBzZXRNb2RhbCh0cnVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X3RpdGxlfT5cclxuICAgICAgICAgICAgICB7dmFsLnByb2R1Y3RGb2N1cy5uYW1hUHJvZHVrfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X3N0b2NrX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF9jb250YWluZXJ9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF9zdWJ0aXRsZX0+U3RvY2s8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3RfdmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICB7dmFsLnN0b2NrfSBwY3NcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3RfY29udGFpbmVyfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF9zdWJ0aXRsZX0+U2FyYW4gT3JkZXI8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3RfdmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICB7dmFsLnNhcmFuT3JkZXJ9IHBjc1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3RfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3Rfc3VidGl0bGV9Pk9yZGVyPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X3ZhbHVlfT57dmFsLm9yZGVyfSBwY3M8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIGlmIChmaWx0ZXJEYXRhLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5Ub3A6IFwiMTUwcHhcIiwgY29sb3I6IFwiI2QwZDBkMFwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTm8gSXRlbVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHJlbmRlcjtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IG9uU2F2ZSA9ICgpID0+IHtcclxuICAgIGFjdGlvbnMuc2V0QXZhYmlsaXR5KGF2YWJpbGl0eUxpc3QpO1xyXG4gICAgUm91dGVyLnB1c2goYC92aXNpdC9wbGFuLyR7cm91dGVyLnF1ZXJ5LmlkfWApO1xyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICB7cmVuZGVyTW9kYWxBZGQoKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8TmF2XHJcbiAgICAgICAgICAgICAgdGl0bGU9e1wiQXZhYmlsaXR5XCJ9XHJcbiAgICAgICAgICAgICAgYmFja0hyZWY9e2AvdmlzaXQvcGxhbi8ke3JvdXRlci5xdWVyeS5pZH1gfVxyXG4gICAgICAgICAgICAgIGNvbG9yPXtcIndoaXRlXCJ9XHJcbiAgICAgICAgICAgICAgYWN0aW9uPXtcIlNhdmVcIn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvblNhdmUoKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoX2ZpeGVkfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjEwcHggMCAwIDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJ9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfYmFyX25vd31cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGAkeyhhdmFiaWxpdHlMaXN0Lmxlbmd0aCAvIDI1KSAqIDEwMH0lYCxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMFwiIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCI2MHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICB7cmVuZGVyQXZhYmlsaXR5TGlzdCgpfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTAwcHhcIiB9fSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlfYm90X2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdGV4dD17XCJBZGRcIn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0TW9kYWwodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldFByb2R1Y3QoW10pO1xyXG4gICAgICAgICAgICAgICAgICBzZXRQcm9kdWN0Rm9jdXMoXCJcIik7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9O1xyXG4gIHJldHVybiByZW5kZXIoKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9