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

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      searchListProduct = _useState5[0],
      setSearchListProduct = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      product = _useState6[0],
      setProduct = _useState6[1];

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
      pengiriman = _useState10[0],
      setPengiriman = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      avgSales = _useState11[0],
      setAvgSales = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      harga = _useState12[0],
      setHarga = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      saranOrder = _useState13[0],
      setSaranOrder = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      stock = _useState14[0],
      setStock = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      minor = _useState15[0],
      setMinor = _useState15[1];

  var _useState16 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      ket = _useState16[0],
      setKet = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      plan = _useState17[0],
      setPlan = _useState17[1];

  var _useState18 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      newNOO = _useState18[0],
      setNewNOO = _useState18[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (type !== "HISTORY") {
      var notEmpty = avabilityList.length > 0;

      if (notEmpty > 0) {
        window.onbeforeunload = function () {
          return "Data will be lost if you leave the page, are you sure?";
        };
      }
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (type === "PLAN") {
      if (state.visitPlanReducer.avability.length > 0) {
        setAvabilityList(Object(C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state.visitPlanReducer.avability));
      }
    } else if (type === "UNPLAN") {
      if (state.visitUnplanReducer.avability.length > 0) {
        setAvabilityList(Object(C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state.visitUnplanReducer.avability));
      }
    } else if (type === "SPREADING") {
      if (state.visitSpreadingReducer.avability.length > 0) {
        setAvabilityList(Object(C_Users_Rico_Desktop_Home_Kalbe_app_sakamor_new_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state.visitSpreadingReducer.avability));
      }
    }
  }, [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {}, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (router.query["new"]) {
      setNewNOO(true);
    } else {
      if (type === "UNPLAN") {
        if (state.visitUnplanReducer.jenisChannel.namaJenisChannel && state.visitUnplanReducer.outlet.namaOutlet) {} else {
          next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/visit/unplan");
        }
      } else if (type === "SPREADING") {}
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (productFocus.produkID) {
      if (type === "PLAN") {
        setAvgSales(10);
        setHarga(5000);
      } else if (type === "UNPLAN") {
        setAvgSales(10);
        setHarga(5000); // getProductAvgSales(
        //   productFocus.produkID,
        //   state.visitUnplanReducer.outlet.outletID
        // )
        //   .then((data) => {
        //     console.log(data);
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
      } else if (type === "SPREADING") {
        setAvgSales(10);
        setHarga(5000);
      }
    }
  }, [productFocus]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (productFocus.produkID) {
      if (stock && pengiriman && minor) {
        if (type === "PLAN") {
          setSaranOrder(avgSales * (parseInt(pengiriman) + parseInt(stock)) + parseInt(minor));
        } else if (type === "UNPLAN") {
          setSaranOrder(avgSales * (parseInt(pengiriman) + parseInt(stock)) + parseInt(minor));
        } else if (type === "SPREADING") {
          setSaranOrder(avgSales * (parseInt(pengiriman) + parseInt(stock)) + parseInt(minor));
        }
      }
    }
  }, [stock, pengiriman, minor]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (router.query.id) {
      if (type === "PLAN") {
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
      } else if (type === "UNPLAN") {} else if (type === "SPREADING") {} else if (type === "HISTORY_PLAN") {
        Object(_helper__WEBPACK_IMPORTED_MODULE_10__["getInvoiceData"])(router.query.id).then(function (data) {
          setAvabilityList(data);
          setLoading(false);
        })["catch"](function (err) {
          console.log(err);
        });
      } else if (type === "HISTORY_UNPLAN") {
        Object(_helper__WEBPACK_IMPORTED_MODULE_10__["getInvoiceDataUnplan"])(router.query.id).then(function (data) {
          setAvabilityList(data);
          setLoading(false);
        })["catch"](function (err) {
          console.log(err);
        });
      } else if (type === "HISTORY_SPREADING") {
        Object(_helper__WEBPACK_IMPORTED_MODULE_10__["getInvoiceDataSpreading"])(router.query.id).then(function (data) {
          setAvabilityList(data);
          setLoading(false);
        })["catch"](function (err) {
          console.log(err);
        });
      }
    }
  }, [router.query.id]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (type === "PLAN") {
      Object(_helper__WEBPACK_IMPORTED_MODULE_10__["getProductByJenisChannel"])(plan.idJenisChannel).then(function (data) {
        setProduct(data); // console.log(data);

        setLoading(false);
      })["catch"](function (err) {
        console.log(err);
      });
    } else if (type === "UNPLAN") {
      Object(_helper__WEBPACK_IMPORTED_MODULE_10__["getProductByJenisChannel"])(state.visitUnplanReducer.jenisChannel.jenisChannelID).then(function (data) {
        setProduct(data); // console.log(data);

        setLoading(false);
      })["catch"](function (err) {
        console.log(err);
      });
    } else if (type === "SPREADING") {
      Object(_helper__WEBPACK_IMPORTED_MODULE_10__["getProductByJenisChannel"])(state.visitSpreadingReducer.jenisChannel.jenisChannelID).then(function (data) {
        setProduct(data); // console.log(data);

        setLoading(false);
      })["catch"](function (err) {
        console.log(err);
      });
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
    // setProductSearch(search);
    setSearchListProduct(search);
  };

  var renderProductSearch = function renderProductSearch() {
    var render = product.map(function (val, index) {
      if (val.namaProduk.includes(searchListProduct.toUpperCase())) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          onClick: function onClick() {
            // setProduct([]);
            console.log(val);
            setProductFocus(val);
            setSearchListProduct(val.namaProduk);
            setRenderProductList(false);
          },
          style: {
            borderBottom: ".5px solid #f0f0f0",
            width: "356px"
          },
          children: val.namaProduk
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 246,
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
          lineNumber: 269,
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
              lineNumber: 277,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avability_modal_subtitle,
              children: "Product"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 278,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              onChange: function onChange(e) {
                onSearchProduct(e.target.value);
              },
              placeholder: "Search",
              value: searchListProduct,
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.input_order_search // onClick={() => {
              //   setProduct([]);
              // }}
              ,
              onFocus: function onFocus() {
                return setRenderProductList(true);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 279,
              columnNumber: 15
            }, _this), renderProductList ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                position: "absolute",
                maxHeight: "180px",
                backgroundColor: "white",
                overflowY: "scroll",
                maxWidth: "400px",
                padding: "0 4px",
                zIndex: 999999
              },
              children: renderProductSearch()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 292,
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
                  lineNumber: 308,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  onChange: function onChange(e) {
                    setStock(e.target.value);
                  },
                  placeholder: "0",
                  type: "number",
                  min: 0,
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.input_order,
                  value: stock
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 311,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 307,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {},
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avability_modal_subtitle,
                  children: "Pengiriman (hari)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 324,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  onChange: function onChange(e) {
                    setPengiriman(e.target.value);
                  },
                  placeholder: "0",
                  type: "number",
                  min: 0,
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.input_order,
                  value: pengiriman
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 327,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 323,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  paddingLeft: "10px"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avability_modal_subtitle,
                  children: "Minor"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 339,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  onChange: function onChange(e) {
                    setMinor(e.target.value);
                  },
                  placeholder: "0",
                  type: "number",
                  min: 0,
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.input_order,
                  value: minor
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 340,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 338,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 306,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avg_sales_container,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  paddingRight: "5px"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avability_modal_subtitle,
                  children: "Avg Sales (pcs)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 354,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  onChange: function onChange(e) {
                    setAvgSales(e.target.value);
                  },
                  placeholder: "0",
                  type: "number",
                  min: 0,
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.input_order,
                  value: avgSales,
                  disabled: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 357,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 353,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  paddingLeft: "5px"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avability_modal_subtitle,
                  children: "Saran Order (pcs)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 370,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  onChange: function onChange(e) {
                    setSaranOrder(e.target.value);
                  },
                  placeholder: "0",
                  type: "number",
                  min: 0,
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.input_order,
                  value: saranOrder,
                  disabled: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 373,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 369,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 352,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avability_modal_subtitle,
              children: "Order (pcs)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 386,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              onChange: function onChange(e) {
                setOrder(e.target.value);
              },
              placeholder: "0",
              type: "number",
              min: 0,
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.input_order,
              value: order
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 387,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avability_modal_subtitle,
              children: "Keterangan"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 397,
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
              lineNumber: 398,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                marginTop: "20px"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
                text: "Add",
                onClick: function onClick() {
                  var reg = new RegExp(/^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/g);

                  if (productFocus.namaProduk && order.match(reg) && order != 0) {
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
                          ket: ket,
                          pengiriman: pengiriman,
                          minor: minor,
                          harga: harga
                        });
                        setModal(false);
                        setStock("");
                        setSaranOrder("");
                        setOrder("");
                        setKet("");
                        setHarga("");
                      } else {
                        avabilityList.push({
                          productFocus: productFocus,
                          stock: stock,
                          saranOrder: saranOrder,
                          order: order,
                          ket: ket,
                          pengiriman: pengiriman,
                          minor: minor,
                          harga: harga
                        });
                        setModal(false);
                        setStock("");
                        setSaranOrder("");
                        setOrder("");
                        setKet("");
                        setHarga("");
                      }
                    } else {
                      avabilityList.push({
                        productFocus: productFocus,
                        stock: stock,
                        saranOrder: saranOrder,
                        order: order,
                        ket: ket,
                        pengiriman: pengiriman,
                        minor: minor,
                        harga: harga
                      });
                      setModal(false);
                      setStock("");
                      setSaranOrder("");
                      setOrder("");
                      setKet("");
                      setHarga("");
                    }
                  }
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 408,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 407,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 276,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 11
        }, _this)]
      }, void 0, true);
    }
  };

  var renderAvabilityList = function renderAvabilityList() {
    if (type.includes("HISTORY")) {
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
              lineNumber: 501,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_container,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_subtitle,
                children: "Order"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 525,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
                children: [val.jumlah, " pcs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 526,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 524,
              columnNumber: 15
            }, _this), val.keterangan ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_container,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_subtitle,
                children: "Keterangan"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 532,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
                children: val.keterangan
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 535,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 531,
              columnNumber: 17
            }, _this) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 500,
            columnNumber: 13
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 496,
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
          lineNumber: 546,
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
              setPengiriman(val.pengiriman);
              setMinor(val.minor);
              setHarga(val.harga);
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_title,
              children: val.productFocus.namaProduk
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 587,
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
                  lineNumber: 595,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  div: true,
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
                  children: [val.stock, " pcs"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 596,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 591,
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
                  lineNumber: 604,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  div: true,
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
                  children: [val.saranOrder, " pcs"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 607,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 600,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 590,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_container,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_subtitle,
                children: "Order"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 613,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
                children: [val.order, " pcs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 614,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 612,
              columnNumber: 15
            }, _this), val.ket ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_container,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_subtitle,
                children: "Keterangan"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 620,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
                children: val.ket
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 623,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 619,
              columnNumber: 17
            }, _this) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 574,
            columnNumber: 13
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 570,
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
          lineNumber: 632,
          columnNumber: 11
        }, _this);
      } else {
        return _render2;
      }
    }
  };

  var onSave = function onSave() {
    if (newNOO) {
      actions.setSpreadingAvability(avabilityList);
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/visit/spreading/submit?new=true");
    } else {
      if (type === "PLAN") {
        actions.setPlanAvability(avabilityList); // console.log(avabilityList);

        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/visit/plan/".concat(router.query.id));
      } else if (type === "UNPLAN") {
        actions.setUnplanAvability(avabilityList);
        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/visit/unplan/submit");
      } else if (type === "SPREADING") {
        actions.setSpreadingAvability(avabilityList);
        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/visit/spreading/submit");
      }
    }
  };

  var render = function render() {
    if (loading) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 667,
        columnNumber: 14
      }, _this);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [renderModalAdd(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.wrapper,
            children: [type.includes("HISTORY") ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Nav__WEBPACK_IMPORTED_MODULE_6__["default"], {
              title: "Avability",
              color: "white",
              backAction: function backAction() {
                next_router__WEBPACK_IMPORTED_MODULE_3___default.a.back();
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 675,
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
              lineNumber: 683,
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
                    lineNumber: 699,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.progress_bar_now,
                    style: {
                      width: "".concat(avabilityList.length / 25 * 100, "%")
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 700,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 698,
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
                  lineNumber: 707,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 697,
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
                  lineNumber: 718,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 716,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 696,
              columnNumber: 15
            }, _this), type.includes("HISTORY") ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avability_bot_container,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
                text: "Add",
                onClick: function onClick() {
                  setModal(true); // setProduct([]);

                  setProductFocus("");
                  setAvgSales("");
                  setStock("");
                  setPengiriman("");
                  setOrder("");
                  setSaranOrder("");
                  setKet("");
                  setMinor("");
                  setHarga("");
                  setSearchListProduct("");
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 723,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 722,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 673,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 672,
          columnNumber: 11
        }, _this)]
      }, void 0, true);
    }
  };

  return render();
}

_s(Avability, "81AXSs6fRHyxMCq5oGrcv3IMS58=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdmFiaWxpdHkuanN4Il0sIm5hbWVzIjpbIkF2YWJpbGl0eSIsInR5cGUiLCJ1c2VDb250ZXh0IiwiU3RvcmVzIiwic3RhdGUiLCJkaXNwYXRjaCIsImFjdGlvbnMiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibW9kYWwiLCJzZXRNb2RhbCIsInJlbmRlclByb2R1Y3RMaXN0Iiwic2V0UmVuZGVyUHJvZHVjdExpc3QiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJzZWFyY2hMaXN0UHJvZHVjdCIsInNldFNlYXJjaExpc3RQcm9kdWN0IiwicHJvZHVjdCIsInNldFByb2R1Y3QiLCJwcm9kdWN0Rm9jdXMiLCJzZXRQcm9kdWN0Rm9jdXMiLCJhdmFiaWxpdHlMaXN0Iiwic2V0QXZhYmlsaXR5TGlzdCIsIm9yZGVyIiwic2V0T3JkZXIiLCJwZW5naXJpbWFuIiwic2V0UGVuZ2lyaW1hbiIsImF2Z1NhbGVzIiwic2V0QXZnU2FsZXMiLCJoYXJnYSIsInNldEhhcmdhIiwic2FyYW5PcmRlciIsInNldFNhcmFuT3JkZXIiLCJzdG9jayIsInNldFN0b2NrIiwibWlub3IiLCJzZXRNaW5vciIsImtldCIsInNldEtldCIsInBsYW4iLCJzZXRQbGFuIiwibmV3Tk9PIiwic2V0TmV3Tk9PIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0Iiwibm90RW1wdHkiLCJsZW5ndGgiLCJ3aW5kb3ciLCJvbmJlZm9yZXVubG9hZCIsInZpc2l0UGxhblJlZHVjZXIiLCJhdmFiaWxpdHkiLCJ2aXNpdFVucGxhblJlZHVjZXIiLCJ2aXNpdFNwcmVhZGluZ1JlZHVjZXIiLCJxdWVyeSIsImplbmlzQ2hhbm5lbCIsIm5hbWFKZW5pc0NoYW5uZWwiLCJvdXRsZXQiLCJuYW1hT3V0bGV0IiwiUm91dGVyIiwicHVzaCIsInByb2R1a0lEIiwicGFyc2VJbnQiLCJpZCIsImdldFBsYW5JZCIsInRoZW4iLCJzYW1lUGxhbiIsImRhdGEiLCJjaGVja0luIiwic2V0UGxhbkNoZWNrSW4iLCJub3ciLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZ2V0SW52b2ljZURhdGEiLCJnZXRJbnZvaWNlRGF0YVVucGxhbiIsImdldEludm9pY2VEYXRhU3ByZWFkaW5nIiwiZ2V0UHJvZHVjdEJ5SmVuaXNDaGFubmVsIiwiaWRKZW5pc0NoYW5uZWwiLCJqZW5pc0NoYW5uZWxJRCIsIm9uU2VhcmNoUHJvZHVjdCIsInJlbmRlclByb2R1Y3RTZWFyY2giLCJyZW5kZXIiLCJtYXAiLCJ2YWwiLCJpbmRleCIsIm5hbWFQcm9kdWsiLCJpbmNsdWRlcyIsInRvVXBwZXJDYXNlIiwiYm9yZGVyQm90dG9tIiwid2lkdGgiLCJyZW5kZXJNb2RhbEFkZCIsInN0eWxlcyIsIm1vZGFsX2F2YWJpbGl0eSIsIndyYXBwZXIiLCJhdmFiaWxpdHlfbW9kYWxfY29udGFpbmVyIiwiYWRkX3RpdGxlIiwiYXZhYmlsaXR5X21vZGFsX3N1YnRpdGxlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaW5wdXRfb3JkZXJfc2VhcmNoIiwicG9zaXRpb24iLCJtYXhIZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvdmVyZmxvd1kiLCJtYXhXaWR0aCIsInBhZGRpbmciLCJ6SW5kZXgiLCJzdG9ja19vcmRlcl9jb250YWluZXIiLCJwYWRkaW5nUmlnaHQiLCJpbnB1dF9vcmRlciIsInBhZGRpbmdMZWZ0IiwiYXZnX3NhbGVzX2NvbnRhaW5lciIsIm1hcmdpblRvcCIsInJlZyIsIlJlZ0V4cCIsIm1hdGNoIiwic2FtZURhdGFJbmRleCIsImZpbmRJbmRleCIsInNwbGljZSIsInJlbmRlckF2YWJpbGl0eUxpc3QiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwiZmlsdGVyRGF0YSIsImZpbHRlciIsInRvTG93ZXJDYXNlIiwiYm9yZGVyUmFkaXVzIiwiYXZhYmlsaXR5bGlzdF90aXRsZSIsImF2YWJpbGl0eWxpc3RfY29udGFpbmVyIiwiYXZhYmlsaXR5bGlzdF9zdWJ0aXRsZSIsImF2YWJpbGl0eWxpc3RfdmFsdWUiLCJqdW1sYWgiLCJrZXRlcmFuZ2FuIiwidGV4dEFsaWduIiwiY29sb3IiLCJhdmFiaWxpdHlsaXN0X3N0b2NrX2NvbnRhaW5lciIsIm1hcmdpblJpZ2h0IiwibWFyZ2luTGVmdCIsIm9uU2F2ZSIsInNldFNwcmVhZGluZ0F2YWJpbGl0eSIsInNldFBsYW5BdmFiaWxpdHkiLCJzZXRVbnBsYW5BdmFiaWxpdHkiLCJjb250YWluZXIiLCJiYWNrIiwibWFpbiIsInNlYXJjaF9maXhlZCIsIm1hcmdpbiIsInByb2dyZXNzX2JhciIsInByb2dyZXNzX2Jhcl9ub3ciLCJpbnB1dCIsInBhZGRpbmdUb3AiLCJtYXJnaW5Cb3R0b20iLCJhdmFiaWxpdHlfYm90X2NvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVdlLFNBQVNBLFNBQVQsT0FBNkI7QUFBQTs7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQUEsb0JBQ0xDLHdEQUFVLENBQUNDLDZDQUFELENBREw7QUFBQSxNQUNsQ0MsS0FEa0MsZUFDbENBLEtBRGtDO0FBQUEsTUFDM0JDLFFBRDJCLGVBQzNCQSxRQUQyQjtBQUFBLE1BQ2pCQyxPQURpQixlQUNqQkEsT0FEaUI7O0FBQUEsa0JBRVpDLHNEQUFRLENBQUMsSUFBRCxDQUZJO0FBQUEsTUFFbkNDLE9BRm1DO0FBQUEsTUFFMUJDLFVBRjBCOztBQUFBLG1CQUdoQkYsc0RBQVEsQ0FBQyxLQUFELENBSFE7QUFBQSxNQUduQ0csS0FIbUM7QUFBQSxNQUc1QkMsUUFINEI7O0FBQUEsbUJBSVFKLHNEQUFRLENBQUMsS0FBRCxDQUpoQjtBQUFBLE1BSW5DSyxpQkFKbUM7QUFBQSxNQUloQkMsb0JBSmdCOztBQUFBLG1CQUtkTixzREFBUSxDQUFDLEVBQUQsQ0FMTTtBQUFBLE1BS25DTyxNQUxtQztBQUFBLE1BSzNCQyxTQUwyQjs7QUFBQSxtQkFNUVIsc0RBQVEsQ0FBQyxFQUFELENBTmhCO0FBQUEsTUFNbkNTLGlCQU5tQztBQUFBLE1BTWhCQyxvQkFOZ0I7O0FBQUEsbUJBT1pWLHNEQUFRLENBQUMsRUFBRCxDQVBJO0FBQUEsTUFPbkNXLE9BUG1DO0FBQUEsTUFPMUJDLFVBUDBCOztBQUFBLG1CQVFGWixzREFBUSxDQUFDLEVBQUQsQ0FSTjtBQUFBLE1BUW5DYSxZQVJtQztBQUFBLE1BUXJCQyxlQVJxQjs7QUFBQSxtQkFTQWQsc0RBQVEsQ0FBQyxFQUFELENBVFI7QUFBQSxNQVNuQ2UsYUFUbUM7QUFBQSxNQVNwQkMsZ0JBVG9COztBQUFBLG1CQVVoQmhCLHNEQUFRLENBQUMsRUFBRCxDQVZRO0FBQUEsTUFVbkNpQixLQVZtQztBQUFBLE1BVTVCQyxRQVY0Qjs7QUFBQSxvQkFXTmxCLHNEQUFRLENBQUMsRUFBRCxDQVhGO0FBQUEsTUFXbkNtQixVQVhtQztBQUFBLE1BV3ZCQyxhQVh1Qjs7QUFBQSxvQkFZVnBCLHNEQUFRLENBQUMsRUFBRCxDQVpFO0FBQUEsTUFZbkNxQixRQVptQztBQUFBLE1BWXpCQyxXQVp5Qjs7QUFBQSxvQkFhaEJ0QixzREFBUSxDQUFDLEVBQUQsQ0FiUTtBQUFBLE1BYW5DdUIsS0FibUM7QUFBQSxNQWE1QkMsUUFiNEI7O0FBQUEsb0JBY054QixzREFBUSxDQUFDLEVBQUQsQ0FkRjtBQUFBLE1BY25DeUIsVUFkbUM7QUFBQSxNQWN2QkMsYUFkdUI7O0FBQUEsb0JBZWhCMUIsc0RBQVEsQ0FBQyxFQUFELENBZlE7QUFBQSxNQWVuQzJCLEtBZm1DO0FBQUEsTUFlNUJDLFFBZjRCOztBQUFBLG9CQWdCaEI1QixzREFBUSxDQUFDLEVBQUQsQ0FoQlE7QUFBQSxNQWdCbkM2QixLQWhCbUM7QUFBQSxNQWdCNUJDLFFBaEI0Qjs7QUFBQSxvQkFpQnBCOUIsc0RBQVEsQ0FBQyxFQUFELENBakJZO0FBQUEsTUFpQm5DK0IsR0FqQm1DO0FBQUEsTUFpQjlCQyxNQWpCOEI7O0FBQUEsb0JBa0JsQmhDLHNEQUFRLENBQUMsRUFBRCxDQWxCVTtBQUFBLE1Ba0JuQ2lDLElBbEJtQztBQUFBLE1Ba0I3QkMsT0FsQjZCOztBQUFBLG9CQW1CZGxDLHNEQUFRLENBQUMsS0FBRCxDQW5CTTtBQUFBLE1BbUJuQ21DLE1BbkJtQztBQUFBLE1BbUIzQkMsU0FuQjJCOztBQW9CMUMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJN0MsSUFBSSxLQUFLLFNBQWIsRUFBd0I7QUFDdEIsVUFBTThDLFFBQVEsR0FBR3pCLGFBQWEsQ0FBQzBCLE1BQWQsR0FBdUIsQ0FBeEM7O0FBQ0EsVUFBSUQsUUFBUSxHQUFHLENBQWYsRUFBa0I7QUFDaEJFLGNBQU0sQ0FBQ0MsY0FBUCxHQUF3QixZQUFNO0FBQzVCLGlCQUFPLHdEQUFQO0FBQ0QsU0FGRDtBQUdEO0FBQ0Y7QUFDRixHQVRRLENBQVQ7QUFXQUoseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSTdDLElBQUksS0FBSyxNQUFiLEVBQXFCO0FBQ25CLFVBQUlHLEtBQUssQ0FBQytDLGdCQUFOLENBQXVCQyxTQUF2QixDQUFpQ0osTUFBakMsR0FBMEMsQ0FBOUMsRUFBaUQ7QUFDL0N6Qix3QkFBZ0IsQ0FBQyx5SkFBSW5CLEtBQUssQ0FBQytDLGdCQUFOLENBQXVCQyxTQUE1QixFQUFoQjtBQUNEO0FBQ0YsS0FKRCxNQUlPLElBQUluRCxJQUFJLEtBQUssUUFBYixFQUF1QjtBQUM1QixVQUFJRyxLQUFLLENBQUNpRCxrQkFBTixDQUF5QkQsU0FBekIsQ0FBbUNKLE1BQW5DLEdBQTRDLENBQWhELEVBQW1EO0FBQ2pEekIsd0JBQWdCLENBQUMseUpBQUluQixLQUFLLENBQUNpRCxrQkFBTixDQUF5QkQsU0FBOUIsRUFBaEI7QUFDRDtBQUNGLEtBSk0sTUFJQSxJQUFJbkQsSUFBSSxLQUFLLFdBQWIsRUFBMEI7QUFDL0IsVUFBSUcsS0FBSyxDQUFDa0QscUJBQU4sQ0FBNEJGLFNBQTVCLENBQXNDSixNQUF0QyxHQUErQyxDQUFuRCxFQUFzRDtBQUNwRHpCLHdCQUFnQixDQUFDLHlKQUFJbkIsS0FBSyxDQUFDa0QscUJBQU4sQ0FBNEJGLFNBQWpDLEVBQWhCO0FBQ0Q7QUFDRjtBQUNGLEdBZFEsRUFjTixDQUFDL0MsUUFBRCxDQWRNLENBQVQ7QUFnQkF5Qyx5REFBUyxDQUFDLFlBQU0sQ0FBRSxDQUFULEVBQVcsRUFBWCxDQUFUO0FBRUFBLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlGLE1BQU0sQ0FBQ1csS0FBUCxPQUFKLEVBQXNCO0FBQ3BCWixlQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsVUFBSTFDLElBQUksS0FBSyxRQUFiLEVBQXVCO0FBQ3JCLFlBQ0VHLEtBQUssQ0FBQ2lELGtCQUFOLENBQXlCRyxZQUF6QixDQUFzQ0MsZ0JBQXRDLElBQ0FyRCxLQUFLLENBQUNpRCxrQkFBTixDQUF5QkssTUFBekIsQ0FBZ0NDLFVBRmxDLEVBR0UsQ0FDRCxDQUpELE1BSU87QUFDTEMsNERBQU0sQ0FBQ0MsSUFBUCxDQUFZLGVBQVo7QUFDRDtBQUNGLE9BUkQsTUFRTyxJQUFJNUQsSUFBSSxLQUFLLFdBQWIsRUFBMEIsQ0FDaEM7QUFDRjtBQUNGLEdBZlEsRUFlTixFQWZNLENBQVQ7QUFpQkE2Qyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJMUIsWUFBWSxDQUFDMEMsUUFBakIsRUFBMkI7QUFDekIsVUFBSTdELElBQUksS0FBSyxNQUFiLEVBQXFCO0FBQ25CNEIsbUJBQVcsQ0FBQyxFQUFELENBQVg7QUFDQUUsZ0JBQVEsQ0FBQyxJQUFELENBQVI7QUFDRCxPQUhELE1BR08sSUFBSTlCLElBQUksS0FBSyxRQUFiLEVBQXVCO0FBQzVCNEIsbUJBQVcsQ0FBQyxFQUFELENBQVg7QUFDQUUsZ0JBQVEsQ0FBQyxJQUFELENBQVIsQ0FGNEIsQ0FHNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxPQWJNLE1BYUEsSUFBSTlCLElBQUksS0FBSyxXQUFiLEVBQTBCO0FBQy9CNEIsbUJBQVcsQ0FBQyxFQUFELENBQVg7QUFDQUUsZ0JBQVEsQ0FBQyxJQUFELENBQVI7QUFDRDtBQUNGO0FBQ0YsR0F2QlEsRUF1Qk4sQ0FBQ1gsWUFBRCxDQXZCTSxDQUFUO0FBeUJBMEIseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSTFCLFlBQVksQ0FBQzBDLFFBQWpCLEVBQTJCO0FBQ3pCLFVBQUk1QixLQUFLLElBQUlSLFVBQVQsSUFBdUJVLEtBQTNCLEVBQWtDO0FBQ2hDLFlBQUluQyxJQUFJLEtBQUssTUFBYixFQUFxQjtBQUNuQmdDLHVCQUFhLENBQ1hMLFFBQVEsSUFBSW1DLFFBQVEsQ0FBQ3JDLFVBQUQsQ0FBUixHQUF1QnFDLFFBQVEsQ0FBQzdCLEtBQUQsQ0FBbkMsQ0FBUixHQUNFNkIsUUFBUSxDQUFDM0IsS0FBRCxDQUZDLENBQWI7QUFJRCxTQUxELE1BS08sSUFBSW5DLElBQUksS0FBSyxRQUFiLEVBQXVCO0FBQzVCZ0MsdUJBQWEsQ0FDWEwsUUFBUSxJQUFJbUMsUUFBUSxDQUFDckMsVUFBRCxDQUFSLEdBQXVCcUMsUUFBUSxDQUFDN0IsS0FBRCxDQUFuQyxDQUFSLEdBQ0U2QixRQUFRLENBQUMzQixLQUFELENBRkMsQ0FBYjtBQUlELFNBTE0sTUFLQSxJQUFJbkMsSUFBSSxLQUFLLFdBQWIsRUFBMEI7QUFDL0JnQyx1QkFBYSxDQUNYTCxRQUFRLElBQUltQyxRQUFRLENBQUNyQyxVQUFELENBQVIsR0FBdUJxQyxRQUFRLENBQUM3QixLQUFELENBQW5DLENBQVIsR0FDRTZCLFFBQVEsQ0FBQzNCLEtBQUQsQ0FGQyxDQUFiO0FBSUQ7QUFDRjtBQUNGO0FBQ0YsR0FyQlEsRUFxQk4sQ0FBQ0YsS0FBRCxFQUFRUixVQUFSLEVBQW9CVSxLQUFwQixDQXJCTSxDQUFUO0FBdUJBVSx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJRixNQUFNLENBQUNXLEtBQVAsQ0FBYVMsRUFBakIsRUFBcUI7QUFDbkIsVUFBSS9ELElBQUksS0FBSyxNQUFiLEVBQXFCO0FBQ25CZ0Usa0VBQVMsQ0FBQ3JCLE1BQU0sQ0FBQ1csS0FBUCxDQUFhUyxFQUFkLENBQVQsQ0FDR0UsSUFESCxDQUNRLGlCQUF3QjtBQUFBLGNBQXJCQyxRQUFxQixTQUFyQkEsUUFBcUI7QUFBQSxjQUFYQyxJQUFXLFNBQVhBLElBQVc7O0FBQzVCO0FBQ0EsY0FBSUQsUUFBUSxDQUFDbkIsTUFBVCxJQUFtQixDQUF2QixFQUEwQjtBQUN4QlksOERBQU0sQ0FBQ0MsSUFBUCxDQUFZLGFBQVo7QUFDRCxXQUZELE1BRU87QUFDTHBCLG1CQUFPLENBQUMyQixJQUFELENBQVAsQ0FESyxDQUVMOztBQUNBLGdCQUFJLENBQUNoRSxLQUFLLENBQUMrQyxnQkFBTixDQUF1QmtCLE9BQTVCLEVBQXFDO0FBQ25DL0QscUJBQU8sQ0FBQ2dFLGNBQVIsQ0FBdUJDLEdBQXZCO0FBQ0Q7QUFDRjtBQUNGLFNBWkgsV0FhUyxVQUFDQyxHQUFELEVBQVM7QUFDZEMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0QsU0FmSDtBQWdCRCxPQWpCRCxNQWlCTyxJQUFJdkUsSUFBSSxLQUFLLFFBQWIsRUFBdUIsQ0FDN0IsQ0FETSxNQUNBLElBQUlBLElBQUksS0FBSyxXQUFiLEVBQTBCLENBQ2hDLENBRE0sTUFDQSxJQUFJQSxJQUFJLEtBQUssY0FBYixFQUE2QjtBQUNsQzBFLHVFQUFjLENBQUMvQixNQUFNLENBQUNXLEtBQVAsQ0FBYVMsRUFBZCxDQUFkLENBQ0dFLElBREgsQ0FDUSxVQUFDRSxJQUFELEVBQVU7QUFDZDdDLDBCQUFnQixDQUFDNkMsSUFBRCxDQUFoQjtBQUNBM0Qsb0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDRCxTQUpILFdBS1MsVUFBQytELEdBQUQsRUFBUztBQUNkQyxpQkFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDRCxTQVBIO0FBUUQsT0FUTSxNQVNBLElBQUl2RSxJQUFJLEtBQUssZ0JBQWIsRUFBK0I7QUFDcEMyRSw2RUFBb0IsQ0FBQ2hDLE1BQU0sQ0FBQ1csS0FBUCxDQUFhUyxFQUFkLENBQXBCLENBQ0dFLElBREgsQ0FDUSxVQUFDRSxJQUFELEVBQVU7QUFDZDdDLDBCQUFnQixDQUFDNkMsSUFBRCxDQUFoQjtBQUNBM0Qsb0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDRCxTQUpILFdBS1MsVUFBQytELEdBQUQsRUFBUztBQUNkQyxpQkFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDRCxTQVBIO0FBUUQsT0FUTSxNQVNBLElBQUl2RSxJQUFJLEtBQUssbUJBQWIsRUFBa0M7QUFDdkM0RSxnRkFBdUIsQ0FBQ2pDLE1BQU0sQ0FBQ1csS0FBUCxDQUFhUyxFQUFkLENBQXZCLENBQ0dFLElBREgsQ0FDUSxVQUFDRSxJQUFELEVBQVU7QUFDZDdDLDBCQUFnQixDQUFDNkMsSUFBRCxDQUFoQjtBQUNBM0Qsb0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDRCxTQUpILFdBS1MsVUFBQytELEdBQUQsRUFBUztBQUNkQyxpQkFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDRCxTQVBIO0FBUUQ7QUFDRjtBQUNGLEdBbERRLEVBa0ROLENBQUM1QixNQUFNLENBQUNXLEtBQVAsQ0FBYVMsRUFBZCxDQWxETSxDQUFUO0FBb0RBbEIseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSTdDLElBQUksS0FBSyxNQUFiLEVBQXFCO0FBQ25CNkUsK0VBQXdCLENBQUN0QyxJQUFJLENBQUN1QyxjQUFOLENBQXhCLENBQ0diLElBREgsQ0FDUSxVQUFDRSxJQUFELEVBQVU7QUFDZGpELGtCQUFVLENBQUNpRCxJQUFELENBQVYsQ0FEYyxDQUVkOztBQUNBM0Qsa0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDRCxPQUxILFdBTVMsVUFBQytELEdBQUQsRUFBUztBQUNkQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNELE9BUkg7QUFTRCxLQVZELE1BVU8sSUFBSXZFLElBQUksS0FBSyxRQUFiLEVBQXVCO0FBQzVCNkUsK0VBQXdCLENBQ3RCMUUsS0FBSyxDQUFDaUQsa0JBQU4sQ0FBeUJHLFlBQXpCLENBQXNDd0IsY0FEaEIsQ0FBeEIsQ0FHR2QsSUFISCxDQUdRLFVBQUNFLElBQUQsRUFBVTtBQUNkakQsa0JBQVUsQ0FBQ2lELElBQUQsQ0FBVixDQURjLENBRWQ7O0FBQ0EzRCxrQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELE9BUEgsV0FRUyxVQUFDK0QsR0FBRCxFQUFTO0FBQ2RDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0QsT0FWSDtBQVdELEtBWk0sTUFZQSxJQUFJdkUsSUFBSSxLQUFLLFdBQWIsRUFBMEI7QUFDL0I2RSwrRUFBd0IsQ0FDdEIxRSxLQUFLLENBQUNrRCxxQkFBTixDQUE0QkUsWUFBNUIsQ0FBeUN3QixjQURuQixDQUF4QixDQUdHZCxJQUhILENBR1EsVUFBQ0UsSUFBRCxFQUFVO0FBQ2RqRCxrQkFBVSxDQUFDaUQsSUFBRCxDQUFWLENBRGMsQ0FFZDs7QUFDQTNELGtCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsT0FQSCxXQVFTLFVBQUMrRCxHQUFELEVBQVM7QUFDZEMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDRCxPQVZIO0FBV0Q7QUFDRixHQXBDUSxFQW9DTixDQUFDaEMsSUFBRCxDQXBDTSxDQUFUOztBQXNDQSxNQUFNeUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDbkUsTUFBRCxFQUFZO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBRyx3QkFBb0IsQ0FBQ0gsTUFBRCxDQUFwQjtBQUNELEdBWEQ7O0FBYUEsTUFBTW9FLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUNoQyxRQUFNQyxNQUFNLEdBQUdqRSxPQUFPLENBQUNrRSxHQUFSLENBQVksVUFBQ0MsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQ3pDLFVBQUlELEdBQUcsQ0FBQ0UsVUFBSixDQUFlQyxRQUFmLENBQXdCeEUsaUJBQWlCLENBQUN5RSxXQUFsQixFQUF4QixDQUFKLEVBQThEO0FBQzVELDRCQUNFO0FBQ0UsaUJBQU8sRUFBRSxtQkFBTTtBQUNiO0FBQ0FoQixtQkFBTyxDQUFDQyxHQUFSLENBQVlXLEdBQVo7QUFDQWhFLDJCQUFlLENBQUNnRSxHQUFELENBQWY7QUFDQXBFLGdDQUFvQixDQUFDb0UsR0FBRyxDQUFDRSxVQUFMLENBQXBCO0FBQ0ExRSxnQ0FBb0IsQ0FBQyxLQUFELENBQXBCO0FBQ0QsV0FQSDtBQVNFLGVBQUssRUFBRTtBQUFFNkUsd0JBQVksRUFBRSxvQkFBaEI7QUFBc0NDLGlCQUFLLEVBQUU7QUFBN0MsV0FUVDtBQUFBLG9CQVdHTixHQUFHLENBQUNFO0FBWFAsV0FRT0QsS0FSUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBZUQ7QUFDRixLQWxCYyxDQUFmO0FBbUJBLFdBQU9ILE1BQVA7QUFDRCxHQXJCRDs7QUF1QkEsTUFBTVMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCLFFBQUlsRixLQUFKLEVBQVc7QUFDVCwwQkFDRTtBQUFBLGdDQUNFO0FBQ0UsbUJBQVMsRUFBRW1GLCtFQUFNLENBQUNDLGVBRHBCO0FBRUUsaUJBQU8sRUFBRSxtQkFBTTtBQUNibkYsb0JBQVEsQ0FBQyxLQUFELENBQVI7QUFDRDtBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFPRTtBQUFLLG1CQUFTLEVBQUVrRiwrRUFBTSxDQUFDRSxPQUF2QjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBRUYsK0VBQU0sQ0FBQ0cseUJBQXZCO0FBQUEsb0NBQ0U7QUFBSyx1QkFBUyxFQUFFSCwrRUFBTSxDQUFDSSxTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUssdUJBQVMsRUFBRUosK0VBQU0sQ0FBQ0ssd0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBR0U7QUFDRSxzQkFBUSxFQUFFLGtCQUFDQyxDQUFELEVBQU87QUFDZmxCLCtCQUFlLENBQUNrQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQ0QsZUFISDtBQUlFLHlCQUFXLEVBQUMsUUFKZDtBQUtFLG1CQUFLLEVBQUVyRixpQkFMVDtBQU1FLHVCQUFTLEVBQUU2RSwrRUFBTSxDQUFDUyxrQkFOcEIsQ0FPRTtBQUNBO0FBQ0E7QUFURjtBQVVFLHFCQUFPLEVBQUU7QUFBQSx1QkFBTXpGLG9CQUFvQixDQUFDLElBQUQsQ0FBMUI7QUFBQTtBQVZYO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEYsRUFlR0QsaUJBQWlCLGdCQUNoQjtBQUNFLG1CQUFLLEVBQUU7QUFDTDJGLHdCQUFRLEVBQUUsVUFETDtBQUVMQyx5QkFBUyxFQUFFLE9BRk47QUFHTEMsK0JBQWUsRUFBRSxPQUhaO0FBSUxDLHlCQUFTLEVBQUUsUUFKTjtBQUtMQyx3QkFBUSxFQUFFLE9BTEw7QUFNTEMsdUJBQU8sRUFBRSxPQU5KO0FBT0xDLHNCQUFNLEVBQUU7QUFQSCxlQURUO0FBQUEsd0JBV0czQixtQkFBbUI7QUFYdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEZ0IsR0FjZCxJQTdCTixlQThCRTtBQUFLLHVCQUFTLEVBQUVXLCtFQUFNLENBQUNpQixxQkFBdkI7QUFBQSxzQ0FDRTtBQUFLLHFCQUFLLEVBQUU7QUFBRUMsOEJBQVksRUFBRTtBQUFoQixpQkFBWjtBQUFBLHdDQUNFO0FBQUssMkJBQVMsRUFBRWxCLCtFQUFNLENBQUNLLHdCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUlFO0FBQ0UsMEJBQVEsRUFBRSxrQkFBQ0MsQ0FBRCxFQUFPO0FBQ2ZoRSw0QkFBUSxDQUFDZ0UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBUjtBQUNELG1CQUhIO0FBSUUsNkJBQVcsRUFBQyxHQUpkO0FBS0Usc0JBQUksRUFBQyxRQUxQO0FBTUUscUJBQUcsRUFBRSxDQU5QO0FBT0UsMkJBQVMsRUFBRVIsK0VBQU0sQ0FBQ21CLFdBUHBCO0FBUUUsdUJBQUssRUFBRTlFO0FBUlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFpQkU7QUFBSyxxQkFBSyxFQUFFLEVBQVo7QUFBQSx3Q0FDRTtBQUFLLDJCQUFTLEVBQUUyRCwrRUFBTSxDQUFDSyx3QkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFJRTtBQUNFLDBCQUFRLEVBQUUsa0JBQUNDLENBQUQsRUFBTztBQUNmeEUsaUNBQWEsQ0FBQ3dFLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWI7QUFDRCxtQkFISDtBQUlFLDZCQUFXLEVBQUMsR0FKZDtBQUtFLHNCQUFJLEVBQUMsUUFMUDtBQU1FLHFCQUFHLEVBQUUsQ0FOUDtBQU9FLDJCQUFTLEVBQUVSLCtFQUFNLENBQUNtQixXQVBwQjtBQVFFLHVCQUFLLEVBQUV0RjtBQVJUO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWpCRixlQWdDRTtBQUFLLHFCQUFLLEVBQUU7QUFBRXVGLDZCQUFXLEVBQUU7QUFBZixpQkFBWjtBQUFBLHdDQUNFO0FBQUssMkJBQVMsRUFBRXBCLCtFQUFNLENBQUNLLHdCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUVFO0FBQ0UsMEJBQVEsRUFBRSxrQkFBQ0MsQ0FBRCxFQUFPO0FBQ2Y5RCw0QkFBUSxDQUFDOEQsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBUjtBQUNELG1CQUhIO0FBSUUsNkJBQVcsRUFBQyxHQUpkO0FBS0Usc0JBQUksRUFBQyxRQUxQO0FBTUUscUJBQUcsRUFBRSxDQU5QO0FBT0UsMkJBQVMsRUFBRVIsK0VBQU0sQ0FBQ21CLFdBUHBCO0FBUUUsdUJBQUssRUFBRTVFO0FBUlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBaENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkE5QkYsZUE0RUU7QUFBSyx1QkFBUyxFQUFFeUQsK0VBQU0sQ0FBQ3FCLG1CQUF2QjtBQUFBLHNDQUNFO0FBQUsscUJBQUssRUFBRTtBQUFFSCw4QkFBWSxFQUFFO0FBQWhCLGlCQUFaO0FBQUEsd0NBQ0U7QUFBSywyQkFBUyxFQUFFbEIsK0VBQU0sQ0FBQ0ssd0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBSUU7QUFDRSwwQkFBUSxFQUFFLGtCQUFDQyxDQUFELEVBQU87QUFDZnRFLCtCQUFXLENBQUNzRSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFYO0FBQ0QsbUJBSEg7QUFJRSw2QkFBVyxFQUFDLEdBSmQ7QUFLRSxzQkFBSSxFQUFDLFFBTFA7QUFNRSxxQkFBRyxFQUFFLENBTlA7QUFPRSwyQkFBUyxFQUFFUiwrRUFBTSxDQUFDbUIsV0FQcEI7QUFRRSx1QkFBSyxFQUFFcEYsUUFSVDtBQVNFLDBCQUFRLEVBQUU7QUFUWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQWlCRTtBQUFLLHFCQUFLLEVBQUU7QUFBRXFGLDZCQUFXLEVBQUU7QUFBZixpQkFBWjtBQUFBLHdDQUNFO0FBQUssMkJBQVMsRUFBRXBCLCtFQUFNLENBQUNLLHdCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUlFO0FBQ0UsMEJBQVEsRUFBRSxrQkFBQ0MsQ0FBRCxFQUFPO0FBQ2ZsRSxpQ0FBYSxDQUFDa0UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBYjtBQUNELG1CQUhIO0FBSUUsNkJBQVcsRUFBQyxHQUpkO0FBS0Usc0JBQUksRUFBQyxRQUxQO0FBTUUscUJBQUcsRUFBRSxDQU5QO0FBT0UsMkJBQVMsRUFBRVIsK0VBQU0sQ0FBQ21CLFdBUHBCO0FBUUUsdUJBQUssRUFBRWhGLFVBUlQ7QUFTRSwwQkFBUSxFQUFFO0FBVFo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkE1RUYsZUE4R0U7QUFBSyx1QkFBUyxFQUFFNkQsK0VBQU0sQ0FBQ0ssd0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTlHRixlQStHRTtBQUNFLHNCQUFRLEVBQUUsa0JBQUNDLENBQUQsRUFBTztBQUNmMUUsd0JBQVEsQ0FBQzBFLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVI7QUFDRCxlQUhIO0FBSUUseUJBQVcsRUFBQyxHQUpkO0FBS0Usa0JBQUksRUFBQyxRQUxQO0FBTUUsaUJBQUcsRUFBRSxDQU5QO0FBT0UsdUJBQVMsRUFBRVIsK0VBQU0sQ0FBQ21CLFdBUHBCO0FBUUUsbUJBQUssRUFBRXhGO0FBUlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkEvR0YsZUF5SEU7QUFBSyx1QkFBUyxFQUFFcUUsK0VBQU0sQ0FBQ0ssd0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXpIRixlQTBIRTtBQUNFLHNCQUFRLEVBQUUsa0JBQUNDLENBQUQsRUFBTztBQUNmNUQsc0JBQU0sQ0FBQzRELENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQU47QUFDRCxlQUhIO0FBSUUseUJBQVcsRUFBQyxNQUpkO0FBS0Usa0JBQUksRUFBQyxNQUxQO0FBTUUsdUJBQVMsRUFBRVIsK0VBQU0sQ0FBQ21CLFdBTnBCO0FBT0UsbUJBQUssRUFBRTFFO0FBUFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkExSEYsZUFtSUU7QUFBSyxtQkFBSyxFQUFFO0FBQUU2RSx5QkFBUyxFQUFFO0FBQWIsZUFBWjtBQUFBLHFDQUNFLHFFQUFDLCtDQUFEO0FBQ0Usb0JBQUksRUFBRSxLQURSO0FBRUUsdUJBQU8sRUFBRSxtQkFBTTtBQUNiLHNCQUFJQyxHQUFHLEdBQUcsSUFBSUMsTUFBSixDQUFXLHFDQUFYLENBQVY7O0FBQ0Esc0JBQ0VqRyxZQUFZLENBQUNtRSxVQUFiLElBQ0EvRCxLQUFLLENBQUM4RixLQUFOLENBQVlGLEdBQVosQ0FEQSxJQUVBNUYsS0FBSyxJQUFJLENBSFgsRUFJRTtBQUNBLHdCQUFJRixhQUFhLENBQUMwQixNQUFkLEdBQXVCLENBQTNCLEVBQThCO0FBQzVCLDBCQUFJdUUsYUFBYSxHQUFHakcsYUFBYSxDQUFDa0csU0FBZCxDQUNsQixVQUFDbkMsR0FBRDtBQUFBLCtCQUNFQSxHQUFHLENBQUNqRSxZQUFKLENBQWlCbUUsVUFBakIsS0FDQW5FLFlBQVksQ0FBQ21FLFVBRmY7QUFBQSx1QkFEa0IsQ0FBcEI7O0FBS0EsMEJBQUlnQyxhQUFhLEdBQUcsQ0FBcEIsRUFBdUI7QUFDckJqRyxxQ0FBYSxDQUFDbUcsTUFBZCxDQUFxQkYsYUFBckIsRUFBb0MsQ0FBcEM7QUFDQWpHLHFDQUFhLENBQUN1QyxJQUFkLENBQW1CO0FBQ2pCekMsc0NBQVksRUFBWkEsWUFEaUI7QUFFakJjLCtCQUFLLEVBQUxBLEtBRmlCO0FBR2pCRixvQ0FBVSxFQUFWQSxVQUhpQjtBQUlqQlIsK0JBQUssRUFBTEEsS0FKaUI7QUFLakJjLDZCQUFHLEVBQUhBLEdBTGlCO0FBTWpCWixvQ0FBVSxFQUFWQSxVQU5pQjtBQU9qQlUsK0JBQUssRUFBTEEsS0FQaUI7QUFRakJOLCtCQUFLLEVBQUxBO0FBUmlCLHlCQUFuQjtBQVVBbkIsZ0NBQVEsQ0FBQyxLQUFELENBQVI7QUFDQXdCLGdDQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0FGLHFDQUFhLENBQUMsRUFBRCxDQUFiO0FBQ0FSLGdDQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0FjLDhCQUFNLENBQUMsRUFBRCxDQUFOO0FBQ0FSLGdDQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0QsdUJBbEJELE1Ba0JPO0FBQ0xULHFDQUFhLENBQUN1QyxJQUFkLENBQW1CO0FBQ2pCekMsc0NBQVksRUFBWkEsWUFEaUI7QUFFakJjLCtCQUFLLEVBQUxBLEtBRmlCO0FBR2pCRixvQ0FBVSxFQUFWQSxVQUhpQjtBQUlqQlIsK0JBQUssRUFBTEEsS0FKaUI7QUFLakJjLDZCQUFHLEVBQUhBLEdBTGlCO0FBTWpCWixvQ0FBVSxFQUFWQSxVQU5pQjtBQU9qQlUsK0JBQUssRUFBTEEsS0FQaUI7QUFRakJOLCtCQUFLLEVBQUxBO0FBUmlCLHlCQUFuQjtBQVVBbkIsZ0NBQVEsQ0FBQyxLQUFELENBQVI7QUFDQXdCLGdDQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0FGLHFDQUFhLENBQUMsRUFBRCxDQUFiO0FBQ0FSLGdDQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0FjLDhCQUFNLENBQUMsRUFBRCxDQUFOO0FBQ0FSLGdDQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0Q7QUFDRixxQkExQ0QsTUEwQ087QUFDTFQsbUNBQWEsQ0FBQ3VDLElBQWQsQ0FBbUI7QUFDakJ6QyxvQ0FBWSxFQUFaQSxZQURpQjtBQUVqQmMsNkJBQUssRUFBTEEsS0FGaUI7QUFHakJGLGtDQUFVLEVBQVZBLFVBSGlCO0FBSWpCUiw2QkFBSyxFQUFMQSxLQUppQjtBQUtqQmMsMkJBQUcsRUFBSEEsR0FMaUI7QUFNakJaLGtDQUFVLEVBQVZBLFVBTmlCO0FBT2pCVSw2QkFBSyxFQUFMQSxLQVBpQjtBQVFqQk4sNkJBQUssRUFBTEE7QUFSaUIsdUJBQW5CO0FBVUFuQiw4QkFBUSxDQUFDLEtBQUQsQ0FBUjtBQUNBd0IsOEJBQVEsQ0FBQyxFQUFELENBQVI7QUFDQUYsbUNBQWEsQ0FBQyxFQUFELENBQWI7QUFDQVIsOEJBQVEsQ0FBQyxFQUFELENBQVI7QUFDQWMsNEJBQU0sQ0FBQyxFQUFELENBQU47QUFDQVIsOEJBQVEsQ0FBQyxFQUFELENBQVI7QUFDRDtBQUNGO0FBQ0Y7QUF0RUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbklGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEY7QUFBQSxzQkFERjtBQTBORDtBQUNGLEdBN05EOztBQThOQSxNQUFNMkYsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQ2hDLFFBQUl6SCxJQUFJLENBQUN1RixRQUFMLENBQWMsU0FBZCxDQUFKLEVBQThCO0FBQzVCZixhQUFPLENBQUNDLEdBQVIsQ0FBWXBELGFBQVo7QUFDQUEsbUJBQWEsQ0FBQ3FHLElBQWQsQ0FBbUIsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsZUFBVUQsQ0FBQyxDQUFDckMsVUFBRixDQUFhdUMsYUFBYixDQUEyQkQsQ0FBQyxDQUFDdEMsVUFBN0IsQ0FBVjtBQUFBLE9BQW5CO0FBQ0EsVUFBTXdDLFVBQVUsR0FBR3pHLGFBQWEsQ0FBQzBHLE1BQWQsQ0FBcUIsVUFBQzNDLEdBQUQsRUFBUztBQUMvQyxlQUFPQSxHQUFHLENBQUNFLFVBQUosQ0FBZTBDLFdBQWYsR0FBNkJ6QyxRQUE3QixDQUFzQzFFLE1BQU0sQ0FBQ21ILFdBQVAsRUFBdEMsQ0FBUDtBQUNELE9BRmtCLENBQW5COztBQUdBLFVBQU05QyxPQUFNLEdBQUc0QyxVQUFVLENBQUMzQyxHQUFYLENBQWUsVUFBQ0MsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQzVDLDRCQUNFLHFFQUFDLDZDQUFEO0FBQ0UsZUFBSyxFQUFFO0FBQUU0Qyx3QkFBWSxFQUFFLEtBQWhCO0FBQXVCdEIsbUJBQU8sRUFBRSxNQUFoQztBQUF3Q08scUJBQVMsRUFBRTtBQUFuRCxXQURUO0FBQUEsaUNBSUU7QUFBQSxvQ0FDRTtBQUFLLHVCQUFTLEVBQUV0QiwrRUFBTSxDQUFDc0MsbUJBQXZCO0FBQUEsd0JBQTZDOUMsR0FBRyxDQUFDRTtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBd0JFO0FBQUssdUJBQVMsRUFBRU0sK0VBQU0sQ0FBQ3VDLHVCQUF2QjtBQUFBLHNDQUNFO0FBQUsseUJBQVMsRUFBRXZDLCtFQUFNLENBQUN3QyxzQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRTtBQUFLLHlCQUFTLEVBQUV4QywrRUFBTSxDQUFDeUMsbUJBQXZCO0FBQUEsMkJBQ0dqRCxHQUFHLENBQUNrRCxNQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBeEJGLEVBOEJHbEQsR0FBRyxDQUFDbUQsVUFBSixnQkFDQztBQUFLLHVCQUFTLEVBQUUzQywrRUFBTSxDQUFDdUMsdUJBQXZCO0FBQUEsc0NBQ0U7QUFBSyx5QkFBUyxFQUFFdkMsK0VBQU0sQ0FBQ3dDLHNCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUlFO0FBQUsseUJBQVMsRUFBRXhDLCtFQUFNLENBQUN5QyxtQkFBdkI7QUFBQSwwQkFDR2pELEdBQUcsQ0FBQ21EO0FBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsR0FTRyxJQXZDTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRixXQUVPbEQsS0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBZ0RELE9BakRjLENBQWY7O0FBa0RBLFVBQUl5QyxVQUFVLENBQUMvRSxNQUFYLElBQXFCLENBQXpCLEVBQTRCO0FBQzFCLDRCQUNFO0FBQ0UsZUFBSyxFQUFFO0FBQ0x5RixxQkFBUyxFQUFFLFFBRE47QUFFTHRCLHFCQUFTLEVBQUUsT0FGTjtBQUdMdUIsaUJBQUssRUFBRTtBQUhGLFdBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFXRCxPQVpELE1BWU87QUFDTCxlQUFPdkQsT0FBUDtBQUNEO0FBQ0YsS0F2RUQsTUF1RU87QUFDTDdELG1CQUFhLENBQUNxRyxJQUFkLENBQW1CLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGVBQ2pCRCxDQUFDLENBQUN4RyxZQUFGLENBQWVtRSxVQUFmLENBQTBCdUMsYUFBMUIsQ0FBd0NELENBQUMsQ0FBQ3pHLFlBQUYsQ0FBZW1FLFVBQXZELENBRGlCO0FBQUEsT0FBbkI7O0FBR0EsVUFBTXdDLFdBQVUsR0FBR3pHLGFBQWEsQ0FBQzBHLE1BQWQsQ0FBcUIsVUFBQzNDLEdBQUQsRUFBUztBQUMvQyxlQUFPQSxHQUFHLENBQUNqRSxZQUFKLENBQWlCbUUsVUFBakIsQ0FDSjBDLFdBREksR0FFSnpDLFFBRkksQ0FFSzFFLE1BQU0sQ0FBQ21ILFdBQVAsRUFGTCxDQUFQO0FBR0QsT0FKa0IsQ0FBbkI7O0FBS0EsVUFBTTlDLFFBQU0sR0FBRzRDLFdBQVUsQ0FBQzNDLEdBQVgsQ0FBZSxVQUFDQyxHQUFELEVBQU1DLEtBQU4sRUFBZ0I7QUFDNUMsNEJBQ0UscUVBQUMsNkNBQUQ7QUFDRSxlQUFLLEVBQUU7QUFBRTRDLHdCQUFZLEVBQUUsS0FBaEI7QUFBdUJ0QixtQkFBTyxFQUFFLE1BQWhDO0FBQXdDTyxxQkFBUyxFQUFFO0FBQW5ELFdBRFQ7QUFBQSxpQ0FJRTtBQUNFLG1CQUFPLEVBQUUsbUJBQU07QUFDYjlGLDZCQUFlLENBQUNnRSxHQUFHLENBQUNqRSxZQUFMLENBQWY7QUFDQWUsc0JBQVEsQ0FBQ2tELEdBQUcsQ0FBQ25ELEtBQUwsQ0FBUjtBQUNBRCwyQkFBYSxDQUFDb0QsR0FBRyxDQUFDckQsVUFBTCxDQUFiO0FBQ0FQLHNCQUFRLENBQUM0RCxHQUFHLENBQUM3RCxLQUFMLENBQVI7QUFDQWUsb0JBQU0sQ0FBQzhDLEdBQUcsQ0FBQy9DLEdBQUwsQ0FBTjtBQUNBM0Isc0JBQVEsQ0FBQyxJQUFELENBQVI7QUFDQWdCLDJCQUFhLENBQUMwRCxHQUFHLENBQUMzRCxVQUFMLENBQWI7QUFDQVcsc0JBQVEsQ0FBQ2dELEdBQUcsQ0FBQ2pELEtBQUwsQ0FBUjtBQUNBTCxzQkFBUSxDQUFDc0QsR0FBRyxDQUFDdkQsS0FBTCxDQUFSO0FBQ0QsYUFYSDtBQUFBLG9DQWFFO0FBQUssdUJBQVMsRUFBRStELCtFQUFNLENBQUNzQyxtQkFBdkI7QUFBQSx3QkFDRzlDLEdBQUcsQ0FBQ2pFLFlBQUosQ0FBaUJtRTtBQURwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWJGLGVBZ0JFO0FBQUssdUJBQVMsRUFBRU0sK0VBQU0sQ0FBQzhDLDZCQUF2QjtBQUFBLHNDQUNFO0FBQ0UseUJBQVMsRUFBRTlDLCtFQUFNLENBQUN1Qyx1QkFEcEI7QUFFRSxxQkFBSyxFQUFFO0FBQUVRLDZCQUFXLEVBQUU7QUFBZixpQkFGVDtBQUFBLHdDQUlFO0FBQUssMkJBQVMsRUFBRS9DLCtFQUFNLENBQUN3QyxzQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkYsZUFLRTtBQUFLLHFCQUFHLE1BQVI7QUFBUywyQkFBUyxFQUFFeEMsK0VBQU0sQ0FBQ3lDLG1CQUEzQjtBQUFBLDZCQUNHakQsR0FBRyxDQUFDbkQsS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBVUU7QUFDRSx5QkFBUyxFQUFFMkQsK0VBQU0sQ0FBQ3VDLHVCQURwQjtBQUVFLHFCQUFLLEVBQUU7QUFBRVMsNEJBQVUsRUFBRTtBQUFkLGlCQUZUO0FBQUEsd0NBSUU7QUFBSywyQkFBUyxFQUFFaEQsK0VBQU0sQ0FBQ3dDLHNCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKRixlQU9FO0FBQUsscUJBQUcsTUFBUjtBQUFTLDJCQUFTLEVBQUV4QywrRUFBTSxDQUFDeUMsbUJBQTNCO0FBQUEsNkJBQ0dqRCxHQUFHLENBQUNyRCxVQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWhCRixlQXNDRTtBQUFLLHVCQUFTLEVBQUU2RCwrRUFBTSxDQUFDdUMsdUJBQXZCO0FBQUEsc0NBQ0U7QUFBSyx5QkFBUyxFQUFFdkMsK0VBQU0sQ0FBQ3dDLHNCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQUsseUJBQVMsRUFBRXhDLCtFQUFNLENBQUN5QyxtQkFBdkI7QUFBQSwyQkFDR2pELEdBQUcsQ0FBQzdELEtBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF0Q0YsRUE0Q0c2RCxHQUFHLENBQUMvQyxHQUFKLGdCQUNDO0FBQUssdUJBQVMsRUFBRXVELCtFQUFNLENBQUN1Qyx1QkFBdkI7QUFBQSxzQ0FDRTtBQUFLLHlCQUFTLEVBQUV2QywrRUFBTSxDQUFDd0Msc0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBSUU7QUFBSyx5QkFBUyxFQUFFeEMsK0VBQU0sQ0FBQ3lDLG1CQUF2QjtBQUFBLDBCQUE2Q2pELEdBQUcsQ0FBQy9DO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELEdBT0csSUFuRE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkYsV0FFT2dELEtBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQTRERCxPQTdEYyxDQUFmOztBQThEQSxVQUFJeUMsV0FBVSxDQUFDL0UsTUFBWCxJQUFxQixDQUF6QixFQUE0QjtBQUMxQiw0QkFDRTtBQUNFLGVBQUssRUFBRTtBQUNMeUYscUJBQVMsRUFBRSxRQUROO0FBRUx0QixxQkFBUyxFQUFFLE9BRk47QUFHTHVCLGlCQUFLLEVBQUU7QUFIRixXQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBV0QsT0FaRCxNQVlPO0FBQ0wsZUFBT3ZELFFBQVA7QUFDRDtBQUNGO0FBQ0YsR0EvSkQ7O0FBZ0tBLE1BQU0yRCxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ25CLFFBQUlwRyxNQUFKLEVBQVk7QUFDVnBDLGFBQU8sQ0FBQ3lJLHFCQUFSLENBQThCekgsYUFBOUI7QUFDQXNDLHdEQUFNLENBQUNDLElBQVA7QUFDRCxLQUhELE1BR087QUFDTCxVQUFJNUQsSUFBSSxLQUFLLE1BQWIsRUFBcUI7QUFDbkJLLGVBQU8sQ0FBQzBJLGdCQUFSLENBQXlCMUgsYUFBekIsRUFEbUIsQ0FFbkI7O0FBQ0FzQywwREFBTSxDQUFDQyxJQUFQLHVCQUEyQmpCLE1BQU0sQ0FBQ1csS0FBUCxDQUFhUyxFQUF4QztBQUNELE9BSkQsTUFJTyxJQUFJL0QsSUFBSSxLQUFLLFFBQWIsRUFBdUI7QUFDNUJLLGVBQU8sQ0FBQzJJLGtCQUFSLENBQTJCM0gsYUFBM0I7QUFDQXNDLDBEQUFNLENBQUNDLElBQVA7QUFDRCxPQUhNLE1BR0EsSUFBSTVELElBQUksS0FBSyxXQUFiLEVBQTBCO0FBQy9CSyxlQUFPLENBQUN5SSxxQkFBUixDQUE4QnpILGFBQTlCO0FBQ0FzQywwREFBTSxDQUFDQyxJQUFQO0FBQ0Q7QUFDRjtBQUNGLEdBakJEOztBQWtCQSxNQUFNc0IsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixRQUFJM0UsT0FBSixFQUFhO0FBQ1gsMEJBQU8scUVBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsMEJBQ0U7QUFBQSxtQkFDR29GLGNBQWMsRUFEakIsZUFFRTtBQUFLLG1CQUFTLEVBQUVDLCtFQUFNLENBQUNxRCxTQUF2QjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBRXJELCtFQUFNLENBQUNFLE9BQXZCO0FBQUEsdUJBQ0c5RixJQUFJLENBQUN1RixRQUFMLENBQWMsU0FBZCxpQkFDQyxxRUFBQyw0Q0FBRDtBQUNFLG1CQUFLLEVBQUUsV0FEVDtBQUVFLG1CQUFLLEVBQUUsT0FGVDtBQUdFLHdCQUFVLEVBQUUsc0JBQU07QUFDaEI1QixrRUFBTSxDQUFDdUYsSUFBUDtBQUNEO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxnQkFTQyxxRUFBQyw0Q0FBRDtBQUNFLG1CQUFLLEVBQUUsV0FEVDtBQUVFLG1CQUFLLEVBQUUsT0FGVDtBQUdFLG9CQUFNLEVBQUUsTUFIVjtBQUlFLHFCQUFPLEVBQUUsbUJBQU07QUFDYkwsc0JBQU07QUFDUCxlQU5IO0FBT0Usd0JBQVUsRUFBRSxzQkFBTTtBQUNoQmxGLGtFQUFNLENBQUN1RixJQUFQO0FBQ0QsZUFUSDtBQVVFLHFCQUFPLEVBQUU7QUFWWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVZKLGVBdUJFO0FBQUssdUJBQVMsRUFBRXRELCtFQUFNLENBQUN1RCxJQUF2QjtBQUFBLHNDQUNFO0FBQUsseUJBQVMsRUFBRXZELCtFQUFNLENBQUN3RCxZQUF2QjtBQUFBLHdDQUNFO0FBQUssdUJBQUssRUFBRTtBQUFFQywwQkFBTSxFQUFFO0FBQVYsbUJBQVo7QUFBQSwwQ0FDRTtBQUFLLDZCQUFTLEVBQUV6RCwrRUFBTSxDQUFDMEQ7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQUVFO0FBQ0UsNkJBQVMsRUFBRTFELCtFQUFNLENBQUMyRCxnQkFEcEI7QUFFRSx5QkFBSyxFQUFFO0FBQ0w3RCwyQkFBSyxZQUFNckUsYUFBYSxDQUFDMEIsTUFBZCxHQUF1QixFQUF4QixHQUE4QixHQUFuQztBQURBO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFVRTtBQUNFLDBCQUFRLEVBQUUsa0JBQUNtRCxDQUFELEVBQU87QUFDZnBGLDZCQUFTLENBQUNvRixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFUO0FBQ0QsbUJBSEg7QUFJRSw2QkFBVyxFQUFDLFFBSmQ7QUFLRSwyQkFBUyxFQUFFUiwrRUFBTSxDQUFDNEQsS0FMcEI7QUFNRSx1QkFBSyxFQUFFO0FBQUV0Qyw2QkFBUyxFQUFFO0FBQWI7QUFOVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQW9CRTtBQUFLLHFCQUFLLEVBQUU7QUFBRXVDLDRCQUFVLEVBQUU7QUFBZCxpQkFBWjtBQUFBLDJCQUNHaEMsbUJBQW1CLEVBRHRCLGVBRUU7QUFBSyx1QkFBSyxFQUFFO0FBQUVpQyxnQ0FBWSxFQUFFO0FBQWhCO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF2QkYsRUFnREcxSixJQUFJLENBQUN1RixRQUFMLENBQWMsU0FBZCxJQUEyQixJQUEzQixnQkFDQztBQUFLLHVCQUFTLEVBQUVLLCtFQUFNLENBQUMrRCx1QkFBdkI7QUFBQSxxQ0FDRSxxRUFBQywrQ0FBRDtBQUNFLG9CQUFJLEVBQUUsS0FEUjtBQUVFLHVCQUFPLEVBQUUsbUJBQU07QUFDYmpKLDBCQUFRLENBQUMsSUFBRCxDQUFSLENBRGEsQ0FFYjs7QUFDQVUsaUNBQWUsQ0FBQyxFQUFELENBQWY7QUFDQVEsNkJBQVcsQ0FBQyxFQUFELENBQVg7QUFDQU0sMEJBQVEsQ0FBQyxFQUFELENBQVI7QUFDQVIsK0JBQWEsQ0FBQyxFQUFELENBQWI7QUFDQUYsMEJBQVEsQ0FBQyxFQUFELENBQVI7QUFDQVEsK0JBQWEsQ0FBQyxFQUFELENBQWI7QUFDQU0sd0JBQU0sQ0FBQyxFQUFELENBQU47QUFDQUYsMEJBQVEsQ0FBQyxFQUFELENBQVI7QUFDQU4sMEJBQVEsQ0FBQyxFQUFELENBQVI7QUFDQWQsc0NBQW9CLENBQUMsRUFBRCxDQUFwQjtBQUNEO0FBZkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBakRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQSxzQkFERjtBQTZFRDtBQUNGLEdBbEZEOztBQW1GQSxTQUFPa0UsTUFBTSxFQUFiO0FBQ0Q7O0dBdHRCdUJuRixTO1VBb0JQNkMscUQ7OztLQXBCTzdDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmlzaXQvdW5wbGFuL3N1Ym1pdC9hdmFiaWxpdHkuZjljMTE2ZDhmNzc4N2RhZWViZGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wYWdlcy9WaXNpdFBsYW5EZXRhaWwubW9kdWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IHsgU3RvcmVzIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgTmF2IGZyb20gXCIuL05hdlwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi9TcGlubmVyXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgZ2V0SW52b2ljZURhdGEsXHJcbiAgZ2V0SW52b2ljZURhdGFVbnBsYW4sXHJcbiAgZ2V0UGxhbklkLFxyXG4gIGdldFBsYW5Nb250aGx5SGlzdG9yeSxcclxuICBnZXRQcm9kdWN0U2VhcmNoLFxyXG4gIGdldFByb2R1Y3RCeUplbmlzQ2hhbm5lbCxcclxuICBnZXRQcm9kdWN0QXZnU2FsZXMsXHJcbiAgZ2V0SW52b2ljZURhdGFTcHJlYWRpbmcsXHJcbn0gZnJvbSBcIi4uL2hlbHBlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXZhYmlsaXR5KHsgdHlwZSB9KSB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2gsIGFjdGlvbnMgfSA9IHVzZUNvbnRleHQoU3RvcmVzKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcmVuZGVyUHJvZHVjdExpc3QsIHNldFJlbmRlclByb2R1Y3RMaXN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3NlYXJjaExpc3RQcm9kdWN0LCBzZXRTZWFyY2hMaXN0UHJvZHVjdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJvZHVjdCwgc2V0UHJvZHVjdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Byb2R1Y3RGb2N1cywgc2V0UHJvZHVjdEZvY3VzXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbYXZhYmlsaXR5TGlzdCwgc2V0QXZhYmlsaXR5TGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW29yZGVyLCBzZXRPcmRlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGVuZ2lyaW1hbiwgc2V0UGVuZ2lyaW1hbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYXZnU2FsZXMsIHNldEF2Z1NhbGVzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtoYXJnYSwgc2V0SGFyZ2FdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3NhcmFuT3JkZXIsIHNldFNhcmFuT3JkZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3N0b2NrLCBzZXRTdG9ja10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbWlub3IsIHNldE1pbm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtrZXQsIHNldEtldF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGxhbiwgc2V0UGxhbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW25ld05PTywgc2V0TmV3Tk9PXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0eXBlICE9PSBcIkhJU1RPUllcIikge1xyXG4gICAgICBjb25zdCBub3RFbXB0eSA9IGF2YWJpbGl0eUxpc3QubGVuZ3RoID4gMDtcclxuICAgICAgaWYgKG5vdEVtcHR5ID4gMCkge1xyXG4gICAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgIHJldHVybiBcIkRhdGEgd2lsbCBiZSBsb3N0IGlmIHlvdSBsZWF2ZSB0aGUgcGFnZSwgYXJlIHlvdSBzdXJlP1wiO1xyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0eXBlID09PSBcIlBMQU5cIikge1xyXG4gICAgICBpZiAoc3RhdGUudmlzaXRQbGFuUmVkdWNlci5hdmFiaWxpdHkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHNldEF2YWJpbGl0eUxpc3QoWy4uLnN0YXRlLnZpc2l0UGxhblJlZHVjZXIuYXZhYmlsaXR5XSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJVTlBMQU5cIikge1xyXG4gICAgICBpZiAoc3RhdGUudmlzaXRVbnBsYW5SZWR1Y2VyLmF2YWJpbGl0eS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgc2V0QXZhYmlsaXR5TGlzdChbLi4uc3RhdGUudmlzaXRVbnBsYW5SZWR1Y2VyLmF2YWJpbGl0eV0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiU1BSRUFESU5HXCIpIHtcclxuICAgICAgaWYgKHN0YXRlLnZpc2l0U3ByZWFkaW5nUmVkdWNlci5hdmFiaWxpdHkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHNldEF2YWJpbGl0eUxpc3QoWy4uLnN0YXRlLnZpc2l0U3ByZWFkaW5nUmVkdWNlci5hdmFiaWxpdHldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge30sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChyb3V0ZXIucXVlcnkubmV3KSB7XHJcbiAgICAgIHNldE5ld05PTyh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0eXBlID09PSBcIlVOUExBTlwiKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgc3RhdGUudmlzaXRVbnBsYW5SZWR1Y2VyLmplbmlzQ2hhbm5lbC5uYW1hSmVuaXNDaGFubmVsICYmXHJcbiAgICAgICAgICBzdGF0ZS52aXNpdFVucGxhblJlZHVjZXIub3V0bGV0Lm5hbWFPdXRsZXRcclxuICAgICAgICApIHtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgUm91dGVyLnB1c2goXCIvdmlzaXQvdW5wbGFuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlNQUkVBRElOR1wiKSB7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocHJvZHVjdEZvY3VzLnByb2R1a0lEKSB7XHJcbiAgICAgIGlmICh0eXBlID09PSBcIlBMQU5cIikge1xyXG4gICAgICAgIHNldEF2Z1NhbGVzKDEwKTtcclxuICAgICAgICBzZXRIYXJnYSg1MDAwKTtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlVOUExBTlwiKSB7XHJcbiAgICAgICAgc2V0QXZnU2FsZXMoMTApO1xyXG4gICAgICAgIHNldEhhcmdhKDUwMDApO1xyXG4gICAgICAgIC8vIGdldFByb2R1Y3RBdmdTYWxlcyhcclxuICAgICAgICAvLyAgIHByb2R1Y3RGb2N1cy5wcm9kdWtJRCxcclxuICAgICAgICAvLyAgIHN0YXRlLnZpc2l0VW5wbGFuUmVkdWNlci5vdXRsZXQub3V0bGV0SURcclxuICAgICAgICAvLyApXHJcbiAgICAgICAgLy8gICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAvLyAgIH0pXHJcbiAgICAgICAgLy8gICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIC8vICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJTUFJFQURJTkdcIikge1xyXG4gICAgICAgIHNldEF2Z1NhbGVzKDEwKTtcclxuICAgICAgICBzZXRIYXJnYSg1MDAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtwcm9kdWN0Rm9jdXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwcm9kdWN0Rm9jdXMucHJvZHVrSUQpIHtcclxuICAgICAgaWYgKHN0b2NrICYmIHBlbmdpcmltYW4gJiYgbWlub3IpIHtcclxuICAgICAgICBpZiAodHlwZSA9PT0gXCJQTEFOXCIpIHtcclxuICAgICAgICAgIHNldFNhcmFuT3JkZXIoXHJcbiAgICAgICAgICAgIGF2Z1NhbGVzICogKHBhcnNlSW50KHBlbmdpcmltYW4pICsgcGFyc2VJbnQoc3RvY2spKSArXHJcbiAgICAgICAgICAgICAgcGFyc2VJbnQobWlub3IpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJVTlBMQU5cIikge1xyXG4gICAgICAgICAgc2V0U2FyYW5PcmRlcihcclxuICAgICAgICAgICAgYXZnU2FsZXMgKiAocGFyc2VJbnQocGVuZ2lyaW1hbikgKyBwYXJzZUludChzdG9jaykpICtcclxuICAgICAgICAgICAgICBwYXJzZUludChtaW5vcilcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlNQUkVBRElOR1wiKSB7XHJcbiAgICAgICAgICBzZXRTYXJhbk9yZGVyKFxyXG4gICAgICAgICAgICBhdmdTYWxlcyAqIChwYXJzZUludChwZW5naXJpbWFuKSArIHBhcnNlSW50KHN0b2NrKSkgK1xyXG4gICAgICAgICAgICAgIHBhcnNlSW50KG1pbm9yKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbc3RvY2ssIHBlbmdpcmltYW4sIG1pbm9yXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocm91dGVyLnF1ZXJ5LmlkKSB7XHJcbiAgICAgIGlmICh0eXBlID09PSBcIlBMQU5cIikge1xyXG4gICAgICAgIGdldFBsYW5JZChyb3V0ZXIucXVlcnkuaWQpXHJcbiAgICAgICAgICAudGhlbigoeyBzYW1lUGxhbiwgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNhbWVQbGFuLCBkYXRhKTtcclxuICAgICAgICAgICAgaWYgKHNhbWVQbGFuLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvdmlzaXQvcGxhblwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBzZXRQbGFuKGRhdGEpO1xyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgIGlmICghc3RhdGUudmlzaXRQbGFuUmVkdWNlci5jaGVja0luKSB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zLnNldFBsYW5DaGVja0luKG5vdyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiVU5QTEFOXCIpIHtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlNQUkVBRElOR1wiKSB7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJISVNUT1JZX1BMQU5cIikge1xyXG4gICAgICAgIGdldEludm9pY2VEYXRhKHJvdXRlci5xdWVyeS5pZClcclxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEF2YWJpbGl0eUxpc3QoZGF0YSk7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcIkhJU1RPUllfVU5QTEFOXCIpIHtcclxuICAgICAgICBnZXRJbnZvaWNlRGF0YVVucGxhbihyb3V0ZXIucXVlcnkuaWQpXHJcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRBdmFiaWxpdHlMaXN0KGRhdGEpO1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJISVNUT1JZX1NQUkVBRElOR1wiKSB7XHJcbiAgICAgICAgZ2V0SW52b2ljZURhdGFTcHJlYWRpbmcocm91dGVyLnF1ZXJ5LmlkKVxyXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgc2V0QXZhYmlsaXR5TGlzdChkYXRhKTtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlci5xdWVyeS5pZF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGUgPT09IFwiUExBTlwiKSB7XHJcbiAgICAgIGdldFByb2R1Y3RCeUplbmlzQ2hhbm5lbChwbGFuLmlkSmVuaXNDaGFubmVsKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBzZXRQcm9kdWN0KGRhdGEpO1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlVOUExBTlwiKSB7XHJcbiAgICAgIGdldFByb2R1Y3RCeUplbmlzQ2hhbm5lbChcclxuICAgICAgICBzdGF0ZS52aXNpdFVucGxhblJlZHVjZXIuamVuaXNDaGFubmVsLmplbmlzQ2hhbm5lbElEXHJcbiAgICAgIClcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgc2V0UHJvZHVjdChkYXRhKTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJTUFJFQURJTkdcIikge1xyXG4gICAgICBnZXRQcm9kdWN0QnlKZW5pc0NoYW5uZWwoXHJcbiAgICAgICAgc3RhdGUudmlzaXRTcHJlYWRpbmdSZWR1Y2VyLmplbmlzQ2hhbm5lbC5qZW5pc0NoYW5uZWxJRFxyXG4gICAgICApXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIHNldFByb2R1Y3QoZGF0YSk7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW3BsYW5dKTtcclxuXHJcbiAgY29uc3Qgb25TZWFyY2hQcm9kdWN0ID0gKHNlYXJjaCkgPT4ge1xyXG4gICAgLy8gc2V0UHJvZHVjdEZvY3VzKHNlYXJjaCk7XHJcbiAgICAvLyBnZXRQcm9kdWN0U2VhcmNoKHNlYXJjaClcclxuICAgIC8vICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIC8vICAgICBzZXRQcm9kdWN0KGRhdGEpO1xyXG4gICAgLy8gICB9KVxyXG4gICAgLy8gICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAvLyAgIH0pOzsnJycnXHJcbiAgICAvLyBzZXRQcm9kdWN0U2VhcmNoKHNlYXJjaCk7XHJcbiAgICBzZXRTZWFyY2hMaXN0UHJvZHVjdChzZWFyY2gpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlclByb2R1Y3RTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICBjb25zdCByZW5kZXIgPSBwcm9kdWN0Lm1hcCgodmFsLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAodmFsLm5hbWFQcm9kdWsuaW5jbHVkZXMoc2VhcmNoTGlzdFByb2R1Y3QudG9VcHBlckNhc2UoKSkpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gc2V0UHJvZHVjdChbXSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsKTtcclxuICAgICAgICAgICAgICBzZXRQcm9kdWN0Rm9jdXModmFsKTtcclxuICAgICAgICAgICAgICBzZXRTZWFyY2hMaXN0UHJvZHVjdCh2YWwubmFtYVByb2R1ayk7XHJcbiAgICAgICAgICAgICAgc2V0UmVuZGVyUHJvZHVjdExpc3QoZmFsc2UpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXJCb3R0b206IFwiLjVweCBzb2xpZCAjZjBmMGYwXCIsIHdpZHRoOiBcIjM1NnB4XCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3ZhbC5uYW1hUHJvZHVrfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVuZGVyO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlck1vZGFsQWRkID0gKCkgPT4ge1xyXG4gICAgaWYgKG1vZGFsKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxfYXZhYmlsaXR5fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0TW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlfbW9kYWxfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZF90aXRsZX0+QWRkIFByb2R1Y3Q8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eV9tb2RhbF9zdWJ0aXRsZX0+UHJvZHVjdDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIG9uU2VhcmNoUHJvZHVjdChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaExpc3RQcm9kdWN0fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfb3JkZXJfc2VhcmNofVxyXG4gICAgICAgICAgICAgICAgLy8gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICBzZXRQcm9kdWN0KFtdKTtcclxuICAgICAgICAgICAgICAgIC8vIH19XHJcbiAgICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRSZW5kZXJQcm9kdWN0TGlzdCh0cnVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHtyZW5kZXJQcm9kdWN0TGlzdCA/IChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogXCIxODBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93WTogXCJzY3JvbGxcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCI0MDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMCA0cHhcIixcclxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDk5OTk5OSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3JlbmRlclByb2R1Y3RTZWFyY2goKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RvY2tfb3JkZXJfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlfbW9kYWxfc3VidGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIFN0b2NrIChwY3MpXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFN0b2NrKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0X29yZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdG9ja31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlfbW9kYWxfc3VidGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIFBlbmdpcmltYW4gKGhhcmkpXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFBlbmdpcmltYW4oZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfb3JkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BlbmdpcmltYW59XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eV9tb2RhbF9zdWJ0aXRsZX0+TWlub3I8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRNaW5vcihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF9vcmRlcn1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bWlub3J9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2Z19zYWxlc19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nUmlnaHQ6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5X21vZGFsX3N1YnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICBBdmcgU2FsZXMgKHBjcylcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0QXZnU2FsZXMoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfb3JkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2F2Z1NhbGVzfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eV9tb2RhbF9zdWJ0aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgU2FyYW4gT3JkZXIgKHBjcylcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0U2FyYW5PcmRlcihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF9vcmRlcn1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2FyYW5PcmRlcn1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5X21vZGFsX3N1YnRpdGxlfT5PcmRlciAocGNzKTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldE9yZGVyKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF9vcmRlcn1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtvcmRlcn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5X21vZGFsX3N1YnRpdGxlfT5LZXRlcmFuZ2FuPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0S2V0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIktldC5cIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfb3JkZXJ9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17a2V0fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0ZXh0PXtcIkFkZFwifVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoL14oXFwoP1xcKz9bMC05XSpcXCk/KT9bMC05X1xcLSBcXChcXCldKiQvZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZvY3VzLm5hbWFQcm9kdWsgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIG9yZGVyLm1hdGNoKHJlZykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIG9yZGVyICE9IDBcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmIChhdmFiaWxpdHlMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNhbWVEYXRhSW5kZXggPSBhdmFiaWxpdHlMaXN0LmZpbmRJbmRleChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAodmFsKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsLnByb2R1Y3RGb2N1cy5uYW1hUHJvZHVrID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZvY3VzLm5hbWFQcm9kdWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNhbWVEYXRhSW5kZXggKyAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhYmlsaXR5TGlzdC5zcGxpY2Uoc2FtZURhdGFJbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhYmlsaXR5TGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGb2N1cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b2NrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FyYW5PcmRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVuZ2lyaW1hbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbm9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFyZ2EsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0b2NrKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNhcmFuT3JkZXIoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3JkZXIoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0S2V0KFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEhhcmdhKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF2YWJpbGl0eUxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Rm9jdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9jayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhcmFuT3JkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlbmdpcmltYW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5vcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhcmdhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1vZGFsKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTdG9jayhcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTYXJhbk9yZGVyKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldE9yZGVyKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEtldChcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRIYXJnYShcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXZhYmlsaXR5TGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Rm9jdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2FyYW5PcmRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGVuZ2lyaW1hbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5vcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYXJnYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE1vZGFsKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RvY2soXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNhcmFuT3JkZXIoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE9yZGVyKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRLZXQoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEhhcmdhKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCByZW5kZXJBdmFiaWxpdHlMaXN0ID0gKCkgPT4ge1xyXG4gICAgaWYgKHR5cGUuaW5jbHVkZXMoXCJISVNUT1JZXCIpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGF2YWJpbGl0eUxpc3QpO1xyXG4gICAgICBhdmFiaWxpdHlMaXN0LnNvcnQoKGEsIGIpID0+IGEubmFtYVByb2R1ay5sb2NhbGVDb21wYXJlKGIubmFtYVByb2R1aykpO1xyXG4gICAgICBjb25zdCBmaWx0ZXJEYXRhID0gYXZhYmlsaXR5TGlzdC5maWx0ZXIoKHZhbCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB2YWwubmFtYVByb2R1ay50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHJlbmRlciA9IGZpbHRlckRhdGEubWFwKCh2YWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogXCI1cHhcIiwgcGFkZGluZzogXCIzMHB4XCIsIG1hcmdpblRvcDogXCIxNHB4XCIgfX1cclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3RfdGl0bGV9Pnt2YWwubmFtYVByb2R1a308L2Rpdj5cclxuICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X3N0b2NrX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3RfY29udGFpbmVyfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3Rfc3VidGl0bGV9PlN0b2NrPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3RfdmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt2YWwuc3RvY2t9IHBjc1xyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X2NvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3Rfc3VidGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIFNhcmFuIE9yZGVyXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X3ZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICB7dmFsLnNhcmFuT3JkZXJ9IHBjc1xyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3RfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF9zdWJ0aXRsZX0+T3JkZXI8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF92YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgIHt2YWwuanVtbGFofSBwY3NcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHt2YWwua2V0ZXJhbmdhbiA/IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3Rfc3VidGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIEtldGVyYW5nYW5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF92YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3ZhbC5rZXRlcmFuZ2FufVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGZpbHRlckRhdGEubGVuZ3RoID09IDApIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTUwcHhcIixcclxuICAgICAgICAgICAgICBjb2xvcjogXCIjZDBkMGQwXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIE5vIEl0ZW1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHJlbmRlcjtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXZhYmlsaXR5TGlzdC5zb3J0KChhLCBiKSA9PlxyXG4gICAgICAgIGEucHJvZHVjdEZvY3VzLm5hbWFQcm9kdWsubG9jYWxlQ29tcGFyZShiLnByb2R1Y3RGb2N1cy5uYW1hUHJvZHVrKVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBmaWx0ZXJEYXRhID0gYXZhYmlsaXR5TGlzdC5maWx0ZXIoKHZhbCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB2YWwucHJvZHVjdEZvY3VzLm5hbWFQcm9kdWtcclxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgcmVuZGVyID0gZmlsdGVyRGF0YS5tYXAoKHZhbCwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBwYWRkaW5nOiBcIjMwcHhcIiwgbWFyZ2luVG9wOiBcIjE0cHhcIiB9fVxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0UHJvZHVjdEZvY3VzKHZhbC5wcm9kdWN0Rm9jdXMpO1xyXG4gICAgICAgICAgICAgICAgc2V0U3RvY2sodmFsLnN0b2NrKTtcclxuICAgICAgICAgICAgICAgIHNldFNhcmFuT3JkZXIodmFsLnNhcmFuT3JkZXIpO1xyXG4gICAgICAgICAgICAgICAgc2V0T3JkZXIodmFsLm9yZGVyKTtcclxuICAgICAgICAgICAgICAgIHNldEtldCh2YWwua2V0KTtcclxuICAgICAgICAgICAgICAgIHNldE1vZGFsKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0UGVuZ2lyaW1hbih2YWwucGVuZ2lyaW1hbik7XHJcbiAgICAgICAgICAgICAgICBzZXRNaW5vcih2YWwubWlub3IpO1xyXG4gICAgICAgICAgICAgICAgc2V0SGFyZ2EodmFsLmhhcmdhKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X3RpdGxlfT5cclxuICAgICAgICAgICAgICAgIHt2YWwucHJvZHVjdEZvY3VzLm5hbWFQcm9kdWt9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X3N0b2NrX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3RfY29udGFpbmVyfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3Rfc3VidGl0bGV9PlN0b2NrPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3RfdmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt2YWwuc3RvY2t9IHBjc1xyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X2NvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3Rfc3VidGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIFNhcmFuIE9yZGVyXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X3ZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICB7dmFsLnNhcmFuT3JkZXJ9IHBjc1xyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X3N1YnRpdGxlfT5PcmRlcjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X3ZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAge3ZhbC5vcmRlcn0gcGNzXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7dmFsLmtldCA/IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3Rfc3VidGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIEtldGVyYW5nYW5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF92YWx1ZX0+e3ZhbC5rZXR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChmaWx0ZXJEYXRhLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjE1MHB4XCIsXHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiI2QwZDBkMFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBObyBJdGVtXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiByZW5kZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IG9uU2F2ZSA9ICgpID0+IHtcclxuICAgIGlmIChuZXdOT08pIHtcclxuICAgICAgYWN0aW9ucy5zZXRTcHJlYWRpbmdBdmFiaWxpdHkoYXZhYmlsaXR5TGlzdCk7XHJcbiAgICAgIFJvdXRlci5wdXNoKGAvdmlzaXQvc3ByZWFkaW5nL3N1Ym1pdD9uZXc9dHJ1ZWApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHR5cGUgPT09IFwiUExBTlwiKSB7XHJcbiAgICAgICAgYWN0aW9ucy5zZXRQbGFuQXZhYmlsaXR5KGF2YWJpbGl0eUxpc3QpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGF2YWJpbGl0eUxpc3QpO1xyXG4gICAgICAgIFJvdXRlci5wdXNoKGAvdmlzaXQvcGxhbi8ke3JvdXRlci5xdWVyeS5pZH1gKTtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlVOUExBTlwiKSB7XHJcbiAgICAgICAgYWN0aW9ucy5zZXRVbnBsYW5BdmFiaWxpdHkoYXZhYmlsaXR5TGlzdCk7XHJcbiAgICAgICAgUm91dGVyLnB1c2goYC92aXNpdC91bnBsYW4vc3VibWl0YCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJTUFJFQURJTkdcIikge1xyXG4gICAgICAgIGFjdGlvbnMuc2V0U3ByZWFkaW5nQXZhYmlsaXR5KGF2YWJpbGl0eUxpc3QpO1xyXG4gICAgICAgIFJvdXRlci5wdXNoKGAvdmlzaXQvc3ByZWFkaW5nL3N1Ym1pdGApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAobG9hZGluZykge1xyXG4gICAgICByZXR1cm4gPFNwaW5uZXIgLz47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7cmVuZGVyTW9kYWxBZGQoKX1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgICB7dHlwZS5pbmNsdWRlcyhcIkhJU1RPUllcIikgPyAoXHJcbiAgICAgICAgICAgICAgICA8TmF2XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtcIkF2YWJpbGl0eVwifVxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj17XCJ3aGl0ZVwifVxyXG4gICAgICAgICAgICAgICAgICBiYWNrQWN0aW9uPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLmJhY2soKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxOYXZcclxuICAgICAgICAgICAgICAgICAgdGl0bGU9e1wiQXZhYmlsaXR5XCJ9XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPXtcIndoaXRlXCJ9XHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbj17XCJTYXZlXCJ9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvblNhdmUoKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgYmFja0FjdGlvbj17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5iYWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaF9maXhlZH0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjEwcHggMCAwIDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcn0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfYmFyX25vd31cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHsoYXZhYmlsaXR5TGlzdC5sZW5ndGggLyAyNSkgKiAxMDB9JWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMFwiIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCI2MHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtyZW5kZXJBdmFiaWxpdHlMaXN0KCl9XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwMHB4XCIgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHt0eXBlLmluY2x1ZGVzKFwiSElTVE9SWVwiKSA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eV9ib3RfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9e1wiQWRkXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0TW9kYWwodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBzZXRQcm9kdWN0KFtdKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFByb2R1Y3RGb2N1cyhcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldEF2Z1NhbGVzKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0U3RvY2soXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRQZW5naXJpbWFuKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0T3JkZXIoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTYXJhbk9yZGVyKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0S2V0KFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0TWlub3IoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRIYXJnYShcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFNlYXJjaExpc3RQcm9kdWN0KFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIHJlbmRlcigpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=