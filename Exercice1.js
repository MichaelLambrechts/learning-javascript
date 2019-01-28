const readlineSync = require("readline-sync");


//1.0

//faire des calculs dictement dans node :)

 // 1.1
let justA_variable = "michael";
console.log(justA_variable);

// 1.2
let name = "Lambert";
let firstName = "Gerard";
let city = "Paris";
console.log ("Your name is " + firstName + " " + name + " and you live in " + city);

//1.3
let userName = readlineSync.question("What's your name bro ? ");
console.log("Hello " + userName);

//1.4
let name2 = readlineSync.question("What's your name ? ");
let firstName2 = readlineSync.question("What's your First Name ? ");
let city2 = readlineSync.question("What's your City ? ");
console.log ("Your name is " + firstName2 + " " + name2 + " and you live in " + city2);

//1.5
let number_1 = readlineSync.questionFloat("GIve me a decimal number please : ");
let number_2 = readlineSync.questionFloat("Give me another one : ");
number_1 = Math.trunc(number_1);
let number_3 = number_1 * number_2;
console.log("The result is " + number_3);

//1.6
let number_10 = readlineSync.questionFloat("GIve me a decimal number please : ");
let number_11 = readlineSync.questionFloat("Give me another one : ");
number_10 = Math.trunc(number_10);
let number_12 = number_10 % number_11;
console.log("The result is " + number_12);

//1.7

let shoeSize = readlineSync.questionInt("Give me your shoe size please : ");
let birthYear = readlineSync.questionInt("Give me your birth year please : ");
shoeSize *= 2;
shoeSize += 5;
shoeSize *= 50;
shoeSize -= birthYear;
shoeSize += 1766;

console.log("x2 +5 *50 -birthYear + 1766 = " + shoeSize);


//1.8
let countQ = 5;
countQ--;
console.log ("--Only "+countQ+" questions left--");
let story_1 = readlineSync.question("Give me a name : ");
countQ--;
console.log ("--Only "+countQ+" questions left--");
let story_2 = readlineSync.questionInt("Give me a number : ");
countQ--;
console.log ("--Only "+countQ+" questions left--");
let story_3 = readlineSync.question("Give me a city : ");
countQ--;
console.log ("--Only "+countQ+" questions left--");
let story_4 = readlineSync.question("Give me a country : ");

console.log("That's a story of a donkey named "+ story_1 + " who was hungry, he wanted to eat " + story_2 + " pizzas but for that, he had to go to " + story_3 + " or maybe in this country : " + story_4);