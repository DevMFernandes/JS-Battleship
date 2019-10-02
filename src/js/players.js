import setLength from './config'

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

const moves = []

const movesSetup = () => {
  for (let i = 1; i <= setLength(); i++) {
    for (let j = 1; j <= setLength(); j++) {
      const move = `${i},${j}`
      moves.push(move)
    }
  }
}

movesSetup()

const pickMove = () => {
  const rand = Math.floor(Math.random() * moves.length)
  const move = moves[rand]
  moves.splice(rand, 1)
  return move
}

export default player
