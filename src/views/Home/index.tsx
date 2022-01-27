/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-24 14:17:08
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-27 14:23:27
 * @Description: 
 */
import { FC, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { selectConfig } from '@/store/config/configReducer';
import { useSelector } from 'react-redux';

import './index.scss';

interface indexProps {}

const Home: FC<indexProps> = (props) => {
    const configs = useSelector(selectConfig);
    console.log(333333333);
    
    useEffect(() => {
        console.log(configs);
    }, [configs])
    
    return (
        <div className="home">
            <h1>Home</h1>
            <Link to='/login'>登录</Link>
            <br />
            <Link to='/mine'>我的</Link>
            <br />
            <Link to='/loginss'>错误页面</Link>
            <p>
            {
                configs?.android_download_link
            }
            </p>
            <h3>s</h3>
        </div>
    );
}

export default memo(Home);