import { defineConfig } from '@playwright/test';


export default defineConfig({
testDir: './tests',
timeout: 60000,
use: {
headless: true,
screenshot: 'on',
video: 'retain-on-failure',
trace: 'retain-on-failure'
},
reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
});