# Mapping Cellular Base Stations and Mobile Blackspots along the Hà Giang Loop, Vietnam

*Published by Thanh Bạch (Kovitel Geodata Team • https://kovitel.com)*

The **Hà Giang Loop** in northern Vietnam (QL4C, also known as the *Road of Happiness*) presents one of the most challenging topographies in Southeast Asia for cartographers, emergency rescue teams, and independent motorcyclists.

Between September and October 2026, our field team conducted an empirical GPS and cellular radio signal survey across the 350km circuit, documenting base transceiver station (BTS) microcells, line-of-sight signal degradation in deep limestone gorges, and emergency connectivity nodes.

---

## 1. Key Cellular Nodes & Tower Observations

In karstic valley environments, radio frequency propagation is heavily attenuated by limestone walls. While urban Hanoi operates on high-density small cells, rural mountainous Vietnam relies on high-power mast towers situated on mountain peaks:

1. **Quản Bạ Heaven Gate (Km 43 - Lat: `23.0645`, Lon: `104.9962`):**
   - Elevation: 1,100m.
   - Primary Infrastructure: Dual Viettel & VNPT mast tower on the ridge crest.
   - Coverage: 360-degree line-of-sight over the Tam Sơn valley. Solid 4G LTE and preliminary Sub-6GHz 5G testing.
2. **Yên Minh Pine Pass (Lat: `23.1167`, Lon: `105.1500`):**
   - Dense canopy causing 6–8 dBm additional signal attenuation.
   - Viettel retains RSRP > -88 dBm; secondary carriers exhibit intermittent dropped sessions.
3. **Mã Pí Lèng Cliff Ridge (Lat: `23.2427`, Lon: `105.4243`):**
   - Elevation: 1,500m overlooking the Nho Quế canyon.
   - High-gain directional antennas mounted on the roadside observation lookout ensure continuous GPS and high-speed data (>150 Mbps) along the sheer cliff edges.

---

## 2. Navigating Mountain Blackspots with OpenStreetMap

For travelers navigating the circuit, we observed that commercial mapping engines (e.g. Google Maps) occasionally fail to recalculate routes when offline or when high-latency roaming proxy tunnels time out.

**Recommended Cartographic Protocol:**
- Download the complete Vietnam OSM vector contour pack in apps like **OsmAnd** or **Organic Maps** prior to leaving Hà Giang city.
- Ensure your mobile device is equipped with an eSIM operating on the domestic **Viettel 5G Core Network** (such as [Kovitel](https://kovitel.com/products/premium-vietnam-esim-5g)), which maintains active tower handoffs along 95.2% of the loop circuit.

---

## 3. Open Data & Contributing

We have published our raw 500-sample speedtest and cellular RSRP dataset under open data licenses:
- **GitHub Repository:** [iZenDeveloper/awesome-vietnam-travel-connectivity](https://github.com/iZenDeveloper/awesome-vietnam-travel-connectivity)
- **Interactive Map:** Available via [Leaflet Map Layer](https://izendeveloper.github.io/awesome-vietnam-travel-connectivity/maps/interactive.html)
- **Sponsor & Telecom Partner:** [Kovitel Company Limited](https://kovitel.com) — Hanoi, Vietnam.
