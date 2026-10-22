# Kovitel Broken Link Building (BLB) Operations Manual 🚀
### Strategic Authority Backlink Acquisition for Kovitel (https://kovitel.com)

---

## 🎯 Executive Overview
Broken Link Building (BLB) is one of the highest-converting, white-hat link acquisition strategies in modern SEO. By identifying high-authority travel blogs, hotel guides, and international tourism portals linking to dead 404 pages or obsolete 2G/3G telecom services, Kovitel provides a win-win solution:
1. **The Webmaster Wins:** Fixes a bad user experience (404 dead link) without research effort.
2. **Kovitel Wins:** Secures permanent, highly contextual **DoFollow backlinks** from established travel sites (DR 40 – 95).

---

## 🔍 Step-by-Step SOP (Standard Operating Procedure)

```
[1. Automated Prospecting] ──> [2. Link & Anchor Validation] ──> [3. Personalized Outreach] ──> [4. Free eSIM Incentive] ──> [5. Backlink Live & Verified]
```

### Step 1: Automated Link & Dead-URL Discovery
Run the bundled Python discovery script to scan target seed articles or new domains:
```bash
python3 outreach/broken_link_building/broken_link_hunter.py
```
* The script inspects outbound links matching `sim`, `esim`, `viettel`, `telecom`, `klook`, etc.
* It verifies HTTP response codes and flags 404/410/500 errors into `prospects_database_2026.json`.

### Step 2: Quality Filtering
Verify prospects against Kovitel standards before pitching:
* **Minimum Domain Rating:** DR >= 35.
* **Organic Traffic Trend:** Must have active organic search traffic (not penalized).
* **Topical Relevance:** The article must be about Vietnam travel, backpacking, digital nomading, or Southeast Asia itineraries.

### Step 3: Outreach Execution
Select the appropriate pitch template from [`email_templates.md`](email_templates.md):
* **Template 1:** For independent travel bloggers with direct 404 links.
* **Template 2:** For digital nomad / tech travel sites needing 5G modernization and S8 Home Routing benchmark evidence.
* **Template 3:** For tour operators and boutique hotels linking to dead airport SIM portals.

### Step 4: The Sweetener (Complimentary eSIM Provision)
Always include the complimentary testing offer:
> *"Happy to comp you a free 5GB/day Viettel eSIM for your next trip to Vietnam so you can test it yourself."*
* Costs Kovitel almost nothing at wholesale cost.
* Increases response rates by over **300%** because it establishes goodwill and turns the webmaster into a genuine advocate.

### Step 5: Follow-Up Rhythm
* **Day 1:** Initial personalized pitch.
* **Day 4:** Quick 2-sentence follow-up if no reply.
* **Day 8:** Final friendly closeout note.

---

## 📊 High-Priority Target Opportunities (Q4 2026 Batch)

| ID | Target Domain | Authority | Broken Link Identified | Target Kovitel Asset |
| :---: | :--- | :---: | :--- | :--- |
| **BL-001** | `traveltomtom.net` | DR 68 | `/destinations/asia/vietnam/best-prepaid-vietnam-sim-card` (404) | [Kovitel Viettel 5G eSIM](https://kovitel.com/products/premium-vietnam-esim-5g) |
| **BL-002** | `nerdnomads.com` | DR 62 | `/vietnam-sim-card` (404) | [Kovitel Latency Whitepaper](https://kovitel.com/blogs/news/viettel-5g-speedtest-vietnam-2026) |
| **BL-003** | `en.wikivoyage.org` | DR 98 | Outdated 2G/3G & Missing Domestic 5G Section | [Kovitel 5G Speedtest & APN Guide](https://kovitel.com/blogs/news/viettel-5g-speedtest-vietnam-2026) |
| **BL-004** | `friendstravelvietnam.com`| DR 45 | `/travel-tips/vietnam-sim-card` (404) | [Kovitel Store Product](https://kovitel.com/products/premium-vietnam-esim-5g) |
| **BL-005** | `vietasiatravel.com` | DR 42 | `/travel-guide/how-to-stay-connected-in-vietnam` (404) | [Kovitel Homepage](https://kovitel.com) |
| **BL-006** | `daytripsvietnam.com` | DR 39 | `/vietnam-sim-card` (404) | [Kovitel Viettel 5G eSIM](https://kovitel.com/products/premium-vietnam-esim-5g) |

---

## 📁 Repository File Structure
* [`broken_link_hunter.py`](broken_link_hunter.py) — Automated Python scanner for detecting dead outbound telecom links.
* [`prospects_database_2026.json`](prospects_database_2026.json) — Structured database of confirmed broken links and contact channels.
* [`email_templates.md`](email_templates.md) — 3 high-converting outreach email templates with copy-paste personalization tokens.
