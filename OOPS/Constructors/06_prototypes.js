// ============================================================
// PROTOTYPES & THE PROTOTYPE CHAIN
// ============================================================
// Every JS object has an internal link to another object called its prototype.
// When you access a property, JS walks up the prototype chain until it finds it.

export class Shape {
  constructor(color) {
    this.color = color;
  }

  describe() {
    return `A ${this.color} shape`;
  }
}

export class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

const myCircle = new Circle("red", 5);

// Prototype chain inspection
console.log("myCircle.__proto__ === Circle.prototype:", myCircle.__proto__ === Circle.prototype);
console.log("Circle.prototype.__proto__ === Shape.prototype:", Circle.prototype.__proto__ === Shape.prototype);
console.log("Shape.prototype.__proto__ === Object.prototype:", Shape.prototype.__proto__ === Object.prototype);

// Property lookup goes up the chain
console.log("Has own 'color':", myCircle.hasOwnProperty("color"));       // true
console.log("Has own 'area':", myCircle.hasOwnProperty("area"));         // false (on prototype)
console.log("Can access 'area':", typeof myCircle.area);                 // function

// ============================================================
// Object.create() — Create object with a specific prototype
// ============================================================

const animalPrototype = {
  speak() {
    console.log(`${this.name} says: ${this.sound}`);
  },
};

const cat = Object.create(animalPrototype);
cat.name = "Whiskers";
cat.sound = "Meow";
cat.speak(); // Whiskers says: Meow

// Check prototype
console.log("cat.__proto__ === animalPrototype:", Object.getPrototypeOf(cat) === animalPrototype);
