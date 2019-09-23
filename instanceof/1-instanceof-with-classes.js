import { Character } from "../characters/character.js"
import { Warrior } from "../characters/warrior.js"
import { Mage } from "../characters/mage.js"

const charac = new Character()
const war = new Warrior()
const mago = new Mage()

console.log("charac instanceof Character: ", charac instanceof Character)
console.log("charac instanceof Warrior: ", charac instanceof Warrior)
console.log("charac instanceof Mage: ", charac instanceof Mage)
