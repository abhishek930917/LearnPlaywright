// ============================================================
// RE-EXPORTS (BARREL FILE)
// ============================================================
// A barrel file centralizes exports from multiple modules.
// It simplifies imports for consumers, who can import everything from one place.

export { add, subtract, multiply, PI, Calculator } from "./01_named_exports.js";
export { default as logMessage } from "./02_default_export.js";
export { default as config, ENV, loadConfig, validateConfig } from "./03_mixed_exports.js";
export { MAX_USERS, DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES, HTTP_STATUS } from "./04_constants.js";

// Note: In a real Node.js project, you would omit the .js extension or use
// proper module resolution. The examples above are written for ES modules (type: module).
