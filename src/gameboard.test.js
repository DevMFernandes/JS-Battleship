import gameBoard from './gameboard'
import ship from './ship'

test('Place vertical ship of size 3 from A1 thru A3', () => {
  const ship1 = ship(3)
  const newBoard = gameBoard()
  newBoard.placeShip(ship1, 'A1', 'v')
  expect(newBoard.board.A1).toBe(ship1)
  expect(newBoard.board.A2).toBe(ship1)
  expect(newBoard.board.A3).toBe(ship1)
})

test('Place horizontal ship of size 3 from A1 thru C1', () => {
  const ship1 = ship(3)
  const newBoard = gameBoard()
  newBoard.placeShip(ship1, 'A1', 'h')
  expect(newBoard.board.A1).toBe(ship1)
  expect(newBoard.board.B1).toBe(ship1)
  expect(newBoard.board.C1).toBe(ship1)
})
