const puppeteer = require("puppeteer");
//module for webscraping
class Object{
    constructor(url, property, xfactor) {
        this.url = url
        // variable for url
        this.property = property
        // variable for specific property
        this.xfactor = xfactor
        // variable for xfactor of html object
    }

    async retrieve_url(){
        //retrieves url
        const browser = await puppeteer.launch();
        // creation of browser variable
        const page = await browser.newPage();
        // page variable
        await page.goto(this.url)
        // page retrieves specific url

        const [el] =  await page.$x(this.xfactor);
        // page retrieves xfactor
        const text = await el.getProperty(this.property);
        // page retrieves property
        const object = text.jsonValue();

        console.log({object});
        browser.close();
    }
    async retrieve_two(){
        const browser = await puppeteer.launch();
        // creation of browser variable
        const page = await browser.newPage();
        // page variable
        await page.goto(this.url)
        // page retrieves specific url

        const [el] =  await page.$x(this.xfactor);
        // page retrieves xfactor
        const text = await el.getProperty(this.property);
        // page retrieves property
        const object = text.jsonValue();
        console.log(object)
        browser.close();
    }
}

function retreive(){
    objectOne = new Object("https://simpsondining.sodexomyway.com/dining-near-me/pfieffer-dining-hall",
        'textContent',
        '/html/body/div[1]/div/div[2]/div[1]/div/div[3]/div[1]/h1');
    // first object
    objectOne.retrieve_url();

    objectTwo = new Object("https://simpsondining.sodexomyway.com/dining-near-me/pfieffer-dining-hall",
        'src',
        '/html/body/div[1]/div/div[2]/div[1]/div/img');
    // second object
    objectTwo.retrieve_url();

    objectThree = new Object("https://menus.sodexomyway.com/BiteMenu/Menu?menuId=14740&locationId=10395001&whereami=https://simpsondining-preview.sodexomyway.com/dining-near-me/pfieffer-dining-hall",
        'placeholder',
        /*
        comeback to this specific property
         */
         '//*[@id="dateMenu"]');
    // third object
    objectThree.retrieve_two();


}
retreive();
