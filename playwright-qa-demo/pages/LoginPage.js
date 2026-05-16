const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.getByTestId('email');
    this.passwordInput = page.getByTestId('password');
    this.loginButton = page.getByTestId('login-button');
  }

  async acessarLogin() {
    await this.page.goto('/');
  }

  async preencherLogin(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
  }

  async clicarEntrar() {
    await this.loginButton.click();
  }

  async realizarLogin(email, password) {
    await this.preencherLogin(email, password);
    await this.clicarEntrar();
  }

  async validarTituloDaPagina() {
    await expect(this.page).toHaveTitle(/Example/);
  }
}

module.exports = { LoginPage };
