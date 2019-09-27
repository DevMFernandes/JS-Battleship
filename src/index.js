import './mystyles.scss'
import Ship from './ship'

console.log('helloo')

const newShip = new Ship(3)
console.log(Object.keys(newShip.hit()).length)
