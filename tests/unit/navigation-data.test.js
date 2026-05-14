const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const NAV_PATH = path.join(__dirname, '../../_data/navigation.yml');

describe('_data/navigation.yml integrity', () => {
  let navigation;

  beforeAll(() => {
    const content = fs.readFileSync(NAV_PATH, 'utf8');
    navigation = yaml.load(content);
  });

  test('parses as an array', () => {
    expect(Array.isArray(navigation)).toBe(true);
  });

  test('has exactly 7 navigation items', () => {
    expect(navigation).toHaveLength(7);
  });

  test('each item has a non-empty title', () => {
    navigation.forEach(item => {
      expect(typeof item.title).toBe('string');
      expect(item.title.length).toBeGreaterThan(0);
    });
  });

  test('each item has a non-empty url', () => {
    navigation.forEach(item => {
      expect(typeof item.url).toBe('string');
      expect(item.url.length).toBeGreaterThan(0);
    });
  });

  test('all urls start with /', () => {
    navigation.forEach(item => {
      expect(item.url.startsWith('/')).toBe(true);
    });
  });

  test('required destinations are present', () => {
    const urls = navigation.map(item => item.url);
    ['/blog/', '/about/', '/cv/', '/contact/', '/search/'].forEach(url => {
      expect(urls).toContain(url);
    });
  });

  test('no item has extra unexpected keys', () => {
    navigation.forEach(item => {
      const keys = Object.keys(item);
      keys.forEach(key => {
        expect(['title', 'url']).toContain(key);
      });
    });
  });
});
