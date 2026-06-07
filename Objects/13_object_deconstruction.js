// ============================================================
// 13 - Object Destructuring (Object Deconstruction)
// ============================================================

/*
  Object Destructuring is a clean syntax for extracting properties from an object
  and assigning them to variables. It is called "destructuring" because you are
  "unpacking" or "deconstructing" the structure of the object.

  Without destructuring, you write:
    const name = user.name;
    const age = user.age;

  With destructuring, you write:
    const { name, age } = user;
*/


// ============================================================
// 1. BASIC DESTRUCTURING
// ============================================================

const user = {
  id: 1,
  username: "jdoe",
  email: "jdoe@example.com",
  isActive: true
};

// Extract 'username' and 'email' into local variables
const { username, email } = user;

console.log("Basic:");
console.log("  username:", username); // "jdoe"
console.log("  email:", email);       // "jdoe@example.com"

// The order does NOT matter — JS matches by key name
const { email: userEmail, username: userName } = user;
console.log("  reversed order:", userName, userEmail); // still works


// ============================================================
// 2. RENAMING (ALIASES) DURING DESTRUCTURING
// ============================================================

/*
  Syntax: { originalName: newVariableName }
  This is useful when you want to avoid naming conflicts.
*/

const person = {
  name: "Alice",
  role: "admin",
  country: "USA"
};

const { name: fullName, role: userRole, country: nation } = person;

console.log("\nRenaming:");
console.log("  fullName:", fullName);   // "Alice"
console.log("  userRole:", userRole);   // "admin"
console.log("  nation:", nation);       // "USA"

// This is especially useful when variable names are already taken
const name = "Bob"; // existing variable
const { name: personName } = person;
console.log("  personName:", personName); // "Alice" (no conflict!)


// ============================================================
// 3. DEFAULT VALUES
// ============================================================

/*
  If a property is undefined or missing, you can provide a default value.
  Syntax: { property = defaultValue }
*/

const product = {
  title: "Laptop",
  price: 999
  // category is missing
};

const { title, price, category = "Uncategorized" } = product;

console.log("\nDefaults:");
console.log("  title:", title);         // "Laptop"
console.log("  price:", price);         // 999
console.log("  category:", category);   // "Uncategorized" (default used)

// Important: default only triggers for undefined, NOT for null, 0, or ""
const config = {
  timeout: 0,
  retries: null,
  host: undefined
};

const { timeout = 5000, retries = 3, host = "localhost" } = config;
console.log("  timeout:", timeout);     // 0 (0 is NOT undefined, default ignored!)
console.log("  retries:", retries);     // null (null is NOT undefined, default ignored!)
console.log("  host:", host);           // "localhost" (undefined triggered default)


// ============================================================
// 4. NESTED DESTRUCTURING
// ============================================================

/*
  You can destructure properties inside nested objects in a single step.
*/

const company = {
  name: "TechCorp",
  address: {
    street: "123 Main St",
    city: "New York",
    zip: "10001",
    country: {
      code: "US",
      name: "United States"
    }
  }
};

// Destructure nested properties
const {
  name: companyName,
  address: {
    city,
    zip,
    country: { code: countryCode }
  }
} = company;

console.log("\nNested:");
console.log("  companyName:", companyName);   // "TechCorp"
console.log("  city:", city);                 // "New York"
console.log("  zip:", zip);                   // "10001"
console.log("  countryCode:", countryCode);     // "US"

// You CANNOT access intermediate objects after deep destructuring
// 'address' itself is not a variable here unless you also extract it
const {
  address: addrObj // extracting the whole nested object too
} = company;
console.log("  addrObj:", addrObj);


// ============================================================
// 5. REST PATTERN (...rest) — GATHER REMAINING PROPERTIES
// ============================================================

/*
  The rest syntax collects all remaining properties that were NOT destructured
  into a new object. The rest variable must be the LAST destructured element.
*/

const article = {
  id: 101,
  title: "JS Guide",
  author: "Alice",
  tags: ["js", "tutorial"],
  published: "2024-01-01"
};

const { id, title, ...metadata } = article;

console.log("\nRest Pattern:");
console.log("  id:", id);                 // 101
console.log("  title:", title);            // "JS Guide"
console.log("  metadata:", metadata);      // { author, tags, published }

// Rest is useful when you want to pluck a few props and keep the rest intact
function logHeader({ title, author, ...rest }) {
  console.log(`Article: "${title}" by ${author}`);
  console.log("Other fields:", Object.keys(rest));
}
logHeader(article);


// ============================================================
// 6. DESTRUCTURING IN FUNCTION PARAMETERS
// ============================================================

/*
  One of the MOST common and powerful uses of destructuring.
  Instead of receiving an object and manually extracting inside the function,
  you destructure directly in the parameter list.
*/

// Without destructuring
function displayUserOld(user) {
  console.log(`${user.name} (${user.email})`);
}

// With destructuring
function displayUser({ name, email, role = "guest" }) {
  console.log(`${name} (${email}) — Role: ${role}`);
}

displayUser({ name: "Bob", email: "bob@example.com" });
// Bob (bob@example.com) — Role: guest

displayUser({ name: "Alice", email: "alice@example.com", role: "admin" });
// Alice (alice@example.com) — Role: admin

// With renaming in parameters
function processPayment({ amount: total, currency = "USD", ...details }) {
  console.log(`Paying ${total} ${currency}`);
  console.log("Details:", details);
}
processPayment({ amount: 100, method: "card", currency: "EUR" });

// Nested destructuring in parameters
function printAddress({ name, address: { city, country } }) {
  console.log(`${name} lives in ${city}, ${country}`);
}
printAddress({
  name: "Charlie",
  address: { city: "London", country: "UK" }
});


// ============================================================
// 7. COMBINING RENAMING + DEFAULTS + NESTED
// ============================================================

const serverConfig = {
  host: "api.example.com",
  port: 443,
  ssl: {
    enabled: true
    // cert and key are missing
  }
};

const {
  host: serverHost = "localhost",
  port: serverPort = 80,
  ssl: {
    enabled: isSecure = false,
    cert: sslCert = "default.crt",
    key: sslKey = "default.key"
  } = {} // default for ssl itself if missing entirely!
} = serverConfig;

console.log("\nCombined:");
console.log("  serverHost:", serverHost);
console.log("  serverPort:", serverPort);
console.log("  isSecure:", isSecure);
console.log("  sslCert:", sslCert);
console.log("  sslKey:", sslKey);


// ============================================================
// 8. DESTRUCTURING ARRAY ELEMENTS INSIDE OBJECTS
// ============================================================

const order = {
  orderId: "ORD-123",
  items: ["book", "pen", "notebook"],
  prices: [10, 2, 5]
};

// Destructure first item of the array inside the object
const {
  orderId,
  items: [firstItem],
  prices: [, secondPrice]
} = order;

console.log("\nArray inside object:");
console.log("  orderId:", orderId);           // "ORD-123"
console.log("  firstItem:", firstItem);       // "book"
console.log("  secondPrice:", secondPrice);    // 2


// ============================================================
// 9. DESTRUCTURING IN FOR...OF LOOPS
// ============================================================

const users = [
  { id: 1, name: "Alice", score: 90 },
  { id: 2, name: "Bob", score: 85 },
  { id: 3, name: "Carol", score: 92 }
];

console.log("\nfor...of destructuring:");
for (const { name, score } of users) {
  console.log(`  ${name}: ${score}`);
}

// With index via entries
console.log("  With index:");
for (const [index, { name }] of users.entries()) {
  console.log(`  ${index + 1}. ${name}`);
}


// ============================================================
// 10. COMPUTED PROPERTY NAMES IN DESTRUCTURING
// ============================================================

/*
  You can destructure properties whose names are determined dynamically.
  Syntax: { [expression]: variable }
*/

const dynamicKey = "status";
const dynamicObj = {
  status: "active",
  priority: "high",
  statusCode: 200
};

const { [dynamicKey]: currentStatus } = dynamicObj;
console.log("\nComputed key:");
console.log("  currentStatus:", currentStatus); // "active"

// Combining computed key with default
const { [dynamicKey]: stat = "unknown" } = dynamicObj;
console.log("  stat:", stat); // "active"


// ============================================================
// 11. DESTRUCTURING AFTER DECLARATION
// ============================================================

let firstName, lastName;

const fullPerson = { firstName: "John", lastName: "Doe" };

// Must wrap in parentheses when destructuring without declaration
// because { ... } on its own is interpreted as a block
({ firstName, lastName } = fullPerson);

console.log("\nAfter declaration:");
console.log("  firstName:", firstName); // "John"
console.log("  lastName:", lastName);   // "Doe"


// ============================================================
// 12. SWAPPING VARIABLES VIA DESTRUCTURING
// ============================================================

let a = 10;
let b = 20;

// One-liner swap without temp variable
[a, b] = [b, a];
console.log("\nSwap (array): a =", a, ", b =", b); // a=20, b=10

// Object property swap (less common but possible)
let x = { val: 1 };
let y = { val: 2 };
[x, y] = [y, x];
console.log("  Swap objects: x.val =", x.val, ", y.val =", y.val);


// ============================================================
// 13. GOTCHAS & EDGE CASES
// ============================================================

// GOTCHA 1: Destructuring null or undefined throws TypeError
// const { prop } = null; // TypeError: Cannot destructure property...

// Fix: use default for the whole object
function safeDestructure(obj = {}) {
  const { name = "Unknown" } = obj;
  return name;
}
console.log("\nSafe with null:", safeDestructure(null));      // "Unknown"
console.log("  Safe with undefined:", safeDestructure());     // "Unknown"
console.log("  Safe with object:", safeDestructure({ name: "Real" })); // "Real"

// GOTCHA 2: You cannot destructure primitive values (except string)
const str = "hello";
const { length } = str; // works because String wraps into object briefly
console.log("\nString length:", length); // 5

// GOTCHA 3: Default only works for undefined, not null
const nullish = { value: null };
const { value = "default" } = nullish;
console.log("  Null default:", value); // null (default NOT applied!)

// GOTCHA 4: Rest must be the LAST element
// const { a, ...rest, b } = obj; // SyntaxError!


// ============================================================
// 14. PRACTICAL PATTERNS
// ============================================================

// Pattern 1: Options object pattern (common in libraries)
function createButton({ label, onClick, disabled = false, style = {} }) {
  return {
    element: "button",
    label,
    onClick,
    disabled,
    style
  };
}
const btn = createButton({ label: "Save", onClick: () => {} });
console.log("\nOptions pattern:", btn);

// Pattern 2: Extract what you need, ignore the rest (efficient)
function handleApiResponse(response) {
  const { data, error } = response;
  if (error) return console.error(error);
  console.log("Success:", data);
}
handleApiResponse({ data: [1, 2, 3], error: null, headers: {}, status: 200 });

// Pattern 3: Rename to avoid conflicts in scope
const { name: themeName } = { name: "dark" };
const { name: fontName } = { name: "Arial" };
console.log("\nConflict avoidance:", themeName, fontName); // dark Arial


// ============================================================
// 15. SUMMARY CHEAT SHEET
// ============================================================

/*
  BASIC:
    const { a, b } = obj;

  RENAME:
    const { a: newA, b: newB } = obj;

  DEFAULT:
    const { a = 1, b = 2 } = obj;

  RENAME + DEFAULT:
    const { a: newA = 1 } = obj;

  NESTED:
    const { nested: { prop } } = obj;

  NESTED + DEFAULT:
    const { nested: { prop = "default" } = {} } = obj;

  REST:
    const { a, b, ...rest } = obj;

  FUNCTION PARAM:
    function fn({ a, b = 1 }) { }

  FOR...OF:
    for (const { a, b } of arr) { }

  COMPUTED KEY:
    const { [dynamicKey]: value } = obj;

  AFTER DECLARATION:
    let a, b;
    ({ a, b } = obj); // wrap in ()
*/

module.exports = { user, person, product, company, article, order, users, dynamicObj, fullPerson };
