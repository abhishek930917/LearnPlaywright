// ============================================================
// STATIC BASICS
// ============================================================
// The `static` keyword defines members that belong to the CLASS itself,
// NOT to instances (objects) created from the class.

// Think of it as "global to the class, shared across all instances."

// ------------------ Static Fields ------------------
export class MathConstants {
  // A static field exists ONCE in memory, regardless of how many instances exist.
  static PI = 3.14159;
  static E = 2.71828;
  static GOLDEN_RATIO = 1.61803;
}

// Access directly on the class — NO instance needed!
console.log("PI:", MathConstants.PI);           // 3.14159
console.log("E:", MathConstants.E);             // 2.71828

// ------------------ Static Methods ------------------
export class Calculator {
  // Static method — utility function that doesn't need object state
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }

  static circleArea(radius) {
    // Static methods can access other static members via `this` or ClassName
    return this.PI * radius * radius;
  }

  static PI = 3.14159;
}

console.log("5 + 3 =", Calculator.add(5, 3));               // 8
console.log("Circle area:", Calculator.circleArea(5));       // ~78.54

// ------------------ What You CANNOT Do ------------------
export class Demo {
  static version = "1.0";

  instanceMethod() {
    // You CANNOT access static members through `this` in an instance method
    // console.log(this.version); // undefined — `this` refers to the instance

    // But you CAN access them through the class name:
    console.log("Version from instance:", Demo.version); // OK
  }
}

const d = new Demo();
d.instanceMethod();
// d.version;        // undefined — static members are NOT on instances
// d.add(1, 2);      // TypeError — static methods are NOT on instances

// ------------------ When to Use Static ------------------
// 1. Utility/helper functions that don't need instance data
// 2. Constants related to the class
// 3. Factory methods to create instances
// 4. Counters or registries shared across all instances
