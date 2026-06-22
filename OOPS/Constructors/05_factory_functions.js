// ============================================================
// FACTORY FUNCTIONS (Alternative to Constructors)
// ============================================================
// A factory function is a regular function that returns a new object.
// No `new` keyword needed. No `this` binding issues.
// Great for data privacy via closures.

export function createUser(name, email) {
  // Private variable (closure) — cannot be accessed from outside
  let password = "";

  return {
    name,
    email,

    setPassword(newPassword) {
      if (newPassword.length < 6) {
        console.log("Password too short!");
        return;
      }
      password = newPassword;
      console.log("Password set successfully.");
    },

    verifyPassword(input) {
      return input === password;
    },

    getProfile() {
      return { name: this.name, email: this.email };
    },
  };
}

// Usage
const user1 = createUser("Alice", "alice@example.com");
user1.setPassword("secret123"); // Password set successfully.
console.log("Verify correct:", user1.verifyPassword("secret123")); // true
console.log("Verify wrong:", user1.verifyPassword("wrong"));       // false

// password variable is NOT accessible here:
console.log("Direct access to password:", user1.password); // undefined

// ============================================================
// FACTORY WITH CONFIGURATION OBJECT
// ============================================================

export function createEmployee({ firstName, lastName, department = "General", salary = 30000 }) {
  const fullName = `${firstName} ${lastName}`;

  return {
    fullName,
    department,
    salary,

    giveRaise(percent) {
      const increase = this.salary * (percent / 100);
      this.salary += increase;
      console.log(`${fullName} got a raise! New salary: $${this.salary}`);
    },
  };
}

const emp = createEmployee({ firstName: "John", lastName: "Doe", department: "Engineering" });
emp.giveRaise(10); // John Doe got a raise! New salary: $33000
