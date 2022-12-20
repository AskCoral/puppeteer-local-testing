const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  const curr_dir = process.cwd()
  await page.goto('file://' + curr_dir + '/page_to_be_scraped.html')

  var data = {}

  // CODE TO BE PUT HERE

  console.log(data);

  await browser.close()
})()
