import player from '../js/players'
import gameBoard from '../js/gameboard'
import ship from '../js/ship'

test('player should take turns', () => {
  const pBoard = gameBoard()
  const eBoard = gameBoard()
  const ship1 = ship(3)
  const newPlayer = player(pBoard)
  const enemy = player(eBoard)
  enemy.eBoard.placeShip(ship1, '1,1', 'v')
  newPlayer.attack(enemy, '1,1')
  expect(enemy.eBoard.board['1,1']).toBe(ship1)
})
