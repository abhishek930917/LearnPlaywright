// ============================================================
// GETTERS & SETTERS
// ============================================================
// Getters and setters let you define object accessors.
// They look like regular properties but execute functions behind the scenes.
// Useful for validation, computed properties, and encapsulation.

export class Temperature {
  constructor(celsius) {
    this._celsius = celsius; // convention: underscore prefix for "protected"
  }

  // Getter: accessed like a property (temp.celsius)
  get celsius() {
    return this._celsius;
  }

  // Setter: assigned like a property (temp.celsius = 25)
  set celsius(value) {
    if (value < -273.15) {
      throw new Error("Temperature below absolute zero is not possible!");
    }
    this._celsius = value;
  }

  // Computed getter (read-only)
  get fahrenheit() {
    return (this._celsius * 9) / 5 + 32;
  }

  set fahrenheit(value) {
    this._celsius = ((value - 32) * 5) / 9;
  }

  get kelvin() {
    return this._celsius + 273.15;
  }
}

// Usage
const temp = new Temperature(25);
console.log("Celsius:", temp.celsius);       // 25
console.log("Fahrenheit:", temp.fahrenheit); // 77
console.log("Kelvin:", temp.kelvin);         // 298.15

temp.celsius = 100;
console.log("New Fahrenheit:", temp.fahrenheit); // 212

temp.fahrenheit = 32;
console.log("Back to Celsius:", temp.celsius);   // 0

// Validation in action
try {
  temp.celsius = -300; // Throws error
} catch (e) {
  console.log("Error:", e.message);
}

// ============================================================
// GETTERS/SETTERS WITH PRIVATE FIELDS
// ============================================================

export class Rectangle {
  #width;
  #height;

  constructor(width, height) {
    this.#width = width;
    this.#height = height;
  }

  get width() {
    return this.#width;
  }

  set width(value) {
    if (value <= 0) throw new Error("Width must be positive");
    this.#width = value;
  }

  get height() {
    return this.#height;
  }

  set height(value) {
    if (value <= 0) throw new Error("Height must be positive");
    this.#height = value;
  }

  get area() {
    return this.#width * this.#height;
  }

  get perimeter() {
    return 2 * (this.#width + this.#height);
  }
}

const rect = new Rectangle(10, 5);
console.log("Area:", rect.area);           // 50
console.log("Perimeter:", rect.perimeter); // 30
rect.width = 20;
console.log("New Area:", rect.area);       // 100
