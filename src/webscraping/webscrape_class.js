const mysql = require("mysql")
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
}

function find_element(object) {


    object.axios(object.url)
        .then(response => {
            const html_script = response.data
            //loading of HTML script into variable
            const values = []
            const honey = object.cheerio.load(html_script)
            honey(object.class_name, html_script).each(function(){
                //function created to search through entire script
                const text = honey(this).text()
                const att = honey(this).find(object.element).attr(object.attribute)

                values.push({
                    text
                })
            })

            var con = mysql.createConnection({
                //creation of connection to MySQL database
                    host: "allergen-db1.cutjc5tgzcff.us-east-2.rds.amazonaws.com",
                    user: "admin",
                    password: "Bismarck66!",
                    database: "Foods"
                })

                con.connect(function(err){
                    if (err){
                        throw err;
                    }
                    console.log("connected")

                    var databaseValues = [[]]
                    //creation of variable that will store database values
                    for(let i = 0; i < values.length; i++){
                        databaseValues[[i]] =
                            [i, values[i].text, "yes", "yes", "no", "Pfeiffer"]

                    }

                    con.query("INSERT INTO Food (Food_ID, Food_Name, Peanut_Free, Dairy_Free, Gluten_Free, Location) VALUES ?",
                     [databaseValues], function(err, result){

                    //querying of webscraped data
                        if(err) {
                            throw err;
                        }
                        console.log("records inserted " + result.affectedRows);
                    })

                })


        }).catch(err => console.log(err))
}


objectOne = new Object('https://menus.sodexomyway.com/BiteMenu/Menu?menuId=14740&locationId=10395001&whereami=https://simpsondining-preview.sodexomyway.com/dining-near-me/pfieffer-dining-hall',
    'a', 'href', '.get-nutritioncalculator')

    //foods
find_element(objectOne)