/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/js/api.js":
/*!******************************!*\
  !*** ./src/client/js/api.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"get\": () => (/* binding */ get),\n/* harmony export */   \"post\": () => (/* binding */ post)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n// api 로 GET 요청 (/endpoint/params 형태로 요청함)\nfunction get(_x) {\n  return _get.apply(this, arguments);\n} // api 로 POST 요청 (/endpoint 로, JSON 데이터 형태로 요청함)\n\n\nfunction _get() {\n  _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(endpoint) {\n    var params,\n        apiUrl,\n        res,\n        errorContent,\n        reason,\n        result,\n        _args = arguments;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            params = _args.length > 1 && _args[1] !== undefined ? _args[1] : \"\";\n            apiUrl = \"\".concat(endpoint, \"/\").concat(params);\n            _context.next = 4;\n            return fetch(apiUrl, {\n              // JWT 토큰을 헤더에 담아 백엔드 서버에 보냄.\n              headers: {\n                Authorization: \"Bearer \".concat(sessionStorage.getItem(\"token\"))\n              }\n            });\n\n          case 4:\n            res = _context.sent;\n\n            if (res.ok) {\n              _context.next = 11;\n              break;\n            }\n\n            _context.next = 8;\n            return res.json();\n\n          case 8:\n            errorContent = _context.sent;\n            reason = errorContent.reason;\n            throw new Error(reason);\n\n          case 11:\n            _context.next = 13;\n            return res.json();\n\n          case 13:\n            result = _context.sent;\n            return _context.abrupt(\"return\", result);\n\n          case 15:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _get.apply(this, arguments);\n}\n\nfunction post(_x2, _x3) {\n  return _post.apply(this, arguments);\n} // 아래처럼 export하면, import * as Api 로 할 시 Api.get, Api.post 등으로 쓸 수 있음.\n\n\nfunction _post() {\n  _post = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(endpoint, data) {\n    var apiUrl, bodyData, res, errorContent, reason, result;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            apiUrl = \"\".concat(endpoint); // JSON.stringify 함수: Javascript 객체를 JSON 형태로 변환함.\n            // 예시: {name: \"Kim\"} => {\"name\": \"Kim\"}\n\n            bodyData = JSON.stringify(data);\n            _context2.next = 4;\n            return fetch(apiUrl, {\n              method: \"POST\",\n              headers: {\n                \"Content-Type\": \"application/json\",\n                Authorization: \"Bearer \".concat(sessionStorage.getItem(\"token\"))\n              },\n              body: bodyData\n            });\n\n          case 4:\n            res = _context2.sent;\n\n            if (res.ok) {\n              _context2.next = 11;\n              break;\n            }\n\n            _context2.next = 8;\n            return res.json();\n\n          case 8:\n            errorContent = _context2.sent;\n            reason = errorContent.reason;\n            throw new Error(reason);\n\n          case 11:\n            _context2.next = 13;\n            return res.json();\n\n          case 13:\n            result = _context2.sent;\n            return _context2.abrupt(\"return\", result);\n\n          case 15:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _post.apply(this, arguments);\n}\n\n\n\n//# sourceURL=webpack://tomato/./src/client/js/api.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/api.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;