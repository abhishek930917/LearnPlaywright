// ============================================================
// 10 - Object References, Cloning, and Comparison
// ============================================================

// 1. OBJECTS ARE REFERENCE TYPES
// Variables hold a REFERENCE (memory address), not the actual data.

const objA = { value: 10 };
const objB = objA; // Both point to SAME object in memory!

objB.value = 20;
console.log("objA.value:", objA.value); // 20 (changed too!)
console.log("objA === objB:", objA === objB); // true (same reference)

// 2. COMPARISON
const objC = { value: 20 };
const objD = { value: 20 };
console.log("objC === objD:", objC === objD); // false (different references!)
console.log("objA === objC:", objA === objC); // false

// 3. SHALLOW COPY (only top level is new reference)
const original = {
  name: "Original",
  nested: { score: 100 },
  tags: ["a", "b"]
};

// Method 1: Spread operator
const copy1 = { ...original };

// Method 2: Object.assign()
const copy2 = Object.assign({}, original);

// Method 3: Array/Object.fromEntries with entries
const copy3 = Object.fromEntries(Object.entries(original));

copy1.name = "Copy1";
copy1.nested.score = 999; // Affects original! (nested is still same reference)
console.log("Original nested.score after copy1 change:", original.nested.score); // 999

// 4. DEEP CLONE METHODS

// Method 1: structuredClone() (modern, best for most cases)
const deep1 = structuredClone(original);
deep1.nested.score = 111;
console.log("Original after structuredClone deep change:", original.nested.score); // 999 (safe!)

// Method 2: JSON.parse(JSON.stringify()) (limited but works for plain data)
const deep2 = JSON.parse(JSON.stringify(original));

// Method 3: Manual recursive function (for learning)
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj; // primitive
  }
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }
  const cloned = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  return cloned;
}

const deep3 = deepClone(original);
deep3.nested.score = 222;
console.log("Original after manual deep change:", original.nested.score); // 999

// 5. MERGING OBJECTS (shallow vs deep)
const defaults = {
  theme: "light",
  layout: { sidebar: true, width: 200 }
};
const userPrefs = {
  theme: "dark",
  layout: { width: 300 }
};

// Shallow merge (Object.assign or spread)
const shallowMerge = { ...defaults, ...userPrefs };
console.log("Shallow merge layout:", shallowMerge.layout);
// { width: 300 } - sidebar LOST because layout object was overwritten!

// Deep merge requires custom logic or library
function deepMerge(target, source) {
  const result = { ...target };
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (
        typeof source[key] === "object" &&
        source[key] !== null &&
        !Array.isArray(source[key])
      ) {
        result[key] = deepMerge(target[key] || {}, source[key]);
      } else {
        result[key] = source[key];
      }
    }
  }
  return result;
}

const deepMerged = deepMerge(defaults, userPrefs);
console.log("Deep merge layout:", deepMerged.layout);
// { sidebar: true, width: 300 } - preserved!

// 6. PASSING OBJECTS TO FUNCTIONS (pass by reference)
function updateName(person) {
  person.name = "Changed"; // Modifies original!
}

const p = { name: "Original" };
updateName(p);
console.log("After function:", p.name); // "Changed"

function safeUpdate(person) {
  const copy = { ...person };
  copy.name = "Safe";
  return copy; // Returns new object, original unchanged
}

const p2 = safeUpdate(p);
console.log("Original after safe:", p.name); // "Changed"
console.log("Returned copy:", p2.name);       // "Safe"

module.exports = { original, deepClone, deepMerge };
