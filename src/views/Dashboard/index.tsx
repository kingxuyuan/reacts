/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-27 16:10:18
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-02-05 15:20:49
 * @Description: 
 */
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

interface indexProps {}

const Dashboard: FC<indexProps> = (props) => {
    return (
        <div className="dashboard">
            <Outlet />
        </div>
    );
}

export default Dashboard;