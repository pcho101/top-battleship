/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".grid {\\n  display: grid;\\n  grid-template-rows: repeat(10, 1fr);\\n  grid-template-columns: repeat(10, 1fr);\\n  width: 250px;\\n  height: 250px;\\n}\\n\\n.cell {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  border: 1px dotted red;\\n}\\n\\n.preview-good {\\n  background-color: green;\\n}\\n\\n.preview-bad {\\n  background-color: yellow;\\n}\\n\\n.hit {\\n  background-color: red;\\n}\\n\\n.miss {\\n  background-color: blue;\\n}\\n\\n.modal {\\n  display: none;\\n  position: fixed;\\n  z-index: 1;\\n  padding-top: 40vh;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  overflow: auto;\\n  background-color: rgb(0, 0, 0);\\n  background-color: rgba(0, 0, 0, 0.4);\\n}\\n\\n.modal-content {\\n  margin: auto;\\n  padding: 20px;\\n  text-align: center;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://top-battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearGrid\": () => (/* binding */ clearGrid),\n/* harmony export */   \"createGrid\": () => (/* binding */ createGrid),\n/* harmony export */   \"endGame\": () => (/* binding */ endGame),\n/* harmony export */   \"hideEnemyShips\": () => (/* binding */ hideEnemyShips),\n/* harmony export */   \"hidePlayerShips\": () => (/* binding */ hidePlayerShips),\n/* harmony export */   \"nextTurn\": () => (/* binding */ nextTurn),\n/* harmony export */   \"ready\": () => (/* binding */ ready),\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"showEnemyShips\": () => (/* binding */ showEnemyShips),\n/* harmony export */   \"showPlayerShips\": () => (/* binding */ showPlayerShips),\n/* harmony export */   \"showPlayersReady\": () => (/* binding */ showPlayersReady),\n/* harmony export */   \"showShipCount\": () => (/* binding */ showShipCount),\n/* harmony export */   \"update\": () => (/* binding */ update)\n/* harmony export */ });\nconst createGrid = (board) => {\n  const grid = document.createElement('div');\n  grid.classList.add('grid');\n  for (let i = 0; i < board.length; i++) {\n    for (let j = 0; j < board[0].length; j++) {\n      const cell = document.createElement('div');\n      cell.classList.add('cell');\n      cell.textContent = '-';\n      grid.appendChild(cell);\n    }\n  }\n  return grid;\n};\n\nconst render = (playerBoard, enemyBoard) => {\n  const player = document.querySelector('.player .game-grid');\n  const enemy = document.querySelector('.enemy .game-grid');\n\n  const playerGrid = createGrid(playerBoard);\n  const enemyGrid = createGrid(enemyBoard);\n  playerGrid.classList.add('player-grid');\n  enemyGrid.classList.add('enemy-grid');\n\n  player.replaceChild(playerGrid, player.childNodes[0]);\n  enemy.replaceChild(enemyGrid, enemy.childNodes[0]);\n};\n\nconst update = (board, isFirstPlayer) => {\n  const grid = isFirstPlayer ? document.querySelector('.player-grid') : document.querySelector('.enemy-grid');\n  for (let i = 0; i < board.length; i++) {\n    for (let j = 0; j < board[0].length; j++) {\n      if (board[i][j] > 1) {\n        if (board[i][j] === 3) {\n          grid.children[i * 10 + j].classList.add('hit');\n        } else {\n          grid.children[i * 10 + j].classList.add('miss');\n        }\n      }\n    }\n  }\n};\n\nconst endGame = () => {\n  const gameDisplay = document.querySelector('.game-display');\n  gameDisplay.textContent = 'Game Over';\n};\n\nconst nextTurn = (turn) => {\n  const gameDisplay = document.querySelector('.game-display');\n  gameDisplay.textContent = turn ? 'Enemy turn' : 'Player turn';\n};\n\nconst showShipCount = (shipCount, maxShips, isFirstPlayer) => {\n  const gameDisplay = isFirstPlayer ? document.querySelector('.player .game-display') : document.querySelector('.enemy .game-display');\n  gameDisplay.textContent = `${maxShips - shipCount} ships remaining`;\n};\n\nconst showPlayerShips = (board) => {\n  const grid = document.querySelector('.player-grid');\n  for (let i = 0; i < board.length; i++) {\n    for (let j = 0; j < board[0].length; j++) {\n      if (board[i][j] === 1) {\n        grid.children[i * 10 + j].classList.add('preview-good');\n      }\n    }\n  }\n};\n\nconst showEnemyShips = (board) => {\n  const grid = document.querySelector('.enemy-grid');\n  for (let i = 0; i < board.length; i++) {\n    for (let j = 0; j < board[0].length; j++) {\n      if (board[i][j] === 1) {\n        grid.children[i * 10 + j].classList.add('preview-good');\n      }\n    }\n  }\n};\n\nconst clearGrid = (board, isFirstPlayer) => {\n  const grid = isFirstPlayer ? document.querySelector('.player-grid') : document.querySelector('.enemy-grid');\n  for (let i = 0; i < board.length; i++) {\n    for (let j = 0; j < board[0].length; j++) {\n      grid.children[i * 10 + j].classList.remove('preview-good');\n    }\n  }\n};\n\nconst ready = (isFirstPlayer) => {\n  const gameDisplay = isFirstPlayer ? document.querySelector('.player .game-display') : document.querySelector('.enemy .game-display');\n  gameDisplay.textContent = 'ready to start';\n};\n\nconst hidePlayerShips = (board) => {\n  const grid = document.querySelector('.player-grid');\n  for (let i = 0; i < board.length; i++) {\n    for (let j = 0; j < board[0].length; j++) {\n      if (board[i][j] === 1) {\n        grid.children[i * 10 + j].classList.remove('preview-good');\n      }\n    }\n  }\n};\n\nconst hideEnemyShips = (board) => {\n  const grid = document.querySelector('.enemy-grid');\n  for (let i = 0; i < board.length; i++) {\n    for (let j = 0; j < board[0].length; j++) {\n      if (board[i][j] === 1) {\n        grid.children[i * 10 + j].classList.remove('preview-good');\n      }\n    }\n  }\n};\n\nconst showPlayersReady = () => {\n  const playerDisplay = document.querySelector('.player .game-display');\n  const enemyDisplay = document.querySelector('.enemy .game-display');\n  playerDisplay.textContent = 'press start to begin';\n  enemyDisplay.textContent = 'press start to begin';\n};\n\n\n\n\n//# sourceURL=webpack://top-battleship/./src/dom.js?");

/***/ }),

/***/ "./src/functions/Gameboard.js":
/*!************************************!*\
  !*** ./src/functions/Gameboard.js ***!
  \************************************/
/***/ ((module) => {

eval("const Gameboard = () => {\n  const board = Array(10);\n  for (let i = 0; i < 10; i++) {\n    board[i] = Array(10).fill(0);\n  }\n  const fleet = [];\n  const getBoard = () => board;\n  const isInBounds = (row, col, len, dir) => {\n    if (dir) {\n      if (row + len - 1 > 9) return false;\n    } else {\n      if (col + len - 1 > 9) return false;\n    }\n    return true;\n  };\n  const isNoConflict = (row, col, len, dir) => {\n    if (dir === 0) {\n      for (let x = col; x < col + len && x < 10; x++) {\n        if (board[row][x]) return false;\n      }\n    } else {\n      for (let y = row; y < row + len && y < 10; y++) {\n        if (board[y][col]) return false;\n      }\n    }\n    return true;\n  };\n  const isValidPlace = (row, col, len, dir) => {\n    const inBounds = isInBounds(row, col, len, dir);\n    const noConflict = isNoConflict(row, col, len, dir);\n    return inBounds && noConflict;\n  };\n  const storeShipCoords = (row, col, ship, dir) => {\n    const coords = [];\n    if (dir === 0) {\n      for (let x = col; x < col + ship.length; x++) {\n        coords.push([row, x]);\n      }\n    } else {\n      for (let y = row; y < row + ship.length; y++) {\n        coords.push([y, col]);\n      }\n    }\n    fleet.push([ship, coords]);\n  };\n  const placeShip = (row, col, ship, dir) => {\n    const len = ship.length;\n    if (!isValidPlace(row, col, len, dir)) return false;\n    storeShipCoords(row, col, ship, dir);\n    if (dir === 0) {\n      for (let x = col; x < col + len; x++) {\n        board[row][x] = 1;\n      }\n    } else {\n      for (let y = row; y < row + len; y++) {\n        board[y][col] = 1;\n      }\n    }\n    return true;\n  };\n  const getHitShip = (row, col) => {\n    for (let i = 0; i < fleet.length; i++) {\n      const coords = fleet[i][1];\n      const ship = fleet[i][0];\n      for (let j = 0; j < coords.length; j++) {\n        if (row === coords[j][0] && col === coords[j][1]) {\n          return ship;\n        }\n      }\n    }\n  };\n  const getHitIndex = (row, col) => {\n    for (let i = 0; i < fleet.length; i++) {\n      const coords = fleet[i][1];\n      for (let j = 0; j < coords.length; j++) {\n        if (row === coords[j][0] && col === coords[j][1]) {\n          return j;\n        }\n      }\n    }\n  };\n  const receiveAttack = (row, col) => {\n    let attackMsg;\n    if (board[row][col]) {\n      attackMsg = 'hit';\n      const hitShip = getHitShip(row, col);\n      const hitIndex = getHitIndex(row, col);\n      hitShip.hit(hitIndex);\n    } else {\n      attackMsg = 'miss';\n    }\n    board[row][col] += 2;\n    return attackMsg;\n  };\n  const shipsAllSunk = () => {\n    for (let i = 0; i < fleet.length; i++) {\n      const ship = fleet[i][0];\n      if (!ship.isSunk()) return false;\n    }\n    return true;\n  };\n  const resetBoard = () => {\n    for (let i = 0; i < 10; i++) {\n      board[i] = Array(10).fill(0);\n    }\n    fleet.length = 0;\n  };\n  return {\n    getBoard, placeShip, receiveAttack, shipsAllSunk, isValidPlace, resetBoard,\n  };\n};\n\nmodule.exports = Gameboard;\n\n\n//# sourceURL=webpack://top-battleship/./src/functions/Gameboard.js?");

/***/ }),

/***/ "./src/functions/Player.js":
/*!*********************************!*\
  !*** ./src/functions/Player.js ***!
  \*********************************/
/***/ ((module) => {

eval("const Player = () => {\n  const shots = Array.from(Array(100).keys());\n  const convert2Dto1D = (row, col) => row * 10 + col;\n  const convert1Dto2D = (val) => [Math.floor(val / 10), val % 10];\n  const attack = (board, row, col) => {\n    const val = convert2Dto1D(row, col);\n    if (!shots.includes(val)) return false;\n    const shot = board.receiveAttack(row, col);\n    const index = shots.indexOf(val);\n    shots.splice(index, 1);\n    return [shot, row, col];\n  };\n  const randAttack = (board) => {\n    if (shots.length === 0) return false;\n    const randIndex = Math.floor(Math.random() * shots.length);\n    const val = shots[randIndex];\n    const convertedVal = convert1Dto2D(val);\n    const row = convertedVal[0];\n    const col = convertedVal[1];\n    return attack(board, row, col);\n  };\n  return {\n    attack, randAttack,\n  };\n};\n\nmodule.exports = Player;\n\n\n//# sourceURL=webpack://top-battleship/./src/functions/Player.js?");

/***/ }),

/***/ "./src/functions/Ship.js":
/*!*******************************!*\
  !*** ./src/functions/Ship.js ***!
  \*******************************/
/***/ ((module) => {

eval("const Ship = (length) => {\n  const shipHits = Array(length).fill(false);\n  const hit = (index) => {\n    shipHits[index] = true;\n  };\n  const isSunk = () => shipHits.every((x) => x === true);\n\n  return {\n    hit, isSunk, length,\n  };\n};\n\nmodule.exports = Ship;\n\n\n//# sourceURL=webpack://top-battleship/./src/functions/Ship.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addButtonListeners\": () => (/* binding */ addButtonListeners),\n/* harmony export */   \"newGame\": () => (/* binding */ newGame)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\nconst Ship = __webpack_require__(/*! ./functions/Ship */ \"./src/functions/Ship.js\");\nconst Player = __webpack_require__(/*! ./functions/Player */ \"./src/functions/Player.js\");\nconst Gameboard = __webpack_require__(/*! ./functions/Gameboard */ \"./src/functions/Gameboard.js\");\n\nconst p1 = {};\nconst p2 = {};\nlet gameMode;\nlet direction;\nlet p1ShipCount;\nlet p2ShipCount;\nlet turn;\nlet gameOver;\nlet maxShips;\nlet shipPlacingPhase;\nlet lastHit;\nconst nextCoords = [];\nlet bothPlayersReady;\n\nconst createPieces = () => {\n  p1.player = Player();\n  p1.board = Gameboard();\n  p1.ships = {\n    s1: Ship(5),\n    s2: Ship(4),\n    s3: Ship(3),\n    s4: Ship(3),\n    s5: Ship(2),\n  };\n\n  p2.player = Player();\n  p2.board = Gameboard();\n  p2.ships = {\n    s1: Ship(5),\n    s2: Ship(4),\n    s3: Ship(3),\n    s4: Ship(3),\n    s5: Ship(2),\n  };\n};\n\nconst getGameMode = () => {\n  const mode = document.querySelector('#auto');\n  gameMode = mode.checked ? 1 : 0;\n  return gameMode;\n};\n\nconst initValues = () => {\n  getGameMode();\n  gameOver = false;\n  turn = 0;\n  direction = 0;\n  p1ShipCount = 0;\n  p2ShipCount = 0;\n  shipPlacingPhase = true;\n  maxShips = Object.keys(p1.ships).length;\n  lastHit = false;\n  nextCoords.length = 0;\n  bothPlayersReady = false;\n};\n\nconst nextp1Ship = (x) => {\n  switch (x) {\n    case 0:\n      return p1.ships.s1;\n    case 1:\n      return p1.ships.s2;\n    case 2:\n      return p1.ships.s3;\n    case 3:\n      return p1.ships.s4;\n    case 4:\n      return p1.ships.s5;\n    default:\n      break;\n  }\n};\n\nconst nextp2Ship = (x) => {\n  switch (x) {\n    case 0:\n      return p2.ships.s1;\n    case 1:\n      return p2.ships.s2;\n    case 2:\n      return p2.ships.s3;\n    case 3:\n      return p2.ships.s4;\n    case 4:\n      return p2.ships.s5;\n    default:\n      break;\n  }\n};\n\nconst getCellCoords = (cell) => {\n  const coords = {};\n\n  coords.parent = cell.parentElement;\n  coords.index = [...coords.parent.children].indexOf(cell);\n  coords.row = Math.floor(coords.index / 10);\n  coords.col = coords.index % 10;\n  if (coords.parent.classList.contains('player-grid')) {\n    coords.player = true;\n  } else {\n    coords.player = false;\n  }\n\n  return coords;\n};\n\nconst checkGameState = (board) => board.shipsAllSunk();\n\nconst nextMove = () => {\n  if (turn === 0) {\n    _dom__WEBPACK_IMPORTED_MODULE_0__.showEnemyShips(p2.board.getBoard());\n  } else {\n    _dom__WEBPACK_IMPORTED_MODULE_0__.showPlayerShips(p1.board.getBoard());\n  }\n  turn = turn ? 0 : 1;\n};\n\nconst modal = document.querySelector('.modal');\n\nconst openModal = () => {\n  modal.style.display = 'block';\n};\n\nconst closeModal = () => {\n  modal.style.display = 'none';\n  nextMove();\n};\n\nmodal.addEventListener('click', closeModal);\n\nconst switchTurns = () => {\n  if (gameMode === 0) {\n    if (turn === 0) {\n      _dom__WEBPACK_IMPORTED_MODULE_0__.hidePlayerShips(p1.board.getBoard());\n      openModal();\n    } else {\n      _dom__WEBPACK_IMPORTED_MODULE_0__.hideEnemyShips(p2.board.getBoard());\n      openModal();\n    }\n  } else {\n    turn = turn ? 0 : 1;\n  }\n};\n\nconst preview = (p, coords, len, state) => {\n  const axis = direction ? coords.row : coords.col;\n  const style = p.board.isValidPlace(coords.row, coords.col, len, direction) ? 'preview-good' : 'preview-bad';\n\n  for (let i = 0; i < len && i + axis < 10; i++) {\n    if (direction) {\n      const cell = coords.parent.children[coords.index + 10 * i];\n      state ? cell.classList.add(`${style}`) : cell.classList.remove(`${style}`);\n    } else {\n      const cell = coords.parent.children[coords.index + i];\n      state ? cell.classList.add(`${style}`) : cell.classList.remove(`${style}`);\n    }\n  }\n};\n\nconst addPreview = (e) => {\n  const coords = getCellCoords(e.target);\n  const nextShip = coords.player ? nextp1Ship(p1ShipCount) : nextp2Ship(p2ShipCount);\n  const len = nextShip.length;\n  const player = coords.player ? p1 : p2;\n  preview(player, coords, len, true);\n};\n\nconst removePreview = (e) => {\n  const coords = getCellCoords(e.target);\n  const nextShip = coords.player ? nextp1Ship(p1ShipCount) : nextp2Ship(p2ShipCount);\n  const len = nextShip.length;\n  const player = coords.player ? p1 : p2;\n  preview(player, coords, len, false);\n};\n\nconst addPreviewListeners = (player) => {\n  let cells;\n  if (player) {\n    cells = document.querySelectorAll('.player-grid .cell');\n  } else {\n    cells = document.querySelectorAll('.enemy-grid .cell');\n  }\n  cells.forEach((cell) => {\n    cell.addEventListener('mouseenter', addPreview);\n    cell.addEventListener('mouseleave', removePreview);\n  });\n};\n\nconst removePreviewListeners = (player) => {\n  let cells;\n  if (player) {\n    cells = document.querySelectorAll('.player-grid .cell');\n  } else {\n    cells = document.querySelectorAll('.enemy-grid .cell');\n  }\n  cells.forEach((cell) => {\n    cell.removeEventListener('mouseenter', addPreview);\n    cell.removeEventListener('mouseleave', removePreview);\n  });\n};\n\nconst rand = (n) => Math.floor(Math.random() * n);\n\nconst p2AutoPlace = () => {\n  while (p2ShipCount < 5) {\n    const nextShip = nextp2Ship(p2ShipCount);\n    const x = rand(10);\n    const y = rand(10);\n    const dir = rand(2);\n    if (p2.board.placeShip(y, x, nextShip, dir)) p2ShipCount++;\n  }\n  _dom__WEBPACK_IMPORTED_MODULE_0__.ready(false);\n  removePreviewListeners(false);\n};\n\nconst p1AutoPlace = () => {\n  while (p1ShipCount < 5) {\n    const nextShip = nextp1Ship(p1ShipCount);\n    const x = rand(10);\n    const y = rand(10);\n    const dir = rand(2);\n    if (p1.board.placeShip(y, x, nextShip, dir)) p1ShipCount++;\n  }\n  _dom__WEBPACK_IMPORTED_MODULE_0__.showPlayerShips(p1.board.getBoard());\n  _dom__WEBPACK_IMPORTED_MODULE_0__.ready(true);\n  removePreviewListeners(true);\n};\n\nconst setp1Ship = (e) => {\n  if (!shipPlacingPhase || p1ShipCount === maxShips) return;\n  const coords = getCellCoords(e.target);\n  const nextShip = nextp1Ship(p1ShipCount);\n\n  if (p1.board.placeShip(coords.row, coords.col, nextShip, direction)) {\n    p1ShipCount++;\n    _dom__WEBPACK_IMPORTED_MODULE_0__.showShipCount(p1ShipCount, maxShips, true);\n  }\n  if (p1ShipCount === maxShips) {\n    removePreviewListeners(true);\n    _dom__WEBPACK_IMPORTED_MODULE_0__.ready(true);\n  }\n};\nconst setp2Ship = (e) => {\n  if (getGameMode() || !shipPlacingPhase || p2ShipCount === maxShips) return;\n  const coords = getCellCoords(e.target);\n  const nextShip = nextp2Ship(p2ShipCount);\n\n  if (p2.board.placeShip(coords.row, coords.col, nextShip, direction)) {\n    p2ShipCount++;\n    _dom__WEBPACK_IMPORTED_MODULE_0__.showShipCount(p2ShipCount, maxShips, false);\n  }\n  if (p2ShipCount === maxShips) {\n    removePreviewListeners(false);\n    _dom__WEBPACK_IMPORTED_MODULE_0__.ready(false);\n  }\n};\n\nconst addSetShipListener = () => {\n  const p1cells = document.querySelectorAll('.player-grid .cell');\n  p1cells.forEach((cell) => {\n    cell.addEventListener('click', setp1Ship);\n  });\n  const p2cells = document.querySelectorAll('.enemy-grid .cell');\n  p2cells.forEach((cell) => {\n    cell.addEventListener('click', setp2Ship);\n  });\n};\n\nconst setNextShots = (row, col) => {\n  if (row - 1 >= 0) nextCoords.push([row - 1, col]);\n  if (col - 1 >= 0) nextCoords.push([row, col - 1]);\n  if (row + 1 <= 9) nextCoords.push([row + 1, col]);\n  if (col + 1 <= 9) nextCoords.push([row, col + 1]);\n};\n\nconst attackNearHit = () => {\n  let shotData;\n  for (let i = 0; i < nextCoords.length; i++) {\n    shotData = p2.player.attack(p1.board, nextCoords[i][0], nextCoords[i][1]);\n    if (shotData) {\n      if (shotData[0] === 'hit') setNextShots(shotData[1], shotData[2]);\n      break;\n    }\n  }\n  if (!shotData) {\n    shotData = p2.player.randAttack(p1.board);\n    nextCoords.length = [];\n    if (shotData[0] === 'hit') setNextShots(shotData[1], shotData[2]);\n  }\n};\n\nconst sendAutoAttack = () => {\n  if (lastHit) {\n    attackNearHit();\n  } else {\n    const shotData = p2.player.randAttack(p1.board);\n    if (shotData[0] === 'hit') {\n      setNextShots(shotData[1], shotData[2]);\n      lastHit = true;\n    }\n  }\n  _dom__WEBPACK_IMPORTED_MODULE_0__.update(p1.board.getBoard(), turn);\n  if (checkGameState(p1.board)) {\n    gameOver = true;\n    _dom__WEBPACK_IMPORTED_MODULE_0__.endGame();\n  } else {\n    switchTurns();\n    _dom__WEBPACK_IMPORTED_MODULE_0__.nextTurn(turn);\n  }\n};\n\nconst sendAttack = (e) => {\n  if (gameOver || shipPlacingPhase) return;\n  const coords = getCellCoords(e.target);\n\n  if (coords.parent.classList.contains('player-grid')) {\n    if (!turn) return;\n    if (!p2.player.attack(p1.board, coords.row, coords.col)) return;\n    _dom__WEBPACK_IMPORTED_MODULE_0__.update(p1.board.getBoard(), turn);\n    if (checkGameState(p1.board)) {\n      gameOver = true;\n      _dom__WEBPACK_IMPORTED_MODULE_0__.endGame();\n    } else {\n      switchTurns();\n      _dom__WEBPACK_IMPORTED_MODULE_0__.nextTurn(turn);\n    }\n  } else {\n    if (turn) return;\n    if (!p1.player.attack(p2.board, coords.row, coords.col)) return;\n    _dom__WEBPACK_IMPORTED_MODULE_0__.update(p2.board.getBoard(), turn);\n    if (checkGameState(p2.board)) {\n      gameOver = true;\n      _dom__WEBPACK_IMPORTED_MODULE_0__.endGame();\n    } else {\n      switchTurns();\n      _dom__WEBPACK_IMPORTED_MODULE_0__.nextTurn(turn);\n      if (gameMode) sendAutoAttack();\n    }\n  }\n};\nconst addBoardListener = () => {\n  const cells = document.querySelectorAll('.cell');\n  cells.forEach((cell) => {\n    cell.addEventListener('click', sendAttack);\n  });\n};\n\nconst enableBtns = () => {\n  const buttons = document.querySelectorAll('button.random, button.reset, button.start, button.axis, input#auto, button.player-ready, button.enemy-ready');\n  buttons.forEach((btn) => {\n    btn.disabled = false;\n  });\n};\n\nconst disableBtns = () => {\n  const buttons = document.querySelectorAll('button.random, button.reset, button.start, button.axis, input#auto, button.player-ready, button.enemy-ready');\n  buttons.forEach((btn) => {\n    btn.disabled = true;\n  });\n};\n\nconst startGame = () => {\n  if (!bothPlayersReady) return;\n  disableBtns();\n  addBoardListener();\n  shipPlacingPhase = false;\n  _dom__WEBPACK_IMPORTED_MODULE_0__.hideEnemyShips(p2.board.getBoard());\n  _dom__WEBPACK_IMPORTED_MODULE_0__.nextTurn(turn);\n};\n\nconst playerReadyBtn = document.querySelector('.player-ready');\nconst enemyReadyBtn = document.querySelector('.enemy-ready');\n\nconst playerReady = () => {\n  if (p1ShipCount !== maxShips) return;\n  if (getGameMode()) {\n    p2AutoPlace();\n    bothPlayersReady = true;\n    _dom__WEBPACK_IMPORTED_MODULE_0__.showPlayersReady();\n  } else {\n    _dom__WEBPACK_IMPORTED_MODULE_0__.hidePlayerShips(p1.board.getBoard());\n    playerReadyBtn.disabled = true;\n    openModal();\n  }\n};\n\nconst enemyReady = () => {\n  if (p2ShipCount !== maxShips) return;\n  _dom__WEBPACK_IMPORTED_MODULE_0__.hideEnemyShips(p2.board.getBoard());\n  enemyReadyBtn.disabled = true;\n  openModal();\n  bothPlayersReady = true;\n  _dom__WEBPACK_IMPORTED_MODULE_0__.showPlayersReady();\n};\n\nplayerReadyBtn.addEventListener('click', playerReady);\nenemyReadyBtn.addEventListener('click', enemyReady);\n\nconst newGame = () => {\n  createPieces();\n  initValues();\n\n  _dom__WEBPACK_IMPORTED_MODULE_0__.render(p1.board.getBoard(), p2.board.getBoard());\n  _dom__WEBPACK_IMPORTED_MODULE_0__.showShipCount(p1ShipCount, maxShips, true);\n  _dom__WEBPACK_IMPORTED_MODULE_0__.showShipCount(p2ShipCount, maxShips, false);\n\n  addPreviewListeners(true);\n  addPreviewListeners(false);\n  addSetShipListener();\n  enableBtns();\n};\n\nconst addRandomPlace = () => {\n  const randBtn = document.querySelector('.random');\n  randBtn.addEventListener('click', p1AutoPlace);\n};\n\nconst changeAxis = () => {\n  direction = direction ? 0 : 1;\n};\nconst addChangeAxis = () => {\n  const axisBtn = document.querySelector('.axis');\n  axisBtn.addEventListener('click', changeAxis);\n};\n\nconst addRestart = () => {\n  const restartBtn = document.querySelector('.restart');\n  restartBtn.addEventListener('click', newGame);\n};\n\nconst resetGrid = () => {\n  p1ShipCount = 0;\n  p1.board.resetBoard();\n  _dom__WEBPACK_IMPORTED_MODULE_0__.clearGrid(p1.board.getBoard(), 1);\n  _dom__WEBPACK_IMPORTED_MODULE_0__.showPlayerShips(p1.board.getBoard());\n  addPreviewListeners(true);\n  _dom__WEBPACK_IMPORTED_MODULE_0__.showShipCount(p1ShipCount, maxShips, true);\n};\n\nconst addResetGrid = () => {\n  const resetBtn = document.querySelector('.reset');\n  resetBtn.addEventListener('click', resetGrid);\n};\n\nconst addStartBtn = () => {\n  const startBtn = document.querySelector('.start');\n  startBtn.addEventListener('click', startGame);\n};\n\nconst addButtonListeners = () => {\n  addRestart();\n  addChangeAxis();\n  addRandomPlace();\n  addResetGrid();\n  addStartBtn();\n};\n\n\n\n\n//# sourceURL=webpack://top-battleship/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n_game__WEBPACK_IMPORTED_MODULE_1__.addButtonListeners();\n_game__WEBPACK_IMPORTED_MODULE_1__.newGame();\n\n\n//# sourceURL=webpack://top-battleship/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;