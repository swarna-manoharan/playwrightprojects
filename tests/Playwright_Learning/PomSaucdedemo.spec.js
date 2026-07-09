 require('dotenv').config();
const { test, expect } = require('@playwright/test');
const { PracticeLoginPage } = require('../../pages/PracticeLoginPage');
const { SecureAreaPage } = require('../../pages/SecureAreaPage');

test('verify login functionality', async ({ page }) => {
    const practiceLoginPage = new PracticeLoginPage(page);
    await practiceLoginPage.LoginToPracticePage(process.env.PRACTICE_USERNAME, process.env.PRACTICE_PASSWORD);
    const secureAreaPage = new SecureAreaPage(page);
    await secureAreaPage.VerifySecureAreaText();
    await secureAreaPage.logout();
});