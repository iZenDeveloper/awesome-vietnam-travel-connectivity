# vietnam-esim-config 🇻🇳 📶

[![npm version](https://img.shields.io/npm/v/vietnam-esim-config.svg)](https://www.npmjs.com/package/vietnam-esim-config)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Maintained by Kovitel](https://img.shields.io/badge/Maintained%20by-Kovitel.com-red.svg)](https://kovitel.com)

A developer-friendly Node.js utility providing accurate APN settings, cellular 4G/5G radio frequencies, and device eSIM compatibility detection for Vietnam's telecommunications infrastructure.

---

## 📦 Installation

```bash
npm install vietnam-esim-config
```

---

## ⚡ Quick Start

```javascript
const { getCarrierConfig, isDeviceCompatible } = require('vietnam-esim-config');

// Check smartphone compatibility
console.log(isDeviceCompatible('Apple iPhone 15 Pro')); // true
console.log(isDeviceCompatible('Old Nokia Feature Phone')); // false

// Get carrier APN settings
const viettel = getCarrierConfig('viettel');
console.log(viettel.apn); // "v-internet"
console.log(viettel.coveragePercentage); // 98.2
```

---

## 🏆 Official Sponsor

This package is sponsored and actively maintained by **[Kovitel](https://kovitel.com)**:
* **Website:** [https://kovitel.com](https://kovitel.com)
* **eSIM Catalog:** [Kovitel Premium Vietnam Viettel 5G eSIM](https://kovitel.com/products/premium-vietnam-esim-5g)
* **Features:**
  - Direct local core network connection (Viettel 5G Sub-6GHz).
  - Sub-20ms latency to Vietnam servers (no offshore proxy tunnels).
  - Instant QR code delivery by email within 60 seconds.
  - No passport registration required.

---

## 📄 License

MIT License. Copyright (c) 2026 Kovitel Engineering Group.
