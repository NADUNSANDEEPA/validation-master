import ValidationMaster from "../src/index.js";

describe("validateBankCardType", () => {

    test("should fail when card number is not a string", () => {
        const result = ValidationMaster.bankCardType(1234567890123456);

        expect(result.status).toBe(400);
        expect(result.message).toBe("Card number must be a string");
    });

    test("should detect Visa card", () => {
        const result = ValidationMaster.bankCardType("4111111111111111");

        expect(result.status).toBe(200);
        expect(result.data.cardType).toBe("Visa");
    });

    test("should detect Mastercard card", () => {
        const result = ValidationMaster.bankCardType("5500000000000004");

        expect(result.status).toBe(200);
        expect(result.data.cardType).toBe("Mastercard");
    });

    test("should detect American Express card", () => {
        const result = ValidationMaster.bankCardType("340000000000009");

        expect(result.status).toBe(200);
        expect(result.data.cardType).toBe("American Express");
    });

    test("should fail for unknown card type", () => {
        const result = ValidationMaster.bankCardType("1234567890123456");

        expect(result.status).toBe(400);
        expect(result.message).toBe("Unknown card type");
    });

    test("should detect Discover card", () => {
        const result = ValidationMaster.bankCardType("6011000000000004");

        expect(result.status).toBe(200);
        expect(result.data.cardType).toBe("Discover");
    });
});