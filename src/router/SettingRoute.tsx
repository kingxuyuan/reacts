/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-19 17:15:40
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-20 13:43:58
 * @Description: 系统设置路由
 */
import { lazyLoad } from './RouterFn';
import { PoundOutlined, MoneyCollectOutlined, SettingOutlined, ToolOutlined, ContainerOutlined } from '@ant-design/icons';

const whiteRoute = {
    path: '/setting',
    label: '系统设置',
    icon: <SettingOutlined />,
    children: [
        {
            path: '/setting/base',
            label: '基础设置',
            icon: <ToolOutlined />,
            element: lazyLoad(() => import(/* setting/base */ '@/views/Setting/Base'), {
                title: '基础设置',
                auth: true,
            }),
        }, 
        {
            path: '/setting/balance',
            label: '余额宝设置',
            icon: <PoundOutlined />,
            element: lazyLoad(() => import(/* setting/balance */ '@/views/Setting/Balance'), {
                title: '余额宝设置',
                auth: true,
            }),
        }, 
        {
            path: '/setting/financ',
            label: '财务设置',
            icon: <MoneyCollectOutlined />,
            element: lazyLoad(() => import(/* setting/financ */ '@/views/Setting/Finance'), {
                title: '财务设置',
                auth: true,
            }),
        }, 
        {
            path: '/setting/whitelist',
            label: '白名单',
            icon: <ContainerOutlined />,
            element: lazyLoad(() => import(/* setting/whitelist */ '@/views/Setting/Whitelist'), {
                title: '白名单',
                auth: true,
            }),
        },
        {
            noMenu: true,
            label: '白名单新增',
            path: '/setting/whitelist/create',
            element: lazyLoad(() => import(/* setting/AddEdit */ '@/views/Setting/Whitelist/AddEdit'), {
                title: '白名单新增',
                auth: true,
            }),
        },
        {
            noMenu: true,
            label: '白名单编辑',
            path: '/setting/whitelist/edit',
            element: lazyLoad(() => import(/* setting/AddEdit */ '@/views/Setting/Whitelist/AddEdit'), {
                title: '白名单编辑',
                auth: true,
            }),
        },
    ]
};

export default whiteRoute;