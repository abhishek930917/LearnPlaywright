// ============================================================
// IMPORT STYLES DEMONSTRATION
// ============================================================
// This file shows all the different ways to import in JavaScript.

// 1. Import specific named exports
import { add, subtract, multiply, PI, Calculator } from "./01_named_exports.js";

// 2. Import default export (you can name it anything)
import logMessage from "./02_default_export.js";

// 3. Import default + named exports together
import config, { ENV, loadConfig, validateConfig } from "./03_mixed_exports.js";

// 4. Import with aliases (useful when names collide)
import { MAX_USERS as USER_LIMIT, HTTP_STATUS } from "./04_constants.js";

// 5. Import everything into a namespace object
import * as math from "./01_named_exports.js";

// 6. Import from a barrel file (re-export)
import { add as addFromBarrel, logMessage as logFromBarrel } from "./05_re_export.js";

// ============================================================
// USAGE EXAMPLES
// ============================================================

console.log("=== Named Imports ===");
console.log("PI:", PI);
console.log("2 + 3 =", add(2, 3));
console.log("5 - 2 =", subtract(5, 2));
console.log("4 * 7 =", multiply(4, 7));

const calc = new Calculator(10);
calc.add(5).add(3);
console.log("Calculator result:", calc.result());

console.log("\n=== Default Import ===");
logMessage("info", "Application started successfully");

console.log("\n=== Mixed Imports ===");
console.log("Config:", config);
console.log("Environment:", ENV);
loadConfig();
console.log("Is config valid?", validateConfig(config));

console.log("\n=== Aliased Import ===");
console.log("User limit:", USER_LIMIT);
console.log("HTTP OK status:", HTTP_STATUS.OK);

console.log("\n=== Namespace Import (* as) ===");
console.log("PI from namespace:", math.PI);
console.log("10 + 20 =", math.add(10, 20));
const nsCalc = new math.Calculator(100);
nsCalc.add(50);
console.log("Namespace Calculator result:", nsCalc.result());

console.log("\n=== Re-export (Barrel) ===");
console.log("1 + 1 from barrel =", addFromBarrel(1, 1));
logFromBarrel("debug", "This came through the barrel file");
