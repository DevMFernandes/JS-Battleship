
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
  buildDropdown(len)
}

const placeOnBoard = (ships, board, names) => {
  const addBtn = document.querySelector('.add-ship')

  let i = 0

  document.querySelector('.name').innerHTML = Object.keys(names)[i]
  document.querySelector('.length').innerHTML = `Length: ${Object.values(names)[i]}`

  addBtn.addEventListener('click', () => {
    const len = Object.values(names)[i]
    const orientation = document.querySelector('.orientation').value
    const xCoord = document.querySelector('.select-x').value
    const yCoord = document.querySelector('.select-y').value
    if (board.checkAvail(orientation, xCoord, yCoord, len)) {
      board.placeShip(ships[i], `${xCoord},${yCoord}`, orientation)
      i += 1
      showBoats(board)
      document.querySelector('.name').innerHTML = Object.keys(names)[i]
      document.querySelector('.length').innerHTML = `Length: ${Object.values(names)[i]}`
      if (i === ships.length) {
        document.querySelector('#play-here').classList.remove('is-hidden')
        document.querySelector('#add-ship').classList.add('is-hidden')
      }
    }
  })
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

const buildDropdown = (len) => {
  for (let i = 1; i <= len; i++) {
    const itemx = document.createElement('option')
    itemx.setAttribute('value', i)
    itemx.innerHTML = i
    document.querySelector('.select-x').appendChild(itemx)

    const itemy = document.createElement('option')
    itemy.setAttribute('value', i)
    itemy.innerHTML = i
    document.querySelector('.select-y').appendChild(itemy)
  }
}

export { build, placeOnBoard, updateMsg, showBoats }
