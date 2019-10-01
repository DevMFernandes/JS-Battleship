import '../mystyles.scss'
import gameBoard from './gameboard'
import ship from './ship'
import player from './players'

const boardSize = 10
export default boardSize
// create gameboards
const board1 = gameBoard()
const board2 = gameBoard()
// create ships
const carrier1 = ship(5)
const cruiser1 = ship(3)
// const carrier2 = ship(5)
const cruiser2 = ship(3)
board1.placeShip(carrier1, '1,1', 'h')
board1.placeShip(cruiser1, '3,1', 'v')
// board2.placeShip(carrier2, '2,1', 'h')
board2.placeShip(cruiser2, '4,3', 'v')
// create players
const player1 = player(board2)
const player2 = player(board1, true)
console.log(board1)
console.log(board2)
// loop to create all this stuff
// keep track of turns
// loop here
// check allsunk

const buttons = document.querySelectorAll('.player1 > button')
const compMove = document.querySelector('.computer > button')

for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i]
  button.addEventListener('click', () => {
    const loc = button.getAttribute('value')
    board2.receiveAttack(loc)
    console.log(board2.allSunk())
    console.log(board2)
  })
}

compMove.addEventListener('click', () => {
  player2.attack()
  console.log(board1)
})
