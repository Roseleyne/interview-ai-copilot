# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: New-Item playwright/tests/google.spec.js >> acessar Google
- Location: playwright/tests/New-Item playwright/tests/google.spec.js:3:1

# Error details

```
Error: browserType.launch: Executable doesn't exist at /ms-playwright/chromium-1223/chrome-linux64/chrome
╔════════════════════════════════════════════════════════╗
║ Looks like Playwright was just updated to 1.60.0.      ║
║ Please update docker image as well.                    ║
║ -  current: mcr.microsoft.com/playwright:v1.52.0-jammy ║
║ - required: mcr.microsoft.com/playwright:v1.60.0-jammy ║
║                                                        ║
║ <3 Playwright Team                                     ║
╚════════════════════════════════════════════════════════╝
```