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
          lineNumber: 123,
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
          lineNumber: 144,
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
              lineNumber: 152,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avability_modal_subtitle,
              children: "Product"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
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
              lineNumber: 154,
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
              lineNumber: 167,
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
                  lineNumber: 183,
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
                  lineNumber: 186,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 182,
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
                  lineNumber: 197,
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
                  lineNumber: 200,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avability_modal_subtitle,
              children: "Order (pcs)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
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
              lineNumber: 212,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avability_modal_subtitle,
              children: "Keterangan"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 221,
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
              lineNumber: 222,
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
                lineNumber: 232,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
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
            setKet(val.ket);
            setModal(true);
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_title,
            children: val.productFocus.namaProduk
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 325,
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
                lineNumber: 333,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                div: true,
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
                children: [val.stock, " pcs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 334,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 329,
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
                lineNumber: 342,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                div: true,
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
                children: [val.saranOrder, " pcs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 343,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 338,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 328,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_container,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_subtitle,
              children: "Order"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 349,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
              children: [val.order, " pcs"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 350,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 348,
            columnNumber: 13
          }, _this), val.ket ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_container,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_subtitle,
              children: "Keterangan"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 354,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
              children: val.ket
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 355,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 353,
            columnNumber: 15
          }, _this) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 11
        }, _this)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 311,
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
        lineNumber: 364,
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
    if (loading) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 387,
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
              lineNumber: 394,
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
                    lineNumber: 409,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.progress_bar_now,
                    style: {
                      width: "".concat(avabilityList.length / 25 * 100, "%")
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 410,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 408,
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
                  lineNumber: 417,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 407,
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
                  lineNumber: 428,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 426,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 406,
              columnNumber: 15
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
                lineNumber: 432,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 431,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 393,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 392,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdmFiaWxpdHkuanN4Il0sIm5hbWVzIjpbIkF2YWJpbGl0eSIsInR5cGUiLCJ1c2VDb250ZXh0IiwiU3RvcmVzIiwic3RhdGUiLCJkaXNwYXRjaCIsImFjdGlvbnMiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibW9kYWwiLCJzZXRNb2RhbCIsInJlbmRlclByb2R1Y3RMaXN0Iiwic2V0UmVuZGVyUHJvZHVjdExpc3QiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJwcm9kdWN0Iiwic2V0UHJvZHVjdCIsInByb2R1Y3RTZWFyY2giLCJzZXRQcm9kdWN0U2VhcmNoIiwicHJvZHVjdEZvY3VzIiwic2V0UHJvZHVjdEZvY3VzIiwiYXZhYmlsaXR5TGlzdCIsInNldEF2YWJpbGl0eUxpc3QiLCJvcmRlciIsInNldE9yZGVyIiwic2FyYW5PcmRlciIsInNldFNhcmFuT3JkZXIiLCJzdG9jayIsInNldFN0b2NrIiwia2V0Iiwic2V0S2V0IiwicGxhbiIsInNldFBsYW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJub3RFbXB0eSIsImxlbmd0aCIsIndpbmRvdyIsIm9uYmVmb3JldW5sb2FkIiwidmlzaXRQbGFuUmVkdWNlciIsImF2YWJpbGl0eSIsInF1ZXJ5IiwiaWQiLCJnZXRQbGFuSWQiLCJ0aGVuIiwic2FtZVBsYW4iLCJkYXRhIiwiUm91dGVyIiwicHVzaCIsImNoZWNrSW4iLCJzZXRQbGFuQ2hlY2tJbiIsIm5vdyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJnZXRJbnZvaWNlRGF0YSIsImdldFByb2R1a0J5SmVuaXNDaGFubmVsIiwiaWRKZW5pc0NoYW5uZWwiLCJvblNlYXJjaFByb2R1Y3QiLCJyZW5kZXJQcm9kdWN0U2VhcmNoIiwicmVuZGVyIiwibWFwIiwidmFsIiwiaW5kZXgiLCJuYW1hUHJvZHVrIiwiaW5jbHVkZXMiLCJib3JkZXJCb3R0b20iLCJ3aWR0aCIsInJlbmRlck1vZGFsQWRkIiwic3R5bGVzIiwibW9kYWxfYXZhYmlsaXR5Iiwid3JhcHBlciIsImF2YWJpbGl0eV9tb2RhbF9jb250YWluZXIiLCJhZGRfdGl0bGUiLCJhdmFiaWxpdHlfbW9kYWxfc3VidGl0bGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJpbnB1dF9vcmRlcl9zZWFyY2giLCJwb3NpdGlvbiIsIm1heEhlaWdodCIsImJhY2tncm91bmRDb2xvciIsIm92ZXJmbG93WSIsIm1heFdpZHRoIiwicGFkZGluZyIsInpJbmRleCIsInN0b2NrX29yZGVyX2NvbnRhaW5lciIsInBhZGRpbmdSaWdodCIsImlucHV0X29yZGVyIiwicGFkZGluZ0xlZnQiLCJtYXJnaW5Ub3AiLCJyZWciLCJSZWdFeHAiLCJtYXRjaCIsInNhbWVEYXRhSW5kZXgiLCJmaW5kSW5kZXgiLCJzcGxpY2UiLCJyZW5kZXJBdmFiaWxpdHlMaXN0Iiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsImZpbHRlckRhdGEiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsImJvcmRlclJhZGl1cyIsImF2YWJpbGl0eWxpc3RfdGl0bGUiLCJhdmFiaWxpdHlsaXN0X3N0b2NrX2NvbnRhaW5lciIsImF2YWJpbGl0eWxpc3RfY29udGFpbmVyIiwibWFyZ2luUmlnaHQiLCJhdmFiaWxpdHlsaXN0X3N1YnRpdGxlIiwiYXZhYmlsaXR5bGlzdF92YWx1ZSIsIm1hcmdpbkxlZnQiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsIm9uU2F2ZSIsInNldFBsYW5BdmFiaWxpdHkiLCJjb250YWluZXIiLCJiYWNrIiwibWFpbiIsInNlYXJjaF9maXhlZCIsIm1hcmdpbiIsInByb2dyZXNzX2JhciIsInByb2dyZXNzX2Jhcl9ub3ciLCJpbnB1dCIsInBhZGRpbmdUb3AiLCJtYXJnaW5Cb3R0b20iLCJhdmFiaWxpdHlfYm90X2NvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVB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OztLQWZPbkMsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92aXNpdC9wbGFuL2hpc3RvcnkvW2lkXS9hdmFiaWxpdHkuMjMyMzJmNGE5ZDQyMzViN2FmMzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wYWdlcy9WaXNpdFBsYW5EZXRhaWwubW9kdWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IHsgU3RvcmVzIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgTmF2IGZyb20gXCIuL05hdlwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi9TcGlubmVyXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgZ2V0SW52b2ljZURhdGEsXHJcbiAgZ2V0UGxhbklkLFxyXG4gIGdldFBsYW5Nb250aGx5SGlzdG9yeSxcclxuICBnZXRQcm9kdWN0U2VhcmNoLFxyXG4gIGdldFByb2R1a0J5SmVuaXNDaGFubmVsLFxyXG59IGZyb20gXCIuLi9oZWxwZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF2YWJpbGl0eSh7IHR5cGUgfSkge1xyXG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoLCBhY3Rpb25zIH0gPSB1c2VDb250ZXh0KFN0b3Jlcyk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3JlbmRlclByb2R1Y3RMaXN0LCBzZXRSZW5kZXJQcm9kdWN0TGlzdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcm9kdWN0LCBzZXRQcm9kdWN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcHJvZHVjdFNlYXJjaCwgc2V0UHJvZHVjdFNlYXJjaF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Byb2R1Y3RGb2N1cywgc2V0UHJvZHVjdEZvY3VzXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbYXZhYmlsaXR5TGlzdCwgc2V0QXZhYmlsaXR5TGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW29yZGVyLCBzZXRPcmRlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc2FyYW5PcmRlciwgc2V0U2FyYW5PcmRlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3RvY2ssIHNldFN0b2NrXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtrZXQsIHNldEtldF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGxhbiwgc2V0UGxhbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBub3RFbXB0eSA9IGF2YWJpbGl0eUxpc3QubGVuZ3RoID4gMDtcclxuICAgIGlmIChub3RFbXB0eSA+IDApIHtcclxuICAgICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBcIkRhdGEgd2lsbCBiZSBsb3N0IGlmIHlvdSBsZWF2ZSB0aGUgcGFnZSwgYXJlIHlvdSBzdXJlP1wiO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGUgPT09IFwiUExBTlwiKSB7XHJcbiAgICAgIGlmIChzdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLmF2YWJpbGl0eS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgc2V0QXZhYmlsaXR5TGlzdChbLi4uc3RhdGUudmlzaXRQbGFuUmVkdWNlci5hdmFiaWxpdHldKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlVOUExBTlwiKSB7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiU1BSRUFESU5HXCIpIHtcclxuICAgIH1cclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0eXBlID09PSBcIlBMQU5cIikge1xyXG4gICAgICBpZiAocm91dGVyLnF1ZXJ5LmlkKSB7XHJcbiAgICAgICAgZ2V0UGxhbklkKHJvdXRlci5xdWVyeS5pZClcclxuICAgICAgICAgIC50aGVuKCh7IHNhbWVQbGFuLCBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2FtZVBsYW4sIGRhdGEpO1xyXG4gICAgICAgICAgICBpZiAoc2FtZVBsYW4ubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi92aXNpdC9wbGFuXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHNldFBsYW4oZGF0YSk7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgaWYgKCFzdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLmNoZWNrSW4pIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbnMuc2V0UGxhbkNoZWNrSW4obm93KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJVTlBMQU5cIikge1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlNQUkVBRElOR1wiKSB7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiSElTVE9SWVwiKSB7XHJcbiAgICAgIGdldEludm9pY2VEYXRhKHJvdXRlci5xdWVyeS5pZClcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgc2V0QXZhYmlsaXR5TGlzdChkYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIucXVlcnkuaWRdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0eXBlID09PSBcIlBMQU5cIikge1xyXG4gICAgICBnZXRQcm9kdWtCeUplbmlzQ2hhbm5lbChwbGFuLmlkSmVuaXNDaGFubmVsKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBzZXRQcm9kdWN0KGRhdGEpO1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlVOUExBTlwiKSB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlNQUkVBRElOR1wiKSB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sIFtwbGFuXSk7XHJcblxyXG4gIGNvbnN0IG9uU2VhcmNoUHJvZHVjdCA9IChzZWFyY2gpID0+IHtcclxuICAgIC8vIHNldFByb2R1Y3RGb2N1cyhzZWFyY2gpO1xyXG4gICAgLy8gZ2V0UHJvZHVjdFNlYXJjaChzZWFyY2gpXHJcbiAgICAvLyAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAvLyAgICAgc2V0UHJvZHVjdChkYXRhKTtcclxuICAgIC8vICAgfSlcclxuICAgIC8vICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgLy8gICB9KTs7JycnJ1xyXG4gICAgc2V0UHJvZHVjdFNlYXJjaChzZWFyY2gpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlclByb2R1Y3RTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICBjb25zdCByZW5kZXIgPSBwcm9kdWN0Lm1hcCgodmFsLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAodmFsLm5hbWFQcm9kdWsuaW5jbHVkZXMocHJvZHVjdFNlYXJjaCkpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gc2V0UHJvZHVjdChbXSk7XHJcbiAgICAgICAgICAgICAgc2V0UHJvZHVjdEZvY3VzKHZhbCk7XHJcbiAgICAgICAgICAgICAgc2V0UmVuZGVyUHJvZHVjdExpc3QoZmFsc2UpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXJCb3R0b206IFwiLjVweCBzb2xpZCAjZjBmMGYwXCIsIHdpZHRoOiBcIjM1NnB4XCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3ZhbC5uYW1hUHJvZHVrfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVuZGVyO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlck1vZGFsQWRkID0gKCkgPT4ge1xyXG4gICAgaWYgKG1vZGFsKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxfYXZhYmlsaXR5fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0TW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlfbW9kYWxfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZF90aXRsZX0+QWRkIFByb2R1Y3Q8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eV9tb2RhbF9zdWJ0aXRsZX0+UHJvZHVjdDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIG9uU2VhcmNoUHJvZHVjdChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb2R1Y3RGb2N1cy5uYW1hUHJvZHVrfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfb3JkZXJfc2VhcmNofVxyXG4gICAgICAgICAgICAgICAgLy8gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICBzZXRQcm9kdWN0KFtdKTtcclxuICAgICAgICAgICAgICAgIC8vIH19XHJcbiAgICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRSZW5kZXJQcm9kdWN0TGlzdCh0cnVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHtwcm9kdWN0ID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBcIjE4MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dZOiBcInNjcm9sbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBcIjQwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIwIDRweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogOTk5OTk5LFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7cmVuZGVyUHJvZHVjdExpc3QgPyByZW5kZXJQcm9kdWN0U2VhcmNoKCkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdG9ja19vcmRlcl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nUmlnaHQ6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eV9tb2RhbF9zdWJ0aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgU3RvY2sgKHBjcylcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0U3RvY2soZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF9vcmRlcn1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RvY2t9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eV9tb2RhbF9zdWJ0aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgU2FyYW4gT3JkZXIgKHBjcylcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0U2FyYW5PcmRlcihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0X29yZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzYXJhbk9yZGVyfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlfbW9kYWxfc3VidGl0bGV9Pk9yZGVyIChwY3MpPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0T3JkZXIoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0X29yZGVyfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e29yZGVyfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlfbW9kYWxfc3VidGl0bGV9PktldGVyYW5nYW48L2Rpdj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRLZXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiS2V0LlwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF9vcmRlcn1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtrZXR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHRleHQ9e1wiQWRkXCJ9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cCgvXihcXCg/XFwrP1swLTldKlxcKT8pP1swLTlfXFwtIFxcKFxcKV0qJC9nKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Rm9jdXMubmFtYVByb2R1ayAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3RvY2subWF0Y2gocmVnKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2FyYW5PcmRlci5tYXRjaChyZWcpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICBvcmRlci5tYXRjaChyZWcpXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoYXZhYmlsaXR5TGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzYW1lRGF0YUluZGV4ID0gYXZhYmlsaXR5TGlzdC5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKHZhbCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbC5wcm9kdWN0Rm9jdXMubmFtYVByb2R1ayA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGb2N1cy5uYW1hUHJvZHVrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzYW1lRGF0YUluZGV4ICsgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF2YWJpbGl0eUxpc3Quc3BsaWNlKHNhbWVEYXRhSW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF2YWJpbGl0eUxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Rm9jdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9jayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhcmFuT3JkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNb2RhbChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RvY2soXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2FyYW5PcmRlcihcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRPcmRlcihcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRLZXQoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhYmlsaXR5TGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGb2N1cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b2NrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FyYW5PcmRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1vZGFsKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTdG9jayhcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTYXJhbk9yZGVyKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldE9yZGVyKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEtldChcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXZhYmlsaXR5TGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Rm9jdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2FyYW5PcmRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRNb2RhbChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0b2NrKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTYXJhbk9yZGVyKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRPcmRlcihcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0S2V0KFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCByZW5kZXJBdmFiaWxpdHlMaXN0ID0gKCkgPT4ge1xyXG4gICAgYXZhYmlsaXR5TGlzdC5zb3J0KChhLCBiKSA9PlxyXG4gICAgICBhLnByb2R1Y3RGb2N1cy5uYW1hUHJvZHVrLmxvY2FsZUNvbXBhcmUoYi5wcm9kdWN0Rm9jdXMubmFtYVByb2R1aylcclxuICAgICk7XHJcbiAgICBjb25zdCBmaWx0ZXJEYXRhID0gYXZhYmlsaXR5TGlzdC5maWx0ZXIoKHZhbCkgPT4ge1xyXG4gICAgICByZXR1cm4gdmFsLnByb2R1Y3RGb2N1cy5uYW1hUHJvZHVrXHJcbiAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCByZW5kZXIgPSBmaWx0ZXJEYXRhLm1hcCgodmFsLCBpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJkXHJcbiAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIHBhZGRpbmc6IFwiMzBweFwiLCBtYXJnaW5Ub3A6IFwiMTRweFwiIH19XHJcbiAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFByb2R1Y3RGb2N1cyh2YWwucHJvZHVjdEZvY3VzKTtcclxuICAgICAgICAgICAgICBzZXRTdG9jayh2YWwuc3RvY2spO1xyXG4gICAgICAgICAgICAgIHNldFNhcmFuT3JkZXIodmFsLnNhcmFuT3JkZXIpO1xyXG4gICAgICAgICAgICAgIHNldE9yZGVyKHZhbC5vcmRlcik7XHJcbiAgICAgICAgICAgICAgc2V0S2V0KHZhbC5rZXQpO1xyXG4gICAgICAgICAgICAgIHNldE1vZGFsKHRydWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3RfdGl0bGV9PlxyXG4gICAgICAgICAgICAgIHt2YWwucHJvZHVjdEZvY3VzLm5hbWFQcm9kdWt9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3Rfc3RvY2tfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X2NvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X3N1YnRpdGxlfT5TdG9jazwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF92YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgIHt2YWwuc3RvY2t9IHBjc1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF9jb250YWluZXJ9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X3N1YnRpdGxlfT5TYXJhbiBPcmRlcjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF92YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgIHt2YWwuc2FyYW5PcmRlcn0gcGNzXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF9zdWJ0aXRsZX0+T3JkZXI8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3RfdmFsdWV9Pnt2YWwub3JkZXJ9IHBjczwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3ZhbC5rZXQgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3Rfc3VidGl0bGV9PktldGVyYW5nYW48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF92YWx1ZX0+e3ZhbC5rZXR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgICBpZiAoZmlsdGVyRGF0YS5sZW5ndGggPT0gMCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luVG9wOiBcIjE1MHB4XCIsIGNvbG9yOiBcIiNkMGQwZDBcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIE5vIEl0ZW1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiByZW5kZXI7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBvblNhdmUgPSAoKSA9PiB7XHJcbiAgICBpZiAodHlwZSA9PT0gXCJQTEFOXCIpIHtcclxuICAgICAgYWN0aW9ucy5zZXRQbGFuQXZhYmlsaXR5KGF2YWJpbGl0eUxpc3QpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhhdmFiaWxpdHlMaXN0KTtcclxuICAgICAgUm91dGVyLnB1c2goYC92aXNpdC9wbGFuLyR7cm91dGVyLnF1ZXJ5LmlkfWApO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlVOUExBTlwiKSB7XHJcbiAgICAgIFJvdXRlci5wdXNoKGAvdmlzaXQvdW5wbGFuL3N1Ym1pdGApO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlNQUkVBRElOR1wiKSB7XHJcbiAgICAgIFJvdXRlci5wdXNoKGAvdmlzaXQvc3ByZWFkaW5nL3N1Ym1pdGApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge3JlbmRlck1vZGFsQWRkKCl9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgPE5hdlxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e1wiQXZhYmlsaXR5XCJ9XHJcbiAgICAgICAgICAgICAgICBjb2xvcj17XCJ3aGl0ZVwifVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uPXtcIlNhdmVcIn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgb25TYXZlKCk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgYmFja0FjdGlvbj17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBSb3V0ZXIuYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoX2ZpeGVkfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMTBweCAwIDAgMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfYmFyfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJfbm93fVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGAkeyhhdmFiaWxpdHlMaXN0Lmxlbmd0aCAvIDI1KSAqIDEwMH0lYCxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIwXCIgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjYwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAge3JlbmRlckF2YWJpbGl0eUxpc3QoKX1cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTAwcHhcIiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlfYm90X2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHRleHQ9e1wiQWRkXCJ9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRNb2RhbCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzZXRQcm9kdWN0KFtdKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQcm9kdWN0Rm9jdXMoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIHJlbmRlcigpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=