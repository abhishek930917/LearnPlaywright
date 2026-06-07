// ============================================================
// 05 - ES6 Classes (Syntactic Sugar over Prototypes)
// ============================================================

// 1. BASIC CLASS DECLARATION
class Person {
  // Constructor runs when 'new' is called
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Instance method (automatically added to prototype)
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Static method (belongs to class, not instances)
  static isHuman(obj) {
    return obj instanceof Person;
  }
}

const alice = new Person("Alice", "Smith");
console.log(alice.getFullName()); // "Alice Smith"
console.log(Person.isHuman(alice)); // true

// 2. CLASS INHERITANCE WITH 'extends'
class Employee extends Person {
  constructor(firstName, lastName, jobTitle, salary) {
    // MUST call super() before using 'this'
    super(firstName, lastName);
    this.jobTitle = jobTitle;
    this.salary = salary;
  }

  // Override parent method
  getFullName() {
    return `${super.getFullName()} (${this.jobTitle})`;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }
}

const bob = new Employee("Bob", "Johnson", "Developer", 5000);
console.log(bob.getFullName());    // "Bob Johnson (Developer)"
console.log(bob.getAnnualSalary()); // 60000
console.log(bob instanceof Person);  // true (inheritance chain works)
console.log(bob instanceof Employee); // true

// 3. PRIVATE FIELDS & METHODS (encapsulation)
class BankAccount {
  // Private field (cannot access from outside)
  #balance = 0;
  #pin;

  constructor(owner, pin) {
    this.owner = owner;
    this.#pin = pin;
  }

  // Public method
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return this.#getBalance(); // can call private method
    }
    throw new Error("Invalid amount");
  }

  withdraw(amount, pin) {
    this.#verifyPin(pin);
    if (amount > this.#balance) {
      throw new Error("Insufficient funds");
    }
    this.#balance -= amount;
    return this.#getBalance();
  }

  // Private method
  #verifyPin(pin) {
    if (pin !== this.#pin) {
      throw new Error("Invalid PIN");
    }
  }

  #getBalance() {
    return this.#balance;
  }

  // Getter (read-only outside access to balance concept)
  get balance() {
    return this.#balance;
  }
}

const account = new BankAccount("Charlie", 1234);
account.deposit(1000);
console.log("Balance:", account.balance); // 1000
// console.log(account.#balance); // SyntaxError: Private field must be declared

// 4. PUBLIC CLASS FIELDS (defined outside constructor)
class Counter {
  count = 0;          // public field
  #secret = 42;       // private field

  increment() {
    this.count++;
  }
}

const c = new Counter();
console.log(c.count); // 0

// 5. CLASS EXPRESSION (can be anonymous or named)
const Rectangle = class {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
};

const rect = new Rectangle(5, 10);
console.log("Area:", rect.area()); // 50

module.exports = { Person, Employee, BankAccount, Counter, Rectangle };
