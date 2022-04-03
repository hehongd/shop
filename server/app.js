//加载Express模块
const express = require("express");

//加载cors模块
const cors = require("cors");


// 引入解析字符串中间件
const bodyParser = require('body-parser');

const r = require('./router.js');

//创建Express应用
const server = express();

//使用CROS模块

server.use(cors({
    origin: ['http://localhost:8080', 'http://127.0.0.1:5000']
}));

//将 bodyParse作为server的中间件
server.use(bodyParser.urlencoded({
    extended: false
}));

//指定WEB服务器的监听端口
server.listen(5000, () => {
    console.log('服务器启动...');
});
//挂载路由
server.use('/v1', r);