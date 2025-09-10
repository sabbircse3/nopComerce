import { test, expect } from '@playwright/test';
import { generateRandomEmail } from '../utils/helpers';


test('Subscribe to Newsletter', async ({ page }) => {
await page.goto('https://demo.nopcommerce.com/');
const email = generateRandomEmail();
await page.fill('#newsletter-email', email);
await page.screenshot({ path: 'screenshots/newsletter/emailFilled.png' });
await page.click('#newsletter-subscribe-button');
await page.waitForSelector('#newsletter-result-block', { state: 'visible' });
const message = await page.locator('#newsletter-result-block').textContent();
console.log('Newsletter message:', message);
expect(message).toContain('Thank you');
});