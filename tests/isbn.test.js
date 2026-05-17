import ValidationMaster from "../src/index.js";

describe("validateIsbn", () => {

    // ===============================
    // TYPE VALIDATION
    // ===============================
    test("should fail when input is not string", () => {
        const result = ValidationMaster.isbn(1234567890);

        expect(result.status).toBe(400);
        expect(result.message).toBe("ISBN must be a string");
    });

    // ===============================
    // FORMAT VALIDATION
    // ===============================
    test("should fail for invalid ISBN format", () => {
        const result = ValidationMaster.isbn("ABC1234567");

        expect(result.status).toBe(400);
        expect(result.message).toBe("Invalid ISBN format");
    });

    // ===============================
    // ISBN-10 VALID CASE
    // ===============================
    test("should validate correct ISBN-10", () => {
        const result = ValidationMaster.isbn("0306406152");

        expect(result.status).toBe(200);
        expect(result.message).toBe("Valid ISBN");
        expect(result.data.type).toBe("ISBN-10");
        expect(result.data.valid).toBe(true);
    });

    // ISBN-10 with X check digit
    test("should validate ISBN-10 with X check digit", () => {
        const result = ValidationMaster.isbn("097522980X");

        expect(result.status).toBe(200);
        expect(result.data.type).toBe("ISBN-10");
        expect(result.data.valid).toBe(true);
    });

    // ===============================
    // ISBN-10 INVALID CASE
    // ===============================
    test("should fail invalid ISBN-10 check digit", () => {
        const result = ValidationMaster.isbn("0306406153");

        expect(result.status).toBe(400);
        expect(result.message).toBe("Invalid ISBN check digit");
    });

    // ===============================
    // ISBN-13 VALID CASE
    // ===============================
    test("should validate correct ISBN-13", () => {
        const result = ValidationMaster.isbn("9780306406157");

        expect(result.status).toBe(200);
        expect(result.data.type).toBe("ISBN-13");
        expect(result.data.valid).toBe(true);
    });

    // ISBN-13 with hyphens
    test("should validate ISBN-13 with hyphens", () => {
        const result = ValidationMaster.isbn("978-0-306-40615-7");

        expect(result.status).toBe(200);
        expect(result.data.type).toBe("ISBN-13");
        expect(result.data.valid).toBe(true);
    });

    // ===============================
    // ISBN-13 INVALID CASE
    // ===============================
    test("should fail invalid ISBN-13 check digit", () => {
        const result = ValidationMaster.isbn("9780306406158");

        expect(result.status).toBe(400);
        expect(result.message).toBe("Invalid ISBN check digit");
    });

    // ===============================
    // EDGE CASES
    // ===============================
    test("should fail unknown ISBN length", () => {
        const result = ValidationMaster.isbn("12345");

        expect(result.status).toBe(400);
        expect(result.message).toBe("Invalid ISBN format");
    });

    test("should fail empty string", () => {
        const result = ValidationMaster.isbn("");

        expect(result.status).toBe(400);
        expect(result.message).toBe("Invalid ISBN format");
    });

});