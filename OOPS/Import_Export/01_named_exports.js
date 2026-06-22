// ============================================================
// NAMED EXPORTS
// ============================================================
// Use named exports when you want to export multiple values from a module.
// Consumers must import them using the same names (or aliases).

export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

// You can also export variables, classes, etc.
export class Calculator {
  constructor(value = 0) {
    this.value = value;
  }

  add(n) {
    this.value += n;
    return this;
  }

  result() {
    return this.value;
  }
}
