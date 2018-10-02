const puppeteer = require('puppeteer');

const browserConfig = { args: ['--disable-web-security'] };

const pdfConfig = { format: 'A4', margin: { left: '1cm', top: '1cm', right: '1cm', bottom: '1cm' } }

const createReport = async (channelOne, channelTwo) => {
  const browser = await puppeteer.launch(browserConfig);
  const page = await browser.newPage();
  const url = `http://localhost:3000/${channelOne}/${channelTwo}`;
  await page.goto(url, { waitUntil: 'networkidle2' });
  const pageTitle = await page.title();
  const fileName = `${pageTitle}.pdf`
  await page.pdf({ path: fileName, ...pdfConfig });
  await browser.close();

};

createReport('UCdDpQ461uxNA3odAnpuigAg', 'UCpfSEgdN0vaR3Y5iBSgxE5Q');