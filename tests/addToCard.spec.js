const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://demo.nopcommerce.com/', { waitUntil: 'domcontentloaded', timeout: 60000 });

  const searchTerm = 'Laptop';
  await page.fill('#small-searchterms', searchTerm);
  await page.click('button.search-box-button');

  await page.waitForSelector('.item-grid .product-item', { timeout: 15000 });

  const products = await page.locator('.item-grid .product-item').all();
  console.log(`Found ${products.length} products on the page.`);

  if (products.length > 0) {
    const firstProductLink = page.locator('.product-title a').first();
    console.log('Waiting for the first product link to be visible...');
    await firstProductLink.waitFor({ state: 'visible', timeout: 10000 });

    const productName = await firstProductLink.textContent();
    console.log(`Opening first product: ${productName?.trim()}`);

    await firstProductLink.click();

    //Wait until page fully loads
    await page.waitForLoadState('domcontentloaded');

    //Locate Add to Cart button dynamically
    const addToCartBtn = page.locator("button[id^='add-to-cart-button']");
    await addToCartBtn.waitFor({ state: 'visible', timeout: 15000 });

    await addToCartBtn.click();
    console.log('Clicked Add to Cart button successfully.');
  } else {
    console.log('No products found for search term:', searchTerm);
  }

  // await browser.close();
})();
