import { test } from '../fixtures/testFixtures';

import users from '../test-data/users.json';
import checkoutData from '../test-data/checkoutData.json';
import products from '../test-data/products.json';

test('Complete Checkout Flow', async ({

    page,
    loginPage,
    productPage,
    cartPage,
    checkoutPage,
    orderConfirmationPage

}) => {

    await page.goto('https://www.saucedemo.com');

    await loginPage.login(
        users.standardUser.username,
        users.standardUser.password
    );

    await productPage.addProductToCart(
        products.productName
    );

    await productPage.verifyCartCount('1');

    await productPage.openCart();

    await cartPage.verifyProduct(
        products.productName
    );

    await cartPage.checkout();

    await checkoutPage.enterDetails(
        checkoutData.firstName,
        checkoutData.lastName,
        checkoutData.postalCode
    );

    await checkoutPage.finishOrder();

    await orderConfirmationPage.verifyOrderSuccess();
});