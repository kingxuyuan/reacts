/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-02-05 18:56:07
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-02-05 19:04:47
 * @Description: 
 */
import { ComponentType } from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';

function WithAntdConfig<Props>(WapperedComponent: ComponentType<Props>) {
    const Component: ComponentType<Props> = (props: Props) => {
        return (
            <ConfigProvider locale={zhCN}>
                <WapperedComponent {...props} />
            </ConfigProvider>
        )
    }

    Component.displayName = `WapperedComponent${WapperedComponent.displayName || WapperedComponent.name}`;
    return Component;
}

export default WithAntdConfig;