// ============================================================
// 07 - Destructuring, Spread, and Rest with Objects
// ============================================================

// 1. OBJECT DESTRUCTURING
const user = {
  id: 1,
  username: "jdoe",
  email: "jdoe@example.com",
  role: "admin",
  address: {
    city: "New York",
    country: "USA"
  }
};

// Basic destructuring
const { username, email } = user;
console.log(username, email); // "jdoe" "jdoe@example.com"

// With aliases
const { username: name, role: userRole } = user;
console.log(name, userRole); // "jdoe" "admin"

// With default values
const { age = 25 } = user;
console.log(age); // 25 (default used since user.age is undefined)

// Nested destructuring
const { address: { city, country } } = user;
console.log(city, country); // "New York" "USA"

// Rest pattern (gather remaining properties)
const { id, ...restOfUser } = user;
console.log("Rest:", restOfUser); // { username, email, role, address }

// 2. DESTRUCTURING IN FUNCTION PARAMETERS
function displayUser({ username, email, role = "guest" }) {
  console.log(`${username} (${email}) - Role: ${role}`);
}
displayUser(user); // "jdoe (jdoe@example.com) - Role: admin"

// 3. SPREAD OPERATOR (...)
// Shallow copy
const userCopy = { ...user };
console.log("Copy:", userCopy);

// Merge objects
const defaults = { theme: "light", notifications: true };
const preferences = { theme: "dark", language: "en" };
const combined = { ...defaults, ...preferences };
console.log("Combined:", combined); // theme: "dark" (overrides), notifications: true

// Add new properties while copying
const enhancedUser = { ...user, isActive: true };
console.log("Enhanced:", enhancedUser);

// 4. REST PARAMETERS (function arguments -> object)
function createPerson(name, age, ...details) {
  // details is an array, but we can convert or use directly
  return { name, age, details };
}
console.log(createPerson("Alice", 30, "Engineer", "NYC"));

// 5. NESTED OBJECT SPREAD (shallow only!)
const original = {
  a: 1,
  nested: { x: 10, y: 20 }
};
const shallowCopy = { ...original };
shallowCopy.nested.x = 999;
console.log(original.nested.x); // 999 (shared reference!)

// Deep copy requires structuredClone, JSON trick, or library
const deepCopy = structuredClone(original);
deepCopy.nested.x = 111;
console.log(original.nested.x); // 999 (unaffected)

// 6. DESTRUCTURING WITH RENAMING AND DEFAULTS TOGETHER
const config = { host: "localhost" };
const { host, port = 3000, timeout: t = 5000 } = config;
console.log(host, port, t); // "localhost" 3000 5000

// 7. DESTRUCTURING IN FOR-OF LOOPS
const users = [
  { name: "Alice", score: 90 },
  { name: "Bob", score: 85 }
];
for (const { name, score } of users) {
  console.log(`${name}: ${score}`);
}

module.exports = { user, userCopy, combined, enhancedUser };
