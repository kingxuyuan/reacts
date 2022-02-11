/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-24 15:12:30
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-02-11 14:39:56
 * @Description: 
 */
import { FC, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import './index.scss';
import Sider from '@/components/Sider';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

interface LayoutProps { }

const Layout: FC<LayoutProps> = (props) => {
    const { pathname } = useLocation();
    const [move, setMove] = useState(false);
    useEffect(() => {
        console.log(pathname);
        setMove(true);
        setTimeout(() => {
            setMove(false);
        }, 2000);
    }, [pathname]);

    return (
        <div className="layout">
            <Sider />
            <div className="layout-content">
                <Header />
                <div className="layout-header-blank"></div>

                <Navbar />

                <CSSTransition in={move} classNames="move" timeout={1000}>
                    <div className="layout-main">
                        <Outlet />
                    </div>
                </CSSTransition>

                <div className="layout-footer">Ant Design Admin ©2020 zuiidea</div>
            </div>
        </div>
    );
}

export default Layout;