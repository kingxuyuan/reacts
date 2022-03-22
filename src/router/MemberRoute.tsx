/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-19 17:08:33
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-19 17:17:58
 * @Description: 用户管理路由
 */
import { lazyLoad } from './RouterFn';
import {
    TeamOutlined,
    UserOutlined,
    AndroidOutlined,
    SketchOutlined,
    CreditCardOutlined,
    DollarCircleOutlined,
} from '@ant-design/icons';

const memberRoute = {
    path: '/member',
    label: '用户管理',
    icon: <TeamOutlined />,
    children: [
        {
            path: '/member/list',
            label: "用户列表",
            icon: <UserOutlined />,
            element: lazyLoad(() => import(/* memberlist */ '@/views/Member/Member'), {
                title: '用户列表',
                auth: true,
            })
        },
        {
            path: '/member/edit',
            label: "用户编辑",
            noMenu: true,
            icon: <UserOutlined />,
            element: lazyLoad(() => import(/* memberlist/edit */ '@/views/Member/Member/Edit'), {
                title: '用户编辑',
                auth: true,
            })
        },
        {
            path: '/member/levels',
            label: "用户等级",
            icon: <SketchOutlined />,
            element: lazyLoad(() => import(/* level */ '@/views/Member/Levels'), {
                title: '用户等级',
                auth: true,
            })
        },
        {
            path: '/member/levels/create',
            label: "用户等级新增",
            noMenu: true,
            element: lazyLoad(() => import(/* levels/addedit */ '@/views/Member/Levels/AddEdit'), {
                title: '用户等级新增',
                auth: true,
            })
        },
        {
            path: '/member/levels/edit',
            label: "用户等级编辑",
            noMenu: true,
            element: lazyLoad(() => import(/* levels/addedit */ '@/views/Member/Levels/AddEdit'), {
                title: '用户等级编辑',
                auth: true,
            })
        },
        {
            path: '/member/virtuals',
            label: "虚拟号",
            icon: <AndroidOutlined />,
            element: lazyLoad(() => import(/* virtual */ '@/views/Member/Virtuals'), {
                title: '虚拟号',
                auth: true,
            })
        },
        {
            noMenu: true,
            path: '/member/virtuals/create',
            label: '虚拟号新增',
            element: lazyLoad(() => import(/* virtuals/addedit */ '@/views/Member/Virtuals/AddEdit'), {
                title: '虚拟号新增',
                auth: true,
            }),
        }, {
            noMenu: true,
            path: '/member/virtuals/edit',
            label: '虚拟号编辑',
            element: lazyLoad(() => import(/* virtuals/addedit */ '@/views/Member/Virtuals/AddEdit'), {
                title: '虚拟号编辑',
                auth: true,
            }),
        },
        {
            path: '/member/banks',
            label: "银行卡",
            icon: <CreditCardOutlined />,
            element: lazyLoad(() => import(/* banks */ '@/views/Member/Banks'), {
                title: '银行卡',
                auth: true,
            })
        },
        {
            noMenu: true,
            path: '/member/banks/edit',
            label: '银行卡编辑',
            element: lazyLoad(() => import(/* banks/addedit */ '@/views/Member/Banks/Edit'), {
                title: '银行卡编辑',
                auth: true,
            }),
        },
        {
            path: '/member/wallets',
            label: "数字钱包",
            icon: <DollarCircleOutlined />,
            element: lazyLoad(() => import(/* wallets */ '@/views/Member/Wallets'), {
                title: '数字钱包',
                auth: true,
            })
        },
        {
            noMenu: true,
            path: '/member/wallets/edit',
            label: '数字钱包编辑',
            element: lazyLoad(() => import(/* wallets/addedit */ '@/views/Member/Wallets/Edit'), {
                title: '数字钱包编辑',
                auth: true,
            }),
        },
    ]
};

export default memberRoute;