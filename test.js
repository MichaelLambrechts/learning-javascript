const readlineSync = require("readline-sync");

// 1.1
let justA_variable = "michael";
console.log(justA_variable);

// 1.2
let name = "Lambert";
let firstName = "Gerard";
let city = "Paris";
console.log ("Your name is " + firstName + " " + name + "and you live in " + city);

//1.3
let userName = readlineSync.question("What's your name bro ? ");
console.log("Hello " + userName);

