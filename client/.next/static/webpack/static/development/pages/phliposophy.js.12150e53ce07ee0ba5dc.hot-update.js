webpackHotUpdate("static\\development\\pages\\phliposophy.js",{

/***/ "./components/api/OsSdkPhlip.js":
/*!**************************************!*\
  !*** ./components/api/OsSdkPhlip.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _OsPagination_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../OsPagination.js */ "./components/OsPagination.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "../node_modules/web3/src/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var opensea_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! opensea-js */ "../node_modules/opensea-js/lib/index.js");
/* harmony import */ var opensea_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(opensea_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var opensea_js_lib_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! opensea-js/lib/types */ "../node_modules/opensea-js/lib/types.js");
/* harmony import */ var opensea_js_lib_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(opensea_js_lib_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shards-react */ "../node_modules/shards-react/dist/shards-react.es.js");



var _jsxFileName = "C:\\Users\\Dev_Account\\dnp\\client\\components\\api\\OsSdkPhlip.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;
//import ReactPaginate from "react-paginate";







function SdkPhlip({
  tokenIdArray,
  projectTotal
}) {
  _s();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
        items = _useState[0],
        setItems = _useState[1];

  const _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
        cursor = _useState2[0],
        setCursor = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(1),
        currentPage = _useState3[0],
        setCurrentPage = _useState3[1];

  const _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(6),
        ordersPerPage = _useState4[0];

  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
        totalOrders = _useState5[0],
        setTotalOrders = _useState5[1];

  let i;
  let offsetNum = 0;
  const callsPerProject = 3; // console.log(offsetNum)

  let tokenArray = [];

  for (i = 0; i < callsPerProject; i++, offsetNum += 50) {
    //getorders(offsetNum);
    //console.log(tokenIdArray)
    const provider = new web3__WEBPACK_IMPORTED_MODULE_3__["providers"].HttpProvider('https://mainnet.infura.io');
    const seaport = new opensea_js__WEBPACK_IMPORTED_MODULE_4__["OpenSeaPort"](provider, {
      networkName: opensea_js__WEBPACK_IMPORTED_MODULE_4__["Network"].Main,
      apiKey: '2f2a0900458f4bdfbb489680a58e7526'
    });
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'X-API-KEY': '2f2a0900458f4bdfbb489680a58e7526'
      }
    };
    let limit = 50;
    let i;
    let offsetNum = 0;
    const callsPerProject = 3;
    console.log(offsetNum);

    for (i = 0; i < callsPerProject; i++, offsetNum += 50) {}

    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
      const getorders = /*#__PURE__*/function () {
        var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(tokenIds) {
          var _yield$seaport$api$ge, orders, count, data, total;

          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return seaport.api.getOrders({
                  asset_contract_address: '0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e',
                  token_ids: [3396],
                  side: 1,
                  sale_kind: 0
                });

              case 2:
                _yield$seaport$api$ge = _context.sent;
                orders = _yield$seaport$api$ge.orders;
                count = _yield$seaport$api$ge.count;
                console.log(orders);
                data = orders; // const total = res.headers.get("x-total-count");

                total = data.count; //setpageCount(Math.ceil(projectTotal / limit));
                // console.log(Math.ceil(total/12));
                //setCursor(data.next)
                //console.log(data)

                setItems(orders);

              case 9:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));

        return function getorders(_x) {
          return _ref.apply(this, arguments);
        };
      }();

      getorders();
    }, [limit]);

    const fetchorders = /*#__PURE__*/function () {
      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(cursor) {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetch( //`http://localhost:3004/orders?_page=${currentPage}&_limit=${limit}`
              //`https://jsonplaceholder.typicode.com/orders?_page=${currentPage}&_limit=${limit}`
              //`https://api.opensea.io/wyvern/v1/orders?bundled=false&include_bundled=false&side=1&limit=${limit}&offset=${currentOs}&order_by=created_date&order_direction=desc`,options
              "https://api.opensea.io/api/v1/assets?collection=doodles-official&order_direction=desc&limit=50&cursor=".concat(cursor, "&include_orders=true"), options);

            case 2:
              res = _context2.sent;
              _context2.next = 5;
              return res.json();

            case 5:
              data = _context2.sent;
              return _context2.abrupt("return", data);

            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));

      return function fetchorders(_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    const handlePageClick = /*#__PURE__*/function () {
      var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(cursor) {
        var ordersFormServer;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return getorders(cursor);

            case 2:
              ordersFormServer = _context3.sent;
              setItems(ordersFormServer.assets);
              setCursor(ordersFormServer.next);
              console.log(ordersFormServer.assets.sell_orders);

            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));

      return function handlePageClick(_x3) {
        return _ref3.apply(this, arguments);
      };
    }();

    return __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 5
      }
    }, __jsx("button", {
      className: "btn btn-block btn-success join-form-btn",
      key: "submit",
      type: "button",
      onClick: () => handlePageClick(cursor),
      style: {
        fontSize: 16
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 7
      }
    }, "Button"), __jsx("div", {
      className: "row m-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 7
      }
    }, items.map(item => {
      return __jsx("div", {
        key: item.asset.tokeId,
        className: "col-sm-6 col-md-4 v my-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "card shadow-sm w-100",
        style: {
          minHeight: 25
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "card-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 17
        }
      }, __jsx("h5", {
        className: "card-title text-center h2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 19
        }
      }, "Id :", item.asset.tokenId, " "), __jsx("h6", {
        className: "card-subtitle mb-2 text-muted text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 19
        }
      }, item.email), __jsx("p", {
        className: "card-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 19
        }
      }, item.body))));
    })));
  }
}

_s(SdkPhlip, "WMEe9tfooTAoLsuYYlSmJ6CucYI=");

_c = SdkPhlip;
/* harmony default export */ __webpack_exports__["default"] = (SdkPhlip);

var _c;

$RefreshReg$(_c, "SdkPhlip");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "../node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/api/TestOsSdk.js":
false,

/***/ "./pages/phliposophy.js":
/*!******************************!*\
  !*** ./pages/phliposophy.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "../node_modules/web3/src/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var opensea_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! opensea-js */ "../node_modules/opensea-js/lib/index.js");
/* harmony import */ var opensea_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(opensea_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_api_OsSdkPhlip_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/api/OsSdkPhlip.js */ "./components/api/OsSdkPhlip.js");
/* harmony import */ var _components_layout_Layout_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/Layout.js */ "./components/layout/Layout.js");
/* harmony import */ var _drizzle_react_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @drizzle/react-plugin */ "../node_modules/@drizzle/react-plugin/dist/drizzle-react-plugin.js");
/* harmony import */ var _drizzle_react_plugin__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_drizzle_react_plugin__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rimble_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rimble-ui */ "../node_modules/rimble-ui/dist/index.es.js");
/* harmony import */ var _components_cards_NewTest__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/cards/NewTest */ "./components/cards/NewTest.js");
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shards-react */ "../node_modules/shards-react/dist/shards-react.es.js");
var _jsxFileName = "C:\\Users\\Dev_Account\\dnp\\client\\pages\\phliposophy.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










function SdkPage() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(_components_layout_Layout_js__WEBPACK_IMPORTED_MODULE_4__["Page"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(_components_layout_Layout_js__WEBPACK_IMPORTED_MODULE_4__["Center"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(_drizzle_react_plugin__WEBPACK_IMPORTED_MODULE_5__["DrizzleContext"].Consumer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, drizzleContext => {
    const drizzle = drizzleContext.drizzle,
          drizzleState = drizzleContext.drizzleState,
          initialized = drizzleContext.initialized;

    if (!initialized) {
      return __jsx("div", {
        className: "justify-content-center align-items-center mt-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }
      }, __jsx(rimble_ui__WEBPACK_IMPORTED_MODULE_6__["Loader"], {
        className: "mx-auto",
        color: "#007bff",
        size: "40px",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 23
        }
      }));
    }

    return __jsx(shards_react__WEBPACK_IMPORTED_MODULE_8__["Container"], {
      fluid: true,
      className: "d-flex justify-content-center main-container-pp",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 21
      }
    }, __jsx(_components_api_OsSdkPhlip_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      drizzleState: drizzleState,
      drizzle: drizzle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 23
      }
    }));
  }))));
}

_c = SdkPage;
/* harmony default export */ __webpack_exports__["default"] = (SdkPage);

var _c;

$RefreshReg$(_c, "SdkPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "../node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FwaS9Pc1Nka1BobGlwLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3BobGlwb3NvcGh5LmpzIl0sIm5hbWVzIjpbIlNka1BobGlwIiwidG9rZW5JZEFycmF5IiwicHJvamVjdFRvdGFsIiwidXNlU3RhdGUiLCJpdGVtcyIsInNldEl0ZW1zIiwiY3Vyc29yIiwic2V0Q3Vyc29yIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsIm9yZGVyc1BlclBhZ2UiLCJ0b3RhbE9yZGVycyIsInNldFRvdGFsT3JkZXJzIiwiaSIsIm9mZnNldE51bSIsImNhbGxzUGVyUHJvamVjdCIsInRva2VuQXJyYXkiLCJwcm92aWRlciIsIldlYjMiLCJIdHRwUHJvdmlkZXIiLCJzZWFwb3J0IiwiT3BlblNlYVBvcnQiLCJuZXR3b3JrTmFtZSIsIk5ldHdvcmsiLCJNYWluIiwiYXBpS2V5Iiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJsaW1pdCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJnZXRvcmRlcnMiLCJ0b2tlbklkcyIsImFwaSIsImdldE9yZGVycyIsImFzc2V0X2NvbnRyYWN0X2FkZHJlc3MiLCJ0b2tlbl9pZHMiLCJzaWRlIiwic2FsZV9raW5kIiwib3JkZXJzIiwiY291bnQiLCJkYXRhIiwidG90YWwiLCJmZXRjaG9yZGVycyIsImZldGNoIiwicmVzIiwianNvbiIsImhhbmRsZVBhZ2VDbGljayIsIm9yZGVyc0Zvcm1TZXJ2ZXIiLCJhc3NldHMiLCJuZXh0Iiwic2VsbF9vcmRlcnMiLCJmb250U2l6ZSIsIm1hcCIsIml0ZW0iLCJhc3NldCIsInRva2VJZCIsIm1pbkhlaWdodCIsInRva2VuSWQiLCJlbWFpbCIsImJvZHkiLCJTZGtQYWdlIiwiZHJpenpsZUNvbnRleHQiLCJkcml6emxlIiwiZHJpenpsZVN0YXRlIiwiaW5pdGlhbGl6ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7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LmpzLjEyMTUwZTUzY2UwN2VlMGJhNWRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBSZWFjdFBhZ2luYXRlIGZyb20gXCJyZWFjdC1wYWdpbmF0ZVwiO1xyXG5pbXBvcnQgT3NQYWdpbmF0aW9uIGZyb20gJy4uL09zUGFnaW5hdGlvbi5qcyc7XHJcbmltcG9ydCAqIGFzIFdlYjMgZnJvbSAnd2ViMyc7XHJcbmltcG9ydCB7IE9wZW5TZWFQb3J0LCBOZXR3b3JrLCBPcGVuU2VhQXNzZXQgIH0gZnJvbSAnb3BlbnNlYS1qcyc7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBPcmRlclNpZGUgfSBmcm9tICdvcGVuc2VhLWpzL2xpYi90eXBlcyc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSB9IGZyb20gXCJzaGFyZHMtcmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIFNka1BobGlwKHt0b2tlbklkQXJyYXksIHByb2plY3RUb3RhbH0pIHtcclxuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY3Vyc29yLCBzZXRDdXJzb3JdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtvcmRlcnNQZXJQYWdlXSA9IHVzZVN0YXRlKDYpO1xyXG4gIGNvbnN0IFt0b3RhbE9yZGVycywgc2V0VG90YWxPcmRlcnNdID0gdXNlU3RhdGUoKTtcclxuXHJcblxyXG5cclxuICBsZXQgaTtcclxuICBsZXQgb2Zmc2V0TnVtPTA7XHJcbiAgY29uc3QgY2FsbHNQZXJQcm9qZWN0ID0gMztcclxuIC8vIGNvbnNvbGUubG9nKG9mZnNldE51bSlcclxuXHJcbiAgbGV0IHRva2VuQXJyYXkgPSBbXTtcclxuICBmb3IgKGkgPSAwOyBpIDwgY2FsbHNQZXJQcm9qZWN0OyBpKyssIG9mZnNldE51bSs9NTApIHtcclxuXHJcbiBcclxuICAvL2dldG9yZGVycyhvZmZzZXROdW0pO1xyXG5cclxuICBcclxuLy9jb25zb2xlLmxvZyh0b2tlbklkQXJyYXkpXHJcbiAgY29uc3QgcHJvdmlkZXIgPSBuZXcgV2ViMy5wcm92aWRlcnMuSHR0cFByb3ZpZGVyKCdodHRwczovL21haW5uZXQuaW5mdXJhLmlvJyk7XHJcblxyXG4gIGNvbnN0IHNlYXBvcnQgPSBuZXcgT3BlblNlYVBvcnQocHJvdmlkZXIsIHtcclxuICAgIG5ldHdvcmtOYW1lOiBOZXR3b3JrLk1haW4sXHJcbiAgICBhcGlLZXk6ICcyZjJhMDkwMDQ1OGY0YmRmYmI0ODk2ODBhNThlNzUyNidcclxuICB9KTtcclxuXHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gIG1ldGhvZDogJ0dFVCcsXHJcbiAgaGVhZGVyczoge0FjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCAnWC1BUEktS0VZJzogJzJmMmEwOTAwNDU4ZjRiZGZiYjQ4OTY4MGE1OGU3NTI2J31cclxufTtcclxuXHJcbiAgbGV0IGxpbWl0ID0gNTA7XHJcbiAgbGV0IGk7XHJcbiAgbGV0IG9mZnNldE51bT0wO1xyXG4gIGNvbnN0IGNhbGxzUGVyUHJvamVjdCA9IDM7XHJcbiAgY29uc29sZS5sb2cob2Zmc2V0TnVtKVxyXG4gIGZvciAoaSA9IDA7IGkgPCBjYWxsc1BlclByb2plY3Q7IGkrKywgb2Zmc2V0TnVtKz01MCkge1xyXG4gIFxyXG5cclxuXHJcbiAgfVxyXG4gIFxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gXHJcbiAgICBjb25zdCBnZXRvcmRlcnMgPSBhc3luYyAodG9rZW5JZHMpID0+IHtcclxuICBcclxuICAgICAgY29uc3QgIHsgb3JkZXJzLCBjb3VudCB9ID0gYXdhaXQgc2VhcG9ydC5hcGkuZ2V0T3JkZXJzKHtcclxuICAgICAgICBhc3NldF9jb250cmFjdF9hZGRyZXNzOiAnMHg4YTkwQ0FiMmIzOGRiYTgwYzY0Yjc3MzRlNThFZTFkQjM4Qjg5OTJlJyxcclxuICAgICAgICB0b2tlbl9pZHM6IFszMzk2XSxcclxuICAgICAgICBzaWRlOiAxLFxyXG4gICAgICAgIHNhbGVfa2luZDogMCxcclxuICBcclxuICAgICAgfSlcclxuICAgICAgY29uc29sZS5sb2cob3JkZXJzKVxyXG4gICAgICBjb25zdCBkYXRhID0gb3JkZXJzO1xyXG4gIFxyXG4gICAgICAvLyBjb25zdCB0b3RhbCA9IHJlcy5oZWFkZXJzLmdldChcIngtdG90YWwtY291bnRcIik7XHJcbiAgICAgIGNvbnN0IHRvdGFsID0gZGF0YS5jb3VudDtcclxuICAgICAgLy9zZXRwYWdlQ291bnQoTWF0aC5jZWlsKHByb2plY3RUb3RhbCAvIGxpbWl0KSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKE1hdGguY2VpbCh0b3RhbC8xMikpO1xyXG4gICAgICAvL3NldEN1cnNvcihkYXRhLm5leHQpXHJcbiAgICAgIC8vY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgc2V0SXRlbXMob3JkZXJzKTtcclxuICAgIH07XHJcbiBcclxuICAgIGdldG9yZGVycygpO1xyXG4gIH0sIFtsaW1pdF0pO1xyXG5cclxuICBjb25zdCBmZXRjaG9yZGVycyA9IGFzeW5jIChjdXJzb3IpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAvL2BodHRwOi8vbG9jYWxob3N0OjMwMDQvb3JkZXJzP19wYWdlPSR7Y3VycmVudFBhZ2V9Jl9saW1pdD0ke2xpbWl0fWBcclxuICAgICAgIC8vYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9vcmRlcnM/X3BhZ2U9JHtjdXJyZW50UGFnZX0mX2xpbWl0PSR7bGltaXR9YFxyXG4gICAgICAgLy9gaHR0cHM6Ly9hcGkub3BlbnNlYS5pby93eXZlcm4vdjEvb3JkZXJzP2J1bmRsZWQ9ZmFsc2UmaW5jbHVkZV9idW5kbGVkPWZhbHNlJnNpZGU9MSZsaW1pdD0ke2xpbWl0fSZvZmZzZXQ9JHtjdXJyZW50T3N9Jm9yZGVyX2J5PWNyZWF0ZWRfZGF0ZSZvcmRlcl9kaXJlY3Rpb249ZGVzY2Asb3B0aW9uc1xyXG4gICAgICAgYGh0dHBzOi8vYXBpLm9wZW5zZWEuaW8vYXBpL3YxL2Fzc2V0cz9jb2xsZWN0aW9uPWRvb2RsZXMtb2ZmaWNpYWwmb3JkZXJfZGlyZWN0aW9uPWRlc2MmbGltaXQ9NTAmY3Vyc29yPSR7Y3Vyc29yfSZpbmNsdWRlX29yZGVycz10cnVlYCxvcHRpb25zXHJcbiAgICApO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVQYWdlQ2xpY2sgPSBhc3luYyAoY3Vyc29yKSA9PiB7XHJcbiAgIFxyXG4gICAgY29uc3Qgb3JkZXJzRm9ybVNlcnZlciA9IGF3YWl0IGdldG9yZGVycyhjdXJzb3IpO1xyXG4gICAgc2V0SXRlbXMob3JkZXJzRm9ybVNlcnZlci5hc3NldHMpO1xyXG4gICAgc2V0Q3Vyc29yKG9yZGVyc0Zvcm1TZXJ2ZXIubmV4dClcclxuICAgIGNvbnNvbGUubG9nKG9yZGVyc0Zvcm1TZXJ2ZXIuYXNzZXRzLnNlbGxfb3JkZXJzKVxyXG4gIH07XHJcblxyXG5cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWJsb2NrIGJ0bi1zdWNjZXNzIGpvaW4tZm9ybS1idG5cIiBrZXk9XCJzdWJtaXRcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gaGFuZGxlUGFnZUNsaWNrKGN1cnNvcil9IHN0eWxlPXt7IGZvbnRTaXplOiAxNiB9fSA+IFxyXG4gICAgICAgICAgQnV0dG9uXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtLTJcIj5cclxuICAgICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5hc3NldC50b2tlSWR9IGNsYXNzTmFtZT1cImNvbC1zbS02IGNvbC1tZC00IHYgbXktMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBzaGFkb3ctc20gdy0xMDBcIiBzdHlsZT17eyBtaW5IZWlnaHQ6IDI1IH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgdGV4dC1jZW50ZXIgaDJcIj5JZCA6e2l0ZW0uYXNzZXQudG9rZW5JZH0gPC9oNT5cclxuICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgbWItMiB0ZXh0LW11dGVkIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntpdGVtLmJvZHl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZGtQaGxpcDsiLCJpbXBvcnQgKiBhcyBXZWIzIGZyb20gJ3dlYjMnXHJcbmltcG9ydCB7IE9wZW5TZWFTREssIE5ldHdvcmsgfSBmcm9tICdvcGVuc2VhLWpzJ1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgT3NTZGtQaGxpcCBmcm9tICcuLi9jb21wb25lbnRzL2FwaS9Pc1Nka1BobGlwLmpzJztcclxuXHJcbmltcG9ydCB7IFBhZ2UsIENlbnRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dC5qcyc7XHJcbmltcG9ydCB7IERyaXp6bGVDb250ZXh0IH0gZnJvbSBcIkBkcml6emxlL3JlYWN0LXBsdWdpblwiO1xyXG5pbXBvcnQgeyAgTG9hZGVyIH0gZnJvbSAncmltYmxlLXVpJztcclxuaW1wb3J0IE5ld1Rlc3QgZnJvbSAnLi4vY29tcG9uZW50cy9jYXJkcy9OZXdUZXN0JztcclxuaW1wb3J0IHsgQ29udGFpbmVyICB9IGZyb20gXCJzaGFyZHMtcmVhY3RcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBTZGtQYWdlICgpIHtcclxucmV0dXJuICggICAgXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8UGFnZT5cclxuICAgICAgICA8Q2VudGVyPiAgICAgICBcclxuICAgICAgICAgIDxEcml6emxlQ29udGV4dC5Db25zdW1lcj5cclxuICAgICAgICAgICAge2RyaXp6bGVDb250ZXh0ID0+IHtcclxuICAgICAgICAgICAgIGNvbnN0IHtkcml6emxlLCBkcml6emxlU3RhdGUsIGluaXRpYWxpemVkIH0gPSBkcml6emxlQ29udGV4dDtcclxuICAgICAgICAgICAgICAgIGlmKCFpbml0aWFsaXplZCkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgbXQtM1wiPiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPExvYWRlciBjbGFzc05hbWU9XCJteC1hdXRvXCIgY29sb3I9XCIjMDA3YmZmXCIgc2l6ZT1cIjQwcHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG1haW4tY29udGFpbmVyLXBwXCI+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPE9zU2RrUGhsaXAgZHJpenpsZVN0YXRlPXtkcml6emxlU3RhdGV9IGRyaXp6bGU9e2RyaXp6bGV9ICAvPiBcclxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICA8L0RyaXp6bGVDb250ZXh0LkNvbnN1bWVyPlxyXG4gICAgICAgIDwvQ2VudGVyPlxyXG4gICAgICA8L1BhZ2U+ICAgIFxyXG4gICAgPC9kaXY+XHJcblxyXG4pO1xyXG5cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2RrUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9