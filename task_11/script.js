"use strict";

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    calcArea(pi) {
        console.log(`Площадь круга равна ${pi * this.radius * this.radius}`);
    }

    calcLength(pi) {
        console.log(` Длина окружности равна ${2 * pi * this.radius}`);
    }
}

const circleOne = new Circle(3);
const circleTwo = new Circle(5);
circleOne.calcArea(3.1415);
circleTwo.calcLength(3.1415);

class Ellipse extends Circle {
    constructor(radius, radius2) {
        super(radius);
        this.radius2 = radius2;
    }

    calcAreaEllipse(pi) {
        console.log(`Площадь эллипса равна ${pi * this.radius * this.radius2}`);
    }
}

const ellipse1 = new Ellipse(1.2, 5);
ellipse1.calcAreaEllipse(3.14);

//=========================================================================//

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
// }
// class Rabbit extends Animal {
//     constructor(name) {
//         super(name);
//         this.created = Date.now();
//     }
// }

// let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
// console.log(rabbit.name);