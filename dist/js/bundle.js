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

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mystyles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mystyles.scss */ \"./src/mystyles.scss\");\n/* harmony import */ var _mystyles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mystyles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/js/gameboard.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/js/ship.js\");\n/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./players */ \"./src/js/players.js\");\n\r\n\r\n\r\n\r\n\r\nlet turn = 'player'\r\n\r\n// export const boardSize = 10\r\n\r\n// create gameboards\r\nconst board1 = Object(_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\nconst board2 = Object(_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n\r\n// create ships\r\nconst carrier1 = Object(_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(5)\r\nconst cruiser1 = Object(_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(3)\r\nconst carrier2 = Object(_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(5)\r\nconst cruiser2 = Object(_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(3)\r\n\r\nboard1.placeShip(carrier1, '1,1', 'h')\r\nboard1.placeShip(cruiser1, '3,1', 'v')\r\n\r\nboard2.placeShip(carrier2, '2,1', 'h')\r\nboard2.placeShip(cruiser2, '4,3', 'v')\r\n\r\n// create players\r\nconst player1 = Object(_players__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(board2)\r\nconst player2 = Object(_players__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(board1, true)\r\nconsole.log(board1)\r\nconsole.log(board2)\r\n// loop to create all this stuff\r\n// keep track of turns\r\n// loop here\r\n// check allsunk\r\n\r\nconst buttons = document.querySelectorAll('.player1 > button')\r\nconst compMove = document.querySelector('.computer > button')\r\n\r\nfor (let i = 0; i < buttons.length; i++) {\r\n  const button = buttons[i]\r\n  button.addEventListener('click', () => {\r\n    const loc = button.getAttribute('value')\r\n    player1.attack(loc)\r\n    console.log(board2.allSunk())\r\n    console.log(board2)\r\n  })\r\n}\r\n\r\ncompMove.addEventListener('click', () => {\r\n  player2.attack()\r\n  console.log(board1)\r\n})\r\n\r\nconst build = (len) => {\r\n  const pBoard = document.querySelector('#playerBoard')\r\n  const cBoard = document.querySelector('#computerBoard')\r\n  const boards = document.querySelectorAll('.board')\r\n\r\n  boards.forEach(board => {\r\n    board.setAttribute('style', `height: ${30 * len}px; width: ${30 * len}px;`)\r\n  })\r\n  for (let i = 1; i <= len; i++) {\r\n    for (let j = 1; j <= len; j++) {\r\n      const div = document.createElement('div')\r\n      const div2 = document.createElement('div')\r\n      div.setAttribute('data-loc', `${i},${j}`)\r\n      div2.setAttribute('data-loc', `${i},${j}`)\r\n      pBoard.appendChild(div)\r\n      cBoard.appendChild(div2)\r\n\r\n      div.addEventListener('click', () => {\r\n        if (turn === 'player') {\r\n          const loc = div.getAttribute('data-loc')\r\n          player1.attack(loc)\r\n          if (board2.board[loc] === 'hit') {\r\n            div.classList.add('red')\r\n          } else {\r\n            div.classList.add('blue')\r\n          }\r\n          // turn = 'computer'\r\n          // computerPlay()\r\n        }\r\n      })\r\n    }\r\n  }\r\n  // append html\r\n}\r\n\r\nbuild(10)\r\n\n\n//# sourceURL=webpack:///./src/js/game.js?");

/***/ }),

/***/ "./src/js/gameboard.js":
/*!*****************************!*\
  !*** ./src/js/gameboard.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// import ship from './ship'\r\n\r\nconst gameBoard = () => {\r\n  const receiveAttack = (location) => {\r\n    const b = board[location]\r\n    if (b !== undefined && b !== 'missed' && b !== 'hit') {\r\n      board[location].hit(location)\r\n      board[location] = 'hit'\r\n    } else if (b === 'hit') {\r\n      // duplicate move on a hit postion\r\n      console.log('duplicate move, already hit')\r\n    } else if (b === 'missed') {\r\n      // duplicate move on a missed position\r\n      console.log('duplicate move, already missed here')\r\n    } else {\r\n      // position neither hit nor missed (so undefined)\r\n      board[location] = 'missed'\r\n    }\r\n  }\r\n\r\n  const board = {}\r\n  const ships = []\r\n\r\n  const placeShip = (ship, start, dir) => {\r\n    const x = start.split(',')\r\n    const startRow = parseInt(x[0])\r\n    const startCol = parseInt(x[1])\r\n    ships.push(ship)\r\n\r\n    if (dir === 'h') {\r\n      for (let i = 0; i < ship.len; i++) {\r\n        board[`${startRow},${(startCol + i)}`] = ship\r\n      }\r\n    } else {\r\n      for (let i = 0; i < ship.len; i++) {\r\n        board[`${startRow + i},${startCol}`] = ship\r\n      }\r\n    }\r\n  }\r\n\r\n  const allSunk = () => {\r\n    for (let i = 0; i < ships.length; i++) {\r\n      if (ships[i].isSunk() === false) {\r\n        return false\r\n      }\r\n    }\r\n    return true\r\n  }\r\n\r\n  return { placeShip, board, receiveAttack, allSunk }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (gameBoard);\r\n\n\n//# sourceURL=webpack:///./src/js/gameboard.js?");

/***/ }),

/***/ "./src/js/players.js":
/*!***************************!*\
  !*** ./src/js/players.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// import boardSize from './game'\r\n\r\nconst player = (enemyBoard, computer = false) => {\r\n  const attack = (location) => {\r\n    if (computer) {\r\n      enemyBoard.receiveAttack(compLoc(10, enemyBoard))\r\n    } else {\r\n      enemyBoard.receiveAttack(location)\r\n    }\r\n  }\r\n  return { attack }\r\n}\r\n\r\nconst compLoc = (len, enemyBoard) => {\r\n  const coord1 = Math.floor(Math.random() * len) + 1\r\n  const coord2 = Math.floor(Math.random() * len) + 1\r\n  const loc = `${coord1},${coord2}`\r\n  if (enemyBoard.board[loc] === 'hit' || enemyBoard.board[loc] === 'missed') {\r\n    compLoc(len, enemyBoard)\r\n  }\r\n  return loc\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (player);\r\n\n\n//# sourceURL=webpack:///./src/js/players.js?");

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