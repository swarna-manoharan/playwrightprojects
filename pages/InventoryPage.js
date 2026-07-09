const { expect } = require('@playwright/test');       // 1. imports FIRST


class InventoryPage {
    constructor(page) {
        this.page = page;
        this.myproductlocator = page.locator('[data-test="inventory-item"]').nth(0);
        this.myproductName = this.myproductlocator.locator('[data-test="inventory-item-name"]');
        this.addToCartButton = this.myproductlocator.getByRole('button', { name: 'Add to cart' });
    }
    async addToCart() {
    await this.page.goto('/inventory.html');
    const productName = await this.myproductName.textContent();  // read FIRST
    await this.addToCartButton.click();                          // then act
    return productName;
}
}
    module.exports = { InventoryPage };