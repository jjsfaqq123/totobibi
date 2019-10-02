const express =require("express");
const session =require("express-session");
const cors =require("cors");
const pool =require('./pool')
var server=express();
server.use(cors({
    origin:["http://127.0.0.1:8080","http://localhost:8080"],
    credentials:true
}));
server.use(session({
    secret:"128位安全字符串",
    resave:true,
    saveUninitialized:true,
}));
server.listen(5000);
console.log("服务器正在监听端口： 5000");
server.get("/login",(req,res)=>{
    var uname=req.query.uname;
    var upwd=req.query.upwd;
    var sql="SELECT id FROM login WHERE uname=? AND upwd=md5(?)";
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err)throw err;
        if(result.length==0){
            res.send({code:-1,msg:"用户名密码错误"});
        }else{
            res.send({code:1,msg:"登录成功"})
        }
    })
})
