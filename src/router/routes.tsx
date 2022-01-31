/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-24 14:34:16
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-31 11:39:58
 * @Description: 
 */
import { Navigate } from 'react-router-dom';
import { lazyLoad } from './RouterFn';
import { AppstoreOutlined, MailOutlined, SettingOutlined, FileImageOutlined } from '@ant-design/icons';

interface routeTypes {
    path: string
    element?: any
    icon?: any
    title?: string
    children?: routeTypes[]
}

export interface RouterTypes extends routeTypes {
    children?: routeTypes[]
}

/**
 * @description: 路由管理
 * @author: 大侠传授两招吧
 */
const routes: RouterTypes[] = [
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
                title: '首页',
                icon: <MailOutlined />,
                element: lazyLoad(() => import('@/views/Home'), {
                    title: '首页',
                    auth: true,
                })
            },
            {
                path: '/mine',
                title: '我的',
                icon: <AppstoreOutlined />,
                element: lazyLoad(() => import('@/views/Mine'), {
                    title: '我的',
                    auth: true,
                })
            },
            {
                path: "/dashboard",
                title: "仪表盘",
                icon: <SettingOutlined />,
                children: [
                    {
                        path: "/dashboard/analysis",
                        title: "分析页",
                        element: lazyLoad(() => import(/* home */ "../views/Dashboard/Analysis"), {
                            title: '分析页',
                            auth: true,
                        }),
                    }, {
                        path: "/dashboard/monitor",
                        title: "监控页",
                        element: lazyLoad(() => import(/* home */ "../views/Dashboard/Monitor"), {
                            title: '监控页',
                            auth: true,
                        }),
                    }, {
                        path: "/dashboard/workbench",
                        title: "工作台",
                        element: lazyLoad(() => import(/* home */ "../views/Dashboard/Workbench"), {
                            title: '工作台',
                            auth: true,
                        }),
                    },
                ],
            }
        ]
    },
    {
        path: '/login',
        element: lazyLoad(() => import('@/views/Login'), {
            title: '登录页',
        })
    },
    {
        path: '*',
        element: <Navigate to={'/404'} />
    },
    {
        path: '/404',
        element: lazyLoad(() => import('@/views/NotFound/404'))
    },
]

export const MENUS = routes[0].children?.filter((item: any, idx: number) => idx > 0) || [];

export default routes;