/*
 * @Author: 大侠传授两招吧
 * @Date: 2021-11-22 10:21:21
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-22 13:25:56
 * @Description: 工具
 */
export const menuWidth = (fold: boolean) => fold ? 50 : 208;

/**
 * @description: 图片转换base64
 * @param {any} file
 * @return {*}  Promise
 * @author: 大侠传授两招吧
 */
export const changeBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
};

/**
 * @description: 友盟统计
 * @author: 大侠传授两招吧
 */
export const statisticsFn = () => {
    let el = document.createElement('script');
    el.type = 'text/javascript';
    el.charset = 'utf-8';
    el.async = true;
    let ref: any = document.getElementsByTagName('script')[0];
    ref.parentNode.insertBefore(el, ref);
    el.src = 'https://s4.cnzz.com/z_stat.php?id=1280658613&web_id=1280658613&async=1';
}
/**
 * @description: 
 * @param {number} min 最小边界值
 * @param {number} max 最大边界值
 * @return {*}  区间随机数
 * @author: 大侠传授两招吧
 */
export const randomNum = (min: number, max: number): number => Math.round(Math.random() * (max - min)) + min;

/**
 * @description: 判断iPhone|iPad|iPod|iOS|Android客户端
 * @return {*}   device 设备类型
 * @author: 大侠传授两招吧
 */
export const judgeDevice = (): string => {
    let device = '';
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) { //判断iPhone|iPad|iPod|iOS
        device = 'iPhone';
    } else if (/(Android)/i.test(navigator.userAgent)) {  //判断Android
        device = 'Android';
    } else { //pc
        device = 'PC';
    }
    return device;
}
/**
 * @description: 名字星号
 * @param {string} str
 * @return {*}
 * @author: 大侠传授两招吧
 */
export const nameAsterisk = (str: string) => {
    if (str) {
        if (str.length <= 3) {
            return '*' + str.substring(1, str.length);
        } else if (str.length > 3 && str.length <= 6) {
            return '**' + str.substring(2, str.length);
        } else if (str.length > 6) {
            return (
                str.substring(0, 2) +
                '****' +
                str.substring(6, str.length)
            );
        }
    }
};

/**
 * @description: 卡 星号
 * @param {string} value
 * @return {*}
 * @author: 大侠传授两招吧
 */
export const bankCardAsterisk = (value: string) => {
    if (value && value.length > 8) {
        return `${value.substring(0, 4)} ${'*'
            .repeat(value.length - 8)
            .replace(/(.{4})/g, `$1 `)}${value.length % 4 ? ' ' : ''
            }${value.slice(-4)}`;
    }
    return value;
};

/**
 * encrypto 加密程序
 * @param {Strng} str 待加密字符串
 * @param {Number} xor 异或值
 * @param {Number} hex 加密后的进制数
 * @return {Strng} 加密后的字符串
 */
export const encrypto = (str: any, xor = 99, hex = 13): string => {
    if (typeof str !== 'string' || typeof xor !== 'number' || typeof hex !== 'number') {
        return '';
    }

    let resultList = [];
    hex = hex <= 25 ? hex : hex % 25;

    for (let i = 0; i < str.length; i++) {
        // 提取字符串每个字符的ascll码
        let charCode: any = str.charCodeAt(i);
        // 进行异或加密
        charCode = (charCode * 1) ^ xor;
        // 异或加密后的字符转成 hex 位数的字符串
        charCode = charCode.toString(hex);
        resultList.push(charCode);
    }

    let splitStr = String.fromCharCode(hex + 97);
    let resultStr = resultList.join(splitStr);
    return resultStr;
}
/**
 * decrypto 解密程序
 * @param {Strng} str 待加密字符串
 * @param {Number} xor 异或值
 * @param {Number} hex 加密后的进制数
 * @return {Strng} 加密后的字符串
 */
export const decrypto = (str: any, xor = 99, hex = 13): string => {
    if (typeof str !== 'string' || typeof xor !== 'number' || typeof hex !== 'number' || !str) {
        return '';
    }
    let strCharList = [];
    let resultList = [];
    hex = hex <= 25 ? hex : hex % 25;
    // 解析出分割字符
    let splitStr = String.fromCharCode(hex + 97);
    // 分割出加密字符串的加密后的每个字符
    strCharList = str.split(splitStr);

    for (let i = 0; i < strCharList.length; i++) {
        // 将加密后的每个字符转成加密后的ascll码
        let charCode = parseInt(strCharList[i], hex);
        // 异或解密出原字符的ascll码
        charCode = (charCode * 1) ^ xor;
        let strChar = String.fromCharCode(charCode);
        resultList.push(strChar);
    }
    let resultStr = resultList.join('');
    return resultStr;
}