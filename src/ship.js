class Ship {
  constructor (length = 0, location) {
    this.length = length
  }

  hit (pos) {
    const shipLoc = {
      A4: 'not hit',
      A5: 'not hit',
      A6: 'not hit'
    }
    if (shipLoc.pos) {
      shipLoc.pos = 'hit'
    }
    return shipLoc
  }

  isSunk (bool = false) {
    const shipLength = Ship.hit.shipLoc.length
  }
}

export default Ship
