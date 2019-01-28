const readlineSync = require("readline-sync");

let askNumber = readlineSync.questionInt("What Fibonacci Number do you want ? ");


0, 1, 1, 2, 3, 5, 8, 13, 21
let a = 0;
let b = 1;
let c = 0;

console.log("voici la suite de Fibonacci : ");
for (i=0; i<askNumber; i++)
{
    c = a + b; // c = 3eme nombre/ a = 1er / b = 2eme
    a = b;
    b = c;
    console.log(c);
}

console.log("Le nombre de Fibonacci est " + c + "pour " + askNumber);