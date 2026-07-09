const { expect } = require('@playwright/test');       // 1. imports FIRST

class CartPage {
    constructor(page) {
        this.page = page;
        this.cartItemLocator = page.locator('[data-test="inventory-item"]');
    }
    async verifyInCart(productName) {
        await this.page.goto('/cart.html');
        await expect(this.cartItemLocator.filter({ hasText: productName })).toBeVisible();
    }
}
module.exports = { CartPage };