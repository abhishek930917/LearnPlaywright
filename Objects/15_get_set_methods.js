// ============================================================
// 15 - Getters & Setters (Accessor Properties)
// ============================================================

/*
  GETTERS and SETTERS are special methods that look like regular properties
  but execute code when you access (get) or assign (set) them.

  - GETTER: A function that runs automatically when you READ the property.
  - SETTER: A function that runs automatically when you WRITE to the property.

  They allow you to control HOW a property is accessed or modified,
  enabling validation, computed values, encapsulation, and side effects.

  Syntax in object literal:
    get propertyName() { ... }
    set propertyName(value) { ... }

  Syntax via Object.defineProperty:
    Object.defineProperty(obj, "prop", {
      get() { ... },
      set(v) { ... }
    });
*/


// ============================================================
// 1. BASIC GETTER (computed read-only property)
// ============================================================

const rectangle = {
  width: 10,
  height: 5,

  // Getter: computed on the fly when accessed
  get area() {
    console.log("  [area getter invoked]");
    return this.width * this.height;
  },

  // Another getter
  get perimeter() {
    return 2 * (this.width + this.height);
  }
};

console.log("=== 1. Basic Getters ===");
console.log("Width:", rectangle.width);   // 10 (regular property)
console.log("Area:", rectangle.area);     // 50 (getter runs!)
console.log("Area again:", rectangle.area); // 50 (getter runs again!)
console.log("Perimeter:", rectangle.perimeter); // 30

// It LOOKS like a property but behaves like a method behind the scenes
// Notice: NO parentheses when accessing a getter!


// ============================================================
// 2. BASIC SETTER (validation & side effects on assignment)
// ============================================================

const temperature = {
  _celsius: 25, // backing field (convention: underscore prefix for "private")

  get celsius() {
    return this._celsius;
  },

  // Setter: runs when you do temperature.celsius = value
  set celsius(value) {
    console.log("  [celsius setter invoked with", value, "]");
    if (typeof value !== "number") {
      throw new TypeError("Temperature must be a number");
    }
    if (value < -273.15) {
      throw new RangeError("Temperature below absolute zero is not possible");
    }
    this._celsius = value;
  }
};

console.log("\n=== 2. Basic Setter ===");
console.log("Initial:", temperature.celsius); // 25 (getter)

temperature.celsius = 100;                   // setter runs!
console.log("After set 100:", temperature.celsius); // 100

temperature.celsius = -50;                   // setter runs!
console.log("After set -50:", temperature.celsius);   // -50

// temperature.celsius = -300;  // RangeError!
// temperature.celsius = "hot"; // TypeError!


// ============================================================
// 3. CONVERTING UNITS WITH GETTER/SETTER
// ============================================================

const tempConverter = {
  _celsius: 0,

  get celsius() {
    return this._celsius;
  },
  set celsius(v) {
    this._celsius = v;
  },

  // Getter computes fahrenheit from celsius
  get fahrenheit() {
    return (this._celsius * 9) / 5 + 32;
  },
  // Setter converts fahrenheit input back to celsius
  set fahrenheit(v) {
    this._celsius = ((v - 32) * 5) / 9;
  },

  get kelvin() {
    return this._celsius + 273.15;
  },
  set kelvin(v) {
    this._celsius = v - 273.15;
  }
};

console.log("\n=== 3. Unit Conversion ===");
tempConverter.celsius = 100;
console.log("  100°C in F:", tempConverter.fahrenheit); // 212
console.log("  100°C in K:", tempConverter.kelvin);      // 373.15

tempConverter.fahrenheit = 32;
console.log("  32°F in C:", tempConverter.celsius);      // 0
console.log("  32°F in K:", tempConverter.kelvin);       // 273.15


// ============================================================
// 4. GETTER/SETTER VIA Object.defineProperty
// ============================================================

const circle = {};
let _radius = 5;

Object.defineProperty(circle, "radius", {
  get() {
    console.log("  [radius getter]");
    return _radius;
  },
  set(value) {
    console.log("  [radius setter]");
    if (value <= 0) throw new Error("Radius must be positive");
    _radius = value;
  },
  enumerable: true,
  configurable: true
});

// Read-only computed property via defineProperty
Object.defineProperty(circle, "area", {
  get() {
    return Math.PI * _radius * _radius;
  },
  enumerable: true,
  configurable: true
  // No setter = read-only!
});

console.log("\n=== 4. defineProperty Getters/Setters ===");
console.log("Radius:", circle.radius);
circle.radius = 10;
console.log("New radius:", circle.radius);
console.log("Area (read-only):", circle.area.toFixed(2)); // 314.16

// circle.area = 100; // TypeError in strict mode, silently fails otherwise


// ============================================================
// 5. ENCAPSULATION: HIDING INTERNAL STATE
// ============================================================

/*
  Getters/setters let you expose a clean public interface
  while keeping internal implementation details hidden.
*/

const bankAccount = {
  // "Private" backing field (not truly private, but convention)
  _balance: 0,
  _transactions: [],

  get balance() {
    // Return formatted or computed value
    return {
      amount: this._balance,
      currency: "USD",
      formatted: `$${this._balance.toFixed(2)}`
    };
  },

  set deposit(amount) {
    if (amount <= 0) throw new Error("Deposit must be positive");
    this._balance += amount;
    this._transactions.push({ type: "deposit", amount, date: new Date() });
  },

  set withdrawal(amount) {
    if (amount <= 0) throw new Error("Withdrawal must be positive");
    if (amount > this._balance) throw new Error("Insufficient funds");
    this._balance -= amount;
    this._transactions.push({ type: "withdrawal", amount, date: new Date() });
  },

  get transactionHistory() {
    // Return a copy to prevent external mutation
    return [...this._transactions];
  }
};

console.log("\n=== 5. Encapsulation ===");
bankAccount.deposit = 1000;
bankAccount.withdrawal = 250;
console.log("Balance:", bankAccount.balance);               // { amount: 750, ... }
console.log("History:", bankAccount.transactionHistory);    // array of 2 transactions
console.log("History length:", bankAccount.transactionHistory.length); // 2

// Try to mutate returned history (won't affect internal because we returned a copy)
bankAccount.transactionHistory.push("hacked");
console.log("History after outside push:", bankAccount.transactionHistory.length); // still 2


// ============================================================
// 6. GETTERS/SETTERS IN ES6 CLASSES
// ============================================================

class Person {
  // Private field (truly private in modern JS)
  #firstName;
  #lastName;
  #age;

  constructor(firstName, lastName, age) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
  }

  // Getter
  get fullName() {
    return `${this.#firstName} ${this.#lastName}`;
  }

  // Setter
  set fullName(value) {
    const parts = value.trim().split(/\s+/);
    if (parts.length < 2) {
      throw new Error("Full name must have at least two words");
    }
    this.#firstName = parts[0];
    this.#lastName = parts.slice(1).join(" ");
  }

  get age() {
    return this.#age;
  }

  set age(value) {
    if (typeof value !== "number" || value < 0 || value > 150) {
      throw new Error("Invalid age");
    }
    this.#age = value;
  }

  // Derived/computed getter
  get isAdult() {
    return this.#age >= 18;
  }

  get profileSummary() {
    return `${this.fullName}, ${this.#age} years old${this.isAdult ? " (adult)" : " (minor)"}`;
  }
}

console.log("\n=== 6. Class Getters/Setters ===");
const alice = new Person("Alice", "Smith", 30);
console.log("Full name:", alice.fullName);      // "Alice Smith"
console.log("Is adult?", alice.isAdult);        // true
console.log("Summary:", alice.profileSummary);  // "Alice Smith, 30 years old (adult)"

alice.fullName = "Alice Johnson";
console.log("Updated name:", alice.fullName);   // "Alice Johnson"

alice.age = 31;
console.log("New age:", alice.age);             // 31
// alice.age = -5; // Error: Invalid age

// Private fields are truly inaccessible from outside
// console.log(alice.#firstName); // SyntaxError: Private field must be declared


// ============================================================
// 7. LAZY INITIALIZATION WITH GETTER
// ============================================================

const appConfig = {
  _settings: null,

  get settings() {
    console.log("  [Lazy init triggered]");
    if (this._settings === null) {
      // Expensive computation or fetch happens only ONCE
      this._settings = {
        theme: "dark",
        language: "en",
        loadedAt: new Date()
      };
    }
    return this._settings;
  }
};

console.log("\n=== 7. Lazy Initialization ===");
console.log("First access:", appConfig.settings.loadedAt);
console.log("Second access:", appConfig.settings.loadedAt); // same object, no re-init


// ============================================================
// 8. OBSERVER / SIDE EFFECTS IN SETTER
// ============================================================

const state = {
  _value: 0,
  _listeners: [],

  get value() {
    return this._value;
  },

  set value(newValue) {
    const oldValue = this._value;
    this._value = newValue;
    // Notify all listeners
    this._listeners.forEach(cb => cb(newValue, oldValue));
  },

  subscribe(callback) {
    this._listeners.push(callback);
  }
};

console.log("\n=== 8. Observer Pattern with Setter ===");
state.subscribe((newVal, oldVal) => {
  console.log(`  Listener: changed from ${oldVal} to ${newVal}`);
});

state.value = 10; // triggers listener
state.value = 20; // triggers listener


// ============================================================
// 9. PROXY-LIKE BEHAVIOR (logging all access)
// ============================================================

const loggedObj = {
  _data: { x: 1, y: 2 },

  get x() {
    console.log(`  [GET x at ${new Date().toISOString()}]`);
    return this._data.x;
  },
  set x(value) {
    console.log(`  [SET x = ${value}]`);
    this._data.x = value;
  },

  get y() {
    return this._data.y;
  },
  set y(value) {
    this._data.y = value;
  }
};

console.log("\n=== 9. Logging Access ===");
console.log("Read x:", loggedObj.x);
loggedObj.x = 42;
console.log("Read x after set:", loggedObj.x);


// ============================================================
// 10. GETTER WITHOUT SETTER (Read-Only)
// ============================================================

const constants = {
  PI: 3.14159,
  E: 2.71828,

  // Computed read-only
  get TAU() {
    return this.PI * 2;
  }
};

// Using defineProperty to make truly read-only
Object.defineProperty(constants, "PI", {
  value: 3.14159,
  writable: false,
  enumerable: true,
  configurable: false
});

console.log("\n=== 10. Read-Only Properties ===");
console.log("TAU:", constants.TAU); // 6.28318
// constants.TAU = 10; // silently ignored or TypeError in strict


// ============================================================
// 11. SETTER WITHOUT GETTER (Write-Only)
// ============================================================

const secureLogger = {
  _logs: [],

  set log(message) {
    this._logs.push({
      message,
      timestamp: new Date().toISOString()
    });
  },

  // Only expose retrieval through a controlled method, not a getter
  getLogs() {
    return [...this._logs];
  }
};

console.log("\n=== 11. Write-Only Setter ===");
secureLogger.log = "User logged in";
secureLogger.log = "Data saved";
console.log("Logs:", secureLogger.getLogs());
// console.log(secureLogger.log); // undefined (no getter defined!)


// ============================================================
// 12. COMMON GOTCHAS
// ============================================================

console.log("\n=== 12. Gotchas ===");

// Gotcha 1: You must access getter without () — it is NOT a method call
const obj = {
  get value() { return 42; }
};
console.log("obj.value:", obj.value);   // 42
// console.log("obj.value():", obj.value()); // TypeError: obj.value is not a function

// Gotcha 2: Getters are re-evaluated every time they are accessed
const counter = {
  _count: 0,
  get count() {
    this._count++;
    return this._count;
  }
};
console.log("Counter:", counter.count); // 1
console.log("Counter:", counter.count); // 2 (increments again!)

// Gotcha 3: JSON.stringify ignores getters by default unless they are enumerable own props
const withGetter = {
  a: 1,
  get b() { return 2; }
};
console.log("JSON stringify:", JSON.stringify(withGetter)); // {"a":1} (b missing!)

// Fix: define getter with value caching or use Object.defineProperty with enumerable:true
// Note: JSON.stringify only serializes own enumerable properties, and getters defined
// in literals ARE enumerable, but the value from the getter is not "stored" as a data property.


// ============================================================
// 13. PERFORMANCE NOTE
// ============================================================

/*
  - Getters are computed EVERY time they are accessed.
    If the computation is expensive, consider caching the result.
  - Setters with heavy validation or side effects can slow down assignments.
  - For simple data storage, plain properties are faster than getters/setters.
  - Use them when you need CONTROL (validation, computation, encapsulation),
    not just for every property.
*/


// ============================================================
// 14. SUMMARY
// ============================================================

console.log(`\n=== SUMMARY ===
GETTER:
  - Syntax: get propName() { return ... }
  - Runs when you READ the property: obj.propName
  - Use for: computed values, lazy init, formatting, read-only access

SETTER:
  - Syntax: set propName(value) { ... }
  - Runs when you ASSIGN to the property: obj.propName = value
  - Use for: validation, side effects, transformation, encapsulation

KEY RULES:
  - Access WITHOUT parentheses: obj.prop (not obj.prop())
  - Can be defined in object literals or via Object.defineProperty
  - In classes, combine with #private fields for true encapsulation
  - Getters without setters = read-only
  - Setters without getters = write-only (access returns undefined)
  - Both getter and setter can exist on the same property

WHEN TO USE:
  - Validation (reject invalid values)
  - Computed properties (area from width/height)
  - Unit conversion (fahrenheit <-> celsius)
  - Encapsulation (hide internal state, expose clean API)
  - Side effects (logging, notifications, caching)
`);

module.exports = { rectangle, temperature, tempConverter, circle, bankAccount, Person, appConfig, state, loggedObj, constants, secureLogger, counter };
