import CommonResponse from "../dto/CommonResponse";

const drivingLicencePatterns = {

    // ═══════════════════════════════════════════════════════
    // 🌍 AFRICA
    // ═══════════════════════════════════════════════════════

    DZ: /^[0-9]{18}$/,                                      // Algeria
    AO: /^[0-9]{9}[A-Z]$/,                                  // Angola
    BJ: /^[0-9]{13}$/,                                      // Benin
    BW: /^[A-Z]{2}[0-9]{6}$/,                               // Botswana
    BF: /^[0-9]{9}$/,                                       // Burkina Faso
    BI: /^[0-9]{8}$/,                                       // Burundi
    CM: /^[0-9]{8}[A-Z]$/,                                  // Cameroon
    CV: /^[0-9]{7}$/,                                       // Cape Verde
    CF: /^[0-9]{8}$/,                                       // Central African Republic
    TD: /^[0-9]{8}$/,                                       // Chad
    KM: /^[0-9]{7}$/,                                       // Comoros
    CG: /^[0-9]{9}$/,                                       // Congo
    CD: /^[0-9]{9}$/,                                       // DR Congo
    CI: /^[A-Z][0-9]{9}$/,                                  // Côte d'Ivoire
    DJ: /^[0-9]{8}$/,                                       // Djibouti
    EG: /^[0-9]{12}$/,                                      // Egypt
    GQ: /^[0-9]{9}$/,                                       // Equatorial Guinea
    ER: /^[0-9]{9}$/,                                       // Eritrea
    SZ: /^[0-9]{8}$/,                                       // Eswatini
    ET: /^[0-9]{14}[A-Z]$/,                                 // Ethiopia
    GA: /^[0-9]{9}$/,                                       // Gabon
    GM: /^[0-9]{7}$/,                                       // Gambia
    GH: /^[A-Z]{3}-[0-9]{4}-[0-9]{6}$/,                    // Ghana
    GN: /^[0-9]{9}$/,                                       // Guinea
    GW: /^[0-9]{7}$/,                                       // Guinea-Bissau
    KE: /^[A-Z][0-9]{8}$/,                                  // Kenya
    LS: /^[0-9]{9}$/,                                       // Lesotho
    LR: /^[0-9]{9}$/,                                       // Liberia
    LY: /^[0-9]{8}$/,                                       // Libya
    MG: /^[0-9]{12}$/,                                      // Madagascar
    MW: /^[A-Z]{2}[0-9]{7}$/,                               // Malawi
    ML: /^[0-9]{9}$/,                                       // Mali
    MR: /^[0-9]{10}$/,                                      // Mauritania
    MU: /^[A-Z][0-9]{7}$/,                                  // Mauritius
    MA: /^[0-9]{6,8}$/,                                     // Morocco
    MZ: /^[0-9]{9}[A-Z]$/,                                  // Mozambique
    NA: /^[0-9]{8,11}$/,                                    // Namibia
    NE: /^[0-9]{9}$/,                                       // Niger
    NG: /^[A-Z]{3}-[0-9]{5}[A-Z]{2}[0-9]{2}$/,             // Nigeria
    RW: /^[0-9]{16}$/,                                      // Rwanda
    ST: /^[0-9]{7}$/,                                       // São Tomé and Príncipe
    SN: /^[A-Z][0-9]{9}[A-Z]$/,                             // Senegal
    SC: /^[0-9]{7}$/,                                       // Seychelles
    SL: /^[0-9]{9}$/,                                       // Sierra Leone
    SO: /^[0-9]{8}$/,                                       // Somalia
    ZA: /^[0-9]{13}$/,                                      // South Africa
    SS: /^[0-9]{9}$/,                                       // South Sudan
    SD: /^[0-9]{10}$/,                                      // Sudan
    TZ: /^TZ[0-9]{9}$/,                                     // Tanzania
    TG: /^[0-9]{9}$/,                                       // Togo
    TN: /^[0-9]{8}$/,                                       // Tunisia
    UG: /^[A-Z]{3}[0-9]{6}[A-Z]$/,                         // Uganda
    ZM: /^[0-9]{6}\/[0-9]{2}\/[0-9]$/,                     // Zambia
    ZW: /^[0-9]{8}[A-Z]$/,                                  // Zimbabwe

    // ═══════════════════════════════════════════════════════
    // 🌎 AMERICAS
    // ═══════════════════════════════════════════════════════

    AG: /^[A-Z0-9]{9}$/,                                    // Antigua & Barbuda
    AR: /^[A-Z]{1}[0-9]{7}$/,                               // Argentina
    BS: /^[A-Z0-9]{9}$/,                                    // Bahamas
    BB: /^[0-9]{8}$/,                                       // Barbados
    BZ: /^[0-9]{7}$/,                                       // Belize
    BO: /^[0-9]{7,8}$/,                                     // Bolivia
    BR: /^[0-9]{9}$/,                                       // Brazil
    CA: /^[A-Z][0-9]{4}[-\s]?[0-9]{4}[-\s]?[0-9]{4}$/,    // Canada
    CL: /^[0-9]{7,8}-[0-9K]$/,                              // Chile
    CO: /^[0-9]{6,10}$/,                                    // Colombia
    CR: /^[0-9]{9}$/,                                       // Costa Rica
    CU: /^[0-9]{11}$/,                                      // Cuba
    DM: /^[A-Z0-9]{9}$/,                                    // Dominica
    DO: /^[0-9]{11}$/,                                      // Dominican Republic
    EC: /^[0-9]{10}$/,                                      // Ecuador
    SV: /^[0-9]{8}$/,                                       // El Salvador
    GD: /^[A-Z0-9]{9}$/,                                    // Grenada
    GT: /^[0-9]{13}$/,                                      // Guatemala
    GY: /^[0-9]{10}$/,                                      // Guyana
    HT: /^[0-9]{11}$/,                                      // Haiti
    HN: /^[0-9]{13}$/,                                      // Honduras
    JM: /^[A-Z0-9]{9}$/,                                    // Jamaica
    MX: /^[A-Z]{6}[0-9]{8}[A-Z0-9]{3}$/,                   // Mexico (CURP-based)
    NI: /^[0-9]{3}-[0-9]{6}-[0-9]{4}[A-Z]$/,               // Nicaragua
    PA: /^[0-9]{1,2}-[0-9]{3,4}-[0-9]{4,5}$/,              // Panama
    PY: /^[0-9]{7,8}$/,                                     // Paraguay
    PE: /^[A-Z][0-9]{8}$/,                                  // Peru
    KN: /^[A-Z0-9]{9}$/,                                    // Saint Kitts and Nevis
    LC: /^[A-Z0-9]{9}$/,                                    // Saint Lucia
    VC: /^[A-Z0-9]{9}$/,                                    // Saint Vincent
    SR: /^[A-Z0-9]{8}$/,                                    // Suriname
    TT: /^[0-9]{9}$/,                                       // Trinidad & Tobago
    US: /^[A-Z0-9]{1,19}$/,                                 // USA (varies by state)
    UY: /^[0-9]{7,8}$/,                                     // Uruguay
    VE: /^[VE]-?[0-9]{7,8}$/,                               // Venezuela

    // ═══════════════════════════════════════════════════════
    // 🌏 ASIA — SOUTH
    // ═══════════════════════════════════════════════════════

    AF: /^[0-9]{9}$/,                                       // Afghanistan
    BD: /^[A-Z]{2}[0-9]{9}$/,                               // Bangladesh
    BT: /^[0-9]{11}$/,                                      // Bhutan
    IN: /^[A-Z]{2}[0-9]{2}[A-Z]{0,2}[0-9]{4,7}$/,          // India
    MV: /^[A-Z][0-9]{7}$/,                                  // Maldives
    NP: /^[0-9]{2}-[0-9]{2}-[0-9]{5}-[0-9]$/,              // Nepal
    PK: /^[A-Z]{3}-[0-9]{2}-[0-9]{7}$/,                    // Pakistan
    LK: /^[A-Z][0-9]{7}$/,                                  // Sri Lanka

    // ═══════════════════════════════════════════════════════
    // 🌏 ASIA — EAST & SOUTHEAST
    // ═══════════════════════════════════════════════════════

    BN: /^[0-9]{2}-[0-9]{6}$/,                              // Brunei
    KH: /^[0-9]{9}$/,                                       // Cambodia
    CN: /^[0-9]{15,18}$/,                                   // China
    ID: /^[0-9]{16}$/,                                      // Indonesia
    JP: /^[0-9]{12}$/,                                      // Japan
    KP: /^[0-9]{12}$/,                                      // North Korea
    KR: /^[0-9]{2}-[0-9]{2}-[0-9]{6}-[0-9]{2}$/,           // South Korea
    LA: /^[0-9]{10}$/,                                      // Laos
    MY: /^[0-9]{6}-[0-9]{2}-[0-9]{4}$/,                    // Malaysia
    MN: /^[A-Z]{2}[0-9]{8}$/,                               // Mongolia
    MM: /^[0-9]{6,9}$/,                                     // Myanmar
    PH: /^[A-Z][0-9]{2}-[0-9]{2}-[0-9]{6}$/,               // Philippines
    SG: /^[STF][0-9]{7}[A-Z]$/,                             // Singapore
    TW: /^[A-Z][0-9]{9}$/,                                  // Taiwan
    TL: /^[0-9]{9}$/,                                       // Timor-Leste
    VN: /^[0-9]{12}$/,                                      // Vietnam
    TH: /^[0-9]{8}$/,                                       // Thailand

    // ═══════════════════════════════════════════════════════
    // 🌏 ASIA — CENTRAL & WEST / MIDDLE EAST
    // ═══════════════════════════════════════════════════════

    AM: /^[A-Z]{2}[0-9]{6}$/,                               // Armenia
    AZ: /^[A-Z]{2}[0-9]{7}$/,                               // Azerbaijan
    BH: /^[0-9]{8,9}$/,                                     // Bahrain
    CY: /^[0-9]{6}[A-Z]?$/,                                 // Cyprus (Turkish: N. Cyprus)
    GE: /^[A-Z]{2}[0-9]{7}$/,                               // Georgia
    IR: /^[0-9]{10}$/,                                      // Iran
    IQ: /^[0-9]{8}$/,                                       // Iraq
    IL: /^[0-9]{8}$/,                                       // Israel
    JO: /^[0-9]{10}$/,                                      // Jordan
    KZ: /^[0-9]{12}$/,                                      // Kazakhstan
    KW: /^[0-9]{8}$/,                                       // Kuwait
    KG: /^[A-Z]{2}[0-9]{7}$/,                               // Kyrgyzstan
    LB: /^[0-9]{8}$/,                                       // Lebanon
    OM: /^[0-9]{8}$/,                                       // Oman
    PS: /^[0-9]{9}$/,                                       // Palestine
    QA: /^[0-9]{7,9}$/,                                     // Qatar
    SA: /^[0-9]{10}$/,                                      // Saudi Arabia
    SY: /^[0-9]{11}$/,                                      // Syria
    TJ: /^[0-9]{9}$/,                                       // Tajikistan
    TM: /^[0-9]{8}$/,                                       // Turkmenistan
    AE: /^[0-9]{3}-[0-9]{4}-[0-9]{7}-[0-9]$/,              // UAE
    UZ: /^[A-Z]{2}[0-9]{7}$/,                               // Uzbekistan
    YE: /^[0-9]{9}$/,                                       // Yemen

    // ═══════════════════════════════════════════════════════
    // 🌍 EUROPE
    // ═══════════════════════════════════════════════════════

    AL: /^[A-Z][0-9]{8}[A-Z]$/,                             // Albania
    AD: /^[A-Z0-9]{6}$/,                                    // Andorra
    AT: /^[0-9]{8}$/,                                       // Austria
    BY: /^[A-Z]{2}[0-9]{7}$/,                               // Belarus
    BE: /^[0-9]{10}$/,                                       // Belgium
    BA: /^[0-9]{9}$/,                                       // Bosnia & Herzegovina
    BG: /^[0-9]{9}$/,                                       // Bulgaria
    HR: /^[0-9]{9}$/,                                       // Croatia
    CZ: /^[0-9]{8}$/,                                       // Czech Republic
    DK: /^[0-9]{8}$/,                                       // Denmark
    EE: /^[A-Z]{2}[0-9]{5,6}$/,                             // Estonia
    FI: /^[A-Z]{3}-[0-9]{3}$/,                              // Finland
    FR: /^[0-9]{12}$/,                                      // France
    DE: /^[A-Z0-9]{11}$/,                                   // Germany
    GR: /^[A-Z]{2}[0-9]{6}[A-Z]?$/,                        // Greece
    HU: /^[A-Z]{2}[0-9]{6}$/,                               // Hungary
    IS: /^[0-9]{6}-[0-9]{4}$/,                              // Iceland
    IE: /^[0-9]{3}[0-9]{3}[0-9]{3}$/,                      // Ireland
    IT: /^[A-Z]{2}[0-9]{7}[A-Z]$/,                          // Italy
    XK: /^[0-9]{9}$/,                                       // Kosovo
    LV: /^[A-Z]{2}[0-9]{6}$/,                               // Latvia
    LI: /^[A-Z0-9]{8}$/,                                    // Liechtenstein
    LT: /^[A-Z]{3}[0-9]{5}$/,                               // Lithuania
    LU: /^[0-9]{6,7}$/,                                     // Luxembourg
    MT: /^[0-9]{7}[A-Z]$/,                                  // Malta
    MD: /^[A-Z]{2}[0-9]{6}$/,                               // Moldova
    MC: /^[A-Z0-9]{8}$/,                                    // Monaco
    ME: /^[0-9]{9}$/,                                       // Montenegro
    NL: /^[A-Z0-9]{10}$/,                                   // Netherlands
    MK: /^[0-9]{9}$/,                                       // North Macedonia
    NO: /^[0-9]{6}[0-9]{5}$/,                               // Norway
    PL: /^[A-Z]{5}[0-9]{6}[A-Z0-9]{2}[0-9]$/,              // Poland
    PT: /^[A-Z]{1,2}[0-9]{6,7}$/,                           // Portugal
    RO: /^[A-Z]{2}[0-9]{6}$/,                               // Romania
    RU: /^[0-9]{2}[0-9]{2}[0-9]{6}$/,                      // Russia
    SM: /^[A-Z0-9]{6}$/,                                    // San Marino
    RS: /^[0-9]{9}$/,                                       // Serbia
    SK: /^[A-Z]{2}[0-9]{6}$/,                               // Slovakia
    SI: /^[0-9]{9}$/,                                       // Slovenia
    ES: /^[0-9]{8}[A-Z]$/,                                  // Spain
    SE: /^[0-9]{6}[0-9]{4}$/,                               // Sweden
    CH: /^[A-Z0-9]{8}$/,                                    // Switzerland
    TR: /^[0-9]{11}$/,                                      // Turkey
    UA: /^[A-Z]{3}[0-9]{6}$/,                               // Ukraine
    GB: /^[A-Z]{2}[0-9]{6}[A-Z]{2}[0-9][A-Z]{2}$/,         // United Kingdom
    VA: /^[A-Z0-9]{8}$/,                                    // Vatican City

    // ═══════════════════════════════════════════════════════
    // 🌏 OCEANIA
    // ═══════════════════════════════════════════════════════

    AU: /^[A-Z0-9]{6,10}$/,                                 // Australia (state-based)
    FJ: /^[A-Z0-9]{6,9}$/,                                  // Fiji
    KI: /^[0-9]{5}$/,                                       // Kiribati
    MH: /^[0-9]{7}$/,                                       // Marshall Islands
    FM: /^[0-9]{7}$/,                                       // Micronesia
    NR: /^[0-9]{7}$/,                                       // Nauru
    NZ: /^[A-Z]{2}[0-9]{6}$/,                               // New Zealand
    NU: /^[0-9]{4}$/,                                       // Niue
    PW: /^[0-9]{7}$/,                                       // Palau
    PG: /^[0-9]{7}$/,                                       // Papua New Guinea
    WS: /^[0-9]{7}$/,                                       // Samoa
    SB: /^[0-9]{7}$/,                                       // Solomon Islands
    TO: /^[0-9]{7}$/,                                       // Tonga
    TV: /^[0-9]{5}$/,                                       // Tuvalu
    VU: /^[0-9]{7}$/,                                       // Vanuatu

    // ═══════════════════════════════════════════════════════
    // 🌍 DEFAULT (fallback)
    // ═══════════════════════════════════════════════════════

    DEFAULT: /^[A-Z0-9]{4,20}$/,
};

export function validateDrivingLicence(drivingLicenceNumber, country = "DEFAULT") {

    // Type check
    if (typeof drivingLicenceNumber !== "string") {
        return CommonResponse.failure("Driving licence number must be a string", null, 400);
    }

    // Trim whitespace
    const cleanLicence = drivingLicenceNumber.trim().toUpperCase();

    // Empty check
    if (cleanLicence.length === 0) {
        return CommonResponse.failure("Driving licence number cannot be empty", null, 400);
    }

    // Normalize country code
    const upperCountry = country.toUpperCase();

    // Unsupported country check
    if (upperCountry !== "DEFAULT" && !drivingLicencePatterns[upperCountry]) {
        return CommonResponse.failure("Unsupported country code", null, 400);
    }

    // Get pattern
    const pattern = drivingLicencePatterns[upperCountry] || drivingLicencePatterns.DEFAULT;

    // Validate
    const isValid = pattern.test(cleanLicence);

    if (!isValid) {
        return CommonResponse.failure("Invalid driving licence number format", null, 400);
    }

    return CommonResponse.success(cleanLicence, "Valid driving licence number", 200);
}