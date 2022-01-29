/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-24 15:05:25
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-29 14:57:11
 * @Description: 
 */
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from 'antd';

import { setToken } from '@/store/config/configReducer';

import './index.scss';

interface indexProps { }

const Login = (props: indexProps) => {
    const [httpSataus, setHttpStatus] = useState(false);
    const dispath = useDispatch();
    const navigate = useNavigate();
    const { search } = useLocation();
    const redirctPath = search?.split('=')[1];

    const loginFn = () => {

        setHttpStatus(true);

        setTimeout(() => {
            setHttpStatus(false);
            dispath(setToken('sadsadsadsadds'));
            navigate(redirctPath ? redirctPath : '/home', { replace: true });
        }, 2000);
    }

    return (
        <div className="login">
            <br />
            <br />
            <br />
            <h1>login</h1>
            <br />
            <Link to='/home'>返回首页</Link>
            <br />
            <br />
            <Button type="primary" loading={httpSataus} onClick={loginFn}>{httpSataus ? '登录中' : '立即登录'}</Button>
        </div>
    );
}

export default Login;