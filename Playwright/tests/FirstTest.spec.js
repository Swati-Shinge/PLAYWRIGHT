import { test, expect } from '@playwright/test';

test('homepage has title and links to intro page', async ({ page }) => {
  // 1. Navigate to the URL
  await page.goto('https://playwright.dev/');

  // 2. Expect a title "to contain" a substring
  await expect(page).toHaveTitle(/Playwright/);

  // 3. Click the "Get started" link
  await page.getByRole('link', { name: 'Get started' }).click();

  // 4. Expects page to have a heading with the name of Installation
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
