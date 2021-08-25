// async function filterbyage(tab, age) {
     
//     await tab.waitForSelector(".agefilterblock"); 
//     await tab.evaluate(consolefn,".agefilterblock", age);
//     await tab.waitForSelector("");



//     // await tab.waitForTimeout();
//     // await tab.keyboard.down("Control");
//     // await tab.keyboard.press("a");
//     // await tab.keyboard.up("Control");
//     // await tab.type("input.tactile-searchbox-input", distof, { delay: 200 });
//     // await tab.keyboard.press("Enter");
//     // await tab.waitForNavigation({ visible: true, waitUntil: "networkidle0" });
//     // await tab.waitForSelector(".section-directions-trip-distance.section-directions-trip-secondary-text");
//     // let dist = await tab.evaluate(() => {
//     //     let a = document.querySelector(".section-directions-trip-distance.section-directions-trip-secondary-text")
//     //     return a.innerText;
//     // })
//     // await tab.goBack({waitUntil:"networkidle0"});
//     // await tab.waitForSelector("button[data-value='Directions']");
//     // return dist;
// }

// function consolefn(selector, age){
//     let node=document.querySelector(selector)
//     let nodelist=node.childNodes;
//     let arrNode=[...nodelist]
//     if(age>=45){
//         arrNode[2].lastElementChild.click();
//     }else if(age>=18&&age<=44){
//         arrNode[1].lastElementChild.click();
//     }else{
//         arrNode[0].lastElementChild.click();
//     }
// }