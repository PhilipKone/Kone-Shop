const puppeteer = require('puppeteer');

(async () => {
  console.log('Launching browser to test Retro Racer gameplay overlay...');
  try {
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1024, height: 768 });

    // Block real Firebase analytics/connection requests in Puppeteer
    await page.setRequestInterception(true);
    page.on('request', req => {
      const url = req.url();
      if (url.includes('google-analytics.com') || url.includes('firebaseio.com') || url.includes('googleapis.com')) {
        req.abort();
      } else {
        req.continue();
      }
    });

    page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
    page.on('pageerror', err => console.error('BROWSER ERROR:', err.toString()));

    console.log('Navigating to coding page...');
    await page.goto('http://localhost:55589/coding', { waitUntil: 'domcontentloaded' });
    await new Promise(resolve => setTimeout(resolve, 3000));

    console.log('Unlocking series in localStorage (kone_kids_series)...');
    await page.evaluate(() => {
      localStorage.setItem('kone_kids_series', JSON.stringify(['series_word_search', 'series_retro_racer']));
    });

    console.log('Navigating directly to Retro Racer series page...');
    await page.goto('http://localhost:55589/coding?series=series_retro_racer', { waitUntil: 'domcontentloaded' });
    await new Promise(resolve => setTimeout(resolve, 5500)); // wait for safety timeout & renders

    let path1 = 'C:/Users/DELL/.gemini/antigravity/brain/54133df3-afc9-4789-92e1-2e373e0b1950/retro_racer_levels.png';
    await page.screenshot({ path: path1 });
    console.log(`Saved screenshot 1: ${path1}`);

    // Click Level 1 to open the racer canvas using the CSS class
    console.log('Clicking Level 1 card to start the game...');
    await page.evaluate(() => {
      const card = document.querySelector('.level-card-unlocked');
      if (card) {
        card.click();
        console.log('Card clicked!');
      } else {
        console.log('Card NOT found!');
      }
    });
    
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    let path2 = 'C:/Users/DELL/.gemini/antigravity/brain/54133df3-afc9-4789-92e1-2e373e0b1950/retro_racer_gameplay.png';
    await page.screenshot({ path: path2 });
    console.log(`Saved screenshot 2: ${path2}`);

    await browser.close();
    console.log('Retro Racer verification completed successfully!');
  } catch (error) {
    console.error('Error during verification:', error);
  }
})();
