const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://demo.nopcommerce.com/', { waitUntil: 'domcontentloaded' });
  await page.getByRole('textbox', { name: 'Sign up for our newsletter' }).fill('sabbir.test@gmail.com');
  await page.getByRole('button', { name: 'Subscribe' }).click();  

})();
