module.exports = {
  testDir: './playwright/tests',
  timeout: 30000,
  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  }
};