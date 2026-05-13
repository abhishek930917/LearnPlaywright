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

---

## How to Run Examples

All files in the `Basics/` directory are self-contained Node.js scripts. Run them individually:

```bash
# Run a specific file
node Basics/HelloWorld.js
node Basics/null_undefined.js
node Basics/template_literal.js

# Run all files in sequence (optional)
for file in Basics/*.js; do echo "--- Running $file ---"; node "$file"; done
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
