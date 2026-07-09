const {expect} = require('@playwright/test');
const Basepageurl = 'https://practice.expandtesting.com/login';

class PracticeLoginPage {
    constructor(page) {
        this.page = page;
        this.UsernameInput = page.locator('#username');
        this.Userpassword = page.locator('#password');
        this.LoginButton = page.locator('#submit-login');

    }

    async LoginToPracticePage(username, password) {
        await this.page.goto(Basepageurl);
        await this.UsernameInput.fill(username);
        await this.Userpassword.fill(password);
        await this.LoginButton.click();
        
    }
}

module.exports = { PracticeLoginPage} ;