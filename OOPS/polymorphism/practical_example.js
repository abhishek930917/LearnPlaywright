// ============================================================================
// PRACTICAL REAL-WORLD EXAMPLE: PAYMENT PROCESSING SYSTEM
// ============================================================================

/*
This example demonstrates ALL forms of polymorphism working together
in a real-world scenario: a payment processing system.

CONCEPTS USED:
1. Method Overriding (Runtime Polymorphism) - different payment methods
2. Duck Typing - any object with process() can be a payment provider
3. Ad-hoc Polymorphism - flexible function arguments
4. Composition - building complex behaviors from simple parts
*/


// ----------------------------------------------------------------------------
// BASE PAYMENT CLASS (Template)
// ----------------------------------------------------------------------------

class Payment {
    constructor(amount, currency = "USD") {
        this.amount = amount;
        this.currency = currency;
        this.status = "pending";
        this.transactionId = this.#generateId();
    }

    #generateId() {
        return "TXN-" + Math.random().toString(36).substr(2, 9).toUpperCase();
    }

    // Template method - should be overridden
    process() {
        throw new Error("process() must be implemented by subclass");
    }

    // Template method - should be overridden
    refund() {
        throw new Error("refund() must be implemented by subclass");
    }

    // Common method - shared by all payments
    getReceipt() {
        return {
            transactionId: this.transactionId,
            amount: this.amount,
            currency: this.currency,
            status: this.status,
            timestamp: new Date().toISOString()
        };
    }

    // Common method
    log(message) {
        console.log(`[${this.transactionId}] ${message}`);
    }
}


// ----------------------------------------------------------------------------
// CONCRETE PAYMENT IMPLEMENTATIONS (Runtime Polymorphism)
// ----------------------------------------------------------------------------

class CreditCardPayment extends Payment {
    constructor(amount, currency, cardNumber, cvv, expiry) {
        super(amount, currency);
        this.cardLastFour = cardNumber.slice(-4);
        this.cvv = cvv; // In real apps, NEVER store CVV!
        this.expiry = expiry;
    }

    process() {
        this.log(`Processing Credit Card ending in ${this.cardLastFour}...`);
        // Simulate validation
        if (this.cvv.length === 3) {
            this.status = "completed";
            this.log(`Charged $${this.amount} to card ****${this.cardLastFour}`);
            return { success: true, method: "Credit Card" };
        } else {
            this.status = "failed";
            this.log("Invalid CVV");
            return { success: false, error: "Invalid CVV" };
        }
    }

    refund() {
        this.log(`Refunding $${this.amount} to card ****${this.cardLastFour}...`);
        this.status = "refunded";
        return { success: true, method: "Credit Card Refund" };
    }
}

class PayPalPayment extends Payment {
    constructor(amount, currency, email) {
        super(amount, currency);
        this.email = email;
    }

    process() {
        this.log(`Processing PayPal payment for ${this.email}...`);
        if (this.email.includes("@")) {
            this.status = "completed";
            this.log(`PayPal charge of $${this.amount} successful`);
            return { success: true, method: "PayPal" };
        } else {
            this.status = "failed";
            this.log("Invalid PayPal email");
            return { success: false, error: "Invalid email" };
        }
    }

    refund() {
        this.log(`Refunding $${this.amount} to PayPal account ${this.email}...`);
        this.status = "refunded";
        return { success: true, method: "PayPal Refund" };
    }
}

class CryptoPayment extends Payment {
    constructor(amount, currency, walletAddress, cryptoType) {
        super(amount, currency);
        this.walletAddress = walletAddress;
        this.cryptoType = cryptoType;
    }

    process() {
        this.log(`Processing ${this.cryptoType} payment from ${this.walletAddress.slice(0, 10)}...`);
        if (this.walletAddress.length > 20) {
            this.status = "completed";
            this.log(`Crypto transfer of $${this.amount} (${this.cryptoType}) confirmed`);
            return { success: true, method: this.cryptoType };
        } else {
            this.status = "failed";
            this.log("Invalid wallet address");
            return { success: false, error: "Invalid wallet" };
        }
    }

    refund() {
        this.log(`Initiating ${this.cryptoType} refund to ${this.walletAddress.slice(0, 10)}...`);
        this.status = "refunded";
        return { success: true, method: `${this.cryptoType} Refund` };
    }
}

class BankTransferPayment extends Payment {
    constructor(amount, currency, accountNumber, bankName) {
        super(amount, currency);
        this.accountNumber = accountNumber;
        this.bankName = bankName;
    }

    process() {
        this.log(`Processing bank transfer via ${this.bankName}...`);
        this.status = "pending"; // Bank transfers take time
        this.log(`Bank transfer of $${this.amount} initiated (may take 1-3 days)`);
        return { success: true, method: "Bank Transfer", note: "Processing time: 1-3 days" };
    }

    refund() {
        this.log(`Initiating bank refund to account ${this.accountNumber.slice(-4)}...`);
        this.status = "refunded";
        return { success: true, method: "Bank Transfer Refund" };
    }
}


// ----------------------------------------------------------------------------
// DUCK TYPING: CUSTOM PAYMENT (No inheritance needed!)
// ----------------------------------------------------------------------------

console.log("=== CUSTOM PAYMENT VIA DUCK TYPING ===");

const customPayment = {
    amount: 50,
    currency: "USD",
    status: "pending",
    transactionId: "TXN-CUSTOM-001",

    process() {
        console.log(`[${this.transactionId}] Processing custom payment method...`);
        this.status = "completed";
        return { success: true, method: "Custom Payment" };
    },

    refund() {
        console.log(`[${this.transactionId}] Processing custom refund...`);
        this.status = "refunded";
        return { success: true, method: "Custom Refund" };
    },

    getReceipt() {
        return {
            transactionId: this.transactionId,
            amount: this.amount,
            currency: this.currency,
            status: this.status
        };
    }
};


// ----------------------------------------------------------------------------
// POLYMORPHIC PAYMENT PROCESSOR
// ----------------------------------------------------------------------------
// This is the KEY function - it works with ANY payment type!

class PaymentProcessor {
    #payments = [];
    #revenue = 0;

    // Ad-hoc polymorphism: accepts any payment-like object
    processPayment(payment) {
        console.log(`\n--- Processing New Payment ---`);

        // Duck typing check: does it look like a payment?
        if (typeof payment.process !== "function") {
            console.error("Invalid payment object: missing process() method");
            return null;
        }

        const result = payment.process();

        if (result && result.success) {
            this.#payments.push(payment);
            this.#revenue += payment.amount;
            console.log(`Payment Successful! Method: ${result.method}`);
        } else {
            console.log(`Payment Failed: ${result?.error || "Unknown error"}`);
        }

        return result;
    }

    // Polymorphic refund
    refundPayment(payment) {
        console.log(`\n--- Processing Refund ---`);

        if (typeof payment.refund !== "function") {
            console.error("Invalid payment object: missing refund() method");
            return null;
        }

        const result = payment.refund();
        if (result.success) {
            this.#revenue -= payment.amount;
            console.log(`Refund processed via ${result.method}`);
        }
        return result;
    }

    // Works with any payment type
    printReceipt(payment) {
        const receipt = payment.getReceipt ? payment.getReceipt() : payment;
        console.log("\n--- Receipt ---");
        console.log(JSON.stringify(receipt, null, 2));
    }

    getStats() {
        return {
            totalTransactions: this.#payments.length,
            totalRevenue: this.#revenue,
            payments: this.#payments.map(p => ({
                id: p.transactionId,
                amount: p.amount,
                status: p.status
            }))
        };
    }
}


// ----------------------------------------------------------------------------
// RUNNING THE SYSTEM
// ----------------------------------------------------------------------------

console.log("=== PAYMENT PROCESSING SYSTEM DEMO ===\n");

const processor = new PaymentProcessor();

// Process different payment types through the SAME interface!
const payments = [
    new CreditCardPayment(100, "USD", "4111111111111234", "123", "12/25"),
    new PayPalPayment(250, "USD", "customer@example.com"),
    new CryptoPayment(500, "USD", "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb", "Bitcoin"),
    new BankTransferPayment(1000, "USD", "000123456789", "Chase Bank"),
    customPayment // Duck-typed payment (no class!)
];

// Process all payments polymorphically
payments.forEach(payment => processor.processPayment(payment));

// Print all receipts
console.log("\n\n=== ALL RECEIPTS ===");
payments.forEach(payment => processor.printReceipt(payment));

// Show stats
console.log("\n\n=== SYSTEM STATS ===");
console.log(JSON.stringify(processor.getStats(), null, 2));

// Refund one payment
console.log("\n\n=== PROCESSING REFUND ===");
processor.refundPayment(payments[1]); // Refund the PayPal payment


// ----------------------------------------------------------------------------
// EXTENDING THE SYSTEM (No existing code changes needed!)
// ----------------------------------------------------------------------------

console.log("\n\n=== EXTENDING THE SYSTEM ===");
console.log("Adding a new payment type WITHOUT modifying PaymentProcessor!");

class ApplePayPayment extends Payment {
    constructor(amount, currency, deviceId) {
        super(amount, currency);
        this.deviceId = deviceId;
    }

    process() {
        this.log(`Processing Apple Pay from device ${this.deviceId}...`);
        this.status = "completed";
        return { success: true, method: "Apple Pay" };
    }

    refund() {
        this.log(`Refunding Apple Pay transaction...`);
        this.status = "refunded";
        return { success: true, method: "Apple Pay Refund" };
    }
}

const applePay = new ApplePayPayment(75, "USD", "iPhone-15-Pro");
processor.processPayment(applePay);
processor.printReceipt(applePay);


// ============================================================================
// SUMMARY
// ============================================================================
console.log("\n\n=== PRACTICAL POLYMORPHISM SUMMARY ===");
console.log(`
REAL-WORLD EXAMPLE: Payment Processing System

POLYMORPHISM DEMONSTRATED:
--------------------------
1. RUNTIME POLYMORPHISM (Method Overriding):
   - CreditCardPayment, PayPalPayment, CryptoPayment all override process()
   - PaymentProcessor calls process() without knowing the specific type
   - The CORRECT version runs based on the ACTUAL object type

2. DUCK TYPING:
   - customPayment is a plain object, not a class instance
   - It works because it has the required methods: process(), refund(), getReceipt()
   - PaymentProcessor doesn't care about inheritance, only behavior

3. AD-HOC POLYMORPHISM (Simulated):
   - Payment constructors accept different arguments
   - getReceipt() returns a consistent shape regardless of payment type

4. EXTENSIBILITY:
   - Added ApplePayPayment without changing ANY existing code
   - This is the Open/Closed Principle: open for extension, closed for modification

KEY TAKEAWAY:
-------------
Polymorphism allows you to:
- Write generic code that works with future types
- Add new functionality without breaking existing code
- Treat different objects uniformly through a common interface
- Build flexible, maintainable systems
`);
