import CommonResponse from "../dto/CommonResponse";

export function validateStrengthPassport(password) {
    if (typeof password !== "string") {
        return CommonResponse.failure(
            "Password must be a string",
            null,
            400
        );
    }

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isLongEnough = password.length >= 8;

    if (!hasUpperCase) {
        return CommonResponse.failure(
            "Password must contain at least one uppercase letter",
            null,
            400
        );
    }

    if (!hasLowerCase) {
        return CommonResponse.failure(
            "Password must contain at least one lowercase letter",
            null,
            400
        );
    }

    if (!hasDigit) {
        return CommonResponse.failure(
            "Password must contain at least one digit",
            null,
            400
        );
    }

    if (!hasSpecialChar) {
        return CommonResponse.failure(
            "Password must contain at least one special character",
            null,
            400
        );
    }

    if (!isLongEnough) {
        return CommonResponse.failure(
            "Password must be at least 8 characters long",
            null,
            400
        );
    }

    return CommonResponse.success("Success","Password is strong enough", 200);
}