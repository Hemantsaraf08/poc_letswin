const obj={
    name: "Hemant",
    age: 27,
    Email: "hemantsaraf08@gmail.com",
    pincode: 580030
}

const puppeteer = require('puppeteer');
const {tableObjMaker}=require("./driver");

(async function () {
    try {

        let browser = await puppeteer.launch({
            defaultViewport: null,
            headless: false,
            args: ["--start-maximized"]
        })
        let tab = await browser.newPage();
        await tab.goto("https://www.cowin.gov.in/");
        await tab.waitForNavigation({ visible: true });
        await tab.type("#mat-input-0", obj.pincode, { delay: 100 });
        await tab.keyboard.press("Enter");
        await tab.waitForNavigation({ visible: true, waitUntil: "networkidle0" });
        await tab.waitForSelector(".agefilterblock");
        
        await tab.waitForSelector("div.mobile-hide");
        
        //check if slot is available
        const numAvailable=await tab.$$eval("a.totalslts", atags=>atags.length);
        
        if(numAvailable){
            //slots are available==> send mails stop cron job
            
            await tab.waitForSelector("li.availability-date");
            //to send mail 
            // first scrap the data into obj;
            let selectors=["li.availability-date", "div.row-disp", "ul.slot-available-wrap", "a.totalslts"]
            let tableObj=await tableObjMaker(tab, ...selectors);

            // next use node mailer and build html string with obj data
            let htmlstr=await htmltablebuilder(tableObj);
            await mailsender(htmlstr)

            
        }
        await tab.waitForTimeout();
        await browser.close();
    } catch (err) {
        console.log(err);
    }
})();