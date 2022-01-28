/*
 * @Author: 大侠传授两招吧
 * @Date: 2021-10-19 19:02:43
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2021-12-26 17:10:38
 * @Description: local 读写
 */
import { encrypto, decrypto } from '@/utils/tools';
const ENV = process.env.VUE_APP_ENV;

const localCache = {
    localGet: (key: string): any => {
        let newVal: any;
        try {
            const value = window.localStorage.getItem(key);
            if(value) newVal = ENV !== 'dev' ? JSON.parse(decrypto(value)) : JSON.parse(value);
            else newVal = '';
        } catch (error) {
            // console.log(error);
        }
        return newVal;
    },
    localSet: (key: string, value: any) => {
        if (!key) return;
        const newValue = ENV !== 'dev' ? encrypto(JSON.stringify(value)) : JSON.stringify(value);
        window.localStorage.setItem(key, newValue);
    },
    localRemove: (key: string) => {
        window.localStorage.removeItem(key);
    },
    localClear() {
        window.localStorage.clear();
    }
}

export default localCache;