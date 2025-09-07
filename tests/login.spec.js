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
    await page.locator('a.ico-login').screenshot({path:'./screenshots/loginIcon.png'}),

      // Fill email and password
    await page.fill('#Email', 'sabbir5@example.com'); 
    await page.locator('#Email').screenshot({path:'./screenshots/Email.png'}),
    await page.fill('#Password', 'Password123');
    await page.locator('#Password').screenshot({path:'./screenshots/Password.png'}),

    // Click 'Remember me?' checkbox if needed
    await page.check('#RememberMe');

    // Click login button
    await page.click('button.login-button'); 

    // // Verify login by checking for 'My account' link
    const myAccountLink = await page.$('a.ico-account');
    if (myAccountLink) {
    console.log('Login successful');
    } else {
    console.error('Login failed');
  } 

 await browser.close();
})();
