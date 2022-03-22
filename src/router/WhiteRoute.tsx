/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-19 17:15:40
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-22 13:22:34
 * @Description: 白名单路由
 */

import { lazyLoad } from './RouterFn';
import { Navigate } from 'react-router-dom';

const whiteRoute = [
    {
        path: '/login',
        element: lazyLoad(() => import('@/views/Login'), {
            title: '登录页',
        })
    },
    {
        path: '/nopermission',
        element: lazyLoad(() => import('@/views/Permission/NoPermission'), {
            title: '403无权限访问',
        })
    },
    {
        path: '*',
        element: <Navigate to={'/404'} replace={true} />
    },
    {
        path: '/404',
        element: lazyLoad(() => import('@/views/NotFound/404'))
    },
];

export default whiteRoute;