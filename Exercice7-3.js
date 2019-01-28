const readlineSync = require("readline-sync");


let askNumber = readlineSync.questionInt("What's your favorite intenger ?");
let a =0;
let b = 0;
for (i=0; i<askNumber; i++){
    a = askNumber % i;
    
    b = askNumber/i;

    if (a === 0 && b != askNumber)
    {
        console.log(b);
    }
   
}