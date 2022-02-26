/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-02-26 13:16:48
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-02-26 19:09:16
 * @Description: 服务主入口
 */
const express = require("express");
const query = require("./db"); // 获取连接实例
const { port } = require("./config"); // 获取启动参数
const NetworkIp = require('../../networkIp.ts');
const cors = require('cors');

const app = express();
app.use(cors());

app.post("/api/login", (req, res, next) => {
	const { account, password } = req.query;
	query(
		`SELECT account, password FROM user WHERE account = '${account}';`,
		(data) => {
            let resData = {};
            if(data.length > 0) {
                if(password !== data[0].password) resData = {
                    code: 401,
                    msg: '密码错误'
                }
                else {
                    resData = {
                        code: 200,
                        msg: '登录成功'
                    };
                }
            } else {
                resData = {
                    code: 400,
                    msg: '用户不存在'
                }
            }
             
            console.log(resData);

			res.send(JSON.stringify(resData));
            next();
		}
	);
});

app.listen(port, () => {
	console.log(`express server listen at ${NetworkIp()}:${port}`);
});