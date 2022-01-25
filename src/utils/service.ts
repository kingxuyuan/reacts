/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-25 16:53:21
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-25 16:58:03
 * @Description: axios 拦截
 */
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const service = axios.create({
    baseURL: '',
    timeout: 16000
})

service.interceptors.request.use((config: AxiosRequestConfig) => {

    return config;
}, err => {
    console.log(err);
});

service.interceptors.response.use((res: AxiosResponse) => {

    if(res.status === 200) return res.data;
    
}, err => {
    console.log(err);
});

export default service;