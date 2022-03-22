/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-24 15:12:30
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-22 13:17:13
 * @Description: 
 */
import { FC, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import './index.scss';
import Sider from '@/components/Sider';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

const Layout = () => {
    const [move, setMove] = useState(false);

    useEffect(() => {
        setMove(true);
        let timeout: any = setTimeout(() => {
            setMove(false);
        }, 2000);

        return () => {
            timeout = null;
        }
    }, []);

    return (
        <div className="layout">
            <Sider />
            <div className="layout-content">
                <Header />
                <div className="layout-header-blank"></div>
                <div className="layout-navbar-blank"></div>

                <Navbar />

                <CSSTransition in={move} classNames="move" timeout={1000}>
                    <div className="layout-main">
                        <div className="layout-main-box">
                            <Outlet />
                        </div>
                    </div>
                </CSSTransition>

                <div className="layout-footer">Ant Design Admin ©2020 zuiidea</div>
            </div>
        </div>
    );
}

export default Layout;