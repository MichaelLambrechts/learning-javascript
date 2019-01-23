const readlineSync = require("readline-sync");


//5.1
let serie = {
  "name": "black mirror",
  "year": 2008,
  "cast": []
};

var num1 = readlineSync.questionInt("How many cast members do you want to add ? ");
function askTvSerie() {
  serie.name = readlineSync.question("name : ");
  serie.year = readlineSync.questionInt("year : ");

  for (i = 0; i < num1; i++) {
    serie.cast[i] = readlineSync.question("cast [" + i + "]");
  }
}

function createJson() {
  let serie_in_json = JSON.stringify(serie);
  console.log(serie_in_json);
}

askTvSerie();
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




