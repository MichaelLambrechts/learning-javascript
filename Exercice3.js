const readlineSync = require("readline-sync");
//3.1

let arr_1 = [1, 2, 3, 4, 5];
let arr_2 = [100, 101, 102];

let result_1 = 0;
let result_2 = 0;

//===================================
let i = 0;
for (i=0; i < arr_1.length ; i++){
    result_1 += arr_1[i];
    console.log(result_1);
}
//===================================

for (let elem of arr_1){
    result_1 += elem;
}


console.log("Result = " + result_1);


//3.2 
for (let elem of arr_2){
    result_2 += elem;
}
console.log("Result = " + result_2);



//3.3

let arr_10 = [1 , 2 , 3 , 4, 5, 6 , 7, 8, 9, 10];
let arr_11 = [];
for (let elem2 of arr_10){

    arr_11.push(elem2);
    
}

for (i_2 = 0 ; i_2< arr_10.length ; i_2++){

    arr_11[i_2] = arr_10[i_2];

}

console.log(arr_11);


//3.4


let arr_20 = [23, 420, 2, 198, 2399];
let min = arr_20[0];
let max = arr_20[0];

for (let elem3 of arr_20){

    if (elem3 < min){
        min = elem3;
    }

    else if (elem3 > max){
        max = elem3;
    }

}


//++++++++++++++++++++++++++++++++++++++++++++//
for ( i_4 = 0 ; i_4 < arr_20.length ; i_4 ++)
{
    if (arr_20[i_4] < min)
    {
        min = arr_20[i_4];
    }
    else if (arr_20[i_4] > max)
    {
        max = arr_20[i_4];
    }
    else
    {

    }

}
//++++++++++++++++++++++++++++++++//




console.log("min = " + min + " &&&&& max = " + max);
