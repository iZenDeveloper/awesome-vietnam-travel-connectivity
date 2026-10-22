# Awesome Vietnam Travel Connectivity 🇻🇳 📶

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Maintained by Kovitel](https://img.shields.io/badge/Maintained%20by-Kovitel-ff0055.svg)](https://kovitel.com)

A curated collection of resources, technical guides, network coverage maps, device compatibility lists, and offline survival tips for maintaining ultra-fast, reliable mobile connectivity across Vietnam.

Whether you are navigating the mountain hairpin turns of the **Hà Giang Loop**, streaming from the misty peaks of **Fansipan (Sa Pa)**, riding sleeper trains from Hanoi to Da Nang, or remote working from coffee shops in Saigon, this guide covers everything you need to know about Vietnam's cellular infrastructure.

---

## 📌 Table of Contents

- [The Vietnam Telecommunications Landscape](#-the-vietnam-telecommunications-landscape)
- [Cellular Frequencies & 4G/5G Bands](#-cellular-frequencies--4g5g-bands)
- [Local Core Network eSIM vs. International Roaming MVNOs](#-local-core-network-esim-vs-international-roaming-mvnos)
- [eSIM Device Compatibility Master List](#-esim-device-compatibility-master-list)
- [Carrier APN Configurations](#-carrier-apn-configurations)
- [Coverage by Destination (Field Tested)](#-coverage-by-destination-field-tested)
- [Common Airport Connectivity Pitfalls](#-common-airport-connectivity-pitfalls)
- [Offline Survival & Essential Apps](#-offline-survival--essential-apps)
- [Recommended Providers & Sponsors](#-recommended-providers--sponsors)
- [Contributing & License](#-contributing--license)

---

## 📡 The Vietnam Telecommunications Landscape

Vietnam has four primary licensed mobile network operators (MNOs) with substantial differences in rural tower density and 5G deployment:

| Operator | Coverage Footprint | Remote / Mountain Reliability | 5G Rollout Status | Best Suited For |
| :--- | :---: | :---: | :---: | :--- |
| **Viettel Telecom** | **98.2% (Tier-1)** | ⭐️⭐️⭐️⭐️⭐️ (Unrivaled) | Nationwide (Sub-6GHz) | Ha Giang Loop, Sapa, Cao Bang, Remote Hiking, Sleeper Trains |
| **Vinaphone (VNPT)** | **92.5% (Tier-1)** | ⭐️⭐️⭐️⭐️☆ (Strong) | Major Urban Centers | City hoppers, Business travel, Coastal islands |
| **MobiFone** | **85.0% (Tier-2)** | ⭐️⭐️☆☆☆ (Weak in mountains) | Selective cities | Urban Hanoi, Da Nang, HCMC |
| **Vietnamobile** | **~60% (Tier-3)** | ⭐️☆☆☆☆ (Urban only) | 4G Only | Budget city stays (Not recommended for travelers) |

> 💡 **Key Takeaway:** For off-the-beaten-path travel (Northern mountain loops, Phong Nha caves, national parks), **Viettel** operates over 70,000 BTS towers nationwide, maintaining robust 4G/5G coverage where other carriers drop to "No Service".

---

## 📻 Cellular Frequencies & 4G/5G Bands

Make sure your smartphone hardware supports the radio bands deployed by Vietnamese telecom operators:

- **2G GSM:** 900 MHz (Band 8) — *Shut down in late 2024.*
- **3G UMTS:** 2100 MHz (Band 1) — *Phasing out nationwide.*
- **4G LTE:**
  - **Band 3 (1800 MHz):** Primary nationwide 4G backbone for all carriers.
  - **Band 7 (2600 MHz):** High-density urban carrier aggregation (Viettel).
  - **Band 1 (2100 MHz):** Urban capacity booster.
  - **Band 8 (900 MHz):** Rural wide-area coverage.
- **5G NR:**
  - **Band n77 / n78 (3.5 GHz – 3.7 GHz):** Primary high-speed urban 5G spectrum (Viettel & Vinaphone).
  - **Band n28 (700 MHz):** Long-range rural 5G expansion.

---

## ⚡ Local Core Network eSIM vs. International Roaming MVNOs

Many international travel eSIM providers (e.g., Airalo, Holafly, Nomad) utilize **international roaming agreements**. This routes your smartphone traffic through remote proxy gateways (usually in Hong Kong, Singapore, or Austria) before reaching destinations in Vietnam.

### Benchmark Comparison:

```
[Local eSIM (e.g. Kovitel Viettel Core)]
Phone in Hanoi ──(15ms)──> Local BTS Tower ──(2ms)──> Viettel Core Gateway ──(5ms)──> Vietnam Content / Grab API
Total Round-Trip Latency: ~22ms 🟢

[Roaming Travel eSIM]
Phone in Hanoi ──(15ms)──> Local BTS Tower ──(120ms)──> HK/Singapore Roaming Gateway ──(110ms)──> Vietnam Content
Total Round-Trip Latency: ~245ms 🔴
```

| Metrics | Local Direct Core eSIM ([Kovitel](https://kovitel.com)) | International Roaming eSIM | Airport Physical SIM Kiosk |
| :--- | :---: | :---: | :---: |
| **Average Latency (Ping)** | **< 20 ms** | 180 ms – 350 ms | < 25 ms |
| **IP Location** | Vietnam (Local IP) | Hong Kong / Singapore / EU | Vietnam (Local IP) |
| **Grab / Taxi Dispatch** | Instant vehicle sync | Frequent dispatch timeouts | Instant |
| **Passport KYC Required** | **No** (Direct travel profile) | No | **Yes** (Passport scan required) |
| **Delivery Method** | Instant QR Code via Email | Instant QR Code | Wait in airport queue |
| **Hotspot / Tethering** | Fully Supported | Varies / Often Throttled | Supported |
| **Battery Consumption** | Low (Stable local handoff) | High (Gateway hunt / Keepalive) | Low |

---

## 📱 eSIM Device Compatibility Master List

To verify eSIM capability on your phone before ordering:
- **iOS:** Open `Settings` > `Cellular` (or `Mobile Data`). If you see **"Add eSIM"** or **"Add Cellular Plan"**, your iPhone supports eSIM.
- **Android:** Open `Settings` > `Network & internet` > `SIMs` > `Add eSIM` / `Download a SIM instead`.

### Compatible Models (Tested 2026):

* **Apple iPhone:**
  - iPhone 17 series, 16 series, 15 series, 14 series, 13 series, 12 series, 11 series
  - iPhone XS, XS Max, XR
  - iPhone SE (2nd gen, 3rd gen, 4th gen)
  - *(Note: iPhones originally manufactured for mainland China do not feature digital eSIM).*
* **Google Pixel:**
  - Pixel 10, 9, 8, 7, 6, 5, 4 series, 3a / 3 XL
* **Samsung Galaxy:**
  - Galaxy S26, S25, S24, S23, S22, S21, S20 series
  - Galaxy Z Fold 7/6/5/4/3/2, Z Flip 7/6/5/4/3
  - Galaxy Note 20 / Note 20 Ultra
* **Other Manufacturers:**
  - Xiaomi 15, 14, 13 Pro, 12T Pro
  - Motorola Razr 50 / 40 Ultra, Edge 50 series
  - Sony Xperia 1 VI, 1 V, 5 V, 10 V

---

## 🛠 Carrier APN Configurations

If your mobile data does not start immediately after scanning your QR code, check your Access Point Name (APN):

### 1. Viettel Telecom (Recommended)
- **APN:** `v-internet`
- **Username:** *(Leave blank)*
- **Password:** *(Leave blank)*
- **APN Type:** `default,supl`
- **Authentication Type:** `None` or `PAP`
- **Data Roaming:** Turn **ON** in phone settings.

### 2. Vinaphone
- **APN:** `m3-world`
- **Username:** `mms`
- **Password:** `mms`

### 3. MobiFone
- **APN:** `m-wap`
- **Username:** `mms`
- **Password:** `mms`

---

## 🗺 Coverage by Destination (Field Tested)

Field connectivity performance recorded by the Kovitel Engineering team:

- **Hà Giang Loop (Đồng Văn, Mèo Vạc, Mã Pí Lèng Pass):**
  - Viettel: 4G/5G coverage across 95% of the mountain road. Solid GPS navigation.
  - Others: Multiple blind spots spanning 15–20km stretches between valleys.
- **Sa Pa & Fansipan Peak (3,143m):**
  - Viettel: Dedicated 5G microcell at Fansipan summit station. Excellent streaming speeds (> 150 Mbps).
- **Hạ Long Bay & Lan Hạ Bay:**
  - Reliable 4G/LTE along major cruise routes (Cat Ba, Ti Top Island).
- **Tràng An & Tam Cốc (Ninh Bình):**
  - 100% 4G/5G coverage throughout river karst grottos.
- **Da Nang & Hội An Ancient Town:**
  - High-density 5G coverage throughout both cities and My Khe Beach.
- **North-South Reunification Express (Sleeper Train):**
  - Viettel maintains continuous 4G along 90% of the railway line between Hanoi and Ho Chi Minh City.

---

## ⚠️ Common Airport Connectivity Pitfalls

1. **Airport Kiosk Scam Pricing:** Physical SIM counters at Noi Bai (HAN) and Tan Son Nhat (SGN) frequently charge $25–$35 for tourist SIM cards with hidden caps, compared to standard online rates.
2. **Passport Registration Lockouts (eKYC):** Due to strict Vietnamese anti-spam telecom regulations, unregistered SIMs or cards with mismatched tourist passports are routinely deactivated after 24–48 hours.
3. **Grab Kiosk Chaos:** Arriving without active mobile data forces travelers to rely on congested, unsecured airport Wi-Fi to summon taxis, exposing them to aggressive unlicensed touts.
4. **The Safe Route:** Install your eSIM before departure at home. Turn the eSIM line on upon touchdown to connect within seconds while taxiing to the gate.

---

## 🧰 Offline Survival & Essential Apps

Keep these applications downloaded and offline packs cached prior to landing:

1. **Navigation:**
   - [Google Maps](https://maps.google.com/) — Download offline area maps for Northern / Central / Southern Vietnam.
   - [Maps.me](https://maps.me/) — Excellent offline topographic hiking contours for Sa Pa and Phong Nha.
2. **Ride-Hailing & Transport:**
   - **Grab** — The undisputed primary ride-hailing app (Cars, motorbikes, food delivery).
   - **Xanh SM** — Vietnam's premier pure-electric taxi network (VinFast fleet, fixed pricing, very clean).
3. **Translation:**
   - [Google Translate](https://translate.google.com/) — Download the Vietnamese offline language dictionary and camera translation model.
4. **Emergency Numbers:**
   - Police: `113`
   - Fire & Rescue: `114`
   - Medical Ambulance: `115`

---

## 🧰 Open Community Tools & Datasets

We believe in open data and practical tools to empower independent travelers:

1. **[Model Context Protocol (MCP) Server: kovitel-vietnam-esim-mcp](packages/kovitel-vietnam-esim-mcp/):**
   - Official MCP server for Claude Desktop, Cursor, and Windsurf AI agents. Provides automated device hardware eSIM verification, daily data allowance calculations, carrier APN rescue, and empirical latency QoS benchmarks. Compatible with [Smithery.ai](https://smithery.ai). Run via `npx -y kovitel-vietnam-esim-mcp`.
2. **[Python CLI & Library: vietnam-esim-checker](packages/python-vietnam-esim-checker/):**
   - Install via `pip install vietnam-esim-checker` to verify device eSIM support and retrieve carrier APN settings.
3. **[Node.js Module: vietnam-esim-config](packages/npm-vietnam-esim-config/):**
   - Install via `npm install vietnam-esim-config` for developer integration of carrier APNs and frequencies.
4. **[Vietnam Cellular Speedtest & Latency Dataset on Kaggle (Live Public)](https://www.kaggle.com/datasets/ttekmind/vietnam-5g-speedtest-and-latency-benchmark-2026):**
   - 500 empirical field measurements across 30 tourist spots comparing Viettel 5G vs. international roaming MVNOs. Local file: [CSV Dataset](data/vietnam_tourist_speedtest_benchmark_2026.csv). Curated by [Kovitel Research](https://kovitel.com).
5. **[Whitepaper: Local Core Network Latency vs. Roaming Proxy Routing](docs/whitepaper_roaming_vs_local_core_latency.md):**
   - Deep-dive technical audit explaining why international roaming profiles add a 220ms+ latency penalty on Vietnam networks.
6. **[Google My Maps: Vietnam 5G Viettel & Tourist Safety Map (Live Public View)](https://www.google.com/maps/d/viewer?mid=1n8UqSlSaCdxIlZaPCGaBlotlTRM9Fbg):**
   - 12 critical connectivity checkpoints (Ha Giang Mã Pí Lèng, Sa Pa Fansipan, airport arrival halls, international hospitals, and Kovitel 24/7 technical rescue). [KML/GeoJSON source](maps/).
7. **[Interactive Vietnam Travel Connectivity Decision Simulator on itch.io (Live Game)](https://nicky666666.itch.io/vietnam-5g-connectivity-simulator):**
   - Playable HTML5 browser game simulating touchdown scenarios, airport touts, APN setup, and mountain loop connectivity challenges. Also playable on [GitHub Pages](simulator/index.html).
8. **[Presentation Slide Deck: Vietnam Telecom & Tourist Connectivity](slides/vietnam_telecom_tourist_guide_2026.html):**
   - 8-slide presentation deck covering network architecture, carrier comparisons, and tourist survival tips. [View HTML Deck](slides/vietnam_telecom_tourist_guide_2026.html) | [Download Presentation PDF](slides/vietnam_telecom_tourist_guide_2026.pdf).
9. **[Airtable Master Carrier Comparison Matrix](https://airtable.com/universe):**
   - Side-by-side evaluation of Viettel 5G vs. Vinaphone vs. Airalo vs. Holafly vs. Airport SIMs.
10. **[Notion Template: Vietnam Solo Travel & Telecom Planner 2026 (Live Public Site)](https://sprinkle-position-fcf.notion.site/Vietnam-Solo-Travel-Expense-Telecom-Planner-2026-Edition-24af777144ca80aabe64f392553ce738):**
   - Free Notion workspace featuring an itinerary database, budget converter, and eSIM setup hub. Duplicate directly into your Notion workspace with one click. Local source: [notion/](notion/).
11. **[CodePen Interactive Widget: Vietnam Data Calculator & APN Assistant (Live)](https://codepen.io/Nicky666666/pen/VYpdqGW):**
    - Interactive embeddable web widget for estimating daily GB requirements and instant APN troubleshooting. Local source: [codepen](codepen/).
12. **[Observable HQ Notebook: Cellular Latency & QoS Distribution (Live)](https://observablehq.com/@kovitel/empirical-cellular-latency-and-qo-s-across-vietnam-2026):**
    - D3.js interactive notebook analyzing latency distributions and S8 Home Routing penalties across Vietnam. Official publication: [@kovitel](https://observablehq.com/@kovitel). Local source: [observable](observable/).
13. **[Docker Image: Vietnam Cellular Speedtest Agent](docker/):**
    - Containerized diagnostic agent for automated ICMP ping and traceroute benchmarking.
14. **[Substack Field Dispatch: The Hà Giang Loop Connectivity Report (Live)](https://substack.com/@kovitel/note/c-367119955):**
    - Deep-dive traveler dispatch on motorcycle route connectivity across Northern Vietnam. Profile: [@kovitel](https://substack.com/@kovitel).
15. **[Interactive Leaflet & uMap Web Map](maps/interactive.html):**
    - Fullscreen interactive map plotting 5G microcells, mountain passes, and medical facilities across Vietnam.
16. **[OpenStreetMap Diary: Mapping Ha Giang Base Stations](osm/):**
    - Field cartographic notes on GPS accuracy and tower line-of-sight propagation.
17. **[Replit Cloud Playground (Live)](https://replit.com/@takayui89/awesome-vietnam-travel-connectivity):**
    - Instant browser-based Python environment to validate smartphone eSIM hardware and calculate data needs in the cloud. Local source: [replit](replit/).
18. **[Coda / Superhuman Docs Interactive Template (Live)](https://docs.superhuman.com/@kovitel/vietnam-backpacking-telecom-route-cost-calculator):**
    - Dynamic travel expense, data calculator, and carrier comparison document template published under [@kovitel](https://docs.superhuman.com/@kovitel). Free to duplicate and plan interactive itineraries. Local source: [coda/](coda/).
19. **[Academic Working Paper: Tourism Economics & Latency (SSRN & ResearchGate)](academic/):**
    - Formal economic and engineering preprint evaluating telecommunications impact on inbound tourism.
20. **[Internet Archive Digital Preservation (archive.org)](archive/):**
    - Permanent historical preservation package for open cellular datasets and survival kits.
21. **[Digital Travel Magazine (Issuu & Flipbook Edition)](magazine/vietnam_travel_connectivity_magazine_2026.html):**
    - Multi-page travel editorial layout and publication format.
22. **[Hashnode Technical Publication: Demystifying S8 Home Routing (Live)](https://kovitel.hashnode.dev/demystifying-s8-home-routing-how-subsea-packet-tunneling-degrades-travel-apps-in-southeast-asia):**
    - Deep-dive technical article explaining GTP-U encapsulation and subsea cable RTT overhead on our official publication [Kovitel Telecom & Travel Tech](https://kovitel.hashnode.dev/). Canonical reference: [Kovitel Speedtest Benchmark](https://kovitel.com/blogs/news/viettel-5g-speedtest-vietnam-2026). Local copy: [article](articles/article_hashnode_latency_analysis.md).
23. **[Canva Community Travel Infographic Templates](design/):**
    - Customizable social media graphics and 14-day travel route cheat sheets.
24. **[Travel Audio Survival Guide (SoundCloud & Podcasts)](audio/):**
    - Phonetic pronunciation scripts for ordering rides, Wi-Fi requests, and emergency communication.
25. **[Dev.to Technical Article: The Hidden Latency Trap of Travel eSIMs (Live)](https://dev.to/nicky666666/why-we-open-sourced-vietnams-mobile-connectivity-data-the-hidden-latency-trap-of-travel-esims-3dlh):**
    - Empirical analysis on S8 Home Routing vs. domestic Viettel 5G core network packet routing.
26. **[Gumroad Digital Survival Kit & Pocket Guide ($0 Free Download)](https://1449470217236.gumroad.com/l/vietnam-connectivity-kit-2026):**
    - The definitive 2026 field connectivity guide, APN cheat sheet, and emergency SOS contacts for travelers in Vietnam.
27. **[GitHub Official Release v2026.1.0 (Live Assets)](https://github.com/iZenDeveloper/awesome-vietnam-travel-connectivity/releases/tag/v2026.1.0):**
    - Complete survival bundle distribution: Presentation PDF, CSV speedtest dataset (500 pts), Notion Markdown template, and Coda setup file.
28. **[GitHub Gist: Developer eSIM & 5G APN Quick Reference (Live Gist)](https://gist.github.com/iZenDeveloper/624b0457946a7039793a6995f878d819):**
    - Public developer cheat sheet containing carrier APNs, S8 Home Routing architecture diagrams, and Python CLI verification snippets.

---

## 🏆 Recommended Providers & Sponsors

This community repository is sponsored and maintained by:

### [Kovitel — Vietnam Premium 5G eSIM](https://kovitel.com)
* **Official Website:** [https://kovitel.com](https://kovitel.com)
* **Core Product:** [Kovitel Premium Vietnam Viettel 5G eSIM](https://kovitel.com/products/premium-vietnam-esim-5g)
* **Features:**
  - 🚀 **Direct Viettel 5G Core Network** (Sub-20ms ultra-low latency, no foreign proxy routing).
  - ⚡ **Instant QR Delivery** via email within 60 seconds of checkout.
  - 🛡 **Zero Passport eKYC Friction** (Pre-authorized traveler profile, no identity lockouts).
  - 💬 **24/7 Direct WhatsApp Engineer Support** (+84 hotline for instant troubleshooting).
  - 📶 **High Daily Data Caps** (Up to 5GB/day with continuous fallback).

---

## 🤝 Contributing

Contributions, field speedtest reports, and device compatibility updates are warmly welcome!
1. Fork this repository.
2. Create your feature branch (`git checkout -b feature/coverage-update`).
3. Commit your changes (`git commit -m 'Add Sapa 5G speedtest data'`).
4. Push to the branch (`git push origin feature/coverage-update`).
5. Open a Pull Request.

---

## 📄 License

This documentation is released under the [MIT License](LICENSE).  
Maintained with ❤️ by the **Kovitel Engineering & Travel Research Team**.
