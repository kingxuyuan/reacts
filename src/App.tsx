/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-24 13:01:43
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-16 19:13:15
 * @Description: 
 */
import { ComponentType, FC, memo, useEffect } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { compose } from 'redux';
// import { useDispatch, useSelector, batch } from 'react-redux';
import { useAppDispatch } from '@/store';

import store from '@/store';
import { fetchConfig } from '@/store/config/configActions';

import routes from '@/router/routes';
import WithAntdConfig from '@/components/HOC/WithAntConfig';
import WithReduxProvider from '@/components/HOC/WithReduxProvider';

console.log(process.env);

interface AppProps { }

const MainRoute = () => useRoutes(routes);

const MainRouter = () => {
    const dispath = useAppDispatch();

    useEffect(() => {
        dispath(fetchConfig());
        // batch(() => {
        //     dispatch(increment());
        //     dispatch(increment());
        // })
    }, [])

    return (
        <BrowserRouter>
            <MainRoute />
        </BrowserRouter>
    )
}

const renderCom: (C: ComponentType) => ComponentType = compose(WithReduxProvider(store), WithAntdConfig);

const MainComponent = renderCom(memo(MainRouter));

const App: FC<AppProps> = (props) => <MainComponent />

export default memo(App);