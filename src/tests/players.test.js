import player from '../js/players'
import gameBoard from '../js/gameboard'
import ship from '../js/ship'

test('player should be able to attack', () => {
  const tboard1 = gameBoard()
  const tship1 = ship(1)
  tboard1.placeShip(tship1, '1,1', 'v')
  const tplayer2 = player(tboard1)
  tplayer2.attack('1,1')
  expect(tship1.isSunk()).toBe(true)
})

test('computer can play', () => {
  const tboard1 = gameBoard()
  const tplayer2 = player(tboard1, true)
  tplayer2.attack()
  expect(Object.keys(tboard1.board).length).toBe(1)
})
