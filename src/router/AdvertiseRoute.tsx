/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-19 17:05:59
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-22 13:05:51
 * @Description: 广告中心路由
 */
import { lazyLoad } from './RouterFn';
import {
    VideoCameraAddOutlined,
    PictureOutlined,
    NotificationOutlined,
    BellOutlined,
    ExceptionOutlined,
    MessageOutlined
} from '@ant-design/icons';

const adRoute = {
    path: "/advertise",
    label: "广告中心",
    icon: <VideoCameraAddOutlined />,
    children: [
        {
            path: "/advertise/carousel",
            label: "轮播图",
            icon: <PictureOutlined />,
            element: lazyLoad(() => import(/* carousel */ "@/views/Advertise/Carousel"), {
                title: '轮播图',
                auth: true,
            }),
        },
        {
            noMenu: true,
            path: "/advertise/carousel/create",
            label: "轮播图新增",
            element: lazyLoad(() => import(/* carousel/addEdit */ "@/views/Advertise/Carousel/AddEdit"), {
                title: '轮播图新增',
                auth: true,
            }),
        },
        {
            noMenu: true,
            path: "/advertise/carousel/edit",
            label: "轮播图编辑",
            element: lazyLoad(() => import(/* carousel/addEdit */ "@/views/Advertise/Carousel/AddEdit"), {
                title: '轮播图编辑',
                auth: true,
            }),
        },
        {
            path: "/advertise/marquee",
            label: "跑马灯",
            icon: <NotificationOutlined />,
            element: lazyLoad(() => import(/* marquee */ "@/views/Advertise/Marquee"), {
                title: '跑马灯',
                auth: true,
            }),
        },
        {
            noMenu: true,
            path: "/advertise/marquee/create",
            label: "跑马灯新增",
            element: lazyLoad(() => import(/* marquee/addEdit */ "@/views/Advertise/Marquee/AddEdit"), {
                title: '跑马灯新增',
                auth: true,
            }),
        },
        {
            noMenu: true,
            path: "/advertise/marquee/edit",
            label: "跑马灯编辑",
            element: lazyLoad(() => import(/* marquee/addEdit */ "@/views/Advertise/Marquee/AddEdit"), {
                title: '跑马灯编辑',
                auth: true,
            }),
        },
        {
            path: "/advertise/notice",
            label: "网站公告",
            icon: <BellOutlined />,
            element: lazyLoad(() => import(/* notice */ "@/views/Advertise/Notice"), {
                title: '网站公告',
                auth: true,
            }),
        },
        {
            noMenu: true,
            path: "/advertise/notice/create",
            label: "网站公告新增",
            element: lazyLoad(() => import(/* notice/addEdit */ "@/views/Advertise/Notice/AddEdit"), {
                title: '网站公告新增',
                auth: true,
            }),
        },
        {
            noMenu: true,
            path: "/advertise/notice/edit",
            label: "网站公告编辑",
            element: lazyLoad(() => import(/* notice/addEdit */ "@/views/Advertise/Notice/AddEdit"), {
                title: '网站公告编辑',
                auth: true,
            }),
        },
        {
            path: "/advertise/information",
            label: "咨询管理",
            icon: <ExceptionOutlined />,
            element: lazyLoad(() => import(/* information */ "@/views/Advertise/Information"), {
                title: '咨询管理',
                auth: true,
            }),
        },
        {
            noMenu: true,
            path: "/advertise/information/create",
            label: "咨询新增",
            element: lazyLoad(() => import(/* information/addEdit */ "@/views/Advertise/Information/AddEdit"), {
                title: '咨询新增',
                auth: true,
            }),
        },
        {
            noMenu: true,
            path: "/advertise/information/edit",
            label: "咨询编辑",
            element: lazyLoad(() => import(/* information/addEdit */ "@/views/Advertise/Information/AddEdit"), {
                title: '咨询编辑',
                auth: true,
            }),
        },
        {
            path: "/advertise/message",
            label: "消息管理",
            icon: <MessageOutlined />,
            element: lazyLoad(() => import(/* message */ "@/views/Advertise/Message"), {
                title: '消息管理',
                auth: true,
            }),
        },
        {
            noMenu: true,
            path: "/advertise/message/create",
            label: "消息新增",
            element: lazyLoad(() => import(/* message/addEdit */ "@/views/Advertise/Message/AddEdit"), {
                title: '消息新增',
                auth: true,
            }),
        },
        {
            noMenu: true,
            path: "/advertise/message/edit",
            label: "消息编辑",
            element: lazyLoad(() => import(/* message/addEdit */ "@/views/Advertise/Message/AddEdit"), {
                title: '消息编辑',
                auth: true,
            }),
        },
    ]
};

export default adRoute;