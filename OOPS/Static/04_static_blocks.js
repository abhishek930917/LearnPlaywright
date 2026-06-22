// ============================================================
// STATIC INITIALIZATION BLOCKS (ES2022+)
// ============================================================
// A static block is a block of code that runs ONCE when the class is loaded.
// Useful for complex initialization logic that can't be expressed as a simple assignment.

export class DatabaseConfig {
  static host;
  static port;
  static credentials;
  static isLoaded = false;

  // Static initialization block
  static {
    console.log("[Static Block] Running DatabaseConfig setup...");

    // Can run any arbitrary logic
    const env = process?.env?.NODE_ENV || "development";

    if (env === "production") {
      this.host = "prod.db.server.com";
      this.port = 5432;
    } else {
      this.host = "localhost";
      this.port = 3306;
    }

    this.credentials = {
      user: "admin",
      pass: this.#generateTempPass(), // can call private static methods
    };

    this.isLoaded = true;
    console.log("[Static Block] DatabaseConfig ready!");
  }

  static #generateTempPass() {
    return "temp-" + Math.random().toString(36).slice(2);
  }
}

// ------------------ Multiple Static Blocks ------------------
// You can have multiple static blocks — they execute in declaration order.
export class Logger {
  static levels;
  static levelPriority;

  static {
    console.log("[Logger Block 1] Setting up levels...");
    this.levels = ["DEBUG", "INFO", "WARN", "ERROR"];
  }

  static {
    console.log("[Logger Block 2] Mapping priorities...");
    this.levelPriority = {};
    for (let i = 0; i < this.levels.length; i++) {
      this.levelPriority[this.levels[i]] = i;
    }
  }

  static canLog(level, minLevel) {
    return this.levelPriority[level] >= this.levelPriority[minLevel];
  }
}

// ------------------ Static Block Use Cases ------------------
export class AppRegistry {
  static services = new Map();
  static initializedAt;

  static {
    console.log("[AppRegistry] Initializing service registry...");
    this.initializedAt = new Date();
    this.services.set("auth", { name: "AuthService", status: "ready" });
    this.services.set("db", { name: "DatabaseService", status: "ready" });
  }

  static register(name, service) {
    this.services.set(name, service);
  }

  static getService(name) {
    return this.services.get(name);
  }
}

// ------------------ Important Note ------------------
// Static blocks run when the CLASS IS EVALUATED (loaded), not when an instance is created.
// They run ONLY ONCE, even if you create 100 instances.
