const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    // Open the website
    await page.goto('https://demo.nopcommerce.com/', { waitUntil: 'domcontentloaded', timeout: 60000 });

    // Wait for potential popups and close if exists
    const closeBtn = await page.$('[title="Close"]');
    if (closeBtn) {
      await closeBtn.waitForElementState('visible', { timeout: 60000 }).catch(() => {});
      await closeBtn.click().catch(() => console.log('Could not click Close button'));
    }

    const searchTerm = 'Laptop';

    // Fill the search box
    await page.fill('#small-searchterms', searchTerm);

    // Click search button
    await page.click('button.search-box-button');

    // Wait for products to appear
    await page.waitForSelector('.item-grid .product-item', { timeout: 60000 });

    // Get all product items
    const products = await page.locator('.item-grid .product-item').all();
    console.log(`Found ${products.length} products on the page.`);

    if (products.length > 0) {
      const product = products[0]; // Get the first product

      const title = await product.locator('.product-title a').textContent();
      const price = await product.locator('.prices .actual-price').textContent().catch(() => 'Price not found');
      const imageUrl = await product.locator('.picture img').getAttribute('src');

      console.log(`Product: ${title}`);
      console.log(`Price: ${price}`);
      console.log(`Image URL: ${imageUrl}`);

      // Click the first product link
      const firstProductLink = page.locator('.product-title a').first();
      await firstProductLink.waitFor({ state: 'visible', timeout: 60000 });
      await firstProductLink.click();

      // Wait for Add to Cart button to be visible and click it
      await page.locator.click('#add-to-cart-button-5');
      await waitFor({ state: 'visible', timeout: 60000 });
      await click();

      console.log('Clicked Add to Cart button.');
    }
  } catch (error) {
    console.error('Error during script execution:', error);
  } finally {
    // await browser.close();
  }
})();
