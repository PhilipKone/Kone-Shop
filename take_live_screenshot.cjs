const puppeteer = require('puppeteer');

(async () => {
  console.log('Launching browser...');
  try {
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 960 });
    
    const liveUrl = 'https://shop.koneacademy.io/';
    console.log(`Navigating to live site: ${liveUrl}`);
    await page.goto(liveUrl, { waitUntil: 'networkidle2', timeout: 60000 });
    
    console.log('Waiting 5 seconds for page load and assets...');
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    const screenshotPath = 'C:/Users/DELL/.gemini/antigravity/brain/54133df3-afc9-4789-92e1-2e373e0b1950/live_shop_screenshot.png';
    console.log('Taking screenshot...');
    await page.screenshot({ path: screenshotPath });
    console.log('Screenshot saved to:', screenshotPath);
    
    await browser.close();
  } catch (error) {
    console.error('Error taking screenshot:', error);
  }
})();
