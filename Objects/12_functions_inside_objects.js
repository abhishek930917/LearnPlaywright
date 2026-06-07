// ============================================================
// 12 - Functions Inside Objects (Methods)
// ============================================================

/*
  When a function is stored as a property of an object, it is called a METHOD.
  Methods operate on the data (properties) of the object they belong to.
*/


// ============================================================
// 1. DEFINING METHODS (4 ways)
// ============================================================

const calculator = {
  value: 0,

  // Way 1: Function expression (classic)
  add1: function(a, b) {
    return a + b;
  },

  // Way 2: Method shorthand (ES6+ preferred)
  add2(a, b) {
    return a + b;
  },

  // Way 3: Arrow function (careful with 'this'!)
  add3: (a, b) => {
    return a + b;
  },

  // Way 4: External function assigned as property
};

function externalSubtract(a, b) {
  return a - b;
}
calculator.subtract = externalSubtract;

console.log("add1:", calculator.add1(2, 3));       // 5
console.log("add2:", calculator.add2(2, 3));       // 5
console.log("add3:", calculator.add3(2, 3));       // 5
console.log("subtract:", calculator.subtract(5, 2)); // 3


// ============================================================
// 2. THE 'this' KEYWORD
// ============================================================

/*
  'this' inside a method refers to the object that owns the method.
  It allows the method to access and modify other properties of the same object.
*/

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,

  // Regular function: 'this' refers to 'person'
  greet() {
    return `Hello, I'm ${this.firstName} ${this.lastName}, ${this.age} years old.`;
  },

  haveBirthday() {
    this.age++; // modifies the object's own property
    return `Happy birthday! Now I'm ${this.age}.`;
  }
};

console.log("\n--- 'this' Demo ---");
console.log(person.greet());         // "Hello, I'm John Doe, 30 years old."
console.log(person.haveBirthday());  // "Happy birthday! Now I'm 31."
console.log("Updated age:", person.age); // 31


// ============================================================
// 3. ARROW FUNCTIONS & 'this' (CRITICAL DIFFERENCE)
// ============================================================

/*
  Arrow functions do NOT have their own 'this'.
  They inherit 'this' from the surrounding (lexical) scope.
  If you use an arrow function as a method, 'this' will NOT point to the object!
*/

const car = {
  brand: "Toyota",
  model: "Corolla",

  // Regular function: 'this' works correctly
  getInfo() {
    return `${this.brand} ${this.model}`;
  },

  // Arrow function: 'this' does NOT point to 'car'!
  // It inherits 'this' from outside (here, the global/module scope where 'this' is not 'car')
  getInfoArrow: () => {
    // 'this' is NOT 'car' here — it's whatever 'this' was where the arrow was defined
    return `${this?.brand} ${this?.model}`; // undefined undefined
  }
};

console.log("\n--- Arrow vs Regular 'this' ---");
console.log("Regular:", car.getInfo());        // "Toyota Corolla"
console.log("Arrow:", car.getInfoArrow());    // "undefined undefined" (or empty in strict module)


// ============================================================
// 4. ARROW FUNCTIONS ARE USEFUL INSIDE METHODS
// ============================================================

/*
  While arrow functions are bad as direct methods,
  they are GREAT inside regular methods when passing callbacks,
  because they keep the outer 'this' context.
*/

const counter = {
  count: 0,

  // Regular method
  increment() {
    this.count++;
  },

  // Method that uses setTimeout with arrow function
  incrementAfterDelay(ms) {
    setTimeout(() => {
      // 'this' here refers to 'counter' because arrow inherits from incrementAfterDelay
      this.count++;
      console.log(`Count after delay: ${this.count}`);
    }, ms);
  },

  // If we used a regular function inside setTimeout, 'this' would be lost!
  brokenIncrementAfterDelay(ms) {
    setTimeout(function() {
      // 'this' here is global object (or undefined in strict), NOT 'counter'
      // this.count++; // NaN or TypeError!
    }, ms);
  }
};

counter.incrementAfterDelay(10);


// ============================================================
// 5. 'this' LOST WHEN METHOD IS EXTRACTED
// ============================================================

const dog = {
  name: "Buddy",
  speak() {
    return `${this.name} says woof!`;
  }
};

console.log("\n--- 'this' Lost Demo ---");
console.log(dog.speak()); // "Buddy says woof!"

// Extract the method into a variable
const speakFn = dog.speak;
console.log(speakFn());   // "undefined says woof!" (this is now global/undefined)

// Same issue when passing as callback
setTimeout(dog.speak, 20); // "undefined says woof!" after 20ms


// ============================================================
// 6. FIXING 'this' — 3 SOLUTIONS
// ============================================================

// Fix 1: Wrapper function (explicit call)
setTimeout(() => dog.speak(), 20);

// Fix 2: bind() — permanently binds 'this' to the object
const boundSpeak = dog.speak.bind(dog);
console.log("boundSpeak:", boundSpeak()); // "Buddy says woof!"

// Fix 3: call() and apply() — call with specific 'this'
const cat = { name: "Whiskers" };
console.log(dog.speak.call(cat));   // "Whiskers says woof!" (borrows the method)
console.log(dog.speak.apply(cat));  // same as call, but takes array of args


// ============================================================
// 7. GETTERS & SETTERS (special methods)
// ============================================================

const rectangle = {
  width: 10,
  height: 5,

  // Getter: looks like a property, behaves like a method
  get area() {
    return this.width * this.height;
  },

  // Setter: validates or computes on assignment
  set dimensions({ width, height }) {
    if (width <= 0 || height <= 0) {
      throw new Error("Dimensions must be positive");
    }
    this.width = width;
    this.height = height;
  }
};

console.log("\n--- Getters & Setters ---");
console.log("Area:", rectangle.area); // 50 (no parentheses!)
rectangle.dimensions = { width: 20, height: 10 };
console.log("New area:", rectangle.area); // 200
// rectangle.dimensions = { width: -5, height: 10 }; // Error


// ============================================================
// 8. METHODS WITH DEFAULT PARAMETERS & REST
// ============================================================

const mathUtils = {
  sum(start = 0, ...numbers) {
    return numbers.reduce((acc, n) => acc + n, start);
  },

  log(message, level = "INFO") {
    return `[${level}] ${message}`;
  }
};

console.log("\n--- Defaults & Rest ---");
console.log(mathUtils.sum(0, 1, 2, 3, 4)); // 10
console.log(mathUtils.sum(100, 5, 5));     // 110
console.log(mathUtils.log("Hello"));        // "[INFO] Hello"
console.log(mathUtils.log("Error!", "ERROR")); // "[ERROR] Error!"


// ============================================================
// 9. COMPUTED METHOD NAMES
// ============================================================

const action = "save";
const fileHandler = {
  fileName: "document.txt",

  [action]() {
    return `Saving ${this.fileName}...`;
  },

  [`${action}As`](newName) {
    this.fileName = newName;
    return `Saved as ${this.fileName}`;
  }
};

console.log("\n--- Computed Names ---");
console.log(fileHandler.save());           // "Saving document.txt..."
console.log(fileHandler.saveAs("backup.txt")); // "Saved as backup.txt"


// ============================================================
// 10. METHODS IN CLASSES
// ============================================================

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  // Instance method (on prototype)
  deposit(amount) {
    this.balance += amount;
    return this.balance;
  }

  // Static method (on class itself, not instances)
  static formatCurrency(amount) {
    return `$${amount.toFixed(2)}`;
  }

  // Getter method
  get summary() {
    return `${this.owner}'s balance: ${BankAccount.formatCurrency(this.balance)}`;
  }
}

const account = new BankAccount("Alice", 1000);
console.log("\n--- Class Methods ---");
console.log(account.deposit(500));    // 1500
console.log(account.summary);           // "Alice's balance: $1500.00"
console.log(BankAccount.formatCurrency(99.9)); // "$99.90"


// ============================================================
// 11. CHAINING METHODS (return this)
// ============================================================

const queryBuilder = {
  _table: "",
  _where: [],
  _limit: null,

  table(name) {
    this._table = name;
    return this; // <-- enables chaining
  },

  where(condition) {
    this._where.push(condition);
    return this;
  },

  limit(n) {
    this._limit = n;
    return this;
  },

  build() {
    let sql = `SELECT * FROM ${this._table}`;
    if (this._where.length) {
      sql += ` WHERE ${this._where.join(" AND ")}`;
    }
    if (this._limit) {
      sql += ` LIMIT ${this._limit}`;
    }
    return sql;
  }
};

console.log("\n--- Method Chaining ---");
const sql = queryBuilder
  .table("users")
  .where("active = 1")
  .where("role = 'admin'")
  .limit(10)
  .build();

console.log("SQL:", sql);
// SELECT * FROM users WHERE active = 1 AND role = 'admin' LIMIT 10


// ============================================================
// 12. METHODS AS CALLBACKS: PRESERVING CONTEXT
// ============================================================

const timer = {
  seconds: 0,

  tick() {
    this.seconds++;
    console.log(`Tick: ${this.seconds}s`);
  },

  start() {
    // WRONG: loses 'this'
    // setInterval(this.tick, 1000);

    // CORRECT: arrow preserves 'this'
    this._intervalId = setInterval(() => this.tick(), 1000);
  },

  stop() {
    clearInterval(this._intervalId);
    console.log("Stopped at:", this.seconds);
  }
};

console.log("\n--- Timer Demo ---");
timer.start();
setTimeout(() => timer.stop(), 2100); // runs ~2 ticks then stops


// ============================================================
// 13. BORROWING METHODS FROM OTHER OBJECTS
// ============================================================

const logger = {
  prefix: "APP",
  log(msg) {
    console.log(`[${this.prefix}] ${msg}`);
  }
};

const serverLogger = { prefix: "SERVER" };
const clientLogger = { prefix: "CLIENT" };

console.log("\n--- Method Borrowing ---");
logger.log.call(serverLogger, "Server started");   // [SERVER] Server started
logger.log.call(clientLogger, "Client connected");   // [CLIENT] Client connected

// Or permanently bind
const boundLog = logger.log.bind(serverLogger);
boundLog("Request received"); // [SERVER] Request received


// ============================================================
// 14. DESTRUCTURING METHODS (extracting while keeping this)
// ============================================================

const shop = {
  name: "TechStore",
  inventory: ["laptop", "mouse", "keyboard"],

  listItems() {
    return this.inventory.map(item => `${this.name}: ${item}`);
  }
};

// If we destructure the method, we lose 'this'
const { listItems } = shop;
// listItems(); // TypeError: Cannot read 'inventory' of undefined

// Fix with bind
const boundListItems = shop.listItems.bind(shop);
console.log("\n--- Destructured Method ---");
console.log(boundListItems()); // ["TechStore: laptop", ...]


// ============================================================
// 15. SUMMARY CHEAT SHEET
// ============================================================

/*
  DEFINING METHODS:
    object.methodName() { }              // ES6 shorthand (use this!)
    object.methodName: function() { }      // Old style
    object.methodName: () => { }           // Arrow (AVOID as direct method)
    object.methodName = externalFunction; // Assign existing function

  'this' RULES:
    - Regular function called as method: 'this' = the object
    - Arrow function: 'this' = outer scope (lexical)
    - Function extracted & called alone: 'this' = global/undefined (lost!)
    - bind/call/apply: manually set 'this'

  FIXING LOST 'this':
    () => obj.method()                     // wrapper arrow
    obj.method.bind(obj)                   // permanent bind
    obj.method.call(obj)                   // one-time call with context

  SPECIAL METHOD TYPES:
    get propName() { }                     // getter (access like property)
    set propName(v) { }                    // setter (assign like property)
    static methodName() { }                // class-level method

  METHOD CHAINING:
    return this;                           // at end of each method
*/

module.exports = { calculator, person, car, counter, dog, rectangle, mathUtils, fileHandler, BankAccount, queryBuilder, timer, logger, shop };
