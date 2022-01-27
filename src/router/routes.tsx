/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-24 14:34:16
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-27 16:43:23
 * @Description: 
 */
import { Navigate } from 'react-router-dom';
import { lazyLoad } from './RouterFn';
import { setRouterBefore } from './RouterFn';
import { AppstoreOutlined, MailOutlined, SettingOutlined, FileImageOutlined } from '@ant-design/icons';

interface metaTypes {
    title: string
    auth: boolean
}

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
                    auth: false,
                })
            },
            {
                path: '/mine',
                title: '我的',
                icon: <AppstoreOutlined />,
                element: lazyLoad(() => import('@/views/Mine'), {
                    title: '我的',
                    auth: false,
                })
            },
            {
                path: '/exception',
                title: "异常页",
                icon: <FileImageOutlined />,
                children: [
                    {
                        path: '',
                        element: <Navigate to={'/error403'} />
                    },
                    {
                        path: "/exception/error403",
                        title: "异常403",
                        element: lazyLoad(() => import(/* error403 */ '@/views/Exception/Error403'), {
                            title: '我的',
                            auth: false,
                        }),
                    }, {
                        path: "/exception/error404",
                        title: "异常404",
                        element: lazyLoad(() => import(/* error404 */ "../views/Exception/Error404")),
                    }, {
                        path: "/exception/error500",
                        title: "异常500",
                        element: lazyLoad(() => import(/* error500 */ "../views/Exception/Error500")),
                    },
                ],
            }, 
            {
                path: "/dashboard",
                title: "仪表盘",
                icon: <SettingOutlined />,
                children: [
                    {
                        path: "/dashboard/analysis",
                        title: "分析页",
                        element: lazyLoad(() => import(/* home */ "../views/Dashboard/Analysis")),
                    }, {
                        path: "/dashboard/monitor",
                        title: "监控页",
                        element: lazyLoad(() => import(/* home */ "../views/Dashboard/Monitor")),
                    }, {
                        path: "/dashboard/workbench",
                        title: "工作台",
                        element: lazyLoad(() => import(/* home */ "../views/Dashboard/Workbench")),
                    },
                ],
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