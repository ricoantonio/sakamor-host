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
    setProductFocus(search); // API_URL+API_VISIT_PLAN

    fetch("http://10.100.4.116:8233/api/MasterData/GetProdukLike/".concat(search)).then(function (response) {
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
        lineNumber: 59,
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
          lineNumber: 78,
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
              lineNumber: 86,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avability_modal_subtitle,
              children: "Product"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
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
              lineNumber: 88,
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
              lineNumber: 100,
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
                  lineNumber: 115,
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
                  lineNumber: 118,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 114,
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
                  lineNumber: 129,
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
                  lineNumber: 132,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avability_modal_subtitle,
              children: "Order (pcs)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
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
              lineNumber: 144,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                marginTop: "20px"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
                text: "Add",
                onClick: function onClick() {
                  if (productFocus.namaProduk && stock && saranOrder && order) {
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
                lineNumber: 154,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
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
            lineNumber: 239,
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
                lineNumber: 247,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                div: true,
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
                children: [val.stock, " pcs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 248,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 243,
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
                lineNumber: 256,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                div: true,
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
                children: [val.saranOrder, " pcs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 257,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_container,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_subtitle,
              children: "Order"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 263,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
              children: [val.order, " pcs"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 264,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 262,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 11
        }, _this)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 226,
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
        lineNumber: 272,
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
        className: "".concat(_styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container, " ").concat(modal ? _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.hidden_overflow : ""),
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
            lineNumber: 296,
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
                  lineNumber: 308,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.progress_bar_now,
                  style: {
                    width: "".concat(avabilityList.length / 25 * 100, "%")
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 309,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 307,
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
                lineNumber: 316,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 306,
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
                lineNumber: 327,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 325,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 305,
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
              lineNumber: 331,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 330,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 290,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlzaXQvcGxhbi8vYXZhYmlsaXR5LmpzeCJdLCJuYW1lcyI6WyJhdmFiaWxpdHkiLCJ1c2VDb250ZXh0IiwiU3RvcmVzIiwic3RhdGUiLCJkaXNwYXRjaCIsImFjdGlvbnMiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibW9kYWwiLCJzZXRNb2RhbCIsInNlYXJjaCIsInNldFNlYXJjaCIsInByb2R1Y3QiLCJzZXRQcm9kdWN0IiwicHJvZHVjdEZvY3VzIiwic2V0UHJvZHVjdEZvY3VzIiwiYXZhYmlsaXR5TGlzdCIsInNldEF2YWJpbGl0eUxpc3QiLCJvcmRlciIsInNldE9yZGVyIiwic2FyYW5PcmRlciIsInNldFNhcmFuT3JkZXIiLCJzdG9jayIsInNldFN0b2NrIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0Iiwibm90RW1wdHkiLCJsZW5ndGgiLCJ3aW5kb3ciLCJvbmJlZm9yZXVubG9hZCIsImNvbnNvbGUiLCJsb2ciLCJ2aXNpdFBsYW5SZWR1Y2VyIiwib25TZWFyY2hQcm9kdWN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImVyciIsInJlbmRlclByb2R1Y3RTZWFyY2giLCJyZW5kZXIiLCJtYXAiLCJ2YWwiLCJpbmRleCIsImJvcmRlckJvdHRvbSIsIndpZHRoIiwibmFtYVByb2R1ayIsInJlbmRlck1vZGFsQWRkIiwic3R5bGVzIiwibW9kYWxfYXZhYmlsaXR5Iiwid3JhcHBlciIsImF2YWJpbGl0eV9tb2RhbF9jb250YWluZXIiLCJhZGRfdGl0bGUiLCJhdmFiaWxpdHlfbW9kYWxfc3VidGl0bGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJpbnB1dF9vcmRlcl9zZWFyY2giLCJwb3NpdGlvbiIsIm1heEhlaWdodCIsImJhY2tncm91bmRDb2xvciIsIm92ZXJmbG93WSIsIm1heFdpZHRoIiwicGFkZGluZyIsInN0b2NrX29yZGVyX2NvbnRhaW5lciIsInBhZGRpbmdSaWdodCIsImlucHV0X29yZGVyIiwicGFkZGluZ0xlZnQiLCJtYXJnaW5Ub3AiLCJzYW1lRGF0YUluZGV4IiwiZmluZEluZGV4Iiwic3BsaWNlIiwicHVzaCIsInJlbmRlckF2YWJpbGl0eUxpc3QiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwiZmlsdGVyRGF0YSIsImZpbHRlciIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJib3JkZXJSYWRpdXMiLCJhdmFiaWxpdHlsaXN0X3RpdGxlIiwiYXZhYmlsaXR5bGlzdF9zdG9ja19jb250YWluZXIiLCJhdmFiaWxpdHlsaXN0X2NvbnRhaW5lciIsIm1hcmdpblJpZ2h0IiwiYXZhYmlsaXR5bGlzdF9zdWJ0aXRsZSIsImF2YWJpbGl0eWxpc3RfdmFsdWUiLCJtYXJnaW5MZWZ0IiwidGV4dEFsaWduIiwiY29sb3IiLCJvblNhdmUiLCJzZXRBdmFiaWxpdHkiLCJSb3V0ZXIiLCJxdWVyeSIsImlkIiwiY29udGFpbmVyIiwiaGlkZGVuX292ZXJmbG93IiwibWFpbiIsInNlYXJjaF9maXhlZCIsIm1hcmdpbiIsInByb2dyZXNzX2JhciIsInByb2dyZXNzX2Jhcl9ub3ciLCJpbnB1dCIsInBhZGRpbmdUb3AiLCJtYXJnaW5Cb3R0b20iLCJhdmFiaWxpdHlfYm90X2NvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLFNBQVQsR0FBcUI7QUFBQTs7QUFBQTs7QUFBQSxvQkFDR0Msd0RBQVUsQ0FBQ0MsNkNBQUQsQ0FEYjtBQUFBLE1BQzFCQyxLQUQwQixlQUMxQkEsS0FEMEI7QUFBQSxNQUNuQkMsUUFEbUIsZUFDbkJBLFFBRG1CO0FBQUEsTUFDVEMsT0FEUyxlQUNUQSxPQURTOztBQUFBLGtCQUVKQyxzREFBUSxDQUFDLElBQUQsQ0FGSjtBQUFBLE1BRTNCQyxPQUYyQjtB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O0FBQUE7QUFBQTtBQUFBLHFCQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVkYsZUFtQ0U7QUFBSyxxQkFBUyxFQUFFMUQsK0VBQU0sQ0FBQzJELHVCQUF2QjtBQUFBLG1DQUNFLHFFQUFDLDBEQUFEO0FBQ0Usa0JBQUksRUFBRSxLQURSO0FBRUUscUJBQU8sRUFBRSxtQkFBTTtBQUNicEcsd0JBQVEsQ0FBQyxJQUFELENBQVI7QUFDQUksMEJBQVUsQ0FBQyxFQUFELENBQVY7QUFDQUUsK0JBQWUsQ0FBQyxFQUFELENBQWY7QUFDRDtBQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQW5DRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQSxvQkFERjtBQXlERCxHQTFERDs7QUEyREEsU0FBTzJCLE1BQU0sRUFBYjtBQUNEOztHQTVVdUIzQyxTO1VBV1AwQixxRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92aXNpdC9wbGFuL1tpZF0vYXZhYmlsaXR5LmVhZGQ3NmE1NGFiOWQyYWViNjUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi8uLi9zdHlsZXMvcGFnZXMvVmlzaXRQbGFuRGV0YWlsLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCB7IFN0b3JlcyB9IGZyb20gXCIuLi8uLi8uLi8uLi9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IE5hdiBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9OYXZcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvU3Bpbm5lclwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL0J1dHRvblwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9DYXJkXCI7XHJcblxyXG5pbXBvcnQgeyBBUElfVVJMLCBBUElfVVNFUiwgVE9LRU4sIEFQSV9WSVNJVF9QTEFOIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbnN0YW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhdmFiaWxpdHkoKSB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2gsIGFjdGlvbnMgfSA9IHVzZUNvbnRleHQoU3RvcmVzKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Byb2R1Y3QsIHNldFByb2R1Y3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtwcm9kdWN0Rm9jdXMsIHNldFByb2R1Y3RGb2N1c10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2F2YWJpbGl0eUxpc3QsIHNldEF2YWJpbGl0eUxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtvcmRlciwgc2V0T3JkZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3NhcmFuT3JkZXIsIHNldFNhcmFuT3JkZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3N0b2NrLCBzZXRTdG9ja10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG5vdEVtcHR5ID0gYXZhYmlsaXR5TGlzdC5sZW5ndGggPiAwO1xyXG4gICAgaWYgKG5vdEVtcHR5ID4gMCkge1xyXG4gICAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiRGF0YSB3aWxsIGJlIGxvc3QgaWYgeW91IGxlYXZlIHRoZSBwYWdlLCBhcmUgeW91IHN1cmU/XCI7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHN0YXRlLnZpc2l0UGxhblJlZHVjZXIuYXZhYmlsaXR5KTtcclxuICAgIGlmIChzdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLmF2YWJpbGl0eS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHNldEF2YWJpbGl0eUxpc3QoWy4uLnN0YXRlLnZpc2l0UGxhblJlZHVjZXIuYXZhYmlsaXR5XSk7XHJcbiAgICB9XHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIGNvbnN0IG9uU2VhcmNoUHJvZHVjdCA9IChzZWFyY2gpID0+IHtcclxuICAgIHNldFByb2R1Y3RGb2N1cyhzZWFyY2gpO1xyXG4gICAgLy8gQVBJX1VSTCtBUElfVklTSVRfUExBTlxyXG4gICAgZmV0Y2goYGh0dHA6Ly8xMC4xMDAuNC4xMTY6ODIzMy9hcGkvTWFzdGVyRGF0YS9HZXRQcm9kdWtMaWtlLyR7c2VhcmNofWApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0UHJvZHVjdChkYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlclByb2R1Y3RTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICBjb25zdCByZW5kZXIgPSBwcm9kdWN0Lm1hcCgodmFsLCBpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0UHJvZHVjdChbXSk7XHJcbiAgICAgICAgICAgIHNldFByb2R1Y3RGb2N1cyh2YWwpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWwpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICBzdHlsZT17eyBib3JkZXJCb3R0b206IFwiLjVweCBzb2xpZCAjZjBmMGYwXCIsIHdpZHRoOiBcIjM1NnB4XCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dmFsLm5hbWFQcm9kdWt9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZW5kZXI7XHJcbiAgfTtcclxuICBjb25zdCByZW5kZXJNb2RhbEFkZCA9ICgpID0+IHtcclxuICAgIGlmIChtb2RhbCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsX2F2YWJpbGl0eX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldE1vZGFsKGZhbHNlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5X21vZGFsX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRfdGl0bGV9PkFkZCBQcm9kdWN0PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlfbW9kYWxfc3VidGl0bGV9PlByb2R1Y3Q8L2Rpdj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBvblNlYXJjaFByb2R1Y3QoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9kdWN0Rm9jdXMubmFtYVByb2R1a31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0X29yZGVyX3NlYXJjaH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0UHJvZHVjdChbXSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAge3Byb2R1Y3QgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IFwiMTgwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvd1k6IFwic2Nyb2xsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiNDAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjAgNHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtyZW5kZXJQcm9kdWN0U2VhcmNoKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0b2NrX29yZGVyX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdSaWdodDogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5X21vZGFsX3N1YnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICBTdG9jayAocGNzKVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTdG9jayhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0X29yZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdG9ja31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nTGVmdDogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5X21vZGFsX3N1YnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICBTYXJhbiBPcmRlciAocGNzKVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTYXJhbk9yZGVyKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfb3JkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NhcmFuT3JkZXJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eV9tb2RhbF9zdWJ0aXRsZX0+T3JkZXIgKHBjcyk8L2Rpdj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRPcmRlcihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfb3JkZXJ9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17b3JkZXJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHRleHQ9e1wiQWRkXCJ9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Rm9jdXMubmFtYVByb2R1ayAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3RvY2sgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIHNhcmFuT3JkZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIG9yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoYXZhYmlsaXR5TGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzYW1lRGF0YUluZGV4ID0gYXZhYmlsaXR5TGlzdC5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKHZhbCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbC5wcm9kdWN0Rm9jdXMubmFtYVByb2R1ayA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGb2N1cy5uYW1hUHJvZHVrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzYW1lRGF0YUluZGV4ICsgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF2YWJpbGl0eUxpc3Quc3BsaWNlKHNhbWVEYXRhSW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF2YWJpbGl0eUxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Rm9jdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9jayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhcmFuT3JkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNb2RhbChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RvY2soXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2FyYW5PcmRlcihcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRPcmRlcihcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdmFiaWxpdHlMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZvY3VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXJhbk9yZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0b2NrKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNhcmFuT3JkZXIoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3JkZXIoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YWJpbGl0eUxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZvY3VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0b2NrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNhcmFuT3JkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRNb2RhbChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0b2NrKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTYXJhbk9yZGVyKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRPcmRlcihcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVyQXZhYmlsaXR5TGlzdCA9ICgpID0+IHtcclxuICAgIGF2YWJpbGl0eUxpc3Quc29ydCgoYSwgYikgPT5cclxuICAgICAgYS5wcm9kdWN0Rm9jdXMubmFtYVByb2R1ay5sb2NhbGVDb21wYXJlKGIucHJvZHVjdEZvY3VzLm5hbWFQcm9kdWspXHJcbiAgICApO1xyXG4gICAgY29uc3QgZmlsdGVyRGF0YSA9IGF2YWJpbGl0eUxpc3QuZmlsdGVyKCh2YWwpID0+IHtcclxuICAgICAgcmV0dXJuIHZhbC5wcm9kdWN0Rm9jdXMubmFtYVByb2R1a1xyXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgcmVuZGVyID0gZmlsdGVyRGF0YS5tYXAoKHZhbCwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBwYWRkaW5nOiBcIjMwcHhcIiwgbWFyZ2luVG9wOiBcIjE0cHhcIiB9fVxyXG4gICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRQcm9kdWN0Rm9jdXModmFsLnByb2R1Y3RGb2N1cyk7XHJcbiAgICAgICAgICAgICAgc2V0U3RvY2sodmFsLnN0b2NrKTtcclxuICAgICAgICAgICAgICBzZXRTYXJhbk9yZGVyKHZhbC5zYXJhbk9yZGVyKTtcclxuICAgICAgICAgICAgICBzZXRPcmRlcih2YWwub3JkZXIpO1xyXG4gICAgICAgICAgICAgIHNldE1vZGFsKHRydWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3RfdGl0bGV9PlxyXG4gICAgICAgICAgICAgIHt2YWwucHJvZHVjdEZvY3VzLm5hbWFQcm9kdWt9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3Rfc3RvY2tfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X2NvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X3N1YnRpdGxlfT5TdG9jazwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF92YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgIHt2YWwuc3RvY2t9IHBjc1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF9jb250YWluZXJ9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X3N1YnRpdGxlfT5TYXJhbiBPcmRlcjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF92YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgIHt2YWwuc2FyYW5PcmRlcn0gcGNzXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF9zdWJ0aXRsZX0+T3JkZXI8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3RfdmFsdWV9Pnt2YWwub3JkZXJ9IHBjczwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgaWYgKGZpbHRlckRhdGEubGVuZ3RoID09IDApIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpblRvcDogXCIxNTBweFwiLCBjb2xvcjogXCIjZDBkMGQwXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBObyBJdGVtXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gcmVuZGVyO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3Qgb25TYXZlID0gKCkgPT4ge1xyXG4gICAgYWN0aW9ucy5zZXRBdmFiaWxpdHkoYXZhYmlsaXR5TGlzdCk7XHJcbiAgICBSb3V0ZXIucHVzaChgL3Zpc2l0L3BsYW4vJHtyb3V0ZXIucXVlcnkuaWR9YCk7XHJcbiAgfTtcclxuICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIHtyZW5kZXJNb2RhbEFkZCgpfVxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhaW5lcn0gJHtcclxuICAgICAgICAgICAgbW9kYWwgPyBzdHlsZXMuaGlkZGVuX292ZXJmbG93IDogXCJcIlxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgPE5hdlxyXG4gICAgICAgICAgICAgIHRpdGxlPXtcIkF2YWJpbGl0eVwifVxyXG4gICAgICAgICAgICAgIGJhY2tIcmVmPXtgL3Zpc2l0L3BsYW4vJHtyb3V0ZXIucXVlcnkuaWR9YH1cclxuICAgICAgICAgICAgICBjb2xvcj17XCJ3aGl0ZVwifVxyXG4gICAgICAgICAgICAgIGFjdGlvbj17XCJTYXZlXCJ9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb25TYXZlKCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaF9maXhlZH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxMHB4IDAgMCAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfYmFyfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcl9ub3d9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHsoYXZhYmlsaXR5TGlzdC5sZW5ndGggLyAyNSkgKiAxMDB9JWAsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjBcIiB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdUb3A6IFwiNjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAge3JlbmRlckF2YWJpbGl0eUxpc3QoKX1cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwMHB4XCIgfX0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5X2JvdF9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHRleHQ9e1wiQWRkXCJ9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldE1vZGFsKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRQcm9kdWN0KFtdKTtcclxuICAgICAgICAgICAgICAgICAgc2V0UHJvZHVjdEZvY3VzKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfTtcclxuICByZXR1cm4gcmVuZGVyKCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==