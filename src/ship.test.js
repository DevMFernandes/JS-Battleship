import Ship from './ship'

test('ship', () => {
  const newShip = new Ship()
  expect(newShip(3, [0, 0, 0], false)).toBe()
})
