// import ship from './ship'

const gameBoard = () => {
  const receiveAttack = (location) => {
    const b = board[location]
    if (b !== undefined && b !== 'missed' && b !== 'hit') {
      board[location].hit(location)
      board[location] = 'hit'
    } else if (b === 'hit') {
      // duplicate move on a hit postion
      console.log('duplicate move, already hit')
    } else if (b === 'missed') {
      // duplicate move on a missed position
      console.log('duplicate move, already missed here')
    } else {
      // position neither hit nor missed (so undefined)
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
