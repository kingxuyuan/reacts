/* eslint-disable no-restricted-globals */
/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-02-25 12:27:07
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-17 13:45:04
 * @Description: 
 */
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { getInitialState } from '@/store/user/userInfo/userInfoReducer';

import './index.scss';

interface WithWatermarkProps {

}

const WithWatermark: FC<WithWatermarkProps> = (props) => {
    const { userInfo: { name } } = useSelector(getInitialState);

    let can = document.createElement('canvas');
    let div = document.createElement('div');
    // 设置canvas画布大小
    can.width = 280;
    can.height = 220;

    let cans: any = can.getContext('2d');
    cans.rotate(-20 * Math.PI / 180); // 水印旋转角度
    cans.font = '16px Vedana';
    cans.fillStyle = '#666666';
    cans.textAlign = 'center';
    cans.textBaseline = 'Middle';
    cans.fillText(name, can.width / 3, can.height / 2); // 水印在画布的位置x，y轴
    // str2 && cans.fillText(str2, can.width / 2, can.height + 22)

    div.style.background = 'url(' + can.toDataURL('image/png') + ') left top repeat';
    return (
        <div className="withwatermark" style={{ background: `url(${can.toDataURL('image/png')}) left top repeat` }}></div >
    );
}

export default WithWatermark;