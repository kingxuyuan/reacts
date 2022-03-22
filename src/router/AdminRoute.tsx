/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-19 17:15:40
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-20 15:02:35
 * @Description: 系统设置路由
 */
import { lazyLoad } from './RouterFn';
import { UsbOutlined, UserOutlined, ClusterOutlined } from '@ant-design/icons';

const whiteRoute = {
    path: '/admin',
    label: '管理员',
    icon: <UsbOutlined />,
    children: [
        {
            path: '/admin/role',
            label: '角色',
            icon: <UserOutlined />,
            element: lazyLoad(() => import(/* admin/role */ '@/views/Admin/Role'), {
                title: '角色',
                auth: true,
            }),
        }, 
        {
            path: '/admin/permissions',
            label: '权限',
            icon: <ClusterOutlined />,
            element: lazyLoad(() => import(/* admin/permissions */ '@/views/Admin/Permissions'), {
                title: '权限',
                auth: true,
            }),
        }, 
    ]
};

export default whiteRoute;