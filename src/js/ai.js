import setLength from './config'

const moves = []
let isHit = ''
let o = ''
let ship = {}
let nextMoves = []

const movesSetup = () => {
  for (let i = 1; i <= setLength(); i++) {
    for (let j = 1; j <= setLength(); j++) {
      const move = `${i},${j}`
      moves.push(move)
    }
  }
}

const pickMove = (board) => {
  let move = ''
  const moveH = () => {
    const coord = isHit.split(',')
    const x = parseInt(coord[0])
    const y = parseInt(coord[1])
    if (ship.isSunk() === true) {
      o = ''
      nextMoves = []
      moveR()
    } else {
      if (nextMoves.length > 0) {
        move = nextMoves[0]
        nextMoves.splice(0, 1)
      } else {
        for (let i = 1; i <= ship.len; i++) {
          if (board.board[`${x},${y + i}`] === ship) {
            nextMoves.push(`${x},${y + i}`)
          }
        }
        for (let i = 1; i <= ship.len; i++) {
          if (board.board[`${x},${y - i}`] === ship) {
            nextMoves.push(`${x},${y - i}`)
          }
        }
        move = nextMoves[0]
        nextMoves.splice(0, 1)
      }
    }
  }
  const moveV = () => {
    const coord = isHit.split(',')
    const x = parseInt(coord[0])
    const y = parseInt(coord[1])
    if (ship.isSunk() === true) {
      o = ''
      nextMoves = []
      moveR()
    } else {
      if (nextMoves.length > 0) {
        move = nextMoves[0]
        nextMoves.splice(0, 1)
      } else {
        for (let i = 1; i <= ship.len; i++) {
          if (board.board[`${x + i},${y}`] === ship) {
            nextMoves.push(`${x + i},${y}`)
          }
        }
        for (let i = 1; i <= ship.len; i++) {
          if (board.board[`${x - i},${y}`] === ship) {
            nextMoves.push(`${x - i},${y}`)
          }
        }
        move = nextMoves[0]
        nextMoves.splice(0, 1)
      }
    }
  }
  const moveR = () => {
    const rand = Math.floor(Math.random() * moves.length)
    move = moves[rand]
    if (board.board[move] !== undefined && board.board[move] !== 'missed') {
      isHit = move
      ship = board.board[move]
      const coord = isHit.split(',')
      const x = parseInt(coord[0])
      const y = parseInt(coord[1])
      if (board.board[`${x + 1},${y}`] === ship || board.board[`${x - 1},${y}`] === ship) {
        o = 'v'
      } else if (board.board[`${x},${y + 1}`] === ship || board.board[`${x},${y - 1}`] === ship) {
        o = 'h'
      } else {
        o = ''
      }
    }
  }

  switch (o) {
    case 'h':
      moveH()
      break

    case 'v':
      moveV()
      break

    default:
      moveR()
      break
  }
  const i = moves.indexOf(move)
  moves.splice(i, 1)
  return move
}

export { movesSetup, pickMove }
