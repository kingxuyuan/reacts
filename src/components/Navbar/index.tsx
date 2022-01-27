/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-27 15:18:26
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-27 19:58:50
 * @Description: 
 */
import { FC, useState, useEffect } from 'react';
import classnames from 'classnames';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import './index.scss';

interface indexProps { };

const navs = [
    { id: 1, title: '首页1', path: '' },
    { id: 2, title: '首页2', path: '' },
    { id: 3, title: '首页3', path: '' },
    { id: 4, title: '首页4', path: '' },
    { id: 5, title: '首页5', path: '' },
    { id: 6, title: '首页6', path: '' },
    { id: 7, title: '首页7', path: '' },
    { id: 8, title: '首页8', path: '' },
    { id: 9, title: '首页9', path: '' },
    { id: 10, title: '首页10', path: '' },
    { id: 11, title: '首页11', path: '' },
    { id: 12, title: '首页12', path: '' },
    { id: 13, title: '首页13', path: '' },
    { id: 14, title: '首页14', path: '' },
    { id: 15, title: '首页15', path: '' },
    { id: 16, title: '首页16', path: '' },
    { id: 17, title: '首页17', path: '' },
    { id: 18, title: '首页18', path: '' },
    { id: 19, title: '首页19', path: '' },
    { id: 20, title: '首页20', path: '' },
    { id: 21, title: '首页21', path: '' },
    { id: 22, title: '首页22', path: '' },
    { id: 23, title: '首页23', path: '' },
]

const Navbar: FC<indexProps> = (props) => {

    const [left, setLeft] = useState(0);
    const [tabWidth, setTabWidth] = useState(0);
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    const tabClick = (idx: number) => {
        setCurrentTabIndex(idx);
    }

    const prevTabs = () => {
        if (currentTabIndex <= 0) {
            setCurrentTabIndex(0);
        } else setCurrentTabIndex(currentTabIndex - 1);
    };

    const nextTabs = () => {
        if (currentTabIndex >= navs.length - 1) {
            setCurrentTabIndex(navs.length - 1);
        } else setCurrentTabIndex(currentTabIndex + 1);
    };

    useEffect(() => {
        const tab = document.querySelector('.tab');
        const wrap: any = document.querySelector('.layout-navbar-wrap');
        const currentTab: any = tab?.children[currentTabIndex];
        const currentLrft = currentTab?.offsetLeft + currentTab?.offsetWidth;
        let computedStyle: any;
        if ((window as any).getComputedStyle) {
            computedStyle = getComputedStyle(currentTab, null);
        } else {
            computedStyle = currentTab.currentStyle;//兼容IE的写法
        }
        const tabWidth = currentTab.offsetWidth * navs.length + parseInt(computedStyle.marginLeft) * (navs.length - 1);
        setTabWidth(tabWidth);

        if (currentLrft - wrap.offsetWidth / 2 < 0) setLeft(0);
        else setLeft(currentLrft - wrap.offsetWidth / 2);

        if (currentLrft - wrap.offsetWidth / 2 > tabWidth - wrap.offsetWidth) setLeft(tabWidth - wrap.offsetWidth);

    }, [currentTabIndex]);

    return (
        <div className="layout-navbar">
            <LeftOutlined onClick={prevTabs} />
            <div className='layout-navbar-wrap'>
                <div className="tab" style={{ width: tabWidth + 'px', transform: `translateX(-${left}px)` }}>
                    {
                        navs.map((item, idx) => (
                            <div
                                className={classnames('tab-item', { active: currentTabIndex === idx })}
                                key={item.id}
                                onClick={() => tabClick(idx)}
                            >
                                {item.title}
                            </div>
                        ))
                    }
                </div>
            </div>
            <RightOutlined onClick={nextTabs} />
        </div>
    );
}

export default Navbar;