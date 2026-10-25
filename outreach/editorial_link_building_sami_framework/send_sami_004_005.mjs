/**
 * Kovitel Editorial Outreach Campaign - Final Targets (SAMI-004 & SAMI-005)
 */
const targets = [
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

const task = await taskSpace("sami-batch3-final");
const page = task.page("p1");

for (let i = 0; i < targets.length; i++) {
  const target = targets[i];
  console.log(`\n=========================================`);
  console.log(`[${i+1}/${targets.length}] Dispatching pitch for ${target.site} (${target.to})...`);

  try {
    await page.goto("https://outlook.live.com/mail/0/", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(7000);

    // Discard any existing draft
    await page.evaluate(() => {
      const discard = document.querySelector('button[aria-label*="Discard"]');
      if (discard) discard.click();
    });
    await page.waitForTimeout(2000);

    console.log("1. Clicking New mail...");
    await page.click('role:button[name*="New mail"]');
    await page.waitForTimeout(3000);

    console.log("2. Typing recipient...");
    await page.click("div[aria-label='To']");
    await page.waitForTimeout(300);
    await page.keyboard.type(target.to);
    await page.waitForTimeout(1500);

    console.log("3. Clicking picker suggestion...");
    const picker = await page.evaluate(() => {
      const p = document.querySelector('#PickerHeaderUseTypeAddress, div[id*="PickerHeader"]');
      if (p) {
        p.click();
        return true;
      }
      return false;
    });
    console.log("Picker clicked:", picker);
    await page.waitForTimeout(1000);

    console.log("4. Filling Subject...");
    await page.fill("input[placeholder='Add a subject']", target.subject);
    await page.waitForTimeout(800);

    console.log("5. Filling Body...");
    await page.click("div[aria-label='Message body']");
    await page.waitForTimeout(400);
    await page.keyboard.insertText(target.body);
    await page.waitForTimeout(1500);

    console.log("6. Clicking Send...");
    await page.click('button[aria-label="Send"], button[title*="Send"]');
    await page.waitForTimeout(5000);

    console.log(`✔ [SENT SUCCESS] ${target.id} sent to ${target.to}!`);
  } catch (err) {
    console.error(`❌ [ERROR] Failed to send to ${target.to}:`, err.message);
  }
}

await task.finish({ keep: [] });
