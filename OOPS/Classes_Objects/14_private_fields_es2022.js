// ============================================================
// PRIVATE FIELDS & METHODS (ES2022+ # Syntax)
// ============================================================
// The `#` prefix creates truly private members.
// They are only accessible within the class body that declares them.

export class BankAccountPrivate {
  // Private fields MUST be declared at the top level of the class
  #balance;
  #accountNumber;
  #pin;

  // Public static field
  static bankName = "SecureBank";

  constructor(owner, initialBalance, pin) {
    this.owner = owner; // public
    this.#balance = initialBalance; // private
    this.#pin = pin; // private
    this.#accountNumber = this.#generateAccountNumber();
  }

  // Private method
  #generateAccountNumber() {
    return "ACC-" + Math.random().toString(36).slice(2, 10).toUpperCase();
  }

  // Private method for validation
  #validatePin(input) {
    return input === this.#pin;
  }

  // Public API
  deposit(amount) {
    if (amount <= 0) {
      console.log("Amount must be positive");
      return;
    }
    this.#balance += amount;
    this.#logTransaction("deposit", amount);
  }

  withdraw(amount, pin) {
    if (!this.#validatePin(pin)) {
      console.log("Invalid PIN");
      return;
    }
    if (amount > this.#balance) {
      console.log("Insufficient funds");
      return;
    }
    this.#balance -= amount;
    this.#logTransaction("withdraw", amount);
  }

  getBalance(pin) {
    if (!this.#validatePin(pin)) {
      console.log("Invalid PIN");
      return null;
    }
    return this.#balance;
  }

  getAccountNumber() {
    return this.#accountNumber;
  }

  // Private helper
  #logTransaction(type, amount) {
    console.log(`[${type}] $${amount} | Balance: $${this.#balance}`);
  }
}

// ------------------ Attempting to Access Private Members (Fails) ------------------
export function demonstratePrivacy() {
  const account = new BankAccountPrivate("Alice", 5000, "1234");

  console.log("Owner:", account.owner); // OK — public
  console.log("Account #:", account.getAccountNumber()); // OK — via public method

  // The following would cause SYNTAX ERRORS if uncommented:
  // console.log(account.#balance);      // SyntaxError: Private field must be declared
  // account.#balance = 999999;          // SyntaxError
  // account.#validatePin("1234");       // SyntaxError

  // Even reflection cannot access private fields directly:
  console.log("Has 'owner':", Object.hasOwn(account, "owner")); // true
  console.log("Keys:", Object.keys(account)); // ["owner"] — private fields hidden
}

// ------------------ Private Fields in Subclasses ------------------
export class PremiumAccount extends BankAccountPrivate {
  #rewardsPoints = 0;

  constructor(owner, balance, pin, tier) {
    super(owner, balance, pin);
    this.tier = tier; // public
  }

  deposit(amount) {
    super.deposit(amount);
    this.#rewardsPoints += Math.floor(amount / 100);
    console.log(`Rewards points: ${this.#rewardsPoints}`);
  }

  // Child CANNOT access parent private fields:
  // getBalanceDirectly() { return this.#balance; } // ERROR — #balance belongs to parent
}
