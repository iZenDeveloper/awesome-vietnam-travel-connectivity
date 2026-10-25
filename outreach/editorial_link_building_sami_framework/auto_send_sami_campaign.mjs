/**
 * Kovitel Editorial Outreach Campaign - Sami Framework Executor
 * Automated via ego lite (Outlook Web: kovitel.outreach@outlook.com)
 */
const targets = [
  {
    id: "SAMI-001",
    site: "The Gone Goat",
    author: "Pashmina Binwani",
    to: "pashmina@thegonegoat.com",
    subject: "Note on your Vietnam eSIM guide / Sa Pa & remote coverage",
    body: `Hi Pashmina,

I enjoyed your detailed connectivity breakdown on your Vietnam SIM guide, especially your notes on Sa Pa and Da Lat.

Vietnam recently completed its 2G/3G sunset and deployed nationwide Viettel 5G. In our field tests of 500 checkpoints, we found roaming MVNOs suffer from ~240ms latency due to international routing, while domestic Viettel 5G Core delivers sub-20ms speeds—critical for riders on remote mountain passes:
https://kovitel.com/blogs/news/viettel-5g-speedtest-vietnam-2026

If you'd like to update your guide with domestic 5G benchmarks, I’d love to comp you a complimentary Kovitel Viettel 5G eSIM for your next visit.

Best regards,

Dat Nguyen
Kovitel Travel Telecom | https://kovitel.com
WhatsApp: +84 394 678 888`
  },
  {
    id: "SAMI-002",
    site: "Two Peas Abroad",
    author: "Liam & Sarah",
    to: "hello@twopeasabroad.com",
    subject: "Quick resource for your Vietnam travel & Ha Giang guide",
    body: `Hi Liam & Sarah,

I've been following your local Vietnam travel dispatches—great practical advice for newcomers navigating Hanoi and Ha Giang.

With Vietnam shutting down legacy 2G/3G networks, foreign visitors often face SIM registration queues and device APN confusion at airports. To help incoming travelers get online instantly upon landing, we built an instant QR Viettel 5G eSIM portal with pre-verified tourist profiles and 24/7 English WhatsApp support:
https://kovitel.com/products/premium-vietnam-esim-5g

Would this make a helpful reference for your readers planning their route?

Happy to set you both up with free test eSIMs anytime!

Warm regards,

Dat Nguyen
Kovitel Travel Telecom | https://kovitel.com
WhatsApp: +84 394 678 888`
  },
  {
    id: "SAMI-003",
    site: "Dream Big, Travel Far",
    author: "Cazzy & Bradley",
    to: "cazzy@dreambigtravelfarblog.com",
    subject: "Update for your Asia eSIM guide / Vietnam 5G standalone core",
    body: `Hi Cazzy & Bradley,

I noticed your comprehensive Southeast Asia eSIM directory and reader reviews.

For the Vietnam section, most aggregated roaming providers still route traffic through European or Singaporean gateways, causing noticeable latency lag. Our team at Kovitel connects directly to the domestic Viettel 5G Standalone Core network, delivering sub-20ms local response times and instant 60-second QR provisioning:
https://kovitel.com/products/premium-vietnam-esim-5g

If you are looking to include a dedicated local Viettel 5G option for your Indochina travelers, we'd love to share an exclusive perk for your community.

I'd also gladly send you free testing eSIMs to benchmark!

Best,

Dat Nguyen
Kovitel Travel Telecom | https://kovitel.com`
  },
  {
    id: "SAMI-004",
    site: "Travel Off Path",
    author: "Editorial Team",
    to: "editorial@traveloffpath.com",
    subject: "Telecom update for Vietnam travel logistics (2G sunset alert)",
    body: `Dear Travel Off Path Editorial Team,

I frequently read your Southeast Asia travel entry updates.

An important regulatory development for incoming tourists: Vietnam has officially shut down its 2G/3G mobile networks. Devices without 4G/VoLTE or 5G capability no longer receive mobile reception, catching many international arrivals by surprise.

Our telecom engineering team compiled an open reference guide explaining compatible frequency bands (n78/n28), APN settings, and network coverage across all 63 provinces:
https://kovitel.com/blogs/news/viettel-5g-speedtest-vietnam-2026

Might this empirical field dataset provide useful context for your readers planning upcoming travel to Vietnam?

We can also provide official telecom data for any upcoming coverage.

Best regards,

Dat Nguyen
Telecom Growth Lead | Kovitel (https://kovitel.com)`
  },
  {
    id: "SAMI-005",
    site: "Loop Trails",
    author: "Field Guide Team",
    to: "contact@looptrails.com",
    subject: "Emergency data & mountain signal tip for Ha Giang riders",
    body: `Hi Loop Trails Team,

Your Ha Giang navigation and safety guide is an essential bookmark for adventure riders.

On mountain routes like Ma Pi Leng and Du Gia, secondary carriers frequently lose signal, while domestic Viettel 5G/4G Standalone Core remains active. We created a pre-configured Viettel 5G tourist eSIM that riders can activate via QR before hitting the road, ensuring access to offline maps and emergency hotlines:
https://kovitel.com/products/premium-vietnam-esim-5g

Could this be a valuable emergency resource for your riders' packing checklist?

We’d love to comp free test eSIMs for your trail leaders anytime!

Safe riding,

Dat Nguyen
Kovitel Travel Telecom | https://kovitel.com`
  }
];

const task = await taskSpace("sami-framework-outreach-final");
const page = task.page("p1");

console.log("🚀 Starting Sami Framework Editorial Outreach via Outlook Web...");
await page.goto("https://outlook.live.com/mail/0/", { waitUntil: "domcontentloaded" });
await page.waitForTimeout(6000);

// Discard any existing draft
await page.evaluate(() => {
  const discard = document.querySelector('button[aria-label*="Discard"]');
  if (discard) discard.click();
});
await page.waitForTimeout(2000);

const results = [];

for (let i = 0; i < targets.length; i++) {
  const target = targets[i];
  console.log(`\n=========================================`);
  console.log(`[${i+1}/${targets.length}] Preparing pitch for ${target.site} (${target.to})...`);

  try {
    // 1. Click New Mail
    console.log("Clicking New Mail...");
    await page.click('role:button[name*="New mail"]');
    await page.waitForTimeout(3000);

    // 2. Fill To
    console.log(`Typing recipient: ${target.to}`);
    await page.click("div[aria-label='To']");
    await page.waitForTimeout(300);
    await page.keyboard.type(target.to);
    await page.waitForTimeout(800);

    // Click picker suggestion to properly commit the recipient chip
    const pickerClicked = await page.evaluate(() => {
      const picker = document.querySelector('#PickerHeaderUseTypeAddress, div[id*="PickerHeader"]');
      if (picker) {
        picker.click();
        return true;
      }
      return false;
    });
    console.log(`Committed recipient chip via picker: ${pickerClicked}`);
    await page.waitForTimeout(800);

    // 3. Fill Subject
    console.log(`Setting subject: ${target.subject}`);
    await page.fill("input[placeholder='Add a subject']", target.subject);
    await page.waitForTimeout(800);

    // 4. Fill Body
    console.log(`Inserting personalized editorial body (${target.body.length} chars)...`);
    await page.click("div[aria-label='Message body']");
    await page.waitForTimeout(400);
    await page.keyboard.insertText(target.body);
    await page.waitForTimeout(1500);

    // 5. Click Send!
    console.log(`🚀 Sending email to ${target.to}...`);
    await page.click('button[aria-label="Send"], button[title*="Send"]');
    await page.waitForTimeout(5000);

    console.log(`✔ [SENT SUCCESS] ${target.site} -> ${target.to}`);
    results.push({ id: target.id, site: target.site, to: target.to, status: "SUCCESS" });
  } catch (err) {
    console.error(`❌ [ERROR] Failed to send to ${target.to}:`, err.message);
    results.push({ id: target.id, site: target.site, to: target.to, status: "ERROR", error: err.message });
    // Attempt to discard stuck draft before moving to next
    await page.evaluate(() => {
      const discard = document.querySelector('button[aria-label*="Discard"]');
      if (discard) discard.click();
    });
    await page.waitForTimeout(2000);
  }
}

console.log("\n=========================================");
console.log("SAMI FRAMEWORK OUTREACH FINAL SUMMARY:");
console.log(JSON.stringify(results, null, 2));

await task.finish({ keep: [] });
