const { test, expect } = require('@playwright/test');

test.describe('Magnific Popup lightbox', () => {
  test.use({ viewport: { width: 1200, height: 800 } });

  test('pages load without JS errors', async ({ page }) => {
    const errors = [];
    page.on('pageerror', err => errors.push(err.message));
    await page.goto('/');
    expect(errors).toHaveLength(0);
  });

  test('image-popup links open the lightbox overlay when clicked', async ({ page }) => {
    await page.goto('/');

    // Find the first image-popup link on any page; skip if none exist here
    const imageLinks = page.locator('a.image-popup');
    const count = await imageLinks.count();
    if (count === 0) {
      // Try a post page that is likely to have image links
      await page.goto('/visualizing-transitions-from-education-to-industries/');
    }

    const updatedLinks = page.locator('a.image-popup');
    const updatedCount = await updatedLinks.count();
    if (updatedCount === 0) {
      test.skip();
      return;
    }

    await updatedLinks.first().click();

    // Magnific Popup adds mfp-ready to the body and creates .mfp-container
    await expect(page.locator('.mfp-container')).toBeVisible({ timeout: 5000 });
  });

  test('Magnific Popup mainClass is mfp-fade (from _main.js config)', async ({ page }) => {
    await page.goto('/');
    const imageLinks = page.locator('a.image-popup');
    const count = await imageLinks.count();
    if (count === 0) {
      test.skip();
      return;
    }
    await imageLinks.first().click();
    await expect(page.locator('body')).toHaveClass(/mfp-fade/);
  });
});
