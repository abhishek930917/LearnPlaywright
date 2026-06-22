// ============================================================
// CONSTRUCTOR OVERLOADING (Simulated)
// ============================================================
// JavaScript does NOT support true constructor overloading (multiple constructors).
// However, you can simulate it using:
//   1. Default parameters
//   2. Rest parameters
//   3. Conditional logic inside a single constructor

export class Product {
  constructor(name, price, category = "General") {
    // Default parameter: if category is not provided, it defaults to "General"
    this.name = name;
    this.price = price;
    this.category = category;
  }

  describe() {
    console.log(`${this.name} (${this.category}) — $${this.price}`);
  }
}

// Usage with different argument counts
const p1 = new Product("Laptop", 1200, "Electronics");
const p2 = new Product("Mystery Box", 50); // category defaults to "General"

p1.describe(); // Laptop (Electronics) — $1200
p2.describe(); // Mystery Box (General) — $50

// ============================================================
// ADVANCED: One constructor handling multiple object shapes
// ============================================================

export class FlexibleUser {
  constructor(input) {
    if (typeof input === "string") {
      // Called as: new FlexibleUser("Alice")
      this.name = input;
      this.role = "guest";
    } else if (typeof input === "object" && input !== null) {
      // Called as: new FlexibleUser({ name: "Alice", role: "admin" })
      this.name = input.name || "Unknown";
      this.role = input.role || "guest";
    } else {
      // No arguments
      this.name = "Anonymous";
      this.role = "guest";
    }
  }

  info() {
    console.log(`User: ${this.name}, Role: ${this.role}`);
  }
}

new FlexibleUser("Alice").info();                    // User: Alice, Role: guest
new FlexibleUser({ name: "Bob", role: "admin" }).info(); // User: Bob, Role: admin
new FlexibleUser().info();                           // User: Anonymous, Role: guest
