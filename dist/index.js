class CommonResponse {

  static success(data = null, message = "Success", status = 200) {
    return {
      success: true,
      status,
      message,
      data
    };
  }

  static failure(message = "Failed", data = null, status = 400) {
    return {
      success: false,
      status,
      message,
      data
    };
  }

}

function validateEmail(email) {
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

// src/validators/phone.js

const phonePatterns = {

  // ─── Africa ──────────────────────────────────────────────────────────────

  DZ: /^(?:\+213|0)?[567]\d{8}$/,
  AO: /^(?:\+244)?9[1-9]\d{7}$/,
  BJ: /^(?:\+229)?\d{8}$/,
  BW: /^(?:\+267)?7\d{7}$/,
  BF: /^(?:\+226)?\d{8}$/,
  BI: /^(?:\+257)?[67]\d{7}$/,
  CV: /^(?:\+238)?9\d{6}$/,
  CM: /^(?:\+237)?6[5-9]\d{7}$/,
  CF: /^(?:\+236)?\d{8}$/,
  TD: /^(?:\+235)?[69]\d{7}$/,
  KM: /^(?:\+269)?\d{7}$/,
  CG: /^(?:\+242)?0?[56]\d{7}$/,
  CD: /^(?:\+243)?0?[89]\d{8}$/,
  CI: /^(?:\+225)?0[157]\d{8}$/,
  DJ: /^(?:\+253)?7[7-8]\d{6}$/,
  EG: /^(?:\+20|0)?1[0-2,5]\d{8}$/,
  GQ: /^(?:\+240)?\d{9}$/,
  ER: /^(?:\+291)?0?7\d{6}$/,
  SZ: /^(?:\+268)?7\d{7}$/,
  ET: /^(?:\+251|0)?9\d{8}$/,
  GA: /^(?:\+241)?0?[67]\d{6}$/,
  GM: /^(?:\+220)?\d{7}$/,
  GH: /^(?:\+233|0)?[235]\d{8}$/,
  GN: /^(?:\+224)?6\d{8}$/,
  GW: /^(?:\+245)?9\d{7}$/,
  KE: /^(?:\+254|0)?[17]\d{8}$/,
  LS: /^(?:\+266)?[56]\d{7}$/,
  LR: /^(?:\+231)?0?7\d{8}$/,
  LY: /^(?:\+218|0)?9[1-4]\d{7}$/,
  MG: /^(?:\+261|0)?3[2-4]\d{7}$/,
  MW: /^(?:\+265|0)?[89][89]\d{7}$/,
  ML: /^(?:\+223)?\d{8}$/,
  MR: /^(?:\+222)?\d{8}$/,
  MU: /^(?:\+230)?\d{8}$/,
  MA: /^(?:\+212|0)?[67]\d{8}$/,
  MZ: /^(?:\+258)?8[234567]\d{7}$/,
  NA: /^(?:\+264|0)?8[1-5]\d{7}$/,
  NE: /^(?:\+227)?\d{8}$/,
  NG: /^(?:\+234|0)?[789]\d{9}$/,
  RW: /^(?:\+250|0)?7[2-9]\d{7}$/,
  ST: /^(?:\+239)?\d{7}$/,
  SN: /^(?:\+221)?7[05-9]\d{7}$/,
  SC: /^(?:\+248)?\d{7}$/,
  SL: /^(?:\+232|0)?[78]\d{7}$/,
  SO: /^(?:\+252|0)?[67]\d{7}$/,
  ZA: /^(?:\+27|0)[6-8]\d{8}$/,
  SS: /^(?:\+211|0)?9\d{8}$/,
  SD: /^(?:\+249|0)?9\d{8}$/,
  TZ: /^(?:\+255|0)?[67]\d{8}$/,
  TG: /^(?:\+228)?\d{8}$/,
  TN: /^(?:\+216)?[259]\d{7}$/,
  UG: /^(?:\+256|0)?7\d{8}$/,
  ZM: /^(?:\+260|0)?9[5-7]\d{7}$/,
  ZW: /^(?:\+263|0)?7[1-9]\d{7}$/,

  // ─── Americas ────────────────────────────────────────────────────────────

  AG: /^(?:\+1)?268[2-9]\d{6}$/,
  AR: /^(?:\+54)?9?[0-9]{10}$/,
  BS: /^(?:\+1)?242[2-9]\d{6}$/,
  BB: /^(?:\+1)?246[2-9]\d{6}$/,
  BZ: /^(?:\+501)?\d{7}$/,
  BO: /^(?:\+591)?[67]\d{7}$/,
  BR: /^(?:\+55)?(?:[1-9]{2})9\d{8}$/,
  CA: /^(?:\+1)?[2-9]\d{2}[2-9]\d{6}$/,
  CL: /^(?:\+56)?9\d{8}$/,
  CO: /^(?:\+57)?3\d{9}$/,
  CR: /^(?:\+506)?[6-8]\d{7}$/,
  CU: /^(?:\+53)?5\d{7}$/,
  DM: /^(?:\+1)?767[2-9]\d{6}$/,
  DO: /^(?:\+1)?(?:809|829|849)[2-9]\d{6}$/,
  EC: /^(?:\+593|0)?9\d{8}$/,
  SV: /^(?:\+503)?[67]\d{7}$/,
  GD: /^(?:\+1)?473[2-9]\d{6}$/,
  GT: /^(?:\+502)?[345]\d{7}$/,
  GY: /^(?:\+592)?\d{7}$/,
  HT: /^(?:\+509)?[34]\d{7}$/,
  HN: /^(?:\+504)?[389]\d{7}$/,
  JM: /^(?:\+1)?876[2-9]\d{6}$/,
  MX: /^(?:\+52)?[2-9]\d{9}$/,
  NI: /^(?:\+505)?[578]\d{7}$/,
  PA: /^(?:\+507)?6\d{7}$/,
  PY: /^(?:\+595|0)?9[61-9]\d{7}$/,
  PE: /^(?:\+51)?9\d{8}$/,
  KN: /^(?:\+1)?869[2-9]\d{6}$/,
  LC: /^(?:\+1)?758[2-9]\d{6}$/,
  VC: /^(?:\+1)?784[2-9]\d{6}$/,
  SR: /^(?:\+597)?[78]\d{6}$/,
  TT: /^(?:\+1)?868[2-9]\d{6}$/,
  US: /^(?:\+1)?[2-9]\d{2}[2-9]\d{6}$/,
  UY: /^(?:\+598|0)?9\d{7}$/,
  VE: /^(?:\+58|0)?4\d{9}$/,

  // ─── Asia ────────────────────────────────────────────────────────────────

  AF: /^(?:\+93|0)?7\d{8}$/,
  AM: /^(?:\+374|0)?[59]\d{7}$/,
  AZ: /^(?:\+994|0)?[57][05]\d{7}$/,
  BH: /^(?:\+973)?[369]\d{7}$/,
  BD: /^(?:\+880|0)?1[13-9]\d{8}$/,
  BT: /^(?:\+975)?[17][567]\d{6}$/,
  BN: /^(?:\+673)?[78]\d{6}$/,
  KH: /^(?:\+855|0)?[1-9]\d{7,8}$/,
  CN: /^(?:\+86)?1[3-9]\d{9}$/,
  CY: /^(?:\+357)?9[6-9]\d{6}$/,
  GE: /^(?:\+995|0)?5\d{8}$/,
  IN: /^(?:\+91)?[6-9]\d{9}$/,
  ID: /^(?:\+62|0)?8[1-9]\d{7,10}$/,
  IR: /^(?:\+98|0)?9[0-9]\d{8}$/,
  IQ: /^(?:\+964|0)?7[3-9]\d{8}$/,
  IL: /^(?:\+972|0)?5[0-9]\d{7}$/,
  JP: /^(?:\+81|0)?[789]0\d{8}$/,
  JO: /^(?:\+962|0)?7[789]\d{7}$/,
  KZ: /^(?:\+7|8)?7[0-9]{2}\d{7}$/,
  KW: /^(?:\+965)?[569]\d{7}$/,
  KG: /^(?:\+996|0)?7\d{8}$/,
  LA: /^(?:\+856|0)?20\d{8}$/,
  LB: /^(?:\+961|0)?[37]\d{6,7}$/,
  MY: /^(?:\+60|0)?1[0-9]\d{7,8}$/,
  MV: /^(?:\+960)?[79]\d{6}$/,
  MN: /^(?:\+976)?[89]\d{7}$/,
  MM: /^(?:\+95|0)?9[56789]\d{7}$/,
  NP: /^(?:\+977|0)?9[7-8]\d{8}$/,
  KP: /^(?:\+850|0)?19\d{8}$/,
  OM: /^(?:\+968)?9[2-9]\d{6}$/,
  PK: /^(?:\+92|0)?3[0-6]\d{8}$/,
  PS: /^(?:\+970|0)?5[689]\d{7}$/,
  PH: /^(?:\+63|0)?9\d{9}$/,
  QA: /^(?:\+974)?[3567]\d{7}$/,
  SA: /^(?:\+966|0)?5\d{8}$/,
  SG: /^(?:\+65)?[89]\d{7}$/,
  KR: /^(?:\+82|0)?10\d{8}$/,
  LK: /^(?:\+94|0)?7\d{8}$/,
  SY: /^(?:\+963|0)?9[4-9]\d{7}$/,
  TW: /^(?:\+886|0)?9\d{8}$/,
  TJ: /^(?:\+992|0)?9[0-9]\d{7}$/,
  TH: /^(?:\+66|0)?[689]\d{8}$/,
  TL: /^(?:\+670)?[37]\d{7}$/,
  TM: /^(?:\+993|0)?[67]\d{7}$/,
  AE: /^(?:\+971|0)?5[024-9]\d{7}$/,
  UZ: /^(?:\+998|0)?[39]\d{8}$/,
  VN: /^(?:\+84|0)?[35789]\d{8}$/,
  YE: /^(?:\+967|0)?7[0-9]\d{7}$/,

  // ─── Europe ──────────────────────────────────────────────────────────────

  AL: /^(?:\+355|0)?6[7-9]\d{7}$/,
  AD: /^(?:\+376)?\d{6}$/,
  AT: /^(?:\+43|0)?6[5-7]\d{7,8}$/,
  BY: /^(?:\+375|80)?(?:25|29|33|44)\d{7}$/,
  BE: /^(?:\+32|0)?4[5-9]\d{7}$/,
  BA: /^(?:\+387|0)?6[1-5]\d{7}$/,
  BG: /^(?:\+359|0)?8[7-9]\d{7}$/,
  HR: /^(?:\+385|0)?9[1-9]\d{7}$/,
  CZ: /^(?:\+420)?[67]\d{8}$/,
  DK: /^(?:\+45)?[2-9]\d{7}$/,
  EE: /^(?:\+372)?5\d{7}$/,
  FI: /^(?:\+358|0)?[45]\d{8,9}$/,
  FR: /^(?:\+33|0)[67]\d{8}$/,
  DE: /^(?:\+49|0)?1[5-7]\d{8,11}$/,
  GR: /^(?:\+30)?69\d{8}$/,
  HU: /^(?:\+36|06)?[27]\d{8}$/,
  IS: /^(?:\+354)?[67]\d{6}$/,
  IE: /^(?:\+353|0)?8[35-9]\d{7}$/,
  IT: /^(?:\+39)?3[0-9]\d{8}$/,
  XK: /^(?:\+383|0)?4[3-9]\d{6}$/,
  LV: /^(?:\+371)?2\d{7}$/,
  LI: /^(?:\+423)?7\d{5}$/,
  LT: /^(?:\+370|8)?6\d{7}$/,
  LU: /^(?:\+352)?6[2-9]\d{7}$/,
  MT: /^(?:\+356)?[79]\d{7}$/,
  MD: /^(?:\+373|0)?[67]\d{7}$/,
  MC: /^(?:\+377)?(?:6\d{8}|[3-9]\d{7})$/,
  ME: /^(?:\+382|0)?6[7-9]\d{6}$/,
  NL: /^(?:\+31|0)?6\d{8}$/,
  MK: /^(?:\+389|0)?7[0-9]\d{6,7}$/,
  NO: /^(?:\+47)?[49]\d{7}$/,
  PL: /^(?:\+48)?[45789]\d{8}$/,
  PT: /^(?:\+351)?9[1-3,6]\d{7}$/,
  RO: /^(?:\+40|0)?7[2-8]\d{7}$/,
  RU: /^(?:\+7|8)?9\d{9}$/,
  SM: /^(?:\+378)?6\d{6}$/,
  RS: /^(?:\+381|0)?6[0-9]\d{7}$/,
  SK: /^(?:\+421|0)?9[0-9]\d{7}$/,
  SI: /^(?:\+386|0)?[37][01]\d{6}$/,
  ES: /^(?:\+34)?[67]\d{8}$/,
  SE: /^(?:\+46|0)?7[02369]\d{7}$/,
  CH: /^(?:\+41|0)?7[5-9]\d{7}$/,
  TR: /^(?:\+90|0)?5\d{9}$/,
  UA: /^(?:\+380|0)?[3-9]\d{8}$/,
  GB: /^(?:\+44|0)?7[1-9]\d{8}$/,
  VA: /^(?:\+379)?06698\d{5}$/,

  // ─── Oceania ─────────────────────────────────────────────────────────────

  AU: /^(?:\+61|0)?4\d{8}$/,
  FJ: /^(?:\+679)?[79]\d{6}$/,
  KI: /^(?:\+686)?\d{5}$/,
  MH: /^(?:\+692)?\d{7}$/,
  FM: /^(?:\+691)?\d{7}$/,
  NR: /^(?:\+674)?\d{7}$/,
  NZ: /^(?:\+64|0)?2\d{7,9}$/,
  NU: /^(?:\+683)?\d{4}$/,
  PW: /^(?:\+680)?\d{7}$/,
  PG: /^(?:\+675)?[78]\d{7}$/,
  WS: /^(?:\+685)?7\d{5,6}$/,
  SB: /^(?:\+677)?\d{7}$/,
  TO: /^(?:\+676)?7\d{4,6}$/,
  TV: /^(?:\+688)?\d{5}$/,
  VU: /^(?:\+678)?[57]\d{6}$/,

  // ─── Fallback ────────────────────────────────────────────────────────────

  DEFAULT: /^\+?[1-9]\d{6,14}$/,
};

function validatePhone(phone, countryCode = "DEFAULT") {

  // Validate input type
  if (typeof phone !== "string") {
    return CommonResponse.failure("Phone number must be a string", null, 400);
  }

  // Remove spaces, dashes, dots, brackets
  const cleanPhone = phone.replace(/[\s\-\.()]/g, "");

  // Get regex pattern
  const pattern = phonePatterns[countryCode] || phonePatterns.DEFAULT;

  // Country not supported
  if (!pattern) {
    return CommonResponse.failure("Unsupported country code", null, 400);
  }

  // Validate phone
  const isValid = pattern.test(cleanPhone);

  // Invalid number
  if (!isValid) {
    return CommonResponse.failure("Invalid phone number format", null, 400);
  }

  //Success
  return CommonResponse.success(cleanPhone, "Valid phone number", 200);
}

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

function validateNic(nic, countryCode = "DEFAULT") {

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
function validatePassport(passport, countryCode = "DEFAULT") {

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

function validateStrengthPassport(password) {
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

const cardTypeRules = [
    { name: "Visa", regex: /^4/ },

    { name: "Mastercard", regex: /^(5[1-5]|2(2[2-9]|[3-6]|7[01]|720))/ },

    { name: "American Express", regex: /^3[47]/ },

    { name: "Discover", regex: /^(6011|65|64[4-9]|622)/ },

    { name: "Diners Club", regex: /^3(0[0-5]|[68])/ },

    { name: "JCB", regex: /^(352[8-9]|35[3-8])/ },

    { name: "UnionPay", regex: /^62/ },

    { name: "Maestro", regex: /^(50|5[6-9]|6[0-9])/ },

    { name: "RuPay (India)", regex: /^60|65|81|82|508|353|356/ },

    { name: "Verve (Africa)", regex: /^506[0-9]|6500[0-9]{2}/ },

    { name: "Troy (Turkey)", regex: /^9792/ },

    { name: "MIR (Russia)", regex: /^220[0-4]/ }
];

function validateBankCardType(cardNumber) {
    if (typeof cardNumber !== "string") {
        return CommonResponse.failure("Card number must be a string", null, 400);
    }

    const matchedType = cardTypeRules.find(rule => rule.regex.test(cardNumber));

    if (matchedType) {
        var successObject = {
            cardNumber: cardNumber,
            cardType: matchedType.name
        };
        return CommonResponse.success(successObject, "Valid card type", 200);
    } else {
        return CommonResponse.failure("Unknown card type", null, 400);
    }
}

function generateRandomId(prefix, length, type) {
 
    var prefixStr = "";

    if(prefix && typeof prefix !== "string") {
        prefixStr = "ID";
    } else if (prefix) {
        prefixStr = prefix;
    }

    var randomId = "";

    // Generate random id
    if(type === "NUMBER") {
        randomId = Math.random().toString().substr(2, length);
    } else if (type === "NUMBER_AND_LETTER") {
        randomId = Math.random().toString(36).substr(2, length);
    } else {
        randomId = Math.random().toString(36).substr(2, length);
    }

    var idObject = {
        id: prefixStr + randomId
    };
    return CommonResponse.success(idObject, "Random ID generated successfully", 200);
}

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
function validateIsbn(value) {

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

function validateDrivingLicence(drivingLicenceNumber, country = "DEFAULT") {

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

// src/index.js


const ValidationMaster = {
  EmailValidation: (value) => validateEmail(value),
  PhoneValidation: (value) => validatePhone(value),
  NicValidation: (value, country) => validateNic(value, country),
  PassportValidation: (value, countryCode) => validatePassport(value, countryCode),
  PasswordStrengthValidation: (value) => validateStrengthPassport(value),
  BankCardTypeValidation: (value) => validateBankCardType(value),
  GenerateRandomId: (prefix, length, type) => generateRandomId(prefix, length, type),
  IsbnValidation: (value) => validateIsbn(value),
  DrivingLicenceValidation: (value, countryCode) => validateDrivingLicence(value, countryCode),

  // cleaner alternative API
  email: validateEmail,
  phone: validatePhone,
  nic: validateNic,
  passport: validatePassport,
  passwordStrength: validateStrengthPassport,
  bankCardType: validateBankCardType,
  generateId: generateRandomId,
  isbn: validateIsbn,
  drivingLicence: validateDrivingLicence,
};

export { ValidationMaster as default };
