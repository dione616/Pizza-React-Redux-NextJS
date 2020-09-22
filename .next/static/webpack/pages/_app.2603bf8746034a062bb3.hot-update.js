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
        var token, verifyToken;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (false) {}

                token = js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get("x-jwt");
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

/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! exports provided: getCooksFromReq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCooksFromReq", function() { return getCooksFromReq; });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "./node_modules/jsonwebtoken/index.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);

var getCooksFromReq = function getCooksFromReq(req, cookName) {
  var cooksList = {};
  var cookValue;
  var rhc = req.headers.cookie;
  rhc ? rhc.split(";").forEach(function (cookie) {
    var parts = cookie.split("=");
    cooksList[parts.shift().trim()] = decodeURI(parts.join("="));
  }) : null;

  if (cookValue = cooksList["".concat(cookName)]) {
    return cookValue;
  } else {
    return undefined;
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2FwcEF1dGguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2xpYi91dGlscy5qcyJdLCJuYW1lcyI6WyJnZXRDb25maWciLCJwdWJsaWNSdW50aW1lQ29uZmlnIiwiQXV0aDAiLCJhdXRoMCIsIldlYkF1dGgiLCJkb21haW4iLCJjbGllbnRJRCIsImNsaWVudF9pZCIsInJlZGlyZWN0VXJpIiwiYmFzZV91cmwiLCJyZXNwb25zZVR5cGUiLCJzY29wZSIsImhhbmRsZUF1dGhlbnRpY2F0aW9uIiwiYmluZCIsImlzQXV0aGVudGljYXRlZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicGFyc2VIYXNoIiwiZXJyIiwiYXV0aFJlc3VsdCIsImFjY2Vzc1Rva2VuIiwiaWRUb2tlbiIsInNldFNlc3Npb24iLCJleHBpcmVzQXQiLCJKU09OIiwic3RyaW5naWZ5IiwiZXhwaXJlc0luIiwiRGF0ZSIsImdldFRpbWUiLCJDb29raWVzIiwic2V0IiwiYXV0aG9yaXplIiwiYXhpb3MiLCJnZXQiLCJyZXMiLCJqd2tzIiwiZGF0YSIsImNlcnQiLCJtYXRjaCIsImpvaW4iLCJ0b2tlbiIsImdldEpXS1MiLCJjZXJ0aWZpY2F0ZSIsImNlcnRUb1BFTSIsImtleXMiLCJ4NWMiLCJkZWNvZGVkVmVyaWZ5Iiwiand0IiwidmVyaWZ5IiwiZXhwIiwicmVxIiwidmVyaWZ5VG9rZW4iLCJhdXRoMFNlcnYiLCJnZXRDb29rc0Zyb21SZXEiLCJjb29rTmFtZSIsImNvb2tzTGlzdCIsImNvb2tWYWx1ZSIsInJoYyIsImhlYWRlcnMiLCJjb29raWUiLCJzcGxpdCIsImZvckVhY2giLCJwYXJ0cyIsInNoaWZ0IiwidHJpbSIsImRlY29kZVVSSSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztpQkFFZ0NBLGtEQUFTLEU7SUFBakNDLG1CLGNBQUFBLG1COztJQUVGQyxLO0FBQ0osbUJBQWM7QUFBQTs7QUFDWixTQUFLQyxLQUFMLEdBQWEsSUFBSUEsZ0RBQUssQ0FBQ0MsT0FBVixDQUFrQjtBQUM3QkMsWUFBTSxFQUFFLHVCQURxQjtBQUU3QkMsY0FBUSxZQUFLTCxtQkFBbUIsQ0FBQ00sU0FBekIsQ0FGcUI7QUFHN0JDLGlCQUFXLFlBQUtQLG1CQUFtQixDQUFDUSxRQUF6QixtQkFIa0I7QUFJN0JDLGtCQUFZLEVBQUUsZ0JBSmU7QUFLN0JDLFdBQUssRUFBRTtBQUxzQixLQUFsQixDQUFiLENBRFksQ0FRWjs7QUFDQSxTQUFLQyxvQkFBTCxHQUE0QixLQUFLQSxvQkFBTCxDQUEwQkMsSUFBMUIsQ0FBK0IsSUFBL0IsQ0FBNUI7QUFDQSxTQUFLQyxlQUFMLEdBQXVCLEtBQUtBLGVBQUwsQ0FBcUJELElBQXJCLENBQTBCLElBQTFCLENBQXZCO0FBQ0Q7Ozs7MkNBRXNCO0FBQUE7O0FBQ3JCLGFBQU8sSUFBSUUsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0QyxhQUFJLENBQUNkLEtBQUwsQ0FBV2UsU0FBWCxDQUFxQixVQUFDQyxHQUFELEVBQU1DLFVBQU4sRUFBcUI7QUFDeEMsY0FBSUEsVUFBVSxJQUFJQSxVQUFVLENBQUNDLFdBQXpCLElBQXdDRCxVQUFVLENBQUNFLE9BQXZELEVBQWdFO0FBQzlELGlCQUFJLENBQUNDLFVBQUwsQ0FBZ0JILFVBQWhCOztBQUNBSixtQkFBTztBQUNSLFdBSEQsTUFHTyxJQUFJRyxHQUFKLEVBQVM7QUFDZEYsa0JBQU07QUFDUDtBQUNGLFNBUEQ7QUFRRCxPQVRNLENBQVA7QUFVRDs7OytCQUVVRyxVLEVBQVk7QUFDckIsVUFBSUksU0FBUyxHQUFHQyxJQUFJLENBQUNDLFNBQUwsQ0FBZU4sVUFBVSxDQUFDTyxTQUFYLEdBQXVCLElBQXZCLEdBQThCLElBQUlDLElBQUosR0FBV0MsT0FBWCxFQUE3QyxDQUFoQjtBQUNBQyxzREFBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QlAsU0FBekI7QUFDQU0sc0RBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJYLFVBQVUsQ0FBQ0UsT0FBaEM7QUFDRDs7OzRCQUNPO0FBQ04sV0FBS25CLEtBQUwsQ0FBVzZCLFNBQVg7QUFDRDs7Ozs7Ozs7Ozs7dUJBR21CQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVUscURBQVYsQzs7O0FBQVpDLG1CO0FBQ0FDLG9CLEdBQU9ELEdBQUcsQ0FBQ0UsSTtpREFDVkQsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUdDRSxJLEVBQU07QUFDZEEsVUFBSSxHQUFHQSxJQUFJLENBQUNDLEtBQUwsQ0FBVyxVQUFYLEVBQXVCQyxJQUF2QixDQUE0QixJQUE1QixDQUFQO0FBQ0FGLFVBQUksMENBQW1DQSxJQUFuQyxrQ0FBSjtBQUNBLGFBQU9BLElBQVA7QUFDRDs7Ozs0TkFFaUJHLEs7Ozs7OztxQkFDWkEsSzs7Ozs7O3VCQUNpQixLQUFLQyxPQUFMLEU7OztBQUFiTixvQjtBQUNBTywyQixHQUFjLEtBQUtDLFNBQUwsQ0FBZVIsSUFBSSxDQUFDUyxJQUFMLENBQVUsQ0FBVixFQUFhQyxHQUFiLENBQWlCLENBQWpCLENBQWYsQzs7QUFHWkMsNkIsR0FBZ0JDLG1EQUFHLENBQUNDLE1BQUosQ0FBV1IsS0FBWCxFQUFrQkUsV0FBbEIsQztBQUNoQm5CLHlCLEdBQVl1QixhQUFhLENBQUNHLEdBQWQsR0FBb0IsSTtrREFFL0JILGFBQWEsSUFBSSxJQUFJbkIsSUFBSixHQUFXQyxPQUFYLEtBQXVCTCxTQUF4QyxHQUFvRCxJQUFwRCxHQUEyRCxLOzs7OztrREFFM0QsSzs7O2tEQUdKLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z09BR2EyQixHOzs7Ozs7OztBQUVaVixxQixHQUFRWCxnREFBTyxDQUFDSSxHQUFSLENBQVksT0FBWixDOzt1QkFDWSxLQUFLa0IsV0FBTCxDQUFpQlgsS0FBakIsQzs7O0FBQXBCVywyQjtrREFFQ0EsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWIsSUFBTUMsU0FBUyxHQUFHLElBQUluRCxLQUFKLEVBQWxCO0FBQ2VtRCx3RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNILEdBQUQsRUFBTUksUUFBTixFQUFtQjtBQUNoRCxNQUFJQyxTQUFTLEdBQUcsRUFBaEI7QUFDQSxNQUFJQyxTQUFKO0FBQ0EsTUFBTUMsR0FBRyxHQUFHUCxHQUFHLENBQUNRLE9BQUosQ0FBWUMsTUFBeEI7QUFFQUYsS0FBRyxHQUNDQSxHQUFHLENBQUNHLEtBQUosQ0FBVSxHQUFWLEVBQWVDLE9BQWYsQ0FBdUIsVUFBQ0YsTUFBRCxFQUFZO0FBQ2pDLFFBQUlHLEtBQUssR0FBR0gsTUFBTSxDQUFDQyxLQUFQLENBQWEsR0FBYixDQUFaO0FBQ0FMLGFBQVMsQ0FBQ08sS0FBSyxDQUFDQyxLQUFOLEdBQWNDLElBQWQsRUFBRCxDQUFULEdBQWtDQyxTQUFTLENBQUNILEtBQUssQ0FBQ3ZCLElBQU4sQ0FBVyxHQUFYLENBQUQsQ0FBM0M7QUFDRCxHQUhELENBREQsR0FLQyxJQUxKOztBQU9BLE1BQUtpQixTQUFTLEdBQUdELFNBQVMsV0FBSUQsUUFBSixFQUExQixFQUE0QztBQUMxQyxXQUFPRSxTQUFQO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsV0FBT1UsU0FBUDtBQUNEO0FBQ0YsQ0FqQk0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yNjAzYmY4NzQ2MDM0YTA2MmJiMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF1dGgwIGZyb20gXCJhdXRoMC1qc1wiXHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCJcclxuXHJcbmltcG9ydCBnZXRDb25maWcgZnJvbSBcIm5leHQvY29uZmlnXCJcclxuaW1wb3J0IHsgZ2V0Q29va3NGcm9tUmVxIH0gZnJvbSBcIi4uL2xpYi91dGlsc1wiXHJcblxyXG5jb25zdCB7IHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpXHJcblxyXG5jbGFzcyBBdXRoMCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmF1dGgwID0gbmV3IGF1dGgwLldlYkF1dGgoe1xyXG4gICAgICBkb21haW46IFwiZGlvbmU2MTYuZXUuYXV0aDAuY29tXCIsXHJcbiAgICAgIGNsaWVudElEOiBgJHtwdWJsaWNSdW50aW1lQ29uZmlnLmNsaWVudF9pZH1gLFxyXG4gICAgICByZWRpcmVjdFVyaTogYCR7cHVibGljUnVudGltZUNvbmZpZy5iYXNlX3VybH0vbG9naW4tc3VjY2Vzc2AsXHJcbiAgICAgIHJlc3BvbnNlVHlwZTogXCJ0b2tlbiBpZF90b2tlblwiLFxyXG4gICAgICBzY29wZTogXCJvcGVuaWRcIixcclxuICAgIH0pXHJcbiAgICAvL2lmIGNhbGwgZnJvbSBhbm90aGVyIGNvbnRleHQsIG5lZWQgdG8gYmluZCBvciBhcnJvdyBmdW5jXHJcbiAgICB0aGlzLmhhbmRsZUF1dGhlbnRpY2F0aW9uID0gdGhpcy5oYW5kbGVBdXRoZW50aWNhdGlvbi5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IHRoaXMuaXNBdXRoZW50aWNhdGVkLmJpbmQodGhpcylcclxuICB9XHJcblxyXG4gIGhhbmRsZUF1dGhlbnRpY2F0aW9uKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdGhpcy5hdXRoMC5wYXJzZUhhc2goKGVyciwgYXV0aFJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmIChhdXRoUmVzdWx0ICYmIGF1dGhSZXN1bHQuYWNjZXNzVG9rZW4gJiYgYXV0aFJlc3VsdC5pZFRva2VuKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFNlc3Npb24oYXV0aFJlc3VsdClcclxuICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZXJyKSB7XHJcbiAgICAgICAgICByZWplY3QoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBzZXRTZXNzaW9uKGF1dGhSZXN1bHQpIHtcclxuICAgIGxldCBleHBpcmVzQXQgPSBKU09OLnN0cmluZ2lmeShhdXRoUmVzdWx0LmV4cGlyZXNJbiAqIDEwMDAgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSlcclxuICAgIENvb2tpZXMuc2V0KFwieC1qd3QtZXhwXCIsIGV4cGlyZXNBdClcclxuICAgIENvb2tpZXMuc2V0KFwieC1qd3RcIiwgYXV0aFJlc3VsdC5pZFRva2VuKVxyXG4gIH1cclxuICBsb2dpbigpIHtcclxuICAgIHRoaXMuYXV0aDAuYXV0aG9yaXplKClcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldEpXS1MoKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL2Rpb25lNjE2LmV1LmF1dGgwLmNvbS8ud2VsbC1rbm93bi9qd2tzLmpzb25cIilcclxuICAgIGNvbnN0IGp3a3MgPSByZXMuZGF0YVxyXG4gICAgcmV0dXJuIGp3a3NcclxuICB9XHJcblxyXG4gIGNlcnRUb1BFTShjZXJ0KSB7XHJcbiAgICBjZXJ0ID0gY2VydC5tYXRjaCgvLnsxLDY0fS9nKS5qb2luKFwiXFxuXCIpXHJcbiAgICBjZXJ0ID0gYC0tLS0tQkVHSU4gQ0VSVElGSUNBVEUtLS0tLVxcbiR7Y2VydH1cXG4tLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tXFxuYFxyXG4gICAgcmV0dXJuIGNlcnRcclxuICB9XHJcblxyXG4gIGFzeW5jIHZlcmlmeVRva2VuKHRva2VuKSB7XHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgY29uc3QgandrcyA9IGF3YWl0IHRoaXMuZ2V0SldLUygpXHJcbiAgICAgIGNvbnN0IGNlcnRpZmljYXRlID0gdGhpcy5jZXJ0VG9QRU0oandrcy5rZXlzWzBdLng1Y1swXSlcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGVjb2RlZFZlcmlmeSA9IGp3dC52ZXJpZnkodG9rZW4sIGNlcnRpZmljYXRlKVxyXG4gICAgICAgIGNvbnN0IGV4cGlyZXNBdCA9IGRlY29kZWRWZXJpZnkuZXhwICogMTAwMFxyXG5cclxuICAgICAgICByZXR1cm4gZGVjb2RlZFZlcmlmeSAmJiBuZXcgRGF0ZSgpLmdldFRpbWUoKSA8IGV4cGlyZXNBdCA/IHRydWUgOiBmYWxzZVxyXG4gICAgICB9IGNhdGNoIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG5cclxuICBhc3luYyBpc0F1dGhlbnRpY2F0ZWQocmVxKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICAgIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXQoXCJ4LWp3dFwiKVxyXG4gICAgICBjb25zdCB2ZXJpZnlUb2tlbiA9IGF3YWl0IHRoaXMudmVyaWZ5VG9rZW4odG9rZW4pXHJcblxyXG4gICAgICByZXR1cm4gdmVyaWZ5VG9rZW5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vc2VydmVyXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmNvbnN0IGF1dGgwU2VydiA9IG5ldyBBdXRoMCgpXHJcbmV4cG9ydCBkZWZhdWx0IGF1dGgwU2VydlxyXG4iLCJpbXBvcnQgeyBkZWNvZGUgfSBmcm9tIFwianNvbndlYnRva2VuXCJcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb29rc0Zyb21SZXEgPSAocmVxLCBjb29rTmFtZSkgPT4ge1xyXG4gIGxldCBjb29rc0xpc3QgPSB7fVxyXG4gIGxldCBjb29rVmFsdWVcclxuICBjb25zdCByaGMgPSByZXEuaGVhZGVycy5jb29raWVcclxuXHJcbiAgcmhjXHJcbiAgICA/IHJoYy5zcGxpdChcIjtcIikuZm9yRWFjaCgoY29va2llKSA9PiB7XHJcbiAgICAgICAgbGV0IHBhcnRzID0gY29va2llLnNwbGl0KFwiPVwiKVxyXG4gICAgICAgIGNvb2tzTGlzdFtwYXJ0cy5zaGlmdCgpLnRyaW0oKV0gPSBkZWNvZGVVUkkocGFydHMuam9pbihcIj1cIikpXHJcbiAgICAgIH0pXHJcbiAgICA6IG51bGxcclxuXHJcbiAgaWYgKChjb29rVmFsdWUgPSBjb29rc0xpc3RbYCR7Y29va05hbWV9YF0pKSB7XHJcbiAgICByZXR1cm4gY29va1ZhbHVlXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB1bmRlZmluZWRcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==