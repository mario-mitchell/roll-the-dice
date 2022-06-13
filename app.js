/* Six Sided 

const prompt = require('prompt-sync')({sigint: true});


let choice = (prompt("Do you want to roll the dice?: Yes or No? "));

if (choice === "yes"){
    console.log("You rolled: ")
console.log(Math.ceil(Math.random()*6))
} else if (choice === "no") {
    console.log("LAME!")
}

*/



/* Custom Roll

const prompt = require('prompt-sync')({sigint: true});

console.log("So you wanna roll the dice?")

let sides = Number(prompt("How many sides do you want?: "));

console.log(Math.ceil(Math.random()*sides))

*/


//Rigged

const prompt = require('prompt-sync')({sigint: true});

console.log("So you wanna roll the dice?")

let rig = Number(prompt("Lets load this dice..what do you want to roll? 1 - 6: "));


let result = Math.ceil(Math.random()*10)

if(result === 7){
    console.log(rig)
} else {
    console.log(result)
}

console.log(Math.round(Math.random()*6))