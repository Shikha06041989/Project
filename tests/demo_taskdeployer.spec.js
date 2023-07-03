import { test, expect } from '@playwright/test';


test('broswer', async ({ page }) => {
  await page.goto('https://task.appdeployers.com/login');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByPlaceholder('Enter email...').click();
  await page.getByPlaceholder('Enter email...').fill('shikha@appsdeployer.com');
  await page.getByPlaceholder('Enter password...').click();
  await page.getByPlaceholder('Enter password...').fill('123456678');
  await page.getByRole('button', { name: 'Login' }).click();
});