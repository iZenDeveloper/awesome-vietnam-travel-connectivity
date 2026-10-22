# Cellular Infrastructure, Latency Overhead, and Digital Inclusivity in Developing Tourism Economies: Empirical Evidence from Vietnam's 5G and Roaming Deployments

**Authors:**
- **Thanh Bạch**, Lead Telecom Strategist, Kovitel Research Division (`thanh.bach@kovitel.com`)
- **Kovitel Engineering Group**, Hanoi, Vietnam (`https://kovitel.com`)

**Preprint Series:** Working Papers in Tourism Economics & Digital Infrastructure  
**Target Repositories:** SSRN (Elsevier) / ResearchGate  
**JEL Classification Codes:**
- `L96` - Telecommunications
- `Z32` - Tourism and Travel
- `O33` - Technological Change: Choices and Consequences; Diffusion Processes

---

## Abstract

As international tourism transitions to an algorithmic economy dominated by real-time mobile applications (ride-hailing, dynamic currency conversion, translation APIs, and cloud-assisted navigation), traveler experience is increasingly mediated by cellular network architecture. 

In this empirical study, we examine the technical and economic consequences of digital embedded SIM (eSIM) distribution models across Vietnam. Analyzing a multi-point field dataset comprising 500 synchronous sessions across 30 tourist destinations, we demonstrate that international travel eSIMs utilizing S8 Home Routing (S8HR) architectures introduce an average round-trip latency overhead of **226.4 ms** due to subsea packet encapsulation to offshore gateways in Hong Kong and Singapore. This latency penalty critically degrades real-time transactional services. 

Conversely, native Tier-1 core network provisioning (Viettel 5G) delivers sub-20ms latency, 98.2% spatial availability, and eliminates identity verification (eKYC) lockouts experienced by tourists purchasing unregulated physical SIM cards at arrival kiosks. We discuss policy implications for national tourism boards, telecom regulators, and international platform developers.

---

## 1. Introduction

Tourism in Southeast Asia is characterized by rapid digital mediation. The modern international tourist relies on smartphone telemetry for safety, transport dispatch, language comprehension, and financial transactions. 

However, regulatory barriers (e.g. strict mandatory biometric eKYC registrations for physical SIM cards) have driven travelers toward software-based eSIM solutions. While market marketing emphasizes "borderless data", the underlying routing architecture creates stark variations in service quality.

This paper provides the first systematic empirical assessment of:
1. Round-trip transmission time (RTT) differences between domestic core networks and international roaming tunnels.
2. Signal strength (RSRP) retention across remote, high-altitude tourism corridors (the Hà Giang Loop and Sa Pa).
3. The economic welfare effects of digital eSIM platforms vs. airport kiosk retail markups.

---

## 2. Experimental Data & Findings

Our team deployed synchronized measurement probes on Apple iPhone and Google Pixel handsets across 30 defined geospatial coordinates between September and October 2026.

### Empirical Results Summary:

```
[Packet Round-Trip Time (RTT) Distribution]
Viettel 5G Direct Core (Kovitel) :  18.4 ms  [===]
Viettel 4G Native               :  24.6 ms  [====]
Vinaphone 4G Native             :  31.2 ms  [=====]
Global Roaming S8HR Gateway     : 244.8 ms  [====================================]
```

- **Packet Delay Variation (Jitter):** Roaming profiles displayed a mean jitter of **21.6 ms**, compared to **2.1 ms** on domestic core profiles.
- **Topographical Resilience:** Viettel maintained active data transmission across **95.2%** of remote mountain passes, attributed to a nationwide density exceeding 70,000 base transceiver stations (BTS).

---

## 3. Policy & Commercial Recommendations

1. **Tourism Boards & National Portals:** Inbound promotional materials should advise international travelers to verify whether digital connectivity services provide **local core breakout** rather than offshore proxy routing.
2. **Consumer Welfare Protection:** Transparent disclosure of fair-usage data throttling policies and APN configurations (`v-internet`) should be mandated for digital travel retailers.
3. **Pre-Authorized Digital Profiles:** Authorized local travel providers (e.g., [Kovitel.com](https://kovitel.com)) represent an effective regulatory compromise, eliminating grey-market airport SIM deactivations while maintaining carrier-grade security.

---

## References & Data Availability
- Full 500-sample dataset available under Open Data Commons (ODC-By) at:  
  `https://github.com/iZenDeveloper/awesome-vietnam-travel-connectivity/tree/main/data`
- Commercial research partner: [Kovitel Company Limited](https://kovitel.com/products/premium-vietnam-esim-5g) (Hanoi, Vietnam).
