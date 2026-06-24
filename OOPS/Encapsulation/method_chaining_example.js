// ============================================================================
// METHOD CHAINING WITH 'this' KEYWORD IN JAVASCRIPT
// ============================================================================

/*
WHAT IS METHOD CHAINING?
------------------------
Method chaining is a technique where multiple methods are called on the same
object in a single continuous statement, one after another.

Instead of:
    obj.method1();
    obj.method2();
    obj.method3();

You write:
    obj.method1().method2().method3();

HOW DOES IT WORK?
-----------------
Each method returns `this` (the current object instance), so the next method
can be called on the returned object immediately.

THE ROLE OF 'this'
------------------
The `this` keyword refers to the current object instance. When a method returns
`this`, it returns the object itself, allowing another method to be called on it.
*/


// ============================================================================
// EXAMPLE 1: BASIC METHOD CHAINING
// ============================================================================

class Calculator {
    #value = 0;

    constructor(initialValue = 0) {
        this.#value = initialValue;
    }

    add(num) {
        this.#value += num;
        console.log(`Added ${num}: ${this.#value}`);
        return this; // <-- Return the object instance for chaining
    }

    subtract(num) {
        this.#value -= num;
        console.log(`Subtracted ${num}: ${this.#value}`);
        return this; // <-- Return this to enable chaining
    }

    multiply(num) {
        this.#value *= num;
        console.log(`Multiplied by ${num}: ${this.#value}`);
        return this; // <-- Return this to enable chaining
    }

    divide(num) {
        if (num !== 0) {
            this.#value /= num;
            console.log(`Divided by ${num}: ${this.#value}`);
        } else {
            console.log("Cannot divide by zero");
        }
        return this; // <-- Return this to enable chaining
    }

    // Getter to retrieve final value (no return this needed)
    get value() {
        return this.#value;
    }

    // Reset method also returns this
    reset() {
        this.#value = 0;
        console.log("Reset to 0");
        return this;
    }
}

console.log("=== BASIC METHOD CHAINING ===");
const calc = new Calculator();

// Without chaining - multiple lines
console.log("--- Without Chaining ---");
calc.add(10);
calc.multiply(2);
calc.subtract(5);
console.log("Final:", calc.value);

// With chaining - single line!
console.log("\n--- With Chaining ---");
const result = new Calculator()
    .add(10)
    .multiply(2)
    .subtract(5)
    .divide(3)
    .value; // Access getter at the end

console.log("Final result:", result);

// Chain with reset
console.log("\n--- Chain with Reset ---");
const result2 = new Calculator(100)
    .add(50)
    .subtract(30)
    .reset()
    .add(10)
    .value;
console.log("After reset chain:", result2);
console.log("\n");


// ============================================================================
// EXAMPLE 2: BUILDER PATTERN WITH METHOD CHAINING
// ============================================================================
// Commonly used to construct complex objects step by step

class QueryBuilder {
    #query = {
        select: [],
        from: "",
        where: [],
        orderBy: "",
        limit: null
    };

    select(columns) {
        this.#query.select = Array.isArray(columns) ? columns : [columns];
        return this;
    }

    from(table) {
        this.#query.from = table;
        return this;
    }

    where(condition) {
        this.#query.where.push(condition);
        return this;
    }

    orderBy(column, direction = "ASC") {
        this.#query.orderBy = `${column} ${direction}`;
        return this;
    }

    limit(count) {
        this.#query.limit = count;
        return this;
    }

    build() {
        let sql = "SELECT ";
        sql += this.#query.select.length ? this.#query.select.join(", ") : "*";
        sql += ` FROM ${this.#query.from}`;

        if (this.#query.where.length) {
            sql += ` WHERE ${this.#query.where.join(" AND ")}`;
        }

        if (this.#query.orderBy) {
            sql += ` ORDER BY ${this.#query.orderBy}`;
        }

        if (this.#query.limit) {
            sql += ` LIMIT ${this.#query.limit}`;
        }

        return sql;
    }
}

console.log("=== BUILDER PATTERN ===");
const sqlQuery = new QueryBuilder()
    .select(["name", "email", "age"])
    .from("users")
    .where("age > 18")
    .where("status = 'active'")
    .orderBy("created_at", "DESC")
    .limit(10)
    .build();

console.log("Generated SQL:");
console.log(sqlQuery);
console.log("\n");


// ============================================================================
// EXAMPLE 3: FLUENT API - USER PROFILE BUILDER
// ============================================================================

class UserProfile {
    #firstName = "";
    #lastName = "";
    #email = "";
    #age = 0;
    #preferences = {};

    setFirstName(name) {
        this.#firstName = name;
        return this;
    }

    setLastName(name) {
        this.#lastName = name;
        return this;
    }

    setEmail(email) {
        if (email.includes("@")) {
            this.#email = email;
        } else {
            console.log("Invalid email format");
        }
        return this;
    }

    setAge(age) {
        if (age >= 0 && age <= 150) {
            this.#age = age;
        }
        return this;
    }

    setPreference(key, value) {
        this.#preferences[key] = value;
        return this;
    }

    build() {
        return {
            fullName: `${this.#firstName} ${this.#lastName}`,
            email: this.#email,
            age: this.#age,
            preferences: this.#preferences
        };
    }
}

console.log("=== FLUENT API - USER PROFILE ===");
const user = new UserProfile()
    .setFirstName("John")
    .setLastName("Doe")
    .setEmail("john.doe@example.com")
    .setAge(28)
    .setPreference("theme", "dark")
    .setPreference("language", "en")
    .build();

console.log("Created User:", user);
console.log("\n");


// ============================================================================
// EXAMPLE 4: WHAT HAPPENS IF YOU DON'T RETURN 'this'
// ============================================================================

class BrokenChain {
    #name = "";

    setName(name) {
        this.#name = name;
        // Oops! Not returning 'this'
        console.log(`Name set to: ${name}`);
    }

    greet() {
        console.log(`Hello, ${this.#name}!`);
        return this;
    }
}

console.log("=== BROKEN CHAIN (Missing return this) ===");
const broken = new BrokenChain();

// This will cause an error!
try {
    broken.setName("Alice").greet(); // Error: Cannot read property 'greet' of undefined
} catch (e) {
    console.log("Error:", e.message);
    console.log("Reason: setName() returned 'undefined', not 'this'");
}

// Must call separately when not returning this
broken.setName("Alice");
broken.greet();
console.log("\n");


// ============================================================================
// EXAMPLE 5: jQuery-STYLE CHAINING
// ============================================================================

class DOMElement {
    #element = { tag: "div", styles: {}, text: "", children: [] };

    constructor(tag = "div") {
        this.#element.tag = tag;
    }

    addClass(className) {
        console.log(`[DOM] Added class: ${className}`);
        return this;
    }

    setStyle(property, value) {
        this.#element.styles[property] = value;
        console.log(`[DOM] Set ${property}: ${value}`);
        return this;
    }

    setText(content) {
        this.#element.text = content;
        console.log(`[DOM] Set text: ${content}`);
        return this;
    }

    append(child) {
        this.#element.children.push(child);
        console.log(`[DOM] Appended child element`);
        return this;
    }

    on(event, handler) {
        console.log(`[DOM] Added ${event} event listener`);
        return this;
    }

    render() {
        return `<${this.#element.tag}>${this.#element.text}</${this.#element.tag}>`;
    }
}

console.log("=== jQuery-STYLE CHAINING ===");
const button = new DOMElement("button")
    .addClass("btn-primary")
    .setStyle("color", "white")
    .setStyle("background", "blue")
    .setText("Click Me")
    .on("click", () => console.log("Clicked!"));

console.log("Rendered:", button.render());
console.log("\n");


// ============================================================================
// EXAMPLE 6: ARROW FUNCTIONS AND 'this' (IMPORTANT!)
// ============================================================================
// Arrow functions do NOT have their own `this`. They inherit `this` from 
// the surrounding scope. This can break method chaining if not handled properly.

class Timer {
    #seconds = 0;
    #running = false;

    start() {
        this.#running = true;
        console.log("Timer started");

        // BAD: Arrow function inherits `this` from outer scope
        // But in this case it works because the arrow function is inside
        // a regular method where `this` refers to the Timer instance
        setInterval(() => {
            if (this.#running) {
                this.#seconds++;
            }
        }, 1000);

        return this;
    }

    stop() {
        this.#running = false;
        console.log("Timer stopped");
        return this;
    }

    reset() {
        this.#seconds = 0;
        console.log("Timer reset");
        return this;
    }

    log() {
        console.log(`Current time: ${this.#seconds}s`);
        return this;
    }
}

console.log("=== TIMER WITH ARROW FUNCTIONS ===");
const timer = new Timer();
timer.start().log();

// Arrow functions are safe here because they inherit `this` from the method
// But be careful when using them as object methods directly!
console.log("\n");


// ============================================================================
// EXAMPLE 7: ASYNC METHODS AND CHAINING
// ============================================================================
// For async operations, return Promises and chain with .then()

class AsyncProcessor {
    #data = [];

    async fetchData(url) {
        console.log(`[Async] Fetching from ${url}...`);
        // Simulating API call
        await new Promise(resolve => setTimeout(resolve, 100));
        this.#data = [{ id: 1, name: "Item 1" }, { id: 2, name: "Item 2" }];
        console.log("[Async] Data fetched");
        return this; // Return this even in async methods
    }

    filter(criteria) {
        this.#data = this.#data.filter(criteria);
        console.log("[Async] Data filtered");
        return this;
    }

    transform(mapper) {
        this.#data = this.#data.map(mapper);
        console.log("[Async] Data transformed");
        return this;
    }

    getData() {
        return this.#data;
    }
}

console.log("=== ASYNC METHOD CHAINING ===");
const processor = new AsyncProcessor();

// Must use await or .then() with async methods
(async () => {
    const result = await processor
        .fetchData("/api/items")
        .then(p => p.filter(item => item.id > 0))
        .then(p => p.transform(item => ({ ...item, upperName: item.name.toUpperCase() })))
        .then(p => p.getData());

    console.log("Final async result:", result);
    console.log("\n");

    // ============================================================================
    // SUMMARY
    // ============================================================================
    console.log("=== METHOD CHAINING SUMMARY ===");
    console.log(`
HOW METHOD CHAINING WORKS:
--------------------------
1. Each method returns 'this' (the current object instance)
2. The next method is called on the returned object
3. Creates a fluent, readable interface

RULES FOR METHOD CHAINING:
--------------------------
1. Always 'return this;' at the end of chainable methods
2. The last method in the chain may return a value instead of 'this'
3. Use getters at the end to retrieve final values
4. Be careful with arrow functions - they don't bind their own 'this'

BENEFITS:
---------
- Cleaner, more readable code
- Reduced repetition (no need to repeat object name)
- Fluent API design
- Natural language-like code flow

COMMON USE CASES:
-----------------
- Query Builders (SQL, MongoDB)
- Configuration/Option setters
- Mathematical operations
- DOM manipulation (jQuery style)
- String manipulation
    `);
})();
