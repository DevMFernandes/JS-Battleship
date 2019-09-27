import ship from './ship'

test('ship should be sunk', () => {
  const titanic = ship(1)
  titanic.hit()
  expect(titanic.isSunk).toBe(true)
})

test('ship should have taken 1 hit', () => {
  const titanic = ship(2)
  titanic.hit()
  expect(titanic.hit).toBe(1)
})

test('ship should not be sunk', () => {
  const titanic = ship(2)
  titanic.hit()
  expect(titanic.isSunk).toBe(false)
})
