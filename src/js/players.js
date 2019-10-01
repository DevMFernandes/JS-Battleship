// import boardSize from './game'

const player = (enemyBoard, computer = false) => {
  const attack = (location) => {
    if (computer) {
      const loc2 = compLoc(10, enemyBoard)
      enemyBoard.receiveAttack(loc2)
      console.log(enemyBoard.board)
      return loc2
    } else {
      return enemyBoard.receiveAttack(location)
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

const computerPlay = () => {
  // turn = 'computer'
  console.log('computer should play now')
}

export { player, computerPlay }
