/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-27 15:18:26
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-02-17 12:49:31
 * @Description: 
 */
import { FC, useState, useEffect, memo, MouseEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LeftOutlined, RightOutlined, CloseOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import { MENUS, RouterTypes } from '@/router/routes';

import './index.scss';

interface indexProps { };

interface contextmenus_types {
    id: number
    path: string
    title: string
}

// 导航列表过滤
const routeFn = (arr: RouterTypes[]): any[] => {
    return arr
        .map((item: RouterTypes) => {
            if (item.children) {
                return routeFn(item.children);
            }
            return {
                path: item.path,
                title: item.label
            };
        })
        .flat(Infinity);
};

const cMenus: contextmenus_types[] = [
    { id: 1, path: '', title: '关闭' },
    { id: 2, path: '', title: '关闭其他' },
    { id: 3, path: '', title: '关闭所有' }
]

const Navbar: FC<indexProps> = (props) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const rootRoute = routeFn(MENUS);

    const [left, setLeft] = useState(0);
    const [tabWidth, setTabWidth] = useState(0);
    const [navList, setNavList] = useState(['/home']);
    const [currentTab, setCurrentTab] = useState(pathname);
    const [contextmenus, setContextmenus] = useState(cMenus);
    const [showContextmenu, setContextmenu] = useState(false);
    const [contextMenu, setContextMenu] = useState({
        left: 0,
        width: 80
    });

    // 点击导航
    const tabClick = (path: string) => {
        if (path === pathname) return;
        setCurrentTab(path);
        navigate(path);
    };

    // 导航切换
    const changeTabs = (key: string) => {
        let path = '';
        const idx = navList.indexOf(currentTab);

        if (key === 'prev') {
            if (idx <= 0) path = '/home';
            else path = navList[idx - 1];
        } else {
            if (!navList[idx + 1]) path = navList[navList.length - 1];
            else path = navList[idx + 1];
        }
        navigate(path);
    };

    // 导航的宽度
    const sumWidthFn = (list: any[]): number => {
        let sum = 0;
        for (let i = 0; i < list.length; i++) {
            sum += list[i].offsetWidth
        };
        return sum;
    };

    // 导航关闭按钮事件
    const closeClick = (path: string, e: MouseEvent) => {
        e?.stopPropagation();
        deleteRoute(path);
    };

    // 删除当前导航
    const deleteRoute = (path: string) => {
        const idx = navList.indexOf(path);

        if (path === currentTab) {
            let path = '';
            if(!navList[idx + 1]) path = navList[idx - 1];
            else path = navList[idx + 1];
            navigate(path);
        };
        setNavList([...navList.filter(item => item !== path && path)]);
    };

    // 导航鼠标右键事件
    const tabContentextMenu = (path: string, idx: number, e: MouseEvent) => {
        e && e.preventDefault();
        if(idx === 0) return;
        setContextmenu(true);

        const newMenus = contextmenus.map(item => {
            item.path = path;
            return { ...item}
        });
        setContextmenus(newMenus);

        let left = 0;
        if (window.innerWidth - e.clientX < contextMenu.width) left = e.clientX - contextMenu.width / 3 * 2;
        else left = e.clientX - contextMenu.width / 2;
        
        setContextMenu({
            ...contextMenu,
            left
        });
    };
 
    // 导航 子菜单点击事件
    const contextmenuClick = (item: contextmenus_types) => {
        switch (item.id) {
            case 1:
                deleteRoute(item.path);
                break;
            case 2:
                navigate(item.path);
                setNavList(navList.filter(n => (n === '/home' || n === item.path) && n));
                break;
            default:
                setNavList(['/home']);
                navigate('/home');
                break;
        }
    };

    // 隐藏 导航 子菜单
    const hideContentextMenu = () => {
        setContextmenu(false);
    };

    // 过滤路由title
    const filterTitle = (path: string): string => {
        const currentTitle: any = rootRoute.filter(item => item.path.includes(path))[0];
        return currentTitle?.title || '';
    };

    useEffect(() => {
        document.body.addEventListener('click', hideContentextMenu);

        return () => {
            document.body.removeEventListener('click', hideContentextMenu);
        }
    }, []);

    // 保存导航列表
    useEffect(() => {
        if (!navList.includes(pathname) && pathname !== '/') {
            setNavList([...navList, pathname]);
        }
        setCurrentTab(pathname);
    }, [navList, pathname]);

    // 导航动画效果
    useEffect(() => {
        const tab = document.querySelector('.tab');
        const elView: any = document.querySelector('.layout-navbar-view');
        const tabDoms: any = tab?.children;

        if (navList.indexOf(currentTab) > -1) {
            let currentTabEl: any = tabDoms[navList.indexOf(currentTab)];
            const currentLeft = currentTabEl?.offsetLeft + currentTabEl?.offsetWidth;
            let computedStyle: any = (window as any).getComputedStyle ? getComputedStyle(currentTabEl, null) : currentTabEl?.currentStyle; //兼容IE的写法

            const tabWidth = sumWidthFn(tabDoms) + parseInt(computedStyle.marginLeft) * (navList.length - 1);
            setTabWidth(tabWidth);

            if (currentLeft - elView.offsetWidth / 2 < 0) setLeft(0);
            else setLeft(currentLeft - elView.offsetWidth / 2);

            if (currentLeft - elView.offsetWidth / 2 > tabWidth - elView.offsetWidth) setLeft(tabWidth - elView.offsetWidth);
        }
    }, [currentTab, navList]);

    return (
        <div className="layout-navbar">
            {/* <LeftOutlined onClick={() => changeTabs('prev')} /> */}
            <div className="layout-navbar-view">
                <div className="tab" style={{ width: tabWidth + 'px', transform: `translateX(-${left}px)` }}>
                    {
                        navList.map((path: any, idx: number) => (
                            <div
                                className={classnames('tab-item', { active: currentTab === path })}
                                key={idx}
                                onClick={(e) => tabClick(path)}
                                onContextMenu={(e) => tabContentextMenu(path, idx, e)}
                            >
                                {currentTab === path && <div className='circle'></div>}
                                <span>{filterTitle(path)}</span>
                                {path !== '/home' && <CloseOutlined className='close' onClick={(e) => closeClick(path, e)} />}
                            </div>
                        ))
                    }
                </div>
            </div>

            {
                showContextmenu &&
                <div
                    className="contextmenu"
                    style={{ left: `${contextMenu.left}px`, width: `${contextMenu.width}px` }}
                >
                    {
                        contextmenus.map(item => (
                            <div className="contextmenu-item" key={item.id} onClick={() => contextmenuClick(item)} >{item.title}</div>
                        ))
                    }
                </div>
            }

            {/* <RightOutlined onClick={() => changeTabs('next')} /> */}
        </div>
    );
}

export default memo(Navbar);