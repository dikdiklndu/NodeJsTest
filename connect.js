var mysql = require('mysql');

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'nodejstest'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('MySQL Terkonek');
});

module.exports = conn;