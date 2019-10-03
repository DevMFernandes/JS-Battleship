import '../mystyles.scss'
import gameBoard from './gameboard'
import ship from './ship'
import player from './players'
import setLength from './config'
import { build, placeOnBoard } from './ui'

const board1 = gameBoard()
const board2 = gameBoard()

const shipNames = {
  Battleship: 3,
  Carrier: 2,
  Cruiser: 5,
  Destroyer: 4
}
const humanShips = []
const computerShips = []
for (const prop in shipNames) {
  humanShips.push(ship(shipNames[prop]))
  computerShips.push(ship(shipNames[prop]))
}

placeOnBoard(humanShips, board1, shipNames)

board2.computerSetup(computerShips)

const player1 = player(board2)
const player2 = player(board1, true)

build(setLength(), player1, player2, board1, board2)
