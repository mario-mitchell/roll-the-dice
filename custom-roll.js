//Create a new file, custom-roll.js, 
//that prompts the user for how many sides the dice should have, 
//then simulates a roll of a dice with that many sides.
const prompt = require('prompt-sync')({sigint: true});
let threeSided = Math.floor(Math.random() * 3) + 1
let fourSided = Math.floor(Math.random() * 4) + 1
let fiveSided = Math.floor(Math.random() * 5) + 1
let sixSided = 6
let luckOfTheRoll = Number (prompt("How many sides do you want the die to have? 3, 4, 5, or 6 "))

if sixSided{
    console.log(Math.floor(Math.random() * 6) + 1)
}


