let mysql = require('mysql');
let connection = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    port: "3306",
    database: "e_commerce"
})
connection.connect((error) => {
    if (error) {
        console.log(error.sqlMessage)
    }
    else {
        console.log("connection")
    }

})
module.exports = connection;