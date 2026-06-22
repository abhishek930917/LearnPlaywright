// ============================================================
// PRIVATE STATIC MEMBERS
// ============================================================
// Private static fields and methods are only accessible within the class body.
// They are shared across all instances but hidden from external code.

export class APIClient {
  // Private static fields
  static #baseURL = "https://api.example.com";
  static #apiKey = null;
  static #requestCount = 0;

  // Public static method to configure
  static configure(apiKey) {
    this.#apiKey = apiKey;
    console.log("API client configured.");
  }

  // Public static method to make requests
  static async fetch(endpoint) {
    if (!this.#apiKey) {
      throw new Error("API not configured. Call APIClient.configure() first.");
    }

    this.#requestCount++;
    this.#logRequest(endpoint);

    // Simulated fetch
    return { url: `${this.#baseURL}${endpoint}`, key: this.#apiKey.slice(0, 4) + "****" };
  }

  // Public static getter for metrics
  static getRequestCount() {
    return this.#requestCount;
  }

  // Private static method
  static #logRequest(endpoint) {
    console.log(`[API Request #${this.#requestCount}] ${endpoint}`);
  }
}

// ------------------ Validation with Private Static ------------------
export class User {
  static #VALID_ROLES = ["admin", "editor", "viewer"];
  static #EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  static #userCount = 0;

  constructor(name, email, role) {
    if (!User.#isValidEmail(email)) {
      throw new Error("Invalid email format");
    }
    if (!User.#isValidRole(role)) {
      throw new Error(`Invalid role. Must be one of: ${User.#VALID_ROLES.join(", ")}`);
    }

    this.name = name;
    this.email = email;
    this.role = role;
    User.#userCount++;
  }

  static getUserCount() {
    return this.#userCount;
  }

  static getValidRoles() {
    // Return a copy to prevent external mutation of private array
    return [...this.#VALID_ROLES];
  }

  static #isValidEmail(email) {
    return this.#EMAIL_REGEX.test(email);
  }

  static #isValidRole(role) {
    return this.#VALID_ROLES.includes(role);
  }
}

// ------------------ Private Static in Subclasses ------------------
export class BaseService {
  static #serviceName = "Base";

  static getName() {
    return this.#serviceName;
  }
}

export class PaymentService extends BaseService {
  // This is a DIFFERENT private field from BaseService.#serviceName
  static #serviceName = "Payment";

  static getName() {
    return this.#serviceName;
  }

  static getBaseName() {
    // Cannot access BaseService.#serviceName directly
    // But can call inherited public static method:
    // return BaseService.getName(); // Would return "Base"
    return "Base (via public method)";
  }
}
