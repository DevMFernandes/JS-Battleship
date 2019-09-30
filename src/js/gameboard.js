// import ship from './ship'

const gameBoard = () => {
  const receiveAttack = (location) => {
    if (board[location] !== undefined && board[location] !== 'missed') {
      board[location].hit(location)
    } else {
      board[location] = 'missed'
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
