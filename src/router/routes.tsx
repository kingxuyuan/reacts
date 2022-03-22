/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-24 14:34:16
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-20 14:35:56
 * @Description: 
 */
import { Navigate } from 'react-router-dom';
import { lazyLoad } from './RouterFn';
import { AppstoreOutlined, FolderOpenOutlined, UserAddOutlined } from '@ant-design/icons';

import AdvertiseRoute from './AdvertiseRoute';
import MemberRoute from './MemberRoute';
import MerchantRoute from './MerchantRoute';
import FinanceRoute from './FinanceRoute';
import SettingRoute from './SettingRoute';
import AdminRoute from './AdminRoute';
import WhiteRoute from './WhiteRoute';

interface routeTypes {
    path: string
    element?: any
    icon?: any
    label?: string
    noMenu?: boolean
    children?: routeTypes[]
}

export interface RouterTypes extends routeTypes {
    children?: routeTypes[]
}

const needAuth = [
    {
        path: '/home',
        label: '首页',
        icon: <AppstoreOutlined />,
        element: lazyLoad(() => import(/* home */ '@/views/Home'), {
            title: '首页',
            auth: true,
        })
    },
    {
        path: '/report',
        label: '报表管理',
        icon: <FolderOpenOutlined />,
        element: lazyLoad(() => import(/* report */ '@/views/Report'), {
            title: '报表管理',
            auth: true,
        })
    },
    MerchantRoute,
    MemberRoute,
    AdvertiseRoute,
    FinanceRoute,
    SettingRoute,
    AdminRoute,
    {
        path: '/mine',
        label: '个人中心',
        icon: <UserAddOutlined />,
        element: lazyLoad(() => import('@/views/Mine'), {
            title: '个人中心',
            auth: true,
        })
    },
]

/**
 * @description: 路由管理
 * @author: 大侠传授两招吧
 */
const routes: RouterTypes[] = [
    {
        path: '/',
        element: lazyLoad(() => import('@/views/Layout')),
        children: [
            {
                path: '',
                element: <Navigate to={'/home'} />
            },
            ...needAuth
        ]
    },
    ...WhiteRoute
];

export const MENUS = needAuth;

export default routes;