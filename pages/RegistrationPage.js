const { TIMEOUT } = require('dns');
const { BasePage } = require('../utils/BasePage');

class RegistrationPage extends BasePage {
    constructor(page) {
        super(page);
    }

    get locators() {
        return {
            firstName: () => this.page.getByRole('textbox', { name: 'First Name' }),
            lastName: () => this.page.getByRole('textbox', { name: 'Last Name' }),
            email: () => this.page.getByRole('textbox', { name: 'Email' }),
            phoneNumber: () => this.page.locator("#userMobile"),
            profession: () => this.page.getByRole('combobox'),
            gender: (gender) => this.page.getByRole('radio', { name: gender, exact: true }),
            password: () => this.page.locator("#userPassword"),
            confirmPassword: () => this.page.getByRole('textbox', { name: 'Confirm Password' }),
            above18: () => this.page.getByRole('checkbox'),
            registerBtn: () => this.page.locator("#login"),
            errorMsg: (msg) => this.page.getByText(msg)
        };
    }

    async register(user) {
        await this.goto('#/auth/register');
        await this.fill(this.locators.firstName(), user.firstName);
        await this.fill(this.locators.lastName(), user.lastName);
        await this.fill(this.locators.email(), user.email);
        await this.fill(this.locators.phoneNumber(), user.phone);
        await this.locators.profession().selectOption(user.profession);
        await this.locators.gender(user.gender).check();
        await this.fill(this.locators.password(), user.password);
        await this.fill(this.locators.confirmPassword(), user.confirmPassword);
        await this.locators.above18().check();
        await this.click(this.locators.registerBtn());
        await this.click(this.locators.registerBtn({force:true}));
        await this.page.waitForLoadState('networkidle');
        if (user.checkError) {
            for (const error of user.checkError) {
                await this.locators.errorMsg(error).isVisible();
            }
        }
    }
    async clickOnLoginCTA(){
        await this.page.getByRole('button', { name: 'Login' }).click();
    }
}

module.exports = { RegistrationPage };
