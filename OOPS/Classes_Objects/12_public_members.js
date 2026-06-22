// ============================================================
// PUBLIC MEMBERS
// ============================================================
// By default, all properties and methods in JavaScript are PUBLIC.
// They can be accessed, modified, and called from anywhere.

export class BankAccountPublic {
  constructor(owner, balance) {
    this.owner = owner;   // public property
    this.balance = balance; // public property — anyone can change this!
  }

  // public method
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  // public method
  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
    }
  }

  getBalance() {
    return this.balance;
  }
}

// ------------------ The Problem with Everything Public ------------------
export function demonstratePublicProblem() {
  const account = new BankAccountPublic("Alice", 1000);

  console.log("Initial balance:", account.getBalance()); // 1000

  // Direct modification — NO PROTECTION!
  account.balance = -999999;
  console.log("After direct tampering:", account.getBalance()); // -999999

  // Even worse: can add arbitrary properties
  account.hacked = true;
  console.log("Hacked property added:", account.hacked); // true
}

// ------------------ When Public is Appropriate ------------------
export class Point {
  constructor(x, y) {
    this.x = x; // public — coordinates are meant to be freely accessible
    this.y = y;
  }

  distanceTo(other) {
    const dx = this.x - other.x;
    const dy = this.y - other.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

// Configuration objects are typically public
export class AppConfig {
  constructor(options) {
    this.theme = options.theme || "light";
    this.language = options.language || "en";
    this.debug = options.debug || false;
  }
}
