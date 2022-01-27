/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-25 12:53:50
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-27 16:32:52
 * @Description: 封装路由容器组件
 */
import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { getRouterBefore } from './RouterFn';

interface RouteProps {
    element: any,
    meta: any
}

let temp:any = null; // 用于防止重复渲染

const RouteGuard: FC<RouteProps> = ({element, meta = {}}) => {
    const { pathname  } = useLocation();
    const handleRouterBefore = getRouterBefore();

    if(handleRouterBefore) {
        if(temp === element) return element;
        const newPath = handleRouterBefore({pathname, meta });
        if(newPath && newPath !== pathname) element = <Navigate to={newPath} />
    }

    temp = element;
    return element;
}

export default RouteGuard;