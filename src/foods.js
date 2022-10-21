/*
Only sample foods are given
webscraping class will be built on later after establishing
script to take in entire HTML page
*/

const sqlite3 = require('sqlite3').verbose();
const axios = require('axios')

const db = new sqlite3.Database('./database/foods.db', sqlite3.OPEN_READWRITE, (err) => {
    //opening of connection to foods.db
    if (err){
        return console.error(err.message);
    }
    console.log('connection successful')
})

axios
    .get('https://random-data-api.com/api/users/random_user')
    .then((response) => {
        const {data} = response
        const {food_id} = data
        const {food_name} = data
        const {peanut_free} = data
        const {gluten_free} = data
        const {dairy_free} = data
        const {location} = data

        /*db.run("CREATE TABLE foods(food_id, food_name, peanut_free, gluten_free, dairy_free, location)"
        //creating table foods within database
        //comment out after create table(for now)
        , (err) => {
            if(err){
                return console.error(err.message)
            }
            console.log("table created!");
        });*/
        /*const sql = "INSERT INTO foods(food_id, food_name, peanut_free, gluten_free, dairy_free, location) VALUES(?, ?, ?, ?, ?, ?)";
        //statement to insert data into foods

        //for any values that are already added to table comment out for now

        db.run(sql, [food_id, food_name, peanut_free, gluten_free, dairy_free, location], (err) =>{
            //adding chocolate chip cookie to db
            if(err){
                return console.error(err.message);
            }

            console.log('new row added')
        })

        db.run(sql, [2, 'Pepperoni Pizza', 'yes', 'yes', 'no', 'Pfeiffer'], (err) =>{
            if(err){
                return console.error(err.message)
            }
            console.log('row has been added')
        })

        db.run(sql, [3, 'Chocolate Ice Cream', 'no', 'no', 'no', 'Pfieffer'], (err) =>{
            if(err){
                return console.error(err.message)
            }
            console.log('row has been added')
        })

        db.close((err) =>{
            //closing foods.db
            if(err){
                return console.err(err.message)
            }
            console.log('db closed successfully');
        });*/
    })
    .catch((error) => {
        if (err) return console.error(error);
    })

const select = 'SELECT * FROM foods'

db.all(select, [], (err, rows) => {
    if(err) return console.error(err.message);

    rows.forEach((row) => {
        console.log(row);
    });
});