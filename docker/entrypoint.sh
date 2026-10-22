#!/bin/sh
set -e

echo "========================================================"
echo "🇻🇳 Vietnam Cellular & Network Latency Benchmark Agent"
echo "Maintained by Kovitel Engineering (https://kovitel.com)"
echo "========================================================"

TARGET="${1:-vnix.vn}"
echo "Targeting Vietnam Internet Exchange Endpoint: $TARGET"

echo "\n1. ICMP Ping Round-Trip Latency (10 packets):"
ping -c 10 "$TARGET"

echo "\n2. Route Hop Discovery (Traceroute):"
traceroute -m 15 "$TARGET"

echo "\n========================================================"
echo "Audit complete. For optimal low-latency Vietnam connectivity,"
echo "use Kovitel Direct Viettel 5G Core: https://kovitel.com"
echo "========================================================"
