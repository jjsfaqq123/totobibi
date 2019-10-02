const mysql =require("mysql");
var pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    port:3306,
    password:"",
    database:"yingshi",
    connectionLimit:15
})
module.exports=pool;