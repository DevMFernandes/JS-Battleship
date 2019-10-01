import '../mystyles.scss'
import gameBoard from './gameboard'
import ship from './ship'
import player from './players'

let turn = 'player'

// export const boardSize = 10

// create gameboards
const board1 = gameBoard()
const board2 = gameBoard()

// create ships
const carrier1 = ship(5)
const cruiser1 = ship(3)
const carrier2 = ship(5)
const cruiser2 = ship(3)

board1.placeShip(carrier1, '1,1', 'h')
board1.placeShip(cruiser1, '3,1', 'v')

board2.placeShip(carrier2, '2,1', 'h')
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
    player1.attack(loc)
    console.log(board2.allSunk())
    console.log(board2)
  })
}

compMove.addEventListener('click', () => {
  player2.attack()
  console.log(board1)
})

const build = (len) => {
  const pBoard = document.querySelector('#playerBoard')
  const cBoard = document.querySelector('#computerBoard')
  const boards = document.querySelectorAll('.board')

  boards.forEach(board => {
    board.setAttribute('style', `height: ${30 * len}px; width: ${30 * len}px;`)
  })
  for (let i = 1; i <= len; i++) {
    for (let j = 1; j <= len; j++) {
      const div = document.createElement('div')
      const div2 = document.createElement('div')
      div.setAttribute('data-loc', `${i},${j}`)
      div2.setAttribute('data-loc', `${i},${j}`)
      pBoard.appendChild(div)
      cBoard.appendChild(div2)

      div.addEventListener('click', () => {
        if (turn === 'player') {
          const loc = div.getAttribute('data-loc')
          player1.attack(loc)
          if (board2.board[loc] === 'hit') {
            div.classList.add('red')
          } else {
            div.classList.add('blue')
          }
          // turn = 'computer'
          // computerPlay()
        }
      })
    }
  }
  // append html
}

build(10)
