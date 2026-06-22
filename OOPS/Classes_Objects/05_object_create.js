// ============================================================
// Object.create() & PROTOTYPAL INHERITANCE
// ============================================================
// Objects can inherit directly from other objects without classes.

// ------------------ Basic Object.create() ------------------
const animalPrototype = {
  speak() {
    console.log(`${this.name} makes a noise.`);
  },

  describe() {
    return `Animal: ${this.name}`;
  },
};

export const dog = Object.create(animalPrototype);
dog.name = "Buddy";
dog.speak(); // Buddy makes a noise.

// ------------------ Object.create() with properties ------------------
export const cat = Object.create(animalPrototype, {
  name: {
    value: "Whiskers",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  color: {
    value: "orange",
    writable: true,
    enumerable: true,
  },
});

cat.speak(); // Whiskers makes a noise.

// ------------------ Prototype Chain Inspection ------------------
export function inspectPrototypes() {
  console.log("dog.__proto__ === animalPrototype:", Object.getPrototypeOf(dog) === animalPrototype);
  console.log("animalPrototype.__proto__ === Object.prototype:", Object.getPrototypeOf(animalPrototype) === Object.prototype);

  console.log("dog has own 'name':", Object.hasOwn(dog, "name"));       // true
  console.log("dog has own 'speak':", Object.hasOwn(dog, "speak"));     // false (inherited)
  console.log("dog can access 'speak':", "speak" in dog);               // true
}

// ------------------ Pure Prototypal Inheritance Pattern ------------------
export function createPerson(name, age) {
  const person = Object.create(personPrototype);
  person.name = name;
  person.age = age;
  return person;
}

const personPrototype = {
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  },
  haveBirthday() {
    this.age++;
    console.log(`I'm now ${this.age} years old!`);
  },
};

export const personA = createPerson("Alice", 30);
export const personB = createPerson("Bob", 25);

// ------------------ Modern equivalent with Object.setPrototypeOf() ------------------
export const vehicle = {
  start() {
    console.log(`${this.type} starting...`);
  },
};

export const car = {
  type: "Sedan",
  honk() {
    console.log("Beep beep!");
  },
};

Object.setPrototypeOf(car, vehicle); // car inherits from vehicle
