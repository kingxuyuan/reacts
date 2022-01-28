/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-24 15:12:30
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-28 13:19:31
 * @Description: 
 */
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import './index.scss';
import Sider from '@/components/Sider';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

interface LayoutProps {}

const Layout: FC<LayoutProps> = (props) => {
    return (
        <div className="layout">
            <Sider />
            <div className="layout-content">
                <Header />
                <div className="layout-header-blank"></div>
                
                <Navbar />

                <div className="layout-main">
                    <Outlet />
                </div>
                <div className="layout-footer">Ant Design Admin ©2020 zuiidea</div>
            </div>
        </div>
    );
}

export default Layout;