// ============================================================
// INHERITANCE & super()
// ============================================================
// Use `extends` to create a subclass that inherits from a parent class.
// `super()` calls the parent class's constructor.
// `super.method()` calls a parent class's method.

export class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }

  describe() {
    return `${this.name} is a ${this.species}`;
  }
}

export class Dog extends Animal {
  constructor(name, breed) {
    // MUST call super() before using `this` in a subclass constructor
    super(name, "Dog"); // Calls Animal's constructor
    this.breed = breed;
  }

  speak() {
    // Override parent method
    console.log(`${this.name} barks!`);
  }

  fetch() {
    console.log(`${this.name} is fetching the ball.`);
  }

  fullDescription() {
    // Access parent method with super.methodName()
    return `${super.describe()} of breed ${this.breed}`;
  }
}

// Usage
const myDog = new Dog("Buddy", "Golden Retriever");
console.log(myDog.describe());        // Buddy is a Dog (inherited)
myDog.speak();                        // Buddy barks! (overridden)
myDog.fetch();                        // Buddy is fetching the ball.
console.log(myDog.fullDescription()); // Buddy is a Dog of breed Golden Retriever

// ============================================================
// INHERITANCE WITH FUNCTION CONSTRUCTORS (Pre-ES6)
// ============================================================

export function Vehicle(type) {
  this.type = type;
}

Vehicle.prototype.start = function () {
  console.log(`The ${this.type} is starting.`);
};

export function Bicycle(brand) {
  Vehicle.call(this, "bicycle"); // Call parent constructor with explicit this
  this.brand = brand;
}

// Set up prototype chain
Bicycle.prototype = Object.create(Vehicle.prototype);
Bicycle.prototype.constructor = Bicycle;

Bicycle.prototype.ringBell = function () {
  console.log("Ring ring!");
};

const myBike = new Bicycle("Trek");
myBike.start();   // The bicycle is starting. (inherited)
myBike.ringBell(); // Ring ring!
