/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-25 16:53:21
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-16 17:45:07
 * @Description: axios 拦截
 */
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

const service = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? '' : process.env.REACT_APP_URL,
    timeout: 16000
})

service.interceptors.request.use((config: AxiosRequestConfig) => {
    NProgress.start();
    return config;
}, err => {
    console.log(err);
});

service.interceptors.response.use((res: AxiosResponse) => {
    NProgress.done();
    if (res.status === 200) return res.data;

}, err => {
    NProgress.done();
    console.log(err);
});

export default service;