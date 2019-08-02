/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ \"@babel/polyfill\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\n/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _typeDefs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./typeDefs */ \"./src/typeDefs/index.js\");\n/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolvers */ \"./src/resolvers/index.js\");\n\n\n\n\n\nvar server = new apollo_server_express__WEBPACK_IMPORTED_MODULE_2__[\"ApolloServer\"]({\n  typeDefs: _typeDefs__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n});\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\nserver.applyMiddleware({\n  app: app\n});\napp.listen({\n  port: 4000\n}, function () {\n  return console.log(\"\\uD83D\\uDE80 Server ready at http://localhost:4000\".concat(server.graphqlPath));\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/resolvers/Lead.js":
/*!*******************************!*\
  !*** ./src/resolvers/Lead.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\n/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_crawler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/crawler */ \"./src/utils/crawler.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Query: {\n    findLeads: function () {\n      var _findLeads = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee(root, _ref, context, info) {\n        var service, lastName, zipCode, state, city, _ref$pagesToCrawl, pagesToCrawl;\n\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                service = _ref.service, lastName = _ref.lastName, zipCode = _ref.zipCode, state = _ref.state, city = _ref.city, _ref$pagesToCrawl = _ref.pagesToCrawl, pagesToCrawl = _ref$pagesToCrawl === void 0 ? 10 : _ref$pagesToCrawl;\n                _context.prev = 1;\n                return _context.abrupt(\"return\", Object(_utils_crawler__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(service, lastName, zipCode, state, city, pagesToCrawl));\n\n              case 5:\n                _context.prev = 5;\n                _context.t0 = _context[\"catch\"](1);\n                throw new apollo_server_express__WEBPACK_IMPORTED_MODULE_0__[\"ApolloError\"](_context.t0);\n\n              case 8:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[1, 5]]);\n      }));\n\n      function findLeads(_x, _x2, _x3, _x4) {\n        return _findLeads.apply(this, arguments);\n      }\n\n      return findLeads;\n    }()\n  }\n});\n\n//# sourceURL=webpack:///./src/resolvers/Lead.js?");

/***/ }),

/***/ "./src/resolvers/index.js":
/*!********************************!*\
  !*** ./src/resolvers/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Lead__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lead */ \"./src/resolvers/Lead.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([_Lead__WEBPACK_IMPORTED_MODULE_0__[\"default\"]]);\n\n//# sourceURL=webpack:///./src/resolvers/index.js?");

/***/ }),

/***/ "./src/typeDefs/Lead.js":
/*!******************************!*\
  !*** ./src/typeDefs/Lead.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\n/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n    type Lead {\\n      adName: String\\n      adLink: String\\n      adPhones: [String]\\n    }\\n\\n    extend type Query {\\n      findLeads(\\n        service: String\\n        lastName: String\\n        zipCode: Int\\n        state: String\\n        city: String\\n        pagesToCrawl: Int\\n      ): [Lead]\\n    }\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__[\"gql\"])(_templateObject()));\n\n//# sourceURL=webpack:///./src/typeDefs/Lead.js?");

/***/ }),

/***/ "./src/typeDefs/Root.js":
/*!******************************!*\
  !*** ./src/typeDefs/Root.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\n/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n    type Query {\\n      _: String\\n    }\\n    type Mutation {\\n      _: String\\n    }\\n    type Subscription {\\n      _: String\\n    }\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__[\"gql\"])(_templateObject()));\n\n//# sourceURL=webpack:///./src/typeDefs/Root.js?");

/***/ }),

/***/ "./src/typeDefs/index.js":
/*!*******************************!*\
  !*** ./src/typeDefs/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Root */ \"./src/typeDefs/Root.js\");\n/* harmony import */ var _Lead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Lead */ \"./src/typeDefs/Lead.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([_Lead__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _Root__WEBPACK_IMPORTED_MODULE_0__[\"default\"]]);\n\n//# sourceURL=webpack:///./src/typeDefs/index.js?");

/***/ }),

/***/ "./src/utils/crawler.js":
/*!******************************!*\
  !*** ./src/utils/crawler.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var puppeteer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! puppeteer */ \"puppeteer\");\n/* harmony import */ var puppeteer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(puppeteer__WEBPACK_IMPORTED_MODULE_0__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/(function () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(service, lastName, zipCode, state, city, pagesToCrawl) {\n    var browser, page, ArrayString, finalArray, query, currentIteration, allLeads, adsData, _final, completeItems, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, x, completeData;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return puppeteer__WEBPACK_IMPORTED_MODULE_0___default.a.launch({\n              headless: false,\n              slowMo: 200\n            });\n\n          case 2:\n            browser = _context.sent;\n            _context.next = 5;\n            return browser.newPage();\n\n          case 5:\n            page = _context.sent;\n            _context.prev = 6;\n            // check what parameters were sent and build string\n            ArrayString = [service, lastName, zipCode, state, city];\n            finalArray = [];\n            ArrayString.filter(function (el) {\n              if (el != null) {\n                finalArray.push(el);\n              }\n            });\n            query = finalArray.join('+');\n            currentIteration = 0;\n            allLeads = []; // console.log(query)\n\n            _context.next = 15;\n            return page[\"goto\"](\"https://www.google.com/search?q=\".concat(query));\n\n          case 15:\n            _context.next = 17;\n            return page.waitForSelector('#navcnt');\n\n          case 17:\n            if (!(currentIteration < pagesToCrawl)) {\n              _context.next = 27;\n              break;\n            }\n\n            _context.next = 20;\n            return page.evaluate(function () {\n              var ads = []; // get the ads elements\n\n              var adsElms = document.querySelectorAll('li.ads-ad'); // get the hotel data\n\n              adsElms.forEach(function main(adElement) {\n                var adJson = {};\n\n                try {\n                  adJson.adName = adElement.querySelector('a h3').innerText;\n                  adJson.adLink = adElement.querySelector('a.V0MxL').getAttribute('href');\n                } catch (e) {\n                  console.log(e);\n                }\n\n                ads.push(adJson);\n              });\n              return ads;\n            });\n\n          case 20:\n            adsData = _context.sent;\n            // push to master array\n            allLeads.push.apply(allLeads, _toConsumableArray(adsData)); // Click next page\n\n            _context.next = 24;\n            return Promise.all([page.click('.cur+td > a'), page.waitForNavigation()]);\n\n          case 24:\n            // increase the iterator\n            currentIteration++;\n            _context.next = 17;\n            break;\n\n          case 27:\n            // console.log(allLeads)\n            // Curate results\n            _final = allLeads.reduce(function (x, _ref2) {\n              var adLink = _ref2.adLink,\n                  adName = _ref2.adName;\n              var domain = adLink.match(/(:\\/\\/)([^/]*)\\//);\n              domain = domain ? domain[2] : adLink;\n\n              if (!x.find(function (u) {\n                return u.adLink.includes(domain);\n              })) {\n                x.push({\n                  adLink: adLink,\n                  adName: adName\n                });\n              }\n\n              return x;\n            }, []);\n            completeItems = [];\n            _iteratorNormalCompletion = true;\n            _didIteratorError = false;\n            _iteratorError = undefined;\n            _context.prev = 32;\n            _iterator = _final[Symbol.iterator]();\n\n          case 34:\n            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {\n              _context.next = 46;\n              break;\n            }\n\n            x = _step.value;\n\n            if (!(!x.adLink.includes('googleadservices') && x.adLink.includes('www'))) {\n              _context.next = 43;\n              break;\n            }\n\n            _context.next = 39;\n            return page[\"goto\"](x.adLink);\n\n          case 39:\n            _context.next = 41;\n            return page.evaluate(function () {\n              var phoneRegex = /\\(?([0-9]{3})\\)?([ -]?)([0-9]{3})([ -])([0-9]{4})/;\n              var phones = [];\n              var phoneArray = Array.from(document.querySelectorAll('*'));\n\n              for (var _i = 0, _phoneArray = phoneArray; _i < _phoneArray.length; _i++) {\n                var l = _phoneArray[_i];\n\n                if (l && l.innerText && l.innerText.match(phoneRegex)) {\n                  phones.push(phoneRegex.exec(l.innerText)[0].toString());\n                }\n              }\n\n              var filtered = function filtered(y) {\n                return y.filter(function (v, i) {\n                  return y.indexOf(v) === i;\n                });\n              };\n\n              return filtered(phones);\n            });\n\n          case 41:\n            completeData = _context.sent;\n            completeItems.push({\n              adLink: x.adLink,\n              adPhones: completeData,\n              adName: x.adName\n            });\n\n          case 43:\n            _iteratorNormalCompletion = true;\n            _context.next = 34;\n            break;\n\n          case 46:\n            _context.next = 52;\n            break;\n\n          case 48:\n            _context.prev = 48;\n            _context.t0 = _context[\"catch\"](32);\n            _didIteratorError = true;\n            _iteratorError = _context.t0;\n\n          case 52:\n            _context.prev = 52;\n            _context.prev = 53;\n\n            if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n              _iterator[\"return\"]();\n            }\n\n          case 55:\n            _context.prev = 55;\n\n            if (!_didIteratorError) {\n              _context.next = 58;\n              break;\n            }\n\n            throw _iteratorError;\n\n          case 58:\n            return _context.finish(55);\n\n          case 59:\n            return _context.finish(52);\n\n          case 60:\n            _context.next = 62;\n            return page.close();\n\n          case 62:\n            _context.next = 64;\n            return browser.close();\n\n          case 64:\n            return _context.abrupt(\"return\", completeItems);\n\n          case 67:\n            _context.prev = 67;\n            _context.t1 = _context[\"catch\"](6);\n            console.log(_context.t1);\n            _context.next = 72;\n            return page.close();\n\n          case 72:\n            _context.next = 74;\n            return browser.close();\n\n          case 74:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[6, 67], [32, 48, 52, 60], [53,, 55, 59]]);\n  }));\n\n  return function (_x, _x2, _x3, _x4, _x5, _x6) {\n    return _ref.apply(this, arguments);\n  };\n})());\n\n//# sourceURL=webpack:///./src/utils/crawler.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-server-express\");\n\n//# sourceURL=webpack:///external_%22apollo-server-express%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "puppeteer":
/*!****************************!*\
  !*** external "puppeteer" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"puppeteer\");\n\n//# sourceURL=webpack:///external_%22puppeteer%22?");

/***/ })

/******/ });