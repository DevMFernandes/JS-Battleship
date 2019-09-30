import player from '../js/players'
import gameBoard from '../js/gameboard'
import ship from '../js/ship'

test('player should be able to attack', () => {
  const board1 = gameBoard()
  const ship1 = ship(1)
  board1.placeShip(ship1, '1,1', 'v')
  const player2 = player(board1)
  player2.attack('1,1')
  expect(ship1.isSunk()).toBe(true)
})

test('computer can play', () => {
  const board1 = gameBoard()
  const ship1 = ship(1)
  board1.placeShip(ship1, '1,1', 'v')
  const player2 = player(board1, true)
  player2.attack()
  expect(ship1.isSunk()).toBe(true)
})
