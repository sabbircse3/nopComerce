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

    
  }


  // await firstProductLink.click();
  // console.log('Clicked on the first product link to open product details page');
  // // Wait for navigation to complete
  // await page.waitForLoadState('domcontentloaded');
  // console.log('Product details page loaded');
  // // Now on product details page, wait for Add to Cart button
  // await page.waitForSelector('#add-to-cart-button-5', { state: 'visible', timeout: 10000 });
  // console.log('Add to Cart button is visible on product details page');
  

  // // Wait for quantity input
  // const qtyInput = page.locator('#product_enteredQuantity_5');
  // // await qtyInput.waitFor({ state: 'visible', timeout: 10000 });

  // // Set quantity if needed
  // await qtyInput.fill('2'); // উদাহরণ: 2 quantity

  // // Click Add to Cart button
  // const addToCartBtn = page.locator('#add-to-cart-button-5');
  // await addToCartBtn.waitFor({ state: 'visible', timeout: 10000 });
  // await addToCartBtn.click();
  // console.log('Clicked Add to Cart on product details page');
  // //add to card

  // // await page.click('#add-to-cart-button-5');

})();
