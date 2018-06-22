var mysql =require("mysql");

var conn =mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"spf551920",
    database:"text"
});
conn.connect((err)=>{
    if (err) throw err;
    console.log("数据库创建连接成功");
});

conn.end((err) => {
    if (err) throw err;
    console.log("数据库关闭成功");
})

let insertPost = function (value) {
    let _sql = "insert into posts set name=?,title=?,content=?,md=?,uid=?,moment=?,avator=?;"
    return query(_sql, value)
}