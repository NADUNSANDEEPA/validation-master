import ValidationMaster from "../src/index.js";

describe("Random ID Generation", () => {

    test("should generate NUMBER type random id with prefix", () => {

        const result = ValidationMaster.generateId("EMP", 6, "NUMBER");

        expect(result.status).toBe(200);
        expect(result.message).toBe("Random ID generated successfully");

        expect(result.data.id.startsWith("EMP")).toBe(true);

        const generatedPart = result.data.id.replace("EMP", "");

        expect(generatedPart).toMatch(/^\d+$/);
        expect(generatedPart.length).toBe(6);

    });

    test("should generate NUMBER_AND_LETTER type random id with prefix", () => {

        const result = ValidationMaster.generateId("USR", 8, "NUMBER_AND_LETTER");

        expect(result.status).toBe(200);
        expect(result.message).toBe("Random ID generated successfully");

        expect(result.data.id.startsWith("USR")).toBe(true);

        const generatedPart = result.data.id.replace("USR", "");

        expect(generatedPart).toMatch(/^[a-z0-9]+$/);
        expect(generatedPart.length).toBe(8);

    });

    test("should generate default random id when type is invalid", () => {

        const result = ValidationMaster.generateId("INV", 5, "UNKNOWN");

        expect(result.status).toBe(200);

        expect(result.data.id.startsWith("INV")).toBe(true);

        const generatedPart = result.data.id.replace("INV", "");

        expect(generatedPart).toMatch(/^[a-z0-9]+$/);
        expect(generatedPart.length).toBe(5);

    });

    test("should use default prefix ID when prefix is not a string", () => {

        const result = ValidationMaster.generateId(12345, 6, "NUMBER");

        expect(result.status).toBe(200);

        expect(result.data.id.startsWith("ID")).toBe(true);

    });

    test("should generate random id without prefix when prefix is null", () => {

        const result = ValidationMaster.generateId(null, 6, "NUMBER");

        expect(result.status).toBe(200);

        expect(result.data.id.length).toBe(6);

    });

    test("should generate random id without prefix when prefix is undefined", () => {

        const result = ValidationMaster.generateId(undefined, 4, "NUMBER");

        expect(result.status).toBe(200);

        expect(result.data.id.length).toBe(4);

    });

    test("should generate alphanumeric id by default", () => {

        const result = ValidationMaster.generateId("TEST", 10);

        expect(result.status).toBe(200);

        expect(result.data.id.startsWith("TEST")).toBe(true);

        const generatedPart = result.data.id.replace("TEST", "");

        expect(generatedPart).toMatch(/^[a-z0-9]+$/);
        expect(generatedPart.length).toBe(10);

    });

    test("should generate unique ids", () => {

        const result1 = ValidationMaster.generateId("ORD", 8, "NUMBER_AND_LETTER");
        const result2 = ValidationMaster.generateId("ORD", 8, "NUMBER_AND_LETTER");

        expect(result1.data.id).not.toBe(result2.data.id);

    });

});