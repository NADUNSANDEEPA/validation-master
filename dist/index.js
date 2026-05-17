// src/validators/email.js
function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

// src/validators/phone.js
function validatePhone(phone) {
  const pattern = /^\+?[0-9]{7,15}$/;
  return pattern.test(phone);
}

// src/index.js


const ValidationMaster = {
  EmailValidation: (value) => validateEmail(value),
  PhoneValidation: (value) => validatePhone(value),

  // cleaner alternative API
  email: validateEmail,
  phone: validatePhone,
};

export { ValidationMaster as default };
