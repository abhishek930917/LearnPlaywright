// ============================================================
// CLASS BASICS
// ============================================================
// JavaScript classes are templates for creating objects.
// They encapsulate data (fields) and behavior (methods).

// ------------------ Class Declaration ------------------
// The most common way to define a class. Hoisted but not initialized.
export class Person {
  // Public field (instance property) — exists on every instance
  species = "Homo sapiens";

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Instance method
  introduce() {
    return `Hi, I'm ${this.name}, ${this.age} years old.`;
  }

  // Getter
  get isAdult() {
    return this.age >= 18;
  }

  // Setter
  set setAge(value) {
    if (value < 0) throw new Error("Age cannot be negative");
    this.age = value;
  }
}

// ------------------ Class Expression ------------------
// Classes can also be defined as expressions (named or anonymous).
export const Vehicle = class {
  constructor(type) {
    this.type = type;
  }

  describe() {
    return `This is a ${this.type}`;
  }
};

// Named class expression (useful for debugging)
export const NamedExpression = class NamedExpr {
  showName() {
    return NamedExpr.name; // Access the internal name
  }
};

// ------------------ Public Class Fields ------------------
export class Counter {
  count = 0; // Initialized for every instance

  increment() {
    this.count++;
    return this.count;
  }

  decrement() {
    this.count--;
    return this.count;
  }
}

// ------------------ Method Chaining (Fluent Interface) ------------------
export class QueryBuilder {
  constructor() {
    this.query = {};
  }

  select(fields) {
    this.query.select = fields;
    return this; // return `this` for chaining
  }

  where(condition) {
    this.query.where = condition;
    return this;
  }

  limit(n) {
    this.query.limit = n;
    return this;
  }

  build() {
    return this.query;
  }
}
