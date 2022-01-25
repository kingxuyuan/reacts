/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-24 15:12:30
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-25 14:36:25
 * @Description: 
 */
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import './index.scss';

interface LayoutProps {

}

const Layout: FC<LayoutProps> = (props) => {
    return (
        <div className="layout">
            <h1>内页的布局</h1>
            <Outlet />
        </div>
    );
}

export default Layout;