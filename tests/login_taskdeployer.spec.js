import { test, expect } from '@playwright/test';
test('Validate Login', async ({ page }) => {
    await page.goto('https://task.appdeployers.com/login');
    await page.getByPlaceholder("Enter email...").type("lakshyatarkaswar@outlook.com");
    await page.getByPlaceholder("Enter password...").type("12345678");
    await page.locator("//button[@type='submit button']").click()
    await expect(page).toHaveURL(/task.appdeployers.com/)
    // Check if the page is already closed
    if (page.isClosed()) {
      console.log("Page is already closed.");
      return;
    }
    // Wait for the page to load
    await page.waitForLoadState('networkidle').catch(() => {}); // Add catch to handle possible timeout error
    // Check if the URL contains the expected domain
    const url = page.url();
    expect(url).toContain("task.appdeployers.com");
    await context.close();
    await browser.close();
  });