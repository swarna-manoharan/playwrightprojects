class SearchPage {
    constructor(page) {
        this.page = page;
        this.searchInput = page.getByPlaceholder('Search for a product...');
        this.clickSubmit = page.getByRole('button', { name: 'Submit' });
        this.searchResults = page.locator('.search-results');
    }

    async search(term) {
        await this.searchInput.fill(term);          // USE the parameter
        await this.clickSubmit.click();
        await expect(this.searchResults).toBeVisible();
    }

    async getResultCount() {
        return await this.page.locator('[data-test="result-item"]').count();  // await + return
    }
}