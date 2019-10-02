import setLength from './config'

const len = setLength()

const moves = []

const movesSetup = () => {
  for (let i = 1; i <= len; i++) {
    for (let j = 1; j <= len; j++) {
      const move = `${i},${j}`
      moves.push(move)
    }
  }
}

movesSetup()

const player = (enemyBoard, computer = false) => {
  const attack = (location) => {
    if (computer) {
      const loc2 = pickMove()
      enemyBoard.receiveAttack(loc2)
      return [loc2, enemyBoard.board[loc2]]
    } else {
      return enemyBoard.receiveAttack(location)
    }
  }
  return { attack }
}

const pickMove = () => {
  const rand = Math.floor(Math.random() * moves.length)
  const move = moves[rand]
  moves.splice(rand, 1)
  return move
}

export default player
