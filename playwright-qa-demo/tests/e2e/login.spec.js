const { test, expect } = require('@playwright/test');
const { logTest } = require('../../utils/logger');

test.describe('Login - Teste E2E', () => {
  test('deve acessar a página exemplo com sucesso', async ({ page }) => {
    logTest('Iniciando teste E2E de login exemplo');

    await page.goto('/');

    await expect(page).toHaveTitle(/Example/);
    await expect(page.getByRole('heading', { name: 'Example Domain' })).toBeVisible();

    logTest('Teste E2E finalizado com sucesso');
  });
});
