/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-02-26 13:17:21
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-02-26 16:26:49
 * @Description: 数据库连接
 */
const mysql = require("mysql");

const { db } = require("./config"); // 获取数据库配置信息
const pool = mysql.createPool(db);

const query = (sql, callback) => {
	console.log("db pool");
	pool.getConnection((err, connection) => {
		if (err) throw err;
		console.log("get connection");
		//Use the connection
		connection.query(sql, (err, res) => {
			if (err) throw err;
			else {
				// console.log(JSON.stringify(res));
				//每次查询都会 回调
				callback(res);
				//只是释放链接，在缓冲池了，没有被销毁
				connection.release();
			}
		});
	});
};

module.exports = query; // mysql.createConnection 方法创建连接实例
