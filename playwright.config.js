// @ts-check
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv'; 
dotenv.config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  expect: {
    timeout: 5000,
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Limit number of workers (parallel test runners) on CI, unlimited locally */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter configuration - multiple reporters */
  reporter: [
    ['list'], 
    ['allure-playwright'], 
    ['html'],
  ],

  /* Shared settings for all use cases */
  use: {
    baseURL: process.env.BASE_URL,

    /* Headed mode can be toggled via env variable or fallback to headless */
    headless: process.env.HEADLESS !== 'false', // set HEADLESS=false to run headed

    /* Video capture: on for all tests */
    video: 'on-first-retry', // records video only on first retry

    /* Screenshot on failure or always */
    screenshot: 'only-on-failure',

    /* Trace collection on first retry */
    trace: 'on-first-retry',

    /* Slow down actions for demo/debug if desired */
    // slowMo: 50, // uncomment for slowing down actions

    /* Default viewport, device scale, user agent, etc config can go here */
    ...devices['Desktop Chrome'],
  },

  /* Configure projects for various browsers and devices */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
   /* {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },*/

    /* Mobile devices examples (uncomment if needed) */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Browser channels examples */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },

  ],

  /* Optional local dev server startup (uncomment to use) */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },

});
