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
      let x = Math.floor(Math.random() * setLength()) + 1
      let y = Math.floor(Math.random() * setLength()) + 1

      const positions = []
      const check = () => {
        for (let i = 0; i < positions.length; i++) {
          const e = positions[i]
          if (o === 'v') {
            if (parseInt(x) + len - 1 > setLength()) {
              return false
            }
            for (let i = x; i <= len + x; i++) {
              if (e === `${i},${y}`) {
                return false
              }
            }
          } else {
            if (parseInt(y) + len - 1 > setLength()) {
              return false
            }
            for (let i = y; i <= len + y; i++) {
              if (e === `${x},${i}`) {
                return false
              }
            }
          }
        }
        return true
      }

      while (check() === false) {
        if (Math.floor(Math.random() * 2) === 0) {
          o = 'v'
          x = Math.floor(Math.random() * setLength()) + 1
          y = Math.floor(Math.random() * setLength()) + 1
        } else {
          o = 'h'
          x = Math.floor(Math.random() * setLength()) + 1
          y = Math.floor(Math.random() * setLength()) + 1
        }
      }

      if (o === 'v') {
        for (let i = x; i < len + x; i++) {
          positions.push(`${i},${y}`)
        }
      } else {
        for (let i = y; i < len + y; i++) {
          positions.push(`${x},${i}`)
        }
      }

      placeShip(ship, `${x},${y}`, o)
    })
    if (Object.keys(board).length !== 14) {
      location.reload()
    }
  }

  const checkAvail = (o, x, y, shipLen) => {
    const positions = []
    for (let i = 0; i < Object.keys(board).length; i++) {
      const e = Object.keys(board)[i]
      positions.push(e)
    }
    const check = (len) => {
      for (let i = 0; i < positions.length; i++) {
        const e = positions[i]
        if (o === 'v') {
          if (parseInt(x) + shipLen - 1 > setLength()) {
            updateMsg('Ship cannot be outside of the board!')
            return false
          }
          for (let i = x; i <= len + x; i++) {
            if (e === `${i},${y}`) {
              updateMsg('Cannot place ship on top of each other!')
              return false
            }
          }
        } else {
          if (parseInt(y) + shipLen - 1 > setLength()) {
            updateMsg('Ship cannot be outside of the board!')
            return false
          }
          for (let i = y; i <= len + y; i++) {
            if (e === `${x},${i}`) {
              updateMsg('Cannot place ship on top of each other!')
              return false
            }
          }
        }
      }
      updateMsg('Ship placed!')
      return true
    }
    return check(shipLen)
  }

  return { placeShip, board, receiveAttack, allSunk, checkAvail, computerSetup, ships }
}

export default gameBoard
