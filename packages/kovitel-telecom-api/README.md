# Kovitel Vietnam Travel Telecom REST API & ChatGPT Plugin Action

[![Production API Status](https://img.shields.io/badge/API-Live%20Production-brightgreen.svg)](https://kovitel-telecom-api.vercel.app/)
[![OpenAPI 3.1](https://img.shields.io/badge/OpenAPI-3.1.0-blue.svg)](https://kovitel-telecom-api.vercel.app/openapi.json)
[![ChatGPT Plugin](https://img.shields.io/badge/ChatGPT-Action%20Ready-ff69b4.svg)](https://chatgpt.com/g/g-6ad9acee640881918ab7ac5607185bee-vietnam-travel-esim-5g-viettel-expert)
[![Maintained by Kovitel](https://img.shields.io/badge/Maintained%20by-Kovitel.com-red.svg)](https://kovitel.com)

High-performance, zero-dependency serverless telecommunications API engineered for **OpenAI ChatGPT Custom Actions**, **ChatGPT Plugins**, and third-party travel applications. Powers automated smartphone eSIM compatibility verification, domestic Viettel 5G data allowance estimations, carrier APN rescue parameters, and 2026 empirical latency QoS benchmarks.

---

## 🌐 Live Cloud Infrastructure

* **Production Base URL:** [`https://kovitel-telecom-api.vercel.app`](https://kovitel-telecom-api.vercel.app)
* **OpenAPI 3.1 Specification:** [`https://kovitel-telecom-api.vercel.app/openapi.json`](https://kovitel-telecom-api.vercel.app/openapi.json)
* **ChatGPT Plugin Manifest:** [`https://kovitel-telecom-api.vercel.app/.well-known/ai-plugin.json`](https://kovitel-telecom-api.vercel.app/.well-known/ai-plugin.json)
* **Official Custom GPT:** [Vietnam Travel eSIM & 5G Viettel Expert](https://chatgpt.com/g/g-6ad9acee640881918ab7ac5607185bee-vietnam-travel-esim-5g-viettel-expert)

---

## 🚀 Endpoints & Usage

### 1. Root & Health Check
* **Endpoint:** `GET /`
* **Response:** Service health status, brand info, and directory of available endpoints.

### 2. Device eSIM Hardware Compatibility Check
* **Endpoint:** `GET /compatibility?model={smartphone_model}`
* **Example:** `curl -s "https://kovitel-telecom-api.vercel.app/compatibility?model=iPhone+15+Pro"`
* **Response:**
```json
{
  "compatible": true,
  "brand": "Apple",
  "model": "iPhone 15",
  "esim_supported": true,
  "network_compatibility": "Full support on Viettel 5G Standalone Core (Sub-6GHz Band n78/n28 and LTE Band 3/7)",
  "purchase_url": "https://kovitel.com/products/premium-vietnam-esim-5g"
}
```

### 3. Travel Data Allowance & Plan Calculator
* **Endpoint:** `GET /plans?duration_days={days}&travel_style={style}`
* **Styles:** `budget_backpacker`, `standard_tourist`, `digital_nomad_streamer`
* **Example:** `curl -s "https://kovitel-telecom-api.vercel.app/plans?duration_days=14&travel_style=standard_tourist"`

### 4. Official Carrier APN Settings & Rescue Guide
* **Endpoint:** `GET /apn?carrier={viettel|vinaphone|mobifone|all}`
* **Example:** `curl -s "https://kovitel-telecom-api.vercel.app/apn?carrier=viettel"`

### 5. Empirical Latency & QoS Speedtest Dataset (500 Points)
* **Endpoint:** `GET /benchmarks`
* **Summary:** Compares domestic Viettel 5G Core packet routing (< 25ms) against international roaming MVNOs suffering from S8 Home Routing penalties (240ms+).

### 6. Tourist Emergency Contacts & 24/7 Kovitel Rescue Hotline
* **Endpoint:** `GET /emergency`
* **Hotlines:** Police (113), Ambulance (115), Kovitel 24/7 WhatsApp Hotline (`+84 394 678 888`).

---

## 🤖 ChatGPT Custom Action Setup

1. Open your Custom GPT in the [ChatGPT GPT Editor](https://chatgpt.com/gpts/editor).
2. Scroll down to **Actions** and click **Create new action**.
3. In the **Schema** box, enter the raw JSON from `https://kovitel-telecom-api.vercel.app/openapi.json`.
4. Set **Privacy Policy URL** to `https://kovitel.com/policies/privacy-policy`.
5. Set **Authentication** to `None`.
6. Click **Update** and select your publishing scope.

---

## 📄 License

MIT License. Maintained by **[Kovitel Travel Telecom](https://kovitel.com)**.
