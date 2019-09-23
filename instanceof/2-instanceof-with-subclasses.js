import { Character } from "../characters/character.js"
import { Warrior } from "../characters/warrior.js"
import { Mage } from "../characters/mage.js"

const war = new Warrior()
const mago = new Mage()

console.log("war instanceof Character: ", war instanceof Character)
console.log("war instanceof Warrior: ", war instanceof Warrior)
console.log("war instanceof Mage: ", war instanceof Mage)

console.log("mago instanceof Character: ", mago instanceof Character)
console.log("mago instanceof Warrior: ", mago instanceof Warrior)
console.log("mago instanceof Mage: ", mago instanceof Mage)
