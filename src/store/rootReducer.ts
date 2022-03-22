/*
 * @Author: 大侠传授两招吧
 * @Date: 2022-01-25 16:33:15
 * @LastEditors: 大侠传授两招吧
 * @LastEditTime: 2022-03-17 13:42:57
 * @Description: 
 */
import { combineReducers } from '@reduxjs/toolkit';
import configReducer from './config/configReducer';
import userReducer from './user';

export const rootReducer = combineReducers({
    config: configReducer,
    user: userReducer
});

export type RootState = ReturnType<typeof rootReducer>;