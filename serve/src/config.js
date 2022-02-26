/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-02-26 13:17:34
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-02-26 18:34:32
 * @Description: 启动配置信息
 */
module.exports = {
    port: 3000,                         // express 服务启动端
    /* 数据库相关配置 */
    db: {
        host: 'localhost',              // 主机名
        port: 3306,                     // MySQL 默认端口为 3306
        user: 'root',                   // 使用 root 用户登入 MySQL
        password: 'lemon+123',          // MySQL 密码
        database: 'express_mysql_db',    // 使用数据库
        insecureAuth : true
    }
}