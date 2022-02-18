/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-24 14:34:16
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-02-17 12:48:31
 * @Description: 
 */
import { Navigate } from 'react-router-dom';
import { lazyLoad } from './RouterFn';
import { AppstoreOutlined, MailOutlined, SettingOutlined, TeamOutlined } from '@ant-design/icons';

interface routeTypes {
    path: string
    element?: any
    icon?: any
    label?: string
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
                label: '首页',
                icon: <MailOutlined />,
                element: lazyLoad(() => import('@/views/Home'), {
                    title: '首页',
                    auth: true,
                })
            },
            {
                path: '/mine',
                label: '我的',
                icon: <AppstoreOutlined />,
                element: lazyLoad(() => import('@/views/Mine'), {
                    title: '我的',
                    auth: true,
                })
            },
            {
                path: "/dashboard",
                label: "仪表盘",
                icon: <SettingOutlined />,
                children: [
                    {
                        path: "/dashboard/analysis",
                        label: "分析页",
                        element: lazyLoad(() => import(/* analysis */ "@/views/Dashboard/Analysis"), {
                            title: '分析页',
                            auth: true,
                        }),
                    }, {
                        path: "/dashboard/monitor",
                        label: "监控页",
                        element: lazyLoad(() => import(/* monitor */ "@/views/Dashboard/Monitor"), {
                            title: '监控页',
                            auth: true,
                        }),
                    }, {
                        path: "/dashboard/workbench",
                        label: "工作台",
                        element: lazyLoad(() => import(/* workbench */ "@/views/Dashboard/Workbench"), {
                            title: '工作台',
                            auth: true,
                        }),
                    },
                ],
            },
            {
                path: '/member',
                label: '用户管理',
                icon: <TeamOutlined />,
                children: [
                    {
                        path: '/member/userlist',
                        label: "用户列表",
                        element: lazyLoad(() => import(/* userlist */ '@/views/Member/UserList'), {
                            title: '用户列表',
                            auth: true,
                        })
                    }
                ]
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