webpackHotUpdate_N_E("pages/_app",{

/***/ "./lib/appAuth.js":
/*!************************!*\
  !*** ./lib/appAuth.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! auth0-js */ "./node_modules/auth0-js/dist/auth0.min.esm.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jsonwebtoken */ "./node_modules/jsonwebtoken/index.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/config */ "./node_modules/next/dist/next-server/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_8__);










var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_8___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var Auth0 = /*#__PURE__*/function () {
  function Auth0() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Auth0);

    this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_4__["default"].WebAuth({
      domain: "dione616.eu.auth0.com",
      clientID: "".concat(publicRuntimeConfig.client_id),
      redirectUri: "".concat(publicRuntimeConfig.base_url, "/login-success"),
      responseType: "token id_token",
      scope: "openid"
    }); //if call from another context, need to bind or arrow func

    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Auth0, [{
    key: "handleAuthentication",
    value: function handleAuthentication() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.auth0.parseHash(function (err, authResult) {
          if (authResult && authResult.accessToken && authResult.idToken) {
            _this.setSession(authResult);

            resolve();
          } else if (err) {
            reject();
          }
        });
      });
    }
  }, {
    key: "setSession",
    value: function setSession(authResult) {
      var expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
      js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set("x-jwt-exp", expiresAt);
      js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set("x-jwt", authResult.idToken);
    }
  }, {
    key: "login",
    value: function login() {
      this.auth0.authorize();
    }
  }, {
    key: "getJWKS",
    value: function () {
      var _getJWKS = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, jwks;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("https://dione616.eu.auth0.com/.well-known/jwks.json");

              case 2:
                res = _context.sent;
                jwks = res.data;
                console.log(jwks);
                return _context.abrupt("return", jwks);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getJWKS() {
        return _getJWKS.apply(this, arguments);
      }

      return getJWKS;
    }()
  }, {
    key: "certToPEM",
    value: function certToPEM(cert) {
      cert = cert.match(/.{1,64}/g).join("\n");
      cert = "-----BEGIN CERTIFICATE-----\n".concat(cert, "\n------END CERTIFICATE\n");
      return cert;
    }
  }, {
    key: "verifyToken",
    value: function () {
      var _verifyToken = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(token) {
        var jwks, certificate, decodedVerify, expiresAt;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!token) {
                  _context2.next = 14;
                  break;
                }

                _context2.next = 3;
                return this.getJWKS();

              case 3:
                jwks = _context2.sent;
                certificate = this.certToPEM(jwks.keys[0].x5c[0]); //first position data

                _context2.prev = 5;
                decodedVerify = jsonwebtoken__WEBPACK_IMPORTED_MODULE_7___default.a.verify(token, certificate);
                expiresAt = decodedVerify.exp * 1000;
                return _context2.abrupt("return", decodedVerify && new Date().getTime() < expiresAt ? true : false);

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](5);
                return _context2.abrupt("return", false);

              case 14:
                return _context2.abrupt("return", false);

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[5, 11]]);
      }));

      function verifyToken(_x) {
        return _verifyToken.apply(this, arguments);
      }

      return verifyToken;
    }()
  }, {
    key: "isAuthenticated",
    value: function () {
      var _isAuthenticated = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(req) {
        var token, verifyToken;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (false) {}

                //if on the client
                token = js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get("x-jwt"); //get cookie with name

                _context3.next = 4;
                return this.verifyToken(token);

              case 4:
                verifyToken = _context3.sent;
                return _context3.abrupt("return", verifyToken);

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function isAuthenticated(_x2) {
        return _isAuthenticated.apply(this, arguments);
      }

      return isAuthenticated;
    }()
  }]);

  return Auth0;
}();

var auth0Serv = new Auth0();
/* harmony default export */ __webpack_exports__["default"] = (auth0Serv);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2FwcEF1dGguanMiXSwibmFtZXMiOlsiZ2V0Q29uZmlnIiwicHVibGljUnVudGltZUNvbmZpZyIsIkF1dGgwIiwiYXV0aDAiLCJXZWJBdXRoIiwiZG9tYWluIiwiY2xpZW50SUQiLCJjbGllbnRfaWQiLCJyZWRpcmVjdFVyaSIsImJhc2VfdXJsIiwicmVzcG9uc2VUeXBlIiwic2NvcGUiLCJoYW5kbGVBdXRoZW50aWNhdGlvbiIsImJpbmQiLCJpc0F1dGhlbnRpY2F0ZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBhcnNlSGFzaCIsImVyciIsImF1dGhSZXN1bHQiLCJhY2Nlc3NUb2tlbiIsImlkVG9rZW4iLCJzZXRTZXNzaW9uIiwiZXhwaXJlc0F0IiwiSlNPTiIsInN0cmluZ2lmeSIsImV4cGlyZXNJbiIsIkRhdGUiLCJnZXRUaW1lIiwiQ29va2llcyIsInNldCIsImF1dGhvcml6ZSIsImF4aW9zIiwiZ2V0IiwicmVzIiwiandrcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2VydCIsIm1hdGNoIiwiam9pbiIsInRva2VuIiwiZ2V0SldLUyIsImNlcnRpZmljYXRlIiwiY2VydFRvUEVNIiwia2V5cyIsIng1YyIsImRlY29kZWRWZXJpZnkiLCJqd3QiLCJ2ZXJpZnkiLCJleHAiLCJyZXEiLCJ2ZXJpZnlUb2tlbiIsImF1dGgwU2VydiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztpQkFDZ0NBLGtEQUFTLEU7SUFBakNDLG1CLGNBQUFBLG1COztJQUVGQyxLO0FBQ0osbUJBQWM7QUFBQTs7QUFDWixTQUFLQyxLQUFMLEdBQWEsSUFBSUEsZ0RBQUssQ0FBQ0MsT0FBVixDQUFrQjtBQUM3QkMsWUFBTSxFQUFFLHVCQURxQjtBQUU3QkMsY0FBUSxZQUFLTCxtQkFBbUIsQ0FBQ00sU0FBekIsQ0FGcUI7QUFHN0JDLGlCQUFXLFlBQUtQLG1CQUFtQixDQUFDUSxRQUF6QixtQkFIa0I7QUFJN0JDLGtCQUFZLEVBQUUsZ0JBSmU7QUFLN0JDLFdBQUssRUFBRTtBQUxzQixLQUFsQixDQUFiLENBRFksQ0FRWjs7QUFDQSxTQUFLQyxvQkFBTCxHQUE0QixLQUFLQSxvQkFBTCxDQUEwQkMsSUFBMUIsQ0FBK0IsSUFBL0IsQ0FBNUI7QUFDQSxTQUFLQyxlQUFMLEdBQXVCLEtBQUtBLGVBQUwsQ0FBcUJELElBQXJCLENBQTBCLElBQTFCLENBQXZCO0FBQ0Q7Ozs7MkNBRXNCO0FBQUE7O0FBQ3JCLGFBQU8sSUFBSUUsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0QyxhQUFJLENBQUNkLEtBQUwsQ0FBV2UsU0FBWCxDQUFxQixVQUFDQyxHQUFELEVBQU1DLFVBQU4sRUFBcUI7QUFDeEMsY0FBSUEsVUFBVSxJQUFJQSxVQUFVLENBQUNDLFdBQXpCLElBQXdDRCxVQUFVLENBQUNFLE9BQXZELEVBQWdFO0FBQzlELGlCQUFJLENBQUNDLFVBQUwsQ0FBZ0JILFVBQWhCOztBQUNBSixtQkFBTztBQUNSLFdBSEQsTUFHTyxJQUFJRyxHQUFKLEVBQVM7QUFDZEYsa0JBQU07QUFDUDtBQUNGLFNBUEQ7QUFRRCxPQVRNLENBQVA7QUFVRDs7OytCQUVVRyxVLEVBQVk7QUFDckIsVUFBSUksU0FBUyxHQUFHQyxJQUFJLENBQUNDLFNBQUwsQ0FBZU4sVUFBVSxDQUFDTyxTQUFYLEdBQXVCLElBQXZCLEdBQThCLElBQUlDLElBQUosR0FBV0MsT0FBWCxFQUE3QyxDQUFoQjtBQUNBQyxzREFBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QlAsU0FBekI7QUFDQU0sc0RBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJYLFVBQVUsQ0FBQ0UsT0FBaEM7QUFDRDs7OzRCQUNPO0FBQ04sV0FBS25CLEtBQUwsQ0FBVzZCLFNBQVg7QUFDRDs7Ozs7Ozs7Ozs7dUJBR21CQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVUscURBQVYsQzs7O0FBQVpDLG1CO0FBRUFDLG9CLEdBQU9ELEdBQUcsQ0FBQ0UsSTtBQUNqQkMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFaO2lEQUNPQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR0NJLEksRUFBTTtBQUNkQSxVQUFJLEdBQUdBLElBQUksQ0FBQ0MsS0FBTCxDQUFXLFVBQVgsRUFBdUJDLElBQXZCLENBQTRCLElBQTVCLENBQVA7QUFDQUYsVUFBSSwwQ0FBbUNBLElBQW5DLDhCQUFKO0FBQ0EsYUFBT0EsSUFBUDtBQUNEOzs7OzROQUVpQkcsSzs7Ozs7O3FCQUNaQSxLOzs7Ozs7dUJBQ2lCLEtBQUtDLE9BQUwsRTs7O0FBQWJSLG9CO0FBQ0FTLDJCLEdBQWMsS0FBS0MsU0FBTCxDQUFlVixJQUFJLENBQUNXLElBQUwsQ0FBVSxDQUFWLEVBQWFDLEdBQWIsQ0FBaUIsQ0FBakIsQ0FBZixDLEVBQW9DOzs7QUFHaERDLDZCLEdBQWdCQyxtREFBRyxDQUFDQyxNQUFKLENBQVdSLEtBQVgsRUFBa0JFLFdBQWxCLEM7QUFDaEJyQix5QixHQUFZeUIsYUFBYSxDQUFDRyxHQUFkLEdBQW9CLEk7a0RBRS9CSCxhQUFhLElBQUksSUFBSXJCLElBQUosR0FBV0MsT0FBWCxLQUF1QkwsU0FBeEMsR0FBb0QsSUFBcEQsR0FBMkQsSzs7Ozs7a0RBRTNELEs7OztrREFJSixLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dPQUdhNkIsRzs7Ozs7Ozs7QUFFbEI7QUFDTVYscUIsR0FBUWIsZ0RBQU8sQ0FBQ0ksR0FBUixDQUFZLE9BQVosQyxFQUFxQjs7O3VCQUNULEtBQUtvQixXQUFMLENBQWlCWCxLQUFqQixDOzs7QUFBcEJXLDJCO2tEQUNDQSxXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNYixJQUFNQyxTQUFTLEdBQUcsSUFBSXJELEtBQUosRUFBbEI7QUFDZXFELHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMjFlMGE5ZmNkMTk3NzhlMjBlZWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhdXRoMCBmcm9tIFwiYXV0aDAtanNcIlxyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiXHJcblxyXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gXCJuZXh0L2NvbmZpZ1wiXHJcbmNvbnN0IHsgcHVibGljUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKClcclxuXHJcbmNsYXNzIEF1dGgwIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuYXV0aDAgPSBuZXcgYXV0aDAuV2ViQXV0aCh7XHJcbiAgICAgIGRvbWFpbjogXCJkaW9uZTYxNi5ldS5hdXRoMC5jb21cIixcclxuICAgICAgY2xpZW50SUQ6IGAke3B1YmxpY1J1bnRpbWVDb25maWcuY2xpZW50X2lkfWAsXHJcbiAgICAgIHJlZGlyZWN0VXJpOiBgJHtwdWJsaWNSdW50aW1lQ29uZmlnLmJhc2VfdXJsfS9sb2dpbi1zdWNjZXNzYCxcclxuICAgICAgcmVzcG9uc2VUeXBlOiBcInRva2VuIGlkX3Rva2VuXCIsXHJcbiAgICAgIHNjb3BlOiBcIm9wZW5pZFwiLFxyXG4gICAgfSlcclxuICAgIC8vaWYgY2FsbCBmcm9tIGFub3RoZXIgY29udGV4dCwgbmVlZCB0byBiaW5kIG9yIGFycm93IGZ1bmNcclxuICAgIHRoaXMuaGFuZGxlQXV0aGVudGljYXRpb24gPSB0aGlzLmhhbmRsZUF1dGhlbnRpY2F0aW9uLmJpbmQodGhpcylcclxuICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gdGhpcy5pc0F1dGhlbnRpY2F0ZWQuYmluZCh0aGlzKVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQXV0aGVudGljYXRpb24oKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLmF1dGgwLnBhcnNlSGFzaCgoZXJyLCBhdXRoUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgaWYgKGF1dGhSZXN1bHQgJiYgYXV0aFJlc3VsdC5hY2Nlc3NUb2tlbiAmJiBhdXRoUmVzdWx0LmlkVG9rZW4pIHtcclxuICAgICAgICAgIHRoaXMuc2V0U2Vzc2lvbihhdXRoUmVzdWx0KVxyXG4gICAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICAgICAgfSBlbHNlIGlmIChlcnIpIHtcclxuICAgICAgICAgIHJlamVjdCgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHNldFNlc3Npb24oYXV0aFJlc3VsdCkge1xyXG4gICAgbGV0IGV4cGlyZXNBdCA9IEpTT04uc3RyaW5naWZ5KGF1dGhSZXN1bHQuZXhwaXJlc0luICogMTAwMCArIG5ldyBEYXRlKCkuZ2V0VGltZSgpKVxyXG4gICAgQ29va2llcy5zZXQoXCJ4LWp3dC1leHBcIiwgZXhwaXJlc0F0KVxyXG4gICAgQ29va2llcy5zZXQoXCJ4LWp3dFwiLCBhdXRoUmVzdWx0LmlkVG9rZW4pXHJcbiAgfVxyXG4gIGxvZ2luKCkge1xyXG4gICAgdGhpcy5hdXRoMC5hdXRob3JpemUoKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0SldLUygpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vZGlvbmU2MTYuZXUuYXV0aDAuY29tLy53ZWxsLWtub3duL2p3a3MuanNvblwiKVxyXG5cclxuICAgIGNvbnN0IGp3a3MgPSByZXMuZGF0YVxyXG4gICAgY29uc29sZS5sb2coandrcylcclxuICAgIHJldHVybiBqd2tzXHJcbiAgfVxyXG5cclxuICBjZXJ0VG9QRU0oY2VydCkge1xyXG4gICAgY2VydCA9IGNlcnQubWF0Y2goLy57MSw2NH0vZykuam9pbihcIlxcblwiKVxyXG4gICAgY2VydCA9IGAtLS0tLUJFR0lOIENFUlRJRklDQVRFLS0tLS1cXG4ke2NlcnR9XFxuLS0tLS0tRU5EIENFUlRJRklDQVRFXFxuYFxyXG4gICAgcmV0dXJuIGNlcnRcclxuICB9XHJcblxyXG4gIGFzeW5jIHZlcmlmeVRva2VuKHRva2VuKSB7XHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgY29uc3QgandrcyA9IGF3YWl0IHRoaXMuZ2V0SldLUygpXHJcbiAgICAgIGNvbnN0IGNlcnRpZmljYXRlID0gdGhpcy5jZXJ0VG9QRU0oandrcy5rZXlzWzBdLng1Y1swXSkgLy9maXJzdCBwb3NpdGlvbiBkYXRhXHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRlY29kZWRWZXJpZnkgPSBqd3QudmVyaWZ5KHRva2VuLCBjZXJ0aWZpY2F0ZSlcclxuICAgICAgICBjb25zdCBleHBpcmVzQXQgPSBkZWNvZGVkVmVyaWZ5LmV4cCAqIDEwMDBcclxuXHJcbiAgICAgICAgcmV0dXJuIGRlY29kZWRWZXJpZnkgJiYgbmV3IERhdGUoKS5nZXRUaW1lKCkgPCBleHBpcmVzQXQgPyB0cnVlIDogZmFsc2VcclxuICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIGFzeW5jIGlzQXV0aGVudGljYXRlZChyZXEpIHtcclxuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgICAgLy9pZiBvbiB0aGUgY2xpZW50XHJcbiAgICAgIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXQoXCJ4LWp3dFwiKSAvL2dldCBjb29raWUgd2l0aCBuYW1lXHJcbiAgICAgIGNvbnN0IHZlcmlmeVRva2VuID0gYXdhaXQgdGhpcy52ZXJpZnlUb2tlbih0b2tlbilcclxuICAgICAgcmV0dXJuIHZlcmlmeVRva2VuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvL3NlcnZlclxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5jb25zdCBhdXRoMFNlcnYgPSBuZXcgQXV0aDAoKVxyXG5leHBvcnQgZGVmYXVsdCBhdXRoMFNlcnZcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==