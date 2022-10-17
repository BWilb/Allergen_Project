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
}

function retreive(){

    objectOne = new Object("https://simpsondining.sodexomyway.com/dining-near-me/pfieffer-dining-hall",
        'textContent',
        '/html/body/div[1]/div/div[2]/div[1]/div/div[3]/div[1]/h1');
    // first object(Name of place)
    objectOne.retrieve_url();

    objectTwo = new Object("https://simpsondining.sodexomyway.com/dining-near-me/pfieffer-dining-hall",
        'src',
        '/html/body/div[1]/div/div[2]/div[1]/div/img');
    // second object(pfeiffer image)
    objectTwo.retrieve_url();

    objectThree = new Object("https://menus.sodexomyway.com/BiteMenu/Menu?menuId=14740&locationId=10395001&whereami=https://simpsondining-preview.sodexomyway.com/dining-near-me/pfieffer-dining-hall",
        'placeholder',
        /*
        comeback to this specific property
         */
         '//*[@id="dateMenu"]');
    // third object(date)
    objectThree.retrieve_two();

    console.log('hi')

    objectFour =  new Object("https://menus.sodexomyway.com/BiteMenu/Menu?menuId=14740&locationId=10395001&whereami=https://simpsondining-preview.sodexomyway.com/dining-near-me/pfieffer-dining-hall",
        'id',
        '//*[@id="bite-menu-dates"]')
    // fourth object(daily bite)
    objectFour.retrieve_url()

    objectFive = new Object("https://menus.sodexomyway.com/BiteMenu/Menu?menuId=14740&locationId=10395001&whereami=https://simpsondining-preview.sodexomyway.com/dining-near-me/pfieffer-dining-hall",
        'id',
        '//*[@id="allergen-key"]')
    //fifth object(allergen key)
    objectFive.retrieve_url();

    objectSix = new Object("https://menus.sodexomyway.com/BiteMenu/Menu?menuId=14740&locationId=10395001&whereami=https://simpsondining-preview.sodexomyway.com/dining-near-me/pfieffer-dining-hall",
        'id',
        '//*[@id="nutrition-calc-content"]')
    //sixth object(nutrition calculator)
    objectSix.retrieve_url();

    objectSeven = new Object("https://menus.sodexomyway.com/BiteMenu/Menu?menuId=14740&locationId=10395001&whereami=https://simpsondining-preview.sodexomyway.com/dining-near-me/pfieffer-dining-hall",
        'id',
        '//*[@id="bite-menu"]')
    //Seventh object(regarding entire daily menu and calculator)
    objectSeven.retrieve_url();

}
retreive();