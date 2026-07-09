const { expect } = require('@playwright/test');       // 1. imports FIRST

class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }
    async login(user, pass) {
        await this.page.goto('/');
        await this.usernameInput.fill(user);
        await this.passwordInput.fill(pass);
        await this.loginButton.click();
        await expect(this.page.getByText('Products')).toBeVisible();
    }
}
module.exports = { LoginPage };   