import { test, expect, Browser, Page, Locator } from '@playwright/test';
import { chromium, webkit, firefox } from 'playwright';

test('Login', async () => {
  const browser: Browser = await chromium.launch({ headless: false });
  const page: Page = await browser.newPage();
await page.goto("https://www.saucedemo.com");
await page.locator('id=user-name').fill("error_user");
await page.locator('id=password').fill("secret_sauce");
await page.locator('id=login-button').click();
await page.screenshot({path: 'homepage.png' });
  browser.close();
});