const { test, expect } = require('@playwright/test');

test('acessar Google', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle(/Google/);
});