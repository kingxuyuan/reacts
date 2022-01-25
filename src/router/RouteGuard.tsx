/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-25 12:53:50
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-25 19:12:41
 * @Description: 封装路由容器组件
 */
import { FC, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import { getRouterBefore } from './RouterFn';

NProgress.configure({ showSpinner: false });

interface RouteProps {
    element: any,
    meta: any
}

let temp:any = null; // 用于防止重复渲染

const RouteGuard: FC<RouteProps> = ({element, meta = {}}) => {
    NProgress.done();
  
    const { pathname  } = useLocation();
    const handleRouterBefore = getRouterBefore();

    useEffect(() => {   
        return () => NProgress.done();
    }, [])

    if(handleRouterBefore) {
        if(temp === element) return element;
        const newPath = handleRouterBefore({pathname, meta });
        if(newPath && newPath !== pathname) element = <Navigate to={newPath} />
    }

    temp = element;
    NProgress.start();
    return element;
}

export default RouteGuard;