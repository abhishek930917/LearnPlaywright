// ============================================================
// 03 - Built-in Object Methods
// ============================================================

const product = {
  id: 101,
  name: "Wireless Mouse",
  price: 29.99,
  category: "Electronics",
  inStock: true
};

// 1. Object.keys() - Returns array of own enumerable property names
const keys = Object.keys(product);
console.log("Keys:", keys); // ["id", "name", "price", "category", "inStock"]

// 2. Object.values() - Returns array of own enumerable property values
const values = Object.values(product);
console.log("Values:", values); // [101, "Wireless Mouse", 29.99, "Electronics", true]

// 3. Object.entries() - Returns array of [key, value] pairs
const entries = Object.entries(product);
console.log("Entries:", entries);
// [["id", 101], ["name", "Wireless Mouse"], ...]

// Useful: Convert object to Map
const productMap = new Map(entries);
console.log("Map:", productMap);

// 4. Object.assign() - Copy properties from source to target (shallow copy)
const defaults = { color: "black", warranty: "1 year" };
const merged = Object.assign({}, product, defaults);
console.log("Assign (merged):", merged);

// Modern alternative: Spread operator (preferred)
const spreadMerged = { ...product, ...defaults };
console.log("Spread merged:", spreadMerged);

// 5. Object.freeze() - Prevent any changes to object
const config = { apiUrl: "https://api.example.com", timeout: 5000 };
Object.freeze(config);
config.timeout = 10000; // silently fails in non-strict mode
console.log("Frozen config:", config); // timeout still 5000
console.log("Is frozen?", Object.isFrozen(config)); // true

// 6. Object.seal() - Allow modifying existing properties, but no add/delete
const user = { name: "Alice", role: "user" };
Object.seal(user);
user.name = "Bob";       // allowed
// user.age = 25;        // fails (can't add)
// delete user.role;     // fails (can't delete)
console.log("Sealed user:", user);
console.log("Is sealed?", Object.isSealed(user)); // true

// 7. Object.preventExtensions() - No new properties, but can modify/delete
const scores = { math: 90, science: 85 };
Object.preventExtensions(scores);
scores.math = 95;       // allowed
delete scores.science;  // allowed
// scores.english = 88;  // fails
console.log("Non-extensible scores:", scores);
console.log("Is extensible?", Object.isExtensible(scores)); // false

// 8. Object.fromEntries() - Convert [key, value] pairs back to object
const pairs = [["a", 1], ["b", 2], ["c", 3]];
const fromEntries = Object.fromEntries(pairs);
console.log("FromEntries:", fromEntries); // { a: 1, b: 2, c: 3 }

// 9. Object.getOwnPropertyNames() - All own properties (including non-enumerable)
const obj = { x: 1 };
Object.defineProperty(obj, "y", { value: 2, enumerable: false });
console.log("getOwnPropertyNames:", Object.getOwnPropertyNames(obj)); // ["x", "y"]
console.log("keys (only enumerable):", Object.keys(obj));            // ["x"]

// 10. Object.getPrototypeOf() / Object.setPrototypeOf()
const parent = { greet() { return "Hello"; } };
const child = { name: "Kid" };
Object.setPrototypeOf(child, parent);
console.log("Child greet:", child.greet()); // "Hello"
console.log("Child prototype:", Object.getPrototypeOf(child) === parent); // true

module.exports = { product, defaults, config, user, scores, parent, child };
