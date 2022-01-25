/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-24 14:34:16
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-25 18:49:03
 * @Description: 
 */
import { Navigate } from 'react-router-dom';
import { lazyLoad } from './RouterFn';
import { setRouterBefore } from './RouterFn';

interface metaTypes {
    title: string
    auth: boolean
}

interface routeTypes {
    path: string
    element: any
}

export interface RouterTypes extends routeTypes {
    children?: routeTypes[]
}

/**
 * @description: 路由管理
 * @author: 大侠传授两招吧
 */
const routes = [
    // {
    //     path: '/',
    //     element: <Navigate to={'/layout/home'} />
    // },
    {
        path: '/',
        element: lazyLoad(() => import('@/views/Layout')),
        children: [
            {
                path: '',
                element: <Navigate to={'/home'} />
            },
            {
                path: '/home',
                element: lazyLoad(() => import('@/views/Home'), {
                    title: '首页',
                    auth: false,
                })
            },
            {
                path: '/mine',
                element: lazyLoad(() => import('@/views/Mine'), {
                    title: '我的',
                    auth: false,
                })
            }
        ]
    },
    {
        path: '/login',
        element: lazyLoad(() => import('@/views/Login'), {
            title: '登录页',
            auth: false,
        })
    },
    {
        path: '*',
        element: <Navigate to={'/notfound'} />
    },
    {
        path: '/notfound',
        element: lazyLoad(() => import('@/views/NotFound/404'))
    },
]

const onRouterBefore = ({ pathname, meta }: { pathname: string, meta: metaTypes }) => {
    // 动态修改页面title
    if (meta.title !== undefined) {
        document.title = meta.title
    }
    // console.log(pathname, meta, 2222222222);
    const token = '';
    
    // 判断未登录跳转登录页
    if (meta.auth && !token) return '/login';
}

setRouterBefore(onRouterBefore);

export default routes;