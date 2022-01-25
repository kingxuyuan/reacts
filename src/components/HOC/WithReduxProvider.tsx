/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-25 15:59:17
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-25 16:08:36
 * @Description: 高阶组件redux
 */
import {  ComponentType } from 'react';
import { Provider } from 'react-redux';
import { Store, AnyAction } from 'redux';

function WithReduxProvider<Props, Action=AnyAction> (store: Store<Action>) {
    return (ContainerComponent: ComponentType<Props>) => {
        const Component: ComponentType<Props> = (props) => (
            <Provider store={store}>
                <ContainerComponent {...props} />
            </Provider>
        );

        Component.displayName = `withReduxProvider(${ContainerComponent.displayName || ContainerComponent.name})`;

        return Component;
    }
}

export default WithReduxProvider;