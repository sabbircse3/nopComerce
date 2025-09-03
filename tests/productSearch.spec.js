const { chromium } = require('playwright');


(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();


//code here
// Go to nopCommerce home page
  await page.goto('https://demo.nopcommerce.com/', { waitUntil: 'domcontentloaded', timeout: 60000 });
  const searchTerm = 'Laptop';

  // Fill the search box
  await page.fill('#small-searchterms', searchTerm);

  // Click search button
  await page.click('button.search-box-button');

})();
