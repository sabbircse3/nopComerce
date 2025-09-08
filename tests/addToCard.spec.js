const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 500 });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://demo.nopcommerce.com/', { waitUntil: 'domcontentloaded', timeout: 60000 });

  const searchTerm = 'Laptop';
  await page.fill('#small-searchterms', searchTerm);
  await page.click('button.search-box-button');

  const products = await page.locator('.item-grid .product-item').all();
  console.log(`Found ${products.length} products on the page.`);

  if (products.length > 0) {
    const firstProductLink = page.locator('.product-title a').first();
    await firstProductLink.waitFor({ state: 'visible', timeout: 10000 });
    const productName = await firstProductLink.textContent();
    console.log(`Opening first product: ${productName}`);
    await firstProductLink.click();

    const addToCartBtn = page.locator("//button[contains(@id,'add-to-cart-button')]");
    await addToCartBtn.waitFor({ state: 'visible', timeout: 10000 });
    await addToCartBtn.click();
    console.log("Clicked Add to Cart button.");

    // Wait for bar-notification to be attached (even if hidden)
    await page.waitForSelector('#bar-notification', { state: 'attached', timeout: 10000 });
    console.log("Notification attached to DOM!");

    // Polling loop: wait until element becomes visible
    let isVisible = false;
    for (let i = 0; i < 10; i++) {
      isVisible = await page.locator('#bar-notification').isVisible();
      if (isVisible) break;
      await page.waitForTimeout(500);
    }

    if (isVisible) {
      const notificationText = await page.locator('#bar-notification .content').textContent();
      console.log("Notification:", notificationText?.trim());
    } else {
      console.log("Notification never became visible, but it exists in DOM!");
    }
  }

  // await browser.close();
})();
