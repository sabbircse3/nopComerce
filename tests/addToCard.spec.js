const { chromium } = require('playwright');


(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();


  //code here

  await page.goto('https://demo.nopcommerce.com/', { waitUntil: 'domcontentloaded', timeout: 60000 });
  const searchTerm = 'Laptop';

  // Fill the search box
  await page.fill('#small-searchterms', searchTerm);

  // Click search button
  await page.click('button.search-box-button');
 
  // Get all product items
  const products = await page.locator('.item-grid .product-item').all();
  console.log(`Found ${products.length} products on the page.`);

  // for (const product of products) {
  if (products.length > 0) {

    const product = products[0]; // Get the first product (Asus Laptop)

    const title = await product.locator('.product-title a').textContent();
    const price = await product.locator('.price.actual-price').textContent();
    const imageUrl = await product.locator('.picture img').getAttribute('src');

    console.log(`Product: ${title}`);
    console.log(`Price: ${price}`);
    console.log(`Image URL: ${imageUrl}`);

    // Wait for the first product link (Asus Laptop) and click it
    const firstProductLink = page.locator('.product-title a').first();
    console.log('Waiting for the first product link to be visible...');
    await firstProductLink.waitFor({ state: 'visible', timeout: 10000 });
    console.log('First product link is visible.');
    const productName = await firstProductLink.textContent();
    console.log(`Opening first product: ${productName}`);

    await firstProductLink.click();
    // Fill quantity (e.g., 3)
    await page.fill('#product_enteredQuantity_5', '3');

    // Click Add to Cart button
    await page.click('#add-to-cart-button-5');

    console.log('Clicked Add to Cart button.');
    
  }


  
})();
