import { test, expect } from '@playwright/test';

test('Verify the login functionailty with an valid emailid and password', async ({ page }) => {
    await page.goto('https://task.appdeployers.com/');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByPlaceholder('Enter email...').click();
  await page.getByPlaceholder('Enter email...').fill('shikha@appsdeployer.com');
  await page.getByPlaceholder('Enter password...').click();
  await page.getByPlaceholder('Enter password...').fill('123457678');
  await page.getByRole('button', { name: 'Login' }).click();
});
test ('Verify the login functionality with an invalid emailid and valid password.',async ({page})=> {
    await page.goto('https://task.appdeployers.com/');
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.getByPlaceholder('Enter email...').click();
    await page.getByPlaceholder('Enter email...').fill('shikha@appsdeployer');
    await page.getByPlaceholder('Enter password...').click();
    await page.getByPlaceholder('Enter password...').fill('12345678');
    await page.getByRole('button', { name: 'Login' }).click();
});
test ('Verify the login functionality with an valid emailid and valid password.',async ({page})=> {
    await page.goto('https://task.appdeployers.com/');
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.getByPlaceholder('Enter email...').click();
    await page.getByPlaceholder('Enter email...').fill('shikha@appsdeployer.com');
    await page.getByPlaceholder('Enter password...').click();
    await page.getByPlaceholder('Enter password...').fill('Shikha@1234');
    await page.getByRole('button', { name: 'Login' }).click();
    });

test ('Verify the login functionality with a blank email id and password.',async ({page})=> {
        await page.goto('https://task.appdeployers.com/');
        await page.getByRole('button', { name: 'Log In' }).click();
        await page.getByRole('button', { name: 'Login' }).click();
    });   

    
test ('Verify the login functionality with a blank emailid and valid password ',async ({page})=> {
            await page.goto('https://task.appdeployers.com/');
            await page.getByRole('button', { name: 'Log In' }).click();
            await page.getByPlaceholder('Enter password...').click();
            await page.getByPlaceholder('Enter password...').fill('12345678');
            await page.getByRole('button', { name: 'Login' }).click();
    });       
test ('Verify the login functionality with a emailid and blank password ',async ({page})=> {
        await page.goto('https://task.appdeployers.com/');
        await page.getByRole('button', { name: 'Log In' }).click();
        await page.getByPlaceholder('Enter email...').click();
        await page.getByPlaceholder('Enter email...').fill('shikha@appsdeployer.com');
        await page.getByRole('button', { name: 'Login' }).click();
});         
test ('Verify the login functionality with an invalid email id and invalid password. ',async ({page})=> {
    await page.goto('https://task.appdeployers.com/');
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.getByPlaceholder('Enter email...').click();
    await page.getByPlaceholder('Enter email...').fill('shikha@appsdeployer.com');
    await page.getByPlaceholder('Enter password...').click();
    await page.getByPlaceholder('Enter password...').fill('Shikha@1234');
    await page.getByRole('button', { name: 'Login' }).click();
});
