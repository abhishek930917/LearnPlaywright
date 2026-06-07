// ============================================================================
// 11-string-parameterization.js
// All Ways to Make Strings Parameterized in JavaScript
// ============================================================================

// Parameterization = Inserting dynamic values into strings at runtime.
// This is essential for generating messages, URLs, SQL queries, HTML, etc.

// ----------------------------------------------------------------------------
// 1. CONCATENATION (+ operator)  -- The Old Way
// ----------------------------------------------------------------------------
const user = "Alice";
const age = 30;

const msg1 = "Hello, " + user + "! You are " + age + " years old.";
console.log("Concatenation:", msg1);

// Problems:
// - Verbose with many variables
// - Hard to read
// - Easy to miss spaces

// ----------------------------------------------------------------------------
// 2. ARRAY JOIN  -- Rarely used now
// ----------------------------------------------------------------------------
const msg2 = ["Hello, ", user, "! You are ", age, " years old."].join("");
console.log("Array join:", msg2);

// ----------------------------------------------------------------------------
// 3. TEMPLATE LITERALS (Backticks + ${})  -- The Modern Standard
// ----------------------------------------------------------------------------
// Wrap the string in backticks `` and use ${expression} for placeholders.

const name = "Bob";
const score = 95;
const passed = true;

const report = `Student: ${name}
Score: ${score}
Status: ${passed ? "PASS" : "FAIL"}
Grade: ${score >= 90 ? "A" : score >= 80 ? "B" : "C"}`;

console.log("Template literal:");
console.log(report);

// Any valid JavaScript expression works inside ${}:
console.log(`Math: ${2 + 3}, Function: ${Math.max(10, 20)}, Array: ${[1, 2, 3].join("-")}`);

// ----------------------------------------------------------------------------
// 4. CONCAT() METHOD
// ----------------------------------------------------------------------------
const msg3 = "Hello, ".concat(user, "! You are ", String(age), " years old.");
console.log("concat():", msg3);

// Note: concat() is less readable than template literals. Prefer backticks.

// ----------------------------------------------------------------------------
// 5. REPLACE WITH PLACEHOLDERS  -- Custom Parameterization
// ----------------------------------------------------------------------------
// Useful when you have a template string and want to fill placeholders dynamically.

function fillTemplate(template, data) {
  return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    return data[key] !== undefined ? data[key] : match;
  });
}

const emailTemplate = `Hello {{name}},
Your order #{{orderId}} has been {{status}}.
Total: ${{total}}`;

const emailData = {
  name: "Alice",
  orderId: "12345",
  status: "shipped",
  total: "49.99",
};

console.log("Custom placeholders:");
console.log(fillTemplate(emailTemplate, emailData));

// Variation: Using positional placeholders {0}, {1}
function formatString(template, ...args) {
  return template.replace(/\{(\d+)\}/g, (match, index) => {
    return args[Number(index)] !== undefined ? args[Number(index)] : match;
  });
}

console.log("Positional:", formatString("Hello {0}, you have {1} messages.", "Alice", 5));

// ----------------------------------------------------------------------------
// 6. TAGGED TEMPLATE LITERALS  -- Advanced Parameterization
// ----------------------------------------------------------------------------
// A function that processes the template literal and values.

function highlight(strings, ...values) {
  // strings: array of literal parts
  // values: array of interpolated expressions
  return strings.reduce((result, string, i) => {
    const value = values[i] !== undefined ? `[[${values[i]}]]` : "";
    return result + string + value;
  }, "");
}

const item = "book";
const price = 25;
const highlighted = highlight`The ${item} costs $${price}.`;
console.log("Tagged template:", highlighted); // The [[book]] costs $[[25]].

// ----------------------------------------------------------------------------
// 7. SQL-LIKE PARAMETERIZATION (Security: Prevent Injection)
// ----------------------------------------------------------------------------
// NEVER concatenate user input directly into SQL. Use parameterized queries concept.

function createQuery(table, conditions) {
  // In real DB libraries, you use ? placeholders and pass values separately.
  // Here we simulate the CONCEPT.
  const clauses = Object.entries(conditions).map(([key, value]) => {
    return `${key} = ${typeof value === "string" ? `'${value}'` : value}`;
  });
  return `SELECT * FROM ${table} WHERE ${clauses.join(" AND ")}`;
}

// ⚠️ WARNING: This is for DEMO only. Real apps use query builders/ORMs.
console.log("Query:", createQuery("users", { id: 42, active: true }));

// Real parameterized style (conceptual):
// db.query("SELECT * FROM users WHERE id = ? AND name = ?", [42, "Alice"]);

// ----------------------------------------------------------------------------
// 8. URL PARAMETERIZATION
// ----------------------------------------------------------------------------

// Manual (fragile):
const baseUrl = "https://api.example.com/users";
const userId = 42;
const manualUrl = baseUrl + "/" + userId + "/posts?limit=10";
console.log("Manual URL:", manualUrl);

// Using URL constructor (recommended):
const url = new URL("https://api.example.com/users/42/posts");
url.searchParams.append("limit", "10");
url.searchParams.append("sort", "date");
console.log("URL object:", url.toString());

// With template literals:
const category = "electronics";
const page = 2;
const templateUrl = `https://shop.example.com/${category}?page=${page}`;
console.log("Template URL:", templateUrl);

// ----------------------------------------------------------------------------
// 9. INTERNATIONALIZATION (i18n) PARAMETERIZATION
// ----------------------------------------------------------------------------
// Formatting numbers, dates, and currencies with locale support.

const amount = 1234567.89;
const date = new Date();

// Currency formatting
console.log("USD:", new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount));
console.log("EUR:", new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(amount));
console.log("INR:", new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(amount));

// Date formatting
console.log("US Date:", new Intl.DateTimeFormat("en-US").format(date));
console.log("UK Date:", new Intl.DateTimeFormat("en-GB").format(date));
console.log("Japanese Date:", new Intl.DateTimeFormat("ja-JP").format(date));

// Number formatting
console.log("German number:", new Intl.NumberFormat("de-DE").format(amount));  // 1.234.567,89
console.log("Indian number:", new Intl.NumberFormat("en-IN").format(amount));   // 12,34,567.89

// ----------------------------------------------------------------------------
// 10. OBJECT TO QUERY STRING
// ----------------------------------------------------------------------------

function toQueryString(params) {
  return Object.entries(params)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join("&");
}

const searchParams = { q: "hello world", page: 1, category: "books & more" };
console.log("Query string:", toQueryString(searchParams));
// q=hello%20world&page=1&category=books%20%26%20more

// Modern way:
const qs = new URLSearchParams(searchParams).toString();
console.log("URLSearchParams:", qs);

// ----------------------------------------------------------------------------
// 11. NAMED PARAMETERS WITH OBJECT DESTRUCTURING
// ----------------------------------------------------------------------------

function greet({ name, greeting = "Hello", punctuation = "!" }) {
  return `${greeting}, ${name}${punctuation}`;
}

console.log(greet({ name: "Alice" }));                    // Hello, Alice!
console.log(greet({ name: "Bob", greeting: "Hi" }));         // Hi, Bob!
console.log(greet({ name: "Carol", punctuation: "..." })); // Hello, Carol...

// ----------------------------------------------------------------------------
// 12. STRING FORMATTING LIBRARY PATTERN (like Python f-strings or C# String.Format)
// ----------------------------------------------------------------------------

function format(template, ...args) {
  // Supports {0}, {1}, {name} patterns
  const isObject = args.length === 1 && typeof args[0] === "object";
  const data = isObject ? args[0] : args;

  return template.replace(/\{(\w+)\}/g, (match, key) => {
    const value = isObject ? data[key] : data[Number(key)];
    return value !== undefined ? value : match;
  });
}

// Positional
console.log(format("Hello {0}, you are {1} years old.", "Alice", 30));

// Named
console.log(format("Hello {name}, welcome to {city}!", { name: "Bob", city: "Paris" }));

// ----------------------------------------------------------------------------
// 13. REUSABLE MESSAGE TEMPLATES
// ----------------------------------------------------------------------------

const MESSAGES = {
  welcome: (name) => `Welcome, ${name}!`,
  error: (code, detail) => `Error ${code}: ${detail}`,
  success: (action, item) => `Successfully ${action} ${item}.`,
};

console.log(MESSAGES.welcome("Alice"));
console.log(MESSAGES.error(404, "Page not found"));
console.log(MESSAGES.success("deleted", "the file"));

// ============================================================================
// SUMMARY: When to Use What?
// ============================================================================
//
// Simple variable insertion:     Template literals `${var}`
// Multiple expressions:          Template literals
// HTML/SQL generation:           Template literals + sanitization
// Reusable templates:              Function returning template literal
// Security (SQL/URLs):           Parameterized APIs (never raw concat!)
// Custom placeholder syntax:     .replace() with regex
// Localization/currency/dates:     Intl.NumberFormat / Intl.DateTimeFormat
// Complex named parameters:        Object destructuring functions
//
// RULE OF THUMB: Prefer template literals for 99% of use cases.
// ============================================================================
