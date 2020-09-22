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
        returnTo: "".concat(publicRuntimeConfig.base_url)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2FwcEF1dGguanMiXSwibmFtZXMiOlsiZ2V0Q29uZmlnIiwicHVibGljUnVudGltZUNvbmZpZyIsIkF1dGgwIiwiYXV0aDAiLCJXZWJBdXRoIiwiZG9tYWluIiwiY2xpZW50SUQiLCJjbGllbnRfaWQiLCJyZWRpcmVjdFVyaSIsImJhc2VfdXJsIiwicmVzcG9uc2VUeXBlIiwic2NvcGUiLCJoYW5kbGVBdXRoZW50aWNhdGlvbiIsImJpbmQiLCJpc0F1dGhlbnRpY2F0ZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBhcnNlSGFzaCIsImVyciIsImF1dGhSZXN1bHQiLCJhY2Nlc3NUb2tlbiIsImlkVG9rZW4iLCJzZXRTZXNzaW9uIiwiZXhwaXJlc0F0IiwiSlNPTiIsInN0cmluZ2lmeSIsImV4cGlyZXNJbiIsIkRhdGUiLCJnZXRUaW1lIiwiQ29va2llcyIsInNldCIsInJlbW92ZSIsImxvZ291dCIsInJldHVyblRvIiwiYXV0aG9yaXplIiwiYXhpb3MiLCJnZXQiLCJyZXMiLCJqd2tzIiwiZGF0YSIsImNlcnQiLCJtYXRjaCIsImpvaW4iLCJ0b2tlbiIsImdldEpXS1MiLCJjZXJ0aWZpY2F0ZSIsImNlcnRUb1BFTSIsImtleXMiLCJ4NWMiLCJkZWNvZGVkVmVyaWZ5Iiwiand0IiwidmVyaWZ5IiwiZXhwIiwicmVxIiwidmVyaWZ5VG9rZW4iLCJnZXRDb29rc0Zyb21SZXEiLCJhdXRoMFNlcnYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7aUJBRWdDQSxrREFBUyxFO0lBQWpDQyxtQixjQUFBQSxtQjs7SUFFRkMsSztBQUNKLG1CQUFjO0FBQUE7O0FBQ1osU0FBS0MsS0FBTCxHQUFhLElBQUlBLGdEQUFLLENBQUNDLE9BQVYsQ0FBa0I7QUFDN0JDLFlBQU0sRUFBRSx1QkFEcUI7QUFFN0JDLGNBQVEsWUFBS0wsbUJB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QUFpQlgsS0FBakIsQzs7O0FBQXBCVywyQjtrREFFQ0EsVzs7O0FBRVA7QUFDTVgsc0IsR0FBUVksa0VBQWUsQ0FBQ0YsR0FBRCxFQUFNLE9BQU4sQzs7dUJBQ0gsS0FBS0MsV0FBTCxDQUFpQlgsTUFBakIsQzs7O0FBQXBCVyw2QjtrREFFQ0EsYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWIsSUFBTUUsU0FBUyxHQUFHLElBQUl2RCxLQUFKLEVBQWxCO0FBQ2V1RCx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmQ3Y2NjNWI1NTE3YjRjOGJiZjk3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXV0aDAgZnJvbSBcImF1dGgwLWpzXCJcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIlxyXG5cclxuaW1wb3J0IGdldENvbmZpZyBmcm9tIFwibmV4dC9jb25maWdcIlxyXG5pbXBvcnQgeyBnZXRDb29rc0Zyb21SZXEgfSBmcm9tIFwiLi4vbGliL3V0aWxzXCJcclxuXHJcbmNvbnN0IHsgcHVibGljUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKClcclxuXHJcbmNsYXNzIEF1dGgwIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuYXV0aDAgPSBuZXcgYXV0aDAuV2ViQXV0aCh7XHJcbiAgICAgIGRvbWFpbjogXCJkaW9uZTYxNi5ldS5hdXRoMC5jb21cIixcclxuICAgICAgY2xpZW50SUQ6IGAke3B1YmxpY1J1bnRpbWVDb25maWcuY2xpZW50X2lkfWAsXHJcbiAgICAgIHJlZGlyZWN0VXJpOiBgJHtwdWJsaWNSdW50aW1lQ29uZmlnLmJhc2VfdXJsfS9sb2dpbi1zdWNjZXNzYCxcclxuICAgICAgcmVzcG9uc2VUeXBlOiBcInRva2VuIGlkX3Rva2VuXCIsXHJcbiAgICAgIHNjb3BlOiBcIm9wZW5pZFwiLFxyXG4gICAgfSlcclxuICAgIC8vaWYgY2FsbCBmcm9tIGFub3RoZXIgY29udGV4dCwgbmVlZCB0byBiaW5kIG9yIGFycm93IGZ1bmNcclxuICAgIHRoaXMuaGFuZGxlQXV0aGVudGljYXRpb24gPSB0aGlzLmhhbmRsZUF1dGhlbnRpY2F0aW9uLmJpbmQodGhpcylcclxuICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gdGhpcy5pc0F1dGhlbnRpY2F0ZWQuYmluZCh0aGlzKVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQXV0aGVudGljYXRpb24oKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLmF1dGgwLnBhcnNlSGFzaCgoZXJyLCBhdXRoUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgaWYgKGF1dGhSZXN1bHQgJiYgYXV0aFJlc3VsdC5hY2Nlc3NUb2tlbiAmJiBhdXRoUmVzdWx0LmlkVG9rZW4pIHtcclxuICAgICAgICAgIHRoaXMuc2V0U2Vzc2lvbihhdXRoUmVzdWx0KVxyXG4gICAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICAgICAgfSBlbHNlIGlmIChlcnIpIHtcclxuICAgICAgICAgIHJlamVjdCgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHNldFNlc3Npb24oYXV0aFJlc3VsdCkge1xyXG4gICAgbGV0IGV4cGlyZXNBdCA9IEpTT04uc3RyaW5naWZ5KGF1dGhSZXN1bHQuZXhwaXJlc0luICogMTAwMCArIG5ldyBEYXRlKCkuZ2V0VGltZSgpKVxyXG4gICAgQ29va2llcy5zZXQoXCJ4LWp3dC1leHBcIiwgZXhwaXJlc0F0KVxyXG4gICAgQ29va2llcy5zZXQoXCJ4LWp3dFwiLCBhdXRoUmVzdWx0LmlkVG9rZW4pXHJcbiAgfVxyXG5cclxuICBsb2dvdXQoKSB7XHJcbiAgICBDb29raWVzLnJlbW92ZShcIngtand0LWV4cFwiKVxyXG4gICAgQ29va2llcy5yZW1vdmUoXCJ4LWp3dFwiKVxyXG4gICAgdGhpcy5hdXRoMC5sb2dvdXQoe1xyXG4gICAgICBjbGllbnRJRDogYCR7cHVibGljUnVudGltZUNvbmZpZy5jbGllbnRfaWR9YCxcclxuICAgICAgcmV0dXJuVG86IGAke3B1YmxpY1J1bnRpbWVDb25maWcuYmFzZV91cmx9YCxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBsb2dpbigpIHtcclxuICAgIHRoaXMuYXV0aDAuYXV0aG9yaXplKClcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldEpXS1MoKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL2Rpb25lNjE2LmV1LmF1dGgwLmNvbS8ud2VsbC1rbm93bi9qd2tzLmpzb25cIilcclxuICAgIGNvbnN0IGp3a3MgPSByZXMuZGF0YVxyXG4gICAgcmV0dXJuIGp3a3NcclxuICB9XHJcblxyXG4gIGNlcnRUb1BFTShjZXJ0KSB7XHJcbiAgICBjZXJ0ID0gY2VydC5tYXRjaCgvLnsxLDY0fS9nKS5qb2luKFwiXFxuXCIpXHJcbiAgICBjZXJ0ID0gYC0tLS0tQkVHSU4gQ0VSVElGSUNBVEUtLS0tLVxcbiR7Y2VydH1cXG4tLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tXFxuYFxyXG4gICAgcmV0dXJuIGNlcnRcclxuICB9XHJcblxyXG4gIGFzeW5jIHZlcmlmeVRva2VuKHRva2VuKSB7XHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgY29uc3QgandrcyA9IGF3YWl0IHRoaXMuZ2V0SldLUygpXHJcbiAgICAgIGNvbnN0IGNlcnRpZmljYXRlID0gdGhpcy5jZXJ0VG9QRU0oandrcy5rZXlzWzBdLng1Y1swXSlcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGVjb2RlZFZlcmlmeSA9IGp3dC52ZXJpZnkodG9rZW4sIGNlcnRpZmljYXRlKVxyXG4gICAgICAgIGNvbnN0IGV4cGlyZXNBdCA9IGRlY29kZWRWZXJpZnkuZXhwICogMTAwMFxyXG5cclxuICAgICAgICByZXR1cm4gZGVjb2RlZFZlcmlmeSAmJiBuZXcgRGF0ZSgpLmdldFRpbWUoKSA8IGV4cGlyZXNBdCA/IHRydWUgOiBmYWxzZVxyXG4gICAgICB9IGNhdGNoIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG5cclxuICBhc3luYyBpc0F1dGhlbnRpY2F0ZWQocmVxKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICAgIC8vY2xpZW50XHJcbiAgICAgIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXQoXCJ4LWp3dFwiKVxyXG4gICAgICBjb25zdCB2ZXJpZnlUb2tlbiA9IGF3YWl0IHRoaXMudmVyaWZ5VG9rZW4odG9rZW4pXHJcblxyXG4gICAgICByZXR1cm4gdmVyaWZ5VG9rZW5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vc2VydmVyXHJcbiAgICAgIGNvbnN0IHRva2VuID0gZ2V0Q29va3NGcm9tUmVxKHJlcSwgXCJ4LWp3dFwiKVxyXG4gICAgICBjb25zdCB2ZXJpZnlUb2tlbiA9IGF3YWl0IHRoaXMudmVyaWZ5VG9rZW4odG9rZW4pXHJcblxyXG4gICAgICByZXR1cm4gdmVyaWZ5VG9rZW5cclxuICAgIH1cclxuICB9XHJcbn1cclxuY29uc3QgYXV0aDBTZXJ2ID0gbmV3IEF1dGgwKClcclxuZXhwb3J0IGRlZmF1bHQgYXV0aDBTZXJ2XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=