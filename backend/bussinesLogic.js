const { response } = require("express");
const puppeteer = require("puppeteer");

async function getTicket(idTicket){
  const browser = await puppeteer.launch({headless:true});
  const page = await browser.newPage();
  await page.goto("http://boo1.neuvoo.com/boo3-web/qa/tickets_system/index.php?mode=get&id="+idTicket);
  await page.type('div#login-wrapper input[name="sas-user"]',"bryan@talent.com")
  await page.type('div#login-wrapper input[name="sas-password"]',"Brayan123")
  await page.click('input[value="Login"]')
  await page.waitForTimeout(6000);
  await page.type('input[id="username"]',"bryan-velez")
  await page.type('input[id="password"]',"bv2018")
  await page.click('input[id="submit"]');
  await page.waitForTimeout(2000);
  var result = await page.evaluate(()=>{
    var owner;
    for(var a of document.querySelectorAll("div.info-module")){
        if(a.textContent.search(/owner/gi)>-1){
            owner = a.textContent.split(":").pop().trim();
        }
    }
    return owner;
  })
return result;
}
module.exports = {getTicket}

