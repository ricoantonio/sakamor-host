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
    if (type !== "HISTORY") {}

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
  }, [dispatch.router.query.id]);
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
          lineNumber: 126,
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
          lineNumber: 147,
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
              lineNumber: 155,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avability_modal_subtitle,
              children: "Product"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
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
              lineNumber: 157,
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
              lineNumber: 170,
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
                  lineNumber: 186,
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
                  lineNumber: 189,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 185,
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
                  lineNumber: 200,
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
                  lineNumber: 203,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avability_modal_subtitle,
              children: "Order (pcs)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 214,
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
              lineNumber: 215,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avability_modal_subtitle,
              children: "Keterangan"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 224,
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
              lineNumber: 225,
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
                lineNumber: 235,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 234,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
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

      var _render = filterData.map(function (val, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
          style: {
            borderRadius: "5px",
            padding: "30px",
            marginTop: "14px"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_title,
              children: val.namaProduk
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 317,
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
                  lineNumber: 323,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  div: true,
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
                  children: [val.stock, " pcs"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 324,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 319,
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
                  lineNumber: 332,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  div: true,
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
                  children: [val.saranOrder, " pcs"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 335,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 328,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 318,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_container,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_subtitle,
                children: "Order"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 341,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
                children: [val.order, " pcs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 342,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 340,
              columnNumber: 15
            }, _this), val.ket ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_container,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_subtitle,
                children: "Keterangan"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 348,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
                children: val.ket
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 351,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 347,
              columnNumber: 17
            }, _this) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 316,
            columnNumber: 13
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 11
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
          lineNumber: 360,
          columnNumber: 11
        }, _this);
      } else {
        return _render;
      }
    } else {
      avabilityList.sort(function (a, b) {
        return a.productFocus.namaProduk.localeCompare(b.productFocus.namaProduk);
      });

      var _filterData = avabilityList.filter(function (val) {
        return val.productFocus.namaProduk.toLowerCase().includes(search.toLowerCase());
      });

      var _render2 = _filterData.map(function (val, index) {
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
              lineNumber: 398,
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
                  lineNumber: 406,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  div: true,
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
                  children: [val.stock, " pcs"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 407,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 402,
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
                  lineNumber: 415,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  div: true,
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
                  children: [val.saranOrder, " pcs"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 418,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 411,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 401,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_container,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_subtitle,
                children: "Order"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 424,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
                children: [val.order, " pcs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 425,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 423,
              columnNumber: 15
            }, _this), val.ket ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_container,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_subtitle,
                children: "Keterangan"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 431,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
                children: val.ket
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 434,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 430,
              columnNumber: 17
            }, _this) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 388,
            columnNumber: 13
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 384,
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
          lineNumber: 443,
          columnNumber: 11
        }, _this);
      } else {
        return _render2;
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
        lineNumber: 471,
        columnNumber: 14
      }, _this);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [renderModalAdd(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.wrapper,
            children: [type === "HISTORY" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Nav__WEBPACK_IMPORTED_MODULE_6__["default"], {
              title: "Avability",
              color: "white",
              backAction: function backAction() {
                next_router__WEBPACK_IMPORTED_MODULE_3___default.a.back();
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 479,
              columnNumber: 17
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Nav__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
              lineNumber: 487,
              columnNumber: 17
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
                    lineNumber: 503,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.progress_bar_now,
                    style: {
                      width: "".concat(avabilityList.length / 25 * 100, "%")
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 504,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 502,
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
                  lineNumber: 511,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 501,
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
                  lineNumber: 522,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 520,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 500,
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
                lineNumber: 527,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 526,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 477,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 476,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdmFiaWxpdHkuanN4Il0sIm5hbWVzIjpbIkF2YWJpbGl0eSIsInR5cGUiLCJ1c2VDb250ZXh0IiwiU3RvcmVzIiwic3RhdGUiLCJkaXNwYXRjaCIsImFjdGlvbnMiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibW9kYWwiLCJzZXRNb2RhbCIsInJlbmRlclByb2R1Y3RMaXN0Iiwic2V0UmVuZGVyUHJvZHVjdExpc3QiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJwcm9kdWN0Iiwic2V0UHJvZHVjdCIsInByb2R1Y3RTZWFyY2giLCJzZXRQcm9kdWN0U2VhcmNoIiwicHJvZHVjdEZvY3VzIiwic2V0UHJvZHVjdEZvY3VzIiwiYXZhYmlsaXR5TGlzdCIsInNldEF2YWJpbGl0eUxpc3QiLCJvcmRlciIsInNldE9yZGVyIiwic2FyYW5PcmRlciIsInNldFNhcmFuT3JkZXIiLCJzdG9jayIsInNldFN0b2NrIiwia2V0Iiwic2V0S2V0IiwicGxhbiIsInNldFBsYW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJub3RFbXB0eSIsImxlbmd0aCIsIndpbmRvdyIsIm9uYmVmb3JldW5sb2FkIiwidmlzaXRQbGFuUmVkdWNlciIsImF2YWJpbGl0eSIsInF1ZXJ5IiwiaWQiLCJnZXRQbGFuSWQiLCJ0aGVuIiwic2FtZVBsYW4iLCJkYXRhIiwiUm91dGVyIiwicHVzaCIsImNoZWNrSW4iLCJzZXRQbGFuQ2hlY2tJbiIsIm5vdyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJnZXRJbnZvaWNlRGF0YSIsImdldFByb2R1a0J5SmVuaXNDaGFubmVsIiwiaWRKZW5pc0NoYW5uZWwiLCJvblNlYXJjaFByb2R1Y3QiLCJyZW5kZXJQcm9kdWN0U2VhcmNoIiwicmVuZGVyIiwibWFwIiwidmFsIiwiaW5kZXgiLCJuYW1hUHJvZHVrIiwiaW5jbHVkZXMiLCJib3JkZXJCb3R0b20iLCJ3aWR0aCIsInJlbmRlck1vZGFsQWRkIiwic3R5bGVzIiwibW9kYWxfYXZhYmlsaXR5Iiwid3JhcHBlciIsImF2YWJpbGl0eV9tb2RhbF9jb250YWluZXIiLCJhZGRfdGl0bGUiLCJhdmFiaWxpdHlfbW9kYWxfc3VidGl0bGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJpbnB1dF9vcmRlcl9zZWFyY2giLCJwb3NpdGlvbiIsIm1heEhlaWdodCIsImJhY2tncm91bmRDb2xvciIsIm92ZXJmbG93WSIsIm1heFdpZHRoIiwicGFkZGluZyIsInpJbmRleCIsInN0b2NrX29yZGVyX2NvbnRhaW5lciIsInBhZGRpbmdSaWdodCIsImlucHV0X29yZGVyIiwicGFkZGluZ0xlZnQiLCJtYXJnaW5Ub3AiLCJyZWciLCJSZWdFeHAiLCJtYXRjaCIsInNhbWVEYXRhSW5kZXgiLCJmaW5kSW5kZXgiLCJzcGxpY2UiLCJyZW5kZXJBdmFiaWxpdHlMaXN0Iiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsImZpbHRlckRhdGEiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsImJvcmRlclJhZGl1cyIsImF2YWJpbGl0eWxpc3RfdGl0bGUiLCJhdmFiaWxpdHlsaXN0X3N0b2NrX2NvbnRhaW5lciIsImF2YWJpbGl0eWxpc3RfY29udGFpbmVyIiwibWFyZ2luUmlnaHQiLCJhdmFiaWxpdHlsaXN0X3N1YnRpdGxlIiwiYXZhYmlsaXR5bGlzdF92YWx1ZSIsIm1hcmdpbkxlZnQiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsIm9uU2F2ZSIsInNldFBsYW5BdmFiaWxpdHkiLCJjb250YWluZXIiLCJiYWNrIiwibWFpbiIsInNlYXJjaF9maXhlZCIsIm1hcmdpbiIsInByb2dyZXNzX2JhciIsInByb2dyZXNzX2Jhcl9ub3ciLCJpbnB1dCIsInBhZGRpbmdUb3AiLCJtYXJnaW5Cb3R0b20iLCJhdmFiaWxpdHlfYm90X2NvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVB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bUJBSEg7QUFJRSw2QkFBVyxFQUFDLFFBSmQ7QUFLRSwyQkFBUyxFQUFFUiwrRUFBTSxDQUFDdUQsS0FMcEI7QUFNRSx1QkFBSyxFQUFFO0FBQUVsQyw2QkFBUyxFQUFFO0FBQWI7QUFOVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQW9CRTtBQUFLLHFCQUFLLEVBQUU7QUFBRW1DLDRCQUFVLEVBQUU7QUFBZCxpQkFBWjtBQUFBLDJCQUNHNUIsbUJBQW1CLEVBRHRCLGVBRUU7QUFBSyx1QkFBSyxFQUFFO0FBQUU2QixnQ0FBWSxFQUFFO0FBQWhCO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF2QkYsRUFnREcvSCxJQUFJLEtBQUssU0FBVCxHQUFxQixJQUFyQixnQkFDQztBQUFLLHVCQUFTLEVBQUVzRSwrRUFBTSxDQUFDMEQsdUJBQXZCO0FBQUEscUNBQ0UscUVBQUMsK0NBQUQ7QUFDRSxvQkFBSSxFQUFFLEtBRFI7QUFFRSx1QkFBTyxFQUFFLG1CQUFNO0FBQ2J0SCwwQkFBUSxDQUFDLElBQUQsQ0FBUixDQURhLENBRWI7O0FBQ0FVLGlDQUFlLENBQUMsRUFBRCxDQUFmO0FBQ0Q7QUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFqREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBLHNCQURGO0FBb0VEO0FBQ0YsR0F6RUQ7O0FBMEVBLFNBQU95QyxNQUFNLEVBQWI7QUFDRDs7R0E1Z0J1QjlELFM7VUFlUG1DLHFEOzs7S0FmT25DLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmlzaXQvcGxhbi9oaXN0b3J5L1tpZF0vYXZhYmlsaXR5LjQ3MzgzZjBkZmMxYzA1ODVjYjVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvcGFnZXMvVmlzaXRQbGFuRGV0YWlsLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCB7IFN0b3JlcyB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IE5hdiBmcm9tIFwiLi9OYXZcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4vU3Bpbm5lclwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi9DYXJkXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldEludm9pY2VEYXRhLFxyXG4gIGdldFBsYW5JZCxcclxuICBnZXRQbGFuTW9udGhseUhpc3RvcnksXHJcbiAgZ2V0UHJvZHVjdFNlYXJjaCxcclxuICBnZXRQcm9kdWtCeUplbmlzQ2hhbm5lbCxcclxufSBmcm9tIFwiLi4vaGVscGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdmFiaWxpdHkoeyB0eXBlIH0pIHtcclxuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCwgYWN0aW9ucyB9ID0gdXNlQ29udGV4dChTdG9yZXMpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtyZW5kZXJQcm9kdWN0TGlzdCwgc2V0UmVuZGVyUHJvZHVjdExpc3RdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJvZHVjdCwgc2V0UHJvZHVjdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Byb2R1Y3RTZWFyY2gsIHNldFByb2R1Y3RTZWFyY2hdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtwcm9kdWN0Rm9jdXMsIHNldFByb2R1Y3RGb2N1c10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2F2YWJpbGl0eUxpc3QsIHNldEF2YWJpbGl0eUxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtvcmRlciwgc2V0T3JkZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3NhcmFuT3JkZXIsIHNldFNhcmFuT3JkZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3N0b2NrLCBzZXRTdG9ja10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBba2V0LCBzZXRLZXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3BsYW4sIHNldFBsYW5dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGUgIT09IFwiSElTVE9SWVwiKSB7XHJcbiAgICB9XHJcbiAgICBjb25zdCBub3RFbXB0eSA9IGF2YWJpbGl0eUxpc3QubGVuZ3RoID4gMDtcclxuICAgIGlmIChub3RFbXB0eSA+IDApIHtcclxuICAgICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBcIkRhdGEgd2lsbCBiZSBsb3N0IGlmIHlvdSBsZWF2ZSB0aGUgcGFnZSwgYXJlIHlvdSBzdXJlP1wiO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGUgPT09IFwiUExBTlwiKSB7XHJcbiAgICAgIGlmIChzdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLmF2YWJpbGl0eS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgc2V0QXZhYmlsaXR5TGlzdChbLi4uc3RhdGUudmlzaXRQbGFuUmVkdWNlci5hdmFiaWxpdHldKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlVOUExBTlwiKSB7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiU1BSRUFESU5HXCIpIHtcclxuICAgIH1cclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0eXBlID09PSBcIlBMQU5cIikge1xyXG4gICAgICBpZiAocm91dGVyLnF1ZXJ5LmlkKSB7XHJcbiAgICAgICAgZ2V0UGxhbklkKHJvdXRlci5xdWVyeS5pZClcclxuICAgICAgICAgIC50aGVuKCh7IHNhbWVQbGFuLCBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2FtZVBsYW4sIGRhdGEpO1xyXG4gICAgICAgICAgICBpZiAoc2FtZVBsYW4ubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi92aXNpdC9wbGFuXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHNldFBsYW4oZGF0YSk7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgaWYgKCFzdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLmNoZWNrSW4pIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbnMuc2V0UGxhbkNoZWNrSW4obm93KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJVTlBMQU5cIikge1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlNQUkVBRElOR1wiKSB7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiSElTVE9SWVwiKSB7XHJcbiAgICAgIGdldEludm9pY2VEYXRhKHJvdXRlci5xdWVyeS5pZClcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgc2V0QXZhYmlsaXR5TGlzdChkYXRhKTtcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW2Rpc3BhdGNoLnJvdXRlci5xdWVyeS5pZF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGUgPT09IFwiUExBTlwiKSB7XHJcbiAgICAgIGdldFByb2R1a0J5SmVuaXNDaGFubmVsKHBsYW4uaWRKZW5pc0NoYW5uZWwpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIHNldFByb2R1Y3QoZGF0YSk7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiVU5QTEFOXCIpIHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiU1BSRUFESU5HXCIpIHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSwgW3BsYW5dKTtcclxuXHJcbiAgY29uc3Qgb25TZWFyY2hQcm9kdWN0ID0gKHNlYXJjaCkgPT4ge1xyXG4gICAgLy8gc2V0UHJvZHVjdEZvY3VzKHNlYXJjaCk7XHJcbiAgICAvLyBnZXRQcm9kdWN0U2VhcmNoKHNlYXJjaClcclxuICAgIC8vICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIC8vICAgICBzZXRQcm9kdWN0KGRhdGEpO1xyXG4gICAgLy8gICB9KVxyXG4gICAgLy8gICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAvLyAgIH0pOzsnJycnXHJcbiAgICBzZXRQcm9kdWN0U2VhcmNoKHNlYXJjaCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyUHJvZHVjdFNlYXJjaCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJlbmRlciA9IHByb2R1Y3QubWFwKCh2YWwsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmICh2YWwubmFtYVByb2R1ay5pbmNsdWRlcyhwcm9kdWN0U2VhcmNoKSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAvLyBzZXRQcm9kdWN0KFtdKTtcclxuICAgICAgICAgICAgICBzZXRQcm9kdWN0Rm9jdXModmFsKTtcclxuICAgICAgICAgICAgICBzZXRSZW5kZXJQcm9kdWN0TGlzdChmYWxzZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogXCIuNXB4IHNvbGlkICNmMGYwZjBcIiwgd2lkdGg6IFwiMzU2cHhcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7dmFsLm5hbWFQcm9kdWt9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZW5kZXI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyTW9kYWxBZGQgPSAoKSA9PiB7XHJcbiAgICBpZiAobW9kYWwpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbF9hdmFiaWxpdHl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRNb2RhbChmYWxzZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eV9tb2RhbF9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkX3RpdGxlfT5BZGQgUHJvZHVjdDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5X21vZGFsX3N1YnRpdGxlfT5Qcm9kdWN0PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgb25TZWFyY2hQcm9kdWN0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cHJvZHVjdEZvY3VzLm5hbWFQcm9kdWt9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF9vcmRlcl9zZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAvLyBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgIHNldFByb2R1Y3QoW10pO1xyXG4gICAgICAgICAgICAgICAgLy8gfX1cclxuICAgICAgICAgICAgICAgIG9uRm9jdXM9eygpID0+IHNldFJlbmRlclByb2R1Y3RMaXN0KHRydWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAge3Byb2R1Y3QgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IFwiMTgwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvd1k6IFwic2Nyb2xsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiNDAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjAgNHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiA5OTk5OTksXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtyZW5kZXJQcm9kdWN0TGlzdCA/IHJlbmRlclByb2R1Y3RTZWFyY2goKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0b2NrX29yZGVyX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdSaWdodDogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5X21vZGFsX3N1YnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICBTdG9jayAocGNzKVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTdG9jayhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0X29yZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdG9ja31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nTGVmdDogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5X21vZGFsX3N1YnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICBTYXJhbiBPcmRlciAocGNzKVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTYXJhbk9yZGVyKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfb3JkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NhcmFuT3JkZXJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eV9tb2RhbF9zdWJ0aXRsZX0+T3JkZXIgKHBjcyk8L2Rpdj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRPcmRlcihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfb3JkZXJ9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17b3JkZXJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eV9tb2RhbF9zdWJ0aXRsZX0+S2V0ZXJhbmdhbjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldEtldChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJLZXQuXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0X29yZGVyfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2tldH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgdGV4dD17XCJBZGRcIn1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZWcgPSBuZXcgUmVnRXhwKC9eKFxcKD9cXCs/WzAtOV0qXFwpPyk/WzAtOV9cXC0gXFwoXFwpXSokL2cpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGb2N1cy5uYW1hUHJvZHVrICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdG9jay5tYXRjaChyZWcpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICBzYXJhbk9yZGVyLm1hdGNoKHJlZykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIG9yZGVyLm1hdGNoKHJlZylcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmIChhdmFiaWxpdHlMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNhbWVEYXRhSW5kZXggPSBhdmFiaWxpdHlMaXN0LmZpbmRJbmRleChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAodmFsKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsLnByb2R1Y3RGb2N1cy5uYW1hUHJvZHVrID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZvY3VzLm5hbWFQcm9kdWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNhbWVEYXRhSW5kZXggKyAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhYmlsaXR5TGlzdC5zcGxpY2Uoc2FtZURhdGFJbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhYmlsaXR5TGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGb2N1cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b2NrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FyYW5PcmRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1vZGFsKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTdG9jayhcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTYXJhbk9yZGVyKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldE9yZGVyKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEtldChcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdmFiaWxpdHlMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZvY3VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXJhbk9yZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0b2NrKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNhcmFuT3JkZXIoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3JkZXIoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0S2V0KFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdmFiaWxpdHlMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGb2N1cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9jayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzYXJhbk9yZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE1vZGFsKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RvY2soXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNhcmFuT3JkZXIoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE9yZGVyKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRLZXQoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlckF2YWJpbGl0eUxpc3QgPSAoKSA9PiB7XHJcbiAgICBpZiAodHlwZSA9PT0gXCJISVNUT1JZXCIpIHtcclxuICAgICAgY29uc29sZS5sb2coYXZhYmlsaXR5TGlzdCk7XHJcbiAgICAgIGF2YWJpbGl0eUxpc3Quc29ydCgoYSwgYikgPT4gYS5uYW1hUHJvZHVrLmxvY2FsZUNvbXBhcmUoYi5uYW1hUHJvZHVrKSk7XHJcbiAgICAgIGNvbnN0IGZpbHRlckRhdGEgPSBhdmFiaWxpdHlMaXN0LmZpbHRlcigodmFsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHZhbC5uYW1hUHJvZHVrLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgcmVuZGVyID0gZmlsdGVyRGF0YS5tYXAoKHZhbCwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBwYWRkaW5nOiBcIjMwcHhcIiwgbWFyZ2luVG9wOiBcIjE0cHhcIiB9fVxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF90aXRsZX0+e3ZhbC5uYW1hUHJvZHVrfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF9zdG9ja19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X2NvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X3N1YnRpdGxlfT5TdG9jazwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X3ZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICB7dmFsLnN0b2NrfSBwY3NcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF9jb250YWluZXJ9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X3N1YnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICBTYXJhbiBPcmRlclxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF92YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3ZhbC5zYXJhbk9yZGVyfSBwY3NcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3RfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF9zdWJ0aXRsZX0+T3JkZXI8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF92YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgIHt2YWwub3JkZXJ9IHBjc1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge3ZhbC5rZXQgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3RfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X3N1YnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICBLZXRlcmFuZ2FuXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3RfdmFsdWV9Pnt2YWwua2V0fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoZmlsdGVyRGF0YS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogXCIxNTBweFwiLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiNkMGQwZDBcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTm8gSXRlbVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcmVuZGVyO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhdmFiaWxpdHlMaXN0LnNvcnQoKGEsIGIpID0+XHJcbiAgICAgICAgYS5wcm9kdWN0Rm9jdXMubmFtYVByb2R1ay5sb2NhbGVDb21wYXJlKGIucHJvZHVjdEZvY3VzLm5hbWFQcm9kdWspXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGZpbHRlckRhdGEgPSBhdmFiaWxpdHlMaXN0LmZpbHRlcigodmFsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHZhbC5wcm9kdWN0Rm9jdXMubmFtYVByb2R1a1xyXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgIC5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCByZW5kZXIgPSBmaWx0ZXJEYXRhLm1hcCgodmFsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIHBhZGRpbmc6IFwiMzBweFwiLCBtYXJnaW5Ub3A6IFwiMTRweFwiIH19XHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRQcm9kdWN0Rm9jdXModmFsLnByb2R1Y3RGb2N1cyk7XHJcbiAgICAgICAgICAgICAgICBzZXRTdG9jayh2YWwuc3RvY2spO1xyXG4gICAgICAgICAgICAgICAgc2V0U2FyYW5PcmRlcih2YWwuc2FyYW5PcmRlcik7XHJcbiAgICAgICAgICAgICAgICBzZXRPcmRlcih2YWwub3JkZXIpO1xyXG4gICAgICAgICAgICAgICAgc2V0S2V0KHZhbC5rZXQpO1xyXG4gICAgICAgICAgICAgICAgc2V0TW9kYWwodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF90aXRsZX0+XHJcbiAgICAgICAgICAgICAgICB7dmFsLnByb2R1Y3RGb2N1cy5uYW1hUHJvZHVrfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF9zdG9ja19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X2NvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X3N1YnRpdGxlfT5TdG9jazwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X3ZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICB7dmFsLnN0b2NrfSBwY3NcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF9jb250YWluZXJ9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X3N1YnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICBTYXJhbiBPcmRlclxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF92YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3ZhbC5zYXJhbk9yZGVyfSBwY3NcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3RfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF9zdWJ0aXRsZX0+T3JkZXI8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF92YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgIHt2YWwub3JkZXJ9IHBjc1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge3ZhbC5rZXQgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3RfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X3N1YnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICBLZXRlcmFuZ2FuXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3RfdmFsdWV9Pnt2YWwua2V0fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoZmlsdGVyRGF0YS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogXCIxNTBweFwiLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiNkMGQwZDBcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTm8gSXRlbVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcmVuZGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBvblNhdmUgPSAoKSA9PiB7XHJcbiAgICBpZiAodHlwZSA9PT0gXCJQTEFOXCIpIHtcclxuICAgICAgYWN0aW9ucy5zZXRQbGFuQXZhYmlsaXR5KGF2YWJpbGl0eUxpc3QpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhhdmFiaWxpdHlMaXN0KTtcclxuICAgICAgUm91dGVyLnB1c2goYC92aXNpdC9wbGFuLyR7cm91dGVyLnF1ZXJ5LmlkfWApO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlVOUExBTlwiKSB7XHJcbiAgICAgIFJvdXRlci5wdXNoKGAvdmlzaXQvdW5wbGFuL3N1Ym1pdGApO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlNQUkVBRElOR1wiKSB7XHJcbiAgICAgIFJvdXRlci5wdXNoKGAvdmlzaXQvc3ByZWFkaW5nL3N1Ym1pdGApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge3JlbmRlck1vZGFsQWRkKCl9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAge3R5cGUgPT09IFwiSElTVE9SWVwiID8gKFxyXG4gICAgICAgICAgICAgICAgPE5hdlxyXG4gICAgICAgICAgICAgICAgICB0aXRsZT17XCJBdmFiaWxpdHlcIn1cclxuICAgICAgICAgICAgICAgICAgY29sb3I9e1wid2hpdGVcIn1cclxuICAgICAgICAgICAgICAgICAgYmFja0FjdGlvbj17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5iYWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8TmF2XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtcIkF2YWJpbGl0eVwifVxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj17XCJ3aGl0ZVwifVxyXG4gICAgICAgICAgICAgICAgICBhY3Rpb249e1wiU2F2ZVwifVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25TYXZlKCk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tBY3Rpb249eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIuYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hfZml4ZWR9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxMHB4IDAgMCAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJ9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcl9ub3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYCR7KGF2YWJpbGl0eUxpc3QubGVuZ3RoIC8gMjUpICogMTAwfSVgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjBcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdUb3A6IFwiNjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICB7cmVuZGVyQXZhYmlsaXR5TGlzdCgpfVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMDBweFwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7dHlwZSA9PT0gXCJISVNUT1JZXCIgPyBudWxsIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlfYm90X2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcIkFkZFwifVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldE1vZGFsKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gc2V0UHJvZHVjdChbXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRQcm9kdWN0Rm9jdXMoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gcmVuZGVyKCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==