// ============================================================
// null vs undefined in JavaScript
// ============================================================

console.log("=== 1. DEFINITIONS ===\n");

// UNDEFINED: Automatically assigned by JavaScript
// - Variable declared but not initialized
let notInitialized;
console.log("1a. Declared but not initialized:", notInitialized); // undefined

// - Accessing a non-existent object property
const person = { name: "Alice" };
console.log("1b. Missing object property:", person.age); // undefined

// - Function parameter not provided
greet();
function greet(name) {
  console.log("1c. Missing function argument:", name); // undefined
}

// - Function with no return statement
function doNothing() {}
console.log("1d. No return statement:", doNothing()); // undefined

// NULL: Must be explicitly assigned by the developer
// - Represents intentional absence of any value
let emptyValue = null;
console.log("1e. Explicitly set to null:", emptyValue); // null

// ============================================================
console.log("\n=== 2. typeof OPERATOR ===\n");

console.log("typeof undefined:", typeof undefined); // "undefined"
console.log("typeof null:", typeof null);           // "object"  (historical bug in JS)

// Safe check for null
function isNull(value) {
  return value === null;
}
console.log("isNull(null):", isNull(null));         // true

// ============================================================
console.log("\n=== 3. EQUALITY CHECKS ===\n");

console.log("null == undefined:", null == undefined);   // true  (loose equality)
console.log("null === undefined:", null === undefined); // false (strict equality)
console.log("null == 0:", null == 0);                   // false
console.log("undefined == 0:", undefined == 0);         // false
console.log("null == false:", null == false);           // false
console.log("undefined == false:", undefined == false); // false

// Best practice: Always use strict equality (===)

// ============================================================
console.log("\n=== 4. ARITHMETIC OPERATIONS ===\n");

// null coerces to 0 in numeric context
console.log("null + 5:", null + 5);           // 5
console.log("Number(null):", Number(null));   // 0

// undefined coerces to NaN in numeric context
console.log("undefined + 5:", undefined + 5);       // NaN
console.log("Number(undefined):", Number(undefined)); // NaN

// ============================================================
console.log("\n=== 5. JSON SERIALIZATION ===\n");

const data = {
  name: "Bob",
  middleName: null,
  nickname: undefined
};

console.log("Object:", data);
console.log("JSON string:", JSON.stringify(data));
// Output: {"name":"Bob","middleName":null}
// Note: null is preserved, undefined is removed!

// ============================================================
console.log("\n=== 6. DEFAULT VALUES & NULLISH COALESCING ===\n");

let userInput = null;
let userConfig = undefined;
let userTheme = 0;
let userName = "";

// || (OR) operator: treats 0, "", false, null, undefined as falsy
console.log("userInput || 'default':", userInput || "default");     // "default"
console.log("userTheme || 'dark':", userTheme || "dark");           // "dark" (0 is falsy!)
console.log("userName || 'guest':", userName || "guest");           // "guest" ("" is falsy!)

// ?? (Nullish Coalescing): only null and undefined trigger default
console.log("userInput ?? 'default':", userInput ?? "default");     // "default"
console.log("userTheme ?? 'dark':", userTheme ?? "dark");           // 0 (preserved!)
console.log("userName ?? 'guest':", userName ?? "guest");           // "" (preserved!)
console.log("userConfig ?? 'standard':", userConfig ?? "standard"); // "standard"

// ============================================================
console.log("\n=== 7. REAL WORLD USE CASE ===\n");

// Use null when you WANT to explicitly say "this has no value"
function findUser(id) {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ];

  const user = users.find(u => u.id === id);

  // Return null to explicitly indicate "user not found"
  return user || null;
}

console.log("findUser(1):", findUser(1));   // { id: 1, name: "Alice" }
console.log("findUser(99):", findUser(99)); // null (explicit: no user found)

// Use undefined when JavaScript naturally provides it
function getConfigValue(key, config) {
  // If key doesn't exist, property access returns undefined naturally
  return config[key];
}

const config = { theme: "dark" };
console.log("getConfigValue('theme'):", getConfigValue("theme", config));     // "dark"
console.log("getConfigValue('lang'):", getConfigValue("lang", config));       // undefined (naturally missing)

// ============================================================
console.log("\n=== 8. SUMMARY TABLE ===\n");

const summary = `
┌─────────────────────┬─────────────────────┬─────────────────────┐
│ Feature             │ undefined           │ null                │
├─────────────────────┼─────────────────────┼─────────────────────┤
│ Meaning             │ "Not yet set"       │ "Intentionally empty"│
│ Set by              │ JavaScript          │ Developer           │
│ typeof              │ "undefined"         │ "object" (bug)      │
│ == null             │ true                │ true                │
│ === null            │ false               │ true                │
│ Number() conversion │ NaN                 │ 0                   │
│ JSON.stringify()    │ Removed             │ Kept as null        │
│ ?? operator         │ Triggers default    │ Triggers default    │
└─────────────────────┴─────────────────────┴─────────────────────┘
`;

console.log(summary);
