// ============================================================
// PRIVATE MEMBERS WITH CLOSURES (Pre-ES2022 Pattern)
// ============================================================
// Before `#private` syntax, closures were the only way to achieve true privacy.
// Variables declared in the constructor scope are inaccessible from outside.

export function createPrivateAccount(owner, initialBalance) {
  // These variables are CLOSED OVER by the returned object.
  // They cannot be accessed from outside this function.
  let balance = initialBalance;
  const transactionHistory = [];

  function logTransaction(type, amount) {
    transactionHistory.push({ type, amount, date: new Date() });
  }

  // Return an object with public methods that close over private variables
  return {
    owner,

    deposit(amount) {
      if (amount <= 0) {
        console.log("Deposit must be positive");
        return;
      }
      balance += amount;
      logTransaction("deposit", amount);
      console.log(`Deposited $${amount}. Balance: $${balance}`);
    },

    withdraw(amount) {
      if (amount > balance) {
        console.log("Insufficient funds");
        return;
      }
      balance -= amount;
      logTransaction("withdraw", amount);
      console.log(`Withdrew $${amount}. Balance: $${balance}`);
    },

    getBalance() {
      return balance;
    },

    getHistory() {
      // Return a copy to prevent external mutation
      return [...transactionHistory];
    },
  };
}

// ------------------ Closure Privacy in a Class Constructor ------------------
export class SecureCounter {
  constructor() {
    // Private via closure
    let count = 0;

    this.increment = function () {
      count++;
      return count;
    };

    this.decrement = function () {
      count--;
      return count;
    };

    this.getCount = function () {
      return count;
    };
  }
}

// ------------------ WeakMap Privacy Pattern ------------------
// WeakMaps allow private data associated with objects without closure overhead per method.
const _private = new WeakMap();

export class UserWithWeakMap {
  constructor(name, password) {
    // Public
    this.name = name;

    // Private data stored in WeakMap
    _private.set(this, {
      password,
      lastLogin: new Date(),
    });
  }

  authenticate(input) {
    const data = _private.get(this);
    return input === data.password;
  }

  getLastLogin() {
    return _private.get(this).lastLogin;
  }
}

// WeakMap advantages:
// 1. Keys are garbage-collected when the object is no longer referenced
// 2. Data is truly private (not enumerable, not accessible externally)
// 3. Methods are shared on the prototype (unlike closure-per-instance)
