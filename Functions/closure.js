// ============================================================================
// CLOSURES - Function Inside Function
// ============================================================================

// A closure is a function that has access to its own scope, the outer function's
// scope, and the global scope, even after the outer function has returned.

// In JavaScript, functions form closures. When you define a function inside
// another function, the inner function "remembers" the environment in which
// it was created.

// ----------------------------------------------------------------------------
// 1. BASIC EXAMPLE: Function inside Function
// ----------------------------------------------------------------------------

function outerFunction() {
  const outerVariable = "I am from outer function";

  function innerFunction() {
    console.log(outerVariable); // inner function can access outer variable
  }

  innerFunction(); // call the inner function
}

outerFunction(); // Output: I am from outer function

// ----------------------------------------------------------------------------
// 2. CLOSURE: Inner function returned and called later
// ----------------------------------------------------------------------------
// The inner function "remembers" the variables from its outer scope even after
// the outer function has finished executing.

function makeCounter() {
  let count = 0; // this variable is "closed over"

  function increment() {
    count = count + 1;
    return count;
  }

  return increment; // return the inner function
}

const counter1 = makeCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3

// Each call creates a new independent closure
const counter2 = makeCounter();
console.log(counter2()); // 1 (separate count variable)

// ----------------------------------------------------------------------------
// 3. CLOSURE WITH MULTIPLE INNER FUNCTIONS
// ----------------------------------------------------------------------------

function createBankAccount(initialBalance) {
  let balance = initialBalance; // private variable

  function deposit(amount) {
    balance += amount;
    return balance;
  }

  function withdraw(amount) {
    if (amount > balance) {
      console.log("Insufficient funds");
      return balance;
    }
    balance -= amount;
    return balance;
  }

  function getBalance() {
    return balance;
  }

  // Return an object with methods (closures)
  return {
    deposit: deposit,
    withdraw: withdraw,
    getBalance: getBalance,
  };
}

const myAccount = createBankAccount(1000);
console.log(myAccount.getBalance()); // 1000
myAccount.deposit(500);
console.log(myAccount.getBalance()); // 1500
myAccount.withdraw(200);
console.log(myAccount.getBalance()); // 1300
// console.log(myAccount.balance); // undefined - balance is private!

// ----------------------------------------------------------------------------
// 4. FUNCTION FACTORY (Function that creates customized functions)
// ----------------------------------------------------------------------------

function makeMultiplier(multiplier) {
  // `multiplier` is captured in the closure
  return function (number) {
    return number * multiplier;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);
const quadruple = makeMultiplier(4);

console.log(double(5));     // 10
console.log(triple(5));     // 15
console.log(quadruple(5));  // 20

// Each function "remembers" its own multiplier value

// ----------------------------------------------------------------------------
// 5. CLOSURES IN CALLBACKS
// ----------------------------------------------------------------------------

function delayMessage(message, delay) {
  const timestamp = new Date().toLocaleTimeString();

  setTimeout(function () {
    // This inner function is a closure - it remembers `message` and `timestamp`
    console.log("[" + timestamp + "] Delayed message: " + message);
  }, delay);
}

delayMessage("Hello after 1 second", 1000);

// ----------------------------------------------------------------------------
// 6. CLOSURES AND LOOPS (Common Pitfall)
// ----------------------------------------------------------------------------

// WITHOUT closure (using var - problematic)
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log("Without closure (var): " + i); // prints 4, 4, 4
  }, 100);
}

// WITH closure (IIFE to create new scope)
for (var i = 1; i <= 3; i++) {
  (function (capturedI) {
    setTimeout(function () {
      console.log("With IIFE closure: " + capturedI); // prints 1, 2, 3
    }, 100);
  })(i);
}

// MODERN FIX (using let - block scoped)
for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log("With let (block scope): " + i); // prints 1, 2, 3
  }, 100);
}

// ----------------------------------------------------------------------------
// 7. ARROW FUNCTION CLOSURES
// ----------------------------------------------------------------------------

function createGreeter(greeting) {
  return (name) => {
    return greeting + ", " + name + "!";
  };
}

const sayHello = createGreeter("Hello");
const sayGoodbye = createGreeter("Goodbye");

console.log(sayHello("Alice"));   // Hello, Alice!
console.log(sayGoodbye("Bob")); // Goodbye, Bob!

// ----------------------------------------------------------------------------
// 8. PRACTICAL USE CASE: CONFIGURABLE LOGGING
// ----------------------------------------------------------------------------

function createLogger(prefix) {
  return function (message) {
    console.log("[" + prefix + "] " + message);
  };
}

const infoLogger = createLogger("INFO");
const errorLogger = createLogger("ERROR");

infoLogger("Application started");  // [INFO] Application started
errorLogger("Something went wrong"); // [ERROR] Something went wrong

// ============================================================================
// SUMMARY
// ============================================================================
// 1. Closure = inner function + outer function's variables
// 2. Inner function "remembers" the scope where it was created
// 3. Outer function variables remain alive as long as the inner function exists
// 4. Enables data privacy, function factories, and stateful functions
// 5. Beware of loops with var - use let or IIFE to capture current value
// ============================================================================
