
const readlineSync = require("readline-sync");
console.log("Hello! Welcome to the Pizza Flavors Manager");
function menu() {
    console.log("=========MENU PRINCIPAL======\n");
    let a = "1 - List all the pizza flavors";
    let b = "2 - Add a new pizza flavor";
    let c = "3 - Remove a pizza flavor";
    let d = "4 - Exit this program";
    console.log(a + "\n" + b + "\n" + c + "\n" + d + "\n");
}

function listPizza() {
    let exit1 = 0;
    if (arrayPizza.length === 0) {
        console.log("\nThere is no pizza in your list");
    }
    else {
        while (exit1 === 0) {
            for (i = 0; i < arrayPizza.length; i++) {
                console.log(i + " - Pizza " + arrayPizza[i]);
            }
            exit1 = readlineSync.questionInt("\nInsert 1 to exit : ");
        }
    }
}

function addPizza() {
    let a = readlineSync.questionInt("Select a pizza to add : \n\n1 - Anchois\n2 - Champignon\n3 - Chèvre\n4 - Alsacienne\n5 - 4 fromages\n6 - Jambon Italien\n7 - Calzone\n8 - Barbecue\n9 - Cancel\n\nEnter number : ");
    let arr = ["anchois", "champignon", "chèvre", "alsacienne", "4 fromages", "jambon italien", "calzone", "barbecue"];
    if (a > 0 && a < 9) {
        a = arr[a - 1];
        arrayPizza.push(a);
    }
    else if (a === 9){
        console.log("cancelling...");
    }
    else {
        console.log("Incorrect value");
    }
}

function removePizza() {
    console.log("Here is your pizza list");
    for (i = 0; i < arrayPizza.length; i++) {
        console.log(i + " - Pizza " + arrayPizza[i]);
    }
    let removeInt = readlineSync.questionInt("\nSelect the number of pizza to remove : ");
    arrayPizza.splice(removeInt, 1);
}

let choose = 0;

let arrayPizza = [];

while (choose != 4) {
    menu();
    choose = readlineSync.questionInt("\nEnter number : ");

    if (choose === 1) {
        console.log("List of your pizza's command : ")
        listPizza();
    }
    else if (choose === 2) {
        addPizza();
    }
    else if (choose === 3) {
        removePizza();
    }
    else if (choose === 4) {
        console.log("See you soon !");
    }
    else {
        console.log("Please enter a correct number");
    }
}

