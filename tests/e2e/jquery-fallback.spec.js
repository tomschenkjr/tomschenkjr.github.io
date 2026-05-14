const { test, expect } = require('@playwright/test');

test('jQuery loads from local fallback when Google CDN is blocked', async ({ page }) => {
  // Block the Google CDN jQuery URL
  await page.route('https://ajax.googleapis.com/**', route => route.abort());

  const errors = [];
  page.on('pageerror', err => errors.push(err.message));

  await page.goto('/');

  // The local fallback at /assets/js/vendor/jquery-1.9.1.min.js should fire
  const jQueryVersion = await page.evaluate(() => {
    return typeof window.jQuery !== 'undefined' ? window.jQuery.fn.jquery : null;
  });

  expect(jQueryVersion).not.toBeNull();
  expect(jQueryVersion).toMatch(/^1\.9/);
});

test('scripts.min.js loads and jQuery plugins are initialized', async ({ page }) => {
  const errors = [];
  page.on('pageerror', err => errors.push(err.message));

  await page.goto('/');

  // After scripts.min.js loads, responsiveNav should have initialized
  const navExists = await page.evaluate(() => {
    return document.querySelector('#site-nav') !== null;
  });

  expect(navExists).toBe(true);
  expect(errors).toHaveLength(0);
});
