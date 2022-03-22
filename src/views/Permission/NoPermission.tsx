/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-03-18 14:44:02
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-18 14:46:27
 * @Description: 无权限页面
 */
import { FC } from 'react';
import './nopermission.scss';

interface permissionProps {

}

const NoPermission: FC<permissionProps> = (props) => {
    return (
        <div className="nopermission">
            <img src="https://img.zcool.cn/community/015e1a554be28b000001bf7208ef3f.jpg@1280w_1l_2o_100sh.jpg" alt="" />
        </div>
    );
};

export default NoPermission;