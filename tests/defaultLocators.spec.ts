import { test, expect, Locator } from '@playwright/test';

test('Locators', async ({ page }) => {
    //await page.goto('https://www.naukri.com/');
    //await page.waitForLoadState('domcontentloaded');
    //await page.getByText('Login',{exact: true }).click() ; 
    //await page.getByRole('link', { name: 'Login' });--different roles in docs -role names
  await page.goto('file:///C:/Users/Dell/OneDrive/Desktop/Zuber/PlayWright/Playwright/Pavan%20Kumar/app.html');
   await page.waitForLoadState('domcontentloaded');
   //expect(await page.getByText('Playwright Locators Demonstration')).toBeTruthy();
   //page.getByLabel('Email Address:');
   //page.getByPlaceholder('text');
   //page.getByAltText('playwright logo')
//await expect(page.getByTitle('Issues count')).toHaveText('25 issues')
//await page.getByTestId('directions').click(); 



   
});

