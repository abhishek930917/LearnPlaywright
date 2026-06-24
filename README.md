# LearnPlaywright

A hands-on learning repository for JavaScript fundamentals, modern ES6+ features, and Playwright automation testing. This project covers foundational JavaScript concepts and includes a dedicated Playwright test suite for hands-on browser automation.

---

## Table of Contents

- [About](#about)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Topics Covered](#topics-covered)
- [How to Run Examples](#how-to-run-examples)
- [Contributing](#contributing)

---

## About

This repository documents the journey of learning JavaScript from the ground up, progressing into Playwright automation testing. Each file in the JavaScript sections is a standalone, runnable example with explanations and comments. The `Playwright_Basics/` folder contains a working Playwright test project.

Whether you're reviewing core concepts or learning alongside, the code is written to be read, executed, and experimented with.

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- A code editor (e.g., [VS Code](https://code.visualstudio.com/))
- Basic familiarity with the command line / terminal

---

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/abhishek930917/LearnPlaywright.git
   cd LearnPlaywright
   ```

2. **Verify Node.js installation**

   ```bash
   node --version
   ```

3. **Run any example**

   ```bash
   node Basics/HelloWorld.js
   ```

---

## Project Structure

```
LearnPlaywright/
├── Basics/
│   ├── HelloWorld.js          # First program
│   ├── variables.js           # var, let, const
│   ├── literals.js            # JS literals overview
│   ├── let_hoisting.js        # Hoisting & scope
│   ├── leteral_num_all.js     # Number types & formats
│   ├── null_undefined.js      # null vs undefined deep dive
│   ├── string.js              # Strings, quotes, methods
│   └── template_literal.js    # Template literals & parameterization
├── Arrays/
│   ├── concat_array.js        # Array merging: concat(), spread, join()
│   ├── accessing_elements.js  # Index access, bracket notation
│   ├── add_remove_elements.js # push, pop, shift, unshift
│   ├── array_destructuring.js # Destructuring assignment
│   ├── array_length.js        # length property
│   ├── checking_and_converting.js # isArray, from, of
│   ├── creating_arrays.js     # Array literals, constructors
│   ├── every_and_some.js      # every(), some()
│   ├── finding_elements.js    # find, findIndex, includes
│   ├── iterate.js             # Iteration methods
│   ├── iterating_arrays.js    # for...of, entries, keys, values
│   ├── modifying_elements.js  # fill, copyWithin
│   ├── multidimensional_arrays.js # 2D arrays
│   ├── search.js              # indexOf, lastIndexOf
│   ├── slice_and_splice.js    # slice, splice
│   ├── sorting_arrays.js      # sort, reverse
│   ├── spread_rest_operators.js # ..., rest params
│   └── transforming_arrays.js # map, filter, reduce
├── Functions/
│   ├── arrow_functions.js     # Arrow functions (ES6+)
│   ├── function_declarations.js # Named functions, hoisting
│   ├── function_expressions.js # Anonymous & named expressions
│   └── iife_functions.js      # Immediately Invoked Function Expressions
├── Loops/
│   ├── for_loop.js            # For loop with real-world examples
│   ├── while_loop.js          # While loop with real-world examples
│   └── do_while_loop.js       # Do...while loop with real-world examples
├── Callback/
│   ├── callback.js            # Sync callbacks, array methods
│   ├── async_vs_sync.js       # Sync vs async execution order
│   ├── higher_order.js        # Higher-order functions & closures
│   ├── callback_hell.js       # Pyramid of doom & solutions
│   └── error_first.js         # Node.js error-first pattern
├── Promise/
│   ├── introduction.js        # Promise states, creation
│   ├── chaining.js            # .then(), .catch(), .finally()
│   ├── static_methods.js      # Promise.all, race, any, allSettled
│   ├── async_await.js         # Async/await syntax
│   ├── error_handling.js      # Error handling patterns
│   ├── promisification.js     # Callback -> Promise conversion
│   └── microtasks.js          # Event loop, microtask queue
├── Async_Await/
│   ├── introduction.js        # async/await basics, syntax, sequential
│   ├── error_handling.js      # try/catch, re-throw, .catch() vs await
│   ├── sequential_vs_parallel.js # Sequential vs parallel execution patterns
│   ├── real_world_patterns.js # Retry, timeout, debounce, memoization
│   ├── async_iteration.js   # for await...of, async generators, async map/filter/reduce
│   └── advanced_patterns.js # IIAFE, factory pattern, locks, AbortController
├── Objects/
│   └── (Object-oriented programming basics)
├── OOPS/
│   ├── Encapsulation/
│   │   ├── encapsulation_concepts.js
│   │   ├── public_private_example.js
│   │   ├── getter_setter_example.js
│   │   └── method_chaining_example.js
│   ├── Inheritance/
│   │   ├── single_inheritance.js
│   │   ├── multilevel_inheritance.js
│   │   ├── hierarchical_inheritance.js
│   │   └── other_inheritance.js
│   └── polymorphism/
│       ├── method_overriding.js
│       ├── duck_typing.js
│       ├── function_overloading.js
│       └── practical_example.js
├── Playwright_Basics/
│   ├── tests/
│   │   └── example.spec.ts    # Sample Playwright tests
│   ├── playwright.config.ts   # Playwright configuration
│   ├── package.json           # Playwright dependencies
│   └── package-lock.json
├── .vscode/
│   └── tasks.json             # VS Code task configurations
├── .gitignore                 # Git ignore rules
└── README.md                  # This file
```

---

## Playwright Setup

The `Playwright_Basics/` directory contains a standalone Playwright project. To get it running:

1. **Navigate to the Playwright project**

   ```bash
   cd Playwright_Basics
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Install Playwright browsers**

   ```bash
   npx playwright install
   ```

4. **Run the tests**

   ```bash
   npx playwright test
   ```

5. **Show the HTML report**

   ```bash
   npx playwright show-report
   ```

> **Note:** Since Playwright is installed locally in `Playwright_Basics`, always use `npx playwright` or run commands from within that directory.

---

## Topics Covered

| File | Topic | Highlights |
|------|-------|------------|
| `HelloWorld.js` | First Steps | `console.log`, running JS files |
| `variables.js` | Variable Declarations | `var`, `let`, `const`, global vs local |
| `literals.js` | JavaScript Literals | Overview of all literal types |
| `let_hoisting.js` | Hoisting & Scope | Temporal Dead Zone, function scope, block scope |
| `leteral_num_all.js` | Number Types | Integers, floats, hex, binary, octal, BigInt, `NaN`, `Infinity` |
| `null_undefined.js` | `null` vs `undefined` | Differences, `typeof`, JSON behavior, `??` operator |
| `string.js` | Strings | Single vs double quotes, backticks, immutability, methods |
| `template_literal.js` | Template Literals | `${interpolation}`, multi-line, tagged templates, raw strings |
| `concat_array.js` | Array Concatenation | `concat()`, spread operator `[...a, ...b]`, `join()` |
| `accessing_elements.js` | Accessing Elements | Index access, bracket notation, negative indexing |
| `add_remove_elements.js` | Adding/Removing | `push`, `pop`, `shift`, `unshift`, `splice` |
| `array_destructuring.js` | Destructuring | Extract values with pattern matching |
| `finding_elements.js` | Finding Elements | `find`, `findIndex`, `includes`, `indexOf` |
| `iterating_arrays.js` | Iteration | `for...of`, `entries()`, `keys()`, `values()` |
| `slice_and_splice.js` | Slice & Splice | Non-mutating vs mutating array methods |
| `sorting_arrays.js` | Sorting | `sort()`, `reverse()`, custom comparators |
| `transforming_arrays.js` | Transformation | `map`, `filter`, `reduce`, `flatMap` |
| `arrow_functions.js` | Arrow Functions | Concise syntax, lexical `this`, implicit return |
| `function_declarations.js` | Function Declarations | Named functions, hoisting, `this` binding |
| `function_expressions.js` | Function Expressions | Anonymous, named, callbacks, closures |
| `iife_functions.js` | IIFE | Immediately invoked, private scope, module pattern |
| `for_loop.js` | For Loop | Definite iteration, counter control, nested loops |
| `while_loop.js` | While Loop | Indefinite iteration, condition-checked before execution |
| `do_while_loop.js` | Do...While Loop | Executes at least once, condition-checked after execution |
| `callback.js` | Synchronous Callbacks | Passing functions as arguments, array methods |
| `async_vs_sync.js` | Sync vs Async | Blocking vs non-blocking, event loop basics |
| `higher_order.js` | Higher-Order Functions | Functions as args/return values, composition |
| `callback_hell.js` | Callback Hell | Nested callbacks, named functions as solution |
| `error_first.js` | Error-First Pattern | Node.js `callback(err, result)` convention |
| `introduction.js` | Promise Basics | Pending/fulfilled/rejected, executor function |
| `chaining.js` | Promise Chaining | `.then()` → `.then()` → `.catch()`, transforming values |
| `static_methods.js` | Promise Static Methods | `all`, `allSettled`, `race`, `any`, `resolve`, `reject` |
| `async_await.js` | Async/Await | `async` functions, `await`, try/catch, parallel |
| `error_handling.js` | Promise Error Handling | `.catch()` recovery, unhandled rejections |
| `promisification.js` | Promisification | Callback → Promise, `util.promisify` |
| `microtasks.js` | Microtasks & Event Loop | Microtask vs macrotask queue, execution order |
| `introduction.js` | Async/Await Basics | `async` functions, `await`, automatic Promise wrapping |
| `error_handling.js` | Async Error Handling | `try/catch`, re-throwing, missing `await` pitfalls |
| `sequential_vs_parallel.js` | Sequential vs Parallel | `Promise.all`, `allSettled`, concurrency limits |
| `real_world_patterns.js` | Async Patterns | Retry, timeout, debounce, memoization, waterfall |
| `async_iteration.js` | Async Iteration | `for await...of`, async generators, async map/filter/reduce |
| `advanced_patterns.js` | Advanced Async | IIAFE, factory pattern, locks, AbortController, async events |
| `encapsulation_concepts.js` | Encapsulation | Data hiding, public/private fields, getters/setters |
| `public_private_example.js` | Access Modifiers | Public, private (#), protected (_) variables in JS |
| `getter_setter_example.js` | Getters & Setters | `get`/`set` keywords, validation, computed properties |
| `method_chaining_example.js` | Method Chaining | `return this`, fluent APIs, builder pattern |
| `single_inheritance.js` | Single Inheritance | One child extends one parent, `super()`, overriding |
| `multilevel_inheritance.js` | Multi-Level Inheritance | Constructor chaining, prototype chain, `instanceof` |
| `hierarchical_inheritance.js` | Hierarchical Inheritance | Multiple children from one parent, polymorphic arrays |
| `other_inheritance.js` | Advanced Inheritance | Mixins, prototypal inheritance, composition vs inheritance |
| `method_overriding.js` | Runtime Polymorphism | Method overriding, `super`, Liskov Substitution Principle |
| `duck_typing.js` | Duck Typing | Structural polymorphism, behavior-based typing, iterables |
| `function_overloading.js` | Function Overloading | Default params, rest args, type checking, config objects |
| `practical_example.js` | Polymorphism in Practice | Payment system combining all polymorphism concepts |
| `example.spec.ts` | Playwright Testing | Page navigation, element interaction, assertions |

---

## How to Run Examples

### JavaScript Examples

All files in the `Basics/` and `Loops/` directories are self-contained Node.js scripts. Run them individually:

```bash
# Run Basics examples
node Basics/HelloWorld.js
node Basics/null_undefined.js
node Basics/template_literal.js

# Run Arrays examples
node Arrays/concat_array.js
node Arrays/slice_and_splice.js
node Arrays/transforming_arrays.js

# Run Functions examples
node Functions/arrow_functions.js
node Functions/function_declarations.js
node Functions/function_expressions.js
node Functions/iife_functions.js

# Run Loops examples
node Loops/for_loop.js
node Loops/while_loop.js
node Loops/do_while_loop.js

# Run Callback examples
node Callback/callback.js
node Callback/async_vs_sync.js
node Callback/callback_hell.js
node Callback/error_first.js
node Callback/higher_order.js

# Run Promise examples
node Promise/introduction.js
node Promise/chaining.js
node Promise/static_methods.js
node Promise/async_await.js
node Promise/error_handling.js
node Promise/promisification.js
node Promise/microtasks.js

# Run Async/Await examples
node Async_Await/introduction.js
node Async_Await/error_handling.js
node Async_Await/sequential_vs_parallel.js
node Async_Await/real_world_patterns.js
node Async_Await/async_iteration.js
node Async_Await/advanced_patterns.js

# Run OOPS - Encapsulation examples
node OOPS/Encapsulation/encapsulation_concepts.js
node OOPS/Encapsulation/public_private_example.js
node OOPS/Encapsulation/getter_setter_example.js
node OOPS/Encapsulation/method_chaining_example.js

# Run OOPS - Inheritance examples
node OOPS/Inheritance/single_inheritance.js
node OOPS/Inheritance/multilevel_inheritance.js
node OOPS/Inheritance/hierarchical_inheritance.js
node OOPS/Inheritance/other_inheritance.js

# Run OOPS - Polymorphism examples
node OOPS/polymorphism/method_overriding.js
node OOPS/polymorphism/duck_typing.js
node OOPS/polymorphism/function_overloading.js
node OOPS/polymorphism/practical_example.js

# Run all files in a folder in sequence (optional)
for file in Basics/*.js; do echo "--- Running $file ---"; node "$file"; done
for file in Arrays/*.js; do echo "--- Running $file ---"; node "$file"; done
for file in Functions/*.js; do echo "--- Running $file ---"; node "$file"; done
for file in Loops/*.js; do echo "--- Running $file ---"; node "$file"; done
for file in Callback/*.js; do echo "--- Running $file ---"; node "$file"; done
for file in Promise/*.js; do echo "--- Running $file ---"; node "$file"; done
for file in Async_Await/*.js; do echo "--- Running $file ---"; node "$file"; done
for file in OOPS/Encapsulation/*.js; do echo "--- Running $file ---"; node "$file"; done
for file in OOPS/Inheritance/*.js; do echo "--- Running $file ---"; node "$file"; done
for file in OOPS/polymorphism/*.js; do echo "--- Running $file ---"; node "$file"; done
```

### Playwright Examples

From the `Playwright_Basics/` directory:

```bash
# Run all Playwright tests
npx playwright test

# Run tests in headed mode (visible browser)
npx playwright test --headed

# Run tests in a specific browser
npx playwright test --project=chromium

# Run tests with the UI mode
npx playwright test --ui

# Show the HTML report
npx playwright show-report
```

> **Tip:** Open the file in your editor and read the inline comments alongside the output for the best learning experience.

---

## Contributing

This is a personal learning repository. Suggestions, corrections, and improvements are welcome via issues or pull requests.

---

## Author

**Abhishek** — [@abhishek930917](https://github.com/abhishek930917)

---

## License

This project is open source and available for educational use.
