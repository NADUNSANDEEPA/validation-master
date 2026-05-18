import ValidationMaster from "../src/index.js";

describe("Driving Licence Validation Tests", () => {

    // ===============================
    // TYPE CHECK
    // ===============================
    test("should fail when input is not string", () => {
        const result = ValidationMaster.drivingLicence(123456);

        expect(result.status).toBe(400);
        expect(result.message).toBe("Driving licence number must be a string");
    });

    // ===============================
    // EMPTY INPUT
    // ===============================
    test("should fail when input is empty string", () => {
        const result = ValidationMaster.drivingLicence("   ");

        expect(result.status).toBe(400);
        expect(result.message).toBe("Driving licence number cannot be empty");
    });

    // ===============================
    // VALID COUNTRY FORMAT (Sri Lanka example)
    // ===============================
    test("should validate Sri Lanka driving licence format", () => {
        const result = ValidationMaster.drivingLicence("B1234567", "LK");

        expect(result.status).toBe(200);
        expect(result.message).toBe("Valid driving licence number");
        expect(result.data).toBe("B1234567");
    });

    // ===============================
    // NORMALIZATION (uppercase + trim)
    // ===============================
    test("should normalize lowercase input", () => {
        const result = ValidationMaster.drivingLicence(" b1234567 ", "LK");

        expect(result.status).toBe(200);
        expect(result.data).toBe("B1234567");
    });

    // ===============================
    // INVALID FORMAT FOR COUNTRY
    // ===============================
    test("should fail invalid format for country", () => {
        const result = ValidationMaster.drivingLicence("INVALID123", "LK");

        expect(result.status).toBe(400);
        expect(result.message).toBe("Invalid driving licence number format");
    });

    // ===============================
    // DEFAULT PATTERN (fallback)
    // ===============================
    test("should validate using default pattern when country not provided", () => {
        const result = ValidationMaster.drivingLicence("ABC12345");

        expect(result.status).toBe(200);
        expect(result.message).toBe("Valid driving licence number");
    });

    // ===============================
    // UNSUPPORTED COUNTRY
    // ===============================
    test("should fail for unsupported country code", () => {
        const result = ValidationMaster.drivingLicence("ABC12345", "ZZ");

        expect(result.status).toBe(400);
        expect(result.message).toBe("Unsupported country code");
    });

    // ===============================
    // DEFAULT FALLBACK TEST
    // ===============================
    test("should validate using DEFAULT explicitly", () => {
        const result = ValidationMaster.drivingLicence("AB12CD34", "DEFAULT");

        expect(result.status).toBe(200);
        expect(result.message).toBe("Valid driving licence number");
    });

    // ===============================
    // EDGE CASE - LONG INVALID STRING
    // ===============================
    test("should fail long invalid input", () => {
        const result = ValidationMaster.drivingLicence("THIS_IS_NOT_VALID_123456789", "LK");

        expect(result.status).toBe(400);
    });

});