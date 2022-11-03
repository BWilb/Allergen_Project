const mysql = require("mysql")
const axios = require("axios")
const cheerio = require("cheerio")

class Object{
    constructor(element, attribute, class_name){
        this.element = element
        //variable for specific html element
        this.attribute = attribute
        //variable for elements attributes
        this.class_name = class_name
        //variable for elements class
    }
}

function finding_inputting(url, object, cals) {
    axios(url)
        .then(response => {
            const html_script = response.data
            const values = []
            const calVals = []
            const honey = cheerio.load(html_script)
            honey(object.class_name, html_script).each(function(){
                //function created to search through entire script
                const text = honey(this).text()
                const att = honey(this).find(object.element).attr(object.attribute)


                values.push({
                    text
                })
            })

            honey(cals.class_name, html_script).each(function(){
                const text = honey(this).text()
                calVals.push({
                    text
                })
            })

            //const valuesTwo = values
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
                    //2d variable
                    for(let i = 0; i < values.length; i++){
                        databaseValues[[i]] =
                            [i, values[i].text, calVals[i].text, "yes", "yes", "no", "Pfeiffer"]
                    }

                    con.query("DELETE FROM Food", function(err, result){
                        if(err){
                            throw err
                        }
                        console.log("rows affected " + result.affectedRows)
                    })

                    con.query("INSERT INTO Food (Food_ID, Food_Name, Calories, Peanut_Free, Dairy_Free, Gluten_Free, Location) VALUES ?",
                     [databaseValues], function(err, result){
                    //querying of webscraped data
                        if(err) {
                            throw err;
                        }
                        console.log("records inserted " + result.affectedRows);
                    })

                })
                for(let i = 0; i < values.length; i++){
                    console.log(values[i])
                }


        }).catch(err => console.log(err))
}


objectOne = new Object('a', 'href', '.get-nutritioncalculator')
//foods

cals = new Object('a', 'href', '.get-nutrition')
//calories of foods

finding_inputting('https://menus.sodexomyway.com/BiteMenu/Menu?menuId=14740&locationId=10395001&whereami=https://simpsondining-preview.sodexomyway.com/dining-near-me/pfieffer-dining-hall',
objectOne, cals)
