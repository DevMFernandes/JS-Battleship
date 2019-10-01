import boardSize from './game'

const player = (enemyBoard, computer = false) => {
  const attack = (location) => {
    if (computer) {
      enemyBoard.receiveAttack(compLoc(boardSize, enemyBoard))
    } else {
      enemyBoard.receiveAttack(location)
    }
  }
  return { attack }
}

const compLoc = (len, enemyBoard) => {
  const coord1 = Math.floor(Math.random() * len) + 1
  const coord2 = Math.floor(Math.random() * len) + 1
  const loc = `${coord1},${coord2}`
  if (enemyBoard.board[loc] === 'hit' || enemyBoard.board[loc] === 'missed') {
    compLoc(len, enemyBoard)
  }
  return loc
}

export default player
