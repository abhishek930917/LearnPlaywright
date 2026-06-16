// ========================================
// Higher-Order Functions & Callbacks
// ========================================

// A higher-order function is a function that:
// - Takes one or more functions as arguments, OR
// - Returns a function as its result

// 1. Function accepting a callback
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, console.log);
repeat(3, (i) => console.log(`Index: ${i}`));

// 2. Function returning a function (closure + callback)
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log(double(5));
console.log(triple(5));

// 3. Function both takes and returns a callback (compose)
function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}

const add1 = (x) => x + 1;
const square = (x) => x * x;

const add1ThenSquare = compose(square, add1);
console.log(add1ThenSquare(3));

// 4. Event listeners (browser-like simulation)
function addEventListener(event, handler) {
  console.log(`Registered handler for ${event}`);
  // Simulate event firing
  setTimeout(() => {
    console.log(`Event "${event}" fired`);
    handler({ type: event, target: "button" });
  }, 100);
}

addEventListener("click", (e) => {
  console.log("Clicked!", e.type, e.target);
});
