/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-25 16:16:23
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-01-25 16:31:47
 * @Description: 状态管理
 */

import { configureStore } from '@reduxjs/toolkit';

import configReducer from './config/configReducer';

const store =  configureStore({
    reducer: {
        config: configReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;