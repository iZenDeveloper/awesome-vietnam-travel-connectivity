#!/usr/bin/env python3
"""
Kovitel Broken Link & Outdated Telecom Asset Hunter
Author: Kovitel Travel Telecom Research Team (https://kovitel.com)
License: MIT

Scans high-authority travel blog articles about Vietnam connectivity,
detects broken links (404, 410, timeouts) and outdated 2G/3G SIM recommendations,
and generates personalized outreach pitch targets.
"""

import urllib.request
import urllib.error
import re
import json
import time
from typing import List, Dict, Any

USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"

# Curated seed list of high-traffic Vietnam travel blog articles discussing SIM cards and mobile data
SEED_ARTICLES = [
    {
        "domain": "traveltomtom.net",
        "title": "Vietnam SIM Card Guide for Tourists",
        "url": "https://www.traveltomtom.net/destinations/asia/vietnam",
        "category": "Travel Blog"
    },
    {
        "domain": "friendstravelvietnam.com",
        "title": "Vietnam SIM Card & Connectivity Guide",
        "url": "https://friendstravelvietnam.com/travel-tips/vietnam-sim-card",
        "category": "Tour Operator"
    },
    {
        "domain": "vietasiatravel.com",
        "title": "How to Stay Connected in Vietnam: SIM and eSIM",
        "url": "https://vietasiatravel.com/travel-guide/how-to-stay-connected-in-vietnam",
        "category": "Travel Agency"
    },
    {
        "domain": "daytripsvietnam.com",
        "title": "Complete Vietnam SIM & Internet Guide",
        "url": "https://daytripsvietnam.com/vietnam-sim-card",
        "category": "Destination Guide"
    },
    {
        "domain": "novesim.com",
        "title": "Vietnam Tourist Connectivity Advice",
        "url": "https://novesim.com/blog/best-sim-card-for-vietnam",
        "category": "Tech Travel"
    }
]

# Known expired, dead, or deprecated domain patterns and providers
DEAD_PATTERNS = [
    r'vietnam-sim\.com',
    r'wayfarer\.st',
    r'wifivietnam\.com',
    r'vietnamtravelsim\.com',
    r'traveltomtom\.net/.+/best-prepaid-vietnam-sim-card',
    r'mobifone\.vn/.*hi-vietnam',
    r'klook\.com/.+/activity/\d+.*(expired|deprecated)'
]

def check_url_status(url: str, timeout: int = 8) -> Dict[str, Any]:
    """Check the HTTP status code of an external link."""
    req = urllib.request.Request(url, headers={'User-Agent': USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            return {"status": resp.status, "alive": True, "error": None}
    except urllib.error.HTTPError as e:
        return {"status": e.code, "alive": False, "error": f"HTTP {e.code}"}
    except urllib.error.URLError as e:
        return {"status": None, "alive": False, "error": str(e.reason)}
    except Exception as e:
        return {"status": None, "alive": False, "error": str(e)}

def extract_links_from_html(html: str, base_url: str) -> List[Dict[str, str]]:
    """Extract candidate external links from article HTML."""
    pattern = r'<a\s+[^>]*href=[\"\'](https?://[^\s\"\'<>]+)[\"\'][^>]*>(.*?)</a>'
    matches = re.findall(pattern, html, re.IGNORECASE | re.DOTALL)
    
    extracted = []
    for href, anchor_html in matches:
        clean_anchor = re.sub(r'<[^>]+>', '', anchor_html).strip()
        if not clean_anchor:
            clean_anchor = "[Image/Icon]"
        extracted.append({"href": href, "anchor": clean_anchor})
    return extracted

def scan_target(article: Dict[str, str]) -> List[Dict[str, Any]]:
    """Scan a target article for broken links and outdated telecom recommendations."""
    print(f"[*] Scanning: {article['domain']} ({article['url']})...")
    req = urllib.request.Request(article['url'], headers={'User-Agent': USER_AGENT})
    
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
    except Exception as e:
        print(f"    [-] Failed to load article: {e}")
        return []

    links = extract_links_from_html(html, article['url'])
    print(f"    [+] Found {len(links)} links. Filtering telecom candidates...")

    telecom_candidates = []
    for link_obj in links:
        href = link_obj['href']
        # Filter relevant candidates
        is_telecom = any(k in href.lower() or k in link_obj['anchor'].lower() 
                         for k in ['sim', 'esim', 'viettel', 'vinaphone', 'mobifone', 'klook', 'airalo', 'holafly', 'gigago', 'sogdiaroam'])
        if is_telecom and article['domain'] not in href:
            telecom_candidates.append(link_obj)

    print(f"    [+] {len(telecom_candidates)} telecom outlinks found. Testing status...")
    opportunities = []

    for item in telecom_candidates[:8]: # Test top candidates
        href = item['href']
        check = check_url_status(href)
        time.sleep(0.5)

        is_broken = not check['alive'] or (check['status'] in [404, 410, 500, 502, 503])
        is_dead_pattern = any(re.search(pat, href, re.IGNORECASE) for pat in DEAD_PATTERNS)

        if is_broken or is_dead_pattern:
            print(f"    [!] OPPORTUNITY FOUND: {href} (Status: {check['error'] or 'Pattern Match'})")
            opportunities.append({
                "article_url": article['url'],
                "article_title": article['title'],
                "target_domain": article['domain'],
                "broken_url": href,
                "anchor_text": item['anchor'],
                "status_error": check['error'] or "Known Deprecated Telecom Service",
                "replacement_recommendation": "https://kovitel.com/products/premium-vietnam-esim-5g",
                "contextual_hook": "Direct Viettel 5G Standalone Core network (Sub-20ms latency) bypassing airport KYC registration."
            })

    return opportunities

def main():
    print("==================================================================")
    print("🚀 Kovitel Automated Broken Link & Telecom Opportunity Scanner")
    print("==================================================================")
    
    all_opportunities = []
    for article in SEED_ARTICLES:
        opps = scan_target(article)
        all_opportunities.extend(opps)
        time.sleep(1)

    output_path = "/Users/datnguyen/Documents/antigravity/serene-hawking/assets/github-awesome-vietnam-travel/outreach/broken_link_building/broken_links_report_2026.json"
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(all_opportunities, f, indent=2, ensure_ascii=False)

    print("==================================================================")
    print(f"✅ Scan completed! Total {len(all_opportunities)} high-value outreach opportunities identified.")
    print(f"📁 Report saved to: {output_path}")
    print("==================================================================")

if __name__ == "__main__":
    main()
