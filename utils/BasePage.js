class BasePage {
  //Thsi class rovides shared utility methods for all Page Object classes.
  constructor(page) {
    this.page = page;
  }
  // Navigates to an endpoint route defined by env variable name
  async gotoRoute(envRouteKey) {
    const route = process.env[envRouteKey];
    await this.page.goto(process.env.BASE_URL + route);
  }

  async waitForVisible(locator, timeout = 3000) {
    await locator.waitFor({ state: "visible", timeout });
  }

  async click(locator) {
    await locator.click();
  }

  async fill(locator, value) {
    await locator.fill(value);
  }
  // Re-generate random email and
  /*async generateRandomEmail(baseEmail: string): string {
        const part = baseEmail.split("@");
        const name = part[0];
        const domain = part[1];
        //const [name, domain] = baseEmail.split('@');
        return `${name}+${Date.now()}@${domain}`;
}*/
}

module.exports = { BasePage };
