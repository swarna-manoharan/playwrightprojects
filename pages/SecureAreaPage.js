const {expect} = require('@playwright/test');
const Basepageurl = 'https://practice.expandtesting.com/login';

class SecureAreaPage {
    constructor(page) {
        this.page = page;
        this.SecureAreaText = page.locator('#core h1');
        this.LogoutButton = page.getByRole('link',{name: 'Logout'});
        
    }
 async VerifySecureAreaText() {
    await expect(this.page.getByText('You logged into a secure area!')).toBeVisible();
    await expect(this.SecureAreaText).toBeVisible();
    await expect(this.LogoutButton).toBeVisible();
    

}

async logout() {
    await this.LogoutButton.click();
    await expect(this.page.getByText('You logged out of the secure area!')).toBeVisible();  // VERIFY logout worked
    
}
}
module.exports = { SecureAreaPage} ;