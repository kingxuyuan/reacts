/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-02-05 14:26:30
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-02-05 14:51:55
 * @Description: 
 */
import { FC, useState } from 'react';
import { Tabs } from 'antd';

import './index.scss';

interface indexProps { };

const { TabPane } = Tabs;

const Notice: FC<indexProps> = (props) => {
    const [active, setActive] = useState('1');

    const callback = (key: any) => {
        setActive(key);
    };

    return (
        <div className="notice">
            <Tabs defaultActiveKey={active} onChange={callback}>
                <TabPane tab="提现(10)" key='1'>
                    Content of Tab Pane 1
                </TabPane>
                <TabPane tab="充值(20)" key='2'>
                    Content of Tab Pane 2
                </TabPane>
            </Tabs>

            <div className="notice-btns">
                <div>
                    清空
                    <span>{parseInt(active) === 1 ? '提现' : '充值'}</span>
                </div>
                <div>查看更多</div>
            </div>
        </div>
    );
}

export default Notice;