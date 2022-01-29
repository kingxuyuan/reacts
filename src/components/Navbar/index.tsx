/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-27 15:18:26
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-29 21:20:29
 * @Description: 
 */
import { FC, useState, useEffect, memo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { compose } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { LeftOutlined, RightOutlined, CloseOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import sessionCache from '@/utils/sessionCache';
import { MENUS, RouterTypes } from '@/router/routes';
import { setRouteHistory, getRouteHistory, deleteRoute } from '@/store/config/configReducer';
import useSyncCallback from '@/hooks/useSyncCallback';

import './index.scss';

interface indexProps { };

// 导航列表过滤
const routeFn = (arr: RouterTypes[]): any[] => {
    return arr
        .map((item: RouterTypes) => {
            if (item.children) {
                return routeFn(item.children);
            }
            return {
                path: item.path,
                title: item.title
            };
        })
        .flat(Infinity);
};

const Navbar: FC<indexProps> = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const rootRoute = routeFn(MENUS);

    const [left, setLeft] = useState(0);
    const [tabWidth, setTabWidth] = useState(0);
    const [navList, setNavList] = useState(['/home']);
    const [currentTab, setCurrentTab] = useState(pathname);

    // 点击导航
    const tabClick = (path: string) => {
        if (path === pathname) return;
        setCurrentTab(path);
        navigate(path);
    };

    // 上一个导航
    const prevTabs = () => {

    };

    // 下一个导航
    const nextTabs = () => {

    };

    // 导航的宽度
    const sumWidthFn = (list: any[]): number => {
        let sum = 0;
        for (let i = 0; i < list.length; i++) {
            sum += list[i].offsetWidth
        };
        return sum;
    };

    // 过滤路由title
    const filterTitle = (path: string): string => {
        const currentTitle: any = rootRoute.filter(item => item.path.includes(path))[0];
        return currentTitle?.title || '';
    };

    // 从导航列表删除一个路由
    const closeRoute = (path: string, e: Event | any) => {
        e?.stopPropagation();
        const idx = navList.indexOf(path);
       
        if(path === currentTab) {
            navigate(navList[idx - 1]);
        };
        setNavList([...navList.filter(item => item !== path && path)]);
    };

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
        const wrap: any = document.querySelector('.layout-navbar-wrap');
        const tabDoms: any = tab?.children;

        if (navList.indexOf(currentTab) > -1) {
            let currentTabEl: any = tabDoms[navList.indexOf(currentTab)];
            const currentLrft = currentTabEl?.offsetLeft + currentTabEl?.offsetWidth;
            let computedStyle: any = (window as any).getComputedStyle ? getComputedStyle(currentTabEl, null) : currentTabEl?.currentStyle; //兼容IE的写法

            const tabWidth = sumWidthFn(tabDoms) + parseInt(computedStyle.marginLeft) * (navList.length - 1);
            setTabWidth(tabWidth);

            if (currentLrft - wrap.offsetWidth / 2 < 0) setLeft(0);
            else setLeft(currentLrft - wrap.offsetWidth / 2);

            if (currentLrft - wrap.offsetWidth / 2 > tabWidth - wrap.offsetWidth) setLeft(tabWidth - wrap.offsetWidth);
        }
    }, [currentTab, navList]);

    return (
        <div className="layout-navbar">
            <LeftOutlined onClick={prevTabs} />
            <div className='layout-navbar-wrap'>
                <div className="tab" style={{ width: tabWidth + 'px', transform: `translateX(-${left}px)` }}>
                    {
                        navList.map((item: any, idx: number) => (
                            <div
                                className={classnames('tab-item', { active: currentTab === item })}
                                key={idx}
                                onClick={(e) => tabClick(item)}
                            >
                                {currentTab === item && <div className='circle'></div>}
                                <span>{filterTitle(item)}</span>
                                {item !== '/home' && <CloseOutlined className='close' onClick={(e) => closeRoute(item, e)} />}
                            </div>
                        ))
                    }
                </div>
            </div>
            <RightOutlined onClick={nextTabs} />
        </div>
    );
}

export default memo(Navbar);