/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-25 13:19:15
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-25 15:34:44
 * @Description: 404
 */
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface NotFoundProps {

}

const NotFound: FC<NotFoundProps> = (props) => {
    return (
        <div className="notFound">
            <h1>页面丢失了</h1>
            <Link to='/home'>首页</Link>
        </div>
    );
}

export default NotFound;