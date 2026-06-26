import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the "Get started" link in the navigation (updated selector for robustness)
  await page.getByRole('link', { name: /Get started/i }).first().click();

  // Wait for navigation to complete
  await expect(page).toHaveURL(/.*docs\/intro/);

  // Expects page to have a heading with the name "Installation" or "Getting started"
  // Adjust the heading text as per the current site
  const heading = page.getByRole('heading', { name: /Installation|Getting started/i });
  await expect(heading).toBeVisible();
});