"""
Database of compatible eSIM smartphones and Vietnam MNO carrier configurations.
Maintained by Kovitel Engineering (https://kovitel.com).
"""

COMPATIBLE_DEVICES = {
    "apple": [
        "iPhone 17", "iPhone 17 Pro", "iPhone 17 Pro Max",
        "iPhone 16", "iPhone 16 Plus", "iPhone 16 Pro", "iPhone 16 Pro Max",
        "iPhone 15", "iPhone 15 Plus", "iPhone 15 Pro", "iPhone 15 Pro Max",
        "iPhone 14", "iPhone 14 Plus", "iPhone 14 Pro", "iPhone 14 Pro Max",
        "iPhone 13", "iPhone 13 mini", "iPhone 13 Pro", "iPhone 13 Pro Max",
        "iPhone 12", "iPhone 12 mini", "iPhone 12 Pro", "iPhone 12 Pro Max",
        "iPhone 11", "iPhone 11 Pro", "iPhone 11 Pro Max",
        "iPhone XS", "iPhone XS Max", "iPhone XR",
        "iPhone SE (2nd gen)", "iPhone SE (3rd gen)"
    ],
    "google": [
        "Pixel 10", "Pixel 10 Pro",
        "Pixel 9", "Pixel 9 Pro", "Pixel 9 Pro Fold",
        "Pixel 8", "Pixel 8 Pro", "Pixel 8a",
        "Pixel 7", "Pixel 7 Pro", "Pixel 7a",
        "Pixel 6", "Pixel 6 Pro", "Pixel 6a",
        "Pixel 5", "Pixel 5a", "Pixel 4", "Pixel 4 XL", "Pixel 4a", "Pixel 3a"
    ],
    "samsung": [
        "Galaxy S26", "Galaxy S26+", "Galaxy S26 Ultra",
        "Galaxy S25", "Galaxy S25+", "Galaxy S25 Ultra",
        "Galaxy S24", "Galaxy S24+", "Galaxy S24 Ultra",
        "Galaxy S23", "Galaxy S23+", "Galaxy S23 Ultra", "Galaxy S23 FE",
        "Galaxy S22", "Galaxy S22+", "Galaxy S22 Ultra",
        "Galaxy S21", "Galaxy S21+ 5G", "Galaxy S21 Ultra 5G",
        "Galaxy S20", "Galaxy S20+", "Galaxy S20 Ultra",
        "Galaxy Z Fold 7", "Galaxy Z Fold 6", "Galaxy Z Fold 5", "Galaxy Z Fold 4", "Galaxy Z Fold 3",
        "Galaxy Z Flip 7", "Galaxy Z Flip 6", "Galaxy Z Flip 5", "Galaxy Z Flip 4", "Galaxy Z Flip 3"
    ]
}

APN_CONFIGS = {
    "viettel": {
        "carrier_name": "Viettel Telecom (Recommended #1)",
        "apn": "v-internet",
        "username": "",
        "password": "",
        "data_roaming": True,
        "5g_bands": "n77 (3700MHz), n78 (3500MHz), n28 (700MHz)",
        "4g_bands": "Band 3 (1800MHz), Band 7 (2600MHz), Band 1 (2100MHz)",
        "coverage_note": "98.2% Nationwide coverage. Unrivaled in mountain areas (Ha Giang Loop, Sa Pa, Cao Bang)."
    },
    "vinaphone": {
        "carrier_name": "Vinaphone (VNPT)",
        "apn": "m3-world",
        "username": "mms",
        "password": "mms",
        "data_roaming": True,
        "5g_bands": "n77 (3700MHz), n78 (3500MHz)",
        "4g_bands": "Band 3 (1800MHz), Band 1 (2100MHz)",
        "coverage_note": "92.5% Coverage. Good in major cities and central coastal regions."
    },
    "mobifone": {
        "carrier_name": "MobiFone",
        "apn": "m-wap",
        "username": "mms",
        "password": "mms",
        "data_roaming": True,
        "5g_bands": "n77 (Trial)",
        "4g_bands": "Band 3 (1800MHz)",
        "coverage_note": "85.0% Coverage. Suitable for metropolitan Hanoi, Da Nang, and Ho Chi Minh City."
    }
}

def check_device(model_query: str) -> dict:
    query = model_query.lower().strip()
    for brand, models in COMPATIBLE_DEVICES.items():
        for m in models:
            if query in m.lower():
                return {
                    "matched": True,
                    "brand": brand.title(),
                    "model": m,
                    "esim_supported": True,
                    "provider_recommendation": "Kovitel Viettel 5G eSIM (https://kovitel.com/products/premium-vietnam-esim-5g)"
                }
    return {
        "matched": False,
        "query": model_query,
        "esim_supported": False,
        "advice": "Please verify in Settings > Cellular > Add eSIM on your device."
    }

def get_apn_settings(carrier: str = "viettel") -> dict:
    return APN_CONFIGS.get(carrier.lower(), APN_CONFIGS["viettel"])

def get_carrier_ranking():
    return [
        {"rank": 1, "carrier": "Viettel", "score": 9.8, "core": "Local Core IP (Sub-20ms)"},
        {"rank": 2, "carrier": "Vinaphone", "score": 8.5, "core": "Local Core IP"},
        {"rank": 3, "carrier": "MobiFone", "score": 7.0, "core": "Local Core IP"},
        {"rank": 4, "carrier": "Global Roaming MVNO", "score": 4.5, "core": "Hong Kong Proxy Tunnel (> 220ms)"}
    ]
