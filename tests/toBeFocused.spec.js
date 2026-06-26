import { test, expect } from '@playwright/test';

test('input should be focused after clicking', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Create a locator for the search button in the header
  const searchButton = page.locator('button:has-text("Search")').first();

  // Click the search button to open the search modal
  await searchButton.click();

  // Assert that the searchbox input is focused (not the button)
  const searchInput = page.locator('input[placeholder*="Search"]').first();
  await expect(searchInput).toBeFocused();

  // Optional: print whether it's focused
  const isFocused = await searchInput.evaluate(el => document.activeElement === el);
  console.log('Is search input focused?', isFocused);
});
