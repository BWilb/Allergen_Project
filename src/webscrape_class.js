class Object{
    constructor(url, element, attribute, class_name){
        this.url = url
        this.element = element
        //variable for specific html element
        this.attribute = attribute
        //variable for elements attributes
        this.class_name = class_name
        //variable for elements class
        this.axios = require("axios")
        this.cheerio = require("cheerio")
    }

    find_element(params) {
        this.axios(this.url)
            .then(response => {
                const html_script = response.data
                const values = []
                const honey = this.cheerio.load(html_script)
                honey(this.class_name, html_script).each(function(){
                    //function created to search through entire script 
                    const text = honey(this).text()
                    const att = honey(this).find(this.element).attr(this.attribute)

                    values.push({
                        text
                    })
                })

                var i = 0
                while (i < values.length){
                    if(i < values.length){
                        console.log(values[i].text)
                    }
                    else{
                        break;
                    }
                    i += 1
                }
            }).catch(err => console.log(err))

    }

}


objectOne = new Object('https://menus.sodexomyway.com/BiteMenu/Menu?menuId=14740&locationId=10395001&whereami=https://simpsondining-preview.sodexomyway.com/dining-near-me/pfieffer-dining-hall',
    'a', 'href', '.get-nutritioncalculator')

    //foods


food_names = objectOne.find_element();

objectTwo = new Object('https://menus.sodexomyway.com/BiteMenu/Menu?menuId=14740&locationId=10395001&whereami=https://simpsondining-preview.sodexomyway.com/dining-near-me/pfieffer-dining-hall',
'li', 'button', '.bite-date')
//dates

objectTwo.find_element()

objectThree = new Object('https://menus.sodexomyway.com/BiteMenu/Menu?menuId=14740&locationId=10395001&whereami=https://simpsondining-preview.sodexomyway.com/dining-near-me/pfieffer-dining-hall',
'span', '', '.accordion-copy')
//meal names

objectThree.find_element()

objectFour = new Object('https://menus.sodexomyway.com/BiteMenu/Menu?menuId=14740&locationId=10395001&whereami=https://simpsondining-preview.sodexomyway.com/dining-near-me/pfieffer-dining-hall',
'div', '', '.bite-menu-course')
//courses of meals

objectFour.find_element()