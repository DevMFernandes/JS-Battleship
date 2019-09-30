const player = (board) => {
  const attack = (enemy, location) => {
    enemy.board.receiveAttack(location)
  }
  return { attack, board }
}

export default player
