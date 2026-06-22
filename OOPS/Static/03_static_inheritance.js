// ============================================================
// STATIC MEMBERS IN INHERITANCE
// ============================================================
// Static members are INHERITED by subclasses.
// You can override them, shadow them, or access them via `super` in static methods.

// ------------------ Parent Class ------------------
export class Animal {
  static kingdom = "Animalia";
  static count = 0;

  constructor(name) {
    this.name = name;
    Animal.count++;
  }

  static describe() {
    return `All ${this.kingdom} creatures`;
  }

  static getCount() {
    return this.count;
  }
}

// ------------------ Child Class ------------------
export class Dog extends Animal {
  // Overrides parent's static field
  static kingdom = "Canis";

  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  static describe() {
    // `super` in static method refers to PARENT class
    return `${super.describe()} — specifically dogs (${this.kingdom})`;
  }
}

// ------------------ Another Child ------------------
export class Cat extends Animal {
  static kingdom = "Felis";

  constructor(name, color) {
    super(name);
    this.color = color;
  }
}

// ------------------ Demonstration ------------------
export function demonstrateStaticInheritance() {
  console.log("Animal.kingdom:", Animal.kingdom);     // Animalia
  console.log("Dog.kingdom:", Dog.kingdom);           // Canis
  console.log("Cat.kingdom:", Cat.kingdom);           // Felis

  // Static methods are inherited
  console.log("Dog.getCount() exists?", typeof Dog.getCount); // function

  // BUT static fields are NOT shared — each class has its own copy
  const dog1 = new Dog("Buddy", "Labrador");
  const dog2 = new Dog("Max", "Beagle");
  const cat1 = new Cat("Whiskers", "Orange");

  console.log("\nAnimal.count:", Animal.count); // 3 (all instances)
  console.log("Dog.count:", Dog.count);         // undefined — Dog doesn't define its own count
  // Wait: actually Dog inherits count from Animal, so Dog.count === Animal.count
  console.log("Dog.count === Animal.count:", Dog.count === Animal.count); // true

  // If we want per-class counting, each subclass needs its OWN static counter
  console.log("\n--- Per-Class Counters ---");
}

// ------------------ Per-Class Static Counters ------------------
export class Vehicle {
  static totalCount = 0;

  constructor() {
    Vehicle.totalCount++;
  }
}

export class Car extends Vehicle {
  static carCount = 0;

  constructor() {
    super();
    Car.carCount++;
  }
}

export class Bike extends Vehicle {
  static bikeCount = 0;

  constructor() {
    super();
    Bike.bikeCount++;
  }
}

export function demonstratePerClassCounters() {
  const c1 = new Car();
  const c2 = new Car();
  const b1 = new Bike();

  console.log("Total vehicles:", Vehicle.totalCount); // 3
  console.log("Cars:", Car.carCount);                 // 2
  console.log("Bikes:", Bike.bikeCount);              // 1
}
