webpackHotUpdate_N_E("pages/_app",{

/***/ "./lib/with-redux-store.js":
/*!*********************************!*\
  !*** ./lib/with-redux-store.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store */ "./store/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lib_appAuth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/appAuth */ "./lib/appAuth.js");









var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var isServer = false;
var __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__";

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return Object(_store__WEBPACK_IMPORTED_MODULE_10__["initializeStore"])(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = Object(_store__WEBPACK_IMPORTED_MODULE_10__["initializeStore"])(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

/* harmony default export */ __webpack_exports__["default"] = (function (App) {
  return /*#__PURE__*/function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(AppWithRedux, _React$Component);

    var _super = _createSuper(AppWithRedux);

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(AppWithRedux, null, [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(appContext) {
          var reduxStore, appProps, siteData, userAuth, response;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // Get or Create the store with `undefined` as initialState
                  // This allows you to set a custom default initialState
                  reduxStore = getOrCreateStore(); // Provide the store to getInitialProps of pages

                  appContext.ctx.reduxStore = reduxStore;
                  appProps = {};

                  if (!(typeof App.getInitialProps === "function")) {
                    _context.next = 7;
                    break;
                  }

                  _context.next = 6;
                  return App.getInitialProps(appContext);

                case 6:
                  appProps = _context.sent;

                case 7:
                  _context.prev = 7;
                  _context.next = 10;
                  return axios__WEBPACK_IMPORTED_MODULE_11___default.a.get("http://localhost:3000/api/v1/site");

                case 10:
                  response = _context.sent;
                  siteData = response.data[0];
                  _context.next = 17;
                  break;

                case 14:
                  _context.prev = 14;
                  _context.t0 = _context["catch"](7);
                  console.error(_context.t0);

                case 17:
                  _context.next = 19;
                  return _lib_appAuth__WEBPACK_IMPORTED_MODULE_12__["default"].isAuthenticated(appContext.ctx.req);

                case 19:
                  userAuth = _context.sent;
                  console.log(userAuth);
                  return _context.abrupt("return", _objectSpread(_objectSpread({}, appProps), {}, {
                    siteData: siteData,
                    userAuth: userAuth,
                    initialReduxState: reduxStore.getState()
                  }));

                case 22:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[7, 14]]);
        }));

        function getInitialProps(_x) {
          return _getInitialProps.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    function AppWithRedux(props) {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, AppWithRedux);

      _this = _super.call(this, props);
      _this.reduxStore = getOrCreateStore(props.initialReduxState);
      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(AppWithRedux, [{
      key: "render",
      value: function render() {
        return __jsx(App, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
          reduxStore: this.reduxStore
        }));
      }
    }]);

    return AppWithRedux;
  }(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3dpdGgtcmVkdXgtc3RvcmUuanMiXSwibmFtZXMiOlsiaXNTZXJ2ZXIiLCJfX05FWFRfUkVEVVhfU1RPUkVfXyIsImdldE9yQ3JlYXRlU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJpbml0aWFsaXplU3RvcmUiLCJ3aW5kb3ciLCJBcHAiLCJhcHBDb250ZXh0IiwicmVkdXhTdG9yZSIsImN0eCIsImFwcFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwiYXhpb3MiLCJnZXQiLCJyZXNwb25zZSIsInNpdGVEYXRhIiwiZGF0YSIsImNvbnNvbGUiLCJlcnJvciIsImF1dGgwU2VydiIsImlzQXV0aGVudGljYXRlZCIsInJlcSIsInVzZXJBdXRoIiwibG9nIiwiaW5pdGlhbFJlZHV4U3RhdGUiLCJnZXRTdGF0ZSIsInByb3BzIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLFFBQVEsUUFBZDtBQUNBLElBQU1DLG9CQUFvQixHQUFHLHNCQUE3Qjs7QUFFQSxTQUFTQyxnQkFBVCxDQUEwQkMsWUFBMUIsRUFBd0M7QUFDdEM7QUFDQSxNQUFJSCxRQUFKLEVBQWM7QUFDWixXQUFPSSwrREFBZSxDQUFDRCxZQUFELENBQXRCO0FBQ0QsR0FKcUMsQ0FNdEM7OztBQUNBLE1BQUksQ0FBQ0UsTUFBTSxDQUFDSixvQkFBRCxDQUFYLEVBQW1DO0FBQ2pDSSxVQUFNLENBQUNKLG9CQUFELENBQU4sR0FBK0JHLCtEQUFlLENBQUNELFlBQUQsQ0FBOUM7QUFDRDs7QUFDRCxTQUFPRSxNQUFNLENBQUNKLG9CQUFELENBQWI7QUFDRDs7QUFFYyx5RUFBQ0ssR0FBRCxFQUFTO0FBQ3RCO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUEsaU9BQytCQyxVQUQvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFSTtBQUNBO0FBQ01DLDRCQUpWLEdBSXVCTixnQkFBZ0IsRUFKdkMsRUFNSTs7QUFDQUssNEJBQVUsQ0FBQ0UsR0FBWCxDQUFlRCxVQUFmLEdBQTRCQSxVQUE1QjtBQUVJRSwwQkFUUixHQVNtQixFQVRuQjs7QUFBQSx3QkFVUSxPQUFPSixHQUFHLENBQUNLLGVBQVgsS0FBK0IsVUFWdkM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSx5QkFXdUJMLEdBQUcsQ0FBQ0ssZUFBSixDQUFvQkosVUFBcEIsQ0FYdkI7O0FBQUE7QUFXTUcsMEJBWE47O0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBa0I2QkUsNkNBQUssQ0FBQ0MsR0FBTixxQ0FsQjdCOztBQUFBO0FBa0JZQywwQkFsQlo7QUFtQk1DLDBCQUFRLEdBQUdELFFBQVEsQ0FBQ0UsSUFBVCxDQUFjLENBQWQsQ0FBWDtBQW5CTjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXFCTUMseUJBQU8sQ0FBQ0MsS0FBUjs7QUFyQk47QUFBQTtBQUFBLHlCQXdCcUJDLHFEQUFTLENBQUNDLGVBQVYsQ0FBMEJiLFVBQVUsQ0FBQ0UsR0FBWCxDQUFlWSxHQUF6QyxDQXhCckI7O0FBQUE7QUF3QklDLDBCQXhCSjtBQXlCSUwseUJBQU8sQ0FBQ00sR0FBUixDQUFZRCxRQUFaO0FBekJKLG1GQTRCU1osUUE1QlQ7QUE2Qk1LLDRCQUFRLEVBQVJBLFFBN0JOO0FBOEJNTyw0QkFBUSxFQUFSQSxRQTlCTjtBQStCTUUscUNBQWlCLEVBQUVoQixVQUFVLENBQUNpQixRQUFYO0FBL0J6Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQW1DRSwwQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixnQ0FBTUEsS0FBTjtBQUNBLFlBQUtsQixVQUFMLEdBQWtCTixnQkFBZ0IsQ0FBQ3dCLEtBQUssQ0FBQ0YsaUJBQVAsQ0FBbEM7QUFGaUI7QUFHbEI7O0FBdENIO0FBQUE7QUFBQSwrQkF3Q1c7QUFDUCxlQUFPLE1BQUMsR0FBRCx5RkFBUyxLQUFLRSxLQUFkO0FBQXFCLG9CQUFVLEVBQUUsS0FBS2xCO0FBQXRDLFdBQVA7QUFDRDtBQTFDSDs7QUFBQTtBQUFBLElBQWtDbUIsNENBQUssQ0FBQ0MsU0FBeEM7QUE0Q0QsQ0E3Q0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jZWMzY2U5OGNjZTM5NDEzMDVkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGluaXRpYWxpemVTdG9yZSB9IGZyb20gXCIuLi9zdG9yZVwiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5cclxuaW1wb3J0IGF1dGgwU2VydiBmcm9tIFwiLi4vbGliL2FwcEF1dGhcIlxyXG5cclxuY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiXHJcbmNvbnN0IF9fTkVYVF9SRURVWF9TVE9SRV9fID0gXCJfX05FWFRfUkVEVVhfU1RPUkVfX1wiXHJcblxyXG5mdW5jdGlvbiBnZXRPckNyZWF0ZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xyXG4gIC8vIEFsd2F5cyBtYWtlIGEgbmV3IHN0b3JlIGlmIHNlcnZlciwgb3RoZXJ3aXNlIHN0YXRlIGlzIHNoYXJlZCBiZXR3ZWVuIHJlcXVlc3RzXHJcbiAgaWYgKGlzU2VydmVyKSB7XHJcbiAgICByZXR1cm4gaW5pdGlhbGl6ZVN0b3JlKGluaXRpYWxTdGF0ZSlcclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSBzdG9yZSBpZiB1bmF2YWlsYWJsZSBvbiB0aGUgY2xpZW50IGFuZCBzZXQgaXQgb24gdGhlIHdpbmRvdyBvYmplY3RcclxuICBpZiAoIXdpbmRvd1tfX05FWFRfUkVEVVhfU1RPUkVfX10pIHtcclxuICAgIHdpbmRvd1tfX05FWFRfUkVEVVhfU1RPUkVfX10gPSBpbml0aWFsaXplU3RvcmUoaW5pdGlhbFN0YXRlKVxyXG4gIH1cclxuICByZXR1cm4gd2luZG93W19fTkVYVF9SRURVWF9TVE9SRV9fXVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoQXBwKSA9PiB7XHJcbiAgcmV0dXJuIGNsYXNzIEFwcFdpdGhSZWR1eCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpIHtcclxuICAgICAgLy8gR2V0IG9yIENyZWF0ZSB0aGUgc3RvcmUgd2l0aCBgdW5kZWZpbmVkYCBhcyBpbml0aWFsU3RhdGVcclxuICAgICAgLy8gVGhpcyBhbGxvd3MgeW91IHRvIHNldCBhIGN1c3RvbSBkZWZhdWx0IGluaXRpYWxTdGF0ZVxyXG4gICAgICBjb25zdCByZWR1eFN0b3JlID0gZ2V0T3JDcmVhdGVTdG9yZSgpXHJcblxyXG4gICAgICAvLyBQcm92aWRlIHRoZSBzdG9yZSB0byBnZXRJbml0aWFsUHJvcHMgb2YgcGFnZXNcclxuICAgICAgYXBwQ29udGV4dC5jdHgucmVkdXhTdG9yZSA9IHJlZHV4U3RvcmVcclxuXHJcbiAgICAgIGxldCBhcHBQcm9wcyA9IHt9XHJcbiAgICAgIGlmICh0eXBlb2YgQXBwLmdldEluaXRpYWxQcm9wcyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBzaXRlRGF0YVxyXG4gICAgICBsZXQgdXNlckF1dGhcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvc2l0ZWApXHJcbiAgICAgICAgc2l0ZURhdGEgPSByZXNwb25zZS5kYXRhWzBdXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgICAgfVxyXG5cclxuICAgICAgdXNlckF1dGggPSBhd2FpdCBhdXRoMFNlcnYuaXNBdXRoZW50aWNhdGVkKGFwcENvbnRleHQuY3R4LnJlcSlcclxuICAgICAgY29uc29sZS5sb2codXNlckF1dGgpXHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmFwcFByb3BzLFxyXG4gICAgICAgIHNpdGVEYXRhLFxyXG4gICAgICAgIHVzZXJBdXRoLFxyXG4gICAgICAgIGluaXRpYWxSZWR1eFN0YXRlOiByZWR1eFN0b3JlLmdldFN0YXRlKCksXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICBzdXBlcihwcm9wcylcclxuICAgICAgdGhpcy5yZWR1eFN0b3JlID0gZ2V0T3JDcmVhdGVTdG9yZShwcm9wcy5pbml0aWFsUmVkdXhTdGF0ZSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIHJldHVybiA8QXBwIHsuLi50aGlzLnByb3BzfSByZWR1eFN0b3JlPXt0aGlzLnJlZHV4U3RvcmV9IC8+XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=