/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-27 15:18:26
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-27 17:51:08
 * @Description: 
 */
import { useState } from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import routes, { RouterTypes } from '@/router/routes';

import './index.scss';

const { SubMenu } = Menu;
const MENUS = routes[0].children?.filter((item: any, idx: number) => idx > 0);

const renderMenu = (menu: any) => {

    return menu.map((item: RouterTypes) => {

        if (item.children) {
            const subMenus = item?.children?.filter((item: any, idx: number) => idx > 0);

            return (
                <SubMenu key={item.path} title={item?.title} icon={item?.icon}>
                    {renderMenu(subMenus)}
                </SubMenu>
            )
        }

        return (
            <Menu.Item key={item.path} title={item?.title} icon={item?.icon}>
                <Link to={item.path}>{item?.title}</Link>
            </Menu.Item>
        )
    })
}

const Sider = () => {
    const { pathname } = useLocation();
    const paths = MENUS?.map(item => item.path) as string[];
    const [openKeys, setOpenKeys] = useState(paths?.filter(item => pathname.includes(item)) as string[]);
    const [selectedKeys, setSelectedKeys] = useState([pathname]);
    
    const handleClick = (e: any) => {
        setSelectedKeys(e.key);
    };

    const onOpenChange = (keys: string[]) => {
        // const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1) as string;
        // if (paths.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        // } else {
        //     setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        // }
    }

    return (
        <div className="layout-sider">
            <div className="layout-sider-wrap">
                <Menu
                    style={{ width: 208 }}
                    mode="inline"
                    openKeys={openKeys}
                    selectedKeys={selectedKeys}
                    onClick={(e) => handleClick(e)}
                    onOpenChange={(e) => onOpenChange(e)}
                >
                    {renderMenu(MENUS)}
                </Menu>
            </div>
        </div>
    );
}

export default Sider;