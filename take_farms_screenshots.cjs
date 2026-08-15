const puppeteer = require('puppeteer');

(async () => {
  console.log('Launching browser for Kone Farms...');
  try {
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 960 });
    
    const pages = [
      { name: 'farms_home', hash: '#home' },
      { name: 'farms_farms', hash: '#farms' },
      { name: 'farms_food', hash: '#food' },
      { name: 'farms_agritech', hash: '#agritech' }
    ];
    
    for (const p of pages) {
      const liveUrl = `https://farms.koneacademy.io/${p.hash}`;
      console.log(`Navigating to: ${liveUrl}`);
      try {
        await page.goto(liveUrl, { waitUntil: 'networkidle2', timeout: 60000 });
        console.log('Waiting 3 seconds for rendering...');
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        const screenshotPath = `C:/Users/DELL/.gemini/antigravity/brain/54133df3-afc9-4789-92e1-2e373e0b1950/${p.name}.png`;
        console.log(`Taking screenshot for ${p.name}...`);
        await page.screenshot({ path: screenshotPath });
        console.log(`Saved: ${screenshotPath}`);
      } catch (err) {
        console.error(`Error on page ${p.name}:`, err.message);
      }
    }
    
    await browser.close();
    console.log('Farms screenshots task completed successfully!');
  } catch (error) {
    console.error('Error taking screenshots:', error);
  }
})();
