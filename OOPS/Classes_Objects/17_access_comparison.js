// ============================================================
// COMPARISON: ALL ACCESS MODIFIER APPROACHES
// ============================================================
// Side-by-side comparison of public, protected (convention), and private (#).

export class SecureDocument {
  // ========== PUBLIC ==========
  title;           // anyone can read/write
  author;          // anyone can read/write

  // ========== PROTECTED (convention) ==========
  _revision = 0;   // internal use, subclasses may access
  _content = "";   // internal use, subclasses may access

  // ========== PRIVATE ==========
  #encryptionKey;  // only this class can access
  #isLocked;      // only this class can access

  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.#encryptionKey = this.#generateKey();
    this.#isLocked = false;
  }

  #generateKey() {
    return "KEY-" + Math.random().toString(36).slice(2);
  }

  // ========== PUBLIC API ==========
  write(text) {
    if (this.#isLocked) {
      console.log("Document is locked. Unlock to edit.");
      return;
    }
    this._content += text;
    this._revision++;
    console.log(`Written. Revision: ${this._revision}`);
  }

  read() {
    return this._content;
  }

  lock() {
    this.#isLocked = true;
    console.log("Document locked.");
  }

  unlock(password) {
    if (password === this.#encryptionKey) {
      this.#isLocked = false;
      console.log("Document unlocked.");
    } else {
      console.log("Invalid key.");
    }
  }

  // ========== PROTECTED METHODS (convention) ==========
  _formatHeader() {
    return `--- ${this.title} by ${this.author} ---`;
  }

  _resetRevision() {
    this._revision = 0;
  }
}

// Subclass can access protected members but NOT private ones
export class EncryptedDocument extends SecureDocument {
  constructor(title, author, cipher) {
    super(title, author);
    this.cipher = cipher;
  }

  encrypt() {
    // Can access protected members
    const header = this._formatHeader();
    const body = this._content; // accessing protected field

    // Cannot access private members:
    // const key = this.#encryptionKey; // SYNTAX ERROR

    console.log("Encrypting...");
    return `[ENCRYPTED] ${header} + ${body.length} chars`;
  }

  overrideWrite(text) {
    this._content = ""; // allowed (protected)
    this._resetRevision(); // allowed (protected)
    this.write(text); // calls public method
  }
}

// ------------------ Access Matrix ------------------
export function printAccessMatrix() {
  console.log(`
╔═══════════════════════════════════════════════════════════════╗
║                  ACCESS MODIFIER MATRIX                       ║
╠═══════════════════════════════════════════════════════════════╣
║ Modifier    │ Same Class │ Subclass │ External │ Enforced?   ║
╠═════════════╪════════════╪══════════╪══════════╪═════════════╣
║ public      │     ✓      │    ✓     │    ✓     │     —       ║
║ _protected  │     ✓      │    ✓     │    ✓     │  NO (conv)  ║
║ #private    │     ✓      │    ✗     │    ✗     │  YES        ║
╚═══════════════════════════════════════════════════════════════╝
  `);
}
