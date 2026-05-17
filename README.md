# ✅ verify-master

A lightweight, zero-dependency validation library for **Email**, **Phone**, **NIC**, and **Passport** — with built-in support for **195 countries**.

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

// Email
const email = ValidationMaster.email("test@gmail.com");

// Phone
const phone = ValidationMaster.phone("+94771234567", "LK");

// NIC
const nic = ValidationMaster.nic("987654321V", "LK");

// Passport
const passport = ValidationMaster.passport("N1234567", "LK");
```

---

## 📋 Response Format

Every validator returns a consistent response object:

```javascript
// ✅ Success
{
  success: true,
  status: 200,
  code: 200,
  message: "Valid",
  data: "<cleaned_input>"
}

// ❌ Failure
{
  success: false,
  status: 400,
  code: 400,
  message: "<reason>",
  data: null
}
```

---

## 📧 Email Validation

```javascript
ValidationMaster.email(email)
```

| Parameter | Type   | Required | Description        |
|-----------|--------|----------|--------------------|
| `email`   | string | ✅       | Email address to validate |

### Examples

```javascript
ValidationMaster.email("test@gmail.com");
// { success: true, code: 200, message: "Email is valid" }

ValidationMaster.email("testgmail.com");
// { success: false, code: 400, message: "Invalid email format" }

ValidationMaster.email(12345);
// { success: false, code: 400, message: "Email must be a string" }
```

### Validation Rules
- Must be a string
- Must contain `@`
- Must have a valid domain
- No spaces allowed

---

## 📞 Phone Validation

```javascript
ValidationMaster.phone(phone, countryCode?)
```

| Parameter     | Type   | Required | Default     | Description                        |
|---------------|--------|----------|-------------|------------------------------------|
| `phone`       | string | ✅       | —           | Phone number to validate           |
| `countryCode` | string | ❌       | `"DEFAULT"` | ISO 3166-1 alpha-2 country code    |

### Examples

```javascript
// International format
ValidationMaster.phone("+94771234567", "LK");
// { success: true, code: 200, data: "+94771234567" }

// Local format
ValidationMaster.phone("0771234567", "LK");
// { success: true, code: 200 }

// With spaces / dashes / brackets (auto-cleaned)
ValidationMaster.phone("+94 77 123 4567", "LK");
ValidationMaster.phone("+94-77-123-4567", "LK");
ValidationMaster.phone("(077)1234567", "LK");

// Default (E.164 fallback)
ValidationMaster.phone("+8613812345678");
// { success: true, code: 200 }

// Invalid
ValidationMaster.phone("12345", "LK");
// { success: false, code: 400, message: "Invalid phone number format" }

ValidationMaster.phone(771234567, "LK");
// { success: false, code: 400, message: "Phone number must be a string" }
```

### Supported Formats
- International: `+<country_code><number>`
- Local: `0<number>` or bare `<number>`
- Separators: spaces, dashes (`-`), dots (`.`), brackets `()` are auto-stripped

### Supported Countries (Phone)

<details>
<summary>🌍 Africa (54 countries)</summary>

`DZ` `AO` `BJ` `BW` `BF` `BI` `CV` `CM` `CF` `TD` `KM` `CG` `CD` `CI` `DJ`
`EG` `GQ` `ER` `SZ` `ET` `GA` `GM` `GH` `GN` `GW` `KE` `LS` `LR` `LY` `MG`
`MW` `ML` `MR` `MU` `MA` `MZ` `NA` `NE` `NG` `RW` `ST` `SN` `SC` `SL` `SO`
`ZA` `SS` `SD` `TZ` `TG` `TN` `UG` `ZM` `ZW`

</details>

<details>
<summary>🌎 Americas (30 countries)</summary>

`AG` `AR` `BS` `BB` `BZ` `BO` `BR` `CA` `CL` `CO` `CR` `CU` `DM` `DO` `EC`
`SV` `GD` `GT` `GY` `HT` `HN` `JM` `MX` `NI` `PA` `PY` `PE` `KN` `LC` `VC`
`SR` `TT` `US` `UY` `VE`

</details>

<details>
<summary>🌏 Asia (45 countries)</summary>

`AF` `AM` `AZ` `BH` `BD` `BT` `BN` `KH` `CN` `CY` `GE` `IN` `ID` `IR` `IQ`
`IL` `JP` `JO` `KZ` `KW` `KG` `LA` `LB` `MY` `MV` `MN` `MM` `NP` `KP` `OM`
`PK` `PS` `PH` `QA` `SA` `SG` `KR` `LK` `SY` `TW` `TJ` `TH` `TL` `TM` `AE`
`UZ` `VN` `YE`

</details>

<details>
<summary>🌍 Europe (36 countries)</summary>

`AL` `AD` `AT` `BY` `BE` `BA` `BG` `HR` `CZ` `DK` `EE` `FI` `FR` `DE` `GR`
`HU` `IS` `IE` `IT` `XK` `LV` `LI` `LT` `LU` `MT` `MD` `MC` `ME` `NL` `MK`
`NO` `PL` `PT` `RO` `RU` `SM` `RS` `SK` `SI` `ES` `SE` `CH` `TR` `UA` `GB` `VA`

</details>

<details>
<summary>🌏 Oceania (15 countries)</summary>

`AU` `FJ` `KI` `MH` `FM` `NR` `NZ` `NU` `PW` `PG` `WS` `SB` `TO` `TV` `VU`

</details>

---

## 🪪 NIC Validation

```javascript
ValidationMaster.nic(nic, countryCode?)
```

| Parameter     | Type   | Required | Default     | Description                     |
|---------------|--------|----------|-------------|---------------------------------|
| `nic`         | string | ✅       | —           | National ID number to validate  |
| `countryCode` | string | ❌       | `"DEFAULT"` | ISO 3166-1 alpha-2 country code |

### Examples

```javascript
// Sri Lanka — Old NIC
ValidationMaster.nic("987654321V", "LK");
// { success: true, code: 200, data: "987654321V" }

// Sri Lanka — New NIC
ValidationMaster.nic("200012345678", "LK");
// { success: true, code: 200 }

// India — Aadhaar
ValidationMaster.nic("234567891234", "IN");
// { success: true, code: 200 }

// Pakistan — CNIC
ValidationMaster.nic("12345-1234567-1", "PK");
// { success: true, code: 200 }

// Invalid
ValidationMaster.nic("", "LK");
// { success: false, code: 400, message: "NIC cannot be empty" }

ValidationMaster.nic(123456, "LK");
// { success: false, code: 400, message: "NIC must be a string" }

ValidationMaster.nic("123456", "XX");
// { success: false, code: 400, message: "Unsupported country code" }
```

### Supported Countries (NIC)

<details>
<summary>🌏 South Asia</summary>

| Country | Format | Example |
|---------|--------|---------|
| 🇱🇰 Sri Lanka `LK` | `9 digits + V/X` or `12 digits` | `987654321V` / `200012345678` |
| 🇮🇳 India `IN` | `12 digits` (starts 2–9) | `234567891234` |
| 🇵🇰 Pakistan `PK` | `XXXXX-XXXXXXX-X` | `12345-1234567-1` |
| 🇧🇩 Bangladesh `BD` | `13 or 17 digits` | `1234567890123` |
| 🇳🇵 Nepal `NP` | `XX-XX-XXXXX-X` or `9–11 digits` | `05-02-12345-1` |
| 🇧🇹 Bhutan `BT` | `11 digits` | `12345678901` |
| 🇲🇻 Maldives `MV` | `Letter + 6–8 digits` | `A123456` |
| 🇦🇫 Afghanistan `AF` | `9 digits` | `123456789` |

</details>

<details>
<summary>🌍 Africa (54 countries)</summary>

`DZ` `AO` `BJ` `BW` `BF` `BI` `CM` `CV` `CF` `TD` `KM` `CG` `CD` `CI` `DJ`
`EG` `GQ` `ER` `SZ` `ET` `GA` `GM` `GH` `GN` `GW` `KE` `LS` `LR` `LY` `MG`
`MW` `ML` `MR` `MU` `MA` `MZ` `NA` `NE` `NG` `RW` `ST` `SN` `SC` `SL` `SO`
`ZA` `SS` `SD` `TZ` `TG` `TN` `UG` `ZM` `ZW`

</details>

<details>
<summary>🌎 Americas (30 countries)</summary>

`AG` `AR` `BS` `BB` `BZ` `BO` `BR` `CA` `CL` `CO` `CR` `CU` `DO` `EC` `SV`
`GT` `GY` `HT` `HN` `JM` `MX` `NI` `PA` `PY` `PE` `TT` `US` `UY` `VE`

</details>

<details>
<summary>🌏 Asia — East & Southeast (16 countries)</summary>

`BN` `KH` `CN` `ID` `JP` `KP` `KR` `LA` `MY` `MN` `MM` `PH` `SG` `TW` `TL` `VN`

</details>

<details>
<summary>🌏 Asia — Central & West / Middle East (23 countries)</summary>

`AM` `AZ` `BH` `CY` `GE` `IR` `IQ` `IL` `JO` `KZ` `KW` `KG` `LB` `OM` `PS`
`QA` `SA` `SY` `TJ` `TM` `AE` `UZ` `YE`

</details>

<details>
<summary>🌍 Europe (36 countries)</summary>

`AL` `AT` `BY` `BE` `BA` `BG` `HR` `CZ` `DK` `EE` `FI` `FR` `DE` `GR` `HU`
`IS` `IE` `IT` `XK` `LV` `LT` `LU` `MT` `MD` `ME` `NL` `MK` `NO` `PL` `PT`
`RO` `RU` `RS` `SK` `SI` `ES` `SE` `CH` `TR` `UA` `GB`

</details>

<details>
<summary>🌏 Oceania (8 countries)</summary>

`AU` `FJ` `PG` `WS` `SB` `TO` `VU` `NZ`

</details>

---

## 🛂 Passport Validation

```javascript
ValidationMaster.passport(passport, countryCode?)
```

| Parameter     | Type   | Required | Default     | Description                      |
|---------------|--------|----------|-------------|----------------------------------|
| `passport`    | string | ✅       | —           | Passport number to validate      |
| `countryCode` | string | ❌       | `"DEFAULT"` | ISO 3166-1 alpha-2 country code  |

### Examples

```javascript
// Sri Lanka
ValidationMaster.passport("N1234567", "LK");
// { success: true, code: 200, data: "N1234567" }

// United States
ValidationMaster.passport("A12345678", "US");
// { success: true, code: 200 }

// Default (ICAO fallback)
ValidationMaster.passport("AB1234567");
// { success: true, code: 200 }

// Invalid
ValidationMaster.passport("", "LK");
// { success: false, code: 400, message: "Passport number cannot be empty" }

ValidationMaster.passport(12345678, "LK");
// { success: false, code: 400, message: "Passport number must be a string" }
```

---

## ⚠️ Error Messages Reference

| Validator | Message | Reason |
|-----------|---------|--------|
| All | `"X must be a string"` | Input is not a string |
| All | `"X cannot be empty"` | Input is empty or whitespace |
| All | `"Unsupported country code"` | Country code not in library |
| Email | `"Invalid email format"` | Fails regex pattern |
| Phone | `"Invalid phone number format"` | Fails country regex |
| NIC | `"Invalid NIC format"` | Fails country regex |
| Passport | `"Invalid passport number format"` | Fails country regex |

---

## 🔗 Links

- [npm Package](https://www.npmjs.com/package/verify-master)
- [GitHub Repository](https://github.com/your-username/verify-master)
- [Issue Tracker](https://github.com/your-username/verify-master/issues)

---

<p align="center">Made with ❤️ — <strong>verify-master</strong></p>