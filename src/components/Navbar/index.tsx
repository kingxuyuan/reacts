/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-27 15:18:26
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-28 21:09:29
 * @Description: 
 */
import { FC, useState, useEffect, memo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LeftOutlined, RightOutlined, CloseOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import sessionCache from '@/utils/sessionCache';
import { MENUS, RouterTypes } from '@/router/routes';
import { setRouteHistory, getRouteHistory, deleteRoute } from '@/store/config/configReducer';

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
    const routeHistory = useSelector(getRouteHistory);
    const rootRoute = routeFn(MENUS);

    const [left, setLeft] = useState(0);
    const [tabWidth, setTabWidth] = useState(0);
    const [currentTabIndex, setCurrentTabIndex] = useState(sessionCache.sessionGet('idx') || 0);

    // 点击导航
    const tabClick = (idx: number, path: string, e: Event | any) => {
        e?.preventDefault();
        setCurrentTabIndex(idx);
        if(path === pathname) return;
        navigate(path);
    };

    // 上一个导航
    const prevTabs = () => {
        if (currentTabIndex <= 0) setCurrentTabIndex(0);
        else {
            const idx = currentTabIndex - 1;
            setCurrentTabIndex(idx);
        };

        console.log(currentTabIndex);
        
        // navigate(routeHistory[currentTabIndex] || '/home');
    };

    // 下一个导航
    const nextTabs = () => {
        if (currentTabIndex >= routeHistory.length - 1)  setCurrentTabIndex(routeHistory.length - 1);
        else {
            const idx = currentTabIndex + 1;
            setCurrentTabIndex(idx);
        }
        
        console.log(currentTabIndex);
        // navigate(routeHistory[currentTabIndex]);
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
        e?.preventDefault();
        dispatch(deleteRoute({ path, fn: deleteSuccess }));
    };

    // 删除成功
    const deleteSuccess = () => {
        console.log('删除成功！');
        
    }

    // 保存导航列表
    useEffect(() => {
        if (!routeHistory.includes(pathname)) dispatch(setRouteHistory(pathname));
    }, [pathname]);

    // 导航动画效果
    useEffect(() => {
        const tab = document.querySelector('.tab');
        const wrap: any = document.querySelector('.layout-navbar-wrap');
        const tabDoms: any = tab?.children;
        console.log(routeHistory, routeHistory[currentTabIndex]);
        
        const currentTab: any = tabDoms[currentTabIndex];
        const currentLrft = currentTab?.offsetLeft + currentTab?.offsetWidth;
        let computedStyle: any;
        if ((window as any).getComputedStyle) {
            computedStyle = getComputedStyle(currentTab, null);
        } else {
            computedStyle = currentTab?.currentStyle;//兼容IE的写法
        }

        const tabWidth = sumWidthFn(tabDoms) + parseInt(computedStyle.marginLeft) * (routeHistory.length - 1);
        setTabWidth(tabWidth);

        if (currentLrft - wrap.offsetWidth / 2 < 0) setLeft(0);
        else setLeft(currentLrft - wrap.offsetWidth / 2);

        if (currentLrft - wrap.offsetWidth / 2 > tabWidth - wrap.offsetWidth) setLeft(tabWidth - wrap.offsetWidth);

    }, [currentTabIndex, routeHistory.length]);

    return (
        <div className="layout-navbar">
            <LeftOutlined onClick={prevTabs} />
            <div className='layout-navbar-wrap'>
                <div className="tab" style={{ width: tabWidth + 'px', transform: `translateX(-${left}px)` }}>
                    {
                        routeHistory.map((item, idx) => (
                            <div
                                className={classnames('tab-item', { active: pathname === routeHistory[idx] })}
                                key={idx}
                                onClick={(e) => tabClick(idx, item, e)}
                            >
                                {pathname === routeHistory[idx] && <div className='circle'></div>}
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