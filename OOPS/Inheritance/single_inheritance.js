// ============================================================================
// SINGLE INHERITANCE IN JAVASCRIPT
// ============================================================================

/*
SINGLE INHERITANCE:
-------------------
When a class (child/subclass) inherits from ONE parent class (superclass).
This is the most common and straightforward form of inheritance.

SYNTAX:
  class Child extends Parent { }

KEY POINTS:
- The child class inherits all public and protected methods/properties
- The child can add new methods/properties
- The child can override parent methods
- Use super() to call the parent constructor
- Use super.method() to call parent methods
*/


// ----------------------------------------------------------------------------
// EXAMPLE 1: BASIC SINGLE INHERITANCE
// ----------------------------------------------------------------------------

class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }

    sleep() {
        console.log(`${this.name} is sleeping.`);
    }

    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);        // Call parent constructor
        this.breed = breed; // New property specific to Dog
    }

    // New method specific to Dog
    fetch() {
        console.log(`${this.name} is fetching the ball.`);
    }

    // Overriding parent method
    makeSound() {
        console.log(`${this.name} barks: Woof! Woof!`);
    }
}

console.log("=== BASIC SINGLE INHERITANCE ===");
const genericAnimal = new Animal("Generic Animal");
genericAnimal.eat();       // From Animal
genericAnimal.sleep();     // From Animal
genericAnimal.makeSound(); // From Animal

console.log("---");

const dog = new Dog("Buddy", "Golden Retriever");
dog.eat();        // Inherited from Animal
dog.sleep();      // Inherited from Animal
dog.makeSound();  // Overridden in Dog
dog.fetch();      // Specific to Dog

console.log(`Name: ${dog.name}, Breed: ${dog.breed}`);
console.log("\n");


// ----------------------------------------------------------------------------
// EXAMPLE 2: SINGLE INHERITANCE WITH super()
// ----------------------------------------------------------------------------

class Employee {
    constructor(name, id, salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }

    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary}`;
    }

    work() {
        console.log(`${this.name} is working.`);
    }
}

class Manager extends Employee {
    constructor(name, id, salary, department, teamSize) {
        super(name, id, salary); // Must call super() before using 'this'
        this.department = department;
        this.teamSize = teamSize;
    }

    // Extending parent method
    getDetails() {
        const baseDetails = super.getDetails(); // Call parent method
        return `${baseDetails}, Dept: ${this.department}, Team: ${this.teamSize}`;
    }

    // New method
    conductMeeting() {
        console.log(`${this.name} is conducting a team meeting.`);
    }

    manageTeam() {
        console.log(`${this.name} is managing a team of ${this.teamSize} people.`);
    }
}

console.log("=== SINGLE INHERITANCE WITH super() ===");
const emp = new Employee("Alice", "E001", 50000);
console.log(emp.getDetails());
emp.work();

console.log("---");

const mgr = new Manager("Bob", "M001", 90000, "Engineering", 10);
console.log(mgr.getDetails()); // Uses overridden method with super.getDetails()
mgr.work();         // Inherited
mgr.conductMeeting(); // Specific to Manager
mgr.manageTeam();    // Specific to Manager
console.log("\n");


// ----------------------------------------------------------------------------
// EXAMPLE 3: SINGLE INHERITANCE WITH PRIVATE FIELDS
// ----------------------------------------------------------------------------

class BankAccount {
    #balance = 0;

    constructor(holder, initialBalance) {
        this.holder = holder;
        this.#balance = initialBalance;
    }

    getBalance() {
        return this.#balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited $${amount}. Balance: $${this.#balance}`);
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew $${amount}. Balance: $${this.#balance}`);
        }
    }
}

class SavingsAccount extends BankAccount {
    #interestRate = 0;

    constructor(holder, initialBalance, interestRate) {
        super(holder, initialBalance);
        this.#interestRate = interestRate;
    }

    addInterest() {
        const interest = this.getBalance() * (this.#interestRate / 100);
        this.deposit(interest);
        console.log(`Interest added at ${this.#interestRate}% rate.`);
    }

    getInterestRate() {
        return this.#interestRate;
    }
}

console.log("=== SINGLE INHERITANCE WITH PRIVATE FIELDS ===");
const savings = new SavingsAccount("Charlie", 10000, 5);
console.log(`Holder: ${savings.holder}`);
console.log(`Balance: $${savings.getBalance()}`);
console.log(`Interest Rate: ${savings.getInterestRate()}%`);
savings.deposit(5000);    // Inherited
savings.addInterest();    // Specific to SavingsAccount
console.log(`Final Balance: $${savings.getBalance()}`);
console.log("\n");


// ----------------------------------------------------------------------------
// EXAMPLE 4: INSTANCEOF OPERATOR
// ----------------------------------------------------------------------------
// Check if an object is an instance of a class

console.log("=== INSTANCEOF CHECKS ===");
console.log(`dog instanceof Dog: ${dog instanceof Dog}`);           // true
console.log(`dog instanceof Animal: ${dog instanceof Animal}`);     // true
console.log(`dog instanceof Object: ${dog instanceof Object}`);     // true
console.log(`mgr instanceof Manager: ${mgr instanceof Manager}`);   // true
console.log(`mgr instanceof Employee: ${mgr instanceof Employee}`); // true
console.log(`savings instanceof SavingsAccount: ${savings instanceof SavingsAccount}`); // true
console.log(`savings instanceof BankAccount: ${savings instanceof BankAccount}`);       // true
console.log("\n");


// ============================================================================
// SUMMARY
// ============================================================================
console.log("=== SINGLE INHERITANCE SUMMARY ===");
console.log(`
DEFINITION:
  A child class inherits from exactly ONE parent class.

SYNTAX:
  class Child extends Parent { }

KEY POINTS:
  - Use 'extends' keyword to establish inheritance
  - Use super() in child constructor to call parent constructor
  - Use super.method() to call parent's version of a method
  - Child inherits all public methods and properties
  - Child can add new methods and properties
  - Child can override parent methods
  - Private fields (#field) are NOT inherited directly
  - But public methods that access private fields ARE inherited

EXAMPLES IN THIS FILE:
  1. Animal -> Dog (basic inheritance)
  2. Employee -> Manager (using super() and super.method())
  3. BankAccount -> SavingsAccount (with private fields)
  4. instanceof operator (check inheritance chain)
`);
