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
    } else if (type === "UNPLAN") {
      Object(_helper__WEBPACK_IMPORTED_MODULE_10__["getProdukByJenisChannel"])(plan.idJenisChannel).then(function (data) {
        setProduct(data);
      })["catch"](function (err) {
        console.log(err);
      });
    } else if (type === "SPREADING") {}
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
          lineNumber: 119,
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
          lineNumber: 140,
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
              lineNumber: 148,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avability_modal_subtitle,
              children: "Product"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
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
              lineNumber: 150,
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
              lineNumber: 163,
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
                  lineNumber: 179,
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
                  lineNumber: 182,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 178,
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
                  lineNumber: 193,
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
                  lineNumber: 196,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avability_modal_subtitle,
              children: "Order (pcs)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 207,
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
              lineNumber: 208,
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
                lineNumber: 218,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 217,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
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
            lineNumber: 304,
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
                lineNumber: 312,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                div: true,
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
                children: [val.stock, " pcs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 313,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 308,
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
                lineNumber: 321,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                div: true,
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
                children: [val.saranOrder, " pcs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 322,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 317,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 307,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_container,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_subtitle,
              children: "Order"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 328,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
              children: [val.order, " pcs"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 329,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 327,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 11
        }, _this)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 291,
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
        lineNumber: 337,
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
            lineNumber: 364,
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
                  lineNumber: 379,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.progress_bar_now,
                  style: {
                    width: "".concat(avabilityList.length / 25 * 100, "%")
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 380,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 378,
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
                lineNumber: 387,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 377,
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
                lineNumber: 398,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 396,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 376,
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
              lineNumber: 402,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 401,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 363,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 362,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdmFiaWxpdHkuanN4Il0sIm5hbWVzIjpbIkF2YWJpbGl0eSIsInR5cGUiLCJ1c2VDb250ZXh0IiwiU3RvcmVzIiwic3RhdGUiLCJkaXNwYXRjaCIsImFjdGlvbnMiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibW9kYWwiLCJzZXRNb2RhbCIsInJlbmRlclByb2R1Y3RMaXN0Iiwic2V0UmVuZGVyUHJvZHVjdExpc3QiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJwcm9kdWN0Iiwic2V0UHJvZHVjdCIsInByb2R1Y3RTZWFyY2giLCJzZXRQcm9kdWN0U2VhcmNoIiwicHJvZHVjdEZvY3VzIiwic2V0UHJvZHVjdEZvY3VzIiwiYXZhYmlsaXR5TGlzdCIsInNldEF2YWJpbGl0eUxpc3QiLCJvcmRlciIsInNldE9yZGVyIiwic2FyYW5PcmRlciIsInNldFNhcmFuT3JkZXIiLCJzdG9jayIsInNldFN0b2NrIiwicGxhbiIsInNldFBsYW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJub3ciLCJEYXRlIiwiZGF0ZSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwidXNlRWZmZWN0Iiwibm90RW1wdHkiLCJsZW5ndGgiLCJ3aW5kb3ciLCJvbmJlZm9yZXVubG9hZCIsInZpc2l0UGxhblJlZHVjZXIiLCJhdmFiaWxpdHkiLCJxdWVyeSIsImlkIiwiZ2V0UGxhbklkIiwidGhlbiIsInNhbWVQbGFuIiwiZGF0YSIsIlJvdXRlciIsInB1c2giLCJjaGVja0luIiwic2V0UGxhbkNoZWNrSW4iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZ2V0UHJvZHVrQnlKZW5pc0NoYW5uZWwiLCJpZEplbmlzQ2hhbm5lbCIsIm9uU2VhcmNoUHJvZHVjdCIsInJlbmRlclByb2R1Y3RTZWFyY2giLCJyZW5kZXIiLCJtYXAiLCJ2YWwiLCJpbmRleCIsIm5hbWFQcm9kdWsiLCJpbmNsdWRlcyIsImJvcmRlckJvdHRvbSIsIndpZHRoIiwicmVuZGVyTW9kYWxBZGQiLCJzdHlsZXMiLCJtb2RhbF9hdmFiaWxpdHkiLCJ3cmFwcGVyIiwiYXZhYmlsaXR5X21vZGFsX2NvbnRhaW5lciIsImFkZF90aXRsZSIsImF2YWJpbGl0eV9tb2RhbF9zdWJ0aXRsZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImlucHV0X29yZGVyX3NlYXJjaCIsInBvc2l0aW9uIiwibWF4SGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwib3ZlcmZsb3dZIiwibWF4V2lkdGgiLCJwYWRkaW5nIiwiekluZGV4Iiwic3RvY2tfb3JkZXJfY29udGFpbmVyIiwicGFkZGluZ1JpZ2h0IiwiaW5wdXRfb3JkZXIiLCJwYWRkaW5nTGVmdCIsIm1hcmdpblRvcCIsInJlZyIsIlJlZ0V4cCIsIm1hdGNoIiwic2FtZURhdGFJbmRleCIsImZpbmRJbmRleCIsInNwbGljZSIsInJlbmRlckF2YWJpbGl0eUxpc3QiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwiZmlsdGVyRGF0YSIsImZpbHRlciIsInRvTG93ZXJDYXNlIiwiYm9yZGVyUmFkaXVzIiwiYXZhYmlsaXR5bGlzdF90aXRsZSIsImF2YWJpbGl0eWxpc3Rfc3RvY2tfY29udGFpbmVyIiwiYXZhYmlsaXR5bGlzdF9jb250YWluZXIiLCJtYXJnaW5SaWdodCIsImF2YWJpbGl0eWxpc3Rfc3VidGl0bGUiLCJhdmFiaWxpdHlsaXN0X3ZhbHVlIiwibWFyZ2luTGVmdCIsInRleHRBbGlnbiIsImNvbG9yIiwib25TYXZlIiwic2V0UGxhbkF2YWJpbGl0eSIsImNvbnRhaW5lciIsImJhY2siLCJtYWluIiwic2VhcmNoX2ZpeGVkIiwibWFyZ2luIiwicHJvZ3Jlc3NfYmFyIiwicHJvZ3Jlc3NfYmFyX25vdyIsImlucHV0IiwicGFkZGluZ1RvcCIsIm1hcmdpbkJvdHRvbSIsImF2YWJpbGl0eV9ib3RfY29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LFM7VUFjUGlDLHFEOzs7S0FkT2pDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmlzaXQvdW5wbGFuL3N1Ym1pdC9hdmFiaWxpdHkuNGM0YWYyZGZiZWQ3NDNiNWNkNDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wYWdlcy9WaXNpdFBsYW5EZXRhaWwubW9kdWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IHsgU3RvcmVzIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgTmF2IGZyb20gXCIuL05hdlwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi9TcGlubmVyXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgZ2V0UGxhbklkLFxyXG4gIGdldFByb2R1Y3RTZWFyY2gsXHJcbiAgZ2V0UHJvZHVrQnlKZW5pc0NoYW5uZWwsXHJcbn0gZnJvbSBcIi4uL2hlbHBlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXZhYmlsaXR5KHsgdHlwZSB9KSB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2gsIGFjdGlvbnMgfSA9IHVzZUNvbnRleHQoU3RvcmVzKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcmVuZGVyUHJvZHVjdExpc3QsIHNldFJlbmRlclByb2R1Y3RMaXN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Byb2R1Y3QsIHNldFByb2R1Y3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtwcm9kdWN0U2VhcmNoLCBzZXRQcm9kdWN0U2VhcmNoXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcHJvZHVjdEZvY3VzLCBzZXRQcm9kdWN0Rm9jdXNdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFthdmFiaWxpdHlMaXN0LCBzZXRBdmFiaWxpdHlMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbb3JkZXIsIHNldE9yZGVyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzYXJhbk9yZGVyLCBzZXRTYXJhbk9yZGVyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzdG9jaywgc2V0U3RvY2tdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3BsYW4sIHNldFBsYW5dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gIHZhciBkYXRlID0gbm93LmdldERhdGUoKTtcclxuICB2YXIgbW9udGggPSBub3cuZ2V0TW9udGgoKSArIDE7XHJcbiAgdmFyIHllYXIgPSBub3cuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG5vdEVtcHR5ID0gYXZhYmlsaXR5TGlzdC5sZW5ndGggPiAwO1xyXG4gICAgaWYgKG5vdEVtcHR5ID4gMCkge1xyXG4gICAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFwiRGF0YSB3aWxsIGJlIGxvc3QgaWYgeW91IGxlYXZlIHRoZSBwYWdlLCBhcmUgeW91IHN1cmU/XCI7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodHlwZSA9PT0gXCJQTEFOXCIpIHtcclxuICAgICAgaWYgKHN0YXRlLnZpc2l0UGxhblJlZHVjZXIuYXZhYmlsaXR5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBzZXRBdmFiaWxpdHlMaXN0KFsuLi5zdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLmF2YWJpbGl0eV0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiVU5QTEFOXCIpIHtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJTUFJFQURJTkdcIikge1xyXG4gICAgfVxyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGUgPT09IFwiUExBTlwiKSB7XHJcbiAgICAgIGlmIChyb3V0ZXIucXVlcnkuaWQpIHtcclxuICAgICAgICBnZXRQbGFuSWQocm91dGVyLnF1ZXJ5LmlkKVxyXG4gICAgICAgICAgLnRoZW4oKHsgc2FtZVBsYW4sIGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzYW1lUGxhbiwgZGF0YSk7XHJcbiAgICAgICAgICAgIGlmIChzYW1lUGxhbi5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL3Zpc2l0L3BsYW5cIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgc2V0UGxhbihkYXRhKTtcclxuICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICBpZiAoIXN0YXRlLnZpc2l0UGxhblJlZHVjZXIuY2hlY2tJbikge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9ucy5zZXRQbGFuQ2hlY2tJbihub3cpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlVOUExBTlwiKSB7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiU1BSRUFESU5HXCIpIHtcclxuICAgIH1cclxuICB9LCBbcm91dGVyLnF1ZXJ5LmlkXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodHlwZSA9PT0gXCJQTEFOXCIpIHtcclxuICAgICAgZ2V0UHJvZHVrQnlKZW5pc0NoYW5uZWwocGxhbi5pZEplbmlzQ2hhbm5lbClcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgc2V0UHJvZHVjdChkYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlVOUExBTlwiKSB7XHJcbiAgICAgIGdldFByb2R1a0J5SmVuaXNDaGFubmVsKHBsYW4uaWRKZW5pc0NoYW5uZWwpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIHNldFByb2R1Y3QoZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJTUFJFQURJTkdcIikge1xyXG4gICAgfVxyXG4gIH0sIFtwbGFuXSk7XHJcblxyXG4gIGNvbnN0IG9uU2VhcmNoUHJvZHVjdCA9IChzZWFyY2gpID0+IHtcclxuICAgIC8vIHNldFByb2R1Y3RGb2N1cyhzZWFyY2gpO1xyXG4gICAgLy8gZ2V0UHJvZHVjdFNlYXJjaChzZWFyY2gpXHJcbiAgICAvLyAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAvLyAgICAgc2V0UHJvZHVjdChkYXRhKTtcclxuICAgIC8vICAgfSlcclxuICAgIC8vICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgLy8gICB9KTs7JycnJ1xyXG4gICAgc2V0UHJvZHVjdFNlYXJjaChzZWFyY2gpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlclByb2R1Y3RTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICBjb25zdCByZW5kZXIgPSBwcm9kdWN0Lm1hcCgodmFsLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAodmFsLm5hbWFQcm9kdWsuaW5jbHVkZXMocHJvZHVjdFNlYXJjaCkpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gc2V0UHJvZHVjdChbXSk7XHJcbiAgICAgICAgICAgICAgc2V0UHJvZHVjdEZvY3VzKHZhbCk7XHJcbiAgICAgICAgICAgICAgc2V0UmVuZGVyUHJvZHVjdExpc3QoZmFsc2UpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXJCb3R0b206IFwiLjVweCBzb2xpZCAjZjBmMGYwXCIsIHdpZHRoOiBcIjM1NnB4XCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3ZhbC5uYW1hUHJvZHVrfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVuZGVyO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlck1vZGFsQWRkID0gKCkgPT4ge1xyXG4gICAgaWYgKG1vZGFsKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxfYXZhYmlsaXR5fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0TW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlfbW9kYWxfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZF90aXRsZX0+QWRkIFByb2R1Y3Q8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eV9tb2RhbF9zdWJ0aXRsZX0+UHJvZHVjdDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIG9uU2VhcmNoUHJvZHVjdChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb2R1Y3RGb2N1cy5uYW1hUHJvZHVrfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfb3JkZXJfc2VhcmNofVxyXG4gICAgICAgICAgICAgICAgLy8gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICBzZXRQcm9kdWN0KFtdKTtcclxuICAgICAgICAgICAgICAgIC8vIH19XHJcbiAgICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRSZW5kZXJQcm9kdWN0TGlzdCh0cnVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHtwcm9kdWN0ID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBcIjE4MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dZOiBcInNjcm9sbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBcIjQwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIwIDRweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogOTk5OTk5LFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7cmVuZGVyUHJvZHVjdExpc3QgPyByZW5kZXJQcm9kdWN0U2VhcmNoKCkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdG9ja19vcmRlcl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nUmlnaHQ6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eV9tb2RhbF9zdWJ0aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgU3RvY2sgKHBjcylcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0U3RvY2soZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF9vcmRlcn1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RvY2t9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eV9tb2RhbF9zdWJ0aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgU2FyYW4gT3JkZXIgKHBjcylcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0U2FyYW5PcmRlcihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0X29yZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzYXJhbk9yZGVyfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlfbW9kYWxfc3VidGl0bGV9Pk9yZGVyIChwY3MpPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0T3JkZXIoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0X29yZGVyfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e29yZGVyfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0ZXh0PXtcIkFkZFwifVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoL14oXFwoP1xcKz9bMC05XSpcXCk/KT9bMC05X1xcLSBcXChcXCldKiQvZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZvY3VzLm5hbWFQcm9kdWsgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIHN0b2NrLm1hdGNoKHJlZykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIHNhcmFuT3JkZXIubWF0Y2gocmVnKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgb3JkZXIubWF0Y2gocmVnKVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGF2YWJpbGl0eUxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2FtZURhdGFJbmRleCA9IGF2YWJpbGl0eUxpc3QuZmluZEluZGV4KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICh2YWwpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWwucHJvZHVjdEZvY3VzLm5hbWFQcm9kdWsgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Rm9jdXMubmFtYVByb2R1a1xyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2FtZURhdGFJbmRleCArIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdmFiaWxpdHlMaXN0LnNwbGljZShzYW1lRGF0YUluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdmFiaWxpdHlMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZvY3VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXJhbk9yZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0b2NrKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNhcmFuT3JkZXIoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3JkZXIoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhYmlsaXR5TGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGb2N1cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b2NrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FyYW5PcmRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1vZGFsKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTdG9jayhcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTYXJhbk9yZGVyKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldE9yZGVyKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdmFiaWxpdHlMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGb2N1cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9jayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzYXJhbk9yZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdG9jayhcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2FyYW5PcmRlcihcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3JkZXIoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlckF2YWJpbGl0eUxpc3QgPSAoKSA9PiB7XHJcbiAgICBhdmFiaWxpdHlMaXN0LnNvcnQoKGEsIGIpID0+XHJcbiAgICAgIGEucHJvZHVjdEZvY3VzLm5hbWFQcm9kdWsubG9jYWxlQ29tcGFyZShiLnByb2R1Y3RGb2N1cy5uYW1hUHJvZHVrKVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGZpbHRlckRhdGEgPSBhdmFiaWxpdHlMaXN0LmZpbHRlcigodmFsKSA9PiB7XHJcbiAgICAgIHJldHVybiB2YWwucHJvZHVjdEZvY3VzLm5hbWFQcm9kdWtcclxuICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgIC5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHJlbmRlciA9IGZpbHRlckRhdGEubWFwKCh2YWwsIGluZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcmRcclxuICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI1cHhcIiwgcGFkZGluZzogXCIzMHB4XCIsIG1hcmdpblRvcDogXCIxNHB4XCIgfX1cclxuICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0UHJvZHVjdEZvY3VzKHZhbC5wcm9kdWN0Rm9jdXMpO1xyXG4gICAgICAgICAgICAgIHNldFN0b2NrKHZhbC5zdG9jayk7XHJcbiAgICAgICAgICAgICAgc2V0U2FyYW5PcmRlcih2YWwuc2FyYW5PcmRlcik7XHJcbiAgICAgICAgICAgICAgc2V0T3JkZXIodmFsLm9yZGVyKTtcclxuICAgICAgICAgICAgICBzZXRNb2RhbCh0cnVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X3RpdGxlfT5cclxuICAgICAgICAgICAgICB7dmFsLnByb2R1Y3RGb2N1cy5uYW1hUHJvZHVrfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X3N0b2NrX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF9jb250YWluZXJ9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF9zdWJ0aXRsZX0+U3RvY2s8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3RfdmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICB7dmFsLnN0b2NrfSBwY3NcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3RfY29udGFpbmVyfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF9zdWJ0aXRsZX0+U2FyYW4gT3JkZXI8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3RfdmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICB7dmFsLnNhcmFuT3JkZXJ9IHBjc1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3RfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3Rfc3VidGl0bGV9Pk9yZGVyPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X3ZhbHVlfT57dmFsLm9yZGVyfSBwY3M8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIGlmIChmaWx0ZXJEYXRhLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5Ub3A6IFwiMTUwcHhcIiwgY29sb3I6IFwiI2QwZDBkMFwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTm8gSXRlbVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHJlbmRlcjtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IG9uU2F2ZSA9ICgpID0+IHtcclxuICAgIGlmICh0eXBlID09PSBcIlBMQU5cIikge1xyXG4gICAgICBhY3Rpb25zLnNldFBsYW5BdmFiaWxpdHkoYXZhYmlsaXR5TGlzdCk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGF2YWJpbGl0eUxpc3QpO1xyXG4gICAgICBSb3V0ZXIucHVzaChgL3Zpc2l0L3BsYW4vJHtyb3V0ZXIucXVlcnkuaWR9YCk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiVU5QTEFOXCIpIHtcclxuICAgICAgUm91dGVyLnB1c2goYC92aXNpdC91bnBsYW4vc3VibWl0YCk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiU1BSRUFESU5HXCIpIHtcclxuICAgICAgUm91dGVyLnB1c2goYC92aXNpdC9zcHJlYWRpbmcvc3VibWl0YCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIHtyZW5kZXJNb2RhbEFkZCgpfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxOYXZcclxuICAgICAgICAgICAgICB0aXRsZT17XCJBdmFiaWxpdHlcIn1cclxuICAgICAgICAgICAgICBjb2xvcj17XCJ3aGl0ZVwifVxyXG4gICAgICAgICAgICAgIGFjdGlvbj17XCJTYXZlXCJ9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb25TYXZlKCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBiYWNrQWN0aW9uPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIuYmFjaygpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgZGlzYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hfZml4ZWR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMTBweCAwIDAgMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcn0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJfbm93fVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYCR7KGF2YWJpbGl0eUxpc3QubGVuZ3RoIC8gMjUpICogMTAwfSVgLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIwXCIgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjYwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIHtyZW5kZXJBdmFiaWxpdHlMaXN0KCl9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMDBweFwiIH19IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eV9ib3RfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0ZXh0PXtcIkFkZFwifVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRNb2RhbCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgLy8gc2V0UHJvZHVjdChbXSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldFByb2R1Y3RGb2N1cyhcIlwiKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgcmV0dXJuIHJlbmRlcigpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=