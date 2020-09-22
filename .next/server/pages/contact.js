module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/contact.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions_message_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions/message_action */ "./store/actions/message_action.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Contact extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      msgdone: false
    });

    _defineProperty(this, "handleSubmit", (values, actions) => {
      this.props.dispatch(Object(_store_actions_message_action__WEBPACK_IMPORTED_MODULE_3__["sendMessage"])(values)).then(() => {
        this.setState({
          msgdone: true
        });
        actions.setSubmitting(false);
        actions.resetForm();
      });
    });

    _defineProperty(this, "handleRules", values => {
      let errors = {};

      for (let prop in values) {
        if (!values[prop]) {
          errors[prop] = "Required";
        }
      }

      const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!reg.test(values.email)) {
        errors.email = "Not a valid email";
      }

      return errors;
    });
  }

  componentWillUnmount() {
    this.props.dispatch(Object(_store_actions_message_action__WEBPACK_IMPORTED_MODULE_3__["clearMessage"])());
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "title_page"
    }, __jsx("h1", null, "Contact us")), __jsx("div", {
      className: "content_wrapper"
    }, __jsx("div", {
      className: "inner"
    }, __jsx("h1", null, "Feel free to contact us"), !this.state.msgdone ? __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
      initialValues: {
        name: "",
        email: "",
        message: ""
      },
      validate: values => this.handleRules(values),
      onSubmit: (values, actions) => this.handleSubmit(values, actions)
    }, ({
      errors,
      values,
      handleSubmit,
      handleChange,
      isSubmitting,
      handleBlur,
      touched
    }) => __jsx("form", {
      onSubmit: handleSubmit
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "Name"), __jsx("input", {
      type: "text",
      className: "form-control",
      name: "name",
      placeholder: "Enter your name here",
      value: values.name,
      onBlur: handleBlur,
      onChange: handleChange
    }), errors.name && touched.name ? __jsx("div", {
      className: "error_label"
    }, errors.name) : null), __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "Email"), __jsx("input", {
      type: "text",
      className: "form-control",
      name: "email",
      placeholder: "Enter your email here",
      value: values.email,
      onBlur: handleBlur,
      onChange: handleChange
    }), errors.email && touched.email ? __jsx("div", {
      className: "error_label"
    }, errors.email) : null), __jsx("div", {
      className: "form-group"
    }, __jsx("label", null, "Write a message right here"), __jsx("textarea", {
      className: "form-control",
      name: "message",
      placeholder: "your message",
      value: values.message,
      onBlur: handleBlur,
      onChange: handleChange
    }), errors.message && touched.message ? __jsx("div", {
      className: "error_label"
    }, errors.message) : null), __jsx("button", {
      type: "submit",
      className: "btn btn-primary",
      disabled: isSubmitting
    }, "Submit"))) : __jsx("div", null, "We will contact you shortly"))));
  }

}

const mapStateToProps = state => {
  return {
    msg: state.msg
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Contact));

/***/ }),

/***/ "./store/actions/message_action.js":
/*!*****************************************!*\
  !*** ./store/actions/message_action.js ***!
  \*****************************************/
/*! exports provided: sendMessage, clearMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessage", function() { return sendMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearMessage", function() { return clearMessage; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/types */ "./store/reducers/types.js");


const URL = "http://localhost:3000";
function sendMessage(data) {
  const request = axios__WEBPACK_IMPORTED_MODULE_0___default()({
    method: "POST",
    url: `${URL}/api/v1/messages`,
    data: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.data);
  return {
    type: _reducers_types__WEBPACK_IMPORTED_MODULE_1__["SEND_MESSAGE"],
    payload: request
  };
}
function clearMessage() {
  return {
    type: _reducers_types__WEBPACK_IMPORTED_MODULE_1__["CLEAR_MESSAGE"],
    payload: null
  };
}

/***/ }),

/***/ "./store/reducers/types.js":
/*!*********************************!*\
  !*** ./store/reducers/types.js ***!
  \*********************************/
/*! exports provided: SEND_MESSAGE, CLEAR_MESSAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_MESSAGE", function() { return SEND_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_MESSAGE", function() { return CLEAR_MESSAGE; });
const SEND_MESSAGE = "SEND_MESSAGE";
const CLEAR_MESSAGE = "CLEAR_MESSAGE";

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL21lc3NhZ2VfYWN0aW9uLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3JlZHVjZXJzL3R5cGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZm9ybWlrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIl0sIm5hbWVzIjpbIkNvbnRhY3QiLCJDb21wb25lbnQiLCJtc2dkb25lIiwidmFsdWVzIiwiYWN0aW9ucyIsInByb3BzIiwiZGlzcGF0Y2giLCJzZW5kTWVzc2FnZSIsInRoZW4iLCJzZXRTdGF0ZSIsInNldFN1Ym1pdHRpbmciLCJyZXNldEZvcm0iLCJlcnJvcnMiLCJwcm9wIiwicmVnIiwidGVzdCIsImVtYWlsIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJjbGVhck1lc3NhZ2UiLCJyZW5kZXIiLCJzdGF0ZSIsIm5hbWUiLCJtZXNzYWdlIiwiaGFuZGxlUnVsZXMiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJpc1N1Ym1pdHRpbmciLCJoYW5kbGVCbHVyIiwidG91Y2hlZCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1zZyIsImNvbm5lY3QiLCJVUkwiLCJkYXRhIiwicmVxdWVzdCIsImF4aW9zIiwibWV0aG9kIiwidXJsIiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJyZXNwb25zZSIsInR5cGUiLCJTRU5EX01FU1NBR0UiLCJwYXlsb2FkIiwiQ0xFQVJfTUVTU0FHRSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7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QUcsZUFBdEIsQzs7Ozs7Ozs7Ozs7QUNEUCxrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9jb250YWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9jb250YWN0LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IEZvcm1payB9IGZyb20gXCJmb3JtaWtcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IHsgc2VuZE1lc3NhZ2UsIGNsZWFyTWVzc2FnZSB9IGZyb20gXCIuLi9zdG9yZS9hY3Rpb25zL21lc3NhZ2VfYWN0aW9uXCJcclxuXHJcbmNsYXNzIENvbnRhY3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgbXNnZG9uZTogZmFsc2UsXHJcbiAgfVxyXG5cclxuICBoYW5kbGVTdWJtaXQgPSAodmFsdWVzLCBhY3Rpb25zKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHNlbmRNZXNzYWdlKHZhbHVlcykpLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBtc2dkb25lOiB0cnVlLFxyXG4gICAgICB9KVxyXG4gICAgICBhY3Rpb25zLnNldFN1Ym1pdHRpbmcoZmFsc2UpXHJcbiAgICAgIGFjdGlvbnMucmVzZXRGb3JtKClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBoYW5kbGVSdWxlcyA9ICh2YWx1ZXMpID0+IHtcclxuICAgIGxldCBlcnJvcnMgPSB7fVxyXG5cclxuICAgIGZvciAobGV0IHByb3AgaW4gdmFsdWVzKSB7XHJcbiAgICAgIGlmICghdmFsdWVzW3Byb3BdKSB7XHJcbiAgICAgICAgZXJyb3JzW3Byb3BdID0gXCJSZXF1aXJlZFwiXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZWcgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkL1xyXG5cclxuICAgIGlmICghcmVnLnRlc3QodmFsdWVzLmVtYWlsKSkge1xyXG4gICAgICBlcnJvcnMuZW1haWwgPSBcIk5vdCBhIHZhbGlkIGVtYWlsXCJcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZXJyb3JzXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChjbGVhck1lc3NhZ2UoKSlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZV9wYWdlXCI+XHJcbiAgICAgICAgICA8aDE+Q29udGFjdCB1czwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X3dyYXBwZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cclxuICAgICAgICAgICAgPGgxPkZlZWwgZnJlZSB0byBjb250YWN0IHVzPC9oMT5cclxuXHJcbiAgICAgICAgICAgIHshdGhpcy5zdGF0ZS5tc2dkb25lID8gKFxyXG4gICAgICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgbmFtZTogXCJcIiwgZW1haWw6IFwiXCIsIG1lc3NhZ2U6IFwiXCIgfX1cclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlPXsodmFsdWVzKSA9PiB0aGlzLmhhbmRsZVJ1bGVzKHZhbHVlcyl9XHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17KHZhbHVlcywgYWN0aW9ucykgPT4gdGhpcy5oYW5kbGVTdWJtaXQodmFsdWVzLCBhY3Rpb25zKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7KHsgZXJyb3JzLCB2YWx1ZXMsIGhhbmRsZVN1Ym1pdCwgaGFuZGxlQ2hhbmdlLCBpc1N1Ym1pdHRpbmcsIGhhbmRsZUJsdXIsIHRvdWNoZWQgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG5hbWUgaGVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMubmFtZSAmJiB0b3VjaGVkLm5hbWUgPyA8ZGl2IGNsYXNzTmFtZT1cImVycm9yX2xhYmVsXCI+e2Vycm9ycy5uYW1lfTwvZGl2PiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbCBoZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuZW1haWwgJiYgdG91Y2hlZC5lbWFpbCA/IDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JfbGFiZWxcIj57ZXJyb3JzLmVtYWlsfTwvZGl2PiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPldyaXRlIGEgbWVzc2FnZSByaWdodCBoZXJlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwieW91ciBtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMubWVzc2FnZSAmJiB0b3VjaGVkLm1lc3NhZ2UgPyA8ZGl2IGNsYXNzTmFtZT1cImVycm9yX2xhYmVsXCI+e2Vycm9ycy5tZXNzYWdlfTwvZGl2PiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdj5XZSB3aWxsIGNvbnRhY3QgeW91IHNob3J0bHk8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBtc2c6IHN0YXRlLm1zZyxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShDb250YWN0KVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IHsgU0VORF9NRVNTQUdFLCBDTEVBUl9NRVNTQUdFIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3R5cGVzXCJcclxuXHJcbmNvbnN0IFVSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZW5kTWVzc2FnZShkYXRhKSB7XHJcbiAgY29uc3QgcmVxdWVzdCA9IGF4aW9zKHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICB1cmw6IGAke1VSTH0vYXBpL3YxL21lc3NhZ2VzYCxcclxuICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5kYXRhKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0VORF9NRVNTQUdFLFxyXG4gICAgcGF5bG9hZDogcmVxdWVzdCxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhck1lc3NhZ2UoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IENMRUFSX01FU1NBR0UsXHJcbiAgICBwYXlsb2FkOiBudWxsLFxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgU0VORF9NRVNTQUdFID0gXCJTRU5EX01FU1NBR0VcIlxyXG5leHBvcnQgY29uc3QgQ0xFQVJfTUVTU0FHRSA9IFwiQ0xFQVJfTUVTU0FHRVwiXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZvcm1pa1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9