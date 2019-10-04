import setLength from './config'
import { updateMsg } from './ui'

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

  const computerSetup = (ships) => {
    ships.forEach((ship, i) => {
      const len = ship.len
      let o = Math.floor(Math.random() * 2) === 0 ? 'v' : 'h'
      let x = Math.ceil(Math.random() * setLength())
      let y = Math.ceil(Math.random() * setLength())
      while (!checkAvail(o, x, y, len)) {
        o = Math.floor(Math.random() * 2) === 0 ? 'v' : 'h'
        x = Math.ceil(Math.random() * setLength())
        y = Math.ceil(Math.random() * setLength())
      }
      placeShip(ship, `${x},${y}`, o)
    })
  }

  const checkAvail = (o, x, y, shipLen) => {
    if (o === 'h') {
      if (parseInt(y) + shipLen - 1 > setLength()) {
        updateMsg('Ship cannot be outside of the board!')
        return false
      }
      for (let i = 0; i < shipLen; i++) {
        if (board[`${x},${parseInt(y) + i}`]) {
          updateMsg('Cannot place ship on top of existing ship!')
          return false
        }
      }
      updateMsg('Battleship')
      return true
    }
    if (o === 'v') {
      if (parseInt(x) + shipLen - 1 > setLength()) {
        updateMsg('Ship cannot be outside of the board!')
        return false
      }
      for (let j = 0; j < shipLen; j++) {
        if (board[`${parseInt(x) + j},${y}`]) {
          updateMsg('Cannot place ship on top of existing ship!')
          return false
        }
      }
      updateMsg('Battleship')
      return true
    }
  }

  return { placeShip, board, receiveAttack, allSunk, checkAvail, computerSetup }
}

export default gameBoard
