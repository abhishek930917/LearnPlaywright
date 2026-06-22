// ============================================================
// ADVANCED CLASS PATTERNS
// ============================================================

// ------------------ Mixins ------------------
// A mixin is a class that provides methods to other classes without inheritance.

export const Flyable = (Base) =>
  class extends Base {
    fly() {
      console.log(`${this.name} is flying!`);
    }
    land() {
      console.log(`${this.name} has landed.`);
    }
  };

export const Swimmable = (Base) =>
  class extends Base {
    swim() {
      console.log(`${this.name} is swimming!`);
    }
    dive() {
      console.log(`${this.name} dove underwater.`);
    }
  };

class Animal {
  constructor(name) {
    this.name = name;
  }
}

// Compose behavior using mixins
export class Duck extends Flyable(Swimmable(Animal)) {
  quack() {
    console.log("Quack quack!");
  }
}

// Usage
const donald = new Duck("Donald");
donald.fly();   // Donald is flying!
donald.swim();  // Donald is swimming!
donald.quack(); // Quack quack!

// ------------------ Private Static Members ------------------
export class DatabaseConnection {
  // Private static field
  static #instanceCount = 0;

  // Private static method
  static #logCreation() {
    console.log(`Database instances created: ${this.#instanceCount}`);
  }

  constructor(connectionString) {
    this.connectionString = connectionString;
    DatabaseConnection.#instanceCount++;
    DatabaseConnection.#logCreation();
  }

  static getInstanceCount() {
    return this.#instanceCount;
  }
}

const db1 = new DatabaseConnection("postgres://localhost");
const db2 = new DatabaseConnection("postgres://remote");
console.log("Total DB instances:", DatabaseConnection.getInstanceCount()); // 2

// ------------------ Symbols as Property Keys ------------------
const _id = Symbol("id");
const _secret = Symbol("secret");

export class SecureUser {
  constructor(name) {
    this.name = name;
    this[_id] = Math.random().toString(36).slice(2);
    this[_secret] = "hidden-value";
  }

  getId() {
    return this[_id];
  }
}

const secure = new SecureUser("Alice");
console.log("Name:", secure.name); // Alice
console.log("ID:", secure.getId()); // random string
console.log("Regular keys:", Object.keys(secure)); // ["name"] — symbols are hidden
console.log("All symbols:", Object.getOwnPropertySymbols(secure)); // [Symbol(id), Symbol(secret)]

// ------------------ Class Fields with Initialization Logic ------------------
export class UUIDGenerator {
  // Public field with initializer
  prefix = "ID-";

  // Static block for complex initialization
  static {
    this.counter = 0;
  }

  generate() {
    UUIDGenerator.counter++;
    return `${this.prefix}${UUIDGenerator.counter}-${Date.now()}`;
  }
}

const gen = new UUIDGenerator();
console.log(gen.generate()); // ID-1-...
console.log(gen.generate()); // ID-2-...
