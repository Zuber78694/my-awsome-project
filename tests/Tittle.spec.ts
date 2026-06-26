import { test, expect, Browser, Page, Locator } from '@playwright/test';
import { chromium, webkit, firefox } from 'playwright';

test('Login', async () => {
  const browser: Browser = await chromium.launch({ headless: false });
  const page: Page = await browser.newPage();
await page.goto("https://www.saucedemo.com");
await expect(page).toHaveURL('https://www.saucedemo.com');
await page.screenshot({path: 'homepage.png' });
await page.locator('id=user-name').fill("error_user");
await page.locator('id=password').fill("secret_sauce");
await page.locator('id=login-button').click();
  //const title=await page.title();
  //console.log(title);
  //await expect(page).toHaveTitle('Swag Labs');
  //await expect(page.locator('id=add-to-cart-sauce-labs-backpack')).toBeVisible();
  //await expect(page.locator('id=add-to-cart-sauce-labs-backpack')).toBeEnabled();
//await expect(page.locator('id=add-to-cart-sauce-labs-backpack')).toContainText('Add to cart');
//await page.screenshot({path: 'afterlogin.png' });
//await expect(page.locator('id=react-burger-menu-btn')).toBeVisible();
//await expect(page.locator('id=react-burger-menu-btn')).toBeEnabled();
    //browser.close();
await page.locator('id=add-to-cart-sauce-labs-backpack').click();    
await page.locator('.shopping_cart_link').click();
await browser.close();

 
});