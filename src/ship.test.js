import ship from './ship'

test('ship should be sunk', () => {
  const titanic = ship(1)
  titanic.hit('1,1')
  expect(titanic.isSunk()).toBe(true)
})


test('ship should not be sunk', () => {
  const titanic = ship(2)
  titanic.hit('1,1')
  expect(titanic.isSunk()).toBe(false)
})
