import CommonResponse from "../dto/CommonResponse.js";

/**
 * GLOBAL PASSPORT VALIDATION PATTERNS
 * Covers ISO-3166 countries via generalized rules
 */
const passportPatterns = {

    // ─────────────────────────────────────────
    // 🌍 DEFAULT (fallback for ALL countries)
    // ─────────────────────────────────────────
    DEFAULT: /^[A-Z0-9]{6,12}$/,

    // ─────────────────────────────────────────
    // 🇺🇸 Americas
    // ─────────────────────────────────────────

    US: /^[0-9]{9}$/,                 // USA
    CA: /^[A-Z0-9]{8,9}$/,            // Canada
    MX: /^[A-Z0-9]{9,10}$/,           // Mexico
    BR: /^[A-Z0-9]{8}$/,              // Brazil
    AR: /^[A-Z0-9]{9}$/,              // Argentina
    CL: /^[A-Z0-9]{8,9}$/,           // Chile
    CO: /^[A-Z0-9]{6,10}$/,           // Colombia
    PE: /^[A-Z0-9]{8,9}$/,           // Peru

    // Caribbean (generic format)
    JM: /^[A-Z0-9]{7,9}$/,
    BS: /^[A-Z0-9]{6,9}$/,
    TT: /^[A-Z0-9]{8,9}$/,

    // ─────────────────────────────────────────
    // 🇪🇺 Europe
    // ─────────────────────────────────────────

    GB: /^[0-9]{9}$/,                  // UK
    DE: /^[C-F0-9][0-9]{8}$/,         // Germany
    FR: /^[0-9A-Z]{2}[0-9]{7}$/,      // France
    IT: /^[A-Z0-9]{9}$/,              // Italy
    ES: /^[A-Z0-9]{9}$/,              // Spain
    NL: /^[A-Z0-9]{9}$/,              // Netherlands
    BE: /^[A-Z0-9]{8}$/,
    CH: /^[A-Z0-9]{9}$/,
    SE: /^[A-Z0-9]{8,9}$/,
    NO: /^[A-Z0-9]{6,9}$/,

    // Eastern Europe
    RU: /^[0-9]{9}$/,
    UA: /^[A-Z0-9]{8,9}$/,
    PL: /^[A-Z0-9]{9}$/,
    RO: /^[A-Z0-9]{8,9}$/,

    // ─────────────────────────────────────────
    // 🇦🇸 Asia
    // ─────────────────────────────────────────

    IN: /^(?:[A-Z][0-9]{7}|[A-Z]{2}[0-9]{6,7})$/,            // India
    LK: /^(?:D[0-9]{7}|O[0-9]{7}|S[0-9]{7}|[A-Z]{1}[0-9]{7}|[A-Z]{2}[0-9]{6,7})$/,            // Sri Lanka
    PK: /^(?:[A-Z]{2}[0-9]{7}|[A-Z][0-9]{7}|[A-Z]{2}[0-9]{6,8})$/,              // Pakistan
    BD: /^[A-Z0-9]{8,10}$/,
    CN: /^(?:[EG][0-9]{8}|D[0-9]{8}|O[0-9]{8}|S[0-9]{8}|K[0-9]{8}|M[0-9]{8})$/,             // China (approx rule)
    JP: /^[A-Z0-9]{2}[0-9]{7}$/,      // Japan
    KR: /^[A-Z0-9]{8,9}$/,
    NP: /^[0-9]{8,9}$/,
    TH: /^[A-Z0-9]{8,9}$/,
    MY: /^[A-Z0-9]{8,9}$/,
    SG: /^[A-Z0-9]{9}$/,
    PH: /^[A-Z0-9]{9}$/,
    VN: /^[A-Z0-9]{7,9}$/,

    // Middle East
    AE: /^[A-Z0-9]{7,9}$/,
    SA: /^[A-Z0-9]{8}$/,
    QA: /^[A-Z0-9]{7,9}$/,
    KW: /^[A-Z0-9]{8,9}$/,
    TR: /^[A-Z0-9]{9}$/,

    // ─────────────────────────────────────────
    // 🌍 Africa
    // ─────────────────────────────────────────

    ZA: /^[A-Z0-9]{8,9}$/,
    NG: /^[A-Z0-9]{8,9}$/,
    KE: /^[A-Z0-9]{8,9}$/,
    EG: /^[A-Z0-9]{8,9}$/,
    GH: /^[A-Z0-9]{8,9}$/,
    ET: /^[A-Z0-9]{8,9}$/,

    // ─────────────────────────────────────────
    // 🌏 Oceania
    // ─────────────────────────────────────────

    AU: /^[A-Z0-9]{8,9}$/,            // Australia
    NZ: /^[A-Z0-9]{8,9}$/,            // New Zealand
    FJ: /^[A-Z0-9]{7,9}$/,

};

/**
 * Validate Passport Number
 */
export function validatePassport(passport, countryCode = "DEFAULT") {

    if (typeof passport !== "string") {
        return CommonResponse.failure(
            "Passport must be a string",
            null,
            400
        );
    }

    const cleanPassport = passport
        .replace(/[\s\-]/g, "")
        .toUpperCase();

    const pattern = passportPatterns[countryCode] || passportPatterns.DEFAULT;

    if (!pattern) {
        return CommonResponse.failure(
            "Unsupported country code",
            null,
            400
        );
    }

    const isValid = pattern.test(cleanPassport);

    if (!isValid) {
        return CommonResponse.failure(
            "Invalid passport format",
            null,
            400
        );
    }

    return CommonResponse.success(
        cleanPassport,
        "Passport is valid",
        200
    );
}