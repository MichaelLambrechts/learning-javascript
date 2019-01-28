const readlineSync = require("readline-sync");

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  

let rNumber = getRandomInt(100);
let yourNumber = 0;
while (yourNumber != rNumber){
let yourNumber = readlineSync.question("Guess the Number ? ");
if (yourNumber > rNumber)
{
    console.log("Too high");
}
else if (yourNumber < rNumber)
{
    console.log("Too low");
}
else{
    console.log("Well guessed !");
    console.log("$$" + yourNumber + "$$" + rNumber);
}
}
console.log("haha");
