# ✅ verify-master

A lightweight, zero-dependency validation library with built-in support for **195 countries** - designed to grow with your project.
 
- 📧 Email
- 📞 Phone Number
- 🪪 NIC / National ID
- 🛂 Passport
- _More coming soon..._

[![npm version](https://img.shields.io/npm/v/verify-master.svg)](https://www.npmjs.com/package/verify-master)
[![license](https://img.shields.io/npm/l/verify-master.svg)](https://github.com/your-username/verify-master/blob/main/LICENSE)
[![downloads](https://img.shields.io/npm/dm/verify-master.svg)](https://www.npmjs.com/package/verify-master)

---

## 📦 Installation

```bash
npm install verify-master
```

---

## 🚀 Quick Start

```javascript
import ValidationMaster from "verify-master";

const result = ValidationMaster.email("test@gmail.com");

console.log(result);
// { success: true, code: 200, message: "Email is valid", data: "test@gmail.com" }
```

---

## 📋 Response Format

Every validator returns a **consistent response object**:

```javascript
// ✅ Success
{
  success: true,
  status: 200,
  message: "Valid",
  data: "<cleaned_input>"
}


// ❌ Failure
{
  success: false,
  status: 400,
  message: "<reason>",
  data: null
}
```

---

## 🧩 Available Validators

| Validator | Method | Countries |
|-----------|--------|-----------|------|
| 📧 Email | `ValidationMaster.email()` | Universal |
| 📞 Phone | `ValidationMaster.phone()` | 195 |
| 🪪 NIC / National ID | `ValidationMaster.nic()` | 195 |
| 🛂 Passport | `ValidationMaster.passport()` | 195 |
| _More coming soon..._ | — | — | — |

> 📖 **Full documentation, examples, and supported country lists:**
> ### 👉 [verify-master Documentation](https://github.com/your-username/verify-master/wiki)

---

## 💡 Usage Examples

```javascript
import ValidationMaster from "verify-master";

// 📧 Email
ValidationMaster.email("test@gmail.com");

// 📞 Phone — with country code
ValidationMaster.phone("+94771234567", "LK");

// 🪪 NIC — with country code
ValidationMaster.nic("987654321V", "LK");

// 🛂 Passport — with country code
ValidationMaster.passport("N1234567", "LK");
```

---

## ⚠️ Error Messages

All validators follow a consistent error pattern:

| Message | Reason |
|---------|--------|
| `"X must be a string"` | Input is not a string type |
| `"X cannot be empty"` | Input is empty or whitespace |
| `"Unsupported country code"` | Country code not supported |
| `"Invalid X format"` | Input fails validation pattern |

---

## 📄 License

[MIT](./LICENSE)

---

## 🤝 Contributing

Pull requests are welcome! Please open an issue first to discuss what you'd like to change.

1. Fork the repo
2. Create your branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 🔗 Links

- [npm Package](https://www.npmjs.com/package/verify-master)
- [GitHub Repository](https://github.com/your-username/verify-master)
- [📖 Full Documentation](https://github.com/your-username/verify-master/wiki)
- [Issue Tracker](https://github.com/your-username/verify-master/issues)

---

<p align="center">Made with ❤️ — <strong>verify-master</strong></p>