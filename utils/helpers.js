export function generateRandomEmail() {
return `user_${Date.now()}@example.com`;
}


export async function waitForNotification(page) {
await page.waitForSelector('#bar-notification', { state: 'attached' });
for (let i = 0; i < 10; i++) {
if (await page.locator('#bar-notification').isVisible()) break;
await page.waitForTimeout(500);
}
return await page.locator('#bar-notification .content').textContent();
}