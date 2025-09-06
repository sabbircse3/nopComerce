const { chromium } = require('playwright');


(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();


//code here
// Go to nopCommerce home page
    await page.goto('https://demo.nopcommerce.com/', { waitUntil: 'domcontentloaded', timeout: 60000 });
    
// Change currency to Euro
     await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }),
    page.selectOption('#customerCurrency', 'Euro'),
    page.goto('https://demo.nopcommerce.com/changecurrency/6?returnUrl=%2F')
  ]);

     
})();
