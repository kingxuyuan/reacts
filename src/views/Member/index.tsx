/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-02-05 15:21:18
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-02-05 16:01:40
 * @Description: 
 */
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

interface indexProps { }

const Member: FC<indexProps> = (props) => {
    return (
        <div className="member">
            <Outlet />
        </div>
    );
}

export default Member;