// ============================================================================
// MULTI-LEVEL INHERITANCE IN JAVASCRIPT
// ============================================================================

/*
MULTI-LEVEL INHERITANCE:
------------------------
When a class is derived from a class which is also derived from another class.
It forms a chain of inheritance.

CHAIN:
  GrandParent -> Parent -> Child -> GrandChild

SYNTAX:
  class A { }
  class B extends A { }
  class C extends B { }

KEY POINTS:
- Class C inherits from B, which inherits from A
- C has access to methods from both B and A
- The inheritance chain can be checked with instanceof
- super() always refers to the immediate parent class
*/


// ----------------------------------------------------------------------------
// EXAMPLE 1: BASIC MULTI-LEVEL INHERITANCE (3 Levels)
// ----------------------------------------------------------------------------

class LivingBeing {
    constructor(name) {
        this.name = name;
        this.kingdom = "Living Being";
    }

    breathe() {
        console.log(`${this.name} is breathing.`);
    }

    describe() {
        return `${this.name} is a ${this.kingdom}`;
    }
}

class Animal extends LivingBeing {
    constructor(name, species) {
        super(name);
        this.species = species;
        this.kingdom = "Animal";
    }

    move() {
        console.log(`${this.name} the ${this.species} is moving.`);
    }

    describe() {
        const base = super.describe();
        return `${base}, Species: ${this.species}`;
    }
}

class Dog extends Animal {
    constructor(name, species, breed) {
        super(name, species);
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} barks loudly!`);
    }

    describe() {
        const base = super.describe();
        return `${base}, Breed: ${this.breed}`;
    }
}

console.log("=== MULTI-LEVEL INHERITANCE (3 Levels) ===");

const living = new LivingBeing("Generic Life");
console.log(living.describe());
living.breathe();

console.log("---");

const animal = new Animal("Leo", "Lion");
console.log(animal.describe());
animal.breathe();  // From LivingBeing
animal.move();     // From Animal

console.log("---");

const dog = new Dog("Buddy", "Canine", "Labrador");
console.log(dog.describe());
dog.breathe();     // From LivingBeing
dog.move();        // From Animal
dog.bark();        // From Dog

console.log("\n");


// ----------------------------------------------------------------------------
// EXAMPLE 2: MULTI-LEVEL INHERITANCE (4 Levels)
// ----------------------------------------------------------------------------

class Vehicle {
    constructor(brand) {
        this.brand = brand;
        this.type = "Vehicle";
    }

    start() {
        console.log(`${this.brand} vehicle is starting.`);
    }

    stop() {
        console.log(`${this.brand} vehicle is stopping.`);
    }

    getInfo() {
        return `Brand: ${this.brand}, Type: ${this.type}`;
    }
}

class Car extends Vehicle {
    constructor(brand, model) {
        super(brand);
        this.model = model;
        this.type = "Car";
        this.wheels = 4;
    }

    honk() {
        console.log(`${this.brand} ${this.model} honks: Beep beep!`);
    }

    getInfo() {
        return `${super.getInfo()}, Model: ${this.model}, Wheels: ${this.wheels}`;
    }
}

class ElectricCar extends Car {
    constructor(brand, model, batteryCapacity) {
        super(brand, model);
        this.batteryCapacity = batteryCapacity;
        this.type = "Electric Car";
    }

    charge() {
        console.log(`${this.brand} ${this.model} is charging. Battery: ${this.batteryCapacity} kWh`);
    }

    getInfo() {
        return `${super.getInfo()}, Battery: ${this.batteryCapacity} kWh`;
    }
}

class TeslaModel extends ElectricCar {
    constructor(model, batteryCapacity, autopilotVersion) {
        super("Tesla", model, batteryCapacity);
        this.autopilotVersion = autopilotVersion;
        this.type = "Tesla";
    }

    enableAutopilot() {
        console.log(`${this.model} Autopilot v${this.autopilotVersion} enabled.`);
    }

    getInfo() {
        return `${super.getInfo()}, Autopilot: v${this.autopilotVersion}`;
    }
}

console.log("=== MULTI-LEVEL INHERITANCE (4 Levels) ===");

const vehicle = new Vehicle("Generic");
console.log(vehicle.getInfo());
vehicle.start();

console.log("---");

const car = new Car("Toyota", "Corolla");
console.log(car.getInfo());
car.start();  // From Vehicle
car.honk();   // From Car

console.log("---");

const eCar = new ElectricCar("Nissan", "Leaf", 40);
console.log(eCar.getInfo());
eCar.start();   // From Vehicle
eCar.honk();    // From Car
eCar.charge();  // From ElectricCar

console.log("---");

const tesla = new TeslaModel("Model S", 100, "12.0");
console.log(tesla.getInfo());
tesla.start();           // From Vehicle
tesla.honk();            // From Car
tesla.charge();          // From ElectricCar
tesla.enableAutopilot(); // From TeslaModel

console.log("\n");


// ----------------------------------------------------------------------------
// EXAMPLE 3: CONSTRUCTOR CHAINING WITH super()
// ----------------------------------------------------------------------------

class Person {
    constructor(name) {
        console.log("[Person] Constructor called");
        this.name = name;
    }
}

class Student extends Person {
    constructor(name, studentId) {
        console.log("[Student] Constructor called");
        super(name); // Calls Person constructor
        this.studentId = studentId;
    }
}

class GraduateStudent extends Student {
    constructor(name, studentId, thesisTopic) {
        console.log("[GraduateStudent] Constructor called");
        super(name, studentId); // Calls Student constructor
        this.thesisTopic = thesisTopic;
    }
}

console.log("=== CONSTRUCTOR CHAINING ===");
const grad = new GraduateStudent("Alice", "G001", "AI in Healthcare");
console.log(`Name: ${grad.name}, ID: ${grad.studentId}, Thesis: ${grad.thesisTopic}`);
console.log("\n");


// ----------------------------------------------------------------------------
// EXAMPLE 4: instanceof ACROSS MULTI-LEVEL CHAIN
// ----------------------------------------------------------------------------

console.log("=== INSTANCEOF CHECKS ACROSS LEVELS ===");
console.log(`tesla instanceof TeslaModel:     ${tesla instanceof TeslaModel}`);     // true
console.log(`tesla instanceof ElectricCar:    ${tesla instanceof ElectricCar}`);    // true
console.log(`tesla instanceof Car:            ${tesla instanceof Car}`);            // true
console.log(`tesla instanceof Vehicle:        ${tesla instanceof Vehicle}`);        // true
console.log(`tesla instanceof Object:         ${tesla instanceof Object}`);         // true

console.log("---");

console.log(`grad instanceof GraduateStudent: ${grad instanceof GraduateStudent}`); // true
console.log(`grad instanceof Student:         ${grad instanceof Student}`);         // true
console.log(`grad instanceof Person:          ${grad instanceof Person}`);          // true
console.log(`grad instanceof Object:          ${grad instanceof Object}`);          // true

console.log("\n");


// ----------------------------------------------------------------------------
// EXAMPLE 5: METHOD OVERRIDING CHAIN WITH super
// ----------------------------------------------------------------------------

class A {
    greet() {
        return "Hello from A";
    }
}

class B extends A {
    greet() {
        return `${super.greet()} -> Hello from B`;
    }
}

class C extends B {
    greet() {
        return `${super.greet()} -> Hello from C`;
    }
}

console.log("=== METHOD OVERRIDING CHAIN ===");
const objA = new A();
const objB = new B();
const objC = new C();

console.log(`A says: ${objA.greet()}`);
console.log(`B says: ${objB.greet()}`);
console.log(`C says: ${objC.greet()}`);
console.log("\n");


// ============================================================================
// SUMMARY
// ============================================================================
console.log("=== MULTI-LEVEL INHERITANCE SUMMARY ===");
console.log(`
DEFINITION:
  A class inherits from another class, which itself inherits from another class,
  forming a chain: GrandParent -> Parent -> Child -> GrandChild

SYNTAX:
  class A { }
  class B extends A { }
  class C extends B { }

KEY POINTS:
  - Each class extends exactly one parent
  - The chain forms a vertical hierarchy
  - super() always calls the immediate parent's constructor
  - super.method() calls the immediate parent's method
  - instanceof returns true for all classes in the chain
  - Method overriding can chain using super to include parent behavior

BENEFITS:
  - Highly reusable and organized code
  - Natural representation of real-world hierarchies
  - Can add specialization at each level

CAUTION:
  - Very deep chains can become hard to maintain
  - Changes in a parent class affect all descendants
  - Prefer composition over very deep inheritance chains
`);
