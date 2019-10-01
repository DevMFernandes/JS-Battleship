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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mystyles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mystyles.scss */ \"./src/mystyles.scss\");\n/* harmony import */ var _mystyles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mystyles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/js/gameboard.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/js/ship.js\");\n/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./players */ \"./src/js/players.js\");\n\n\n\n\n\nlet turn = 'player'\n\n// export const boardSize = 10\n\n// create gameboards\nconst board1 = Object(_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\nconst board2 = Object(_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n\n// create ships\nconst carrier1 = Object(_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(5)\nconst cruiser1 = Object(_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(3)\nconst carrier2 = Object(_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(5)\nconst cruiser2 = Object(_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(3)\n\nboard1.placeShip(carrier1, '1,1', 'h')\nboard1.placeShip(cruiser1, '3,1', 'v')\n\nboard2.placeShip(carrier2, '2,1', 'h')\nboard2.placeShip(cruiser2, '4,3', 'v')\n\n// create players\nconst player1 = Object(_players__WEBPACK_IMPORTED_MODULE_3__[\"player\"])(board2)\nconst player2 = Object(_players__WEBPACK_IMPORTED_MODULE_3__[\"player\"])(board1, true)\nconsole.log(board1)\nconsole.log(board2)\n// loop to create all this stuff\n// keep track of turns\n// loop here\n// check allsunk\n\nconst build = (len) => {\n  const pBoard = document.querySelector('#playerBoard')\n  const cBoard = document.querySelector('#computerBoard')\n  const boards = document.querySelectorAll('.board')\n\n  boards.forEach(board => {\n    board.setAttribute('style', `height: ${30 * len}px; width: ${30 * len}px;`)\n  })\n  for (let i = 1; i <= len; i++) {\n    for (let j = 1; j <= len; j++) {\n      const div = document.createElement('div')\n      const div2 = document.createElement('div')\n      div.setAttribute('data-loc', `${i},${j}`)\n      div2.setAttribute('data-loc', `${i},${j}`)\n      pBoard.appendChild(div)\n      cBoard.appendChild(div2)\n\n      div.addEventListener('click', () => {\n        if (turn === 'player') {\n          const loc = div.getAttribute('data-loc')\n          const status = player1.attack(loc)\n\n          if (status === 'hit') {\n            div.classList.add('red')\n            updateMsg('Computer turn')\n            const compStatus = player2.attack()\n          } else if (status === 'duplicate-miss') {\n            updateMsg('Already missed here. Try again.')\n          } else if (status === 'duplicate-hit') {\n            updateMsg('Already hit here. Try again.')\n          } else if (status === 'miss') {\n            updateMsg('You missed! Computer turn')\n            div.classList.add('blue')\n            const compStatus2 = player2.attack()\n          } else {\n            console.log('Something has gone very wrong.')\n          }\n\n        }\n      })\n    }\n  }\n\n  const updateMsg = (msg) => {\n    document.querySelector('.msg').innerHTML = msg\n  }\n}\n\nbuild(10)\n\n\n//# sourceURL=webpack:///./src/js/game.js?");

/***/ }),

/***/ "./src/js/gameboard.js":
/*!*****************************!*\
  !*** ./src/js/gameboard.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// import ship from './ship'\n\nconst gameBoard = () => {\n  const receiveAttack = (location) => {\n    const b = board[location]\n    if (b !== undefined && b !== 'missed' && b !== 'hit') {\n      board[location].hit(location)\n      board[location] = 'hit'\n      return 'hit'\n    } else if (b === 'hit') {\n      return 'duplicate-hit'\n    } else if (b === 'missed') {\n      return 'duplicate-miss'\n    } else {\n      board[location] = 'missed'\n      return 'miss'\n    }\n  }\n\n  const board = {}\n  const ships = []\n\n  const placeShip = (ship, start, dir) => {\n    const x = start.split(',')\n    const startRow = parseInt(x[0])\n    const startCol = parseInt(x[1])\n    ships.push(ship)\n\n    if (dir === 'h') {\n      for (let i = 0; i < ship.len; i++) {\n        board[`${startRow},${(startCol + i)}`] = ship\n      }\n    } else {\n      for (let i = 0; i < ship.len; i++) {\n        board[`${startRow + i},${startCol}`] = ship\n      }\n    }\n  }\n\n  const allSunk = () => {\n    for (let i = 0; i < ships.length; i++) {\n      if (ships[i].isSunk() === false) {\n        return false\n      }\n    }\n    return true\n  }\n\n  return { placeShip, board, receiveAttack, allSunk }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (gameBoard);\n\n\n//# sourceURL=webpack:///./src/js/gameboard.js?");

/***/ }),

/***/ "./src/js/players.js":
/*!***************************!*\
  !*** ./src/js/players.js ***!
  \***************************/
/*! exports provided: player, computerPlay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"player\", function() { return player; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"computerPlay\", function() { return computerPlay; });\n// import boardSize from './game'\n\nconst player = (enemyBoard, computer = false) => {\n  const attack = (location) => {\n    if (computer) {\n      const loc2 = compLoc(10, enemyBoard)\n      enemyBoard.receiveAttack(loc2)\n      console.log(enemyBoard.board)\n      return loc2\n    } else {\n      return enemyBoard.receiveAttack(location)\n    }\n  }\n  return { attack }\n}\n\nconst compLoc = (len, enemyBoard) => {\n  const coord1 = Math.floor(Math.random() * len) + 1\n  const coord2 = Math.floor(Math.random() * len) + 1\n  const loc = `${coord1},${coord2}`\n  if (enemyBoard.board[loc] === 'hit' || enemyBoard.board[loc] === 'missed') {\n    compLoc(len, enemyBoard)\n  }\n  return loc\n}\n\nconst computerPlay = () => {\n  // turn = 'computer'\n  console.log('computer should play now')\n}\n\n\n\n\n//# sourceURL=webpack:///./src/js/players.js?");

/***/ }),

/***/ "./src/js/ship.js":
/*!************************!*\
  !*** ./src/js/ship.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ship = (len) => {\n  const hitPos = []\n\n  function hit (pos) {\n    hitPos.push(pos)\n  }\n\n  function isSunk () {\n    return (hitPos.length >= len)\n  }\n\n  return { hit, isSunk, len }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ship);\n\n\n//# sourceURL=webpack:///./src/js/ship.js?");

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