// import gameBoard from './gameboard'

const build = (len, player1, player2, board1, board2) => {
  const pBoard = document.querySelector('#playerBoard')
  const cBoard = document.querySelector('#computerBoard')

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
          updateMsg('Nice hit!')
          if (!gameOver(board2, 'You')) {
            computerPlay(player2, board1)
          }
        } else if (status === 'duplicate-miss') {
          updateMsg('Already missed here. Try again.')
        } else if (status === 'duplicate-hit') {
          updateMsg('Already hit here. Try again.')
        } else if (status === 'miss') {
          updateMsg('You missed!')
          div.classList.add('blue')
          computerPlay(player2, board1)
        } else {
          console.log('Something has gone very wrong.')
        }
      })
    }
  }
  showBoats(board1)
}

const showBoats = (board) => {
  for (const prop in board.board) {
    document.querySelector(`#computerBoard [data-loc="${prop}"]`).classList.add('active')
  }
}

const computerPlay = (player, board) => {
  const move = player.attack()
  const loc = move[0]
  const status = move[1]
  const moveClass = status === 'hit' ? 'red' : 'blue'
  document.querySelector(`#computerBoard [data-loc="${loc}"]`).classList.add(moveClass)
  if (status === 'hit') {
    gameOver(board, 'Computer')
  }
}

const updateMsg = (msg) => {
  document.querySelector('.msg').innerHTML = msg
}

const gameOver = (board, winner) => {
  if (board.allSunk()) {
    updateMsg(`Game Over. ${winner} won!`)
    document.querySelector('#playerBoard').classList.add('gameover')
    replayBtn()
    return true
  }
}

const replayBtn = () => {
  const button = document.querySelector('.replay')
  button.classList.remove('is-hidden')
  button.addEventListener('click', () => {
    location.reload()
    button.classList.add('is-hidden')
  })
}

export default build
