webpackHotUpdate("static\\development\\pages\\phliposophy.js",{

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
/* harmony import */ var _components_api_TestOsSdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/api/TestOsSdk.js */ "./components/api/TestOsSdk.js");
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
    }, __jsx(_components_api_TestOsSdk_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9waGxpcG9zb3BoeS5qcyJdLCJuYW1lcyI6WyJTZGtQYWdlIiwiZHJpenpsZUNvbnRleHQiLCJkcml6emxlIiwiZHJpenpsZVN0YXRlIiwiaW5pdGlhbGl6ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLE9BQVQsR0FBb0I7QUFDcEIsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRCxDQUFnQixRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLGNBQWMsSUFBSTtBQUFBLFVBQ1hDLE9BRFcsR0FDNEJELGNBRDVCLENBQ1hDLE9BRFc7QUFBQSxVQUNGQyxZQURFLEdBQzRCRixjQUQ1QixDQUNGRSxZQURFO0FBQUEsVUFDWUMsV0FEWixHQUM0QkgsY0FENUIsQ0FDWUcsV0FEWjs7QUFFZixRQUFHLENBQUNBLFdBQUosRUFBaUI7QUFDZixhQUNFO0FBQUssaUJBQVMsRUFBQyxnREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxnREFBRDtBQUFRLGlCQUFTLEVBQUMsU0FBbEI7QUFBNEIsYUFBSyxFQUFDLFNBQWxDO0FBQTRDLFlBQUksRUFBQyxNQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsQ0FERjtBQUtDOztBQUNELFdBQ0UsTUFBQyxzREFBRDtBQUFXLFdBQUssTUFBaEI7QUFBaUIsZUFBUyxFQUFDLGlEQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxvRUFBRDtBQUFXLGtCQUFZLEVBQUVELFlBQXpCO0FBQXVDLGFBQU8sRUFBRUQsT0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREY7QUFLRixHQWZOLENBREYsQ0FERixDQURGLENBREo7QUE2QkM7O0tBOUJRRixPO0FBK0JNQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccGhsaXBvc29waHkuanMuYTA0MmYyYjY1MWE5ZGEwNTkyNDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFdlYjMgZnJvbSAnd2ViMydcclxuaW1wb3J0IHsgT3BlblNlYVNESywgTmV0d29yayB9IGZyb20gJ29wZW5zZWEtanMnXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUZXN0T3NTZGsgZnJvbSAnLi4vY29tcG9uZW50cy9hcGkvVGVzdE9zU2RrLmpzJztcclxuXHJcbmltcG9ydCB7IFBhZ2UsIENlbnRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dC5qcyc7XHJcbmltcG9ydCB7IERyaXp6bGVDb250ZXh0IH0gZnJvbSBcIkBkcml6emxlL3JlYWN0LXBsdWdpblwiO1xyXG5pbXBvcnQgeyAgTG9hZGVyIH0gZnJvbSAncmltYmxlLXVpJztcclxuaW1wb3J0IE5ld1Rlc3QgZnJvbSAnLi4vY29tcG9uZW50cy9jYXJkcy9OZXdUZXN0JztcclxuaW1wb3J0IHsgQ29udGFpbmVyICB9IGZyb20gXCJzaGFyZHMtcmVhY3RcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBTZGtQYWdlICgpIHtcclxucmV0dXJuICggICAgXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8UGFnZT5cclxuICAgICAgICA8Q2VudGVyPiAgICAgICBcclxuICAgICAgICAgIDxEcml6emxlQ29udGV4dC5Db25zdW1lcj5cclxuICAgICAgICAgICAge2RyaXp6bGVDb250ZXh0ID0+IHtcclxuICAgICAgICAgICAgIGNvbnN0IHtkcml6emxlLCBkcml6emxlU3RhdGUsIGluaXRpYWxpemVkIH0gPSBkcml6emxlQ29udGV4dDtcclxuICAgICAgICAgICAgICAgIGlmKCFpbml0aWFsaXplZCkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgbXQtM1wiPiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPExvYWRlciBjbGFzc05hbWU9XCJteC1hdXRvXCIgY29sb3I9XCIjMDA3YmZmXCIgc2l6ZT1cIjQwcHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG1haW4tY29udGFpbmVyLXBwXCI+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRlc3RPc1NkayBkcml6emxlU3RhdGU9e2RyaXp6bGVTdGF0ZX0gZHJpenpsZT17ZHJpenpsZX0gIC8+IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgIDwvRHJpenpsZUNvbnRleHQuQ29uc3VtZXI+XHJcbiAgICAgICAgPC9DZW50ZXI+XHJcbiAgICAgIDwvUGFnZT4gICAgXHJcbiAgICA8L2Rpdj5cclxuXHJcbik7XHJcblxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTZGtQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=