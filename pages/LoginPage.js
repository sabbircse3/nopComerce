export class LoginPage {
constructor(page) {
this.page = page;
this.loginLink = page.locator('a.ico-login');
this.emailField = page.locator('#Email');
this.passwordField = page.locator('#Password');
this.rememberMeCheckbox = page.locator('#RememberMe');
this.loginButton = page.locator('button.login-button');
this.myAccountLink = page.locator('a.ico-account');
}
async gotoLogin() {
await this.loginLink.click();
await this.page.screenshot({ path: 'screenshots/login/loginPage.png' });
}
async login(email, password) {
await this.emailField.fill(email);
await this.page.screenshot({ path: 'screenshots/login/emailFilled.png' });
await this.passwordField.fill(password);
await this.page.screenshot({ path: 'screenshots/login/passwordFilled.png' });
await this.rememberMeCheckbox.check();
await this.loginButton.click();
await this.page.screenshot({ path: 'screenshots/login/afterLogin.png' });
}
async isLoggedIn() {
return this.myAccountLink.isVisible();
}
}