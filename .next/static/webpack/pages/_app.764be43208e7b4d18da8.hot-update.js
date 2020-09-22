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
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.js");











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
    key: "logout",
    value: function logout() {
      js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove("x-jwt-exp");
      js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove("x-jwt");
      this.auth0.logout({
        clientID: "".concat(publicRuntimeConfig.client_id),
        returnTo: "publicRuntimeConfig.base_url"
      });
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
                return _context.abrupt("return", jwks);

              case 5:
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
      cert = "-----BEGIN CERTIFICATE-----\n".concat(cert, "\n-----END CERTIFICATE-----\n");
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
                certificate = this.certToPEM(jwks.keys[0].x5c[0]);
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
        var token, verifyToken, _token, _verifyToken2;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (false) {}

                //client
                token = js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get("x-jwt");
                _context3.next = 4;
                return this.verifyToken(token);

              case 4:
                verifyToken = _context3.sent;
                return _context3.abrupt("return", verifyToken);

              case 8:
                //server
                _token = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_9__["getCooksFromReq"])(req, "x-jwt");
                _context3.next = 11;
                return this.verifyToken(_token);

              case 11:
                _verifyToken2 = _context3.sent;
                return _context3.abrupt("return", _verifyToken2);

              case 13:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2FwcEF1dGguanMiXSwibmFtZXMiOlsiZ2V0Q29uZmlnIiwicHVibGljUnVudGltZUNvbmZpZyIsIkF1dGgwIiwiYXV0aDAiLCJXZWJBdXRoIiwiZG9tYWluIiwiY2xpZW50SUQiLCJjbGllbnRfaWQiLCJyZWRpcmVjdFVyaSIsImJhc2VfdXJsIiwicmVzcG9uc2VUeXBlIiwic2NvcGUiLCJoYW5kbGVBdXRoZW50aWNhdGlvbiIsImJpbmQiLCJpc0F1dGhlbnRpY2F0ZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBhcnNlSGFzaCIsImVyciIsImF1dGhSZXN1bHQiLCJhY2Nlc3NUb2tlbiIsImlkVG9rZW4iLCJzZXRTZXNzaW9uIiwiZXhwaXJlc0F0IiwiSlNPTiIsInN0cmluZ2lmeSIsImV4cGlyZXNJbiIsIkRhdGUiLCJnZXRUaW1lIiwiQ29va2llcyIsInNldCIsInJlbW92ZSIsImxvZ291dCIsInJldHVyblRvIiwiYXV0aG9yaXplIiwiYXhpb3MiLCJnZXQiLCJyZXMiLCJqd2tzIiwiZGF0YSIsImNlcnQiLCJtYXRjaCIsImpvaW4iLCJ0b2tlbiIsImdldEpXS1MiLCJjZXJ0aWZpY2F0ZSIsImNlcnRUb1BFTSIsImtleXMiLCJ4NWMiLCJkZWNvZGVkVmVyaWZ5Iiwiand0IiwidmVyaWZ5IiwiZXhwIiwicmVxIiwidmVyaWZ5VG9rZW4iLCJnZXRDb29rc0Zyb21SZXEiLCJhdXRoMFNlcnYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7aUJBRWdDQSxrREFBUyxFO0lBQWpDQyxtQixjQUFBQSxtQjs7SUFFRkMsSztBQUNKLG1CQUFjO0FBQUE7O0FBQ1osU0FBS0MsS0FBTCxHQUFhLElBQUlBLGdEQUFLLENBQUNDLE9BQVYsQ0FBa0I7QUFDN0JDLFlBQU0sRUFBRSx1QkFEcUI7QUFFN0JDLGNBQVEsWUFBS0wsbUJB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O2tEQUVDQSxXOzs7QUFFUDtBQUNNWCxzQixHQUFRWSxrRUFBZSxDQUFDRixHQUFELEVBQU0sT0FBTixDOzt1QkFDSCxLQUFLQyxXQUFMLENBQWlCWCxNQUFqQixDOzs7QUFBcEJXLDZCO2tEQUVDQSxhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJYixJQUFNRSxTQUFTLEdBQUcsSUFBSXZELEtBQUosRUFBbEI7QUFDZXVELHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNzY0YmU0MzIwOGU3YjRkMThkYTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhdXRoMCBmcm9tIFwiYXV0aDAtanNcIlxyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiXHJcblxyXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gXCJuZXh0L2NvbmZpZ1wiXHJcbmltcG9ydCB7IGdldENvb2tzRnJvbVJlcSB9IGZyb20gXCIuLi9saWIvdXRpbHNcIlxyXG5cclxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKVxyXG5cclxuY2xhc3MgQXV0aDAge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5hdXRoMCA9IG5ldyBhdXRoMC5XZWJBdXRoKHtcclxuICAgICAgZG9tYWluOiBcImRpb25lNjE2LmV1LmF1dGgwLmNvbVwiLFxyXG4gICAgICBjbGllbnRJRDogYCR7cHVibGljUnVudGltZUNvbmZpZy5jbGllbnRfaWR9YCxcclxuICAgICAgcmVkaXJlY3RVcmk6IGAke3B1YmxpY1J1bnRpbWVDb25maWcuYmFzZV91cmx9L2xvZ2luLXN1Y2Nlc3NgLFxyXG4gICAgICByZXNwb25zZVR5cGU6IFwidG9rZW4gaWRfdG9rZW5cIixcclxuICAgICAgc2NvcGU6IFwib3BlbmlkXCIsXHJcbiAgICB9KVxyXG4gICAgLy9pZiBjYWxsIGZyb20gYW5vdGhlciBjb250ZXh0LCBuZWVkIHRvIGJpbmQgb3IgYXJyb3cgZnVuY1xyXG4gICAgdGhpcy5oYW5kbGVBdXRoZW50aWNhdGlvbiA9IHRoaXMuaGFuZGxlQXV0aGVudGljYXRpb24uYmluZCh0aGlzKVxyXG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSB0aGlzLmlzQXV0aGVudGljYXRlZC5iaW5kKHRoaXMpXHJcbiAgfVxyXG5cclxuICBoYW5kbGVBdXRoZW50aWNhdGlvbigpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuYXV0aDAucGFyc2VIYXNoKChlcnIsIGF1dGhSZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAoYXV0aFJlc3VsdCAmJiBhdXRoUmVzdWx0LmFjY2Vzc1Rva2VuICYmIGF1dGhSZXN1bHQuaWRUb2tlbikge1xyXG4gICAgICAgICAgdGhpcy5zZXRTZXNzaW9uKGF1dGhSZXN1bHQpXHJcbiAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICB9IGVsc2UgaWYgKGVycikge1xyXG4gICAgICAgICAgcmVqZWN0KClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgc2V0U2Vzc2lvbihhdXRoUmVzdWx0KSB7XHJcbiAgICBsZXQgZXhwaXJlc0F0ID0gSlNPTi5zdHJpbmdpZnkoYXV0aFJlc3VsdC5leHBpcmVzSW4gKiAxMDAwICsgbmV3IERhdGUoKS5nZXRUaW1lKCkpXHJcbiAgICBDb29raWVzLnNldChcIngtand0LWV4cFwiLCBleHBpcmVzQXQpXHJcbiAgICBDb29raWVzLnNldChcIngtand0XCIsIGF1dGhSZXN1bHQuaWRUb2tlbilcclxuICB9XHJcblxyXG4gIGxvZ291dCgpIHtcclxuICAgIENvb2tpZXMucmVtb3ZlKFwieC1qd3QtZXhwXCIpXHJcbiAgICBDb29raWVzLnJlbW92ZShcIngtand0XCIpXHJcbiAgICB0aGlzLmF1dGgwLmxvZ291dCh7XHJcbiAgICAgIGNsaWVudElEOiBgJHtwdWJsaWNSdW50aW1lQ29uZmlnLmNsaWVudF9pZH1gLFxyXG4gICAgICByZXR1cm5UbzogYHB1YmxpY1J1bnRpbWVDb25maWcuYmFzZV91cmxgLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGxvZ2luKCkge1xyXG4gICAgdGhpcy5hdXRoMC5hdXRob3JpemUoKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0SldLUygpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vZGlvbmU2MTYuZXUuYXV0aDAuY29tLy53ZWxsLWtub3duL2p3a3MuanNvblwiKVxyXG4gICAgY29uc3QgandrcyA9IHJlcy5kYXRhXHJcbiAgICByZXR1cm4gandrc1xyXG4gIH1cclxuXHJcbiAgY2VydFRvUEVNKGNlcnQpIHtcclxuICAgIGNlcnQgPSBjZXJ0Lm1hdGNoKC8uezEsNjR9L2cpLmpvaW4oXCJcXG5cIilcclxuICAgIGNlcnQgPSBgLS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tXFxuJHtjZXJ0fVxcbi0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS1cXG5gXHJcbiAgICByZXR1cm4gY2VydFxyXG4gIH1cclxuXHJcbiAgYXN5bmMgdmVyaWZ5VG9rZW4odG9rZW4pIHtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICBjb25zdCBqd2tzID0gYXdhaXQgdGhpcy5nZXRKV0tTKClcclxuICAgICAgY29uc3QgY2VydGlmaWNhdGUgPSB0aGlzLmNlcnRUb1BFTShqd2tzLmtleXNbMF0ueDVjWzBdKVxyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkZWNvZGVkVmVyaWZ5ID0gand0LnZlcmlmeSh0b2tlbiwgY2VydGlmaWNhdGUpXHJcbiAgICAgICAgY29uc3QgZXhwaXJlc0F0ID0gZGVjb2RlZFZlcmlmeS5leHAgKiAxMDAwXHJcblxyXG4gICAgICAgIHJldHVybiBkZWNvZGVkVmVyaWZ5ICYmIG5ldyBEYXRlKCkuZ2V0VGltZSgpIDwgZXhwaXJlc0F0ID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIGFzeW5jIGlzQXV0aGVudGljYXRlZChyZXEpIHtcclxuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgICAgLy9jbGllbnRcclxuICAgICAgY29uc3QgdG9rZW4gPSBDb29raWVzLmdldChcIngtand0XCIpXHJcbiAgICAgIGNvbnN0IHZlcmlmeVRva2VuID0gYXdhaXQgdGhpcy52ZXJpZnlUb2tlbih0b2tlbilcclxuXHJcbiAgICAgIHJldHVybiB2ZXJpZnlUb2tlblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy9zZXJ2ZXJcclxuICAgICAgY29uc3QgdG9rZW4gPSBnZXRDb29rc0Zyb21SZXEocmVxLCBcIngtand0XCIpXHJcbiAgICAgIGNvbnN0IHZlcmlmeVRva2VuID0gYXdhaXQgdGhpcy52ZXJpZnlUb2tlbih0b2tlbilcclxuXHJcbiAgICAgIHJldHVybiB2ZXJpZnlUb2tlblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5jb25zdCBhdXRoMFNlcnYgPSBuZXcgQXV0aDAoKVxyXG5leHBvcnQgZGVmYXVsdCBhdXRoMFNlcnZcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==