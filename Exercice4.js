const readlineSync = require("readline-sync");

//4.1
function calcSurface (a , b)
{
    return a * b;
}

let a = readlineSync.questionInt("length of the rectangle : ");
let b = readlineSync.questionInt("width of the rectangle : ");
console.log("The surface of rectangle is "+ calcSurface(a, b));


//4.2
function rand10() {
    let randomValue = (Math.random() * 10) + 1;
    return randomValue = Math.trunc(randomValue);
}

console.log(rand10());

//4.3

function multiRand(n) {
    let arr = Array(n);
    for (i = 0; i < n ; i++) {
        arr[i] = rand10();
    }
    return arr;
}
let numberR = readlineSync.questionInt("How many random numbers do you want in your table, dude ? ");
console.log(multiRand(numberR));

/* AVEC LA BOUCLE for (elem of arr)??????*/

//4.4

let numberS = readlineSync.questionInt("How many random values do you want ? ");
array_02 = multiRand(numberS);

function average(arr) {
    let total = 0;
    let av = 0;
    for (i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    av = total / arr.length;
    return av;
}

function min (arr) {
    let min = 0;
    min = arr[0];
    for (i = 0; i < arr.length; i++){
        if (min > arr[i])
        {
            min = arr[i];
        }
    }
    return min;
}

function max (arr) {
    let max = 0;
    max = arr[0];
    for (i = 0; i < arr.length; i++){
        if (max < arr[i])
        {
            max = arr[i];
        }
    }
    return max;
}


console.log("The table is : " + array_02 + "\nAverage is : " + average(array_02) + "\nMin value is : " + min(array_02) + "\nMax value is : " + max(array_02));

// 4.5

function calcDistance(x1, x2, y1, y2) {
    let a = x1 - x2;
    let b = y1 - y2;
    let c = Math.sqrt( a*a + b*b );
    return c;
}

let x1 = readlineSync.questionInt ("Put the x1 value : ");
let y1 = readlineSync.questionInt ("Put the y1 value : ");
let x2 = readlineSync.questionInt ("Put the x2 value : ");
let y2 = readlineSync.questionInt ("Put the y2 value : ");

console.log("\nThe distance is : " + calcDistance(x1, x2, y1, y2));


function factorial(a) {
    if (a === 0) {
        return 1;
    }
    else {
        return a * factorial(a - 1);
    }
}

let factor = readlineSync.questionInt("Choose a number to have the factorial number of it : ");

console.log("Factorial is : " + factorial(factor));

