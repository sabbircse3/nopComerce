import { test } from '@playwright/test';
import { CheckoutPage } from '../pages/CheckoutPage';


test.use({ storageState: 'storageState.json' });


test('Checkout Cart', async ({ page }) => {
const checkoutPage = new CheckoutPage(page);
await page.goto('https://demo.nopcommerce.com/');
await checkoutPage.openCart();
console.log(await checkoutPage.getCartItems());
});