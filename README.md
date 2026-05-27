# LearnPlaywright

A hands-on learning repository for JavaScript fundamentals, modern ES6+ features, and Playwright automation testing. This project is designed to build strong foundational knowledge before diving into browser automation.

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

This repository documents the journey of learning JavaScript from the ground up, progressing toward Playwright automation testing. Each file in the `Basics/` folder is a standalone, runnable example with explanations and comments.

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
├── .vscode/
│   └── tasks.json             # VS Code task configurations
├── .gitignore                 # Git ignore rules
└── README.md                  # This file
```

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

---

## How to Run Examples

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

# Run all files in a folder in sequence (optional)
for file in Basics/*.js; do echo "--- Running $file ---"; node "$file"; done
for file in Arrays/*.js; do echo "--- Running $file ---"; node "$file"; done
for file in Functions/*.js; do echo "--- Running $file ---"; node "$file"; done
for file in Loops/*.js; do echo "--- Running $file ---"; node "$file"; done
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
