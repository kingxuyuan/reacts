/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-22 16:43:18
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-22 16:48:23
 * @Description: 获取当前IP
 */
const os = require('os');

module.exports = function GetNetworkIp() {
    let needHost = ''; // 打开的host
    try {
        // 获得网络接口列表
        let network = os.networkInterfaces();
        for (let dev in network) {
            let iface = network[dev];
            for (let i = 0; i < iface.length; i++) {
                let alias = iface[i];
                if (
                    alias.family === 'IPv4' &&
                    alias.address !== '127.0.0.1' &&
                    !alias.internal
                ) {
                    needHost = alias.address;
                }
            }
        }
    } catch (e) {
        needHost = 'localhost';
    }
    return needHost;
};