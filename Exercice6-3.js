const readlineSync = require("readline-sync");
let index = 0;
let total = 0;
let arrayX = []
let arrayY = [];
let arrayW = [];
let arrayL = [];
class Rectangle {
    constructor(x, y, w, l) {
        this.topLeftXPos = x;
        this.topLeftYPos = y;
        this.width = w;
        this.length = l;
    }

    viewInfo(x, y, w, l) {
        console.log("x top left position = " + this.x + "\ny top left position = " + this.y + "\nwidth = " + this.w + "\nlength = " + this.l + "\n---------\n");
    }

    addRandomValue(rectangle) {
        this.x = getRandomInt(100);
        this.y = getRandomInt(100);
        this.w = getRandomInt(10);
        this.l = getRandomInt(10);

        arrayX[i] = this.x;


        arrayY[i] = this.y;


        arrayW[i] = this.w;
        console.log(arrayW[i]);


        arrayL[i] = this.l;
        console.log(arrayL[i]);
        return arrayX, arrayY, arrayW, arrayL;
    }

}

function collides(arrayX, arrayY, arrayW, arrayL) {
    for (i = 0; i < 1000; i++) {
        for (let j = 0; j < 1000; j++) {
            if (arrayX[i] < arrayX[j] + arrayW[j] && arrayX[i] + arrayW[i] > arrayX[j] && arrayY[i] < arrayY[j] + arrayL[j] && arrayL[i] + arrayY[i] > arrayY[j] && i != j) {
                total++;
            }
        }
    }
}


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


for (i = 0; i < 1000; i++) {
    let rectangle = new Rectangle(0, 0, 0, 0, 0);
    rectangle.addRandomValue(rectangle);
    rectangle.viewInfo();

}
collides(arrayX, arrayY, arrayW, arrayL);
console.log("TOTAL collisions = " + total);