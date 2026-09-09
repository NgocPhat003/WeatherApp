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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Merriweather-Regular.woff2 */ \"./src/fonts/Merriweather-Regular.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Merriweather-Regular.woff */ \"./src/fonts/Merriweather-Regular.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\r\n  font-family: \"Merriweather\";\r\n  src:\r\n    url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format(\"woff2\"),\r\n    url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format(\"woff\");\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  font-display: swap;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weatherapp/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js"
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
(module) {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weatherapp/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/fonts/Merriweather-Regular.woff"
/*!*********************************************!*\
  !*** ./src/fonts/Merriweather-Regular.woff ***!
  \*********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"cdda3acfdfd6c64aec06.woff\";\n\n//# sourceURL=webpack://weatherapp/./src/fonts/Merriweather-Regular.woff?\n}");

/***/ },

/***/ "./src/fonts/Merriweather-Regular.woff2"
/*!**********************************************!*\
  !*** ./src/fonts/Merriweather-Regular.woff2 ***!
  \**********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"ad7ae59d652d4f430db6.woff2\";\n\n//# sourceURL=webpack://weatherapp/./src/fonts/Merriweather-Regular.woff2?\n}");

/***/ },

/***/ "./static/ClearDayIcon.svg"
/*!*********************************!*\
  !*** ./static/ClearDayIcon.svg ***!
  \*********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"0341c0b24f0ea0f665fc.svg\";\n\n//# sourceURL=webpack://weatherapp/./static/ClearDayIcon.svg?\n}");

/***/ },

/***/ "./static/ClearNightIcon.svg"
/*!***********************************!*\
  !*** ./static/ClearNightIcon.svg ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"5fab0d507be9b7cf7126.svg\";\n\n//# sourceURL=webpack://weatherapp/./static/ClearNightIcon.svg?\n}");

/***/ },

/***/ "./static/CloudyIcon.svg"
/*!*******************************!*\
  !*** ./static/CloudyIcon.svg ***!
  \*******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"aaa8597a5e318aaf5303.svg\";\n\n//# sourceURL=webpack://weatherapp/./static/CloudyIcon.svg?\n}");

/***/ },

/***/ "./static/FogIcon.svg"
/*!****************************!*\
  !*** ./static/FogIcon.svg ***!
  \****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"46d5e5cf189c46606f1d.svg\";\n\n//# sourceURL=webpack://weatherapp/./static/FogIcon.svg?\n}");

/***/ },

/***/ "./static/PartlyCloudyDayIcon.svg"
/*!****************************************!*\
  !*** ./static/PartlyCloudyDayIcon.svg ***!
  \****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"3668b3138d0715860ade.svg\";\n\n//# sourceURL=webpack://weatherapp/./static/PartlyCloudyDayIcon.svg?\n}");

/***/ },

/***/ "./static/PartlyCloudyNightIcon.svg"
/*!******************************************!*\
  !*** ./static/PartlyCloudyNightIcon.svg ***!
  \******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"f9b17d0c150ba0c60cb6.svg\";\n\n//# sourceURL=webpack://weatherapp/./static/PartlyCloudyNightIcon.svg?\n}");

/***/ },

/***/ "./static/RainIcon.svg"
/*!*****************************!*\
  !*** ./static/RainIcon.svg ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"8584df0f2359335b4595.svg\";\n\n//# sourceURL=webpack://weatherapp/./static/RainIcon.svg?\n}");

/***/ },

/***/ "./static/SnowIcon.svg"
/*!*****************************!*\
  !*** ./static/SnowIcon.svg ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"6058cf3a746fed7091e6.svg\";\n\n//# sourceURL=webpack://weatherapp/./static/SnowIcon.svg?\n}");

/***/ },

/***/ "./static/WindIcon.svg"
/*!*****************************!*\
  !*** ./static/WindIcon.svg ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"d23605c71700ff30e3ff.svg\";\n\n//# sourceURL=webpack://weatherapp/./static/WindIcon.svg?\n}");

/***/ },

/***/ "./static/search.svg"
/*!***************************!*\
  !*** ./static/search.svg ***!
  \***************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"4b9c798c25a34b6b5659.svg\";\n\n//# sourceURL=webpack://weatherapp/./static/search.svg?\n}");

/***/ },

/***/ "./src/controller.js"
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleSubmit: () => (/* binding */ handleSubmit)\n/* harmony export */ });\n/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model.js */ \"./src/model.js\");\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ \"./src/display.js\");\n\r\n\r\n\r\n\r\n// declare a global variable weatherData to be accessed by other event handlers\r\nlet weatherData;\r\nlet tempMeasurement = \"metric\";\r\nlet index = 0;\r\n\r\nconst handleSubmit = () => {\r\n  document.addEventListener(\"submit\", (e) => {\r\n    e.preventDefault();\r\n    if (e.target.id === \"mainForm\") {\r\n      const location = document.querySelector(\"input\").value;\r\n      (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.openLoadingView)(document.querySelector(\"body\"));\r\n      (async () => {\r\n        try {\r\n          weatherData = await (0,_model_js__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(location, tempMeasurement);\r\n          console.log(\r\n            `location: ${JSON.stringify(weatherData.resolvedAddress)}`,\r\n          );\r\n          console.log(\"data: \" + JSON.stringify(weatherData));\r\n\r\n          (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.loadInformationView)(\r\n            document.querySelector(\"#mainLower\"),\r\n            weatherData,\r\n            tempMeasurement,\r\n          );\r\n        } catch (error) {\r\n          console.log(\"error: \" + error);\r\n          (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.loadErrorView)(document.querySelector(\"#mainLower\"), location);\r\n        }\r\n        ;(0,_display_js__WEBPACK_IMPORTED_MODULE_1__.closeLoadingView)();\r\n      })();\r\n    }\r\n  });\r\n\r\n  document.addEventListener(\"click\", (e) => {\r\n    if (e.target.classList.contains(\"clickableComponents\")) {\r\n      index = e.target.id;\r\n      (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.loadUpperRow)(\r\n        document.querySelector(\"#lowerUpperRow\"),\r\n        weatherData,\r\n        tempMeasurement,\r\n        index,\r\n      );\r\n\r\n      (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.loadLowerRow)(\r\n        document.querySelector(\"#lowerLowerRow\"),\r\n        weatherData,\r\n        tempMeasurement,\r\n        index,\r\n      );\r\n    } else if (e.target.id == \"tempButton\") {\r\n      if (tempMeasurement === \"metric\") {\r\n        tempMeasurement = \"us\";\r\n        (0,_model_js__WEBPACK_IMPORTED_MODULE_0__.convertToFarenheit)(weatherData.days);\r\n      } else {\r\n        tempMeasurement = \"metric\";\r\n        (0,_model_js__WEBPACK_IMPORTED_MODULE_0__.convertToCelcius)(weatherData.days);\r\n      }\r\n\r\n      ;(0,_display_js__WEBPACK_IMPORTED_MODULE_1__.loadUpperRow)(\r\n        document.querySelector(\"#lowerUpperRow\"),\r\n        weatherData,\r\n        tempMeasurement,\r\n        index,\r\n      );\r\n\r\n      (0,_display_js__WEBPACK_IMPORTED_MODULE_1__.loadLowerRow)(\r\n        document.querySelector(\"#lowerLowerRow\"),\r\n        weatherData,\r\n        tempMeasurement,\r\n        index,\r\n      );\r\n    }\r\n  });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://weatherapp/./src/controller.js?\n}");

/***/ },

/***/ "./src/display.js"
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeLoadingView: () => (/* binding */ closeLoadingView),\n/* harmony export */   loadErrorView: () => (/* binding */ loadErrorView),\n/* harmony export */   loadInformationView: () => (/* binding */ loadInformationView),\n/* harmony export */   loadLowerRow: () => (/* binding */ loadLowerRow),\n/* harmony export */   loadMainUpper: () => (/* binding */ loadMainUpper),\n/* harmony export */   loadUpperRow: () => (/* binding */ loadUpperRow),\n/* harmony export */   openLoadingView: () => (/* binding */ openLoadingView)\n/* harmony export */ });\n/* harmony import */ var _static_search_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../static/search.svg */ \"./static/search.svg\");\n/* harmony import */ var _static_ClearDayIcon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static/ClearDayIcon.svg */ \"./static/ClearDayIcon.svg\");\n/* harmony import */ var _static_ClearNightIcon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/ClearNightIcon.svg */ \"./static/ClearNightIcon.svg\");\n/* harmony import */ var _static_PartlyCloudyDayIcon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/PartlyCloudyDayIcon.svg */ \"./static/PartlyCloudyDayIcon.svg\");\n/* harmony import */ var _static_PartlyCloudyNightIcon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/PartlyCloudyNightIcon.svg */ \"./static/PartlyCloudyNightIcon.svg\");\n/* harmony import */ var _static_CloudyIcon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/CloudyIcon.svg */ \"./static/CloudyIcon.svg\");\n/* harmony import */ var _static_WindIcon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/WindIcon.svg */ \"./static/WindIcon.svg\");\n/* harmony import */ var _static_RainIcon_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/RainIcon.svg */ \"./static/RainIcon.svg\");\n/* harmony import */ var _static_FogIcon_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static/FogIcon.svg */ \"./static/FogIcon.svg\");\n/* harmony import */ var _static_SnowIcon_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static/SnowIcon.svg */ \"./static/SnowIcon.svg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst loadMainUpper = (upperMain) => {\r\n    const header = document.createElement(\"div\");\r\n    const sky = document.createElement(\"span\");\r\n    const track = document.createElement(\"span\");\r\n    sky.textContent = \"Sky\";\r\n    track.textContent = \"Track\";\r\n    header.classList.add(\"header\");\r\n    sky.classList.add(\"highlighted\");\r\n\r\n    header.appendChild(sky);\r\n    header.appendChild(track);\r\n\r\n    const form = document.createElement(\"form\");\r\n    form.id = \"mainForm\";\r\n    const input = document.createElement(\"input\");\r\n    input.id = \"formInput\";\r\n    input.type = \"text\";\r\n    input.autocomplete = \"off\";\r\n    input.placeholder = \"search for a location...\";\r\n    const button = document.createElement(\"button\");\r\n    button.type = \"submit\";\r\n    button.classList.add(\"submitBtn\");\r\n    const buttonImg = document.createElement('img');\r\n    buttonImg.id = \"searchImg\";\r\n    buttonImg.src = _static_search_svg__WEBPACK_IMPORTED_MODULE_0__;\r\n    button.appendChild(buttonImg);\r\n\r\n    form.appendChild(input);\r\n    form.appendChild(button);\r\n\r\n    upperMain.appendChild(header);\r\n    upperMain.appendChild(form);\r\n};\r\n\r\nconst openLoadingView = (body) => {\r\n  const loadingScreen = document.createElement(\"div\");\r\n  loadingScreen.id = \"loadingScreen\";\r\n  const loadingIcon = document.createElement(\"div\");\r\n  loadingIcon.id = \"loadingIcon\";\r\n  loadingScreen.appendChild(loadingIcon);\r\n  body.appendChild(loadingScreen);\r\n};\r\n\r\nconst closeLoadingView = () => {\r\n  const loadingScreen = document.querySelector(\"#loadingScreen\");\r\n\r\n  if (loadingScreen != Null) loadingScreen.remove();\r\n};\r\n\r\nconst loadErrorView = (lowerMain, value) => {\r\n  lowerMain.replaceChildren();\r\n  const errorMessage = document.createElement(\"div\");\r\n  errorMessage.classList.add(\"errorMessage\");\r\n  errorMessage.textContent = `Unable to find weather data for \"${value}\"`;\r\n  lowerMain.appendChild(errorMessage);\r\n\r\n  if (!lowerMain.classList.contains(\"active\"))\r\n    lowerMain.classList.add(\"active\");\r\n};\r\n\r\nconst loadInformationView = (lowerMain, weatherData, tempMeasurement) => {\r\n  // load upper row\r\n  lowerMain.replaceChildren();\r\n  const upperRow = document.createElement(\"div\");\r\n  upperRow.id = \"lowerUpperRow\";\r\n  loadUpperRow(upperRow, weatherData, tempMeasurement, 0);\r\n\r\n  lowerMain.appendChild(upperRow);\r\n\r\n  // load lower row\r\n  const lowerRow = document.createElement(\"div\");\r\n  lowerRow.id = \"lowerLowerRow\";\r\n  loadLowerRow(lowerRow, weatherData, tempMeasurement, 0);\r\n\r\n  lowerMain.appendChild(lowerRow);\r\n\r\n  if (!lowerMain.classList.contains(\"active\"))\r\n    lowerMain.classList.add(\"active\");\r\n};\r\n\r\nconst loadUpperRow = (upperRow, weatherData, tempMeasurement, index) => {\r\n  upperRow.replaceChildren();\r\n  const todayInfo = document.createElement(\"div\");\r\n  todayInfo.classList.add(\"infoComponent\");\r\n\r\n  loadTempBtn(upperRow, tempMeasurement);\r\n\r\n  const locationLabel = document.createElement(\"p\");\r\n  locationLabel.classList.add(\"subHeader\");\r\n  const location = weatherData.resolvedAddress;\r\n  locationLabel.textContent =\r\n    location.charAt(0).toUpperCase() + location.slice(1);\r\n  todayInfo.appendChild(locationLabel);\r\n\r\n  const iconTempLabel = document.createElement(\"div\");\r\n  iconTempLabel.classList.add(\"iconTempLabel\");\r\n\r\n  const iconImg = document.createElement(\"img\");\r\n  iconImg.classList.add(\"mainIcon\");\r\n  iconImg.src = iconify(weatherData.days[index].icon);\r\n  iconTempLabel.appendChild(iconImg)\r\n  \r\n  const tempLabel = document.createElement(\"p\");\r\n  tempLabel.classList.add(\"mainTemp\");\r\n  tempLabel.textContent =\r\n    weatherData.days[index].temp + tempStringify(tempMeasurement);\r\n  iconTempLabel.appendChild(tempLabel);\r\n\r\n  const dayWeatherLabel = document.createElement(\"p\");\r\n  dayWeatherLabel.classList.add(\"dayWeatherLabel\");\r\n  const todayValue = new Date(weatherData.days[index].datetime);\r\n  dayWeatherLabel.textContent = `${dayStringify(todayValue.getDay())} | ${weatherData.days[index].conditions}`;\r\n\r\n  todayInfo.appendChild(locationLabel);\r\n  todayInfo.appendChild(iconTempLabel);\r\n  todayInfo.appendChild(dayWeatherLabel);\r\n\r\n  upperRow.appendChild(todayInfo);\r\n};\r\n\r\nconst loadLowerRow = (lowerRow, weatherData, tempMeasurement, index) => {\r\n  lowerRow.replaceChildren();\r\n  const fiveDayForecastContainer = document.createElement('div');\r\n  fiveDayForecastContainer.id = \"fiveDayForecastContainer\";\r\n  const fiveDayForecastHeader = document.createElement(\"p\");\r\n  fiveDayForecastHeader.classList.add(\"subHeader\");\r\n  fiveDayForecastHeader.textContent = \"6 days Forecast\";\r\n  const fiveDayForecastElements = document.createElement(\"div\");\r\n  fiveDayForecastElements.id = \"lowerInfoContainer\";\r\n  populateFiveDays(fiveDayForecastElements, weatherData, tempMeasurement);\r\n  fiveDayForecastContainer.appendChild(fiveDayForecastHeader);\r\n  fiveDayForecastElements.appendChild(fiveDayForecastElements);\r\n\r\n  const highlightContainer = document.createElement(\"div\");\r\n  highlightContainer.id = \"highlightContainer\";\r\n  const highlightHeader = document.createElement(\"p\");\r\n  highlightHeader.classList.add(\"subHeader\");\r\n  highlightHeader.textContent = \"Highlights:\";\r\n  const highlightStatsContainer = document.createElement(\"div\");\r\n  const precipitation = document.createElement(\"p\");\r\n  precipitation.textContent = `Precipitation: ${weatherData.days[index].precip}%`;\r\n  const humidity = document.createElement(\"p\");\r\n  humidity.textContent = `Humidity: ${weatherData.days[index].humidity}%`;\r\n  const windspeed = document.createElement(\"p\");\r\n  windspeed.textContent = `Windspeed: ${weatherData.days[index].windspeed}km/h`;\r\n  highlightStatsContainer.appendChild(precipitation);\r\n  highlightStatsContainer.appendChild(humidity);\r\n  highlightStatsContainer.appendChild(windspeed);\r\n  highlightContainer.appendChild(highlightHeader);\r\n  highlightContainer.appendChild(highlightStatsContainer);\r\n\r\n  lowerRow.appendChild(fiveDayForecastContainer);\r\n  lowerRow.appendChild(highlightContainer);\r\n};\r\nconst loadTempBtn = (upperRow, tempMeasurement) => {\r\n  const btn = document.createElement(\"button\");\r\n  btn.id = \"tempButton\";\r\n  btn.textContent = tempStringify(tempMeasurement);\r\n  upperRow.appendChild(btn);\r\n};\r\n\r\nconst populateFiveDays = (mainContainer, weatherData, tempMeasurement) => {\r\n  const forecast = 5;\r\n  for (let i = 0; i <= forecast; i++) {\r\n    const component = document.createElement(\"div\");\r\n    component.classList.add(\"infoComponent\");\r\n    component.classList.add(\"clickableComponents\");\r\n    component.id = i;\r\n\r\n    const day = document.createElement(\"p\");\r\n    const todayValue = new Date(weatherData.days[i].datetime);\r\n    day.textContent = `${dayStringify(todayValue.getDay())}`;\r\n    component.appendChild(day);\r\n\r\n    const icon = document.createElement(\"img\");\r\n    icon.src = iconify(weatherData.days[i].icon);\r\n    component.appendChild(icon);\r\n\r\n    const temp = document.createElement(\"p\");\r\n    temp.textContent =\r\n      weatherData.days[i].temp + tempStringify(tempMeasurement);\r\n    component.appendChild(temp);\r\n\r\n    mainContainer.appendChild(component);\r\n  }\r\n};\r\n\r\nconst iconify = (iconCode) => {\r\n  switch (iconCode) {\r\n    case \"clear-day\":\r\n      return _static_ClearDayIcon_svg__WEBPACK_IMPORTED_MODULE_1__;\r\n    case \"clear-night\":\r\n      return _static_ClearNightIcon_svg__WEBPACK_IMPORTED_MODULE_2__;\r\n    case \"partly-cloudy-day\":\r\n      return _static_PartlyCloudyDayIcon_svg__WEBPACK_IMPORTED_MODULE_3__;\r\n    case \"partly-cloudy-night\":\r\n      return _static_PartlyCloudyNightIcon_svg__WEBPACK_IMPORTED_MODULE_4__;\r\n    case \"cloudy\":\r\n      return _static_CloudyIcon_svg__WEBPACK_IMPORTED_MODULE_5__;\r\n    case \"rain\":\r\n      return _static_RainIcon_svg__WEBPACK_IMPORTED_MODULE_7__;\r\n    case \"snow\":\r\n      return _static_SnowIcon_svg__WEBPACK_IMPORTED_MODULE_9__;\r\n    case \"fog\":\r\n      return _static_FogIcon_svg__WEBPACK_IMPORTED_MODULE_8__;\r\n    case \"wind\":\r\n      return _static_WindIcon_svg__WEBPACK_IMPORTED_MODULE_6__;\r\n    default:\r\n      return _static_ClearDayIcon_svg__WEBPACK_IMPORTED_MODULE_1__;\r\n  }\r\n};\r\n\r\nconst tempStringify = (tempMeasurement) => {\r\n  switch (tempMeasurement) {\r\n    case \"metric\":\r\n      return \"°C\";\r\n    default:\r\n      return \"°F\";\r\n  }\r\n};\r\n\r\nconst dayStringify = (numDay) => {\r\n  switch (numDay) {\r\n    case 0:\r\n      return \"Sunday\";\r\n    case 1:\r\n      return \"Monday\";\r\n    case 2:\r\n      return \"Tuesday\";\r\n    case 3:\r\n      return \"Wednesday\";\r\n    case 4:\r\n      return \"Thursday\";\r\n    case 5:\r\n      return \"Friday\";\r\n    default:\r\n      return \"Saturday\";\r\n  }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://weatherapp/./src/display.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ \"./src/display.js\");\n/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller.js */ \"./src/controller.js\");\n\r\n\r\n\r\n\r\n(0,_display_js__WEBPACK_IMPORTED_MODULE_1__.loadMainUpper)(document.querySelector(\"#mainUpper\"));\r\n\r\n(0,_controller_js__WEBPACK_IMPORTED_MODULE_2__.handleSubmit)();\n\n//# sourceURL=webpack://weatherapp/./src/index.js?\n}");

/***/ },

/***/ "./src/model.js"
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   convertToCelcius: () => (/* binding */ convertToCelcius),\n/* harmony export */   convertToFarenheit: () => (/* binding */ convertToFarenheit),\n/* harmony export */   getWeatherData: () => (/* binding */ getWeatherData)\n/* harmony export */ });\nconst getWeatherData = async (location, tempMeasurement) => {\r\n    const response = await fetch(\r\n        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next5days?unitGroup=${tempMeasurement}&key=S5TGJ858R683JZX54HDUDQ6JN&include=days&elements=datetime,temp,precip,humidity,windspeed,conditions,icon`,\r\n    );\r\n\r\n    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);\r\n    \r\n    const weatherData = await response.json();\r\n    return weatherData;\r\n};\r\n\r\nconst convertToCelcius = (days) => {\r\n    days.forEach((day) => {\r\n        const celcius = (day.temp - 32) / 1.8;\r\n        day.temp = celcius.toFixed(1);\r\n    });\r\n};\r\n\r\nconst convertToFarenheit = (days) => {\r\n    days.forEach((day) => {\r\n        const farenheit = (day.temp - 32) / 1.8;\r\n        day.temp = farenheit.toFixed(1);\r\n    });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://weatherapp/./src/model.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		const installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;