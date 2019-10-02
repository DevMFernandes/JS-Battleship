import '../mystyles.scss'
import gameBoard from './gameboard'
import ship from './ship'
import player from './players'
import setLength from './config'
import build from './ui'

const board1 = gameBoard()
const board2 = gameBoard()

const carrier1 = ship(5)
const cruiser1 = ship(3)
const carrier2 = ship(5)
const cruiser2 = ship(3)

board1.placeShip(carrier1, '1,1', 'h')
board1.placeShip(cruiser1, '3,1', 'v')

board2.placeShip(carrier2, '2,1', 'h')
board2.placeShip(cruiser2, '4,3', 'v')

const player1 = player(board2)
const player2 = player(board1, true)

build(setLength(), player1, player2, board1, board2)
