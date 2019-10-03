import { movesSetup, pickMove } from './ai'

const player = (enemyBoard, computer = false) => {
  const attack = (location) => {
    if (computer) {
      const loc2 = pickMove(enemyBoard)
      enemyBoard.receiveAttack(loc2)
      return [loc2, enemyBoard.board[loc2]]
    } else {
      return enemyBoard.receiveAttack(location)
    }
  }
  return { attack }
}

movesSetup()

export default player
