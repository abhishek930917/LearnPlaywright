// ============================================================
// CONSTRUCTOR CONCEPTS DEMONSTRATION
// ============================================================
// This file imports and demonstrates all constructor concepts.

import { Person } from "./01_function_constructors.js";
import { Car } from "./02_class_constructors.js";
import { Product, FlexibleUser } from "./03_constructor_overloading.js";
import { Animal, Dog, Vehicle, Bicycle } from "./04_inheritance_super.js";
import { createUser, createEmployee } from "./05_factory_functions.js";
import { Shape, Circle } from "./06_prototypes.js";
import { BankAccount } from "./07_private_fields.js";
import { Temperature, Rectangle } from "./08_getters_setters.js";
import { MathUtils, DateRange, Config } from "./09_static_members.js";

console.log("========== 1. FUNCTION CONSTRUCTORS ==========");
const alice = new Person("Alice", 30);
alice.greet();
alice.celebrateBirthday();

console.log("\n========== 2. CLASS CONSTRUCTORS ==========");
const car = new Car("Honda", "Civic", 2024);
car.accelerate(60);
car.brake();

console.log("\n========== 3. CONSTRUCTOR OVERLOADING ==========");
const laptop = new Product("Laptop", 999, "Electronics");
const mystery = new Product("Box", 10);
laptop.describe();
mystery.describe();

new FlexibleUser("Tom").info();
new FlexibleUser({ name: "Jerry", role: "admin" }).info();

console.log("\n========== 4. INHERITANCE & super() ==========");
const buddy = new Dog("Buddy", "Labrador");
console.log(buddy.describe());
buddy.speak();
buddy.fetch();

const bike = new Bicycle("Giant");
bike.start();
bike.ringBell();

console.log("\n========== 5. FACTORY FUNCTIONS ==========");
const factoryUser = createUser("Bob", "bob@example.com");
factoryUser.setPassword("securepass123");
console.log("Password correct?", factoryUser.verifyPassword("securepass123"));

const emp = createEmployee({ firstName: "Jane", lastName: "Smith", department: "HR" });
emp.giveRaise(15);

console.log("\n========== 6. PROTOTYPES ==========");
const circle = new Circle("blue", 4);
console.log("Circle area:", circle.area().toFixed(2));
console.log("Prototype chain verified:", circle instanceof Shape);

console.log("\n========== 7. PRIVATE FIELDS ==========");
const account = new BankAccount("Charlie", 500);
account.deposit(200);
account.withdraw(100);
console.log("Final balance:", account.getBalance());

console.log("\n========== 8. GETTERS & SETTERS ==========");
const temp = new Temperature(0);
console.log("0°C in Fahrenheit:", temp.fahrenheit);
temp.fahrenheit = 212;
console.log("212°F in Celsius:", temp.celsius);

const rect = new Rectangle(8, 4);
console.log("Rectangle area:", rect.area);
rect.width = 10;
console.log("New area:", rect.area);

console.log("\n========== 9. STATIC MEMBERS ==========");
console.log("PI:", MathUtils.PI);
console.log("Circle area (r=3):", MathUtils.circleArea(3));

DateRange.thisWeek().display();
DateRange.fromDuration("2024-06-01", 14).display();

console.log("Config settings:", Config.settings);
