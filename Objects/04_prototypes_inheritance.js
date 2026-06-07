// ============================================================
// 04 - Prototypes & Inheritance
// ============================================================

// 1. EVERY OBJECT HAS A PROTOTYPE
const simpleObj = {};
console.log("Default prototype:", Object.getPrototypeOf(simpleObj) === Object.prototype); // true

// 2. PROTOTYPE CHAIN
// When you access a property, JS looks: object -> prototype -> prototype -> ... -> null

// 3. CONSTRUCTOR FUNCTION + PROTOTYPE (classic JS pattern)
function Vehicle(type, wheels) {
  this.type = type;
  this.wheels = wheels;
}

// Shared methods go on prototype (saves memory)
Vehicle.prototype.describe = function() {
  return `A ${this.type} with ${this.wheels} wheels.`;
};
Vehicle.prototype.honk = function() {
  return "Beep beep!";
};

const bike = new Vehicle("bicycle", 2);
const car = new Vehicle("car", 4);

console.log(bike.describe()); // "A bicycle with 2 wheels."
console.log(car.honk());       // "Beep beep!"
console.log(bike.honk());      // "Beep beep!" (found on Vehicle.prototype)

// 4. CHECKING PROTOTYPE RELATIONSHIPS
console.log(bike instanceof Vehicle);           // true
console.log(Vehicle.prototype.isPrototypeOf(bike)); // true

// 5. INHERITANCE WITH CONSTRUCTOR FUNCTIONS
function ElectricCar(brand, range) {
  // Call parent constructor with this context
  Vehicle.call(this, "electric car", 4);
  this.brand = brand;
  this.range = range;
}

// Set prototype chain: ElectricCar.prototype -> Vehicle.prototype -> Object.prototype
ElectricCar.prototype = Object.create(Vehicle.prototype);
ElectricCar.prototype.constructor = ElectricCar;

ElectricCar.prototype.charge = function() {
  return `${this.brand} is charging...`;
};

const tesla = new ElectricCar("Tesla", 400);
console.log(tesla.describe()); // "A electric car with 4 wheels." (inherited)
console.log(tesla.charge());   // "Tesla is charging..." (own method)
console.log(tesla instanceof Vehicle);      // true
console.log(tesla instanceof ElectricCar);  // true

// 6. MODERN ALTERNATIVE: Object.setPrototypeOf (less common)
const animal = {
  eat() { return "eating"; }
};

const rabbit = {
  hop() { return "hopping"; }
};

Object.setPrototypeOf(rabbit, animal);
console.log(rabbit.eat()); // "eating" (inherited from animal)

// 7. PROTOTYPE VS OWN PROPERTIES
console.log("tesla own keys:", Object.keys(tesla)); // ["type","wheels","brand","range"]
console.log("tesla has 'charge' own?", tesla.hasOwnProperty("charge")); // false
console.log("'charge' in tesla?", "charge" in tesla); // true (on prototype)

// 8. IMPORTANT: __proto__ vs prototype
// - prototype: property on CONSTRUCTOR FUNCTION, used as prototype for instances
// - __proto__: actual prototype LINK of an instance (legacy, use Object.getPrototypeOf)
console.log(tesla.__proto__ === ElectricCar.prototype); // true

module.exports = { Vehicle, ElectricCar, bike, car, tesla, animal, rabbit };
