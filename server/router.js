const express = require('express');
const database = require('mime-db');
const pool = require('./pool.js');
const Router = express.Router();

// Router.get('/login', (req, res) => {
//     let uname = req.query.username;
//     let upwd = req.query.password;
//     console.log(req.query)
//         // let sql = 'select upwd,uname,token from xm_user where uname=? and upwd=MD5(?)';
//     let sql = "select * from xm_user where uname=? and binary upwd=?";
//     pool.query(sql, [uname, upwd], (err, results) => {
//         if (err) throw err;
//         if (results.length == 0) {
//             res.send({ message: '登录失败', status: 204 });
//         } else {
//             res.send({ message: '登录成功', status: 200, mate: results });
//         }
//     });
// });

// 登录接口
Router.post('/login', (req, res) => {
    let uname = req.body.username;
    let upwd = req.body.password;
    console.log(req.body)
        // let sql = 'select uid,uname,token from xm_user where uname=? and upwd=MD5(?)';
    let sql = "select * from xm_user where uname=? and binary upwd=?";
    pool.query(sql, [uname, upwd], (err, results) => {
        if (err) throw err;
        if (results.length == 0) {
            res.send({ message: '登录失败', status: 204 });
        } else {
            res.send({ message: '登录成功', status: 200, mate: results });
        }
    });
});



// 获取左侧一级菜单数据
// Router.get('/menus', (req, res) => {
//     let sql = 'select * from xm_management';
//     pool.query(sql, (err, results) => {
//         if (err) throw err;
//         res.send({ message: '获取数据成功', status: 200, data: results });
//     });
// });


// 导出路由
module.exports = Router;