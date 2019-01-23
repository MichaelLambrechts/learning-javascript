const readlineSync = require("readline-sync");

class Circle {
  constructor(x, y, r) {
    this.xPos = x;
    this.yPos = y;
    this.radius = (y - x) / 2;
  }

  move(xOffset, yOffset){
    const x = readlineSync.questionInt("Value of x = ");
    const y = readlineSync.questionInt("Value of y = ");
    this.radius = (y - x)/2;
    console.log("radius : " + this.radius);
  }

  get surface(){
    return 3.1416 * this.radius * this.radius;
  }
}

const circle1 = new Circle();
circle1.move();
console.log("The surface is " + circle1.surface);








