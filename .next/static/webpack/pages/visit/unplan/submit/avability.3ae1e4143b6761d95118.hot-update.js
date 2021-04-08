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
      setProduct([{
        id: "552d61c3-6f73-451f-9662-47edc6487b88",
        jenisChannelID: 0,
        namaJenisChannel: "1234",
        namaProduk: "123",
        produkID: "123"
      }]);
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
          lineNumber: 121,
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
          lineNumber: 142,
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
              lineNumber: 150,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avability_modal_subtitle,
              children: "Product"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
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
              lineNumber: 152,
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
              lineNumber: 165,
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
                  lineNumber: 181,
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
                  lineNumber: 184,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 180,
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
                  lineNumber: 195,
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
                  lineNumber: 198,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 194,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avability_modal_subtitle,
              children: "Order (pcs)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 209,
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
              lineNumber: 210,
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
                lineNumber: 220,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
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
            lineNumber: 306,
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
                lineNumber: 314,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                div: true,
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
                children: [val.stock, " pcs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 315,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 310,
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
                lineNumber: 323,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                div: true,
                className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
                children: [val.saranOrder, " pcs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 324,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 319,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 309,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_container,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_subtitle,
              children: "Order"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 330,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avabilitylist_value,
              children: [val.order, " pcs"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 331,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 329,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 11
        }, _this)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 293,
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
        lineNumber: 339,
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
            lineNumber: 366,
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
                  lineNumber: 381,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_pages_VisitPlanDetail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.progress_bar_now,
                  style: {
                    width: "".concat(avabilityList.length / 25 * 100, "%")
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 382,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 380,
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
                lineNumber: 389,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 379,
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
                lineNumber: 400,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 398,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 378,
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
              lineNumber: 404,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 403,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 365,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 364,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdmFiaWxpdHkuanN4Il0sIm5hbWVzIjpbIkF2YWJpbGl0eSIsInR5cGUiLCJ1c2VDb250ZXh0IiwiU3RvcmVzIiwic3RhdGUiLCJkaXNwYXRjaCIsImFjdGlvbnMiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibW9kYWwiLCJzZXRNb2RhbCIsInJlbmRlclByb2R1Y3RMaXN0Iiwic2V0UmVuZGVyUHJvZHVjdExpc3QiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJwcm9kdWN0Iiwic2V0UHJvZHVjdCIsInByb2R1Y3RTZWFyY2giLCJzZXRQcm9kdWN0U2VhcmNoIiwicHJvZHVjdEZvY3VzIiwic2V0UHJvZHVjdEZvY3VzIiwiYXZhYmlsaXR5TGlzdCIsInNldEF2YWJpbGl0eUxpc3QiLCJvcmRlciIsInNldE9yZGVyIiwic2FyYW5PcmRlciIsInNldFNhcmFuT3JkZXIiLCJzdG9jayIsInNldFN0b2NrIiwicGxhbiIsInNldFBsYW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJub3ciLCJEYXRlIiwiZGF0ZSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwidXNlRWZmZWN0Iiwibm90RW1wdHkiLCJsZW5ndGgiLCJ3aW5kb3ciLCJvbmJlZm9yZXVubG9hZCIsInZpc2l0UGxhblJlZHVjZXIiLCJhdmFiaWxpdHkiLCJxdWVyeSIsImlkIiwiZ2V0UGxhbklkIiwidGhlbiIsInNhbWVQbGFuIiwiZGF0YSIsIlJvdXRlciIsInB1c2giLCJjaGVja0luIiwic2V0UGxhbkNoZWNrSW4iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZ2V0UHJvZHVrQnlKZW5pc0NoYW5uZWwiLCJpZEplbmlzQ2hhbm5lbCIsImplbmlzQ2hhbm5lbElEIiwibmFtYUplbmlzQ2hhbm5lbCIsIm5hbWFQcm9kdWsiLCJwcm9kdWtJRCIsIm9uU2VhcmNoUHJvZHVjdCIsInJlbmRlclByb2R1Y3RTZWFyY2giLCJyZW5kZXIiLCJtYXAiLCJ2YWwiLCJpbmRleCIsImluY2x1ZGVzIiwiYm9yZGVyQm90dG9tIiwid2lkdGgiLCJyZW5kZXJNb2RhbEFkZCIsInN0eWxlcyIsIm1vZGFsX2F2YWJpbGl0eSIsIndyYXBwZXIiLCJhdmFiaWxpdHlfbW9kYWxfY29udGFpbmVyIiwiYWRkX3RpdGxlIiwiYXZhYmlsaXR5X21vZGFsX3N1YnRpdGxlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaW5wdXRfb3JkZXJfc2VhcmNoIiwicG9zaXRpb24iLCJtYXhIZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvdmVyZmxvd1kiLCJtYXhXaWR0aCIsInBhZGRpbmciLCJ6SW5kZXgiLCJzdG9ja19vcmRlcl9jb250YWluZXIiLCJwYWRkaW5nUmlnaHQiLCJpbnB1dF9vcmRlciIsInBhZGRpbmdMZWZ0IiwibWFyZ2luVG9wIiwicmVnIiwiUmVnRXhwIiwibWF0Y2giLCJzYW1lRGF0YUluZGV4IiwiZmluZEluZGV4Iiwic3BsaWNlIiwicmVuZGVyQXZhYmlsaXR5TGlzdCIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJmaWx0ZXJEYXRhIiwiZmlsdGVyIiwidG9Mb3dlckNhc2UiLCJib3JkZXJSYWRpdXMiLCJhdmFiaWxpdHlsaXN0X3RpdGxlIiwiYXZhYmlsaXR5bGlzdF9zdG9ja19jb250YWluZXIiLCJhdmFiaWxpdHlsaXN0X2NvbnRhaW5lciIsIm1hcmdpblJpZ2h0IiwiYXZhYmlsaXR5bGlzdF9zdWJ0aXRsZSIsImF2YWJpbGl0eWxpc3RfdmFsdWUiLCJtYXJnaW5MZWZ0IiwidGV4dEFsaWduIiwiY29sb3IiLCJvblNhdmUiLCJzZXRQbGFuQXZhYmlsaXR5IiwiY29udGFpbmVyIiwiYmFjayIsIm1haW4iLCJzZWFyY2hfZml4ZWQiLCJtYXJnaW4iLCJwcm9ncmVzc19iYXIiLCJwcm9ncmVzc19iYXJfbm93IiwiaW5wdXQiLCJwYWRkaW5nVG9wIiwibWFyZ2luQm90dG9tIiwiYXZhYmlsaXR5X2Jv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RUFBYjtBQUNEOztHQWpadUJ0RSxTO1VBY1BpQyxxRDs7O0tBZE9qQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Zpc2l0L3VucGxhbi9zdWJtaXQvYXZhYmlsaXR5LjNhZTFlNDE0M2I2NzYxZDk1MTE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvcGFnZXMvVmlzaXRQbGFuRGV0YWlsLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCB7IFN0b3JlcyB9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IE5hdiBmcm9tIFwiLi9OYXZcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4vU3Bpbm5lclwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi9DYXJkXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldFBsYW5JZCxcclxuICBnZXRQcm9kdWN0U2VhcmNoLFxyXG4gIGdldFByb2R1a0J5SmVuaXNDaGFubmVsLFxyXG59IGZyb20gXCIuLi9oZWxwZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF2YWJpbGl0eSh7IHR5cGUgfSkge1xyXG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoLCBhY3Rpb25zIH0gPSB1c2VDb250ZXh0KFN0b3Jlcyk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3JlbmRlclByb2R1Y3RMaXN0LCBzZXRSZW5kZXJQcm9kdWN0TGlzdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcm9kdWN0LCBzZXRQcm9kdWN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcHJvZHVjdFNlYXJjaCwgc2V0UHJvZHVjdFNlYXJjaF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Byb2R1Y3RGb2N1cywgc2V0UHJvZHVjdEZvY3VzXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbYXZhYmlsaXR5TGlzdCwgc2V0QXZhYmlsaXR5TGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW29yZGVyLCBzZXRPcmRlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc2FyYW5PcmRlciwgc2V0U2FyYW5PcmRlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3RvY2ssIHNldFN0b2NrXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwbGFuLCBzZXRQbGFuXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICB2YXIgbm93ID0gbmV3IERhdGUoKTtcclxuICB2YXIgZGF0ZSA9IG5vdy5nZXREYXRlKCk7XHJcbiAgdmFyIG1vbnRoID0gbm93LmdldE1vbnRoKCkgKyAxO1xyXG4gIHZhciB5ZWFyID0gbm93LmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBub3RFbXB0eSA9IGF2YWJpbGl0eUxpc3QubGVuZ3RoID4gMDtcclxuICAgIGlmIChub3RFbXB0eSA+IDApIHtcclxuICAgICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBcIkRhdGEgd2lsbCBiZSBsb3N0IGlmIHlvdSBsZWF2ZSB0aGUgcGFnZSwgYXJlIHlvdSBzdXJlP1wiO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGUgPT09IFwiUExBTlwiKSB7XHJcbiAgICAgIGlmIChzdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLmF2YWJpbGl0eS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgc2V0QXZhYmlsaXR5TGlzdChbLi4uc3RhdGUudmlzaXRQbGFuUmVkdWNlci5hdmFiaWxpdHldKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlVOUExBTlwiKSB7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiU1BSRUFESU5HXCIpIHtcclxuICAgIH1cclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0eXBlID09PSBcIlBMQU5cIikge1xyXG4gICAgICBpZiAocm91dGVyLnF1ZXJ5LmlkKSB7XHJcbiAgICAgICAgZ2V0UGxhbklkKHJvdXRlci5xdWVyeS5pZClcclxuICAgICAgICAgIC50aGVuKCh7IHNhbWVQbGFuLCBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2FtZVBsYW4sIGRhdGEpO1xyXG4gICAgICAgICAgICBpZiAoc2FtZVBsYW4ubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi92aXNpdC9wbGFuXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHNldFBsYW4oZGF0YSk7XHJcbiAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgaWYgKCFzdGF0ZS52aXNpdFBsYW5SZWR1Y2VyLmNoZWNrSW4pIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbnMuc2V0UGxhbkNoZWNrSW4obm93KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJVTlBMQU5cIikge1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlNQUkVBRElOR1wiKSB7XHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlci5xdWVyeS5pZF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGUgPT09IFwiUExBTlwiKSB7XHJcbiAgICAgIGdldFByb2R1a0J5SmVuaXNDaGFubmVsKHBsYW4uaWRKZW5pc0NoYW5uZWwpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIHNldFByb2R1Y3QoZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJVTlBMQU5cIikge1xyXG4gICAgICBzZXRQcm9kdWN0KFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogXCI1NTJkNjFjMy02ZjczLTQ1MWYtOTY2Mi00N2VkYzY0ODdiODhcIixcclxuICAgICAgICAgIGplbmlzQ2hhbm5lbElEOiAwLFxyXG4gICAgICAgICAgbmFtYUplbmlzQ2hhbm5lbDogXCIxMjM0XCIsXHJcbiAgICAgICAgICBuYW1hUHJvZHVrOiBcIjEyM1wiLFxyXG4gICAgICAgICAgcHJvZHVrSUQ6IFwiMTIzXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiU1BSRUFESU5HXCIpIHtcclxuICAgIH1cclxuICB9LCBbcGxhbl0pO1xyXG5cclxuICBjb25zdCBvblNlYXJjaFByb2R1Y3QgPSAoc2VhcmNoKSA9PiB7XHJcbiAgICAvLyBzZXRQcm9kdWN0Rm9jdXMoc2VhcmNoKTtcclxuICAgIC8vIGdldFByb2R1Y3RTZWFyY2goc2VhcmNoKVxyXG4gICAgLy8gICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgLy8gICAgIHNldFByb2R1Y3QoZGF0YSk7XHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIC8vICAgfSk7OycnJydcclxuICAgIHNldFByb2R1Y3RTZWFyY2goc2VhcmNoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJQcm9kdWN0U2VhcmNoID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmVuZGVyID0gcHJvZHVjdC5tYXAoKHZhbCwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKHZhbC5uYW1hUHJvZHVrLmluY2x1ZGVzKHByb2R1Y3RTZWFyY2gpKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIC8vIHNldFByb2R1Y3QoW10pO1xyXG4gICAgICAgICAgICAgIHNldFByb2R1Y3RGb2N1cyh2YWwpO1xyXG4gICAgICAgICAgICAgIHNldFJlbmRlclByb2R1Y3RMaXN0KGZhbHNlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiBcIi41cHggc29saWQgI2YwZjBmMFwiLCB3aWR0aDogXCIzNTZweFwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt2YWwubmFtYVByb2R1a31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlbmRlcjtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJNb2RhbEFkZCA9ICgpID0+IHtcclxuICAgIGlmIChtb2RhbCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsX2F2YWJpbGl0eX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldE1vZGFsKGZhbHNlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5X21vZGFsX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRfdGl0bGV9PkFkZCBQcm9kdWN0PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlfbW9kYWxfc3VidGl0bGV9PlByb2R1Y3Q8L2Rpdj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBvblNlYXJjaFByb2R1Y3QoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9kdWN0Rm9jdXMubmFtYVByb2R1a31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0X29yZGVyX3NlYXJjaH1cclxuICAgICAgICAgICAgICAgIC8vIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgc2V0UHJvZHVjdChbXSk7XHJcbiAgICAgICAgICAgICAgICAvLyB9fVxyXG4gICAgICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0UmVuZGVyUHJvZHVjdExpc3QodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7cHJvZHVjdCA/IChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogXCIxODBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93WTogXCJzY3JvbGxcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCI0MDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMCA0cHhcIixcclxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDk5OTk5OSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3JlbmRlclByb2R1Y3RMaXN0ID8gcmVuZGVyUHJvZHVjdFNlYXJjaCgpIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RvY2tfb3JkZXJfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlfbW9kYWxfc3VidGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIFN0b2NrIChwY3MpXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFN0b2NrKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfb3JkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0b2NrfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlfbW9kYWxfc3VidGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIFNhcmFuIE9yZGVyIChwY3MpXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFNhcmFuT3JkZXIoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF9vcmRlcn1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2FyYW5PcmRlcn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5X21vZGFsX3N1YnRpdGxlfT5PcmRlciAocGNzKTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldE9yZGVyKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF9vcmRlcn1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtvcmRlcn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgdGV4dD17XCJBZGRcIn1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZWcgPSBuZXcgUmVnRXhwKC9eKFxcKD9cXCs/WzAtOV0qXFwpPyk/WzAtOV9cXC0gXFwoXFwpXSokL2cpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGb2N1cy5uYW1hUHJvZHVrICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdG9jay5tYXRjaChyZWcpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICBzYXJhbk9yZGVyLm1hdGNoKHJlZykgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIG9yZGVyLm1hdGNoKHJlZylcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmIChhdmFiaWxpdHlMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNhbWVEYXRhSW5kZXggPSBhdmFiaWxpdHlMaXN0LmZpbmRJbmRleChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAodmFsKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsLnByb2R1Y3RGb2N1cy5uYW1hUHJvZHVrID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZvY3VzLm5hbWFQcm9kdWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNhbWVEYXRhSW5kZXggKyAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhYmlsaXR5TGlzdC5zcGxpY2Uoc2FtZURhdGFJbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhYmlsaXR5TGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGb2N1cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b2NrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FyYW5PcmRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1vZGFsKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTdG9jayhcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTYXJhbk9yZGVyKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldE9yZGVyKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF2YWJpbGl0eUxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Rm9jdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9jayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhcmFuT3JkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNb2RhbChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RvY2soXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2FyYW5PcmRlcihcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRPcmRlcihcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXZhYmlsaXR5TGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Rm9jdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2FyYW5PcmRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE1vZGFsKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RvY2soXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNhcmFuT3JkZXIoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE9yZGVyKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCByZW5kZXJBdmFiaWxpdHlMaXN0ID0gKCkgPT4ge1xyXG4gICAgYXZhYmlsaXR5TGlzdC5zb3J0KChhLCBiKSA9PlxyXG4gICAgICBhLnByb2R1Y3RGb2N1cy5uYW1hUHJvZHVrLmxvY2FsZUNvbXBhcmUoYi5wcm9kdWN0Rm9jdXMubmFtYVByb2R1aylcclxuICAgICk7XHJcbiAgICBjb25zdCBmaWx0ZXJEYXRhID0gYXZhYmlsaXR5TGlzdC5maWx0ZXIoKHZhbCkgPT4ge1xyXG4gICAgICByZXR1cm4gdmFsLnByb2R1Y3RGb2N1cy5uYW1hUHJvZHVrXHJcbiAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCByZW5kZXIgPSBmaWx0ZXJEYXRhLm1hcCgodmFsLCBpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJkXHJcbiAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIHBhZGRpbmc6IFwiMzBweFwiLCBtYXJnaW5Ub3A6IFwiMTRweFwiIH19XHJcbiAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFByb2R1Y3RGb2N1cyh2YWwucHJvZHVjdEZvY3VzKTtcclxuICAgICAgICAgICAgICBzZXRTdG9jayh2YWwuc3RvY2spO1xyXG4gICAgICAgICAgICAgIHNldFNhcmFuT3JkZXIodmFsLnNhcmFuT3JkZXIpO1xyXG4gICAgICAgICAgICAgIHNldE9yZGVyKHZhbC5vcmRlcik7XHJcbiAgICAgICAgICAgICAgc2V0TW9kYWwodHJ1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF90aXRsZX0+XHJcbiAgICAgICAgICAgICAge3ZhbC5wcm9kdWN0Rm9jdXMubmFtYVByb2R1a31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF9zdG9ja19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3RfY29udGFpbmVyfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3Rfc3VidGl0bGV9PlN0b2NrPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X3ZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAge3ZhbC5zdG9ja30gcGNzXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X2NvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWJpbGl0eWxpc3Rfc3VidGl0bGV9PlNhcmFuIE9yZGVyPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X3ZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAge3ZhbC5zYXJhbk9yZGVyfSBwY3NcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlsaXN0X3N1YnRpdGxlfT5PcmRlcjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhYmlsaXR5bGlzdF92YWx1ZX0+e3ZhbC5vcmRlcn0gcGNzPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgICBpZiAoZmlsdGVyRGF0YS5sZW5ndGggPT0gMCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luVG9wOiBcIjE1MHB4XCIsIGNvbG9yOiBcIiNkMGQwZDBcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIE5vIEl0ZW1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiByZW5kZXI7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBvblNhdmUgPSAoKSA9PiB7XHJcbiAgICBpZiAodHlwZSA9PT0gXCJQTEFOXCIpIHtcclxuICAgICAgYWN0aW9ucy5zZXRQbGFuQXZhYmlsaXR5KGF2YWJpbGl0eUxpc3QpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhhdmFiaWxpdHlMaXN0KTtcclxuICAgICAgUm91dGVyLnB1c2goYC92aXNpdC9wbGFuLyR7cm91dGVyLnF1ZXJ5LmlkfWApO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlVOUExBTlwiKSB7XHJcbiAgICAgIFJvdXRlci5wdXNoKGAvdmlzaXQvdW5wbGFuL3N1Ym1pdGApO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcIlNQUkVBRElOR1wiKSB7XHJcbiAgICAgIFJvdXRlci5wdXNoKGAvdmlzaXQvc3ByZWFkaW5nL3N1Ym1pdGApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICB7cmVuZGVyTW9kYWxBZGQoKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8TmF2XHJcbiAgICAgICAgICAgICAgdGl0bGU9e1wiQXZhYmlsaXR5XCJ9XHJcbiAgICAgICAgICAgICAgY29sb3I9e1wid2hpdGVcIn1cclxuICAgICAgICAgICAgICBhY3Rpb249e1wiU2F2ZVwifVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIG9uU2F2ZSgpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgYmFja0FjdGlvbj17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgUm91dGVyLmJhY2soKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGRpc2FibGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoX2ZpeGVkfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjEwcHggMCAwIDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJ9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NfYmFyX25vd31cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGAkeyhhdmFiaWxpdHlMaXN0Lmxlbmd0aCAvIDI1KSAqIDEwMH0lYCxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMFwiIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCI2MHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICB7cmVuZGVyQXZhYmlsaXR5TGlzdCgpfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTAwcHhcIiB9fSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFiaWxpdHlfYm90X2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdGV4dD17XCJBZGRcIn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0TW9kYWwodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIC8vIHNldFByb2R1Y3QoW10pO1xyXG4gICAgICAgICAgICAgICAgICBzZXRQcm9kdWN0Rm9jdXMoXCJcIik7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9O1xyXG4gIHJldHVybiByZW5kZXIoKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9