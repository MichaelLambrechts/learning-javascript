const readlineSync = require("readline-sync");

//2.1
let age = readlineSync.questionInt("What's your age ? ");
if (age >= 18) {
    console.log("You're an adult");
}
else {
    console.log("You're not yet an adult");
}

//2.2

let number_min = readlineSync.questionInt("Please put a min number: ");
let number_max = readlineSync.questionInt("Please put a max number: ");
let number_current = readlineSync.questionInt("Please put a current number: ");

if (number_min < number_current && number_current < number_max) {
    console.log("Your current number is " + number_current);
}
else if (number_min > number_max) {
    console.log("You don't understand what min and max mean, you moron :) ");
    return 0;
}
else {
    console.log("Current is usually between min and max");
}

//2.3

let i = 1;
while (i <= 50) {
    console.log(i);
    i += 2;
}

for (i = 50; i < 100; i += 2) {
    console.log(i);
}

//2.4

let i_1 = 0;
let i_2 = 0;
let i_3 = 0;
for (i_1 = 0; i_1 < 100; i++) {
    if (i_1 % 2 == 0) {
        i_2 = i_1 / 2;
        console.log("===" + i_1 + "===")
        console.log(i_2);
    }
    else {
        console.log("===" + i_1 + "===")
        i_3 = i_1 * 3;
        console.log(i_3);
    }
    i_1++;
}


//2.5
let favNumber = 0;
while (favNumber !== 42) {
    favNumber = readlineSync.questionInt("What's your favorite number ? ");
    if (favNumber !== 42) {
        console.log("Are you Sure ? ");
    }
    else {
        console.log("That's better :)");
    }
}

//2.6

let day = readlineSync.questionInt("Please choose a number between 1 and 7 : ");

if (day === 1){
    console.log("It's monday")
}
else if (day === 2){
    console.log("It's tuesday")
}
else if (day === 3){
    console.log("It's wednesday")
}
else if (day === 4){
    console.log("It's thursday")
}
else if (day === 5){
    console.log("It's friday")
}
else if (day === 6){
    console.log("It's saturday")
}
else if (day === 7){
    console.log("It's sunday")
}
else{
    console.log("Is it too difficult to choose a number between 1 and 7 ????!")
}

//2.7

let n = readlineSync.questionInt("Please enter a number : ");
let n2 = 0;
for (i = 0; i <= n ; i++ ){
    n2 += i;
}
console.log("Result : " + n2);
