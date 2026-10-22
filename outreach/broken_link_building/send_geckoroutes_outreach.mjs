/**
 * GeckoRoutes Automated Outreach via ego lite
 */
const target = {
  id: "BL-007",
  site: "GeckoRoutes (Maarten Cox)",
  to: "contact@geckoroutes.com",
  subject: "Broken resource link on GeckoRoutes (Vietnam SIM section)",
  body: `Hi Maarten & GeckoRoutes Team,

I frequently follow your comprehensive route guides across Southeast Asia—your step-by-step transport breakdowns for Vietnam (especially Hanoi to Sapa and Ha Giang) are unmatched!

While checking your Vietnam travel resources, I noticed that your dedicated guide/link for purchasing local SIM cards is currently returning a 404 error:
* Broken URL: https://geckoroutes.com/vietnam/sim-card-vietnam/

With Vietnam completing its nationwide 2G/3G sunset and launching Viettel 5G Standalone across all 63 provinces, older physical SIM workflows have largely transitioned to instant eSIMs to avoid airport kiosk markup and eKYC delays.

If you are looking for an up-to-date, reliable resource to replace that broken link or update your readers, our team at Kovitel recently released an open field guide and direct Viettel 5G Core eSIM portal:
👉 https://kovitel.com/products/premium-vietnam-esim-5g
Or our technical benchmark: https://kovitel.com/blogs/news/viettel-5g-speedtest-vietnam-2026

Key advantages for your route travelers:
1. Instant QR delivery within 60 seconds (active before boarding or upon arrival).
2. Direct Viettel 5G Core routing (sub-20ms local latency, zero MVNO roaming lag).
3. 24/7 dedicated WhatsApp support (+84 394 678 888) for immediate APN assistance.

I would also love to provide you and your team with complimentary Kovitel 5G eSIMs whenever you or your field writers next visit Vietnam.

Thank you for your fantastic work empowering independent travelers across Vietnam!

Best regards,

Dat Nguyen
Partnerships & Telecom Growth Lead
Kovitel Travel Telecom | https://kovitel.com
Email: kovitel.outreach@outlook.com
WhatsApp: +84 394 678 888`
};

const task = await taskSpace("outlook-auto-send-geckoroutes");
const page = task.page("p1");

console.log("🚀 Starting Automated Outreach Execution for GeckoRoutes in Outlook Web...");
await page.goto("https://outlook.live.com/mail/0/", { waitUntil: "domcontentloaded" });
await page.waitForTimeout(5000);

try {
  // 1. Click New Mail
  console.log("Clicking New Mail...");
  await page.click('role:button[name*="New mail"]', { label: "Click New Mail" });
  await page.waitForTimeout(3000);

  // 2. Fill To
  console.log(`Typing recipient: ${target.to}`);
  await page.click("div[aria-label='To']");
  await page.waitForTimeout(400);
  await page.keyboard.type(target.to);
  await page.waitForTimeout(400);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(1000);

  // 3. Fill Subject
  console.log(`Setting subject: ${target.subject}`);
  await page.fill("input[placeholder='Add a subject']", target.subject);
  await page.waitForTimeout(1000);

  // 4. Fill Body
  console.log(`Inserting personalized email body (${target.body.length} chars)...`);
  await page.click("div[aria-label='Message body']");
  await page.waitForTimeout(400);
  await page.keyboard.insertText(target.body);
  await page.waitForTimeout(2000);

  // 5. Click Send!
  console.log(`🚀 Sending email to ${target.to}...`);
  await page.click("button[aria-label='Send']", { label: `Send to ${target.site}` });
  await page.waitForTimeout(5000);

  console.log(`✔ [SENT SUCCESS] ${target.site} -> ${target.to}`);
} catch (err) {
  console.error(`❌ [ERROR] Failed to send to ${target.to}:`, err.message);
}

await task.finish({ keep: [] });
