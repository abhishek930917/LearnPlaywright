// ============================================================
// 06 - Getters and Setters
// ============================================================

// Getters and setters let you define how properties are accessed/assigned.
// They look like properties but behave like methods.

class Temperature {
  constructor(celsius) {
    this._celsius = celsius;
  }

  // Getter: runs when you read temp.celsius
  get celsius() {
    console.log("Getting celsius...");
    return this._celsius;
  }

  // Setter: runs when you assign temp.celsius = value
  set celsius(value) {
    console.log("Setting celsius...");
    if (value < -273.15) {
      throw new Error("Temperature below absolute zero is not possible");
    }
    this._celsius = value;
  }

  // Computed property using getter
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

const temp = new Temperature(25);
console.log(temp.celsius);     // 25 (calls getter)
console.log(temp.fahrenheit);  // 77  (computed)
temp.celsius = 100;            // calls setter
console.log(temp.fahrenheit);  // 212
temp.fahrenheit = 32;          // uses setter
console.log(temp.celsius);     // 0

// GETTERS/SETTERS IN OBJECT LITERALS
const user = {
  firstName: "John",
  lastName: "Doe",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  }
};

console.log(user.fullName); // "John Doe"
user.fullName = "Jane Smith";
console.log(user.firstName); // "Jane"
console.log(user.lastName);  // "Smith"

// USING defineProperty (more control)
const product = { name: "Laptop", basePrice: 1000 };

Object.defineProperty(product, "price", {
  get() {
    return this.basePrice * 1.2; // 20% markup
  },
  set(value) {
    this.basePrice = value / 1.2;
  },
  enumerable: true,
  configurable: true
});

console.log(product.price); // 1200
product.price = 2400;
console.log(product.basePrice); // 2000

// SMART SETTER (validation)
const person = {
  _age: 0,

  get age() {
    return this._age;
  },

  set age(value) {
    if (typeof value !== "number" || value < 0 || value > 150) {
      throw new Error("Invalid age");
    }
    this._age = value;
  }
};

person.age = 30;
console.log(person.age); // 30
// person.age = -5;      // Error: Invalid age

module.exports = { Temperature, user, product, person };
