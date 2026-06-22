// ============================================================
// DESTRUCTURING, SPREAD & REST
// ============================================================
// Modern syntax for extracting values from objects and arrays.

// ------------------ Object Destructuring ------------------
export function demonstrateDestructuring() {
  const user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
      city: "New York",
      zip: "10001",
    },
  };

  // Basic
  const { firstName, lastName } = user;
  console.log(firstName, lastName); // John Doe

  // With different variable names
  const { firstName: fn, lastName: ln } = user;
  console.log(fn, ln); // John Doe

  // Default values
  const { middleName = "N/A" } = user;
  console.log(middleName); // N/A

  // Nested destructuring
  const { address: { city, zip } } = user;
  console.log(city, zip); // New York 10001

  // Rest pattern (gathers remaining properties)
  const { firstName: f, ...rest } = user;
  console.log("Rest:", rest);
  // { lastName: "Doe", age: 30, address: {...} }
}

// ------------------ Destructuring in Function Parameters ------------------
export function printUser({ firstName, lastName, age = 0 }) {
  console.log(`${firstName} ${lastName}, age ${age}`);
}

// Deep destructuring
export function printAddress({ address: { city, country = "USA" } }) {
  console.log(`${city}, ${country}`);
}

// ------------------ Object Spread ------------------
export function demonstrateSpread() {
  const defaults = { theme: "light", fontSize: 14, showSidebar: true };
  const overrides = { theme: "dark", fontSize: 16 };

  // Merge objects (later properties overwrite earlier ones)
  const config = { ...defaults, ...overrides };
  console.log("Merged:", config); // { theme: "dark", fontSize: 16, showSidebar: true }

  // Add new properties while copying
  const enhanced = { ...config, language: "en", version: 2 };
  console.log("Enhanced:", enhanced);

  // Shallow copy warning
  const original = { nested: { value: 1 } };
  const copy = { ...original };
  copy.nested.value = 999;
  console.log("Original nested changed?", original.nested.value); // 999 (shallow!)
}

// ------------------ Rest in Function Parameters ------------------
export function buildQuery(endpoint, { method = "GET", ...options }) {
  console.log(`Endpoint: ${endpoint}`);
  console.log(`Method: ${method}`);
  console.log(`Other options:`, options);
}
