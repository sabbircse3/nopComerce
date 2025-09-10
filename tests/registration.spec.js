import { test } from '@playwright/test';
import { RegistrationPage } from '../pages/RegistrationPage';


test('User Registration', async ({ page }) => {
const registrationPage = new RegistrationPage(page);
await page.goto('https://demo.nopcommerce.com/');
console.log('Registered with:', await registrationPage.register());
});