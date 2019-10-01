const player = (enemyBoard, computer = false) => {
  const attack = (location) => {
    if (computer) {
      enemyBoard.receiveAttack(compLoc())
    } else {
      enemyBoard.receiveAttack(location)
    }
  }
  return { attack }
}

const compLoc = () => {
  const coord1 = Math.floor(Math.random() * 10) + 1
  const coord2 = Math.floor(Math.random() * 10) + 1
  const loc = `${coord1},${coord2}`

  return loc
}

export default player
