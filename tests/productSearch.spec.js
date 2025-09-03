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


  
  // Wait for the "Add to cart" button
  await page.click('.product-box-add-to-cart-button');
  // const addToCartButton = page.locator('.product-box-add-to-cart-button');
  // await addToCartButton.waitFor({ state: 'visible', timeout: 10000 });

    // Click the button
  // await addToCartButton.click();

 // Optional: Check if success message appears
  const successMessage = page.locator('.bar-notification.success');
  if (await successMessage.isVisible({ timeout: 5000 })) {
    console.log('✅ Product added to cart successfully.');
  } else {
    console.log('⚠️ Could not verify if product was added to cart.');
  }

})();
