/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-25 19:35:18
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-27 12:09:00
 * @Description: saga 状态管理
 */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reduxLogger from 'redux-logger';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Mount it on the Store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Run the saga
sagaMiddleware.run(rootSaga);

export default store;