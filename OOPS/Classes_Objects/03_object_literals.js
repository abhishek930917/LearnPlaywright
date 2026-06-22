// ============================================================
// OBJECT LITERALS
// ============================================================
// The simplest way to create objects in JavaScript.

// ------------------ Basic Object Literal ------------------
export const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,

  getSummary() {
    return `${this.title} by ${this.author} (${this.year})`;
  },
};

// ------------------ Shorthand Properties ------------------
const name = "Alice";
const age = 25;

export const personShort = {
  name, // same as name: name
  age,  // same as age: age
};

// ------------------ Computed Property Names ------------------
const propName = "email";

export const userComputed = {
  id: 1,
  [propName]: "alice@example.com", // dynamic key
  ["is" + "Active"]: true,         // expression as key
};

// ------------------ Method Shorthand ------------------
export const calculator = {
  value: 0,

  add(n) {
    this.value += n;
    return this;
  },

  subtract(n) {
    this.value -= n;
    return this;
  },

  result() {
    return this.value;
  },
};

// ------------------ Nested Objects ------------------
export const company = {
  name: "TechCorp",
  location: {
    city: "San Francisco",
    country: "USA",
    coordinates: {
      lat: 37.7749,
      lng: -122.4194,
    },
  },
  employees: [
    { name: "John", role: "Developer" },
    { name: "Jane", role: "Designer" },
  ],
};

// ------------------ Object Property Descriptors ------------------
export function showDescriptors() {
  const obj = { x: 10 };

  console.log("Default descriptor for x:", Object.getOwnPropertyDescriptor(obj, "x"));
  // { value: 10, writable: true, enumerable: true, configurable: true }

  Object.defineProperty(obj, "y", {
    value: 20,
    writable: false,     // cannot be changed
    enumerable: false,   // won't show in for...in / Object.keys
    configurable: false, // cannot be deleted or reconfigured
  });

  console.log("obj.y:", obj.y); // 20
  console.log("Keys:", Object.keys(obj)); // ["x"] — y is not enumerable
}
