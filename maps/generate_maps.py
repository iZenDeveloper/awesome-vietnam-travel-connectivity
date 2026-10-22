#!/usr/bin/env python3
"""
Generate Google My Maps KML & GeoJSON: Vietnam 5G Viettel & Tourist Safety Map 2026
"""
import os
import json

maps_dir = os.path.dirname(__file__)
kml_path = os.path.join(maps_dir, "vietnam_5g_tourist_safety_map_2026.kml")
geojson_path = os.path.join(maps_dir, "vietnam_5g_tourist_safety_map_2026.geojson")

POINTS = [
    {
        "name": "Nội Bài International Airport (HAN) - Arrival Hall",
        "category": "Transit Hub & eSIM Activation Point",
        "lat": 21.2212,
        "lon": 105.8072,
        "description": "Terminal 2 International Arrivals. Signal: Viettel 5G Ultra-fast (>300Mbps). Turn on your pre-installed Kovitel eSIM immediately to hail Grab cars and avoid airport touts.",
        "url": "https://kovitel.com/products/premium-vietnam-esim-5g"
    },
    {
        "name": "Tân Sơn Nhất International Airport (SGN) - International Terminal",
        "category": "Transit Hub & eSIM Activation Point",
        "lat": 10.8185,
        "lon": 106.6588,
        "description": "Arrival gate pickup zone. Viettel 5G active across all terminals. Connect in under 60 seconds with Kovitel.",
        "url": "https://kovitel.com/products/premium-vietnam-esim-5g"
    },
    {
        "name": "Hà Giang - Mã Pí Lèng Skywalk (High Altitude Pass)",
        "category": "Mountain Adventure & Continuous BTS Coverage",
        "lat": 23.2427,
        "lon": 105.4243,
        "description": "Altitude: 1,500m. Viettel operates continuous high-gain mountain cells here. Critical for Google Maps GPS tracking on the Ha Giang motorbike loop.",
        "url": "https://kovitel.com"
    },
    {
        "name": "Sa Pa - Fansipan Summit Station (3,143m)",
        "category": "Mountain Adventure & Continuous BTS Coverage",
        "lat": 22.3034,
        "lon": 103.7752,
        "description": "Roof of Indochina. Dedicated Viettel 5G microcell installed at the summit pagoda. Live stream at 250Mbps from above the clouds.",
        "url": "https://kovitel.com"
    },
    {
        "name": "Đồng Văn Ancient Town (Hà Giang)",
        "category": "Highland Cultural Center",
        "lat": 23.2783,
        "lon": 105.3619,
        "description": "Key rest stop on the Ha Giang loop. Reliable 4G/5G Viettel network. Emergency support available via Kovitel WhatsApp.",
        "url": "https://kovitel.com"
    },
    {
        "name": "Ninh Bình - Tràng An Grottoes Dock",
        "category": "Heritage & Eco-Tourism",
        "lat": 20.2539,
        "lon": 105.9083,
        "description": "UNESCO World Heritage Site. 100% 4G/5G signal coverage along the 3-hour river boat route.",
        "url": "https://kovitel.com"
    },
    {
        "name": "Đà Nẵng - Golden Bridge (Bà Nà Hills)",
        "category": "Iconic Landmark",
        "lat": 15.9953,
        "lon": 107.9964,
        "description": "Giant stone hands bridge. Full 5G coverage throughout the mountain theme park.",
        "url": "https://kovitel.com"
    },
    {
        "name": "Hội An Ancient Town - Japanese Covered Bridge",
        "category": "Heritage & Night Market",
        "lat": 15.8774,
        "lon": 108.3268,
        "description": "Historic canal district. High-density cellular nodes ensure zero congestion during lantern festival nights.",
        "url": "https://kovitel.com"
    },
    {
        "name": "Phú Quốc - Sunset Town Cable Car Terminal",
        "category": "Island Resort & Coastal Gateway",
        "lat": 10.0278,
        "lon": 104.0111,
        "description": "Longest sea-crossing 3-wire cable car. Continuous Viettel marine cellular coverage across An Thoi archipelago.",
        "url": "https://kovitel.com"
    },
    {
        "name": "Hanoi French Hospital (L'Hôpital Français de Hanoï)",
        "category": "Medical Emergency Point",
        "lat": 20.9996,
        "lon": 105.8427,
        "description": "Top international hospital in Hanoi. Emergency phone: +84 24 3577 1100. Open 24/7.",
        "url": "https://kovitel.com"
    },
    {
        "name": "FV Hospital (Hôpital Franco-Vietnamien) - HCMC",
        "category": "Medical Emergency Point",
        "lat": 10.7303,
        "lon": 106.7204,
        "description": "International JCI-accredited hospital in District 7, Ho Chi Minh City. Emergency phone: +84 28 5411 3500.",
        "url": "https://kovitel.com"
    },
    {
        "name": "Kovitel 24/7 Technical WhatsApp Rescue Center",
        "category": "Digital Nomad & Tourist Support Hotline",
        "lat": 21.0285,
        "lon": 105.8542,
        "description": "Instant 24/7 technical WhatsApp assistance for APN settings, data top-up, and eSIM QR troubleshooting across Vietnam. WhatsApp: +84 394 678 888.",
        "url": "https://kovitel.com"
    }
]

# 1. Generate KML
kml_parts = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<kml xmlns="http://www.opengis.net/kml/2.2">',
    '  <Document>',
    '    <name>Vietnam 5G Viettel &amp; Tourist Safety Map 2026 - By Kovitel</name>',
    '    <description>Interactive map of mobile 5G coverage, mountain road safety points, hospital clinics, and tourist connectivity hubs across Vietnam. Curated by Kovitel (https://kovitel.com).</description>'
]

for p in POINTS:
    kml_parts.append('    <Placemark>')
    kml_parts.append(f'      <name><![CDATA[{p["name"]}]]></name>')
    desc = f'<p><strong>Category:</strong> {p["category"]}</p><p>{p["description"]}</p><p><a href="{p["url"]}">Visit Kovitel.com</a></p>'
    kml_parts.append(f'      <description><![CDATA[{desc}]]></description>')
    kml_parts.append('      <Point>')
    kml_parts.append(f'        <coordinates>{p["lon"]},{p["lat"]},0</coordinates>')
    kml_parts.append('      </Point>')
    kml_parts.append('    </Placemark>')

kml_parts.append('  </Document>')
kml_parts.append('</kml>')

with open(kml_path, "w", encoding="utf-8") as f:
    f.write("\n".join(kml_parts))

# 2. Generate GeoJSON
features = []
for p in POINTS:
    features.append({
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [p["lon"], p["lat"]]
        },
        "properties": {
            "name": p["name"],
            "category": p["category"],
            "description": p["description"],
            "website": p["url"],
            "source": "Kovitel Travel Telecom (https://kovitel.com)"
        }
    })

geojson_obj = {
    "type": "FeatureCollection",
    "name": "Vietnam_5G_Tourist_Safety_Map_2026",
    "features": features
}

with open(geojson_path, "w", encoding="utf-8") as f:
    json.dump(geojson_obj, f, indent=2, ensure_ascii=False)

print(f"Generated KML: {kml_path}")
print(f"Generated GeoJSON: {geojson_path}")
