// src/index.js

import { validateEmail } from "./validators/email.validator.js";
import { validatePhone } from "./validators/phone.validator.js";
import { validateNic } from "./validators/nic.validator.js";
import { validatePassport } from "./validators/passport.validation.js";
import { validateStrengthPassport } from "./validators/passowrd.validation.js";
import { validateBankCardType } from "./validators/bank.cardtype.validator.js";

const ValidationMaster = {
  EmailValidation: (value) => validateEmail(value),
  PhoneValidation: (value) => validatePhone(value),
  NicValidation: (value, country) => validateNic(value, country),
  PassportValidation: (value, countryCode) => validatePassport(value, countryCode),
  PasswordStrengthValidation: (value) => validateStrengthPassport(value),
  BankCardTypeValidation: (value) => validateBankCardType(value),

  // cleaner alternative API
  email: validateEmail,
  phone: validatePhone,
  nic: validateNic,
  passport: validatePassport,
  passwordStrength: validateStrengthPassport,
  bankCardType: validateBankCardType
};

export default ValidationMaster;