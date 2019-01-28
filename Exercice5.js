
const readlineSync = require("readline-sync");


//5.1


var num1 = readlineSync.questionInt("How many cast members do you want to add ? ");

/**
  Ask for a tv serie and return it.
*/
function askTvSerie() {
  let serie = {
    "name": "black mirror",
    "year": 2008,
    "cast": []
  };

  serie.name = readlineSync.question("name : ");
  serie.year = readlineSync.questionInt("year : ");

  for (i = 0; i < num1; i++) {
    serie.cast[i] = readlineSync.question("cast [" + i + "]");
  }

  return serie;
}


function askMultipleTvSerie() {
  let num = new Number(readlineSync.question("how many ?"));
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(askTvSerie());
  }
  return arr;
}


function createJson() {
  let serie_in_json = JSON.stringify(serie);
  console.log(serie_in_json);
}

let serie = askTvSerie();
createJson();
console.log("\n\n" + serie.name);
console.log("\n" + serie.year);
console.log("\n" + serie.cast);

//5.2

function randomizeCast(serie, num1) {
  console.log("\n initialisation du randomizeCast");
  console.log("cast members are : " + serie.cast);
  let a = 0;
  for (i = 0; i < num1; i++) {
      let randomValue = (Math.random() * num1);
      randomValue = Math.trunc(randomValue);
      a = serie.cast[i];
      serie.cast[i] = serie.cast[randomValue];
      serie.cast[randomValue] = a;
  }
}

randomizeCast(serie, num1);
createJson();




