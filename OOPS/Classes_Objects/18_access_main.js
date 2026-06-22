// ============================================================
// ACCESS SPECIFIERS DEMONSTRATION
// ============================================================
// This file imports and demonstrates all access specifier concepts.

import { AccessOverview } from "./11_access_overview.js";

import {
  BankAccountPublic,
  demonstratePublicProblem,
  Point,
  AppConfig,
} from "./12_public_members.js";

import {
  createPrivateAccount,
  SecureCounter,
  UserWithWeakMap,
} from "./13_private_closures.js";

import {
  BankAccountPrivate,
  PremiumAccount,
  demonstratePrivacy,
} from "./14_private_fields_es2022.js";

import {
  Animal,
  Bird,
  demonstrateUnprotected,
  DatabaseModel,
} from "./15_protected_convention.js";

import {
  Configuration,
  SingletonDB,
  BaseService,
  UserService,
} from "./16_static_private.js";

import {
  SecureDocument,
  EncryptedDocument,
  printAccessMatrix,
} from "./17_access_comparison.js";

console.log("========== ACCESS OVERVIEW ==========");
const overview = new AccessOverview("Test");
console.log("Public field:", overview.publicField);
console.log("Public method:", overview.publicMethod());
// overview.#privateField; // SyntaxError — commented out
console.log("Via public method:", overview.revealSecret());

console.log("\n========== PUBLIC MEMBERS ==========");
demonstratePublicProblem();
const pointA = new Point(0, 0);
const pointB = new Point(3, 4);
console.log("Distance:", pointA.distanceTo(pointB)); // 5
const config = new AppConfig({ theme: "dark" });
console.log("Config:", config.theme, config.debug);

console.log("\n========== PRIVATE VIA CLOSURES ==========");
const closureAccount = createPrivateAccount("Bob", 1000);
closureAccount.deposit(500);
closureAccount.withdraw(200);
console.log("Balance:", closureAccount.getBalance());
console.log("History:", closureAccount.getHistory());
// closureAccount.balance; // undefined — not accessible

const secureCounter = new SecureCounter();
console.log("Count:", secureCounter.increment(), secureCounter.increment());
// secureCounter.count; // undefined

const weakUser = new UserWithWeakMap("Charlie", "secret123");
console.log("Auth correct?", weakUser.authenticate("secret123"));
console.log("Auth wrong?", weakUser.authenticate("wrong"));
console.log("Keys:", Object.keys(weakUser)); // ["name"] — password hidden

console.log("\n========== PRIVATE FIELDS (#) ES2022+ ==========");
const privateAccount = new BankAccountPrivate("Diana", 10000, "5678");
privateAccount.deposit(2500);
privateAccount.withdraw(1000, "5678");
privateAccount.withdraw(5000, "wrongpin"); // Invalid PIN
console.log("Balance (with PIN):", privateAccount.getBalance("5678"));
demonstratePrivacy();

const premium = new PremiumAccount("Elite", 5000, "9999", "Gold");
premium.deposit(500); // earns rewards

console.log("\n========== PROTECTED CONVENTION ==========");
const bird = new Bird("Falcon");
bird.move();
bird.fly();
bird.rest();
demonstrateUnprotected();

const model = new DatabaseModel();
// model._isConnected = true; // possible but violates convention
model.save(); // throws — not connected

console.log("\n========== STATIC PRIVATE ==========");
const cfg1 = new Configuration({ theme: "dark" });
const cfg2 = new Configuration({ lang: "fr" });
console.log("Instance count:", Configuration.getInstanceCount());

// Configuration.createValidated({ theme: "invalid" }); // throws error

const db1 = new SingletonDB("postgres://localhost");
const db2 = new SingletonDB("mysql://remote"); // returns same instance
db1.query("SELECT * FROM users");

console.log("\n========== ACCESS COMPARISON & ENCAPSULATION ==========");
printAccessMatrix();

const doc = new SecureDocument("My Thesis", "Alice");
doc.write("Chapter 1: Introduction");
doc.write("Chapter 2: Methods");
doc.lock();
doc.write("Chapter 3: Results"); // blocked
doc.unlock(doc.getAccountNumber ? "x" : "anything"); // will fail with invalid key

const encDoc = new EncryptedDocument("Secret", "Bob", "AES256");
encDoc.write("Top secret content");
console.log(encDoc.encrypt());
encDoc.overrideWrite("Overridden");
console.log("Content:", encDoc.read());
