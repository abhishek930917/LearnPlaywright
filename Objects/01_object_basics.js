// ============================================================
// 01 - Object Basics: Creation, Properties, and Methods
// ============================================================

// 1. OBJECT LITERAL (most common way)
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isEmployed: true,
  // Method inside object
  greet: function() {
    return `Hello, my name is ${this.firstName} ${this.lastName}`;
  },
  // ES6 shorthand method
  celebrateBirthday() {
    this.age++;
    return `Happy ${this.age}th birthday!`;
  }
};

console.log("Object Literal:", person);

// 2. NEW Object() CONSTRUCTOR (rarely used)
const car = new Object();
car.brand = "Toyota";
car.model = "Corolla";
car.year = 2023;

console.log("Constructor Object:", car);

// 3. CONSTRUCTOR FUNCTION (pre-ES6 pattern)
function Animal(name, species) {
  this.name = name;
  this.species = species;
  this.speak = function() {
    return `${this.name} makes a sound.`;
  };
}

const dog = new Animal("Buddy", "Dog");
console.log("Constructor Function:", dog);

// 4. Object.create() - Create object with a specific prototype
const animalPrototype = {
  speak() {
    return `${this.name} makes a sound.`;
  }
};

const cat = Object.create(animalPrototype);
cat.name = "Whiskers";
cat.species = "Cat";

console.log("Object.create():", cat);
console.log(cat.speak());

// 5. PROPERTY SHORTHAND (when variable name matches key)
const name = "Alice";
const age = 25;

const user = { name, age }; // same as { name: name, age: age }
console.log("Shorthand:", user);

// 6. COMPUTED PROPERTY NAMES (dynamic keys)
const key = "favoriteColor";
const profile = {
  [key]: "blue",
  ["is" + "Adult"]: true
};
console.log("Computed Property:", profile);

// 7. SYMBOL KEYS (unique, non-string keys)
const id = Symbol("id");
const secret = Symbol("secret");
const userWithSymbol = {
  name: "Bob",
  [id]: 12345,
  [secret]: "my-secret"
};
console.log("Symbol Key:", userWithSymbol[id]); // 12345

// EXPORTS for module usage (optional)
module.exports = { person, car, Animal, cat, user, profile, userWithSymbol, id };
