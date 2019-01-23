const readlineSync = require("readline-sync");
let index = 0;
class Rectangle {
    constructor(x, y, w, l, indx) {
        this.topLeftXPos = x;
        this.topLeftYPos = y;
        this.width = w;
        this.length = l;
        this.indx = index;
        index++;
        console.log(index);
    }

    viewInfo(x, y, w, l) {
        console.log("x top left position = " + this.x + "\ny top left position = " + this.y + "\nwidth = " + this.w + "\nlenght = " + this.l + "\n---------\n");
    }

    addRandomValue(x, y, w, l) {
        this.x = getRandomInt(100);
        this.y = getRandomInt(100);
        this.w = getRandomInt(10);
        this.l = getRandomInt(10);
    }

    collides(x, y, w, l, index) {
        /*for (i = 0; i < 1000; i++) {
            if (rectangle1.x < rectangle2.x + rectangle2.w && rectangle1.x + rectangle1.w > rectangle2.x && rectangle1.y < rectangle2.y + rectangle2.l && rectangle1.l + rectangle1.y > rectangle2.y) {

                console.log("true");
                return true;
            }
            else {

                console.log("false");
                return false;
            }
        
        }*/

        
        
    }


}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


for (i = 0; i < 1000; i++) {
    let rectangle = new Rectangle(0, 0, 0, 0, 0);
    rectangle.addRandomValue();
    rectangle.viewInfo();
    rectangle.collides();
}

