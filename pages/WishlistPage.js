export class WishlistPage {
constructor(page) {
this.page = page;
this.addToWishlistBtn = page.locator('#add-to-wishlist-button-5');
}
async addToWishlist() {
await this.addToWishlistBtn.waitFor({ state: 'visible' });
await this.addToWishlistBtn.click();
await this.page.screenshot({ path: 'screenshots/wishlist/added.png' });
}
}