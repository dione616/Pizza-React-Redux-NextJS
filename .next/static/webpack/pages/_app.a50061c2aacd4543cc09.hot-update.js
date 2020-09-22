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
                  _context2.next = 15;
                  break;
                }

                _context2.next = 3;
                return this.getJWKS();

              case 3:
                jwks = _context2.sent;
                certificate = this.certToPEM(jwks.keys[0].x5c[0]); //first position data

                _context2.prev = 5;
                decodedVerify = jsonwebtoken__WEBPACK_IMPORTED_MODULE_7___default.a.verify(token, certificate); //verify if token is correct

                expiresAt = decodedVerify.exp * 1000;
                console.log(decodedVerify);
                return _context2.abrupt("return", decodedVerify && new Date().getTime() < expiresAt ? true : false);

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](5);
                return _context2.abrupt("return", false);

              case 15:
                return _context2.abrupt("return", false);

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[5, 12]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2FwcEF1dGguanMiXSwibmFtZXMiOlsiZ2V0Q29uZmlnIiwicHVibGljUnVudGltZUNvbmZpZyIsIkF1dGgwIiwiYXV0aDAiLCJXZWJBdXRoIiwiZG9tYWluIiwiY2xpZW50SUQiLCJjbGllbnRfaWQiLCJyZWRpcmVjdFVyaSIsImJhc2VfdXJsIiwicmVzcG9uc2VUeXBlIiwic2NvcGUiLCJoYW5kbGVBdXRoZW50aWNhdGlvbiIsImJpbmQiLCJpc0F1dGhlbnRpY2F0ZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBhcnNlSGFzaCIsImVyciIsImF1dGhSZXN1bHQiLCJhY2Nlc3NUb2tlbiIsImlkVG9rZW4iLCJzZXRTZXNzaW9uIiwiZXhwaXJlc0F0IiwiSlNPTiIsInN0cmluZ2lmeSIsImV4cGlyZXNJbiIsIkRhdGUiLCJnZXRUaW1lIiwiQ29va2llcyIsInNldCIsImF1dGhvcml6ZSIsImF4aW9zIiwiZ2V0IiwicmVzIiwiandrcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2VydCIsIm1hdGNoIiwiam9pbiIsInRva2VuIiwiZ2V0SldLUyIsImNlcnRpZmljYXRlIiwiY2VydFRvUEVNIiwia2V5cyIsIng1YyIsImRlY29kZWRWZXJpZnkiLCJqd3QiLCJ2ZXJpZnkiLCJleHAiLCJyZXEiLCJ2ZXJpZnlUb2tlbiIsImF1dGgwU2VydiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztpQkFDZ0NBLGtEQUFTLEU7SUFBakNDLG1CLGNBQUFBLG1COztJQUVGQyxLO0FBQ0osbUJBQWM7QUFBQTs7QUFDWixTQUFLQyxLQUFMLEdBQWEsSUFBSUEsZ0RBQUssQ0FBQ0MsT0FBVixDQUFrQjtBQUM3QkMsWUFBTSxFQUFFLHVCQURxQjtBQUU3QkMsY0FBUSxZQUFLTCxtQkFBbUIsQ0FBQ00sU0FBekIsQ0FGcUI7QUFHN0JDLGlCQUFXLFlB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NTQzY2MwOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF1dGgwIGZyb20gXCJhdXRoMC1qc1wiXHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCJcclxuXHJcbmltcG9ydCBnZXRDb25maWcgZnJvbSBcIm5leHQvY29uZmlnXCJcclxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKVxyXG5cclxuY2xhc3MgQXV0aDAge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5hdXRoMCA9IG5ldyBhdXRoMC5XZWJBdXRoKHtcclxuICAgICAgZG9tYWluOiBcImRpb25lNjE2LmV1LmF1dGgwLmNvbVwiLFxyXG4gICAgICBjbGllbnRJRDogYCR7cHVibGljUnVudGltZUNvbmZpZy5jbGllbnRfaWR9YCxcclxuICAgICAgcmVkaXJlY3RVcmk6IGAke3B1YmxpY1J1bnRpbWVDb25maWcuYmFzZV91cmx9L2xvZ2luLXN1Y2Nlc3NgLFxyXG4gICAgICByZXNwb25zZVR5cGU6IFwidG9rZW4gaWRfdG9rZW5cIixcclxuICAgICAgc2NvcGU6IFwib3BlbmlkXCIsXHJcbiAgICB9KVxyXG4gICAgLy9pZiBjYWxsIGZyb20gYW5vdGhlciBjb250ZXh0LCBuZWVkIHRvIGJpbmQgb3IgYXJyb3cgZnVuY1xyXG4gICAgdGhpcy5oYW5kbGVBdXRoZW50aWNhdGlvbiA9IHRoaXMuaGFuZGxlQXV0aGVudGljYXRpb24uYmluZCh0aGlzKVxyXG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSB0aGlzLmlzQXV0aGVudGljYXRlZC5iaW5kKHRoaXMpXHJcbiAgfVxyXG5cclxuICBoYW5kbGVBdXRoZW50aWNhdGlvbigpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuYXV0aDAucGFyc2VIYXNoKChlcnIsIGF1dGhSZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAoYXV0aFJlc3VsdCAmJiBhdXRoUmVzdWx0LmFjY2Vzc1Rva2VuICYmIGF1dGhSZXN1bHQuaWRUb2tlbikge1xyXG4gICAgICAgICAgdGhpcy5zZXRTZXNzaW9uKGF1dGhSZXN1bHQpXHJcbiAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICB9IGVsc2UgaWYgKGVycikge1xyXG4gICAgICAgICAgcmVqZWN0KClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgc2V0U2Vzc2lvbihhdXRoUmVzdWx0KSB7XHJcbiAgICBsZXQgZXhwaXJlc0F0ID0gSlNPTi5zdHJpbmdpZnkoYXV0aFJlc3VsdC5leHBpcmVzSW4gKiAxMDAwICsgbmV3IERhdGUoKS5nZXRUaW1lKCkpXHJcbiAgICBDb29raWVzLnNldChcIngtand0LWV4cFwiLCBleHBpcmVzQXQpXHJcbiAgICBDb29raWVzLnNldChcIngtand0XCIsIGF1dGhSZXN1bHQuaWRUb2tlbilcclxuICB9XHJcbiAgbG9naW4oKSB7XHJcbiAgICB0aGlzLmF1dGgwLmF1dGhvcml6ZSgpXHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRKV0tTKCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9kaW9uZTYxNi5ldS5hdXRoMC5jb20vLndlbGwta25vd24vandrcy5qc29uXCIpXHJcblxyXG4gICAgY29uc3QgandrcyA9IHJlcy5kYXRhXHJcbiAgICBjb25zb2xlLmxvZyhqd2tzKVxyXG4gICAgcmV0dXJuIGp3a3NcclxuICB9XHJcblxyXG4gIGNlcnRUb1BFTShjZXJ0KSB7XHJcbiAgICBjZXJ0ID0gY2VydC5tYXRjaCgvLnsxLDY0fS9nKS5qb2luKFwiXFxuXCIpXHJcbiAgICBjZXJ0ID0gYC0tLS0tQkVHSU4gQ0VSVElGSUNBVEUtLS0tLVxcbiR7Y2VydH1cXG4tLS0tLS1FTkQgQ0VSVElGSUNBVEVcXG5gXHJcbiAgICByZXR1cm4gY2VydFxyXG4gIH1cclxuXHJcbiAgYXN5bmMgdmVyaWZ5VG9rZW4odG9rZW4pIHtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICBjb25zdCBqd2tzID0gYXdhaXQgdGhpcy5nZXRKV0tTKClcclxuICAgICAgY29uc3QgY2VydGlmaWNhdGUgPSB0aGlzLmNlcnRUb1BFTShqd2tzLmtleXNbMF0ueDVjWzBdKSAvL2ZpcnN0IHBvc2l0aW9uIGRhdGFcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGVjb2RlZFZlcmlmeSA9IGp3dC52ZXJpZnkodG9rZW4sIGNlcnRpZmljYXRlKSAvL3ZlcmlmeSBpZiB0b2tlbiBpcyBjb3JyZWN0XHJcbiAgICAgICAgY29uc3QgZXhwaXJlc0F0ID0gZGVjb2RlZFZlcmlmeS5leHAgKiAxMDAwXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRlY29kZWRWZXJpZnkpXHJcblxyXG4gICAgICAgIHJldHVybiBkZWNvZGVkVmVyaWZ5ICYmIG5ldyBEYXRlKCkuZ2V0VGltZSgpIDwgZXhwaXJlc0F0ID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIGFzeW5jIGlzQXV0aGVudGljYXRlZChyZXEpIHtcclxuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgICAgLy9pZiBvbiB0aGUgY2xpZW50XHJcbiAgICAgIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXQoXCJ4LWp3dFwiKSAvL2dldCBjb29raWUgd2l0aCBuYW1lXHJcbiAgICAgIGNvbnN0IHZlcmlmeVRva2VuID0gYXdhaXQgdGhpcy52ZXJpZnlUb2tlbih0b2tlbilcclxuICAgICAgcmV0dXJuIHZlcmlmeVRva2VuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvL3NlcnZlclxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5jb25zdCBhdXRoMFNlcnYgPSBuZXcgQXV0aDAoKVxyXG5leHBvcnQgZGVmYXVsdCBhdXRoMFNlcnZcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==