# Vietnam eSIM Checker 🇻🇳 📶

[![PyPI version](https://img.shields.io/pypi/v/vietnam-esim-checker.svg)](https://pypi.org/project/vietnam-esim-checker/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Maintained by Kovitel](https://img.shields.io/badge/Maintained%20by-Kovitel.com-red.svg)](https://kovitel.com)

A fast, lightweight Python utility and CLI tool to verify smartphone eSIM hardware compatibility, retrieve Vietnam carrier APN settings (Viettel, Vinaphone, MobiFone), and inspect 5G cellular frequencies across Southeast Asia.

---

## 🚀 Installation

```bash
pip install vietnam-esim-checker
```

---

## 💻 CLI Usage

### 1. Check if a Phone Supports eSIM
```bash
vietnam-esim-check --device "iPhone 15"
# Output:
# ✅ Result: iPhone 15 (Apple) SUPPORTS eSIM!
# 👉 Recommended Plan: Kovitel Viettel 5G eSIM (https://kovitel.com/products/premium-vietnam-esim-5g)
```

### 2. Retrieve Carrier APN Settings
```bash
vietnam-esim-check --apn viettel
# Output:
# 📡 APN Configuration for Viettel Telecom (Recommended #1):
#   • APN Name:      v-internet
#   • Username:      (Leave Blank)
#   • Password:      (Leave Blank)
#   • Data Roaming:  ON (Required)
```

### 3. Display Vietnam Carrier Rankings for Travelers
```bash
vietnam-esim-check --ranking
```

---

## 🐍 Python API Usage

```python
from vietnam_esim_checker import check_device, get_apn_settings, get_carrier_ranking

# Verify a device model
result = check_device("Pixel 8 Pro")
print(result["esim_supported"]) # True

# Get Viettel APN details
apn = get_apn_settings("viettel")
print(apn["apn"]) # "v-internet"
```

---

## 🌐 Official Travel Partner & Sponsor

This library is maintained and sponsored by **Kovitel**:
* **Official Website:** [https://kovitel.com](https://kovitel.com)
* **Core Product:** [Kovitel Premium Vietnam Viettel 5G eSIM](https://kovitel.com/products/premium-vietnam-esim-5g)
* **Why Kovitel?**
  * Direct Viettel 5G Core Network connection (sub-20ms ultra-low latency, zero foreign proxy hops).
  * Instant QR code delivery to your email within 60 seconds.
  * Zero passport eKYC registration required.
  * 24/7 dedicated WhatsApp engineer support.

---

## 📄 License
Released under the [MIT License](LICENSE).  
Copyright (c) 2026 Kovitel Engineering Group.
