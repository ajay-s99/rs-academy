//Test spec for registration flows using the RegistrationPage POM and test data.
const { test, expect } = require("@playwright/test");
const { RegistrationPage } = require("../pages/RegistrationPage");
const data = require("../data/registrationTestData");
const tags = require("../tests/helper/tag_helper");
const { generateUniqueEmail } = require('../utils/emailGenerator');

test(`Registration positive flow test ${tags.TAG_SMOKE}`, async ({ page }) => {
  const regPage = new RegistrationPage(page);
  const user={...data.validUser, email:generateUniqueEmail()};  //Collect valid users details and generate unique email on each test run.
  await regPage.register(user);
  await regPage.clickOnLoginCTA();
  await expect(page).toHaveURL(process.env.BASE_URL + process.env.LOGIN_ROUTE);
});
test(`Registration negative flow test ${tags.TAG_P1}`, async ({ page }) => {
  const regPage = new RegistrationPage(page);
  await regPage.register(data.invalidUser);
  await expect(page).toHaveURL(
    process.env.BASE_URL + process.env.REGISTER_ROUTE
  ); // URL should remain the same on error
});
