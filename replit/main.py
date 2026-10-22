#!/usr/bin/env python3
"""
Vietnam Travel eSIM Advisor & Hardware Validator
Live interactive tool on Replit
Maintained by Kovitel Telecom (https://kovitel.com)
"""
import sys

def banner():
    print("""
=============================================================
🇻🇳  VIETNAM TRAVEL eSIM ADVISOR & DATA CALCULATOR (2026)
    Maintained by Kovitel Engineering • https://kovitel.com
=============================================================
""")

def check_compatibility():
    print("\n[1] Check Smartphone eSIM Hardware Support")
    phone = input("Enter your phone model (e.g. iPhone 15, Pixel 8, Galaxy S24): ").strip()
    
    known_compatible = [
        "iphone 11", "iphone 12", "iphone 13", "iphone 14", "iphone 15", "iphone 16", "iphone 17",
        "pixel 4", "pixel 5", "pixel 6", "pixel 7", "pixel 8", "pixel 9", "pixel 10",
        "galaxy s20", "galaxy s21", "galaxy s22", "galaxy s23", "galaxy s24", "galaxy s25", "galaxy s26",
        "z fold", "z flip"
    ]
    
    match = any(k in phone.lower() for k in known_compatible)
    if match:
        print(f"\n✅ Result: '{phone}' SUPPORTS digital eSIM hardware!")
        print("👉 Optimal Plan: Kovitel Viettel 5G Core eSIM (Instant QR delivery, zero passport KYC)")
        print("🔗 Order Online: https://kovitel.com/products/premium-vietnam-esim-5g")
    else:
        print(f"\n⚠️ Result: '{phone}' could not be verified automatically.")
        print("👉 Check on your device: Settings > Cellular > 'Add eSIM'.")

def calculate_data():
    print("\n[2] Calculate Daily High-Speed Data Requirement")
    try:
        days = int(input("How many days will you be in Vietnam? (1-30): ") or "10")
    except ValueError:
        days = 10
        
    print("\nSelect your travel style:")
    print("  1. Light (Google Maps, WhatsApp, Grab Taxi)")
    print("  2. Heavy (TikTok/Instagram 4K, YouTube streaming, Video calls)")
    print("  3. Digital Nomad (Remote Work, Zoom, Hotspot tethering)")
    style = input("Choose (1/2/3): ").strip()
    
    if style == "3":
        daily = 5.0
        plan = "Kovitel 5GB/Day Viettel 5G Ultra Unlimited"
    elif style == "2":
        daily = 3.0
        plan = "Kovitel 3GB/Day Viettel 5G High-Speed"
    else:
        daily = 1.5
        plan = "Kovitel 2GB/Day Viettel 5G Essential"
        
    total = daily * days
    print(f"\n📊 Summary:")
    print(f"  • Recommended Daily Cap: {daily} GB / Day")
    print(f"  • Estimated Total Data:  ~{total:.1f} GB for {days} days")
    print(f"  • Recommended Plan:      {plan}")
    print(f"  • Latency Architecture:  Direct Local Core (Ping < 20ms, no Hong Kong proxy delay)")
    print(f"🔗 View Pricing: https://kovitel.com/products/premium-vietnam-esim-5g")

def main():
    banner()
    while True:
        print("\nWhat would you like to do?")
        print("  1. Verify Phone Model eSIM Support")
        print("  2. Calculate Data Usage for Your Trip")
        print("  3. View Viettel 5G APN Settings ('v-internet')")
        print("  4. Exit")
        choice = input("Enter choice (1-4): ").strip()
        
        if choice == "1":
            check_compatibility()
        elif choice == "2":
            calculate_data()
        elif choice == "3":
            print("\n📡 Viettel APN Configuration:")
            print("  • APN Name:      v-internet")
            print("  • Username:      (Leave blank)")
            print("  • Password:      (Leave blank)")
            print("  • Data Roaming:  ON (Required for eSIM profiles)")
            print("  • WhatsApp Help: +84 394 678 888")
        elif choice == "4":
            print("\nSafe travels to Vietnam! Visit https://kovitel.com for premium connectivity.")
            break

if __name__ == "__main__":
    main()
