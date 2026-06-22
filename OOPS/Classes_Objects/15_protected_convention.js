// ============================================================
// PROTECTED MEMBERS (Convention: _ Prefix)
// ============================================================
// JavaScript has NO built-in "protected" keyword.
// The underscore `_` prefix is a CONVENTION meaning:
// "This is internal — don't touch it from outside, but subclasses may use it."
// It is NOT enforced by the language.

export class Animal {
  constructor(name) {
    this.name = name;
    this._energy = 100; // "protected" by convention
  }

  // Public method
  move() {
    if (this._energy <= 0) {
      console.log(`${this.name} is too tired to move.`);
      return;
    }
    this._consumeEnergy(10);
    console.log(`${this.name} moved. Energy: ${this._energy}`);
  }

  // "Protected" method — intended for subclasses
  _consumeEnergy(amount) {
    this._energy -= amount;
  }

  // "Protected" method
  _replenishEnergy(amount) {
    this._energy = Math.min(100, this._energy + amount);
  }
}

export class Bird extends Animal {
  constructor(name) {
    super(name);
    this._canFly = true; // "protected" field
  }

  fly() {
    if (!this._canFly) {
      console.log(`${this.name} cannot fly.`);
      return;
    }
    if (this._energy < 20) {
      console.log(`${this.name} is too tired to fly.`);
      return;
    }
    this._consumeEnergy(20); // Accessing "protected" parent method
    console.log(`${this.name} flew! Energy: ${this._energy}`);
  }

  rest() {
    this._replenishEnergy(50); // Accessing "protected" parent method
    console.log(`${this.name} rested. Energy: ${this._energy}`);
  }
}

// ------------------ The Convention is NOT Enforced ------------------
export function demonstrateUnprotected() {
  const bird = new Bird("Eagle");
  bird.move(); // OK

  // Direct access to "protected" member — works but violates convention
  bird._energy = -9999; // Possible, but DON'T DO THIS
  console.log("Tampered energy:", bird._energy);

  bird._consumeEnergy(100); // Also possible from outside
}

// ------------------ Naming Convention for Private vs Protected ------------------
export class DatabaseModel {
  constructor() {
    this._isConnected = false; // protected: subclasses can check connection status
    this.__internalCache = {}; // double underscore: strongly internal (still public technically)
  }

  _validate() {
    // protected: meant to be overridden by subclasses
    return this._isConnected;
  }

  save() {
    if (!this._validate()) {
      throw new Error("Not connected");
    }
    console.log("Saved!");
  }
}

// Summary of conventions:
//   no prefix  = public
//   _prefix    = protected (internal/subclass use)
//   #prefix    = private (ES2022+, truly enforced)
//   __prefix   = strongly internal (convention only, can conflict with JS internals)
