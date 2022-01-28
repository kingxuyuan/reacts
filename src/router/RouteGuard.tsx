/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-25 12:53:50
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-28 19:46:03
 * @Description: 封装路由容器组件
 */
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getToken } from '@/store/config/configReducer';

interface RouteProps {
    element: any,
    meta: any
}

let temp: any = null; // 用于防止重复渲染

const RouteGuard: FC<RouteProps> = ({ element, meta = {} }) => {
    let path = '';
    const { pathname } = useLocation();
    const token = useSelector(getToken);

    if (temp === element) return element;

    // 动态修改页面title
    if (meta.title !== undefined) document.title = meta.title;

    // 判断未登录跳转登录页
    if (meta.auth && !token) path = '/login';

    if (path && path !== pathname) element = <Navigate to={path} />

    temp = element;
    return element;
}

export default RouteGuard;