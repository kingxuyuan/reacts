/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-25 16:16:23
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-16 17:43:31
 * @Description: 状态管理
 */
import { useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import logger from 'redux-logger';

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => process.env.NODE_ENV === 'development' ? getDefaultMiddleware().concat(logger) : getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;