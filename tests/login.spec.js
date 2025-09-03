const { chromium } = require('playwright');


(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();


//code here
// Go to nopCommerce home page
    await page.goto('https://demo.nopcommerce.com/', { waitUntil: 'domcontentloaded', timeout: 60000 });
    // Click on Login link
    await page.click('a.ico-login');

      // Fill email and password
  await page.fill('#Email', 'sabbir@example.com'); 
  await page.fill('#Password', 'Password123');

  // Click 'Remember me?' checkbox if needed
  await page.check('#RememberMe');

  // Click login button
  await page.click('button.login-button');

  // Wait for navigation after login
  // await page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 60000 });  

  // // Verify login by checking for 'My account' link
  const myAccountLink = await page.$('a.ico-account');
  if (myAccountLink) {
    console.log('Login successful');
  } else {
    console.error('Login failed');
  } 


  // const searchTerm = 'Laptop';

  // // Fill the search box
  // await page.fill('#small-searchterms', searchTerm);

  // // Click search button
  // await page.click('button.search-box-button');


})();
