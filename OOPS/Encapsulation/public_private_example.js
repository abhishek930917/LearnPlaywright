// ============================================================================
// PUBLIC vs PRIVATE VARIABLES IN JAVASCRIPT
// ============================================================================

// ----------------------------------------------------------------------------
// 1. PUBLIC VARIABLES (Default in JS)
// ----------------------------------------------------------------------------
// Public variables can be accessed and modified from anywhere.

class BankAccountPublic {
    // Public fields - accessible from outside
    accountHolder = "";
    balance = 0;

    constructor(name, initialBalance) {
        this.accountHolder = name;
        this.balance = initialBalance;
    }

    showDetails() {
        console.log(`Account: ${this.accountHolder}, Balance: $${this.balance}`);
    }
}

console.log("=== PUBLIC VARIABLES EXAMPLE ===");
const publicAccount = new BankAccountPublic("Alice", 1000);
publicAccount.showDetails(); // Account: Alice, Balance: $1000

// Direct access from outside - DANGEROUS!
console.log("Direct access to public balance:", publicAccount.balance); // 1000
publicAccount.balance = -99999; // Anyone can set invalid values!
publicAccount.showDetails(); // Account: Alice, Balance: $-99999
console.log("\n");


// ----------------------------------------------------------------------------
// 2. PRIVATE VARIABLES using # (Modern ES2022+)
// ----------------------------------------------------------------------------
// True private fields - accessible ONLY inside the class.
// Use the # prefix.

class BankAccountPrivate {
    // Public fields
    accountHolder = "";
    
    // Private fields - CANNOT be accessed from outside
    #balance = 0;          // Private field
    #accountNumber = "";   // Private field

    constructor(name, initialBalance, accNumber) {
        this.accountHolder = name;
        this.#balance = initialBalance;
        this.#accountNumber = accNumber;
    }

    showDetails() {
        // Can access private fields inside the class
        console.log(`Account: ${this.accountHolder}`);
        console.log(`Balance: $${this.#balance}`);
        console.log(`Account Number: ${this.#accountNumber}`);
    }

    // Public method to access private data safely
    getBalance() {
        return this.#balance;
    }
}

console.log("=== PRIVATE VARIABLES EXAMPLE (# syntax) ===");
const privateAccount = new BankAccountPrivate("Bob", 5000, "ACC-12345");
privateAccount.showDetails();

// Accessing public field - WORKS
console.log("Public field:", privateAccount.accountHolder); // Bob

// Accessing private field from outside - ERROR!
// The following line would cause a SyntaxError if uncommented:
// console.log(privateAccount.#balance); // SyntaxError: Private field must be declared in an enclosing class
console.log("Note: Direct access to #balance from outside is blocked by JavaScript syntax rules.");

// Accessing via public method - CORRECT WAY
console.log("Balance via method:", privateAccount.getBalance()); // 5000
console.log("\n");


// ----------------------------------------------------------------------------
// 3. PRIVATE VARIABLES using Closures (Pre-ES6 / Functional approach)
// ----------------------------------------------------------------------------
// Variables inside a function scope are private.

function createSecureAccount(name, initialBalance) {
    // These variables are CLOSED OVER and are truly private
    let balance = initialBalance;  // PRIVATE
    let accountNumber = "ACC-" + Math.floor(Math.random() * 10000); // PRIVATE

    // Public methods returned as an object
    return {
        accountHolder: name,  // PUBLIC property

        showDetails() {
            console.log(`Account: ${name}, Balance: $${balance}, Number: ${accountNumber}`);
        },

        getBalance() {
            return balance;
        },

        deposit(amount) {
            if (amount > 0) {
                balance += amount;
                console.log(`Deposited $${amount}. New balance: $${balance}`);
            } else {
                console.log("Invalid deposit amount");
            }
        }
    };
}

console.log("=== PRIVATE VARIABLES EXAMPLE (Closures) ===");
const closureAccount = createSecureAccount("Charlie", 2000);
closureAccount.showDetails();

// Cannot access private variables directly
console.log("Trying to access closure balance directly:", closureAccount.balance); // undefined

// Access via public method
console.log("Balance via method:", closureAccount.getBalance()); // 2000
closureAccount.deposit(500);
console.log("\n");


// ----------------------------------------------------------------------------
// 4. CONVENTIONAL PRIVATE (Protected) using _ prefix
// ----------------------------------------------------------------------------
// JavaScript does NOT enforce this, but it's a convention.
// Developers understand that _variable should not be accessed directly.

class BankAccountProtected {
    _balance = 0; // Convention: treat as private, but technically public

    constructor(initialBalance) {
        this._balance = initialBalance;
    }

    getBalance() {
        return this._balance;
    }
}

console.log("=== PROTECTED VARIABLES EXAMPLE (_ convention) ===");
const protectedAccount = new BankAccountProtected(3000);
console.log("Balance via getter:", protectedAccount.getBalance()); // 3000

// Direct access is POSSIBLE but DISCOURAGED
console.log("Direct access (discouraged):", protectedAccount._balance); // 3000
console.log("\n");


// ============================================================================
// SUMMARY
// ============================================================================
console.log("=== SUMMARY ===");
console.log(`
PUBLIC VARIABLES:
  - Declared normally (this.name or name = "")
  - Accessible from anywhere
  - No protection, can be modified directly

PRIVATE VARIABLES (Modern # syntax):
  - Declared with # prefix (#balance)
  - Accessible ONLY inside the class
  - Truly enforced by JavaScript engine
  - Recommended for modern projects

PRIVATE VARIABLES (Closures):
  - Variables declared with let/const inside a function
  - Accessible only within that function scope
  - Works in all JavaScript versions

PROTECTED VARIABLES (_ convention):
  - Prefixed with underscore (_balance)
  - Still technically public
  - Developers agree not to access directly
  - Common in older libraries
`);
