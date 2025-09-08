import { test, expect } from '@playwright/test';

test('Subscribe to newsletter', async ({ page }) => {
  // Increase timeout for slow page
  test.setTimeout(90000);

  // Open the demo site
  await page.goto('https://demo.nopcommerce.com/', { 
    waitUntil: 'load',
    timeout: 60000
  });

  // Wait for email input to be visible
  const email = 'sabbir5@example.com'; // unique email
  console.log('Using email:', email);
  await page.waitForSelector('#newsletter-email', { state: 'visible', waitUntil: 'load', timeout: 60000 });
  await page.fill('#newsletter-email', email);

  // Click subscribe
  await page.click('#newsletter-subscribe-button');

  // Wait for result message
  await page.waitForSelector('#newsletter-result-block', { state: 'visible', timeout: 15000 });
  const message = await page.locator('#newsletter-result-block').textContent();
  console.log('Newsletter Message:', message?.trim());

  // Assertions
  expect(message).not.toBeNull();
  expect(message?.trim().length).toBeGreaterThan(0);
});
