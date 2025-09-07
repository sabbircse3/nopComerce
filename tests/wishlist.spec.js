const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Go to nopCommerce home page
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

    const addToWishlistBtn = page.locator('#add-to-wishlist-button-5');
    await addToWishlistBtn.waitFor({ state: 'visible', timeout: 10000 });
    await addToWishlistBtn.click();
      //Trigger Ajax function directly inside browser context
  console.log('Triggering AjaxCart.addproducttocart_details via evaluate...');
  await page.evaluate(() => {
    AjaxCart.addproducttocart_details('/addproducttocart/details/5/2', '#product-details-form');
  });

  //Wait for success notification (green bar message)
  const successBar = page.locator('#bar-notification.success');
  await successBar.waitFor({ state: 'visible', timeout: 10000 });
  console.log('Wishlist Ajax call executed successfully.');
    console.log('Clicked Add to Wishlist button.');

  }

//   const addToWishlistBtn = page.locator('#add-to-wishlist-button-5');
//   await addToWishlistBtn.waitFor({ state: 'visible', timeout: 10000 });
//   await addToWishlistBtn.click();
//   console.log('Clicked Add to Wishlist button.');
//   // await browser.close();
})();
