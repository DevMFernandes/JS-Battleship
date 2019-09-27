import ship from './ship'

const gameBoard = () => {

  const receiveAttack = (location) => {
    if (hitShip){
      correctShip.hit(loc)
    }
  }

  const board = {}

  const placeShip = (ship, start, direction) => {
    for (let i = 0; i < ship.length; i++) {
      board["A" + i] = ship
    }
  }

  const ship1 = ship(5)
  placeShip(ship1, 'A1', 'v')

  const ship2 = ship(3)
  placeShip(ship2, 'B1', 'v')

}
