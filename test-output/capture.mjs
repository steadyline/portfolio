import { chromium } from 'playwright-core';

const browser = await chromium.launch({
  headless: true,
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
});
const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
desktop.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
await desktop.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle' });
await desktop.screenshot({ path: 'C:/Portfolio/test-output/desktop-actual.png' });
await desktop.evaluate(() => window.scrollTo(0, 650));
await desktop.waitForTimeout(350);
await desktop.screenshot({ path: 'C:/Portfolio/test-output/gallery-blur.png' });
await desktop.evaluate(() => window.scrollTo(0, 1550));
await desktop.waitForTimeout(350);
await desktop.screenshot({ path: 'C:/Portfolio/test-output/gallery-focus.png' });
await desktop.locator('#projects').scrollIntoViewIfNeeded();
await desktop.waitForTimeout(250);
await desktop.screenshot({ path: 'C:/Portfolio/test-output/projects-actual.png' });

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mobile.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle' });
await mobile.screenshot({ path: 'C:/Portfolio/test-output/mobile-actual.png' });
await mobile.locator('#contact').scrollIntoViewIfNeeded();
await mobile.waitForTimeout(200);
await mobile.screenshot({ path: 'C:/Portfolio/test-output/mobile-contact.png' });
await mobile.evaluate(() => window.scrollTo(0, 0));
await mobile.getByRole('button', { name: 'Toggle navigation' }).click();
const menuVisible = await mobile.getByRole('navigation', { name: 'Main navigation' }).isVisible();

const reduced = await browser.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
await reduced.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle' });
const reducedGalleryHeight = await reduced.locator('.gallery-scene').evaluate(element => getComputedStyle(element).height);

console.log({
  desktop: await desktop.evaluate(() => ({ innerWidth, scrollWidth: document.documentElement.scrollWidth })),
  mobile: await mobile.evaluate(() => ({ innerWidth, scrollWidth: document.documentElement.scrollWidth })),
  menuVisible,
  reducedGalleryHeight,
  consoleErrors: errors,
});
await browser.close();
