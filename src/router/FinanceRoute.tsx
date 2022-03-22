/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-19 17:13:13
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-20 19:04:33
 * @Description: 财务模块路由
 */
import { lazyLoad } from './RouterFn';
import { PoundOutlined, AccountBookOutlined, DollarOutlined, AndroidOutlined } from '@ant-design/icons';

const FinanceRoute = {
    path: "/finance",
    label: "财务管理",
    icon: <AccountBookOutlined />,
    children: [
        {
            path: "/finance/manualrecharge",
            label: "人工充值扣款",
            icon: <AndroidOutlined />,
            element: lazyLoad(() => import(/* withdraw */ "@/views/Finance/ManualRecharge"), {
                title: '人工充值扣款',
                auth: true,
            }),
        },
        {
            path: "/finance/recharge",
            label: "充值记录",
            icon: <DollarOutlined />,
            element: lazyLoad(() => import(/* recharge */ "@/views/Finance/Recharge"), {
                title: '充值记录',
                auth: true,
            })
        },
        {
            noMenu: true,
            path: "/finance/recharge/edit",
            label: "充值编辑",
            element: lazyLoad(() => import(/* recharge */ "@/views/Finance/Recharge/Edit"), {
                title: '充值编辑',
                auth: true,
            })
        },
        {
            path: "/finance/withdraw",
            label: "提现记录",
            icon: <PoundOutlined />,
            element: lazyLoad(() => import(/* withdraw */ "@/views/Finance/Withdraw"), {
                title: '提现记录',
                auth: true,
            }),
        },
        {
            path: "/finance/giftmoney",
            label: "彩金记录",
            icon: <PoundOutlined />,
            element: lazyLoad(() => import(/* withdraw */ "@/views/Finance/GiftMoney"), {
                title: '彩金记录',
                auth: true,
            }),
        },
        {
            path: "/finance/funds",
            label: "资金变动",
            icon: <PoundOutlined />,
            element: lazyLoad(() => import(/* withdraw */ "@/views/Finance/Funds"), {
                title: '资金变动',
                auth: true,
            }),
        }
    ]
};

export default FinanceRoute;