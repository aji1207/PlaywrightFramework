import { test, expect } from '../fixtures/testFixtures';
import { env } from '../utils/Environment';
import { ScreenshotUtil } from '../utils/ScreenshotUtil';


test('Purchase product and validate price', async ({
    page,
    loginPage,
    productsPage,
    cartPage,
    checkoutPage
}) => {

    const productName = 'Sauce Labs Backpack';

    await loginPage.navigate(env.baseUrl);

    await loginPage.login(
        env.username,
        env.password
    );
    await ScreenshotUtil.capture(
    page,
    'LoginSuccess'
);

    await productsPage.addProductToCart(productName);
await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    
    await productsPage.openCart();

    await ScreenshotUtil.capture(
    page,
    'CartPage'
);

    const cartProduct =
    await cartPage.getProductName();

expect(cartProduct).toBe(productName);
    const price = await cartPage.getProductPrice(productName);



    console.log('Product Price:', price);

    // expect(price).not.toBeNull();
    expect(price).toContain('$');
    
    

    await cartPage.checkout();

    await checkoutPage.enterDetails();

    const totalPrice =
        await checkoutPage.getTotalPrice();

    console.log('Total Price:', totalPrice);

    expect(totalPrice).toContain('$');

    await checkoutPage.finishOrder();

    await ScreenshotUtil.capture(
    page,
    'OrderSuccess'
);

    const successMessage =
        await checkoutPage.getSuccessMessage();

    expect(successMessage).toContain('Thank you');
});