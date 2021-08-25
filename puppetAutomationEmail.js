const obj={
    name: "Hemant",
    age: 27,
    Email: "hemantsaraf08@gmail.com",
    pincode: 580030
}

const puppeteer = require('puppeteer');

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

        //get distance from your location to railway station using getdist fn.
        let dist2=await getdist(tab, "City Railway Station");
        console.log(`
        Approx. Distance from your location to Railway Station is ${dist2}
        `);

        //get info of Nearby public amenities listed in detailsOF array, calling fn gettabledetails for each amenity
        await tab.waitForSelector("div[data-value='Nearby']");
        await tab.click("button[data-value='Nearby']");
        await tab.waitForNavigation({ visible: true, waitUntil: "networkidle0" });
        for (let i = 0; i <= detailsOF.length; i++) {
            if (i == 0) {
                let detailsarr = await gettabledetails(tab, detailsOF[i]);
            } else if (i == detailsOF.length) { }
            else {
                console.log(`Details of (top 5) ${detailsOF[i - 1]} are below:`);
                let detailsarr = await gettabledetails(tab, detailsOF[i]);
                console.table(detailsarr);
            }
        }
        await tab.waitForTimeout();
        await browser.close();
    } catch (err) {
        console.log(err);
    }
})();