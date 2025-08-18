const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Step 1: Go to login page
  await page.goto('https://example.com/login');

  // Step 2: Fill in login form
  await page.type('#username', 'your_username');
  await page.type('#password', 'your_password');
  await page.click('#login-button');

  // Step 3: Wait for navigation after login
  await page.waitForNavigation();

  // Step 4: Go to report page
  await page.goto('https://example.com/reports');

  // Step 5: Click download button
  await page.click('#download-report');

  // Optional: Wait for download to complete
  await page.waitForTimeout(5000); // Adjust based on actual download time

  await browser.close();
})();
