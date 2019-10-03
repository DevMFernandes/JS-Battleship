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

/***/ "./src/js/ai.js":
/*!**********************!*\
  !*** ./src/js/ai.js ***!
  \**********************/
/*! exports provided: movesSetup, pickMove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"movesSetup\", function() { return movesSetup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pickMove\", function() { return pickMove; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/js/config.js\");\n\r\n\r\nconst moves = []\r\nlet isHit = ''\r\nlet o = ''\r\nlet ship = {}\r\nlet nextMoves = []\r\n\r\nconst movesSetup = () => {\r\n  for (let i = 1; i <= Object(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); i++) {\r\n    for (let j = 1; j <= Object(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); j++) {\r\n      const move = `${i},${j}`\r\n      moves.push(move)\r\n    }\r\n  }\r\n}\r\n\r\nconst pickMove = (board) => {\r\n  let move = ''\r\n  const moveH = () => {\r\n    const coord = isHit.split(',')\r\n    const x = parseInt(coord[0])\r\n    const y = parseInt(coord[1])\r\n    if (ship.isSunk() === true) {\r\n      o = ''\r\n      nextMoves = []\r\n      moveR()\r\n    } else {\r\n      if (nextMoves.length > 0) {\r\n        move = nextMoves[0]\r\n        nextMoves.splice(0, 1)\r\n      } else {\r\n        for (let i = 1; i <= ship.len; i++) {\r\n          if (board.board[`${x},${y + i}`] === ship) {\r\n            nextMoves.push(`${x},${y + i}`)\r\n          }\r\n        }\r\n        for (let i = 1; i <= ship.len; i++) {\r\n          if (board.board[`${x},${y - i}`] === ship) {\r\n            nextMoves.push(`${x},${y - i}`)\r\n          }\r\n        }\r\n        move = nextMoves[0]\r\n        nextMoves.splice(0, 1)\r\n      }\r\n    }\r\n  }\r\n  const moveV = () => {\r\n    const coord = isHit.split(',')\r\n    const x = parseInt(coord[0])\r\n    const y = parseInt(coord[1])\r\n    if (ship.isSunk() === true) {\r\n      o = ''\r\n      nextMoves = []\r\n      moveR()\r\n    } else {\r\n      if (nextMoves.length > 0) {\r\n        move = nextMoves[0]\r\n        nextMoves.splice(0, 1)\r\n      } else {\r\n        for (let i = 1; i <= ship.len; i++) {\r\n          if (board.board[`${x + i},${y}`] === ship) {\r\n            nextMoves.push(`${x + i},${y}`)\r\n          }\r\n        }\r\n        for (let i = 1; i <= ship.len; i++) {\r\n          if (board.board[`${x - i},${y}`] === ship) {\r\n            nextMoves.push(`${x - i},${y}`)\r\n          }\r\n        }\r\n        move = nextMoves[0]\r\n        nextMoves.splice(0, 1)\r\n      }\r\n    }\r\n  }\r\n  const moveR = () => {\r\n    const rand = Math.floor(Math.random() * moves.length)\r\n    move = moves[rand]\r\n    if (board.board[move] !== undefined && board.board[move] !== 'missed') {\r\n      isHit = move\r\n      ship = board.board[move]\r\n      const coord = isHit.split(',')\r\n      const x = parseInt(coord[0])\r\n      const y = parseInt(coord[1])\r\n      if (board.board[`${x + 1},${y}`] === ship || board.board[`${x - 1},${y}`] === ship) {\r\n        o = 'v'\r\n      } else if (board.board[`${x},${y + 1}`] === ship || board.board[`${x},${y - 1}`] === ship) {\r\n        o = 'h'\r\n      } else {\r\n        o = ''\r\n      }\r\n    }\r\n  }\r\n\r\n  switch (o) {\r\n    case 'h':\r\n      moveH()\r\n      break\r\n\r\n    case 'v':\r\n      moveV()\r\n      break\r\n\r\n    default:\r\n      moveR()\r\n      break\r\n  }\r\n  const i = moves.indexOf(move)\r\n  moves.splice(i, 1)\r\n  return move\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/ai.js?");

/***/ }),

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mystyles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mystyles.scss */ \"./src/mystyles.scss\");\n/* harmony import */ var _mystyles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mystyles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/js/gameboard.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/js/ship.js\");\n/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./players */ \"./src/js/players.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ \"./src/js/config.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui */ \"./src/js/ui.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst board1 = Object(_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\nconst board2 = Object(_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n\r\nconst shipNames = {\r\n  Battleship: 3,\r\n  Carrier: 2,\r\n  Cruiser: 5,\r\n  Destroyer: 4\r\n}\r\nconst humanShips = []\r\nconst computerShips = []\r\nfor (const prop in shipNames) {\r\n  humanShips.push(Object(_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(shipNames[prop]))\r\n  computerShips.push(Object(_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(shipNames[prop]))\r\n}\r\n\r\nObject(_ui__WEBPACK_IMPORTED_MODULE_5__[\"placeOnBoard\"])(humanShips, board1, shipNames)\r\n\r\nboard2.computerSetup(computerShips)\r\n\r\nconst player1 = Object(_players__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(board2)\r\nconst player2 = Object(_players__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(board1, true)\r\n\r\nObject(_ui__WEBPACK_IMPORTED_MODULE_5__[\"build\"])(Object(_config__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(), player1, player2, board1, board2)\r\n\n\n//# sourceURL=webpack:///./src/js/game.js?");

/***/ }),

/***/ "./src/js/gameboard.js":
/*!*****************************!*\
  !*** ./src/js/gameboard.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/js/config.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ \"./src/js/ui.js\");\n\r\n\r\n\r\nconst gameBoard = () => {\r\n  const receiveAttack = (location) => {\r\n    const b = board[location]\r\n    if (b !== undefined && b !== 'missed' && b !== 'hit') {\r\n      board[location].hit(location)\r\n      board[location] = 'hit'\r\n      return 'hit'\r\n    } else if (b === 'hit') {\r\n      return 'duplicate-hit'\r\n    } else if (b === 'missed') {\r\n      return 'duplicate-miss'\r\n    } else {\r\n      board[location] = 'missed'\r\n      return 'miss'\r\n    }\r\n  }\r\n\r\n  const board = {}\r\n  const ships = []\r\n\r\n  const placeShip = (ship, start, dir) => {\r\n    const x = start.split(',')\r\n    const startRow = parseInt(x[0])\r\n    const startCol = parseInt(x[1])\r\n    ships.push(ship)\r\n\r\n    if (dir === 'h') {\r\n      for (let i = 0; i < ship.len; i++) {\r\n        board[`${startRow},${(startCol + i)}`] = ship\r\n      }\r\n    } else {\r\n      for (let i = 0; i < ship.len; i++) {\r\n        board[`${startRow + i},${startCol}`] = ship\r\n      }\r\n    }\r\n  }\r\n\r\n  const allSunk = () => {\r\n    for (let i = 0; i < ships.length; i++) {\r\n      if (ships[i].isSunk() === false) {\r\n        return false\r\n      }\r\n    }\r\n    return true\r\n  }\r\n\r\n  const computerSetup = (ships) => {\r\n    ships.forEach((ship, i) => {\r\n      const len = ship.len\r\n      let o = Math.floor(Math.random() * 2) === 0 ? 'v' : 'h'\r\n      let x = Math.floor(Math.random() * Object(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()) + 1\r\n      let y = Math.floor(Math.random() * Object(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()) + 1\r\n\r\n      const positions = []\r\n      const check = () => {\r\n        for (let i = 0; i < positions.length; i++) {\r\n          const e = positions[i]\r\n          if (o === 'v') {\r\n            if (parseInt(x) + len - 1 > Object(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()) {\r\n              return false\r\n            }\r\n            for (let i = x; i <= len + x; i++) {\r\n              if (e === `${i},${y}`) {\r\n                return false\r\n              }\r\n            }\r\n          } else {\r\n            if (parseInt(y) + len - 1 > Object(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()) {\r\n              return false\r\n            }\r\n            for (let i = y; i <= len + y; i++) {\r\n              if (e === `${x},${i}`) {\r\n                return false\r\n              }\r\n            }\r\n          }\r\n        }\r\n        return true\r\n      }\r\n\r\n      while (check() === false) {\r\n        if (Math.floor(Math.random() * 2) === 0) {\r\n          o = 'v'\r\n          x = Math.floor(Math.random() * Object(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()) + 1\r\n          y = Math.floor(Math.random() * Object(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()) + 1\r\n        } else {\r\n          o = 'h'\r\n          x = Math.floor(Math.random() * Object(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()) + 1\r\n          y = Math.floor(Math.random() * Object(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()) + 1\r\n        }\r\n      }\r\n\r\n      if (o === 'v') {\r\n        for (let i = x; i < len + x; i++) {\r\n          positions.push(`${i},${y}`)\r\n        }\r\n      } else {\r\n        for (let i = y; i < len + y; i++) {\r\n          positions.push(`${x},${i}`)\r\n        }\r\n      }\r\n\r\n      placeShip(ship, `${x},${y}`, o)\r\n    })\r\n    if (Object.keys(board).length !== 14) {\r\n      location.reload()\r\n    }\r\n  }\r\n\r\n  const checkAvail = (o, x, y, shipLen) => {\r\n    const positions = []\r\n    for (let i = 0; i < Object.keys(board).length; i++) {\r\n      const e = Object.keys(board)[i]\r\n      positions.push(e)\r\n    }\r\n    const check = (len) => {\r\n      for (let i = 0; i < positions.length; i++) {\r\n        const e = positions[i]\r\n        if (o === 'v') {\r\n          if (parseInt(x) + shipLen - 1 > Object(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()) {\r\n            Object(_ui__WEBPACK_IMPORTED_MODULE_1__[\"updateMsg\"])('Ship cannot be outside of the board!')\r\n            return false\r\n          }\r\n          for (let i = x; i <= len + x; i++) {\r\n            if (e === `${i},${y}`) {\r\n              Object(_ui__WEBPACK_IMPORTED_MODULE_1__[\"updateMsg\"])('Cannot place ship on top of each other!')\r\n              return false\r\n            }\r\n          }\r\n        } else {\r\n          if (parseInt(y) + shipLen - 1 > Object(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()) {\r\n            Object(_ui__WEBPACK_IMPORTED_MODULE_1__[\"updateMsg\"])('Ship cannot be outside of the board!')\r\n            return false\r\n          }\r\n          for (let i = y; i <= len + y; i++) {\r\n            if (e === `${x},${i}`) {\r\n              Object(_ui__WEBPACK_IMPORTED_MODULE_1__[\"updateMsg\"])('Cannot place ship on top of each other!')\r\n              return false\r\n            }\r\n          }\r\n        }\r\n      }\r\n      Object(_ui__WEBPACK_IMPORTED_MODULE_1__[\"updateMsg\"])('Ship placed!')\r\n      return true\r\n    }\r\n    return check(shipLen)\r\n  }\r\n\r\n  return { placeShip, board, receiveAttack, allSunk, checkAvail, computerSetup, ships }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (gameBoard);\r\n\n\n//# sourceURL=webpack:///./src/js/gameboard.js?");

/***/ }),

/***/ "./src/js/players.js":
/*!***************************!*\
  !*** ./src/js/players.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ai */ \"./src/js/ai.js\");\n\r\n\r\nconst player = (enemyBoard, computer = false) => {\r\n  const attack = (location) => {\r\n    if (computer) {\r\n      const loc2 = Object(_ai__WEBPACK_IMPORTED_MODULE_0__[\"pickMove\"])(enemyBoard)\r\n      enemyBoard.receiveAttack(loc2)\r\n      return [loc2, enemyBoard.board[loc2]]\r\n    } else {\r\n      return enemyBoard.receiveAttack(location)\r\n    }\r\n  }\r\n  return { attack }\r\n}\r\n\r\nObject(_ai__WEBPACK_IMPORTED_MODULE_0__[\"movesSetup\"])()\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (player);\r\n\n\n//# sourceURL=webpack:///./src/js/players.js?");

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

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/*! exports provided: build, placeOnBoard, updateMsg, showBoats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"build\", function() { return build; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"placeOnBoard\", function() { return placeOnBoard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateMsg\", function() { return updateMsg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showBoats\", function() { return showBoats; });\n\r\nconst build = (len, player1, player2, board1, board2) => {\r\n  const pBoard = document.querySelector('#playerBoard')\r\n  const cBoard = document.querySelector('#computerBoard')\r\n\r\n  for (let i = 1; i <= len; i++) {\r\n    for (let j = 1; j <= len; j++) {\r\n      const div = document.createElement('div')\r\n      const div2 = document.createElement('div')\r\n      div.setAttribute('data-loc', `${i},${j}`)\r\n      div2.setAttribute('data-loc', `${i},${j}`)\r\n      pBoard.appendChild(div)\r\n      cBoard.appendChild(div2)\r\n\r\n      div.addEventListener('click', () => {\r\n        const loc = div.getAttribute('data-loc')\r\n        const status = player1.attack(loc)\r\n\r\n        if (status === 'hit') {\r\n          div.classList.add('red')\r\n          updateMsg('Nice hit!')\r\n          if (!gameOver(board2, 'You')) {\r\n            computerPlay(player2, board1)\r\n          }\r\n        } else if (status === 'duplicate-miss') {\r\n          updateMsg('Already missed here. Try again.')\r\n        } else if (status === 'duplicate-hit') {\r\n          updateMsg('Already hit here. Try again.')\r\n        } else if (status === 'miss') {\r\n          updateMsg('You missed!')\r\n          div.classList.add('blue')\r\n          computerPlay(player2, board1)\r\n        } else {\r\n          console.log('Something has gone very wrong.')\r\n        }\r\n      })\r\n    }\r\n  }\r\n  showBoats(board1)\r\n  buildDropdown(len)\r\n}\r\n\r\nconst placeOnBoard = (ships, board, names) => {\r\n  const addBtn = document.querySelector('.add-ship')\r\n\r\n  let i = 0\r\n\r\n  document.querySelector('.name').innerHTML = Object.keys(names)[i]\r\n  document.querySelector('.length').innerHTML = `Length: ${Object.values(names)[i]}`\r\n\r\n  addBtn.addEventListener('click', () => {\r\n    const len = Object.values(names)[i]\r\n    const orientation = document.querySelector('.orientation').value\r\n    const xCoord = document.querySelector('.select-x').value\r\n    const yCoord = document.querySelector('.select-y').value\r\n    if (board.checkAvail(orientation, xCoord, yCoord, len)) {\r\n      board.placeShip(ships[i], `${xCoord},${yCoord}`, orientation)\r\n      i += 1\r\n      showBoats(board)\r\n      document.querySelector('.name').innerHTML = Object.keys(names)[i]\r\n      document.querySelector('.length').innerHTML = `Length: ${Object.values(names)[i]}`\r\n      if (i === ships.length) {\r\n        document.querySelector('#play-here').classList.remove('is-hidden')\r\n        document.querySelector('#add-ship').classList.add('is-hidden')\r\n      }\r\n    }\r\n  })\r\n}\r\n\r\nconst showBoats = (board) => {\r\n  for (const prop in board.board) {\r\n    document.querySelector(`#computerBoard [data-loc=\"${prop}\"]`).classList.add('active')\r\n  }\r\n}\r\n\r\nconst computerPlay = (player, board) => {\r\n  const move = player.attack()\r\n  const loc = move[0]\r\n  const status = move[1]\r\n  const moveClass = status === 'hit' ? 'red' : 'blue'\r\n  document.querySelector(`#computerBoard [data-loc=\"${loc}\"]`).classList.add(moveClass)\r\n  if (status === 'hit') {\r\n    gameOver(board, 'Computer')\r\n  }\r\n}\r\n\r\nconst updateMsg = (msg) => {\r\n  document.querySelector('.msg').innerHTML = msg\r\n}\r\n\r\nconst gameOver = (board, winner) => {\r\n  if (board.allSunk()) {\r\n    updateMsg(`Game Over. ${winner} won!`)\r\n    document.querySelector('#playerBoard').classList.add('gameover')\r\n    replayBtn()\r\n    return true\r\n  }\r\n}\r\n\r\nconst replayBtn = () => {\r\n  const button = document.querySelector('.replay')\r\n  button.classList.remove('is-hidden')\r\n  button.addEventListener('click', () => {\r\n    location.reload()\r\n    button.classList.add('is-hidden')\r\n  })\r\n}\r\n\r\nconst buildDropdown = (len) => {\r\n  for (let i = 1; i <= len; i++) {\r\n    const itemx = document.createElement('option')\r\n    itemx.setAttribute('value', i)\r\n    itemx.innerHTML = i\r\n    document.querySelector('.select-x').appendChild(itemx)\r\n\r\n    const itemy = document.createElement('option')\r\n    itemy.setAttribute('value', i)\r\n    itemy.innerHTML = i\r\n    document.querySelector('.select-y').appendChild(itemy)\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/ui.js?");

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