import {test,expect,Locator} from '@playwright/test';

test('CSS Locators', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    await page.waitForLoadState('domcontentloaded'); 
    //tagname#id,tagname.classname,tagname[attribute=value],tagname[attribute*=value],tagname[attribute^=value],tagname[attribute$=value]
    await page.locator('a.ico-register').click();
   expect (page.getByAltText('Tricentis Demo Web Shop')).toBeVisible(); 
    await page.locator('input[Search]').click(); 
    page.close();
}) 