const express=require('express');
const puppeteer=require('puppeteer');


async function scrapeProduct(url){

    const browser=await puppeteer.launch();
    const page=await browser.newPage();
    await page.goto(url);

    const [el1]=await page.$x('//*[@id="landingImage"]');
    const src=await el1.getProperty('src');
    const image=await src.jsonValue();

    const [el2]=await page.$x('//*[@id="productTitle"]');
    const txt=await el2.getProperty('textContent');
    const title=await txt.jsonValue();

    // const [el3]=await page.$x('');
    // const txt1=await el3.getProperty('textContent');
    // const rating=await txt1.jsonValue();

    const [el4]=await page.$x('//*[@id="corePrice_desktop"]/div/table/tbody/tr[1]/td[2]/span[1]/span[2]');
    const txt2=await el4.getProperty('textContent');
    const mrp=await txt2.jsonValue();

    const [el5]=await page.$x('//*[@id="corePrice_desktop"]/div/table/tbody/tr[2]/td[2]/span[1]/span[2]');
    const txt3=await el5.getProperty('textContent');
    const price=await txt3.jsonValue();

    const [el6]=await page.$x('//*[@id="corePrice_desktop"]/div/table/tbody/tr[3]/td[2]/span[1]/span/span[2]');
    const txt4=await el6.getProperty('textContent');
    const discount=await txt4.jsonValue();

    console.log({image,title,mrp,price,discount})
    
     
    //browser.close();

    return {image,title,mrp,price,discount}

}
 
module.exports={
    scrapeProduct
}

//scrapeProduct('https://www.amazon.in/Samsung-Galaxy-Storage-Months-Replacement/dp/B096VD213D/ref=sr_1_1_sspa?keywords=mobile&qid=1653133053&s=electronics&sr=1-1-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE2T1NDVUVKSlg0RjgmZW5jcnlwdGVkSWQ9QTA4OTgxMjgzREc1Q0xQMEhGNUpaJmVuY3J5cHRlZEFkSWQ9QTA0NDA0MzYzVVg3N1BDWlI3R0k1JndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ&th=1');

