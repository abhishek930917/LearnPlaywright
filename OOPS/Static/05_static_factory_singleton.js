// ============================================================
// STATIC FACTORY METHODS & SINGLETON PATTERN
// ============================================================
// Static methods are perfect for creating objects in controlled ways.

// ------------------ Factory Method Pattern ------------------
export class Notification {
  constructor(type, message) {
    this.type = type;
    this.message = message;
    this.timestamp = new Date();
  }

  // Factory: create based on type string
  static create(type, message) {
    switch (type) {
      case "email":
        return new EmailNotification(message);
      case "sms":
        return new SMSNotification(message);
      case "push":
        return new PushNotification(message);
      default:
        return new Notification("generic", message);
    }
  }

  // Factory: create from a JSON object
  static fromJSON(json) {
    const data = typeof json === "string" ? JSON.parse(json) : json;
    return new Notification(data.type, data.message);
  }

  send() {
    console.log(`[${this.type.toUpperCase()}] ${this.message}`);
  }
}

class EmailNotification extends Notification {
  constructor(message) {
    super("email", message);
  }
  send() {
    console.log(`📧 Email sent: ${this.message}`);
  }
}

class SMSNotification extends Notification {
  constructor(message) {
    super("sms", message);
  }
  send() {
    console.log(`📱 SMS sent: ${this.message}`);
  }
}

class PushNotification extends Notification {
  constructor(message) {
    super("push", message);
  }
  send() {
    console.log(`🔔 Push sent: ${this.message}`);
  }
}

// ------------------ Singleton Pattern (Single Instance) ------------------
export class AppSettings {
  static #instance = null;
  static #initialized = false;

  #settings;

  constructor() {
    if (AppSettings.#instance) {
      console.log("Singleton: returning existing instance");
      return AppSettings.#instance;
    }

    this.#settings = {
      theme: "light",
      language: "en",
      notifications: true,
    };

    AppSettings.#instance = this;
    AppSettings.#initialized = true;
    console.log("Singleton: created new instance");
  }

  static getInstance() {
    if (!this.#instance) {
      this.#instance = new AppSettings();
    }
    return this.#instance;
  }

  static isInitialized() {
    return this.#initialized;
  }

  get(key) {
    return this.#settings[key];
  }

  set(key, value) {
    this.#settings[key] = value;
  }

  getAll() {
    return { ...this.#settings };
  }
}

// ------------------ Named Constructors (Another Factory Style) ------------------
export class DateRange {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  static today() {
    const now = new Date();
    const end = new Date(now);
    end.setHours(23, 59, 59, 999);
    return new DateRange(now, end);
  }

  static thisWeek() {
    const now = new Date();
    const start = new Date(now);
    start.setDate(now.getDate() - now.getDay());
    start.setHours(0, 0, 0, 0);
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    end.setHours(23, 59, 59, 999);
    return new DateRange(start, end);
  }

  static between(startStr, endStr) {
    return new DateRange(new Date(startStr), new Date(endStr));
  }

  display() {
    console.log(`${this.start.toDateString()} → ${this.end.toDateString()}`);
  }
}
