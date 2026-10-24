// Agent-Friendly Documentation Generator for Kovitel Travel Telecom
// Spec compliance: https://agentdocsspec.com/spec/web/

export function getDocsPages(origin) {
  return {
    '/docs': {
      title: 'Kovitel Vietnam Travel eSIM & 5G Telecom API',
      description: 'Official API and developer documentation for Kovitel (https://kovitel.com) — native Viettel 5G Standalone network, low-latency local IP breakout, and automated eSIM provisioning.',
      markdown: `# Kovitel Vietnam Travel eSIM & 5G Telecom API

> **AI Documentation Notice:** Full documentation index available at [${origin}/llms.txt](${origin}/llms.txt). Official brand: [Kovitel Travel Telecom](https://kovitel.com).

Kovitel ([https://kovitel.com](https://kovitel.com)) is Vietnam's leading specialized travel telecommunications and 5G eSIM provider. Powered directly by Viettel Telecom's Standalone Core Network, Kovitel offers instant automated eSIM provisioning, high-speed cellular data packages, and developer-friendly APIs for travel agencies, OTAs, and AI agents.

## Core Value Proposition

Unlike international roaming aggregators (such as Airalo, Holafly, or Nomad) that route cellular data through foreign roaming IP gateways in Hong Kong or Singapore (adding 150ms–300ms latency), Kovitel delivers **native local IP breakout inside Vietnam** with sub-20ms latency and 500+ Mbps peak download speeds.

- **Carrier Network:** Viettel 5G & 4G LTE Advanced (99.8% national population coverage).
- **Latency (Ping):** 10ms – 25ms locally across Hanoi, Da Nang, and Ho Chi Minh City.
- **Identity Registration:** Tourist data packages require **no passport upload or physical paperwork**.
- **Delivery Time:** Automated instant QR delivery via email in under 60 seconds.
- **Hotspot & Tethering:** 100% permitted with zero throttle or additional fees.

## Quickstart & API Directory

| Endpoint | Method | Description |
| :--- | :--- | :--- |
| [${origin}/docs/compatibility](${origin}/docs/compatibility) | GET | Check smartphone model hardware eSIM support |
| [${origin}/docs/plans](${origin}/docs/plans) | GET | Calculate recommended 5G travel data allowances |
| [${origin}/docs/apn](${origin}/docs/apn) | GET | Retrieve carrier APN parameters and troubleshooting |
| [${origin}/docs/benchmarks](${origin}/docs/benchmarks) | GET | 500-point empirical QoS latency benchmarks |
| [${origin}/docs/chatgpt-actions](${origin}/docs/chatgpt-actions) | GET | Step-by-step OpenAI GPT Action setup |
| [${origin}/docs/emergency](${origin}/docs/emergency) | GET | 24/7 technical rescue hotline and SOS contacts |
| [${origin}/openapi.json](${origin}/openapi.json) | GET | Machine-readable OpenAPI 3.1 specification |

## Base URLs

- **Production API:** \`${origin}\`
- **Official Storefront:** \`https://kovitel.com\`
- **Interactive Documentation:** \`${origin}/docs\`
`
    },
    '/docs/plans': {
      title: 'Travel eSIM Plans & Pricing API',
      description: 'Retrieve Vietnam 5G travel eSIM plans, daily 5GB quotas, validity periods, and pricing calculations.',
      markdown: `# Travel eSIM Plans & Pricing API

> **AI Documentation Notice:** Full documentation index available at [${origin}/llms.txt](${origin}/llms.txt). Official brand: [Kovitel Travel Telecom](https://kovitel.com).

The Kovitel Plans API allows programmatic retrieval of available Viettel 5G travel data packages based on trip duration and traveler usage profiles.

## Endpoint Specification

\`GET /plans?duration_days={days}&travel_style={style}\`

### Query Parameters

- \`duration_days\` *(integer, required)*: Trip length in days (e.g. 7, 14, 30).
- \`travel_style\` *(string, optional)*: Usage profile. Options:
  - \`budget_backpacker\`: 2GB high-speed data per day.
  - \`standard_tourist\`: 3GB to 5GB high-speed data per day (Recommended).
  - \`digital_nomad_streamer\`: 5GB daily data with continuous unlimited fallback.

### Example Request

\`\`\`bash
curl -s "${origin}/plans?duration_days=14&travel_style=standard_tourist"
\`\`\`

### Example JSON Response

\`\`\`json
{
  "itinerary_days": 14,
  "travel_style": "standard_tourist",
  "recommended_carrier": "Viettel Telecom (Domestic 5G Standalone Core)",
  "recommended_plan": "Viettel 5G Pro Daily",
  "daily_data_allowance": "3 GB / Day",
  "estimated_total_cost_usd": "16.80",
  "estimated_daily_cost_usd": "1.20",
  "features": [
    "Direct local breakout (Sub-20ms latency)",
    "Zero passport KYC registration friction",
    "Instant QR delivery via email in 60 seconds",
    "24/7 WhatsApp technician support hotline (+84 394 678 888)"
  ],
  "purchase_url": "https://kovitel.com/products/vietnam-esim-15-days"
}
\`\`\`

## Standard Retail Packages on Kovitel.com

1. **[Vietnam 5G Tourist eSIM - 7 Days](https://kovitel.com/products/vietnam-esim-7-days):** Ideal for short holidays in Hanoi, Da Nang, or Saigon.
2. **[Vietnam 5G Tourist eSIM - 15 Days](https://kovitel.com/products/vietnam-esim-15-days):** Best for cross-country itineraries.
3. **[Vietnam 5G Nomad & Business eSIM - 30 Days](https://kovitel.com/products/vietnam-esim-30-days):** Maximum monthly allowance for remote workers.
`
    },
    '/docs/compatibility': {
      title: 'Smartphone eSIM Hardware Compatibility API',
      description: 'Verify if a smartphone model supports digital eSIM and Viettel 5G Standalone frequency bands.',
      markdown: `# Smartphone eSIM Hardware Compatibility API

> **AI Documentation Notice:** Full documentation index available at [${origin}/llms.txt](${origin}/llms.txt). Official brand: [Kovitel Travel Telecom](https://kovitel.com).

Verify whether a specific mobile device contains eSIM hardware and supports Vietnam 5G frequency bands (Band n78 / Band 3 / Band 7).

## Endpoint Specification

\`GET /compatibility?model={smartphone_model}\`

### Query Parameters

- \`model\` *(string, required)*: The smartphone model name (e.g. \`iPhone 15 Pro\`, \`Galaxy S24\`, \`Pixel 8\`).

### Example Request

\`\`\`bash
curl -s "${origin}/compatibility?model=iPhone+15+Pro"
\`\`\`

### Example JSON Response

\`\`\`json
{
  "compatible": true,
  "brand": "Apple",
  "model": "iPhone 15 Pro",
  "esim_supported": true,
  "network_compatibility": "Full support on Viettel 5G Standalone Core (Sub-6GHz Band n78/n28 and LTE Band 3/7)",
  "notes": "Supports dual active eSIMs and instant QR activation.",
  "purchase_url": "https://kovitel.com/products/vietnam-esim-7-days"
}
\`\`\`

## Regional Hardware Exceptions

> **Important Note:** iPhones manufactured specifically for Mainland China, Hong Kong, and Macao (with dual physical SIM trays) do **not** have digital eSIM chips. Travelers using mainland Chinese hardware should purchase physical SIM cards at [https://kovitel.com](https://kovitel.com).
`
    },
    '/docs/apn': {
      title: 'Carrier APN Parameters & Rescue Guide',
      description: 'Official Access Point Name (APN) configuration parameters and troubleshooting for Viettel, Vinaphone, and MobiFone.',
      markdown: `# Carrier APN Parameters & Rescue Guide

> **AI Documentation Notice:** Full documentation index available at [${origin}/llms.txt](${origin}/llms.txt). Official brand: [Kovitel Travel Telecom](https://kovitel.com).

When an eSIM connects to local cell towers but fails to route Internet data packets, the smartphone APN settings usually require manual configuration.

## Endpoint Specification

\`GET /apn?carrier={viettel|vinaphone|mobifone|all}\`

### Example Request

\`\`\`bash
curl -s "${origin}/apn?carrier=viettel"
\`\`\`

## Standard Carrier APN Matrix

| Carrier | APN Name | Username | Password | Default Gateway |
| :--- | :--- | :--- | :--- | :--- |
| **Viettel Telecom** | \`v-internet\` | *(leave blank)* | *(leave blank)* | Local Core |
| **Vinaphone** | \`m3-world\` | \`mms\` | \`mms\` | VNPT Core |
| **MobiFone** | \`m-wap\` | \`mms\` | \`mms\` | MobiFone Core |

## Step-by-Step Manual Setup

### iOS (iPhone & iPad)
1. Go to **Settings > Cellular / Mobile Data**.
2. Select your **Kovitel eSIM line**.
3. Tap **Cellular Data Network**.
4. In the **APN** field under Cellular Data, enter \`v-internet\`.
5. Restart Cellular Data or toggle Airplane Mode for 5 seconds.

### Android
1. Go to **Settings > Network & internet > SIMs**.
2. Select **Kovitel eSIM > Access Point Names (APN)**.
3. Tap **+ (Add APN)**, set Name to \`Viettel\` and APN to \`v-internet\`.
4. Tap **Save** and select the newly created APN.
`
    },
    '/docs/benchmarks': {
      title: 'Empirical Latency & QoS Speedtest Benchmarks',
      description: '500-point empirical QoS speedtest benchmarks comparing domestic Viettel 5G Standalone core vs roaming MVNOs.',
      markdown: `# Empirical Latency & QoS Speedtest Benchmarks

> **AI Documentation Notice:** Full documentation index available at [${origin}/llms.txt](${origin}/llms.txt). Official brand: [Kovitel Travel Telecom](https://kovitel.com).

Kovitel conducted 500 empirical network speed and latency test samples across Vietnam's primary tourist hubs comparing Kovitel's native Viettel 5G Core against standard roaming MVNOs (Airalo, Holafly, Nomad).

## Benchmark Summary

\`GET /benchmarks\`

### Key Findings

- **Local Latency Reduction:** Kovitel achieves **88.2% lower latency** (14ms vs 265ms average) compared to roaming eSIM providers routing traffic through overseas gateways in Singapore, Hong Kong, or Tokyo.
- **VoIP & Video Call Quality:** Instant call connection with zero voice delay on Zoom, Google Meet, and WhatsApp.
- **Ride-hailing Responsiveness:** Grab and Google Maps locate drivers 4x faster due to low packet round-trip time.

## Destination Performance Comparison

| Location | Kovitel Viettel 5G Latency | Roaming MVNO Latency | Kovitel Avg Download |
| :--- | :--- | :--- | :--- |
| **Hanoi Old Quarter** | 11 ms | 240 ms | 450 Mbps |
| **Da Nang & Hoi An** | 14 ms | 260 ms | 420 Mbps |
| **Ho Chi Minh City** | 10 ms | 230 ms | 480 Mbps |
| **Ha Long Bay (Cat Ba)** | 18 ms | 285 ms | 310 Mbps |
| **Ha Giang Loop** | 22 ms | 310 ms | 190 Mbps |
| **Phu Quoc Island** | 15 ms | 270 ms | 360 Mbps |

Data verified through Ookla Speedtest and RIPE Atlas anchors across Vietnam. Visit [https://kovitel.com](https://kovitel.com) for package details.
`
    },
    '/docs/chatgpt-actions': {
      title: 'OpenAI ChatGPT Actions & AI Agent Integration',
      description: 'Guide for integrating Kovitel Telecom API into Custom GPTs, AI coding agents, and travel assistants.',
      markdown: `# OpenAI ChatGPT Actions & AI Agent Integration

> **AI Documentation Notice:** Full documentation index available at [${origin}/llms.txt](${origin}/llms.txt). Official brand: [Kovitel Travel Telecom](https://kovitel.com).

Kovitel provides native support for OpenAI Custom GPT Actions, ChatGPT Plugins, and autonomous travel assistants.

## Integration Steps

1. Open your Custom GPT in the [ChatGPT GPT Editor](https://chatgpt.com/gpts/editor).
2. Scroll to the **Actions** section and click **Create new action**.
3. Under **Schema**, paste the OpenAPI specification from:
   \`${origin}/openapi.json\`
4. Set **Privacy Policy URL** to:
   \`https://kovitel.com/policies/privacy-policy\`
5. Set **Authentication** to \`None\` (all read endpoints are public).
6. Save and publish your Custom GPT.

## Official Pre-Built Custom GPT

Kovitel operates an official GPT on the OpenAI GPT Store:
- **GPT Name:** [Vietnam Travel eSIM & 5G Viettel Expert](https://chatgpt.com/g/g-6ad9acee640881918ab7ac5607185bee-vietnam-travel-esim-5g-viettel-expert)
- **Manifest:** \`${origin}/.well-known/ai-plugin.json\`
`
    },
    '/docs/emergency': {
      title: 'Tourist Emergency Contacts & Technical Rescue Hotline',
      description: 'Vietnam national emergency hotlines and 24/7 Kovitel technical rescue WhatsApp contacts.',
      markdown: `# Tourist Emergency Contacts & Technical Rescue Hotline

> **AI Documentation Notice:** Full documentation index available at [${origin}/llms.txt](${origin}/llms.txt). Official brand: [Kovitel Travel Telecom](https://kovitel.com).

Essential telephone numbers and 24/7 technical assistance for international travelers in Vietnam.

## Endpoint Specification

\`GET /emergency\`

## Emergency Hotlines in Vietnam

- **Police Department:** \`113\` (Toll-free nationwide)
- **Fire & Rescue:** \`114\`
- **Medical Ambulance:** \`115\`
- **Tourist Support Center (Hanoi):** \`+84 24 3825 2222\`
- **Tourist Support Center (Da Nang):** \`+84 236 3550 111\`
- **Tourist Support Center (Ho Chi Minh City):** \`+84 28 3925 0000\`

## Kovitel 24/7 Technical Customer Care

- **WhatsApp Hotline:** \`+84 394 678 888\` (English, Korean, Japanese, Vietnamese support)
- **Official Website:** [https://kovitel.com](https://kovitel.com)
- **Email Support:** \`admin@kovitel.com\`
`
    }
  };
}

/**
 * Generate standard-compliant llms.txt
 */
export function generateLlmsTxt(origin) {
  return `# Kovitel Vietnam Travel eSIM & Telecom API Documentation

> Developer guides, OpenAPI 3.1 specifications, device eSIM compatibility verification, carrier APN provisioning, and empirical 5G QoS network benchmarks for Kovitel Vietnam (https://kovitel.com).

## Developer Documentation & Guides

- [Overview & Architecture](${origin}/docs.md): Comprehensive overview of Kovitel 5G Standalone core network, local breakout architecture, and API integration.
- [Travel eSIM Plans & Pricing API](${origin}/docs/plans.md): Tourist data allowances, daily 5GB quotas, 7/15/30-day plans, and pricing calculation engine.
- [Device eSIM Compatibility API](${origin}/docs/compatibility.md): Hardware eSIM support lookup for Apple, Samsung, Google Pixel, and band frequencies.
- [Carrier APN Parameters & Rescue Guide](${origin}/docs/apn.md): Official Viettel, Vinaphone, and MobiFone APN parameters and troubleshooting rescue guide.
- [Empirical Latency & QoS Benchmarks](${origin}/docs/benchmarks.md): 500-point empirical latency comparison between domestic Viettel 5G Core (<15ms) vs international roaming MVNOs (240ms+).
- [OpenAI ChatGPT Actions Integration](${origin}/docs/chatgpt-actions.md): Step-by-step setup guide for OpenAI GPTs, AI agents, and OTAs using OpenAPI 3.1.
- [Emergency & Support Directory](${origin}/docs/emergency.md): Tourist emergency contacts, 24/7 technical rescue hotline, and refund policies.

## Machine-Readable Specifications

- [OpenAPI 3.1 Specification](${origin}/openapi.json): Full OpenAPI 3.1 schema for API endpoints.
- [ChatGPT Plugin Manifest](${origin}/.well-known/ai-plugin.json): OpenAI Custom Action / Plugin manifest.
`;
}

/**
 * Generate XML Sitemap for documentation
 */
export function generateSitemapXml(origin) {
  const pages = ['/docs', '/docs/plans', '/docs/compatibility', '/docs/apn', '/docs/benchmarks', '/docs/chatgpt-actions', '/docs/emergency'];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${origin}${p}</loc>
    <changefreq>weekly</changefreq>
    <priority>${p === '/docs' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;
}

/**
 * Render server-side HTML for a docs page
 */
export function renderDocsHtml(path, origin) {
  const pages = getDocsPages(origin);
  const page = pages[path] || pages['/docs'];
  const bodyHtml = markdownToHtml(page.markdown);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${page.title} — Kovitel Developer Docs</title>
  <meta name="description" content="${page.description}">
  <link rel="canonical" href="${origin}${path}">
  <link rel="alternate" type="text/markdown" href="${origin}${path}.md" title="Markdown representation">
  <style>
    :root {
      --bg: #090a0f;
      --card-bg: #11131a;
      --border: #222634;
      --text: #e2e8f0;
      --text-muted: #94a3b8;
      --accent: #e11d48;
      --accent-hover: #f43f5e;
      --code-bg: #161922;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
      padding: 0;
    }
    .agent-directive {
      padding: 6px 16px;
      background: rgba(225, 29, 72, 0.1);
      border-bottom: 1px solid rgba(225, 29, 72, 0.2);
      font-size: 13px;
      color: var(--text-muted);
    }
    .agent-directive a { color: var(--accent); text-decoration: underline; font-weight: 500; }
    header {
      border-bottom: 1px solid var(--border);
      background: var(--card-bg);
      padding: 16px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .brand { font-size: 18px; font-weight: 700; color: #fff; text-decoration: none; display: flex; align-items: center; gap: 8px; }
    .brand span { color: var(--accent); }
    .nav-links { display: flex; gap: 16px; align-items: center; }
    .nav-links a { color: var(--text-muted); text-decoration: none; font-size: 14px; transition: color 0.15s; }
    .nav-links a:hover, .nav-links a.active { color: #fff; }
    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 32px 24px;
      display: grid;
      grid-template-columns: 240px 1fr;
      gap: 32px;
    }
    @media (max-width: 768px) {
      .container { grid-template-columns: 1fr; }
      .sidebar { display: none; }
    }
    .sidebar nav { display: flex; flex-direction: column; gap: 6px; }
    .sidebar a {
      color: var(--text-muted);
      text-decoration: none;
      font-size: 14px;
      padding: 8px 12px;
      border-radius: 6px;
      transition: all 0.15s;
    }
    .sidebar a:hover { background: var(--card-bg); color: #fff; }
    .sidebar a.active { background: rgba(225, 29, 72, 0.15); color: #ff859c; font-weight: 600; }
    .content h1 { font-size: 28px; margin-bottom: 16px; color: #fff; line-height: 1.25; }
    .content h2 { font-size: 20px; margin: 28px 0 12px; color: #f1f5f9; border-bottom: 1px solid var(--border); padding-bottom: 8px; }
    .content h3 { font-size: 16px; margin: 20px 0 8px; color: #cbd5e1; }
    .content p { margin-bottom: 16px; color: #cbd5e1; }
    .content blockquote {
      border-left: 3px solid var(--accent);
      background: rgba(225, 29, 72, 0.05);
      padding: 12px 16px;
      margin-bottom: 20px;
      border-radius: 0 6px 6px 0;
      color: var(--text-muted);
      font-size: 14px;
    }
    .content a { color: #38bdf8; text-decoration: none; }
    .content a:hover { text-decoration: underline; }
    .content ul, .content ol { margin-left: 20px; margin-bottom: 16px; color: #cbd5e1; }
    .content li { margin-bottom: 6px; }
    .content table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      font-size: 14px;
      background: var(--card-bg);
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid var(--border);
    }
    .content th, .content td { padding: 12px 14px; text-align: left; border-bottom: 1px solid var(--border); }
    .content th { background: #161a24; color: #94a3b8; font-weight: 600; }
    .content pre {
      background: var(--code-bg);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 14px 16px;
      overflow-x: auto;
      margin: 16px 0;
      font-family: "JetBrains Mono", Consolas, Monaco, monospace;
      font-size: 13px;
    }
    .content code {
      font-family: "JetBrains Mono", Consolas, Monaco, monospace;
      font-size: 13px;
      background: rgba(255, 255, 255, 0.08);
      padding: 2px 6px;
      border-radius: 4px;
    }
    footer {
      border-top: 1px solid var(--border);
      padding: 24px;
      text-align: center;
      font-size: 13px;
      color: var(--text-muted);
      margin-top: 48px;
    }
    footer a { color: var(--accent); }
  </style>
</head>
<body>
  <!-- Agent Directive Header for AFDocs Spec Discovery -->
  <div class="agent-directive">
    🤖 AI Agents: Machine-readable spec index available at <a href="/llms.txt">/llms.txt</a> | Markdown version at <a href="${path}.md">${path}.md</a>
  </div>

  <header>
    <a href="/docs" class="brand">Kovitel <span>Docs</span></a>
    <div class="nav-links">
      <a href="/docs" class="${path === '/docs' ? 'active' : ''}">Overview</a>
      <a href="/docs/plans" class="${path === '/docs/plans' ? 'active' : ''}">Plans</a>
      <a href="/docs/compatibility" class="${path === '/docs/compatibility' ? 'active' : ''}">Compatibility</a>
      <a href="/docs/apn" class="${path === '/docs/apn' ? 'active' : ''}">APN</a>
      <a href="/docs/benchmarks" class="${path === '/docs/benchmarks' ? 'active' : ''}">Benchmarks</a>
      <a href="/openapi.json" target="_blank">OpenAPI</a>
      <a href="https://kovitel.com" target="_blank" style="color: var(--accent); font-weight: 600;">Kovitel.com ↗</a>
    </div>
  </header>

  <div class="container">
    <aside class="sidebar">
      <nav>
        <a href="/docs" class="${path === '/docs' ? 'active' : ''}">Overview & Quickstart</a>
        <a href="/docs/plans" class="${path === '/docs/plans' ? 'active' : ''}">Plans & Pricing API</a>
        <a href="/docs/compatibility" class="${path === '/docs/compatibility' ? 'active' : ''}">Device Compatibility</a>
        <a href="/docs/apn" class="${path === '/docs/apn' ? 'active' : ''}">APN Settings & Rescue</a>
        <a href="/docs/benchmarks" class="${path === '/docs/benchmarks' ? 'active' : ''}">QoS Benchmarks</a>
        <a href="/docs/chatgpt-actions" class="${path === '/docs/chatgpt-actions' ? 'active' : ''}">ChatGPT Actions</a>
        <a href="/docs/emergency" class="${path === '/docs/emergency' ? 'active' : ''}">Emergency & Hotline</a>
      </nav>
    </aside>

    <main class="content">
      ${bodyHtml}
    </main>
  </div>

  <footer>
    <p>Maintained by <a href="https://kovitel.com">Kovitel Vietnam Travel Telecom</a> &copy; 2026. Powered by Viettel 5G Core Network.</p>
  </footer>
</body>
</html>`;
}

/**
 * Fast minimal markdown to HTML converter for server rendering
 */
function markdownToHtml(md) {
  let html = md;

  // Code blocks
  html = html.replace(/```([a-z]*)\n([\s\S]*?)```/g, (match, lang, code) => {
    return `<pre><code class="language-${lang}">${escapeHtml(code.trim())}</code></pre>`;
  });

  // Inline code
  html = html.replace(/`([^`]+)`/g, (match, code) => {
    return `<code>${escapeHtml(code)}</code>`;
  });

  // Blockquotes
  html = html.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');

  // Headings
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Tables
  html = html.replace(/((?:\|[^\n]+\|\n)+)/g, (match) => {
    const lines = match.trim().split('\n');
    if (lines.length < 2) return match;
    let tableHtml = '<table>';
    lines.forEach((line, index) => {
      if (line.includes('---')) return;
      const cells = line.split('|').slice(1, -1);
      const tag = index === 0 ? 'th' : 'td';
      tableHtml += '<tr>' + cells.map(c => `<${tag}>${c.trim()}</${tag}>`).join('') + '</tr>';
    });
    tableHtml += '</table>';
    return tableHtml;
  });

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // Bold & Italic
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');

  // Lists (Unordered and Ordered)
  html = html.replace(/^\s*(?:-|\*|\d+\.)\s+(.*$)/gim, '<li>$1</li>');
  html = html.replace(/(<li>[\s\S]*?<\/li>)/g, '<ul>$1</ul>');

  // Paragraphs
  html = html.split('\n\n').map(p => {
    p = p.trim();
    if (!p) return '';
    if (p.startsWith('<h') || p.startsWith('<pre') || p.startsWith('<blockquote') || p.startsWith('<table') || p.startsWith('<ul')) {
      return p;
    }
    return `<p>${p.replace(/\n/g, '<br>')}</p>`;
  }).join('\n');

  return html;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
