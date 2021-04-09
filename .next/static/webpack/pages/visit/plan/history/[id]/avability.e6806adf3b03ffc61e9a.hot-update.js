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
    } else if (type === "UNPLAN") {} else if (type === "SPREADING") {} else if (type === "HISTORY") {}
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
          lineNumber: 114,
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
          lineNumber: 135,
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
              lineNumber: 143,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avability_modal_subtitle,
              children: "Product"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
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
              lineNumber: 145,
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
              lineNumber: 158,
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
                  lineNumber: 174,
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
                  lineNumber: 177,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 173,
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
                  lineNumber: 188,
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
                  lineNumber: 191,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avability_modal_subtitle,
              children: "Order (pcs)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 202,
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
              lineNumber: 203,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avability_modal_subtitle,
              children: "Keterangan"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
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
              lineNumber: 213,
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
                lineNumber: 223,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 222,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
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
            lineNumber: 316,
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
                lineNumber: 324,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                div: true,
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
                children: [val.stock, " pcs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 325,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 320,
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
                lineNumber: 333,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                div: true,
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
                children: [val.saranOrder, " pcs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 334,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 329,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 319,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_container,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_subtitle,
              children: "Order"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 340,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
              children: [val.order, " pcs"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 341,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 339,
            columnNumber: 13
          }, _this), val.ket ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_container,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_subtitle,
              children: "Keterangan"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 345,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
              children: val.ket
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 346,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 344,
            columnNumber: 15
          }, _this) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 306,
          columnNumber: 11
        }, _this)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 302,
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
        lineNumber: 355,
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
        lineNumber: 378,
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
              lineNumber: 385,
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
                    lineNumber: 400,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.progress_bar_now,
                    style: {
                      width: "".concat(avabilityList.length / 25 * 100, "%")
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 401,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 399,
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
                  lineNumber: 408,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 398,
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
                  lineNumber: 419,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 417,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 397,
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
                lineNumber: 423,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 422,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 384,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 383,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdmFiaWxpdHkuanN4Il0sIm5hbWVzIjpbIkF2YWJpbGl0eSIsInR5cGUiLCJ1c2VDb250ZXh0IiwiU3RvcmVzIiwic3RhdGUiLCJkaXNwYXRjaCIsImFjdGlvbnMiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibW9kYWwiLCJzZXRNb2RhbCIsInJlbmRlclByb2R1Y3RMaXN0Iiwic2V0UmVuZGVyUHJvZHVjdExpc3QiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJwcm9kdWN0Iiwic2V0UHJvZHVjdCIsInByb2R1Y3RTZWFyY2giLCJzZXRQcm9kdWN0U2VhcmNoIiwicHJvZHVjdEZvY3VzIiwic2V0UHJvZHVjdEZvY3VzIiwiYXZhYmlsaXR5TGlzdCIsInNldEF2YWJpbGl0eUxpc3QiLCJvcmRlciIsInNldE9yZGVyIiwic2FyYW5PcmRlciIsInNldFNhcmFuT3JkZXIiLCJzdG9jayIsInNldFN0b2NrIiwia2V0Iiwic2V0S2V0IiwicGxhbiIsInNldFBsYW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJub3RFbXB0eSIsImxlbmd0aCIsIndpbmRvdyIsIm9uYmVmb3JldW5sb2FkIiwidmlzaXRQbGFuUmVkdWNlciIsImF2YWJpbGl0eSIsInF1ZXJ5IiwiaWQiLCJnZXRQbGFuSWQiLCJ0aGVuIiwic2FtZVBsYW4iLCJkYXRhIiwiUm91dGVyIiwicHVzaCIsImNoZWNrSW4iLCJzZXRQbGFuQ2hlY2tJbiIsIm5vdyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJnZXRQcm9kdWtCeUplbmlzQ2hhbm5lbCIsImlkSmVuaXNDaGFubmVsIiwib25TZWFyY2hQcm9kdWN0IiwicmVuZGVyUHJvZHVjdFNlYXJjaCIsInJlbmRlciIsIm1hcCIsInZhbCIsImluZGV4IiwibmFtYVByb2R1ayIsImluY2x1ZGVzIiwiYm9yZGVyQm90dG9tIiwid2lkdGgiLCJyZW5kZXJNb2RhbEFkZCIsInN0eWxlcyIsIm1vZGFsX2F2YWJpbGl0eSIsIndyYXBwZXIiLCJhdmFiaWxpdHlfbW9kYWxfY29udGFpbmVyIiwiYWRkX3RpdGxlIiwiYXZhYmlsaXR5X21vZGFsX3N1YnRpdGxlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaW5wdXRfb3JkZXJfc2VhcmNoIiwicG9zaXRpb24iLCJtYXhIZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvdmVyZmxvd1kiLCJtYXhXaWR0aCIsInBhZGRpbmciLCJ6SW5kZXgiLCJzdG9ja19vcmRlcl9jb250YWluZXIiLCJwYWRkaW5nUmlnaHQiLCJpbnB1dF9vcmRlciIsInBhZGRpbmdMZWZ0IiwibWFyZ2luVG9wIiwicmVnIiwiUmVnRXhwIiwibWF0Y2giLCJzYW1lRGF0YUluZGV4IiwiZmluZEluZGV4Iiwic3BsaWNlIiwicmVuZGVyQXZhYmlsaXR5TGlzdCIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJmaWx0ZXJEYXRhIiwiZmlsdGVyIiwidG9Mb3dlckNhc2UiLCJib3JkZXJSYWRpdXMiLCJhdmFiaWxpdHlsaXN0X3RpdGxlIiwiYXZhYmlsaXR5bGlzdF9zdG9ja19jb250YWluZXIiLCJhdmFiaWxpdHlsaXN0X2NvbnRhaW5lciIsIm1hcmdpblJpZ2h0IiwiYXZhYmlsaXR5bGlzdF9zdWJ0aXRsZSIsImF2YWJpbGl0eWxpc3RfdmFsdWUiLCJtYXJnaW5MZWZ0IiwidGV4dEFsaWduIiwiY29sb3IiLCJvblNhdmUiLCJzZXRQbGFuQXZhYmlsaXR5IiwiY29udGFpbmVyIiwiYmFjayIsIm1haW4iLCJzZWFyY2hfZml4ZWQiLCJtYXJnaW4iLCJwcm9ncmVzc19iYXIiLCJwcm9ncmVzc19iYXJfbm93IiwiaW5wdXQiLCJwYWRkaW5nVG9wIiwibWFyZ2luQm90dG9tIiwiYXZhYmlsaXR5X2JvdF9jb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtB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cEI7QUFNRSx1QkFBSyxFQUFFO0FBQUVsQyw2QkFBUyxFQUFFO0FBQWI7QUFOVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQW9CRTtBQUFLLHFCQUFLLEVBQUU7QUFBRW1DLDRCQUFVLEVBQUU7QUFBZCxpQkFBWjtBQUFBLDJCQUNHNUIsbUJBQW1CLEVBRHRCLGVBRUU7QUFBSyx1QkFBSyxFQUFFO0FBQUU2QixnQ0FBWSxFQUFFO0FBQWhCO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFiRixlQXNDRTtBQUFLLHVCQUFTLEVBQUV6RCwrRUFBTSxDQUFDMEQsdUJBQXZCO0FBQUEscUNBQ0UscUVBQUMsK0NBQUQ7QUFDRSxvQkFBSSxFQUFFLEtBRFI7QUFFRSx1QkFBTyxFQUFFLG1CQUFNO0FBQ2JySCwwQkFBUSxDQUFDLElBQUQsQ0FBUixDQURhLENBRWI7O0FBQ0FVLGlDQUFlLENBQUMsRUFBRCxDQUFmO0FBQ0Q7QUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF0Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBLHNCQURGO0FBd0REO0FBQ0YsR0E3REQ7O0FBOERBLFNBQU93QyxNQUFNLEVBQWI7QUFDRDs7R0FyYXVCN0QsUztVQWVQbUMscUQ7OztLQWZPbkMsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92aXNpdC9wbGFuL2hpc3RvcnkvW2lkXS9hdmFiaWxpdHkuZTY4MDZhZGYzYjAzZmZjNjFlOWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wYWdlcy9WaXNpdFBsYW5EZXRhaWwubW9kdWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IHsgU3RvcmVzIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgTmF2IGZyb20gXCIuL05hdlwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi9TcGlubmVyXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgZ2V0UGxhbklkLFxyXG4gIGdldFByb2R1Y3RTZWFyY2gsXHJcbiAgZ2V0UHJvZHVrQnlKZW5pc0NoYW5uZWwsXHJcbn0gZnJvbSBcIi4uL2hlbHBlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXZhYmlsaXR5KHsgdHlwZSB9KSB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2gsIGFjdGlvbnMgfSA9IHVzZUNvbnRleHQoU3RvcmVzKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcmVuZGVyUHJvZHVjdExpc3QsIHNldFJlbmRlclByb2R1Y3RMaXN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Byb2R1Y3QsIHNldFByb2R1Y3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtwcm9kdWN0U2VhcmNoLCBzZXRQcm9kdWN0U2VhcmNoXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcHJvZHVjdEZvY3VzLCBzZXRQcm9kdWN0Rm9jdXNdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFthdmFiaWxpdHlMaXN0LCBzZXRBdmFiaWxpdHlMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbb3JkZXIsIHNldE9yZGVyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzYXJhbk9yZGVyLCBzZXRTYXJhbk9yZGVyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzdG9jaywgc2V0U3RvY2tdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2tldCwgc2V0S2V0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwbGFuLCBzZXRQbGFuXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG5vdEVtcHR5ID0gYXZhYmlsaXR5TGlzdC5sZW5ndGggPiAwO1xyXG4gICAgaWYgKG5vdEVtcHR5ID4gMCkge1xyXG4gICAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFwiRGF0YSB3aWxsIGJlIGxvc3QgaWYgeW91IGxlYXZlIHRoZSBwYWdlLCBhcmUgeW91IHN1cmU/XCI7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodHlwZSA9PT0gXCJQTEFOXCIpIHtcclxuICAgICAgaWYgKHN0YXRlLnZpc2l0UGxhblJlZHVjZXIuYXZhYmlsaXR5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBzZXRBdmFiaWxpdHlMaXN0KFsuLi5zdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLmF2YWJpbGl0eV0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiVU5QTEFOXCIpIHtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJTUFJFQURJTkdcIikge1xyXG4gICAgfVxyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGUgPT09IFwiUExBTlwiKSB7XHJcbiAgICAgIGlmIChyb3V0ZXIucXVlcnkuaWQpIHtcclxuICAgICAgICBnZXRQbGFuSWQocm91dGVyLnF1ZXJ5LmlkKVxyXG4gICAgICAgICAgLnRoZW4oKHsgc2FtZVBsYW4sIGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzYW1lUGxhbiwgZGF0YSk7XHJcbiAgICAgICAgICAgIGlmIChzYW1lUGxhbi5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL3Zpc2l0L3BsYW5cIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgc2V0UGxhbihkYXRhKTtcclxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICBpZiAoIXN0YXRlLnZpc2l0UGxhblJlZHVjZXIuY2hlY2tJbikge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9ucy5zZXRQbGFuQ2hlY2tJbihub3cpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlVOUExBTlwiKSB7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiU1BSRUFESU5HXCIpIHtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJISVNUT1JZXCIpIHtcclxuICAgIH1cclxuICB9LCBbcm91dGVyLnF1ZXJ5LmlkXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodHlwZSA9PT0gXCJQTEFOXCIpIHtcclxuICAgICAgZ2V0UHJvZHVrQnlKZW5pc0NoYW5uZWwocGxhbi5pZEplbmlzQ2hhbm5lbClcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgc2V0UHJvZHVjdChkYXRhKTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJVTlBMQU5cIikge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJTUFJFQURJTkdcIikge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9LCBbcGxhbl0pO1xyXG5cclxuICBjb25zdCBvblNlYXJjaFByb2R1Y3QgPSAoc2VhcmNoKSA9PiB7XHJcbiAgICAvLyBzZXRQcm9kdWN0Rm9jdXMoc2VhcmNoKTtcclxuICAgIC8vIGdldFByb2R1Y3RTZWFyY2goc2VhcmNoKVxyXG4gICAgLy8gICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgLy8gICAgIHNldFByb2R1Y3QoZGF0YSk7XHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIC8vICAgfSk7OycnJydcclxuICAgIHNldFByb2R1Y3RTZWFyY2goc2VhcmNoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJQcm9kdWN0U2VhcmNoID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmVuZGVyID0gcHJvZHVjdC5tYXAoKHZhbCwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKHZhbC5uYW1hUHJvZHVrLmluY2x1ZGVzKHByb2R1Y3RTZWFyY2gpKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIC8vIHNldFByb2R1Y3QoW10pO1xyXG4gICAgICAgICAgICAgIHNldFByb2R1Y3RGb2N1cyh2YWwpO1xyXG4gICAgICAgICAgICAgIHNldFJlbmRlclByb2R1Y3RMaXN0KGZhbHNlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiBcIi41cHggc29saWQgI2YwZjBmMFwiLCB3aWR0aDogXCIzNTZweFwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt2YWwubmFtYVByb2R1a31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlbmRlcjtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJNb2RhbEFkZCA9ICgpID0+IHtcclxuICAgIGlmIChtb2RhbCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsX2F2YWJpbGl0eX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldE1vZGFsKGZhbHNlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5X21vZGFsX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRfdGl0bGV9PkFkZCBQcm9kdWN0PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlfbW9kYWxfc3VidGl0bGV9PlByb2R1Y3Q8L2Rpdj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBvblNlYXJjaFByb2R1Y3QoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9kdWN0Rm9jdXMubmFtYVByb2R1a31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0X29yZGVyX3NlYXJjaH1cclxuICAgICAgICAgICAgICAgIC8vIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgc2V0UHJvZHVjdChbXSk7XHJcbiAgICAgICAgICAgICAgICAvLyB9fVxyXG4gICAgICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0UmVuZGVyUHJvZHVjdExpc3QodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7cHJvZHVjdCA/IChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogXCIxODBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93WTogXCJzY3JvbGxcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCI0MDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMCA0cHhcIixcclxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDk5OTk5OSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3JlbmRlclByb2R1Y3RMaXN0ID8gcmVuZGVyUHJvZHVjdFNlYXJjaCgpIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RvY2tfb3JkZXJfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlfbW9kYWxfc3VidGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIFN0b2NrIChwY3MpXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFN0b2NrKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfb3JkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0b2NrfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlfbW9kYWxfc3VidGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIFNhcmFuIE9yZGVyIChwY3MpXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFNhcmFuT3JkZXIoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF9vcmRlcn1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2FyYW5PcmRlcn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5X21vZGFsX3N1YnRpdGxlfT5PcmRlciAocGNzKTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldE9yZGVyKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF9vcmRlcn1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtvcmRlcn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5X21vZGFsX3N1YnRpdGxlfT5LZXRlcmFuZ2FuPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0S2V0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIktldC5cIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfb3JkZXJ9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17a2V0fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0ZXh0PXtcIkFkZFwifVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoL14oXFwoP1xcKz9bMC05XSpcXCk/KT9bMC05X1xcLSBcXChcXCldKiQvZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZvY3VzLm5hbWFQcm9kdWsgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIHN0b2NrLm1hdGNoKHJlZykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIHNhcmFuT3JkZXIubWF0Y2gocmVnKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgb3JkZXIubWF0Y2gocmVnKVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGF2YWJpbGl0eUxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2FtZURhdGFJbmRleCA9IGF2YWJpbGl0eUxpc3QuZmluZEluZGV4KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICh2YWwpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWwucHJvZHVjdEZvY3VzLm5hbWFQcm9kdWsgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Rm9jdXMubmFtYVByb2R1a1xyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2FtZURhdGFJbmRleCArIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdmFiaWxpdHlMaXN0LnNwbGljZShzYW1lRGF0YUluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdmFiaWxpdHlMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZvY3VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXJhbk9yZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0b2NrKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNhcmFuT3JkZXIoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3JkZXIoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0S2V0KFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF2YWJpbGl0eUxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Rm9jdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9jayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhcmFuT3JkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNb2RhbChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RvY2soXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2FyYW5PcmRlcihcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRPcmRlcihcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRLZXQoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YWJpbGl0eUxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZvY3VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0b2NrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNhcmFuT3JkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdG9jayhcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2FyYW5PcmRlcihcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3JkZXIoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEtldChcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVyQXZhYmlsaXR5TGlzdCA9ICgpID0+IHtcclxuICAgIGF2YWJpbGl0eUxpc3Quc29ydCgoYSwgYikgPT5cclxuICAgICAgYS5wcm9kdWN0Rm9jdXMubmFtYVByb2R1ay5sb2NhbGVDb21wYXJlKGIucHJvZHVjdEZvY3VzLm5hbWFQcm9kdWspXHJcbiAgICApO1xyXG4gICAgY29uc3QgZmlsdGVyRGF0YSA9IGF2YWJpbGl0eUxpc3QuZmlsdGVyKCh2YWwpID0+IHtcclxuICAgICAgcmV0dXJuIHZhbC5wcm9kdWN0Rm9jdXMubmFtYVByb2R1a1xyXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgcmVuZGVyID0gZmlsdGVyRGF0YS5tYXAoKHZhbCwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBwYWRkaW5nOiBcIjMwcHhcIiwgbWFyZ2luVG9wOiBcIjE0cHhcIiB9fVxyXG4gICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRQcm9kdWN0Rm9jdXModmFsLnByb2R1Y3RGb2N1cyk7XHJcbiAgICAgICAgICAgICAgc2V0U3RvY2sodmFsLnN0b2NrKTtcclxuICAgICAgICAgICAgICBzZXRTYXJhbk9yZGVyKHZhbC5zYXJhbk9yZGVyKTtcclxuICAgICAgICAgICAgICBzZXRPcmRlcih2YWwub3JkZXIpO1xyXG4gICAgICAgICAgICAgIHNldEtldCh2YWwua2V0KTtcclxuICAgICAgICAgICAgICBzZXRNb2RhbCh0cnVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X3RpdGxlfT5cclxuICAgICAgICAgICAgICB7dmFsLnByb2R1Y3RGb2N1cy5uYW1hUHJvZHVrfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X3N0b2NrX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF9jb250YWluZXJ9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF9zdWJ0aXRsZX0+U3RvY2s8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3RfdmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICB7dmFsLnN0b2NrfSBwY3NcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3RfY29udGFpbmVyfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF9zdWJ0aXRsZX0+U2FyYW4gT3JkZXI8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3RfdmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICB7dmFsLnNhcmFuT3JkZXJ9IHBjc1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3RfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3Rfc3VidGl0bGV9Pk9yZGVyPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X3ZhbHVlfT57dmFsLm9yZGVyfSBwY3M8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHt2YWwua2V0ID8gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X3N1YnRpdGxlfT5LZXRlcmFuZ2FuPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3RfdmFsdWV9Pnt2YWwua2V0fTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgaWYgKGZpbHRlckRhdGEubGVuZ3RoID09IDApIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpblRvcDogXCIxNTBweFwiLCBjb2xvcjogXCIjZDBkMGQwXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBObyBJdGVtXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gcmVuZGVyO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3Qgb25TYXZlID0gKCkgPT4ge1xyXG4gICAgaWYgKHR5cGUgPT09IFwiUExBTlwiKSB7XHJcbiAgICAgIGFjdGlvbnMuc2V0UGxhbkF2YWJpbGl0eShhdmFiaWxpdHlMaXN0KTtcclxuICAgICAgLy8gY29uc29sZS5sb2coYXZhYmlsaXR5TGlzdCk7XHJcbiAgICAgIFJvdXRlci5wdXNoKGAvdmlzaXQvcGxhbi8ke3JvdXRlci5xdWVyeS5pZH1gKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJVTlBMQU5cIikge1xyXG4gICAgICBSb3V0ZXIucHVzaChgL3Zpc2l0L3VucGxhbi9zdWJtaXRgKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJTUFJFQURJTkdcIikge1xyXG4gICAgICBSb3V0ZXIucHVzaChgL3Zpc2l0L3NwcmVhZGluZy9zdWJtaXRgKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHtyZW5kZXJNb2RhbEFkZCgpfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgIDxOYXZcclxuICAgICAgICAgICAgICAgIHRpdGxlPXtcIkF2YWJpbGl0eVwifVxyXG4gICAgICAgICAgICAgICAgY29sb3I9e1wid2hpdGVcIn1cclxuICAgICAgICAgICAgICAgIGFjdGlvbj17XCJTYXZlXCJ9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIG9uU2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGJhY2tBY3Rpb249eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgUm91dGVyLmJhY2soKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaF9maXhlZH0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjEwcHggMCAwIDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzX2Jhcn0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfYmFyX25vd31cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHsoYXZhYmlsaXR5TGlzdC5sZW5ndGggLyAyNSkgKiAxMDB9JWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMFwiIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCI2MHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtyZW5kZXJBdmFiaWxpdHlMaXN0KCl9XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwMHB4XCIgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5X2JvdF9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0ZXh0PXtcIkFkZFwifVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TW9kYWwodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0UHJvZHVjdChbXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvZHVjdEZvY3VzKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiByZW5kZXIoKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9