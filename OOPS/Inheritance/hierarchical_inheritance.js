// ============================================================================
// HIERARCHICAL INHERITANCE IN JAVASCRIPT
// ============================================================================

/*
HIERARCHICAL INHERITANCE:
-------------------------
When MULTIPLE classes inherit from a SINGLE parent class.
One parent class serves as the base for multiple child classes.

STRUCTURE:
              Parent
            /   |   \
       Child1 Child2 Child3

SYNTAX:
  class Parent { }
  class Child1 extends Parent { }
  class Child2 extends Parent { }
  class Child3 extends Parent { }

KEY POINTS:
- All children share the common behavior from Parent
- Each child can have its own unique properties and methods
- Changes to Parent affect all children
- Children are independent of each other
*/


// ----------------------------------------------------------------------------
// EXAMPLE 1: BASIC HIERARCHICAL INHERITANCE
// ----------------------------------------------------------------------------

class Shape {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    // Common method for all shapes
    describe() {
        return `This is a ${this.color} ${this.name}`;
    }

    // Common method - will be overridden by children
    calculateArea() {
        return 0; // Base implementation
    }

    // Common method - will be overridden by children
    calculatePerimeter() {
        return 0;
    }

    displayInfo() {
        console.log(`${this.describe()}`);
        console.log(`  Area: ${this.calculateArea()}`);
        console.log(`  Perimeter: ${this.calculatePerimeter()}`);
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super("Circle", color);
        this.radius = radius;
    }

    calculateArea() {
        return (Math.PI * this.radius * this.radius).toFixed(2);
    }

    calculatePerimeter() {
        return (2 * Math.PI * this.radius).toFixed(2);
    }
}

class Rectangle extends Shape {
    constructor(color, width, height) {
        super("Rectangle", color);
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return (this.width * this.height).toFixed(2);
    }

    calculatePerimeter() {
        return (2 * (this.width + this.height)).toFixed(2);
    }
}

class Triangle extends Shape {
    constructor(color, base, height, sideA, sideB, sideC) {
        super("Triangle", color);
        this.base = base;
        this.height = height;
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }

    calculateArea() {
        return (0.5 * this.base * this.height).toFixed(2);
    }

    calculatePerimeter() {
        return (this.sideA + this.sideB + this.sideC).toFixed(2);
    }
}

console.log("=== HIERARCHICAL INHERITANCE (Shapes) ===");
const circle = new Circle("Red", 5);
const rectangle = new Rectangle("Blue", 4, 6);
const triangle = new Triangle("Green", 3, 4, 3, 4, 5);

circle.displayInfo();
console.log("---");
rectangle.displayInfo();
console.log("---");
triangle.displayInfo();
console.log("\n");


// ----------------------------------------------------------------------------
// EXAMPLE 2: HIERARCHICAL INHERITANCE WITH METHOD OVERRIDING
// ----------------------------------------------------------------------------

class Employee {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    work() {
        console.log(`${this.name} is doing general work.`);
    }

    getRole() {
        return "Employee";
    }

    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Role: ${this.getRole()}`;
    }
}

class Developer extends Employee {
    constructor(name, id, language) {
        super(name, id);
        this.language = language;
    }

    work() {
        console.log(`${this.name} is coding in ${this.language}.`);
    }

    getRole() {
        return `Developer (${this.language})`;
    }

    debugCode() {
        console.log(`${this.name} is debugging code.`);
    }
}

class Designer extends Employee {
    constructor(name, id, tool) {
        super(name, id);
        this.tool = tool;
    }

    work() {
        console.log(`${this.name} is designing with ${this.tool}.`);
    }

    getRole() {
        return `Designer (${this.tool})`;
    }

    createPrototype() {
        console.log(`${this.name} is creating a UI prototype.`);
    }
}

class Manager extends Employee {
    constructor(name, id, department) {
        super(name, id);
        this.department = department;
    }

    work() {
        console.log(`${this.name} is managing the ${this.department} department.`);
    }

    getRole() {
        return `Manager (${this.department})`;
    }

    conductMeeting() {
        console.log(`${this.name} is conducting a team meeting.`);
    }
}

console.log("=== HIERARCHICAL INHERITANCE (Employees) ===");
const dev = new Developer("Alice", "D001", "JavaScript");
const designer = new Designer("Bob", "DG001", "Figma");
const manager = new Manager("Charlie", "M001", "Engineering");

const employees = [dev, designer, manager];

employees.forEach(emp => {
    console.log(emp.getDetails());
    emp.work(); // Each has its own implementation
    console.log("---");
});

// Unique methods for each child
dev.debugCode();
designer.createPrototype();
manager.conductMeeting();
console.log("\n");


// ----------------------------------------------------------------------------
// EXAMPLE 3: POLYMORPHISM WITH HIERARCHICAL INHERITANCE
// ----------------------------------------------------------------------------
// All children can be treated as the parent type

console.log("=== POLYMORPHISM WITH HIERARCHICAL INHERITANCE ===");

function processEmployeeWork(employee) {
    console.log(`Processing ${employee.name}...`);
    employee.work(); // Calls the appropriate version based on actual object type
}

employees.forEach(processEmployeeWork);
console.log("\n");


// ----------------------------------------------------------------------------
// EXAMPLE 4: instanceof IN HIERARCHICAL INHERITANCE
// ----------------------------------------------------------------------------

console.log("=== INSTANCEOF CHECKS ===");
console.log(`dev instanceof Developer: ${dev instanceof Developer}`);     // true
console.log(`dev instanceof Employee: ${dev instanceof Employee}`);       // true
console.log(`dev instanceof Designer: ${dev instanceof Designer}`);       // false
console.log(`dev instanceof Object: ${dev instanceof Object}`);           // true

console.log("---");
console.log(`designer instanceof Designer: ${designer instanceof Designer}`); // true
console.log(`designer instanceof Employee: ${designer instanceof Employee}`); // true
console.log(`designer instanceof Developer: ${designer instanceof Developer}`); // false

console.log("---");
console.log(`manager instanceof Manager: ${manager instanceof Manager}`);     // true
console.log(`manager instanceof Employee: ${manager instanceof Employee}`);   // true
console.log(`manager instanceof Developer: ${manager instanceof Developer}`); // false
console.log("\n");


// ----------------------------------------------------------------------------
// EXAMPLE 5: SHARED UTILITY FROM PARENT
// ----------------------------------------------------------------------------

class DatabaseConnection {
    #connected = false;

    connect() {
        this.#connected = true;
        console.log("Database connected.");
    }

    disconnect() {
        this.#connected = false;
        console.log("Database disconnected.");
    }

    isConnected() {
        return this.#connected;
    }

    query(sql) {
        if (!this.#connected) {
            console.log("Error: Not connected to database.");
            return null;
        }
        console.log(`Executing: ${sql}`);
        return [];
    }
}

class MySQLConnection extends DatabaseConnection {
    constructor(host, port) {
        super();
        this.host = host;
        this.port = port;
        this.type = "MySQL";
    }

    connect() {
        console.log(`Connecting to MySQL at ${this.host}:${this.port}...`);
        super.connect();
    }
}

class PostgreSQLConnection extends DatabaseConnection {
    constructor(host, port) {
        super();
        this.host = host;
        this.port = port;
        this.type = "PostgreSQL";
    }

    connect() {
        console.log(`Connecting to PostgreSQL at ${this.host}:${this.port}...`);
        super.connect();
    }
}

class MongoDBConnection extends DatabaseConnection {
    constructor(host, port) {
        super();
        this.host = host;
        this.port = port;
        this.type = "MongoDB";
    }

    connect() {
        console.log(`Connecting to MongoDB at ${this.host}:${this.port}...`);
        super.connect();
    }

    query(collection) {
        // MongoDB uses collections, not SQL
        console.log(`Querying MongoDB collection: ${collection}`);
        return super.query(`db.${collection}.find()`);
    }
}

console.log("=== SHARED UTILITY FROM PARENT (Database) ===");
const mysql = new MySQLConnection("localhost", 3306);
const postgres = new PostgreSQLConnection("localhost", 5432);
const mongo = new MongoDBConnection("localhost", 27017);

mysql.connect();
mysql.query("SELECT * FROM users");
mysql.disconnect();

console.log("---");

postgres.connect();
postgres.query("SELECT * FROM orders");

console.log("---");

mongo.connect();
mongo.query("products");
mongo.disconnect();

console.log("\n");


// ============================================================================
// SUMMARY
// ============================================================================
console.log("=== HIERARCHICAL INHERITANCE SUMMARY ===");
console.log(`
DEFINITION:
  Multiple child classes inherit from a single parent class.

STRUCTURE:
              Parent
            /   |   \
       Child1 Child2 Child3

SYNTAX:
  class Parent { }
  class Child1 extends Parent { }
  class Child2 extends Parent { }
  class Child3 extends Parent { }

KEY POINTS:
  - One parent serves as base for multiple children
  - All children share common behavior from parent
  - Each child can add unique properties and methods
  - Each child can override parent methods independently
  - Children are independent of each other
  - Changes to parent affect all children

BENEFITS:
  - Eliminates code duplication across related classes
  - Centralizes common behavior in the parent
  - Enables polymorphism (treat all children as parent type)
  - Easy to add new child types without modifying existing ones

EXAMPLES IN THIS FILE:
  1. Shape -> Circle, Rectangle, Triangle (geometric shapes)
  2. Employee -> Developer, Designer, Manager (workplace roles)
  3. Polymorphism demonstration (treat all as Employee)
  4. DatabaseConnection -> MySQL, PostgreSQL, MongoDB
`);
