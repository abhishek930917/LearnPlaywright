// ============================================================
// CLASS INHERITANCE & POLYMORPHISM
// ============================================================
// Inheritance = a class derives from another class.
// Polymorphism = different classes respond to the same method call differently.

// ------------------ Base Class ------------------
export class Shape {
  constructor(color) {
    this.color = color;
  }

  // Method to be overridden (polymorphism)
  area() {
    throw new Error("Subclasses must implement area()");
  }

  describe() {
    return `A ${this.color} shape with area ${this.area().toFixed(2)}`;
  }
}

// ------------------ Subclasses ------------------
export class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color); // Call parent constructor
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
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

  circumference() {
    return 2 * Math.PI * this.radius;
  }
}

export class Triangle extends Shape {
  constructor(color, base, height) {
    super(color);
    this.base = base;
    this.height = height;
  }

  area() {
    return 0.5 * this.base * this.height;
  }
}

// ------------------ Polymorphism in Action ------------------
export function renderShapes(shapes) {
  for (const shape of shapes) {
    console.log(shape.describe());
  }
}

// ------------------ instanceof & Constructor Checks ------------------
export function checkTypes(shapes) {
  for (const shape of shapes) {
    if (shape instanceof Circle) {
      console.log(`Circle circumference: ${shape.circumference().toFixed(2)}`);
    } else if (shape instanceof Rectangle) {
      console.log(`Rectangle perimeter: ${shape.perimeter()}`);
    } else if (shape instanceof Shape) {
      console.log("Generic shape (no extra metrics)");
    }
  }
}

// ------------------ Method Overriding with super ------------------
export class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getDetails() {
    return `${this.name} earns $${this.salary}`;
  }
}

export class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  getDetails() {
    // Extend parent behavior instead of replacing entirely
    return `${super.getDetails()} and manages ${this.department}`;
  }
}

// Usage
const mgr = new Manager("Sarah", 90000, "Engineering");
console.log(mgr.getDetails()); // Sarah earns $90000 and manages Engineering
