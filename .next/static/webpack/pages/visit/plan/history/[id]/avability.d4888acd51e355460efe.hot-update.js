webpackHotUpdate_N_E("pages/visit/plan/history/[id]/avability",{

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

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      ket = _useState12[0],
      setKet = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      plan = _useState13[0],
      setPlan = _useState13[1];

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
            setPlan(data); // console.log(data);

            if (!state.visitPlanReducer.checkIn) {
              actions.setPlanCheckIn(now);
            }
          }
        })["catch"](function (err) {
          console.log(err);
        });
      }
    } else if (type === "UNPLAN") {} else if (type === "SPREADING") {} else if (type === "HISTORY") {
      Object(_helper__WEBPACK_IMPORTED_MODULE_10__["getInvoiceData"])(router.query.id).then(function (data) {
        setAvabilityList(data);
        setLoading(false);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }, [router.query.id]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (type === "PLAN") {
      Object(_helper__WEBPACK_IMPORTED_MODULE_10__["getProdukByJenisChannel"])(plan.idJenisChannel).then(function (data) {
        setProduct(data); // console.log(data);

        setLoading(false);
      })["catch"](function (err) {
        console.log(err);
      });
    } else if (type === "UNPLAN") {
      setLoading(false);
    } else if (type === "SPREADING") {
      setLoading(false);
    }
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
          lineNumber: 124,
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
          lineNumber: 145,
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
              lineNumber: 153,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avability_modal_subtitle,
              children: "Product"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
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
              lineNumber: 155,
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
              lineNumber: 168,
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
                  lineNumber: 184,
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
                  lineNumber: 187,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 183,
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
                  lineNumber: 198,
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
                  lineNumber: 201,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avability_modal_subtitle,
              children: "Order (pcs)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
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
              lineNumber: 213,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avability_modal_subtitle,
              children: "Keterangan"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 222,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              onChange: function onChange(e) {
                setKet(e.target.value);
              },
              placeholder: "Ket.",
              type: "text",
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.input_order,
              value: ket
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 223,
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
                          order: order,
                          ket: ket
                        });
                        setModal(false);
                        setStock("");
                        setSaranOrder("");
                        setOrder("");
                        setKet("");
                      } else {
                        avabilityList.push({
                          productFocus: productFocus,
                          stock: stock,
                          saranOrder: saranOrder,
                          order: order,
                          ket: ket
                        });
                        setModal(false);
                        setStock("");
                        setSaranOrder("");
                        setOrder("");
                        setKet("");
                      }
                    } else {
                      avabilityList.push({
                        productFocus: productFocus,
                        stock: stock,
                        saranOrder: saranOrder,
                        order: order,
                        ket: ket
                      });
                      setModal(false);
                      setStock("");
                      setSaranOrder("");
                      setOrder("");
                      setKet("");
                    }
                  }
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 11
        }, _this)]
      }, void 0, true);
    }
  };

  var renderAvabilityList = function renderAvabilityList() {
    if (type === "HISTORY") {
      console.log(avabilityList);
      avabilityList.sort(function (a, b) {
        return a.namaProduk.localeCompare(b.namaProduk);
      });
      var filterData = avabilityList.filter(function (val) {
        return val.namaProduk.toLowerCase().includes(search.toLowerCase());
      });
    } else {
      avabilityList.sort(function (a, b) {
        return a.productFocus.namaProduk.localeCompare(b.productFocus.namaProduk);
      });

      var _filterData = avabilityList.filter(function (val) {
        return val.productFocus.namaProduk.toLowerCase().includes(search.toLowerCase());
      });

      var _render = _filterData.map(function (val, index) {
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
              setKet(val.ket);
              setModal(true);
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_title,
              children: val.productFocus.namaProduk
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 333,
              columnNumber: 15
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
                  lineNumber: 341,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  div: true,
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
                  children: [val.stock, " pcs"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 342,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 337,
                columnNumber: 17
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
                  lineNumber: 350,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  div: true,
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
                  children: [val.saranOrder, " pcs"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 353,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 346,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 336,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_container,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_subtitle,
                children: "Order"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 359,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
                children: [val.order, " pcs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 360,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 358,
              columnNumber: 15
            }, _this), val.ket ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_container,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_subtitle,
                children: "Keterangan"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 366,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
                children: val.ket
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 369,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 365,
              columnNumber: 17
            }, _this) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 323,
            columnNumber: 13
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 319,
          columnNumber: 11
        }, _this);
      });

      if (_filterData.length == 0) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            textAlign: "center",
            marginTop: "150px",
            color: "#d0d0d0"
          },
          children: "No Item"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 378,
          columnNumber: 11
        }, _this);
      } else {
        return _render;
      }
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
    if (loading) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 406,
        columnNumber: 14
      }, _this);
    } else {
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
              lineNumber: 413,
              columnNumber: 15
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
                    lineNumber: 428,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.progress_bar_now,
                    style: {
                      width: "".concat(avabilityList.length / 25 * 100, "%")
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 429,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 427,
                  columnNumber: 19
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
                  lineNumber: 436,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 426,
                columnNumber: 17
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
                  lineNumber: 447,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 445,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 425,
              columnNumber: 15
            }, _this), type === "HISTORY" ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avability_bot_container,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
                text: "Add",
                onClick: function onClick() {
                  setModal(true); // setProduct([]);

                  setProductFocus("");
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 452,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 451,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 412,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 411,
          columnNumber: 11
        }, _this)]
      }, void 0, true);
    }
  };

  return render();
}

_s(Avability, "v1OkYdhscuVkVQNMBL60VD6SyB8=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdmFiaWxpdHkuanN4Il0sIm5hbWVzIjpbIkF2YWJpbGl0eSIsInR5cGUiLCJ1c2VDb250ZXh0IiwiU3RvcmVzIiwic3RhdGUiLCJkaXNwYXRjaCIsImFjdGlvbnMiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibW9kYWwiLCJzZXRNb2RhbCIsInJlbmRlclByb2R1Y3RMaXN0Iiwic2V0UmVuZGVyUHJvZHVjdExpc3QiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJwcm9kdWN0Iiwic2V0UHJvZHVjdCIsInByb2R1Y3RTZWFyY2giLCJzZXRQcm9kdWN0U2VhcmNoIiwicHJvZHVjdEZvY3VzIiwic2V0UHJvZHVjdEZvY3VzIiwiYXZhYmlsaXR5TGlzdCIsInNldEF2YWJpbGl0eUxpc3QiLCJvcmRlciIsInNldE9yZGVyIiwic2FyYW5PcmRlciIsInNldFNhcmFuT3JkZXIiLCJzdG9jayIsInNldFN0b2NrIiwia2V0Iiwic2V0S2V0IiwicGxhbiIsInNldFBsYW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJub3RFbXB0eSIsImxlbmd0aCIsIndpbmRvdyIsIm9uYmVmb3JldW5sb2FkIiwidmlzaXRQbGFuUmVkdWNlciIsImF2YWJpbGl0eSIsInF1ZXJ5IiwiaWQiLCJnZXRQbGFuSWQiLCJ0aGVuIiwic2FtZVBsYW4iLCJkYXRhIiwiUm91dGVyIiwicHVzaCIsImNoZWNrSW4iLCJzZXRQbGFuQ2hlY2tJbiIsIm5vdyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJnZXRJbnZvaWNlRGF0YSIsImdldFByb2R1a0J5SmVuaXNDaGFubmVsIiwiaWRKZW5pc0NoYW5uZWwiLCJvblNlYXJjaFByb2R1Y3QiLCJyZW5kZXJQcm9kdWN0U2VhcmNoIiwicmVuZGVyIiwibWFwIiwidmFsIiwiaW5kZXgiLCJuYW1hUHJvZHVrIiwiaW5jbHVkZXMiLCJib3JkZXJCb3R0b20iLCJ3aWR0aCIsInJlbmRlck1vZGFsQWRkIiwic3R5bGVzIiwibW9kYWxfYXZhYmlsaXR5Iiwid3JhcHBlciIsImF2YWJpbGl0eV9tb2RhbF9jb250YWluZXIiLCJhZGRfdGl0bGUiLCJhdmFiaWxpdHlfbW9kYWxfc3VidGl0bGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJpbnB1dF9vcmRlcl9zZWFyY2giLCJwb3NpdGlvbiIsIm1heEhlaWdodCIsImJhY2tncm91bmRDb2xvciIsIm92ZXJmbG93WSIsIm1heFdpZHRoIiwicGFkZGluZyIsInpJbmRleCIsInN0b2NrX29yZGVyX2NvbnRhaW5lciIsInBhZGRpbmdSaWdodCIsImlucHV0X29yZGVyIiwicGFkZGluZ0xlZnQiLCJtYXJnaW5Ub3AiLCJyZWciLCJSZWdFeHAiLCJtYXRjaCIsInNhbWVEYXRhSW5kZXgiLCJmaW5kSW5kZXgiLCJzcGxpY2UiLCJyZW5kZXJBdmFiaWxpdHlMaXN0Iiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsImZpbHRlckRhdGEiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsImJvcmRlclJhZGl1cyIsImF2YWJpbGl0eWxpc3RfdGl0bGUiLCJhdmFiaWxpdHlsaXN0X3N0b2NrX2NvbnRhaW5lciIsImF2YWJpbGl0eWxpc3RfY29udGFpbmVyIiwibWFyZ2luUmlnaHQiLCJhdmFiaWxpdHlsaXN0X3N1YnRpdGxlIiwiYXZhYmlsaXR5bGlzdF92YWx1ZSIsIm1hcmdpbkxlZnQiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsIm9uU2F2ZSIsInNldFBsYW5BdmFiaWxpdHkiLCJjb250YWluZXIiLCJiYWNrIiwibWFpbiIsInNlYXJjaF9maXhlZCIsIm1hcmdpbiIsInByb2dyZXNzX2JhciIsInByb2dyZXNzX2Jhcl9ub3ciLCJpbnB1dCIsInBhZGRpbmdUb3AiLCJtYXJnaW5Cb3R0b20iLCJhdmFiaWxpdHlfYm90X2NvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVB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QTtBQUFBO0FBQUEsdUJBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFiRixFQXNDRy9ILElBQUksS0FBSyxTQUFULEdBQXFCLElBQXJCLGdCQUNDO0FBQUssdUJBQVMsRUFBRXNFLCtFQUFNLENBQUMwRCx1QkFBdkI7QUFBQSxxQ0FDRSxxRUFBQywrQ0FBRDtBQUNFLG9CQUFJLEVBQUUsS0FEUjtBQUVFLHVCQUFPLEVBQUUsbUJBQU07QUFDYnRILDBCQUFRLENBQUMsSUFBRCxDQUFSLENBRGEsQ0FFYjs7QUFDQVUsaUNBQWUsQ0FBQyxFQUFELENBQWY7QUFDRDtBQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXZDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUEsc0JBREY7QUEwREQ7QUFDRixHQS9ERDs7QUFnRUEsU0FBT3lDLE1BQU0sRUFBYjtBQUNEOztHQWpjdUI5RCxTO1VBZVBtQyxxRDs7O0tBZk9uQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Zpc2l0L3BsYW4vaGlzdG9yeS9baWRdL2F2YWJpbGl0eS5kNDg4OGFjZDUxZTM1NTQ2MGVmZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3BhZ2VzL1Zpc2l0UGxhbkRldGFpbC5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgeyBTdG9yZXMgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuXHJcbmltcG9ydCBOYXYgZnJvbSBcIi4vTmF2XCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuL1NwaW5uZXJcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBnZXRJbnZvaWNlRGF0YSxcclxuICBnZXRQbGFuSWQsXHJcbiAgZ2V0UGxhbk1vbnRobHlIaXN0b3J5LFxyXG4gIGdldFByb2R1Y3RTZWFyY2gsXHJcbiAgZ2V0UHJvZHVrQnlKZW5pc0NoYW5uZWwsXHJcbn0gZnJvbSBcIi4uL2hlbHBlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXZhYmlsaXR5KHsgdHlwZSB9KSB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2gsIGFjdGlvbnMgfSA9IHVzZUNvbnRleHQoU3RvcmVzKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcmVuZGVyUHJvZHVjdExpc3QsIHNldFJlbmRlclByb2R1Y3RMaXN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Byb2R1Y3QsIHNldFByb2R1Y3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtwcm9kdWN0U2VhcmNoLCBzZXRQcm9kdWN0U2VhcmNoXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcHJvZHVjdEZvY3VzLCBzZXRQcm9kdWN0Rm9jdXNdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFthdmFiaWxpdHlMaXN0LCBzZXRBdmFiaWxpdHlMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbb3JkZXIsIHNldE9yZGVyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzYXJhbk9yZGVyLCBzZXRTYXJhbk9yZGVyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzdG9jaywgc2V0U3RvY2tdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2tldCwgc2V0S2V0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwbGFuLCBzZXRQbGFuXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG5vdEVtcHR5ID0gYXZhYmlsaXR5TGlzdC5sZW5ndGggPiAwO1xyXG4gICAgaWYgKG5vdEVtcHR5ID4gMCkge1xyXG4gICAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFwiRGF0YSB3aWxsIGJlIGxvc3QgaWYgeW91IGxlYXZlIHRoZSBwYWdlLCBhcmUgeW91IHN1cmU/XCI7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodHlwZSA9PT0gXCJQTEFOXCIpIHtcclxuICAgICAgaWYgKHN0YXRlLnZpc2l0UGxhblJlZHVjZXIuYXZhYmlsaXR5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBzZXRBdmFiaWxpdHlMaXN0KFsuLi5zdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLmF2YWJpbGl0eV0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiVU5QTEFOXCIpIHtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJTUFJFQURJTkdcIikge1xyXG4gICAgfVxyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGUgPT09IFwiUExBTlwiKSB7XHJcbiAgICAgIGlmIChyb3V0ZXIucXVlcnkuaWQpIHtcclxuICAgICAgICBnZXRQbGFuSWQocm91dGVyLnF1ZXJ5LmlkKVxyXG4gICAgICAgICAgLnRoZW4oKHsgc2FtZVBsYW4sIGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzYW1lUGxhbiwgZGF0YSk7XHJcbiAgICAgICAgICAgIGlmIChzYW1lUGxhbi5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL3Zpc2l0L3BsYW5cIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgc2V0UGxhbihkYXRhKTtcclxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICBpZiAoIXN0YXRlLnZpc2l0UGxhblJlZHVjZXIuY2hlY2tJbikge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9ucy5zZXRQbGFuQ2hlY2tJbihub3cpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlVOUExBTlwiKSB7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiU1BSRUFESU5HXCIpIHtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJISVNUT1JZXCIpIHtcclxuICAgICAgZ2V0SW52b2ljZURhdGEocm91dGVyLnF1ZXJ5LmlkKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBzZXRBdmFiaWxpdHlMaXN0KGRhdGEpO1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbcm91dGVyLnF1ZXJ5LmlkXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodHlwZSA9PT0gXCJQTEFOXCIpIHtcclxuICAgICAgZ2V0UHJvZHVrQnlKZW5pc0NoYW5uZWwocGxhbi5pZEplbmlzQ2hhbm5lbClcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgc2V0UHJvZHVjdChkYXRhKTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJVTlBMQU5cIikge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJTUFJFQURJTkdcIikge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9LCBbcGxhbl0pO1xyXG5cclxuICBjb25zdCBvblNlYXJjaFByb2R1Y3QgPSAoc2VhcmNoKSA9PiB7XHJcbiAgICAvLyBzZXRQcm9kdWN0Rm9jdXMoc2VhcmNoKTtcclxuICAgIC8vIGdldFByb2R1Y3RTZWFyY2goc2VhcmNoKVxyXG4gICAgLy8gICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgLy8gICAgIHNldFByb2R1Y3QoZGF0YSk7XHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIC8vICAgfSk7OycnJydcclxuICAgIHNldFByb2R1Y3RTZWFyY2goc2VhcmNoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJQcm9kdWN0U2VhcmNoID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmVuZGVyID0gcHJvZHVjdC5tYXAoKHZhbCwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKHZhbC5uYW1hUHJvZHVrLmluY2x1ZGVzKHByb2R1Y3RTZWFyY2gpKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIC8vIHNldFByb2R1Y3QoW10pO1xyXG4gICAgICAgICAgICAgIHNldFByb2R1Y3RGb2N1cyh2YWwpO1xyXG4gICAgICAgICAgICAgIHNldFJlbmRlclByb2R1Y3RMaXN0KGZhbHNlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiBcIi41cHggc29saWQgI2YwZjBmMFwiLCB3aWR0aDogXCIzNTZweFwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt2YWwubmFtYVByb2R1a31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlbmRlcjtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJNb2RhbEFkZCA9ICgpID0+IHtcclxuICAgIGlmIChtb2RhbCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsX2F2YWJpbGl0eX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldE1vZGFsKGZhbHNlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5X21vZGFsX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRfdGl0bGV9PkFkZCBQcm9kdWN0PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlfbW9kYWxfc3VidGl0bGV9PlByb2R1Y3Q8L2Rpdj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBvblNlYXJjaFByb2R1Y3QoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9kdWN0Rm9jdXMubmFtYVByb2R1a31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0X29yZGVyX3NlYXJjaH1cclxuICAgICAgICAgICAgICAgIC8vIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgc2V0UHJvZHVjdChbXSk7XHJcbiAgICAgICAgICAgICAgICAvLyB9fVxyXG4gICAgICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0UmVuZGVyUHJvZHVjdExpc3QodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7cHJvZHVjdCA/IChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogXCIxODBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93WTogXCJzY3JvbGxcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCI0MDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMCA0cHhcIixcclxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDk5OTk5OSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3JlbmRlclByb2R1Y3RMaXN0ID8gcmVuZGVyUHJvZHVjdFNlYXJjaCgpIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RvY2tfb3JkZXJfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlfbW9kYWxfc3VidGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIFN0b2NrIChwY3MpXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFN0b2NrKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfb3JkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0b2NrfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlfbW9kYWxfc3VidGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIFNhcmFuIE9yZGVyIChwY3MpXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFNhcmFuT3JkZXIoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF9vcmRlcn1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2FyYW5PcmRlcn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5X21vZGFsX3N1YnRpdGxlfT5PcmRlciAocGNzKTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldE9yZGVyKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF9vcmRlcn1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtvcmRlcn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5X21vZGFsX3N1YnRpdGxlfT5LZXRlcmFuZ2FuPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0S2V0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIktldC5cIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfb3JkZXJ9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17a2V0fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0ZXh0PXtcIkFkZFwifVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoL14oXFwoP1xcKz9bMC05XSpcXCk/KT9bMC05X1xcLSBcXChcXCldKiQvZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZvY3VzLm5hbWFQcm9kdWsgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIHN0b2NrLm1hdGNoKHJlZykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIHNhcmFuT3JkZXIubWF0Y2gocmVnKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgb3JkZXIubWF0Y2gocmVnKVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGF2YWJpbGl0eUxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2FtZURhdGFJbmRleCA9IGF2YWJpbGl0eUxpc3QuZmluZEluZGV4KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICh2YWwpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWwucHJvZHVjdEZvY3VzLm5hbWFQcm9kdWsgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Rm9jdXMubmFtYVByb2R1a1xyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2FtZURhdGFJbmRleCArIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdmFiaWxpdHlMaXN0LnNwbGljZShzYW1lRGF0YUluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdmFiaWxpdHlMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZvY3VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXJhbk9yZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0b2NrKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNhcmFuT3JkZXIoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3JkZXIoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0S2V0KFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF2YWJpbGl0eUxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Rm9jdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9jayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhcmFuT3JkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNb2RhbChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RvY2soXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2FyYW5PcmRlcihcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRPcmRlcihcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRLZXQoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YWJpbGl0eUxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZvY3VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0b2NrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNhcmFuT3JkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdG9jayhcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2FyYW5PcmRlcihcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3JkZXIoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEtldChcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVyQXZhYmlsaXR5TGlzdCA9ICgpID0+IHtcclxuICAgIGlmICh0eXBlID09PSBcIkhJU1RPUllcIikge1xyXG4gICAgICBjb25zb2xlLmxvZyhhdmFiaWxpdHlMaXN0KTtcclxuICAgICAgYXZhYmlsaXR5TGlzdC5zb3J0KChhLCBiKSA9PiBhLm5hbWFQcm9kdWsubG9jYWxlQ29tcGFyZShiLm5hbWFQcm9kdWspKTtcclxuICAgICAgY29uc3QgZmlsdGVyRGF0YSA9IGF2YWJpbGl0eUxpc3QuZmlsdGVyKCh2YWwpID0+IHtcclxuICAgICAgICByZXR1cm4gdmFsLm5hbWFQcm9kdWsudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXZhYmlsaXR5TGlzdC5zb3J0KChhLCBiKSA9PlxyXG4gICAgICAgIGEucHJvZHVjdEZvY3VzLm5hbWFQcm9kdWsubG9jYWxlQ29tcGFyZShiLnByb2R1Y3RGb2N1cy5uYW1hUHJvZHVrKVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBmaWx0ZXJEYXRhID0gYXZhYmlsaXR5TGlzdC5maWx0ZXIoKHZhbCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB2YWwucHJvZHVjdEZvY3VzLm5hbWFQcm9kdWtcclxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgcmVuZGVyID0gZmlsdGVyRGF0YS5tYXAoKHZhbCwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBwYWRkaW5nOiBcIjMwcHhcIiwgbWFyZ2luVG9wOiBcIjE0cHhcIiB9fVxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0UHJvZHVjdEZvY3VzKHZhbC5wcm9kdWN0Rm9jdXMpO1xyXG4gICAgICAgICAgICAgICAgc2V0U3RvY2sodmFsLnN0b2NrKTtcclxuICAgICAgICAgICAgICAgIHNldFNhcmFuT3JkZXIodmFsLnNhcmFuT3JkZXIpO1xyXG4gICAgICAgICAgICAgICAgc2V0T3JkZXIodmFsLm9yZGVyKTtcclxuICAgICAgICAgICAgICAgIHNldEtldCh2YWwua2V0KTtcclxuICAgICAgICAgICAgICAgIHNldE1vZGFsKHRydWUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3RfdGl0bGV9PlxyXG4gICAgICAgICAgICAgICAge3ZhbC5wcm9kdWN0Rm9jdXMubmFtYVByb2R1a31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3Rfc3RvY2tfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF9jb250YWluZXJ9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF9zdWJ0aXRsZX0+U3RvY2s8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF92YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3ZhbC5zdG9ja30gcGNzXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3RfY29udGFpbmVyfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF9zdWJ0aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgU2FyYW4gT3JkZXJcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3RfdmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt2YWwuc2FyYW5PcmRlcn0gcGNzXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3Rfc3VidGl0bGV9Pk9yZGVyPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3RfdmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICB7dmFsLm9yZGVyfSBwY3NcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHt2YWwua2V0ID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF9zdWJ0aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgS2V0ZXJhbmdhblxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X3ZhbHVlfT57dmFsLmtldH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGZpbHRlckRhdGEubGVuZ3RoID09IDApIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTUwcHhcIixcclxuICAgICAgICAgICAgICBjb2xvcjogXCIjZDBkMGQwXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIE5vIEl0ZW1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHJlbmRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3Qgb25TYXZlID0gKCkgPT4ge1xyXG4gICAgaWYgKHR5cGUgPT09IFwiUExBTlwiKSB7XHJcbiAgICAgIGFjdGlvbnMuc2V0UGxhbkF2YWJpbGl0eShhdmFiaWxpdHlMaXN0KTtcclxuICAgICAgLy8gY29uc29sZS5sb2coYXZhYmlsaXR5TGlzdCk7XHJcbiAgICAgIFJvdXRlci5wdXNoKGAvdmlzaXQvcGxhbi8ke3JvdXRlci5xdWVyeS5pZH1gKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJVTlBMQU5cIikge1xyXG4gICAgICBSb3V0ZXIucHVzaChgL3Zpc2l0L3VucGxhbi9zdWJtaXRgKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJTUFJFQURJTkdcIikge1xyXG4gICAgICBSb3V0ZXIucHVzaChgL3Zpc2l0L3NwcmVhZGluZy9zdWJtaXRgKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHtyZW5kZXJNb2RhbEFkZCgpfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgIDxOYXZcclxuICAgICAgICAgICAgICAgIHRpdGxlPXtcIkF2YWJpbGl0eVwifVxyXG4gICAgICAgICAgICAgICAgY29sb3I9e1wid2hpdGVcIn1cclxuICAgICAgICAgICAgICAgIGFjdGlvbj17XCJTYXZlXCJ9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIG9uU2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGJhY2tBY3Rpb249eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgUm91dGVyLmJhY2soKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaF9maXhlZH0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjEwcHggMCAwIDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcn0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfYmFyX25vd31cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHsoYXZhYmlsaXR5TGlzdC5sZW5ndGggLyAyNSkgKiAxMDB9JWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMFwiIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCI2MHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtyZW5kZXJBdmFiaWxpdHlMaXN0KCl9XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwMHB4XCIgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHt0eXBlID09PSBcIkhJU1RPUllcIiA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eV9ib3RfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9e1wiQWRkXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0TW9kYWwodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBzZXRQcm9kdWN0KFtdKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFByb2R1Y3RGb2N1cyhcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiByZW5kZXIoKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9