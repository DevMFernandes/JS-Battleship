import '../mystyles.scss'
import gameBoard from './gameboard'
import ship from './ship'
import player from './players'
import setLength from './config'
import { build, placeOnBoard } from './ui'

const board1 = gameBoard()
const board2 = gameBoard()

const ships = {
  battleship: 3,
  carrier: 2,
  cruiser: 5,
  destroyer: 4
}
const humanShips = []
const computerShips = []
for (const prop in ships) {
  humanShips.push(ship(ships[prop]))
  computerShips.push(ship(ships[prop]))
}

placeOnBoard(humanShips, board2)

// Human places ships
// board1.placeShip(humanShips[0], '1,1', 'h')
// board1.placeShip(humanShips[1], '3,1', 'v')
// board1.placeShip(humanShips[2], '3,4', 'v')
// board1.placeShip(humanShips[3], '6,6', 'v')

// Computer places ships

board2.placeShip(computerShips[0], '2,1', 'h')
board2.placeShip(computerShips[1], '4,3', 'v')
board2.placeShip(computerShips[2], '4,1', 'v')
board2.placeShip(computerShips[3], '2,2', 'h')

const player1 = player(board2)
const player2 = player(board1, true)

build(setLength(), player1, player2, board1, board2)
