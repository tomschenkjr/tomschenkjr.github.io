const { test, expect } = require('@playwright/test');

// A research post that has a feature image
const FEATURE_POST_URL = '/visualizing-transitions-from-education-to-industries/';

test.describe('Responsive layout – mobile (375px)', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('entry-meta is not floated at mobile width', async ({ page }) => {
    await page.goto(FEATURE_POST_URL);
    const entryMeta = page.locator('.entry-meta');
    if (await entryMeta.count() === 0) return;
    const float = await entryMeta.evaluate(el => getComputedStyle(el).float);
    expect(float).toBe('none');
  });

  test('feature image margin-top is not negative on mobile', async ({ page }) => {
    await page.goto(FEATURE_POST_URL);
    const img = page.locator('.entry-feature-image');
    if (await img.count() === 0) return;
    const marginTop = await img.evaluate(el => parseInt(getComputedStyle(el).marginTop, 10));
    expect(marginTop).toBeGreaterThanOrEqual(0);
  });

  test('homepage loads without JS errors on mobile', async ({ page }) => {
    const errors = [];
    page.on('pageerror', err => errors.push(err.message));
    await page.goto('/');
    expect(errors).toHaveLength(0);
  });
});

test.describe('Responsive layout – tablet/medium (768px)', () => {
  test.use({ viewport: { width: 768, height: 1024 } });

  test('feature image margin-top is -75px at 768px breakpoint', async ({ page }) => {
    await page.goto(FEATURE_POST_URL);
    const img = page.locator('.entry-feature-image');
    if (await img.count() === 0) {
      test.skip();
      return;
    }
    const marginTop = await img.evaluate(el => parseInt(getComputedStyle(el).marginTop, 10));
    expect(marginTop).toBe(-75);
  });
});

test.describe('Responsive layout – large (1200px)', () => {
  test.use({ viewport: { width: 1200, height: 800 } });

  test('entry-meta is floated left as sidebar at large breakpoint', async ({ page }) => {
    await page.goto(FEATURE_POST_URL);
    const entryMeta = page.locator('.entry-meta');
    if (await entryMeta.count() === 0) return;
    const float = await entryMeta.evaluate(el => getComputedStyle(el).float);
    expect(float).toBe('left');
  });

  test('feature image margin-top is -145px at large breakpoint', async ({ page }) => {
    await page.goto(FEATURE_POST_URL);
    const img = page.locator('.entry-feature-image');
    if (await img.count() === 0) {
      test.skip();
      return;
    }
    const marginTop = await img.evaluate(el => parseInt(getComputedStyle(el).marginTop, 10));
    expect(marginTop).toBe(-145);
  });

  test('entry-meta span items display as block at large breakpoint', async ({ page }) => {
    await page.goto(FEATURE_POST_URL);
    const span = page.locator('.entry-meta > span').first();
    if (await span.count() === 0) return;
    const display = await span.evaluate(el => getComputedStyle(el).display);
    expect(display).toBe('block');
  });

  test('homepage renders site title', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.site-title')).toBeVisible();
  });
});
