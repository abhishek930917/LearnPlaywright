// ============================================================
// 11 - Object.getOwnPropertyDescriptor & Property Descriptors
// ============================================================

/*
  Every property in a JavaScript object is described by a PROPERTY DESCRIPTOR.
  A descriptor is an object that defines the behavior of that property.

  Data Descriptor attributes:
    value        - The actual value stored (default: undefined)
    writable     - Can the value be changed? (default: false when defined via defineProperty, true for literal)
    enumerable   - Shows up in for...in / Object.keys / JSON.stringify? (default: false via defineProperty, true for literal)
    configurable - Can the descriptor be changed or property deleted? (default: false via defineProperty, true for literal)

  Accessor Descriptor attributes (getters/setters):
    get          - Function called when property is read (default: undefined)
    set          - Function called when property is written (default: undefined)
    enumerable   - Same as above
    configurable - Same as above

  Note: A descriptor is EITHER a data descriptor OR an accessor descriptor,
  but NOT both. You cannot have both 'value' and 'get/set' together.
*/


// ============================================================
// 1. Object.getOwnPropertyDescriptor
// ============================================================

const user = {
  name: "Alice",
  age: 30
};

// Get descriptor for a single property
const nameDescriptor = Object.getOwnPropertyDescriptor(user, "name");
console.log("Descriptor for 'name':", nameDescriptor);
// {
//   value: "Alice",
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

const ageDescriptor = Object.getOwnPropertyDescriptor(user, "age");
console.log("Descriptor for 'age':", ageDescriptor);

// Non-existent property returns undefined
console.log("Descriptor for 'unknown':", Object.getOwnPropertyDescriptor(user, "unknown"));
// undefined


// ============================================================
// 2. Object.getOwnPropertyDescriptors (all properties at once)
// ============================================================

const allDescriptors = Object.getOwnPropertyDescriptors(user);
console.log("\nAll descriptors:", allDescriptors);
// {
//   name: { value: "Alice", writable: true, enumerable: true, configurable: true },
//   age: { value: 30, writable: true, enumerable: true, configurable: true }
// }


// ============================================================
// 3. Object.defineProperty - Creating properties with control
// ============================================================

const product = {};

// Default descriptor when using defineProperty: ALL FALSE!
Object.defineProperty(product, "id", {
  value: 101
  // writable, enumerable, configurable default to FALSE!
});

console.log("\nProduct id:", product.id); // 101
console.log("Product id descriptor:", Object.getOwnPropertyDescriptor(product, "id"));
// { value: 101, writable: false, enumerable: false, configurable: false }

// Attempt to modify (fails silently in non-strict mode, throws in strict mode)
// product.id = 999; // TypeError in strict mode, silently ignored otherwise

// Attempt to delete (fails silently or throws)
// delete product.id; // TypeError in strict mode

// Attempt to redefine (fails because configurable is false)
// Object.defineProperty(product, "id", { writable: true }); // TypeError


// ============================================================
// 4. READ-ONLY PROPERTY (writable: false)
// ============================================================

const config = {};

Object.defineProperty(config, "apiUrl", {
  value: "https://api.example.com",
  writable: false,
  enumerable: true,
  configurable: true
});

console.log("\nConfig apiUrl:", config.apiUrl);

// Try to change it
config.apiUrl = "https://hacked.com"; // silently fails (or throws in strict mode)
console.log("After attempted change:", config.apiUrl); // still "https://api.example.com"

console.log("apiUrl descriptor:", Object.getOwnPropertyDescriptor(config, "apiUrl"));


// ============================================================
// 5. NON-ENUMERABLE PROPERTY (hidden from loops)
// ============================================================

const account = {
  username: "alice123"
};

Object.defineProperty(account, "password", {
  value: "secret123",
  writable: true,
  enumerable: false,  // <-- HIDDEN from for...in, Object.keys, JSON.stringify
  configurable: true
});

console.log("\n--- Enumerability Demo ---");
console.log("for...in loop:");
for (const key in account) {
  console.log("  key:", key); // only "username"
}

console.log("Object.keys:", Object.keys(account)); // ["username"]
console.log("Object.values:", Object.values(account)); // ["alice123"]
console.log("JSON.stringify:", JSON.stringify(account)); // {"username":"alice123"}

// But you can still access it directly
console.log("Direct access:", account.password); // "secret123"

// And see it with getOwnPropertyNames (includes non-enumerable)
console.log("getOwnPropertyNames:", Object.getOwnPropertyNames(account)); // ["username", "password"]

// getOwnPropertyDescriptor confirms it's non-enumerable
console.log("password descriptor:", Object.getOwnPropertyDescriptor(account, "password"));


// ============================================================
// 6. NON-CONFIGURABLE PROPERTY (locked descriptor)
// ============================================================

const settings = {};

Object.defineProperty(settings, "version", {
  value: "1.0.0",
  writable: true,
  enumerable: true,
  configurable: false  // <-- CANNOT change descriptor or delete
});

console.log("\n--- Configurability Demo ---");
console.log("version:", settings.version);

// These would throw TypeError in strict mode, silently fail otherwise:
// delete settings.version;           // ERROR: Cannot delete
// Object.defineProperty(settings, "version", { writable: false }); // ERROR if trying to change descriptor

// You CAN still change the value since writable is true
settings.version = "1.0.1";
console.log("After value change:", settings.version); // "1.0.1"

// But you CANNOT change writable to false, then back to true once configurable is false
Object.defineProperty(settings, "version", { writable: false });
// Now it's permanently locked as non-configurable and non-writable!
console.log("Final descriptor:", Object.getOwnPropertyDescriptor(settings, "version"));


// ============================================================
// 7. ACCESSOR DESCRIPTOR (getter/setter with defineProperty)
// ============================================================

const circle = {};
let _radius = 5; // "private" backing variable

Object.defineProperty(circle, "radius", {
  get() {
    console.log("  [getter called]");
    return _radius;
  },
  set(value) {
    console.log("  [setter called]");
    if (value <= 0) {
      throw new Error("Radius must be positive");
    }
    _radius = value;
  },
  enumerable: true,
  configurable: true
});

console.log("\n--- Accessor Descriptor Demo ---");
console.log("Radius:", circle.radius); // calls getter

circle.radius = 10; // calls setter
console.log("New radius:", circle.radius);

// circle.radius = -5; // Error: Radius must be positive

console.log("radius descriptor:", Object.getOwnPropertyDescriptor(circle, "radius"));
// Note: no 'value' or 'writable' — it has 'get' and 'set' instead!


// ============================================================
// 8. Object.defineProperties (multiple at once)
// ============================================================

const laptop = {};

Object.defineProperties(laptop, {
  brand: {
    value: "Dell",
    writable: true,
    enumerable: true,
    configurable: true
  },
  model: {
    value: "XPS 13",
    writable: false,
    enumerable: true,
    configurable: true
  },
  serialNumber: {
    value: "SN-12345678",
    writable: false,
    enumerable: false,  // hidden
    configurable: false  // locked
  },
  fullName: {
    get() {
      return `${this.brand} ${this.model}`;
    },
    enumerable: true,
    configurable: true
  }
});

console.log("\n--- defineProperties Demo ---");
console.log("Laptop:", laptop);
console.log("fullName:", laptop.fullName); // "Dell XPS 13"
console.log("All descriptors:", Object.getOwnPropertyDescriptors(laptop));


// ============================================================
// 9. CHANGING EXISTING PROPERTY DESCRIPTORS
// ============================================================

const person = {
  name: "Bob",
  salary: 50000
};

console.log("\n--- Changing Descriptors ---");
console.log("Before:", Object.getOwnPropertyDescriptor(person, "salary"));

// Lock salary from being changed
Object.defineProperty(person, "salary", { writable: false });
console.log("After writable:false:", Object.getOwnPropertyDescriptor(person, "salary"));

// Hide name from enumeration
Object.defineProperty(person, "name", { enumerable: false });
console.log("Keys after hiding name:", Object.keys(person)); // ["salary"]


// ============================================================
// 10. SYMBOL PROPERTIES & DESCRIPTORS
// ============================================================

const idSymbol = Symbol("id");
const secretSymbol = Symbol("secret");

const employee = {
  name: "Charlie"
};

Object.defineProperty(employee, idSymbol, {
  value: 42,
  writable: false,
  enumerable: false,
  configurable: false
});

employee[secretSymbol] = "classified"; // normal assignment (configurable, writable, enumerable defaults)

console.log("\n--- Symbol Properties ---");
console.log("idSymbol value:", employee[idSymbol]);
console.log("idSymbol descriptor:", Object.getOwnPropertyDescriptor(employee, idSymbol));

// Symbol properties are always hidden from for...in and Object.keys
console.log("Keys:", Object.keys(employee)); // ["name"]
console.log("getOwnPropertySymbols:", Object.getOwnPropertySymbols(employee)); // [idSymbol, secretSymbol]
console.log("Reflect.ownKeys:", Reflect.ownKeys(employee)); // all: "name", idSymbol, secretSymbol


// ============================================================
// 11. COMPLETE DESCRIPTOR MATRIX
// ============================================================

/*
  Attribute       | Data Desc. | Accessor Desc.
  ----------------|------------|---------------
  value           | YES        | NO
  writable        | YES        | NO
  get             | NO         | YES
  set             | NO         | YES
  enumerable      | YES        | YES
  configurable    | YES        | YES

  Rules:
  1. A descriptor must have either: (value OR writable) XOR (get OR set)
  2. Cannot mix data and accessor attributes
  3. If configurable is false:
     - Cannot delete the property
     - Cannot change enumerable
     - Cannot change configurable (one-way street!)
     - For data properties: can change writable from true to false, but NOT back
     - For accessor properties: can change get/set IF writable was left flexible
*/


// ============================================================
// 12. PRACTICAL USE CASES
// ============================================================

console.log("\n=== PRACTICAL USE CASES ===");

// Use Case 1: Immutable constants on an object
const MATH = {};
Object.defineProperties(MATH, {
  PI: { value: 3.14159, writable: false, enumerable: true, configurable: false },
  E: { value: 2.71828, writable: false, enumerable: true, configurable: false }
});
console.log("MATH.PI:", MATH.PI);
// MATH.PI = 3; // TypeError in strict mode

// Use Case 2: Computed read-only properties
const rectangle = { width: 10, height: 5 };
Object.defineProperty(rectangle, "area", {
  get() { return this.width * this.height; },
  enumerable: true,
  configurable: true
});
console.log("Rectangle area:", rectangle.area); // 50
// rectangle.area = 100; // TypeError (no setter defined)

// Use Case 3: Validation through setter
const temperature = {};
let _celsius = 0;
Object.defineProperty(temperature, "celsius", {
  get() { return _celsius; },
  set(value) {
    if (value < -273.15) throw new Error("Below absolute zero!");
    _celsius = value;
  },
  enumerable: true,
  configurable: true
});
temperature.celsius = 25;
console.log("Temperature:", temperature.celsius);

// Use Case 4: Private-ish data (non-enumerable)
const apiClient = { baseUrl: "https://api.example.com" };
Object.defineProperty(apiClient, "_apiKey", {
  value: "sk-live-123456",
  writable: true,
  enumerable: false,   // hidden from JSON.stringify!
  configurable: false
});
console.log("JSON of apiClient:", JSON.stringify(apiClient)); // {"baseUrl":"..."}
console.log("Internal key:", apiClient._apiKey); // accessible but hidden


// ============================================================
// 13. STRICT MODE VS SLOPPY MODE BEHAVIOR
// ============================================================

/*
  In SLOPPY MODE (non-strict):
  - Assigning to non-writable: silently ignored
  - Deleting non-configurable: silently returns false
  - Redefining non-configurable: silently ignored or false

  In STRICT MODE ("use strict"):
  - All of the above throw TypeError!

  Recommendation: Always use strict mode to catch these issues.
*/


// ============================================================
// 14. SUMMARY
// ============================================================

console.log(`\n=== SUMMARY ===
Object.getOwnPropertyDescriptor(obj, prop)
  -> Returns the descriptor object for ONE own property

Object.getOwnPropertyDescriptors(obj)
  -> Returns ALL own property descriptors as an object

Object.defineProperty(obj, prop, descriptor)
  -> Define or modify ONE property with a custom descriptor

Object.defineProperties(obj, { prop1: {...}, prop2: {...} })
  -> Define or modify MULTIPLE properties at once

Key Attributes:
  value       - the stored value (data descriptors only)
  writable    - can the value be assigned? (data descriptors only)
  get         - function called on read (accessor descriptors only)
  set         - function called on write (accessor descriptors only)
  enumerable  - appears in loops and Object.keys?
  configurable - can descriptor be changed or property deleted?
`);


module.exports = {
  user,
  product,
  config,
  account,
  settings,
  circle,
  laptop,
  person,
  employee,
  MATH,
  rectangle,
  temperature,
  apiClient
};
