// ============================================================
// CLASSES & OBJECTS DEMONSTRATION
// ============================================================
// This file imports and demonstrates all classes and objects concepts.

import {
  Person,
  Vehicle,
  NamedExpression,
  Counter,
  QueryBuilder,
} from "./01_class_basics.js";

import { ThisDemo, demonstrateThis, Timer, Button } from "./02_this_keyword.js";

import {
  book,
  personShort,
  userComputed,
  calculator,
  company,
  showDescriptors,
} from "./03_object_literals.js";

import { demonstrateObjectMethods } from "./04_object_methods.js";

import {
  dog,
  cat,
  inspectPrototypes,
  createPerson,
  personA,
  personB,
  vehicle,
  car,
} from "./05_object_create.js";

import {
  demonstrateDestructuring,
  printUser,
  printAddress,
  demonstrateSpread,
  buildQuery,
} from "./06_destructuring_spread.js";

import { demonstrateReferenceVsValue } from "./07_reference_vs_value.js";

import {
  Shape,
  Rectangle,
  Circle,
  Triangle,
  renderShapes,
  checkTypes,
  Employee,
  Manager,
} from "./08_class_inheritance_polymorphism.js";

import {
  Duck,
  DatabaseConnection,
  SecureUser,
  UUIDGenerator,
} from "./09_advanced_classes.js";

console.log("========== 1. CLASS BASICS ==========");
const person = new Person("Alice", 30);
console.log(person.introduce());
console.log("Is adult?", person.isAdult);
person.setAge = 31;
console.log("New age:", person.age);

const vehicleObj = new Vehicle("Car");
console.log(vehicleObj.describe());

const fluent = new QueryBuilder().select(["name", "age"]).where({ active: true }).limit(10).build();
console.log("Query:", fluent);

const counter = new Counter();
console.log("Counter:", counter.increment(), counter.increment());

console.log("\n========== 2. `this` KEYWORD ==========");
demonstrateThis();

console.log("\n========== 3. OBJECT LITERALS ==========");
console.log("Book summary:", book.getSummary());
console.log("Shorthand person:", personShort);
console.log("Computed user:", userComputed);
console.log("Calculator chain:", calculator.add(5).add(3).subtract(2).result());
console.log("Company location:", company.location.city);
showDescriptors();

console.log("\n========== 4. OBJECT METHODS ==========");
demonstrateObjectMethods();

console.log("\n========== 5. Object.create() ==========");
dog.speak();
cat.speak();
inspectPrototypes();
personA.greet();
personB.haveBirthday();
car.start();
car.honk();

console.log("\n========== 6. DESTRUCTURING & SPREAD ==========");
demonstrateDestructuring();
printUser({ firstName: "Jane", lastName: "Doe", age: 28 });
printAddress({ address: { city: "Boston", country: "USA" } });
demonstrateSpread();
buildQuery("/api/users", { method: "POST", headers: { auth: "token" }, timeout: 5000 });

console.log("\n========== 7. REFERENCE VS VALUE ==========");
demonstrateReferenceVsValue();

console.log("\n========== 8. INHERITANCE & POLYMORPHISM ==========");
const shapes = [
  new Rectangle("red", 10, 5),
  new Circle("blue", 7),
  new Triangle("green", 8, 4),
];
renderShapes(shapes);
checkTypes(shapes);

const mgr = new Manager("Tom", 80000, "Sales");
console.log(mgr.getDetails());

console.log("\n========== 9. ADVANCED CLASSES ==========");
const duck = new Duck("Daffy");
duck.fly();
duck.swim();

const db1 = new DatabaseConnection("db://localhost");
const db2 = new DatabaseConnection("db://remote");
console.log("DB instances:", DatabaseConnection.getInstanceCount());

const secure = new SecureUser("SecretAgent");
console.log("Secure ID:", secure.getId());

const uuid = new UUIDGenerator();
console.log("UUID:", uuid.generate());
console.log("UUID:", uuid.generate());
