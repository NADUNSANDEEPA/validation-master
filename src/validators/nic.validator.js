import CommonResponse from "../dto/CommonResponse";

const nicPatterns = {

    // ═══════════════════════════════════════════════════════
    // 🌏 SOUTH ASIA
    // ═══════════════════════════════════════════════════════

    // 🇱🇰 Sri Lanka — Old: 9 digits + V/X | New: 12 digits
    LK: /^(?:\d{9}[VXvx]|\d{12})$/,

    // 🇮🇳 India — Aadhaar: 12 digits (starts 2–9)
    IN: /^[2-9]\d{11}$/,

    // 🇵🇰 Pakistan — CNIC: XXXXX-XXXXXXX-X or 13 digits
    PK: /^\d{5}-?\d{7}-?\d{1}$/,

    // 🇧🇩 Bangladesh — NID: 13 or 17 digits
    BD: /^(\d{13}|\d{17})$/,

    // 🇳🇵 Nepal — Citizenship: XX-XX-XXXXX-X or 9–11 digits
    NP: /^(\d{2}-\d{2}-\d{5}-\d|\d{9,11})$/,

    // 🇧🇹 Bhutan — CID: 11 digits
    BT: /^\d{11}$/,

    // 🇲🇻 Maldives — NIC: letter + 6–8 digits
    MV: /^[A-Za-z]\d{6}(\d{1,2})?$/,

    // 🇦🇫 Afghanistan — Tazkira: 9 digits
    AF: /^\d{9}$/,

    // ═══════════════════════════════════════════════════════
    // 🌍 AFRICA
    // ═══════════════════════════════════════════════════════

    DZ: /^\d{18}$/,
    AO: /^\d{14}$/,
    BJ: /^\d{13}$/,
    BW: /^\d{9}$/,
    BF: /^B\d{7}[A-Za-z]$/,
    BI: /^\d{16}$/,
    CM: /^\d{9}$/,
    CV: /^\d{9}[A-Za-z]$/,
    CF: /^\d{9}$/,
    TD: /^\d{8}$/,
    KM: /^\d{7}$/,
    CG: /^\d{9}$/,
    CD: /^\d{16}$/,
    CI: /^[A-Za-z]\d{9}$/,
    DJ: /^\d{11}$/,
    EG: /^\d{14}$/,
    GQ: /^\d{9}$/,
    ER: /^\d{9}$/,
    SZ: /^\d{9}$/,
    ET: /^\d{16}$/,
    GA: /^\d{9}$/,
    GM: /^\d{7}$/,
    GH: /^GHA-\d{9}-\d$/,
    GN: /^\d{9}$/,
    GW: /^\d{7}$/,
    KE: /^\d{8}$/,
    LS: /^\d{9}$/,
    LR: /^\d{9}$/,
    LY: /^\d{12}$/,
    MG: /^\d{12}$/,
    MW: /^[A-Za-z0-9]{8}$/,
    ML: /^\d{9}$/,
    MR: /^\d{10}$/,
    MU: /^[A-Za-z]\d{6}$/,
    MA: /^[A-Za-z]{1,2}\d{5,6}$/,
    MZ: /^\d{13}$/,
    NA: /^\d{11}$/,
    NE: /^\d{9}$/,
    NG: /^\d{11}$/,
    RW: /^\d{16}$/,
    ST: /^\d{7}$/,
    SN: /^[A-Za-z]\d{9}[A-Za-z]$/,
    SC: /^\d{7}$/,
    SL: /^\d{9}$/,
    SO: /^\d{8}$/,
    ZA: /^\d{13}$/,
    SS: /^\d{9}$/,
    SD: /^\d{10}$/,
    TZ: /^[A-Za-z0-9]{8}-[A-Za-z0-9]{5}-[A-Za-z0-9]{5}-[A-Za-z0-9]{2}$/,
    TG: /^\d{9}$/,
    TN: /^\d{8}$/,
    UG: /^[A-Za-z]{2}\d{7}[A-Za-z]{2}\d{2}[A-Za-z]$/,
    ZM: /^\d{6}\/\d{2}\/\d{1}$/,
    ZW: /^\d{2}-\d{6,7}-[A-Za-z]-\d{2}$/,

    // ═══════════════════════════════════════════════════════
    // 🌎 AMERICAS
    // ═══════════════════════════════════════════════════════

    AG: /^[A-Za-z0-9]{9}$/,
    AR: /^\d{7,8}$/,
    BS: /^[A-Za-z0-9]{9}$/,
    BB: /^\d{9}$/,
    BZ: /^\d{9}$/,
    BO: /^\d{7,8}([A-Za-z]{2})?$/,
    BR: /^(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11})$/,
    CA: /^(\d{3}-\d{3}-\d{3}|\d{9})$/,
    CL: /^\d{7,8}-[\dKk]$/,
    CO: /^\d{6,10}$/,
    CR: /^\d{1}-\d{4}-\d{4}$/,
    CU: /^\d{11}$/,
    DO: /^\d{3}-\d{7}-\d{1}$/,
    EC: /^\d{10}$/,
    SV: /^\d{8}-\d{1}$/,
    GT: /^\d{13}$/,
    GY: /^\d{10}$/,
    HT: /^\d{11}$/,
    HN: /^\d{4}-\d{4}-\d{5}$/,
    JM: /^[A-Za-z0-9]{9}$/,
    MX: /^[A-Za-z]{4}\d{6}[HhMm][A-Za-z]{5}[A-Za-z0-9]\d$/,
    NI: /^\d{3}-\d{6}-\d{4}[A-Za-z]$/,
    PA: /^\d{1,2}-\d{3,4}-\d{4,5}$/,
    PY: /^\d{7,8}$/,
    PE: /^\d{8}$/,
    TT: /^\d{9}$/,
    US: /^(\d{3}-\d{2}-\d{4}|\d{9})$/,
    UY: /^\d{7,8}$/,
    VE: /^[VvEe]-?\d{7,8}$/,

    // ═══════════════════════════════════════════════════════
    // 🌏 ASIA (EAST & SOUTHEAST)
    // ═══════════════════════════════════════════════════════

    BN: /^\d{2}-\d{6}$/,
    KH: /^\d{9}$/,
    CN: /^\d{17}[\dXx]$/,
    ID: /^\d{16}$/,
    JP: /^\d{12}$/,
    KP: /^\d{12}$/,
    KR: /^\d{6}-\d{7}$/,
    LA: /^\d{10}$/,
    MY: /^\d{6}-\d{2}-\d{4}$/,
    MN: /^[A-Za-z]{2}\d{8}$/,
    MM: /^\d{1}\/[A-Za-z]{6}\([A-Za-z]\)\d{6}$/,
    PH: /^\d{4}-\d{4}-\d{4}$/,
    SG: /^[STFGstfg]\d{7}[A-Za-z]$/,
    TW: /^[A-Za-z]\d{9}$/,
    TL: /^\d{9}$/,
    VN: /^\d{12}$/,

    // ═══════════════════════════════════════════════════════
    // 🌏 ASIA (CENTRAL & WEST / MIDDLE EAST)
    // ═══════════════════════════════════════════════════════

    AM: /^[A-Za-z]{2}\d{6}$/,
    AZ: /^\d{7}$/,
    BH: /^\d{6}-\d{5}$/,
    CY: /^\d{8}[A-Za-z]?$/,
    GE: /^\d{11}$/,
    IR: /^\d{10}$/,
    IQ: /^\d{12}$/,
    IL: /^\d{9}$/,
    JO: /^\d{10}$/,
    KZ: /^\d{12}$/,
    KW: /^\d{12}$/,
    KG: /^\d{14}$/,
    LB: /^\d{9}$/,
    OM: /^\d{8}$/,
    PS: /^\d{9}$/,
    QA: /^\d{11}$/,
    SA: /^[12]\d{9}$/,
    SY: /^\d{11}$/,
    TJ: /^\d{9}$/,
    TM: /^\d{8}$/,
    AE: /^\d{3}-\d{4}-\d{7}-\d{1}$/,
    UZ: /^\d{14}$/,
    YE: /^\d{9}$/,

    // ═══════════════════════════════════════════════════════
    // 🌍 EUROPE
    // ═══════════════════════════════════════════════════════

    AL: /^[A-Za-z]\d{8}[A-Za-z]$/,
    AT: /^\d{4}\s?\d{6}$/,
    BY: /^\d{7}[A-Za-z]\d{2}[A-Za-z]{2}$/,
    BE: /^\d{2}\.\d{2}\.\d{2}-\d{3}\.\d{2}$/,
    BA: /^\d{13}$/,
    BG: /^\d{10}$/,
    HR: /^\d{11}$/,
    CZ: /^\d{6}\/??\d{3,4}$/,
    DK: /^\d{6}-\d{4}$/,
    EE: /^\d{11}$/,
    FI: /^\d{6}[+-A]\d{3}[A-Za-z0-9]$/,
    FR: /^\d{15}$/,
    DE: /^[A-Za-z0-9]{9}$/,
    GR: /^[A-Za-z]{2}\d{6}$/,
    HU: /^\d{11}$/,
    IS: /^\d{6}-\d{4}$/,
    IE: /^\d{7}[A-Za-z]{1,2}$/,
    IT: /^[A-Za-z]{6}\d{2}[A-Za-z]\d{2}[A-Za-z]\d{3}[A-Za-z]$/,
    XK: /^\d{10}$/,
    LV: /^\d{6}-\d{5}$/,
    LT: /^\d{11}$/,
    LU: /^\d{13}$/,
    MT: /^\d{7}[A-Za-z]$/,
    MD: /^\d{13}$/,
    ME: /^\d{13}$/,
    NL: /^\d{8,9}$/,
    MK: /^\d{13}$/,
    NO: /^\d{11}$/,
    PL: /^\d{11}$/,
    PT: /^(\d{8}[A-Za-z]\d{2}[A-Za-z]|\d{9})$/,
    RO: /^\d{13}$/,
    RU: /^\d{4}\s?\d{6}$/,
    RS: /^\d{13}$/,
    SK: /^\d{6}\/\d{4}$/,
    SI: /^\d{13}$/,
    ES: /^([0-9]{8}[A-Za-z]|[XYZxyz]\d{7}[A-Za-z])$/,
    SE: /^\d{6}[+-]\d{4}$/,
    CH: /^756\.\d{4}\.\d{4}\.\d{2}$/,
    TR: /^[1-9]\d{10}$/,
    UA: /^\d{10}$/,
    GB: /^[A-CEGHJPRSTWXYZaceghj-prst-wxy-z]{2}\d{6}[A-Da-d]$/,

    // ═══════════════════════════════════════════════════════
    // 🌏 OCEANIA
    // ═══════════════════════════════════════════════════════

    AU: /^\d{8,9}$/,
    FJ: /^FF\d{6}$/,
    PG: /^\d{9}$/,
    WS: /^\d{9}$/,
    SB: /^\d{9}$/,
    TO: /^\d{7}$/,
    VU: /^\d{9}$/,
    NZ: /^([A-Za-z]{2,3}\d{5,6}|\d{9})$/,

    // ═══════════════════════════════════════════════════════
    // 🌍 DEFAULT
    // ═══════════════════════════════════════════════════════

    // Fallback: at least 6 digits
    DEFAULT: /^\d{6,}$/,

};

export function validateNic(nic, countryCode = "DEFAULT") {

    // Validate input type
    if (typeof nic !== "string") {
        return CommonResponse.failure("NIC must be a string", null, 400);
    }

    // Trim whitespace
    const cleanNic = nic.trim();

    // Empty check
    if (cleanNic.length === 0) {
        return CommonResponse.failure("NIC cannot be empty", null, 400);
    }

    // Unsupported country code check
    const upperCode = countryCode.toUpperCase();
    if (upperCode !== "DEFAULT" && !nicPatterns[upperCode]) {
        return CommonResponse.failure("Unsupported country code", null, 400);
    }

    // Get pattern
    const pattern = nicPatterns[upperCode] || nicPatterns.DEFAULT;

    // Validate NIC
    const isValid = pattern.test(cleanNic);

    // Invalid NIC
    if (!isValid) {
        return CommonResponse.failure("Invalid NIC format", null, 400);
    }

    // Success
    return CommonResponse.success(cleanNic, "Valid NIC", 200);

}