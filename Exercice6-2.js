const readlineSync = require("readline-sync");

class Rectangle{
    constructor(x, y, w, l){
        this.topLeftXPos = x;
        this.topLeftYPos = y;
        this.width = w;
        this.length = l;
    }

    addValue(x, y, w, l){

        this.x = readlineSync.questionInt ("value of the top left position for x = ");
        this.y = readlineSync.questionInt ("Value of the top left position for y = ");
        this.w = readlineSync.questionInt ("What's the width of the reactangle ? ");
        this.l = readlineSync.questionInt("What's the length of the rectangle ? ");
    }

    viewInfo(x, y, w, l){
        console.log("x top left position = " + this.x + "\ny top left position = " + this.y + "\nwidth = " + this.w + "\nlenght = " + this.l + "\n---------\n");
    }

    collides(){
        
        if (rectangle1.x < rectangle2.x + rectangle2.w && rectangle1.x + rectangle1.w > rectangle2.x && rectangle1.y < rectangle2.y + rectangle2.l && rectangle1.l + rectangle1.y > rectangle2.y){
            
            console.log("true");
            return true;
        }
        else {
            
            console.log("false");
            return false;
        }
        
    }
}

const rectangle1 = new Rectangle(0, 0, 0, 0);
rectangle1.addValue();
console.log("\n---Rectangle1---\n");
rectangle1.viewInfo();
const rectangle2 = new Rectangle(0,0,0,0);
rectangle2.addValue();
console.log("\n---Rectangle2---\n");
rectangle2.viewInfo();
rectangle1.collides();
