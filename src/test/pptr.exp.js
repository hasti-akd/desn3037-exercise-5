const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:3000/');

  // Set screen size
  await page.setViewport({width: 720, height: 480});

  // Take Screenshot!
  await page.screenshot({
    path: "s1.jpg",
    type: "jpeg"
  })

  // Wait and click on first result
  const searchResultSelector = "a[href='/list']";
  await page.waitForSelector(searchResultSelector);
  await page.click(searchResultSelector);

  // Take Screenshot!
  await page.screenshot({
    path: "s2.jpg",
    type: "jpeg"
  })

  // Type into search box
  await page.type('input', 'Puppeteer was here!');
  
  // Take Screenshot!
  await page.screenshot({
    path: "s3.jpg",
    type: "jpeg"
  })

  await browser.close();
})();