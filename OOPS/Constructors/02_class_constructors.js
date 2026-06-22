// ============================================================
// ES6 CLASS CONSTRUCTORS
// ============================================================
// ES6 introduced the `class` keyword as syntactic sugar over prototypes.
// The `constructor` method is a special method for creating and initializing objects.

export class Car {
  // The constructor runs automatically when `new Car(...)` is called
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.speed = 0; // default value
  }

  // Instance method (automatically placed on the prototype)
  accelerate(amount) {
    this.speed += amount;
    console.log(`${this.brand} ${this.model} accelerated to ${this.speed} km/h`);
  }

  brake() {
    this.speed = 0;
    console.log(`${this.brand} ${this.model} stopped.`);
  }
}

// Usage
const myCar = new Car("Toyota", "Corolla", 2023);
myCar.accelerate(50); // Toyota Corolla accelerated to 50 km/h
myCar.accelerate(30); // Toyota Corolla accelerated to 80 km/h
myCar.brake();        // Toyota Corolla stopped.

// A class can only have ONE constructor method.
// If you don't define one, a default empty constructor is provided.

export class DefaultDemo {
  // No constructor defined → JavaScript provides: constructor() {}
}

const demo = new DefaultDemo();
console.log("DefaultDemo instance created:", demo);
