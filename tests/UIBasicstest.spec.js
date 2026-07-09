  const {test,expect}= require('@playwright/test')

  test('Firstprogram', async({browser}) =>
  {
    const context = await browser.newContext();
    const page = await context.newPage();
    const firstname = page.locator('#firstName');
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator('.login-wrapper-footer-text').click();
    await expect(page.locator('label[for="firstName"]')).toHaveText('First Name');
    await firstname.fill('John');
    await page.locator('#lastName').fill('Doe');
    await page.locator('#userEmail').fill('john.doe@example.com');
    await page.locator('#userPassword').fill('Password123!');
    await page.locator('#confirmPassword').fill('Password123!');
    await page.locator("input[type='checkbox']").check();
    await page.locator('#login').click();
    await page.locator('.login-wrapper-footer-text').click();
    await expect(page.locator('label[for="email"]')).toHaveText('Email');
    await expect(page.locator('#userEmail')).toHaveAttribute('placeholder','email@example.com');
    await page.locator('#userEmail').fill('john.doe@example.com');
    await page.locator('#userPassword').fill('Password123!');
    await page.locator('#login').click();
    //await page.locator("div[@class='container']//div[1]//div[1]//div[1]//button[1]").click();



  }); 