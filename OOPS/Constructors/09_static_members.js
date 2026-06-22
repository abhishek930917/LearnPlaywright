// ============================================================
// STATIC METHODS & PROPERTIES
// ============================================================
// Static members belong to the CLASS itself, not to instances.
// Use them for utility functions, factory methods, or class-level data.

export class MathUtils {
  // Static property
  static PI = 3.14159;

  // Static method
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }

  static circleArea(radius) {
    return this.PI * radius * radius; // `this` refers to the class in static methods
  }
}

// Access static members directly on the class
console.log("MathUtils.PI:", MathUtils.PI);                     // 3.14159
console.log("MathUtils.add(2,3):", MathUtils.add(2, 3));        // 5
console.log("MathUtils.circleArea(5):", MathUtils.circleArea(5)); // ~78.54

// Instances do NOT have access to static members
const utils = new MathUtils();
// utils.add(2, 3); // ERROR: utils.add is not a function

// ============================================================
// STATIC FACTORY METHODS (Common Pattern)
// ============================================================

export class DateRange {
  constructor(start, end) {
    this.start = new Date(start);
    this.end = new Date(end);
  }

  // Factory method: create a DateRange for the current week
  static thisWeek() {
    const now = new Date();
    const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
    const endOfWeek = new Date(now.setDate(startOfWeek.getDate() + 6));
    return new DateRange(startOfWeek, endOfWeek);
  }

  // Factory method: create a DateRange from a duration string
  static fromDuration(startDate, days) {
    const start = new Date(startDate);
    const end = new Date(start);
    end.setDate(start.getDate() + days);
    return new DateRange(start, end);
  }

  display() {
    console.log(`From ${this.start.toDateString()} to ${this.end.toDateString()}`);
  }
}

const week = DateRange.thisWeek();
week.display();

const project = DateRange.fromDuration("2024-01-01", 30);
project.display();

// ============================================================
// STATIC BLOCK (ES2022+)
// ============================================================
// Static initialization blocks run when the class is loaded.

export class Config {
  static settings = {};

  static {
    // This block runs once when the class is first evaluated
    this.settings.theme = "dark";
    this.settings.version = "1.0.0";
    console.log("Config static block executed!");
  }
}

console.log("Config.settings:", Config.settings);
