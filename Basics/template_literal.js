// ============================================================
// JavaScript Template Literals (Template Strings)
// ============================================================
// Introduced in ES6 (ES2015)
// Enclosed by backticks (`) instead of single/double quotes

console.log("=== 1. BASIC TEMPLATE LITERAL ===\n");

const simple = `Hello, World!`;
console.log("Simple:", simple); // Hello, World!

// You can use single/double quotes inside without escaping
const quoteDemo = `It's a "beautiful" day!`;
console.log("Quotes inside:", quoteDemo);

// ============================================================
console.log("\n=== 2. STRING INTERPOLATION (PARAMETERIZATION) ===\n");
// Inject variables/expressions directly into strings using ${...}

const userName = "Alice";
const userAge = 28;
const city = "New York";

// Traditional concatenation (old way)
const oldWay = "My name is " + userName + ", I am " + userAge + " years old, and I live in " + city + ".";
console.log("Old concatenation:", oldWay);

// Template literal with parameterization (modern way)
const newWay = `My name is ${userName}, I am ${userAge} years old, and I live in ${city}.`;
console.log("Template literal:", newWay);

// ============================================================
console.log("\n=== 3. EXPRESSIONS INSIDE ${} ===\n");
// You can put ANY valid JavaScript expression inside ${}

const a = 10;
const b = 5;

console.log(`Sum: ${a} + ${b} = ${a + b}`);                 // Sum: 10 + 5 = 15
console.log(`Product: ${a} * ${b} = ${a * b}`);             // Product: 10 * 5 = 50
console.log(`Is ${a} > ${b}? ${a > b ? 'Yes' : 'No'}`);    // Is 10 > 5? Yes
console.log(`Uppercase: ${userName.toUpperCase()}`);        // Uppercase: ALICE
console.log(`Length of name: ${userName.length}`);          // Length of name: 5

// Function calls inside interpolation
function getGreeting(hour) {
  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";
  return "Good Evening";
}

const currentHour = 14;
console.log(`${getGreeting(currentHour)}, ${userName}!`);   // Good Afternoon, Alice!

// ============================================================
console.log("\n=== 4. MULTI-LINE STRINGS ===\n");
// Template literals preserve line breaks and indentation

const address = `123 Main Street
Apt 4B
${city}, NY 10001`;
console.log("Address:");
console.log(address);

// HTML template example
const cardHTML = `
<div class="card">
  <h2>${userName}</h2>
  <p>Age: ${userAge}</p>
  <p>Location: ${city}</p>
</div>`;
console.log("\nHTML Card:");
console.log(cardHTML);

// ============================================================
console.log("\n=== 5. DYNAMIC PARAMETERIZATION (REUSABLE STRINGS) ===\n");

// Create parameterized message templates
function createWelcomeMessage(name, role, company) {
  return `Welcome, ${name}! You have been assigned as ${role} at ${company}.`;
}

console.log(createWelcomeMessage("Bob", "Developer", "TechCorp"));
console.log(createWelcomeMessage("Carol", "Designer", "CreativeStudio"));

// Parameterized SQL-like query (for demo only, always use real parameterized queries!)
function buildQuery(table, column, value) {
  return `SELECT * FROM ${table} WHERE ${column} = '${value}'`;
}
console.log(buildQuery("users", "email", "alice@example.com"));

// URL construction
function buildUrl(base, path, params) {
  return `${base}/${path}?${Object.entries(params)
    .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
    .join('&')}`;
}
const url = buildUrl("https://api.example.com", "users", { name: "Alice", city: "New York" });
console.log("URL:", url);

// ============================================================
console.log("\n=== 6. NESTED TEMPLATE LITERALS ===\n");

const isAdmin = true;
const role = isAdmin ? `Admin (${userName})` : `User (${userName})`;
console.log("Role:", role); // Admin (Alice)

// Nested template with condition
const message = `Hello ${userName}, you have ${isAdmin ? `full access to all ${a + b} modules` : `limited access`}.`;
console.log("Nested:", message);

// ============================================================
console.log("\n=== 7. ESCAPING BACKTICKS ===\n");

const withBacktick = `This is a backtick character: \``;
console.log(withBacktick);

const withDollar = `Price: $${a}`; // $ is literal, ${a} is interpolated
console.log("Price:", withDollar); // Price: $10

// To show literal ${, escape with backslash
const literalDollar = `Template syntax: \${variable}`;
console.log(literalDollar); // Template syntax: ${variable}

// ============================================================
console.log("\n=== 8. TAGGED TEMPLATE LITERALS (ADVANCED) ===\n");
// A function that processes the template

function highlight(strings, ...values) {
  // strings: array of literal parts
  // values: array of interpolated values
  return strings.reduce((result, str, i) => {
    const val = values[i] ? `[${values[i]}]` : '';
    return result + str + val;
  }, '');
}

const item = "laptop";
const price = 999;
const highlighted = highlight`The ${item} costs $${price} today.`;
console.log("Tagged template:", highlighted);
// Output: The [laptop] costs $[999] today.

// Sanitization example (basic HTML escape)
function escapeHtml(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const val = values[i] ? String(values[i])
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;') : '';
    return result + str + val;
  }, '');
}

const userInput = "<script>alert('xss')</script>";
console.log("Escaped HTML:", escapeHtml`<div>${userInput}</div>`);

// ============================================================
console.log("\n=== 9. RAW STRINGS ===\n");
// String.raw preserves escape sequences as-is

const rawPath = String.raw`C:\Users\Alice\Documents\file.txt`;
console.log("Raw path:", rawPath); // C:\Users\Alice\Documents\file.txt

// Compare with regular string
const regularPath = `C:\Users\Alice\Documents\file.txt`;
console.log("Regular path:", regularPath); // C:\Users\Alice\Documents\file.txt (same in this case, but \n would differ)

// ============================================================
console.log("\n=== 10. PRACTICAL USE CASES ===\n");

// 1. Dynamic Email Body
function createEmail(to, subject, body) {
  return `
To: ${to}
Subject: ${subject}

Dear ${to.split('@')[0]},

${body}

Best regards,
Support Team
  `.trim();
}

console.log(createEmail("user@example.com", "Welcome!", "Thanks for joining us."));

// 2. Dynamic CSS
function generateStyle(color, size) {
  return `
.custom-text {
  color: ${color};
  font-size: ${size}px;
}`;
}
console.log("\nGenerated CSS:");
console.log(generateStyle("#3498db", 16));

// 3. Dynamic Object Keys with Computed Properties
const keyName = "dynamicKey";
const obj = {
  [`prefix_${keyName}`]: "value1",
  [`${keyName}_suffix`]: "value2"
};
console.log("\nDynamic keys object:", obj);

// ============================================================
console.log("\n=== 11. SUMMARY ===\n");

const summary = `
┌─────────────────────────────────────────────────────────────────────┐
│                    TEMPLATE LITERAL SUMMARY                         │
├─────────────────────────────────────────────────────────────────────┤
│ Syntax: Enclose with backticks (\`)                                 │
├─────────────────────────────────────────────────────────────────────┤
│ Feature                          │ Example                          │
├──────────────────────────────────┼──────────────────────────────────┤
│ Variable Interpolation           │ \`Hello \${name}\`               │
│ Expression Evaluation            │ \`Sum: \${a + b}\`               │
│ Multi-line Strings               │ \`Line 1\nLine 2\`               │
│ Function Calls Inside            │ \`Result: \${getValue()}\`       │
│ Ternary/Conditionals             │ \`Status: \${isOk ? 'Yes':'No'}\`│
│ Tagged Templates                 │ tag\`Hello \${name}\`             │
│ Raw Strings                      │ String.raw\`C:\\\path\`          │
│ Dynamic Object Keys              │ { [\`key_\${i}\`]: value }       │
└─────────────────────────────────────────────────────────────────────┘

WHY USE TEMPLATE LITERALS?
✅ Cleaner syntax than string concatenation (+)
✅ Easy multi-line strings
✅ Parameterized strings (pass variables/expressions)
✅ More readable and maintainable code
`;

console.log(summary);
