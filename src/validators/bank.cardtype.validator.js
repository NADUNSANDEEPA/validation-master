import CommonResponse from "../dto/CommonResponse";

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

export function validateBankCardType(cardNumber) {
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

