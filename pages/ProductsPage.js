export class ProductsPage {
constructor(page) {
this.page = page;
this.searchBox = page.locator('#small-searchterms');
this.searchBtn = page.locator('button.search-box-button');
this.productLinks = page.locator('.product-title a');
}
async searchProduct(keyword) {
await this.searchBox.fill(keyword);
await this.searchBtn.click();
await this.page.screenshot({ path: 'screenshots/products/searchResults.png' });
}
async openFirstProduct() {
await this.productLinks.first().waitFor({ state: 'visible' });
const productName = await this.productLinks.first().textContent();
await this.productLinks.first().click();
await this.page.screenshot({ path: 'screenshots/products/productPage.png' });
return productName;
}
}