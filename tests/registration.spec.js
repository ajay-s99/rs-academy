const { test, expect } = require('@playwright/test');
const { RegistrationPage } = require('../pages/RegistrationPage');
const data = require('../data/registrationTestData');
const tags= require('../tests/helper/tag_helper');

//test(`Valid user registration ${tags.TAG}`, async ({ page }) => {
test(`Registration works ${tags.TAG_SMOKE}`, async ({ page }) => {
    const regPage = new RegistrationPage(page);
    await regPage.register(data.validUser);
    //await expect(page.getByText('Account Created Successfully')).toBeVisible();
    await regPage.clickOnLoginCTA();
    await expect(page).toHaveURL(data.redirectedUrl.login);
});
test(`Invalid Registration works ${tags.TAG_P1}`, async ({ page }) => {
    const regPage = new RegistrationPage(page);
    await regPage.register(data.invalidUser);
    await expect(page).toHaveURL(data.redirectedUrl.register);
})
