const ship = (len) => {
  const hitPos = []

  function hit (pos) {
    hitPos.push(pos)
  }

  function isSunk () {
    return (hitPos.length >= len)
  }

  return { hit, isSunk, len }
}

export default ship
