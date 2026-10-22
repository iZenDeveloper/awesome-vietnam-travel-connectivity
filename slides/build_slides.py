#!/usr/bin/env python3
"""
Generate Standalone HTML Presentation Slide Deck for SlideShare & Speaker Deck
"""
import os

slides_dir = os.path.dirname(__file__)
html_path = os.path.join(slides_dir, "vietnam_telecom_tourist_guide_2026.html")

SLIDES = [
    {
        "title": "Vietnam Telecom & Tourist Connectivity Guide (2026)",
        "subtitle": "Navigating 5G Networks, Mountain Loops & eSIM Architecture",
        "author": "Kovitel Telecom Research Group • Hanoi, Vietnam",
        "link": "https://kovitel.com",
        "bg": "#0f172a",
        "accent": "#ef4444"
    },
    {
        "title": "The Four Mobile Operators in Vietnam",
        "bullets": [
            "Viettel Telecom: 98.2% nationwide coverage, 70,000+ BTS towers. Unrivaled in mountains.",
            "Vinaphone (VNPT): 92.5% coverage. Strong secondary choice in urban centers.",
            "MobiFone: 85.0% coverage. Solid in Hanoi and HCMC, severe drops on rural roads.",
            "Vietnamobile: ~60% coverage. Budget city operator, not recommended for travelers."
        ],
        "bg": "#1e293b",
        "accent": "#38bdf8"
    },
    {
        "title": "Local Core eSIM vs. International Roaming",
        "bullets": [
            "S8 Home Routing (S8HR): Roaming traffic tunnels to Hong Kong/Singapore and back.",
            "Round-Trip Time (RTT): Roaming eSIMs average 244.8ms vs. 18.4ms on Local Core.",
            "Application Impact: High latency causes Grab dispatch timeouts and navigation freezes.",
            "Solution: Direct local core network eSIM provisioning (Kovitel Viettel Core)."
        ],
        "bg": "#0f172a",
        "accent": "#10b981"
    },
    {
        "title": "Field Benchmark: 30 Tourist Destinations",
        "bullets": [
            "Viettel 5G Core: 248.5 Mbps mean downlink, 18.4ms latency, 0.0% packet loss.",
            "Viettel 4G LTE: 76.3 Mbps downlink, 24.6ms latency.",
            "Vinaphone 4G: 61.8 Mbps downlink, 31.2ms latency.",
            "Global Roaming MVNO: 36.4 Mbps downlink, 244.8ms latency, 1.3% packet loss."
        ],
        "bg": "#1e293b",
        "accent": "#f59e0b"
    },
    {
        "title": "Mountain Topography: Sa Pa & Hà Giang Loop",
        "bullets": [
            "Mã Pí Lèng Pass (1,500m): Viettel maintains 4 full signal bars across 95% of pass.",
            "Fansipan Peak (3,143m): Dedicated Viettel 5G microcell installed at the summit station.",
            "GPS Navigation Safety: Zero dead-zone hunting prevents motorbike battery drain."
        ],
        "bg": "#0f172a",
        "accent": "#ec4899"
    },
    {
        "title": "The Airport SIM Kiosk Trap",
        "bullets": [
            "High Prices: Kiosks at Noi Bai and Tan Son Nhat charge $25 - $35 USD.",
            "eKYC Risk: Unverified batch SIMs routinely get deactivated after 48 hours.",
            "Smart Alternative: Order pre-authorized digital eSIM online before takeoff.",
            "Immediate Connect: 5G signal activates on the runway before deplaning."
        ],
        "bg": "#1e293b",
        "accent": "#ef4444"
    },
    {
        "title": "APN Troubleshooting: The Golden Settings",
        "bullets": [
            "APN Name: v-internet",
            "Username: (Leave blank)",
            "Password: (Leave blank)",
            "Data Roaming: Must be toggled ON for eSIM profile routing",
            "Emergency Reset: Toggle Airplane Mode 10 seconds to re-register with nearest BTS tower."
        ],
        "bg": "#0f172a",
        "accent": "#38bdf8"
    },
    {
        "title": "Official Resources & Open Source Ecosystem",
        "bullets": [
            "Official eSIM Catalog: https://kovitel.com/products/premium-vietnam-esim-5g",
            "Community Repo: https://github.com/iZenDeveloper/awesome-vietnam-travel-connectivity",
            "Python Package: pip install vietnam-esim-checker",
            "Node.js Package: npm install vietnam-esim-config",
            "24/7 WhatsApp Support: +84 394 678 888"
        ],
        "bg": "#0b1120",
        "accent": "#10b981"
    }
]

html_parts = [
    '<!DOCTYPE html>',
    '<html lang="en">',
    '<head>',
    '<meta charset="utf-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
    '<title>Vietnam Telecom & Tourist Connectivity Guide 2026 - Kovitel</title>',
    '<style>',
    '  * { box-sizing: border-box; margin: 0; padding: 0; }',
    '  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #000; color: #fff; }',
    '  .slide-container { display: flex; flex-direction: column; gap: 24px; padding: 40px 20px; max-width: 960px; margin: 0 auto; }',
    '  .slide { min-height: 540px; border-radius: 16px; padding: 60px 50px; display: flex; flex-direction: column; justify-content: center; position: relative; border: 1px solid #334155; box-shadow: 0 20px 40px rgba(0,0,0,0.6); page-break-after: always; }',
    '  .slide-number { position: absolute; top: 24px; right: 30px; font-size: 0.85rem; color: #64748b; font-weight: bold; }',
    '  h1 { font-size: 2.4rem; margin-bottom: 16px; line-height: 1.2; }',
    '  h2 { font-size: 2.1rem; margin-bottom: 28px; line-height: 1.3; }',
    '  .subtitle { font-size: 1.25rem; color: #cbd5e1; margin-bottom: 24px; }',
    '  .author { font-size: 1rem; color: #94a3b8; margin-top: 32px; font-weight: 500; }',
    '  ul { list-style: none; display: flex; flex-direction: column; gap: 18px; }',
    '  li { font-size: 1.15rem; line-height: 1.5; color: #e2e8f0; display: flex; align-items: flex-start; gap: 12px; }',
    '  li::before { content: "➔"; color: var(--accent); font-weight: bold; font-size: 1.1rem; }',
    '  a { color: #38bdf8; text-decoration: none; font-weight: bold; }',
    '  a:hover { text-decoration: underline; }',
    '  .watermark { position: absolute; bottom: 20px; left: 50px; font-size: 0.8rem; color: #64748b; }',
    '  @media print { .slide-container { padding: 0; } .slide { min-height: 100vh; border-radius: 0; border: none; } }',
    '</style>',
    '</head>',
    '<body>',
    '<div class="slide-container">'
]

for idx, s in enumerate(SLIDES):
    accent = s.get("accent", "#ef4444")
    html_parts.append(f'  <div class="slide" style="background: {s["bg"]}; --accent: {accent};">')
    html_parts.append(f'    <div class="slide-number">SLIDE {idx+1} / {len(SLIDES)}</div>')
    
    if idx == 0:
        html_parts.append(f'    <h1 style="color: {accent};">{s["title"]}</h1>')
        html_parts.append(f'    <div class="subtitle">{s["subtitle"]}</div>')
        html_parts.append(f'    <div class="author">{s["author"]}</div>')
        html_parts.append(f'    <div style="margin-top: 16px;"><a href="{s["link"]}" target="_blank">{s["link"]}</a></div>')
    else:
        html_parts.append(f'    <h2 style="color: {accent};">{s["title"]}</h2>')
        html_parts.append('    <ul>')
        for b in s.get("bullets", []):
            # Check if bullet has URL
            import re
            b_fmt = re.sub(r'(https?://[^\s]+)', r'<a href="\1" target="_blank">\1</a>', b)
            html_parts.append(f'      <li><span>{b_fmt}</span></li>')
        html_parts.append('    </ul>')

    html_parts.append(f'    <div class="watermark">Presented by Kovitel (https://kovitel.com) • Vietnam Viettel 5G eSIM</div>')
    html_parts.append('  </div>')

html_parts.append('</div>')
html_parts.append('</body>')
html_parts.append('</html>')

with open(html_path, "w", encoding="utf-8") as f:
    f.write("\n".join(html_parts))

print(f"Generated Slide Deck: {html_path}")
