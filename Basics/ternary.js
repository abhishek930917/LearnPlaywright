// TERNARY OPERATOR IN JAVASCRIPT - REAL-LIFE PROJECT EXAMPLES
// ============================================================
//
// SYNTAX:
// condition ? expressionIfTrue : expressionIfFalse
//
// The ternary operator is the only JS operator that takes three operands.
// It is used extensively in real-world projects for clean, concise conditionals.


// ============================================
// REAL-LIFE EXAMPLE 1: E-COMMERCE PRODUCT CARD
// ============================================
// Scenario: Show product info based on stock availability

function getProductDisplay(product) {
    const stockStatus = product.inStock 
        ? `${product.quantity} items available` 
        : "Out of stock - Notify me";
    
    const priceDisplay = product.discountPercent > 0 
        ? `$${(product.price * (1 - product.discountPercent / 100)).toFixed(2)} (Save ${product.discountPercent}%)` 
        : `$${product.price.toFixed(2)}`;
    
    const buttonText = product.inStock 
        ? (product.quantity < 5 ? "Only few left - Buy now" : "Add to Cart") 
        : "Pre-order";

    return {
        title: product.name,
        price: priceDisplay,
        stock: stockStatus,
        button: buttonText
    };
}

const laptop = {
    name: "MacBook Pro 16",
    price: 2499.00,
    discountPercent: 10,
    inStock: true,
    quantity: 3
};

console.log("=== E-COMMERCE PRODUCT ===");
console.log(getProductDisplay(laptop));


// ============================================
// REAL-LIFE EXAMPLE 2: USER AUTHENTICATION
// ============================================
// Scenario: Dashboard greeting and access control

function getUserDashboardInfo(user) {
    const greeting = user.isAuthenticated
        ? `Welcome back, ${user.name || "User"}!`
        : "Welcome, Guest! Please sign in.";

    const accessLevel = user.role === "admin"
        ? "Full Access"
        : user.role === "editor"
        ? "Editor Access"
        : user.role === "viewer"
        ? "View Only"
        : "No Access";

    const canEdit = user.isAuthenticated && user.role === "admin" ? true : false;

    return { greeting, accessLevel, canEdit };
}

const currentUser = {
    isAuthenticated: true,
    name: "Sarah Chen",
    role: "admin"
};

console.log("\n=== USER AUTHENTICATION ===");
console.log(getUserDashboardInfo(currentUser));


// ============================================
// REAL-LIFE EXAMPLE 3: FORM VALIDATION
// ============================================
// Scenario: Real-time validation messages for a signup form

function validateField(fieldName, value, confirmValue = null) {
    const errors = {
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? null : "Enter a valid email address",
        password: value.length >= 8
            ? (/[A-Z]/.test(value) && /[0-9]/.test(value) ? null : "Must contain uppercase and number")
            : "Password must be at least 8 characters",
        confirmPassword: value === confirmValue ? null : "Passwords do not match",
        username: value.length >= 3 && value.length <= 20
            ? (/^[a-zA-Z0-9_]+$/.test(value) ? null : "Only letters, numbers, and underscores")
            : "Username must be 3-20 characters"
    };

    return fieldName in errors ? errors[fieldName] : "Unknown field";
}

console.log("\n=== FORM VALIDATION ===");
console.log("Email validation:", validateField("email", "sarah@example.com"));
console.log("Password validation:", validateField("password", "Pass1234"));
console.log("Weak password:", validateField("password", "123"));


// ============================================
// REAL-LIFE EXAMPLE 4: API RESPONSE HANDLING
// ============================================
// Scenario: Handle API responses with loading, success, and error states

function handleApiResponse(response) {
    const statusMessage = response.status === 200
        ? "Success"
        : response.status === 404
        ? "Not Found"
        : response.status === 500
        ? "Server Error"
        : "Unknown Error";

    const displayData = response.data && response.data.length > 0
        ? response.data
        : null;

    const userMessage = response.status === 200
        ? (displayData ? `Loaded ${response.data.length} records` : "No data available")
        : `Error ${response.status}: ${statusMessage}. Please try again.`;

    return {
        success: response.status === 200,
        message: userMessage,
        data: displayData
    };
}

const mockApiResponse = {
    status: 200,
    data: [
        { id: 1, title: "Project Alpha" },
        { id: 2, title: "Project Beta" }
    ]
};

console.log("\n=== API RESPONSE HANDLING ===");
console.log(handleApiResponse(mockApiResponse));

const errorApiResponse = {
    status: 500,
    data: null
};

console.log("Error response:", handleApiResponse(errorApiResponse));


// ============================================
// REAL-LIFE EXAMPLE 5: SHIPPING & CHECKOUT
// ============================================
// Scenario: Calculate shipping cost and delivery estimate

function calculateShipping(cartTotal, deliveryMethod, isExpressMember) {
    const freeShippingThreshold = 50;
    
    const shippingCost = cartTotal >= freeShippingThreshold || isExpressMember
        ? 0
        : deliveryMethod === "express"
        ? 15.99
        : deliveryMethod === "standard"
        ? 5.99
        : 0;

    const deliveryDays = deliveryMethod === "express"
        ? 1
        : deliveryMethod === "standard"
        ? 5
        : 3;

    const shippingLabel = shippingCost === 0
        ? "FREE Shipping"
        : `Shipping: $${shippingCost.toFixed(2)}`;

    const finalTotal = (cartTotal + shippingCost).toFixed(2);

    return {
        shippingCost,
        deliveryDays,
        shippingLabel,
        finalTotal: `$${finalTotal}`
    };
}

console.log("\n=== SHIPPING & CHECKOUT ===");
console.log("Standard order ($30):", calculateShipping(30, "standard", false));
console.log("Express member ($30):", calculateShipping(30, "standard", true));
console.log("Big order ($75):", calculateShipping(75, "express", false));


// ============================================
// REAL-LIFE EXAMPLE 6: NOTIFICATION BADGE
// ============================================
// Scenario: Show notification count on app icon or bell icon

function getNotificationBadge(count) {
    const displayCount = count > 99 
        ? "99+" 
        : count > 0 
        ? String(count) 
        : null;
    
    const badgeColor = count > 10 
        ? "red" 
        : count > 0 
        ? "orange" 
        : "none";
    
    const ariaLabel = count === 0 
        ? "No new notifications" 
        : `${count} unread notification${count !== 1 ? "s" : ""}`;

    return {
        display: displayCount,
        color: badgeColor,
        ariaLabel: ariaLabel,
        showBadge: count > 0
    };
}

console.log("\n=== NOTIFICATION BADGE ===");
console.log("0 notifications:", getNotificationBadge(0));
console.log("5 notifications:", getNotificationBadge(5));
console.log("150 notifications:", getNotificationBadge(150));


// ============================================
// REAL-LIFE EXAMPLE 7: PAYMENT PROCESSING
// ============================================
// Scenario: Show payment method details and confirmation message

function getPaymentSummary(method, amount, isSavedCard) {
    const methodDisplay = method.type === "credit_card"
        ? `Card ending in ${method.last4}`
        : method.type === "paypal"
        ? "PayPal Account"
        : method.type === "bank_transfer"
        ? `Bank Account (***${method.last4})`
        : "Unknown Payment Method";

    const securityNote = method.type === "credit_card" && !isSavedCard
        ? "This card will be saved for future purchases"
        : isSavedCard
        ? "Using saved payment method"
        : null;

    const confirmationMessage = amount > 0
        ? `Confirm payment of $${amount.toFixed(2)} using ${methodDisplay}?`
        : "Invalid payment amount";

    return {
        method: methodDisplay,
        amount: `$${amount.toFixed(2)}`,
        message: confirmationMessage,
        note: securityNote
    };
}

const paymentMethod = {
    type: "credit_card",
    last4: "4242"
};

console.log("\n=== PAYMENT PROCESSING ===");
console.log(getPaymentSummary(paymentMethod, 129.99, false));


// ============================================
// REAL-LIFE EXAMPLE 8: SEARCH & FILTER RESULTS
// ============================================
// Scenario: Display search results with highlighting and no-results state

function formatSearchResult(query, results, totalCount) {
    const resultText = totalCount === 0
        ? `No results found for "${query}"`
        : totalCount === 1
        ? `1 result for "${query}"`
        : `${totalCount} results for "${query}"`;

    const suggestion = totalCount === 0
        ? `Try searching for "${query.slice(0, 3)}" or check your spelling`
        : null;

    const pageInfo = results.length < totalCount
        ? `Showing ${results.length} of ${totalCount}`
        : null;

    return {
        heading: resultText,
        suggestion: suggestion,
        pagination: pageInfo,
        hasResults: totalCount > 0
    };
}

console.log("\n=== SEARCH & FILTER ===");
console.log(formatSearchResult("wireless mouse", [{ id: 1 }, { id: 2 }], 2));
console.log(formatSearchResult("xyz123", [], 0));


// ============================================
// REAL-LIFE EXAMPLE 9: FEATURE FLAGS (A/B TESTING)
// ============================================
// Scenario: Toggle features based on user group or settings

function getFeatureFlags(user) {
    const showNewDashboard = user.betaTester || user.plan === "pro"
        ? true
        : false;

    const maxUploadSize = user.plan === "pro"
        ? 100 // MB
        : user.plan === "basic"
        ? 10
        : 2;

    const theme = user.prefersDarkMode ? "dark" : "light";

    const supportAccess = user.plan === "pro"
        ? "priority"
        : user.plan === "basic"
        ? "standard"
        : "community";

    return {
        newDashboard: showNewDashboard,
        uploadLimitMB: maxUploadSize,
        theme: theme,
        support: supportAccess,
        adsEnabled: user.plan === "free"
    };
}

const proUser = {
    plan: "pro",
    betaTester: false,
    prefersDarkMode: true
};

console.log("\n=== FEATURE FLAGS ===");
console.log("Pro user features:", getFeatureFlags(proUser));


// ============================================
// REAL-LIFE EXAMPLE 10: ORDER STATUS TRACKING
// ============================================
// Scenario: E-commerce order status display with progress steps

function getOrderStatusInfo(status, estimatedDelivery) {
    const statusMessage = status === "delivered"
        ? "Your order has been delivered!"
        : status === "shipped"
        ? `On the way! Expected by ${estimatedDelivery}`
        : status === "processing"
        ? "We're preparing your order"
        : status === "cancelled"
        ? "This order was cancelled"
        : "Order placed - Awaiting confirmation";

    const progressPercent = status === "delivered"
        ? 100
        : status === "shipped"
        ? 75
        : status === "processing"
        ? 50
        : status === "placed"
        ? 25
        : 0;

    const actionRequired = status === "delivered"
        ? "Leave a review"
        : status === "cancelled"
        ? "Contact support for refund"
        : null;

    return {
        status: statusMessage,
        progress: `${progressPercent}%`,
        action: actionRequired,
        isComplete: status === "delivered"
    };
}

console.log("\n=== ORDER STATUS TRACKING ===");
console.log(getOrderStatusInfo("shipped", "May 22, 2026"));
console.log(getOrderStatusInfo("delivered", null));


// ============================================
// BONUS: TERNARY IN TEMPLATE LITERAL (UI String)
// ============================================
// Scenario: Build dynamic HTML/CSS class strings

function buildButtonClasses(variant, size, isDisabled) {
    const baseClass = "btn";
    const variantClass = variant === "primary"
        ? "btn-primary"
        : variant === "danger"
        ? "btn-danger"
        : "btn-secondary";

    const sizeClass = size === "large"
        ? "btn-lg"
        : size === "small"
        ? "btn-sm"
        : "btn-md";

    const stateClass = isDisabled ? "btn-disabled" : "btn-active";

    return `${baseClass} ${variantClass} ${sizeClass} ${stateClass}`.trim();
}

console.log("\n=== UI CLASS BUILDER ===");
console.log("Primary large button:", buildButtonClasses("primary", "large", false));
console.log("Danger small disabled:", buildButtonClasses("danger", "small", true));


// ============================================
// NESTED TERNARY OPERATORS EXPLAINED
// ============================================
//
// A NESTED ternary means using a ternary operator INSIDE another
// ternary operator. It is useful when you have MORE THAN TWO outcomes.
//
// IMPORTANT RULE: Use nested ternaries only for 2-3 levels.
// Beyond that, use if-else or a lookup object for readability.
//
// STRUCTURE:
// condition1 ? resultA :
// condition2 ? resultB :
// condition3 ? resultC :
//              defaultResult;

function getShippingPriorityLabel(days) {
    // 2-level nested ternary - clean and readable
    const label = days <= 1
        ? "Express (Same Day)"
        : days <= 3
        ? "Fast (1-3 Days)"
        : days <= 7
        ? "Standard (3-7 Days)"
        : "Economy (7+ Days)";

    // Equivalent if-else (much more verbose)
    // let label;
    // if (days <= 1) {
    //     label = "Express (Same Day)";
    // } else if (days <= 3) {
    //     label = "Fast (1-3 Days)";
    // } else if (days <= 7) {
    //     label = "Standard (3-7 Days)";
    // } else {
    //     label = "Economy (7+ Days)";
    // }

    return label;
}

console.log("\n=== NESTED TERNARY EXAMPLES ===");
console.log("Same day:", getShippingPriorityLabel(1));
console.log("2 days:", getShippingPriorityLabel(2));
console.log("5 days:", getShippingPriorityLabel(5));
console.log("10 days:", getShippingPriorityLabel(10));


// --------------------------------------------
// BAD EXAMPLE: Over-nested (hard to read)
// --------------------------------------------
// Avoid this:
// const x = a > b ? (b > c ? (c > d ? c : d) : b) : (a > c ? a : c);
//
// GOOD: Use if-else or extract to a function with clear variable names.


// ============================================
// KEY TAKEAWAYS FOR REAL PROJECTS
// ============================================
//
// 1. Ternary operators keep UI logic concise and readable
// 2. Perfect for: status messages, badges, class names, conditional text
// 3. Nested ternaries are OK for 2-3 levels (e.g., role-based access)
// 4. Always prefer readability over "clever" one-liners
// 5. Combine with template literals for powerful dynamic strings

console.log("\n=== End of Real-Life Ternary Examples ===");
