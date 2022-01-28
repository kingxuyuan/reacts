/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-27 15:18:26
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-28 18:53:01
 * @Description: 
 */
import { useState } from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import routes, { MENUS, RouterTypes } from '@/router/routes';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import './index.scss';

const { SubMenu } = Menu;

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
    const [fold, setFold] = useState(false);

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

    const foldClick = () => {
        setFold(!fold);
    }

    return (
        <>
            <div className="layout-sider" style={{ width: `${fold ? 50 : 208}px` }}>
                <div className="layout-sider-wrap">
                    <Menu
                        mode="inline"
                        openKeys={openKeys}
                        selectedKeys={selectedKeys}
                        inlineCollapsed={fold}
                        onClick={(e) => handleClick(e)}
                        onOpenChange={(e) => onOpenChange(e)}
                    >
                        {renderMenu(MENUS)}
                    </Menu>
                </div>

                <div className="fold">
                    <div className="fold-box" onClick={foldClick}>
                        {
                            fold ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                        }
                    </div>
                </div>
            </div>

            <div className="layout-sider-blank" style={{ width: `${fold ? 50 : 208}px` }}></div>
        </>
    );
}

export default Sider;