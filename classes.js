// // ES5
// // classes to organize our code
// function Car(options) {
//     this.title = options.title;
// }

// Car.prototype.drive = function () {
//     return 'vroom';
// }

// function Toyota(options) {
//     Car.call(this, options);
//     this.color = options.color;
// }

// Toyota.prototype = Object.create(Car.prototype);
// Toyota.prototype.constructor = Toyota;
// Toyota.prototype.honk = function () {
//     return 'beep';
// }

// //const car = new Car({tile: 'Focus'});
// // car.drive(); //vroom
// // car; // {'title': 'Focus'}

// const toyota = new Toyota({ color: 'red', title: 'Daily Driver'});
// console.log(toyota)
// console.log(toyota.honk())
// console.log(toyota.drive())

//REFACTORING WITH CLASSES ES6
class Car {
  constructor({ title }) {
    this.title = title;
  }
  drive() {
    return "vroom";
  }
}

//toyota is extendig car
class Toyota extends Car {
  constructor(options) {
    //when we call super() we have to pass all the options, if we use destructuring all the variables
    super(options); //calling car cunstroctor
    this.color = options.color;
  }
  honk() {
    return "beep";
  }
}

const car = new Car({ title: "Toyota" });

console.log(car);
console.log(car.drive());

const toyota = new Toyota({ color: "red" });
console.log(toyota);
console.log(toyota.honk());

console.log("---exercise----");

class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake extends Monster {
    bite(targetSnake) {
        targetSnake.health -= 10;
    }
}
