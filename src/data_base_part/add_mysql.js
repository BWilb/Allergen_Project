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

    var sql = "INSERT INTO Food (Food_name, Peanut_Free, Dairy_Free, Gluten_Free, Location) VALUES ?"
    // variable storing insert command
    /*var values = [
    //sample values
        ["Chocolate Chip Cookie", "Yes", "No", "yes", "Pfeiffer"],
        ["Brownie", "Yes", "Yes", "No", "Pfieffer"]
    ]*/

    con.query(sql, [values], function(err, result){
    //querying of raw data(soon to be webscraped)
        if(err) {
            throw err;
        }
        console.log("records inserted " + result.affectedRows);
    })

})