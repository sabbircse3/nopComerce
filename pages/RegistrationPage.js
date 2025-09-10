import { generateRandomEmail } from '../utils/helpers';


export class RegistrationPage {
constructor(page) {
this.page = page;
this.registerLink = page.locator('a.ico-register');
}
async register() {
await this.registerLink.click();
await this.page.check('#gender-male');
await this.page.fill('#FirstName', 'Sabbir');
await this.page.fill('#LastName', 'Hasan');
const email = generateRandomEmail();
await this.page.fill('#Email', email);
await this.page.fill('#Company', 'MyCompany');
await this.page.check('#Newsletter');
await this.page.fill('#Password', 'Password123');
await this.page.fill('#ConfirmPassword', 'Password123');
await this.page.screenshot({ path: 'screenshots/registration/formFilled.png' });
await this.page.click('#register-button');
await this.page.screenshot({ path: 'screenshots/registration/result.png' });
return email;
}
}