// ============================================================
// PRIVATE FIELDS & METHODS (ES2022+)
// ============================================================
// Prefix fields/methods with `#` to make them truly private.
// They are only accessible within the class body.
// This is much cleaner than closure-based privacy.

export class BankAccount {
  // Private fields — must be declared at the class level
  #balance;
  #accountNumber;

  constructor(owner, initialBalance) {
    this.owner = owner;
    this.#balance = initialBalance;
    this.#accountNumber = this.#generateAccountNumber();
  }

  // Private method
  #generateAccountNumber() {
    return "ACC-" + Math.floor(Math.random() * 1000000);
  }

  // Public method to access private state
  deposit(amount) {
    if (amount <= 0) {
      console.log("Deposit amount must be positive.");
      return;
    }
    this.#balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("Insufficient funds.");
      return;
    }
    this.#balance -= amount;
    console.log(`Withdrew $${amount}. Remaining balance: $${this.#balance}`);
  }

  getBalance() {
    return this.#balance;
  }

  getAccountInfo() {
    return {
      owner: this.owner,
      accountNumber: this.#accountNumber,
      balance: this.#balance,
    };
  }
}

// Usage
const account = new BankAccount("Alice", 1000);
account.deposit(500);   // Deposited $500. New balance: $1500
account.withdraw(200);  // Withdrew $200. Remaining balance: $1300
console.log("Balance:", account.getBalance()); // 1300

// These will NOT work (private fields are inaccessible from outside):
// console.log(account.#balance);           // SyntaxError
// console.log(account.#generateAccountNumber()); // SyntaxError

// Subclasses cannot access parent private fields either:
export class PremiumAccount extends BankAccount {
  // Cannot access this.#balance or this.#accountNumber here
}
