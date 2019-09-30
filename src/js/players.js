const player = (enemyBoard, computer = false) => {
  const attack = (location) => {
    if (computer) {
      const loc = '1,1'
      enemyBoard.receiveAttack(loc)
    } else {
      enemyBoard.receiveAttack(location)
    }
  }
  return { attack }
}

export default player
