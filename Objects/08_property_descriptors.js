// ============================================================
// 08 - Property Descriptors & Advanced Object Features
// ============================================================

// Every property has four descriptor attributes:
// value, writable, enumerable, configurable

// 1. OBJECT.DEFINEPROPERTY - Define property with fine-grained control
const user = {};

Object.defineProperty(user, "name", {
  value: "Alice",
  writable: true,       // can value be changed?
  enumerable: true,     // shows up in for...in / Object.keys?
  configurable: true      // can descriptor be changed or property deleted?
});

console.log("Descriptor:", Object.getOwnPropertyDescriptor(user, "name"));
// { value: 'Alice', writable: true, enumerable: true, configurable: true }

// 2. READ-ONLY PROPERTY (writable: false)
Object.defineProperty(user, "id", {
  value: 123,
  writable: false,
  enumerable: true,
  configurable: false
});

user.id = 999; // silently fails (or throws in strict mode)
console.log("Read-only id:", user.id); // still 123

// 3. NON-ENUMERABLE PROPERTY
Object.defineProperty(user, "secret", {
  value: "hidden-data",
  enumerable: false,
  writable: true,
  configurable: true
});

console.log("Keys:", Object.keys(user)); // ["name", "id"] - secret hidden!
console.log("getOwnPropertyNames:", Object.getOwnPropertyNames(user)); // includes "secret"
console.log("for...in loop:");
for (const key in user) {
  console.log(" ", key); // only "name", "id"
}

// 4. NON-CONFIGURABLE PROPERTY (can't delete or change descriptor)
// user.id is already non-configurable
// delete user.id; // fails in strict mode
// Object.defineProperty(user, "id", { writable: true }); // fails

// 5. DEFINE MULTIPLE PROPERTIES AT ONCE
const product = {};
Object.defineProperties(product, {
  name: { value: "Phone", writable: true, enumerable: true },
  price: { value: 999, writable: true, enumerable: true },
  sku: { value: "PH-001", writable: false, enumerable: false }
});
console.log("Product:", product);

// 6. SEAL, FREEZE, PREVENTEXTENSIONS RECAP
const obj1 = { a: 1 };
Object.preventExtensions(obj1); // no new props
// obj1.b = 2; // fails

const obj2 = { a: 1 };
Object.seal(obj2);               // no new/delete, but can modify existing
obj2.a = 2;                      // OK
// delete obj2.a;               // fails

const obj3 = { a: 1 };
Object.freeze(obj3);             // completely immutable (shallow!)
// obj3.a = 2;                  // fails

// 7. SYMBOLS AS PROPERTY KEYS (unique, hidden from normal enumeration)
const id = Symbol("id");
const secretKey = Symbol("secret");

const account = {
  name: "Savings",
  [id]: 101,
  [secretKey]: "classified"
};

console.log("Symbol access:", account[id]); // 101
console.log("Keys:", Object.keys(account)); // ["name"] - symbols hidden!
console.log("getOwnPropertySymbols:", Object.getOwnPropertySymbols(account)); // [id, secretKey]
console.log("Reflect.ownKeys:", Reflect.ownKeys(account)); // all keys including symbols

// Well-known symbols
const iterable = {
  data: [1, 2, 3],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => ({
        value: this.data[index],
        done: index++ >= this.data.length
      })
    };
  }
};
console.log("Iterable:", [...iterable]); // [1, 2, 3]

// 8. COMPUTED/DYNAMIC KEYS
const prefix = "user";
const dynamicObj = {
  [`${prefix}Name`]: "Alice",
  [`${prefix}Age`]: 30,
  [Date.now()]: "timestamp-key"
};
console.log("Dynamic keys:", dynamicObj);

module.exports = { user, product, account, iterable };
