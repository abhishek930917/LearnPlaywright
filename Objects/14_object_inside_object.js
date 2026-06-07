// ============================================================
// 14 - Nested Objects (Objects Inside Objects)
// ============================================================

/*
  A "nested object" is an object that is stored as a property of another object.
  This creates a hierarchy or tree-like structure.

  Example:
    company = {
      name: "TechCorp",
      address: {           // address is an object inside company
        street: "123 Main St",
        city: "NYC"
      }
    }
*/


// ============================================================
// 1. CREATING NESTED OBJECTS
// ============================================================

// Literal syntax (most common)
const user = {
  id: 1,
  name: "Alice",
  profile: {
    age: 28,
    country: "USA",
    preferences: {
      theme: "dark",
      language: "en"
    }
  },
  // Array of objects is also nested
  orders: [
    { id: "ORD-1", total: 99 },
    { id: "ORD-2", total: 45 }
  ]
};

console.log("=== 1. Creating Nested Objects ===");
console.log(user);

// Adding nested object later
user.settings = {
  notifications: true,
  privacy: {
    publicProfile: false,
    showEmail: false
  }
};
console.log("After adding settings:", user.settings);


// ============================================================
// 2. ACCESSING NESTED PROPERTIES
// ============================================================

console.log("\n=== 2. Accessing Nested Properties ===");

// Dot notation (chain)
console.log("Country:", user.profile.country);               // "USA"
console.log("Theme:", user.profile.preferences.theme);         // "dark"

// Bracket notation (useful for dynamic or invalid JS identifier keys)
console.log("Theme via []:", user["profile"]["preferences"]["theme"]); // "dark"

// Mixed
console.log("Name:", user["profile"].age); // 28

// Dynamic path
const propChain = ["profile", "preferences", "language"];
let current = user;
for (const key of propChain) {
  current = current[key];
}
console.log("Dynamic traversal:", current); // "en"


// ============================================================
// 3. MODIFICATION (MUTATION)
// ============================================================

console.log("\n=== 3. Modifying Nested Objects ===");

// Modify existing nested property
user.profile.age = 29;
console.log("Updated age:", user.profile.age); // 29

// Add property inside nested object
user.profile.preferences.fontSize = "16px";
console.log("Added fontSize:", user.profile.preferences);

// Replace entire nested object (breaks reference if any existed)
user.profile = {
  age: 30,
  country: "UK",
  preferences: { theme: "light", language: "en" }
};
console.log("Replaced profile:", user.profile);


// ============================================================
// 4. OPTIONAL CHAINING (Safe Deep Access)
// ============================================================

console.log("\n=== 4. Optional Chaining ===");

const product = {
  name: "Laptop",
  specs: {
    memory: "16GB",
    storage: { type: "SSD", size: "512GB" }
  }
  // warranty is missing!
};

// Without optional chaining, this crashes if a path is missing
// console.log(product.warranty.duration); // TypeError!

// With optional chaining (?.) — returns undefined instead of crashing
console.log("Storage type:", product.specs?.storage?.type);    // "SSD"
console.log("Warranty:", product.warranty?.duration);          // undefined (no crash!)
console.log("Deep missing:", product.specs?.gpu?.model);       // undefined

// Optional chaining with nullish coalescing (??)
const warrantyMonths = product.warranty?.duration ?? 12;
console.log("Warranty (default):", warrantyMonths); // 12


// ============================================================
// 5. CHECKING IF NESTED PROPERTY EXISTS
// ============================================================

console.log("\n=== 5. Checking Existence ===");

// Using optional chaining + typeof
console.log("Has storage?", typeof product.specs?.storage !== "undefined"); // true
console.log("Has warranty?", product.warranty !== undefined); // false

// Using in operator (checks own + inherited, but not deep)
console.log("'name' in product:", "name" in product); // true

// Custom hasPath helper
function hasPath(obj, path) {
  let current = obj;
  for (const key of path) {
    if (current === null || current === undefined || !(key in current)) {
      return false;
    }
    current = current[key];
  }
  return true;
}

console.log("Has path specs.storage.type:", hasPath(product, ["specs", "storage", "type"])); // true
console.log("Has path specs.gpu.model:", hasPath(product, ["specs", "gpu", "model"]));   // false


// ============================================================
// 6. SAFE SETTER (create nested path if missing)
// ============================================================

console.log("\n=== 6. Safe Setter ===");

function setNested(obj, path, value) {
  let current = obj;
  for (let i = 0; i < path.length - 1; i++) {
    const key = path[i];
    if (current[key] === undefined || typeof current[key] !== "object") {
      current[key] = {};
    }
    current = current[key];
  }
  current[path[path.length - 1]] = value;
  return obj;
}

const config = {};
setNested(config, ["database", "connection", "host"], "localhost");
setNested(config, ["database", "connection", "port"], 5432);
setNested(config, ["database", "pool", "max"], 10);
console.log("Safe nested setter result:", JSON.stringify(config, null, 2));


// ============================================================
// 7. DELETING NESTED PROPERTIES
// ============================================================

console.log("\n=== 7. Deleting Nested Properties ===");

const student = {
  name: "Bob",
  marks: {
    math: 90,
    science: 85,
    history: 78
  }
};

delete student.marks.history;
console.log("After delete history:", student.marks);
// { math: 90, science: 85 }


// ============================================================
// 8. ITERATING OVER NESTED OBJECTS
// ============================================================

console.log("\n=== 8. Iterating Over Nested Objects ===");

const company = {
  name: "TechCorp",
  departments: {
    engineering: {
      head: "Alice",
      employees: 50
    },
    sales: {
      head: "Bob",
      employees: 20
    }
  }
};

// Iterate departments
for (const [deptName, deptInfo] of Object.entries(company.departments)) {
  console.log(`  ${deptName}: headed by ${deptInfo.head}, ${deptInfo.employees} employees`);
}

// Recursive deep traversal
function traverse(obj, prefix = "") {
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value !== null && typeof value === "object" && !Array.isArray(value)) {
      traverse(value, path);
    } else {
      console.log(`  ${path}: ${value}`);
    }
  }
}

console.log("  Deep traversal:");
traverse(company);


// ============================================================
// 9. NESTED DESTRUCTURING
// ============================================================

console.log("\n=== 9. Nested Destructuring ===");

const apiResponse = {
  status: 200,
  data: {
    user: {
      id: 42,
      name: "Charlie"
    },
    meta: {
      page: 1,
      total: 100
    }
  }
};

// Extract deeply nested values
const {
  status,
  data: {
    user: { name: userName },
    meta: { total }
  }
} = apiResponse;

console.log("  status:", status);      // 200
console.log("  userName:", userName); // "Charlie"
console.log("  total:", total);       // 100

// Destructure with defaults and renaming
const {
  data: {
    user: { role = "user" } = {},
    meta: { page: currentPage = 1 } = {}
  } = {}
} = { data: { user: { id: 1 } } }; // partial object

console.log("  role (default):", role);         // "user"
console.log("  currentPage:", currentPage);     // 1


// ============================================================
// 10. CLONING NESTED OBJECTS (Shallow vs Deep)
// ============================================================

console.log("\n=== 10. Cloning Nested Objects ===");

const original = {
  a: 1,
  nested: { b: 2, deep: { c: 3 } }
};

// SHALLOW COPY (only top level is new)
const shallow = { ...original };
shallow.nested.b = 999;
console.log("  Original nested.b after shallow copy mutation:", original.nested.b);
// 999! nested object is still shared!

// DEEP COPY using structuredClone (modern, recommended)
const deep1 = structuredClone(original);
deep1.nested.deep.c = 888;
console.log("  Original deep.c after structuredClone mutation:", original.nested.deep.c);
// 3 — fully independent!

// DEEP COPY using JSON (limited, no functions, dates become strings, no circular refs)
const deep2 = JSON.parse(JSON.stringify(original));
deep2.nested.b = 777;
console.log("  Original nested.b after JSON clone mutation:", original.nested.b);
// still 999 (from earlier), unaffected by deep2

// Manual recursive deep clone (for learning)
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (obj instanceof Date) return new Date(obj.getTime());
  if (Array.isArray(obj)) return obj.map(item => deepClone(item));

  const clone = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}

const manualClone = deepClone(original);
manualClone.nested.deep.c = 111;
console.log("  Original deep.c after manual clone mutation:", original.nested.deep.c);
// still 3 — independent


// ============================================================
// 11. MERGING NESTED OBJECTS (Deep Merge)
// ============================================================

console.log("\n=== 11. Deep Merge ===");

const defaults = {
  theme: "light",
  layout: {
    sidebar: true,
    width: 200,
    header: { title: "App", showLogo: true }
  }
};

const overrides = {
  theme: "dark",
  layout: {
    width: 300
    // Notice: sidebar and header are NOT specified!
  }
};

// Shallow merge loses nested defaults
const shallowMerge = { ...defaults, ...overrides };
console.log("  Shallow merge layout:", shallowMerge.layout);
// { width: 300 } — sidebar and header LOST!

// Deep merge preserves nested defaults
function deepMerge(target, source) {
  const result = { ...target };
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (
        typeof source[key] === "object" &&
        source[key] !== null &&
        !Array.isArray(source[key]) &&
        typeof result[key] === "object" &&
        result[key] !== null
      ) {
        result[key] = deepMerge(result[key], source[key]);
      } else {
        result[key] = source[key];
      }
    }
  }
  return result;
}

const merged = deepMerge(defaults, overrides);
console.log("  Deep merge layout:", merged.layout);
// { sidebar: true, width: 300, header: { title: "App", showLogo: true } }


// ============================================================
// 12. COMMON PATTERNS WITH NESTED OBJECTS
// ============================================================

console.log("\n=== 12. Common Patterns ===");

// Pattern 1: Normalized / Flattened state (Redux-style)
const state = {
  byId: {
    1: { id: 1, name: "Alice" },
    2: { id: 2, name: "Bob" }
  },
  allIds: [1, 2],
  activeId: 1
};
console.log("  Normalized state access:", state.byId[state.activeId].name); // "Alice"

// Pattern 2: Options/Config object (deep defaults)
function initApp(options = {}) {
  const defaults = {
    api: { host: "localhost", port: 3000, ssl: false },
    ui: { theme: "light", lang: "en" }
  };
  const settings = deepMerge(defaults, options);
  console.log("  Init with defaults:", settings);
  return settings;
}

initApp({ api: { port: 8080 } });

// Pattern 3: Fluent / Builder pattern with nested settings
const query = {
  table: "users",
  where: { active: true, role: "admin" },
  select: ["id", "name", "email"],
  orderBy: { field: "name", direction: "asc" }
};
console.log("  Query builder pattern:", JSON.stringify(query, null, 2));


// ============================================================
// 13. NESTED OBJECTS & JSON
// ============================================================

console.log("\n=== 13. Nested Objects & JSON ===");

const jsonString = JSON.stringify(user, null, 2);
console.log("  Stringified user (first 5 lines):");
console.log(jsonString.split("\n").slice(0, 6).join("\n"));

const parsedBack = JSON.parse(jsonString);
console.log("  Parsed back equal?", JSON.stringify(user) === JSON.stringify(parsedBack)); // true


// ============================================================
// 14. PERFORMANCE CONSIDERATIONS
// ============================================================

/*
  - Property access in nested objects is slightly slower than flat objects
    because the engine must resolve each level of the chain.
  - Deep cloning is expensive — avoid in hot paths.
  - Prefer flat structures for very large data sets when possible.
  - Use optional chaining to avoid defensive if-checks cluttering code.
*/


// ============================================================
// 15. SUMMARY
// ============================================================

console.log(`\n=== SUMMARY ===
- Nested objects = objects stored as property values of another object.
- Access: obj.level1.level2 (dot) or obj["level1"]["level2"] (bracket).
- Optional chaining (?.): obj?.a?.b returns undefined instead of crashing.
- Modification mutates shared references — be careful with shallow copies.
- Cloning: shallow ({...obj}) shares nested refs; use structuredClone() for deep copy.
- Deep merge: recursively merge nested objects to preserve defaults.
- Destructuring works on nested paths: const { a: { b } } = obj.
- JSON.stringify/parse handles nested objects automatically.
`);

module.exports = { user, product, config, student, company, apiResponse, original, defaults, overrides, state };
