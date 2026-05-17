import ValidationMaster from "../src/index.js";

describe("Email Validation Tests", () => {

  test("valid email should pass", () => {
    const result = ValidationMaster.email("test@gmail.com");

    expect(result.success).toBe(true);
    expect(result.status).toBe(200);
    expect(result.message).toBe("Email is valid");
  });

  test("email without @ should fail", () => {
    const result = ValidationMaster.email("testgmail.com");

    expect(result.success).toBe(false);
    expect(result.status).toBe(400);
    expect(result.message).toBe("Invalid email format");
  });

  test("email without domain should fail", () => {
    const result = ValidationMaster.email("test@");

    expect(result.success).toBe(false);
    expect(result.status).toBe(400);
    expect(result.message).toBe("Invalid email format");
  });

  test("email with spaces should fail", () => {
    const result = ValidationMaster.email("test @gmail.com");

    expect(result.success).toBe(false);
    expect(result.status).toBe(400);
    expect(result.message).toBe("Invalid email format");
  });

  test("empty email should fail", () => {
    const result = ValidationMaster.email("");

    expect(result.success).toBe(false);
    expect(result.status).toBe(400);
    expect(result.message).toBe("Invalid email format");
  });

  test("non-string email should fail", () => {
    const result = ValidationMaster.email(12345);

    expect(result.success).toBe(false);
    expect(result.status).toBe(400);
    expect(result.message).toBe("Email must be a string");
  });

});