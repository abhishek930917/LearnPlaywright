// ============================================================
// ACCESS SPECIFIERS / ENCAPSULATION IN JAVASCRIPT
// ============================================================
// JavaScript traditionally had no built-in access specifiers like Java/C++.
// Modern JS (ES2022+) introduced true private members with `#`.
// Before that, developers used conventions and patterns.

// This file provides a quick overview. See other files for detailed patterns.

export class AccessOverview {
  // PUBLIC (default) — accessible everywhere
  publicField = "I am public";

  // PROTECTED (convention: _ prefix) — meant for internal/subclass use
  _protectedField = "I am conventionally protected";

  // PRIVATE (ES2022+ # syntax) — truly inaccessible from outside
  #privateField = "I am truly private";

  constructor(name) {
    this.name = name; // public property
  }

  // Public method
  publicMethod() {
    return `Public: ${this.name}`;
  }

  // Protected method (convention)
  _protectedMethod() {
    return `Protected: ${this._protectedField}`;
  }

  // Private method
  #privateMethod() {
    return `Private: ${this.#privateField}`;
  }

  // Public method that accesses private members
  revealSecret() {
    return this.#privateMethod();
  }
}
