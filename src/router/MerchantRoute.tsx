/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-19 17:10:53
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-19 17:12:19
 * @Description: 商户管理路由
 */
import { lazyLoad } from './RouterFn';
import { ContactsOutlined, PoundOutlined, DeploymentUnitOutlined } from '@ant-design/icons';

const merchantRoute = {
    path: '/merchant',
    label: '商户管理',
    icon: <ContactsOutlined />,
    children: [
        {
            path: '/merchant/amountrecord',
            label: '额度记录',
            icon: <PoundOutlined />,
            element: lazyLoad(() => import(/* amountrecord */ '@/views/Merchant/AmountRecord'), {
                title: '额度记录',
                auth: true,
            }),
        }, {
            path: '/merchant/merchants',
            label: '商家列表',
            icon: <ContactsOutlined />,
            element: lazyLoad(() => import(/* merchants */ '@/views/Merchant/Merchants'), {
                title: '商家列表',
                auth: true,
            }),
        }, {
            path: '/merchant/agents',
            label: '代理列表',
            icon: <DeploymentUnitOutlined />,
            element: lazyLoad(() => import(/* agents */ '@/views/Merchant/Agents'), {
                title: '代理列表',
                auth: true,
            }),
        }, {
            noMenu: true,
            path: '/merchant/agents/create',
            label: '代理新增',
            element: lazyLoad(() => import(/* agents/addedit */ '@/views/Merchant/Agents/AddEdit'), {
                title: '代理新增',
                auth: true,
            }),
        }, {
            noMenu: true,
            path: '/merchant/agents/edit',
            label: '代理编辑',
            element: lazyLoad(() => import(/* agents/addedit */ '@/views/Merchant/Agents/AddEdit'), {
                title: '代理编辑',
                auth: true,
            }),
        },
    ]
};

export default merchantRoute;