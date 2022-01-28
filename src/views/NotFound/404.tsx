/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-25 13:19:15
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-28 17:54:47
 * @Description: 404
 */
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Result, Button } from 'antd';

import './index.scss';

interface NotFoundProps {

}

const NotFound: FC<NotFoundProps> = (props) => {
    return (
        <div className="notFound">
            <Result
                status="404"
                title="您访问的页面不存在"
                subTitle="Sorry, the page you visited does not exist."
                extra={
                    <Button type="primary">
                        <Link to={'/home'}>Back Home</Link>
                    </Button>
                }
            />
        </div>
    );
}

export default NotFound;