// ============================================================
// THE `this` KEYWORD
// ============================================================
// `this` refers to the object that is executing the current function.
// Its value depends on HOW a function is called, not WHERE it's defined.

export class ThisDemo {
  constructor(name) {
    this.name = name;
  }

  // Regular function: `this` depends on the caller
  sayHello() {
    console.log(`Hello from ${this.name}`);
  }

  // Arrow function: `this` is lexically bound (inherits from surrounding scope)
  sayHelloArrow = () => {
    console.log(`Hello from ${this.name} (arrow)`);
  };
}

// ------------------ `this` in different contexts ------------------
export function demonstrateThis() {
  const user = new ThisDemo("Alice");

  console.log("--- Regular call ---");
  user.sayHello(); // Hello from Alice

  console.log("--- Detached method (loses `this`) ---");
  const detached = user.sayHello;
  // detached(); // Would throw or show undefined because `this` is not bound

  console.log("--- Arrow function preserves `this` ---");
  const detachedArrow = user.sayHelloArrow;
  detachedArrow(); // Hello from Alice (arrow) — works because arrow captures `this`

  console.log("--- Explicit binding with call/apply/bind ---");
  const anotherUser = { name: "Bob" };
  user.sayHello.call(anotherUser); // Hello from Bob
  user.sayHello.apply(anotherUser); // Hello from Bob

  const boundHello = user.sayHello.bind(anotherUser);
  boundHello(); // Hello from Bob
}

// ------------------ `this` in callbacks ------------------
export class Timer {
  constructor(name) {
    this.name = name;
    this.seconds = 0;
  }

  // BAD: regular function loses `this` in setInterval
  startBad() {
    setInterval(function () {
      // `this` here refers to global object or undefined in strict mode
      // this.seconds++; // ERROR or silent fail
    }, 1000);
  }

  // GOOD: arrow function preserves `this`
  startGood() {
    this.intervalId = setInterval(() => {
      this.seconds++;
      console.log(`${this.name}: ${this.seconds}s`);
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
  }
}

// ------------------ `this` in event handlers (browser concept) ------------------
export class Button {
  constructor(label) {
    this.label = label;
  }

  // If attached as onclick, `this` would be the DOM element
  onClick() {
    console.log(`Clicked: ${this.label}`);
  }

  // Arrow function fixes it
  onClickFixed = () => {
    console.log(`Clicked: ${this.label}`);
  };
}
