import { chromium, test } from '@playwright/test';
test('demo2', async ({ page }) => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  await page.goto('https://task.appdeployers.com/');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByPlaceholder('Enter email...').click();
  await page.getByPlaceholder('Enter email...').fill('shikha@appsdeployer.com');
  await page.getByPlaceholder('Enter password...').click();
  await page.getByPlaceholder('Enter password...').fill('12345678');
  await page.getByRole('button', { name: 'Login' }).click();
  // ---------------------
  await context.close();
  await browser.close();
});