import ValidationMaster from "../src/index.js";

describe("NIC Validation Tests", () => {

    // ─────────────────────────────────────────────
    // ❌ General Invalid Inputs
    // ─────────────────────────────────────────────

    test("non-string NIC should fail", () => {
        const result = ValidationMaster.nic(123456789, "LK");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
        expect(result.message).toBe("NIC must be a string");
    });

    test("null NIC should fail", () => {
        const result = ValidationMaster.nic(null, "LK");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
        expect(result.message).toBe("NIC must be a string");
    });

    test("undefined NIC should fail", () => {
        const result = ValidationMaster.nic(undefined, "LK");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
        expect(result.message).toBe("NIC must be a string");
    });

    test("boolean NIC should fail", () => {
        const result = ValidationMaster.nic(true, "LK");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
        expect(result.message).toBe("NIC must be a string");
    });

    test("array NIC should fail", () => {
        const result = ValidationMaster.nic(["123456789V"], "LK");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
        expect(result.message).toBe("NIC must be a string");
    });

    test("empty NIC should fail", () => {
        const result = ValidationMaster.nic("", "LK");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
        expect(result.message).toBe("NIC cannot be empty");
    });

    test("whitespace only NIC should fail", () => {
        const result = ValidationMaster.nic("   ", "LK");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
        expect(result.message).toBe("NIC cannot be empty");
    });

    test("unsupported country code should fail", () => {
        const result = ValidationMaster.nic("123456789", "XX");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
        expect(result.message).toBe("Unsupported country code");
    });

    // ─────────────────────────────────────────────
    // 🇱🇰 Sri Lanka (LK)
    // ─────────────────────────────────────────────

    test("valid LK old NIC with V should pass", () => {
        const result = ValidationMaster.nic("992881658V", "LK");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
        expect(result.data).toBe("992881658V");
    });

    test("valid LK old NIC with X should pass", () => {
        const result = ValidationMaster.nic("987654321X", "LK");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid LK old NIC with lowercase v should pass", () => {
        const result = ValidationMaster.nic("987654321v", "LK");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid LK new NIC 12 digits should pass", () => {
        const result = ValidationMaster.nic("200012345678", "LK");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid LK NIC wrong suffix letter should fail", () => {
        const result = ValidationMaster.nic("987654321A", "LK");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
        expect(result.message).toBe("Invalid NIC format");
    });

    test("invalid LK NIC too short should fail", () => {
        const result = ValidationMaster.nic("12345V", "LK");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    test("invalid LK NIC only digits wrong length should fail", () => {
        const result = ValidationMaster.nic("123456789", "LK");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇮🇳 India (IN) — Aadhaar
    // ─────────────────────────────────────────────

    test("valid IN Aadhaar should pass", () => {
        const result = ValidationMaster.nic("234567891234", "IN");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid IN Aadhaar starts with 0 should fail", () => {
        const result = ValidationMaster.nic("034567891234", "IN");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    test("invalid IN Aadhaar starts with 1 should fail", () => {
        const result = ValidationMaster.nic("134567891234", "IN");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    test("invalid IN Aadhaar too short should fail", () => {
        const result = ValidationMaster.nic("23456789", "IN");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    test("invalid IN Aadhaar with letters should fail", () => {
        const result = ValidationMaster.nic("2345678ABCDE", "IN");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇵🇰 Pakistan (PK) — CNIC
    // ─────────────────────────────────────────────

    test("valid PK CNIC with dashes should pass", () => {
        const result = ValidationMaster.nic("12345-1234567-1", "PK");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid PK CNIC without dashes should pass", () => {
        const result = ValidationMaster.nic("1234512345671", "PK");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid PK CNIC too short should fail", () => {
        const result = ValidationMaster.nic("12345-123-1", "PK");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    test("invalid PK CNIC with letters should fail", () => {
        const result = ValidationMaster.nic("ABCDE-1234567-1", "PK");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇧🇩 Bangladesh (BD) — NID
    // ─────────────────────────────────────────────

    test("valid BD NID 13 digits should pass", () => {
        const result = ValidationMaster.nic("1234567890123", "BD");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid BD NID 17 digits should pass", () => {
        const result = ValidationMaster.nic("12345678901234567", "BD");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid BD NID wrong length should fail", () => {
        const result = ValidationMaster.nic("123456789", "BD");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    test("invalid BD NID with letters should fail", () => {
        const result = ValidationMaster.nic("123456789ABCD", "BD");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇳🇵 Nepal (NP) — Citizenship
    // ─────────────────────────────────────────────

    test("valid NP citizenship formatted should pass", () => {
        const result = ValidationMaster.nic("05-02-12345-1", "NP");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid NP citizenship plain digits should pass", () => {
        const result = ValidationMaster.nic("123456789", "NP");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid NP citizenship too short should fail", () => {
        const result = ValidationMaster.nic("12345", "NP");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇧🇹 Bhutan (BT) — CID
    // ─────────────────────────────────────────────

    test("valid BT CID 11 digits should pass", () => {
        const result = ValidationMaster.nic("12345678901", "BT");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid BT CID too short should fail", () => {
        const result = ValidationMaster.nic("123456789", "BT");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    test("invalid BT CID too long should fail", () => {
        const result = ValidationMaster.nic("123456789012", "BT");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇲🇻 Maldives (MV) — NIC
    // ─────────────────────────────────────────────

    test("valid MV NIC letter + 6 digits should pass", () => {
        const result = ValidationMaster.nic("A123456", "MV");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid MV NIC letter + 8 digits should pass", () => {
        const result = ValidationMaster.nic("A12345678", "MV");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid MV NIC no letter prefix should fail", () => {
        const result = ValidationMaster.nic("123456", "MV");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    test("invalid MV NIC too short should fail", () => {
        const result = ValidationMaster.nic("A12345", "MV");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇦🇫 Afghanistan (AF) — Tazkira
    // ─────────────────────────────────────────────

    test("valid AF Tazkira 9 digits should pass", () => {
        const result = ValidationMaster.nic("123456789", "AF");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid AF Tazkira too short should fail", () => {
        const result = ValidationMaster.nic("12345678", "AF");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    test("invalid AF Tazkira with letters should fail", () => {
        const result = ValidationMaster.nic("12345ABCD", "AF");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇿🇦 South Africa (ZA)
    // ─────────────────────────────────────────────

    test("valid ZA ID 13 digits should pass", () => {
        const result = ValidationMaster.nic("9001015009087", "ZA");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid ZA ID too short should fail", () => {
        const result = ValidationMaster.nic("900101500908", "ZA");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇪🇬 Egypt (EG)
    // ─────────────────────────────────────────────

    test("valid EG National ID 14 digits should pass", () => {
        const result = ValidationMaster.nic("29001011234567", "EG");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid EG National ID too short should fail", () => {
        const result = ValidationMaster.nic("2900101123456", "EG");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇳🇬 Nigeria (NG) — NIN
    // ─────────────────────────────────────────────

    test("valid NG NIN 11 digits should pass", () => {
        const result = ValidationMaster.nic("12345678901", "NG");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid NG NIN too short should fail", () => {
        const result = ValidationMaster.nic("1234567890", "NG");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇬🇭 Ghana (GH) — Ghana Card
    // ─────────────────────────────────────────────

    test("valid GH Ghana Card should pass", () => {
        const result = ValidationMaster.nic("GHA-123456789-1", "GH");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid GH Ghana Card wrong prefix should fail", () => {
        const result = ValidationMaster.nic("GHB-123456789-1", "GH");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    test("invalid GH Ghana Card no dashes should fail", () => {
        const result = ValidationMaster.nic("GHA1234567891", "GH");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇺🇸 United States (US) — SSN
    // ─────────────────────────────────────────────

    test("valid US SSN with dashes should pass", () => {
        const result = ValidationMaster.nic("123-45-6789", "US");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid US SSN without dashes should pass", () => {
        const result = ValidationMaster.nic("123456789", "US");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid US SSN wrong format should fail", () => {
        const result = ValidationMaster.nic("123-456-789", "US");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    test("invalid US SSN too short should fail", () => {
        const result = ValidationMaster.nic("12345", "US");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇬🇧 United Kingdom (GB) — NIN
    // ─────────────────────────────────────────────

    test("valid GB NIN should pass", () => {
        const result = ValidationMaster.nic("AB123456C", "GB");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid GB NIN wrong suffix should fail", () => {
        const result = ValidationMaster.nic("AB123456E", "GB");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    test("invalid GB NIN too short should fail", () => {
        const result = ValidationMaster.nic("AB12345C", "GB");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇩🇪 Germany (DE) — Personalausweis
    // ─────────────────────────────────────────────

    test("valid DE ID 9 alphanumeric should pass", () => {
        const result = ValidationMaster.nic("L01X00T47", "DE");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid DE ID too short should fail", () => {
        const result = ValidationMaster.nic("L01X00T4", "DE");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇫🇷 France (FR) — INSEE
    // ─────────────────────────────────────────────

    test("valid FR INSEE 15 digits should pass", () => {
        const result = ValidationMaster.nic("123456789012345", "FR");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid FR INSEE too short should fail", () => {
        const result = ValidationMaster.nic("12345678901234", "FR");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇮🇹 Italy (IT) — Codice Fiscale
    // ─────────────────────────────────────────────

    test("valid IT Codice Fiscale should pass", () => {
        const result = ValidationMaster.nic("RSSMRA85T10A562S", "IT");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid IT Codice Fiscale too short should fail", () => {
        const result = ValidationMaster.nic("RSSMRA85T10A56", "IT");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇪🇸 Spain (ES) — DNI / NIE
    // ─────────────────────────────────────────────

    test("valid ES DNI should pass", () => {
        const result = ValidationMaster.nic("12345678Z", "ES");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid ES NIE should pass", () => {
        const result = ValidationMaster.nic("X1234567Z", "ES");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid ES DNI too short should fail", () => {
        const result = ValidationMaster.nic("1234567Z", "ES");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇧🇷 Brazil (BR) — CPF
    // ─────────────────────────────────────────────

    test("valid BR CPF with dots and dash should pass", () => {
        const result = ValidationMaster.nic("123.456.789-09", "BR");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid BR CPF 11 digits should pass", () => {
        const result = ValidationMaster.nic("12345678909", "BR");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid BR CPF too short should fail", () => {
        const result = ValidationMaster.nic("123456789", "BR");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇨🇳 China (CN) — Resident ID
    // ─────────────────────────────────────────────

    test("valid CN ID 18 digits should pass", () => {
        const result = ValidationMaster.nic("11010519491231002X", "CN");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid CN ID 18 digits no X should pass", () => {
        const result = ValidationMaster.nic("110105194912310021", "CN");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid CN ID too short should fail", () => {
        const result = ValidationMaster.nic("1101051949123100", "CN");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇯🇵 Japan (JP) — My Number
    // ─────────────────────────────────────────────

    test("valid JP My Number 12 digits should pass", () => {
        const result = ValidationMaster.nic("123456789012", "JP");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid JP My Number too short should fail", () => {
        const result = ValidationMaster.nic("12345678901", "JP");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇰🇷 South Korea (KR) — RRN
    // ─────────────────────────────────────────────

    test("valid KR RRN should pass", () => {
        const result = ValidationMaster.nic("900101-1234567", "KR");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid KR RRN no dash should fail", () => {
        const result = ValidationMaster.nic("9001011234567", "KR");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇸🇬 Singapore (SG) — NRIC / FIN
    // ─────────────────────────────────────────────

    test("valid SG NRIC S prefix should pass", () => {
        const result = ValidationMaster.nic("S1234567A", "SG");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid SG FIN F prefix should pass", () => {
        const result = ValidationMaster.nic("F1234567A", "SG");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid SG NRIC wrong prefix should fail", () => {
        const result = ValidationMaster.nic("A1234567A", "SG");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    test("invalid SG NRIC too short should fail", () => {
        const result = ValidationMaster.nic("S123456A", "SG");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇲🇾 Malaysia (MY) — MyKad
    // ─────────────────────────────────────────────

    test("valid MY MyKad with dashes should pass", () => {
        const result = ValidationMaster.nic("900101-14-5678", "MY");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid MY MyKad no dashes should fail", () => {
        const result = ValidationMaster.nic("900101145678", "MY");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇦🇪 UAE (AE) — Emirates ID
    // ─────────────────────────────────────────────

    test("valid AE Emirates ID should pass", () => {
        const result = ValidationMaster.nic("784-1990-1234567-1", "AE");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid AE Emirates ID no dashes should fail", () => {
        const result = ValidationMaster.nic("784199012345671", "AE");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇸🇦 Saudi Arabia (SA)
    // ─────────────────────────────────────────────

    test("valid SA National ID starts with 1 should pass", () => {
        const result = ValidationMaster.nic("1234567890", "SA");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid SA Resident ID starts with 2 should pass", () => {
        const result = ValidationMaster.nic("2234567890", "SA");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid SA ID starts with 3 should fail", () => {
        const result = ValidationMaster.nic("3234567890", "SA");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇹🇷 Turkey (TR) — TC Kimlik
    // ─────────────────────────────────────────────

    test("valid TR TC Kimlik 11 digits should pass", () => {
        const result = ValidationMaster.nic("12345678901", "TR");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid TR TC Kimlik starts with 0 should fail", () => {
        const result = ValidationMaster.nic("02345678901", "TR");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    test("invalid TR TC Kimlik too short should fail", () => {
        const result = ValidationMaster.nic("1234567890", "TR");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇦🇺 Australia (AU) — TFN
    // ─────────────────────────────────────────────

    test("valid AU TFN 8 digits should pass", () => {
        const result = ValidationMaster.nic("12345678", "AU");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid AU TFN 9 digits should pass", () => {
        const result = ValidationMaster.nic("123456789", "AU");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid AU TFN too short should fail", () => {
        const result = ValidationMaster.nic("1234567", "AU");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇨🇦 Canada (CA) — SIN
    // ─────────────────────────────────────────────

    test("valid CA SIN with dashes should pass", () => {
        const result = ValidationMaster.nic("123-456-789", "CA");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid CA SIN without dashes should pass", () => {
        const result = ValidationMaster.nic("123456789", "CA");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid CA SIN too short should fail", () => {
        const result = ValidationMaster.nic("12345678", "CA");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇲🇽 Mexico (MX) — CURP
    // ─────────────────────────────────────────────

    test("valid MX CURP should pass", () => {
        const result = ValidationMaster.nic("BADD110313HCMLNS09", "MX");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid MX CURP too short should fail", () => {
        const result = ValidationMaster.nic("BADD110313HCMLN", "MX");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇷🇺 Russia (RU) — Internal Passport
    // ─────────────────────────────────────────────

    test("valid RU passport with space should pass", () => {
        const result = ValidationMaster.nic("1234 567890", "RU");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid RU passport without space should pass", () => {
        const result = ValidationMaster.nic("1234567890", "RU");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid RU passport too short should fail", () => {
        const result = ValidationMaster.nic("123456789", "RU");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇮🇩 Indonesia (ID) — NIK
    // ─────────────────────────────────────────────

    test("valid ID NIK 16 digits should pass", () => {
        const result = ValidationMaster.nic("1234567890123456", "ID");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid ID NIK too short should fail", () => {
        const result = ValidationMaster.nic("123456789012345", "ID");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇻🇳 Vietnam (VN) — CCCD
    // ─────────────────────────────────────────────

    test("valid VN CCCD 12 digits should pass", () => {
        const result = ValidationMaster.nic("123456789012", "VN");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid VN CCCD too short should fail", () => {
        const result = ValidationMaster.nic("12345678901", "VN");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🌍 DEFAULT Pattern
    // ─────────────────────────────────────────────

    test("valid default NIC at least 6 digits should pass", () => {
        const result = ValidationMaster.nic("123456");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid default NIC long digits should pass", () => {
        const result = ValidationMaster.nic("12345678901234");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid default NIC too short should fail", () => {
        const result = ValidationMaster.nic("12345");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    test("invalid default NIC with letters should fail", () => {
        const result = ValidationMaster.nic("123ABC");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

});