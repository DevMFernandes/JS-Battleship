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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/config.js":
/*!**************************!*\
  !*** ./src/js/config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst setLength = () => {\r\n  return 10\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (setLength);\r\n\n\n//# sourceURL=webpack:///./src/js/config.js?");

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mystyles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mystyles.scss */ \"./src/mystyles.scss\");\n/* harmony import */ var _mystyles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mystyles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/js/gameboard.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/js/ship.js\");\n/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./players */ \"./src/js/players.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ \"./src/js/config.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n// create gameboards\r\nconst board1 = Object(_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\nconst board2 = Object(_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n\r\n// create ships\r\nconst carrier1 = Object(_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(5)\r\nconst cruiser1 = Object(_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(3)\r\nconst carrier2 = Object(_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(5)\r\nconst cruiser2 = Object(_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(3)\r\n\r\nboard1.placeShip(carrier1, '1,1', 'h')\r\nboard1.placeShip(cruiser1, '3,1', 'v')\r\n\r\nboard2.placeShip(carrier2, '2,1', 'h')\r\nboard2.placeShip(cruiser2, '4,3', 'v')\r\n\r\n// create players\r\nconst player1 = Object(_players__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(board2)\r\nconst player2 = Object(_players__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(board1, true)\r\n\r\nconst build = (len) => {\r\n  const pBoard = document.querySelector('#playerBoard')\r\n  const cBoard = document.querySelector('#computerBoard')\r\n  const boards = document.querySelectorAll('.board')\r\n\r\n  boards.forEach(board => {\r\n    board.setAttribute('style', `height: ${30 * len}px; width: ${30 * len}px;`)\r\n  })\r\n\r\n  for (let i = 1; i <= len; i++) {\r\n    for (let j = 1; j <= len; j++) {\r\n      const div = document.createElement('div')\r\n      const div2 = document.createElement('div')\r\n      div.setAttribute('data-loc', `${i},${j}`)\r\n      div2.setAttribute('data-loc', `${i},${j}`)\r\n      pBoard.appendChild(div)\r\n      cBoard.appendChild(div2)\r\n\r\n      div.addEventListener('click', () => {\r\n        const loc = div.getAttribute('data-loc')\r\n        const status = player1.attack(loc)\r\n\r\n        if (status === 'hit') {\r\n          div.classList.add('red')\r\n          computerPlay(player2)\r\n          updateMsg('Nice hit!')\r\n        } else if (status === 'duplicate-miss') {\r\n          updateMsg('Already missed here. Try again.')\r\n        } else if (status === 'duplicate-hit') {\r\n          updateMsg('Already hit here. Try again.')\r\n        } else if (status === 'miss') {\r\n          updateMsg('You missed!')\r\n          div.classList.add('blue')\r\n          computerPlay(player2)\r\n        } else {\r\n          console.log('Something has gone very wrong.')\r\n        }\r\n      })\r\n    }\r\n  }\r\n\r\n  const showBoats = (board) => {\r\n    for (const prop in board.board) {\r\n      document.querySelector(`#computerBoard [data-loc=\"${prop}\"]`).classList.add('active')\r\n    }\r\n  }\r\n\r\n  showBoats(board1)\r\n\r\n  const computerPlay = (player) => {\r\n    const move = player2.attack()\r\n    const loc = move[0]\r\n    const status = move[1]\r\n    const moveClass = status === 'hit' ? 'red' : 'blue'\r\n    document.querySelector(`#computerBoard [data-loc=\"${loc}\"]`).classList.add(moveClass)\r\n  }\r\n\r\n  const updateMsg = (msg) => {\r\n    document.querySelector('.msg').innerHTML = msg\r\n  }\r\n}\r\n\r\nbuild(Object(_config__WEBPACK_IMPORTED_MODULE_4__[\"default\"])())\r\n\n\n//# sourceURL=webpack:///./src/js/game.js?");

/***/ }),

/***/ "./src/js/gameboard.js":
/*!*****************************!*\
  !*** ./src/js/gameboard.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst gameBoard = () => {\r\n  const receiveAttack = (location) => {\r\n    const b = board[location]\r\n    if (b !== undefined && b !== 'missed' && b !== 'hit') {\r\n      board[location].hit(location)\r\n      board[location] = 'hit'\r\n      return 'hit'\r\n    } else if (b === 'hit') {\r\n      return 'duplicate-hit'\r\n    } else if (b === 'missed') {\r\n      return 'duplicate-miss'\r\n    } else {\r\n      board[location] = 'missed'\r\n      return 'miss'\r\n    }\r\n  }\r\n\r\n  const board = {}\r\n  const ships = []\r\n\r\n  const placeShip = (ship, start, dir) => {\r\n    const x = start.split(',')\r\n    const startRow = parseInt(x[0])\r\n    const startCol = parseInt(x[1])\r\n    ships.push(ship)\r\n\r\n    if (dir === 'h') {\r\n      for (let i = 0; i < ship.len; i++) {\r\n        board[`${startRow},${(startCol + i)}`] = ship\r\n      }\r\n    } else {\r\n      for (let i = 0; i < ship.len; i++) {\r\n        board[`${startRow + i},${startCol}`] = ship\r\n      }\r\n    }\r\n  }\r\n\r\n  const allSunk = () => {\r\n    for (let i = 0; i < ships.length; i++) {\r\n      if (ships[i].isSunk() === false) {\r\n        return false\r\n      }\r\n    }\r\n    return true\r\n  }\r\n\r\n  return { placeShip, board, receiveAttack, allSunk }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (gameBoard);\r\n\n\n//# sourceURL=webpack:///./src/js/gameboard.js?");

/***/ }),

/***/ "./src/js/players.js":
/*!***************************!*\
  !*** ./src/js/players.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/js/config.js\");\n\r\n\r\nconst len = Object(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n\r\nconst moves = []\r\n\r\nconst movesSetup = () => {\r\n  for (let i = 1; i <= len; i++) {\r\n    for (let j = 1; j <= len; j++) {\r\n      const move = `${i},${j}`\r\n      moves.push(move)\r\n    }\r\n  }\r\n}\r\n\r\nmovesSetup()\r\n\r\nconst player = (enemyBoard, computer = false) => {\r\n  const attack = (location) => {\r\n    if (computer) {\r\n      const loc2 = pickMove()\r\n      enemyBoard.receiveAttack(loc2)\r\n      return [loc2, enemyBoard.board[loc2]]\r\n    } else {\r\n      return enemyBoard.receiveAttack(location)\r\n    }\r\n  }\r\n  return { attack }\r\n}\r\n\r\nconst pickMove = () => {\r\n  const rand = Math.floor(Math.random() * moves.length)\r\n  const move = moves[rand]\r\n  moves.splice(rand, 1)\r\n  return move\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (player);\r\n\n\n//# sourceURL=webpack:///./src/js/players.js?");

/***/ }),

/***/ "./src/js/ship.js":
/*!************************!*\
  !*** ./src/js/ship.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ship = (len) => {\r\n  const hitPos = []\r\n\r\n  function hit (pos) {\r\n    hitPos.push(pos)\r\n  }\r\n\r\n  function isSunk () {\r\n    return (hitPos.length >= len)\r\n  }\r\n\r\n  return { hit, isSunk, len }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (ship);\r\n\n\n//# sourceURL=webpack:///./src/js/ship.js?");

/***/ }),

/***/ "./src/mystyles.scss":
/*!***************************!*\
  !*** ./src/mystyles.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/mystyles.scss?");

/***/ })

/******/ });