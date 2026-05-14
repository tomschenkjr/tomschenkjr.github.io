const { test, expect } = require('@playwright/test');

// Visual regression baselines are committed in tests/visual/baselines/
// Run `playwright test --update-snapshots` to refresh baselines.
// This suite runs only on schedule or manual dispatch, not on every PR.

const PAGES = {
  home: '/',
  post: '/visualizing-transitions-from-education-to-industries/',
  chord: '/workforcetransitions/',
};

const VIEWPORTS = {
  mobile: { width: 375, height: 667 },
  tablet: { width: 768, height: 1024 },
  desktop: { width: 1200, height: 800 },
};

test.describe('Visual regression – homepage', () => {
  for (const [vpName, viewport] of Object.entries(VIEWPORTS)) {
    test(`homepage at ${vpName} (${viewport.width}px)`, async ({ page }) => {
      await page.setViewportSize(viewport);
      // Mask Google Fonts and Analytics requests to avoid flicker
      await page.route('**/fonts.googleapis.com/**', route => route.abort());
      await page.route('**/google-analytics.com/**', route => route.abort());
      await page.goto(PAGES.home);
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveScreenshot(`home-${vpName}.png`, {
        maxDiffPixelRatio: 0.05,
      });
    });
  }
});

test.describe('Visual regression – post with feature image', () => {
  for (const vpName of ['mobile', 'desktop']) {
    test(`post at ${vpName} (${VIEWPORTS[vpName].width}px)`, async ({ page }) => {
      await page.setViewportSize(VIEWPORTS[vpName]);
      await page.route('**/fonts.googleapis.com/**', route => route.abort());
      await page.goto(PAGES.post);
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveScreenshot(`post-${vpName}.png`, {
        maxDiffPixelRatio: 0.05,
      });
    });
  }
});

test.describe('Visual regression – chord diagram', () => {
  test('chord diagram at 1400px', async ({ page }) => {
    await page.setViewportSize({ width: 1400, height: 900 });
    await page.goto(PAGES.chord);
    await page.waitForTimeout(2000); // allow D3 rendering to complete
    await expect(page).toHaveScreenshot('chord-desktop.png', {
      // Strict threshold: any data change should be visible
      maxDiffPixelRatio: 0.001,
    });
  });
});
