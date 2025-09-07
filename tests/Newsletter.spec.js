const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://demo.nopcommerce.com/', { 
  waitUntil: 'load',
  timeout: 60000 // increase timeout to 60s
});
  await page.fill('#newsletter-email', 'sabbir5@example.com');
await page.click('#newsletter-subscribe-button');

await page.click('#newsletter-subscribe-button');

await page.waitForFunction(() => {
  const el = document.querySelector('#newsletter-result-block');
  return el && el.textContent.trim().length > 0;
}, { timeout: 15000 });

const message = await page.locator('#newsletter-result-block').textContent();
console.log("Newsletter Message:", JSON.stringify(message));

})();
