const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: process.env.CI ? 1 : 0,
  use: {
    baseURL: 'http://localhost:4000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'desktop',
      testMatch: '**/tests/e2e/**/*.spec.js',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1200, height: 800 },
      },
    },
    {
      name: 'visual',
      testMatch: '**/tests/visual/**/*.spec.js',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1200, height: 800 },
      },
    },
  ],
  webServer: {
    command: 'bundle exec jekyll serve --no-watch',
    url: 'http://localhost:4000',
    timeout: 120000,
    reuseExistingServer: !process.env.CI,
  },
});
