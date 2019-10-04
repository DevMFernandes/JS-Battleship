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
eval("__webpack_require__.r(__webpack_exports__);\nconst setLength = () => {\n  return 10\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setLength);\n\n\n//# sourceURL=webpack:///./src/js/config.js?");

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mystyles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mystyles.scss */ \"./src/mystyles.scss\");\n/* harmony import */ var _mystyles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mystyles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/js/gameboard.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/js/ship.js\");\n/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./players */ \"./src/js/players.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ \"./src/js/config.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui */ \"./src/js/ui.js\");\n\n\n\n\n\n\n\nconst board1 = Object(_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\nconst board2 = Object(_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n\nconst shipNames = {\n  Battleship: 3,\n  Carrier: 2,\n  Cruiser: 5,\n  Destroyer: 4\n}\nconst humanShips = []\nconst computerShips = []\nfor (const prop in shipNames) {\n  humanShips.push(Object(_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(shipNames[prop]))\n  computerShips.push(Object(_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(shipNames[prop]))\n}\n\nObject(_ui__WEBPACK_IMPORTED_MODULE_5__[\"placeOnBoard\"])(humanShips, board1, shipNames)\n\nboard2.computerSetup(computerShips)\n\nconst player1 = Object(_players__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(board2)\nconst player2 = Object(_players__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(board1, true)\n\nObject(_ui__WEBPACK_IMPORTED_MODULE_5__[\"build\"])(Object(_config__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(), player1, player2, board1, board2)\n\n\n//# sourceURL=webpack:///./src/js/game.js?");

/***/ }),

/***/ "./src/js/gameboard.js":
/*!*****************************!*\
  !*** ./src/js/gameboard.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/js/config.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ \"./src/js/ui.js\");\n\n\n\nconst gameBoard = () => {\n  const receiveAttack = (location) => {\n    const b = board[location]\n    if (b !== undefined && b !== 'missed' && b !== 'hit') {\n      board[location].hit(location)\n      board[location] = 'hit'\n      return 'hit'\n    } else if (b === 'hit') {\n      return 'duplicate-hit'\n    } else if (b === 'missed') {\n      return 'duplicate-miss'\n    } else {\n      board[location] = 'missed'\n      return 'miss'\n    }\n  }\n\n  const board = {}\n  const ships = []\n\n  const placeShip = (ship, start, dir) => {\n    const x = start.split(',')\n    const startRow = parseInt(x[0])\n    const startCol = parseInt(x[1])\n    ships.push(ship)\n\n    if (dir === 'h') {\n      for (let i = 0; i < ship.len; i++) {\n        board[`${startRow},${(startCol + i)}`] = ship\n      }\n    } else {\n      for (let i = 0; i < ship.len; i++) {\n        board[`${startRow + i},${startCol}`] = ship\n      }\n    }\n  }\n\n  const allSunk = () => {\n    for (let i = 0; i < ships.length; i++) {\n      if (ships[i].isSunk() === false) {\n        return false\n      }\n    }\n    return true\n  }\n\n  const computerSetup = (ships) => {\n    ships.forEach((ship, i) => {\n      const len = ship.len\n      let o = Math.floor(Math.random() * 2) === 0 ? 'v' : 'h'\n      let x = Math.ceil(Math.random() * Object(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"])())\n      let y = Math.ceil(Math.random() * Object(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"])())\n      while (!checkAvail(o, x, y, len)) {\n        o = Math.floor(Math.random() * 2) === 0 ? 'v' : 'h'\n        x = Math.ceil(Math.random() * Object(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"])())\n        y = Math.ceil(Math.random() * Object(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"])())\n      }\n      placeShip(ship, `${x},${y}`, o)\n    })\n  }\n\n  const checkAvail = (o, x, y, shipLen) => {\n    if (o === 'h') {\n      if (parseInt(y) + shipLen - 1 > Object(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()) {\n        Object(_ui__WEBPACK_IMPORTED_MODULE_1__[\"updateMsg\"])('Ship cannot be outside of the board!')\n        return false\n      }\n      for (let i = 0; i < shipLen; i++) {\n        if (board[`${x},${parseInt(y) + i}`]) {\n          Object(_ui__WEBPACK_IMPORTED_MODULE_1__[\"updateMsg\"])('Cannot place ship on top of existing ship!')\n          return false\n        }\n      }\n      Object(_ui__WEBPACK_IMPORTED_MODULE_1__[\"updateMsg\"])('Battleship')\n      return true\n    }\n    if (o === 'v') {\n      if (parseInt(x) + shipLen - 1 > Object(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()) {\n        Object(_ui__WEBPACK_IMPORTED_MODULE_1__[\"updateMsg\"])('Ship cannot be outside of the board!')\n        return false\n      }\n      for (let j = 0; j < shipLen; j++) {\n        if (board[`${parseInt(x) + j},${y}`]) {\n          Object(_ui__WEBPACK_IMPORTED_MODULE_1__[\"updateMsg\"])('Cannot place ship on top of existing ship!')\n          return false\n        }\n      }\n      Object(_ui__WEBPACK_IMPORTED_MODULE_1__[\"updateMsg\"])('Battleship')\n      return true\n    }\n  }\n\n  return { placeShip, board, receiveAttack, allSunk, checkAvail, computerSetup }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (gameBoard);\n\n\n//# sourceURL=webpack:///./src/js/gameboard.js?");

/***/ }),

/***/ "./src/js/players.js":
/*!***************************!*\
  !*** ./src/js/players.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/js/config.js\");\n\n\nconst player = (enemyBoard, computer = false) => {\n  const attack = (location) => {\n    if (computer) {\n      const loc2 = pickMove()\n      enemyBoard.receiveAttack(loc2)\n      return [loc2, enemyBoard.board[loc2]]\n    } else {\n      return enemyBoard.receiveAttack(location)\n    }\n  }\n  return { attack }\n}\n\nconst moves = []\n\nconst movesSetup = () => {\n  for (let i = 1; i <= Object(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); i++) {\n    for (let j = 1; j <= Object(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); j++) {\n      const move = `${i},${j}`\n      moves.push(move)\n    }\n  }\n}\n\nmovesSetup()\n\nconst pickMove = () => {\n  const rand = Math.floor(Math.random() * moves.length)\n  const move = moves[rand]\n  moves.splice(rand, 1)\n  return move\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (player);\n\n\n//# sourceURL=webpack:///./src/js/players.js?");

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

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/*! exports provided: build, placeOnBoard, updateMsg, showBoats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"build\", function() { return build; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"placeOnBoard\", function() { return placeOnBoard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateMsg\", function() { return updateMsg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showBoats\", function() { return showBoats; });\n\nconst build = (len, player1, player2, board1, board2) => {\n  const pBoard = document.querySelector('#playerBoard')\n  const cBoard = document.querySelector('#computerBoard')\n\n  for (let i = 1; i <= len; i++) {\n    for (let j = 1; j <= len; j++) {\n      const div = document.createElement('div')\n      const div2 = document.createElement('div')\n      div.setAttribute('data-loc', `${i},${j}`)\n      div2.setAttribute('data-loc', `${i},${j}`)\n      pBoard.appendChild(div)\n      cBoard.appendChild(div2)\n\n      div.addEventListener('click', () => {\n        const loc = div.getAttribute('data-loc')\n        const status = player1.attack(loc)\n\n        if (status === 'hit') {\n          div.classList.add('red')\n          updateMsg('Nice hit!')\n          if (!gameOver(board2, 'You')) {\n            computerPlay(player2, board1)\n          }\n        } else if (status === 'duplicate-miss') {\n          updateMsg('Already missed here. Try again.')\n        } else if (status === 'duplicate-hit') {\n          updateMsg('Already hit here. Try again.')\n        } else if (status === 'miss') {\n          updateMsg('You missed!')\n          div.classList.add('blue')\n          computerPlay(player2, board1)\n        } else {\n          console.log('Something has gone very wrong.')\n        }\n      })\n    }\n  }\n  showBoats(board1)\n  buildDropdown(len)\n}\n\nconst placeOnBoard = (ships, board, names) => {\n  const addBtn = document.querySelector('.add-ship')\n\n  let i = 0\n\n  document.querySelector('.name').innerHTML = Object.keys(names)[i]\n  document.querySelector('.length').innerHTML = `Length: ${Object.values(names)[i]}`\n\n  addBtn.addEventListener('click', () => {\n    const len = Object.values(names)[i]\n    const orientation = document.querySelector('.orientation').value\n    const xCoord = document.querySelector('.select-x').value\n    const yCoord = document.querySelector('.select-y').value\n    if (board.checkAvail(orientation, xCoord, yCoord, len)) {\n      board.placeShip(ships[i], `${xCoord},${yCoord}`, orientation)\n      i += 1\n      showBoats(board)\n      document.querySelector('.name').innerHTML = Object.keys(names)[i]\n      document.querySelector('.length').innerHTML = `Length: ${Object.values(names)[i]}`\n      if (i === ships.length) {\n        document.querySelector('#play-here').classList.remove('is-hidden')\n        document.querySelector('#add-ship').classList.add('is-hidden')\n      }\n    }\n  })\n}\n\nconst showBoats = (board) => {\n  for (const prop in board.board) {\n    document.querySelector(`#computerBoard [data-loc=\"${prop}\"]`).classList.add('active')\n  }\n}\n\nconst computerPlay = (player, board) => {\n  const move = player.attack()\n  const loc = move[0]\n  const status = move[1]\n  const moveClass = status === 'hit' ? 'red' : 'blue'\n  document.querySelector(`#computerBoard [data-loc=\"${loc}\"]`).classList.add(moveClass)\n  if (status === 'hit') {\n    gameOver(board, 'Computer')\n  }\n}\n\nconst updateMsg = (msg) => {\n  document.querySelector('.msg').innerHTML = msg\n}\n\nconst gameOver = (board, winner) => {\n  if (board.allSunk()) {\n    updateMsg(`Game Over. ${winner} won!`)\n    document.querySelector('#playerBoard').classList.add('gameover')\n    replayBtn()\n    return true\n  }\n}\n\nconst replayBtn = () => {\n  const button = document.querySelector('.replay')\n  button.classList.remove('is-hidden')\n  button.addEventListener('click', () => {\n    location.reload()\n    button.classList.add('is-hidden')\n  })\n}\n\nconst buildDropdown = (len) => {\n  for (let i = 1; i <= len; i++) {\n    const itemx = document.createElement('option')\n    itemx.setAttribute('value', i)\n    itemx.innerHTML = i\n    document.querySelector('.select-x').appendChild(itemx)\n\n    const itemy = document.createElement('option')\n    itemy.setAttribute('value', i)\n    itemy.innerHTML = i\n    document.querySelector('.select-y').appendChild(itemy)\n  }\n}\n\n\n\n\n//# sourceURL=webpack:///./src/js/ui.js?");

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