// ============================================================
// STATIC vs INSTANCE — HEAD-TO-HEAD COMPARISON
// ============================================================

export class Player {
  // STATIC: shared by ALL players
  static maxHealth = 100;
  static playerCount = 0;
  static gameVersion = "v2.0";

  // INSTANCE: unique to EACH player object
  name;
  health;
  score;

  constructor(name) {
    this.name = name;
    this.health = Player.maxHealth; // instance reads static constant
    this.score = 0;
    Player.playerCount++;           // static counter incremented
  }

  // INSTANCE method — needs `this` to access instance data
  takeDamage(amount) {
    this.health -= amount;
    if (this.health < 0) this.health = 0;
    console.log(`${this.name} took ${amount} damage. Health: ${this.health}`);
  }

  // STATIC method — belongs to the class, no `this` instance context
  static getPlayerCount() {
    return Player.playerCount;
  }

  static resetAllPlayers() {
    console.log("Resetting game...");
    Player.playerCount = 0;
  }
}

// ------------------ Demonstration ------------------
export function compareStaticVsInstance() {
  console.log("=== BEFORE CREATING PLAYERS ===");
  console.log("Player Count (static):", Player.playerCount); // 0
  console.log("Max Health (static):", Player.maxHealth);     // 100

  const p1 = new Player("Alice");
  const p2 = new Player("Bob");
  const p3 = new Player("Charlie");

  console.log("\n=== AFTER CREATING 3 PLAYERS ===");
  console.log("Player Count (static):", Player.getPlayerCount()); // 3

  // Each player has their own health and score
  p1.takeDamage(20);
  p2.takeDamage(50);

  console.log("\n=== INDIVIDUAL PLAYER STATE ===");
  console.log(`${p1.name}: health=${p1.health}, score=${p1.score}`); // health=80
  console.log(`${p2.name}: health=${p2.health}, score=${p2.score}`); // health=50
  console.log(`${p3.name}: health=${p3.health}, score=${p3.score}`); // health=100

  // Changing static affects all future (and reading) instances
  console.log("\n=== CHANGING STATIC MAX HEALTH ===");
  Player.maxHealth = 150;
  const p4 = new Player("Diana");
  console.log(`${p4.name} spawned with health:`, p4.health); // 150

  // Reset
  Player.resetAllPlayers();
  console.log("\nCount after reset:", Player.playerCount); // 0
}

// ------------------ Memory Analogy ------------------
export function memoryAnalogy() {
  console.log(`
  MEMORY LAYOUT ANALOGY:
  ┌─────────────────────────────┐
  │        CLASS (Player)        │  ← One copy in memory
  │  static maxHealth = 100      │
  │  static playerCount = 0      │
  │  static getPlayerCount()     │
  └─────────────────────────────┘
            ↑
            │  All instances share this ONE copy
     ┌──────┴──────┐
     ↓             ↓
  ┌─────────┐   ┌─────────┐
  │ p1 obj  │   │ p2 obj  │     ← Many copies in memory
  │ name    │   │ name    │
  │ health  │   │ health  │
  │ score   │   │ score   │
  └─────────┘   └─────────┘
  `);
}
