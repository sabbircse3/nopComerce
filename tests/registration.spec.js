const { chromium } = require('playwright');


(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();


//code here
// Go to nopCommerce home page
    await page.goto('https://demo.nopcommerce.com/', { waitUntil: 'domcontentloaded', timeout: 60000 });

    // Click on Register link
    await page.click('a.ico-register');

    // Fill Personal Details
    await page.check('#gender-male'); // select male
    await page.fill('#FirstName', 'Sabbir');
    await page.fill('#LastName', 'Hasan');
    await page.fill('#Email', `sabbir5@example.com`); 

    // Company Details
    await page.fill('#Company', 'MyCompany');

    // Options
    await page.check('#Newsletter'); 

    // Password
    await page.fill('#Password', 'Password123');
    await page.fill('#ConfirmPassword', 'Password123');

    // Click Register button
    await page.click('#register-button');

    // Wait for success message
    const successMessage = await page.textContent('.result');
    if (successMessage.trim() === 'Your registration completed') {
    console.log('Registration successful');
    await page.click('a.register-continue-button');
    } else {
    console.error('Registration failed');
    }

 await browser.close();
})();
