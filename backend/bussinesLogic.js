const { response } = require("express");
const puppeteer = require("puppeteer");
//import fire from './fire.js';

async function getTicket(idTicket) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(
    "http://boo1.neuvoo.com/boo3-web/qa/tickets_system/index.php?mode=get&id=" +
      idTicket
  );
  await page.type(
    'div#login-wrapper input[name="sas-user"]',
    "bryan@talent.com"
  );
  await page.type('div#login-wrapper input[name="sas-password"]', "Brayan123");
  await page.click('input[value="Login"]');
  await page.waitForSelector('input[id="username"]');
  await page.type('input[id="username"]', "bryan-velez");
  await page.type('input[id="password"]', "bv2018");
  await page.click('input[id="submit"]');
  await page.waitForSelector("div.info-module");
  var result = await page.evaluate(() => {
    
    /*var owner;
    for (var a of document.querySelectorAll("div.info-module")) {
      if (a.textContent.search(/owner/gi) > -1) {
        owner = a.textContent.split(":").pop().trim();
      }
    }
    return owner;
*/
   
    var datos = {};

    for (var d of document.querySelectorAll("a.request-empcode")) {
      if (d.textContent.search(/Empcode:/gi) > -1) {
        datos.empcode = d.textContent.split(":").pop().trim();
      }
    }

    for (var b of document.querySelectorAll("div.info-module")) {
     
      if (b.textContent.search(/Owner:/gi) > -1) {
        datos.owner = b.textContent.split(":").pop().trim();
      }
      if (b.textContent.search(/Type of request:/gi) > -1) {
        datos.request = b.textContent.split(":").pop().trim();
      }
    }

    var agentQA = ["Jrivas","Juan pablo"]
    for (var c of document.querySelectorAll("tr td:nth-child(1)")) {
      for (var x in agentQA){
        if(c.textContent.search(agentQA[x])>-1){
          datos.agentQa = c.textContent;
        }
        
      }
    }
    
    datos.ticketsystem = "on";
    return datos;
  });
  return result;
}
module.exports = { getTicket };
