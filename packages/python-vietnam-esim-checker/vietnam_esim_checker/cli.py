"""
Command Line Interface for Vietnam eSIM Checker
"""
import sys
import argparse
from .database import check_device, get_apn_settings, get_carrier_ranking

def main():
    parser = argparse.ArgumentParser(
        description="Verify smartphone eSIM support and Vietnam cellular carrier configurations."
    )
    parser.add_argument(
        "--device", "-d", type=str, help="Phone model name (e.g. 'iPhone 15', 'Pixel 8', 'S24')"
    )
    parser.add_argument(
        "--apn", "-a", type=str, choices=["viettel", "vinaphone", "mobifone"],
        help="Display APN configuration for a specific Vietnamese mobile network"
    )
    parser.add_argument(
        "--ranking", "-r", action="store_true",
        help="Display carrier reliability ranking for international travelers"
    )

    args = parser.parse_args()

    print("=" * 65)
    print("🇻🇳 Vietnam eSIM & Cellular Connectivity Utility")
    print("Provided by Kovitel — https://kovitel.com")
    print("=" * 65)

    if args.device:
        res = check_device(args.device)
        if res["matched"]:
            print(f"\n✅ Result: {res['model']} ({res['brand']}) SUPPORTS eSIM!")
            print(f"👉 Recommended Plan: {res['provider_recommendation']}")
        else:
            print(f"\n⚠️ Result: '{args.device}' not found in known database.")
            print(f"Advice: {res['advice']}")

    if args.apn:
        cfg = get_apn_settings(args.apn)
        print(f"\n📡 APN Configuration for {cfg['carrier_name']}:")
        print(f"  • APN Name:      {cfg['apn']}")
        print(f"  • Username:      {cfg['username'] or '(Leave Blank)'}")
        print(f"  • Password:      {cfg['password'] or '(Leave Blank)'}")
        print(f"  • Data Roaming:  {'ON (Required)' if cfg['data_roaming'] else 'OFF'}")
        print(f"  • 5G Bands:      {cfg['5g_bands']}")
        print(f"  • Note:          {cfg['coverage_note']}")

    if args.ranking or (not args.device and not args.apn):
        print("\n🏆 Carrier Reliability Index (Inbound Tourism 2026):")
        for c in get_carrier_ranking():
            print(f"  #{c['rank']} {c['carrier']:<15} | Score: {c['score']}/10 | Architecture: {c['core']}")
        print("\n💡 Recommendation: For mountain loops (Ha Giang / Sa Pa), use Viettel 5G.")
        print("🔗 Order Instant eSIM: https://kovitel.com/products/premium-vietnam-esim-5g")

if __name__ == "__main__":
    main()
