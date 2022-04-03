//下载安装mysql后加载模块
const mysql = require("mysql");

//创建MySQL连接池
const pool = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '',
    database: 'xm',
    connectionLimit: 15
});
module.exports = pool;