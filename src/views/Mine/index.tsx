/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-24 14:23:41
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-27 15:11:59
 * @Description: 
 */
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface indexProps {

}

const index: FC<indexProps> = (props) => {
    console.log('mine');

    return (
        <div className="index">
            <h1>Mine</h1>
            <Link to="/home">返回首页</Link>
        </div>
    );
}

export default index;
