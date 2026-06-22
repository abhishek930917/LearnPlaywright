// ============================================================
// STATIC PRIVATE MEMBERS
// ============================================================
// ES2022 also introduced private static fields and methods.
// They are shared across all instances but inaccessible from outside.

export class Configuration {
  // Private static field
  static #defaults = {
    theme: "light",
    lang: "en",
    debug: false,
  };

  // Private static field
  static #instanceCount = 0;

  // Public static field
  static version = "2.0.0";

  constructor(userOptions = {}) {
    // Merge public defaults with user options
    this.options = { ...Configuration.#defaults, ...userOptions };
    Configuration.#instanceCount++;
    Configuration.#logCreation();
  }

  // Private static method
  static #logCreation() {
    console.log(`[Config] Instance created. Total: ${this.#instanceCount}`);
  }

  // Public static method to access private state safely
  static getInstanceCount() {
    return this.#instanceCount;
  }

  // Public static factory with validation logic using private fields
  static createValidated(options) {
    if (!Configuration.#isValid(options)) {
      throw new Error("Invalid configuration options");
    }
    return new Configuration(options);
  }

  // Private static validation
  static #isValid(options) {
    const validThemes = ["light", "dark", "auto"];
    if (options.theme && !validThemes.includes(options.theme)) {
      return false;
    }
    return true;
  }

  getOption(key) {
    return this.options[key];
  }
}

// ------------------ Singleton Pattern with Private Static ------------------
export class SingletonDB {
  static #instance = null;
  static #connectionString = null;

  constructor(connString) {
    if (SingletonDB.#instance) {
      console.log("Returning existing instance");
      return SingletonDB.#instance;
    }

    this.connString = connString;
    SingletonDB.#connectionString = connString;
    SingletonDB.#instance = this;
    console.log("New DB connection created");
  }

  static getInstance() {
    return this.#instance;
  }

  query(sql) {
    console.log(`Executing: ${sql}`);
  }
}

// ------------------ Private Static in Subclasses ------------------
export class BaseService {
  static #serviceName = "Base";

  static getServiceName() {
    return this.#serviceName; // Each class has its own #serviceName if defined
  }
}

export class UserService extends BaseService {
  static #serviceName = "User"; // Different from BaseService.#serviceName
}
