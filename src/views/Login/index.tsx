/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-24 15:05:25
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-25 18:11:00
 * @Description: 
 */
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectConfig } from '@/store/config/configReducer';

import './index.scss';

interface indexProps {

}

const Login: FC<indexProps> = (props) => {
    const configs = useSelector(selectConfig);

    return (
        <div className="login">
            <h1>login</h1>
            <Link to='/home'>首页</Link>
            <div>{configs?.android_download_link}</div>
        </div>
    );
}

export default Login;