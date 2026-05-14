const { test, expect } = require('@playwright/test');

test.describe('Navigation – mobile (375px)', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('hamburger toggle button is visible', async ({ page }) => {
    // responsiveNav creates a toggle button with id="nav-toggle"
    await expect(page.locator('#nav-toggle')).toBeVisible();
  });

  test('nav links are hidden before toggle', async ({ page }) => {
    const nav = page.locator('#site-nav');
    await expect(nav).not.toHaveClass(/opened/);
  });

  test('clicking toggle reveals nav links', async ({ page }) => {
    await page.click('#nav-toggle');
    await expect(page.locator('#site-nav')).toHaveClass(/opened/);
  });

  test('clicking outside nav collapses the menu', async ({ page }) => {
    await page.click('#nav-toggle');
    await expect(page.locator('#site-nav')).toHaveClass(/opened/);
    // Click an area outside the nav
    await page.mouse.click(10, 400);
    await expect(page.locator('#site-nav')).not.toHaveClass(/opened/);
  });

  test('nav contains all 7 navigation links', async ({ page }) => {
    await page.click('#nav-toggle');
    const links = page.locator('#site-nav ul li');
    await expect(links).toHaveCount(7);
  });
});

test.describe('Navigation – desktop (1200px)', () => {
  test.use({ viewport: { width: 1200, height: 800 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('hamburger toggle is not visible at desktop width', async ({ page }) => {
    await expect(page.locator('#nav-toggle')).not.toBeVisible();
  });

  test('nav links are directly visible without toggling', async ({ page }) => {
    await expect(page.locator('#site-nav ul')).toBeVisible();
  });

  test('nav contains all 7 navigation links', async ({ page }) => {
    const links = page.locator('#site-nav ul li');
    await expect(links).toHaveCount(7);
  });

  test('no JavaScript errors on page load', async ({ page }) => {
    const errors = [];
    page.on('pageerror', err => errors.push(err.message));
    await page.goto('/');
    expect(errors).toHaveLength(0);
  });
});
