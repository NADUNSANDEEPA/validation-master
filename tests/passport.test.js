import ValidationMaster from "../src/index.js";


describe("Passport Validation Tests", () => {

    // ─────────────────────────────
    // 🇱🇰 Sri Lanka
    // ─────────────────────────────
    test("valid Sri Lankan passport should pass", () => {
        const result = ValidationMaster.passport("N9739554", "LK");

        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
        expect(result.message).toBe("Passport is valid");
    });

    test("invalid Sri Lankan passport should fail", () => {
        const result = ValidationMaster.passport("123", "LK");

        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────
    // 🇺🇸 United States
    // ─────────────────────────────
    test("valid US passport should pass", () => {
        const result = ValidationMaster.passport("123456789", "US");

        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid US passport should fail", () => {
        const result = ValidationMaster.passport("ABC123", "US");

        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────
    // 🇮🇳 India
    // ─────────────────────────────
    test("valid Indian passport should pass", () => {
        const result = ValidationMaster.passport("A1234567", "IN");

        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid Indian passport should fail", () => {
        const result = ValidationMaster.passport("12345", "IN");

        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────
    // 🌍 Default pattern
    // ─────────────────────────────
    test("valid default passport format should pass", () => {
        const result = ValidationMaster.passport("AB1234567");

        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid default passport format should fail", () => {
        const result = ValidationMaster.passport("12");

        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────
    // ❌ Edge cases
    // ─────────────────────────────
    test("passport with spaces should be cleaned and pass", () => {
        const result = ValidationMaster.passport("A 123 4567", "IN");

        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("passport with lowercase should be normalized", () => {
        const result = ValidationMaster.passport("a1234567", "IN");

        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("non-string passport should fail", () => {
        const result = ValidationMaster.passport(123456789, "US");

        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
        expect(result.message).toBe("Passport must be a string");
    });

    test("unsupported country should fallback to default", () => {
        const result = ValidationMaster.passport("AB1234567", "XYZ");

        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

});