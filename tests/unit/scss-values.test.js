const fs = require('fs');
const path = require('path');

const PAGE_SCSS = path.join(__dirname, '../../_sass/_page.scss');

describe('_sass/_page.scss critical value guards', () => {
  let content;

  beforeAll(() => {
    content = fs.readFileSync(PAGE_SCSS, 'utf8');
  });

  test('feature image medium breakpoint margin-top is -75px', () => {
    expect(content).toMatch(/margin-top:\s*-75px/);
  });

  test('feature image large breakpoint margin-top is -145px', () => {
    expect(content).toMatch(/margin-top:\s*-145px/);
  });

  test('entry-meta uses span-columns(2.5) at large breakpoint for sidebar layout', () => {
    expect(content).toMatch(/@include span-columns\(2\.5\)/);
  });

  test('entry-content uses span-columns(9.5) at large breakpoint', () => {
    expect(content).toMatch(/@include span-columns\(9\.5\)/);
  });

  test('.entry-feature-image default margin-top is 20px (mobile)', () => {
    expect(content).toMatch(/margin:\s*20px auto 0/);
  });
});
