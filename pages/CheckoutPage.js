export class CheckoutPage {
constructor(page) {
this.page = page;
this.cartLink = page.locator('a.ico-cart');
this.cartItems = page.locator('table.cart tbody tr');
}
async openCart() {
await this.cartLink.click();
await this.page.screenshot({ path: 'screenshots/checkout/cartPage.png' });
}
async getCartItems() {
const count = await this.cartItems.count();
let items = [];
for (let i = 0; i < count; i++) {
const name = await this.cartItems.nth(i).locator('td.product a').innerText();
const qty = await this.cartItems.nth(i).locator('input.qty-input').inputValue();
items.push({ name, qty });
}
return items;
}
}