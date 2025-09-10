import { test } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';
import { waitForNotification } from '../utils/helpers';


test.use({ storageState: 'storageState.json' });


test('Add to Cart', async ({ page }) => {
const productsPage = new ProductsPage(page);
await page.goto('https://demo.nopcommerce.com/');
await productsPage.searchProduct('Laptop');
await productsPage.openFirstProduct();
await page.locator("//button[contains(@id,'add-to-cart-button')]").click();
await page.screenshot({ path: 'screenshots/products/afterAddToCart.png' });
console.log(await waitForNotification(page));
});