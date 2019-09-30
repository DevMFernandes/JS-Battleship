import ship from './ship'

const gameBoard = () => {

  // const receiveAttack = (location) => {
  //   if (hitShip){
  //     correctShip.hit(loc)
  //   }
  // }

  const board = {}

  const placeShip = (ship, start, dir) => {
    const x = start.split('')
    const startRow = x[0]
    const startCol = x[1]

    if (dir === 'h') {
      for (let i = 0; i < ship.length; i++) {
        board[startRow + (startCol + i)] = ship
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        const y = startRow.charCodeAt(0) + i
        board[String.fromCharCode(y) + startCol] = ship
      }
    }
  }

  const ship1 = ship(5)
  placeShip(ship1, 'A1', 'v')

  const ship2 = ship(3)
  placeShip(ship2, 'B1', 'v')
}
