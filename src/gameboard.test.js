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

test('check if board location has ship and fires its hit function', () => {
  const ship3 = ship(1)
  const newBoard = gameBoard()
  newBoard.placeShip(ship3, '1,1', 'h')
  newBoard.receiveAttack('1,1')
  expect(ship3.isSunk()).toBe(true)
})

test('if no ship is found, check a missed shot', () => {
  const newBoard = gameBoard()
  const location = '1,1'
  newBoard.receiveAttack(location)
  expect(newBoard.board[location]).toBe('missed')
})

test('all ships sunk?', () => {
  const ship4 = ship(1)
  const ship5 = ship(1)
  const newBoard = gameBoard()
  newBoard.placeShip(ship4, '1,1', 'h')
  newBoard.placeShip(ship5, '3,3', 'h')
  newBoard.receiveAttack('1,1')
  newBoard.receiveAttack('3,3')
  expect(newBoard.allSunk()).toBe(true)
})

test('not all ships sunk?', () => {
  const ship6 = ship(1)
  const ship7 = ship(1)
  const newBoard = gameBoard()
  newBoard.placeShip(ship6, '1,1', 'h')
  newBoard.placeShip(ship7, '3,3', 'h')
  newBoard.receiveAttack('1,1')
  expect(newBoard.allSunk()).toBe(false)
})
