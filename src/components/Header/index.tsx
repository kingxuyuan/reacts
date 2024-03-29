/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-27 15:18:26
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-02-25 13:50:50
 * @Description: 
 */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, Dropdown, Badge, Input } from 'antd';
import { UserOutlined, SettingOutlined, PoweroffOutlined, BellOutlined, SearchOutlined } from '@ant-design/icons';
import { clearToken, getInitialState } from '@/store/user/userReducer';

import Notice from '../Notice';

import './index.scss';
import avatar from '@/assets/images/avatar.png';

interface indexProps { };

const menus = [
    { id: 0, title: '个人中心', path: '/mine', icon: <UserOutlined /> },
    { id: 1, title: '个人设置', path: '/home', icon: <SettingOutlined /> },
    { id: 2, title: '退出登录', path: '', icon: <PoweroffOutlined /> },
]

const Header = (props: indexProps) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { userInfo } = useSelector(getInitialState);

    const [showSearchInput, setShowSearchInput] = useState(false);

    const showSearchInputFn = () => {
        setShowSearchInput(!showSearchInput);
    };

    const handleClick = ({ key }: any) => {
        if (menus[key].id === 2) {
            dispatch(clearToken());
        }
        else menus[key].path && navigate(menus[key].path, { replace: true });
    };

    return (
        <div className="layout-header">
            <div className="layout-header-left">
                <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="" />
                <h1>后台管理系统</h1>
            </div>
            <div className="layout-header-right">
                <div className="breadcrumb"></div>

                <div className="info-nav">
                    <div className="info-nav-item search">
                        <div className="search-icon" onClick={showSearchInputFn}>
                            <SearchOutlined />
                        </div>
                        <div className="input-box" style={{ width: `${showSearchInput ? 200 : 0}px` }}>
                            <Input />
                        </div>
                    </div>
                    <div className="info-nav-item notice">
                        <Dropdown
                            overlay={<Notice />}
                            trigger={['click']}
                            placement="bottomRight"
                            overlayClassName="tabs"
                        >
                            <Badge count={999}>
                                <BellOutlined style={{ color: '#fff' }} />
                            </Badge>
                        </Dropdown>
                    </div>
                    <div className="info-nav-item user-info">
                        <Dropdown
                            overlay={
                                <Menu onClick={handleClick}>
                                    {
                                        menus.map(item => (
                                            <Menu.Item key={item.id} icon={item.icon}>{item.title}</Menu.Item>
                                        ))
                                    }
                                </Menu>
                            }
                            overlayClassName="users"
                            placement="bottomCenter"
                        >
                            <div className='avatar'>
                                <img src={avatar} alt="" />
                                <span>{userInfo.name}</span>
                            </div>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;