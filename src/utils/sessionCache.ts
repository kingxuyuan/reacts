/*
 * @Author: 大侠传授两招吧
 * @Date: 2021-10-19 19:02:43
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2021-12-26 17:10:33
 * @Description: session 读写
 */
import { encrypto, decrypto } from '@/utils/tools';
const ENV = process.env.VUE_APP_ENV;

const sessionCache = {
    sessionGet: (key: string): any => {
        let newVal: any;
        try {
            let value = window.sessionStorage.getItem(key);
            if(value) newVal = ENV !== 'dev' ? JSON.parse(decrypto(value)) : JSON.parse(value);
            else newVal = '';
        } catch (error) {
            // console.log(error);
        }
        return newVal;
    },
    sessionSet: (key: string, value: any) => {
        if (!key) return;
        const newValue = ENV !== 'dev' ? encrypto(JSON.stringify(value)) : JSON.stringify(value);
        window.sessionStorage.setItem(key, newValue);
    },
    sessionRemove: (key: string) => {
        window.sessionStorage.removeItem(key);
    },
    sessionClear() {
        window.sessionStorage.clear();
    }
}

export default sessionCache;