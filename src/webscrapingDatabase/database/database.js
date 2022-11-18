const mysql = require('mysql')

var dataBase = mysql.createConnection({
    //creation of connection to MySQL database
    host: "allergen-db1.cutjc5tgzcff.us-east-2.rds.amazonaws.com",
    user: "admin", //
    password: "Bismarck66!", //
    database: "Foods"
})

dataBase.connect((error) =>{
    if(error)
    {
        console.log(error);
        return
    }
    console.log('Database Connected')
});
module.exports = dataBase