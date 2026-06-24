// ============================================================================
// GETTER AND SETTER METHODS IN JAVASCRIPT
// ============================================================================

/*
GETTER -> A method that gets the value of a property.
SETTER -> A method that sets the value of a property.

Why use them?
- Control access to private data
- Add validation logic before setting values
- Compute values on-the-fly
- Log or track access to properties
*/


// ----------------------------------------------------------------------------
// 1. GETTERS AND SETTERS USING METHODS (Traditional Approach)
// ----------------------------------------------------------------------------

class PersonMethods {
    #age = 0;        // Private field
    #name = "";      // Private field

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    // Getter method (manual)
    getName() {
        return this.#name;
    }

    // Setter method (manual) with validation
    setName(newName) {
        if (typeof newName === "string" && newName.length > 0) {
            this.#name = newName;
            console.log(`Name updated to: ${newName}`);
        } else {
            console.log("Invalid name! Name must be a non-empty string.");
        }
    }

    getAge() {
        return this.#age;
    }

    setAge(newAge) {
        if (typeof newAge === "number" && newAge > 0 && newAge < 150) {
            this.#age = newAge;
            console.log(`Age updated to: ${newAge}`);
        } else {
            console.log("Invalid age! Age must be a number between 1 and 150.");
        }
    }
}

console.log("=== GETTER/SETTER AS METHODS ===");
const person1 = new PersonMethods("John", 25);

// Getting values
console.log("Name:", person1.getName()); // John
console.log("Age:", person1.getAge());   // 25

// Setting values with validation
person1.setAge(30);     // Valid
person1.setAge(-5);     // Invalid - rejected!
person1.setName("Jane"); // Valid
person1.setName("");     // Invalid - rejected!
console.log("\n");


// ----------------------------------------------------------------------------
// 2. GETTERS AND SETTERS USING get / set KEYWORDS (Modern Approach)
// ----------------------------------------------------------------------------
// These look like properties but behave like methods.

class PersonModern {
    #age = 0;
    #name = "";
    #salary = 0;

    constructor(name, age, salary) {
        this.#name = name;
        this.#age = age;
        this.#salary = salary;
    }

    // get keyword - accessed like a property: person.name
    get name() {
        console.log("[Getter] Accessing name...");
        return this.#name;
    }

    // set keyword - assigned like a property: person.name = "New"
    set name(newName) {
        console.log("[Setter] Setting name...");
        if (typeof newName === "string" && newName.length > 0) {
            this.#name = newName;
        } else {
            console.log("Error: Invalid name");
        }
    }

    get age() {
        return this.#age;
    }

    set age(newAge) {
        if (typeof newAge === "number" && newAge > 0 && newAge < 150) {
            this.#age = newAge;
        } else {
            console.log("Error: Invalid age");
        }
    }

    get salary() {
        // Can add formatting or computation
        return `$${this.#salary.toLocaleString()}`;
    }

    set salary(newSalary) {
        if (newSalary >= 0) {
            this.#salary = newSalary;
        } else {
            console.log("Error: Salary cannot be negative");
        }
    }

    // Computed property using getter
    get isAdult() {
        return this.#age >= 18;
    }

    get info() {
        return `${this.#name} is ${this.#age} years old.`;
    }
}

console.log("=== GETTER/SETTER WITH get/set KEYWORDS ===");
const person2 = new PersonModern("Alice", 28, 50000);

// Using getters (looks like property access)
console.log("Name:", person2.name);    // Triggers get name()
console.log("Age:", person2.age);      // Triggers get age()
console.log("Salary:", person2.salary); // Triggers get salary() with formatting

// Using setters (looks like property assignment)
person2.name = "Alicia";   // Triggers set name()
person2.age = 29;          // Triggers set age()
person2.age = -10;         // Triggers validation error

// Computed properties
console.log("Is Adult:", person2.isAdult); // true
console.log("Info:", person2.info);        // Alicia is 29 years old.
console.log("\n");


// ----------------------------------------------------------------------------
// 3. PRACTICAL EXAMPLE: BANK ACCOUNT WITH FULL ENCAPSULATION
// ----------------------------------------------------------------------------

class SecureBankAccount {
    #accountHolder = "";
    #balance = 0;
    #pin = "";
    #transactionHistory = [];

    constructor(holder, initialDeposit, pin) {
        this.#accountHolder = holder;
        this.#balance = initialDeposit;
        this.#pin = pin;
        this.#logTransaction("Account opened", initialDeposit);
    }

    // Getter for account holder (read-only, no setter)
    get accountHolder() {
        return this.#accountHolder;
    }

    // Getter for balance (read-only, no direct setter)
    get balance() {
        return this.#balance;
    }

    // Getter for transaction history (returns copy to prevent modification)
    get transactionHistory() {
        return [...this.#transactionHistory];
    }

    // Setter not provided for #balance - must use deposit/withdraw methods
    // This ensures validation and logging!

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            this.#logTransaction("Deposit", amount);
            console.log(`✓ Deposited $${amount}. Balance: $${this.#balance}`);
        } else {
            console.log("✗ Deposit amount must be positive");
        }
    }

    withdraw(amount, enteredPin) {
        if (enteredPin !== this.#pin) {
            console.log("✗ Invalid PIN");
            return;
        }
        if (amount > this.#balance) {
            console.log("✗ Insufficient funds");
            return;
        }
        if (amount <= 0) {
            console.log("✗ Withdrawal amount must be positive");
            return;
        }
        this.#balance -= amount;
        this.#logTransaction("Withdrawal", -amount);
        console.log(`✓ Withdrew $${amount}. Balance: $${this.#balance}`);
    }

    #logTransaction(type, amount) {
        const entry = {
            date: new Date().toISOString(),
            type: type,
            amount: amount,
            balanceAfter: this.#balance
        };
        this.#transactionHistory.push(entry);
    }
}

console.log("=== PRACTICAL BANK ACCOUNT EXAMPLE ===");
const myAccount = new SecureBankAccount("David", 1000, "1234");

// Accessing via getters
console.log("Holder:", myAccount.accountHolder);
console.log("Balance:", myAccount.balance);
console.log("Transactions:", myAccount.transactionHistory.length, "entries");

// Trying to modify directly - won't work!
// myAccount.balance = 99999; // No setter defined, so this does nothing useful

// Performing operations
myAccount.deposit(500);
myAccount.withdraw(200, "1234");   // Correct PIN
myAccount.withdraw(200, "9999");   // Wrong PIN
myAccount.withdraw(5000, "1234");  // Insufficient funds

console.log("Final Balance:", myAccount.balance);
console.log("Transaction History:");
myAccount.transactionHistory.forEach((t, i) => {
    console.log(`  ${i + 1}. ${t.type}: $${t.amount} | Balance: $${t.balanceAfter}`);
});
console.log("\n");


// ----------------------------------------------------------------------------
// 4. GETTERS AND SETTERS WITH OBJECT LITERALS
// ----------------------------------------------------------------------------

const user = {
    _firstName: "John",
    _lastName: "Doe",

    // Getter
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    },

    // Setter
    set fullName(name) {
        const parts = name.split(" ");
        this._firstName = parts[0];
        this._lastName = parts[1] || "";
    }
};

console.log("=== OBJECT LITERAL GETTERS/SETTERS ===");
console.log("Full Name:", user.fullName); // John Doe
user.fullName = "Jane Smith";
console.log("Updated Name:", user.fullName); // Jane Smith
console.log("First Name:", user._firstName); // Jane
console.log("Last Name:", user._lastName);   // Smith
console.log("\n");


// ============================================================================
// SUMMARY
// ============================================================================
console.log("=== GETTER & SETTER SUMMARY ===");
console.log(`
TRADITIONAL METHODS:
  - getName(), setName(value)
  - Explicit method calls
  - Works in all JS versions

MODERN get/set KEYWORDS:
  - get name() { return ... }
  - set name(value) { ... }
  - Accessed like properties: obj.name, obj.name = value
  - Cleaner syntax, recommended for modern code

BENEFITS:
  1. Validation  -> Reject invalid values before setting
  2. Computation -> Derive values on-the-fly
  3. Logging     -> Track when properties are accessed/modified
  4. Security    -> Hide internal state, expose only what's needed
  5. Flexibility -> Change internal implementation without breaking external code
`);
