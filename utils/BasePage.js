class BasePage {
    constructor(page) {
        this.page = page;
    }

    async goto(url = '') {
        await this.page.goto(process.env.BASE_URL + url);
    }

    async waitForVisible(locator, timeout = 3000) {
        await locator.waitFor({ state: 'visible', timeout });
    }

    async click(locator) {
        await locator.click();
    }

    async fill(locator, value) {
        await locator.fill(value);
    }
   /*async generateRandomEmail(baseEmail: string): string {
        const part = baseEmail.split("@");
        const name = part[0];
        const domain = part[1];
        //const [name, domain] = baseEmail.split('@');
        return `${name}+${Date.now()}@${domain}`;
}*/
}

module.exports = { BasePage };
