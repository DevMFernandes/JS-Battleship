const gameBoard = () => {
  const receiveAttack = (location) => {
    const b = board[location]
    if (b !== undefined && b !== 'missed' && b !== 'hit') {
      board[location].hit(location)
      board[location] = 'hit'
      return 'hit'
    } else if (b === 'hit') {
      return 'duplicate-hit'
    } else if (b === 'missed') {
      return 'duplicate-miss'
    } else {
      board[location] = 'missed'
      return 'miss'
    }
  }

  const board = {}
  const ships = []

  const placeShip = (ship, start, dir) => {
    const x = start.split(',')
    const startRow = parseInt(x[0])
    const startCol = parseInt(x[1])
    ships.push(ship)

    if (dir === 'h') {
      for (let i = 0; i < ship.len; i++) {
        board[`${startRow},${(startCol + i)}`] = ship
      }
    } else {
      for (let i = 0; i < ship.len; i++) {
        board[`${startRow + i},${startCol}`] = ship
      }
    }
  }

  const allSunk = () => {
    for (let i = 0; i < ships.length; i++) {
      if (ships[i].isSunk() === false) {
        return false
      }
    }
    return true
  }

  return { placeShip, board, receiveAttack, allSunk }
}

export default gameBoard
