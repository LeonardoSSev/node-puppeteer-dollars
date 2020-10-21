const puppeteer = require('puppeteer');

async function getCurrency() {
  const browser = await puppeteer.launch({
    headless: true
  });

  const page = await browser.newPage();
  
  const link = 'https://www.google.com/search?sxsrf=ALeKk00fNwgTzICxell1tJf1zZcju_KyGw%3A1602987720299&ei=yKaLX-XUEeXG5OUP6aynmAY&q=reais+em+dolares&oq=reais+em+dolares&gs_lcp=CgZwc3ktYWIQAzIFCAAQywEyBQgAEMsBMgUIABDLATIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeULWeCVjKnwlg8qAJaABwAXgAgAHmAYgBywKSAQUwLjEuMZgBAKABAaoBB2d3cy13aXrAAQE&sclient=psy-ab&ved=0ahUKEwjl2JbNir3sAhVlI7kGHWnWCWMQ4dUDCA0&uact=5';

  await page.goto(link, {
    waitFor: 'domcontentloaded'
  });

  await page.type('input.ZEB7Fb.vk_gy.vk_sh.Hg3mWc', '5');

  const result = await page.evaluate(() => {
    return document.querySelector('input.a61j6.vk_gy.vk_sh.Hg3mWc').value
  });

  browser.close();

  console.log(result);
}

getCurrency();