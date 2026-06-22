// ============================================================
// FUNCTION CONSTRUCTORS (Pre-ES6)
// ============================================================
// Before ES6 classes, JavaScript used regular functions as constructors.
// Call them with the `new` keyword to create an instance.

export function Person(name, age) {
  // 'this' refers to the new object being created
  this.name = name;
  this.age = age;

  // Instance method (creates a copy on every object — not memory efficient)
  this.greet = function () {
    console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
  };
}

// Prototype method (shared across all instances — memory efficient)
Person.prototype.celebrateBirthday = function () {
  this.age++;
  console.log(`Happy Birthday ${this.name}! You are now ${this.age}.`);
};

// Usage
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

person1.greet(); // Hello, I'm Alice and I'm 30 years old.
person2.greet(); // Hello, I'm Bob and I'm 25 years old.

person1.celebrateBirthday(); // Happy Birthday Alice! You are now 31.

// IMPORTANT: Always use `new`. Forgetting it makes `this` bind to the global object (window/globalThis).
// Modern fix: Use strict mode or class syntax.

console.log("person1 instanceof Person:", person1 instanceof Person); // true
