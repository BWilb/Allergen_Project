const puppeteer = require("puppeteer")
const browser = await puppeteer.launch();
const page = await browser.newPage();
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
        await page.goto(this.url);
        await this.retrieve_html_object();
    }
    
    async retrieve_html_object(){
        const [el] =  await page.$x(this.xfactor);
        const text = await el.getProperty(this.property);
        const object = text.jsonValue();
        
        console.log({object});
        browser.close();
    }
}

objectOne = Object("https://www.amazon.com/Black-Swan-Improbable-Robustness-Fragility/dp/081297381X/ref=sr_1_1?crid=1EY74PIRY87SI&keywords=The+black+swan&qid=1665081664&qu=eyJxc2MiOiIyLjQ3IiwicXNhIjoiMS43NCIsInFzcCI6IjIuMjMifQ%3D%3D&sprefix=the+black+swan%2Caps%2C420&sr=8-1", 'textContent', '//*[@id="corePrice_feature_div"]/div/span/span[2]')
objectOne.retrieve_url();