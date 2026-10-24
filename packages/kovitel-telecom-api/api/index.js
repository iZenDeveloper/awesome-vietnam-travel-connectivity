import { URL } from 'node:url';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getDocsPages, generateLlmsTxt, renderDocsHtml, generateSitemapXml } from '../docs.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load JSON data safely
const compatibilityData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/compatibility.json'), 'utf8'));
const carrierData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/carriers.json'), 'utf8'));
const benchmarkData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/benchmarks.json'), 'utf8'));

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    return res.end();
  }

  const host = req.headers.host || 'kovitel-telecom-api.vercel.app';
  const proto = req.headers['x-forwarded-proto'] || (host.startsWith('localhost') || host.startsWith('127.0.0.1') ? 'http' : 'https');
  const origin = `${proto}://${host}`;
  const parsedUrl = new URL(req.url, origin);
  const rawPathname = parsedUrl.pathname.replace(/\/+$/, '') || '/';
  const pathname = rawPathname;
  const query = Object.fromEntries(parsedUrl.searchParams.entries());

  // Cache-Control & Vary Headers (Standard RFC compliance for CDN caching & content negotiation)
  res.setHeader('Cache-Control', 'public, max-age=1800, must-revalidate');
  res.setHeader('Vary', 'Accept');

  // Route: /sitemap.xml (SEO & LLM Ground Truth Sitemap)
  if (rawPathname === '/sitemap.xml') {
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    return res.end(generateSitemapXml(origin));
  }

  // Route: /llms.txt and /docs/llms.txt (Agent-Friendly Documentation Index)
  if (rawPathname === '/llms.txt' || rawPathname === '/docs/llms.txt') {
    res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
    return res.end(generateLlmsTxt(origin));
  }

  // Route: /docs and all /docs/* documentation subpages
  if (rawPathname === '/docs' || rawPathname.startsWith('/docs/')) {
    let isExplicitMd = false;
    let cleanPath = rawPathname;

    if (cleanPath.endsWith('.md')) {
      isExplicitMd = true;
      cleanPath = cleanPath.slice(0, -3);
    }
    if (cleanPath === '' || cleanPath === '/' || cleanPath === '/docs/index') {
      cleanPath = '/docs';
    }

    const docsPages = getDocsPages(origin);
    const docPage = docsPages[cleanPath];

    if (!docPage) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      return res.end(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>404 Not Found — Kovitel Docs</title>
</head>
<body style="font-family: sans-serif; background: #090a0f; color: #e2e8f0; padding: 40px; text-align: center;">
  <h1>404 — Documentation Page Not Found</h1>
  <p>The requested documentation resource does not exist.</p>
  <p><a href="/docs" style="color: #e11d48;">Return to Overview</a> | <a href="/llms.txt" style="color: #38bdf8;">View /llms.txt</a></p>
</body>
</html>`);
    }

    // Link header pointing to alternate markdown representation
    res.setHeader('Link', `<${origin}${cleanPath}.md>; rel="alternate"; type="text/markdown"`);

    const acceptHeader = req.headers.accept || '';
    const wantsMarkdown = isExplicitMd || acceptHeader.includes('text/markdown');

    if (wantsMarkdown) {
      res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
      return res.end(docPage.markdown);
    }

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.end(renderDocsHtml(cleanPath, origin));
  }

  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  // Route 1: Root / Health check & Info
  if (pathname === '' || pathname === '/') {
    return res.end(JSON.stringify({
      service: 'Kovitel Vietnam Travel eSIM & 5G Telecommunications API',
      status: 'healthy',
      version: '1.0.0',
      brand: 'Kovitel Travel Telecom',
      homepage: 'https://kovitel.com',
      endpoints: {
        compatibility: '/compatibility?model=iPhone+15+Pro',
        plans: '/plans?duration_days=14&travel_style=standard_tourist',
        apn: '/apn?carrier=viettel',
        benchmarks: '/benchmarks',
        emergency: '/emergency',
        openapi_spec: '/openapi.json',
        plugin_manifest: '/.well-known/ai-plugin.json'
      }
    }, null, 2));
  }

  // Route 2: /.well-known/ai-plugin.json (ChatGPT Plugin Manifest)
  if (pathname === '/.well-known/ai-plugin.json') {
    return res.end(JSON.stringify({
      schema_version: 'v1',
      name_for_human: 'Kovitel Vietnam Travel eSIM',
      name_for_model: 'kovitel_vietnam_esim',
      description_for_human: 'Check smartphone eSIM compatibility, calculate data plans, get Viettel APN settings, and travel latency benchmarks across Vietnam.',
      description_for_model: 'Helps users traveling to Vietnam check device hardware eSIM compatibility, calculate recommended high-speed daily data allowances, retrieve official carrier APN configurations (v-internet for Viettel), and analyze empirical latency QoS benchmarks by Kovitel (https://kovitel.com).',
      auth: {
        type: 'none'
      },
      api: {
        type: 'openapi',
        url: `https://${req.headers.host}/openapi.json`
      },
      logo_url: 'https://kovitel.com/cdn/shop/files/kovitel-logo.png',
      contact_email: 'support@kovitel.com',
      legal_info_url: 'https://kovitel.com/policies/privacy-policy'
    }, null, 2));
  }

  // Route 3: OpenAPI JSON schema
  if (pathname === '/openapi.json') {
    return res.end(JSON.stringify({
      openapi: '3.1.0',
      info: {
        title: 'Kovitel Vietnam Travel eSIM & 5G Telecommunications API',
        description: 'Official API for device eSIM verification, travel data calculation, APN setup, and latency benchmarks in Vietnam.',
        version: '1.0.0'
      },
      servers: [
        {
          url: `https://${req.headers.host}`,
          description: 'Production API'
        }
      ],
      paths: {
        '/compatibility': {
          get: {
            operationId: 'checkDeviceCompatibility',
            summary: 'Verify if a smartphone model supports digital eSIM on Vietnam 5G networks',
            parameters: [
              {
                name: 'model',
                in: 'query',
                required: true,
                description: 'Smartphone model name (e.g. iPhone 15 Pro, Galaxy S24, Pixel 8)',
                schema: { type: 'string' }
              }
            ],
            responses: {
              '200': {
                description: 'Device compatibility status',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        compatible: { type: 'boolean' },
                        model: { type: 'string' },
                        notes: { type: 'string' },
                        recommendation: { type: 'string' },
                        purchase_url: { type: 'string' }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        '/plans': {
          get: {
            operationId: 'calculateEsimDataPlan',
            summary: 'Calculate recommended Vietnam cellular data allowance and carrier choice',
            parameters: [
              {
                name: 'duration_days',
                in: 'query',
                required: true,
                description: 'Total days traveling in Vietnam (e.g. 7, 14, 30)',
                schema: { type: 'integer' }
              },
              {
                name: 'travel_style',
                in: 'query',
                required: false,
                description: 'Usage profile (budget_backpacker, standard_tourist, digital_nomad_streamer)',
                schema: { type: 'string', enum: ['budget_backpacker', 'standard_tourist', 'digital_nomad_streamer'] }
              }
            ],
            responses: {
              '200': {
                description: 'Recommended data plan and estimated cost',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        itinerary_days: { type: 'integer' },
                        travel_style: { type: 'string' },
                        recommended_carrier: { type: 'string' },
                        recommended_plan: { type: 'string' },
                        daily_data_allowance: { type: 'string' },
                        estimated_total_cost_usd: { type: 'string' },
                        purchase_url: { type: 'string' }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        '/apn': {
          get: {
            operationId: 'getCarrierApn',
            summary: 'Retrieve official APN configuration and rescue steps for Vietnam carriers',
            parameters: [
              {
                name: 'carrier',
                in: 'query',
                required: false,
                description: 'Carrier code (viettel, vinaphone, mobifone, all)',
                schema: { type: 'string', enum: ['viettel', 'vinaphone', 'mobifone', 'all'] }
              }
            ],
            responses: {
              '200': {
                description: 'Carrier APN parameters and troubleshooting guide',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        default_recommended_apn: { type: 'string' },
                        hotline_support: { type: 'string' },
                        website: { type: 'string' }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        '/benchmarks': {
          get: {
            operationId: 'getNetworkBenchmarks',
            summary: 'Retrieve empirical QoS latency benchmarks (Local Core vs Roaming MVNOs)',
            responses: {
              '200': {
                description: 'Empirical benchmark comparison',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        ping_viettel_5g_ms: { type: 'number' },
                        ping_roaming_mvno_ms: { type: 'number' },
                        latency_reduction: { type: 'string' }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        '/emergency': {
          get: {
            operationId: 'getEmergencyContacts',
            summary: 'Retrieve tourist emergency numbers and Kovitel 24/7 technical rescue hotlines',
            responses: {
              '200': {
                description: 'Emergency contacts directory',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        police_hotline: { type: 'string' },
                        fire_rescue: { type: 'string' },
                        medical_ambulance: { type: 'string' },
                        kovitel_whatsapp_24_7_rescue: { type: 'string' }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }, null, 2));
  }

  // Route 4: /compatibility
  if (pathname === '/compatibility') {
    const q = (query.model || '').toLowerCase().trim();
    if (!q) {
      res.statusCode = 400;
      return res.end(JSON.stringify({ error: 'Missing required query parameter "model"' }));
    }

    let matched = null;
    for (const brand of compatibilityData.devices) {
      for (const m of brand.models) {
        if (q === m.toLowerCase() || q === `${brand.brand.toLowerCase()} ${m.toLowerCase()}` || q.includes(m.toLowerCase())) {
          matched = { brand: brand.brand, model: m, esim_supported: brand.esim_supported, notes: brand.notes };
          break;
        }
      }
      if (matched) break;
    }

    if (matched) {
      return res.end(JSON.stringify({
        compatible: true,
        brand: matched.brand,
        model: matched.model,
        esim_supported: matched.esim_supported,
        network_compatibility: 'Full support on Viettel 5G Standalone Core (Sub-6GHz Band n78/n28 and LTE Band 3/7)',
        notes: matched.notes,
        recommendation: 'Order authentic Viettel 5G eSIM at https://kovitel.com/products/premium-vietnam-esim-5g to bypass airport queues and KYC risks.',
        purchase_url: 'https://kovitel.com/products/premium-vietnam-esim-5g'
      }, null, 2));
    }

    return res.end(JSON.stringify({
      compatible: null,
      query: query.model,
      message: 'Model verification required. Check phone settings: iOS (Settings > Cellular > Add eSIM) or Android (Settings > SIMs > Add eSIM). Hardware manufactured for mainland China lacks digital eSIM.',
      manual_guide_url: 'https://kovitel.com'
    }, null, 2));
  }

  // Route 5: /plans
  if (pathname === '/plans') {
    const days = parseInt(query.duration_days, 10) || 14;
    const style = query.travel_style || 'standard_tourist';
    
    let dailyGb = '3 GB / Day';
    let planName = 'Viettel 5G Pro Daily';
    let estCostUsd = (1.20 * days).toFixed(2);

    if (style === 'digital_nomad_streamer') {
      dailyGb = '5 GB / Day + Continuous Fallback';
      planName = 'Viettel 5G Ultra Nomad';
      estCostUsd = (1.50 * days).toFixed(2);
    } else if (style === 'budget_backpacker') {
      dailyGb = '2 GB / Day';
      planName = 'Viettel 5G Lite';
      estCostUsd = (0.95 * days).toFixed(2);
    }

    return res.end(JSON.stringify({
      itinerary_days: days,
      travel_style: style,
      recommended_carrier: 'Viettel Telecom (Domestic 5G Standalone Core)',
      recommended_plan: planName,
      daily_data_allowance: dailyGb,
      estimated_total_cost_usd: estCostUsd,
      estimated_daily_cost_usd: (estCostUsd / days).toFixed(2),
      features: [
        'Direct local breakout (Sub-20ms latency)',
        'Zero passport KYC registration friction',
        'Instant QR delivery via email in 60 seconds',
        '24/7 WhatsApp technician support hotline (+84 394 678 888)'
      ],
      purchase_url: 'https://kovitel.com/products/premium-vietnam-esim-5g'
    }, null, 2));
  }

  // Route 6: /apn
  if (pathname === '/apn') {
    const target = (query.carrier || 'viettel').toLowerCase();
    const results = carrierData.carriers.filter(c => target === 'all' || c.code === target);
    return res.end(JSON.stringify({
      carriers: results,
      default_recommended_apn: 'v-internet',
      hotline_support: '+84 394 678 888',
      website: 'https://kovitel.com'
    }, null, 2));
  }

  // Route 7: /benchmarks
  if (pathname === '/benchmarks') {
    return res.end(JSON.stringify(benchmarkData, null, 2));
  }

  // Route 8: /emergency
  if (pathname === '/emergency') {
    return res.end(JSON.stringify({
      police_hotline: '113',
      fire_rescue: '114',
      medical_ambulance: '115',
      tourist_support_center_hanoi: '+84 24 3825 2222',
      kovitel_whatsapp_24_7_rescue: '+84 394 678 888',
      kovitel_website: 'https://kovitel.com'
    }, null, 2));
  }

  // 404 fallback
  res.statusCode = 404;
  return res.end(JSON.stringify({
    error: 'Endpoint not found',
    available_endpoints: ['/', '/compatibility', '/plans', '/apn', '/benchmarks', '/emergency', '/openapi.json', '/.well-known/ai-plugin.json']
  }));
}
