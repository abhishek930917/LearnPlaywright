// ============================================================
// DEFAULT EXPORT
// ============================================================
// A module can have ONE default export.
// It is typically used when a module primarily exports a single class or function.
// Consumers can import it with any name they choose.

function logMessage(level, message) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [${level.toUpperCase()}]: ${message}`);
}

// Export the function as the default export
export default logMessage;

// Alternative syntax:
// export default function logMessage(level, message) { ... }
