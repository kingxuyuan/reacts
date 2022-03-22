/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-27 15:18:26
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-22 13:33:04
 * @Description: 
 */
import { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { MENUS, RouterTypes } from '@/router/routes';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import { useAppDispatch } from '@/store';
import { setMenuFold } from '@/store/config/configReducer';
import { menuWidth } from '@/utils/tools';

import './index.scss';

const { SubMenu } = Menu;

// 菜单递归遍历
const renderMenu = (menu: any) => {
    return menu.map((item: RouterTypes) => {
        if (item.children) {
            return (
                <SubMenu key={item.path} title={item?.label} icon={item?.icon}>
                    {renderMenu(item?.children)}
                </SubMenu>
            )
        }
        return (
            !item.noMenu && <Menu.Item key={item.path} title={item?.label} icon={item?.icon}>
                <Link to={item.path}>{item?.label}</Link>
            </Menu.Item>
        )
    })
};

const paths = MENUS.map((item: any) => item?.path) as string[];
const filterOpenkey = (path: string) => paths?.filter(item => path.includes(item));

const Sider = () => {
    const dispatch = useAppDispatch();

    const { pathname } = useLocation();
    const [openKeys, setOpenKeys] = useState(filterOpenkey(pathname) as string[]);
    const [selectedKeys, setSelectedKeys] = useState([pathname]);
    const [fold, setFold] = useState(false);

    const handleClick = (e: any) => {
        setSelectedKeys(e.key);
    };

    const onOpenChange = (keys: string[]) => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1) as string;

        if (paths.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    const foldClick = () => {
        setFold(!fold);
        dispatch(setMenuFold(!fold));
    };

    useEffect(() => {
        setSelectedKeys([pathname]);
        setOpenKeys(filterOpenkey(pathname));
    }, [pathname]);

    return (
        <>
            <div className="layout-sider" style={{ width: `${menuWidth(fold)}px` }}>
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

            <div className="layout-sider-blank" style={{ width: `${menuWidth(fold)}px` }}></div>
        </>
    );
}

export default Sider;