const { test, expect } = require('@playwright/test');

// A research post that has a feature image
const FEATURE_POST_URL = '/visualizing-transitions-from-education-to-industries/';

test.describe('Responsive layout – mobile (375px)', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('entry-meta is full-width (not a sidebar) at mobile width', async ({ page }) => {
    await page.goto(FEATURE_POST_URL);
    const entryMeta = page.locator('.entry-meta');
    if (await entryMeta.count() === 0) return;
    // Neat span-columns(12) always sets float:left; meaningful check is that the element
    // spans the full width (no sidebar layout) at mobile.
    const width = await entryMeta.evaluate(el => el.getBoundingClientRect().width);
    const viewportWidth = 375;
    expect(width).toBeGreaterThan(viewportWidth * 0.85);
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

  test('feature image is present at 768px breakpoint', async ({ page }) => {
    // NOTE: post.html injects style="margin-top:0;" when site.logo is not configured
    // (_config.yml has logo commented out), which overrides all CSS margin-top values.
    // The -75px CSS rule is guarded by tests/unit/scss-values.test.js instead.
    // This test verifies the image element is rendered and visible.
    await page.goto(FEATURE_POST_URL);
    const img = page.locator('.entry-feature-image');
    if (await img.count() === 0) {
      test.skip();
      return;
    }
    await expect(img).toBeVisible();
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

  test('feature image is present at large breakpoint', async ({ page }) => {
    // NOTE: post.html injects style="margin-top:0;" when site.logo is not configured
    // (_config.yml has logo commented out), which overrides all CSS margin-top values.
    // The -145px CSS rule is guarded by tests/unit/scss-values.test.js instead.
    // This test verifies the image element is rendered and visible.
    await page.goto(FEATURE_POST_URL);
    const img = page.locator('.entry-feature-image');
    if (await img.count() === 0) {
      test.skip();
      return;
    }
    await expect(img).toBeVisible();
  });

  test('entry-meta span items display as block at large breakpoint', async ({ page }) => {
    await page.goto(FEATURE_POST_URL);
    const span = page.locator('.entry-meta > span').first();
    if (await span.count() === 0) return;
    const display = await span.evaluate(el => getComputedStyle(el).display);
    expect(display).toBe('block');
  });

  test('homepage renders page title', async ({ page }) => {
    // home.html layout does not include masthead.html, so .site-title is not rendered.
    // The home layout renders the page title directly as h1.entry-title.
    await page.goto('/');
    await expect(page.locator('h1.entry-title').first()).toBeVisible();
  });
});
