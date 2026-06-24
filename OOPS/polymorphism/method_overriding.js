// ============================================================================
// METHOD OVERRIDING (Runtime / Subtype Polymorphism)
// ============================================================================

/*
WHAT IS RUNTIME POLYMORPHISM?
-----------------------------
The same method call behaves differently based on the ACTUAL object's class.
The decision of WHICH method to run is made at RUNTIME, not compile time.

In JavaScript, this is achieved through METHOD OVERRIDING in class inheritance.

KEY MECHANICS:
1. Parent class defines a method
2. Child class redefines (overrides) that method
3. When called on a child object, the child's version runs
4. When called on a parent object, the parent's version runs
*/


// ----------------------------------------------------------------------------
// EXAMPLE 1: BASIC METHOD OVERRIDING
// ----------------------------------------------------------------------------

class Animal {
    constructor(name) {
        this.name = name;
    }

    // Parent method - will be overridden
    makeSound() {
        console.log(`${this.name} makes a generic animal sound.`);
    }

    move() {
        console.log(`${this.name} is moving.`);
    }
}

class Dog extends Animal {
    // Override makeSound
    makeSound() {
        console.log(`${this.name} barks: Woof! Woof!`);
    }

    // Override move
    move() {
        console.log(`${this.name} runs on four legs.`);
    }
}

class Cat extends Animal {
    // Override makeSound
    makeSound() {
        console.log(`${this.name} meows: Meow!`);
    }

    // Override move
    move() {
        console.log(`${this.name} sneaks quietly.`);
    }
}

class Bird extends Animal {
    // Override makeSound
    makeSound() {
        console.log(`${this.name} chirps: Tweet tweet!`);
    }

    // Override move
    move() {
        console.log(`${this.name} flies in the sky.`);
    }
}

console.log("=== BASIC METHOD OVERRIDING ===");
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");
const bird = new Bird("Tweety");

// Same method name, different behavior!
dog.makeSound();  // Buddy barks: Woof! Woof!
cat.makeSound();  // Whiskers meows: Meow!
bird.makeSound(); // Tweety chirps: Tweet tweet!

console.log("---");

dog.move();   // Buddy runs on four legs.
cat.move();   // Whiskers sneaks quietly.
bird.move();  // Tweety flies in the sky.
console.log("\n");


// ----------------------------------------------------------------------------
// EXAMPLE 2: POLYMORPHIC FUNCTION (The Power of Polymorphism)
// ----------------------------------------------------------------------------
// A single function that works with ANY Animal type

function animalConcert(animal) {
    console.log(`\nWelcome to the stage: ${animal.name}`);
    animal.makeSound(); // Polymorphic call!
    animal.move();      // Polymorphic call!
}

console.log("=== POLYMORPHIC FUNCTION ===");
console.log("The same function 'animalConcert()' handles all animals differently!");

const animals = [new Dog("Rex"), new Cat("Luna"), new Bird("Sky"), new Animal("Unknown")];

animals.forEach(animal => animalConcert(animal));
console.log("\n");


// ----------------------------------------------------------------------------
// EXAMPLE 3: OVERRIDING WITH super (Extending Parent Behavior)
// ----------------------------------------------------------------------------

class Shape {
    constructor(color) {
        this.color = color;
    }

    draw() {
        console.log(`Drawing a shape with color: ${this.color}`);
    }

    getArea() {
        return 0;
    }

    describe() {
        return `A ${this.color} shape`;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    // Override draw - call parent first, then add specific behavior
    draw() {
        super.draw(); // Call parent's draw
        console.log(`  -> It's a circle with radius ${this.radius}`);
    }

    // Override getArea with specific formula
    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    // Override describe
    describe() {
        return `${super.describe()} (Circle, r=${this.radius})`;
    }
}

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }

    draw() {
        super.draw();
        console.log(`  -> It's a rectangle ${this.width}x${this.height}`);
    }

    getArea() {
        return this.width * this.height;
    }

    describe() {
        return `${super.describe()} (Rectangle, ${this.width}x${this.height})`;
    }
}

class Triangle extends Shape {
    constructor(color, base, height) {
        super(color);
        this.base = base;
        this.height = height;
    }

    draw() {
        super.draw();
        console.log(`  -> It's a triangle with base ${this.base} and height ${this.height}`);
    }

    getArea() {
        return 0.5 * this.base * this.height;
    }

    describe() {
        return `${super.describe()} (Triangle, base=${this.base}, h=${this.height})`;
    }
}

console.log("=== OVERRIDING WITH super ===");

function renderShape(shape) {
    console.log(`\nRendering: ${shape.describe()}`);
    shape.draw();
    console.log(`Area: ${shape.getArea().toFixed(2)}`);
}

const shapes = [
    new Circle("Red", 5),
    new Rectangle("Blue", 4, 6),
    new Triangle("Green", 8, 4)
];

shapes.forEach(renderShape);
console.log("\n");


// ----------------------------------------------------------------------------
// EXAMPLE 4: POLYMORPHISM WITH instanceof
// ----------------------------------------------------------------------------

console.log("=== INSTANCEOF WITH POLYMORPHISM ===");

function getShapeType(shape) {
    if (shape instanceof Circle) {
        return "Circle";
    } else if (shape instanceof Rectangle) {
        return "Rectangle";
    } else if (shape instanceof Triangle) {
        return "Triangle";
    } else if (shape instanceof Shape) {
        return "Generic Shape";
    }
    return "Unknown";
}

shapes.forEach(shape => {
    console.log(`${shape.describe()} -> Type: ${getShapeType(shape)}`);
});
console.log("\n");


// ----------------------------------------------------------------------------
// EXAMPLE 5: THE LISKOV SUBSTITUTION PRINCIPLE (LSP)
// ----------------------------------------------------------------------------
// Objects of a superclass shall be replaceable with objects of its subclasses
// without breaking the application.

console.log("=== LISKOV SUBSTITUTION PRINCIPLE ===");

function calculateTotalArea(shapeList) {
    return shapeList.reduce((total, shape) => total + shape.getArea(), 0);
}

const totalArea = calculateTotalArea(shapes);
console.log(`Total area of all shapes: ${totalArea.toFixed(2)}`);
console.log("We replaced Shape with Circle/Rectangle/Triangle and the function still works!");
console.log("\n");


// ============================================================================
// SUMMARY
// ============================================================================
console.log("=== METHOD OVERRIDING (Runtime Polymorphism) SUMMARY ===");
console.log(`
DEFINITION:
  The ability of a subclass to provide a specific implementation of a method
  that is already defined in its parent class.

HOW IT WORKS IN JS:
  1. Parent defines a method
  2. Child redefines it with the SAME NAME
  3. JS looks at the ACTUAL object type at RUNTIME
  4. Calls the most specific (child) version available

SYNTAX:
  class Parent {
      method() { /* parent code */ }
  }
  class Child extends Parent {
      method() { /* child code */ }
  }

USING super:
  - super.method() calls the parent's version
  - Use it to EXTEND behavior rather than completely replace it

BENEFITS:
  - One function works with many types
  - Add new types without changing existing code
  - Natural, intuitive class hierarchies

REAL-WORLD USES:
  - UI component libraries (render() method)
  - Payment processors (process() method)
  - Notification services (send() method)
  - Game entities (update() method)
`);
