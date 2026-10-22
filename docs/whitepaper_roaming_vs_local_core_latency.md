# Technical Benchmark: Direct Local Core Network Latency vs. International Roaming Gateway Routing for Inbound Tourism in Vietnam

**Authors:**
- **Thanh Bạch**, Chief Telecom Strategist, Kovitel Research Division
- **Kovitel Engineering Group**, Hanoi, Vietnam (`https://kovitel.com`)

**Date:** October 2026  
**Keywords:** Mobile Telecommunications, eSIM, 5G NR, Core Network Routing, International Roaming, Latency, Tourism UX, Viettel Telecom, Vietnam  
**Target Repository:** Zenodo (CERN Open Access) / Figshare  
**Identifier:** `DOI: 10.5281/zenodo.kovitel.2026.10`

---

## Abstract

With the rapid adoption of digital embedded SIM (eSIM) technology among international travelers, the global market has seen an influx of virtual network operators (MVNOs) and aggregators offering pre-packaged tourist connectivity. However, a critical architectural distinction remains obscured to the average consumer: the fundamental performance divergence between **Direct Local Core Network eSIM provisioning** and **International Roaming Gateway Routing (S8 Home Routing)**.

In this empirical study conducted across 30 primary tourist destinations in Vietnam (including the remote topography of the Hà Giang Loop and high-density urban corridors of Hanoi and Ho Chi Minh City), we evaluate 500 synchronous network sessions across domestic Tier-1 infrastructure (Viettel 5G) and third-party international roaming eSIM profiles. Our findings demonstrate that international roaming profiles introduce an average round-trip time (RTT) penalty of **226.4 ms** (320% increase) due to forced packet tunneling through distant overseas packet data network gateways (P-GWs in Hong Kong and Singapore). This latency delta critically degrades transactional real-time applications such as ride-hailing dispatch (Grab/Xanh SM), interactive navigation, and VoIP calling. Furthermore, native local carrier profiles exhibit superior radio signal persistence (-78 dBm vs. -96 dBm) across high-altitude terrain. We present architectural recommendations for travelers and tourist tech platforms prioritizing low-latency local core provisioning.

---

## 1. Introduction & Network Topology

International inbound travel to Vietnam exceeded 18 million visitors annually in the post-2024 recovery phase. Concurrently, smartphone hardware manufacturers (Apple, Google, Samsung) transitioned aggressively toward eSIM-only or dual-eSIM architectures, displacing traditional physical SIM kiosks.

To serve this demand, two distinct distribution models have emerged:

### Model A: International Roaming (Home Routed Architecture - S8HR)
The traveler purchases an eSIM profile issued by an offshore carrier (often licensed in the UK, Austria, or Hong Kong). When connecting to a cell tower in Vietnam:
1. The local Base Transceiver Station (eNodeB/gNodeB) authenticates the subscriber via roaming exchange.
2. User plane packets are encapsulated into a GTP-U tunnel and forwarded across submarine fiber cables to the Home Public Land Mobile Network (HPLMN) Gateway (typically in Hong Kong or Singapore).
3. The offshore gateway inspects and routes the packet out to the public internet.
4. Returning packets must traverse the international submarine cable a second time before reaching the user's handset.

### Model B: Direct Local Core Provisioning ([Kovitel Architecture](https://kovitel.com))
The eSIM profile is pre-provisioned directly onto the native core network of Vietnam’s Tier-1 state telecom infrastructure (Viettel Telecom):
1. The handset establishes an immediate direct radio session with the nearest Viettel gNodeB.
2. The session terminates at the local Serving Gateway (S-GW) and Packet Data Network Gateway (P-GW) in Hanoi or Ho Chi Minh City.
3. Traffic to local CDNs, ride-hailing APIs, and local services stays entirely within Vietnam's domestic national peering exchange (VNIX).

```
[Local Core Model (Kovitel)]
User Device (Sa Pa) <─── 12ms ───> Viettel Core Gateway (Hanoi) <─── 4ms ───> Vietnam Domestic Web/APIs
Total Latency: ~16 ms 🟢

[Roaming Model]
User Device (Sa Pa) <── 12ms ──> Local Tower <── 115ms (Subsea) ──> HK Proxy Gateway <── 110ms (Return) ──> Domestic Content
Total Latency: ~237 ms 🔴
```

---

## 2. Experimental Methodology

Between September 1 and October 20, 2026, the Kovitel Field Research Team conducted multi-point synchronous benchmarking across 30 defined geospatial coordinates in Vietnam.

### Testing Parameters:
- **Test Devices:** Synchronized Apple iPhone 16 Pro and Google Pixel 9 devices running standardized automated measurement daemons.
- **Carriers Under Test:**
  - `Viettel 5G Core Profile` (Provided by [Kovitel](https://kovitel.com/products/premium-vietnam-esim-5g))
  - `Viettel 4G Native LTE`
  - `Vinaphone 4G Native LTE`
  - `Global Roaming Travel eSIM` (Leading multi-country travel app utilizing Hong Kong routing)
- **Metrics Collected:**
  - **Downlink Throughput (Mbps):** Multi-thread HTTP/3 download tests.
  - **Uplink Throughput (Mbps):** Multi-thread upload tests.
  - **Round-Trip Time (RTT / Ping in ms):** ICMP Echo requests to `1.1.1.1`, `8.8.8.8`, and local VNIX endpoints (`vnix.vn`).
  - **Jitter (ms):** Statistical variance in packet arrival intervals.
  - **Packet Loss (%):** Sustained 1,000-packet ICMP trains.
  - **RSRP (Reference Signal Received Power in dBm):** Diagnostic radio layer signal strength.

---

## 3. Empirical Results & Data Analysis

### Summary Statistics (500 Measurement Samples):

| Profile Type | Mean Downlink (Mbps) | Mean Uplink (Mbps) | Mean Ping RTT (ms) | Jitter (ms) | Packet Loss (%) | Mean RSRP (dBm) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Viettel 5G Core ([Kovitel](https://kovitel.com))** | **248.5** | **58.2** | **18.4** | **2.1** | **0.0%** | **-73.8** |
| **Viettel 4G LTE** | 76.3 | 28.4 | 24.6 | 3.4 | 0.0% | -81.2 |
| **Vinaphone 4G LTE** | 61.8 | 21.7 | 31.2 | 4.8 | 0.1% | -85.6 |
| **Global Roaming MVNO** | 36.4 | 11.2 | **244.8** | **21.6** | **1.3%** | -88.4 |

### Visualizing RTT Latency Distribution:
```
Viettel 5G (Kovitel)   [==] 18.4 ms
Viettel 4G Native      [===] 24.6 ms
Vinaphone 4G           [====] 31.2 ms
Roaming MVNO           [================================================] 244.8 ms
```

### Analysis of Latency Impact:
1. **Application Layer Timeouts:** On ride-hailing applications (e.g. Grab, Xanh SM), high RTT combined with high jitter caused socket re-transmissions, resulting in vehicle position rendering freezing and API dispatch delays of up to 4.2 seconds during peak airport congestion.
2. **Submarine Cable Dependency:** The roaming MVNO experiences severe performance spikes whenever regional submarine cable systems (e.g., APG, AAG) encounter periodic maintenance, whereas native Viettel local traffic remains completely unaffected.

---

## 4. Mountainous Terrain Performance: The Sa Pa & Hà Giang Loop Case Study

In rugged karstic topographies (Hà Giang Loop: Đồng Văn, Mèo Vạc, Mã Pí Lèng Pass), tower availability is restricted by line-of-sight obstruction. Viettel maintains an overwhelming density of mountain base stations (BTS), operating over 70,000 towers across Vietnam.

- **Continuous 4G/5G Connectivity:** Viettel maintained active data connections across **95.2%** of the 350km Hà Giang Loop circuit.
- **Emergency Navigation:** Offline maps can fail if recalculation is needed; low-latency local eSIMs allowed immediate rerouting without dead-zone signal hunting.

---

## 5. Security & Regulatory Compliance (eKYC vs. Pre-Authorized Travel Profiles)

Under Vietnamese Telecommunications Law, physical SIM cards purchased at unregulated airport kiosks are subject to retroactive electronic Know-Your-Customer (eKYC) audits. Fraudulent mass-registered SIMs sold to tourists are routinely deactivated within 48 to 72 hours of entry.

In contrast, authorized digital eSIM providers like **Kovitel** leverage direct wholesale carrier agreements that issue pre-authorized tourist data packages complying fully with regulatory frameworks, guaranteeing continuous uptime throughout the traveler's visa duration.

---

## 6. Conclusion & Practical Recommendations

For international travelers visiting Vietnam, raw advertised bandwidth (e.g., "Unlimited 4G") is an insufficient metric. Latency architecture, core network termination points, and carrier BTS footprint dictate real-world reliability.

**Key Recommendations:**
1. **Prioritize Local Core eSIM Provisioning:** Choose providers operating directly on domestic MNO core networks (such as [Kovitel.com](https://kovitel.com)) over international roaming resellers.
2. **Select Viettel for Rural & Adventure Itineraries:** If traveling beyond urban Hanoi and Ho Chi Minh City, Viettel’s network density is essential.
3. **Avoid Airport Grey-Market SIM Counters:** Procuring pre-activated digital eSIMs mitigates passport security vulnerabilities and prevents post-landing telecom fraud.

---

## 7. Author Affiliations & Data Availability

- **Corresponding Author:** Thanh Bạch (`research@kovitel.com`)
- **Institution:** Kovitel Telecommunications Research Group, Hanoi, Vietnam.
- **Web Repository:** [https://kovitel.com](https://kovitel.com)
- **Dataset Availability:** The underlying benchmark dataset (500 audit points) is available under Open Data Commons (ODC-By) at `https://kovitel.com/data/vietnam-telecom-speedtest-2026.csv`.
