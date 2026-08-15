const puppeteer = require('puppeteer');
const express = require('express');
const path = require('path');

const app = express();
const PORT = 8089;
const distPath = path.join(__dirname, 'dist');

app.use(express.static(distPath));

const server = app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  try {
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 960 });
    
    console.log('Navigating to local server...');
    await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle0' });
    
    console.log('Waiting for load...');
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const screenshotPath = 'C:/Users/DELL/.gemini/antigravity/brain/54133df3-afc9-4789-92e1-2e373e0b1950/kone_shop_screenshot.png';
    console.log('Taking screenshot...');
    await page.screenshot({ path: screenshotPath });
    console.log('Screenshot saved to:', screenshotPath);
    
    await browser.close();
  } catch (error) {
    console.error('Error taking screenshot:', error);
  } finally {
    server.close(() => {
      console.log('Server stopped');
    });
  }
});
