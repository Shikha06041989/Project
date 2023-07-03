import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://task.appdeployers.com/');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByPlaceholder('Enter email...').click();
  await page.getByPlaceholder('Enter email...').fill('shikha@appsdeployer.com');
  await page.getByPlaceholder('Enter password...').click();
  await page.getByPlaceholder('Enter password...').fill('123457678');
  await page.getByRole('button', { name: 'Login' }).click();
});