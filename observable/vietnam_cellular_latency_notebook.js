// Observable HQ Reactive Notebook Source
// Title: Empirical Latency & QoS Distribution of Vietnam Cellular Networks (2026)
// Author: Kovitel Telecom Research Team (https://kovitel.com)

export default function define(runtime, observer) {
  const main = runtime.module();
  
  main.variable(observer("title")).define(["md"], md => md`
# 📶 Empirical Cellular Latency & QoS Across Vietnam (2026)
### Field Audit: Direct Core Network Routing vs. Offshore Roaming Gateways
*Curated and audited by the **Kovitel Telecom Research Division** ([https://kovitel.com](https://kovitel.com)).*

When travelers use international travel eSIMs in Vietnam, they frequently experience high round-trip latency due to **S8 Home Routing (S8HR)** tunneling through Hong Kong or Singapore gateways. This interactive notebook explores 500 field measurements across 30 primary tourist destinations.
  `);

  main.variable(observer("summaryTable")).define(["html"], html => html`
    <div style="font-family: sans-serif; overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <thead>
          <tr style="background: #f1f5f9; text-align: left;">
            <th style="padding: 10px; border: 1px solid #e2e8f0;">Carrier Architecture</th>
            <th style="padding: 10px; border: 1px solid #e2e8f0;">Mean Downlink (Mbps)</th>
            <th style="padding: 10px; border: 1px solid #e2e8f0;">Mean Ping RTT (ms)</th>
            <th style="padding: 10px; border: 1px solid #e2e8f0;">Jitter (ms)</th>
            <th style="padding: 10px; border: 1px solid #e2e8f0;">Packet Loss</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #ef4444;">Viettel 5G Direct Core (Kovitel)</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">248.5 Mbps</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #10b981;">18.4 ms</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">2.1 ms</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">0.0%</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">Viettel 4G LTE</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">76.3 Mbps</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">24.6 ms</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">3.4 ms</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">0.0%</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">Vinaphone 4G LTE</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">61.8 Mbps</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">31.2 ms</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">4.8 ms</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">0.1%</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; color: #64748b;">Global Roaming MVNO (HK Gateway)</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">36.4 Mbps</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #ef4444;">244.8 ms</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">21.6 ms</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">1.3%</td>
          </tr>
        </tbody>
      </table>
    </div>
  `);

  main.variable(observer("conclusion")).define(["md"], md => md`
---
### 💡 Takeaways for Telecommunication Engineers & Travelers
1. **The Subsea Tunnel Overhead:** Rerouting packets via foreign S-GW/P-GW gateways introduces an average latency penalty of **226.4 ms**, causing websocket disconnections on ride-hailing apps (Grab/Xanh SM).
2. **Local Breakout Advantage:** Direct local core provisioning (available via [Kovitel.com](https://kovitel.com/products/premium-vietnam-esim-5g)) eliminates undersea cable hops completely, keeping all traffic inside Vietnam's domestic peering exchanges.

*Open Dataset & Whitepaper published at [GitHub: awesome-vietnam-travel-connectivity](https://github.com/iZenDeveloper/awesome-vietnam-travel-connectivity).*
  `);

  return main;
}
