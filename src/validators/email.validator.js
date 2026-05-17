import CommonResponse from "../dto/CommonResponse";

export function validateEmail(email) {
  if (typeof email !== "string") {
    return CommonResponse.failure("Email must be a string", null, 400);
  }

  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isValid = pattern.test(email);

  if (!isValid) {
    return CommonResponse.failure("Invalid email format", null, 400);
  }

  return CommonResponse.success(null, "Email is valid", 200);
}