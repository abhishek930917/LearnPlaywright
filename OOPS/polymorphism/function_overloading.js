// ============================================================================
// FUNCTION OVERLOADING (Ad-hoc Polymorphism)
// ============================================================================

/*
WHAT IS AD-HOC POLYMORPHISM?
----------------------------
Also called "function overloading" - the same function name behaves
differently based on the NUMBER or TYPE of arguments passed.

JAVA/C++ STYLE:
  void greet(String name) { ... }
  void greet(String name, int age) { ... }
  void greet(String firstName, String lastName) { ... }

JAVASCRIPT LIMITATION:
  JS does NOT natively support method overloading.
  If you define multiple functions with the same name, the last one wins.

JAVASCRIPT SOLUTION:
  Simulate overloading using:
  1. Default parameters
  2. Rest parameters (...args)
  3. Argument length checking
  4. Type checking inside the function
*/


// ----------------------------------------------------------------------------
// EXAMPLE 1: THE PROBLEM - JS DOESN'T SUPPORT NATIVE OVERLOADING
// ----------------------------------------------------------------------------

console.log("=== THE PROBLEM ===");

function greet(name) {
    console.log(`Hello, ${name}!`);
}

function greet(name, age) { // This REPLACES the previous greet()
    console.log(`Hello, ${name}! You are ${age} years old.`);
}

// Even calling with 1 argument uses the SECOND definition
greet("Alice");           // Hello, Alice! You are undefined years old.
greet("Bob", 25);         // Hello, Bob! You are 25 years old.

console.log("\nJavaScript does not support true overloading!");
console.log("The last defined function always wins.\n");


// ----------------------------------------------------------------------------
// EXAMPLE 2: SIMULATING OVERLOADING WITH DEFAULT PARAMETERS
// ----------------------------------------------------------------------------

console.log("=== SOLUTION 1: DEFAULT PARAMETERS ===");

function greetWithDefaults(name, age = null, greeting = "Hello") {
    if (age === null) {
        console.log(`${greeting}, ${name}!`);
    } else {
        console.log(`${greeting}, ${name}! You are ${age} years old.`);
    }
}

greetWithDefaults("Alice");                    // 1 argument
greetWithDefaults("Bob", 25);                  // 2 arguments
greetWithDefaults("Charlie", 30, "Good morning"); // 3 arguments
console.log("\n");


// ----------------------------------------------------------------------------
// EXAMPLE 3: SIMULATING OVERLOADING WITH REST PARAMETERS
// ----------------------------------------------------------------------------

console.log("=== SOLUTION 2: REST PARAMETERS (...args) ===");

function createUser(...args) {
    if (args.length === 1 && typeof args[0] === "object") {
        // createUser({ name: "Alice", age: 25 })
        const { name, age, email } = args[0];
        console.log(`[Object] Created user: ${name}, ${age}, ${email}`);
        return { name, age, email };
    } else if (args.length === 2) {
        // createUser("Alice", 25)
        const [name, age] = args;
        console.log(`[2 args] Created user: ${name}, ${age}`);
        return { name, age, email: null };
    } else if (args.length === 3) {
        // createUser("Alice", 25, "alice@example.com")
        const [name, age, email] = args;
        console.log(`[3 args] Created user: ${name}, ${age}, ${email}`);
        return { name, age, email };
    } else {
        console.log("Invalid arguments for createUser");
        return null;
    }
}

createUser("Alice", 25);                           // 2 arguments
createUser("Bob", 30, "bob@example.com");         // 3 arguments
createUser({ name: "Charlie", age: 28, email: "charlie@test.com" }); // 1 object argument
createUser();                                      // 0 arguments
console.log("\n");


// ----------------------------------------------------------------------------
// EXAMPLE 4: SIMULATING OVERLOADING WITH TYPE CHECKING
// ----------------------------------------------------------------------------

console.log("=== SOLUTION 3: TYPE CHECKING ===");

function process(value) {
    if (typeof value === "string") {
        console.log(`[String] Uppercase: ${value.toUpperCase()}`);
    } else if (typeof value === "number") {
        console.log(`[Number] Squared: ${value * value}`);
    } else if (Array.isArray(value)) {
        console.log(`[Array] Sum: ${value.reduce((a, b) => a + b, 0)}`);
    } else if (typeof value === "object" && value !== null) {
        console.log(`[Object] Keys: ${Object.keys(value).join(", ")}`);
    } else {
        console.log(`[Other] Value: ${value}`);
    }
}

process("hello");                  // String
process(5);                        // Number
process([1, 2, 3, 4]);            // Array
process({ a: 1, b: 2, c: 3 });    // Object
process(null);                     // Null
console.log("\n");


// ----------------------------------------------------------------------------
// EXAMPLE 5: PRACTICAL OVERLOADING - FORMATTER CLASS
// ----------------------------------------------------------------------------

console.log("=== PRACTICAL EXAMPLE: STRING FORMATTER ===");

class StringFormatter {
    format(input, ...options) {
        if (typeof input === "string" && options.length === 0) {
            // format("hello") -> just trim
            return input.trim();
        } else if (typeof input === "string" && typeof options[0] === "number") {
            // format("hello", 10) -> pad to length
            return input.padEnd(options[0], " ");
        } else if (typeof input === "string" && typeof options[0] === "string") {
            // format("hello", "upper") -> transform case
            switch (options[0]) {
                case "upper": return input.toUpperCase();
                case "lower": return input.toLowerCase();
                case "capitalize": return input.charAt(0).toUpperCase() + input.slice(1);
                default: return input;
            }
        } else if (Array.isArray(input)) {
            // format(["a", "b", "c"], ", ") -> join array
            const separator = options[0] || ", ";
            return input.join(separator);
        } else {
            return String(input);
        }
    }
}

const formatter = new StringFormatter();

console.log(formatter.format("  hello world  "));        // Trim
console.log(formatter.format("hi", 10));                 // Pad
console.log(formatter.format("hello", "upper"));         // Uppercase
console.log(formatter.format("hello", "capitalize"));    // Capitalize
console.log(formatter.format(["a", "b", "c"], " - "));   // Join array
console.log("\n");


// ----------------------------------------------------------------------------
// EXAMPLE 6: OVERLOADING WITH CONFIGURATION OBJECTS
// ----------------------------------------------------------------------------

console.log("=== CONFIGURATION OBJECT PATTERN ===");

// Instead of many parameters, use one options object
// This is the MOST COMMON pattern in JavaScript!

class HttpRequest {
    request(url, options = {}) {
        const config = {
            method: options.method || "GET",
            headers: options.headers || {},
            body: options.body || null,
            timeout: options.timeout || 5000,
            retries: options.retries || 0
        };

        console.log(`[HTTP ${config.method}] ${url}`);
        console.log(`  Headers: ${JSON.stringify(config.headers)}`);
        console.log(`  Body: ${config.body}`);
        console.log(`  Timeout: ${config.timeout}ms`);
        console.log(`  Retries: ${config.retries}`);
        return config;
    }

    // Convenience methods that delegate to request()
    get(url, options = {}) {
        return this.request(url, { ...options, method: "GET" });
    }

    post(url, body, options = {}) {
        return this.request(url, { ...options, method: "POST", body });
    }

    put(url, body, options = {}) {
        return this.request(url, { ...options, method: "PUT", body });
    }
}

const http = new HttpRequest();

http.get("/api/users");
console.log("---");
http.post("/api/users", JSON.stringify({ name: "Alice" }), { headers: { "Content-Type": "application/json" } });
console.log("---");
http.request("/api/data", { method: "DELETE", timeout: 10000 });
console.log("\n");


// ----------------------------------------------------------------------------
// EXAMPLE 7: AMBIGUOUS OVERLOADING (What NOT to do)
// ----------------------------------------------------------------------------

console.log("=== AMBIGUOUS OVERLOADING (Anti-pattern) ===");

function badOverload(a, b) {
    // Ambiguous: what if a is a number and b is a string?
    if (typeof a === "number") {
        console.log(`Number operation: ${a + (b || 0)}`);
    } else if (typeof a === "string") {
        console.log(`String operation: ${a + (b || "")}`);
    }
}

badOverload(5, 10);       // 15
badOverload("hello", " world"); // hello world
badOverload(5, "hello");  // Ambiguous! This is confusing.

console.log(`
WARNING: Overloading based on type can lead to confusing code.
Prefer:
  1. Different method names (calculateSum vs concatenate)
  2. Configuration objects
  3. Clear documentation
`);
console.log("\n");


// ============================================================================
// SUMMARY
// ============================================================================
console.log("=== FUNCTION OVERLOADING (Ad-hoc Polymorphism) SUMMARY ===");
console.log(`
DEFINITION:
  Same function name, different behavior based on arguments.

JAVASCRIPT REALITY:
  JS does NOT support native function overloading.
  The last function definition always wins.

SIMULATION TECHNIQUES:
  1. DEFAULT PARAMETERS:
     function greet(name, age = null) { ... }

  2. REST PARAMETERS (...args):
     function fn(...args) {
         if (args.length === 1) { ... }
         else if (args.length === 2) { ... }
     }

  3. TYPE CHECKING:
     function fn(value) {
         if (typeof value === "string") { ... }
         else if (typeof value === "number") { ... }
     }

  4. CONFIGURATION OBJECTS (Recommended):
     function fn(options) {
         const { name, age, email } = options;
     }

BEST PRACTICES:
  - Use configuration objects for complex functions
  - Use different method names instead of confusing type-based overloading
  - Document expected arguments clearly
  - Use defensive checks to avoid runtime errors
`);
