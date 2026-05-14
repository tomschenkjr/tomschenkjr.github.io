const { test, expect } = require('@playwright/test');

const CHORD_URL = '/workforcetransitions/';

test.describe('Chord diagram', () => {
  test.use({ viewport: { width: 1400, height: 900 } });

  test('page loads without JavaScript errors', async ({ page }) => {
    const errors = [];
    page.on('pageerror', err => errors.push(err.message));
    await page.goto(CHORD_URL);
    await page.waitForTimeout(2000); // allow D3 rendering to complete
    expect(errors).toHaveLength(0);
  });

  test('SVG element is rendered with correct dimensions', async ({ page }) => {
    await page.goto(CHORD_URL);
    await page.waitForSelector('svg', { timeout: 10000 });
    const svg = page.locator('svg').first();
    await expect(svg).toBeVisible();
    const width = await svg.getAttribute('width');
    const height = await svg.getAttribute('height');
    expect(width).toBe('1300');
    expect(height).toBe('910');
  });

  test('arc group contains exactly 37 path elements (one per cluster)', async ({ page }) => {
    await page.goto(CHORD_URL);
    await page.waitForSelector('svg', { timeout: 10000 });
    await page.waitForTimeout(1000);

    // D3 renders group arcs; count paths in the first g.selectAll that have fill style
    const arcCount = await page.evaluate(() => {
      const paths = Array.from(document.querySelectorAll('svg path'));
      // Arc paths have a fill style set directly; chord paths also have fill
      // Use presence of stroke attribute to distinguish arcs (arcs have stroke set)
      return paths.filter(p => p.style.stroke && p.style.stroke !== '').length;
    });
    expect(arcCount).toBe(37);
  });

  test('chord paths are rendered', async ({ page }) => {
    await page.goto(CHORD_URL);
    await page.waitForSelector('svg', { timeout: 10000 });
    await page.waitForTimeout(1000);

    const chordPaths = await page.evaluate(() => {
      return document.querySelectorAll('g.chord path').length;
    });
    expect(chordPaths).toBeGreaterThan(0);
  });

  test('37 cluster label text elements are rendered', async ({ page }) => {
    await page.goto(CHORD_URL);
    await page.waitForSelector('svg', { timeout: 10000 });
    await page.waitForTimeout(1000);

    const labelCount = await page.evaluate(() => {
      return document.querySelectorAll('svg text').length;
    });
    // There are cluster labels + tick labels; cluster labels = 37
    expect(labelCount).toBeGreaterThanOrEqual(37);
  });

  test('hovering over an arc fades non-connected chords to opacity 0.1', async ({ page }) => {
    await page.goto(CHORD_URL);
    await page.waitForSelector('svg', { timeout: 10000 });
    await page.waitForTimeout(1500);

    // Get the first arc path (group 0 = Agriculture industry)
    const firstArc = page.locator('svg > g > g path').first();
    await firstArc.hover();
    await page.waitForTimeout(500); // wait for D3 transition

    // Some chord paths should now have opacity 0.1
    const fadedCount = await page.evaluate(() => {
      const paths = Array.from(document.querySelectorAll('g.chord path'));
      return paths.filter(p => {
        const opacity = parseFloat(p.style.opacity);
        return opacity < 0.5;
      }).length;
    });
    expect(fadedCount).toBeGreaterThan(0);
  });

  test('mousing out restores all chord paths to opacity 1', async ({ page }) => {
    await page.goto(CHORD_URL);
    await page.waitForSelector('svg', { timeout: 10000 });
    await page.waitForTimeout(1500);

    // Hover then move away
    const firstArc = page.locator('svg > g > g path').first();
    await firstArc.hover();
    await page.waitForTimeout(500);
    await page.mouse.move(700, 450); // center of SVG, away from arcs
    await page.waitForTimeout(600); // wait for D3 mouseout transition

    const fadedCount = await page.evaluate(() => {
      const paths = Array.from(document.querySelectorAll('g.chord path'));
      return paths.filter(p => {
        const opacity = parseFloat(p.style.opacity);
        return opacity < 0.9;
      }).length;
    });
    expect(fadedCount).toBe(0);
  });
});
