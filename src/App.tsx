/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-24 13:01:43
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-26 19:00:00
 * @Description: 
 */
import { ComponentType, FC, memo, useEffect } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { compose } from 'redux';
import { useDispatch, useSelector, batch } from 'react-redux';
import { configActions } from '@/store/config/configActions';

// import store from '@/store';
import store from '@/saga';
import routes from '@/router/routes';
import WithReduxProvider from '@/components/HOC/WithReduxProvider';


interface AppProps {}

const MainRoute = () => useRoutes(routes);

const MainRouter = () => {
    const dispath = useDispatch();
    
    const successFn = () => {
        console.log('获取数据成功！');
    }
    
    useEffect(() => {
        dispath(configActions(successFn))
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

const renderCom: (C: ComponentType) => ComponentType = compose(WithReduxProvider(store));

const MainComponent = renderCom(memo(MainRouter));

const App: FC<AppProps> = (props) => <MainComponent />

export default memo(App);