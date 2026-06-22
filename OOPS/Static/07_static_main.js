// ============================================================
// STATIC CONCEPTS — COMPLETE DEMONSTRATION
// ============================================================

import { MathConstants, Calculator, Demo } from "./01_static_basics.js";
import { Player, compareStaticVsInstance, memoryAnalogy } from "./02_static_vs_instance.js";
import {
  Animal,
  Dog,
  Cat,
  Vehicle,
  Car,
  Bike,
  demonstrateStaticInheritance,
  demonstratePerClassCounters,
} from "./03_static_inheritance.js";
import { DatabaseConfig, Logger, AppRegistry } from "./04_static_blocks.js";
import { Notification, AppSettings, DateRange } from "./05_static_factory_singleton.js";
import { APIClient, User, BaseService, PaymentService } from "./06_static_private.js";

console.log("========== 1. STATIC BASICS ==========");
console.log("MathConstants.PI:", MathConstants.PI);
console.log("Calculator.add(10, 5):", Calculator.add(10, 5));
console.log("Calculator.circleArea(3):", Calculator.circleArea(3).toFixed(2));

const demo = new Demo();
demo.instanceMethod();
console.log("Demo.version via class:", Demo.version);
// console.log(demo.version); // undefined — instances don't have static members

console.log("\n========== 2. STATIC vs INSTANCE ==========");
memoryAnalogy();
compareStaticVsInstance();

console.log("\n========== 3. STATIC IN INHERITANCE ==========");
demonstrateStaticInheritance();
demonstratePerClassCounters();

console.log("\n========== 4. STATIC INITIALIZATION BLOCKS ==========");
// Static blocks already ran when modules loaded, but let's show the result
console.log("DatabaseConfig loaded?", DatabaseConfig.isLoaded);
console.log("DatabaseConfig host:", DatabaseConfig.host);
console.log("DatabaseConfig port:", DatabaseConfig.port);

console.log("Logger levels:", Logger.levels);
console.log("Logger priority:", Logger.levelPriority);
console.log("Can log INFO from DEBUG?", Logger.canLog("INFO", "DEBUG")); // true
console.log("Can log DEBUG from INFO?", Logger.canLog("DEBUG", "INFO")); // false

console.log("AppRegistry initialized at:", AppRegistry.initializedAt);
console.log("Auth service:", AppRegistry.getService("auth"));

console.log("\n========== 5. FACTORY METHODS & SINGLETON ==========");
const notif1 = Notification.create("email", "Welcome!");
const notif2 = Notification.create("sms", "Your code is 1234");
const notif3 = Notification.create("push", "New message");
notif1.send();
notif2.send();
notif3.send();

const settings1 = new AppSettings();
settings1.set("theme", "dark");
console.log("Settings 1 theme:", settings1.get("theme"));

const settings2 = new AppSettings(); // returns SAME instance
console.log("Settings 2 theme:", settings2.get("theme")); // "dark" — shared!
console.log("Same instance?", settings1 === settings2); // true
console.log("Is initialized?", AppSettings.isInitialized());

const today = DateRange.today();
const thisWeek = DateRange.thisWeek();
const custom = DateRange.between("2024-01-01", "2024-12-31");
today.display();
thisWeek.display();
custom.display();

console.log("\n========== 6. PRIVATE STATIC MEMBERS ==========");
APIClient.configure("sk-1234567890abcdef");
APIClient.fetch("/users").then((res) => console.log("Fetch result:", res));
console.log("Total requests:", APIClient.getRequestCount());

const user1 = new User("Alice", "alice@example.com", "admin");
const user2 = new User("Bob", "bob@example.com", "editor");
console.log("Total users created:", User.getUserCount());
console.log("Valid roles:", User.getValidRoles());

// This would throw:
// new User("Hacker", "bad-email", "hacker");

console.log("BaseService name:", BaseService.getName());
console.log("PaymentService name:", PaymentService.getName());

console.log("\n========== STATIC CONCEPT COMPLETE ==========");
