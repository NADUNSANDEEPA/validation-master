import CommonResponse from "../dto/CommonResponse";

/**
 * Redux-style constant patterns (OLD + NEW combined approach)
 */
const ISBN_RULES = {
    ISBN10: {
        regex: /^\d{9}[\dX]$/,
    },
    ISBN13: {
        regex: /^(978|979)\d{10}$/
    }
};

/**
 * Normalize input (remove hyphens/spaces)
 */
function normalizeIsbn(value) {
    return value.replace(/[-\s]/g, "");
}

/**
 * ISBN-10 check digit validation
 */
function isValidIsbn10(isbn) {
    let sum = 0;

    for (let i = 0; i < 9; i++) {
        sum += (i + 1) * parseInt(isbn[i]);
    }

    let lastChar = isbn[9];
    let check = lastChar === "X" ? 10 : parseInt(lastChar);

    sum += 10 * check;

    return sum % 11 === 0;
}

/**
 * ISBN-13 check digit validation
 */
function isValidIsbn13(isbn) {
    let sum = 0;

    for (let i = 0; i < 12; i++) {
        let num = parseInt(isbn[i]);

        if (i % 2 === 0) {
            sum += num;
        } else {
            sum += num * 3;
        }
    }

    let checkDigit = (10 - (sum % 10)) % 10;

    return checkDigit === parseInt(isbn[12]);
}

/**
 * MAIN VALIDATION FUNCTION (Redux pattern style reducer logic)
 */
export function validateIsbn(value) {

    if (typeof value !== "string") {
        return CommonResponse.failure("ISBN must be a string", null, 400);
    }

    const isbn = normalizeIsbn(value);

    let result = {
        isbn,
        type: null,
        valid: false
    };

    // 🔹 ISBN-10 flow (OLD pattern)
    if (ISBN_RULES.ISBN10.regex.test(isbn)) {
        result.type = "ISBN-10";
        result.valid = isValidIsbn10(isbn);
    }

    // 🔹 ISBN-13 flow (NEW pattern)
    else if (ISBN_RULES.ISBN13.regex.test(isbn)) {
        result.type = "ISBN-13";
        result.valid = isValidIsbn13(isbn);
    }

    // ❌ Unknown format
    else {
        return CommonResponse.failure("Invalid ISBN format", null, 400);
    }

    // final response (Redux-like state result)
    if (result.valid) {
        return CommonResponse.success(
            result,
            "Valid ISBN",
            200
        );
    }

    return CommonResponse.failure(
        "Invalid ISBN check digit",
        result,
        400
    );
}