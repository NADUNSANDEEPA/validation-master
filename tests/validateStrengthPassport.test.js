import ValidationMaster from "../src/index.js";

describe("validateStrengthPassport", () => {

    test("should return error if password is not a string", () => {
        const result = ValidationMaster.PasswordStrengthValidation(12345);

        expect(result.status).toBe(400);
        expect(result.message).toBe("Password must be a string");
    });

    test("should fail when missing uppercase letter", () => {
        const result = ValidationMaster.PasswordStrengthValidation("password1@");

        expect(result.status).toBe(400);
        expect(result.message).toBe("Password must contain at least one uppercase letter");
    });

    test("should fail when missing lowercase letter", () => {
        const result = ValidationMaster.PasswordStrengthValidation("PASSWORD1@");

        expect(result.status).toBe(400);
        expect(result.message).toBe("Password must contain at least one lowercase letter");
    });

    test("should fail when missing digit", () => {
        const result = ValidationMaster.PasswordStrengthValidation("Password@");

        expect(result.status).toBe(400);
        expect(result.message).toBe("Password must contain at least one digit");
    });

    test("should fail when missing special character", () => {
        const result = ValidationMaster.PasswordStrengthValidation("Password1");

        expect(result.status).toBe(400);
        expect(result.message).toBe("Password must contain at least one special character");
    });

    test("should fail when password is too short", () => {
        const result = ValidationMaster.PasswordStrengthValidation("P1@a");

        expect(result.status).toBe(400);
        expect(result.message).toBe("Password must be at least 8 characters long");
    });

    test("should pass with strong password", () => {
        const result = ValidationMaster.PasswordStrengthValidation("Kasun@#1234");
    
        expect(result.status).toBe(200);
        expect(result.message).toBe("Password is strong enough");
    });

});