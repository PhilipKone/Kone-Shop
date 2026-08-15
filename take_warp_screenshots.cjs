const puppeteer = require('puppeteer');

(async () => {
  console.log('Launching browser for Kone Warp...');
  try {
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 960 });
    
    const liveUrl = 'https://warp.koneacademy.io/';
    console.log(`Navigating to live site: ${liveUrl}`);
    await page.goto(liveUrl, { waitUntil: 'networkidle2', timeout: 60000 });
    
    console.log('Waiting 5 seconds for page load and assets...');
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    const tabs = [
      { name: 'warp_ride', label: 'Warp Ride' },
      { name: 'warp_market', label: 'Warp Market' },
      { name: 'warp_vision', label: 'OpenCV Vision' },
      { name: 'warp_telemetry', label: 'Telemetry Activity' }
    ];
    
    for (const tab of tabs) {
      console.log(`Clicking tab: ${tab.label}`);
      try {
        const selector = `button[aria-label="${tab.label}"]`;
        await page.waitForSelector(selector, { timeout: 10000 });
        await page.click(selector);
        
        console.log('Waiting 3 seconds for UI update...');
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        const screenshotPath = `C:/Users/DELL/.gemini/antigravity/brain/54133df3-afc9-4789-92e1-2e373e0b1950/${tab.name}.png`;
        console.log(`Taking screenshot for ${tab.name}...`);
        await page.screenshot({ path: screenshotPath });
        console.log(`Saved: ${screenshotPath}`);
      } catch (err) {
        console.error(`Error on tab ${tab.label}:`, err.message);
        // Take a fallback screenshot anyway
        const screenshotPath = `C:/Users/DELL/.gemini/antigravity/brain/54133df3-afc9-4789-92e1-2e373e0b1950/${tab.name}_error.png`;
        await page.screenshot({ path: screenshotPath });
      }
    }
    
    await browser.close();
    console.log('Warp screenshots task completed successfully!');
  } catch (error) {
    console.error('Error taking screenshots:', error);
  }
})();
