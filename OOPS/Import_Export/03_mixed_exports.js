// ============================================================
// MIXED EXPORTS (Default + Named)
// ============================================================
// A module can have one default export AND any number of named exports.
// This pattern is common in libraries like React (e.g., React default, useState named).

const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  retries: 3,
};

export default config;

export const ENV = "production";

export function loadConfig() {
  console.log("Loading configuration...");
  return config;
}

export function validateConfig(cfg) {
  return cfg.apiUrl && cfg.timeout > 0;
}
