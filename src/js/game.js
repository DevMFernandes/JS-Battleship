import '../mystyles.scss'
import gameBoard from './gameboard'
import ship from './ship'
import player from './players'

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
        const loc = div.getAttribute('data-loc')
        const status = player1.attack(loc)

        if (status === 'hit') {
          div.classList.add('red')
          computerPlay(player2)
          updateMsg('Nice hit!')
        } else if (status === 'duplicate-miss') {
          updateMsg('Already missed here. Try again.')
        } else if (status === 'duplicate-hit') {
          updateMsg('Already hit here. Try again.')
        } else if (status === 'miss') {
          updateMsg('You missed!')
          div.classList.add('blue')
          computerPlay(player2)
        } else {
          console.log('Something has gone very wrong.')
        }
      })
    }
  }

  const showBoats = (board) => {
    for (const prop in board.board) {
      document.querySelector(`#computerBoard [data-loc="${prop}"]`).classList.add('active')
    }
  }

  showBoats(board1)

  const computerPlay = (player) => {
    const move = player2.attack()
    const loc = move[0]
    const status = move[1]
    const moveClass = status === 'hit' ? 'red' : 'blue'
    document.querySelector(`#computerBoard [data-loc="${loc}"]`).classList.add(moveClass)
  }

  const updateMsg = (msg) => {
    document.querySelector('.msg').innerHTML = msg
  }
}

build(10)
