// ============================================================================
// DUCK TYPING (Structural Polymorphism)
// ============================================================================

/*
WHAT IS DUCK TYPING?
--------------------
"If it looks like a duck, swims like a duck, and quacks like a duck,
then it probably is a duck."

In JavaScript, duck typing means we care about what an object CAN DO
(its methods/properties), not what it IS (its class/type).

Since JS is dynamically typed, any object with the right "shape" can be used
interchangeably — no inheritance or interfaces required!

DUCK TYPING vs CLASS INHERITANCE:
---------------------------------
- Inheritance: "is-a" relationship (Dog IS AN Animal)
- Duck Typing: "does-a" relationship (If it has quack(), it's duck-enough)
*/


// ----------------------------------------------------------------------------
// EXAMPLE 1: BASIC DUCK TYPING
// ----------------------------------------------------------------------------

// No common parent class! No inheritance! Just similar methods.

class Duck {
    constructor(name) {
        this.name = name;
    }

    quack() {
        console.log(`${this.name} quacks: Quack! Quack!`);
    }

    swim() {
        console.log(`${this.name} swims gracefully.`);
    }
}

class Person {
    constructor(name) {
        this.name = name;
    }

    quack() {
        console.log(`${this.name} imitates: Quack! Quack!`); // Person can quack too!
    }

    swim() {
        console.log(`${this.name} swims freestyle.`);
    }
}

class Robot {
    constructor(name) {
        this.name = name;
    }

    quack() {
        console.log(`${this.name} synthesizes: QUACK-QUACK-QUACK.`); // Robot can quack!
    }

    swim() {
        console.log(`${this.name} activates water propulsion.`);
    }
}

console.log("=== BASIC DUCK TYPING ===");

// This function accepts ANY object that can quack and swim
function makeItQuackAndSwim(thing) {
    // We don't care what 'thing' IS, only what it CAN DO
    thing.quack();
    thing.swim();
}

const duck = new Duck("Donald");
const person = new Person("Bob");
const robot = new Robot("RoboDuck");

makeItQuackAndSwim(duck);   // Works!
makeItQuackAndSwim(person); // Works! No inheritance needed!
makeItQuackAndSwim(robot);  // Works! Completely different class!
console.log("\n");


// ----------------------------------------------------------------------------
// EXAMPLE 2: DUCK TYPING WITH PLAIN OBJECTS
// ----------------------------------------------------------------------------
// You don't even need classes!

console.log("=== DUCK TYPING WITH PLAIN OBJECTS ===");

const toyDuck = {
    name: "Rubber Duck",
    quack() {
        console.log("Squeak! Squeak!");
    },
    swim() {
        console.log("Floats on water.");
    }
};

const fakeDuck = {
    name: "Cardboard Cutout",
    quack() {
        console.log("(Silence... it's just cardboard)");
    },
    swim() {
        console.log("(It sinks...)");
    }
};

makeItQuackAndSwim(toyDuck);  // Works with plain object!
makeItQuackAndSwim(fakeDuck); // Works with another plain object!
console.log("\n");


// ----------------------------------------------------------------------------
// EXAMPLE 3: DUCK TYPING IN REAL FUNCTIONS
// ----------------------------------------------------------------------------

console.log("=== DUCK TYPING IN REAL SCENARIOS ===");

// A function that needs something with a 'length' property
function printLength(item) {
    console.log(`Length of ${item.constructor.name || 'object'}: ${item.length}`);
}

printLength("Hello");           // String has length
printLength([1, 2, 3, 4, 5]);  // Array has length
printLength({ length: 10 });    // Plain object with length property!

console.log("---");

// A function that needs something 'iterable'
function printItems(iterable) {
    for (const item of iterable) {
        console.log(`  Item: ${item}`);
    }
}

printItems([10, 20, 30]);                    // Array
printItems(new Set(["a", "b", "c"]));        // Set
printItems("abc");                            // String
printItems(new Map([[1, "one"], [2, "two"]]).keys()); // Map keys

console.log("\n");


// ----------------------------------------------------------------------------
// EXAMPLE 4: DUCK TYPING vs INHERITANCE
// ----------------------------------------------------------------------------

console.log("=== DUCK TYPING vs INHERITANCE COMPARISON ===");

// INHERITANCE APPROACH
class FileLogger {
    constructor(filename) {
        this.filename = filename;
    }

    log(message) {
        console.log(`[File: ${this.filename}] ${message}`);
    }
}

class ConsoleLogger {
    log(message) {
        console.log(`[Console] ${message}`);
    }
}

class DatabaseLogger {
    constructor(table) {
        this.table = table;
    }

    log(message) {
        console.log(`[Database: ${this.table}] ${message}`);
    }
}

// DUCK TYPING APPROACH - No base class needed!
// ANY object with a log() method works

function runApplication(logger) {
    // We don't check: logger instanceof Logger
    // We just use it!
    logger.log("Application started");
    logger.log("Processing data...");
    logger.log("Application finished");
}

const fileLog = new FileLogger("app.log");
const consoleLog = new ConsoleLogger();
const dbLog = new DatabaseLogger("logs");

console.log("Using FileLogger:");
runApplication(fileLog);

console.log("Using ConsoleLogger:");
runApplication(consoleLog);

console.log("Using DatabaseLogger:");
runApplication(dbLog);

// Even a plain object works!
console.log("Using plain object:");
runApplication({
    log(msg) { console.log(`[Custom] ${msg}`); }
});
console.log("\n");


// ----------------------------------------------------------------------------
// EXAMPLE 5: SAFE DUCK TYPING (Defensive Programming)
// ----------------------------------------------------------------------------

console.log("=== SAFE DUCK TYPING ===");

function safeQuack(thing) {
    // Check if the method exists before calling
    if (typeof thing.quack === "function") {
        thing.quack();
    } else {
        console.log(`Sorry, ${thing.name || "this object"} cannot quack.`);
    }
}

safeQuack(new Duck("Daisy"));         // Works
safeQuack({ quack: () => console.log("Quack!") }); // Works
safeQuack({ name: "Rock" });           // Fails gracefully
safeQuack("hello");                    // Fails gracefully
console.log("\n");


// ----------------------------------------------------------------------------
// EXAMPLE 6: ITERABLE DUCK TYPING
// ----------------------------------------------------------------------------

console.log("=== ITERABLE DUCK TYPING ===");

// Anything with [Symbol.iterator] can be used with for...of
const array = [1, 2, 3];
const string = "abc";
const map = new Map([["a", 1], ["b", 2]]);
const set = new Set([10, 20, 30]);

function sumAll(iterable) {
    let sum = 0;
    for (const value of iterable) {
        if (typeof value === "number") {
            sum += value;
        }
    }
    return sum;
}

console.log("Sum of array:", sumAll(array));     // 6
console.log("Sum of set:", sumAll(set));         // 60

// Custom iterable object
const customIterable = {
    [Symbol.iterator]() {
        let count = 0;
        return {
            next() {
                count++;
                if (count <= 3) {
                    return { value: count * 10, done: false };
                }
                return { done: true };
            }
        };
    }
};

console.log("Sum of custom iterable:", sumAll(customIterable)); // 60
console.log("\n");


// ============================================================================
// SUMMARY
// ============================================================================
console.log("=== DUCK TYPING SUMMARY ===");
console.log(`
DEFINITION:
  An object's suitability is determined by the presence of certain methods
  and properties, rather than the type of the object itself.

PRINCIPLE:
  "If it walks like a duck and quacks like a duck, it's a duck."

IN JAVASCRIPT:
  - JS is dynamically typed, so duck typing is natural
  - No interfaces or abstract classes required
  - No inheritance needed
  - If an object has the required method/property, it just works

BENEFITS:
  - Extremely flexible
  - Loose coupling between components
  - Works with classes, plain objects, built-in types
  - Easy to mock for testing

CAUTION:
  - No compile-time type checking (runtime errors possible)
  - Use defensive checks: typeof obj.method === 'function'
  - Document expected interface/shape clearly

DUCK TYPING vs INHERITANCE:
  Inheritance: "Dog IS AN Animal" -> class-based, rigid hierarchy
  Duck Typing: "It HAS a bark() method" -> behavior-based, flexible
`);
