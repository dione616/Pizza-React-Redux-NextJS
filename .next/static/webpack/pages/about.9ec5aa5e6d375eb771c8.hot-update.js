webpackHotUpdate_N_E("pages/about",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var About = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(About, _Component);

  var _super = _createSuper(About);

  function About() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, About);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(About, [{
    key: "render",
    value: function render() {
      var siteData = this.props.siteData;
      return __jsx("div", null, __jsx("div", {
        className: "title_page"
      }), __jsx("div", {
        className: "content_wrapper"
      }, __jsx("div", {
        className: "inner"
      }, __jsx("h1", null, "My Pizzeria"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa neque repellendus possimus voluptatibus voluptate facilis reprehenderit fuga est natus, itaque optio eaque necessitatibus dolor aut omnis veritatis id nam eius?")), __jsx("div", {
        className: "middle"
      }, __jsx("div", {
        className: "inner_middle"
      }, __jsx("div", {
        className: "item two_c"
      }, __jsx("div", {
        className: "wrapp"
      }, __jsx("div", {
        className: "top",
        style: {
          background: "url(\"/static/images/chef.jpg\")"
        }
      }), __jsx("div", {
        className: "bottom"
      }, __jsx("h2", null, "Our Chefs"), __jsx("h3", null, "Pizzeria"), __jsx("br", null), __jsx("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rem harum quae exercitationem eum, iusto officiis veniam, hic adipisci sint provident magni nemo molestias? Dignissimos cum ad voluptate vero culpa.")))), __jsx("div", {
        className: "item two_c"
      }, __jsx("div", {
        className: "wrapp"
      }, __jsx("div", {
        className: "top",
        style: {
          background: "url(\"/static/images/chef.jpg\")"
        }
      }), __jsx("div", {
        className: "bottom"
      }, __jsx("h2", null, "Our Store"), __jsx("div", null, siteData.name), __jsx("br", null), __jsx("div", null, "Phone: ", siteData.phone), __jsx("div", null, "Email: ", siteData.email), __jsx("div", null, "Address: ", siteData.address))))))));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (About);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQuanMiXSwibmFtZXMiOlsiQWJvdXQiLCJzaXRlRGF0YSIsInByb3BzIiwiYmFja2dyb3VuZCIsIm5hbWUiLCJwaG9uZSIsImVtYWlsIiwiYWRkcmVzcyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFTUEsSzs7Ozs7Ozs7Ozs7Ozs2QkFDSztBQUFBLFVBQ0NDLFFBREQsR0FDYyxLQUFLQyxLQURuQixDQUNDRCxRQUREO0FBRVAsYUFDRSxtQkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixRQURGLEVBRUU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFLGdDQURGLEVBRUUsbVBBRkYsQ0FERixFQVNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0U7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBcUIsYUFBSyxFQUFFO0FBQUVFLG9CQUFVO0FBQVo7QUFBNUIsUUFERixFQUVFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0UsOEJBREYsRUFFRSw2QkFGRixFQUdFLGlCQUhGLEVBSUUsc09BSkYsQ0FGRixDQURGLENBREYsRUFnQkU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQXFCLGFBQUssRUFBRTtBQUFFQSxvQkFBVTtBQUFaO0FBQTVCLFFBREYsRUFFRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFLDhCQURGLEVBRUUsbUJBQU1GLFFBQVEsQ0FBQ0csSUFBZixDQUZGLEVBR0UsaUJBSEYsRUFJRSw4QkFBYUgsUUFBUSxDQUFDSSxLQUF0QixDQUpGLEVBS0UsOEJBQWFKLFFBQVEsQ0FBQ0ssS0FBdEIsQ0FMRixFQU1FLGdDQUFlTCxRQUFRLENBQUNNLE9BQXhCLENBTkYsQ0FGRixDQURGLENBaEJGLENBREYsQ0FURixDQUZGLENBREY7QUErQ0Q7Ozs7RUFsRGlCQywrQzs7QUFvRExSLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0LjllYzVhYTVlNmQzNzVlYjc3MWM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmNsYXNzIEFib3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHNpdGVEYXRhIH0gPSB0aGlzLnByb3BzXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVfcGFnZVwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF93cmFwcGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgICAgIDxoMT5NeSBQaXp6ZXJpYTwvaDE+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBJcHNhIG5lcXVlIHJlcGVsbGVuZHVzIHBvc3NpbXVzIHZvbHVwdGF0aWJ1c1xyXG4gICAgICAgICAgICAgIHZvbHVwdGF0ZSBmYWNpbGlzIHJlcHJlaGVuZGVyaXQgZnVnYSBlc3QgbmF0dXMsIGl0YXF1ZSBvcHRpbyBlYXF1ZSBuZWNlc3NpdGF0aWJ1cyBkb2xvciBhdXQgb21uaXNcclxuICAgICAgICAgICAgICB2ZXJpdGF0aXMgaWQgbmFtIGVpdXM/XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaWRkbGVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lcl9taWRkbGVcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0gdHdvX2NcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BcIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBgdXJsKFwiL3N0YXRpYy9pbWFnZXMvY2hlZi5qcGdcIilgIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5PdXIgQ2hlZnM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5QaXp6ZXJpYTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBPZGl0IHJlbSBoYXJ1bSBxdWFlIGV4ZXJjaXRhdGlvbmVtIGV1bSxcclxuICAgICAgICAgICAgICAgICAgICAgIGl1c3RvIG9mZmljaWlzIHZlbmlhbSwgaGljIGFkaXBpc2NpIHNpbnQgcHJvdmlkZW50IG1hZ25pIG5lbW8gbW9sZXN0aWFzPyBEaWduaXNzaW1vcyBjdW0gYWRcclxuICAgICAgICAgICAgICAgICAgICAgIHZvbHVwdGF0ZSB2ZXJvIGN1bHBhLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0gdHdvX2NcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BcIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBgdXJsKFwiL3N0YXRpYy9pbWFnZXMvY2hlZi5qcGdcIilgIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5PdXIgU3RvcmU8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e3NpdGVEYXRhLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5QaG9uZToge3NpdGVEYXRhLnBob25lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+RW1haWw6IHtzaXRlRGF0YS5lbWFpbH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PkFkZHJlc3M6IHtzaXRlRGF0YS5hZGRyZXNzfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==