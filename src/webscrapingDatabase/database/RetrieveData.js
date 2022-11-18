// const mysql = require('mysql')
//
// // var express = require('express')
// // var router = express.Router();
//
// var dataBase = mysql.createConnection({
//     //creation of connection to MySQL database
//         host: "allergen-db1.cutjc5tgzcff.us-east-2.rds.amazonaws.com",
//         user: "admin",
//         password: "Bismarck66!",
//         database: "Foods"
// })
//
// var query = "SELECT * FROM Foods.Food"
//
// dataBase.query(query, (err, res) => {
//     if(error)
//     {
//         throw error;
//     }
//     else
//     {
//         response.render('Foods.Food', {title:'Node.js MySQL CRUD Application', action:'list', sampleData:res});
//     }
//     return console.log(res)
// })

// module.exports = router;

// var express = require('express')
// var connection = require('database.js')
// var router = express.Router()
//
// router.get('/', function (req, res, next) {
//     connection.query('SELECT * FROM Foods.Food', function (err,rows) {
//         if (err) {
//             req.flash('error', err)
//             res.render('list', { page_title:"Users - Node.js",data: '' })
//         } else {
//             res.render('list', { page_title:"Users - Node.js",data: rows })
//         }
//     })
// })
// module.exports = router