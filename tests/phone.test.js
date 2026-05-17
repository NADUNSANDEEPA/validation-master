// tests/phone.test.js
import ValidationMaster from "../src/index.js";

describe("Phone Validation Tests", () => {

    // ─────────────────────────────────────────────
    // 🇱🇰 Sri Lanka (LK)
    // ─────────────────────────────────────────────

    test("valid Sri Lankan international phone should pass", () => {
        const result = ValidationMaster.phone("+94711044609", "LK");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
        expect(result.data).toBe("+94711044609");
    });

    test("valid Sri Lankan local phone should pass", () => {
        const result = ValidationMaster.phone("0771234567", "LK");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid Sri Lankan phone with spaces should pass", () => {
        const result = ValidationMaster.phone("+94 77 123 4567", "LK");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid Sri Lankan phone with dashes should pass", () => {
        const result = ValidationMaster.phone("+94-77-123-4567", "LK");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid Sri Lankan phone with brackets should pass", () => {
        const result = ValidationMaster.phone("(077)1234567", "LK");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid Sri Lankan phone with letters should fail", () => {
        const result = ValidationMaster.phone("+94ABC12345", "LK");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    test("too short Sri Lankan phone should fail", () => {
        const result = ValidationMaster.phone("123", "LK");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    test("empty Sri Lankan phone should fail", () => {
        const result = ValidationMaster.phone("", "LK");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇺🇸 United States (US)
    // ─────────────────────────────────────────────

    test("valid US international phone should pass", () => {
        const result = ValidationMaster.phone("+12025550123", "US");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid US local phone should pass", () => {
        const result = ValidationMaster.phone("2025550123", "US");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid US phone too short should fail", () => {
        const result = ValidationMaster.phone("12345", "US");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
        expect(result.message).toBe("Invalid phone number format");
    });

    test("invalid US phone with letters should fail", () => {
        const result = ValidationMaster.phone("+1ABC5550123", "US");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇮🇳 India (IN)
    // ─────────────────────────────────────────────

    test("valid Indian mobile number international format should pass", () => {
        const result = ValidationMaster.phone("+919876543210", "IN");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid Indian mobile number local format should pass", () => {
        const result = ValidationMaster.phone("9876543210", "IN");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid Indian number starts with 5 should fail", () => {
        const result = ValidationMaster.phone("5876543210", "IN");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    test("invalid Indian number too short should fail", () => {
        const result = ValidationMaster.phone("98765", "IN");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    test("invalid Indian number with letters should fail", () => {
        const result = ValidationMaster.phone("+91ABC6543210", "IN");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇬🇧 United Kingdom (GB)
    // ─────────────────────────────────────────────

    test("valid UK international phone should pass", () => {
        const result = ValidationMaster.phone("+447911123456", "GB");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid UK local phone should pass", () => {
        const result = ValidationMaster.phone("07911123456", "GB");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid UK phone too short should fail", () => {
        const result = ValidationMaster.phone("0791112", "GB");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇦🇺 Australia (AU)
    // ─────────────────────────────────────────────

    test("valid Australian international phone should pass", () => {
        const result = ValidationMaster.phone("+61412345678", "AU");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid Australian local phone should pass", () => {
        const result = ValidationMaster.phone("0412345678", "AU");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid Australian phone should fail", () => {
        const result = ValidationMaster.phone("0312345678", "AU");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇨🇦 Canada (CA)
    // ─────────────────────────────────────────────

    test("valid Canadian phone should pass", () => {
        const result = ValidationMaster.phone("+16135550123", "CA");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid Canadian phone should fail", () => {
        const result = ValidationMaster.phone("1234", "CA");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇩🇪 Germany (DE)
    // ─────────────────────────────────────────────

    test("valid German mobile phone should pass", () => {
        const result = ValidationMaster.phone("+4915123456789", "DE");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid German local mobile phone should pass", () => {
        const result = ValidationMaster.phone("015123456789", "DE");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid German phone should fail", () => {
        const result = ValidationMaster.phone("01234", "DE");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇫🇷 France (FR)
    // ─────────────────────────────────────────────

    test("valid French mobile phone should pass", () => {
        const result = ValidationMaster.phone("+33612345678", "FR");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid French local mobile phone should pass", () => {
        const result = ValidationMaster.phone("0612345678", "FR");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid French phone should fail", () => {
        const result = ValidationMaster.phone("0512345678", "FR");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇯🇵 Japan (JP)
    // ─────────────────────────────────────────────

    test("valid Japanese mobile phone should pass", () => {
        const result = ValidationMaster.phone("+819012345678", "JP");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid Japanese local mobile phone should pass", () => {
        const result = ValidationMaster.phone("09012345678", "JP");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid Japanese phone should fail", () => {
        const result = ValidationMaster.phone("01234", "JP");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇨🇳 China (CN)
    // ─────────────────────────────────────────────

    test("valid Chinese mobile phone should pass", () => {
        const result = ValidationMaster.phone("+8613812345678", "CN");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid Chinese local mobile phone should pass", () => {
        const result = ValidationMaster.phone("13812345678", "CN");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid Chinese phone should fail", () => {
        const result = ValidationMaster.phone("12345678", "CN");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇵🇰 Pakistan (PK)
    // ─────────────────────────────────────────────

    test("valid Pakistani international phone should pass", () => {
        const result = ValidationMaster.phone("+923001234567", "PK");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid Pakistani local phone should pass", () => {
        const result = ValidationMaster.phone("03001234567", "PK");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid Pakistani phone should fail", () => {
        const result = ValidationMaster.phone("12345", "PK");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇧🇩 Bangladesh (BD)
    // ─────────────────────────────────────────────

    test("valid Bangladeshi international phone should pass", () => {
        const result = ValidationMaster.phone("+8801712345678", "BD");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid Bangladeshi local phone should pass", () => {
        const result = ValidationMaster.phone("01712345678", "BD");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid Bangladeshi phone should fail", () => {
        const result = ValidationMaster.phone("12345", "BD");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇳🇬 Nigeria (NG)
    // ─────────────────────────────────────────────

    test("valid Nigerian international phone should pass", () => {
        const result = ValidationMaster.phone("+2348012345678", "NG");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid Nigerian local phone should pass", () => {
        const result = ValidationMaster.phone("08012345678", "NG");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid Nigerian phone should fail", () => {
        const result = ValidationMaster.phone("12345", "NG");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇧🇷 Brazil (BR)
    // ─────────────────────────────────────────────

    test("valid Brazilian mobile phone should pass", () => {
        const result = ValidationMaster.phone("+5511912345678", "BR");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid Brazilian phone should fail", () => {
        const result = ValidationMaster.phone("12345", "BR");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇿🇦 South Africa (ZA)
    // ─────────────────────────────────────────────

    test("valid South African international phone should pass", () => {
        const result = ValidationMaster.phone("+27712345678", "ZA");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid South African local phone should pass", () => {
        const result = ValidationMaster.phone("0712345678", "ZA");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid South African phone should fail", () => {
        const result = ValidationMaster.phone("12345", "ZA");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇰🇪 Kenya (KE)
    // ─────────────────────────────────────────────

    test("valid Kenyan international phone should pass", () => {
        const result = ValidationMaster.phone("+254712345678", "KE");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid Kenyan local phone should pass", () => {
        const result = ValidationMaster.phone("0712345678", "KE");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid Kenyan phone should fail", () => {
        const result = ValidationMaster.phone("12345", "KE");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇸🇦 Saudi Arabia (SA)
    // ─────────────────────────────────────────────

    test("valid Saudi Arabian international phone should pass", () => {
        const result = ValidationMaster.phone("+966512345678", "SA");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid Saudi Arabian local phone should pass", () => {
        const result = ValidationMaster.phone("0512345678", "SA");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid Saudi Arabian phone should fail", () => {
        const result = ValidationMaster.phone("12345", "SA");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇦🇪 UAE (AE)
    // ─────────────────────────────────────────────

    test("valid UAE international phone should pass", () => {
        const result = ValidationMaster.phone("+971501234567", "AE");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid UAE local phone should pass", () => {
        const result = ValidationMaster.phone("0501234567", "AE");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid UAE phone should fail", () => {
        const result = ValidationMaster.phone("12345", "AE");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇲🇾 Malaysia (MY)
    // ─────────────────────────────────────────────

    test("valid Malaysian international phone should pass", () => {
        const result = ValidationMaster.phone("+60112345678", "MY");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid Malaysian local phone should pass", () => {
        const result = ValidationMaster.phone("0112345678", "MY");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid Malaysian phone should fail", () => {
        const result = ValidationMaster.phone("12345", "MY");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇸🇬 Singapore (SG)
    // ─────────────────────────────────────────────

    test("valid Singapore international phone should pass", () => {
        const result = ValidationMaster.phone("+6591234567", "SG");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid Singapore local phone should pass", () => {
        const result = ValidationMaster.phone("91234567", "SG");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid Singapore phone should fail", () => {
        const result = ValidationMaster.phone("12345", "SG");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇵🇭 Philippines (PH)
    // ─────────────────────────────────────────────

    test("valid Philippine international phone should pass", () => {
        const result = ValidationMaster.phone("+639171234567", "PH");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid Philippine local phone should pass", () => {
        const result = ValidationMaster.phone("09171234567", "PH");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid Philippine phone should fail", () => {
        const result = ValidationMaster.phone("12345", "PH");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇮🇩 Indonesia (ID)
    // ─────────────────────────────────────────────

    test("valid Indonesian international phone should pass", () => {
        const result = ValidationMaster.phone("+6281234567890", "ID");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid Indonesian local phone should pass", () => {
        const result = ValidationMaster.phone("081234567890", "ID");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid Indonesian phone should fail", () => {
        const result = ValidationMaster.phone("12345", "ID");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇹🇷 Turkey (TR)
    // ─────────────────────────────────────────────

    test("valid Turkish international phone should pass", () => {
        const result = ValidationMaster.phone("+905321234567", "TR");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid Turkish local phone should pass", () => {
        const result = ValidationMaster.phone("05321234567", "TR");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid Turkish phone should fail", () => {
        const result = ValidationMaster.phone("12345", "TR");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇪🇬 Egypt (EG)
    // ─────────────────────────────────────────────

    test("valid Egyptian international phone should pass", () => {
        const result = ValidationMaster.phone("+201012345678", "EG");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid Egyptian local phone should pass", () => {
        const result = ValidationMaster.phone("01012345678", "EG");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid Egyptian phone should fail", () => {
        const result = ValidationMaster.phone("12345", "EG");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇮🇹 Italy (IT)
    // ─────────────────────────────────────────────

    test("valid Italian mobile phone should pass", () => {
        const result = ValidationMaster.phone("+393201234567", "IT");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid Italian local mobile phone should pass", () => {
        const result = ValidationMaster.phone("3201234567", "IT");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid Italian phone should fail", () => {
        const result = ValidationMaster.phone("12345", "IT");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇪🇸 Spain (ES)
    // ─────────────────────────────────────────────

    test("valid Spanish mobile phone should pass", () => {
        const result = ValidationMaster.phone("+34612345678", "ES");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid Spanish local mobile phone should pass", () => {
        const result = ValidationMaster.phone("612345678", "ES");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid Spanish phone should fail", () => {
        const result = ValidationMaster.phone("12345", "ES");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇷🇺 Russia (RU)
    // ─────────────────────────────────────────────

    test("valid Russian international phone should pass", () => {
        const result = ValidationMaster.phone("+79161234567", "RU");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid Russian local phone should pass", () => {
        const result = ValidationMaster.phone("89161234567", "RU");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid Russian phone should fail", () => {
        const result = ValidationMaster.phone("12345", "RU");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇲🇽 Mexico (MX)
    // ─────────────────────────────────────────────

    test("valid Mexican international phone should pass", () => {
        const result = ValidationMaster.phone("+525512345678", "MX");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid Mexican local phone should pass", () => {
        const result = ValidationMaster.phone("5512345678", "MX");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid Mexican phone should fail", () => {
        const result = ValidationMaster.phone("12345", "MX");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇹🇭 Thailand (TH)
    // ─────────────────────────────────────────────

    test("valid Thai international phone should pass", () => {
        const result = ValidationMaster.phone("+66812345678", "TH");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid Thai local phone should pass", () => {
        const result = ValidationMaster.phone("0812345678", "TH");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid Thai phone should fail", () => {
        const result = ValidationMaster.phone("12345", "TH");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇻🇳 Vietnam (VN)
    // ─────────────────────────────────────────────

    test("valid Vietnamese international phone should pass", () => {
        const result = ValidationMaster.phone("+84912345678", "VN");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid Vietnamese local phone should pass", () => {
        const result = ValidationMaster.phone("0912345678", "VN");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid Vietnamese phone should fail", () => {
        const result = ValidationMaster.phone("12345", "VN");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇰🇷 South Korea (KR)
    // ─────────────────────────────────────────────

    test("valid South Korean international phone should pass", () => {
        const result = ValidationMaster.phone("+821012345678", "KR");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid South Korean local phone should pass", () => {
        const result = ValidationMaster.phone("01012345678", "KR");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid South Korean phone should fail", () => {
        const result = ValidationMaster.phone("12345", "KR");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇳🇿 New Zealand (NZ)
    // ─────────────────────────────────────────────

    test("valid New Zealand international phone should pass", () => {
        const result = ValidationMaster.phone("+64212345678", "NZ");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid New Zealand local phone should pass", () => {
        const result = ValidationMaster.phone("0212345678", "NZ");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid New Zealand phone should fail", () => {
        const result = ValidationMaster.phone("12345", "NZ");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇵🇹 Portugal (PT)
    // ─────────────────────────────────────────────

    test("valid Portuguese international phone should pass", () => {
        const result = ValidationMaster.phone("+351912345678", "PT");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid Portuguese local phone should pass", () => {
        const result = ValidationMaster.phone("912345678", "PT");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid Portuguese phone should fail", () => {
        const result = ValidationMaster.phone("12345", "PT");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇳🇱 Netherlands (NL)
    // ─────────────────────────────────────────────

    test("valid Dutch international phone should pass", () => {
        const result = ValidationMaster.phone("+31612345678", "NL");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid Dutch local phone should pass", () => {
        const result = ValidationMaster.phone("0612345678", "NL");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid Dutch phone should fail", () => {
        const result = ValidationMaster.phone("12345", "NL");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇵🇱 Poland (PL)
    // ─────────────────────────────────────────────

    test("valid Polish international phone should pass", () => {
        const result = ValidationMaster.phone("+48512345678", "PL");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid Polish local phone should pass", () => {
        const result = ValidationMaster.phone("512345678", "PL");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid Polish phone should fail", () => {
        const result = ValidationMaster.phone("12345", "PL");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇦🇷 Argentina (AR)
    // ─────────────────────────────────────────────

    test("valid Argentinian international phone should pass", () => {
        const result = ValidationMaster.phone("+541112345678", "AR");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid Argentinian local phone should pass", () => {
        const result = ValidationMaster.phone("1112345678", "AR");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid Argentinian phone should fail", () => {
        const result = ValidationMaster.phone("12345", "AR");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // 🇨🇴 Colombia (CO)
    // ─────────────────────────────────────────────

    test("valid Colombian international phone should pass", () => {
        const result = ValidationMaster.phone("+573101234567", "CO");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid Colombian local phone should pass", () => {
        const result = ValidationMaster.phone("3101234567", "CO");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid Colombian phone should fail", () => {
        const result = ValidationMaster.phone("12345", "CO");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    // ─────────────────────────────────────────────
    // ❌ General Invalid Inputs
    // ─────────────────────────────────────────────

    test("non-string phone number should fail", () => {
        const result = ValidationMaster.phone(771234567, "LK");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
        expect(result.message).toBe("Phone number must be a string");
    });

    test("null phone number should fail", () => {
        const result = ValidationMaster.phone(null, "LK");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
        expect(result.message).toBe("Phone number must be a string");
    });

    test("undefined phone number should fail", () => {
        const result = ValidationMaster.phone(undefined, "LK");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
        expect(result.message).toBe("Phone number must be a string");
    });

    test("boolean phone number should fail", () => {
        const result = ValidationMaster.phone(true, "LK");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
        expect(result.message).toBe("Phone number must be a string");
    });

    test("array phone number should fail", () => {
        const result = ValidationMaster.phone(["+94771234567"], "LK");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
        expect(result.message).toBe("Phone number must be a string");
    });

    // ─────────────────────────────────────────────
    // 🌍 DEFAULT Pattern (no country code)
    // ─────────────────────────────────────────────

    test("valid default international number should pass", () => {
        const result = ValidationMaster.phone("+8613812345678");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("valid default number without plus should pass", () => {
        const result = ValidationMaster.phone("8613812345678");
        expect(result.success).toBe(true);
        expect(result.status).toBe(200);
    });

    test("invalid default number too short should fail", () => {
        const result = ValidationMaster.phone("12");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    test("invalid default number with letters should fail", () => {
        const result = ValidationMaster.phone("+1ABC234567");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

    test("empty default phone should fail", () => {
        const result = ValidationMaster.phone("");
        expect(result.success).toBe(false);
        expect(result.status).toBe(400);
    });

});