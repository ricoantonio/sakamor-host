webpackHotUpdate_N_E("pages/visit/unplan/submit/avability",{

/***/ "./components/Avability.jsx":
/*!**********************************!*\
  !*** ./components/Avability.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Avability; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/pages/VisitPlanDetail.module.css */ "./styles/pages/VisitPlanDetail.module.css");
/* harmony import */ var _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./store/index.js");
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Nav */ "./components/Nav.jsx");
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Spinner */ "./components/Spinner.jsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Button */ "./components/Button.jsx");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Card */ "./components/Card.jsx");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helper */ "./helper.js");




var _jsxFileName = "C:\\Users\\Rico\\Desktop\\Home\\Kalbe app\\sakamor-new\\components\\Avability.jsx",
    _s = $RefreshSig$();










function Avability(_ref) {
  _s();

  var _this = this;

  var type = _ref.type;

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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      renderProductList = _useState3[0],
      setRenderProductList = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      search = _useState4[0],
      setSearch = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      product = _useState5[0],
      setProduct = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      productSearch = _useState6[0],
      setProductSearch = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      productFocus = _useState7[0],
      setProductFocus = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      avabilityList = _useState8[0],
      setAvabilityList = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      order = _useState9[0],
      setOrder = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      saranOrder = _useState10[0],
      setSaranOrder = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      stock = _useState11[0],
      setStock = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      plan = _useState12[0],
      setPlan = _useState12[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var now = new Date();
  var date = now.getDate();
  var month = now.getMonth() + 1;
  var year = now.getFullYear();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var notEmpty = avabilityList.length > 0;

    if (notEmpty > 0) {
      window.onbeforeunload = function () {
        return "Data will be lost if you leave the page, are you sure?";
      };
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (type === "PLAN") {
      if (state.visitPlanReducer.avability.length > 0) {
        setAvabilityList(Object(C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state.visitPlanReducer.avability));
      }
    } else if (type === "UNPLAN") {} else if (type === "SPREADING") {}
  }, [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (type === "PLAN") {
      if (router.query.id) {
        Object(_helper__WEBPACK_IMPORTED_MODULE_10__["getPlanId"])(router.query.id).then(function (_ref2) {
          var samePlan = _ref2.samePlan,
              data = _ref2.data;

          // console.log(samePlan, data);
          if (samePlan.length == 0) {
            next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/visit/plan");
          } else {
            setPlan(data);
            setLoading(false);

            if (!state.visitPlanReducer.checkIn) {
              actions.setPlanCheckIn(now);
            }
          }
        })["catch"](function (err) {
          console.log(err);
        });
      }
    } else if (type === "UNPLAN") {} else if (type === "SPREADING") {}
  }, [router.query.id]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (type === "PLAN") {
      Object(_helper__WEBPACK_IMPORTED_MODULE_10__["getProdukByJenisChannel"])(plan.idJenisChannel).then(function (data) {
        setProduct(data);
      })["catch"](function (err) {
        console.log(err);
      });
    } else if (type === "UNPLAN") {} else if (type === "SPREADING") {}
  }, [plan]);

  var onSearchProduct = function onSearchProduct(search) {
    // setProductFocus(search);
    // getProductSearch(search)
    //   .then((data) => {
    //     setProduct(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });;''''
    setProductSearch(search);
  };

  var renderProductSearch = function renderProductSearch() {
    var render = product.map(function (val, index) {
      if (val.namaProduk.includes(productSearch)) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          onClick: function onClick() {
            // setProduct([]);
            setProductFocus(val);
            setRenderProductList(false);
          },
          style: {
            borderBottom: ".5px solid #f0f0f0",
            width: "356px"
          },
          children: val.namaProduk
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, _this);
      }
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
          lineNumber: 133,
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
              lineNumber: 141,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avability_modal_subtitle,
              children: "Product"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              onChange: function onChange(e) {
                onSearchProduct(e.target.value);
              },
              placeholder: "Search",
              value: productFocus.namaProduk,
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.input_order_search // onClick={() => {
              //   setProduct([]);
              // }}
              ,
              onFocus: function onFocus() {
                return setRenderProductList(true);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 15
            }, _this), product ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                position: "absolute",
                maxHeight: "180px",
                backgroundColor: "white",
                overflowY: "scroll",
                maxWidth: "400px",
                padding: "0 4px",
                zIndex: 999999
              },
              children: renderProductList ? renderProductSearch() : null
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
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
                  lineNumber: 172,
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
                  lineNumber: 175,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 171,
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
                  lineNumber: 186,
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
                  lineNumber: 189,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avability_modal_subtitle,
              children: "Order (pcs)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 200,
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
              lineNumber: 201,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                marginTop: "20px"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
                text: "Add",
                onClick: function onClick() {
                  var reg = new RegExp(/^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/g);

                  if (productFocus.namaProduk && stock.match(reg) && saranOrder.match(reg) && order.match(reg)) {
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
                lineNumber: 211,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
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
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
            lineNumber: 297,
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
                lineNumber: 305,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                div: true,
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
                children: [val.stock, " pcs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 306,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 301,
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
                lineNumber: 314,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                div: true,
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
                children: [val.saranOrder, " pcs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 315,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 310,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 300,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_container,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_subtitle,
              children: "Order"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 321,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
              children: [val.order, " pcs"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 322,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 320,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 11
        }, _this)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 284,
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
        lineNumber: 330,
        columnNumber: 9
      }, _this);
    } else {
      return render;
    }
  };

  var onSave = function onSave() {
    if (type === "PLAN") {
      actions.setPlanAvability(avabilityList); // console.log(avabilityList);

      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/visit/plan/".concat(router.query.id));
    } else if (type === "UNPLAN") {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/visit/unplan/submit");
    } else if (type === "SPREADING") {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/visit/spreading/submit");
    }
  };

  var render = function render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [renderModalAdd(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.wrapper,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Nav__WEBPACK_IMPORTED_MODULE_6__["default"], {
            title: "Avability",
            color: "white",
            action: "Save",
            onClick: function onClick() {
              onSave();
            },
            backAction: function backAction() {
              next_router__WEBPACK_IMPORTED_MODULE_3___default.a.back();
            },
            disable: false
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 357,
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
                  lineNumber: 372,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.progress_bar_now,
                  style: {
                    width: "".concat(avabilityList.length / 25 * 100, "%")
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 373,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 371,
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
                lineNumber: 380,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 370,
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
                lineNumber: 391,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 389,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 369,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avability_bot_container,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
              text: "Add",
              onClick: function onClick() {
                setModal(true); // setProduct([]);

                setProductFocus("");
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 395,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 394,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 356,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 355,
        columnNumber: 9
      }, _this)]
    }, void 0, true);
  };

  return render();
}

_s(Avability, "zVQ1m7TjnRTsbCes9r9lZ6+fohI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Avability;

var _c;

$RefreshReg$(_c, "Avability");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdmFiaWxpdHkuanN4Il0sIm5hbWVzIjpbIkF2YWJpbGl0eSIsInR5cGUiLCJ1c2VDb250ZXh0IiwiU3RvcmVzIiwic3RhdGUiLCJkaXNwYXRjaCIsImFjdGlvbnMiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibW9kYWwiLCJzZXRNb2RhbCIsInJlbmRlclByb2R1Y3RMaXN0Iiwic2V0UmVuZGVyUHJvZHVjdExpc3QiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJwcm9kdWN0Iiwic2V0UHJvZHVjdCIsInByb2R1Y3RTZWFyY2giLCJzZXRQcm9kdWN0U2VhcmNoIiwicHJvZHVjdEZvY3VzIiwic2V0UHJvZHVjdEZvY3VzIiwiYXZhYmlsaXR5TGlzdCIsInNldEF2YWJpbGl0eUxpc3QiLCJvcmRlciIsInNldE9yZGVyIiwic2FyYW5PcmRlciIsInNldFNhcmFuT3JkZXIiLCJzdG9jayIsInNldFN0b2NrIiwicGxhbiIsInNldFBsYW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJub3ciLCJEYXRlIiwiZGF0ZSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwidXNlRWZmZWN0Iiwibm90RW1wdHkiLCJsZW5ndGgiLCJ3aW5kb3ciLCJvbmJlZm9yZXVubG9hZCIsInZpc2l0UGxhblJlZHVjZXIiLCJhdmFiaWxpdHkiLCJxdWVyeSIsImlkIiwiZ2V0UGxhbklkIiwidGhlbiIsInNhbWVQbGFuIiwiZGF0YSIsIlJvdXRlciIsInB1c2giLCJjaGVja0luIiwic2V0UGxhbkNoZWNrSW4iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZ2V0UHJvZHVrQnlKZW5pc0NoYW5uZWwiLCJpZEplbmlzQ2hhbm5lbCIsIm9uU2VhcmNoUHJvZHVjdCIsInJlbmRlclByb2R1Y3RTZWFyY2giLCJyZW5kZXIiLCJtYXAiLCJ2YWwiLCJpbmRleCIsIm5hbWFQcm9kdWsiLCJpbmNsdWRlcyIsImJvcmRlckJvdHRvbSIsIndpZHRoIiwicmVuZGVyTW9kYWxBZGQiLCJzdHlsZXMiLCJtb2RhbF9hdmFiaWxpdHkiLCJ3cmFwcGVyIiwiYXZhYmlsaXR5X21vZGFsX2NvbnRhaW5lciIsImFkZF90aXRsZSIsImF2YWJpbGl0eV9tb2RhbF9zdWJ0aXRsZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImlucHV0X29yZGVyX3NlYXJjaCIsInBvc2l0aW9uIiwibWF4SGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwib3ZlcmZsb3dZIiwibWF4V2lkdGgiLCJwYWRkaW5nIiwiekluZGV4Iiwic3RvY2tfb3JkZXJfY29udGFpbmVyIiwicGFkZGluZ1JpZ2h0IiwiaW5wdXRfb3JkZXIiLCJwYWRkaW5nTGVmdCIsIm1hcmdpblRvcCIsInJlZyIsIlJlZ0V4cCIsIm1hdGNoIiwic2FtZURhdGFJbmRleCIsImZpbmRJbmRleCIsInNwbGljZSIsInJlbmRlckF2YWJpbGl0eUxpc3QiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwiZmlsdGVyRGF0YSIsImZpbHRlciIsInRvTG93ZXJDYXNlIiwiYm9yZGVyUmFkaXVzIiwiYXZhYmlsaXR5bGlzdF90aXRsZSIsImF2YWJpbGl0eWxpc3Rfc3RvY2tfY29udGFpbmVyIiwiYXZhYmlsaXR5bGlzdF9jb250YWluZXIiLCJtYXJnaW5SaWdodCIsImF2YWJpbGl0eWxpc3Rfc3VidGl0bGUiLCJhdmFiaWxpdHlsaXN0X3ZhbHVlIiwibWFyZ2luTGVmdCIsInRleHRBbGlnbiIsImNvbG9yIiwib25TYXZlIiwic2V0UGxhbkF2YWJpbGl0eSIsImNvbnRhaW5lciIsImJhY2siLCJtYWluIiwic2VhcmNoX2ZpeGVkIiwibWFyZ2luIiwicHJvZ3Jlc3NfYmFyIiwicHJvZ3Jlc3NfYmFyX25vdyIsImlucHV0IiwicGFkZGluZ1RvcCIsIm1hcmdpbkJvdHRvbSIsImF2YWJpbGl0eV9ib3RfY29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFDLFFBSmQ7QUFLRSx5QkFBUyxFQUFFUiwrRUFBTSxDQUFDdUQsS0FMcEI7QUFNRSxxQkFBSyxFQUFFO0FBQUVsQywyQkFBUyxFQUFFO0FBQWI7QUFOVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQW9CRTtBQUFLLG1CQUFLLEVBQUU7QUFBRW1DLDBCQUFVLEVBQUU7QUFBZCxlQUFaO0FBQUEseUJBQ0c1QixtQkFBbUIsRUFEdEIsZUFFRTtBQUFLLHFCQUFLLEVBQUU7QUFBRTZCLDhCQUFZLEVBQUU7QUFBaEI7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWJGLGVBc0NFO0FBQUsscUJBQVMsRUFBRXpELCtFQUFNLENBQUMwRCx1QkFBdkI7QUFBQSxtQ0FDRSxxRUFBQywrQ0FBRDtBQUNFLGtCQUFJLEVBQUUsS0FEUjtBQUVFLHFCQUFPLEVBQUUsbUJBQU07QUFDYjFILHdCQUFRLENBQUMsSUFBRCxDQUFSLENBRGEsQ0FFYjs7QUFDQVUsK0JBQWUsQ0FBQyxFQUFELENBQWY7QUFDRDtBQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXRDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQSxvQkFERjtBQXdERCxHQXpERDs7QUEwREEsU0FBTzZDLE1BQU0sRUFBYjtBQUNEOztHQXhZdUJsRSxTO1VBY1BpQyxxRDs7O0tBZE9qQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Zpc2l0L3VucGxhbi9zdWJtaXQvYXZhYmlsaXR5Ljk0NjdlMWQyZTAwOTZmN2E2MjQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvcGFnZXMvVmlzaXRQbGFuRGV0YWlsLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCB7IFN0b3JlcyB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IE5hdiBmcm9tIFwiLi9OYXZcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4vU3Bpbm5lclwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi9DYXJkXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldFBsYW5JZCxcclxuICBnZXRQcm9kdWN0U2VhcmNoLFxyXG4gIGdldFByb2R1a0J5SmVuaXNDaGFubmVsLFxyXG59IGZyb20gXCIuLi9oZWxwZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF2YWJpbGl0eSh7IHR5cGUgfSkge1xyXG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoLCBhY3Rpb25zIH0gPSB1c2VDb250ZXh0KFN0b3Jlcyk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3JlbmRlclByb2R1Y3RMaXN0LCBzZXRSZW5kZXJQcm9kdWN0TGlzdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcm9kdWN0LCBzZXRQcm9kdWN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcHJvZHVjdFNlYXJjaCwgc2V0UHJvZHVjdFNlYXJjaF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Byb2R1Y3RGb2N1cywgc2V0UHJvZHVjdEZvY3VzXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbYXZhYmlsaXR5TGlzdCwgc2V0QXZhYmlsaXR5TGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW29yZGVyLCBzZXRPcmRlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc2FyYW5PcmRlciwgc2V0U2FyYW5PcmRlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3RvY2ssIHNldFN0b2NrXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwbGFuLCBzZXRQbGFuXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICB2YXIgbm93ID0gbmV3IERhdGUoKTtcclxuICB2YXIgZGF0ZSA9IG5vdy5nZXREYXRlKCk7XHJcbiAgdmFyIG1vbnRoID0gbm93LmdldE1vbnRoKCkgKyAxO1xyXG4gIHZhciB5ZWFyID0gbm93LmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBub3RFbXB0eSA9IGF2YWJpbGl0eUxpc3QubGVuZ3RoID4gMDtcclxuICAgIGlmIChub3RFbXB0eSA+IDApIHtcclxuICAgICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBcIkRhdGEgd2lsbCBiZSBsb3N0IGlmIHlvdSBsZWF2ZSB0aGUgcGFnZSwgYXJlIHlvdSBzdXJlP1wiO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGUgPT09IFwiUExBTlwiKSB7XHJcbiAgICAgIGlmIChzdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLmF2YWJpbGl0eS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgc2V0QXZhYmlsaXR5TGlzdChbLi4uc3RhdGUudmlzaXRQbGFuUmVkdWNlci5hdmFiaWxpdHldKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlVOUExBTlwiKSB7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiU1BSRUFESU5HXCIpIHtcclxuICAgIH1cclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0eXBlID09PSBcIlBMQU5cIikge1xyXG4gICAgICBpZiAocm91dGVyLnF1ZXJ5LmlkKSB7XHJcbiAgICAgICAgZ2V0UGxhbklkKHJvdXRlci5xdWVyeS5pZClcclxuICAgICAgICAgIC50aGVuKCh7IHNhbWVQbGFuLCBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2FtZVBsYW4sIGRhdGEpO1xyXG4gICAgICAgICAgICBpZiAoc2FtZVBsYW4ubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi92aXNpdC9wbGFuXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHNldFBsYW4oZGF0YSk7XHJcbiAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgaWYgKCFzdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLmNoZWNrSW4pIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbnMuc2V0UGxhbkNoZWNrSW4obm93KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJVTlBMQU5cIikge1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlNQUkVBRElOR1wiKSB7XHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlci5xdWVyeS5pZF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGUgPT09IFwiUExBTlwiKSB7XHJcbiAgICAgIGdldFByb2R1a0J5SmVuaXNDaGFubmVsKHBsYW4uaWRKZW5pc0NoYW5uZWwpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIHNldFByb2R1Y3QoZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJVTlBMQU5cIikge1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlNQUkVBRElOR1wiKSB7XHJcbiAgICB9XHJcbiAgfSwgW3BsYW5dKTtcclxuXHJcbiAgY29uc3Qgb25TZWFyY2hQcm9kdWN0ID0gKHNlYXJjaCkgPT4ge1xyXG4gICAgLy8gc2V0UHJvZHVjdEZvY3VzKHNlYXJjaCk7XHJcbiAgICAvLyBnZXRQcm9kdWN0U2VhcmNoKHNlYXJjaClcclxuICAgIC8vICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIC8vICAgICBzZXRQcm9kdWN0KGRhdGEpO1xyXG4gICAgLy8gICB9KVxyXG4gICAgLy8gICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAvLyAgIH0pOzsnJycnXHJcbiAgICBzZXRQcm9kdWN0U2VhcmNoKHNlYXJjaCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyUHJvZHVjdFNlYXJjaCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJlbmRlciA9IHByb2R1Y3QubWFwKCh2YWwsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmICh2YWwubmFtYVByb2R1ay5pbmNsdWRlcyhwcm9kdWN0U2VhcmNoKSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAvLyBzZXRQcm9kdWN0KFtdKTtcclxuICAgICAgICAgICAgICBzZXRQcm9kdWN0Rm9jdXModmFsKTtcclxuICAgICAgICAgICAgICBzZXRSZW5kZXJQcm9kdWN0TGlzdChmYWxzZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogXCIuNXB4IHNvbGlkICNmMGYwZjBcIiwgd2lkdGg6IFwiMzU2cHhcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7dmFsLm5hbWFQcm9kdWt9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZW5kZXI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyTW9kYWxBZGQgPSAoKSA9PiB7XHJcbiAgICBpZiAobW9kYWwpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbF9hdmFiaWxpdHl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRNb2RhbChmYWxzZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eV9tb2RhbF9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkX3RpdGxlfT5BZGQgUHJvZHVjdDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5X21vZGFsX3N1YnRpdGxlfT5Qcm9kdWN0PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgb25TZWFyY2hQcm9kdWN0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cHJvZHVjdEZvY3VzLm5hbWFQcm9kdWt9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF9vcmRlcl9zZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAvLyBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgIHNldFByb2R1Y3QoW10pO1xyXG4gICAgICAgICAgICAgICAgLy8gfX1cclxuICAgICAgICAgICAgICAgIG9uRm9jdXM9eygpID0+IHNldFJlbmRlclByb2R1Y3RMaXN0KHRydWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAge3Byb2R1Y3QgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IFwiMTgwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvd1k6IFwic2Nyb2xsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiNDAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjAgNHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiA5OTk5OTksXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtyZW5kZXJQcm9kdWN0TGlzdCA/IHJlbmRlclByb2R1Y3RTZWFyY2goKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0b2NrX29yZGVyX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdSaWdodDogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5X21vZGFsX3N1YnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICBTdG9jayAocGNzKVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTdG9jayhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0X29yZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdG9ja31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nTGVmdDogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5X21vZGFsX3N1YnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICBTYXJhbiBPcmRlciAocGNzKVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTYXJhbk9yZGVyKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfb3JkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NhcmFuT3JkZXJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eV9tb2RhbF9zdWJ0aXRsZX0+T3JkZXIgKHBjcyk8L2Rpdj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRPcmRlcihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfb3JkZXJ9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17b3JkZXJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHRleHQ9e1wiQWRkXCJ9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cCgvXihcXCg/XFwrP1swLTldKlxcKT8pP1swLTlfXFwtIFxcKFxcKV0qJC9nKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Rm9jdXMubmFtYVByb2R1ayAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3RvY2subWF0Y2gocmVnKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2FyYW5PcmRlci5tYXRjaChyZWcpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICBvcmRlci5tYXRjaChyZWcpXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoYXZhYmlsaXR5TGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzYW1lRGF0YUluZGV4ID0gYXZhYmlsaXR5TGlzdC5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKHZhbCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbC5wcm9kdWN0Rm9jdXMubmFtYVByb2R1ayA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGb2N1cy5uYW1hUHJvZHVrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzYW1lRGF0YUluZGV4ICsgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF2YWJpbGl0eUxpc3Quc3BsaWNlKHNhbWVEYXRhSW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF2YWJpbGl0eUxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Rm9jdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9jayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhcmFuT3JkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNb2RhbChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RvY2soXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2FyYW5PcmRlcihcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRPcmRlcihcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdmFiaWxpdHlMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZvY3VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXJhbk9yZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0b2NrKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNhcmFuT3JkZXIoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3JkZXIoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YWJpbGl0eUxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZvY3VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0b2NrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNhcmFuT3JkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRNb2RhbChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0b2NrKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTYXJhbk9yZGVyKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRPcmRlcihcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVyQXZhYmlsaXR5TGlzdCA9ICgpID0+IHtcclxuICAgIGF2YWJpbGl0eUxpc3Quc29ydCgoYSwgYikgPT5cclxuICAgICAgYS5wcm9kdWN0Rm9jdXMubmFtYVByb2R1ay5sb2NhbGVDb21wYXJlKGIucHJvZHVjdEZvY3VzLm5hbWFQcm9kdWspXHJcbiAgICApO1xyXG4gICAgY29uc3QgZmlsdGVyRGF0YSA9IGF2YWJpbGl0eUxpc3QuZmlsdGVyKCh2YWwpID0+IHtcclxuICAgICAgcmV0dXJuIHZhbC5wcm9kdWN0Rm9jdXMubmFtYVByb2R1a1xyXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgcmVuZGVyID0gZmlsdGVyRGF0YS5tYXAoKHZhbCwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBwYWRkaW5nOiBcIjMwcHhcIiwgbWFyZ2luVG9wOiBcIjE0cHhcIiB9fVxyXG4gICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRQcm9kdWN0Rm9jdXModmFsLnByb2R1Y3RGb2N1cyk7XHJcbiAgICAgICAgICAgICAgc2V0U3RvY2sodmFsLnN0b2NrKTtcclxuICAgICAgICAgICAgICBzZXRTYXJhbk9yZGVyKHZhbC5zYXJhbk9yZGVyKTtcclxuICAgICAgICAgICAgICBzZXRPcmRlcih2YWwub3JkZXIpO1xyXG4gICAgICAgICAgICAgIHNldE1vZGFsKHRydWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3RfdGl0bGV9PlxyXG4gICAgICAgICAgICAgIHt2YWwucHJvZHVjdEZvY3VzLm5hbWFQcm9kdWt9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3Rfc3RvY2tfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X2NvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X3N1YnRpdGxlfT5TdG9jazwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF92YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgIHt2YWwuc3RvY2t9IHBjc1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF9jb250YWluZXJ9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X3N1YnRpdGxlfT5TYXJhbiBPcmRlcjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF92YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgIHt2YWwuc2FyYW5PcmRlcn0gcGNzXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF9zdWJ0aXRsZX0+T3JkZXI8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3RfdmFsdWV9Pnt2YWwub3JkZXJ9IHBjczwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgaWYgKGZpbHRlckRhdGEubGVuZ3RoID09IDApIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpblRvcDogXCIxNTBweFwiLCBjb2xvcjogXCIjZDBkMGQwXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBObyBJdGVtXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gcmVuZGVyO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3Qgb25TYXZlID0gKCkgPT4ge1xyXG4gICAgaWYgKHR5cGUgPT09IFwiUExBTlwiKSB7XHJcbiAgICAgIGFjdGlvbnMuc2V0UGxhbkF2YWJpbGl0eShhdmFiaWxpdHlMaXN0KTtcclxuICAgICAgLy8gY29uc29sZS5sb2coYXZhYmlsaXR5TGlzdCk7XHJcbiAgICAgIFJvdXRlci5wdXNoKGAvdmlzaXQvcGxhbi8ke3JvdXRlci5xdWVyeS5pZH1gKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJVTlBMQU5cIikge1xyXG4gICAgICBSb3V0ZXIucHVzaChgL3Zpc2l0L3VucGxhbi9zdWJtaXRgKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJTUFJFQURJTkdcIikge1xyXG4gICAgICBSb3V0ZXIucHVzaChgL3Zpc2l0L3NwcmVhZGluZy9zdWJtaXRgKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAge3JlbmRlck1vZGFsQWRkKCl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgPE5hdlxyXG4gICAgICAgICAgICAgIHRpdGxlPXtcIkF2YWJpbGl0eVwifVxyXG4gICAgICAgICAgICAgIGNvbG9yPXtcIndoaXRlXCJ9XHJcbiAgICAgICAgICAgICAgYWN0aW9uPXtcIlNhdmVcIn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvblNhdmUoKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGJhY2tBY3Rpb249eygpID0+IHtcclxuICAgICAgICAgICAgICAgIFJvdXRlci5iYWNrKCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBkaXNhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaF9maXhlZH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxMHB4IDAgMCAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfYmFyfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcl9ub3d9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHsoYXZhYmlsaXR5TGlzdC5sZW5ndGggLyAyNSkgKiAxMDB9JWAsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjBcIiB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdUb3A6IFwiNjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAge3JlbmRlckF2YWJpbGl0eUxpc3QoKX1cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwMHB4XCIgfX0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5X2JvdF9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHRleHQ9e1wiQWRkXCJ9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldE1vZGFsKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAvLyBzZXRQcm9kdWN0KFtdKTtcclxuICAgICAgICAgICAgICAgICAgc2V0UHJvZHVjdEZvY3VzKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfTtcclxuICByZXR1cm4gcmVuZGVyKCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==