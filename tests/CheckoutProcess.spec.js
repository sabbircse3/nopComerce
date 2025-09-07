const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Go to nopCommerce home page
  await page.goto('https://demo.nopcommerce.com/', { waitUntil: 'domcontentloaded', timeout: 60000 });
  // Click on Cart link
  await page.click('a.ico-cart');

  // Cart empty div
  const emptyCart = page.locator("//div[@class='no-data' and contains(text(),'Your Shopping Cart is empty!')]");

  if (await emptyCart.isVisible()) {
    console.log('Cart is empty! Product count = 0');
  } else {
    console.log('Cart has products!');
    const products = page.locator("table.cart tbody tr");
    const productCount = await products.count();
    console.log(`Found ${productCount} product(s) in cart`);



    for (let i = 0; i < productCount; i++) {
      const name = await products.nth(i).locator("td.product a").innerText();
      const qty = await products.nth(i).locator("input.qty-input").inputValue();
      console.log(`Product: ${name} | Quantity: ${qty}`);
    }
  }

  await browser.close();
})();
