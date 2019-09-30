import gameBoard from './gameboard'
import ship from './ship'

test('Place vertical ship of size 3', () => {
  const ship1 = ship(3)
  const newBoard = gameBoard()
  newBoard.placeShip(ship1, '1,1', 'h')
  expect(newBoard.board['1,1']).toBe(ship1)
  expect(newBoard.board['1,2']).toBe(ship1)
  expect(newBoard.board['1,3']).toBe(ship1)
})

test('Place horizontal ship of size 3', () => {
  const ship2 = ship(3)
  const newBoard = gameBoard()
  newBoard.placeShip(ship2, '1,1', 'v')
  expect(newBoard.board['1,1']).toBe(ship2)
  expect(newBoard.board['2,1']).toBe(ship2)
  expect(newBoard.board['3,1']).toBe(ship2)
})
