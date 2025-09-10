import { test } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';
import { WishlistPage } from '../pages/WishlistPage';
import { waitForNotification } from '../utils/helpers';


test.use({ storageState: 'storageState.json' });


test('Add to Wishlist', async ({ page }) => {
const productsPage = new ProductsPage(page);
const wishlistPage = new WishlistPage(page);
await page.goto('https://demo.nopcommerce.com/');
await productsPage.searchProduct('Laptop');
await productsPage.openFirstProduct();
await wishlistPage.addToWishlist();
console.log(await waitForNotification(page));
});