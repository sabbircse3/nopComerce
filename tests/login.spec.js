import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


const storageState = 'storageState.json';


test('Login and save session', async ({ page }) => {
const loginPage = new LoginPage(page);
await page.goto('https://demo.nopcommerce.com/');
await loginPage.gotoLogin();
await loginPage.login('sabbir5@example.com', 'Password123');
expect(await loginPage.isLoggedIn()).toBeTruthy();
await page.context().storageState({ path: storageState });
});