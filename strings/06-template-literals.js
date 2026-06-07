// ============================================================================
// 06-template-literals.js
// Template Literals (Template Strings) - ES6+
// ============================================================================

// ----------------------------------------------------------------------------
// 1. Basic Interpolation with ${}
// ----------------------------------------------------------------------------
const name = "Alice";
const age = 30;

// Old way
const oldGreeting = "Hello, " + name + "! You are " + age + " years old.";

// New way with template literals
const newGreeting = `Hello, ${name}! You are ${age} years old.`;

console.log("Old way:", oldGreeting);
console.log("New way:", newGreeting);

// ----------------------------------------------------------------------------
// 2. Expressions Inside ${}
// ----------------------------------------------------------------------------
const a = 10;
const b = 20;

console.log(`${a} + ${b} = ${a + b}`);           // 10 + 20 = 30
console.log(`Double: ${a * 2}`);                  // Double: 20
console.log(`Is adult: ${age >= 18 ? "Yes" : "No"}`); // Is adult: Yes
console.log(`Function result: ${Math.max(a, b)}`);   // Function result: 20

// ----------------------------------------------------------------------------
// 3. Multiline Strings (No more \n needed)
// ----------------------------------------------------------------------------
const html = `
  <div class="container">
    <h1>${name}</h1>
    <p>Age: ${age}</p>
  </div>
`;

console.log("HTML template:");
console.log(html);

// ----------------------------------------------------------------------------
// 4. Tagged Template Literals
// ----------------------------------------------------------------------------
// A function that processes the template

function highlight(strings, ...values) {
  return strings.reduce((result, string, i) => {
    const value = values[i] ? `[${values[i]}]` : "";
    return result + string + value;
  }, "");
}

const item = "book";
const price = 25;

const highlighted = highlight`The ${item} costs $${price}.`;
console.log("Tagged template:", highlighted);
// The [book] costs $[25].

// ----------------------------------------------------------------------------
// 5. Practical Tagged Template - SQL Query Sanitization (Concept)
// ----------------------------------------------------------------------------

function sql(strings, ...values) {
  // In real code, this would sanitize inputs to prevent SQL injection
  const query = strings.reduce((result, string, i) => {
    const value = values[i] ? `"${values[i]}"` : "";
    return result + string + value;
  }, "");

  console.log("SQL Query:", query);
  return query;
}

const tableName = "users";
const userId = 42;
sql`SELECT * FROM ${tableName} WHERE id = ${userId}`;

// ----------------------------------------------------------------------------
// 6. Raw Strings (Avoid escape processing)
// ----------------------------------------------------------------------------

const path = String.raw`C:\Users\Admin\Documents\file.txt`;
console.log("Raw path:", path); // C:\Users\Admin\Documents\file.txt

// Compare with regular string
const regularPath = "C:\\Users\\Admin\\Documents\\file.txt";
console.log("Regular path:", regularPath); // Same result but with manual escaping

// ----------------------------------------------------------------------------
// 7. Nesting Template Literals
// ----------------------------------------------------------------------------

const items = ["apple", "banana", "cherry"];

const listHtml = `
  <ul>
    ${items.map((item) => `<li>${item}</li>`).join("")}
  </ul>
`;

console.log("Nested templates:");
console.log(listHtml);

// ============================================================================
