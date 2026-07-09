require('dotenv').config();
const { test, expect } = require('../../fixtures/pages');

test('saucedemo test', async ({ loginPage, inventoryPage, cartPage }) => {
   
    await loginPage.login(process.env.SAUCEDEMO_USERNAME, process.env.SAUCEDEMO_PASSWORD);  // call its method
    const myproduct = await inventoryPage.addToCart();    // call ITS method (no 'page' arg — the class already has it)    
    await cartPage.verifyInCart(myproduct);
});